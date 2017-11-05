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
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector3_1 = __webpack_require__(7);
class VectorMapPreparer {
    constructor(state) {
        this.state = state;
    }
    performInitialPreparation() {
        this.prepareTextureVectors();
        this.prepareTextureVectorsWithLightColor();
        this.prepareNormalVectors();
        this.prepareBumpVectors();
        this.applyBumpVectors();
    }
    prepareTextureVectors() {
        const state = this.state;
        state.textureVectors = [];
        const backgroundTexture = state.appFillData.backgroundTexture;
        for (let x = 0; x < state.canvasWidth; x += 1) {
            const backgroundTextureX = x % backgroundTexture.width;
            state.textureVectors.push([]);
            for (let y = 0; y < state.canvasWidth; y += 1) {
                const backgroundTextureY = y % backgroundTexture.height;
                const index = (backgroundTextureX + backgroundTextureY * backgroundTexture.width) * 4;
                const r = backgroundTexture.data[index];
                const g = backgroundTexture.data[index + 1];
                const b = backgroundTexture.data[index + 2];
                state.textureVectors[x].push(new Vector3_1.Vector3(r, g, b));
            }
        }
    }
    prepareNormalVectors() {
        const state = this.state;
        state.normalVectors = [];
        const normalMap = state.appFillData.normalMap;
        for (let x = 0; x < state.canvasWidth; x += 1) {
            const normalMapX = x % normalMap.width;
            state.normalVectors.push([]);
            for (let y = 0; y < state.canvasWidth; y += 1) {
                const normalMapY = y % normalMap.height;
                const index = (normalMapX + normalMapY * normalMap.width) * 4;
                const r = normalMap.data[index];
                const g = normalMap.data[index + 1];
                const b = normalMap.data[index + 2];
                const normalVector = Vector3_1.Vector3.fromNormalMap(r, g, b);
                const scale = 1 / normalVector.z; // [Nx, Ny, 1]
                state.normalVectors[x].push(normalVector.multiply(scale));
            }
        }
    }
    prepareBumpVectors() {
        const state = this.state;
        state.bumpVectors = [];
        const heightMap = state.appFillData.heightMap;
        const maxHeightMapX = heightMap.width - 1;
        const maxHeightMapY = heightMap.height - 1;
        for (let x = 0; x < state.canvasWidth; x += 1) {
            const heightMapX = x % heightMap.width;
            state.bumpVectors.push([]);
            for (let y = 0; y < state.canvasWidth; y += 1) {
                const heightMapY = y % heightMap.height;
                const index = (heightMapX + heightMapY * heightMap.width) * 4;
                let dhx = 0; // = H[x + 1, y] - H[x, y]
                let dhy = 0; // = H[x, y+1] - H[x, y]
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
                const normalVector = state.normalVectors[x][y];
                const t = new Vector3_1.Vector3(1, 0, -normalVector.x);
                const b = new Vector3_1.Vector3(0, 1, -normalVector.y);
                const d = Vector3_1.Vector3.add(t.multiply(dhx), b.multiply(dhy));
                state.bumpVectors[x].push(d);
            }
        }
    }
    applyBumpVectors() {
        const state = this.state;
        state.distortedNormalVectors = [];
        for (let x = 0; x < state.canvasWidth; x += 1) {
            state.distortedNormalVectors.push([]);
            for (let y = 0; y < state.canvasHeight; y += 1) {
                state.distortedNormalVectors[x].push(Vector3_1.Vector3.add(state.normalVectors[x][y], state.bumpVectors[x][y]).normalize());
            }
        }
    }
    prepareTextureVectorsWithLightColor() {
        const state = this.state;
        state.textureVectorsWithLightColor = [];
        for (let x = 0; x < state.canvasWidth; x += 1) {
            state.textureVectorsWithLightColor.push([]);
            for (let y = 0; y < state.canvasHeight; y += 1) {
                state.textureVectorsWithLightColor[x].push(Vector3_1.Vector3.multiplyComponents(state.textureVectors[x][y], state.appFillData.lightColor).floor());
            }
        }
    }
}
exports.VectorMapPreparer = VectorMapPreparer;


/***/ }),

/***/ 16:
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

/***/ 17:
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

/***/ 18:
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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NewLightPositionEvent {
    constructor(lightPosition) {
        this.eventType = NewLightPositionEvent.eventType;
        this.handled = false;
        this.payload = lightPosition;
    }
    static get eventType() {
        return NewLightPositionEvent.name;
    }
}
exports.NewLightPositionEvent = NewLightPositionEvent;


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NewBackgroundTextureEvent_1 = __webpack_require__(16);
exports.NewBackgroundTextureEvent = NewBackgroundTextureEvent_1.NewBackgroundTextureEvent;
const NewHeightMapEvent_1 = __webpack_require__(17);
exports.NewHeightMapEvent = NewHeightMapEvent_1.NewHeightMapEvent;
const NewLightColorEvent_1 = __webpack_require__(18);
exports.NewLightColorEvent = NewLightColorEvent_1.NewLightColorEvent;
const NewLightPositionEvent_1 = __webpack_require__(19);
exports.NewLightPositionEvent = NewLightPositionEvent_1.NewLightPositionEvent;
const NewLightPositionRadiusEvent_1 = __webpack_require__(20);
exports.NewLightPositionRadiusEvent = NewLightPositionRadiusEvent_1.NewLightPositionRadiusEvent;
const NewLightTypeEvent_1 = __webpack_require__(21);
exports.NewLightTypeEvent = NewLightTypeEvent_1.NewLightTypeEvent;
const NewNormalMapEvent_1 = __webpack_require__(22);
exports.NewNormalMapEvent = NewNormalMapEvent_1.NewNormalMapEvent;


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NewLightPositionRadiusEvent {
    constructor(lightPositionRadius) {
        this.eventType = NewLightPositionRadiusEvent.eventType;
        this.handled = false;
        this.payload = lightPositionRadius;
    }
    static get eventType() {
        return NewLightPositionRadiusEvent.name;
    }
}
exports.NewLightPositionRadiusEvent = NewLightPositionRadiusEvent;


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NewLightTypeEvent {
    constructor(lightType) {
        this.eventType = NewLightTypeEvent.eventType;
        this.handled = false;
        this.payload = lightType;
    }
    static get eventType() {
        return NewLightTypeEvent.name;
    }
}
exports.NewLightTypeEvent = NewLightTypeEvent;


/***/ }),

/***/ 22:
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

