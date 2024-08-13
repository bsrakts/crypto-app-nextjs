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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToWebSocket: function() { return /* binding */ connectToWebSocket; },\n/* harmony export */   fetchInitialData: function() { return /* binding */ fetchInitialData; }\n/* harmony export */ });\nconst COIN_LIST = [\n    \"ethereum\",\n    \"usdt\",\n    \"avalanche\",\n    \"bitcoin\",\n    \"tron\",\n    \"chainlink\",\n    \"shib\",\n    \"solana\",\n    \"decentraland\",\n    \"sand\"\n];\nconst COIN_LIST_HISTORY = [\n    \"ethereum\",\n    \"usdC\",\n    \"avalanche\",\n    \"bitcoin\",\n    \"tron\",\n    \"chainlink\",\n    \"shiba-inu\",\n    \"solana\",\n    \"decentraland\",\n    \"the-sandbox\"\n];\nconst coinMapping = {};\nCOIN_LIST.forEach((coin, index)=>{\n    coinMapping[coin] = COIN_LIST_HISTORY[index];\n});\nasync function fetchInitialData() {\n    const response = await fetch(\"https://api.coincap.io/v2/assets\");\n    const data = await response.json();\n    const initialData = {};\n    for (const coin of COIN_LIST){\n        const coinData = data.data.find((item)=>item.id === coin || item.symbol.toLowerCase() === coin);\n        if (coinData) {\n            // History API'sinden veri çek\n            const historyResponse = await fetch(\"https://api.coincap.io/v2/assets/\".concat(coinMapping[coin], \"/history?interval=d1\"));\n            const historyData = await historyResponse.json();\n            let priceHistory = [];\n            if (historyData.data && Array.isArray(historyData.data)) {\n                priceHistory = historyData.data.map((entry)=>parseFloat(entry.priceUsd));\n            } else {\n                console.error(\"Ge\\xe7miş veri bulunamadı: \".concat(coinMapping[coin], \" i\\xe7in veri alınamadı.\"));\n            }\n            initialData[coin.toLowerCase()] = {\n                price: Number(coinData.priceUsd).toFixed(9),\n                symbol: coinData.symbol,\n                marketValue: (Number(coinData.marketCapUsd) / 1e9).toFixed(2),\n                change24h: Number(coinData.changePercent24Hr).toFixed(2),\n                priceHistory\n            };\n        }\n    }\n    return initialData;\n}\nconst connectToWebSocket = (onMessage)=>{\n    const pricesWs = new WebSocket(\"wss://ws.coincap.io/prices?assets=\".concat(COIN_LIST_HISTORY.join(\",\")));\n    pricesWs.onmessage = function(msg) {\n        const data = JSON.parse(msg.data);\n        onMessage(data);\n    };\n    pricesWs.onclose = function() {\n        console.log(\"WebSocket connection closed\");\n    };\n    return ()=>{\n        pricesWs.close();\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNQSxZQUFZO0lBQ2hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxNQUFNQyxvQkFBb0I7SUFDeEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELE1BQU1DLGNBQXNDLENBQUM7QUFDN0NGLFVBQVVHLE9BQU8sQ0FBQyxDQUFDQyxNQUFNQztJQUN2QkgsV0FBVyxDQUFDRSxLQUFLLEdBQUdILGlCQUFpQixDQUFDSSxNQUFNO0FBQzlDO0FBRU8sZUFBZUM7SUFDcEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO0lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUVoQyxNQUFNQyxjQUF3QyxDQUFDO0lBRS9DLEtBQUssTUFBTVAsUUFBUUosVUFBVztRQUM1QixNQUFNWSxXQUFXSCxLQUFLQSxJQUFJLENBQUNJLElBQUksQ0FDN0IsQ0FBQ0MsT0FBY0EsS0FBS0MsRUFBRSxLQUFLWCxRQUFRVSxLQUFLRSxNQUFNLENBQUNDLFdBQVcsT0FBT2I7UUFHbkUsSUFBSVEsVUFBVTtZQUNaLDhCQUE4QjtZQUM5QixNQUFNTSxrQkFBa0IsTUFBTVYsTUFDNUIsb0NBQXNELE9BQWxCTixXQUFXLENBQUNFLEtBQUssRUFBQztZQUV4RCxNQUFNZSxjQUFjLE1BQU1ELGdCQUFnQlIsSUFBSTtZQUU5QyxJQUFJVSxlQUF5QixFQUFFO1lBQy9CLElBQUlELFlBQVlWLElBQUksSUFBSVksTUFBTUMsT0FBTyxDQUFDSCxZQUFZVixJQUFJLEdBQUc7Z0JBQ3ZEVyxlQUFlRCxZQUFZVixJQUFJLENBQUNjLEdBQUcsQ0FBQyxDQUFDQyxRQUNuQ0MsV0FBV0QsTUFBTUUsUUFBUTtZQUU3QixPQUFPO2dCQUNMQyxRQUFRQyxLQUFLLENBQ1gsOEJBQTZDLE9BQWxCMUIsV0FBVyxDQUFDRSxLQUFLLEVBQUM7WUFFakQ7WUFFQU8sV0FBVyxDQUFDUCxLQUFLYSxXQUFXLEdBQUcsR0FBRztnQkFDaENZLE9BQU9DLE9BQU9sQixTQUFTYyxRQUFRLEVBQUVLLE9BQU8sQ0FBQztnQkFDekNmLFFBQVFKLFNBQVNJLE1BQU07Z0JBQ3ZCZ0IsYUFBYSxDQUFDRixPQUFPbEIsU0FBU3FCLFlBQVksSUFBSSxHQUFFLEVBQUdGLE9BQU8sQ0FBQztnQkFDM0RHLFdBQVdKLE9BQU9sQixTQUFTdUIsaUJBQWlCLEVBQUVKLE9BQU8sQ0FBQztnQkFDdERYO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT1Q7QUFDVDtBQUVPLE1BQU15QixxQkFBcUIsQ0FDaENDO0lBRUEsTUFBTUMsV0FBVyxJQUFJQyxVQUNuQixxQ0FBaUUsT0FBNUJ0QyxrQkFBa0J1QyxJQUFJLENBQUM7SUFHOURGLFNBQVNHLFNBQVMsR0FBRyxTQUFVQyxHQUFHO1FBQ2hDLE1BQU1qQyxPQUFPa0MsS0FBS0MsS0FBSyxDQUFDRixJQUFJakMsSUFBSTtRQUNoQzRCLFVBQVU1QjtJQUNaO0lBRUE2QixTQUFTTyxPQUFPLEdBQUc7UUFDakJsQixRQUFRbUIsR0FBRyxDQUFDO0lBQ2Q7SUFFQSxPQUFPO1FBQ0xSLFNBQVNTLEtBQUs7SUFDaEI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy9hcGkudHM/OTU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2luRGF0YSB9IGZyb20gXCIuLlwiO1xuXG5jb25zdCBDT0lOX0xJU1QgPSBbXG4gIFwiZXRoZXJldW1cIixcbiAgXCJ1c2R0XCIsXG4gIFwiYXZhbGFuY2hlXCIsXG4gIFwiYml0Y29pblwiLFxuICBcInRyb25cIixcbiAgXCJjaGFpbmxpbmtcIixcbiAgXCJzaGliXCIsXG4gIFwic29sYW5hXCIsXG4gIFwiZGVjZW50cmFsYW5kXCIsXG4gIFwic2FuZFwiLFxuXTtcblxuY29uc3QgQ09JTl9MSVNUX0hJU1RPUlkgPSBbXG4gIFwiZXRoZXJldW1cIixcbiAgXCJ1c2RDXCIsXG4gIFwiYXZhbGFuY2hlXCIsXG4gIFwiYml0Y29pblwiLFxuICBcInRyb25cIixcbiAgXCJjaGFpbmxpbmtcIixcbiAgXCJzaGliYS1pbnVcIixcbiAgXCJzb2xhbmFcIixcbiAgXCJkZWNlbnRyYWxhbmRcIixcbiAgXCJ0aGUtc2FuZGJveFwiLFxuXTtcblxuY29uc3QgY29pbk1hcHBpbmc6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbkNPSU5fTElTVC5mb3JFYWNoKChjb2luLCBpbmRleCkgPT4ge1xuICBjb2luTWFwcGluZ1tjb2luXSA9IENPSU5fTElTVF9ISVNUT1JZW2luZGV4XTtcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hJbml0aWFsRGF0YSgpOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIENvaW5EYXRhPj4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuY29pbmNhcC5pby92Mi9hc3NldHNcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc3QgaW5pdGlhbERhdGE6IFJlY29yZDxzdHJpbmcsIENvaW5EYXRhPiA9IHt9O1xuXG4gIGZvciAoY29uc3QgY29pbiBvZiBDT0lOX0xJU1QpIHtcbiAgICBjb25zdCBjb2luRGF0YSA9IGRhdGEuZGF0YS5maW5kKFxuICAgICAgKGl0ZW06IGFueSkgPT4gaXRlbS5pZCA9PT0gY29pbiB8fCBpdGVtLnN5bWJvbC50b0xvd2VyQ2FzZSgpID09PSBjb2luXG4gICAgKTtcblxuICAgIGlmIChjb2luRGF0YSkge1xuICAgICAgLy8gSGlzdG9yeSBBUEknc2luZGVuIHZlcmkgw6dla1xuICAgICAgY29uc3QgaGlzdG9yeVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5jb2luY2FwLmlvL3YyL2Fzc2V0cy8ke2NvaW5NYXBwaW5nW2NvaW5dfS9oaXN0b3J5P2ludGVydmFsPWQxYFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGhpc3RvcnlEYXRhID0gYXdhaXQgaGlzdG9yeVJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgbGV0IHByaWNlSGlzdG9yeTogbnVtYmVyW10gPSBbXTtcbiAgICAgIGlmIChoaXN0b3J5RGF0YS5kYXRhICYmIEFycmF5LmlzQXJyYXkoaGlzdG9yeURhdGEuZGF0YSkpIHtcbiAgICAgICAgcHJpY2VIaXN0b3J5ID0gaGlzdG9yeURhdGEuZGF0YS5tYXAoKGVudHJ5OiBhbnkpID0+XG4gICAgICAgICAgcGFyc2VGbG9hdChlbnRyeS5wcmljZVVzZClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYEdlw6dtacWfIHZlcmkgYnVsdW5hbWFkxLE6ICR7Y29pbk1hcHBpbmdbY29pbl19IGnDp2luIHZlcmkgYWzEsW5hbWFkxLEuYFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpbml0aWFsRGF0YVtjb2luLnRvTG93ZXJDYXNlKCldID0ge1xuICAgICAgICBwcmljZTogTnVtYmVyKGNvaW5EYXRhLnByaWNlVXNkKS50b0ZpeGVkKDkpLFxuICAgICAgICBzeW1ib2w6IGNvaW5EYXRhLnN5bWJvbCxcbiAgICAgICAgbWFya2V0VmFsdWU6IChOdW1iZXIoY29pbkRhdGEubWFya2V0Q2FwVXNkKSAvIDFlOSkudG9GaXhlZCgyKSxcbiAgICAgICAgY2hhbmdlMjRoOiBOdW1iZXIoY29pbkRhdGEuY2hhbmdlUGVyY2VudDI0SHIpLnRvRml4ZWQoMiksXG4gICAgICAgIHByaWNlSGlzdG9yeSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluaXRpYWxEYXRhO1xufVxuXG5leHBvcnQgY29uc3QgY29ubmVjdFRvV2ViU29ja2V0ID0gKFxuICBvbk1lc3NhZ2U6IChkYXRhOiBSZWNvcmQ8c3RyaW5nLCBDb2luRGF0YT4pID0+IHZvaWRcbikgPT4ge1xuICBjb25zdCBwcmljZXNXcyA9IG5ldyBXZWJTb2NrZXQoXG4gICAgYHdzczovL3dzLmNvaW5jYXAuaW8vcHJpY2VzP2Fzc2V0cz0ke0NPSU5fTElTVF9ISVNUT1JZLmpvaW4oXCIsXCIpfWBcbiAgKTtcblxuICBwcmljZXNXcy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobXNnLmRhdGEpO1xuICAgIG9uTWVzc2FnZShkYXRhKTtcbiAgfTtcblxuICBwcmljZXNXcy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiV2ViU29ja2V0IGNvbm5lY3Rpb24gY2xvc2VkXCIpO1xuICB9O1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgcHJpY2VzV3MuY2xvc2UoKTtcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiQ09JTl9MSVNUIiwiQ09JTl9MSVNUX0hJU1RPUlkiLCJjb2luTWFwcGluZyIsImZvckVhY2giLCJjb2luIiwiaW5kZXgiLCJmZXRjaEluaXRpYWxEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiaW5pdGlhbERhdGEiLCJjb2luRGF0YSIsImZpbmQiLCJpdGVtIiwiaWQiLCJzeW1ib2wiLCJ0b0xvd2VyQ2FzZSIsImhpc3RvcnlSZXNwb25zZSIsImhpc3RvcnlEYXRhIiwicHJpY2VIaXN0b3J5IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiZW50cnkiLCJwYXJzZUZsb2F0IiwicHJpY2VVc2QiLCJjb25zb2xlIiwiZXJyb3IiLCJwcmljZSIsIk51bWJlciIsInRvRml4ZWQiLCJtYXJrZXRWYWx1ZSIsIm1hcmtldENhcFVzZCIsImNoYW5nZTI0aCIsImNoYW5nZVBlcmNlbnQyNEhyIiwiY29ubmVjdFRvV2ViU29ja2V0Iiwib25NZXNzYWdlIiwicHJpY2VzV3MiLCJXZWJTb2NrZXQiLCJqb2luIiwib25tZXNzYWdlIiwibXNnIiwiSlNPTiIsInBhcnNlIiwib25jbG9zZSIsImxvZyIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/api.ts\n"));

/***/ })

});