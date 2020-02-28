import { queryBuilder } from './graphql/GraphQLBuilder'

console.log(queryBuilder('foo', { a: 'a', b: ''}, 'status, message'))
