webpackHotUpdate_N_E("pages/workVFX",{

/***/ "./workVFX/Index.js":
/*!**************************!*\
  !*** ./workVFX/Index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ \"./workVFX/style.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_ticker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-ticker */ \"./node_modules/react-ticker/dist/index.es.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ryancho/Desktop/newkino-client/workVFX/Index.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction Filters(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useState\"])({\n    \"allButton\": false,\n    \"VFXButton\": false,\n    \"filmButton\": false\n  }),\n      filterSelected = _useState[0],\n      setFilter = _useState[1];\n\n  var filterPressed = function filterPressed(e) {\n    console.log(\"TEST\");\n    var id = e.currentTarget.getAttribute('id');\n\n    if (id === 'allButton') {\n      console.log(id);\n      setFilter(_objectSpread(_objectSpread({}, filterSelected), {}, Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, id, true)));\n    } else if (id === 'VFXButton') {\n      setFilter(_objectSpread(_objectSpread({}, filterSelected), {}, Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, id, true)));\n    } else if (id === 'filmButton') {\n      setFilter(_objectSpread(_objectSpread({}, filterSelected), {}, Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, id, true)));\n    }\n  };\n\n  var filterDeselected = function filterDeselected(e) {\n    var id = e.currentTarget.getAttribute('id');\n\n    if (id === 'allButton') {\n      console.log(id);\n      setFilter(_objectSpread(_objectSpread({}, filterSelected), {}, Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, id, false)));\n    } else if (id === 'VFXButton') {\n      setFilter(_objectSpread(_objectSpread({}, filterSelected), {}, Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, id, false)));\n    } else if (id === 'filmButton') {\n      setFilter(_objectSpread(_objectSpread({}, filterSelected), {}, Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, id, false)));\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"main\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"filters\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"button\", {\n        id: \"allButton\",\n        onClick: filterSelected[\"allButton\"] ? filterDeselected : filterPressed,\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {\n          src: filterSelected[\"allButton\"] ? \"/workVFX/allSelected.png\" : \"/workVFX/all.png\",\n          width: 70,\n          height: 30,\n          alt: \"newkino_logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"button\", {\n        id: \"VFXButton\",\n        onClick: filterSelected[\"VFXButton\"] ? filterDeselected : function () {\n          filterPressed;\n        },\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {\n          src: filterSelected[\"VFXButton\"] ? \"/workVFX/VFXSelected.png\" : \"/workVFX/VFX.png\",\n          width: 70,\n          height: 30,\n          alt: \"newkino_logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"button\", {\n        id: \"filmButton\",\n        onClick: filterSelected[\"filmButton\"] ? function () {\n          filterDeselected;\n        } : function () {\n          filterPressed;\n        },\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {\n          src: filterSelected[\"filmButton\"] ? \"/workVFX/filmSelected.png\" : \"/workVFX/film.png\",\n          width: 70,\n          height: 30,\n          alt: \"newkino_logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      id: _style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash,\n      children: _style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"]\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Filters, \"fxXJIcOdUq4H6IKniEtevP1MtE8=\");\n\n_c = Filters;\n\nfunction VFXTable(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n    className: \"main\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 9\n  }, this);\n}\n\n_c2 = VFXTable;\n\nvar WorkVFX = /*#__PURE__*/function (_React$Component) {\n  Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(WorkVFX, _React$Component);\n\n  var _super = _createSuper(WorkVFX);\n\n  function WorkVFX(props) {\n    Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, WorkVFX);\n\n    return _super.call(this, props);\n  }\n\n  Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(WorkVFX, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"main\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"header\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"image-wrapper\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {\n              src: \"/global/logo.jpg\",\n              width: 81,\n              height: 81,\n              alt: \"newkino_logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash) + \" \" + \"filterSection\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(Filters, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          id: _style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"].__hash,\n          children: _style__WEBPACK_IMPORTED_MODULE_9__[\"workVFXStyles\"]\n        }, void 0, false, void 0, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return WorkVFX;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkVFX);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Filters\");\n$RefreshReg$(_c2, \"VFXTable\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd29ya1ZGWC9JbmRleC5qcz9kNjYyIl0sIm5hbWVzIjpbIkZpbHRlcnMiLCJwcm9wcyIsInVzZVN0YXRlIiwiZmlsdGVyU2VsZWN0ZWQiLCJzZXRGaWx0ZXIiLCJmaWx0ZXJQcmVzc2VkIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJmaWx0ZXJEZXNlbGVjdGVkIiwiVkZYVGFibGUiLCJXb3JrVkZYIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBeUI7QUFBQTs7QUFBQSxrQkFDZUMsc0RBQVEsQ0FDeEM7QUFDSSxpQkFBYSxLQURqQjtBQUVJLGlCQUFhLEtBRmpCO0FBR0ksa0JBQWM7QUFIbEIsR0FEd0MsQ0FEdkI7QUFBQSxNQUNkQyxjQURjO0FBQUEsTUFDRUMsU0FERjs7QUFTckIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQU87QUFDekJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQSxRQUFNQyxFQUFFLEdBQUdILENBQUMsQ0FBQ0ksYUFBRixDQUFnQkMsWUFBaEIsQ0FBNkIsSUFBN0IsQ0FBWDs7QUFDQSxRQUFJRixFQUFFLEtBQUssV0FBWCxFQUF3QjtBQUNwQkYsYUFBTyxDQUFDQyxHQUFSLENBQVlDLEVBQVo7QUFDQUwsZUFBUyxpQ0FDRkQsY0FERSx1SkFFSk0sRUFGSSxFQUVDLElBRkQsR0FBVDtBQUlILEtBTkQsTUFNTyxJQUFJQSxFQUFFLEtBQUssV0FBWCxFQUF3QjtBQUMzQkwsZUFBUyxpQ0FDRkQsY0FERSx1SkFFSk0sRUFGSSxFQUVDLElBRkQsR0FBVDtBQUlILEtBTE0sTUFLQSxJQUFJQSxFQUFFLEtBQUssWUFBWCxFQUF5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OzZCQUVRO0FBQ0wsMEJBQ0k7QUFBQSxzR0FBZSxNQUFmO0FBQUEsZ0NBQ0k7QUFBQSx3R0FBZSxRQUFmO0FBQUEsaUNBQ0k7QUFBQSwwR0FBZSxlQUFmO0FBQUEsbUNBQ0kscUVBQUMsa0RBQUQ7QUFBTyxpQkFBRyxFQUFDLGtCQUFYO0FBQThCLG1CQUFLLEVBQUUsRUFBckM7QUFBeUMsb0JBQU0sRUFBRSxFQUFqRDtBQUFxRCxpQkFBRyxFQUFDO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU1JO0FBQUEsd0dBQWUsZUFBZjtBQUFBLGlDQUNJLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFjSDs7OztFQXBCaUJjLDRDQUFLLENBQUNDLFM7O0FBdUJiRixzRUFBZiIsImZpbGUiOiIuL3dvcmtWRlgvSW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3b3JrVkZYU3R5bGVzIH0gZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgVGlja2VyIGZyb20gJ3JlYWN0LXRpY2tlcic7XG5cblxuZnVuY3Rpb24gRmlsdGVycyhwcm9wcykgIHtcbiAgICBjb25zdCBbZmlsdGVyU2VsZWN0ZWQsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgICAgXCJhbGxCdXR0b25cIjogZmFsc2UsXG4gICAgICAgICAgICBcIlZGWEJ1dHRvblwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZmlsbUJ1dHRvblwiOiBmYWxzZVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IGZpbHRlclByZXNzZWQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRFU1RcIilcbiAgICAgICAgY29uc3QgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBpZiAoaWQgPT09ICdhbGxCdXR0b24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgICAgICBzZXRGaWx0ZXIoe1xuICAgICAgICAgICAgICAgIC4uLmZpbHRlclNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIFtpZF06IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChpZCA9PT0gJ1ZGWEJ1dHRvbicpIHtcbiAgICAgICAgICAgIHNldEZpbHRlcih7XG4gICAgICAgICAgICAgICAgLi4uZmlsdGVyU2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgW2lkXTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGlkID09PSAnZmlsbUJ1dHRvbicpIHtcbiAgICAgICAgICAgIHNldEZpbHRlcih7XG4gICAgICAgICAgICAgICAgLi4uZmlsdGVyU2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgW2lkXTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlckRlc2VsZWN0ZWQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGlmIChpZCA9PT0gJ2FsbEJ1dHRvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgICAgIHNldEZpbHRlcih7XG4gICAgICAgICAgICAgICAgLi4uZmlsdGVyU2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgW2lkXTogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChpZCA9PT0gJ1ZGWEJ1dHRvbicpIHtcbiAgICAgICAgICAgIHNldEZpbHRlcih7XG4gICAgICAgICAgICAgICAgLi4uZmlsdGVyU2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgW2lkXTogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChpZCA9PT0gJ2ZpbG1CdXR0b24nKSB7XG4gICAgICAgICAgICBzZXRGaWx0ZXIoe1xuICAgICAgICAgICAgICAgIC4uLmZpbHRlclNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIFtpZF06IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFsbEJ1dHRvblwiIG9uQ2xpY2s9e2ZpbHRlclNlbGVjdGVkW1wiYWxsQnV0dG9uXCJdID8gZmlsdGVyRGVzZWxlY3RlZCA6IGZpbHRlclByZXNzZWR9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtmaWx0ZXJTZWxlY3RlZFtcImFsbEJ1dHRvblwiXSA/IFwiL3dvcmtWRlgvYWxsU2VsZWN0ZWQucG5nXCIgOiBcIi93b3JrVkZYL2FsbC5wbmdcIn0gd2lkdGg9ezcwfSBoZWlnaHQ9ezMwfSBhbHQ9XCJuZXdraW5vX2xvZ29cIi8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIlZGWEJ1dHRvblwiIG9uQ2xpY2s9e2ZpbHRlclNlbGVjdGVkW1wiVkZYQnV0dG9uXCJdID8gZmlsdGVyRGVzZWxlY3RlZCA6ICgpID0+IHtmaWx0ZXJQcmVzc2VkfX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ZpbHRlclNlbGVjdGVkW1wiVkZYQnV0dG9uXCJdID8gXCIvd29ya1ZGWC9WRlhTZWxlY3RlZC5wbmdcIiA6IFwiL3dvcmtWRlgvVkZYLnBuZ1wifSB3aWR0aD17NzB9IGhlaWdodD17MzB9IGFsdD1cIm5ld2tpbm9fbG9nb1wiLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZmlsbUJ1dHRvblwiIG9uQ2xpY2s9e2ZpbHRlclNlbGVjdGVkW1wiZmlsbUJ1dHRvblwiXSA/ICgpID0+IHtmaWx0ZXJEZXNlbGVjdGVkfSA6ICgpID0+IHtmaWx0ZXJQcmVzc2VkfX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ZpbHRlclNlbGVjdGVkW1wiZmlsbUJ1dHRvblwiXSA/IFwiL3dvcmtWRlgvZmlsbVNlbGVjdGVkLnBuZ1wiIDogXCIvd29ya1ZGWC9maWxtLnBuZ1wifSB3aWR0aD17NzB9IGhlaWdodD17MzB9IGFsdD1cIm5ld2tpbm9fbG9nb1wiLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeD57d29ya1ZGWFN0eWxlc308L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFZGWFRhYmxlKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+IFxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY2xhc3MgV29ya1ZGWCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9nbG9iYWwvbG9nby5qcGdcIiB3aWR0aD17ODF9IGhlaWdodD17ODF9IGFsdD1cIm5ld2tpbm9fbG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVycyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57d29ya1ZGWFN0eWxlc308L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrVkZYO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./workVFX/Index.js\n");

/***/ })

})