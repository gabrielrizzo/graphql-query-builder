"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GraphQLBuilder_1 = require("./graphql/GraphQLBuilder");
console.log(JSON.stringify(GraphQLBuilder_1.queryBuilder('foo', { w: 'a', b: '', c: 3, d: { a: 'hello' } }, 'status, message')));
