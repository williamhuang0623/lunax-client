webpackHotUpdate_N_E("pages/workVFX",{

/***/ "./workVFX/Index.js":
/*!**************************!*\
  !*** ./workVFX/Index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ \"./workVFX/style.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_ticker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-ticker */ \"./node_modules/react-ticker/dist/index.es.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ryancho/Desktop/newkino-client/workVFX/Index.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction Filters(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useState\"])({\n    \"allButton\": false,\n    \"VFXButton\": false,\n    \"filmButton\": false\n  }),\n      filterSelected = _useState[0],\n      setFilter = _useState[1];\n\n  var filterPressed = function filterPressed(e) {\n    var id = e.currentTarget.getAttribute('id');\n\n    if (id === 'allButton') {\n      console.log(id);\n      setFilter(_objectSpread(_objectSpread({}, filterSelected), {}, Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, id, true)));\n    } else if (id === 'VFXButton') {\n      setFilter(_objectSpread(_objectSpread({}, filterSelected), {}, Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, id, true)));\n    } else if (id === 'filmButton') {\n      setFilter(_objectSpread(_objectSpread({}, filterSelected), {}, Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, id, true)));\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"main\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"filters\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"button\", {\n        id: \"allButton\",\n        onClick: filterPressed,\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {\n          src: filterSelected[\"allButton\"] ? \"/workVFX/allSelected.png\" : \"/workVFX/all.png\",\n          width: 70,\n          height: 30,\n          alt: \"newkino_logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"button\", {\n        id: \"VFXButton\",\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {\n          src: \"/workVFX/VFX.png\",\n          width: 70,\n          height: 30,\n          alt: \"newkino_logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"button\", {\n        id: \"filmButton\",\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {\n          src: \"/workVFX/film.png\",\n          width: 70,\n          height: 30,\n          alt: \"newkino_logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      id: _style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash,\n      children: _style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"]\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Filters, \"fxXJIcOdUq4H6IKniEtevP1MtE8=\");\n\n_c = Filters;\n\nfunction VFXTable(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n    className: \"main\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 9\n  }, this);\n}\n\n_c2 = VFXTable;\n\nvar WorkVFX = /*#__PURE__*/function (_React$Component) {\n  Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(WorkVFX, _React$Component);\n\n  var _super = _createSuper(WorkVFX);\n\n  function WorkVFX(props) {\n    Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, WorkVFX);\n\n    return _super.call(this, props);\n  }\n\n  Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(WorkVFX, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"main\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"header\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"image-wrapper\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {\n              src: \"/global/logo.jpg\",\n              width: 81,\n              height: 81,\n              alt: \"newkino_logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"filterSection\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(Filters, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          id: _style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash,\n          children: _style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"]\n        }, void 0, false, void 0, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return WorkVFX;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkVFX);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Filters\");\n$RefreshReg$(_c2, \"VFXTable\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd29ya1ZGWC9JbmRleC5qcz9kNjYyIl0sIm5hbWVzIjpbIkZpbHRlcnMiLCJwcm9wcyIsInVzZVN0YXRlIiwiZmlsdGVyU2VsZWN0ZWQiLCJzZXRGaWx0ZXIiLCJmaWx0ZXJQcmVzc2VkIiwiZSIsImlkIiwiY3VycmVudFRhcmdldCIsImdldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJWRlhUYWJsZSIsIldvcmtWRlgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF5QjtBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUN4QztBQUNJLGlCQUFhLEtBRGpCO0FBRUksaUJBQWEsS0FGakI7QUFHSSxrQkFBYztBQUhsQixHQUR3QyxDQUR2QjtBQUFBLE1BQ2RDLGNBRGM7QUFBQSxNQUNFQyxTQURGOztBQVNyQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUN6QixRQUFNQyxFQUFFLEdBQUdELENBQUMsQ0FBQ0UsYUFBRixDQUFnQkMsWUFBaEIsQ0FBNkIsSUFBN0IsQ0FBWDs7QUFDQSxRQUFJRixFQUFFLEtBQUssV0FBWCxFQUF3QjtBQUNwQkcsYUFBTyxDQUFDQyxHQUFSLENBQVlKLEVBQVo7QUFDQUgsZUFBUyxpQ0FDRkQsY0FERSx1SkFFSkksRUFGSSxFQUVDLElBRkQsR0FBVDtBQUlILEtBTkQsTUFNTyxJQUFJQSxFQUFFLEtBQUssV0FBWCxFQUF3QjtBQUMzQkgsZUFBUyxpQ0FDRkQsY0FERSx1SkFFSkksRUFGSSxFQUVDLElBRkQsR0FBVDtBQUlILEtBTE0sTUFLQSxJQUFJQSxFQUFFLEtBQUssWUFBWCxFQUF5QjtBQUM1QkgsZUFBUyxpQ0FDRkQsY0FERSx1SkFFSkksRUFGSSxFQUVDLElBRkQsR0FBVDtBQUlIO0FBQ0osR0FuQkQ7O0FBb0JBLHNCQUNJO0FBQUEsa0dBQWUsTUFBZjtBQUFBLDRCQUNJO0FBQUEsb0dBQWUsU0FBZjtBQUFBLDhCQUNJO0FBQVEsVUFBRSxFQUFDLFdBQVg7QUFBdUIsZUFBTyxFQUFFRixhQUFoQztBQUFBO0FBQUEsK0JBQ0kscUVBQUMsa0RBQUQ7QUFBTyxhQUFHLEVBQUVGLGNBQWMsQ0FBQyxXQUFELENBQWQsR0FBOEIsMEJBQTlCLEdBQTJELGtCQUF2RTtBQUEyRixlQUFLLEVBQUUsRUFBbEc7QUFBc0csZ0JBQU0sRUFBRSxFQUE5RztBQUFrSCxhQUFHLEVBQUM7QUFBdEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQVEsVUFBRSxFQUFDLFdBQVg7QUFBQTtBQUFBLCtCQUNJLHFFQUFDLGtEQUFEO0FBQU8sYUFBRyxFQUFDLGtCQUFYO0FBQThCLGVBQUssRUFBRSxFQUFyQztBQUF5QyxnQkFBTSxFQUFFLEVBQWpEO0FBQXFELGFBQUcsRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBT0k7QUFBUSxVQUFFLEVBQUMsWUFBWDtBQUFBO0FBQUEsK0JBQ0kscUVBQUMsa0RBQUQ7QUFBTyxhQUFHLEVBQUMsbUJBQVg7QUFBK0IsZUFBSyxFQUFFLEVBQXRDO0FBQTBDLGdCQUFNLEVBQUUsRUFBbEQ7QUFBc0QsYUFBRyxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQkg7O0dBOUNRSCxPOztLQUFBQSxPOztBQWdEVCxTQUFTWSxRQUFULENBQWtCWCxLQUFsQixFQUF5QjtBQUNyQixzQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztNQU5RVyxROztJQVFIQyxPOzs7OztBQUNGLG1CQUFZWixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7NkJBRVE7QUFDTCwwQkFDSTtBQUFBLHNHQUFlLE1BQWY7QUFBQSxnQ0FDSTtBQUFBLHdHQUFlLFFBQWY7QUFBQSxpQ0FDSTtBQUFBLDBHQUFlLGVBQWY7QUFBQSxtQ0FDSSxxRUFBQyxrREFBRDtBQUFPLGlCQUFHLEVBQUMsa0JBQVg7QUFBOEIsbUJBQUssRUFBRSxFQUFyQztBQUF5QyxvQkFBTSxFQUFFLEVBQWpEO0FBQXFELGlCQUFHLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBTUk7QUFBQSx3R0FBZSxlQUFmO0FBQUEsaUNBQ0kscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQWNIOzs7O0VBcEJpQmEsNENBQUssQ0FBQ0MsUzs7QUF1QmJGLHNFQUFmIiwiZmlsZSI6Ii4vd29ya1ZGWC9JbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdvcmtWRlhTdHlsZXMgfSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBUaWNrZXIgZnJvbSAncmVhY3QtdGlja2VyJztcblxuXG5mdW5jdGlvbiBGaWx0ZXJzKHByb3BzKSAge1xuICAgIGNvbnN0IFtmaWx0ZXJTZWxlY3RlZCwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgICBcImFsbEJ1dHRvblwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiVkZYQnV0dG9uXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJmaWxtQnV0dG9uXCI6IGZhbHNlXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgZmlsdGVyUHJlc3NlZCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgaWYgKGlkID09PSAnYWxsQnV0dG9uJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICAgICAgc2V0RmlsdGVyKHtcbiAgICAgICAgICAgICAgICAuLi5maWx0ZXJTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBbaWRdOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaWQgPT09ICdWRlhCdXR0b24nKSB7XG4gICAgICAgICAgICBzZXRGaWx0ZXIoe1xuICAgICAgICAgICAgICAgIC4uLmZpbHRlclNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIFtpZF06IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChpZCA9PT0gJ2ZpbG1CdXR0b24nKSB7XG4gICAgICAgICAgICBzZXRGaWx0ZXIoe1xuICAgICAgICAgICAgICAgIC4uLmZpbHRlclNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIFtpZF06IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFsbEJ1dHRvblwiIG9uQ2xpY2s9e2ZpbHRlclByZXNzZWR9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtmaWx0ZXJTZWxlY3RlZFtcImFsbEJ1dHRvblwiXSA/IFwiL3dvcmtWRlgvYWxsU2VsZWN0ZWQucG5nXCIgOiBcIi93b3JrVkZYL2FsbC5wbmdcIn0gd2lkdGg9ezcwfSBoZWlnaHQ9ezMwfSBhbHQ9XCJuZXdraW5vX2xvZ29cIi8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIlZGWEJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3dvcmtWRlgvVkZYLnBuZ1wiIHdpZHRoPXs3MH0gaGVpZ2h0PXszMH0gYWx0PVwibmV3a2lub19sb2dvXCIvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJmaWxtQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvd29ya1ZGWC9maWxtLnBuZ1wiIHdpZHRoPXs3MH0gaGVpZ2h0PXszMH0gYWx0PVwibmV3a2lub19sb2dvXCIvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4Pnt3b3JrVkZYU3R5bGVzfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gVkZYVGFibGUocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj4gXG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jbGFzcyBXb3JrVkZYIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2dsb2JhbC9sb2dvLmpwZ1wiIHdpZHRoPXs4MX0gaGVpZ2h0PXs4MX0gYWx0PVwibmV3a2lub19sb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJTZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJzIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4Pnt3b3JrVkZYU3R5bGVzfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtWRlg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./workVFX/Index.js\n");

/***/ })

})