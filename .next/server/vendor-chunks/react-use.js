"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-use";
exports.ids = ["vendor-chunks/react-use"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-use/esm/misc/util.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/misc/util.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isBrowser: () => (/* binding */ isBrowser),\n/* harmony export */   isNavigator: () => (/* binding */ isNavigator),\n/* harmony export */   noop: () => (/* binding */ noop),\n/* harmony export */   off: () => (/* binding */ off),\n/* harmony export */   on: () => (/* binding */ on)\n/* harmony export */ });\nvar noop = function() {};\nfunction on(obj) {\n    var args = [];\n    for(var _i = 1; _i < arguments.length; _i++){\n        args[_i - 1] = arguments[_i];\n    }\n    if (obj && obj.addEventListener) {\n        obj.addEventListener.apply(obj, args);\n    }\n}\nfunction off(obj) {\n    var args = [];\n    for(var _i = 1; _i < arguments.length; _i++){\n        args[_i - 1] = arguments[_i];\n    }\n    if (obj && obj.removeEventListener) {\n        obj.removeEventListener.apply(obj, args);\n    }\n}\nvar isBrowser = \"undefined\" !== \"undefined\";\nvar isNavigator = typeof navigator !== \"undefined\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS9taXNjL3V0aWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxJQUFJQSxPQUFPLFlBQWMsRUFBRTtBQUMzQixTQUFTQyxHQUFHQyxHQUFHO0lBQ2xCLElBQUlDLE9BQU8sRUFBRTtJQUNiLElBQUssSUFBSUMsS0FBSyxHQUFHQSxLQUFLQyxVQUFVQyxNQUFNLEVBQUVGLEtBQU07UUFDMUNELElBQUksQ0FBQ0MsS0FBSyxFQUFFLEdBQUdDLFNBQVMsQ0FBQ0QsR0FBRztJQUNoQztJQUNBLElBQUlGLE9BQU9BLElBQUlLLGdCQUFnQixFQUFFO1FBQzdCTCxJQUFJSyxnQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDTixLQUFLQztJQUNwQztBQUNKO0FBQ08sU0FBU00sSUFBSVAsR0FBRztJQUNuQixJQUFJQyxPQUFPLEVBQUU7SUFDYixJQUFLLElBQUlDLEtBQUssR0FBR0EsS0FBS0MsVUFBVUMsTUFBTSxFQUFFRixLQUFNO1FBQzFDRCxJQUFJLENBQUNDLEtBQUssRUFBRSxHQUFHQyxTQUFTLENBQUNELEdBQUc7SUFDaEM7SUFDQSxJQUFJRixPQUFPQSxJQUFJUSxtQkFBbUIsRUFBRTtRQUNoQ1IsSUFBSVEsbUJBQW1CLENBQUNGLEtBQUssQ0FBQ04sS0FBS0M7SUFDdkM7QUFDSjtBQUNPLElBQUlRLFlBQVksZ0JBQWtCLFlBQVk7QUFDOUMsSUFBSUMsY0FBYyxPQUFPQyxjQUFjLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWV4eS1tdWktbmV4dGpzLWFkbWluLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vbWlzYy91dGlsLmpzPzZiMmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBub29wID0gZnVuY3Rpb24gKCkgeyB9O1xuZXhwb3J0IGZ1bmN0aW9uIG9uKG9iaikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKG9iaiAmJiBvYmouYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBvYmouYWRkRXZlbnRMaXN0ZW5lci5hcHBseShvYmosIGFyZ3MpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBvZmYob2JqKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAob2JqICYmIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgfVxufVxuZXhwb3J0IHZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydCB2YXIgaXNOYXZpZ2F0b3IgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJztcbiJdLCJuYW1lcyI6WyJub29wIiwib24iLCJvYmoiLCJhcmdzIiwiX2kiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwbHkiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNCcm93c2VyIiwiaXNOYXZpZ2F0b3IiLCJuYXZpZ2F0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/misc/util.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useCookie.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/useCookie.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"(ssr)/./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar useCookie = function(cookieName) {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function() {\n        return js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get(cookieName) || null;\n    }), value = _a[0], setValue = _a[1];\n    var updateCookie = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(newValue, options) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set(cookieName, newValue, options);\n        setValue(newValue);\n    }, [\n        cookieName\n    ]);\n    var deleteCookie = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        js_cookie__WEBPACK_IMPORTED_MODULE_1___default().remove(cookieName);\n        setValue(null);\n    }, [\n        cookieName\n    ]);\n    return [\n        value,\n        updateCookie,\n        deleteCookie\n    ];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCookie);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VDb29raWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFDZDtBQUNoQyxJQUFJRyxZQUFZLFNBQVVDLFVBQVU7SUFDaEMsSUFBSUMsS0FBS0osK0NBQVFBLENBQUM7UUFBYyxPQUFPQyxvREFBVyxDQUFDRSxlQUFlO0lBQU0sSUFBSUcsUUFBUUYsRUFBRSxDQUFDLEVBQUUsRUFBRUcsV0FBV0gsRUFBRSxDQUFDLEVBQUU7SUFDM0csSUFBSUksZUFBZVQsa0RBQVdBLENBQUMsU0FBVVUsUUFBUSxFQUFFQyxPQUFPO1FBQ3REVCxvREFBVyxDQUFDRSxZQUFZTSxVQUFVQztRQUNsQ0gsU0FBU0U7SUFDYixHQUFHO1FBQUNOO0tBQVc7SUFDZixJQUFJUyxlQUFlYixrREFBV0EsQ0FBQztRQUMzQkUsdURBQWMsQ0FBQ0U7UUFDZkksU0FBUztJQUNiLEdBQUc7UUFBQ0o7S0FBVztJQUNmLE9BQU87UUFBQ0c7UUFBT0U7UUFBY0k7S0FBYTtBQUM5QztBQUNBLGlFQUFlVixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVleHktbXVpLW5leHRqcy1hZG1pbi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUNvb2tpZS5qcz9lNzI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG52YXIgdXNlQ29va2llID0gZnVuY3Rpb24gKGNvb2tpZU5hbWUpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmdW5jdGlvbiAoKSB7IHJldHVybiBDb29raWVzLmdldChjb29raWVOYW1lKSB8fCBudWxsOyB9KSwgdmFsdWUgPSBfYVswXSwgc2V0VmFsdWUgPSBfYVsxXTtcbiAgICB2YXIgdXBkYXRlQ29va2llID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld1ZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIENvb2tpZXMuc2V0KGNvb2tpZU5hbWUsIG5ld1ZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH0sIFtjb29raWVOYW1lXSk7XG4gICAgdmFyIGRlbGV0ZUNvb2tpZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQ29va2llcy5yZW1vdmUoY29va2llTmFtZSk7XG4gICAgICAgIHNldFZhbHVlKG51bGwpO1xuICAgIH0sIFtjb29raWVOYW1lXSk7XG4gICAgcmV0dXJuIFt2YWx1ZSwgdXBkYXRlQ29va2llLCBkZWxldGVDb29raWVdO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUNvb2tpZTtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiQ29va2llcyIsInVzZUNvb2tpZSIsImNvb2tpZU5hbWUiLCJfYSIsImdldCIsInZhbHVlIiwic2V0VmFsdWUiLCJ1cGRhdGVDb29raWUiLCJuZXdWYWx1ZSIsIm9wdGlvbnMiLCJzZXQiLCJkZWxldGVDb29raWUiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useCookie.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useDebounce.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useDebounce.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useDebounce)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useTimeoutFn */ \"(ssr)/./node_modules/react-use/esm/useTimeoutFn.js\");\n\n\nfunction useDebounce(fn, ms, deps) {\n    if (ms === void 0) {\n        ms = 0;\n    }\n    if (deps === void 0) {\n        deps = [];\n    }\n    var _a = (0,_useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(reset, deps);\n    return [\n        isReady,\n        cancel\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VEZWJvdW5jZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtDO0FBQ1E7QUFDM0IsU0FBU0UsWUFBWUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLElBQUk7SUFDNUMsSUFBSUQsT0FBTyxLQUFLLEdBQUc7UUFBRUEsS0FBSztJQUFHO0lBQzdCLElBQUlDLFNBQVMsS0FBSyxHQUFHO1FBQUVBLE9BQU8sRUFBRTtJQUFFO0lBQ2xDLElBQUlDLEtBQUtMLHlEQUFZQSxDQUFDRSxJQUFJQyxLQUFLRyxVQUFVRCxFQUFFLENBQUMsRUFBRSxFQUFFRSxTQUFTRixFQUFFLENBQUMsRUFBRSxFQUFFRyxRQUFRSCxFQUFFLENBQUMsRUFBRTtJQUM3RU4sZ0RBQVNBLENBQUNTLE9BQU9KO0lBQ2pCLE9BQU87UUFBQ0U7UUFBU0M7S0FBTztBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZXh5LW11aS1uZXh0anMtYWRtaW4tdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VEZWJvdW5jZS5qcz9mNzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VUaW1lb3V0Rm4gZnJvbSAnLi91c2VUaW1lb3V0Rm4nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGVib3VuY2UoZm4sIG1zLCBkZXBzKSB7XG4gICAgaWYgKG1zID09PSB2b2lkIDApIHsgbXMgPSAwOyB9XG4gICAgaWYgKGRlcHMgPT09IHZvaWQgMCkgeyBkZXBzID0gW107IH1cbiAgICB2YXIgX2EgPSB1c2VUaW1lb3V0Rm4oZm4sIG1zKSwgaXNSZWFkeSA9IF9hWzBdLCBjYW5jZWwgPSBfYVsxXSwgcmVzZXQgPSBfYVsyXTtcbiAgICB1c2VFZmZlY3QocmVzZXQsIGRlcHMpO1xuICAgIHJldHVybiBbaXNSZWFkeSwgY2FuY2VsXTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VUaW1lb3V0Rm4iLCJ1c2VEZWJvdW5jZSIsImZuIiwibXMiLCJkZXBzIiwiX2EiLCJpc1JlYWR5IiwiY2FuY2VsIiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useDebounce.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useFirstMountState.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-use/esm/useFirstMountState.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useFirstMountState: () => (/* binding */ useFirstMountState)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useFirstMountState() {\n    var isFirst = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);\n    if (isFirst.current) {\n        isFirst.current = false;\n        return true;\n    }\n    return isFirst.current;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VGaXJzdE1vdW50U3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBQ3hCLFNBQVNDO0lBQ1osSUFBSUMsVUFBVUYsNkNBQU1BLENBQUM7SUFDckIsSUFBSUUsUUFBUUMsT0FBTyxFQUFFO1FBQ2pCRCxRQUFRQyxPQUFPLEdBQUc7UUFDbEIsT0FBTztJQUNYO0lBQ0EsT0FBT0QsUUFBUUMsT0FBTztBQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZXh5LW11aS1uZXh0anMtYWRtaW4tdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VGaXJzdE1vdW50U3RhdGUuanM/MTQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlRmlyc3RNb3VudFN0YXRlKCkge1xuICAgIHZhciBpc0ZpcnN0ID0gdXNlUmVmKHRydWUpO1xuICAgIGlmIChpc0ZpcnN0LmN1cnJlbnQpIHtcbiAgICAgICAgaXNGaXJzdC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gaXNGaXJzdC5jdXJyZW50O1xufVxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZUZpcnN0TW91bnRTdGF0ZSIsImlzRmlyc3QiLCJjdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useFirstMountState.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useMedia.js":
/*!************************************************!*\
  !*** ./node_modules/react-use/esm/useMedia.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ \"(ssr)/./node_modules/react-use/esm/misc/util.js\");\n\n\nvar getInitialState = function(query, defaultState) {\n    // Prevent a React hydration mismatch when a default value is provided by not defaulting to window.matchMedia(query).matches.\n    if (defaultState !== undefined) {\n        return defaultState;\n    }\n    if (_misc_util__WEBPACK_IMPORTED_MODULE_1__.isBrowser) {\n        return window.matchMedia(query).matches;\n    }\n    // A default value has not been provided, and you are rendering on the server, warn of a possible hydration mismatch when defaulting to false.\n    if (true) {\n        console.warn(\"`useMedia` When server side rendering, defaultState should be defined to prevent a hydration mismatches.\");\n    }\n    return false;\n};\nvar useMedia = function(query, defaultState) {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialState(query, defaultState)), state = _a[0], setState = _a[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var mounted = true;\n        var mql = window.matchMedia(query);\n        var onChange = function() {\n            if (!mounted) {\n                return;\n            }\n            setState(!!mql.matches);\n        };\n        mql.addEventListener(\"change\", onChange);\n        setState(mql.matches);\n        return function() {\n            mounted = false;\n            mql.removeEventListener(\"change\", onChange);\n        };\n    }, [\n        query\n    ]);\n    return state;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMedia);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VNZWRpYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQ0o7QUFDeEMsSUFBSUcsa0JBQWtCLFNBQVVDLEtBQUssRUFBRUMsWUFBWTtJQUMvQyw2SEFBNkg7SUFDN0gsSUFBSUEsaUJBQWlCQyxXQUFXO1FBQzVCLE9BQU9EO0lBQ1g7SUFDQSxJQUFJSCxpREFBU0EsRUFBRTtRQUNYLE9BQU9LLE9BQU9DLFVBQVUsQ0FBQ0osT0FBT0ssT0FBTztJQUMzQztJQUNBLDhJQUE4STtJQUM5SSxJQUFJQyxJQUF5QixFQUFjO1FBQ3ZDQyxRQUFRQyxJQUFJLENBQUM7SUFDakI7SUFDQSxPQUFPO0FBQ1g7QUFDQSxJQUFJQyxXQUFXLFNBQVVULEtBQUssRUFBRUMsWUFBWTtJQUN4QyxJQUFJUyxLQUFLYiwrQ0FBUUEsQ0FBQ0UsZ0JBQWdCQyxPQUFPQyxnQkFBZ0JVLFFBQVFELEVBQUUsQ0FBQyxFQUFFLEVBQUVFLFdBQVdGLEVBQUUsQ0FBQyxFQUFFO0lBQ3hGZCxnREFBU0EsQ0FBQztRQUNOLElBQUlpQixVQUFVO1FBQ2QsSUFBSUMsTUFBTVgsT0FBT0MsVUFBVSxDQUFDSjtRQUM1QixJQUFJZSxXQUFXO1lBQ1gsSUFBSSxDQUFDRixTQUFTO2dCQUNWO1lBQ0o7WUFDQUQsU0FBUyxDQUFDLENBQUNFLElBQUlULE9BQU87UUFDMUI7UUFDQVMsSUFBSUUsZ0JBQWdCLENBQUMsVUFBVUQ7UUFDL0JILFNBQVNFLElBQUlULE9BQU87UUFDcEIsT0FBTztZQUNIUSxVQUFVO1lBQ1ZDLElBQUlHLG1CQUFtQixDQUFDLFVBQVVGO1FBQ3RDO0lBQ0osR0FBRztRQUFDZjtLQUFNO0lBQ1YsT0FBT1c7QUFDWDtBQUNBLGlFQUFlRixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVleHktbXVpLW5leHRqcy1hZG1pbi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZU1lZGlhLmpzPzQxYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJy4vbWlzYy91dGlsJztcbnZhciBnZXRJbml0aWFsU3RhdGUgPSBmdW5jdGlvbiAocXVlcnksIGRlZmF1bHRTdGF0ZSkge1xuICAgIC8vIFByZXZlbnQgYSBSZWFjdCBoeWRyYXRpb24gbWlzbWF0Y2ggd2hlbiBhIGRlZmF1bHQgdmFsdWUgaXMgcHJvdmlkZWQgYnkgbm90IGRlZmF1bHRpbmcgdG8gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXMuXG4gICAgaWYgKGRlZmF1bHRTdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0U3RhdGU7XG4gICAgfVxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuICAgIH1cbiAgICAvLyBBIGRlZmF1bHQgdmFsdWUgaGFzIG5vdCBiZWVuIHByb3ZpZGVkLCBhbmQgeW91IGFyZSByZW5kZXJpbmcgb24gdGhlIHNlcnZlciwgd2FybiBvZiBhIHBvc3NpYmxlIGh5ZHJhdGlvbiBtaXNtYXRjaCB3aGVuIGRlZmF1bHRpbmcgdG8gZmFsc2UuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdgdXNlTWVkaWFgIFdoZW4gc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBkZWZhdWx0U3RhdGUgc2hvdWxkIGJlIGRlZmluZWQgdG8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaGVzLicpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xudmFyIHVzZU1lZGlhID0gZnVuY3Rpb24gKHF1ZXJ5LCBkZWZhdWx0U3RhdGUpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShnZXRJbml0aWFsU3RhdGUocXVlcnksIGRlZmF1bHRTdGF0ZSkpLCBzdGF0ZSA9IF9hWzBdLCBzZXRTdGF0ZSA9IF9hWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcbiAgICAgICAgdmFyIG9uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFtb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0U3RhdGUoISFtcWwubWF0Y2hlcyk7XG4gICAgICAgIH07XG4gICAgICAgIG1xbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgICAgIHNldFN0YXRlKG1xbC5tYXRjaGVzKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIG1xbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgICAgIH07XG4gICAgfSwgW3F1ZXJ5XSk7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZU1lZGlhO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaXNCcm93c2VyIiwiZ2V0SW5pdGlhbFN0YXRlIiwicXVlcnkiLCJkZWZhdWx0U3RhdGUiLCJ1bmRlZmluZWQiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInByb2Nlc3MiLCJjb25zb2xlIiwid2FybiIsInVzZU1lZGlhIiwiX2EiLCJzdGF0ZSIsInNldFN0YXRlIiwibW91bnRlZCIsIm1xbCIsIm9uQ2hhbmdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useMedia.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useTimeoutFn.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useTimeoutFn.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useTimeoutFn)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useTimeoutFn(fn, ms) {\n    if (ms === void 0) {\n        ms = 0;\n    }\n    var ready = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n    var timeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    var callback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);\n    var isReady = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        return ready.current;\n    }, []);\n    var set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        ready.current = false;\n        timeout.current && clearTimeout(timeout.current);\n        timeout.current = setTimeout(function() {\n            ready.current = true;\n            callback.current();\n        }, ms);\n    }, [\n        ms\n    ]);\n    var clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        ready.current = null;\n        timeout.current && clearTimeout(timeout.current);\n    }, []);\n    // update ref when function changes\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        callback.current = fn;\n    }, [\n        fn\n    ]);\n    // set on mount, clear on unmount\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        set();\n        return clear;\n    }, [\n        ms\n    ]);\n    return [\n        isReady,\n        clear,\n        set\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VUaW1lb3V0Rm4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBQ3hDLFNBQVNHLGFBQWFDLEVBQUUsRUFBRUMsRUFBRTtJQUN2QyxJQUFJQSxPQUFPLEtBQUssR0FBRztRQUFFQSxLQUFLO0lBQUc7SUFDN0IsSUFBSUMsUUFBUUosNkNBQU1BLENBQUM7SUFDbkIsSUFBSUssVUFBVUwsNkNBQU1BO0lBQ3BCLElBQUlNLFdBQVdOLDZDQUFNQSxDQUFDRTtJQUN0QixJQUFJSyxVQUFVVCxrREFBV0EsQ0FBQztRQUFjLE9BQU9NLE1BQU1JLE9BQU87SUFBRSxHQUFHLEVBQUU7SUFDbkUsSUFBSUMsTUFBTVgsa0RBQVdBLENBQUM7UUFDbEJNLE1BQU1JLE9BQU8sR0FBRztRQUNoQkgsUUFBUUcsT0FBTyxJQUFJRSxhQUFhTCxRQUFRRyxPQUFPO1FBQy9DSCxRQUFRRyxPQUFPLEdBQUdHLFdBQVc7WUFDekJQLE1BQU1JLE9BQU8sR0FBRztZQUNoQkYsU0FBU0UsT0FBTztRQUNwQixHQUFHTDtJQUNQLEdBQUc7UUFBQ0E7S0FBRztJQUNQLElBQUlTLFFBQVFkLGtEQUFXQSxDQUFDO1FBQ3BCTSxNQUFNSSxPQUFPLEdBQUc7UUFDaEJILFFBQVFHLE9BQU8sSUFBSUUsYUFBYUwsUUFBUUcsT0FBTztJQUNuRCxHQUFHLEVBQUU7SUFDTCxtQ0FBbUM7SUFDbkNULGdEQUFTQSxDQUFDO1FBQ05PLFNBQVNFLE9BQU8sR0FBR047SUFDdkIsR0FBRztRQUFDQTtLQUFHO0lBQ1AsaUNBQWlDO0lBQ2pDSCxnREFBU0EsQ0FBQztRQUNOVTtRQUNBLE9BQU9HO0lBQ1gsR0FBRztRQUFDVDtLQUFHO0lBQ1AsT0FBTztRQUFDSTtRQUFTSztRQUFPSDtLQUFJO0FBQ2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVleHktbXVpLW5leHRqcy1hZG1pbi10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVRpbWVvdXRGbi5qcz9mMzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRpbWVvdXRGbihmbiwgbXMpIHtcbiAgICBpZiAobXMgPT09IHZvaWQgMCkgeyBtcyA9IDA7IH1cbiAgICB2YXIgcmVhZHkgPSB1c2VSZWYoZmFsc2UpO1xuICAgIHZhciB0aW1lb3V0ID0gdXNlUmVmKCk7XG4gICAgdmFyIGNhbGxiYWNrID0gdXNlUmVmKGZuKTtcbiAgICB2YXIgaXNSZWFkeSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWR5LmN1cnJlbnQ7IH0sIFtdKTtcbiAgICB2YXIgc2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICByZWFkeS5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHRpbWVvdXQuY3VycmVudCAmJiBjbGVhclRpbWVvdXQodGltZW91dC5jdXJyZW50KTtcbiAgICAgICAgdGltZW91dC5jdXJyZW50ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWFkeS5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbGxiYWNrLmN1cnJlbnQoKTtcbiAgICAgICAgfSwgbXMpO1xuICAgIH0sIFttc10pO1xuICAgIHZhciBjbGVhciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVhZHkuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHRpbWVvdXQuY3VycmVudCAmJiBjbGVhclRpbWVvdXQodGltZW91dC5jdXJyZW50KTtcbiAgICB9LCBbXSk7XG4gICAgLy8gdXBkYXRlIHJlZiB3aGVuIGZ1bmN0aW9uIGNoYW5nZXNcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjay5jdXJyZW50ID0gZm47XG4gICAgfSwgW2ZuXSk7XG4gICAgLy8gc2V0IG9uIG1vdW50LCBjbGVhciBvbiB1bm1vdW50XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0KCk7XG4gICAgICAgIHJldHVybiBjbGVhcjtcbiAgICB9LCBbbXNdKTtcbiAgICByZXR1cm4gW2lzUmVhZHksIGNsZWFyLCBzZXRdO1xufVxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlVGltZW91dEZuIiwiZm4iLCJtcyIsInJlYWR5IiwidGltZW91dCIsImNhbGxiYWNrIiwiaXNSZWFkeSIsImN1cnJlbnQiLCJzZXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useTimeoutFn.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useUpdateEffect.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useUpdateEffect.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useFirstMountState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFirstMountState */ \"(ssr)/./node_modules/react-use/esm/useFirstMountState.js\");\n\n\nvar useUpdateEffect = function(effect, deps) {\n    var isFirstMount = (0,_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__.useFirstMountState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        if (!isFirstMount) {\n            return effect();\n        }\n    }, deps);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUpdateEffect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VVcGRhdGVFZmZlY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrQztBQUN3QjtBQUMxRCxJQUFJRSxrQkFBa0IsU0FBVUMsTUFBTSxFQUFFQyxJQUFJO0lBQ3hDLElBQUlDLGVBQWVKLHVFQUFrQkE7SUFDckNELGdEQUFTQSxDQUFDO1FBQ04sSUFBSSxDQUFDSyxjQUFjO1lBQ2YsT0FBT0Y7UUFDWDtJQUNKLEdBQUdDO0FBQ1A7QUFDQSxpRUFBZUYsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZXh5LW11aS1uZXh0anMtYWRtaW4tdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VVcGRhdGVFZmZlY3QuanM/ZGE1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGaXJzdE1vdW50U3RhdGUgfSBmcm9tICcuL3VzZUZpcnN0TW91bnRTdGF0ZSc7XG52YXIgdXNlVXBkYXRlRWZmZWN0ID0gZnVuY3Rpb24gKGVmZmVjdCwgZGVwcykge1xuICAgIHZhciBpc0ZpcnN0TW91bnQgPSB1c2VGaXJzdE1vdW50U3RhdGUoKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRmlyc3RNb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVmZmVjdCgpO1xuICAgICAgICB9XG4gICAgfSwgZGVwcyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlVXBkYXRlRWZmZWN0O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUZpcnN0TW91bnRTdGF0ZSIsInVzZVVwZGF0ZUVmZmVjdCIsImVmZmVjdCIsImRlcHMiLCJpc0ZpcnN0TW91bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useUpdateEffect.js\n");

/***/ })

};
;