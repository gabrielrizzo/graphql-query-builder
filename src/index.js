"use strict";
exports.__esModule = true;
var GraphQLBuilder_1 = require("./graphql/GraphQLBuilder");
console.log(GraphQLBuilder_1.queryBuilder('foo', { w: 'a', b: '', c: 3, d: { a: 'hello' } }, 'status, message'));
