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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(10);
const LineProperties_1 = __webpack_require__(9);
const Vector3_1 = __webpack_require__(6);
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
    presetBackgroundTextures: [
        'images/backgrounds/red-bricks.jpg',
        'images/backgrounds/Funny-Cat-Face.jpg',
        'images/backgrounds/hqdefault.jpg'
    ],
    presetHeightMaps: [
        'images/height-maps/brick_heightmap.png',
        'images/height-maps/terrain-heightmap.png'
    ],
    presetNormalMaps: [
        'images/normal-maps/brick_normalmap.png',
        'images/normal-maps/normal_map.jpg',
        'images/normal-maps/circles.png'
    ],
    presetLightColor: new Vector3_1.Vector3(1, 1, 1),
    circlingLight: {
        lapTime: 10 * 1000,
        interval: 50,
        height: 50,
        distance: 50
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
/* 3 */
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
/* 4 */
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

var	fixUrls = __webpack_require__(28);

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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(8);
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(10);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(8);
exports.COLORS = {
    BLACK: new Color_1.Color(0, 0, 0),
    RED: new Color_1.Color(255, 0, 0),
    GREEN: new Color_1.Color(0, 255, 0),
    BLUE: new Color_1.Color(0, 0, 255),
    WHITE: new Color_1.Color(255, 255, 255)
};
Object.freeze(exports.COLORS);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LightVersorType;
(function (LightVersorType) {
    LightVersorType[LightVersorType["Constant"] = 0] = "Constant";
    LightVersorType[LightVersorType["Circling"] = 1] = "Circling";
})(LightVersorType = exports.LightVersorType || (exports.LightVersorType = {}));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NewBackgroundTextureEvent_1 = __webpack_require__(37);
exports.NewBackgroundTextureEvent = NewBackgroundTextureEvent_1.NewBackgroundTextureEvent;
const NewHeightMapEvent_1 = __webpack_require__(38);
exports.NewHeightMapEvent = NewHeightMapEvent_1.NewHeightMapEvent;
const NewLightColorEvent_1 = __webpack_require__(39);
exports.NewLightColorEvent = NewLightColorEvent_1.NewLightColorEvent;
const NewLightVersorEvent_1 = __webpack_require__(40);
exports.NewLightVersorEvent = NewLightVersorEvent_1.NewLightVersorEvent;
const NewLightVersorTypeEvent_1 = __webpack_require__(41);
exports.NewLightVersorTypeEvent = NewLightVersorTypeEvent_1.NewLightVersorTypeEvent;
const NewNormalMapEvent_1 = __webpack_require__(42);
exports.NewNormalMapEvent = NewNormalMapEvent_1.NewNormalMapEvent;


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
const HitTestResult_1 = __webpack_require__(33);
const Line_1 = __webpack_require__(15);
const LineProperties_1 = __webpack_require__(9);
const Point_1 = __webpack_require__(5);
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
const Point_1 = __webpack_require__(5);
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

// TODO: split into separate messages for FillData
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(78);
class InstructionsDialog extends HTMLElement {
    constructor() {
        super();
        this.className = 'instructions-dialog dialog-box';
        this.titleElement = document.createElement('h1');
        this.titleElement.textContent = 'Instructions';
        this.titleElement.className = 'instructions-dialog__title';
        this.usageList = this.createUsageList();
        this.dismissButton = document.createElement('button');
        this.dismissButton.textContent = 'Dismiss';
        this.dismissButton.className = 'instructions-dialog__dismiss-button';
        this.close = this.close.bind(this);
    }
    connectedCallback() {
        this.appendChild(this.titleElement);
        this.appendChild(this.usageList);
        this.appendChild(this.dismissButton);
        this.dismissButton.addEventListener('click', this.close);
        requestAnimationFrame(() => {
            this.classList.add('instructions-dialog--active');
        });
    }
    disconnectedCallback() {
        this.removeChild(this.titleElement);
        this.removeChild(this.usageList);
        this.removeChild(this.dismissButton);
        this.dismissButton.removeEventListener('click', this.close);
        this.classList.remove('instructions-dialog--active');
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
        return list;
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(26);
__webpack_require__(29);
__webpack_require__(30);
const Application_1 = __webpack_require__(32);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nbody {\n  line-height: 1.5; }\n\n.main-canvas {\n  border: solid 1px black; }\n\n.main-container {\n  width: 100%;\n  padding: 0 1em; }\n\n.canvas-wrapper {\n  width: 100%;\n  position: relative; }\n\n.application-ui {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none; }\n  .application-ui * {\n    pointer-events: all; }\n\n.app-header {\n  margin-bottom: 1em;\n  margin-left: 1em; }\n\n.app-name {\n  margin: 0; }\n\n.footer {\n  margin: 1em 1em; }\n", ""]);

// exports


/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),
/* 31 */
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
/* 32 */
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
const EventAggregator_1 = __webpack_require__(34);
const LEX_1 = __webpack_require__(7);
const PolygonFiller_1 = __webpack_require__(36);
const Renderer_1 = __webpack_require__(44);
const Stage_1 = __webpack_require__(45);
const ClosestPathFinder_1 = __webpack_require__(46);
const ImageDownloader_1 = __webpack_require__(47);
const InputDataInitializer_1 = __webpack_require__(48);
const LightSimulator_1 = __webpack_require__(49);
const PolygonClipper_1 = __webpack_require__(50);
const UIController_1 = __webpack_require__(51);
const RenderEvent_1 = __webpack_require__(1);
const RenderFinishedEvent_1 = __webpack_require__(19);
class Application {
    constructor(canvas) {
        this.isRendering = false;
        this.isNextRenderQueued = false;
        this.canvas = canvas;
        this.eventAggregator = new EventAggregator_1.EventAggregator();
        this.imageDownloader = new ImageDownloader_1.ImageDownloader();
        this.polygonFiller = new PolygonFiller_1.PolygonFiller({
            canvas: this.canvas,
            eventAggregator: this.eventAggregator
        });
        this.lightSimulator = new LightSimulator_1.LightSimulator({
            eventAggregator: this.eventAggregator
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
        this.render = this.render.bind(this);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
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
        requestAnimationFrame(this.render);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.polygonFiller.fillPolygons(this.polygonLayer.paths);
            this.stage.render(this.renderer);
            this.eventAggregator.dispatchEvent(new RenderFinishedEvent_1.RenderFinishedEvent());
            if (this.isNextRenderQueued) {
                this.isNextRenderQueued = false;
                requestAnimationFrame(this.render);
            }
            else {
                this.isRendering = false;
            }
        });
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventQueue_1 = __webpack_require__(35);
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
/* 35 */
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


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LightVersorType_1 = __webpack_require__(11);
const Vector3_1 = __webpack_require__(6);
const input_data_1 = __webpack_require__(12);
const ActiveEdge_1 = __webpack_require__(43);
const FillWorkerMessageType_1 = __webpack_require__(16);
const FILL_WORKER_URL = 'fillWorker.js';
class PolygonFiller {
    constructor(dependencies) {
        this.fillData = {
            backgroundTexture: new ImageData(1, 1),
            heightMap: new ImageData(1, 1),
            lightColor: new Vector3_1.Vector3(1, 1, 1),
            lightVersorType: LightVersorType_1.LightVersorType.Constant,
            normalMap: new ImageData(1, 1)
        };
        this.eventAggregator = dependencies.eventAggregator;
        this.canvas = dependencies.canvas;
        this.onNewBackgroundTexture = this.onNewBackgroundTexture.bind(this);
        this.onNewHeightMap = this.onNewHeightMap.bind(this);
        this.onNewLightColor = this.onNewLightColor.bind(this);
        this.onNewLightVersor = this.onNewLightVersor.bind(this);
        this.onNewLightVersorType = this.onNewLightVersorType.bind(this);
        this.onNewNormalMap = this.onNewNormalMap.bind(this);
        this.onFillWorkerMessage = this.onFillWorkerMessage.bind(this);
    }
    injectCanvasRenderingContext(renderingContext) {
        this.renderingContext = renderingContext;
    }
    init() {
        const eventAggregator = this.eventAggregator;
        eventAggregator.addEventListener(input_data_1.NewBackgroundTextureEvent.eventType, this.onNewBackgroundTexture);
        eventAggregator.addEventListener(input_data_1.NewHeightMapEvent.eventType, this.onNewHeightMap);
        eventAggregator.addEventListener(input_data_1.NewLightColorEvent.eventType, this.onNewLightColor);
        eventAggregator.addEventListener(input_data_1.NewLightVersorEvent.eventType, this.onNewLightVersor);
        eventAggregator.addEventListener(input_data_1.NewLightVersorTypeEvent.eventType, this.onNewLightVersorType);
        eventAggregator.addEventListener(input_data_1.NewNormalMapEvent.eventType, this.onNewNormalMap);
        this.fillWorker = new Worker(FILL_WORKER_URL);
        this.sendAppFillDataToWorker();
        this.fillWorker.addEventListener('message', this.onFillWorkerMessage);
    }
    destroy() {
        const eventAggregator = this.eventAggregator;
        eventAggregator.removeEventListener(input_data_1.NewBackgroundTextureEvent.eventType, this.onNewBackgroundTexture);
        eventAggregator.removeEventListener(input_data_1.NewHeightMapEvent.eventType, this.onNewHeightMap);
        eventAggregator.removeEventListener(input_data_1.NewLightColorEvent.eventType, this.onNewLightColor);
        eventAggregator.removeEventListener(input_data_1.NewLightVersorEvent.eventType, this.onNewLightVersor);
        eventAggregator.removeEventListener(input_data_1.NewLightVersorTypeEvent.eventType, this.onNewLightVersorType);
        eventAggregator.removeEventListener(input_data_1.NewNormalMapEvent.eventType, this.onNewNormalMap);
        this.fillWorker.removeEventListener('message', this.onFillWorkerMessage);
        this.fillWorker.terminate();
    }
    fillPolygons(polygons) {
        const fillWorker = this.fillWorker;
        fillWorker.postMessage({
            type: FillWorkerMessageType_1.FillWorkerMessageType.StartFill
        });
        polygons.forEach(polygon => this.fillPolygon(polygon));
        return new Promise((resolve, reject) => {
            function onMessage() {
                resolve();
                removeEventListeners();
            }
            function onError(error) {
                reject(error);
                removeEventListeners();
            }
            function removeEventListeners() {
                fillWorker.removeEventListener('message', onMessage);
                fillWorker.removeEventListener('error', onError);
            }
            fillWorker.addEventListener('message', onMessage);
            fillWorker.addEventListener('error', onError);
            fillWorker.postMessage({
                type: FillWorkerMessageType_1.FillWorkerMessageType.EndFill
            });
        });
    }
    onFillWorkerMessage(event) {
        const imageData = event.data;
        this.renderingContext.putImageData(imageData, 0, 0);
    }
    fillPolygon(polygon) {
        const fillStrips = this.getPolygonFillStrips(polygon);
        this.fillWorker.postMessage({
            type: FillWorkerMessageType_1.FillWorkerMessageType.FillStrips,
            fillStrips
        });
    }
    sendAppFillDataToWorker() {
        this.fillWorker.postMessage({
            type: FillWorkerMessageType_1.FillWorkerMessageType.FillData,
            width: this.canvas.width,
            height: this.canvas.height,
            appFillData: this.fillData
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
    onNewBackgroundTexture(event) {
        this.fillData.backgroundTexture = event.payload;
        this.sendAppFillDataToWorker();
        event.handled = true;
    }
    onNewHeightMap(event) {
        this.fillData.heightMap = event.payload;
        this.sendAppFillDataToWorker();
        event.handled = true;
    }
    onNewLightColor(event) {
        this.fillData.lightColor = event.payload;
        this.sendAppFillDataToWorker();
        event.handled = true;
    }
    onNewLightVersor(event) {
        const lightVersor = event.payload;
        this.fillWorker.postMessage({
            type: FillWorkerMessageType_1.FillWorkerMessageType.LightVersor,
            versor: {
                x: lightVersor.x,
                y: lightVersor.y,
                z: lightVersor.z
            }
        });
    }
    onNewLightVersorType(event) {
        this.fillData.lightVersorType = event.payload;
        this.sendAppFillDataToWorker();
        event.handled = true;
    }
    onNewNormalMap(event) {
        this.fillData.normalMap = event.payload;
        this.sendAppFillDataToWorker();
        event.handled = true;
    }
}
exports.PolygonFiller = PolygonFiller;


/***/ }),
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(10);
const Line_1 = __webpack_require__(15);
const Point_1 = __webpack_require__(5);
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
class ImageDownloader {
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
        return new Promise((resolve, reject) => {
            function onLoad() {
                image.removeEventListener('load', onLoad);
                image.removeEventListener('error', onError);
                resolve();
            }
            function onError() {
                image.removeEventListener('load', onLoad);
                image.removeEventListener('error', onError);
                reject();
            }
            image.addEventListener('load', onLoad);
            image.addEventListener('error', onError);
        });
    }
}
exports.ImageDownloader = ImageDownloader;


/***/ }),
/* 48 */
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
const input_data_1 = __webpack_require__(12);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(2);
const configuration_1 = __webpack_require__(0);
const LightVersorType_1 = __webpack_require__(11);
const LineProperties_1 = __webpack_require__(9);
const Point_1 = __webpack_require__(5);
const Polygon_1 = __webpack_require__(17);
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
            this.eventAggregator.dispatchEvent(new input_data_1.NewLightVersorTypeEvent(LightVersorType_1.LightVersorType.Constant));
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = __webpack_require__(12);
const RenderEvent_1 = __webpack_require__(1);
const configuration_1 = __webpack_require__(0);
const LightVersorType_1 = __webpack_require__(11);
const Vector3_1 = __webpack_require__(6);
class LightSimulator {
    constructor(dependencies) {
        this.circlingLightAngle = 0;
        this.eventAggregator = dependencies.eventAggregator;
        this.onNewLightVersorType = this.onNewLightVersorType.bind(this);
        this.circlingLightTick = this.circlingLightTick.bind(this);
    }
    init() {
        this.eventAggregator.addEventListener(input_data_1.NewLightVersorTypeEvent.eventType, this.onNewLightVersorType);
    }
    destroy() {
        this.eventAggregator.removeEventListener(input_data_1.NewLightVersorTypeEvent.eventType, this.onNewLightVersorType);
        this.stopCirclingLight();
    }
    onNewLightVersorType(event) {
        switch (event.payload) {
            case LightVersorType_1.LightVersorType.Constant:
                this.stopCirclingLight();
                this.dispatchLightVersor(new Vector3_1.Vector3(0, 0, 1));
                break;
            case LightVersorType_1.LightVersorType.Circling:
                this.startCirclingLight();
                break;
            default:
                throw new Error('Unknown light versor type');
        }
    }
    dispatchLightVersor(versor) {
        this.eventAggregator.dispatchEvent(new input_data_1.NewLightVersorEvent(versor));
    }
    startCirclingLight() {
        this.circlingLightIntervalId = setInterval(this.circlingLightTick, configuration_1.configuration.circlingLight.interval);
    }
    circlingLightTick() {
        const x = configuration_1.configuration.circlingLight.distance * Math.cos(this.circlingLightAngle);
        const y = configuration_1.configuration.circlingLight.distance * Math.sin(this.circlingLightAngle);
        const lightVector = new Vector3_1.Vector3(x, y, configuration_1.configuration.circlingLight.height);
        const lightVersor = lightVector.normalize();
        this.eventAggregator.dispatchEvent(new input_data_1.NewLightVersorEvent(lightVersor));
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        this.circlingLightAngle += LightSimulator.stepInRadians;
        if (this.circlingLightAngle >= LightSimulator.radiansModuloValue) {
            this.circlingLightAngle -= LightSimulator.radiansModuloValue;
        }
    }
    stopCirclingLight() {
        clearInterval(this.circlingLightIntervalId);
    }
}
LightSimulator.stepInRadians = configuration_1.configuration.circlingLight.interval /
    configuration_1.configuration.circlingLight.lapTime *
    2 *
    Math.PI;
LightSimulator.radiansModuloValue = 2 * Math.PI;
exports.LightSimulator = LightSimulator;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Line_1 = __webpack_require__(15);
const Point_1 = __webpack_require__(5);
const Polygon_1 = __webpack_require__(17);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(7);
const InputDataService_1 = __webpack_require__(52);
const MousePositionTransformer_1 = __webpack_require__(61);
const NewPolygonUIController_1 = __webpack_require__(62);
const PathDraggingService_1 = __webpack_require__(63);
const PointDraggingService_1 = __webpack_require__(64);
const PointInserterService_1 = __webpack_require__(65);
const PointRemoverService_1 = __webpack_require__(66);
const PointSyncService_1 = __webpack_require__(67);
const SerializationService_1 = __webpack_require__(71);
const LineClickEvent_1 = __webpack_require__(23);
__webpack_require__(74);
__webpack_require__(77);
__webpack_require__(24);
const PolygonClippingService_1 = __webpack_require__(80);
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
        const applicationUIContainer = document.getElementById(configuration_1.configuration.applicationUIContainerID);
        if (!applicationUIContainer) {
            throw new Error('Application UI container not found');
        }
        this.applicationUIContainer = applicationUIContainer;
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
            imageDownloader: this.imageDownloader
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
}
exports.UIController = UIController;


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
const input_data_1 = __webpack_require__(12);
const RenderEvent_1 = __webpack_require__(1);
const configuration_1 = __webpack_require__(0);
const ColorSelectDialog_1 = __webpack_require__(53);
const ImageSelectDialog_1 = __webpack_require__(58);
const LightVersorType_1 = __webpack_require__(11);
const Vector3_1 = __webpack_require__(6);
class InputDataService {
    constructor(dependencies) {
        this.eventAggregator = dependencies.eventAggregator;
        this.imageDownloader = dependencies.imageDownloader;
        this.setupBackgroundTextureDialog();
        this.setupLightVersorSelect();
        this.setupLightColorDialog();
        this.setupNormalMapDialog();
        this.setupHeightMapDialog();
    }
    init() {
        const inputDataContainer = document.getElementById('input-data-container');
        if (!inputDataContainer) {
            throw new Error('Input data container not found');
        }
        this.inputDataContainer = inputDataContainer;
        this.inputDataContainer.appendChild(this.openBackgroundTextureDialogButton);
        this.inputDataContainer.appendChild(this.openLightColorDialogButton);
        this.inputDataContainer.appendChild(this.openNormalMapDialogButton);
        this.inputDataContainer.appendChild(this.openHeightMapDialogButton);
        this.inputDataContainer.appendChild(this.lightVersorContainer);
        const dialogOverlay = document.querySelector('app-dialog-overlay');
        if (!dialogOverlay) {
            throw new Error('Dialog overlay not found');
        }
        this.dialogOverlay = dialogOverlay;
        this.openBackgroundTextureDialogButton.addEventListener('click', this.openBackgroundTextureDialog);
        this.openLightColorDialogButton.addEventListener('click', this.openLightColorDialog);
        this.openNormalMapDialogButton.addEventListener('click', this.openNormalMapDialog);
        this.openHeightMapDialogButton.addEventListener('click', this.openHeightMapDialog);
        this.lightVersorSelect.addEventListener('change', this.onLightVersorSelectChange);
    }
    destroy() {
        // tslint:disable-next-line
        this.inputDataContainer.innerHTML = '';
        this.openBackgroundTextureDialogButton.removeEventListener('click', this.openBackgroundTextureDialog);
        this.backgroundTextureDialog.removeEventListener('close', this.onBackgroundTextureDialogClosed);
        this.backgroundTextureDialog.close();
        this.openLightColorDialogButton.removeEventListener('close', this.openLightColorDialog);
        this.lightColorDialog.removeEventListener('close', this.onLightColorDialogClosed);
        this.lightColorDialog.close();
        this.openHeightMapDialogButton.removeEventListener('click', this.openHeightMapDialog);
        this.heightMapDialog.removeEventListener('close', this.onHeightMapDialogClosed);
        this.heightMapDialog.close();
        this.openNormalMapDialogButton.removeEventListener('click', this.openNormalMapDialog);
        this.normalMapDialog.removeEventListener('close', this.onNormalMapDialogClosed);
        this.normalMapDialog.close();
        this.lightVersorSelect.removeEventListener('change', this.onLightVersorSelectChange);
    }
    // #region Background texture dialog
    setupBackgroundTextureDialog() {
        this.openBackgroundTextureDialogButton = document.createElement('button');
        this.openBackgroundTextureDialogButton.innerText = 'Select background texture';
        this.backgroundTextureDialog = new ImageSelectDialog_1.ImageSelectDialog(configuration_1.configuration.presetBackgroundTextures);
        this.backgroundTextureDialog.name = 'Background texture';
        this.openBackgroundTextureDialog = this.openBackgroundTextureDialog.bind(this);
        this.onBackgroundTextureDialogClosed = this.onBackgroundTextureDialogClosed.bind(this);
    }
    openBackgroundTextureDialog() {
        this.dialogOverlay.showDialog(this.backgroundTextureDialog);
        this.backgroundTextureDialog.addEventListener('close', this.onBackgroundTextureDialogClosed);
    }
    onBackgroundTextureDialogClosed() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.backgroundTextureDialog.wasCancelled) {
                return;
            }
            const selectedImage = this.backgroundTextureDialog.selectedImage;
            const imageData = yield this.imageDownloader.imageToImageData(selectedImage);
            this.eventAggregator.dispatchEvent(new input_data_1.NewBackgroundTextureEvent(imageData));
            this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        });
    }
    // #endregion
    // #region Light color dialog
    setupLightColorDialog() {
        this.openLightColorDialogButton = document.createElement('button');
        this.openLightColorDialogButton.innerText = 'Select light color';
        this.lightColorDialog = new ColorSelectDialog_1.ColorSelectDialog();
        this.lightColorDialog.name = 'Light color';
        this.lightColorDialog.selectedColor = configuration_1.configuration.presetLightColor.toColor();
        this.openLightColorDialog = this.openLightColorDialog.bind(this);
        this.onLightColorDialogClosed = this.onLightColorDialogClosed.bind(this);
    }
    openLightColorDialog() {
        this.dialogOverlay.showDialog(this.lightColorDialog);
        this.lightColorDialog.addEventListener('close', this.onLightColorDialogClosed);
    }
    onLightColorDialogClosed() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.lightColorDialog.wasCancelled) {
                return;
            }
            const lightColor = this.lightColorDialog.selectedColor;
            const lightVector = Vector3_1.Vector3.fromColor(lightColor);
            this.eventAggregator.dispatchEvent(new input_data_1.NewLightColorEvent(lightVector));
            this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        });
    }
    // #endregion
    // #region Normal map dialog
    setupNormalMapDialog() {
        this.openNormalMapDialogButton = document.createElement('button');
        this.openNormalMapDialogButton.innerText = 'Select normal map';
        this.normalMapDialog = new ImageSelectDialog_1.ImageSelectDialog(configuration_1.configuration.presetNormalMaps);
        this.normalMapDialog.name = 'Normal map';
        this.openNormalMapDialog = this.openNormalMapDialog.bind(this);
        this.onNormalMapDialogClosed = this.onNormalMapDialogClosed.bind(this);
        this.normalMapDialog.addEventListener('close', this.onNormalMapDialogClosed);
    }
    openNormalMapDialog() {
        this.dialogOverlay.showDialog(this.normalMapDialog);
    }
    onNormalMapDialogClosed() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.normalMapDialog.wasCancelled) {
                return;
            }
            const selectedImage = this.normalMapDialog.selectedImage;
            const imageData = yield this.imageDownloader.imageToImageData(selectedImage);
            this.eventAggregator.dispatchEvent(new input_data_1.NewNormalMapEvent(imageData));
            this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        });
    }
    // #endregion
    // #region Light versor select
    setupLightVersorSelect() {
        this.lightVersorContainer = document.createElement('div');
        const label = document.createElement('label');
        label.setAttribute('for', 'light-wersor-select');
        label.innerText = 'Light versor: ';
        this.lightVersorContainer.appendChild(label);
        this.lightVersorSelect = document.createElement('select');
        const constantVersorOption = document.createElement('option');
        constantVersorOption.innerText = 'Constant ([0, 0, 1])';
        constantVersorOption.value = 'constant';
        const movingVersorOption = document.createElement('option');
        movingVersorOption.innerText = 'Circling above the screen';
        movingVersorOption.value = 'circling';
        this.lightVersorSelect.appendChild(constantVersorOption);
        this.lightVersorSelect.appendChild(movingVersorOption);
        this.lightVersorContainer.appendChild(this.lightVersorSelect);
        this.onLightVersorSelectChange = this.onLightVersorSelectChange.bind(this);
    }
    onLightVersorSelectChange() {
        const value = this.lightVersorSelect.value;
        const versorTypes = {
            constant: LightVersorType_1.LightVersorType.Constant,
            circling: LightVersorType_1.LightVersorType.Circling
        };
        const versorType = versorTypes[value];
        this.eventAggregator.dispatchEvent(new input_data_1.NewLightVersorTypeEvent(versorType));
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
    }
    // #endregion
    // #region Height map dialog
    setupHeightMapDialog() {
        this.openHeightMapDialogButton = document.createElement('button');
        this.openHeightMapDialogButton.innerText = 'Select height map';
        this.heightMapDialog = new ImageSelectDialog_1.ImageSelectDialog(configuration_1.configuration.presetHeightMaps);
        this.heightMapDialog.name = 'Height map';
        this.openHeightMapDialog = this.openHeightMapDialog.bind(this);
        this.onHeightMapDialogClosed = this.onHeightMapDialogClosed.bind(this);
        this.heightMapDialog.addEventListener('close', this.onHeightMapDialogClosed);
    }
    openHeightMapDialog() {
        this.dialogOverlay.showDialog(this.heightMapDialog);
    }
    onHeightMapDialogClosed() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.heightMapDialog.wasCancelled) {
                return;
            }
            const selectedImage = this.heightMapDialog.selectedImage;
            const imageData = yield this.imageDownloader.imageToImageData(selectedImage);
            this.eventAggregator.dispatchEvent(new input_data_1.NewHeightMapEvent(imageData));
            this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        });
    }
}
exports.InputDataService = InputDataService;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(54);
const Color_1 = __webpack_require__(8);
__webpack_require__(56);
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
        this.appendChild(this.header);
        this.appendChild(this.colorInput);
        this.appendChild(this.bottomButtonsContainer);
        this.cancelButton.addEventListener('click', this.onCancelButtonClick);
        this.confirmButton.addEventListener('click', this.onConfirmButtonClick);
    }
    disconnectedCallback() {
        this.removeChild(this.header);
        this.removeChild(this.colorInput);
        this.removeChild(this.bottomButtonsContainer);
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
        this.header = this.createBlock();
        this.header.classList.add(classNames.HEADER);
        this.heading = document.createElement('h2');
        this.heading.classList.add(classNames.HEADING);
        this.heading.innerText = this.name;
        this.header.appendChild(this.heading);
    }
    createColorInput() {
        this.colorInput = document.createElement('input');
        this.colorInput.type = 'color';
    }
    createBottomButtons() {
        this.bottomButtonsContainer = document.createElement('div');
        this.bottomButtonsContainer.classList.add(classNames.BOTTOM_BUTTONS);
        this.cancelButton = document.createElement('button');
        this.cancelButton.innerText = 'Cancel';
        this.confirmButton = document.createElement('button');
        this.confirmButton.innerText = 'Confirm';
        this.bottomButtonsContainer.appendChild(this.cancelButton);
        this.bottomButtonsContainer.appendChild(this.confirmButton);
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".dialog-box {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0, 0);\n  z-index: 1;\n  background-color: #eee;\n  border: solid 1px black;\n  border-radius: 25px;\n  color: #222;\n  padding: 2rem;\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px black;\n  transition: transform 250ms ease-in-out; }\n\n.dialog-box--active {\n  transform: translate(-50%, -50%) scale(1, 1); }\n", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".color-select-dialog {\n  padding: 1rem;\n  width: 75vw; }\n\n.color-select-dialog__block {\n  border-bottom: solid 1px black;\n  padding-bottom: 1em; }\n\n.color-select-dialog__heading {\n  margin: 0.5em 0; }\n\n.color-select-dialog__bottom-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1em; }\n  .color-select-dialog__bottom-buttons button {\n    font-size: 1.3em; }\n", ""]);

// exports


/***/ }),
/* 58 */
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
    constructor(presetImageUrls) {
        super();
        this._wasCancelled = false;
        this._presetImageUrls = presetImageUrls;
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
        this.appendChild(this.header);
        this.appendChild(this.presetImagesListContainer);
        this.appendChild(this.customImageContainer);
        this.appendChild(this.customColorContainer);
        this.appendChild(this.bottomButtonsContainer);
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
        this.removeChild(this.header);
        this.removeChild(this.presetImagesListContainer);
        this.removeChild(this.customImageContainer);
        this.removeChild(this.customColorContainer);
        this.removeChild(this.bottomButtonsContainer);
    }
    canClose() {
        return true;
    }
    close() {
        this.dispatchEvent(new CustomEvent('close'));
    }
    createHeader() {
        this.header = this.createBlock();
        this.header.classList.add(classNames.HEADER);
        this.heading = document.createElement('h2');
        this.heading.classList.add(classNames.HEADING);
        this.heading.innerText = this.name;
        this.header.appendChild(this.heading);
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
        this.selectImage(this.presetImagesListContainer.querySelector('img'));
    }
    createCustomImagePicker() {
        this.customImageContainer = this.createBlock();
        const blockTitle = this.createBlockTitle('Select custom image');
        this.customImageContainer.appendChild(blockTitle);
        this.customFileInput = document.createElement('input');
        this.customFileInput.type = 'file';
        this.customFileInput.accept = 'image/*';
        this.customImageContainer.appendChild(this.customFileInput);
        this.customImage = document.createElement('img');
        this.customImage.classList.add(classNames.CUSTOM_IMAGE);
        this.customImageContainer.appendChild(this.customImage);
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
        this.customColorContainer = this.createBlock();
        const title = this.createBlockTitle('Custom solid color');
        this.customColorContainer.appendChild(title);
        this.customColorInput = document.createElement('input');
        this.customColorInput.type = 'color';
        this.customColorInput.value = '#000000';
        this.customColorContainer.appendChild(this.customColorInput);
        this.customColorImage = new Image(20, 20);
        this.customColorContainer.appendChild(this.customColorImage);
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
        this.bottomButtonsContainer = document.createElement('div');
        this.bottomButtonsContainer.classList.add(classNames.BOTTOM_BUTTONS);
        this.cancelButton = document.createElement('button');
        this.cancelButton.innerText = 'Cancel';
        this.confirmButton = document.createElement('button');
        this.confirmButton.innerText = 'Confirm';
        this.bottomButtonsContainer.appendChild(this.cancelButton);
        this.bottomButtonsContainer.appendChild(this.confirmButton);
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
var update = __webpack_require__(4)(content, options);
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

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".image-select-dialog {\n  padding: 1rem;\n  width: 75vw; }\n\n.image-select-dialog__heading {\n  margin: 0.5em 0; }\n\n.image-select-dialog__block {\n  border-bottom: solid 1px black;\n  padding-bottom: 1em; }\n\n.image-select-dialog__preset-images-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .image-select-dialog__preset-images-container > div {\n    max-width: 25%;\n    max-height: 200px;\n    margin: auto; }\n  .image-select-dialog__preset-images-container img {\n    max-width: 100%;\n    max-height: 200px; }\n\n.image-select-dialog__custom-image {\n  display: block;\n  max-width: 25%;\n  max-height: 200px;\n  margin: auto; }\n\n.image-select-dialog__image--selected {\n  border: solid 3px green; }\n\n.image-select-dialog__bottom-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1em; }\n  .image-select-dialog__bottom-buttons button {\n    font-size: 1.3em; }\n", ""]);

// exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(5);
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Layer_1 = __webpack_require__(13);
const Path_1 = __webpack_require__(14);
const Polygon_1 = __webpack_require__(17);
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(7);
const PointClickEvent_1 = __webpack_require__(18);
const RenderEvent_1 = __webpack_require__(1);
const RenderFinishedEvent_1 = __webpack_require__(19);
const SyncComponentsEvent_1 = __webpack_require__(2);
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(5);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(2);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(10);
const Layer_1 = __webpack_require__(13);
const LineProperties_1 = __webpack_require__(9);
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(7);
const FinishPointDragEvent_1 = __webpack_require__(20);
const PointDragEvent_1 = __webpack_require__(21);
const StartPointDragEvent_1 = __webpack_require__(22);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(2);
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LineClickEvent_1 = __webpack_require__(23);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(2);
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(0);
const PointClickEvent_1 = __webpack_require__(18);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(2);
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PathPointElement_1 = __webpack_require__(68);
const SyncComponentsEvent_1 = __webpack_require__(2);
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FinishPointDragEvent_1 = __webpack_require__(20);
const PointDragEvent_1 = __webpack_require__(21);
const StartPointDragEvent_1 = __webpack_require__(22);
const PointClickEvent_1 = __webpack_require__(18);
__webpack_require__(69);
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".application-ui__vertex {\n  border: solid 1px black;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border: solid 2px; }\n  .application-ui__vertex:not(:active) {\n    border-color: green; }\n  .application-ui__vertex:active {\n    border-color: red; }\n\n.application-ui__vertex--initial {\n  background-color: #0051ff; }\n", ""]);

// exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoadButton_1 = __webpack_require__(72);
const SaveButton_1 = __webpack_require__(73);
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(2);
const LEX_1 = __webpack_require__(7);
class LoadButton extends HTMLElement {
    constructor(dependencies) {
        super();
        this.eventAggregator = dependencies.eventAggregator;
        this.stage = dependencies.stage;
        this.buttonElement = document.createElement('button');
        this.buttonElement.innerText = 'Load';
        this.onClick = this.onClick.bind(this);
    }
    connectedCallback() {
        this.buttonElement.addEventListener('click', this.onClick);
        this.appendChild(this.buttonElement);
    }
    disconnectedCallback() {
        this.removeChild(this.buttonElement);
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LEX_1 = __webpack_require__(7);
class SaveButton extends HTMLElement {
    constructor(dependencies) {
        super();
        this.stage = dependencies.stage;
        this.buttonElement = document.createElement('button');
        this.buttonElement.innerText = 'Save';
        this.onClick = this.onClick.bind(this);
    }
    connectedCallback() {
        this.buttonElement.addEventListener('click', this.onClick);
        this.appendChild(this.buttonElement);
    }
    disconnectedCallback() {
        this.removeChild(this.buttonElement);
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(75);
class DialogOverlay extends HTMLElement {
    constructor() {
        super();
        this.overlayElement = document.createElement('div');
        this.overlayElement.classList.add('overlay');
        this.onOverlayClick = this.onOverlayClick.bind(this);
        this.onDialogClose = this.onDialogClose.bind(this);
    }
    connectedCallback() {
        this.appendChild(this.overlayElement);
        this.overlayElement.addEventListener('click', this.onOverlayClick);
    }
    disconnectedCallback() {
        this.removeChild(this.overlayElement);
        this.overlayElement.removeEventListener('click', this.onOverlayClick);
    }
    showDialog(dialogBox) {
        this.dialogBox = dialogBox;
        this.showOverlay();
        this.appendChild(dialogBox);
        dialogBox.addEventListener('close', this.onDialogClose);
        requestAnimationFrame(() => {
            dialogBox.classList.add('dialog-box--active');
        });
    }
    onOverlayClick() {
        if (!this.dialogBox || !this.dialogBox.canClose()) {
            return;
        }
        this.dialogBox.close();
    }
    onDialogClose() {
        if (this.dialogBox) {
            const dialogBox = this.dialogBox;
            this.removeChild(dialogBox);
            dialogBox.removeEventListener('close', this.onDialogClose);
            requestAnimationFrame(() => {
                dialogBox.classList.remove('dialog-box--active');
            });
        }
        this.dialogBox = undefined;
        this.hideOverlay();
    }
    showOverlay() {
        this.overlayElement.classList.add('overlay--visible');
    }
    hideOverlay() {
        this.overlayElement.classList.remove('overlay--visible');
    }
}
exports.DialogOverlay = DialogOverlay;
customElements.define('app-dialog-overlay', DialogOverlay);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: 1;\n  background-color: black;\n  transition: opacity 250ms ease-in-out;\n  pointer-events: none; }\n\n.overlay--visible {\n  opacity: 0.5;\n  pointer-events: all; }\n", ""]);

// exports


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const InstructionsDialog_1 = __webpack_require__(24);
class InstructionsButton extends HTMLElement {
    constructor() {
        super();
        this.button = document.createElement('button');
        this.button.textContent = 'Instructions';
        this.button.className = 'instructions-button';
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
        this.appendChild(this.button);
        this.button.addEventListener('click', this.onButtonClick);
    }
    disconnectedCallback() {
        this.removeChild(this.button);
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".instructions-dialog {\n  background-color: #1f350f;\n  color: #eee; }\n\n.instructions-dialog__title {\n  margin: 0; }\n", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(2);
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODFiMWM1ZTZlNjMzMmNlNWM5ZjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9SZW5kZXJFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vVmVjdG9yMy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTEVYLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9MaW5lUHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0NPTE9SUy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0xpZ2h0VmVyc29yVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9MYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1BhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9MaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5Z29uLWZpbGxlci9GaWxsV29ya2VyTWVzc2FnZVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Qb2x5Z29uLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvUG9pbnRDbGlja0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvUmVuZGVyRmluaXNoZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3BvaW50LWRyYWcvRmluaXNoUG9pbnREcmFnRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL1BvaW50RHJhZ0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvTGluZUNsaWNrRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/NDQ0NiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy93ZWJjb21wb25lbnRzLWhpLXNkLWNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vSGl0VGVzdFJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL0V2ZW50QWdncmVnYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL0V2ZW50UXVldWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlnb24tZmlsbGVyL1BvbHlnb25GaWxsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0hlaWdodE1hcEV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodENvbG9yRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWdvbi1maWxsZXIvQWN0aXZlRWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9DbG9zZXN0UGF0aEZpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9JbnB1dERhdGFJbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvTGlnaHRTaW11bGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1BvbHlnb25DbGlwcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0lucHV0RGF0YVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9EaWFsb2dCb3guc2Nzcz82NzRmIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL0RpYWxvZ0JveC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cuc2Nzcz85NjI0Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cuc2Nzcz82Y2Y2Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9OZXdQb2x5Z29uVUlDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9QYXRoRHJhZ2dpbmdTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2ludERyYWdnaW5nU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUG9pbnRJbnNlcnRlclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1BvaW50UmVtb3ZlclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1BvaW50U3luY1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudC5zY3NzP2Y2YzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1NlcmlhbGl6YXRpb25TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL3NlcmlhbGl6YXRpb24vTG9hZEJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL1NhdmVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5LnNjc3M/OTBhYyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3M/NGUyZiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1BvbHlnb25DbGlwcGluZ1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJB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cUJBQXFCLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHlDQUFtQixFQUFFLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHlCQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRjtBQWhFRCx3REFnRUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgxYjFjNWU2ZTYzMzJjZTVjOWY0IiwiaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnY29tbW9uL0NPTE9SUyc7XHJcbmltcG9ydCB7IExpbmVQcm9wZXJ0aWVzIH0gZnJvbSAnY29tbW9uL0xpbmVQcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuXHJcbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSB7XHJcbiAgbmV3TGluZVByZXZpZXdQcm9wZXJ0aWVzOiBuZXcgTGluZVByb3BlcnRpZXMoQ09MT1JTLkJMVUUsIDIpLFxyXG4gIG5ld1BvbHlnb25MaW5lUHJvcGVydGllczogbmV3IExpbmVQcm9wZXJ0aWVzKENPTE9SUy5SRUQsIDEpLFxyXG4gIHBvbHlnb25MaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXMuZ2V0RGVmYXVsdCgpLFxyXG5cclxuICBhcHBsaWNhdGlvblVJQ29udGFpbmVySUQ6ICdhcHBsaWNhdGlvbi11aScsXHJcblxyXG4gIGhpdFRvbGVyYW5jZTogMTAsXHJcbiAgbWluUG9seWdvblBvaW50czogMyxcclxuICBkb3VibGVDbGlja01heERlbGF5OiA1MDAsXHJcblxyXG4gIGRpc3BsYXlQYXRoR2hvc3RXaGVuRHJhZ2dpbmc6IGZhbHNlLFxyXG4gIGNhbnZhc0ZvbnQ6ICczMHB0IHNlcmlmJyxcclxuXHJcbiAgcHJlc2V0QmFja2dyb3VuZFRleHR1cmVzOiBbXHJcbiAgICAnaW1hZ2VzL2JhY2tncm91bmRzL3JlZC1icmlja3MuanBnJyxcclxuICAgICdpbWFnZXMvYmFja2dyb3VuZHMvRnVubnktQ2F0LUZhY2UuanBnJyxcclxuICAgICdpbWFnZXMvYmFja2dyb3VuZHMvaHFkZWZhdWx0LmpwZydcclxuICBdLFxyXG4gIHByZXNldEhlaWdodE1hcHM6IFtcclxuICAgICdpbWFnZXMvaGVpZ2h0LW1hcHMvYnJpY2tfaGVpZ2h0bWFwLnBuZycsXHJcbiAgICAnaW1hZ2VzL2hlaWdodC1tYXBzL3RlcnJhaW4taGVpZ2h0bWFwLnBuZydcclxuICBdLFxyXG4gIHByZXNldE5vcm1hbE1hcHM6IFtcclxuICAgICdpbWFnZXMvbm9ybWFsLW1hcHMvYnJpY2tfbm9ybWFsbWFwLnBuZycsXHJcbiAgICAnaW1hZ2VzL25vcm1hbC1tYXBzL25vcm1hbF9tYXAuanBnJyxcclxuICAgICdpbWFnZXMvbm9ybWFsLW1hcHMvY2lyY2xlcy5wbmcnXHJcbiAgXSxcclxuICBwcmVzZXRMaWdodENvbG9yOiBuZXcgVmVjdG9yMygxLCAxLCAxKSxcclxuXHJcbiAgY2lyY2xpbmdMaWdodDoge1xyXG4gICAgbGFwVGltZTogMTAgKiAxMDAwLFxyXG4gICAgaW50ZXJ2YWw6IDUwLFxyXG4gICAgaGVpZ2h0OiA1MCxcclxuICAgIGRpc3RhbmNlOiA1MFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGNvbmZpZ3VyYXRpb24gfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29uZmlndXJhdGlvbi50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZCA9IG51bGw7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IFJlbmRlckV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ1JlbmRlckV2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL1JlbmRlckV2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN5bmNDb21wb25lbnRzRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQgPSBudWxsO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBTeW5jQ29tcG9uZW50c0V2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudC50cyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ0eXBlIE1vdmVDYWxsYmFjayA9ICgpID0+IHZvaWQ7XHJcblxyXG5jb25zdCBFUFNJTE9OID0gMC4xO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuICBwdWJsaWMgbW92ZUNhbGxiYWNrOiBNb3ZlQ2FsbGJhY2sgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3k6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5feTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0geDtcclxuICAgIHRoaXMuX3kgPSB5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhZGQocDE6IFBvaW50LCBwMjogUG9pbnQpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHAxLnggKyBwMi54LCBwMS55ICsgcDIueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHN1YnRyYWN0KHAxOiBQb2ludCwgcDI6IFBvaW50KTogUG9pbnQge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludChwMS54IC0gcDIueCwgcDEueSAtIHAyLnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXREaXN0YW5jZUJldHdlZW4ocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChQb2ludC5nZXREaXN0YW5jZUJldHdlZW5TcXVhcmVkKHAxLCBwMikpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXREaXN0YW5jZUJldHdlZW5TcXVhcmVkKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnBvdyhwMS54IC0gcDIueCwgMikgKyBNYXRoLnBvdyhwMS55IC0gcDIueSwgMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEFuZ2xlKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIocDIueSAtIHAxLnksIHAyLnggLSBwMS54KSAqIDE4MCAvIE1hdGguUEk7XHJcblxyXG4gICAgaWYgKGFuZ2xlIDwgMCkge1xyXG4gICAgICBhbmdsZSArPSAzNjA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFuZ2xlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkb3RQcm9kdWN0KHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgICByZXR1cm4gcDEueCAqIHAyLnggKyBwMS55ICogcDIueTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3Jvc3NQcm9kdWN0KHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgICByZXR1cm4gcDEueCAqIHAyLnkgLSBwMS55ICogcDIueDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZXBzaWxvbkVxdWFscyhwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gICAgcmV0dXJuIFBvaW50LmdldERpc3RhbmNlQmV0d2VlbihwMSwgcDIpIDw9IEVQU0lMT047XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW92ZVRvKHBvaW50OiBQb2ludCk6IHZvaWQ7XHJcbiAgcHVibGljIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XHJcbiAgcHVibGljIG1vdmVUbyhwb2ludE9yWDogUG9pbnQgfCBudW1iZXIsIHk/OiBudW1iZXIpIHtcclxuICAgIGlmICh0eXBlb2YgcG9pbnRPclggPT09ICdudW1iZXInKSB7XHJcbiAgICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ggaXMgZGVmaW5lZCwgYnV0IHkgaXMgbm90IGRlZmluZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMubW92ZVRvQ29vcmRpbmF0ZXMocG9pbnRPclgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLm1vdmVUb1BvaW50KHBvaW50T3JYKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlcXVhbHMocG9pbnQ6IFBvaW50KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy54ID09PSBwb2ludC54ICYmIHRoaXMueSA9PT0gcG9pbnQueTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREaXN0YW5jZVRvKHBvaW50OiBQb2ludCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuKHRoaXMsIHBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREaXN0YW5jZVNxdWFyZWRUbyhwb2ludDogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIFBvaW50LmdldERpc3RhbmNlQmV0d2VlblNxdWFyZWQodGhpcywgcG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmxvb3IoKSB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KE1hdGguZmxvb3IodGhpcy54KSwgTWF0aC5mbG9vcih0aGlzLnkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZVRvUG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb3ZlVG9Db29yZGluYXRlcyhwb2ludC54LCBwb2ludC55KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZVRvQ29vcmRpbmF0ZXMoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgdGhpcy5feSA9IHk7XHJcblxyXG4gICAgaWYgKHRoaXMubW92ZUNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMubW92ZUNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9Qb2ludC50cyIsImltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29tbW9uL0NvbG9yJztcclxuXHJcbmNvbnN0IE1BWF9DT0xPUiA9IDI1NTtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IzIHtcclxuICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgcHVibGljIHo6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnogPSB6O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tQ29sb3IoY29sb3I6IENvbG9yKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoY29sb3IuciAvIE1BWF9DT0xPUiwgY29sb3IuZyAvIE1BWF9DT0xPUiwgY29sb3IuYiAvIE1BWF9DT0xPUik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFkZCh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh2MS54ICsgdjIueCwgdjEueSArIHYyLnksIHYxLnogKyB2Mi56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3VidHJhY3QodjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModjEueCAtIHYyLngsIHYxLnkgLSB2Mi55LCB2MS56IC0gdjIueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyb3NzUHJvZHVjdCh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyhcclxuICAgICAgdjEueSAqIHYyLnogLSB2MS56ICogdjIueSxcclxuICAgICAgdjEueiAqIHYyLnggLSB2MS54ICogdjIueixcclxuICAgICAgdjEueCAqIHYyLnkgLSB2MS55ICogdjIueFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZG90UHJvZHVjdCh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHYxLnggKiB2Mi54ICsgdjEueSAqIHYyLnkgKyB2MS56ICogdjIuejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY29zaW5lQW5nbGUodjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGRvdFByb2R1Y3QgPSBWZWN0b3IzLmRvdFByb2R1Y3QodjEsIHYyKTtcclxuICAgIGNvbnN0IGxlbmd0aDEgPSB2MS5nZXRMZW5ndGgoKTtcclxuICAgIGNvbnN0IGxlbmd0aDIgPSB2Mi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICByZXR1cm4gZG90UHJvZHVjdCAvIChsZW5ndGgxICogbGVuZ3RoMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZyb21Ob3JtYWxNYXAocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IFZlY3RvcjMge1xyXG4gICAgY29uc3QgeCA9IHIgLyAyNTUgKiAyIC0gMTtcclxuICAgIGNvbnN0IHkgPSBnIC8gMjU1ICogMiAtIDE7XHJcbiAgICBjb25zdCB6ID0gYiAvIDI1NTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoeCwgeSwgeik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG11bHRpcGx5Q29tcG9uZW50cyh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh2MS54ICogdjIueCwgdjEueSAqIHYyLnksIHYxLnogKiB2Mi56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0NvbG9yKCk6IENvbG9yIHtcclxuICAgIGNvbnN0IHIgPSBNYXRoLmZsb29yKHRoaXMueCAqIE1BWF9DT0xPUik7XHJcbiAgICBjb25zdCBnID0gTWF0aC5mbG9vcih0aGlzLnkgKiBNQVhfQ09MT1IpO1xyXG4gICAgY29uc3QgYiA9IE1hdGguZmxvb3IodGhpcy56ICogTUFYX0NPTE9SKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IENvbG9yKHIsIGcsIGIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5vcm1hbGl6ZSgpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCAvIGxlbmd0aCwgdGhpcy55IC8gbGVuZ3RoLCB0aGlzLnogLyBsZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG11bHRpcGx5KHNjYWxlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLnggKiBzY2FsZSwgdGhpcy55ICogc2NhbGUsIHRoaXMueiAqIHNjYWxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqKiAyICsgdGhpcy55ICoqIDIgKyB0aGlzLnogKiogMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy54LCB0aGlzLnksIHRoaXMueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW52ZXJ0KCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKC10aGlzLngsIC10aGlzLnksIC10aGlzLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZsb29yKCkge1xyXG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IodGhpcy54KTtcclxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKHRoaXMueSk7XHJcbiAgICBjb25zdCB6ID0gTWF0aC5mbG9vcih0aGlzLnopO1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL1ZlY3RvcjMudHMiLCIvLyBEaWN0aW9uYXJ5XHJcbmNvbnN0IExFWCA9IHtcclxuICBQT0xZR09OX0xBWUVSX05BTUU6ICdQb2x5Z29uTGF5ZXInLFxyXG4gIFBBVEhfTEFZRVJfTkFNRTogJ1BhdGhMYXllcicsXHJcbiAgUEFUSF9HSE9TVF9MQVlFUl9OQU1FOiAnUGF0aEdob3N0TGF5ZXInLFxyXG4gIE5FV19DT05ESVRJT05fRVZFTlRfTkFNRTogJ25ldy1jb25kaXRpb24nLFxyXG4gIFJFTU9WRV9DT05ESVRJT05fRVZFTlRfTkFNRTogJ3JlbW92ZS1jb25kaXRpb24nLFxyXG4gIEtFWV9DT0RFOiB7XHJcbiAgICBFU0NBUEU6IDI3XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgTEVYIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL0xFWC50cyIsImV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHI6IG51bWJlcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgZzogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBiOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IGZpbGxTdHlsZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnIgPSByO1xyXG4gICAgdGhpcy5nID0gZztcclxuICAgIHRoaXMuYiA9IGI7XHJcblxyXG4gICAgdGhpcy5maWxsU3R5bGUgPSBgcmdiKCR7dGhpcy5yfSwgJHt0aGlzLmd9LCAke3RoaXMuYn0pYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUhleFN0cmluZyhoZXhTdHJpbmc6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVkUGFydCA9IGhleFN0cmluZy5zbGljZSgxLCAzKTtcclxuICAgIGNvbnN0IGdyZWVuUGFydCA9IGhleFN0cmluZy5zbGljZSgzLCA1KTtcclxuICAgIGNvbnN0IGJsdWVQYXJ0ID0gaGV4U3RyaW5nLnNsaWNlKDUsIDcpO1xyXG5cclxuICAgIGNvbnN0IHJlZCA9IHBhcnNlSW50KHJlZFBhcnQsIDE2KTtcclxuICAgIGNvbnN0IGdyZWVuID0gcGFyc2VJbnQoZ3JlZW5QYXJ0LCAxNik7XHJcbiAgICBjb25zdCBibHVlID0gcGFyc2VJbnQoYmx1ZVBhcnQsIDE2KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IENvbG9yKHJlZCwgZ3JlZW4sIGJsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW50ZWdlclRvUGFkZGVkSGV4KGludGVnZXI6IG51bWJlcikge1xyXG4gICAgY29uc3QgaGV4ID0gaW50ZWdlci50b1N0cmluZygxNik7XHJcblxyXG4gICAgaWYgKGhleC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIGAgJHtoZXh9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBoZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9IZXhTdHJpbmcoKSB7XHJcbiAgICBjb25zdCByZWRQYXJ0ID0gQ29sb3IuaW50ZWdlclRvUGFkZGVkSGV4KHRoaXMucik7XHJcbiAgICBjb25zdCBncmVlblBhcnQgPSBDb2xvci5pbnRlZ2VyVG9QYWRkZWRIZXgodGhpcy5nKTtcclxuICAgIGNvbnN0IGJsdWVQYXJ0ID0gQ29sb3IuaW50ZWdlclRvUGFkZGVkSGV4KHRoaXMuYik7XHJcblxyXG4gICAgcmV0dXJuIGAjJHtyZWRQYXJ0ICsgYmx1ZVBhcnQgKyBncmVlblBhcnR9YDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0NvbG9yLnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5pbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdjb21tb24vQ09MT1JTJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5lUHJvcGVydGllcyB7XHJcbiAgcHVibGljIGNvbG9yOiBDb2xvcjtcclxuICBwdWJsaWMgdGhpY2tuZXNzOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbG9yOiBDb2xvciwgdGhpY2tuZXNzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMudGhpY2tuZXNzID0gdGhpY2tuZXNzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXREZWZhdWx0KCk6IExpbmVQcm9wZXJ0aWVzIHtcclxuICAgIHJldHVybiBuZXcgTGluZVByb3BlcnRpZXMoQ09MT1JTLkJMQUNLLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpOiBMaW5lUHJvcGVydGllcyB7XHJcbiAgICByZXR1cm4gbmV3IExpbmVQcm9wZXJ0aWVzKHRoaXMuY29sb3IsIHRoaXMudGhpY2tuZXNzKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0xpbmVQcm9wZXJ0aWVzLnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcclxuICBCTEFDSzogbmV3IENvbG9yKDAsIDAsIDApLFxyXG4gIFJFRDogbmV3IENvbG9yKDI1NSwgMCwgMCksXHJcbiAgR1JFRU46IG5ldyBDb2xvcigwLCAyNTUsIDApLFxyXG4gIEJMVUU6IG5ldyBDb2xvcigwLCAwLCAyNTUpLFxyXG4gIFdISVRFOiBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSlcclxufTtcclxuXHJcbk9iamVjdC5mcmVlemUoQ09MT1JTKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0NPTE9SUy50cyIsImV4cG9ydCBlbnVtIExpZ2h0VmVyc29yVHlwZSB7XHJcbiAgQ29uc3RhbnQsXHJcbiAgQ2lyY2xpbmdcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vTGlnaHRWZXJzb3JUeXBlLnRzIiwiaW1wb3J0IHsgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdIZWlnaHRNYXBFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0hlaWdodE1hcEV2ZW50JztcclxuaW1wb3J0IHsgTmV3TGlnaHRDb2xvckV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRDb2xvckV2ZW50JztcclxuaW1wb3J0IHsgTmV3TGlnaHRWZXJzb3JFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdMaWdodFZlcnNvclR5cGVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yVHlwZUV2ZW50JztcclxuaW1wb3J0IHsgTmV3Tm9ybWFsTWFwRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudCc7XHJcblxyXG5leHBvcnQge1xyXG4gIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgTmV3TGlnaHRDb2xvckV2ZW50LFxyXG4gIE5ld0xpZ2h0VmVyc29yRXZlbnQsXHJcbiAgTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQsXHJcbiAgTmV3Tm9ybWFsTWFwRXZlbnRcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvaW5kZXgudHMiLCJpbXBvcnQgeyBIaXRUZXN0UmVzdWx0IH0gZnJvbSAnY29tbW9uL0hpdFRlc3RSZXN1bHQnO1xyXG5pbXBvcnQgeyBQYXRoLCBTZXJpYWxpemFibGVQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnUmVuZGVyZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJpYWxpemFibGVMYXllciB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBhdGhzOiBTZXJpYWxpemFibGVQYXRoW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYXllciB7XHJcbiAgcHVibGljIHBhdGhzOiBQYXRoW10gPSBbXTtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgdGhpcy5wYXRocy5mb3JFYWNoKHBhdGggPT4gcmVuZGVyZXIuZHJhd1BhdGgocGF0aCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVBhdGgocGF0aDogUGF0aCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnBhdGhzLmluZGV4T2YocGF0aCk7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhdGhzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGl0VGVzdChwb2ludDogUG9pbnQpOiBIaXRUZXN0UmVzdWx0IHwgbnVsbCB7XHJcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgdGhpcy5wYXRocykge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBwYXRoLmhpdFRlc3QocG9pbnQpO1xyXG4gICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXN1bHQubGF5ZXIgPSB0aGlzO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1NlcmlhbGl6YWJsZU9iamVjdCgpOiBTZXJpYWxpemFibGVMYXllciB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHBhdGhzOiB0aGlzLnBhdGhzLm1hcChwYXRoID0+IHBhdGgudG9TZXJpYWxpemFibGVPYmplY3QoKSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZnJvbVNlcmlhbGl6YWJsZU9iamVjdChzZXJpYWxpemFibGVMYXllcjogU2VyaWFsaXphYmxlTGF5ZXIpIHtcclxuICAgIHRoaXMubmFtZSA9IHNlcmlhbGl6YWJsZUxheWVyLm5hbWU7XHJcblxyXG4gICAgdGhpcy5wYXRocy5zcGxpY2UoMCwgdGhpcy5wYXRocy5sZW5ndGgpO1xyXG5cclxuICAgIHNlcmlhbGl6YWJsZUxheWVyLnBhdGhzLmZvckVhY2goc2VyaWFsaXphYmxlUGF0aCA9PiB7XHJcbiAgICAgIHRoaXMucGF0aHMucHVzaChQYXRoLmZyb21TZXJpYWxpemFibGVQYXRoKHNlcmlhbGl6YWJsZVBhdGgpKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vTGF5ZXIudHMiLCJpbXBvcnQgeyBIaXRUZXN0UmVzdWx0IH0gZnJvbSAnY29tbW9uL0hpdFRlc3RSZXN1bHQnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJpYWxpemFibGVQYXRoIHtcclxuICBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXM7XHJcbiAgY2xvc2VkOiBib29sZWFuO1xyXG4gIHZlcnRpY2VzOiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgfVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aCB7XHJcbiAgcHVibGljIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXM7XHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHZlcnRpY2VzOiBQb2ludFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlczogUG9pbnRbXSwgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzKSB7XHJcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XHJcbiAgICB0aGlzLmxpbmVQcm9wZXJ0aWVzID0gbGluZVByb3BlcnRpZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZyb21TZXJpYWxpemFibGVQYXRoKHNlcmlhbGl6YWJsZVBhdGg6IFNlcmlhbGl6YWJsZVBhdGgpIHtcclxuICAgIGNvbnN0IHJlYWxQb2ludHMgPSBzZXJpYWxpemFibGVQYXRoLnZlcnRpY2VzLm1hcCh2ZXJ0ZXggPT4gbmV3IFBvaW50KHZlcnRleC54LCB2ZXJ0ZXgueSkpO1xyXG4gICAgY29uc3QgcmVhbExpbmVQcm9wZXJ0aWVzID0gbmV3IExpbmVQcm9wZXJ0aWVzKFxyXG4gICAgICBzZXJpYWxpemFibGVQYXRoLmxpbmVQcm9wZXJ0aWVzLmNvbG9yLFxyXG4gICAgICBzZXJpYWxpemFibGVQYXRoLmxpbmVQcm9wZXJ0aWVzLnRoaWNrbmVzc1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aChyZWFsUG9pbnRzLCByZWFsTGluZVByb3BlcnRpZXMpO1xyXG4gICAgcGF0aC5jbG9zZWQgPSBzZXJpYWxpemFibGVQYXRoLmNsb3NlZDtcclxuXHJcbiAgICByZXR1cm4gcGF0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyAqZ2V0VmVydGljZXNJdGVyYXRvcigpIHtcclxuICAgIGNvbnN0IHZlcnRpY2VzQ291bnQgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXNDb3VudDsgaSArPSAxKSB7XHJcbiAgICAgIHlpZWxkIHRoaXMudmVydGljZXNbaV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2xvc2VkICYmIHZlcnRpY2VzQ291bnQgPiAwKSB7XHJcbiAgICAgIHlpZWxkIHRoaXMudmVydGljZXNbMF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgKmdldExpbmVJdGVyYXRvcigpIHtcclxuICAgIGxldCBwcmV2aW91c1BvaW50O1xyXG5cclxuICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5nZXRWZXJ0aWNlc0l0ZXJhdG9yKCkpIHtcclxuICAgICAgaWYgKCFwcmV2aW91c1BvaW50KSB7XHJcbiAgICAgICAgcHJldmlvdXNQb2ludCA9IHBvaW50O1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB5aWVsZCBuZXcgTGluZShwcmV2aW91c1BvaW50LCBwb2ludCk7XHJcbiAgICAgIHByZXZpb3VzUG9pbnQgPSBwb2ludDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdGFydGluZ1BvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljZXNbMF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VmVydGljZXNDb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMaW5lUHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB0aGlzLmxpbmVQcm9wZXJ0aWVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpdFRlc3QocG9pbnQ6IFBvaW50KTogSGl0VGVzdFJlc3VsdCB8IG51bGwge1xyXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIHRoaXMuZ2V0TGluZUl0ZXJhdG9yKCkpIHtcclxuICAgICAgaWYgKGxpbmUuZGlzdGFuY2VUb1BvaW50KHBvaW50KSA8PSBjb25maWd1cmF0aW9uLmhpdFRvbGVyYW5jZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgSGl0VGVzdFJlc3VsdChsaW5lLCB0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFZlcnRleChpbmRleDogbnVtYmVyKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljZXNbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFZlcnRpY2VzKCk6IFBvaW50W10ge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkVmVydGV4KHBvaW50OiBQb2ludCkge1xyXG4gICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVWZXJ0ZXgocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZFBvaW50SW5kZXgocG9pbnQpO1xyXG5cclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGluc2VydFZlcnRleChwb2ludDogUG9pbnQsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMudmVydGljZXMuc3BsaWNlKGluZGV4LCAwLCBwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKTogUGF0aCB7XHJcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFsuLi50aGlzLmdldFZlcnRpY2VzKCkubWFwKHBvaW50ID0+IHBvaW50LmNsb25lKCkpXTtcclxuICAgIGNvbnN0IGxpbmVQcm9wZXJ0aWVzID0gdGhpcy5saW5lUHJvcGVydGllcy5jbG9uZSgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUGF0aCh2ZXJ0aWNlcywgbGluZVByb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbmRQb2ludEluZGV4KHBvaW50OiBQb2ludCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljZXMuaW5kZXhPZihwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Qm91bmRpbmdCb3goKSB7XHJcbiAgICBsZXQgbWluWCA9IEluZmluaXR5O1xyXG4gICAgbGV0IG1heFggPSAwO1xyXG4gICAgbGV0IG1pblkgPSBJbmZpbml0eTtcclxuICAgIGxldCBtYXhZID0gMDtcclxuXHJcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICBpZiAocG9pbnQueCA8IG1pblgpIHtcclxuICAgICAgICBtaW5YID0gcG9pbnQueDtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9pbnQueCA+IG1heFgpIHtcclxuICAgICAgICBtYXhYID0gcG9pbnQueDtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9pbnQueSA8IG1pblkpIHtcclxuICAgICAgICBtaW5ZID0gcG9pbnQueTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9pbnQueSA+IG1heFkpIHtcclxuICAgICAgICBtYXhZID0gcG9pbnQueTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWluWCxcclxuICAgICAgbWF4WCxcclxuICAgICAgbWluWSxcclxuICAgICAgbWF4WVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1BvaW50SW5Cb3VuZGluZ0JveChwb2ludDogUG9pbnQpIHtcclxuICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gdGhpcy5nZXRCb3VuZGluZ0JveCgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHBvaW50LnggPj0gYm91bmRpbmdCb3gubWluWCAmJlxyXG4gICAgICBwb2ludC54IDw9IGJvdW5kaW5nQm94Lm1heFggJiZcclxuICAgICAgcG9pbnQueSA+PSBib3VuZGluZ0JveC5taW5ZICYmXHJcbiAgICAgIHBvaW50LnkgPD0gYm91bmRpbmdCb3gubWF4WVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1NlcmlhbGl6YWJsZU9iamVjdCgpOiBTZXJpYWxpemFibGVQYXRoIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpbmVQcm9wZXJ0aWVzOiB0aGlzLmxpbmVQcm9wZXJ0aWVzLmNsb25lKCksXHJcbiAgICAgIGNsb3NlZDogdGhpcy5jbG9zZWQsXHJcbiAgICAgIHZlcnRpY2VzOiB0aGlzLnZlcnRpY2VzLm1hcCh2ZXJ0ZXggPT4gKHtcclxuICAgICAgICB4OiB2ZXJ0ZXgueCxcclxuICAgICAgICB5OiB2ZXJ0ZXgueVxyXG4gICAgICB9KSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TmV4dFBvaW50SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChpbmRleCArIDEpICUgdGhpcy5nZXRWZXJ0aWNlc0NvdW50KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TmV4dFBvaW50KHBvaW50OiBQb2ludCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnZlcnRpY2VzLmluZGV4T2YocG9pbnQpO1xyXG4gICAgY29uc3QgbmV4dFBvaW50SW5kZXggPSB0aGlzLmdldE5leHRQb2ludEluZGV4KGluZGV4KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRWZXJ0ZXgobmV4dFBvaW50SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFByZXZpb3VzUG9pbnRJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICBsZXQgcHJldmlvdXNQb2ludEluZGV4ID0gaW5kZXggLSAxO1xyXG4gICAgaWYgKHByZXZpb3VzUG9pbnRJbmRleCA8IDApIHtcclxuICAgICAgcHJldmlvdXNQb2ludEluZGV4ID0gdGhpcy5nZXRWZXJ0aWNlc0NvdW50KCkgLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcmV2aW91c1BvaW50SW5kZXg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UHJldmlvdXNQb2ludChwb2ludDogUG9pbnQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy52ZXJ0aWNlcy5pbmRleE9mKHBvaW50KTtcclxuICAgIGNvbnN0IHByZXZpb3VzUG9pbnRJbmRleCA9IHRoaXMuZ2V0UHJldmlvdXNQb2ludEluZGV4KGluZGV4KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRWZXJ0ZXgocHJldmlvdXNQb2ludEluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3ZlVG8ocGF0aDogUGF0aCkge1xyXG4gICAgaWYgKHRoaXMuZ2V0VmVydGljZXNDb3VudCgpICE9PSBwYXRoLmdldFZlcnRpY2VzQ291bnQoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBudW1iZXIgb2YgdmVydGljZXMgZG9lcyBub3QgbWF0Y2gnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jbG9zZWQgIT09IHBhdGguY2xvc2VkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhdGgncyBjbG9zZWQgc3RhdGUgZG9lcyBub3QgbWF0Y2hcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHBvaW50Lm1vdmVUbyhwYXRoLmdldFZlcnRleChpbmRleCkpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDZW50ZXJPZkdyYXZpdHkoKSB7XHJcbiAgICBsZXQgY2VudGVyWCA9IDA7XHJcbiAgICBsZXQgY2VudGVyWSA9IDA7XHJcblxyXG4gICAgdGhpcy5nZXRWZXJ0aWNlcygpLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICBjZW50ZXJYICs9IHBvaW50Lng7XHJcbiAgICAgIGNlbnRlclkgKz0gcG9pbnQueTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNlbnRlclggLz0gdGhpcy5nZXRWZXJ0aWNlc0NvdW50KCk7XHJcbiAgICBjZW50ZXJZIC89IHRoaXMuZ2V0VmVydGljZXNDb3VudCgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9pbnQoY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Qm91bmRpbmdCb3hDZW50ZXIoKSB7XHJcbiAgICBjb25zdCBib3VuZGluZ0JveCA9IHRoaXMuZ2V0Qm91bmRpbmdCb3goKTtcclxuXHJcbiAgICBjb25zdCBjZW50ZXJYID0gKGJvdW5kaW5nQm94Lm1heFggKyBib3VuZGluZ0JveC5taW5YKSAvIDI7XHJcbiAgICBjb25zdCBjZW50ZXJZID0gKGJvdW5kaW5nQm94Lm1heFkgKyBib3VuZGluZ0JveC5taW5ZKSAvIDI7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb2ludChjZW50ZXJYLCBjZW50ZXJZKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL1BhdGgudHMiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGluZSB7XHJcbiAgcHVibGljIHAxOiBQb2ludDtcclxuICBwdWJsaWMgcDI6IFBvaW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gICAgaWYgKHAxLmVxdWFscyhwMikpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIGxpbmUgYmV0d2VlbiBwb2ludHMgYXQgdGhlIHNhbWUgY29vcmRpbmF0ZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnAxID0gcDE7XHJcbiAgICB0aGlzLnAyID0gcDI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzdGFuY2VUb1BvaW50KHA6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHBvaW50UHJvamVjdGlvbiA9IHRoaXMucHJvamVjdFBvaW50KHApO1xyXG5cclxuICAgIHJldHVybiBQb2ludC5nZXREaXN0YW5jZUJldHdlZW4ocCwgcG9pbnRQcm9qZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcm9qZWN0UG9pbnQocDogUG9pbnQpIHtcclxuICAgIGNvbnN0IHAxID0gdGhpcy5wMTtcclxuICAgIGNvbnN0IHAyID0gdGhpcy5wMjtcclxuXHJcbiAgICBsZXQgdCA9XHJcbiAgICAgICgocC54IC0gcDEueCkgKiAocDIueCAtIHAxLngpICsgKHAueSAtIHAxLnkpICogKHAyLnkgLSBwMS55KSkgL1xyXG4gICAgICBQb2ludC5nZXREaXN0YW5jZUJldHdlZW5TcXVhcmVkKHAxLCBwMik7XHJcbiAgICB0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdCkpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9pbnQocDEueCArIHQgKiAocDIueCAtIHAxLngpLCBwMS55ICsgdCAqIChwMi55IC0gcDEueSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVxdWFscyhsaW5lOiBMaW5lKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAodGhpcy5wMS5lcXVhbHMobGluZS5wMSkgJiYgdGhpcy5wMi5lcXVhbHMobGluZS5wMikpIHx8XHJcbiAgICAgICh0aGlzLnAxLmVxdWFscyhsaW5lLnAyKSAmJiB0aGlzLnAyLmVxdWFscyhsaW5lLnAxKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TWlkZGxlUG9pbnQoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludCgodGhpcy5wMS54ICsgdGhpcy5wMi54KSAvIDIsICh0aGlzLnAxLnkgKyB0aGlzLnAyLnkpIC8gMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIFBvaW50LmdldERpc3RhbmNlQmV0d2Vlbih0aGlzLnAxLCB0aGlzLnAyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREaXJlY3Rpb24ocDogUG9pbnQpIHtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFBvaW50LmNyb3NzUHJvZHVjdChcclxuICAgICAgUG9pbnQuc3VidHJhY3QodGhpcy5wMiwgdGhpcy5wMSksXHJcbiAgICAgIFBvaW50LnN1YnRyYWN0KHAsIHRoaXMucDEpXHJcbiAgICApO1xyXG4gICAgaWYgKE1hdGguYWJzKGRpcmVjdGlvbikgPCAwLjAwMDEpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA+IDApIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9MaW5lLnRzIiwiLy8gVE9ETzogc3BsaXQgaW50byBzZXBhcmF0ZSBtZXNzYWdlcyBmb3IgRmlsbERhdGFcclxuXHJcbmV4cG9ydCBlbnVtIEZpbGxXb3JrZXJNZXNzYWdlVHlwZSB7XHJcbiAgRmlsbERhdGEsXHJcbiAgU3RhcnRGaWxsLFxyXG4gIEZpbGxTdHJpcHMsXHJcbiAgRW5kRmlsbCxcclxuICBMaWdodFZlcnNvclxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3BvbHlnb24tZmlsbGVyL0ZpbGxXb3JrZXJNZXNzYWdlVHlwZS50cyIsImltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IExpbmVQcm9wZXJ0aWVzIH0gZnJvbSAnY29tbW9uL0xpbmVQcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbiBleHRlbmRzIFBhdGgge1xyXG4gIGNvbnN0cnVjdG9yKHBhdGg6IFBhdGgpO1xyXG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzOiBQb2ludFtdLCBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXMpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoT3JWZXJ0aWNlczogUGF0aCB8IFBvaW50W10sIGxpbmVQcm9wZXJ0aWVzPzogTGluZVByb3BlcnRpZXMpIHtcclxuICAgIGxldCB2ZXJ0aWNlczogUG9pbnRbXTtcclxuXHJcbiAgICBpZiAocGF0aE9yVmVydGljZXMgaW5zdGFuY2VvZiBQYXRoKSB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBwYXRoT3JWZXJ0aWNlcztcclxuICAgICAgdmVydGljZXMgPSBwYXRoLmdldFZlcnRpY2VzKCk7XHJcbiAgICAgIGxpbmVQcm9wZXJ0aWVzID0gcGF0aC5saW5lUHJvcGVydGllcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZlcnRpY2VzID0gcGF0aE9yVmVydGljZXM7XHJcbiAgICAgIGxpbmVQcm9wZXJ0aWVzID0gPExpbmVQcm9wZXJ0aWVzPmxpbmVQcm9wZXJ0aWVzO1xyXG4gICAgfVxyXG5cclxuICAgIFBvbHlnb24uZW5zdXJlVmVydGljZXNMZW5ndGgodmVydGljZXMpO1xyXG4gICAgc3VwZXIodmVydGljZXMsIGxpbmVQcm9wZXJ0aWVzKTtcclxuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGVuc3VyZVZlcnRpY2VzTGVuZ3RoKHZlcnRpY2VzOiBQb2ludFtdKSB7XHJcbiAgICBpZiAodmVydGljZXMubGVuZ3RoID49IGNvbmZpZ3VyYXRpb24ubWluUG9seWdvblBvaW50cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBQb2x5Z29uIG11c3QgaGF2ZSBhdCBsZWFzdCAke2NvbmZpZ3VyYXRpb24ubWluUG9seWdvblBvaW50c30gdmVydGljZXNgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpOiBQb2x5Z29uIHtcclxuICAgIHJldHVybiBuZXcgUG9seWdvbihzdXBlci5jbG9uZSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVWZXJ0ZXgocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBpZiAodGhpcy5nZXRWZXJ0aWNlc0NvdW50KCkgPT09IGNvbmZpZ3VyYXRpb24ubWluUG9seWdvblBvaW50cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgdmVydGV4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIucmVtb3ZlVmVydGV4KHBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0NvbnZleCgpIHtcclxuICAgIGxldCBsYXN0TGluZTogTGluZSB8IG51bGwgPSBudWxsO1xyXG4gICAgbGV0IGxhc3REaXJlY3Rpb246IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGZvciAoY29uc3QgbGluZSBvZiB0aGlzLmdldExpbmVJdGVyYXRvcigpKSB7XHJcbiAgICAgIGlmICghbGFzdExpbmUpIHtcclxuICAgICAgICBsYXN0TGluZSA9IGxpbmU7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnREaXJlY3Rpb24gPSBsYXN0TGluZS5nZXREaXJlY3Rpb24obGluZS5wMik7XHJcbiAgICAgIGxhc3RMaW5lID0gbGluZTtcclxuXHJcbiAgICAgIGlmIChsYXN0RGlyZWN0aW9uID09PSBudWxsICYmIGN1cnJlbnREaXJlY3Rpb24gIT09IDApIHtcclxuICAgICAgICBsYXN0RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbjtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IDApIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gIT09IGxhc3REaXJlY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL1BvbHlnb24udHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludEVsZW1lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRDbGlja0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBQb2ludENsaWNrRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBQYXRoUG9pbnRFbGVtZW50O1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhdGhQb2ludEVsZW1lbnQ6IFBhdGhQb2ludEVsZW1lbnQpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IHBhdGhQb2ludEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ1BvaW50Q2xpY2tFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9Qb2ludENsaWNrRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyRmluaXNoZWRFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZCA9IG51bGw7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IFJlbmRlckZpbmlzaGVkRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBSZW5kZXJGaW5pc2hlZEV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9SZW5kZXJGaW5pc2hlZEV2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5pbXBvcnQgeyBQYXRoUG9pbnRFbGVtZW50IH0gZnJvbSAndWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbmlzaFBvaW50RHJhZ0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBQYXRoUG9pbnRFbGVtZW50O1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBGaW5pc2hQb2ludERyYWdFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aFBvaW50RWxlbWVudDogUGF0aFBvaW50RWxlbWVudCkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gcGF0aFBvaW50RWxlbWVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnRmluaXNoUG9pbnREcmFnRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9GaW5pc2hQb2ludERyYWdFdmVudC50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5pbXBvcnQgeyBQYXRoUG9pbnRFbGVtZW50IH0gZnJvbSAndWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50RHJhZ0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiB7XHJcbiAgICBlbGVtZW50OiBQYXRoUG9pbnRFbGVtZW50LFxyXG4gICAgbmV3UG9zaXRpb246IFBvaW50XHJcbiAgfTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gUG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhdGhQb2ludEVsZW1lbnQ6IFBhdGhQb2ludEVsZW1lbnQsIG5ld1Bvc2l0aW9uOiBQb2ludCkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0ge1xyXG4gICAgICBlbGVtZW50OiBwYXRoUG9pbnRFbGVtZW50LFxyXG4gICAgICBuZXdQb3NpdGlvblxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnUG9pbnREcmFnRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9Qb2ludERyYWdFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuaW1wb3J0IHsgUGF0aFBvaW50RWxlbWVudCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFydFBvaW50RHJhZ0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBQYXRoUG9pbnRFbGVtZW50O1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBTdGFydFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoUG9pbnRFbGVtZW50OiBQYXRoUG9pbnRFbGVtZW50KSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBwYXRoUG9pbnRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdTdGFydFBvaW50RHJhZ0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL3BvaW50LWRyYWcvU3RhcnRQb2ludERyYWdFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmludGVyZmFjZSBMaW5lQ2xpY2tFdmVudFBheWxvYWQge1xyXG4gIGxpbmU6IExpbmU7XHJcbiAgcGF0aDogUGF0aDtcclxuICBwb3NpdGlvbjogUG9pbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5lQ2xpY2tFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTGluZUNsaWNrRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBMaW5lQ2xpY2tFdmVudFBheWxvYWQ7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IobGluZTogTGluZSwgcGF0aDogUGF0aCwgcG9zaXRpb246IFBvaW50KSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSB7XHJcbiAgICAgIGxpbmUsXHJcbiAgICAgIHBhdGgsXHJcbiAgICAgIHBvc2l0aW9uXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdMaW5lQ2xpY2tFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9MaW5lQ2xpY2tFdmVudC50cyIsImltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvRGlhbG9nQm94JztcclxuXHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RydWN0aW9uc0RpYWxvZyBleHRlbmRzIEhUTUxFbGVtZW50IGltcGxlbWVudHMgRGlhbG9nQm94IHtcclxuICBwcml2YXRlIGRpc21pc3NCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgdGl0bGVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHVzYWdlTGlzdDogSFRNTFVMaXN0RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuY2xhc3NOYW1lID0gJ2luc3RydWN0aW9ucy1kaWFsb2cgZGlhbG9nLWJveCc7XHJcblxyXG4gICAgdGhpcy50aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgdGhpcy50aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnSW5zdHJ1Y3Rpb25zJztcclxuICAgIHRoaXMudGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbnMtZGlhbG9nX190aXRsZSc7XHJcblxyXG4gICAgdGhpcy51c2FnZUxpc3QgPSB0aGlzLmNyZWF0ZVVzYWdlTGlzdCgpO1xyXG5cclxuICAgIHRoaXMuZGlzbWlzc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5kaXNtaXNzQnV0dG9uLnRleHRDb250ZW50ID0gJ0Rpc21pc3MnO1xyXG4gICAgdGhpcy5kaXNtaXNzQnV0dG9uLmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbnMtZGlhbG9nX19kaXNtaXNzLWJ1dHRvbic7XHJcblxyXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy50aXRsZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLnVzYWdlTGlzdCk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuZGlzbWlzc0J1dHRvbik7XHJcblxyXG4gICAgdGhpcy5kaXNtaXNzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZSk7XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbnMtZGlhbG9nLS1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnRpdGxlRWxlbWVudCk7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMudXNhZ2VMaXN0KTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5kaXNtaXNzQnV0dG9uKTtcclxuICAgIHRoaXMuZGlzbWlzc0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UpO1xyXG5cclxuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnaW5zdHJ1Y3Rpb25zLWRpYWxvZy0tYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbG9zZScpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5DbG9zZSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVVc2FnZUxpc3QoKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgICBjb25zdCB1c2FnZSA9IFtcclxuICAgICAgJ0NsaWNrIG9uIHRoZSBmcmVlIHNwYWNlIGluIHRoZSBjYW52YXMgdG8gc3RhcnQgY3JlYXRpbmcgdmVydGljZXMnLFxyXG4gICAgICAnQ2xpY2sgb24gdGhlIGluaXRpYWwgdmVydGV4IHRvIGNsb3NlIHRoZSBwYXRoIGludG8gYSBwb2x5Z29uJyxcclxuICAgICAgJ0FsdGVybmF0aXZlbHksIHlvdSBtYXkgcHJlc3MgRXNjYXBlIHRvIGNhbmNlbCBhZGRpbmcgYSBuZXcgcGF0aCcsXHJcbiAgICAgICdDbGljayBhbmQgZHJhZyB0aGUgdmVydGV4IHRvIG1vdmUgaXQnLFxyXG4gICAgICAnRG91YmxlIGNsaWNrIG9uIGFuIGVkZ2UgdG8gYWRkIGEgdmVydGV4IGluIHRoZSBtaWRkbGUgb2YgaXQnLFxyXG4gICAgICAnRG91YmxlIGNsaWNrIG9uIGEgdmVydGV4IHRvIHJlbW92ZSBpdCcsXHJcbiAgICAgICdQcmVzc2luZyBDdHJsIGFsbG93cyBkcmFnZ2luZyBhIHdob2xlIHBvbHlnb24nLFxyXG4gICAgICBcIlNoaWZ0ICsgY2xpY2sgdG8gY2xpcCB0aGUgcG9seWdvbnMgdXNpbmcgU3V0aGVybGFuZC1Ib2RnbWFuJ3MgYWxnb3JpdGhtXCIsXHJcbiAgICAgICdTYXZlIGFsbG93cyB5b3UgdG8gZXhwb3J0IGFsbCB0aGUgcG9seWdvbnMgb24gdGhlIHNjcmVlbicsXHJcbiAgICAgICdMb2FkIGFsbG93cyB5b3UgdG8gcmVzdG9yZSB0aGUgcG9seWdvbnMnXHJcbiAgICBdO1xyXG5cclxuICAgIHVzYWdlXHJcbiAgICAgIC5tYXAodXNhZ2VJdGVtVGV4dCA9PiB0aGlzLmNyZWF0ZVVzYWdlTGlzdEl0ZW0odXNhZ2VJdGVtVGV4dCkpXHJcbiAgICAgIC5mb3JFYWNoKHVzYWdlTGlzdEl0ZW0gPT4gbGlzdC5hcHBlbmRDaGlsZCh1c2FnZUxpc3RJdGVtKSk7XHJcblxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVVzYWdlTGlzdEl0ZW0odGV4dENvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBpdGVtLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaW5zdHJ1Y3Rpb25zLWRpYWxvZycsIEluc3RydWN0aW9uc0RpYWxvZyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy50cyIsImltcG9ydCAnaW5kZXguc2Nzcyc7XHJcbmltcG9ydCAnbm9ybWFsaXplLmNzcyc7XHJcblxyXG5pbXBvcnQgJ0B3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy93ZWJjb21wb25lbnRzLWhpLXNkLWNlJztcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQXBwbGljYXRpb24nO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGJvb3RzdHJhcDtcclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcCgpOiB2b2lkIHtcclxuICBjb25zdCBjYW52YXNJZCA9ICdtYWluLWNhbnZhcyc7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpO1xyXG4gIGlmICghY2FudmFzKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbnZhcyB3aXRoIGlkICR7Y2FudmFzSWR9IGNhbm5vdCBiZSBmb3VuZGApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXBwbGljYXRpb24gPSBuZXcgQXBwbGljYXRpb24oPEhUTUxDYW52YXNFbGVtZW50PmNhbnZhcyk7XHJcbiAgYXBwbGljYXRpb24uaW5pdCgpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2luZGV4LnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgfVxcblxcbi5tYWluLWNhbnZhcyB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjazsgfVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMWVtOyB9XFxuXFxuLmNhbnZhcy13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmFwcGxpY2F0aW9uLXVpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAuYXBwbGljYXRpb24tdWkgKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7IH1cXG5cXG4uYXBwLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLmFwcC1uYW1lIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5mb290ZXIge1xcbiAgbWFyZ2luOiAxZW0gMWVtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uKCl7LypcblxuIENvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG5cbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcblxuIENvcHlyaWdodCAoYykgMjAxNCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgSj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT10aGlzP3RoaXM6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDp0aGlzLEFhPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihnLHEsTil7ZyE9QXJyYXkucHJvdG90eXBlJiZnIT1PYmplY3QucHJvdG90eXBlJiYoZ1txXT1OLnZhbHVlKX07ZnVuY3Rpb24gc2IoKXtzYj1mdW5jdGlvbigpe307Si5TeW1ib2x8fChKLlN5bWJvbD10Yil9dmFyIHRiPWZ1bmN0aW9uKCl7dmFyIGc9MDtyZXR1cm4gZnVuY3Rpb24ocSl7cmV0dXJuXCJqc2NvbXBfc3ltYm9sX1wiKyhxfHxcIlwiKStnKyt9fSgpO1xuZnVuY3Rpb24gZGQoKXtzYigpO3ZhciBnPUouU3ltYm9sLml0ZXJhdG9yO2d8fChnPUouU3ltYm9sLml0ZXJhdG9yPUouU3ltYm9sKFwiaXRlcmF0b3JcIikpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIEFycmF5LnByb3RvdHlwZVtnXSYmQWEoQXJyYXkucHJvdG90eXBlLGcse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBlZCh0aGlzKX19KTtkZD1mdW5jdGlvbigpe319ZnVuY3Rpb24gZWQoZyl7dmFyIHE9MDtyZXR1cm4gZmQoZnVuY3Rpb24oKXtyZXR1cm4gcTxnLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTpnW3ErK119Ontkb25lOiEwfX0pfWZ1bmN0aW9uIGZkKGcpe2RkKCk7Zz17bmV4dDpnfTtnW0ouU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtyZXR1cm4gZ31mdW5jdGlvbiBnZChnKXtkZCgpO3ZhciBxPWdbU3ltYm9sLml0ZXJhdG9yXTtyZXR1cm4gcT9xLmNhbGwoZyk6ZWQoZyl9XG5mdW5jdGlvbiBoZChnKXtmb3IodmFyIHEsTj1bXTshKHE9Zy5uZXh0KCkpLmRvbmU7KU4ucHVzaChxLnZhbHVlKTtyZXR1cm4gTn1cbihmdW5jdGlvbigpe2Z1bmN0aW9uIGcoKXt2YXIgYT10aGlzO3RoaXMubT17fTt0aGlzLmc9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O3ZhciBiPW5ldyBCYTtiLnJ1bGVzPVtdO3RoaXMuaD12LnNldCh0aGlzLmcsbmV3IHYoYikpO3RoaXMuaT0hMTt0aGlzLmI9dGhpcy5hPW51bGw7dWIoZnVuY3Rpb24oKXthLmMoKX0pfWZ1bmN0aW9uIHEoKXt0aGlzLmN1c3RvbVN0eWxlcz1bXTt0aGlzLmVucXVldWVkPSExfWZ1bmN0aW9uIE4oKXt9ZnVuY3Rpb24gaGEoYSl7dGhpcy5jYWNoZT17fTt0aGlzLmM9dm9pZCAwPT09YT8xMDA6YX1mdW5jdGlvbiBuKCl7fWZ1bmN0aW9uIHYoYSxiLGMsZCxlKXt0aGlzLkQ9YXx8bnVsbDt0aGlzLmI9Ynx8bnVsbDt0aGlzLmxhPWN8fFtdO3RoaXMuTj1udWxsO3RoaXMuVj1lfHxcIlwiO3RoaXMuYT10aGlzLkE9dGhpcy5KPW51bGx9ZnVuY3Rpb24gdSgpe31mdW5jdGlvbiBCYSgpe3RoaXMuZW5kPXRoaXMuc3RhcnQ9MDt0aGlzLnJ1bGVzPXRoaXMucGFyZW50PVxudGhpcy5wcmV2aW91cz1udWxsO3RoaXMuY3NzVGV4dD10aGlzLnBhcnNlZENzc1RleHQ9XCJcIjt0aGlzLmF0UnVsZT0hMTt0aGlzLnR5cGU9MDt0aGlzLnBhcnNlZFNlbGVjdG9yPXRoaXMuc2VsZWN0b3I9dGhpcy5rZXlmcmFtZXNOYW1lPVwiXCJ9ZnVuY3Rpb24gaWQoYSl7ZnVuY3Rpb24gYihiLGMpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShiLFwiaW5uZXJIVE1MXCIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlLGNvbmZpZ3VyYWJsZTohMCxnZXQ6Yy5nZXQsc2V0OmZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMsZT12b2lkIDA7dCh0aGlzKSYmKGU9W10sTyh0aGlzLGZ1bmN0aW9uKGEpe2EhPT1kJiZlLnB1c2goYSl9KSk7Yy5zZXQuY2FsbCh0aGlzLGIpO2lmKGUpZm9yKHZhciBmPTA7ZjxlLmxlbmd0aDtmKyspe3ZhciBrPWVbZl07MT09PWsuX19DRV9zdGF0ZSYmYS5kaXNjb25uZWN0ZWRDYWxsYmFjayhrKX10aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT9hLmYodGhpcyk6YS5sKHRoaXMpO1xucmV0dXJuIGJ9fSl9ZnVuY3Rpb24gYyhiLGMpe3goYixcImluc2VydEFkamFjZW50RWxlbWVudFwiLGZ1bmN0aW9uKGIsZCl7dmFyIGU9dChkKTtiPWMuY2FsbCh0aGlzLGIsZCk7ZSYmYS5hKGQpO3QoYikmJmEuYihkKTtyZXR1cm4gYn0pfXZiJiZ4KEVsZW1lbnQucHJvdG90eXBlLFwiYXR0YWNoU2hhZG93XCIsZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX19DRV9zaGFkb3dSb290PWE9dmIuY2FsbCh0aGlzLGEpfSk7aWYoQ2EmJkNhLmdldCliKEVsZW1lbnQucHJvdG90eXBlLENhKTtlbHNlIGlmKERhJiZEYS5nZXQpYihIVE1MRWxlbWVudC5wcm90b3R5cGUsRGEpO2Vsc2V7dmFyIGQ9RWEuY2FsbChkb2N1bWVudCxcImRpdlwiKTthLnMoZnVuY3Rpb24oYSl7YihhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gd2IuY2FsbCh0aGlzLCEwKS5pbm5lckhUTUx9LHNldDpmdW5jdGlvbihhKXt2YXIgYj1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT9cbnRoaXMuY29udGVudDp0aGlzO2ZvcihkLmlubmVySFRNTD1hOzA8Yi5jaGlsZE5vZGVzLmxlbmd0aDspRmEuY2FsbChiLGIuY2hpbGROb2Rlc1swXSk7Zm9yKDswPGQuY2hpbGROb2Rlcy5sZW5ndGg7KWlhLmNhbGwoYixkLmNoaWxkTm9kZXNbMF0pfX0pfSl9eChFbGVtZW50LnByb3RvdHlwZSxcInNldEF0dHJpYnV0ZVwiLGZ1bmN0aW9uKGIsYyl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4geGIuY2FsbCh0aGlzLGIsYyk7dmFyIGQ9R2EuY2FsbCh0aGlzLGIpO3hiLmNhbGwodGhpcyxiLGMpO2M9R2EuY2FsbCh0aGlzLGIpO2EuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYixkLGMsbnVsbCl9KTt4KEVsZW1lbnQucHJvdG90eXBlLFwic2V0QXR0cmlidXRlTlNcIixmdW5jdGlvbihiLGMsZCl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4geWIuY2FsbCh0aGlzLGIsYyxkKTt2YXIgZT1qYS5jYWxsKHRoaXMsYixjKTt5Yi5jYWxsKHRoaXMsYixjLGQpO2Q9amEuY2FsbCh0aGlzLFxuYixjKTthLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGMsZSxkLGIpfSk7eChFbGVtZW50LnByb3RvdHlwZSxcInJlbW92ZUF0dHJpYnV0ZVwiLGZ1bmN0aW9uKGIpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIHpiLmNhbGwodGhpcyxiKTt2YXIgYz1HYS5jYWxsKHRoaXMsYik7emIuY2FsbCh0aGlzLGIpO251bGwhPT1jJiZhLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGIsYyxudWxsLG51bGwpfSk7eChFbGVtZW50LnByb3RvdHlwZSxcInJlbW92ZUF0dHJpYnV0ZU5TXCIsZnVuY3Rpb24oYixjKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBBYi5jYWxsKHRoaXMsYixjKTt2YXIgZD1qYS5jYWxsKHRoaXMsYixjKTtBYi5jYWxsKHRoaXMsYixjKTt2YXIgZT1qYS5jYWxsKHRoaXMsYixjKTtkIT09ZSYmYS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxjLGQsZSxiKX0pO0JiP2MoSFRNTEVsZW1lbnQucHJvdG90eXBlLEJiKTpDYj9jKEVsZW1lbnQucHJvdG90eXBlLFxuQ2IpOmNvbnNvbGUud2FybihcIkN1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjaW5zZXJ0QWRqYWNlbnRFbGVtZW50YCB3YXMgbm90IHBhdGNoZWQuXCIpO0hhKGEsRWxlbWVudC5wcm90b3R5cGUse1o6amQsYXBwZW5kOmtkfSk7bGQoYSx7amE6bWQsV2E6bmQscmVwbGFjZVdpdGg6b2QscmVtb3ZlOnBkfSl9ZnVuY3Rpb24gbGQoYSxiKXt2YXIgYz1FbGVtZW50LnByb3RvdHlwZTtmdW5jdGlvbiBkKGIpe3JldHVybiBmdW5jdGlvbihjKXtmb3IodmFyIGQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDsrK2UpZFtlLTBdPWFyZ3VtZW50c1tlXTtlPVtdO2Zvcih2YXIgZj1bXSxnPTA7ZzxkLmxlbmd0aDtnKyspe3ZhciBtPWRbZ107bSBpbnN0YW5jZW9mIEVsZW1lbnQmJnQobSkmJmYucHVzaChtKTtpZihtIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3IobT1tLmZpcnN0Q2hpbGQ7bTttPW0ubmV4dFNpYmxpbmcpZS5wdXNoKG0pO2Vsc2UgZS5wdXNoKG0pfWIuYXBwbHkodGhpcyxcbmQpO2ZvcihkPTA7ZDxmLmxlbmd0aDtkKyspYS5hKGZbZF0pO2lmKHQodGhpcykpZm9yKGQ9MDtkPGUubGVuZ3RoO2QrKylmPWVbZF0sZiBpbnN0YW5jZW9mIEVsZW1lbnQmJmEuYihmKX19dm9pZCAwIT09Yi5qYSYmKGMuYmVmb3JlPWQoYi5qYSkpO3ZvaWQgMCE9PWIuamEmJihjLmFmdGVyPWQoYi5XYSkpO3ZvaWQgMCE9PWIucmVwbGFjZVdpdGgmJngoYyxcInJlcGxhY2VXaXRoXCIsZnVuY3Rpb24oYyl7Zm9yKHZhciBkPVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7KytlKWRbZS0wXT1hcmd1bWVudHNbZV07ZT1bXTtmb3IodmFyIGg9W10sdz0wO3c8ZC5sZW5ndGg7dysrKXt2YXIgZz1kW3ddO2cgaW5zdGFuY2VvZiBFbGVtZW50JiZ0KGcpJiZoLnB1c2goZyk7aWYoZyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKGc9Zy5maXJzdENoaWxkO2c7Zz1nLm5leHRTaWJsaW5nKWUucHVzaChnKTtlbHNlIGUucHVzaChnKX13PXQodGhpcyk7Yi5yZXBsYWNlV2l0aC5hcHBseSh0aGlzLFxuZCk7Zm9yKGQ9MDtkPGgubGVuZ3RoO2QrKylhLmEoaFtkXSk7aWYodylmb3IoYS5hKHRoaXMpLGQ9MDtkPGUubGVuZ3RoO2QrKyloPWVbZF0saCBpbnN0YW5jZW9mIEVsZW1lbnQmJmEuYihoKX0pO3ZvaWQgMCE9PWIucmVtb3ZlJiZ4KGMsXCJyZW1vdmVcIixmdW5jdGlvbigpe3ZhciBjPXQodGhpcyk7Yi5yZW1vdmUuY2FsbCh0aGlzKTtjJiZhLmEodGhpcyl9KX1mdW5jdGlvbiBxZChhKXtmdW5jdGlvbiBiKGIsZCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGIsXCJ0ZXh0Q29udGVudFwiLHtlbnVtZXJhYmxlOmQuZW51bWVyYWJsZSxjb25maWd1cmFibGU6ITAsZ2V0OmQuZ2V0LHNldDpmdW5jdGlvbihiKXtpZih0aGlzLm5vZGVUeXBlPT09Tm9kZS5URVhUX05PREUpZC5zZXQuY2FsbCh0aGlzLGIpO2Vsc2V7dmFyIGM9dm9pZCAwO2lmKHRoaXMuZmlyc3RDaGlsZCl7dmFyIGU9dGhpcy5jaGlsZE5vZGVzLGg9ZS5sZW5ndGg7aWYoMDxoJiZ0KHRoaXMpKXtjPUFycmF5KGgpO2Zvcih2YXIgdz1cbjA7dzxoO3crKyljW3ddPWVbd119fWQuc2V0LmNhbGwodGhpcyxiKTtpZihjKWZvcihiPTA7YjxjLmxlbmd0aDtiKyspYS5hKGNbYl0pfX19KX14KE5vZGUucHJvdG90eXBlLFwiaW5zZXJ0QmVmb3JlXCIsZnVuY3Rpb24oYixkKXtpZihiIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGIuY2hpbGROb2Rlcyk7Yj1EYi5jYWxsKHRoaXMsYixkKTtpZih0KHRoaXMpKWZvcihkPTA7ZDxjLmxlbmd0aDtkKyspYS5iKGNbZF0pO3JldHVybiBifWM9dChiKTtkPURiLmNhbGwodGhpcyxiLGQpO2MmJmEuYShiKTt0KHRoaXMpJiZhLmIoYik7cmV0dXJuIGR9KTt4KE5vZGUucHJvdG90eXBlLFwiYXBwZW5kQ2hpbGRcIixmdW5jdGlvbihiKXtpZihiIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGIuY2hpbGROb2Rlcyk7Yj1pYS5jYWxsKHRoaXMsYik7aWYodCh0aGlzKSlmb3IodmFyIGU9XG4wO2U8Yy5sZW5ndGg7ZSsrKWEuYihjW2VdKTtyZXR1cm4gYn1jPXQoYik7ZT1pYS5jYWxsKHRoaXMsYik7YyYmYS5hKGIpO3QodGhpcykmJmEuYihiKTtyZXR1cm4gZX0pO3goTm9kZS5wcm90b3R5cGUsXCJjbG9uZU5vZGVcIixmdW5jdGlvbihiKXtiPXdiLmNhbGwodGhpcyxiKTt0aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT9hLmYoYik6YS5sKGIpO3JldHVybiBifSk7eChOb2RlLnByb3RvdHlwZSxcInJlbW92ZUNoaWxkXCIsZnVuY3Rpb24oYil7dmFyIGM9dChiKSxlPUZhLmNhbGwodGhpcyxiKTtjJiZhLmEoYik7cmV0dXJuIGV9KTt4KE5vZGUucHJvdG90eXBlLFwicmVwbGFjZUNoaWxkXCIsZnVuY3Rpb24oYixkKXtpZihiIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGIuY2hpbGROb2Rlcyk7Yj1FYi5jYWxsKHRoaXMsYixkKTtpZih0KHRoaXMpKWZvcihhLmEoZCksZD0wO2Q8Yy5sZW5ndGg7ZCsrKWEuYihjW2RdKTtcbnJldHVybiBifWM9dChiKTt2YXIgZj1FYi5jYWxsKHRoaXMsYixkKSxrPXQodGhpcyk7ayYmYS5hKGQpO2MmJmEuYShiKTtrJiZhLmIoYik7cmV0dXJuIGZ9KTtJYSYmSWEuZ2V0P2IoTm9kZS5wcm90b3R5cGUsSWEpOmEucyhmdW5jdGlvbihhKXtiKGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe2Zvcih2YXIgYT1bXSxiPTA7Yjx0aGlzLmNoaWxkTm9kZXMubGVuZ3RoO2IrKylhLnB1c2godGhpcy5jaGlsZE5vZGVzW2JdLnRleHRDb250ZW50KTtyZXR1cm4gYS5qb2luKFwiXCIpfSxzZXQ6ZnVuY3Rpb24oYSl7Zm9yKDt0aGlzLmZpcnN0Q2hpbGQ7KUZhLmNhbGwodGhpcyx0aGlzLmZpcnN0Q2hpbGQpO2lhLmNhbGwodGhpcyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSl9fSl9KX1mdW5jdGlvbiByZChhKXt4KERvY3VtZW50LnByb3RvdHlwZSxcImNyZWF0ZUVsZW1lbnRcIixmdW5jdGlvbihiKXtpZih0aGlzLl9fQ0VfaGFzUmVnaXN0cnkpe3ZhciBjPVxuYS5jKGIpO2lmKGMpcmV0dXJuIG5ldyBjLmNvbnN0cnVjdG9yfWI9RWEuY2FsbCh0aGlzLGIpO2EuZyhiKTtyZXR1cm4gYn0pO3goRG9jdW1lbnQucHJvdG90eXBlLFwiaW1wb3J0Tm9kZVwiLGZ1bmN0aW9uKGIsYyl7Yj1zZC5jYWxsKHRoaXMsYixjKTt0aGlzLl9fQ0VfaGFzUmVnaXN0cnk/YS5mKGIpOmEubChiKTtyZXR1cm4gYn0pO3goRG9jdW1lbnQucHJvdG90eXBlLFwiY3JlYXRlRWxlbWVudE5TXCIsZnVuY3Rpb24oYixjKXtpZih0aGlzLl9fQ0VfaGFzUmVnaXN0cnkmJihudWxsPT09Ynx8XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1iKSl7dmFyIGQ9YS5jKGMpO2lmKGQpcmV0dXJuIG5ldyBkLmNvbnN0cnVjdG9yfWI9dGQuY2FsbCh0aGlzLGIsYyk7YS5nKGIpO3JldHVybiBifSk7SGEoYSxEb2N1bWVudC5wcm90b3R5cGUse1o6dWQsYXBwZW5kOnZkfSl9ZnVuY3Rpb24gSGEoYSxiLGMpe2Z1bmN0aW9uIGQoYil7cmV0dXJuIGZ1bmN0aW9uKGMpe2Zvcih2YXIgZD1bXSxcbmU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7KytlKWRbZS0wXT1hcmd1bWVudHNbZV07ZT1bXTtmb3IodmFyIGY9W10sZz0wO2c8ZC5sZW5ndGg7ZysrKXt2YXIgbT1kW2ddO20gaW5zdGFuY2VvZiBFbGVtZW50JiZ0KG0pJiZmLnB1c2gobSk7aWYobSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKG09bS5maXJzdENoaWxkO207bT1tLm5leHRTaWJsaW5nKWUucHVzaChtKTtlbHNlIGUucHVzaChtKX1iLmFwcGx5KHRoaXMsZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrKylhLmEoZltkXSk7aWYodCh0aGlzKSlmb3IoZD0wO2Q8ZS5sZW5ndGg7ZCsrKWY9ZVtkXSxmIGluc3RhbmNlb2YgRWxlbWVudCYmYS5iKGYpfX12b2lkIDAhPT1jLlomJihiLnByZXBlbmQ9ZChjLlopKTt2b2lkIDAhPT1jLmFwcGVuZCYmKGIuYXBwZW5kPWQoYy5hcHBlbmQpKX1mdW5jdGlvbiB3ZChhKXt3aW5kb3cuSFRNTEVsZW1lbnQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKCl7dmFyIGI9dGhpcy5jb25zdHJ1Y3RvcixcbmQ9YS53KGIpO2lmKCFkKXRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGJlaW5nIGNvbnN0cnVjdGVkIHdhcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBjdXN0b21FbGVtZW50c2AuXCIpO3ZhciBlPWQuY29uc3RydWN0aW9uU3RhY2s7aWYoMD09PWUubGVuZ3RoKXJldHVybiBlPUVhLmNhbGwoZG9jdW1lbnQsZC5sb2NhbE5hbWUpLE9iamVjdC5zZXRQcm90b3R5cGVPZihlLGIucHJvdG90eXBlKSxlLl9fQ0Vfc3RhdGU9MSxlLl9fQ0VfZGVmaW5pdGlvbj1kLGEuZyhlKSxlO2Q9ZS5sZW5ndGgtMTt2YXIgZj1lW2RdO2lmKGY9PT1GYil0aHJvdyBFcnJvcihcIlRoZSBIVE1MRWxlbWVudCBjb25zdHJ1Y3RvciB3YXMgZWl0aGVyIGNhbGxlZCByZWVudHJhbnRseSBmb3IgdGhpcyBjb25zdHJ1Y3RvciBvciBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXCIpO2VbZF09RmI7T2JqZWN0LnNldFByb3RvdHlwZU9mKGYsYi5wcm90b3R5cGUpO2EuZyhmKTtyZXR1cm4gZn1iLnByb3RvdHlwZT14ZC5wcm90b3R5cGU7XG5yZXR1cm4gYn0oKX1mdW5jdGlvbiB5KGEpe3RoaXMuYz0hMTt0aGlzLmE9YTt0aGlzLmg9bmV3IE1hcDt0aGlzLmY9ZnVuY3Rpb24oYSl7cmV0dXJuIGEoKX07dGhpcy5iPSExO3RoaXMuZz1bXTt0aGlzLmk9bmV3IEphKGEsZG9jdW1lbnQpfWZ1bmN0aW9uIEdiKCl7dmFyIGE9dGhpczt0aGlzLmI9dGhpcy5hPXZvaWQgMDt0aGlzLmY9bmV3IFByb21pc2UoZnVuY3Rpb24oYil7YS5iPWI7YS5hJiZiKGEuYSl9KX1mdW5jdGlvbiBKYShhLGIpe3RoaXMuYj1hO3RoaXMuYT1iO3RoaXMuTT12b2lkIDA7dGhpcy5iLmYodGhpcy5hKTtcImxvYWRpbmdcIj09PXRoaXMuYS5yZWFkeVN0YXRlJiYodGhpcy5NPW5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuZi5iaW5kKHRoaXMpKSx0aGlzLk0ub2JzZXJ2ZSh0aGlzLmEse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSkpfWZ1bmN0aW9uIEIoKXt0aGlzLm89bmV3IE1hcDt0aGlzLm09bmV3IE1hcDt0aGlzLmo9W107dGhpcy5oPSExfWZ1bmN0aW9uIGwoYSxcbmIsYyl7aWYoYSE9PUhiKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGNvbnN0cnVjdG9yXCIpO2E9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2EuX19wcm90b19fPWwucHJvdG90eXBlO2EuRihiLGMpO3JldHVybiBhfWZ1bmN0aW9uIGthKGEpe2lmKCFhLl9fc2hhZHl8fHZvaWQgMD09PWEuX19zaGFkeS5maXJzdENoaWxkKXthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTthLl9fc2hhZHkuZmlyc3RDaGlsZD1LYShhKTthLl9fc2hhZHkubGFzdENoaWxkPUxhKGEpO0liKGEpO2Zvcih2YXIgYj1hLl9fc2hhZHkuY2hpbGROb2Rlcz1TKGEpLGM9MCxkO2M8Yi5sZW5ndGgmJihkPWJbY10pO2MrKylkLl9fc2hhZHk9ZC5fX3NoYWR5fHx7fSxkLl9fc2hhZHkucGFyZW50Tm9kZT1hLGQuX19zaGFkeS5uZXh0U2libGluZz1iW2MrMV18fG51bGwsZC5fX3NoYWR5LnByZXZpb3VzU2libGluZz1iW2MtMV18fG51bGwsSmIoZCl9fWZ1bmN0aW9uIHlkKGEpe3ZhciBiPWEmJmEuTTtcbmImJihiLlguZGVsZXRlKGEuUmEpLGIuWC5zaXplfHwoYS5TYS5fX3NoYWR5LlQ9bnVsbCkpfWZ1bmN0aW9uIHpkKGEsYil7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307YS5fX3NoYWR5LlR8fChhLl9fc2hhZHkuVD1uZXcgbGEpO2EuX19zaGFkeS5ULlguYWRkKGIpO3ZhciBjPWEuX19zaGFkeS5UO3JldHVybntSYTpiLE06YyxTYTphLHRha2VSZWNvcmRzOmZ1bmN0aW9uKCl7cmV0dXJuIGMudGFrZVJlY29yZHMoKX19fWZ1bmN0aW9uIGxhKCl7dGhpcy5hPSExO3RoaXMuYWRkZWROb2Rlcz1bXTt0aGlzLnJlbW92ZWROb2Rlcz1bXTt0aGlzLlg9bmV3IFNldH1mdW5jdGlvbiBUKGEpe3JldHVybiBhLl9fc2hhZHkmJnZvaWQgMCE9PWEuX19zaGFkeS5maXJzdENoaWxkfWZ1bmN0aW9uIEcoYSl7cmV0dXJuXCJTaGFkeVJvb3RcIj09PWEuTWF9ZnVuY3Rpb24gWihhKXthPWEuZ2V0Um9vdE5vZGUoKTtpZihHKGEpKXJldHVybiBhfWZ1bmN0aW9uIE1hKGEsYil7aWYoYSYmYilmb3IodmFyIGM9XG5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKSxkPTAsZTtkPGMubGVuZ3RoJiYoZT1jW2RdKTtkKyspe3ZhciBmPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYixlKTtmJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxlLGYpfX1mdW5jdGlvbiBOYShhLGIpe2Zvcih2YXIgYz1bXSxkPTE7ZDxhcmd1bWVudHMubGVuZ3RoOysrZCljW2QtMV09YXJndW1lbnRzW2RdO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKyspTWEoYSxjW2RdKTtyZXR1cm4gYX1mdW5jdGlvbiBBZChhLGIpe2Zvcih2YXIgYyBpbiBiKWFbY109YltjXX1mdW5jdGlvbiBLYihhKXtPYS5wdXNoKGEpO1BhLnRleHRDb250ZW50PUxiKyt9ZnVuY3Rpb24gTWIoYSxiKXtmb3IoO2I7KXtpZihiPT1hKXJldHVybiEwO2I9Yi5wYXJlbnROb2RlfXJldHVybiExfWZ1bmN0aW9uIE5iKGEpe1FhfHwoUWE9ITAsS2IobWEpKTthYS5wdXNoKGEpfWZ1bmN0aW9uIG1hKCl7UWE9ITE7Zm9yKHZhciBhPSEhYWEubGVuZ3RoO2FhLmxlbmd0aDspYWEuc2hpZnQoKSgpO1xucmV0dXJuIGF9ZnVuY3Rpb24gQmQoYSxiKXt2YXIgYz1iLmdldFJvb3ROb2RlKCk7cmV0dXJuIGEubWFwKGZ1bmN0aW9uKGEpe3ZhciBiPWM9PT1hLnRhcmdldC5nZXRSb290Tm9kZSgpO2lmKGImJmEuYWRkZWROb2Rlcyl7aWYoYj1BcnJheS5mcm9tKGEuYWRkZWROb2RlcykuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBjPT09YS5nZXRSb290Tm9kZSgpfSksYi5sZW5ndGgpcmV0dXJuIGE9T2JqZWN0LmNyZWF0ZShhKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImFkZGVkTm9kZXNcIix7dmFsdWU6Yixjb25maWd1cmFibGU6ITB9KSxhfWVsc2UgaWYoYilyZXR1cm4gYX0pLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYX0pfWZ1bmN0aW9uIE9iKGEpe3N3aXRjaChhKXtjYXNlIFwiJlwiOnJldHVyblwiJmFtcDtcIjtjYXNlIFwiPFwiOnJldHVyblwiJmx0O1wiO2Nhc2UgXCI+XCI6cmV0dXJuXCImZ3Q7XCI7Y2FzZSAnXCInOnJldHVyblwiJnF1b3Q7XCI7Y2FzZSBcIlxcdTAwYTBcIjpyZXR1cm5cIiZuYnNwO1wifX1cbmZ1bmN0aW9uIFBiKGEpe2Zvcih2YXIgYj17fSxjPTA7YzxhLmxlbmd0aDtjKyspYlthW2NdXT0hMDtyZXR1cm4gYn1mdW5jdGlvbiBSYShhLGIpe1widGVtcGxhdGVcIj09PWEubG9jYWxOYW1lJiYoYT1hLmNvbnRlbnQpO2Zvcih2YXIgYz1cIlwiLGQ9Yj9iKGEpOmEuY2hpbGROb2RlcyxlPTAsZj1kLmxlbmd0aCxrO2U8ZiYmKGs9ZFtlXSk7ZSsrKXthOnt2YXIgaD1rO3ZhciB3PWE7dmFyIGc9Yjtzd2l0Y2goaC5ub2RlVHlwZSl7Y2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpmb3IodmFyIG09aC5sb2NhbE5hbWUsbD1cIjxcIittLHE9aC5hdHRyaWJ1dGVzLG49MDt3PXFbbl07bisrKWwrPVwiIFwiK3cubmFtZSsnPVwiJyt3LnZhbHVlLnJlcGxhY2UoQ2QsT2IpKydcIic7bCs9XCI+XCI7aD1EZFttXT9sOmwrUmEoaCxnKStcIjwvXCIrbStcIj5cIjticmVhayBhO2Nhc2UgTm9kZS5URVhUX05PREU6aD1oLmRhdGE7aD13JiZFZFt3LmxvY2FsTmFtZV0/aDpoLnJlcGxhY2UoRmQsT2IpO2JyZWFrIGE7Y2FzZSBOb2RlLkNPTU1FTlRfTk9ERTpoPVxuXCJcXHgzYyEtLVwiK2guZGF0YStcIi0tXFx4M2VcIjticmVhayBhO2RlZmF1bHQ6dGhyb3cgd2luZG93LmNvbnNvbGUuZXJyb3IoaCksRXJyb3IoXCJub3QgaW1wbGVtZW50ZWRcIik7fX1jKz1ofXJldHVybiBjfWZ1bmN0aW9uIFUoYSl7Qy5jdXJyZW50Tm9kZT1hO3JldHVybiBDLnBhcmVudE5vZGUoKX1mdW5jdGlvbiBLYShhKXtDLmN1cnJlbnROb2RlPWE7cmV0dXJuIEMuZmlyc3RDaGlsZCgpfWZ1bmN0aW9uIExhKGEpe0MuY3VycmVudE5vZGU9YTtyZXR1cm4gQy5sYXN0Q2hpbGQoKX1mdW5jdGlvbiBRYihhKXtDLmN1cnJlbnROb2RlPWE7cmV0dXJuIEMucHJldmlvdXNTaWJsaW5nKCl9ZnVuY3Rpb24gUmIoYSl7Qy5jdXJyZW50Tm9kZT1hO3JldHVybiBDLm5leHRTaWJsaW5nKCl9ZnVuY3Rpb24gUyhhKXt2YXIgYj1bXTtDLmN1cnJlbnROb2RlPWE7Zm9yKGE9Qy5maXJzdENoaWxkKCk7YTspYi5wdXNoKGEpLGE9Qy5uZXh0U2libGluZygpO3JldHVybiBifWZ1bmN0aW9uIFNiKGEpe0QuY3VycmVudE5vZGU9XG5hO3JldHVybiBELnBhcmVudE5vZGUoKX1mdW5jdGlvbiBUYihhKXtELmN1cnJlbnROb2RlPWE7cmV0dXJuIEQuZmlyc3RDaGlsZCgpfWZ1bmN0aW9uIFViKGEpe0QuY3VycmVudE5vZGU9YTtyZXR1cm4gRC5sYXN0Q2hpbGQoKX1mdW5jdGlvbiBWYihhKXtELmN1cnJlbnROb2RlPWE7cmV0dXJuIEQucHJldmlvdXNTaWJsaW5nKCl9ZnVuY3Rpb24gV2IoYSl7RC5jdXJyZW50Tm9kZT1hO3JldHVybiBELm5leHRTaWJsaW5nKCl9ZnVuY3Rpb24gWGIoYSl7dmFyIGI9W107RC5jdXJyZW50Tm9kZT1hO2ZvcihhPUQuZmlyc3RDaGlsZCgpO2E7KWIucHVzaChhKSxhPUQubmV4dFNpYmxpbmcoKTtyZXR1cm4gYn1mdW5jdGlvbiBZYihhKXtyZXR1cm4gUmEoYSxmdW5jdGlvbihhKXtyZXR1cm4gUyhhKX0pfWZ1bmN0aW9uIFpiKGEpe3N3aXRjaChhLm5vZGVUeXBlKXtjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOmNhc2UgTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFOmE9ZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihhLFxuTm9kZUZpbHRlci5TSE9XX1RFWFQsbnVsbCwhMSk7Zm9yKHZhciBiPVwiXCIsYztjPWEubmV4dE5vZGUoKTspYis9Yy5ub2RlVmFsdWU7cmV0dXJuIGI7ZGVmYXVsdDpyZXR1cm4gYS5ub2RlVmFsdWV9fWZ1bmN0aW9uIEsoYSxiLGMpe2Zvcih2YXIgZCBpbiBiKXt2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsZCk7ZSYmZS5jb25maWd1cmFibGV8fCFlJiZjP09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGQsYltkXSk6YyYmY29uc29sZS53YXJuKFwiQ291bGQgbm90IGRlZmluZVwiLGQsXCJvblwiLGEpfX1mdW5jdGlvbiBQKGEpe0soYSwkYik7SyhhLFNhKTtLKGEsVGEpfWZ1bmN0aW9uIGFjKGEsYixjKXtKYihhKTtjPWN8fG51bGw7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307Yi5fX3NoYWR5PWIuX19zaGFkeXx8e307YyYmKGMuX19zaGFkeT1jLl9fc2hhZHl8fHt9KTthLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWM/Yy5fX3NoYWR5LnByZXZpb3VzU2libGluZzpiLmxhc3RDaGlsZDtcbnZhciBkPWEuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc7ZCYmZC5fX3NoYWR5JiYoZC5fX3NoYWR5Lm5leHRTaWJsaW5nPWEpOyhkPWEuX19zaGFkeS5uZXh0U2libGluZz1jKSYmZC5fX3NoYWR5JiYoZC5fX3NoYWR5LnByZXZpb3VzU2libGluZz1hKTthLl9fc2hhZHkucGFyZW50Tm9kZT1iO2M/Yz09PWIuX19zaGFkeS5maXJzdENoaWxkJiYoYi5fX3NoYWR5LmZpcnN0Q2hpbGQ9YSk6KGIuX19zaGFkeS5sYXN0Q2hpbGQ9YSxiLl9fc2hhZHkuZmlyc3RDaGlsZHx8KGIuX19zaGFkeS5maXJzdENoaWxkPWEpKTtiLl9fc2hhZHkuY2hpbGROb2Rlcz1udWxsfWZ1bmN0aW9uIFVhKGEsYixjKXtpZihiPT09YSl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdhcHBlbmRDaGlsZCcgb24gJ05vZGUnOiBUaGUgbmV3IGNoaWxkIGVsZW1lbnQgY29udGFpbnMgdGhlIHBhcmVudC5cIik7aWYoYyl7dmFyIGQ9Yy5fX3NoYWR5JiZjLl9fc2hhZHkucGFyZW50Tm9kZTtpZih2b2lkIDAhPT1kJiZcbmQhPT1hfHx2b2lkIDA9PT1kJiZVKGMpIT09YSl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdpbnNlcnRCZWZvcmUnIG9uICdOb2RlJzogVGhlIG5vZGUgYmVmb3JlIHdoaWNoIHRoZSBuZXcgbm9kZSBpcyB0byBiZSBpbnNlcnRlZCBpcyBub3QgYSBjaGlsZCBvZiB0aGlzIG5vZGUuXCIpO31pZihjPT09YilyZXR1cm4gYjtiLnBhcmVudE5vZGUmJlZhKGIucGFyZW50Tm9kZSxiKTtkPVooYSk7dmFyIGU7aWYoZT1kKWE6e2lmKCFiLl9fbm9JbnNlcnRpb25Qb2ludCl7dmFyIGY7XCJzbG90XCI9PT1iLmxvY2FsTmFtZT9mPVtiXTpiLnF1ZXJ5U2VsZWN0b3JBbGwmJihmPWIucXVlcnlTZWxlY3RvckFsbChcInNsb3RcIikpO2lmKGYmJmYubGVuZ3RoKXtlPWY7YnJlYWsgYX19ZT12b2lkIDB9KGY9ZSkmJmQuUWEoZik7ZCYmKFwic2xvdFwiPT09YS5sb2NhbE5hbWV8fGYpJiZkLkwoKTtpZihUKGEpKXtkPWM7SWIoYSk7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307dm9pZCAwIT09YS5fX3NoYWR5LmZpcnN0Q2hpbGQmJlxuKGEuX19zaGFkeS5jaGlsZE5vZGVzPW51bGwpO2lmKGIubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe2Y9Yi5jaGlsZE5vZGVzO2ZvcihlPTA7ZTxmLmxlbmd0aDtlKyspYWMoZltlXSxhLGQpO2IuX19zaGFkeT1iLl9fc2hhZHl8fHt9O2Q9dm9pZCAwIT09Yi5fX3NoYWR5LmZpcnN0Q2hpbGQ/bnVsbDp2b2lkIDA7Yi5fX3NoYWR5LmZpcnN0Q2hpbGQ9Yi5fX3NoYWR5Lmxhc3RDaGlsZD1kO2IuX19zaGFkeS5jaGlsZE5vZGVzPWR9ZWxzZSBhYyhiLGEsZCk7aWYoV2EoYSkpe2EuX19zaGFkeS5yb290LkwoKTt2YXIgaz0hMH1lbHNlIGEuX19zaGFkeS5yb290JiYoaz0hMCl9a3x8KGs9RyhhKT9hLmhvc3Q6YSxjPyhjPWJjKGMpLFhhLmNhbGwoayxiLGMpKTpjYy5jYWxsKGssYikpO2RjKGEsYik7cmV0dXJuIGJ9ZnVuY3Rpb24gVmEoYSxiKXtpZihiLnBhcmVudE5vZGUhPT1hKXRocm93IEVycm9yKFwiVGhlIG5vZGUgdG8gYmUgcmVtb3ZlZCBpcyBub3QgYSBjaGlsZCBvZiB0aGlzIG5vZGU6IFwiK1xuYik7dmFyIGM9WihiKTtpZihUKGEpKXtiLl9fc2hhZHk9Yi5fX3NoYWR5fHx7fTthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTtiPT09YS5fX3NoYWR5LmZpcnN0Q2hpbGQmJihhLl9fc2hhZHkuZmlyc3RDaGlsZD1iLl9fc2hhZHkubmV4dFNpYmxpbmcpO2I9PT1hLl9fc2hhZHkubGFzdENoaWxkJiYoYS5fX3NoYWR5Lmxhc3RDaGlsZD1iLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nKTt2YXIgZD1iLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nO3ZhciBlPWIuX19zaGFkeS5uZXh0U2libGluZztkJiYoZC5fX3NoYWR5PWQuX19zaGFkeXx8e30sZC5fX3NoYWR5Lm5leHRTaWJsaW5nPWUpO2UmJihlLl9fc2hhZHk9ZS5fX3NoYWR5fHx7fSxlLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWQpO2IuX19zaGFkeS5wYXJlbnROb2RlPWIuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc9Yi5fX3NoYWR5Lm5leHRTaWJsaW5nPXZvaWQgMDt2b2lkIDAhPT1hLl9fc2hhZHkuY2hpbGROb2RlcyYmKGEuX19zaGFkeS5jaGlsZE5vZGVzPVxubnVsbCk7aWYoV2EoYSkpe2EuX19zaGFkeS5yb290LkwoKTt2YXIgZj0hMH19ZWMoYik7YyYmKChlPWEmJlwic2xvdFwiPT09YS5sb2NhbE5hbWUpJiYoZj0hMCksKChkPWMuVGEoYikpfHxlKSYmYy5MKCkpO2Z8fChmPUcoYSk/YS5ob3N0OmEsKCFhLl9fc2hhZHkucm9vdCYmXCJzbG90XCIhPT1iLmxvY2FsTmFtZXx8Zj09PVUoYikpJiZiYS5jYWxsKGYsYikpO2RjKGEsbnVsbCxiKTtyZXR1cm4gYn1mdW5jdGlvbiBlYyhhKXtpZihhLl9fc2hhZHkmJnZvaWQgMCE9PWEuX19zaGFkeS5tYSlmb3IodmFyIGI9YS5jaGlsZE5vZGVzLGM9MCxkPWIubGVuZ3RoLGU7YzxkJiYoZT1iW2NdKTtjKyspZWMoZSk7YS5fX3NoYWR5JiYoYS5fX3NoYWR5Lm1hPXZvaWQgMCl9ZnVuY3Rpb24gYmMoYSl7dmFyIGI9YTthJiZcInNsb3RcIj09PWEubG9jYWxOYW1lJiYoYj0oYj1hLl9fc2hhZHkmJmEuX19zaGFkeS5SKSYmYi5sZW5ndGg/YlswXTpiYyhhLm5leHRTaWJsaW5nKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gV2EoYSl7cmV0dXJuKGE9XG5hJiZhLl9fc2hhZHkmJmEuX19zaGFkeS5yb290KSYmYS50YSgpfWZ1bmN0aW9uIGZjKGEsYil7XCJzbG90XCI9PT1iPyhhPWEucGFyZW50Tm9kZSxXYShhKSYmYS5fX3NoYWR5LnJvb3QuTCgpKTpcInNsb3RcIj09PWEubG9jYWxOYW1lJiZcIm5hbWVcIj09PWImJihiPVooYSkpJiYoYi5WYShhKSxiLkwoKSl9ZnVuY3Rpb24gZGMoYSxiLGMpe2lmKGE9YS5fX3NoYWR5JiZhLl9fc2hhZHkuVCliJiZhLmFkZGVkTm9kZXMucHVzaChiKSxjJiZhLnJlbW92ZWROb2Rlcy5wdXNoKGMpLGEuaGIoKX1mdW5jdGlvbiBnYyhhKXtpZihhJiZhLm5vZGVUeXBlKXthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTt2YXIgYj1hLl9fc2hhZHkubWE7dm9pZCAwPT09YiYmKEcoYSk/Yj1hOmI9KGI9YS5wYXJlbnROb2RlKT9nYyhiKTphLGNhLmNhbGwoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGEpJiYoYS5fX3NoYWR5Lm1hPWIpKTtyZXR1cm4gYn19ZnVuY3Rpb24gbmEoYSxiLGMpe3ZhciBkPVtdO2hjKGEuY2hpbGROb2RlcyxcbmIsYyxkKTtyZXR1cm4gZH1mdW5jdGlvbiBoYyhhLGIsYyxkKXtmb3IodmFyIGU9MCxmPWEubGVuZ3RoLGs7ZTxmJiYoaz1hW2VdKTtlKyspe3ZhciBoO2lmKGg9ay5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXtoPWs7dmFyIHc9YixnPWMsbT1kLGw9dyhoKTtsJiZtLnB1c2goaCk7ZyYmZyhsKT9oPWw6KGhjKGguY2hpbGROb2Rlcyx3LGcsbSksaD12b2lkIDApfWlmKGgpYnJlYWt9fWZ1bmN0aW9uIGljKGEpe2E9YS5nZXRSb290Tm9kZSgpO0coYSkmJmEudmEoKX1mdW5jdGlvbiBqYyhhLGIsYyl7b2F8fChvYT13aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5TY29waW5nU2hpbSk7b2EmJlwiY2xhc3NcIj09PWI/b2Euc2V0RWxlbWVudENsYXNzKGEsYyk6KGtjLmNhbGwoYSxiLGMpLGZjKGEsYikpfWZ1bmN0aW9uIGxjKGEsYil7aWYoYS5vd25lckRvY3VtZW50IT09ZG9jdW1lbnQpcmV0dXJuIFlhLmNhbGwoZG9jdW1lbnQsYSxiKTt2YXIgYz1ZYS5jYWxsKGRvY3VtZW50LFxuYSwhMSk7aWYoYil7YT1hLmNoaWxkTm9kZXM7Yj0wO2Zvcih2YXIgZDtiPGEubGVuZ3RoO2IrKylkPWxjKGFbYl0sITApLGMuYXBwZW5kQ2hpbGQoZCl9cmV0dXJuIGN9ZnVuY3Rpb24gWmEoYSxiKXt2YXIgYz1bXSxkPWE7Zm9yKGE9YT09PXdpbmRvdz93aW5kb3c6YS5nZXRSb290Tm9kZSgpO2Q7KWMucHVzaChkKSxkPWQuYXNzaWduZWRTbG90P2QuYXNzaWduZWRTbG90OmQubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUmJmQuaG9zdCYmKGJ8fGQhPT1hKT9kLmhvc3Q6ZC5wYXJlbnROb2RlO2NbYy5sZW5ndGgtMV09PT1kb2N1bWVudCYmYy5wdXNoKHdpbmRvdyk7cmV0dXJuIGN9ZnVuY3Rpb24gbWMoYSxiKXtpZighRylyZXR1cm4gYTthPVphKGEsITApO2Zvcih2YXIgYz0wLGQsZSxmLGs7YzxiLmxlbmd0aDtjKyspaWYoZD1iW2NdLGY9ZD09PXdpbmRvdz93aW5kb3c6ZC5nZXRSb290Tm9kZSgpLGYhPT1lJiYoaz1hLmluZGV4T2YoZiksZT1mKSwhRyhmKXx8XG4tMTxrKXJldHVybiBkfWZ1bmN0aW9uICRhKGEpe2Z1bmN0aW9uIGIoYixkKXtiPW5ldyBhKGIsZCk7Yi5lYT1kJiYhIWQuY29tcG9zZWQ7cmV0dXJuIGJ9QWQoYixhKTtiLnByb3RvdHlwZT1hLnByb3RvdHlwZTtyZXR1cm4gYn1mdW5jdGlvbiBuYyhhLGIsYyl7aWYoYz1iLl9faGFuZGxlcnMmJmIuX19oYW5kbGVyc1thLnR5cGVdJiZiLl9faGFuZGxlcnNbYS50eXBlXVtjXSlmb3IodmFyIGQ9MCxlOyhlPWNbZF0pJiZhLnRhcmdldCE9PWEucmVsYXRlZFRhcmdldCYmKGUuY2FsbChiLGEpLCFhLkthKTtkKyspO31mdW5jdGlvbiBHZChhKXt2YXIgYj1hLmNvbXBvc2VkUGF0aCgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiY3VycmVudFRhcmdldFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sY29uZmlndXJhYmxlOiEwfSk7Zm9yKHZhciBjPWIubGVuZ3RoLTE7MDw9YztjLS0pe3ZhciBkPWJbY107bmMoYSxkLFwiY2FwdHVyZVwiKTtpZihhLmZhKXJldHVybn1PYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcblwiZXZlbnRQaGFzZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRXZlbnQuQVRfVEFSR0VUfX0pO3ZhciBlO2ZvcihjPTA7YzxiLmxlbmd0aDtjKyspe2Q9YltjXTt2YXIgZj1kLl9fc2hhZHkmJmQuX19zaGFkeS5yb290O2lmKDA9PT1jfHxmJiZmPT09ZSlpZihuYyhhLGQsXCJidWJibGVcIiksZCE9PXdpbmRvdyYmKGU9ZC5nZXRSb290Tm9kZSgpKSxhLmZhKWJyZWFrfX1mdW5jdGlvbiBvYyhhLGIsYyxkLGUsZil7Zm9yKHZhciBrPTA7azxhLmxlbmd0aDtrKyspe3ZhciBoPWFba10sdz1oLnR5cGUsZz1oLmNhcHR1cmUsbT1oLm9uY2UsbD1oLnBhc3NpdmU7aWYoYj09PWgubm9kZSYmYz09PXcmJmQ9PT1nJiZlPT09bSYmZj09PWwpcmV0dXJuIGt9cmV0dXJuLTF9ZnVuY3Rpb24gcGMoYSxiLGMpe2lmKGIpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyl7dmFyIGQ9ISFjLmNhcHR1cmU7dmFyIGU9ISFjLm9uY2U7dmFyIGY9ISFjLnBhc3NpdmV9ZWxzZSBkPSEhYyxmPWU9ITE7dmFyIGs9YyYmYy5nYXx8XG50aGlzLGg9YltkYV07aWYoaCl7aWYoLTE8b2MoaCxrLGEsZCxlLGYpKXJldHVybn1lbHNlIGJbZGFdPVtdO2g9ZnVuY3Rpb24oZCl7ZSYmdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKTtkLl9fdGFyZ2V0fHxxYyhkKTtpZihrIT09dGhpcyl7dmFyIGY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkLFwiY3VycmVudFRhcmdldFwiKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZCxcImN1cnJlbnRUYXJnZXRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGt9LGNvbmZpZ3VyYWJsZTohMH0pfWlmKGQuY29tcG9zZWR8fC0xPGQuY29tcG9zZWRQYXRoKCkuaW5kZXhPZihrKSlpZihkLnRhcmdldD09PWQucmVsYXRlZFRhcmdldClkLmV2ZW50UGhhc2U9PT1FdmVudC5CVUJCTElOR19QSEFTRSYmZC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtlbHNlIGlmKGQuZXZlbnRQaGFzZT09PUV2ZW50LkNBUFRVUklOR19QSEFTRXx8ZC5idWJibGVzfHxkLnRhcmdldD09PWspe3ZhciBoPVxuXCJvYmplY3RcIj09PXR5cGVvZiBiJiZiLmhhbmRsZUV2ZW50P2IuaGFuZGxlRXZlbnQoZCk6Yi5jYWxsKGssZCk7ayE9PXRoaXMmJihmPyhPYmplY3QuZGVmaW5lUHJvcGVydHkoZCxcImN1cnJlbnRUYXJnZXRcIixmKSxmPW51bGwpOmRlbGV0ZSBkLmN1cnJlbnRUYXJnZXQpO3JldHVybiBofX07YltkYV0ucHVzaCh7bm9kZTp0aGlzLHR5cGU6YSxjYXB0dXJlOmQsb25jZTplLHBhc3NpdmU6ZixsYjpofSk7YWJbYV0/KHRoaXMuX19oYW5kbGVycz10aGlzLl9faGFuZGxlcnN8fHt9LHRoaXMuX19oYW5kbGVyc1thXT10aGlzLl9faGFuZGxlcnNbYV18fHtjYXB0dXJlOltdLGJ1YmJsZTpbXX0sdGhpcy5fX2hhbmRsZXJzW2FdW2Q/XCJjYXB0dXJlXCI6XCJidWJibGVcIl0ucHVzaChoKSk6KHRoaXMgaW5zdGFuY2VvZiBXaW5kb3c/cmM6c2MpLmNhbGwodGhpcyxhLGgsYyl9fWZ1bmN0aW9uIHRjKGEsYixjKXtpZihiKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMpe3ZhciBkPSEhYy5jYXB0dXJlO3ZhciBlPVxuISFjLm9uY2U7dmFyIGY9ISFjLnBhc3NpdmV9ZWxzZSBkPSEhYyxmPWU9ITE7dmFyIGs9YyYmYy5nYXx8dGhpcyxoPXZvaWQgMDt2YXIgZz1udWxsO3RyeXtnPWJbZGFdfWNhdGNoKHIpe31nJiYoZT1vYyhnLGssYSxkLGUsZiksLTE8ZSYmKGg9Zy5zcGxpY2UoZSwxKVswXS5sYixnLmxlbmd0aHx8KGJbZGFdPXZvaWQgMCkpKTsodGhpcyBpbnN0YW5jZW9mIFdpbmRvdz91Yzp2YykuY2FsbCh0aGlzLGEsaHx8YixjKTtoJiZhYlthXSYmdGhpcy5fX2hhbmRsZXJzJiZ0aGlzLl9faGFuZGxlcnNbYV0mJihhPXRoaXMuX19oYW5kbGVyc1thXVtkP1wiY2FwdHVyZVwiOlwiYnViYmxlXCJdLGg9YS5pbmRleE9mKGgpLC0xPGgmJmEuc3BsaWNlKGgsMSkpfX1mdW5jdGlvbiBIZCgpe2Zvcih2YXIgYSBpbiBhYil3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihhLGZ1bmN0aW9uKGEpe2EuX190YXJnZXR8fChxYyhhKSxHZChhKSl9LCEwKX1mdW5jdGlvbiBxYyhhKXthLl9fdGFyZ2V0PWEudGFyZ2V0O2EucmE9XG5hLnJlbGF0ZWRUYXJnZXQ7aWYoRS5TKXt2YXIgYj13YyxjPU9iamVjdC5nZXRQcm90b3R5cGVPZihhKTtpZighYy5oYXNPd25Qcm9wZXJ0eShcIl9fcGF0Y2hQcm90b1wiKSl7dmFyIGQ9T2JqZWN0LmNyZWF0ZShjKTtkLm5iPWM7TWEoZCxiKTtjLl9fcGF0Y2hQcm90bz1kfWEuX19wcm90b19fPWMuX19wYXRjaFByb3RvfWVsc2UgTWEoYSx3Yyl9ZnVuY3Rpb24gZWEoYSxiKXtyZXR1cm57aW5kZXg6YSxVOltdLFc6Yn19ZnVuY3Rpb24gSWQoYSxiLGMsZCl7dmFyIGU9MCxmPTAsaz0wLGg9MCxnPU1hdGgubWluKGItZSxkLWYpO2lmKDA9PWUmJjA9PWYpYTp7Zm9yKGs9MDtrPGc7aysrKWlmKGFba10hPT1jW2tdKWJyZWFrIGE7az1nfWlmKGI9PWEubGVuZ3RoJiZkPT1jLmxlbmd0aCl7aD1hLmxlbmd0aDtmb3IodmFyIHI9Yy5sZW5ndGgsbT0wO208Zy1rJiZKZChhWy0taF0sY1stLXJdKTspbSsrO2g9bX1lKz1rO2YrPWs7Yi09aDtkLT1oO2lmKDA9PWItZSYmMD09ZC1mKXJldHVybltdO1xuaWYoZT09Yil7Zm9yKGI9ZWEoZSwwKTtmPGQ7KWIuVS5wdXNoKGNbZisrXSk7cmV0dXJuW2JdfWlmKGY9PWQpcmV0dXJuW2VhKGUsYi1lKV07Zz1lO2s9ZjtkPWQtaysxO2g9Yi1nKzE7Yj1BcnJheShkKTtmb3Iocj0wO3I8ZDtyKyspYltyXT1BcnJheShoKSxiW3JdWzBdPXI7Zm9yKHI9MDtyPGg7cisrKWJbMF1bcl09cjtmb3Iocj0xO3I8ZDtyKyspZm9yKG09MTttPGg7bSsrKWlmKGFbZyttLTFdPT09Y1trK3ItMV0pYltyXVttXT1iW3ItMV1bbS0xXTtlbHNle3ZhciBsPWJbci0xXVttXSsxLG49YltyXVttLTFdKzE7YltyXVttXT1sPG4/bDpufWc9Yi5sZW5ndGgtMTtrPWJbMF0ubGVuZ3RoLTE7ZD1iW2ddW2tdO2ZvcihhPVtdOzA8Z3x8MDxrOykwPT1nPyhhLnB1c2goMiksay0tKTowPT1rPyhhLnB1c2goMyksZy0tKTooaD1iW2ctMV1bay0xXSxyPWJbZy0xXVtrXSxtPWJbZ11bay0xXSxsPXI8bT9yPGg/cjpoOm08aD9tOmgsbD09aD8oaD09ZD9hLnB1c2goMCk6KGEucHVzaCgxKSxcbmQ9aCksZy0tLGstLSk6bD09cj8oYS5wdXNoKDMpLGctLSxkPXIpOihhLnB1c2goMiksay0tLGQ9bSkpO2EucmV2ZXJzZSgpO2I9dm9pZCAwO2c9W107Zm9yKGs9MDtrPGEubGVuZ3RoO2srKylzd2l0Y2goYVtrXSl7Y2FzZSAwOmImJihnLnB1c2goYiksYj12b2lkIDApO2UrKztmKys7YnJlYWs7Y2FzZSAxOmJ8fChiPWVhKGUsMCkpO2IuVysrO2UrKztiLlUucHVzaChjW2ZdKTtmKys7YnJlYWs7Y2FzZSAyOmJ8fChiPWVhKGUsMCkpO2IuVysrO2UrKzticmVhaztjYXNlIDM6Ynx8KGI9ZWEoZSwwKSksYi5VLnB1c2goY1tmXSksZisrfWImJmcucHVzaChiKTtyZXR1cm4gZ31mdW5jdGlvbiBKZChhLGIpe3JldHVybiBhPT09Yn1mdW5jdGlvbiB4YyhhKXt2YXIgYj1bXTtkbyBiLnVuc2hpZnQoYSk7d2hpbGUoYT1hLnBhcmVudE5vZGUpO3JldHVybiBifWZ1bmN0aW9uIHljKGEpe2ljKGEpO3JldHVybiBhLl9fc2hhZHkmJmEuX19zaGFkeS5hc3NpZ25lZFNsb3R8fG51bGx9ZnVuY3Rpb24gTChhLFxuYil7Zm9yKHZhciBjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGIpLGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXSxmPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYixlKTtmLnZhbHVlP2FbZV09Zi52YWx1ZTpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxlLGYpfX1mdW5jdGlvbiBLZCgpe3ZhciBhPXdpbmRvdy5jdXN0b21FbGVtZW50cyYmd2luZG93LmN1c3RvbUVsZW1lbnRzLm5hdGl2ZUhUTUxFbGVtZW50fHxIVE1MRWxlbWVudDtMKHdpbmRvdy5Ob2RlLnByb3RvdHlwZSxMZCk7TCh3aW5kb3cuV2luZG93LnByb3RvdHlwZSxNZCk7TCh3aW5kb3cuVGV4dC5wcm90b3R5cGUsTmQpO0wod2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLGJiKTtMKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSx6Yyk7TCh3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLEFjKTt3aW5kb3cuSFRNTFNsb3RFbGVtZW50JiZMKHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQucHJvdG90eXBlLFxuQmMpO0woYS5wcm90b3R5cGUsT2QpO0UuUyYmKFAod2luZG93Lk5vZGUucHJvdG90eXBlKSxQKHdpbmRvdy5UZXh0LnByb3RvdHlwZSksUCh3aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUpLFAod2luZG93LkVsZW1lbnQucHJvdG90eXBlKSxQKGEucHJvdG90eXBlKSxQKHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUpLHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQmJlAod2luZG93LkhUTUxTbG90RWxlbWVudC5wcm90b3R5cGUpKX1mdW5jdGlvbiBDYyhhKXt2YXIgYj1QZC5oYXMoYSk7YT0vXlthLXpdWy4wLTlfYS16XSotW1xcLS4wLTlfYS16XSokLy50ZXN0KGEpO3JldHVybiFiJiZhfWZ1bmN0aW9uIHQoYSl7dmFyIGI9YS5pc0Nvbm5lY3RlZDtpZih2b2lkIDAhPT1iKXJldHVybiBiO2Zvcig7YSYmIShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KTspYT1hLnBhcmVudE5vZGV8fCh3aW5kb3cuU2hhZG93Um9vdCYmYSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/XG5hLmhvc3Q6dm9pZCAwKTtyZXR1cm4hKCFhfHwhKGEuX19DRV9pc0ltcG9ydERvY3VtZW50fHxhIGluc3RhbmNlb2YgRG9jdW1lbnQpKX1mdW5jdGlvbiBjYihhLGIpe2Zvcig7YiYmYiE9PWEmJiFiLm5leHRTaWJsaW5nOyliPWIucGFyZW50Tm9kZTtyZXR1cm4gYiYmYiE9PWE/Yi5uZXh0U2libGluZzpudWxsfWZ1bmN0aW9uIE8oYSxiLGMpe2M9Yz9jOm5ldyBTZXQ7Zm9yKHZhciBkPWE7ZDspe2lmKGQubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7dmFyIGU9ZDtiKGUpO3ZhciBmPWUubG9jYWxOYW1lO2lmKFwibGlua1wiPT09ZiYmXCJpbXBvcnRcIj09PWUuZ2V0QXR0cmlidXRlKFwicmVsXCIpKXtkPWUuaW1wb3J0O2lmKGQgaW5zdGFuY2VvZiBOb2RlJiYhYy5oYXMoZCkpZm9yKGMuYWRkKGQpLGQ9ZC5maXJzdENoaWxkO2Q7ZD1kLm5leHRTaWJsaW5nKU8oZCxiLGMpO2Q9Y2IoYSxlKTtjb250aW51ZX1lbHNlIGlmKFwidGVtcGxhdGVcIj09PWYpe2Q9Y2IoYSxlKTtjb250aW51ZX1pZihlPVxuZS5fX0NFX3NoYWRvd1Jvb3QpZm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKU8oZSxiLGMpfWQ9ZC5maXJzdENoaWxkP2QuZmlyc3RDaGlsZDpjYihhLGQpfX1mdW5jdGlvbiB4KGEsYixjKXthW2JdPWN9ZnVuY3Rpb24gZGIoYSl7YT1hLnJlcGxhY2UoRi5ZYSxcIlwiKS5yZXBsYWNlKEYucG9ydCxcIlwiKTt2YXIgYj1EYyxjPWEsZD1uZXcgQmE7ZC5zdGFydD0wO2QuZW5kPWMubGVuZ3RoO2Zvcih2YXIgZT1kLGY9MCxrPWMubGVuZ3RoO2Y8aztmKyspaWYoXCJ7XCI9PT1jW2ZdKXtlLnJ1bGVzfHwoZS5ydWxlcz1bXSk7dmFyIGg9ZSxnPWgucnVsZXNbaC5ydWxlcy5sZW5ndGgtMV18fG51bGw7ZT1uZXcgQmE7ZS5zdGFydD1mKzE7ZS5wYXJlbnQ9aDtlLnByZXZpb3VzPWc7aC5ydWxlcy5wdXNoKGUpfWVsc2VcIn1cIj09PWNbZl0mJihlLmVuZD1mKzEsZT1lLnBhcmVudHx8ZCk7cmV0dXJuIGIoZCxhKX1mdW5jdGlvbiBEYyhhLGIpe3ZhciBjPWIuc3Vic3RyaW5nKGEuc3RhcnQsXG5hLmVuZC0xKTthLnBhcnNlZENzc1RleHQ9YS5jc3NUZXh0PWMudHJpbSgpO2EucGFyZW50JiYoYz1iLnN1YnN0cmluZyhhLnByZXZpb3VzP2EucHJldmlvdXMuZW5kOmEucGFyZW50LnN0YXJ0LGEuc3RhcnQtMSksYz1RZChjKSxjPWMucmVwbGFjZShGLkJhLFwiIFwiKSxjPWMuc3Vic3RyaW5nKGMubGFzdEluZGV4T2YoXCI7XCIpKzEpLGM9YS5wYXJzZWRTZWxlY3Rvcj1hLnNlbGVjdG9yPWMudHJpbSgpLGEuYXRSdWxlPTA9PT1jLmluZGV4T2YoXCJAXCIpLGEuYXRSdWxlPzA9PT1jLmluZGV4T2YoXCJAbWVkaWFcIik/YS50eXBlPUkuTUVESUFfUlVMRTpjLm1hdGNoKEYuY2IpJiYoYS50eXBlPUkuZGEsYS5rZXlmcmFtZXNOYW1lPWEuc2VsZWN0b3Iuc3BsaXQoRi5CYSkucG9wKCkpOmEudHlwZT0wPT09Yy5pbmRleE9mKFwiLS1cIik/SS5uYTpJLlNUWUxFX1JVTEUpO2lmKGM9YS5ydWxlcylmb3IodmFyIGQ9MCxlPWMubGVuZ3RoLGY7ZDxlJiYoZj1jW2RdKTtkKyspRGMoZixiKTtyZXR1cm4gYX1mdW5jdGlvbiBRZChhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXFxcKFswLTlhLWZdezEsNn0pXFxzL2dpLFxuZnVuY3Rpb24oYSxjKXthPWM7Zm9yKGM9Ni1hLmxlbmd0aDtjLS07KWE9XCIwXCIrYTtyZXR1cm5cIlxcXFxcIithfSl9ZnVuY3Rpb24gRWMoYSxiLGMpe2M9dm9pZCAwPT09Yz9cIlwiOmM7dmFyIGQ9XCJcIjtpZihhLmNzc1RleHR8fGEucnVsZXMpe3ZhciBlPWEucnVsZXMsZjtpZihmPWUpZj1lWzBdLGY9IShmJiZmLnNlbGVjdG9yJiYwPT09Zi5zZWxlY3Rvci5pbmRleE9mKFwiLS1cIikpO2lmKGYpe2Y9MDtmb3IodmFyIGs9ZS5sZW5ndGgsaDtmPGsmJihoPWVbZl0pO2YrKylkPUVjKGgsYixkKX1lbHNlIGI/Yj1hLmNzc1RleHQ6KGI9YS5jc3NUZXh0LGI9Yi5yZXBsYWNlKEYud2EsXCJcIikucmVwbGFjZShGLkFhLFwiXCIpLGI9Yi5yZXBsYWNlKEYuZWIsXCJcIikucmVwbGFjZShGLmpiLFwiXCIpKSwoZD1iLnRyaW0oKSkmJihkPVwiICBcIitkK1wiXFxuXCIpfWQmJihhLnNlbGVjdG9yJiYoYys9YS5zZWxlY3RvcitcIiB7XFxuXCIpLGMrPWQsYS5zZWxlY3RvciYmKGMrPVwifVxcblxcblwiKSk7cmV0dXJuIGN9ZnVuY3Rpb24gRmMoYSl7QT1cbmEmJmEuc2hpbWNzc3Byb3BlcnRpZXM/ITE6enx8IShuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdFxcLzYwMXxFZGdlXFwvMTUvKXx8IXdpbmRvdy5DU1N8fCFDU1Muc3VwcG9ydHN8fCFDU1Muc3VwcG9ydHMoXCJib3gtc2hhZG93XCIsXCIwIDAgMCB2YXIoLS1mb28pXCIpKX1mdW5jdGlvbiBWKGEsYil7aWYoIWEpcmV0dXJuXCJcIjtcInN0cmluZ1wiPT09dHlwZW9mIGEmJihhPWRiKGEpKTtiJiZXKGEsYik7cmV0dXJuIEVjKGEsQSl9ZnVuY3Rpb24gcGEoYSl7IWEuX19jc3NSdWxlcyYmYS50ZXh0Q29udGVudCYmKGEuX19jc3NSdWxlcz1kYihhLnRleHRDb250ZW50KSk7cmV0dXJuIGEuX19jc3NSdWxlc3x8bnVsbH1mdW5jdGlvbiBHYyhhKXtyZXR1cm4hIWEucGFyZW50JiZhLnBhcmVudC50eXBlPT09SS5kYX1mdW5jdGlvbiBXKGEsYixjLGQpe2lmKGEpe3ZhciBlPSExLGY9YS50eXBlO2lmKGQmJmY9PT1JLk1FRElBX1JVTEUpe3ZhciBrPWEuc2VsZWN0b3IubWF0Y2goUmQpO1xuayYmKHdpbmRvdy5tYXRjaE1lZGlhKGtbMV0pLm1hdGNoZXN8fChlPSEwKSl9Zj09PUkuU1RZTEVfUlVMRT9iKGEpOmMmJmY9PT1JLmRhP2MoYSk6Zj09PUkubmEmJihlPSEwKTtpZigoYT1hLnJ1bGVzKSYmIWUpe2U9MDtmPWEubGVuZ3RoO2Zvcih2YXIgaDtlPGYmJihoPWFbZV0pO2UrKylXKGgsYixjLGQpfX19ZnVuY3Rpb24gZWIoYSxiLGMsZCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2ImJmUuc2V0QXR0cmlidXRlKFwic2NvcGVcIixiKTtlLnRleHRDb250ZW50PWE7SGMoZSxjLGQpO3JldHVybiBlfWZ1bmN0aW9uIEhjKGEsYixjKXtiPWJ8fGRvY3VtZW50LmhlYWQ7Yi5pbnNlcnRCZWZvcmUoYSxjJiZjLm5leHRTaWJsaW5nfHxiLmZpcnN0Q2hpbGQpO1E/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihRKT09PU5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HJiYoUT1hKTpRPWF9ZnVuY3Rpb24gSWMoYSxiKXt2YXIgYz1hLmluZGV4T2YoXCJ2YXIoXCIpO1xuaWYoLTE9PT1jKXJldHVybiBiKGEsXCJcIixcIlwiLFwiXCIpO2E6e3ZhciBkPTA7dmFyIGU9YyszO2Zvcih2YXIgZj1hLmxlbmd0aDtlPGY7ZSsrKWlmKFwiKFwiPT09YVtlXSlkKys7ZWxzZSBpZihcIilcIj09PWFbZV0mJjA9PT0tLWQpYnJlYWsgYTtlPS0xfWQ9YS5zdWJzdHJpbmcoYys0LGUpO2M9YS5zdWJzdHJpbmcoMCxjKTthPUljKGEuc3Vic3RyaW5nKGUrMSksYik7ZT1kLmluZGV4T2YoXCIsXCIpO3JldHVybi0xPT09ZT9iKGMsZC50cmltKCksXCJcIixhKTpiKGMsZC5zdWJzdHJpbmcoMCxlKS50cmltKCksZC5zdWJzdHJpbmcoZSsxKS50cmltKCksYSl9ZnVuY3Rpb24gcWEoYSxiKXt6P2Euc2V0QXR0cmlidXRlKFwiY2xhc3NcIixiKTp3aW5kb3cuU2hhZHlET00ubmF0aXZlTWV0aG9kcy5zZXRBdHRyaWJ1dGUuY2FsbChhLFwiY2xhc3NcIixiKX1mdW5jdGlvbiBSKGEpe3ZhciBiPWEubG9jYWxOYW1lLGM9XCJcIjtiPy0xPGIuaW5kZXhPZihcIi1cIil8fChjPWIsYj1hLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJpc1wiKXx8XG5cIlwiKTooYj1hLmlzLGM9YS5leHRlbmRzKTtyZXR1cm57aXM6YixWOmN9fWZ1bmN0aW9uIEpjKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKGMudGFyZ2V0IT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiZjLnRhcmdldCE9PWRvY3VtZW50LmhlYWQpZm9yKHZhciBkPTA7ZDxjLmFkZGVkTm9kZXMubGVuZ3RoO2QrKyl7dmFyIGU9Yy5hZGRlZE5vZGVzW2RdO2lmKGUubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7dmFyIGY9ZS5nZXRSb290Tm9kZSgpO3ZhciBrPWU7dmFyIGg9W107ay5jbGFzc0xpc3Q/aD1BcnJheS5mcm9tKGsuY2xhc3NMaXN0KTprIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQmJmsuaGFzQXR0cmlidXRlKFwiY2xhc3NcIikmJihoPWsuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuc3BsaXQoL1xccysvKSk7az1oO2g9ay5pbmRleE9mKHAuYSk7aWYoKGs9LTE8aD9rW2grMV06XCJcIikmJmY9PT1lLm93bmVyRG9jdW1lbnQpcC5iKGUsXG5rLCEwKTtlbHNlIGlmKGYubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUmJihmPWYuaG9zdCkpaWYoZj1SKGYpLmlzLGs9PT1mKWZvcihlPXdpbmRvdy5TaGFkeURPTS5uYXRpdmVNZXRob2RzLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlLFwiOm5vdCguXCIrcC5hK1wiKVwiKSxmPTA7ZjxlLmxlbmd0aDtmKyspcC5oKGVbZl0sayk7ZWxzZSBrJiZwLmIoZSxrLCEwKSxwLmIoZSxmKX19fX1mdW5jdGlvbiBTZChhKXtpZihhPXJhW2FdKWEuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9uPWEuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9ufHwwLGEuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uPWEuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9ufHwwLGEuX2FwcGx5U2hpbU5leHRWZXJzaW9uPShhLl9hcHBseVNoaW1OZXh0VmVyc2lvbnx8MCkrMX1mdW5jdGlvbiBLYyhhKXtyZXR1cm4gYS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb249PT1hLl9hcHBseVNoaW1OZXh0VmVyc2lvbn1cbmZ1bmN0aW9uIFRkKGEpe2EuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uPWEuX2FwcGx5U2hpbU5leHRWZXJzaW9uO2EuYnx8KGEuYj0hMCxVZC50aGVuKGZ1bmN0aW9uKCl7YS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb249YS5fYXBwbHlTaGltTmV4dFZlcnNpb247YS5iPSExfSkpfWZ1bmN0aW9uIHViKGEpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe0xjP0xjKGEpOihmYnx8KGZiPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEpe2diPWF9KSxcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlP2diKCk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbigpe1wiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUmJmdiKCl9KSksZmIudGhlbihmdW5jdGlvbigpe2EmJmEoKX0pKX0pfShmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudClyZXR1cm4gbmV3IEN1c3RvbUV2ZW50KGEsXG5iKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO2MuaW5pdEN1c3RvbUV2ZW50KGEsISFiLmJ1YmJsZXMsISFiLmNhbmNlbGFibGUsYi5kZXRhaWwpO3JldHVybiBjfWZ1bmN0aW9uIGMoYSl7aWYobSlyZXR1cm4gYS5vd25lckRvY3VtZW50IT09ZG9jdW1lbnQ/YS5vd25lckRvY3VtZW50Om51bGw7dmFyIGI9YS5fX2ltcG9ydERvYztpZighYiYmYS5wYXJlbnROb2RlKXtiPWEucGFyZW50Tm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jbG9zZXN0KWI9Yi5jbG9zZXN0KFwibGlua1tyZWw9aW1wb3J0XVwiKTtlbHNlIGZvcig7IWgoYikmJihiPWIucGFyZW50Tm9kZSk7KTthLl9faW1wb3J0RG9jPWJ9cmV0dXJuIGJ9ZnVuY3Rpb24gZChhKXt2YXIgYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XTpub3QoW2ltcG9ydC1kZXBlbmRlbmN5XSlcIiksYz1iLmxlbmd0aDtjP2woYixmdW5jdGlvbihiKXtyZXR1cm4gayhiLGZ1bmN0aW9uKCl7MD09PVxuLS1jJiZhKCl9KX0pOmEoKX1mdW5jdGlvbiBlKGEpe2Z1bmN0aW9uIGIoKXtcImxvYWRpbmdcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGUmJmRvY3VtZW50LmJvZHkmJihkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGIpLGEoKSl9ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixiKTtiKCl9ZnVuY3Rpb24gZihhKXtlKGZ1bmN0aW9uKCl7cmV0dXJuIGQoZnVuY3Rpb24oKXtyZXR1cm4gYSYmYSgpfSl9KX1mdW5jdGlvbiBrKGEsYil7aWYoYS5fX2xvYWRlZCliJiZiKCk7ZWxzZSBpZihcInNjcmlwdFwiPT09YS5sb2NhbE5hbWUmJiFhLnNyY3x8XCJzdHlsZVwiPT09YS5sb2NhbE5hbWUmJiFhLmZpcnN0Q2hpbGQpYS5fX2xvYWRlZD0hMCxiJiZiKCk7ZWxzZXt2YXIgYz1mdW5jdGlvbihkKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoZC50eXBlLGMpO2EuX19sb2FkZWQ9ITA7YiYmYigpfTthLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsXG5jKTt6JiZcInN0eWxlXCI9PT1hLmxvY2FsTmFtZXx8YS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixjKX19ZnVuY3Rpb24gaChhKXtyZXR1cm4gYS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiZcImxpbmtcIj09PWEubG9jYWxOYW1lJiZcImltcG9ydFwiPT09YS5yZWx9ZnVuY3Rpb24gZygpe3ZhciBhPXRoaXM7dGhpcy5hPXt9O3RoaXMuYj0wO3RoaXMuZj1uZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihiKXtyZXR1cm4gYS5sKGIpfSk7dGhpcy5mLm9ic2VydmUoZG9jdW1lbnQuaGVhZCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KTt0aGlzLmMoZG9jdW1lbnQpfWZ1bmN0aW9uIGwoYSxiLGMpe3ZhciBkPWE/YS5sZW5ndGg6MCxlPWM/LTE6MTtmb3IoYz1jP2QtMTowO2M8ZCYmMDw9YztjKz1lKWIoYVtjXSxjKX12YXIgbT1cImltcG9ydFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIiksbj1udWxsOyExPT09XCJjdXJyZW50U2NyaXB0XCJpbiBkb2N1bWVudCYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50LFxuXCJjdXJyZW50U2NyaXB0XCIse2dldDpmdW5jdGlvbigpe3JldHVybiBufHwoXCJjb21wbGV0ZVwiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9kb2N1bWVudC5zY3JpcHRzW2RvY3VtZW50LnNjcmlwdHMubGVuZ3RoLTFdOm51bGwpfSxjb25maWd1cmFibGU6ITB9KTt2YXIgcT0vKHVybFxcKCkoW14pXSopKFxcKSkvZyx0PS8oQGltcG9ydFtcXHNdKyg/IXVybFxcKCkpKFteO10qKSg7KS9nLHU9Lyg8bGlua1tePl0qKShyZWw9Wyd8XCJdP3N0eWxlc2hlZXRbJ3xcIl0/W14+XSo+KS9nLHA9e1phOmZ1bmN0aW9uKGEsYil7YS5ocmVmJiZhLnNldEF0dHJpYnV0ZShcImhyZWZcIixwLiQoYS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLGIpKTthLnNyYyYmYS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixwLiQoYS5nZXRBdHRyaWJ1dGUoXCJzcmNcIiksYikpO2lmKFwic3R5bGVcIj09PWEubG9jYWxOYW1lKXt2YXIgYz1wLkNhKGEudGV4dENvbnRlbnQsYixxKTthLnRleHRDb250ZW50PXAuQ2EoYyxiLHQpfX0sQ2E6ZnVuY3Rpb24oYSxcbmIsYyl7cmV0dXJuIGEucmVwbGFjZShjLGZ1bmN0aW9uKGEsYyxkLGUpe2E9ZC5yZXBsYWNlKC9bXCInXS9nLFwiXCIpO2ImJihhPXAuJChhLGIpKTtyZXR1cm4gYytcIidcIithK1wiJ1wiK2V9KX0sJDpmdW5jdGlvbihhLGIpe2lmKHZvaWQgMD09PXAuaGEpe3AuaGE9ITE7dHJ5e3ZhciBjPW5ldyBVUkwoXCJiXCIsXCJodHRwOi8vYVwiKTtjLnBhdGhuYW1lPVwiYyUyMGRcIjtwLmhhPVwiaHR0cDovL2EvYyUyMGRcIj09PWMuaHJlZn1jYXRjaChzZSl7fX1pZihwLmhhKXJldHVybihuZXcgVVJMKGEsYikpLmhyZWY7Yz1wLlBhO2N8fChjPWRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcInRlbXBcIikscC5QYT1jLGMucGE9Yy5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSxjLmhlYWQuYXBwZW5kQ2hpbGQoYy5wYSksYy5vYT1jLmNyZWF0ZUVsZW1lbnQoXCJhXCIpKTtjLnBhLmhyZWY9YjtjLm9hLmhyZWY9YTtyZXR1cm4gYy5vYS5ocmVmfHxhfX0sdj17YXN5bmM6ITAsbG9hZDpmdW5jdGlvbihhLFxuYixjKXtpZihhKWlmKGEubWF0Y2goL15kYXRhOi8pKXthPWEuc3BsaXQoXCIsXCIpO3ZhciBkPWFbMV07ZD0tMTxhWzBdLmluZGV4T2YoXCI7YmFzZTY0XCIpP2F0b2IoZCk6ZGVjb2RlVVJJQ29tcG9uZW50KGQpO2IoZCl9ZWxzZXt2YXIgZT1uZXcgWE1MSHR0cFJlcXVlc3Q7ZS5vcGVuKFwiR0VUXCIsYSx2LmFzeW5jKTtlLm9ubG9hZD1mdW5jdGlvbigpe3ZhciBhPWUucmVzcG9uc2VVUkx8fGUuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMb2NhdGlvblwiKTthJiYwPT09YS5pbmRleE9mKFwiL1wiKSYmKGE9KGxvY2F0aW9uLm9yaWdpbnx8bG9jYXRpb24ucHJvdG9jb2wrXCIvL1wiK2xvY2F0aW9uLmhvc3QpK2EpO3ZhciBkPWUucmVzcG9uc2V8fGUucmVzcG9uc2VUZXh0OzMwND09PWUuc3RhdHVzfHwwPT09ZS5zdGF0dXN8fDIwMDw9ZS5zdGF0dXMmJjMwMD5lLnN0YXR1cz9iKGQsYSk6YyhkKX07ZS5zZW5kKCl9ZWxzZSBjKFwiZXJyb3I6IGhyZWYgbXVzdCBiZSBzcGVjaWZpZWRcIil9fSx6PS9UcmlkZW50Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpfHxcbi9FZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7Zy5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2E9YS5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XVwiKTtsKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIuaChhKX0pfTtnLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1hLmhyZWY7aWYodm9pZCAwIT09dGhpcy5hW2NdKXt2YXIgZD10aGlzLmFbY107ZCYmZC5fX2xvYWRlZCYmKGEuaW1wb3J0PWQsdGhpcy5nKGEpKX1lbHNlIHRoaXMuYisrLHRoaXMuYVtjXT1cInBlbmRpbmdcIix2LmxvYWQoYyxmdW5jdGlvbihhLGQpe2E9Yi5tKGEsZHx8Yyk7Yi5hW2NdPWE7Yi5iLS07Yi5jKGEpO2IuaSgpfSxmdW5jdGlvbigpe2IuYVtjXT1udWxsO2IuYi0tO2IuaSgpfSl9O2cucHJvdG90eXBlLm09ZnVuY3Rpb24oYSxiKXtpZighYSlyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3omJihhPWEucmVwbGFjZSh1LFxuZnVuY3Rpb24oYSxiLGMpe3JldHVybi0xPT09YS5pbmRleE9mKFwidHlwZT1cIik/YitcIiB0eXBlPWltcG9ydC1kaXNhYmxlIFwiK2M6YX0pKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7Yy5pbm5lckhUTUw9YTtpZihjLmNvbnRlbnQpYT1jLmNvbnRlbnQ7ZWxzZSBmb3IoYT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Yy5maXJzdENoaWxkOylhLmFwcGVuZENoaWxkKGMuZmlyc3RDaGlsZCk7aWYoYz1hLnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpKWI9cC4kKGMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxiKSxjLnJlbW92ZUF0dHJpYnV0ZShcImhyZWZcIik7Yz1hLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPWltcG9ydF0sIGxpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWZdW3R5cGU9aW1wb3J0LWRpc2FibGVdLFxcbiAgICBzdHlsZTpub3QoW3R5cGVdKSwgbGlua1tyZWw9c3R5bGVzaGVldF1baHJlZl06bm90KFt0eXBlXSksXFxuICAgIHNjcmlwdDpub3QoW3R5cGVdKSwgc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCJdLFxcbiAgICBzY3JpcHRbdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXScpO1xudmFyIGQ9MDtsKGMsZnVuY3Rpb24oYSl7ayhhKTtwLlphKGEsYik7YS5zZXRBdHRyaWJ1dGUoXCJpbXBvcnQtZGVwZW5kZW5jeVwiLFwiXCIpO1wic2NyaXB0XCI9PT1hLmxvY2FsTmFtZSYmIWEuc3JjJiZhLnRleHRDb250ZW50JiYoYS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcImRhdGE6dGV4dC9qYXZhc2NyaXB0O2NoYXJzZXQ9dXRmLTgsXCIrZW5jb2RlVVJJQ29tcG9uZW50KGEudGV4dENvbnRlbnQrKFwiXFxuLy8jIHNvdXJjZVVSTD1cIitiKyhkP1wiLVwiK2Q6XCJcIikrXCIuanNcXG5cIikpKSxhLnRleHRDb250ZW50PVwiXCIsZCsrKX0pO3JldHVybiBhfTtnLnByb3RvdHlwZS5pPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztpZighdGhpcy5iKXt0aGlzLmYuZGlzY29ubmVjdCgpO3RoaXMuZmxhdHRlbihkb2N1bWVudCk7dmFyIGI9ITEsYz0hMSxkPWZ1bmN0aW9uKCl7YyYmYiYmKGEuYyhkb2N1bWVudCksYS5ifHwoYS5mLm9ic2VydmUoZG9jdW1lbnQuaGVhZCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KSxhLmooKSkpfTtcbnRoaXMucyhmdW5jdGlvbigpe2M9ITA7ZCgpfSk7dGhpcy5vKGZ1bmN0aW9uKCl7Yj0hMDtkKCl9KX19O2cucHJvdG90eXBlLmZsYXR0ZW49ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczthPWEucXVlcnlTZWxlY3RvckFsbChcImxpbmtbcmVsPWltcG9ydF1cIik7bChhLGZ1bmN0aW9uKGEpe3ZhciBjPWIuYVthLmhyZWZdOyhhLmltcG9ydD1jKSYmYy5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSYmKGIuYVthLmhyZWZdPWEsYS5yZWFkeVN0YXRlPVwibG9hZGluZ1wiLGEuaW1wb3J0PWEsYi5mbGF0dGVuKGMpLGEuYXBwZW5kQ2hpbGQoYykpfSl9O2cucHJvdG90eXBlLm89ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihlKXtpZihlPGQpe3ZhciBmPWNbZV0sZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2YucmVtb3ZlQXR0cmlidXRlKFwiaW1wb3J0LWRlcGVuZGVuY3lcIik7bChmLmF0dHJpYnV0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIGcuc2V0QXR0cmlidXRlKGEubmFtZSxcbmEudmFsdWUpfSk7bj1nO2YucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZyxmKTtrKGcsZnVuY3Rpb24oKXtuPW51bGw7YihlKzEpfSl9ZWxzZSBhKCl9dmFyIGM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdFtpbXBvcnQtZGVwZW5kZW5jeV1cIiksZD1jLmxlbmd0aDtiKDApfTtnLnByb3RvdHlwZS5zPWZ1bmN0aW9uKGEpe3ZhciBiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtpbXBvcnQtZGVwZW5kZW5jeV0sXFxuICAgIGxpbmtbcmVsPXN0eWxlc2hlZXRdW2ltcG9ydC1kZXBlbmRlbmN5XVwiKSxkPWIubGVuZ3RoO2lmKGQpe3ZhciBlPXomJiEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWZdW3R5cGU9aW1wb3J0LWRpc2FibGVdXCIpO2woYixmdW5jdGlvbihiKXtrKGIsZnVuY3Rpb24oKXtiLnJlbW92ZUF0dHJpYnV0ZShcImltcG9ydC1kZXBlbmRlbmN5XCIpOzA9PT0tLWQmJmEoKX0pO2lmKGUmJmIucGFyZW50Tm9kZSE9PVxuZG9jdW1lbnQuaGVhZCl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChiLmxvY2FsTmFtZSk7Zi5fX2FwcGxpZWRFbGVtZW50PWI7Zi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJpbXBvcnQtcGxhY2Vob2xkZXJcIik7Yi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmLGIubmV4dFNpYmxpbmcpO2ZvcihmPWMoYik7ZiYmYyhmKTspZj1jKGYpO2YucGFyZW50Tm9kZSE9PWRvY3VtZW50LmhlYWQmJihmPW51bGwpO2RvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGIsZik7Yi5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpfX0pfWVsc2UgYSgpfTtnLnByb3RvdHlwZS5qPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2woYixmdW5jdGlvbihiKXtyZXR1cm4gYS5nKGIpfSwhMCl9O2cucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7YS5fX2xvYWRlZHx8KGEuX19sb2FkZWQ9ITAsYS5pbXBvcnQmJihhLmltcG9ydC5yZWFkeVN0YXRlPVxuXCJjb21wbGV0ZVwiKSxhLmRpc3BhdGNoRXZlbnQoYihhLmltcG9ydD9cImxvYWRcIjpcImVycm9yXCIse2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfSkpKX07Zy5wcm90b3R5cGUubD1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2woYSxmdW5jdGlvbihhKXtyZXR1cm4gbChhLmFkZGVkTm9kZXMsZnVuY3Rpb24oYSl7YSYmYS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiYoaChhKT9iLmgoYSk6Yi5jKGEpKX0pfSl9O2lmKG0pe3ZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2woeCxmdW5jdGlvbihhKXthLmltcG9ydCYmXCJsb2FkaW5nXCI9PT1hLmltcG9ydC5yZWFkeVN0YXRlfHwoYS5fX2xvYWRlZD0hMCl9KTt4PWZ1bmN0aW9uKGEpe2E9YS50YXJnZXQ7aChhKSYmKGEuX19sb2FkZWQ9ITApfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLHgsITApO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLFxueCwhMCl9ZWxzZXt2YXIgeT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLFwiYmFzZVVSSVwiKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoKCF5fHx5LmNvbmZpZ3VyYWJsZT9Ob2RlOkVsZW1lbnQpLnByb3RvdHlwZSxcImJhc2VVUklcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9aCh0aGlzKT90aGlzOmModGhpcyk7cmV0dXJuIGE/YS5ocmVmOnkmJnkuZ2V0P3kuZ2V0LmNhbGwodGhpcyk6KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpfHx3aW5kb3cubG9jYXRpb24pLmhyZWZ9LGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwfSk7ZShmdW5jdGlvbigpe3JldHVybiBuZXcgZ30pfWYoZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChiKFwiSFRNTEltcG9ydHNMb2FkZWRcIix7Y2FuY2VsYWJsZTohMCxidWJibGVzOiEwLGRldGFpbDp2b2lkIDB9KSl9KTthLnVzZU5hdGl2ZT1tO2Eud2hlblJlYWR5PWY7YS5pbXBvcnRGb3JFbGVtZW50PVxuY30pKHdpbmRvdy5IVE1MSW1wb3J0cz13aW5kb3cuSFRNTEltcG9ydHN8fHt9KTt2YXIgRT13aW5kb3cuU2hhZHlET018fHt9O0UuJGE9ISghRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93fHwhTm9kZS5wcm90b3R5cGUuZ2V0Um9vdE5vZGUpO3ZhciBoYj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLFwiZmlyc3RDaGlsZFwiKTtFLlM9ISEoaGImJmhiLmNvbmZpZ3VyYWJsZSYmaGIuZ2V0KTtFLnphPUUuZm9yY2V8fCFFLiRhO3ZhciBYPUVsZW1lbnQucHJvdG90eXBlLE1jPVgubWF0Y2hlc3x8WC5tYXRjaGVzU2VsZWN0b3J8fFgubW96TWF0Y2hlc1NlbGVjdG9yfHxYLm1zTWF0Y2hlc1NlbGVjdG9yfHxYLm9NYXRjaGVzU2VsZWN0b3J8fFgud2Via2l0TWF0Y2hlc1NlbGVjdG9yLFBhPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpLExiPTAsT2E9W107KG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCl7Zm9yKDtPYS5sZW5ndGg7KXRyeXtPYS5zaGlmdCgpKCl9Y2F0Y2goYSl7dGhyb3cgUGEudGV4dENvbnRlbnQ9XG5MYisrLGE7fX0pKS5vYnNlcnZlKFBhLHtjaGFyYWN0ZXJEYXRhOiEwfSk7dmFyIFZkPSEhZG9jdW1lbnQuY29udGFpbnMsYWE9W10sUWE7bWEubGlzdD1hYTtsYS5wcm90b3R5cGUuaGI9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3RoaXMuYXx8KHRoaXMuYT0hMCxLYihmdW5jdGlvbigpe2EuYigpfSkpfTtsYS5wcm90b3R5cGUuYj1mdW5jdGlvbigpe2lmKHRoaXMuYSl7dGhpcy5hPSExO3ZhciBhPXRoaXMudGFrZVJlY29yZHMoKTthLmxlbmd0aCYmdGhpcy5YLmZvckVhY2goZnVuY3Rpb24oYil7YihhKX0pfX07bGEucHJvdG90eXBlLnRha2VSZWNvcmRzPWZ1bmN0aW9uKCl7aWYodGhpcy5hZGRlZE5vZGVzLmxlbmd0aHx8dGhpcy5yZW1vdmVkTm9kZXMubGVuZ3RoKXt2YXIgYT1be2FkZGVkTm9kZXM6dGhpcy5hZGRlZE5vZGVzLHJlbW92ZWROb2Rlczp0aGlzLnJlbW92ZWROb2Rlc31dO3RoaXMuYWRkZWROb2Rlcz1bXTt0aGlzLnJlbW92ZWROb2Rlcz1bXTtyZXR1cm4gYX1yZXR1cm5bXX07XG52YXIgY2M9RWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGQsWGE9RWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlLGJhPUVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNoaWxkLGtjPUVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSxOYz1FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsaWI9RWxlbWVudC5wcm90b3R5cGUuY2xvbmVOb2RlLFlhPURvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlLHNjPUVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIsdmM9RWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcixyYz1XaW5kb3cucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIsdWM9V2luZG93LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLGpiPUVsZW1lbnQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQsY2E9Tm9kZS5wcm90b3R5cGUuY29udGFpbnN8fEhUTUxFbGVtZW50LnByb3RvdHlwZS5jb250YWlucyxXZD1PYmplY3QuZnJlZXplKHthcHBlbmRDaGlsZDpjYyxcbmluc2VydEJlZm9yZTpYYSxyZW1vdmVDaGlsZDpiYSxzZXRBdHRyaWJ1dGU6a2MscmVtb3ZlQXR0cmlidXRlOk5jLGNsb25lTm9kZTppYixpbXBvcnROb2RlOllhLGFkZEV2ZW50TGlzdGVuZXI6c2MscmVtb3ZlRXZlbnRMaXN0ZW5lcjp2YyxyYjpyYyxzYjp1YyxkaXNwYXRjaEV2ZW50OmpiLHF1ZXJ5U2VsZWN0b3I6RWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvcixxdWVyeVNlbGVjdG9yQWxsOkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwsY29udGFpbnM6Y2F9KSxDZD0vWyZcXHUwMEEwXCJdL2csRmQ9L1smXFx1MDBBMDw+XS9nLERkPVBiKFwiYXJlYSBiYXNlIGJyIGNvbCBjb21tYW5kIGVtYmVkIGhyIGltZyBpbnB1dCBrZXlnZW4gbGluayBtZXRhIHBhcmFtIHNvdXJjZSB0cmFjayB3YnJcIi5zcGxpdChcIiBcIikpLEVkPVBiKFwic3R5bGUgc2NyaXB0IHhtcCBpZnJhbWUgbm9lbWJlZCBub2ZyYW1lcyBwbGFpbnRleHQgbm9zY3JpcHRcIi5zcGxpdChcIiBcIikpLEM9ZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihkb2N1bWVudCxcbk5vZGVGaWx0ZXIuU0hPV19BTEwsbnVsbCwhMSksRD1kb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGRvY3VtZW50LE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULG51bGwsITEpLFhkPU9iamVjdC5mcmVlemUoe3BhcmVudE5vZGU6VSxmaXJzdENoaWxkOkthLGxhc3RDaGlsZDpMYSxwcmV2aW91c1NpYmxpbmc6UWIsbmV4dFNpYmxpbmc6UmIsY2hpbGROb2RlczpTLHBhcmVudEVsZW1lbnQ6U2IsZmlyc3RFbGVtZW50Q2hpbGQ6VGIsbGFzdEVsZW1lbnRDaGlsZDpVYixwcmV2aW91c0VsZW1lbnRTaWJsaW5nOlZiLG5leHRFbGVtZW50U2libGluZzpXYixjaGlsZHJlbjpYYixpbm5lckhUTUw6WWIsdGV4dENvbnRlbnQ6WmJ9KSxrYj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpfHxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSxzYT1kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJpbmVydFwiKS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxubGI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihEb2N1bWVudC5wcm90b3R5cGUsXCJhY3RpdmVFbGVtZW50XCIpLCRiPXtwYXJlbnRFbGVtZW50OntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5wYXJlbnROb2RlO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERSYmKGE9bnVsbCk7cmV0dXJuIHZvaWQgMCE9PWE/YTpTYih0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxwYXJlbnROb2RlOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5wYXJlbnROb2RlO3JldHVybiB2b2lkIDAhPT1hP2E6VSh0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxuZXh0U2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkubmV4dFNpYmxpbmc7cmV0dXJuIHZvaWQgMCE9PWE/YTpSYih0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxwcmV2aW91c1NpYmxpbmc6e2dldDpmdW5jdGlvbigpe3ZhciBhPVxudGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nO3JldHVybiB2b2lkIDAhPT1hP2E6UWIodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sY2xhc3NOYW1lOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn0sc2V0OmZ1bmN0aW9uKGEpe3RoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX0sY29uZmlndXJhYmxlOiEwfSxuZXh0RWxlbWVudFNpYmxpbmc6e2dldDpmdW5jdGlvbigpe2lmKHRoaXMuX19zaGFkeSYmdm9pZCAwIT09dGhpcy5fX3NoYWR5Lm5leHRTaWJsaW5nKXtmb3IodmFyIGE9dGhpcy5uZXh0U2libGluZzthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX1yZXR1cm4gV2IodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0scHJldmlvdXNFbGVtZW50U2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7aWYodGhpcy5fX3NoYWR5JiZ2b2lkIDAhPT10aGlzLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nKXtmb3IodmFyIGE9XG50aGlzLnByZXZpb3VzU2libGluZzthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5wcmV2aW91c1NpYmxpbmc7cmV0dXJuIGF9cmV0dXJuIFZiKHRoaXMpfSxjb25maWd1cmFibGU6ITB9fSxTYT17Y2hpbGROb2Rlczp7Z2V0OmZ1bmN0aW9uKCl7aWYoVCh0aGlzKSl7aWYoIXRoaXMuX19zaGFkeS5jaGlsZE5vZGVzKXt0aGlzLl9fc2hhZHkuY2hpbGROb2Rlcz1bXTtmb3IodmFyIGE9dGhpcy5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKXRoaXMuX19zaGFkeS5jaGlsZE5vZGVzLnB1c2goYSl9dmFyIGI9dGhpcy5fX3NoYWR5LmNoaWxkTm9kZXN9ZWxzZSBiPVModGhpcyk7Yi5pdGVtPWZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfTtyZXR1cm4gYn0sY29uZmlndXJhYmxlOiEwfSxjaGlsZEVsZW1lbnRDb3VudDp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RofSxjb25maWd1cmFibGU6ITB9LGZpcnN0Q2hpbGQ6e2dldDpmdW5jdGlvbigpe3ZhciBhPVxudGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkuZmlyc3RDaGlsZDtyZXR1cm4gdm9pZCAwIT09YT9hOkthKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LGxhc3RDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkubGFzdENoaWxkO3JldHVybiB2b2lkIDAhPT1hP2E6TGEodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sdGV4dENvbnRlbnQ6e2dldDpmdW5jdGlvbigpe2lmKFQodGhpcykpe2Zvcih2YXIgYT1bXSxiPTAsYz10aGlzLmNoaWxkTm9kZXMsZDtkPWNbYl07YisrKWQubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERSYmYS5wdXNoKGQudGV4dENvbnRlbnQpO3JldHVybiBhLmpvaW4oXCJcIil9cmV0dXJuIFpiKHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYSl7c3dpdGNoKHRoaXMubm9kZVR5cGUpe2Nhc2UgTm9kZS5FTEVNRU5UX05PREU6Y2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6Zm9yKDt0aGlzLmZpcnN0Q2hpbGQ7KXRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTtcbigwPGEubGVuZ3RofHx0aGlzLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpJiZ0aGlzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTticmVhaztkZWZhdWx0OnRoaXMubm9kZVZhbHVlPWF9fSxjb25maWd1cmFibGU6ITB9LGZpcnN0RWxlbWVudENoaWxkOntnZXQ6ZnVuY3Rpb24oKXtpZih0aGlzLl9fc2hhZHkmJnZvaWQgMCE9PXRoaXMuX19zaGFkeS5maXJzdENoaWxkKXtmb3IodmFyIGE9dGhpcy5maXJzdENoaWxkO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLm5leHRTaWJsaW5nO3JldHVybiBhfXJldHVybiBUYih0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxsYXN0RWxlbWVudENoaWxkOntnZXQ6ZnVuY3Rpb24oKXtpZih0aGlzLl9fc2hhZHkmJnZvaWQgMCE9PXRoaXMuX19zaGFkeS5sYXN0Q2hpbGQpe2Zvcih2YXIgYT10aGlzLmxhc3RDaGlsZDthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5wcmV2aW91c1NpYmxpbmc7XG5yZXR1cm4gYX1yZXR1cm4gVWIodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sY2hpbGRyZW46e2dldDpmdW5jdGlvbigpe3ZhciBhO1QodGhpcyk/YT1BcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwodGhpcy5jaGlsZE5vZGVzLGZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREV9KTphPVhiKHRoaXMpO2EuaXRlbT1mdW5jdGlvbihiKXtyZXR1cm4gYVtiXX07cmV0dXJuIGF9LGNvbmZpZ3VyYWJsZTohMH0saW5uZXJIVE1MOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT90aGlzLmNvbnRlbnQ6dGhpcztyZXR1cm4gVCh0aGlzKT9SYShhKTpZYihhKX0sc2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT90aGlzLmNvbnRlbnQ6dGhpcztiLmZpcnN0Q2hpbGQ7KWIucmVtb3ZlQ2hpbGQoYi5maXJzdENoaWxkKTtmb3Ioa2ImJmtiLnNldD9rYi5zZXQuY2FsbChzYSxhKTpcbnNhLmlubmVySFRNTD1hO3NhLmZpcnN0Q2hpbGQ7KWIuYXBwZW5kQ2hpbGQoc2EuZmlyc3RDaGlsZCl9LGNvbmZpZ3VyYWJsZTohMH19LE9jPXtzaGFkb3dSb290OntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkuZmJ8fG51bGx9LGNvbmZpZ3VyYWJsZTohMH19LFRhPXthY3RpdmVFbGVtZW50OntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1sYiYmbGIuZ2V0P2xiLmdldC5jYWxsKGRvY3VtZW50KTpFLlM/dm9pZCAwOmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7aWYoYSYmYS5ub2RlVHlwZSl7dmFyIGI9ISFHKHRoaXMpO2lmKHRoaXM9PT1kb2N1bWVudHx8YiYmdGhpcy5ob3N0IT09YSYmY2EuY2FsbCh0aGlzLmhvc3QsYSkpe2ZvcihiPVooYSk7YiYmYiE9PXRoaXM7KWE9Yi5ob3N0LGI9WihhKTthPXRoaXM9PT1kb2N1bWVudD9iP251bGw6YTpiPT09dGhpcz9hOm51bGx9ZWxzZSBhPW51bGx9ZWxzZSBhPW51bGw7cmV0dXJuIGF9LHNldDpmdW5jdGlvbigpe30sXG5jb25maWd1cmFibGU6ITB9fSxKYj1FLlM/ZnVuY3Rpb24oKXt9OmZ1bmN0aW9uKGEpe2EuX19zaGFkeSYmYS5fX3NoYWR5Lk5hfHwoYS5fX3NoYWR5PWEuX19zaGFkeXx8e30sYS5fX3NoYWR5Lk5hPSEwLEsoYSwkYiwhMCkpfSxJYj1FLlM/ZnVuY3Rpb24oKXt9OmZ1bmN0aW9uKGEpe2EuX19zaGFkeSYmYS5fX3NoYWR5LkxhfHwoYS5fX3NoYWR5PWEuX19zaGFkeXx8e30sYS5fX3NoYWR5LkxhPSEwLEsoYSxTYSwhMCksSyhhLE9jLCEwKSl9LG9hPW51bGwsZGE9XCJfX2V2ZW50V3JhcHBlcnNcIitEYXRlLm5vdygpLFlkPXtibHVyOiEwLGZvY3VzOiEwLGZvY3VzaW46ITAsZm9jdXNvdXQ6ITAsY2xpY2s6ITAsZGJsY2xpY2s6ITAsbW91c2Vkb3duOiEwLG1vdXNlZW50ZXI6ITAsbW91c2VsZWF2ZTohMCxtb3VzZW1vdmU6ITAsbW91c2VvdXQ6ITAsbW91c2VvdmVyOiEwLG1vdXNldXA6ITAsd2hlZWw6ITAsYmVmb3JlaW5wdXQ6ITAsaW5wdXQ6ITAsa2V5ZG93bjohMCxrZXl1cDohMCxjb21wb3NpdGlvbnN0YXJ0OiEwLFxuY29tcG9zaXRpb251cGRhdGU6ITAsY29tcG9zaXRpb25lbmQ6ITAsdG91Y2hzdGFydDohMCx0b3VjaGVuZDohMCx0b3VjaG1vdmU6ITAsdG91Y2hjYW5jZWw6ITAscG9pbnRlcm92ZXI6ITAscG9pbnRlcmVudGVyOiEwLHBvaW50ZXJkb3duOiEwLHBvaW50ZXJtb3ZlOiEwLHBvaW50ZXJ1cDohMCxwb2ludGVyY2FuY2VsOiEwLHBvaW50ZXJvdXQ6ITAscG9pbnRlcmxlYXZlOiEwLGdvdHBvaW50ZXJjYXB0dXJlOiEwLGxvc3Rwb2ludGVyY2FwdHVyZTohMCxkcmFnc3RhcnQ6ITAsZHJhZzohMCxkcmFnZW50ZXI6ITAsZHJhZ2xlYXZlOiEwLGRyYWdvdmVyOiEwLGRyb3A6ITAsZHJhZ2VuZDohMCxET01BY3RpdmF0ZTohMCxET01Gb2N1c0luOiEwLERPTUZvY3VzT3V0OiEwLGtleXByZXNzOiEwfSx3Yz17Z2V0IGNvbXBvc2VkKCl7ITEhPT10aGlzLmlzVHJ1c3RlZCYmdm9pZCAwPT09dGhpcy5lYSYmKHRoaXMuZWE9WWRbdGhpcy50eXBlXSk7cmV0dXJuIHRoaXMuZWF8fCExfSxjb21wb3NlZFBhdGg6ZnVuY3Rpb24oKXt0aGlzLnFhfHxcbih0aGlzLnFhPVphKHRoaXMuX190YXJnZXQsdGhpcy5jb21wb3NlZCkpO3JldHVybiB0aGlzLnFhfSxnZXQgdGFyZ2V0KCl7cmV0dXJuIG1jKHRoaXMuY3VycmVudFRhcmdldCx0aGlzLmNvbXBvc2VkUGF0aCgpKX0sZ2V0IHJlbGF0ZWRUYXJnZXQoKXtpZighdGhpcy5yYSlyZXR1cm4gbnVsbDt0aGlzLnNhfHwodGhpcy5zYT1aYSh0aGlzLnJhLCEwKSk7cmV0dXJuIG1jKHRoaXMuY3VycmVudFRhcmdldCx0aGlzLnNhKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7RXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbi5jYWxsKHRoaXMpO3RoaXMuZmE9ITB9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe0V2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24uY2FsbCh0aGlzKTt0aGlzLmZhPXRoaXMuS2E9ITB9fSxhYj17Zm9jdXM6ITAsYmx1cjohMH0sWmQ9JGEod2luZG93LkV2ZW50KSwkZD0kYSh3aW5kb3cuQ3VzdG9tRXZlbnQpLGFlPVxuJGEod2luZG93Lk1vdXNlRXZlbnQpLEhiPXt9O2wucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUpO2wucHJvdG90eXBlLkY9ZnVuY3Rpb24oYSxiKXt0aGlzLk1hPVwiU2hhZHlSb290XCI7a2EoYSk7a2EodGhpcyk7dGhpcy5ob3N0PWE7dGhpcy5IPWImJmIubW9kZTthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTthLl9fc2hhZHkucm9vdD10aGlzO2EuX19zaGFkeS5mYj1cImNsb3NlZFwiIT09dGhpcy5IP3RoaXM6bnVsbDt0aGlzLlA9ITE7dGhpcy5iPVtdO3RoaXMuYT17fTt0aGlzLmM9W107Yj1TKGEpO2Zvcih2YXIgYz0wLGQ9Yi5sZW5ndGg7YzxkO2MrKyliYS5jYWxsKGEsYltjXSl9O2wucHJvdG90eXBlLkw9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3RoaXMuUHx8KHRoaXMuUD0hMCxOYihmdW5jdGlvbigpe3JldHVybiBhLnZhKCl9KSl9O2wucHJvdG90eXBlLks9ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcyxiPXRoaXM7YjspYi5QJiYoYT1iKSxcbmI9Yi5VYSgpO3JldHVybiBhfTtsLnByb3RvdHlwZS5VYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuaG9zdC5nZXRSb290Tm9kZSgpO2lmKEcoYSkpZm9yKHZhciBiPXRoaXMuaG9zdC5jaGlsZE5vZGVzLGM9MCxkO2M8Yi5sZW5ndGg7YysrKWlmKGQ9YltjXSx0aGlzLmooZCkpcmV0dXJuIGF9O2wucHJvdG90eXBlLnZhPWZ1bmN0aW9uKCl7dGhpcy5QJiZ0aGlzLksoKS5fcmVuZGVyUm9vdCgpfTtsLnByb3RvdHlwZS5fcmVuZGVyUm9vdD1mdW5jdGlvbigpe3RoaXMuUD0hMTt0aGlzLkIoKTt0aGlzLnMoKX07bC5wcm90b3R5cGUuQj1mdW5jdGlvbigpe3RoaXMuZigpO2Zvcih2YXIgYT0wLGI7YTx0aGlzLmIubGVuZ3RoO2ErKyliPXRoaXMuYlthXSx0aGlzLm8oYik7Zm9yKGI9dGhpcy5ob3N0LmZpcnN0Q2hpbGQ7YjtiPWIubmV4dFNpYmxpbmcpdGhpcy5oKGIpO2ZvcihhPTA7YTx0aGlzLmIubGVuZ3RoO2ErKyl7Yj10aGlzLmJbYV07aWYoIWIuX19zaGFkeS5hc3NpZ25lZE5vZGVzLmxlbmd0aClmb3IodmFyIGM9XG5iLmZpcnN0Q2hpbGQ7YztjPWMubmV4dFNpYmxpbmcpdGhpcy5oKGMsYik7Yz1iLnBhcmVudE5vZGU7KGM9Yy5fX3NoYWR5JiZjLl9fc2hhZHkucm9vdCkmJmMudGEoKSYmYy5fcmVuZGVyUm9vdCgpO3RoaXMuZyhiLl9fc2hhZHkuUixiLl9fc2hhZHkuYXNzaWduZWROb2Rlcyk7aWYoYz1iLl9fc2hhZHkudWEpe2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKWNbZF0uX19zaGFkeS5pYT1udWxsO2IuX19zaGFkeS51YT1udWxsO2MubGVuZ3RoPmIuX19zaGFkeS5hc3NpZ25lZE5vZGVzLmxlbmd0aCYmKGIuX19zaGFkeS5rYT0hMCl9Yi5fX3NoYWR5LmthJiYoYi5fX3NoYWR5LmthPSExLHRoaXMuaShiKSl9fTtsLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEsYil7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307dmFyIGM9YS5fX3NoYWR5LmlhO2EuX19zaGFkeS5pYT1udWxsO2J8fChiPShiPXRoaXMuYVthLnNsb3R8fFwiX19jYXRjaGFsbFwiXSkmJmJbMF0pO2I/KGIuX19zaGFkeS5hc3NpZ25lZE5vZGVzLnB1c2goYSksXG5hLl9fc2hhZHkuYXNzaWduZWRTbG90PWIpOmEuX19zaGFkeS5hc3NpZ25lZFNsb3Q9dm9pZCAwO2MhPT1hLl9fc2hhZHkuYXNzaWduZWRTbG90JiZhLl9fc2hhZHkuYXNzaWduZWRTbG90JiYoYS5fX3NoYWR5LmFzc2lnbmVkU2xvdC5fX3NoYWR5LmthPSEwKX07bC5wcm90b3R5cGUubz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fc2hhZHkuYXNzaWduZWROb2RlczthLl9fc2hhZHkuYXNzaWduZWROb2Rlcz1bXTthLl9fc2hhZHkuUj1bXTtpZihhLl9fc2hhZHkudWE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXTtkLl9fc2hhZHkuaWE9ZC5fX3NoYWR5LmFzc2lnbmVkU2xvdDtkLl9fc2hhZHkuYXNzaWduZWRTbG90PT09YSYmKGQuX19zaGFkeS5hc3NpZ25lZFNsb3Q9bnVsbCl9fTtsLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZDtjPGIubGVuZ3RoJiYoZD1iW2NdKTtjKyspXCJzbG90XCI9PWQubG9jYWxOYW1lP3RoaXMuZyhhLGQuX19zaGFkeS5hc3NpZ25lZE5vZGVzKTpcbmEucHVzaChiW2NdKX07bC5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXtqYi5jYWxsKGEsbmV3IEV2ZW50KFwic2xvdGNoYW5nZVwiKSk7YS5fX3NoYWR5LmFzc2lnbmVkU2xvdCYmdGhpcy5pKGEuX19zaGFkeS5hc3NpZ25lZFNsb3QpfTtsLnByb3RvdHlwZS5zPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMuYixiPVtdLGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXS5wYXJlbnROb2RlO2QuX19zaGFkeSYmZC5fX3NoYWR5LnJvb3R8fCEoMD5iLmluZGV4T2YoZCkpfHxiLnB1c2goZCl9Zm9yKGE9MDthPGIubGVuZ3RoO2ErKyljPWJbYV0sdGhpcy5PKGM9PT10aGlzP3RoaXMuaG9zdDpjLHRoaXMudyhjKSl9O2wucHJvdG90eXBlLnc9ZnVuY3Rpb24oYSl7dmFyIGI9W107YT1hLmNoaWxkTm9kZXM7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY107aWYodGhpcy5qKGQpKXtkPWQuX19zaGFkeS5SO2Zvcih2YXIgZT0wO2U8ZC5sZW5ndGg7ZSsrKWIucHVzaChkW2VdKX1lbHNlIGIucHVzaChkKX1yZXR1cm4gYn07XG5sLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEpe3JldHVyblwic2xvdFwiPT1hLmxvY2FsTmFtZX07bC5wcm90b3R5cGUuTz1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1TKGEpLGQ9SWQoYixiLmxlbmd0aCxjLGMubGVuZ3RoKSxlPTAsZj0wLGs7ZTxkLmxlbmd0aCYmKGs9ZFtlXSk7ZSsrKXtmb3IodmFyIGc9MCxsO2c8ay5VLmxlbmd0aCYmKGw9ay5VW2ddKTtnKyspVShsKT09PWEmJmJhLmNhbGwoYSxsKSxjLnNwbGljZShrLmluZGV4K2YsMSk7Zi09ay5XfWZvcihlPTA7ZTxkLmxlbmd0aCYmKGs9ZFtlXSk7ZSsrKWZvcihmPWNbay5pbmRleF0sZz1rLmluZGV4O2c8ay5pbmRleCtrLlc7ZysrKWw9YltnXSxYYS5jYWxsKGEsbCxmKSxjLnNwbGljZShnLDAsbCl9O2wucHJvdG90eXBlLlFhPWZ1bmN0aW9uKGEpe3RoaXMuYy5wdXNoLmFwcGx5KHRoaXMuYyxbXS5jb25jYXQoYSBpbnN0YW5jZW9mIEFycmF5P2E6aGQoZ2QoYSkpKSl9O2wucHJvdG90eXBlLmY9ZnVuY3Rpb24oKXt0aGlzLmMubGVuZ3RoJiZcbih0aGlzLkcodGhpcy5jKSx0aGlzLmM9W10pfTtsLnByb3RvdHlwZS5HPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY107ZC5fX3NoYWR5PWQuX19zaGFkeXx8e307a2EoZCk7a2EoZC5wYXJlbnROb2RlKTt2YXIgZT10aGlzLmwoZCk7dGhpcy5hW2VdPyhiPWJ8fHt9LGJbZV09ITAsdGhpcy5hW2VdLnB1c2goZCkpOnRoaXMuYVtlXT1bZF07dGhpcy5iLnB1c2goZCl9aWYoYilmb3IodmFyIGYgaW4gYil0aGlzLmFbZl09dGhpcy5tKHRoaXMuYVtmXSl9O2wucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSl7dmFyIGI9YS5uYW1lfHxhLmdldEF0dHJpYnV0ZShcIm5hbWVcIil8fFwiX19jYXRjaGFsbFwiO3JldHVybiBhLk9hPWJ9O2wucHJvdG90eXBlLm09ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc29ydChmdW5jdGlvbihhLGMpe2E9eGMoYSk7Zm9yKHZhciBiPXhjKGMpLGU9MDtlPGEubGVuZ3RoO2UrKyl7Yz1hW2VdO3ZhciBmPWJbZV07aWYoYyE9PWYpcmV0dXJuIGE9XG5BcnJheS5mcm9tKGMucGFyZW50Tm9kZS5jaGlsZE5vZGVzKSxhLmluZGV4T2YoYyktYS5pbmRleE9mKGYpfX0pfTtsLnByb3RvdHlwZS5UYT1mdW5jdGlvbihhKXt0aGlzLmYoKTt2YXIgYj10aGlzLmEsYztmb3IoYyBpbiBiKWZvcih2YXIgZD1iW2NdLGU9MDtlPGQubGVuZ3RoO2UrKyl7dmFyIGY9ZFtlXTtpZihNYihhLGYpKXtkLnNwbGljZShlLDEpO3ZhciBrPXRoaXMuYi5pbmRleE9mKGYpOzA8PWsmJnRoaXMuYi5zcGxpY2UoaywxKTtlLS07dGhpcy5JKGYpO2s9ITB9fXJldHVybiBrfTtsLnByb3RvdHlwZS5WYT1mdW5jdGlvbihhKXt2YXIgYj1hLk9hLGM9dGhpcy5sKGEpO2lmKGMhPT1iKXtiPXRoaXMuYVtiXTt2YXIgZD1iLmluZGV4T2YoYSk7MDw9ZCYmYi5zcGxpY2UoZCwxKTtiPXRoaXMuYVtjXXx8KHRoaXMuYVtjXT1bXSk7Yi5wdXNoKGEpOzE8Yi5sZW5ndGgmJih0aGlzLmFbY109dGhpcy5tKGIpKX19O2wucHJvdG90eXBlLkk9ZnVuY3Rpb24oYSl7aWYoYT1hLl9fc2hhZHkuUilmb3IodmFyIGI9XG4wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdLGQ9VShjKTtkJiZiYS5jYWxsKGQsYyl9fTtsLnByb3RvdHlwZS50YT1mdW5jdGlvbigpe3RoaXMuZigpO3JldHVybiEhdGhpcy5iLmxlbmd0aH07bC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyl7XCJvYmplY3RcIiE9PXR5cGVvZiBjJiYoYz17Y2FwdHVyZTohIWN9KTtjLmdhPXRoaXM7dGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoYSxiLGMpfTtsLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXtcIm9iamVjdFwiIT09dHlwZW9mIGMmJihjPXtjYXB0dXJlOiEhY30pO2MuZ2E9dGhpczt0aGlzLmhvc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyl9O2wucHJvdG90eXBlLmdldEVsZW1lbnRCeUlkPWZ1bmN0aW9uKGEpe3JldHVybiBuYSh0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBiLmlkPT1hfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH07KGZ1bmN0aW9uKGEpe0soYSxcblNhLCEwKTtLKGEsVGEsITApfSkobC5wcm90b3R5cGUpO3ZhciBNZD17YWRkRXZlbnRMaXN0ZW5lcjpwYy5iaW5kKHdpbmRvdykscmVtb3ZlRXZlbnRMaXN0ZW5lcjp0Yy5iaW5kKHdpbmRvdyl9LExkPXthZGRFdmVudExpc3RlbmVyOnBjLHJlbW92ZUV2ZW50TGlzdGVuZXI6dGMsYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFVhKHRoaXMsYSl9LGluc2VydEJlZm9yZTpmdW5jdGlvbihhLGIpe3JldHVybiBVYSh0aGlzLGEsYil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKGEpe3JldHVybiBWYSh0aGlzLGEpfSxyZXBsYWNlQ2hpbGQ6ZnVuY3Rpb24oYSxiKXtVYSh0aGlzLGEsYik7VmEodGhpcyxiKTtyZXR1cm4gYX0sY2xvbmVOb2RlOmZ1bmN0aW9uKGEpe2lmKFwidGVtcGxhdGVcIj09dGhpcy5sb2NhbE5hbWUpdmFyIGI9aWIuY2FsbCh0aGlzLGEpO2Vsc2UgaWYoYj1pYi5jYWxsKHRoaXMsITEpLGEpe2E9dGhpcy5jaGlsZE5vZGVzO2Zvcih2YXIgYz0wLGQ7YzxhLmxlbmd0aDtjKyspZD1cbmFbY10uY2xvbmVOb2RlKCEwKSxiLmFwcGVuZENoaWxkKGQpfXJldHVybiBifSxnZXRSb290Tm9kZTpmdW5jdGlvbigpe3JldHVybiBnYyh0aGlzKX0sY29udGFpbnM6ZnVuY3Rpb24oYSl7cmV0dXJuIE1iKHRoaXMsYSl9LGdldCBpc0Nvbm5lY3RlZCgpe3ZhciBhPXRoaXMub3duZXJEb2N1bWVudDtpZihWZCYmY2EuY2FsbChhLHRoaXMpfHxhLmRvY3VtZW50RWxlbWVudCYmY2EuY2FsbChhLmRvY3VtZW50RWxlbWVudCx0aGlzKSlyZXR1cm4hMDtmb3IoYT10aGlzO2EmJiEoYSBpbnN0YW5jZW9mIERvY3VtZW50KTspYT1hLnBhcmVudE5vZGV8fChhIGluc3RhbmNlb2YgbD9hLmhvc3Q6dm9pZCAwKTtyZXR1cm4hIShhJiZhIGluc3RhbmNlb2YgRG9jdW1lbnQpfSxkaXNwYXRjaEV2ZW50OmZ1bmN0aW9uKGEpe21hKCk7cmV0dXJuIGpiLmNhbGwodGhpcyxhKX19LE5kPXtnZXQgYXNzaWduZWRTbG90KCl7cmV0dXJuIHljKHRoaXMpfX0sYmI9e3F1ZXJ5U2VsZWN0b3I6ZnVuY3Rpb24oYSl7cmV0dXJuIG5hKHRoaXMsXG5mdW5jdGlvbihiKXtyZXR1cm4gTWMuY2FsbChiLGEpfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH0scXVlcnlTZWxlY3RvckFsbDpmdW5jdGlvbihhKXtyZXR1cm4gbmEodGhpcyxmdW5jdGlvbihiKXtyZXR1cm4gTWMuY2FsbChiLGEpfSl9fSxCYz17YXNzaWduZWROb2RlczpmdW5jdGlvbihhKXtpZihcInNsb3RcIj09PXRoaXMubG9jYWxOYW1lKXJldHVybiBpYyh0aGlzKSx0aGlzLl9fc2hhZHk/KGEmJmEuZmxhdHRlbj90aGlzLl9fc2hhZHkuUjp0aGlzLl9fc2hhZHkuYXNzaWduZWROb2Rlcyl8fFtdOltdfX0semM9TmEoe3NldEF0dHJpYnV0ZTpmdW5jdGlvbihhLGIpe2pjKHRoaXMsYSxiKX0scmVtb3ZlQXR0cmlidXRlOmZ1bmN0aW9uKGEpe05jLmNhbGwodGhpcyxhKTtmYyh0aGlzLGEpfSxhdHRhY2hTaGFkb3c6ZnVuY3Rpb24oYSl7aWYoIXRoaXMpdGhyb3dcIk11c3QgcHJvdmlkZSBhIGhvc3QuXCI7aWYoIWEpdGhyb3dcIk5vdCBlbm91Z2ggYXJndW1lbnRzLlwiO3JldHVybiBuZXcgbChIYixcbnRoaXMsYSl9LGdldCBzbG90KCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwic2xvdFwiKX0sc2V0IHNsb3QoYSl7amModGhpcyxcInNsb3RcIixhKX0sZ2V0IGFzc2lnbmVkU2xvdCgpe3JldHVybiB5Yyh0aGlzKX19LGJiLEJjKTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyh6YyxPYyk7dmFyIEFjPU5hKHtpbXBvcnROb2RlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGxjKGEsYil9LGdldEVsZW1lbnRCeUlkOmZ1bmN0aW9uKGEpe3JldHVybiBuYSh0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBiLmlkPT1hfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH19LGJiKTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhBYyx7X2FjdGl2ZUVsZW1lbnQ6VGEuYWN0aXZlRWxlbWVudH0pO3ZhciBiZT1IVE1MRWxlbWVudC5wcm90b3R5cGUuYmx1cixPZD1OYSh7Ymx1cjpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5LnJvb3Q7KGE9YSYmYS5hY3RpdmVFbGVtZW50KT9cbmEuYmx1cigpOmJlLmNhbGwodGhpcyl9fSk7RS56YSYmKHdpbmRvdy5TaGFkeURPTT17aW5Vc2U6RS56YSxwYXRjaDpmdW5jdGlvbihhKXtyZXR1cm4gYX0saXNTaGFkeVJvb3Q6RyxlbnF1ZXVlOk5iLGZsdXNoOm1hLHNldHRpbmdzOkUsZmlsdGVyTXV0YXRpb25zOkJkLG9ic2VydmVDaGlsZHJlbjp6ZCx1bm9ic2VydmVDaGlsZHJlbjp5ZCxuYXRpdmVNZXRob2RzOldkLG5hdGl2ZVRyZWU6WGR9LHdpbmRvdy5FdmVudD1aZCx3aW5kb3cuQ3VzdG9tRXZlbnQ9JGQsd2luZG93Lk1vdXNlRXZlbnQ9YWUsSGQoKSxLZCgpLHdpbmRvdy5TaGFkb3dSb290PWwpO3ZhciBQZD1uZXcgU2V0KFwiYW5ub3RhdGlvbi14bWwgY29sb3ItcHJvZmlsZSBmb250LWZhY2UgZm9udC1mYWNlLXNyYyBmb250LWZhY2UtdXJpIGZvbnQtZmFjZS1mb3JtYXQgZm9udC1mYWNlLW5hbWUgbWlzc2luZy1nbHlwaFwiLnNwbGl0KFwiIFwiKSk7Qi5wcm90b3R5cGUuQj1mdW5jdGlvbihhLGIpe3RoaXMuby5zZXQoYSxiKTtcbnRoaXMubS5zZXQoYi5jb25zdHJ1Y3RvcixiKX07Qi5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vLmdldChhKX07Qi5wcm90b3R5cGUudz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5tLmdldChhKX07Qi5wcm90b3R5cGUucz1mdW5jdGlvbihhKXt0aGlzLmg9ITA7dGhpcy5qLnB1c2goYSl9O0IucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczt0aGlzLmgmJk8oYSxmdW5jdGlvbihhKXtyZXR1cm4gYi5nKGEpfSl9O0IucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7aWYodGhpcy5oJiYhYS5fX0NFX3BhdGNoZWQpe2EuX19DRV9wYXRjaGVkPSEwO2Zvcih2YXIgYj0wO2I8dGhpcy5qLmxlbmd0aDtiKyspdGhpcy5qW2JdKGEpfX07Qi5wcm90b3R5cGUuYj1mdW5jdGlvbihhKXt2YXIgYj1bXTtPKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIucHVzaChhKX0pO2ZvcihhPTA7YTxiLmxlbmd0aDthKyspe3ZhciBjPWJbYV07MT09PWMuX19DRV9zdGF0ZT90aGlzLmNvbm5lY3RlZENhbGxiYWNrKGMpOlxudGhpcy5pKGMpfX07Qi5wcm90b3R5cGUuYT1mdW5jdGlvbihhKXt2YXIgYj1bXTtPKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIucHVzaChhKX0pO2ZvcihhPTA7YTxiLmxlbmd0aDthKyspe3ZhciBjPWJbYV07MT09PWMuX19DRV9zdGF0ZSYmdGhpcy5kaXNjb25uZWN0ZWRDYWxsYmFjayhjKX19O0IucHJvdG90eXBlLmY9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO2I9Yj9iOnt9O3ZhciBkPWIua2J8fG5ldyBTZXQsZT1iLkRhfHxmdW5jdGlvbihhKXtyZXR1cm4gYy5pKGEpfSxmPVtdO08oYSxmdW5jdGlvbihhKXtpZihcImxpbmtcIj09PWEubG9jYWxOYW1lJiZcImltcG9ydFwiPT09YS5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpe3ZhciBiPWEuaW1wb3J0O2IgaW5zdGFuY2VvZiBOb2RlJiZcImNvbXBsZXRlXCI9PT1iLnJlYWR5U3RhdGU/KGIuX19DRV9pc0ltcG9ydERvY3VtZW50PSEwLGIuX19DRV9oYXNSZWdpc3RyeT0hMCk6YS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7dmFyIGI9XG5hLmltcG9ydDtpZighYi5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQpe2IuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkPSEwO2IuX19DRV9pc0ltcG9ydERvY3VtZW50PSEwO2IuX19DRV9oYXNSZWdpc3RyeT0hMDt2YXIgZj1uZXcgU2V0KGQpO2YuZGVsZXRlKGIpO2MuZihiLHtrYjpmLERhOmV9KX19KX1lbHNlIGYucHVzaChhKX0sZCk7aWYodGhpcy5oKWZvcihhPTA7YTxmLmxlbmd0aDthKyspdGhpcy5nKGZbYV0pO2ZvcihhPTA7YTxmLmxlbmd0aDthKyspZShmW2FdKX07Qi5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXtpZih2b2lkIDA9PT1hLl9fQ0Vfc3RhdGUpe3ZhciBiPXRoaXMuYyhhLmxvY2FsTmFtZSk7aWYoYil7Yi5jb25zdHJ1Y3Rpb25TdGFjay5wdXNoKGEpO3ZhciBjPWIuY29uc3RydWN0b3I7dHJ5e3RyeXtpZihuZXcgYyE9PWEpdGhyb3cgRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IgZGlkIG5vdCBwcm9kdWNlIHRoZSBlbGVtZW50IGJlaW5nIHVwZ3JhZGVkLlwiKTtcbn1maW5hbGx5e2IuY29uc3RydWN0aW9uU3RhY2sucG9wKCl9fWNhdGNoKGYpe3Rocm93IGEuX19DRV9zdGF0ZT0yLGY7fWEuX19DRV9zdGF0ZT0xO2EuX19DRV9kZWZpbml0aW9uPWI7aWYoYi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spZm9yKGI9Yi5vYnNlcnZlZEF0dHJpYnV0ZXMsYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdLGU9YS5nZXRBdHRyaWJ1dGUoZCk7bnVsbCE9PWUmJnRoaXMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGEsZCxudWxsLGUsbnVsbCl9dChhKSYmdGhpcy5jb25uZWN0ZWRDYWxsYmFjayhhKX19fTtCLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtiLmNvbm5lY3RlZENhbGxiYWNrJiZiLmNvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9O0IucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPWEuX19DRV9kZWZpbml0aW9uO2IuZGlzY29ubmVjdGVkQ2FsbGJhY2smJlxuYi5kaXNjb25uZWN0ZWRDYWxsYmFjay5jYWxsKGEpfTtCLnByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1hLl9fQ0VfZGVmaW5pdGlvbjtmLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayYmLTE8Zi5vYnNlcnZlZEF0dHJpYnV0ZXMuaW5kZXhPZihiKSYmZi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2suY2FsbChhLGIsYyxkLGUpfTtKYS5wcm90b3R5cGUuYz1mdW5jdGlvbigpe3RoaXMuTSYmdGhpcy5NLmRpc2Nvbm5lY3QoKX07SmEucHJvdG90eXBlLmY9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hLnJlYWR5U3RhdGU7XCJpbnRlcmFjdGl2ZVwiIT09YiYmXCJjb21wbGV0ZVwiIT09Ynx8dGhpcy5jKCk7Zm9yKGI9MDtiPGEubGVuZ3RoO2IrKylmb3IodmFyIGM9YVtiXS5hZGRlZE5vZGVzLGQ9MDtkPGMubGVuZ3RoO2QrKyl0aGlzLmIuZihjW2RdKX07R2IucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXtpZih0aGlzLmEpdGhyb3cgRXJyb3IoXCJBbHJlYWR5IHJlc29sdmVkLlwiKTtcbnRoaXMuYT12b2lkIDA7dGhpcy5iJiZ0aGlzLmIodm9pZCAwKX07eS5wcm90b3R5cGUuZGVmaW5lPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztpZighKGIgaW5zdGFuY2VvZiBGdW5jdGlvbikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9ycyBtdXN0IGJlIGZ1bmN0aW9ucy5cIik7aWYoIUNjKGEpKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSBlbGVtZW50IG5hbWUgJ1wiK2ErXCInIGlzIG5vdCB2YWxpZC5cIik7aWYodGhpcy5hLmMoYSkpdGhyb3cgRXJyb3IoXCJBIGN1c3RvbSBlbGVtZW50IHdpdGggbmFtZSAnXCIrYStcIicgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLlwiKTtpZih0aGlzLmMpdGhyb3cgRXJyb3IoXCJBIGN1c3RvbSBlbGVtZW50IGlzIGFscmVhZHkgYmVpbmcgZGVmaW5lZC5cIik7dGhpcy5jPSEwO3RyeXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1lW2FdO2lmKHZvaWQgMCE9PWImJiEoYiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSl0aHJvdyBFcnJvcihcIlRoZSAnXCIrXG5hK1wiJyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO3JldHVybiBifSxlPWIucHJvdG90eXBlO2lmKCEoZSBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcidzIHByb3RvdHlwZSBpcyBub3QgYW4gb2JqZWN0LlwiKTt2YXIgZj1kKFwiY29ubmVjdGVkQ2FsbGJhY2tcIik7dmFyIGc9ZChcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIpO3ZhciBoPWQoXCJhZG9wdGVkQ2FsbGJhY2tcIik7dmFyIGw9ZChcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiKTt2YXIgbj1iLm9ic2VydmVkQXR0cmlidXRlc3x8W119Y2F0Y2gobSl7cmV0dXJufWZpbmFsbHl7dGhpcy5jPSExfWI9e2xvY2FsTmFtZTphLGNvbnN0cnVjdG9yOmIsY29ubmVjdGVkQ2FsbGJhY2s6ZixkaXNjb25uZWN0ZWRDYWxsYmFjazpnLGFkb3B0ZWRDYWxsYmFjazpoLGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjazpsLG9ic2VydmVkQXR0cmlidXRlczpuLGNvbnN0cnVjdGlvblN0YWNrOltdfTtcbnRoaXMuYS5CKGEsYik7dGhpcy5nLnB1c2goYik7dGhpcy5ifHwodGhpcy5iPSEwLHRoaXMuZihmdW5jdGlvbigpe3JldHVybiBjLmooKX0pKX07eS5wcm90b3R5cGUuaj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7aWYoITEhPT10aGlzLmIpe3RoaXMuYj0hMTtmb3IodmFyIGI9dGhpcy5nLGM9W10sZD1uZXcgTWFwLGU9MDtlPGIubGVuZ3RoO2UrKylkLnNldChiW2VdLmxvY2FsTmFtZSxbXSk7dGhpcy5hLmYoZG9jdW1lbnQse0RhOmZ1bmN0aW9uKGIpe2lmKHZvaWQgMD09PWIuX19DRV9zdGF0ZSl7dmFyIGU9Yi5sb2NhbE5hbWUsZj1kLmdldChlKTtmP2YucHVzaChiKTphLmEuYyhlKSYmYy5wdXNoKGIpfX19KTtmb3IoZT0wO2U8Yy5sZW5ndGg7ZSsrKXRoaXMuYS5pKGNbZV0pO2Zvcig7MDxiLmxlbmd0aDspe3ZhciBmPWIuc2hpZnQoKTtlPWYubG9jYWxOYW1lO2Y9ZC5nZXQoZi5sb2NhbE5hbWUpO2Zvcih2YXIgZz0wO2c8Zi5sZW5ndGg7ZysrKXRoaXMuYS5pKGZbZ10pOyhlPXRoaXMuaC5nZXQoZSkpJiZcbmUuYygpfX19O3kucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtpZihhPXRoaXMuYS5jKGEpKXJldHVybiBhLmNvbnN0cnVjdG9yfTt5LnByb3RvdHlwZS53aGVuRGVmaW5lZD1mdW5jdGlvbihhKXtpZighQ2MoYSkpcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBTeW50YXhFcnJvcihcIidcIithK1wiJyBpcyBub3QgYSB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lLlwiKSk7dmFyIGI9dGhpcy5oLmdldChhKTtpZihiKXJldHVybiBiLmY7Yj1uZXcgR2I7dGhpcy5oLnNldChhLGIpO3RoaXMuYS5jKGEpJiYhdGhpcy5nLnNvbWUoZnVuY3Rpb24oYil7cmV0dXJuIGIubG9jYWxOYW1lPT09YX0pJiZiLmMoKTtyZXR1cm4gYi5mfTt5LnByb3RvdHlwZS5sPWZ1bmN0aW9uKGEpe3RoaXMuaS5jKCk7dmFyIGI9dGhpcy5mO3RoaXMuZj1mdW5jdGlvbihjKXtyZXR1cm4gYShmdW5jdGlvbigpe3JldHVybiBiKGMpfSl9fTt3aW5kb3cuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5PXk7eS5wcm90b3R5cGUuZGVmaW5lPVxueS5wcm90b3R5cGUuZGVmaW5lO3kucHJvdG90eXBlLmdldD15LnByb3RvdHlwZS5nZXQ7eS5wcm90b3R5cGUud2hlbkRlZmluZWQ9eS5wcm90b3R5cGUud2hlbkRlZmluZWQ7eS5wcm90b3R5cGUucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaz15LnByb3RvdHlwZS5sO3ZhciBFYT13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQsdGQ9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50TlMsc2Q9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlLHVkPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUucHJlcGVuZCx2ZD13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmFwcGVuZCxjZT13aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUucHJlcGVuZCxkZT13aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUuYXBwZW5kLHdiPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5jbG9uZU5vZGUsaWE9d2luZG93Lk5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkLFxuRGI9d2luZG93Lk5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZSxGYT13aW5kb3cuTm9kZS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQsRWI9d2luZG93Lk5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCxJYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5Ob2RlLnByb3RvdHlwZSxcInRleHRDb250ZW50XCIpLHZiPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3csQ2E9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksR2E9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZSx4Yj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlLHpiPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsamE9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZU5TLHliPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVOUyxcbkFiPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGVOUyxDYj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50LGpkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5wcmVwZW5kLGtkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hcHBlbmQsbWQ9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmJlZm9yZSxuZD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWZ0ZXIsb2Q9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VXaXRoLHBkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUseGQ9d2luZG93LkhUTUxFbGVtZW50LERhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSxCYj13aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudCxGYj1uZXcgZnVuY3Rpb24oKXt9LHRhPXdpbmRvdy5jdXN0b21FbGVtZW50cztcbmlmKCF0YXx8dGEuZm9yY2VQb2x5ZmlsbHx8XCJmdW5jdGlvblwiIT10eXBlb2YgdGEuZGVmaW5lfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiB0YS5nZXQpe3ZhciBZPW5ldyBCO3dkKFkpO3JkKFkpO0hhKFksRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUse1o6Y2UsYXBwZW5kOmRlfSk7cWQoWSk7aWQoWSk7ZG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT0hMDt2YXIgZWU9bmV3IHkoWSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdyxcImN1c3RvbUVsZW1lbnRzXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOmVlfSl9dmFyIEk9e1NUWUxFX1JVTEU6MSxkYTo3LE1FRElBX1JVTEU6NCxuYToxRTN9LEY9e1lhOi9cXC9cXCpbXipdKlxcKisoW14vKl1bXipdKlxcKispKlxcLy9naW0scG9ydDovQGltcG9ydFteO10qOy9naW0sd2E6Lyg/Ol5bXjtcXC1cXHN9XSspPy0tW147e31dKj86W157fTtdKj8oPzpbO1xcbl18JCkvZ2ltLEFhOi8oPzpeW147XFwtXFxzfV0rKT8tLVteO3t9XSo/Oltee307XSo/e1tefV0qP30oPzpbO1xcbl18JCk/L2dpbSxcbmViOi9AYXBwbHlcXHMqXFwoP1teKTtdKlxcKT9cXHMqKD86WztcXG5dfCQpPy9naW0samI6L1teOzpdKj86W147XSo/dmFyXFwoW147XSpcXCkoPzpbO1xcbl18JCk/L2dpbSxjYjovXkBbXlxcc10qa2V5ZnJhbWVzLyxCYTovXFxzKy9nfSx6PSEod2luZG93LlNoYWR5RE9NJiZ3aW5kb3cuU2hhZHlET00uaW5Vc2UpO2lmKHdpbmRvdy5TaGFkeUNTUyYmdm9pZCAwIT09d2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzcyl2YXIgQT13aW5kb3cuU2hhZHlDU1MubmF0aXZlQ3NzO2Vsc2Ugd2luZG93LlNoYWR5Q1NTPyhGYyh3aW5kb3cuU2hhZHlDU1MpLHdpbmRvdy5TaGFkeUNTUz12b2lkIDApOkZjKHdpbmRvdy5XZWJDb21wb25lbnRzJiZ3aW5kb3cuV2ViQ29tcG9uZW50cy5mbGFncyk7dmFyIHVhPS8oPzpefFs7XFxze11cXHMqKSgtLVtcXHctXSo/KVxccyo6XFxzKig/OigoPzonKD86XFxcXCd8LikqPyd8XCIoPzpcXFxcXCJ8LikqP1wifFxcKFteKV0qP1xcKXxbXn07e10pKyl8XFx7KFtefV0qKVxcfSg/Oig/PVs7XFxzfV0pfCQpKS9naSxcbnZhPS8oPzpefFxcVyspQGFwcGx5XFxzKlxcKD8oW14pO1xcbl0qKVxcKT8vZ2ksZmU9LygtLVtcXHctXSspXFxzKihbOiw7KV18JCkvZ2ksZ2U9LyhhbmltYXRpb25cXHMqOil8KGFuaW1hdGlvbi1uYW1lXFxzKjopLyxSZD0vQG1lZGlhXFxzKC4qKS8saGU9L1xce1tefV0qXFx9L2csUT1udWxsO3UucHJvdG90eXBlLmI9ZnVuY3Rpb24oYSxiLGMpe2EuX19zdHlsZVNjb3BlZD9hLl9fc3R5bGVTY29wZWQ9bnVsbDp0aGlzLmooYSxifHxcIlwiLGMpfTt1LnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEsYixjKXthLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJnRoaXMuaChhLGIsYyk7aWYoYT1cInRlbXBsYXRlXCI9PT1hLmxvY2FsTmFtZT8oYS5jb250ZW50fHxhLm9iKS5jaGlsZE5vZGVzOmEuY2hpbGRyZW58fGEuY2hpbGROb2Rlcylmb3IodmFyIGQ9MDtkPGEubGVuZ3RoO2QrKyl0aGlzLmooYVtkXSxiLGMpfTt1LnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEsYixjKXtpZihiKWlmKGEuY2xhc3NMaXN0KWM/KGEuY2xhc3NMaXN0LnJlbW92ZShcInN0eWxlLXNjb3BlXCIpLFxuYS5jbGFzc0xpc3QucmVtb3ZlKGIpKTooYS5jbGFzc0xpc3QuYWRkKFwic3R5bGUtc2NvcGVcIiksYS5jbGFzc0xpc3QuYWRkKGIpKTtlbHNlIGlmKGEuZ2V0QXR0cmlidXRlKXt2YXIgZD1hLmdldEF0dHJpYnV0ZShpZSk7Yz9kJiYoYj1kLnJlcGxhY2UoXCJzdHlsZS1zY29wZVwiLFwiXCIpLnJlcGxhY2UoYixcIlwiKSxxYShhLGIpKTpxYShhLChkP2QrXCIgXCI6XCJcIikrXCJzdHlsZS1zY29wZSBcIitiKX19O3UucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEuX19jc3NCdWlsZDt6fHxcInNoYWR5XCI9PT1kP2I9VihiLGMpOihhPVIoYSksYj10aGlzLkcoYixhLmlzLGEuVixjKStcIlxcblxcblwiKTtyZXR1cm4gYi50cmltKCl9O3UucHJvdG90eXBlLkc9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dGhpcy5mKGIsYyk7Yj10aGlzLmkoYik7dmFyIGY9dGhpcztyZXR1cm4gVihhLGZ1bmN0aW9uKGEpe2EuY3x8KGYuSShhLGIsZSksYS5jPSEwKTtkJiZkKGEsYixlKX0pfTt1LnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe3JldHVybiBhP1xuamUrYTpcIlwifTt1LnByb3RvdHlwZS5mPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/XCJbaXM9XCIrYStcIl1cIjphfTt1LnByb3RvdHlwZS5JPWZ1bmN0aW9uKGEsYixjKXt0aGlzLmwoYSx0aGlzLmcsYixjKX07dS5wcm90b3R5cGUubD1mdW5jdGlvbihhLGIsYyxkKXthLnNlbGVjdG9yPWEudj10aGlzLm0oYSxiLGMsZCl9O3UucHJvdG90eXBlLm09ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9YS5zZWxlY3Rvci5zcGxpdChQYyk7aWYoIUdjKGEpKXthPTA7Zm9yKHZhciBmPWUubGVuZ3RoLGc7YTxmJiYoZz1lW2FdKTthKyspZVthXT1iLmNhbGwodGhpcyxnLGMsZCl9cmV0dXJuIGUuam9pbihQYyl9O3UucHJvdG90eXBlLnM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShtYixmdW5jdGlvbihhLGMsZCl7LTE8ZC5pbmRleE9mKFwiK1wiKT9kPWQucmVwbGFjZSgvXFwrL2csXCJfX19cIik6LTE8ZC5pbmRleE9mKFwiX19fXCIpJiYoZD1kLnJlcGxhY2UoL19fXy9nLFwiK1wiKSk7cmV0dXJuXCI6XCIrYytcIihcIitcbmQrXCIpXCJ9KX07dS5wcm90b3R5cGUuZz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcyxlPSExO2E9YS50cmltKCk7dmFyIGY9bWIudGVzdChhKTtmJiYoYT1hLnJlcGxhY2UobWIsZnVuY3Rpb24oYSxiLGMpe3JldHVyblwiOlwiK2IrXCIoXCIrYy5yZXBsYWNlKC9cXHMvZyxcIlwiKStcIilcIn0pLGE9dGhpcy5zKGEpKTthPWEucmVwbGFjZShrZSxuYitcIiAkMVwiKTthPWEucmVwbGFjZShsZSxmdW5jdGlvbihhLGYsZyl7ZXx8KGE9ZC5CKGcsZixiLGMpLGU9ZXx8YS5zdG9wLGY9YS5YYSxnPWEudmFsdWUpO3JldHVybiBmK2d9KTtmJiYoYT10aGlzLnMoYSkpO3JldHVybiBhfTt1LnByb3RvdHlwZS5CPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWEuaW5kZXhPZihvYik7MDw9YS5pbmRleE9mKG5iKT9hPXRoaXMuRihhLGQpOjAhPT1lJiYoYT1jP3RoaXMubyhhLGMpOmEpO2M9ITE7MDw9ZSYmKGI9XCJcIixjPSEwKTtpZihjKXt2YXIgZj0hMDtjJiYoYT1hLnJlcGxhY2UobWUsZnVuY3Rpb24oYSxiKXtyZXR1cm5cIiA+IFwiK1xuYn0pKX1hPWEucmVwbGFjZShuZSxmdW5jdGlvbihhLGIsYyl7cmV0dXJuJ1tkaXI9XCInK2MrJ1wiXSAnK2IrXCIsIFwiK2IrJ1tkaXI9XCInK2MrJ1wiXSd9KTtyZXR1cm57dmFsdWU6YSxYYTpiLHN0b3A6Zn19O3UucHJvdG90eXBlLm89ZnVuY3Rpb24oYSxiKXthPWEuc3BsaXQoUWMpO2FbMF0rPWI7cmV0dXJuIGEuam9pbihRYyl9O3UucHJvdG90eXBlLkY9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLm1hdGNoKFJjKTtyZXR1cm4oYz1jJiZjWzJdLnRyaW0oKXx8XCJcIik/Y1swXS5tYXRjaChTYyk/YS5yZXBsYWNlKFJjLGZ1bmN0aW9uKGEsYyxmKXtyZXR1cm4gYitmfSk6Yy5zcGxpdChTYylbMF09PT1iP2M6b2U6YS5yZXBsYWNlKG5iLGIpfTt1LnByb3RvdHlwZS5IPWZ1bmN0aW9uKGEpe2Euc2VsZWN0b3I9YS5wYXJzZWRTZWxlY3Rvcjt0aGlzLncoYSk7dGhpcy5sKGEsdGhpcy5LKX07dS5wcm90b3R5cGUudz1mdW5jdGlvbihhKXthLnNlbGVjdG9yPT09cGUmJihhLnNlbGVjdG9yPVwiaHRtbFwiKX07XG51LnByb3RvdHlwZS5LPWZ1bmN0aW9uKGEpe3JldHVybiBhLm1hdGNoKG9iKT90aGlzLmcoYSxUYyk6dGhpcy5vKGEudHJpbSgpLFRjKX07Si5PYmplY3QuZGVmaW5lUHJvcGVydGllcyh1LnByb3RvdHlwZSx7YTp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHlsZS1zY29wZVwifX19KTt2YXIgbWI9LzoobnRoWy1cXHddKylcXCgoW14pXSspXFwpLyxUYz1cIjpub3QoLnN0eWxlLXNjb3BlKVwiLFBjPVwiLFwiLGxlPS8oXnxbXFxzPit+XSspKCg/OlxcWy4rP1xcXXxbXlxccz4rfj1bXSkrKS9nLFNjPS9bWy46IypdLyxuYj1cIjpob3N0XCIscGU9XCI6cm9vdFwiLG9iPVwiOjpzbG90dGVkXCIsa2U9bmV3IFJlZ0V4cChcIl4oXCIrb2IrXCIpXCIpLFJjPS8oOmhvc3QpKD86XFwoKCg/OlxcKFteKShdKlxcKXxbXikoXSopKz8pXFwpKS8sbWU9Lyg/Ojo6c2xvdHRlZCkoPzpcXCgoKD86XFwoW14pKF0qXFwpfFteKShdKikrPylcXCkpLyxuZT0vKC4qKTpkaXJcXCgoPzoobHRyfHJ0bCkpXFwpLyxcbmplPVwiLlwiLFFjPVwiOlwiLGllPVwiY2xhc3NcIixvZT1cInNob3VsZF9ub3RfbWF0Y2hcIixwPW5ldyB1O3YuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBhP2EuX19zdHlsZUluZm86bnVsbH07di5zZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5fX3N0eWxlSW5mbz1ifTt2LnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuRH07di5wcm90b3R5cGUuX2dldFN0eWxlUnVsZXM9di5wcm90b3R5cGUuYzt2YXIgVWM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEubWF0Y2hlc3x8YS5tYXRjaGVzU2VsZWN0b3J8fGEubW96TWF0Y2hlc1NlbGVjdG9yfHxhLm1zTWF0Y2hlc1NlbGVjdG9yfHxhLm9NYXRjaGVzU2VsZWN0b3J8fGEud2Via2l0TWF0Y2hlc1NlbGVjdG9yfSh3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpLHFlPW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goXCJUcmlkZW50XCIpO24ucHJvdG90eXBlLkg9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPXt9LGQ9W10sZT0wO1coYSxmdW5jdGlvbihhKXtiLmMoYSk7XG5hLmluZGV4PWUrKztiLkcoYS51LmNzc1RleHQsYyl9LGZ1bmN0aW9uKGEpe2QucHVzaChhKX0pO2EuYj1kO2E9W107Zm9yKHZhciBmIGluIGMpYS5wdXNoKGYpO3JldHVybiBhfTtuLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEpe2lmKCFhLnUpe3ZhciBiPXt9LGM9e307dGhpcy5iKGEsYykmJihiLkM9YyxhLnJ1bGVzPW51bGwpO2IuY3NzVGV4dD10aGlzLkYoYSk7YS51PWJ9fTtuLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS51O2lmKGMpe2lmKGMuQylyZXR1cm4gT2JqZWN0LmFzc2lnbihiLGMuQyksITB9ZWxzZXtjPWEucGFyc2VkQ3NzVGV4dDtmb3IodmFyIGQ7YT11YS5leGVjKGMpOyl7ZD0oYVsyXXx8YVszXSkudHJpbSgpO2lmKFwiaW5oZXJpdFwiIT09ZHx8XCJ1bnNldFwiIT09ZCliW2FbMV0udHJpbSgpXT1kO2Q9ITB9cmV0dXJuIGR9fTtuLnByb3RvdHlwZS5GPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLksoYS5wYXJzZWRDc3NUZXh0KX07bi5wcm90b3R5cGUuSz1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKGhlLFxuXCJcIikucmVwbGFjZSh1YSxcIlwiKX07bi5wcm90b3R5cGUuRz1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYztjPWZlLmV4ZWMoYSk7KXt2YXIgZD1jWzFdO1wiOlwiIT09Y1syXSYmKGJbZF09ITApfX07bi5wcm90b3R5cGUuYWE9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpLGM9MCxkO2M8Yi5sZW5ndGg7YysrKWQ9YltjXSxhW2RdPXRoaXMuYShhW2RdLGEpfTtuLnByb3RvdHlwZS5hPWZ1bmN0aW9uKGEsYil7aWYoYSlpZigwPD1hLmluZGV4T2YoXCI7XCIpKWE9dGhpcy5mKGEsYik7ZWxzZXt2YXIgYz10aGlzO2E9SWMoYSxmdW5jdGlvbihhLGUsZixnKXtpZighZSlyZXR1cm4gYStnOyhlPWMuYShiW2VdLGIpKSYmXCJpbml0aWFsXCIhPT1lP1wiYXBwbHktc2hpbS1pbmhlcml0XCI9PT1lJiYoZT1cImluaGVyaXRcIik6ZT1jLmEoYltmXXx8ZixiKXx8ZjtyZXR1cm4gYSsoZXx8XCJcIikrZ30pfXJldHVybiBhJiZhLnRyaW0oKXx8XCJcIn07bi5wcm90b3R5cGUuZj1mdW5jdGlvbihhLFxuYil7YT1hLnNwbGl0KFwiO1wiKTtmb3IodmFyIGM9MCxkLGU7YzxhLmxlbmd0aDtjKyspaWYoZD1hW2NdKXt2YS5sYXN0SW5kZXg9MDtpZihlPXZhLmV4ZWMoZCkpZD10aGlzLmEoYltlWzFdXSxiKTtlbHNlIGlmKGU9ZC5pbmRleE9mKFwiOlwiKSwtMSE9PWUpe3ZhciBmPWQuc3Vic3RyaW5nKGUpO2Y9Zi50cmltKCk7Zj10aGlzLmEoZixiKXx8ZjtkPWQuc3Vic3RyaW5nKDAsZSkrZn1hW2NdPWQmJmQubGFzdEluZGV4T2YoXCI7XCIpPT09ZC5sZW5ndGgtMT9kLnNsaWNlKDAsLTEpOmR8fFwiXCJ9cmV0dXJuIGEuam9pbihcIjtcIil9O24ucHJvdG90eXBlLkI9ZnVuY3Rpb24oYSxiKXt2YXIgYz1cIlwiO2EudXx8dGhpcy5jKGEpO2EudS5jc3NUZXh0JiYoYz10aGlzLmYoYS51LmNzc1RleHQsYikpO2EuY3NzVGV4dD1jfTtuLnByb3RvdHlwZS53PWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5jc3NUZXh0LGQ9YS5jc3NUZXh0O251bGw9PWEueWEmJihhLnlhPWdlLnRlc3QoYykpO2lmKGEueWEpaWYobnVsbD09XG5hLlkpe2EuWT1bXTtmb3IodmFyIGUgaW4gYilkPWJbZV0sZD1kKGMpLGMhPT1kJiYoYz1kLGEuWS5wdXNoKGUpKX1lbHNle2ZvcihlPTA7ZTxhLlkubGVuZ3RoOysrZSlkPWJbYS5ZW2VdXSxjPWQoYyk7ZD1jfWEuY3NzVGV4dD1kfTtuLnByb3RvdHlwZS5PPWZ1bmN0aW9uKGEsYil7dmFyIGM9e30sZD10aGlzLGU9W107VyhhLGZ1bmN0aW9uKGEpe2EudXx8ZC5jKGEpO3ZhciBmPWEudnx8YS5wYXJzZWRTZWxlY3RvcjtiJiZhLnUuQyYmZiYmVWMuY2FsbChiLGYpJiYoZC5iKGEsYyksYT1hLmluZGV4LGY9cGFyc2VJbnQoYS8zMiwxMCksZVtmXT0oZVtmXXx8MCl8MTw8YSUzMil9LG51bGwsITApO3JldHVybntDOmMsa2V5OmV9fTtuLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhLGIsYyxkKXtiLnV8fHRoaXMuYyhiKTtpZihiLnUuQyl7dmFyIGU9UihhKTthPWUuaXM7ZT1lLlY7ZT1hP3AuZihhLGUpOlwiaHRtbFwiO3ZhciBmPWIucGFyc2VkU2VsZWN0b3IsZz1cIjpob3N0ID4gKlwiPT09Znx8XG5cImh0bWxcIj09PWYsaD0wPT09Zi5pbmRleE9mKFwiOmhvc3RcIikmJiFnO1wic2hhZHlcIj09PWMmJihnPWY9PT1lK1wiID4gKi5cIitlfHwtMSE9PWYuaW5kZXhPZihcImh0bWxcIiksaD0hZyYmMD09PWYuaW5kZXhPZihlKSk7XCJzaGFkb3dcIj09PWMmJihnPVwiOmhvc3QgPiAqXCI9PT1mfHxcImh0bWxcIj09PWYsaD1oJiYhZyk7aWYoZ3x8aCljPWUsaCYmKHomJiFiLnYmJihiLnY9cC5tKGIscC5nLHAuaShhKSxlKSksYz1iLnZ8fGUpLGQoe2liOmMsYmI6aCxxYjpnfSl9fTtuLnByb3RvdHlwZS5JPWZ1bmN0aW9uKGEsYil7dmFyIGM9e30sZD17fSxlPXRoaXMsZj1iJiZiLl9fY3NzQnVpbGQ7VyhiLGZ1bmN0aW9uKGIpe2UuY2EoYSxiLGYsZnVuY3Rpb24oZil7VWMuY2FsbChhLnBifHxhLGYuaWIpJiYoZi5iYj9lLmIoYixjKTplLmIoYixkKSl9KX0sbnVsbCwhMCk7cmV0dXJue2diOmQsYWI6Y319O24ucHJvdG90eXBlLmJhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU9UihhKSxmPXAuZihlLmlzLFxuZS5WKSxnPW5ldyBSZWdFeHAoXCIoPzpefFteLiNbOl0pXCIrKGEuZXh0ZW5kcz9cIlxcXFxcIitmLnNsaWNlKDAsLTEpK1wiXFxcXF1cIjpmKStcIigkfFsuOltcXFxccz4rfl0pXCIpO2U9di5nZXQoYSkuRDt2YXIgaD10aGlzLmgoZSxjKTtyZXR1cm4gcC5jKGEsZSxmdW5jdGlvbihhKXtkLkIoYSxiKTt6fHxHYyhhKXx8IWEuY3NzVGV4dHx8KGQudyhhLGgpLGQubChhLGcsZixjKSl9KX07bi5wcm90b3R5cGUuaD1mdW5jdGlvbihhLGIpe2E9YS5iO3ZhciBjPXt9O2lmKCF6JiZhKWZvcih2YXIgZD0wLGU9YVtkXTtkPGEubGVuZ3RoO2U9YVsrK2RdKXRoaXMuaihlLGIpLGNbZS5rZXlmcmFtZXNOYW1lXT10aGlzLmkoZSk7cmV0dXJuIGN9O24ucHJvdG90eXBlLmk9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBiLnJlcGxhY2UoYS5mLGEuYSl9fTtuLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEsYil7YS5mPW5ldyBSZWdFeHAoYS5rZXlmcmFtZXNOYW1lLFwiZ1wiKTthLmE9YS5rZXlmcmFtZXNOYW1lK1xuXCItXCIrYjthLnY9YS52fHxhLnNlbGVjdG9yO2Euc2VsZWN0b3I9YS52LnJlcGxhY2UoYS5rZXlmcmFtZXNOYW1lLGEuYSl9O24ucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSxiLGMsZCl7YS52PWEudnx8YS5zZWxlY3RvcjtkPVwiLlwiK2Q7Zm9yKHZhciBlPWEudi5zcGxpdChcIixcIiksZj0wLGc9ZS5sZW5ndGgsaDtmPGcmJihoPWVbZl0pO2YrKyllW2ZdPWgubWF0Y2goYik/aC5yZXBsYWNlKGMsZCk6ZCtcIiBcIitoO2Euc2VsZWN0b3I9ZS5qb2luKFwiLFwiKX07bi5wcm90b3R5cGUubz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIixlPWQ7YyYmKGU9ZC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxccyp4LXNjb3BlXFxcXHMqXCIrYytcIlxcXFxzKlwiLFwiZ1wiKSxcIiBcIikpO2UrPShlP1wiIFwiOlwiXCIpK1wieC1zY29wZSBcIitiO2QhPT1lJiZxYShhLGUpfTtuLnByb3RvdHlwZS5zPWZ1bmN0aW9uKGEsYixjLGQpe2I9ZD9kLnRleHRDb250ZW50fHxcIlwiOnRoaXMuYmEoYSxiLGMpO3ZhciBlPVxudi5nZXQoYSksZj1lLmE7ZiYmIXomJmYhPT1kJiYoZi5fdXNlQ291bnQtLSwwPj1mLl91c2VDb3VudCYmZi5wYXJlbnROb2RlJiZmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZikpO3o/ZS5hPyhlLmEudGV4dENvbnRlbnQ9YixkPWUuYSk6YiYmKGQ9ZWIoYixjLGEuc2hhZG93Um9vdCxlLmIpKTpkP2QucGFyZW50Tm9kZXx8KHFlJiYtMTxiLmluZGV4T2YoXCJAbWVkaWFcIikmJihkLnRleHRDb250ZW50PWIpLEhjKGQsbnVsbCxlLmIpKTpiJiYoZD1lYihiLGMsbnVsbCxlLmIpKTtkJiYoZC5fdXNlQ291bnQ9ZC5fdXNlQ291bnR8fDAsZS5hIT1kJiZkLl91c2VDb3VudCsrLGUuYT1kKTtyZXR1cm4gZH07bi5wcm90b3R5cGUubT1mdW5jdGlvbihhLGIpe3ZhciBjPXBhKGEpLGQ9dGhpczthLnRleHRDb250ZW50PVYoYyxmdW5jdGlvbihhKXt2YXIgYz1hLmNzc1RleHQ9YS5wYXJzZWRDc3NUZXh0O2EudSYmYS51LmNzc1RleHQmJihjPWMucmVwbGFjZShGLndhLFwiXCIpLnJlcGxhY2UoRi5BYSxcblwiXCIpLGEuY3NzVGV4dD1kLmYoYyxiKSl9KX07Si5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhuLnByb3RvdHlwZSx7Zzp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJ4LXNjb3BlXCJ9fX0pO3ZhciBNPW5ldyBuLHBiPXt9LHdhPXdpbmRvdy5jdXN0b21FbGVtZW50cztpZih3YSYmIXope3ZhciByZT13YS5kZWZpbmU7d2EuZGVmaW5lPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1kb2N1bWVudC5jcmVhdGVDb21tZW50KFwiIFNoYWR5IERPTSBzdHlsZXMgZm9yIFwiK2ErXCIgXCIpLGU9ZG9jdW1lbnQuaGVhZDtlLmluc2VydEJlZm9yZShkLChRP1EubmV4dFNpYmxpbmc6bnVsbCl8fGUuZmlyc3RDaGlsZCk7UT1kO3BiW2FdPWQ7cmV0dXJuIHJlLmNhbGwod2EsYSxiLGMpfX1oYS5wcm90b3R5cGUuYT1mdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF07aWYoYS5DW2VdIT09YltlXSlyZXR1cm4hMX1yZXR1cm4hMH07XG5oYS5wcm90b3R5cGUuYj1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT10aGlzLmNhY2hlW2FdfHxbXTtlLnB1c2goe0M6YixzdHlsZUVsZW1lbnQ6YyxBOmR9KTtlLmxlbmd0aD50aGlzLmMmJmUuc2hpZnQoKTt0aGlzLmNhY2hlW2FdPWV9O2hhLnByb3RvdHlwZS5mZXRjaD1mdW5jdGlvbihhLGIsYyl7aWYoYT10aGlzLmNhY2hlW2FdKWZvcih2YXIgZD1hLmxlbmd0aC0xOzA8PWQ7ZC0tKXt2YXIgZT1hW2RdO2lmKHRoaXMuYShlLGIsYykpcmV0dXJuIGV9fTtpZigheil7dmFyIFZjPW5ldyBNdXRhdGlvbk9ic2VydmVyKEpjKSxXYz1mdW5jdGlvbihhKXtWYy5vYnNlcnZlKGEse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSl9O2lmKHdpbmRvdy5jdXN0b21FbGVtZW50cyYmIXdpbmRvdy5jdXN0b21FbGVtZW50cy5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrKVdjKGRvY3VtZW50KTtlbHNle3ZhciBxYj1mdW5jdGlvbigpe1djKGRvY3VtZW50LmJvZHkpfTt3aW5kb3cuSFRNTEltcG9ydHM/XG53aW5kb3cuSFRNTEltcG9ydHMud2hlblJlYWR5KHFiKTpyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtpZihcImxvYWRpbmdcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUpe3ZhciBhPWZ1bmN0aW9uKCl7cWIoKTtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGEpfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGEpfWVsc2UgcWIoKX0pfU49ZnVuY3Rpb24oKXtKYyhWYy50YWtlUmVjb3JkcygpKX19dmFyIHJhPXt9LFVkPVByb21pc2UucmVzb2x2ZSgpLGZiPW51bGwsTGM9d2luZG93LkhUTUxJbXBvcnRzJiZ3aW5kb3cuSFRNTEltcG9ydHMud2hlblJlYWR5fHxudWxsLGdiLHhhPW51bGwsZmE9bnVsbDtxLnByb3RvdHlwZS54YT1mdW5jdGlvbigpeyF0aGlzLmVucXVldWVkJiZmYSYmKHRoaXMuZW5xdWV1ZWQ9ITAsdWIoZmEpKX07cS5wcm90b3R5cGUuYj1mdW5jdGlvbihhKXthLl9fc2VlbkJ5U2hhZHlDU1N8fFxuKGEuX19zZWVuQnlTaGFkeUNTUz0hMCx0aGlzLmN1c3RvbVN0eWxlcy5wdXNoKGEpLHRoaXMueGEoKSl9O3EucHJvdG90eXBlLmE9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuX19zaGFkeUNTU0NhY2hlZFN0eWxlP2EuX19zaGFkeUNTU0NhY2hlZFN0eWxlOmEuZ2V0U3R5bGU/YS5nZXRTdHlsZSgpOmF9O3EucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5jdXN0b21TdHlsZXMsYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKCFjLl9fc2hhZHlDU1NDYWNoZWRTdHlsZSl7dmFyIGQ9dGhpcy5hKGMpO2QmJihkPWQuX19hcHBsaWVkRWxlbWVudHx8ZCx4YSYmeGEoZCksYy5fX3NoYWR5Q1NTQ2FjaGVkU3R5bGU9ZCl9fXJldHVybiBhfTtxLnByb3RvdHlwZS5hZGRDdXN0b21TdHlsZT1xLnByb3RvdHlwZS5iO3EucHJvdG90eXBlLmdldFN0eWxlRm9yQ3VzdG9tU3R5bGU9cS5wcm90b3R5cGUuYTtxLnByb3RvdHlwZS5wcm9jZXNzU3R5bGVzPXEucHJvdG90eXBlLmM7XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhxLnByb3RvdHlwZSx7dHJhbnNmb3JtQ2FsbGJhY2s6e2dldDpmdW5jdGlvbigpe3JldHVybiB4YX0sc2V0OmZ1bmN0aW9uKGEpe3hhPWF9fSx2YWxpZGF0ZUNhbGxiYWNrOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZmF9LHNldDpmdW5jdGlvbihhKXt2YXIgYj0hMTtmYXx8KGI9ITApO2ZhPWE7YiYmdGhpcy54YSgpfX19KTt2YXIgWGM9bmV3IGhhO2cucHJvdG90eXBlLnc9ZnVuY3Rpb24oKXtOKCl9O2cucHJvdG90eXBlLkk9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5tW2FdPSh0aGlzLm1bYV18fDApKzE7cmV0dXJuIGErXCItXCIrYn07Zy5wcm90b3R5cGUuSGE9ZnVuY3Rpb24oYSl7cmV0dXJuIHBhKGEpfTtnLnByb3RvdHlwZS5KYT1mdW5jdGlvbihhKXtyZXR1cm4gVihhKX07Zy5wcm90b3R5cGUuSD1mdW5jdGlvbihhKXthPWEuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVcIik7Zm9yKHZhciBiPVtdLGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9XG5hW2NdO2IucHVzaChkLnRleHRDb250ZW50KTtkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCl9cmV0dXJuIGIuam9pbihcIlwiKS50cmltKCl9O2cucHJvdG90eXBlLmFhPWZ1bmN0aW9uKGEpe3JldHVybihhPWEuY29udGVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIikpP2EuZ2V0QXR0cmlidXRlKFwiY3NzLWJ1aWxkXCIpfHxcIlwiOlwiXCJ9O2cucHJvdG90eXBlLnByZXBhcmVUZW1wbGF0ZT1mdW5jdGlvbihhLGIsYyl7aWYoIWEuZil7YS5mPSEwO2EubmFtZT1iO2EuZXh0ZW5kcz1jO3JhW2JdPWE7dmFyIGQ9dGhpcy5hYShhKSxlPXRoaXMuSChhKTtjPXtpczpiLGV4dGVuZHM6YyxtYjpkfTt6fHxwLmIoYS5jb250ZW50LGIpO3RoaXMuYygpO3ZhciBmPXZhLnRlc3QoZSl8fHVhLnRlc3QoZSk7dmEubGFzdEluZGV4PTA7dWEubGFzdEluZGV4PTA7ZT1kYihlKTtmJiZBJiZ0aGlzLmEmJnRoaXMuYS50cmFuc2Zvcm1SdWxlcyhlLGIpO2EuX3N0eWxlQXN0PWU7YS5nPWQ7ZD1bXTtBfHwoZD1NLkgoYS5fc3R5bGVBc3QpKTtcbmlmKCFkLmxlbmd0aHx8QSliPXRoaXMuTyhjLGEuX3N0eWxlQXN0LHo/YS5jb250ZW50Om51bGwscGJbYl0pLGEuYT1iO2EuYz1kfX07Zy5wcm90b3R5cGUuTz1mdW5jdGlvbihhLGIsYyxkKXtiPXAuYyhhLGIpO2lmKGIubGVuZ3RoKXJldHVybiBlYihiLGEuaXMsYyxkKX07Zy5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSl7dmFyIGI9UihhKSxjPWIuaXM7Yj1iLlY7dmFyIGQ9cGJbY107Yz1yYVtjXTtpZihjKXt2YXIgZT1jLl9zdHlsZUFzdDt2YXIgZj1jLmN9cmV0dXJuIHYuc2V0KGEsbmV3IHYoZSxkLGYsMCxiKSl9O2cucHJvdG90eXBlLkY9ZnVuY3Rpb24oKXshdGhpcy5hJiZ3aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW0mJih0aGlzLmE9d2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbSx0aGlzLmEuaW52YWxpZENhbGxiYWNrPVNkKX07Zy5wcm90b3R5cGUuRz1mdW5jdGlvbigpe3ZhciBhPXRoaXM7IXRoaXMuYiYmd2luZG93LlNoYWR5Q1NTJiZ3aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UmJlxuKHRoaXMuYj13aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UsdGhpcy5iLnRyYW5zZm9ybUNhbGxiYWNrPWZ1bmN0aW9uKGIpe2EucyhiKX0sdGhpcy5iLnZhbGlkYXRlQ2FsbGJhY2s9ZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXsoYS5iLmVucXVldWVkfHxhLmkpJiZhLmYoKX0pfSl9O2cucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXt0aGlzLkYoKTt0aGlzLkcoKX07Zy5wcm90b3R5cGUuZj1mdW5jdGlvbigpe3RoaXMuYygpO2lmKHRoaXMuYil7dmFyIGE9dGhpcy5iLnByb2Nlc3NTdHlsZXMoKTt0aGlzLmIuZW5xdWV1ZWQmJihBP3RoaXMuRmEoYSk6KHRoaXMubyh0aGlzLmcsdGhpcy5oKSx0aGlzLkIoYSkpLHRoaXMuYi5lbnF1ZXVlZD0hMSx0aGlzLmkmJiFBJiZ0aGlzLnN0eWxlRG9jdW1lbnQoKSl9fTtnLnByb3RvdHlwZS5zdHlsZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz1SKGEpLmlzLGQ9di5nZXQoYSk7ZHx8KGQ9dGhpcy5jYShhKSk7XG50aGlzLmooYSl8fCh0aGlzLmk9ITApO2ImJihkLk49ZC5OfHx7fSxPYmplY3QuYXNzaWduKGQuTixiKSk7aWYoQSl7aWYoZC5OKXtiPWQuTjtmb3IodmFyIGUgaW4gYiludWxsPT09ZT9hLnN0eWxlLnJlbW92ZVByb3BlcnR5KGUpOmEuc3R5bGUuc2V0UHJvcGVydHkoZSxiW2VdKX1pZigoKGU9cmFbY10pfHx0aGlzLmooYSkpJiZlJiZlLmEmJiFLYyhlKSl7aWYoS2MoZSl8fGUuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uIT09ZS5fYXBwbHlTaGltTmV4dFZlcnNpb24pdGhpcy5jKCksdGhpcy5hJiZ0aGlzLmEudHJhbnNmb3JtUnVsZXMoZS5fc3R5bGVBc3QsYyksZS5hLnRleHRDb250ZW50PXAuYyhhLGQuRCksVGQoZSk7eiYmKGM9YS5zaGFkb3dSb290KSYmKGMucXVlcnlTZWxlY3RvcihcInN0eWxlXCIpLnRleHRDb250ZW50PXAuYyhhLGQuRCkpO2QuRD1lLl9zdHlsZUFzdH19ZWxzZSB0aGlzLm8oYSxkKSxkLmxhJiZkLmxhLmxlbmd0aCYmdGhpcy5LKGEsZCl9O2cucHJvdG90eXBlLmw9XG5mdW5jdGlvbihhKXtyZXR1cm4oYT1hLmdldFJvb3ROb2RlKCkuaG9zdCk/di5nZXQoYSk/YTp0aGlzLmwoYSk6dGhpcy5nfTtnLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEpe3JldHVybiBhPT09dGhpcy5nfTtnLnByb3RvdHlwZS5LPWZ1bmN0aW9uKGEsYil7dmFyIGM9UihhKS5pcyxkPVhjLmZldGNoKGMsYi5KLGIubGEpLGU9ZD9kLnN0eWxlRWxlbWVudDpudWxsLGY9Yi5BO2IuQT1kJiZkLkF8fHRoaXMuSShjKTtlPU0ucyhhLGIuSixiLkEsZSk7enx8TS5vKGEsYi5BLGYpO2R8fFhjLmIoYyxiLkosZSxiLkEpfTtnLnByb3RvdHlwZS5vPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5sKGEpLGQ9di5nZXQoYyk7Yz1PYmplY3QuY3JlYXRlKGQuSnx8bnVsbCk7dmFyIGU9TS5JKGEsYi5EKTthPU0uTyhkLkQsYSkuQztPYmplY3QuYXNzaWduKGMsZS5hYixhLGUuZ2IpO3RoaXMuYmEoYyxiLk4pO00uYWEoYyk7Yi5KPWN9O2cucHJvdG90eXBlLmJhPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjIGluIGIpe3ZhciBkPVxuYltjXTtpZihkfHwwPT09ZClhW2NdPWR9fTtnLnByb3RvdHlwZS5zdHlsZURvY3VtZW50PWZ1bmN0aW9uKGEpe3RoaXMuc3R5bGVTdWJ0cmVlKHRoaXMuZyxhKX07Zy5wcm90b3R5cGUuc3R5bGVTdWJ0cmVlPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5zaGFkb3dSb290OyhjfHx0aGlzLmooYSkpJiZ0aGlzLnN0eWxlRWxlbWVudChhLGIpO2lmKGI9YyYmKGMuY2hpbGRyZW58fGMuY2hpbGROb2RlcykpZm9yKGE9MDthPGIubGVuZ3RoO2ErKyl0aGlzLnN0eWxlU3VidHJlZShiW2FdKTtlbHNlIGlmKGE9YS5jaGlsZHJlbnx8YS5jaGlsZE5vZGVzKWZvcihiPTA7YjxhLmxlbmd0aDtiKyspdGhpcy5zdHlsZVN1YnRyZWUoYVtiXSl9O2cucHJvdG90eXBlLkZhPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz10aGlzLmIuZ2V0U3R5bGVGb3JDdXN0b21TdHlsZShhW2JdKTtjJiZ0aGlzLkVhKGMpfX07Zy5wcm90b3R5cGUuQj1mdW5jdGlvbihhKXtmb3IodmFyIGI9XG4wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz10aGlzLmIuZ2V0U3R5bGVGb3JDdXN0b21TdHlsZShhW2JdKTtjJiZNLm0oYyx0aGlzLmguSil9fTtnLnByb3RvdHlwZS5zPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1wYShhKTtXKGMsZnVuY3Rpb24oYSl7ej9wLncoYSk6cC5IKGEpO0EmJihiLmMoKSxiLmEmJmIuYS50cmFuc2Zvcm1SdWxlKGEpKX0pO0E/YS50ZXh0Q29udGVudD1WKGMpOnRoaXMuaC5ELnJ1bGVzLnB1c2goYyl9O2cucHJvdG90eXBlLkVhPWZ1bmN0aW9uKGEpe2lmKEEmJnRoaXMuYSl7dmFyIGI9cGEoYSk7dGhpcy5jKCk7dGhpcy5hLnRyYW5zZm9ybVJ1bGVzKGIpO2EudGV4dENvbnRlbnQ9VihiKX19O2cucHJvdG90eXBlLmdldENvbXB1dGVkU3R5bGVWYWx1ZT1mdW5jdGlvbihhLGIpe3ZhciBjO0F8fChjPSh2LmdldChhKXx8di5nZXQodGhpcy5sKGEpKSkuSltiXSk7cmV0dXJuKGM9Y3x8d2luZG93LmdldENvbXB1dGVkU3R5bGUoYSkuZ2V0UHJvcGVydHlWYWx1ZShiKSk/XG5jLnRyaW0oKTpcIlwifTtnLnByb3RvdHlwZS5JYT1mdW5jdGlvbihhLGIpe3ZhciBjPWEuZ2V0Um9vdE5vZGUoKTtiPWI/Yi5zcGxpdCgvXFxzLyk6W107Yz1jLmhvc3QmJmMuaG9zdC5sb2NhbE5hbWU7aWYoIWMpe3ZhciBkPWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7aWYoZCl7ZD1kLnNwbGl0KC9cXHMvKTtmb3IodmFyIGU9MDtlPGQubGVuZ3RoO2UrKylpZihkW2VdPT09cC5hKXtjPWRbZSsxXTticmVha319fWMmJmIucHVzaChwLmEsYyk7QXx8KGM9di5nZXQoYSkpJiZjLkEmJmIucHVzaChNLmcsYy5BKTtxYShhLGIuam9pbihcIiBcIikpfTtnLnByb3RvdHlwZS5HYT1mdW5jdGlvbihhKXtyZXR1cm4gdi5nZXQoYSl9O2cucHJvdG90eXBlLmZsdXNoPWcucHJvdG90eXBlLnc7Zy5wcm90b3R5cGUucHJlcGFyZVRlbXBsYXRlPWcucHJvdG90eXBlLnByZXBhcmVUZW1wbGF0ZTtnLnByb3RvdHlwZS5zdHlsZUVsZW1lbnQ9Zy5wcm90b3R5cGUuc3R5bGVFbGVtZW50O2cucHJvdG90eXBlLnN0eWxlRG9jdW1lbnQ9XG5nLnByb3RvdHlwZS5zdHlsZURvY3VtZW50O2cucHJvdG90eXBlLnN0eWxlU3VidHJlZT1nLnByb3RvdHlwZS5zdHlsZVN1YnRyZWU7Zy5wcm90b3R5cGUuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlPWcucHJvdG90eXBlLmdldENvbXB1dGVkU3R5bGVWYWx1ZTtnLnByb3RvdHlwZS5zZXRFbGVtZW50Q2xhc3M9Zy5wcm90b3R5cGUuSWE7Zy5wcm90b3R5cGUuX3N0eWxlSW5mb0Zvck5vZGU9Zy5wcm90b3R5cGUuR2E7Zy5wcm90b3R5cGUudHJhbnNmb3JtQ3VzdG9tU3R5bGVGb3JEb2N1bWVudD1nLnByb3RvdHlwZS5zO2cucHJvdG90eXBlLmdldFN0eWxlQXN0PWcucHJvdG90eXBlLkhhO2cucHJvdG90eXBlLnN0eWxlQXN0VG9TdHJpbmc9Zy5wcm90b3R5cGUuSmE7Zy5wcm90b3R5cGUuZmx1c2hDdXN0b21TdHlsZXM9Zy5wcm90b3R5cGUuZjtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhnLnByb3RvdHlwZSx7bmF0aXZlU2hhZG93OntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gen19LG5hdGl2ZUNzczp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEF9fX0pO1xudmFyIEg9bmV3IGc7aWYod2luZG93LlNoYWR5Q1NTKXt2YXIgWWM9d2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbTt2YXIgWmM9d2luZG93LlNoYWR5Q1NTLkN1c3RvbVN0eWxlSW50ZXJmYWNlfXdpbmRvdy5TaGFkeUNTUz17U2NvcGluZ1NoaW06SCxwcmVwYXJlVGVtcGxhdGU6ZnVuY3Rpb24oYSxiLGMpe0guZigpO0gucHJlcGFyZVRlbXBsYXRlKGEsYixjKX0sc3R5bGVTdWJ0cmVlOmZ1bmN0aW9uKGEsYil7SC5mKCk7SC5zdHlsZVN1YnRyZWUoYSxiKX0sc3R5bGVFbGVtZW50OmZ1bmN0aW9uKGEpe0guZigpO0guc3R5bGVFbGVtZW50KGEpfSxzdHlsZURvY3VtZW50OmZ1bmN0aW9uKGEpe0guZigpO0guc3R5bGVEb2N1bWVudChhKX0sZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEguZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKGEsYil9LG5hdGl2ZUNzczpBLG5hdGl2ZVNoYWRvdzp6fTtZYyYmKHdpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW09WWMpO1pjJiYod2luZG93LlNoYWR5Q1NTLkN1c3RvbVN0eWxlSW50ZXJmYWNlPVxuWmMpO3ZhciByYj13aW5kb3cuY3VzdG9tRWxlbWVudHMseWE9d2luZG93LkhUTUxJbXBvcnRzO3dpbmRvdy5XZWJDb21wb25lbnRzPXdpbmRvdy5XZWJDb21wb25lbnRzfHx7fTtpZihyYiYmcmIucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayl7dmFyIHphLCRjPWZ1bmN0aW9uKCl7aWYoemEpe3ZhciBhPXphO3phPW51bGw7YSgpO3JldHVybiEwfX0sYWQ9eWEud2hlblJlYWR5O3JiLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2soZnVuY3Rpb24oYSl7emE9YTthZCgkYyl9KTt5YS53aGVuUmVhZHk9ZnVuY3Rpb24oYSl7YWQoZnVuY3Rpb24oKXskYygpP3lhLndoZW5SZWFkeShhKTphKCl9KX19eWEud2hlblJlYWR5KGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7d2luZG93LldlYkNvbXBvbmVudHMucmVhZHk9ITA7ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJXZWJDb21wb25lbnRzUmVhZHlcIix7YnViYmxlczohMH0pKX0pfSk7XG52YXIgYmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2JkLnRleHRDb250ZW50PVwiYm9keSB7dHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluIDAuMnM7IH0gXFxuYm9keVt1bnJlc29sdmVkXSB7b3BhY2l0eTogMDsgZGlzcGxheTogYmxvY2s7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsgfSBcXG5cIjt2YXIgY2Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7Y2QuaW5zZXJ0QmVmb3JlKGJkLGNkLmZpcnN0Q2hpbGQpfSkoKTt9KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWJjb21wb25lbnRzLWhpLXNkLWNlLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL3dlYmNvbXBvbmVudHMtaGktc2QtY2UuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnY29tbW9uL1BvbHlnb24nO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuXHJcbmltcG9ydCB7IFBvbHlnb25GaWxsZXIgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9Qb2x5Z29uRmlsbGVyJztcclxuXHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuXHJcbmltcG9ydCB7IENsb3Nlc3RQYXRoRmluZGVyIH0gZnJvbSAnc2VydmljZXMvQ2xvc2VzdFBhdGhGaW5kZXInO1xyXG5pbXBvcnQgeyBJbWFnZURvd25sb2FkZXIgfSBmcm9tICdzZXJ2aWNlcy9JbWFnZURvd25sb2FkZXInO1xyXG5pbXBvcnQgeyBJbnB1dERhdGFJbml0aWFsaXplciB9IGZyb20gJ3NlcnZpY2VzL0lucHV0RGF0YUluaXRpYWxpemVyJztcclxuaW1wb3J0IHsgTGlnaHRTaW11bGF0b3IgfSBmcm9tICdzZXJ2aWNlcy9MaWdodFNpbXVsYXRvcic7XHJcbmltcG9ydCB7IFBvbHlnb25DbGlwcGVyIH0gZnJvbSAnc2VydmljZXMvUG9seWdvbkNsaXBwZXInO1xyXG5cclxuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAndWkvVUlDb250cm9sbGVyJztcclxuXHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgUmVuZGVyRmluaXNoZWRFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJGaW5pc2hlZEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XHJcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHByaXZhdGUgdWlDb250cm9sbGVyOiBVSUNvbnRyb2xsZXI7XHJcbiAgcHJpdmF0ZSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBwb2x5Z29uRmlsbGVyOiBQb2x5Z29uRmlsbGVyO1xyXG4gIHByaXZhdGUgcG9seWdvbkxheWVyOiBMYXllcjtcclxuXHJcbiAgcHJpdmF0ZSBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuICBwcml2YXRlIGxpZ2h0U2ltdWxhdG9yOiBMaWdodFNpbXVsYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBpc1JlbmRlcmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXNOZXh0UmVuZGVyUXVldWVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBuZXcgRXZlbnRBZ2dyZWdhdG9yKCk7XHJcbiAgICB0aGlzLmltYWdlRG93bmxvYWRlciA9IG5ldyBJbWFnZURvd25sb2FkZXIoKTtcclxuICAgIHRoaXMucG9seWdvbkZpbGxlciA9IG5ldyBQb2x5Z29uRmlsbGVyKHtcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpZ2h0U2ltdWxhdG9yID0gbmV3IExpZ2h0U2ltdWxhdG9yKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIHBvbHlnb25GaWxsZXI6IHRoaXMucG9seWdvbkZpbGxlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YWdlID0gbmV3IFN0YWdlKCk7XHJcblxyXG4gICAgdGhpcy51aUNvbnRyb2xsZXIgPSBuZXcgVUlDb250cm9sbGVyKHtcclxuICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlLFxyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBpbWFnZURvd25sb2FkZXI6IHRoaXMuaW1hZ2VEb3dubG9hZGVyLFxyXG4gICAgICBwb2x5Z29uQ2xpcHBlcjogbmV3IFBvbHlnb25DbGlwcGVyKCksXHJcbiAgICAgIGNsb3Nlc3RQYXRoRmluZGVyOiBuZXcgQ2xvc2VzdFBhdGhGaW5kZXIoKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vblJlbmRlckV2ZW50ID0gdGhpcy5vblJlbmRlckV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaW5pdCgpIHtcclxuICAgIHRoaXMucG9seWdvbkxheWVyID0gbmV3IExheWVyKExFWC5QT0xZR09OX0xBWUVSX05BTUUpO1xyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMucHVzaCh0aGlzLnBvbHlnb25MYXllcik7XHJcblxyXG4gICAgdGhpcy5wb2x5Z29uRmlsbGVyLmluaXQoKTtcclxuICAgIHRoaXMubGlnaHRTaW11bGF0b3IuaW5pdCgpO1xyXG4gICAgdGhpcy51aUNvbnRyb2xsZXIuaW5pdCgpO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RGF0YUluaXRpYWxpemVyID0gbmV3IElucHV0RGF0YUluaXRpYWxpemVyKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgaW1hZ2VEb3dubG9hZGVyOiB0aGlzLmltYWdlRG93bmxvYWRlcixcclxuICAgICAgcG9seWdvbkxheWVyOiB0aGlzLnBvbHlnb25MYXllclxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgaW5wdXREYXRhSW5pdGlhbGl6ZXIuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5saWdodFNpbXVsYXRvci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLnVpQ29udHJvbGxlci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUmVuZGVyRXZlbnQoZXZlbnQ6IFJlbmRlckV2ZW50KSB7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5pc1JlbmRlcmluZykge1xyXG4gICAgICB0aGlzLmlzTmV4dFJlbmRlclF1ZXVlZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc1JlbmRlcmluZyA9IHRydWU7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyByZW5kZXIoKSB7XHJcbiAgICBhd2FpdCB0aGlzLnBvbHlnb25GaWxsZXIuZmlsbFBvbHlnb25zKDxQb2x5Z29uW10+dGhpcy5wb2x5Z29uTGF5ZXIucGF0aHMpO1xyXG4gICAgdGhpcy5zdGFnZS5yZW5kZXIodGhpcy5yZW5kZXJlcik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJGaW5pc2hlZEV2ZW50KCkpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzTmV4dFJlbmRlclF1ZXVlZCkge1xyXG4gICAgICB0aGlzLmlzTmV4dFJlbmRlclF1ZXVlZCA9IGZhbHNlO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc1JlbmRlcmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUmVuZGVyRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUmVuZGVyRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoUmVuZGVyRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUmVuZGVyRXZlbnQpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9BcHBsaWNhdGlvbi50cyIsImltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIaXRUZXN0UmVzdWx0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbGluZTogTGluZTtcclxuICBwdWJsaWMgcGF0aD86IFBhdGg7XHJcbiAgcHVibGljIGxheWVyPzogTGF5ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpbmU6IExpbmUsIHBhdGg/OiBQYXRoLCBsYXllcj86IExheWVyKSB7XHJcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0hpdFRlc3RSZXN1bHQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IEV2ZW50UXVldWUgfSBmcm9tICdldmVudHMvRXZlbnRRdWV1ZSc7XHJcblxyXG50eXBlIEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQ6IEFwcEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50QWdncmVnYXRvciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lck1hcCA9IG5ldyBNYXA8c3RyaW5nLCBFdmVudExpc3RlbmVyW10+KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudFF1ZXVlID0gbmV3IEV2ZW50UXVldWUoKTtcclxuICBwcml2YXRlIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyKSB7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcclxuXHJcbiAgICBpZiAoZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XHJcbiAgICAgIGV2ZW50TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdGVuZXJNYXAuc2V0KGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyKSB7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcclxuICAgIGNvbnN0IGxpc3RlbmVySW5kZXggPSBldmVudExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcclxuXHJcbiAgICBpZiAobGlzdGVuZXJJbmRleCAhPT0gLTEpIHtcclxuICAgICAgZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdGVuZXJNYXAuc2V0KGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IEFwcEV2ZW50KSB7XHJcbiAgICB0aGlzLmV2ZW50UXVldWUuZW5xdWV1ZShldmVudCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRGlzcGF0Y2hpbmcpIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50RnJvbVF1ZXVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc3BhdGNoRXZlbnRGcm9tUXVldWUoKSB7XHJcbiAgICB0aGlzLmlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudFF1ZXVlLmRlcXVldWUoKTtcclxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5nZXRFdmVudExpc3RlbmVycyhldmVudC5ldmVudFR5cGUpO1xyXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBsaXN0ZW5lcihldmVudCkpO1xyXG5cclxuICAgIGlmICh0aGlzLmV2ZW50UXVldWUuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRoaXMuaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50RnJvbVF1ZXVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lck1hcC5nZXQoZXZlbnRUeXBlKSB8fCBbXTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL0V2ZW50QWdncmVnYXRvci50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudFF1ZXVlIHtcclxuICBwcml2YXRlIF9xdWV1ZTogQXBwRXZlbnRbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgZW5xdWV1ZShldmVudDogQXBwRXZlbnQpIHtcclxuICAgIHRoaXMuX3F1ZXVlLnB1c2goZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlcXVldWUoKTogQXBwRXZlbnQge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVldWUgaXMgZW1wdHknKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcXVldWUuc3BsaWNlKDAsIDEpWzBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNFbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldExlbmd0aCgpID09PSAwO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvRXZlbnRRdWV1ZS50cyIsImltcG9ydCB7IExpZ2h0VmVyc29yVHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFZlcnNvclR5cGUnO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnY29tbW9uL1BvbHlnb24nO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7XHJcbiAgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCxcclxuICBOZXdIZWlnaHRNYXBFdmVudCxcclxuICBOZXdMaWdodENvbG9yRXZlbnQsXHJcbiAgTmV3TGlnaHRWZXJzb3JFdmVudCxcclxuICBOZXdMaWdodFZlcnNvclR5cGVFdmVudCxcclxuICBOZXdOb3JtYWxNYXBFdmVudFxyXG59IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuXHJcbmltcG9ydCB7IEFjdGl2ZUVkZ2UgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9BY3RpdmVFZGdlJztcclxuaW1wb3J0IHsgQXBwRmlsbERhdGEgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9BcHBGaWxsRGF0YSc7XHJcbmltcG9ydCB7IEZpbGxTdHJpcCB9IGZyb20gJ3BvbHlnb24tZmlsbGVyL0ZpbGxTdHJpcCc7XHJcbmltcG9ydCB7IEZpbGxXb3JrZXJNZXNzYWdlVHlwZSB9IGZyb20gJ3BvbHlnb24tZmlsbGVyL0ZpbGxXb3JrZXJNZXNzYWdlVHlwZSc7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5jb25zdCBGSUxMX1dPUktFUl9VUkwgPSAnZmlsbFdvcmtlci5qcyc7XHJcblxyXG5pbnRlcmZhY2UgUG9seWdvbkZpbGxlckRlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvbHlnb25GaWxsZXIgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlbmRlcmluZ0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgcHJpdmF0ZSBmaWxsV29ya2VyOiBXb3JrZXI7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgZmlsbERhdGE6IEFwcEZpbGxEYXRhID0ge1xyXG4gICAgYmFja2dyb3VuZFRleHR1cmU6IG5ldyBJbWFnZURhdGEoMSwgMSksXHJcbiAgICBoZWlnaHRNYXA6IG5ldyBJbWFnZURhdGEoMSwgMSksXHJcbiAgICBsaWdodENvbG9yOiBuZXcgVmVjdG9yMygxLCAxLCAxKSxcclxuICAgIGxpZ2h0VmVyc29yVHlwZTogTGlnaHRWZXJzb3JUeXBlLkNvbnN0YW50LFxyXG4gICAgbm9ybWFsTWFwOiBuZXcgSW1hZ2VEYXRhKDEsIDEpXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2x5Z29uRmlsbGVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcblxyXG4gICAgdGhpcy5vbk5ld0JhY2tncm91bmRUZXh0dXJlID0gdGhpcy5vbk5ld0JhY2tncm91bmRUZXh0dXJlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTmV3SGVpZ2h0TWFwID0gdGhpcy5vbk5ld0hlaWdodE1hcC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5ld0xpZ2h0Q29sb3IgPSB0aGlzLm9uTmV3TGlnaHRDb2xvci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5ld0xpZ2h0VmVyc29yID0gdGhpcy5vbk5ld0xpZ2h0VmVyc29yLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTmV3TGlnaHRWZXJzb3JUeXBlID0gdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5ld05vcm1hbE1hcCA9IHRoaXMub25OZXdOb3JtYWxNYXAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25GaWxsV29ya2VyTWVzc2FnZSA9IHRoaXMub25GaWxsV29ya2VyTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluamVjdENhbnZhc1JlbmRlcmluZ0NvbnRleHQocmVuZGVyaW5nQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQgPSByZW5kZXJpbmdDb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICBjb25zdCBldmVudEFnZ3JlZ2F0b3IgPSB0aGlzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25OZXdCYWNrZ3JvdW5kVGV4dHVyZVxyXG4gICAgKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKE5ld0hlaWdodE1hcEV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld0hlaWdodE1hcCk7XHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihOZXdMaWdodENvbG9yRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTmV3TGlnaHRDb2xvcik7XHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihOZXdMaWdodFZlcnNvckV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld0xpZ2h0VmVyc29yKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZSk7XHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihOZXdOb3JtYWxNYXBFdmVudC5ldmVudFR5cGUsIHRoaXMub25OZXdOb3JtYWxNYXApO1xyXG5cclxuICAgIHRoaXMuZmlsbFdvcmtlciA9IG5ldyBXb3JrZXIoRklMTF9XT1JLRVJfVVJMKTtcclxuICAgIHRoaXMuc2VuZEFwcEZpbGxEYXRhVG9Xb3JrZXIoKTtcclxuXHJcbiAgICB0aGlzLmZpbGxXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25GaWxsV29ya2VyTWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIGNvbnN0IGV2ZW50QWdncmVnYXRvciA9IHRoaXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIGV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbk5ld0JhY2tncm91bmRUZXh0dXJlXHJcbiAgICApO1xyXG4gICAgZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoTmV3SGVpZ2h0TWFwRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTmV3SGVpZ2h0TWFwKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKE5ld0xpZ2h0Q29sb3JFdmVudC5ldmVudFR5cGUsIHRoaXMub25OZXdMaWdodENvbG9yKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKE5ld0xpZ2h0VmVyc29yRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTmV3TGlnaHRWZXJzb3IpO1xyXG4gICAgZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZVxyXG4gICAgKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKE5ld05vcm1hbE1hcEV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld05vcm1hbE1hcCk7XHJcbiAgICB0aGlzLmZpbGxXb3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25GaWxsV29ya2VyTWVzc2FnZSk7XHJcbiAgICB0aGlzLmZpbGxXb3JrZXIudGVybWluYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmlsbFBvbHlnb25zKHBvbHlnb25zOiBQb2x5Z29uW10pIHtcclxuICAgIGNvbnN0IGZpbGxXb3JrZXIgPSB0aGlzLmZpbGxXb3JrZXI7XHJcblxyXG4gICAgZmlsbFdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5TdGFydEZpbGxcclxuICAgIH0pO1xyXG5cclxuICAgIHBvbHlnb25zLmZvckVhY2gocG9seWdvbiA9PiB0aGlzLmZpbGxQb2x5Z29uKHBvbHlnb24pKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmdW5jdGlvbiBvbk1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3I6IEVycm9yRXZlbnQpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGZpbGxXb3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSk7XHJcbiAgICAgICAgZmlsbFdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWxsV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xyXG4gICAgICBmaWxsV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XHJcblxyXG4gICAgICBmaWxsV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICB0eXBlOiBGaWxsV29ya2VyTWVzc2FnZVR5cGUuRW5kRmlsbFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZpbGxXb3JrZXJNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcclxuICAgIGNvbnN0IGltYWdlRGF0YTogSW1hZ2VEYXRhID0gZXZlbnQuZGF0YTtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsbFBvbHlnb24ocG9seWdvbjogUG9seWdvbikge1xyXG4gICAgY29uc3QgZmlsbFN0cmlwcyA9IHRoaXMuZ2V0UG9seWdvbkZpbGxTdHJpcHMocG9seWdvbik7XHJcblxyXG4gICAgdGhpcy5maWxsV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgdHlwZTogRmlsbFdvcmtlck1lc3NhZ2VUeXBlLkZpbGxTdHJpcHMsXHJcbiAgICAgIGZpbGxTdHJpcHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZW5kQXBwRmlsbERhdGFUb1dvcmtlcigpIHtcclxuICAgIHRoaXMuZmlsbFdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5GaWxsRGF0YSxcclxuICAgICAgd2lkdGg6IHRoaXMuY2FudmFzLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY2FudmFzLmhlaWdodCxcclxuICAgICAgYXBwRmlsbERhdGE6IHRoaXMuZmlsbERhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQb2x5Z29uRmlsbFN0cmlwcyhwb2x5Z29uOiBQb2x5Z29uKTogRmlsbFN0cmlwW10ge1xyXG4gICAgY29uc3QgdmVydGljZXMgPSBwb2x5Z29uLmdldFZlcnRpY2VzKCk7XHJcbiAgICBjb25zdCB2ZXJ0aWNlc0NvdW50ID0gcG9seWdvbi5nZXRWZXJ0aWNlc0NvdW50KCk7XHJcblxyXG4gICAgLy8gaW5kWzAgLi4gbi0xXVxyXG4gICAgY29uc3Qgc29ydGVkVmVydGV4SW5kaWNlcyA9IHZlcnRpY2VzLm1hcCgoX3ZlcnRleCwgaW5kZXgpID0+IGluZGV4KTtcclxuICAgIHNvcnRlZFZlcnRleEluZGljZXMuc29ydCgoaSwgaikgPT4gdmVydGljZXNbaV0ueSAtIHZlcnRpY2VzW2pdLnkpO1xyXG5cclxuICAgIGNvbnN0IHlNaW4gPSB2ZXJ0aWNlc1tzb3J0ZWRWZXJ0ZXhJbmRpY2VzWzBdXS55O1xyXG4gICAgY29uc3QgeU1heCA9IHZlcnRpY2VzW3NvcnRlZFZlcnRleEluZGljZXNbdmVydGljZXNDb3VudCAtIDFdXS55O1xyXG5cclxuICAgIC8vIEFFVFxyXG4gICAgY29uc3QgYWN0aXZlRWRnZVRhYmxlOiBBY3RpdmVFZGdlW10gPSBbXTtcclxuICAgIGxldCBrID0gMDtcclxuICAgIGxldCBwcmV2aW91c1kgPSB5TWluO1xyXG5cclxuICAgIGNvbnN0IGZpbGxTdHJpcHM6IEZpbGxTdHJpcFtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgeSA9IHlNaW4gKyAxOyB5IDw9IHlNYXg7IHkgKz0gMSkge1xyXG4gICAgICBmb3IgKDsgayA8IHZlcnRpY2VzQ291bnQ7IGsgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IHZlcnRleEluZGV4ID0gc29ydGVkVmVydGV4SW5kaWNlc1trXTtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0aWNlc1t2ZXJ0ZXhJbmRleF07XHJcbiAgICAgICAgaWYgKHZlcnRleC55ICE9PSBwcmV2aW91c1kpIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNWZXJ0ZXhJbmRleCA9IHBvbHlnb24uZ2V0UHJldmlvdXNQb2ludEluZGV4KHZlcnRleEluZGV4KTtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1ZlcnRleCA9IHZlcnRpY2VzW3ByZXZpb3VzVmVydGV4SW5kZXhdO1xyXG4gICAgICAgIGlmIChwcmV2aW91c1ZlcnRleC55ID49IHZlcnRleC55KSB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2aW91c0VkZ2UgPSBuZXcgQWN0aXZlRWRnZSh2ZXJ0ZXgsIHByZXZpb3VzVmVydGV4KTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5wdXNoKHByZXZpb3VzRWRnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGVkZ2VJbmRleCA9IGFjdGl2ZUVkZ2VUYWJsZS5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIGVkZ2UgPT4gZWRnZS5sb3dlclBvaW50ID09PSBwcmV2aW91c1ZlcnRleCAmJiBlZGdlLmhpZ2hlclBvaW50ID09PSB2ZXJ0ZXhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBhY3RpdmVFZGdlVGFibGUuc3BsaWNlKGVkZ2VJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXh0VmVydGV4SW5kZXggPSBwb2x5Z29uLmdldE5leHRQb2ludEluZGV4KHZlcnRleEluZGV4KTtcclxuICAgICAgICBjb25zdCBuZXh0VmVydGV4ID0gdmVydGljZXNbbmV4dFZlcnRleEluZGV4XTtcclxuICAgICAgICBpZiAobmV4dFZlcnRleC55ID49IHZlcnRleC55KSB7XHJcbiAgICAgICAgICBjb25zdCBuZXh0RWRnZSA9IG5ldyBBY3RpdmVFZGdlKHZlcnRleCwgbmV4dFZlcnRleCk7XHJcbiAgICAgICAgICBhY3RpdmVFZGdlVGFibGUucHVzaChuZXh0RWRnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGVkZ2VJbmRleCA9IGFjdGl2ZUVkZ2VUYWJsZS5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIGVkZ2UgPT4gZWRnZS5sb3dlclBvaW50ID09PSBuZXh0VmVydGV4ICYmIGVkZ2UuaGlnaGVyUG9pbnQgPT09IHZlcnRleFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zcGxpY2UoZWRnZUluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwcmV2aW91c1kgPj0gMCAmJiBwcmV2aW91c1kgPCB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgICBhY3RpdmVFZGdlVGFibGUuc29ydCgoZTEsIGUyKSA9PiBlMS54IC0gZTIueCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZlRWRnZVRhYmxlLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICBjb25zdCBlMSA9IGFjdGl2ZUVkZ2VUYWJsZVtpXTtcclxuICAgICAgICAgIGNvbnN0IGUyID0gYWN0aXZlRWRnZVRhYmxlW2kgKyAxXTtcclxuXHJcbiAgICAgICAgICBmaWxsU3RyaXBzLnB1c2goe1xyXG4gICAgICAgICAgICB5OiBwcmV2aW91c1ksXHJcbiAgICAgICAgICAgIGZyb21YOiBlMS54LFxyXG4gICAgICAgICAgICB0b1g6IGUyLnhcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYWN0aXZlRWRnZVRhYmxlLmZvckVhY2goZWRnZSA9PiBlZGdlLm5leHRTY2FuTGluZSgpKTtcclxuICAgICAgcHJldmlvdXNZID0geTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsbFN0cmlwcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25OZXdCYWNrZ3JvdW5kVGV4dHVyZShldmVudDogTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCkge1xyXG4gICAgdGhpcy5maWxsRGF0YS5iYWNrZ3JvdW5kVGV4dHVyZSA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgICB0aGlzLnNlbmRBcHBGaWxsRGF0YVRvV29ya2VyKCk7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25OZXdIZWlnaHRNYXAoZXZlbnQ6IE5ld0hlaWdodE1hcEV2ZW50KSB7XHJcbiAgICB0aGlzLmZpbGxEYXRhLmhlaWdodE1hcCA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgICB0aGlzLnNlbmRBcHBGaWxsRGF0YVRvV29ya2VyKCk7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25OZXdMaWdodENvbG9yKGV2ZW50OiBOZXdMaWdodENvbG9yRXZlbnQpIHtcclxuICAgIHRoaXMuZmlsbERhdGEubGlnaHRDb2xvciA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgICB0aGlzLnNlbmRBcHBGaWxsRGF0YVRvV29ya2VyKCk7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25OZXdMaWdodFZlcnNvcihldmVudDogTmV3TGlnaHRWZXJzb3JFdmVudCkge1xyXG4gICAgY29uc3QgbGlnaHRWZXJzb3IgPSBldmVudC5wYXlsb2FkO1xyXG5cclxuICAgIHRoaXMuZmlsbFdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5MaWdodFZlcnNvcixcclxuICAgICAgdmVyc29yOiB7XHJcbiAgICAgICAgeDogbGlnaHRWZXJzb3IueCxcclxuICAgICAgICB5OiBsaWdodFZlcnNvci55LFxyXG4gICAgICAgIHo6IGxpZ2h0VmVyc29yLnpcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3TGlnaHRWZXJzb3JUeXBlKGV2ZW50OiBOZXdMaWdodFZlcnNvclR5cGVFdmVudCkge1xyXG4gICAgdGhpcy5maWxsRGF0YS5saWdodFZlcnNvclR5cGUgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5zZW5kQXBwRmlsbERhdGFUb1dvcmtlcigpO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3Tm9ybWFsTWFwKGV2ZW50OiBOZXdOb3JtYWxNYXBFdmVudCkge1xyXG4gICAgdGhpcy5maWxsRGF0YS5ub3JtYWxNYXAgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5zZW5kQXBwRmlsbERhdGFUb1dvcmtlcigpO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3BvbHlnb24tZmlsbGVyL1BvbHlnb25GaWxsZXIudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogSW1hZ2VEYXRhO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbWFnZURhdGE6IEltYWdlRGF0YSkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gaW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdOZXdCYWNrZ3JvdW5kVGV4dHVyZSc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3SGVpZ2h0TWFwRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IEltYWdlRGF0YTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3SGVpZ2h0TWFwRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlRGF0YTogSW1hZ2VEYXRhKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3SGVpZ2h0TWFwRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3SGVpZ2h0TWFwRXZlbnQudHMiLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0xpZ2h0Q29sb3JFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogVmVjdG9yMztcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3TGlnaHRDb2xvckV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2xvcjogVmVjdG9yMykge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gY29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3TGlnaHRDb2xvckV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0Q29sb3JFdmVudC50cyIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdjb21tb24vVmVjdG9yMyc7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3TGlnaHRWZXJzb3JFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogVmVjdG9yMztcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3TGlnaHRWZXJzb3JFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IobGlnaHRWZXJzb3I6IFZlY3RvcjMpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGxpZ2h0VmVyc29yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld0xpZ2h0VmVyc29yRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRWZXJzb3JFdmVudC50cyIsImltcG9ydCB7IExpZ2h0VmVyc29yVHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFZlcnNvclR5cGUnO1xyXG5cclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBMaWdodFZlcnNvclR5cGU7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsaWdodFZlcnNvclR5cGU6IExpZ2h0VmVyc29yVHlwZSkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gbGlnaHRWZXJzb3JUeXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld05vcm1hbE1hcEV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBJbWFnZURhdGE7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld05vcm1hbE1hcEV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbWFnZURhdGE6IEltYWdlRGF0YSkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gaW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld05vcm1hbE1hcEV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld05vcm1hbE1hcEV2ZW50LnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjdGl2ZUVkZ2Uge1xyXG4gIHB1YmxpYyBsb3dlclBvaW50OiBQb2ludDtcclxuICBwdWJsaWMgaGlnaGVyUG9pbnQ6IFBvaW50O1xyXG5cclxuICBwcml2YXRlIGludmVyc2VTbG9wZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3g6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobG93ZXJQb2ludDogUG9pbnQsIGhpZ2hlclBvaW50OiBQb2ludCkge1xyXG4gICAgdGhpcy5sb3dlclBvaW50ID0gbG93ZXJQb2ludDtcclxuICAgIHRoaXMuaGlnaGVyUG9pbnQgPSBoaWdoZXJQb2ludDtcclxuXHJcbiAgICB0aGlzLl94ID0gdGhpcy5sb3dlclBvaW50Lng7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZVNsb3BlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZXh0U2NhbkxpbmUoKSB7XHJcbiAgICB0aGlzLl94ICs9IHRoaXMuaW52ZXJzZVNsb3BlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVTbG9wZSgpIHtcclxuICAgIGlmICh0aGlzLmhpZ2hlclBvaW50LnkgPT09IHRoaXMubG93ZXJQb2ludC55KSB7XHJcbiAgICAgIHRoaXMuaW52ZXJzZVNsb3BlID0gOTk5OTk5OTk5OTk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmludmVyc2VTbG9wZSA9XHJcbiAgICAgICAgKHRoaXMuaGlnaGVyUG9pbnQueCAtIHRoaXMubG93ZXJQb2ludC54KSAvICh0aGlzLmhpZ2hlclBvaW50LnkgLSB0aGlzLmxvd2VyUG9pbnQueSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3BvbHlnb24tZmlsbGVyL0FjdGl2ZUVkZ2UudHMiLCJpbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdjb21tb24vQ09MT1JTJztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgTGluZVByb3BlcnRpZXMgfSBmcm9tICdjb21tb24vTGluZVByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5pbXBvcnQgeyBQb2x5Z29uRmlsbGVyIH0gZnJvbSAncG9seWdvbi1maWxsZXIvUG9seWdvbkZpbGxlcic7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5pbnRlcmZhY2UgUmVuZGVyZXJEZXBlbmRlbmNpZXMge1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcG9seWdvbkZpbGxlcjogUG9seWdvbkZpbGxlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcclxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZW5kZXJpbmdDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgcHJpdmF0ZSBwb2x5Z29uRmlsbGVyOiBQb2x5Z29uRmlsbGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFJlbmRlcmVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmIChjb250ZXh0ID09PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCBjYW52YXMgMmQgcmVuZGVyaW5nIGNvbnRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmZvbnQgPSBjb25maWd1cmF0aW9uLmNhbnZhc0ZvbnQ7XHJcblxyXG4gICAgdGhpcy5wb2x5Z29uRmlsbGVyID0gZGVwZW5kZW5jaWVzLnBvbHlnb25GaWxsZXI7XHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIuaW5qZWN0Q2FudmFzUmVuZGVyaW5nQ29udGV4dCh0aGlzLnJlbmRlcmluZ0NvbnRleHQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5zdHJva2VTdHlsZSA9IENPTE9SUy5CTEFDSy5maWxsU3R5bGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhd1BvaW50KHBvaW50OiBQb2ludCkge1xyXG4gICAgdGhpcy5kcmF3UGl4ZWwocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhd1BpeGVsKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuZmlsbFJlY3QoeCwgeSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhd0xpbmUobGluZTogTGluZSwgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzKTogdm9pZDtcclxuICBwdWJsaWMgZHJhd0xpbmUoc3RhcnRQb2ludDogUG9pbnQsIGVuZFBvaW50OiBQb2ludCwgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzKTogdm9pZDtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIHB1YmxpYyBkcmF3TGluZSguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgaWYgKGFyZ3NbMF0gaW5zdGFuY2VvZiBMaW5lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRyYXdMaW5lQmV0d2VlblBvaW50cyhhcmdzWzBdLnAxLCBhcmdzWzBdLnAyLCBhcmdzWzFdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRyYXdMaW5lQmV0d2VlblBvaW50cyhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3UGF0aChwYXRoOiBQYXRoKSB7XHJcbiAgICBjb25zdCBwYXRoTGluZVByb3BlcnRpZXMgPSBwYXRoLmdldExpbmVQcm9wZXJ0aWVzKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIHBhdGguZ2V0TGluZUl0ZXJhdG9yKCkpIHtcclxuICAgICAgdGhpcy5kcmF3TGluZShsaW5lLCBwYXRoTGluZVByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbGxUZXh0KHRleHQ6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkO1xyXG4gIHB1YmxpYyBmaWxsVGV4dCh0ZXh0OiBzdHJpbmcsIHBvaW50OiBQb2ludCk6IHZvaWQ7XHJcbiAgcHVibGljIGZpbGxUZXh0KHRleHQ6IHN0cmluZywgcG9pbnRPclg6IG51bWJlciB8IFBvaW50LCB5PzogbnVtYmVyKSB7XHJcbiAgICBsZXQgeCA9IHBvaW50T3JYO1xyXG4gICAgaWYgKHR5cGVvZiBwb2ludE9yWCA9PT0gJ29iamVjdCcgJiYgcG9pbnRPclggaW5zdGFuY2VvZiBQb2ludCkge1xyXG4gICAgICB4ID0gcG9pbnRPclgueDtcclxuICAgICAgeSA9IHBvaW50T3JYLnk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmZpbGxUZXh0KHRleHQsIDxudW1iZXI+eCwgPG51bWJlcj55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpIHtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXdMaW5lQmV0d2VlblBvaW50cyhcclxuICAgIHN0YXJ0UG9pbnQ6IFBvaW50LFxyXG4gICAgZW5kUG9pbnQ6IFBvaW50LFxyXG4gICAgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBsaW5lUHJvcGVydGllcy5jb2xvci5maWxsU3R5bGU7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0Lm1vdmVUbyhzdGFydFBvaW50LngsIHN0YXJ0UG9pbnQueSk7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQubGluZVRvKGVuZFBvaW50LngsIGVuZFBvaW50LnkpO1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LnN0cm9rZSgpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9SZW5kZXJlci50cyIsImltcG9ydCB7IEhpdFRlc3RSZXN1bHQgfSBmcm9tICdjb21tb24vSGl0VGVzdFJlc3VsdCc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJ1JlbmRlcmVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFnZSB7XHJcbiAgcHVibGljIGxheWVyczogTGF5ZXJbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgcmVuZGVyKHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5yZW5kZXIocmVuZGVyZXIpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVMYXllcihsYXllcjogTGF5ZXIpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5sYXllcnMuaW5kZXhPZihsYXllcik7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpdFRlc3QocG9pbnQ6IFBvaW50KTogSGl0VGVzdFJlc3VsdCB8IG51bGwge1xyXG4gICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLmxheWVycykge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBsYXllci5oaXRUZXN0KHBvaW50KTtcclxuICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaW5kTGF5ZXJCeU5hbWUobmFtZTogc3RyaW5nKTogTGF5ZXIge1xyXG4gICAgY29uc3QgZm91bmRMYXllciA9IHRoaXMubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIubmFtZSA9PT0gbmFtZSk7XHJcblxyXG4gICAgaWYgKCFmb3VuZExheWVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTGF5ZXIgd2l0aCBuYW1lICR7bmFtZX0gZG9lcyBub3QgZXhpc3RgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm91bmRMYXllcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvU3RhZ2UudHMiLCJpbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvc2VzdFBhdGhGaW5kZXIge1xyXG4gIHB1YmxpYyBnZXRDbG9zZXN0UGF0aChwYXRoczogUGF0aFtdLCBwb2ludDogUG9pbnQpOiBQYXRoIHtcclxuICAgIGlmIChwYXRocy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXRocyBhcnJheSBpcyBlbXB0eScpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbG9zZXN0UGF0aCA9IHBhdGhzWzBdO1xyXG4gICAgbGV0IGNsb3Nlc3REaXN0YW5jZSA9IHRoaXMuZ2V0UGF0aFRvUG9pbnREaXN0YW5jZShjbG9zZXN0UGF0aCwgcG9pbnQpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgcGF0aCA9IHBhdGhzW2ldO1xyXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZ2V0UGF0aFRvUG9pbnREaXN0YW5jZShwYXRoLCBwb2ludCk7XHJcblxyXG4gICAgICBpZiAoY2xvc2VzdERpc3RhbmNlID4gZGlzdGFuY2UpIHtcclxuICAgICAgICBjbG9zZXN0UGF0aCA9IHBhdGg7XHJcbiAgICAgICAgY2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvc2VzdFBhdGg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhdGhUb1BvaW50RGlzdGFuY2UocGF0aDogUGF0aCwgcG9pbnQ6IFBvaW50KSB7XHJcbiAgICByZXR1cm4gcG9pbnQuZ2V0RGlzdGFuY2VTcXVhcmVkVG8ocGF0aC5nZXRDZW50ZXJPZkdyYXZpdHkoKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0Nsb3Nlc3RQYXRoRmluZGVyLnRzIiwiZXhwb3J0IGNsYXNzIEltYWdlRG93bmxvYWRlciB7XHJcbiAgcHVibGljIGFzeW5jIGltYWdlVG9JbWFnZURhdGEoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPEltYWdlRGF0YT4ge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IDJkIGRyYXdpbmcgY2FudmFzIGNvbnRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaXNJbWFnZURvd25sb2FkZWQoaW1hZ2UpKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMud2FpdEZvckltYWdlKGltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXMud2lkdGggPSBpbWFnZS5uYXR1cmFsV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodDtcclxuXHJcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltYWdlLm5hdHVyYWxXaWR0aCwgaW1hZ2UubmF0dXJhbEhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzSW1hZ2VEb3dubG9hZGVkKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICBpZiAoIWltYWdlLmNvbXBsZXRlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW1hZ2UubmF0dXJhbFdpZHRoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgd2FpdEZvckltYWdlKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmdW5jdGlvbiBvbkxvYWQoKSB7XHJcbiAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XHJcbiAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIG9uRXJyb3IoKSB7XHJcbiAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XHJcbiAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcclxuICAgICAgICByZWplY3QoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XHJcbiAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyLnRzIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7XHJcbiAgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCxcclxuICBOZXdIZWlnaHRNYXBFdmVudCxcclxuICBOZXdMaWdodENvbG9yRXZlbnQsXHJcbiAgTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQsXHJcbiAgTmV3Tm9ybWFsTWFwRXZlbnRcclxufSBmcm9tICdldmVudHMvaW5wdXQtZGF0YSc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgTGlnaHRWZXJzb3JUeXBlIH0gZnJvbSAnY29tbW9uL0xpZ2h0VmVyc29yVHlwZSc7XHJcbmltcG9ydCB7IExpbmVQcm9wZXJ0aWVzIH0gZnJvbSAnY29tbW9uL0xpbmVQcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnY29tbW9uL1BvbHlnb24nO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VEb3dubG9hZGVyIH0gZnJvbSAnc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIElucHV0RGF0YUluaXRpYWxpemVyRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuICBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXREYXRhSW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IElucHV0RGF0YUluaXRpYWxpemVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmltYWdlRG93bmxvYWRlciA9IGRlcGVuZGVuY2llcy5pbWFnZURvd25sb2FkZXI7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uTGF5ZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaW5pdCgpIHtcclxuICAgIHRoaXMuYWRkSW5pdGlhbFBvbHlnb25zKCk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VzVG9Eb3dubG9hZDogSFRNTEltYWdlRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgY29uc3QgYmFja2dyb3VuZFRleHR1cmVJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgYmFja2dyb3VuZFRleHR1cmVJbWFnZS5zcmMgPSBjb25maWd1cmF0aW9uLnByZXNldEJhY2tncm91bmRUZXh0dXJlc1swXTtcclxuXHJcbiAgICBjb25zdCBub3JtYWxNYXBJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbm9ybWFsTWFwSW1hZ2Uuc3JjID0gY29uZmlndXJhdGlvbi5wcmVzZXROb3JtYWxNYXBzWzBdO1xyXG5cclxuICAgIGNvbnN0IGhlaWdodE1hcEltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBoZWlnaHRNYXBJbWFnZS5zcmMgPSBjb25maWd1cmF0aW9uLnByZXNldEhlaWdodE1hcHNbMF07XHJcblxyXG4gICAgaW1hZ2VzVG9Eb3dubG9hZC5wdXNoKGJhY2tncm91bmRUZXh0dXJlSW1hZ2UsIG5vcm1hbE1hcEltYWdlLCBoZWlnaHRNYXBJbWFnZSk7XHJcblxyXG4gICAgY29uc3QgZG93bmxvYWRlZEltYWdlRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICBpbWFnZXNUb0Rvd25sb2FkLm1hcChpbWFnZSA9PiB0aGlzLmltYWdlRG93bmxvYWRlci5pbWFnZVRvSW1hZ2VEYXRhKGltYWdlKSlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudChkb3dubG9hZGVkSW1hZ2VEYXRhWzBdKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdOb3JtYWxNYXBFdmVudChkb3dubG9hZGVkSW1hZ2VEYXRhWzFdKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdIZWlnaHRNYXBFdmVudChkb3dubG9hZGVkSW1hZ2VEYXRhWzJdKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdMaWdodENvbG9yRXZlbnQoY29uZmlndXJhdGlvbi5wcmVzZXRMaWdodENvbG9yKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdMaWdodFZlcnNvclR5cGVFdmVudChMaWdodFZlcnNvclR5cGUuQ29uc3RhbnQpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICAvLyBOb3RoaW5nIHRvIGRlc3Ryb3kgaGVyZVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRJbml0aWFsUG9seWdvbnMoKSB7XHJcbiAgICBjb25zdCBwb2ludHMxID0gW1xyXG4gICAgICBuZXcgUG9pbnQoOTQsIDkzKSxcclxuICAgICAgbmV3IFBvaW50KDY5LCAzODYpLFxyXG4gICAgICBuZXcgUG9pbnQoMTkwLCA1MjUpLFxyXG4gICAgICBuZXcgUG9pbnQoNjY0LCAzNjQpXHJcbiAgICBdO1xyXG4gICAgY29uc3QgcG9seWdvbjEgPSBuZXcgUG9seWdvbihwb2ludHMxLCBMaW5lUHJvcGVydGllcy5nZXREZWZhdWx0KCkpO1xyXG5cclxuICAgIGNvbnN0IHBvaW50czIgPSBbXHJcbiAgICAgIG5ldyBQb2ludCg3NzcsIDE0MiksXHJcbiAgICAgIG5ldyBQb2ludCg3MDAsIDUwKSxcclxuICAgICAgbmV3IFBvaW50KDQzMywgMzQpLFxyXG4gICAgICBuZXcgUG9pbnQoNDA0LCAxNTYpLFxyXG4gICAgICBuZXcgUG9pbnQoNTI3LCAyNjMpLFxyXG4gICAgICBuZXcgUG9pbnQoNzUwLCAzNTApXHJcbiAgICBdO1xyXG4gICAgY29uc3QgcG9seWdvbjIgPSBuZXcgUG9seWdvbihwb2ludHMyLCBMaW5lUHJvcGVydGllcy5nZXREZWZhdWx0KCkpO1xyXG5cclxuICAgIHRoaXMucG9seWdvbkxheWVyLnBhdGhzLnB1c2gocG9seWdvbjEsIHBvbHlnb24yKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0lucHV0RGF0YUluaXRpYWxpemVyLnRzIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IE5ld0xpZ2h0VmVyc29yRXZlbnQsIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5pbXBvcnQgeyBMaWdodFZlcnNvclR5cGUgfSBmcm9tICdjb21tb24vTGlnaHRWZXJzb3JUeXBlJztcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBMaWdodFNpbXVsYXRvckRlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaWdodFNpbXVsYXRvciBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHN0ZXBJblJhZGlhbnMgPSBjb25maWd1cmF0aW9uLmNpcmNsaW5nTGlnaHQuaW50ZXJ2YWwgL1xyXG4gICAgY29uZmlndXJhdGlvbi5jaXJjbGluZ0xpZ2h0LmxhcFRpbWUgKlxyXG4gICAgMiAqXHJcbiAgICBNYXRoLlBJO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSByYWRpYW5zTW9kdWxvVmFsdWUgPSAyICogTWF0aC5QSTtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBjaXJjbGluZ0xpZ2h0SW50ZXJ2YWxJZDogbnVtYmVyO1xyXG4gIHByaXZhdGUgY2lyY2xpbmdMaWdodEFuZ2xlID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBMaWdodFNpbXVsYXRvckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIHRoaXMub25OZXdMaWdodFZlcnNvclR5cGUgPSB0aGlzLm9uTmV3TGlnaHRWZXJzb3JUeXBlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNpcmNsaW5nTGlnaHRUaWNrID0gdGhpcy5jaXJjbGluZ0xpZ2h0VGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBOZXdMaWdodFZlcnNvclR5cGVFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25OZXdMaWdodFZlcnNvclR5cGVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZVxyXG4gICAgKTtcclxuICAgIHRoaXMuc3RvcENpcmNsaW5nTGlnaHQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25OZXdMaWdodFZlcnNvclR5cGUoZXZlbnQ6IE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50KSB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LnBheWxvYWQpIHtcclxuICAgICAgY2FzZSBMaWdodFZlcnNvclR5cGUuQ29uc3RhbnQ6XHJcbiAgICAgICAgdGhpcy5zdG9wQ2lyY2xpbmdMaWdodCgpO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hMaWdodFZlcnNvcihuZXcgVmVjdG9yMygwLCAwLCAxKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExpZ2h0VmVyc29yVHlwZS5DaXJjbGluZzpcclxuICAgICAgICB0aGlzLnN0YXJ0Q2lyY2xpbmdMaWdodCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbGlnaHQgdmVyc29yIHR5cGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGF0Y2hMaWdodFZlcnNvcih2ZXJzb3I6IFZlY3RvcjMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0xpZ2h0VmVyc29yRXZlbnQodmVyc29yKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0Q2lyY2xpbmdMaWdodCgpIHtcclxuICAgIHRoaXMuY2lyY2xpbmdMaWdodEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChcclxuICAgICAgdGhpcy5jaXJjbGluZ0xpZ2h0VGljayxcclxuICAgICAgY29uZmlndXJhdGlvbi5jaXJjbGluZ0xpZ2h0LmludGVydmFsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaXJjbGluZ0xpZ2h0VGljaygpIHtcclxuICAgIGNvbnN0IHggPSBjb25maWd1cmF0aW9uLmNpcmNsaW5nTGlnaHQuZGlzdGFuY2UgKiBNYXRoLmNvcyh0aGlzLmNpcmNsaW5nTGlnaHRBbmdsZSk7XHJcbiAgICBjb25zdCB5ID0gY29uZmlndXJhdGlvbi5jaXJjbGluZ0xpZ2h0LmRpc3RhbmNlICogTWF0aC5zaW4odGhpcy5jaXJjbGluZ0xpZ2h0QW5nbGUpO1xyXG5cclxuICAgIGNvbnN0IGxpZ2h0VmVjdG9yID0gbmV3IFZlY3RvcjMoeCwgeSwgY29uZmlndXJhdGlvbi5jaXJjbGluZ0xpZ2h0LmhlaWdodCk7XHJcbiAgICBjb25zdCBsaWdodFZlcnNvciA9IGxpZ2h0VmVjdG9yLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0xpZ2h0VmVyc29yRXZlbnQobGlnaHRWZXJzb3IpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG5cclxuICAgIHRoaXMuY2lyY2xpbmdMaWdodEFuZ2xlICs9IExpZ2h0U2ltdWxhdG9yLnN0ZXBJblJhZGlhbnM7XHJcbiAgICBpZiAodGhpcy5jaXJjbGluZ0xpZ2h0QW5nbGUgPj0gTGlnaHRTaW11bGF0b3IucmFkaWFuc01vZHVsb1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2lyY2xpbmdMaWdodEFuZ2xlIC09IExpZ2h0U2ltdWxhdG9yLnJhZGlhbnNNb2R1bG9WYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcENpcmNsaW5nTGlnaHQoKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuY2lyY2xpbmdMaWdodEludGVydmFsSWQpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9MaWdodFNpbXVsYXRvci50cyIsImltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2x5Z29uQ2xpcHBlciB7XHJcbiAgcHVibGljIGNsaXBQb2x5Z29ucyhwb2x5Z29uMTogUG9seWdvbiwgcG9seWdvbjI6IFBvbHlnb24pIHtcclxuICAgIGlmIChwb2x5Z29uMS5pc0NvbnZleCgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsaXBQb2x5Z29uKHBvbHlnb24yLCBwb2x5Z29uMSk7XHJcbiAgICB9IGVsc2UgaWYgKHBvbHlnb24yLmlzQ29udmV4KCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2xpcFBvbHlnb24ocG9seWdvbjEsIHBvbHlnb24yKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvdGggcG9seWdvbnMgYXJlIGNvbmNhdmUnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBzdWJqZWN0UG9seWdvblxyXG4gICAqIEBwYXJhbSBjbGlwcGluZ1BvbHlnb24gTXVzdCBiZSBjb252ZXhcclxuICAgKi9cclxuICBwdWJsaWMgY2xpcFBvbHlnb24oc3ViamVjdFBvbHlnb246IFBvbHlnb24sIGNsaXBwaW5nUG9seWdvbjogUG9seWdvbikge1xyXG4gICAgY29uc3QgY2xpcHBpbmdQb2x5Z29uQ2VudGVyID0gY2xpcHBpbmdQb2x5Z29uLmdldENlbnRlck9mR3Jhdml0eSgpO1xyXG5cclxuICAgIGxldCBvdXRwdXQ6IFBvaW50W10gPSBzdWJqZWN0UG9seWdvbi5nZXRWZXJ0aWNlcygpO1xyXG4gICAgY29uc3QgY2xpcHBpbmdQb2x5Z29uRWRnZXM6IExpbmVbXSA9IFtdO1xyXG4gICAgY29uc3QgY2xpcHBpbmdQb2x5Z29uVmVydGljZXMgPSBjbGlwcGluZ1BvbHlnb24uZ2V0VmVydGljZXMoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaXBwaW5nUG9seWdvblZlcnRpY2VzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGVkZ2UgPSBuZXcgTGluZShcclxuICAgICAgICBjbGlwcGluZ1BvbHlnb25WZXJ0aWNlc1soaSArIDEpICUgY2xpcHBpbmdQb2x5Z29uVmVydGljZXMubGVuZ3RoXSxcclxuICAgICAgICBjbGlwcGluZ1BvbHlnb25WZXJ0aWNlc1tpXVxyXG4gICAgICApO1xyXG4gICAgICBjbGlwcGluZ1BvbHlnb25FZGdlcy5wdXNoKGVkZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgZWRnZSBvZiBjbGlwcGluZ1BvbHlnb25FZGdlcykge1xyXG4gICAgICBjb25zdCBpbnB1dCA9IG91dHB1dDtcclxuICAgICAgb3V0cHV0ID0gW107XHJcbiAgICAgIGxldCBwcCA9IGlucHV0W2lucHV0Lmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgaW5wdXQuZm9yRWFjaChwID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pc1NhbWVTaWRlKHAsIGNsaXBwaW5nUG9seWdvbkNlbnRlciwgZWRnZSkpIHtcclxuICAgICAgICAgIGlmICghdGhpcy5pc1NhbWVTaWRlKHBwLCBjbGlwcGluZ1BvbHlnb25DZW50ZXIsIGVkZ2UpKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKHRoaXMuZ2V0SW50ZXJzZWN0aW9uUG9pbnQobmV3IExpbmUocHAsIHApLCBlZGdlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvdXRwdXQucHVzaChwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNTYW1lU2lkZShwcCwgY2xpcHBpbmdQb2x5Z29uQ2VudGVyLCBlZGdlKSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaCh0aGlzLmdldEludGVyc2VjdGlvblBvaW50KG5ldyBMaW5lKHBwLCBwKSwgZWRnZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwcCA9IHA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdXRwdXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG91dHB1dFdpdGhvdXREdXBsaWNhdGVzOiBQb2ludFtdID0gW107XHJcbiAgICBvdXRwdXRXaXRob3V0RHVwbGljYXRlcy5wdXNoKG91dHB1dFswXSk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG91dHB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIVBvaW50LmVwc2lsb25FcXVhbHMob3V0cHV0W2ldLCBvdXRwdXRXaXRob3V0RHVwbGljYXRlc1tvdXRwdXRXaXRob3V0RHVwbGljYXRlcy5sZW5ndGggLSAxXSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgb3V0cHV0V2l0aG91dER1cGxpY2F0ZXMucHVzaChvdXRwdXRbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcclxuICAgIGNvbnN0IHJvdW5kZWRQb2ludHMgPSBvdXRwdXRXaXRob3V0RHVwbGljYXRlcy5tYXAocG9pbnQgPT4gcG9pbnQuZmxvb3IoKSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb2x5Z29uKHJvdW5kZWRQb2ludHMsIHN1YmplY3RQb2x5Z29uLmxpbmVQcm9wZXJ0aWVzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNTYW1lU2lkZShwMTogUG9pbnQsIHAyOiBQb2ludCwgbGluZTogTGluZSkge1xyXG4gICAgY29uc3QgcDFEaXIgPSBsaW5lLmdldERpcmVjdGlvbihwMSk7XHJcbiAgICBjb25zdCBwMkRpciA9IGxpbmUuZ2V0RGlyZWN0aW9uKHAyKTtcclxuXHJcbiAgICBpZiAocDFEaXIgPT09IHAyRGlyIHx8IHAxRGlyID09PSAwIHx8IHAyRGlyID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0SW50ZXJzZWN0aW9uUG9pbnQobGluZTE6IExpbmUsIGxpbmUyOiBMaW5lKSB7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24xID0gUG9pbnQuc3VidHJhY3QobGluZTEucDIsIGxpbmUxLnAxKTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbjIgPSBQb2ludC5zdWJ0cmFjdChsaW5lMi5wMiwgbGluZTIucDEpO1xyXG5cclxuICAgIGNvbnN0IGRvdFBlcnAgPSBkaXJlY3Rpb24xLnggKiBkaXJlY3Rpb24yLnkgLSBkaXJlY3Rpb24xLnkgKiBkaXJlY3Rpb24yLng7XHJcblxyXG4gICAgY29uc3QgYyA9IG5ldyBQb2ludChsaW5lMi5wMS54IC0gbGluZTEucDEueCwgbGluZTIucDEueSAtIGxpbmUxLnAxLnkpO1xyXG4gICAgY29uc3QgdCA9IChjLnggKiBkaXJlY3Rpb24yLnkgLSBjLnkgKiBkaXJlY3Rpb24yLngpIC8gZG90UGVycDtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvaW50KGxpbmUxLnAxLnggKyB0ICogZGlyZWN0aW9uMS54LCBsaW5lMS5wMS55ICsgdCAqIGRpcmVjdGlvbjEueSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL1BvbHlnb25DbGlwcGVyLnRzIiwiaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBMRVggfSBmcm9tICdMRVgnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJ1JlbmRlcmVyJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dERhdGFTZXJ2aWNlIH0gZnJvbSAndWkvSW5wdXREYXRhU2VydmljZSc7XHJcbmltcG9ydCB7IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciB9IGZyb20gJ3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcic7XHJcbmltcG9ydCB7IE5ld1BvbHlnb25VSUNvbnRyb2xsZXIgfSBmcm9tICd1aS9OZXdQb2x5Z29uVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgUGF0aERyYWdnaW5nU2VydmljZSB9IGZyb20gJ3VpL1BhdGhEcmFnZ2luZ1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb2ludERyYWdnaW5nU2VydmljZSB9IGZyb20gJ3VpL1BvaW50RHJhZ2dpbmdTZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9pbnRJbnNlcnRlclNlcnZpY2UgfSBmcm9tICd1aS9Qb2ludEluc2VydGVyU2VydmljZSc7XHJcbmltcG9ydCB7IFBvaW50UmVtb3ZlclNlcnZpY2UgfSBmcm9tICd1aS9Qb2ludFJlbW92ZXJTZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9pbnRTeW5jU2VydmljZSB9IGZyb20gJ3VpL1BvaW50U3luY1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZXJpYWxpemF0aW9uU2VydmljZSB9IGZyb20gJ3VpL1NlcmlhbGl6YXRpb25TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IENsb3Nlc3RQYXRoRmluZGVyIH0gZnJvbSAnc2VydmljZXMvQ2xvc2VzdFBhdGhGaW5kZXInO1xyXG5pbXBvcnQgeyBJbWFnZURvd25sb2FkZXIgfSBmcm9tICdzZXJ2aWNlcy9JbWFnZURvd25sb2FkZXInO1xyXG5pbXBvcnQgeyBQb2x5Z29uQ2xpcHBlciB9IGZyb20gJ3NlcnZpY2VzL1BvbHlnb25DbGlwcGVyJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IExpbmVDbGlja0V2ZW50IH0gZnJvbSAnZXZlbnRzL0xpbmVDbGlja0V2ZW50JztcclxuXHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5JztcclxuaW1wb3J0ICd1aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNCdXR0b24nO1xyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZyc7XHJcbmltcG9ydCB7IFBvbHlnb25DbGlwcGluZ1NlcnZpY2UgfSBmcm9tICd1aS9Qb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBVSUNvbnRyb2xsZXJEZXBlbmRlbmNpZXMge1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHN0YWdlOiBTdGFnZTtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuICBwb2x5Z29uQ2xpcHBlcjogUG9seWdvbkNsaXBwZXI7XHJcbiAgY2xvc2VzdFBhdGhGaW5kZXI6IENsb3Nlc3RQYXRoRmluZGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVUlDb250cm9sbGVyIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHBvbHlnb25DbGlwcGVyOiBQb2x5Z29uQ2xpcHBlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNsb3Nlc3RQYXRoRmluZGVyOiBDbG9zZXN0UGF0aEZpbmRlcjtcclxuXHJcbiAgcHJpdmF0ZSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIGFwcGxpY2F0aW9uVUlDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHVpU2VydmljZXM6IFNlcnZpY2VbXSA9IFtdO1xyXG4gIHByaXZhdGUgbmV3UG9seWdvblVJQ29udHJvbGxlcjogTmV3UG9seWdvblVJQ29udHJvbGxlcjtcclxuICBwcml2YXRlIHBhdGhEcmFnZ2luZ1NlcnZpY2U6IFBhdGhEcmFnZ2luZ1NlcnZpY2U7XHJcbiAgcHJpdmF0ZSBwb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlOiBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFVJQ29udHJvbGxlckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5jYW52YXMgPSBkZXBlbmRlbmNpZXMuY2FudmFzO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IGRlcGVuZGVuY2llcy5yZW5kZXJlcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmltYWdlRG93bmxvYWRlciA9IGRlcGVuZGVuY2llcy5pbWFnZURvd25sb2FkZXI7XHJcbiAgICB0aGlzLnBvbHlnb25DbGlwcGVyID0gZGVwZW5kZW5jaWVzLnBvbHlnb25DbGlwcGVyO1xyXG4gICAgdGhpcy5jbG9zZXN0UGF0aEZpbmRlciA9IGRlcGVuZGVuY2llcy5jbG9zZXN0UGF0aEZpbmRlcjtcclxuXHJcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIGNvbnN0IGFwcGxpY2F0aW9uVUlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWd1cmF0aW9uLmFwcGxpY2F0aW9uVUlDb250YWluZXJJRCk7XHJcbiAgICBpZiAoIWFwcGxpY2F0aW9uVUlDb250YWluZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcHBsaWNhdGlvbiBVSSBjb250YWluZXIgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hcHBsaWNhdGlvblVJQ29udGFpbmVyID0gYXBwbGljYXRpb25VSUNvbnRhaW5lcjtcclxuXHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IG5ldyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIodGhpcy5jYW52YXMpO1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVOZXdQb2x5Z29uVUlDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBvaW50RHJhZ2dpbmdTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBvaW50SW5zZXJ0ZXJTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBvaW50UmVtb3ZlclNlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlUG9pbnRTeW5jU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVQYXRoRHJhZ2dpbmdTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVNlcmlhbGl6YXRpb25TZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUlucHV0RGF0YVNlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlUG9seWdvbkNsaXBwaW5nU2VydmljZSgpO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5mb3JFYWNoKHVpU2VydmljZSA9PiB1aVNlcnZpY2UuaW5pdCgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLmZvckVhY2godWlTZXJ2aWNlID0+IHVpU2VydmljZS5kZXN0cm95KCkpO1xyXG4gICAgdGhpcy51aVNlcnZpY2VzLnNwbGljZSgwLCB0aGlzLnVpU2VydmljZXMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICghZXZlbnQuY3RybEtleSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXRoRHJhZ2dpbmdTZXJ2aWNlLnN0YXJ0TW92aW5nUGF0aChldmVudCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXRoRHJhZ2dpbmdTZXJ2aWNlLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIuZ2V0UG9pbnRGcm9tTW91c2VFdmVudChldmVudCk7XHJcblxyXG4gICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBvbHlnb25DbGlwcGluZ1NlcnZpY2UuY2xpcFBvbHlnb25zKHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoaXRUZXN0UmVzdWx0ID0gdGhpcy5zdGFnZS5oaXRUZXN0KHBvaW50KTtcclxuXHJcbiAgICBpZiAoIWhpdFRlc3RSZXN1bHQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubmV3UG9seWdvblVJQ29udHJvbGxlci5hZGROZXdQb2ludChwb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFoaXRUZXN0UmVzdWx0LnBhdGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChcclxuICAgICAgbmV3IExpbmVDbGlja0V2ZW50KGhpdFRlc3RSZXN1bHQubGluZSwgaGl0VGVzdFJlc3VsdC5wYXRoLCBwb2ludClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVBvaW50U3luY1NlcnZpY2UoKSB7XHJcbiAgICBjb25zdCBwb2ludFN5bmNTZXJ2aWNlID0gbmV3IFBvaW50U3luY1NlcnZpY2Uoe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMuYXBwbGljYXRpb25VSUNvbnRhaW5lcixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHBvaW50U3luY1NlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQb2ludFJlbW92ZXJTZXJ2aWNlKCkge1xyXG4gICAgY29uc3QgcG9pbnRSZW1vdmVyU2VydmljZSA9IG5ldyBQb2ludFJlbW92ZXJTZXJ2aWNlKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2gocG9pbnRSZW1vdmVyU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVBvaW50RHJhZ2dpbmdTZXJ2aWNlKCkge1xyXG4gICAgY29uc3QgcG9pbnREcmFnZ2luZ1NlcnZpY2UgPSBuZXcgUG9pbnREcmFnZ2luZ1NlcnZpY2Uoe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZSxcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhc1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2gocG9pbnREcmFnZ2luZ1NlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVOZXdQb2x5Z29uVUlDb250cm9sbGVyKCkge1xyXG4gICAgdGhpcy5uZXdQb2x5Z29uVUlDb250cm9sbGVyID0gbmV3IE5ld1BvbHlnb25VSUNvbnRyb2xsZXIoe1xyXG4gICAgICBhcHBsaWNhdGlvblVJQ29udGFpbmVyOiB0aGlzLmFwcGxpY2F0aW9uVUlDb250YWluZXIsXHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlLFxyXG4gICAgICBwb2x5Z29uTGF5ZXI6IHRoaXMuc3RhZ2UuZmluZExheWVyQnlOYW1lKExFWC5QT0xZR09OX0xBWUVSX05BTUUpLFxyXG4gICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcixcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2godGhpcy5uZXdQb2x5Z29uVUlDb250cm9sbGVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9pbnRJbnNlcnRlclNlcnZpY2UoKSB7XHJcbiAgICBjb25zdCBwb2ludEluc2VydGVyU2VydmljZSA9IG5ldyBQb2ludEluc2VydGVyU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHBvaW50SW5zZXJ0ZXJTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUGF0aERyYWdnaW5nU2VydmljZSgpIHtcclxuICAgIHRoaXMucGF0aERyYWdnaW5nU2VydmljZSA9IG5ldyBQYXRoRHJhZ2dpbmdTZXJ2aWNlKHtcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXHJcbiAgICAgIGNsb3Nlc3RQYXRoRmluZGVyOiB0aGlzLmNsb3Nlc3RQYXRoRmluZGVyXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaCh0aGlzLnBhdGhEcmFnZ2luZ1NlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVTZXJpYWxpemF0aW9uU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHNlcmlhbGl6YXRpb25TZXJ2aWNlID0gbmV3IFNlcmlhbGl6YXRpb25TZXJ2aWNlKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2VcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHNlcmlhbGl6YXRpb25TZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSW5wdXREYXRhU2VydmljZSgpIHtcclxuICAgIGNvbnN0IGlucHV0RGF0YVNlcnZpY2UgPSBuZXcgSW5wdXREYXRhU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIGltYWdlRG93bmxvYWRlcjogdGhpcy5pbWFnZURvd25sb2FkZXJcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKGlucHV0RGF0YVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlKCkge1xyXG4gICAgdGhpcy5wb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlID0gbmV3IFBvbHlnb25DbGlwcGluZ1NlcnZpY2Uoe1xyXG4gICAgICBwb2x5Z29uQ2xpcHBlcjogdGhpcy5wb2x5Z29uQ2xpcHBlcixcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgcG9seWdvbkxheWVyOiB0aGlzLnN0YWdlLmZpbmRMYXllckJ5TmFtZShMRVguUE9MWUdPTl9MQVlFUl9OQU1FKSxcclxuICAgICAgY2xvc2VzdFBhdGhGaW5kZXI6IHRoaXMuY2xvc2VzdFBhdGhGaW5kZXJcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHRoaXMucG9seWdvbkNsaXBwaW5nU2VydmljZSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1VJQ29udHJvbGxlci50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQge1xyXG4gIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgTmV3TGlnaHRDb2xvckV2ZW50LFxyXG4gIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LFxyXG4gIE5ld05vcm1hbE1hcEV2ZW50XHJcbn0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IEltYWdlRG93bmxvYWRlciB9IGZyb20gJ3NlcnZpY2VzL0ltYWdlRG93bmxvYWRlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IENvbG9yU2VsZWN0RGlhbG9nIH0gZnJvbSAndWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nJztcclxuaW1wb3J0IHsgRGlhbG9nT3ZlcmxheSB9IGZyb20gJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheSc7XHJcbmltcG9ydCB7IEltYWdlU2VsZWN0RGlhbG9nIH0gZnJvbSAndWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nJztcclxuXHJcbmltcG9ydCB7IExpZ2h0VmVyc29yVHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFZlcnNvclR5cGUnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW50ZXJmYWNlIFNlcmlhbGl6YXRpb25TZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0RGF0YVNlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIGlucHV0RGF0YUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkaWFsb2dPdmVybGF5OiBEaWFsb2dPdmVybGF5O1xyXG4gIHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2dCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgYmFja2dyb3VuZFRleHR1cmVEaWFsb2c6IEltYWdlU2VsZWN0RGlhbG9nO1xyXG5cclxuICBwcml2YXRlIG9wZW5MaWdodENvbG9yRGlhbG9nQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBwcml2YXRlIGxpZ2h0Q29sb3JEaWFsb2c6IENvbG9yU2VsZWN0RGlhbG9nO1xyXG5cclxuICBwcml2YXRlIGxpZ2h0VmVyc29yQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGxpZ2h0VmVyc29yU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuSGVpZ2h0TWFwRGlhbG9nQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBwcml2YXRlIGhlaWdodE1hcERpYWxvZzogSW1hZ2VTZWxlY3REaWFsb2c7XHJcblxyXG4gIHByaXZhdGUgb3Blbk5vcm1hbE1hcERpYWxvZ0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBub3JtYWxNYXBEaWFsb2c6IEltYWdlU2VsZWN0RGlhbG9nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFNlcmlhbGl6YXRpb25TZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmltYWdlRG93bmxvYWRlciA9IGRlcGVuZGVuY2llcy5pbWFnZURvd25sb2FkZXI7XHJcblxyXG4gICAgdGhpcy5zZXR1cEJhY2tncm91bmRUZXh0dXJlRGlhbG9nKCk7XHJcbiAgICB0aGlzLnNldHVwTGlnaHRWZXJzb3JTZWxlY3QoKTtcclxuICAgIHRoaXMuc2V0dXBMaWdodENvbG9yRGlhbG9nKCk7XHJcbiAgICB0aGlzLnNldHVwTm9ybWFsTWFwRGlhbG9nKCk7XHJcbiAgICB0aGlzLnNldHVwSGVpZ2h0TWFwRGlhbG9nKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIGNvbnN0IGlucHV0RGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1kYXRhLWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKCFpbnB1dERhdGFDb250YWluZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBkYXRhIGNvbnRhaW5lciBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lciA9IGlucHV0RGF0YUNvbnRhaW5lcjtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMub3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQnV0dG9uKTtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2dCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5vcGVuTm9ybWFsTWFwRGlhbG9nQnV0dG9uKTtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMub3BlbkhlaWdodE1hcERpYWxvZ0J1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmxpZ2h0VmVyc29yQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXBwLWRpYWxvZy1vdmVybGF5Jyk7XHJcbiAgICBpZiAoIWRpYWxvZ092ZXJsYXkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWFsb2cgb3ZlcmxheSBub3QgZm91bmQnKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGlhbG9nT3ZlcmxheSA9IDxEaWFsb2dPdmVybGF5PmRpYWxvZ092ZXJsYXk7XHJcblxyXG4gICAgdGhpcy5vcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2NsaWNrJyxcclxuICAgICAgdGhpcy5vcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2dcclxuICAgICk7XHJcbiAgICB0aGlzLm9wZW5MaWdodENvbG9yRGlhbG9nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuTGlnaHRDb2xvckRpYWxvZyk7XHJcbiAgICB0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2cpO1xyXG4gICAgdGhpcy5vcGVuSGVpZ2h0TWFwRGlhbG9nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuSGVpZ2h0TWFwRGlhbG9nKTtcclxuICAgIHRoaXMubGlnaHRWZXJzb3JTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkxpZ2h0VmVyc29yU2VsZWN0Q2hhbmdlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICB0aGlzLm9wZW5CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAnY2xpY2snLFxyXG4gICAgICB0aGlzLm9wZW5CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ1xyXG4gICAgKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmVEaWFsb2cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uQmFja2dyb3VuZFRleHR1cmVEaWFsb2dDbG9zZWQpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZURpYWxvZy5jbG9zZSgpO1xyXG5cclxuICAgIHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2dCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9wZW5MaWdodENvbG9yRGlhbG9nKTtcclxuICAgIHRoaXMubGlnaHRDb2xvckRpYWxvZy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25MaWdodENvbG9yRGlhbG9nQ2xvc2VkKTtcclxuICAgIHRoaXMubGlnaHRDb2xvckRpYWxvZy5jbG9zZSgpO1xyXG5cclxuICAgIHRoaXMub3BlbkhlaWdodE1hcERpYWxvZ0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkhlaWdodE1hcERpYWxvZyk7XHJcbiAgICB0aGlzLmhlaWdodE1hcERpYWxvZy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25IZWlnaHRNYXBEaWFsb2dDbG9zZWQpO1xyXG4gICAgdGhpcy5oZWlnaHRNYXBEaWFsb2cuY2xvc2UoKTtcclxuXHJcbiAgICB0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2dCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2cpO1xyXG4gICAgdGhpcy5ub3JtYWxNYXBEaWFsb2cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uTm9ybWFsTWFwRGlhbG9nQ2xvc2VkKTtcclxuICAgIHRoaXMubm9ybWFsTWFwRGlhbG9nLmNsb3NlKCk7XHJcblxyXG4gICAgdGhpcy5saWdodFZlcnNvclNlbGVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uTGlnaHRWZXJzb3JTZWxlY3RDaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gI3JlZ2lvbiBCYWNrZ3JvdW5kIHRleHR1cmUgZGlhbG9nXHJcbiAgcHJpdmF0ZSBzZXR1cEJhY2tncm91bmRUZXh0dXJlRGlhbG9nKCkge1xyXG4gICAgdGhpcy5vcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMub3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQnV0dG9uLmlubmVyVGV4dCA9ICdTZWxlY3QgYmFja2dyb3VuZCB0ZXh0dXJlJztcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRUZXh0dXJlRGlhbG9nID0gbmV3IEltYWdlU2VsZWN0RGlhbG9nKGNvbmZpZ3VyYXRpb24ucHJlc2V0QmFja2dyb3VuZFRleHR1cmVzKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmVEaWFsb2cubmFtZSA9ICdCYWNrZ3JvdW5kIHRleHR1cmUnO1xyXG5cclxuICAgIHRoaXMub3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nID0gdGhpcy5vcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0Nsb3NlZCA9IHRoaXMub25CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0Nsb3NlZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2coKSB7XHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkuc2hvd0RpYWxvZyh0aGlzLmJhY2tncm91bmRUZXh0dXJlRGlhbG9nKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmVEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uQmFja2dyb3VuZFRleHR1cmVEaWFsb2dDbG9zZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBvbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQ2xvc2VkKCkge1xyXG4gICAgaWYgKHRoaXMuYmFja2dyb3VuZFRleHR1cmVEaWFsb2cud2FzQ2FuY2VsbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZEltYWdlID0gdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZURpYWxvZy5zZWxlY3RlZEltYWdlO1xyXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gYXdhaXQgdGhpcy5pbWFnZURvd25sb2FkZXIuaW1hZ2VUb0ltYWdlRGF0YShzZWxlY3RlZEltYWdlKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50KGltYWdlRGF0YSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBMaWdodCBjb2xvciBkaWFsb2dcclxuICBwcml2YXRlIHNldHVwTGlnaHRDb2xvckRpYWxvZygpIHtcclxuICAgIHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2dCdXR0b24uaW5uZXJUZXh0ID0gJ1NlbGVjdCBsaWdodCBjb2xvcic7XHJcblxyXG4gICAgdGhpcy5saWdodENvbG9yRGlhbG9nID0gbmV3IENvbG9yU2VsZWN0RGlhbG9nKCk7XHJcbiAgICB0aGlzLmxpZ2h0Q29sb3JEaWFsb2cubmFtZSA9ICdMaWdodCBjb2xvcic7XHJcbiAgICB0aGlzLmxpZ2h0Q29sb3JEaWFsb2cuc2VsZWN0ZWRDb2xvciA9IGNvbmZpZ3VyYXRpb24ucHJlc2V0TGlnaHRDb2xvci50b0NvbG9yKCk7XHJcblxyXG4gICAgdGhpcy5vcGVuTGlnaHRDb2xvckRpYWxvZyA9IHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25MaWdodENvbG9yRGlhbG9nQ2xvc2VkID0gdGhpcy5vbkxpZ2h0Q29sb3JEaWFsb2dDbG9zZWQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlbkxpZ2h0Q29sb3JEaWFsb2coKSB7XHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkuc2hvd0RpYWxvZyh0aGlzLmxpZ2h0Q29sb3JEaWFsb2cpO1xyXG4gICAgdGhpcy5saWdodENvbG9yRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkxpZ2h0Q29sb3JEaWFsb2dDbG9zZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBvbkxpZ2h0Q29sb3JEaWFsb2dDbG9zZWQoKSB7XHJcbiAgICBpZiAodGhpcy5saWdodENvbG9yRGlhbG9nLndhc0NhbmNlbGxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlnaHRDb2xvciA9IHRoaXMubGlnaHRDb2xvckRpYWxvZy5zZWxlY3RlZENvbG9yO1xyXG4gICAgY29uc3QgbGlnaHRWZWN0b3IgPSBWZWN0b3IzLmZyb21Db2xvcihsaWdodENvbG9yKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0xpZ2h0Q29sb3JFdmVudChsaWdodFZlY3RvcikpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBOb3JtYWwgbWFwIGRpYWxvZ1xyXG4gIHByaXZhdGUgc2V0dXBOb3JtYWxNYXBEaWFsb2coKSB7XHJcbiAgICB0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMub3Blbk5vcm1hbE1hcERpYWxvZ0J1dHRvbi5pbm5lclRleHQgPSAnU2VsZWN0IG5vcm1hbCBtYXAnO1xyXG5cclxuICAgIHRoaXMubm9ybWFsTWFwRGlhbG9nID0gbmV3IEltYWdlU2VsZWN0RGlhbG9nKGNvbmZpZ3VyYXRpb24ucHJlc2V0Tm9ybWFsTWFwcyk7XHJcbiAgICB0aGlzLm5vcm1hbE1hcERpYWxvZy5uYW1lID0gJ05vcm1hbCBtYXAnO1xyXG5cclxuICAgIHRoaXMub3Blbk5vcm1hbE1hcERpYWxvZyA9IHRoaXMub3Blbk5vcm1hbE1hcERpYWxvZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5vcm1hbE1hcERpYWxvZ0Nsb3NlZCA9IHRoaXMub25Ob3JtYWxNYXBEaWFsb2dDbG9zZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLm5vcm1hbE1hcERpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25Ob3JtYWxNYXBEaWFsb2dDbG9zZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuTm9ybWFsTWFwRGlhbG9nKCkge1xyXG4gICAgdGhpcy5kaWFsb2dPdmVybGF5LnNob3dEaWFsb2codGhpcy5ub3JtYWxNYXBEaWFsb2cpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBvbk5vcm1hbE1hcERpYWxvZ0Nsb3NlZCgpIHtcclxuICAgIGlmICh0aGlzLm5vcm1hbE1hcERpYWxvZy53YXNDYW5jZWxsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkSW1hZ2UgPSB0aGlzLm5vcm1hbE1hcERpYWxvZy5zZWxlY3RlZEltYWdlO1xyXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gYXdhaXQgdGhpcy5pbWFnZURvd25sb2FkZXIuaW1hZ2VUb0ltYWdlRGF0YShzZWxlY3RlZEltYWdlKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdOb3JtYWxNYXBFdmVudChpbWFnZURhdGEpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gIH1cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gTGlnaHQgdmVyc29yIHNlbGVjdFxyXG4gIHByaXZhdGUgc2V0dXBMaWdodFZlcnNvclNlbGVjdCgpIHtcclxuICAgIHRoaXMubGlnaHRWZXJzb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsaWdodC13ZXJzb3Itc2VsZWN0Jyk7XHJcbiAgICBsYWJlbC5pbm5lclRleHQgPSAnTGlnaHQgdmVyc29yOiAnO1xyXG4gICAgdGhpcy5saWdodFZlcnNvckNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgdGhpcy5saWdodFZlcnNvclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgY29uc3QgY29uc3RhbnRWZXJzb3JPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIGNvbnN0YW50VmVyc29yT3B0aW9uLmlubmVyVGV4dCA9ICdDb25zdGFudCAoWzAsIDAsIDFdKSc7XHJcbiAgICBjb25zdGFudFZlcnNvck9wdGlvbi52YWx1ZSA9ICdjb25zdGFudCc7XHJcblxyXG4gICAgY29uc3QgbW92aW5nVmVyc29yT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBtb3ZpbmdWZXJzb3JPcHRpb24uaW5uZXJUZXh0ID0gJ0NpcmNsaW5nIGFib3ZlIHRoZSBzY3JlZW4nO1xyXG4gICAgbW92aW5nVmVyc29yT3B0aW9uLnZhbHVlID0gJ2NpcmNsaW5nJztcclxuXHJcbiAgICB0aGlzLmxpZ2h0VmVyc29yU2VsZWN0LmFwcGVuZENoaWxkKGNvbnN0YW50VmVyc29yT3B0aW9uKTtcclxuICAgIHRoaXMubGlnaHRWZXJzb3JTZWxlY3QuYXBwZW5kQ2hpbGQobW92aW5nVmVyc29yT3B0aW9uKTtcclxuXHJcbiAgICB0aGlzLmxpZ2h0VmVyc29yQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubGlnaHRWZXJzb3JTZWxlY3QpO1xyXG5cclxuICAgIHRoaXMub25MaWdodFZlcnNvclNlbGVjdENoYW5nZSA9IHRoaXMub25MaWdodFZlcnNvclNlbGVjdENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkxpZ2h0VmVyc29yU2VsZWN0Q2hhbmdlKCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmxpZ2h0VmVyc29yU2VsZWN0LnZhbHVlO1xyXG4gICAgY29uc3QgdmVyc29yVHlwZXM6IHsgW25hbWU6IHN0cmluZ106IExpZ2h0VmVyc29yVHlwZSB9ID0ge1xyXG4gICAgICBjb25zdGFudDogTGlnaHRWZXJzb3JUeXBlLkNvbnN0YW50LFxyXG4gICAgICBjaXJjbGluZzogTGlnaHRWZXJzb3JUeXBlLkNpcmNsaW5nXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHZlcnNvclR5cGUgPSB2ZXJzb3JUeXBlc1t2YWx1ZV07XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQodmVyc29yVHlwZSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gSGVpZ2h0IG1hcCBkaWFsb2dcclxuICBwcml2YXRlIHNldHVwSGVpZ2h0TWFwRGlhbG9nKCkge1xyXG4gICAgdGhpcy5vcGVuSGVpZ2h0TWFwRGlhbG9nQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLm9wZW5IZWlnaHRNYXBEaWFsb2dCdXR0b24uaW5uZXJUZXh0ID0gJ1NlbGVjdCBoZWlnaHQgbWFwJztcclxuXHJcbiAgICB0aGlzLmhlaWdodE1hcERpYWxvZyA9IG5ldyBJbWFnZVNlbGVjdERpYWxvZyhjb25maWd1cmF0aW9uLnByZXNldEhlaWdodE1hcHMpO1xyXG4gICAgdGhpcy5oZWlnaHRNYXBEaWFsb2cubmFtZSA9ICdIZWlnaHQgbWFwJztcclxuXHJcbiAgICB0aGlzLm9wZW5IZWlnaHRNYXBEaWFsb2cgPSB0aGlzLm9wZW5IZWlnaHRNYXBEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25IZWlnaHRNYXBEaWFsb2dDbG9zZWQgPSB0aGlzLm9uSGVpZ2h0TWFwRGlhbG9nQ2xvc2VkLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5oZWlnaHRNYXBEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uSGVpZ2h0TWFwRGlhbG9nQ2xvc2VkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlbkhlaWdodE1hcERpYWxvZygpIHtcclxuICAgIHRoaXMuZGlhbG9nT3ZlcmxheS5zaG93RGlhbG9nKHRoaXMuaGVpZ2h0TWFwRGlhbG9nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgb25IZWlnaHRNYXBEaWFsb2dDbG9zZWQoKSB7XHJcbiAgICBpZiAodGhpcy5oZWlnaHRNYXBEaWFsb2cud2FzQ2FuY2VsbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZEltYWdlID0gdGhpcy5oZWlnaHRNYXBEaWFsb2cuc2VsZWN0ZWRJbWFnZTtcclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGF3YWl0IHRoaXMuaW1hZ2VEb3dubG9hZGVyLmltYWdlVG9JbWFnZURhdGEoc2VsZWN0ZWRJbWFnZSk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3SGVpZ2h0TWFwRXZlbnQoaW1hZ2VEYXRhKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcbiAgLy8gI2VuZHJlZ2lvblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL0lucHV0RGF0YVNlcnZpY2UudHMiLCJpbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9EaWFsb2dCb3guc2Nzcyc7XHJcblxyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbW1vbi9Db2xvcic7XHJcblxyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy5zY3NzJztcclxuXHJcbmNvbnN0IGNsYXNzTmFtZXMgPSB7XHJcbiAgRElBTE9HX0JPWDogJ2RpYWxvZy1ib3gnLFxyXG4gIERJQUxPRzogJ2NvbG9yLXNlbGVjdC1kaWFsb2cnLFxyXG4gIEhFQURFUjogJ2NvbG9yLXNlbGVjdC1kaWFsb2dfX2hlYWRlcicsXHJcbiAgSEVBRElORzogJ2NvbG9yLXNlbGVjdC1kaWFsb2dfX2hlYWRpbmcnLFxyXG4gIEJMT0NLOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYmxvY2snLFxyXG4gIEJPVFRPTV9CVVRUT05TOiAnY29sb3Itc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMnXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JTZWxlY3REaWFsb2cgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIERpYWxvZ0JveCB7XHJcbiAgcHJpdmF0ZSBfd2FzQ2FuY2VsbGVkID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSBoZWFkZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgaGVhZGluZzogSFRNTEhlYWRpbmdFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYm90dG9tQnV0dG9uc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjYW5jZWxCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgY29uZmlybUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5ESUFMT0dfQk9YKTtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkRJQUxPRyk7XHJcblxyXG4gICAgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrID0gdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrID0gdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbG9ySW5wdXQoKTtcclxuICAgIHRoaXMuY3JlYXRlQm90dG9tQnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgcmV0dXJuIFsnbmFtZSddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSB8fCAnQ29sb3Igc2VsZWN0JztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbmFtZScsIHZhbHVlKTtcclxuICAgIHRoaXMuaGVhZGluZy5pbm5lclRleHQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRDb2xvcigpIHtcclxuICAgIHJldHVybiBDb2xvci5mcm9tSGV4U3RyaW5nKHRoaXMuY29sb3JJbnB1dC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHNlbGVjdGVkQ29sb3IoY29sb3I6IENvbG9yKSB7XHJcbiAgICB0aGlzLmNvbG9ySW5wdXQudmFsdWUgPSBjb2xvci50b0hleFN0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5fd2FzQ2FuY2VsbGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5jb2xvcklucHV0KTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmhlYWRlcik7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuY29sb3JJbnB1dCk7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lcik7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DYW5jZWxCdXR0b25DbGljayk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2FzQ2FuY2VsbGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dhc0NhbmNlbGxlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbkNsb3NlKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIHRoaXMuaGVhZGVyID0gdGhpcy5jcmVhdGVCbG9jaygpO1xyXG4gICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkhFQURFUik7XHJcblxyXG4gICAgdGhpcy5oZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRoaXMuaGVhZGluZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuSEVBRElORyk7XHJcbiAgICB0aGlzLmhlYWRpbmcuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xyXG5cclxuICAgIHRoaXMuaGVhZGVyLmFwcGVuZENoaWxkKHRoaXMuaGVhZGluZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUNvbG9ySW5wdXQoKSB7XHJcbiAgICB0aGlzLmNvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGhpcy5jb2xvcklucHV0LnR5cGUgPSAnY29sb3InO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCb3R0b21CdXR0b25zKCkge1xyXG4gICAgdGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJPVFRPTV9CVVRUT05TKTtcclxuXHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XHJcblxyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24uaW5uZXJUZXh0ID0gJ0NvbmZpcm0nO1xyXG5cclxuICAgIHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbmNlbEJ1dHRvbik7XHJcbiAgICB0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb25maXJtQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DYW5jZWxCdXR0b25DbGljaygpIHtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db25maXJtQnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLl93YXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQmxvY2soKSB7XHJcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJMT0NLKTtcclxuXHJcbiAgICByZXR1cm4gYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1jb2xvci1zZWxlY3QtZGlhbG9nJywgQ29sb3JTZWxlY3REaWFsb2cpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dCb3guc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dCb3guc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dCb3guc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9EaWFsb2dCb3guc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRpYWxvZy1ib3gge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLCAwKTtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgY29sb3I6ICMyMjI7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0OyB9XFxuXFxuLmRpYWxvZy1ib3gtLWFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAxKTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL0RpYWxvZ0JveC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Db2xvclNlbGVjdERpYWxvZy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQ29sb3JTZWxlY3REaWFsb2cuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb2xvci1zZWxlY3QtZGlhbG9nIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogNzV2dzsgfVxcblxcbi5jb2xvci1zZWxlY3QtZGlhbG9nX19ibG9jayB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNvbG9yLXNlbGVjdC1kaWFsb2dfX2hlYWRpbmcge1xcbiAgbWFyZ2luOiAwLjVlbSAwOyB9XFxuXFxuLmNvbG9yLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDFlbTsgfVxcbiAgLmNvbG9yLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAndWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQm94IH0gZnJvbSAndWkvY29tcG9uZW50cy9EaWFsb2dCb3gnO1xyXG5cclxuY29uc3QgY2xhc3NOYW1lcyA9IHtcclxuICBESUFMT0dfQk9YOiAnZGlhbG9nLWJveCcsXHJcbiAgRElBTE9HOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZycsXHJcbiAgSEVBREVSOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19faGVhZGVyJyxcclxuICBIRUFESU5HOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19faGVhZGluZycsXHJcbiAgQkxPQ0s6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19ibG9jaycsXHJcbiAgQkxPQ0tfVElUTEU6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19ibG9jay10aXRsZScsXHJcbiAgUFJFU0VUX0lNQUdFU19DT05UQUlORVI6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19wcmVzZXQtaW1hZ2VzLWNvbnRhaW5lcicsXHJcbiAgU0VMRUNURURfSU1BR0U6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19pbWFnZS0tc2VsZWN0ZWQnLFxyXG4gIENVU1RPTV9JTUFHRTogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2N1c3RvbS1pbWFnZScsXHJcbiAgQk9UVE9NX0JVVFRPTlM6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19ib3R0b20tYnV0dG9ucydcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVNlbGVjdERpYWxvZyBleHRlbmRzIEhUTUxFbGVtZW50IGltcGxlbWVudHMgRGlhbG9nQm94IHtcclxuICBwcml2YXRlIF9wcmVzZXRJbWFnZVVybHM6IHN0cmluZ1tdO1xyXG5cclxuICBwcml2YXRlIGhlYWRlcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBoZWFkaW5nOiBIVE1MSGVhZGluZ0VsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgcHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjdXN0b21JbWFnZUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjdXN0b21GaWxlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjdXN0b21JbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBjdXN0b21Db2xvckNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjdXN0b21Db2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgY3VzdG9tQ29sb3JJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBib3R0b21CdXR0b25zQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIGNhbmNlbEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjb25maXJtQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICBwcml2YXRlIF93YXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJlc2V0SW1hZ2VVcmxzOiBzdHJpbmdbXSkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLl9wcmVzZXRJbWFnZVVybHMgPSBwcmVzZXRJbWFnZVVybHM7XHJcblxyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuRElBTE9HX0JPWCk7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5ESUFMT0cpO1xyXG5cclxuICAgIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljayA9IHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zaG93Q3VzdG9tSW1hZ2UgPSB0aGlzLnNob3dDdXN0b21JbWFnZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrID0gdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrID0gdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkN1c3RvbUNvbG9ySW5wdXRDaGFuZ2UgPSB0aGlzLm9uQ3VzdG9tQ29sb3JJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVByZXNldEltYWdlc0xpc3QoKTtcclxuICAgIHRoaXMuY3JlYXRlQ3VzdG9tSW1hZ2VQaWNrZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlQ3VzdG9tQ29sb3JQaWNrZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlQm90dG9tQnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgcmV0dXJuIFsnbmFtZSddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSB8fCAnSW1hZ2Ugc2VsZWN0JztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbmFtZScsIHZhbHVlKTtcclxuICAgIHRoaXMuaGVhZGluZy5pbm5lclRleHQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2FzQ2FuY2VsbGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dhc0NhbmNlbGxlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcHJlc2V0SW1hZ2VVcmxzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByZXNldEltYWdlVXJscztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRJbWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEltYWdlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5fd2FzQ2FuY2VsbGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5wcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5jdXN0b21JbWFnZUNvbnRhaW5lcik7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tQ29sb3JDb250YWluZXIpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2spO1xyXG4gICAgdGhpcy5jdXN0b21GaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5zaG93Q3VzdG9tSW1hZ2UpO1xyXG4gICAgdGhpcy5jdXN0b21JbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljayk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkN1c3RvbUNvbG9ySW5wdXRDaGFuZ2UpO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrKTtcclxuXHJcbiAgICB0aGlzLnByZXNldEltYWdlc0xpc3RDb250YWluZXJcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbiAgICAgIC5mb3JFYWNoKGltYWdlID0+IGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLnByZXNldEltYWdlc0xpc3RDb250YWluZXJcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbiAgICAgIC5mb3JFYWNoKGltYWdlID0+IGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrKSk7XHJcbiAgICB0aGlzLmN1c3RvbUZpbGVJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnNob3dDdXN0b21JbWFnZSk7XHJcbiAgICB0aGlzLmN1c3RvbUltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uQ3VzdG9tQ29sb3JJbnB1dENoYW5nZSk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spO1xyXG5cclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2spO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5oZWFkZXIpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnByZXNldEltYWdlc0xpc3RDb250YWluZXIpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmN1c3RvbUltYWdlQ29udGFpbmVyKTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5jdXN0b21Db2xvckNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuQ2xvc2UoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICB0aGlzLmhlYWRlciA9IHRoaXMuY3JlYXRlQmxvY2soKTtcclxuICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5IRUFERVIpO1xyXG5cclxuICAgIHRoaXMuaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aGlzLmhlYWRpbmcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkhFQURJTkcpO1xyXG4gICAgdGhpcy5oZWFkaW5nLmlubmVyVGV4dCA9IHRoaXMubmFtZTtcclxuXHJcbiAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLmhlYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQcmVzZXRJbWFnZXNMaXN0KCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVCbG9jaygpO1xyXG4gICAgY29uc3QgYmxvY2tUaXRsZSA9IHRoaXMuY3JlYXRlQmxvY2tUaXRsZSgnQ2hvb3NlIHByZXNldCBpbWFnZScpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJsb2NrVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW1hZ2VzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5QUkVTRVRfSU1BR0VTX0NPTlRBSU5FUik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VzQ29udGFpbmVyKTtcclxuICAgIHRoaXMucHJlc2V0SW1hZ2VVcmxzXHJcbiAgICAgIC5tYXAodXJsID0+IHRoaXMuY3JlYXRlU2VsZWN0YWJsZUltYWdlKHVybCkpXHJcbiAgICAgIC5mb3JFYWNoKGltYWdlID0+IGltYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSkpO1xyXG5cclxuICAgIHRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHJcbiAgICB0aGlzLnNlbGVjdEltYWdlKDxIVE1MSW1hZ2VFbGVtZW50PnRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbWcnKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUN1c3RvbUltYWdlUGlja2VyKCkge1xyXG4gICAgdGhpcy5jdXN0b21JbWFnZUNvbnRhaW5lciA9IHRoaXMuY3JlYXRlQmxvY2soKTtcclxuICAgIGNvbnN0IGJsb2NrVGl0bGUgPSB0aGlzLmNyZWF0ZUJsb2NrVGl0bGUoJ1NlbGVjdCBjdXN0b20gaW1hZ2UnKTtcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYmxvY2tUaXRsZSk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21GaWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGhpcy5jdXN0b21GaWxlSW5wdXQudHlwZSA9ICdmaWxlJztcclxuICAgIHRoaXMuY3VzdG9tRmlsZUlucHV0LmFjY2VwdCA9ICdpbWFnZS8qJztcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jdXN0b21GaWxlSW5wdXQpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkNVU1RPTV9JTUFHRSk7XHJcbiAgICB0aGlzLmN1c3RvbUltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tSW1hZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93Q3VzdG9tSW1hZ2UoKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21GaWxlSW5wdXQuZmlsZXMgJiYgdGhpcy5jdXN0b21GaWxlSW5wdXQuZmlsZXNbMF0pIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBlID0+IHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgICAgICAgdGhpcy5jdXN0b21JbWFnZS5zcmMgPSAoPGFueT5lLnRhcmdldCkucmVzdWx0O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0SW1hZ2UodGhpcy5jdXN0b21JbWFnZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmN1c3RvbUZpbGVJbnB1dC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUN1c3RvbUNvbG9yUGlja2VyKCkge1xyXG4gICAgdGhpcy5jdXN0b21Db2xvckNvbnRhaW5lciA9IHRoaXMuY3JlYXRlQmxvY2soKTtcclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jcmVhdGVCbG9ja1RpdGxlKCdDdXN0b20gc29saWQgY29sb3InKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW5wdXQudHlwZSA9ICdjb2xvcic7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW5wdXQudmFsdWUgPSAnIzAwMDAwMCc7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tQ29sb3JJbnB1dCk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21Db2xvckltYWdlID0gbmV3IEltYWdlKDIwLCAyMCk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tQ29sb3JJbWFnZSk7XHJcblxyXG4gICAgdGhpcy5zZXRDdXN0b21Db2xvckltYWdlQ29sb3IoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DdXN0b21Db2xvcklucHV0Q2hhbmdlKCkge1xyXG4gICAgdGhpcy5zZXRDdXN0b21Db2xvckltYWdlQ29sb3IoKTtcclxuICAgIHRoaXMuc2VsZWN0SW1hZ2UodGhpcy5jdXN0b21Db2xvckltYWdlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q3VzdG9tQ29sb3JJbWFnZUNvbG9yKCkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLmN1c3RvbUNvbG9ySW1hZ2Uud2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5jdXN0b21Db2xvckltYWdlLmhlaWdodDtcclxuXHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmICghY3R4KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCBjYW52YXMgZHJhd2luZyBjb250ZXh0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY3VzdG9tQ29sb3JJbnB1dC52YWx1ZTtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUJvdHRvbUJ1dHRvbnMoKSB7XHJcbiAgICB0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuQk9UVE9NX0JVVFRPTlMpO1xyXG5cclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJztcclxuXHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5pbm5lclRleHQgPSAnQ29uZmlybSc7XHJcblxyXG4gICAgdGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FuY2VsQnV0dG9uKTtcclxuICAgIHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbmZpcm1CdXR0b24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNhbmNlbEJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNvbmZpcm1CdXR0b25DbGljaygpIHtcclxuICAgIHRoaXMuX3dhc0NhbmNlbGxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCbG9jaygpIHtcclxuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuQkxPQ0spO1xyXG5cclxuICAgIHJldHVybiBibG9jaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQmxvY2tUaXRsZSh0aXRsZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBibG9ja1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJMT0NLX1RJVExFKTtcclxuICAgIGJsb2NrVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XHJcblxyXG4gICAgcmV0dXJuIGJsb2NrVGl0bGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVNlbGVjdGFibGVJbWFnZShpbWFnZVNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1hZ2VTb3VyY2U7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNlbGVjdGFibGVJbWFnZUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdEltYWdlKDxIVE1MSW1hZ2VFbGVtZW50PmV2ZW50LnRhcmdldCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdEltYWdlKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICBpZiAoaW1hZ2UgPT09IHRoaXMuX3NlbGVjdGVkSW1hZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZEltYWdlKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWVzLlNFTEVDVEVEX0lNQUdFKTtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuU0VMRUNURURfSU1BR0UpO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRJbWFnZSA9IGltYWdlO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaW1hZ2Utc2VsZWN0LWRpYWxvZycsIEltYWdlU2VsZWN0RGlhbG9nKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW1hZ2VTZWxlY3REaWFsb2cuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9JbWFnZVNlbGVjdERpYWxvZy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW1hZ2Utc2VsZWN0LWRpYWxvZyB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDc1dnc7IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19faGVhZGluZyB7XFxuICBtYXJnaW46IDAuNWVtIDA7IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYmxvY2sge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgcGFkZGluZy1ib3R0b206IDFlbTsgfVxcblxcbi5pbWFnZS1zZWxlY3QtZGlhbG9nX19wcmVzZXQtaW1hZ2VzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgLmltYWdlLXNlbGVjdC1kaWFsb2dfX3ByZXNldC1pbWFnZXMtY29udGFpbmVyID4gZGl2IHtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87IH1cXG4gIC5pbWFnZS1zZWxlY3QtZGlhbG9nX19wcmVzZXQtaW1hZ2VzLWNvbnRhaW5lciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4OyB9XFxuXFxuLmltYWdlLXNlbGVjdC1kaWFsb2dfX2N1c3RvbS1pbWFnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMjUlO1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBtYXJnaW46IGF1dG87IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19faW1hZ2UtLXNlbGVjdGVkIHtcXG4gIGJvcmRlcjogc29saWQgM3B4IGdyZWVuOyB9XFxuXFxuLmltYWdlLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDFlbTsgfVxcbiAgLmltYWdlLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIGNhbnZhc0NsaWVudFJlY3Q6IENsaWVudFJlY3Q7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2FudmFzT2Zmc2V0KCk7XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNhbnZhc09mZnNldCgpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlQ2FudmFzT2Zmc2V0KCkge1xyXG4gICAgdGhpcy5jYW52YXNDbGllbnRSZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UG9pbnRGcm9tTW91c2VFdmVudChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludChcclxuICAgICAgZXZlbnQuY2xpZW50WCAtIHRoaXMuY2FudmFzQ2xpZW50UmVjdC5sZWZ0LFxyXG4gICAgICBldmVudC5jbGllbnRZIC0gdGhpcy5jYW52YXNDbGllbnRSZWN0LnRvcFxyXG4gICAgKS5mbG9vcigpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIudHMiLCJpbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBMRVggfSBmcm9tICdMRVgnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJ1JlbmRlcmVyJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcbmltcG9ydCB7IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciB9IGZyb20gJ3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcic7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgUG9pbnRDbGlja0V2ZW50IH0gZnJvbSAnZXZlbnRzL1BvaW50Q2xpY2tFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgUmVuZGVyRmluaXNoZWRFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJGaW5pc2hlZEV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmludGVyZmFjZSBOZXdQb2x5Z29uVUlDb250cm9sbGVyRGVwZW5kZW5jaWVzIHtcclxuICBhcHBsaWNhdGlvblVJQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIHBvbHlnb25MYXllcjogTGF5ZXI7XHJcbiAgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHN0YWdlOiBTdGFnZTtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ld1BvbHlnb25VSUNvbnRyb2xsZXIgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uVUlDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gIHByaXZhdGUgdW5maW5pc2hlZFBhdGg6IFBhdGg7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwYXRoTGF5ZXIgPSBuZXcgTGF5ZXIoTEVYLlBBVEhfTEFZRVJfTkFNRSk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG5cclxuICBwcml2YXRlIGxhc3RNb3VzZVBvc2l0aW9uOiBQb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBOZXdQb2x5Z29uVUlDb250cm9sbGVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uVUlDb250YWluZXIgPSBkZXBlbmRlbmNpZXMuYXBwbGljYXRpb25VSUNvbnRhaW5lcjtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uTGF5ZXI7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gZGVwZW5kZW5jaWVzLnJlbmRlcmVyO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIHRoaXMuY2xvc2VQYXRoID0gdGhpcy5jbG9zZVBhdGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uUG9pbnRDbGljayA9IHRoaXMub25Qb2ludENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdOZXdMaW5lR3VpZGUgPSB0aGlzLmRyYXdOZXdMaW5lR3VpZGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMucHVzaCh0aGlzLnBhdGhMYXllcik7XHJcbiAgICB0aGlzLnN0YXJ0TmV3VW5maW5pc2hlZFBhdGgoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5zdGFnZS5yZW1vdmVMYXllcih0aGlzLnBhdGhMYXllcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkTmV3UG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLnVuZmluaXNoZWRQYXRoLmFkZFZlcnRleChwb2ludCk7XHJcbiAgICB0aGlzLmRpc3BhdGNoVXBkYXRlVUlFdmVudHMoKTtcclxuXHJcbiAgICBpZiAodGhpcy51bmZpbmlzaGVkUGF0aC5nZXRWZXJ0aWNlc0NvdW50KCkgPT09IDEpIHtcclxuICAgICAgdGhpcy5sYXN0TW91c2VQb3NpdGlvbiA9IHBvaW50O1xyXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMubGFzdE1vdXNlUG9zaXRpb24gPSB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci5nZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd05ld0xpbmVHdWlkZSgpIHtcclxuICAgIGNvbnN0IGxhc3RQb2ludCA9IHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGV4KHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGljZXNDb3VudCgpIC0gMSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmRyYXdMaW5lKFxyXG4gICAgICBsYXN0UG9pbnQsXHJcbiAgICAgIHRoaXMubGFzdE1vdXNlUG9zaXRpb24sXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ubmV3TGluZVByZXZpZXdQcm9wZXJ0aWVzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblBvaW50Q2xpY2soZXZlbnQ6IFBvaW50Q2xpY2tFdmVudCkge1xyXG4gICAgY29uc3QgcGF0aFBvaW50RWxlbWVudCA9IGV2ZW50LnBheWxvYWQ7XHJcblxyXG4gICAgaWYgKHBhdGhQb2ludEVsZW1lbnQucGF0aCA9PT0gdGhpcy51bmZpbmlzaGVkUGF0aCAmJiBwYXRoUG9pbnRFbGVtZW50LmluaXRpYWwpIHtcclxuICAgICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgcGF0aFBvaW50RWxlbWVudC5pbml0aWFsID0gZmFsc2U7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnROZXdVbmZpbmlzaGVkUGF0aCgpIHtcclxuICAgIHRoaXMudW5maW5pc2hlZFBhdGggPSBuZXcgUGF0aChbXSwgY29uZmlndXJhdGlvbi5uZXdQb2x5Z29uTGluZVByb3BlcnRpZXMpO1xyXG4gICAgdGhpcy5wYXRoTGF5ZXIucGF0aHMucHVzaCh0aGlzLnVuZmluaXNoZWRQYXRoKTtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvc2VQYXRoKCkge1xyXG4gICAgaWYgKHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGljZXNDb3VudCgpIDwgY29uZmlndXJhdGlvbi5taW5Qb2x5Z29uUG9pbnRzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUG9seWdvbiBtdXN0IGhhdmUgYXQgbGVhc3QgJHtjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHN9IHZlcnRpY2VzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51bmZpbmlzaGVkUGF0aC5saW5lUHJvcGVydGllcyA9IGNvbmZpZ3VyYXRpb24ucG9seWdvbkxpbmVQcm9wZXJ0aWVzO1xyXG4gICAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uKHRoaXMudW5maW5pc2hlZFBhdGgpO1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIucGF0aHMucHVzaChwb2x5Z29uKTtcclxuICAgIHRoaXMucGF0aExheWVyLnJlbW92ZVBhdGgodGhpcy51bmZpbmlzaGVkUGF0aCk7XHJcblxyXG4gICAgdGhpcy5zdGFydE5ld1VuZmluaXNoZWRQYXRoKCk7XHJcbiAgICB0aGlzLmRpc3BhdGNoVXBkYXRlVUlFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGF0Y2hVcGRhdGVVSUV2ZW50cygpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSAyNzpcclxuICAgICAgICB0aGlzLnBhdGhMYXllci5yZW1vdmVQYXRoKHRoaXMudW5maW5pc2hlZFBhdGgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnROZXdVbmZpbmlzaGVkUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hVcGRhdGVVSUV2ZW50cygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUmVuZGVyRmluaXNoZWRFdmVudC5uYW1lLCB0aGlzLmRyYXdOZXdMaW5lR3VpZGUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludENsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoUmVuZGVyRmluaXNoZWRFdmVudC5uYW1lLCB0aGlzLmRyYXdOZXdMaW5lR3VpZGUpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludENsaWNrKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvTmV3UG9seWdvblVJQ29udHJvbGxlci50cyIsImltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICd1aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXInO1xyXG5cclxuaW1wb3J0IHsgQ2xvc2VzdFBhdGhGaW5kZXIgfSBmcm9tICdzZXJ2aWNlcy9DbG9zZXN0UGF0aEZpbmRlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmludGVyZmFjZSBQYXRoRHJhZ2dpbmdTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBjbG9zZXN0UGF0aEZpbmRlcjogQ2xvc2VzdFBhdGhGaW5kZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoRHJhZ2dpbmdTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNsb3Nlc3RQYXRoRmluZGVyOiBDbG9zZXN0UGF0aEZpbmRlcjtcclxuXHJcbiAgcHJpdmF0ZSBwYXRoVG9EcmFnOiBQYXRoIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgcHJldmlvdXNQb2ludDogUG9pbnQgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBhdGhEcmFnZ2luZ1NlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLmNsb3Nlc3RQYXRoRmluZGVyID0gZGVwZW5kZW5jaWVzLmNsb3Nlc3RQYXRoRmluZGVyO1xyXG5cclxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VPdXQgPSB0aGlzLm9uTW91c2VPdXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgLy8gVE9ETzogcG9zc2libGUgcGF0aCBnaG9zdCBsYXllciBoZXJlXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3RvcERyYWdnaW5nUGF0aCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0RyYWdnaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzRHJhZ2dpbmc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnRNb3ZpbmdQYXRoKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBjb25zdCBwb2ludCA9IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLmdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgIHRoaXMucGF0aFRvRHJhZyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMucHJldmlvdXNQb2ludCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdCBhbGxQYXRoc0luQm91bmRpbmdCb3g6IFBhdGhbXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5zdGFnZS5sYXllcnMpIHtcclxuICAgICAgY29uc3QgcGF0aHNJbkJvdW5kaW5nQm94ID0gbGF5ZXIucGF0aHMuZmlsdGVyKHBhdGggPT4gcGF0aC5pc1BvaW50SW5Cb3VuZGluZ0JveChwb2ludCkpO1xyXG4gICAgICBhbGxQYXRoc0luQm91bmRpbmdCb3gucHVzaCguLi5wYXRoc0luQm91bmRpbmdCb3gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhbGxQYXRoc0luQm91bmRpbmdCb3gubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgnQ2Fubm90IGRyYWcgcGF0aCAtIG5vIHBhdGggZm91bmQsIHBvaW50IGlzIG5vdCBpbiB0aGUgYm91bmRpbmcgYm94Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXRoVG9EcmFnID0gdGhpcy5jbG9zZXN0UGF0aEZpbmRlci5nZXRDbG9zZXN0UGF0aChhbGxQYXRoc0luQm91bmRpbmdCb3gsIHBvaW50KTtcclxuICAgIHRoaXMucHJldmlvdXNQb2ludCA9IHBvaW50O1xyXG4gICAgdGhpcy5faXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLm9uTW91c2VPdXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5vbk1vdXNlT3V0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5wYXRoVG9EcmFnIHx8ICF0aGlzLnByZXZpb3VzUG9pbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIuZ2V0UG9pbnRGcm9tTW91c2VFdmVudChldmVudCk7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uVmVjdG9yID0gUG9pbnQuc3VidHJhY3QocG9pbnQsIHRoaXMucHJldmlvdXNQb2ludCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBwYXRoUG9pbnQgb2YgdGhpcy5wYXRoVG9EcmFnLmdldFZlcnRpY2VzKCkpIHtcclxuICAgICAgcGF0aFBvaW50Lm1vdmVUbyhQb2ludC5hZGQocGF0aFBvaW50LCB0cmFuc2l0aW9uVmVjdG9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG5cclxuICAgIHRoaXMucHJldmlvdXNQb2ludCA9IHBvaW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlVXAoX2V2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLnN0b3BEcmFnZ2luZ1BhdGgoKTtcclxuICAgIHRoaXMuY2FuY2VsTmV4dENsaWNrRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZU91dChfZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIHRoaXMuc3RvcERyYWdnaW5nUGF0aCgpO1xyXG4gICAgdGhpcy5faXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdG9wRHJhZ2dpbmdQYXRoKCkge1xyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5wYXRoVG9EcmFnID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5wcmV2aW91c1BvaW50ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYW5jZWxOZXh0Q2xpY2tFdmVudCgpIHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCB0cnVlKTtcclxuICAgICAgdGhpcy5faXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCB0cnVlKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUGF0aERyYWdnaW5nU2VydmljZS50cyIsImltcG9ydCB7IENPTE9SUyB9IGZyb20gJ2NvbW1vbi9DT0xPUlMnO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IExpbmVQcm9wZXJ0aWVzIH0gZnJvbSAnY29tbW9uL0xpbmVQcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBGaW5pc2hQb2ludERyYWdFdmVudCB9IGZyb20gJ2V2ZW50cy9wb2ludC1kcmFnL0ZpbmlzaFBvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgUG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9Qb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFN0YXJ0UG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50RHJhZ2dpbmdTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50RHJhZ2dpbmdTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwYXRoR2hvc3RMYXllcjogTGF5ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9pbnREcmFnZ2luZ1NlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcblxyXG4gICAgdGhpcy5vblN0YXJ0UG9pbnREcmFnID0gdGhpcy5vblN0YXJ0UG9pbnREcmFnLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRmluaXNoUG9pbnREcmFnID0gdGhpcy5vbkZpbmlzaFBvaW50RHJhZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblBvaW50RHJhZyA9IHRoaXMub25Qb2ludERyYWcuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5wYXRoR2hvc3RMYXllciA9IG5ldyBMYXllcihMRVguUEFUSF9HSE9TVF9MQVlFUl9OQU1FKTtcclxuICAgIHRoaXMuc3RhZ2UubGF5ZXJzLnNwbGljZSgwLCAwLCB0aGlzLnBhdGhHaG9zdExheWVyKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFN0YXJ0UG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uU3RhcnRQb2ludERyYWcpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihGaW5pc2hQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25GaW5pc2hQb2ludERyYWcpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludERyYWcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnBhdGhHaG9zdExheWVyLnBhdGhzID0gW107XHJcbiAgICB0aGlzLnN0YWdlLnJlbW92ZUxheWVyKHRoaXMucGF0aEdob3N0TGF5ZXIpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoU3RhcnRQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25TdGFydFBvaW50RHJhZyk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBGaW5pc2hQb2ludERyYWdFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25GaW5pc2hQb2ludERyYWdcclxuICAgICk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50RHJhZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU3RhcnRQb2ludERyYWcoZXZlbnQ6IFN0YXJ0UG9pbnREcmFnRXZlbnQpIHtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICghY29uZmlndXJhdGlvbi5kaXNwbGF5UGF0aEdob3N0V2hlbkRyYWdnaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXRoID0gZXZlbnQucGF5bG9hZC5wYXRoLmNsb25lKCk7XHJcbiAgICBwYXRoLmxpbmVQcm9wZXJ0aWVzID0gbmV3IExpbmVQcm9wZXJ0aWVzKENPTE9SUy5HUkVFTiwgMSk7XHJcbiAgICB0aGlzLnBhdGhHaG9zdExheWVyLnBhdGhzLnB1c2gocGF0aCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZpbmlzaFBvaW50RHJhZyhldmVudDogRmluaXNoUG9pbnREcmFnRXZlbnQpIHtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gICAgaWYgKCFjb25maWd1cmF0aW9uLmRpc3BsYXlQYXRoR2hvc3RXaGVuRHJhZ2dpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGF0aEdob3N0TGF5ZXIucGF0aHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUG9pbnREcmFnKGV2ZW50OiBQb2ludERyYWdFdmVudCkge1xyXG4gICAgY29uc3QgeyBlbGVtZW50LCBuZXdQb3NpdGlvbiB9ID0gZXZlbnQucGF5bG9hZDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIGVsZW1lbnQucGF0aC5nZXRWZXJ0aWNlc0l0ZXJhdG9yKCkpIHtcclxuICAgICAgaWYgKHBvaW50LmVxdWFscyhuZXdQb3NpdGlvbikpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgeCA9IG5ld1Bvc2l0aW9uLng7XHJcbiAgICBsZXQgeSA9IG5ld1Bvc2l0aW9uLnk7XHJcblxyXG4gICAgaWYgKHggPCAwKSB7XHJcbiAgICAgIHggPSAwO1xyXG4gICAgfSBlbHNlIGlmICh4ID49IHRoaXMuY2FudmFzLndpZHRoKSB7XHJcbiAgICAgIHggPSB0aGlzLmNhbnZhcy53aWR0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPCAwKSB7XHJcbiAgICAgIHkgPSAwO1xyXG4gICAgfSBlbHNlIGlmICh5ID49IHRoaXMuY2FudmFzLmhlaWdodCkge1xyXG4gICAgICB5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LnBvaW50Lm1vdmVUbyh4LCB5KTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2ludERyYWdnaW5nU2VydmljZS50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBMaW5lQ2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9MaW5lQ2xpY2tFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50SW5zZXJ0ZXJTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50SW5zZXJ0ZXJTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBwcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcCA9IDA7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c0xpbmVIaXQ6IExpbmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9pbnRJbnNlcnRlclNlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICB0aGlzLm9uTGluZUNsaWNrID0gdGhpcy5vbkxpbmVDbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKExpbmVDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbkxpbmVDbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoTGluZUNsaWNrRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTGluZUNsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25MaW5lQ2xpY2soZXZlbnQ6IExpbmVDbGlja0V2ZW50KSB7XHJcbiAgICBjb25zdCBwcmV2aW91c0xpbmVIaXQgPSB0aGlzLnByZXZpb3VzTGluZUhpdDtcclxuICAgIGNvbnN0IHByZXZpb3VzTGluZUNsaWNrVGltZXN0YW1wID0gdGhpcy5wcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcDtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSGl0ID0gZXZlbnQucGF5bG9hZC5saW5lO1xyXG4gICAgdGhpcy5wcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcCA9IGN1cnJlbnRUaW1lc3RhbXA7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhcHJldmlvdXNMaW5lSGl0IHx8XHJcbiAgICAgIGN1cnJlbnRUaW1lc3RhbXAgLSBwcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcCA+IGNvbmZpZ3VyYXRpb24uZG91YmxlQ2xpY2tNYXhEZWxheVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJldmlvdXNMaW5lSGl0LmVxdWFscyhldmVudC5wYXlsb2FkLmxpbmUpKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQucGF5bG9hZC5wYXRoLmZpbmRQb2ludEluZGV4KGV2ZW50LnBheWxvYWQubGluZS5wMik7XHJcbiAgICAgIGNvbnN0IG5ld1BvaW50ID0gZXZlbnQucGF5bG9hZC5saW5lLmdldE1pZGRsZVBvaW50KCk7XHJcbiAgICAgIGNvbnN0IGZsb29yZWRQb2ludCA9IG5ld1BvaW50LmZsb29yKCk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGV2ZW50LnBheWxvYWQucGF0aC5pbnNlcnRWZXJ0ZXgoZmxvb3JlZFBvaW50LCBpbmRleCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUT0RPOiBmaXggd3JvbmcgcmVuZGVyaW5nXHJcbiAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2ludEluc2VydGVyU2VydmljZS50cyIsImltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFBvaW50Q2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9Qb2ludENsaWNrRXZlbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludEVsZW1lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudCc7XHJcblxyXG5pbnRlcmZhY2UgUG9pbnRSZW1vdmVyU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludFJlbW92ZXJTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBwcmV2aW91c1BhdGhQb2ludEVsZW1lbnQ6IFBhdGhQb2ludEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c0NsaWNrVGltZXN0YW1wID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2ludFJlbW92ZXJTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLm9uUG9pbnRDbGljayA9IHRoaXMub25Qb2ludENsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUG9pbnRDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludENsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Qb2ludENsaWNrKGV2ZW50OiBQb2ludENsaWNrRXZlbnQpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhQb2ludEVsZW1lbnQgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgY29uc3QgcHJldmlvdXNQYXRoUG9pbnRFbGVtZW50ID0gdGhpcy5wcmV2aW91c1BhdGhQb2ludEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwcmV2aW91c0NsaWNrVGltZXN0YW1wID0gdGhpcy5wcmV2aW91c0NsaWNrVGltZXN0YW1wO1xyXG5cclxuICAgIHRoaXMudXBkYXRlUHJldmlvdXNDbGlja0luZm9ybWF0aW9uKGV2ZW50LCBjdXJyZW50VGltZXN0YW1wKTtcclxuXHJcbiAgICBpZiAoIXByZXZpb3VzUGF0aFBvaW50RWxlbWVudCB8fCBwcmV2aW91c1BhdGhQb2ludEVsZW1lbnQgIT09IHBhdGhQb2ludEVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50VGltZXN0YW1wIC0gcHJldmlvdXNDbGlja1RpbWVzdGFtcCA+IGNvbmZpZ3VyYXRpb24uZG91YmxlQ2xpY2tNYXhEZWxheSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmVQcmV2aW91c0NsaWNrZWRQb2ludCgpO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVByZXZpb3VzQ2xpY2tJbmZvcm1hdGlvbihldmVudDogUG9pbnRDbGlja0V2ZW50LCB0aW1lc3RhbXA6IG51bWJlcikge1xyXG4gICAgdGhpcy5wcmV2aW91c1BhdGhQb2ludEVsZW1lbnQgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5wcmV2aW91c0NsaWNrVGltZXN0YW1wID0gdGltZXN0YW1wO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVQcmV2aW91c0NsaWNrZWRQb2ludCgpIHtcclxuICAgIGNvbnN0IHBhdGggPSB0aGlzLnByZXZpb3VzUGF0aFBvaW50RWxlbWVudC5wYXRoO1xyXG4gICAgY29uc3QgcG9pbnQgPSB0aGlzLnByZXZpb3VzUGF0aFBvaW50RWxlbWVudC5wb2ludDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBwYXRoLnJlbW92ZVZlcnRleChwb2ludCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ0Nhbm5vdCByZW1vdmUgdmVydGV4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcmV2aW91c1BhdGhQb2ludEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1BvaW50UmVtb3ZlclNlcnZpY2UudHMiLCJpbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFBhdGhQb2ludEVsZW1lbnQsXHJcbiAgUGF0aFBvaW50RWxlbWVudERlcGVuZGVuY2llc1xyXG59IGZyb20gJ3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50JztcclxuaW1wb3J0IHsgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIH0gZnJvbSAndWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50U3luY1NlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIHN0YWdlOiBTdGFnZTtcclxuICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGF0aFBvaW50VHVwbGUge1xyXG4gIHBhdGg6IFBhdGg7XHJcbiAgcG9pbnQ6IFBvaW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRTeW5jU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcGF0aFBvaW50RWxlbWVudHM6IFBhdGhQb2ludEVsZW1lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwYXRoUG9pbnREZXBlbmRlbmNpZXM6IFBhdGhQb2ludEVsZW1lbnREZXBlbmRlbmNpZXM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9pbnRTeW5jU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5zdGFnZSA9IGRlcGVuZGVuY2llcy5zdGFnZTtcclxuICAgIHRoaXMuY29udGFpbmVyID0gZGVwZW5kZW5jaWVzLmNvbnRhaW5lcjtcclxuICAgIHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyID0gZGVwZW5kZW5jaWVzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICB0aGlzLnBhdGhQb2ludERlcGVuZGVuY2llcyA9IHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lclxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnN5bmNocm9uaXplRWxlbWVudHMgPSB0aGlzLnN5bmNocm9uaXplRWxlbWVudHMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgU3luY0NvbXBvbmVudHNFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMuc3luY2hyb25pemVFbGVtZW50c1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgU3luY0NvbXBvbmVudHNFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMuc3luY2hyb25pemVFbGVtZW50c1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzeW5jaHJvbml6ZUVsZW1lbnRzKGV2ZW50OiBTeW5jQ29tcG9uZW50c0V2ZW50KSB7XHJcbiAgICBjb25zdCBlbGVtZW50c1RvUmVtb3ZlID0gdGhpcy5nZXRSZWR1bmRhbnRFbGVtZW50cygpO1xyXG4gICAgZWxlbWVudHNUb1JlbW92ZS5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQucmVtb3ZlKCkpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhQb2ludFR1cGxlcyA9IHRoaXMuZ2V0UGF0aFBvaW50VHVwbGVzKCk7XHJcbiAgICBjb25zdCBwb2ludHNXaXRob3V0RWxlbWVudHMgPSB0aGlzLmdldFBvaW50c1dpdGhvdXRFbGVtZW50cyhwYXRoUG9pbnRUdXBsZXMpO1xyXG4gICAgY29uc3QgbmV3RWxlbWVudHMgPSB0aGlzLmNyZWF0ZVBhdGhQb2ludEVsZW1lbnRzKHBvaW50c1dpdGhvdXRFbGVtZW50cyk7XHJcbiAgICBuZXdFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRzTm90UmVtb3ZlZCA9IHRoaXMucGF0aFBvaW50RWxlbWVudHMuZmlsdGVyKFxyXG4gICAgICBlbGVtZW50ID0+IGVsZW1lbnRzVG9SZW1vdmUuaW5kZXhPZihlbGVtZW50KSA9PT0gLTFcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wYXRoUG9pbnRFbGVtZW50cyA9IFsuLi5uZXdFbGVtZW50cywgLi4uZWxlbWVudHNOb3RSZW1vdmVkXTtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYXRoUG9pbnRUdXBsZXMoKSB7XHJcbiAgICBjb25zdCBwYXRoUG9pbnRUdXBsZXM6IFBhdGhQb2ludFR1cGxlW10gPSBbXTtcclxuXHJcbiAgICB0aGlzLnN0YWdlLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgbGF5ZXIucGF0aHMuZm9yRWFjaChwYXRoID0+IHtcclxuICAgICAgICBwYXRoLmdldFZlcnRpY2VzKCkuZm9yRWFjaChwb2ludCA9PiB7XHJcbiAgICAgICAgICBwYXRoUG9pbnRUdXBsZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgIHBvaW50XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGF0aFBvaW50VHVwbGVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQYXRoUG9pbnRFbGVtZW50cyhwYXRoUG9pbnRzOiBQYXRoUG9pbnRUdXBsZVtdKSB7XHJcbiAgICByZXR1cm4gcGF0aFBvaW50cy5tYXAoXHJcbiAgICAgIHBhdGhQb2ludCA9PlxyXG4gICAgICAgIG5ldyBQYXRoUG9pbnRFbGVtZW50KHBhdGhQb2ludC5wYXRoLCBwYXRoUG9pbnQucG9pbnQsIHRoaXMucGF0aFBvaW50RGVwZW5kZW5jaWVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmVkdW5kYW50RWxlbWVudHMoKSB7XHJcbiAgICBjb25zdCBhY3RpdmVQYXRocyA9IHRoaXMuZ2V0QWN0aXZlUGF0aHMoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wYXRoUG9pbnRFbGVtZW50cy5maWx0ZXIoXHJcbiAgICAgIGNvbXBvbmVudCA9PlxyXG4gICAgICAgIGFjdGl2ZVBhdGhzLmluZGV4T2YoY29tcG9uZW50LnBhdGgpID09PSAtMSB8fFxyXG4gICAgICAgIGNvbXBvbmVudC5wYXRoLmdldFZlcnRpY2VzKCkuaW5kZXhPZihjb21wb25lbnQucG9pbnQpID09PSAtMVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UG9pbnRzV2l0aG91dEVsZW1lbnRzKHBhdGhQb2ludHM6IFBhdGhQb2ludFR1cGxlW10pIHtcclxuICAgIHJldHVybiBwYXRoUG9pbnRzLmZpbHRlcihcclxuICAgICAgcGF0aFBvaW50ID0+XHJcbiAgICAgICAgIXRoaXMucGF0aFBvaW50RWxlbWVudHMuZmluZChcclxuICAgICAgICAgIGNvbXBvbmVudCA9PiBjb21wb25lbnQucGF0aCA9PT0gcGF0aFBvaW50LnBhdGggJiYgY29tcG9uZW50LnBvaW50ID09PSBwYXRoUG9pbnQucG9pbnRcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBY3RpdmVQYXRocygpIHtcclxuICAgIGNvbnN0IHBhdGhzOiBQYXRoW10gPSBbXTtcclxuICAgIHRoaXMuc3RhZ2UubGF5ZXJzLm1hcChsYXllciA9PiBwYXRocy5wdXNoKC4uLmxheWVyLnBhdGhzKSk7XHJcblxyXG4gICAgcmV0dXJuIHBhdGhzO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2ludFN5bmNTZXJ2aWNlLnRzIiwiaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuaW1wb3J0IHsgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIH0gZnJvbSAndWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBGaW5pc2hQb2ludERyYWdFdmVudCB9IGZyb20gJ2V2ZW50cy9wb2ludC1kcmFnL0ZpbmlzaFBvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgUG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9Qb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFN0YXJ0UG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgUG9pbnRDbGlja0V2ZW50IH0gZnJvbSAnZXZlbnRzL1BvaW50Q2xpY2tFdmVudCc7XHJcblxyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50LnNjc3MnO1xyXG5cclxuY29uc3QgY2xhc3NOYW1lcyA9IHtcclxuICBDT01QT05FTlQ6ICdhcHBsaWNhdGlvbi11aV9fdmVydGV4JyxcclxuICBJTklUSUFMOiAnYXBwbGljYXRpb24tdWlfX3ZlcnRleC0taW5pdGlhbCdcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGF0aFBvaW50RWxlbWVudERlcGVuZGVuY2llcyB7XHJcbiAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoUG9pbnRFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHB1YmxpYyBwYXRoOiBQYXRoO1xyXG4gIHB1YmxpYyBwb2ludDogUG9pbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoOiBQYXRoLCBwb2ludDogUG9pbnQsIGRlcGVuZGVuY2llczogUGF0aFBvaW50RWxlbWVudERlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5DT01QT05FTlQpO1xyXG5cclxuICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmcgPSB0aGlzLnN0b3BEcmFnZ2luZy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnBhdGgubGluZVByb3BlcnRpZXMuY29sb3IuZmlsbFN0eWxlO1xyXG4gICAgdGhpcy5zdHlsZS50b3AgPSBgJHt0aGlzLnBvaW50Lnl9cHhgO1xyXG4gICAgdGhpcy5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5wb2ludC54fXB4YDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaW5pdGlhbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWVzLklOSVRJQUwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBpbml0aWFsKGlzSW5pdGlhbDogYm9vbGVhbikge1xyXG4gICAgaWYgKGlzSW5pdGlhbCkge1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5JTklUSUFMKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWVzLklOSVRJQUwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5wYXRoLmdldFZlcnRpY2VzQ291bnQoKSA9PT0gMSB8fFxyXG4gICAgICAoIXRoaXMucGF0aC5jbG9zZWQgJiYgdGhpcy5wYXRoLmZpbmRQb2ludEluZGV4KHRoaXMucG9pbnQpID09PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcclxuICAgIHRoaXMucG9pbnQubW92ZUNhbGxiYWNrID0gdGhpcy51cGRhdGVQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucG9pbnQubW92ZUNhbGxiYWNrID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VEb3duKCkge1xyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgUG9pbnRDbGlja0V2ZW50KHRoaXMpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblxyXG4gICAgaWYgKGV2ZW50LmhhbmRsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN0YXJ0UG9pbnREcmFnRXZlbnQodGhpcykpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLmdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUG9pbnREcmFnRXZlbnQodGhpcywgbW91c2VQb3NpdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdG9wRHJhZ2dpbmcoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBGaW5pc2hQb2ludERyYWdFdmVudCh0aGlzKSk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXBhdGgtcG9pbnQnLCBQYXRoUG9pbnRFbGVtZW50KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9QYXRoUG9pbnRFbGVtZW50LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUGF0aFBvaW50RWxlbWVudC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL1BhdGhQb2ludEVsZW1lbnQuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcGxpY2F0aW9uLXVpX192ZXJ0ZXgge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHg7IH1cXG4gIC5hcHBsaWNhdGlvbi11aV9fdmVydGV4Om5vdCg6YWN0aXZlKSB7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IH1cXG4gIC5hcHBsaWNhdGlvbi11aV9fdmVydGV4OmFjdGl2ZSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkOyB9XFxuXFxuLmFwcGxpY2F0aW9uLXVpX192ZXJ0ZXgtLWluaXRpYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTFmZjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuXHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgTG9hZEJ1dHRvbiB9IGZyb20gJ3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9Mb2FkQnV0dG9uJztcclxuaW1wb3J0IHsgU2F2ZUJ1dHRvbiB9IGZyb20gJ3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9TYXZlQnV0dG9uJztcclxuXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBTZXJpYWxpemF0aW9uU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VyaWFsaXphdGlvblNlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHNlcmlhbGl6YXRpb25Db250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSBzdGFnZTogU3RhZ2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogU2VyaWFsaXphdGlvblNlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIGNvbnN0IHNlcmlhbGl6YXRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VyaWFsaXphdGlvbi1jb250YWluZXInKTtcclxuICAgIGlmICghc2VyaWFsaXphdGlvbkNvbnRhaW5lcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlcmlhbGl6YXRpb24gY29udGFpbmVyIG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VyaWFsaXphdGlvbkNvbnRhaW5lciA9IHNlcmlhbGl6YXRpb25Db250YWluZXI7XHJcblxyXG4gICAgY29uc3QgbG9hZEJ1dHRvbiA9IG5ldyBMb2FkQnV0dG9uKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2VcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IG5ldyBTYXZlQnV0dG9uKHtcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2VcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2VyaWFsaXphdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkQnV0dG9uKTtcclxuICAgIHRoaXMuc2VyaWFsaXphdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB0aGlzLnNlcmlhbGl6YXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1NlcmlhbGl6YXRpb25TZXJ2aWNlLnRzIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmltcG9ydCB7IExFWCB9IGZyb20gJ0xFWCc7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgU2VyaWFsaXphYmxlTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2FkQnV0dG9uRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkQnV0dG9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBidXR0b25FbGVtZW50OiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBMb2FkQnV0dG9uRGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5pbm5lclRleHQgPSAnTG9hZCc7XHJcblxyXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DbGljaygpIHtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWREYXRhID0gcHJvbXB0KCdQbGVhc2UgcGFzdGUgdGhlIHNlcmlhbGl6ZWQgZGF0YScpO1xyXG5cclxuICAgIGlmICghc2VyaWFsaXplZERhdGEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvbHlnb25MYXllciA9IHRoaXMuc3RhZ2UuZmluZExheWVyQnlOYW1lKExFWC5QT0xZR09OX0xBWUVSX05BTUUpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRTZXJpYWxpemFibGVMYXllciA9IHBvbHlnb25MYXllci50b1NlcmlhbGl6YWJsZU9iamVjdCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNlcmlhbGl6YWJsZUxheWVyID0gPFNlcmlhbGl6YWJsZUxheWVyPkpTT04ucGFyc2Uoc2VyaWFsaXplZERhdGEpO1xyXG4gICAgICBwb2x5Z29uTGF5ZXIuZnJvbVNlcmlhbGl6YWJsZU9iamVjdCg8U2VyaWFsaXphYmxlTGF5ZXI+c2VyaWFsaXphYmxlTGF5ZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcG9seWdvbkxheWVyLmZyb21TZXJpYWxpemFibGVPYmplY3QoY3VycmVudFNlcmlhbGl6YWJsZUxheWVyKTtcclxuICAgICAgYWxlcnQoJ0ludmFsaWQgZGF0YScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWxvYWQtYnV0dG9uJywgTG9hZEJ1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9Mb2FkQnV0dG9uLnRzIiwiaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNhdmVCdXR0b25EZXBlbmRlbmNpZXMge1xyXG4gIHN0YWdlOiBTdGFnZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhdmVCdXR0b24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBidXR0b25FbGVtZW50OiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBTYXZlQnV0dG9uRGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5pbm5lclRleHQgPSAnU2F2ZSc7XHJcblxyXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DbGljaygpIHtcclxuICAgIGNvbnN0IHBvbHlnb25MYXllciA9IHRoaXMuc3RhZ2UuZmluZExheWVyQnlOYW1lKExFWC5QT0xZR09OX0xBWUVSX05BTUUpO1xyXG4gICAgY29uc3Qgc2VyaWFsaXphYmxlT2JqZWN0ID0gcG9seWdvbkxheWVyLnRvU2VyaWFsaXphYmxlT2JqZWN0KCk7XHJcblxyXG4gICAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSBKU09OLnN0cmluZ2lmeShzZXJpYWxpemFibGVPYmplY3QpO1xyXG4gICAgcHJvbXB0KCdDb3B5IHRoZSBkYXRhJywgc2VyaWFsaXplZERhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtc2F2ZS1idXR0b24nLCBTYXZlQnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL1NhdmVCdXR0b24udHMiLCJpbXBvcnQgJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzJztcclxuXHJcbmltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvRGlhbG9nQm94JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dPdmVybGF5IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByaXZhdGUgb3ZlcmxheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGlhbG9nQm94OiBEaWFsb2dCb3ggfCB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcclxuXHJcbiAgICB0aGlzLm9uT3ZlcmxheUNsaWNrID0gdGhpcy5vbk92ZXJsYXlDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkRpYWxvZ0Nsb3NlID0gdGhpcy5vbkRpYWxvZ0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheUVsZW1lbnQpO1xyXG4gICAgdGhpcy5vdmVybGF5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdmVybGF5Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLm92ZXJsYXlFbGVtZW50KTtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3ZlcmxheUNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93RGlhbG9nKGRpYWxvZ0JveDogRGlhbG9nQm94KSB7XHJcbiAgICB0aGlzLmRpYWxvZ0JveCA9IGRpYWxvZ0JveDtcclxuICAgIHRoaXMuc2hvd092ZXJsYXkoKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZGlhbG9nQm94KTtcclxuICAgIGRpYWxvZ0JveC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25EaWFsb2dDbG9zZSk7XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgZGlhbG9nQm94LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1ib3gtLWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uT3ZlcmxheUNsaWNrKCkge1xyXG4gICAgaWYgKCF0aGlzLmRpYWxvZ0JveCB8fCAhdGhpcy5kaWFsb2dCb3guY2FuQ2xvc2UoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaWFsb2dCb3guY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25EaWFsb2dDbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLmRpYWxvZ0JveCkge1xyXG4gICAgICBjb25zdCBkaWFsb2dCb3ggPSB0aGlzLmRpYWxvZ0JveDtcclxuICAgICAgdGhpcy5yZW1vdmVDaGlsZChkaWFsb2dCb3gpO1xyXG4gICAgICBkaWFsb2dCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uRGlhbG9nQ2xvc2UpO1xyXG5cclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICBkaWFsb2dCb3guY2xhc3NMaXN0LnJlbW92ZSgnZGlhbG9nLWJveC0tYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlhbG9nQm94ID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93T3ZlcmxheSgpIHtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS0tdmlzaWJsZScpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlT3ZlcmxheSgpIHtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS0tdmlzaWJsZScpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZGlhbG9nLW92ZXJsYXknLCBEaWFsb2dPdmVybGF5KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5LnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vRGlhbG9nT3ZlcmxheS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0RpYWxvZ092ZXJsYXkuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dPdmVybGF5LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluLW91dDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuXFxuLm92ZXJsYXktLXZpc2libGUge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRGlhbG9nT3ZlcmxheSB9IGZyb20gJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheSc7XHJcbmltcG9ydCB7IEluc3RydWN0aW9uc0RpYWxvZyB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdHJ1Y3Rpb25zQnV0dG9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByaXZhdGUgYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBwcml2YXRlIGluc3RydWN0aW9uc0RpYWxvZzogSW5zdHJ1Y3Rpb25zRGlhbG9nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuYnV0dG9uLnRleHRDb250ZW50ID0gJ0luc3RydWN0aW9ucyc7XHJcbiAgICB0aGlzLmJ1dHRvbi5jbGFzc05hbWUgPSAnaW5zdHJ1Y3Rpb25zLWJ1dHRvbic7XHJcblxyXG4gICAgdGhpcy5vbkJ1dHRvbkNsaWNrID0gdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmluc3RydWN0aW9uc0RpYWxvZyA9IG5ldyBJbnN0cnVjdGlvbnNEaWFsb2coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgIHJldHVybiBbJ2RpYWxvZy1vdmVybGF5LWlkJ107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGRpYWxvZ092ZXJsYXlJZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGlhbG9nLW92ZXJsYXktaWQnKSB8fCAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZGlhbG9nT3ZlcmxheUlkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkaWFsb2ctb3ZlcmxheS1pZCcsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24pO1xyXG4gICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmJ1dHRvbik7XHJcbiAgICB0aGlzLmJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQnV0dG9uQ2xpY2soKSB7XHJcbiAgICBjb25zdCBkaWFsb2dPdmVybGF5ID0gPERpYWxvZ092ZXJsYXk+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kaWFsb2dPdmVybGF5SWQpO1xyXG4gICAgaWYgKCFkaWFsb2dPdmVybGF5KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRGlhbG9nIG92ZXJsYXkgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlhbG9nT3ZlcmxheS5zaG93RGlhbG9nKHRoaXMuaW5zdHJ1Y3Rpb25zRGlhbG9nKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1pbnN0cnVjdGlvbnMtYnV0dG9uJywgSW5zdHJ1Y3Rpb25zQnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zQnV0dG9uLnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5zdHJ1Y3Rpb25zLWRpYWxvZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYzNTBmO1xcbiAgY29sb3I6ICNlZWU7IH1cXG5cXG4uaW5zdHJ1Y3Rpb25zLWRpYWxvZ19fdGl0bGUge1xcbiAgbWFyZ2luOiAwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQb2x5Z29uQ2xpcHBlciB9IGZyb20gJ3NlcnZpY2VzL1BvbHlnb25DbGlwcGVyJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnY29tbW9uL1BvbHlnb24nO1xyXG5pbXBvcnQgeyBDbG9zZXN0UGF0aEZpbmRlciB9IGZyb20gJ3NlcnZpY2VzL0Nsb3Nlc3RQYXRoRmluZGVyJztcclxuXHJcbmludGVyZmFjZSBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBwb2x5Z29uQ2xpcHBlcjogUG9seWdvbkNsaXBwZXI7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcG9seWdvbkxheWVyOiBMYXllcjtcclxuICBjbG9zZXN0UGF0aEZpbmRlcjogQ2xvc2VzdFBhdGhGaW5kZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwb2x5Z29uQ2xpcHBlcjogUG9seWdvbkNsaXBwZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHBvbHlnb25MYXllcjogTGF5ZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjbG9zZXN0UGF0aEZpbmRlcjogQ2xvc2VzdFBhdGhGaW5kZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9seWdvbkNsaXBwaW5nU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5wb2x5Z29uQ2xpcHBlciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uQ2xpcHBlcjtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMucG9seWdvbkxheWVyID0gZGVwZW5kZW5jaWVzLnBvbHlnb25MYXllcjtcclxuICAgIHRoaXMuY2xvc2VzdFBhdGhGaW5kZXIgPSBkZXBlbmRlbmNpZXMuY2xvc2VzdFBhdGhGaW5kZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIC8vIE5vdGhpbmcgdG8gZG8gaGVyZVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICAvLyBOb3RoaW5nIHRvIGRvIGhlcmVcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGlwUG9seWdvbnMocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBjb25zdCBwb2x5Z29uc0luQm91bmRpbmdCb3ggPSA8UG9seWdvbltdPnRoaXMucG9seWdvbkxheWVyLnBhdGhzLmZpbHRlcihwYXRoID0+XHJcbiAgICAgIHBhdGguaXNQb2ludEluQm91bmRpbmdCb3gocG9pbnQpXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChwb2x5Z29uc0luQm91bmRpbmdCb3gubGVuZ3RoIDwgMikge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ0NsaWNrIGluIHRoZSBib3VuZGluZyBib3ggb2YgYXQgbGVhc3QgMiBwb2x5Z29ucycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnZleFBvbHlnb25zID0gcG9seWdvbnNJbkJvdW5kaW5nQm94LmZpbHRlcihwb2x5Z29uID0+IHBvbHlnb24uaXNDb252ZXgoKSk7XHJcbiAgICBpZiAoY29udmV4UG9seWdvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgnQ2Fubm90IGZpbmQgYSBjb252ZXggcG9seWdvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3Nlc3RDb252ZXhQb2x5Z29uID0gPFBvbHlnb24+dGhpcy5jbG9zZXN0UGF0aEZpbmRlci5nZXRDbG9zZXN0UGF0aChcclxuICAgICAgY29udmV4UG9seWdvbnMsXHJcbiAgICAgIHBvaW50XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHN1YmplY3RQb2x5Z29ucyA9IHBvbHlnb25zSW5Cb3VuZGluZ0JveC5maWx0ZXIoXHJcbiAgICAgIHBvbHlnb24gPT4gcG9seWdvbiAhPT0gY2xvc2VzdENvbnZleFBvbHlnb25cclxuICAgICk7XHJcbiAgICBjb25zdCBjbG9zZXN0U3ViamVjdFBvbHlnb24gPSA8UG9seWdvbj50aGlzLmNsb3Nlc3RQYXRoRmluZGVyLmdldENsb3Nlc3RQYXRoKFxyXG4gICAgICBzdWJqZWN0UG9seWdvbnMsXHJcbiAgICAgIHBvaW50XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNsaXBwZWRQb2x5Z29uID0gdGhpcy5wb2x5Z29uQ2xpcHBlci5jbGlwUG9seWdvbihcclxuICAgICAgY2xvc2VzdFN1YmplY3RQb2x5Z29uLFxyXG4gICAgICBjbG9zZXN0Q29udmV4UG9seWdvblxyXG4gICAgKTtcclxuICAgIGlmICghY2xpcHBlZFBvbHlnb24pIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCdDYW5ub3QgY2xpcCBwb2x5Z29ucyAodGhleSBkbyBub3Qgb3ZlcmxhcCknKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBvbHlnb25MYXllci5yZW1vdmVQYXRoKGNsb3Nlc3RTdWJqZWN0UG9seWdvbik7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllci5yZW1vdmVQYXRoKGNsb3Nlc3RDb252ZXhQb2x5Z29uKTtcclxuXHJcbiAgICB0aGlzLnBvbHlnb25MYXllci5wYXRocy5wdXNoKGNsaXBwZWRQb2x5Z29uKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1BvbHlnb25DbGlwcGluZ1NlcnZpY2UudHMiXSwic291cmNlUm9vdCI6IiJ9