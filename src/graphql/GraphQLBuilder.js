"use strict";
exports.__esModule = true;
exports.queryBuilder = function (graphQLEntity, query, requestedFields, typedFields) {
    var fields = Object.keys(query).reduce(function (acc, elm) {
        if (query[elm] === '' || query[elm] === null || query[elm] === undefined)
            return acc;
        if (typedFields.includes(elm) || typeof elm === 'object' || typeof elm === 'number' || typeof elm === 'boolean') {
            acc = acc + (elm + ": " + query[elm]);
            return acc;
        }
        acc = acc + (elm + ": \"" + query[elm] + "\"");
    }, '');
    return "{\n    " + graphQLEntity + "(\n      " + fields + "\n    ) {\n      " + requestedFields + "\n    }\n  }";
};
