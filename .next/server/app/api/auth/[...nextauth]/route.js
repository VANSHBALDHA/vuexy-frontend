"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cbaldh%5COneDrive%5CDesktop%5Cvuexy%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbaldh%5COneDrive%5CDesktop%5Cvuexy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cbaldh%5COneDrive%5CDesktop%5Cvuexy%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbaldh%5COneDrive%5CDesktop%5Cvuexy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_baldh_OneDrive_Desktop_vuexy_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\baldh\\\\OneDrive\\\\Desktop\\\\vuexy\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_baldh_OneDrive_Desktop_vuexy_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNiYWxkaCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q3Z1ZXh5JTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNiYWxkaCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q3Z1ZXh5JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN3QztBQUNySDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZXh5LW11aS1uZXh0anMtYWRtaW4tdGVtcGxhdGUvP2UxNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcYmFsZGhcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFx2dWV4eVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcYmFsZGhcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFx2dWV4eVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cbaldh%5COneDrive%5CDesktop%5Cvuexy%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbaldh%5COneDrive%5CDesktop%5Cvuexy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/auth */ \"(rsc)/./src/libs/auth.ts\");\n// Third-party Imports\n\n// Lib Imports\n\n/*\n * As we do not have backend server, the refresh token feature has not been incorporated into the template.\n * Please refer https://next-auth.js.org/tutorials/refresh-token-rotation link for a reference.\n */ const handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_libs_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQkFBc0I7QUFDVTtBQUVoQyxjQUFjO0FBQzJCO0FBRXpDOzs7Q0FHQyxHQUVELE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxtREFBV0E7QUFFTSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZXh5LW11aS1uZXh0anMtYWRtaW4tdGVtcGxhdGUvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/MDA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlyZC1wYXJ0eSBJbXBvcnRzXG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuXG4vLyBMaWIgSW1wb3J0c1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2xpYnMvYXV0aCdcblxuLypcbiAqIEFzIHdlIGRvIG5vdCBoYXZlIGJhY2tlbmQgc2VydmVyLCB0aGUgcmVmcmVzaCB0b2tlbiBmZWF0dXJlIGhhcyBub3QgYmVlbiBpbmNvcnBvcmF0ZWQgaW50byB0aGUgdGVtcGxhdGUuXG4gKiBQbGVhc2UgcmVmZXIgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3R1dG9yaWFscy9yZWZyZXNoLXRva2VuLXJvdGF0aW9uIGxpbmsgZm9yIGEgcmVmZXJlbmNlLlxuICovXG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucylcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/libs/auth.ts":
/*!**************************!*\
  !*** ./src/libs/auth.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n// Third-party Imports\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(prisma),\n    // ** Configure one or more authentication providers\n    // ** Please refer to https://next-auth.js.org/configuration/options#providers for more `providers` options\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            // ** The name to display on the sign in form (e.g. 'Sign in with...')\n            // ** For more details on Credentials Provider, visit https://next-auth.js.org/providers/credentials\n            name: \"Credentials\",\n            type: \"credentials\",\n            /*\n       * As we are using our own Sign-in page, we do not need to change\n       * username or password attributes manually in following credentials object.\n       */ credentials: {},\n            async authorize (credentials) {\n                /*\n         * You need to provide your own logic here that takes the credentials submitted and returns either\n         * an object representing a user or value that is false/null if the credentials are invalid.\n         * For e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }\n         * You can also use the `req` object to obtain additional parameters (i.e., the request IP address)\n         */ const { email, password } = credentials;\n                try {\n                    // ** Login API Call to match the user credentials and receive user data in response along with his role\n                    const res = await fetch(`http://localhost:3000/api/login`, {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify({\n                            email,\n                            password\n                        })\n                    });\n                    const data = await res.json();\n                    if (res.status === 401) {\n                        throw new Error(JSON.stringify(data));\n                    }\n                    if (res.status === 200) {\n                        /*\n             * Please unset all the sensitive information of the user either from API response or before returning\n             * user data below. Below return statement will set the user object in the token and the same is set in\n             * the session which will be accessible all over the app.\n             */ return data;\n                    }\n                    return null;\n                } catch (e) {\n                    throw new Error(e.message);\n                }\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    // ** Please refer to https://next-auth.js.org/configuration/options#session for more `session` options\n    session: {\n        /*\n     * Choose how you want to save the user session.\n     * The default is `jwt`, an encrypted JWT (JWE) stored in the session cookie.\n     * If you use an `adapter` however, NextAuth default it to `database` instead.\n     * You can still force a JWT session by explicitly defining `jwt`.\n     * When using `database`, the session cookie will only contain a `sessionToken` value,\n     * which is used to look up the session in the database.\n     * If you use a custom credentials provider, user accounts will not be persisted in a database by NextAuth.js (even if one is configured).\n     * The option to use JSON Web Tokens for session tokens must be enabled to use a custom credentials provider.\n     */ strategy: \"jwt\",\n        // ** Seconds - How long until an idle session expires and is no longer valid\n        maxAge: 30 * 24 * 60 * 60 // ** 30 days\n    },\n    // ** Please refer to https://next-auth.js.org/configuration/options#pages for more `pages` options\n    pages: {\n        signIn: \"/login\"\n    },\n    // ** Please refer to https://next-auth.js.org/configuration/options#callbacks for more `callbacks` options\n    callbacks: {\n        /*\n     * While using `jwt` as a strategy, `jwt()` callback will be called before\n     * the `session()` callback. So we have to add custom parameters in `token`\n     * via `jwt()` callback to make them accessible in the `session()` callback\n     */ async jwt ({ token, user }) {\n            if (user) {\n                /*\n         * For adding custom parameters to user in session, we first need to add those parameters\n         * in token which then will be available in the `session()` callback\n         */ token.name = user.name;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter\n                session.user.name = token.name;\n            }\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHNCQUFzQjtBQUM4QjtBQUNQO0FBR21CO0FBQ1Q7QUFFdkQsTUFBTUksU0FBUyxJQUFJSCx3REFBWUE7QUFFeEIsTUFBTUksY0FBK0I7SUFDMUNDLFNBQVNOLG1FQUFhQSxDQUFDSTtJQUV2QixvREFBb0Q7SUFDcEQsMkdBQTJHO0lBQzNHRyxXQUFXO1FBQ1RMLDJFQUFrQkEsQ0FBQztZQUNqQixzRUFBc0U7WUFDdEUsb0dBQW9HO1lBQ3BHTSxNQUFNO1lBQ05DLE1BQU07WUFFTjs7O09BR0MsR0FDREMsYUFBYSxDQUFDO1lBQ2QsTUFBTUMsV0FBVUQsV0FBVztnQkFDekI7Ozs7O1NBS0MsR0FDRCxNQUFNLEVBQUVFLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdIO2dCQUU1QixJQUFJO29CQUNGLHdHQUF3RztvQkFDeEcsTUFBTUksTUFBTSxNQUFNQyxNQUFNLENBQUMsK0JBQStCLENBQUMsRUFBRTt3QkFDekRDLFFBQVE7d0JBQ1JDLFNBQVM7NEJBQ1AsZ0JBQWdCO3dCQUNsQjt3QkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDOzRCQUFFUjs0QkFBT0M7d0JBQVM7b0JBQ3pDO29CQUVBLE1BQU1RLE9BQU8sTUFBTVAsSUFBSVEsSUFBSTtvQkFFM0IsSUFBSVIsSUFBSVMsTUFBTSxLQUFLLEtBQUs7d0JBQ3RCLE1BQU0sSUFBSUMsTUFBTUwsS0FBS0MsU0FBUyxDQUFDQztvQkFDakM7b0JBRUEsSUFBSVAsSUFBSVMsTUFBTSxLQUFLLEtBQUs7d0JBQ3RCOzs7O2FBSUMsR0FDRCxPQUFPRjtvQkFDVDtvQkFFQSxPQUFPO2dCQUNULEVBQUUsT0FBT0ksR0FBUTtvQkFDZixNQUFNLElBQUlELE1BQU1DLEVBQUVDLE9BQU87Z0JBQzNCO1lBQ0Y7UUFDRjtRQUVBdkIsc0VBQWNBLENBQUM7WUFDYndCLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNoRDtLQUdEO0lBRUQsdUdBQXVHO0lBQ3ZHQyxTQUFTO1FBQ1A7Ozs7Ozs7OztLQVNDLEdBQ0RDLFVBQVU7UUFFViw2RUFBNkU7UUFDN0VDLFFBQVEsS0FBSyxLQUFLLEtBQUssR0FBRyxhQUFhO0lBQ3pDO0lBRUEsbUdBQW1HO0lBQ25HQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUVBLDJHQUEyRztJQUMzR0MsV0FBVztRQUNUOzs7O0tBSUMsR0FDRCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1I7OztTQUdDLEdBQ0RELE1BQU1oQyxJQUFJLEdBQUdpQyxLQUFLakMsSUFBSTtZQUN4QjtZQUVBLE9BQU9nQztRQUNUO1FBQ0EsTUFBTVAsU0FBUSxFQUFFQSxPQUFPLEVBQUVPLEtBQUssRUFBRTtZQUM5QixJQUFJUCxRQUFRUSxJQUFJLEVBQUU7Z0JBQ2hCLG9HQUFvRztnQkFDcEdSLFFBQVFRLElBQUksQ0FBQ2pDLElBQUksR0FBR2dDLE1BQU1oQyxJQUFJO1lBQ2hDO1lBRUEsT0FBT3lCO1FBQ1Q7SUFDRjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWV4eS1tdWktbmV4dGpzLWFkbWluLXRlbXBsYXRlLy4vc3JjL2xpYnMvYXV0aC50cz8yNzUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXJkLXBhcnR5IEltcG9ydHNcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tICdAYXV0aC9wcmlzbWEtYWRhcHRlcidcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHR5cGUgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgdHlwZSB7IEFkYXB0ZXIgfSBmcm9tICduZXh0LWF1dGgvYWRhcHRlcnMnXG5pbXBvcnQgQ3JlZGVudGlhbFByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpIGFzIEFkYXB0ZXIsXG5cbiAgLy8gKiogQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICAvLyAqKiBQbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9ucyNwcm92aWRlcnMgZm9yIG1vcmUgYHByb3ZpZGVyc2Agb3B0aW9uc1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsUHJvdmlkZXIoe1xuICAgICAgLy8gKiogVGhlIG5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuICdTaWduIGluIHdpdGguLi4nKVxuICAgICAgLy8gKiogRm9yIG1vcmUgZGV0YWlscyBvbiBDcmVkZW50aWFscyBQcm92aWRlciwgdmlzaXQgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3Byb3ZpZGVycy9jcmVkZW50aWFsc1xuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIHR5cGU6ICdjcmVkZW50aWFscycsXG5cbiAgICAgIC8qXG4gICAgICAgKiBBcyB3ZSBhcmUgdXNpbmcgb3VyIG93biBTaWduLWluIHBhZ2UsIHdlIGRvIG5vdCBuZWVkIHRvIGNoYW5nZVxuICAgICAgICogdXNlcm5hbWUgb3IgcGFzc3dvcmQgYXR0cmlidXRlcyBtYW51YWxseSBpbiBmb2xsb3dpbmcgY3JlZGVudGlhbHMgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBjcmVkZW50aWFsczoge30sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgLypcbiAgICAgICAgICogWW91IG5lZWQgdG8gcHJvdmlkZSB5b3VyIG93biBsb2dpYyBoZXJlIHRoYXQgdGFrZXMgdGhlIGNyZWRlbnRpYWxzIHN1Ym1pdHRlZCBhbmQgcmV0dXJucyBlaXRoZXJcbiAgICAgICAgICogYW4gb2JqZWN0IHJlcHJlc2VudGluZyBhIHVzZXIgb3IgdmFsdWUgdGhhdCBpcyBmYWxzZS9udWxsIGlmIHRoZSBjcmVkZW50aWFscyBhcmUgaW52YWxpZC5cbiAgICAgICAgICogRm9yIGUuZy4gcmV0dXJuIHsgaWQ6IDEsIG5hbWU6ICdKIFNtaXRoJywgZW1haWw6ICdqc21pdGhAZXhhbXBsZS5jb20nIH1cbiAgICAgICAgICogWW91IGNhbiBhbHNvIHVzZSB0aGUgYHJlcWAgb2JqZWN0IHRvIG9idGFpbiBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgKGkuZS4sIHRoZSByZXF1ZXN0IElQIGFkZHJlc3MpXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHMgYXMgeyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vICoqIExvZ2luIEFQSSBDYWxsIHRvIG1hdGNoIHRoZSB1c2VyIGNyZWRlbnRpYWxzIGFuZCByZWNlaXZlIHVzZXIgZGF0YSBpbiByZXNwb25zZSBhbG9uZyB3aXRoIGhpcyByb2xlXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW5gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIFBsZWFzZSB1bnNldCBhbGwgdGhlIHNlbnNpdGl2ZSBpbmZvcm1hdGlvbiBvZiB0aGUgdXNlciBlaXRoZXIgZnJvbSBBUEkgcmVzcG9uc2Ugb3IgYmVmb3JlIHJldHVybmluZ1xuICAgICAgICAgICAgICogdXNlciBkYXRhIGJlbG93LiBCZWxvdyByZXR1cm4gc3RhdGVtZW50IHdpbGwgc2V0IHRoZSB1c2VyIG9iamVjdCBpbiB0aGUgdG9rZW4gYW5kIHRoZSBzYW1lIGlzIHNldCBpblxuICAgICAgICAgICAgICogdGhlIHNlc3Npb24gd2hpY2ggd2lsbCBiZSBhY2Nlc3NpYmxlIGFsbCBvdmVyIHRoZSBhcHAuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgYXMgc3RyaW5nLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCBhcyBzdHJpbmdcbiAgICB9KVxuXG4gICAgLy8gKiogLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgXSxcblxuICAvLyAqKiBQbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9ucyNzZXNzaW9uIGZvciBtb3JlIGBzZXNzaW9uYCBvcHRpb25zXG4gIHNlc3Npb246IHtcbiAgICAvKlxuICAgICAqIENob29zZSBob3cgeW91IHdhbnQgdG8gc2F2ZSB0aGUgdXNlciBzZXNzaW9uLlxuICAgICAqIFRoZSBkZWZhdWx0IGlzIGBqd3RgLCBhbiBlbmNyeXB0ZWQgSldUIChKV0UpIHN0b3JlZCBpbiB0aGUgc2Vzc2lvbiBjb29raWUuXG4gICAgICogSWYgeW91IHVzZSBhbiBgYWRhcHRlcmAgaG93ZXZlciwgTmV4dEF1dGggZGVmYXVsdCBpdCB0byBgZGF0YWJhc2VgIGluc3RlYWQuXG4gICAgICogWW91IGNhbiBzdGlsbCBmb3JjZSBhIEpXVCBzZXNzaW9uIGJ5IGV4cGxpY2l0bHkgZGVmaW5pbmcgYGp3dGAuXG4gICAgICogV2hlbiB1c2luZyBgZGF0YWJhc2VgLCB0aGUgc2Vzc2lvbiBjb29raWUgd2lsbCBvbmx5IGNvbnRhaW4gYSBgc2Vzc2lvblRva2VuYCB2YWx1ZSxcbiAgICAgKiB3aGljaCBpcyB1c2VkIHRvIGxvb2sgdXAgdGhlIHNlc3Npb24gaW4gdGhlIGRhdGFiYXNlLlxuICAgICAqIElmIHlvdSB1c2UgYSBjdXN0b20gY3JlZGVudGlhbHMgcHJvdmlkZXIsIHVzZXIgYWNjb3VudHMgd2lsbCBub3QgYmUgcGVyc2lzdGVkIGluIGEgZGF0YWJhc2UgYnkgTmV4dEF1dGguanMgKGV2ZW4gaWYgb25lIGlzIGNvbmZpZ3VyZWQpLlxuICAgICAqIFRoZSBvcHRpb24gdG8gdXNlIEpTT04gV2ViIFRva2VucyBmb3Igc2Vzc2lvbiB0b2tlbnMgbXVzdCBiZSBlbmFibGVkIHRvIHVzZSBhIGN1c3RvbSBjcmVkZW50aWFscyBwcm92aWRlci5cbiAgICAgKi9cbiAgICBzdHJhdGVneTogJ2p3dCcsXG5cbiAgICAvLyAqKiBTZWNvbmRzIC0gSG93IGxvbmcgdW50aWwgYW4gaWRsZSBzZXNzaW9uIGV4cGlyZXMgYW5kIGlzIG5vIGxvbmdlciB2YWxpZFxuICAgIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAgLy8gKiogMzAgZGF5c1xuICB9LFxuXG4gIC8vICoqIFBsZWFzZSByZWZlciB0byBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zI3BhZ2VzIGZvciBtb3JlIGBwYWdlc2Agb3B0aW9uc1xuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9sb2dpbidcbiAgfSxcblxuICAvLyAqKiBQbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9ucyNjYWxsYmFja3MgZm9yIG1vcmUgYGNhbGxiYWNrc2Agb3B0aW9uc1xuICBjYWxsYmFja3M6IHtcbiAgICAvKlxuICAgICAqIFdoaWxlIHVzaW5nIGBqd3RgIGFzIGEgc3RyYXRlZ3ksIGBqd3QoKWAgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlXG4gICAgICogdGhlIGBzZXNzaW9uKClgIGNhbGxiYWNrLiBTbyB3ZSBoYXZlIHRvIGFkZCBjdXN0b20gcGFyYW1ldGVycyBpbiBgdG9rZW5gXG4gICAgICogdmlhIGBqd3QoKWAgY2FsbGJhY2sgdG8gbWFrZSB0aGVtIGFjY2Vzc2libGUgaW4gdGhlIGBzZXNzaW9uKClgIGNhbGxiYWNrXG4gICAgICovXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgLypcbiAgICAgICAgICogRm9yIGFkZGluZyBjdXN0b20gcGFyYW1ldGVycyB0byB1c2VyIGluIHNlc3Npb24sIHdlIGZpcnN0IG5lZWQgdG8gYWRkIHRob3NlIHBhcmFtZXRlcnNcbiAgICAgICAgICogaW4gdG9rZW4gd2hpY2ggdGhlbiB3aWxsIGJlIGF2YWlsYWJsZSBpbiB0aGUgYHNlc3Npb24oKWAgY2FsbGJhY2tcbiAgICAgICAgICovXG4gICAgICAgIHRva2VuLm5hbWUgPSB1c2VyLm5hbWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRva2VuXG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICAvLyAqKiBBZGQgY3VzdG9tIHBhcmFtcyB0byB1c2VyIGluIHNlc3Npb24gd2hpY2ggYXJlIGFkZGVkIGluIGBqd3QoKWAgY2FsbGJhY2sgdmlhIGB0b2tlbmAgcGFyYW1ldGVyXG4gICAgICAgIHNlc3Npb24udXNlci5uYW1lID0gdG9rZW4ubmFtZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2Vzc2lvblxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUFkYXB0ZXIiLCJQcmlzbWFDbGllbnQiLCJDcmVkZW50aWFsUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsInByaXNtYSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsIm5hbWUiLCJ0eXBlIiwiY3JlZGVudGlhbHMiLCJhdXRob3JpemUiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsIkVycm9yIiwiZSIsIm1lc3NhZ2UiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/@auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cbaldh%5COneDrive%5CDesktop%5Cvuexy%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbaldh%5COneDrive%5CDesktop%5Cvuexy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();