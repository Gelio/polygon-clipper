/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FillWorkerMessageType;
(function (FillWorkerMessageType) {
    FillWorkerMessageType[FillWorkerMessageType["FillData"] = 0] = "FillData";
    FillWorkerMessageType[FillWorkerMessageType["StartFill"] = 1] = "StartFill";
    FillWorkerMessageType[FillWorkerMessageType["FillStrips"] = 2] = "FillStrips";
    FillWorkerMessageType[FillWorkerMessageType["EndFill"] = 3] = "EndFill";
    FillWorkerMessageType[FillWorkerMessageType["LightVersor"] = 4] = "LightVersor";
})(FillWorkerMessageType = exports.FillWorkerMessageType || (exports.FillWorkerMessageType = {}));


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(6);
const MAX_COLOR = 255;
class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static fromColor(color) {
        return new Vector3(color.r / MAX_COLOR, color.g / MAX_COLOR, color.b / MAX_COLOR);
    }
    static add(v1, v2) {
        return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }
    static subtract(v1, v2) {
        return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    }
    static crossProduct(v1, v2) {
        return new Vector3(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
    }
    static dotProduct(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }
    static cosineAngle(v1, v2) {
        const dotProduct = Vector3.dotProduct(v1, v2);
        const length1 = v1.getLength();
        const length2 = v2.getLength();
        return dotProduct / (length1 * length2);
    }
    toColor() {
        const r = Math.floor(this.x * MAX_COLOR);
        const g = Math.floor(this.y * MAX_COLOR);
        const b = Math.floor(this.z * MAX_COLOR);
        return new Color_1.Color(r, g, b);
    }
    normalize() {
        const length = this.getLength();
        return new Vector3(this.x / length, this.y / length, this.z / length);
    }
    getLength() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    invert() {
        return new Vector3(-this.x, -this.y, -this.z);
    }
}
exports.Vector3 = Vector3;


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.fillStyle = `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    static fromHexString(hexString) {
        const redPart = hexString.slice(1, 3);
        const greenPart = hexString.slice(3, 5);
        const bluePart = hexString.slice(5, 7);
        const red = parseInt(redPart, 16);
        const green = parseInt(greenPart, 16);
        const blue = parseInt(bluePart, 16);
        return new Color(red, green, blue);
    }
    static integerToPaddedHex(integer) {
        const hex = integer.toString(16);
        if (hex.length === 1) {
            return ` ${hex}`;
        }
        else {
            return hex;
        }
    }
    toHexString() {
        const redPart = Color.integerToPaddedHex(this.r);
        const greenPart = Color.integerToPaddedHex(this.g);
        const bluePart = Color.integerToPaddedHex(this.b);
        return `#${redPart + bluePart + greenPart}`;
    }
}
exports.Color = Color;


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector3_1 = __webpack_require__(15);
const FillWorkerMessageType_1 = __webpack_require__(14);
let appFillData;
let canvasWidth = 0;
let canvasHeight = 0;
let canvasImageData;
let lightVersor = new Vector3_1.Vector3(0, 0, 1);
onmessage = (e) => {
    const messageType = e.data.type;
    switch (messageType) {
        case FillWorkerMessageType_1.FillWorkerMessageType.FillData:
            appFillData = e.data.appFillData;
            canvasWidth = e.data.width;
            canvasHeight = e.data.height;
            break;
        case FillWorkerMessageType_1.FillWorkerMessageType.StartFill:
            canvasImageData = new ImageData(canvasWidth, canvasHeight);
            break;
        case FillWorkerMessageType_1.FillWorkerMessageType.FillStrips:
            fillStrips(e.data.fillStrips);
            break;
        case FillWorkerMessageType_1.FillWorkerMessageType.EndFill:
            respond();
            break;
        case FillWorkerMessageType_1.FillWorkerMessageType.LightVersor:
            const versorParts = e.data.versor;
            lightVersor = new Vector3_1.Vector3(versorParts.x, versorParts.y, versorParts.z);
            break;
        default:
            console.error('Unknown worker message type', messageType);
    }
};
function fillStrips(strips) {
    strips.forEach(strip => {
        for (let x = strip.fromX; x <= strip.toX; x += 1) {
            putPixel(x, strip.y);
        }
    });
}
function putPixel(x, y) {
    if (x >= canvasImageData.width || y >= canvasImageData.height) {
        return;
    }
    // tslint:disable no-bitwise
    x = ~~x;
    y = ~~y;
    // tslint:enable no-bitwise
    const backgroundTexture = appFillData.backgroundTexture;
    const backgroundTextureX = x % backgroundTexture.width;
    const backgroundTextureY = y % backgroundTexture.height;
    const backgroundTextureIndex = (backgroundTextureX + backgroundTextureY * backgroundTexture.width) * 4;
    const index = (x + y * canvasImageData.width) * 4;
    canvasImageData.data[index] = backgroundTexture.data[backgroundTextureIndex];
    canvasImageData.data[index + 1] = backgroundTexture.data[backgroundTextureIndex + 1];
    canvasImageData.data[index + 2] = backgroundTexture.data[backgroundTextureIndex + 2];
    canvasImageData.data[index + 3] = backgroundTexture.data[backgroundTextureIndex + 3];
}
function respond() {
    const arrayBuffer = canvasImageData.data.buffer;
    postMessage(arrayBuffer, [arrayBuffer]);
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDcwZWJkOWFjZmEzNjdlMWJlYzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlnb24tZmlsbGVyL0ZpbGxXb3JrZXJNZXNzYWdlVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1ZlY3RvcjMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Db2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ya2Vycy9Qb2x5Z29uRmlsbFdvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0RBLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBUTtJQUNSLDJFQUFTO0lBQ1QsNkVBQVU7SUFDVix1RUFBTztJQUNQLCtFQUFXO0FBQ2IsQ0FBQyxFQU5XLHFCQUFxQixHQUFyQiw2QkFBcUIsS0FBckIsNkJBQXFCLFFBTWhDOzs7Ozs7Ozs7OztBQ05ELHVDQUFxQztBQUVyQyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFFdEI7SUFLRSxZQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUN6QyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcs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LGlCQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUxRSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzdFLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyRixlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckYsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZGLENBQUM7QUFFRDtJQUNFLE1BQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2hELFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzFDLENBQUMiLCJmaWxlIjoiZmlsbFdvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDc2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNzBlYmQ5YWNmYTM2N2UxYmVjMiIsImV4cG9ydCBlbnVtIEZpbGxXb3JrZXJNZXNzYWdlVHlwZSB7XHJcbiAgRmlsbERhdGEsXHJcbiAgU3RhcnRGaWxsLFxyXG4gIEZpbGxTdHJpcHMsXHJcbiAgRW5kRmlsbCxcclxuICBMaWdodFZlcnNvclxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3BvbHlnb24tZmlsbGVyL0ZpbGxXb3JrZXJNZXNzYWdlVHlwZS50cyIsImltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29tbW9uL0NvbG9yJztcclxuXHJcbmNvbnN0IE1BWF9DT0xPUiA9IDI1NTtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IzIHtcclxuICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgcHVibGljIHo6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnogPSB6O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tQ29sb3IoY29sb3I6IENvbG9yKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoY29sb3IuciAvIE1BWF9DT0xPUiwgY29sb3IuZyAvIE1BWF9DT0xPUiwgY29sb3IuYiAvIE1BWF9DT0xPUik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFkZCh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh2MS54ICsgdjIueCwgdjEueSArIHYyLnksIHYxLnogKyB2Mi56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3VidHJhY3QodjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModjEueCAtIHYyLngsIHYxLnkgLSB2Mi55LCB2MS56IC0gdjIueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyb3NzUHJvZHVjdCh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyhcclxuICAgICAgdjEueSAqIHYyLnogLSB2MS56ICogdjIueSxcclxuICAgICAgdjEueiAqIHYyLnggLSB2MS54ICogdjIueixcclxuICAgICAgdjEueCAqIHYyLnkgLSB2MS55ICogdjIueFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZG90UHJvZHVjdCh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHYxLnggKiB2Mi54ICsgdjEueSAqIHYyLnkgKyB2MS56ICogdjIuejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY29zaW5lQW5nbGUodjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGRvdFByb2R1Y3QgPSBWZWN0b3IzLmRvdFByb2R1Y3QodjEsIHYyKTtcclxuICAgIGNvbnN0IGxlbmd0aDEgPSB2MS5nZXRMZW5ndGgoKTtcclxuICAgIGNvbnN0IGxlbmd0aDIgPSB2Mi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICByZXR1cm4gZG90UHJvZHVjdCAvIChsZW5ndGgxICogbGVuZ3RoMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9Db2xvcigpOiBDb2xvciB7XHJcbiAgICBjb25zdCByID0gTWF0aC5mbG9vcih0aGlzLnggKiBNQVhfQ09MT1IpO1xyXG4gICAgY29uc3QgZyA9IE1hdGguZmxvb3IodGhpcy55ICogTUFYX0NPTE9SKTtcclxuICAgIGNvbnN0IGIgPSBNYXRoLmZsb29yKHRoaXMueiAqIE1BWF9DT0xPUik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDb2xvcihyLCBnLCBiKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBub3JtYWxpemUoKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLnggLyBsZW5ndGgsIHRoaXMueSAvIGxlbmd0aCwgdGhpcy56IC8gbGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqKiAyICsgdGhpcy55ICoqIDIgKyB0aGlzLnogKiogMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy54LCB0aGlzLnksIHRoaXMueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW52ZXJ0KCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKC10aGlzLngsIC10aGlzLnksIC10aGlzLnopO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vVmVjdG9yMy50cyIsImV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHI6IG51bWJlcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgZzogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBiOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IGZpbGxTdHlsZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnIgPSByO1xyXG4gICAgdGhpcy5nID0gZztcclxuICAgIHRoaXMuYiA9IGI7XHJcblxyXG4gICAgdGhpcy5maWxsU3R5bGUgPSBgcmdiKCR7dGhpcy5yfSwgJHt0aGlzLmd9LCAke3RoaXMuYn0pYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUhleFN0cmluZyhoZXhTdHJpbmc6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVkUGFydCA9IGhleFN0cmluZy5zbGljZSgxLCAzKTtcclxuICAgIGNvbnN0IGdyZWVuUGFydCA9IGhleFN0cmluZy5zbGljZSgzLCA1KTtcclxuICAgIGNvbnN0IGJsdWVQYXJ0ID0gaGV4U3RyaW5nLnNsaWNlKDUsIDcpO1xyXG5cclxuICAgIGNvbnN0IHJlZCA9IHBhcnNlSW50KHJlZFBhcnQsIDE2KTtcclxuICAgIGNvbnN0IGdyZWVuID0gcGFyc2VJbnQoZ3JlZW5QYXJ0LCAxNik7XHJcbiAgICBjb25zdCBibHVlID0gcGFyc2VJbnQoYmx1ZVBhcnQsIDE2KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IENvbG9yKHJlZCwgZ3JlZW4sIGJsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW50ZWdlclRvUGFkZGVkSGV4KGludGVnZXI6IG51bWJlcikge1xyXG4gICAgY29uc3QgaGV4ID0gaW50ZWdlci50b1N0cmluZygxNik7XHJcblxyXG4gICAgaWYgKGhleC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIGAgJHtoZXh9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBoZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9IZXhTdHJpbmcoKSB7XHJcbiAgICBjb25zdCByZWRQYXJ0ID0gQ29sb3IuaW50ZWdlclRvUGFkZGVkSGV4KHRoaXMucik7XHJcbiAgICBjb25zdCBncmVlblBhcnQgPSBDb2xvci5pbnRlZ2VyVG9QYWRkZWRIZXgodGhpcy5nKTtcclxuICAgIGNvbnN0IGJsdWVQYXJ0ID0gQ29sb3IuaW50ZWdlclRvUGFkZGVkSGV4KHRoaXMuYik7XHJcblxyXG4gICAgcmV0dXJuIGAjJHtyZWRQYXJ0ICsgYmx1ZVBhcnQgKyBncmVlblBhcnR9YDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0NvbG9yLnRzIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuXHJcbmltcG9ydCB7IEFwcEZpbGxEYXRhIH0gZnJvbSAncG9seWdvbi1maWxsZXIvQXBwRmlsbERhdGEnO1xyXG5pbXBvcnQgeyBGaWxsU3RyaXAgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9GaWxsU3RyaXAnO1xyXG5pbXBvcnQgeyBGaWxsV29ya2VyTWVzc2FnZVR5cGUgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9GaWxsV29ya2VyTWVzc2FnZVR5cGUnO1xyXG5cclxubGV0IGFwcEZpbGxEYXRhOiBBcHBGaWxsRGF0YTtcclxubGV0IGNhbnZhc1dpZHRoID0gMDtcclxubGV0IGNhbnZhc0hlaWdodCA9IDA7XHJcbmxldCBjYW52YXNJbWFnZURhdGE6IEltYWdlRGF0YTtcclxubGV0IGxpZ2h0VmVyc29yID0gbmV3IFZlY3RvcjMoMCwgMCwgMSk7XHJcblxyXG5vbm1lc3NhZ2UgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgY29uc3QgbWVzc2FnZVR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZSA9IGUuZGF0YS50eXBlO1xyXG5cclxuICBzd2l0Y2ggKG1lc3NhZ2VUeXBlKSB7XHJcbiAgICBjYXNlIEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5GaWxsRGF0YTpcclxuICAgICAgYXBwRmlsbERhdGEgPSBlLmRhdGEuYXBwRmlsbERhdGE7XHJcbiAgICAgIGNhbnZhc1dpZHRoID0gZS5kYXRhLndpZHRoO1xyXG4gICAgICBjYW52YXNIZWlnaHQgPSBlLmRhdGEuaGVpZ2h0O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5TdGFydEZpbGw6XHJcbiAgICAgIGNhbnZhc0ltYWdlRGF0YSA9IG5ldyBJbWFnZURhdGEoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgRmlsbFdvcmtlck1lc3NhZ2VUeXBlLkZpbGxTdHJpcHM6XHJcbiAgICAgIGZpbGxTdHJpcHMoZS5kYXRhLmZpbGxTdHJpcHMpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5FbmRGaWxsOlxyXG4gICAgICByZXNwb25kKCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgRmlsbFdvcmtlck1lc3NhZ2VUeXBlLkxpZ2h0VmVyc29yOlxyXG4gICAgICBjb25zdCB2ZXJzb3JQYXJ0cyA9IGUuZGF0YS52ZXJzb3I7XHJcbiAgICAgIGxpZ2h0VmVyc29yID0gbmV3IFZlY3RvcjModmVyc29yUGFydHMueCwgdmVyc29yUGFydHMueSwgdmVyc29yUGFydHMueik7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gd29ya2VyIG1lc3NhZ2UgdHlwZScsIG1lc3NhZ2VUeXBlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmaWxsU3RyaXBzKHN0cmlwczogRmlsbFN0cmlwW10pIHtcclxuICBzdHJpcHMuZm9yRWFjaChzdHJpcCA9PiB7XHJcbiAgICBmb3IgKGxldCB4ID0gc3RyaXAuZnJvbVg7IHggPD0gc3RyaXAudG9YOyB4ICs9IDEpIHtcclxuICAgICAgcHV0UGl4ZWwoeCwgc3RyaXAueSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1dFBpeGVsKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgaWYgKHggPj0gY2FudmFzSW1hZ2VEYXRhLndpZHRoIHx8IHkgPj0gY2FudmFzSW1hZ2VEYXRhLmhlaWdodCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUgbm8tYml0d2lzZVxyXG4gIHggPSB+fng7XHJcbiAgeSA9IH5+eTtcclxuICAvLyB0c2xpbnQ6ZW5hYmxlIG5vLWJpdHdpc2VcclxuXHJcbiAgY29uc3QgYmFja2dyb3VuZFRleHR1cmUgPSBhcHBGaWxsRGF0YS5iYWNrZ3JvdW5kVGV4dHVyZTtcclxuICBjb25zdCBiYWNrZ3JvdW5kVGV4dHVyZVggPSB4ICUgYmFja2dyb3VuZFRleHR1cmUud2lkdGg7XHJcbiAgY29uc3QgYmFja2dyb3VuZFRleHR1cmVZID0geSAlIGJhY2tncm91bmRUZXh0dXJlLmhlaWdodDtcclxuICBjb25zdCBiYWNrZ3JvdW5kVGV4dHVyZUluZGV4ID1cclxuICAgIChiYWNrZ3JvdW5kVGV4dHVyZVggKyBiYWNrZ3JvdW5kVGV4dHVyZVkgKiBiYWNrZ3JvdW5kVGV4dHVyZS53aWR0aCkgKiA0O1xyXG5cclxuICBjb25zdCBpbmRleCA9ICh4ICsgeSAqIGNhbnZhc0ltYWdlRGF0YS53aWR0aCkgKiA0O1xyXG4gIGNhbnZhc0ltYWdlRGF0YS5kYXRhW2luZGV4XSA9IGJhY2tncm91bmRUZXh0dXJlLmRhdGFbYmFja2dyb3VuZFRleHR1cmVJbmRleF07XHJcbiAgY2FudmFzSW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAxXSA9IGJhY2tncm91bmRUZXh0dXJlLmRhdGFbYmFja2dyb3VuZFRleHR1cmVJbmRleCArIDFdO1xyXG4gIGNhbnZhc0ltYWdlRGF0YS5kYXRhW2luZGV4ICsgMl0gPSBiYWNrZ3JvdW5kVGV4dHVyZS5kYXRhW2JhY2tncm91bmRUZXh0dXJlSW5kZXggKyAyXTtcclxuICBjYW52YXNJbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID0gYmFja2dyb3VuZFRleHR1cmUuZGF0YVtiYWNrZ3JvdW5kVGV4dHVyZUluZGV4ICsgM107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3BvbmQoKSB7XHJcbiAgY29uc3QgYXJyYXlCdWZmZXIgPSBjYW52YXNJbWFnZURhdGEuZGF0YS5idWZmZXI7XHJcbiAgcG9zdE1lc3NhZ2UoYXJyYXlCdWZmZXIsIFthcnJheUJ1ZmZlcl0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3dvcmtlcnMvUG9seWdvbkZpbGxXb3JrZXIudHMiXSwic291cmNlUm9vdCI6IiJ9