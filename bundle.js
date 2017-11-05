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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(12);
const LineProperties_1 = __webpack_require__(11);
const Vector3_1 = __webpack_require__(7);
const configuration = {
    newLinePreviewProperties: new LineProperties_1.LineProperties(COLORS_1.COLORS.BLUE, 2),
    newPolygonLineProperties: new LineProperties_1.LineProperties(COLORS_1.COLORS.RED, 1),
    polygonLineProperties: LineProperties_1.LineProperties.getDefault(),
    applicationUIContainerID: 'application-ui',
    hitTolerance: 10,
    minPolygonPoints: 3,
    doubleClickMaxDelay: 500,
    displayPathGhostWhenDragging: false,
    canvasFont: '30pt serif',
    loadingBarHideDelay: 1500,
    initialCustomBackgroundColorHex: '#00a2e8',
    presetBackgroundTextures: [
        'images/backgrounds/red-bricks.jpg',
        'images/backgrounds/Funny-Cat-Face.jpg',
        'images/backgrounds/hqdefault.jpg'
    ],
    initialCustomHeightMapColorHex: '#000000',
    presetHeightMaps: [
        'images/height-maps/brick_heightmap.png',
        'images/height-maps/terrain-heightmap.png'
    ],
    initialCustomNormalMapColorHex: '#7f7fff',
    presetNormalMaps: [
        'images/normal-maps/brick_normalmap.png',
        'images/normal-maps/normal_map.jpg',
        'images/normal-maps/circles.png'
    ],
    presetLightColor: new Vector3_1.Vector3(1, 1, 1),
    movingLight: {
        horizontalLapTime: 10 * 1000,
        verticalLapTime: 8 * 1000,
        minVerticalAngle: (20 / 180) * Math.PI,
        maxVerticalAngle: (70 / 180) * Math.PI,
        tickInterval: 50,
        defaultRadius: 500
    }
};
exports.configuration = configuration;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class RenderEvent {
    constructor() {
        this.payload = null;
        this.eventType = RenderEvent.eventType;
        this.handled = false;
    }
    static get eventType() {
        return 'RenderEvent';
    }
}
exports.RenderEvent = RenderEvent;


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SyncComponentsEvent {
    constructor() {
        this.payload = null;
        this.eventType = SyncComponentsEvent.eventType;
        this.handled = false;
    }
    static get eventType() {
        return 'SyncComponentsEvent';
    }
}
exports.SyncComponentsEvent = SyncComponentsEvent;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(40);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EPSILON = 0.1;
class Point {
    constructor(x, y) {
        this.moveCallback = null;
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    static add(p1, p2) {
        return new Point(p1.x + p2.x, p1.y + p2.y);
    }
    static subtract(p1, p2) {
        return new Point(p1.x - p2.x, p1.y - p2.y);
    }
    static getDistanceBetween(p1, p2) {
        return Math.sqrt(Point.getDistanceBetweenSquared(p1, p2));
    }
    static getDistanceBetweenSquared(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
    static getAngle(p1, p2) {
        let angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
        if (angle < 0) {
            angle += 360;
        }
        return angle;
    }
    static dotProduct(p1, p2) {
        return p1.x * p2.x + p1.y * p2.y;
    }
    static crossProduct(p1, p2) {
        return p1.x * p2.y - p1.y * p2.x;
    }
    static epsilonEquals(p1, p2) {
        return Point.getDistanceBetween(p1, p2) <= EPSILON;
    }
    moveTo(pointOrX, y) {
        if (typeof pointOrX === 'number') {
            if (y === undefined) {
                throw new Error('x is defined, but y is not defined');
            }
            return this.moveToCoordinates(pointOrX, y);
        }
        return this.moveToPoint(pointOrX);
    }
    equals(point) {
        return this.x === point.x && this.y === point.y;
    }
    getDistanceTo(point) {
        return Point.getDistanceBetween(this, point);
    }
    getDistanceSquaredTo(point) {
        return Point.getDistanceBetweenSquared(this, point);
    }
    clone() {
        return new Point(this.x, this.y);
    }
    floor() {
        return new Point(Math.floor(this.x), Math.floor(this.y));
    }
    moveToPoint(point) {
        return this.moveToCoordinates(point.x, point.y);
    }
    moveToCoordinates(x, y) {
        this._x = x;
        this._y = y;
        if (this.moveCallback) {
            this.moveCallback();
        }
    }
}
exports.Point = Point;


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Dictionary
const LEX = {
    POLYGON_LAYER_NAME: 'PolygonLayer',
    PATH_LAYER_NAME: 'PathLayer',
    PATH_GHOST_LAYER_NAME: 'PathGhostLayer',
    NEW_CONDITION_EVENT_NAME: 'new-condition',
    REMOVE_CONDITION_EVENT_NAME: 'remove-condition',
    KEY_CODE: {
        ESCAPE: 27
    }
};
exports.LEX = LEX;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LightType;
(function (LightType) {
    LightType[LightType["Constant"] = 0] = "Constant";
    LightType[LightType["Moving"] = 1] = "Moving";
})(LightType = exports.LightType || (exports.LightType = {}));


/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(12);
class LineProperties {
    constructor(color, thickness) {
        this.color = color;
        this.thickness = thickness;
    }
    static getDefault() {
        return new LineProperties(COLORS_1.COLORS.BLACK, 1);
    }
    clone() {
        return new LineProperties(this.color, this.thickness);
    }
}
exports.LineProperties = LineProperties;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(10);
exports.COLORS = {
    BLACK: new Color_1.Color(0, 0, 0),
    RED: new Color_1.Color(255, 0, 0),
    GREEN: new Color_1.Color(0, 255, 0),
    BLUE: new Color_1.Color(0, 0, 255),
    WHITE: new Color_1.Color(255, 255, 255)
};
Object.freeze(exports.COLORS);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Path_1 = __webpack_require__(14);
class Layer {
    constructor(name) {
        this.paths = [];
        this.name = name;
    }
    render(renderer) {
        this.paths.forEach(path => renderer.drawPath(path));
    }
    removePath(path) {
        const index = this.paths.indexOf(path);
        if (index === -1) {
            return;
        }
        this.paths.splice(index, 1);
    }
    hitTest(point) {
        for (const path of this.paths) {
            const result = path.hitTest(point);
            if (!result) {
                continue;
            }
            result.layer = this;
            return result;
        }
        return null;
    }
    toSerializableObject() {
        return {
            name: this.name,
            paths: this.paths.map(path => path.toSerializableObject())
        };
    }
    fromSerializableObject(serializableLayer) {
        this.name = serializableLayer.name;
        this.paths.splice(0, this.paths.length);
        serializableLayer.paths.forEach(serializablePath => {
            this.paths.push(Path_1.Path.fromSerializablePath(serializablePath));
        });
    }
}
exports.Layer = Layer;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HitTestResult_1 = __webpack_require__(45);
const Line_1 = __webpack_require__(15);
const LineProperties_1 = __webpack_require__(11);
const Point_1 = __webpack_require__(6);
const configuration_1 = __webpack_require__(0);
class Path {
    constructor(vertices, lineProperties) {
        this.closed = false;
        this.vertices = vertices;
        this.lineProperties = lineProperties;
    }
    static fromSerializablePath(serializablePath) {
        const realPoints = serializablePath.vertices.map(vertex => new Point_1.Point(vertex.x, vertex.y));
        const realLineProperties = new LineProperties_1.LineProperties(serializablePath.lineProperties.color, serializablePath.lineProperties.thickness);
        const path = new Path(realPoints, realLineProperties);
        path.closed = serializablePath.closed;
        return path;
    }
    *getVerticesIterator() {
        const verticesCount = this.vertices.length;
        for (let i = 0; i < verticesCount; i += 1) {
            yield this.vertices[i];
        }
        if (this.closed && verticesCount > 0) {
            yield this.vertices[0];
        }
    }
    *getLineIterator() {
        let previousPoint;
        for (const point of this.getVerticesIterator()) {
            if (!previousPoint) {
                previousPoint = point;
                continue;
            }
            yield new Line_1.Line(previousPoint, point);
            previousPoint = point;
        }
    }
    getStartingPoint() {
        return this.vertices[0];
    }
    getVerticesCount() {
        return this.vertices.length;
    }
    getLineProperties() {
        return this.lineProperties;
    }
    hitTest(point) {
        for (const line of this.getLineIterator()) {
            if (line.distanceToPoint(point) <= configuration_1.configuration.hitTolerance) {
                return new HitTestResult_1.HitTestResult(line, this);
            }
        }
        return null;
    }
    getVertex(index) {
        return this.vertices[index];
    }
    getVertices() {
        return this.vertices;
    }
    addVertex(point) {
        this.vertices.push(point);
    }
    removeVertex(point) {
        const index = this.findPointIndex(point);
        if (index !== -1) {
            this.vertices.splice(index, 1);
        }
    }
    insertVertex(point, index) {
        this.vertices.splice(index, 0, point);
    }
    clone() {
        const vertices = [...this.getVertices().map(point => point.clone())];
        const lineProperties = this.lineProperties.clone();
        return new Path(vertices, lineProperties);
    }
    findPointIndex(point) {
        return this.vertices.indexOf(point);
    }
    getBoundingBox() {
        let minX = Infinity;
        let maxX = 0;
        let minY = Infinity;
        let maxY = 0;
        this.vertices.forEach(point => {
            if (point.x < minX) {
                minX = point.x;
            }
            if (point.x > maxX) {
                maxX = point.x;
            }
            if (point.y < minY) {
                minY = point.y;
            }
            if (point.y > maxY) {
                maxY = point.y;
            }
        });
        return {
            minX,
            maxX,
            minY,
            maxY
        };
    }
    isPointInBoundingBox(point) {
        const boundingBox = this.getBoundingBox();
        return (point.x >= boundingBox.minX &&
            point.x <= boundingBox.maxX &&
            point.y >= boundingBox.minY &&
            point.y <= boundingBox.maxY);
    }
    toSerializableObject() {
        return {
            lineProperties: this.lineProperties.clone(),
            closed: this.closed,
            vertices: this.vertices.map(vertex => ({
                x: vertex.x,
                y: vertex.y
            }))
        };
    }
    getNextPointIndex(index) {
        return (index + 1) % this.getVerticesCount();
    }
    getNextPoint(point) {
        const index = this.vertices.indexOf(point);
        const nextPointIndex = this.getNextPointIndex(index);
        return this.getVertex(nextPointIndex);
    }
    getPreviousPointIndex(index) {
        let previousPointIndex = index - 1;
        if (previousPointIndex < 0) {
            previousPointIndex = this.getVerticesCount() - 1;
        }
        return previousPointIndex;
    }
    getPreviousPoint(point) {
        const index = this.vertices.indexOf(point);
        const previousPointIndex = this.getPreviousPointIndex(index);
        return this.getVertex(previousPointIndex);
    }
    moveTo(path) {
        if (this.getVerticesCount() !== path.getVerticesCount()) {
            throw new Error('The number of vertices does not match');
        }
        if (this.closed !== path.closed) {
            throw new Error("Path's closed state does not match");
        }
        this.vertices.forEach((point, index) => point.moveTo(path.getVertex(index)));
    }
    getCenterOfGravity() {
        let centerX = 0;
        let centerY = 0;
        this.getVertices().forEach(point => {
            centerX += point.x;
            centerY += point.y;
        });
        centerX /= this.getVerticesCount();
        centerY /= this.getVerticesCount();
        return new Point_1.Point(centerX, centerY);
    }
    getBoundingBoxCenter() {
        const boundingBox = this.getBoundingBox();
        const centerX = (boundingBox.maxX + boundingBox.minX) / 2;
        const centerY = (boundingBox.maxY + boundingBox.minY) / 2;
        return new Point_1.Point(centerX, centerY);
    }
}
exports.Path = Path;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(6);
class Line {
    constructor(p1, p2) {
        if (p1.equals(p2)) {
            throw new Error('Cannot create line between points at the same coordinates');
        }
        this.p1 = p1;
        this.p2 = p2;
    }
    distanceToPoint(p) {
        const pointProjection = this.projectPoint(p);
        return Point_1.Point.getDistanceBetween(p, pointProjection);
    }
    projectPoint(p) {
        const p1 = this.p1;
        const p2 = this.p2;
        let t = ((p.x - p1.x) * (p2.x - p1.x) + (p.y - p1.y) * (p2.y - p1.y)) /
            Point_1.Point.getDistanceBetweenSquared(p1, p2);
        t = Math.max(0, Math.min(1, t));
        return new Point_1.Point(p1.x + t * (p2.x - p1.x), p1.y + t * (p2.y - p1.y));
    }
    equals(line) {
        return ((this.p1.equals(line.p1) && this.p2.equals(line.p2)) ||
            (this.p1.equals(line.p2) && this.p2.equals(line.p1)));
    }
    getMiddlePoint() {
        return new Point_1.Point((this.p1.x + this.p2.x) / 2, (this.p1.y + this.p2.y) / 2);
    }
    getLength() {
        return Point_1.Point.getDistanceBetween(this.p1, this.p2);
    }
    getDirection(p) {
        const direction = Point_1.Point.crossProduct(Point_1.Point.subtract(this.p2, this.p1), Point_1.Point.subtract(p, this.p1));
        if (Math.abs(direction) < 0.0001) {
            return 0;
        }
        else if (direction > 0) {
            return 1;
        }
        else {
            return -1;
        }
    }
}
exports.Line = Line;


/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Path_1 = __webpack_require__(14);
const configuration_1 = __webpack_require__(0);
class Polygon extends Path_1.Path {
    constructor(pathOrVertices, lineProperties) {
        let vertices;
        if (pathOrVertices instanceof Path_1.Path) {
            const path = pathOrVertices;
            vertices = path.getVertices();
            lineProperties = path.lineProperties;
        }
        else {
            vertices = pathOrVertices;
            lineProperties = lineProperties;
        }
        Polygon.ensureVerticesLength(vertices);
        super(vertices, lineProperties);
        this.closed = true;
    }
    static ensureVerticesLength(vertices) {
        if (vertices.length >= configuration_1.configuration.minPolygonPoints) {
            return;
        }
        throw new Error(`Polygon must have at least ${configuration_1.configuration.minPolygonPoints} vertices`);
    }
    clone() {
        return new Polygon(super.clone());
    }
    removeVertex(point) {
        if (this.getVerticesCount() === configuration_1.configuration.minPolygonPoints) {
            throw new Error('Cannot delete vertex');
        }
        super.removeVertex(point);
    }
    isConvex() {
        let lastLine = null;
        let lastDirection = null;
        for (const line of this.getLineIterator()) {
            if (!lastLine) {
                lastLine = line;
                continue;
            }
            const currentDirection = lastLine.getDirection(line.p2);
            lastLine = line;
            if (lastDirection === null && currentDirection !== 0) {
                lastDirection = currentDirection;
                continue;
            }
            if (currentDirection === 0) {
                continue;
            }
            if (currentDirection !== lastDirection) {
                return false;
            }
        }
        return true;
    }
}
exports.Polygon = Polygon;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(59);
const classNames = {
    DIALOG_BOX: 'dialog-box',
    DIALOG: 'image-select-dialog',
    HEADER: 'image-select-dialog__header',
    HEADING: 'image-select-dialog__heading',
    BLOCK: 'image-select-dialog__block',
    BLOCK_TITLE: 'image-select-dialog__block-title',
    PRESET_IMAGES_CONTAINER: 'image-select-dialog__preset-images-container',
    SELECTED_IMAGE: 'image-select-dialog__image--selected',
    CUSTOM_IMAGE: 'image-select-dialog__custom-image',
    BOTTOM_BUTTONS: 'image-select-dialog__bottom-buttons'
};
class ImageSelectDialog extends HTMLElement {
    constructor(presetImageUrls, initialCustomColorHex) {
        super();
        this._wasCancelled = false;
        this._presetImageUrls = presetImageUrls;
        this.initialCustomColorHex = initialCustomColorHex;
        this.classList.add(classNames.DIALOG_BOX);
        this.classList.add(classNames.DIALOG);
        this.onSelectableImageClick = this.onSelectableImageClick.bind(this);
        this.showCustomImage = this.showCustomImage.bind(this);
        this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
        this.onConfirmButtonClick = this.onConfirmButtonClick.bind(this);
        this.onCustomColorInputChange = this.onCustomColorInputChange.bind(this);
        this.createHeader();
        this.createPresetImagesList();
        this.createCustomImagePicker();
        this.createCustomColorPicker();
        this.createBottomButtons();
    }
    static get observedAttributes() {
        return ['name'];
    }
    get name() {
        return this.getAttribute('name') || 'Image select';
    }
    set name(value) {
        this.setAttribute('name', value);
        this.heading.innerText = value;
    }
    get wasCancelled() {
        return this._wasCancelled;
    }
    get presetImageUrls() {
        return this._presetImageUrls;
    }
    get selectedImage() {
        return this._selectedImage;
    }
    connectedCallback() {
        this._wasCancelled = true;
        this.cancelButton.addEventListener('click', this.onCancelButtonClick);
        this.confirmButton.addEventListener('click', this.onConfirmButtonClick);
        this.customFileInput.addEventListener('change', this.showCustomImage);
        this.customImage.addEventListener('click', this.onSelectableImageClick);
        this.customColorInput.addEventListener('change', this.onCustomColorInputChange);
        this.customColorImage.addEventListener('click', this.onSelectableImageClick);
        this.presetImagesListContainer
            .querySelectorAll('img')
            .forEach(image => image.addEventListener('click', this.onSelectableImageClick));
    }
    disconnectedCallback() {
        this.presetImagesListContainer
            .querySelectorAll('img')
            .forEach(image => image.removeEventListener('click', this.onSelectableImageClick));
        this.customFileInput.removeEventListener('change', this.showCustomImage);
        this.customImage.removeEventListener('click', this.onSelectableImageClick);
        this.customColorInput.removeEventListener('change', this.onCustomColorInputChange);
        this.customColorImage.removeEventListener('click', this.onSelectableImageClick);
        this.cancelButton.removeEventListener('click', this.onCancelButtonClick);
        this.confirmButton.removeEventListener('click', this.onConfirmButtonClick);
    }
    canClose() {
        return true;
    }
    close() {
        this.dispatchEvent(new CustomEvent('close'));
    }
    createHeader() {
        const header = this.createBlock();
        header.classList.add(classNames.HEADER);
        this.appendChild(header);
        this.heading = document.createElement('h2');
        this.heading.classList.add(classNames.HEADING);
        this.heading.innerText = this.name;
        header.appendChild(this.heading);
    }
    createPresetImagesList() {
        const container = this.createBlock();
        const blockTitle = this.createBlockTitle('Choose preset image');
        container.appendChild(blockTitle);
        const imagesContainer = document.createElement('div');
        imagesContainer.classList.add(classNames.PRESET_IMAGES_CONTAINER);
        container.appendChild(imagesContainer);
        this.presetImageUrls
            .map(url => this.createSelectableImage(url))
            .forEach(image => imagesContainer.appendChild(image));
        this.presetImagesListContainer = container;
        this.appendChild(this.presetImagesListContainer);
        this.selectImage(this.presetImagesListContainer.querySelector('img'));
    }
    createCustomImagePicker() {
        const customImageContainer = this.createBlock();
        this.appendChild(customImageContainer);
        const blockTitle = this.createBlockTitle('Select custom image');
        customImageContainer.appendChild(blockTitle);
        this.customFileInput = document.createElement('input');
        this.customFileInput.type = 'file';
        this.customFileInput.accept = 'image/*';
        customImageContainer.appendChild(this.customFileInput);
        this.customImage = document.createElement('img');
        this.customImage.classList.add(classNames.CUSTOM_IMAGE);
        customImageContainer.appendChild(this.customImage);
    }
    showCustomImage() {
        if (this.customFileInput.files && this.customFileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = e => {
                // tslint:disable-next-line no-any
                this.customImage.src = e.target.result;
                this.selectImage(this.customImage);
            };
            reader.readAsDataURL(this.customFileInput.files[0]);
        }
    }
    createCustomColorPicker() {
        const customColorContainer = this.createBlock();
        this.appendChild(customColorContainer);
        const title = this.createBlockTitle('Custom solid color');
        customColorContainer.appendChild(title);
        this.customColorInput = document.createElement('input');
        this.customColorInput.type = 'color';
        this.customColorInput.value = this.initialCustomColorHex;
        customColorContainer.appendChild(this.customColorInput);
        this.customColorImage = new Image(20, 20);
        customColorContainer.appendChild(this.customColorImage);
        this.setCustomColorImageColor();
    }
    onCustomColorInputChange() {
        this.setCustomColorImageColor();
        this.selectImage(this.customColorImage);
    }
    setCustomColorImageColor() {
        const canvas = document.createElement('canvas');
        canvas.width = this.customColorImage.width;
        canvas.height = this.customColorImage.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error('Cannot get canvas drawing context');
        }
        ctx.fillStyle = this.customColorInput.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.customColorImage.src = canvas.toDataURL();
    }
    createBottomButtons() {
        const bottomButtonsContainer = document.createElement('div');
        bottomButtonsContainer.classList.add(classNames.BOTTOM_BUTTONS);
        this.appendChild(bottomButtonsContainer);
        this.cancelButton = document.createElement('button');
        this.cancelButton.innerText = 'Cancel';
        this.confirmButton = document.createElement('button');
        this.confirmButton.innerText = 'Confirm';
        bottomButtonsContainer.appendChild(this.cancelButton);
        bottomButtonsContainer.appendChild(this.confirmButton);
    }
    onCancelButtonClick() {
        this.close();
    }
    onConfirmButtonClick() {
        this._wasCancelled = false;
        this.close();
    }
    createBlock() {
        const block = document.createElement('div');
        block.classList.add(classNames.BLOCK);
        return block;
    }
    createBlockTitle(title) {
        const blockTitle = document.createElement('h3');
        blockTitle.classList.add(classNames.BLOCK_TITLE);
        blockTitle.innerText = title;
        return blockTitle;
    }
    createSelectableImage(imageSource) {
        const container = document.createElement('div');
        const image = new Image();
        image.src = imageSource;
        container.appendChild(image);
        return container;
    }
    onSelectableImageClick(event) {
        this.selectImage(event.target);
    }
    selectImage(image) {
        if (image === this._selectedImage) {
            return;
        }
        if (this._selectedImage) {
            this._selectedImage.classList.remove(classNames.SELECTED_IMAGE);
        }
        image.classList.add(classNames.SELECTED_IMAGE);
        this._selectedImage = image;
    }
}
exports.ImageSelectDialog = ImageSelectDialog;
customElements.define('app-image-select-dialog', ImageSelectDialog);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DialogBoxButton_1 = __webpack_require__(30);
class ImageSelectDialogButton extends DialogBoxButton_1.DialogBoxButton {
    constructor(dependencies) {
        super({ dialogOverlay: dependencies.dialogOverlay });
        this.eventAggregator = dependencies.eventAggregator;
        this.imageDownloader = dependencies.imageDownloader;
        this.button.innerText = 'Select image';
    }
    getSelectedImageData() {
        const selectedImage = this.dialogBox.selectedImage;
        return this.imageDownloader.imageToImageData(selectedImage);
    }
}
exports.ImageSelectDialogButton = ImageSelectDialogButton;
customElements.define('app-image-select-dialog-button', ImageSelectDialogButton);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PointClickEvent {
    constructor(pathPointElement) {
        this.eventType = PointClickEvent.eventType;
        this.handled = false;
        this.payload = pathPointElement;
    }
    static get eventType() {
        return 'PointClickEvent';
    }
}
exports.PointClickEvent = PointClickEvent;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LoadingFinishedEvent {
    constructor() {
        this.payload = null;
        this.eventType = LoadingFinishedEvent.eventType;
        this.handled = false;
    }
    static get eventType() {
        return LoadingFinishedEvent.name;
    }
}
exports.LoadingFinishedEvent = LoadingFinishedEvent;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LoadingStartedEvent {
    constructor() {
        this.payload = null;
        this.eventType = LoadingStartedEvent.eventType;
        this.handled = false;
    }
    static get eventType() {
        return LoadingStartedEvent.name;
    }
}
exports.LoadingStartedEvent = LoadingStartedEvent;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DialogBoxButton extends HTMLElement {
    constructor(dependencies) {
        super();
        this.dialogOverlay = dependencies.dialogOverlay;
        this.button = document.createElement('button');
        this.button.innerText = 'Open dialog box';
        this.appendChild(this.button);
        this.openDialogBox = this.openDialogBox.bind(this);
        this.onDialogBoxClosed = this.onDialogBoxClosed.bind(this);
        this.setupDialogBox();
        if (!this.dialogBox) {
            throw new Error('Dialog box is undefined');
        }
    }
    connectedCallback() {
        this.button.addEventListener('click', this.openDialogBox);
    }
    disconnectedCallback() {
        this.button.removeEventListener('click', this.openDialogBox);
        this.dialogBox.removeEventListener('close', this.onDialogBoxClosed);
        this.dialogBox.close();
    }
    openDialogBox() {
        this.dialogOverlay.showDialog(this.dialogBox);
        this.dialogBox.addEventListener('close', this.onDialogBoxClosed);
    }
}
exports.DialogBoxButton = DialogBoxButton;
customElements.define('app-dialog-box-button', DialogBoxButton);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class RenderFinishedEvent {
    constructor() {
        this.payload = null;
        this.eventType = RenderFinishedEvent.eventType;
        this.handled = false;
    }
    static get eventType() {
        return RenderFinishedEvent.name;
    }
}
exports.RenderFinishedEvent = RenderFinishedEvent;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class FinishPointDragEvent {
    constructor(pathPointElement) {
        this.eventType = FinishPointDragEvent.eventType;
        this.handled = false;
        this.payload = pathPointElement;
    }
    static get eventType() {
        return 'FinishPointDragEvent';
    }
}
exports.FinishPointDragEvent = FinishPointDragEvent;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PointDragEvent {
    constructor(pathPointElement, newPosition) {
        this.eventType = PointDragEvent.eventType;
        this.handled = false;
        this.payload = {
            element: pathPointElement,
            newPosition
        };
    }
    static get eventType() {
        return 'PointDragEvent';
    }
}
exports.PointDragEvent = PointDragEvent;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class StartPointDragEvent {
    constructor(pathPointElement) {
        this.eventType = StartPointDragEvent.eventType;
        this.handled = false;
        this.payload = pathPointElement;
    }
    static get eventType() {
        return 'StartPointDragEvent';
    }
}
exports.StartPointDragEvent = StartPointDragEvent;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LineClickEvent {
    constructor(line, path, position) {
        this.eventType = LineClickEvent.eventType;
        this.handled = false;
        this.payload = {
            line,
            path,
            position
        };
    }
    static get eventType() {
        return 'LineClickEvent';
    }
}
exports.LineClickEvent = LineClickEvent;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(92);
class InstructionsDialog extends HTMLElement {
    constructor() {
        super();
        this.className = 'instructions-dialog dialog-box';
        const titleElement = document.createElement('h1');
        titleElement.textContent = 'Instructions';
        titleElement.className = 'instructions-dialog__title';
        this.appendChild(titleElement);
        this.createUsageList();
        this.dismissButton = document.createElement('button');
        this.dismissButton.textContent = 'Dismiss';
        this.appendChild(this.dismissButton);
        this.close = this.close.bind(this);
    }
    connectedCallback() {
        this.dismissButton.addEventListener('click', this.close);
    }
    disconnectedCallback() {
        this.dismissButton.removeEventListener('click', this.close);
    }
    close() {
        this.dispatchEvent(new CustomEvent('close'));
    }
    canClose() {
        return true;
    }
    createUsageList() {
        const list = document.createElement('ul');
        const usage = [
            'Click on the free space in the canvas to start creating vertices',
            'Click on the initial vertex to close the path into a polygon',
            'Alternatively, you may press Escape to cancel adding a new path',
            'Click and drag the vertex to move it',
            'Double click on an edge to add a vertex in the middle of it',
            'Double click on a vertex to remove it',
            'Pressing Ctrl allows dragging a whole polygon',
            "Shift + click to clip the polygons using Sutherland-Hodgman's algorithm",
            'Save allows you to export all the polygons on the screen',
            'Load allows you to restore the polygons'
        ];
        usage
            .map(usageItemText => this.createUsageListItem(usageItemText))
            .forEach(usageListItem => list.appendChild(usageListItem));
        this.appendChild(list);
    }
    createUsageListItem(textContent) {
        const item = document.createElement('li');
        item.textContent = textContent;
        return item;
    }
}
exports.InstructionsDialog = InstructionsDialog;
window.customElements.define('app-instructions-dialog', InstructionsDialog);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(38);
__webpack_require__(41);
__webpack_require__(42);
const Application_1 = __webpack_require__(44);
window.onload = bootstrap;
function bootstrap() {
    const canvasId = 'main-canvas';
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        throw new Error(`Canvas with id ${canvasId} cannot be found`);
    }
    const application = new Application_1.Application(canvas);
    application.init();
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nbody {\n  line-height: 1.5; }\n\n.main-canvas {\n  border: solid 1px black; }\n\n.main-container {\n  width: 100%;\n  padding: 0 1em; }\n\n.canvas-wrapper {\n  width: 100%;\n  position: relative; }\n\n.application-ui {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none; }\n  .application-ui * {\n    pointer-events: all; }\n\n.app-header {\n  margin-bottom: 1em;\n  margin-left: 1em; }\n\n.app-name {\n  margin: 0; }\n\n.footer {\n  margin: 1em 1em; }\n", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var J="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,Aa="function"==typeof Object.defineProperties?Object.defineProperty:function(g,q,N){g!=Array.prototype&&g!=Object.prototype&&(g[q]=N.value)};function sb(){sb=function(){};J.Symbol||(J.Symbol=tb)}var tb=function(){var g=0;return function(q){return"jscomp_symbol_"+(q||"")+g++}}();
function dd(){sb();var g=J.Symbol.iterator;g||(g=J.Symbol.iterator=J.Symbol("iterator"));"function"!=typeof Array.prototype[g]&&Aa(Array.prototype,g,{configurable:!0,writable:!0,value:function(){return ed(this)}});dd=function(){}}function ed(g){var q=0;return fd(function(){return q<g.length?{done:!1,value:g[q++]}:{done:!0}})}function fd(g){dd();g={next:g};g[J.Symbol.iterator]=function(){return this};return g}function gd(g){dd();var q=g[Symbol.iterator];return q?q.call(g):ed(g)}
function hd(g){for(var q,N=[];!(q=g.next()).done;)N.push(q.value);return N}
(function(){function g(){var a=this;this.m={};this.g=document.documentElement;var b=new Ba;b.rules=[];this.h=v.set(this.g,new v(b));this.i=!1;this.b=this.a=null;ub(function(){a.c()})}function q(){this.customStyles=[];this.enqueued=!1}function N(){}function ha(a){this.cache={};this.c=void 0===a?100:a}function n(){}function v(a,b,c,d,e){this.D=a||null;this.b=b||null;this.la=c||[];this.N=null;this.V=e||"";this.a=this.A=this.J=null}function u(){}function Ba(){this.end=this.start=0;this.rules=this.parent=
this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}function id(a){function b(b,c){Object.defineProperty(b,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(b){var d=this,e=void 0;t(this)&&(e=[],O(this,function(a){a!==d&&e.push(a)}));c.set.call(this,b);if(e)for(var f=0;f<e.length;f++){var k=e[f];1===k.__CE_state&&a.disconnectedCallback(k)}this.ownerDocument.__CE_hasRegistry?a.f(this):a.l(this);
return b}})}function c(b,c){x(b,"insertAdjacentElement",function(b,d){var e=t(d);b=c.call(this,b,d);e&&a.a(d);t(b)&&a.b(d);return b})}vb&&x(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=vb.call(this,a)});if(Ca&&Ca.get)b(Element.prototype,Ca);else if(Da&&Da.get)b(HTMLElement.prototype,Da);else{var d=Ea.call(document,"div");a.s(function(a){b(a,{enumerable:!0,configurable:!0,get:function(){return wb.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName?
this.content:this;for(d.innerHTML=a;0<b.childNodes.length;)Fa.call(b,b.childNodes[0]);for(;0<d.childNodes.length;)ia.call(b,d.childNodes[0])}})})}x(Element.prototype,"setAttribute",function(b,c){if(1!==this.__CE_state)return xb.call(this,b,c);var d=Ga.call(this,b);xb.call(this,b,c);c=Ga.call(this,b);a.attributeChangedCallback(this,b,d,c,null)});x(Element.prototype,"setAttributeNS",function(b,c,d){if(1!==this.__CE_state)return yb.call(this,b,c,d);var e=ja.call(this,b,c);yb.call(this,b,c,d);d=ja.call(this,
b,c);a.attributeChangedCallback(this,c,e,d,b)});x(Element.prototype,"removeAttribute",function(b){if(1!==this.__CE_state)return zb.call(this,b);var c=Ga.call(this,b);zb.call(this,b);null!==c&&a.attributeChangedCallback(this,b,c,null,null)});x(Element.prototype,"removeAttributeNS",function(b,c){if(1!==this.__CE_state)return Ab.call(this,b,c);var d=ja.call(this,b,c);Ab.call(this,b,c);var e=ja.call(this,b,c);d!==e&&a.attributeChangedCallback(this,c,d,e,b)});Bb?c(HTMLElement.prototype,Bb):Cb?c(Element.prototype,
Cb):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");Ha(a,Element.prototype,{Z:jd,append:kd});ld(a,{ja:md,Wa:nd,replaceWith:od,remove:pd})}function ld(a,b){var c=Element.prototype;function d(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];e=[];for(var f=[],g=0;g<d.length;g++){var m=d[g];m instanceof Element&&t(m)&&f.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)e.push(m);else e.push(m)}b.apply(this,
d);for(d=0;d<f.length;d++)a.a(f[d]);if(t(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&a.b(f)}}void 0!==b.ja&&(c.before=d(b.ja));void 0!==b.ja&&(c.after=d(b.Wa));void 0!==b.replaceWith&&x(c,"replaceWith",function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];e=[];for(var h=[],w=0;w<d.length;w++){var g=d[w];g instanceof Element&&t(g)&&h.push(g);if(g instanceof DocumentFragment)for(g=g.firstChild;g;g=g.nextSibling)e.push(g);else e.push(g)}w=t(this);b.replaceWith.apply(this,
d);for(d=0;d<h.length;d++)a.a(h[d]);if(w)for(a.a(this),d=0;d<e.length;d++)h=e[d],h instanceof Element&&a.b(h)});void 0!==b.remove&&x(c,"remove",function(){var c=t(this);b.remove.call(this);c&&a.a(this)})}function qd(a){function b(b,d){Object.defineProperty(b,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(b){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,b);else{var c=void 0;if(this.firstChild){var e=this.childNodes,h=e.length;if(0<h&&t(this)){c=Array(h);for(var w=
0;w<h;w++)c[w]=e[w]}}d.set.call(this,b);if(c)for(b=0;b<c.length;b++)a.a(c[b])}}})}x(Node.prototype,"insertBefore",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=Db.call(this,b,d);if(t(this))for(d=0;d<c.length;d++)a.b(c[d]);return b}c=t(b);d=Db.call(this,b,d);c&&a.a(b);t(this)&&a.b(b);return d});x(Node.prototype,"appendChild",function(b){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=ia.call(this,b);if(t(this))for(var e=
0;e<c.length;e++)a.b(c[e]);return b}c=t(b);e=ia.call(this,b);c&&a.a(b);t(this)&&a.b(b);return e});x(Node.prototype,"cloneNode",function(b){b=wb.call(this,b);this.ownerDocument.__CE_hasRegistry?a.f(b):a.l(b);return b});x(Node.prototype,"removeChild",function(b){var c=t(b),e=Fa.call(this,b);c&&a.a(b);return e});x(Node.prototype,"replaceChild",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=Eb.call(this,b,d);if(t(this))for(a.a(d),d=0;d<c.length;d++)a.b(c[d]);
return b}c=t(b);var f=Eb.call(this,b,d),k=t(this);k&&a.a(d);c&&a.a(b);k&&a.b(b);return f});Ia&&Ia.get?b(Node.prototype,Ia):a.s(function(a){b(a,{enumerable:!0,configurable:!0,get:function(){for(var a=[],b=0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)Fa.call(this,this.firstChild);ia.call(this,document.createTextNode(a))}})})}function rd(a){x(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=
a.c(b);if(c)return new c.constructor}b=Ea.call(this,b);a.g(b);return b});x(Document.prototype,"importNode",function(b,c){b=sd.call(this,b,c);this.__CE_hasRegistry?a.f(b):a.l(b);return b});x(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.c(c);if(d)return new d.constructor}b=td.call(this,b,c);a.g(b);return b});Ha(a,Document.prototype,{Z:ud,append:vd})}function Ha(a,b,c){function d(b){return function(c){for(var d=[],
e=0;e<arguments.length;++e)d[e-0]=arguments[e];e=[];for(var f=[],g=0;g<d.length;g++){var m=d[g];m instanceof Element&&t(m)&&f.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)e.push(m);else e.push(m)}b.apply(this,d);for(d=0;d<f.length;d++)a.a(f[d]);if(t(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&a.b(f)}}void 0!==c.Z&&(b.prepend=d(c.Z));void 0!==c.append&&(b.append=d(c.append))}function wd(a){window.HTMLElement=function(){function b(){var b=this.constructor,
d=a.w(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=Ea.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,a.g(e),e;d=e.length-1;var f=e[d];if(f===Fb)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");e[d]=Fb;Object.setPrototypeOf(f,b.prototype);a.g(f);return f}b.prototype=xd.prototype;
return b}()}function y(a){this.c=!1;this.a=a;this.h=new Map;this.f=function(a){return a()};this.b=!1;this.g=[];this.i=new Ja(a,document)}function Gb(){var a=this;this.b=this.a=void 0;this.f=new Promise(function(b){a.b=b;a.a&&b(a.a)})}function Ja(a,b){this.b=a;this.a=b;this.M=void 0;this.b.f(this.a);"loading"===this.a.readyState&&(this.M=new MutationObserver(this.f.bind(this)),this.M.observe(this.a,{childList:!0,subtree:!0}))}function B(){this.o=new Map;this.m=new Map;this.j=[];this.h=!1}function l(a,
b,c){if(a!==Hb)throw new TypeError("Illegal constructor");a=document.createDocumentFragment();a.__proto__=l.prototype;a.F(b,c);return a}function ka(a){if(!a.__shady||void 0===a.__shady.firstChild){a.__shady=a.__shady||{};a.__shady.firstChild=Ka(a);a.__shady.lastChild=La(a);Ib(a);for(var b=a.__shady.childNodes=S(a),c=0,d;c<b.length&&(d=b[c]);c++)d.__shady=d.__shady||{},d.__shady.parentNode=a,d.__shady.nextSibling=b[c+1]||null,d.__shady.previousSibling=b[c-1]||null,Jb(d)}}function yd(a){var b=a&&a.M;
b&&(b.X.delete(a.Ra),b.X.size||(a.Sa.__shady.T=null))}function zd(a,b){a.__shady=a.__shady||{};a.__shady.T||(a.__shady.T=new la);a.__shady.T.X.add(b);var c=a.__shady.T;return{Ra:b,M:c,Sa:a,takeRecords:function(){return c.takeRecords()}}}function la(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.X=new Set}function T(a){return a.__shady&&void 0!==a.__shady.firstChild}function G(a){return"ShadyRoot"===a.Ma}function Z(a){a=a.getRootNode();if(G(a))return a}function Ma(a,b){if(a&&b)for(var c=
Object.getOwnPropertyNames(b),d=0,e;d<c.length&&(e=c[d]);d++){var f=Object.getOwnPropertyDescriptor(b,e);f&&Object.defineProperty(a,e,f)}}function Na(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(d=0;d<c.length;d++)Ma(a,c[d]);return a}function Ad(a,b){for(var c in b)a[c]=b[c]}function Kb(a){Oa.push(a);Pa.textContent=Lb++}function Mb(a,b){for(;b;){if(b==a)return!0;b=b.parentNode}return!1}function Nb(a){Qa||(Qa=!0,Kb(ma));aa.push(a)}function ma(){Qa=!1;for(var a=!!aa.length;aa.length;)aa.shift()();
return a}function Bd(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})}function Ob(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}
function Pb(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}function Ra(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,k;e<f&&(k=d[e]);e++){a:{var h=k;var w=a;var g=b;switch(h.nodeType){case Node.ELEMENT_NODE:for(var m=h.localName,l="<"+m,q=h.attributes,n=0;w=q[n];n++)l+=" "+w.name+'="'+w.value.replace(Cd,Ob)+'"';l+=">";h=Dd[m]?l:l+Ra(h,g)+"</"+m+">";break a;case Node.TEXT_NODE:h=h.data;h=w&&Ed[w.localName]?h:h.replace(Fd,Ob);break a;case Node.COMMENT_NODE:h=
"\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),Error("not implemented");}}c+=h}return c}function U(a){C.currentNode=a;return C.parentNode()}function Ka(a){C.currentNode=a;return C.firstChild()}function La(a){C.currentNode=a;return C.lastChild()}function Qb(a){C.currentNode=a;return C.previousSibling()}function Rb(a){C.currentNode=a;return C.nextSibling()}function S(a){var b=[];C.currentNode=a;for(a=C.firstChild();a;)b.push(a),a=C.nextSibling();return b}function Sb(a){D.currentNode=
a;return D.parentNode()}function Tb(a){D.currentNode=a;return D.firstChild()}function Ub(a){D.currentNode=a;return D.lastChild()}function Vb(a){D.currentNode=a;return D.previousSibling()}function Wb(a){D.currentNode=a;return D.nextSibling()}function Xb(a){var b=[];D.currentNode=a;for(a=D.firstChild();a;)b.push(a),a=D.nextSibling();return b}function Yb(a){return Ra(a,function(a){return S(a)})}function Zb(a){switch(a.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:a=document.createTreeWalker(a,
NodeFilter.SHOW_TEXT,null,!1);for(var b="",c;c=a.nextNode();)b+=c.nodeValue;return b;default:return a.nodeValue}}function K(a,b,c){for(var d in b){var e=Object.getOwnPropertyDescriptor(a,d);e&&e.configurable||!e&&c?Object.defineProperty(a,d,b[d]):c&&console.warn("Could not define",d,"on",a)}}function P(a){K(a,$b);K(a,Sa);K(a,Ta)}function ac(a,b,c){Jb(a);c=c||null;a.__shady=a.__shady||{};b.__shady=b.__shady||{};c&&(c.__shady=c.__shady||{});a.__shady.previousSibling=c?c.__shady.previousSibling:b.lastChild;
var d=a.__shady.previousSibling;d&&d.__shady&&(d.__shady.nextSibling=a);(d=a.__shady.nextSibling=c)&&d.__shady&&(d.__shady.previousSibling=a);a.__shady.parentNode=b;c?c===b.__shady.firstChild&&(b.__shady.firstChild=a):(b.__shady.lastChild=a,b.__shady.firstChild||(b.__shady.firstChild=a));b.__shady.childNodes=null}function Ua(a,b,c){if(b===a)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(c){var d=c.__shady&&c.__shady.parentNode;if(void 0!==d&&
d!==a||void 0===d&&U(c)!==a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(c===b)return b;b.parentNode&&Va(b.parentNode,b);d=Z(a);var e;if(e=d)a:{if(!b.__noInsertionPoint){var f;"slot"===b.localName?f=[b]:b.querySelectorAll&&(f=b.querySelectorAll("slot"));if(f&&f.length){e=f;break a}}e=void 0}(f=e)&&d.Qa(f);d&&("slot"===a.localName||f)&&d.L();if(T(a)){d=c;Ib(a);a.__shady=a.__shady||{};void 0!==a.__shady.firstChild&&
(a.__shady.childNodes=null);if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE){f=b.childNodes;for(e=0;e<f.length;e++)ac(f[e],a,d);b.__shady=b.__shady||{};d=void 0!==b.__shady.firstChild?null:void 0;b.__shady.firstChild=b.__shady.lastChild=d;b.__shady.childNodes=d}else ac(b,a,d);if(Wa(a)){a.__shady.root.L();var k=!0}else a.__shady.root&&(k=!0)}k||(k=G(a)?a.host:a,c?(c=bc(c),Xa.call(k,b,c)):cc.call(k,b));dc(a,b);return b}function Va(a,b){if(b.parentNode!==a)throw Error("The node to be removed is not a child of this node: "+
b);var c=Z(b);if(T(a)){b.__shady=b.__shady||{};a.__shady=a.__shady||{};b===a.__shady.firstChild&&(a.__shady.firstChild=b.__shady.nextSibling);b===a.__shady.lastChild&&(a.__shady.lastChild=b.__shady.previousSibling);var d=b.__shady.previousSibling;var e=b.__shady.nextSibling;d&&(d.__shady=d.__shady||{},d.__shady.nextSibling=e);e&&(e.__shady=e.__shady||{},e.__shady.previousSibling=d);b.__shady.parentNode=b.__shady.previousSibling=b.__shady.nextSibling=void 0;void 0!==a.__shady.childNodes&&(a.__shady.childNodes=
null);if(Wa(a)){a.__shady.root.L();var f=!0}}ec(b);c&&((e=a&&"slot"===a.localName)&&(f=!0),((d=c.Ta(b))||e)&&c.L());f||(f=G(a)?a.host:a,(!a.__shady.root&&"slot"!==b.localName||f===U(b))&&ba.call(f,b));dc(a,null,b);return b}function ec(a){if(a.__shady&&void 0!==a.__shady.ma)for(var b=a.childNodes,c=0,d=b.length,e;c<d&&(e=b[c]);c++)ec(e);a.__shady&&(a.__shady.ma=void 0)}function bc(a){var b=a;a&&"slot"===a.localName&&(b=(b=a.__shady&&a.__shady.R)&&b.length?b[0]:bc(a.nextSibling));return b}function Wa(a){return(a=
a&&a.__shady&&a.__shady.root)&&a.ta()}function fc(a,b){"slot"===b?(a=a.parentNode,Wa(a)&&a.__shady.root.L()):"slot"===a.localName&&"name"===b&&(b=Z(a))&&(b.Va(a),b.L())}function dc(a,b,c){if(a=a.__shady&&a.__shady.T)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),a.hb()}function gc(a){if(a&&a.nodeType){a.__shady=a.__shady||{};var b=a.__shady.ma;void 0===b&&(G(a)?b=a:b=(b=a.parentNode)?gc(b):a,ca.call(document.documentElement,a)&&(a.__shady.ma=b));return b}}function na(a,b,c){var d=[];hc(a.childNodes,
b,c,d);return d}function hc(a,b,c,d){for(var e=0,f=a.length,k;e<f&&(k=a[e]);e++){var h;if(h=k.nodeType===Node.ELEMENT_NODE){h=k;var w=b,g=c,m=d,l=w(h);l&&m.push(h);g&&g(l)?h=l:(hc(h.childNodes,w,g,m),h=void 0)}if(h)break}}function ic(a){a=a.getRootNode();G(a)&&a.va()}function jc(a,b,c){oa||(oa=window.ShadyCSS&&window.ShadyCSS.ScopingShim);oa&&"class"===b?oa.setElementClass(a,c):(kc.call(a,b,c),fc(a,b))}function lc(a,b){if(a.ownerDocument!==document)return Ya.call(document,a,b);var c=Ya.call(document,
a,!1);if(b){a=a.childNodes;b=0;for(var d;b<a.length;b++)d=lc(a[b],!0),c.appendChild(d)}return c}function Za(a,b){var c=[],d=a;for(a=a===window?window:a.getRootNode();d;)c.push(d),d=d.assignedSlot?d.assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.parentNode;c[c.length-1]===document&&c.push(window);return c}function mc(a,b){if(!G)return a;a=Za(a,!0);for(var c=0,d,e,f,k;c<b.length;c++)if(d=b[c],f=d===window?window:d.getRootNode(),f!==e&&(k=a.indexOf(f),e=f),!G(f)||
-1<k)return d}function $a(a){function b(b,d){b=new a(b,d);b.ea=d&&!!d.composed;return b}Ad(b,a);b.prototype=a.prototype;return b}function nc(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&a.target!==a.relatedTarget&&(e.call(b,a),!a.Ka);d++);}function Gd(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];nc(a,d,"capture");if(a.fa)return}Object.defineProperty(a,
"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=d.__shady&&d.__shady.root;if(0===c||f&&f===e)if(nc(a,d,"bubble"),d!==window&&(e=d.getRootNode()),a.fa)break}}function oc(a,b,c,d,e,f){for(var k=0;k<a.length;k++){var h=a[k],w=h.type,g=h.capture,m=h.once,l=h.passive;if(b===h.node&&c===w&&d===g&&e===m&&f===l)return k}return-1}function pc(a,b,c){if(b){if("object"===typeof c){var d=!!c.capture;var e=!!c.once;var f=!!c.passive}else d=!!c,f=e=!1;var k=c&&c.ga||
this,h=b[da];if(h){if(-1<oc(h,k,a,d,e,f))return}else b[da]=[];h=function(d){e&&this.removeEventListener(a,b,c);d.__target||qc(d);if(k!==this){var f=Object.getOwnPropertyDescriptor(d,"currentTarget");Object.defineProperty(d,"currentTarget",{get:function(){return k},configurable:!0})}if(d.composed||-1<d.composedPath().indexOf(k))if(d.target===d.relatedTarget)d.eventPhase===Event.BUBBLING_PHASE&&d.stopImmediatePropagation();else if(d.eventPhase===Event.CAPTURING_PHASE||d.bubbles||d.target===k){var h=
"object"===typeof b&&b.handleEvent?b.handleEvent(d):b.call(k,d);k!==this&&(f?(Object.defineProperty(d,"currentTarget",f),f=null):delete d.currentTarget);return h}};b[da].push({node:this,type:a,capture:d,once:e,passive:f,lb:h});ab[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][d?"capture":"bubble"].push(h)):(this instanceof Window?rc:sc).call(this,a,h,c)}}function tc(a,b,c){if(b){if("object"===typeof c){var d=!!c.capture;var e=
!!c.once;var f=!!c.passive}else d=!!c,f=e=!1;var k=c&&c.ga||this,h=void 0;var g=null;try{g=b[da]}catch(r){}g&&(e=oc(g,k,a,d,e,f),-1<e&&(h=g.splice(e,1)[0].lb,g.length||(b[da]=void 0)));(this instanceof Window?uc:vc).call(this,a,h||b,c);h&&ab[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][d?"capture":"bubble"],h=a.indexOf(h),-1<h&&a.splice(h,1))}}function Hd(){for(var a in ab)window.addEventListener(a,function(a){a.__target||(qc(a),Gd(a))},!0)}function qc(a){a.__target=a.target;a.ra=
a.relatedTarget;if(E.S){var b=wc,c=Object.getPrototypeOf(a);if(!c.hasOwnProperty("__patchProto")){var d=Object.create(c);d.nb=c;Ma(d,b);c.__patchProto=d}a.__proto__=c.__patchProto}else Ma(a,wc)}function ea(a,b){return{index:a,U:[],W:b}}function Id(a,b,c,d){var e=0,f=0,k=0,h=0,g=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(k=0;k<g;k++)if(a[k]!==c[k])break a;k=g}if(b==a.length&&d==c.length){h=a.length;for(var r=c.length,m=0;m<g-k&&Jd(a[--h],c[--r]);)m++;h=m}e+=k;f+=k;b-=h;d-=h;if(0==b-e&&0==d-f)return[];
if(e==b){for(b=ea(e,0);f<d;)b.U.push(c[f++]);return[b]}if(f==d)return[ea(e,b-e)];g=e;k=f;d=d-k+1;h=b-g+1;b=Array(d);for(r=0;r<d;r++)b[r]=Array(h),b[r][0]=r;for(r=0;r<h;r++)b[0][r]=r;for(r=1;r<d;r++)for(m=1;m<h;m++)if(a[g+m-1]===c[k+r-1])b[r][m]=b[r-1][m-1];else{var l=b[r-1][m]+1,n=b[r][m-1]+1;b[r][m]=l<n?l:n}g=b.length-1;k=b[0].length-1;d=b[g][k];for(a=[];0<g||0<k;)0==g?(a.push(2),k--):0==k?(a.push(3),g--):(h=b[g-1][k-1],r=b[g-1][k],m=b[g][k-1],l=r<m?r<h?r:h:m<h?m:h,l==h?(h==d?a.push(0):(a.push(1),
d=h),g--,k--):l==r?(a.push(3),g--,d=r):(a.push(2),k--,d=m));a.reverse();b=void 0;g=[];for(k=0;k<a.length;k++)switch(a[k]){case 0:b&&(g.push(b),b=void 0);e++;f++;break;case 1:b||(b=ea(e,0));b.W++;e++;b.U.push(c[f]);f++;break;case 2:b||(b=ea(e,0));b.W++;e++;break;case 3:b||(b=ea(e,0)),b.U.push(c[f]),f++}b&&g.push(b);return g}function Jd(a,b){return a===b}function xc(a){var b=[];do b.unshift(a);while(a=a.parentNode);return b}function yc(a){ic(a);return a.__shady&&a.__shady.assignedSlot||null}function L(a,
b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f.value?a[e]=f.value:Object.defineProperty(a,e,f)}}function Kd(){var a=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;L(window.Node.prototype,Ld);L(window.Window.prototype,Md);L(window.Text.prototype,Nd);L(window.DocumentFragment.prototype,bb);L(window.Element.prototype,zc);L(window.Document.prototype,Ac);window.HTMLSlotElement&&L(window.HTMLSlotElement.prototype,
Bc);L(a.prototype,Od);E.S&&(P(window.Node.prototype),P(window.Text.prototype),P(window.DocumentFragment.prototype),P(window.Element.prototype),P(a.prototype),P(window.Document.prototype),window.HTMLSlotElement&&P(window.HTMLSlotElement.prototype))}function Cc(a){var b=Pd.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function t(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?
a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}function cb(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}function O(a,b,c){c=c?c:new Set;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)O(d,b,c);d=cb(a,e);continue}else if("template"===f){d=cb(a,e);continue}if(e=
e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)O(e,b,c)}d=d.firstChild?d.firstChild:cb(a,d)}}function x(a,b,c){a[b]=c}function db(a){a=a.replace(F.Ya,"").replace(F.port,"");var b=Dc,c=a,d=new Ba;d.start=0;d.end=c.length;for(var e=d,f=0,k=c.length;f<k;f++)if("{"===c[f]){e.rules||(e.rules=[]);var h=e,g=h.rules[h.rules.length-1]||null;e=new Ba;e.start=f+1;e.parent=h;e.previous=g;h.rules.push(e)}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);return b(d,a)}function Dc(a,b){var c=b.substring(a.start,
a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=Qd(c),c=c.replace(F.Ba," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=I.MEDIA_RULE:c.match(F.cb)&&(a.type=I.da,a.keyframesName=a.selector.split(F.Ba).pop()):a.type=0===c.indexOf("--")?I.na:I.STYLE_RULE);if(c=a.rules)for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)Dc(f,b);return a}function Qd(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,
function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return"\\"+a})}function Ec(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var k=e.length,h;f<k&&(h=e[f]);f++)d=Ec(h,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(F.wa,"").replace(F.Aa,""),b=b.replace(F.eb,"").replace(F.jb,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}function Fc(a){A=
a&&a.shimcssproperties?!1:z||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}function V(a,b){if(!a)return"";"string"===typeof a&&(a=db(a));b&&W(a,b);return Ec(a,A)}function pa(a){!a.__cssRules&&a.textContent&&(a.__cssRules=db(a.textContent));return a.__cssRules||null}function Gc(a){return!!a.parent&&a.parent.type===I.da}function W(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===I.MEDIA_RULE){var k=a.selector.match(Rd);
k&&(window.matchMedia(k[1]).matches||(e=!0))}f===I.STYLE_RULE?b(a):c&&f===I.da?c(a):f===I.na&&(e=!0);if((a=a.rules)&&!e){e=0;f=a.length;for(var h;e<f&&(h=a[e]);e++)W(h,b,c,d)}}}function eb(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;Hc(e,c,d);return e}function Hc(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);Q?a.compareDocumentPosition(Q)===Node.DOCUMENT_POSITION_PRECEDING&&(Q=a):Q=a}function Ic(a,b){var c=a.indexOf("var(");
if(-1===c)return b(a,"","","");a:{var d=0;var e=c+3;for(var f=a.length;e<f;e++)if("("===a[e])d++;else if(")"===a[e]&&0===--d)break a;e=-1}d=a.substring(c+4,e);c=a.substring(0,c);a=Ic(a.substring(e+1),b);e=d.indexOf(",");return-1===e?b(c,d.trim(),"",a):b(c,d.substring(0,e).trim(),d.substring(e+1).trim(),a)}function qa(a,b){z?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}function R(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||
""):(b=a.is,c=a.extends);return{is:b,V:c}}function Jc(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode();var k=e;var h=[];k.classList?h=Array.from(k.classList):k instanceof window.SVGElement&&k.hasAttribute("class")&&(h=k.getAttribute("class").split(/\s+/));k=h;h=k.indexOf(p.a);if((k=-1<h?k[h+1]:"")&&f===e.ownerDocument)p.b(e,
k,!0);else if(f.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(f=f.host))if(f=R(f).is,k===f)for(e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+p.a+")"),f=0;f<e.length;f++)p.h(e[f],k);else k&&p.b(e,k,!0),p.b(e,f)}}}}function Sd(a){if(a=ra[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function Kc(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}
function Td(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a.b||(a.b=!0,Ud.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a.b=!1}))}function ub(a){requestAnimationFrame(function(){Lc?Lc(a):(fb||(fb=new Promise(function(a){gb=a}),"complete"===document.readyState?gb():document.addEventListener("readystatechange",function(){"complete"===document.readyState&&gb()})),fb.then(function(){a&&a()}))})}(function(a){function b(a,b){if("function"===typeof window.CustomEvent)return new CustomEvent(a,
b);var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c}function c(a){if(m)return a.ownerDocument!==document?a.ownerDocument:null;var b=a.__importDoc;if(!b&&a.parentNode){b=a.parentNode;if("function"===typeof b.closest)b=b.closest("link[rel=import]");else for(;!h(b)&&(b=b.parentNode););a.__importDoc=b}return b}function d(a){var b=document.querySelectorAll("link[rel=import]:not([import-dependency])"),c=b.length;c?l(b,function(b){return k(b,function(){0===
--c&&a()})}):a()}function e(a){function b(){"loading"!==document.readyState&&document.body&&(document.removeEventListener("readystatechange",b),a())}document.addEventListener("readystatechange",b);b()}function f(a){e(function(){return d(function(){return a&&a()})})}function k(a,b){if(a.__loaded)b&&b();else if("script"===a.localName&&!a.src||"style"===a.localName&&!a.firstChild)a.__loaded=!0,b&&b();else{var c=function(d){a.removeEventListener(d.type,c);a.__loaded=!0;b&&b()};a.addEventListener("load",
c);z&&"style"===a.localName||a.addEventListener("error",c)}}function h(a){return a.nodeType===Node.ELEMENT_NODE&&"link"===a.localName&&"import"===a.rel}function g(){var a=this;this.a={};this.b=0;this.f=new MutationObserver(function(b){return a.l(b)});this.f.observe(document.head,{childList:!0,subtree:!0});this.c(document)}function l(a,b,c){var d=a?a.length:0,e=c?-1:1;for(c=c?d-1:0;c<d&&0<=c;c+=e)b(a[c],c)}var m="import"in document.createElement("link"),n=null;!1==="currentScript"in document&&Object.defineProperty(document,
"currentScript",{get:function(){return n||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null)},configurable:!0});var q=/(url\()([^)]*)(\))/g,t=/(@import[\s]+(?!url\())([^;]*)(;)/g,u=/(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,p={Za:function(a,b){a.href&&a.setAttribute("href",p.$(a.getAttribute("href"),b));a.src&&a.setAttribute("src",p.$(a.getAttribute("src"),b));if("style"===a.localName){var c=p.Ca(a.textContent,b,q);a.textContent=p.Ca(c,b,t)}},Ca:function(a,
b,c){return a.replace(c,function(a,c,d,e){a=d.replace(/["']/g,"");b&&(a=p.$(a,b));return c+"'"+a+"'"+e})},$:function(a,b){if(void 0===p.ha){p.ha=!1;try{var c=new URL("b","http://a");c.pathname="c%20d";p.ha="http://a/c%20d"===c.href}catch(se){}}if(p.ha)return(new URL(a,b)).href;c=p.Pa;c||(c=document.implementation.createHTMLDocument("temp"),p.Pa=c,c.pa=c.createElement("base"),c.head.appendChild(c.pa),c.oa=c.createElement("a"));c.pa.href=b;c.oa.href=a;return c.oa.href||a}},v={async:!0,load:function(a,
b,c){if(a)if(a.match(/^data:/)){a=a.split(",");var d=a[1];d=-1<a[0].indexOf(";base64")?atob(d):decodeURIComponent(d);b(d)}else{var e=new XMLHttpRequest;e.open("GET",a,v.async);e.onload=function(){var a=e.responseURL||e.getResponseHeader("Location");a&&0===a.indexOf("/")&&(a=(location.origin||location.protocol+"//"+location.host)+a);var d=e.response||e.responseText;304===e.status||0===e.status||200<=e.status&&300>e.status?b(d,a):c(d)};e.send()}else c("error: href must be specified")}},z=/Trident/.test(navigator.userAgent)||
/Edge\/\d./i.test(navigator.userAgent);g.prototype.c=function(a){var b=this;a=a.querySelectorAll("link[rel=import]");l(a,function(a){return b.h(a)})};g.prototype.h=function(a){var b=this,c=a.href;if(void 0!==this.a[c]){var d=this.a[c];d&&d.__loaded&&(a.import=d,this.g(a))}else this.b++,this.a[c]="pending",v.load(c,function(a,d){a=b.m(a,d||c);b.a[c]=a;b.b--;b.c(a);b.i()},function(){b.a[c]=null;b.b--;b.i()})};g.prototype.m=function(a,b){if(!a)return document.createDocumentFragment();z&&(a=a.replace(u,
function(a,b,c){return-1===a.indexOf("type=")?b+" type=import-disable "+c:a}));var c=document.createElement("template");c.innerHTML=a;if(c.content)a=c.content;else for(a=document.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);if(c=a.querySelector("base"))b=p.$(c.getAttribute("href"),b),c.removeAttribute("href");c=a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]');
var d=0;l(c,function(a){k(a);p.Za(a,b);a.setAttribute("import-dependency","");"script"===a.localName&&!a.src&&a.textContent&&(a.setAttribute("src","data:text/javascript;charset=utf-8,"+encodeURIComponent(a.textContent+("\n//# sourceURL="+b+(d?"-"+d:"")+".js\n"))),a.textContent="",d++)});return a};g.prototype.i=function(){var a=this;if(!this.b){this.f.disconnect();this.flatten(document);var b=!1,c=!1,d=function(){c&&b&&(a.c(document),a.b||(a.f.observe(document.head,{childList:!0,subtree:!0}),a.j()))};
this.s(function(){c=!0;d()});this.o(function(){b=!0;d()})}};g.prototype.flatten=function(a){var b=this;a=a.querySelectorAll("link[rel=import]");l(a,function(a){var c=b.a[a.href];(a.import=c)&&c.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(b.a[a.href]=a,a.readyState="loading",a.import=a,b.flatten(c),a.appendChild(c))})};g.prototype.o=function(a){function b(e){if(e<d){var f=c[e],g=document.createElement("script");f.removeAttribute("import-dependency");l(f.attributes,function(a){return g.setAttribute(a.name,
a.value)});n=g;f.parentNode.replaceChild(g,f);k(g,function(){n=null;b(e+1)})}else a()}var c=document.querySelectorAll("script[import-dependency]"),d=c.length;b(0)};g.prototype.s=function(a){var b=document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),d=b.length;if(d){var e=z&&!!document.querySelector("link[rel=stylesheet][href][type=import-disable]");l(b,function(b){k(b,function(){b.removeAttribute("import-dependency");0===--d&&a()});if(e&&b.parentNode!==
document.head){var f=document.createElement(b.localName);f.__appliedElement=b;f.setAttribute("type","import-placeholder");b.parentNode.insertBefore(f,b.nextSibling);for(f=c(b);f&&c(f);)f=c(f);f.parentNode!==document.head&&(f=null);document.head.insertBefore(b,f);b.removeAttribute("type")}})}else a()};g.prototype.j=function(){var a=this,b=document.querySelectorAll("link[rel=import]");l(b,function(b){return a.g(b)},!0)};g.prototype.g=function(a){a.__loaded||(a.__loaded=!0,a.import&&(a.import.readyState=
"complete"),a.dispatchEvent(b(a.import?"load":"error",{bubbles:!1,cancelable:!1,detail:void 0})))};g.prototype.l=function(a){var b=this;l(a,function(a){return l(a.addedNodes,function(a){a&&a.nodeType===Node.ELEMENT_NODE&&(h(a)?b.h(a):b.c(a))})})};if(m){var x=document.querySelectorAll("link[rel=import]");l(x,function(a){a.import&&"loading"===a.import.readyState||(a.__loaded=!0)});x=function(a){a=a.target;h(a)&&(a.__loaded=!0)};document.addEventListener("load",x,!0);document.addEventListener("error",
x,!0)}else{var y=Object.getOwnPropertyDescriptor(Node.prototype,"baseURI");Object.defineProperty((!y||y.configurable?Node:Element).prototype,"baseURI",{get:function(){var a=h(this)?this:c(this);return a?a.href:y&&y.get?y.get.call(this):(document.querySelector("base")||window.location).href},configurable:!0,enumerable:!0});e(function(){return new g})}f(function(){return document.dispatchEvent(b("HTMLImportsLoaded",{cancelable:!0,bubbles:!0,detail:void 0}))});a.useNative=m;a.whenReady=f;a.importForElement=
c})(window.HTMLImports=window.HTMLImports||{});var E=window.ShadyDOM||{};E.$a=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var hb=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");E.S=!!(hb&&hb.configurable&&hb.get);E.za=E.force||!E.$a;var X=Element.prototype,Mc=X.matches||X.matchesSelector||X.mozMatchesSelector||X.msMatchesSelector||X.oMatchesSelector||X.webkitMatchesSelector,Pa=document.createTextNode(""),Lb=0,Oa=[];(new MutationObserver(function(){for(;Oa.length;)try{Oa.shift()()}catch(a){throw Pa.textContent=
Lb++,a;}})).observe(Pa,{characterData:!0});var Vd=!!document.contains,aa=[],Qa;ma.list=aa;la.prototype.hb=function(){var a=this;this.a||(this.a=!0,Kb(function(){a.b()}))};la.prototype.b=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.X.forEach(function(b){b(a)})}};la.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
var cc=Element.prototype.appendChild,Xa=Element.prototype.insertBefore,ba=Element.prototype.removeChild,kc=Element.prototype.setAttribute,Nc=Element.prototype.removeAttribute,ib=Element.prototype.cloneNode,Ya=Document.prototype.importNode,sc=Element.prototype.addEventListener,vc=Element.prototype.removeEventListener,rc=Window.prototype.addEventListener,uc=Window.prototype.removeEventListener,jb=Element.prototype.dispatchEvent,ca=Node.prototype.contains||HTMLElement.prototype.contains,Wd=Object.freeze({appendChild:cc,
insertBefore:Xa,removeChild:ba,setAttribute:kc,removeAttribute:Nc,cloneNode:ib,importNode:Ya,addEventListener:sc,removeEventListener:vc,rb:rc,sb:uc,dispatchEvent:jb,querySelector:Element.prototype.querySelector,querySelectorAll:Element.prototype.querySelectorAll,contains:ca}),Cd=/[&\u00A0"]/g,Fd=/[&\u00A0<>]/g,Dd=Pb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),Ed=Pb("style script xmp iframe noembed noframes plaintext noscript".split(" ")),C=document.createTreeWalker(document,
NodeFilter.SHOW_ALL,null,!1),D=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),Xd=Object.freeze({parentNode:U,firstChild:Ka,lastChild:La,previousSibling:Qb,nextSibling:Rb,childNodes:S,parentElement:Sb,firstElementChild:Tb,lastElementChild:Ub,previousElementSibling:Vb,nextElementSibling:Wb,children:Xb,innerHTML:Yb,textContent:Zb}),kb=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML")||Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML"),sa=document.implementation.createHTMLDocument("inert").createElement("div"),
lb=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),$b={parentElement:{get:function(){var a=this.__shady&&this.__shady.parentNode;a&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:Sb(this)},configurable:!0},parentNode:{get:function(){var a=this.__shady&&this.__shady.parentNode;return void 0!==a?a:U(this)},configurable:!0},nextSibling:{get:function(){var a=this.__shady&&this.__shady.nextSibling;return void 0!==a?a:Rb(this)},configurable:!0},previousSibling:{get:function(){var a=
this.__shady&&this.__shady.previousSibling;return void 0!==a?a:Qb(this)},configurable:!0},className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)},configurable:!0},nextElementSibling:{get:function(){if(this.__shady&&void 0!==this.__shady.nextSibling){for(var a=this.nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return Wb(this)},configurable:!0},previousElementSibling:{get:function(){if(this.__shady&&void 0!==this.__shady.previousSibling){for(var a=
this.previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return Vb(this)},configurable:!0}},Sa={childNodes:{get:function(){if(T(this)){if(!this.__shady.childNodes){this.__shady.childNodes=[];for(var a=this.firstChild;a;a=a.nextSibling)this.__shady.childNodes.push(a)}var b=this.__shady.childNodes}else b=S(this);b.item=function(a){return b[a]};return b},configurable:!0},childElementCount:{get:function(){return this.children.length},configurable:!0},firstChild:{get:function(){var a=
this.__shady&&this.__shady.firstChild;return void 0!==a?a:Ka(this)},configurable:!0},lastChild:{get:function(){var a=this.__shady&&this.__shady.lastChild;return void 0!==a?a:La(this)},configurable:!0},textContent:{get:function(){if(T(this)){for(var a=[],b=0,c=this.childNodes,d;d=c[b];b++)d.nodeType!==Node.COMMENT_NODE&&a.push(d.textContent);return a.join("")}return Zb(this)},set:function(a){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(;this.firstChild;)this.removeChild(this.firstChild);
(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.appendChild(document.createTextNode(a));break;default:this.nodeValue=a}},configurable:!0},firstElementChild:{get:function(){if(this.__shady&&void 0!==this.__shady.firstChild){for(var a=this.firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return Tb(this)},configurable:!0},lastElementChild:{get:function(){if(this.__shady&&void 0!==this.__shady.lastChild){for(var a=this.lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;
return a}return Ub(this)},configurable:!0},children:{get:function(){var a;T(this)?a=Array.prototype.filter.call(this.childNodes,function(a){return a.nodeType===Node.ELEMENT_NODE}):a=Xb(this);a.item=function(b){return a[b]};return a},configurable:!0},innerHTML:{get:function(){var a="template"===this.localName?this.content:this;return T(this)?Ra(a):Yb(a)},set:function(a){for(var b="template"===this.localName?this.content:this;b.firstChild;)b.removeChild(b.firstChild);for(kb&&kb.set?kb.set.call(sa,a):
sa.innerHTML=a;sa.firstChild;)b.appendChild(sa.firstChild)},configurable:!0}},Oc={shadowRoot:{get:function(){return this.__shady&&this.__shady.fb||null},configurable:!0}},Ta={activeElement:{get:function(){var a=lb&&lb.get?lb.get.call(document):E.S?void 0:document.activeElement;if(a&&a.nodeType){var b=!!G(this);if(this===document||b&&this.host!==a&&ca.call(this.host,a)){for(b=Z(a);b&&b!==this;)a=b.host,b=Z(a);a=this===document?b?null:a:b===this?a:null}else a=null}else a=null;return a},set:function(){},
configurable:!0}},Jb=E.S?function(){}:function(a){a.__shady&&a.__shady.Na||(a.__shady=a.__shady||{},a.__shady.Na=!0,K(a,$b,!0))},Ib=E.S?function(){}:function(a){a.__shady&&a.__shady.La||(a.__shady=a.__shady||{},a.__shady.La=!0,K(a,Sa,!0),K(a,Oc,!0))},oa=null,da="__eventWrappers"+Date.now(),Yd={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,
compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},wc={get composed(){!1!==this.isTrusted&&void 0===this.ea&&(this.ea=Yd[this.type]);return this.ea||!1},composedPath:function(){this.qa||
(this.qa=Za(this.__target,this.composed));return this.qa},get target(){return mc(this.currentTarget,this.composedPath())},get relatedTarget(){if(!this.ra)return null;this.sa||(this.sa=Za(this.ra,!0));return mc(this.currentTarget,this.sa)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.fa=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.fa=this.Ka=!0}},ab={focus:!0,blur:!0},Zd=$a(window.Event),$d=$a(window.CustomEvent),ae=
$a(window.MouseEvent),Hb={};l.prototype=Object.create(DocumentFragment.prototype);l.prototype.F=function(a,b){this.Ma="ShadyRoot";ka(a);ka(this);this.host=a;this.H=b&&b.mode;a.__shady=a.__shady||{};a.__shady.root=this;a.__shady.fb="closed"!==this.H?this:null;this.P=!1;this.b=[];this.a={};this.c=[];b=S(a);for(var c=0,d=b.length;c<d;c++)ba.call(a,b[c])};l.prototype.L=function(){var a=this;this.P||(this.P=!0,Nb(function(){return a.va()}))};l.prototype.K=function(){for(var a=this,b=this;b;)b.P&&(a=b),
b=b.Ua();return a};l.prototype.Ua=function(){var a=this.host.getRootNode();if(G(a))for(var b=this.host.childNodes,c=0,d;c<b.length;c++)if(d=b[c],this.j(d))return a};l.prototype.va=function(){this.P&&this.K()._renderRoot()};l.prototype._renderRoot=function(){this.P=!1;this.B();this.s()};l.prototype.B=function(){this.f();for(var a=0,b;a<this.b.length;a++)b=this.b[a],this.o(b);for(b=this.host.firstChild;b;b=b.nextSibling)this.h(b);for(a=0;a<this.b.length;a++){b=this.b[a];if(!b.__shady.assignedNodes.length)for(var c=
b.firstChild;c;c=c.nextSibling)this.h(c,b);c=b.parentNode;(c=c.__shady&&c.__shady.root)&&c.ta()&&c._renderRoot();this.g(b.__shady.R,b.__shady.assignedNodes);if(c=b.__shady.ua){for(var d=0;d<c.length;d++)c[d].__shady.ia=null;b.__shady.ua=null;c.length>b.__shady.assignedNodes.length&&(b.__shady.ka=!0)}b.__shady.ka&&(b.__shady.ka=!1,this.i(b))}};l.prototype.h=function(a,b){a.__shady=a.__shady||{};var c=a.__shady.ia;a.__shady.ia=null;b||(b=(b=this.a[a.slot||"__catchall"])&&b[0]);b?(b.__shady.assignedNodes.push(a),
a.__shady.assignedSlot=b):a.__shady.assignedSlot=void 0;c!==a.__shady.assignedSlot&&a.__shady.assignedSlot&&(a.__shady.assignedSlot.__shady.ka=!0)};l.prototype.o=function(a){var b=a.__shady.assignedNodes;a.__shady.assignedNodes=[];a.__shady.R=[];if(a.__shady.ua=b)for(var c=0;c<b.length;c++){var d=b[c];d.__shady.ia=d.__shady.assignedSlot;d.__shady.assignedSlot===a&&(d.__shady.assignedSlot=null)}};l.prototype.g=function(a,b){for(var c=0,d;c<b.length&&(d=b[c]);c++)"slot"==d.localName?this.g(a,d.__shady.assignedNodes):
a.push(b[c])};l.prototype.i=function(a){jb.call(a,new Event("slotchange"));a.__shady.assignedSlot&&this.i(a.__shady.assignedSlot)};l.prototype.s=function(){for(var a=this.b,b=[],c=0;c<a.length;c++){var d=a[c].parentNode;d.__shady&&d.__shady.root||!(0>b.indexOf(d))||b.push(d)}for(a=0;a<b.length;a++)c=b[a],this.O(c===this?this.host:c,this.w(c))};l.prototype.w=function(a){var b=[];a=a.childNodes;for(var c=0;c<a.length;c++){var d=a[c];if(this.j(d)){d=d.__shady.R;for(var e=0;e<d.length;e++)b.push(d[e])}else b.push(d)}return b};
l.prototype.j=function(a){return"slot"==a.localName};l.prototype.O=function(a,b){for(var c=S(a),d=Id(b,b.length,c,c.length),e=0,f=0,k;e<d.length&&(k=d[e]);e++){for(var g=0,l;g<k.U.length&&(l=k.U[g]);g++)U(l)===a&&ba.call(a,l),c.splice(k.index+f,1);f-=k.W}for(e=0;e<d.length&&(k=d[e]);e++)for(f=c[k.index],g=k.index;g<k.index+k.W;g++)l=b[g],Xa.call(a,l,f),c.splice(g,0,l)};l.prototype.Qa=function(a){this.c.push.apply(this.c,[].concat(a instanceof Array?a:hd(gd(a))))};l.prototype.f=function(){this.c.length&&
(this.G(this.c),this.c=[])};l.prototype.G=function(a){for(var b,c=0;c<a.length;c++){var d=a[c];d.__shady=d.__shady||{};ka(d);ka(d.parentNode);var e=this.l(d);this.a[e]?(b=b||{},b[e]=!0,this.a[e].push(d)):this.a[e]=[d];this.b.push(d)}if(b)for(var f in b)this.a[f]=this.m(this.a[f])};l.prototype.l=function(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Oa=b};l.prototype.m=function(a){return a.sort(function(a,c){a=xc(a);for(var b=xc(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=
Array.from(c.parentNode.childNodes),a.indexOf(c)-a.indexOf(f)}})};l.prototype.Ta=function(a){this.f();var b=this.a,c;for(c in b)for(var d=b[c],e=0;e<d.length;e++){var f=d[e];if(Mb(a,f)){d.splice(e,1);var k=this.b.indexOf(f);0<=k&&this.b.splice(k,1);e--;this.I(f);k=!0}}return k};l.prototype.Va=function(a){var b=a.Oa,c=this.l(a);if(c!==b){b=this.a[b];var d=b.indexOf(a);0<=d&&b.splice(d,1);b=this.a[c]||(this.a[c]=[]);b.push(a);1<b.length&&(this.a[c]=this.m(b))}};l.prototype.I=function(a){if(a=a.__shady.R)for(var b=
0;b<a.length;b++){var c=a[b],d=U(c);d&&ba.call(d,c)}};l.prototype.ta=function(){this.f();return!!this.b.length};l.prototype.addEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.ga=this;this.host.addEventListener(a,b,c)};l.prototype.removeEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.ga=this;this.host.removeEventListener(a,b,c)};l.prototype.getElementById=function(a){return na(this,function(b){return b.id==a},function(a){return!!a})[0]||null};(function(a){K(a,
Sa,!0);K(a,Ta,!0)})(l.prototype);var Md={addEventListener:pc.bind(window),removeEventListener:tc.bind(window)},Ld={addEventListener:pc,removeEventListener:tc,appendChild:function(a){return Ua(this,a)},insertBefore:function(a,b){return Ua(this,a,b)},removeChild:function(a){return Va(this,a)},replaceChild:function(a,b){Ua(this,a,b);Va(this,b);return a},cloneNode:function(a){if("template"==this.localName)var b=ib.call(this,a);else if(b=ib.call(this,!1),a){a=this.childNodes;for(var c=0,d;c<a.length;c++)d=
a[c].cloneNode(!0),b.appendChild(d)}return b},getRootNode:function(){return gc(this)},contains:function(a){return Mb(this,a)},get isConnected(){var a=this.ownerDocument;if(Vd&&ca.call(a,this)||a.documentElement&&ca.call(a.documentElement,this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.parentNode||(a instanceof l?a.host:void 0);return!!(a&&a instanceof Document)},dispatchEvent:function(a){ma();return jb.call(this,a)}},Nd={get assignedSlot(){return yc(this)}},bb={querySelector:function(a){return na(this,
function(b){return Mc.call(b,a)},function(a){return!!a})[0]||null},querySelectorAll:function(a){return na(this,function(b){return Mc.call(b,a)})}},Bc={assignedNodes:function(a){if("slot"===this.localName)return ic(this),this.__shady?(a&&a.flatten?this.__shady.R:this.__shady.assignedNodes)||[]:[]}},zc=Na({setAttribute:function(a,b){jc(this,a,b)},removeAttribute:function(a){Nc.call(this,a);fc(this,a)},attachShadow:function(a){if(!this)throw"Must provide a host.";if(!a)throw"Not enough arguments.";return new l(Hb,
this,a)},get slot(){return this.getAttribute("slot")},set slot(a){jc(this,"slot",a)},get assignedSlot(){return yc(this)}},bb,Bc);Object.defineProperties(zc,Oc);var Ac=Na({importNode:function(a,b){return lc(a,b)},getElementById:function(a){return na(this,function(b){return b.id==a},function(a){return!!a})[0]||null}},bb);Object.defineProperties(Ac,{_activeElement:Ta.activeElement});var be=HTMLElement.prototype.blur,Od=Na({blur:function(){var a=this.__shady&&this.__shady.root;(a=a&&a.activeElement)?
a.blur():be.call(this)}});E.za&&(window.ShadyDOM={inUse:E.za,patch:function(a){return a},isShadyRoot:G,enqueue:Nb,flush:ma,settings:E,filterMutations:Bd,observeChildren:zd,unobserveChildren:yd,nativeMethods:Wd,nativeTree:Xd},window.Event=Zd,window.CustomEvent=$d,window.MouseEvent=ae,Hd(),Kd(),window.ShadowRoot=l);var Pd=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));B.prototype.B=function(a,b){this.o.set(a,b);
this.m.set(b.constructor,b)};B.prototype.c=function(a){return this.o.get(a)};B.prototype.w=function(a){return this.m.get(a)};B.prototype.s=function(a){this.h=!0;this.j.push(a)};B.prototype.l=function(a){var b=this;this.h&&O(a,function(a){return b.g(a)})};B.prototype.g=function(a){if(this.h&&!a.__CE_patched){a.__CE_patched=!0;for(var b=0;b<this.j.length;b++)this.j[b](a)}};B.prototype.b=function(a){var b=[];O(a,function(a){return b.push(a)});for(a=0;a<b.length;a++){var c=b[a];1===c.__CE_state?this.connectedCallback(c):
this.i(c)}};B.prototype.a=function(a){var b=[];O(a,function(a){return b.push(a)});for(a=0;a<b.length;a++){var c=b[a];1===c.__CE_state&&this.disconnectedCallback(c)}};B.prototype.f=function(a,b){var c=this;b=b?b:{};var d=b.kb||new Set,e=b.Da||function(a){return c.i(a)},f=[];O(a,function(a){if("link"===a.localName&&"import"===a.getAttribute("rel")){var b=a.import;b instanceof Node&&"complete"===b.readyState?(b.__CE_isImportDocument=!0,b.__CE_hasRegistry=!0):a.addEventListener("load",function(){var b=
a.import;if(!b.__CE_documentLoadHandled){b.__CE_documentLoadHandled=!0;b.__CE_isImportDocument=!0;b.__CE_hasRegistry=!0;var f=new Set(d);f.delete(b);c.f(b,{kb:f,Da:e})}})}else f.push(a)},d);if(this.h)for(a=0;a<f.length;a++)this.g(f[a]);for(a=0;a<f.length;a++)e(f[a])};B.prototype.i=function(a){if(void 0===a.__CE_state){var b=this.c(a.localName);if(b){b.constructionStack.push(a);var c=b.constructor;try{try{if(new c!==a)throw Error("The custom element constructor did not produce the element being upgraded.");
}finally{b.constructionStack.pop()}}catch(f){throw a.__CE_state=2,f;}a.__CE_state=1;a.__CE_definition=b;if(b.attributeChangedCallback)for(b=b.observedAttributes,c=0;c<b.length;c++){var d=b[c],e=a.getAttribute(d);null!==e&&this.attributeChangedCallback(a,d,null,e,null)}t(a)&&this.connectedCallback(a)}}};B.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};B.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&
b.disconnectedCallback.call(a)};B.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e)};Ja.prototype.c=function(){this.M&&this.M.disconnect()};Ja.prototype.f=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||this.c();for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)this.b.f(c[d])};Gb.prototype.c=function(){if(this.a)throw Error("Already resolved.");
this.a=void 0;this.b&&this.b(void 0)};y.prototype.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!Cc(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.c(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+
a+"' callback must be a function.");return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var g=d("disconnectedCallback");var h=d("adoptedCallback");var l=d("attributeChangedCallback");var n=b.observedAttributes||[]}catch(m){return}finally{this.c=!1}b={localName:a,constructor:b,connectedCallback:f,disconnectedCallback:g,adoptedCallback:h,attributeChangedCallback:l,observedAttributes:n,constructionStack:[]};
this.a.B(a,b);this.g.push(b);this.b||(this.b=!0,this.f(function(){return c.j()}))};y.prototype.j=function(){var a=this;if(!1!==this.b){this.b=!1;for(var b=this.g,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);this.a.f(document,{Da:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.a.c(e)&&c.push(b)}}});for(e=0;e<c.length;e++)this.a.i(c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var g=0;g<f.length;g++)this.a.i(f[g]);(e=this.h.get(e))&&
e.c()}}};y.prototype.get=function(a){if(a=this.a.c(a))return a.constructor};y.prototype.whenDefined=function(a){if(!Cc(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.h.get(a);if(b)return b.f;b=new Gb;this.h.set(a,b);this.a.c(a)&&!this.g.some(function(b){return b.localName===a})&&b.c();return b.f};y.prototype.l=function(a){this.i.c();var b=this.f;this.f=function(c){return a(function(){return b(c)})}};window.CustomElementRegistry=y;y.prototype.define=
y.prototype.define;y.prototype.get=y.prototype.get;y.prototype.whenDefined=y.prototype.whenDefined;y.prototype.polyfillWrapFlushCallback=y.prototype.l;var Ea=window.Document.prototype.createElement,td=window.Document.prototype.createElementNS,sd=window.Document.prototype.importNode,ud=window.Document.prototype.prepend,vd=window.Document.prototype.append,ce=window.DocumentFragment.prototype.prepend,de=window.DocumentFragment.prototype.append,wb=window.Node.prototype.cloneNode,ia=window.Node.prototype.appendChild,
Db=window.Node.prototype.insertBefore,Fa=window.Node.prototype.removeChild,Eb=window.Node.prototype.replaceChild,Ia=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),vb=window.Element.prototype.attachShadow,Ca=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Ga=window.Element.prototype.getAttribute,xb=window.Element.prototype.setAttribute,zb=window.Element.prototype.removeAttribute,ja=window.Element.prototype.getAttributeNS,yb=window.Element.prototype.setAttributeNS,
Ab=window.Element.prototype.removeAttributeNS,Cb=window.Element.prototype.insertAdjacentElement,jd=window.Element.prototype.prepend,kd=window.Element.prototype.append,md=window.Element.prototype.before,nd=window.Element.prototype.after,od=window.Element.prototype.replaceWith,pd=window.Element.prototype.remove,xd=window.HTMLElement,Da=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Bb=window.HTMLElement.prototype.insertAdjacentElement,Fb=new function(){},ta=window.customElements;
if(!ta||ta.forcePolyfill||"function"!=typeof ta.define||"function"!=typeof ta.get){var Y=new B;wd(Y);rd(Y);Ha(Y,DocumentFragment.prototype,{Z:ce,append:de});qd(Y);id(Y);document.__CE_hasRegistry=!0;var ee=new y(Y);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:ee})}var I={STYLE_RULE:1,da:7,MEDIA_RULE:4,na:1E3},F={Ya:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,wa:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Aa:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
eb:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,jb:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,cb:/^@[^\s]*keyframes/,Ba:/\s+/g},z=!(window.ShadyDOM&&window.ShadyDOM.inUse);if(window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss)var A=window.ShadyCSS.nativeCss;else window.ShadyCSS?(Fc(window.ShadyCSS),window.ShadyCSS=void 0):Fc(window.WebComponents&&window.WebComponents.flags);var ua=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
va=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,fe=/(--[\w-]+)\s*([:,;)]|$)/gi,ge=/(animation\s*:)|(animation-name\s*:)/,Rd=/@media\s(.*)/,he=/\{[^}]*\}/g,Q=null;u.prototype.b=function(a,b,c){a.__styleScoped?a.__styleScoped=null:this.j(a,b||"",c)};u.prototype.j=function(a,b,c){a.nodeType===Node.ELEMENT_NODE&&this.h(a,b,c);if(a="template"===a.localName?(a.content||a.ob).childNodes:a.children||a.childNodes)for(var d=0;d<a.length;d++)this.j(a[d],b,c)};u.prototype.h=function(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),
a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute(ie);c?d&&(b=d.replace("style-scope","").replace(b,""),qa(a,b)):qa(a,(d?d+" ":"")+"style-scope "+b)}};u.prototype.c=function(a,b,c){var d=a.__cssBuild;z||"shady"===d?b=V(b,c):(a=R(a),b=this.G(b,a.is,a.V,c)+"\n\n");return b.trim()};u.prototype.G=function(a,b,c,d){var e=this.f(b,c);b=this.i(b);var f=this;return V(a,function(a){a.c||(f.I(a,b,e),a.c=!0);d&&d(a,b,e)})};u.prototype.i=function(a){return a?
je+a:""};u.prototype.f=function(a,b){return b?"[is="+a+"]":a};u.prototype.I=function(a,b,c){this.l(a,this.g,b,c)};u.prototype.l=function(a,b,c,d){a.selector=a.v=this.m(a,b,c,d)};u.prototype.m=function(a,b,c,d){var e=a.selector.split(Pc);if(!Gc(a)){a=0;for(var f=e.length,g;a<f&&(g=e[a]);a++)e[a]=b.call(this,g,c,d)}return e.join(Pc)};u.prototype.s=function(a){return a.replace(mb,function(a,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+
d+")"})};u.prototype.g=function(a,b,c){var d=this,e=!1;a=a.trim();var f=mb.test(a);f&&(a=a.replace(mb,function(a,b,c){return":"+b+"("+c.replace(/\s/g,"")+")"}),a=this.s(a));a=a.replace(ke,nb+" $1");a=a.replace(le,function(a,f,g){e||(a=d.B(g,f,b,c),e=e||a.stop,f=a.Xa,g=a.value);return f+g});f&&(a=this.s(a));return a};u.prototype.B=function(a,b,c,d){var e=a.indexOf(ob);0<=a.indexOf(nb)?a=this.F(a,d):0!==e&&(a=c?this.o(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(me,function(a,b){return" > "+
b}))}a=a.replace(ne,function(a,b,c){return'[dir="'+c+'"] '+b+", "+b+'[dir="'+c+'"]'});return{value:a,Xa:b,stop:f}};u.prototype.o=function(a,b){a=a.split(Qc);a[0]+=b;return a.join(Qc)};u.prototype.F=function(a,b){var c=a.match(Rc);return(c=c&&c[2].trim()||"")?c[0].match(Sc)?a.replace(Rc,function(a,c,f){return b+f}):c.split(Sc)[0]===b?c:oe:a.replace(nb,b)};u.prototype.H=function(a){a.selector=a.parsedSelector;this.w(a);this.l(a,this.K)};u.prototype.w=function(a){a.selector===pe&&(a.selector="html")};
u.prototype.K=function(a){return a.match(ob)?this.g(a,Tc):this.o(a.trim(),Tc)};J.Object.defineProperties(u.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});var mb=/:(nth[-\w]+)\(([^)]+)\)/,Tc=":not(.style-scope)",Pc=",",le=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,Sc=/[[.:#*]/,nb=":host",pe=":root",ob="::slotted",ke=new RegExp("^("+ob+")"),Rc=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,me=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,ne=/(.*):dir\((?:(ltr|rtl))\)/,
je=".",Qc=":",ie="class",oe="should_not_match",p=new u;v.get=function(a){return a?a.__styleInfo:null};v.set=function(a,b){return a.__styleInfo=b};v.prototype.c=function(){return this.D};v.prototype._getStyleRules=v.prototype.c;var Uc=function(a){return a.matches||a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector}(window.Element.prototype),qe=navigator.userAgent.match("Trident");n.prototype.H=function(a){var b=this,c={},d=[],e=0;W(a,function(a){b.c(a);
a.index=e++;b.G(a.u.cssText,c)},function(a){d.push(a)});a.b=d;a=[];for(var f in c)a.push(f);return a};n.prototype.c=function(a){if(!a.u){var b={},c={};this.b(a,c)&&(b.C=c,a.rules=null);b.cssText=this.F(a);a.u=b}};n.prototype.b=function(a,b){var c=a.u;if(c){if(c.C)return Object.assign(b,c.C),!0}else{c=a.parsedCssText;for(var d;a=ua.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}};n.prototype.F=function(a){return this.K(a.parsedCssText)};n.prototype.K=function(a){return a.replace(he,
"").replace(ua,"")};n.prototype.G=function(a,b){for(var c;c=fe.exec(a);){var d=c[1];":"!==c[2]&&(b[d]=!0)}};n.prototype.aa=function(a){for(var b=Object.getOwnPropertyNames(a),c=0,d;c<b.length;c++)d=b[c],a[d]=this.a(a[d],a)};n.prototype.a=function(a,b){if(a)if(0<=a.indexOf(";"))a=this.f(a,b);else{var c=this;a=Ic(a,function(a,e,f,g){if(!e)return a+g;(e=c.a(b[e],b))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=c.a(b[f]||f,b)||f;return a+(e||"")+g})}return a&&a.trim()||""};n.prototype.f=function(a,
b){a=a.split(";");for(var c=0,d,e;c<a.length;c++)if(d=a[c]){va.lastIndex=0;if(e=va.exec(d))d=this.a(b[e[1]],b);else if(e=d.indexOf(":"),-1!==e){var f=d.substring(e);f=f.trim();f=this.a(f,b)||f;d=d.substring(0,e)+f}a[c]=d&&d.lastIndexOf(";")===d.length-1?d.slice(0,-1):d||""}return a.join(";")};n.prototype.B=function(a,b){var c="";a.u||this.c(a);a.u.cssText&&(c=this.f(a.u.cssText,b));a.cssText=c};n.prototype.w=function(a,b){var c=a.cssText,d=a.cssText;null==a.ya&&(a.ya=ge.test(c));if(a.ya)if(null==
a.Y){a.Y=[];for(var e in b)d=b[e],d=d(c),c!==d&&(c=d,a.Y.push(e))}else{for(e=0;e<a.Y.length;++e)d=b[a.Y[e]],c=d(c);d=c}a.cssText=d};n.prototype.O=function(a,b){var c={},d=this,e=[];W(a,function(a){a.u||d.c(a);var f=a.v||a.parsedSelector;b&&a.u.C&&f&&Uc.call(b,f)&&(d.b(a,c),a=a.index,f=parseInt(a/32,10),e[f]=(e[f]||0)|1<<a%32)},null,!0);return{C:c,key:e}};n.prototype.ca=function(a,b,c,d){b.u||this.c(b);if(b.u.C){var e=R(a);a=e.is;e=e.V;e=a?p.f(a,e):"html";var f=b.parsedSelector,g=":host > *"===f||
"html"===f,h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));"shadow"===c&&(g=":host > *"===f||"html"===f,h=h&&!g);if(g||h)c=e,h&&(z&&!b.v&&(b.v=p.m(b,p.g,p.i(a),e)),c=b.v||e),d({ib:c,bb:h,qb:g})}};n.prototype.I=function(a,b){var c={},d={},e=this,f=b&&b.__cssBuild;W(b,function(b){e.ca(a,b,f,function(f){Uc.call(a.pb||a,f.ib)&&(f.bb?e.b(b,c):e.b(b,d))})},null,!0);return{gb:d,ab:c}};n.prototype.ba=function(a,b,c){var d=this,e=R(a),f=p.f(e.is,
e.V),g=new RegExp("(?:^|[^.#[:])"+(a.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])");e=v.get(a).D;var h=this.h(e,c);return p.c(a,e,function(a){d.B(a,b);z||Gc(a)||!a.cssText||(d.w(a,h),d.l(a,g,f,c))})};n.prototype.h=function(a,b){a=a.b;var c={};if(!z&&a)for(var d=0,e=a[d];d<a.length;e=a[++d])this.j(e,b),c[e.keyframesName]=this.i(e);return c};n.prototype.i=function(a){return function(b){return b.replace(a.f,a.a)}};n.prototype.j=function(a,b){a.f=new RegExp(a.keyframesName,"g");a.a=a.keyframesName+
"-"+b;a.v=a.v||a.selector;a.selector=a.v.replace(a.keyframesName,a.a)};n.prototype.l=function(a,b,c,d){a.v=a.v||a.selector;d="."+d;for(var e=a.v.split(","),f=0,g=e.length,h;f<g&&(h=e[f]);f++)e[f]=h.match(b)?h.replace(c,d):d+" "+h;a.selector=e.join(",")};n.prototype.o=function(a,b,c){var d=a.getAttribute("class")||"",e=d;c&&(e=d.replace(new RegExp("\\s*x-scope\\s*"+c+"\\s*","g")," "));e+=(e?" ":"")+"x-scope "+b;d!==e&&qa(a,e)};n.prototype.s=function(a,b,c,d){b=d?d.textContent||"":this.ba(a,b,c);var e=
v.get(a),f=e.a;f&&!z&&f!==d&&(f._useCount--,0>=f._useCount&&f.parentNode&&f.parentNode.removeChild(f));z?e.a?(e.a.textContent=b,d=e.a):b&&(d=eb(b,c,a.shadowRoot,e.b)):d?d.parentNode||(qe&&-1<b.indexOf("@media")&&(d.textContent=b),Hc(d,null,e.b)):b&&(d=eb(b,c,null,e.b));d&&(d._useCount=d._useCount||0,e.a!=d&&d._useCount++,e.a=d);return d};n.prototype.m=function(a,b){var c=pa(a),d=this;a.textContent=V(c,function(a){var c=a.cssText=a.parsedCssText;a.u&&a.u.cssText&&(c=c.replace(F.wa,"").replace(F.Aa,
""),a.cssText=d.f(c,b))})};J.Object.defineProperties(n.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var M=new n,pb={},wa=window.customElements;if(wa&&!z){var re=wa.define;wa.define=function(a,b,c){var d=document.createComment(" Shady DOM styles for "+a+" "),e=document.head;e.insertBefore(d,(Q?Q.nextSibling:null)||e.firstChild);Q=d;pb[a]=d;return re.call(wa,a,b,c)}}ha.prototype.a=function(a,b,c){for(var d=0;d<c.length;d++){var e=c[d];if(a.C[e]!==b[e])return!1}return!0};
ha.prototype.b=function(a,b,c,d){var e=this.cache[a]||[];e.push({C:b,styleElement:c,A:d});e.length>this.c&&e.shift();this.cache[a]=e};ha.prototype.fetch=function(a,b,c){if(a=this.cache[a])for(var d=a.length-1;0<=d;d--){var e=a[d];if(this.a(e,b,c))return e}};if(!z){var Vc=new MutationObserver(Jc),Wc=function(a){Vc.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)Wc(document);else{var qb=function(){Wc(document.body)};window.HTMLImports?
window.HTMLImports.whenReady(qb):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){qb();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",a)}else qb()})}N=function(){Jc(Vc.takeRecords())}}var ra={},Ud=Promise.resolve(),fb=null,Lc=window.HTMLImports&&window.HTMLImports.whenReady||null,gb,xa=null,fa=null;q.prototype.xa=function(){!this.enqueued&&fa&&(this.enqueued=!0,ub(fa))};q.prototype.b=function(a){a.__seenByShadyCSS||
(a.__seenByShadyCSS=!0,this.customStyles.push(a),this.xa())};q.prototype.a=function(a){return a.__shadyCSSCachedStyle?a.__shadyCSSCachedStyle:a.getStyle?a.getStyle():a};q.prototype.c=function(){for(var a=this.customStyles,b=0;b<a.length;b++){var c=a[b];if(!c.__shadyCSSCachedStyle){var d=this.a(c);d&&(d=d.__appliedElement||d,xa&&xa(d),c.__shadyCSSCachedStyle=d)}}return a};q.prototype.addCustomStyle=q.prototype.b;q.prototype.getStyleForCustomStyle=q.prototype.a;q.prototype.processStyles=q.prototype.c;
Object.defineProperties(q.prototype,{transformCallback:{get:function(){return xa},set:function(a){xa=a}},validateCallback:{get:function(){return fa},set:function(a){var b=!1;fa||(b=!0);fa=a;b&&this.xa()}}});var Xc=new ha;g.prototype.w=function(){N()};g.prototype.I=function(a){var b=this.m[a]=(this.m[a]||0)+1;return a+"-"+b};g.prototype.Ha=function(a){return pa(a)};g.prototype.Ja=function(a){return V(a)};g.prototype.H=function(a){a=a.content.querySelectorAll("style");for(var b=[],c=0;c<a.length;c++){var d=
a[c];b.push(d.textContent);d.parentNode.removeChild(d)}return b.join("").trim()};g.prototype.aa=function(a){return(a=a.content.querySelector("style"))?a.getAttribute("css-build")||"":""};g.prototype.prepareTemplate=function(a,b,c){if(!a.f){a.f=!0;a.name=b;a.extends=c;ra[b]=a;var d=this.aa(a),e=this.H(a);c={is:b,extends:c,mb:d};z||p.b(a.content,b);this.c();var f=va.test(e)||ua.test(e);va.lastIndex=0;ua.lastIndex=0;e=db(e);f&&A&&this.a&&this.a.transformRules(e,b);a._styleAst=e;a.g=d;d=[];A||(d=M.H(a._styleAst));
if(!d.length||A)b=this.O(c,a._styleAst,z?a.content:null,pb[b]),a.a=b;a.c=d}};g.prototype.O=function(a,b,c,d){b=p.c(a,b);if(b.length)return eb(b,a.is,c,d)};g.prototype.ca=function(a){var b=R(a),c=b.is;b=b.V;var d=pb[c];c=ra[c];if(c){var e=c._styleAst;var f=c.c}return v.set(a,new v(e,d,f,0,b))};g.prototype.F=function(){!this.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(this.a=window.ShadyCSS.ApplyShim,this.a.invalidCallback=Sd)};g.prototype.G=function(){var a=this;!this.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&
(this.b=window.ShadyCSS.CustomStyleInterface,this.b.transformCallback=function(b){a.s(b)},this.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.i)&&a.f()})})};g.prototype.c=function(){this.F();this.G()};g.prototype.f=function(){this.c();if(this.b){var a=this.b.processStyles();this.b.enqueued&&(A?this.Fa(a):(this.o(this.g,this.h),this.B(a)),this.b.enqueued=!1,this.i&&!A&&this.styleDocument())}};g.prototype.styleElement=function(a,b){var c=R(a).is,d=v.get(a);d||(d=this.ca(a));
this.j(a)||(this.i=!0);b&&(d.N=d.N||{},Object.assign(d.N,b));if(A){if(d.N){b=d.N;for(var e in b)null===e?a.style.removeProperty(e):a.style.setProperty(e,b[e])}if(((e=ra[c])||this.j(a))&&e&&e.a&&!Kc(e)){if(Kc(e)||e._applyShimValidatingVersion!==e._applyShimNextVersion)this.c(),this.a&&this.a.transformRules(e._styleAst,c),e.a.textContent=p.c(a,d.D),Td(e);z&&(c=a.shadowRoot)&&(c.querySelector("style").textContent=p.c(a,d.D));d.D=e._styleAst}}else this.o(a,d),d.la&&d.la.length&&this.K(a,d)};g.prototype.l=
function(a){return(a=a.getRootNode().host)?v.get(a)?a:this.l(a):this.g};g.prototype.j=function(a){return a===this.g};g.prototype.K=function(a,b){var c=R(a).is,d=Xc.fetch(c,b.J,b.la),e=d?d.styleElement:null,f=b.A;b.A=d&&d.A||this.I(c);e=M.s(a,b.J,b.A,e);z||M.o(a,b.A,f);d||Xc.b(c,b.J,e,b.A)};g.prototype.o=function(a,b){var c=this.l(a),d=v.get(c);c=Object.create(d.J||null);var e=M.I(a,b.D);a=M.O(d.D,a).C;Object.assign(c,e.ab,a,e.gb);this.ba(c,b.N);M.aa(c);b.J=c};g.prototype.ba=function(a,b){for(var c in b){var d=
b[c];if(d||0===d)a[c]=d}};g.prototype.styleDocument=function(a){this.styleSubtree(this.g,a)};g.prototype.styleSubtree=function(a,b){var c=a.shadowRoot;(c||this.j(a))&&this.styleElement(a,b);if(b=c&&(c.children||c.childNodes))for(a=0;a<b.length;a++)this.styleSubtree(b[a]);else if(a=a.children||a.childNodes)for(b=0;b<a.length;b++)this.styleSubtree(a[b])};g.prototype.Fa=function(a){for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);c&&this.Ea(c)}};g.prototype.B=function(a){for(var b=
0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);c&&M.m(c,this.h.J)}};g.prototype.s=function(a){var b=this,c=pa(a);W(c,function(a){z?p.w(a):p.H(a);A&&(b.c(),b.a&&b.a.transformRule(a))});A?a.textContent=V(c):this.h.D.rules.push(c)};g.prototype.Ea=function(a){if(A&&this.a){var b=pa(a);this.c();this.a.transformRules(b);a.textContent=V(b)}};g.prototype.getComputedStyleValue=function(a,b){var c;A||(c=(v.get(a)||v.get(this.l(a))).J[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?
c.trim():""};g.prototype.Ia=function(a,b){var c=a.getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===p.a){c=d[e+1];break}}}c&&b.push(p.a,c);A||(c=v.get(a))&&c.A&&b.push(M.g,c.A);qa(a,b.join(" "))};g.prototype.Ga=function(a){return v.get(a)};g.prototype.flush=g.prototype.w;g.prototype.prepareTemplate=g.prototype.prepareTemplate;g.prototype.styleElement=g.prototype.styleElement;g.prototype.styleDocument=
g.prototype.styleDocument;g.prototype.styleSubtree=g.prototype.styleSubtree;g.prototype.getComputedStyleValue=g.prototype.getComputedStyleValue;g.prototype.setElementClass=g.prototype.Ia;g.prototype._styleInfoForNode=g.prototype.Ga;g.prototype.transformCustomStyleForDocument=g.prototype.s;g.prototype.getStyleAst=g.prototype.Ha;g.prototype.styleAstToString=g.prototype.Ja;g.prototype.flushCustomStyles=g.prototype.f;Object.defineProperties(g.prototype,{nativeShadow:{get:function(){return z}},nativeCss:{get:function(){return A}}});
var H=new g;if(window.ShadyCSS){var Yc=window.ShadyCSS.ApplyShim;var Zc=window.ShadyCSS.CustomStyleInterface}window.ShadyCSS={ScopingShim:H,prepareTemplate:function(a,b,c){H.f();H.prepareTemplate(a,b,c)},styleSubtree:function(a,b){H.f();H.styleSubtree(a,b)},styleElement:function(a){H.f();H.styleElement(a)},styleDocument:function(a){H.f();H.styleDocument(a)},getComputedStyleValue:function(a,b){return H.getComputedStyleValue(a,b)},nativeCss:A,nativeShadow:z};Yc&&(window.ShadyCSS.ApplyShim=Yc);Zc&&(window.ShadyCSS.CustomStyleInterface=
Zc);var rb=window.customElements,ya=window.HTMLImports;window.WebComponents=window.WebComponents||{};if(rb&&rb.polyfillWrapFlushCallback){var za,$c=function(){if(za){var a=za;za=null;a();return!0}},ad=ya.whenReady;rb.polyfillWrapFlushCallback(function(a){za=a;ad($c)});ya.whenReady=function(a){ad(function(){$c()?ya.whenReady(a):a()})}}ya.whenReady(function(){requestAnimationFrame(function(){window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})});
var bd=document.createElement("style");bd.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var cd=document.querySelector("head");cd.insertBefore(bd,cd.firstChild)})();}).call(this);

//# sourceMappingURL=webcomponents-hi-sd-ce.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Layer_1 = __webpack_require__(13);
const Point_1 = __webpack_require__(6);
const LEX_1 = __webpack_require__(8);
const PolygonFiller_1 = __webpack_require__(46);
const Renderer_1 = __webpack_require__(48);
const Stage_1 = __webpack_require__(49);
const ClosestPathFinder_1 = __webpack_require__(50);
const ImageDownloader_1 = __webpack_require__(51);
const InputDataInitializer_1 = __webpack_require__(52);
const LightSimulator_1 = __webpack_require__(53);
const PolygonClipper_1 = __webpack_require__(54);
const UIController_1 = __webpack_require__(55);
const EventAggregator_1 = __webpack_require__(95);
const RenderEvent_1 = __webpack_require__(1);
const RenderFinishedEvent_1 = __webpack_require__(31);
class Application {
    constructor(canvas) {
        this.isRendering = false;
        this.isNextRenderQueued = false;
        this.canvas = canvas;
        this.eventAggregator = new EventAggregator_1.EventAggregator();
        this.imageDownloader = new ImageDownloader_1.ImageDownloader({ eventAggregator: this.eventAggregator });
        this.polygonFiller = new PolygonFiller_1.PolygonFiller({
            canvas: this.canvas,
            eventAggregator: this.eventAggregator
        });
        this.lightSimulator = new LightSimulator_1.LightSimulator({
            eventAggregator: this.eventAggregator,
            centerPoint: new Point_1.Point(this.canvas.width / 2, this.canvas.height / 2)
        });
        this.renderer = new Renderer_1.Renderer({
            canvas: this.canvas,
            polygonFiller: this.polygonFiller
        });
        this.stage = new Stage_1.Stage();
        this.uiController = new UIController_1.UIController({
            renderer: this.renderer,
            stage: this.stage,
            canvas: this.canvas,
            eventAggregator: this.eventAggregator,
            imageDownloader: this.imageDownloader,
            polygonClipper: new PolygonClipper_1.PolygonClipper(),
            closestPathFinder: new ClosestPathFinder_1.ClosestPathFinder()
        });
        this.onRenderEvent = this.onRenderEvent.bind(this);
        this.startRendering = this.startRendering.bind(this);
        this.onFillingFinished = this.onFillingFinished.bind(this);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.polygonFiller.fillingFinishedCallback = this.onFillingFinished;
            this.polygonLayer = new Layer_1.Layer(LEX_1.LEX.POLYGON_LAYER_NAME);
            this.stage.layers.push(this.polygonLayer);
            this.polygonFiller.init();
            this.lightSimulator.init();
            this.uiController.init();
            this.addEventListeners();
            const inputDataInitializer = new InputDataInitializer_1.InputDataInitializer({
                eventAggregator: this.eventAggregator,
                imageDownloader: this.imageDownloader,
                polygonLayer: this.polygonLayer
            });
            yield inputDataInitializer.init();
        });
    }
    destroy() {
        this.polygonFiller.destroy();
        this.lightSimulator.destroy();
        this.uiController.destroy();
        this.removeEventListeners();
    }
    onRenderEvent(event) {
        event.handled = true;
        if (this.isRendering) {
            this.isNextRenderQueued = true;
            return;
        }
        this.isRendering = true;
        requestAnimationFrame(this.startRendering);
    }
    startRendering() {
        this.polygonFiller.fillPolygons(this.polygonLayer.paths);
    }
    onFillingFinished() {
        this.stage.render(this.renderer);
        this.eventAggregator.dispatchEvent(new RenderFinishedEvent_1.RenderFinishedEvent());
        if (this.isNextRenderQueued) {
            this.isNextRenderQueued = false;
            requestAnimationFrame(this.startRendering);
        }
        else {
            this.isRendering = false;
        }
    }
    addEventListeners() {
        this.eventAggregator.addEventListener(RenderEvent_1.RenderEvent.eventType, this.onRenderEvent);
    }
    removeEventListeners() {
        this.eventAggregator.removeEventListener(RenderEvent_1.RenderEvent.eventType, this.onRenderEvent);
    }
}
exports.Application = Application;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class HitTestResult {
    constructor(line, path, layer) {
        this.line = line;
        this.path = path;
        this.layer = layer;
    }
}
exports.HitTestResult = HitTestResult;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = __webpack_require__(2);
const ActiveEdge_1 = __webpack_require__(47);
const FillWorkerMessageType_1 = __webpack_require__(23);
const FILL_WORKER_URL = 'fillWorker.js';
class PolygonFiller {
    constructor(dependencies) {
        this.proxyEvents = [
            input_data_1.NewBackgroundTextureEvent,
            input_data_1.NewHeightMapEvent,
            input_data_1.NewLightColorEvent,
            input_data_1.NewLightPositionEvent,
            input_data_1.NewLightTypeEvent,
            input_data_1.NewNormalMapEvent
        ];
        this.eventAggregator = dependencies.eventAggregator;
        this.canvas = dependencies.canvas;
        this.onFillWorkerMessage = this.onFillWorkerMessage.bind(this);
        this.onFillWorkerError = this.onFillWorkerError.bind(this);
        this.sendAppFillDataEvent = this.sendAppFillDataEvent.bind(this);
    }
    injectCanvasRenderingContext(renderingContext) {
        this.renderingContext = renderingContext;
    }
    init() {
        this.proxyEvents.forEach(event => this.eventAggregator.addEventListener(event.eventType, this.sendAppFillDataEvent));
        this.fillWorker = new Worker(FILL_WORKER_URL);
        this.fillWorker.postMessage({
            type: FillWorkerMessageType_1.FillWorkerMessageType.CanvasInfo,
            width: this.canvas.width,
            height: this.canvas.height
        });
        this.fillWorker.addEventListener('message', this.onFillWorkerMessage);
        this.fillWorker.addEventListener('error', this.onFillWorkerError);
    }
    destroy() {
        this.proxyEvents.forEach(event => this.eventAggregator.removeEventListener(event.eventType, this.sendAppFillDataEvent));
        this.fillWorker.removeEventListener('message', this.onFillWorkerMessage);
        this.fillWorker.removeEventListener('error', this.onFillWorkerError);
        this.fillWorker.terminate();
    }
    fillPolygons(polygons) {
        const fillWorker = this.fillWorker;
        fillWorker.postMessage({
            type: FillWorkerMessageType_1.FillWorkerMessageType.StartFill
        });
        polygons.forEach(polygon => this.fillPolygon(polygon));
        fillWorker.postMessage({
            type: FillWorkerMessageType_1.FillWorkerMessageType.EndFill
        });
    }
    onFillWorkerMessage(event) {
        const imageData = event.data;
        this.renderingContext.putImageData(imageData, 0, 0);
        if (this.fillingFinishedCallback) {
            this.fillingFinishedCallback();
        }
    }
    onFillWorkerError(event) {
        console.error('Fill worker error', event);
    }
    fillPolygon(polygon) {
        const fillStrips = this.getPolygonFillStrips(polygon);
        this.fillWorker.postMessage({
            type: FillWorkerMessageType_1.FillWorkerMessageType.FillStrips,
            fillStrips
        });
    }
    getPolygonFillStrips(polygon) {
        const vertices = polygon.getVertices();
        const verticesCount = polygon.getVerticesCount();
        // ind[0 .. n-1]
        const sortedVertexIndices = vertices.map((_vertex, index) => index);
        sortedVertexIndices.sort((i, j) => vertices[i].y - vertices[j].y);
        const yMin = vertices[sortedVertexIndices[0]].y;
        const yMax = vertices[sortedVertexIndices[verticesCount - 1]].y;
        // AET
        const activeEdgeTable = [];
        let k = 0;
        let previousY = yMin;
        const fillStrips = [];
        for (let y = yMin + 1; y <= yMax; y += 1) {
            for (; k < verticesCount; k += 1) {
                const vertexIndex = sortedVertexIndices[k];
                const vertex = vertices[vertexIndex];
                if (vertex.y !== previousY) {
                    break;
                }
                const previousVertexIndex = polygon.getPreviousPointIndex(vertexIndex);
                const previousVertex = vertices[previousVertexIndex];
                if (previousVertex.y >= vertex.y) {
                    const previousEdge = new ActiveEdge_1.ActiveEdge(vertex, previousVertex);
                    activeEdgeTable.push(previousEdge);
                }
                else {
                    const edgeIndex = activeEdgeTable.findIndex(edge => edge.lowerPoint === previousVertex && edge.higherPoint === vertex);
                    activeEdgeTable.splice(edgeIndex, 1);
                }
                const nextVertexIndex = polygon.getNextPointIndex(vertexIndex);
                const nextVertex = vertices[nextVertexIndex];
                if (nextVertex.y >= vertex.y) {
                    const nextEdge = new ActiveEdge_1.ActiveEdge(vertex, nextVertex);
                    activeEdgeTable.push(nextEdge);
                }
                else {
                    const edgeIndex = activeEdgeTable.findIndex(edge => edge.lowerPoint === nextVertex && edge.higherPoint === vertex);
                    activeEdgeTable.splice(edgeIndex, 1);
                }
            }
            if (previousY >= 0 && previousY < this.canvas.height) {
                activeEdgeTable.sort((e1, e2) => e1.x - e2.x);
                for (let i = 0; i < activeEdgeTable.length; i += 2) {
                    const e1 = activeEdgeTable[i];
                    const e2 = activeEdgeTable[i + 1];
                    fillStrips.push({
                        y: previousY,
                        fromX: e1.x,
                        toX: e2.x
                    });
                }
            }
            activeEdgeTable.forEach(edge => edge.nextScanLine());
            previousY = y;
        }
        return fillStrips;
    }
    sendAppFillDataEvent(event) {
        this.fillWorker.postMessage({
            type: FillWorkerMessageType_1.FillWorkerMessageType.NewFillDataEvent,
            event
        });
    }
}
exports.PolygonFiller = PolygonFiller;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ActiveEdge {
    constructor(lowerPoint, higherPoint) {
        this.lowerPoint = lowerPoint;
        this.higherPoint = higherPoint;
        this._x = this.lowerPoint.x;
        this.calculateSlope();
    }
    get x() {
        return this._x;
    }
    nextScanLine() {
        this._x += this.inverseSlope;
    }
    calculateSlope() {
        if (this.higherPoint.y === this.lowerPoint.y) {
            this.inverseSlope = 99999999999;
        }
        else {
            this.inverseSlope =
                (this.higherPoint.x - this.lowerPoint.x) / (this.higherPoint.y - this.lowerPoint.y);
        }
    }
}
exports.ActiveEdge = ActiveEdge;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(12);
const Line_1 = __webpack_require__(15);
const Point_1 = __webpack_require__(6);
const configuration_1 = __webpack_require__(0);
class Renderer {
    constructor(dependencies) {
        this.canvas = dependencies.canvas;
        const context = this.canvas.getContext('2d');
        if (context === null) {
            throw new Error('Cannot get canvas 2d rendering context');
        }
        this.renderingContext = context;
        this.renderingContext.font = configuration_1.configuration.canvasFont;
        this.polygonFiller = dependencies.polygonFiller;
        this.polygonFiller.injectCanvasRenderingContext(this.renderingContext);
        this.renderingContext.strokeStyle = COLORS_1.COLORS.BLACK.fillStyle;
    }
    drawPoint(point) {
        this.drawPixel(point.x, point.y);
    }
    drawPixel(x, y) {
        this.renderingContext.fillRect(x, y, 1, 1);
    }
    // tslint:disable-next-line no-any
    drawLine(...args) {
        if (args[0] instanceof Line_1.Line) {
            return this.drawLineBetweenPoints(args[0].p1, args[0].p2, args[1]);
        }
        else {
            return this.drawLineBetweenPoints(args[0], args[1], args[2]);
        }
    }
    drawPath(path) {
        const pathLineProperties = path.getLineProperties();
        for (const line of path.getLineIterator()) {
            this.drawLine(line, pathLineProperties);
        }
    }
    fillText(text, pointOrX, y) {
        let x = pointOrX;
        if (typeof pointOrX === 'object' && pointOrX instanceof Point_1.Point) {
            x = pointOrX.x;
            y = pointOrX.y;
        }
        this.renderingContext.fillText(text, x, y);
    }
    clear() {
        this.renderingContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    drawLineBetweenPoints(startPoint, endPoint, lineProperties) {
        this.renderingContext.strokeStyle = lineProperties.color.fillStyle;
        this.renderingContext.beginPath();
        this.renderingContext.moveTo(startPoint.x, startPoint.y);
        this.renderingContext.lineTo(endPoint.x, endPoint.y);
        this.renderingContext.stroke();
    }
}
exports.Renderer = Renderer;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Stage {
    constructor() {
        this.layers = [];
    }
    render(renderer) {
        this.layers.forEach(layer => layer.render(renderer));
    }
    removeLayer(layer) {
        const index = this.layers.indexOf(layer);
        if (index === -1) {
            return;
        }
        this.layers.splice(index, 1);
    }
    hitTest(point) {
        for (const layer of this.layers) {
            const result = layer.hitTest(point);
            if (!result) {
                continue;
            }
            return result;
        }
        return null;
    }
    findLayerByName(name) {
        const foundLayer = this.layers.find(layer => layer.name === name);
        if (!foundLayer) {
            throw new Error(`Layer with name ${name} does not exist`);
        }
        return foundLayer;
    }
}
exports.Stage = Stage;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ClosestPathFinder {
    getClosestPath(paths, point) {
        if (paths.length === 0) {
            throw new Error('Paths array is empty');
        }
        let closestPath = paths[0];
        let closestDistance = this.getPathToPointDistance(closestPath, point);
        for (let i = 1; i < paths.length; i += 1) {
            const path = paths[i];
            const distance = this.getPathToPointDistance(path, point);
            if (closestDistance > distance) {
                closestPath = path;
                closestDistance = distance;
            }
        }
        return closestPath;
    }
    getPathToPointDistance(path, point) {
        return point.getDistanceSquaredTo(path.getCenterOfGravity());
    }
}
exports.ClosestPathFinder = ClosestPathFinder;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoadingFinishedEvent_1 = __webpack_require__(28);
const LoadingStartedEvent_1 = __webpack_require__(29);
class ImageDownloader {
    constructor(dependencies) {
        this.eventAggregator = dependencies.eventAggregator;
    }
    imageToImageData(image) {
        return __awaiter(this, void 0, void 0, function* () {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (!context) {
                throw new Error('Cannot get 2d drawing canvas context');
            }
            if (!this.isImageDownloaded(image)) {
                yield this.waitForImage(image);
            }
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            context.drawImage(image, 0, 0);
            return context.getImageData(0, 0, image.naturalWidth, image.naturalHeight);
        });
    }
    isImageDownloaded(image) {
        if (!image.complete) {
            return false;
        }
        if (image.naturalWidth === 0) {
            return false;
        }
        return true;
    }
    waitForImage(image) {
        this.dispatchLoadingStartedEvent();
        return new Promise((resolve, reject) => {
            const dispatchLoadingFinishedEvent = this.dispatchLoadingFinishedEvent.bind(this);
            function onLoad() {
                image.removeEventListener('load', onLoad);
                image.removeEventListener('error', onError);
                dispatchLoadingFinishedEvent();
                resolve();
            }
            function onError() {
                image.removeEventListener('load', onLoad);
                image.removeEventListener('error', onError);
                dispatchLoadingFinishedEvent();
                reject();
            }
            image.addEventListener('load', onLoad);
            image.addEventListener('error', onError);
        });
    }
    dispatchLoadingStartedEvent() {
        this.eventAggregator.dispatchEvent(new LoadingStartedEvent_1.LoadingStartedEvent());
    }
    dispatchLoadingFinishedEvent() {
        this.eventAggregator.dispatchEvent(new LoadingFinishedEvent_1.LoadingFinishedEvent());
    }
}
exports.ImageDownloader = ImageDownloader;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = __webpack_require__(2);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(3);
const configuration_1 = __webpack_require__(0);
const LightType_1 = __webpack_require__(9);
const LineProperties_1 = __webpack_require__(11);
const Point_1 = __webpack_require__(6);
const Polygon_1 = __webpack_require__(24);
class InputDataInitializer {
    constructor(dependencies) {
        this.eventAggregator = dependencies.eventAggregator;
        this.imageDownloader = dependencies.imageDownloader;
        this.polygonLayer = dependencies.polygonLayer;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addInitialPolygons();
            const imagesToDownload = [];
            const backgroundTextureImage = new Image();
            backgroundTextureImage.src = configuration_1.configuration.presetBackgroundTextures[0];
            const normalMapImage = new Image();
            normalMapImage.src = configuration_1.configuration.presetNormalMaps[0];
            const heightMapImage = new Image();
            heightMapImage.src = configuration_1.configuration.presetHeightMaps[0];
            imagesToDownload.push(backgroundTextureImage, normalMapImage, heightMapImage);
            const downloadedImageData = yield Promise.all(imagesToDownload.map(image => this.imageDownloader.imageToImageData(image)));
            this.eventAggregator.dispatchEvent(new input_data_1.NewBackgroundTextureEvent(downloadedImageData[0]));
            this.eventAggregator.dispatchEvent(new input_data_1.NewNormalMapEvent(downloadedImageData[1]));
            this.eventAggregator.dispatchEvent(new input_data_1.NewHeightMapEvent(downloadedImageData[2]));
            this.eventAggregator.dispatchEvent(new input_data_1.NewLightColorEvent(configuration_1.configuration.presetLightColor));
            this.eventAggregator.dispatchEvent(new input_data_1.NewLightPositionRadiusEvent(configuration_1.configuration.movingLight.defaultRadius));
            this.eventAggregator.dispatchEvent(new input_data_1.NewLightTypeEvent(LightType_1.LightType.Constant));
            this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        });
    }
    destroy() {
        // Nothing to destroy here
    }
    addInitialPolygons() {
        const points1 = [
            new Point_1.Point(94, 93),
            new Point_1.Point(69, 386),
            new Point_1.Point(190, 525),
            new Point_1.Point(664, 364)
        ];
        const polygon1 = new Polygon_1.Polygon(points1, LineProperties_1.LineProperties.getDefault());
        const points2 = [
            new Point_1.Point(777, 142),
            new Point_1.Point(700, 50),
            new Point_1.Point(433, 34),
            new Point_1.Point(404, 156),
            new Point_1.Point(527, 263),
            new Point_1.Point(750, 350)
        ];
        const polygon2 = new Polygon_1.Polygon(points2, LineProperties_1.LineProperties.getDefault());
        this.polygonLayer.paths.push(polygon1, polygon2);
        this.eventAggregator.dispatchEvent(new SyncComponentsEvent_1.SyncComponentsEvent());
    }
}
exports.InputDataInitializer = InputDataInitializer;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = __webpack_require__(2);
const RenderEvent_1 = __webpack_require__(1);
const configuration_1 = __webpack_require__(0);
const LightType_1 = __webpack_require__(9);
const Vector3_1 = __webpack_require__(7);
class LightSimulator {
    constructor(dependencies) {
        this.horizontalRadiansModuloValue = 2 * Math.PI; // [0; 360] degrees
        this.lightHorizontalAngle = 0;
        this.lightVerticalAngleOffset = configuration_1.configuration.movingLight.minVerticalAngle;
        this.lightVerticalRising = true;
        this.eventAggregator = dependencies.eventAggregator;
        this.centerPoint = dependencies.centerPoint;
        this.onNewLightType = this.onNewLightType.bind(this);
        this.movingLightTick = this.movingLightTick.bind(this);
        this.onNewLightPositionRadius = this.onNewLightPositionRadius.bind(this);
    }
    init() {
        this.eventAggregator.addEventListener(input_data_1.NewLightTypeEvent.eventType, this.onNewLightType);
        this.eventAggregator.addEventListener(input_data_1.NewLightPositionRadiusEvent.eventType, this.onNewLightPositionRadius);
        this.performInitialCalculations();
    }
    destroy() {
        this.eventAggregator.removeEventListener(input_data_1.NewLightTypeEvent.eventType, this.onNewLightType);
        this.eventAggregator.removeEventListener(input_data_1.NewLightPositionRadiusEvent.eventType, this.onNewLightPositionRadius);
        this.stopMovingLight();
    }
    performInitialCalculations() {
        this.horizontalStepInRadians = configuration_1.configuration.movingLight.tickInterval /
            configuration_1.configuration.movingLight.horizontalLapTime *
            2 *
            Math.PI;
        this.minVerticalAngle = configuration_1.configuration.movingLight.minVerticalAngle;
        this.verticalAngleDelta = configuration_1.configuration.movingLight.maxVerticalAngle -
            this.minVerticalAngle;
        this.verticalStepInRadians = configuration_1.configuration.movingLight.tickInterval /
            configuration_1.configuration.movingLight.verticalLapTime *
            this.verticalAngleDelta;
    }
    onNewLightType(event) {
        switch (event.payload) {
            case LightType_1.LightType.Constant:
                this.stopMovingLight();
                this.dispatchLightPosition(new Vector3_1.Vector3(0, 0, 1));
                event.handled = true;
                break;
            case LightType_1.LightType.Moving:
                this.startMovingLight();
                event.handled = true;
                break;
            default:
                throw new Error('Unknown light type');
        }
    }
    dispatchLightPosition(position) {
        this.eventAggregator.dispatchEvent(new input_data_1.NewLightPositionEvent(position));
    }
    startMovingLight() {
        this.movingLightIntervalId = setInterval(this.movingLightTick, configuration_1.configuration.movingLight.tickInterval);
    }
    movingLightTick() {
        const { x: centerX, y: centerY } = this.centerPoint;
        const verticalAngle = configuration_1.configuration.movingLight.minVerticalAngle + this.lightVerticalAngleOffset;
        const horizontalRadius = this.lightPositionRadius * Math.cos(verticalAngle);
        const x = centerX + horizontalRadius * Math.cos(this.lightHorizontalAngle);
        const y = centerY + horizontalRadius * Math.sin(this.lightHorizontalAngle);
        const z = this.lightPositionRadius * Math.sin(verticalAngle);
        const lightPosition = new Vector3_1.Vector3(x, y, z);
        this.dispatchLightPosition(lightPosition);
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        this.horizontalTick();
        this.verticalTick();
    }
    horizontalTick() {
        this.lightHorizontalAngle += this.horizontalStepInRadians;
        if (this.lightHorizontalAngle >= this.horizontalRadiansModuloValue) {
            this.lightHorizontalAngle -= this.horizontalRadiansModuloValue;
        }
    }
    verticalTick() {
        if (this.lightVerticalRising) {
            this.lightVerticalAngleOffset += this.verticalStepInRadians;
            if (this.lightVerticalAngleOffset >= this.verticalAngleDelta) {
                this.lightVerticalRising = false;
            }
        }
        else {
            this.lightVerticalAngleOffset -= this.verticalStepInRadians;
            if (this.lightVerticalAngleOffset <= 0) {
                this.lightVerticalRising = true;
            }
        }
    }
    stopMovingLight() {
        clearInterval(this.movingLightIntervalId);
        this.lightHorizontalAngle = 0;
        this.lightVerticalAngleOffset = configuration_1.configuration.movingLight.minVerticalAngle;
        this.lightVerticalRising = true;
    }
    onNewLightPositionRadius(event) {
        this.lightPositionRadius = event.payload;
    }
}
exports.LightSimulator = LightSimulator;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Line_1 = __webpack_require__(15);
const Point_1 = __webpack_require__(6);
const Polygon_1 = __webpack_require__(24);
class PolygonClipper {
    clipPolygons(polygon1, polygon2) {
        if (polygon1.isConvex()) {
            return this.clipPolygon(polygon2, polygon1);
        }
        else if (polygon2.isConvex()) {
            return this.clipPolygon(polygon1, polygon2);
        }
        throw new Error('Both polygons are concave');
    }
    /**
     * @param subjectPolygon
     * @param clippingPolygon Must be convex
     */
    clipPolygon(subjectPolygon, clippingPolygon) {
        const clippingPolygonCenter = clippingPolygon.getCenterOfGravity();
        let output = subjectPolygon.getVertices();
        const clippingPolygonEdges = [];
        const clippingPolygonVertices = clippingPolygon.getVertices();
        for (let i = 0; i < clippingPolygonVertices.length; i += 1) {
            const edge = new Line_1.Line(clippingPolygonVertices[(i + 1) % clippingPolygonVertices.length], clippingPolygonVertices[i]);
            clippingPolygonEdges.push(edge);
        }
        for (const edge of clippingPolygonEdges) {
            const input = output;
            output = [];
            let pp = input[input.length - 1];
            input.forEach(p => {
                if (this.isSameSide(p, clippingPolygonCenter, edge)) {
                    if (!this.isSameSide(pp, clippingPolygonCenter, edge)) {
                        output.push(this.getIntersectionPoint(new Line_1.Line(pp, p), edge));
                    }
                    output.push(p);
                }
                else {
                    if (this.isSameSide(pp, clippingPolygonCenter, edge)) {
                        output.push(this.getIntersectionPoint(new Line_1.Line(pp, p), edge));
                    }
                }
                pp = p;
            });
        }
        if (output.length === 0) {
            return null;
        }
        const outputWithoutDuplicates = [];
        outputWithoutDuplicates.push(output[0]);
        for (let i = 1; i < output.length; i += 1) {
            if (!Point_1.Point.epsilonEquals(output[i], outputWithoutDuplicates[outputWithoutDuplicates.length - 1])) {
                outputWithoutDuplicates.push(output[i]);
            }
        }
        // tslint:disable-next-line no-bitwise
        const roundedPoints = outputWithoutDuplicates.map(point => point.floor());
        return new Polygon_1.Polygon(roundedPoints, subjectPolygon.lineProperties);
    }
    isSameSide(p1, p2, line) {
        const p1Dir = line.getDirection(p1);
        const p2Dir = line.getDirection(p2);
        if (p1Dir === p2Dir || p1Dir === 0 || p2Dir === 0) {
            return true;
        }
        return false;
    }
    getIntersectionPoint(line1, line2) {
        const direction1 = Point_1.Point.subtract(line1.p2, line1.p1);
        const direction2 = Point_1.Point.subtract(line2.p2, line2.p1);
        const dotPerp = direction1.x * direction2.y - direction1.y * direction2.x;
        const c = new Point_1.Point(line2.p1.x - line1.p1.x, line2.p1.y - line1.p1.y);
        const t = (c.x * direction2.y - c.y * direction2.x) / dotPerp;
        return new Point_1.Point(line1.p1.x + t * direction1.x, line1.p1.y + t * direction1.y);
    }
}
exports.PolygonClipper = PolygonClipper;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(8);
const InputDataService_1 = __webpack_require__(56);
const LoadingUIService_1 = __webpack_require__(71);
const MousePositionTransformer_1 = __webpack_require__(75);
const NewPolygonUIController_1 = __webpack_require__(76);
const PathDraggingService_1 = __webpack_require__(77);
const PointDraggingService_1 = __webpack_require__(78);
const PointInserterService_1 = __webpack_require__(79);
const PointRemoverService_1 = __webpack_require__(80);
const PointSyncService_1 = __webpack_require__(81);
const SerializationService_1 = __webpack_require__(85);
const LineClickEvent_1 = __webpack_require__(35);
__webpack_require__(88);
__webpack_require__(91);
__webpack_require__(36);
const PolygonClippingService_1 = __webpack_require__(94);
class UIController {
    constructor(dependencies) {
        this.uiServices = [];
        this.canvas = dependencies.canvas;
        this.renderer = dependencies.renderer;
        this.stage = dependencies.stage;
        this.eventAggregator = dependencies.eventAggregator;
        this.imageDownloader = dependencies.imageDownloader;
        this.polygonClipper = dependencies.polygonClipper;
        this.closestPathFinder = dependencies.closestPathFinder;
        this.onClick = this.onClick.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
    }
    init() {
        this.findApplicationUIContainer();
        this.findDialogOverlay();
        this.mousePositionTransformer = new MousePositionTransformer_1.MousePositionTransformer(this.canvas);
        this.canvas.addEventListener('click', this.onClick);
        this.canvas.addEventListener('mousedown', this.onMouseDown);
        this.createNewPolygonUIController();
        this.createPointDraggingService();
        this.createPointInserterService();
        this.createPointRemoverService();
        this.createPointSyncService();
        this.createPathDraggingService();
        this.createSerializationService();
        this.createInputDataService();
        this.createPolygonClippingService();
        this.createLoadingUIService();
        this.uiServices.forEach(uiService => uiService.init());
    }
    destroy() {
        this.canvas.removeEventListener('click', this.onClick);
        this.canvas.removeEventListener('mousedown', this.onMouseDown);
        this.uiServices.forEach(uiService => uiService.destroy());
        this.uiServices.splice(0, this.uiServices.length);
    }
    onMouseDown(event) {
        if (!event.ctrlKey) {
            return;
        }
        this.pathDraggingService.startMovingPath(event);
        return false;
    }
    onClick(event) {
        event.stopPropagation();
        if (this.pathDraggingService.isDragging) {
            return;
        }
        const point = this.mousePositionTransformer.getPointFromMouseEvent(event);
        if (event.shiftKey) {
            return this.polygonClippingService.clipPolygons(point);
        }
        const hitTestResult = this.stage.hitTest(point);
        if (!hitTestResult) {
            return this.newPolygonUIController.addNewPoint(point);
        }
        if (!hitTestResult.path) {
            return;
        }
        event.stopPropagation();
        this.eventAggregator.dispatchEvent(new LineClickEvent_1.LineClickEvent(hitTestResult.line, hitTestResult.path, point));
    }
    findApplicationUIContainer() {
        const applicationUIContainer = document.getElementById(configuration_1.configuration.applicationUIContainerID);
        if (!applicationUIContainer) {
            throw new Error('Application UI container not found');
        }
        this.applicationUIContainer = applicationUIContainer;
    }
    findDialogOverlay() {
        const dialogOverlay = document.querySelector('app-dialog-overlay');
        if (!dialogOverlay) {
            throw new Error('Dialog overlay not found');
        }
        this.dialogOverlay = dialogOverlay;
    }
    createPointSyncService() {
        const pointSyncService = new PointSyncService_1.PointSyncService({
            container: this.applicationUIContainer,
            mousePositionTransformer: this.mousePositionTransformer,
            stage: this.stage,
            eventAggregator: this.eventAggregator
        });
        this.uiServices.push(pointSyncService);
    }
    createPointRemoverService() {
        const pointRemoverService = new PointRemoverService_1.PointRemoverService({
            eventAggregator: this.eventAggregator
        });
        this.uiServices.push(pointRemoverService);
    }
    createPointDraggingService() {
        const pointDraggingService = new PointDraggingService_1.PointDraggingService({
            eventAggregator: this.eventAggregator,
            stage: this.stage,
            canvas: this.canvas
        });
        this.uiServices.push(pointDraggingService);
    }
    createNewPolygonUIController() {
        this.newPolygonUIController = new NewPolygonUIController_1.NewPolygonUIController({
            applicationUIContainer: this.applicationUIContainer,
            canvas: this.canvas,
            stage: this.stage,
            polygonLayer: this.stage.findLayerByName(LEX_1.LEX.POLYGON_LAYER_NAME),
            renderer: this.renderer,
            mousePositionTransformer: this.mousePositionTransformer,
            eventAggregator: this.eventAggregator
        });
        this.uiServices.push(this.newPolygonUIController);
    }
    createPointInserterService() {
        const pointInserterService = new PointInserterService_1.PointInserterService({
            eventAggregator: this.eventAggregator
        });
        this.uiServices.push(pointInserterService);
    }
    createPathDraggingService() {
        this.pathDraggingService = new PathDraggingService_1.PathDraggingService({
            canvas: this.canvas,
            eventAggregator: this.eventAggregator,
            mousePositionTransformer: this.mousePositionTransformer,
            stage: this.stage,
            closestPathFinder: this.closestPathFinder
        });
        this.uiServices.push(this.pathDraggingService);
    }
    createSerializationService() {
        const serializationService = new SerializationService_1.SerializationService({
            eventAggregator: this.eventAggregator,
            stage: this.stage
        });
        this.uiServices.push(serializationService);
    }
    createInputDataService() {
        const inputDataService = new InputDataService_1.InputDataService({
            eventAggregator: this.eventAggregator,
            imageDownloader: this.imageDownloader,
            dialogOverlay: this.dialogOverlay
        });
        this.uiServices.push(inputDataService);
    }
    createPolygonClippingService() {
        this.polygonClippingService = new PolygonClippingService_1.PolygonClippingService({
            polygonClipper: this.polygonClipper,
            eventAggregator: this.eventAggregator,
            polygonLayer: this.stage.findLayerByName(LEX_1.LEX.POLYGON_LAYER_NAME),
            closestPathFinder: this.closestPathFinder
        });
        this.uiServices.push(this.polygonClippingService);
    }
    createLoadingUIService() {
        const loadingUIService = new LoadingUIService_1.LoadingUIService({
            dialogOverlay: this.dialogOverlay,
            eventAggregator: this.eventAggregator
        });
        this.uiServices.push(loadingUIService);
    }
}
exports.UIController = UIController;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = __webpack_require__(57);
class InputDataService {
    constructor(dependencies) {
        this.eventAggregator = dependencies.eventAggregator;
        this.imageDownloader = dependencies.imageDownloader;
        this.dialogOverlay = dependencies.dialogOverlay;
    }
    init() {
        this.findInputDataContainer();
        this.setupElements();
        this.inputDataContainer.appendChild(this.backgroundSelectButton);
        this.inputDataContainer.appendChild(this.lightColorSelectButton);
        this.inputDataContainer.appendChild(this.normalMapSelectButton);
        this.inputDataContainer.appendChild(this.heightMapSelectButton);
        this.inputDataContainer.appendChild(this.lightTypeSelect);
    }
    destroy() {
        this.inputDataContainer.removeChild(this.backgroundSelectButton);
        this.inputDataContainer.removeChild(this.lightColorSelectButton);
        this.inputDataContainer.removeChild(this.normalMapSelectButton);
        this.inputDataContainer.removeChild(this.heightMapSelectButton);
        this.inputDataContainer.removeChild(this.lightTypeSelect);
    }
    findInputDataContainer() {
        const inputDataContainer = document.getElementById('input-data-container');
        if (!inputDataContainer) {
            throw new Error('Input data container not found');
        }
        this.inputDataContainer = inputDataContainer;
    }
    setupElements() {
        const { eventAggregator, dialogOverlay, imageDownloader } = this;
        const imageSelectButtonDependencies = { eventAggregator, dialogOverlay, imageDownloader };
        const colorSelectButtonDependencies = { dialogOverlay, eventAggregator };
        this.backgroundSelectButton = new input_data_1.BackgroundSelectButton(imageSelectButtonDependencies);
        this.heightMapSelectButton = new input_data_1.HeightMapSelectButton(imageSelectButtonDependencies);
        this.lightColorSelectButton = new input_data_1.LightColorSelectButton(colorSelectButtonDependencies);
        this.normalMapSelectButton = new input_data_1.NormalMapSelectButton(imageSelectButtonDependencies);
        this.lightTypeSelect = new input_data_1.LightTypeSelect({ eventAggregator });
    }
}
exports.InputDataService = InputDataService;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BackgroundSelectButton_1 = __webpack_require__(58);
exports.BackgroundSelectButton = BackgroundSelectButton_1.BackgroundSelectButton;
const HeightMapSelectButton_1 = __webpack_require__(61);
exports.HeightMapSelectButton = HeightMapSelectButton_1.HeightMapSelectButton;
const LightColorSelectButton_1 = __webpack_require__(62);
exports.LightColorSelectButton = LightColorSelectButton_1.LightColorSelectButton;
const LightTypeSelect_1 = __webpack_require__(68);
exports.LightTypeSelect = LightTypeSelect_1.LightTypeSelect;
const NormalMapSelectButton_1 = __webpack_require__(70);
exports.NormalMapSelectButton = NormalMapSelectButton_1.NormalMapSelectButton;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = __webpack_require__(2);
const RenderEvent_1 = __webpack_require__(1);
const configuration_1 = __webpack_require__(0);
const ImageSelectDialog_1 = __webpack_require__(25);
const ImageSelectDialogButton_1 = __webpack_require__(26);
class BackgroundSelectButton extends ImageSelectDialogButton_1.ImageSelectDialogButton {
    constructor(dependencies) {
        super(dependencies);
        this.button.innerText = 'Select background texture';
    }
    setupDialogBox() {
        this.dialogBox = new ImageSelectDialog_1.ImageSelectDialog(configuration_1.configuration.presetBackgroundTextures, configuration_1.configuration.initialCustomBackgroundColorHex);
        this.dialogBox.name = 'Background texture';
    }
    onDialogBoxClosed() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.dialogBox.wasCancelled) {
                return;
            }
            const imageData = yield this.getSelectedImageData();
            this.eventAggregator.dispatchEvent(new input_data_1.NewBackgroundTextureEvent(imageData));
            this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        });
    }
}
exports.BackgroundSelectButton = BackgroundSelectButton;
customElements.define('app-background-select-button', BackgroundSelectButton);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./ImageSelectDialog.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./ImageSelectDialog.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".image-select-dialog {\n  padding: 1rem;\n  width: 75%;\n  max-width: 800px; }\n\n.image-select-dialog__heading {\n  margin: 0.5em 0; }\n\n.image-select-dialog__block {\n  border-bottom: solid 1px black;\n  padding-bottom: 1em; }\n\n.image-select-dialog__preset-images-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .image-select-dialog__preset-images-container > div {\n    max-width: 25%;\n    max-height: 200px;\n    margin: auto; }\n  .image-select-dialog__preset-images-container img {\n    max-width: 100%;\n    max-height: 200px; }\n\n.image-select-dialog__custom-image {\n  display: block;\n  max-width: 25%;\n  max-height: 200px;\n  margin: auto; }\n\n.image-select-dialog__image--selected {\n  border: solid 3px green; }\n\n.image-select-dialog__bottom-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1em; }\n  .image-select-dialog__bottom-buttons button {\n    font-size: 1.3em; }\n", ""]);

// exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = __webpack_require__(2);
const RenderEvent_1 = __webpack_require__(1);
const configuration_1 = __webpack_require__(0);
const ImageSelectDialog_1 = __webpack_require__(25);
const ImageSelectDialogButton_1 = __webpack_require__(26);
class HeightMapSelectButton extends ImageSelectDialogButton_1.ImageSelectDialogButton {
    constructor(dependencies) {
        super(dependencies);
        this.button.innerText = 'Select height map';
    }
    setupDialogBox() {
        this.dialogBox = new ImageSelectDialog_1.ImageSelectDialog(configuration_1.configuration.presetHeightMaps, configuration_1.configuration.initialCustomHeightMapColorHex);
        this.dialogBox.name = 'Height map';
    }
    onDialogBoxClosed() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.dialogBox.wasCancelled) {
                return;
            }
            const imageData = yield this.getSelectedImageData();
            this.eventAggregator.dispatchEvent(new input_data_1.NewHeightMapEvent(imageData));
            this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        });
    }
}
exports.HeightMapSelectButton = HeightMapSelectButton;
customElements.define('app-height-map-select-button', HeightMapSelectButton);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector3_1 = __webpack_require__(7);
const configuration_1 = __webpack_require__(0);
const input_data_1 = __webpack_require__(2);
const RenderEvent_1 = __webpack_require__(1);
const ColorSelectDialog_1 = __webpack_require__(63);
const DialogBoxButton_1 = __webpack_require__(30);
class LightColorSelectButton extends DialogBoxButton_1.DialogBoxButton {
    constructor(dependencies) {
        super({ dialogOverlay: dependencies.dialogOverlay });
        this.eventAggregator = dependencies.eventAggregator;
        this.button.innerText = 'Select light color';
    }
    setupDialogBox() {
        this.dialogBox = new ColorSelectDialog_1.ColorSelectDialog();
        this.dialogBox.name = 'Light color';
        this.dialogBox.selectedColor = configuration_1.configuration.presetLightColor.toColor();
    }
    onDialogBoxClosed() {
        if (this.dialogBox.wasCancelled) {
            return;
        }
        const lightColor = this.dialogBox.selectedColor;
        const lightVector = Vector3_1.Vector3.fromColor(lightColor);
        this.eventAggregator.dispatchEvent(new input_data_1.NewLightColorEvent(lightVector));
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
    }
}
exports.LightColorSelectButton = LightColorSelectButton;
customElements.define('app-light-color-select-button', LightColorSelectButton);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(64);
const Color_1 = __webpack_require__(10);
__webpack_require__(66);
const classNames = {
    DIALOG_BOX: 'dialog-box',
    DIALOG: 'color-select-dialog',
    HEADER: 'color-select-dialog__header',
    HEADING: 'color-select-dialog__heading',
    BLOCK: 'image-select-dialog__block',
    BOTTOM_BUTTONS: 'color-select-dialog__bottom-buttons'
};
class ColorSelectDialog extends HTMLElement {
    constructor() {
        super();
        this._wasCancelled = true;
        this.classList.add(classNames.DIALOG_BOX);
        this.classList.add(classNames.DIALOG);
        this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
        this.onConfirmButtonClick = this.onConfirmButtonClick.bind(this);
        this.createHeader();
        this.createColorInput();
        this.createBottomButtons();
    }
    static get observedAttributes() {
        return ['name'];
    }
    get name() {
        return this.getAttribute('name') || 'Color select';
    }
    set name(value) {
        this.setAttribute('name', value);
        this.heading.innerText = value;
    }
    get selectedColor() {
        return Color_1.Color.fromHexString(this.colorInput.value);
    }
    set selectedColor(color) {
        this.colorInput.value = color.toHexString();
    }
    connectedCallback() {
        this._wasCancelled = true;
        this.cancelButton.addEventListener('click', this.onCancelButtonClick);
        this.confirmButton.addEventListener('click', this.onConfirmButtonClick);
    }
    disconnectedCallback() {
        this.cancelButton.removeEventListener('click', this.onCancelButtonClick);
        this.confirmButton.removeEventListener('click', this.onConfirmButtonClick);
    }
    get wasCancelled() {
        return this._wasCancelled;
    }
    close() {
        this.dispatchEvent(new CustomEvent('close'));
    }
    canClose() {
        return true;
    }
    createHeader() {
        const header = this.createBlock();
        header.classList.add(classNames.HEADER);
        this.appendChild(header);
        this.heading = document.createElement('h2');
        this.heading.classList.add(classNames.HEADING);
        this.heading.innerText = this.name;
        header.appendChild(this.heading);
    }
    createColorInput() {
        this.colorInput = document.createElement('input');
        this.colorInput.type = 'color';
        this.appendChild(this.colorInput);
    }
    createBottomButtons() {
        const bottomButtonsContainer = document.createElement('div');
        bottomButtonsContainer.classList.add(classNames.BOTTOM_BUTTONS);
        this.appendChild(bottomButtonsContainer);
        this.cancelButton = document.createElement('button');
        this.cancelButton.innerText = 'Cancel';
        this.confirmButton = document.createElement('button');
        this.confirmButton.innerText = 'Confirm';
        bottomButtonsContainer.appendChild(this.cancelButton);
        bottomButtonsContainer.appendChild(this.confirmButton);
    }
    onCancelButtonClick() {
        this.close();
    }
    onConfirmButtonClick() {
        this._wasCancelled = false;
        this.close();
    }
    createBlock() {
        const block = document.createElement('div');
        block.classList.add(classNames.BLOCK);
        return block;
    }
}
exports.ColorSelectDialog = ColorSelectDialog;
customElements.define('app-color-select-dialog', ColorSelectDialog);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./DialogBox.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./DialogBox.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".dialog-box {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0, 0);\n  z-index: 1;\n  background-color: #eee;\n  border: solid 1px black;\n  border-radius: 25px;\n  color: #222;\n  padding: 2rem;\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px black;\n  transition: transform 250ms ease-in-out;\n  will-change: transform; }\n\n.dialog-box--active {\n  transform: translate(-50%, -50%) scale(1, 1); }\n", ""]);

// exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./ColorSelectDialog.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./ColorSelectDialog.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".color-select-dialog {\n  padding: 1rem;\n  width: 50%;\n  max-width: 300px; }\n\n.color-select-dialog__block {\n  border-bottom: solid 1px black;\n  padding-bottom: 1em; }\n\n.color-select-dialog__heading {\n  margin: 0.5em 0; }\n\n.color-select-dialog__bottom-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1em; }\n  .color-select-dialog__bottom-buttons button {\n    font-size: 1.3em; }\n", ""]);

// exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LightType_1 = __webpack_require__(9);
const input_data_1 = __webpack_require__(2);
const RenderEvent_1 = __webpack_require__(1);
const LightPositionRadiusInput_1 = __webpack_require__(69);
class LightTypeSelect extends HTMLElement {
    constructor(dependencies) {
        super();
        this.lightTypeInfoList = [
            {
                lightType: LightType_1.LightType.Constant,
                optionValue: 'constant',
                optionLabel: 'Constant ([0, 0, 1])'
            },
            {
                lightType: LightType_1.LightType.Moving,
                optionValue: 'moving',
                optionLabel: 'Moving above the screen'
            }
        ];
        this.style.display = 'block';
        this.eventAggregator = dependencies.eventAggregator;
        this.setupLightTypeLabel();
        this.setupLightTypeSelect();
        this.onLightTypeChange = this.onLightTypeChange.bind(this);
        this.lightPositionRadiusInput = new LightPositionRadiusInput_1.LightPositionRadiusInput({
            eventAggregator: this.eventAggregator
        });
        this.lightPositionRadiusInput.style.marginLeft = '5px';
    }
    get selectedLightType() {
        const selectedValue = this.lightTypeSelect.value;
        const selectedLightTypeInfo = this.lightTypeInfoList.find(lightTypeInfo => lightTypeInfo.optionValue === selectedValue);
        if (!selectedLightTypeInfo) {
            throw new Error('Invalid light type selected');
        }
        return selectedLightTypeInfo.lightType;
    }
    set selectedLightType(lightType) {
        const foundLightTypeInfo = this.lightTypeInfoList.find(lightTypeInfo => lightTypeInfo.lightType === lightType);
        if (!foundLightTypeInfo) {
            throw new Error('Light type not supported');
        }
        this.lightTypeSelect.value = foundLightTypeInfo.optionValue;
        this.onLightTypeChange();
    }
    connectedCallback() {
        this.lightTypeSelect.addEventListener('change', this.onLightTypeChange);
    }
    disconnectedCallback() {
        this.lightTypeSelect.removeEventListener('change', this.onLightTypeChange);
    }
    setupLightTypeLabel() {
        const lightTypeLabel = document.createElement('label');
        lightTypeLabel.setAttribute('for', 'light-type-select');
        lightTypeLabel.innerText = 'Light type: ';
        this.appendChild(lightTypeLabel);
    }
    setupLightTypeSelect() {
        this.lightTypeSelect = document.createElement('select');
        this.lightTypeSelect.id = 'light-type-select';
        this.appendChild(this.lightTypeSelect);
        this.lightTypeInfoList.forEach(lightType => {
            const option = document.createElement('option');
            option.innerText = lightType.optionLabel;
            option.value = lightType.optionValue;
            this.lightTypeSelect.appendChild(option);
        });
    }
    onLightTypeChange() {
        const lightType = this.selectedLightType;
        this.eventAggregator.dispatchEvent(new input_data_1.NewLightTypeEvent(lightType));
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        if (lightType === LightType_1.LightType.Moving) {
            this.appendChild(this.lightPositionRadiusInput);
        }
        else {
            this.removeChild(this.lightPositionRadiusInput);
        }
    }
}
exports.LightTypeSelect = LightTypeSelect;
customElements.define('app-light-type-select', LightTypeSelect);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = __webpack_require__(2);
const configuration_1 = __webpack_require__(0);
class LightPositionRadiusInput extends HTMLElement {
    constructor(dependencies) {
        super();
        this.eventAggregator = dependencies.eventAggregator;
        const label = document.createElement('label');
        label.setAttribute('for', 'light-position-radius-input');
        label.innerText = 'Light position radius: ';
        this.appendChild(label);
        this.input = document.createElement('input');
        this.input.type = 'number';
        this.input.id = 'light-position-radius-input';
        this.input.min = '0';
        this.input.style.width = '80px';
        this.appendChild(this.input);
        this.setInputValue(configuration_1.configuration.movingLight.defaultRadius);
        this.onLightPositionRadiusChange = this.onLightPositionRadiusChange.bind(this);
    }
    get lightPositionRadius() {
        return parseFloat(this.input.value);
    }
    set lightPositionRadius(value) {
        this.setInputValue(value);
        this.onLightPositionRadiusChange();
    }
    connectedCallback() {
        this.input.addEventListener('change', this.onLightPositionRadiusChange);
    }
    disconnectedCallback() {
        this.input.removeEventListener('change', this.onLightPositionRadiusChange);
    }
    onLightPositionRadiusChange() {
        const lightPositionRadius = this.lightPositionRadius;
        this.setInputValue(lightPositionRadius);
        this.eventAggregator.dispatchEvent(new input_data_1.NewLightPositionRadiusEvent(lightPositionRadius));
    }
    setInputValue(value) {
        this.input.value = value.toFixed(2);
    }
}
exports.LightPositionRadiusInput = LightPositionRadiusInput;
customElements.define('app-light-position-radius-input', LightPositionRadiusInput);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = __webpack_require__(2);
const RenderEvent_1 = __webpack_require__(1);
const configuration_1 = __webpack_require__(0);
const ImageSelectDialog_1 = __webpack_require__(25);
const ImageSelectDialogButton_1 = __webpack_require__(26);
class NormalMapSelectButton extends ImageSelectDialogButton_1.ImageSelectDialogButton {
    constructor(dependencies) {
        super(dependencies);
        this.button.innerText = 'Select normal map';
    }
    setupDialogBox() {
        this.dialogBox = new ImageSelectDialog_1.ImageSelectDialog(configuration_1.configuration.presetNormalMaps, configuration_1.configuration.initialCustomNormalMapColorHex);
        this.dialogBox.name = 'Normal map';
    }
    onDialogBoxClosed() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.dialogBox.wasCancelled) {
                return;
            }
            const imageData = yield this.getSelectedImageData();
            this.eventAggregator.dispatchEvent(new input_data_1.NewNormalMapEvent(imageData));
            this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        });
    }
}
exports.NormalMapSelectButton = NormalMapSelectButton;
customElements.define('app-normal-map-select-button', NormalMapSelectButton);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoadingFinishedEvent_1 = __webpack_require__(28);
const LoadingStartedEvent_1 = __webpack_require__(29);
const LoadingBarDialog_1 = __webpack_require__(72);
const configuration_1 = __webpack_require__(0);
class LoadingUIService {
    constructor(dependencies) {
        this.loadedAssetsCount = 0;
        this.totalAssetsToLoadCount = 0;
        this.hideLoadingBarTimeoutId = null;
        this.eventAggregator = dependencies.eventAggregator;
        this.dialogOverlay = dependencies.dialogOverlay;
        this.loadingBarDialog = new LoadingBarDialog_1.LoadingBarDialog();
        this.onLoadingStartedEvent = this.onLoadingStartedEvent.bind(this);
        this.onLoadingFinishedEvent = this.onLoadingFinishedEvent.bind(this);
        this.hideLoadingBar = this.hideLoadingBar.bind(this);
    }
    init() {
        this.eventAggregator.addEventListener(LoadingFinishedEvent_1.LoadingFinishedEvent.eventType, this.onLoadingFinishedEvent);
        this.eventAggregator.addEventListener(LoadingStartedEvent_1.LoadingStartedEvent.eventType, this.onLoadingStartedEvent);
    }
    destroy() {
        this.eventAggregator.removeEventListener(LoadingFinishedEvent_1.LoadingFinishedEvent.eventType, this.onLoadingFinishedEvent);
        this.eventAggregator.removeEventListener(LoadingStartedEvent_1.LoadingStartedEvent.eventType, this.onLoadingStartedEvent);
        this.hideLoadingBar();
    }
    onLoadingStartedEvent() {
        if (this.totalAssetsToLoadCount === 0) {
            this.showLoadingBar();
        }
        this.totalAssetsToLoadCount += 1;
        this.updateLoadingBar();
        this.abortDelayedHideLoadingBar();
    }
    onLoadingFinishedEvent() {
        this.loadedAssetsCount += 1;
        this.updateLoadingBar();
        if (this.loadedAssetsCount === this.totalAssetsToLoadCount) {
            this.delayedHideLoadingBar();
        }
    }
    reset() {
        this.loadedAssetsCount = 0;
        this.totalAssetsToLoadCount = 0;
    }
    showLoadingBar() {
        this.dialogOverlay.showDialog(this.loadingBarDialog);
    }
    delayedHideLoadingBar() {
        this.hideLoadingBarTimeoutId = setTimeout(this.hideLoadingBar, configuration_1.configuration.loadingBarHideDelay);
    }
    abortDelayedHideLoadingBar() {
        if (this.hideLoadingBarTimeoutId) {
            clearTimeout(this.hideLoadingBarTimeoutId);
        }
    }
    hideLoadingBar() {
        this.reset();
        this.loadingBarDialog.close();
        this.hideLoadingBarTimeoutId = null;
    }
    updateLoadingBar() {
        this.loadingBarDialog.loadedAssetsCount = this.loadedAssetsCount.toFixed(0);
        this.loadingBarDialog.totalAssetsCount = this.totalAssetsToLoadCount.toFixed(0);
    }
}
exports.LoadingUIService = LoadingUIService;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(73);
class LoadingBarDialog extends HTMLElement {
    constructor() {
        super();
        this.className = 'loading-bar-dialog dialog-box';
        this.backgroundBar = document.createElement('div');
        this.backgroundBar.className = 'loading-dialog__background-bar';
        this.backgroundBar.innerText = ' ';
        this.progressLabel = document.createElement('span');
        const text = document.createElement('span');
        text.innerText = 'Loading... ';
        text.appendChild(this.progressLabel);
        this.appendChild(this.backgroundBar);
        this.appendChild(text);
        this.totalAssetsCount = '0';
        this.loadedAssetsCount = '0';
        this.update();
    }
    static get observedAttributes() {
        return ['total-assets-count', 'loaded-assets-count'];
    }
    connectedCallback() {
        // Empty
    }
    disconnectedCallback() {
        // Empty
    }
    attributeChangedCallback(attribute, _oldValue, _newValue) {
        if (attribute === 'total-assets-count' || attribute === 'loaded-assets-count') {
            this.update();
        }
    }
    close() {
        this.dispatchEvent(new CustomEvent('close'));
    }
    canClose() {
        return false;
    }
    get totalAssetsCount() {
        return this.getAttribute('total-assets-count') || '';
    }
    set totalAssetsCount(value) {
        this.setAttribute('total-assets-count', value);
    }
    get loadedAssetsCount() {
        return this.getAttribute('loaded-assets-count') || '';
    }
    set loadedAssetsCount(value) {
        this.setAttribute('loaded-assets-count', value);
    }
    update() {
        const loadedAssetsCount = parseInt(this.loadedAssetsCount, 10);
        const totalAssetsCount = parseInt(this.totalAssetsCount, 10);
        let progress = 100;
        if (totalAssetsCount > 0) {
            progress = Math.round(loadedAssetsCount / totalAssetsCount * 100);
        }
        this.backgroundBar.style.width = `${progress}%`;
        this.progressLabel.innerText = `${loadedAssetsCount} / ${totalAssetsCount} (${progress} %)`;
    }
}
exports.LoadingBarDialog = LoadingBarDialog;
window.customElements.define('app-loading-bar-dialog', LoadingBarDialog);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./LoadingBarDialog.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./LoadingBarDialog.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".loading-bar-dialog {\n  overflow: hidden; }\n\n.loading-dialog__background-bar {\n  position: absolute;\n  height: 100%;\n  transition: width 200ms ease-in-out;\n  background-color: cyan;\n  margin: -2rem;\n  z-index: -1; }\n", ""]);

// exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(6);
class MousePositionTransformer {
    constructor(canvas) {
        this.canvas = canvas;
        this.updateCanvasOffset();
        setInterval(() => {
            this.updateCanvasOffset();
        }, 1000);
    }
    updateCanvasOffset() {
        this.canvasClientRect = this.canvas.getBoundingClientRect();
    }
    getPointFromMouseEvent(event) {
        return new Point_1.Point(event.clientX - this.canvasClientRect.left, event.clientY - this.canvasClientRect.top).floor();
    }
}
exports.MousePositionTransformer = MousePositionTransformer;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Layer_1 = __webpack_require__(13);
const Path_1 = __webpack_require__(14);
const Polygon_1 = __webpack_require__(24);
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(8);
const PointClickEvent_1 = __webpack_require__(27);
const RenderEvent_1 = __webpack_require__(1);
const RenderFinishedEvent_1 = __webpack_require__(31);
const SyncComponentsEvent_1 = __webpack_require__(3);
class NewPolygonUIController {
    constructor(dependencies) {
        this.pathLayer = new Layer_1.Layer(LEX_1.LEX.PATH_LAYER_NAME);
        this.applicationUIContainer = dependencies.applicationUIContainer;
        this.canvas = dependencies.canvas;
        this.stage = dependencies.stage;
        this.polygonLayer = dependencies.polygonLayer;
        this.mousePositionTransformer = dependencies.mousePositionTransformer;
        this.renderer = dependencies.renderer;
        this.eventAggregator = dependencies.eventAggregator;
        this.closePath = this.closePath.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onPointClick = this.onPointClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.drawNewLineGuide = this.drawNewLineGuide.bind(this);
    }
    init() {
        this.stage.layers.push(this.pathLayer);
        this.startNewUnfinishedPath();
    }
    destroy() {
        this.removeEventListeners();
        this.stage.removeLayer(this.pathLayer);
    }
    addNewPoint(point) {
        this.unfinishedPath.addVertex(point);
        this.dispatchUpdateUIEvents();
        if (this.unfinishedPath.getVerticesCount() === 1) {
            this.lastMousePosition = point;
            this.addEventListeners();
        }
    }
    onMouseMove(event) {
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        this.lastMousePosition = this.mousePositionTransformer.getPointFromMouseEvent(event);
    }
    drawNewLineGuide() {
        const lastPoint = this.unfinishedPath.getVertex(this.unfinishedPath.getVerticesCount() - 1);
        this.renderer.drawLine(lastPoint, this.lastMousePosition, configuration_1.configuration.newLinePreviewProperties);
    }
    onPointClick(event) {
        const pathPointElement = event.payload;
        if (pathPointElement.path === this.unfinishedPath && pathPointElement.initial) {
            event.handled = true;
            try {
                this.closePath();
                pathPointElement.initial = false;
            }
            catch (error) {
                alert(error.message);
            }
        }
    }
    startNewUnfinishedPath() {
        this.unfinishedPath = new Path_1.Path([], configuration_1.configuration.newPolygonLineProperties);
        this.pathLayer.paths.push(this.unfinishedPath);
        this.removeEventListeners();
    }
    closePath() {
        if (this.unfinishedPath.getVerticesCount() < configuration_1.configuration.minPolygonPoints) {
            throw new Error(`Polygon must have at least ${configuration_1.configuration.minPolygonPoints} vertices`);
        }
        this.unfinishedPath.lineProperties = configuration_1.configuration.polygonLineProperties;
        const polygon = new Polygon_1.Polygon(this.unfinishedPath);
        this.polygonLayer.paths.push(polygon);
        this.pathLayer.removePath(this.unfinishedPath);
        this.startNewUnfinishedPath();
        this.dispatchUpdateUIEvents();
    }
    dispatchUpdateUIEvents() {
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        this.eventAggregator.dispatchEvent(new SyncComponentsEvent_1.SyncComponentsEvent());
    }
    onKeyDown(event) {
        switch (event.keyCode) {
            case 27:
                this.pathLayer.removePath(this.unfinishedPath);
                this.startNewUnfinishedPath();
                this.dispatchUpdateUIEvents();
                break;
            default:
                break;
        }
    }
    addEventListeners() {
        this.canvas.addEventListener('mousemove', this.onMouseMove);
        this.eventAggregator.addEventListener(RenderFinishedEvent_1.RenderFinishedEvent.name, this.drawNewLineGuide);
        window.addEventListener('keydown', this.onKeyDown);
        this.eventAggregator.addEventListener(PointClickEvent_1.PointClickEvent.eventType, this.onPointClick);
    }
    removeEventListeners() {
        this.canvas.removeEventListener('mousemove', this.onMouseMove);
        this.eventAggregator.removeEventListener(RenderFinishedEvent_1.RenderFinishedEvent.name, this.drawNewLineGuide);
        window.removeEventListener('keydown', this.onKeyDown);
        this.eventAggregator.removeEventListener(PointClickEvent_1.PointClickEvent.eventType, this.onPointClick);
    }
}
exports.NewPolygonUIController = NewPolygonUIController;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(6);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(3);
class PathDraggingService {
    constructor(dependencies) {
        this._isDragging = false;
        this.eventAggregator = dependencies.eventAggregator;
        this.stage = dependencies.stage;
        this.canvas = dependencies.canvas;
        this.mousePositionTransformer = dependencies.mousePositionTransformer;
        this.closestPathFinder = dependencies.closestPathFinder;
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }
    init() {
        // TODO: possible path ghost layer here
    }
    destroy() {
        this.stopDraggingPath();
    }
    get isDragging() {
        return this._isDragging;
    }
    startMovingPath(event) {
        const point = this.mousePositionTransformer.getPointFromMouseEvent(event);
        this.pathToDrag = undefined;
        this.previousPoint = undefined;
        const allPathsInBoundingBox = [];
        for (const layer of this.stage.layers) {
            const pathsInBoundingBox = layer.paths.filter(path => path.isPointInBoundingBox(point));
            allPathsInBoundingBox.push(...pathsInBoundingBox);
        }
        if (allPathsInBoundingBox.length === 0) {
            return alert('Cannot drag path - no path found, point is not in the bounding box');
        }
        this.pathToDrag = this.closestPathFinder.getClosestPath(allPathsInBoundingBox, point);
        this.previousPoint = point;
        this._isDragging = true;
        this.addEventListeners();
    }
    addEventListeners() {
        this.canvas.addEventListener('mousemove', this.onMouseMove);
        this.canvas.addEventListener('mouseup', this.onMouseUp);
        this.canvas.addEventListener('mouseout', this.onMouseOut);
    }
    removeEventListeners() {
        this.canvas.removeEventListener('mousemove', this.onMouseMove);
        this.canvas.removeEventListener('mouseup', this.onMouseUp);
        this.canvas.removeEventListener('mouseout', this.onMouseOut);
    }
    onMouseMove(event) {
        if (!this.pathToDrag || !this.previousPoint) {
            return;
        }
        const point = this.mousePositionTransformer.getPointFromMouseEvent(event);
        const transitionVector = Point_1.Point.subtract(point, this.previousPoint);
        for (const pathPoint of this.pathToDrag.getVertices()) {
            pathPoint.moveTo(Point_1.Point.add(pathPoint, transitionVector));
        }
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        this.eventAggregator.dispatchEvent(new SyncComponentsEvent_1.SyncComponentsEvent());
        this.previousPoint = point;
    }
    onMouseUp(_event) {
        this.stopDraggingPath();
        this.cancelNextClickEvent();
    }
    onMouseOut(_event) {
        this.stopDraggingPath();
        this._isDragging = false;
    }
    stopDraggingPath() {
        this.removeEventListeners();
        this.pathToDrag = undefined;
        this.previousPoint = undefined;
    }
    cancelNextClickEvent() {
        const handler = (event) => {
            this.canvas.removeEventListener('click', handler, true);
            this._isDragging = false;
            event.stopPropagation();
        };
        this.canvas.addEventListener('click', handler, true);
    }
}
exports.PathDraggingService = PathDraggingService;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(12);
const Layer_1 = __webpack_require__(13);
const LineProperties_1 = __webpack_require__(11);
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(8);
const FinishPointDragEvent_1 = __webpack_require__(32);
const PointDragEvent_1 = __webpack_require__(33);
const StartPointDragEvent_1 = __webpack_require__(34);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(3);
class PointDraggingService {
    constructor(dependencies) {
        this.eventAggregator = dependencies.eventAggregator;
        this.stage = dependencies.stage;
        this.canvas = dependencies.canvas;
        this.onStartPointDrag = this.onStartPointDrag.bind(this);
        this.onFinishPointDrag = this.onFinishPointDrag.bind(this);
        this.onPointDrag = this.onPointDrag.bind(this);
    }
    init() {
        this.pathGhostLayer = new Layer_1.Layer(LEX_1.LEX.PATH_GHOST_LAYER_NAME);
        this.stage.layers.splice(0, 0, this.pathGhostLayer);
        this.eventAggregator.addEventListener(StartPointDragEvent_1.StartPointDragEvent.eventType, this.onStartPointDrag);
        this.eventAggregator.addEventListener(FinishPointDragEvent_1.FinishPointDragEvent.eventType, this.onFinishPointDrag);
        this.eventAggregator.addEventListener(PointDragEvent_1.PointDragEvent.eventType, this.onPointDrag);
    }
    destroy() {
        this.pathGhostLayer.paths = [];
        this.stage.removeLayer(this.pathGhostLayer);
        this.eventAggregator.removeEventListener(StartPointDragEvent_1.StartPointDragEvent.eventType, this.onStartPointDrag);
        this.eventAggregator.removeEventListener(FinishPointDragEvent_1.FinishPointDragEvent.eventType, this.onFinishPointDrag);
        this.eventAggregator.removeEventListener(PointDragEvent_1.PointDragEvent.eventType, this.onPointDrag);
    }
    onStartPointDrag(event) {
        event.handled = true;
        if (!configuration_1.configuration.displayPathGhostWhenDragging) {
            return;
        }
        const path = event.payload.path.clone();
        path.lineProperties = new LineProperties_1.LineProperties(COLORS_1.COLORS.GREEN, 1);
        this.pathGhostLayer.paths.push(path);
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        this.eventAggregator.dispatchEvent(new SyncComponentsEvent_1.SyncComponentsEvent());
    }
    onFinishPointDrag(event) {
        event.handled = true;
        if (!configuration_1.configuration.displayPathGhostWhenDragging) {
            return;
        }
        this.pathGhostLayer.paths = [];
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        this.eventAggregator.dispatchEvent(new SyncComponentsEvent_1.SyncComponentsEvent());
    }
    onPointDrag(event) {
        const { element, newPosition } = event.payload;
        for (const point of element.path.getVerticesIterator()) {
            if (point.equals(newPosition)) {
                return;
            }
        }
        let x = newPosition.x;
        let y = newPosition.y;
        if (x < 0) {
            x = 0;
        }
        else if (x >= this.canvas.width) {
            x = this.canvas.width - 1;
        }
        if (y < 0) {
            y = 0;
        }
        else if (y >= this.canvas.height) {
            y = this.canvas.height - 1;
        }
        element.point.moveTo(x, y);
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        event.handled = true;
    }
}
exports.PointDraggingService = PointDraggingService;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LineClickEvent_1 = __webpack_require__(35);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(3);
const configuration_1 = __webpack_require__(0);
class PointInserterService {
    constructor(dependencies) {
        this.previousLineClickTimestamp = 0;
        this.eventAggregator = dependencies.eventAggregator;
        this.onLineClick = this.onLineClick.bind(this);
    }
    init() {
        this.eventAggregator.addEventListener(LineClickEvent_1.LineClickEvent.eventType, this.onLineClick);
    }
    destroy() {
        this.eventAggregator.removeEventListener(LineClickEvent_1.LineClickEvent.eventType, this.onLineClick);
    }
    onLineClick(event) {
        const previousLineHit = this.previousLineHit;
        const previousLineClickTimestamp = this.previousLineClickTimestamp;
        const currentTimestamp = Date.now();
        this.previousLineHit = event.payload.line;
        this.previousLineClickTimestamp = currentTimestamp;
        if (!previousLineHit ||
            currentTimestamp - previousLineClickTimestamp > configuration_1.configuration.doubleClickMaxDelay) {
            return;
        }
        if (previousLineHit.equals(event.payload.line)) {
            const index = event.payload.path.findPointIndex(event.payload.line.p2);
            const newPoint = event.payload.line.getMiddlePoint();
            const flooredPoint = newPoint.floor();
            try {
                event.payload.path.insertVertex(flooredPoint, index);
            }
            catch (error) {
                return alert(error.message);
            }
            // TODO: fix wrong rendering
            this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
            this.eventAggregator.dispatchEvent(new SyncComponentsEvent_1.SyncComponentsEvent());
        }
    }
}
exports.PointInserterService = PointInserterService;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(0);
const PointClickEvent_1 = __webpack_require__(27);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(3);
class PointRemoverService {
    constructor(dependencies) {
        this.previousClickTimestamp = 0;
        this.eventAggregator = dependencies.eventAggregator;
        this.onPointClick = this.onPointClick.bind(this);
    }
    init() {
        this.eventAggregator.addEventListener(PointClickEvent_1.PointClickEvent.eventType, this.onPointClick);
    }
    destroy() {
        this.eventAggregator.removeEventListener(PointClickEvent_1.PointClickEvent.eventType, this.onPointClick);
    }
    onPointClick(event) {
        const currentTimestamp = Date.now();
        const pathPointElement = event.payload;
        const previousPathPointElement = this.previousPathPointElement;
        const previousClickTimestamp = this.previousClickTimestamp;
        this.updatePreviousClickInformation(event, currentTimestamp);
        if (!previousPathPointElement || previousPathPointElement !== pathPointElement) {
            return;
        }
        if (currentTimestamp - previousClickTimestamp > configuration_1.configuration.doubleClickMaxDelay) {
            return;
        }
        this.removePreviousClickedPoint();
        event.handled = true;
    }
    updatePreviousClickInformation(event, timestamp) {
        this.previousPathPointElement = event.payload;
        this.previousClickTimestamp = timestamp;
    }
    removePreviousClickedPoint() {
        const path = this.previousPathPointElement.path;
        const point = this.previousPathPointElement.point;
        try {
            path.removeVertex(point);
        }
        catch (error) {
            return alert('Cannot remove vertex');
        }
        this.previousPathPointElement.remove();
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        this.eventAggregator.dispatchEvent(new SyncComponentsEvent_1.SyncComponentsEvent());
    }
}
exports.PointRemoverService = PointRemoverService;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PathPointElement_1 = __webpack_require__(82);
const SyncComponentsEvent_1 = __webpack_require__(3);
class PointSyncService {
    constructor(dependencies) {
        this.pathPointElements = [];
        this.stage = dependencies.stage;
        this.container = dependencies.container;
        this.mousePositionTransformer = dependencies.mousePositionTransformer;
        this.eventAggregator = dependencies.eventAggregator;
        this.pathPointDependencies = {
            eventAggregator: this.eventAggregator,
            mousePositionTransformer: this.mousePositionTransformer
        };
        this.synchronizeElements = this.synchronizeElements.bind(this);
    }
    init() {
        this.eventAggregator.addEventListener(SyncComponentsEvent_1.SyncComponentsEvent.eventType, this.synchronizeElements);
    }
    destroy() {
        this.eventAggregator.removeEventListener(SyncComponentsEvent_1.SyncComponentsEvent.eventType, this.synchronizeElements);
    }
    synchronizeElements(event) {
        const elementsToRemove = this.getRedundantElements();
        elementsToRemove.forEach(component => component.remove());
        const pathPointTuples = this.getPathPointTuples();
        const pointsWithoutElements = this.getPointsWithoutElements(pathPointTuples);
        const newElements = this.createPathPointElements(pointsWithoutElements);
        newElements.forEach(element => this.container.appendChild(element));
        const elementsNotRemoved = this.pathPointElements.filter(element => elementsToRemove.indexOf(element) === -1);
        this.pathPointElements = [...newElements, ...elementsNotRemoved];
        event.handled = true;
    }
    getPathPointTuples() {
        const pathPointTuples = [];
        this.stage.layers.forEach(layer => {
            layer.paths.forEach(path => {
                path.getVertices().forEach(point => {
                    pathPointTuples.push({
                        path,
                        point
                    });
                });
            });
        });
        return pathPointTuples;
    }
    createPathPointElements(pathPoints) {
        return pathPoints.map(pathPoint => new PathPointElement_1.PathPointElement(pathPoint.path, pathPoint.point, this.pathPointDependencies));
    }
    getRedundantElements() {
        const activePaths = this.getActivePaths();
        return this.pathPointElements.filter(component => activePaths.indexOf(component.path) === -1 ||
            component.path.getVertices().indexOf(component.point) === -1);
    }
    getPointsWithoutElements(pathPoints) {
        return pathPoints.filter(pathPoint => !this.pathPointElements.find(component => component.path === pathPoint.path && component.point === pathPoint.point));
    }
    getActivePaths() {
        const paths = [];
        this.stage.layers.map(layer => paths.push(...layer.paths));
        return paths;
    }
}
exports.PointSyncService = PointSyncService;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FinishPointDragEvent_1 = __webpack_require__(32);
const PointDragEvent_1 = __webpack_require__(33);
const StartPointDragEvent_1 = __webpack_require__(34);
const PointClickEvent_1 = __webpack_require__(27);
__webpack_require__(83);
const classNames = {
    COMPONENT: 'application-ui__vertex',
    INITIAL: 'application-ui__vertex--initial'
};
class PathPointElement extends HTMLElement {
    constructor(path, point, dependencies) {
        super();
        this.classList.add(classNames.COMPONENT);
        this.path = path;
        this.point = point;
        this.mousePositionTransformer = dependencies.mousePositionTransformer;
        this.eventAggregator = dependencies.eventAggregator;
        this.updatePosition = this.updatePosition.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.stopDragging = this.stopDragging.bind(this);
    }
    updatePosition() {
        this.style.backgroundColor = this.path.lineProperties.color.fillStyle;
        this.style.top = `${this.point.y}px`;
        this.style.left = `${this.point.x}px`;
    }
    get initial() {
        return this.classList.contains(classNames.INITIAL);
    }
    set initial(isInitial) {
        if (isInitial) {
            this.classList.add(classNames.INITIAL);
        }
        else {
            this.classList.remove(classNames.INITIAL);
        }
    }
    connectedCallback() {
        this.updatePosition();
        if (this.path.getVerticesCount() === 1 ||
            (!this.path.closed && this.path.findPointIndex(this.point) === 0)) {
            this.initial = true;
        }
        this.addEventListener('mousedown', this.onMouseDown);
        this.point.moveCallback = this.updatePosition;
    }
    disconnectedCallback() {
        this.point.moveCallback = null;
        this.removeEventListener('mousedown', this.onMouseDown);
    }
    onMouseDown() {
        const event = new PointClickEvent_1.PointClickEvent(this);
        this.eventAggregator.dispatchEvent(event);
        if (event.handled) {
            return;
        }
        this.eventAggregator.dispatchEvent(new StartPointDragEvent_1.StartPointDragEvent(this));
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mouseup', this.stopDragging);
    }
    onMouseMove(event) {
        const mousePosition = this.mousePositionTransformer.getPointFromMouseEvent(event);
        this.eventAggregator.dispatchEvent(new PointDragEvent_1.PointDragEvent(this, mousePosition));
    }
    stopDragging() {
        this.eventAggregator.dispatchEvent(new FinishPointDragEvent_1.FinishPointDragEvent(this));
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseup', this.stopDragging);
    }
}
exports.PathPointElement = PathPointElement;
customElements.define('app-path-point', PathPointElement);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./PathPointElement.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./PathPointElement.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".application-ui__vertex {\n  border: solid 1px black;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border: solid 2px; }\n  .application-ui__vertex:not(:active) {\n    border-color: green; }\n  .application-ui__vertex:active {\n    border-color: red; }\n\n.application-ui__vertex--initial {\n  background-color: #0051ff; }\n", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoadButton_1 = __webpack_require__(86);
const SaveButton_1 = __webpack_require__(87);
class SerializationService {
    constructor(dependencies) {
        this.eventAggregator = dependencies.eventAggregator;
        this.stage = dependencies.stage;
    }
    init() {
        const serializationContainer = document.getElementById('serialization-container');
        if (!serializationContainer) {
            throw new Error('Serialization container not found');
        }
        this.serializationContainer = serializationContainer;
        const loadButton = new LoadButton_1.LoadButton({
            eventAggregator: this.eventAggregator,
            stage: this.stage
        });
        const saveButton = new SaveButton_1.SaveButton({
            stage: this.stage
        });
        this.serializationContainer.appendChild(loadButton);
        this.serializationContainer.appendChild(saveButton);
    }
    destroy() {
        // tslint:disable-next-line
        this.serializationContainer.innerHTML = '';
    }
}
exports.SerializationService = SerializationService;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(3);
const LEX_1 = __webpack_require__(8);
class LoadButton extends HTMLElement {
    constructor(dependencies) {
        super();
        this.eventAggregator = dependencies.eventAggregator;
        this.stage = dependencies.stage;
        this.buttonElement = document.createElement('button');
        this.buttonElement.innerText = 'Load';
        this.appendChild(this.buttonElement);
        this.onClick = this.onClick.bind(this);
    }
    connectedCallback() {
        this.buttonElement.addEventListener('click', this.onClick);
    }
    disconnectedCallback() {
        this.buttonElement.removeEventListener('click', this.onClick);
    }
    onClick() {
        const serializedData = prompt('Please paste the serialized data');
        if (!serializedData) {
            return;
        }
        const polygonLayer = this.stage.findLayerByName(LEX_1.LEX.POLYGON_LAYER_NAME);
        const currentSerializableLayer = polygonLayer.toSerializableObject();
        try {
            const serializableLayer = JSON.parse(serializedData);
            polygonLayer.fromSerializableObject(serializableLayer);
        }
        catch (error) {
            polygonLayer.fromSerializableObject(currentSerializableLayer);
            alert('Invalid data');
        }
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        this.eventAggregator.dispatchEvent(new SyncComponentsEvent_1.SyncComponentsEvent());
    }
}
exports.LoadButton = LoadButton;
customElements.define('app-load-button', LoadButton);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LEX_1 = __webpack_require__(8);
class SaveButton extends HTMLElement {
    constructor(dependencies) {
        super();
        this.stage = dependencies.stage;
        this.buttonElement = document.createElement('button');
        this.buttonElement.innerText = 'Save';
        this.appendChild(this.buttonElement);
        this.onClick = this.onClick.bind(this);
    }
    connectedCallback() {
        this.buttonElement.addEventListener('click', this.onClick);
    }
    disconnectedCallback() {
        this.buttonElement.removeEventListener('click', this.onClick);
    }
    onClick() {
        const polygonLayer = this.stage.findLayerByName(LEX_1.LEX.POLYGON_LAYER_NAME);
        const serializableObject = polygonLayer.toSerializableObject();
        const serializedData = JSON.stringify(serializableObject);
        prompt('Copy the data', serializedData);
    }
}
exports.SaveButton = SaveButton;
customElements.define('app-save-button', SaveButton);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(89);
class DialogOverlay extends HTMLElement {
    constructor() {
        super();
        this.dialogBoxStack = [];
        this.overlayElement = document.createElement('div');
        this.overlayElement.classList.add('overlay');
        this.appendChild(this.overlayElement);
        this.onOverlayClick = this.onOverlayClick.bind(this);
        this.onDialogClose = this.onDialogClose.bind(this);
    }
    connectedCallback() {
        this.overlayElement.addEventListener('click', this.onOverlayClick);
    }
    disconnectedCallback() {
        this.overlayElement.removeEventListener('click', this.onOverlayClick);
    }
    showDialog(dialogBox) {
        if (this.dialogBoxStack.length === 0) {
            this.showOverlay();
        }
        this.dialogBoxStack.push(dialogBox);
        this.appendChild(dialogBox);
        dialogBox.addEventListener('close', this.onDialogClose);
        requestAnimationFrame(() => {
            dialogBox.classList.add('dialog-box--active');
        });
    }
    onOverlayClick() {
        if (this.dialogBoxStack.length === 0) {
            return;
        }
        const topmostDialogBox = this.dialogBoxStack[this.dialogBoxStack.length - 1];
        if (!topmostDialogBox.canClose()) {
            return;
        }
        topmostDialogBox.close();
    }
    onDialogClose(event) {
        const dialogBox = event.target;
        this.removeChild(dialogBox);
        dialogBox.removeEventListener('close', this.onDialogClose);
        requestAnimationFrame(() => {
            dialogBox.classList.remove('dialog-box--active');
        });
        const dialogBoxIndex = this.dialogBoxStack.indexOf(dialogBox);
        this.dialogBoxStack.splice(dialogBoxIndex, 1);
        if (this.dialogBoxStack.length === 0) {
            this.hideOverlay();
        }
    }
    showOverlay() {
        this.overlayElement.classList.add('overlay--visible');
        document.body.classList.add('popup-active');
    }
    hideOverlay() {
        this.overlayElement.classList.remove('overlay--visible');
        document.body.classList.remove('popup-active');
    }
}
exports.DialogOverlay = DialogOverlay;
customElements.define('app-dialog-overlay', DialogOverlay);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./DialogOverlay.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./DialogOverlay.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "body.popup-active {\n  overflow: hidden; }\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: 1;\n  background-color: black;\n  transition: opacity 250ms ease-in-out;\n  pointer-events: none; }\n\n.overlay--visible {\n  opacity: 0.5;\n  pointer-events: all; }\n", ""]);

// exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const InstructionsDialog_1 = __webpack_require__(36);
class InstructionsButton extends HTMLElement {
    constructor() {
        super();
        this.button = document.createElement('button');
        this.button.textContent = 'Instructions';
        this.button.className = 'instructions-button';
        this.appendChild(this.button);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.instructionsDialog = new InstructionsDialog_1.InstructionsDialog();
    }
    static get observedAttributes() {
        return ['dialog-overlay-id'];
    }
    get dialogOverlayId() {
        return this.getAttribute('dialog-overlay-id') || '';
    }
    set dialogOverlayId(value) {
        this.setAttribute('dialog-overlay-id', value);
    }
    connectedCallback() {
        this.button.addEventListener('click', this.onButtonClick);
    }
    disconnectedCallback() {
        this.button.removeEventListener('click', this.onButtonClick);
    }
    onButtonClick() {
        const dialogOverlay = document.getElementById(this.dialogOverlayId);
        if (!dialogOverlay) {
            throw new Error('Dialog overlay not found');
        }
        dialogOverlay.showDialog(this.instructionsDialog);
    }
}
exports.InstructionsButton = InstructionsButton;
window.customElements.define('app-instructions-button', InstructionsButton);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./InstructionsDialog.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./InstructionsDialog.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".instructions-dialog {\n  background-color: #1f350f;\n  color: #eee; }\n\n.instructions-dialog__title {\n  margin: 0; }\n", ""]);

// exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(3);
class PolygonClippingService {
    constructor(dependencies) {
        this.polygonClipper = dependencies.polygonClipper;
        this.eventAggregator = dependencies.eventAggregator;
        this.polygonLayer = dependencies.polygonLayer;
        this.closestPathFinder = dependencies.closestPathFinder;
    }
    init() {
        // Nothing to do here
    }
    destroy() {
        // Nothing to do here
    }
    clipPolygons(point) {
        const polygonsInBoundingBox = this.polygonLayer.paths.filter(path => path.isPointInBoundingBox(point));
        if (polygonsInBoundingBox.length < 2) {
            return alert('Click in the bounding box of at least 2 polygons');
        }
        const convexPolygons = polygonsInBoundingBox.filter(polygon => polygon.isConvex());
        if (convexPolygons.length === 0) {
            return alert('Cannot find a convex polygon');
        }
        const closestConvexPolygon = this.closestPathFinder.getClosestPath(convexPolygons, point);
        const subjectPolygons = polygonsInBoundingBox.filter(polygon => polygon !== closestConvexPolygon);
        const closestSubjectPolygon = this.closestPathFinder.getClosestPath(subjectPolygons, point);
        const clippedPolygon = this.polygonClipper.clipPolygon(closestSubjectPolygon, closestConvexPolygon);
        if (!clippedPolygon) {
            return alert('Cannot clip polygons (they do not overlap)');
        }
        this.polygonLayer.removePath(closestSubjectPolygon);
        this.polygonLayer.removePath(closestConvexPolygon);
        this.polygonLayer.paths.push(clippedPolygon);
        this.eventAggregator.dispatchEvent(new SyncComponentsEvent_1.SyncComponentsEvent());
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
    }
}
exports.PolygonClippingService = PolygonClippingService;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventQueue_1 = __webpack_require__(96);
class EventAggregator {
    constructor() {
        this.listenerMap = new Map();
        this.eventQueue = new EventQueue_1.EventQueue();
        this.isDispatching = false;
    }
    addEventListener(eventType, listener) {
        const eventListeners = this.getEventListeners(eventType);
        if (eventListeners.indexOf(listener) === -1) {
            eventListeners.push(listener);
        }
        this.listenerMap.set(eventType, eventListeners);
    }
    removeEventListener(eventType, listener) {
        const eventListeners = this.getEventListeners(eventType);
        const listenerIndex = eventListeners.indexOf(listener);
        if (listenerIndex !== -1) {
            eventListeners.splice(listenerIndex, 1);
        }
        this.listenerMap.set(eventType, eventListeners);
    }
    dispatchEvent(event) {
        this.eventQueue.enqueue(event);
        if (!this.isDispatching) {
            this.dispatchEventFromQueue();
        }
    }
    dispatchEventFromQueue() {
        this.isDispatching = true;
        const event = this.eventQueue.dequeue();
        const eventListeners = this.getEventListeners(event.eventType);
        eventListeners.forEach(listener => listener(event));
        if (this.eventQueue.isEmpty()) {
            this.isDispatching = false;
        }
        else {
            this.dispatchEventFromQueue();
        }
    }
    getEventListeners(eventType) {
        return this.listenerMap.get(eventType) || [];
    }
}
exports.EventAggregator = EventAggregator;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class EventQueue {
    constructor() {
        this._queue = [];
    }
    enqueue(event) {
        this._queue.push(event);
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this._queue.splice(0, 1)[0];
    }
    getLength() {
        return this._queue.length;
    }
    isEmpty() {
        return this.getLength() === 0;
    }
}
exports.EventQueue = EventQueue;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDZiNzA1MTM3OTc4MzM5MjE3ODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9SZW5kZXJFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1ZlY3RvcjMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xFWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0xpZ2h0VHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0NvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vTGluZVByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9DT0xPUlMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9MYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1BhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9MaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRDb2xvckV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFBvc2l0aW9uRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRUeXBlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld05vcm1hbE1hcEV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5Z29uLWZpbGxlci9GaWxsV29ya2VyTWVzc2FnZVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Qb2x5Z29uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZ0J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL1BvaW50Q2xpY2tFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3VpL0xvYWRpbmdGaW5pc2hlZEV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvdWkvTG9hZGluZ1N0YXJ0ZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9EaWFsb2dCb3hCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9SZW5kZXJGaW5pc2hlZEV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9GaW5pc2hQb2ludERyYWdFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3BvaW50LWRyYWcvUG9pbnREcmFnRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL1N0YXJ0UG9pbnREcmFnRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9MaW5lQ2xpY2tFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2Nzcz80NDQ2Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL3dlYmNvbXBvbmVudHMtaGktc2QtY2UuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9IaXRUZXN0UmVzdWx0LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5Z29uLWZpbGxlci9Qb2x5Z29uRmlsbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5Z29uLWZpbGxlci9BY3RpdmVFZGdlLnRzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3RhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL0Nsb3Nlc3RQYXRoRmluZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9JbWFnZURvd25sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL0lucHV0RGF0YUluaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9MaWdodFNpbXVsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvUG9seWdvbkNsaXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1VJQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvSW5wdXREYXRhU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2lucHV0LWRhdGEvQmFja2dyb3VuZFNlbGVjdEJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3M/NmNmNiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9IZWlnaHRNYXBTZWxlY3RCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodENvbG9yU2VsZWN0QnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvRGlhbG9nQm94LnNjc3M/Njc0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9EaWFsb2dCb3guc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3M/OTYyNCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodFR5cGVTZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodFBvc2l0aW9uUmFkaXVzSW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9Ob3JtYWxNYXBTZWxlY3RCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0xvYWRpbmdVSVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvbG9hZGluZy1iYXItZGlhbG9nL0xvYWRpbmdCYXJEaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvbG9hZGluZy1iYXItZGlhbG9nL0xvYWRpbmdCYXJEaWFsb2cuc2Nzcz8zMWM4Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2xvYWRpbmctYmFyLWRpYWxvZy9Mb2FkaW5nQmFyRGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvTmV3UG9seWdvblVJQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUGF0aERyYWdnaW5nU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUG9pbnREcmFnZ2luZ1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1BvaW50SW5zZXJ0ZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2ludFJlbW92ZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2ludFN5bmNTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQuc2Nzcz9mNmM0Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9TZXJpYWxpemF0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL0xvYWRCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9TYXZlQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzPzkwYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzPzRlMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvRXZlbnRBZ2dyZWdhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvRXZlbnRRdWV1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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QUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxTQUFTO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzVCLENBQUM7SUFFTSxPQUFPO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGO0FBdEJELGdDQXNCQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDZiNzA1MTM3OTc4MzM5MjE3ODIiLCJpbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdjb21tb24vQ09MT1JTJztcclxuaW1wb3J0IHsgTGluZVByb3BlcnRpZXMgfSBmcm9tICdjb21tb24vTGluZVByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuY29uc3QgY29uZmlndXJhdGlvbiA9IHtcclxuICBuZXdMaW5lUHJldmlld1Byb3BlcnRpZXM6IG5ldyBMaW5lUHJvcGVydGllcyhDT0xPUlMuQkxVRSwgMiksXHJcbiAgbmV3UG9seWdvbkxpbmVQcm9wZXJ0aWVzOiBuZXcgTGluZVByb3BlcnRpZXMoQ09MT1JTLlJFRCwgMSksXHJcbiAgcG9seWdvbkxpbmVQcm9wZXJ0aWVzOiBMaW5lUHJvcGVydGllcy5nZXREZWZhdWx0KCksXHJcblxyXG4gIGFwcGxpY2F0aW9uVUlDb250YWluZXJJRDogJ2FwcGxpY2F0aW9uLXVpJyxcclxuXHJcbiAgaGl0VG9sZXJhbmNlOiAxMCxcclxuICBtaW5Qb2x5Z29uUG9pbnRzOiAzLFxyXG4gIGRvdWJsZUNsaWNrTWF4RGVsYXk6IDUwMCxcclxuXHJcbiAgZGlzcGxheVBhdGhHaG9zdFdoZW5EcmFnZ2luZzogZmFsc2UsXHJcbiAgY2FudmFzRm9udDogJzMwcHQgc2VyaWYnLFxyXG4gIGxvYWRpbmdCYXJIaWRlRGVsYXk6IDE1MDAsXHJcblxyXG4gIGluaXRpYWxDdXN0b21CYWNrZ3JvdW5kQ29sb3JIZXg6ICcjMDBhMmU4JywgLy8gYmx1ZS1pc2hcclxuICBwcmVzZXRCYWNrZ3JvdW5kVGV4dHVyZXM6IFtcclxuICAgICdpbWFnZXMvYmFja2dyb3VuZHMvcmVkLWJyaWNrcy5qcGcnLFxyXG4gICAgJ2ltYWdlcy9iYWNrZ3JvdW5kcy9GdW5ueS1DYXQtRmFjZS5qcGcnLFxyXG4gICAgJ2ltYWdlcy9iYWNrZ3JvdW5kcy9ocWRlZmF1bHQuanBnJ1xyXG4gIF0sXHJcbiAgaW5pdGlhbEN1c3RvbUhlaWdodE1hcENvbG9ySGV4OiAnIzAwMDAwMCcsICAvLyBbMCwgMCwgMF1cclxuICBwcmVzZXRIZWlnaHRNYXBzOiBbXHJcbiAgICAnaW1hZ2VzL2hlaWdodC1tYXBzL2JyaWNrX2hlaWdodG1hcC5wbmcnLFxyXG4gICAgJ2ltYWdlcy9oZWlnaHQtbWFwcy90ZXJyYWluLWhlaWdodG1hcC5wbmcnXHJcbiAgXSxcclxuICBpbml0aWFsQ3VzdG9tTm9ybWFsTWFwQ29sb3JIZXg6ICcjN2Y3ZmZmJywgIC8vIFswLCAwLCAxXSAoYmVjYXVzZSB4IGFuZCB5IGFyZSBbLTEsIDFdKVxyXG4gIHByZXNldE5vcm1hbE1hcHM6IFtcclxuICAgICdpbWFnZXMvbm9ybWFsLW1hcHMvYnJpY2tfbm9ybWFsbWFwLnBuZycsXHJcbiAgICAnaW1hZ2VzL25vcm1hbC1tYXBzL25vcm1hbF9tYXAuanBnJyxcclxuICAgICdpbWFnZXMvbm9ybWFsLW1hcHMvY2lyY2xlcy5wbmcnXHJcbiAgXSxcclxuICBwcmVzZXRMaWdodENvbG9yOiBuZXcgVmVjdG9yMygxLCAxLCAxKSxcclxuXHJcbiAgbW92aW5nTGlnaHQ6IHtcclxuICAgIGhvcml6b250YWxMYXBUaW1lOiAxMCAqIDEwMDAsXHJcbiAgICB2ZXJ0aWNhbExhcFRpbWU6IDggKiAxMDAwLFxyXG4gICAgbWluVmVydGljYWxBbmdsZTogKDIwIC8gMTgwKSAqIE1hdGguUEksXHJcbiAgICBtYXhWZXJ0aWNhbEFuZ2xlOiAoNzAgLyAxODApICogTWF0aC5QSSxcclxuICAgIHRpY2tJbnRlcnZhbDogNTAsXHJcbiAgICBkZWZhdWx0UmFkaXVzOiA1MDBcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBjb25maWd1cmF0aW9uIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbmZpZ3VyYXRpb24udHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQgPSBudWxsO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBSZW5kZXJFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdSZW5kZXJFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9SZW5kZXJFdmVudC50cyIsImltcG9ydCB7IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50JztcclxuaW1wb3J0IHsgTmV3SGVpZ2h0TWFwRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBFdmVudCc7XHJcbmltcG9ydCB7IE5ld0xpZ2h0Q29sb3JFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0Q29sb3JFdmVudCc7XHJcbmltcG9ydCB7IE5ld0xpZ2h0UG9zaXRpb25FdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0UG9zaXRpb25FdmVudCc7XHJcbmltcG9ydCB7IE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudCc7XHJcbmltcG9ydCB7IE5ld0xpZ2h0VHlwZUV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRUeXBlRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdOb3JtYWxNYXBFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld05vcm1hbE1hcEV2ZW50JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCxcclxuICBOZXdIZWlnaHRNYXBFdmVudCxcclxuICBOZXdMaWdodENvbG9yRXZlbnQsXHJcbiAgTmV3TGlnaHRQb3NpdGlvbkV2ZW50LFxyXG4gIE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudCxcclxuICBOZXdMaWdodFR5cGVFdmVudCxcclxuICBOZXdOb3JtYWxNYXBFdmVudFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9pbmRleC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTeW5jQ29tcG9uZW50c0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkID0gbnVsbDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gU3luY0NvbXBvbmVudHNFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdTeW5jQ29tcG9uZW50c0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQudHMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidHlwZSBNb3ZlQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xyXG5cclxuY29uc3QgRVBTSUxPTiA9IDAuMTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludCB7XHJcbiAgcHVibGljIG1vdmVDYWxsYmFjazogTW92ZUNhbGxiYWNrIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICBwcml2YXRlIF95OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBnZXQgeCgpIHtcclxuICAgIHJldHVybiB0aGlzLl94O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3k7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5feCA9IHg7XHJcbiAgICB0aGlzLl95ID0geTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYWRkKHAxOiBQb2ludCwgcDI6IFBvaW50KTogUG9pbnQge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludChwMS54ICsgcDIueCwgcDEueSArIHAyLnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdWJ0cmFjdChwMTogUG9pbnQsIHAyOiBQb2ludCk6IFBvaW50IHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQocDEueCAtIHAyLngsIHAxLnkgLSBwMi55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGlzdGFuY2VCZXR3ZWVuKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuU3F1YXJlZChwMSwgcDIpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGlzdGFuY2VCZXR3ZWVuU3F1YXJlZChwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5wb3cocDEueCAtIHAyLngsIDIpICsgTWF0aC5wb3cocDEueSAtIHAyLnksIDIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRBbmdsZShwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciB7XHJcbiAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKHAyLnkgLSBwMS55LCBwMi54IC0gcDEueCkgKiAxODAgLyBNYXRoLlBJO1xyXG5cclxuICAgIGlmIChhbmdsZSA8IDApIHtcclxuICAgICAgYW5nbGUgKz0gMzYwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhbmdsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZG90UHJvZHVjdChwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gICAgcmV0dXJuIHAxLnggKiBwMi54ICsgcDEueSAqIHAyLnk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyb3NzUHJvZHVjdChwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gICAgcmV0dXJuIHAxLnggKiBwMi55IC0gcDEueSAqIHAyLng7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGVwc2lsb25FcXVhbHMocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICAgIHJldHVybiBQb2ludC5nZXREaXN0YW5jZUJldHdlZW4ocDEsIHAyKSA8PSBFUFNJTE9OO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1vdmVUbyhwb2ludDogUG9pbnQpOiB2b2lkO1xyXG4gIHB1YmxpYyBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkO1xyXG4gIHB1YmxpYyBtb3ZlVG8ocG9pbnRPclg6IFBvaW50IHwgbnVtYmVyLCB5PzogbnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIHBvaW50T3JYID09PSAnbnVtYmVyJykge1xyXG4gICAgICBpZiAoeSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd4IGlzIGRlZmluZWQsIGJ1dCB5IGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLm1vdmVUb0Nvb3JkaW5hdGVzKHBvaW50T3JYLCB5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5tb3ZlVG9Qb2ludChwb2ludE9yWCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXF1YWxzKHBvaW50OiBQb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMueCA9PT0gcG9pbnQueCAmJiB0aGlzLnkgPT09IHBvaW50Lnk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGlzdGFuY2VUbyhwb2ludDogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIFBvaW50LmdldERpc3RhbmNlQmV0d2Vlbih0aGlzLCBwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGlzdGFuY2VTcXVhcmVkVG8ocG9pbnQ6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBQb2ludC5nZXREaXN0YW5jZUJldHdlZW5TcXVhcmVkKHRoaXMsIHBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZsb29yKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludChNYXRoLmZsb29yKHRoaXMueCksIE1hdGguZmxvb3IodGhpcy55KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdmVUb1BvaW50KHBvaW50OiBQb2ludCkge1xyXG4gICAgcmV0dXJuIHRoaXMubW92ZVRvQ29vcmRpbmF0ZXMocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdmVUb0Nvb3JkaW5hdGVzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0geDtcclxuICAgIHRoaXMuX3kgPSB5O1xyXG5cclxuICAgIGlmICh0aGlzLm1vdmVDYWxsYmFjaykge1xyXG4gICAgICB0aGlzLm1vdmVDYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vUG9pbnQudHMiLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbW1vbi9Db2xvcic7XHJcblxyXG5jb25zdCBNQVhfQ09MT1IgPSAyNTU7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMyB7XHJcbiAgcHVibGljIHg6IG51bWJlcjtcclxuICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gIHB1YmxpYyB6OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy56ID0gejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUNvbG9yKGNvbG9yOiBDb2xvcik6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKGNvbG9yLnIgLyBNQVhfQ09MT1IsIGNvbG9yLmcgLyBNQVhfQ09MT1IsIGNvbG9yLmIgLyBNQVhfQ09MT1IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhZGQodjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModjEueCArIHYyLngsIHYxLnkgKyB2Mi55LCB2MS56ICsgdjIueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHN1YnRyYWN0KHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYxLnggLSB2Mi54LCB2MS55IC0gdjIueSwgdjEueiAtIHYyLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcm9zc1Byb2R1Y3QodjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoXHJcbiAgICAgIHYxLnkgKiB2Mi56IC0gdjEueiAqIHYyLnksXHJcbiAgICAgIHYxLnogKiB2Mi54IC0gdjEueCAqIHYyLnosXHJcbiAgICAgIHYxLnggKiB2Mi55IC0gdjEueSAqIHYyLnhcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRvdFByb2R1Y3QodjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB2MS54ICogdjIueCArIHYxLnkgKiB2Mi55ICsgdjEueiAqIHYyLno7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNvc2luZUFuZ2xlKHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkb3RQcm9kdWN0ID0gVmVjdG9yMy5kb3RQcm9kdWN0KHYxLCB2Mik7XHJcbiAgICBjb25zdCBsZW5ndGgxID0gdjEuZ2V0TGVuZ3RoKCk7XHJcbiAgICBjb25zdCBsZW5ndGgyID0gdjIuZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgcmV0dXJuIGRvdFByb2R1Y3QgLyAobGVuZ3RoMSAqIGxlbmd0aDIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tTm9ybWFsTWFwKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiBWZWN0b3IzIHtcclxuICAgIGNvbnN0IHggPSByIC8gMjU1ICogMiAtIDE7XHJcbiAgICBjb25zdCB5ID0gZyAvIDI1NSAqIDIgLSAxO1xyXG4gICAgY29uc3QgeiA9IGIgLyAyNTU7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBtdWx0aXBseUNvbXBvbmVudHModjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModjEueCAqIHYyLngsIHYxLnkgKiB2Mi55LCB2MS56ICogdjIueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9Db2xvcigpOiBDb2xvciB7XHJcbiAgICBjb25zdCByID0gTWF0aC5mbG9vcih0aGlzLnggKiBNQVhfQ09MT1IpO1xyXG4gICAgY29uc3QgZyA9IE1hdGguZmxvb3IodGhpcy55ICogTUFYX0NPTE9SKTtcclxuICAgIGNvbnN0IGIgPSBNYXRoLmZsb29yKHRoaXMueiAqIE1BWF9DT0xPUik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDb2xvcihyLCBnLCBiKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBub3JtYWxpemUoKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLnggLyBsZW5ndGgsIHRoaXMueSAvIGxlbmd0aCwgdGhpcy56IC8gbGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtdWx0aXBseShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy54ICogc2NhbGUsIHRoaXMueSAqIHNjYWxlLCB0aGlzLnogKiBzY2FsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiogMiArIHRoaXMueSAqKiAyICsgdGhpcy56ICoqIDIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGludmVydCgpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMygtdGhpcy54LCAtdGhpcy55LCAtdGhpcy56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmbG9vcigpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKHRoaXMueCk7XHJcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcih0aGlzLnkpO1xyXG4gICAgY29uc3QgeiA9IE1hdGguZmxvb3IodGhpcy56KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoeCwgeSwgeik7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9WZWN0b3IzLnRzIiwiLy8gRGljdGlvbmFyeVxyXG5jb25zdCBMRVggPSB7XHJcbiAgUE9MWUdPTl9MQVlFUl9OQU1FOiAnUG9seWdvbkxheWVyJyxcclxuICBQQVRIX0xBWUVSX05BTUU6ICdQYXRoTGF5ZXInLFxyXG4gIFBBVEhfR0hPU1RfTEFZRVJfTkFNRTogJ1BhdGhHaG9zdExheWVyJyxcclxuICBORVdfQ09ORElUSU9OX0VWRU5UX05BTUU6ICduZXctY29uZGl0aW9uJyxcclxuICBSRU1PVkVfQ09ORElUSU9OX0VWRU5UX05BTUU6ICdyZW1vdmUtY29uZGl0aW9uJyxcclxuICBLRVlfQ09ERToge1xyXG4gICAgRVNDQVBFOiAyN1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IExFWCB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9MRVgudHMiLCJleHBvcnQgZW51bSBMaWdodFR5cGUge1xyXG4gIENvbnN0YW50LFxyXG4gIE1vdmluZ1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9MaWdodFR5cGUudHMiLCJleHBvcnQgY2xhc3MgQ29sb3Ige1xyXG4gIHB1YmxpYyByZWFkb25seSByOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IGc6IG51bWJlcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgYjogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBmaWxsU3R5bGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcikge1xyXG4gICAgdGhpcy5yID0gcjtcclxuICAgIHRoaXMuZyA9IGc7XHJcbiAgICB0aGlzLmIgPSBiO1xyXG5cclxuICAgIHRoaXMuZmlsbFN0eWxlID0gYHJnYigke3RoaXMucn0sICR7dGhpcy5nfSwgJHt0aGlzLmJ9KWA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZyb21IZXhTdHJpbmcoaGV4U3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlZFBhcnQgPSBoZXhTdHJpbmcuc2xpY2UoMSwgMyk7XHJcbiAgICBjb25zdCBncmVlblBhcnQgPSBoZXhTdHJpbmcuc2xpY2UoMywgNSk7XHJcbiAgICBjb25zdCBibHVlUGFydCA9IGhleFN0cmluZy5zbGljZSg1LCA3KTtcclxuXHJcbiAgICBjb25zdCByZWQgPSBwYXJzZUludChyZWRQYXJ0LCAxNik7XHJcbiAgICBjb25zdCBncmVlbiA9IHBhcnNlSW50KGdyZWVuUGFydCwgMTYpO1xyXG4gICAgY29uc3QgYmx1ZSA9IHBhcnNlSW50KGJsdWVQYXJ0LCAxNik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDb2xvcihyZWQsIGdyZWVuLCBibHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGludGVnZXJUb1BhZGRlZEhleChpbnRlZ2VyOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGhleCA9IGludGVnZXIudG9TdHJpbmcoMTYpO1xyXG5cclxuICAgIGlmIChoZXgubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHJldHVybiBgICR7aGV4fWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvSGV4U3RyaW5nKCkge1xyXG4gICAgY29uc3QgcmVkUGFydCA9IENvbG9yLmludGVnZXJUb1BhZGRlZEhleCh0aGlzLnIpO1xyXG4gICAgY29uc3QgZ3JlZW5QYXJ0ID0gQ29sb3IuaW50ZWdlclRvUGFkZGVkSGV4KHRoaXMuZyk7XHJcbiAgICBjb25zdCBibHVlUGFydCA9IENvbG9yLmludGVnZXJUb1BhZGRlZEhleCh0aGlzLmIpO1xyXG5cclxuICAgIHJldHVybiBgIyR7cmVkUGFydCArIGJsdWVQYXJ0ICsgZ3JlZW5QYXJ0fWA7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9Db2xvci50cyIsImltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29tbW9uL0NvbG9yJztcclxuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnY29tbW9uL0NPTE9SUyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGluZVByb3BlcnRpZXMge1xyXG4gIHB1YmxpYyBjb2xvcjogQ29sb3I7XHJcbiAgcHVibGljIHRoaWNrbmVzczogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2xvcjogQ29sb3IsIHRoaWNrbmVzczogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLnRoaWNrbmVzcyA9IHRoaWNrbmVzcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVmYXVsdCgpOiBMaW5lUHJvcGVydGllcyB7XHJcbiAgICByZXR1cm4gbmV3IExpbmVQcm9wZXJ0aWVzKENPTE9SUy5CTEFDSywgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKTogTGluZVByb3BlcnRpZXMge1xyXG4gICAgcmV0dXJuIG5ldyBMaW5lUHJvcGVydGllcyh0aGlzLmNvbG9yLCB0aGlzLnRoaWNrbmVzcyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9MaW5lUHJvcGVydGllcy50cyIsImltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29tbW9uL0NvbG9yJztcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcbiAgQkxBQ0s6IG5ldyBDb2xvcigwLCAwLCAwKSxcclxuICBSRUQ6IG5ldyBDb2xvcigyNTUsIDAsIDApLFxyXG4gIEdSRUVOOiBuZXcgQ29sb3IoMCwgMjU1LCAwKSxcclxuICBCTFVFOiBuZXcgQ29sb3IoMCwgMCwgMjU1KSxcclxuICBXSElURTogbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUpXHJcbn07XHJcblxyXG5PYmplY3QuZnJlZXplKENPTE9SUyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9DT0xPUlMudHMiLCJpbXBvcnQgeyBIaXRUZXN0UmVzdWx0IH0gZnJvbSAnY29tbW9uL0hpdFRlc3RSZXN1bHQnO1xyXG5pbXBvcnQgeyBQYXRoLCBTZXJpYWxpemFibGVQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnUmVuZGVyZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJpYWxpemFibGVMYXllciB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBhdGhzOiBTZXJpYWxpemFibGVQYXRoW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYXllciB7XHJcbiAgcHVibGljIHBhdGhzOiBQYXRoW10gPSBbXTtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgdGhpcy5wYXRocy5mb3JFYWNoKHBhdGggPT4gcmVuZGVyZXIuZHJhd1BhdGgocGF0aCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVBhdGgocGF0aDogUGF0aCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnBhdGhzLmluZGV4T2YocGF0aCk7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhdGhzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGl0VGVzdChwb2ludDogUG9pbnQpOiBIaXRUZXN0UmVzdWx0IHwgbnVsbCB7XHJcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgdGhpcy5wYXRocykge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBwYXRoLmhpdFRlc3QocG9pbnQpO1xyXG4gICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXN1bHQubGF5ZXIgPSB0aGlzO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1NlcmlhbGl6YWJsZU9iamVjdCgpOiBTZXJpYWxpemFibGVMYXllciB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHBhdGhzOiB0aGlzLnBhdGhzLm1hcChwYXRoID0+IHBhdGgudG9TZXJpYWxpemFibGVPYmplY3QoKSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZnJvbVNlcmlhbGl6YWJsZU9iamVjdChzZXJpYWxpemFibGVMYXllcjogU2VyaWFsaXphYmxlTGF5ZXIpIHtcclxuICAgIHRoaXMubmFtZSA9IHNlcmlhbGl6YWJsZUxheWVyLm5hbWU7XHJcblxyXG4gICAgdGhpcy5wYXRocy5zcGxpY2UoMCwgdGhpcy5wYXRocy5sZW5ndGgpO1xyXG5cclxuICAgIHNlcmlhbGl6YWJsZUxheWVyLnBhdGhzLmZvckVhY2goc2VyaWFsaXphYmxlUGF0aCA9PiB7XHJcbiAgICAgIHRoaXMucGF0aHMucHVzaChQYXRoLmZyb21TZXJpYWxpemFibGVQYXRoKHNlcmlhbGl6YWJsZVBhdGgpKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vTGF5ZXIudHMiLCJpbXBvcnQgeyBIaXRUZXN0UmVzdWx0IH0gZnJvbSAnY29tbW9uL0hpdFRlc3RSZXN1bHQnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJpYWxpemFibGVQYXRoIHtcclxuICBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXM7XHJcbiAgY2xvc2VkOiBib29sZWFuO1xyXG4gIHZlcnRpY2VzOiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgfVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aCB7XHJcbiAgcHVibGljIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXM7XHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHZlcnRpY2VzOiBQb2ludFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlczogUG9pbnRbXSwgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzKSB7XHJcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XHJcbiAgICB0aGlzLmxpbmVQcm9wZXJ0aWVzID0gbGluZVByb3BlcnRpZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZyb21TZXJpYWxpemFibGVQYXRoKHNlcmlhbGl6YWJsZVBhdGg6IFNlcmlhbGl6YWJsZVBhdGgpIHtcclxuICAgIGNvbnN0IHJlYWxQb2ludHMgPSBzZXJpYWxpemFibGVQYXRoLnZlcnRpY2VzLm1hcCh2ZXJ0ZXggPT4gbmV3IFBvaW50KHZlcnRleC54LCB2ZXJ0ZXgueSkpO1xyXG4gICAgY29uc3QgcmVhbExpbmVQcm9wZXJ0aWVzID0gbmV3IExpbmVQcm9wZXJ0aWVzKFxyXG4gICAgICBzZXJpYWxpemFibGVQYXRoLmxpbmVQcm9wZXJ0aWVzLmNvbG9yLFxyXG4gICAgICBzZXJpYWxpemFibGVQYXRoLmxpbmVQcm9wZXJ0aWVzLnRoaWNrbmVzc1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aChyZWFsUG9pbnRzLCByZWFsTGluZVByb3BlcnRpZXMpO1xyXG4gICAgcGF0aC5jbG9zZWQgPSBzZXJpYWxpemFibGVQYXRoLmNsb3NlZDtcclxuXHJcbiAgICByZXR1cm4gcGF0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyAqZ2V0VmVydGljZXNJdGVyYXRvcigpIHtcclxuICAgIGNvbnN0IHZlcnRpY2VzQ291bnQgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXNDb3VudDsgaSArPSAxKSB7XHJcbiAgICAgIHlpZWxkIHRoaXMudmVydGljZXNbaV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2xvc2VkICYmIHZlcnRpY2VzQ291bnQgPiAwKSB7XHJcbiAgICAgIHlpZWxkIHRoaXMudmVydGljZXNbMF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgKmdldExpbmVJdGVyYXRvcigpIHtcclxuICAgIGxldCBwcmV2aW91c1BvaW50O1xyXG5cclxuICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5nZXRWZXJ0aWNlc0l0ZXJhdG9yKCkpIHtcclxuICAgICAgaWYgKCFwcmV2aW91c1BvaW50KSB7XHJcbiAgICAgICAgcHJldmlvdXNQb2ludCA9IHBvaW50O1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB5aWVsZCBuZXcgTGluZShwcmV2aW91c1BvaW50LCBwb2ludCk7XHJcbiAgICAgIHByZXZpb3VzUG9pbnQgPSBwb2ludDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdGFydGluZ1BvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljZXNbMF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VmVydGljZXNDb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMaW5lUHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB0aGlzLmxpbmVQcm9wZXJ0aWVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpdFRlc3QocG9pbnQ6IFBvaW50KTogSGl0VGVzdFJlc3VsdCB8IG51bGwge1xyXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIHRoaXMuZ2V0TGluZUl0ZXJhdG9yKCkpIHtcclxuICAgICAgaWYgKGxpbmUuZGlzdGFuY2VUb1BvaW50KHBvaW50KSA8PSBjb25maWd1cmF0aW9uLmhpdFRvbGVyYW5jZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgSGl0VGVzdFJlc3VsdChsaW5lLCB0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFZlcnRleChpbmRleDogbnVtYmVyKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljZXNbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFZlcnRpY2VzKCk6IFBvaW50W10ge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkVmVydGV4KHBvaW50OiBQb2ludCkge1xyXG4gICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVWZXJ0ZXgocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZFBvaW50SW5kZXgocG9pbnQpO1xyXG5cclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGluc2VydFZlcnRleChwb2ludDogUG9pbnQsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMudmVydGljZXMuc3BsaWNlKGluZGV4LCAwLCBwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKTogUGF0aCB7XHJcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFsuLi50aGlzLmdldFZlcnRpY2VzKCkubWFwKHBvaW50ID0+IHBvaW50LmNsb25lKCkpXTtcclxuICAgIGNvbnN0IGxpbmVQcm9wZXJ0aWVzID0gdGhpcy5saW5lUHJvcGVydGllcy5jbG9uZSgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUGF0aCh2ZXJ0aWNlcywgbGluZVByb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbmRQb2ludEluZGV4KHBvaW50OiBQb2ludCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljZXMuaW5kZXhPZihwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Qm91bmRpbmdCb3goKSB7XHJcbiAgICBsZXQgbWluWCA9IEluZmluaXR5O1xyXG4gICAgbGV0IG1heFggPSAwO1xyXG4gICAgbGV0IG1pblkgPSBJbmZpbml0eTtcclxuICAgIGxldCBtYXhZID0gMDtcclxuXHJcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICBpZiAocG9pbnQueCA8IG1pblgpIHtcclxuICAgICAgICBtaW5YID0gcG9pbnQueDtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9pbnQueCA+IG1heFgpIHtcclxuICAgICAgICBtYXhYID0gcG9pbnQueDtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9pbnQueSA8IG1pblkpIHtcclxuICAgICAgICBtaW5ZID0gcG9pbnQueTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9pbnQueSA+IG1heFkpIHtcclxuICAgICAgICBtYXhZID0gcG9pbnQueTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWluWCxcclxuICAgICAgbWF4WCxcclxuICAgICAgbWluWSxcclxuICAgICAgbWF4WVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1BvaW50SW5Cb3VuZGluZ0JveChwb2ludDogUG9pbnQpIHtcclxuICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gdGhpcy5nZXRCb3VuZGluZ0JveCgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHBvaW50LnggPj0gYm91bmRpbmdCb3gubWluWCAmJlxyXG4gICAgICBwb2ludC54IDw9IGJvdW5kaW5nQm94Lm1heFggJiZcclxuICAgICAgcG9pbnQueSA+PSBib3VuZGluZ0JveC5taW5ZICYmXHJcbiAgICAgIHBvaW50LnkgPD0gYm91bmRpbmdCb3gubWF4WVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1NlcmlhbGl6YWJsZU9iamVjdCgpOiBTZXJpYWxpemFibGVQYXRoIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpbmVQcm9wZXJ0aWVzOiB0aGlzLmxpbmVQcm9wZXJ0aWVzLmNsb25lKCksXHJcbiAgICAgIGNsb3NlZDogdGhpcy5jbG9zZWQsXHJcbiAgICAgIHZlcnRpY2VzOiB0aGlzLnZlcnRpY2VzLm1hcCh2ZXJ0ZXggPT4gKHtcclxuICAgICAgICB4OiB2ZXJ0ZXgueCxcclxuICAgICAgICB5OiB2ZXJ0ZXgueVxyXG4gICAgICB9KSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TmV4dFBvaW50SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChpbmRleCArIDEpICUgdGhpcy5nZXRWZXJ0aWNlc0NvdW50KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TmV4dFBvaW50KHBvaW50OiBQb2ludCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnZlcnRpY2VzLmluZGV4T2YocG9pbnQpO1xyXG4gICAgY29uc3QgbmV4dFBvaW50SW5kZXggPSB0aGlzLmdldE5leHRQb2ludEluZGV4KGluZGV4KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRWZXJ0ZXgobmV4dFBvaW50SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFByZXZpb3VzUG9pbnRJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICBsZXQgcHJldmlvdXNQb2ludEluZGV4ID0gaW5kZXggLSAxO1xyXG4gICAgaWYgKHByZXZpb3VzUG9pbnRJbmRleCA8IDApIHtcclxuICAgICAgcHJldmlvdXNQb2ludEluZGV4ID0gdGhpcy5nZXRWZXJ0aWNlc0NvdW50KCkgLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcmV2aW91c1BvaW50SW5kZXg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UHJldmlvdXNQb2ludChwb2ludDogUG9pbnQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy52ZXJ0aWNlcy5pbmRleE9mKHBvaW50KTtcclxuICAgIGNvbnN0IHByZXZpb3VzUG9pbnRJbmRleCA9IHRoaXMuZ2V0UHJldmlvdXNQb2ludEluZGV4KGluZGV4KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRWZXJ0ZXgocHJldmlvdXNQb2ludEluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3ZlVG8ocGF0aDogUGF0aCkge1xyXG4gICAgaWYgKHRoaXMuZ2V0VmVydGljZXNDb3VudCgpICE9PSBwYXRoLmdldFZlcnRpY2VzQ291bnQoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBudW1iZXIgb2YgdmVydGljZXMgZG9lcyBub3QgbWF0Y2gnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jbG9zZWQgIT09IHBhdGguY2xvc2VkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhdGgncyBjbG9zZWQgc3RhdGUgZG9lcyBub3QgbWF0Y2hcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHBvaW50Lm1vdmVUbyhwYXRoLmdldFZlcnRleChpbmRleCkpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDZW50ZXJPZkdyYXZpdHkoKSB7XHJcbiAgICBsZXQgY2VudGVyWCA9IDA7XHJcbiAgICBsZXQgY2VudGVyWSA9IDA7XHJcblxyXG4gICAgdGhpcy5nZXRWZXJ0aWNlcygpLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICBjZW50ZXJYICs9IHBvaW50Lng7XHJcbiAgICAgIGNlbnRlclkgKz0gcG9pbnQueTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNlbnRlclggLz0gdGhpcy5nZXRWZXJ0aWNlc0NvdW50KCk7XHJcbiAgICBjZW50ZXJZIC89IHRoaXMuZ2V0VmVydGljZXNDb3VudCgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9pbnQoY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Qm91bmRpbmdCb3hDZW50ZXIoKSB7XHJcbiAgICBjb25zdCBib3VuZGluZ0JveCA9IHRoaXMuZ2V0Qm91bmRpbmdCb3goKTtcclxuXHJcbiAgICBjb25zdCBjZW50ZXJYID0gKGJvdW5kaW5nQm94Lm1heFggKyBib3VuZGluZ0JveC5taW5YKSAvIDI7XHJcbiAgICBjb25zdCBjZW50ZXJZID0gKGJvdW5kaW5nQm94Lm1heFkgKyBib3VuZGluZ0JveC5taW5ZKSAvIDI7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb2ludChjZW50ZXJYLCBjZW50ZXJZKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL1BhdGgudHMiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGluZSB7XHJcbiAgcHVibGljIHAxOiBQb2ludDtcclxuICBwdWJsaWMgcDI6IFBvaW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gICAgaWYgKHAxLmVxdWFscyhwMikpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIGxpbmUgYmV0d2VlbiBwb2ludHMgYXQgdGhlIHNhbWUgY29vcmRpbmF0ZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnAxID0gcDE7XHJcbiAgICB0aGlzLnAyID0gcDI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzdGFuY2VUb1BvaW50KHA6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHBvaW50UHJvamVjdGlvbiA9IHRoaXMucHJvamVjdFBvaW50KHApO1xyXG5cclxuICAgIHJldHVybiBQb2ludC5nZXREaXN0YW5jZUJldHdlZW4ocCwgcG9pbnRQcm9qZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcm9qZWN0UG9pbnQocDogUG9pbnQpIHtcclxuICAgIGNvbnN0IHAxID0gdGhpcy5wMTtcclxuICAgIGNvbnN0IHAyID0gdGhpcy5wMjtcclxuXHJcbiAgICBsZXQgdCA9XHJcbiAgICAgICgocC54IC0gcDEueCkgKiAocDIueCAtIHAxLngpICsgKHAueSAtIHAxLnkpICogKHAyLnkgLSBwMS55KSkgL1xyXG4gICAgICBQb2ludC5nZXREaXN0YW5jZUJldHdlZW5TcXVhcmVkKHAxLCBwMik7XHJcbiAgICB0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdCkpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9pbnQocDEueCArIHQgKiAocDIueCAtIHAxLngpLCBwMS55ICsgdCAqIChwMi55IC0gcDEueSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVxdWFscyhsaW5lOiBMaW5lKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAodGhpcy5wMS5lcXVhbHMobGluZS5wMSkgJiYgdGhpcy5wMi5lcXVhbHMobGluZS5wMikpIHx8XHJcbiAgICAgICh0aGlzLnAxLmVxdWFscyhsaW5lLnAyKSAmJiB0aGlzLnAyLmVxdWFscyhsaW5lLnAxKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TWlkZGxlUG9pbnQoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludCgodGhpcy5wMS54ICsgdGhpcy5wMi54KSAvIDIsICh0aGlzLnAxLnkgKyB0aGlzLnAyLnkpIC8gMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIFBvaW50LmdldERpc3RhbmNlQmV0d2Vlbih0aGlzLnAxLCB0aGlzLnAyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREaXJlY3Rpb24ocDogUG9pbnQpIHtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFBvaW50LmNyb3NzUHJvZHVjdChcclxuICAgICAgUG9pbnQuc3VidHJhY3QodGhpcy5wMiwgdGhpcy5wMSksXHJcbiAgICAgIFBvaW50LnN1YnRyYWN0KHAsIHRoaXMucDEpXHJcbiAgICApO1xyXG4gICAgaWYgKE1hdGguYWJzKGRpcmVjdGlvbikgPCAwLjAwMDEpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA+IDApIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9MaW5lLnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IEltYWdlRGF0YTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW1hZ2VEYXRhOiBJbWFnZURhdGEpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGltYWdlRGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnTmV3QmFja2dyb3VuZFRleHR1cmUnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0hlaWdodE1hcEV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBJbWFnZURhdGE7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0hlaWdodE1hcEV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbWFnZURhdGE6IEltYWdlRGF0YSkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gaW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld0hlaWdodE1hcEV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0hlaWdodE1hcEV2ZW50LnRzIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuXHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdMaWdodENvbG9yRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IFZlY3RvcjM7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0xpZ2h0Q29sb3JFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoY29sb3I6IFZlY3RvcjMpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld0xpZ2h0Q29sb3JFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodENvbG9yRXZlbnQudHMiLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0xpZ2h0UG9zaXRpb25FdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogVmVjdG9yMztcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3TGlnaHRQb3NpdGlvbkV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsaWdodFBvc2l0aW9uOiBWZWN0b3IzKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBsaWdodFBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld0xpZ2h0UG9zaXRpb25FdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFBvc2l0aW9uRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IobGlnaHRQb3NpdGlvblJhZGl1czogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBsaWdodFBvc2l0aW9uUmFkaXVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQudHMiLCJpbXBvcnQgeyBMaWdodFR5cGUgfSBmcm9tICdjb21tb24vTGlnaHRUeXBlJztcclxuXHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdMaWdodFR5cGVFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogTGlnaHRUeXBlO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdMaWdodFR5cGVFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IobGlnaHRUeXBlOiBMaWdodFR5cGUpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGxpZ2h0VHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodFR5cGVFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFR5cGVFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdOb3JtYWxNYXBFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogSW1hZ2VEYXRhO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdOb3JtYWxNYXBFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW1hZ2VEYXRhOiBJbWFnZURhdGEpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGltYWdlRGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdOb3JtYWxNYXBFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudC50cyIsImV4cG9ydCBlbnVtIEZpbGxXb3JrZXJNZXNzYWdlVHlwZSB7XHJcbiAgQ2FudmFzSW5mbyxcclxuXHJcbiAgTmV3RmlsbERhdGFFdmVudCxcclxuXHJcbiAgU3RhcnRGaWxsLFxyXG4gIEZpbGxTdHJpcHMsXHJcbiAgRW5kRmlsbFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3BvbHlnb24tZmlsbGVyL0ZpbGxXb3JrZXJNZXNzYWdlVHlwZS50cyIsImltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IExpbmVQcm9wZXJ0aWVzIH0gZnJvbSAnY29tbW9uL0xpbmVQcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbiBleHRlbmRzIFBhdGgge1xyXG4gIGNvbnN0cnVjdG9yKHBhdGg6IFBhdGgpO1xyXG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzOiBQb2ludFtdLCBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXMpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoT3JWZXJ0aWNlczogUGF0aCB8IFBvaW50W10sIGxpbmVQcm9wZXJ0aWVzPzogTGluZVByb3BlcnRpZXMpIHtcclxuICAgIGxldCB2ZXJ0aWNlczogUG9pbnRbXTtcclxuXHJcbiAgICBpZiAocGF0aE9yVmVydGljZXMgaW5zdGFuY2VvZiBQYXRoKSB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBwYXRoT3JWZXJ0aWNlcztcclxuICAgICAgdmVydGljZXMgPSBwYXRoLmdldFZlcnRpY2VzKCk7XHJcbiAgICAgIGxpbmVQcm9wZXJ0aWVzID0gcGF0aC5saW5lUHJvcGVydGllcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZlcnRpY2VzID0gcGF0aE9yVmVydGljZXM7XHJcbiAgICAgIGxpbmVQcm9wZXJ0aWVzID0gPExpbmVQcm9wZXJ0aWVzPmxpbmVQcm9wZXJ0aWVzO1xyXG4gICAgfVxyXG5cclxuICAgIFBvbHlnb24uZW5zdXJlVmVydGljZXNMZW5ndGgodmVydGljZXMpO1xyXG4gICAgc3VwZXIodmVydGljZXMsIGxpbmVQcm9wZXJ0aWVzKTtcclxuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGVuc3VyZVZlcnRpY2VzTGVuZ3RoKHZlcnRpY2VzOiBQb2ludFtdKSB7XHJcbiAgICBpZiAodmVydGljZXMubGVuZ3RoID49IGNvbmZpZ3VyYXRpb24ubWluUG9seWdvblBvaW50cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBQb2x5Z29uIG11c3QgaGF2ZSBhdCBsZWFzdCAke2NvbmZpZ3VyYXRpb24ubWluUG9seWdvblBvaW50c30gdmVydGljZXNgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpOiBQb2x5Z29uIHtcclxuICAgIHJldHVybiBuZXcgUG9seWdvbihzdXBlci5jbG9uZSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVWZXJ0ZXgocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBpZiAodGhpcy5nZXRWZXJ0aWNlc0NvdW50KCkgPT09IGNvbmZpZ3VyYXRpb24ubWluUG9seWdvblBvaW50cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgdmVydGV4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIucmVtb3ZlVmVydGV4KHBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0NvbnZleCgpIHtcclxuICAgIGxldCBsYXN0TGluZTogTGluZSB8IG51bGwgPSBudWxsO1xyXG4gICAgbGV0IGxhc3REaXJlY3Rpb246IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGZvciAoY29uc3QgbGluZSBvZiB0aGlzLmdldExpbmVJdGVyYXRvcigpKSB7XHJcbiAgICAgIGlmICghbGFzdExpbmUpIHtcclxuICAgICAgICBsYXN0TGluZSA9IGxpbmU7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnREaXJlY3Rpb24gPSBsYXN0TGluZS5nZXREaXJlY3Rpb24obGluZS5wMik7XHJcbiAgICAgIGxhc3RMaW5lID0gbGluZTtcclxuXHJcbiAgICAgIGlmIChsYXN0RGlyZWN0aW9uID09PSBudWxsICYmIGN1cnJlbnREaXJlY3Rpb24gIT09IDApIHtcclxuICAgICAgICBsYXN0RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbjtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IDApIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gIT09IGxhc3REaXJlY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL1BvbHlnb24udHMiLCJpbXBvcnQgJ3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZy5zY3NzJztcclxuXHJcbmltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvRGlhbG9nQm94JztcclxuXHJcbmNvbnN0IGNsYXNzTmFtZXMgPSB7XHJcbiAgRElBTE9HX0JPWDogJ2RpYWxvZy1ib3gnLFxyXG4gIERJQUxPRzogJ2ltYWdlLXNlbGVjdC1kaWFsb2cnLFxyXG4gIEhFQURFUjogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2hlYWRlcicsXHJcbiAgSEVBRElORzogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2hlYWRpbmcnLFxyXG4gIEJMT0NLOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYmxvY2snLFxyXG4gIEJMT0NLX1RJVExFOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYmxvY2stdGl0bGUnLFxyXG4gIFBSRVNFVF9JTUFHRVNfQ09OVEFJTkVSOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fcHJlc2V0LWltYWdlcy1jb250YWluZXInLFxyXG4gIFNFTEVDVEVEX0lNQUdFOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19faW1hZ2UtLXNlbGVjdGVkJyxcclxuICBDVVNUT01fSU1BR0U6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19jdXN0b20taW1hZ2UnLFxyXG4gIEJPVFRPTV9CVVRUT05TOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMnXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTZWxlY3REaWFsb2cgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIERpYWxvZ0JveCB7XHJcbiAgcHJpdmF0ZSBfcHJlc2V0SW1hZ2VVcmxzOiBzdHJpbmdbXTtcclxuXHJcbiAgcHJpdmF0ZSBoZWFkaW5nOiBIVE1MSGVhZGluZ0VsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgcHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjdXN0b21GaWxlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjdXN0b21JbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBjdXN0b21Db2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgaW5pdGlhbEN1c3RvbUNvbG9ySGV4OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjdXN0b21Db2xvckltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGNhbmNlbEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjb25maXJtQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICBwcml2YXRlIF93YXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJlc2V0SW1hZ2VVcmxzOiBzdHJpbmdbXSwgaW5pdGlhbEN1c3RvbUNvbG9ySGV4OiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5fcHJlc2V0SW1hZ2VVcmxzID0gcHJlc2V0SW1hZ2VVcmxzO1xyXG4gICAgdGhpcy5pbml0aWFsQ3VzdG9tQ29sb3JIZXggPSBpbml0aWFsQ3VzdG9tQ29sb3JIZXg7XHJcblxyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuRElBTE9HX0JPWCk7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5ESUFMT0cpO1xyXG5cclxuICAgIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljayA9IHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zaG93Q3VzdG9tSW1hZ2UgPSB0aGlzLnNob3dDdXN0b21JbWFnZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrID0gdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrID0gdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkN1c3RvbUNvbG9ySW5wdXRDaGFuZ2UgPSB0aGlzLm9uQ3VzdG9tQ29sb3JJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVByZXNldEltYWdlc0xpc3QoKTtcclxuICAgIHRoaXMuY3JlYXRlQ3VzdG9tSW1hZ2VQaWNrZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlQ3VzdG9tQ29sb3JQaWNrZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlQm90dG9tQnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgcmV0dXJuIFsnbmFtZSddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSB8fCAnSW1hZ2Ugc2VsZWN0JztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbmFtZScsIHZhbHVlKTtcclxuICAgIHRoaXMuaGVhZGluZy5pbm5lclRleHQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2FzQ2FuY2VsbGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dhc0NhbmNlbGxlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcHJlc2V0SW1hZ2VVcmxzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByZXNldEltYWdlVXJscztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRJbWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEltYWdlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5fd2FzQ2FuY2VsbGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DYW5jZWxCdXR0b25DbGljayk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrKTtcclxuICAgIHRoaXMuY3VzdG9tRmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuc2hvd0N1c3RvbUltYWdlKTtcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25DdXN0b21Db2xvcklucHV0Q2hhbmdlKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljayk7XHJcblxyXG4gICAgdGhpcy5wcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gICAgICAuZm9yRWFjaChpbWFnZSA9PiBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljaykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5wcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gICAgICAuZm9yRWFjaChpbWFnZSA9PiBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljaykpO1xyXG4gICAgdGhpcy5jdXN0b21GaWxlSW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5zaG93Q3VzdG9tSW1hZ2UpO1xyXG4gICAgdGhpcy5jdXN0b21JbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljayk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkN1c3RvbUNvbG9ySW5wdXRDaGFuZ2UpO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvckltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrKTtcclxuXHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DYW5jZWxCdXR0b25DbGljayk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5DbG9zZSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlKCkge1xyXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xvc2UnKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuY3JlYXRlQmxvY2soKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuSEVBREVSKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICB0aGlzLmhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGhpcy5oZWFkaW5nLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5IRUFESU5HKTtcclxuICAgIHRoaXMuaGVhZGluZy5pbm5lclRleHQgPSB0aGlzLm5hbWU7XHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRoaXMuaGVhZGluZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVByZXNldEltYWdlc0xpc3QoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUJsb2NrKCk7XHJcbiAgICBjb25zdCBibG9ja1RpdGxlID0gdGhpcy5jcmVhdGVCbG9ja1RpdGxlKCdDaG9vc2UgcHJlc2V0IGltYWdlJyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmxvY2tUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbWFnZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLlBSRVNFVF9JTUFHRVNfQ09OVEFJTkVSKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZXNDb250YWluZXIpO1xyXG4gICAgdGhpcy5wcmVzZXRJbWFnZVVybHNcclxuICAgICAgLm1hcCh1cmwgPT4gdGhpcy5jcmVhdGVTZWxlY3RhYmxlSW1hZ2UodXJsKSlcclxuICAgICAgLmZvckVhY2goaW1hZ2UgPT4gaW1hZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKSk7XHJcblxyXG4gICAgdGhpcy5wcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLnByZXNldEltYWdlc0xpc3RDb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0SW1hZ2UoPEhUTUxJbWFnZUVsZW1lbnQ+dGhpcy5wcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ3VzdG9tSW1hZ2VQaWNrZXIoKSB7XHJcbiAgICBjb25zdCBjdXN0b21JbWFnZUNvbnRhaW5lciA9IHRoaXMuY3JlYXRlQmxvY2soKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQoY3VzdG9tSW1hZ2VDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGJsb2NrVGl0bGUgPSB0aGlzLmNyZWF0ZUJsb2NrVGl0bGUoJ1NlbGVjdCBjdXN0b20gaW1hZ2UnKTtcclxuICAgIGN1c3RvbUltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJsb2NrVGl0bGUpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tRmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRoaXMuY3VzdG9tRmlsZUlucHV0LnR5cGUgPSAnZmlsZSc7XHJcbiAgICB0aGlzLmN1c3RvbUZpbGVJbnB1dC5hY2NlcHQgPSAnaW1hZ2UvKic7XHJcbiAgICBjdXN0b21JbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmN1c3RvbUZpbGVJbnB1dCk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgdGhpcy5jdXN0b21JbWFnZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuQ1VTVE9NX0lNQUdFKTtcclxuICAgIGN1c3RvbUltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tSW1hZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93Q3VzdG9tSW1hZ2UoKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21GaWxlSW5wdXQuZmlsZXMgJiYgdGhpcy5jdXN0b21GaWxlSW5wdXQuZmlsZXNbMF0pIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBlID0+IHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgICAgICAgdGhpcy5jdXN0b21JbWFnZS5zcmMgPSAoPGFueT5lLnRhcmdldCkucmVzdWx0O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0SW1hZ2UodGhpcy5jdXN0b21JbWFnZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmN1c3RvbUZpbGVJbnB1dC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUN1c3RvbUNvbG9yUGlja2VyKCkge1xyXG4gICAgY29uc3QgY3VzdG9tQ29sb3JDb250YWluZXIgPSB0aGlzLmNyZWF0ZUJsb2NrKCk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGN1c3RvbUNvbG9yQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuY3JlYXRlQmxvY2tUaXRsZSgnQ3VzdG9tIHNvbGlkIGNvbG9yJyk7XHJcbiAgICBjdXN0b21Db2xvckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21Db2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dC50eXBlID0gJ2NvbG9yJztcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dC52YWx1ZSA9IHRoaXMuaW5pdGlhbEN1c3RvbUNvbG9ySGV4O1xyXG4gICAgY3VzdG9tQ29sb3JDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jdXN0b21Db2xvcklucHV0KTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW1hZ2UgPSBuZXcgSW1hZ2UoMjAsIDIwKTtcclxuICAgIGN1c3RvbUNvbG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tQ29sb3JJbWFnZSk7XHJcblxyXG4gICAgdGhpcy5zZXRDdXN0b21Db2xvckltYWdlQ29sb3IoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DdXN0b21Db2xvcklucHV0Q2hhbmdlKCkge1xyXG4gICAgdGhpcy5zZXRDdXN0b21Db2xvckltYWdlQ29sb3IoKTtcclxuICAgIHRoaXMuc2VsZWN0SW1hZ2UodGhpcy5jdXN0b21Db2xvckltYWdlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q3VzdG9tQ29sb3JJbWFnZUNvbG9yKCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLmN1c3RvbUNvbG9ySW1hZ2Uud2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5jdXN0b21Db2xvckltYWdlLmhlaWdodDtcclxuXHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmICghY3R4KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCBjYW52YXMgZHJhd2luZyBjb250ZXh0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY3VzdG9tQ29sb3JJbnB1dC52YWx1ZTtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUJvdHRvbUJ1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBib3R0b21CdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib3R0b21CdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5CT1RUT01fQlVUVE9OUyk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGJvdHRvbUJ1dHRvbnNDb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJztcclxuXHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5pbm5lclRleHQgPSAnQ29uZmlybSc7XHJcblxyXG4gICAgYm90dG9tQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbmNlbEJ1dHRvbik7XHJcbiAgICBib3R0b21CdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29uZmlybUJ1dHRvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2FuY2VsQnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29uZmlybUJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdGhpcy5fd2FzQ2FuY2VsbGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUJsb2NrKCkge1xyXG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5CTE9DSyk7XHJcblxyXG4gICAgcmV0dXJuIGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCbG9ja1RpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGJsb2NrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgYmxvY2tUaXRsZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuQkxPQ0tfVElUTEUpO1xyXG4gICAgYmxvY2tUaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcclxuXHJcbiAgICByZXR1cm4gYmxvY2tUaXRsZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlU2VsZWN0YWJsZUltYWdlKGltYWdlU291cmNlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5zcmMgPSBpbWFnZVNvdXJjZTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU2VsZWN0YWJsZUltYWdlQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0SW1hZ2UoPEhUTUxJbWFnZUVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VsZWN0SW1hZ2UoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIGlmIChpbWFnZSA9PT0gdGhpcy5fc2VsZWN0ZWRJbWFnZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkSW1hZ2UpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWRJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZXMuU0VMRUNURURfSU1BR0UpO1xyXG4gICAgfVxyXG5cclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5TRUxFQ1RFRF9JTUFHRSk7XHJcbiAgICB0aGlzLl9zZWxlY3RlZEltYWdlID0gaW1hZ2U7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1pbWFnZS1zZWxlY3QtZGlhbG9nJywgSW1hZ2VTZWxlY3REaWFsb2cpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuXHJcbmltcG9ydCB7IEltYWdlRG93bmxvYWRlciB9IGZyb20gJ3NlcnZpY2VzL0ltYWdlRG93bmxvYWRlcic7XHJcblxyXG5pbXBvcnQgeyBJbWFnZVNlbGVjdERpYWxvZyB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZyc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dCb3hCdXR0b24sIERpYWxvZ0JveEJ1dHRvbkRlcGVuZGVuY2llcyB9IGZyb20gJ3VpL2NvbXBvbmVudHMvRGlhbG9nQm94QnV0dG9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VTZWxlY3REaWFsb2dCdXR0b25EZXBlbmRlbmNpZXMgZXh0ZW5kcyBEaWFsb2dCb3hCdXR0b25EZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW1hZ2VTZWxlY3REaWFsb2dCdXR0b24gZXh0ZW5kcyBEaWFsb2dCb3hCdXR0b24ge1xyXG4gIHByb3RlY3RlZCByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcblxyXG4gIHByb3RlY3RlZCBkaWFsb2dCb3g6IEltYWdlU2VsZWN0RGlhbG9nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uRGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcih7IGRpYWxvZ092ZXJsYXk6IGRlcGVuZGVuY2llcy5kaWFsb2dPdmVybGF5IH0pO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuaW1hZ2VEb3dubG9hZGVyID0gZGVwZW5kZW5jaWVzLmltYWdlRG93bmxvYWRlcjtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbi5pbm5lclRleHQgPSAnU2VsZWN0IGltYWdlJztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRTZWxlY3RlZEltYWdlRGF0YSgpOiBQcm9taXNlPEltYWdlRGF0YT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJbWFnZSA9IHRoaXMuZGlhbG9nQm94LnNlbGVjdGVkSW1hZ2U7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VEb3dubG9hZGVyLmltYWdlVG9JbWFnZURhdGEoc2VsZWN0ZWRJbWFnZSk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1pbWFnZS1zZWxlY3QtZGlhbG9nLWJ1dHRvbicsIEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nQnV0dG9uLnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5pbXBvcnQgeyBQYXRoUG9pbnRFbGVtZW50IH0gZnJvbSAndWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50Q2xpY2tFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gUG9pbnRDbGlja0V2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogUGF0aFBvaW50RWxlbWVudDtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoUG9pbnRFbGVtZW50OiBQYXRoUG9pbnRFbGVtZW50KSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBwYXRoUG9pbnRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdQb2ludENsaWNrRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvUG9pbnRDbGlja0V2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdGaW5pc2hlZEV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkID0gbnVsbDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTG9hZGluZ0ZpbmlzaGVkRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBMb2FkaW5nRmluaXNoZWRFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvdWkvTG9hZGluZ0ZpbmlzaGVkRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1N0YXJ0ZWRFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZCA9IG51bGw7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IExvYWRpbmdTdGFydGVkRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBMb2FkaW5nU3RhcnRlZEV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy91aS9Mb2FkaW5nU3RhcnRlZEV2ZW50LnRzIiwiaW1wb3J0IHsgRGlhbG9nT3ZlcmxheSB9IGZyb20gJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheSc7XHJcbmltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvRGlhbG9nQm94JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nQm94QnV0dG9uRGVwZW5kZW5jaWVzIHtcclxuICBkaWFsb2dPdmVybGF5OiBEaWFsb2dPdmVybGF5O1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGlhbG9nQm94QnV0dG9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByb3RlY3RlZCByZWFkb25seSBkaWFsb2dPdmVybGF5OiBEaWFsb2dPdmVybGF5O1xyXG5cclxuICBwcm90ZWN0ZWQgZGlhbG9nQm94OiBEaWFsb2dCb3g7XHJcbiAgcHJvdGVjdGVkIGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogRGlhbG9nQm94QnV0dG9uRGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZGlhbG9nT3ZlcmxheSA9IGRlcGVuZGVuY2llcy5kaWFsb2dPdmVybGF5O1xyXG5cclxuICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmJ1dHRvbi5pbm5lclRleHQgPSAnT3BlbiBkaWFsb2cgYm94JztcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24pO1xyXG5cclxuICAgIHRoaXMub3BlbkRpYWxvZ0JveCA9IHRoaXMub3BlbkRpYWxvZ0JveC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkRpYWxvZ0JveENsb3NlZCA9IHRoaXMub25EaWFsb2dCb3hDbG9zZWQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0dXBEaWFsb2dCb3goKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGlhbG9nQm94KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRGlhbG9nIGJveCBpcyB1bmRlZmluZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRGlhbG9nQm94KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuRGlhbG9nQm94KTtcclxuXHJcbiAgICB0aGlzLmRpYWxvZ0JveC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25EaWFsb2dCb3hDbG9zZWQpO1xyXG4gICAgdGhpcy5kaWFsb2dCb3guY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBzZXR1cERpYWxvZ0JveCgpOiB2b2lkO1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBvbkRpYWxvZ0JveENsb3NlZChldmVudDogRXZlbnQpOiB2b2lkO1xyXG5cclxuICBwcm90ZWN0ZWQgb3BlbkRpYWxvZ0JveCgpIHtcclxuICAgIHRoaXMuZGlhbG9nT3ZlcmxheS5zaG93RGlhbG9nKHRoaXMuZGlhbG9nQm94KTtcclxuICAgIHRoaXMuZGlhbG9nQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkRpYWxvZ0JveENsb3NlZCk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1kaWFsb2ctYm94LWJ1dHRvbicsIERpYWxvZ0JveEJ1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvRGlhbG9nQm94QnV0dG9uLnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlckZpbmlzaGVkRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQgPSBudWxsO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBSZW5kZXJGaW5pc2hlZEV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gUmVuZGVyRmluaXNoZWRFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvUmVuZGVyRmluaXNoZWRFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuaW1wb3J0IHsgUGF0aFBvaW50RWxlbWVudCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaW5pc2hQb2ludERyYWdFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogUGF0aFBvaW50RWxlbWVudDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gRmluaXNoUG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhdGhQb2ludEVsZW1lbnQ6IFBhdGhQb2ludEVsZW1lbnQpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IHBhdGhQb2ludEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ0ZpbmlzaFBvaW50RHJhZ0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL3BvaW50LWRyYWcvRmluaXNoUG9pbnREcmFnRXZlbnQudHMiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuaW1wb3J0IHsgUGF0aFBvaW50RWxlbWVudCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludERyYWdFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDoge1xyXG4gICAgZWxlbWVudDogUGF0aFBvaW50RWxlbWVudCxcclxuICAgIG5ld1Bvc2l0aW9uOiBQb2ludFxyXG4gIH07XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoUG9pbnRFbGVtZW50OiBQYXRoUG9pbnRFbGVtZW50LCBuZXdQb3NpdGlvbjogUG9pbnQpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IHtcclxuICAgICAgZWxlbWVudDogcGF0aFBvaW50RWxlbWVudCxcclxuICAgICAgbmV3UG9zaXRpb25cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ1BvaW50RHJhZ0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL3BvaW50LWRyYWcvUG9pbnREcmFnRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludEVsZW1lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhcnRQb2ludERyYWdFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogUGF0aFBvaW50RWxlbWVudDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gU3RhcnRQb2ludERyYWdFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aFBvaW50RWxlbWVudDogUGF0aFBvaW50RWxlbWVudCkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gcGF0aFBvaW50RWxlbWVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnU3RhcnRQb2ludERyYWdFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL1N0YXJ0UG9pbnREcmFnRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5pbnRlcmZhY2UgTGluZUNsaWNrRXZlbnRQYXlsb2FkIHtcclxuICBsaW5lOiBMaW5lO1xyXG4gIHBhdGg6IFBhdGg7XHJcbiAgcG9zaXRpb246IFBvaW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGluZUNsaWNrRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IExpbmVDbGlja0V2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogTGluZUNsaWNrRXZlbnRQYXlsb2FkO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpbmU6IExpbmUsIHBhdGg6IFBhdGgsIHBvc2l0aW9uOiBQb2ludCkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0ge1xyXG4gICAgICBsaW5lLFxyXG4gICAgICBwYXRoLFxyXG4gICAgICBwb3NpdGlvblxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnTGluZUNsaWNrRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvTGluZUNsaWNrRXZlbnQudHMiLCJpbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcblxyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnN0cnVjdGlvbnNEaWFsb2cgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIERpYWxvZ0JveCB7XHJcbiAgcHJpdmF0ZSBkaXNtaXNzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuY2xhc3NOYW1lID0gJ2luc3RydWN0aW9ucy1kaWFsb2cgZGlhbG9nLWJveCc7XHJcblxyXG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9ICdJbnN0cnVjdGlvbnMnO1xyXG4gICAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbnMtZGlhbG9nX190aXRsZSc7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVVc2FnZUxpc3QoKTtcclxuXHJcbiAgICB0aGlzLmRpc21pc3NCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuZGlzbWlzc0J1dHRvbi50ZXh0Q29udGVudCA9ICdEaXNtaXNzJztcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5kaXNtaXNzQnV0dG9uKTtcclxuXHJcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5kaXNtaXNzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmRpc21pc3NCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbkNsb3NlKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVVzYWdlTGlzdCgpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgIGNvbnN0IHVzYWdlID0gW1xyXG4gICAgICAnQ2xpY2sgb24gdGhlIGZyZWUgc3BhY2UgaW4gdGhlIGNhbnZhcyB0byBzdGFydCBjcmVhdGluZyB2ZXJ0aWNlcycsXHJcbiAgICAgICdDbGljayBvbiB0aGUgaW5pdGlhbCB2ZXJ0ZXggdG8gY2xvc2UgdGhlIHBhdGggaW50byBhIHBvbHlnb24nLFxyXG4gICAgICAnQWx0ZXJuYXRpdmVseSwgeW91IG1heSBwcmVzcyBFc2NhcGUgdG8gY2FuY2VsIGFkZGluZyBhIG5ldyBwYXRoJyxcclxuICAgICAgJ0NsaWNrIGFuZCBkcmFnIHRoZSB2ZXJ0ZXggdG8gbW92ZSBpdCcsXHJcbiAgICAgICdEb3VibGUgY2xpY2sgb24gYW4gZWRnZSB0byBhZGQgYSB2ZXJ0ZXggaW4gdGhlIG1pZGRsZSBvZiBpdCcsXHJcbiAgICAgICdEb3VibGUgY2xpY2sgb24gYSB2ZXJ0ZXggdG8gcmVtb3ZlIGl0JyxcclxuICAgICAgJ1ByZXNzaW5nIEN0cmwgYWxsb3dzIGRyYWdnaW5nIGEgd2hvbGUgcG9seWdvbicsXHJcbiAgICAgIFwiU2hpZnQgKyBjbGljayB0byBjbGlwIHRoZSBwb2x5Z29ucyB1c2luZyBTdXRoZXJsYW5kLUhvZGdtYW4ncyBhbGdvcml0aG1cIixcclxuICAgICAgJ1NhdmUgYWxsb3dzIHlvdSB0byBleHBvcnQgYWxsIHRoZSBwb2x5Z29ucyBvbiB0aGUgc2NyZWVuJyxcclxuICAgICAgJ0xvYWQgYWxsb3dzIHlvdSB0byByZXN0b3JlIHRoZSBwb2x5Z29ucydcclxuICAgIF07XHJcblxyXG4gICAgdXNhZ2VcclxuICAgICAgLm1hcCh1c2FnZUl0ZW1UZXh0ID0+IHRoaXMuY3JlYXRlVXNhZ2VMaXN0SXRlbSh1c2FnZUl0ZW1UZXh0KSlcclxuICAgICAgLmZvckVhY2godXNhZ2VMaXN0SXRlbSA9PiBsaXN0LmFwcGVuZENoaWxkKHVzYWdlTGlzdEl0ZW0pKTtcclxuXHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVVc2FnZUxpc3RJdGVtKHRleHRDb250ZW50OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgaXRlbS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG5cclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWluc3RydWN0aW9ucy1kaWFsb2cnLCBJbnN0cnVjdGlvbnNEaWFsb2cpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNEaWFsb2cudHMiLCJpbXBvcnQgJ2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xyXG5cclxuaW1wb3J0ICdAd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvd2ViY29tcG9uZW50cy1oaS1zZC1jZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ0FwcGxpY2F0aW9uJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBib290c3RyYXA7XHJcblxyXG5mdW5jdGlvbiBib290c3RyYXAoKTogdm9pZCB7XHJcbiAgY29uc3QgY2FudmFzSWQgPSAnbWFpbi1jYW52YXMnO1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKTtcclxuICBpZiAoIWNhbnZhcykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW52YXMgd2l0aCBpZCAke2NhbnZhc0lkfSBjYW5ub3QgYmUgZm91bmRgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFwcGxpY2F0aW9uID0gbmV3IEFwcGxpY2F0aW9uKDxIVE1MQ2FudmFzRWxlbWVudD5jYW52YXMpO1xyXG4gIGFwcGxpY2F0aW9uLmluaXQoKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9pbmRleC50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IH1cXG5cXG4ubWFpbi1jYW52YXMge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7IH1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDFlbTsgfVxcblxcbi5jYW52YXMtd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5hcHBsaWNhdGlvbi11aSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgLmFwcGxpY2F0aW9uLXVpICoge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsOyB9XFxuXFxuLmFwcC1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTsgfVxcblxcbi5hcHAtbmFtZSB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4uZm9vdGVyIHtcXG4gIG1hcmdpbjogMWVtIDFlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbigpey8qXG5cbiBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcblxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG5cbiBDb3B5cmlnaHQgKGMpIDIwMTQgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4ndXNlIHN0cmljdCc7dmFyIEo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09dGhpcz90aGlzOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6dGhpcyxBYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oZyxxLE4pe2chPUFycmF5LnByb3RvdHlwZSYmZyE9T2JqZWN0LnByb3RvdHlwZSYmKGdbcV09Ti52YWx1ZSl9O2Z1bmN0aW9uIHNiKCl7c2I9ZnVuY3Rpb24oKXt9O0ouU3ltYm9sfHwoSi5TeW1ib2w9dGIpfXZhciB0Yj1mdW5jdGlvbigpe3ZhciBnPTA7cmV0dXJuIGZ1bmN0aW9uKHEpe3JldHVyblwianNjb21wX3N5bWJvbF9cIisocXx8XCJcIikrZysrfX0oKTtcbmZ1bmN0aW9uIGRkKCl7c2IoKTt2YXIgZz1KLlN5bWJvbC5pdGVyYXRvcjtnfHwoZz1KLlN5bWJvbC5pdGVyYXRvcj1KLlN5bWJvbChcIml0ZXJhdG9yXCIpKTtcImZ1bmN0aW9uXCIhPXR5cGVvZiBBcnJheS5wcm90b3R5cGVbZ10mJkFhKEFycmF5LnByb3RvdHlwZSxnLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZWQodGhpcyl9fSk7ZGQ9ZnVuY3Rpb24oKXt9fWZ1bmN0aW9uIGVkKGcpe3ZhciBxPTA7cmV0dXJuIGZkKGZ1bmN0aW9uKCl7cmV0dXJuIHE8Zy5sZW5ndGg/e2RvbmU6ITEsdmFsdWU6Z1txKytdfTp7ZG9uZTohMH19KX1mdW5jdGlvbiBmZChnKXtkZCgpO2c9e25leHQ6Z307Z1tKLlN5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307cmV0dXJuIGd9ZnVuY3Rpb24gZ2QoZyl7ZGQoKTt2YXIgcT1nW1N5bWJvbC5pdGVyYXRvcl07cmV0dXJuIHE/cS5jYWxsKGcpOmVkKGcpfVxuZnVuY3Rpb24gaGQoZyl7Zm9yKHZhciBxLE49W107IShxPWcubmV4dCgpKS5kb25lOylOLnB1c2gocS52YWx1ZSk7cmV0dXJuIE59XG4oZnVuY3Rpb24oKXtmdW5jdGlvbiBnKCl7dmFyIGE9dGhpczt0aGlzLm09e307dGhpcy5nPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt2YXIgYj1uZXcgQmE7Yi5ydWxlcz1bXTt0aGlzLmg9di5zZXQodGhpcy5nLG5ldyB2KGIpKTt0aGlzLmk9ITE7dGhpcy5iPXRoaXMuYT1udWxsO3ViKGZ1bmN0aW9uKCl7YS5jKCl9KX1mdW5jdGlvbiBxKCl7dGhpcy5jdXN0b21TdHlsZXM9W107dGhpcy5lbnF1ZXVlZD0hMX1mdW5jdGlvbiBOKCl7fWZ1bmN0aW9uIGhhKGEpe3RoaXMuY2FjaGU9e307dGhpcy5jPXZvaWQgMD09PWE/MTAwOmF9ZnVuY3Rpb24gbigpe31mdW5jdGlvbiB2KGEsYixjLGQsZSl7dGhpcy5EPWF8fG51bGw7dGhpcy5iPWJ8fG51bGw7dGhpcy5sYT1jfHxbXTt0aGlzLk49bnVsbDt0aGlzLlY9ZXx8XCJcIjt0aGlzLmE9dGhpcy5BPXRoaXMuSj1udWxsfWZ1bmN0aW9uIHUoKXt9ZnVuY3Rpb24gQmEoKXt0aGlzLmVuZD10aGlzLnN0YXJ0PTA7dGhpcy5ydWxlcz10aGlzLnBhcmVudD1cbnRoaXMucHJldmlvdXM9bnVsbDt0aGlzLmNzc1RleHQ9dGhpcy5wYXJzZWRDc3NUZXh0PVwiXCI7dGhpcy5hdFJ1bGU9ITE7dGhpcy50eXBlPTA7dGhpcy5wYXJzZWRTZWxlY3Rvcj10aGlzLnNlbGVjdG9yPXRoaXMua2V5ZnJhbWVzTmFtZT1cIlwifWZ1bmN0aW9uIGlkKGEpe2Z1bmN0aW9uIGIoYixjKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYixcImlubmVySFRNTFwiLHtlbnVtZXJhYmxlOmMuZW51bWVyYWJsZSxjb25maWd1cmFibGU6ITAsZ2V0OmMuZ2V0LHNldDpmdW5jdGlvbihiKXt2YXIgZD10aGlzLGU9dm9pZCAwO3QodGhpcykmJihlPVtdLE8odGhpcyxmdW5jdGlvbihhKXthIT09ZCYmZS5wdXNoKGEpfSkpO2Muc2V0LmNhbGwodGhpcyxiKTtpZihlKWZvcih2YXIgZj0wO2Y8ZS5sZW5ndGg7ZisrKXt2YXIgaz1lW2ZdOzE9PT1rLl9fQ0Vfc3RhdGUmJmEuZGlzY29ubmVjdGVkQ2FsbGJhY2soayl9dGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnk/YS5mKHRoaXMpOmEubCh0aGlzKTtcbnJldHVybiBifX0pfWZ1bmN0aW9uIGMoYixjKXt4KGIsXCJpbnNlcnRBZGphY2VudEVsZW1lbnRcIixmdW5jdGlvbihiLGQpe3ZhciBlPXQoZCk7Yj1jLmNhbGwodGhpcyxiLGQpO2UmJmEuYShkKTt0KGIpJiZhLmIoZCk7cmV0dXJuIGJ9KX12YiYmeChFbGVtZW50LnByb3RvdHlwZSxcImF0dGFjaFNoYWRvd1wiLGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9fQ0Vfc2hhZG93Um9vdD1hPXZiLmNhbGwodGhpcyxhKX0pO2lmKENhJiZDYS5nZXQpYihFbGVtZW50LnByb3RvdHlwZSxDYSk7ZWxzZSBpZihEYSYmRGEuZ2V0KWIoSFRNTEVsZW1lbnQucHJvdG90eXBlLERhKTtlbHNle3ZhciBkPUVhLmNhbGwoZG9jdW1lbnQsXCJkaXZcIik7YS5zKGZ1bmN0aW9uKGEpe2IoYSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHdiLmNhbGwodGhpcywhMCkuaW5uZXJIVE1MfSxzZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9XCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWU/XG50aGlzLmNvbnRlbnQ6dGhpcztmb3IoZC5pbm5lckhUTUw9YTswPGIuY2hpbGROb2Rlcy5sZW5ndGg7KUZhLmNhbGwoYixiLmNoaWxkTm9kZXNbMF0pO2Zvcig7MDxkLmNoaWxkTm9kZXMubGVuZ3RoOylpYS5jYWxsKGIsZC5jaGlsZE5vZGVzWzBdKX19KX0pfXgoRWxlbWVudC5wcm90b3R5cGUsXCJzZXRBdHRyaWJ1dGVcIixmdW5jdGlvbihiLGMpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIHhiLmNhbGwodGhpcyxiLGMpO3ZhciBkPUdhLmNhbGwodGhpcyxiKTt4Yi5jYWxsKHRoaXMsYixjKTtjPUdhLmNhbGwodGhpcyxiKTthLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGIsZCxjLG51bGwpfSk7eChFbGVtZW50LnByb3RvdHlwZSxcInNldEF0dHJpYnV0ZU5TXCIsZnVuY3Rpb24oYixjLGQpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIHliLmNhbGwodGhpcyxiLGMsZCk7dmFyIGU9amEuY2FsbCh0aGlzLGIsYyk7eWIuY2FsbCh0aGlzLGIsYyxkKTtkPWphLmNhbGwodGhpcyxcbmIsYyk7YS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxjLGUsZCxiKX0pO3goRWxlbWVudC5wcm90b3R5cGUsXCJyZW1vdmVBdHRyaWJ1dGVcIixmdW5jdGlvbihiKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiB6Yi5jYWxsKHRoaXMsYik7dmFyIGM9R2EuY2FsbCh0aGlzLGIpO3piLmNhbGwodGhpcyxiKTtudWxsIT09YyYmYS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxiLGMsbnVsbCxudWxsKX0pO3goRWxlbWVudC5wcm90b3R5cGUsXCJyZW1vdmVBdHRyaWJ1dGVOU1wiLGZ1bmN0aW9uKGIsYyl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gQWIuY2FsbCh0aGlzLGIsYyk7dmFyIGQ9amEuY2FsbCh0aGlzLGIsYyk7QWIuY2FsbCh0aGlzLGIsYyk7dmFyIGU9amEuY2FsbCh0aGlzLGIsYyk7ZCE9PWUmJmEuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYyxkLGUsYil9KTtCYj9jKEhUTUxFbGVtZW50LnByb3RvdHlwZSxCYik6Q2I/YyhFbGVtZW50LnByb3RvdHlwZSxcbkNiKTpjb25zb2xlLndhcm4oXCJDdXN0b20gRWxlbWVudHM6IGBFbGVtZW50I2luc2VydEFkamFjZW50RWxlbWVudGAgd2FzIG5vdCBwYXRjaGVkLlwiKTtIYShhLEVsZW1lbnQucHJvdG90eXBlLHtaOmpkLGFwcGVuZDprZH0pO2xkKGEse2phOm1kLFdhOm5kLHJlcGxhY2VXaXRoOm9kLHJlbW92ZTpwZH0pfWZ1bmN0aW9uIGxkKGEsYil7dmFyIGM9RWxlbWVudC5wcm90b3R5cGU7ZnVuY3Rpb24gZChiKXtyZXR1cm4gZnVuY3Rpb24oYyl7Zm9yKHZhciBkPVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7KytlKWRbZS0wXT1hcmd1bWVudHNbZV07ZT1bXTtmb3IodmFyIGY9W10sZz0wO2c8ZC5sZW5ndGg7ZysrKXt2YXIgbT1kW2ddO20gaW5zdGFuY2VvZiBFbGVtZW50JiZ0KG0pJiZmLnB1c2gobSk7aWYobSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKG09bS5maXJzdENoaWxkO207bT1tLm5leHRTaWJsaW5nKWUucHVzaChtKTtlbHNlIGUucHVzaChtKX1iLmFwcGx5KHRoaXMsXG5kKTtmb3IoZD0wO2Q8Zi5sZW5ndGg7ZCsrKWEuYShmW2RdKTtpZih0KHRoaXMpKWZvcihkPTA7ZDxlLmxlbmd0aDtkKyspZj1lW2RdLGYgaW5zdGFuY2VvZiBFbGVtZW50JiZhLmIoZil9fXZvaWQgMCE9PWIuamEmJihjLmJlZm9yZT1kKGIuamEpKTt2b2lkIDAhPT1iLmphJiYoYy5hZnRlcj1kKGIuV2EpKTt2b2lkIDAhPT1iLnJlcGxhY2VXaXRoJiZ4KGMsXCJyZXBsYWNlV2l0aFwiLGZ1bmN0aW9uKGMpe2Zvcih2YXIgZD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoOysrZSlkW2UtMF09YXJndW1lbnRzW2VdO2U9W107Zm9yKHZhciBoPVtdLHc9MDt3PGQubGVuZ3RoO3crKyl7dmFyIGc9ZFt3XTtnIGluc3RhbmNlb2YgRWxlbWVudCYmdChnKSYmaC5wdXNoKGcpO2lmKGcgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KWZvcihnPWcuZmlyc3RDaGlsZDtnO2c9Zy5uZXh0U2libGluZyllLnB1c2goZyk7ZWxzZSBlLnB1c2goZyl9dz10KHRoaXMpO2IucmVwbGFjZVdpdGguYXBwbHkodGhpcyxcbmQpO2ZvcihkPTA7ZDxoLmxlbmd0aDtkKyspYS5hKGhbZF0pO2lmKHcpZm9yKGEuYSh0aGlzKSxkPTA7ZDxlLmxlbmd0aDtkKyspaD1lW2RdLGggaW5zdGFuY2VvZiBFbGVtZW50JiZhLmIoaCl9KTt2b2lkIDAhPT1iLnJlbW92ZSYmeChjLFwicmVtb3ZlXCIsZnVuY3Rpb24oKXt2YXIgYz10KHRoaXMpO2IucmVtb3ZlLmNhbGwodGhpcyk7YyYmYS5hKHRoaXMpfSl9ZnVuY3Rpb24gcWQoYSl7ZnVuY3Rpb24gYihiLGQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShiLFwidGV4dENvbnRlbnRcIix7ZW51bWVyYWJsZTpkLmVudW1lcmFibGUsY29uZmlndXJhYmxlOiEwLGdldDpkLmdldCxzZXQ6ZnVuY3Rpb24oYil7aWYodGhpcy5ub2RlVHlwZT09PU5vZGUuVEVYVF9OT0RFKWQuc2V0LmNhbGwodGhpcyxiKTtlbHNle3ZhciBjPXZvaWQgMDtpZih0aGlzLmZpcnN0Q2hpbGQpe3ZhciBlPXRoaXMuY2hpbGROb2RlcyxoPWUubGVuZ3RoO2lmKDA8aCYmdCh0aGlzKSl7Yz1BcnJheShoKTtmb3IodmFyIHc9XG4wO3c8aDt3KyspY1t3XT1lW3ddfX1kLnNldC5jYWxsKHRoaXMsYik7aWYoYylmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKWEuYShjW2JdKX19fSl9eChOb2RlLnByb3RvdHlwZSxcImluc2VydEJlZm9yZVwiLGZ1bmN0aW9uKGIsZCl7aWYoYiBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShiLmNoaWxkTm9kZXMpO2I9RGIuY2FsbCh0aGlzLGIsZCk7aWYodCh0aGlzKSlmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKWEuYihjW2RdKTtyZXR1cm4gYn1jPXQoYik7ZD1EYi5jYWxsKHRoaXMsYixkKTtjJiZhLmEoYik7dCh0aGlzKSYmYS5iKGIpO3JldHVybiBkfSk7eChOb2RlLnByb3RvdHlwZSxcImFwcGVuZENoaWxkXCIsZnVuY3Rpb24oYil7aWYoYiBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShiLmNoaWxkTm9kZXMpO2I9aWEuY2FsbCh0aGlzLGIpO2lmKHQodGhpcykpZm9yKHZhciBlPVxuMDtlPGMubGVuZ3RoO2UrKylhLmIoY1tlXSk7cmV0dXJuIGJ9Yz10KGIpO2U9aWEuY2FsbCh0aGlzLGIpO2MmJmEuYShiKTt0KHRoaXMpJiZhLmIoYik7cmV0dXJuIGV9KTt4KE5vZGUucHJvdG90eXBlLFwiY2xvbmVOb2RlXCIsZnVuY3Rpb24oYil7Yj13Yi5jYWxsKHRoaXMsYik7dGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnk/YS5mKGIpOmEubChiKTtyZXR1cm4gYn0pO3goTm9kZS5wcm90b3R5cGUsXCJyZW1vdmVDaGlsZFwiLGZ1bmN0aW9uKGIpe3ZhciBjPXQoYiksZT1GYS5jYWxsKHRoaXMsYik7YyYmYS5hKGIpO3JldHVybiBlfSk7eChOb2RlLnByb3RvdHlwZSxcInJlcGxhY2VDaGlsZFwiLGZ1bmN0aW9uKGIsZCl7aWYoYiBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShiLmNoaWxkTm9kZXMpO2I9RWIuY2FsbCh0aGlzLGIsZCk7aWYodCh0aGlzKSlmb3IoYS5hKGQpLGQ9MDtkPGMubGVuZ3RoO2QrKylhLmIoY1tkXSk7XG5yZXR1cm4gYn1jPXQoYik7dmFyIGY9RWIuY2FsbCh0aGlzLGIsZCksaz10KHRoaXMpO2smJmEuYShkKTtjJiZhLmEoYik7ayYmYS5iKGIpO3JldHVybiBmfSk7SWEmJklhLmdldD9iKE5vZGUucHJvdG90eXBlLElhKTphLnMoZnVuY3Rpb24oYSl7YihhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9W10sYj0wO2I8dGhpcy5jaGlsZE5vZGVzLmxlbmd0aDtiKyspYS5wdXNoKHRoaXMuY2hpbGROb2Rlc1tiXS50ZXh0Q29udGVudCk7cmV0dXJuIGEuam9pbihcIlwiKX0sc2V0OmZ1bmN0aW9uKGEpe2Zvcig7dGhpcy5maXJzdENoaWxkOylGYS5jYWxsKHRoaXMsdGhpcy5maXJzdENoaWxkKTtpYS5jYWxsKHRoaXMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpfX0pfSl9ZnVuY3Rpb24gcmQoYSl7eChEb2N1bWVudC5wcm90b3R5cGUsXCJjcmVhdGVFbGVtZW50XCIsZnVuY3Rpb24oYil7aWYodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5KXt2YXIgYz1cbmEuYyhiKTtpZihjKXJldHVybiBuZXcgYy5jb25zdHJ1Y3Rvcn1iPUVhLmNhbGwodGhpcyxiKTthLmcoYik7cmV0dXJuIGJ9KTt4KERvY3VtZW50LnByb3RvdHlwZSxcImltcG9ydE5vZGVcIixmdW5jdGlvbihiLGMpe2I9c2QuY2FsbCh0aGlzLGIsYyk7dGhpcy5fX0NFX2hhc1JlZ2lzdHJ5P2EuZihiKTphLmwoYik7cmV0dXJuIGJ9KTt4KERvY3VtZW50LnByb3RvdHlwZSxcImNyZWF0ZUVsZW1lbnROU1wiLGZ1bmN0aW9uKGIsYyl7aWYodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5JiYobnVsbD09PWJ8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09Yikpe3ZhciBkPWEuYyhjKTtpZihkKXJldHVybiBuZXcgZC5jb25zdHJ1Y3Rvcn1iPXRkLmNhbGwodGhpcyxiLGMpO2EuZyhiKTtyZXR1cm4gYn0pO0hhKGEsRG9jdW1lbnQucHJvdG90eXBlLHtaOnVkLGFwcGVuZDp2ZH0pfWZ1bmN0aW9uIEhhKGEsYixjKXtmdW5jdGlvbiBkKGIpe3JldHVybiBmdW5jdGlvbihjKXtmb3IodmFyIGQ9W10sXG5lPTA7ZTxhcmd1bWVudHMubGVuZ3RoOysrZSlkW2UtMF09YXJndW1lbnRzW2VdO2U9W107Zm9yKHZhciBmPVtdLGc9MDtnPGQubGVuZ3RoO2crKyl7dmFyIG09ZFtnXTttIGluc3RhbmNlb2YgRWxlbWVudCYmdChtKSYmZi5wdXNoKG0pO2lmKG0gaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KWZvcihtPW0uZmlyc3RDaGlsZDttO209bS5uZXh0U2libGluZyllLnB1c2gobSk7ZWxzZSBlLnB1c2gobSl9Yi5hcHBseSh0aGlzLGQpO2ZvcihkPTA7ZDxmLmxlbmd0aDtkKyspYS5hKGZbZF0pO2lmKHQodGhpcykpZm9yKGQ9MDtkPGUubGVuZ3RoO2QrKylmPWVbZF0sZiBpbnN0YW5jZW9mIEVsZW1lbnQmJmEuYihmKX19dm9pZCAwIT09Yy5aJiYoYi5wcmVwZW5kPWQoYy5aKSk7dm9pZCAwIT09Yy5hcHBlbmQmJihiLmFwcGVuZD1kKGMuYXBwZW5kKSl9ZnVuY3Rpb24gd2QoYSl7d2luZG93LkhUTUxFbGVtZW50PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe3ZhciBiPXRoaXMuY29uc3RydWN0b3IsXG5kPWEudyhiKTtpZighZCl0aHJvdyBFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBiZWluZyBjb25zdHJ1Y3RlZCB3YXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgY3VzdG9tRWxlbWVudHNgLlwiKTt2YXIgZT1kLmNvbnN0cnVjdGlvblN0YWNrO2lmKDA9PT1lLmxlbmd0aClyZXR1cm4gZT1FYS5jYWxsKGRvY3VtZW50LGQubG9jYWxOYW1lKSxPYmplY3Quc2V0UHJvdG90eXBlT2YoZSxiLnByb3RvdHlwZSksZS5fX0NFX3N0YXRlPTEsZS5fX0NFX2RlZmluaXRpb249ZCxhLmcoZSksZTtkPWUubGVuZ3RoLTE7dmFyIGY9ZVtkXTtpZihmPT09RmIpdGhyb3cgRXJyb3IoXCJUaGUgSFRNTEVsZW1lbnQgY29uc3RydWN0b3Igd2FzIGVpdGhlciBjYWxsZWQgcmVlbnRyYW50bHkgZm9yIHRoaXMgY29uc3RydWN0b3Igb3IgY2FsbGVkIG11bHRpcGxlIHRpbWVzLlwiKTtlW2RdPUZiO09iamVjdC5zZXRQcm90b3R5cGVPZihmLGIucHJvdG90eXBlKTthLmcoZik7cmV0dXJuIGZ9Yi5wcm90b3R5cGU9eGQucHJvdG90eXBlO1xucmV0dXJuIGJ9KCl9ZnVuY3Rpb24geShhKXt0aGlzLmM9ITE7dGhpcy5hPWE7dGhpcy5oPW5ldyBNYXA7dGhpcy5mPWZ1bmN0aW9uKGEpe3JldHVybiBhKCl9O3RoaXMuYj0hMTt0aGlzLmc9W107dGhpcy5pPW5ldyBKYShhLGRvY3VtZW50KX1mdW5jdGlvbiBHYigpe3ZhciBhPXRoaXM7dGhpcy5iPXRoaXMuYT12b2lkIDA7dGhpcy5mPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGIpe2EuYj1iO2EuYSYmYihhLmEpfSl9ZnVuY3Rpb24gSmEoYSxiKXt0aGlzLmI9YTt0aGlzLmE9Yjt0aGlzLk09dm9pZCAwO3RoaXMuYi5mKHRoaXMuYSk7XCJsb2FkaW5nXCI9PT10aGlzLmEucmVhZHlTdGF0ZSYmKHRoaXMuTT1uZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmYuYmluZCh0aGlzKSksdGhpcy5NLm9ic2VydmUodGhpcy5hLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pKX1mdW5jdGlvbiBCKCl7dGhpcy5vPW5ldyBNYXA7dGhpcy5tPW5ldyBNYXA7dGhpcy5qPVtdO3RoaXMuaD0hMX1mdW5jdGlvbiBsKGEsXG5iLGMpe2lmKGEhPT1IYil0aHJvdyBuZXcgVHlwZUVycm9yKFwiSWxsZWdhbCBjb25zdHJ1Y3RvclwiKTthPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTthLl9fcHJvdG9fXz1sLnByb3RvdHlwZTthLkYoYixjKTtyZXR1cm4gYX1mdW5jdGlvbiBrYShhKXtpZighYS5fX3NoYWR5fHx2b2lkIDA9PT1hLl9fc2hhZHkuZmlyc3RDaGlsZCl7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307YS5fX3NoYWR5LmZpcnN0Q2hpbGQ9S2EoYSk7YS5fX3NoYWR5Lmxhc3RDaGlsZD1MYShhKTtJYihhKTtmb3IodmFyIGI9YS5fX3NoYWR5LmNoaWxkTm9kZXM9UyhhKSxjPTAsZDtjPGIubGVuZ3RoJiYoZD1iW2NdKTtjKyspZC5fX3NoYWR5PWQuX19zaGFkeXx8e30sZC5fX3NoYWR5LnBhcmVudE5vZGU9YSxkLl9fc2hhZHkubmV4dFNpYmxpbmc9YltjKzFdfHxudWxsLGQuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc9YltjLTFdfHxudWxsLEpiKGQpfX1mdW5jdGlvbiB5ZChhKXt2YXIgYj1hJiZhLk07XG5iJiYoYi5YLmRlbGV0ZShhLlJhKSxiLlguc2l6ZXx8KGEuU2EuX19zaGFkeS5UPW51bGwpKX1mdW5jdGlvbiB6ZChhLGIpe2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O2EuX19zaGFkeS5UfHwoYS5fX3NoYWR5LlQ9bmV3IGxhKTthLl9fc2hhZHkuVC5YLmFkZChiKTt2YXIgYz1hLl9fc2hhZHkuVDtyZXR1cm57UmE6YixNOmMsU2E6YSx0YWtlUmVjb3JkczpmdW5jdGlvbigpe3JldHVybiBjLnRha2VSZWNvcmRzKCl9fX1mdW5jdGlvbiBsYSgpe3RoaXMuYT0hMTt0aGlzLmFkZGVkTm9kZXM9W107dGhpcy5yZW1vdmVkTm9kZXM9W107dGhpcy5YPW5ldyBTZXR9ZnVuY3Rpb24gVChhKXtyZXR1cm4gYS5fX3NoYWR5JiZ2b2lkIDAhPT1hLl9fc2hhZHkuZmlyc3RDaGlsZH1mdW5jdGlvbiBHKGEpe3JldHVyblwiU2hhZHlSb290XCI9PT1hLk1hfWZ1bmN0aW9uIFooYSl7YT1hLmdldFJvb3ROb2RlKCk7aWYoRyhhKSlyZXR1cm4gYX1mdW5jdGlvbiBNYShhLGIpe2lmKGEmJmIpZm9yKHZhciBjPVxuT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYiksZD0wLGU7ZDxjLmxlbmd0aCYmKGU9Y1tkXSk7ZCsrKXt2YXIgZj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGIsZSk7ZiYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsZSxmKX19ZnVuY3Rpb24gTmEoYSxiKXtmb3IodmFyIGM9W10sZD0xO2Q8YXJndW1lbnRzLmxlbmd0aDsrK2QpY1tkLTFdPWFyZ3VtZW50c1tkXTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKU1hKGEsY1tkXSk7cmV0dXJuIGF9ZnVuY3Rpb24gQWQoYSxiKXtmb3IodmFyIGMgaW4gYilhW2NdPWJbY119ZnVuY3Rpb24gS2IoYSl7T2EucHVzaChhKTtQYS50ZXh0Q29udGVudD1MYisrfWZ1bmN0aW9uIE1iKGEsYil7Zm9yKDtiOyl7aWYoYj09YSlyZXR1cm4hMDtiPWIucGFyZW50Tm9kZX1yZXR1cm4hMX1mdW5jdGlvbiBOYihhKXtRYXx8KFFhPSEwLEtiKG1hKSk7YWEucHVzaChhKX1mdW5jdGlvbiBtYSgpe1FhPSExO2Zvcih2YXIgYT0hIWFhLmxlbmd0aDthYS5sZW5ndGg7KWFhLnNoaWZ0KCkoKTtcbnJldHVybiBhfWZ1bmN0aW9uIEJkKGEsYil7dmFyIGM9Yi5nZXRSb290Tm9kZSgpO3JldHVybiBhLm1hcChmdW5jdGlvbihhKXt2YXIgYj1jPT09YS50YXJnZXQuZ2V0Um9vdE5vZGUoKTtpZihiJiZhLmFkZGVkTm9kZXMpe2lmKGI9QXJyYXkuZnJvbShhLmFkZGVkTm9kZXMpLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYz09PWEuZ2V0Um9vdE5vZGUoKX0pLGIubGVuZ3RoKXJldHVybiBhPU9iamVjdC5jcmVhdGUoYSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJhZGRlZE5vZGVzXCIse3ZhbHVlOmIsY29uZmlndXJhYmxlOiEwfSksYX1lbHNlIGlmKGIpcmV0dXJuIGF9KS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGF9KX1mdW5jdGlvbiBPYihhKXtzd2l0Y2goYSl7Y2FzZSBcIiZcIjpyZXR1cm5cIiZhbXA7XCI7Y2FzZSBcIjxcIjpyZXR1cm5cIiZsdDtcIjtjYXNlIFwiPlwiOnJldHVyblwiJmd0O1wiO2Nhc2UgJ1wiJzpyZXR1cm5cIiZxdW90O1wiO2Nhc2UgXCJcXHUwMGEwXCI6cmV0dXJuXCImbmJzcDtcIn19XG5mdW5jdGlvbiBQYihhKXtmb3IodmFyIGI9e30sYz0wO2M8YS5sZW5ndGg7YysrKWJbYVtjXV09ITA7cmV0dXJuIGJ9ZnVuY3Rpb24gUmEoYSxiKXtcInRlbXBsYXRlXCI9PT1hLmxvY2FsTmFtZSYmKGE9YS5jb250ZW50KTtmb3IodmFyIGM9XCJcIixkPWI/YihhKTphLmNoaWxkTm9kZXMsZT0wLGY9ZC5sZW5ndGgsaztlPGYmJihrPWRbZV0pO2UrKyl7YTp7dmFyIGg9azt2YXIgdz1hO3ZhciBnPWI7c3dpdGNoKGgubm9kZVR5cGUpe2Nhc2UgTm9kZS5FTEVNRU5UX05PREU6Zm9yKHZhciBtPWgubG9jYWxOYW1lLGw9XCI8XCIrbSxxPWguYXR0cmlidXRlcyxuPTA7dz1xW25dO24rKylsKz1cIiBcIit3Lm5hbWUrJz1cIicrdy52YWx1ZS5yZXBsYWNlKENkLE9iKSsnXCInO2wrPVwiPlwiO2g9RGRbbV0/bDpsK1JhKGgsZykrXCI8L1wiK20rXCI+XCI7YnJlYWsgYTtjYXNlIE5vZGUuVEVYVF9OT0RFOmg9aC5kYXRhO2g9dyYmRWRbdy5sb2NhbE5hbWVdP2g6aC5yZXBsYWNlKEZkLE9iKTticmVhayBhO2Nhc2UgTm9kZS5DT01NRU5UX05PREU6aD1cblwiXFx4M2MhLS1cIitoLmRhdGErXCItLVxceDNlXCI7YnJlYWsgYTtkZWZhdWx0OnRocm93IHdpbmRvdy5jb25zb2xlLmVycm9yKGgpLEVycm9yKFwibm90IGltcGxlbWVudGVkXCIpO319Yys9aH1yZXR1cm4gY31mdW5jdGlvbiBVKGEpe0MuY3VycmVudE5vZGU9YTtyZXR1cm4gQy5wYXJlbnROb2RlKCl9ZnVuY3Rpb24gS2EoYSl7Qy5jdXJyZW50Tm9kZT1hO3JldHVybiBDLmZpcnN0Q2hpbGQoKX1mdW5jdGlvbiBMYShhKXtDLmN1cnJlbnROb2RlPWE7cmV0dXJuIEMubGFzdENoaWxkKCl9ZnVuY3Rpb24gUWIoYSl7Qy5jdXJyZW50Tm9kZT1hO3JldHVybiBDLnByZXZpb3VzU2libGluZygpfWZ1bmN0aW9uIFJiKGEpe0MuY3VycmVudE5vZGU9YTtyZXR1cm4gQy5uZXh0U2libGluZygpfWZ1bmN0aW9uIFMoYSl7dmFyIGI9W107Qy5jdXJyZW50Tm9kZT1hO2ZvcihhPUMuZmlyc3RDaGlsZCgpO2E7KWIucHVzaChhKSxhPUMubmV4dFNpYmxpbmcoKTtyZXR1cm4gYn1mdW5jdGlvbiBTYihhKXtELmN1cnJlbnROb2RlPVxuYTtyZXR1cm4gRC5wYXJlbnROb2RlKCl9ZnVuY3Rpb24gVGIoYSl7RC5jdXJyZW50Tm9kZT1hO3JldHVybiBELmZpcnN0Q2hpbGQoKX1mdW5jdGlvbiBVYihhKXtELmN1cnJlbnROb2RlPWE7cmV0dXJuIEQubGFzdENoaWxkKCl9ZnVuY3Rpb24gVmIoYSl7RC5jdXJyZW50Tm9kZT1hO3JldHVybiBELnByZXZpb3VzU2libGluZygpfWZ1bmN0aW9uIFdiKGEpe0QuY3VycmVudE5vZGU9YTtyZXR1cm4gRC5uZXh0U2libGluZygpfWZ1bmN0aW9uIFhiKGEpe3ZhciBiPVtdO0QuY3VycmVudE5vZGU9YTtmb3IoYT1ELmZpcnN0Q2hpbGQoKTthOyliLnB1c2goYSksYT1ELm5leHRTaWJsaW5nKCk7cmV0dXJuIGJ9ZnVuY3Rpb24gWWIoYSl7cmV0dXJuIFJhKGEsZnVuY3Rpb24oYSl7cmV0dXJuIFMoYSl9KX1mdW5jdGlvbiBaYihhKXtzd2l0Y2goYS5ub2RlVHlwZSl7Y2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpjYXNlIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERTphPWRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoYSxcbk5vZGVGaWx0ZXIuU0hPV19URVhULG51bGwsITEpO2Zvcih2YXIgYj1cIlwiLGM7Yz1hLm5leHROb2RlKCk7KWIrPWMubm9kZVZhbHVlO3JldHVybiBiO2RlZmF1bHQ6cmV0dXJuIGEubm9kZVZhbHVlfX1mdW5jdGlvbiBLKGEsYixjKXtmb3IodmFyIGQgaW4gYil7dmFyIGU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLGQpO2UmJmUuY29uZmlndXJhYmxlfHwhZSYmYz9PYmplY3QuZGVmaW5lUHJvcGVydHkoYSxkLGJbZF0pOmMmJmNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBkZWZpbmVcIixkLFwib25cIixhKX19ZnVuY3Rpb24gUChhKXtLKGEsJGIpO0soYSxTYSk7SyhhLFRhKX1mdW5jdGlvbiBhYyhhLGIsYyl7SmIoYSk7Yz1jfHxudWxsO2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O2IuX19zaGFkeT1iLl9fc2hhZHl8fHt9O2MmJihjLl9fc2hhZHk9Yy5fX3NoYWR5fHx7fSk7YS5fX3NoYWR5LnByZXZpb3VzU2libGluZz1jP2MuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc6Yi5sYXN0Q2hpbGQ7XG52YXIgZD1hLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nO2QmJmQuX19zaGFkeSYmKGQuX19zaGFkeS5uZXh0U2libGluZz1hKTsoZD1hLl9fc2hhZHkubmV4dFNpYmxpbmc9YykmJmQuX19zaGFkeSYmKGQuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc9YSk7YS5fX3NoYWR5LnBhcmVudE5vZGU9YjtjP2M9PT1iLl9fc2hhZHkuZmlyc3RDaGlsZCYmKGIuX19zaGFkeS5maXJzdENoaWxkPWEpOihiLl9fc2hhZHkubGFzdENoaWxkPWEsYi5fX3NoYWR5LmZpcnN0Q2hpbGR8fChiLl9fc2hhZHkuZmlyc3RDaGlsZD1hKSk7Yi5fX3NoYWR5LmNoaWxkTm9kZXM9bnVsbH1mdW5jdGlvbiBVYShhLGIsYyl7aWYoYj09PWEpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnYXBwZW5kQ2hpbGQnIG9uICdOb2RlJzogVGhlIG5ldyBjaGlsZCBlbGVtZW50IGNvbnRhaW5zIHRoZSBwYXJlbnQuXCIpO2lmKGMpe3ZhciBkPWMuX19zaGFkeSYmYy5fX3NoYWR5LnBhcmVudE5vZGU7aWYodm9pZCAwIT09ZCYmXG5kIT09YXx8dm9pZCAwPT09ZCYmVShjKSE9PWEpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnaW5zZXJ0QmVmb3JlJyBvbiAnTm9kZSc6IFRoZSBub2RlIGJlZm9yZSB3aGljaCB0aGUgbmV3IG5vZGUgaXMgdG8gYmUgaW5zZXJ0ZWQgaXMgbm90IGEgY2hpbGQgb2YgdGhpcyBub2RlLlwiKTt9aWYoYz09PWIpcmV0dXJuIGI7Yi5wYXJlbnROb2RlJiZWYShiLnBhcmVudE5vZGUsYik7ZD1aKGEpO3ZhciBlO2lmKGU9ZClhOntpZighYi5fX25vSW5zZXJ0aW9uUG9pbnQpe3ZhciBmO1wic2xvdFwiPT09Yi5sb2NhbE5hbWU/Zj1bYl06Yi5xdWVyeVNlbGVjdG9yQWxsJiYoZj1iLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzbG90XCIpKTtpZihmJiZmLmxlbmd0aCl7ZT1mO2JyZWFrIGF9fWU9dm9pZCAwfShmPWUpJiZkLlFhKGYpO2QmJihcInNsb3RcIj09PWEubG9jYWxOYW1lfHxmKSYmZC5MKCk7aWYoVChhKSl7ZD1jO0liKGEpO2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O3ZvaWQgMCE9PWEuX19zaGFkeS5maXJzdENoaWxkJiZcbihhLl9fc2hhZHkuY2hpbGROb2Rlcz1udWxsKTtpZihiLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKXtmPWIuY2hpbGROb2Rlcztmb3IoZT0wO2U8Zi5sZW5ndGg7ZSsrKWFjKGZbZV0sYSxkKTtiLl9fc2hhZHk9Yi5fX3NoYWR5fHx7fTtkPXZvaWQgMCE9PWIuX19zaGFkeS5maXJzdENoaWxkP251bGw6dm9pZCAwO2IuX19zaGFkeS5maXJzdENoaWxkPWIuX19zaGFkeS5sYXN0Q2hpbGQ9ZDtiLl9fc2hhZHkuY2hpbGROb2Rlcz1kfWVsc2UgYWMoYixhLGQpO2lmKFdhKGEpKXthLl9fc2hhZHkucm9vdC5MKCk7dmFyIGs9ITB9ZWxzZSBhLl9fc2hhZHkucm9vdCYmKGs9ITApfWt8fChrPUcoYSk/YS5ob3N0OmEsYz8oYz1iYyhjKSxYYS5jYWxsKGssYixjKSk6Y2MuY2FsbChrLGIpKTtkYyhhLGIpO3JldHVybiBifWZ1bmN0aW9uIFZhKGEsYil7aWYoYi5wYXJlbnROb2RlIT09YSl0aHJvdyBFcnJvcihcIlRoZSBub2RlIHRvIGJlIHJlbW92ZWQgaXMgbm90IGEgY2hpbGQgb2YgdGhpcyBub2RlOiBcIitcbmIpO3ZhciBjPVooYik7aWYoVChhKSl7Yi5fX3NoYWR5PWIuX19zaGFkeXx8e307YS5fX3NoYWR5PWEuX19zaGFkeXx8e307Yj09PWEuX19zaGFkeS5maXJzdENoaWxkJiYoYS5fX3NoYWR5LmZpcnN0Q2hpbGQ9Yi5fX3NoYWR5Lm5leHRTaWJsaW5nKTtiPT09YS5fX3NoYWR5Lmxhc3RDaGlsZCYmKGEuX19zaGFkeS5sYXN0Q2hpbGQ9Yi5fX3NoYWR5LnByZXZpb3VzU2libGluZyk7dmFyIGQ9Yi5fX3NoYWR5LnByZXZpb3VzU2libGluZzt2YXIgZT1iLl9fc2hhZHkubmV4dFNpYmxpbmc7ZCYmKGQuX19zaGFkeT1kLl9fc2hhZHl8fHt9LGQuX19zaGFkeS5uZXh0U2libGluZz1lKTtlJiYoZS5fX3NoYWR5PWUuX19zaGFkeXx8e30sZS5fX3NoYWR5LnByZXZpb3VzU2libGluZz1kKTtiLl9fc2hhZHkucGFyZW50Tm9kZT1iLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWIuX19zaGFkeS5uZXh0U2libGluZz12b2lkIDA7dm9pZCAwIT09YS5fX3NoYWR5LmNoaWxkTm9kZXMmJihhLl9fc2hhZHkuY2hpbGROb2Rlcz1cbm51bGwpO2lmKFdhKGEpKXthLl9fc2hhZHkucm9vdC5MKCk7dmFyIGY9ITB9fWVjKGIpO2MmJigoZT1hJiZcInNsb3RcIj09PWEubG9jYWxOYW1lKSYmKGY9ITApLCgoZD1jLlRhKGIpKXx8ZSkmJmMuTCgpKTtmfHwoZj1HKGEpP2EuaG9zdDphLCghYS5fX3NoYWR5LnJvb3QmJlwic2xvdFwiIT09Yi5sb2NhbE5hbWV8fGY9PT1VKGIpKSYmYmEuY2FsbChmLGIpKTtkYyhhLG51bGwsYik7cmV0dXJuIGJ9ZnVuY3Rpb24gZWMoYSl7aWYoYS5fX3NoYWR5JiZ2b2lkIDAhPT1hLl9fc2hhZHkubWEpZm9yKHZhciBiPWEuY2hpbGROb2RlcyxjPTAsZD1iLmxlbmd0aCxlO2M8ZCYmKGU9YltjXSk7YysrKWVjKGUpO2EuX19zaGFkeSYmKGEuX19zaGFkeS5tYT12b2lkIDApfWZ1bmN0aW9uIGJjKGEpe3ZhciBiPWE7YSYmXCJzbG90XCI9PT1hLmxvY2FsTmFtZSYmKGI9KGI9YS5fX3NoYWR5JiZhLl9fc2hhZHkuUikmJmIubGVuZ3RoP2JbMF06YmMoYS5uZXh0U2libGluZykpO3JldHVybiBifWZ1bmN0aW9uIFdhKGEpe3JldHVybihhPVxuYSYmYS5fX3NoYWR5JiZhLl9fc2hhZHkucm9vdCkmJmEudGEoKX1mdW5jdGlvbiBmYyhhLGIpe1wic2xvdFwiPT09Yj8oYT1hLnBhcmVudE5vZGUsV2EoYSkmJmEuX19zaGFkeS5yb290LkwoKSk6XCJzbG90XCI9PT1hLmxvY2FsTmFtZSYmXCJuYW1lXCI9PT1iJiYoYj1aKGEpKSYmKGIuVmEoYSksYi5MKCkpfWZ1bmN0aW9uIGRjKGEsYixjKXtpZihhPWEuX19zaGFkeSYmYS5fX3NoYWR5LlQpYiYmYS5hZGRlZE5vZGVzLnB1c2goYiksYyYmYS5yZW1vdmVkTm9kZXMucHVzaChjKSxhLmhiKCl9ZnVuY3Rpb24gZ2MoYSl7aWYoYSYmYS5ub2RlVHlwZSl7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307dmFyIGI9YS5fX3NoYWR5Lm1hO3ZvaWQgMD09PWImJihHKGEpP2I9YTpiPShiPWEucGFyZW50Tm9kZSk/Z2MoYik6YSxjYS5jYWxsKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxhKSYmKGEuX19zaGFkeS5tYT1iKSk7cmV0dXJuIGJ9fWZ1bmN0aW9uIG5hKGEsYixjKXt2YXIgZD1bXTtoYyhhLmNoaWxkTm9kZXMsXG5iLGMsZCk7cmV0dXJuIGR9ZnVuY3Rpb24gaGMoYSxiLGMsZCl7Zm9yKHZhciBlPTAsZj1hLmxlbmd0aCxrO2U8ZiYmKGs9YVtlXSk7ZSsrKXt2YXIgaDtpZihoPWsubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7aD1rO3ZhciB3PWIsZz1jLG09ZCxsPXcoaCk7bCYmbS5wdXNoKGgpO2cmJmcobCk/aD1sOihoYyhoLmNoaWxkTm9kZXMsdyxnLG0pLGg9dm9pZCAwKX1pZihoKWJyZWFrfX1mdW5jdGlvbiBpYyhhKXthPWEuZ2V0Um9vdE5vZGUoKTtHKGEpJiZhLnZhKCl9ZnVuY3Rpb24gamMoYSxiLGMpe29hfHwob2E9d2luZG93LlNoYWR5Q1NTJiZ3aW5kb3cuU2hhZHlDU1MuU2NvcGluZ1NoaW0pO29hJiZcImNsYXNzXCI9PT1iP29hLnNldEVsZW1lbnRDbGFzcyhhLGMpOihrYy5jYWxsKGEsYixjKSxmYyhhLGIpKX1mdW5jdGlvbiBsYyhhLGIpe2lmKGEub3duZXJEb2N1bWVudCE9PWRvY3VtZW50KXJldHVybiBZYS5jYWxsKGRvY3VtZW50LGEsYik7dmFyIGM9WWEuY2FsbChkb2N1bWVudCxcbmEsITEpO2lmKGIpe2E9YS5jaGlsZE5vZGVzO2I9MDtmb3IodmFyIGQ7YjxhLmxlbmd0aDtiKyspZD1sYyhhW2JdLCEwKSxjLmFwcGVuZENoaWxkKGQpfXJldHVybiBjfWZ1bmN0aW9uIFphKGEsYil7dmFyIGM9W10sZD1hO2ZvcihhPWE9PT13aW5kb3c/d2luZG93OmEuZ2V0Um9vdE5vZGUoKTtkOyljLnB1c2goZCksZD1kLmFzc2lnbmVkU2xvdD9kLmFzc2lnbmVkU2xvdDpkLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFJiZkLmhvc3QmJihifHxkIT09YSk/ZC5ob3N0OmQucGFyZW50Tm9kZTtjW2MubGVuZ3RoLTFdPT09ZG9jdW1lbnQmJmMucHVzaCh3aW5kb3cpO3JldHVybiBjfWZ1bmN0aW9uIG1jKGEsYil7aWYoIUcpcmV0dXJuIGE7YT1aYShhLCEwKTtmb3IodmFyIGM9MCxkLGUsZixrO2M8Yi5sZW5ndGg7YysrKWlmKGQ9YltjXSxmPWQ9PT13aW5kb3c/d2luZG93OmQuZ2V0Um9vdE5vZGUoKSxmIT09ZSYmKGs9YS5pbmRleE9mKGYpLGU9ZiksIUcoZil8fFxuLTE8aylyZXR1cm4gZH1mdW5jdGlvbiAkYShhKXtmdW5jdGlvbiBiKGIsZCl7Yj1uZXcgYShiLGQpO2IuZWE9ZCYmISFkLmNvbXBvc2VkO3JldHVybiBifUFkKGIsYSk7Yi5wcm90b3R5cGU9YS5wcm90b3R5cGU7cmV0dXJuIGJ9ZnVuY3Rpb24gbmMoYSxiLGMpe2lmKGM9Yi5fX2hhbmRsZXJzJiZiLl9faGFuZGxlcnNbYS50eXBlXSYmYi5fX2hhbmRsZXJzW2EudHlwZV1bY10pZm9yKHZhciBkPTAsZTsoZT1jW2RdKSYmYS50YXJnZXQhPT1hLnJlbGF0ZWRUYXJnZXQmJihlLmNhbGwoYixhKSwhYS5LYSk7ZCsrKTt9ZnVuY3Rpb24gR2QoYSl7dmFyIGI9YS5jb21wb3NlZFBhdGgoKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImN1cnJlbnRUYXJnZXRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGR9LGNvbmZpZ3VyYWJsZTohMH0pO2Zvcih2YXIgYz1iLmxlbmd0aC0xOzA8PWM7Yy0tKXt2YXIgZD1iW2NdO25jKGEsZCxcImNhcHR1cmVcIik7aWYoYS5mYSlyZXR1cm59T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXG5cImV2ZW50UGhhc2VcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEV2ZW50LkFUX1RBUkdFVH19KTt2YXIgZTtmb3IoYz0wO2M8Yi5sZW5ndGg7YysrKXtkPWJbY107dmFyIGY9ZC5fX3NoYWR5JiZkLl9fc2hhZHkucm9vdDtpZigwPT09Y3x8ZiYmZj09PWUpaWYobmMoYSxkLFwiYnViYmxlXCIpLGQhPT13aW5kb3cmJihlPWQuZ2V0Um9vdE5vZGUoKSksYS5mYSlicmVha319ZnVuY3Rpb24gb2MoYSxiLGMsZCxlLGYpe2Zvcih2YXIgaz0wO2s8YS5sZW5ndGg7aysrKXt2YXIgaD1hW2tdLHc9aC50eXBlLGc9aC5jYXB0dXJlLG09aC5vbmNlLGw9aC5wYXNzaXZlO2lmKGI9PT1oLm5vZGUmJmM9PT13JiZkPT09ZyYmZT09PW0mJmY9PT1sKXJldHVybiBrfXJldHVybi0xfWZ1bmN0aW9uIHBjKGEsYixjKXtpZihiKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMpe3ZhciBkPSEhYy5jYXB0dXJlO3ZhciBlPSEhYy5vbmNlO3ZhciBmPSEhYy5wYXNzaXZlfWVsc2UgZD0hIWMsZj1lPSExO3ZhciBrPWMmJmMuZ2F8fFxudGhpcyxoPWJbZGFdO2lmKGgpe2lmKC0xPG9jKGgsayxhLGQsZSxmKSlyZXR1cm59ZWxzZSBiW2RhXT1bXTtoPWZ1bmN0aW9uKGQpe2UmJnRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyk7ZC5fX3RhcmdldHx8cWMoZCk7aWYoayE9PXRoaXMpe3ZhciBmPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZCxcImN1cnJlbnRUYXJnZXRcIik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGQsXCJjdXJyZW50VGFyZ2V0XCIse2dldDpmdW5jdGlvbigpe3JldHVybiBrfSxjb25maWd1cmFibGU6ITB9KX1pZihkLmNvbXBvc2VkfHwtMTxkLmNvbXBvc2VkUGF0aCgpLmluZGV4T2YoaykpaWYoZC50YXJnZXQ9PT1kLnJlbGF0ZWRUYXJnZXQpZC5ldmVudFBoYXNlPT09RXZlbnQuQlVCQkxJTkdfUEhBU0UmJmQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7ZWxzZSBpZihkLmV2ZW50UGhhc2U9PT1FdmVudC5DQVBUVVJJTkdfUEhBU0V8fGQuYnViYmxlc3x8ZC50YXJnZXQ9PT1rKXt2YXIgaD1cblwib2JqZWN0XCI9PT10eXBlb2YgYiYmYi5oYW5kbGVFdmVudD9iLmhhbmRsZUV2ZW50KGQpOmIuY2FsbChrLGQpO2shPT10aGlzJiYoZj8oT2JqZWN0LmRlZmluZVByb3BlcnR5KGQsXCJjdXJyZW50VGFyZ2V0XCIsZiksZj1udWxsKTpkZWxldGUgZC5jdXJyZW50VGFyZ2V0KTtyZXR1cm4gaH19O2JbZGFdLnB1c2goe25vZGU6dGhpcyx0eXBlOmEsY2FwdHVyZTpkLG9uY2U6ZSxwYXNzaXZlOmYsbGI6aH0pO2FiW2FdPyh0aGlzLl9faGFuZGxlcnM9dGhpcy5fX2hhbmRsZXJzfHx7fSx0aGlzLl9faGFuZGxlcnNbYV09dGhpcy5fX2hhbmRsZXJzW2FdfHx7Y2FwdHVyZTpbXSxidWJibGU6W119LHRoaXMuX19oYW5kbGVyc1thXVtkP1wiY2FwdHVyZVwiOlwiYnViYmxlXCJdLnB1c2goaCkpOih0aGlzIGluc3RhbmNlb2YgV2luZG93P3JjOnNjKS5jYWxsKHRoaXMsYSxoLGMpfX1mdW5jdGlvbiB0YyhhLGIsYyl7aWYoYil7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBjKXt2YXIgZD0hIWMuY2FwdHVyZTt2YXIgZT1cbiEhYy5vbmNlO3ZhciBmPSEhYy5wYXNzaXZlfWVsc2UgZD0hIWMsZj1lPSExO3ZhciBrPWMmJmMuZ2F8fHRoaXMsaD12b2lkIDA7dmFyIGc9bnVsbDt0cnl7Zz1iW2RhXX1jYXRjaChyKXt9ZyYmKGU9b2MoZyxrLGEsZCxlLGYpLC0xPGUmJihoPWcuc3BsaWNlKGUsMSlbMF0ubGIsZy5sZW5ndGh8fChiW2RhXT12b2lkIDApKSk7KHRoaXMgaW5zdGFuY2VvZiBXaW5kb3c/dWM6dmMpLmNhbGwodGhpcyxhLGh8fGIsYyk7aCYmYWJbYV0mJnRoaXMuX19oYW5kbGVycyYmdGhpcy5fX2hhbmRsZXJzW2FdJiYoYT10aGlzLl9faGFuZGxlcnNbYV1bZD9cImNhcHR1cmVcIjpcImJ1YmJsZVwiXSxoPWEuaW5kZXhPZihoKSwtMTxoJiZhLnNwbGljZShoLDEpKX19ZnVuY3Rpb24gSGQoKXtmb3IodmFyIGEgaW4gYWIpd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYSxmdW5jdGlvbihhKXthLl9fdGFyZ2V0fHwocWMoYSksR2QoYSkpfSwhMCl9ZnVuY3Rpb24gcWMoYSl7YS5fX3RhcmdldD1hLnRhcmdldDthLnJhPVxuYS5yZWxhdGVkVGFyZ2V0O2lmKEUuUyl7dmFyIGI9d2MsYz1PYmplY3QuZ2V0UHJvdG90eXBlT2YoYSk7aWYoIWMuaGFzT3duUHJvcGVydHkoXCJfX3BhdGNoUHJvdG9cIikpe3ZhciBkPU9iamVjdC5jcmVhdGUoYyk7ZC5uYj1jO01hKGQsYik7Yy5fX3BhdGNoUHJvdG89ZH1hLl9fcHJvdG9fXz1jLl9fcGF0Y2hQcm90b31lbHNlIE1hKGEsd2MpfWZ1bmN0aW9uIGVhKGEsYil7cmV0dXJue2luZGV4OmEsVTpbXSxXOmJ9fWZ1bmN0aW9uIElkKGEsYixjLGQpe3ZhciBlPTAsZj0wLGs9MCxoPTAsZz1NYXRoLm1pbihiLWUsZC1mKTtpZigwPT1lJiYwPT1mKWE6e2ZvcihrPTA7azxnO2srKylpZihhW2tdIT09Y1trXSlicmVhayBhO2s9Z31pZihiPT1hLmxlbmd0aCYmZD09Yy5sZW5ndGgpe2g9YS5sZW5ndGg7Zm9yKHZhciByPWMubGVuZ3RoLG09MDttPGctayYmSmQoYVstLWhdLGNbLS1yXSk7KW0rKztoPW19ZSs9aztmKz1rO2ItPWg7ZC09aDtpZigwPT1iLWUmJjA9PWQtZilyZXR1cm5bXTtcbmlmKGU9PWIpe2ZvcihiPWVhKGUsMCk7ZjxkOyliLlUucHVzaChjW2YrK10pO3JldHVybltiXX1pZihmPT1kKXJldHVybltlYShlLGItZSldO2c9ZTtrPWY7ZD1kLWsrMTtoPWItZysxO2I9QXJyYXkoZCk7Zm9yKHI9MDtyPGQ7cisrKWJbcl09QXJyYXkoaCksYltyXVswXT1yO2ZvcihyPTA7cjxoO3IrKyliWzBdW3JdPXI7Zm9yKHI9MTtyPGQ7cisrKWZvcihtPTE7bTxoO20rKylpZihhW2crbS0xXT09PWNbaytyLTFdKWJbcl1bbV09YltyLTFdW20tMV07ZWxzZXt2YXIgbD1iW3ItMV1bbV0rMSxuPWJbcl1bbS0xXSsxO2Jbcl1bbV09bDxuP2w6bn1nPWIubGVuZ3RoLTE7az1iWzBdLmxlbmd0aC0xO2Q9YltnXVtrXTtmb3IoYT1bXTswPGd8fDA8azspMD09Zz8oYS5wdXNoKDIpLGstLSk6MD09az8oYS5wdXNoKDMpLGctLSk6KGg9YltnLTFdW2stMV0scj1iW2ctMV1ba10sbT1iW2ddW2stMV0sbD1yPG0/cjxoP3I6aDptPGg/bTpoLGw9PWg/KGg9PWQ/YS5wdXNoKDApOihhLnB1c2goMSksXG5kPWgpLGctLSxrLS0pOmw9PXI/KGEucHVzaCgzKSxnLS0sZD1yKTooYS5wdXNoKDIpLGstLSxkPW0pKTthLnJldmVyc2UoKTtiPXZvaWQgMDtnPVtdO2ZvcihrPTA7azxhLmxlbmd0aDtrKyspc3dpdGNoKGFba10pe2Nhc2UgMDpiJiYoZy5wdXNoKGIpLGI9dm9pZCAwKTtlKys7ZisrO2JyZWFrO2Nhc2UgMTpifHwoYj1lYShlLDApKTtiLlcrKztlKys7Yi5VLnB1c2goY1tmXSk7ZisrO2JyZWFrO2Nhc2UgMjpifHwoYj1lYShlLDApKTtiLlcrKztlKys7YnJlYWs7Y2FzZSAzOmJ8fChiPWVhKGUsMCkpLGIuVS5wdXNoKGNbZl0pLGYrK31iJiZnLnB1c2goYik7cmV0dXJuIGd9ZnVuY3Rpb24gSmQoYSxiKXtyZXR1cm4gYT09PWJ9ZnVuY3Rpb24geGMoYSl7dmFyIGI9W107ZG8gYi51bnNoaWZ0KGEpO3doaWxlKGE9YS5wYXJlbnROb2RlKTtyZXR1cm4gYn1mdW5jdGlvbiB5YyhhKXtpYyhhKTtyZXR1cm4gYS5fX3NoYWR5JiZhLl9fc2hhZHkuYXNzaWduZWRTbG90fHxudWxsfWZ1bmN0aW9uIEwoYSxcbmIpe2Zvcih2YXIgYz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKSxkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF0sZj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGIsZSk7Zi52YWx1ZT9hW2VdPWYudmFsdWU6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsZSxmKX19ZnVuY3Rpb24gS2QoKXt2YXIgYT13aW5kb3cuY3VzdG9tRWxlbWVudHMmJndpbmRvdy5jdXN0b21FbGVtZW50cy5uYXRpdmVIVE1MRWxlbWVudHx8SFRNTEVsZW1lbnQ7TCh3aW5kb3cuTm9kZS5wcm90b3R5cGUsTGQpO0wod2luZG93LldpbmRvdy5wcm90b3R5cGUsTWQpO0wod2luZG93LlRleHQucHJvdG90eXBlLE5kKTtMKHdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSxiYik7TCh3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUsemMpO0wod2luZG93LkRvY3VtZW50LnByb3RvdHlwZSxBYyk7d2luZG93LkhUTUxTbG90RWxlbWVudCYmTCh3aW5kb3cuSFRNTFNsb3RFbGVtZW50LnByb3RvdHlwZSxcbkJjKTtMKGEucHJvdG90eXBlLE9kKTtFLlMmJihQKHdpbmRvdy5Ob2RlLnByb3RvdHlwZSksUCh3aW5kb3cuVGV4dC5wcm90b3R5cGUpLFAod2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlKSxQKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSksUChhLnByb3RvdHlwZSksUCh3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlKSx3aW5kb3cuSFRNTFNsb3RFbGVtZW50JiZQKHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQucHJvdG90eXBlKSl9ZnVuY3Rpb24gQ2MoYSl7dmFyIGI9UGQuaGFzKGEpO2E9L15bYS16XVsuMC05X2Etel0qLVtcXC0uMC05X2Etel0qJC8udGVzdChhKTtyZXR1cm4hYiYmYX1mdW5jdGlvbiB0KGEpe3ZhciBiPWEuaXNDb25uZWN0ZWQ7aWYodm9pZCAwIT09YilyZXR1cm4gYjtmb3IoO2EmJiEoYS5fX0NFX2lzSW1wb3J0RG9jdW1lbnR8fGEgaW5zdGFuY2VvZiBEb2N1bWVudCk7KWE9YS5wYXJlbnROb2RlfHwod2luZG93LlNoYWRvd1Jvb3QmJmEgaW5zdGFuY2VvZiBTaGFkb3dSb290P1xuYS5ob3N0OnZvaWQgMCk7cmV0dXJuISghYXx8IShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KSl9ZnVuY3Rpb24gY2IoYSxiKXtmb3IoO2ImJmIhPT1hJiYhYi5uZXh0U2libGluZzspYj1iLnBhcmVudE5vZGU7cmV0dXJuIGImJmIhPT1hP2IubmV4dFNpYmxpbmc6bnVsbH1mdW5jdGlvbiBPKGEsYixjKXtjPWM/YzpuZXcgU2V0O2Zvcih2YXIgZD1hO2Q7KXtpZihkLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpe3ZhciBlPWQ7YihlKTt2YXIgZj1lLmxvY2FsTmFtZTtpZihcImxpbmtcIj09PWYmJlwiaW1wb3J0XCI9PT1lLmdldEF0dHJpYnV0ZShcInJlbFwiKSl7ZD1lLmltcG9ydDtpZihkIGluc3RhbmNlb2YgTm9kZSYmIWMuaGFzKGQpKWZvcihjLmFkZChkKSxkPWQuZmlyc3RDaGlsZDtkO2Q9ZC5uZXh0U2libGluZylPKGQsYixjKTtkPWNiKGEsZSk7Y29udGludWV9ZWxzZSBpZihcInRlbXBsYXRlXCI9PT1mKXtkPWNiKGEsZSk7Y29udGludWV9aWYoZT1cbmUuX19DRV9zaGFkb3dSb290KWZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZylPKGUsYixjKX1kPWQuZmlyc3RDaGlsZD9kLmZpcnN0Q2hpbGQ6Y2IoYSxkKX19ZnVuY3Rpb24geChhLGIsYyl7YVtiXT1jfWZ1bmN0aW9uIGRiKGEpe2E9YS5yZXBsYWNlKEYuWWEsXCJcIikucmVwbGFjZShGLnBvcnQsXCJcIik7dmFyIGI9RGMsYz1hLGQ9bmV3IEJhO2Quc3RhcnQ9MDtkLmVuZD1jLmxlbmd0aDtmb3IodmFyIGU9ZCxmPTAsaz1jLmxlbmd0aDtmPGs7ZisrKWlmKFwie1wiPT09Y1tmXSl7ZS5ydWxlc3x8KGUucnVsZXM9W10pO3ZhciBoPWUsZz1oLnJ1bGVzW2gucnVsZXMubGVuZ3RoLTFdfHxudWxsO2U9bmV3IEJhO2Uuc3RhcnQ9ZisxO2UucGFyZW50PWg7ZS5wcmV2aW91cz1nO2gucnVsZXMucHVzaChlKX1lbHNlXCJ9XCI9PT1jW2ZdJiYoZS5lbmQ9ZisxLGU9ZS5wYXJlbnR8fGQpO3JldHVybiBiKGQsYSl9ZnVuY3Rpb24gRGMoYSxiKXt2YXIgYz1iLnN1YnN0cmluZyhhLnN0YXJ0LFxuYS5lbmQtMSk7YS5wYXJzZWRDc3NUZXh0PWEuY3NzVGV4dD1jLnRyaW0oKTthLnBhcmVudCYmKGM9Yi5zdWJzdHJpbmcoYS5wcmV2aW91cz9hLnByZXZpb3VzLmVuZDphLnBhcmVudC5zdGFydCxhLnN0YXJ0LTEpLGM9UWQoYyksYz1jLnJlcGxhY2UoRi5CYSxcIiBcIiksYz1jLnN1YnN0cmluZyhjLmxhc3RJbmRleE9mKFwiO1wiKSsxKSxjPWEucGFyc2VkU2VsZWN0b3I9YS5zZWxlY3Rvcj1jLnRyaW0oKSxhLmF0UnVsZT0wPT09Yy5pbmRleE9mKFwiQFwiKSxhLmF0UnVsZT8wPT09Yy5pbmRleE9mKFwiQG1lZGlhXCIpP2EudHlwZT1JLk1FRElBX1JVTEU6Yy5tYXRjaChGLmNiKSYmKGEudHlwZT1JLmRhLGEua2V5ZnJhbWVzTmFtZT1hLnNlbGVjdG9yLnNwbGl0KEYuQmEpLnBvcCgpKTphLnR5cGU9MD09PWMuaW5kZXhPZihcIi0tXCIpP0kubmE6SS5TVFlMRV9SVUxFKTtpZihjPWEucnVsZXMpZm9yKHZhciBkPTAsZT1jLmxlbmd0aCxmO2Q8ZSYmKGY9Y1tkXSk7ZCsrKURjKGYsYik7cmV0dXJuIGF9ZnVuY3Rpb24gUWQoYSl7cmV0dXJuIGEucmVwbGFjZSgvXFxcXChbMC05YS1mXXsxLDZ9KVxccy9naSxcbmZ1bmN0aW9uKGEsYyl7YT1jO2ZvcihjPTYtYS5sZW5ndGg7Yy0tOylhPVwiMFwiK2E7cmV0dXJuXCJcXFxcXCIrYX0pfWZ1bmN0aW9uIEVjKGEsYixjKXtjPXZvaWQgMD09PWM/XCJcIjpjO3ZhciBkPVwiXCI7aWYoYS5jc3NUZXh0fHxhLnJ1bGVzKXt2YXIgZT1hLnJ1bGVzLGY7aWYoZj1lKWY9ZVswXSxmPSEoZiYmZi5zZWxlY3RvciYmMD09PWYuc2VsZWN0b3IuaW5kZXhPZihcIi0tXCIpKTtpZihmKXtmPTA7Zm9yKHZhciBrPWUubGVuZ3RoLGg7ZjxrJiYoaD1lW2ZdKTtmKyspZD1FYyhoLGIsZCl9ZWxzZSBiP2I9YS5jc3NUZXh0OihiPWEuY3NzVGV4dCxiPWIucmVwbGFjZShGLndhLFwiXCIpLnJlcGxhY2UoRi5BYSxcIlwiKSxiPWIucmVwbGFjZShGLmViLFwiXCIpLnJlcGxhY2UoRi5qYixcIlwiKSksKGQ9Yi50cmltKCkpJiYoZD1cIiAgXCIrZCtcIlxcblwiKX1kJiYoYS5zZWxlY3RvciYmKGMrPWEuc2VsZWN0b3IrXCIge1xcblwiKSxjKz1kLGEuc2VsZWN0b3ImJihjKz1cIn1cXG5cXG5cIikpO3JldHVybiBjfWZ1bmN0aW9uIEZjKGEpe0E9XG5hJiZhLnNoaW1jc3Nwcm9wZXJ0aWVzPyExOnp8fCEobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQXBwbGVXZWJLaXRcXC82MDF8RWRnZVxcLzE1Lyl8fCF3aW5kb3cuQ1NTfHwhQ1NTLnN1cHBvcnRzfHwhQ1NTLnN1cHBvcnRzKFwiYm94LXNoYWRvd1wiLFwiMCAwIDAgdmFyKC0tZm9vKVwiKSl9ZnVuY3Rpb24gVihhLGIpe2lmKCFhKXJldHVyblwiXCI7XCJzdHJpbmdcIj09PXR5cGVvZiBhJiYoYT1kYihhKSk7YiYmVyhhLGIpO3JldHVybiBFYyhhLEEpfWZ1bmN0aW9uIHBhKGEpeyFhLl9fY3NzUnVsZXMmJmEudGV4dENvbnRlbnQmJihhLl9fY3NzUnVsZXM9ZGIoYS50ZXh0Q29udGVudCkpO3JldHVybiBhLl9fY3NzUnVsZXN8fG51bGx9ZnVuY3Rpb24gR2MoYSl7cmV0dXJuISFhLnBhcmVudCYmYS5wYXJlbnQudHlwZT09PUkuZGF9ZnVuY3Rpb24gVyhhLGIsYyxkKXtpZihhKXt2YXIgZT0hMSxmPWEudHlwZTtpZihkJiZmPT09SS5NRURJQV9SVUxFKXt2YXIgaz1hLnNlbGVjdG9yLm1hdGNoKFJkKTtcbmsmJih3aW5kb3cubWF0Y2hNZWRpYShrWzFdKS5tYXRjaGVzfHwoZT0hMCkpfWY9PT1JLlNUWUxFX1JVTEU/YihhKTpjJiZmPT09SS5kYT9jKGEpOmY9PT1JLm5hJiYoZT0hMCk7aWYoKGE9YS5ydWxlcykmJiFlKXtlPTA7Zj1hLmxlbmd0aDtmb3IodmFyIGg7ZTxmJiYoaD1hW2VdKTtlKyspVyhoLGIsYyxkKX19fWZ1bmN0aW9uIGViKGEsYixjLGQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtiJiZlLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsYik7ZS50ZXh0Q29udGVudD1hO0hjKGUsYyxkKTtyZXR1cm4gZX1mdW5jdGlvbiBIYyhhLGIsYyl7Yj1ifHxkb2N1bWVudC5oZWFkO2IuaW5zZXJ0QmVmb3JlKGEsYyYmYy5uZXh0U2libGluZ3x8Yi5maXJzdENoaWxkKTtRP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oUSk9PT1Ob2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORyYmKFE9YSk6UT1hfWZ1bmN0aW9uIEljKGEsYil7dmFyIGM9YS5pbmRleE9mKFwidmFyKFwiKTtcbmlmKC0xPT09YylyZXR1cm4gYihhLFwiXCIsXCJcIixcIlwiKTthOnt2YXIgZD0wO3ZhciBlPWMrMztmb3IodmFyIGY9YS5sZW5ndGg7ZTxmO2UrKylpZihcIihcIj09PWFbZV0pZCsrO2Vsc2UgaWYoXCIpXCI9PT1hW2VdJiYwPT09LS1kKWJyZWFrIGE7ZT0tMX1kPWEuc3Vic3RyaW5nKGMrNCxlKTtjPWEuc3Vic3RyaW5nKDAsYyk7YT1JYyhhLnN1YnN0cmluZyhlKzEpLGIpO2U9ZC5pbmRleE9mKFwiLFwiKTtyZXR1cm4tMT09PWU/YihjLGQudHJpbSgpLFwiXCIsYSk6YihjLGQuc3Vic3RyaW5nKDAsZSkudHJpbSgpLGQuc3Vic3RyaW5nKGUrMSkudHJpbSgpLGEpfWZ1bmN0aW9uIHFhKGEsYil7ej9hLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYik6d2luZG93LlNoYWR5RE9NLm5hdGl2ZU1ldGhvZHMuc2V0QXR0cmlidXRlLmNhbGwoYSxcImNsYXNzXCIsYil9ZnVuY3Rpb24gUihhKXt2YXIgYj1hLmxvY2FsTmFtZSxjPVwiXCI7Yj8tMTxiLmluZGV4T2YoXCItXCIpfHwoYz1iLGI9YS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiaXNcIil8fFxuXCJcIik6KGI9YS5pcyxjPWEuZXh0ZW5kcyk7cmV0dXJue2lzOmIsVjpjfX1mdW5jdGlvbiBKYyhhKXtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtpZihjLnRhcmdldCE9PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmYy50YXJnZXQhPT1kb2N1bWVudC5oZWFkKWZvcih2YXIgZD0wO2Q8Yy5hZGRlZE5vZGVzLmxlbmd0aDtkKyspe3ZhciBlPWMuYWRkZWROb2Rlc1tkXTtpZihlLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpe3ZhciBmPWUuZ2V0Um9vdE5vZGUoKTt2YXIgaz1lO3ZhciBoPVtdO2suY2xhc3NMaXN0P2g9QXJyYXkuZnJvbShrLmNsYXNzTGlzdCk6ayBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50JiZrLmhhc0F0dHJpYnV0ZShcImNsYXNzXCIpJiYoaD1rLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLnNwbGl0KC9cXHMrLykpO2s9aDtoPWsuaW5kZXhPZihwLmEpO2lmKChrPS0xPGg/a1toKzFdOlwiXCIpJiZmPT09ZS5vd25lckRvY3VtZW50KXAuYihlLFxuaywhMCk7ZWxzZSBpZihmLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFJiYoZj1mLmhvc3QpKWlmKGY9UihmKS5pcyxrPT09Zilmb3IoZT13aW5kb3cuU2hhZHlET00ubmF0aXZlTWV0aG9kcy5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZSxcIjpub3QoLlwiK3AuYStcIilcIiksZj0wO2Y8ZS5sZW5ndGg7ZisrKXAuaChlW2ZdLGspO2Vsc2UgayYmcC5iKGUsaywhMCkscC5iKGUsZil9fX19ZnVuY3Rpb24gU2QoYSl7aWYoYT1yYVthXSlhLl9hcHBseVNoaW1DdXJyZW50VmVyc2lvbj1hLl9hcHBseVNoaW1DdXJyZW50VmVyc2lvbnx8MCxhLl9hcHBseVNoaW1WYWxpZGF0aW5nVmVyc2lvbj1hLl9hcHBseVNoaW1WYWxpZGF0aW5nVmVyc2lvbnx8MCxhLl9hcHBseVNoaW1OZXh0VmVyc2lvbj0oYS5fYXBwbHlTaGltTmV4dFZlcnNpb258fDApKzF9ZnVuY3Rpb24gS2MoYSl7cmV0dXJuIGEuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9uPT09YS5fYXBwbHlTaGltTmV4dFZlcnNpb259XG5mdW5jdGlvbiBUZChhKXthLl9hcHBseVNoaW1WYWxpZGF0aW5nVmVyc2lvbj1hLl9hcHBseVNoaW1OZXh0VmVyc2lvbjthLmJ8fChhLmI9ITAsVWQudGhlbihmdW5jdGlvbigpe2EuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9uPWEuX2FwcGx5U2hpbU5leHRWZXJzaW9uO2EuYj0hMX0pKX1mdW5jdGlvbiB1YihhKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtMYz9MYyhhKTooZmJ8fChmYj1uZXcgUHJvbWlzZShmdW5jdGlvbihhKXtnYj1hfSksXCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9nYigpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsZnVuY3Rpb24oKXtcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlJiZnYigpfSkpLGZiLnRoZW4oZnVuY3Rpb24oKXthJiZhKCl9KSl9KX0oZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhLGIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQpcmV0dXJuIG5ldyBDdXN0b21FdmVudChhLFxuYik7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtjLmluaXRDdXN0b21FdmVudChhLCEhYi5idWJibGVzLCEhYi5jYW5jZWxhYmxlLGIuZGV0YWlsKTtyZXR1cm4gY31mdW5jdGlvbiBjKGEpe2lmKG0pcmV0dXJuIGEub3duZXJEb2N1bWVudCE9PWRvY3VtZW50P2Eub3duZXJEb2N1bWVudDpudWxsO3ZhciBiPWEuX19pbXBvcnREb2M7aWYoIWImJmEucGFyZW50Tm9kZSl7Yj1hLnBhcmVudE5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY2xvc2VzdCliPWIuY2xvc2VzdChcImxpbmtbcmVsPWltcG9ydF1cIik7ZWxzZSBmb3IoOyFoKGIpJiYoYj1iLnBhcmVudE5vZGUpOyk7YS5fX2ltcG9ydERvYz1ifXJldHVybiBifWZ1bmN0aW9uIGQoYSl7dmFyIGI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtbcmVsPWltcG9ydF06bm90KFtpbXBvcnQtZGVwZW5kZW5jeV0pXCIpLGM9Yi5sZW5ndGg7Yz9sKGIsZnVuY3Rpb24oYil7cmV0dXJuIGsoYixmdW5jdGlvbigpezA9PT1cbi0tYyYmYSgpfSl9KTphKCl9ZnVuY3Rpb24gZShhKXtmdW5jdGlvbiBiKCl7XCJsb2FkaW5nXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlJiZkb2N1bWVudC5ib2R5JiYoZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixiKSxhKCkpfWRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsYik7YigpfWZ1bmN0aW9uIGYoYSl7ZShmdW5jdGlvbigpe3JldHVybiBkKGZ1bmN0aW9uKCl7cmV0dXJuIGEmJmEoKX0pfSl9ZnVuY3Rpb24gayhhLGIpe2lmKGEuX19sb2FkZWQpYiYmYigpO2Vsc2UgaWYoXCJzY3JpcHRcIj09PWEubG9jYWxOYW1lJiYhYS5zcmN8fFwic3R5bGVcIj09PWEubG9jYWxOYW1lJiYhYS5maXJzdENoaWxkKWEuX19sb2FkZWQ9ITAsYiYmYigpO2Vsc2V7dmFyIGM9ZnVuY3Rpb24oZCl7YS5yZW1vdmVFdmVudExpc3RlbmVyKGQudHlwZSxjKTthLl9fbG9hZGVkPSEwO2ImJmIoKX07YS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLFxuYyk7eiYmXCJzdHlsZVwiPT09YS5sb2NhbE5hbWV8fGEuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsYyl9fWZ1bmN0aW9uIGgoYSl7cmV0dXJuIGEubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmXCJsaW5rXCI9PT1hLmxvY2FsTmFtZSYmXCJpbXBvcnRcIj09PWEucmVsfWZ1bmN0aW9uIGcoKXt2YXIgYT10aGlzO3RoaXMuYT17fTt0aGlzLmI9MDt0aGlzLmY9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oYil7cmV0dXJuIGEubChiKX0pO3RoaXMuZi5vYnNlcnZlKGRvY3VtZW50LmhlYWQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSk7dGhpcy5jKGRvY3VtZW50KX1mdW5jdGlvbiBsKGEsYixjKXt2YXIgZD1hP2EubGVuZ3RoOjAsZT1jPy0xOjE7Zm9yKGM9Yz9kLTE6MDtjPGQmJjA8PWM7Yys9ZSliKGFbY10sYyl9dmFyIG09XCJpbXBvcnRcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpLG49bnVsbDshMT09PVwiY3VycmVudFNjcmlwdFwiaW4gZG9jdW1lbnQmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShkb2N1bWVudCxcblwiY3VycmVudFNjcmlwdFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnx8KFwiY29tcGxldGVcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGU/ZG9jdW1lbnQuc2NyaXB0c1tkb2N1bWVudC5zY3JpcHRzLmxlbmd0aC0xXTpudWxsKX0sY29uZmlndXJhYmxlOiEwfSk7dmFyIHE9Lyh1cmxcXCgpKFteKV0qKShcXCkpL2csdD0vKEBpbXBvcnRbXFxzXSsoPyF1cmxcXCgpKShbXjtdKikoOykvZyx1PS8oPGxpbmtbXj5dKikocmVsPVsnfFwiXT9zdHlsZXNoZWV0Wyd8XCJdP1tePl0qPikvZyxwPXtaYTpmdW5jdGlvbihhLGIpe2EuaHJlZiYmYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIscC4kKGEuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxiKSk7YS5zcmMmJmEuc2V0QXR0cmlidXRlKFwic3JjXCIscC4kKGEuZ2V0QXR0cmlidXRlKFwic3JjXCIpLGIpKTtpZihcInN0eWxlXCI9PT1hLmxvY2FsTmFtZSl7dmFyIGM9cC5DYShhLnRleHRDb250ZW50LGIscSk7YS50ZXh0Q29udGVudD1wLkNhKGMsYix0KX19LENhOmZ1bmN0aW9uKGEsXG5iLGMpe3JldHVybiBhLnJlcGxhY2UoYyxmdW5jdGlvbihhLGMsZCxlKXthPWQucmVwbGFjZSgvW1wiJ10vZyxcIlwiKTtiJiYoYT1wLiQoYSxiKSk7cmV0dXJuIGMrXCInXCIrYStcIidcIitlfSl9LCQ6ZnVuY3Rpb24oYSxiKXtpZih2b2lkIDA9PT1wLmhhKXtwLmhhPSExO3RyeXt2YXIgYz1uZXcgVVJMKFwiYlwiLFwiaHR0cDovL2FcIik7Yy5wYXRobmFtZT1cImMlMjBkXCI7cC5oYT1cImh0dHA6Ly9hL2MlMjBkXCI9PT1jLmhyZWZ9Y2F0Y2goc2Upe319aWYocC5oYSlyZXR1cm4obmV3IFVSTChhLGIpKS5ocmVmO2M9cC5QYTtjfHwoYz1kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJ0ZW1wXCIpLHAuUGE9YyxjLnBhPWMuY3JlYXRlRWxlbWVudChcImJhc2VcIiksYy5oZWFkLmFwcGVuZENoaWxkKGMucGEpLGMub2E9Yy5jcmVhdGVFbGVtZW50KFwiYVwiKSk7Yy5wYS5ocmVmPWI7Yy5vYS5ocmVmPWE7cmV0dXJuIGMub2EuaHJlZnx8YX19LHY9e2FzeW5jOiEwLGxvYWQ6ZnVuY3Rpb24oYSxcbmIsYyl7aWYoYSlpZihhLm1hdGNoKC9eZGF0YTovKSl7YT1hLnNwbGl0KFwiLFwiKTt2YXIgZD1hWzFdO2Q9LTE8YVswXS5pbmRleE9mKFwiO2Jhc2U2NFwiKT9hdG9iKGQpOmRlY29kZVVSSUNvbXBvbmVudChkKTtiKGQpfWVsc2V7dmFyIGU9bmV3IFhNTEh0dHBSZXF1ZXN0O2Uub3BlbihcIkdFVFwiLGEsdi5hc3luYyk7ZS5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgYT1lLnJlc3BvbnNlVVJMfHxlLmdldFJlc3BvbnNlSGVhZGVyKFwiTG9jYXRpb25cIik7YSYmMD09PWEuaW5kZXhPZihcIi9cIikmJihhPShsb2NhdGlvbi5vcmlnaW58fGxvY2F0aW9uLnByb3RvY29sK1wiLy9cIitsb2NhdGlvbi5ob3N0KSthKTt2YXIgZD1lLnJlc3BvbnNlfHxlLnJlc3BvbnNlVGV4dDszMDQ9PT1lLnN0YXR1c3x8MD09PWUuc3RhdHVzfHwyMDA8PWUuc3RhdHVzJiYzMDA+ZS5zdGF0dXM/YihkLGEpOmMoZCl9O2Uuc2VuZCgpfWVsc2UgYyhcImVycm9yOiBocmVmIG11c3QgYmUgc3BlY2lmaWVkXCIpfX0sej0vVHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KXx8XG4vRWRnZVxcL1xcZC4vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2cucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczthPWEucXVlcnlTZWxlY3RvckFsbChcImxpbmtbcmVsPWltcG9ydF1cIik7bChhLGZ1bmN0aW9uKGEpe3JldHVybiBiLmgoYSl9KX07Zy5wcm90b3R5cGUuaD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9YS5ocmVmO2lmKHZvaWQgMCE9PXRoaXMuYVtjXSl7dmFyIGQ9dGhpcy5hW2NdO2QmJmQuX19sb2FkZWQmJihhLmltcG9ydD1kLHRoaXMuZyhhKSl9ZWxzZSB0aGlzLmIrKyx0aGlzLmFbY109XCJwZW5kaW5nXCIsdi5sb2FkKGMsZnVuY3Rpb24oYSxkKXthPWIubShhLGR8fGMpO2IuYVtjXT1hO2IuYi0tO2IuYyhhKTtiLmkoKX0sZnVuY3Rpb24oKXtiLmFbY109bnVsbDtiLmItLTtiLmkoKX0pfTtnLnByb3RvdHlwZS5tPWZ1bmN0aW9uKGEsYil7aWYoIWEpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTt6JiYoYT1hLnJlcGxhY2UodSxcbmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4tMT09PWEuaW5kZXhPZihcInR5cGU9XCIpP2IrXCIgdHlwZT1pbXBvcnQtZGlzYWJsZSBcIitjOmF9KSk7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO2MuaW5uZXJIVE1MPWE7aWYoYy5jb250ZW50KWE9Yy5jb250ZW50O2Vsc2UgZm9yKGE9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2MuZmlyc3RDaGlsZDspYS5hcHBlbmRDaGlsZChjLmZpcnN0Q2hpbGQpO2lmKGM9YS5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKSliPXAuJChjLmdldEF0dHJpYnV0ZShcImhyZWZcIiksYiksYy5yZW1vdmVBdHRyaWJ1dGUoXCJocmVmXCIpO2M9YS5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1pbXBvcnRdLCBsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmXVt0eXBlPWltcG9ydC1kaXNhYmxlXSxcXG4gICAgc3R5bGU6bm90KFt0eXBlXSksIGxpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWZdOm5vdChbdHlwZV0pLFxcbiAgICBzY3JpcHQ6bm90KFt0eXBlXSksIHNjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiXSxcXG4gICAgc2NyaXB0W3R5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIl0nKTtcbnZhciBkPTA7bChjLGZ1bmN0aW9uKGEpe2soYSk7cC5aYShhLGIpO2Euc2V0QXR0cmlidXRlKFwiaW1wb3J0LWRlcGVuZGVuY3lcIixcIlwiKTtcInNjcmlwdFwiPT09YS5sb2NhbE5hbWUmJiFhLnNyYyYmYS50ZXh0Q29udGVudCYmKGEuc2V0QXR0cmlidXRlKFwic3JjXCIsXCJkYXRhOnRleHQvamF2YXNjcmlwdDtjaGFyc2V0PXV0Zi04LFwiK2VuY29kZVVSSUNvbXBvbmVudChhLnRleHRDb250ZW50KyhcIlxcbi8vIyBzb3VyY2VVUkw9XCIrYisoZD9cIi1cIitkOlwiXCIpK1wiLmpzXFxuXCIpKSksYS50ZXh0Q29udGVudD1cIlwiLGQrKyl9KTtyZXR1cm4gYX07Zy5wcm90b3R5cGUuaT1mdW5jdGlvbigpe3ZhciBhPXRoaXM7aWYoIXRoaXMuYil7dGhpcy5mLmRpc2Nvbm5lY3QoKTt0aGlzLmZsYXR0ZW4oZG9jdW1lbnQpO3ZhciBiPSExLGM9ITEsZD1mdW5jdGlvbigpe2MmJmImJihhLmMoZG9jdW1lbnQpLGEuYnx8KGEuZi5vYnNlcnZlKGRvY3VtZW50LmhlYWQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSksYS5qKCkpKX07XG50aGlzLnMoZnVuY3Rpb24oKXtjPSEwO2QoKX0pO3RoaXMubyhmdW5jdGlvbigpe2I9ITA7ZCgpfSl9fTtnLnByb3RvdHlwZS5mbGF0dGVuPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7YT1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2woYSxmdW5jdGlvbihhKXt2YXIgYz1iLmFbYS5ocmVmXTsoYS5pbXBvcnQ9YykmJmMubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUmJihiLmFbYS5ocmVmXT1hLGEucmVhZHlTdGF0ZT1cImxvYWRpbmdcIixhLmltcG9ydD1hLGIuZmxhdHRlbihjKSxhLmFwcGVuZENoaWxkKGMpKX0pfTtnLnByb3RvdHlwZS5vPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoZSl7aWYoZTxkKXt2YXIgZj1jW2VdLGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtmLnJlbW92ZUF0dHJpYnV0ZShcImltcG9ydC1kZXBlbmRlbmN5XCIpO2woZi5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGEpe3JldHVybiBnLnNldEF0dHJpYnV0ZShhLm5hbWUsXG5hLnZhbHVlKX0pO249ZztmLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGcsZik7ayhnLGZ1bmN0aW9uKCl7bj1udWxsO2IoZSsxKX0pfWVsc2UgYSgpfXZhciBjPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzY3JpcHRbaW1wb3J0LWRlcGVuZGVuY3ldXCIpLGQ9Yy5sZW5ndGg7YigwKX07Zy5wcm90b3R5cGUucz1mdW5jdGlvbihhKXt2YXIgYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbaW1wb3J0LWRlcGVuZGVuY3ldLFxcbiAgICBsaW5rW3JlbD1zdHlsZXNoZWV0XVtpbXBvcnQtZGVwZW5kZW5jeV1cIiksZD1iLmxlbmd0aDtpZihkKXt2YXIgZT16JiYhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmXVt0eXBlPWltcG9ydC1kaXNhYmxlXVwiKTtsKGIsZnVuY3Rpb24oYil7ayhiLGZ1bmN0aW9uKCl7Yi5yZW1vdmVBdHRyaWJ1dGUoXCJpbXBvcnQtZGVwZW5kZW5jeVwiKTswPT09LS1kJiZhKCl9KTtpZihlJiZiLnBhcmVudE5vZGUhPT1cbmRvY3VtZW50LmhlYWQpe3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYi5sb2NhbE5hbWUpO2YuX19hcHBsaWVkRWxlbWVudD1iO2Yuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaW1wb3J0LXBsYWNlaG9sZGVyXCIpO2IucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZixiLm5leHRTaWJsaW5nKTtmb3IoZj1jKGIpO2YmJmMoZik7KWY9YyhmKTtmLnBhcmVudE5vZGUhPT1kb2N1bWVudC5oZWFkJiYoZj1udWxsKTtkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShiLGYpO2IucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKX19KX1lbHNlIGEoKX07Zy5wcm90b3R5cGUuaj1mdW5jdGlvbigpe3ZhciBhPXRoaXMsYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XVwiKTtsKGIsZnVuY3Rpb24oYil7cmV0dXJuIGEuZyhiKX0sITApfTtnLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe2EuX19sb2FkZWR8fChhLl9fbG9hZGVkPSEwLGEuaW1wb3J0JiYoYS5pbXBvcnQucmVhZHlTdGF0ZT1cblwiY29tcGxldGVcIiksYS5kaXNwYXRjaEV2ZW50KGIoYS5pbXBvcnQ/XCJsb2FkXCI6XCJlcnJvclwiLHtidWJibGVzOiExLGNhbmNlbGFibGU6ITEsZGV0YWlsOnZvaWQgMH0pKSl9O2cucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztsKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGwoYS5hZGRlZE5vZGVzLGZ1bmN0aW9uKGEpe2EmJmEubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmKGgoYSk/Yi5oKGEpOmIuYyhhKSl9KX0pfTtpZihtKXt2YXIgeD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XVwiKTtsKHgsZnVuY3Rpb24oYSl7YS5pbXBvcnQmJlwibG9hZGluZ1wiPT09YS5pbXBvcnQucmVhZHlTdGF0ZXx8KGEuX19sb2FkZWQ9ITApfSk7eD1mdW5jdGlvbihhKXthPWEudGFyZ2V0O2goYSkmJihhLl9fbG9hZGVkPSEwKX07ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIix4LCEwKTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixcbngsITApfWVsc2V7dmFyIHk9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihOb2RlLnByb3RvdHlwZSxcImJhc2VVUklcIik7T2JqZWN0LmRlZmluZVByb3BlcnR5KCgheXx8eS5jb25maWd1cmFibGU/Tm9kZTpFbGVtZW50KS5wcm90b3R5cGUsXCJiYXNlVVJJXCIse2dldDpmdW5jdGlvbigpe3ZhciBhPWgodGhpcyk/dGhpczpjKHRoaXMpO3JldHVybiBhP2EuaHJlZjp5JiZ5LmdldD95LmdldC5jYWxsKHRoaXMpOihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKXx8d2luZG93LmxvY2F0aW9uKS5ocmVmfSxjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMH0pO2UoZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGd9KX1mKGZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoYihcIkhUTUxJbXBvcnRzTG9hZGVkXCIse2NhbmNlbGFibGU6ITAsYnViYmxlczohMCxkZXRhaWw6dm9pZCAwfSkpfSk7YS51c2VOYXRpdmU9bTthLndoZW5SZWFkeT1mO2EuaW1wb3J0Rm9yRWxlbWVudD1cbmN9KSh3aW5kb3cuSFRNTEltcG9ydHM9d2luZG93LkhUTUxJbXBvcnRzfHx7fSk7dmFyIEU9d2luZG93LlNoYWR5RE9NfHx7fTtFLiRhPSEoIUVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvd3x8IU5vZGUucHJvdG90eXBlLmdldFJvb3ROb2RlKTt2YXIgaGI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihOb2RlLnByb3RvdHlwZSxcImZpcnN0Q2hpbGRcIik7RS5TPSEhKGhiJiZoYi5jb25maWd1cmFibGUmJmhiLmdldCk7RS56YT1FLmZvcmNlfHwhRS4kYTt2YXIgWD1FbGVtZW50LnByb3RvdHlwZSxNYz1YLm1hdGNoZXN8fFgubWF0Y2hlc1NlbGVjdG9yfHxYLm1vek1hdGNoZXNTZWxlY3Rvcnx8WC5tc01hdGNoZXNTZWxlY3Rvcnx8WC5vTWF0Y2hlc1NlbGVjdG9yfHxYLndlYmtpdE1hdGNoZXNTZWxlY3RvcixQYT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSxMYj0wLE9hPVtdOyhuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbigpe2Zvcig7T2EubGVuZ3RoOyl0cnl7T2Euc2hpZnQoKSgpfWNhdGNoKGEpe3Rocm93IFBhLnRleHRDb250ZW50PVxuTGIrKyxhO319KSkub2JzZXJ2ZShQYSx7Y2hhcmFjdGVyRGF0YTohMH0pO3ZhciBWZD0hIWRvY3VtZW50LmNvbnRhaW5zLGFhPVtdLFFhO21hLmxpc3Q9YWE7bGEucHJvdG90eXBlLmhiPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczt0aGlzLmF8fCh0aGlzLmE9ITAsS2IoZnVuY3Rpb24oKXthLmIoKX0pKX07bGEucHJvdG90eXBlLmI9ZnVuY3Rpb24oKXtpZih0aGlzLmEpe3RoaXMuYT0hMTt2YXIgYT10aGlzLnRha2VSZWNvcmRzKCk7YS5sZW5ndGgmJnRoaXMuWC5mb3JFYWNoKGZ1bmN0aW9uKGIpe2IoYSl9KX19O2xhLnByb3RvdHlwZS50YWtlUmVjb3Jkcz1mdW5jdGlvbigpe2lmKHRoaXMuYWRkZWROb2Rlcy5sZW5ndGh8fHRoaXMucmVtb3ZlZE5vZGVzLmxlbmd0aCl7dmFyIGE9W3thZGRlZE5vZGVzOnRoaXMuYWRkZWROb2RlcyxyZW1vdmVkTm9kZXM6dGhpcy5yZW1vdmVkTm9kZXN9XTt0aGlzLmFkZGVkTm9kZXM9W107dGhpcy5yZW1vdmVkTm9kZXM9W107cmV0dXJuIGF9cmV0dXJuW119O1xudmFyIGNjPUVsZW1lbnQucHJvdG90eXBlLmFwcGVuZENoaWxkLFhhPUVsZW1lbnQucHJvdG90eXBlLmluc2VydEJlZm9yZSxiYT1FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZCxrYz1FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUsTmM9RWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlLGliPUVsZW1lbnQucHJvdG90eXBlLmNsb25lTm9kZSxZYT1Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSxzYz1FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLHZjPUVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIscmM9V2luZG93LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLHVjPVdpbmRvdy5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcixqYj1FbGVtZW50LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50LGNhPU5vZGUucHJvdG90eXBlLmNvbnRhaW5zfHxIVE1MRWxlbWVudC5wcm90b3R5cGUuY29udGFpbnMsV2Q9T2JqZWN0LmZyZWV6ZSh7YXBwZW5kQ2hpbGQ6Y2MsXG5pbnNlcnRCZWZvcmU6WGEscmVtb3ZlQ2hpbGQ6YmEsc2V0QXR0cmlidXRlOmtjLHJlbW92ZUF0dHJpYnV0ZTpOYyxjbG9uZU5vZGU6aWIsaW1wb3J0Tm9kZTpZYSxhZGRFdmVudExpc3RlbmVyOnNjLHJlbW92ZUV2ZW50TGlzdGVuZXI6dmMscmI6cmMsc2I6dWMsZGlzcGF0Y2hFdmVudDpqYixxdWVyeVNlbGVjdG9yOkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3IscXVlcnlTZWxlY3RvckFsbDpFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLGNvbnRhaW5zOmNhfSksQ2Q9L1smXFx1MDBBMFwiXS9nLEZkPS9bJlxcdTAwQTA8Pl0vZyxEZD1QYihcImFyZWEgYmFzZSBiciBjb2wgY29tbWFuZCBlbWJlZCBociBpbWcgaW5wdXQga2V5Z2VuIGxpbmsgbWV0YSBwYXJhbSBzb3VyY2UgdHJhY2sgd2JyXCIuc3BsaXQoXCIgXCIpKSxFZD1QYihcInN0eWxlIHNjcmlwdCB4bXAgaWZyYW1lIG5vZW1iZWQgbm9mcmFtZXMgcGxhaW50ZXh0IG5vc2NyaXB0XCIuc3BsaXQoXCIgXCIpKSxDPWRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZG9jdW1lbnQsXG5Ob2RlRmlsdGVyLlNIT1dfQUxMLG51bGwsITEpLEQ9ZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihkb2N1bWVudCxOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCxudWxsLCExKSxYZD1PYmplY3QuZnJlZXplKHtwYXJlbnROb2RlOlUsZmlyc3RDaGlsZDpLYSxsYXN0Q2hpbGQ6TGEscHJldmlvdXNTaWJsaW5nOlFiLG5leHRTaWJsaW5nOlJiLGNoaWxkTm9kZXM6UyxwYXJlbnRFbGVtZW50OlNiLGZpcnN0RWxlbWVudENoaWxkOlRiLGxhc3RFbGVtZW50Q2hpbGQ6VWIscHJldmlvdXNFbGVtZW50U2libGluZzpWYixuZXh0RWxlbWVudFNpYmxpbmc6V2IsY2hpbGRyZW46WGIsaW5uZXJIVE1MOlliLHRleHRDb250ZW50OlpifSksa2I9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKXx8T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksc2E9ZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiaW5lcnRcIikuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbmxiPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRG9jdW1lbnQucHJvdG90eXBlLFwiYWN0aXZlRWxlbWVudFwiKSwkYj17cGFyZW50RWxlbWVudDp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkucGFyZW50Tm9kZTthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREUmJihhPW51bGwpO3JldHVybiB2b2lkIDAhPT1hP2E6U2IodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0scGFyZW50Tm9kZTp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkucGFyZW50Tm9kZTtyZXR1cm4gdm9pZCAwIT09YT9hOlUodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sbmV4dFNpYmxpbmc6e2dldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5Lm5leHRTaWJsaW5nO3JldHVybiB2b2lkIDAhPT1hP2E6UmIodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0scHJldmlvdXNTaWJsaW5nOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1cbnRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5LnByZXZpb3VzU2libGluZztyZXR1cm4gdm9pZCAwIT09YT9hOlFiKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LGNsYXNzTmFtZTp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9LHNldDpmdW5jdGlvbihhKXt0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYSl9LGNvbmZpZ3VyYWJsZTohMH0sbmV4dEVsZW1lbnRTaWJsaW5nOntnZXQ6ZnVuY3Rpb24oKXtpZih0aGlzLl9fc2hhZHkmJnZvaWQgMCE9PXRoaXMuX19zaGFkeS5uZXh0U2libGluZyl7Zm9yKHZhciBhPXRoaXMubmV4dFNpYmxpbmc7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFOylhPWEubmV4dFNpYmxpbmc7cmV0dXJuIGF9cmV0dXJuIFdiKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LHByZXZpb3VzRWxlbWVudFNpYmxpbmc6e2dldDpmdW5jdGlvbigpe2lmKHRoaXMuX19zaGFkeSYmdm9pZCAwIT09dGhpcy5fX3NoYWR5LnByZXZpb3VzU2libGluZyl7Zm9yKHZhciBhPVxudGhpcy5wcmV2aW91c1NpYmxpbmc7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFOylhPWEucHJldmlvdXNTaWJsaW5nO3JldHVybiBhfXJldHVybiBWYih0aGlzKX0sY29uZmlndXJhYmxlOiEwfX0sU2E9e2NoaWxkTm9kZXM6e2dldDpmdW5jdGlvbigpe2lmKFQodGhpcykpe2lmKCF0aGlzLl9fc2hhZHkuY2hpbGROb2Rlcyl7dGhpcy5fX3NoYWR5LmNoaWxkTm9kZXM9W107Zm9yKHZhciBhPXRoaXMuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyl0aGlzLl9fc2hhZHkuY2hpbGROb2Rlcy5wdXNoKGEpfXZhciBiPXRoaXMuX19zaGFkeS5jaGlsZE5vZGVzfWVsc2UgYj1TKHRoaXMpO2IuaXRlbT1mdW5jdGlvbihhKXtyZXR1cm4gYlthXX07cmV0dXJuIGJ9LGNvbmZpZ3VyYWJsZTohMH0sY2hpbGRFbGVtZW50Q291bnQ6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aH0sY29uZmlndXJhYmxlOiEwfSxmaXJzdENoaWxkOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1cbnRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5LmZpcnN0Q2hpbGQ7cmV0dXJuIHZvaWQgMCE9PWE/YTpLYSh0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxsYXN0Q2hpbGQ6e2dldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5Lmxhc3RDaGlsZDtyZXR1cm4gdm9pZCAwIT09YT9hOkxhKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LHRleHRDb250ZW50OntnZXQ6ZnVuY3Rpb24oKXtpZihUKHRoaXMpKXtmb3IodmFyIGE9W10sYj0wLGM9dGhpcy5jaGlsZE5vZGVzLGQ7ZD1jW2JdO2IrKylkLm5vZGVUeXBlIT09Tm9kZS5DT01NRU5UX05PREUmJmEucHVzaChkLnRleHRDb250ZW50KTtyZXR1cm4gYS5qb2luKFwiXCIpfXJldHVybiBaYih0aGlzKX0sc2V0OmZ1bmN0aW9uKGEpe3N3aXRjaCh0aGlzLm5vZGVUeXBlKXtjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOmNhc2UgTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFOmZvcig7dGhpcy5maXJzdENoaWxkOyl0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZmlyc3RDaGlsZCk7XG4oMDxhLmxlbmd0aHx8dGhpcy5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKSYmdGhpcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSk7YnJlYWs7ZGVmYXVsdDp0aGlzLm5vZGVWYWx1ZT1hfX0sY29uZmlndXJhYmxlOiEwfSxmaXJzdEVsZW1lbnRDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7aWYodGhpcy5fX3NoYWR5JiZ2b2lkIDAhPT10aGlzLl9fc2hhZHkuZmlyc3RDaGlsZCl7Zm9yKHZhciBhPXRoaXMuZmlyc3RDaGlsZDthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX1yZXR1cm4gVGIodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sbGFzdEVsZW1lbnRDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7aWYodGhpcy5fX3NoYWR5JiZ2b2lkIDAhPT10aGlzLl9fc2hhZHkubGFzdENoaWxkKXtmb3IodmFyIGE9dGhpcy5sYXN0Q2hpbGQ7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFOylhPWEucHJldmlvdXNTaWJsaW5nO1xucmV0dXJuIGF9cmV0dXJuIFViKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LGNoaWxkcmVuOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYTtUKHRoaXMpP2E9QXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMuY2hpbGROb2RlcyxmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFfSk6YT1YYih0aGlzKTthLml0ZW09ZnVuY3Rpb24oYil7cmV0dXJuIGFbYl19O3JldHVybiBhfSxjb25maWd1cmFibGU6ITB9LGlubmVySFRNTDp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9XCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWU/dGhpcy5jb250ZW50OnRoaXM7cmV0dXJuIFQodGhpcyk/UmEoYSk6WWIoYSl9LHNldDpmdW5jdGlvbihhKXtmb3IodmFyIGI9XCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWU/dGhpcy5jb250ZW50OnRoaXM7Yi5maXJzdENoaWxkOyliLnJlbW92ZUNoaWxkKGIuZmlyc3RDaGlsZCk7Zm9yKGtiJiZrYi5zZXQ/a2Iuc2V0LmNhbGwoc2EsYSk6XG5zYS5pbm5lckhUTUw9YTtzYS5maXJzdENoaWxkOyliLmFwcGVuZENoaWxkKHNhLmZpcnN0Q2hpbGQpfSxjb25maWd1cmFibGU6ITB9fSxPYz17c2hhZG93Um9vdDp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5LmZifHxudWxsfSxjb25maWd1cmFibGU6ITB9fSxUYT17YWN0aXZlRWxlbWVudDp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9bGImJmxiLmdldD9sYi5nZXQuY2FsbChkb2N1bWVudCk6RS5TP3ZvaWQgMDpkb2N1bWVudC5hY3RpdmVFbGVtZW50O2lmKGEmJmEubm9kZVR5cGUpe3ZhciBiPSEhRyh0aGlzKTtpZih0aGlzPT09ZG9jdW1lbnR8fGImJnRoaXMuaG9zdCE9PWEmJmNhLmNhbGwodGhpcy5ob3N0LGEpKXtmb3IoYj1aKGEpO2ImJmIhPT10aGlzOylhPWIuaG9zdCxiPVooYSk7YT10aGlzPT09ZG9jdW1lbnQ/Yj9udWxsOmE6Yj09PXRoaXM/YTpudWxsfWVsc2UgYT1udWxsfWVsc2UgYT1udWxsO3JldHVybiBhfSxzZXQ6ZnVuY3Rpb24oKXt9LFxuY29uZmlndXJhYmxlOiEwfX0sSmI9RS5TP2Z1bmN0aW9uKCl7fTpmdW5jdGlvbihhKXthLl9fc2hhZHkmJmEuX19zaGFkeS5OYXx8KGEuX19zaGFkeT1hLl9fc2hhZHl8fHt9LGEuX19zaGFkeS5OYT0hMCxLKGEsJGIsITApKX0sSWI9RS5TP2Z1bmN0aW9uKCl7fTpmdW5jdGlvbihhKXthLl9fc2hhZHkmJmEuX19zaGFkeS5MYXx8KGEuX19zaGFkeT1hLl9fc2hhZHl8fHt9LGEuX19zaGFkeS5MYT0hMCxLKGEsU2EsITApLEsoYSxPYywhMCkpfSxvYT1udWxsLGRhPVwiX19ldmVudFdyYXBwZXJzXCIrRGF0ZS5ub3coKSxZZD17Ymx1cjohMCxmb2N1czohMCxmb2N1c2luOiEwLGZvY3Vzb3V0OiEwLGNsaWNrOiEwLGRibGNsaWNrOiEwLG1vdXNlZG93bjohMCxtb3VzZWVudGVyOiEwLG1vdXNlbGVhdmU6ITAsbW91c2Vtb3ZlOiEwLG1vdXNlb3V0OiEwLG1vdXNlb3ZlcjohMCxtb3VzZXVwOiEwLHdoZWVsOiEwLGJlZm9yZWlucHV0OiEwLGlucHV0OiEwLGtleWRvd246ITAsa2V5dXA6ITAsY29tcG9zaXRpb25zdGFydDohMCxcbmNvbXBvc2l0aW9udXBkYXRlOiEwLGNvbXBvc2l0aW9uZW5kOiEwLHRvdWNoc3RhcnQ6ITAsdG91Y2hlbmQ6ITAsdG91Y2htb3ZlOiEwLHRvdWNoY2FuY2VsOiEwLHBvaW50ZXJvdmVyOiEwLHBvaW50ZXJlbnRlcjohMCxwb2ludGVyZG93bjohMCxwb2ludGVybW92ZTohMCxwb2ludGVydXA6ITAscG9pbnRlcmNhbmNlbDohMCxwb2ludGVyb3V0OiEwLHBvaW50ZXJsZWF2ZTohMCxnb3Rwb2ludGVyY2FwdHVyZTohMCxsb3N0cG9pbnRlcmNhcHR1cmU6ITAsZHJhZ3N0YXJ0OiEwLGRyYWc6ITAsZHJhZ2VudGVyOiEwLGRyYWdsZWF2ZTohMCxkcmFnb3ZlcjohMCxkcm9wOiEwLGRyYWdlbmQ6ITAsRE9NQWN0aXZhdGU6ITAsRE9NRm9jdXNJbjohMCxET01Gb2N1c091dDohMCxrZXlwcmVzczohMH0sd2M9e2dldCBjb21wb3NlZCgpeyExIT09dGhpcy5pc1RydXN0ZWQmJnZvaWQgMD09PXRoaXMuZWEmJih0aGlzLmVhPVlkW3RoaXMudHlwZV0pO3JldHVybiB0aGlzLmVhfHwhMX0sY29tcG9zZWRQYXRoOmZ1bmN0aW9uKCl7dGhpcy5xYXx8XG4odGhpcy5xYT1aYSh0aGlzLl9fdGFyZ2V0LHRoaXMuY29tcG9zZWQpKTtyZXR1cm4gdGhpcy5xYX0sZ2V0IHRhcmdldCgpe3JldHVybiBtYyh0aGlzLmN1cnJlbnRUYXJnZXQsdGhpcy5jb21wb3NlZFBhdGgoKSl9LGdldCByZWxhdGVkVGFyZ2V0KCl7aWYoIXRoaXMucmEpcmV0dXJuIG51bGw7dGhpcy5zYXx8KHRoaXMuc2E9WmEodGhpcy5yYSwhMCkpO3JldHVybiBtYyh0aGlzLmN1cnJlbnRUYXJnZXQsdGhpcy5zYSl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe0V2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24uY2FsbCh0aGlzKTt0aGlzLmZhPSEwfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXtFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uLmNhbGwodGhpcyk7dGhpcy5mYT10aGlzLkthPSEwfX0sYWI9e2ZvY3VzOiEwLGJsdXI6ITB9LFpkPSRhKHdpbmRvdy5FdmVudCksJGQ9JGEod2luZG93LkN1c3RvbUV2ZW50KSxhZT1cbiRhKHdpbmRvdy5Nb3VzZUV2ZW50KSxIYj17fTtsLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlKTtsLnByb3RvdHlwZS5GPWZ1bmN0aW9uKGEsYil7dGhpcy5NYT1cIlNoYWR5Um9vdFwiO2thKGEpO2thKHRoaXMpO3RoaXMuaG9zdD1hO3RoaXMuSD1iJiZiLm1vZGU7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307YS5fX3NoYWR5LnJvb3Q9dGhpczthLl9fc2hhZHkuZmI9XCJjbG9zZWRcIiE9PXRoaXMuSD90aGlzOm51bGw7dGhpcy5QPSExO3RoaXMuYj1bXTt0aGlzLmE9e307dGhpcy5jPVtdO2I9UyhhKTtmb3IodmFyIGM9MCxkPWIubGVuZ3RoO2M8ZDtjKyspYmEuY2FsbChhLGJbY10pfTtsLnByb3RvdHlwZS5MPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczt0aGlzLlB8fCh0aGlzLlA9ITAsTmIoZnVuY3Rpb24oKXtyZXR1cm4gYS52YSgpfSkpfTtsLnByb3RvdHlwZS5LPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMsYj10aGlzO2I7KWIuUCYmKGE9YiksXG5iPWIuVWEoKTtyZXR1cm4gYX07bC5wcm90b3R5cGUuVWE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmhvc3QuZ2V0Um9vdE5vZGUoKTtpZihHKGEpKWZvcih2YXIgYj10aGlzLmhvc3QuY2hpbGROb2RlcyxjPTAsZDtjPGIubGVuZ3RoO2MrKylpZihkPWJbY10sdGhpcy5qKGQpKXJldHVybiBhfTtsLnByb3RvdHlwZS52YT1mdW5jdGlvbigpe3RoaXMuUCYmdGhpcy5LKCkuX3JlbmRlclJvb3QoKX07bC5wcm90b3R5cGUuX3JlbmRlclJvb3Q9ZnVuY3Rpb24oKXt0aGlzLlA9ITE7dGhpcy5CKCk7dGhpcy5zKCl9O2wucHJvdG90eXBlLkI9ZnVuY3Rpb24oKXt0aGlzLmYoKTtmb3IodmFyIGE9MCxiO2E8dGhpcy5iLmxlbmd0aDthKyspYj10aGlzLmJbYV0sdGhpcy5vKGIpO2ZvcihiPXRoaXMuaG9zdC5maXJzdENoaWxkO2I7Yj1iLm5leHRTaWJsaW5nKXRoaXMuaChiKTtmb3IoYT0wO2E8dGhpcy5iLmxlbmd0aDthKyspe2I9dGhpcy5iW2FdO2lmKCFiLl9fc2hhZHkuYXNzaWduZWROb2Rlcy5sZW5ndGgpZm9yKHZhciBjPVxuYi5maXJzdENoaWxkO2M7Yz1jLm5leHRTaWJsaW5nKXRoaXMuaChjLGIpO2M9Yi5wYXJlbnROb2RlOyhjPWMuX19zaGFkeSYmYy5fX3NoYWR5LnJvb3QpJiZjLnRhKCkmJmMuX3JlbmRlclJvb3QoKTt0aGlzLmcoYi5fX3NoYWR5LlIsYi5fX3NoYWR5LmFzc2lnbmVkTm9kZXMpO2lmKGM9Yi5fX3NoYWR5LnVhKXtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrKyljW2RdLl9fc2hhZHkuaWE9bnVsbDtiLl9fc2hhZHkudWE9bnVsbDtjLmxlbmd0aD5iLl9fc2hhZHkuYXNzaWduZWROb2Rlcy5sZW5ndGgmJihiLl9fc2hhZHkua2E9ITApfWIuX19zaGFkeS5rYSYmKGIuX19zaGFkeS5rYT0hMSx0aGlzLmkoYikpfX07bC5wcm90b3R5cGUuaD1mdW5jdGlvbihhLGIpe2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O3ZhciBjPWEuX19zaGFkeS5pYTthLl9fc2hhZHkuaWE9bnVsbDtifHwoYj0oYj10aGlzLmFbYS5zbG90fHxcIl9fY2F0Y2hhbGxcIl0pJiZiWzBdKTtiPyhiLl9fc2hhZHkuYXNzaWduZWROb2Rlcy5wdXNoKGEpLFxuYS5fX3NoYWR5LmFzc2lnbmVkU2xvdD1iKTphLl9fc2hhZHkuYXNzaWduZWRTbG90PXZvaWQgMDtjIT09YS5fX3NoYWR5LmFzc2lnbmVkU2xvdCYmYS5fX3NoYWR5LmFzc2lnbmVkU2xvdCYmKGEuX19zaGFkeS5hc3NpZ25lZFNsb3QuX19zaGFkeS5rYT0hMCl9O2wucHJvdG90eXBlLm89ZnVuY3Rpb24oYSl7dmFyIGI9YS5fX3NoYWR5LmFzc2lnbmVkTm9kZXM7YS5fX3NoYWR5LmFzc2lnbmVkTm9kZXM9W107YS5fX3NoYWR5LlI9W107aWYoYS5fX3NoYWR5LnVhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPWJbY107ZC5fX3NoYWR5LmlhPWQuX19zaGFkeS5hc3NpZ25lZFNsb3Q7ZC5fX3NoYWR5LmFzc2lnbmVkU2xvdD09PWEmJihkLl9fc2hhZHkuYXNzaWduZWRTbG90PW51bGwpfX07bC5wcm90b3R5cGUuZz1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ7YzxiLmxlbmd0aCYmKGQ9YltjXSk7YysrKVwic2xvdFwiPT1kLmxvY2FsTmFtZT90aGlzLmcoYSxkLl9fc2hhZHkuYXNzaWduZWROb2Rlcyk6XG5hLnB1c2goYltjXSl9O2wucHJvdG90eXBlLmk9ZnVuY3Rpb24oYSl7amIuY2FsbChhLG5ldyBFdmVudChcInNsb3RjaGFuZ2VcIikpO2EuX19zaGFkeS5hc3NpZ25lZFNsb3QmJnRoaXMuaShhLl9fc2hhZHkuYXNzaWduZWRTbG90KX07bC5wcm90b3R5cGUucz1mdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmIsYj1bXSxjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10ucGFyZW50Tm9kZTtkLl9fc2hhZHkmJmQuX19zaGFkeS5yb290fHwhKDA+Yi5pbmRleE9mKGQpKXx8Yi5wdXNoKGQpfWZvcihhPTA7YTxiLmxlbmd0aDthKyspYz1iW2FdLHRoaXMuTyhjPT09dGhpcz90aGlzLmhvc3Q6Yyx0aGlzLncoYykpfTtsLnByb3RvdHlwZS53PWZ1bmN0aW9uKGEpe3ZhciBiPVtdO2E9YS5jaGlsZE5vZGVzO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdO2lmKHRoaXMuaihkKSl7ZD1kLl9fc2hhZHkuUjtmb3IodmFyIGU9MDtlPGQubGVuZ3RoO2UrKyliLnB1c2goZFtlXSl9ZWxzZSBiLnB1c2goZCl9cmV0dXJuIGJ9O1xubC5wcm90b3R5cGUuaj1mdW5jdGlvbihhKXtyZXR1cm5cInNsb3RcIj09YS5sb2NhbE5hbWV9O2wucHJvdG90eXBlLk89ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9UyhhKSxkPUlkKGIsYi5sZW5ndGgsYyxjLmxlbmd0aCksZT0wLGY9MCxrO2U8ZC5sZW5ndGgmJihrPWRbZV0pO2UrKyl7Zm9yKHZhciBnPTAsbDtnPGsuVS5sZW5ndGgmJihsPWsuVVtnXSk7ZysrKVUobCk9PT1hJiZiYS5jYWxsKGEsbCksYy5zcGxpY2Uoay5pbmRleCtmLDEpO2YtPWsuV31mb3IoZT0wO2U8ZC5sZW5ndGgmJihrPWRbZV0pO2UrKylmb3IoZj1jW2suaW5kZXhdLGc9ay5pbmRleDtnPGsuaW5kZXgray5XO2crKylsPWJbZ10sWGEuY2FsbChhLGwsZiksYy5zcGxpY2UoZywwLGwpfTtsLnByb3RvdHlwZS5RYT1mdW5jdGlvbihhKXt0aGlzLmMucHVzaC5hcHBseSh0aGlzLmMsW10uY29uY2F0KGEgaW5zdGFuY2VvZiBBcnJheT9hOmhkKGdkKGEpKSkpfTtsLnByb3RvdHlwZS5mPWZ1bmN0aW9uKCl7dGhpcy5jLmxlbmd0aCYmXG4odGhpcy5HKHRoaXMuYyksdGhpcy5jPVtdKX07bC5wcm90b3R5cGUuRz1mdW5jdGlvbihhKXtmb3IodmFyIGIsYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdO2QuX19zaGFkeT1kLl9fc2hhZHl8fHt9O2thKGQpO2thKGQucGFyZW50Tm9kZSk7dmFyIGU9dGhpcy5sKGQpO3RoaXMuYVtlXT8oYj1ifHx7fSxiW2VdPSEwLHRoaXMuYVtlXS5wdXNoKGQpKTp0aGlzLmFbZV09W2RdO3RoaXMuYi5wdXNoKGQpfWlmKGIpZm9yKHZhciBmIGluIGIpdGhpcy5hW2ZdPXRoaXMubSh0aGlzLmFbZl0pfTtsLnByb3RvdHlwZS5sPWZ1bmN0aW9uKGEpe3ZhciBiPWEubmFtZXx8YS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpfHxcIl9fY2F0Y2hhbGxcIjtyZXR1cm4gYS5PYT1ifTtsLnByb3RvdHlwZS5tPWZ1bmN0aW9uKGEpe3JldHVybiBhLnNvcnQoZnVuY3Rpb24oYSxjKXthPXhjKGEpO2Zvcih2YXIgYj14YyhjKSxlPTA7ZTxhLmxlbmd0aDtlKyspe2M9YVtlXTt2YXIgZj1iW2VdO2lmKGMhPT1mKXJldHVybiBhPVxuQXJyYXkuZnJvbShjLnBhcmVudE5vZGUuY2hpbGROb2RlcyksYS5pbmRleE9mKGMpLWEuaW5kZXhPZihmKX19KX07bC5wcm90b3R5cGUuVGE9ZnVuY3Rpb24oYSl7dGhpcy5mKCk7dmFyIGI9dGhpcy5hLGM7Zm9yKGMgaW4gYilmb3IodmFyIGQ9YltjXSxlPTA7ZTxkLmxlbmd0aDtlKyspe3ZhciBmPWRbZV07aWYoTWIoYSxmKSl7ZC5zcGxpY2UoZSwxKTt2YXIgaz10aGlzLmIuaW5kZXhPZihmKTswPD1rJiZ0aGlzLmIuc3BsaWNlKGssMSk7ZS0tO3RoaXMuSShmKTtrPSEwfX1yZXR1cm4ga307bC5wcm90b3R5cGUuVmE9ZnVuY3Rpb24oYSl7dmFyIGI9YS5PYSxjPXRoaXMubChhKTtpZihjIT09Yil7Yj10aGlzLmFbYl07dmFyIGQ9Yi5pbmRleE9mKGEpOzA8PWQmJmIuc3BsaWNlKGQsMSk7Yj10aGlzLmFbY118fCh0aGlzLmFbY109W10pO2IucHVzaChhKTsxPGIubGVuZ3RoJiYodGhpcy5hW2NdPXRoaXMubShiKSl9fTtsLnByb3RvdHlwZS5JPWZ1bmN0aW9uKGEpe2lmKGE9YS5fX3NoYWR5LlIpZm9yKHZhciBiPVxuMDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXSxkPVUoYyk7ZCYmYmEuY2FsbChkLGMpfX07bC5wcm90b3R5cGUudGE9ZnVuY3Rpb24oKXt0aGlzLmYoKTtyZXR1cm4hIXRoaXMuYi5sZW5ndGh9O2wucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYSxiLGMpe1wib2JqZWN0XCIhPT10eXBlb2YgYyYmKGM9e2NhcHR1cmU6ISFjfSk7Yy5nYT10aGlzO3RoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKGEsYixjKX07bC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyl7XCJvYmplY3RcIiE9PXR5cGVvZiBjJiYoYz17Y2FwdHVyZTohIWN9KTtjLmdhPXRoaXM7dGhpcy5ob3N0LnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxiLGMpfTtsLnByb3RvdHlwZS5nZXRFbGVtZW50QnlJZD1mdW5jdGlvbihhKXtyZXR1cm4gbmEodGhpcyxmdW5jdGlvbihiKXtyZXR1cm4gYi5pZD09YX0sZnVuY3Rpb24oYSl7cmV0dXJuISFhfSlbMF18fG51bGx9OyhmdW5jdGlvbihhKXtLKGEsXG5TYSwhMCk7SyhhLFRhLCEwKX0pKGwucHJvdG90eXBlKTt2YXIgTWQ9e2FkZEV2ZW50TGlzdGVuZXI6cGMuYmluZCh3aW5kb3cpLHJlbW92ZUV2ZW50TGlzdGVuZXI6dGMuYmluZCh3aW5kb3cpfSxMZD17YWRkRXZlbnRMaXN0ZW5lcjpwYyxyZW1vdmVFdmVudExpc3RlbmVyOnRjLGFwcGVuZENoaWxkOmZ1bmN0aW9uKGEpe3JldHVybiBVYSh0aGlzLGEpfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVWEodGhpcyxhLGIpfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihhKXtyZXR1cm4gVmEodGhpcyxhKX0scmVwbGFjZUNoaWxkOmZ1bmN0aW9uKGEsYil7VWEodGhpcyxhLGIpO1ZhKHRoaXMsYik7cmV0dXJuIGF9LGNsb25lTm9kZTpmdW5jdGlvbihhKXtpZihcInRlbXBsYXRlXCI9PXRoaXMubG9jYWxOYW1lKXZhciBiPWliLmNhbGwodGhpcyxhKTtlbHNlIGlmKGI9aWIuY2FsbCh0aGlzLCExKSxhKXthPXRoaXMuY2hpbGROb2Rlcztmb3IodmFyIGM9MCxkO2M8YS5sZW5ndGg7YysrKWQ9XG5hW2NdLmNsb25lTm9kZSghMCksYi5hcHBlbmRDaGlsZChkKX1yZXR1cm4gYn0sZ2V0Um9vdE5vZGU6ZnVuY3Rpb24oKXtyZXR1cm4gZ2ModGhpcyl9LGNvbnRhaW5zOmZ1bmN0aW9uKGEpe3JldHVybiBNYih0aGlzLGEpfSxnZXQgaXNDb25uZWN0ZWQoKXt2YXIgYT10aGlzLm93bmVyRG9jdW1lbnQ7aWYoVmQmJmNhLmNhbGwoYSx0aGlzKXx8YS5kb2N1bWVudEVsZW1lbnQmJmNhLmNhbGwoYS5kb2N1bWVudEVsZW1lbnQsdGhpcykpcmV0dXJuITA7Zm9yKGE9dGhpczthJiYhKGEgaW5zdGFuY2VvZiBEb2N1bWVudCk7KWE9YS5wYXJlbnROb2RlfHwoYSBpbnN0YW5jZW9mIGw/YS5ob3N0OnZvaWQgMCk7cmV0dXJuISEoYSYmYSBpbnN0YW5jZW9mIERvY3VtZW50KX0sZGlzcGF0Y2hFdmVudDpmdW5jdGlvbihhKXttYSgpO3JldHVybiBqYi5jYWxsKHRoaXMsYSl9fSxOZD17Z2V0IGFzc2lnbmVkU2xvdCgpe3JldHVybiB5Yyh0aGlzKX19LGJiPXtxdWVyeVNlbGVjdG9yOmZ1bmN0aW9uKGEpe3JldHVybiBuYSh0aGlzLFxuZnVuY3Rpb24oYil7cmV0dXJuIE1jLmNhbGwoYixhKX0sZnVuY3Rpb24oYSl7cmV0dXJuISFhfSlbMF18fG51bGx9LHF1ZXJ5U2VsZWN0b3JBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIG5hKHRoaXMsZnVuY3Rpb24oYil7cmV0dXJuIE1jLmNhbGwoYixhKX0pfX0sQmM9e2Fzc2lnbmVkTm9kZXM6ZnVuY3Rpb24oYSl7aWYoXCJzbG90XCI9PT10aGlzLmxvY2FsTmFtZSlyZXR1cm4gaWModGhpcyksdGhpcy5fX3NoYWR5PyhhJiZhLmZsYXR0ZW4/dGhpcy5fX3NoYWR5LlI6dGhpcy5fX3NoYWR5LmFzc2lnbmVkTm9kZXMpfHxbXTpbXX19LHpjPU5hKHtzZXRBdHRyaWJ1dGU6ZnVuY3Rpb24oYSxiKXtqYyh0aGlzLGEsYil9LHJlbW92ZUF0dHJpYnV0ZTpmdW5jdGlvbihhKXtOYy5jYWxsKHRoaXMsYSk7ZmModGhpcyxhKX0sYXR0YWNoU2hhZG93OmZ1bmN0aW9uKGEpe2lmKCF0aGlzKXRocm93XCJNdXN0IHByb3ZpZGUgYSBob3N0LlwiO2lmKCFhKXRocm93XCJOb3QgZW5vdWdoIGFyZ3VtZW50cy5cIjtyZXR1cm4gbmV3IGwoSGIsXG50aGlzLGEpfSxnZXQgc2xvdCgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcInNsb3RcIil9LHNldCBzbG90KGEpe2pjKHRoaXMsXCJzbG90XCIsYSl9LGdldCBhc3NpZ25lZFNsb3QoKXtyZXR1cm4geWModGhpcyl9fSxiYixCYyk7T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoemMsT2MpO3ZhciBBYz1OYSh7aW1wb3J0Tm9kZTpmdW5jdGlvbihhLGIpe3JldHVybiBsYyhhLGIpfSxnZXRFbGVtZW50QnlJZDpmdW5jdGlvbihhKXtyZXR1cm4gbmEodGhpcyxmdW5jdGlvbihiKXtyZXR1cm4gYi5pZD09YX0sZnVuY3Rpb24oYSl7cmV0dXJuISFhfSlbMF18fG51bGx9fSxiYik7T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQWMse19hY3RpdmVFbGVtZW50OlRhLmFjdGl2ZUVsZW1lbnR9KTt2YXIgYmU9SFRNTEVsZW1lbnQucHJvdG90eXBlLmJsdXIsT2Q9TmEoe2JsdXI6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5yb290OyhhPWEmJmEuYWN0aXZlRWxlbWVudCk/XG5hLmJsdXIoKTpiZS5jYWxsKHRoaXMpfX0pO0UuemEmJih3aW5kb3cuU2hhZHlET009e2luVXNlOkUuemEscGF0Y2g6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LGlzU2hhZHlSb290OkcsZW5xdWV1ZTpOYixmbHVzaDptYSxzZXR0aW5nczpFLGZpbHRlck11dGF0aW9uczpCZCxvYnNlcnZlQ2hpbGRyZW46emQsdW5vYnNlcnZlQ2hpbGRyZW46eWQsbmF0aXZlTWV0aG9kczpXZCxuYXRpdmVUcmVlOlhkfSx3aW5kb3cuRXZlbnQ9WmQsd2luZG93LkN1c3RvbUV2ZW50PSRkLHdpbmRvdy5Nb3VzZUV2ZW50PWFlLEhkKCksS2QoKSx3aW5kb3cuU2hhZG93Um9vdD1sKTt2YXIgUGQ9bmV3IFNldChcImFubm90YXRpb24teG1sIGNvbG9yLXByb2ZpbGUgZm9udC1mYWNlIGZvbnQtZmFjZS1zcmMgZm9udC1mYWNlLXVyaSBmb250LWZhY2UtZm9ybWF0IGZvbnQtZmFjZS1uYW1lIG1pc3NpbmctZ2x5cGhcIi5zcGxpdChcIiBcIikpO0IucHJvdG90eXBlLkI9ZnVuY3Rpb24oYSxiKXt0aGlzLm8uc2V0KGEsYik7XG50aGlzLm0uc2V0KGIuY29uc3RydWN0b3IsYil9O0IucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuby5nZXQoYSl9O0IucHJvdG90eXBlLnc9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubS5nZXQoYSl9O0IucHJvdG90eXBlLnM9ZnVuY3Rpb24oYSl7dGhpcy5oPSEwO3RoaXMuai5wdXNoKGEpfTtCLnByb3RvdHlwZS5sPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7dGhpcy5oJiZPKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIuZyhhKX0pfTtCLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe2lmKHRoaXMuaCYmIWEuX19DRV9wYXRjaGVkKXthLl9fQ0VfcGF0Y2hlZD0hMDtmb3IodmFyIGI9MDtiPHRoaXMuai5sZW5ndGg7YisrKXRoaXMualtiXShhKX19O0IucHJvdG90eXBlLmI9ZnVuY3Rpb24oYSl7dmFyIGI9W107TyhhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnB1c2goYSl9KTtmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKXt2YXIgYz1iW2FdOzE9PT1jLl9fQ0Vfc3RhdGU/dGhpcy5jb25uZWN0ZWRDYWxsYmFjayhjKTpcbnRoaXMuaShjKX19O0IucHJvdG90eXBlLmE9ZnVuY3Rpb24oYSl7dmFyIGI9W107TyhhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnB1c2goYSl9KTtmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKXt2YXIgYz1iW2FdOzE9PT1jLl9fQ0Vfc3RhdGUmJnRoaXMuZGlzY29ubmVjdGVkQ2FsbGJhY2soYyl9fTtCLnByb3RvdHlwZS5mPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztiPWI/Yjp7fTt2YXIgZD1iLmtifHxuZXcgU2V0LGU9Yi5EYXx8ZnVuY3Rpb24oYSl7cmV0dXJuIGMuaShhKX0sZj1bXTtPKGEsZnVuY3Rpb24oYSl7aWYoXCJsaW5rXCI9PT1hLmxvY2FsTmFtZSYmXCJpbXBvcnRcIj09PWEuZ2V0QXR0cmlidXRlKFwicmVsXCIpKXt2YXIgYj1hLmltcG9ydDtiIGluc3RhbmNlb2YgTm9kZSYmXCJjb21wbGV0ZVwiPT09Yi5yZWFkeVN0YXRlPyhiLl9fQ0VfaXNJbXBvcnREb2N1bWVudD0hMCxiLl9fQ0VfaGFzUmVnaXN0cnk9ITApOmEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe3ZhciBiPVxuYS5pbXBvcnQ7aWYoIWIuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkKXtiLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZD0hMDtiLl9fQ0VfaXNJbXBvcnREb2N1bWVudD0hMDtiLl9fQ0VfaGFzUmVnaXN0cnk9ITA7dmFyIGY9bmV3IFNldChkKTtmLmRlbGV0ZShiKTtjLmYoYix7a2I6ZixEYTplfSl9fSl9ZWxzZSBmLnB1c2goYSl9LGQpO2lmKHRoaXMuaClmb3IoYT0wO2E8Zi5sZW5ndGg7YSsrKXRoaXMuZyhmW2FdKTtmb3IoYT0wO2E8Zi5sZW5ndGg7YSsrKWUoZlthXSl9O0IucHJvdG90eXBlLmk9ZnVuY3Rpb24oYSl7aWYodm9pZCAwPT09YS5fX0NFX3N0YXRlKXt2YXIgYj10aGlzLmMoYS5sb2NhbE5hbWUpO2lmKGIpe2IuY29uc3RydWN0aW9uU3RhY2sucHVzaChhKTt2YXIgYz1iLmNvbnN0cnVjdG9yO3RyeXt0cnl7aWYobmV3IGMhPT1hKXRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yIGRpZCBub3QgcHJvZHVjZSB0aGUgZWxlbWVudCBiZWluZyB1cGdyYWRlZC5cIik7XG59ZmluYWxseXtiLmNvbnN0cnVjdGlvblN0YWNrLnBvcCgpfX1jYXRjaChmKXt0aHJvdyBhLl9fQ0Vfc3RhdGU9MixmO31hLl9fQ0Vfc3RhdGU9MTthLl9fQ0VfZGVmaW5pdGlvbj1iO2lmKGIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKWZvcihiPWIub2JzZXJ2ZWRBdHRyaWJ1dGVzLGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXSxlPWEuZ2V0QXR0cmlidXRlKGQpO251bGwhPT1lJiZ0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhLGQsbnVsbCxlLG51bGwpfXQoYSkmJnRoaXMuY29ubmVjdGVkQ2FsbGJhY2soYSl9fX07Qi5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9YS5fX0NFX2RlZmluaXRpb247Yi5jb25uZWN0ZWRDYWxsYmFjayYmYi5jb25uZWN0ZWRDYWxsYmFjay5jYWxsKGEpfTtCLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtiLmRpc2Nvbm5lY3RlZENhbGxiYWNrJiZcbmIuZGlzY29ubmVjdGVkQ2FsbGJhY2suY2FsbChhKX07Qi5wcm90b3R5cGUuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9YS5fX0NFX2RlZmluaXRpb247Zi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2smJi0xPGYub2JzZXJ2ZWRBdHRyaWJ1dGVzLmluZGV4T2YoYikmJmYuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrLmNhbGwoYSxiLGMsZCxlKX07SmEucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXt0aGlzLk0mJnRoaXMuTS5kaXNjb25uZWN0KCl9O0phLnByb3RvdHlwZS5mPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYS5yZWFkeVN0YXRlO1wiaW50ZXJhY3RpdmVcIiE9PWImJlwiY29tcGxldGVcIiE9PWJ8fHRoaXMuYygpO2ZvcihiPTA7YjxhLmxlbmd0aDtiKyspZm9yKHZhciBjPWFbYl0uYWRkZWROb2RlcyxkPTA7ZDxjLmxlbmd0aDtkKyspdGhpcy5iLmYoY1tkXSl9O0diLnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7aWYodGhpcy5hKXRocm93IEVycm9yKFwiQWxyZWFkeSByZXNvbHZlZC5cIik7XG50aGlzLmE9dm9pZCAwO3RoaXMuYiYmdGhpcy5iKHZvaWQgMCl9O3kucHJvdG90eXBlLmRlZmluZT1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7aWYoIShiIGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcnMgbXVzdCBiZSBmdW5jdGlvbnMuXCIpO2lmKCFDYyhhKSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJUaGUgZWxlbWVudCBuYW1lICdcIithK1wiJyBpcyBub3QgdmFsaWQuXCIpO2lmKHRoaXMuYS5jKGEpKXRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCB3aXRoIG5hbWUgJ1wiK2ErXCInIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5cIik7aWYodGhpcy5jKXRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIGRlZmluZWQuXCIpO3RoaXMuYz0hMDt0cnl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9ZVthXTtpZih2b2lkIDAhPT1iJiYhKGIgaW5zdGFuY2VvZiBGdW5jdGlvbikpdGhyb3cgRXJyb3IoXCJUaGUgJ1wiK1xuYStcIicgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtyZXR1cm4gYn0sZT1iLnByb3RvdHlwZTtpZighKGUgaW5zdGFuY2VvZiBPYmplY3QpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IncyBwcm90b3R5cGUgaXMgbm90IGFuIG9iamVjdC5cIik7dmFyIGY9ZChcImNvbm5lY3RlZENhbGxiYWNrXCIpO3ZhciBnPWQoXCJkaXNjb25uZWN0ZWRDYWxsYmFja1wiKTt2YXIgaD1kKFwiYWRvcHRlZENhbGxiYWNrXCIpO3ZhciBsPWQoXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIik7dmFyIG49Yi5vYnNlcnZlZEF0dHJpYnV0ZXN8fFtdfWNhdGNoKG0pe3JldHVybn1maW5hbGx5e3RoaXMuYz0hMX1iPXtsb2NhbE5hbWU6YSxjb25zdHJ1Y3RvcjpiLGNvbm5lY3RlZENhbGxiYWNrOmYsZGlzY29ubmVjdGVkQ2FsbGJhY2s6ZyxhZG9wdGVkQ2FsbGJhY2s6aCxhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2s6bCxvYnNlcnZlZEF0dHJpYnV0ZXM6bixjb25zdHJ1Y3Rpb25TdGFjazpbXX07XG50aGlzLmEuQihhLGIpO3RoaXMuZy5wdXNoKGIpO3RoaXMuYnx8KHRoaXMuYj0hMCx0aGlzLmYoZnVuY3Rpb24oKXtyZXR1cm4gYy5qKCl9KSl9O3kucHJvdG90eXBlLmo9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2lmKCExIT09dGhpcy5iKXt0aGlzLmI9ITE7Zm9yKHZhciBiPXRoaXMuZyxjPVtdLGQ9bmV3IE1hcCxlPTA7ZTxiLmxlbmd0aDtlKyspZC5zZXQoYltlXS5sb2NhbE5hbWUsW10pO3RoaXMuYS5mKGRvY3VtZW50LHtEYTpmdW5jdGlvbihiKXtpZih2b2lkIDA9PT1iLl9fQ0Vfc3RhdGUpe3ZhciBlPWIubG9jYWxOYW1lLGY9ZC5nZXQoZSk7Zj9mLnB1c2goYik6YS5hLmMoZSkmJmMucHVzaChiKX19fSk7Zm9yKGU9MDtlPGMubGVuZ3RoO2UrKyl0aGlzLmEuaShjW2VdKTtmb3IoOzA8Yi5sZW5ndGg7KXt2YXIgZj1iLnNoaWZ0KCk7ZT1mLmxvY2FsTmFtZTtmPWQuZ2V0KGYubG9jYWxOYW1lKTtmb3IodmFyIGc9MDtnPGYubGVuZ3RoO2crKyl0aGlzLmEuaShmW2ddKTsoZT10aGlzLmguZ2V0KGUpKSYmXG5lLmMoKX19fTt5LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oYSl7aWYoYT10aGlzLmEuYyhhKSlyZXR1cm4gYS5jb25zdHJ1Y3Rvcn07eS5wcm90b3R5cGUud2hlbkRlZmluZWQ9ZnVuY3Rpb24oYSl7aWYoIUNjKGEpKXJldHVybiBQcm9taXNlLnJlamVjdChuZXcgU3ludGF4RXJyb3IoXCInXCIrYStcIicgaXMgbm90IGEgdmFsaWQgY3VzdG9tIGVsZW1lbnQgbmFtZS5cIikpO3ZhciBiPXRoaXMuaC5nZXQoYSk7aWYoYilyZXR1cm4gYi5mO2I9bmV3IEdiO3RoaXMuaC5zZXQoYSxiKTt0aGlzLmEuYyhhKSYmIXRoaXMuZy5zb21lKGZ1bmN0aW9uKGIpe3JldHVybiBiLmxvY2FsTmFtZT09PWF9KSYmYi5jKCk7cmV0dXJuIGIuZn07eS5wcm90b3R5cGUubD1mdW5jdGlvbihhKXt0aGlzLmkuYygpO3ZhciBiPXRoaXMuZjt0aGlzLmY9ZnVuY3Rpb24oYyl7cmV0dXJuIGEoZnVuY3Rpb24oKXtyZXR1cm4gYihjKX0pfX07d2luZG93LkN1c3RvbUVsZW1lbnRSZWdpc3RyeT15O3kucHJvdG90eXBlLmRlZmluZT1cbnkucHJvdG90eXBlLmRlZmluZTt5LnByb3RvdHlwZS5nZXQ9eS5wcm90b3R5cGUuZ2V0O3kucHJvdG90eXBlLndoZW5EZWZpbmVkPXkucHJvdG90eXBlLndoZW5EZWZpbmVkO3kucHJvdG90eXBlLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2s9eS5wcm90b3R5cGUubDt2YXIgRWE9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50LHRkPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudE5TLHNkPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSx1ZD13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLnByZXBlbmQsdmQ9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5hcHBlbmQsY2U9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnByZXBlbmQsZGU9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLmFwcGVuZCx3Yj13aW5kb3cuTm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlLGlhPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCxcbkRiPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5pbnNlcnRCZWZvcmUsRmE9d2luZG93Lk5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkLEViPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQsSWE9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuTm9kZS5wcm90b3R5cGUsXCJ0ZXh0Q29udGVudFwiKSx2Yj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93LENhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpLEdhPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUseGI9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSx6Yj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlLGphPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOUyx5Yj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlTlMsXG5BYj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlTlMsQ2I9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudCxqZD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucHJlcGVuZCxrZD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kLG1kPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5iZWZvcmUsbmQ9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFmdGVyLG9kPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aCxwZD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLHhkPXdpbmRvdy5IVE1MRWxlbWVudCxEYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksQmI9d2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQsRmI9bmV3IGZ1bmN0aW9uKCl7fSx0YT13aW5kb3cuY3VzdG9tRWxlbWVudHM7XG5pZighdGF8fHRhLmZvcmNlUG9seWZpbGx8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHRhLmRlZmluZXx8XCJmdW5jdGlvblwiIT10eXBlb2YgdGEuZ2V0KXt2YXIgWT1uZXcgQjt3ZChZKTtyZChZKTtIYShZLERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLHtaOmNlLGFwcGVuZDpkZX0pO3FkKFkpO2lkKFkpO2RvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnk9ITA7dmFyIGVlPW5ldyB5KFkpO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csXCJjdXN0b21FbGVtZW50c1wiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZTplZX0pfXZhciBJPXtTVFlMRV9SVUxFOjEsZGE6NyxNRURJQV9SVUxFOjQsbmE6MUUzfSxGPXtZYTovXFwvXFwqW14qXSpcXCorKFteLypdW14qXSpcXCorKSpcXC8vZ2ltLHBvcnQ6L0BpbXBvcnRbXjtdKjsvZ2ltLHdhOi8oPzpeW147XFwtXFxzfV0rKT8tLVteO3t9XSo/Oltee307XSo/KD86WztcXG5dfCQpL2dpbSxBYTovKD86XlteO1xcLVxcc31dKyk/LS1bXjt7fV0qPzpbXnt9O10qP3tbXn1dKj99KD86WztcXG5dfCQpPy9naW0sXG5lYjovQGFwcGx5XFxzKlxcKD9bXik7XSpcXCk/XFxzKig/Ols7XFxuXXwkKT8vZ2ltLGpiOi9bXjs6XSo/OlteO10qP3ZhclxcKFteO10qXFwpKD86WztcXG5dfCQpPy9naW0sY2I6L15AW15cXHNdKmtleWZyYW1lcy8sQmE6L1xccysvZ30sej0hKHdpbmRvdy5TaGFkeURPTSYmd2luZG93LlNoYWR5RE9NLmluVXNlKTtpZih3aW5kb3cuU2hhZHlDU1MmJnZvaWQgMCE9PXdpbmRvdy5TaGFkeUNTUy5uYXRpdmVDc3MpdmFyIEE9d2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzcztlbHNlIHdpbmRvdy5TaGFkeUNTUz8oRmMod2luZG93LlNoYWR5Q1NTKSx3aW5kb3cuU2hhZHlDU1M9dm9pZCAwKTpGYyh3aW5kb3cuV2ViQ29tcG9uZW50cyYmd2luZG93LldlYkNvbXBvbmVudHMuZmxhZ3MpO3ZhciB1YT0vKD86XnxbO1xcc3tdXFxzKikoLS1bXFx3LV0qPylcXHMqOlxccyooPzooKD86Jyg/OlxcXFwnfC4pKj8nfFwiKD86XFxcXFwifC4pKj9cInxcXChbXildKj9cXCl8W159O3tdKSspfFxceyhbXn1dKilcXH0oPzooPz1bO1xcc31dKXwkKSkvZ2ksXG52YT0vKD86XnxcXFcrKUBhcHBseVxccypcXCg/KFteKTtcXG5dKilcXCk/L2dpLGZlPS8oLS1bXFx3LV0rKVxccyooWzosOyldfCQpL2dpLGdlPS8oYW5pbWF0aW9uXFxzKjopfChhbmltYXRpb24tbmFtZVxccyo6KS8sUmQ9L0BtZWRpYVxccyguKikvLGhlPS9cXHtbXn1dKlxcfS9nLFE9bnVsbDt1LnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEsYixjKXthLl9fc3R5bGVTY29wZWQ/YS5fX3N0eWxlU2NvcGVkPW51bGw6dGhpcy5qKGEsYnx8XCJcIixjKX07dS5wcm90b3R5cGUuaj1mdW5jdGlvbihhLGIsYyl7YS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiZ0aGlzLmgoYSxiLGMpO2lmKGE9XCJ0ZW1wbGF0ZVwiPT09YS5sb2NhbE5hbWU/KGEuY29udGVudHx8YS5vYikuY2hpbGROb2RlczphLmNoaWxkcmVufHxhLmNoaWxkTm9kZXMpZm9yKHZhciBkPTA7ZDxhLmxlbmd0aDtkKyspdGhpcy5qKGFbZF0sYixjKX07dS5wcm90b3R5cGUuaD1mdW5jdGlvbihhLGIsYyl7aWYoYilpZihhLmNsYXNzTGlzdCljPyhhLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHlsZS1zY29wZVwiKSxcbmEuY2xhc3NMaXN0LnJlbW92ZShiKSk6KGEuY2xhc3NMaXN0LmFkZChcInN0eWxlLXNjb3BlXCIpLGEuY2xhc3NMaXN0LmFkZChiKSk7ZWxzZSBpZihhLmdldEF0dHJpYnV0ZSl7dmFyIGQ9YS5nZXRBdHRyaWJ1dGUoaWUpO2M/ZCYmKGI9ZC5yZXBsYWNlKFwic3R5bGUtc2NvcGVcIixcIlwiKS5yZXBsYWNlKGIsXCJcIikscWEoYSxiKSk6cWEoYSwoZD9kK1wiIFwiOlwiXCIpK1wic3R5bGUtc2NvcGUgXCIrYil9fTt1LnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hLl9fY3NzQnVpbGQ7enx8XCJzaGFkeVwiPT09ZD9iPVYoYixjKTooYT1SKGEpLGI9dGhpcy5HKGIsYS5pcyxhLlYsYykrXCJcXG5cXG5cIik7cmV0dXJuIGIudHJpbSgpfTt1LnByb3RvdHlwZS5HPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXRoaXMuZihiLGMpO2I9dGhpcy5pKGIpO3ZhciBmPXRoaXM7cmV0dXJuIFYoYSxmdW5jdGlvbihhKXthLmN8fChmLkkoYSxiLGUpLGEuYz0hMCk7ZCYmZChhLGIsZSl9KX07dS5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXtyZXR1cm4gYT9cbmplK2E6XCJcIn07dS5wcm90b3R5cGUuZj1mdW5jdGlvbihhLGIpe3JldHVybiBiP1wiW2lzPVwiK2ErXCJdXCI6YX07dS5wcm90b3R5cGUuST1mdW5jdGlvbihhLGIsYyl7dGhpcy5sKGEsdGhpcy5nLGIsYyl9O3UucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSxiLGMsZCl7YS5zZWxlY3Rvcj1hLnY9dGhpcy5tKGEsYixjLGQpfTt1LnByb3RvdHlwZS5tPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWEuc2VsZWN0b3Iuc3BsaXQoUGMpO2lmKCFHYyhhKSl7YT0wO2Zvcih2YXIgZj1lLmxlbmd0aCxnO2E8ZiYmKGc9ZVthXSk7YSsrKWVbYV09Yi5jYWxsKHRoaXMsZyxjLGQpfXJldHVybiBlLmpvaW4oUGMpfTt1LnByb3RvdHlwZS5zPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UobWIsZnVuY3Rpb24oYSxjLGQpey0xPGQuaW5kZXhPZihcIitcIik/ZD1kLnJlcGxhY2UoL1xcKy9nLFwiX19fXCIpOi0xPGQuaW5kZXhPZihcIl9fX1wiKSYmKGQ9ZC5yZXBsYWNlKC9fX18vZyxcIitcIikpO3JldHVyblwiOlwiK2MrXCIoXCIrXG5kK1wiKVwifSl9O3UucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMsZT0hMTthPWEudHJpbSgpO3ZhciBmPW1iLnRlc3QoYSk7ZiYmKGE9YS5yZXBsYWNlKG1iLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5cIjpcIitiK1wiKFwiK2MucmVwbGFjZSgvXFxzL2csXCJcIikrXCIpXCJ9KSxhPXRoaXMucyhhKSk7YT1hLnJlcGxhY2Uoa2UsbmIrXCIgJDFcIik7YT1hLnJlcGxhY2UobGUsZnVuY3Rpb24oYSxmLGcpe2V8fChhPWQuQihnLGYsYixjKSxlPWV8fGEuc3RvcCxmPWEuWGEsZz1hLnZhbHVlKTtyZXR1cm4gZitnfSk7ZiYmKGE9dGhpcy5zKGEpKTtyZXR1cm4gYX07dS5wcm90b3R5cGUuQj1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1hLmluZGV4T2Yob2IpOzA8PWEuaW5kZXhPZihuYik/YT10aGlzLkYoYSxkKTowIT09ZSYmKGE9Yz90aGlzLm8oYSxjKTphKTtjPSExOzA8PWUmJihiPVwiXCIsYz0hMCk7aWYoYyl7dmFyIGY9ITA7YyYmKGE9YS5yZXBsYWNlKG1lLGZ1bmN0aW9uKGEsYil7cmV0dXJuXCIgPiBcIitcbmJ9KSl9YT1hLnJlcGxhY2UobmUsZnVuY3Rpb24oYSxiLGMpe3JldHVybidbZGlyPVwiJytjKydcIl0gJytiK1wiLCBcIitiKydbZGlyPVwiJytjKydcIl0nfSk7cmV0dXJue3ZhbHVlOmEsWGE6YixzdG9wOmZ9fTt1LnByb3RvdHlwZS5vPWZ1bmN0aW9uKGEsYil7YT1hLnNwbGl0KFFjKTthWzBdKz1iO3JldHVybiBhLmpvaW4oUWMpfTt1LnByb3RvdHlwZS5GPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5tYXRjaChSYyk7cmV0dXJuKGM9YyYmY1syXS50cmltKCl8fFwiXCIpP2NbMF0ubWF0Y2goU2MpP2EucmVwbGFjZShSYyxmdW5jdGlvbihhLGMsZil7cmV0dXJuIGIrZn0pOmMuc3BsaXQoU2MpWzBdPT09Yj9jOm9lOmEucmVwbGFjZShuYixiKX07dS5wcm90b3R5cGUuSD1mdW5jdGlvbihhKXthLnNlbGVjdG9yPWEucGFyc2VkU2VsZWN0b3I7dGhpcy53KGEpO3RoaXMubChhLHRoaXMuSyl9O3UucHJvdG90eXBlLnc9ZnVuY3Rpb24oYSl7YS5zZWxlY3Rvcj09PXBlJiYoYS5zZWxlY3Rvcj1cImh0bWxcIil9O1xudS5wcm90b3R5cGUuSz1mdW5jdGlvbihhKXtyZXR1cm4gYS5tYXRjaChvYik/dGhpcy5nKGEsVGMpOnRoaXMubyhhLnRyaW0oKSxUYyl9O0ouT2JqZWN0LmRlZmluZVByb3BlcnRpZXModS5wcm90b3R5cGUse2E6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVyblwic3R5bGUtc2NvcGVcIn19fSk7dmFyIG1iPS86KG50aFstXFx3XSspXFwoKFteKV0rKVxcKS8sVGM9XCI6bm90KC5zdHlsZS1zY29wZSlcIixQYz1cIixcIixsZT0vKF58W1xccz4rfl0rKSgoPzpcXFsuKz9cXF18W15cXHM+K349W10pKykvZyxTYz0vW1suOiMqXS8sbmI9XCI6aG9zdFwiLHBlPVwiOnJvb3RcIixvYj1cIjo6c2xvdHRlZFwiLGtlPW5ldyBSZWdFeHAoXCJeKFwiK29iK1wiKVwiKSxSYz0vKDpob3N0KSg/OlxcKCgoPzpcXChbXikoXSpcXCl8W14pKF0qKSs/KVxcKSkvLG1lPS8oPzo6OnNsb3R0ZWQpKD86XFwoKCg/OlxcKFteKShdKlxcKXxbXikoXSopKz8pXFwpKS8sbmU9LyguKik6ZGlyXFwoKD86KGx0cnxydGwpKVxcKS8sXG5qZT1cIi5cIixRYz1cIjpcIixpZT1cImNsYXNzXCIsb2U9XCJzaG91bGRfbm90X21hdGNoXCIscD1uZXcgdTt2LmdldD1mdW5jdGlvbihhKXtyZXR1cm4gYT9hLl9fc3R5bGVJbmZvOm51bGx9O3Yuc2V0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuX19zdHlsZUluZm89Yn07di5wcm90b3R5cGUuYz1mdW5jdGlvbigpe3JldHVybiB0aGlzLkR9O3YucHJvdG90eXBlLl9nZXRTdHlsZVJ1bGVzPXYucHJvdG90eXBlLmM7dmFyIFVjPWZ1bmN0aW9uKGEpe3JldHVybiBhLm1hdGNoZXN8fGEubWF0Y2hlc1NlbGVjdG9yfHxhLm1vek1hdGNoZXNTZWxlY3Rvcnx8YS5tc01hdGNoZXNTZWxlY3Rvcnx8YS5vTWF0Y2hlc1NlbGVjdG9yfHxhLndlYmtpdE1hdGNoZXNTZWxlY3Rvcn0od2luZG93LkVsZW1lbnQucHJvdG90eXBlKSxxZT1uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKFwiVHJpZGVudFwiKTtuLnByb3RvdHlwZS5IPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz17fSxkPVtdLGU9MDtXKGEsZnVuY3Rpb24oYSl7Yi5jKGEpO1xuYS5pbmRleD1lKys7Yi5HKGEudS5jc3NUZXh0LGMpfSxmdW5jdGlvbihhKXtkLnB1c2goYSl9KTthLmI9ZDthPVtdO2Zvcih2YXIgZiBpbiBjKWEucHVzaChmKTtyZXR1cm4gYX07bi5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtpZighYS51KXt2YXIgYj17fSxjPXt9O3RoaXMuYihhLGMpJiYoYi5DPWMsYS5ydWxlcz1udWxsKTtiLmNzc1RleHQ9dGhpcy5GKGEpO2EudT1ifX07bi5wcm90b3R5cGUuYj1mdW5jdGlvbihhLGIpe3ZhciBjPWEudTtpZihjKXtpZihjLkMpcmV0dXJuIE9iamVjdC5hc3NpZ24oYixjLkMpLCEwfWVsc2V7Yz1hLnBhcnNlZENzc1RleHQ7Zm9yKHZhciBkO2E9dWEuZXhlYyhjKTspe2Q9KGFbMl18fGFbM10pLnRyaW0oKTtpZihcImluaGVyaXRcIiE9PWR8fFwidW5zZXRcIiE9PWQpYlthWzFdLnRyaW0oKV09ZDtkPSEwfXJldHVybiBkfX07bi5wcm90b3R5cGUuRj1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5LKGEucGFyc2VkQ3NzVGV4dCl9O24ucHJvdG90eXBlLks9ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShoZSxcblwiXCIpLnJlcGxhY2UodWEsXCJcIil9O24ucHJvdG90eXBlLkc9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM7Yz1mZS5leGVjKGEpOyl7dmFyIGQ9Y1sxXTtcIjpcIiE9PWNbMl0mJihiW2RdPSEwKX19O24ucHJvdG90eXBlLmFhPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhKSxjPTAsZDtjPGIubGVuZ3RoO2MrKylkPWJbY10sYVtkXT10aGlzLmEoYVtkXSxhKX07bi5wcm90b3R5cGUuYT1mdW5jdGlvbihhLGIpe2lmKGEpaWYoMDw9YS5pbmRleE9mKFwiO1wiKSlhPXRoaXMuZihhLGIpO2Vsc2V7dmFyIGM9dGhpczthPUljKGEsZnVuY3Rpb24oYSxlLGYsZyl7aWYoIWUpcmV0dXJuIGErZzsoZT1jLmEoYltlXSxiKSkmJlwiaW5pdGlhbFwiIT09ZT9cImFwcGx5LXNoaW0taW5oZXJpdFwiPT09ZSYmKGU9XCJpbmhlcml0XCIpOmU9Yy5hKGJbZl18fGYsYil8fGY7cmV0dXJuIGErKGV8fFwiXCIpK2d9KX1yZXR1cm4gYSYmYS50cmltKCl8fFwiXCJ9O24ucHJvdG90eXBlLmY9ZnVuY3Rpb24oYSxcbmIpe2E9YS5zcGxpdChcIjtcIik7Zm9yKHZhciBjPTAsZCxlO2M8YS5sZW5ndGg7YysrKWlmKGQ9YVtjXSl7dmEubGFzdEluZGV4PTA7aWYoZT12YS5leGVjKGQpKWQ9dGhpcy5hKGJbZVsxXV0sYik7ZWxzZSBpZihlPWQuaW5kZXhPZihcIjpcIiksLTEhPT1lKXt2YXIgZj1kLnN1YnN0cmluZyhlKTtmPWYudHJpbSgpO2Y9dGhpcy5hKGYsYil8fGY7ZD1kLnN1YnN0cmluZygwLGUpK2Z9YVtjXT1kJiZkLmxhc3RJbmRleE9mKFwiO1wiKT09PWQubGVuZ3RoLTE/ZC5zbGljZSgwLC0xKTpkfHxcIlwifXJldHVybiBhLmpvaW4oXCI7XCIpfTtuLnByb3RvdHlwZS5CPWZ1bmN0aW9uKGEsYil7dmFyIGM9XCJcIjthLnV8fHRoaXMuYyhhKTthLnUuY3NzVGV4dCYmKGM9dGhpcy5mKGEudS5jc3NUZXh0LGIpKTthLmNzc1RleHQ9Y307bi5wcm90b3R5cGUudz1mdW5jdGlvbihhLGIpe3ZhciBjPWEuY3NzVGV4dCxkPWEuY3NzVGV4dDtudWxsPT1hLnlhJiYoYS55YT1nZS50ZXN0KGMpKTtpZihhLnlhKWlmKG51bGw9PVxuYS5ZKXthLlk9W107Zm9yKHZhciBlIGluIGIpZD1iW2VdLGQ9ZChjKSxjIT09ZCYmKGM9ZCxhLlkucHVzaChlKSl9ZWxzZXtmb3IoZT0wO2U8YS5ZLmxlbmd0aDsrK2UpZD1iW2EuWVtlXV0sYz1kKGMpO2Q9Y31hLmNzc1RleHQ9ZH07bi5wcm90b3R5cGUuTz1mdW5jdGlvbihhLGIpe3ZhciBjPXt9LGQ9dGhpcyxlPVtdO1coYSxmdW5jdGlvbihhKXthLnV8fGQuYyhhKTt2YXIgZj1hLnZ8fGEucGFyc2VkU2VsZWN0b3I7YiYmYS51LkMmJmYmJlVjLmNhbGwoYixmKSYmKGQuYihhLGMpLGE9YS5pbmRleCxmPXBhcnNlSW50KGEvMzIsMTApLGVbZl09KGVbZl18fDApfDE8PGElMzIpfSxudWxsLCEwKTtyZXR1cm57QzpjLGtleTplfX07bi5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSxiLGMsZCl7Yi51fHx0aGlzLmMoYik7aWYoYi51LkMpe3ZhciBlPVIoYSk7YT1lLmlzO2U9ZS5WO2U9YT9wLmYoYSxlKTpcImh0bWxcIjt2YXIgZj1iLnBhcnNlZFNlbGVjdG9yLGc9XCI6aG9zdCA+ICpcIj09PWZ8fFxuXCJodG1sXCI9PT1mLGg9MD09PWYuaW5kZXhPZihcIjpob3N0XCIpJiYhZztcInNoYWR5XCI9PT1jJiYoZz1mPT09ZStcIiA+ICouXCIrZXx8LTEhPT1mLmluZGV4T2YoXCJodG1sXCIpLGg9IWcmJjA9PT1mLmluZGV4T2YoZSkpO1wic2hhZG93XCI9PT1jJiYoZz1cIjpob3N0ID4gKlwiPT09Znx8XCJodG1sXCI9PT1mLGg9aCYmIWcpO2lmKGd8fGgpYz1lLGgmJih6JiYhYi52JiYoYi52PXAubShiLHAuZyxwLmkoYSksZSkpLGM9Yi52fHxlKSxkKHtpYjpjLGJiOmgscWI6Z30pfX07bi5wcm90b3R5cGUuST1mdW5jdGlvbihhLGIpe3ZhciBjPXt9LGQ9e30sZT10aGlzLGY9YiYmYi5fX2Nzc0J1aWxkO1coYixmdW5jdGlvbihiKXtlLmNhKGEsYixmLGZ1bmN0aW9uKGYpe1VjLmNhbGwoYS5wYnx8YSxmLmliKSYmKGYuYmI/ZS5iKGIsYyk6ZS5iKGIsZCkpfSl9LG51bGwsITApO3JldHVybntnYjpkLGFiOmN9fTtuLnByb3RvdHlwZS5iYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcyxlPVIoYSksZj1wLmYoZS5pcyxcbmUuViksZz1uZXcgUmVnRXhwKFwiKD86XnxbXi4jWzpdKVwiKyhhLmV4dGVuZHM/XCJcXFxcXCIrZi5zbGljZSgwLC0xKStcIlxcXFxdXCI6ZikrXCIoJHxbLjpbXFxcXHM+K35dKVwiKTtlPXYuZ2V0KGEpLkQ7dmFyIGg9dGhpcy5oKGUsYyk7cmV0dXJuIHAuYyhhLGUsZnVuY3Rpb24oYSl7ZC5CKGEsYik7enx8R2MoYSl8fCFhLmNzc1RleHR8fChkLncoYSxoKSxkLmwoYSxnLGYsYykpfSl9O24ucHJvdG90eXBlLmg9ZnVuY3Rpb24oYSxiKXthPWEuYjt2YXIgYz17fTtpZigheiYmYSlmb3IodmFyIGQ9MCxlPWFbZF07ZDxhLmxlbmd0aDtlPWFbKytkXSl0aGlzLmooZSxiKSxjW2Uua2V5ZnJhbWVzTmFtZV09dGhpcy5pKGUpO3JldHVybiBjfTtuLnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYi5yZXBsYWNlKGEuZixhLmEpfX07bi5wcm90b3R5cGUuaj1mdW5jdGlvbihhLGIpe2EuZj1uZXcgUmVnRXhwKGEua2V5ZnJhbWVzTmFtZSxcImdcIik7YS5hPWEua2V5ZnJhbWVzTmFtZStcblwiLVwiK2I7YS52PWEudnx8YS5zZWxlY3RvcjthLnNlbGVjdG9yPWEudi5yZXBsYWNlKGEua2V5ZnJhbWVzTmFtZSxhLmEpfTtuLnByb3RvdHlwZS5sPWZ1bmN0aW9uKGEsYixjLGQpe2Eudj1hLnZ8fGEuc2VsZWN0b3I7ZD1cIi5cIitkO2Zvcih2YXIgZT1hLnYuc3BsaXQoXCIsXCIpLGY9MCxnPWUubGVuZ3RoLGg7ZjxnJiYoaD1lW2ZdKTtmKyspZVtmXT1oLm1hdGNoKGIpP2gucmVwbGFjZShjLGQpOmQrXCIgXCIraDthLnNlbGVjdG9yPWUuam9pbihcIixcIil9O24ucHJvdG90eXBlLm89ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIsZT1kO2MmJihlPWQucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHMqeC1zY29wZVxcXFxzKlwiK2MrXCJcXFxccypcIixcImdcIiksXCIgXCIpKTtlKz0oZT9cIiBcIjpcIlwiKStcIngtc2NvcGUgXCIrYjtkIT09ZSYmcWEoYSxlKX07bi5wcm90b3R5cGUucz1mdW5jdGlvbihhLGIsYyxkKXtiPWQ/ZC50ZXh0Q29udGVudHx8XCJcIjp0aGlzLmJhKGEsYixjKTt2YXIgZT1cbnYuZ2V0KGEpLGY9ZS5hO2YmJiF6JiZmIT09ZCYmKGYuX3VzZUNvdW50LS0sMD49Zi5fdXNlQ291bnQmJmYucGFyZW50Tm9kZSYmZi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGYpKTt6P2UuYT8oZS5hLnRleHRDb250ZW50PWIsZD1lLmEpOmImJihkPWViKGIsYyxhLnNoYWRvd1Jvb3QsZS5iKSk6ZD9kLnBhcmVudE5vZGV8fChxZSYmLTE8Yi5pbmRleE9mKFwiQG1lZGlhXCIpJiYoZC50ZXh0Q29udGVudD1iKSxIYyhkLG51bGwsZS5iKSk6YiYmKGQ9ZWIoYixjLG51bGwsZS5iKSk7ZCYmKGQuX3VzZUNvdW50PWQuX3VzZUNvdW50fHwwLGUuYSE9ZCYmZC5fdXNlQ291bnQrKyxlLmE9ZCk7cmV0dXJuIGR9O24ucHJvdG90eXBlLm09ZnVuY3Rpb24oYSxiKXt2YXIgYz1wYShhKSxkPXRoaXM7YS50ZXh0Q29udGVudD1WKGMsZnVuY3Rpb24oYSl7dmFyIGM9YS5jc3NUZXh0PWEucGFyc2VkQ3NzVGV4dDthLnUmJmEudS5jc3NUZXh0JiYoYz1jLnJlcGxhY2UoRi53YSxcIlwiKS5yZXBsYWNlKEYuQWEsXG5cIlwiKSxhLmNzc1RleHQ9ZC5mKGMsYikpfSl9O0ouT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobi5wcm90b3R5cGUse2c6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVyblwieC1zY29wZVwifX19KTt2YXIgTT1uZXcgbixwYj17fSx3YT13aW5kb3cuY3VzdG9tRWxlbWVudHM7aWYod2EmJiF6KXt2YXIgcmU9d2EuZGVmaW5lO3dhLmRlZmluZT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcIiBTaGFkeSBET00gc3R5bGVzIGZvciBcIithK1wiIFwiKSxlPWRvY3VtZW50LmhlYWQ7ZS5pbnNlcnRCZWZvcmUoZCwoUT9RLm5leHRTaWJsaW5nOm51bGwpfHxlLmZpcnN0Q2hpbGQpO1E9ZDtwYlthXT1kO3JldHVybiByZS5jYWxsKHdhLGEsYixjKX19aGEucHJvdG90eXBlLmE9ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdO2lmKGEuQ1tlXSE9PWJbZV0pcmV0dXJuITF9cmV0dXJuITB9O1xuaGEucHJvdG90eXBlLmI9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dGhpcy5jYWNoZVthXXx8W107ZS5wdXNoKHtDOmIsc3R5bGVFbGVtZW50OmMsQTpkfSk7ZS5sZW5ndGg+dGhpcy5jJiZlLnNoaWZ0KCk7dGhpcy5jYWNoZVthXT1lfTtoYS5wcm90b3R5cGUuZmV0Y2g9ZnVuY3Rpb24oYSxiLGMpe2lmKGE9dGhpcy5jYWNoZVthXSlmb3IodmFyIGQ9YS5sZW5ndGgtMTswPD1kO2QtLSl7dmFyIGU9YVtkXTtpZih0aGlzLmEoZSxiLGMpKXJldHVybiBlfX07aWYoIXope3ZhciBWYz1uZXcgTXV0YXRpb25PYnNlcnZlcihKYyksV2M9ZnVuY3Rpb24oYSl7VmMub2JzZXJ2ZShhLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pfTtpZih3aW5kb3cuY3VzdG9tRWxlbWVudHMmJiF3aW5kb3cuY3VzdG9tRWxlbWVudHMucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaylXYyhkb2N1bWVudCk7ZWxzZXt2YXIgcWI9ZnVuY3Rpb24oKXtXYyhkb2N1bWVudC5ib2R5KX07d2luZG93LkhUTUxJbXBvcnRzP1xud2luZG93LkhUTUxJbXBvcnRzLndoZW5SZWFkeShxYik6cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7aWYoXCJsb2FkaW5nXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlKXt2YXIgYT1mdW5jdGlvbigpe3FiKCk7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixhKX07ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixhKX1lbHNlIHFiKCl9KX1OPWZ1bmN0aW9uKCl7SmMoVmMudGFrZVJlY29yZHMoKSl9fXZhciByYT17fSxVZD1Qcm9taXNlLnJlc29sdmUoKSxmYj1udWxsLExjPXdpbmRvdy5IVE1MSW1wb3J0cyYmd2luZG93LkhUTUxJbXBvcnRzLndoZW5SZWFkeXx8bnVsbCxnYix4YT1udWxsLGZhPW51bGw7cS5wcm90b3R5cGUueGE9ZnVuY3Rpb24oKXshdGhpcy5lbnF1ZXVlZCYmZmEmJih0aGlzLmVucXVldWVkPSEwLHViKGZhKSl9O3EucHJvdG90eXBlLmI9ZnVuY3Rpb24oYSl7YS5fX3NlZW5CeVNoYWR5Q1NTfHxcbihhLl9fc2VlbkJ5U2hhZHlDU1M9ITAsdGhpcy5jdXN0b21TdHlsZXMucHVzaChhKSx0aGlzLnhhKCkpfTtxLnByb3RvdHlwZS5hPWZ1bmN0aW9uKGEpe3JldHVybiBhLl9fc2hhZHlDU1NDYWNoZWRTdHlsZT9hLl9fc2hhZHlDU1NDYWNoZWRTdHlsZTphLmdldFN0eWxlP2EuZ2V0U3R5bGUoKTphfTtxLnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMuY3VzdG9tU3R5bGVzLGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtpZighYy5fX3NoYWR5Q1NTQ2FjaGVkU3R5bGUpe3ZhciBkPXRoaXMuYShjKTtkJiYoZD1kLl9fYXBwbGllZEVsZW1lbnR8fGQseGEmJnhhKGQpLGMuX19zaGFkeUNTU0NhY2hlZFN0eWxlPWQpfX1yZXR1cm4gYX07cS5wcm90b3R5cGUuYWRkQ3VzdG9tU3R5bGU9cS5wcm90b3R5cGUuYjtxLnByb3RvdHlwZS5nZXRTdHlsZUZvckN1c3RvbVN0eWxlPXEucHJvdG90eXBlLmE7cS5wcm90b3R5cGUucHJvY2Vzc1N0eWxlcz1xLnByb3RvdHlwZS5jO1xuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMocS5wcm90b3R5cGUse3RyYW5zZm9ybUNhbGxiYWNrOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4geGF9LHNldDpmdW5jdGlvbihhKXt4YT1hfX0sdmFsaWRhdGVDYWxsYmFjazp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGZhfSxzZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9ITE7ZmF8fChiPSEwKTtmYT1hO2ImJnRoaXMueGEoKX19fSk7dmFyIFhjPW5ldyBoYTtnLnByb3RvdHlwZS53PWZ1bmN0aW9uKCl7TigpfTtnLnByb3RvdHlwZS5JPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubVthXT0odGhpcy5tW2FdfHwwKSsxO3JldHVybiBhK1wiLVwiK2J9O2cucHJvdG90eXBlLkhhPWZ1bmN0aW9uKGEpe3JldHVybiBwYShhKX07Zy5wcm90b3R5cGUuSmE9ZnVuY3Rpb24oYSl7cmV0dXJuIFYoYSl9O2cucHJvdG90eXBlLkg9ZnVuY3Rpb24oYSl7YT1hLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlXCIpO2Zvcih2YXIgYj1bXSxjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPVxuYVtjXTtiLnB1c2goZC50ZXh0Q29udGVudCk7ZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpfXJldHVybiBiLmpvaW4oXCJcIikudHJpbSgpfTtnLnByb3RvdHlwZS5hYT1mdW5jdGlvbihhKXtyZXR1cm4oYT1hLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcInN0eWxlXCIpKT9hLmdldEF0dHJpYnV0ZShcImNzcy1idWlsZFwiKXx8XCJcIjpcIlwifTtnLnByb3RvdHlwZS5wcmVwYXJlVGVtcGxhdGU9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhLmYpe2EuZj0hMDthLm5hbWU9YjthLmV4dGVuZHM9YztyYVtiXT1hO3ZhciBkPXRoaXMuYWEoYSksZT10aGlzLkgoYSk7Yz17aXM6YixleHRlbmRzOmMsbWI6ZH07enx8cC5iKGEuY29udGVudCxiKTt0aGlzLmMoKTt2YXIgZj12YS50ZXN0KGUpfHx1YS50ZXN0KGUpO3ZhLmxhc3RJbmRleD0wO3VhLmxhc3RJbmRleD0wO2U9ZGIoZSk7ZiYmQSYmdGhpcy5hJiZ0aGlzLmEudHJhbnNmb3JtUnVsZXMoZSxiKTthLl9zdHlsZUFzdD1lO2EuZz1kO2Q9W107QXx8KGQ9TS5IKGEuX3N0eWxlQXN0KSk7XG5pZighZC5sZW5ndGh8fEEpYj10aGlzLk8oYyxhLl9zdHlsZUFzdCx6P2EuY29udGVudDpudWxsLHBiW2JdKSxhLmE9YjthLmM9ZH19O2cucHJvdG90eXBlLk89ZnVuY3Rpb24oYSxiLGMsZCl7Yj1wLmMoYSxiKTtpZihiLmxlbmd0aClyZXR1cm4gZWIoYixhLmlzLGMsZCl9O2cucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEpe3ZhciBiPVIoYSksYz1iLmlzO2I9Yi5WO3ZhciBkPXBiW2NdO2M9cmFbY107aWYoYyl7dmFyIGU9Yy5fc3R5bGVBc3Q7dmFyIGY9Yy5jfXJldHVybiB2LnNldChhLG5ldyB2KGUsZCxmLDAsYikpfTtnLnByb3RvdHlwZS5GPWZ1bmN0aW9uKCl7IXRoaXMuYSYmd2luZG93LlNoYWR5Q1NTJiZ3aW5kb3cuU2hhZHlDU1MuQXBwbHlTaGltJiYodGhpcy5hPXdpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW0sdGhpcy5hLmludmFsaWRDYWxsYmFjaz1TZCl9O2cucHJvdG90eXBlLkc9ZnVuY3Rpb24oKXt2YXIgYT10aGlzOyF0aGlzLmImJndpbmRvdy5TaGFkeUNTUyYmd2luZG93LlNoYWR5Q1NTLkN1c3RvbVN0eWxlSW50ZXJmYWNlJiZcbih0aGlzLmI9d2luZG93LlNoYWR5Q1NTLkN1c3RvbVN0eWxlSW50ZXJmYWNlLHRoaXMuYi50cmFuc2Zvcm1DYWxsYmFjaz1mdW5jdGlvbihiKXthLnMoYil9LHRoaXMuYi52YWxpZGF0ZUNhbGxiYWNrPWZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7KGEuYi5lbnF1ZXVlZHx8YS5pKSYmYS5mKCl9KX0pfTtnLnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7dGhpcy5GKCk7dGhpcy5HKCl9O2cucHJvdG90eXBlLmY9ZnVuY3Rpb24oKXt0aGlzLmMoKTtpZih0aGlzLmIpe3ZhciBhPXRoaXMuYi5wcm9jZXNzU3R5bGVzKCk7dGhpcy5iLmVucXVldWVkJiYoQT90aGlzLkZhKGEpOih0aGlzLm8odGhpcy5nLHRoaXMuaCksdGhpcy5CKGEpKSx0aGlzLmIuZW5xdWV1ZWQ9ITEsdGhpcy5pJiYhQSYmdGhpcy5zdHlsZURvY3VtZW50KCkpfX07Zy5wcm90b3R5cGUuc3R5bGVFbGVtZW50PWZ1bmN0aW9uKGEsYil7dmFyIGM9UihhKS5pcyxkPXYuZ2V0KGEpO2R8fChkPXRoaXMuY2EoYSkpO1xudGhpcy5qKGEpfHwodGhpcy5pPSEwKTtiJiYoZC5OPWQuTnx8e30sT2JqZWN0LmFzc2lnbihkLk4sYikpO2lmKEEpe2lmKGQuTil7Yj1kLk47Zm9yKHZhciBlIGluIGIpbnVsbD09PWU/YS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShlKTphLnN0eWxlLnNldFByb3BlcnR5KGUsYltlXSl9aWYoKChlPXJhW2NdKXx8dGhpcy5qKGEpKSYmZSYmZS5hJiYhS2MoZSkpe2lmKEtjKGUpfHxlLl9hcHBseVNoaW1WYWxpZGF0aW5nVmVyc2lvbiE9PWUuX2FwcGx5U2hpbU5leHRWZXJzaW9uKXRoaXMuYygpLHRoaXMuYSYmdGhpcy5hLnRyYW5zZm9ybVJ1bGVzKGUuX3N0eWxlQXN0LGMpLGUuYS50ZXh0Q29udGVudD1wLmMoYSxkLkQpLFRkKGUpO3omJihjPWEuc2hhZG93Um9vdCkmJihjLnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVwiKS50ZXh0Q29udGVudD1wLmMoYSxkLkQpKTtkLkQ9ZS5fc3R5bGVBc3R9fWVsc2UgdGhpcy5vKGEsZCksZC5sYSYmZC5sYS5sZW5ndGgmJnRoaXMuSyhhLGQpfTtnLnByb3RvdHlwZS5sPVxuZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5nZXRSb290Tm9kZSgpLmhvc3QpP3YuZ2V0KGEpP2E6dGhpcy5sKGEpOnRoaXMuZ307Zy5wcm90b3R5cGUuaj1mdW5jdGlvbihhKXtyZXR1cm4gYT09PXRoaXMuZ307Zy5wcm90b3R5cGUuSz1mdW5jdGlvbihhLGIpe3ZhciBjPVIoYSkuaXMsZD1YYy5mZXRjaChjLGIuSixiLmxhKSxlPWQ/ZC5zdHlsZUVsZW1lbnQ6bnVsbCxmPWIuQTtiLkE9ZCYmZC5BfHx0aGlzLkkoYyk7ZT1NLnMoYSxiLkosYi5BLGUpO3p8fE0ubyhhLGIuQSxmKTtkfHxYYy5iKGMsYi5KLGUsYi5BKX07Zy5wcm90b3R5cGUubz1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMubChhKSxkPXYuZ2V0KGMpO2M9T2JqZWN0LmNyZWF0ZShkLkp8fG51bGwpO3ZhciBlPU0uSShhLGIuRCk7YT1NLk8oZC5ELGEpLkM7T2JqZWN0LmFzc2lnbihjLGUuYWIsYSxlLmdiKTt0aGlzLmJhKGMsYi5OKTtNLmFhKGMpO2IuSj1jfTtnLnByb3RvdHlwZS5iYT1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYyBpbiBiKXt2YXIgZD1cbmJbY107aWYoZHx8MD09PWQpYVtjXT1kfX07Zy5wcm90b3R5cGUuc3R5bGVEb2N1bWVudD1mdW5jdGlvbihhKXt0aGlzLnN0eWxlU3VidHJlZSh0aGlzLmcsYSl9O2cucHJvdG90eXBlLnN0eWxlU3VidHJlZT1mdW5jdGlvbihhLGIpe3ZhciBjPWEuc2hhZG93Um9vdDsoY3x8dGhpcy5qKGEpKSYmdGhpcy5zdHlsZUVsZW1lbnQoYSxiKTtpZihiPWMmJihjLmNoaWxkcmVufHxjLmNoaWxkTm9kZXMpKWZvcihhPTA7YTxiLmxlbmd0aDthKyspdGhpcy5zdHlsZVN1YnRyZWUoYlthXSk7ZWxzZSBpZihhPWEuY2hpbGRyZW58fGEuY2hpbGROb2Rlcylmb3IoYj0wO2I8YS5sZW5ndGg7YisrKXRoaXMuc3R5bGVTdWJ0cmVlKGFbYl0pfTtnLnByb3RvdHlwZS5GYT1mdW5jdGlvbihhKXtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9dGhpcy5iLmdldFN0eWxlRm9yQ3VzdG9tU3R5bGUoYVtiXSk7YyYmdGhpcy5FYShjKX19O2cucHJvdG90eXBlLkI9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVxuMDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9dGhpcy5iLmdldFN0eWxlRm9yQ3VzdG9tU3R5bGUoYVtiXSk7YyYmTS5tKGMsdGhpcy5oLkopfX07Zy5wcm90b3R5cGUucz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9cGEoYSk7VyhjLGZ1bmN0aW9uKGEpe3o/cC53KGEpOnAuSChhKTtBJiYoYi5jKCksYi5hJiZiLmEudHJhbnNmb3JtUnVsZShhKSl9KTtBP2EudGV4dENvbnRlbnQ9VihjKTp0aGlzLmguRC5ydWxlcy5wdXNoKGMpfTtnLnByb3RvdHlwZS5FYT1mdW5jdGlvbihhKXtpZihBJiZ0aGlzLmEpe3ZhciBiPXBhKGEpO3RoaXMuYygpO3RoaXMuYS50cmFuc2Zvcm1SdWxlcyhiKTthLnRleHRDb250ZW50PVYoYil9fTtnLnByb3RvdHlwZS5nZXRDb21wdXRlZFN0eWxlVmFsdWU9ZnVuY3Rpb24oYSxiKXt2YXIgYztBfHwoYz0odi5nZXQoYSl8fHYuZ2V0KHRoaXMubChhKSkpLkpbYl0pO3JldHVybihjPWN8fHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGEpLmdldFByb3BlcnR5VmFsdWUoYikpP1xuYy50cmltKCk6XCJcIn07Zy5wcm90b3R5cGUuSWE9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmdldFJvb3ROb2RlKCk7Yj1iP2Iuc3BsaXQoL1xccy8pOltdO2M9Yy5ob3N0JiZjLmhvc3QubG9jYWxOYW1lO2lmKCFjKXt2YXIgZD1hLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpO2lmKGQpe2Q9ZC5zcGxpdCgvXFxzLyk7Zm9yKHZhciBlPTA7ZTxkLmxlbmd0aDtlKyspaWYoZFtlXT09PXAuYSl7Yz1kW2UrMV07YnJlYWt9fX1jJiZiLnB1c2gocC5hLGMpO0F8fChjPXYuZ2V0KGEpKSYmYy5BJiZiLnB1c2goTS5nLGMuQSk7cWEoYSxiLmpvaW4oXCIgXCIpKX07Zy5wcm90b3R5cGUuR2E9ZnVuY3Rpb24oYSl7cmV0dXJuIHYuZ2V0KGEpfTtnLnByb3RvdHlwZS5mbHVzaD1nLnByb3RvdHlwZS53O2cucHJvdG90eXBlLnByZXBhcmVUZW1wbGF0ZT1nLnByb3RvdHlwZS5wcmVwYXJlVGVtcGxhdGU7Zy5wcm90b3R5cGUuc3R5bGVFbGVtZW50PWcucHJvdG90eXBlLnN0eWxlRWxlbWVudDtnLnByb3RvdHlwZS5zdHlsZURvY3VtZW50PVxuZy5wcm90b3R5cGUuc3R5bGVEb2N1bWVudDtnLnByb3RvdHlwZS5zdHlsZVN1YnRyZWU9Zy5wcm90b3R5cGUuc3R5bGVTdWJ0cmVlO2cucHJvdG90eXBlLmdldENvbXB1dGVkU3R5bGVWYWx1ZT1nLnByb3RvdHlwZS5nZXRDb21wdXRlZFN0eWxlVmFsdWU7Zy5wcm90b3R5cGUuc2V0RWxlbWVudENsYXNzPWcucHJvdG90eXBlLklhO2cucHJvdG90eXBlLl9zdHlsZUluZm9Gb3JOb2RlPWcucHJvdG90eXBlLkdhO2cucHJvdG90eXBlLnRyYW5zZm9ybUN1c3RvbVN0eWxlRm9yRG9jdW1lbnQ9Zy5wcm90b3R5cGUucztnLnByb3RvdHlwZS5nZXRTdHlsZUFzdD1nLnByb3RvdHlwZS5IYTtnLnByb3RvdHlwZS5zdHlsZUFzdFRvU3RyaW5nPWcucHJvdG90eXBlLkphO2cucHJvdG90eXBlLmZsdXNoQ3VzdG9tU3R5bGVzPWcucHJvdG90eXBlLmY7T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZy5wcm90b3R5cGUse25hdGl2ZVNoYWRvdzp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHp9fSxuYXRpdmVDc3M6e2dldDpmdW5jdGlvbigpe3JldHVybiBBfX19KTtcbnZhciBIPW5ldyBnO2lmKHdpbmRvdy5TaGFkeUNTUyl7dmFyIFljPXdpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW07dmFyIFpjPXdpbmRvdy5TaGFkeUNTUy5DdXN0b21TdHlsZUludGVyZmFjZX13aW5kb3cuU2hhZHlDU1M9e1Njb3BpbmdTaGltOkgscHJlcGFyZVRlbXBsYXRlOmZ1bmN0aW9uKGEsYixjKXtILmYoKTtILnByZXBhcmVUZW1wbGF0ZShhLGIsYyl9LHN0eWxlU3VidHJlZTpmdW5jdGlvbihhLGIpe0guZigpO0guc3R5bGVTdWJ0cmVlKGEsYil9LHN0eWxlRWxlbWVudDpmdW5jdGlvbihhKXtILmYoKTtILnN0eWxlRWxlbWVudChhKX0sc3R5bGVEb2N1bWVudDpmdW5jdGlvbihhKXtILmYoKTtILnN0eWxlRG9jdW1lbnQoYSl9LGdldENvbXB1dGVkU3R5bGVWYWx1ZTpmdW5jdGlvbihhLGIpe3JldHVybiBILmdldENvbXB1dGVkU3R5bGVWYWx1ZShhLGIpfSxuYXRpdmVDc3M6QSxuYXRpdmVTaGFkb3c6en07WWMmJih3aW5kb3cuU2hhZHlDU1MuQXBwbHlTaGltPVljKTtaYyYmKHdpbmRvdy5TaGFkeUNTUy5DdXN0b21TdHlsZUludGVyZmFjZT1cblpjKTt2YXIgcmI9d2luZG93LmN1c3RvbUVsZW1lbnRzLHlhPXdpbmRvdy5IVE1MSW1wb3J0czt3aW5kb3cuV2ViQ29tcG9uZW50cz13aW5kb3cuV2ViQ29tcG9uZW50c3x8e307aWYocmImJnJiLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2spe3ZhciB6YSwkYz1mdW5jdGlvbigpe2lmKHphKXt2YXIgYT16YTt6YT1udWxsO2EoKTtyZXR1cm4hMH19LGFkPXlhLndoZW5SZWFkeTtyYi5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrKGZ1bmN0aW9uKGEpe3phPWE7YWQoJGMpfSk7eWEud2hlblJlYWR5PWZ1bmN0aW9uKGEpe2FkKGZ1bmN0aW9uKCl7JGMoKT95YS53aGVuUmVhZHkoYSk6YSgpfSl9fXlhLndoZW5SZWFkeShmdW5jdGlvbigpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe3dpbmRvdy5XZWJDb21wb25lbnRzLnJlYWR5PSEwO2RvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiV2ViQ29tcG9uZW50c1JlYWR5XCIse2J1YmJsZXM6ITB9KSl9KX0pO1xudmFyIGJkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtiZC50ZXh0Q29udGVudD1cImJvZHkge3RyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbiAwLjJzOyB9IFxcbmJvZHlbdW5yZXNvbHZlZF0ge29wYWNpdHk6IDA7IGRpc3BsYXk6IGJsb2NrOyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7IH0gXFxuXCI7dmFyIGNkPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO2NkLmluc2VydEJlZm9yZShiZCxjZC5maXJzdENoaWxkKX0pKCk7fSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2ViY29tcG9uZW50cy1oaS1zZC1jZS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy93ZWJjb21wb25lbnRzLWhpLXNkLWNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnY29tbW9uL1BvbHlnb24nO1xyXG5pbXBvcnQgeyBMRVggfSBmcm9tICdMRVgnO1xyXG5cclxuaW1wb3J0IHsgUG9seWdvbkZpbGxlciB9IGZyb20gJ3BvbHlnb24tZmlsbGVyL1BvbHlnb25GaWxsZXInO1xyXG5cclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICdSZW5kZXJlcic7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgQ2xvc2VzdFBhdGhGaW5kZXIgfSBmcm9tICdzZXJ2aWNlcy9DbG9zZXN0UGF0aEZpbmRlcic7XHJcbmltcG9ydCB7IEltYWdlRG93bmxvYWRlciB9IGZyb20gJ3NlcnZpY2VzL0ltYWdlRG93bmxvYWRlcic7XHJcbmltcG9ydCB7IElucHV0RGF0YUluaXRpYWxpemVyIH0gZnJvbSAnc2VydmljZXMvSW5wdXREYXRhSW5pdGlhbGl6ZXInO1xyXG5pbXBvcnQgeyBMaWdodFNpbXVsYXRvciB9IGZyb20gJ3NlcnZpY2VzL0xpZ2h0U2ltdWxhdG9yJztcclxuaW1wb3J0IHsgUG9seWdvbkNsaXBwZXIgfSBmcm9tICdzZXJ2aWNlcy9Qb2x5Z29uQ2xpcHBlcic7XHJcblxyXG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICd1aS9VSUNvbnRyb2xsZXInO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgUmVuZGVyRmluaXNoZWRFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJGaW5pc2hlZEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XHJcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHByaXZhdGUgdWlDb250cm9sbGVyOiBVSUNvbnRyb2xsZXI7XHJcbiAgcHJpdmF0ZSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBwb2x5Z29uRmlsbGVyOiBQb2x5Z29uRmlsbGVyO1xyXG4gIHByaXZhdGUgcG9seWdvbkxheWVyOiBMYXllcjtcclxuXHJcbiAgcHJpdmF0ZSBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuICBwcml2YXRlIGxpZ2h0U2ltdWxhdG9yOiBMaWdodFNpbXVsYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBpc1JlbmRlcmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXNOZXh0UmVuZGVyUXVldWVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBuZXcgRXZlbnRBZ2dyZWdhdG9yKCk7XHJcbiAgICB0aGlzLmltYWdlRG93bmxvYWRlciA9IG5ldyBJbWFnZURvd25sb2FkZXIoeyBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yIH0pO1xyXG4gICAgdGhpcy5wb2x5Z29uRmlsbGVyID0gbmV3IFBvbHlnb25GaWxsZXIoe1xyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yXHJcbiAgICB9KTtcclxuICAgIHRoaXMubGlnaHRTaW11bGF0b3IgPSBuZXcgTGlnaHRTaW11bGF0b3Ioe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBjZW50ZXJQb2ludDogbmV3IFBvaW50KHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMilcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICBwb2x5Z29uRmlsbGVyOiB0aGlzLnBvbHlnb25GaWxsZXJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGFnZSA9IG5ldyBTdGFnZSgpO1xyXG5cclxuICAgIHRoaXMudWlDb250cm9sbGVyID0gbmV3IFVJQ29udHJvbGxlcih7XHJcbiAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZSxcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgaW1hZ2VEb3dubG9hZGVyOiB0aGlzLmltYWdlRG93bmxvYWRlcixcclxuICAgICAgcG9seWdvbkNsaXBwZXI6IG5ldyBQb2x5Z29uQ2xpcHBlcigpLFxyXG4gICAgICBjbG9zZXN0UGF0aEZpbmRlcjogbmV3IENsb3Nlc3RQYXRoRmluZGVyKClcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub25SZW5kZXJFdmVudCA9IHRoaXMub25SZW5kZXJFdmVudC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGFydFJlbmRlcmluZyA9IHRoaXMuc3RhcnRSZW5kZXJpbmcuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25GaWxsaW5nRmluaXNoZWQgPSB0aGlzLm9uRmlsbGluZ0ZpbmlzaGVkLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaW5pdCgpIHtcclxuICAgIHRoaXMucG9seWdvbkZpbGxlci5maWxsaW5nRmluaXNoZWRDYWxsYmFjayA9IHRoaXMub25GaWxsaW5nRmluaXNoZWQ7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IG5ldyBMYXllcihMRVguUE9MWUdPTl9MQVlFUl9OQU1FKTtcclxuICAgIHRoaXMuc3RhZ2UubGF5ZXJzLnB1c2godGhpcy5wb2x5Z29uTGF5ZXIpO1xyXG5cclxuICAgIHRoaXMucG9seWdvbkZpbGxlci5pbml0KCk7XHJcbiAgICB0aGlzLmxpZ2h0U2ltdWxhdG9yLmluaXQoKTtcclxuICAgIHRoaXMudWlDb250cm9sbGVyLmluaXQoKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dERhdGFJbml0aWFsaXplciA9IG5ldyBJbnB1dERhdGFJbml0aWFsaXplcih7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIGltYWdlRG93bmxvYWRlcjogdGhpcy5pbWFnZURvd25sb2FkZXIsXHJcbiAgICAgIHBvbHlnb25MYXllcjogdGhpcy5wb2x5Z29uTGF5ZXJcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IGlucHV0RGF0YUluaXRpYWxpemVyLmluaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5wb2x5Z29uRmlsbGVyLmRlc3Ryb3koKTtcclxuICAgIHRoaXMubGlnaHRTaW11bGF0b3IuZGVzdHJveSgpO1xyXG4gICAgdGhpcy51aUNvbnRyb2xsZXIuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblJlbmRlckV2ZW50KGV2ZW50OiBSZW5kZXJFdmVudCkge1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNSZW5kZXJpbmcpIHtcclxuICAgICAgdGhpcy5pc05leHRSZW5kZXJRdWV1ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNSZW5kZXJpbmcgPSB0cnVlO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RhcnRSZW5kZXJpbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydFJlbmRlcmluZygpIHtcclxuICAgIHRoaXMucG9seWdvbkZpbGxlci5maWxsUG9seWdvbnMoPFBvbHlnb25bXT50aGlzLnBvbHlnb25MYXllci5wYXRocyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRmlsbGluZ0ZpbmlzaGVkKCkge1xyXG4gICAgdGhpcy5zdGFnZS5yZW5kZXIodGhpcy5yZW5kZXJlcik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJGaW5pc2hlZEV2ZW50KCkpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzTmV4dFJlbmRlclF1ZXVlZCkge1xyXG4gICAgICB0aGlzLmlzTmV4dFJlbmRlclF1ZXVlZCA9IGZhbHNlO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGFydFJlbmRlcmluZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzUmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihSZW5kZXJFdmVudC5ldmVudFR5cGUsIHRoaXMub25SZW5kZXJFdmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihSZW5kZXJFdmVudC5ldmVudFR5cGUsIHRoaXMub25SZW5kZXJFdmVudCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL0FwcGxpY2F0aW9uLnRzIiwiaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhpdFRlc3RSZXN1bHQge1xyXG4gIHB1YmxpYyByZWFkb25seSBsaW5lOiBMaW5lO1xyXG4gIHB1YmxpYyBwYXRoPzogUGF0aDtcclxuICBwdWJsaWMgbGF5ZXI/OiBMYXllcjtcclxuXHJcbiAgY29uc3RydWN0b3IobGluZTogTGluZSwgcGF0aD86IFBhdGgsIGxheWVyPzogTGF5ZXIpIHtcclxuICAgIHRoaXMubGluZSA9IGxpbmU7XHJcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgdGhpcy5sYXllciA9IGxheWVyO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vSGl0VGVzdFJlc3VsdC50cyIsImltcG9ydCB7IFBvbHlnb24gfSBmcm9tICdjb21tb24vUG9seWdvbic7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQge1xyXG4gIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgTmV3TGlnaHRDb2xvckV2ZW50LFxyXG4gIE5ld0xpZ2h0UG9zaXRpb25FdmVudCxcclxuICBOZXdMaWdodFR5cGVFdmVudCxcclxuICBOZXdOb3JtYWxNYXBFdmVudFxyXG59IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuXHJcbmltcG9ydCB7IEFjdGl2ZUVkZ2UgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9BY3RpdmVFZGdlJztcclxuaW1wb3J0IHsgRmlsbFN0cmlwIH0gZnJvbSAncG9seWdvbi1maWxsZXIvRmlsbFN0cmlwJztcclxuaW1wb3J0IHsgRmlsbFdvcmtlck1lc3NhZ2VUeXBlIH0gZnJvbSAncG9seWdvbi1maWxsZXIvRmlsbFdvcmtlck1lc3NhZ2VUeXBlJztcclxuXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmNvbnN0IEZJTExfV09SS0VSX1VSTCA9ICdmaWxsV29ya2VyLmpzJztcclxuXHJcbmludGVyZmFjZSBQb2x5Z29uRmlsbGVyRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbkZpbGxlciBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHB1YmxpYyBmaWxsaW5nRmluaXNoZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwcm94eUV2ZW50cyA9IFtcclxuICAgIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgICBOZXdIZWlnaHRNYXBFdmVudCxcclxuICAgIE5ld0xpZ2h0Q29sb3JFdmVudCxcclxuICAgIE5ld0xpZ2h0UG9zaXRpb25FdmVudCxcclxuICAgIE5ld0xpZ2h0VHlwZUV2ZW50LFxyXG4gICAgTmV3Tm9ybWFsTWFwRXZlbnRcclxuICBdO1xyXG5cclxuICBwcml2YXRlIHJlbmRlcmluZ0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgcHJpdmF0ZSBmaWxsV29ya2VyOiBXb3JrZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9seWdvbkZpbGxlckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5jYW52YXMgPSBkZXBlbmRlbmNpZXMuY2FudmFzO1xyXG5cclxuICAgIHRoaXMub25GaWxsV29ya2VyTWVzc2FnZSA9IHRoaXMub25GaWxsV29ya2VyTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkZpbGxXb3JrZXJFcnJvciA9IHRoaXMub25GaWxsV29ya2VyRXJyb3IuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2VuZEFwcEZpbGxEYXRhRXZlbnQgPSB0aGlzLnNlbmRBcHBGaWxsRGF0YUV2ZW50LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5qZWN0Q2FudmFzUmVuZGVyaW5nQ29udGV4dChyZW5kZXJpbmdDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dCA9IHJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMucHJveHlFdmVudHMuZm9yRWFjaChldmVudCA9PlxyXG4gICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LmV2ZW50VHlwZSwgdGhpcy5zZW5kQXBwRmlsbERhdGFFdmVudClcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5maWxsV29ya2VyID0gbmV3IFdvcmtlcihGSUxMX1dPUktFUl9VUkwpO1xyXG4gICAgdGhpcy5maWxsV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgdHlwZTogRmlsbFdvcmtlck1lc3NhZ2VUeXBlLkNhbnZhc0luZm8sXHJcbiAgICAgIHdpZHRoOiB0aGlzLmNhbnZhcy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmNhbnZhcy5oZWlnaHRcclxuICAgIH0pO1xyXG4gICAgdGhpcy5maWxsV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uRmlsbFdvcmtlck1lc3NhZ2UpO1xyXG4gICAgdGhpcy5maWxsV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5vbkZpbGxXb3JrZXJFcnJvcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMucHJveHlFdmVudHMuZm9yRWFjaChldmVudCA9PlxyXG4gICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LmV2ZW50VHlwZSwgdGhpcy5zZW5kQXBwRmlsbERhdGFFdmVudClcclxuICAgICk7XHJcbiAgICB0aGlzLmZpbGxXb3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25GaWxsV29ya2VyTWVzc2FnZSk7XHJcbiAgICB0aGlzLmZpbGxXb3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLm9uRmlsbFdvcmtlckVycm9yKTtcclxuICAgIHRoaXMuZmlsbFdvcmtlci50ZXJtaW5hdGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaWxsUG9seWdvbnMocG9seWdvbnM6IFBvbHlnb25bXSkge1xyXG4gICAgY29uc3QgZmlsbFdvcmtlciA9IHRoaXMuZmlsbFdvcmtlcjtcclxuXHJcbiAgICBmaWxsV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgdHlwZTogRmlsbFdvcmtlck1lc3NhZ2VUeXBlLlN0YXJ0RmlsbFxyXG4gICAgfSk7XHJcblxyXG4gICAgcG9seWdvbnMuZm9yRWFjaChwb2x5Z29uID0+IHRoaXMuZmlsbFBvbHlnb24ocG9seWdvbikpO1xyXG5cclxuICAgIGZpbGxXb3JrZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICB0eXBlOiBGaWxsV29ya2VyTWVzc2FnZVR5cGUuRW5kRmlsbFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRmlsbFdvcmtlck1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xyXG4gICAgY29uc3QgaW1hZ2VEYXRhOiBJbWFnZURhdGEgPSBldmVudC5kYXRhO1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xyXG5cclxuICAgIGlmICh0aGlzLmZpbGxpbmdGaW5pc2hlZENhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMuZmlsbGluZ0ZpbmlzaGVkQ2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25GaWxsV29ya2VyRXJyb3IoZXZlbnQ6IEVycm9yRXZlbnQpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0ZpbGwgd29ya2VyIGVycm9yJywgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaWxsUG9seWdvbihwb2x5Z29uOiBQb2x5Z29uKSB7XHJcbiAgICBjb25zdCBmaWxsU3RyaXBzID0gdGhpcy5nZXRQb2x5Z29uRmlsbFN0cmlwcyhwb2x5Z29uKTtcclxuXHJcbiAgICB0aGlzLmZpbGxXb3JrZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICB0eXBlOiBGaWxsV29ya2VyTWVzc2FnZVR5cGUuRmlsbFN0cmlwcyxcclxuICAgICAgZmlsbFN0cmlwc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBvbHlnb25GaWxsU3RyaXBzKHBvbHlnb246IFBvbHlnb24pOiBGaWxsU3RyaXBbXSB7XHJcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHBvbHlnb24uZ2V0VmVydGljZXMoKTtcclxuICAgIGNvbnN0IHZlcnRpY2VzQ291bnQgPSBwb2x5Z29uLmdldFZlcnRpY2VzQ291bnQoKTtcclxuXHJcbiAgICAvLyBpbmRbMCAuLiBuLTFdXHJcbiAgICBjb25zdCBzb3J0ZWRWZXJ0ZXhJbmRpY2VzID0gdmVydGljZXMubWFwKChfdmVydGV4LCBpbmRleCkgPT4gaW5kZXgpO1xyXG4gICAgc29ydGVkVmVydGV4SW5kaWNlcy5zb3J0KChpLCBqKSA9PiB2ZXJ0aWNlc1tpXS55IC0gdmVydGljZXNbal0ueSk7XHJcblxyXG4gICAgY29uc3QgeU1pbiA9IHZlcnRpY2VzW3NvcnRlZFZlcnRleEluZGljZXNbMF1dLnk7XHJcbiAgICBjb25zdCB5TWF4ID0gdmVydGljZXNbc29ydGVkVmVydGV4SW5kaWNlc1t2ZXJ0aWNlc0NvdW50IC0gMV1dLnk7XHJcblxyXG4gICAgLy8gQUVUXHJcbiAgICBjb25zdCBhY3RpdmVFZGdlVGFibGU6IEFjdGl2ZUVkZ2VbXSA9IFtdO1xyXG4gICAgbGV0IGsgPSAwO1xyXG4gICAgbGV0IHByZXZpb3VzWSA9IHlNaW47XHJcblxyXG4gICAgY29uc3QgZmlsbFN0cmlwczogRmlsbFN0cmlwW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCB5ID0geU1pbiArIDE7IHkgPD0geU1heDsgeSArPSAxKSB7XHJcbiAgICAgIGZvciAoOyBrIDwgdmVydGljZXNDb3VudDsgayArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgdmVydGV4SW5kZXggPSBzb3J0ZWRWZXJ0ZXhJbmRpY2VzW2tdO1xyXG4gICAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRpY2VzW3ZlcnRleEluZGV4XTtcclxuICAgICAgICBpZiAodmVydGV4LnkgIT09IHByZXZpb3VzWSkge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcmV2aW91c1ZlcnRleEluZGV4ID0gcG9seWdvbi5nZXRQcmV2aW91c1BvaW50SW5kZXgodmVydGV4SW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmVydGV4ID0gdmVydGljZXNbcHJldmlvdXNWZXJ0ZXhJbmRleF07XHJcbiAgICAgICAgaWYgKHByZXZpb3VzVmVydGV4LnkgPj0gdmVydGV4LnkpIHtcclxuICAgICAgICAgIGNvbnN0IHByZXZpb3VzRWRnZSA9IG5ldyBBY3RpdmVFZGdlKHZlcnRleCwgcHJldmlvdXNWZXJ0ZXgpO1xyXG4gICAgICAgICAgYWN0aXZlRWRnZVRhYmxlLnB1c2gocHJldmlvdXNFZGdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgZWRnZUluZGV4ID0gYWN0aXZlRWRnZVRhYmxlLmZpbmRJbmRleChcclxuICAgICAgICAgICAgZWRnZSA9PiBlZGdlLmxvd2VyUG9pbnQgPT09IHByZXZpb3VzVmVydGV4ICYmIGVkZ2UuaGlnaGVyUG9pbnQgPT09IHZlcnRleFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zcGxpY2UoZWRnZUluZGV4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRWZXJ0ZXhJbmRleCA9IHBvbHlnb24uZ2V0TmV4dFBvaW50SW5kZXgodmVydGV4SW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IG5leHRWZXJ0ZXggPSB2ZXJ0aWNlc1tuZXh0VmVydGV4SW5kZXhdO1xyXG4gICAgICAgIGlmIChuZXh0VmVydGV4LnkgPj0gdmVydGV4LnkpIHtcclxuICAgICAgICAgIGNvbnN0IG5leHRFZGdlID0gbmV3IEFjdGl2ZUVkZ2UodmVydGV4LCBuZXh0VmVydGV4KTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5wdXNoKG5leHRFZGdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgZWRnZUluZGV4ID0gYWN0aXZlRWRnZVRhYmxlLmZpbmRJbmRleChcclxuICAgICAgICAgICAgZWRnZSA9PiBlZGdlLmxvd2VyUG9pbnQgPT09IG5leHRWZXJ0ZXggJiYgZWRnZS5oaWdoZXJQb2ludCA9PT0gdmVydGV4XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYWN0aXZlRWRnZVRhYmxlLnNwbGljZShlZGdlSW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByZXZpb3VzWSA+PSAwICYmIHByZXZpb3VzWSA8IHRoaXMuY2FudmFzLmhlaWdodCkge1xyXG4gICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zb3J0KChlMSwgZTIpID0+IGUxLnggLSBlMi54KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmVFZGdlVGFibGUubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgIGNvbnN0IGUxID0gYWN0aXZlRWRnZVRhYmxlW2ldO1xyXG4gICAgICAgICAgY29uc3QgZTIgPSBhY3RpdmVFZGdlVGFibGVbaSArIDFdO1xyXG5cclxuICAgICAgICAgIGZpbGxTdHJpcHMucHVzaCh7XHJcbiAgICAgICAgICAgIHk6IHByZXZpb3VzWSxcclxuICAgICAgICAgICAgZnJvbVg6IGUxLngsXHJcbiAgICAgICAgICAgIHRvWDogZTIueFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBhY3RpdmVFZGdlVGFibGUuZm9yRWFjaChlZGdlID0+IGVkZ2UubmV4dFNjYW5MaW5lKCkpO1xyXG4gICAgICBwcmV2aW91c1kgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmaWxsU3RyaXBzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZW5kQXBwRmlsbERhdGFFdmVudChldmVudDogQXBwRXZlbnQpIHtcclxuICAgIHRoaXMuZmlsbFdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5OZXdGaWxsRGF0YUV2ZW50LFxyXG4gICAgICBldmVudFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3BvbHlnb24tZmlsbGVyL1BvbHlnb25GaWxsZXIudHMiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWN0aXZlRWRnZSB7XHJcbiAgcHVibGljIGxvd2VyUG9pbnQ6IFBvaW50O1xyXG4gIHB1YmxpYyBoaWdoZXJQb2ludDogUG9pbnQ7XHJcblxyXG4gIHByaXZhdGUgaW52ZXJzZVNsb3BlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihsb3dlclBvaW50OiBQb2ludCwgaGlnaGVyUG9pbnQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLmxvd2VyUG9pbnQgPSBsb3dlclBvaW50O1xyXG4gICAgdGhpcy5oaWdoZXJQb2ludCA9IGhpZ2hlclBvaW50O1xyXG5cclxuICAgIHRoaXMuX3ggPSB0aGlzLmxvd2VyUG9pbnQueDtcclxuICAgIHRoaXMuY2FsY3VsYXRlU2xvcGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeCgpIHtcclxuICAgIHJldHVybiB0aGlzLl94O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5leHRTY2FuTGluZSgpIHtcclxuICAgIHRoaXMuX3ggKz0gdGhpcy5pbnZlcnNlU2xvcGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVNsb3BlKCkge1xyXG4gICAgaWYgKHRoaXMuaGlnaGVyUG9pbnQueSA9PT0gdGhpcy5sb3dlclBvaW50LnkpIHtcclxuICAgICAgdGhpcy5pbnZlcnNlU2xvcGUgPSA5OTk5OTk5OTk5OTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW52ZXJzZVNsb3BlID1cclxuICAgICAgICAodGhpcy5oaWdoZXJQb2ludC54IC0gdGhpcy5sb3dlclBvaW50LngpIC8gKHRoaXMuaGlnaGVyUG9pbnQueSAtIHRoaXMubG93ZXJQb2ludC55KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcG9seWdvbi1maWxsZXIvQWN0aXZlRWRnZS50cyIsImltcG9ydCB7IENPTE9SUyB9IGZyb20gJ2NvbW1vbi9DT0xPUlMnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmltcG9ydCB7IFBvbHlnb25GaWxsZXIgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9Qb2x5Z29uRmlsbGVyJztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmludGVyZmFjZSBSZW5kZXJlckRlcGVuZGVuY2llcyB7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwb2x5Z29uRmlsbGVyOiBQb2x5Z29uRmlsbGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlbmRlcmluZ0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwcml2YXRlIHBvbHlnb25GaWxsZXI6IFBvbHlnb25GaWxsZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUmVuZGVyZXJEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKGNvbnRleHQgPT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGNhbnZhcyAyZCByZW5kZXJpbmcgY29udGV4dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuZm9udCA9IGNvbmZpZ3VyYXRpb24uY2FudmFzRm9udDtcclxuXHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkZpbGxlcjtcclxuICAgIHRoaXMucG9seWdvbkZpbGxlci5pbmplY3RDYW52YXNSZW5kZXJpbmdDb250ZXh0KHRoaXMucmVuZGVyaW5nQ29udGV4dCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LnN0cm9rZVN0eWxlID0gQ09MT1JTLkJMQUNLLmZpbGxTdHlsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3UG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLmRyYXdQaXhlbChwb2ludC54LCBwb2ludC55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3UGl4ZWwoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3TGluZShsaW5lOiBMaW5lLCBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXMpOiB2b2lkO1xyXG4gIHB1YmxpYyBkcmF3TGluZShzdGFydFBvaW50OiBQb2ludCwgZW5kUG9pbnQ6IFBvaW50LCBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXMpOiB2b2lkO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgcHVibGljIGRyYXdMaW5lKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICBpZiAoYXJnc1swXSBpbnN0YW5jZW9mIExpbmUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZHJhd0xpbmVCZXR3ZWVuUG9pbnRzKGFyZ3NbMF0ucDEsIGFyZ3NbMF0ucDIsIGFyZ3NbMV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZHJhd0xpbmVCZXR3ZWVuUG9pbnRzKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRyYXdQYXRoKHBhdGg6IFBhdGgpIHtcclxuICAgIGNvbnN0IHBhdGhMaW5lUHJvcGVydGllcyA9IHBhdGguZ2V0TGluZVByb3BlcnRpZXMoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgcGF0aC5nZXRMaW5lSXRlcmF0b3IoKSkge1xyXG4gICAgICB0aGlzLmRyYXdMaW5lKGxpbmUsIHBhdGhMaW5lUHJvcGVydGllcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmlsbFRleHQodGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XHJcbiAgcHVibGljIGZpbGxUZXh0KHRleHQ6IHN0cmluZywgcG9pbnQ6IFBvaW50KTogdm9pZDtcclxuICBwdWJsaWMgZmlsbFRleHQodGV4dDogc3RyaW5nLCBwb2ludE9yWDogbnVtYmVyIHwgUG9pbnQsIHk/OiBudW1iZXIpIHtcclxuICAgIGxldCB4ID0gcG9pbnRPclg7XHJcbiAgICBpZiAodHlwZW9mIHBvaW50T3JYID09PSAnb2JqZWN0JyAmJiBwb2ludE9yWCBpbnN0YW5jZW9mIFBvaW50KSB7XHJcbiAgICAgIHggPSBwb2ludE9yWC54O1xyXG4gICAgICB5ID0gcG9pbnRPclgueTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuZmlsbFRleHQodGV4dCwgPG51bWJlcj54LCA8bnVtYmVyPnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd0xpbmVCZXR3ZWVuUG9pbnRzKFxyXG4gICAgc3RhcnRQb2ludDogUG9pbnQsXHJcbiAgICBlbmRQb2ludDogUG9pbnQsXHJcbiAgICBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXNcclxuICApIHtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5zdHJva2VTdHlsZSA9IGxpbmVQcm9wZXJ0aWVzLmNvbG9yLmZpbGxTdHlsZTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQubW92ZVRvKHN0YXJ0UG9pbnQueCwgc3RhcnRQb2ludC55KTtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5saW5lVG8oZW5kUG9pbnQueCwgZW5kUG9pbnQueSk7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuc3Ryb2tlKCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL1JlbmRlcmVyLnRzIiwiaW1wb3J0IHsgSGl0VGVzdFJlc3VsdCB9IGZyb20gJ2NvbW1vbi9IaXRUZXN0UmVzdWx0JztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnUmVuZGVyZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YWdlIHtcclxuICBwdWJsaWMgbGF5ZXJzOiBMYXllcltdID0gW107XHJcblxyXG4gIHB1YmxpYyByZW5kZXIocmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcbiAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IGxheWVyLnJlbmRlcihyZW5kZXJlcikpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUxheWVyKGxheWVyOiBMYXllcikge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxheWVycy5pbmRleE9mKGxheWVyKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGl0VGVzdChwb2ludDogUG9pbnQpOiBIaXRUZXN0UmVzdWx0IHwgbnVsbCB7XHJcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMubGF5ZXJzKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGxheWVyLmhpdFRlc3QocG9pbnQpO1xyXG4gICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbmRMYXllckJ5TmFtZShuYW1lOiBzdHJpbmcpOiBMYXllciB7XHJcbiAgICBjb25zdCBmb3VuZExheWVyID0gdGhpcy5sYXllcnMuZmluZChsYXllciA9PiBsYXllci5uYW1lID09PSBuYW1lKTtcclxuXHJcbiAgICBpZiAoIWZvdW5kTGF5ZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBMYXllciB3aXRoIG5hbWUgJHtuYW1lfSBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmb3VuZExheWVyO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9TdGFnZS50cyIsImltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9zZXN0UGF0aEZpbmRlciB7XHJcbiAgcHVibGljIGdldENsb3Nlc3RQYXRoKHBhdGhzOiBQYXRoW10sIHBvaW50OiBQb2ludCk6IFBhdGgge1xyXG4gICAgaWYgKHBhdGhzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhdGhzIGFycmF5IGlzIGVtcHR5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsb3Nlc3RQYXRoID0gcGF0aHNbMF07XHJcbiAgICBsZXQgY2xvc2VzdERpc3RhbmNlID0gdGhpcy5nZXRQYXRoVG9Qb2ludERpc3RhbmNlKGNsb3Nlc3RQYXRoLCBwb2ludCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRocy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBwYXRoID0gcGF0aHNbaV07XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5nZXRQYXRoVG9Qb2ludERpc3RhbmNlKHBhdGgsIHBvaW50KTtcclxuXHJcbiAgICAgIGlmIChjbG9zZXN0RGlzdGFuY2UgPiBkaXN0YW5jZSkge1xyXG4gICAgICAgIGNsb3Nlc3RQYXRoID0gcGF0aDtcclxuICAgICAgICBjbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbG9zZXN0UGF0aDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGF0aFRvUG9pbnREaXN0YW5jZShwYXRoOiBQYXRoLCBwb2ludDogUG9pbnQpIHtcclxuICAgIHJldHVybiBwb2ludC5nZXREaXN0YW5jZVNxdWFyZWRUbyhwYXRoLmdldENlbnRlck9mR3Jhdml0eSgpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvQ2xvc2VzdFBhdGhGaW5kZXIudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTG9hZGluZ0ZpbmlzaGVkRXZlbnQgfSBmcm9tICdldmVudHMvdWkvTG9hZGluZ0ZpbmlzaGVkRXZlbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nU3RhcnRlZEV2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL0xvYWRpbmdTdGFydGVkRXZlbnQnO1xyXG5cclxuaW50ZXJmYWNlIEltYWdlRG93bmxvYWRlckRlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZURvd25sb2FkZXIge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogSW1hZ2VEb3dubG9hZGVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaW1hZ2VUb0ltYWdlRGF0YShpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IFByb21pc2U8SW1hZ2VEYXRhPiB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgMmQgZHJhd2luZyBjYW52YXMgY29udGV4dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5pc0ltYWdlRG93bmxvYWRlZChpbWFnZSkpIHtcclxuICAgICAgYXdhaXQgdGhpcy53YWl0Rm9ySW1hZ2UoaW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLm5hdHVyYWxXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0O1xyXG5cclxuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuXHJcbiAgICByZXR1cm4gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1hZ2UubmF0dXJhbFdpZHRoLCBpbWFnZS5uYXR1cmFsSGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNJbWFnZURvd25sb2FkZWQoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIGlmICghaW1hZ2UuY29tcGxldGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbWFnZS5uYXR1cmFsV2lkdGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3YWl0Rm9ySW1hZ2UoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hMb2FkaW5nU3RhcnRlZEV2ZW50KCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgZGlzcGF0Y2hMb2FkaW5nRmluaXNoZWRFdmVudCA9IHRoaXMuZGlzcGF0Y2hMb2FkaW5nRmluaXNoZWRFdmVudC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gb25Mb2FkKCkge1xyXG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xyXG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XHJcbiAgICAgICAgZGlzcGF0Y2hMb2FkaW5nRmluaXNoZWRFdmVudCgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gb25FcnJvcigpIHtcclxuICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcclxuICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xyXG4gICAgICAgIGRpc3BhdGNoTG9hZGluZ0ZpbmlzaGVkRXZlbnQoKTtcclxuICAgICAgICByZWplY3QoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XHJcbiAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGF0Y2hMb2FkaW5nU3RhcnRlZEV2ZW50KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTG9hZGluZ1N0YXJ0ZWRFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGF0Y2hMb2FkaW5nRmluaXNoZWRFdmVudCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IExvYWRpbmdGaW5pc2hlZEV2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9JbWFnZURvd25sb2FkZXIudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtcclxuICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEV2ZW50LFxyXG4gIE5ld0xpZ2h0Q29sb3JFdmVudCxcclxuICBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQsXHJcbiAgTmV3TGlnaHRUeXBlRXZlbnQsXHJcbiAgTmV3Tm9ybWFsTWFwRXZlbnRcclxufSBmcm9tICdldmVudHMvaW5wdXQtZGF0YSc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgTGlnaHRUeXBlIH0gZnJvbSAnY29tbW9uL0xpZ2h0VHlwZSc7XHJcbmltcG9ydCB7IExpbmVQcm9wZXJ0aWVzIH0gZnJvbSAnY29tbW9uL0xpbmVQcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnY29tbW9uL1BvbHlnb24nO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VEb3dubG9hZGVyIH0gZnJvbSAnc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIElucHV0RGF0YUluaXRpYWxpemVyRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuICBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXREYXRhSW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IElucHV0RGF0YUluaXRpYWxpemVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmltYWdlRG93bmxvYWRlciA9IGRlcGVuZGVuY2llcy5pbWFnZURvd25sb2FkZXI7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uTGF5ZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaW5pdCgpIHtcclxuICAgIHRoaXMuYWRkSW5pdGlhbFBvbHlnb25zKCk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VzVG9Eb3dubG9hZDogSFRNTEltYWdlRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgY29uc3QgYmFja2dyb3VuZFRleHR1cmVJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgYmFja2dyb3VuZFRleHR1cmVJbWFnZS5zcmMgPSBjb25maWd1cmF0aW9uLnByZXNldEJhY2tncm91bmRUZXh0dXJlc1swXTtcclxuXHJcbiAgICBjb25zdCBub3JtYWxNYXBJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbm9ybWFsTWFwSW1hZ2Uuc3JjID0gY29uZmlndXJhdGlvbi5wcmVzZXROb3JtYWxNYXBzWzBdO1xyXG5cclxuICAgIGNvbnN0IGhlaWdodE1hcEltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBoZWlnaHRNYXBJbWFnZS5zcmMgPSBjb25maWd1cmF0aW9uLnByZXNldEhlaWdodE1hcHNbMF07XHJcblxyXG4gICAgaW1hZ2VzVG9Eb3dubG9hZC5wdXNoKGJhY2tncm91bmRUZXh0dXJlSW1hZ2UsIG5vcm1hbE1hcEltYWdlLCBoZWlnaHRNYXBJbWFnZSk7XHJcblxyXG4gICAgY29uc3QgZG93bmxvYWRlZEltYWdlRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICBpbWFnZXNUb0Rvd25sb2FkLm1hcChpbWFnZSA9PiB0aGlzLmltYWdlRG93bmxvYWRlci5pbWFnZVRvSW1hZ2VEYXRhKGltYWdlKSlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudChkb3dubG9hZGVkSW1hZ2VEYXRhWzBdKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdOb3JtYWxNYXBFdmVudChkb3dubG9hZGVkSW1hZ2VEYXRhWzFdKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdIZWlnaHRNYXBFdmVudChkb3dubG9hZGVkSW1hZ2VEYXRhWzJdKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdMaWdodENvbG9yRXZlbnQoY29uZmlndXJhdGlvbi5wcmVzZXRMaWdodENvbG9yKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICBuZXcgTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50KGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQuZGVmYXVsdFJhZGl1cylcclxuICAgICk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdMaWdodFR5cGVFdmVudChMaWdodFR5cGUuQ29uc3RhbnQpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICAvLyBOb3RoaW5nIHRvIGRlc3Ryb3kgaGVyZVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRJbml0aWFsUG9seWdvbnMoKSB7XHJcbiAgICBjb25zdCBwb2ludHMxID0gW1xyXG4gICAgICBuZXcgUG9pbnQoOTQsIDkzKSxcclxuICAgICAgbmV3IFBvaW50KDY5LCAzODYpLFxyXG4gICAgICBuZXcgUG9pbnQoMTkwLCA1MjUpLFxyXG4gICAgICBuZXcgUG9pbnQoNjY0LCAzNjQpXHJcbiAgICBdO1xyXG4gICAgY29uc3QgcG9seWdvbjEgPSBuZXcgUG9seWdvbihwb2ludHMxLCBMaW5lUHJvcGVydGllcy5nZXREZWZhdWx0KCkpO1xyXG5cclxuICAgIGNvbnN0IHBvaW50czIgPSBbXHJcbiAgICAgIG5ldyBQb2ludCg3NzcsIDE0MiksXHJcbiAgICAgIG5ldyBQb2ludCg3MDAsIDUwKSxcclxuICAgICAgbmV3IFBvaW50KDQzMywgMzQpLFxyXG4gICAgICBuZXcgUG9pbnQoNDA0LCAxNTYpLFxyXG4gICAgICBuZXcgUG9pbnQoNTI3LCAyNjMpLFxyXG4gICAgICBuZXcgUG9pbnQoNzUwLCAzNTApXHJcbiAgICBdO1xyXG4gICAgY29uc3QgcG9seWdvbjIgPSBuZXcgUG9seWdvbihwb2ludHMyLCBMaW5lUHJvcGVydGllcy5nZXREZWZhdWx0KCkpO1xyXG5cclxuICAgIHRoaXMucG9seWdvbkxheWVyLnBhdGhzLnB1c2gocG9seWdvbjEsIHBvbHlnb24yKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0lucHV0RGF0YUluaXRpYWxpemVyLnRzIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7XHJcbiAgTmV3TGlnaHRQb3NpdGlvbkV2ZW50LFxyXG4gIE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudCxcclxuICBOZXdMaWdodFR5cGVFdmVudFxyXG59IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuaW1wb3J0IHsgTGlnaHRUeXBlIH0gZnJvbSAnY29tbW9uL0xpZ2h0VHlwZSc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBMaWdodFNpbXVsYXRvckRlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgY2VudGVyUG9pbnQ6IFBvaW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGlnaHRTaW11bGF0b3IgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIGhvcml6b250YWxSYWRpYW5zTW9kdWxvVmFsdWUgPSAyICogTWF0aC5QSTsgLy8gWzA7IDM2MF0gZGVncmVlc1xyXG4gIHByaXZhdGUgaG9yaXpvbnRhbFN0ZXBJblJhZGlhbnM6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBtaW5WZXJ0aWNhbEFuZ2xlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB2ZXJ0aWNhbEFuZ2xlRGVsdGE6IG51bWJlcjtcclxuICBwcml2YXRlIHZlcnRpY2FsU3RlcEluUmFkaWFuczogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2VudGVyUG9pbnQ6IFBvaW50O1xyXG5cclxuICBwcml2YXRlIG1vdmluZ0xpZ2h0SW50ZXJ2YWxJZDogbnVtYmVyO1xyXG4gIHByaXZhdGUgbGlnaHRIb3Jpem9udGFsQW5nbGUgPSAwO1xyXG4gIHByaXZhdGUgbGlnaHRWZXJ0aWNhbEFuZ2xlT2Zmc2V0ID0gY29uZmlndXJhdGlvbi5tb3ZpbmdMaWdodC5taW5WZXJ0aWNhbEFuZ2xlO1xyXG4gIHByaXZhdGUgbGlnaHRWZXJ0aWNhbFJpc2luZyA9IHRydWU7XHJcbiAgcHJpdmF0ZSBsaWdodFBvc2l0aW9uUmFkaXVzOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogTGlnaHRTaW11bGF0b3JEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuY2VudGVyUG9pbnQgPSBkZXBlbmRlbmNpZXMuY2VudGVyUG9pbnQ7XHJcblxyXG4gICAgdGhpcy5vbk5ld0xpZ2h0VHlwZSA9IHRoaXMub25OZXdMaWdodFR5cGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubW92aW5nTGlnaHRUaWNrID0gdGhpcy5tb3ZpbmdMaWdodFRpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25OZXdMaWdodFBvc2l0aW9uUmFkaXVzID0gdGhpcy5vbk5ld0xpZ2h0UG9zaXRpb25SYWRpdXMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihOZXdMaWdodFR5cGVFdmVudC5ldmVudFR5cGUsIHRoaXMub25OZXdMaWdodFR5cGUpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbk5ld0xpZ2h0UG9zaXRpb25SYWRpdXNcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wZXJmb3JtSW5pdGlhbENhbGN1bGF0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKE5ld0xpZ2h0VHlwZUV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld0xpZ2h0VHlwZSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICB0aGlzLm9uTmV3TGlnaHRQb3NpdGlvblJhZGl1c1xyXG4gICAgKTtcclxuICAgIHRoaXMuc3RvcE1vdmluZ0xpZ2h0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBlcmZvcm1Jbml0aWFsQ2FsY3VsYXRpb25zKCkge1xyXG4gICAgdGhpcy5ob3Jpem9udGFsU3RlcEluUmFkaWFucyA9IGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQudGlja0ludGVydmFsIC9cclxuICAgICAgY29uZmlndXJhdGlvbi5tb3ZpbmdMaWdodC5ob3Jpem9udGFsTGFwVGltZSAqXHJcbiAgICAgIDIgKlxyXG4gICAgICBNYXRoLlBJO1xyXG5cclxuICAgIHRoaXMubWluVmVydGljYWxBbmdsZSA9IGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQubWluVmVydGljYWxBbmdsZTtcclxuICAgIHRoaXMudmVydGljYWxBbmdsZURlbHRhID0gY29uZmlndXJhdGlvbi5tb3ZpbmdMaWdodC5tYXhWZXJ0aWNhbEFuZ2xlIC1cclxuICAgICAgdGhpcy5taW5WZXJ0aWNhbEFuZ2xlO1xyXG5cclxuICAgIHRoaXMudmVydGljYWxTdGVwSW5SYWRpYW5zID0gY29uZmlndXJhdGlvbi5tb3ZpbmdMaWdodC50aWNrSW50ZXJ2YWwgL1xyXG4gICAgICBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0LnZlcnRpY2FsTGFwVGltZSAqXHJcbiAgICAgIHRoaXMudmVydGljYWxBbmdsZURlbHRhO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk5ld0xpZ2h0VHlwZShldmVudDogTmV3TGlnaHRUeXBlRXZlbnQpIHtcclxuICAgIHN3aXRjaCAoZXZlbnQucGF5bG9hZCkge1xyXG4gICAgICBjYXNlIExpZ2h0VHlwZS5Db25zdGFudDpcclxuICAgICAgICB0aGlzLnN0b3BNb3ZpbmdMaWdodCgpO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hMaWdodFBvc2l0aW9uKG5ldyBWZWN0b3IzKDAsIDAsIDEpKTtcclxuICAgICAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTGlnaHRUeXBlLk1vdmluZzpcclxuICAgICAgICB0aGlzLnN0YXJ0TW92aW5nTGlnaHQoKTtcclxuICAgICAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGxpZ2h0IHR5cGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGF0Y2hMaWdodFBvc2l0aW9uKHBvc2l0aW9uOiBWZWN0b3IzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdMaWdodFBvc2l0aW9uRXZlbnQocG9zaXRpb24pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRNb3ZpbmdMaWdodCgpIHtcclxuICAgIHRoaXMubW92aW5nTGlnaHRJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoXHJcbiAgICAgIHRoaXMubW92aW5nTGlnaHRUaWNrLFxyXG4gICAgICBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0LnRpY2tJbnRlcnZhbFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92aW5nTGlnaHRUaWNrKCkge1xyXG4gICAgY29uc3QgeyB4OiBjZW50ZXJYLCB5OiBjZW50ZXJZIH0gPSB0aGlzLmNlbnRlclBvaW50O1xyXG4gICAgY29uc3QgdmVydGljYWxBbmdsZSA9XHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQubWluVmVydGljYWxBbmdsZSArIHRoaXMubGlnaHRWZXJ0aWNhbEFuZ2xlT2Zmc2V0O1xyXG5cclxuICAgIGNvbnN0IGhvcml6b250YWxSYWRpdXMgPSB0aGlzLmxpZ2h0UG9zaXRpb25SYWRpdXMgKiBNYXRoLmNvcyh2ZXJ0aWNhbEFuZ2xlKTtcclxuXHJcbiAgICBjb25zdCB4ID0gY2VudGVyWCArIGhvcml6b250YWxSYWRpdXMgKiBNYXRoLmNvcyh0aGlzLmxpZ2h0SG9yaXpvbnRhbEFuZ2xlKTtcclxuICAgIGNvbnN0IHkgPSBjZW50ZXJZICsgaG9yaXpvbnRhbFJhZGl1cyAqIE1hdGguc2luKHRoaXMubGlnaHRIb3Jpem9udGFsQW5nbGUpO1xyXG4gICAgY29uc3QgeiA9IHRoaXMubGlnaHRQb3NpdGlvblJhZGl1cyAqIE1hdGguc2luKHZlcnRpY2FsQW5nbGUpO1xyXG5cclxuICAgIGNvbnN0IGxpZ2h0UG9zaXRpb24gPSBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuICAgIHRoaXMuZGlzcGF0Y2hMaWdodFBvc2l0aW9uKGxpZ2h0UG9zaXRpb24pO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcblxyXG4gICAgdGhpcy5ob3Jpem9udGFsVGljaygpO1xyXG4gICAgdGhpcy52ZXJ0aWNhbFRpY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaG9yaXpvbnRhbFRpY2soKSB7XHJcbiAgICB0aGlzLmxpZ2h0SG9yaXpvbnRhbEFuZ2xlICs9IHRoaXMuaG9yaXpvbnRhbFN0ZXBJblJhZGlhbnM7XHJcbiAgICBpZiAodGhpcy5saWdodEhvcml6b250YWxBbmdsZSA+PSB0aGlzLmhvcml6b250YWxSYWRpYW5zTW9kdWxvVmFsdWUpIHtcclxuICAgICAgdGhpcy5saWdodEhvcml6b250YWxBbmdsZSAtPSB0aGlzLmhvcml6b250YWxSYWRpYW5zTW9kdWxvVmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZlcnRpY2FsVGljaygpIHtcclxuICAgIGlmICh0aGlzLmxpZ2h0VmVydGljYWxSaXNpbmcpIHtcclxuICAgICAgdGhpcy5saWdodFZlcnRpY2FsQW5nbGVPZmZzZXQgKz0gdGhpcy52ZXJ0aWNhbFN0ZXBJblJhZGlhbnM7XHJcbiAgICAgIGlmICh0aGlzLmxpZ2h0VmVydGljYWxBbmdsZU9mZnNldCA+PSB0aGlzLnZlcnRpY2FsQW5nbGVEZWx0YSkge1xyXG4gICAgICAgIHRoaXMubGlnaHRWZXJ0aWNhbFJpc2luZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxpZ2h0VmVydGljYWxBbmdsZU9mZnNldCAtPSB0aGlzLnZlcnRpY2FsU3RlcEluUmFkaWFucztcclxuICAgICAgaWYgKHRoaXMubGlnaHRWZXJ0aWNhbEFuZ2xlT2Zmc2V0IDw9IDApIHtcclxuICAgICAgICB0aGlzLmxpZ2h0VmVydGljYWxSaXNpbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0b3BNb3ZpbmdMaWdodCgpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5tb3ZpbmdMaWdodEludGVydmFsSWQpO1xyXG4gICAgdGhpcy5saWdodEhvcml6b250YWxBbmdsZSA9IDA7XHJcbiAgICB0aGlzLmxpZ2h0VmVydGljYWxBbmdsZU9mZnNldCA9IGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQubWluVmVydGljYWxBbmdsZTtcclxuICAgIHRoaXMubGlnaHRWZXJ0aWNhbFJpc2luZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3TGlnaHRQb3NpdGlvblJhZGl1cyhldmVudDogTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50KSB7XHJcbiAgICB0aGlzLmxpZ2h0UG9zaXRpb25SYWRpdXMgPSBldmVudC5wYXlsb2FkO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9MaWdodFNpbXVsYXRvci50cyIsImltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2x5Z29uQ2xpcHBlciB7XHJcbiAgcHVibGljIGNsaXBQb2x5Z29ucyhwb2x5Z29uMTogUG9seWdvbiwgcG9seWdvbjI6IFBvbHlnb24pIHtcclxuICAgIGlmIChwb2x5Z29uMS5pc0NvbnZleCgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsaXBQb2x5Z29uKHBvbHlnb24yLCBwb2x5Z29uMSk7XHJcbiAgICB9IGVsc2UgaWYgKHBvbHlnb24yLmlzQ29udmV4KCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2xpcFBvbHlnb24ocG9seWdvbjEsIHBvbHlnb24yKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvdGggcG9seWdvbnMgYXJlIGNvbmNhdmUnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBzdWJqZWN0UG9seWdvblxyXG4gICAqIEBwYXJhbSBjbGlwcGluZ1BvbHlnb24gTXVzdCBiZSBjb252ZXhcclxuICAgKi9cclxuICBwdWJsaWMgY2xpcFBvbHlnb24oc3ViamVjdFBvbHlnb246IFBvbHlnb24sIGNsaXBwaW5nUG9seWdvbjogUG9seWdvbikge1xyXG4gICAgY29uc3QgY2xpcHBpbmdQb2x5Z29uQ2VudGVyID0gY2xpcHBpbmdQb2x5Z29uLmdldENlbnRlck9mR3Jhdml0eSgpO1xyXG5cclxuICAgIGxldCBvdXRwdXQ6IFBvaW50W10gPSBzdWJqZWN0UG9seWdvbi5nZXRWZXJ0aWNlcygpO1xyXG4gICAgY29uc3QgY2xpcHBpbmdQb2x5Z29uRWRnZXM6IExpbmVbXSA9IFtdO1xyXG4gICAgY29uc3QgY2xpcHBpbmdQb2x5Z29uVmVydGljZXMgPSBjbGlwcGluZ1BvbHlnb24uZ2V0VmVydGljZXMoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaXBwaW5nUG9seWdvblZlcnRpY2VzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGVkZ2UgPSBuZXcgTGluZShcclxuICAgICAgICBjbGlwcGluZ1BvbHlnb25WZXJ0aWNlc1soaSArIDEpICUgY2xpcHBpbmdQb2x5Z29uVmVydGljZXMubGVuZ3RoXSxcclxuICAgICAgICBjbGlwcGluZ1BvbHlnb25WZXJ0aWNlc1tpXVxyXG4gICAgICApO1xyXG4gICAgICBjbGlwcGluZ1BvbHlnb25FZGdlcy5wdXNoKGVkZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgZWRnZSBvZiBjbGlwcGluZ1BvbHlnb25FZGdlcykge1xyXG4gICAgICBjb25zdCBpbnB1dCA9IG91dHB1dDtcclxuICAgICAgb3V0cHV0ID0gW107XHJcbiAgICAgIGxldCBwcCA9IGlucHV0W2lucHV0Lmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgaW5wdXQuZm9yRWFjaChwID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pc1NhbWVTaWRlKHAsIGNsaXBwaW5nUG9seWdvbkNlbnRlciwgZWRnZSkpIHtcclxuICAgICAgICAgIGlmICghdGhpcy5pc1NhbWVTaWRlKHBwLCBjbGlwcGluZ1BvbHlnb25DZW50ZXIsIGVkZ2UpKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKHRoaXMuZ2V0SW50ZXJzZWN0aW9uUG9pbnQobmV3IExpbmUocHAsIHApLCBlZGdlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvdXRwdXQucHVzaChwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNTYW1lU2lkZShwcCwgY2xpcHBpbmdQb2x5Z29uQ2VudGVyLCBlZGdlKSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaCh0aGlzLmdldEludGVyc2VjdGlvblBvaW50KG5ldyBMaW5lKHBwLCBwKSwgZWRnZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwcCA9IHA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdXRwdXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG91dHB1dFdpdGhvdXREdXBsaWNhdGVzOiBQb2ludFtdID0gW107XHJcbiAgICBvdXRwdXRXaXRob3V0RHVwbGljYXRlcy5wdXNoKG91dHB1dFswXSk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG91dHB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIVBvaW50LmVwc2lsb25FcXVhbHMob3V0cHV0W2ldLCBvdXRwdXRXaXRob3V0RHVwbGljYXRlc1tvdXRwdXRXaXRob3V0RHVwbGljYXRlcy5sZW5ndGggLSAxXSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgb3V0cHV0V2l0aG91dER1cGxpY2F0ZXMucHVzaChvdXRwdXRbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcclxuICAgIGNvbnN0IHJvdW5kZWRQb2ludHMgPSBvdXRwdXRXaXRob3V0RHVwbGljYXRlcy5tYXAocG9pbnQgPT4gcG9pbnQuZmxvb3IoKSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb2x5Z29uKHJvdW5kZWRQb2ludHMsIHN1YmplY3RQb2x5Z29uLmxpbmVQcm9wZXJ0aWVzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNTYW1lU2lkZShwMTogUG9pbnQsIHAyOiBQb2ludCwgbGluZTogTGluZSkge1xyXG4gICAgY29uc3QgcDFEaXIgPSBsaW5lLmdldERpcmVjdGlvbihwMSk7XHJcbiAgICBjb25zdCBwMkRpciA9IGxpbmUuZ2V0RGlyZWN0aW9uKHAyKTtcclxuXHJcbiAgICBpZiAocDFEaXIgPT09IHAyRGlyIHx8IHAxRGlyID09PSAwIHx8IHAyRGlyID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0SW50ZXJzZWN0aW9uUG9pbnQobGluZTE6IExpbmUsIGxpbmUyOiBMaW5lKSB7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24xID0gUG9pbnQuc3VidHJhY3QobGluZTEucDIsIGxpbmUxLnAxKTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbjIgPSBQb2ludC5zdWJ0cmFjdChsaW5lMi5wMiwgbGluZTIucDEpO1xyXG5cclxuICAgIGNvbnN0IGRvdFBlcnAgPSBkaXJlY3Rpb24xLnggKiBkaXJlY3Rpb24yLnkgLSBkaXJlY3Rpb24xLnkgKiBkaXJlY3Rpb24yLng7XHJcblxyXG4gICAgY29uc3QgYyA9IG5ldyBQb2ludChsaW5lMi5wMS54IC0gbGluZTEucDEueCwgbGluZTIucDEueSAtIGxpbmUxLnAxLnkpO1xyXG4gICAgY29uc3QgdCA9IChjLnggKiBkaXJlY3Rpb24yLnkgLSBjLnkgKiBkaXJlY3Rpb24yLngpIC8gZG90UGVycDtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvaW50KGxpbmUxLnAxLnggKyB0ICogZGlyZWN0aW9uMS54LCBsaW5lMS5wMS55ICsgdCAqIGRpcmVjdGlvbjEueSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL1BvbHlnb25DbGlwcGVyLnRzIiwiaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBMRVggfSBmcm9tICdMRVgnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJ1JlbmRlcmVyJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dERhdGFTZXJ2aWNlIH0gZnJvbSAndWkvSW5wdXREYXRhU2VydmljZSc7XHJcbmltcG9ydCB7IExvYWRpbmdVSVNlcnZpY2UgfSBmcm9tICd1aS9Mb2FkaW5nVUlTZXJ2aWNlJztcclxuaW1wb3J0IHsgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIH0gZnJvbSAndWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyJztcclxuaW1wb3J0IHsgTmV3UG9seWdvblVJQ29udHJvbGxlciB9IGZyb20gJ3VpL05ld1BvbHlnb25VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBQYXRoRHJhZ2dpbmdTZXJ2aWNlIH0gZnJvbSAndWkvUGF0aERyYWdnaW5nU2VydmljZSc7XHJcbmltcG9ydCB7IFBvaW50RHJhZ2dpbmdTZXJ2aWNlIH0gZnJvbSAndWkvUG9pbnREcmFnZ2luZ1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb2ludEluc2VydGVyU2VydmljZSB9IGZyb20gJ3VpL1BvaW50SW5zZXJ0ZXJTZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9pbnRSZW1vdmVyU2VydmljZSB9IGZyb20gJ3VpL1BvaW50UmVtb3ZlclNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb2ludFN5bmNTZXJ2aWNlIH0gZnJvbSAndWkvUG9pbnRTeW5jU2VydmljZSc7XHJcbmltcG9ydCB7IFNlcmlhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAndWkvU2VyaWFsaXphdGlvblNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQ2xvc2VzdFBhdGhGaW5kZXIgfSBmcm9tICdzZXJ2aWNlcy9DbG9zZXN0UGF0aEZpbmRlcic7XHJcbmltcG9ydCB7IEltYWdlRG93bmxvYWRlciB9IGZyb20gJ3NlcnZpY2VzL0ltYWdlRG93bmxvYWRlcic7XHJcbmltcG9ydCB7IFBvbHlnb25DbGlwcGVyIH0gZnJvbSAnc2VydmljZXMvUG9seWdvbkNsaXBwZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTGluZUNsaWNrRXZlbnQgfSBmcm9tICdldmVudHMvTGluZUNsaWNrRXZlbnQnO1xyXG5cclxuaW1wb3J0ICd1aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXknO1xyXG5pbXBvcnQgeyBEaWFsb2dPdmVybGF5IH0gZnJvbSAndWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5JztcclxuaW1wb3J0ICd1aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNCdXR0b24nO1xyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZyc7XHJcbmltcG9ydCB7IFBvbHlnb25DbGlwcGluZ1NlcnZpY2UgfSBmcm9tICd1aS9Qb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBVSUNvbnRyb2xsZXJEZXBlbmRlbmNpZXMge1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHN0YWdlOiBTdGFnZTtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuICBwb2x5Z29uQ2xpcHBlcjogUG9seWdvbkNsaXBwZXI7XHJcbiAgY2xvc2VzdFBhdGhGaW5kZXI6IENsb3Nlc3RQYXRoRmluZGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVUlDb250cm9sbGVyIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHBvbHlnb25DbGlwcGVyOiBQb2x5Z29uQ2xpcHBlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNsb3Nlc3RQYXRoRmluZGVyOiBDbG9zZXN0UGF0aEZpbmRlcjtcclxuXHJcbiAgcHJpdmF0ZSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIGFwcGxpY2F0aW9uVUlDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGlhbG9nT3ZlcmxheTogRGlhbG9nT3ZlcmxheTtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSB1aVNlcnZpY2VzOiBTZXJ2aWNlW10gPSBbXTtcclxuICBwcml2YXRlIG5ld1BvbHlnb25VSUNvbnRyb2xsZXI6IE5ld1BvbHlnb25VSUNvbnRyb2xsZXI7XHJcbiAgcHJpdmF0ZSBwYXRoRHJhZ2dpbmdTZXJ2aWNlOiBQYXRoRHJhZ2dpbmdTZXJ2aWNlO1xyXG4gIHByaXZhdGUgcG9seWdvbkNsaXBwaW5nU2VydmljZTogUG9seWdvbkNsaXBwaW5nU2VydmljZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBVSUNvbnRyb2xsZXJEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIHRoaXMucmVuZGVyZXIgPSBkZXBlbmRlbmNpZXMucmVuZGVyZXI7XHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5pbWFnZURvd25sb2FkZXIgPSBkZXBlbmRlbmNpZXMuaW1hZ2VEb3dubG9hZGVyO1xyXG4gICAgdGhpcy5wb2x5Z29uQ2xpcHBlciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uQ2xpcHBlcjtcclxuICAgIHRoaXMuY2xvc2VzdFBhdGhGaW5kZXIgPSBkZXBlbmRlbmNpZXMuY2xvc2VzdFBhdGhGaW5kZXI7XHJcblxyXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLmZpbmRBcHBsaWNhdGlvblVJQ29udGFpbmVyKCk7XHJcbiAgICB0aGlzLmZpbmREaWFsb2dPdmVybGF5KCk7XHJcblxyXG4gICAgdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgPSBuZXcgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyKHRoaXMuY2FudmFzKTtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlTmV3UG9seWdvblVJQ29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5jcmVhdGVQb2ludERyYWdnaW5nU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVQb2ludEluc2VydGVyU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVQb2ludFJlbW92ZXJTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBvaW50U3luY1NlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlUGF0aERyYWdnaW5nU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVTZXJpYWxpemF0aW9uU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVJbnB1dERhdGFTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBvbHlnb25DbGlwcGluZ1NlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlTG9hZGluZ1VJU2VydmljZSgpO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5mb3JFYWNoKHVpU2VydmljZSA9PiB1aVNlcnZpY2UuaW5pdCgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLmZvckVhY2godWlTZXJ2aWNlID0+IHVpU2VydmljZS5kZXN0cm95KCkpO1xyXG4gICAgdGhpcy51aVNlcnZpY2VzLnNwbGljZSgwLCB0aGlzLnVpU2VydmljZXMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICghZXZlbnQuY3RybEtleSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXRoRHJhZ2dpbmdTZXJ2aWNlLnN0YXJ0TW92aW5nUGF0aChldmVudCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXRoRHJhZ2dpbmdTZXJ2aWNlLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIuZ2V0UG9pbnRGcm9tTW91c2VFdmVudChldmVudCk7XHJcblxyXG4gICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBvbHlnb25DbGlwcGluZ1NlcnZpY2UuY2xpcFBvbHlnb25zKHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaXRUZXN0UmVzdWx0ID0gdGhpcy5zdGFnZS5oaXRUZXN0KHBvaW50KTtcclxuXHJcbiAgICBpZiAoIWhpdFRlc3RSZXN1bHQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubmV3UG9seWdvblVJQ29udHJvbGxlci5hZGROZXdQb2ludChwb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFoaXRUZXN0UmVzdWx0LnBhdGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChcclxuICAgICAgbmV3IExpbmVDbGlja0V2ZW50KGhpdFRlc3RSZXN1bHQubGluZSwgaGl0VGVzdFJlc3VsdC5wYXRoLCBwb2ludClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRBcHBsaWNhdGlvblVJQ29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgYXBwbGljYXRpb25VSUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZ3VyYXRpb24uYXBwbGljYXRpb25VSUNvbnRhaW5lcklEKTtcclxuICAgIGlmICghYXBwbGljYXRpb25VSUNvbnRhaW5lcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwcGxpY2F0aW9uIFVJIGNvbnRhaW5lciBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uVUlDb250YWluZXIgPSBhcHBsaWNhdGlvblVJQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaW5kRGlhbG9nT3ZlcmxheSgpIHtcclxuICAgIGNvbnN0IGRpYWxvZ092ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcHAtZGlhbG9nLW92ZXJsYXknKTtcclxuICAgIGlmICghZGlhbG9nT3ZlcmxheSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpYWxvZyBvdmVybGF5IG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlhbG9nT3ZlcmxheSA9IDxEaWFsb2dPdmVybGF5PmRpYWxvZ092ZXJsYXk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVBvaW50U3luY1NlcnZpY2UoKSB7XHJcbiAgICBjb25zdCBwb2ludFN5bmNTZXJ2aWNlID0gbmV3IFBvaW50U3luY1NlcnZpY2Uoe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMuYXBwbGljYXRpb25VSUNvbnRhaW5lcixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHBvaW50U3luY1NlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQb2ludFJlbW92ZXJTZXJ2aWNlKCkge1xyXG4gICAgY29uc3QgcG9pbnRSZW1vdmVyU2VydmljZSA9IG5ldyBQb2ludFJlbW92ZXJTZXJ2aWNlKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2gocG9pbnRSZW1vdmVyU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVBvaW50RHJhZ2dpbmdTZXJ2aWNlKCkge1xyXG4gICAgY29uc3QgcG9pbnREcmFnZ2luZ1NlcnZpY2UgPSBuZXcgUG9pbnREcmFnZ2luZ1NlcnZpY2Uoe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZSxcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhc1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2gocG9pbnREcmFnZ2luZ1NlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVOZXdQb2x5Z29uVUlDb250cm9sbGVyKCkge1xyXG4gICAgdGhpcy5uZXdQb2x5Z29uVUlDb250cm9sbGVyID0gbmV3IE5ld1BvbHlnb25VSUNvbnRyb2xsZXIoe1xyXG4gICAgICBhcHBsaWNhdGlvblVJQ29udGFpbmVyOiB0aGlzLmFwcGxpY2F0aW9uVUlDb250YWluZXIsXHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlLFxyXG4gICAgICBwb2x5Z29uTGF5ZXI6IHRoaXMuc3RhZ2UuZmluZExheWVyQnlOYW1lKExFWC5QT0xZR09OX0xBWUVSX05BTUUpLFxyXG4gICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcixcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2godGhpcy5uZXdQb2x5Z29uVUlDb250cm9sbGVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9pbnRJbnNlcnRlclNlcnZpY2UoKSB7XHJcbiAgICBjb25zdCBwb2ludEluc2VydGVyU2VydmljZSA9IG5ldyBQb2ludEluc2VydGVyU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHBvaW50SW5zZXJ0ZXJTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUGF0aERyYWdnaW5nU2VydmljZSgpIHtcclxuICAgIHRoaXMucGF0aERyYWdnaW5nU2VydmljZSA9IG5ldyBQYXRoRHJhZ2dpbmdTZXJ2aWNlKHtcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXHJcbiAgICAgIGNsb3Nlc3RQYXRoRmluZGVyOiB0aGlzLmNsb3Nlc3RQYXRoRmluZGVyXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaCh0aGlzLnBhdGhEcmFnZ2luZ1NlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVTZXJpYWxpemF0aW9uU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHNlcmlhbGl6YXRpb25TZXJ2aWNlID0gbmV3IFNlcmlhbGl6YXRpb25TZXJ2aWNlKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2VcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHNlcmlhbGl6YXRpb25TZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSW5wdXREYXRhU2VydmljZSgpIHtcclxuICAgIGNvbnN0IGlucHV0RGF0YVNlcnZpY2UgPSBuZXcgSW5wdXREYXRhU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIGltYWdlRG93bmxvYWRlcjogdGhpcy5pbWFnZURvd25sb2FkZXIsXHJcbiAgICAgIGRpYWxvZ092ZXJsYXk6IHRoaXMuZGlhbG9nT3ZlcmxheVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2goaW5wdXREYXRhU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVBvbHlnb25DbGlwcGluZ1NlcnZpY2UoKSB7XHJcbiAgICB0aGlzLnBvbHlnb25DbGlwcGluZ1NlcnZpY2UgPSBuZXcgUG9seWdvbkNsaXBwaW5nU2VydmljZSh7XHJcbiAgICAgIHBvbHlnb25DbGlwcGVyOiB0aGlzLnBvbHlnb25DbGlwcGVyLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBwb2x5Z29uTGF5ZXI6IHRoaXMuc3RhZ2UuZmluZExheWVyQnlOYW1lKExFWC5QT0xZR09OX0xBWUVSX05BTUUpLFxyXG4gICAgICBjbG9zZXN0UGF0aEZpbmRlcjogdGhpcy5jbG9zZXN0UGF0aEZpbmRlclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2godGhpcy5wb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTG9hZGluZ1VJU2VydmljZSgpIHtcclxuICAgIGNvbnN0IGxvYWRpbmdVSVNlcnZpY2UgPSBuZXcgTG9hZGluZ1VJU2VydmljZSh7XHJcbiAgICAgIGRpYWxvZ092ZXJsYXk6IHRoaXMuZGlhbG9nT3ZlcmxheSxcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2gobG9hZGluZ1VJU2VydmljZSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1VJQ29udHJvbGxlci50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VEb3dubG9hZGVyIH0gZnJvbSAnc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nT3ZlcmxheSB9IGZyb20gJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEJhY2tncm91bmRTZWxlY3RCdXR0b24sXHJcbiAgSGVpZ2h0TWFwU2VsZWN0QnV0dG9uLFxyXG4gIExpZ2h0Q29sb3JTZWxlY3RCdXR0b24sXHJcbiAgTGlnaHRUeXBlU2VsZWN0LFxyXG4gIE5vcm1hbE1hcFNlbGVjdEJ1dHRvblxyXG59IGZyb20gJ3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YSc7XHJcblxyXG5pbnRlcmZhY2UgU2VyaWFsaXphdGlvblNlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG4gIGRpYWxvZ092ZXJsYXk6IERpYWxvZ092ZXJsYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dERhdGFTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBpbnB1dERhdGFDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGlhbG9nT3ZlcmxheTogRGlhbG9nT3ZlcmxheTtcclxuICBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcblxyXG4gIHByaXZhdGUgYmFja2dyb3VuZFNlbGVjdEJ1dHRvbjogQmFja2dyb3VuZFNlbGVjdEJ1dHRvbjtcclxuICBwcml2YXRlIGhlaWdodE1hcFNlbGVjdEJ1dHRvbjogSGVpZ2h0TWFwU2VsZWN0QnV0dG9uO1xyXG4gIHByaXZhdGUgbGlnaHRDb2xvclNlbGVjdEJ1dHRvbjogTGlnaHRDb2xvclNlbGVjdEJ1dHRvbjtcclxuICBwcml2YXRlIG5vcm1hbE1hcFNlbGVjdEJ1dHRvbjogTm9ybWFsTWFwU2VsZWN0QnV0dG9uO1xyXG4gIHByaXZhdGUgbGlnaHRUeXBlU2VsZWN0OiBMaWdodFR5cGVTZWxlY3Q7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogU2VyaWFsaXphdGlvblNlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuaW1hZ2VEb3dubG9hZGVyID0gZGVwZW5kZW5jaWVzLmltYWdlRG93bmxvYWRlcjtcclxuICAgIHRoaXMuZGlhbG9nT3ZlcmxheSA9IGRlcGVuZGVuY2llcy5kaWFsb2dPdmVybGF5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLmZpbmRJbnB1dERhdGFDb250YWluZXIoKTtcclxuICAgIHRoaXMuc2V0dXBFbGVtZW50cygpO1xyXG5cclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYmFja2dyb3VuZFNlbGVjdEJ1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmxpZ2h0Q29sb3JTZWxlY3RCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ub3JtYWxNYXBTZWxlY3RCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oZWlnaHRNYXBTZWxlY3RCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5saWdodFR5cGVTZWxlY3QpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmJhY2tncm91bmRTZWxlY3RCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5saWdodENvbG9yU2VsZWN0QnV0dG9uKTtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMubm9ybWFsTWFwU2VsZWN0QnV0dG9uKTtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuaGVpZ2h0TWFwU2VsZWN0QnV0dG9uKTtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMubGlnaHRUeXBlU2VsZWN0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZElucHV0RGF0YUNvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IGlucHV0RGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1kYXRhLWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKCFpbnB1dERhdGFDb250YWluZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBkYXRhIGNvbnRhaW5lciBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lciA9IGlucHV0RGF0YUNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXBFbGVtZW50cygpIHtcclxuICAgIGNvbnN0IHsgZXZlbnRBZ2dyZWdhdG9yLCBkaWFsb2dPdmVybGF5LCBpbWFnZURvd25sb2FkZXIgfSA9IHRoaXM7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VTZWxlY3RCdXR0b25EZXBlbmRlbmNpZXMgPSB7IGV2ZW50QWdncmVnYXRvciwgZGlhbG9nT3ZlcmxheSwgaW1hZ2VEb3dubG9hZGVyIH07XHJcbiAgICBjb25zdCBjb2xvclNlbGVjdEJ1dHRvbkRlcGVuZGVuY2llcyA9IHsgZGlhbG9nT3ZlcmxheSwgZXZlbnRBZ2dyZWdhdG9yIH07XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kU2VsZWN0QnV0dG9uID0gbmV3IEJhY2tncm91bmRTZWxlY3RCdXR0b24oaW1hZ2VTZWxlY3RCdXR0b25EZXBlbmRlbmNpZXMpO1xyXG4gICAgdGhpcy5oZWlnaHRNYXBTZWxlY3RCdXR0b24gPSBuZXcgSGVpZ2h0TWFwU2VsZWN0QnV0dG9uKGltYWdlU2VsZWN0QnV0dG9uRGVwZW5kZW5jaWVzKTtcclxuICAgIHRoaXMubGlnaHRDb2xvclNlbGVjdEJ1dHRvbiA9IG5ldyBMaWdodENvbG9yU2VsZWN0QnV0dG9uKGNvbG9yU2VsZWN0QnV0dG9uRGVwZW5kZW5jaWVzKTtcclxuICAgIHRoaXMubm9ybWFsTWFwU2VsZWN0QnV0dG9uID0gbmV3IE5vcm1hbE1hcFNlbGVjdEJ1dHRvbihpbWFnZVNlbGVjdEJ1dHRvbkRlcGVuZGVuY2llcyk7XHJcbiAgICB0aGlzLmxpZ2h0VHlwZVNlbGVjdCA9IG5ldyBMaWdodFR5cGVTZWxlY3QoeyBldmVudEFnZ3JlZ2F0b3IgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL0lucHV0RGF0YVNlcnZpY2UudHMiLCJpbXBvcnQgeyBCYWNrZ3JvdW5kU2VsZWN0QnV0dG9uIH0gZnJvbSAndWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0JhY2tncm91bmRTZWxlY3RCdXR0b24nO1xyXG5pbXBvcnQgeyBIZWlnaHRNYXBTZWxlY3RCdXR0b24gfSBmcm9tICd1aS9jb21wb25lbnRzL2lucHV0LWRhdGEvSGVpZ2h0TWFwU2VsZWN0QnV0dG9uJztcclxuaW1wb3J0IHsgTGlnaHRDb2xvclNlbGVjdEJ1dHRvbiB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodENvbG9yU2VsZWN0QnV0dG9uJztcclxuaW1wb3J0IHsgTGlnaHRUeXBlU2VsZWN0IH0gZnJvbSAndWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0xpZ2h0VHlwZVNlbGVjdCc7XHJcbmltcG9ydCB7IE5vcm1hbE1hcFNlbGVjdEJ1dHRvbiB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9Ob3JtYWxNYXBTZWxlY3RCdXR0b24nO1xyXG5cclxuZXhwb3J0IHtcclxuICBCYWNrZ3JvdW5kU2VsZWN0QnV0dG9uLFxyXG4gIEhlaWdodE1hcFNlbGVjdEJ1dHRvbixcclxuICBMaWdodENvbG9yU2VsZWN0QnV0dG9uLFxyXG4gIExpZ2h0VHlwZVNlbGVjdCxcclxuICBOb3JtYWxNYXBTZWxlY3RCdXR0b25cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL2luZGV4LnRzIiwiaW1wb3J0IHsgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VTZWxlY3REaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cnO1xyXG5pbXBvcnQgeyBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbiwgSW1hZ2VTZWxlY3REaWFsb2dCdXR0b25EZXBlbmRlbmNpZXMgfSBmcm9tICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2dCdXR0b24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRTZWxlY3RCdXR0b24gZXh0ZW5kcyBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbiB7XHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbkRlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoZGVwZW5kZW5jaWVzKTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbi5pbm5lclRleHQgPSAnU2VsZWN0IGJhY2tncm91bmQgdGV4dHVyZSc7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0dXBEaWFsb2dCb3goKSB7XHJcbiAgICB0aGlzLmRpYWxvZ0JveCA9IG5ldyBJbWFnZVNlbGVjdERpYWxvZyhcclxuICAgICAgY29uZmlndXJhdGlvbi5wcmVzZXRCYWNrZ3JvdW5kVGV4dHVyZXMsXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24uaW5pdGlhbEN1c3RvbUJhY2tncm91bmRDb2xvckhleFxyXG4gICAgKTtcclxuICAgIHRoaXMuZGlhbG9nQm94Lm5hbWUgPSAnQmFja2dyb3VuZCB0ZXh0dXJlJztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhc3luYyBvbkRpYWxvZ0JveENsb3NlZCgpIHtcclxuICAgIGlmICh0aGlzLmRpYWxvZ0JveC53YXNDYW5jZWxsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGF3YWl0IHRoaXMuZ2V0U2VsZWN0ZWRJbWFnZURhdGEoKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50KGltYWdlRGF0YSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1iYWNrZ3JvdW5kLXNlbGVjdC1idXR0b24nLCBCYWNrZ3JvdW5kU2VsZWN0QnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0JhY2tncm91bmRTZWxlY3RCdXR0b24udHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9JbWFnZVNlbGVjdERpYWxvZy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW1hZ2VTZWxlY3REaWFsb2cuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbWFnZS1zZWxlY3QtZGlhbG9nIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogNzUlO1xcbiAgbWF4LXdpZHRoOiA4MDBweDsgfVxcblxcbi5pbWFnZS1zZWxlY3QtZGlhbG9nX19oZWFkaW5nIHtcXG4gIG1hcmdpbjogMC41ZW0gMDsgfVxcblxcbi5pbWFnZS1zZWxlY3QtZGlhbG9nX19ibG9jayB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtOyB9XFxuXFxuLmltYWdlLXNlbGVjdC1kaWFsb2dfX3ByZXNldC1pbWFnZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAuaW1hZ2Utc2VsZWN0LWRpYWxvZ19fcHJlc2V0LWltYWdlcy1jb250YWluZXIgPiBkaXYge1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIG1hcmdpbjogYXV0bzsgfVxcbiAgLmltYWdlLXNlbGVjdC1kaWFsb2dfX3ByZXNldC1pbWFnZXMtY29udGFpbmVyIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19fY3VzdG9tLWltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAyNSU7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbjogYXV0bzsgfVxcblxcbi5pbWFnZS1zZWxlY3QtZGlhbG9nX19pbWFnZS0tc2VsZWN0ZWQge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggZ3JlZW47IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLXRvcDogMWVtOyB9XFxuICAuaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmV3SGVpZ2h0TWFwRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YSc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IEltYWdlU2VsZWN0RGlhbG9nIH0gZnJvbSAndWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nJztcclxuaW1wb3J0IHsgSW1hZ2VTZWxlY3REaWFsb2dCdXR0b24sIEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uRGVwZW5kZW5jaWVzIH0gZnJvbSAndWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nQnV0dG9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWlnaHRNYXBTZWxlY3RCdXR0b24gZXh0ZW5kcyBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbiB7XHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbkRlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoZGVwZW5kZW5jaWVzKTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbi5pbm5lclRleHQgPSAnU2VsZWN0IGhlaWdodCBtYXAnO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldHVwRGlhbG9nQm94KCkge1xyXG4gICAgdGhpcy5kaWFsb2dCb3ggPSBuZXcgSW1hZ2VTZWxlY3REaWFsb2coXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ucHJlc2V0SGVpZ2h0TWFwcyxcclxuICAgICAgY29uZmlndXJhdGlvbi5pbml0aWFsQ3VzdG9tSGVpZ2h0TWFwQ29sb3JIZXhcclxuICAgICk7XHJcbiAgICB0aGlzLmRpYWxvZ0JveC5uYW1lID0gJ0hlaWdodCBtYXAnO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFzeW5jIG9uRGlhbG9nQm94Q2xvc2VkKCkge1xyXG4gICAgaWYgKHRoaXMuZGlhbG9nQm94Lndhc0NhbmNlbGxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gYXdhaXQgdGhpcy5nZXRTZWxlY3RlZEltYWdlRGF0YSgpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0hlaWdodE1hcEV2ZW50KGltYWdlRGF0YSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1oZWlnaHQtbWFwLXNlbGVjdC1idXR0b24nLCBIZWlnaHRNYXBTZWxlY3RCdXR0b24pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2lucHV0LWRhdGEvSGVpZ2h0TWFwU2VsZWN0QnV0dG9uLnRzIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IE5ld0xpZ2h0Q29sb3JFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JTZWxlY3REaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQm94QnV0dG9uLCBEaWFsb2dCb3hCdXR0b25EZXBlbmRlbmNpZXMgfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveEJ1dHRvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpZ2h0Q29sb3JTZWxlY3RCdXR0b25EZXBlbmRlbmNpZXMgZXh0ZW5kcyBEaWFsb2dCb3hCdXR0b25EZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGlnaHRDb2xvclNlbGVjdEJ1dHRvbiBleHRlbmRzIERpYWxvZ0JveEJ1dHRvbiB7XHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBwcm90ZWN0ZWQgZGlhbG9nQm94OiBDb2xvclNlbGVjdERpYWxvZztcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBMaWdodENvbG9yU2VsZWN0QnV0dG9uRGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcih7IGRpYWxvZ092ZXJsYXk6IGRlcGVuZGVuY2llcy5kaWFsb2dPdmVybGF5IH0pO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbi5pbm5lclRleHQgPSAnU2VsZWN0IGxpZ2h0IGNvbG9yJztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXR1cERpYWxvZ0JveCgpIHtcclxuICAgIHRoaXMuZGlhbG9nQm94ID0gbmV3IENvbG9yU2VsZWN0RGlhbG9nKCk7XHJcbiAgICB0aGlzLmRpYWxvZ0JveC5uYW1lID0gJ0xpZ2h0IGNvbG9yJztcclxuICAgIHRoaXMuZGlhbG9nQm94LnNlbGVjdGVkQ29sb3IgPSBjb25maWd1cmF0aW9uLnByZXNldExpZ2h0Q29sb3IudG9Db2xvcigpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uRGlhbG9nQm94Q2xvc2VkKCkge1xyXG4gICAgaWYgKHRoaXMuZGlhbG9nQm94Lndhc0NhbmNlbGxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlnaHRDb2xvciA9IHRoaXMuZGlhbG9nQm94LnNlbGVjdGVkQ29sb3I7XHJcbiAgICBjb25zdCBsaWdodFZlY3RvciA9IFZlY3RvcjMuZnJvbUNvbG9yKGxpZ2h0Q29sb3IpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRDb2xvckV2ZW50KGxpZ2h0VmVjdG9yKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWxpZ2h0LWNvbG9yLXNlbGVjdC1idXR0b24nLCBMaWdodENvbG9yU2VsZWN0QnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0xpZ2h0Q29sb3JTZWxlY3RCdXR0b24udHMiLCJpbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9EaWFsb2dCb3guc2Nzcyc7XHJcblxyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbW1vbi9Db2xvcic7XHJcblxyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy5zY3NzJztcclxuXHJcbmNvbnN0IGNsYXNzTmFtZXMgPSB7XHJcbiAgRElBTE9HX0JPWDogJ2RpYWxvZy1ib3gnLFxyXG4gIERJQUxPRzogJ2NvbG9yLXNlbGVjdC1kaWFsb2cnLFxyXG4gIEhFQURFUjogJ2NvbG9yLXNlbGVjdC1kaWFsb2dfX2hlYWRlcicsXHJcbiAgSEVBRElORzogJ2NvbG9yLXNlbGVjdC1kaWFsb2dfX2hlYWRpbmcnLFxyXG4gIEJMT0NLOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYmxvY2snLFxyXG4gIEJPVFRPTV9CVVRUT05TOiAnY29sb3Itc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMnXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JTZWxlY3REaWFsb2cgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIERpYWxvZ0JveCB7XHJcbiAgcHJpdmF0ZSBfd2FzQ2FuY2VsbGVkID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSBoZWFkaW5nOiBIVE1MSGVhZGluZ0VsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgY29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGNhbmNlbEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjb25maXJtQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkRJQUxPR19CT1gpO1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuRElBTE9HKTtcclxuXHJcbiAgICB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2sgPSB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2sgPSB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVIZWFkZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlQ29sb3JJbnB1dCgpO1xyXG4gICAgdGhpcy5jcmVhdGVCb3R0b21CdXR0b25zKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICByZXR1cm4gWyduYW1lJ107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpIHx8ICdDb2xvciBzZWxlY3QnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2V0QXR0cmlidXRlKCduYW1lJywgdmFsdWUpO1xyXG4gICAgdGhpcy5oZWFkaW5nLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzZWxlY3RlZENvbG9yKCkge1xyXG4gICAgcmV0dXJuIENvbG9yLmZyb21IZXhTdHJpbmcodGhpcy5jb2xvcklucHV0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc2VsZWN0ZWRDb2xvcihjb2xvcjogQ29sb3IpIHtcclxuICAgIHRoaXMuY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yLnRvSGV4U3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLl93YXNDYW5jZWxsZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2spO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdhc0NhbmNlbGxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl93YXNDYW5jZWxsZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbG9zZScpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5DbG9zZSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmNyZWF0ZUJsb2NrKCk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkhFQURFUik7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgdGhpcy5oZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRoaXMuaGVhZGluZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuSEVBRElORyk7XHJcbiAgICB0aGlzLmhlYWRpbmcuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLmhlYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDb2xvcklucHV0KCkge1xyXG4gICAgdGhpcy5jb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRoaXMuY29sb3JJbnB1dC50eXBlID0gJ2NvbG9yJztcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5jb2xvcklucHV0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQm90dG9tQnV0dG9ucygpIHtcclxuICAgIGNvbnN0IGJvdHRvbUJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJvdHRvbUJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJPVFRPTV9CVVRUT05TKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQoYm90dG9tQnV0dG9uc0NvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xyXG5cclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLmlubmVyVGV4dCA9ICdDb25maXJtJztcclxuXHJcbiAgICBib3R0b21CdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FuY2VsQnV0dG9uKTtcclxuICAgIGJvdHRvbUJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb25maXJtQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DYW5jZWxCdXR0b25DbGljaygpIHtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db25maXJtQnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLl93YXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQmxvY2soKSB7XHJcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJMT0NLKTtcclxuXHJcbiAgICByZXR1cm4gYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1jb2xvci1zZWxlY3QtZGlhbG9nJywgQ29sb3JTZWxlY3REaWFsb2cpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dCb3guc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dCb3guc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dCb3guc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9EaWFsb2dCb3guc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRpYWxvZy1ib3gge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLCAwKTtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgY29sb3I6ICMyMjI7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTsgfVxcblxcbi5kaWFsb2ctYm94LS1hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMSk7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9EaWFsb2dCb3guc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQ29sb3JTZWxlY3REaWFsb2cuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Db2xvclNlbGVjdERpYWxvZy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29sb3Itc2VsZWN0LWRpYWxvZyB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1heC13aWR0aDogMzAwcHg7IH1cXG5cXG4uY29sb3Itc2VsZWN0LWRpYWxvZ19fYmxvY2sge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgcGFkZGluZy1ib3R0b206IDFlbTsgfVxcblxcbi5jb2xvci1zZWxlY3QtZGlhbG9nX19oZWFkaW5nIHtcXG4gIG1hcmdpbjogMC41ZW0gMDsgfVxcblxcbi5jb2xvci1zZWxlY3QtZGlhbG9nX19ib3R0b20tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tdG9wOiAxZW07IH1cXG4gIC5jb2xvci1zZWxlY3QtZGlhbG9nX19ib3R0b20tYnV0dG9ucyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuM2VtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBMaWdodFR5cGUgfSBmcm9tICdjb21tb24vTGlnaHRUeXBlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBOZXdMaWdodFR5cGVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgTGlnaHRQb3NpdGlvblJhZGl1c0lucHV0IH0gZnJvbSAndWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0xpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpZ2h0VHlwZVNlbGVjdERlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaWdodFR5cGVTZWxlY3QgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBsaWdodFR5cGVJbmZvTGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgbGlnaHRUeXBlOiBMaWdodFR5cGUuQ29uc3RhbnQsXHJcbiAgICAgIG9wdGlvblZhbHVlOiAnY29uc3RhbnQnLFxyXG4gICAgICBvcHRpb25MYWJlbDogJ0NvbnN0YW50IChbMCwgMCwgMV0pJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGlnaHRUeXBlOiBMaWdodFR5cGUuTW92aW5nLFxyXG4gICAgICBvcHRpb25WYWx1ZTogJ21vdmluZycsXHJcbiAgICAgIG9wdGlvbkxhYmVsOiAnTW92aW5nIGFib3ZlIHRoZSBzY3JlZW4nXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgcHJpdmF0ZSBsaWdodFR5cGVTZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gIHByaXZhdGUgbGlnaHRQb3NpdGlvblJhZGl1c0lucHV0OiBMaWdodFBvc2l0aW9uUmFkaXVzSW5wdXQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogTGlnaHRUeXBlU2VsZWN0RGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy5zZXR1cExpZ2h0VHlwZUxhYmVsKCk7XHJcbiAgICB0aGlzLnNldHVwTGlnaHRUeXBlU2VsZWN0KCk7XHJcblxyXG4gICAgdGhpcy5vbkxpZ2h0VHlwZUNoYW5nZSA9IHRoaXMub25MaWdodFR5cGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubGlnaHRQb3NpdGlvblJhZGl1c0lucHV0ID0gbmV3IExpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dCh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saWdodFBvc2l0aW9uUmFkaXVzSW5wdXQuc3R5bGUubWFyZ2luTGVmdCA9ICc1cHgnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzZWxlY3RlZExpZ2h0VHlwZSgpOiBMaWdodFR5cGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMubGlnaHRUeXBlU2VsZWN0LnZhbHVlO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRMaWdodFR5cGVJbmZvID0gdGhpcy5saWdodFR5cGVJbmZvTGlzdC5maW5kKFxyXG4gICAgICBsaWdodFR5cGVJbmZvID0+IGxpZ2h0VHlwZUluZm8ub3B0aW9uVmFsdWUgPT09IHNlbGVjdGVkVmFsdWVcclxuICAgICk7XHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZExpZ2h0VHlwZUluZm8pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGxpZ2h0IHR5cGUgc2VsZWN0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0ZWRMaWdodFR5cGVJbmZvLmxpZ2h0VHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc2VsZWN0ZWRMaWdodFR5cGUobGlnaHRUeXBlOiBMaWdodFR5cGUpIHtcclxuICAgIGNvbnN0IGZvdW5kTGlnaHRUeXBlSW5mbyA9IHRoaXMubGlnaHRUeXBlSW5mb0xpc3QuZmluZChcclxuICAgICAgbGlnaHRUeXBlSW5mbyA9PiBsaWdodFR5cGVJbmZvLmxpZ2h0VHlwZSA9PT0gbGlnaHRUeXBlXHJcbiAgICApO1xyXG4gICAgaWYgKCFmb3VuZExpZ2h0VHlwZUluZm8pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaWdodCB0eXBlIG5vdCBzdXBwb3J0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxpZ2h0VHlwZVNlbGVjdC52YWx1ZSA9IGZvdW5kTGlnaHRUeXBlSW5mby5vcHRpb25WYWx1ZTtcclxuICAgIHRoaXMub25MaWdodFR5cGVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMubGlnaHRUeXBlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25MaWdodFR5cGVDaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5saWdodFR5cGVTZWxlY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkxpZ2h0VHlwZUNoYW5nZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwTGlnaHRUeXBlTGFiZWwoKSB7XHJcbiAgICBjb25zdCBsaWdodFR5cGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsaWdodFR5cGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsaWdodC10eXBlLXNlbGVjdCcpO1xyXG4gICAgbGlnaHRUeXBlTGFiZWwuaW5uZXJUZXh0ID0gJ0xpZ2h0IHR5cGU6ICc7XHJcblxyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChsaWdodFR5cGVMYWJlbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwTGlnaHRUeXBlU2VsZWN0KCkge1xyXG4gICAgdGhpcy5saWdodFR5cGVTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIHRoaXMubGlnaHRUeXBlU2VsZWN0LmlkID0gJ2xpZ2h0LXR5cGUtc2VsZWN0JztcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5saWdodFR5cGVTZWxlY3QpO1xyXG5cclxuICAgIHRoaXMubGlnaHRUeXBlSW5mb0xpc3QuZm9yRWFjaChsaWdodFR5cGUgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGxpZ2h0VHlwZS5vcHRpb25MYWJlbDtcclxuICAgICAgb3B0aW9uLnZhbHVlID0gbGlnaHRUeXBlLm9wdGlvblZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5saWdodFR5cGVTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkxpZ2h0VHlwZUNoYW5nZSgpIHtcclxuICAgIGNvbnN0IGxpZ2h0VHlwZSA9IHRoaXMuc2VsZWN0ZWRMaWdodFR5cGU7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRUeXBlRXZlbnQobGlnaHRUeXBlKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuXHJcbiAgICBpZiAobGlnaHRUeXBlID09PSBMaWdodFR5cGUuTW92aW5nKSB7XHJcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5saWdodFBvc2l0aW9uUmFkaXVzSW5wdXQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1saWdodC10eXBlLXNlbGVjdCcsIExpZ2h0VHlwZVNlbGVjdCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodFR5cGVTZWxlY3QudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5cclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuaW50ZXJmYWNlIExpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dERlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaWdodFBvc2l0aW9uUmFkaXVzSW5wdXQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBpbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBMaWdodFBvc2l0aW9uUmFkaXVzSW5wdXREZXBlbmRlbmNpZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xpZ2h0LXBvc2l0aW9uLXJhZGl1cy1pbnB1dCcpO1xyXG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gJ0xpZ2h0IHBvc2l0aW9uIHJhZGl1czogJztcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGhpcy5pbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICB0aGlzLmlucHV0LmlkID0gJ2xpZ2h0LXBvc2l0aW9uLXJhZGl1cy1pbnB1dCc7XHJcbiAgICB0aGlzLmlucHV0Lm1pbiA9ICcwJztcclxuICAgIHRoaXMuaW5wdXQuc3R5bGUud2lkdGggPSAnODBweCc7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xyXG5cclxuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0LmRlZmF1bHRSYWRpdXMpO1xyXG4gICAgdGhpcy5vbkxpZ2h0UG9zaXRpb25SYWRpdXNDaGFuZ2UgPSB0aGlzLm9uTGlnaHRQb3NpdGlvblJhZGl1c0NoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBsaWdodFBvc2l0aW9uUmFkaXVzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmlucHV0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgbGlnaHRQb3NpdGlvblJhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNldElucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5vbkxpZ2h0UG9zaXRpb25SYWRpdXNDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkxpZ2h0UG9zaXRpb25SYWRpdXNDaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uTGlnaHRQb3NpdGlvblJhZGl1c0NoYW5nZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTGlnaHRQb3NpdGlvblJhZGl1c0NoYW5nZSgpIHtcclxuICAgIGNvbnN0IGxpZ2h0UG9zaXRpb25SYWRpdXMgPSB0aGlzLmxpZ2h0UG9zaXRpb25SYWRpdXM7XHJcbiAgICB0aGlzLnNldElucHV0VmFsdWUobGlnaHRQb3NpdGlvblJhZGl1cyk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50KGxpZ2h0UG9zaXRpb25SYWRpdXMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWUudG9GaXhlZCgyKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWxpZ2h0LXBvc2l0aW9uLXJhZGl1cy1pbnB1dCcsIExpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodFBvc2l0aW9uUmFkaXVzSW5wdXQudHMiLCJpbXBvcnQgeyBOZXdOb3JtYWxNYXBFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VTZWxlY3REaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cnO1xyXG5pbXBvcnQgeyBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbiwgSW1hZ2VTZWxlY3REaWFsb2dCdXR0b25EZXBlbmRlbmNpZXMgfSBmcm9tICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2dCdXR0b24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5vcm1hbE1hcFNlbGVjdEJ1dHRvbiBleHRlbmRzIEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uIHtcclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uRGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcihkZXBlbmRlbmNpZXMpO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uLmlubmVyVGV4dCA9ICdTZWxlY3Qgbm9ybWFsIG1hcCc7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0dXBEaWFsb2dCb3goKSB7XHJcbiAgICB0aGlzLmRpYWxvZ0JveCA9IG5ldyBJbWFnZVNlbGVjdERpYWxvZyhcclxuICAgICAgY29uZmlndXJhdGlvbi5wcmVzZXROb3JtYWxNYXBzLFxyXG4gICAgICBjb25maWd1cmF0aW9uLmluaXRpYWxDdXN0b21Ob3JtYWxNYXBDb2xvckhleFxyXG4gICAgKTtcclxuICAgIHRoaXMuZGlhbG9nQm94Lm5hbWUgPSAnTm9ybWFsIG1hcCc7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYXN5bmMgb25EaWFsb2dCb3hDbG9zZWQoKSB7XHJcbiAgICBpZiAodGhpcy5kaWFsb2dCb3gud2FzQ2FuY2VsbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBhd2FpdCB0aGlzLmdldFNlbGVjdGVkSW1hZ2VEYXRhKCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3Tm9ybWFsTWFwRXZlbnQoaW1hZ2VEYXRhKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLW5vcm1hbC1tYXAtc2VsZWN0LWJ1dHRvbicsIE5vcm1hbE1hcFNlbGVjdEJ1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9Ob3JtYWxNYXBTZWxlY3RCdXR0b24udHMiLCJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTG9hZGluZ0ZpbmlzaGVkRXZlbnQgfSBmcm9tICdldmVudHMvdWkvTG9hZGluZ0ZpbmlzaGVkRXZlbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nU3RhcnRlZEV2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL0xvYWRpbmdTdGFydGVkRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nT3ZlcmxheSB9IGZyb20gJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheSc7XHJcbmltcG9ydCB7IExvYWRpbmdCYXJEaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2xvYWRpbmctYmFyLWRpYWxvZy9Mb2FkaW5nQmFyRGlhbG9nJztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmludGVyZmFjZSBMb2FkaW5nVUlTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBkaWFsb2dPdmVybGF5OiBEaWFsb2dPdmVybGF5O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1VJU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBkaWFsb2dPdmVybGF5OiBEaWFsb2dPdmVybGF5O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9hZGluZ0JhckRpYWxvZzogTG9hZGluZ0JhckRpYWxvZztcclxuXHJcbiAgcHJpdmF0ZSBsb2FkZWRBc3NldHNDb3VudCA9IDA7XHJcbiAgcHJpdmF0ZSB0b3RhbEFzc2V0c1RvTG9hZENvdW50ID0gMDtcclxuXHJcbiAgcHJpdmF0ZSBoaWRlTG9hZGluZ0JhclRpbWVvdXRJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogTG9hZGluZ1VJU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5kaWFsb2dPdmVybGF5ID0gZGVwZW5kZW5jaWVzLmRpYWxvZ092ZXJsYXk7XHJcblxyXG4gICAgdGhpcy5sb2FkaW5nQmFyRGlhbG9nID0gbmV3IExvYWRpbmdCYXJEaWFsb2coKTtcclxuXHJcbiAgICB0aGlzLm9uTG9hZGluZ1N0YXJ0ZWRFdmVudCA9IHRoaXMub25Mb2FkaW5nU3RhcnRlZEV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTG9hZGluZ0ZpbmlzaGVkRXZlbnQgPSB0aGlzLm9uTG9hZGluZ0ZpbmlzaGVkRXZlbnQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGlkZUxvYWRpbmdCYXIgPSB0aGlzLmhpZGVMb2FkaW5nQmFyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIExvYWRpbmdGaW5pc2hlZEV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbkxvYWRpbmdGaW5pc2hlZEV2ZW50XHJcbiAgICApO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgTG9hZGluZ1N0YXJ0ZWRFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25Mb2FkaW5nU3RhcnRlZEV2ZW50XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBMb2FkaW5nRmluaXNoZWRFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25Mb2FkaW5nRmluaXNoZWRFdmVudFxyXG4gICAgKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIExvYWRpbmdTdGFydGVkRXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICB0aGlzLm9uTG9hZGluZ1N0YXJ0ZWRFdmVudFxyXG4gICAgKTtcclxuICAgIHRoaXMuaGlkZUxvYWRpbmdCYXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Mb2FkaW5nU3RhcnRlZEV2ZW50KCkge1xyXG4gICAgaWYgKHRoaXMudG90YWxBc3NldHNUb0xvYWRDb3VudCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNob3dMb2FkaW5nQmFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b3RhbEFzc2V0c1RvTG9hZENvdW50ICs9IDE7XHJcbiAgICB0aGlzLnVwZGF0ZUxvYWRpbmdCYXIoKTtcclxuICAgIHRoaXMuYWJvcnREZWxheWVkSGlkZUxvYWRpbmdCYXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Mb2FkaW5nRmluaXNoZWRFdmVudCgpIHtcclxuICAgIHRoaXMubG9hZGVkQXNzZXRzQ291bnQgKz0gMTtcclxuICAgIHRoaXMudXBkYXRlTG9hZGluZ0JhcigpO1xyXG5cclxuICAgIGlmICh0aGlzLmxvYWRlZEFzc2V0c0NvdW50ID09PSB0aGlzLnRvdGFsQXNzZXRzVG9Mb2FkQ291bnQpIHtcclxuICAgICAgdGhpcy5kZWxheWVkSGlkZUxvYWRpbmdCYXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmxvYWRlZEFzc2V0c0NvdW50ID0gMDtcclxuICAgIHRoaXMudG90YWxBc3NldHNUb0xvYWRDb3VudCA9IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dMb2FkaW5nQmFyKCkge1xyXG4gICAgdGhpcy5kaWFsb2dPdmVybGF5LnNob3dEaWFsb2codGhpcy5sb2FkaW5nQmFyRGlhbG9nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsYXllZEhpZGVMb2FkaW5nQmFyKCkge1xyXG4gICAgdGhpcy5oaWRlTG9hZGluZ0JhclRpbWVvdXRJZCA9IHNldFRpbWVvdXQoXHJcbiAgICAgIHRoaXMuaGlkZUxvYWRpbmdCYXIsXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ubG9hZGluZ0JhckhpZGVEZWxheVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWJvcnREZWxheWVkSGlkZUxvYWRpbmdCYXIoKSB7XHJcbiAgICBpZiAodGhpcy5oaWRlTG9hZGluZ0JhclRpbWVvdXRJZCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5oaWRlTG9hZGluZ0JhclRpbWVvdXRJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVMb2FkaW5nQmFyKCkge1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gICAgdGhpcy5sb2FkaW5nQmFyRGlhbG9nLmNsb3NlKCk7XHJcbiAgICB0aGlzLmhpZGVMb2FkaW5nQmFyVGltZW91dElkID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlTG9hZGluZ0JhcigpIHtcclxuICAgIHRoaXMubG9hZGluZ0JhckRpYWxvZy5sb2FkZWRBc3NldHNDb3VudCA9IHRoaXMubG9hZGVkQXNzZXRzQ291bnQudG9GaXhlZCgwKTtcclxuICAgIHRoaXMubG9hZGluZ0JhckRpYWxvZy50b3RhbEFzc2V0c0NvdW50ID0gdGhpcy50b3RhbEFzc2V0c1RvTG9hZENvdW50LnRvRml4ZWQoMCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL0xvYWRpbmdVSVNlcnZpY2UudHMiLCJpbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcblxyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvbG9hZGluZy1iYXItZGlhbG9nL0xvYWRpbmdCYXJEaWFsb2cuc2Nzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0JhckRpYWxvZyBleHRlbmRzIEhUTUxFbGVtZW50IGltcGxlbWVudHMgRGlhbG9nQm94IHtcclxuICBwcml2YXRlIGJhY2tncm91bmRCYXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgcHJvZ3Jlc3NMYWJlbDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdsb2FkaW5nLWJhci1kaWFsb2cgZGlhbG9nLWJveCc7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmJhY2tncm91bmRCYXIuY2xhc3NOYW1lID0gJ2xvYWRpbmctZGlhbG9nX19iYWNrZ3JvdW5kLWJhcic7XHJcbiAgICB0aGlzLmJhY2tncm91bmRCYXIuaW5uZXJUZXh0ID0gJyAnO1xyXG5cclxuICAgIHRoaXMucHJvZ3Jlc3NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGV4dC5pbm5lclRleHQgPSAnTG9hZGluZy4uLiAnO1xyXG4gICAgdGV4dC5hcHBlbmRDaGlsZCh0aGlzLnByb2dyZXNzTGFiZWwpO1xyXG5cclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kQmFyKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGV4dCk7XHJcblxyXG4gICAgdGhpcy50b3RhbEFzc2V0c0NvdW50ID0gJzAnO1xyXG4gICAgdGhpcy5sb2FkZWRBc3NldHNDb3VudCA9ICcwJztcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICByZXR1cm4gWyd0b3RhbC1hc3NldHMtY291bnQnLCAnbG9hZGVkLWFzc2V0cy1jb3VudCddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgLy8gRW1wdHlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIC8vIEVtcHR5XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZTogc3RyaW5nLCBfb2xkVmFsdWU6IHN0cmluZywgX25ld1ZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmIChhdHRyaWJ1dGUgPT09ICd0b3RhbC1hc3NldHMtY291bnQnIHx8IGF0dHJpYnV0ZSA9PT0gJ2xvYWRlZC1hc3NldHMtY291bnQnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbG9zZScpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5DbG9zZSgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdG90YWxBc3NldHNDb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndG90YWwtYXNzZXRzLWNvdW50JykgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHRvdGFsQXNzZXRzQ291bnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RvdGFsLWFzc2V0cy1jb3VudCcsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbG9hZGVkQXNzZXRzQ291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2xvYWRlZC1hc3NldHMtY291bnQnKSB8fCAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgbG9hZGVkQXNzZXRzQ291bnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2xvYWRlZC1hc3NldHMtY291bnQnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGxvYWRlZEFzc2V0c0NvdW50ID0gcGFyc2VJbnQodGhpcy5sb2FkZWRBc3NldHNDb3VudCwgMTApO1xyXG4gICAgY29uc3QgdG90YWxBc3NldHNDb3VudCA9IHBhcnNlSW50KHRoaXMudG90YWxBc3NldHNDb3VudCwgMTApO1xyXG5cclxuICAgIGxldCBwcm9ncmVzcyA9IDEwMDtcclxuICAgIGlmICh0b3RhbEFzc2V0c0NvdW50ID4gMCkge1xyXG4gICAgICBwcm9ncmVzcyA9IE1hdGgucm91bmQobG9hZGVkQXNzZXRzQ291bnQgLyB0b3RhbEFzc2V0c0NvdW50ICogMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRCYXIuc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc30lYDtcclxuXHJcbiAgICB0aGlzLnByb2dyZXNzTGFiZWwuaW5uZXJUZXh0ID0gYCR7bG9hZGVkQXNzZXRzQ291bnR9IC8gJHt0b3RhbEFzc2V0c0NvdW50fSAoJHtwcm9ncmVzc30gJSlgO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWxvYWRpbmctYmFyLWRpYWxvZycsIExvYWRpbmdCYXJEaWFsb2cpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2xvYWRpbmctYmFyLWRpYWxvZy9Mb2FkaW5nQmFyRGlhbG9nLnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTG9hZGluZ0JhckRpYWxvZy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0xvYWRpbmdCYXJEaWFsb2cuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Mb2FkaW5nQmFyRGlhbG9nLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvbG9hZGluZy1iYXItZGlhbG9nL0xvYWRpbmdCYXJEaWFsb2cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvYWRpbmctYmFyLWRpYWxvZyB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmxvYWRpbmctZGlhbG9nX19iYWNrZ3JvdW5kLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxuICBtYXJnaW46IC0ycmVtO1xcbiAgei1pbmRleDogLTE7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9sb2FkaW5nLWJhci1kaWFsb2cvTG9hZGluZ0JhckRpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIHtcclxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjYW52YXNDbGllbnRSZWN0OiBDbGllbnRSZWN0O1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNhbnZhc09mZnNldCgpO1xyXG5cclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVDYW52YXNPZmZzZXQoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUNhbnZhc09mZnNldCgpIHtcclxuICAgIHRoaXMuY2FudmFzQ2xpZW50UmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoXHJcbiAgICAgIGV2ZW50LmNsaWVudFggLSB0aGlzLmNhbnZhc0NsaWVudFJlY3QubGVmdCxcclxuICAgICAgZXZlbnQuY2xpZW50WSAtIHRoaXMuY2FudmFzQ2xpZW50UmVjdC50b3BcclxuICAgICkuZmxvb3IoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLnRzIiwiaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICdjb21tb24vUG9seWdvbic7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICdSZW5kZXJlcic7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICd1aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXInO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFBvaW50Q2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9Qb2ludENsaWNrRXZlbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckZpbmlzaGVkRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRmluaXNoZWRFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbnRlcmZhY2UgTmV3UG9seWdvblVJQ29udHJvbGxlckRlcGVuZGVuY2llcyB7XHJcbiAgYXBwbGljYXRpb25VSUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdQb2x5Z29uVUlDb250cm9sbGVyIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblVJQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBwcml2YXRlIHVuZmluaXNoZWRQYXRoOiBQYXRoO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcGF0aExheWVyID0gbmV3IExheWVyKExFWC5QQVRIX0xBWUVSX05BTUUpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcG9seWdvbkxheWVyOiBMYXllcjtcclxuXHJcbiAgcHJpdmF0ZSBsYXN0TW91c2VQb3NpdGlvbjogUG9pbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogTmV3UG9seWdvblVJQ29udHJvbGxlckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5hcHBsaWNhdGlvblVJQ29udGFpbmVyID0gZGVwZW5kZW5jaWVzLmFwcGxpY2F0aW9uVUlDb250YWluZXI7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkxheWVyO1xyXG4gICAgdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgPSBkZXBlbmRlbmNpZXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IGRlcGVuZGVuY2llcy5yZW5kZXJlcjtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICB0aGlzLmNsb3NlUGF0aCA9IHRoaXMuY2xvc2VQYXRoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblBvaW50Q2xpY2sgPSB0aGlzLm9uUG9pbnRDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kcmF3TmV3TGluZUd1aWRlID0gdGhpcy5kcmF3TmV3TGluZUd1aWRlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuc3RhZ2UubGF5ZXJzLnB1c2godGhpcy5wYXRoTGF5ZXIpO1xyXG4gICAgdGhpcy5zdGFydE5ld1VuZmluaXNoZWRQYXRoKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuc3RhZ2UucmVtb3ZlTGF5ZXIodGhpcy5wYXRoTGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZE5ld1BvaW50KHBvaW50OiBQb2ludCkge1xyXG4gICAgdGhpcy51bmZpbmlzaGVkUGF0aC5hZGRWZXJ0ZXgocG9pbnQpO1xyXG4gICAgdGhpcy5kaXNwYXRjaFVwZGF0ZVVJRXZlbnRzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGljZXNDb3VudCgpID09PSAxKSB7XHJcbiAgICAgIHRoaXMubGFzdE1vdXNlUG9zaXRpb24gPSBwb2ludDtcclxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmxhc3RNb3VzZVBvc2l0aW9uID0gdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIuZ2V0UG9pbnRGcm9tTW91c2VFdmVudChldmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXdOZXdMaW5lR3VpZGUoKSB7XHJcbiAgICBjb25zdCBsYXN0UG9pbnQgPSB0aGlzLnVuZmluaXNoZWRQYXRoLmdldFZlcnRleCh0aGlzLnVuZmluaXNoZWRQYXRoLmdldFZlcnRpY2VzQ291bnQoKSAtIDEpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5kcmF3TGluZShcclxuICAgICAgbGFzdFBvaW50LFxyXG4gICAgICB0aGlzLmxhc3RNb3VzZVBvc2l0aW9uLFxyXG4gICAgICBjb25maWd1cmF0aW9uLm5ld0xpbmVQcmV2aWV3UHJvcGVydGllc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Qb2ludENsaWNrKGV2ZW50OiBQb2ludENsaWNrRXZlbnQpIHtcclxuICAgIGNvbnN0IHBhdGhQb2ludEVsZW1lbnQgPSBldmVudC5wYXlsb2FkO1xyXG5cclxuICAgIGlmIChwYXRoUG9pbnRFbGVtZW50LnBhdGggPT09IHRoaXMudW5maW5pc2hlZFBhdGggJiYgcGF0aFBvaW50RWxlbWVudC5pbml0aWFsKSB7XHJcbiAgICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHBhdGhQb2ludEVsZW1lbnQuaW5pdGlhbCA9IGZhbHNlO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0TmV3VW5maW5pc2hlZFBhdGgoKSB7XHJcbiAgICB0aGlzLnVuZmluaXNoZWRQYXRoID0gbmV3IFBhdGgoW10sIGNvbmZpZ3VyYXRpb24ubmV3UG9seWdvbkxpbmVQcm9wZXJ0aWVzKTtcclxuICAgIHRoaXMucGF0aExheWVyLnBhdGhzLnB1c2godGhpcy51bmZpbmlzaGVkUGF0aCk7XHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsb3NlUGF0aCgpIHtcclxuICAgIGlmICh0aGlzLnVuZmluaXNoZWRQYXRoLmdldFZlcnRpY2VzQ291bnQoKSA8IGNvbmZpZ3VyYXRpb24ubWluUG9seWdvblBvaW50cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBvbHlnb24gbXVzdCBoYXZlIGF0IGxlYXN0ICR7Y29uZmlndXJhdGlvbi5taW5Qb2x5Z29uUG9pbnRzfSB2ZXJ0aWNlc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudW5maW5pc2hlZFBhdGgubGluZVByb3BlcnRpZXMgPSBjb25maWd1cmF0aW9uLnBvbHlnb25MaW5lUHJvcGVydGllcztcclxuICAgIGNvbnN0IHBvbHlnb24gPSBuZXcgUG9seWdvbih0aGlzLnVuZmluaXNoZWRQYXRoKTtcclxuICAgIHRoaXMucG9seWdvbkxheWVyLnBhdGhzLnB1c2gocG9seWdvbik7XHJcbiAgICB0aGlzLnBhdGhMYXllci5yZW1vdmVQYXRoKHRoaXMudW5maW5pc2hlZFBhdGgpO1xyXG5cclxuICAgIHRoaXMuc3RhcnROZXdVbmZpbmlzaGVkUGF0aCgpO1xyXG4gICAgdGhpcy5kaXNwYXRjaFVwZGF0ZVVJRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc3BhdGNoVXBkYXRlVUlFdmVudHMoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgMjc6XHJcbiAgICAgICAgdGhpcy5wYXRoTGF5ZXIucmVtb3ZlUGF0aCh0aGlzLnVuZmluaXNoZWRQYXRoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0TmV3VW5maW5pc2hlZFBhdGgoKTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoVXBkYXRlVUlFdmVudHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFJlbmRlckZpbmlzaGVkRXZlbnQubmFtZSwgdGhpcy5kcmF3TmV3TGluZUd1aWRlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihQb2ludENsaWNrRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUG9pbnRDbGljayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFJlbmRlckZpbmlzaGVkRXZlbnQubmFtZSwgdGhpcy5kcmF3TmV3TGluZUd1aWRlKTtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihQb2ludENsaWNrRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUG9pbnRDbGljayk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL05ld1BvbHlnb25VSUNvbnRyb2xsZXIudHMiLCJpbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuaW1wb3J0IHsgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIH0gZnJvbSAndWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyJztcclxuXHJcbmltcG9ydCB7IENsb3Nlc3RQYXRoRmluZGVyIH0gZnJvbSAnc2VydmljZXMvQ2xvc2VzdFBhdGhGaW5kZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbnRlcmZhY2UgUGF0aERyYWdnaW5nU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgY2xvc2VzdFBhdGhGaW5kZXI6IENsb3Nlc3RQYXRoRmluZGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aERyYWdnaW5nU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjbG9zZXN0UGF0aEZpbmRlcjogQ2xvc2VzdFBhdGhGaW5kZXI7XHJcblxyXG4gIHByaXZhdGUgcGF0aFRvRHJhZzogUGF0aCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIHByZXZpb3VzUG9pbnQ6IFBvaW50IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2lzRHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQYXRoRHJhZ2dpbmdTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG4gICAgdGhpcy5jYW52YXMgPSBkZXBlbmRlbmNpZXMuY2FudmFzO1xyXG4gICAgdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgPSBkZXBlbmRlbmNpZXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gICAgdGhpcy5jbG9zZXN0UGF0aEZpbmRlciA9IGRlcGVuZGVuY2llcy5jbG9zZXN0UGF0aEZpbmRlcjtcclxuXHJcbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk1vdXNlT3V0ID0gdGhpcy5vbk1vdXNlT3V0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIC8vIFRPRE86IHBvc3NpYmxlIHBhdGggZ2hvc3QgbGF5ZXIgaGVyZVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN0b3BEcmFnZ2luZ1BhdGgoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNEcmFnZ2luZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0RyYWdnaW5nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0TW92aW5nUGF0aChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgY29uc3QgcG9pbnQgPSB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci5nZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICB0aGlzLnBhdGhUb0RyYWcgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnByZXZpb3VzUG9pbnQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3QgYWxsUGF0aHNJbkJvdW5kaW5nQm94OiBQYXRoW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMuc3RhZ2UubGF5ZXJzKSB7XHJcbiAgICAgIGNvbnN0IHBhdGhzSW5Cb3VuZGluZ0JveCA9IGxheWVyLnBhdGhzLmZpbHRlcihwYXRoID0+IHBhdGguaXNQb2ludEluQm91bmRpbmdCb3gocG9pbnQpKTtcclxuICAgICAgYWxsUGF0aHNJbkJvdW5kaW5nQm94LnB1c2goLi4ucGF0aHNJbkJvdW5kaW5nQm94KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWxsUGF0aHNJbkJvdW5kaW5nQm94Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ0Nhbm5vdCBkcmFnIHBhdGggLSBubyBwYXRoIGZvdW5kLCBwb2ludCBpcyBub3QgaW4gdGhlIGJvdW5kaW5nIGJveCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGF0aFRvRHJhZyA9IHRoaXMuY2xvc2VzdFBhdGhGaW5kZXIuZ2V0Q2xvc2VzdFBhdGgoYWxsUGF0aHNJbkJvdW5kaW5nQm94LCBwb2ludCk7XHJcbiAgICB0aGlzLnByZXZpb3VzUG9pbnQgPSBwb2ludDtcclxuICAgIHRoaXMuX2lzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5vbk1vdXNlT3V0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMub25Nb3VzZU91dCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMucGF0aFRvRHJhZyB8fCAhdGhpcy5wcmV2aW91c1BvaW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb2ludCA9IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLmdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQpO1xyXG4gICAgY29uc3QgdHJhbnNpdGlvblZlY3RvciA9IFBvaW50LnN1YnRyYWN0KHBvaW50LCB0aGlzLnByZXZpb3VzUG9pbnQpO1xyXG5cclxuICAgIGZvciAoY29uc3QgcGF0aFBvaW50IG9mIHRoaXMucGF0aFRvRHJhZy5nZXRWZXJ0aWNlcygpKSB7XHJcbiAgICAgIHBhdGhQb2ludC5tb3ZlVG8oUG9pbnQuYWRkKHBhdGhQb2ludCwgdHJhbnNpdGlvblZlY3RvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuXHJcbiAgICB0aGlzLnByZXZpb3VzUG9pbnQgPSBwb2ludDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZVVwKF9ldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdQYXRoKCk7XHJcbiAgICB0aGlzLmNhbmNlbE5leHRDbGlja0V2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VPdXQoX2V2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLnN0b3BEcmFnZ2luZ1BhdGgoKTtcclxuICAgIHRoaXMuX2lzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcERyYWdnaW5nUGF0aCgpIHtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMucGF0aFRvRHJhZyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMucHJldmlvdXNQb2ludCA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FuY2VsTmV4dENsaWNrRXZlbnQoKSB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuX2lzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1BhdGhEcmFnZ2luZ1NlcnZpY2UudHMiLCJpbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdjb21tb24vQ09MT1JTJztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IExFWCB9IGZyb20gJ0xFWCc7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRmluaXNoUG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9GaW5pc2hQb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFBvaW50RHJhZ0V2ZW50IH0gZnJvbSAnZXZlbnRzL3BvaW50LWRyYWcvUG9pbnREcmFnRXZlbnQnO1xyXG5pbXBvcnQgeyBTdGFydFBvaW50RHJhZ0V2ZW50IH0gZnJvbSAnZXZlbnRzL3BvaW50LWRyYWcvU3RhcnRQb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmludGVyZmFjZSBQb2ludERyYWdnaW5nU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludERyYWdnaW5nU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcGF0aEdob3N0TGF5ZXI6IExheWVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBvaW50RHJhZ2dpbmdTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG4gICAgdGhpcy5jYW52YXMgPSBkZXBlbmRlbmNpZXMuY2FudmFzO1xyXG5cclxuICAgIHRoaXMub25TdGFydFBvaW50RHJhZyA9IHRoaXMub25TdGFydFBvaW50RHJhZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkZpbmlzaFBvaW50RHJhZyA9IHRoaXMub25GaW5pc2hQb2ludERyYWcuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Qb2ludERyYWcgPSB0aGlzLm9uUG9pbnREcmFnLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMucGF0aEdob3N0TGF5ZXIgPSBuZXcgTGF5ZXIoTEVYLlBBVEhfR0hPU1RfTEFZRVJfTkFNRSk7XHJcbiAgICB0aGlzLnN0YWdlLmxheWVycy5zcGxpY2UoMCwgMCwgdGhpcy5wYXRoR2hvc3RMYXllcik7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihTdGFydFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblN0YXJ0UG9pbnREcmFnKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoRmluaXNoUG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uRmluaXNoUG9pbnREcmFnKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUG9pbnREcmFnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5wYXRoR2hvc3RMYXllci5wYXRocyA9IFtdO1xyXG4gICAgdGhpcy5zdGFnZS5yZW1vdmVMYXllcih0aGlzLnBhdGhHaG9zdExheWVyKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFN0YXJ0UG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uU3RhcnRQb2ludERyYWcpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgRmluaXNoUG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICB0aGlzLm9uRmluaXNoUG9pbnREcmFnXHJcbiAgICApO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludERyYWcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblN0YXJ0UG9pbnREcmFnKGV2ZW50OiBTdGFydFBvaW50RHJhZ0V2ZW50KSB7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoIWNvbmZpZ3VyYXRpb24uZGlzcGxheVBhdGhHaG9zdFdoZW5EcmFnZ2luZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGF0aCA9IGV2ZW50LnBheWxvYWQucGF0aC5jbG9uZSgpO1xyXG4gICAgcGF0aC5saW5lUHJvcGVydGllcyA9IG5ldyBMaW5lUHJvcGVydGllcyhDT0xPUlMuR1JFRU4sIDEpO1xyXG4gICAgdGhpcy5wYXRoR2hvc3RMYXllci5wYXRocy5wdXNoKHBhdGgpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25GaW5pc2hQb2ludERyYWcoZXZlbnQ6IEZpbmlzaFBvaW50RHJhZ0V2ZW50KSB7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICAgIGlmICghY29uZmlndXJhdGlvbi5kaXNwbGF5UGF0aEdob3N0V2hlbkRyYWdnaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhdGhHaG9zdExheWVyLnBhdGhzID0gW107XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblBvaW50RHJhZyhldmVudDogUG9pbnREcmFnRXZlbnQpIHtcclxuICAgIGNvbnN0IHsgZWxlbWVudCwgbmV3UG9zaXRpb24gfSA9IGV2ZW50LnBheWxvYWQ7XHJcblxyXG4gICAgZm9yIChjb25zdCBwb2ludCBvZiBlbGVtZW50LnBhdGguZ2V0VmVydGljZXNJdGVyYXRvcigpKSB7XHJcbiAgICAgIGlmIChwb2ludC5lcXVhbHMobmV3UG9zaXRpb24pKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHggPSBuZXdQb3NpdGlvbi54O1xyXG4gICAgbGV0IHkgPSBuZXdQb3NpdGlvbi55O1xyXG5cclxuICAgIGlmICh4IDwgMCkge1xyXG4gICAgICB4ID0gMDtcclxuICAgIH0gZWxzZSBpZiAoeCA+PSB0aGlzLmNhbnZhcy53aWR0aCkge1xyXG4gICAgICB4ID0gdGhpcy5jYW52YXMud2lkdGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh5IDwgMCkge1xyXG4gICAgICB5ID0gMDtcclxuICAgIH0gZWxzZSBpZiAoeSA+PSB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgeSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5wb2ludC5tb3ZlVG8oeCwgeSk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUG9pbnREcmFnZ2luZ1NlcnZpY2UudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTGluZUNsaWNrRXZlbnQgfSBmcm9tICdldmVudHMvTGluZUNsaWNrRXZlbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBQb2ludEluc2VydGVyU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludEluc2VydGVyU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gIHByaXZhdGUgcHJldmlvdXNMaW5lQ2xpY2tUaW1lc3RhbXAgPSAwO1xyXG4gIHByaXZhdGUgcHJldmlvdXNMaW5lSGl0OiBMaW5lO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBvaW50SW5zZXJ0ZXJTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy5vbkxpbmVDbGljayA9IHRoaXMub25MaW5lQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihMaW5lQ2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25MaW5lQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKExpbmVDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbkxpbmVDbGljayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTGluZUNsaWNrKGV2ZW50OiBMaW5lQ2xpY2tFdmVudCkge1xyXG4gICAgY29uc3QgcHJldmlvdXNMaW5lSGl0ID0gdGhpcy5wcmV2aW91c0xpbmVIaXQ7XHJcbiAgICBjb25zdCBwcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcCA9IHRoaXMucHJldmlvdXNMaW5lQ2xpY2tUaW1lc3RhbXA7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICB0aGlzLnByZXZpb3VzTGluZUhpdCA9IGV2ZW50LnBheWxvYWQubGluZTtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lQ2xpY2tUaW1lc3RhbXAgPSBjdXJyZW50VGltZXN0YW1wO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgIXByZXZpb3VzTGluZUhpdCB8fFxyXG4gICAgICBjdXJyZW50VGltZXN0YW1wIC0gcHJldmlvdXNMaW5lQ2xpY2tUaW1lc3RhbXAgPiBjb25maWd1cmF0aW9uLmRvdWJsZUNsaWNrTWF4RGVsYXlcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByZXZpb3VzTGluZUhpdC5lcXVhbHMoZXZlbnQucGF5bG9hZC5saW5lKSkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnBheWxvYWQucGF0aC5maW5kUG9pbnRJbmRleChldmVudC5wYXlsb2FkLmxpbmUucDIpO1xyXG4gICAgICBjb25zdCBuZXdQb2ludCA9IGV2ZW50LnBheWxvYWQubGluZS5nZXRNaWRkbGVQb2ludCgpO1xyXG4gICAgICBjb25zdCBmbG9vcmVkUG9pbnQgPSBuZXdQb2ludC5mbG9vcigpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBldmVudC5wYXlsb2FkLnBhdGguaW5zZXJ0VmVydGV4KGZsb29yZWRQb2ludCwgaW5kZXgpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVE9ETzogZml4IHdyb25nIHJlbmRlcmluZ1xyXG4gICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUG9pbnRJbnNlcnRlclNlcnZpY2UudHMiLCJpbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBQb2ludENsaWNrRXZlbnQgfSBmcm9tICdldmVudHMvUG9pbnRDbGlja0V2ZW50JztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5pbXBvcnQgeyBQYXRoUG9pbnRFbGVtZW50IH0gZnJvbSAndWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQnO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50UmVtb3ZlclNlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRSZW1vdmVyU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gIHByaXZhdGUgcHJldmlvdXNQYXRoUG9pbnRFbGVtZW50OiBQYXRoUG9pbnRFbGVtZW50O1xyXG4gIHByaXZhdGUgcHJldmlvdXNDbGlja1RpbWVzdGFtcCA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9pbnRSZW1vdmVyU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5vblBvaW50Q2xpY2sgPSB0aGlzLm9uUG9pbnRDbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludENsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihQb2ludENsaWNrRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUG9pbnRDbGljayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUG9pbnRDbGljayhldmVudDogUG9pbnRDbGlja0V2ZW50KSB7XHJcbiAgICBjb25zdCBjdXJyZW50VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICBjb25zdCBwYXRoUG9pbnRFbGVtZW50ID0gZXZlbnQucGF5bG9hZDtcclxuICAgIGNvbnN0IHByZXZpb3VzUGF0aFBvaW50RWxlbWVudCA9IHRoaXMucHJldmlvdXNQYXRoUG9pbnRFbGVtZW50O1xyXG4gICAgY29uc3QgcHJldmlvdXNDbGlja1RpbWVzdGFtcCA9IHRoaXMucHJldmlvdXNDbGlja1RpbWVzdGFtcDtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVByZXZpb3VzQ2xpY2tJbmZvcm1hdGlvbihldmVudCwgY3VycmVudFRpbWVzdGFtcCk7XHJcblxyXG4gICAgaWYgKCFwcmV2aW91c1BhdGhQb2ludEVsZW1lbnQgfHwgcHJldmlvdXNQYXRoUG9pbnRFbGVtZW50ICE9PSBwYXRoUG9pbnRFbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudFRpbWVzdGFtcCAtIHByZXZpb3VzQ2xpY2tUaW1lc3RhbXAgPiBjb25maWd1cmF0aW9uLmRvdWJsZUNsaWNrTWF4RGVsYXkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlUHJldmlvdXNDbGlja2VkUG9pbnQoKTtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQcmV2aW91c0NsaWNrSW5mb3JtYXRpb24oZXZlbnQ6IFBvaW50Q2xpY2tFdmVudCwgdGltZXN0YW1wOiBudW1iZXIpIHtcclxuICAgIHRoaXMucHJldmlvdXNQYXRoUG9pbnRFbGVtZW50ID0gZXZlbnQucGF5bG9hZDtcclxuICAgIHRoaXMucHJldmlvdXNDbGlja1RpbWVzdGFtcCA9IHRpbWVzdGFtcDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlUHJldmlvdXNDbGlja2VkUG9pbnQoKSB7XHJcbiAgICBjb25zdCBwYXRoID0gdGhpcy5wcmV2aW91c1BhdGhQb2ludEVsZW1lbnQucGF0aDtcclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5wcmV2aW91c1BhdGhQb2ludEVsZW1lbnQucG9pbnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgcGF0aC5yZW1vdmVWZXJ0ZXgocG9pbnQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCdDYW5ub3QgcmVtb3ZlIHZlcnRleCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJldmlvdXNQYXRoUG9pbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2ludFJlbW92ZXJTZXJ2aWNlLnRzIiwiaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHtcclxuICBQYXRoUG9pbnRFbGVtZW50LFxyXG4gIFBhdGhQb2ludEVsZW1lbnREZXBlbmRlbmNpZXNcclxufSBmcm9tICd1aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudCc7XHJcbmltcG9ydCB7IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciB9IGZyb20gJ3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcic7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmludGVyZmFjZSBQb2ludFN5bmNTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhdGhQb2ludFR1cGxlIHtcclxuICBwYXRoOiBQYXRoO1xyXG4gIHBvaW50OiBQb2ludDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50U3luY1NlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHBhdGhQb2ludEVsZW1lbnRzOiBQYXRoUG9pbnRFbGVtZW50W10gPSBbXTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcGF0aFBvaW50RGVwZW5kZW5jaWVzOiBQYXRoUG9pbnRFbGVtZW50RGVwZW5kZW5jaWVzO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBvaW50U3luY1NlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRlcGVuZGVuY2llcy5jb250YWluZXI7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy5wYXRoUG9pbnREZXBlbmRlbmNpZXMgPSB7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXJcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zeW5jaHJvbml6ZUVsZW1lbnRzID0gdGhpcy5zeW5jaHJvbml6ZUVsZW1lbnRzLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFN5bmNDb21wb25lbnRzRXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICB0aGlzLnN5bmNocm9uaXplRWxlbWVudHNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFN5bmNDb21wb25lbnRzRXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICB0aGlzLnN5bmNocm9uaXplRWxlbWVudHNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3luY2hyb25pemVFbGVtZW50cyhldmVudDogU3luY0NvbXBvbmVudHNFdmVudCkge1xyXG4gICAgY29uc3QgZWxlbWVudHNUb1JlbW92ZSA9IHRoaXMuZ2V0UmVkdW5kYW50RWxlbWVudHMoKTtcclxuICAgIGVsZW1lbnRzVG9SZW1vdmUuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50LnJlbW92ZSgpKTtcclxuXHJcbiAgICBjb25zdCBwYXRoUG9pbnRUdXBsZXMgPSB0aGlzLmdldFBhdGhQb2ludFR1cGxlcygpO1xyXG4gICAgY29uc3QgcG9pbnRzV2l0aG91dEVsZW1lbnRzID0gdGhpcy5nZXRQb2ludHNXaXRob3V0RWxlbWVudHMocGF0aFBvaW50VHVwbGVzKTtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnRzID0gdGhpcy5jcmVhdGVQYXRoUG9pbnRFbGVtZW50cyhwb2ludHNXaXRob3V0RWxlbWVudHMpO1xyXG4gICAgbmV3RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50c05vdFJlbW92ZWQgPSB0aGlzLnBhdGhQb2ludEVsZW1lbnRzLmZpbHRlcihcclxuICAgICAgZWxlbWVudCA9PiBlbGVtZW50c1RvUmVtb3ZlLmluZGV4T2YoZWxlbWVudCkgPT09IC0xXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucGF0aFBvaW50RWxlbWVudHMgPSBbLi4ubmV3RWxlbWVudHMsIC4uLmVsZW1lbnRzTm90UmVtb3ZlZF07XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGF0aFBvaW50VHVwbGVzKCkge1xyXG4gICAgY29uc3QgcGF0aFBvaW50VHVwbGVzOiBQYXRoUG9pbnRUdXBsZVtdID0gW107XHJcblxyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgIGxheWVyLnBhdGhzLmZvckVhY2gocGF0aCA9PiB7XHJcbiAgICAgICAgcGF0aC5nZXRWZXJ0aWNlcygpLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICAgICAgcGF0aFBvaW50VHVwbGVzLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICBwb2ludFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBhdGhQb2ludFR1cGxlcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUGF0aFBvaW50RWxlbWVudHMocGF0aFBvaW50czogUGF0aFBvaW50VHVwbGVbXSkge1xyXG4gICAgcmV0dXJuIHBhdGhQb2ludHMubWFwKFxyXG4gICAgICBwYXRoUG9pbnQgPT5cclxuICAgICAgICBuZXcgUGF0aFBvaW50RWxlbWVudChwYXRoUG9pbnQucGF0aCwgcGF0aFBvaW50LnBvaW50LCB0aGlzLnBhdGhQb2ludERlcGVuZGVuY2llcylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlZHVuZGFudEVsZW1lbnRzKCkge1xyXG4gICAgY29uc3QgYWN0aXZlUGF0aHMgPSB0aGlzLmdldEFjdGl2ZVBhdGhzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucGF0aFBvaW50RWxlbWVudHMuZmlsdGVyKFxyXG4gICAgICBjb21wb25lbnQgPT5cclxuICAgICAgICBhY3RpdmVQYXRocy5pbmRleE9mKGNvbXBvbmVudC5wYXRoKSA9PT0gLTEgfHxcclxuICAgICAgICBjb21wb25lbnQucGF0aC5nZXRWZXJ0aWNlcygpLmluZGV4T2YoY29tcG9uZW50LnBvaW50KSA9PT0gLTFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBvaW50c1dpdGhvdXRFbGVtZW50cyhwYXRoUG9pbnRzOiBQYXRoUG9pbnRUdXBsZVtdKSB7XHJcbiAgICByZXR1cm4gcGF0aFBvaW50cy5maWx0ZXIoXHJcbiAgICAgIHBhdGhQb2ludCA9PlxyXG4gICAgICAgICF0aGlzLnBhdGhQb2ludEVsZW1lbnRzLmZpbmQoXHJcbiAgICAgICAgICBjb21wb25lbnQgPT4gY29tcG9uZW50LnBhdGggPT09IHBhdGhQb2ludC5wYXRoICYmIGNvbXBvbmVudC5wb2ludCA9PT0gcGF0aFBvaW50LnBvaW50XHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QWN0aXZlUGF0aHMoKSB7XHJcbiAgICBjb25zdCBwYXRoczogUGF0aFtdID0gW107XHJcbiAgICB0aGlzLnN0YWdlLmxheWVycy5tYXAobGF5ZXIgPT4gcGF0aHMucHVzaCguLi5sYXllci5wYXRocykpO1xyXG5cclxuICAgIHJldHVybiBwYXRocztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUG9pbnRTeW5jU2VydmljZS50cyIsImltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmltcG9ydCB7IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciB9IGZyb20gJ3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcic7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgRmluaXNoUG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9GaW5pc2hQb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFBvaW50RHJhZ0V2ZW50IH0gZnJvbSAnZXZlbnRzL3BvaW50LWRyYWcvUG9pbnREcmFnRXZlbnQnO1xyXG5pbXBvcnQgeyBTdGFydFBvaW50RHJhZ0V2ZW50IH0gZnJvbSAnZXZlbnRzL3BvaW50LWRyYWcvU3RhcnRQb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFBvaW50Q2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9Qb2ludENsaWNrRXZlbnQnO1xyXG5cclxuaW1wb3J0ICd1aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudC5zY3NzJztcclxuXHJcbmNvbnN0IGNsYXNzTmFtZXMgPSB7XHJcbiAgQ09NUE9ORU5UOiAnYXBwbGljYXRpb24tdWlfX3ZlcnRleCcsXHJcbiAgSU5JVElBTDogJ2FwcGxpY2F0aW9uLXVpX192ZXJ0ZXgtLWluaXRpYWwnXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhdGhQb2ludEVsZW1lbnREZXBlbmRlbmNpZXMge1xyXG4gIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aFBvaW50RWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwdWJsaWMgcGF0aDogUGF0aDtcclxuICBwdWJsaWMgcG9pbnQ6IFBvaW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aDogUGF0aCwgcG9pbnQ6IFBvaW50LCBkZXBlbmRlbmNpZXM6IFBhdGhQb2ludEVsZW1lbnREZXBlbmRlbmNpZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuQ09NUE9ORU5UKTtcclxuXHJcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgdGhpcy5wb2ludCA9IHBvaW50O1xyXG4gICAgdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgPSBkZXBlbmRlbmNpZXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RvcERyYWdnaW5nID0gdGhpcy5zdG9wRHJhZ2dpbmcuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5wYXRoLmxpbmVQcm9wZXJ0aWVzLmNvbG9yLmZpbGxTdHlsZTtcclxuICAgIHRoaXMuc3R5bGUudG9wID0gYCR7dGhpcy5wb2ludC55fXB4YDtcclxuICAgIHRoaXMuc3R5bGUubGVmdCA9IGAke3RoaXMucG9pbnQueH1weGA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGluaXRpYWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lcy5JTklUSUFMKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgaW5pdGlhbChpc0luaXRpYWw6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc0luaXRpYWwpIHtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuSU5JVElBTCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lcy5JTklUSUFMKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMucGF0aC5nZXRWZXJ0aWNlc0NvdW50KCkgPT09IDEgfHxcclxuICAgICAgKCF0aGlzLnBhdGguY2xvc2VkICYmIHRoaXMucGF0aC5maW5kUG9pbnRJbmRleCh0aGlzLnBvaW50KSA9PT0gMClcclxuICAgICkge1xyXG4gICAgICB0aGlzLmluaXRpYWwgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XHJcbiAgICB0aGlzLnBvaW50Lm1vdmVDYWxsYmFjayA9IHRoaXMudXBkYXRlUG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLnBvaW50Lm1vdmVDYWxsYmFjayA9IG51bGw7XHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlRG93bigpIHtcclxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IFBvaW50Q2xpY2tFdmVudCh0aGlzKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgIGlmIChldmVudC5oYW5kbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTdGFydFBvaW50RHJhZ0V2ZW50KHRoaXMpKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci5nZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50KTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFBvaW50RHJhZ0V2ZW50KHRoaXMsIG1vdXNlUG9zaXRpb24pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcERyYWdnaW5nKCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgRmluaXNoUG9pbnREcmFnRXZlbnQodGhpcykpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1wYXRoLXBvaW50JywgUGF0aFBvaW50RWxlbWVudCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50LnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUGF0aFBvaW50RWxlbWVudC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL1BhdGhQb2ludEVsZW1lbnQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9QYXRoUG9pbnRFbGVtZW50LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hcHBsaWNhdGlvbi11aV9fdmVydGV4IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogc29saWQgMnB4OyB9XFxuICAuYXBwbGljYXRpb24tdWlfX3ZlcnRleDpub3QoOmFjdGl2ZSkge1xcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyB9XFxuICAuYXBwbGljYXRpb24tdWlfX3ZlcnRleDphY3RpdmUge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDsgfVxcblxcbi5hcHBsaWNhdGlvbi11aV9fdmVydGV4LS1pbml0aWFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUxZmY7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcblxyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuXHJcbmltcG9ydCB7IExvYWRCdXR0b24gfSBmcm9tICd1aS9jb21wb25lbnRzL3NlcmlhbGl6YXRpb24vTG9hZEJ1dHRvbic7XHJcbmltcG9ydCB7IFNhdmVCdXR0b24gfSBmcm9tICd1aS9jb21wb25lbnRzL3NlcmlhbGl6YXRpb24vU2F2ZUJ1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgU2VyaWFsaXphdGlvblNlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHN0YWdlOiBTdGFnZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlcmlhbGl6YXRpb25TZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzZXJpYWxpemF0aW9uQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgc3RhZ2U6IFN0YWdlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFNlcmlhbGl6YXRpb25TZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICBjb25zdCBzZXJpYWxpemF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlcmlhbGl6YXRpb24tY29udGFpbmVyJyk7XHJcbiAgICBpZiAoIXNlcmlhbGl6YXRpb25Db250YWluZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJpYWxpemF0aW9uIGNvbnRhaW5lciBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlcmlhbGl6YXRpb25Db250YWluZXIgPSBzZXJpYWxpemF0aW9uQ29udGFpbmVyO1xyXG5cclxuICAgIGNvbnN0IGxvYWRCdXR0b24gPSBuZXcgTG9hZEJ1dHRvbih7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBuZXcgU2F2ZUJ1dHRvbih7XHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNlcmlhbGl6YXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9hZEJ1dHRvbik7XHJcbiAgICB0aGlzLnNlcmlhbGl6YXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgdGhpcy5zZXJpYWxpemF0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9TZXJpYWxpemF0aW9uU2VydmljZS50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBMRVggfSBmcm9tICdMRVgnO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuXHJcbmltcG9ydCB7IFNlcmlhbGl6YWJsZUxheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9hZEJ1dHRvbkRlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZEJ1dHRvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgYnV0dG9uRWxlbWVudDogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogTG9hZEJ1dHRvbkRlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LmlubmVyVGV4dCA9ICdMb2FkJztcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25FbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNsaWNrKCkge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSBwcm9tcHQoJ1BsZWFzZSBwYXN0ZSB0aGUgc2VyaWFsaXplZCBkYXRhJyk7XHJcblxyXG4gICAgaWYgKCFzZXJpYWxpemVkRGF0YSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9seWdvbkxheWVyID0gdGhpcy5zdGFnZS5maW5kTGF5ZXJCeU5hbWUoTEVYLlBPTFlHT05fTEFZRVJfTkFNRSk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFNlcmlhbGl6YWJsZUxheWVyID0gcG9seWdvbkxheWVyLnRvU2VyaWFsaXphYmxlT2JqZWN0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2VyaWFsaXphYmxlTGF5ZXIgPSA8U2VyaWFsaXphYmxlTGF5ZXI+SlNPTi5wYXJzZShzZXJpYWxpemVkRGF0YSk7XHJcbiAgICAgIHBvbHlnb25MYXllci5mcm9tU2VyaWFsaXphYmxlT2JqZWN0KDxTZXJpYWxpemFibGVMYXllcj5zZXJpYWxpemFibGVMYXllcik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBwb2x5Z29uTGF5ZXIuZnJvbVNlcmlhbGl6YWJsZU9iamVjdChjdXJyZW50U2VyaWFsaXphYmxlTGF5ZXIpO1xyXG4gICAgICBhbGVydCgnSW52YWxpZCBkYXRhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtbG9hZC1idXR0b24nLCBMb2FkQnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL0xvYWRCdXR0b24udHMiLCJpbXBvcnQgeyBMRVggfSBmcm9tICdMRVgnO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2F2ZUJ1dHRvbkRlcGVuZGVuY2llcyB7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZUJ1dHRvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGJ1dHRvbkVsZW1lbnQ6IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFNhdmVCdXR0b25EZXBlbmRlbmNpZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGFnZSA9IGRlcGVuZGVuY2llcy5zdGFnZTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5pbm5lclRleHQgPSAnU2F2ZSc7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uRWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DbGljaygpIHtcclxuICAgIGNvbnN0IHBvbHlnb25MYXllciA9IHRoaXMuc3RhZ2UuZmluZExheWVyQnlOYW1lKExFWC5QT0xZR09OX0xBWUVSX05BTUUpO1xyXG4gICAgY29uc3Qgc2VyaWFsaXphYmxlT2JqZWN0ID0gcG9seWdvbkxheWVyLnRvU2VyaWFsaXphYmxlT2JqZWN0KCk7XHJcblxyXG4gICAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSBKU09OLnN0cmluZ2lmeShzZXJpYWxpemFibGVPYmplY3QpO1xyXG4gICAgcHJvbXB0KCdDb3B5IHRoZSBkYXRhJywgc2VyaWFsaXplZERhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtc2F2ZS1idXR0b24nLCBTYXZlQnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL1NhdmVCdXR0b24udHMiLCJpbXBvcnQgJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzJztcclxuXHJcbmltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvRGlhbG9nQm94JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dPdmVybGF5IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByaXZhdGUgb3ZlcmxheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGlhbG9nQm94U3RhY2s6IERpYWxvZ0JveFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5kaWFsb2dCb3hTdGFjayA9IFtdO1xyXG4gICAgdGhpcy5vdmVybGF5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5vdmVybGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheUVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMub25PdmVybGF5Q2xpY2sgPSB0aGlzLm9uT3ZlcmxheUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRGlhbG9nQ2xvc2UgPSB0aGlzLm9uRGlhbG9nQ2xvc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3ZlcmxheUNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3ZlcmxheUNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93RGlhbG9nKGRpYWxvZ0JveDogRGlhbG9nQm94KSB7XHJcbiAgICBpZiAodGhpcy5kaWFsb2dCb3hTdGFjay5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5zaG93T3ZlcmxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlhbG9nQm94U3RhY2sucHVzaChkaWFsb2dCb3gpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChkaWFsb2dCb3gpO1xyXG4gICAgZGlhbG9nQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkRpYWxvZ0Nsb3NlKTtcclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICBkaWFsb2dCb3guY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWJveC0tYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25PdmVybGF5Q2xpY2soKSB7XHJcbiAgICBpZiAodGhpcy5kaWFsb2dCb3hTdGFjay5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvcG1vc3REaWFsb2dCb3ggPSB0aGlzLmRpYWxvZ0JveFN0YWNrW3RoaXMuZGlhbG9nQm94U3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICBpZiAoIXRvcG1vc3REaWFsb2dCb3guY2FuQ2xvc2UoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdG9wbW9zdERpYWxvZ0JveC5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkRpYWxvZ0Nsb3NlKGV2ZW50OiBDdXN0b21FdmVudCkge1xyXG4gICAgY29uc3QgZGlhbG9nQm94ID0gPERpYWxvZ0JveD5ldmVudC50YXJnZXQ7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKGRpYWxvZ0JveCk7XHJcbiAgICBkaWFsb2dCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uRGlhbG9nQ2xvc2UpO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgIGRpYWxvZ0JveC5jbGFzc0xpc3QucmVtb3ZlKCdkaWFsb2ctYm94LS1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRpYWxvZ0JveEluZGV4ID0gdGhpcy5kaWFsb2dCb3hTdGFjay5pbmRleE9mKGRpYWxvZ0JveCk7XHJcbiAgICB0aGlzLmRpYWxvZ0JveFN0YWNrLnNwbGljZShkaWFsb2dCb3hJbmRleCwgMSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGlhbG9nQm94U3RhY2subGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd092ZXJsYXkoKSB7XHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktLXZpc2libGUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncG9wdXAtYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVPdmVybGF5KCkge1xyXG4gICAgdGhpcy5vdmVybGF5RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LS12aXNpYmxlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwLWFjdGl2ZScpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZGlhbG9nLW92ZXJsYXknLCBEaWFsb2dPdmVybGF5KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5LnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vRGlhbG9nT3ZlcmxheS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0RpYWxvZ092ZXJsYXkuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dPdmVybGF5LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LnBvcHVwLWFjdGl2ZSB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcblxcbi5vdmVybGF5LS12aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IERpYWxvZ092ZXJsYXkgfSBmcm9tICd1aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXknO1xyXG5pbXBvcnQgeyBJbnN0cnVjdGlvbnNEaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNEaWFsb2cnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RydWN0aW9uc0J1dHRvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcml2YXRlIGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBpbnN0cnVjdGlvbnNEaWFsb2c6IEluc3RydWN0aW9uc0RpYWxvZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmJ1dHRvbi50ZXh0Q29udGVudCA9ICdJbnN0cnVjdGlvbnMnO1xyXG4gICAgdGhpcy5idXR0b24uY2xhc3NOYW1lID0gJ2luc3RydWN0aW9ucy1idXR0b24nO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbik7XHJcblxyXG4gICAgdGhpcy5vbkJ1dHRvbkNsaWNrID0gdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmluc3RydWN0aW9uc0RpYWxvZyA9IG5ldyBJbnN0cnVjdGlvbnNEaWFsb2coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgIHJldHVybiBbJ2RpYWxvZy1vdmVybGF5LWlkJ107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGRpYWxvZ092ZXJsYXlJZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGlhbG9nLW92ZXJsYXktaWQnKSB8fCAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZGlhbG9nT3ZlcmxheUlkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkaWFsb2ctb3ZlcmxheS1pZCcsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25CdXR0b25DbGljaygpIHtcclxuICAgIGNvbnN0IGRpYWxvZ092ZXJsYXkgPSA8RGlhbG9nT3ZlcmxheT5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRpYWxvZ092ZXJsYXlJZCk7XHJcbiAgICBpZiAoIWRpYWxvZ092ZXJsYXkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWFsb2cgb3ZlcmxheSBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBkaWFsb2dPdmVybGF5LnNob3dEaWFsb2codGhpcy5pbnN0cnVjdGlvbnNEaWFsb2cpO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWluc3RydWN0aW9ucy1idXR0b24nLCBJbnN0cnVjdGlvbnNCdXR0b24pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNCdXR0b24udHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9JbnN0cnVjdGlvbnNEaWFsb2cuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9JbnN0cnVjdGlvbnNEaWFsb2cuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9JbnN0cnVjdGlvbnNEaWFsb2cuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbnN0cnVjdGlvbnMtZGlhbG9nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjM1MGY7XFxuICBjb2xvcjogI2VlZTsgfVxcblxcbi5pbnN0cnVjdGlvbnMtZGlhbG9nX190aXRsZSB7XFxuICBtYXJnaW46IDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFBvbHlnb25DbGlwcGVyIH0gZnJvbSAnc2VydmljZXMvUG9seWdvbkNsaXBwZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICdjb21tb24vUG9seWdvbic7XHJcbmltcG9ydCB7IENsb3Nlc3RQYXRoRmluZGVyIH0gZnJvbSAnc2VydmljZXMvQ2xvc2VzdFBhdGhGaW5kZXInO1xyXG5cclxuaW50ZXJmYWNlIFBvbHlnb25DbGlwcGluZ1NlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIHBvbHlnb25DbGlwcGVyOiBQb2x5Z29uQ2xpcHBlcjtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG4gIGNsb3Nlc3RQYXRoRmluZGVyOiBDbG9zZXN0UGF0aEZpbmRlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvbHlnb25DbGlwcGluZ1NlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHBvbHlnb25DbGlwcGVyOiBQb2x5Z29uQ2xpcHBlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcG9seWdvbkxheWVyOiBMYXllcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNsb3Nlc3RQYXRoRmluZGVyOiBDbG9zZXN0UGF0aEZpbmRlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLnBvbHlnb25DbGlwcGVyID0gZGVwZW5kZW5jaWVzLnBvbHlnb25DbGlwcGVyO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkxheWVyO1xyXG4gICAgdGhpcy5jbG9zZXN0UGF0aEZpbmRlciA9IGRlcGVuZGVuY2llcy5jbG9zZXN0UGF0aEZpbmRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgLy8gTm90aGluZyB0byBkbyBoZXJlXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIC8vIE5vdGhpbmcgdG8gZG8gaGVyZVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsaXBQb2x5Z29ucyhwb2ludDogUG9pbnQpIHtcclxuICAgIGNvbnN0IHBvbHlnb25zSW5Cb3VuZGluZ0JveCA9IDxQb2x5Z29uW10+dGhpcy5wb2x5Z29uTGF5ZXIucGF0aHMuZmlsdGVyKHBhdGggPT5cclxuICAgICAgcGF0aC5pc1BvaW50SW5Cb3VuZGluZ0JveChwb2ludClcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHBvbHlnb25zSW5Cb3VuZGluZ0JveC5sZW5ndGggPCAyKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgnQ2xpY2sgaW4gdGhlIGJvdW5kaW5nIGJveCBvZiBhdCBsZWFzdCAyIHBvbHlnb25zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udmV4UG9seWdvbnMgPSBwb2x5Z29uc0luQm91bmRpbmdCb3guZmlsdGVyKHBvbHlnb24gPT4gcG9seWdvbi5pc0NvbnZleCgpKTtcclxuICAgIGlmIChjb252ZXhQb2x5Z29ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCdDYW5ub3QgZmluZCBhIGNvbnZleCBwb2x5Z29uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdENvbnZleFBvbHlnb24gPSA8UG9seWdvbj50aGlzLmNsb3Nlc3RQYXRoRmluZGVyLmdldENsb3Nlc3RQYXRoKFxyXG4gICAgICBjb252ZXhQb2x5Z29ucyxcclxuICAgICAgcG9pbnRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc3ViamVjdFBvbHlnb25zID0gcG9seWdvbnNJbkJvdW5kaW5nQm94LmZpbHRlcihcclxuICAgICAgcG9seWdvbiA9PiBwb2x5Z29uICE9PSBjbG9zZXN0Q29udmV4UG9seWdvblxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNsb3Nlc3RTdWJqZWN0UG9seWdvbiA9IDxQb2x5Z29uPnRoaXMuY2xvc2VzdFBhdGhGaW5kZXIuZ2V0Q2xvc2VzdFBhdGgoXHJcbiAgICAgIHN1YmplY3RQb2x5Z29ucyxcclxuICAgICAgcG9pbnRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY2xpcHBlZFBvbHlnb24gPSB0aGlzLnBvbHlnb25DbGlwcGVyLmNsaXBQb2x5Z29uKFxyXG4gICAgICBjbG9zZXN0U3ViamVjdFBvbHlnb24sXHJcbiAgICAgIGNsb3Nlc3RDb252ZXhQb2x5Z29uXHJcbiAgICApO1xyXG4gICAgaWYgKCFjbGlwcGVkUG9seWdvbikge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ0Nhbm5vdCBjbGlwIHBvbHlnb25zICh0aGV5IGRvIG5vdCBvdmVybGFwKScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucG9seWdvbkxheWVyLnJlbW92ZVBhdGgoY2xvc2VzdFN1YmplY3RQb2x5Z29uKTtcclxuICAgIHRoaXMucG9seWdvbkxheWVyLnJlbW92ZVBhdGgoY2xvc2VzdENvbnZleFBvbHlnb24pO1xyXG5cclxuICAgIHRoaXMucG9seWdvbkxheWVyLnBhdGhzLnB1c2goY2xpcHBlZFBvbHlnb24pO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUG9seWdvbkNsaXBwaW5nU2VydmljZS50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuaW1wb3J0IHsgRXZlbnRRdWV1ZSB9IGZyb20gJ2V2ZW50cy9FdmVudFF1ZXVlJztcclxuXHJcbnR5cGUgRXZlbnRMaXN0ZW5lciA9IChldmVudDogQXBwRXZlbnQpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRBZ2dyZWdhdG9yIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyTWFwID0gbmV3IE1hcDxzdHJpbmcsIEV2ZW50TGlzdGVuZXJbXT4oKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50UXVldWUgPSBuZXcgRXZlbnRRdWV1ZSgpO1xyXG4gIHByaXZhdGUgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGU6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIpIHtcclxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5nZXRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xyXG5cclxuICAgIGlmIChldmVudExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA9PT0gLTEpIHtcclxuICAgICAgZXZlbnRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0ZW5lck1hcC5zZXQoZXZlbnRUeXBlLCBldmVudExpc3RlbmVycyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGU6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIpIHtcclxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5nZXRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xyXG4gICAgY29uc3QgbGlzdGVuZXJJbmRleCA9IGV2ZW50TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xyXG5cclxuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xyXG4gICAgICBldmVudExpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0ZW5lck1hcC5zZXQoZXZlbnRUeXBlLCBldmVudExpc3RlbmVycyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzcGF0Y2hFdmVudChldmVudDogQXBwRXZlbnQpIHtcclxuICAgIHRoaXMuZXZlbnRRdWV1ZS5lbnF1ZXVlKGV2ZW50KTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaXNEaXNwYXRjaGluZykge1xyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnRGcm9tUXVldWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGF0Y2hFdmVudEZyb21RdWV1ZSgpIHtcclxuICAgIHRoaXMuaXNEaXNwYXRjaGluZyA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmV2ZW50UXVldWUuZGVxdWV1ZSgpO1xyXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmdldEV2ZW50TGlzdGVuZXJzKGV2ZW50LmV2ZW50VHlwZSk7XHJcbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IGxpc3RlbmVyKGV2ZW50KSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZXZlbnRRdWV1ZS5pc0VtcHR5KCkpIHtcclxuICAgICAgdGhpcy5pc0Rpc3BhdGNoaW5nID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnRGcm9tUXVldWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyTWFwLmdldChldmVudFR5cGUpIHx8IFtdO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvRXZlbnRBZ2dyZWdhdG9yLnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50UXVldWUge1xyXG4gIHByaXZhdGUgX3F1ZXVlOiBBcHBFdmVudFtdID0gW107XHJcblxyXG4gIHB1YmxpYyBlbnF1ZXVlKGV2ZW50OiBBcHBFdmVudCkge1xyXG4gICAgdGhpcy5fcXVldWUucHVzaChldmVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVxdWV1ZSgpOiBBcHBFdmVudCB7XHJcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdRdWV1ZSBpcyBlbXB0eScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9xdWV1ZS5zcGxpY2UoMCwgMSlbMF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0VtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0TGVuZ3RoKCkgPT09IDA7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9FdmVudFF1ZXVlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==