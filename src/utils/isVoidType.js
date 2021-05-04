"use strict";
exports.__esModule = true;
exports.isVoidType = void 0;
var isVoidType = function (type) {
    if (type.dataType === 'void') {
        return true;
    }
    else if (type.dataType === 'refAlias') {
        return exports.isVoidType(type.type);
    }
    else {
        return false;
    }
};
exports.isVoidType = isVoidType;
