export const queryBuilder = (graphQLEntity: string, query: any, requestedFields: string, typedFields?: Array<string>) : string => {
  const fields: string = Object.keys(query).reduce((acc: string, elm: string) : string => {
    if (query[elm] === '' || query[elm] === null || query[elm] === undefined) return acc

    if (typedFields.includes(elm) || typeof elm === 'object' || typeof elm === 'number' || typeof elm === 'boolean') {
      acc = acc + `${elm}: ${query[elm]}`
      return acc
    }

    acc = acc + `${elm}: "${query[elm]}"`
    return acc
  }, '')

  return `{
    ${graphQLEntity}(
      ${fields}
    ) {
      ${requestedFields}
    }
  }`
}
