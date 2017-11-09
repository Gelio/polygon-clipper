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
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
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
            [input_data_1.NewNormalMapEvent.eventType]: this.onNewNormalMap,
            [input_data_1.NewHeightMapIntensityEvent.eventType]: this.onNewHeightMapIntensity
        };
        this.state = dependencies.state;
        this.vectorMapPreparer = dependencies.vectorMapPreparer;
    }
    canInitialize() {
        if (this.state.initializationValue === 127) {
            this.state.initializationValue = 255;
            return true;
        }
        return false;
    }
    hasInitialized() {
        return this.state.initializationValue === 255;
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
    onNewHeightMapIntensity(event) {
        this.state.appFillData.heightMapIntensity = event.payload;
        this.state.initializationValue |= 64;
        if (this.hasInitialized()) {
            this.vectorMapPreparer.prepareBumpVectors();
            this.vectorMapPreparer.applyBumpVectors();
        }
    }
}
exports.FillWorkerEventHandler = FillWorkerEventHandler;


/***/ }),

/***/ 101:
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


/***/ }),

/***/ 102:
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
                dhx *= state.appFillData.heightMapIntensity;
                if (heightMapY < maxHeightMapY) {
                    dhy = heightMap.data[index + heightMap.width * 4] - heightMap.data[index];
                }
                else {
                    // H[x, 0] - H[x, y]
                    dhy = heightMap.data[heightMapX * 4] - heightMap.data[index];
                }
                dhy *= state.appFillData.heightMapIntensity;
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
class NewHeightMapIntensityEvent {
    constructor(intensity) {
        this.eventType = NewHeightMapIntensityEvent.eventType;
        this.handled = false;
        this.payload = intensity;
    }
    static get eventType() {
        return NewHeightMapIntensityEvent.name;
    }
}
exports.NewHeightMapIntensityEvent = NewHeightMapIntensityEvent;


/***/ }),

/***/ 19:
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NewBackgroundTextureEvent_1 = __webpack_require__(16);
exports.NewBackgroundTextureEvent = NewBackgroundTextureEvent_1.NewBackgroundTextureEvent;
const NewHeightMapEvent_1 = __webpack_require__(17);
exports.NewHeightMapEvent = NewHeightMapEvent_1.NewHeightMapEvent;
const NewHeightMapIntensityEvent_1 = __webpack_require__(18);
exports.NewHeightMapIntensityEvent = NewHeightMapIntensityEvent_1.NewHeightMapIntensityEvent;
const NewLightColorEvent_1 = __webpack_require__(19);
exports.NewLightColorEvent = NewLightColorEvent_1.NewLightColorEvent;
const NewLightPositionEvent_1 = __webpack_require__(20);
exports.NewLightPositionEvent = NewLightPositionEvent_1.NewLightPositionEvent;
const NewLightPositionRadiusEvent_1 = __webpack_require__(21);
exports.NewLightPositionRadiusEvent = NewLightPositionRadiusEvent_1.NewLightPositionRadiusEvent;
const NewLightTypeEvent_1 = __webpack_require__(22);
exports.NewLightTypeEvent = NewLightTypeEvent_1.NewLightTypeEvent;
const NewNormalMapEvent_1 = __webpack_require__(23);
exports.NewNormalMapEvent = NewNormalMapEvent_1.NewNormalMapEvent;


/***/ }),

/***/ 20:
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

/***/ 21:
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

/***/ 22:
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

/***/ 23:
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

