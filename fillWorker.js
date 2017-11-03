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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NewBackgroundTextureEvent {
    constructor(imageData) {
        this.eventType = NewBackgroundTextureEvent.eventType;
        this.handled = false;
        this.payload = imageData;
    }
    static get eventType() {
        return 'NewBackgroundTexture';
    }
}
exports.NewBackgroundTextureEvent = NewBackgroundTextureEvent;


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NewHeightMapEvent {
    constructor(imageData) {
        this.eventType = NewHeightMapEvent.eventType;
        this.handled = false;
        this.payload = imageData;
    }
    static get eventType() {
        return NewHeightMapEvent.name;
    }
}
exports.NewHeightMapEvent = NewHeightMapEvent;


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NewLightColorEvent {
    constructor(color) {
        this.eventType = NewLightColorEvent.eventType;
        this.handled = false;
        this.payload = color;
    }
    static get eventType() {
        return NewLightColorEvent.name;
    }
}
exports.NewLightColorEvent = NewLightColorEvent;


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NewLightVersorEvent {
    constructor(lightVersor) {
        this.eventType = NewLightVersorEvent.eventType;
        this.handled = false;
        this.payload = lightVersor;
    }
    static get eventType() {
        return NewLightVersorEvent.name;
    }
}
exports.NewLightVersorEvent = NewLightVersorEvent;


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NewLightVersorTypeEvent {
    constructor(lightVersorType) {
        this.eventType = NewLightVersorTypeEvent.eventType;
        this.handled = false;
        this.payload = lightVersorType;
    }
    static get eventType() {
        return NewLightVersorTypeEvent.name;
    }
}
exports.NewLightVersorTypeEvent = NewLightVersorTypeEvent;


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NewNormalMapEvent {
    constructor(imageData) {
        this.eventType = NewNormalMapEvent.eventType;
        this.handled = false;
        this.payload = imageData;
    }
    static get eventType() {
        return NewNormalMapEvent.name;
    }
}
exports.NewNormalMapEvent = NewNormalMapEvent;


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FillWorkerMessageType;
(function (FillWorkerMessageType) {
    FillWorkerMessageType[FillWorkerMessageType["CanvasInfo"] = 0] = "CanvasInfo";
    FillWorkerMessageType[FillWorkerMessageType["NewFillDataEvent"] = 1] = "NewFillDataEvent";
    FillWorkerMessageType[FillWorkerMessageType["StartFill"] = 2] = "StartFill";
    FillWorkerMessageType[FillWorkerMessageType["FillStrips"] = 3] = "FillStrips";
    FillWorkerMessageType[FillWorkerMessageType["EndFill"] = 4] = "EndFill";
})(FillWorkerMessageType = exports.FillWorkerMessageType || (exports.FillWorkerMessageType = {}));


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(9);
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
    static fromNormalMap(r, g, b) {
        const x = r / 255 * 2 - 1;
        const y = g / 255 * 2 - 1;
        const z = b / 255;
        return new Vector3(x, y, z);
    }
    static multiplyComponents(v1, v2) {
        return new Vector3(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
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
    multiply(scale) {
        return new Vector3(this.x * scale, this.y * scale, this.z * scale);
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
    floor() {
        const x = Math.floor(this.x);
        const y = Math.floor(this.y);
        const z = Math.floor(this.z);
        return new Vector3(x, y, z);
    }
    normalizeWithZIdentity() {
        const scale = 1 / this.z;
        return new Vector3(this.x * scale, this.y * scale, 1);
    }
}
exports.Vector3 = Vector3;


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NewBackgroundTextureEvent_1 = __webpack_require__(15);
exports.NewBackgroundTextureEvent = NewBackgroundTextureEvent_1.NewBackgroundTextureEvent;
const NewHeightMapEvent_1 = __webpack_require__(16);
exports.NewHeightMapEvent = NewHeightMapEvent_1.NewHeightMapEvent;
const NewLightColorEvent_1 = __webpack_require__(17);
exports.NewLightColorEvent = NewLightColorEvent_1.NewLightColorEvent;
const NewLightVersorEvent_1 = __webpack_require__(18);
exports.NewLightVersorEvent = NewLightVersorEvent_1.NewLightVersorEvent;
const NewLightVersorTypeEvent_1 = __webpack_require__(19);
exports.NewLightVersorTypeEvent = NewLightVersorTypeEvent_1.NewLightVersorTypeEvent;
const NewNormalMapEvent_1 = __webpack_require__(20);
exports.NewNormalMapEvent = NewNormalMapEvent_1.NewNormalMapEvent;


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector3_1 = __webpack_require__(6);
const input_data_1 = __webpack_require__(8);
const FillWorkerMessageType_1 = __webpack_require__(21);
const appFillData = {
    backgroundTexture: new ImageData(1, 1),
    normalMap: new ImageData(1, 1),
    heightMap: new ImageData(1, 1),
    lightColor: new Vector3_1.Vector3(0, 0, 0)
};
let canvasWidth = 0;
let canvasHeight = 0;
let canvasImageData;
let lightDirectionVersor = new Vector3_1.Vector3(0, 0, 1);
let initializationValue = 0;
let textureVectors = [];
let textureVectorsWithLightColor = [];
let normalVectors = [];
let bumpVectors = [];
let distortedNormalVectors = [];
onmessage = (e) => {
    const messageType = e.data.type;
    switch (messageType) {
        case FillWorkerMessageType_1.FillWorkerMessageType.CanvasInfo:
            canvasWidth = e.data.width;
            canvasHeight = e.data.height;
            break;
        case FillWorkerMessageType_1.FillWorkerMessageType.NewFillDataEvent:
            handleNewFillDataEvent(e.data.event);
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
        default:
            // tslint:disable-next-line no-console
            console.error('Unknown worker message type', messageType);
    }
};
function fillStrips(strips) {
    strips.forEach(strip => {
        const fromX = Math.max(Math.floor(strip.fromX), 0);
        const toX = Math.min(Math.floor(strip.toX), canvasWidth - 1);
        for (let x = fromX; x <= toX; x += 1) {
            putPixel(x, strip.y);
        }
    });
}
function putPixel(x, y) {
    const textureVectorWithLightColor = textureVectorsWithLightColor[x][y];
    const distortedNormalVector = distortedNormalVectors[x][y];
    // cos theta = v1 * v2 / (norm(v1) * norm(v2))
    // Since lightDirectionVersor and distortedNormalVector are unit vectors, cos theta is just
    // a dot product
    const cosTheta = Vector3_1.Vector3.dotProduct(lightDirectionVersor, distortedNormalVector);
    const clampedCosTheta = Math.max(0, Math.min(1, cosTheta));
    const result = textureVectorWithLightColor
        .multiply(clampedCosTheta)
        .floor();
    const index = (x + y * canvasImageData.width) * 4;
    canvasImageData.data[index] = result.x;
    canvasImageData.data[index + 1] = result.y;
    canvasImageData.data[index + 2] = result.z;
    canvasImageData.data[index + 3] = 255;
}
function respond() {
    postMessage(canvasImageData, [canvasImageData.data.buffer]);
}
function performInitialPreparation() {
    prepareTextureVectors();
    prepareTextureVectorsWithLightColor();
    prepareNormalVectors();
    prepareBumpVectors();
    applyBumpVectors();
}
function prepareTextureVectors() {
    textureVectors = [];
    const backgroundTexture = appFillData.backgroundTexture;
    for (let x = 0; x < canvasWidth; x += 1) {
        const backgroundTextureX = x % backgroundTexture.width;
        textureVectors.push([]);
        for (let y = 0; y < canvasWidth; y += 1) {
            const backgroundTextureY = y % backgroundTexture.height;
            const index = (backgroundTextureX + backgroundTextureY * backgroundTexture.width) * 4;
            const r = backgroundTexture.data[index];
            const g = backgroundTexture.data[index + 1];
            const b = backgroundTexture.data[index + 2];
            textureVectors[x].push(new Vector3_1.Vector3(r, g, b));
        }
    }
}
function prepareNormalVectors() {
    normalVectors = [];
    const normalMap = appFillData.normalMap;
    for (let x = 0; x < canvasWidth; x += 1) {
        const normalMapX = x % normalMap.width;
        normalVectors.push([]);
        for (let y = 0; y < canvasWidth; y += 1) {
            const normalMapY = y % normalMap.height;
            const index = (normalMapX + normalMapY * normalMap.width) * 4;
            const r = normalMap.data[index];
            const g = normalMap.data[index + 1];
            const b = normalMap.data[index + 2];
            const normalVector = Vector3_1.Vector3.fromNormalMap(r, g, b).normalizeWithZIdentity();
            normalVectors[x].push(normalVector);
        }
    }
}
function prepareBumpVectors() {
    bumpVectors = [];
    const heightMap = appFillData.heightMap;
    const maxHeightMapX = heightMap.width - 1;
    const maxHeightMapY = heightMap.height - 1;
    for (let x = 0; x < canvasWidth; x += 1) {
        const heightMapX = x % heightMap.width;
        bumpVectors.push([]);
        for (let y = 0; y < canvasWidth; y += 1) {
            const heightMapY = y % heightMap.height;
            const index = (heightMapX + heightMapY * heightMap.width) * 4;
            let dhx = 0; // = H[x + 1, y] - H[x, y]
            let dhy = 0; // = H[x, y+1] - H[x, y]
            // TODO: fix this
            if (heightMapX < maxHeightMapX) {
                dhx = heightMap.data[index + 4] - heightMap.data[index];
            }
            else {
                // H[0, y] - H[x, y]
                dhx = heightMap.data[index - heightMapX * 4] - heightMap.data[index];
            }
            if (heightMapY < maxHeightMapY) {
                dhy = heightMap.data[index + heightMap.width * 4] - heightMap.data[index];
            }
            else {
                // H[x, 0] - H[x, y]
                dhy = heightMap.data[heightMapX * 4] - heightMap.data[index];
            }
            const normalVector = normalVectors[x][y];
            const t = new Vector3_1.Vector3(1, 0, -normalVector.x);
            const b = new Vector3_1.Vector3(0, 1, -normalVector.y);
            const d = Vector3_1.Vector3.add(t.multiply(dhx), b.multiply(dhy));
            bumpVectors[x].push(d);
        }
    }
}
function applyBumpVectors() {
    distortedNormalVectors = [];
    for (let x = 0; x < canvasWidth; x += 1) {
        distortedNormalVectors.push([]);
        for (let y = 0; y < canvasHeight; y += 1) {
            distortedNormalVectors[x].push(Vector3_1.Vector3.add(normalVectors[x][y], bumpVectors[x][y]).normalize());
        }
    }
}
function prepareTextureVectorsWithLightColor() {
    textureVectorsWithLightColor = [];
    for (let x = 0; x < canvasWidth; x += 1) {
        textureVectorsWithLightColor.push([]);
        for (let y = 0; y < canvasHeight; y += 1) {
            textureVectorsWithLightColor[x].push(Vector3_1.Vector3.multiplyComponents(textureVectors[x][y], appFillData.lightColor).floor());
        }
    }
}
function handleNewFillDataEvent(event) {
    const handlers = {
        [input_data_1.NewBackgroundTextureEvent.eventType]: onNewBackgroundTexture,
        [input_data_1.NewHeightMapEvent.eventType]: onNewHeightMap,
        [input_data_1.NewLightColorEvent.eventType]: onNewLightColor,
        [input_data_1.NewLightVersorEvent.eventType]: onNewLightVersor,
        [input_data_1.NewNormalMapEvent.eventType]: onNewNormalMap
    };
    handlers[event.eventType](event);
}
// tslint:disable no-bitwise
function onNewBackgroundTexture(event) {
    appFillData.backgroundTexture = event.payload;
    initializationValue |= 1;
    if (hasInitialized()) {
        prepareTextureVectors();
        prepareTextureVectorsWithLightColor();
    }
    else if (canInitialize()) {
        performInitialPreparation();
    }
}
function onNewHeightMap(event) {
    appFillData.heightMap = event.payload;
    initializationValue |= 2;
    if (hasInitialized()) {
        prepareBumpVectors();
        applyBumpVectors();
    }
    else if (canInitialize()) {
        performInitialPreparation();
    }
}
function onNewLightColor(event) {
    const { x, y, z } = event.payload;
    appFillData.lightColor = new Vector3_1.Vector3(x, y, z);
    initializationValue |= 4;
    if (hasInitialized()) {
        prepareTextureVectorsWithLightColor();
    }
    else if (canInitialize()) {
        performInitialPreparation();
    }
}
function onNewLightVersor(event) {
    const { x, y, z } = event.payload;
    lightDirectionVersor = new Vector3_1.Vector3(x, y, z);
    initializationValue |= 8;
    if (canInitialize()) {
        performInitialPreparation();
    }
}
function onNewNormalMap(event) {
    appFillData.normalMap = event.payload;
    initializationValue |= 16;
    if (hasInitialized()) {
        prepareNormalVectors();
        prepareBumpVectors();
        applyBumpVectors();
    }
    else if (canInitialize()) {
        performInitialPreparation();
    }
}
// tslint:enable no-bitwise
function canInitialize() {
    if (initializationValue === 31) {
        initializationValue = 63;
        return true;
    }
    return false;
}
function hasInitialized() {
    return initializationValue === 63;
}


/***/ }),

