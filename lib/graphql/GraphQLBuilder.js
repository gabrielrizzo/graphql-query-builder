"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryBuilder = (graphQLEntity, query, requestedFields, typedFields) => {
    const fields = Object.keys(query).reduce((acc, elm) => {
        if (query[elm] === '' || query[elm] === null || query[elm] === undefined)
            return acc;
        if (typedFields) {
            acc = acc + parseFieldsWithTypedFields(query, elm, typedFields);
            return acc;
        }
        acc = acc + parseFields(query, elm);
        return acc;
    }, '');
    return `{
    ${graphQLEntity}(
      ${fields}
    ) {
      ${requestedFields}
    }
  }`;
};
const parseFields = (queryObject, attribute) => {
    if (typeof queryObject[attribute] === 'object' || typeof queryObject[attribute] === 'number' || typeof queryObject[attribute] === 'boolean') {
        return `${attribute}: ${queryObject[attribute]}`;
    }
    return `${attribute}: "${queryObject[attribute]}"`;
};
const parseFieldsWithTypedFields = (queryObject, attribute, typedFields) => {
    if (typedFields.includes(attribute) || typeof queryObject[attribute] === 'object' || typeof queryObject[attribute] === 'number' || typeof queryObject[attribute] === 'boolean') {
        return `${attribute}: ${queryObject[attribute]}`;
    }
    return `${attribute}: "${queryObject[attribute]}"`;
};
