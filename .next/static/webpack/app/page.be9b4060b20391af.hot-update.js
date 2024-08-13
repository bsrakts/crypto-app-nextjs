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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToWebSocket: function() { return /* binding */ connectToWebSocket; },\n/* harmony export */   fetchInitialData: function() { return /* binding */ fetchInitialData; }\n/* harmony export */ });\nconst COIN_LIST = [\n    \"ethereum\",\n    \"usdt\",\n    \"avalanche\",\n    \"bitcoin\",\n    \"tron\",\n    \"chainlink\",\n    \"shib\",\n    \"solana\",\n    \"decentraland\",\n    \"sand\"\n];\nconst COIN_LIST_HISTORY = [\n    \"ethereum\",\n    \"usdC\",\n    \"avalanche\",\n    \"bitcoin\",\n    \"tron\",\n    \"chainlink\",\n    \"shiba-inu\",\n    \"solana\",\n    \"decentraland\",\n    \"the-sandbox\"\n];\nconst coinMapping = {};\nCOIN_LIST.forEach((coin, index)=>{\n    coinMapping[coin] = COIN_LIST_HISTORY[index];\n});\nasync function fetchInitialData() {\n    const response = await fetch(\"https://api.coincap.io/v2/assets\");\n    const data = await response.json();\n    const initialData = {};\n    for (const coin of COIN_LIST){\n        const coinData = data.data.find((item)=>item.id === coin || item.symbol.toLowerCase() === coin);\n        if (coinData) {\n            const historyResponse = await fetch(\"https://api.coincap.io/v2/assets/\".concat(coinMapping[coin], \"/history?interval=d1\"));\n            const historyData = await historyResponse.json();\n            // Fiyat geçmişini al\n            const priceHistory = historyData.data.map((entry)=>parseFloat(entry.priceUsd));\n            // Coin verilerini birleştir\n            initialData[coin.toLowerCase()] = {\n                price: Number(coinData.priceUsd).toFixed(9),\n                symbol: coinData.symbol,\n                marketValue: (Number(coinData.marketCapUsd) / 1e9).toFixed(2),\n                change24h: Number(coinData.changePercent24Hr).toFixed(2),\n                priceHistory\n            };\n        }\n    }\n    return initialData;\n}\nconst connectToWebSocket = (onMessage)=>{\n    const pricesWs = new WebSocket(\"wss://ws.coincap.io/prices?assets=\".concat(COIN_LIST.join(\",\")));\n    pricesWs.onmessage = function(msg) {\n        const data = JSON.parse(msg.data);\n        onMessage(data);\n    };\n    pricesWs.onclose = function() {\n        console.log(\"WebSocket connection closed\");\n    };\n    return ()=>{\n        pricesWs.close();\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNQSxZQUFZO0lBQ2hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxNQUFNQyxvQkFBb0I7SUFDeEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELE1BQU1DLGNBQXNDLENBQUM7QUFDN0NGLFVBQVVHLE9BQU8sQ0FBQyxDQUFDQyxNQUFNQztJQUN2QkgsV0FBVyxDQUFDRSxLQUFLLEdBQUdILGlCQUFpQixDQUFDSSxNQUFNO0FBQzlDO0FBRU8sZUFBZUM7SUFDcEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO0lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUVoQyxNQUFNQyxjQUF3QyxDQUFDO0lBRS9DLEtBQUssTUFBTVAsUUFBUUosVUFBVztRQUM1QixNQUFNWSxXQUFXSCxLQUFLQSxJQUFJLENBQUNJLElBQUksQ0FDN0IsQ0FBQ0MsT0FBY0EsS0FBS0MsRUFBRSxLQUFLWCxRQUFRVSxLQUFLRSxNQUFNLENBQUNDLFdBQVcsT0FBT2I7UUFHbkUsSUFBSVEsVUFBVTtZQUNaLE1BQU1NLGtCQUFrQixNQUFNVixNQUM1QixvQ0FBc0QsT0FBbEJOLFdBQVcsQ0FBQ0UsS0FBSyxFQUFDO1lBRXhELE1BQU1lLGNBQWMsTUFBTUQsZ0JBQWdCUixJQUFJO1lBRTlDLHFCQUFxQjtZQUNyQixNQUFNVSxlQUFlRCxZQUFZVixJQUFJLENBQUNZLEdBQUcsQ0FBQyxDQUFDQyxRQUN6Q0MsV0FBV0QsTUFBTUUsUUFBUTtZQUczQiw0QkFBNEI7WUFDNUJiLFdBQVcsQ0FBQ1AsS0FBS2EsV0FBVyxHQUFHLEdBQUc7Z0JBQ2hDUSxPQUFPQyxPQUFPZCxTQUFTWSxRQUFRLEVBQUVHLE9BQU8sQ0FBQztnQkFDekNYLFFBQVFKLFNBQVNJLE1BQU07Z0JBQ3ZCWSxhQUFhLENBQUNGLE9BQU9kLFNBQVNpQixZQUFZLElBQUksR0FBRSxFQUFHRixPQUFPLENBQUM7Z0JBQzNERyxXQUFXSixPQUFPZCxTQUFTbUIsaUJBQWlCLEVBQUVKLE9BQU8sQ0FBQztnQkFDdERQO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT1Q7QUFDVDtBQUVPLE1BQU1xQixxQkFBcUIsQ0FDaENDO0lBRUEsTUFBTUMsV0FBVyxJQUFJQyxVQUNuQixxQ0FBeUQsT0FBcEJuQyxVQUFVb0MsSUFBSSxDQUFDO0lBR3RERixTQUFTRyxTQUFTLEdBQUcsU0FBVUMsR0FBRztRQUNoQyxNQUFNN0IsT0FBTzhCLEtBQUtDLEtBQUssQ0FBQ0YsSUFBSTdCLElBQUk7UUFDaEN3QixVQUFVeEI7SUFDWjtJQUVBeUIsU0FBU08sT0FBTyxHQUFHO1FBQ2pCQyxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUVBLE9BQU87UUFDTFQsU0FBU1UsS0FBSztJQUNoQjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2FwaS50cz85NTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvaW5EYXRhIH0gZnJvbSBcIi4uXCI7XG5cbmNvbnN0IENPSU5fTElTVCA9IFtcbiAgXCJldGhlcmV1bVwiLFxuICBcInVzZHRcIixcbiAgXCJhdmFsYW5jaGVcIixcbiAgXCJiaXRjb2luXCIsXG4gIFwidHJvblwiLFxuICBcImNoYWlubGlua1wiLFxuICBcInNoaWJcIixcbiAgXCJzb2xhbmFcIixcbiAgXCJkZWNlbnRyYWxhbmRcIixcbiAgXCJzYW5kXCIsXG5dO1xuXG5jb25zdCBDT0lOX0xJU1RfSElTVE9SWSA9IFtcbiAgXCJldGhlcmV1bVwiLFxuICBcInVzZENcIixcbiAgXCJhdmFsYW5jaGVcIixcbiAgXCJiaXRjb2luXCIsXG4gIFwidHJvblwiLFxuICBcImNoYWlubGlua1wiLFxuICBcInNoaWJhLWludVwiLFxuICBcInNvbGFuYVwiLFxuICBcImRlY2VudHJhbGFuZFwiLFxuICBcInRoZS1zYW5kYm94XCIsXG5dO1xuXG5jb25zdCBjb2luTWFwcGluZzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuQ09JTl9MSVNULmZvckVhY2goKGNvaW4sIGluZGV4KSA9PiB7XG4gIGNvaW5NYXBwaW5nW2NvaW5dID0gQ09JTl9MSVNUX0hJU1RPUllbaW5kZXhdO1xufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEluaXRpYWxEYXRhKCk6IFByb21pc2U8UmVjb3JkPHN0cmluZywgQ29pbkRhdGE+PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5jb2luY2FwLmlvL3YyL2Fzc2V0c1wiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBjb25zdCBpbml0aWFsRGF0YTogUmVjb3JkPHN0cmluZywgQ29pbkRhdGE+ID0ge307XG5cbiAgZm9yIChjb25zdCBjb2luIG9mIENPSU5fTElTVCkge1xuICAgIGNvbnN0IGNvaW5EYXRhID0gZGF0YS5kYXRhLmZpbmQoXG4gICAgICAoaXRlbTogYW55KSA9PiBpdGVtLmlkID09PSBjb2luIHx8IGl0ZW0uc3ltYm9sLnRvTG93ZXJDYXNlKCkgPT09IGNvaW5cbiAgICApO1xuXG4gICAgaWYgKGNvaW5EYXRhKSB7XG4gICAgICBjb25zdCBoaXN0b3J5UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLmNvaW5jYXAuaW8vdjIvYXNzZXRzLyR7Y29pbk1hcHBpbmdbY29pbl19L2hpc3Rvcnk/aW50ZXJ2YWw9ZDFgXG4gICAgICApO1xuICAgICAgY29uc3QgaGlzdG9yeURhdGEgPSBhd2FpdCBoaXN0b3J5UmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAvLyBGaXlhdCBnZcOnbWnFn2luaSBhbFxuICAgICAgY29uc3QgcHJpY2VIaXN0b3J5ID0gaGlzdG9yeURhdGEuZGF0YS5tYXAoKGVudHJ5OiBhbnkpID0+XG4gICAgICAgIHBhcnNlRmxvYXQoZW50cnkucHJpY2VVc2QpXG4gICAgICApO1xuXG4gICAgICAvLyBDb2luIHZlcmlsZXJpbmkgYmlybGXFn3RpclxuICAgICAgaW5pdGlhbERhdGFbY29pbi50b0xvd2VyQ2FzZSgpXSA9IHtcbiAgICAgICAgcHJpY2U6IE51bWJlcihjb2luRGF0YS5wcmljZVVzZCkudG9GaXhlZCg5KSxcbiAgICAgICAgc3ltYm9sOiBjb2luRGF0YS5zeW1ib2wsXG4gICAgICAgIG1hcmtldFZhbHVlOiAoTnVtYmVyKGNvaW5EYXRhLm1hcmtldENhcFVzZCkgLyAxZTkpLnRvRml4ZWQoMiksXG4gICAgICAgIGNoYW5nZTI0aDogTnVtYmVyKGNvaW5EYXRhLmNoYW5nZVBlcmNlbnQyNEhyKS50b0ZpeGVkKDIpLFxuICAgICAgICBwcmljZUhpc3RvcnksIC8vIEdlw6dtacWfIGZpeWF0IHZlcmlsZXJpXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbml0aWFsRGF0YTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb1dlYlNvY2tldCA9IChcbiAgb25NZXNzYWdlOiAoZGF0YTogUmVjb3JkPHN0cmluZywgQ29pbkRhdGE+KSA9PiB2b2lkXG4pID0+IHtcbiAgY29uc3QgcHJpY2VzV3MgPSBuZXcgV2ViU29ja2V0KFxuICAgIGB3c3M6Ly93cy5jb2luY2FwLmlvL3ByaWNlcz9hc3NldHM9JHtDT0lOX0xJU1Quam9pbihcIixcIil9YFxuICApO1xuXG4gIHByaWNlc1dzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShtc2cuZGF0YSk7XG4gICAgb25NZXNzYWdlKGRhdGEpO1xuICB9O1xuXG4gIHByaWNlc1dzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJXZWJTb2NrZXQgY29ubmVjdGlvbiBjbG9zZWRcIik7XG4gIH07XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBwcmljZXNXcy5jbG9zZSgpO1xuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJDT0lOX0xJU1QiLCJDT0lOX0xJU1RfSElTVE9SWSIsImNvaW5NYXBwaW5nIiwiZm9yRWFjaCIsImNvaW4iLCJpbmRleCIsImZldGNoSW5pdGlhbERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJpbml0aWFsRGF0YSIsImNvaW5EYXRhIiwiZmluZCIsIml0ZW0iLCJpZCIsInN5bWJvbCIsInRvTG93ZXJDYXNlIiwiaGlzdG9yeVJlc3BvbnNlIiwiaGlzdG9yeURhdGEiLCJwcmljZUhpc3RvcnkiLCJtYXAiLCJlbnRyeSIsInBhcnNlRmxvYXQiLCJwcmljZVVzZCIsInByaWNlIiwiTnVtYmVyIiwidG9GaXhlZCIsIm1hcmtldFZhbHVlIiwibWFya2V0Q2FwVXNkIiwiY2hhbmdlMjRoIiwiY2hhbmdlUGVyY2VudDI0SHIiLCJjb25uZWN0VG9XZWJTb2NrZXQiLCJvbk1lc3NhZ2UiLCJwcmljZXNXcyIsIldlYlNvY2tldCIsImpvaW4iLCJvbm1lc3NhZ2UiLCJtc2ciLCJKU09OIiwicGFyc2UiLCJvbmNsb3NlIiwiY29uc29sZSIsImxvZyIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/api.ts\n"));

/***/ })

});