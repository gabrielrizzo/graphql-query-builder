"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GraphQLBuilder_1 = require("./graphql/GraphQLBuilder");
console.log(GraphQLBuilder_1.queryBuilder('foo', { a: 'a', b: '' }, 'status, message', ['a']));
