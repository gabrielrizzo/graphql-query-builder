"use strict";
exports.__esModule = true;
var GraphQLBuilder_1 = require("./graphql/GraphQLBuilder");
console.log(GraphQLBuilder_1.queryBuilder('foo', { a: 'a', b: '' }, 'status, message', ['a']));
