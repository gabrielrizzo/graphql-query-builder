"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryBuilder = (graphQLEntity, query, requestedFields, typedFields) => {
    const fields = Object.keys(query).reduce((acc, elm) => {
        if (query[elm] === '' || query[elm] === null || query[elm] === undefined)
            return acc;
        if (typedFields.includes(elm) || typeof elm === 'object' || typeof elm === 'number' || typeof elm === 'boolean') {
            acc = acc + `${elm}: ${query[elm]}`;
            return acc;
        }
        acc = acc + `${elm}: "${query[elm]}"`;
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
