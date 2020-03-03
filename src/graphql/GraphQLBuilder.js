"use strict";
exports.__esModule = true;
exports.queryBuilder = function (graphQLEntity, query, requestedFields, typedFields) {
    var fields = Object.keys(query).reduce(function (acc, elm) {
        if (query[elm] === '' || query[elm] === null || query[elm] === undefined)
            return acc;
        if (typedFields) {
            acc = acc + parseFieldsWithTypedFields(query, elm, typedFields);
            return acc;
        }
        acc = acc + parseFields(query, elm);
        return acc;
    }, '');
    return "{\n    " + graphQLEntity + "(\n      " + fields + "\n    ) {\n      " + requestedFields + "\n    }\n  }";
};
var parseFields = function (queryObject, attribute) {
    if (typeof queryObject[attribute] === 'object' || typeof queryObject[attribute] === 'number' || typeof queryObject[attribute] === 'boolean') {
        return attribute + ": " + queryObject[attribute];
    }
    return attribute + ": \"" + queryObject[attribute] + "\"";
};
var parseFieldsWithTypedFields = function (queryObject, attribute, typedFields) {
    if (typedFields.includes(attribute) || typeof queryObject[attribute] === 'object' || typeof queryObject[attribute] === 'number' || typeof queryObject[attribute] === 'boolean') {
        return attribute + ": " + queryObject[attribute];
    }
    return attribute + ": \"" + queryObject[attribute] + "\"";
};