/***/ 24:
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

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LightType_1 = __webpack_require__(9);
const Vector3_1 = __webpack_require__(7);
const FillWorkerMessageType_1 = __webpack_require__(24);
const FillWorkerEventHandler_1 = __webpack_require__(100);
const FillWorkerFiller_1 = __webpack_require__(101);
const VectorMapPreparer_1 = __webpack_require__(102);
const state = {
    appFillData: {
        backgroundTexture: new ImageData(1, 1),
        normalMap: new ImageData(1, 1),
        heightMap: new ImageData(1, 1),
        heightMapIntensity: 1,
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTdkN2U4YjMwNjU5OTlmZDQ2ZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Db2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ya2Vycy9wb2x5Z29uLWZpbGwtd29ya2VyL0ZpbGxXb3JrZXJFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmtlcnMvcG9seWdvbi1maWxsLXdvcmtlci9GaWxsV29ya2VyRmlsbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JrZXJzL3BvbHlnb24tZmlsbC13b3JrZXIvVmVjdG9yTWFwUHJlcGFyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0hlaWdodE1hcEV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRDb2xvckV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRQb3NpdGlvbkV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VHlwZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWdvbi1maWxsZXIvRmlsbFdvcmtlck1lc3NhZ2VUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vVmVjdG9yMy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0xpZ2h0VHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ya2Vycy9Qb2x5Z29uRmlsbFdvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0RBO0lBTUUsWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDekMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVgsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDMUQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBaUI7UUFDM0MsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFD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QztJQUM5RCxDQUFDO0FBQ0gsQ0FBQyxDQUFDIiwiZmlsZSI6ImZpbGxXb3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5OSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTdkN2U4YjMwNjU5OTlmZDQ2ZWIiLCJleHBvcnQgY2xhc3MgQ29sb3Ige1xyXG4gIHB1YmxpYyByZWFkb25seSByOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IGc6IG51bWJlcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgYjogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBmaWxsU3R5bGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcikge1xyXG4gICAgdGhpcy5yID0gcjtcclxuICAgIHRoaXMuZyA9IGc7XHJcbiAgICB0aGlzLmIgPSBiO1xyXG5cclxuICAgIHRoaXMuZmlsbFN0eWxlID0gYHJnYigke3RoaXMucn0sICR7dGhpcy5nfSwgJHt0aGlzLmJ9KWA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZyb21IZXhTdHJpbmcoaGV4U3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlZFBhcnQgPSBoZXhTdHJpbmcuc2xpY2UoMSwgMyk7XHJcbiAgICBjb25zdCBncmVlblBhcnQgPSBoZXhTdHJpbmcuc2xpY2UoMywgNSk7XHJcbiAgICBjb25zdCBibHVlUGFydCA9IGhleFN0cmluZy5zbGljZSg1LCA3KTtcclxuXHJcbiAgICBjb25zdCByZWQgPSBwYXJzZUludChyZWRQYXJ0LCAxNik7XHJcbiAgICBjb25zdCBncmVlbiA9IHBhcnNlSW50KGdyZWVuUGFydCwgMTYpO1xyXG4gICAgY29uc3QgYmx1ZSA9IHBhcnNlSW50KGJsdWVQYXJ0LCAxNik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDb2xvcihyZWQsIGdyZWVuLCBibHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGludGVnZXJUb1BhZGRlZEhleChpbnRlZ2VyOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGhleCA9IGludGVnZXIudG9TdHJpbmcoMTYpO1xyXG5cclxuICAgIGlmIChoZXgubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHJldHVybiBgICR7aGV4fWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvSGV4U3RyaW5nKCkge1xyXG4gICAgY29uc3QgcmVkUGFydCA9IENvbG9yLmludGVnZXJUb1BhZGRlZEhleCh0aGlzLnIpO1xyXG4gICAgY29uc3QgZ3JlZW5QYXJ0ID0gQ29sb3IuaW50ZWdlclRvUGFkZGVkSGV4KHRoaXMuZyk7XHJcbiAgICBjb25zdCBibHVlUGFydCA9IENvbG9yLmludGVnZXJUb1BhZGRlZEhleCh0aGlzLmIpO1xyXG5cclxuICAgIHJldHVybiBgIyR7cmVkUGFydCArIGJsdWVQYXJ0ICsgZ3JlZW5QYXJ0fWA7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9Db2xvci50cyIsImltcG9ydCB7IEZpbGxXb3JrZXJTdGF0ZSB9IGZyb20gJ3dvcmtlcnMvcG9seWdvbi1maWxsLXdvcmtlci9GaWxsV29ya2VyU3RhdGUnO1xyXG5pbXBvcnQgeyBWZWN0b3JNYXBQcmVwYXJlciB9IGZyb20gJ3dvcmtlcnMvcG9seWdvbi1maWxsLXdvcmtlci9WZWN0b3JNYXBQcmVwYXJlcic7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7XHJcbiAgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCxcclxuICBOZXdIZWlnaHRNYXBFdmVudCxcclxuICBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudCxcclxuICBOZXdMaWdodENvbG9yRXZlbnQsXHJcbiAgTmV3TGlnaHRQb3NpdGlvbkV2ZW50LFxyXG4gIE5ld0xpZ2h0VHlwZUV2ZW50LFxyXG4gIE5ld05vcm1hbE1hcEV2ZW50XHJcbn0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5cclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuXHJcbmludGVyZmFjZSBGaWxsV29ya2VyRXZlbnRIYW5kbGVyRGVwZW5kZW5jaWVzIHtcclxuICBzdGF0ZTogRmlsbFdvcmtlclN0YXRlO1xyXG4gIHZlY3Rvck1hcFByZXBhcmVyOiBWZWN0b3JNYXBQcmVwYXJlcjtcclxufVxyXG50eXBlIEV2ZW50SGFuZGxlciA9IChldmVudDogQXBwRXZlbnQpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsbFdvcmtlckV2ZW50SGFuZGxlciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGF0ZTogRmlsbFdvcmtlclN0YXRlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgdmVjdG9yTWFwUHJlcGFyZXI6IFZlY3Rvck1hcFByZXBhcmVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlcnM6IHsgW2V2ZW50VHlwZTogc3RyaW5nXTogRXZlbnRIYW5kbGVyIH0gPSB7XHJcbiAgICBbTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudC5ldmVudFR5cGVdOiB0aGlzLm9uTmV3QmFja2dyb3VuZFRleHR1cmUsXHJcbiAgICBbTmV3SGVpZ2h0TWFwRXZlbnQuZXZlbnRUeXBlXTogdGhpcy5vbk5ld0hlaWdodE1hcCxcclxuICAgIFtOZXdMaWdodENvbG9yRXZlbnQuZXZlbnRUeXBlXTogdGhpcy5vbk5ld0xpZ2h0Q29sb3IsXHJcbiAgICBbTmV3TGlnaHRQb3NpdGlvbkV2ZW50LmV2ZW50VHlwZV06IHRoaXMub25OZXdMaWdodFBvc2l0aW9uLFxyXG4gICAgW05ld0xpZ2h0VHlwZUV2ZW50LmV2ZW50VHlwZV06IHRoaXMub25OZXdMaWdodFR5cGUsXHJcbiAgICBbTmV3Tm9ybWFsTWFwRXZlbnQuZXZlbnRUeXBlXTogdGhpcy5vbk5ld05vcm1hbE1hcCxcclxuICAgIFtOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudC5ldmVudFR5cGVdOiB0aGlzLm9uTmV3SGVpZ2h0TWFwSW50ZW5zaXR5XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBGaWxsV29ya2VyRXZlbnRIYW5kbGVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gZGVwZW5kZW5jaWVzLnN0YXRlO1xyXG4gICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlciA9IGRlcGVuZGVuY2llcy52ZWN0b3JNYXBQcmVwYXJlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5Jbml0aWFsaXplKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbGl6YXRpb25WYWx1ZSA9PT0gMTI3KSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuaW5pdGlhbGl6YXRpb25WYWx1ZSA9IDI1NTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNJbml0aWFsaXplZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmluaXRpYWxpemF0aW9uVmFsdWUgPT09IDI1NTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVFdmVudChldmVudDogQXBwRXZlbnQpIHtcclxuICAgIHRoaXMuaGFuZGxlcnNbZXZlbnQuZXZlbnRUeXBlXS5jYWxsKHRoaXMsIGV2ZW50KTtcclxuXHJcbiAgICBpZiAodGhpcy5jYW5Jbml0aWFsaXplKCkpIHtcclxuICAgICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlci5wZXJmb3JtSW5pdGlhbFByZXBhcmF0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZSBuby1iaXR3aXNlXHJcbiAgcHJpdmF0ZSBvbk5ld0JhY2tncm91bmRUZXh0dXJlKGV2ZW50OiBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50KSB7XHJcbiAgICB0aGlzLnN0YXRlLmFwcEZpbGxEYXRhLmJhY2tncm91bmRUZXh0dXJlID0gZXZlbnQucGF5bG9hZDtcclxuICAgIHRoaXMuc3RhdGUuaW5pdGlhbGl6YXRpb25WYWx1ZSB8PSAxO1xyXG5cclxuICAgIGlmICh0aGlzLmhhc0luaXRpYWxpemVkKCkpIHtcclxuICAgICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlci5wcmVwYXJlVGV4dHVyZVZlY3RvcnMoKTtcclxuICAgICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlci5wcmVwYXJlVGV4dHVyZVZlY3RvcnNXaXRoTGlnaHRDb2xvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk5ld0hlaWdodE1hcChldmVudDogTmV3SGVpZ2h0TWFwRXZlbnQpIHtcclxuICAgIHRoaXMuc3RhdGUuYXBwRmlsbERhdGEuaGVpZ2h0TWFwID0gZXZlbnQucGF5bG9hZDtcclxuICAgIHRoaXMuc3RhdGUuaW5pdGlhbGl6YXRpb25WYWx1ZSB8PSAyO1xyXG5cclxuICAgIGlmICh0aGlzLmhhc0luaXRpYWxpemVkKCkpIHtcclxuICAgICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlci5wcmVwYXJlQnVtcFZlY3RvcnMoKTtcclxuICAgICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlci5hcHBseUJ1bXBWZWN0b3JzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3TGlnaHRDb2xvcihldmVudDogTmV3TGlnaHRDb2xvckV2ZW50KSB7XHJcbiAgICBjb25zdCB7IHgsIHksIHogfSA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgICB0aGlzLnN0YXRlLmFwcEZpbGxEYXRhLmxpZ2h0Q29sb3IgPSBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuICAgIHRoaXMuc3RhdGUuaW5pdGlhbGl6YXRpb25WYWx1ZSB8PSA0O1xyXG5cclxuICAgIGlmICh0aGlzLmhhc0luaXRpYWxpemVkKCkpIHtcclxuICAgICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlci5wcmVwYXJlVGV4dHVyZVZlY3RvcnNXaXRoTGlnaHRDb2xvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk5ld0xpZ2h0UG9zaXRpb24oZXZlbnQ6IE5ld0xpZ2h0UG9zaXRpb25FdmVudCkge1xyXG4gICAgY29uc3QgeyB4LCB5LCB6IH0gPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5zdGF0ZS5saWdodFBvc2l0aW9uID0gbmV3IFZlY3RvcjMoeCwgeSwgeik7XHJcbiAgICB0aGlzLnN0YXRlLmluaXRpYWxpemF0aW9uVmFsdWUgfD0gODtcclxuXHJcbiAgICBpZiAodGhpcy5jYW5Jbml0aWFsaXplKCkpIHtcclxuICAgICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlci5wZXJmb3JtSW5pdGlhbFByZXBhcmF0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3TGlnaHRUeXBlKGV2ZW50OiBOZXdMaWdodFR5cGVFdmVudCkge1xyXG4gICAgdGhpcy5zdGF0ZS5saWdodFR5cGUgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5zdGF0ZS5pbml0aWFsaXphdGlvblZhbHVlIHw9IDE2O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk5ld05vcm1hbE1hcChldmVudDogTmV3Tm9ybWFsTWFwRXZlbnQpIHtcclxuICAgIHRoaXMuc3RhdGUuYXBwRmlsbERhdGEubm9ybWFsTWFwID0gZXZlbnQucGF5bG9hZDtcclxuICAgIHRoaXMuc3RhdGUuaW5pdGlhbGl6YXRpb25WYWx1ZSB8PSAzMjtcclxuXHJcbiAgICBpZiAodGhpcy5oYXNJbml0aWFsaXplZCgpKSB7XHJcbiAgICAgIHRoaXMudmVjdG9yTWFwUHJlcGFyZXIucHJlcGFyZU5vcm1hbFZlY3RvcnMoKTtcclxuICAgICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlci5wcmVwYXJlQnVtcFZlY3RvcnMoKTtcclxuICAgICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlci5hcHBseUJ1bXBWZWN0b3JzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3SGVpZ2h0TWFwSW50ZW5zaXR5KGV2ZW50OiBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudCkge1xyXG4gICAgdGhpcy5zdGF0ZS5hcHBGaWxsRGF0YS5oZWlnaHRNYXBJbnRlbnNpdHkgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5zdGF0ZS5pbml0aWFsaXphdGlvblZhbHVlIHw9IDY0O1xyXG5cclxuICAgIGlmICh0aGlzLmhhc0luaXRpYWxpemVkKCkpIHtcclxuICAgICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlci5wcmVwYXJlQnVtcFZlY3RvcnMoKTtcclxuICAgICAgdGhpcy52ZWN0b3JNYXBQcmVwYXJlci5hcHBseUJ1bXBWZWN0b3JzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIHRzbGludDplbmFibGUgbm8tYml0d2lzZVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3dvcmtlcnMvcG9seWdvbi1maWxsLXdvcmtlci9GaWxsV29ya2VyRXZlbnRIYW5kbGVyLnRzIiwiaW1wb3J0IHsgTGlnaHRUeXBlIH0gZnJvbSAnY29tbW9uL0xpZ2h0VHlwZSc7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdjb21tb24vVmVjdG9yMyc7XHJcblxyXG5pbXBvcnQgeyBGaWxsU3RyaXAgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9GaWxsU3RyaXAnO1xyXG5pbXBvcnQgeyBGaWxsV29ya2VyU3RhdGUgfSBmcm9tICd3b3JrZXJzL3BvbHlnb24tZmlsbC13b3JrZXIvRmlsbFdvcmtlclN0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxsV29ya2VyRmlsbGVyIHtcclxuICBwcml2YXRlIHN0YXRlOiBGaWxsV29ya2VyU3RhdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOiBGaWxsV29ya2VyU3RhdGUpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaWxsU3RyaXBzKHN0cmlwczogRmlsbFN0cmlwW10pIHtcclxuICAgIHN0cmlwcy5mb3JFYWNoKHN0cmlwID0+IHtcclxuICAgICAgY29uc3QgZnJvbVggPSBNYXRoLm1heChNYXRoLmZsb29yKHN0cmlwLmZyb21YKSwgMCk7XHJcbiAgICAgIGNvbnN0IHRvWCA9IE1hdGgubWluKE1hdGguZmxvb3Ioc3RyaXAudG9YKSwgdGhpcy5zdGF0ZS5jYW52YXNXaWR0aCAtIDEpO1xyXG5cclxuICAgICAgZm9yIChsZXQgeCA9IGZyb21YOyB4IDw9IHRvWDsgeCArPSAxKSB7XHJcbiAgICAgICAgdGhpcy5wdXRQaXhlbCh4LCBzdHJpcC55KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHB1dFBpeGVsKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRleHR1cmVWZWN0b3JzV2l0aExpZ2h0Q29sb3IsXHJcbiAgICAgIGRpc3RvcnRlZE5vcm1hbFZlY3RvcnMsXHJcbiAgICAgIGNhbnZhc0ltYWdlRGF0YVxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3QgdGV4dHVyZVZlY3RvcldpdGhMaWdodENvbG9yID0gdGV4dHVyZVZlY3RvcnNXaXRoTGlnaHRDb2xvclt4XVt5XTtcclxuICAgIGNvbnN0IGRpc3RvcnRlZE5vcm1hbFZlY3RvciA9IGRpc3RvcnRlZE5vcm1hbFZlY3RvcnNbeF1beV07XHJcbiAgICBjb25zdCBsaWdodFZlcnNvciA9IHRoaXMuZ2V0TGlnaHRWZXJzb3IoeCwgeSk7XHJcblxyXG4gICAgLy8gY29zIHRoZXRhID0gdjEgKiB2MiAvIChub3JtKHYxKSAqIG5vcm0odjIpKVxyXG4gICAgLy8gU2luY2UgbGlnaHREaXJlY3Rpb25WZXJzb3IgYW5kIGRpc3RvcnRlZE5vcm1hbFZlY3RvciBhcmUgdW5pdCB2ZWN0b3JzLCBjb3MgdGhldGEgaXMganVzdFxyXG4gICAgLy8gYSBkb3QgcHJvZHVjdFxyXG4gICAgY29uc3QgY29zVGhldGEgPSBWZWN0b3IzLmRvdFByb2R1Y3QobGlnaHRWZXJzb3IsIGRpc3RvcnRlZE5vcm1hbFZlY3Rvcik7XHJcbiAgICBjb25zdCBjbGFtcGVkQ29zVGhldGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBjb3NUaGV0YSkpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHRleHR1cmVWZWN0b3JXaXRoTGlnaHRDb2xvci5tdWx0aXBseShjbGFtcGVkQ29zVGhldGEpLmZsb29yKCk7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSAoeCArIHkgKiBjYW52YXNJbWFnZURhdGEud2lkdGgpICogNDtcclxuICAgIGNhbnZhc0ltYWdlRGF0YS5kYXRhW2luZGV4XSA9IHJlc3VsdC54O1xyXG4gICAgY2FudmFzSW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAxXSA9IHJlc3VsdC55O1xyXG4gICAgY2FudmFzSW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAyXSA9IHJlc3VsdC56O1xyXG4gICAgY2FudmFzSW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA9IDI1NTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TGlnaHRWZXJzb3IoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBWZWN0b3IzIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmxpZ2h0VHlwZSA9PT0gTGlnaHRUeXBlLkNvbnN0YW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxpZ2h0UG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTW92aW5nIGxpZ2h0IHR5cGVcclxuICAgIGNvbnN0IGxpZ2h0RGlyZWN0aW9uVmVjdG9yID0gVmVjdG9yMy5zdWJ0cmFjdChcclxuICAgICAgdGhpcy5zdGF0ZS5saWdodFBvc2l0aW9uLFxyXG4gICAgICBuZXcgVmVjdG9yMyh4LCB5LCAwKVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbGlnaHREaXJlY3Rpb25WZWN0b3Iubm9ybWFsaXplKCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3dvcmtlcnMvcG9seWdvbi1maWxsLXdvcmtlci9GaWxsV29ya2VyRmlsbGVyLnRzIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuXHJcbmltcG9ydCB7IEZpbGxXb3JrZXJTdGF0ZSB9IGZyb20gJ3dvcmtlcnMvcG9seWdvbi1maWxsLXdvcmtlci9GaWxsV29ya2VyU3RhdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3Rvck1hcFByZXBhcmVyIHtcclxuICBwcml2YXRlIHN0YXRlOiBGaWxsV29ya2VyU3RhdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOiBGaWxsV29ya2VyU3RhdGUpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwZXJmb3JtSW5pdGlhbFByZXBhcmF0aW9uKCkge1xyXG4gICAgdGhpcy5wcmVwYXJlVGV4dHVyZVZlY3RvcnMoKTtcclxuICAgIHRoaXMucHJlcGFyZVRleHR1cmVWZWN0b3JzV2l0aExpZ2h0Q29sb3IoKTtcclxuICAgIHRoaXMucHJlcGFyZU5vcm1hbFZlY3RvcnMoKTtcclxuICAgIHRoaXMucHJlcGFyZUJ1bXBWZWN0b3JzKCk7XHJcbiAgICB0aGlzLmFwcGx5QnVtcFZlY3RvcnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcmVwYXJlVGV4dHVyZVZlY3RvcnMoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XHJcbiAgICBzdGF0ZS50ZXh0dXJlVmVjdG9ycyA9IFtdO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZFRleHR1cmUgPSBzdGF0ZS5hcHBGaWxsRGF0YS5iYWNrZ3JvdW5kVGV4dHVyZTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHN0YXRlLmNhbnZhc1dpZHRoOyB4ICs9IDEpIHtcclxuICAgICAgY29uc3QgYmFja2dyb3VuZFRleHR1cmVYID0geCAlIGJhY2tncm91bmRUZXh0dXJlLndpZHRoO1xyXG4gICAgICBzdGF0ZS50ZXh0dXJlVmVjdG9ycy5wdXNoKFtdKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc3RhdGUuY2FudmFzV2lkdGg7IHkgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRUZXh0dXJlWSA9IHkgJSBiYWNrZ3JvdW5kVGV4dHVyZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gKGJhY2tncm91bmRUZXh0dXJlWCArIGJhY2tncm91bmRUZXh0dXJlWSAqIGJhY2tncm91bmRUZXh0dXJlLndpZHRoKSAqIDQ7XHJcbiAgICAgICAgY29uc3QgciA9IGJhY2tncm91bmRUZXh0dXJlLmRhdGFbaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGcgPSBiYWNrZ3JvdW5kVGV4dHVyZS5kYXRhW2luZGV4ICsgMV07XHJcbiAgICAgICAgY29uc3QgYiA9IGJhY2tncm91bmRUZXh0dXJlLmRhdGFbaW5kZXggKyAyXTtcclxuXHJcbiAgICAgICAgc3RhdGUudGV4dHVyZVZlY3RvcnNbeF0ucHVzaChuZXcgVmVjdG9yMyhyLCBnLCBiKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcmVwYXJlTm9ybWFsVmVjdG9ycygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgIHN0YXRlLm5vcm1hbFZlY3RvcnMgPSBbXTtcclxuICAgIGNvbnN0IG5vcm1hbE1hcCA9IHN0YXRlLmFwcEZpbGxEYXRhLm5vcm1hbE1hcDtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHN0YXRlLmNhbnZhc1dpZHRoOyB4ICs9IDEpIHtcclxuICAgICAgY29uc3Qgbm9ybWFsTWFwWCA9IHggJSBub3JtYWxNYXAud2lkdGg7XHJcbiAgICAgIHN0YXRlLm5vcm1hbFZlY3RvcnMucHVzaChbXSk7XHJcblxyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHN0YXRlLmNhbnZhc1dpZHRoOyB5ICs9IDEpIHtcclxuICAgICAgICBjb25zdCBub3JtYWxNYXBZID0geSAlIG5vcm1hbE1hcC5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gKG5vcm1hbE1hcFggKyBub3JtYWxNYXBZICogbm9ybWFsTWFwLndpZHRoKSAqIDQ7XHJcbiAgICAgICAgY29uc3QgciA9IG5vcm1hbE1hcC5kYXRhW2luZGV4XTtcclxuICAgICAgICBjb25zdCBnID0gbm9ybWFsTWFwLmRhdGFbaW5kZXggKyAxXTtcclxuICAgICAgICBjb25zdCBiID0gbm9ybWFsTWFwLmRhdGFbaW5kZXggKyAyXTtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9ybWFsVmVjdG9yID0gVmVjdG9yMy5mcm9tTm9ybWFsTWFwKHIsIGcsIGIpO1xyXG4gICAgICAgIGNvbnN0IHNjYWxlID0gMSAvIG5vcm1hbFZlY3Rvci56OyAvLyBbTngsIE55LCAxXVxyXG4gICAgICAgIHN0YXRlLm5vcm1hbFZlY3RvcnNbeF0ucHVzaChub3JtYWxWZWN0b3IubXVsdGlwbHkoc2NhbGUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZXBhcmVCdW1wVmVjdG9ycygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgIHN0YXRlLmJ1bXBWZWN0b3JzID0gW107XHJcbiAgICBjb25zdCBoZWlnaHRNYXAgPSBzdGF0ZS5hcHBGaWxsRGF0YS5oZWlnaHRNYXA7XHJcbiAgICBjb25zdCBtYXhIZWlnaHRNYXBYID0gaGVpZ2h0TWFwLndpZHRoIC0gMTtcclxuICAgIGNvbnN0IG1heEhlaWdodE1hcFkgPSBoZWlnaHRNYXAuaGVpZ2h0IC0gMTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHN0YXRlLmNhbnZhc1dpZHRoOyB4ICs9IDEpIHtcclxuICAgICAgY29uc3QgaGVpZ2h0TWFwWCA9IHggJSBoZWlnaHRNYXAud2lkdGg7XHJcbiAgICAgIHN0YXRlLmJ1bXBWZWN0b3JzLnB1c2goW10pO1xyXG5cclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzdGF0ZS5jYW52YXNXaWR0aDsgeSArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0TWFwWSA9IHkgJSBoZWlnaHRNYXAuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gKGhlaWdodE1hcFggKyBoZWlnaHRNYXBZICogaGVpZ2h0TWFwLndpZHRoKSAqIDQ7XHJcblxyXG4gICAgICAgIGxldCBkaHggPSAwOyAvLyA9IEhbeCArIDEsIHldIC0gSFt4LCB5XVxyXG4gICAgICAgIGxldCBkaHkgPSAwOyAvLyA9IEhbeCwgeSsxXSAtIEhbeCwgeV1cclxuXHJcbiAgICAgICAgaWYgKGhlaWdodE1hcFggPCBtYXhIZWlnaHRNYXBYKSB7XHJcbiAgICAgICAgICBkaHggPSBoZWlnaHRNYXAuZGF0YVtpbmRleCArIDRdIC0gaGVpZ2h0TWFwLmRhdGFbaW5kZXhdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBIWzAsIHldIC0gSFt4LCB5XVxyXG4gICAgICAgICAgZGh4ID0gaGVpZ2h0TWFwLmRhdGFbaW5kZXggLSBoZWlnaHRNYXBYICogNF0gLSBoZWlnaHRNYXAuZGF0YVtpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRoeCAqPSBzdGF0ZS5hcHBGaWxsRGF0YS5oZWlnaHRNYXBJbnRlbnNpdHk7XHJcblxyXG4gICAgICAgIGlmIChoZWlnaHRNYXBZIDwgbWF4SGVpZ2h0TWFwWSkge1xyXG4gICAgICAgICAgZGh5ID0gaGVpZ2h0TWFwLmRhdGFbaW5kZXggKyBoZWlnaHRNYXAud2lkdGggKiA0XSAtIGhlaWdodE1hcC5kYXRhW2luZGV4XTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSFt4LCAwXSAtIEhbeCwgeV1cclxuICAgICAgICAgIGRoeSA9IGhlaWdodE1hcC5kYXRhW2hlaWdodE1hcFggKiA0XSAtIGhlaWdodE1hcC5kYXRhW2luZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGh5ICo9IHN0YXRlLmFwcEZpbGxEYXRhLmhlaWdodE1hcEludGVuc2l0eTtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9ybWFsVmVjdG9yID0gc3RhdGUubm9ybWFsVmVjdG9yc1t4XVt5XTtcclxuICAgICAgICBjb25zdCB0ID0gbmV3IFZlY3RvcjMoMSwgMCwgLW5vcm1hbFZlY3Rvci54KTtcclxuICAgICAgICBjb25zdCBiID0gbmV3IFZlY3RvcjMoMCwgMSwgLW5vcm1hbFZlY3Rvci55KTtcclxuXHJcbiAgICAgICAgY29uc3QgZCA9IFZlY3RvcjMuYWRkKHQubXVsdGlwbHkoZGh4KSwgYi5tdWx0aXBseShkaHkpKTtcclxuICAgICAgICBzdGF0ZS5idW1wVmVjdG9yc1t4XS5wdXNoKGQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwbHlCdW1wVmVjdG9ycygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgIHN0YXRlLmRpc3RvcnRlZE5vcm1hbFZlY3RvcnMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHN0YXRlLmNhbnZhc1dpZHRoOyB4ICs9IDEpIHtcclxuICAgICAgc3RhdGUuZGlzdG9ydGVkTm9ybWFsVmVjdG9ycy5wdXNoKFtdKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc3RhdGUuY2FudmFzSGVpZ2h0OyB5ICs9IDEpIHtcclxuICAgICAgICBzdGF0ZS5kaXN0b3J0ZWROb3JtYWxWZWN0b3JzW3hdLnB1c2goXHJcbiAgICAgICAgICBWZWN0b3IzLmFkZChzdGF0ZS5ub3JtYWxWZWN0b3JzW3hdW3ldLCBzdGF0ZS5idW1wVmVjdG9yc1t4XVt5XSkubm9ybWFsaXplKClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJlcGFyZVRleHR1cmVWZWN0b3JzV2l0aExpZ2h0Q29sb3IoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XHJcbiAgICBzdGF0ZS50ZXh0dXJlVmVjdG9yc1dpdGhMaWdodENvbG9yID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzdGF0ZS5jYW52YXNXaWR0aDsgeCArPSAxKSB7XHJcbiAgICAgIHN0YXRlLnRleHR1cmVWZWN0b3JzV2l0aExpZ2h0Q29sb3IucHVzaChbXSk7XHJcblxyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHN0YXRlLmNhbnZhc0hlaWdodDsgeSArPSAxKSB7XHJcbiAgICAgICAgc3RhdGUudGV4dHVyZVZlY3RvcnNXaXRoTGlnaHRDb2xvclt4XS5wdXNoKFxyXG4gICAgICAgICAgVmVjdG9yMy5tdWx0aXBseUNvbXBvbmVudHMoXHJcbiAgICAgICAgICAgIHN0YXRlLnRleHR1cmVWZWN0b3JzW3hdW3ldLFxyXG4gICAgICAgICAgICBzdGF0ZS5hcHBGaWxsRGF0YS5saWdodENvbG9yXHJcbiAgICAgICAgICApLmZsb29yKClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3dvcmtlcnMvcG9seWdvbi1maWxsLXdvcmtlci9WZWN0b3JNYXBQcmVwYXJlci50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBJbWFnZURhdGE7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlRGF0YTogSW1hZ2VEYXRhKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ05ld0JhY2tncm91bmRUZXh0dXJlJztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdIZWlnaHRNYXBFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogSW1hZ2VEYXRhO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdIZWlnaHRNYXBFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW1hZ2VEYXRhOiBJbWFnZURhdGEpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGltYWdlRGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdIZWlnaHRNYXBFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW50ZW5zaXR5OiBudW1iZXIpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGludGVuc2l0eTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudC50cyIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdjb21tb24vVmVjdG9yMyc7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3TGlnaHRDb2xvckV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBWZWN0b3IzO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdMaWdodENvbG9yRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbG9yOiBWZWN0b3IzKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBjb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodENvbG9yRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRDb2xvckV2ZW50LnRzIiwiaW1wb3J0IHsgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdIZWlnaHRNYXBFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0hlaWdodE1hcEV2ZW50JztcclxuaW1wb3J0IHsgTmV3SGVpZ2h0TWFwSW50ZW5zaXR5RXZlbnR9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0hlaWdodE1hcEludGVuc2l0eUV2ZW50JztcclxuaW1wb3J0IHsgTmV3TGlnaHRDb2xvckV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRDb2xvckV2ZW50JztcclxuaW1wb3J0IHsgTmV3TGlnaHRQb3NpdGlvbkV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRQb3NpdGlvbkV2ZW50JztcclxuaW1wb3J0IHsgTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50JztcclxuaW1wb3J0IHsgTmV3TGlnaHRUeXBlRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFR5cGVFdmVudCc7XHJcbmltcG9ydCB7IE5ld05vcm1hbE1hcEV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3Tm9ybWFsTWFwRXZlbnQnO1xyXG5cclxuZXhwb3J0IHtcclxuICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEludGVuc2l0eUV2ZW50LFxyXG4gIE5ld0xpZ2h0Q29sb3JFdmVudCxcclxuICBOZXdMaWdodFBvc2l0aW9uRXZlbnQsXHJcbiAgTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50LFxyXG4gIE5ld0xpZ2h0VHlwZUV2ZW50LFxyXG4gIE5ld05vcm1hbE1hcEV2ZW50XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL2luZGV4LnRzIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuXHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdMaWdodFBvc2l0aW9uRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IFZlY3RvcjM7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0xpZ2h0UG9zaXRpb25FdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IobGlnaHRQb3NpdGlvbjogVmVjdG9yMykge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gbGlnaHRQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodFBvc2l0aW9uRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRQb3NpdGlvbkV2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpZ2h0UG9zaXRpb25SYWRpdXM6IG51bWJlcikge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gbGlnaHRQb3NpdGlvblJhZGl1cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50LnRzIiwiaW1wb3J0IHsgTGlnaHRUeXBlIH0gZnJvbSAnY29tbW9uL0xpZ2h0VHlwZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3TGlnaHRUeXBlRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IExpZ2h0VHlwZTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3TGlnaHRUeXBlRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpZ2h0VHlwZTogTGlnaHRUeXBlKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBsaWdodFR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3TGlnaHRUeXBlRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRUeXBlRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3Tm9ybWFsTWFwRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IEltYWdlRGF0YTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3Tm9ybWFsTWFwRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlRGF0YTogSW1hZ2VEYXRhKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3Tm9ybWFsTWFwRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3Tm9ybWFsTWFwRXZlbnQudHMiLCJleHBvcnQgZW51bSBGaWxsV29ya2VyTWVzc2FnZVR5cGUge1xyXG4gIENhbnZhc0luZm8sXHJcblxyXG4gIE5ld0ZpbGxEYXRhRXZlbnQsXHJcblxyXG4gIFN0YXJ0RmlsbCxcclxuICBGaWxsU3RyaXBzLFxyXG4gIEVuZEZpbGxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9wb2x5Z29uLWZpbGxlci9GaWxsV29ya2VyTWVzc2FnZVR5cGUudHMiLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbW1vbi9Db2xvcic7XHJcblxyXG5jb25zdCBNQVhfQ09MT1IgPSAyNTU7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMyB7XHJcbiAgcHVibGljIHg6IG51bWJlcjtcclxuICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gIHB1YmxpYyB6OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy56ID0gejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUNvbG9yKGNvbG9yOiBDb2xvcik6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKGNvbG9yLnIgLyBNQVhfQ09MT1IsIGNvbG9yLmcgLyBNQVhfQ09MT1IsIGNvbG9yLmIgLyBNQVhfQ09MT1IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhZGQodjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModjEueCArIHYyLngsIHYxLnkgKyB2Mi55LCB2MS56ICsgdjIueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHN1YnRyYWN0KHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYxLnggLSB2Mi54LCB2MS55IC0gdjIueSwgdjEueiAtIHYyLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcm9zc1Byb2R1Y3QodjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoXHJcbiAgICAgIHYxLnkgKiB2Mi56IC0gdjEueiAqIHYyLnksXHJcbiAgICAgIHYxLnogKiB2Mi54IC0gdjEueCAqIHYyLnosXHJcbiAgICAgIHYxLnggKiB2Mi55IC0gdjEueSAqIHYyLnhcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRvdFByb2R1Y3QodjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB2MS54ICogdjIueCArIHYxLnkgKiB2Mi55ICsgdjEueiAqIHYyLno7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNvc2luZUFuZ2xlKHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkb3RQcm9kdWN0ID0gVmVjdG9yMy5kb3RQcm9kdWN0KHYxLCB2Mik7XHJcbiAgICBjb25zdCBsZW5ndGgxID0gdjEuZ2V0TGVuZ3RoKCk7XHJcbiAgICBjb25zdCBsZW5ndGgyID0gdjIuZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgcmV0dXJuIGRvdFByb2R1Y3QgLyAobGVuZ3RoMSAqIGxlbmd0aDIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tTm9ybWFsTWFwKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiBWZWN0b3IzIHtcclxuICAgIGNvbnN0IHggPSByIC8gMjU1ICogMiAtIDE7XHJcbiAgICBjb25zdCB5ID0gZyAvIDI1NSAqIDIgLSAxO1xyXG4gICAgY29uc3QgeiA9IGIgLyAyNTU7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBtdWx0aXBseUNvbXBvbmVudHModjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModjEueCAqIHYyLngsIHYxLnkgKiB2Mi55LCB2MS56ICogdjIueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9Db2xvcigpOiBDb2xvciB7XHJcbiAgICBjb25zdCByID0gTWF0aC5mbG9vcih0aGlzLnggKiBNQVhfQ09MT1IpO1xyXG4gICAgY29uc3QgZyA9IE1hdGguZmxvb3IodGhpcy55ICogTUFYX0NPTE9SKTtcclxuICAgIGNvbnN0IGIgPSBNYXRoLmZsb29yKHRoaXMueiAqIE1BWF9DT0xPUik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDb2xvcihyLCBnLCBiKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBub3JtYWxpemUoKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLnggLyBsZW5ndGgsIHRoaXMueSAvIGxlbmd0aCwgdGhpcy56IC8gbGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtdWx0aXBseShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy54ICogc2NhbGUsIHRoaXMueSAqIHNjYWxlLCB0aGlzLnogKiBzY2FsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiogMiArIHRoaXMueSAqKiAyICsgdGhpcy56ICoqIDIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGludmVydCgpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMygtdGhpcy54LCAtdGhpcy55LCAtdGhpcy56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmbG9vcigpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKHRoaXMueCk7XHJcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcih0aGlzLnkpO1xyXG4gICAgY29uc3QgeiA9IE1hdGguZmxvb3IodGhpcy56KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoeCwgeSwgeik7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9WZWN0b3IzLnRzIiwiZXhwb3J0IGVudW0gTGlnaHRUeXBlIHtcclxuICBDb25zdGFudCxcclxuICBNb3ZpbmdcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vTGlnaHRUeXBlLnRzIiwiaW1wb3J0IHsgTGlnaHRUeXBlIH0gZnJvbSAnY29tbW9uL0xpZ2h0VHlwZSc7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdjb21tb24vVmVjdG9yMyc7XHJcblxyXG5pbXBvcnQgeyBGaWxsV29ya2VyTWVzc2FnZVR5cGUgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9GaWxsV29ya2VyTWVzc2FnZVR5cGUnO1xyXG5cclxuaW1wb3J0IHsgRmlsbFdvcmtlckV2ZW50SGFuZGxlciB9IGZyb20gJ3dvcmtlcnMvcG9seWdvbi1maWxsLXdvcmtlci9GaWxsV29ya2VyRXZlbnRIYW5kbGVyJztcclxuaW1wb3J0IHsgRmlsbFdvcmtlckZpbGxlciB9IGZyb20gJ3dvcmtlcnMvcG9seWdvbi1maWxsLXdvcmtlci9GaWxsV29ya2VyRmlsbGVyJztcclxuaW1wb3J0IHsgRmlsbFdvcmtlclN0YXRlIH0gZnJvbSAnd29ya2Vycy9wb2x5Z29uLWZpbGwtd29ya2VyL0ZpbGxXb3JrZXJTdGF0ZSc7XHJcbmltcG9ydCB7IFZlY3Rvck1hcFByZXBhcmVyIH0gZnJvbSAnd29ya2Vycy9wb2x5Z29uLWZpbGwtd29ya2VyL1ZlY3Rvck1hcFByZXBhcmVyJztcclxuXHJcbmNvbnN0IHN0YXRlOiBGaWxsV29ya2VyU3RhdGUgPSB7XHJcbiAgYXBwRmlsbERhdGE6IHtcclxuICAgIGJhY2tncm91bmRUZXh0dXJlOiBuZXcgSW1hZ2VEYXRhKDEsIDEpLFxyXG4gICAgbm9ybWFsTWFwOiBuZXcgSW1hZ2VEYXRhKDEsIDEpLFxyXG4gICAgaGVpZ2h0TWFwOiBuZXcgSW1hZ2VEYXRhKDEsIDEpLFxyXG4gICAgaGVpZ2h0TWFwSW50ZW5zaXR5OiAxLFxyXG4gICAgbGlnaHRDb2xvcjogbmV3IFZlY3RvcjMoMCwgMCwgMClcclxuICB9LFxyXG4gIGNhbnZhc0hlaWdodDogMCxcclxuICBjYW52YXNXaWR0aDogMCxcclxuICBjYW52YXNJbWFnZURhdGE6IG5ldyBJbWFnZURhdGEoMSwgMSksXHJcblxyXG4gIGxpZ2h0UG9zaXRpb246IG5ldyBWZWN0b3IzKDAsIDAsIDEpLFxyXG4gIGxpZ2h0VHlwZTogTGlnaHRUeXBlLkNvbnN0YW50LFxyXG5cclxuICBpbml0aWFsaXphdGlvblZhbHVlOiAwLFxyXG5cclxuICB0ZXh0dXJlVmVjdG9yczogW10sXHJcbiAgdGV4dHVyZVZlY3RvcnNXaXRoTGlnaHRDb2xvcjogW10sXHJcbiAgbm9ybWFsVmVjdG9yczogW10sXHJcbiAgYnVtcFZlY3RvcnM6IFtdLFxyXG4gIGRpc3RvcnRlZE5vcm1hbFZlY3RvcnM6IFtdXHJcbn07XHJcblxyXG5jb25zdCB2ZWN0b3JNYXBQcmVwYXJlciA9IG5ldyBWZWN0b3JNYXBQcmVwYXJlcihzdGF0ZSk7XHJcbmNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBGaWxsV29ya2VyRXZlbnRIYW5kbGVyKHsgc3RhdGUsIHZlY3Rvck1hcFByZXBhcmVyIH0pO1xyXG5jb25zdCBmaWxsZXIgPSBuZXcgRmlsbFdvcmtlckZpbGxlcihzdGF0ZSk7XHJcblxyXG5vbm1lc3NhZ2UgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XHJcbiAgY29uc3QgbWVzc2FnZVR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZSA9IGUuZGF0YS50eXBlO1xyXG5cclxuICBzd2l0Y2ggKG1lc3NhZ2VUeXBlKSB7XHJcbiAgICBjYXNlIEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5DYW52YXNJbmZvOlxyXG4gICAgICBzdGF0ZS5jYW52YXNXaWR0aCA9IGUuZGF0YS53aWR0aDtcclxuICAgICAgc3RhdGUuY2FudmFzSGVpZ2h0ID0gZS5kYXRhLmhlaWdodDtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBGaWxsV29ya2VyTWVzc2FnZVR5cGUuTmV3RmlsbERhdGFFdmVudDpcclxuICAgICAgZXZlbnRIYW5kbGVyLmhhbmRsZUV2ZW50KGUuZGF0YS5ldmVudCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgRmlsbFdvcmtlck1lc3NhZ2VUeXBlLlN0YXJ0RmlsbDpcclxuICAgICAgc3RhdGUuY2FudmFzSW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShzdGF0ZS5jYW52YXNXaWR0aCwgc3RhdGUuY2FudmFzSGVpZ2h0KTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBGaWxsV29ya2VyTWVzc2FnZVR5cGUuRmlsbFN0cmlwczpcclxuICAgICAgZmlsbGVyLmZpbGxTdHJpcHMoZS5kYXRhLmZpbGxTdHJpcHMpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5FbmRGaWxsOlxyXG4gICAgcG9zdE1lc3NhZ2Uoc3RhdGUuY2FudmFzSW1hZ2VEYXRhLCBbc3RhdGUuY2FudmFzSW1hZ2VEYXRhLmRhdGEuYnVmZmVyXSk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gd29ya2VyIG1lc3NhZ2UgdHlwZScsIG1lc3NhZ2VUeXBlKTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3dvcmtlcnMvUG9seWdvbkZpbGxXb3JrZXIudHMiXSwic291cmNlUm9vdCI6IiJ9