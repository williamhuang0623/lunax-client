webpackHotUpdate_N_E("pages/workVFX",{

/***/ "./workVFX/Index.js":
/*!**************************!*\
  !*** ./workVFX/Index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ \"./workVFX/style.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_ticker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-ticker */ \"./node_modules/react-ticker/dist/index.es.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ryancho/Desktop/newkino-client/workVFX/Index.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction Filters(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useState\"])({\n    \"allButton\": false,\n    \"VFXButton\": false,\n    \"filmButton\": false\n  }),\n      filterSelected = _useState[0],\n      setFilter = _useState[1];\n\n  var filterPressed = function filterPressed(e) {\n    var id = e.target.getAttribute('id');\n    console.log(i);\n\n    if (id === 'allButton') {\n      console.log(e.target.getAttribute('id'));\n      setFilter(_objectSpread(_objectSpread({}, filterSelected), {}, Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, id, true)));\n    } else if (id === 'VFXButton') {\n      setFilter(_objectSpread(_objectSpread({}, filterSelected), {}, Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, id, true)));\n    } else if (id === 'filmButton') {\n      setFilter(_objectSpread(_objectSpread({}, filterSelected), {}, Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, id, true)));\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"main\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"filters\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"button\", {\n        id: \"allButton\",\n        onClick: filterPressed,\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {\n          src: filterSelected[\"allButton\"] ? \"/workVFX/allSelected.png\" : \"/workVFX/all.png\",\n          width: 70,\n          height: 30,\n          alt: \"newkino_logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"button\", {\n        id: \"VFXButton\",\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {\n          src: \"/workVFX/VFX.png\",\n          width: 70,\n          height: 30,\n          alt: \"newkino_logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"button\", {\n        id: \"filmButton\",\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {\n          src: \"/workVFX/film.png\",\n          width: 70,\n          height: 30,\n          alt: \"newkino_logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      id: _style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash,\n      children: _style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"]\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Filters, \"fxXJIcOdUq4H6IKniEtevP1MtE8=\");\n\n_c = Filters;\n\nfunction VFXTable(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n    className: \"main\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 9\n  }, this);\n}\n\n_c2 = VFXTable;\n\nvar WorkVFX = /*#__PURE__*/function (_React$Component) {\n  Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(WorkVFX, _React$Component);\n\n  var _super = _createSuper(WorkVFX);\n\n  function WorkVFX(props) {\n    Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, WorkVFX);\n\n    return _super.call(this, props);\n  }\n\n  Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(WorkVFX, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"main\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"header\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"image-wrapper\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {\n              src: \"/global/logo.jpg\",\n              width: 81,\n              height: 81,\n              alt: \"newkino_logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"filterSection\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(Filters, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          id: _style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash,\n          children: _style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"]\n        }, void 0, false, void 0, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return WorkVFX;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkVFX);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Filters\");\n$RefreshReg$(_c2, \"VFXTable\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd29ya1ZGWC9JbmRleC5qcz9kNjYyIl0sIm5hbWVzIjpbIkZpbHRlcnMiLCJwcm9wcyIsInVzZVN0YXRlIiwiZmlsdGVyU2VsZWN0ZWQiLCJzZXRGaWx0ZXIiLCJmaWx0ZXJQcmVzc2VkIiwiZSIsImlkIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImkiLCJWRlhUYWJsZSIsIldvcmtWRlgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF5QjtBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUN4QztBQUNJLGlCQUFhLEtBRGpCO0FBRUksaUJBQWEsS0FGakI7QUFHSSxrQkFBYztBQUhsQixHQUR3QyxDQUR2QjtBQUFBLE1BQ2RDLGNBRGM7QUFBQSxNQUNFQyxTQURGOztBQVNyQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUN6QixRQUFNQyxFQUFFLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxZQUFULENBQXNCLElBQXRCLENBQVg7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlDLENBQVo7O0FBQ0EsUUFBSUwsRUFBRSxLQUFLLFdBQVgsRUFBd0I7QUFDcEJHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixJQUF0QixDQUFaO0FBQ0FMLGVBQVMsaUNBQ0ZELGNBREUsdUpBRUpJLEVBRkksRUFFQyxJQUZELEdBQVQ7QUFJSCxLQU5ELE1BTU8sSUFBSUEsRUFBRSxLQUFLLFdBQVgsRUFBd0I7QUFDM0JILGVBQVMsaUNBQ0ZELGNBREUsdUpBRUpJLEVBRkksRUFFQyxJQUZELEdBQVQ7QUFJSCxLQUxNLE1BS0EsSUFBSUEsRUFBRSxLQUFLLFlBQVgsRUFBeUI7QUFDNUJILGVBQVMsaUNBQ0ZELGNBREUsdUpBRUpJLEVBRkksRUFFQyxJQUZELEdBQVQ7QUFJSDtBQUNKLEdBcEJEOztBQXFCQSxzQkFDSTtBQUFBLGtHQUFlLE1BQWY7QUFBQSw0QkFDSTtBQUFBLG9HQUFlLFNBQWY7QUFBQSw4QkFDSTtBQUFRLFVBQUUsRUFBQyxXQUFYO0FBQXVCLGVBQU8sRUFBRUYsYUFBaEM7QUFBQTtBQUFBLCtCQUNJLHFFQUFDLGtEQUFEO0FBQU8sYUFBRyxFQUFFRixjQUFjLENBQUMsV0FBRCxDQUFkLEdBQThCLDBCQUE5QixHQUEyRCxrQkFBdkU7QUFBMkYsZUFBSyxFQUFFLEVBQWxHO0FBQXNHLGdCQUFNLEVBQUUsRUFBOUc7QUFBa0gsYUFBRyxFQUFDO0FBQXRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFRLFVBQUUsRUFBQyxXQUFYO0FBQUE7QUFBQSwrQkFDSSxxRUFBQyxrREFBRDtBQUFPLGFBQUcsRUFBQyxrQkFBWDtBQUE4QixlQUFLLEVBQUUsRUFBckM7QUFBeUMsZ0JBQU0sRUFBRSxFQUFqRDtBQUFxRCxhQUFHLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQU9JO0FBQVEsVUFBRSxFQUFDLFlBQVg7QUFBQTtBQUFBLCtCQUNJLHFFQUFDLGtEQUFEO0FBQU8sYUFBRyxFQUFDLG1CQUFYO0FBQStCLGVBQUssRUFBRSxFQUF0QztBQUEwQyxnQkFBTSxFQUFFLEVBQWxEO0FBQXNELGFBQUcsRUFBQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUJIOztHQS9DUUgsTzs7S0FBQUEsTzs7QUFpRFQsU0FBU2EsUUFBVCxDQUFrQlosS0FBbEIsRUFBeUI7QUFDckIsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7TUFOUVksUTs7SUFRSEMsTzs7Ozs7QUFDRixtQkFBWWIsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWxCOzs7OzZCQUVRO0FBQ0wsMEJBQ0k7QUFBQSxzR0FBZSxNQUFmO0FBQUEsZ0NBQ0k7QUFBQSx3R0FBZSxRQUFmO0FBQUEsaUNBQ0k7QUFBQSwwR0FBZSxlQUFmO0FBQUEsbUNBQ0kscUVBQUMsa0RBQUQ7QUFBTyxpQkFBRyxFQUFDLGtCQUFYO0FBQThCLG1CQUFLLEVBQUUsRUFBckM7QUFBeUMsb0JBQU0sRUFBRSxFQUFqRDtBQUFxRCxpQkFBRyxFQUFDO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU1JO0FBQUEsd0dBQWUsZUFBZjtBQUFBLGlDQUNJLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFjSDs7OztFQXBCaUJjLDRDQUFLLENBQUNDLFM7O0FBdUJiRixzRUFBZiIsImZpbGUiOiIuL3dvcmtWRlgvSW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3b3JrVkZYU3R5bGVzIH0gZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgVGlja2VyIGZyb20gJ3JlYWN0LXRpY2tlcic7XG5cblxuZnVuY3Rpb24gRmlsdGVycyhwcm9wcykgIHtcbiAgICBjb25zdCBbZmlsdGVyU2VsZWN0ZWQsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgICAgXCJhbGxCdXR0b25cIjogZmFsc2UsXG4gICAgICAgICAgICBcIlZGWEJ1dHRvblwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZmlsbUJ1dHRvblwiOiBmYWxzZVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IGZpbHRlclByZXNzZWQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgY29uc29sZS5sb2coaSlcbiAgICAgICAgaWYgKGlkID09PSAnYWxsQnV0dG9uJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgICAgICAgIHNldEZpbHRlcih7XG4gICAgICAgICAgICAgICAgLi4uZmlsdGVyU2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgW2lkXTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGlkID09PSAnVkZYQnV0dG9uJykge1xuICAgICAgICAgICAgc2V0RmlsdGVyKHtcbiAgICAgICAgICAgICAgICAuLi5maWx0ZXJTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBbaWRdOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaWQgPT09ICdmaWxtQnV0dG9uJykge1xuICAgICAgICAgICAgc2V0RmlsdGVyKHtcbiAgICAgICAgICAgICAgICAuLi5maWx0ZXJTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBbaWRdOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhbGxCdXR0b25cIiBvbkNsaWNrPXtmaWx0ZXJQcmVzc2VkfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZmlsdGVyU2VsZWN0ZWRbXCJhbGxCdXR0b25cIl0gPyBcIi93b3JrVkZYL2FsbFNlbGVjdGVkLnBuZ1wiIDogXCIvd29ya1ZGWC9hbGwucG5nXCJ9IHdpZHRoPXs3MH0gaGVpZ2h0PXszMH0gYWx0PVwibmV3a2lub19sb2dvXCIvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJWRlhCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi93b3JrVkZYL1ZGWC5wbmdcIiB3aWR0aD17NzB9IGhlaWdodD17MzB9IGFsdD1cIm5ld2tpbm9fbG9nb1wiLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZmlsbUJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3dvcmtWRlgvZmlsbS5wbmdcIiB3aWR0aD17NzB9IGhlaWdodD17MzB9IGFsdD1cIm5ld2tpbm9fbG9nb1wiLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeD57d29ya1ZGWFN0eWxlc308L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFZGWFRhYmxlKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+IFxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY2xhc3MgV29ya1ZGWCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9nbG9iYWwvbG9nby5qcGdcIiB3aWR0aD17ODF9IGhlaWdodD17ODF9IGFsdD1cIm5ld2tpbm9fbG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVycyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57d29ya1ZGWFN0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrVkZYO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./workVFX/Index.js\n");

/***/ })

})