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

/***/ "(app-pages-browser)/./src/hooks/useCryptoData.ts":
/*!************************************!*\
  !*** ./src/hooks/useCryptoData.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n\n\nconst useCryptoData = ()=>{\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n    const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"asc\");\n    const [orderBy, setOrderBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"price\");\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const loadData = async ()=>{\n        const initialData = await (0,_services_api__WEBPACK_IMPORTED_MODULE_1__.fetchInitialData)();\n        setPrices(initialData);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        loadData();\n        const intervalId = setInterval(loadData, 3600000);\n        const disconnect = (0,_services_api__WEBPACK_IMPORTED_MODULE_1__.connectToWebSocket)((data)=>{\n            setPrices((prevPrices)=>{\n                const updatedPrices = {\n                    ...prevPrices\n                };\n                for (const [key, value] of Object.entries(data)){\n                    if (updatedPrices[key]) {\n                        var _prevPrices_key;\n                        const previousPrice = Number((_prevPrices_key = prevPrices[key]) === null || _prevPrices_key === void 0 ? void 0 : _prevPrices_key.price);\n                        const currentPrice = Number(value);\n                        updatedPrices[key] = {\n                            ...updatedPrices[key],\n                            price: currentPrice.toFixed(2),\n                            previousPrice: previousPrice,\n                            priceChange: currentPrice - previousPrice\n                        };\n                    }\n                }\n                return updatedPrices;\n            });\n        });\n        return ()=>{\n            disconnect();\n            clearInterval(intervalId);\n        };\n    }, []);\n    const handleRequestSort = (event, property)=>{\n        const isAsc = orderBy === property && order === \"asc\";\n        setOrder(isAsc ? \"desc\" : \"asc\");\n        setOrderBy(property);\n    };\n    const handleFilterChange = (event)=>{\n        setFilter(event.target.value.toLowerCase());\n    };\n    const filteredAndSortedData = Object.keys(prices).map((key)=>({\n            ...prices[key],\n            id: key\n        })).filter((coin)=>coin.symbol.toLowerCase().includes(filter)).sort((a, b)=>{\n        const aValue = a[orderBy];\n        const bValue = b[orderBy];\n        if (typeof aValue === \"number\" && typeof bValue === \"number\") {\n            return order === \"desc\" ? bValue - aValue : aValue - bValue;\n        } else {\n            return order === \"desc\" ? bValue.toString().localeCompare(aValue.toString()) : aValue.toString().localeCompare(bValue.toString());\n        }\n    });\n    return {\n        filteredAndSortedData,\n        order,\n        orderBy,\n        filter,\n        handleRequestSort,\n        handleFilterChange\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useCryptoData);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VDcnlwdG9EYXRhLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBNEM7QUFDMEI7QUFHdEUsTUFBTUksZ0JBQWdCO0lBQ3BCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBMkIsQ0FBQztJQUNoRSxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQWlCO0lBQ25ELE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBaUI7SUFDdkQsTUFBTSxDQUFDVyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQSxDQUFTO0lBRTdDLE1BQU1hLFdBQVc7UUFDZixNQUFNQyxjQUFjLE1BQU1aLCtEQUFnQkE7UUFDMUNJLFVBQVVRO0lBQ1o7SUFFQWIsZ0RBQVNBLENBQUM7UUFDUlk7UUFFQSxNQUFNRSxhQUFhQyxZQUFZSCxVQUFVO1FBRXpDLE1BQU1JLGFBQWFkLGlFQUFrQkEsQ0FBQyxDQUFDZTtZQUNyQ1osVUFBVSxDQUFDYTtnQkFDVCxNQUFNQyxnQkFBZ0I7b0JBQUUsR0FBR0QsVUFBVTtnQkFBQztnQkFDdEMsS0FBSyxNQUFNLENBQUNFLEtBQUtDLE1BQU0sSUFBSUMsT0FBT0MsT0FBTyxDQUFDTixNQUFPO29CQUMvQyxJQUFJRSxhQUFhLENBQUNDLElBQUksRUFBRTs0QkFDT0Y7d0JBQTdCLE1BQU1NLGdCQUFnQkMsUUFBT1Asa0JBQUFBLFVBQVUsQ0FBQ0UsSUFBSSxjQUFmRixzQ0FBQUEsZ0JBQWlCUSxLQUFLO3dCQUNuRCxNQUFNQyxlQUFlRixPQUFPSjt3QkFFNUJGLGFBQWEsQ0FBQ0MsSUFBSSxHQUFHOzRCQUNuQixHQUFHRCxhQUFhLENBQUNDLElBQUk7NEJBQ3JCTSxPQUFPQyxhQUFhQyxPQUFPLENBQUM7NEJBQzVCSixlQUFlQTs0QkFDZkssYUFBYUYsZUFBZUg7d0JBQzlCO29CQUNGO2dCQUNGO2dCQUNBLE9BQU9MO1lBQ1Q7UUFDRjtRQUVBLE9BQU87WUFDTEg7WUFDQWMsY0FBY2hCO1FBQ2hCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTWlCLG9CQUFvQixDQUN4QkMsT0FDQUM7UUFFQSxNQUFNQyxRQUFRMUIsWUFBWXlCLFlBQVkzQixVQUFVO1FBQ2hEQyxTQUFTMkIsUUFBUSxTQUFTO1FBQzFCekIsV0FBV3dCO0lBQ2I7SUFFQSxNQUFNRSxxQkFBcUIsQ0FBQ0g7UUFDMUJyQixVQUFVcUIsTUFBTUksTUFBTSxDQUFDZixLQUFLLENBQUNnQixXQUFXO0lBQzFDO0lBRUEsTUFBTUMsd0JBQXdCaEIsT0FBT2lCLElBQUksQ0FBQ25DLFFBQ3ZDb0MsR0FBRyxDQUFDLENBQUNwQixNQUFTO1lBQUUsR0FBR2hCLE1BQU0sQ0FBQ2dCLElBQUk7WUFBRXFCLElBQUlyQjtRQUFJLElBQ3hDVixNQUFNLENBQUMsQ0FBQ2dDLE9BQVNBLEtBQUtDLE1BQU0sQ0FBQ04sV0FBVyxHQUFHTyxRQUFRLENBQUNsQyxTQUNwRG1DLElBQUksQ0FBQyxDQUFDQyxHQUFHQztRQUNSLE1BQU1DLFNBQVNGLENBQUMsQ0FBQ3RDLFFBQVE7UUFDekIsTUFBTXlDLFNBQVNGLENBQUMsQ0FBQ3ZDLFFBQVE7UUFFekIsSUFBSSxPQUFPd0MsV0FBVyxZQUFZLE9BQU9DLFdBQVcsVUFBVTtZQUM1RCxPQUFPM0MsVUFBVSxTQUFTMkMsU0FBU0QsU0FBU0EsU0FBU0M7UUFDdkQsT0FBTztZQUNMLE9BQU8zQyxVQUFVLFNBQ2IyQyxPQUFPQyxRQUFRLEdBQUdDLGFBQWEsQ0FBQ0gsT0FBT0UsUUFBUSxNQUMvQ0YsT0FBT0UsUUFBUSxHQUFHQyxhQUFhLENBQUNGLE9BQU9DLFFBQVE7UUFDckQ7SUFDRjtJQUVGLE9BQU87UUFDTFo7UUFDQWhDO1FBQ0FFO1FBQ0FFO1FBQ0FxQjtRQUNBSTtJQUNGO0FBQ0Y7QUFFQSwrREFBZWhDLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUNyeXB0b0RhdGEudHM/NmVjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmZXRjaEluaXRpYWxEYXRhLCBjb25uZWN0VG9XZWJTb2NrZXQgfSBmcm9tIFwiQC9zZXJ2aWNlcy9hcGlcIjtcbmltcG9ydCB7IENvaW5EYXRhIH0gZnJvbSBcIi4uXCI7XG5cbmNvbnN0IHVzZUNyeXB0b0RhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBDb2luRGF0YT4+KHt9KTtcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZTxcImFzY1wiIHwgXCJkZXNjXCI+KFwiYXNjXCIpO1xuICBjb25zdCBbb3JkZXJCeSwgc2V0T3JkZXJCeV0gPSB1c2VTdGF0ZTxrZXlvZiBDb2luRGF0YT4oXCJwcmljZVwiKTtcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbERhdGEgPSBhd2FpdCBmZXRjaEluaXRpYWxEYXRhKCk7XG4gICAgc2V0UHJpY2VzKGluaXRpYWxEYXRhKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWREYXRhKCk7XG5cbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwobG9hZERhdGEsIDM2MDAwMDApO1xuXG4gICAgY29uc3QgZGlzY29ubmVjdCA9IGNvbm5lY3RUb1dlYlNvY2tldCgoZGF0YSkgPT4ge1xuICAgICAgc2V0UHJpY2VzKChwcmV2UHJpY2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZXMgPSB7IC4uLnByZXZQcmljZXMgfTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgICAgICBpZiAodXBkYXRlZFByaWNlc1trZXldKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1ByaWNlID0gTnVtYmVyKHByZXZQcmljZXNba2V5XT8ucHJpY2UpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFByaWNlID0gTnVtYmVyKHZhbHVlKTtcblxuICAgICAgICAgICAgdXBkYXRlZFByaWNlc1trZXldID0ge1xuICAgICAgICAgICAgICAuLi51cGRhdGVkUHJpY2VzW2tleV0sXG4gICAgICAgICAgICAgIHByaWNlOiBjdXJyZW50UHJpY2UudG9GaXhlZCgyKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNQcmljZTogcHJldmlvdXNQcmljZSwgLy8gw5ZuY2VraSBmaXlhdMSxIHNha2xhXG4gICAgICAgICAgICAgIHByaWNlQ2hhbmdlOiBjdXJyZW50UHJpY2UgLSBwcmV2aW91c1ByaWNlLCAvLyBEZcSfacWfaWtsacSfaSBoZXNhcGxhXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXBkYXRlZFByaWNlcztcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc2Nvbm5lY3QoKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVJlcXVlc3RTb3J0ID0gKFxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PHVua25vd24+LFxuICAgIHByb3BlcnR5OiBrZXlvZiBDb2luRGF0YVxuICApID0+IHtcbiAgICBjb25zdCBpc0FzYyA9IG9yZGVyQnkgPT09IHByb3BlcnR5ICYmIG9yZGVyID09PSBcImFzY1wiO1xuICAgIHNldE9yZGVyKGlzQXNjID8gXCJkZXNjXCIgOiBcImFzY1wiKTtcbiAgICBzZXRPcmRlckJ5KHByb3BlcnR5KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWx0ZXJDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0RmlsdGVyKGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZEFuZFNvcnRlZERhdGEgPSBPYmplY3Qua2V5cyhwcmljZXMpXG4gICAgLm1hcCgoa2V5KSA9PiAoeyAuLi5wcmljZXNba2V5XSwgaWQ6IGtleSB9KSlcbiAgICAuZmlsdGVyKChjb2luKSA9PiBjb2luLnN5bWJvbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlcikpXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGFWYWx1ZSA9IGFbb3JkZXJCeV0gYXMgc3RyaW5nIHwgbnVtYmVyO1xuICAgICAgY29uc3QgYlZhbHVlID0gYltvcmRlckJ5XSBhcyBzdHJpbmcgfCBudW1iZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgYVZhbHVlID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBiVmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIG9yZGVyID09PSBcImRlc2NcIiA/IGJWYWx1ZSAtIGFWYWx1ZSA6IGFWYWx1ZSAtIGJWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvcmRlciA9PT0gXCJkZXNjXCJcbiAgICAgICAgICA/IGJWYWx1ZS50b1N0cmluZygpLmxvY2FsZUNvbXBhcmUoYVZhbHVlLnRvU3RyaW5nKCkpXG4gICAgICAgICAgOiBhVmFsdWUudG9TdHJpbmcoKS5sb2NhbGVDb21wYXJlKGJWYWx1ZS50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICByZXR1cm4ge1xuICAgIGZpbHRlcmVkQW5kU29ydGVkRGF0YSxcbiAgICBvcmRlcixcbiAgICBvcmRlckJ5LFxuICAgIGZpbHRlcixcbiAgICBoYW5kbGVSZXF1ZXN0U29ydCxcbiAgICBoYW5kbGVGaWx0ZXJDaGFuZ2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VDcnlwdG9EYXRhO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hJbml0aWFsRGF0YSIsImNvbm5lY3RUb1dlYlNvY2tldCIsInVzZUNyeXB0b0RhdGEiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJvcmRlciIsInNldE9yZGVyIiwib3JkZXJCeSIsInNldE9yZGVyQnkiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJsb2FkRGF0YSIsImluaXRpYWxEYXRhIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiZGlzY29ubmVjdCIsImRhdGEiLCJwcmV2UHJpY2VzIiwidXBkYXRlZFByaWNlcyIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsInByZXZpb3VzUHJpY2UiLCJOdW1iZXIiLCJwcmljZSIsImN1cnJlbnRQcmljZSIsInRvRml4ZWQiLCJwcmljZUNoYW5nZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVSZXF1ZXN0U29ydCIsImV2ZW50IiwicHJvcGVydHkiLCJpc0FzYyIsImhhbmRsZUZpbHRlckNoYW5nZSIsInRhcmdldCIsInRvTG93ZXJDYXNlIiwiZmlsdGVyZWRBbmRTb3J0ZWREYXRhIiwia2V5cyIsIm1hcCIsImlkIiwiY29pbiIsInN5bWJvbCIsImluY2x1ZGVzIiwic29ydCIsImEiLCJiIiwiYVZhbHVlIiwiYlZhbHVlIiwidG9TdHJpbmciLCJsb2NhbGVDb21wYXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useCryptoData.ts\n"));

/***/ })

});