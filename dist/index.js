"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
Object.defineProperty(exports, "withMessage", {
  enumerable: true,
  get: function () {
    return _withMessage.default;
  }
});
var _withMessage = _interopRequireDefault(require("./withMessage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = () => {
  global.expect = (0, _withMessage.default)(global.expect);
};
exports.default = _default;