webpackHotUpdate_N_E("pages/workVFX",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./workVFX/Index.js":
/*!**************************!*\
  !*** ./workVFX/Index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ \"./workVFX/style.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_ticker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-ticker */ \"./node_modules/react-ticker/dist/index.es.js\");\n/* harmony import */ var _public_work_work_works_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/work/work/works.js */ \"./public/work/work/works.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ryancho/Desktop/newkino-client/workVFX/Index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nfunction Filters(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash) + \" \" + \"main\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash) + \" \" + \"filters\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"button\", {\n        id: \"allButton\",\n        onClick: filterSelected[\"allButton\"] ? filterDeselected : filterPressed,\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {\n          src: filterSelected[\"allButton\"] ? \"/workVFX/filter/allSelected.png\" : \"/workVFX/filter/all.png\",\n          width: 70,\n          height: 30,\n          alt: \"newkino_logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"button\", {\n        id: \"VFXButton\",\n        onClick: filterSelected[\"VFXButton\"] ? filterDeselected : filterPressed,\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {\n          src: filterSelected[\"VFXButton\"] ? \"/workVFX/filter/VFXSelected.png\" : \"/workVFX/filter/VFX.png\",\n          width: 70,\n          height: 30,\n          alt: \"newkino_logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"button\", {\n        id: \"filmButton\",\n        onClick: filterSelected[\"filmButton\"] ? filterDeselected : filterPressed,\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {\n          src: filterSelected[\"filmButton\"] ? \"/workVFX/filter/filmSelected.png\" : \"/workVFX/filter/film.png\",\n          width: 70,\n          height: 30,\n          alt: \"newkino_logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      id: _style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash,\n      children: _style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"]\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}\n\n_c = Filters;\n\nvar VFXTable = function VFXTable(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash) + \" \" + \"table\",\n    children: [props.data.map(function (data) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(Tile, {\n        data: data\n      }, data.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 24\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      id: _style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash,\n      children: _style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"]\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, _this);\n};\n\n_c2 = VFXTable;\n\nvar Tile = function Tile(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useState\"])(false),\n      hover = _useState2[0],\n      setHover = _useState2[1];\n\n  var mouseEnter = function mouseEnter() {\n    if (hover === false) {\n      setHover(true);\n    }\n  };\n\n  var mouseLeave = function mouseLeave() {\n    if (hover === true) {\n      setHover(false);\n    }\n  };\n\n  var workSelected = function workSelected() {\n    if (open === false) {\n      setOpen(true);\n    } else {\n      setOpen(false);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash) + \" \" + \"tile\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"img\", {\n      onMouseEnter: mouseEnter,\n      onMouseLeave: mouseLeave,\n      onClick: workSelected,\n      src: props.data.image,\n      alt: props.data.name // id = {open === true ? \"openTile\" : \"closedTile\"}  \n      ,\n      className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"p\", {\n      id: \"workDetails\",\n      className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash),\n      children: [\" \", hover ? props.data.artist + \" - \" + props.data.name : \"\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      id: _style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash,\n      children: _style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"]\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Tile, \"lU4WZjs1kT2Va7Mp/LX7gV/xRmw=\");\n\n_c3 = Tile;\n\nvar WorkVFX = /*#__PURE__*/function (_React$Component) {\n  Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(WorkVFX, _React$Component);\n\n  var _super = _createSuper(WorkVFX);\n\n  function WorkVFX(props) {\n    Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, WorkVFX);\n\n    return _super.call(this, props);\n  }\n\n  Object(_Users_ryancho_Desktop_newkino_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(WorkVFX, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash) + \" \" + \"main\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash) + \" \" + \"header\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n            className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash) + \" \" + \"image-wrapper\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"a\", {\n              href: \"https://newkino.studio/\",\n              className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {\n                src: \"/global/logo.jpg\",\n                width: 81,\n                height: 81,\n                alt: \"newkino_logo\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 29\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash) + \" \" + \"filterSection\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(Filters, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"div\", {\n          id: \"workTable\",\n          className: \"jsx-\".concat(_style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(VFXTable, {\n            data: _public_work_work_works_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          id: _style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"].__hash,\n          children: _style__WEBPACK_IMPORTED_MODULE_8__[\"workVFXStyles\"]\n        }, void 0, false, void 0, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return WorkVFX;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkVFX);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Filters\");\n$RefreshReg$(_c2, \"VFXTable\");\n$RefreshReg$(_c3, \"Tile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd29ya1ZGWC9JbmRleC5qcz9kNjYyIl0sIm5hbWVzIjpbIkZpbHRlcnMiLCJwcm9wcyIsImZpbHRlclNlbGVjdGVkIiwiZmlsdGVyRGVzZWxlY3RlZCIsImZpbHRlclByZXNzZWQiLCJWRlhUYWJsZSIsImRhdGEiLCJtYXAiLCJpZCIsIlRpbGUiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaG92ZXIiLCJzZXRIb3ZlciIsIm1vdXNlRW50ZXIiLCJtb3VzZUxlYXZlIiwid29ya1NlbGVjdGVkIiwiaW1hZ2UiLCJuYW1lIiwiYXJ0aXN0IiwiV29ya1ZGWCIsIlZGWFdvcmtzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXlCO0FBR3JCLHNCQUNJO0FBQUEsa0dBQWUsTUFBZjtBQUFBLDRCQUNJO0FBQUEsb0dBQWUsU0FBZjtBQUFBLDhCQUNJO0FBQVEsVUFBRSxFQUFDLFdBQVg7QUFBdUIsZUFBTyxFQUFFQyxjQUFjLENBQUMsV0FBRCxDQUFkLEdBQThCQyxnQkFBOUIsR0FBaURDLGFBQWpGO0FBQUE7QUFBQSwrQkFDSSxxRUFBQyxpREFBRDtBQUFPLGFBQUcsRUFBRUYsY0FBYyxDQUFDLFdBQUQsQ0FBZCxHQUE4QixpQ0FBOUIsR0FBa0UseUJBQTlFO0FBQXlHLGVBQUssRUFBRSxFQUFoSDtBQUFvSCxnQkFBTSxFQUFFLEVBQTVIO0FBQWdJLGFBQUcsRUFBQztBQUFwSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBUSxVQUFFLEVBQUMsV0FBWDtBQUF1QixlQUFPLEVBQUVBLGNBQWMsQ0FBQyxXQUFELENBQWQsR0FBOEJDLGdCQUE5QixHQUFpREMsYUFBakY7QUFBQTtBQUFBLCtC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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd29ya1ZGWFN0eWxlcyB9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFRpY2tlciBmcm9tICdyZWFjdC10aWNrZXInO1xuaW1wb3J0IFZGWFdvcmtzIGZyb20gJy4uL3B1YmxpYy93b3JrL3dvcmsvd29ya3MuanMnXG5cblxuZnVuY3Rpb24gRmlsdGVycyhwcm9wcykgIHtcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhbGxCdXR0b25cIiBvbkNsaWNrPXtmaWx0ZXJTZWxlY3RlZFtcImFsbEJ1dHRvblwiXSA/IGZpbHRlckRlc2VsZWN0ZWQgOiBmaWx0ZXJQcmVzc2VkfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZmlsdGVyU2VsZWN0ZWRbXCJhbGxCdXR0b25cIl0gPyBcIi93b3JrVkZYL2ZpbHRlci9hbGxTZWxlY3RlZC5wbmdcIiA6IFwiL3dvcmtWRlgvZmlsdGVyL2FsbC5wbmdcIn0gd2lkdGg9ezcwfSBoZWlnaHQ9ezMwfSBhbHQ9XCJuZXdraW5vX2xvZ29cIi8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIlZGWEJ1dHRvblwiIG9uQ2xpY2s9e2ZpbHRlclNlbGVjdGVkW1wiVkZYQnV0dG9uXCJdID8gZmlsdGVyRGVzZWxlY3RlZCA6IGZpbHRlclByZXNzZWR9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtmaWx0ZXJTZWxlY3RlZFtcIlZGWEJ1dHRvblwiXSA/IFwiL3dvcmtWRlgvZmlsdGVyL1ZGWFNlbGVjdGVkLnBuZ1wiIDogXCIvd29ya1ZGWC9maWx0ZXIvVkZYLnBuZ1wifSB3aWR0aD17NzB9IGhlaWdodD17MzB9IGFsdD1cIm5ld2tpbm9fbG9nb1wiLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZmlsbUJ1dHRvblwiIG9uQ2xpY2s9e2ZpbHRlclNlbGVjdGVkW1wiZmlsbUJ1dHRvblwiXSA/IGZpbHRlckRlc2VsZWN0ZWQgOiBmaWx0ZXJQcmVzc2VkfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZmlsdGVyU2VsZWN0ZWRbXCJmaWxtQnV0dG9uXCJdID8gXCIvd29ya1ZGWC9maWx0ZXIvZmlsbVNlbGVjdGVkLnBuZ1wiIDogXCIvd29ya1ZGWC9maWx0ZXIvZmlsbS5wbmdcIn0gd2lkdGg9ezcwfSBoZWlnaHQ9ezMwfSBhbHQ9XCJuZXdraW5vX2xvZ29cIi8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e3dvcmtWRlhTdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBWRlhUYWJsZSA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgIHtwcm9wcy5kYXRhLm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8VGlsZSBkYXRhPXtkYXRhfSBrZXk9e2RhdGEuaWR9IC8+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8c3R5bGUganN4Pnt3b3JrVkZYU3R5bGVzfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNvbnN0IFRpbGUgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgbW91c2VFbnRlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKGhvdmVyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgc2V0SG92ZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGhvdmVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZXRIb3ZlcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHdvcmtTZWxlY3RlZCA9ICgpID0+IHtcbiAgICAgICAgaWYob3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGVcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e21vdXNlRW50ZXJ9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXttb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3dvcmtTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmRhdGEuaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtwcm9wcy5kYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgLy8gaWQgPSB7b3BlbiA9PT0gdHJ1ZSA/IFwib3BlblRpbGVcIiA6IFwiY2xvc2VkVGlsZVwifSAgXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgaWQ9XCJ3b3JrRGV0YWlsc1wiPiB7aG92ZXIgPyAocHJvcHMuZGF0YS5hcnRpc3QgKyBcIiAtIFwiICsgcHJvcHMuZGF0YS5uYW1lKSA6IFwiXCJ9PC9wPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57d29ya1ZGWFN0eWxlc308L3N0eWxlPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIFdvcmtWRlggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25ld2tpbm8uc3R1ZGlvL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZ2xvYmFsL2xvZ28uanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezgxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJuZXdraW5vX2xvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVycyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3b3JrVGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPFZGWFRhYmxlIGRhdGE9e1ZGWFdvcmtzfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e3dvcmtWRlhTdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya1ZGWDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./workVFX/Index.js\n");

/***/ })

})