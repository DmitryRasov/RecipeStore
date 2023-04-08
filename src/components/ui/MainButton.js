"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MainButton_module_css_1 = __importDefault(require("../styles/MainButton.module.css"));
var MainButton = function (_a) {
    var buttonTitle = _a.buttonTitle, role = _a.role, props = __rest(_a, ["buttonTitle", "role"]);
    return (react_1.default.createElement("button", __assign({}, props, { className: role === 'ingredient' ? "".concat(MainButton_module_css_1.default.btn, " ").concat(MainButton_module_css_1.default.ingredient) : "".concat(MainButton_module_css_1.default.btn, " ").concat(MainButton_module_css_1.default.favorite) }), buttonTitle));
};
exports.default = MainButton;
//# sourceMappingURL=MainButton.js.map