/***/ 9:
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTNjMTc4MTY1MGNiMGZkNWI0MmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0hlaWdodE1hcEV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodENvbG9yRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWdvbi1maWxsZXIvRmlsbFdvcmtlck1lc3NhZ2VUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vVmVjdG9yMy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmtlcnMvUG9seWdvbkZpbGxXb3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Db2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUMsQ0FBQztJQUNiLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQVk7UUFDbEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBVyxFQUFFLEVBQVc7UUFDeEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBVyxFQUFFLEVBQVc7UUFDN0MsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBVyxFQUFFLEVBQVc7UUFDakQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUNoQixFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUN6QixFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUN6QixFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENB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UyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFcEMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVPLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFlO1FBQy9DLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFakMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDO0lBQ0gsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEQsTUFBTSxDQUFDLElBQUksT0FBTyxHQUFHLFFBQVEsR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0NBQ0Y7QUEzQ0Qsc0JBMkNDIiwiZmlsZSI6ImZpbGxXb3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4MSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTNjMTc4MTY1MGNiMGZkNWI0MmEiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogSW1hZ2VEYXRhO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbWFnZURhdGE6IEltYWdlRGF0YSkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gaW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdOZXdCYWNrZ3JvdW5kVGV4dHVyZSc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3SGVpZ2h0TWFwRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IEltYWdlRGF0YTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3SGVpZ2h0TWFwRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlRGF0YTogSW1hZ2VEYXRhKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3SGVpZ2h0TWFwRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3SGVpZ2h0TWFwRXZlbnQudHMiLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0xpZ2h0Q29sb3JFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogVmVjdG9yMztcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3TGlnaHRDb2xvckV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2xvcjogVmVjdG9yMykge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gY29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3TGlnaHRDb2xvckV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0Q29sb3JFdmVudC50cyIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdjb21tb24vVmVjdG9yMyc7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3TGlnaHRWZXJzb3JFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogVmVjdG9yMztcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3TGlnaHRWZXJzb3JFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IobGlnaHRWZXJzb3I6IFZlY3RvcjMpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGxpZ2h0VmVyc29yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld0xpZ2h0VmVyc29yRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRWZXJzb3JFdmVudC50cyIsImltcG9ydCB7IExpZ2h0VmVyc29yVHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFZlcnNvclR5cGUnO1xyXG5cclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBMaWdodFZlcnNvclR5cGU7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsaWdodFZlcnNvclR5cGU6IExpZ2h0VmVyc29yVHlwZSkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gbGlnaHRWZXJzb3JUeXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld05vcm1hbE1hcEV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBJbWFnZURhdGE7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld05vcm1hbE1hcEV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbWFnZURhdGE6IEltYWdlRGF0YSkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gaW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld05vcm1hbE1hcEV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld05vcm1hbE1hcEV2ZW50LnRzIiwiZXhwb3J0IGVudW0gRmlsbFdvcmtlck1lc3NhZ2VUeXBlIHtcclxuICBDYW52YXNJbmZvLFxyXG5cclxuICBOZXdGaWxsRGF0YUV2ZW50LFxyXG5cclxuICBTdGFydEZpbGwsXHJcbiAgRmlsbFN0cmlwcyxcclxuICBFbmRGaWxsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcG9seWdvbi1maWxsZXIvRmlsbFdvcmtlck1lc3NhZ2VUeXBlLnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5cclxuY29uc3QgTUFYX0NPTE9SID0gMjU1O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjMge1xyXG4gIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgcHVibGljIHk6IG51bWJlcjtcclxuICBwdWJsaWMgejogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMueiA9IHo7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZyb21Db2xvcihjb2xvcjogQ29sb3IpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyhjb2xvci5yIC8gTUFYX0NPTE9SLCBjb2xvci5nIC8gTUFYX0NPTE9SLCBjb2xvci5iIC8gTUFYX0NPTE9SKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYWRkKHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYxLnggKyB2Mi54LCB2MS55ICsgdjIueSwgdjEueiArIHYyLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdWJ0cmFjdCh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh2MS54IC0gdjIueCwgdjEueSAtIHYyLnksIHYxLnogLSB2Mi56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3Jvc3NQcm9kdWN0KHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKFxyXG4gICAgICB2MS55ICogdjIueiAtIHYxLnogKiB2Mi55LFxyXG4gICAgICB2MS56ICogdjIueCAtIHYxLnggKiB2Mi56LFxyXG4gICAgICB2MS54ICogdjIueSAtIHYxLnkgKiB2Mi54XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkb3RQcm9kdWN0KHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdjEueCAqIHYyLnggKyB2MS55ICogdjIueSArIHYxLnogKiB2Mi56O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjb3NpbmVBbmdsZSh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZG90UHJvZHVjdCA9IFZlY3RvcjMuZG90UHJvZHVjdCh2MSwgdjIpO1xyXG4gICAgY29uc3QgbGVuZ3RoMSA9IHYxLmdldExlbmd0aCgpO1xyXG4gICAgY29uc3QgbGVuZ3RoMiA9IHYyLmdldExlbmd0aCgpO1xyXG5cclxuICAgIHJldHVybiBkb3RQcm9kdWN0IC8gKGxlbmd0aDEgKiBsZW5ndGgyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbU5vcm1hbE1hcChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogVmVjdG9yMyB7XHJcbiAgICBjb25zdCB4ID0gciAvIDI1NSAqIDIgLSAxO1xyXG4gICAgY29uc3QgeSA9IGcgLyAyNTUgKiAyIC0gMTtcclxuICAgIGNvbnN0IHogPSBiIC8gMjU1O1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbXVsdGlwbHlDb21wb25lbnRzKHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMykge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYxLnggKiB2Mi54LCB2MS55ICogdjIueSwgdjEueiAqIHYyLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQ29sb3IoKTogQ29sb3Ige1xyXG4gICAgY29uc3QgciA9IE1hdGguZmxvb3IodGhpcy54ICogTUFYX0NPTE9SKTtcclxuICAgIGNvbnN0IGcgPSBNYXRoLmZsb29yKHRoaXMueSAqIE1BWF9DT0xPUik7XHJcbiAgICBjb25zdCBiID0gTWF0aC5mbG9vcih0aGlzLnogKiBNQVhfQ09MT1IpO1xyXG5cclxuICAgIHJldHVybiBuZXcgQ29sb3IociwgZywgYik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbm9ybWFsaXplKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy54IC8gbGVuZ3RoLCB0aGlzLnkgLyBsZW5ndGgsIHRoaXMueiAvIGxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbXVsdGlwbHkoc2NhbGU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCAqIHNjYWxlLCB0aGlzLnkgKiBzY2FsZSwgdGhpcy56ICogc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlbmd0aCgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICoqIDIgKyB0aGlzLnkgKiogMiArIHRoaXMueiAqKiAyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLngsIHRoaXMueSwgdGhpcy56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnZlcnQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoLXRoaXMueCwgLXRoaXMueSwgLXRoaXMueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmxvb3IoKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcih0aGlzLngpO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IodGhpcy55KTtcclxuICAgIGNvbnN0IHogPSBNYXRoLmZsb29yKHRoaXMueik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5vcm1hbGl6ZVdpdGhaSWRlbnRpdHkoKSB7XHJcbiAgICBjb25zdCBzY2FsZSA9IDEgLyB0aGlzLno7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCAqIHNjYWxlLCB0aGlzLnkgKiBzY2FsZSwgMSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9WZWN0b3IzLnRzIiwiaW1wb3J0IHsgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdIZWlnaHRNYXBFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0hlaWdodE1hcEV2ZW50JztcclxuaW1wb3J0IHsgTmV3TGlnaHRDb2xvckV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRDb2xvckV2ZW50JztcclxuaW1wb3J0IHsgTmV3TGlnaHRWZXJzb3JFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdMaWdodFZlcnNvclR5cGVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yVHlwZUV2ZW50JztcclxuaW1wb3J0IHsgTmV3Tm9ybWFsTWFwRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudCc7XHJcblxyXG5leHBvcnQge1xyXG4gIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgTmV3TGlnaHRDb2xvckV2ZW50LFxyXG4gIE5ld0xpZ2h0VmVyc29yRXZlbnQsXHJcbiAgTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQsXHJcbiAgTmV3Tm9ybWFsTWFwRXZlbnRcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvaW5kZXgudHMiLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5pbXBvcnQge1xyXG4gIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgTmV3TGlnaHRDb2xvckV2ZW50LFxyXG4gIE5ld0xpZ2h0VmVyc29yRXZlbnQsXHJcbiAgTmV3Tm9ybWFsTWFwRXZlbnRcclxufSBmcm9tICdldmVudHMvaW5wdXQtZGF0YSc7XHJcblxyXG5pbXBvcnQgeyBBcHBGaWxsRGF0YSB9IGZyb20gJ3BvbHlnb24tZmlsbGVyL0FwcEZpbGxEYXRhJztcclxuaW1wb3J0IHsgRmlsbFN0cmlwIH0gZnJvbSAncG9seWdvbi1maWxsZXIvRmlsbFN0cmlwJztcclxuaW1wb3J0IHsgRmlsbFdvcmtlck1lc3NhZ2VUeXBlIH0gZnJvbSAncG9seWdvbi1maWxsZXIvRmlsbFdvcmtlck1lc3NhZ2VUeXBlJztcclxuXHJcbmNvbnN0IGFwcEZpbGxEYXRhOiBBcHBGaWxsRGF0YSA9IHtcclxuICBiYWNrZ3JvdW5kVGV4dHVyZTogbmV3IEltYWdlRGF0YSgxLCAxKSxcclxuICBub3JtYWxNYXA6IG5ldyBJbWFnZURhdGEoMSwgMSksXHJcbiAgaGVpZ2h0TWFwOiBuZXcgSW1hZ2VEYXRhKDEsIDEpLFxyXG4gIGxpZ2h0Q29sb3I6IG5ldyBWZWN0b3IzKDAsIDAsIDApXHJcbn07XHJcbmxldCBjYW52YXNXaWR0aCA9IDA7XHJcbmxldCBjYW52YXNIZWlnaHQgPSAwO1xyXG5sZXQgY2FudmFzSW1hZ2VEYXRhOiBJbWFnZURhdGE7XHJcbmxldCBsaWdodERpcmVjdGlvblZlcnNvciA9IG5ldyBWZWN0b3IzKDAsIDAsIDEpO1xyXG5sZXQgaW5pdGlhbGl6YXRpb25WYWx1ZSA9IDA7XHJcblxyXG50eXBlIFZlY3RvcjNNYXAgPSBWZWN0b3IzW11bXTtcclxubGV0IHRleHR1cmVWZWN0b3JzOiBWZWN0b3IzTWFwID0gW107XHJcbmxldCB0ZXh0dXJlVmVjdG9yc1dpdGhMaWdodENvbG9yOiBWZWN0b3IzTWFwID0gW107XHJcbmxldCBub3JtYWxWZWN0b3JzOiBWZWN0b3IzTWFwID0gW107XHJcbmxldCBidW1wVmVjdG9yczogVmVjdG9yM01hcCA9IFtdO1xyXG5sZXQgZGlzdG9ydGVkTm9ybWFsVmVjdG9yczogVmVjdG9yM01hcCA9IFtdO1xyXG5cclxub25tZXNzYWdlID0gKGU6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VUeXBlOiBGaWxsV29ya2VyTWVzc2FnZVR5cGUgPSBlLmRhdGEudHlwZTtcclxuXHJcbiAgc3dpdGNoIChtZXNzYWdlVHlwZSkge1xyXG4gICAgY2FzZSBGaWxsV29ya2VyTWVzc2FnZVR5cGUuQ2FudmFzSW5mbzpcclxuICAgICAgY2FudmFzV2lkdGggPSBlLmRhdGEud2lkdGg7XHJcbiAgICAgIGNhbnZhc0hlaWdodCA9IGUuZGF0YS5oZWlnaHQ7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgRmlsbFdvcmtlck1lc3NhZ2VUeXBlLk5ld0ZpbGxEYXRhRXZlbnQ6XHJcbiAgICAgIGhhbmRsZU5ld0ZpbGxEYXRhRXZlbnQoZS5kYXRhLmV2ZW50KTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBGaWxsV29ya2VyTWVzc2FnZVR5cGUuU3RhcnRGaWxsOlxyXG4gICAgICBjYW52YXNJbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5GaWxsU3RyaXBzOlxyXG4gICAgICBmaWxsU3RyaXBzKGUuZGF0YS5maWxsU3RyaXBzKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBGaWxsV29ya2VyTWVzc2FnZVR5cGUuRW5kRmlsbDpcclxuICAgICAgcmVzcG9uZCgpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdVbmtub3duIHdvcmtlciBtZXNzYWdlIHR5cGUnLCBtZXNzYWdlVHlwZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmlsbFN0cmlwcyhzdHJpcHM6IEZpbGxTdHJpcFtdKSB7XHJcbiAgc3RyaXBzLmZvckVhY2goc3RyaXAgPT4ge1xyXG4gICAgY29uc3QgZnJvbVggPSBNYXRoLm1heChNYXRoLmZsb29yKHN0cmlwLmZyb21YKSwgMCk7XHJcbiAgICBjb25zdCB0b1ggPSBNYXRoLm1pbihNYXRoLmZsb29yKHN0cmlwLnRvWCksIGNhbnZhc1dpZHRoIC0gMSk7XHJcblxyXG4gICAgZm9yIChsZXQgeCA9IGZyb21YOyB4IDw9IHRvWDsgeCArPSAxKSB7XHJcbiAgICAgIHB1dFBpeGVsKHgsIHN0cmlwLnkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwdXRQaXhlbCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gIGNvbnN0IHRleHR1cmVWZWN0b3JXaXRoTGlnaHRDb2xvciA9IHRleHR1cmVWZWN0b3JzV2l0aExpZ2h0Q29sb3JbeF1beV07XHJcbiAgY29uc3QgZGlzdG9ydGVkTm9ybWFsVmVjdG9yID0gZGlzdG9ydGVkTm9ybWFsVmVjdG9yc1t4XVt5XTtcclxuXHJcbiAgLy8gY29zIHRoZXRhID0gdjEgKiB2MiAvIChub3JtKHYxKSAqIG5vcm0odjIpKVxyXG4gIC8vIFNpbmNlIGxpZ2h0RGlyZWN0aW9uVmVyc29yIGFuZCBkaXN0b3J0ZWROb3JtYWxWZWN0b3IgYXJlIHVuaXQgdmVjdG9ycywgY29zIHRoZXRhIGlzIGp1c3RcclxuICAvLyBhIGRvdCBwcm9kdWN0XHJcbiAgY29uc3QgY29zVGhldGEgPSBWZWN0b3IzLmRvdFByb2R1Y3QobGlnaHREaXJlY3Rpb25WZXJzb3IsIGRpc3RvcnRlZE5vcm1hbFZlY3Rvcik7XHJcbiAgY29uc3QgY2xhbXBlZENvc1RoZXRhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgY29zVGhldGEpKTtcclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gdGV4dHVyZVZlY3RvcldpdGhMaWdodENvbG9yXHJcbiAgICAubXVsdGlwbHkoY2xhbXBlZENvc1RoZXRhKVxyXG4gICAgLmZsb29yKCk7XHJcblxyXG4gIGNvbnN0IGluZGV4ID0gKHggKyB5ICogY2FudmFzSW1hZ2VEYXRhLndpZHRoKSAqIDQ7XHJcbiAgY2FudmFzSW1hZ2VEYXRhLmRhdGFbaW5kZXhdID0gcmVzdWx0Lng7XHJcbiAgY2FudmFzSW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAxXSA9IHJlc3VsdC55O1xyXG4gIGNhbnZhc0ltYWdlRGF0YS5kYXRhW2luZGV4ICsgMl0gPSByZXN1bHQuejtcclxuICBjYW52YXNJbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID0gMjU1O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNwb25kKCkge1xyXG4gIHBvc3RNZXNzYWdlKGNhbnZhc0ltYWdlRGF0YSwgW2NhbnZhc0ltYWdlRGF0YS5kYXRhLmJ1ZmZlcl0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwZXJmb3JtSW5pdGlhbFByZXBhcmF0aW9uKCkge1xyXG4gIHByZXBhcmVUZXh0dXJlVmVjdG9ycygpO1xyXG4gIHByZXBhcmVUZXh0dXJlVmVjdG9yc1dpdGhMaWdodENvbG9yKCk7XHJcbiAgcHJlcGFyZU5vcm1hbFZlY3RvcnMoKTtcclxuICBwcmVwYXJlQnVtcFZlY3RvcnMoKTtcclxuICBhcHBseUJ1bXBWZWN0b3JzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVUZXh0dXJlVmVjdG9ycygpIHtcclxuICB0ZXh0dXJlVmVjdG9ycyA9IFtdO1xyXG4gIGNvbnN0IGJhY2tncm91bmRUZXh0dXJlID0gYXBwRmlsbERhdGEuYmFja2dyb3VuZFRleHR1cmU7XHJcblxyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgY2FudmFzV2lkdGg7IHggKz0gMSkge1xyXG4gICAgY29uc3QgYmFja2dyb3VuZFRleHR1cmVYID0geCAlIGJhY2tncm91bmRUZXh0dXJlLndpZHRoO1xyXG4gICAgdGV4dHVyZVZlY3RvcnMucHVzaChbXSk7XHJcblxyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjYW52YXNXaWR0aDsgeSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGJhY2tncm91bmRUZXh0dXJlWSA9IHkgJSBiYWNrZ3JvdW5kVGV4dHVyZS5oZWlnaHQ7XHJcblxyXG4gICAgICBjb25zdCBpbmRleCA9IChiYWNrZ3JvdW5kVGV4dHVyZVggKyBiYWNrZ3JvdW5kVGV4dHVyZVkgKiBiYWNrZ3JvdW5kVGV4dHVyZS53aWR0aCkgKiA0O1xyXG4gICAgICBjb25zdCByID0gYmFja2dyb3VuZFRleHR1cmUuZGF0YVtpbmRleF07XHJcbiAgICAgIGNvbnN0IGcgPSBiYWNrZ3JvdW5kVGV4dHVyZS5kYXRhW2luZGV4ICsgMV07XHJcbiAgICAgIGNvbnN0IGIgPSBiYWNrZ3JvdW5kVGV4dHVyZS5kYXRhW2luZGV4ICsgMl07XHJcblxyXG4gICAgICB0ZXh0dXJlVmVjdG9yc1t4XS5wdXNoKG5ldyBWZWN0b3IzKHIsIGcsIGIpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVOb3JtYWxWZWN0b3JzKCkge1xyXG4gIG5vcm1hbFZlY3RvcnMgPSBbXTtcclxuICBjb25zdCBub3JtYWxNYXAgPSBhcHBGaWxsRGF0YS5ub3JtYWxNYXA7XHJcblxyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgY2FudmFzV2lkdGg7IHggKz0gMSkge1xyXG4gICAgY29uc3Qgbm9ybWFsTWFwWCA9IHggJSBub3JtYWxNYXAud2lkdGg7XHJcbiAgICBub3JtYWxWZWN0b3JzLnB1c2goW10pO1xyXG5cclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2FudmFzV2lkdGg7IHkgKz0gMSkge1xyXG4gICAgICBjb25zdCBub3JtYWxNYXBZID0geSAlIG5vcm1hbE1hcC5oZWlnaHQ7XHJcblxyXG4gICAgICBjb25zdCBpbmRleCA9IChub3JtYWxNYXBYICsgbm9ybWFsTWFwWSAqIG5vcm1hbE1hcC53aWR0aCkgKiA0O1xyXG4gICAgICBjb25zdCByID0gbm9ybWFsTWFwLmRhdGFbaW5kZXhdO1xyXG4gICAgICBjb25zdCBnID0gbm9ybWFsTWFwLmRhdGFbaW5kZXggKyAxXTtcclxuICAgICAgY29uc3QgYiA9IG5vcm1hbE1hcC5kYXRhW2luZGV4ICsgMl07XHJcblxyXG4gICAgICBjb25zdCBub3JtYWxWZWN0b3IgPSBWZWN0b3IzLmZyb21Ob3JtYWxNYXAociwgZywgYikubm9ybWFsaXplV2l0aFpJZGVudGl0eSgpO1xyXG4gICAgICBub3JtYWxWZWN0b3JzW3hdLnB1c2gobm9ybWFsVmVjdG9yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVCdW1wVmVjdG9ycygpIHtcclxuICBidW1wVmVjdG9ycyA9IFtdO1xyXG4gIGNvbnN0IGhlaWdodE1hcCA9IGFwcEZpbGxEYXRhLmhlaWdodE1hcDtcclxuICBjb25zdCBtYXhIZWlnaHRNYXBYID0gaGVpZ2h0TWFwLndpZHRoIC0gMTtcclxuICBjb25zdCBtYXhIZWlnaHRNYXBZID0gaGVpZ2h0TWFwLmhlaWdodCAtIDE7XHJcblxyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgY2FudmFzV2lkdGg7IHggKz0gMSkge1xyXG4gICAgY29uc3QgaGVpZ2h0TWFwWCA9IHggJSBoZWlnaHRNYXAud2lkdGg7XHJcbiAgICBidW1wVmVjdG9ycy5wdXNoKFtdKTtcclxuXHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNhbnZhc1dpZHRoOyB5ICs9IDEpIHtcclxuICAgICAgY29uc3QgaGVpZ2h0TWFwWSA9IHkgJSBoZWlnaHRNYXAuaGVpZ2h0O1xyXG4gICAgICBjb25zdCBpbmRleCA9IChoZWlnaHRNYXBYICsgaGVpZ2h0TWFwWSAqIGhlaWdodE1hcC53aWR0aCkgKiA0O1xyXG5cclxuICAgICAgbGV0IGRoeCA9IDA7IC8vID0gSFt4ICsgMSwgeV0gLSBIW3gsIHldXHJcbiAgICAgIGxldCBkaHkgPSAwOyAvLyA9IEhbeCwgeSsxXSAtIEhbeCwgeV1cclxuXHJcbiAgICAgIC8vIFRPRE86IGZpeCB0aGlzXHJcbiAgICAgIGlmIChoZWlnaHRNYXBYIDwgbWF4SGVpZ2h0TWFwWCkge1xyXG4gICAgICAgIGRoeCA9IGhlaWdodE1hcC5kYXRhW2luZGV4ICsgNF0gLSBoZWlnaHRNYXAuZGF0YVtpbmRleF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSFswLCB5XSAtIEhbeCwgeV1cclxuICAgICAgICBkaHggPSBoZWlnaHRNYXAuZGF0YVtpbmRleCAtIGhlaWdodE1hcFggKiA0XSAtIGhlaWdodE1hcC5kYXRhW2luZGV4XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGhlaWdodE1hcFkgPCBtYXhIZWlnaHRNYXBZKSB7XHJcbiAgICAgICAgZGh5ID0gaGVpZ2h0TWFwLmRhdGFbaW5kZXggKyBoZWlnaHRNYXAud2lkdGggKiA0XSAtIGhlaWdodE1hcC5kYXRhW2luZGV4XTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBIW3gsIDBdIC0gSFt4LCB5XVxyXG4gICAgICAgIGRoeSA9IGhlaWdodE1hcC5kYXRhW2hlaWdodE1hcFggKiA0XSAtIGhlaWdodE1hcC5kYXRhW2luZGV4XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgbm9ybWFsVmVjdG9yID0gbm9ybWFsVmVjdG9yc1t4XVt5XTtcclxuICAgICAgY29uc3QgdCA9IG5ldyBWZWN0b3IzKDEsIDAsIC1ub3JtYWxWZWN0b3IueCk7XHJcbiAgICAgIGNvbnN0IGIgPSBuZXcgVmVjdG9yMygwLCAxLCAtbm9ybWFsVmVjdG9yLnkpO1xyXG5cclxuICAgICAgY29uc3QgZCA9IFZlY3RvcjMuYWRkKHQubXVsdGlwbHkoZGh4KSwgYi5tdWx0aXBseShkaHkpKTtcclxuICAgICAgYnVtcFZlY3RvcnNbeF0ucHVzaChkKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5QnVtcFZlY3RvcnMoKSB7XHJcbiAgZGlzdG9ydGVkTm9ybWFsVmVjdG9ycyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IGNhbnZhc1dpZHRoOyB4ICs9IDEpIHtcclxuICAgIGRpc3RvcnRlZE5vcm1hbFZlY3RvcnMucHVzaChbXSk7XHJcblxyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjYW52YXNIZWlnaHQ7IHkgKz0gMSkge1xyXG4gICAgICBkaXN0b3J0ZWROb3JtYWxWZWN0b3JzW3hdLnB1c2goXHJcbiAgICAgICAgVmVjdG9yMy5hZGQobm9ybWFsVmVjdG9yc1t4XVt5XSwgYnVtcFZlY3RvcnNbeF1beV0pLm5vcm1hbGl6ZSgpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlVGV4dHVyZVZlY3RvcnNXaXRoTGlnaHRDb2xvcigpIHtcclxuICB0ZXh0dXJlVmVjdG9yc1dpdGhMaWdodENvbG9yID0gW107XHJcblxyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgY2FudmFzV2lkdGg7IHggKz0gMSkge1xyXG4gICAgdGV4dHVyZVZlY3RvcnNXaXRoTGlnaHRDb2xvci5wdXNoKFtdKTtcclxuXHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNhbnZhc0hlaWdodDsgeSArPSAxKSB7XHJcbiAgICAgIHRleHR1cmVWZWN0b3JzV2l0aExpZ2h0Q29sb3JbeF0ucHVzaChcclxuICAgICAgICBWZWN0b3IzLm11bHRpcGx5Q29tcG9uZW50cyh0ZXh0dXJlVmVjdG9yc1t4XVt5XSwgYXBwRmlsbERhdGEubGlnaHRDb2xvcikuZmxvb3IoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTmV3RmlsbERhdGFFdmVudChldmVudDogQXBwRXZlbnQpIHtcclxuICB0eXBlIEV2ZW50SGFuZGxlciA9IChldmVudDogQXBwRXZlbnQpID0+IHZvaWQ7XHJcbiAgY29uc3QgaGFuZGxlcnM6IHsgW2V2ZW50VHlwZTogc3RyaW5nXTogRXZlbnRIYW5kbGVyIH0gPSB7XHJcbiAgICBbTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudC5ldmVudFR5cGVdOiBvbk5ld0JhY2tncm91bmRUZXh0dXJlLFxyXG4gICAgW05ld0hlaWdodE1hcEV2ZW50LmV2ZW50VHlwZV06IG9uTmV3SGVpZ2h0TWFwLFxyXG4gICAgW05ld0xpZ2h0Q29sb3JFdmVudC5ldmVudFR5cGVdOiBvbk5ld0xpZ2h0Q29sb3IsXHJcbiAgICBbTmV3TGlnaHRWZXJzb3JFdmVudC5ldmVudFR5cGVdOiBvbk5ld0xpZ2h0VmVyc29yLFxyXG4gICAgW05ld05vcm1hbE1hcEV2ZW50LmV2ZW50VHlwZV06IG9uTmV3Tm9ybWFsTWFwXHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlcnNbZXZlbnQuZXZlbnRUeXBlXShldmVudCk7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlIG5vLWJpdHdpc2VcclxuZnVuY3Rpb24gb25OZXdCYWNrZ3JvdW5kVGV4dHVyZShldmVudDogTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCkge1xyXG4gIGFwcEZpbGxEYXRhLmJhY2tncm91bmRUZXh0dXJlID0gZXZlbnQucGF5bG9hZDtcclxuICBpbml0aWFsaXphdGlvblZhbHVlIHw9IDE7XHJcblxyXG4gIGlmIChoYXNJbml0aWFsaXplZCgpKSB7XHJcbiAgICBwcmVwYXJlVGV4dHVyZVZlY3RvcnMoKTtcclxuICAgIHByZXBhcmVUZXh0dXJlVmVjdG9yc1dpdGhMaWdodENvbG9yKCk7XHJcbiAgfSBlbHNlIGlmIChjYW5Jbml0aWFsaXplKCkpIHtcclxuICAgIHBlcmZvcm1Jbml0aWFsUHJlcGFyYXRpb24oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTmV3SGVpZ2h0TWFwKGV2ZW50OiBOZXdIZWlnaHRNYXBFdmVudCkge1xyXG4gIGFwcEZpbGxEYXRhLmhlaWdodE1hcCA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgaW5pdGlhbGl6YXRpb25WYWx1ZSB8PSAyO1xyXG5cclxuICBpZiAoaGFzSW5pdGlhbGl6ZWQoKSkge1xyXG4gICAgcHJlcGFyZUJ1bXBWZWN0b3JzKCk7XHJcbiAgICBhcHBseUJ1bXBWZWN0b3JzKCk7XHJcbiAgfSBlbHNlIGlmIChjYW5Jbml0aWFsaXplKCkpIHtcclxuICAgIHBlcmZvcm1Jbml0aWFsUHJlcGFyYXRpb24oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTmV3TGlnaHRDb2xvcihldmVudDogTmV3TGlnaHRDb2xvckV2ZW50KSB7XHJcbiAgY29uc3QgeyB4LCB5LCB6IH0gPSBldmVudC5wYXlsb2FkO1xyXG4gIGFwcEZpbGxEYXRhLmxpZ2h0Q29sb3IgPSBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuICBpbml0aWFsaXphdGlvblZhbHVlIHw9IDQ7XHJcblxyXG4gIGlmIChoYXNJbml0aWFsaXplZCgpKSB7XHJcbiAgICBwcmVwYXJlVGV4dHVyZVZlY3RvcnNXaXRoTGlnaHRDb2xvcigpO1xyXG4gIH0gZWxzZSBpZiAoY2FuSW5pdGlhbGl6ZSgpKSB7XHJcbiAgICBwZXJmb3JtSW5pdGlhbFByZXBhcmF0aW9uKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbk5ld0xpZ2h0VmVyc29yKGV2ZW50OiBOZXdMaWdodFZlcnNvckV2ZW50KSB7XHJcbiAgY29uc3QgeyB4LCB5LCB6IH0gPSBldmVudC5wYXlsb2FkO1xyXG4gIGxpZ2h0RGlyZWN0aW9uVmVyc29yID0gbmV3IFZlY3RvcjMoeCwgeSwgeik7XHJcbiAgaW5pdGlhbGl6YXRpb25WYWx1ZSB8PSA4O1xyXG5cclxuICBpZiAoY2FuSW5pdGlhbGl6ZSgpKSB7XHJcbiAgICBwZXJmb3JtSW5pdGlhbFByZXBhcmF0aW9uKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbk5ld05vcm1hbE1hcChldmVudDogTmV3Tm9ybWFsTWFwRXZlbnQpIHtcclxuICBhcHBGaWxsRGF0YS5ub3JtYWxNYXAgPSBldmVudC5wYXlsb2FkO1xyXG4gIGluaXRpYWxpemF0aW9uVmFsdWUgfD0gMTY7XHJcblxyXG4gIGlmIChoYXNJbml0aWFsaXplZCgpKSB7XHJcbiAgICBwcmVwYXJlTm9ybWFsVmVjdG9ycygpO1xyXG4gICAgcHJlcGFyZUJ1bXBWZWN0b3JzKCk7XHJcbiAgICBhcHBseUJ1bXBWZWN0b3JzKCk7XHJcbiAgfSBlbHNlIGlmIChjYW5Jbml0aWFsaXplKCkpIHtcclxuICAgIHBlcmZvcm1Jbml0aWFsUHJlcGFyYXRpb24oKTtcclxuICB9XHJcbn1cclxuLy8gdHNsaW50OmVuYWJsZSBuby1iaXR3aXNlXHJcblxyXG5mdW5jdGlvbiBjYW5Jbml0aWFsaXplKCkge1xyXG4gIGlmIChpbml0aWFsaXphdGlvblZhbHVlID09PSAzMSkge1xyXG4gICAgaW5pdGlhbGl6YXRpb25WYWx1ZSA9IDYzO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNJbml0aWFsaXplZCgpIHtcclxuICByZXR1cm4gaW5pdGlhbGl6YXRpb25WYWx1ZSA9PT0gNjM7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvd29ya2Vycy9Qb2x5Z29uRmlsbFdvcmtlci50cyIsImV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHI6IG51bWJlcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgZzogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBiOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IGZpbGxTdHlsZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnIgPSByO1xyXG4gICAgdGhpcy5nID0gZztcclxuICAgIHRoaXMuYiA9IGI7XHJcblxyXG4gICAgdGhpcy5maWxsU3R5bGUgPSBgcmdiKCR7dGhpcy5yfSwgJHt0aGlzLmd9LCAke3RoaXMuYn0pYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUhleFN0cmluZyhoZXhTdHJpbmc6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVkUGFydCA9IGhleFN0cmluZy5zbGljZSgxLCAzKTtcclxuICAgIGNvbnN0IGdyZWVuUGFydCA9IGhleFN0cmluZy5zbGljZSgzLCA1KTtcclxuICAgIGNvbnN0IGJsdWVQYXJ0ID0gaGV4U3RyaW5nLnNsaWNlKDUsIDcpO1xyXG5cclxuICAgIGNvbnN0IHJlZCA9IHBhcnNlSW50KHJlZFBhcnQsIDE2KTtcclxuICAgIGNvbnN0IGdyZWVuID0gcGFyc2VJbnQoZ3JlZW5QYXJ0LCAxNik7XHJcbiAgICBjb25zdCBibHVlID0gcGFyc2VJbnQoYmx1ZVBhcnQsIDE2KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IENvbG9yKHJlZCwgZ3JlZW4sIGJsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW50ZWdlclRvUGFkZGVkSGV4KGludGVnZXI6IG51bWJlcikge1xyXG4gICAgY29uc3QgaGV4ID0gaW50ZWdlci50b1N0cmluZygxNik7XHJcblxyXG4gICAgaWYgKGhleC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIGAgJHtoZXh9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBoZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9IZXhTdHJpbmcoKSB7XHJcbiAgICBjb25zdCByZWRQYXJ0ID0gQ29sb3IuaW50ZWdlclRvUGFkZGVkSGV4KHRoaXMucik7XHJcbiAgICBjb25zdCBncmVlblBhcnQgPSBDb2xvci5pbnRlZ2VyVG9QYWRkZWRIZXgodGhpcy5nKTtcclxuICAgIGNvbnN0IGJsdWVQYXJ0ID0gQ29sb3IuaW50ZWdlclRvUGFkZGVkSGV4KHRoaXMuYik7XHJcblxyXG4gICAgcmV0dXJuIGAjJHtyZWRQYXJ0ICsgYmx1ZVBhcnQgKyBncmVlblBhcnR9YDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0NvbG9yLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==