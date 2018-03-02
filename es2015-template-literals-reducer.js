export default function ({Plugin, types: t}) {
  return new Plugin('es2015-template-literals-reducer', {
    visitor: {
      ExpressionStatement(node) {
        const right = node.expression.right;
        const val = right.quasis[ 0 ].value.raw;
        const newVal = val.replace(/\n/gim, " ");
        right.quasis[ 0 ].value.raw = newVal.replace( /(\s){2,}/gi, " ").trim();
      }
    }
  });
}
