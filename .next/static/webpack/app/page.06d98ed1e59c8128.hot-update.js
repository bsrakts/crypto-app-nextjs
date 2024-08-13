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

/***/ "(app-pages-browser)/./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToWebSocket: function() { return /* binding */ connectToWebSocket; },\n/* harmony export */   fetchInitialData: function() { return /* binding */ fetchInitialData; }\n/* harmony export */ });\nconst COIN_LIST = [\n    \"ethereum\",\n    \"usdt\",\n    \"avalanche\",\n    \"bitcoin\",\n    \"tron\",\n    \"chainlink\",\n    \"shib\",\n    \"solana\",\n    \"decentraland\",\n    \"sand\"\n];\nconst getUnixTimestamp = (hoursAgo)=>{\n    return Date.now() - hoursAgo * 60 * 60 * 1000;\n};\nasync function fetchInitialData() {\n    const initialData = {};\n    const startTime = getUnixTimestamp(24);\n    const endTime = Date.now();\n    for (const coin of COIN_LIST){\n        const response = await fetch(\"https://api.coincap.io/v2/assets/\".concat(coin));\n        const data = await response.json();\n        // const historyResponse = await fetch(\n        //   `https://api.coincap.io/v2/assets/${coin}/history?interval=h1&start=${startTime}&end=${endTime}`\n        // );\n        const historyResponse = await fetch(\"https://api.coincap.io/v2/assets/shiba/history?interval=h1&start=\".concat(startTime, \"&end=\").concat(endTime));\n        console.log(historyResponse);\n        const historyData = await historyResponse.json();\n        if (data.data && historyData.data) {\n            initialData[coin.toLowerCase()] = {\n                price: Number(data.data.priceUsd).toFixed(9),\n                symbol: data.data.symbol,\n                marketValue: (Number(data.data.marketCapUsd) / 1e9).toFixed(2),\n                change24h: Number(data.data.changePercent24Hr).toFixed(2),\n                history: historyData.data.map((item)=>Number(item.priceUsd))\n            };\n        }\n    }\n    return initialData;\n}\nconst connectToWebSocket = (onMessage)=>{\n    const pricesWs = new WebSocket(\"wss://ws.coincap.io/prices?assets=\".concat(COIN_LIST.join(\",\")));\n    pricesWs.onmessage = function(msg) {\n        const data = JSON.parse(msg.data);\n        onMessage(data);\n    };\n    pricesWs.onclose = function() {\n        console.log(\"WebSocket connection closed\");\n    };\n    return ()=>{\n        pricesWs.close();\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNQSxZQUFZO0lBQ2hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxNQUFNQyxtQkFBbUIsQ0FBQ0M7SUFDeEIsT0FBT0MsS0FBS0MsR0FBRyxLQUFLRixXQUFXLEtBQUssS0FBSztBQUMzQztBQUVPLGVBQWVHO0lBQ3BCLE1BQU1DLGNBQXdDLENBQUM7SUFFL0MsTUFBTUMsWUFBWU4saUJBQWlCO0lBQ25DLE1BQU1PLFVBQVVMLEtBQUtDLEdBQUc7SUFFeEIsS0FBSyxNQUFNSyxRQUFRVCxVQUFXO1FBQzVCLE1BQU1VLFdBQVcsTUFBTUMsTUFBTSxvQ0FBeUMsT0FBTEY7UUFDakUsTUFBTUcsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1FBRWhDLHVDQUF1QztRQUN2QyxxR0FBcUc7UUFDckcsS0FBSztRQUVMLE1BQU1DLGtCQUFrQixNQUFNSCxNQUM1QixvRUFBcUZILE9BQWpCRCxXQUFVLFNBQWUsT0FBUkM7UUFHdkZPLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixNQUFNRyxjQUFjLE1BQU1ILGdCQUFnQkQsSUFBSTtRQUU5QyxJQUFJRCxLQUFLQSxJQUFJLElBQUlLLFlBQVlMLElBQUksRUFBRTtZQUNqQ04sV0FBVyxDQUFDRyxLQUFLUyxXQUFXLEdBQUcsR0FBRztnQkFDaENDLE9BQU9DLE9BQU9SLEtBQUtBLElBQUksQ0FBQ1MsUUFBUSxFQUFFQyxPQUFPLENBQUM7Z0JBQzFDQyxRQUFRWCxLQUFLQSxJQUFJLENBQUNXLE1BQU07Z0JBQ3hCQyxhQUFhLENBQUNKLE9BQU9SLEtBQUtBLElBQUksQ0FBQ2EsWUFBWSxJQUFJLEdBQUUsRUFBR0gsT0FBTyxDQUFDO2dCQUM1REksV0FBV04sT0FBT1IsS0FBS0EsSUFBSSxDQUFDZSxpQkFBaUIsRUFBRUwsT0FBTyxDQUFDO2dCQUN2RE0sU0FBU1gsWUFBWUwsSUFBSSxDQUFDaUIsR0FBRyxDQUFDLENBQUNDLE9BQWNWLE9BQU9VLEtBQUtULFFBQVE7WUFDbkU7UUFDRjtJQUNGO0lBRUEsT0FBT2Y7QUFDVDtBQUVPLE1BQU15QixxQkFBcUIsQ0FDaENDO0lBRUEsTUFBTUMsV0FBVyxJQUFJQyxVQUNuQixxQ0FBeUQsT0FBcEJsQyxVQUFVbUMsSUFBSSxDQUFDO0lBR3RERixTQUFTRyxTQUFTLEdBQUcsU0FBVUMsR0FBRztRQUNoQyxNQUFNekIsT0FBTzBCLEtBQUtDLEtBQUssQ0FBQ0YsSUFBSXpCLElBQUk7UUFDaENvQixVQUFVcEI7SUFDWjtJQUVBcUIsU0FBU08sT0FBTyxHQUFHO1FBQ2pCekIsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7SUFFQSxPQUFPO1FBQ0xpQixTQUFTUSxLQUFLO0lBQ2hCO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvYXBpLnRzPzk1NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29pbkRhdGEgfSBmcm9tIFwiLi5cIjtcblxuY29uc3QgQ09JTl9MSVNUID0gW1xuICBcImV0aGVyZXVtXCIsXG4gIFwidXNkdFwiLFxuICBcImF2YWxhbmNoZVwiLFxuICBcImJpdGNvaW5cIixcbiAgXCJ0cm9uXCIsXG4gIFwiY2hhaW5saW5rXCIsXG4gIFwic2hpYlwiLFxuICBcInNvbGFuYVwiLFxuICBcImRlY2VudHJhbGFuZFwiLFxuICBcInNhbmRcIixcbl07XG5cbmNvbnN0IGdldFVuaXhUaW1lc3RhbXAgPSAoaG91cnNBZ286IG51bWJlcikgPT4ge1xuICByZXR1cm4gRGF0ZS5ub3coKSAtIGhvdXJzQWdvICogNjAgKiA2MCAqIDEwMDA7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hJbml0aWFsRGF0YSgpOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIENvaW5EYXRhPj4ge1xuICBjb25zdCBpbml0aWFsRGF0YTogUmVjb3JkPHN0cmluZywgQ29pbkRhdGE+ID0ge307XG5cbiAgY29uc3Qgc3RhcnRUaW1lID0gZ2V0VW5peFRpbWVzdGFtcCgyNCk7XG4gIGNvbnN0IGVuZFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gIGZvciAoY29uc3QgY29pbiBvZiBDT0lOX0xJU1QpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5jb2luY2FwLmlvL3YyL2Fzc2V0cy8ke2NvaW59YCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIC8vIGNvbnN0IGhpc3RvcnlSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIC8vICAgYGh0dHBzOi8vYXBpLmNvaW5jYXAuaW8vdjIvYXNzZXRzLyR7Y29pbn0vaGlzdG9yeT9pbnRlcnZhbD1oMSZzdGFydD0ke3N0YXJ0VGltZX0mZW5kPSR7ZW5kVGltZX1gXG4gICAgLy8gKTtcblxuICAgIGNvbnN0IGhpc3RvcnlSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLmNvaW5jYXAuaW8vdjIvYXNzZXRzL3NoaWJhL2hpc3Rvcnk/aW50ZXJ2YWw9aDEmc3RhcnQ9JHtzdGFydFRpbWV9JmVuZD0ke2VuZFRpbWV9YFxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhoaXN0b3J5UmVzcG9uc2UpO1xuICAgIGNvbnN0IGhpc3RvcnlEYXRhID0gYXdhaXQgaGlzdG9yeVJlc3BvbnNlLmpzb24oKTtcblxuICAgIGlmIChkYXRhLmRhdGEgJiYgaGlzdG9yeURhdGEuZGF0YSkge1xuICAgICAgaW5pdGlhbERhdGFbY29pbi50b0xvd2VyQ2FzZSgpXSA9IHtcbiAgICAgICAgcHJpY2U6IE51bWJlcihkYXRhLmRhdGEucHJpY2VVc2QpLnRvRml4ZWQoOSksXG4gICAgICAgIHN5bWJvbDogZGF0YS5kYXRhLnN5bWJvbCxcbiAgICAgICAgbWFya2V0VmFsdWU6IChOdW1iZXIoZGF0YS5kYXRhLm1hcmtldENhcFVzZCkgLyAxZTkpLnRvRml4ZWQoMiksXG4gICAgICAgIGNoYW5nZTI0aDogTnVtYmVyKGRhdGEuZGF0YS5jaGFuZ2VQZXJjZW50MjRIcikudG9GaXhlZCgyKSxcbiAgICAgICAgaGlzdG9yeTogaGlzdG9yeURhdGEuZGF0YS5tYXAoKGl0ZW06IGFueSkgPT4gTnVtYmVyKGl0ZW0ucHJpY2VVc2QpKSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluaXRpYWxEYXRhO1xufVxuXG5leHBvcnQgY29uc3QgY29ubmVjdFRvV2ViU29ja2V0ID0gKFxuICBvbk1lc3NhZ2U6IChkYXRhOiBSZWNvcmQ8c3RyaW5nLCBDb2luRGF0YT4pID0+IHZvaWRcbikgPT4ge1xuICBjb25zdCBwcmljZXNXcyA9IG5ldyBXZWJTb2NrZXQoXG4gICAgYHdzczovL3dzLmNvaW5jYXAuaW8vcHJpY2VzP2Fzc2V0cz0ke0NPSU5fTElTVC5qb2luKFwiLFwiKX1gXG4gICk7XG5cbiAgcHJpY2VzV3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKG1zZykge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKG1zZy5kYXRhKTtcbiAgICBvbk1lc3NhZ2UoZGF0YSk7XG4gIH07XG5cbiAgcHJpY2VzV3Mub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIldlYlNvY2tldCBjb25uZWN0aW9uIGNsb3NlZFwiKTtcbiAgfTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIHByaWNlc1dzLmNsb3NlKCk7XG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkNPSU5fTElTVCIsImdldFVuaXhUaW1lc3RhbXAiLCJob3Vyc0FnbyIsIkRhdGUiLCJub3ciLCJmZXRjaEluaXRpYWxEYXRhIiwiaW5pdGlhbERhdGEiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwiY29pbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImhpc3RvcnlSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJoaXN0b3J5RGF0YSIsInRvTG93ZXJDYXNlIiwicHJpY2UiLCJOdW1iZXIiLCJwcmljZVVzZCIsInRvRml4ZWQiLCJzeW1ib2wiLCJtYXJrZXRWYWx1ZSIsIm1hcmtldENhcFVzZCIsImNoYW5nZTI0aCIsImNoYW5nZVBlcmNlbnQyNEhyIiwiaGlzdG9yeSIsIm1hcCIsIml0ZW0iLCJjb25uZWN0VG9XZWJTb2NrZXQiLCJvbk1lc3NhZ2UiLCJwcmljZXNXcyIsIldlYlNvY2tldCIsImpvaW4iLCJvbm1lc3NhZ2UiLCJtc2ciLCJKU09OIiwicGFyc2UiLCJvbmNsb3NlIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/api.ts\n"));

/***/ })

});