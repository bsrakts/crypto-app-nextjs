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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToWebSocket: function() { return /* binding */ connectToWebSocket; },\n/* harmony export */   fetchInitialData: function() { return /* binding */ fetchInitialData; }\n/* harmony export */ });\nconst COIN_LIST = [\n    \"ethereum\",\n    \"usdt\",\n    \"avalanche\",\n    \"bitcoin\",\n    \"tron\",\n    \"chainlink\",\n    \"shib\",\n    \"solana\",\n    \"decentraland\",\n    \"sand\"\n];\nconst COIN_LIST_HISTORY = [\n    \"ethereum\",\n    \"usdC\",\n    \"avalanche\",\n    \"bitcoin\",\n    \"tron\",\n    \"chainlink\",\n    \"shiba-inu\",\n    \"solana\",\n    \"decentraland\",\n    \"the-sandbox\"\n];\nconst coinMapping = {};\nCOIN_LIST.forEach((coin, index)=>{\n    coinMapping[coin] = COIN_LIST_HISTORY[index];\n});\nasync function fetchInitialData() {\n    const response = await fetch(\"https://api.coincap.io/v2/assets\");\n    const data = await response.json();\n    const initialData = {};\n    for (const coin of COIN_LIST){\n        const coinData = data.data.find((item)=>item.id === coin || item.symbol.toLowerCase() === coin);\n        if (coinData) {\n            // History API'sinden veri çek\n            const historyResponse = await fetch(\"https://api.coincap.io/v2/assets/\".concat(coinMapping[coin], \"/history?interval=d1\"));\n            const historyData = await historyResponse.json();\n            // Veri kontrolü ekleyelim\n            let priceHistory = [];\n            if (historyData.data && Array.isArray(historyData.data)) {\n                priceHistory = historyData.data.map((entry)=>parseFloat(entry.priceUsd));\n            } else {\n                console.error(\"Ge\\xe7miş veri bulunamadı: \".concat(coinMapping[coin], \" i\\xe7in veri alınamadı.\"));\n            }\n            initialData[coin.toLowerCase()] = {\n                price: Number(coinData.priceUsd).toFixed(9),\n                symbol: coinData.symbol,\n                marketValue: (Number(coinData.marketCapUsd) / 1e9).toFixed(2),\n                change24h: Number(coinData.changePercent24Hr).toFixed(2),\n                priceHistory\n            };\n        }\n    }\n    return initialData;\n}\nconst connectToWebSocket = (onMessage)=>{\n    const pricesWs = new WebSocket(\"wss://ws.coincap.io/prices?assets=\".concat(COIN_LIST_HISTORY.join(\",\")));\n    pricesWs.onmessage = function(msg) {\n        const data = JSON.parse(msg.data);\n        onMessage(data);\n    };\n    pricesWs.onclose = function() {\n        console.log(\"WebSocket connection closed\");\n    };\n    return ()=>{\n        pricesWs.close();\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNQSxZQUFZO0lBQ2hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxNQUFNQyxvQkFBb0I7SUFDeEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELE1BQU1DLGNBQXNDLENBQUM7QUFDN0NGLFVBQVVHLE9BQU8sQ0FBQyxDQUFDQyxNQUFNQztJQUN2QkgsV0FBVyxDQUFDRSxLQUFLLEdBQUdILGlCQUFpQixDQUFDSSxNQUFNO0FBQzlDO0FBRU8sZUFBZUM7SUFDcEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO0lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUVoQyxNQUFNQyxjQUF3QyxDQUFDO0lBRS9DLEtBQUssTUFBTVAsUUFBUUosVUFBVztRQUM1QixNQUFNWSxXQUFXSCxLQUFLQSxJQUFJLENBQUNJLElBQUksQ0FDN0IsQ0FBQ0MsT0FBY0EsS0FBS0MsRUFBRSxLQUFLWCxRQUFRVSxLQUFLRSxNQUFNLENBQUNDLFdBQVcsT0FBT2I7UUFHbkUsSUFBSVEsVUFBVTtZQUNaLDhCQUE4QjtZQUM5QixNQUFNTSxrQkFBa0IsTUFBTVYsTUFDNUIsb0NBQXNELE9BQWxCTixXQUFXLENBQUNFLEtBQUssRUFBQztZQUV4RCxNQUFNZSxjQUFjLE1BQU1ELGdCQUFnQlIsSUFBSTtZQUU5QywwQkFBMEI7WUFDMUIsSUFBSVUsZUFBeUIsRUFBRTtZQUMvQixJQUFJRCxZQUFZVixJQUFJLElBQUlZLE1BQU1DLE9BQU8sQ0FBQ0gsWUFBWVYsSUFBSSxHQUFHO2dCQUN2RFcsZUFBZUQsWUFBWVYsSUFBSSxDQUFDYyxHQUFHLENBQUMsQ0FBQ0MsUUFDbkNDLFdBQVdELE1BQU1FLFFBQVE7WUFFN0IsT0FBTztnQkFDTEMsUUFBUUMsS0FBSyxDQUNYLDhCQUE2QyxPQUFsQjFCLFdBQVcsQ0FBQ0UsS0FBSyxFQUFDO1lBRWpEO1lBRUFPLFdBQVcsQ0FBQ1AsS0FBS2EsV0FBVyxHQUFHLEdBQUc7Z0JBQ2hDWSxPQUFPQyxPQUFPbEIsU0FBU2MsUUFBUSxFQUFFSyxPQUFPLENBQUM7Z0JBQ3pDZixRQUFRSixTQUFTSSxNQUFNO2dCQUN2QmdCLGFBQWEsQ0FBQ0YsT0FBT2xCLFNBQVNxQixZQUFZLElBQUksR0FBRSxFQUFHRixPQUFPLENBQUM7Z0JBQzNERyxXQUFXSixPQUFPbEIsU0FBU3VCLGlCQUFpQixFQUFFSixPQUFPLENBQUM7Z0JBQ3REWDtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9UO0FBQ1Q7QUFFTyxNQUFNeUIscUJBQXFCLENBQ2hDQztJQUVBLE1BQU1DLFdBQVcsSUFBSUMsVUFDbkIscUNBQWlFLE9BQTVCdEMsa0JBQWtCdUMsSUFBSSxDQUFDO0lBRzlERixTQUFTRyxTQUFTLEdBQUcsU0FBVUMsR0FBRztRQUNoQyxNQUFNakMsT0FBT2tDLEtBQUtDLEtBQUssQ0FBQ0YsSUFBSWpDLElBQUk7UUFDaEM0QixVQUFVNUI7SUFDWjtJQUVBNkIsU0FBU08sT0FBTyxHQUFHO1FBQ2pCbEIsUUFBUW1CLEdBQUcsQ0FBQztJQUNkO0lBRUEsT0FBTztRQUNMUixTQUFTUyxLQUFLO0lBQ2hCO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvYXBpLnRzPzk1NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29pbkRhdGEgfSBmcm9tIFwiLi5cIjtcblxuY29uc3QgQ09JTl9MSVNUID0gW1xuICBcImV0aGVyZXVtXCIsXG4gIFwidXNkdFwiLFxuICBcImF2YWxhbmNoZVwiLFxuICBcImJpdGNvaW5cIixcbiAgXCJ0cm9uXCIsXG4gIFwiY2hhaW5saW5rXCIsXG4gIFwic2hpYlwiLFxuICBcInNvbGFuYVwiLFxuICBcImRlY2VudHJhbGFuZFwiLFxuICBcInNhbmRcIixcbl07XG5cbmNvbnN0IENPSU5fTElTVF9ISVNUT1JZID0gW1xuICBcImV0aGVyZXVtXCIsXG4gIFwidXNkQ1wiLFxuICBcImF2YWxhbmNoZVwiLFxuICBcImJpdGNvaW5cIixcbiAgXCJ0cm9uXCIsXG4gIFwiY2hhaW5saW5rXCIsXG4gIFwic2hpYmEtaW51XCIsXG4gIFwic29sYW5hXCIsXG4gIFwiZGVjZW50cmFsYW5kXCIsXG4gIFwidGhlLXNhbmRib3hcIixcbl07XG5cbmNvbnN0IGNvaW5NYXBwaW5nOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5DT0lOX0xJU1QuZm9yRWFjaCgoY29pbiwgaW5kZXgpID0+IHtcbiAgY29pbk1hcHBpbmdbY29pbl0gPSBDT0lOX0xJU1RfSElTVE9SWVtpbmRleF07XG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoSW5pdGlhbERhdGEoKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBDb2luRGF0YT4+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmNvaW5jYXAuaW8vdjIvYXNzZXRzXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGNvbnN0IGluaXRpYWxEYXRhOiBSZWNvcmQ8c3RyaW5nLCBDb2luRGF0YT4gPSB7fTtcblxuICBmb3IgKGNvbnN0IGNvaW4gb2YgQ09JTl9MSVNUKSB7XG4gICAgY29uc3QgY29pbkRhdGEgPSBkYXRhLmRhdGEuZmluZChcbiAgICAgIChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT09IGNvaW4gfHwgaXRlbS5zeW1ib2wudG9Mb3dlckNhc2UoKSA9PT0gY29pblxuICAgICk7XG5cbiAgICBpZiAoY29pbkRhdGEpIHtcbiAgICAgIC8vIEhpc3RvcnkgQVBJJ3NpbmRlbiB2ZXJpIMOnZWtcbiAgICAgIGNvbnN0IGhpc3RvcnlSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkuY29pbmNhcC5pby92Mi9hc3NldHMvJHtjb2luTWFwcGluZ1tjb2luXX0vaGlzdG9yeT9pbnRlcnZhbD1kMWBcbiAgICAgICk7XG4gICAgICBjb25zdCBoaXN0b3J5RGF0YSA9IGF3YWl0IGhpc3RvcnlSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIC8vIFZlcmkga29udHJvbMO8IGVrbGV5ZWxpbVxuICAgICAgbGV0IHByaWNlSGlzdG9yeTogbnVtYmVyW10gPSBbXTtcbiAgICAgIGlmIChoaXN0b3J5RGF0YS5kYXRhICYmIEFycmF5LmlzQXJyYXkoaGlzdG9yeURhdGEuZGF0YSkpIHtcbiAgICAgICAgcHJpY2VIaXN0b3J5ID0gaGlzdG9yeURhdGEuZGF0YS5tYXAoKGVudHJ5OiBhbnkpID0+XG4gICAgICAgICAgcGFyc2VGbG9hdChlbnRyeS5wcmljZVVzZClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYEdlw6dtacWfIHZlcmkgYnVsdW5hbWFkxLE6ICR7Y29pbk1hcHBpbmdbY29pbl19IGnDp2luIHZlcmkgYWzEsW5hbWFkxLEuYFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpbml0aWFsRGF0YVtjb2luLnRvTG93ZXJDYXNlKCldID0ge1xuICAgICAgICBwcmljZTogTnVtYmVyKGNvaW5EYXRhLnByaWNlVXNkKS50b0ZpeGVkKDkpLFxuICAgICAgICBzeW1ib2w6IGNvaW5EYXRhLnN5bWJvbCxcbiAgICAgICAgbWFya2V0VmFsdWU6IChOdW1iZXIoY29pbkRhdGEubWFya2V0Q2FwVXNkKSAvIDFlOSkudG9GaXhlZCgyKSxcbiAgICAgICAgY2hhbmdlMjRoOiBOdW1iZXIoY29pbkRhdGEuY2hhbmdlUGVyY2VudDI0SHIpLnRvRml4ZWQoMiksXG4gICAgICAgIHByaWNlSGlzdG9yeSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluaXRpYWxEYXRhO1xufVxuXG5leHBvcnQgY29uc3QgY29ubmVjdFRvV2ViU29ja2V0ID0gKFxuICBvbk1lc3NhZ2U6IChkYXRhOiBSZWNvcmQ8c3RyaW5nLCBDb2luRGF0YT4pID0+IHZvaWRcbikgPT4ge1xuICBjb25zdCBwcmljZXNXcyA9IG5ldyBXZWJTb2NrZXQoXG4gICAgYHdzczovL3dzLmNvaW5jYXAuaW8vcHJpY2VzP2Fzc2V0cz0ke0NPSU5fTElTVF9ISVNUT1JZLmpvaW4oXCIsXCIpfWBcbiAgKTtcblxuICBwcmljZXNXcy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobXNnLmRhdGEpO1xuICAgIG9uTWVzc2FnZShkYXRhKTtcbiAgfTtcblxuICBwcmljZXNXcy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiV2ViU29ja2V0IGNvbm5lY3Rpb24gY2xvc2VkXCIpO1xuICB9O1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgcHJpY2VzV3MuY2xvc2UoKTtcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiQ09JTl9MSVNUIiwiQ09JTl9MSVNUX0hJU1RPUlkiLCJjb2luTWFwcGluZyIsImZvckVhY2giLCJjb2luIiwiaW5kZXgiLCJmZXRjaEluaXRpYWxEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiaW5pdGlhbERhdGEiLCJjb2luRGF0YSIsImZpbmQiLCJpdGVtIiwiaWQiLCJzeW1ib2wiLCJ0b0xvd2VyQ2FzZSIsImhpc3RvcnlSZXNwb25zZSIsImhpc3RvcnlEYXRhIiwicHJpY2VIaXN0b3J5IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiZW50cnkiLCJwYXJzZUZsb2F0IiwicHJpY2VVc2QiLCJjb25zb2xlIiwiZXJyb3IiLCJwcmljZSIsIk51bWJlciIsInRvRml4ZWQiLCJtYXJrZXRWYWx1ZSIsIm1hcmtldENhcFVzZCIsImNoYW5nZTI0aCIsImNoYW5nZVBlcmNlbnQyNEhyIiwiY29ubmVjdFRvV2ViU29ja2V0Iiwib25NZXNzYWdlIiwicHJpY2VzV3MiLCJXZWJTb2NrZXQiLCJqb2luIiwib25tZXNzYWdlIiwibXNnIiwiSlNPTiIsInBhcnNlIiwib25jbG9zZSIsImxvZyIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/api.ts\n"));

/***/ })

});