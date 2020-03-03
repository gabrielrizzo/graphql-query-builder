export const queryBuilder = (graphQLEntity: string, query: any, requestedFields: string, typedFields?: Array<string>) : string => {
  const fields: string = Object.keys(query).reduce((acc: string, elm: string) : string => {
    if (query[elm] === '' || query[elm] === null || query[elm] === undefined) return acc

    if (typedFields) {
      acc = acc + parseFieldsWithTypedFields(query, elm, typedFields)
      return acc
    }

    acc = acc + parseFields(query, elm)
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


const parseFields = (queryObject: object, attribute: string) : string => {
  if (typeof queryObject[attribute] === 'object') {
    return `${attribute}: ${JSON.stringify(queryObject[attribute])}`
  }

  if (typeof queryObject[attribute] === 'number' || typeof queryObject[attribute] === 'boolean') {
    return `${attribute}: ${queryObject[attribute]}`
  }

  return  `${attribute}: "${queryObject[attribute]}"`
}

const parseFieldsWithTypedFields = (queryObject: object, attribute: string, typedFields: Array<string>) : string => {
  if (typeof queryObject[attribute] === 'object') {
    return `${attribute}: ${JSON.stringify(queryObject[attribute])}`
  }

  if (typedFields.includes(attribute) || typeof queryObject[attribute] === 'number' || typeof queryObject[attribute] === 'boolean') {
    return `${attribute}: ${queryObject[attribute]}`
  }

  return  `${attribute}: "${queryObject[attribute]}"`
}
