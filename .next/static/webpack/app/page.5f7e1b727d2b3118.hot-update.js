"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/Components/LoginForm/index.tsx":
/*!********************************************!*\
  !*** ./src/Components/LoginForm/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InputField */ \"(app-pages-browser)/./src/Components/InputField/index.tsx\");\n/* harmony import */ var _loginform_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginform.module.css */ \"(app-pages-browser)/./src/Components/LoginForm/loginform.module.css\");\n/* harmony import */ var _loginform_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loginform_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PrimaryButton */ \"(app-pages-browser)/./src/Components/PrimaryButton/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction LoginForm(param) {\n    let { setShowModal } = param;\n    _s();\n    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const getData = (name, value)=>{\n        setFormValues(()=>{\n            return {\n                ...formValues,\n                [name]: value\n            };\n        });\n    };\n    const login = ()=>{\n        console.log(formValues);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_loginform_module_css__WEBPACK_IMPORTED_MODULE_2___default().headerWrap),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"textXSmall fadedColor\",\n                        children: \"WELCOME BACK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shyam/login-app/src/Components/LoginForm/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"textMediumBold whiteColor mTop8\",\n                        children: \"Log into your account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shyam/login-app/src/Components/LoginForm/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shyam/login-app/src/Components/LoginForm/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                type: \"text\",\n                name: \"email\",\n                label: \"Email or Username\",\n                placeholder: \"Enter your email or username\",\n                onChange: (name, value)=>{\n                    getData(name, value);\n                },\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/shyam/login-app/src/Components/LoginForm/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                type: \"password\",\n                name: \"password\",\n                label: \"Password\",\n                placeholder: \"Enter your password\",\n                onChange: (name, value)=>{\n                    getData(name, value);\n                },\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/shyam/login-app/src/Components/LoginForm/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mTop16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    isFull: true,\n                    text: \"Login now\",\n                    onClick: ()=>{\n                        setShowModal({\n                            flag: false,\n                            type: \"register\"\n                        });\n                        login();\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/shyam/login-app/src/Components/LoginForm/index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/shyam/login-app/src/Components/LoginForm/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setShowModal({\n                        flag: true,\n                        type: \"register\"\n                    }),\n                className: \"textXSmall textSecondaryColor mTop16\",\n                children: [\n                    \" Not registered yet?\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"whiteColor cursorPointer\",\n                        children: \"Register →\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shyam/login-app/src/Components/LoginForm/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 156\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shyam/login-app/src/Components/LoginForm/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shyam/login-app/src/Components/LoginForm/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginForm, \"m8QDP6u4leJ25+A7fEwoJrL5c/Y=\");\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL0xvZ2luRm9ybS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVrQztBQUNVO0FBQ0M7QUFDYztBQU01QyxTQUFTSSxVQUFVLEtBQTRCO1FBQTVCLEVBQUVDLFlBQVksRUFBYyxHQUE1Qjs7SUFDOUIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO1FBQ3pDSyxPQUFPO1FBQ1BDLFVBQVU7SUFDZDtJQUVBLE1BQU1DLFVBQVUsQ0FBQ0MsTUFBY0M7UUFDM0JMLGNBQWM7WUFDVixPQUFPO2dCQUNILEdBQUdELFVBQVU7Z0JBQ2IsQ0FBQ0ssS0FBSyxFQUFFQztZQUNaO1FBQ0o7SUFDSjtJQUVBLE1BQU1DLFFBQVE7UUFDVkMsUUFBUUMsR0FBRyxDQUFDVDtJQUNoQjtJQUVBLHFCQUNJLDhEQUFDVTs7MEJBQ0csOERBQUNDO2dCQUFJQyxXQUFXakIseUVBQWlCOztrQ0FDN0IsOERBQUNnQjt3QkFBSUMsV0FBVTtrQ0FBd0I7Ozs7OztrQ0FHdkMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFrQzs7Ozs7Ozs7Ozs7OzBCQUlyRCw4REFBQ2xCLG1EQUFLQTtnQkFDRm9CLE1BQU07Z0JBQ05ULE1BQU07Z0JBQ05VLE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLFVBQVUsQ0FBQ1osTUFBY0M7b0JBQW9CRixRQUFRQyxNQUFNQztnQkFBTztnQkFDbEVZLFFBQVE7Ozs7OzswQkFFWiw4REFBQ3hCLG1EQUFLQTtnQkFDRm9CLE1BQU07Z0JBQ05ULE1BQU07Z0JBQ05VLE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLFVBQVUsQ0FBQ1osTUFBY0M7b0JBQW9CRixRQUFRQyxNQUFNQztnQkFBTztnQkFDbEVZLFFBQVE7Ozs7OzswQkFFWiw4REFBQ1A7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNoQixzREFBYUE7b0JBQUN1QixNQUFNO29CQUFDQyxNQUFLO29CQUFZQyxTQUFTO3dCQUM1Q3RCLGFBQWE7NEJBQUV1QixNQUFNOzRCQUFPUixNQUFNO3dCQUFXO3dCQUM3Q1A7b0JBQ0o7Ozs7Ozs7Ozs7OzBCQUVKLDhEQUFDSTtnQkFBSVUsU0FBUyxJQUFNdEIsYUFBYTt3QkFBRXVCLE1BQU07d0JBQU1SLE1BQU07b0JBQVc7Z0JBQUlGLFdBQVU7O29CQUF1QztrQ0FBMEIsOERBQUNXO3dCQUFLWCxXQUFVO2tDQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3RNO0dBdER3QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvTG9naW5Gb3JtL2luZGV4LnRzeD9hYTU5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL0lucHV0RmllbGRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbG9naW5mb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gXCIuLi9QcmltYXJ5QnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgSW5wdXRQcm9wcyA9IHtcbiAgICBzZXRTaG93TW9kYWw6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHsgdHlwZTogc3RyaW5nOyBmbGFnOiBib29sZWFuOyB9Pj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luRm9ybSh7IHNldFNob3dNb2RhbCB9OiBJbnB1dFByb3BzKSB7XG4gICAgY29uc3QgW2Zvcm1WYWx1ZXMsIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGdldERhdGEgPSAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEZvcm1WYWx1ZXMoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5mb3JtVmFsdWVzLFxuICAgICAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1WYWx1ZXMpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcldyYXB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFhTbWFsbCBmYWRlZENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIFdFTENPTUUgQkFDS1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dE1lZGl1bUJvbGQgd2hpdGVDb2xvciBtVG9wOFwiPlxuICAgICAgICAgICAgICAgICAgICBMb2cgaW50byB5b3VyIGFjY291bnRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgbmFtZT17XCJlbWFpbFwifVxuICAgICAgICAgICAgICAgIGxhYmVsPXtcIkVtYWlsIG9yIFVzZXJuYW1lXCJ9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiRW50ZXIgeW91ciBlbWFpbCBvciB1c2VybmFtZVwifVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7IGdldERhdGEobmFtZSwgdmFsdWUpIH19XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPXtcInBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgICAgbmFtZT17XCJwYXNzd29yZFwifVxuICAgICAgICAgICAgICAgIGxhYmVsPXtcIlBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiRW50ZXIgeW91ciBwYXNzd29yZFwifVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7IGdldERhdGEobmFtZSwgdmFsdWUpIH19XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1Ub3AxNlwiPlxuICAgICAgICAgICAgICAgIDxQcmltYXJ5QnV0dG9uIGlzRnVsbCB0ZXh0PVwiTG9naW4gbm93XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWwoeyBmbGFnOiBmYWxzZSwgdHlwZTogXCJyZWdpc3RlclwiIH0pXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luKClcbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh7IGZsYWc6IHRydWUsIHR5cGU6IFwicmVnaXN0ZXJcIiB9KX0gY2xhc3NOYW1lPVwidGV4dFhTbWFsbCB0ZXh0U2Vjb25kYXJ5Q29sb3IgbVRvcDE2XCI+IE5vdCByZWdpc3RlcmVkIHlldD8mbmJzcDs8c3BhbiBjbGFzc05hbWU9XCJ3aGl0ZUNvbG9yIGN1cnNvclBvaW50ZXJcIj5SZWdpc3RlciDihpI8L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICApO1xufVxuXG4iXSwibmFtZXMiOlsiSW5wdXQiLCJzdHlsZXMiLCJQcmltYXJ5QnV0dG9uIiwidXNlU3RhdGUiLCJMb2dpbkZvcm0iLCJzZXRTaG93TW9kYWwiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJnZXREYXRhIiwibmFtZSIsInZhbHVlIiwibG9naW4iLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlcldyYXAiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJpc0Z1bGwiLCJ0ZXh0Iiwib25DbGljayIsImZsYWciLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/LoginForm/index.tsx\n"));

/***/ })

});