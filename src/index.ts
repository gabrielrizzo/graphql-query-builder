import { queryBuilder } from './graphql/GraphQLBuilder'

console.log(JSON.stringify(queryBuilder('foo', { w: 'a', b: '', c: 3, d: { a: 'hello' }}, 'status, message')))