/***/ 23:
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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(10);
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
}
exports.Vector3 = Vector3;


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LightType;
(function (LightType) {
    LightType[LightType["Constant"] = 0] = "Constant";
    LightType[LightType["Moving"] = 1] = "Moving";
})(LightType = exports.LightType || (exports.LightType = {}));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LightType_1 = __webpack_require__(9);
const Vector3_1 = __webpack_require__(7);
const FillWorkerMessageType_1 = __webpack_require__(23);
const FillWorkerEventHandler_1 = __webpack_require__(98);
const FillWorkerFiller_1 = __webpack_require__(99);
const VectorMapPreparer_1 = __webpack_require__(100);
const state = {
    appFillData: {
        backgroundTexture: new ImageData(1, 1),
        normalMap: new ImageData(1, 1),
        heightMap: new ImageData(1, 1),
        lightColor: new Vector3_1.Vector3(0, 0, 0)
    },
    canvasHeight: 0,
    canvasWidth: 0,
    canvasImageData: new ImageData(1, 1),
    lightPosition: new Vector3_1.Vector3(0, 0, 1),
    lightType: LightType_1.LightType.Constant,
    initializationValue: 0,
    textureVectors: [],
    textureVectorsWithLightColor: [],
    normalVectors: [],
    bumpVectors: [],
    distortedNormalVectors: []
};
const vectorMapPreparer = new VectorMapPreparer_1.VectorMapPreparer(state);
const eventHandler = new FillWorkerEventHandler_1.FillWorkerEventHandler({ state, vectorMapPreparer });
const filler = new FillWorkerFiller_1.FillWorkerFiller(state);
onmessage = (e) => {
    const messageType = e.data.type;
    switch (messageType) {
        case FillWorkerMessageType_1.FillWorkerMessageType.CanvasInfo:
            state.canvasWidth = e.data.width;
            state.canvasHeight = e.data.height;
            break;
        case FillWorkerMessageType_1.FillWorkerMessageType.NewFillDataEvent:
            eventHandler.handleEvent(e.data.event);
            break;
        case FillWorkerMessageType_1.FillWorkerMessageType.StartFill:
            state.canvasImageData = new ImageData(state.canvasWidth, state.canvasHeight);
            break;
        case FillWorkerMessageType_1.FillWorkerMessageType.FillStrips:
            filler.fillStrips(e.data.fillStrips);
            break;
        case FillWorkerMessageType_1.FillWorkerMessageType.EndFill:
            postMessage(state.canvasImageData, [state.canvasImageData.data.buffer]);
            break;
        default:
            // tslint:disable-next-line no-console
            console.error('Unknown worker message type', messageType);
    }
};


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = __webpack_require__(2);
const Vector3_1 = __webpack_require__(7);
class FillWorkerEventHandler {
    constructor(dependencies) {
        this.handlers = {
            [input_data_1.NewBackgroundTextureEvent.eventType]: this.onNewBackgroundTexture,
            [input_data_1.NewHeightMapEvent.eventType]: this.onNewHeightMap,
            [input_data_1.NewLightColorEvent.eventType]: this.onNewLightColor,
            [input_data_1.NewLightPositionEvent.eventType]: this.onNewLightPosition,
            [input_data_1.NewLightTypeEvent.eventType]: this.onNewLightType,
            [input_data_1.NewNormalMapEvent.eventType]: this.onNewNormalMap
        };
        this.state = dependencies.state;
        this.vectorMapPreparer = dependencies.vectorMapPreparer;
    }
    canInitialize() {
        if (this.state.initializationValue === 63) {
            this.state.initializationValue = 127;
            return true;
        }
        return false;
    }
    hasInitialized() {
        return this.state.initializationValue === 127;
    }
    handleEvent(event) {
        this.handlers[event.eventType].call(this, event);
        if (this.canInitialize()) {
            this.vectorMapPreparer.performInitialPreparation();
        }
    }
    // tslint:disable no-bitwise
    onNewBackgroundTexture(event) {
        this.state.appFillData.backgroundTexture = event.payload;
        this.state.initializationValue |= 1;
        if (this.hasInitialized()) {
            this.vectorMapPreparer.prepareTextureVectors();
            this.vectorMapPreparer.prepareTextureVectorsWithLightColor();
        }
    }
    onNewHeightMap(event) {
        this.state.appFillData.heightMap = event.payload;
        this.state.initializationValue |= 2;
        if (this.hasInitialized()) {
            this.vectorMapPreparer.prepareBumpVectors();
            this.vectorMapPreparer.applyBumpVectors();
        }
    }
    onNewLightColor(event) {
        const { x, y, z } = event.payload;
        this.state.appFillData.lightColor = new Vector3_1.Vector3(x, y, z);
        this.state.initializationValue |= 4;
        if (this.hasInitialized()) {
            this.vectorMapPreparer.prepareTextureVectorsWithLightColor();
        }
    }
    onNewLightPosition(event) {
        const { x, y, z } = event.payload;
        this.state.lightPosition = new Vector3_1.Vector3(x, y, z);
        this.state.initializationValue |= 8;
        if (this.canInitialize()) {
            this.vectorMapPreparer.performInitialPreparation();
        }
    }
    onNewLightType(event) {
        this.state.lightType = event.payload;
        this.state.initializationValue |= 16;
    }
    onNewNormalMap(event) {
        this.state.appFillData.normalMap = event.payload;
        this.state.initializationValue |= 32;
        if (this.hasInitialized()) {
            this.vectorMapPreparer.prepareNormalVectors();
            this.vectorMapPreparer.prepareBumpVectors();
            this.vectorMapPreparer.applyBumpVectors();
        }
    }
}
exports.FillWorkerEventHandler = FillWorkerEventHandler;


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LightType_1 = __webpack_require__(9);
const Vector3_1 = __webpack_require__(7);
class FillWorkerFiller {
    constructor(state) {
        this.state = state;
    }
    fillStrips(strips) {
        strips.forEach(strip => {
            const fromX = Math.max(Math.floor(strip.fromX), 0);
            const toX = Math.min(Math.floor(strip.toX), this.state.canvasWidth - 1);
            for (let x = fromX; x <= toX; x += 1) {
                this.putPixel(x, strip.y);
            }
        });
    }
    putPixel(x, y) {
        const { textureVectorsWithLightColor, distortedNormalVectors, canvasImageData } = this.state;
        const textureVectorWithLightColor = textureVectorsWithLightColor[x][y];
        const distortedNormalVector = distortedNormalVectors[x][y];
        const lightVersor = this.getLightVersor(x, y);
        // cos theta = v1 * v2 / (norm(v1) * norm(v2))
        // Since lightDirectionVersor and distortedNormalVector are unit vectors, cos theta is just
        // a dot product
        const cosTheta = Vector3_1.Vector3.dotProduct(lightVersor, distortedNormalVector);
        const clampedCosTheta = Math.max(0, Math.min(1, cosTheta));
        const result = textureVectorWithLightColor.multiply(clampedCosTheta).floor();
        const index = (x + y * canvasImageData.width) * 4;
        canvasImageData.data[index] = result.x;
        canvasImageData.data[index + 1] = result.y;
        canvasImageData.data[index + 2] = result.z;
        canvasImageData.data[index + 3] = 255;
    }
    getLightVersor(x, y) {
        if (this.state.lightType === LightType_1.LightType.Constant) {
            return this.state.lightPosition;
        }
        // Moving light type
        const lightDirectionVector = Vector3_1.Vector3.subtract(this.state.lightPosition, new Vector3_1.Vector3(x, y, 0));
        return lightDirectionVector.normalize();
    }
}
exports.FillWorkerFiller = FillWorkerFiller;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDZiNzA1MTM3OTc4MzM5MjE3ODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Db2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ya2Vycy9wb2x5Z29uLWZpbGwtd29ya2VyL1ZlY3Rvck1hcFByZXBhcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRDb2xvckV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFBvc2l0aW9uRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VHlwZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWdvbi1maWxsZXIvRmlsbFdvcmtlck1lc3NhZ2VUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vVmVjdG9yMy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0xpZ2h0VHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ya2Vycy9Qb2x5Z29uRmlsbFdvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ya2Vycy9wb2x5Z29uLWZpbGwtd29ya2VyL0ZpbGxXb3JrZXJFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmtlcnMvcG9seWdvbi1maWxsLXdvcmtlci9GaWxsV29ya2VyRmlsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUM3REE7SUFNRSxZQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUN6QyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFWCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMxRCxDQUFDO0lBRU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFpQjtRQUMzQyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV2QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVwQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU8sTUFBTSxDQUFDLGtCQUFrQixDQUFDLE9BQWU7UUFDL0MsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVqQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNiLENBQUM7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRCxNQUFNLENBQUMsSUFBSSxPQUFPLEdBQUcsUUFBUSxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBQzlDLENBQUM7Q0FDRjtBQTNDRCxzQkEyQ0M7Ozs7Ozs7Ozs7O0FDM0NELHlDQUF5QztBQUl6QztJQUdFLFlBQVksS0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLHlCQUF5QjtRQUM5QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsbUNBQW1DLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0scUJBQXFCO1FBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDMUIsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDO1FBRTlELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDOUMsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1lBQ3ZELEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzlDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztnQkFFeEQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RGLE1BQU0sQ0FBQyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsTUFBTSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFNUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxvQkFBb0I7UUFDekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN6QixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUU5QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzlDLE1BQU0sVUFBVSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzlDLE1BQU0sVUFBVSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUV4QyxNQUFNLEtBQUssR0FBRyxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUQsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUVwQyxNQUFNLFlBQVksR0FBRyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWM7Z0JBQ2hELEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1RCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxrQkFBa0I7UUFDdkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN2QixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUM5QyxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQyxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUUzQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzlDLE1BQU0sVUFBVSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTNCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzlDLE1BQU0sVUFBVSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUN4QyxNQUFNLEtBQUssR0FBRyxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFOUQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsMEJBQTBCO2dCQUN2QyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7Z0JBRXJDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUMvQixHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixvQkFBb0I7b0JBQ3BCLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkUsQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFDL0IsR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUUsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixvQkFBb0I7b0JBQ3BCLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvRCxDQUFDO2dCQUVELE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sQ0FBQyxHQUFHLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLENBQUMsR0FBRyxJQUFJLGlCQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFN0MsTUFBTSxDQUFDLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFFbEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM5QyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXRDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2xDLGlCQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUM1RSxDQUFDO1lBQ0osQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU0sbUNBQW1DO1FBQ3hDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLDRCQUE0QixHQUFHLEVBQUUsQ0FBQztRQUV4QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzlDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFNUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDeEMsaUJBQU8sQ0FBQyxrQkFBa0IsQ0FDeEIsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDMUIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQzdCLENBQUMsS0FBSyxFQUFFLENBQ1YsQ0FBQztZQUNKLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztDQUNGO0FBdklELDhDQXVJQzs7Ozs7Ozs7Ozs7QUN6SUQ7SUFLRSxZQUFZLFNBQW9CO1FBSGhCLGNBQVMsR0FBRyx5QkFBeUIsQ0FBQyxTQUFTLENBQUM7UUFDekQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBRU0sTUFBTSxLQUFLLFNBQVM7UUFDekIsTUFBTSxDQUFDLHNCQUFzQixDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQVpELDhEQVlDOzs7Ozs7Ozs7OztBQ1pEO0lBS0UsWUFBWSxTQUFvQjtRQUhoQixjQUFTLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1FBQ2pELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUVNLE1BQU0sS0FBSyxTQUFTO1FBQ3pCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQztDQUNGO0FBWkQsOENBWUM7Ozs7Ozs7Ozs7O0FDVkQ7SUFLRSxZQUFZLEtBQWM7UUFIVixjQUFTLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDO1FBQ2xELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVNLE1BQU0sS0FBSyxTQUFTO1FBQ3pCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztDQUNGO0FBWkQsZ0RBWUM7Ozs7Ozs7Ozs7O0FDWkQ7SUFLRSxZQUFZLGFBQXNCO1FBSGxCLGNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxTQUFTLENBQUM7UUFDckQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztJQUMvQixDQUFDO0lBRU0sTUFBTSxLQUFLLFNBQVM7UUFDekIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7QUFaRCxzREFZQzs7Ozs7Ozs7Ozs7QUNoQkQsNERBQXdGO0FBU3RGLG9DQVRPLHFEQUF5QixDQVNQO0FBUjNCLG9EQUF3RTtBQVN0RSw0QkFUTyxxQ0FBaUIsQ0FTUDtBQVJuQixxREFBMEU7QUFTeEUsNkJBVE8sdUNBQWtCLENBU1A7QUFScEIsd0RBQWdGO0FBUzlFLGdDQVRPLDZDQUFxQixDQVNQO0FBUnZCLDhEQUE0RjtBQVMxRixzQ0FUTyx5REFBMkIsQ0FTUDtBQVI3QixvREFBd0U7QUFTdEUsNEJBVE8scUNBQWlCLENBU1A7QUFSbkIsb0RBQXdFO0FBU3RFLDRCQVRPLHFDQUFpQixDQVNQOzs7Ozs7Ozs7OztBQ2JuQjtJQUtFLFlBQVksbUJBQTJCO1FBSHZCLGNBQVMsR0FBRywyQkFBMkIsQ0FBQyxTQUFTLENBQUM7UUFDM0QsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLEtBQUssU0FBUztRQUN6QixNQUFNLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDO0lBQzFDLENBQUM7Q0FDRjtBQVpELGtFQVlDOzs7Ozs7Ozs7OztBQ1ZEO0lBS0UsWUFBWSxTQUFvQjtRQUhoQixjQUFTLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1FBQ2pELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUVNLE1BQU0sS0FBSyxTQUFTO1FBQ3pCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQztDQUNGO0FBWkQsOENBWUM7Ozs7Ozs7Ozs7O0FDZEQ7SUFLRSxZQUFZLFNBQW9CO1FBSGhCLGNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7UUFDakQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBRU0sTUFBTSxLQUFLLFNBQVM7UUFDekIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztJQUNoQyxDQUFDO0NBQ0Y7QUFaRCw4Q0FZQzs7Ozs7Ozs7Ozs7QUNkRCxJQUFZLHFCQVFYO0FBUkQsV0FBWSxxQkFBcUI7SUFDL0IsNkVBQVU7SUFFVix5RkFBZ0I7SUFFaEIsMkVBQVM7SUFDVCw2RUFBVTtJQUNWLHVFQUFPO0FBQ1QsQ0FBQyxFQVJXLHFCQUFxQixHQUFyQiw2QkFBcUIsS0FBckIsNkJBQXFCLFFBUWhDOzs7Ozs7Ozs7OztBQ1JELHdDQUFxQztBQUVyQyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFFdEI7SUFLRSxZQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUN6QyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFZO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVcsRUFBRSxFQUFXO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQVcsRUFBRSxFQUFXO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQVcsRUFBRSxFQUFXO1FBQ2pELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FDaEIsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFDekIsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFDekIsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FDMUIsQ0FBQztJQUNKLENBQUM7SUFFTSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQVcsRUFBRSxFQUFXO1FBQy9DLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFXLEVBQUUsRUFBVztRQUNoRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0IsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRS9CLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ3pELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVsQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQVcsRUFBRSxFQUFXO1FBQ3ZELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxPQUFPO1FBQ1osTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLFNBQVM7UUFDZCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFaEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTSxTQUFTO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBSSxDQUFDLENBQUMsRUFBSSxDQUFDLElBQUcsYUFBSSxDQUFDLENBQUMsRUFBSSxDQUFDLElBQUcsYUFBSSxDQUFDLENBQUMsRUFBSSxDQUFDLEVBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sS0FBSztRQUNWLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxNQUFNO1FBQ1gsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLEtBQUs7UUFDVixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUE1RkQsMEJBNEZDOzs7Ozs7Ozs7OztBQ2hHRCxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDbkIsaURBQVE7SUFDUiw2Q0FBTTtBQUNSLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjs7Ozs7Ozs7Ozs7QUNIRCwyQ0FBNkM7QUFDN0MseUNBQXlDO0FBRXpDLHdEQUE2RTtBQUU3RSx5REFBNEY7QUFDNUYsbURBQWdGO0FBRWhGLHFEQUFrRjtBQUVsRixNQUFNLEtBQUssR0FBb0I7SUFDN0IsV0FBVyxFQUFFO1FBQ1gsaUJBQWlCLEVBQUUsSUFBSSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QyxTQUFTLEVBQUUsSUFBSSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixTQUFTLEVBQUUsSUFBSSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixVQUFVLEVBQUUsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pDO0lBQ0QsWUFBWSxFQUFFLENBQUM7SUFDZixXQUFXLEVBQUUsQ0FBQztJQUNkLGVBQWUsRUFBRSxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXBDLGFBQWEsRUFBRSxJQUFJLGlCQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkMsU0FBUyxFQUFFLHFCQUFTLENBQUMsUUFBUTtJQUU3QixtQkFBbUIsRUFBRSxDQUFDO0lBRXRCLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLDRCQUE0QixFQUFFLEVBQUU7SUFDaEMsYUFBYSxFQUFFLEVBQUU7SUFDakIsV0FBVyxFQUFFLEVBQUU7SUFDZixzQkFBc0IsRUFBRSxFQUFFO0NBQzNCLENBQUM7QUFFRixNQUFNLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkQsTUFBTSxZQUFZLEdBQUcsSUFBSSwrQ0FBc0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7QUFDOUUsTUFBTSxNQUFNLEdBQUcsSUFBSSxtQ0FBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUUzQyxTQUFTLEdBQUcsQ0FBQyxDQUFlLEVBQUUsRUFBRTtJQUM5QixNQUFNLFdBQVcsR0FBMEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFdkQsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLDZDQUFxQixDQUFDLFVBQVU7WUFDbkMsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ25DLEtBQUssQ0FBQztRQUVSLEtBQUssNkNBQXFCLENBQUMsZ0JBQWdCO1lBQ3pDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxLQUFLLENBQUM7UUFFUixLQUFLLDZDQUFxQixDQUFDLFNBQVM7WUFDbEMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM3RSxLQUFLLENBQUM7UUFFUixLQUFLLDZDQUFxQixDQUFDLFVBQVU7WUFDbkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JDLEtBQUssQ0FBQztRQUVSLEtBQUssNkNBQXFCLENBQUMsT0FBTztZQUNsQyxXQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEUsS0FBSyxDQUFDO1FBRVI7WUFDRSxzQ0FBc0M7WUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDO0FBQ0gsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQzlERiw0Q0FPMkI7QUFFM0IseUNBQXlDO0FBUXpDO0lBWUUsWUFBWSxZQUFnRDtRQVQzQyxhQUFRLEdBQTBDO1lBQ2pFLENBQUMsc0NBQXlCLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtZQUNsRSxDQUFDLDhCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ2xELENBQUMsK0JBQWtCLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDcEQsQ0FBQyxrQ0FBcUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzFELENBQUMsOEJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbEQsQ0FBQyw4QkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNuRCxDQUFDO1FBR0EsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxZQUFZLENBQUMsaUJBQWlCLENBQUM7SUFDMUQsQ0FBQztJQUVNLGFBQWE7UUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO1lBRXJDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSxjQUFjO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixLQUFLLEdBQUcsQ0FBQztJQUNoRCxDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQWU7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVqRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ3JELENBQUM7SUFDSCxDQUFDO0lBRUQsNEJBQTRCO0lBQ3BCLHNCQUFzQixDQUFDLEtBQWdDO1FBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLENBQUM7UUFFcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUNBQW1DLEVBQUUsQ0FBQztRQUMvRCxDQUFDO0lBQ0gsQ0FBQztJQUVPLGNBQWMsQ0FBQyxLQUF3QjtRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQztRQUVwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVDLENBQUM7SUFDSCxDQUFDO0lBRU8sZUFBZSxDQUFDLEtBQXlCO1FBQy9DLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFDO1FBRXBDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1DQUFtQyxFQUFFLENBQUM7UUFDL0QsQ0FBQztJQUNILENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxLQUE0QjtRQUNyRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFDO1FBRXBDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDckQsQ0FBQztJQUNILENBQUM7SUFFTyxjQUFjLENBQUMsS0FBd0I7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU8sY0FBYyxDQUFDLEtBQXdCO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLElBQUksRUFBRSxDQUFDO1FBRXJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDNUMsQ0FBQztJQUNILENBQUM7Q0FFRjtBQWhHRCx3REFnR0M7Ozs7Ozs7Ozs7O0FDckhELDJDQUE2QztBQUM3Qyx5Q0FBeUM7QUFLekM7SUFHRSxZQUFZLEtBQXNCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxVQUFVLENBQUMsTUFBbUI7UUFDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFeEUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFFBQVEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUNuQyxNQUFNLEVBQ0osNEJBQTRCLEVBQzVCLHNCQUFzQixFQUN0QixlQUFlLEVBQ2hCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVmLE1BQU0sMkJBQTJCLEdBQUcsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsTUFBTSxxQkFBcUIsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5Qyw4Q0FBOEM7UUFDOUMsMkZBQTJGO1FBQzNGLGdCQUFnQjtRQUNoQixNQUFNLFFBQVEsR0FBRyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUN4RSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTNELE1BQU0sTUFBTSxHQUFHLDJCQUEyQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU3RSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdkMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN4QyxDQUFDO0lBRU8sY0FBYyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLHFCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDbEMsQ0FBQztRQUVELG9CQUFvQjtRQUNwQixNQUFNLG9CQUFvQixHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFDeEIsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3JCLENBQUM7UUFFRixNQUFNLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUMsQ0FBQztDQUNGO0FBekRELDRDQXlEQyIsImZpbGUiOiJmaWxsV29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA2YjcwNTEzNzk3ODMzOTIxNzgyIiwiZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcjogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBnOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IGI6IG51bWJlcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgZmlsbFN0eWxlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpIHtcclxuICAgIHRoaXMuciA9IHI7XHJcbiAgICB0aGlzLmcgPSBnO1xyXG4gICAgdGhpcy5iID0gYjtcclxuXHJcbiAgICB0aGlzLmZpbGxTdHlsZSA9IGByZ2IoJHt0aGlzLnJ9LCAke3RoaXMuZ30sICR7dGhpcy5ifSlgO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tSGV4U3RyaW5nKGhleFN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZWRQYXJ0ID0gaGV4U3RyaW5nLnNsaWNlKDEsIDMpO1xyXG4gICAgY29uc3QgZ3JlZW5QYXJ0ID0gaGV4U3RyaW5nLnNsaWNlKDMsIDUpO1xyXG4gICAgY29uc3QgYmx1ZVBhcnQgPSBoZXhTdHJpbmcuc2xpY2UoNSwgNyk7XHJcblxyXG4gICAgY29uc3QgcmVkID0gcGFyc2VJbnQocmVkUGFydCwgMTYpO1xyXG4gICAgY29uc3QgZ3JlZW4gPSBwYXJzZUludChncmVlblBhcnQsIDE2KTtcclxuICAgIGNvbnN0IGJsdWUgPSBwYXJzZUludChibHVlUGFydCwgMTYpO1xyXG5cclxuICAgIHJldHVybiBuZXcgQ29sb3IocmVkLCBncmVlbiwgYmx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbnRlZ2VyVG9QYWRkZWRIZXgoaW50ZWdlcjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBoZXggPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KTtcclxuXHJcbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gYCAke2hleH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGhleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0hleFN0cmluZygpIHtcclxuICAgIGNvbnN0IHJlZFBhcnQgPSBDb2xvci5pbnRlZ2VyVG9QYWRkZWRIZXgodGhpcy5yKTtcclxuICAgIGNvbnN0IGdyZWVuUGFydCA9IENvbG9yLmludGVnZXJUb1BhZGRlZEhleCh0aGlzLmcpO1xyXG4gICAgY29uc3QgYmx1ZVBhcnQgPSBDb2xvci5pbnRlZ2VyVG9QYWRkZWRIZXgodGhpcy5iKTtcclxuXHJcbiAgICByZXR1cm4gYCMke3JlZFBhcnQgKyBibHVlUGFydCArIGdyZWVuUGFydH1gO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vQ29sb3IudHMiLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW1wb3J0IHsgRmlsbFdvcmtlclN0YXRlIH0gZnJvbSAnd29ya2Vycy9wb2x5Z29uLWZpbGwtd29ya2VyL0ZpbGxXb3JrZXJTdGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yTWFwUHJlcGFyZXIge1xyXG4gIHByaXZhdGUgc3RhdGU6IEZpbGxXb3JrZXJTdGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6IEZpbGxXb3JrZXJTdGF0ZSkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBlcmZvcm1Jbml0aWFsUHJlcGFyYXRpb24oKSB7XHJcbiAgICB0aGlzLnByZXBhcmVUZXh0dXJlVmVjdG9ycygpO1xyXG4gICAgdGhpcy5wcmVwYXJlVGV4dHVyZVZlY3RvcnNXaXRoTGlnaHRDb2xvcigpO1xyXG4gICAgdGhpcy5wcmVwYXJlTm9ybWFsVmVjdG9ycygpO1xyXG4gICAgdGhpcy5wcmVwYXJlQnVtcFZlY3RvcnMoKTtcclxuICAgIHRoaXMuYXBwbHlCdW1wVmVjdG9ycygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZXBhcmVUZXh0dXJlVmVjdG9ycygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgIHN0YXRlLnRleHR1cmVWZWN0b3JzID0gW107XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kVGV4dHVyZSA9IHN0YXRlLmFwcEZpbGxEYXRhLmJhY2tncm91bmRUZXh0dXJlO1xyXG5cclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc3RhdGUuY2FudmFzV2lkdGg7IHggKz0gMSkge1xyXG4gICAgICBjb25zdCBiYWNrZ3JvdW5kVGV4dHVyZVggPSB4ICUgYmFja2dyb3VuZFRleHR1cmUud2lkdGg7XHJcbiAgICAgIHN0YXRlLnRleHR1cmVWZWN0b3JzLnB1c2goW10pO1xyXG5cclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzdGF0ZS5jYW52YXNXaWR0aDsgeSArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZFRleHR1cmVZID0geSAlIGJhY2tncm91bmRUZXh0dXJlLmhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSAoYmFja2dyb3VuZFRleHR1cmVYICsgYmFja2dyb3VuZFRleHR1cmVZICogYmFja2dyb3VuZFRleHR1cmUud2lkdGgpICogNDtcclxuICAgICAgICBjb25zdCByID0gYmFja2dyb3VuZFRleHR1cmUuZGF0YVtpbmRleF07XHJcbiAgICAgICAgY29uc3QgZyA9IGJhY2tncm91bmRUZXh0dXJlLmRhdGFbaW5kZXggKyAxXTtcclxuICAgICAgICBjb25zdCBiID0gYmFja2dyb3VuZFRleHR1cmUuZGF0YVtpbmRleCArIDJdO1xyXG5cclxuICAgICAgICBzdGF0ZS50ZXh0dXJlVmVjdG9yc1t4XS5wdXNoKG5ldyBWZWN0b3IzKHIsIGcsIGIpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZXBhcmVOb3JtYWxWZWN0b3JzKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlO1xyXG4gICAgc3RhdGUubm9ybWFsVmVjdG9ycyA9IFtdO1xyXG4gICAgY29uc3Qgbm9ybWFsTWFwID0gc3RhdGUuYXBwRmlsbERhdGEubm9ybWFsTWFwO1xyXG5cclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc3RhdGUuY2FudmFzV2lkdGg7IHggKz0gMSkge1xyXG4gICAgICBjb25zdCBub3JtYWxNYXBYID0geCAlIG5vcm1hbE1hcC53aWR0aDtcclxuICAgICAgc3RhdGUubm9ybWFsVmVjdG9ycy5wdXNoKFtdKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc3RhdGUuY2FudmFzV2lkdGg7IHkgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbE1hcFkgPSB5ICUgbm9ybWFsTWFwLmhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSAobm9ybWFsTWFwWCArIG5vcm1hbE1hcFkgKiBub3JtYWxNYXAud2lkdGgpICogNDtcclxuICAgICAgICBjb25zdCByID0gbm9ybWFsTWFwLmRhdGFbaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGcgPSBub3JtYWxNYXAuZGF0YVtpbmRleCArIDFdO1xyXG4gICAgICAgIGNvbnN0IGIgPSBub3JtYWxNYXAuZGF0YVtpbmRleCArIDJdO1xyXG5cclxuICAgICAgICBjb25zdCBub3JtYWxWZWN0b3IgPSBWZWN0b3IzLmZyb21Ob3JtYWxNYXAociwgZywgYik7XHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAxIC8gbm9ybWFsVmVjdG9yLno7IC8vIFtOeCwgTnksIDFdXHJcbiAgICAgICAgc3RhdGUubm9ybWFsVmVjdG9yc1t4XS5wdXNoKG5vcm1hbFZlY3Rvci5tdWx0aXBseShzY2FsZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJlcGFyZUJ1bXBWZWN0b3JzKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlO1xyXG4gICAgc3RhdGUuYnVtcFZlY3RvcnMgPSBbXTtcclxuICAgIGNvbnN0IGhlaWdodE1hcCA9IHN0YXRlLmFwcEZpbGxEYXRhLmhlaWdodE1hcDtcclxuICAgIGNvbnN0IG1heEhlaWdodE1hcFggPSBoZWlnaHRNYXAud2lkdGggLSAxO1xyXG4gICAgY29uc3QgbWF4SGVpZ2h0TWFwWSA9IGhlaWdodE1hcC5oZWlnaHQgLSAxO1xyXG5cclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc3RhdGUuY2FudmFzV2lkdGg7IHggKz0gMSkge1xyXG4gICAgICBjb25zdCBoZWlnaHRNYXBYID0geCAlIGhlaWdodE1hcC53aWR0aDtcclxuICAgICAgc3RhdGUuYnVtcFZlY3RvcnMucHVzaChbXSk7XHJcblxyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHN0YXRlLmNhbnZhc1dpZHRoOyB5ICs9IDEpIHtcclxuICAgICAgICBjb25zdCBoZWlnaHRNYXBZID0geSAlIGhlaWdodE1hcC5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSAoaGVpZ2h0TWFwWCArIGhlaWdodE1hcFkgKiBoZWlnaHRNYXAud2lkdGgpICogNDtcclxuXHJcbiAgICAgICAgbGV0IGRoeCA9IDA7IC8vID0gSFt4ICsgMSwgeV0gLSBIW3gsIHldXHJcbiAgICAgICAgbGV0IGRoeSA9IDA7IC8vID0gSFt4LCB5KzFdIC0gSFt4LCB5XVxyXG5cclxuICAgICAgICBpZiAoaGVpZ2h0TWFwWCA8IG1heEhlaWdodE1hcFgpIHtcclxuICAgICAgICAgIGRoeCA9IGhlaWdodE1hcC5kYXRhW2luZGV4ICsgNF0gLSBoZWlnaHRNYXAuZGF0YVtpbmRleF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIEhbMCwgeV0gLSBIW3gsIHldXHJcbiAgICAgICAgICBkaHggPSBoZWlnaHRNYXAuZGF0YVtpbmRleCAtIGhlaWdodE1hcFggKiA0XSAtIGhlaWdodE1hcC5kYXRhW2luZGV4XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoZWlnaHRNYXBZIDwgbWF4SGVpZ2h0TWFwWSkge1xyXG4gICAgICAgICAgZGh5ID0gaGVpZ2h0TWFwLmRhdGFbaW5kZXggKyBoZWlnaHRNYXAud2lkdGggKiA0XSAtIGhlaWdodE1hcC5kYXRhW2luZGV4XTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSFt4LCAwXSAtIEhbeCwgeV1cclxuICAgICAgICAgIGRoeSA9IGhlaWdodE1hcC5kYXRhW2hlaWdodE1hcFggKiA0XSAtIGhlaWdodE1hcC5kYXRhW2luZGV4XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5vcm1hbFZlY3RvciA9IHN0YXRlLm5vcm1hbFZlY3RvcnNbeF1beV07XHJcbiAgICAgICAgY29uc3QgdCA9IG5ldyBWZWN0b3IzKDEsIDAsIC1ub3JtYWxWZWN0b3IueCk7XHJcbiAgICAgICAgY29uc3QgYiA9IG5ldyBWZWN0b3IzKDAsIDEsIC1ub3JtYWxWZWN0b3IueSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGQgPSBWZWN0b3IzLmFkZCh0Lm11bHRpcGx5KGRoeCksIGIubXVsdGlwbHkoZGh5KSk7XHJcbiAgICAgICAgc3RhdGUuYnVtcFZlY3RvcnNbeF0ucHVzaChkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFwcGx5QnVtcFZlY3RvcnMoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XHJcbiAgICBzdGF0ZS5kaXN0b3J0ZWROb3JtYWxWZWN0b3JzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzdGF0ZS5jYW52YXNXaWR0aDsgeCArPSAxKSB7XHJcbiAgICAgIHN0YXRlLmRpc3RvcnRlZE5vcm1hbFZlY3RvcnMucHVzaChbXSk7XHJcblxyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHN0YXRlLmNhbnZhc0hlaWdodDsgeSArPSAxKSB7XHJcbiAgICAgICAgc3RhdGUuZGlzdG9ydGVkTm9ybWFsVmVjdG9yc1t4XS5wdXNoKFxyXG4gICAgICAgICAgVmVjdG9yMy5hZGQoc3RhdGUubm9ybWFsVmVjdG9yc1t4XVt5XSwgc3RhdGUuYnVtcFZlY3RvcnNbeF1beV0pLm5vcm1hbGl6ZSgpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZXBhcmVUZXh0dXJlVmVjdG9yc1dpdGhMaWdodENvbG9yKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlO1xyXG4gICAgc3RhdGUudGV4dHVyZVZlY3RvcnNXaXRoTGlnaHRDb2xvciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc3RhdGUuY2FudmFzV2lkdGg7IHggKz0gMSkge1xyXG4gICAgICBzdGF0ZS50ZXh0dXJlVmVjdG9yc1dpdGhMaWdodENvbG9yLnB1c2goW10pO1xyXG5cclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzdGF0ZS5jYW52YXNIZWlnaHQ7IHkgKz0gMSkge1xyXG4gICAgICAgIHN0YXRlLnRleHR1cmVWZWN0b3JzV2l0aExpZ2h0Q29sb3JbeF0ucHVzaChcclxuICAgICAgICAgIFZlY3RvcjMubXVsdGlwbHlDb21wb25lbnRzKFxyXG4gICAgICAgICAgICBzdGF0ZS50ZXh0dXJlVmVjdG9yc1t4XVt5XSxcclxuICAgICAgICAgICAgc3RhdGUuYXBwRmlsbERhdGEubGlnaHRDb2xvclxyXG4gICAgICAgICAgKS5mbG9vcigpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy93b3JrZXJzL3BvbHlnb24tZmlsbC13b3JrZXIvVmVjdG9yTWFwUHJlcGFyZXIudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogSW1hZ2VEYXRhO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbWFnZURhdGE6IEltYWdlRGF0YSkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gaW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdOZXdCYWNrZ3JvdW5kVGV4dHVyZSc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3SGVpZ2h0TWFwRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IEltYWdlRGF0YTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3SGVpZ2h0TWFwRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlRGF0YTogSW1hZ2VEYXRhKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3SGVpZ2h0TWFwRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3SGVpZ2h0TWFwRXZlbnQudHMiLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0xpZ2h0Q29sb3JFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogVmVjdG9yMztcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3TGlnaHRDb2xvckV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2xvcjogVmVjdG9yMykge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gY29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3TGlnaHRDb2xvckV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0Q29sb3JFdmVudC50cyIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdjb21tb24vVmVjdG9yMyc7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3TGlnaHRQb3NpdGlvbkV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBWZWN0b3IzO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdMaWdodFBvc2l0aW9uRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpZ2h0UG9zaXRpb246IFZlY3RvcjMpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGxpZ2h0UG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3TGlnaHRQb3NpdGlvbkV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0UG9zaXRpb25FdmVudC50cyIsImltcG9ydCB7IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50JztcclxuaW1wb3J0IHsgTmV3SGVpZ2h0TWFwRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBFdmVudCc7XHJcbmltcG9ydCB7IE5ld0xpZ2h0Q29sb3JFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0Q29sb3JFdmVudCc7XHJcbmltcG9ydCB7IE5ld0xpZ2h0UG9zaXRpb25FdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0UG9zaXRpb25FdmVudCc7XHJcbmltcG9ydCB7IE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudCc7XHJcbmltcG9ydCB7IE5ld0xpZ2h0VHlwZUV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRUeXBlRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdOb3JtYWxNYXBFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld05vcm1hbE1hcEV2ZW50JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCxcclxuICBOZXdIZWlnaHRNYXBFdmVudCxcclxuICBOZXdMaWdodENvbG9yRXZlbnQsXHJcbiAgTmV3TGlnaHRQb3NpdGlvbkV2ZW50LFxyXG4gIE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudCxcclxuICBOZXdMaWdodFR5cGVFdmVudCxcclxuICBOZXdOb3JtYWxNYXBFdmVudFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9pbmRleC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IG51bWJlcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsaWdodFBvc2l0aW9uUmFkaXVzOiBudW1iZXIpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGxpZ2h0UG9zaXRpb25SYWRpdXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudC50cyIsImltcG9ydCB7IExpZ2h0VHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFR5cGUnO1xyXG5cclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0xpZ2h0VHlwZUV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBMaWdodFR5cGU7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0xpZ2h0VHlwZUV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsaWdodFR5cGU6IExpZ2h0VHlwZSkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gbGlnaHRUeXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld0xpZ2h0VHlwZUV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VHlwZUV2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld05vcm1hbE1hcEV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBJbWFnZURhdGE7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld05vcm1hbE1hcEV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbWFnZURhdGE6IEltYWdlRGF0YSkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gaW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld05vcm1hbE1hcEV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld05vcm1hbE1hcEV2ZW50LnRzIiwiZXhwb3J0IGVudW0gRmlsbFdvcmtlck1lc3NhZ2VUeXBlIHtcclxuICBDYW52YXNJbmZvLFxyXG5cclxuICBOZXdGaWxsRGF0YUV2ZW50LFxyXG5cclxuICBTdGFydEZpbGwsXHJcbiAgRmlsbFN0cmlwcyxcclxuICBFbmRGaWxsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcG9seWdvbi1maWxsZXIvRmlsbFdvcmtlck1lc3NhZ2VUeXBlLnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5cclxuY29uc3QgTUFYX0NPTE9SID0gMjU1O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjMge1xyXG4gIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgcHVibGljIHk6IG51bWJlcjtcclxuICBwdWJsaWMgejogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMueiA9IHo7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZyb21Db2xvcihjb2xvcjogQ29sb3IpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyhjb2xvci5yIC8gTUFYX0NPTE9SLCBjb2xvci5nIC8gTUFYX0NPTE9SLCBjb2xvci5iIC8gTUFYX0NPTE9SKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYWRkKHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYxLnggKyB2Mi54LCB2MS55ICsgdjIueSwgdjEueiArIHYyLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdWJ0cmFjdCh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh2MS54IC0gdjIueCwgdjEueSAtIHYyLnksIHYxLnogLSB2Mi56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3Jvc3NQcm9kdWN0KHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKFxyXG4gICAgICB2MS55ICogdjIueiAtIHYxLnogKiB2Mi55LFxyXG4gICAgICB2MS56ICogdjIueCAtIHYxLnggKiB2Mi56LFxyXG4gICAgICB2MS54ICogdjIueSAtIHYxLnkgKiB2Mi54XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkb3RQcm9kdWN0KHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdjEueCAqIHYyLnggKyB2MS55ICogdjIueSArIHYxLnogKiB2Mi56O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjb3NpbmVBbmdsZSh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZG90UHJvZHVjdCA9IFZlY3RvcjMuZG90UHJvZHVjdCh2MSwgdjIpO1xyXG4gICAgY29uc3QgbGVuZ3RoMSA9IHYxLmdldExlbmd0aCgpO1xyXG4gICAgY29uc3QgbGVuZ3RoMiA9IHYyLmdldExlbmd0aCgpO1xyXG5cclxuICAgIHJldHVybiBkb3RQcm9kdWN0IC8gKGxlbmd0aDEgKiBsZW5ndGgyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbU5vcm1hbE1hcChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogVmVjdG9yMyB7XHJcbiAgICBjb25zdCB4ID0gciAvIDI1NSAqIDIgLSAxO1xyXG4gICAgY29uc3QgeSA9IGcgLyAyNTUgKiAyIC0gMTtcclxuICAgIGNvbnN0IHogPSBiIC8gMjU1O1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbXVsdGlwbHlDb21wb25lbnRzKHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMykge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYxLnggKiB2Mi54LCB2MS55ICogdjIueSwgdjEueiAqIHYyLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQ29sb3IoKTogQ29sb3Ige1xyXG4gICAgY29uc3QgciA9IE1hdGguZmxvb3IodGhpcy54ICogTUFYX0NPTE9SKTtcclxuICAgIGNvbnN0IGcgPSBNYXRoLmZsb29yKHRoaXMueSAqIE1BWF9DT0xPUik7XHJcbiAgICBjb25zdCBiID0gTWF0aC5mbG9vcih0aGlzLnogKiBNQVhfQ09MT1IpO1xyXG5cclxuICAgIHJldHVybiBuZXcgQ29sb3IociwgZywgYik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbm9ybWFsaXplKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy54IC8gbGVuZ3RoLCB0aGlzLnkgLyBsZW5ndGgsIHRoaXMueiAvIGxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbXVsdGlwbHkoc2NhbGU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCAqIHNjYWxlLCB0aGlzLnkgKiBzY2FsZSwgdGhpcy56ICogc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlbmd0aCgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICoqIDIgKyB0aGlzLnkgKiogMiArIHRoaXMueiAqKiAyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLngsIHRoaXMueSwgdGhpcy56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnZlcnQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoLXRoaXMueCwgLXRoaXMueSwgLXRoaXMueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmxvb3IoKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcih0aGlzLngpO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IodGhpcy55KTtcclxuICAgIGNvbnN0IHogPSBNYXRoLmZsb29yKHRoaXMueik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vVmVjdG9yMy50cyIsImV4cG9ydCBlbnVtIExpZ2h0VHlwZSB7XHJcbiAgQ29uc3RhbnQsXHJcbiAgTW92aW5nXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0xpZ2h0VHlwZS50cyIsImltcG9ydCB7IExpZ2h0VHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFR5cGUnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW1wb3J0IHsgRmlsbFdvcmtlck1lc3NhZ2VUeXBlIH0gZnJvbSAncG9seWdvbi1maWxsZXIvRmlsbFdvcmtlck1lc3NhZ2VUeXBlJztcclxuXHJcbmltcG9ydCB7IEZpbGxXb3JrZXJFdmVudEhhbmRsZXIgfSBmcm9tICd3b3JrZXJzL3BvbHlnb24tZmlsbC13b3JrZXIvRmlsbFdvcmtlckV2ZW50SGFuZGxlcic7XHJcbmltcG9ydCB7IEZpbGxXb3JrZXJGaWxsZXIgfSBmcm9tICd3b3JrZXJzL3BvbHlnb24tZmlsbC13b3JrZXIvRmlsbFdvcmtlckZpbGxlcic7XHJcbmltcG9ydCB7IEZpbGxXb3JrZXJTdGF0ZSB9IGZyb20gJ3dvcmtlcnMvcG9seWdvbi1maWxsLXdvcmtlci9GaWxsV29ya2VyU3RhdGUnO1xyXG5pbXBvcnQgeyBWZWN0b3JNYXBQcmVwYXJlciB9IGZyb20gJ3dvcmtlcnMvcG9seWdvbi1maWxsLXdvcmtlci9WZWN0b3JNYXBQcmVwYXJlcic7XHJcblxyXG5jb25zdCBzdGF0ZTogRmlsbFdvcmtlclN0YXRlID0ge1xyXG4gIGFwcEZpbGxEYXRhOiB7XHJcbiAgICBiYWNrZ3JvdW5kVGV4dHVyZTogbmV3IEltYWdlRGF0YSgxLCAxKSxcclxuICAgIG5vcm1hbE1hcDogbmV3IEltYWdlRGF0YSgxLCAxKSxcclxuICAgIGhlaWdodE1hcDogbmV3IEltYWdlRGF0YSgxLCAxKSxcclxuICAgIGxpZ2h0Q29sb3I6IG5ldyBWZWN0b3IzKDAsIDAsIDApXHJcbiAgfSxcclxuICBjYW52YXNIZWlnaHQ6IDAsXHJcbiAgY2FudmFzV2lkdGg6IDAsXHJcbiAgY2FudmFzSW1hZ2VEYXRhOiBuZXcgSW1hZ2VEYXRhKDEsIDEpLFxyXG5cclxuICBsaWdodFBvc2l0aW9uOiBuZXcgVmVjdG9yMygwLCAwLCAxKSxcclxuICBsaWdodFR5cGU6IExpZ2h0VHlwZS5Db25zdGFudCxcclxuXHJcbiAgaW5pdGlhbGl6YXRpb25WYWx1ZTogMCxcclxuXHJcbiAgdGV4dHVyZVZlY3RvcnM6IFtdLFxyXG4gIHRleHR1cmVWZWN0b3JzV2l0aExpZ2h0Q29sb3I6IFtdLFxyXG4gIG5vcm1hbFZlY3RvcnM6IFtdLFxyXG4gIGJ1bXBWZWN0b3JzOiBbXSxcclxuICBkaXN0b3J0ZWROb3JtYWxWZWN0b3JzOiBbXVxyXG59O1xyXG5cclxuY29uc3QgdmVjdG9yTWFwUHJlcGFyZXIgPSBuZXcgVmVjdG9yTWFwUHJlcGFyZXIoc3RhdGUpO1xyXG5jb25zdCBldmVudEhhbmRsZXIgPSBuZXcgRmlsbFdvcmtlckV2ZW50SGFuZGxlcih7IHN0YXRlLCB2ZWN0b3JNYXBQcmVwYXJlciB9KTtcclxuY29uc3QgZmlsbGVyID0gbmV3IEZpbGxXb3JrZXJGaWxsZXIoc3RhdGUpO1xyXG5cclxub25tZXNzYWdlID0gKGU6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VUeXBlOiBGaWxsV29ya2VyTWVzc2FnZVR5cGUgPSBlLmRhdGEudHlwZTtcclxuXHJcbiAgc3dpdGNoIChtZXNzYWdlVHlwZSkge1xyXG4gICAgY2FzZSBGaWxsV29ya2VyTWVzc2FnZVR5cGUuQ2FudmFzSW5mbzpcclxuICAgICAgc3RhdGUuY2FudmFzV2lkdGggPSBlLmRhdGEud2lkdGg7XHJcbiAgICAgIHN0YXRlLmNhbnZhc0hlaWdodCA9IGUuZGF0YS5oZWlnaHQ7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgRmlsbFdvcmtlck1lc3NhZ2VUeXBlLk5ld0ZpbGxEYXRhRXZlbnQ6XHJcbiAgICAgIGV2ZW50SGFuZGxlci5oYW5kbGVFdmVudChlLmRhdGEuZXZlbnQpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5TdGFydEZpbGw6XHJcbiAgICAgIHN0YXRlLmNhbnZhc0ltYWdlRGF0YSA9IG5ldyBJbWFnZURhdGEoc3RhdGUuY2FudmFzV2lkdGgsIHN0YXRlLmNhbnZhc0hlaWdodCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgRmlsbFdvcmtlck1lc3NhZ2VUeXBlLkZpbGxTdHJpcHM6XHJcbiAgICAgIGZpbGxlci5maWxsU3RyaXBzKGUuZGF0YS5maWxsU3RyaXBzKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBGaWxsV29ya2VyTWVzc2FnZVR5cGUuRW5kRmlsbDpcclxuICAgIHBvc3RNZXNzYWdlKHN0YXRlLmNhbnZhc0ltYWdlRGF0YSwgW3N0YXRlLmNhbnZhc0ltYWdlRGF0YS5kYXRhLmJ1ZmZlcl0pO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdVbmtub3duIHdvcmtlciBtZXNzYWdlIHR5cGUnLCBtZXNzYWdlVHlwZSk7XHJcbiAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy93b3JrZXJzL1BvbHlnb25GaWxsV29ya2VyLnRzIiwiaW1wb3J0IHsgRmlsbFdvcmtlclN0YXRlIH0gZnJvbSAnd29ya2Vycy9wb2x5Z29uLWZpbGwtd29ya2VyL0ZpbGxXb3JrZXJTdGF0ZSc7XHJcbmltcG9ydCB7IFZlY3Rvck1hcFByZXBhcmVyIH0gZnJvbSAnd29ya2Vycy9wb2x5Z29uLWZpbGwtd29ya2VyL1ZlY3Rvck1hcFByZXBhcmVyJztcclxuXHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuaW1wb3J0IHtcclxuICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEV2ZW50LFxyXG4gIE5ld0xpZ2h0Q29sb3JFdmVudCxcclxuICBOZXdMaWdodFBvc2l0aW9uRXZlbnQsXHJcbiAgTmV3TGlnaHRUeXBlRXZlbnQsXHJcbiAgTmV3Tm9ybWFsTWFwRXZlbnRcclxufSBmcm9tICdldmVudHMvaW5wdXQtZGF0YSc7XHJcblxyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW50ZXJmYWNlIEZpbGxXb3JrZXJFdmVudEhhbmRsZXJEZXBlbmRlbmNpZXMge1xyXG4gIHN0YXRlOiBGaWxsV29ya2VyU3RhdGU7XHJcbiAgdmVjdG9yTWFwUHJlcGFyZXI6IFZlY3Rvck1hcFByZXBhcmVyO1xyXG59XHJcbnR5cGUgRXZlbnRIYW5kbGVyID0gKGV2ZW50OiBBcHBFdmVudCkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxsV29ya2VyRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YXRlOiBGaWxsV29ya2VyU3RhdGU7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB2ZWN0b3JNYXBQcmVwYXJlcjogVmVjdG9yTWFwUHJlcGFyZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVyczogeyBbZXZlbnRUeXBlOiBzdHJpbmddOiBFdmVudEhhbmRsZXIgfSA9IHtcclxuICAgIFtOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LmV2ZW50VHlwZV06IHRoaXMub25OZXdCYWNrZ3JvdW5kVGV4dHVyZSxcclxuICAgIFtOZXdIZWlnaHRNYXBFdmVudC5ldmVudFR5cGVdOiB0aGlzLm9uTmV3SGVpZ2h0TWFwLFxyXG4gICAgW05ld0xpZ2h0Q29sb3JFdmVudC5ldmVudFR5cGVdOiB0aGlzLm9uTmV3TGlnaHRDb2xvcixcclxuICAgIFtOZXdMaWdodFBvc2l0aW9uRXZlbnQuZXZlbnRUeXBlXTogdGhpcy5vbk5ld0xpZ2h0UG9zaXRpb24sXHJcbiAgICBbTmV3TGlnaHRUeXBlRXZlbnQuZXZlbnRUeXBlXTogdGhpcy5vbk5ld0xpZ2h0VHlwZSxcclxuICAgIFtOZXdOb3JtYWxNYXBFdmVudC5ldmVudFR5cGVdOiB0aGlzLm9uTmV3Tm9ybWFsTWFwXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBGaWxsV29ya2VyRXZlbnRIYW5kbGVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gZGVwZW5kZW5jaWVzLnN0YXRlO1xyXG4gICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlciA9IGRlcGVuZGVuY2llcy52ZWN0b3JNYXBQcmVwYXJlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5Jbml0aWFsaXplKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbGl6YXRpb25WYWx1ZSA9PT0gNjMpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5pbml0aWFsaXphdGlvblZhbHVlID0gMTI3O1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc0luaXRpYWxpemVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaW5pdGlhbGl6YXRpb25WYWx1ZSA9PT0gMTI3O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZUV2ZW50KGV2ZW50OiBBcHBFdmVudCkge1xyXG4gICAgdGhpcy5oYW5kbGVyc1tldmVudC5ldmVudFR5cGVdLmNhbGwodGhpcywgZXZlbnQpO1xyXG5cclxuICAgIGlmICh0aGlzLmNhbkluaXRpYWxpemUoKSkge1xyXG4gICAgICB0aGlzLnZlY3Rvck1hcFByZXBhcmVyLnBlcmZvcm1Jbml0aWFsUHJlcGFyYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlIG5vLWJpdHdpc2VcclxuICBwcml2YXRlIG9uTmV3QmFja2dyb3VuZFRleHR1cmUoZXZlbnQ6IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQpIHtcclxuICAgIHRoaXMuc3RhdGUuYXBwRmlsbERhdGEuYmFja2dyb3VuZFRleHR1cmUgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5zdGF0ZS5pbml0aWFsaXphdGlvblZhbHVlIHw9IDE7XHJcblxyXG4gICAgaWYgKHRoaXMuaGFzSW5pdGlhbGl6ZWQoKSkge1xyXG4gICAgICB0aGlzLnZlY3Rvck1hcFByZXBhcmVyLnByZXBhcmVUZXh0dXJlVmVjdG9ycygpO1xyXG4gICAgICB0aGlzLnZlY3Rvck1hcFByZXBhcmVyLnByZXBhcmVUZXh0dXJlVmVjdG9yc1dpdGhMaWdodENvbG9yKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3SGVpZ2h0TWFwKGV2ZW50OiBOZXdIZWlnaHRNYXBFdmVudCkge1xyXG4gICAgdGhpcy5zdGF0ZS5hcHBGaWxsRGF0YS5oZWlnaHRNYXAgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5zdGF0ZS5pbml0aWFsaXphdGlvblZhbHVlIHw9IDI7XHJcblxyXG4gICAgaWYgKHRoaXMuaGFzSW5pdGlhbGl6ZWQoKSkge1xyXG4gICAgICB0aGlzLnZlY3Rvck1hcFByZXBhcmVyLnByZXBhcmVCdW1wVmVjdG9ycygpO1xyXG4gICAgICB0aGlzLnZlY3Rvck1hcFByZXBhcmVyLmFwcGx5QnVtcFZlY3RvcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25OZXdMaWdodENvbG9yKGV2ZW50OiBOZXdMaWdodENvbG9yRXZlbnQpIHtcclxuICAgIGNvbnN0IHsgeCwgeSwgeiB9ID0gZXZlbnQucGF5bG9hZDtcclxuICAgIHRoaXMuc3RhdGUuYXBwRmlsbERhdGEubGlnaHRDb2xvciA9IG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG4gICAgdGhpcy5zdGF0ZS5pbml0aWFsaXphdGlvblZhbHVlIHw9IDQ7XHJcblxyXG4gICAgaWYgKHRoaXMuaGFzSW5pdGlhbGl6ZWQoKSkge1xyXG4gICAgICB0aGlzLnZlY3Rvck1hcFByZXBhcmVyLnByZXBhcmVUZXh0dXJlVmVjdG9yc1dpdGhMaWdodENvbG9yKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3TGlnaHRQb3NpdGlvbihldmVudDogTmV3TGlnaHRQb3NpdGlvbkV2ZW50KSB7XHJcbiAgICBjb25zdCB7IHgsIHksIHogfSA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgICB0aGlzLnN0YXRlLmxpZ2h0UG9zaXRpb24gPSBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuICAgIHRoaXMuc3RhdGUuaW5pdGlhbGl6YXRpb25WYWx1ZSB8PSA4O1xyXG5cclxuICAgIGlmICh0aGlzLmNhbkluaXRpYWxpemUoKSkge1xyXG4gICAgICB0aGlzLnZlY3Rvck1hcFByZXBhcmVyLnBlcmZvcm1Jbml0aWFsUHJlcGFyYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25OZXdMaWdodFR5cGUoZXZlbnQ6IE5ld0xpZ2h0VHlwZUV2ZW50KSB7XHJcbiAgICB0aGlzLnN0YXRlLmxpZ2h0VHlwZSA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgICB0aGlzLnN0YXRlLmluaXRpYWxpemF0aW9uVmFsdWUgfD0gMTY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3Tm9ybWFsTWFwKGV2ZW50OiBOZXdOb3JtYWxNYXBFdmVudCkge1xyXG4gICAgdGhpcy5zdGF0ZS5hcHBGaWxsRGF0YS5ub3JtYWxNYXAgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5zdGF0ZS5pbml0aWFsaXphdGlvblZhbHVlIHw9IDMyO1xyXG5cclxuICAgIGlmICh0aGlzLmhhc0luaXRpYWxpemVkKCkpIHtcclxuICAgICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlci5wcmVwYXJlTm9ybWFsVmVjdG9ycygpO1xyXG4gICAgICB0aGlzLnZlY3Rvck1hcFByZXBhcmVyLnByZXBhcmVCdW1wVmVjdG9ycygpO1xyXG4gICAgICB0aGlzLnZlY3Rvck1hcFByZXBhcmVyLmFwcGx5QnVtcFZlY3RvcnMoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gdHNsaW50OmVuYWJsZSBuby1iaXR3aXNlXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvd29ya2Vycy9wb2x5Z29uLWZpbGwtd29ya2VyL0ZpbGxXb3JrZXJFdmVudEhhbmRsZXIudHMiLCJpbXBvcnQgeyBMaWdodFR5cGUgfSBmcm9tICdjb21tb24vTGlnaHRUeXBlJztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuXHJcbmltcG9ydCB7IEZpbGxTdHJpcCB9IGZyb20gJ3BvbHlnb24tZmlsbGVyL0ZpbGxTdHJpcCc7XHJcbmltcG9ydCB7IEZpbGxXb3JrZXJTdGF0ZSB9IGZyb20gJ3dvcmtlcnMvcG9seWdvbi1maWxsLXdvcmtlci9GaWxsV29ya2VyU3RhdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGxXb3JrZXJGaWxsZXIge1xyXG4gIHByaXZhdGUgc3RhdGU6IEZpbGxXb3JrZXJTdGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6IEZpbGxXb3JrZXJTdGF0ZSkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbGxTdHJpcHMoc3RyaXBzOiBGaWxsU3RyaXBbXSkge1xyXG4gICAgc3RyaXBzLmZvckVhY2goc3RyaXAgPT4ge1xyXG4gICAgICBjb25zdCBmcm9tWCA9IE1hdGgubWF4KE1hdGguZmxvb3Ioc3RyaXAuZnJvbVgpLCAwKTtcclxuICAgICAgY29uc3QgdG9YID0gTWF0aC5taW4oTWF0aC5mbG9vcihzdHJpcC50b1gpLCB0aGlzLnN0YXRlLmNhbnZhc1dpZHRoIC0gMSk7XHJcblxyXG4gICAgICBmb3IgKGxldCB4ID0gZnJvbVg7IHggPD0gdG9YOyB4ICs9IDEpIHtcclxuICAgICAgICB0aGlzLnB1dFBpeGVsKHgsIHN0cmlwLnkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHV0UGl4ZWwoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGV4dHVyZVZlY3RvcnNXaXRoTGlnaHRDb2xvcixcclxuICAgICAgZGlzdG9ydGVkTm9ybWFsVmVjdG9ycyxcclxuICAgICAgY2FudmFzSW1hZ2VEYXRhXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCB0ZXh0dXJlVmVjdG9yV2l0aExpZ2h0Q29sb3IgPSB0ZXh0dXJlVmVjdG9yc1dpdGhMaWdodENvbG9yW3hdW3ldO1xyXG4gICAgY29uc3QgZGlzdG9ydGVkTm9ybWFsVmVjdG9yID0gZGlzdG9ydGVkTm9ybWFsVmVjdG9yc1t4XVt5XTtcclxuICAgIGNvbnN0IGxpZ2h0VmVyc29yID0gdGhpcy5nZXRMaWdodFZlcnNvcih4LCB5KTtcclxuXHJcbiAgICAvLyBjb3MgdGhldGEgPSB2MSAqIHYyIC8gKG5vcm0odjEpICogbm9ybSh2MikpXHJcbiAgICAvLyBTaW5jZSBsaWdodERpcmVjdGlvblZlcnNvciBhbmQgZGlzdG9ydGVkTm9ybWFsVmVjdG9yIGFyZSB1bml0IHZlY3RvcnMsIGNvcyB0aGV0YSBpcyBqdXN0XHJcbiAgICAvLyBhIGRvdCBwcm9kdWN0XHJcbiAgICBjb25zdCBjb3NUaGV0YSA9IFZlY3RvcjMuZG90UHJvZHVjdChsaWdodFZlcnNvciwgZGlzdG9ydGVkTm9ybWFsVmVjdG9yKTtcclxuICAgIGNvbnN0IGNsYW1wZWRDb3NUaGV0YSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGNvc1RoZXRhKSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gdGV4dHVyZVZlY3RvcldpdGhMaWdodENvbG9yLm11bHRpcGx5KGNsYW1wZWRDb3NUaGV0YSkuZmxvb3IoKTtcclxuXHJcbiAgICBjb25zdCBpbmRleCA9ICh4ICsgeSAqIGNhbnZhc0ltYWdlRGF0YS53aWR0aCkgKiA0O1xyXG4gICAgY2FudmFzSW1hZ2VEYXRhLmRhdGFbaW5kZXhdID0gcmVzdWx0Lng7XHJcbiAgICBjYW52YXNJbWFnZURhdGEuZGF0YVtpbmRleCArIDFdID0gcmVzdWx0Lnk7XHJcbiAgICBjYW52YXNJbWFnZURhdGEuZGF0YVtpbmRleCArIDJdID0gcmVzdWx0Lno7XHJcbiAgICBjYW52YXNJbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID0gMjU1O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRMaWdodFZlcnNvcih4OiBudW1iZXIsIHk6IG51bWJlcik6IFZlY3RvcjMge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubGlnaHRUeXBlID09PSBMaWdodFR5cGUuQ29uc3RhbnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubGlnaHRQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNb3ZpbmcgbGlnaHQgdHlwZVxyXG4gICAgY29uc3QgbGlnaHREaXJlY3Rpb25WZWN0b3IgPSBWZWN0b3IzLnN1YnRyYWN0KFxyXG4gICAgICB0aGlzLnN0YXRlLmxpZ2h0UG9zaXRpb24sXHJcbiAgICAgIG5ldyBWZWN0b3IzKHgsIHksIDApXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBsaWdodERpcmVjdGlvblZlY3Rvci5ub3JtYWxpemUoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvd29ya2Vycy9wb2x5Z29uLWZpbGwtd29ya2VyL0ZpbGxXb3JrZXJGaWxsZXIudHMiXSwic291cmNlUm9vdCI6IiJ9