(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "@reduxjs/toolkit/query"
const query_namespaceObject = require("@reduxjs/toolkit/query");
// EXTERNAL MODULE: ./src/redux/service.ts + 1 modules
var service = __webpack_require__(27);
;// CONCATENATED MODULE: ./src/redux/store.ts
/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */ 
// Or from '@reduxjs/toolkit/query/react'


const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [service/* imageApi.reducerPath */.Rf.reducerPath]: service/* imageApi.reducer */.Rf.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(service/* imageApi.middleware */.Rf.middleware)
});
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
(0,query_namespaceObject.setupListeners)(store.dispatch);

;// CONCATENATED MODULE: ./src/pages/_app.tsx



// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";


function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
            store: store,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Rf": () => (/* binding */ imageApi),
  "_$": () => (/* binding */ useGetImageByNameQuery),
  "X3": () => (/* binding */ useLazyGetImageByNameQuery)
});

;// CONCATENATED MODULE: external "@reduxjs/toolkit/query/react"
const react_namespaceObject = require("@reduxjs/toolkit/query/react");
;// CONCATENATED MODULE: ./src/redux/service.ts
/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */ 
const imageApi = (0,react_namespaceObject.createApi)({
    reducerPath: "imgApi",
    baseQuery: (0,react_namespaceObject.fetchBaseQuery)({
        baseUrl: "https://api.pexels.com",
        headers: {
            Authorization: "563492ad6f917000010000013055054dae6a40da8456b7ccde8b934c"
        }
    }),
    endpoints: (builder)=>{
        return {
            getImageByName: builder.query({
                query: (data)=>{
                    return `v1/search?query=${data === null || data === void 0 ? void 0 : data.name}&page=${data === null || data === void 0 ? void 0 : data.page}`;
                }
            })
        };
    }
});
const { useGetImageByNameQuery , useLazyGetImageByNameQuery  } = imageApi;


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(377));
module.exports = __webpack_exports__;

})();