"use strict";

exports.__esModule = true;

exports.default = function ( babel ) {
  const { types: t } = babel;
  return {
    name: "es2015-template-literals-reducer", // not required
    visitor: {
      ExpressionStatement( path ) {
        if ( path.node.expression.type === "AssignmentExpression" ) {
          const right = path.node.expression.right;
          if ( right.type === "TemplateLiteral" ) {
            const val = right.quasis[ 0 ].value.raw;
            const newVal = val.replace( /\n/gim, " " );
            right.quasis[ 0 ].value.raw = newVal.replace( /(\s){2,}/gi, " " ).trim();
            right.quasis[ 0 ].value.cooked = right.quasis[ 0 ].value.raw;
          }
        }
      }
    }
  }
}
