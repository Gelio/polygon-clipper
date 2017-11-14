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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
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
    presetHeightMapIntensity: 0.05,
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

var	fixUrls = __webpack_require__(41);

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
const HitTestResult_1 = __webpack_require__(46);
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(60);
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DialogBoxButton_1 = __webpack_require__(31);
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(94);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(39);
__webpack_require__(42);
__webpack_require__(43);
const Application_1 = __webpack_require__(45);
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nbody {\n  line-height: 1.5; }\n\n.main-canvas {\n  border: solid 1px black; }\n\n.main-container {\n  width: 100%;\n  padding: 0 1em; }\n\n.canvas-wrapper {\n  width: 100%;\n  position: relative; }\n\n.application-ui {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none; }\n  .application-ui * {\n    pointer-events: all; }\n\n.app-header {\n  margin-bottom: 1em;\n  margin-left: 1em; }\n\n.app-name {\n  margin: 0; }\n\n.footer {\n  margin: 1em 1em; }\n", ""]);

// exports


/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var n,p="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ba(){ba=function(){};p.Symbol||(p.Symbol=da)}var da=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function ea(){ba();var a=p.Symbol.iterator;a||(a=p.Symbol.iterator=p.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});ea=function(){}}function fa(a){var b=0;return ha(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ha(a){ea();a={next:a};a[p.Symbol.iterator]=function(){return this};return a}function ia(a){ea();var b=a[Symbol.iterator];return b?b.call(a):fa(a)}
function ja(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
(function(a){function b(a,b){if("function"===typeof window.CustomEvent)return new CustomEvent(a,b);var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c}function c(a){if(m)return a.ownerDocument!==document?a.ownerDocument:null;var b=a.__importDoc;if(!b&&a.parentNode){b=a.parentNode;if("function"===typeof b.closest)b=b.closest("link[rel=import]");else for(;!g(b)&&(b=b.parentNode););a.__importDoc=b}return b}function d(a){var b=document.querySelectorAll("link[rel=import]:not([import-dependency])"),
c=b.length;c?l(b,function(b){return h(b,function(){0===--c&&a()})}):a()}function e(a){function b(){"loading"!==document.readyState&&document.body&&(document.removeEventListener("readystatechange",b),a())}document.addEventListener("readystatechange",b);b()}function f(a){e(function(){return d(function(){return a&&a()})})}function h(a,b){if(a.__loaded)b&&b();else if("script"===a.localName&&!a.src||"style"===a.localName&&!a.firstChild)a.__loaded=!0,b&&b();else{var c=function(d){a.removeEventListener(d.type,
c);a.__loaded=!0;b&&b()};a.addEventListener("load",c);Ka&&"style"===a.localName||a.addEventListener("error",c)}}function g(a){return a.nodeType===Node.ELEMENT_NODE&&"link"===a.localName&&"import"===a.rel}function k(){var a=this;this.a={};this.b=0;this.f=new MutationObserver(function(b){return a.Ia(b)});this.f.observe(document.head,{childList:!0,subtree:!0});this.c(document)}function l(a,b,c){var d=a?a.length:0,e=c?-1:1;for(c=c?d-1:0;c<d&&0<=c;c+=e)b(a[c],c)}var m="import"in document.createElement("link"),
q=null;!1==="currentScript"in document&&Object.defineProperty(document,"currentScript",{get:function(){return q||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null)},configurable:!0});var E=/(url\()([^)]*)(\))/g,J=/(@import[\s]+(?!url\())([^;]*)(;)/g,Kd=/(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,z={Ca:function(a,b){a.href&&a.setAttribute("href",z.R(a.getAttribute("href"),b));a.src&&a.setAttribute("src",z.R(a.getAttribute("src"),b));if("style"===a.localName){var c=
z.ma(a.textContent,b,E);a.textContent=z.ma(c,b,J)}},ma:function(a,b,c){return a.replace(c,function(a,c,d,e){a=d.replace(/["']/g,"");b&&(a=z.R(a,b));return c+"'"+a+"'"+e})},R:function(a,b){if(void 0===z.V){z.V=!1;try{var c=new URL("b","http://a");c.pathname="c%20d";z.V="http://a/c%20d"===c.href}catch(zf){}}if(z.V)return(new URL(a,b)).href;c=z.va;c||(c=document.implementation.createHTMLDocument("temp"),z.va=c,c.ea=c.createElement("base"),c.head.appendChild(c.ea),c.da=c.createElement("a"));c.ea.href=
b;c.da.href=a;return c.da.href||a}},Lb={async:!0,load:function(a,b,c){if(a)if(a.match(/^data:/)){a=a.split(",");var d=a[1];d=-1<a[0].indexOf(";base64")?atob(d):decodeURIComponent(d);b(d)}else{var e=new XMLHttpRequest;e.open("GET",a,Lb.async);e.onload=function(){var a=e.responseURL||e.getResponseHeader("Location");a&&0===a.indexOf("/")&&(a=(location.origin||location.protocol+"//"+location.host)+a);var d=e.response||e.responseText;304===e.status||0===e.status||200<=e.status&&300>e.status?b(d,a):c(d)};
e.send()}else c("error: href must be specified")}},Ka=/Trident/.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent);k.prototype.c=function(a){var b=this;a=a.querySelectorAll("link[rel=import]");l(a,function(a){return b.F(a)})};k.prototype.F=function(a){var b=this,c=a.href;if(void 0!==this.a[c]){var d=this.a[c];d&&d.__loaded&&(a.import=d,this.l(a))}else this.b++,this.a[c]="pending",Lb.load(c,function(a,d){a=b.Ja(a,d||c);b.a[c]=a;b.b--;b.c(a);b.ka()},function(){b.a[c]=null;b.b--;b.ka()})};
k.prototype.Ja=function(a,b){if(!a)return document.createDocumentFragment();Ka&&(a=a.replace(Kd,function(a,b,c){return-1===a.indexOf("type=")?b+" type=import-disable "+c:a}));var c=document.createElement("template");c.innerHTML=a;if(c.content)a=c.content;else for(a=document.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);if(c=a.querySelector("base"))b=z.R(c.getAttribute("href"),b),c.removeAttribute("href");c=a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]');
var d=0;l(c,function(a){h(a);z.Ca(a,b);a.setAttribute("import-dependency","");"script"===a.localName&&!a.src&&a.textContent&&(a.setAttribute("src","data:text/javascript;charset=utf-8,"+encodeURIComponent(a.textContent+("\n//# sourceURL="+b+(d?"-"+d:"")+".js\n"))),a.textContent="",d++)});return a};k.prototype.ka=function(){var a=this;if(!this.b){this.f.disconnect();this.flatten(document);var b=!1,c=!1,d=function(){c&&b&&(a.c(document),a.b||(a.f.observe(document.head,{childList:!0,subtree:!0}),a.Ha()))};
this.Oa(function(){c=!0;d()});this.Ka(function(){b=!0;d()})}};k.prototype.flatten=function(a){var b=this;a=a.querySelectorAll("link[rel=import]");l(a,function(a){var c=b.a[a.href];(a.import=c)&&c.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(b.a[a.href]=a,a.readyState="loading",a.import=a,b.flatten(c),a.appendChild(c))})};k.prototype.Ka=function(a){function b(e){if(e<d){var f=c[e],g=document.createElement("script");f.removeAttribute("import-dependency");l(f.attributes,function(a){return g.setAttribute(a.name,
a.value)});q=g;f.parentNode.replaceChild(g,f);h(g,function(){q=null;b(e+1)})}else a()}var c=document.querySelectorAll("script[import-dependency]"),d=c.length;b(0)};k.prototype.Oa=function(a){var b=document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),d=b.length;if(d){var e=Ka&&!!document.querySelector("link[rel=stylesheet][href][type=import-disable]");l(b,function(b){h(b,function(){b.removeAttribute("import-dependency");0===--d&&a()});if(e&&b.parentNode!==
document.head){var f=document.createElement(b.localName);f.__appliedElement=b;f.setAttribute("type","import-placeholder");b.parentNode.insertBefore(f,b.nextSibling);for(f=c(b);f&&c(f);)f=c(f);f.parentNode!==document.head&&(f=null);document.head.insertBefore(b,f);b.removeAttribute("type")}})}else a()};k.prototype.Ha=function(){var a=this,b=document.querySelectorAll("link[rel=import]");l(b,function(b){return a.l(b)},!0)};k.prototype.l=function(a){a.__loaded||(a.__loaded=!0,a.import&&(a.import.readyState=
"complete"),a.dispatchEvent(b(a.import?"load":"error",{bubbles:!1,cancelable:!1,detail:void 0})))};k.prototype.Ia=function(a){var b=this;l(a,function(a){return l(a.addedNodes,function(a){a&&a.nodeType===Node.ELEMENT_NODE&&(g(a)?b.F(a):b.c(a))})})};if(m){var ma=document.querySelectorAll("link[rel=import]");l(ma,function(a){a.import&&"loading"===a.import.readyState||(a.__loaded=!0)});ma=function(a){a=a.target;g(a)&&(a.__loaded=!0)};document.addEventListener("load",ma,!0);document.addEventListener("error",
ma,!0)}else{var ca=Object.getOwnPropertyDescriptor(Node.prototype,"baseURI");Object.defineProperty((!ca||ca.configurable?Node:Element).prototype,"baseURI",{get:function(){var a=g(this)?this:c(this);return a?a.href:ca&&ca.get?ca.get.call(this):(document.querySelector("base")||window.location).href},configurable:!0,enumerable:!0});e(function(){return new k})}f(function(){return document.dispatchEvent(b("HTMLImportsLoaded",{cancelable:!0,bubbles:!0,detail:void 0}))});a.useNative=m;a.whenReady=f;a.importForElement=
c})(window.HTMLImports=window.HTMLImports||{});/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r=window.ShadyDOM||{};r.Ea=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var ka=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");r.G=!!(ka&&ka.configurable&&ka.get);r.la=r.force||!r.Ea;function t(a){return a.__shady&&void 0!==a.__shady.firstChild}function u(a){return"ShadyRoot"===a.sa}function la(a){a=a.getRootNode();if(u(a))return a}var v=Element.prototype,na=v.matches||v.matchesSelector||v.mozMatchesSelector||v.msMatchesSelector||v.oMatchesSelector||v.webkitMatchesSelector;
function oa(a,b){if(a&&b)for(var c=Object.getOwnPropertyNames(b),d=0,e;d<c.length&&(e=c[d]);d++){var f=Object.getOwnPropertyDescriptor(b,e);f&&Object.defineProperty(a,e,f)}}function pa(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(d=0;d<c.length;d++)oa(a,c[d]);return a}function qa(a,b){for(var c in b)a[c]=b[c]}var ra=document.createTextNode(""),sa=0,ta=[];(new MutationObserver(function(){for(;ta.length;)try{ta.shift()()}catch(a){throw ra.textContent=sa++,a;}})).observe(ra,{characterData:!0});
function ua(a){ta.push(a);ra.textContent=sa++}var va=!!document.contains;function wa(a,b){for(;b;){if(b==a)return!0;b=b.parentNode}return!1};var xa=[],ya;function za(a){ya||(ya=!0,ua(Aa));xa.push(a)}function Aa(){ya=!1;for(var a=!!xa.length;xa.length;)xa.shift()();return a}Aa.list=xa;function Ba(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.N=new Set}function Ca(a){a.a||(a.a=!0,ua(function(){Da(a)}))}function Da(a){if(a.a){a.a=!1;var b=a.takeRecords();b.length&&a.N.forEach(function(a){a(b)})}}Ba.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function Ea(a,b){a.__shady=a.__shady||{};a.__shady.H||(a.__shady.H=new Ba);a.__shady.H.N.add(b);var c=a.__shady.H;return{wa:b,w:c,ya:a,takeRecords:function(){return c.takeRecords()}}}function Fa(a){var b=a&&a.w;b&&(b.N.delete(a.wa),b.N.size||(a.ya.__shady.H=null))}
function Ga(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})};var w={},Ha=Element.prototype.insertBefore,Ia=Element.prototype.removeChild,Ja=Element.prototype.setAttribute,La=Element.prototype.removeAttribute,Ma=Element.prototype.cloneNode,Na=Document.prototype.importNode,Oa=Element.prototype.addEventListener,Pa=Element.prototype.removeEventListener,Qa=Window.prototype.addEventListener,Ra=Window.prototype.removeEventListener,Sa=Element.prototype.dispatchEvent,Ta=Element.prototype.querySelector,Ua=Element.prototype.querySelectorAll,Va=Node.prototype.contains||
HTMLElement.prototype.contains;w.appendChild=Element.prototype.appendChild;w.insertBefore=Ha;w.removeChild=Ia;w.setAttribute=Ja;w.removeAttribute=La;w.cloneNode=Ma;w.importNode=Na;w.addEventListener=Oa;w.removeEventListener=Pa;w.Ta=Qa;w.Ua=Ra;w.dispatchEvent=Sa;w.querySelector=Ta;w.querySelectorAll=Ua;w.contains=Va;var Wa=/[&\u00A0"]/g,Xa=/[&\u00A0<>]/g;function Ya(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function Za(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var $a=Za("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),ab=Za("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function bb(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,h;e<f&&(h=d[e]);e++){a:{var g=h;var k=a;var l=b;switch(g.nodeType){case Node.ELEMENT_NODE:for(var m=g.localName,q="<"+m,E=g.attributes,J=0;k=E[J];J++)q+=" "+k.name+'="'+k.value.replace(Wa,Ya)+'"';q+=">";g=$a[m]?q:q+bb(g,l)+"</"+m+">";break a;case Node.TEXT_NODE:g=g.data;g=k&&ab[k.localName]?g:g.replace(Xa,Ya);break a;case Node.COMMENT_NODE:g="\x3c!--"+g.data+"--\x3e";break a;default:throw window.console.error(g),
Error("not implemented");}}c+=g}return c};var x={},y=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),A=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1);function cb(a){var b=[];y.currentNode=a;for(a=y.firstChild();a;)b.push(a),a=y.nextSibling();return b}x.parentNode=function(a){y.currentNode=a;return y.parentNode()};x.firstChild=function(a){y.currentNode=a;return y.firstChild()};x.lastChild=function(a){y.currentNode=a;return y.lastChild()};x.previousSibling=function(a){y.currentNode=a;return y.previousSibling()};
x.nextSibling=function(a){y.currentNode=a;return y.nextSibling()};x.childNodes=cb;x.parentElement=function(a){A.currentNode=a;return A.parentNode()};x.firstElementChild=function(a){A.currentNode=a;return A.firstChild()};x.lastElementChild=function(a){A.currentNode=a;return A.lastChild()};x.previousElementSibling=function(a){A.currentNode=a;return A.previousSibling()};x.nextElementSibling=function(a){A.currentNode=a;return A.nextSibling()};
x.children=function(a){var b=[];A.currentNode=a;for(a=A.firstChild();a;)b.push(a),a=A.nextSibling();return b};x.innerHTML=function(a){return bb(a,function(a){return cb(a)})};x.textContent=function(a){switch(a.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:a=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1);for(var b="",c;c=a.nextNode();)b+=c.nodeValue;return b;default:return a.nodeValue}};var db=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML")||Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML"),eb=document.implementation.createHTMLDocument("inert").createElement("div"),fb=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),gb={parentElement:{get:function(){var a=this.__shady&&this.__shady.parentNode;a&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:x.parentElement(this)},configurable:!0},parentNode:{get:function(){var a=this.__shady&&
this.__shady.parentNode;return void 0!==a?a:x.parentNode(this)},configurable:!0},nextSibling:{get:function(){var a=this.__shady&&this.__shady.nextSibling;return void 0!==a?a:x.nextSibling(this)},configurable:!0},previousSibling:{get:function(){var a=this.__shady&&this.__shady.previousSibling;return void 0!==a?a:x.previousSibling(this)},configurable:!0},className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)},configurable:!0},nextElementSibling:{get:function(){if(this.__shady&&
void 0!==this.__shady.nextSibling){for(var a=this.nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return x.nextElementSibling(this)},configurable:!0},previousElementSibling:{get:function(){if(this.__shady&&void 0!==this.__shady.previousSibling){for(var a=this.previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return x.previousElementSibling(this)},configurable:!0}},hb={childNodes:{get:function(){if(t(this)){if(!this.__shady.childNodes){this.__shady.childNodes=
[];for(var a=this.firstChild;a;a=a.nextSibling)this.__shady.childNodes.push(a)}var b=this.__shady.childNodes}else b=x.childNodes(this);b.item=function(a){return b[a]};return b},configurable:!0},childElementCount:{get:function(){return this.children.length},configurable:!0},firstChild:{get:function(){var a=this.__shady&&this.__shady.firstChild;return void 0!==a?a:x.firstChild(this)},configurable:!0},lastChild:{get:function(){var a=this.__shady&&this.__shady.lastChild;return void 0!==a?a:x.lastChild(this)},
configurable:!0},textContent:{get:function(){if(t(this)){for(var a=[],b=0,c=this.childNodes,d;d=c[b];b++)d.nodeType!==Node.COMMENT_NODE&&a.push(d.textContent);return a.join("")}return x.textContent(this)},set:function(a){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(;this.firstChild;)this.removeChild(this.firstChild);(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.appendChild(document.createTextNode(a));break;default:this.nodeValue=a}},configurable:!0},firstElementChild:{get:function(){if(this.__shady&&
void 0!==this.__shady.firstChild){for(var a=this.firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return x.firstElementChild(this)},configurable:!0},lastElementChild:{get:function(){if(this.__shady&&void 0!==this.__shady.lastChild){for(var a=this.lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return x.lastElementChild(this)},configurable:!0},children:{get:function(){var a;t(this)?a=Array.prototype.filter.call(this.childNodes,function(a){return a.nodeType===
Node.ELEMENT_NODE}):a=x.children(this);a.item=function(b){return a[b]};return a},configurable:!0},innerHTML:{get:function(){var a="template"===this.localName?this.content:this;return t(this)?bb(a):x.innerHTML(a)},set:function(a){for(var b="template"===this.localName?this.content:this;b.firstChild;)b.removeChild(b.firstChild);for(db&&db.set?db.set.call(eb,a):eb.innerHTML=a;eb.firstChild;)b.appendChild(eb.firstChild)},configurable:!0}},ib={shadowRoot:{get:function(){return this.__shady&&this.__shady.Ma||
null},configurable:!0}},jb={activeElement:{get:function(){var a=fb&&fb.get?fb.get.call(document):r.G?void 0:document.activeElement;if(a&&a.nodeType){var b=!!u(this);if(this===document||b&&this.host!==a&&w.contains.call(this.host,a)){for(b=la(a);b&&b!==this;)a=b.host,b=la(a);a=this===document?b?null:a:b===this?a:null}else a=null}else a=null;return a},set:function(){},configurable:!0}};
function B(a,b,c){for(var d in b){var e=Object.getOwnPropertyDescriptor(a,d);e&&e.configurable||!e&&c?Object.defineProperty(a,d,b[d]):c&&console.warn("Could not define",d,"on",a)}}function C(a){B(a,gb);B(a,hb);B(a,jb)}var kb=r.G?function(){}:function(a){a.__shady&&a.__shady.ta||(a.__shady=a.__shady||{},a.__shady.ta=!0,B(a,gb,!0))},lb=r.G?function(){}:function(a){a.__shady&&a.__shady.ra||(a.__shady=a.__shady||{},a.__shady.ra=!0,B(a,hb,!0),B(a,ib,!0))};function mb(a,b,c){kb(a);c=c||null;a.__shady=a.__shady||{};b.__shady=b.__shady||{};c&&(c.__shady=c.__shady||{});a.__shady.previousSibling=c?c.__shady.previousSibling:b.lastChild;var d=a.__shady.previousSibling;d&&d.__shady&&(d.__shady.nextSibling=a);(d=a.__shady.nextSibling=c)&&d.__shady&&(d.__shady.previousSibling=a);a.__shady.parentNode=b;c?c===b.__shady.firstChild&&(b.__shady.firstChild=a):(b.__shady.lastChild=a,b.__shady.firstChild||(b.__shady.firstChild=a));b.__shady.childNodes=null}
function nb(a){if(!a.__shady||void 0===a.__shady.firstChild){a.__shady=a.__shady||{};a.__shady.firstChild=x.firstChild(a);a.__shady.lastChild=x.lastChild(a);lb(a);for(var b=a.__shady.childNodes=x.childNodes(a),c=0,d;c<b.length&&(d=b[c]);c++)d.__shady=d.__shady||{},d.__shady.parentNode=a,d.__shady.nextSibling=b[c+1]||null,d.__shady.previousSibling=b[c-1]||null,kb(d)}};function ob(a,b,c){if(b===a)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(c){var d=c.__shady&&c.__shady.parentNode;if(void 0!==d&&d!==a||void 0===d&&x.parentNode(c)!==a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(c===b)return b;b.parentNode&&pb(b.parentNode,b);d=la(a);var e;if(e=d)a:{if(!b.__noInsertionPoint){var f;"slot"===b.localName?f=[b]:
b.querySelectorAll&&(f=b.querySelectorAll("slot"));if(f&&f.length){e=f;break a}}e=void 0}(f=e)&&d.C.push.apply(d.C,[].concat(f instanceof Array?f:ja(ia(f))));d&&("slot"===a.localName||f)&&D(d);if(t(a)){d=c;lb(a);a.__shady=a.__shady||{};void 0!==a.__shady.firstChild&&(a.__shady.childNodes=null);if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE){f=b.childNodes;for(e=0;e<f.length;e++)mb(f[e],a,d);b.__shady=b.__shady||{};d=void 0!==b.__shady.firstChild?null:void 0;b.__shady.firstChild=b.__shady.lastChild=d;
b.__shady.childNodes=d}else mb(b,a,d);if(qb(a)){D(a.__shady.root);var h=!0}else a.__shady.root&&(h=!0)}h||(h=u(a)?a.host:a,c?(c=rb(c),w.insertBefore.call(h,b,c)):w.appendChild.call(h,b));sb(a,b);return b}
function pb(a,b){if(b.parentNode!==a)throw Error("The node to be removed is not a child of this node: "+b);var c=la(b);if(t(a)){b.__shady=b.__shady||{};a.__shady=a.__shady||{};b===a.__shady.firstChild&&(a.__shady.firstChild=b.__shady.nextSibling);b===a.__shady.lastChild&&(a.__shady.lastChild=b.__shady.previousSibling);var d=b.__shady.previousSibling,e=b.__shady.nextSibling;d&&(d.__shady=d.__shady||{},d.__shady.nextSibling=e);e&&(e.__shady=e.__shady||{},e.__shady.previousSibling=d);b.__shady.parentNode=
b.__shady.previousSibling=b.__shady.nextSibling=void 0;void 0!==a.__shady.childNodes&&(a.__shady.childNodes=null);if(qb(a)){D(a.__shady.root);var f=!0}}tb(b);if(c){(d=a&&"slot"===a.localName)&&(f=!0);ub(c);e=c.i;for(var h in e)for(var g=e[h],k=0;k<g.length;k++){var l=g[k];if(wa(b,l)){g.splice(k,1);var m=c.m.indexOf(l);0<=m&&c.m.splice(m,1);k--;if(m=l.__shady.D)for(l=0;l<m.length;l++){var q=m[l],E=x.parentNode(q);E&&w.removeChild.call(E,q)}m=!0}}(m||d)&&D(c)}f||(f=u(a)?a.host:a,(!a.__shady.root&&"slot"!==
b.localName||f===x.parentNode(b))&&w.removeChild.call(f,b));sb(a,null,b);return b}function tb(a){if(a.__shady&&void 0!==a.__shady.ca)for(var b=a.childNodes,c=0,d=b.length,e;c<d&&(e=b[c]);c++)tb(e);a.__shady&&(a.__shady.ca=void 0)}function rb(a){var b=a;a&&"slot"===a.localName&&(b=(b=a.__shady&&a.__shady.D)&&b.length?b[0]:rb(a.nextSibling));return b}function qb(a){return(a=a&&a.__shady&&a.__shady.root)&&vb(a)}
function wb(a,b){if("slot"===b)a=a.parentNode,qb(a)&&D(a.__shady.root);else if("slot"===a.localName&&"name"===b&&(b=la(a))){var c=a.ua,d=xb(a);if(d!==c){c=b.i[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.i[d]||(b.i[d]=[]);c.push(a);1<c.length&&(b.i[d]=yb(c))}D(b)}}function sb(a,b,c){if(a=a.__shady&&a.__shady.H)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Ca(a)}
function zb(a){if(a&&a.nodeType){a.__shady=a.__shady||{};var b=a.__shady.ca;void 0===b&&(u(a)?b=a:b=(b=a.parentNode)?zb(b):a,w.contains.call(document.documentElement,a)&&(a.__shady.ca=b));return b}}function Ab(a,b,c){var d=[];Bb(a.childNodes,b,c,d);return d}function Bb(a,b,c,d){for(var e=0,f=a.length,h;e<f&&(h=a[e]);e++){var g;if(g=h.nodeType===Node.ELEMENT_NODE){g=h;var k=b,l=c,m=d,q=k(g);q&&m.push(g);l&&l(q)?g=q:(Bb(g.childNodes,k,l,m),g=void 0)}if(g)break}}var Cb=null;
function Db(a,b,c){Cb||(Cb=window.ShadyCSS&&window.ShadyCSS.ScopingShim);Cb&&"class"===b?Cb.setElementClass(a,c):(w.setAttribute.call(a,b,c),wb(a,b))}function Eb(a,b){if(a.ownerDocument!==document)return w.importNode.call(document,a,b);var c=w.importNode.call(document,a,!1);if(b){a=a.childNodes;b=0;for(var d;b<a.length;b++)d=Eb(a[b],!0),c.appendChild(d)}return c};var Fb="__eventWrappers"+Date.now(),Gb={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,
dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0};function Hb(a,b){var c=[],d=a;for(a=a===window?window:a.getRootNode();d;)c.push(d),d=d.assignedSlot?d.assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.parentNode;c[c.length-1]===document&&c.push(window);return c}
function Ib(a,b){if(!u)return a;a=Hb(a,!0);for(var c=0,d,e,f,h;c<b.length;c++)if(d=b[c],f=d===window?window:d.getRootNode(),f!==e&&(h=a.indexOf(f),e=f),!u(f)||-1<h)return d}
var Jb={get composed(){!1!==this.isTrusted&&void 0===this.S&&(this.S=Gb[this.type]);return this.S||!1},composedPath:function(){this.fa||(this.fa=Hb(this.__target,this.composed));return this.fa},get target(){return Ib(this.currentTarget,this.composedPath())},get relatedTarget(){if(!this.ga)return null;this.ha||(this.ha=Hb(this.ga,!0));return Ib(this.currentTarget,this.ha)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.T=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);
this.T=this.qa=!0}};function Kb(a){function b(b,d){b=new a(b,d);b.S=d&&!!d.composed;return b}qa(b,a);b.prototype=a.prototype;return b}var Mb={focus:!0,blur:!0};function Nb(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&a.target!==a.relatedTarget&&(e.call(b,a),!a.qa);d++);}
function Ob(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];Nb(a,d,"capture");if(a.T)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=d.__shady&&d.__shady.root;if(0===c||f&&f===e)if(Nb(a,d,"bubble"),d!==window&&(e=d.getRootNode()),a.T)break}}
function Pb(a,b,c,d,e,f){for(var h=0;h<a.length;h++){var g=a[h],k=g.type,l=g.capture,m=g.once,q=g.passive;if(b===g.node&&c===k&&d===l&&e===m&&f===q)return h}return-1}
function Qb(a,b,c){if(b){if("object"===typeof c){var d=!!c.capture;var e=!!c.once;var f=!!c.passive}else d=!!c,f=e=!1;var h=c&&c.U||this,g=b[Fb];if(g){if(-1<Pb(g,h,a,d,e,f))return}else b[Fb]=[];g=function(d){e&&this.removeEventListener(a,b,c);d.__target||Rb(d);if(h!==this){var f=Object.getOwnPropertyDescriptor(d,"currentTarget");Object.defineProperty(d,"currentTarget",{get:function(){return h},configurable:!0})}if(d.composed||-1<d.composedPath().indexOf(h))if(d.target===d.relatedTarget)d.eventPhase===
Event.BUBBLING_PHASE&&d.stopImmediatePropagation();else if(d.eventPhase===Event.CAPTURING_PHASE||d.bubbles||d.target===h){var g="object"===typeof b&&b.handleEvent?b.handleEvent(d):b.call(h,d);h!==this&&(f?(Object.defineProperty(d,"currentTarget",f),f=null):delete d.currentTarget);return g}};b[Fb].push({node:this,type:a,capture:d,once:e,passive:f,Va:g});Mb[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][d?"capture":"bubble"].push(g)):
(this instanceof Window?w.Ta:w.addEventListener).call(this,a,g,c)}}
function Sb(a,b,c){if(b){if("object"===typeof c){var d=!!c.capture;var e=!!c.once;var f=!!c.passive}else d=!!c,f=e=!1;var h=c&&c.U||this,g=void 0;var k=null;try{k=b[Fb]}catch(l){}k&&(e=Pb(k,h,a,d,e,f),-1<e&&(g=k.splice(e,1)[0].Va,k.length||(b[Fb]=void 0)));(this instanceof Window?w.Ua:w.removeEventListener).call(this,a,g||b,c);g&&Mb[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][d?"capture":"bubble"],g=a.indexOf(g),-1<g&&a.splice(g,1))}}
function Tb(){for(var a in Mb)window.addEventListener(a,function(a){a.__target||(Rb(a),Ob(a))},!0)}function Rb(a){a.__target=a.target;a.ga=a.relatedTarget;if(r.G){var b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__patchProto")){var c=Object.create(b);c.Xa=b;oa(c,Jb);b.__patchProto=c}a.__proto__=b.__patchProto}else oa(a,Jb)}var Ub=Kb(window.Event),Vb=Kb(window.CustomEvent),Wb=Kb(window.MouseEvent);function Xb(a,b){return{index:a,I:[],M:b}}
function Yb(a,b,c,d){var e=0,f=0,h=0,g=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(h=0;h<k;h++)if(a[h]!==c[h])break a;h=k}if(b==a.length&&d==c.length){g=a.length;for(var l=c.length,m=0;m<k-h&&Zb(a[--g],c[--l]);)m++;g=m}e+=h;f+=h;b-=g;d-=g;if(0==b-e&&0==d-f)return[];if(e==b){for(b=Xb(e,0);f<d;)b.I.push(c[f++]);return[b]}if(f==d)return[Xb(e,b-e)];k=e;h=f;d=d-h+1;g=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(g),b[l][0]=l;for(l=0;l<g;l++)b[0][l]=l;for(l=1;l<d;l++)for(m=1;m<g;m++)if(a[k+m-1]===c[h+l-1])b[l][m]=
b[l-1][m-1];else{var q=b[l-1][m]+1,E=b[l][m-1]+1;b[l][m]=q<E?q:E}k=b.length-1;h=b[0].length-1;d=b[k][h];for(a=[];0<k||0<h;)0==k?(a.push(2),h--):0==h?(a.push(3),k--):(g=b[k-1][h-1],l=b[k-1][h],m=b[k][h-1],q=l<m?l<g?l:g:m<g?m:g,q==g?(g==d?a.push(0):(a.push(1),d=g),k--,h--):q==l?(a.push(3),k--,d=l):(a.push(2),h--,d=m));a.reverse();b=void 0;k=[];for(h=0;h<a.length;h++)switch(a[h]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Xb(e,0));b.M++;e++;b.I.push(c[f]);f++;break;case 2:b||(b=Xb(e,0));
b.M++;e++;break;case 3:b||(b=Xb(e,0)),b.I.push(c[f]),f++}b&&k.push(b);return k}function Zb(a,b){return a===b};var $b={};function F(a,b,c){if(a!==$b)throw new TypeError("Illegal constructor");a=document.createDocumentFragment();a.__proto__=F.prototype;a.sa="ShadyRoot";nb(b);nb(a);a.host=b;a.a=c&&c.mode;b.__shady=b.__shady||{};b.__shady.root=a;b.__shady.Ma="closed"!==a.a?a:null;a.L=!1;a.m=[];a.i={};a.C=[];c=x.childNodes(b);for(var d=0,e=c.length;d<e;d++)w.removeChild.call(b,c[d]);return a}F.prototype=Object.create(DocumentFragment.prototype);function D(a){a.L||(a.L=!0,za(function(){return ac(a)}))}
function ac(a){for(var b;a;){a.L&&(b=a);a:{var c=a;a=c.host.getRootNode();if(u(a))for(var d=c.host.childNodes,e=0;e<d.length;e++)if(c=d[e],"slot"==c.localName)break a;a=void 0}}b&&b._renderRoot()}
F.prototype._renderRoot=function(){this.L=!1;ub(this);for(var a=0,b;a<this.m.length;a++){b=this.m[a];var c=b.__shady.assignedNodes;b.__shady.assignedNodes=[];b.__shady.D=[];if(b.__shady.ia=c)for(var d=0;d<c.length;d++){var e=c[d];e.__shady.Z=e.__shady.assignedSlot;e.__shady.assignedSlot===b&&(e.__shady.assignedSlot=null)}}for(b=this.host.firstChild;b;b=b.nextSibling)bc(this,b);for(a=0;a<this.m.length;a++){b=this.m[a];if(!b.__shady.assignedNodes.length)for(c=b.firstChild;c;c=c.nextSibling)bc(this,
c,b);c=b.parentNode;(c=c.__shady&&c.__shady.root)&&vb(c)&&c._renderRoot();cc(this,b.__shady.D,b.__shady.assignedNodes);if(c=b.__shady.ia){for(d=0;d<c.length;d++)c[d].__shady.Z=null;b.__shady.ia=null;c.length>b.__shady.assignedNodes.length&&(b.__shady.aa=!0)}b.__shady.aa&&(b.__shady.aa=!1,dc(this,b))}a=this.m;b=[];for(c=0;c<a.length;c++)d=a[c].parentNode,d.__shady&&d.__shady.root||!(0>b.indexOf(d))||b.push(d);for(a=0;a<b.length;a++){c=b[a];d=c===this?this.host:c;e=[];c=c.childNodes;for(var f=0;f<c.length;f++){var h=
c[f];if("slot"==h.localName){h=h.__shady.D;for(var g=0;g<h.length;g++)e.push(h[g])}else e.push(h)}c=void 0;f=x.childNodes(d);h=Yb(e,e.length,f,f.length);for(var k=g=0;g<h.length&&(c=h[g]);g++){for(var l=0,m;l<c.I.length&&(m=c.I[l]);l++)x.parentNode(m)===d&&w.removeChild.call(d,m),f.splice(c.index+k,1);k-=c.M}for(k=0;k<h.length&&(c=h[k]);k++)for(g=f[c.index],l=c.index;l<c.index+c.M;l++)m=e[l],w.insertBefore.call(d,m,g),f.splice(l,0,m)}};
function bc(a,b,c){b.__shady=b.__shady||{};var d=b.__shady.Z;b.__shady.Z=null;c||(c=(a=a.i[b.slot||"__catchall"])&&a[0]);c?(c.__shady.assignedNodes.push(b),b.__shady.assignedSlot=c):b.__shady.assignedSlot=void 0;d!==b.__shady.assignedSlot&&b.__shady.assignedSlot&&(b.__shady.assignedSlot.__shady.aa=!0)}function cc(a,b,c){for(var d=0,e;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=e.__shady.assignedNodes;f&&f.length&&cc(a,b,f)}else b.push(c[d])}
function dc(a,b){w.dispatchEvent.call(b,new Event("slotchange"));b.__shady.assignedSlot&&dc(a,b.__shady.assignedSlot)}function ub(a){if(a.C.length){for(var b=a.C,c,d=0;d<b.length;d++){var e=b[d];e.__shady=e.__shady||{};nb(e);nb(e.parentNode);var f=xb(e);a.i[f]?(c=c||{},c[f]=!0,a.i[f].push(e)):a.i[f]=[e];a.m.push(e)}if(c)for(var h in c)a.i[h]=yb(a.i[h]);a.C=[]}}function xb(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.ua=b}
function yb(a){return a.sort(function(a,c){a=ec(a);for(var b=ec(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=Array.from(c.parentNode.childNodes),a.indexOf(c)-a.indexOf(f)}})}function ec(a){var b=[];do b.unshift(a);while(a=a.parentNode);return b}function vb(a){ub(a);return!!a.m.length}F.prototype.addEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.U=this;this.host.addEventListener(a,b,c)};
F.prototype.removeEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.U=this;this.host.removeEventListener(a,b,c)};F.prototype.getElementById=function(a){return Ab(this,function(b){return b.id==a},function(a){return!!a})[0]||null};var fc=F.prototype;B(fc,hb,!0);B(fc,jb,!0);function gc(a){var b=a.getRootNode();u(b)&&ac(b);return a.__shady&&a.__shady.assignedSlot||null}
var hc={addEventListener:Qb.bind(window),removeEventListener:Sb.bind(window)},ic={addEventListener:Qb,removeEventListener:Sb,appendChild:function(a){return ob(this,a)},insertBefore:function(a,b){return ob(this,a,b)},removeChild:function(a){return pb(this,a)},replaceChild:function(a,b){ob(this,a,b);pb(this,b);return a},cloneNode:function(a){if("template"==this.localName)var b=w.cloneNode.call(this,a);else if(b=w.cloneNode.call(this,!1),a){a=this.childNodes;for(var c=0,d;c<a.length;c++)d=a[c].cloneNode(!0),
b.appendChild(d)}return b},getRootNode:function(){return zb(this)},contains:function(a){return wa(this,a)},get isConnected(){var a=this.ownerDocument;if(va&&w.contains.call(a,this)||a.documentElement&&w.contains.call(a.documentElement,this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.parentNode||(a instanceof F?a.host:void 0);return!!(a&&a instanceof Document)},dispatchEvent:function(a){Aa();return w.dispatchEvent.call(this,a)}},jc={get assignedSlot(){return gc(this)}},kc={querySelector:function(a){return Ab(this,
function(b){return na.call(b,a)},function(a){return!!a})[0]||null},querySelectorAll:function(a){return Ab(this,function(b){return na.call(b,a)})}},lc={assignedNodes:function(a){if("slot"===this.localName){var b=this.getRootNode();u(b)&&ac(b);return this.__shady?(a&&a.flatten?this.__shady.D:this.__shady.assignedNodes)||[]:[]}}},mc=pa({setAttribute:function(a,b){Db(this,a,b)},removeAttribute:function(a){w.removeAttribute.call(this,a);wb(this,a)},attachShadow:function(a){if(!this)throw"Must provide a host.";
if(!a)throw"Not enough arguments.";return new F($b,this,a)},get slot(){return this.getAttribute("slot")},set slot(a){Db(this,"slot",a)},get assignedSlot(){return gc(this)}},kc,lc);Object.defineProperties(mc,ib);var nc=pa({importNode:function(a,b){return Eb(a,b)},getElementById:function(a){return Ab(this,function(b){return b.id==a},function(a){return!!a})[0]||null}},kc);Object.defineProperties(nc,{_activeElement:jb.activeElement});
var oc=HTMLElement.prototype.blur,pc=pa({blur:function(){var a=this.__shady&&this.__shady.root;(a=a&&a.activeElement)?a.blur():oc.call(this)}});function G(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f.value?a[e]=f.value:Object.defineProperty(a,e,f)}};if(r.la){var ShadyDOM={inUse:r.la,patch:function(a){return a},isShadyRoot:u,enqueue:za,flush:Aa,settings:r,filterMutations:Ga,observeChildren:Ea,unobserveChildren:Fa,nativeMethods:w,nativeTree:x};window.ShadyDOM=ShadyDOM;window.Event=Ub;window.CustomEvent=Vb;window.MouseEvent=Wb;Tb();var qc=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;G(window.Node.prototype,ic);G(window.Window.prototype,hc);G(window.Text.prototype,jc);G(window.DocumentFragment.prototype,kc);G(window.Element.prototype,
mc);G(window.Document.prototype,nc);window.HTMLSlotElement&&G(window.HTMLSlotElement.prototype,lc);G(qc.prototype,pc);r.G&&(C(window.Node.prototype),C(window.Text.prototype),C(window.DocumentFragment.prototype),C(window.Element.prototype),C(qc.prototype),C(window.Document.prototype),window.HTMLSlotElement&&C(window.HTMLSlotElement.prototype));window.ShadowRoot=F};var rc=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function sc(a){var b=rc.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function H(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}
function tc(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function I(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)I(d,b,c);d=tc(a,e);continue}else if("template"===f){d=tc(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)I(e,b,c)}d=d.firstChild?d.firstChild:tc(a,d)}}function K(a,b,c){a[b]=c};function uc(){this.a=new Map;this.l=new Map;this.f=[];this.c=!1}function vc(a,b,c){a.a.set(b,c);a.l.set(c.constructor,c)}function wc(a,b){a.c=!0;a.f.push(b)}function xc(a,b){a.c&&I(b,function(b){return a.b(b)})}uc.prototype.b=function(a){if(this.c&&!a.__CE_patched){a.__CE_patched=!0;for(var b=0;b<this.f.length;b++)this.f[b](a)}};function L(a,b){var c=[];I(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):yc(a,d)}}
function M(a,b){var c=[];I(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function N(a,b,c){c=void 0===c?{}:c;var d=c.Sa||new Set,e=c.oa||function(b){return yc(a,b)},f=[];I(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&"complete"===c.readyState?(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0):b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;c.__CE_isImportDocument=!0;c.__CE_hasRegistry=!0;var f=new Set(d);f.delete(c);N(a,c,{Sa:f,oa:e})}})}else f.push(b)},
d);if(a.c)for(b=0;b<f.length;b++)a.b(f[b]);for(b=0;b<f.length;b++)e(f[b])}
function yc(a,b){if(void 0===b.__CE_state){var c=a.a.get(b.localName);if(c){c.constructionStack.push(b);var d=c.constructor;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(h){throw b.__CE_state=2,h;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=c[d],f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null)}H(b)&&
a.connectedCallback(b)}}}uc.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};uc.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a)};uc.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e)};function zc(a,b){this.h=a;this.a=b;this.w=void 0;N(this.h,this.a);"loading"===this.a.readyState&&(this.w=new MutationObserver(this.b.bind(this)),this.w.observe(this.a,{childList:!0,subtree:!0}))}function Ac(a){a.w&&a.w.disconnect()}zc.prototype.b=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||Ac(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)N(this.h,c[d])};function Bc(){var a=this;this.b=this.a=void 0;this.c=new Promise(function(b){a.b=b;a.a&&b(a.a)})}function Cc(a){if(a.a)throw Error("Already resolved.");a.a=void 0;a.b&&a.b(void 0)};function O(a){this.W=!1;this.h=a;this.$=new Map;this.X=function(a){return a()};this.K=!1;this.Y=[];this.xa=new zc(a,document)}
O.prototype.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!sc(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.h.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.W)throw Error("A custom element is already being defined.");this.W=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var h=d("disconnectedCallback");var g=d("adoptedCallback");var k=d("attributeChangedCallback");var l=b.observedAttributes||[]}catch(m){return}finally{this.W=!1}b={localName:a,constructor:b,connectedCallback:f,disconnectedCallback:h,adoptedCallback:g,attributeChangedCallback:k,observedAttributes:l,constructionStack:[]};vc(this.h,a,b);this.Y.push(b);
this.K||(this.K=!0,this.X(function(){return Dc(c)}))};function Dc(a){if(!1!==a.K){a.K=!1;for(var b=a.Y,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);N(a.h,document,{oa:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.h.a.get(e)&&c.push(b)}}});for(e=0;e<c.length;e++)yc(a.h,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var h=0;h<f.length;h++)yc(a.h,f[h]);(e=a.$.get(e))&&Cc(e)}}}O.prototype.get=function(a){if(a=this.h.a.get(a))return a.constructor};
O.prototype.whenDefined=function(a){if(!sc(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.$.get(a);if(b)return b.c;b=new Bc;this.$.set(a,b);this.h.a.get(a)&&!this.Y.some(function(b){return b.localName===a})&&Cc(b);return b.c};O.prototype.La=function(a){Ac(this.xa);var b=this.X;this.X=function(c){return a(function(){return b(c)})}};window.CustomElementRegistry=O;O.prototype.define=O.prototype.define;O.prototype.get=O.prototype.get;
O.prototype.whenDefined=O.prototype.whenDefined;O.prototype.polyfillWrapFlushCallback=O.prototype.La;var Ec=window.Document.prototype.createElement,Fc=window.Document.prototype.createElementNS,Gc=window.Document.prototype.importNode,Hc=window.Document.prototype.prepend,Ic=window.Document.prototype.append,Jc=window.DocumentFragment.prototype.prepend,Kc=window.DocumentFragment.prototype.append,Lc=window.Node.prototype.cloneNode,Mc=window.Node.prototype.appendChild,Nc=window.Node.prototype.insertBefore,Oc=window.Node.prototype.removeChild,Pc=window.Node.prototype.replaceChild,Qc=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),Rc=window.Element.prototype.attachShadow,Sc=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Tc=window.Element.prototype.getAttribute,Uc=window.Element.prototype.setAttribute,Vc=window.Element.prototype.removeAttribute,Wc=window.Element.prototype.getAttributeNS,Xc=window.Element.prototype.setAttributeNS,Yc=window.Element.prototype.removeAttributeNS,Zc=window.Element.prototype.insertAdjacentElement,$c=window.Element.prototype.prepend,ad=window.Element.prototype.append,
bd=window.Element.prototype.before,cd=window.Element.prototype.after,dd=window.Element.prototype.replaceWith,ed=window.Element.prototype.remove,fd=window.HTMLElement,gd=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),hd=window.HTMLElement.prototype.insertAdjacentElement;var id=new function(){};function jd(){var a=P;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.l.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=Ec.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,a.b(e),e;d=e.length-1;var f=e[d];if(f===id)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=id;Object.setPrototypeOf(f,b.prototype);a.b(f);return f}b.prototype=fd.prototype;return b}()};function kd(a,b,c){function d(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];e=[];for(var f=[],l=0;l<d.length;l++){var m=d[l];m instanceof Element&&H(m)&&f.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)e.push(m);else e.push(m)}b.apply(this,d);for(d=0;d<f.length;d++)M(a,f[d]);if(H(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&L(a,f)}}void 0!==c.P&&(b.prepend=d(c.P));void 0!==c.append&&(b.append=d(c.append))};function ld(){var a=P;K(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructor}b=Ec.call(this,b);a.b(b);return b});K(Document.prototype,"importNode",function(b,c){b=Gc.call(this,b,c);this.__CE_hasRegistry?N(a,b):xc(a,b);return b});K(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructor}b=Fc.call(this,b,c);a.b(b);return b});
kd(a,Document.prototype,{P:Hc,append:Ic})};function md(){var a=P;function b(b,d){Object.defineProperty(b,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(b){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,b);else{var c=void 0;if(this.firstChild){var e=this.childNodes,g=e.length;if(0<g&&H(this)){c=Array(g);for(var k=0;k<g;k++)c[k]=e[k]}}d.set.call(this,b);if(c)for(b=0;b<c.length;b++)M(a,c[b])}}})}K(Node.prototype,"insertBefore",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);
b=Nc.call(this,b,d);if(H(this))for(d=0;d<c.length;d++)L(a,c[d]);return b}c=H(b);d=Nc.call(this,b,d);c&&M(a,b);H(this)&&L(a,b);return d});K(Node.prototype,"appendChild",function(b){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=Mc.call(this,b);if(H(this))for(var e=0;e<c.length;e++)L(a,c[e]);return b}c=H(b);e=Mc.call(this,b);c&&M(a,b);H(this)&&L(a,b);return e});K(Node.prototype,"cloneNode",function(b){b=Lc.call(this,b);this.ownerDocument.__CE_hasRegistry?N(a,b):
xc(a,b);return b});K(Node.prototype,"removeChild",function(b){var c=H(b),e=Oc.call(this,b);c&&M(a,b);return e});K(Node.prototype,"replaceChild",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=Pc.call(this,b,d);if(H(this))for(M(a,d),d=0;d<c.length;d++)L(a,c[d]);return b}c=H(b);var f=Pc.call(this,b,d),h=H(this);h&&M(a,d);c&&M(a,b);h&&L(a,b);return f});Qc&&Qc.get?b(Node.prototype,Qc):wc(a,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){for(var a=
[],b=0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)Oc.call(this,this.firstChild);Mc.call(this,document.createTextNode(a))}})})};function nd(a){var b=Element.prototype;function c(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];e=[];for(var g=[],k=0;k<d.length;k++){var l=d[k];l instanceof Element&&H(l)&&g.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)e.push(l);else e.push(l)}b.apply(this,d);for(d=0;d<g.length;d++)M(a,g[d]);if(H(this))for(d=0;d<e.length;d++)g=e[d],g instanceof Element&&L(a,g)}}void 0!==bd&&(b.before=c(bd));void 0!==bd&&(b.after=c(cd));void 0!==
dd&&K(b,"replaceWith",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];d=[];for(var h=[],g=0;g<c.length;g++){var k=c[g];k instanceof Element&&H(k)&&h.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)d.push(k);else d.push(k)}g=H(this);dd.apply(this,c);for(c=0;c<h.length;c++)M(a,h[c]);if(g)for(M(a,this),c=0;c<d.length;c++)h=d[c],h instanceof Element&&L(a,h)});void 0!==ed&&K(b,"remove",function(){var b=H(this);ed.call(this);b&&M(a,this)})};function od(){var a=P;function b(b,c){Object.defineProperty(b,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(b){var d=this,e=void 0;H(this)&&(e=[],I(this,function(a){a!==d&&e.push(a)}));c.set.call(this,b);if(e)for(var f=0;f<e.length;f++){var h=e[f];1===h.__CE_state&&a.disconnectedCallback(h)}this.ownerDocument.__CE_hasRegistry?N(a,this):xc(a,this);return b}})}function c(b,c){K(b,"insertAdjacentElement",function(b,d){var e=H(d);b=c.call(this,b,d);e&&M(a,d);H(b)&&L(a,d);
return b})}Rc&&K(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=Rc.call(this,a)});if(Sc&&Sc.get)b(Element.prototype,Sc);else if(gd&&gd.get)b(HTMLElement.prototype,gd);else{var d=Ec.call(document,"div");wc(a,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){return Lc.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName?this.content:this;for(d.innerHTML=a;0<b.childNodes.length;)Oc.call(b,b.childNodes[0]);for(;0<d.childNodes.length;)Mc.call(b,
d.childNodes[0])}})})}K(Element.prototype,"setAttribute",function(b,c){if(1!==this.__CE_state)return Uc.call(this,b,c);var d=Tc.call(this,b);Uc.call(this,b,c);c=Tc.call(this,b);a.attributeChangedCallback(this,b,d,c,null)});K(Element.prototype,"setAttributeNS",function(b,c,d){if(1!==this.__CE_state)return Xc.call(this,b,c,d);var e=Wc.call(this,b,c);Xc.call(this,b,c,d);d=Wc.call(this,b,c);a.attributeChangedCallback(this,c,e,d,b)});K(Element.prototype,"removeAttribute",function(b){if(1!==this.__CE_state)return Vc.call(this,
b);var c=Tc.call(this,b);Vc.call(this,b);null!==c&&a.attributeChangedCallback(this,b,c,null,null)});K(Element.prototype,"removeAttributeNS",function(b,c){if(1!==this.__CE_state)return Yc.call(this,b,c);var d=Wc.call(this,b,c);Yc.call(this,b,c);var e=Wc.call(this,b,c);d!==e&&a.attributeChangedCallback(this,c,d,e,b)});hd?c(HTMLElement.prototype,hd):Zc?c(Element.prototype,Zc):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");kd(a,Element.prototype,{P:$c,append:ad});nd(a)}
;var pd=window.customElements;if(!pd||pd.forcePolyfill||"function"!=typeof pd.define||"function"!=typeof pd.get){var P=new uc;jd();ld();kd(P,DocumentFragment.prototype,{P:Jc,append:Kc});md();od();document.__CE_hasRegistry=!0;var customElements=new O(P);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function qd(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function rd(a){a=a.replace(sd,"").replace(td,"");var b=ud,c=a,d=new qd;d.start=0;d.end=c.length;for(var e=d,f=0,h=c.length;f<h;f++)if("{"===c[f]){e.rules||(e.rules=[]);var g=e,k=g.rules[g.rules.length-1]||null;e=new qd;e.start=f+1;e.parent=g;e.previous=k;g.rules.push(e)}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);return b(d,a)}
function ud(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=vd(c),c=c.replace(wd," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=xd:c.match(yd)&&(a.type=zd,a.keyframesName=a.selector.split(wd).pop()):a.type=0===c.indexOf("--")?Ad:Bd);if(c=a.rules)for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)ud(f,
b);return a}function vd(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return"\\"+a})}
function Cd(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var h=e.length,g;f<h&&(g=e[f]);f++)d=Cd(g,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(Dd,"").replace(Ed,""),b=b.replace(Fd,"").replace(Gd,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
var Bd=1,zd=7,xd=4,Ad=1E3,sd=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,td=/@import[^;]*;/gim,Dd=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Ed=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,Fd=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,Gd=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,yd=/^@[^\s]*keyframes/,wd=/\s+/g;var Q=!(window.ShadyDOM&&window.ShadyDOM.inUse),Hd;function Id(a){Hd=a&&a.shimcssproperties?!1:Q||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?Hd=window.ShadyCSS.nativeCss:window.ShadyCSS?(Id(window.ShadyCSS),window.ShadyCSS=void 0):Id(window.WebComponents&&window.WebComponents.flags);var R=Hd;var Jd=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Ld=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Md=/(--[\w-]+)\s*([:,;)]|$)/gi,Nd=/(animation\s*:)|(animation-name\s*:)/,Od=/@media\s(.*)/,Pd=/\{[^}]*\}/g;function S(a,b){if(!a)return"";"string"===typeof a&&(a=rd(a));b&&T(a,b);return Cd(a,R)}function Qd(a){!a.__cssRules&&a.textContent&&(a.__cssRules=rd(a.textContent));return a.__cssRules||null}function Rd(a){return!!a.parent&&a.parent.type===zd}function T(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===xd){var h=a.selector.match(Od);h&&(window.matchMedia(h[1]).matches||(e=!0))}f===Bd?b(a):c&&f===zd?c(a):f===Ad&&(e=!0);if((a=a.rules)&&!e){e=0;f=a.length;for(var g;e<f&&(g=a[e]);e++)T(g,b,c,d)}}}
function Sd(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;Td(e,c,d);return e}var U=null;function Td(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);U?a.compareDocumentPosition(U)===Node.DOCUMENT_POSITION_PRECEDING&&(U=a):U=a}
function Ud(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");a:{var d=0;var e=c+3;for(var f=a.length;e<f;e++)if("("===a[e])d++;else if(")"===a[e]&&0===--d)break a;e=-1}d=a.substring(c+4,e);c=a.substring(0,c);a=Ud(a.substring(e+1),b);e=d.indexOf(",");return-1===e?b(c,d.trim(),"",a):b(c,d.substring(0,e).trim(),d.substring(e+1).trim(),a)}function Vd(a,b){Q?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
function V(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,J:c}};function Wd(){}function Xd(a,b,c){var d=W;a.__styleScoped?a.__styleScoped=null:Yd(d,a,b||"",c)}function Yd(a,b,c,d){b.nodeType===Node.ELEMENT_NODE&&Zd(b,c,d);if(b="template"===b.localName?(b.content||b.Ya).childNodes:b.children||b.childNodes)for(var e=0;e<b.length;e++)Yd(a,b[e],c,d)}
function Zd(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute($d);c?d&&(b=d.replace("style-scope","").replace(b,""),Vd(a,b)):Vd(a,(d?d+" ":"")+"style-scope "+b)}}function ae(a,b,c){var d=W,e=a.__cssBuild;Q||"shady"===e?b=S(b,c):(a=V(a),b=be(d,b,a.is,a.J,c)+"\n\n");return b.trim()}
function be(a,b,c,d,e){var f=ce(c,d);c=c?de+c:"";return S(b,function(b){b.c||(b.selector=b.j=ee(a,b,a.b,c,f),b.c=!0);e&&e(b,c,f)})}function ce(a,b){return b?"[is="+a+"]":a}function ee(a,b,c,d,e){var f=b.selector.split(fe);if(!Rd(b)){b=0;for(var h=f.length,g;b<h&&(g=f[b]);b++)f[b]=c.call(a,g,d,e)}return f.join(fe)}function ge(a){return a.replace(he,function(a,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+d+")"})}
Wd.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=he.test(a);e&&(a=a.replace(he,function(a,b,c){return":"+b+"("+c.replace(/\s/g,"")+")"}),a=ge(a));a=a.replace(ie,je+" $1");a=a.replace(ke,function(a,e,g){d||(a=le(g,e,b,c),d=d||a.stop,e=a.Ba,g=a.value);return e+g});e&&(a=ge(a));return a};
function le(a,b,c,d){var e=a.indexOf(me);0<=a.indexOf(je)?a=ne(a,d):0!==e&&(a=c?oe(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(pe,function(a,b){return" > "+b}))}a=a.replace(qe,function(a,b,c){return'[dir="'+c+'"] '+b+", "+b+'[dir="'+c+'"]'});return{value:a,Ba:b,stop:f}}function oe(a,b){a=a.split(re);a[0]+=b;return a.join(re)}
function ne(a,b){var c=a.match(se);return(c=c&&c[2].trim()||"")?c[0].match(te)?a.replace(se,function(a,c,f){return b+f}):c.split(te)[0]===b?c:ue:a.replace(je,b)}function ve(a){a.selector===we&&(a.selector="html")}Wd.prototype.c=function(a){return a.match(me)?this.b(a,xe):oe(a.trim(),xe)};p.Object.defineProperties(Wd.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var he=/:(nth[-\w]+)\(([^)]+)\)/,xe=":not(.style-scope)",fe=",",ke=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,te=/[[.:#*]/,je=":host",we=":root",me="::slotted",ie=new RegExp("^("+me+")"),se=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,pe=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,qe=/(.*):dir\((?:(ltr|rtl))\)/,de=".",re=":",$d="class",ue="should_not_match",W=new Wd;function ye(a,b,c,d,e){this.u=a||null;this.b=b||null;this.ba=c||[];this.B=null;this.J=e||"";this.a=this.o=this.v=null}function X(a){return a?a.__styleInfo:null}function ze(a,b){return a.__styleInfo=b}ye.prototype.c=function(){return this.u};ye.prototype._getStyleRules=ye.prototype.c;var Ae,Be=window.Element.prototype;Ae=Be.matches||Be.matchesSelector||Be.mozMatchesSelector||Be.msMatchesSelector||Be.oMatchesSelector||Be.webkitMatchesSelector;var Ce=navigator.userAgent.match("Trident");function De(){}function Ee(a){var b={},c=[],d=0;T(a,function(a){Fe(a);a.index=d++;a=a.g.cssText;for(var c;c=Md.exec(a);){var e=c[1];":"!==c[2]&&(b[e]=!0)}},function(a){c.push(a)});a.b=c;a=[];for(var e in b)a.push(e);return a}
function Fe(a){if(!a.g){var b={},c={};Ge(a,c)&&(b.s=c,a.rules=null);b.cssText=a.parsedCssText.replace(Pd,"").replace(Jd,"");a.g=b}}function Ge(a,b){var c=a.g;if(c){if(c.s)return Object.assign(b,c.s),!0}else{c=a.parsedCssText;for(var d;a=Jd.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}}
function He(a,b,c){b&&(b=0<=b.indexOf(";")?Ie(a,b,c):Ud(b,function(b,e,f,h){if(!e)return b+h;(e=He(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=He(a,c[f]||f,c)||f;return b+(e||"")+h}));return b&&b.trim()||""}
function Ie(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){Ld.lastIndex=0;if(f=Ld.exec(e))e=He(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var h=e.substring(f);h=h.trim();h=He(a,h,c)||h;e=e.substring(0,f)+h}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||""}return b.join(";")}
function Je(a,b){var c={},d=[];T(a,function(a){a.g||Fe(a);var e=a.j||a.parsedSelector;b&&a.g.s&&e&&Ae.call(b,e)&&(Ge(a,c),a=a.index,e=parseInt(a/32,10),d[e]=(d[e]||0)|1<<a%32)},null,!0);return{s:c,key:d}}
function Ke(a,b,c,d,e){c.g||Fe(c);if(c.g.s){b=V(b);a=b.is;b=b.J;b=a?ce(a,b):"html";var f=c.parsedSelector,h=":host > *"===f||"html"===f,g=0===f.indexOf(":host")&&!h;"shady"===d&&(h=f===b+" > *."+b||-1!==f.indexOf("html"),g=!h&&0===f.indexOf(b));"shadow"===d&&(h=":host > *"===f||"html"===f,g=g&&!h);if(h||g)d=b,g&&(Q&&!c.j&&(c.j=ee(W,c,W.b,a?de+a:"",b)),d=c.j||b),e({Pa:d,Ga:g,$a:h})}}
function Le(a,b){var c={},d={},e=Me,f=b&&b.__cssBuild;T(b,function(b){Ke(e,a,b,f,function(e){Ae.call(a.Za||a,e.Pa)&&(e.Ga?Ge(b,c):Ge(b,d))})},null,!0);return{Na:d,Fa:c}}
function Ne(a,b,c,d){var e=V(b),f=ce(e.is,e.J),h=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])");e=X(b).u;var g=Oe(e,d);return ae(b,e,function(b){var e="";b.g||Fe(b);b.g.cssText&&(e=Ie(a,b.g.cssText,c));b.cssText=e;if(!Q&&!Rd(b)&&b.cssText){var k=e=b.cssText;null==b.ja&&(b.ja=Nd.test(e));if(b.ja)if(null==b.O){b.O=[];for(var q in g)k=g[q],k=k(e),e!==k&&(e=k,b.O.push(q))}else{for(q=0;q<b.O.length;++q)k=g[b.O[q]],e=k(e);k=e}b.cssText=k;b.j=b.j||b.selector;e="."+d;
q=b.j.split(",");k=0;for(var E=q.length,J;k<E&&(J=q[k]);k++)q[k]=J.match(h)?J.replace(f,e):e+" "+J;b.selector=q.join(",")}})}function Oe(a,b){a=a.b;var c={};if(!Q&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,h=b;f.f=new RegExp(f.keyframesName,"g");f.a=f.keyframesName+"-"+h;f.j=f.j||f.selector;f.selector=f.j.replace(f.keyframesName,f.a);c[e.keyframesName]=Pe(e)}return c}function Pe(a){return function(b){return b.replace(a.f,a.a)}}
function Qe(a,b){var c=Me,d=Qd(a);a.textContent=S(d,function(a){var d=a.cssText=a.parsedCssText;a.g&&a.g.cssText&&(d=d.replace(Dd,"").replace(Ed,""),a.cssText=Ie(c,d,b))})}p.Object.defineProperties(De.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var Me=new De;var Re={},Se=window.customElements;if(Se&&!Q){var Te=Se.define;Se.define=function(a,b,c){var d=document.createComment(" Shady DOM styles for "+a+" "),e=document.head;e.insertBefore(d,(U?U.nextSibling:null)||e.firstChild);U=d;Re[a]=d;return Te.call(Se,a,b,c)}};function Ue(a){this.cache={};this.a=void 0===a?100:a}Ue.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({s:b,styleElement:c,o:d});e.length>this.a&&e.shift();this.cache[a]=e};Ue.prototype.fetch=function(a,b,c){if(a=this.cache[a])for(var d=a.length-1;0<=d;d--){var e=a[d],f;a:{for(f=0;f<c.length;f++){var h=c[f];if(e.s[h]!==b[h]){f=!1;break a}}f=!0}if(f)return e}};function Ve(){}
function We(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode();var h=e;var g=[];h.classList?g=Array.from(h.classList):h instanceof window.SVGElement&&h.hasAttribute("class")&&(g=h.getAttribute("class").split(/\s+/));h=g;g=h.indexOf(W.a);if((h=-1<g?h[g+1]:"")&&f===e.ownerDocument)Xd(e,h,!0);else if(f.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&
(f=f.host))if(f=V(f).is,h===f)for(e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+W.a+")"),f=0;f<e.length;f++)Zd(e[f],h);else h&&Xd(e,h,!0),Xd(e,f)}}}}
if(!Q){var Xe=new MutationObserver(We),Ye=function(a){Xe.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)Ye(document);else{var Ze=function(){Ye(document.body)};window.HTMLImports?window.HTMLImports.whenReady(Ze):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){Ze();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",a)}else Ze()})}Ve=function(){We(Xe.takeRecords())}}
var $e=Ve;var af={};var bf=Promise.resolve();function cf(a){if(a=af[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function df(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function ef(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a.b||(a.b=!0,bf.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a.b=!1}))};var ff=null,gf=window.HTMLImports&&window.HTMLImports.whenReady||null,hf;function jf(a){requestAnimationFrame(function(){gf?gf(a):(ff||(ff=new Promise(function(a){hf=a}),"complete"===document.readyState?hf():document.addEventListener("readystatechange",function(){"complete"===document.readyState&&hf()})),ff.then(function(){a&&a()}))})};var kf=new Ue;function Y(){var a=this;this.F={};this.c=document.documentElement;var b=new qd;b.rules=[];this.f=ze(this.c,new ye(b));this.l=!1;this.b=this.a=null;jf(function(){lf(a)})}n=Y.prototype;n.pa=function(){$e()};n.Da=function(a){return Qd(a)};n.Ra=function(a){return S(a)};
n.prepareTemplate=function(a,b,c){if(!a.f){a.f=!0;a.name=b;a.extends=c;af[b]=a;var d=(d=a.content.querySelector("style"))?d.getAttribute("css-build")||"":"";var e=a.content.querySelectorAll("style");for(var f=[],h=0;h<e.length;h++){var g=e[h];f.push(g.textContent);g.parentNode.removeChild(g)}e=f.join("").trim();c={is:b,extends:c,Wa:d};Q||Xd(a.content,b);lf(this);f=Ld.test(e)||Jd.test(e);Ld.lastIndex=0;Jd.lastIndex=0;e=rd(e);f&&R&&this.a&&this.a.transformRules(e,b);a._styleAst=e;a.l=d;d=[];R||(d=Ee(a._styleAst));
if(!d.length||R)e=Q?a.content:null,b=Re[b],f=ae(c,a._styleAst),b=f.length?Sd(f,c.is,e,b):void 0,a.a=b;a.c=d}};function mf(a){!a.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.b=window.ShadyCSS.CustomStyleInterface,a.b.transformCallback=function(b){a.na(b)},a.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.l)&&a.A()})})}function lf(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(a.a=window.ShadyCSS.ApplyShim,a.a.invalidCallback=cf);mf(a)}
n.A=function(){lf(this);if(this.b){var a=this.b.processStyles();if(this.b.enqueued){if(R)for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);if(c&&R&&this.a){var d=Qd(c);lf(this);this.a.transformRules(d);c.textContent=S(d)}}else for(nf(this,this.c,this.f),b=0;b<a.length;b++)(c=this.b.getStyleForCustomStyle(a[b]))&&Qe(c,this.f.v);this.b.enqueued=!1;this.l&&!R&&this.styleDocument()}}};
n.styleElement=function(a,b){var c=V(a).is,d=X(a);if(!d){var e=V(a);d=e.is;e=e.J;var f=Re[d];d=af[d];if(d){var h=d._styleAst;var g=d.c}d=ze(a,new ye(h,f,g,0,e))}a!==this.c&&(this.l=!0);b&&(d.B=d.B||{},Object.assign(d.B,b));if(R){if(d.B){b=d.B;for(var k in b)null===k?a.style.removeProperty(k):a.style.setProperty(k,b[k])}if(((k=af[c])||a===this.c)&&k&&k.a&&!df(k)){if(df(k)||k._applyShimValidatingVersion!==k._applyShimNextVersion)lf(this),this.a&&this.a.transformRules(k._styleAst,c),k.a.textContent=
ae(a,d.u),ef(k);Q&&(c=a.shadowRoot)&&(c.querySelector("style").textContent=ae(a,d.u));d.u=k._styleAst}}else if(nf(this,a,d),d.ba&&d.ba.length){c=d;k=V(a).is;d=(b=kf.fetch(k,c.v,c.ba))?b.styleElement:null;h=c.o;(g=b&&b.o)||(g=this.F[k]=(this.F[k]||0)+1,g=k+"-"+g);c.o=g;g=c.o;e=Me;e=d?d.textContent||"":Ne(e,a,c.v,g);f=X(a);var l=f.a;l&&!Q&&l!==d&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));Q?f.a?(f.a.textContent=e,d=f.a):e&&(d=Sd(e,g,a.shadowRoot,f.b)):d?d.parentNode||
(Ce&&-1<e.indexOf("@media")&&(d.textContent=e),Td(d,null,f.b)):e&&(d=Sd(e,g,null,f.b));d&&(d._useCount=d._useCount||0,f.a!=d&&d._useCount++,f.a=d);g=d;Q||(d=c.o,f=e=a.getAttribute("class")||"",h&&(f=e.replace(new RegExp("\\s*x-scope\\s*"+h+"\\s*","g")," ")),f+=(f?" ":"")+"x-scope "+d,e!==f&&Vd(a,f));b||kf.store(k,c.v,g,c.o)}};function of(a,b){return(b=b.getRootNode().host)?X(b)?b:of(a,b):a.c}
function nf(a,b,c){a=of(a,b);var d=X(a);a=Object.create(d.v||null);var e=Le(b,c.u);b=Je(d.u,b).s;Object.assign(a,e.Fa,b,e.Na);b=c.B;for(var f in b)if((e=b[f])||0===e)a[f]=e;f=Me;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=He(f,a[d],a);c.v=a}n.styleDocument=function(a){this.styleSubtree(this.c,a)};
n.styleSubtree=function(a,b){var c=a.shadowRoot;(c||a===this.c)&&this.styleElement(a,b);if(b=c&&(c.children||c.childNodes))for(a=0;a<b.length;a++)this.styleSubtree(b[a]);else if(a=a.children||a.childNodes)for(b=0;b<a.length;b++)this.styleSubtree(a[b])};n.na=function(a){var b=this,c=Qd(a);T(c,function(a){if(Q)ve(a);else{var c=W;a.selector=a.parsedSelector;ve(a);a.selector=a.j=ee(c,a,c.c,void 0,void 0)}R&&(lf(b),b.a&&b.a.transformRule(a))});R?a.textContent=S(c):this.f.u.rules.push(c)};
n.getComputedStyleValue=function(a,b){var c;R||(c=(X(a)||X(of(this,a))).v[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};n.Qa=function(a,b){var c=a.getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===W.a){c=d[e+1];break}}}c&&b.push(W.a,c);R||(c=X(a))&&c.o&&b.push(Me.a,c.o);Vd(a,b.join(" "))};n.za=function(a){return X(a)};Y.prototype.flush=Y.prototype.pa;
Y.prototype.prepareTemplate=Y.prototype.prepareTemplate;Y.prototype.styleElement=Y.prototype.styleElement;Y.prototype.styleDocument=Y.prototype.styleDocument;Y.prototype.styleSubtree=Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue=Y.prototype.getComputedStyleValue;Y.prototype.setElementClass=Y.prototype.Qa;Y.prototype._styleInfoForNode=Y.prototype.za;Y.prototype.transformCustomStyleForDocument=Y.prototype.na;Y.prototype.getStyleAst=Y.prototype.Da;Y.prototype.styleAstToString=Y.prototype.Ra;
Y.prototype.flushCustomStyles=Y.prototype.A;Object.defineProperties(Y.prototype,{nativeShadow:{get:function(){return Q}},nativeCss:{get:function(){return R}}});var Z=new Y,pf,qf;window.ShadyCSS&&(pf=window.ShadyCSS.ApplyShim,qf=window.ShadyCSS.CustomStyleInterface);window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.A();Z.prepareTemplate(a,b,c)},styleSubtree:function(a,b){Z.A();Z.styleSubtree(a,b)},styleElement:function(a){Z.A();Z.styleElement(a)},styleDocument:function(a){Z.A();Z.styleDocument(a)},getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:R,nativeShadow:Q};pf&&(window.ShadyCSS.ApplyShim=pf);
qf&&(window.ShadyCSS.CustomStyleInterface=qf);/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var rf=window.customElements,sf=window.HTMLImports,tf=window.HTMLTemplateElement;window.WebComponents=window.WebComponents||{};if(rf&&rf.polyfillWrapFlushCallback){var uf,vf=function(){if(uf){tf.Aa&&tf.Aa(window.document);var a=uf;uf=null;a();return!0}},wf=sf.whenReady;rf.polyfillWrapFlushCallback(function(a){uf=a;wf(vf)});sf.whenReady=function(a){wf(function(){vf()?sf.whenReady(a):a()})}}
sf.whenReady(function(){requestAnimationFrame(function(){window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})});var xf=document.createElement("style");xf.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var yf=document.querySelector("head");yf.insertBefore(xf,yf.firstChild);}).call(this);

//# sourceMappingURL=webcomponents-hi-sd-ce.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ }),
/* 44 */
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
/* 45 */
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
const PolygonFiller_1 = __webpack_require__(47);
const Renderer_1 = __webpack_require__(49);
const Stage_1 = __webpack_require__(50);
const ClosestPathFinder_1 = __webpack_require__(51);
const ImageDownloader_1 = __webpack_require__(52);
const InputDataInitializer_1 = __webpack_require__(53);
const LightSimulator_1 = __webpack_require__(54);
const PolygonClipper_1 = __webpack_require__(55);
const UIController_1 = __webpack_require__(56);
const EventAggregator_1 = __webpack_require__(97);
const RenderEvent_1 = __webpack_require__(1);
const RenderFinishedEvent_1 = __webpack_require__(32);
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
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = __webpack_require__(2);
const ActiveEdge_1 = __webpack_require__(48);
const FillWorkerMessageType_1 = __webpack_require__(24);
const FILL_WORKER_URL = 'fillWorker.js';
class PolygonFiller {
    constructor(dependencies) {
        this.proxyEvents = [
            input_data_1.NewBackgroundTextureEvent,
            input_data_1.NewHeightMapEvent,
            input_data_1.NewHeightMapIntensityEvent,
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
const LoadingFinishedEvent_1 = __webpack_require__(29);
const LoadingStartedEvent_1 = __webpack_require__(30);
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
/* 53 */
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
const Polygon_1 = __webpack_require__(25);
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
            this.eventAggregator.dispatchEvent(new input_data_1.NewHeightMapIntensityEvent(configuration_1.configuration.presetHeightMapIntensity));
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
/* 54 */
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Line_1 = __webpack_require__(15);
const Point_1 = __webpack_require__(6);
const Polygon_1 = __webpack_require__(25);
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(8);
const InputDataService_1 = __webpack_require__(57);
const LoadingUIService_1 = __webpack_require__(73);
const MousePositionTransformer_1 = __webpack_require__(77);
const NewPolygonUIController_1 = __webpack_require__(78);
const PathDraggingService_1 = __webpack_require__(79);
const PointDraggingService_1 = __webpack_require__(80);
const PointInserterService_1 = __webpack_require__(81);
const PointRemoverService_1 = __webpack_require__(82);
const PointSyncService_1 = __webpack_require__(83);
const SerializationService_1 = __webpack_require__(87);
const LineClickEvent_1 = __webpack_require__(36);
__webpack_require__(90);
__webpack_require__(93);
__webpack_require__(37);
const PolygonClippingService_1 = __webpack_require__(96);
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = __webpack_require__(58);
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
        this.inputDataContainer.appendChild(this.heightMapIntensityInput);
    }
    destroy() {
        this.inputDataContainer.removeChild(this.backgroundSelectButton);
        this.inputDataContainer.removeChild(this.lightColorSelectButton);
        this.inputDataContainer.removeChild(this.normalMapSelectButton);
        this.inputDataContainer.removeChild(this.heightMapSelectButton);
        this.inputDataContainer.removeChild(this.lightTypeSelect);
        this.inputDataContainer.removeChild(this.heightMapIntensityInput);
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
        this.heightMapIntensityInput = new input_data_1.HeightMapIntensityInput({ eventAggregator });
    }
}
exports.InputDataService = InputDataService;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BackgroundSelectButton_1 = __webpack_require__(59);
exports.BackgroundSelectButton = BackgroundSelectButton_1.BackgroundSelectButton;
const HeightMapIntensityInput_1 = __webpack_require__(62);
exports.HeightMapIntensityInput = HeightMapIntensityInput_1.HeightMapIntensityInput;
const HeightMapSelectButton_1 = __webpack_require__(63);
exports.HeightMapSelectButton = HeightMapSelectButton_1.HeightMapSelectButton;
const LightColorSelectButton_1 = __webpack_require__(64);
exports.LightColorSelectButton = LightColorSelectButton_1.LightColorSelectButton;
const LightTypeSelect_1 = __webpack_require__(70);
exports.LightTypeSelect = LightTypeSelect_1.LightTypeSelect;
const NormalMapSelectButton_1 = __webpack_require__(72);
exports.NormalMapSelectButton = NormalMapSelectButton_1.NormalMapSelectButton;


/***/ }),
/* 59 */
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
const ImageSelectDialog_1 = __webpack_require__(26);
const ImageSelectDialogButton_1 = __webpack_require__(27);
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".image-select-dialog {\n  padding: 1rem;\n  width: 75%;\n  max-width: 800px; }\n\n.image-select-dialog__heading {\n  margin: 0.5em 0; }\n\n.image-select-dialog__block {\n  border-bottom: solid 1px black;\n  padding-bottom: 1em; }\n\n.image-select-dialog__preset-images-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .image-select-dialog__preset-images-container > div {\n    max-width: 25%;\n    max-height: 200px;\n    margin: auto; }\n  .image-select-dialog__preset-images-container img {\n    max-width: 100%;\n    max-height: 200px; }\n\n.image-select-dialog__custom-image {\n  display: block;\n  max-width: 25%;\n  max-height: 200px;\n  margin: auto; }\n\n.image-select-dialog__image--selected {\n  border: solid 3px green; }\n\n.image-select-dialog__bottom-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1em; }\n  .image-select-dialog__bottom-buttons button {\n    font-size: 1.3em; }\n", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(0);
const input_data_1 = __webpack_require__(2);
const RenderEvent_1 = __webpack_require__(1);
class HeightMapIntensityInput extends HTMLElement {
    constructor(dependencies) {
        super();
        this.eventAggregator = dependencies.eventAggregator;
        this.style.display = 'block';
        const label = document.createElement('label');
        label.setAttribute('for', 'height-map-intensity');
        label.innerText = 'Height map intensity: ';
        this.appendChild(label);
        this.input = document.createElement('input');
        this.input.type = 'number';
        this.input.min = '0';
        this.input.max = '1';
        this.input.step = '0.01';
        this.resetInputValue();
        this.appendChild(this.input);
        this.onInputChange = this.onInputChange.bind(this);
    }
    connectedCallback() {
        this.input.addEventListener('change', this.onInputChange);
    }
    disconnectedCallback() {
        this.input.removeEventListener('change', this.onInputChange);
    }
    onInputChange() {
        const intensity = parseFloat(this.input.value);
        if (Number.isNaN(intensity)) {
            this.resetInputValue();
            alert('Height map intensity must be a number');
            return;
        }
        this.eventAggregator.dispatchEvent(new input_data_1.NewHeightMapIntensityEvent(intensity));
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
    }
    resetInputValue() {
        this.input.value = configuration_1.configuration.presetHeightMapIntensity.toString();
    }
}
exports.HeightMapIntensityInput = HeightMapIntensityInput;
customElements.define('height-map-intensity-input', HeightMapIntensityInput);


/***/ }),
/* 63 */
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
const ImageSelectDialog_1 = __webpack_require__(26);
const ImageSelectDialogButton_1 = __webpack_require__(27);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector3_1 = __webpack_require__(7);
const configuration_1 = __webpack_require__(0);
const input_data_1 = __webpack_require__(2);
const RenderEvent_1 = __webpack_require__(1);
const ColorSelectDialog_1 = __webpack_require__(65);
const DialogBoxButton_1 = __webpack_require__(31);
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(66);
const Color_1 = __webpack_require__(10);
__webpack_require__(68);
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".dialog-box {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0, 0);\n  z-index: 1;\n  background-color: #eee;\n  border: solid 1px black;\n  border-radius: 25px;\n  color: #222;\n  padding: 2rem;\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px black;\n  transition: transform 250ms ease-in-out;\n  will-change: transform; }\n\n.dialog-box--active {\n  transform: translate(-50%, -50%) scale(1, 1); }\n", ""]);

// exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".color-select-dialog {\n  padding: 1rem;\n  width: 50%;\n  max-width: 300px; }\n\n.color-select-dialog__block {\n  border-bottom: solid 1px black;\n  padding-bottom: 1em; }\n\n.color-select-dialog__heading {\n  margin: 0.5em 0; }\n\n.color-select-dialog__bottom-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1em; }\n  .color-select-dialog__bottom-buttons button {\n    font-size: 1.3em; }\n", ""]);

// exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LightType_1 = __webpack_require__(9);
const input_data_1 = __webpack_require__(2);
const RenderEvent_1 = __webpack_require__(1);
const LightPositionRadiusInput_1 = __webpack_require__(71);
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
/* 71 */
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
/* 72 */
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
const ImageSelectDialog_1 = __webpack_require__(26);
const ImageSelectDialogButton_1 = __webpack_require__(27);
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoadingFinishedEvent_1 = __webpack_require__(29);
const LoadingStartedEvent_1 = __webpack_require__(30);
const LoadingBarDialog_1 = __webpack_require__(74);
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(75);
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".loading-bar-dialog {\n  overflow: hidden; }\n\n.loading-dialog__background-bar {\n  position: absolute;\n  height: 100%;\n  transition: width 200ms ease-in-out;\n  background-color: cyan;\n  margin: -2rem;\n  z-index: -1; }\n", ""]);

// exports


/***/ }),
/* 77 */
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Layer_1 = __webpack_require__(13);
const Path_1 = __webpack_require__(14);
const Polygon_1 = __webpack_require__(25);
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(8);
const PointClickEvent_1 = __webpack_require__(28);
const RenderEvent_1 = __webpack_require__(1);
const RenderFinishedEvent_1 = __webpack_require__(32);
const SyncComponentsEvent_1 = __webpack_require__(3);
class NewPolygonUIController {
    constructor(dependencies) {
        this.pathLayer = new Layer_1.Layer(LEX_1.LEX.PATH_LAYER_NAME);
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
/* 79 */
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(12);
const Layer_1 = __webpack_require__(13);
const LineProperties_1 = __webpack_require__(11);
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(8);
const FinishPointDragEvent_1 = __webpack_require__(33);
const PointDragEvent_1 = __webpack_require__(34);
const StartPointDragEvent_1 = __webpack_require__(35);
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LineClickEvent_1 = __webpack_require__(36);
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(0);
const PointClickEvent_1 = __webpack_require__(28);
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PathPointElement_1 = __webpack_require__(84);
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FinishPointDragEvent_1 = __webpack_require__(33);
const PointDragEvent_1 = __webpack_require__(34);
const StartPointDragEvent_1 = __webpack_require__(35);
const PointClickEvent_1 = __webpack_require__(28);
__webpack_require__(85);
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".application-ui__vertex {\n  border: solid 1px black;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border: solid 2px; }\n  .application-ui__vertex:not(:active) {\n    border-color: green; }\n  .application-ui__vertex:active {\n    border-color: red; }\n\n.application-ui__vertex--initial {\n  background-color: #0051ff; }\n", ""]);

// exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoadButton_1 = __webpack_require__(88);
const SaveButton_1 = __webpack_require__(89);
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
/* 88 */
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
/* 89 */
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(91);
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "body.popup-active {\n  overflow: hidden; }\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: 1;\n  background-color: black;\n  transition: opacity 250ms ease-in-out;\n  pointer-events: none; }\n\n.overlay--visible {\n  opacity: 0.5;\n  pointer-events: all; }\n", ""]);

// exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const InstructionsDialog_1 = __webpack_require__(37);
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".instructions-dialog {\n  background-color: #1f350f;\n  color: #eee; }\n\n.instructions-dialog__title {\n  margin: 0; }\n", ""]);

// exports


/***/ }),
/* 96 */
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventQueue_1 = __webpack_require__(98);
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
/* 98 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTdkN2U4YjMwNjU5OTlmZDQ2ZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9SZW5kZXJFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1ZlY3RvcjMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xFWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0xpZ2h0VHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0NvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vTGluZVByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9DT0xPUlMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9MYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1BhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9MaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3SGVpZ2h0TWFwSW50ZW5zaXR5RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0Q29sb3JFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRQb3NpdGlvbkV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VHlwZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWdvbi1maWxsZXIvRmlsbFdvcmtlck1lc3NhZ2VUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vUG9seWdvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2dCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9Qb2ludENsaWNrRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy91aS9Mb2FkaW5nRmluaXNoZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3VpL0xvYWRpbmdTdGFydGVkRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvRGlhbG9nQm94QnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvUmVuZGVyRmluaXNoZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3BvaW50LWRyYWcvRmluaXNoUG9pbnREcmFnRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL1BvaW50RHJhZ0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvTGluZUNsaWNrRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/NDQ0NiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy93ZWJjb21wb25lbnRzLWhpLXNkLWNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vSGl0VGVzdFJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWdvbi1maWxsZXIvUG9seWdvbkZpbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWdvbi1maWxsZXIvQWN0aXZlRWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9DbG9zZXN0UGF0aEZpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9JbnB1dERhdGFJbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvTGlnaHRTaW11bGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1BvbHlnb25DbGlwcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0lucHV0RGF0YVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0JhY2tncm91bmRTZWxlY3RCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZy5zY3NzPzZjZjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2lucHV0LWRhdGEvSGVpZ2h0TWFwSW50ZW5zaXR5SW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9IZWlnaHRNYXBTZWxlY3RCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodENvbG9yU2VsZWN0QnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvRGlhbG9nQm94LnNjc3M/Njc0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9EaWFsb2dCb3guc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3M/OTYyNCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodFR5cGVTZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodFBvc2l0aW9uUmFkaXVzSW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9Ob3JtYWxNYXBTZWxlY3RCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0xvYWRpbmdVSVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvbG9hZGluZy1iYXItZGlhbG9nL0xvYWRpbmdCYXJEaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvbG9hZGluZy1iYXItZGlhbG9nL0xvYWRpbmdCYXJEaWFsb2cuc2Nzcz8zMWM4Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2xvYWRpbmctYmFyLWRpYWxvZy9Mb2FkaW5nQmFyRGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvTmV3UG9seWdvblVJQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUGF0aERyYWdnaW5nU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUG9pbnREcmFnZ2luZ1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1BvaW50SW5zZXJ0ZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2ludFJlbW92ZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2ludFN5bmNTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQuc2Nzcz9mNmM0Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9TZXJpYWxpemF0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL0xvYWRCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9TYXZlQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzPzkwYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzPzRlMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvRXZlbnRBZ2dyZWdhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9l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Q0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVPLGlCQUFpQixDQUFDLFNBQWlCO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0MsQ0FBQztDQUNGO0FBbkRELDBDQW1EQzs7Ozs7Ozs7OztBQ3RERDtJQUFBO1FBQ1UsV0FBTSxHQUFlLEVBQUUsQ0FBQztJQXFCbEMsQ0FBQztJQW5CUSxPQUFPLENBQUMsS0FBZTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sT0FBTztRQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxTQUFTO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzVCLENBQUM7SUFFTSxPQUFPO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGO0FBdEJELGdDQXNCQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTdkN2U4YjMwNjU5OTlmZDQ2ZWIiLCJpbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdjb21tb24vQ09MT1JTJztcclxuaW1wb3J0IHsgTGluZVByb3BlcnRpZXMgfSBmcm9tICdjb21tb24vTGluZVByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuY29uc3QgY29uZmlndXJhdGlvbiA9IHtcclxuICBuZXdMaW5lUHJldmlld1Byb3BlcnRpZXM6IG5ldyBMaW5lUHJvcGVydGllcyhDT0xPUlMuQkxVRSwgMiksXHJcbiAgbmV3UG9seWdvbkxpbmVQcm9wZXJ0aWVzOiBuZXcgTGluZVByb3BlcnRpZXMoQ09MT1JTLlJFRCwgMSksXHJcbiAgcG9seWdvbkxpbmVQcm9wZXJ0aWVzOiBMaW5lUHJvcGVydGllcy5nZXREZWZhdWx0KCksXHJcblxyXG4gIGFwcGxpY2F0aW9uVUlDb250YWluZXJJRDogJ2FwcGxpY2F0aW9uLXVpJyxcclxuXHJcbiAgaGl0VG9sZXJhbmNlOiAxMCxcclxuICBtaW5Qb2x5Z29uUG9pbnRzOiAzLFxyXG4gIGRvdWJsZUNsaWNrTWF4RGVsYXk6IDUwMCxcclxuXHJcbiAgZGlzcGxheVBhdGhHaG9zdFdoZW5EcmFnZ2luZzogZmFsc2UsXHJcbiAgY2FudmFzRm9udDogJzMwcHQgc2VyaWYnLFxyXG4gIGxvYWRpbmdCYXJIaWRlRGVsYXk6IDE1MDAsXHJcblxyXG4gIGluaXRpYWxDdXN0b21CYWNrZ3JvdW5kQ29sb3JIZXg6ICcjMDBhMmU4JywgLy8gYmx1ZS1pc2hcclxuICBwcmVzZXRCYWNrZ3JvdW5kVGV4dHVyZXM6IFtcclxuICAgICdpbWFnZXMvYmFja2dyb3VuZHMvcmVkLWJyaWNrcy5qcGcnLFxyXG4gICAgJ2ltYWdlcy9iYWNrZ3JvdW5kcy9GdW5ueS1DYXQtRmFjZS5qcGcnLFxyXG4gICAgJ2ltYWdlcy9iYWNrZ3JvdW5kcy9ocWRlZmF1bHQuanBnJ1xyXG4gIF0sXHJcbiAgaW5pdGlhbEN1c3RvbUhlaWdodE1hcENvbG9ySGV4OiAnIzAwMDAwMCcsICAvLyBbMCwgMCwgMF1cclxuICBwcmVzZXRIZWlnaHRNYXBzOiBbXHJcbiAgICAnaW1hZ2VzL2hlaWdodC1tYXBzL2JyaWNrX2hlaWdodG1hcC5wbmcnLFxyXG4gICAgJ2ltYWdlcy9oZWlnaHQtbWFwcy90ZXJyYWluLWhlaWdodG1hcC5wbmcnXHJcbiAgXSxcclxuICBpbml0aWFsQ3VzdG9tTm9ybWFsTWFwQ29sb3JIZXg6ICcjN2Y3ZmZmJywgIC8vIFswLCAwLCAxXSAoYmVjYXVzZSB4IGFuZCB5IGFyZSBbLTEsIDFdKVxyXG4gIHByZXNldE5vcm1hbE1hcHM6IFtcclxuICAgICdpbWFnZXMvbm9ybWFsLW1hcHMvYnJpY2tfbm9ybWFsbWFwLnBuZycsXHJcbiAgICAnaW1hZ2VzL25vcm1hbC1tYXBzL25vcm1hbF9tYXAuanBnJyxcclxuICAgICdpbWFnZXMvbm9ybWFsLW1hcHMvY2lyY2xlcy5wbmcnXHJcbiAgXSxcclxuICBwcmVzZXRMaWdodENvbG9yOiBuZXcgVmVjdG9yMygxLCAxLCAxKSxcclxuICBwcmVzZXRIZWlnaHRNYXBJbnRlbnNpdHk6IDAuMDUsXHJcblxyXG4gIG1vdmluZ0xpZ2h0OiB7XHJcbiAgICBob3Jpem9udGFsTGFwVGltZTogMTAgKiAxMDAwLFxyXG4gICAgdmVydGljYWxMYXBUaW1lOiA4ICogMTAwMCxcclxuICAgIG1pblZlcnRpY2FsQW5nbGU6ICgyMCAvIDE4MCkgKiBNYXRoLlBJLFxyXG4gICAgbWF4VmVydGljYWxBbmdsZTogKDcwIC8gMTgwKSAqIE1hdGguUEksXHJcbiAgICB0aWNrSW50ZXJ2YWw6IDUwLFxyXG4gICAgZGVmYXVsdFJhZGl1czogNTAwXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgY29uZmlndXJhdGlvbiB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb25maWd1cmF0aW9uLnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlckV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkID0gbnVsbDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gUmVuZGVyRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnUmVuZGVyRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvUmVuZGVyRXZlbnQudHMiLCJpbXBvcnQgeyBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCc7XHJcbmltcG9ydCB7IE5ld0hlaWdodE1hcEV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3SGVpZ2h0TWFwRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3SGVpZ2h0TWFwSW50ZW5zaXR5RXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdMaWdodENvbG9yRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodENvbG9yRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdMaWdodFBvc2l0aW9uRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFBvc2l0aW9uRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdMaWdodFR5cGVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VHlwZUV2ZW50JztcclxuaW1wb3J0IHsgTmV3Tm9ybWFsTWFwRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudCc7XHJcblxyXG5leHBvcnQge1xyXG4gIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwSW50ZW5zaXR5RXZlbnQsXHJcbiAgTmV3TGlnaHRDb2xvckV2ZW50LFxyXG4gIE5ld0xpZ2h0UG9zaXRpb25FdmVudCxcclxuICBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQsXHJcbiAgTmV3TGlnaHRUeXBlRXZlbnQsXHJcbiAgTmV3Tm9ybWFsTWFwRXZlbnRcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvaW5kZXgudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3luY0NvbXBvbmVudHNFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZCA9IG51bGw7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IFN5bmNDb21wb25lbnRzRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnU3luY0NvbXBvbmVudHNFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50LnRzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInR5cGUgTW92ZUNhbGxiYWNrID0gKCkgPT4gdm9pZDtcclxuXHJcbmNvbnN0IEVQU0lMT04gPSAwLjE7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnQge1xyXG4gIHB1YmxpYyBtb3ZlQ2FsbGJhY2s6IE1vdmVDYWxsYmFjayB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIF94OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfeTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLl95O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgdGhpcy5feSA9IHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFkZChwMTogUG9pbnQsIHAyOiBQb2ludCk6IFBvaW50IHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQocDEueCArIHAyLngsIHAxLnkgKyBwMi55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3VidHJhY3QocDE6IFBvaW50LCBwMjogUG9pbnQpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHAxLnggLSBwMi54LCBwMS55IC0gcDIueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldERpc3RhbmNlQmV0d2VlbihwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFBvaW50LmdldERpc3RhbmNlQmV0d2VlblNxdWFyZWQocDEsIHAyKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldERpc3RhbmNlQmV0d2VlblNxdWFyZWQocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgucG93KHAxLnggLSBwMi54LCAyKSArIE1hdGgucG93KHAxLnkgLSBwMi55LCAyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QW5nbGUocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihwMi55IC0gcDEueSwgcDIueCAtIHAxLngpICogMTgwIC8gTWF0aC5QSTtcclxuXHJcbiAgICBpZiAoYW5nbGUgPCAwKSB7XHJcbiAgICAgIGFuZ2xlICs9IDM2MDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYW5nbGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRvdFByb2R1Y3QocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICAgIHJldHVybiBwMS54ICogcDIueCArIHAxLnkgKiBwMi55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcm9zc1Byb2R1Y3QocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICAgIHJldHVybiBwMS54ICogcDIueSAtIHAxLnkgKiBwMi54O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBlcHNpbG9uRXF1YWxzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgICByZXR1cm4gUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuKHAxLCBwMikgPD0gRVBTSUxPTjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3ZlVG8ocG9pbnQ6IFBvaW50KTogdm9pZDtcclxuICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcclxuICBwdWJsaWMgbW92ZVRvKHBvaW50T3JYOiBQb2ludCB8IG51bWJlciwgeT86IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiBwb2ludE9yWCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgaWYgKHkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigneCBpcyBkZWZpbmVkLCBidXQgeSBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5tb3ZlVG9Db29yZGluYXRlcyhwb2ludE9yWCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubW92ZVRvUG9pbnQocG9pbnRPclgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVxdWFscyhwb2ludDogUG9pbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnggPT09IHBvaW50LnggJiYgdGhpcy55ID09PSBwb2ludC55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERpc3RhbmNlVG8ocG9pbnQ6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBQb2ludC5nZXREaXN0YW5jZUJldHdlZW4odGhpcywgcG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERpc3RhbmNlU3F1YXJlZFRvKHBvaW50OiBQb2ludCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuU3F1YXJlZCh0aGlzLCBwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmbG9vcigpIHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoTWF0aC5mbG9vcih0aGlzLngpLCBNYXRoLmZsb29yKHRoaXMueSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlVG9Qb2ludChwb2ludDogUG9pbnQpIHtcclxuICAgIHJldHVybiB0aGlzLm1vdmVUb0Nvb3JkaW5hdGVzKHBvaW50LngsIHBvaW50LnkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlVG9Db29yZGluYXRlcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5feCA9IHg7XHJcbiAgICB0aGlzLl95ID0geTtcclxuXHJcbiAgICBpZiAodGhpcy5tb3ZlQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5tb3ZlQ2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL1BvaW50LnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5cclxuY29uc3QgTUFYX0NPTE9SID0gMjU1O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjMge1xyXG4gIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgcHVibGljIHk6IG51bWJlcjtcclxuICBwdWJsaWMgejogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMueiA9IHo7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZyb21Db2xvcihjb2xvcjogQ29sb3IpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyhjb2xvci5yIC8gTUFYX0NPTE9SLCBjb2xvci5nIC8gTUFYX0NPTE9SLCBjb2xvci5iIC8gTUFYX0NPTE9SKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYWRkKHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYxLnggKyB2Mi54LCB2MS55ICsgdjIueSwgdjEueiArIHYyLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdWJ0cmFjdCh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh2MS54IC0gdjIueCwgdjEueSAtIHYyLnksIHYxLnogLSB2Mi56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3Jvc3NQcm9kdWN0KHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKFxyXG4gICAgICB2MS55ICogdjIueiAtIHYxLnogKiB2Mi55LFxyXG4gICAgICB2MS56ICogdjIueCAtIHYxLnggKiB2Mi56LFxyXG4gICAgICB2MS54ICogdjIueSAtIHYxLnkgKiB2Mi54XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkb3RQcm9kdWN0KHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdjEueCAqIHYyLnggKyB2MS55ICogdjIueSArIHYxLnogKiB2Mi56O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjb3NpbmVBbmdsZSh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZG90UHJvZHVjdCA9IFZlY3RvcjMuZG90UHJvZHVjdCh2MSwgdjIpO1xyXG4gICAgY29uc3QgbGVuZ3RoMSA9IHYxLmdldExlbmd0aCgpO1xyXG4gICAgY29uc3QgbGVuZ3RoMiA9IHYyLmdldExlbmd0aCgpO1xyXG5cclxuICAgIHJldHVybiBkb3RQcm9kdWN0IC8gKGxlbmd0aDEgKiBsZW5ndGgyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbU5vcm1hbE1hcChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogVmVjdG9yMyB7XHJcbiAgICBjb25zdCB4ID0gciAvIDI1NSAqIDIgLSAxO1xyXG4gICAgY29uc3QgeSA9IGcgLyAyNTUgKiAyIC0gMTtcclxuICAgIGNvbnN0IHogPSBiIC8gMjU1O1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbXVsdGlwbHlDb21wb25lbnRzKHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMykge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYxLnggKiB2Mi54LCB2MS55ICogdjIueSwgdjEueiAqIHYyLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQ29sb3IoKTogQ29sb3Ige1xyXG4gICAgY29uc3QgciA9IE1hdGguZmxvb3IodGhpcy54ICogTUFYX0NPTE9SKTtcclxuICAgIGNvbnN0IGcgPSBNYXRoLmZsb29yKHRoaXMueSAqIE1BWF9DT0xPUik7XHJcbiAgICBjb25zdCBiID0gTWF0aC5mbG9vcih0aGlzLnogKiBNQVhfQ09MT1IpO1xyXG5cclxuICAgIHJldHVybiBuZXcgQ29sb3IociwgZywgYik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbm9ybWFsaXplKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy54IC8gbGVuZ3RoLCB0aGlzLnkgLyBsZW5ndGgsIHRoaXMueiAvIGxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbXVsdGlwbHkoc2NhbGU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCAqIHNjYWxlLCB0aGlzLnkgKiBzY2FsZSwgdGhpcy56ICogc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlbmd0aCgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICoqIDIgKyB0aGlzLnkgKiogMiArIHRoaXMueiAqKiAyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLngsIHRoaXMueSwgdGhpcy56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnZlcnQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoLXRoaXMueCwgLXRoaXMueSwgLXRoaXMueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmxvb3IoKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcih0aGlzLngpO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IodGhpcy55KTtcclxuICAgIGNvbnN0IHogPSBNYXRoLmZsb29yKHRoaXMueik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vVmVjdG9yMy50cyIsIi8vIERpY3Rpb25hcnlcclxuY29uc3QgTEVYID0ge1xyXG4gIFBPTFlHT05fTEFZRVJfTkFNRTogJ1BvbHlnb25MYXllcicsXHJcbiAgUEFUSF9MQVlFUl9OQU1FOiAnUGF0aExheWVyJyxcclxuICBQQVRIX0dIT1NUX0xBWUVSX05BTUU6ICdQYXRoR2hvc3RMYXllcicsXHJcbiAgTkVXX0NPTkRJVElPTl9FVkVOVF9OQU1FOiAnbmV3LWNvbmRpdGlvbicsXHJcbiAgUkVNT1ZFX0NPTkRJVElPTl9FVkVOVF9OQU1FOiAncmVtb3ZlLWNvbmRpdGlvbicsXHJcbiAgS0VZX0NPREU6IHtcclxuICAgIEVTQ0FQRTogMjdcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBMRVggfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvTEVYLnRzIiwiZXhwb3J0IGVudW0gTGlnaHRUeXBlIHtcclxuICBDb25zdGFudCxcclxuICBNb3ZpbmdcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vTGlnaHRUeXBlLnRzIiwiZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcjogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBnOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IGI6IG51bWJlcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgZmlsbFN0eWxlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpIHtcclxuICAgIHRoaXMuciA9IHI7XHJcbiAgICB0aGlzLmcgPSBnO1xyXG4gICAgdGhpcy5iID0gYjtcclxuXHJcbiAgICB0aGlzLmZpbGxTdHlsZSA9IGByZ2IoJHt0aGlzLnJ9LCAke3RoaXMuZ30sICR7dGhpcy5ifSlgO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tSGV4U3RyaW5nKGhleFN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZWRQYXJ0ID0gaGV4U3RyaW5nLnNsaWNlKDEsIDMpO1xyXG4gICAgY29uc3QgZ3JlZW5QYXJ0ID0gaGV4U3RyaW5nLnNsaWNlKDMsIDUpO1xyXG4gICAgY29uc3QgYmx1ZVBhcnQgPSBoZXhTdHJpbmcuc2xpY2UoNSwgNyk7XHJcblxyXG4gICAgY29uc3QgcmVkID0gcGFyc2VJbnQocmVkUGFydCwgMTYpO1xyXG4gICAgY29uc3QgZ3JlZW4gPSBwYXJzZUludChncmVlblBhcnQsIDE2KTtcclxuICAgIGNvbnN0IGJsdWUgPSBwYXJzZUludChibHVlUGFydCwgMTYpO1xyXG5cclxuICAgIHJldHVybiBuZXcgQ29sb3IocmVkLCBncmVlbiwgYmx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbnRlZ2VyVG9QYWRkZWRIZXgoaW50ZWdlcjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBoZXggPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KTtcclxuXHJcbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gYCAke2hleH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGhleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0hleFN0cmluZygpIHtcclxuICAgIGNvbnN0IHJlZFBhcnQgPSBDb2xvci5pbnRlZ2VyVG9QYWRkZWRIZXgodGhpcy5yKTtcclxuICAgIGNvbnN0IGdyZWVuUGFydCA9IENvbG9yLmludGVnZXJUb1BhZGRlZEhleCh0aGlzLmcpO1xyXG4gICAgY29uc3QgYmx1ZVBhcnQgPSBDb2xvci5pbnRlZ2VyVG9QYWRkZWRIZXgodGhpcy5iKTtcclxuXHJcbiAgICByZXR1cm4gYCMke3JlZFBhcnQgKyBibHVlUGFydCArIGdyZWVuUGFydH1gO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vQ29sb3IudHMiLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbW1vbi9Db2xvcic7XHJcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJ2NvbW1vbi9DT0xPUlMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpbmVQcm9wZXJ0aWVzIHtcclxuICBwdWJsaWMgY29sb3I6IENvbG9yO1xyXG4gIHB1YmxpYyB0aGlja25lc3M6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoY29sb3I6IENvbG9yLCB0aGlja25lc3M6IG51bWJlcikge1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy50aGlja25lc3MgPSB0aGlja25lc3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldERlZmF1bHQoKTogTGluZVByb3BlcnRpZXMge1xyXG4gICAgcmV0dXJuIG5ldyBMaW5lUHJvcGVydGllcyhDT0xPUlMuQkxBQ0ssIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCk6IExpbmVQcm9wZXJ0aWVzIHtcclxuICAgIHJldHVybiBuZXcgTGluZVByb3BlcnRpZXModGhpcy5jb2xvciwgdGhpcy50aGlja25lc3MpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vTGluZVByb3BlcnRpZXMudHMiLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbW1vbi9Db2xvcic7XHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xyXG4gIEJMQUNLOiBuZXcgQ29sb3IoMCwgMCwgMCksXHJcbiAgUkVEOiBuZXcgQ29sb3IoMjU1LCAwLCAwKSxcclxuICBHUkVFTjogbmV3IENvbG9yKDAsIDI1NSwgMCksXHJcbiAgQkxVRTogbmV3IENvbG9yKDAsIDAsIDI1NSksXHJcbiAgV0hJVEU6IG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1KVxyXG59O1xyXG5cclxuT2JqZWN0LmZyZWV6ZShDT0xPUlMpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vQ09MT1JTLnRzIiwiaW1wb3J0IHsgSGl0VGVzdFJlc3VsdCB9IGZyb20gJ2NvbW1vbi9IaXRUZXN0UmVzdWx0JztcclxuaW1wb3J0IHsgUGF0aCwgU2VyaWFsaXphYmxlUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJ1JlbmRlcmVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXphYmxlTGF5ZXIge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwYXRoczogU2VyaWFsaXphYmxlUGF0aFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5ZXIge1xyXG4gIHB1YmxpYyBwYXRoczogUGF0aFtdID0gW107XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihyZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHRoaXMucGF0aHMuZm9yRWFjaChwYXRoID0+IHJlbmRlcmVyLmRyYXdQYXRoKHBhdGgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVQYXRoKHBhdGg6IFBhdGgpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXRocy5pbmRleE9mKHBhdGgpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXRocy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpdFRlc3QocG9pbnQ6IFBvaW50KTogSGl0VGVzdFJlc3VsdCB8IG51bGwge1xyXG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHRoaXMucGF0aHMpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gcGF0aC5oaXRUZXN0KHBvaW50KTtcclxuICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVzdWx0LmxheWVyID0gdGhpcztcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9TZXJpYWxpemFibGVPYmplY3QoKTogU2VyaWFsaXphYmxlTGF5ZXIge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICBwYXRoczogdGhpcy5wYXRocy5tYXAocGF0aCA9PiBwYXRoLnRvU2VyaWFsaXphYmxlT2JqZWN0KCkpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZyb21TZXJpYWxpemFibGVPYmplY3Qoc2VyaWFsaXphYmxlTGF5ZXI6IFNlcmlhbGl6YWJsZUxheWVyKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBzZXJpYWxpemFibGVMYXllci5uYW1lO1xyXG5cclxuICAgIHRoaXMucGF0aHMuc3BsaWNlKDAsIHRoaXMucGF0aHMubGVuZ3RoKTtcclxuXHJcbiAgICBzZXJpYWxpemFibGVMYXllci5wYXRocy5mb3JFYWNoKHNlcmlhbGl6YWJsZVBhdGggPT4ge1xyXG4gICAgICB0aGlzLnBhdGhzLnB1c2goUGF0aC5mcm9tU2VyaWFsaXphYmxlUGF0aChzZXJpYWxpemFibGVQYXRoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0xheWVyLnRzIiwiaW1wb3J0IHsgSGl0VGVzdFJlc3VsdCB9IGZyb20gJ2NvbW1vbi9IaXRUZXN0UmVzdWx0JztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgTGluZVByb3BlcnRpZXMgfSBmcm9tICdjb21tb24vTGluZVByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXphYmxlUGF0aCB7XHJcbiAgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzO1xyXG4gIGNsb3NlZDogYm9vbGVhbjtcclxuICB2ZXJ0aWNlczoge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gIH1bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGgge1xyXG4gIHB1YmxpYyBjbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzO1xyXG4gIHByb3RlY3RlZCByZWFkb25seSB2ZXJ0aWNlczogUG9pbnRbXTtcclxuXHJcbiAgY29uc3RydWN0b3IodmVydGljZXM6IFBvaW50W10sIGxpbmVQcm9wZXJ0aWVzOiBMaW5lUHJvcGVydGllcykge1xyXG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xyXG4gICAgdGhpcy5saW5lUHJvcGVydGllcyA9IGxpbmVQcm9wZXJ0aWVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tU2VyaWFsaXphYmxlUGF0aChzZXJpYWxpemFibGVQYXRoOiBTZXJpYWxpemFibGVQYXRoKSB7XHJcbiAgICBjb25zdCByZWFsUG9pbnRzID0gc2VyaWFsaXphYmxlUGF0aC52ZXJ0aWNlcy5tYXAodmVydGV4ID0+IG5ldyBQb2ludCh2ZXJ0ZXgueCwgdmVydGV4LnkpKTtcclxuICAgIGNvbnN0IHJlYWxMaW5lUHJvcGVydGllcyA9IG5ldyBMaW5lUHJvcGVydGllcyhcclxuICAgICAgc2VyaWFsaXphYmxlUGF0aC5saW5lUHJvcGVydGllcy5jb2xvcixcclxuICAgICAgc2VyaWFsaXphYmxlUGF0aC5saW5lUHJvcGVydGllcy50aGlja25lc3NcclxuICAgICk7XHJcbiAgICBjb25zdCBwYXRoID0gbmV3IFBhdGgocmVhbFBvaW50cywgcmVhbExpbmVQcm9wZXJ0aWVzKTtcclxuICAgIHBhdGguY2xvc2VkID0gc2VyaWFsaXphYmxlUGF0aC5jbG9zZWQ7XHJcblxyXG4gICAgcmV0dXJuIHBhdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgKmdldFZlcnRpY2VzSXRlcmF0b3IoKSB7XHJcbiAgICBjb25zdCB2ZXJ0aWNlc0NvdW50ID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgICB5aWVsZCB0aGlzLnZlcnRpY2VzW2ldO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNsb3NlZCAmJiB2ZXJ0aWNlc0NvdW50ID4gMCkge1xyXG4gICAgICB5aWVsZCB0aGlzLnZlcnRpY2VzWzBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljICpnZXRMaW5lSXRlcmF0b3IoKSB7XHJcbiAgICBsZXQgcHJldmlvdXNQb2ludDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMuZ2V0VmVydGljZXNJdGVyYXRvcigpKSB7XHJcbiAgICAgIGlmICghcHJldmlvdXNQb2ludCkge1xyXG4gICAgICAgIHByZXZpb3VzUG9pbnQgPSBwb2ludDtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgeWllbGQgbmV3IExpbmUocHJldmlvdXNQb2ludCwgcG9pbnQpO1xyXG4gICAgICBwcmV2aW91c1BvaW50ID0gcG9pbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U3RhcnRpbmdQb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzWzBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFZlcnRpY2VzQ291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGluZVByb3BlcnRpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saW5lUHJvcGVydGllcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaXRUZXN0KHBvaW50OiBQb2ludCk6IEhpdFRlc3RSZXN1bHQgfCBudWxsIHtcclxuICAgIGZvciAoY29uc3QgbGluZSBvZiB0aGlzLmdldExpbmVJdGVyYXRvcigpKSB7XHJcbiAgICAgIGlmIChsaW5lLmRpc3RhbmNlVG9Qb2ludChwb2ludCkgPD0gY29uZmlndXJhdGlvbi5oaXRUb2xlcmFuY2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEhpdFRlc3RSZXN1bHQobGluZSwgdGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRWZXJ0ZXgoaW5kZXg6IG51bWJlcik6IFBvaW50IHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzW2luZGV4XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRWZXJ0aWNlcygpOiBQb2ludFtdIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFZlcnRleChwb2ludDogUG9pbnQpIHtcclxuICAgIHRoaXMudmVydGljZXMucHVzaChwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlVmVydGV4KHBvaW50OiBQb2ludCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRQb2ludEluZGV4KHBvaW50KTtcclxuXHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMudmVydGljZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnNlcnRWZXJ0ZXgocG9pbnQ6IFBvaW50LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnZlcnRpY2VzLnNwbGljZShpbmRleCwgMCwgcG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCk6IFBhdGgge1xyXG4gICAgY29uc3QgdmVydGljZXMgPSBbLi4udGhpcy5nZXRWZXJ0aWNlcygpLm1hcChwb2ludCA9PiBwb2ludC5jbG9uZSgpKV07XHJcbiAgICBjb25zdCBsaW5lUHJvcGVydGllcyA9IHRoaXMubGluZVByb3BlcnRpZXMuY2xvbmUoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBhdGgodmVydGljZXMsIGxpbmVQcm9wZXJ0aWVzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaW5kUG9pbnRJbmRleChwb2ludDogUG9pbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzLmluZGV4T2YocG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEJvdW5kaW5nQm94KCkge1xyXG4gICAgbGV0IG1pblggPSBJbmZpbml0eTtcclxuICAgIGxldCBtYXhYID0gMDtcclxuICAgIGxldCBtaW5ZID0gSW5maW5pdHk7XHJcbiAgICBsZXQgbWF4WSA9IDA7XHJcblxyXG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKHBvaW50ID0+IHtcclxuICAgICAgaWYgKHBvaW50LnggPCBtaW5YKSB7XHJcbiAgICAgICAgbWluWCA9IHBvaW50Lng7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvaW50LnggPiBtYXhYKSB7XHJcbiAgICAgICAgbWF4WCA9IHBvaW50Lng7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvaW50LnkgPCBtaW5ZKSB7XHJcbiAgICAgICAgbWluWSA9IHBvaW50Lnk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvaW50LnkgPiBtYXhZKSB7XHJcbiAgICAgICAgbWF4WSA9IHBvaW50Lnk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1pblgsXHJcbiAgICAgIG1heFgsXHJcbiAgICAgIG1pblksXHJcbiAgICAgIG1heFlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNQb2ludEluQm91bmRpbmdCb3gocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBjb25zdCBib3VuZGluZ0JveCA9IHRoaXMuZ2V0Qm91bmRpbmdCb3goKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwb2ludC54ID49IGJvdW5kaW5nQm94Lm1pblggJiZcclxuICAgICAgcG9pbnQueCA8PSBib3VuZGluZ0JveC5tYXhYICYmXHJcbiAgICAgIHBvaW50LnkgPj0gYm91bmRpbmdCb3gubWluWSAmJlxyXG4gICAgICBwb2ludC55IDw9IGJvdW5kaW5nQm94Lm1heFlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9TZXJpYWxpemFibGVPYmplY3QoKTogU2VyaWFsaXphYmxlUGF0aCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsaW5lUHJvcGVydGllczogdGhpcy5saW5lUHJvcGVydGllcy5jbG9uZSgpLFxyXG4gICAgICBjbG9zZWQ6IHRoaXMuY2xvc2VkLFxyXG4gICAgICB2ZXJ0aWNlczogdGhpcy52ZXJ0aWNlcy5tYXAodmVydGV4ID0+ICh7XHJcbiAgICAgICAgeDogdmVydGV4LngsXHJcbiAgICAgICAgeTogdmVydGV4LnlcclxuICAgICAgfSkpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5leHRQb2ludEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiAoaW5kZXggKyAxKSAlIHRoaXMuZ2V0VmVydGljZXNDb3VudCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5leHRQb2ludChwb2ludDogUG9pbnQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy52ZXJ0aWNlcy5pbmRleE9mKHBvaW50KTtcclxuICAgIGNvbnN0IG5leHRQb2ludEluZGV4ID0gdGhpcy5nZXROZXh0UG9pbnRJbmRleChpbmRleCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VmVydGV4KG5leHRQb2ludEluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQcmV2aW91c1BvaW50SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgbGV0IHByZXZpb3VzUG9pbnRJbmRleCA9IGluZGV4IC0gMTtcclxuICAgIGlmIChwcmV2aW91c1BvaW50SW5kZXggPCAwKSB7XHJcbiAgICAgIHByZXZpb3VzUG9pbnRJbmRleCA9IHRoaXMuZ2V0VmVydGljZXNDb3VudCgpIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNQb2ludEluZGV4O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFByZXZpb3VzUG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudmVydGljZXMuaW5kZXhPZihwb2ludCk7XHJcbiAgICBjb25zdCBwcmV2aW91c1BvaW50SW5kZXggPSB0aGlzLmdldFByZXZpb3VzUG9pbnRJbmRleChpbmRleCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VmVydGV4KHByZXZpb3VzUG9pbnRJbmRleCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW92ZVRvKHBhdGg6IFBhdGgpIHtcclxuICAgIGlmICh0aGlzLmdldFZlcnRpY2VzQ291bnQoKSAhPT0gcGF0aC5nZXRWZXJ0aWNlc0NvdW50KCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgbnVtYmVyIG9mIHZlcnRpY2VzIGRvZXMgbm90IG1hdGNoJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2xvc2VkICE9PSBwYXRoLmNsb3NlZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXRoJ3MgY2xvc2VkIHN0YXRlIGRvZXMgbm90IG1hdGNoXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBwb2ludC5tb3ZlVG8ocGF0aC5nZXRWZXJ0ZXgoaW5kZXgpKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2VudGVyT2ZHcmF2aXR5KCkge1xyXG4gICAgbGV0IGNlbnRlclggPSAwO1xyXG4gICAgbGV0IGNlbnRlclkgPSAwO1xyXG5cclxuICAgIHRoaXMuZ2V0VmVydGljZXMoKS5mb3JFYWNoKHBvaW50ID0+IHtcclxuICAgICAgY2VudGVyWCArPSBwb2ludC54O1xyXG4gICAgICBjZW50ZXJZICs9IHBvaW50Lnk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjZW50ZXJYIC89IHRoaXMuZ2V0VmVydGljZXNDb3VudCgpO1xyXG4gICAgY2VudGVyWSAvPSB0aGlzLmdldFZlcnRpY2VzQ291bnQoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvaW50KGNlbnRlclgsIGNlbnRlclkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEJvdW5kaW5nQm94Q2VudGVyKCkge1xyXG4gICAgY29uc3QgYm91bmRpbmdCb3ggPSB0aGlzLmdldEJvdW5kaW5nQm94KCk7XHJcblxyXG4gICAgY29uc3QgY2VudGVyWCA9IChib3VuZGluZ0JveC5tYXhYICsgYm91bmRpbmdCb3gubWluWCkgLyAyO1xyXG4gICAgY29uc3QgY2VudGVyWSA9IChib3VuZGluZ0JveC5tYXhZICsgYm91bmRpbmdCb3gubWluWSkgLyAyO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9pbnQoY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9QYXRoLnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpbmUge1xyXG4gIHB1YmxpYyBwMTogUG9pbnQ7XHJcbiAgcHVibGljIHAyOiBQb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3IocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICAgIGlmIChwMS5lcXVhbHMocDIpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSBsaW5lIGJldHdlZW4gcG9pbnRzIGF0IHRoZSBzYW1lIGNvb3JkaW5hdGVzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wMSA9IHAxO1xyXG4gICAgdGhpcy5wMiA9IHAyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc3RhbmNlVG9Qb2ludChwOiBQb2ludCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBwb2ludFByb2plY3Rpb24gPSB0aGlzLnByb2plY3RQb2ludChwKTtcclxuXHJcbiAgICByZXR1cm4gUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuKHAsIHBvaW50UHJvamVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJvamVjdFBvaW50KHA6IFBvaW50KSB7XHJcbiAgICBjb25zdCBwMSA9IHRoaXMucDE7XHJcbiAgICBjb25zdCBwMiA9IHRoaXMucDI7XHJcblxyXG4gICAgbGV0IHQgPVxyXG4gICAgICAoKHAueCAtIHAxLngpICogKHAyLnggLSBwMS54KSArIChwLnkgLSBwMS55KSAqIChwMi55IC0gcDEueSkpIC9cclxuICAgICAgUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuU3F1YXJlZChwMSwgcDIpO1xyXG4gICAgdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHQpKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHAxLnggKyB0ICogKHAyLnggLSBwMS54KSwgcDEueSArIHQgKiAocDIueSAtIHAxLnkpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlcXVhbHMobGluZTogTGluZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgKHRoaXMucDEuZXF1YWxzKGxpbmUucDEpICYmIHRoaXMucDIuZXF1YWxzKGxpbmUucDIpKSB8fFxyXG4gICAgICAodGhpcy5wMS5lcXVhbHMobGluZS5wMikgJiYgdGhpcy5wMi5lcXVhbHMobGluZS5wMSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE1pZGRsZVBvaW50KCk6IFBvaW50IHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoKHRoaXMucDEueCArIHRoaXMucDIueCkgLyAyLCAodGhpcy5wMS55ICsgdGhpcy5wMi55KSAvIDIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlbmd0aCgpIHtcclxuICAgIHJldHVybiBQb2ludC5nZXREaXN0YW5jZUJldHdlZW4odGhpcy5wMSwgdGhpcy5wMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGlyZWN0aW9uKHA6IFBvaW50KSB7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBQb2ludC5jcm9zc1Byb2R1Y3QoXHJcbiAgICAgIFBvaW50LnN1YnRyYWN0KHRoaXMucDIsIHRoaXMucDEpLFxyXG4gICAgICBQb2ludC5zdWJ0cmFjdChwLCB0aGlzLnAxKVxyXG4gICAgKTtcclxuICAgIGlmIChNYXRoLmFicyhkaXJlY3Rpb24pIDwgMC4wMDAxKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vTGluZS50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBJbWFnZURhdGE7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlRGF0YTogSW1hZ2VEYXRhKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ05ld0JhY2tncm91bmRUZXh0dXJlJztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdIZWlnaHRNYXBFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogSW1hZ2VEYXRhO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdIZWlnaHRNYXBFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW1hZ2VEYXRhOiBJbWFnZURhdGEpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGltYWdlRGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdIZWlnaHRNYXBFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW50ZW5zaXR5OiBudW1iZXIpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGludGVuc2l0eTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudC50cyIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdjb21tb24vVmVjdG9yMyc7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3TGlnaHRDb2xvckV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBWZWN0b3IzO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdMaWdodENvbG9yRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbG9yOiBWZWN0b3IzKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBjb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodENvbG9yRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRDb2xvckV2ZW50LnRzIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuXHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdMaWdodFBvc2l0aW9uRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IFZlY3RvcjM7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0xpZ2h0UG9zaXRpb25FdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IobGlnaHRQb3NpdGlvbjogVmVjdG9yMykge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gbGlnaHRQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodFBvc2l0aW9uRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRQb3NpdGlvbkV2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpZ2h0UG9zaXRpb25SYWRpdXM6IG51bWJlcikge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gbGlnaHRQb3NpdGlvblJhZGl1cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50LnRzIiwiaW1wb3J0IHsgTGlnaHRUeXBlIH0gZnJvbSAnY29tbW9uL0xpZ2h0VHlwZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3TGlnaHRUeXBlRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IExpZ2h0VHlwZTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3TGlnaHRUeXBlRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpZ2h0VHlwZTogTGlnaHRUeXBlKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBsaWdodFR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3TGlnaHRUeXBlRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRUeXBlRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3Tm9ybWFsTWFwRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IEltYWdlRGF0YTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3Tm9ybWFsTWFwRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlRGF0YTogSW1hZ2VEYXRhKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3Tm9ybWFsTWFwRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3Tm9ybWFsTWFwRXZlbnQudHMiLCJleHBvcnQgZW51bSBGaWxsV29ya2VyTWVzc2FnZVR5cGUge1xyXG4gIENhbnZhc0luZm8sXHJcblxyXG4gIE5ld0ZpbGxEYXRhRXZlbnQsXHJcblxyXG4gIFN0YXJ0RmlsbCxcclxuICBGaWxsU3RyaXBzLFxyXG4gIEVuZEZpbGxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9wb2x5Z29uLWZpbGxlci9GaWxsV29ya2VyTWVzc2FnZVR5cGUudHMiLCJpbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBQYXRoIHtcclxuICBjb25zdHJ1Y3RvcihwYXRoOiBQYXRoKTtcclxuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlczogUG9pbnRbXSwgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzKTtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aE9yVmVydGljZXM6IFBhdGggfCBQb2ludFtdLCBsaW5lUHJvcGVydGllcz86IExpbmVQcm9wZXJ0aWVzKSB7XHJcbiAgICBsZXQgdmVydGljZXM6IFBvaW50W107XHJcblxyXG4gICAgaWYgKHBhdGhPclZlcnRpY2VzIGluc3RhbmNlb2YgUGF0aCkge1xyXG4gICAgICBjb25zdCBwYXRoID0gcGF0aE9yVmVydGljZXM7XHJcbiAgICAgIHZlcnRpY2VzID0gcGF0aC5nZXRWZXJ0aWNlcygpO1xyXG4gICAgICBsaW5lUHJvcGVydGllcyA9IHBhdGgubGluZVByb3BlcnRpZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2ZXJ0aWNlcyA9IHBhdGhPclZlcnRpY2VzO1xyXG4gICAgICBsaW5lUHJvcGVydGllcyA9IDxMaW5lUHJvcGVydGllcz5saW5lUHJvcGVydGllcztcclxuICAgIH1cclxuXHJcbiAgICBQb2x5Z29uLmVuc3VyZVZlcnRpY2VzTGVuZ3RoKHZlcnRpY2VzKTtcclxuICAgIHN1cGVyKHZlcnRpY2VzLCBsaW5lUHJvcGVydGllcyk7XHJcbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBlbnN1cmVWZXJ0aWNlc0xlbmd0aCh2ZXJ0aWNlczogUG9pbnRbXSkge1xyXG4gICAgaWYgKHZlcnRpY2VzLmxlbmd0aCA+PSBjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihgUG9seWdvbiBtdXN0IGhhdmUgYXQgbGVhc3QgJHtjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHN9IHZlcnRpY2VzYCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKTogUG9seWdvbiB7XHJcbiAgICByZXR1cm4gbmV3IFBvbHlnb24oc3VwZXIuY2xvbmUoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlVmVydGV4KHBvaW50OiBQb2ludCkge1xyXG4gICAgaWYgKHRoaXMuZ2V0VmVydGljZXNDb3VudCgpID09PSBjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlIHZlcnRleCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnJlbW92ZVZlcnRleChwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNDb252ZXgoKSB7XHJcbiAgICBsZXQgbGFzdExpbmU6IExpbmUgfCBudWxsID0gbnVsbDtcclxuICAgIGxldCBsYXN0RGlyZWN0aW9uOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgdGhpcy5nZXRMaW5lSXRlcmF0b3IoKSkge1xyXG4gICAgICBpZiAoIWxhc3RMaW5lKSB7XHJcbiAgICAgICAgbGFzdExpbmUgPSBsaW5lO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50RGlyZWN0aW9uID0gbGFzdExpbmUuZ2V0RGlyZWN0aW9uKGxpbmUucDIpO1xyXG4gICAgICBsYXN0TGluZSA9IGxpbmU7XHJcblxyXG4gICAgICBpZiAobGFzdERpcmVjdGlvbiA9PT0gbnVsbCAmJiBjdXJyZW50RGlyZWN0aW9uICE9PSAwKSB7XHJcbiAgICAgICAgbGFzdERpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb247XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSAwKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uICE9PSBsYXN0RGlyZWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9Qb2x5Z29uLnRzIiwiaW1wb3J0ICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cuc2Nzcyc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcblxyXG5jb25zdCBjbGFzc05hbWVzID0ge1xyXG4gIERJQUxPR19CT1g6ICdkaWFsb2ctYm94JyxcclxuICBESUFMT0c6ICdpbWFnZS1zZWxlY3QtZGlhbG9nJyxcclxuICBIRUFERVI6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19oZWFkZXInLFxyXG4gIEhFQURJTkc6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19oZWFkaW5nJyxcclxuICBCTE9DSzogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2Jsb2NrJyxcclxuICBCTE9DS19USVRMRTogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2Jsb2NrLXRpdGxlJyxcclxuICBQUkVTRVRfSU1BR0VTX0NPTlRBSU5FUjogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX3ByZXNldC1pbWFnZXMtY29udGFpbmVyJyxcclxuICBTRUxFQ1RFRF9JTUFHRTogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2ltYWdlLS1zZWxlY3RlZCcsXHJcbiAgQ1VTVE9NX0lNQUdFOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fY3VzdG9tLWltYWdlJyxcclxuICBCT1RUT01fQlVUVE9OUzogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlU2VsZWN0RGlhbG9nIGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBEaWFsb2dCb3gge1xyXG4gIHByaXZhdGUgX3ByZXNldEltYWdlVXJsczogc3RyaW5nW107XHJcblxyXG4gIHByaXZhdGUgaGVhZGluZzogSFRNTEhlYWRpbmdFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIHByZXNldEltYWdlc0xpc3RDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgY3VzdG9tRmlsZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgY3VzdG9tSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgY3VzdG9tQ29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGluaXRpYWxDdXN0b21Db2xvckhleDogc3RyaW5nO1xyXG4gIHByaXZhdGUgY3VzdG9tQ29sb3JJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBjYW5jZWxCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgY29uZmlybUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgX3NlbGVjdGVkSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfd2FzQ2FuY2VsbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByZXNldEltYWdlVXJsczogc3RyaW5nW10sIGluaXRpYWxDdXN0b21Db2xvckhleDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuX3ByZXNldEltYWdlVXJscyA9IHByZXNldEltYWdlVXJscztcclxuICAgIHRoaXMuaW5pdGlhbEN1c3RvbUNvbG9ySGV4ID0gaW5pdGlhbEN1c3RvbUNvbG9ySGV4O1xyXG5cclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkRJQUxPR19CT1gpO1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuRElBTE9HKTtcclxuXHJcbiAgICB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2sgPSB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2hvd0N1c3RvbUltYWdlID0gdGhpcy5zaG93Q3VzdG9tSW1hZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DYW5jZWxCdXR0b25DbGljayA9IHRoaXMub25DYW5jZWxCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayA9IHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DdXN0b21Db2xvcklucHV0Q2hhbmdlID0gdGhpcy5vbkN1c3RvbUNvbG9ySW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUhlYWRlcigpO1xyXG4gICAgdGhpcy5jcmVhdGVQcmVzZXRJbWFnZXNMaXN0KCk7XHJcbiAgICB0aGlzLmNyZWF0ZUN1c3RvbUltYWdlUGlja2VyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUN1c3RvbUNvbG9yUGlja2VyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUJvdHRvbUJ1dHRvbnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgIHJldHVybiBbJ25hbWUnXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJykgfHwgJ0ltYWdlIHNlbGVjdCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB2YWx1ZSk7XHJcbiAgICB0aGlzLmhlYWRpbmcuaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdhc0NhbmNlbGxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl93YXNDYW5jZWxsZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHByZXNldEltYWdlVXJscygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmVzZXRJbWFnZVVybHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW1hZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbWFnZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuX3dhc0NhbmNlbGxlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2spO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayk7XHJcbiAgICB0aGlzLmN1c3RvbUZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnNob3dDdXN0b21JbWFnZSk7XHJcbiAgICB0aGlzLmN1c3RvbUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uQ3VzdG9tQ29sb3JJbnB1dENoYW5nZSk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spO1xyXG5cclxuICAgIHRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lclxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICAgICAgLmZvckVhY2goaW1hZ2UgPT4gaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lclxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICAgICAgLmZvckVhY2goaW1hZ2UgPT4gaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spKTtcclxuICAgIHRoaXMuY3VzdG9tRmlsZUlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuc2hvd0N1c3RvbUltYWdlKTtcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvcklucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25DdXN0b21Db2xvcklucHV0Q2hhbmdlKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljayk7XHJcblxyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2spO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuQ2xvc2UoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmNyZWF0ZUJsb2NrKCk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkhFQURFUik7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgdGhpcy5oZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRoaXMuaGVhZGluZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuSEVBRElORyk7XHJcbiAgICB0aGlzLmhlYWRpbmcuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLmhlYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQcmVzZXRJbWFnZXNMaXN0KCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVCbG9jaygpO1xyXG4gICAgY29uc3QgYmxvY2tUaXRsZSA9IHRoaXMuY3JlYXRlQmxvY2tUaXRsZSgnQ2hvb3NlIHByZXNldCBpbWFnZScpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJsb2NrVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW1hZ2VzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5QUkVTRVRfSU1BR0VTX0NPTlRBSU5FUik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VzQ29udGFpbmVyKTtcclxuICAgIHRoaXMucHJlc2V0SW1hZ2VVcmxzXHJcbiAgICAgIC5tYXAodXJsID0+IHRoaXMuY3JlYXRlU2VsZWN0YWJsZUltYWdlKHVybCkpXHJcbiAgICAgIC5mb3JFYWNoKGltYWdlID0+IGltYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSkpO1xyXG5cclxuICAgIHRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5wcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdEltYWdlKDxIVE1MSW1hZ2VFbGVtZW50PnRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbWcnKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUN1c3RvbUltYWdlUGlja2VyKCkge1xyXG4gICAgY29uc3QgY3VzdG9tSW1hZ2VDb250YWluZXIgPSB0aGlzLmNyZWF0ZUJsb2NrKCk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGN1c3RvbUltYWdlQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBibG9ja1RpdGxlID0gdGhpcy5jcmVhdGVCbG9ja1RpdGxlKCdTZWxlY3QgY3VzdG9tIGltYWdlJyk7XHJcbiAgICBjdXN0b21JbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChibG9ja1RpdGxlKTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUZpbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aGlzLmN1c3RvbUZpbGVJbnB1dC50eXBlID0gJ2ZpbGUnO1xyXG4gICAgdGhpcy5jdXN0b21GaWxlSW5wdXQuYWNjZXB0ID0gJ2ltYWdlLyonO1xyXG4gICAgY3VzdG9tSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jdXN0b21GaWxlSW5wdXQpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkNVU1RPTV9JTUFHRSk7XHJcbiAgICBjdXN0b21JbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmN1c3RvbUltYWdlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0N1c3RvbUltYWdlKCkge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tRmlsZUlucHV0LmZpbGVzICYmIHRoaXMuY3VzdG9tRmlsZUlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICByZWFkZXIub25sb2FkID0gZSA9PiB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gICAgICAgIHRoaXMuY3VzdG9tSW1hZ2Uuc3JjID0gKDxhbnk+ZS50YXJnZXQpLnJlc3VsdDtcclxuICAgICAgICB0aGlzLnNlbGVjdEltYWdlKHRoaXMuY3VzdG9tSW1hZ2UpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5jdXN0b21GaWxlSW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDdXN0b21Db2xvclBpY2tlcigpIHtcclxuICAgIGNvbnN0IGN1c3RvbUNvbG9yQ29udGFpbmVyID0gdGhpcy5jcmVhdGVCbG9jaygpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChjdXN0b21Db2xvckNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmNyZWF0ZUJsb2NrVGl0bGUoJ0N1c3RvbSBzb2xpZCBjb2xvcicpO1xyXG4gICAgY3VzdG9tQ29sb3JDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW5wdXQudHlwZSA9ICdjb2xvcic7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLmluaXRpYWxDdXN0b21Db2xvckhleDtcclxuICAgIGN1c3RvbUNvbG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tQ29sb3JJbnB1dCk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21Db2xvckltYWdlID0gbmV3IEltYWdlKDIwLCAyMCk7XHJcbiAgICBjdXN0b21Db2xvckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmN1c3RvbUNvbG9ySW1hZ2UpO1xyXG5cclxuICAgIHRoaXMuc2V0Q3VzdG9tQ29sb3JJbWFnZUNvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ3VzdG9tQ29sb3JJbnB1dENoYW5nZSgpIHtcclxuICAgIHRoaXMuc2V0Q3VzdG9tQ29sb3JJbWFnZUNvbG9yKCk7XHJcbiAgICB0aGlzLnNlbGVjdEltYWdlKHRoaXMuY3VzdG9tQ29sb3JJbWFnZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEN1c3RvbUNvbG9ySW1hZ2VDb2xvcigpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gdGhpcy5jdXN0b21Db2xvckltYWdlLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY3VzdG9tQ29sb3JJbWFnZS5oZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpZiAoIWN0eCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgY2FudmFzIGRyYXdpbmcgY29udGV4dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmN1c3RvbUNvbG9ySW5wdXQudmFsdWU7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCb3R0b21CdXR0b25zKCkge1xyXG4gICAgY29uc3QgYm90dG9tQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm90dG9tQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuQk9UVE9NX0JVVFRPTlMpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChib3R0b21CdXR0b25zQ29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XHJcblxyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24uaW5uZXJUZXh0ID0gJ0NvbmZpcm0nO1xyXG5cclxuICAgIGJvdHRvbUJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW5jZWxCdXR0b24pO1xyXG4gICAgYm90dG9tQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbmZpcm1CdXR0b24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNhbmNlbEJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNvbmZpcm1CdXR0b25DbGljaygpIHtcclxuICAgIHRoaXMuX3dhc0NhbmNlbGxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCbG9jaygpIHtcclxuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuQkxPQ0spO1xyXG5cclxuICAgIHJldHVybiBibG9jaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQmxvY2tUaXRsZSh0aXRsZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBibG9ja1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJMT0NLX1RJVExFKTtcclxuICAgIGJsb2NrVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XHJcblxyXG4gICAgcmV0dXJuIGJsb2NrVGl0bGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVNlbGVjdGFibGVJbWFnZShpbWFnZVNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1hZ2VTb3VyY2U7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNlbGVjdGFibGVJbWFnZUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdEltYWdlKDxIVE1MSW1hZ2VFbGVtZW50PmV2ZW50LnRhcmdldCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdEltYWdlKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICBpZiAoaW1hZ2UgPT09IHRoaXMuX3NlbGVjdGVkSW1hZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZEltYWdlKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWVzLlNFTEVDVEVEX0lNQUdFKTtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuU0VMRUNURURfSU1BR0UpO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRJbWFnZSA9IGltYWdlO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaW1hZ2Utc2VsZWN0LWRpYWxvZycsIEltYWdlU2VsZWN0RGlhbG9nKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnRzIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcblxyXG5pbXBvcnQgeyBJbWFnZURvd25sb2FkZXIgfSBmcm9tICdzZXJ2aWNlcy9JbWFnZURvd25sb2FkZXInO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VTZWxlY3REaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQm94QnV0dG9uLCBEaWFsb2dCb3hCdXR0b25EZXBlbmRlbmNpZXMgfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveEJ1dHRvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uRGVwZW5kZW5jaWVzIGV4dGVuZHMgRGlhbG9nQm94QnV0dG9uRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uIGV4dGVuZHMgRGlhbG9nQm94QnV0dG9uIHtcclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG5cclxuICBwcm90ZWN0ZWQgZGlhbG9nQm94OiBJbWFnZVNlbGVjdERpYWxvZztcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbkRlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoeyBkaWFsb2dPdmVybGF5OiBkZXBlbmRlbmNpZXMuZGlhbG9nT3ZlcmxheSB9KTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmltYWdlRG93bmxvYWRlciA9IGRlcGVuZGVuY2llcy5pbWFnZURvd25sb2FkZXI7XHJcblxyXG4gICAgdGhpcy5idXR0b24uaW5uZXJUZXh0ID0gJ1NlbGVjdCBpbWFnZSc7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0U2VsZWN0ZWRJbWFnZURhdGEoKTogUHJvbWlzZTxJbWFnZURhdGE+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSW1hZ2UgPSB0aGlzLmRpYWxvZ0JveC5zZWxlY3RlZEltYWdlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmltYWdlRG93bmxvYWRlci5pbWFnZVRvSW1hZ2VEYXRhKHNlbGVjdGVkSW1hZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaW1hZ2Utc2VsZWN0LWRpYWxvZy1idXR0b24nLCBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZ0J1dHRvbi50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuaW1wb3J0IHsgUGF0aFBvaW50RWxlbWVudCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludENsaWNrRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IFBhdGhQb2ludEVsZW1lbnQ7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aFBvaW50RWxlbWVudDogUGF0aFBvaW50RWxlbWVudCkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gcGF0aFBvaW50RWxlbWVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnUG9pbnRDbGlja0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL1BvaW50Q2xpY2tFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nRmluaXNoZWRFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZCA9IG51bGw7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IExvYWRpbmdGaW5pc2hlZEV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTG9hZGluZ0ZpbmlzaGVkRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL3VpL0xvYWRpbmdGaW5pc2hlZEV2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdTdGFydGVkRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQgPSBudWxsO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBMb2FkaW5nU3RhcnRlZEV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTG9hZGluZ1N0YXJ0ZWRFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvdWkvTG9hZGluZ1N0YXJ0ZWRFdmVudC50cyIsImltcG9ydCB7IERpYWxvZ092ZXJsYXkgfSBmcm9tICd1aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXknO1xyXG5pbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0JveEJ1dHRvbkRlcGVuZGVuY2llcyB7XHJcbiAgZGlhbG9nT3ZlcmxheTogRGlhbG9nT3ZlcmxheTtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERpYWxvZ0JveEJ1dHRvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZGlhbG9nT3ZlcmxheTogRGlhbG9nT3ZlcmxheTtcclxuXHJcbiAgcHJvdGVjdGVkIGRpYWxvZ0JveDogRGlhbG9nQm94O1xyXG4gIHByb3RlY3RlZCBidXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IERpYWxvZ0JveEJ1dHRvbkRlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkgPSBkZXBlbmRlbmNpZXMuZGlhbG9nT3ZlcmxheTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5idXR0b24uaW5uZXJUZXh0ID0gJ09wZW4gZGlhbG9nIGJveCc7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcclxuXHJcbiAgICB0aGlzLm9wZW5EaWFsb2dCb3ggPSB0aGlzLm9wZW5EaWFsb2dCb3guYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25EaWFsb2dCb3hDbG9zZWQgPSB0aGlzLm9uRGlhbG9nQm94Q2xvc2VkLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldHVwRGlhbG9nQm94KCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpYWxvZ0JveCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpYWxvZyBib3ggaXMgdW5kZWZpbmVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkRpYWxvZ0JveCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkRpYWxvZ0JveCk7XHJcblxyXG4gICAgdGhpcy5kaWFsb2dCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uRGlhbG9nQm94Q2xvc2VkKTtcclxuICAgIHRoaXMuZGlhbG9nQm94LmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2V0dXBEaWFsb2dCb3goKTogdm9pZDtcclxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25EaWFsb2dCb3hDbG9zZWQoZXZlbnQ6IEV2ZW50KTogdm9pZDtcclxuXHJcbiAgcHJvdGVjdGVkIG9wZW5EaWFsb2dCb3goKSB7XHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkuc2hvd0RpYWxvZyh0aGlzLmRpYWxvZ0JveCk7XHJcbiAgICB0aGlzLmRpYWxvZ0JveC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25EaWFsb2dCb3hDbG9zZWQpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZGlhbG9nLWJveC1idXR0b24nLCBEaWFsb2dCb3hCdXR0b24pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL0RpYWxvZ0JveEJ1dHRvbi50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJGaW5pc2hlZEV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkID0gbnVsbDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gUmVuZGVyRmluaXNoZWRFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIFJlbmRlckZpbmlzaGVkRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL1JlbmRlckZpbmlzaGVkRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludEVsZW1lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmluaXNoUG9pbnREcmFnRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IFBhdGhQb2ludEVsZW1lbnQ7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IEZpbmlzaFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoUG9pbnRFbGVtZW50OiBQYXRoUG9pbnRFbGVtZW50KSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBwYXRoUG9pbnRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdGaW5pc2hQb2ludERyYWdFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL0ZpbmlzaFBvaW50RHJhZ0V2ZW50LnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludEVsZW1lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnREcmFnRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IHtcclxuICAgIGVsZW1lbnQ6IFBhdGhQb2ludEVsZW1lbnQsXHJcbiAgICBuZXdQb3NpdGlvbjogUG9pbnRcclxuICB9O1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBQb2ludERyYWdFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aFBvaW50RWxlbWVudDogUGF0aFBvaW50RWxlbWVudCwgbmV3UG9zaXRpb246IFBvaW50KSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSB7XHJcbiAgICAgIGVsZW1lbnQ6IHBhdGhQb2ludEVsZW1lbnQsXHJcbiAgICAgIG5ld1Bvc2l0aW9uXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdQb2ludERyYWdFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL1BvaW50RHJhZ0V2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5pbXBvcnQgeyBQYXRoUG9pbnRFbGVtZW50IH0gZnJvbSAndWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ0UG9pbnREcmFnRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IFBhdGhQb2ludEVsZW1lbnQ7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IFN0YXJ0UG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhdGhQb2ludEVsZW1lbnQ6IFBhdGhQb2ludEVsZW1lbnQpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IHBhdGhQb2ludEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ1N0YXJ0UG9pbnREcmFnRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuaW50ZXJmYWNlIExpbmVDbGlja0V2ZW50UGF5bG9hZCB7XHJcbiAgbGluZTogTGluZTtcclxuICBwYXRoOiBQYXRoO1xyXG4gIHBvc2l0aW9uOiBQb2ludDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpbmVDbGlja0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBMaW5lQ2xpY2tFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IExpbmVDbGlja0V2ZW50UGF5bG9hZDtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsaW5lOiBMaW5lLCBwYXRoOiBQYXRoLCBwb3NpdGlvbjogUG9pbnQpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IHtcclxuICAgICAgbGluZSxcclxuICAgICAgcGF0aCxcclxuICAgICAgcG9zaXRpb25cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ0xpbmVDbGlja0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL0xpbmVDbGlja0V2ZW50LnRzIiwiaW1wb3J0IHsgRGlhbG9nQm94IH0gZnJvbSAndWkvY29tcG9uZW50cy9EaWFsb2dCb3gnO1xyXG5cclxuaW1wb3J0ICd1aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNEaWFsb2cuc2Nzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdHJ1Y3Rpb25zRGlhbG9nIGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBEaWFsb2dCb3gge1xyXG4gIHByaXZhdGUgZGlzbWlzc0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbnMtZGlhbG9nIGRpYWxvZy1ib3gnO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnSW5zdHJ1Y3Rpb25zJztcclxuICAgIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSAnaW5zdHJ1Y3Rpb25zLWRpYWxvZ19fdGl0bGUnO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlVXNhZ2VMaXN0KCk7XHJcblxyXG4gICAgdGhpcy5kaXNtaXNzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmRpc21pc3NCdXR0b24udGV4dENvbnRlbnQgPSAnRGlzbWlzcyc7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuZGlzbWlzc0J1dHRvbik7XHJcblxyXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuZGlzbWlzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5kaXNtaXNzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbG9zZScpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5DbG9zZSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVVc2FnZUxpc3QoKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgICBjb25zdCB1c2FnZSA9IFtcclxuICAgICAgJ0NsaWNrIG9uIHRoZSBmcmVlIHNwYWNlIGluIHRoZSBjYW52YXMgdG8gc3RhcnQgY3JlYXRpbmcgdmVydGljZXMnLFxyXG4gICAgICAnQ2xpY2sgb24gdGhlIGluaXRpYWwgdmVydGV4IHRvIGNsb3NlIHRoZSBwYXRoIGludG8gYSBwb2x5Z29uJyxcclxuICAgICAgJ0FsdGVybmF0aXZlbHksIHlvdSBtYXkgcHJlc3MgRXNjYXBlIHRvIGNhbmNlbCBhZGRpbmcgYSBuZXcgcGF0aCcsXHJcbiAgICAgICdDbGljayBhbmQgZHJhZyB0aGUgdmVydGV4IHRvIG1vdmUgaXQnLFxyXG4gICAgICAnRG91YmxlIGNsaWNrIG9uIGFuIGVkZ2UgdG8gYWRkIGEgdmVydGV4IGluIHRoZSBtaWRkbGUgb2YgaXQnLFxyXG4gICAgICAnRG91YmxlIGNsaWNrIG9uIGEgdmVydGV4IHRvIHJlbW92ZSBpdCcsXHJcbiAgICAgICdQcmVzc2luZyBDdHJsIGFsbG93cyBkcmFnZ2luZyBhIHdob2xlIHBvbHlnb24nLFxyXG4gICAgICBcIlNoaWZ0ICsgY2xpY2sgdG8gY2xpcCB0aGUgcG9seWdvbnMgdXNpbmcgU3V0aGVybGFuZC1Ib2RnbWFuJ3MgYWxnb3JpdGhtXCIsXHJcbiAgICAgICdTYXZlIGFsbG93cyB5b3UgdG8gZXhwb3J0IGFsbCB0aGUgcG9seWdvbnMgb24gdGhlIHNjcmVlbicsXHJcbiAgICAgICdMb2FkIGFsbG93cyB5b3UgdG8gcmVzdG9yZSB0aGUgcG9seWdvbnMnXHJcbiAgICBdO1xyXG5cclxuICAgIHVzYWdlXHJcbiAgICAgIC5tYXAodXNhZ2VJdGVtVGV4dCA9PiB0aGlzLmNyZWF0ZVVzYWdlTGlzdEl0ZW0odXNhZ2VJdGVtVGV4dCkpXHJcbiAgICAgIC5mb3JFYWNoKHVzYWdlTGlzdEl0ZW0gPT4gbGlzdC5hcHBlbmRDaGlsZCh1c2FnZUxpc3RJdGVtKSk7XHJcblxyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChsaXN0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVXNhZ2VMaXN0SXRlbSh0ZXh0Q29udGVudDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGl0ZW0udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuXHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1pbnN0cnVjdGlvbnMtZGlhbG9nJywgSW5zdHJ1Y3Rpb25zRGlhbG9nKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnRzIiwiaW1wb3J0ICdpbmRleC5zY3NzJztcclxuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcclxuXHJcbmltcG9ydCAnQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL3dlYmNvbXBvbmVudHMtaGktc2QtY2UnO1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdBcHBsaWNhdGlvbic7XHJcblxyXG53aW5kb3cub25sb2FkID0gYm9vdHN0cmFwO1xyXG5cclxuZnVuY3Rpb24gYm9vdHN0cmFwKCk6IHZvaWQge1xyXG4gIGNvbnN0IGNhbnZhc0lkID0gJ21haW4tY2FudmFzJztcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XHJcbiAgaWYgKCFjYW52YXMpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgQ2FudmFzIHdpdGggaWQgJHtjYW52YXNJZH0gY2Fubm90IGJlIGZvdW5kYCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhcHBsaWNhdGlvbiA9IG5ldyBBcHBsaWNhdGlvbig8SFRNTENhbnZhc0VsZW1lbnQ+Y2FudmFzKTtcclxuICBhcHBsaWNhdGlvbi5pbml0KCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvaW5kZXgudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41OyB9XFxuXFxuLm1haW4tY2FudmFzIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrOyB9XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxZW07IH1cXG5cXG4uY2FudmFzLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uYXBwbGljYXRpb24tdWkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gIC5hcHBsaWNhdGlvbi11aSAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDsgfVxcblxcbi5hcHAtaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07IH1cXG5cXG4uYXBwLW5hbWUge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLmZvb3RlciB7XFxuICBtYXJnaW46IDFlbSAxZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24oKXsvKlxuXG4gQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuJ3VzZSBzdHJpY3QnO3ZhciBuLHA9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09dGhpcz90aGlzOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6dGhpcyxhYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oYSxiLGMpe2EhPUFycmF5LnByb3RvdHlwZSYmYSE9T2JqZWN0LnByb3RvdHlwZSYmKGFbYl09Yy52YWx1ZSl9O2Z1bmN0aW9uIGJhKCl7YmE9ZnVuY3Rpb24oKXt9O3AuU3ltYm9sfHwocC5TeW1ib2w9ZGEpfXZhciBkYT1mdW5jdGlvbigpe3ZhciBhPTA7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVyblwianNjb21wX3N5bWJvbF9cIisoYnx8XCJcIikrYSsrfX0oKTtcbmZ1bmN0aW9uIGVhKCl7YmEoKTt2YXIgYT1wLlN5bWJvbC5pdGVyYXRvcjthfHwoYT1wLlN5bWJvbC5pdGVyYXRvcj1wLlN5bWJvbChcIml0ZXJhdG9yXCIpKTtcImZ1bmN0aW9uXCIhPXR5cGVvZiBBcnJheS5wcm90b3R5cGVbYV0mJmFhKEFycmF5LnByb3RvdHlwZSxhLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZmEodGhpcyl9fSk7ZWE9ZnVuY3Rpb24oKXt9fWZ1bmN0aW9uIGZhKGEpe3ZhciBiPTA7cmV0dXJuIGhhKGZ1bmN0aW9uKCl7cmV0dXJuIGI8YS5sZW5ndGg/e2RvbmU6ITEsdmFsdWU6YVtiKytdfTp7ZG9uZTohMH19KX1mdW5jdGlvbiBoYShhKXtlYSgpO2E9e25leHQ6YX07YVtwLlN5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307cmV0dXJuIGF9ZnVuY3Rpb24gaWEoYSl7ZWEoKTt2YXIgYj1hW1N5bWJvbC5pdGVyYXRvcl07cmV0dXJuIGI/Yi5jYWxsKGEpOmZhKGEpfVxuZnVuY3Rpb24gamEoYSl7Zm9yKHZhciBiLGM9W107IShiPWEubmV4dCgpKS5kb25lOyljLnB1c2goYi52YWx1ZSk7cmV0dXJuIGN9XG4oZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhLGIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQpcmV0dXJuIG5ldyBDdXN0b21FdmVudChhLGIpO3ZhciBjPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7Yy5pbml0Q3VzdG9tRXZlbnQoYSwhIWIuYnViYmxlcywhIWIuY2FuY2VsYWJsZSxiLmRldGFpbCk7cmV0dXJuIGN9ZnVuY3Rpb24gYyhhKXtpZihtKXJldHVybiBhLm93bmVyRG9jdW1lbnQhPT1kb2N1bWVudD9hLm93bmVyRG9jdW1lbnQ6bnVsbDt2YXIgYj1hLl9faW1wb3J0RG9jO2lmKCFiJiZhLnBhcmVudE5vZGUpe2I9YS5wYXJlbnROb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmNsb3Nlc3QpYj1iLmNsb3Nlc3QoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2Vsc2UgZm9yKDshZyhiKSYmKGI9Yi5wYXJlbnROb2RlKTspO2EuX19pbXBvcnREb2M9Yn1yZXR1cm4gYn1mdW5jdGlvbiBkKGEpe3ZhciBiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdOm5vdChbaW1wb3J0LWRlcGVuZGVuY3ldKVwiKSxcbmM9Yi5sZW5ndGg7Yz9sKGIsZnVuY3Rpb24oYil7cmV0dXJuIGgoYixmdW5jdGlvbigpezA9PT0tLWMmJmEoKX0pfSk6YSgpfWZ1bmN0aW9uIGUoYSl7ZnVuY3Rpb24gYigpe1wibG9hZGluZ1wiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZSYmZG9jdW1lbnQuYm9keSYmKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsYiksYSgpKX1kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGIpO2IoKX1mdW5jdGlvbiBmKGEpe2UoZnVuY3Rpb24oKXtyZXR1cm4gZChmdW5jdGlvbigpe3JldHVybiBhJiZhKCl9KX0pfWZ1bmN0aW9uIGgoYSxiKXtpZihhLl9fbG9hZGVkKWImJmIoKTtlbHNlIGlmKFwic2NyaXB0XCI9PT1hLmxvY2FsTmFtZSYmIWEuc3JjfHxcInN0eWxlXCI9PT1hLmxvY2FsTmFtZSYmIWEuZmlyc3RDaGlsZClhLl9fbG9hZGVkPSEwLGImJmIoKTtlbHNle3ZhciBjPWZ1bmN0aW9uKGQpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLnR5cGUsXG5jKTthLl9fbG9hZGVkPSEwO2ImJmIoKX07YS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGMpO0thJiZcInN0eWxlXCI9PT1hLmxvY2FsTmFtZXx8YS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixjKX19ZnVuY3Rpb24gZyhhKXtyZXR1cm4gYS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiZcImxpbmtcIj09PWEubG9jYWxOYW1lJiZcImltcG9ydFwiPT09YS5yZWx9ZnVuY3Rpb24gaygpe3ZhciBhPXRoaXM7dGhpcy5hPXt9O3RoaXMuYj0wO3RoaXMuZj1uZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihiKXtyZXR1cm4gYS5JYShiKX0pO3RoaXMuZi5vYnNlcnZlKGRvY3VtZW50LmhlYWQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSk7dGhpcy5jKGRvY3VtZW50KX1mdW5jdGlvbiBsKGEsYixjKXt2YXIgZD1hP2EubGVuZ3RoOjAsZT1jPy0xOjE7Zm9yKGM9Yz9kLTE6MDtjPGQmJjA8PWM7Yys9ZSliKGFbY10sYyl9dmFyIG09XCJpbXBvcnRcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpLFxucT1udWxsOyExPT09XCJjdXJyZW50U2NyaXB0XCJpbiBkb2N1bWVudCYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50LFwiY3VycmVudFNjcmlwdFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcXx8KFwiY29tcGxldGVcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGU/ZG9jdW1lbnQuc2NyaXB0c1tkb2N1bWVudC5zY3JpcHRzLmxlbmd0aC0xXTpudWxsKX0sY29uZmlndXJhYmxlOiEwfSk7dmFyIEU9Lyh1cmxcXCgpKFteKV0qKShcXCkpL2csSj0vKEBpbXBvcnRbXFxzXSsoPyF1cmxcXCgpKShbXjtdKikoOykvZyxLZD0vKDxsaW5rW14+XSopKHJlbD1bJ3xcIl0/c3R5bGVzaGVldFsnfFwiXT9bXj5dKj4pL2csej17Q2E6ZnVuY3Rpb24oYSxiKXthLmhyZWYmJmEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLHouUihhLmdldEF0dHJpYnV0ZShcImhyZWZcIiksYikpO2Euc3JjJiZhLnNldEF0dHJpYnV0ZShcInNyY1wiLHouUihhLmdldEF0dHJpYnV0ZShcInNyY1wiKSxiKSk7aWYoXCJzdHlsZVwiPT09YS5sb2NhbE5hbWUpe3ZhciBjPVxuei5tYShhLnRleHRDb250ZW50LGIsRSk7YS50ZXh0Q29udGVudD16Lm1hKGMsYixKKX19LG1hOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYS5yZXBsYWNlKGMsZnVuY3Rpb24oYSxjLGQsZSl7YT1kLnJlcGxhY2UoL1tcIiddL2csXCJcIik7YiYmKGE9ei5SKGEsYikpO3JldHVybiBjK1wiJ1wiK2ErXCInXCIrZX0pfSxSOmZ1bmN0aW9uKGEsYil7aWYodm9pZCAwPT09ei5WKXt6LlY9ITE7dHJ5e3ZhciBjPW5ldyBVUkwoXCJiXCIsXCJodHRwOi8vYVwiKTtjLnBhdGhuYW1lPVwiYyUyMGRcIjt6LlY9XCJodHRwOi8vYS9jJTIwZFwiPT09Yy5ocmVmfWNhdGNoKHpmKXt9fWlmKHouVilyZXR1cm4obmV3IFVSTChhLGIpKS5ocmVmO2M9ei52YTtjfHwoYz1kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJ0ZW1wXCIpLHoudmE9YyxjLmVhPWMuY3JlYXRlRWxlbWVudChcImJhc2VcIiksYy5oZWFkLmFwcGVuZENoaWxkKGMuZWEpLGMuZGE9Yy5jcmVhdGVFbGVtZW50KFwiYVwiKSk7Yy5lYS5ocmVmPVxuYjtjLmRhLmhyZWY9YTtyZXR1cm4gYy5kYS5ocmVmfHxhfX0sTGI9e2FzeW5jOiEwLGxvYWQ6ZnVuY3Rpb24oYSxiLGMpe2lmKGEpaWYoYS5tYXRjaCgvXmRhdGE6Lykpe2E9YS5zcGxpdChcIixcIik7dmFyIGQ9YVsxXTtkPS0xPGFbMF0uaW5kZXhPZihcIjtiYXNlNjRcIik/YXRvYihkKTpkZWNvZGVVUklDb21wb25lbnQoZCk7YihkKX1lbHNle3ZhciBlPW5ldyBYTUxIdHRwUmVxdWVzdDtlLm9wZW4oXCJHRVRcIixhLExiLmFzeW5jKTtlLm9ubG9hZD1mdW5jdGlvbigpe3ZhciBhPWUucmVzcG9uc2VVUkx8fGUuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMb2NhdGlvblwiKTthJiYwPT09YS5pbmRleE9mKFwiL1wiKSYmKGE9KGxvY2F0aW9uLm9yaWdpbnx8bG9jYXRpb24ucHJvdG9jb2wrXCIvL1wiK2xvY2F0aW9uLmhvc3QpK2EpO3ZhciBkPWUucmVzcG9uc2V8fGUucmVzcG9uc2VUZXh0OzMwND09PWUuc3RhdHVzfHwwPT09ZS5zdGF0dXN8fDIwMDw9ZS5zdGF0dXMmJjMwMD5lLnN0YXR1cz9iKGQsYSk6YyhkKX07XG5lLnNlbmQoKX1lbHNlIGMoXCJlcnJvcjogaHJlZiBtdXN0IGJlIHNwZWNpZmllZFwiKX19LEthPS9UcmlkZW50Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpfHwvRWRnZVxcL1xcZC4vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2sucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczthPWEucXVlcnlTZWxlY3RvckFsbChcImxpbmtbcmVsPWltcG9ydF1cIik7bChhLGZ1bmN0aW9uKGEpe3JldHVybiBiLkYoYSl9KX07ay5wcm90b3R5cGUuRj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9YS5ocmVmO2lmKHZvaWQgMCE9PXRoaXMuYVtjXSl7dmFyIGQ9dGhpcy5hW2NdO2QmJmQuX19sb2FkZWQmJihhLmltcG9ydD1kLHRoaXMubChhKSl9ZWxzZSB0aGlzLmIrKyx0aGlzLmFbY109XCJwZW5kaW5nXCIsTGIubG9hZChjLGZ1bmN0aW9uKGEsZCl7YT1iLkphKGEsZHx8Yyk7Yi5hW2NdPWE7Yi5iLS07Yi5jKGEpO2Iua2EoKX0sZnVuY3Rpb24oKXtiLmFbY109bnVsbDtiLmItLTtiLmthKCl9KX07XG5rLnByb3RvdHlwZS5KYT1mdW5jdGlvbihhLGIpe2lmKCFhKXJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7S2EmJihhPWEucmVwbGFjZShLZCxmdW5jdGlvbihhLGIsYyl7cmV0dXJuLTE9PT1hLmluZGV4T2YoXCJ0eXBlPVwiKT9iK1wiIHR5cGU9aW1wb3J0LWRpc2FibGUgXCIrYzphfSkpO3ZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtjLmlubmVySFRNTD1hO2lmKGMuY29udGVudClhPWMuY29udGVudDtlbHNlIGZvcihhPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtjLmZpcnN0Q2hpbGQ7KWEuYXBwZW5kQ2hpbGQoYy5maXJzdENoaWxkKTtpZihjPWEucXVlcnlTZWxlY3RvcihcImJhc2VcIikpYj16LlIoYy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLGIpLGMucmVtb3ZlQXR0cmlidXRlKFwiaHJlZlwiKTtjPWEucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9aW1wb3J0XSwgbGlua1tyZWw9c3R5bGVzaGVldF1baHJlZl1bdHlwZT1pbXBvcnQtZGlzYWJsZV0sXFxuICAgIHN0eWxlOm5vdChbdHlwZV0pLCBsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmXTpub3QoW3R5cGVdKSxcXG4gICAgc2NyaXB0Om5vdChbdHlwZV0pLCBzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIl0sXFxuICAgIHNjcmlwdFt0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJdJyk7XG52YXIgZD0wO2woYyxmdW5jdGlvbihhKXtoKGEpO3ouQ2EoYSxiKTthLnNldEF0dHJpYnV0ZShcImltcG9ydC1kZXBlbmRlbmN5XCIsXCJcIik7XCJzY3JpcHRcIj09PWEubG9jYWxOYW1lJiYhYS5zcmMmJmEudGV4dENvbnRlbnQmJihhLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiZGF0YTp0ZXh0L2phdmFzY3JpcHQ7Y2hhcnNldD11dGYtOCxcIitlbmNvZGVVUklDb21wb25lbnQoYS50ZXh0Q29udGVudCsoXCJcXG4vLyMgc291cmNlVVJMPVwiK2IrKGQ/XCItXCIrZDpcIlwiKStcIi5qc1xcblwiKSkpLGEudGV4dENvbnRlbnQ9XCJcIixkKyspfSk7cmV0dXJuIGF9O2sucHJvdG90eXBlLmthPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztpZighdGhpcy5iKXt0aGlzLmYuZGlzY29ubmVjdCgpO3RoaXMuZmxhdHRlbihkb2N1bWVudCk7dmFyIGI9ITEsYz0hMSxkPWZ1bmN0aW9uKCl7YyYmYiYmKGEuYyhkb2N1bWVudCksYS5ifHwoYS5mLm9ic2VydmUoZG9jdW1lbnQuaGVhZCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KSxhLkhhKCkpKX07XG50aGlzLk9hKGZ1bmN0aW9uKCl7Yz0hMDtkKCl9KTt0aGlzLkthKGZ1bmN0aW9uKCl7Yj0hMDtkKCl9KX19O2sucHJvdG90eXBlLmZsYXR0ZW49ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczthPWEucXVlcnlTZWxlY3RvckFsbChcImxpbmtbcmVsPWltcG9ydF1cIik7bChhLGZ1bmN0aW9uKGEpe3ZhciBjPWIuYVthLmhyZWZdOyhhLmltcG9ydD1jKSYmYy5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSYmKGIuYVthLmhyZWZdPWEsYS5yZWFkeVN0YXRlPVwibG9hZGluZ1wiLGEuaW1wb3J0PWEsYi5mbGF0dGVuKGMpLGEuYXBwZW5kQ2hpbGQoYykpfSl9O2sucHJvdG90eXBlLkthPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoZSl7aWYoZTxkKXt2YXIgZj1jW2VdLGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtmLnJlbW92ZUF0dHJpYnV0ZShcImltcG9ydC1kZXBlbmRlbmN5XCIpO2woZi5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGEpe3JldHVybiBnLnNldEF0dHJpYnV0ZShhLm5hbWUsXG5hLnZhbHVlKX0pO3E9ZztmLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGcsZik7aChnLGZ1bmN0aW9uKCl7cT1udWxsO2IoZSsxKX0pfWVsc2UgYSgpfXZhciBjPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzY3JpcHRbaW1wb3J0LWRlcGVuZGVuY3ldXCIpLGQ9Yy5sZW5ndGg7YigwKX07ay5wcm90b3R5cGUuT2E9ZnVuY3Rpb24oYSl7dmFyIGI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW2ltcG9ydC1kZXBlbmRlbmN5XSxcXG4gICAgbGlua1tyZWw9c3R5bGVzaGVldF1baW1wb3J0LWRlcGVuZGVuY3ldXCIpLGQ9Yi5sZW5ndGg7aWYoZCl7dmFyIGU9S2EmJiEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWZdW3R5cGU9aW1wb3J0LWRpc2FibGVdXCIpO2woYixmdW5jdGlvbihiKXtoKGIsZnVuY3Rpb24oKXtiLnJlbW92ZUF0dHJpYnV0ZShcImltcG9ydC1kZXBlbmRlbmN5XCIpOzA9PT0tLWQmJmEoKX0pO2lmKGUmJmIucGFyZW50Tm9kZSE9PVxuZG9jdW1lbnQuaGVhZCl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChiLmxvY2FsTmFtZSk7Zi5fX2FwcGxpZWRFbGVtZW50PWI7Zi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJpbXBvcnQtcGxhY2Vob2xkZXJcIik7Yi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmLGIubmV4dFNpYmxpbmcpO2ZvcihmPWMoYik7ZiYmYyhmKTspZj1jKGYpO2YucGFyZW50Tm9kZSE9PWRvY3VtZW50LmhlYWQmJihmPW51bGwpO2RvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGIsZik7Yi5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpfX0pfWVsc2UgYSgpfTtrLnByb3RvdHlwZS5IYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMsYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XVwiKTtsKGIsZnVuY3Rpb24oYil7cmV0dXJuIGEubChiKX0sITApfTtrLnByb3RvdHlwZS5sPWZ1bmN0aW9uKGEpe2EuX19sb2FkZWR8fChhLl9fbG9hZGVkPSEwLGEuaW1wb3J0JiYoYS5pbXBvcnQucmVhZHlTdGF0ZT1cblwiY29tcGxldGVcIiksYS5kaXNwYXRjaEV2ZW50KGIoYS5pbXBvcnQ/XCJsb2FkXCI6XCJlcnJvclwiLHtidWJibGVzOiExLGNhbmNlbGFibGU6ITEsZGV0YWlsOnZvaWQgMH0pKSl9O2sucHJvdG90eXBlLklhPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7bChhLGZ1bmN0aW9uKGEpe3JldHVybiBsKGEuYWRkZWROb2RlcyxmdW5jdGlvbihhKXthJiZhLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJihnKGEpP2IuRihhKTpiLmMoYSkpfSl9KX07aWYobSl7dmFyIG1hPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2wobWEsZnVuY3Rpb24oYSl7YS5pbXBvcnQmJlwibG9hZGluZ1wiPT09YS5pbXBvcnQucmVhZHlTdGF0ZXx8KGEuX19sb2FkZWQ9ITApfSk7bWE9ZnVuY3Rpb24oYSl7YT1hLnRhcmdldDtnKGEpJiYoYS5fX2xvYWRlZD0hMCl9O2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsbWEsITApO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLFxubWEsITApfWVsc2V7dmFyIGNhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTm9kZS5wcm90b3R5cGUsXCJiYXNlVVJJXCIpO09iamVjdC5kZWZpbmVQcm9wZXJ0eSgoIWNhfHxjYS5jb25maWd1cmFibGU/Tm9kZTpFbGVtZW50KS5wcm90b3R5cGUsXCJiYXNlVVJJXCIse2dldDpmdW5jdGlvbigpe3ZhciBhPWcodGhpcyk/dGhpczpjKHRoaXMpO3JldHVybiBhP2EuaHJlZjpjYSYmY2EuZ2V0P2NhLmdldC5jYWxsKHRoaXMpOihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKXx8d2luZG93LmxvY2F0aW9uKS5ocmVmfSxjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMH0pO2UoZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGt9KX1mKGZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoYihcIkhUTUxJbXBvcnRzTG9hZGVkXCIse2NhbmNlbGFibGU6ITAsYnViYmxlczohMCxkZXRhaWw6dm9pZCAwfSkpfSk7YS51c2VOYXRpdmU9bTthLndoZW5SZWFkeT1mO2EuaW1wb3J0Rm9yRWxlbWVudD1cbmN9KSh3aW5kb3cuSFRNTEltcG9ydHM9d2luZG93LkhUTUxJbXBvcnRzfHx7fSk7LypcblxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbnZhciByPXdpbmRvdy5TaGFkeURPTXx8e307ci5FYT0hKCFFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3d8fCFOb2RlLnByb3RvdHlwZS5nZXRSb290Tm9kZSk7dmFyIGthPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTm9kZS5wcm90b3R5cGUsXCJmaXJzdENoaWxkXCIpO3IuRz0hIShrYSYma2EuY29uZmlndXJhYmxlJiZrYS5nZXQpO3IubGE9ci5mb3JjZXx8IXIuRWE7ZnVuY3Rpb24gdChhKXtyZXR1cm4gYS5fX3NoYWR5JiZ2b2lkIDAhPT1hLl9fc2hhZHkuZmlyc3RDaGlsZH1mdW5jdGlvbiB1KGEpe3JldHVyblwiU2hhZHlSb290XCI9PT1hLnNhfWZ1bmN0aW9uIGxhKGEpe2E9YS5nZXRSb290Tm9kZSgpO2lmKHUoYSkpcmV0dXJuIGF9dmFyIHY9RWxlbWVudC5wcm90b3R5cGUsbmE9di5tYXRjaGVzfHx2Lm1hdGNoZXNTZWxlY3Rvcnx8di5tb3pNYXRjaGVzU2VsZWN0b3J8fHYubXNNYXRjaGVzU2VsZWN0b3J8fHYub01hdGNoZXNTZWxlY3Rvcnx8di53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5mdW5jdGlvbiBvYShhLGIpe2lmKGEmJmIpZm9yKHZhciBjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGIpLGQ9MCxlO2Q8Yy5sZW5ndGgmJihlPWNbZF0pO2QrKyl7dmFyIGY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiLGUpO2YmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGUsZil9fWZ1bmN0aW9uIHBhKGEsYil7Zm9yKHZhciBjPVtdLGQ9MTtkPGFyZ3VtZW50cy5sZW5ndGg7KytkKWNbZC0xXT1hcmd1bWVudHNbZF07Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKylvYShhLGNbZF0pO3JldHVybiBhfWZ1bmN0aW9uIHFhKGEsYil7Zm9yKHZhciBjIGluIGIpYVtjXT1iW2NdfXZhciByYT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSxzYT0wLHRhPVtdOyhuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbigpe2Zvcig7dGEubGVuZ3RoOyl0cnl7dGEuc2hpZnQoKSgpfWNhdGNoKGEpe3Rocm93IHJhLnRleHRDb250ZW50PXNhKyssYTt9fSkpLm9ic2VydmUocmEse2NoYXJhY3RlckRhdGE6ITB9KTtcbmZ1bmN0aW9uIHVhKGEpe3RhLnB1c2goYSk7cmEudGV4dENvbnRlbnQ9c2ErK312YXIgdmE9ISFkb2N1bWVudC5jb250YWlucztmdW5jdGlvbiB3YShhLGIpe2Zvcig7Yjspe2lmKGI9PWEpcmV0dXJuITA7Yj1iLnBhcmVudE5vZGV9cmV0dXJuITF9O3ZhciB4YT1bXSx5YTtmdW5jdGlvbiB6YShhKXt5YXx8KHlhPSEwLHVhKEFhKSk7eGEucHVzaChhKX1mdW5jdGlvbiBBYSgpe3lhPSExO2Zvcih2YXIgYT0hIXhhLmxlbmd0aDt4YS5sZW5ndGg7KXhhLnNoaWZ0KCkoKTtyZXR1cm4gYX1BYS5saXN0PXhhO2Z1bmN0aW9uIEJhKCl7dGhpcy5hPSExO3RoaXMuYWRkZWROb2Rlcz1bXTt0aGlzLnJlbW92ZWROb2Rlcz1bXTt0aGlzLk49bmV3IFNldH1mdW5jdGlvbiBDYShhKXthLmF8fChhLmE9ITAsdWEoZnVuY3Rpb24oKXtEYShhKX0pKX1mdW5jdGlvbiBEYShhKXtpZihhLmEpe2EuYT0hMTt2YXIgYj1hLnRha2VSZWNvcmRzKCk7Yi5sZW5ndGgmJmEuTi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EoYil9KX19QmEucHJvdG90eXBlLnRha2VSZWNvcmRzPWZ1bmN0aW9uKCl7aWYodGhpcy5hZGRlZE5vZGVzLmxlbmd0aHx8dGhpcy5yZW1vdmVkTm9kZXMubGVuZ3RoKXt2YXIgYT1be2FkZGVkTm9kZXM6dGhpcy5hZGRlZE5vZGVzLHJlbW92ZWROb2Rlczp0aGlzLnJlbW92ZWROb2Rlc31dO3RoaXMuYWRkZWROb2Rlcz1bXTt0aGlzLnJlbW92ZWROb2Rlcz1bXTtyZXR1cm4gYX1yZXR1cm5bXX07XG5mdW5jdGlvbiBFYShhLGIpe2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O2EuX19zaGFkeS5IfHwoYS5fX3NoYWR5Lkg9bmV3IEJhKTthLl9fc2hhZHkuSC5OLmFkZChiKTt2YXIgYz1hLl9fc2hhZHkuSDtyZXR1cm57d2E6Yix3OmMseWE6YSx0YWtlUmVjb3JkczpmdW5jdGlvbigpe3JldHVybiBjLnRha2VSZWNvcmRzKCl9fX1mdW5jdGlvbiBGYShhKXt2YXIgYj1hJiZhLnc7YiYmKGIuTi5kZWxldGUoYS53YSksYi5OLnNpemV8fChhLnlhLl9fc2hhZHkuSD1udWxsKSl9XG5mdW5jdGlvbiBHYShhLGIpe3ZhciBjPWIuZ2V0Um9vdE5vZGUoKTtyZXR1cm4gYS5tYXAoZnVuY3Rpb24oYSl7dmFyIGI9Yz09PWEudGFyZ2V0LmdldFJvb3ROb2RlKCk7aWYoYiYmYS5hZGRlZE5vZGVzKXtpZihiPUFycmF5LmZyb20oYS5hZGRlZE5vZGVzKS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGM9PT1hLmdldFJvb3ROb2RlKCl9KSxiLmxlbmd0aClyZXR1cm4gYT1PYmplY3QuY3JlYXRlKGEpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiYWRkZWROb2Rlc1wiLHt2YWx1ZTpiLGNvbmZpZ3VyYWJsZTohMH0pLGF9ZWxzZSBpZihiKXJldHVybiBhfSkuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBhfSl9O3ZhciB3PXt9LEhhPUVsZW1lbnQucHJvdG90eXBlLmluc2VydEJlZm9yZSxJYT1FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZCxKYT1FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUsTGE9RWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlLE1hPUVsZW1lbnQucHJvdG90eXBlLmNsb25lTm9kZSxOYT1Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSxPYT1FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLFBhPUVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIsUWE9V2luZG93LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLFJhPVdpbmRvdy5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcixTYT1FbGVtZW50LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50LFRhPUVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3IsVWE9RWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbCxWYT1Ob2RlLnByb3RvdHlwZS5jb250YWluc3x8XG5IVE1MRWxlbWVudC5wcm90b3R5cGUuY29udGFpbnM7dy5hcHBlbmRDaGlsZD1FbGVtZW50LnByb3RvdHlwZS5hcHBlbmRDaGlsZDt3Lmluc2VydEJlZm9yZT1IYTt3LnJlbW92ZUNoaWxkPUlhO3cuc2V0QXR0cmlidXRlPUphO3cucmVtb3ZlQXR0cmlidXRlPUxhO3cuY2xvbmVOb2RlPU1hO3cuaW1wb3J0Tm9kZT1OYTt3LmFkZEV2ZW50TGlzdGVuZXI9T2E7dy5yZW1vdmVFdmVudExpc3RlbmVyPVBhO3cuVGE9UWE7dy5VYT1SYTt3LmRpc3BhdGNoRXZlbnQ9U2E7dy5xdWVyeVNlbGVjdG9yPVRhO3cucXVlcnlTZWxlY3RvckFsbD1VYTt3LmNvbnRhaW5zPVZhO3ZhciBXYT0vWyZcXHUwMEEwXCJdL2csWGE9L1smXFx1MDBBMDw+XS9nO2Z1bmN0aW9uIFlhKGEpe3N3aXRjaChhKXtjYXNlIFwiJlwiOnJldHVyblwiJmFtcDtcIjtjYXNlIFwiPFwiOnJldHVyblwiJmx0O1wiO2Nhc2UgXCI+XCI6cmV0dXJuXCImZ3Q7XCI7Y2FzZSAnXCInOnJldHVyblwiJnF1b3Q7XCI7Y2FzZSBcIlxcdTAwYTBcIjpyZXR1cm5cIiZuYnNwO1wifX1mdW5jdGlvbiBaYShhKXtmb3IodmFyIGI9e30sYz0wO2M8YS5sZW5ndGg7YysrKWJbYVtjXV09ITA7cmV0dXJuIGJ9dmFyICRhPVphKFwiYXJlYSBiYXNlIGJyIGNvbCBjb21tYW5kIGVtYmVkIGhyIGltZyBpbnB1dCBrZXlnZW4gbGluayBtZXRhIHBhcmFtIHNvdXJjZSB0cmFjayB3YnJcIi5zcGxpdChcIiBcIikpLGFiPVphKFwic3R5bGUgc2NyaXB0IHhtcCBpZnJhbWUgbm9lbWJlZCBub2ZyYW1lcyBwbGFpbnRleHQgbm9zY3JpcHRcIi5zcGxpdChcIiBcIikpO1xuZnVuY3Rpb24gYmIoYSxiKXtcInRlbXBsYXRlXCI9PT1hLmxvY2FsTmFtZSYmKGE9YS5jb250ZW50KTtmb3IodmFyIGM9XCJcIixkPWI/YihhKTphLmNoaWxkTm9kZXMsZT0wLGY9ZC5sZW5ndGgsaDtlPGYmJihoPWRbZV0pO2UrKyl7YTp7dmFyIGc9aDt2YXIgaz1hO3ZhciBsPWI7c3dpdGNoKGcubm9kZVR5cGUpe2Nhc2UgTm9kZS5FTEVNRU5UX05PREU6Zm9yKHZhciBtPWcubG9jYWxOYW1lLHE9XCI8XCIrbSxFPWcuYXR0cmlidXRlcyxKPTA7az1FW0pdO0orKylxKz1cIiBcIitrLm5hbWUrJz1cIicray52YWx1ZS5yZXBsYWNlKFdhLFlhKSsnXCInO3ErPVwiPlwiO2c9JGFbbV0/cTpxK2JiKGcsbCkrXCI8L1wiK20rXCI+XCI7YnJlYWsgYTtjYXNlIE5vZGUuVEVYVF9OT0RFOmc9Zy5kYXRhO2c9ayYmYWJbay5sb2NhbE5hbWVdP2c6Zy5yZXBsYWNlKFhhLFlhKTticmVhayBhO2Nhc2UgTm9kZS5DT01NRU5UX05PREU6Zz1cIlxceDNjIS0tXCIrZy5kYXRhK1wiLS1cXHgzZVwiO2JyZWFrIGE7ZGVmYXVsdDp0aHJvdyB3aW5kb3cuY29uc29sZS5lcnJvcihnKSxcbkVycm9yKFwibm90IGltcGxlbWVudGVkXCIpO319Yys9Z31yZXR1cm4gY307dmFyIHg9e30seT1kb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGRvY3VtZW50LE5vZGVGaWx0ZXIuU0hPV19BTEwsbnVsbCwhMSksQT1kb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGRvY3VtZW50LE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULG51bGwsITEpO2Z1bmN0aW9uIGNiKGEpe3ZhciBiPVtdO3kuY3VycmVudE5vZGU9YTtmb3IoYT15LmZpcnN0Q2hpbGQoKTthOyliLnB1c2goYSksYT15Lm5leHRTaWJsaW5nKCk7cmV0dXJuIGJ9eC5wYXJlbnROb2RlPWZ1bmN0aW9uKGEpe3kuY3VycmVudE5vZGU9YTtyZXR1cm4geS5wYXJlbnROb2RlKCl9O3guZmlyc3RDaGlsZD1mdW5jdGlvbihhKXt5LmN1cnJlbnROb2RlPWE7cmV0dXJuIHkuZmlyc3RDaGlsZCgpfTt4Lmxhc3RDaGlsZD1mdW5jdGlvbihhKXt5LmN1cnJlbnROb2RlPWE7cmV0dXJuIHkubGFzdENoaWxkKCl9O3gucHJldmlvdXNTaWJsaW5nPWZ1bmN0aW9uKGEpe3kuY3VycmVudE5vZGU9YTtyZXR1cm4geS5wcmV2aW91c1NpYmxpbmcoKX07XG54Lm5leHRTaWJsaW5nPWZ1bmN0aW9uKGEpe3kuY3VycmVudE5vZGU9YTtyZXR1cm4geS5uZXh0U2libGluZygpfTt4LmNoaWxkTm9kZXM9Y2I7eC5wYXJlbnRFbGVtZW50PWZ1bmN0aW9uKGEpe0EuY3VycmVudE5vZGU9YTtyZXR1cm4gQS5wYXJlbnROb2RlKCl9O3guZmlyc3RFbGVtZW50Q2hpbGQ9ZnVuY3Rpb24oYSl7QS5jdXJyZW50Tm9kZT1hO3JldHVybiBBLmZpcnN0Q2hpbGQoKX07eC5sYXN0RWxlbWVudENoaWxkPWZ1bmN0aW9uKGEpe0EuY3VycmVudE5vZGU9YTtyZXR1cm4gQS5sYXN0Q2hpbGQoKX07eC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nPWZ1bmN0aW9uKGEpe0EuY3VycmVudE5vZGU9YTtyZXR1cm4gQS5wcmV2aW91c1NpYmxpbmcoKX07eC5uZXh0RWxlbWVudFNpYmxpbmc9ZnVuY3Rpb24oYSl7QS5jdXJyZW50Tm9kZT1hO3JldHVybiBBLm5leHRTaWJsaW5nKCl9O1xueC5jaGlsZHJlbj1mdW5jdGlvbihhKXt2YXIgYj1bXTtBLmN1cnJlbnROb2RlPWE7Zm9yKGE9QS5maXJzdENoaWxkKCk7YTspYi5wdXNoKGEpLGE9QS5uZXh0U2libGluZygpO3JldHVybiBifTt4LmlubmVySFRNTD1mdW5jdGlvbihhKXtyZXR1cm4gYmIoYSxmdW5jdGlvbihhKXtyZXR1cm4gY2IoYSl9KX07eC50ZXh0Q29udGVudD1mdW5jdGlvbihhKXtzd2l0Y2goYS5ub2RlVHlwZSl7Y2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpjYXNlIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERTphPWRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoYSxOb2RlRmlsdGVyLlNIT1dfVEVYVCxudWxsLCExKTtmb3IodmFyIGI9XCJcIixjO2M9YS5uZXh0Tm9kZSgpOyliKz1jLm5vZGVWYWx1ZTtyZXR1cm4gYjtkZWZhdWx0OnJldHVybiBhLm5vZGVWYWx1ZX19O3ZhciBkYj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpfHxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSxlYj1kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJpbmVydFwiKS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGZiPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRG9jdW1lbnQucHJvdG90eXBlLFwiYWN0aXZlRWxlbWVudFwiKSxnYj17cGFyZW50RWxlbWVudDp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkucGFyZW50Tm9kZTthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREUmJihhPW51bGwpO3JldHVybiB2b2lkIDAhPT1hP2E6eC5wYXJlbnRFbGVtZW50KHRoaXMpfSxjb25maWd1cmFibGU6ITB9LHBhcmVudE5vZGU6e2dldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmXG50aGlzLl9fc2hhZHkucGFyZW50Tm9kZTtyZXR1cm4gdm9pZCAwIT09YT9hOngucGFyZW50Tm9kZSh0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxuZXh0U2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkubmV4dFNpYmxpbmc7cmV0dXJuIHZvaWQgMCE9PWE/YTp4Lm5leHRTaWJsaW5nKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LHByZXZpb3VzU2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nO3JldHVybiB2b2lkIDAhPT1hP2E6eC5wcmV2aW91c1NpYmxpbmcodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sY2xhc3NOYW1lOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn0sc2V0OmZ1bmN0aW9uKGEpe3RoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX0sY29uZmlndXJhYmxlOiEwfSxuZXh0RWxlbWVudFNpYmxpbmc6e2dldDpmdW5jdGlvbigpe2lmKHRoaXMuX19zaGFkeSYmXG52b2lkIDAhPT10aGlzLl9fc2hhZHkubmV4dFNpYmxpbmcpe2Zvcih2YXIgYT10aGlzLm5leHRTaWJsaW5nO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLm5leHRTaWJsaW5nO3JldHVybiBhfXJldHVybiB4Lm5leHRFbGVtZW50U2libGluZyh0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxwcmV2aW91c0VsZW1lbnRTaWJsaW5nOntnZXQ6ZnVuY3Rpb24oKXtpZih0aGlzLl9fc2hhZHkmJnZvaWQgMCE9PXRoaXMuX19zaGFkeS5wcmV2aW91c1NpYmxpbmcpe2Zvcih2YXIgYT10aGlzLnByZXZpb3VzU2libGluZzthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5wcmV2aW91c1NpYmxpbmc7cmV0dXJuIGF9cmV0dXJuIHgucHJldmlvdXNFbGVtZW50U2libGluZyh0aGlzKX0sY29uZmlndXJhYmxlOiEwfX0saGI9e2NoaWxkTm9kZXM6e2dldDpmdW5jdGlvbigpe2lmKHQodGhpcykpe2lmKCF0aGlzLl9fc2hhZHkuY2hpbGROb2Rlcyl7dGhpcy5fX3NoYWR5LmNoaWxkTm9kZXM9XG5bXTtmb3IodmFyIGE9dGhpcy5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKXRoaXMuX19zaGFkeS5jaGlsZE5vZGVzLnB1c2goYSl9dmFyIGI9dGhpcy5fX3NoYWR5LmNoaWxkTm9kZXN9ZWxzZSBiPXguY2hpbGROb2Rlcyh0aGlzKTtiLml0ZW09ZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19O3JldHVybiBifSxjb25maWd1cmFibGU6ITB9LGNoaWxkRWxlbWVudENvdW50OntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGh9LGNvbmZpZ3VyYWJsZTohMH0sZmlyc3RDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkuZmlyc3RDaGlsZDtyZXR1cm4gdm9pZCAwIT09YT9hOnguZmlyc3RDaGlsZCh0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxsYXN0Q2hpbGQ6e2dldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5Lmxhc3RDaGlsZDtyZXR1cm4gdm9pZCAwIT09YT9hOngubGFzdENoaWxkKHRoaXMpfSxcbmNvbmZpZ3VyYWJsZTohMH0sdGV4dENvbnRlbnQ6e2dldDpmdW5jdGlvbigpe2lmKHQodGhpcykpe2Zvcih2YXIgYT1bXSxiPTAsYz10aGlzLmNoaWxkTm9kZXMsZDtkPWNbYl07YisrKWQubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERSYmYS5wdXNoKGQudGV4dENvbnRlbnQpO3JldHVybiBhLmpvaW4oXCJcIil9cmV0dXJuIHgudGV4dENvbnRlbnQodGhpcyl9LHNldDpmdW5jdGlvbihhKXtzd2l0Y2godGhpcy5ub2RlVHlwZSl7Y2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpjYXNlIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpmb3IoO3RoaXMuZmlyc3RDaGlsZDspdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZpcnN0Q2hpbGQpOygwPGEubGVuZ3RofHx0aGlzLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpJiZ0aGlzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTticmVhaztkZWZhdWx0OnRoaXMubm9kZVZhbHVlPWF9fSxjb25maWd1cmFibGU6ITB9LGZpcnN0RWxlbWVudENoaWxkOntnZXQ6ZnVuY3Rpb24oKXtpZih0aGlzLl9fc2hhZHkmJlxudm9pZCAwIT09dGhpcy5fX3NoYWR5LmZpcnN0Q2hpbGQpe2Zvcih2YXIgYT10aGlzLmZpcnN0Q2hpbGQ7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFOylhPWEubmV4dFNpYmxpbmc7cmV0dXJuIGF9cmV0dXJuIHguZmlyc3RFbGVtZW50Q2hpbGQodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sbGFzdEVsZW1lbnRDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7aWYodGhpcy5fX3NoYWR5JiZ2b2lkIDAhPT10aGlzLl9fc2hhZHkubGFzdENoaWxkKXtmb3IodmFyIGE9dGhpcy5sYXN0Q2hpbGQ7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFOylhPWEucHJldmlvdXNTaWJsaW5nO3JldHVybiBhfXJldHVybiB4Lmxhc3RFbGVtZW50Q2hpbGQodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sY2hpbGRyZW46e2dldDpmdW5jdGlvbigpe3ZhciBhO3QodGhpcyk/YT1BcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwodGhpcy5jaGlsZE5vZGVzLGZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVUeXBlPT09XG5Ob2RlLkVMRU1FTlRfTk9ERX0pOmE9eC5jaGlsZHJlbih0aGlzKTthLml0ZW09ZnVuY3Rpb24oYil7cmV0dXJuIGFbYl19O3JldHVybiBhfSxjb25maWd1cmFibGU6ITB9LGlubmVySFRNTDp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9XCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWU/dGhpcy5jb250ZW50OnRoaXM7cmV0dXJuIHQodGhpcyk/YmIoYSk6eC5pbm5lckhUTUwoYSl9LHNldDpmdW5jdGlvbihhKXtmb3IodmFyIGI9XCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWU/dGhpcy5jb250ZW50OnRoaXM7Yi5maXJzdENoaWxkOyliLnJlbW92ZUNoaWxkKGIuZmlyc3RDaGlsZCk7Zm9yKGRiJiZkYi5zZXQ/ZGIuc2V0LmNhbGwoZWIsYSk6ZWIuaW5uZXJIVE1MPWE7ZWIuZmlyc3RDaGlsZDspYi5hcHBlbmRDaGlsZChlYi5maXJzdENoaWxkKX0sY29uZmlndXJhYmxlOiEwfX0saWI9e3NoYWRvd1Jvb3Q6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5NYXx8XG5udWxsfSxjb25maWd1cmFibGU6ITB9fSxqYj17YWN0aXZlRWxlbWVudDp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9ZmImJmZiLmdldD9mYi5nZXQuY2FsbChkb2N1bWVudCk6ci5HP3ZvaWQgMDpkb2N1bWVudC5hY3RpdmVFbGVtZW50O2lmKGEmJmEubm9kZVR5cGUpe3ZhciBiPSEhdSh0aGlzKTtpZih0aGlzPT09ZG9jdW1lbnR8fGImJnRoaXMuaG9zdCE9PWEmJncuY29udGFpbnMuY2FsbCh0aGlzLmhvc3QsYSkpe2ZvcihiPWxhKGEpO2ImJmIhPT10aGlzOylhPWIuaG9zdCxiPWxhKGEpO2E9dGhpcz09PWRvY3VtZW50P2I/bnVsbDphOmI9PT10aGlzP2E6bnVsbH1lbHNlIGE9bnVsbH1lbHNlIGE9bnVsbDtyZXR1cm4gYX0sc2V0OmZ1bmN0aW9uKCl7fSxjb25maWd1cmFibGU6ITB9fTtcbmZ1bmN0aW9uIEIoYSxiLGMpe2Zvcih2YXIgZCBpbiBiKXt2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsZCk7ZSYmZS5jb25maWd1cmFibGV8fCFlJiZjP09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGQsYltkXSk6YyYmY29uc29sZS53YXJuKFwiQ291bGQgbm90IGRlZmluZVwiLGQsXCJvblwiLGEpfX1mdW5jdGlvbiBDKGEpe0IoYSxnYik7QihhLGhiKTtCKGEsamIpfXZhciBrYj1yLkc/ZnVuY3Rpb24oKXt9OmZ1bmN0aW9uKGEpe2EuX19zaGFkeSYmYS5fX3NoYWR5LnRhfHwoYS5fX3NoYWR5PWEuX19zaGFkeXx8e30sYS5fX3NoYWR5LnRhPSEwLEIoYSxnYiwhMCkpfSxsYj1yLkc/ZnVuY3Rpb24oKXt9OmZ1bmN0aW9uKGEpe2EuX19zaGFkeSYmYS5fX3NoYWR5LnJhfHwoYS5fX3NoYWR5PWEuX19zaGFkeXx8e30sYS5fX3NoYWR5LnJhPSEwLEIoYSxoYiwhMCksQihhLGliLCEwKSl9O2Z1bmN0aW9uIG1iKGEsYixjKXtrYihhKTtjPWN8fG51bGw7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307Yi5fX3NoYWR5PWIuX19zaGFkeXx8e307YyYmKGMuX19zaGFkeT1jLl9fc2hhZHl8fHt9KTthLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWM/Yy5fX3NoYWR5LnByZXZpb3VzU2libGluZzpiLmxhc3RDaGlsZDt2YXIgZD1hLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nO2QmJmQuX19zaGFkeSYmKGQuX19zaGFkeS5uZXh0U2libGluZz1hKTsoZD1hLl9fc2hhZHkubmV4dFNpYmxpbmc9YykmJmQuX19zaGFkeSYmKGQuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc9YSk7YS5fX3NoYWR5LnBhcmVudE5vZGU9YjtjP2M9PT1iLl9fc2hhZHkuZmlyc3RDaGlsZCYmKGIuX19zaGFkeS5maXJzdENoaWxkPWEpOihiLl9fc2hhZHkubGFzdENoaWxkPWEsYi5fX3NoYWR5LmZpcnN0Q2hpbGR8fChiLl9fc2hhZHkuZmlyc3RDaGlsZD1hKSk7Yi5fX3NoYWR5LmNoaWxkTm9kZXM9bnVsbH1cbmZ1bmN0aW9uIG5iKGEpe2lmKCFhLl9fc2hhZHl8fHZvaWQgMD09PWEuX19zaGFkeS5maXJzdENoaWxkKXthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTthLl9fc2hhZHkuZmlyc3RDaGlsZD14LmZpcnN0Q2hpbGQoYSk7YS5fX3NoYWR5Lmxhc3RDaGlsZD14Lmxhc3RDaGlsZChhKTtsYihhKTtmb3IodmFyIGI9YS5fX3NoYWR5LmNoaWxkTm9kZXM9eC5jaGlsZE5vZGVzKGEpLGM9MCxkO2M8Yi5sZW5ndGgmJihkPWJbY10pO2MrKylkLl9fc2hhZHk9ZC5fX3NoYWR5fHx7fSxkLl9fc2hhZHkucGFyZW50Tm9kZT1hLGQuX19zaGFkeS5uZXh0U2libGluZz1iW2MrMV18fG51bGwsZC5fX3NoYWR5LnByZXZpb3VzU2libGluZz1iW2MtMV18fG51bGwsa2IoZCl9fTtmdW5jdGlvbiBvYihhLGIsYyl7aWYoYj09PWEpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnYXBwZW5kQ2hpbGQnIG9uICdOb2RlJzogVGhlIG5ldyBjaGlsZCBlbGVtZW50IGNvbnRhaW5zIHRoZSBwYXJlbnQuXCIpO2lmKGMpe3ZhciBkPWMuX19zaGFkeSYmYy5fX3NoYWR5LnBhcmVudE5vZGU7aWYodm9pZCAwIT09ZCYmZCE9PWF8fHZvaWQgMD09PWQmJngucGFyZW50Tm9kZShjKSE9PWEpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnaW5zZXJ0QmVmb3JlJyBvbiAnTm9kZSc6IFRoZSBub2RlIGJlZm9yZSB3aGljaCB0aGUgbmV3IG5vZGUgaXMgdG8gYmUgaW5zZXJ0ZWQgaXMgbm90IGEgY2hpbGQgb2YgdGhpcyBub2RlLlwiKTt9aWYoYz09PWIpcmV0dXJuIGI7Yi5wYXJlbnROb2RlJiZwYihiLnBhcmVudE5vZGUsYik7ZD1sYShhKTt2YXIgZTtpZihlPWQpYTp7aWYoIWIuX19ub0luc2VydGlvblBvaW50KXt2YXIgZjtcInNsb3RcIj09PWIubG9jYWxOYW1lP2Y9W2JdOlxuYi5xdWVyeVNlbGVjdG9yQWxsJiYoZj1iLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzbG90XCIpKTtpZihmJiZmLmxlbmd0aCl7ZT1mO2JyZWFrIGF9fWU9dm9pZCAwfShmPWUpJiZkLkMucHVzaC5hcHBseShkLkMsW10uY29uY2F0KGYgaW5zdGFuY2VvZiBBcnJheT9mOmphKGlhKGYpKSkpO2QmJihcInNsb3RcIj09PWEubG9jYWxOYW1lfHxmKSYmRChkKTtpZih0KGEpKXtkPWM7bGIoYSk7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307dm9pZCAwIT09YS5fX3NoYWR5LmZpcnN0Q2hpbGQmJihhLl9fc2hhZHkuY2hpbGROb2Rlcz1udWxsKTtpZihiLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKXtmPWIuY2hpbGROb2Rlcztmb3IoZT0wO2U8Zi5sZW5ndGg7ZSsrKW1iKGZbZV0sYSxkKTtiLl9fc2hhZHk9Yi5fX3NoYWR5fHx7fTtkPXZvaWQgMCE9PWIuX19zaGFkeS5maXJzdENoaWxkP251bGw6dm9pZCAwO2IuX19zaGFkeS5maXJzdENoaWxkPWIuX19zaGFkeS5sYXN0Q2hpbGQ9ZDtcbmIuX19zaGFkeS5jaGlsZE5vZGVzPWR9ZWxzZSBtYihiLGEsZCk7aWYocWIoYSkpe0QoYS5fX3NoYWR5LnJvb3QpO3ZhciBoPSEwfWVsc2UgYS5fX3NoYWR5LnJvb3QmJihoPSEwKX1ofHwoaD11KGEpP2EuaG9zdDphLGM/KGM9cmIoYyksdy5pbnNlcnRCZWZvcmUuY2FsbChoLGIsYykpOncuYXBwZW5kQ2hpbGQuY2FsbChoLGIpKTtzYihhLGIpO3JldHVybiBifVxuZnVuY3Rpb24gcGIoYSxiKXtpZihiLnBhcmVudE5vZGUhPT1hKXRocm93IEVycm9yKFwiVGhlIG5vZGUgdG8gYmUgcmVtb3ZlZCBpcyBub3QgYSBjaGlsZCBvZiB0aGlzIG5vZGU6IFwiK2IpO3ZhciBjPWxhKGIpO2lmKHQoYSkpe2IuX19zaGFkeT1iLl9fc2hhZHl8fHt9O2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O2I9PT1hLl9fc2hhZHkuZmlyc3RDaGlsZCYmKGEuX19zaGFkeS5maXJzdENoaWxkPWIuX19zaGFkeS5uZXh0U2libGluZyk7Yj09PWEuX19zaGFkeS5sYXN0Q2hpbGQmJihhLl9fc2hhZHkubGFzdENoaWxkPWIuX19zaGFkeS5wcmV2aW91c1NpYmxpbmcpO3ZhciBkPWIuX19zaGFkeS5wcmV2aW91c1NpYmxpbmcsZT1iLl9fc2hhZHkubmV4dFNpYmxpbmc7ZCYmKGQuX19zaGFkeT1kLl9fc2hhZHl8fHt9LGQuX19zaGFkeS5uZXh0U2libGluZz1lKTtlJiYoZS5fX3NoYWR5PWUuX19zaGFkeXx8e30sZS5fX3NoYWR5LnByZXZpb3VzU2libGluZz1kKTtiLl9fc2hhZHkucGFyZW50Tm9kZT1cbmIuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc9Yi5fX3NoYWR5Lm5leHRTaWJsaW5nPXZvaWQgMDt2b2lkIDAhPT1hLl9fc2hhZHkuY2hpbGROb2RlcyYmKGEuX19zaGFkeS5jaGlsZE5vZGVzPW51bGwpO2lmKHFiKGEpKXtEKGEuX19zaGFkeS5yb290KTt2YXIgZj0hMH19dGIoYik7aWYoYyl7KGQ9YSYmXCJzbG90XCI9PT1hLmxvY2FsTmFtZSkmJihmPSEwKTt1YihjKTtlPWMuaTtmb3IodmFyIGggaW4gZSlmb3IodmFyIGc9ZVtoXSxrPTA7azxnLmxlbmd0aDtrKyspe3ZhciBsPWdba107aWYod2EoYixsKSl7Zy5zcGxpY2UoaywxKTt2YXIgbT1jLm0uaW5kZXhPZihsKTswPD1tJiZjLm0uc3BsaWNlKG0sMSk7ay0tO2lmKG09bC5fX3NoYWR5LkQpZm9yKGw9MDtsPG0ubGVuZ3RoO2wrKyl7dmFyIHE9bVtsXSxFPXgucGFyZW50Tm9kZShxKTtFJiZ3LnJlbW92ZUNoaWxkLmNhbGwoRSxxKX1tPSEwfX0obXx8ZCkmJkQoYyl9Znx8KGY9dShhKT9hLmhvc3Q6YSwoIWEuX19zaGFkeS5yb290JiZcInNsb3RcIiE9PVxuYi5sb2NhbE5hbWV8fGY9PT14LnBhcmVudE5vZGUoYikpJiZ3LnJlbW92ZUNoaWxkLmNhbGwoZixiKSk7c2IoYSxudWxsLGIpO3JldHVybiBifWZ1bmN0aW9uIHRiKGEpe2lmKGEuX19zaGFkeSYmdm9pZCAwIT09YS5fX3NoYWR5LmNhKWZvcih2YXIgYj1hLmNoaWxkTm9kZXMsYz0wLGQ9Yi5sZW5ndGgsZTtjPGQmJihlPWJbY10pO2MrKyl0YihlKTthLl9fc2hhZHkmJihhLl9fc2hhZHkuY2E9dm9pZCAwKX1mdW5jdGlvbiByYihhKXt2YXIgYj1hO2EmJlwic2xvdFwiPT09YS5sb2NhbE5hbWUmJihiPShiPWEuX19zaGFkeSYmYS5fX3NoYWR5LkQpJiZiLmxlbmd0aD9iWzBdOnJiKGEubmV4dFNpYmxpbmcpKTtyZXR1cm4gYn1mdW5jdGlvbiBxYihhKXtyZXR1cm4oYT1hJiZhLl9fc2hhZHkmJmEuX19zaGFkeS5yb290KSYmdmIoYSl9XG5mdW5jdGlvbiB3YihhLGIpe2lmKFwic2xvdFwiPT09YilhPWEucGFyZW50Tm9kZSxxYihhKSYmRChhLl9fc2hhZHkucm9vdCk7ZWxzZSBpZihcInNsb3RcIj09PWEubG9jYWxOYW1lJiZcIm5hbWVcIj09PWImJihiPWxhKGEpKSl7dmFyIGM9YS51YSxkPXhiKGEpO2lmKGQhPT1jKXtjPWIuaVtjXTt2YXIgZT1jLmluZGV4T2YoYSk7MDw9ZSYmYy5zcGxpY2UoZSwxKTtjPWIuaVtkXXx8KGIuaVtkXT1bXSk7Yy5wdXNoKGEpOzE8Yy5sZW5ndGgmJihiLmlbZF09eWIoYykpfUQoYil9fWZ1bmN0aW9uIHNiKGEsYixjKXtpZihhPWEuX19zaGFkeSYmYS5fX3NoYWR5LkgpYiYmYS5hZGRlZE5vZGVzLnB1c2goYiksYyYmYS5yZW1vdmVkTm9kZXMucHVzaChjKSxDYShhKX1cbmZ1bmN0aW9uIHpiKGEpe2lmKGEmJmEubm9kZVR5cGUpe2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O3ZhciBiPWEuX19zaGFkeS5jYTt2b2lkIDA9PT1iJiYodShhKT9iPWE6Yj0oYj1hLnBhcmVudE5vZGUpP3piKGIpOmEsdy5jb250YWlucy5jYWxsKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxhKSYmKGEuX19zaGFkeS5jYT1iKSk7cmV0dXJuIGJ9fWZ1bmN0aW9uIEFiKGEsYixjKXt2YXIgZD1bXTtCYihhLmNoaWxkTm9kZXMsYixjLGQpO3JldHVybiBkfWZ1bmN0aW9uIEJiKGEsYixjLGQpe2Zvcih2YXIgZT0wLGY9YS5sZW5ndGgsaDtlPGYmJihoPWFbZV0pO2UrKyl7dmFyIGc7aWYoZz1oLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpe2c9aDt2YXIgaz1iLGw9YyxtPWQscT1rKGcpO3EmJm0ucHVzaChnKTtsJiZsKHEpP2c9cTooQmIoZy5jaGlsZE5vZGVzLGssbCxtKSxnPXZvaWQgMCl9aWYoZylicmVha319dmFyIENiPW51bGw7XG5mdW5jdGlvbiBEYihhLGIsYyl7Q2J8fChDYj13aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5TY29waW5nU2hpbSk7Q2ImJlwiY2xhc3NcIj09PWI/Q2Iuc2V0RWxlbWVudENsYXNzKGEsYyk6KHcuc2V0QXR0cmlidXRlLmNhbGwoYSxiLGMpLHdiKGEsYikpfWZ1bmN0aW9uIEViKGEsYil7aWYoYS5vd25lckRvY3VtZW50IT09ZG9jdW1lbnQpcmV0dXJuIHcuaW1wb3J0Tm9kZS5jYWxsKGRvY3VtZW50LGEsYik7dmFyIGM9dy5pbXBvcnROb2RlLmNhbGwoZG9jdW1lbnQsYSwhMSk7aWYoYil7YT1hLmNoaWxkTm9kZXM7Yj0wO2Zvcih2YXIgZDtiPGEubGVuZ3RoO2IrKylkPUViKGFbYl0sITApLGMuYXBwZW5kQ2hpbGQoZCl9cmV0dXJuIGN9O3ZhciBGYj1cIl9fZXZlbnRXcmFwcGVyc1wiK0RhdGUubm93KCksR2I9e2JsdXI6ITAsZm9jdXM6ITAsZm9jdXNpbjohMCxmb2N1c291dDohMCxjbGljazohMCxkYmxjbGljazohMCxtb3VzZWRvd246ITAsbW91c2VlbnRlcjohMCxtb3VzZWxlYXZlOiEwLG1vdXNlbW92ZTohMCxtb3VzZW91dDohMCxtb3VzZW92ZXI6ITAsbW91c2V1cDohMCx3aGVlbDohMCxiZWZvcmVpbnB1dDohMCxpbnB1dDohMCxrZXlkb3duOiEwLGtleXVwOiEwLGNvbXBvc2l0aW9uc3RhcnQ6ITAsY29tcG9zaXRpb251cGRhdGU6ITAsY29tcG9zaXRpb25lbmQ6ITAsdG91Y2hzdGFydDohMCx0b3VjaGVuZDohMCx0b3VjaG1vdmU6ITAsdG91Y2hjYW5jZWw6ITAscG9pbnRlcm92ZXI6ITAscG9pbnRlcmVudGVyOiEwLHBvaW50ZXJkb3duOiEwLHBvaW50ZXJtb3ZlOiEwLHBvaW50ZXJ1cDohMCxwb2ludGVyY2FuY2VsOiEwLHBvaW50ZXJvdXQ6ITAscG9pbnRlcmxlYXZlOiEwLGdvdHBvaW50ZXJjYXB0dXJlOiEwLGxvc3Rwb2ludGVyY2FwdHVyZTohMCxcbmRyYWdzdGFydDohMCxkcmFnOiEwLGRyYWdlbnRlcjohMCxkcmFnbGVhdmU6ITAsZHJhZ292ZXI6ITAsZHJvcDohMCxkcmFnZW5kOiEwLERPTUFjdGl2YXRlOiEwLERPTUZvY3VzSW46ITAsRE9NRm9jdXNPdXQ6ITAsa2V5cHJlc3M6ITB9O2Z1bmN0aW9uIEhiKGEsYil7dmFyIGM9W10sZD1hO2ZvcihhPWE9PT13aW5kb3c/d2luZG93OmEuZ2V0Um9vdE5vZGUoKTtkOyljLnB1c2goZCksZD1kLmFzc2lnbmVkU2xvdD9kLmFzc2lnbmVkU2xvdDpkLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFJiZkLmhvc3QmJihifHxkIT09YSk/ZC5ob3N0OmQucGFyZW50Tm9kZTtjW2MubGVuZ3RoLTFdPT09ZG9jdW1lbnQmJmMucHVzaCh3aW5kb3cpO3JldHVybiBjfVxuZnVuY3Rpb24gSWIoYSxiKXtpZighdSlyZXR1cm4gYTthPUhiKGEsITApO2Zvcih2YXIgYz0wLGQsZSxmLGg7YzxiLmxlbmd0aDtjKyspaWYoZD1iW2NdLGY9ZD09PXdpbmRvdz93aW5kb3c6ZC5nZXRSb290Tm9kZSgpLGYhPT1lJiYoaD1hLmluZGV4T2YoZiksZT1mKSwhdShmKXx8LTE8aClyZXR1cm4gZH1cbnZhciBKYj17Z2V0IGNvbXBvc2VkKCl7ITEhPT10aGlzLmlzVHJ1c3RlZCYmdm9pZCAwPT09dGhpcy5TJiYodGhpcy5TPUdiW3RoaXMudHlwZV0pO3JldHVybiB0aGlzLlN8fCExfSxjb21wb3NlZFBhdGg6ZnVuY3Rpb24oKXt0aGlzLmZhfHwodGhpcy5mYT1IYih0aGlzLl9fdGFyZ2V0LHRoaXMuY29tcG9zZWQpKTtyZXR1cm4gdGhpcy5mYX0sZ2V0IHRhcmdldCgpe3JldHVybiBJYih0aGlzLmN1cnJlbnRUYXJnZXQsdGhpcy5jb21wb3NlZFBhdGgoKSl9LGdldCByZWxhdGVkVGFyZ2V0KCl7aWYoIXRoaXMuZ2EpcmV0dXJuIG51bGw7dGhpcy5oYXx8KHRoaXMuaGE9SGIodGhpcy5nYSwhMCkpO3JldHVybiBJYih0aGlzLmN1cnJlbnRUYXJnZXQsdGhpcy5oYSl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe0V2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24uY2FsbCh0aGlzKTt0aGlzLlQ9ITB9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe0V2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24uY2FsbCh0aGlzKTtcbnRoaXMuVD10aGlzLnFhPSEwfX07ZnVuY3Rpb24gS2IoYSl7ZnVuY3Rpb24gYihiLGQpe2I9bmV3IGEoYixkKTtiLlM9ZCYmISFkLmNvbXBvc2VkO3JldHVybiBifXFhKGIsYSk7Yi5wcm90b3R5cGU9YS5wcm90b3R5cGU7cmV0dXJuIGJ9dmFyIE1iPXtmb2N1czohMCxibHVyOiEwfTtmdW5jdGlvbiBOYihhLGIsYyl7aWYoYz1iLl9faGFuZGxlcnMmJmIuX19oYW5kbGVyc1thLnR5cGVdJiZiLl9faGFuZGxlcnNbYS50eXBlXVtjXSlmb3IodmFyIGQ9MCxlOyhlPWNbZF0pJiZhLnRhcmdldCE9PWEucmVsYXRlZFRhcmdldCYmKGUuY2FsbChiLGEpLCFhLnFhKTtkKyspO31cbmZ1bmN0aW9uIE9iKGEpe3ZhciBiPWEuY29tcG9zZWRQYXRoKCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJjdXJyZW50VGFyZ2V0XCIse2dldDpmdW5jdGlvbigpe3JldHVybiBkfSxjb25maWd1cmFibGU6ITB9KTtmb3IodmFyIGM9Yi5sZW5ndGgtMTswPD1jO2MtLSl7dmFyIGQ9YltjXTtOYihhLGQsXCJjYXB0dXJlXCIpO2lmKGEuVClyZXR1cm59T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJldmVudFBoYXNlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBFdmVudC5BVF9UQVJHRVR9fSk7dmFyIGU7Zm9yKGM9MDtjPGIubGVuZ3RoO2MrKyl7ZD1iW2NdO3ZhciBmPWQuX19zaGFkeSYmZC5fX3NoYWR5LnJvb3Q7aWYoMD09PWN8fGYmJmY9PT1lKWlmKE5iKGEsZCxcImJ1YmJsZVwiKSxkIT09d2luZG93JiYoZT1kLmdldFJvb3ROb2RlKCkpLGEuVClicmVha319XG5mdW5jdGlvbiBQYihhLGIsYyxkLGUsZil7Zm9yKHZhciBoPTA7aDxhLmxlbmd0aDtoKyspe3ZhciBnPWFbaF0saz1nLnR5cGUsbD1nLmNhcHR1cmUsbT1nLm9uY2UscT1nLnBhc3NpdmU7aWYoYj09PWcubm9kZSYmYz09PWsmJmQ9PT1sJiZlPT09bSYmZj09PXEpcmV0dXJuIGh9cmV0dXJuLTF9XG5mdW5jdGlvbiBRYihhLGIsYyl7aWYoYil7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBjKXt2YXIgZD0hIWMuY2FwdHVyZTt2YXIgZT0hIWMub25jZTt2YXIgZj0hIWMucGFzc2l2ZX1lbHNlIGQ9ISFjLGY9ZT0hMTt2YXIgaD1jJiZjLlV8fHRoaXMsZz1iW0ZiXTtpZihnKXtpZigtMTxQYihnLGgsYSxkLGUsZikpcmV0dXJufWVsc2UgYltGYl09W107Zz1mdW5jdGlvbihkKXtlJiZ0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxiLGMpO2QuX190YXJnZXR8fFJiKGQpO2lmKGghPT10aGlzKXt2YXIgZj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGQsXCJjdXJyZW50VGFyZ2V0XCIpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShkLFwiY3VycmVudFRhcmdldFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaH0sY29uZmlndXJhYmxlOiEwfSl9aWYoZC5jb21wb3NlZHx8LTE8ZC5jb21wb3NlZFBhdGgoKS5pbmRleE9mKGgpKWlmKGQudGFyZ2V0PT09ZC5yZWxhdGVkVGFyZ2V0KWQuZXZlbnRQaGFzZT09PVxuRXZlbnQuQlVCQkxJTkdfUEhBU0UmJmQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7ZWxzZSBpZihkLmV2ZW50UGhhc2U9PT1FdmVudC5DQVBUVVJJTkdfUEhBU0V8fGQuYnViYmxlc3x8ZC50YXJnZXQ9PT1oKXt2YXIgZz1cIm9iamVjdFwiPT09dHlwZW9mIGImJmIuaGFuZGxlRXZlbnQ/Yi5oYW5kbGVFdmVudChkKTpiLmNhbGwoaCxkKTtoIT09dGhpcyYmKGY/KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLFwiY3VycmVudFRhcmdldFwiLGYpLGY9bnVsbCk6ZGVsZXRlIGQuY3VycmVudFRhcmdldCk7cmV0dXJuIGd9fTtiW0ZiXS5wdXNoKHtub2RlOnRoaXMsdHlwZTphLGNhcHR1cmU6ZCxvbmNlOmUscGFzc2l2ZTpmLFZhOmd9KTtNYlthXT8odGhpcy5fX2hhbmRsZXJzPXRoaXMuX19oYW5kbGVyc3x8e30sdGhpcy5fX2hhbmRsZXJzW2FdPXRoaXMuX19oYW5kbGVyc1thXXx8e2NhcHR1cmU6W10sYnViYmxlOltdfSx0aGlzLl9faGFuZGxlcnNbYV1bZD9cImNhcHR1cmVcIjpcImJ1YmJsZVwiXS5wdXNoKGcpKTpcbih0aGlzIGluc3RhbmNlb2YgV2luZG93P3cuVGE6dy5hZGRFdmVudExpc3RlbmVyKS5jYWxsKHRoaXMsYSxnLGMpfX1cbmZ1bmN0aW9uIFNiKGEsYixjKXtpZihiKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMpe3ZhciBkPSEhYy5jYXB0dXJlO3ZhciBlPSEhYy5vbmNlO3ZhciBmPSEhYy5wYXNzaXZlfWVsc2UgZD0hIWMsZj1lPSExO3ZhciBoPWMmJmMuVXx8dGhpcyxnPXZvaWQgMDt2YXIgaz1udWxsO3RyeXtrPWJbRmJdfWNhdGNoKGwpe31rJiYoZT1QYihrLGgsYSxkLGUsZiksLTE8ZSYmKGc9ay5zcGxpY2UoZSwxKVswXS5WYSxrLmxlbmd0aHx8KGJbRmJdPXZvaWQgMCkpKTsodGhpcyBpbnN0YW5jZW9mIFdpbmRvdz93LlVhOncucmVtb3ZlRXZlbnRMaXN0ZW5lcikuY2FsbCh0aGlzLGEsZ3x8YixjKTtnJiZNYlthXSYmdGhpcy5fX2hhbmRsZXJzJiZ0aGlzLl9faGFuZGxlcnNbYV0mJihhPXRoaXMuX19oYW5kbGVyc1thXVtkP1wiY2FwdHVyZVwiOlwiYnViYmxlXCJdLGc9YS5pbmRleE9mKGcpLC0xPGcmJmEuc3BsaWNlKGcsMSkpfX1cbmZ1bmN0aW9uIFRiKCl7Zm9yKHZhciBhIGluIE1iKXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGEsZnVuY3Rpb24oYSl7YS5fX3RhcmdldHx8KFJiKGEpLE9iKGEpKX0sITApfWZ1bmN0aW9uIFJiKGEpe2EuX190YXJnZXQ9YS50YXJnZXQ7YS5nYT1hLnJlbGF0ZWRUYXJnZXQ7aWYoci5HKXt2YXIgYj1PYmplY3QuZ2V0UHJvdG90eXBlT2YoYSk7aWYoIWIuaGFzT3duUHJvcGVydHkoXCJfX3BhdGNoUHJvdG9cIikpe3ZhciBjPU9iamVjdC5jcmVhdGUoYik7Yy5YYT1iO29hKGMsSmIpO2IuX19wYXRjaFByb3RvPWN9YS5fX3Byb3RvX189Yi5fX3BhdGNoUHJvdG99ZWxzZSBvYShhLEpiKX12YXIgVWI9S2Iod2luZG93LkV2ZW50KSxWYj1LYih3aW5kb3cuQ3VzdG9tRXZlbnQpLFdiPUtiKHdpbmRvdy5Nb3VzZUV2ZW50KTtmdW5jdGlvbiBYYihhLGIpe3JldHVybntpbmRleDphLEk6W10sTTpifX1cbmZ1bmN0aW9uIFliKGEsYixjLGQpe3ZhciBlPTAsZj0wLGg9MCxnPTAsaz1NYXRoLm1pbihiLWUsZC1mKTtpZigwPT1lJiYwPT1mKWE6e2ZvcihoPTA7aDxrO2grKylpZihhW2hdIT09Y1toXSlicmVhayBhO2g9a31pZihiPT1hLmxlbmd0aCYmZD09Yy5sZW5ndGgpe2c9YS5sZW5ndGg7Zm9yKHZhciBsPWMubGVuZ3RoLG09MDttPGstaCYmWmIoYVstLWddLGNbLS1sXSk7KW0rKztnPW19ZSs9aDtmKz1oO2ItPWc7ZC09ZztpZigwPT1iLWUmJjA9PWQtZilyZXR1cm5bXTtpZihlPT1iKXtmb3IoYj1YYihlLDApO2Y8ZDspYi5JLnB1c2goY1tmKytdKTtyZXR1cm5bYl19aWYoZj09ZClyZXR1cm5bWGIoZSxiLWUpXTtrPWU7aD1mO2Q9ZC1oKzE7Zz1iLWsrMTtiPUFycmF5KGQpO2ZvcihsPTA7bDxkO2wrKyliW2xdPUFycmF5KGcpLGJbbF1bMF09bDtmb3IobD0wO2w8ZztsKyspYlswXVtsXT1sO2ZvcihsPTE7bDxkO2wrKylmb3IobT0xO208ZzttKyspaWYoYVtrK20tMV09PT1jW2grbC0xXSliW2xdW21dPVxuYltsLTFdW20tMV07ZWxzZXt2YXIgcT1iW2wtMV1bbV0rMSxFPWJbbF1bbS0xXSsxO2JbbF1bbV09cTxFP3E6RX1rPWIubGVuZ3RoLTE7aD1iWzBdLmxlbmd0aC0xO2Q9YltrXVtoXTtmb3IoYT1bXTswPGt8fDA8aDspMD09az8oYS5wdXNoKDIpLGgtLSk6MD09aD8oYS5wdXNoKDMpLGstLSk6KGc9YltrLTFdW2gtMV0sbD1iW2stMV1baF0sbT1iW2tdW2gtMV0scT1sPG0/bDxnP2w6ZzptPGc/bTpnLHE9PWc/KGc9PWQ/YS5wdXNoKDApOihhLnB1c2goMSksZD1nKSxrLS0saC0tKTpxPT1sPyhhLnB1c2goMyksay0tLGQ9bCk6KGEucHVzaCgyKSxoLS0sZD1tKSk7YS5yZXZlcnNlKCk7Yj12b2lkIDA7az1bXTtmb3IoaD0wO2g8YS5sZW5ndGg7aCsrKXN3aXRjaChhW2hdKXtjYXNlIDA6YiYmKGsucHVzaChiKSxiPXZvaWQgMCk7ZSsrO2YrKzticmVhaztjYXNlIDE6Ynx8KGI9WGIoZSwwKSk7Yi5NKys7ZSsrO2IuSS5wdXNoKGNbZl0pO2YrKzticmVhaztjYXNlIDI6Ynx8KGI9WGIoZSwwKSk7XG5iLk0rKztlKys7YnJlYWs7Y2FzZSAzOmJ8fChiPVhiKGUsMCkpLGIuSS5wdXNoKGNbZl0pLGYrK31iJiZrLnB1c2goYik7cmV0dXJuIGt9ZnVuY3Rpb24gWmIoYSxiKXtyZXR1cm4gYT09PWJ9O3ZhciAkYj17fTtmdW5jdGlvbiBGKGEsYixjKXtpZihhIT09JGIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgY29uc3RydWN0b3JcIik7YT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7YS5fX3Byb3RvX189Ri5wcm90b3R5cGU7YS5zYT1cIlNoYWR5Um9vdFwiO25iKGIpO25iKGEpO2EuaG9zdD1iO2EuYT1jJiZjLm1vZGU7Yi5fX3NoYWR5PWIuX19zaGFkeXx8e307Yi5fX3NoYWR5LnJvb3Q9YTtiLl9fc2hhZHkuTWE9XCJjbG9zZWRcIiE9PWEuYT9hOm51bGw7YS5MPSExO2EubT1bXTthLmk9e307YS5DPVtdO2M9eC5jaGlsZE5vZGVzKGIpO2Zvcih2YXIgZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKyl3LnJlbW92ZUNoaWxkLmNhbGwoYixjW2RdKTtyZXR1cm4gYX1GLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlKTtmdW5jdGlvbiBEKGEpe2EuTHx8KGEuTD0hMCx6YShmdW5jdGlvbigpe3JldHVybiBhYyhhKX0pKX1cbmZ1bmN0aW9uIGFjKGEpe2Zvcih2YXIgYjthOyl7YS5MJiYoYj1hKTthOnt2YXIgYz1hO2E9Yy5ob3N0LmdldFJvb3ROb2RlKCk7aWYodShhKSlmb3IodmFyIGQ9Yy5ob3N0LmNoaWxkTm9kZXMsZT0wO2U8ZC5sZW5ndGg7ZSsrKWlmKGM9ZFtlXSxcInNsb3RcIj09Yy5sb2NhbE5hbWUpYnJlYWsgYTthPXZvaWQgMH19YiYmYi5fcmVuZGVyUm9vdCgpfVxuRi5wcm90b3R5cGUuX3JlbmRlclJvb3Q9ZnVuY3Rpb24oKXt0aGlzLkw9ITE7dWIodGhpcyk7Zm9yKHZhciBhPTAsYjthPHRoaXMubS5sZW5ndGg7YSsrKXtiPXRoaXMubVthXTt2YXIgYz1iLl9fc2hhZHkuYXNzaWduZWROb2RlcztiLl9fc2hhZHkuYXNzaWduZWROb2Rlcz1bXTtiLl9fc2hhZHkuRD1bXTtpZihiLl9fc2hhZHkuaWE9Yylmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXTtlLl9fc2hhZHkuWj1lLl9fc2hhZHkuYXNzaWduZWRTbG90O2UuX19zaGFkeS5hc3NpZ25lZFNsb3Q9PT1iJiYoZS5fX3NoYWR5LmFzc2lnbmVkU2xvdD1udWxsKX19Zm9yKGI9dGhpcy5ob3N0LmZpcnN0Q2hpbGQ7YjtiPWIubmV4dFNpYmxpbmcpYmModGhpcyxiKTtmb3IoYT0wO2E8dGhpcy5tLmxlbmd0aDthKyspe2I9dGhpcy5tW2FdO2lmKCFiLl9fc2hhZHkuYXNzaWduZWROb2Rlcy5sZW5ndGgpZm9yKGM9Yi5maXJzdENoaWxkO2M7Yz1jLm5leHRTaWJsaW5nKWJjKHRoaXMsXG5jLGIpO2M9Yi5wYXJlbnROb2RlOyhjPWMuX19zaGFkeSYmYy5fX3NoYWR5LnJvb3QpJiZ2YihjKSYmYy5fcmVuZGVyUm9vdCgpO2NjKHRoaXMsYi5fX3NoYWR5LkQsYi5fX3NoYWR5LmFzc2lnbmVkTm9kZXMpO2lmKGM9Yi5fX3NoYWR5LmlhKXtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKWNbZF0uX19zaGFkeS5aPW51bGw7Yi5fX3NoYWR5LmlhPW51bGw7Yy5sZW5ndGg+Yi5fX3NoYWR5LmFzc2lnbmVkTm9kZXMubGVuZ3RoJiYoYi5fX3NoYWR5LmFhPSEwKX1iLl9fc2hhZHkuYWEmJihiLl9fc2hhZHkuYWE9ITEsZGModGhpcyxiKSl9YT10aGlzLm07Yj1bXTtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWQ9YVtjXS5wYXJlbnROb2RlLGQuX19zaGFkeSYmZC5fX3NoYWR5LnJvb3R8fCEoMD5iLmluZGV4T2YoZCkpfHxiLnB1c2goZCk7Zm9yKGE9MDthPGIubGVuZ3RoO2ErKyl7Yz1iW2FdO2Q9Yz09PXRoaXM/dGhpcy5ob3N0OmM7ZT1bXTtjPWMuY2hpbGROb2Rlcztmb3IodmFyIGY9MDtmPGMubGVuZ3RoO2YrKyl7dmFyIGg9XG5jW2ZdO2lmKFwic2xvdFwiPT1oLmxvY2FsTmFtZSl7aD1oLl9fc2hhZHkuRDtmb3IodmFyIGc9MDtnPGgubGVuZ3RoO2crKyllLnB1c2goaFtnXSl9ZWxzZSBlLnB1c2goaCl9Yz12b2lkIDA7Zj14LmNoaWxkTm9kZXMoZCk7aD1ZYihlLGUubGVuZ3RoLGYsZi5sZW5ndGgpO2Zvcih2YXIgaz1nPTA7ZzxoLmxlbmd0aCYmKGM9aFtnXSk7ZysrKXtmb3IodmFyIGw9MCxtO2w8Yy5JLmxlbmd0aCYmKG09Yy5JW2xdKTtsKyspeC5wYXJlbnROb2RlKG0pPT09ZCYmdy5yZW1vdmVDaGlsZC5jYWxsKGQsbSksZi5zcGxpY2UoYy5pbmRleCtrLDEpO2stPWMuTX1mb3Ioaz0wO2s8aC5sZW5ndGgmJihjPWhba10pO2srKylmb3IoZz1mW2MuaW5kZXhdLGw9Yy5pbmRleDtsPGMuaW5kZXgrYy5NO2wrKyltPWVbbF0sdy5pbnNlcnRCZWZvcmUuY2FsbChkLG0sZyksZi5zcGxpY2UobCwwLG0pfX07XG5mdW5jdGlvbiBiYyhhLGIsYyl7Yi5fX3NoYWR5PWIuX19zaGFkeXx8e307dmFyIGQ9Yi5fX3NoYWR5Llo7Yi5fX3NoYWR5Llo9bnVsbDtjfHwoYz0oYT1hLmlbYi5zbG90fHxcIl9fY2F0Y2hhbGxcIl0pJiZhWzBdKTtjPyhjLl9fc2hhZHkuYXNzaWduZWROb2Rlcy5wdXNoKGIpLGIuX19zaGFkeS5hc3NpZ25lZFNsb3Q9Yyk6Yi5fX3NoYWR5LmFzc2lnbmVkU2xvdD12b2lkIDA7ZCE9PWIuX19zaGFkeS5hc3NpZ25lZFNsb3QmJmIuX19zaGFkeS5hc3NpZ25lZFNsb3QmJihiLl9fc2hhZHkuYXNzaWduZWRTbG90Ll9fc2hhZHkuYWE9ITApfWZ1bmN0aW9uIGNjKGEsYixjKXtmb3IodmFyIGQ9MCxlO2Q8Yy5sZW5ndGgmJihlPWNbZF0pO2QrKylpZihcInNsb3RcIj09ZS5sb2NhbE5hbWUpe3ZhciBmPWUuX19zaGFkeS5hc3NpZ25lZE5vZGVzO2YmJmYubGVuZ3RoJiZjYyhhLGIsZil9ZWxzZSBiLnB1c2goY1tkXSl9XG5mdW5jdGlvbiBkYyhhLGIpe3cuZGlzcGF0Y2hFdmVudC5jYWxsKGIsbmV3IEV2ZW50KFwic2xvdGNoYW5nZVwiKSk7Yi5fX3NoYWR5LmFzc2lnbmVkU2xvdCYmZGMoYSxiLl9fc2hhZHkuYXNzaWduZWRTbG90KX1mdW5jdGlvbiB1YihhKXtpZihhLkMubGVuZ3RoKXtmb3IodmFyIGI9YS5DLGMsZD0wO2Q8Yi5sZW5ndGg7ZCsrKXt2YXIgZT1iW2RdO2UuX19zaGFkeT1lLl9fc2hhZHl8fHt9O25iKGUpO25iKGUucGFyZW50Tm9kZSk7dmFyIGY9eGIoZSk7YS5pW2ZdPyhjPWN8fHt9LGNbZl09ITAsYS5pW2ZdLnB1c2goZSkpOmEuaVtmXT1bZV07YS5tLnB1c2goZSl9aWYoYylmb3IodmFyIGggaW4gYylhLmlbaF09eWIoYS5pW2hdKTthLkM9W119fWZ1bmN0aW9uIHhiKGEpe3ZhciBiPWEubmFtZXx8YS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpfHxcIl9fY2F0Y2hhbGxcIjtyZXR1cm4gYS51YT1ifVxuZnVuY3Rpb24geWIoYSl7cmV0dXJuIGEuc29ydChmdW5jdGlvbihhLGMpe2E9ZWMoYSk7Zm9yKHZhciBiPWVjKGMpLGU9MDtlPGEubGVuZ3RoO2UrKyl7Yz1hW2VdO3ZhciBmPWJbZV07aWYoYyE9PWYpcmV0dXJuIGE9QXJyYXkuZnJvbShjLnBhcmVudE5vZGUuY2hpbGROb2RlcyksYS5pbmRleE9mKGMpLWEuaW5kZXhPZihmKX19KX1mdW5jdGlvbiBlYyhhKXt2YXIgYj1bXTtkbyBiLnVuc2hpZnQoYSk7d2hpbGUoYT1hLnBhcmVudE5vZGUpO3JldHVybiBifWZ1bmN0aW9uIHZiKGEpe3ViKGEpO3JldHVybiEhYS5tLmxlbmd0aH1GLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXtcIm9iamVjdFwiIT09dHlwZW9mIGMmJihjPXtjYXB0dXJlOiEhY30pO2MuVT10aGlzO3RoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKGEsYixjKX07XG5GLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXtcIm9iamVjdFwiIT09dHlwZW9mIGMmJihjPXtjYXB0dXJlOiEhY30pO2MuVT10aGlzO3RoaXMuaG9zdC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKX07Ri5wcm90b3R5cGUuZ2V0RWxlbWVudEJ5SWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIEFiKHRoaXMsZnVuY3Rpb24oYil7cmV0dXJuIGIuaWQ9PWF9LGZ1bmN0aW9uKGEpe3JldHVybiEhYX0pWzBdfHxudWxsfTt2YXIgZmM9Ri5wcm90b3R5cGU7QihmYyxoYiwhMCk7QihmYyxqYiwhMCk7ZnVuY3Rpb24gZ2MoYSl7dmFyIGI9YS5nZXRSb290Tm9kZSgpO3UoYikmJmFjKGIpO3JldHVybiBhLl9fc2hhZHkmJmEuX19zaGFkeS5hc3NpZ25lZFNsb3R8fG51bGx9XG52YXIgaGM9e2FkZEV2ZW50TGlzdGVuZXI6UWIuYmluZCh3aW5kb3cpLHJlbW92ZUV2ZW50TGlzdGVuZXI6U2IuYmluZCh3aW5kb3cpfSxpYz17YWRkRXZlbnRMaXN0ZW5lcjpRYixyZW1vdmVFdmVudExpc3RlbmVyOlNiLGFwcGVuZENoaWxkOmZ1bmN0aW9uKGEpe3JldHVybiBvYih0aGlzLGEpfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gb2IodGhpcyxhLGIpfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihhKXtyZXR1cm4gcGIodGhpcyxhKX0scmVwbGFjZUNoaWxkOmZ1bmN0aW9uKGEsYil7b2IodGhpcyxhLGIpO3BiKHRoaXMsYik7cmV0dXJuIGF9LGNsb25lTm9kZTpmdW5jdGlvbihhKXtpZihcInRlbXBsYXRlXCI9PXRoaXMubG9jYWxOYW1lKXZhciBiPXcuY2xvbmVOb2RlLmNhbGwodGhpcyxhKTtlbHNlIGlmKGI9dy5jbG9uZU5vZGUuY2FsbCh0aGlzLCExKSxhKXthPXRoaXMuY2hpbGROb2Rlcztmb3IodmFyIGM9MCxkO2M8YS5sZW5ndGg7YysrKWQ9YVtjXS5jbG9uZU5vZGUoITApLFxuYi5hcHBlbmRDaGlsZChkKX1yZXR1cm4gYn0sZ2V0Um9vdE5vZGU6ZnVuY3Rpb24oKXtyZXR1cm4gemIodGhpcyl9LGNvbnRhaW5zOmZ1bmN0aW9uKGEpe3JldHVybiB3YSh0aGlzLGEpfSxnZXQgaXNDb25uZWN0ZWQoKXt2YXIgYT10aGlzLm93bmVyRG9jdW1lbnQ7aWYodmEmJncuY29udGFpbnMuY2FsbChhLHRoaXMpfHxhLmRvY3VtZW50RWxlbWVudCYmdy5jb250YWlucy5jYWxsKGEuZG9jdW1lbnRFbGVtZW50LHRoaXMpKXJldHVybiEwO2ZvcihhPXRoaXM7YSYmIShhIGluc3RhbmNlb2YgRG9jdW1lbnQpOylhPWEucGFyZW50Tm9kZXx8KGEgaW5zdGFuY2VvZiBGP2EuaG9zdDp2b2lkIDApO3JldHVybiEhKGEmJmEgaW5zdGFuY2VvZiBEb2N1bWVudCl9LGRpc3BhdGNoRXZlbnQ6ZnVuY3Rpb24oYSl7QWEoKTtyZXR1cm4gdy5kaXNwYXRjaEV2ZW50LmNhbGwodGhpcyxhKX19LGpjPXtnZXQgYXNzaWduZWRTbG90KCl7cmV0dXJuIGdjKHRoaXMpfX0sa2M9e3F1ZXJ5U2VsZWN0b3I6ZnVuY3Rpb24oYSl7cmV0dXJuIEFiKHRoaXMsXG5mdW5jdGlvbihiKXtyZXR1cm4gbmEuY2FsbChiLGEpfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH0scXVlcnlTZWxlY3RvckFsbDpmdW5jdGlvbihhKXtyZXR1cm4gQWIodGhpcyxmdW5jdGlvbihiKXtyZXR1cm4gbmEuY2FsbChiLGEpfSl9fSxsYz17YXNzaWduZWROb2RlczpmdW5jdGlvbihhKXtpZihcInNsb3RcIj09PXRoaXMubG9jYWxOYW1lKXt2YXIgYj10aGlzLmdldFJvb3ROb2RlKCk7dShiKSYmYWMoYik7cmV0dXJuIHRoaXMuX19zaGFkeT8oYSYmYS5mbGF0dGVuP3RoaXMuX19zaGFkeS5EOnRoaXMuX19zaGFkeS5hc3NpZ25lZE5vZGVzKXx8W106W119fX0sbWM9cGEoe3NldEF0dHJpYnV0ZTpmdW5jdGlvbihhLGIpe0RiKHRoaXMsYSxiKX0scmVtb3ZlQXR0cmlidXRlOmZ1bmN0aW9uKGEpe3cucmVtb3ZlQXR0cmlidXRlLmNhbGwodGhpcyxhKTt3Yih0aGlzLGEpfSxhdHRhY2hTaGFkb3c6ZnVuY3Rpb24oYSl7aWYoIXRoaXMpdGhyb3dcIk11c3QgcHJvdmlkZSBhIGhvc3QuXCI7XG5pZighYSl0aHJvd1wiTm90IGVub3VnaCBhcmd1bWVudHMuXCI7cmV0dXJuIG5ldyBGKCRiLHRoaXMsYSl9LGdldCBzbG90KCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwic2xvdFwiKX0sc2V0IHNsb3QoYSl7RGIodGhpcyxcInNsb3RcIixhKX0sZ2V0IGFzc2lnbmVkU2xvdCgpe3JldHVybiBnYyh0aGlzKX19LGtjLGxjKTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtYyxpYik7dmFyIG5jPXBhKHtpbXBvcnROb2RlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEViKGEsYil9LGdldEVsZW1lbnRCeUlkOmZ1bmN0aW9uKGEpe3JldHVybiBBYih0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBiLmlkPT1hfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH19LGtjKTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhuYyx7X2FjdGl2ZUVsZW1lbnQ6amIuYWN0aXZlRWxlbWVudH0pO1xudmFyIG9jPUhUTUxFbGVtZW50LnByb3RvdHlwZS5ibHVyLHBjPXBhKHtibHVyOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkucm9vdDsoYT1hJiZhLmFjdGl2ZUVsZW1lbnQpP2EuYmx1cigpOm9jLmNhbGwodGhpcyl9fSk7ZnVuY3Rpb24gRyhhLGIpe2Zvcih2YXIgYz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKSxkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF0sZj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGIsZSk7Zi52YWx1ZT9hW2VdPWYudmFsdWU6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsZSxmKX19O2lmKHIubGEpe3ZhciBTaGFkeURPTT17aW5Vc2U6ci5sYSxwYXRjaDpmdW5jdGlvbihhKXtyZXR1cm4gYX0saXNTaGFkeVJvb3Q6dSxlbnF1ZXVlOnphLGZsdXNoOkFhLHNldHRpbmdzOnIsZmlsdGVyTXV0YXRpb25zOkdhLG9ic2VydmVDaGlsZHJlbjpFYSx1bm9ic2VydmVDaGlsZHJlbjpGYSxuYXRpdmVNZXRob2RzOncsbmF0aXZlVHJlZTp4fTt3aW5kb3cuU2hhZHlET009U2hhZHlET007d2luZG93LkV2ZW50PVViO3dpbmRvdy5DdXN0b21FdmVudD1WYjt3aW5kb3cuTW91c2VFdmVudD1XYjtUYigpO3ZhciBxYz13aW5kb3cuY3VzdG9tRWxlbWVudHMmJndpbmRvdy5jdXN0b21FbGVtZW50cy5uYXRpdmVIVE1MRWxlbWVudHx8SFRNTEVsZW1lbnQ7Ryh3aW5kb3cuTm9kZS5wcm90b3R5cGUsaWMpO0cod2luZG93LldpbmRvdy5wcm90b3R5cGUsaGMpO0cod2luZG93LlRleHQucHJvdG90eXBlLGpjKTtHKHdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSxrYyk7Ryh3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUsXG5tYyk7Ryh3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLG5jKTt3aW5kb3cuSFRNTFNsb3RFbGVtZW50JiZHKHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQucHJvdG90eXBlLGxjKTtHKHFjLnByb3RvdHlwZSxwYyk7ci5HJiYoQyh3aW5kb3cuTm9kZS5wcm90b3R5cGUpLEMod2luZG93LlRleHQucHJvdG90eXBlKSxDKHdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSksQyh3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpLEMocWMucHJvdG90eXBlKSxDKHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUpLHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQmJkMod2luZG93LkhUTUxTbG90RWxlbWVudC5wcm90b3R5cGUpKTt3aW5kb3cuU2hhZG93Um9vdD1GfTt2YXIgcmM9bmV3IFNldChcImFubm90YXRpb24teG1sIGNvbG9yLXByb2ZpbGUgZm9udC1mYWNlIGZvbnQtZmFjZS1zcmMgZm9udC1mYWNlLXVyaSBmb250LWZhY2UtZm9ybWF0IGZvbnQtZmFjZS1uYW1lIG1pc3NpbmctZ2x5cGhcIi5zcGxpdChcIiBcIikpO2Z1bmN0aW9uIHNjKGEpe3ZhciBiPXJjLmhhcyhhKTthPS9eW2Etel1bLjAtOV9hLXpdKi1bXFwtLjAtOV9hLXpdKiQvLnRlc3QoYSk7cmV0dXJuIWImJmF9ZnVuY3Rpb24gSChhKXt2YXIgYj1hLmlzQ29ubmVjdGVkO2lmKHZvaWQgMCE9PWIpcmV0dXJuIGI7Zm9yKDthJiYhKGEuX19DRV9pc0ltcG9ydERvY3VtZW50fHxhIGluc3RhbmNlb2YgRG9jdW1lbnQpOylhPWEucGFyZW50Tm9kZXx8KHdpbmRvdy5TaGFkb3dSb290JiZhIGluc3RhbmNlb2YgU2hhZG93Um9vdD9hLmhvc3Q6dm9pZCAwKTtyZXR1cm4hKCFhfHwhKGEuX19DRV9pc0ltcG9ydERvY3VtZW50fHxhIGluc3RhbmNlb2YgRG9jdW1lbnQpKX1cbmZ1bmN0aW9uIHRjKGEsYil7Zm9yKDtiJiZiIT09YSYmIWIubmV4dFNpYmxpbmc7KWI9Yi5wYXJlbnROb2RlO3JldHVybiBiJiZiIT09YT9iLm5leHRTaWJsaW5nOm51bGx9XG5mdW5jdGlvbiBJKGEsYixjKXtjPXZvaWQgMD09PWM/bmV3IFNldDpjO2Zvcih2YXIgZD1hO2Q7KXtpZihkLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpe3ZhciBlPWQ7YihlKTt2YXIgZj1lLmxvY2FsTmFtZTtpZihcImxpbmtcIj09PWYmJlwiaW1wb3J0XCI9PT1lLmdldEF0dHJpYnV0ZShcInJlbFwiKSl7ZD1lLmltcG9ydDtpZihkIGluc3RhbmNlb2YgTm9kZSYmIWMuaGFzKGQpKWZvcihjLmFkZChkKSxkPWQuZmlyc3RDaGlsZDtkO2Q9ZC5uZXh0U2libGluZylJKGQsYixjKTtkPXRjKGEsZSk7Y29udGludWV9ZWxzZSBpZihcInRlbXBsYXRlXCI9PT1mKXtkPXRjKGEsZSk7Y29udGludWV9aWYoZT1lLl9fQ0Vfc2hhZG93Um9vdClmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpSShlLGIsYyl9ZD1kLmZpcnN0Q2hpbGQ/ZC5maXJzdENoaWxkOnRjKGEsZCl9fWZ1bmN0aW9uIEsoYSxiLGMpe2FbYl09Y307ZnVuY3Rpb24gdWMoKXt0aGlzLmE9bmV3IE1hcDt0aGlzLmw9bmV3IE1hcDt0aGlzLmY9W107dGhpcy5jPSExfWZ1bmN0aW9uIHZjKGEsYixjKXthLmEuc2V0KGIsYyk7YS5sLnNldChjLmNvbnN0cnVjdG9yLGMpfWZ1bmN0aW9uIHdjKGEsYil7YS5jPSEwO2EuZi5wdXNoKGIpfWZ1bmN0aW9uIHhjKGEsYil7YS5jJiZJKGIsZnVuY3Rpb24oYil7cmV0dXJuIGEuYihiKX0pfXVjLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEpe2lmKHRoaXMuYyYmIWEuX19DRV9wYXRjaGVkKXthLl9fQ0VfcGF0Y2hlZD0hMDtmb3IodmFyIGI9MDtiPHRoaXMuZi5sZW5ndGg7YisrKXRoaXMuZltiXShhKX19O2Z1bmN0aW9uIEwoYSxiKXt2YXIgYz1bXTtJKGIsZnVuY3Rpb24oYSl7cmV0dXJuIGMucHVzaChhKX0pO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07MT09PWQuX19DRV9zdGF0ZT9hLmNvbm5lY3RlZENhbGxiYWNrKGQpOnljKGEsZCl9fVxuZnVuY3Rpb24gTShhLGIpe3ZhciBjPVtdO0koYixmdW5jdGlvbihhKXtyZXR1cm4gYy5wdXNoKGEpfSk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9Y1tiXTsxPT09ZC5fX0NFX3N0YXRlJiZhLmRpc2Nvbm5lY3RlZENhbGxiYWNrKGQpfX1cbmZ1bmN0aW9uIE4oYSxiLGMpe2M9dm9pZCAwPT09Yz97fTpjO3ZhciBkPWMuU2F8fG5ldyBTZXQsZT1jLm9hfHxmdW5jdGlvbihiKXtyZXR1cm4geWMoYSxiKX0sZj1bXTtJKGIsZnVuY3Rpb24oYil7aWYoXCJsaW5rXCI9PT1iLmxvY2FsTmFtZSYmXCJpbXBvcnRcIj09PWIuZ2V0QXR0cmlidXRlKFwicmVsXCIpKXt2YXIgYz1iLmltcG9ydDtjIGluc3RhbmNlb2YgTm9kZSYmXCJjb21wbGV0ZVwiPT09Yy5yZWFkeVN0YXRlPyhjLl9fQ0VfaXNJbXBvcnREb2N1bWVudD0hMCxjLl9fQ0VfaGFzUmVnaXN0cnk9ITApOmIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe3ZhciBjPWIuaW1wb3J0O2lmKCFjLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZCl7Yy5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQ9ITA7Yy5fX0NFX2lzSW1wb3J0RG9jdW1lbnQ9ITA7Yy5fX0NFX2hhc1JlZ2lzdHJ5PSEwO3ZhciBmPW5ldyBTZXQoZCk7Zi5kZWxldGUoYyk7TihhLGMse1NhOmYsb2E6ZX0pfX0pfWVsc2UgZi5wdXNoKGIpfSxcbmQpO2lmKGEuYylmb3IoYj0wO2I8Zi5sZW5ndGg7YisrKWEuYihmW2JdKTtmb3IoYj0wO2I8Zi5sZW5ndGg7YisrKWUoZltiXSl9XG5mdW5jdGlvbiB5YyhhLGIpe2lmKHZvaWQgMD09PWIuX19DRV9zdGF0ZSl7dmFyIGM9YS5hLmdldChiLmxvY2FsTmFtZSk7aWYoYyl7Yy5jb25zdHJ1Y3Rpb25TdGFjay5wdXNoKGIpO3ZhciBkPWMuY29uc3RydWN0b3I7dHJ5e3RyeXtpZihuZXcgZCE9PWIpdGhyb3cgRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IgZGlkIG5vdCBwcm9kdWNlIHRoZSBlbGVtZW50IGJlaW5nIHVwZ3JhZGVkLlwiKTt9ZmluYWxseXtjLmNvbnN0cnVjdGlvblN0YWNrLnBvcCgpfX1jYXRjaChoKXt0aHJvdyBiLl9fQ0Vfc3RhdGU9MixoO31iLl9fQ0Vfc3RhdGU9MTtiLl9fQ0VfZGVmaW5pdGlvbj1jO2lmKGMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKWZvcihjPWMub2JzZXJ2ZWRBdHRyaWJ1dGVzLGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXSxmPWIuZ2V0QXR0cmlidXRlKGUpO251bGwhPT1mJiZhLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhiLGUsbnVsbCxmLG51bGwpfUgoYikmJlxuYS5jb25uZWN0ZWRDYWxsYmFjayhiKX19fXVjLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtiLmNvbm5lY3RlZENhbGxiYWNrJiZiLmNvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9O3VjLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtiLmRpc2Nvbm5lY3RlZENhbGxiYWNrJiZiLmRpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9O3VjLnByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1hLl9fQ0VfZGVmaW5pdGlvbjtmLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayYmLTE8Zi5vYnNlcnZlZEF0dHJpYnV0ZXMuaW5kZXhPZihiKSYmZi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2suY2FsbChhLGIsYyxkLGUpfTtmdW5jdGlvbiB6YyhhLGIpe3RoaXMuaD1hO3RoaXMuYT1iO3RoaXMudz12b2lkIDA7Tih0aGlzLmgsdGhpcy5hKTtcImxvYWRpbmdcIj09PXRoaXMuYS5yZWFkeVN0YXRlJiYodGhpcy53PW5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuYi5iaW5kKHRoaXMpKSx0aGlzLncub2JzZXJ2ZSh0aGlzLmEse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSkpfWZ1bmN0aW9uIEFjKGEpe2EudyYmYS53LmRpc2Nvbm5lY3QoKX16Yy5wcm90b3R5cGUuYj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmEucmVhZHlTdGF0ZTtcImludGVyYWN0aXZlXCIhPT1iJiZcImNvbXBsZXRlXCIhPT1ifHxBYyh0aGlzKTtmb3IoYj0wO2I8YS5sZW5ndGg7YisrKWZvcih2YXIgYz1hW2JdLmFkZGVkTm9kZXMsZD0wO2Q8Yy5sZW5ndGg7ZCsrKU4odGhpcy5oLGNbZF0pfTtmdW5jdGlvbiBCYygpe3ZhciBhPXRoaXM7dGhpcy5iPXRoaXMuYT12b2lkIDA7dGhpcy5jPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGIpe2EuYj1iO2EuYSYmYihhLmEpfSl9ZnVuY3Rpb24gQ2MoYSl7aWYoYS5hKXRocm93IEVycm9yKFwiQWxyZWFkeSByZXNvbHZlZC5cIik7YS5hPXZvaWQgMDthLmImJmEuYih2b2lkIDApfTtmdW5jdGlvbiBPKGEpe3RoaXMuVz0hMTt0aGlzLmg9YTt0aGlzLiQ9bmV3IE1hcDt0aGlzLlg9ZnVuY3Rpb24oYSl7cmV0dXJuIGEoKX07dGhpcy5LPSExO3RoaXMuWT1bXTt0aGlzLnhhPW5ldyB6YyhhLGRvY3VtZW50KX1cbk8ucHJvdG90eXBlLmRlZmluZT1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7aWYoIShiIGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcnMgbXVzdCBiZSBmdW5jdGlvbnMuXCIpO2lmKCFzYyhhKSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJUaGUgZWxlbWVudCBuYW1lICdcIithK1wiJyBpcyBub3QgdmFsaWQuXCIpO2lmKHRoaXMuaC5hLmdldChhKSl0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgd2l0aCBuYW1lICdcIithK1wiJyBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuXCIpO2lmKHRoaXMuVyl0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBkZWZpbmVkLlwiKTt0aGlzLlc9ITA7dHJ5e3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWVbYV07aWYodm9pZCAwIT09YiYmIShiIGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IEVycm9yKFwiVGhlICdcIithK1wiJyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO1xucmV0dXJuIGJ9LGU9Yi5wcm90b3R5cGU7aWYoIShlIGluc3RhbmNlb2YgT2JqZWN0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yJ3MgcHJvdG90eXBlIGlzIG5vdCBhbiBvYmplY3QuXCIpO3ZhciBmPWQoXCJjb25uZWN0ZWRDYWxsYmFja1wiKTt2YXIgaD1kKFwiZGlzY29ubmVjdGVkQ2FsbGJhY2tcIik7dmFyIGc9ZChcImFkb3B0ZWRDYWxsYmFja1wiKTt2YXIgaz1kKFwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIpO3ZhciBsPWIub2JzZXJ2ZWRBdHRyaWJ1dGVzfHxbXX1jYXRjaChtKXtyZXR1cm59ZmluYWxseXt0aGlzLlc9ITF9Yj17bG9jYWxOYW1lOmEsY29uc3RydWN0b3I6Yixjb25uZWN0ZWRDYWxsYmFjazpmLGRpc2Nvbm5lY3RlZENhbGxiYWNrOmgsYWRvcHRlZENhbGxiYWNrOmcsYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrOmssb2JzZXJ2ZWRBdHRyaWJ1dGVzOmwsY29uc3RydWN0aW9uU3RhY2s6W119O3ZjKHRoaXMuaCxhLGIpO3RoaXMuWS5wdXNoKGIpO1xudGhpcy5LfHwodGhpcy5LPSEwLHRoaXMuWChmdW5jdGlvbigpe3JldHVybiBEYyhjKX0pKX07ZnVuY3Rpb24gRGMoYSl7aWYoITEhPT1hLkspe2EuSz0hMTtmb3IodmFyIGI9YS5ZLGM9W10sZD1uZXcgTWFwLGU9MDtlPGIubGVuZ3RoO2UrKylkLnNldChiW2VdLmxvY2FsTmFtZSxbXSk7TihhLmgsZG9jdW1lbnQse29hOmZ1bmN0aW9uKGIpe2lmKHZvaWQgMD09PWIuX19DRV9zdGF0ZSl7dmFyIGU9Yi5sb2NhbE5hbWUsZj1kLmdldChlKTtmP2YucHVzaChiKTphLmguYS5nZXQoZSkmJmMucHVzaChiKX19fSk7Zm9yKGU9MDtlPGMubGVuZ3RoO2UrKyl5YyhhLmgsY1tlXSk7Zm9yKDswPGIubGVuZ3RoOyl7dmFyIGY9Yi5zaGlmdCgpO2U9Zi5sb2NhbE5hbWU7Zj1kLmdldChmLmxvY2FsTmFtZSk7Zm9yKHZhciBoPTA7aDxmLmxlbmd0aDtoKyspeWMoYS5oLGZbaF0pOyhlPWEuJC5nZXQoZSkpJiZDYyhlKX19fU8ucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtpZihhPXRoaXMuaC5hLmdldChhKSlyZXR1cm4gYS5jb25zdHJ1Y3Rvcn07XG5PLnByb3RvdHlwZS53aGVuRGVmaW5lZD1mdW5jdGlvbihhKXtpZighc2MoYSkpcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBTeW50YXhFcnJvcihcIidcIithK1wiJyBpcyBub3QgYSB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lLlwiKSk7dmFyIGI9dGhpcy4kLmdldChhKTtpZihiKXJldHVybiBiLmM7Yj1uZXcgQmM7dGhpcy4kLnNldChhLGIpO3RoaXMuaC5hLmdldChhKSYmIXRoaXMuWS5zb21lKGZ1bmN0aW9uKGIpe3JldHVybiBiLmxvY2FsTmFtZT09PWF9KSYmQ2MoYik7cmV0dXJuIGIuY307Ty5wcm90b3R5cGUuTGE9ZnVuY3Rpb24oYSl7QWModGhpcy54YSk7dmFyIGI9dGhpcy5YO3RoaXMuWD1mdW5jdGlvbihjKXtyZXR1cm4gYShmdW5jdGlvbigpe3JldHVybiBiKGMpfSl9fTt3aW5kb3cuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5PU87Ty5wcm90b3R5cGUuZGVmaW5lPU8ucHJvdG90eXBlLmRlZmluZTtPLnByb3RvdHlwZS5nZXQ9Ty5wcm90b3R5cGUuZ2V0O1xuTy5wcm90b3R5cGUud2hlbkRlZmluZWQ9Ty5wcm90b3R5cGUud2hlbkRlZmluZWQ7Ty5wcm90b3R5cGUucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaz1PLnByb3RvdHlwZS5MYTt2YXIgRWM9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50LEZjPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudE5TLEdjPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSxIYz13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLnByZXBlbmQsSWM9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5hcHBlbmQsSmM9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnByZXBlbmQsS2M9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLmFwcGVuZCxMYz13aW5kb3cuTm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlLE1jPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCxOYz13aW5kb3cuTm9kZS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlLE9jPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCxQYz13aW5kb3cuTm9kZS5wcm90b3R5cGUucmVwbGFjZUNoaWxkLFFjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93Lk5vZGUucHJvdG90eXBlLFxuXCJ0ZXh0Q29udGVudFwiKSxSYz13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93LFNjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpLFRjPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUsVWM9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSxWYz13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlLFdjPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOUyxYYz13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlTlMsWWM9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZU5TLFpjPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQsJGM9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnByZXBlbmQsYWQ9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCxcbmJkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5iZWZvcmUsY2Q9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFmdGVyLGRkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aCxlZD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLGZkPXdpbmRvdy5IVE1MRWxlbWVudCxnZD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksaGQ9d2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQ7dmFyIGlkPW5ldyBmdW5jdGlvbigpe307ZnVuY3Rpb24gamQoKXt2YXIgYT1QO3dpbmRvdy5IVE1MRWxlbWVudD1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXt2YXIgYj10aGlzLmNvbnN0cnVjdG9yLGQ9YS5sLmdldChiKTtpZighZCl0aHJvdyBFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBiZWluZyBjb25zdHJ1Y3RlZCB3YXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgY3VzdG9tRWxlbWVudHNgLlwiKTt2YXIgZT1kLmNvbnN0cnVjdGlvblN0YWNrO2lmKDA9PT1lLmxlbmd0aClyZXR1cm4gZT1FYy5jYWxsKGRvY3VtZW50LGQubG9jYWxOYW1lKSxPYmplY3Quc2V0UHJvdG90eXBlT2YoZSxiLnByb3RvdHlwZSksZS5fX0NFX3N0YXRlPTEsZS5fX0NFX2RlZmluaXRpb249ZCxhLmIoZSksZTtkPWUubGVuZ3RoLTE7dmFyIGY9ZVtkXTtpZihmPT09aWQpdGhyb3cgRXJyb3IoXCJUaGUgSFRNTEVsZW1lbnQgY29uc3RydWN0b3Igd2FzIGVpdGhlciBjYWxsZWQgcmVlbnRyYW50bHkgZm9yIHRoaXMgY29uc3RydWN0b3Igb3IgY2FsbGVkIG11bHRpcGxlIHRpbWVzLlwiKTtcbmVbZF09aWQ7T2JqZWN0LnNldFByb3RvdHlwZU9mKGYsYi5wcm90b3R5cGUpO2EuYihmKTtyZXR1cm4gZn1iLnByb3RvdHlwZT1mZC5wcm90b3R5cGU7cmV0dXJuIGJ9KCl9O2Z1bmN0aW9uIGtkKGEsYixjKXtmdW5jdGlvbiBkKGIpe3JldHVybiBmdW5jdGlvbihjKXtmb3IodmFyIGQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDsrK2UpZFtlLTBdPWFyZ3VtZW50c1tlXTtlPVtdO2Zvcih2YXIgZj1bXSxsPTA7bDxkLmxlbmd0aDtsKyspe3ZhciBtPWRbbF07bSBpbnN0YW5jZW9mIEVsZW1lbnQmJkgobSkmJmYucHVzaChtKTtpZihtIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3IobT1tLmZpcnN0Q2hpbGQ7bTttPW0ubmV4dFNpYmxpbmcpZS5wdXNoKG0pO2Vsc2UgZS5wdXNoKG0pfWIuYXBwbHkodGhpcyxkKTtmb3IoZD0wO2Q8Zi5sZW5ndGg7ZCsrKU0oYSxmW2RdKTtpZihIKHRoaXMpKWZvcihkPTA7ZDxlLmxlbmd0aDtkKyspZj1lW2RdLGYgaW5zdGFuY2VvZiBFbGVtZW50JiZMKGEsZil9fXZvaWQgMCE9PWMuUCYmKGIucHJlcGVuZD1kKGMuUCkpO3ZvaWQgMCE9PWMuYXBwZW5kJiYoYi5hcHBlbmQ9ZChjLmFwcGVuZCkpfTtmdW5jdGlvbiBsZCgpe3ZhciBhPVA7SyhEb2N1bWVudC5wcm90b3R5cGUsXCJjcmVhdGVFbGVtZW50XCIsZnVuY3Rpb24oYil7aWYodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5KXt2YXIgYz1hLmEuZ2V0KGIpO2lmKGMpcmV0dXJuIG5ldyBjLmNvbnN0cnVjdG9yfWI9RWMuY2FsbCh0aGlzLGIpO2EuYihiKTtyZXR1cm4gYn0pO0soRG9jdW1lbnQucHJvdG90eXBlLFwiaW1wb3J0Tm9kZVwiLGZ1bmN0aW9uKGIsYyl7Yj1HYy5jYWxsKHRoaXMsYixjKTt0aGlzLl9fQ0VfaGFzUmVnaXN0cnk/TihhLGIpOnhjKGEsYik7cmV0dXJuIGJ9KTtLKERvY3VtZW50LnByb3RvdHlwZSxcImNyZWF0ZUVsZW1lbnROU1wiLGZ1bmN0aW9uKGIsYyl7aWYodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5JiYobnVsbD09PWJ8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09Yikpe3ZhciBkPWEuYS5nZXQoYyk7aWYoZClyZXR1cm4gbmV3IGQuY29uc3RydWN0b3J9Yj1GYy5jYWxsKHRoaXMsYixjKTthLmIoYik7cmV0dXJuIGJ9KTtcbmtkKGEsRG9jdW1lbnQucHJvdG90eXBlLHtQOkhjLGFwcGVuZDpJY30pfTtmdW5jdGlvbiBtZCgpe3ZhciBhPVA7ZnVuY3Rpb24gYihiLGQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShiLFwidGV4dENvbnRlbnRcIix7ZW51bWVyYWJsZTpkLmVudW1lcmFibGUsY29uZmlndXJhYmxlOiEwLGdldDpkLmdldCxzZXQ6ZnVuY3Rpb24oYil7aWYodGhpcy5ub2RlVHlwZT09PU5vZGUuVEVYVF9OT0RFKWQuc2V0LmNhbGwodGhpcyxiKTtlbHNle3ZhciBjPXZvaWQgMDtpZih0aGlzLmZpcnN0Q2hpbGQpe3ZhciBlPXRoaXMuY2hpbGROb2RlcyxnPWUubGVuZ3RoO2lmKDA8ZyYmSCh0aGlzKSl7Yz1BcnJheShnKTtmb3IodmFyIGs9MDtrPGc7aysrKWNba109ZVtrXX19ZC5zZXQuY2FsbCh0aGlzLGIpO2lmKGMpZm9yKGI9MDtiPGMubGVuZ3RoO2IrKylNKGEsY1tiXSl9fX0pfUsoTm9kZS5wcm90b3R5cGUsXCJpbnNlcnRCZWZvcmVcIixmdW5jdGlvbihiLGQpe2lmKGIgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYi5jaGlsZE5vZGVzKTtcbmI9TmMuY2FsbCh0aGlzLGIsZCk7aWYoSCh0aGlzKSlmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKUwoYSxjW2RdKTtyZXR1cm4gYn1jPUgoYik7ZD1OYy5jYWxsKHRoaXMsYixkKTtjJiZNKGEsYik7SCh0aGlzKSYmTChhLGIpO3JldHVybiBkfSk7SyhOb2RlLnByb3RvdHlwZSxcImFwcGVuZENoaWxkXCIsZnVuY3Rpb24oYil7aWYoYiBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShiLmNoaWxkTm9kZXMpO2I9TWMuY2FsbCh0aGlzLGIpO2lmKEgodGhpcykpZm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspTChhLGNbZV0pO3JldHVybiBifWM9SChiKTtlPU1jLmNhbGwodGhpcyxiKTtjJiZNKGEsYik7SCh0aGlzKSYmTChhLGIpO3JldHVybiBlfSk7SyhOb2RlLnByb3RvdHlwZSxcImNsb25lTm9kZVwiLGZ1bmN0aW9uKGIpe2I9TGMuY2FsbCh0aGlzLGIpO3RoaXMub3duZXJEb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5P04oYSxiKTpcbnhjKGEsYik7cmV0dXJuIGJ9KTtLKE5vZGUucHJvdG90eXBlLFwicmVtb3ZlQ2hpbGRcIixmdW5jdGlvbihiKXt2YXIgYz1IKGIpLGU9T2MuY2FsbCh0aGlzLGIpO2MmJk0oYSxiKTtyZXR1cm4gZX0pO0soTm9kZS5wcm90b3R5cGUsXCJyZXBsYWNlQ2hpbGRcIixmdW5jdGlvbihiLGQpe2lmKGIgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYi5jaGlsZE5vZGVzKTtiPVBjLmNhbGwodGhpcyxiLGQpO2lmKEgodGhpcykpZm9yKE0oYSxkKSxkPTA7ZDxjLmxlbmd0aDtkKyspTChhLGNbZF0pO3JldHVybiBifWM9SChiKTt2YXIgZj1QYy5jYWxsKHRoaXMsYixkKSxoPUgodGhpcyk7aCYmTShhLGQpO2MmJk0oYSxiKTtoJiZMKGEsYik7cmV0dXJuIGZ9KTtRYyYmUWMuZ2V0P2IoTm9kZS5wcm90b3R5cGUsUWMpOndjKGEsZnVuY3Rpb24oYSl7YihhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9XG5bXSxiPTA7Yjx0aGlzLmNoaWxkTm9kZXMubGVuZ3RoO2IrKylhLnB1c2godGhpcy5jaGlsZE5vZGVzW2JdLnRleHRDb250ZW50KTtyZXR1cm4gYS5qb2luKFwiXCIpfSxzZXQ6ZnVuY3Rpb24oYSl7Zm9yKDt0aGlzLmZpcnN0Q2hpbGQ7KU9jLmNhbGwodGhpcyx0aGlzLmZpcnN0Q2hpbGQpO01jLmNhbGwodGhpcyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSl9fSl9KX07ZnVuY3Rpb24gbmQoYSl7dmFyIGI9RWxlbWVudC5wcm90b3R5cGU7ZnVuY3Rpb24gYyhiKXtyZXR1cm4gZnVuY3Rpb24oYyl7Zm9yKHZhciBkPVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7KytlKWRbZS0wXT1hcmd1bWVudHNbZV07ZT1bXTtmb3IodmFyIGc9W10saz0wO2s8ZC5sZW5ndGg7aysrKXt2YXIgbD1kW2tdO2wgaW5zdGFuY2VvZiBFbGVtZW50JiZIKGwpJiZnLnB1c2gobCk7aWYobCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKGw9bC5maXJzdENoaWxkO2w7bD1sLm5leHRTaWJsaW5nKWUucHVzaChsKTtlbHNlIGUucHVzaChsKX1iLmFwcGx5KHRoaXMsZCk7Zm9yKGQ9MDtkPGcubGVuZ3RoO2QrKylNKGEsZ1tkXSk7aWYoSCh0aGlzKSlmb3IoZD0wO2Q8ZS5sZW5ndGg7ZCsrKWc9ZVtkXSxnIGluc3RhbmNlb2YgRWxlbWVudCYmTChhLGcpfX12b2lkIDAhPT1iZCYmKGIuYmVmb3JlPWMoYmQpKTt2b2lkIDAhPT1iZCYmKGIuYWZ0ZXI9YyhjZCkpO3ZvaWQgMCE9PVxuZGQmJksoYixcInJlcGxhY2VXaXRoXCIsZnVuY3Rpb24oYil7Zm9yKHZhciBjPVtdLGQ9MDtkPGFyZ3VtZW50cy5sZW5ndGg7KytkKWNbZC0wXT1hcmd1bWVudHNbZF07ZD1bXTtmb3IodmFyIGg9W10sZz0wO2c8Yy5sZW5ndGg7ZysrKXt2YXIgaz1jW2ddO2sgaW5zdGFuY2VvZiBFbGVtZW50JiZIKGspJiZoLnB1c2goayk7aWYoayBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKGs9ay5maXJzdENoaWxkO2s7az1rLm5leHRTaWJsaW5nKWQucHVzaChrKTtlbHNlIGQucHVzaChrKX1nPUgodGhpcyk7ZGQuYXBwbHkodGhpcyxjKTtmb3IoYz0wO2M8aC5sZW5ndGg7YysrKU0oYSxoW2NdKTtpZihnKWZvcihNKGEsdGhpcyksYz0wO2M8ZC5sZW5ndGg7YysrKWg9ZFtjXSxoIGluc3RhbmNlb2YgRWxlbWVudCYmTChhLGgpfSk7dm9pZCAwIT09ZWQmJksoYixcInJlbW92ZVwiLGZ1bmN0aW9uKCl7dmFyIGI9SCh0aGlzKTtlZC5jYWxsKHRoaXMpO2ImJk0oYSx0aGlzKX0pfTtmdW5jdGlvbiBvZCgpe3ZhciBhPVA7ZnVuY3Rpb24gYihiLGMpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShiLFwiaW5uZXJIVE1MXCIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlLGNvbmZpZ3VyYWJsZTohMCxnZXQ6Yy5nZXQsc2V0OmZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMsZT12b2lkIDA7SCh0aGlzKSYmKGU9W10sSSh0aGlzLGZ1bmN0aW9uKGEpe2EhPT1kJiZlLnB1c2goYSl9KSk7Yy5zZXQuY2FsbCh0aGlzLGIpO2lmKGUpZm9yKHZhciBmPTA7ZjxlLmxlbmd0aDtmKyspe3ZhciBoPWVbZl07MT09PWguX19DRV9zdGF0ZSYmYS5kaXNjb25uZWN0ZWRDYWxsYmFjayhoKX10aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT9OKGEsdGhpcyk6eGMoYSx0aGlzKTtyZXR1cm4gYn19KX1mdW5jdGlvbiBjKGIsYyl7SyhiLFwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50XCIsZnVuY3Rpb24oYixkKXt2YXIgZT1IKGQpO2I9Yy5jYWxsKHRoaXMsYixkKTtlJiZNKGEsZCk7SChiKSYmTChhLGQpO1xucmV0dXJuIGJ9KX1SYyYmSyhFbGVtZW50LnByb3RvdHlwZSxcImF0dGFjaFNoYWRvd1wiLGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9fQ0Vfc2hhZG93Um9vdD1hPVJjLmNhbGwodGhpcyxhKX0pO2lmKFNjJiZTYy5nZXQpYihFbGVtZW50LnByb3RvdHlwZSxTYyk7ZWxzZSBpZihnZCYmZ2QuZ2V0KWIoSFRNTEVsZW1lbnQucHJvdG90eXBlLGdkKTtlbHNle3ZhciBkPUVjLmNhbGwoZG9jdW1lbnQsXCJkaXZcIik7d2MoYSxmdW5jdGlvbihhKXtiKGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBMYy5jYWxsKHRoaXMsITApLmlubmVySFRNTH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPVwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lP3RoaXMuY29udGVudDp0aGlzO2ZvcihkLmlubmVySFRNTD1hOzA8Yi5jaGlsZE5vZGVzLmxlbmd0aDspT2MuY2FsbChiLGIuY2hpbGROb2Rlc1swXSk7Zm9yKDswPGQuY2hpbGROb2Rlcy5sZW5ndGg7KU1jLmNhbGwoYixcbmQuY2hpbGROb2Rlc1swXSl9fSl9KX1LKEVsZW1lbnQucHJvdG90eXBlLFwic2V0QXR0cmlidXRlXCIsZnVuY3Rpb24oYixjKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBVYy5jYWxsKHRoaXMsYixjKTt2YXIgZD1UYy5jYWxsKHRoaXMsYik7VWMuY2FsbCh0aGlzLGIsYyk7Yz1UYy5jYWxsKHRoaXMsYik7YS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxiLGQsYyxudWxsKX0pO0soRWxlbWVudC5wcm90b3R5cGUsXCJzZXRBdHRyaWJ1dGVOU1wiLGZ1bmN0aW9uKGIsYyxkKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBYYy5jYWxsKHRoaXMsYixjLGQpO3ZhciBlPVdjLmNhbGwodGhpcyxiLGMpO1hjLmNhbGwodGhpcyxiLGMsZCk7ZD1XYy5jYWxsKHRoaXMsYixjKTthLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGMsZSxkLGIpfSk7SyhFbGVtZW50LnByb3RvdHlwZSxcInJlbW92ZUF0dHJpYnV0ZVwiLGZ1bmN0aW9uKGIpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIFZjLmNhbGwodGhpcyxcbmIpO3ZhciBjPVRjLmNhbGwodGhpcyxiKTtWYy5jYWxsKHRoaXMsYik7bnVsbCE9PWMmJmEuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYixjLG51bGwsbnVsbCl9KTtLKEVsZW1lbnQucHJvdG90eXBlLFwicmVtb3ZlQXR0cmlidXRlTlNcIixmdW5jdGlvbihiLGMpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIFljLmNhbGwodGhpcyxiLGMpO3ZhciBkPVdjLmNhbGwodGhpcyxiLGMpO1ljLmNhbGwodGhpcyxiLGMpO3ZhciBlPVdjLmNhbGwodGhpcyxiLGMpO2QhPT1lJiZhLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGMsZCxlLGIpfSk7aGQ/YyhIVE1MRWxlbWVudC5wcm90b3R5cGUsaGQpOlpjP2MoRWxlbWVudC5wcm90b3R5cGUsWmMpOmNvbnNvbGUud2FybihcIkN1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjaW5zZXJ0QWRqYWNlbnRFbGVtZW50YCB3YXMgbm90IHBhdGNoZWQuXCIpO2tkKGEsRWxlbWVudC5wcm90b3R5cGUse1A6JGMsYXBwZW5kOmFkfSk7bmQoYSl9XG47dmFyIHBkPXdpbmRvdy5jdXN0b21FbGVtZW50cztpZighcGR8fHBkLmZvcmNlUG9seWZpbGx8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHBkLmRlZmluZXx8XCJmdW5jdGlvblwiIT10eXBlb2YgcGQuZ2V0KXt2YXIgUD1uZXcgdWM7amQoKTtsZCgpO2tkKFAsRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUse1A6SmMsYXBwZW5kOktjfSk7bWQoKTtvZCgpO2RvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnk9ITA7dmFyIGN1c3RvbUVsZW1lbnRzPW5ldyBPKFApO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csXCJjdXN0b21FbGVtZW50c1wiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZTpjdXN0b21FbGVtZW50c30pfTsvKlxuXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuZnVuY3Rpb24gcWQoKXt0aGlzLmVuZD10aGlzLnN0YXJ0PTA7dGhpcy5ydWxlcz10aGlzLnBhcmVudD10aGlzLnByZXZpb3VzPW51bGw7dGhpcy5jc3NUZXh0PXRoaXMucGFyc2VkQ3NzVGV4dD1cIlwiO3RoaXMuYXRSdWxlPSExO3RoaXMudHlwZT0wO3RoaXMucGFyc2VkU2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj10aGlzLmtleWZyYW1lc05hbWU9XCJcIn1cbmZ1bmN0aW9uIHJkKGEpe2E9YS5yZXBsYWNlKHNkLFwiXCIpLnJlcGxhY2UodGQsXCJcIik7dmFyIGI9dWQsYz1hLGQ9bmV3IHFkO2Quc3RhcnQ9MDtkLmVuZD1jLmxlbmd0aDtmb3IodmFyIGU9ZCxmPTAsaD1jLmxlbmd0aDtmPGg7ZisrKWlmKFwie1wiPT09Y1tmXSl7ZS5ydWxlc3x8KGUucnVsZXM9W10pO3ZhciBnPWUsaz1nLnJ1bGVzW2cucnVsZXMubGVuZ3RoLTFdfHxudWxsO2U9bmV3IHFkO2Uuc3RhcnQ9ZisxO2UucGFyZW50PWc7ZS5wcmV2aW91cz1rO2cucnVsZXMucHVzaChlKX1lbHNlXCJ9XCI9PT1jW2ZdJiYoZS5lbmQ9ZisxLGU9ZS5wYXJlbnR8fGQpO3JldHVybiBiKGQsYSl9XG5mdW5jdGlvbiB1ZChhLGIpe3ZhciBjPWIuc3Vic3RyaW5nKGEuc3RhcnQsYS5lbmQtMSk7YS5wYXJzZWRDc3NUZXh0PWEuY3NzVGV4dD1jLnRyaW0oKTthLnBhcmVudCYmKGM9Yi5zdWJzdHJpbmcoYS5wcmV2aW91cz9hLnByZXZpb3VzLmVuZDphLnBhcmVudC5zdGFydCxhLnN0YXJ0LTEpLGM9dmQoYyksYz1jLnJlcGxhY2Uod2QsXCIgXCIpLGM9Yy5zdWJzdHJpbmcoYy5sYXN0SW5kZXhPZihcIjtcIikrMSksYz1hLnBhcnNlZFNlbGVjdG9yPWEuc2VsZWN0b3I9Yy50cmltKCksYS5hdFJ1bGU9MD09PWMuaW5kZXhPZihcIkBcIiksYS5hdFJ1bGU/MD09PWMuaW5kZXhPZihcIkBtZWRpYVwiKT9hLnR5cGU9eGQ6Yy5tYXRjaCh5ZCkmJihhLnR5cGU9emQsYS5rZXlmcmFtZXNOYW1lPWEuc2VsZWN0b3Iuc3BsaXQod2QpLnBvcCgpKTphLnR5cGU9MD09PWMuaW5kZXhPZihcIi0tXCIpP0FkOkJkKTtpZihjPWEucnVsZXMpZm9yKHZhciBkPTAsZT1jLmxlbmd0aCxmO2Q8ZSYmKGY9Y1tkXSk7ZCsrKXVkKGYsXG5iKTtyZXR1cm4gYX1mdW5jdGlvbiB2ZChhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXFxcKFswLTlhLWZdezEsNn0pXFxzL2dpLGZ1bmN0aW9uKGEsYyl7YT1jO2ZvcihjPTYtYS5sZW5ndGg7Yy0tOylhPVwiMFwiK2E7cmV0dXJuXCJcXFxcXCIrYX0pfVxuZnVuY3Rpb24gQ2QoYSxiLGMpe2M9dm9pZCAwPT09Yz9cIlwiOmM7dmFyIGQ9XCJcIjtpZihhLmNzc1RleHR8fGEucnVsZXMpe3ZhciBlPWEucnVsZXMsZjtpZihmPWUpZj1lWzBdLGY9IShmJiZmLnNlbGVjdG9yJiYwPT09Zi5zZWxlY3Rvci5pbmRleE9mKFwiLS1cIikpO2lmKGYpe2Y9MDtmb3IodmFyIGg9ZS5sZW5ndGgsZztmPGgmJihnPWVbZl0pO2YrKylkPUNkKGcsYixkKX1lbHNlIGI/Yj1hLmNzc1RleHQ6KGI9YS5jc3NUZXh0LGI9Yi5yZXBsYWNlKERkLFwiXCIpLnJlcGxhY2UoRWQsXCJcIiksYj1iLnJlcGxhY2UoRmQsXCJcIikucmVwbGFjZShHZCxcIlwiKSksKGQ9Yi50cmltKCkpJiYoZD1cIiAgXCIrZCtcIlxcblwiKX1kJiYoYS5zZWxlY3RvciYmKGMrPWEuc2VsZWN0b3IrXCIge1xcblwiKSxjKz1kLGEuc2VsZWN0b3ImJihjKz1cIn1cXG5cXG5cIikpO3JldHVybiBjfVxudmFyIEJkPTEsemQ9Nyx4ZD00LEFkPTFFMyxzZD0vXFwvXFwqW14qXSpcXCorKFteLypdW14qXSpcXCorKSpcXC8vZ2ltLHRkPS9AaW1wb3J0W147XSo7L2dpbSxEZD0vKD86XlteO1xcLVxcc31dKyk/LS1bXjt7fV0qPzpbXnt9O10qPyg/Ols7XFxuXXwkKS9naW0sRWQ9Lyg/Ol5bXjtcXC1cXHN9XSspPy0tW147e31dKj86W157fTtdKj97W159XSo/fSg/Ols7XFxuXXwkKT8vZ2ltLEZkPS9AYXBwbHlcXHMqXFwoP1teKTtdKlxcKT9cXHMqKD86WztcXG5dfCQpPy9naW0sR2Q9L1teOzpdKj86W147XSo/dmFyXFwoW147XSpcXCkoPzpbO1xcbl18JCk/L2dpbSx5ZD0vXkBbXlxcc10qa2V5ZnJhbWVzLyx3ZD0vXFxzKy9nO3ZhciBRPSEod2luZG93LlNoYWR5RE9NJiZ3aW5kb3cuU2hhZHlET00uaW5Vc2UpLEhkO2Z1bmN0aW9uIElkKGEpe0hkPWEmJmEuc2hpbWNzc3Byb3BlcnRpZXM/ITE6UXx8IShuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdFxcLzYwMXxFZGdlXFwvMTUvKXx8IXdpbmRvdy5DU1N8fCFDU1Muc3VwcG9ydHN8fCFDU1Muc3VwcG9ydHMoXCJib3gtc2hhZG93XCIsXCIwIDAgMCB2YXIoLS1mb28pXCIpKX13aW5kb3cuU2hhZHlDU1MmJnZvaWQgMCE9PXdpbmRvdy5TaGFkeUNTUy5uYXRpdmVDc3M/SGQ9d2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzczp3aW5kb3cuU2hhZHlDU1M/KElkKHdpbmRvdy5TaGFkeUNTUyksd2luZG93LlNoYWR5Q1NTPXZvaWQgMCk6SWQod2luZG93LldlYkNvbXBvbmVudHMmJndpbmRvdy5XZWJDb21wb25lbnRzLmZsYWdzKTt2YXIgUj1IZDt2YXIgSmQ9Lyg/Ol58WztcXHN7XVxccyopKC0tW1xcdy1dKj8pXFxzKjpcXHMqKD86KCg/OicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoW14pXSo/XFwpfFtefTt7XSkrKXxcXHsoW159XSopXFx9KD86KD89WztcXHN9XSl8JCkpL2dpLExkPS8oPzpefFxcVyspQGFwcGx5XFxzKlxcKD8oW14pO1xcbl0qKVxcKT8vZ2ksTWQ9LygtLVtcXHctXSspXFxzKihbOiw7KV18JCkvZ2ksTmQ9LyhhbmltYXRpb25cXHMqOil8KGFuaW1hdGlvbi1uYW1lXFxzKjopLyxPZD0vQG1lZGlhXFxzKC4qKS8sUGQ9L1xce1tefV0qXFx9L2c7ZnVuY3Rpb24gUyhhLGIpe2lmKCFhKXJldHVyblwiXCI7XCJzdHJpbmdcIj09PXR5cGVvZiBhJiYoYT1yZChhKSk7YiYmVChhLGIpO3JldHVybiBDZChhLFIpfWZ1bmN0aW9uIFFkKGEpeyFhLl9fY3NzUnVsZXMmJmEudGV4dENvbnRlbnQmJihhLl9fY3NzUnVsZXM9cmQoYS50ZXh0Q29udGVudCkpO3JldHVybiBhLl9fY3NzUnVsZXN8fG51bGx9ZnVuY3Rpb24gUmQoYSl7cmV0dXJuISFhLnBhcmVudCYmYS5wYXJlbnQudHlwZT09PXpkfWZ1bmN0aW9uIFQoYSxiLGMsZCl7aWYoYSl7dmFyIGU9ITEsZj1hLnR5cGU7aWYoZCYmZj09PXhkKXt2YXIgaD1hLnNlbGVjdG9yLm1hdGNoKE9kKTtoJiYod2luZG93Lm1hdGNoTWVkaWEoaFsxXSkubWF0Y2hlc3x8KGU9ITApKX1mPT09QmQ/YihhKTpjJiZmPT09emQ/YyhhKTpmPT09QWQmJihlPSEwKTtpZigoYT1hLnJ1bGVzKSYmIWUpe2U9MDtmPWEubGVuZ3RoO2Zvcih2YXIgZztlPGYmJihnPWFbZV0pO2UrKylUKGcsYixjLGQpfX19XG5mdW5jdGlvbiBTZChhLGIsYyxkKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7YiYmZS5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLGIpO2UudGV4dENvbnRlbnQ9YTtUZChlLGMsZCk7cmV0dXJuIGV9dmFyIFU9bnVsbDtmdW5jdGlvbiBUZChhLGIsYyl7Yj1ifHxkb2N1bWVudC5oZWFkO2IuaW5zZXJ0QmVmb3JlKGEsYyYmYy5uZXh0U2libGluZ3x8Yi5maXJzdENoaWxkKTtVP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oVSk9PT1Ob2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORyYmKFU9YSk6VT1hfVxuZnVuY3Rpb24gVWQoYSxiKXt2YXIgYz1hLmluZGV4T2YoXCJ2YXIoXCIpO2lmKC0xPT09YylyZXR1cm4gYihhLFwiXCIsXCJcIixcIlwiKTthOnt2YXIgZD0wO3ZhciBlPWMrMztmb3IodmFyIGY9YS5sZW5ndGg7ZTxmO2UrKylpZihcIihcIj09PWFbZV0pZCsrO2Vsc2UgaWYoXCIpXCI9PT1hW2VdJiYwPT09LS1kKWJyZWFrIGE7ZT0tMX1kPWEuc3Vic3RyaW5nKGMrNCxlKTtjPWEuc3Vic3RyaW5nKDAsYyk7YT1VZChhLnN1YnN0cmluZyhlKzEpLGIpO2U9ZC5pbmRleE9mKFwiLFwiKTtyZXR1cm4tMT09PWU/YihjLGQudHJpbSgpLFwiXCIsYSk6YihjLGQuc3Vic3RyaW5nKDAsZSkudHJpbSgpLGQuc3Vic3RyaW5nKGUrMSkudHJpbSgpLGEpfWZ1bmN0aW9uIFZkKGEsYil7UT9hLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYik6d2luZG93LlNoYWR5RE9NLm5hdGl2ZU1ldGhvZHMuc2V0QXR0cmlidXRlLmNhbGwoYSxcImNsYXNzXCIsYil9XG5mdW5jdGlvbiBWKGEpe3ZhciBiPWEubG9jYWxOYW1lLGM9XCJcIjtiPy0xPGIuaW5kZXhPZihcIi1cIil8fChjPWIsYj1hLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJpc1wiKXx8XCJcIik6KGI9YS5pcyxjPWEuZXh0ZW5kcyk7cmV0dXJue2lzOmIsSjpjfX07ZnVuY3Rpb24gV2QoKXt9ZnVuY3Rpb24gWGQoYSxiLGMpe3ZhciBkPVc7YS5fX3N0eWxlU2NvcGVkP2EuX19zdHlsZVNjb3BlZD1udWxsOllkKGQsYSxifHxcIlwiLGMpfWZ1bmN0aW9uIFlkKGEsYixjLGQpe2Iubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmWmQoYixjLGQpO2lmKGI9XCJ0ZW1wbGF0ZVwiPT09Yi5sb2NhbE5hbWU/KGIuY29udGVudHx8Yi5ZYSkuY2hpbGROb2RlczpiLmNoaWxkcmVufHxiLmNoaWxkTm9kZXMpZm9yKHZhciBlPTA7ZTxiLmxlbmd0aDtlKyspWWQoYSxiW2VdLGMsZCl9XG5mdW5jdGlvbiBaZChhLGIsYyl7aWYoYilpZihhLmNsYXNzTGlzdCljPyhhLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHlsZS1zY29wZVwiKSxhLmNsYXNzTGlzdC5yZW1vdmUoYikpOihhLmNsYXNzTGlzdC5hZGQoXCJzdHlsZS1zY29wZVwiKSxhLmNsYXNzTGlzdC5hZGQoYikpO2Vsc2UgaWYoYS5nZXRBdHRyaWJ1dGUpe3ZhciBkPWEuZ2V0QXR0cmlidXRlKCRkKTtjP2QmJihiPWQucmVwbGFjZShcInN0eWxlLXNjb3BlXCIsXCJcIikucmVwbGFjZShiLFwiXCIpLFZkKGEsYikpOlZkKGEsKGQ/ZCtcIiBcIjpcIlwiKStcInN0eWxlLXNjb3BlIFwiK2IpfX1mdW5jdGlvbiBhZShhLGIsYyl7dmFyIGQ9VyxlPWEuX19jc3NCdWlsZDtRfHxcInNoYWR5XCI9PT1lP2I9UyhiLGMpOihhPVYoYSksYj1iZShkLGIsYS5pcyxhLkosYykrXCJcXG5cXG5cIik7cmV0dXJuIGIudHJpbSgpfVxuZnVuY3Rpb24gYmUoYSxiLGMsZCxlKXt2YXIgZj1jZShjLGQpO2M9Yz9kZStjOlwiXCI7cmV0dXJuIFMoYixmdW5jdGlvbihiKXtiLmN8fChiLnNlbGVjdG9yPWIuaj1lZShhLGIsYS5iLGMsZiksYi5jPSEwKTtlJiZlKGIsYyxmKX0pfWZ1bmN0aW9uIGNlKGEsYil7cmV0dXJuIGI/XCJbaXM9XCIrYStcIl1cIjphfWZ1bmN0aW9uIGVlKGEsYixjLGQsZSl7dmFyIGY9Yi5zZWxlY3Rvci5zcGxpdChmZSk7aWYoIVJkKGIpKXtiPTA7Zm9yKHZhciBoPWYubGVuZ3RoLGc7YjxoJiYoZz1mW2JdKTtiKyspZltiXT1jLmNhbGwoYSxnLGQsZSl9cmV0dXJuIGYuam9pbihmZSl9ZnVuY3Rpb24gZ2UoYSl7cmV0dXJuIGEucmVwbGFjZShoZSxmdW5jdGlvbihhLGMsZCl7LTE8ZC5pbmRleE9mKFwiK1wiKT9kPWQucmVwbGFjZSgvXFwrL2csXCJfX19cIik6LTE8ZC5pbmRleE9mKFwiX19fXCIpJiYoZD1kLnJlcGxhY2UoL19fXy9nLFwiK1wiKSk7cmV0dXJuXCI6XCIrYytcIihcIitkK1wiKVwifSl9XG5XZC5wcm90b3R5cGUuYj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ITE7YT1hLnRyaW0oKTt2YXIgZT1oZS50ZXN0KGEpO2UmJihhPWEucmVwbGFjZShoZSxmdW5jdGlvbihhLGIsYyl7cmV0dXJuXCI6XCIrYitcIihcIitjLnJlcGxhY2UoL1xccy9nLFwiXCIpK1wiKVwifSksYT1nZShhKSk7YT1hLnJlcGxhY2UoaWUsamUrXCIgJDFcIik7YT1hLnJlcGxhY2Uoa2UsZnVuY3Rpb24oYSxlLGcpe2R8fChhPWxlKGcsZSxiLGMpLGQ9ZHx8YS5zdG9wLGU9YS5CYSxnPWEudmFsdWUpO3JldHVybiBlK2d9KTtlJiYoYT1nZShhKSk7cmV0dXJuIGF9O1xuZnVuY3Rpb24gbGUoYSxiLGMsZCl7dmFyIGU9YS5pbmRleE9mKG1lKTswPD1hLmluZGV4T2YoamUpP2E9bmUoYSxkKTowIT09ZSYmKGE9Yz9vZShhLGMpOmEpO2M9ITE7MDw9ZSYmKGI9XCJcIixjPSEwKTtpZihjKXt2YXIgZj0hMDtjJiYoYT1hLnJlcGxhY2UocGUsZnVuY3Rpb24oYSxiKXtyZXR1cm5cIiA+IFwiK2J9KSl9YT1hLnJlcGxhY2UocWUsZnVuY3Rpb24oYSxiLGMpe3JldHVybidbZGlyPVwiJytjKydcIl0gJytiK1wiLCBcIitiKydbZGlyPVwiJytjKydcIl0nfSk7cmV0dXJue3ZhbHVlOmEsQmE6YixzdG9wOmZ9fWZ1bmN0aW9uIG9lKGEsYil7YT1hLnNwbGl0KHJlKTthWzBdKz1iO3JldHVybiBhLmpvaW4ocmUpfVxuZnVuY3Rpb24gbmUoYSxiKXt2YXIgYz1hLm1hdGNoKHNlKTtyZXR1cm4oYz1jJiZjWzJdLnRyaW0oKXx8XCJcIik/Y1swXS5tYXRjaCh0ZSk/YS5yZXBsYWNlKHNlLGZ1bmN0aW9uKGEsYyxmKXtyZXR1cm4gYitmfSk6Yy5zcGxpdCh0ZSlbMF09PT1iP2M6dWU6YS5yZXBsYWNlKGplLGIpfWZ1bmN0aW9uIHZlKGEpe2Euc2VsZWN0b3I9PT13ZSYmKGEuc2VsZWN0b3I9XCJodG1sXCIpfVdkLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEpe3JldHVybiBhLm1hdGNoKG1lKT90aGlzLmIoYSx4ZSk6b2UoYS50cmltKCkseGUpfTtwLk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFdkLnByb3RvdHlwZSx7YTp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHlsZS1zY29wZVwifX19KTtcbnZhciBoZT0vOihudGhbLVxcd10rKVxcKChbXildKylcXCkvLHhlPVwiOm5vdCguc3R5bGUtc2NvcGUpXCIsZmU9XCIsXCIsa2U9LyhefFtcXHM+K35dKykoKD86XFxbLis/XFxdfFteXFxzPit+PVtdKSspL2csdGU9L1tbLjojKl0vLGplPVwiOmhvc3RcIix3ZT1cIjpyb290XCIsbWU9XCI6OnNsb3R0ZWRcIixpZT1uZXcgUmVnRXhwKFwiXihcIittZStcIilcIiksc2U9Lyg6aG9zdCkoPzpcXCgoKD86XFwoW14pKF0qXFwpfFteKShdKikrPylcXCkpLyxwZT0vKD86OjpzbG90dGVkKSg/OlxcKCgoPzpcXChbXikoXSpcXCl8W14pKF0qKSs/KVxcKSkvLHFlPS8oLiopOmRpclxcKCg/OihsdHJ8cnRsKSlcXCkvLGRlPVwiLlwiLHJlPVwiOlwiLCRkPVwiY2xhc3NcIix1ZT1cInNob3VsZF9ub3RfbWF0Y2hcIixXPW5ldyBXZDtmdW5jdGlvbiB5ZShhLGIsYyxkLGUpe3RoaXMudT1hfHxudWxsO3RoaXMuYj1ifHxudWxsO3RoaXMuYmE9Y3x8W107dGhpcy5CPW51bGw7dGhpcy5KPWV8fFwiXCI7dGhpcy5hPXRoaXMubz10aGlzLnY9bnVsbH1mdW5jdGlvbiBYKGEpe3JldHVybiBhP2EuX19zdHlsZUluZm86bnVsbH1mdW5jdGlvbiB6ZShhLGIpe3JldHVybiBhLl9fc3R5bGVJbmZvPWJ9eWUucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy51fTt5ZS5wcm90b3R5cGUuX2dldFN0eWxlUnVsZXM9eWUucHJvdG90eXBlLmM7dmFyIEFlLEJlPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZTtBZT1CZS5tYXRjaGVzfHxCZS5tYXRjaGVzU2VsZWN0b3J8fEJlLm1vek1hdGNoZXNTZWxlY3Rvcnx8QmUubXNNYXRjaGVzU2VsZWN0b3J8fEJlLm9NYXRjaGVzU2VsZWN0b3J8fEJlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjt2YXIgQ2U9bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChcIlRyaWRlbnRcIik7ZnVuY3Rpb24gRGUoKXt9ZnVuY3Rpb24gRWUoYSl7dmFyIGI9e30sYz1bXSxkPTA7VChhLGZ1bmN0aW9uKGEpe0ZlKGEpO2EuaW5kZXg9ZCsrO2E9YS5nLmNzc1RleHQ7Zm9yKHZhciBjO2M9TWQuZXhlYyhhKTspe3ZhciBlPWNbMV07XCI6XCIhPT1jWzJdJiYoYltlXT0hMCl9fSxmdW5jdGlvbihhKXtjLnB1c2goYSl9KTthLmI9YzthPVtdO2Zvcih2YXIgZSBpbiBiKWEucHVzaChlKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIEZlKGEpe2lmKCFhLmcpe3ZhciBiPXt9LGM9e307R2UoYSxjKSYmKGIucz1jLGEucnVsZXM9bnVsbCk7Yi5jc3NUZXh0PWEucGFyc2VkQ3NzVGV4dC5yZXBsYWNlKFBkLFwiXCIpLnJlcGxhY2UoSmQsXCJcIik7YS5nPWJ9fWZ1bmN0aW9uIEdlKGEsYil7dmFyIGM9YS5nO2lmKGMpe2lmKGMucylyZXR1cm4gT2JqZWN0LmFzc2lnbihiLGMucyksITB9ZWxzZXtjPWEucGFyc2VkQ3NzVGV4dDtmb3IodmFyIGQ7YT1KZC5leGVjKGMpOyl7ZD0oYVsyXXx8YVszXSkudHJpbSgpO2lmKFwiaW5oZXJpdFwiIT09ZHx8XCJ1bnNldFwiIT09ZCliW2FbMV0udHJpbSgpXT1kO2Q9ITB9cmV0dXJuIGR9fVxuZnVuY3Rpb24gSGUoYSxiLGMpe2ImJihiPTA8PWIuaW5kZXhPZihcIjtcIik/SWUoYSxiLGMpOlVkKGIsZnVuY3Rpb24oYixlLGYsaCl7aWYoIWUpcmV0dXJuIGIraDsoZT1IZShhLGNbZV0sYykpJiZcImluaXRpYWxcIiE9PWU/XCJhcHBseS1zaGltLWluaGVyaXRcIj09PWUmJihlPVwiaW5oZXJpdFwiKTplPUhlKGEsY1tmXXx8ZixjKXx8ZjtyZXR1cm4gYisoZXx8XCJcIikraH0pKTtyZXR1cm4gYiYmYi50cmltKCl8fFwiXCJ9XG5mdW5jdGlvbiBJZShhLGIsYyl7Yj1iLnNwbGl0KFwiO1wiKTtmb3IodmFyIGQ9MCxlLGY7ZDxiLmxlbmd0aDtkKyspaWYoZT1iW2RdKXtMZC5sYXN0SW5kZXg9MDtpZihmPUxkLmV4ZWMoZSkpZT1IZShhLGNbZlsxXV0sYyk7ZWxzZSBpZihmPWUuaW5kZXhPZihcIjpcIiksLTEhPT1mKXt2YXIgaD1lLnN1YnN0cmluZyhmKTtoPWgudHJpbSgpO2g9SGUoYSxoLGMpfHxoO2U9ZS5zdWJzdHJpbmcoMCxmKStofWJbZF09ZSYmZS5sYXN0SW5kZXhPZihcIjtcIik9PT1lLmxlbmd0aC0xP2Uuc2xpY2UoMCwtMSk6ZXx8XCJcIn1yZXR1cm4gYi5qb2luKFwiO1wiKX1cbmZ1bmN0aW9uIEplKGEsYil7dmFyIGM9e30sZD1bXTtUKGEsZnVuY3Rpb24oYSl7YS5nfHxGZShhKTt2YXIgZT1hLmp8fGEucGFyc2VkU2VsZWN0b3I7YiYmYS5nLnMmJmUmJkFlLmNhbGwoYixlKSYmKEdlKGEsYyksYT1hLmluZGV4LGU9cGFyc2VJbnQoYS8zMiwxMCksZFtlXT0oZFtlXXx8MCl8MTw8YSUzMil9LG51bGwsITApO3JldHVybntzOmMsa2V5OmR9fVxuZnVuY3Rpb24gS2UoYSxiLGMsZCxlKXtjLmd8fEZlKGMpO2lmKGMuZy5zKXtiPVYoYik7YT1iLmlzO2I9Yi5KO2I9YT9jZShhLGIpOlwiaHRtbFwiO3ZhciBmPWMucGFyc2VkU2VsZWN0b3IsaD1cIjpob3N0ID4gKlwiPT09Znx8XCJodG1sXCI9PT1mLGc9MD09PWYuaW5kZXhPZihcIjpob3N0XCIpJiYhaDtcInNoYWR5XCI9PT1kJiYoaD1mPT09YitcIiA+ICouXCIrYnx8LTEhPT1mLmluZGV4T2YoXCJodG1sXCIpLGc9IWgmJjA9PT1mLmluZGV4T2YoYikpO1wic2hhZG93XCI9PT1kJiYoaD1cIjpob3N0ID4gKlwiPT09Znx8XCJodG1sXCI9PT1mLGc9ZyYmIWgpO2lmKGh8fGcpZD1iLGcmJihRJiYhYy5qJiYoYy5qPWVlKFcsYyxXLmIsYT9kZSthOlwiXCIsYikpLGQ9Yy5qfHxiKSxlKHtQYTpkLEdhOmcsJGE6aH0pfX1cbmZ1bmN0aW9uIExlKGEsYil7dmFyIGM9e30sZD17fSxlPU1lLGY9YiYmYi5fX2Nzc0J1aWxkO1QoYixmdW5jdGlvbihiKXtLZShlLGEsYixmLGZ1bmN0aW9uKGUpe0FlLmNhbGwoYS5aYXx8YSxlLlBhKSYmKGUuR2E/R2UoYixjKTpHZShiLGQpKX0pfSxudWxsLCEwKTtyZXR1cm57TmE6ZCxGYTpjfX1cbmZ1bmN0aW9uIE5lKGEsYixjLGQpe3ZhciBlPVYoYiksZj1jZShlLmlzLGUuSiksaD1uZXcgUmVnRXhwKFwiKD86XnxbXi4jWzpdKVwiKyhiLmV4dGVuZHM/XCJcXFxcXCIrZi5zbGljZSgwLC0xKStcIlxcXFxdXCI6ZikrXCIoJHxbLjpbXFxcXHM+K35dKVwiKTtlPVgoYikudTt2YXIgZz1PZShlLGQpO3JldHVybiBhZShiLGUsZnVuY3Rpb24oYil7dmFyIGU9XCJcIjtiLmd8fEZlKGIpO2IuZy5jc3NUZXh0JiYoZT1JZShhLGIuZy5jc3NUZXh0LGMpKTtiLmNzc1RleHQ9ZTtpZighUSYmIVJkKGIpJiZiLmNzc1RleHQpe3ZhciBrPWU9Yi5jc3NUZXh0O251bGw9PWIuamEmJihiLmphPU5kLnRlc3QoZSkpO2lmKGIuamEpaWYobnVsbD09Yi5PKXtiLk89W107Zm9yKHZhciBxIGluIGcpaz1nW3FdLGs9ayhlKSxlIT09ayYmKGU9ayxiLk8ucHVzaChxKSl9ZWxzZXtmb3IocT0wO3E8Yi5PLmxlbmd0aDsrK3Epaz1nW2IuT1txXV0sZT1rKGUpO2s9ZX1iLmNzc1RleHQ9aztiLmo9Yi5qfHxiLnNlbGVjdG9yO2U9XCIuXCIrZDtcbnE9Yi5qLnNwbGl0KFwiLFwiKTtrPTA7Zm9yKHZhciBFPXEubGVuZ3RoLEo7azxFJiYoSj1xW2tdKTtrKyspcVtrXT1KLm1hdGNoKGgpP0oucmVwbGFjZShmLGUpOmUrXCIgXCIrSjtiLnNlbGVjdG9yPXEuam9pbihcIixcIil9fSl9ZnVuY3Rpb24gT2UoYSxiKXthPWEuYjt2YXIgYz17fTtpZighUSYmYSlmb3IodmFyIGQ9MCxlPWFbZF07ZDxhLmxlbmd0aDtlPWFbKytkXSl7dmFyIGY9ZSxoPWI7Zi5mPW5ldyBSZWdFeHAoZi5rZXlmcmFtZXNOYW1lLFwiZ1wiKTtmLmE9Zi5rZXlmcmFtZXNOYW1lK1wiLVwiK2g7Zi5qPWYuanx8Zi5zZWxlY3RvcjtmLnNlbGVjdG9yPWYuai5yZXBsYWNlKGYua2V5ZnJhbWVzTmFtZSxmLmEpO2NbZS5rZXlmcmFtZXNOYW1lXT1QZShlKX1yZXR1cm4gY31mdW5jdGlvbiBQZShhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGIucmVwbGFjZShhLmYsYS5hKX19XG5mdW5jdGlvbiBRZShhLGIpe3ZhciBjPU1lLGQ9UWQoYSk7YS50ZXh0Q29udGVudD1TKGQsZnVuY3Rpb24oYSl7dmFyIGQ9YS5jc3NUZXh0PWEucGFyc2VkQ3NzVGV4dDthLmcmJmEuZy5jc3NUZXh0JiYoZD1kLnJlcGxhY2UoRGQsXCJcIikucmVwbGFjZShFZCxcIlwiKSxhLmNzc1RleHQ9SWUoYyxkLGIpKX0pfXAuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRGUucHJvdG90eXBlLHthOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5cIngtc2NvcGVcIn19fSk7dmFyIE1lPW5ldyBEZTt2YXIgUmU9e30sU2U9d2luZG93LmN1c3RvbUVsZW1lbnRzO2lmKFNlJiYhUSl7dmFyIFRlPVNlLmRlZmluZTtTZS5kZWZpbmU9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCIgU2hhZHkgRE9NIHN0eWxlcyBmb3IgXCIrYStcIiBcIiksZT1kb2N1bWVudC5oZWFkO2UuaW5zZXJ0QmVmb3JlKGQsKFU/VS5uZXh0U2libGluZzpudWxsKXx8ZS5maXJzdENoaWxkKTtVPWQ7UmVbYV09ZDtyZXR1cm4gVGUuY2FsbChTZSxhLGIsYyl9fTtmdW5jdGlvbiBVZShhKXt0aGlzLmNhY2hlPXt9O3RoaXMuYT12b2lkIDA9PT1hPzEwMDphfVVlLnByb3RvdHlwZS5zdG9yZT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT10aGlzLmNhY2hlW2FdfHxbXTtlLnB1c2goe3M6YixzdHlsZUVsZW1lbnQ6YyxvOmR9KTtlLmxlbmd0aD50aGlzLmEmJmUuc2hpZnQoKTt0aGlzLmNhY2hlW2FdPWV9O1VlLnByb3RvdHlwZS5mZXRjaD1mdW5jdGlvbihhLGIsYyl7aWYoYT10aGlzLmNhY2hlW2FdKWZvcih2YXIgZD1hLmxlbmd0aC0xOzA8PWQ7ZC0tKXt2YXIgZT1hW2RdLGY7YTp7Zm9yKGY9MDtmPGMubGVuZ3RoO2YrKyl7dmFyIGg9Y1tmXTtpZihlLnNbaF0hPT1iW2hdKXtmPSExO2JyZWFrIGF9fWY9ITB9aWYoZilyZXR1cm4gZX19O2Z1bmN0aW9uIFZlKCl7fVxuZnVuY3Rpb24gV2UoYSl7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl07aWYoYy50YXJnZXQhPT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQmJmMudGFyZ2V0IT09ZG9jdW1lbnQuaGVhZClmb3IodmFyIGQ9MDtkPGMuYWRkZWROb2Rlcy5sZW5ndGg7ZCsrKXt2YXIgZT1jLmFkZGVkTm9kZXNbZF07aWYoZS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXt2YXIgZj1lLmdldFJvb3ROb2RlKCk7dmFyIGg9ZTt2YXIgZz1bXTtoLmNsYXNzTGlzdD9nPUFycmF5LmZyb20oaC5jbGFzc0xpc3QpOmggaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCYmaC5oYXNBdHRyaWJ1dGUoXCJjbGFzc1wiKSYmKGc9aC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5zcGxpdCgvXFxzKy8pKTtoPWc7Zz1oLmluZGV4T2YoVy5hKTtpZigoaD0tMTxnP2hbZysxXTpcIlwiKSYmZj09PWUub3duZXJEb2N1bWVudClYZChlLGgsITApO2Vsc2UgaWYoZi5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSYmXG4oZj1mLmhvc3QpKWlmKGY9VihmKS5pcyxoPT09Zilmb3IoZT13aW5kb3cuU2hhZHlET00ubmF0aXZlTWV0aG9kcy5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZSxcIjpub3QoLlwiK1cuYStcIilcIiksZj0wO2Y8ZS5sZW5ndGg7ZisrKVpkKGVbZl0saCk7ZWxzZSBoJiZYZChlLGgsITApLFhkKGUsZil9fX19XG5pZighUSl7dmFyIFhlPW5ldyBNdXRhdGlvbk9ic2VydmVyKFdlKSxZZT1mdW5jdGlvbihhKXtYZS5vYnNlcnZlKGEse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSl9O2lmKHdpbmRvdy5jdXN0b21FbGVtZW50cyYmIXdpbmRvdy5jdXN0b21FbGVtZW50cy5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrKVllKGRvY3VtZW50KTtlbHNle3ZhciBaZT1mdW5jdGlvbigpe1llKGRvY3VtZW50LmJvZHkpfTt3aW5kb3cuSFRNTEltcG9ydHM/d2luZG93LkhUTUxJbXBvcnRzLndoZW5SZWFkeShaZSk6cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7aWYoXCJsb2FkaW5nXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlKXt2YXIgYT1mdW5jdGlvbigpe1plKCk7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixhKX07ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixhKX1lbHNlIFplKCl9KX1WZT1mdW5jdGlvbigpe1dlKFhlLnRha2VSZWNvcmRzKCkpfX1cbnZhciAkZT1WZTt2YXIgYWY9e307dmFyIGJmPVByb21pc2UucmVzb2x2ZSgpO2Z1bmN0aW9uIGNmKGEpe2lmKGE9YWZbYV0pYS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb249YS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb258fDAsYS5fYXBwbHlTaGltVmFsaWRhdGluZ1ZlcnNpb249YS5fYXBwbHlTaGltVmFsaWRhdGluZ1ZlcnNpb258fDAsYS5fYXBwbHlTaGltTmV4dFZlcnNpb249KGEuX2FwcGx5U2hpbU5leHRWZXJzaW9ufHwwKSsxfWZ1bmN0aW9uIGRmKGEpe3JldHVybiBhLl9hcHBseVNoaW1DdXJyZW50VmVyc2lvbj09PWEuX2FwcGx5U2hpbU5leHRWZXJzaW9ufWZ1bmN0aW9uIGVmKGEpe2EuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uPWEuX2FwcGx5U2hpbU5leHRWZXJzaW9uO2EuYnx8KGEuYj0hMCxiZi50aGVuKGZ1bmN0aW9uKCl7YS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb249YS5fYXBwbHlTaGltTmV4dFZlcnNpb247YS5iPSExfSkpfTt2YXIgZmY9bnVsbCxnZj13aW5kb3cuSFRNTEltcG9ydHMmJndpbmRvdy5IVE1MSW1wb3J0cy53aGVuUmVhZHl8fG51bGwsaGY7ZnVuY3Rpb24gamYoYSl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7Z2Y/Z2YoYSk6KGZmfHwoZmY9bmV3IFByb21pc2UoZnVuY3Rpb24oYSl7aGY9YX0pLFwiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGU/aGYoKTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGZ1bmN0aW9uKCl7XCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZSYmaGYoKX0pKSxmZi50aGVuKGZ1bmN0aW9uKCl7YSYmYSgpfSkpfSl9O3ZhciBrZj1uZXcgVWU7ZnVuY3Rpb24gWSgpe3ZhciBhPXRoaXM7dGhpcy5GPXt9O3RoaXMuYz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7dmFyIGI9bmV3IHFkO2IucnVsZXM9W107dGhpcy5mPXplKHRoaXMuYyxuZXcgeWUoYikpO3RoaXMubD0hMTt0aGlzLmI9dGhpcy5hPW51bGw7amYoZnVuY3Rpb24oKXtsZihhKX0pfW49WS5wcm90b3R5cGU7bi5wYT1mdW5jdGlvbigpeyRlKCl9O24uRGE9ZnVuY3Rpb24oYSl7cmV0dXJuIFFkKGEpfTtuLlJhPWZ1bmN0aW9uKGEpe3JldHVybiBTKGEpfTtcbm4ucHJlcGFyZVRlbXBsYXRlPWZ1bmN0aW9uKGEsYixjKXtpZighYS5mKXthLmY9ITA7YS5uYW1lPWI7YS5leHRlbmRzPWM7YWZbYl09YTt2YXIgZD0oZD1hLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcInN0eWxlXCIpKT9kLmdldEF0dHJpYnV0ZShcImNzcy1idWlsZFwiKXx8XCJcIjpcIlwiO3ZhciBlPWEuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVcIik7Zm9yKHZhciBmPVtdLGg9MDtoPGUubGVuZ3RoO2grKyl7dmFyIGc9ZVtoXTtmLnB1c2goZy50ZXh0Q29udGVudCk7Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGcpfWU9Zi5qb2luKFwiXCIpLnRyaW0oKTtjPXtpczpiLGV4dGVuZHM6YyxXYTpkfTtRfHxYZChhLmNvbnRlbnQsYik7bGYodGhpcyk7Zj1MZC50ZXN0KGUpfHxKZC50ZXN0KGUpO0xkLmxhc3RJbmRleD0wO0pkLmxhc3RJbmRleD0wO2U9cmQoZSk7ZiYmUiYmdGhpcy5hJiZ0aGlzLmEudHJhbnNmb3JtUnVsZXMoZSxiKTthLl9zdHlsZUFzdD1lO2EubD1kO2Q9W107Unx8KGQ9RWUoYS5fc3R5bGVBc3QpKTtcbmlmKCFkLmxlbmd0aHx8UillPVE/YS5jb250ZW50Om51bGwsYj1SZVtiXSxmPWFlKGMsYS5fc3R5bGVBc3QpLGI9Zi5sZW5ndGg/U2QoZixjLmlzLGUsYik6dm9pZCAwLGEuYT1iO2EuYz1kfX07ZnVuY3Rpb24gbWYoYSl7IWEuYiYmd2luZG93LlNoYWR5Q1NTJiZ3aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UmJihhLmI9d2luZG93LlNoYWR5Q1NTLkN1c3RvbVN0eWxlSW50ZXJmYWNlLGEuYi50cmFuc2Zvcm1DYWxsYmFjaz1mdW5jdGlvbihiKXthLm5hKGIpfSxhLmIudmFsaWRhdGVDYWxsYmFjaz1mdW5jdGlvbigpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpeyhhLmIuZW5xdWV1ZWR8fGEubCkmJmEuQSgpfSl9KX1mdW5jdGlvbiBsZihhKXshYS5hJiZ3aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW0mJihhLmE9d2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbSxhLmEuaW52YWxpZENhbGxiYWNrPWNmKTttZihhKX1cbm4uQT1mdW5jdGlvbigpe2xmKHRoaXMpO2lmKHRoaXMuYil7dmFyIGE9dGhpcy5iLnByb2Nlc3NTdHlsZXMoKTtpZih0aGlzLmIuZW5xdWV1ZWQpe2lmKFIpZm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPXRoaXMuYi5nZXRTdHlsZUZvckN1c3RvbVN0eWxlKGFbYl0pO2lmKGMmJlImJnRoaXMuYSl7dmFyIGQ9UWQoYyk7bGYodGhpcyk7dGhpcy5hLnRyYW5zZm9ybVJ1bGVzKGQpO2MudGV4dENvbnRlbnQ9UyhkKX19ZWxzZSBmb3IobmYodGhpcyx0aGlzLmMsdGhpcy5mKSxiPTA7YjxhLmxlbmd0aDtiKyspKGM9dGhpcy5iLmdldFN0eWxlRm9yQ3VzdG9tU3R5bGUoYVtiXSkpJiZRZShjLHRoaXMuZi52KTt0aGlzLmIuZW5xdWV1ZWQ9ITE7dGhpcy5sJiYhUiYmdGhpcy5zdHlsZURvY3VtZW50KCl9fX07XG5uLnN0eWxlRWxlbWVudD1mdW5jdGlvbihhLGIpe3ZhciBjPVYoYSkuaXMsZD1YKGEpO2lmKCFkKXt2YXIgZT1WKGEpO2Q9ZS5pcztlPWUuSjt2YXIgZj1SZVtkXTtkPWFmW2RdO2lmKGQpe3ZhciBoPWQuX3N0eWxlQXN0O3ZhciBnPWQuY31kPXplKGEsbmV3IHllKGgsZixnLDAsZSkpfWEhPT10aGlzLmMmJih0aGlzLmw9ITApO2ImJihkLkI9ZC5CfHx7fSxPYmplY3QuYXNzaWduKGQuQixiKSk7aWYoUil7aWYoZC5CKXtiPWQuQjtmb3IodmFyIGsgaW4gYiludWxsPT09az9hLnN0eWxlLnJlbW92ZVByb3BlcnR5KGspOmEuc3R5bGUuc2V0UHJvcGVydHkoayxiW2tdKX1pZigoKGs9YWZbY10pfHxhPT09dGhpcy5jKSYmayYmay5hJiYhZGYoaykpe2lmKGRmKGspfHxrLl9hcHBseVNoaW1WYWxpZGF0aW5nVmVyc2lvbiE9PWsuX2FwcGx5U2hpbU5leHRWZXJzaW9uKWxmKHRoaXMpLHRoaXMuYSYmdGhpcy5hLnRyYW5zZm9ybVJ1bGVzKGsuX3N0eWxlQXN0LGMpLGsuYS50ZXh0Q29udGVudD1cbmFlKGEsZC51KSxlZihrKTtRJiYoYz1hLnNoYWRvd1Jvb3QpJiYoYy5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIikudGV4dENvbnRlbnQ9YWUoYSxkLnUpKTtkLnU9ay5fc3R5bGVBc3R9fWVsc2UgaWYobmYodGhpcyxhLGQpLGQuYmEmJmQuYmEubGVuZ3RoKXtjPWQ7az1WKGEpLmlzO2Q9KGI9a2YuZmV0Y2goayxjLnYsYy5iYSkpP2Iuc3R5bGVFbGVtZW50Om51bGw7aD1jLm87KGc9YiYmYi5vKXx8KGc9dGhpcy5GW2tdPSh0aGlzLkZba118fDApKzEsZz1rK1wiLVwiK2cpO2Mubz1nO2c9Yy5vO2U9TWU7ZT1kP2QudGV4dENvbnRlbnR8fFwiXCI6TmUoZSxhLGMudixnKTtmPVgoYSk7dmFyIGw9Zi5hO2wmJiFRJiZsIT09ZCYmKGwuX3VzZUNvdW50LS0sMD49bC5fdXNlQ291bnQmJmwucGFyZW50Tm9kZSYmbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGwpKTtRP2YuYT8oZi5hLnRleHRDb250ZW50PWUsZD1mLmEpOmUmJihkPVNkKGUsZyxhLnNoYWRvd1Jvb3QsZi5iKSk6ZD9kLnBhcmVudE5vZGV8fFxuKENlJiYtMTxlLmluZGV4T2YoXCJAbWVkaWFcIikmJihkLnRleHRDb250ZW50PWUpLFRkKGQsbnVsbCxmLmIpKTplJiYoZD1TZChlLGcsbnVsbCxmLmIpKTtkJiYoZC5fdXNlQ291bnQ9ZC5fdXNlQ291bnR8fDAsZi5hIT1kJiZkLl91c2VDb3VudCsrLGYuYT1kKTtnPWQ7UXx8KGQ9Yy5vLGY9ZT1hLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiLGgmJihmPWUucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHMqeC1zY29wZVxcXFxzKlwiK2grXCJcXFxccypcIixcImdcIiksXCIgXCIpKSxmKz0oZj9cIiBcIjpcIlwiKStcIngtc2NvcGUgXCIrZCxlIT09ZiYmVmQoYSxmKSk7Ynx8a2Yuc3RvcmUoayxjLnYsZyxjLm8pfX07ZnVuY3Rpb24gb2YoYSxiKXtyZXR1cm4oYj1iLmdldFJvb3ROb2RlKCkuaG9zdCk/WChiKT9iOm9mKGEsYik6YS5jfVxuZnVuY3Rpb24gbmYoYSxiLGMpe2E9b2YoYSxiKTt2YXIgZD1YKGEpO2E9T2JqZWN0LmNyZWF0ZShkLnZ8fG51bGwpO3ZhciBlPUxlKGIsYy51KTtiPUplKGQudSxiKS5zO09iamVjdC5hc3NpZ24oYSxlLkZhLGIsZS5OYSk7Yj1jLkI7Zm9yKHZhciBmIGluIGIpaWYoKGU9YltmXSl8fDA9PT1lKWFbZl09ZTtmPU1lO2I9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSk7Zm9yKGU9MDtlPGIubGVuZ3RoO2UrKylkPWJbZV0sYVtkXT1IZShmLGFbZF0sYSk7Yy52PWF9bi5zdHlsZURvY3VtZW50PWZ1bmN0aW9uKGEpe3RoaXMuc3R5bGVTdWJ0cmVlKHRoaXMuYyxhKX07XG5uLnN0eWxlU3VidHJlZT1mdW5jdGlvbihhLGIpe3ZhciBjPWEuc2hhZG93Um9vdDsoY3x8YT09PXRoaXMuYykmJnRoaXMuc3R5bGVFbGVtZW50KGEsYik7aWYoYj1jJiYoYy5jaGlsZHJlbnx8Yy5jaGlsZE5vZGVzKSlmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKXRoaXMuc3R5bGVTdWJ0cmVlKGJbYV0pO2Vsc2UgaWYoYT1hLmNoaWxkcmVufHxhLmNoaWxkTm9kZXMpZm9yKGI9MDtiPGEubGVuZ3RoO2IrKyl0aGlzLnN0eWxlU3VidHJlZShhW2JdKX07bi5uYT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9UWQoYSk7VChjLGZ1bmN0aW9uKGEpe2lmKFEpdmUoYSk7ZWxzZXt2YXIgYz1XO2Euc2VsZWN0b3I9YS5wYXJzZWRTZWxlY3Rvcjt2ZShhKTthLnNlbGVjdG9yPWEuaj1lZShjLGEsYy5jLHZvaWQgMCx2b2lkIDApfVImJihsZihiKSxiLmEmJmIuYS50cmFuc2Zvcm1SdWxlKGEpKX0pO1I/YS50ZXh0Q29udGVudD1TKGMpOnRoaXMuZi51LnJ1bGVzLnB1c2goYyl9O1xubi5nZXRDb21wdXRlZFN0eWxlVmFsdWU9ZnVuY3Rpb24oYSxiKXt2YXIgYztSfHwoYz0oWChhKXx8WChvZih0aGlzLGEpKSkudltiXSk7cmV0dXJuKGM9Y3x8d2luZG93LmdldENvbXB1dGVkU3R5bGUoYSkuZ2V0UHJvcGVydHlWYWx1ZShiKSk/Yy50cmltKCk6XCJcIn07bi5RYT1mdW5jdGlvbihhLGIpe3ZhciBjPWEuZ2V0Um9vdE5vZGUoKTtiPWI/Yi5zcGxpdCgvXFxzLyk6W107Yz1jLmhvc3QmJmMuaG9zdC5sb2NhbE5hbWU7aWYoIWMpe3ZhciBkPWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7aWYoZCl7ZD1kLnNwbGl0KC9cXHMvKTtmb3IodmFyIGU9MDtlPGQubGVuZ3RoO2UrKylpZihkW2VdPT09Vy5hKXtjPWRbZSsxXTticmVha319fWMmJmIucHVzaChXLmEsYyk7Unx8KGM9WChhKSkmJmMubyYmYi5wdXNoKE1lLmEsYy5vKTtWZChhLGIuam9pbihcIiBcIikpfTtuLnphPWZ1bmN0aW9uKGEpe3JldHVybiBYKGEpfTtZLnByb3RvdHlwZS5mbHVzaD1ZLnByb3RvdHlwZS5wYTtcblkucHJvdG90eXBlLnByZXBhcmVUZW1wbGF0ZT1ZLnByb3RvdHlwZS5wcmVwYXJlVGVtcGxhdGU7WS5wcm90b3R5cGUuc3R5bGVFbGVtZW50PVkucHJvdG90eXBlLnN0eWxlRWxlbWVudDtZLnByb3RvdHlwZS5zdHlsZURvY3VtZW50PVkucHJvdG90eXBlLnN0eWxlRG9jdW1lbnQ7WS5wcm90b3R5cGUuc3R5bGVTdWJ0cmVlPVkucHJvdG90eXBlLnN0eWxlU3VidHJlZTtZLnByb3RvdHlwZS5nZXRDb21wdXRlZFN0eWxlVmFsdWU9WS5wcm90b3R5cGUuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlO1kucHJvdG90eXBlLnNldEVsZW1lbnRDbGFzcz1ZLnByb3RvdHlwZS5RYTtZLnByb3RvdHlwZS5fc3R5bGVJbmZvRm9yTm9kZT1ZLnByb3RvdHlwZS56YTtZLnByb3RvdHlwZS50cmFuc2Zvcm1DdXN0b21TdHlsZUZvckRvY3VtZW50PVkucHJvdG90eXBlLm5hO1kucHJvdG90eXBlLmdldFN0eWxlQXN0PVkucHJvdG90eXBlLkRhO1kucHJvdG90eXBlLnN0eWxlQXN0VG9TdHJpbmc9WS5wcm90b3R5cGUuUmE7XG5ZLnByb3RvdHlwZS5mbHVzaEN1c3RvbVN0eWxlcz1ZLnByb3RvdHlwZS5BO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFkucHJvdG90eXBlLHtuYXRpdmVTaGFkb3c6e2dldDpmdW5jdGlvbigpe3JldHVybiBRfX0sbmF0aXZlQ3NzOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUn19fSk7dmFyIFo9bmV3IFkscGYscWY7d2luZG93LlNoYWR5Q1NTJiYocGY9d2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbSxxZj13aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UpO3dpbmRvdy5TaGFkeUNTUz17U2NvcGluZ1NoaW06WixwcmVwYXJlVGVtcGxhdGU6ZnVuY3Rpb24oYSxiLGMpe1ouQSgpO1oucHJlcGFyZVRlbXBsYXRlKGEsYixjKX0sc3R5bGVTdWJ0cmVlOmZ1bmN0aW9uKGEsYil7Wi5BKCk7Wi5zdHlsZVN1YnRyZWUoYSxiKX0sc3R5bGVFbGVtZW50OmZ1bmN0aW9uKGEpe1ouQSgpO1ouc3R5bGVFbGVtZW50KGEpfSxzdHlsZURvY3VtZW50OmZ1bmN0aW9uKGEpe1ouQSgpO1ouc3R5bGVEb2N1bWVudChhKX0sZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFouZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKGEsYil9LG5hdGl2ZUNzczpSLG5hdGl2ZVNoYWRvdzpRfTtwZiYmKHdpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW09cGYpO1xucWYmJih3aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2U9cWYpOy8qXG5cbiBDb3B5cmlnaHQgKGMpIDIwMTQgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG52YXIgcmY9d2luZG93LmN1c3RvbUVsZW1lbnRzLHNmPXdpbmRvdy5IVE1MSW1wb3J0cyx0Zj13aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudDt3aW5kb3cuV2ViQ29tcG9uZW50cz13aW5kb3cuV2ViQ29tcG9uZW50c3x8e307aWYocmYmJnJmLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2spe3ZhciB1Zix2Zj1mdW5jdGlvbigpe2lmKHVmKXt0Zi5BYSYmdGYuQWEod2luZG93LmRvY3VtZW50KTt2YXIgYT11Zjt1Zj1udWxsO2EoKTtyZXR1cm4hMH19LHdmPXNmLndoZW5SZWFkeTtyZi5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrKGZ1bmN0aW9uKGEpe3VmPWE7d2YodmYpfSk7c2Yud2hlblJlYWR5PWZ1bmN0aW9uKGEpe3dmKGZ1bmN0aW9uKCl7dmYoKT9zZi53aGVuUmVhZHkoYSk6YSgpfSl9fVxuc2Yud2hlblJlYWR5KGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7d2luZG93LldlYkNvbXBvbmVudHMucmVhZHk9ITA7ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJXZWJDb21wb25lbnRzUmVhZHlcIix7YnViYmxlczohMH0pKX0pfSk7dmFyIHhmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTt4Zi50ZXh0Q29udGVudD1cImJvZHkge3RyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbiAwLjJzOyB9IFxcbmJvZHlbdW5yZXNvbHZlZF0ge29wYWNpdHk6IDA7IGRpc3BsYXk6IGJsb2NrOyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7IH0gXFxuXCI7dmFyIHlmPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO3lmLmluc2VydEJlZm9yZSh4Zix5Zi5maXJzdENoaWxkKTt9KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWJjb21wb25lbnRzLWhpLXNkLWNlLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL3dlYmNvbXBvbmVudHMtaGktc2QtY2UuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2goZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxuXHRcdGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICdjb21tb24vUG9seWdvbic7XHJcbmltcG9ydCB7IExFWCB9IGZyb20gJ0xFWCc7XHJcblxyXG5pbXBvcnQgeyBQb2x5Z29uRmlsbGVyIH0gZnJvbSAncG9seWdvbi1maWxsZXIvUG9seWdvbkZpbGxlcic7XHJcblxyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJ1JlbmRlcmVyJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5pbXBvcnQgeyBDbG9zZXN0UGF0aEZpbmRlciB9IGZyb20gJ3NlcnZpY2VzL0Nsb3Nlc3RQYXRoRmluZGVyJztcclxuaW1wb3J0IHsgSW1hZ2VEb3dubG9hZGVyIH0gZnJvbSAnc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyJztcclxuaW1wb3J0IHsgSW5wdXREYXRhSW5pdGlhbGl6ZXIgfSBmcm9tICdzZXJ2aWNlcy9JbnB1dERhdGFJbml0aWFsaXplcic7XHJcbmltcG9ydCB7IExpZ2h0U2ltdWxhdG9yIH0gZnJvbSAnc2VydmljZXMvTGlnaHRTaW11bGF0b3InO1xyXG5pbXBvcnQgeyBQb2x5Z29uQ2xpcHBlciB9IGZyb20gJ3NlcnZpY2VzL1BvbHlnb25DbGlwcGVyJztcclxuXHJcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJ3VpL1VJQ29udHJvbGxlcic7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJGaW5pc2hlZEV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckZpbmlzaGVkRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIHtcclxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSB1aUNvbnRyb2xsZXI6IFVJQ29udHJvbGxlcjtcclxuICBwcml2YXRlIHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBwcml2YXRlIHBvbHlnb25GaWxsZXI6IFBvbHlnb25GaWxsZXI7XHJcbiAgcHJpdmF0ZSBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG5cclxuICBwcml2YXRlIGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG4gIHByaXZhdGUgbGlnaHRTaW11bGF0b3I6IExpZ2h0U2ltdWxhdG9yO1xyXG5cclxuICBwcml2YXRlIGlzUmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc05leHRSZW5kZXJRdWV1ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IG5ldyBFdmVudEFnZ3JlZ2F0b3IoKTtcclxuICAgIHRoaXMuaW1hZ2VEb3dubG9hZGVyID0gbmV3IEltYWdlRG93bmxvYWRlcih7IGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IgfSk7XHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIgPSBuZXcgUG9seWdvbkZpbGxlcih7XHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saWdodFNpbXVsYXRvciA9IG5ldyBMaWdodFNpbXVsYXRvcih7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIGNlbnRlclBvaW50OiBuZXcgUG9pbnQodGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIHBvbHlnb25GaWxsZXI6IHRoaXMucG9seWdvbkZpbGxlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YWdlID0gbmV3IFN0YWdlKCk7XHJcblxyXG4gICAgdGhpcy51aUNvbnRyb2xsZXIgPSBuZXcgVUlDb250cm9sbGVyKHtcclxuICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlLFxyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBpbWFnZURvd25sb2FkZXI6IHRoaXMuaW1hZ2VEb3dubG9hZGVyLFxyXG4gICAgICBwb2x5Z29uQ2xpcHBlcjogbmV3IFBvbHlnb25DbGlwcGVyKCksXHJcbiAgICAgIGNsb3Nlc3RQYXRoRmluZGVyOiBuZXcgQ2xvc2VzdFBhdGhGaW5kZXIoKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vblJlbmRlckV2ZW50ID0gdGhpcy5vblJlbmRlckV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN0YXJ0UmVuZGVyaW5nID0gdGhpcy5zdGFydFJlbmRlcmluZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkZpbGxpbmdGaW5pc2hlZCA9IHRoaXMub25GaWxsaW5nRmluaXNoZWQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBpbml0KCkge1xyXG4gICAgdGhpcy5wb2x5Z29uRmlsbGVyLmZpbGxpbmdGaW5pc2hlZENhbGxiYWNrID0gdGhpcy5vbkZpbGxpbmdGaW5pc2hlZDtcclxuICAgIHRoaXMucG9seWdvbkxheWVyID0gbmV3IExheWVyKExFWC5QT0xZR09OX0xBWUVSX05BTUUpO1xyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMucHVzaCh0aGlzLnBvbHlnb25MYXllcik7XHJcblxyXG4gICAgdGhpcy5wb2x5Z29uRmlsbGVyLmluaXQoKTtcclxuICAgIHRoaXMubGlnaHRTaW11bGF0b3IuaW5pdCgpO1xyXG4gICAgdGhpcy51aUNvbnRyb2xsZXIuaW5pdCgpO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RGF0YUluaXRpYWxpemVyID0gbmV3IElucHV0RGF0YUluaXRpYWxpemVyKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgaW1hZ2VEb3dubG9hZGVyOiB0aGlzLmltYWdlRG93bmxvYWRlcixcclxuICAgICAgcG9seWdvbkxheWVyOiB0aGlzLnBvbHlnb25MYXllclxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgaW5wdXREYXRhSW5pdGlhbGl6ZXIuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5saWdodFNpbXVsYXRvci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLnVpQ29udHJvbGxlci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUmVuZGVyRXZlbnQoZXZlbnQ6IFJlbmRlckV2ZW50KSB7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5pc1JlbmRlcmluZykge1xyXG4gICAgICB0aGlzLmlzTmV4dFJlbmRlclF1ZXVlZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc1JlbmRlcmluZyA9IHRydWU7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGFydFJlbmRlcmluZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0UmVuZGVyaW5nKCkge1xyXG4gICAgdGhpcy5wb2x5Z29uRmlsbGVyLmZpbGxQb2x5Z29ucyg8UG9seWdvbltdPnRoaXMucG9seWdvbkxheWVyLnBhdGhzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25GaWxsaW5nRmluaXNoZWQoKSB7XHJcbiAgICB0aGlzLnN0YWdlLnJlbmRlcih0aGlzLnJlbmRlcmVyKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckZpbmlzaGVkRXZlbnQoKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNOZXh0UmVuZGVyUXVldWVkKSB7XHJcbiAgICAgIHRoaXMuaXNOZXh0UmVuZGVyUXVldWVkID0gZmFsc2U7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnN0YXJ0UmVuZGVyaW5nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNSZW5kZXJpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFJlbmRlckV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblJlbmRlckV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFJlbmRlckV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblJlbmRlckV2ZW50KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvQXBwbGljYXRpb24udHMiLCJpbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGl0VGVzdFJlc3VsdCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGxpbmU6IExpbmU7XHJcbiAgcHVibGljIHBhdGg/OiBQYXRoO1xyXG4gIHB1YmxpYyBsYXllcj86IExheWVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsaW5lOiBMaW5lLCBwYXRoPzogUGF0aCwgbGF5ZXI/OiBMYXllcikge1xyXG4gICAgdGhpcy5saW5lID0gbGluZTtcclxuICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICB0aGlzLmxheWVyID0gbGF5ZXI7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9IaXRUZXN0UmVzdWx0LnRzIiwiaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuXHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7XHJcbiAgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCxcclxuICBOZXdIZWlnaHRNYXBFdmVudCxcclxuICBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudCxcclxuICBOZXdMaWdodENvbG9yRXZlbnQsXHJcbiAgTmV3TGlnaHRQb3NpdGlvbkV2ZW50LFxyXG4gIE5ld0xpZ2h0VHlwZUV2ZW50LFxyXG4gIE5ld05vcm1hbE1hcEV2ZW50XHJcbn0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5cclxuaW1wb3J0IHsgQWN0aXZlRWRnZSB9IGZyb20gJ3BvbHlnb24tZmlsbGVyL0FjdGl2ZUVkZ2UnO1xyXG5pbXBvcnQgeyBGaWxsU3RyaXAgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9GaWxsU3RyaXAnO1xyXG5pbXBvcnQgeyBGaWxsV29ya2VyTWVzc2FnZVR5cGUgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9GaWxsV29ya2VyTWVzc2FnZVR5cGUnO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuY29uc3QgRklMTF9XT1JLRVJfVVJMID0gJ2ZpbGxXb3JrZXIuanMnO1xyXG5cclxuaW50ZXJmYWNlIFBvbHlnb25GaWxsZXJEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2x5Z29uRmlsbGVyIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHVibGljIGZpbGxpbmdGaW5pc2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHByb3h5RXZlbnRzID0gW1xyXG4gICAgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCxcclxuICAgIE5ld0hlaWdodE1hcEV2ZW50LFxyXG4gICAgTmV3SGVpZ2h0TWFwSW50ZW5zaXR5RXZlbnQsXHJcbiAgICBOZXdMaWdodENvbG9yRXZlbnQsXHJcbiAgICBOZXdMaWdodFBvc2l0aW9uRXZlbnQsXHJcbiAgICBOZXdMaWdodFR5cGVFdmVudCxcclxuICAgIE5ld05vcm1hbE1hcEV2ZW50XHJcbiAgXTtcclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJpbmdDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG4gIHByaXZhdGUgZmlsbFdvcmtlcjogV29ya2VyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBvbHlnb25GaWxsZXJEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuXHJcbiAgICB0aGlzLm9uRmlsbFdvcmtlck1lc3NhZ2UgPSB0aGlzLm9uRmlsbFdvcmtlck1lc3NhZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25GaWxsV29ya2VyRXJyb3IgPSB0aGlzLm9uRmlsbFdvcmtlckVycm9yLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNlbmRBcHBGaWxsRGF0YUV2ZW50ID0gdGhpcy5zZW5kQXBwRmlsbERhdGFFdmVudC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluamVjdENhbnZhc1JlbmRlcmluZ0NvbnRleHQocmVuZGVyaW5nQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQgPSByZW5kZXJpbmdDb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLnByb3h5RXZlbnRzLmZvckVhY2goZXZlbnQgPT5cclxuICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihldmVudC5ldmVudFR5cGUsIHRoaXMuc2VuZEFwcEZpbGxEYXRhRXZlbnQpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZmlsbFdvcmtlciA9IG5ldyBXb3JrZXIoRklMTF9XT1JLRVJfVVJMKTtcclxuICAgIHRoaXMuZmlsbFdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5DYW52YXNJbmZvLFxyXG4gICAgICB3aWR0aDogdGhpcy5jYW52YXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5jYW52YXMuaGVpZ2h0XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZmlsbFdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vbkZpbGxXb3JrZXJNZXNzYWdlKTtcclxuICAgIHRoaXMuZmlsbFdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMub25GaWxsV29ya2VyRXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnByb3h5RXZlbnRzLmZvckVhY2goZXZlbnQgPT5cclxuICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudC5ldmVudFR5cGUsIHRoaXMuc2VuZEFwcEZpbGxEYXRhRXZlbnQpXHJcbiAgICApO1xyXG4gICAgdGhpcy5maWxsV29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uRmlsbFdvcmtlck1lc3NhZ2UpO1xyXG4gICAgdGhpcy5maWxsV29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5vbkZpbGxXb3JrZXJFcnJvcik7XHJcbiAgICB0aGlzLmZpbGxXb3JrZXIudGVybWluYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmlsbFBvbHlnb25zKHBvbHlnb25zOiBQb2x5Z29uW10pIHtcclxuICAgIGNvbnN0IGZpbGxXb3JrZXIgPSB0aGlzLmZpbGxXb3JrZXI7XHJcblxyXG4gICAgZmlsbFdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5TdGFydEZpbGxcclxuICAgIH0pO1xyXG5cclxuICAgIHBvbHlnb25zLmZvckVhY2gocG9seWdvbiA9PiB0aGlzLmZpbGxQb2x5Z29uKHBvbHlnb24pKTtcclxuXHJcbiAgICBmaWxsV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgdHlwZTogRmlsbFdvcmtlck1lc3NhZ2VUeXBlLkVuZEZpbGxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZpbGxXb3JrZXJNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcclxuICAgIGNvbnN0IGltYWdlRGF0YTogSW1hZ2VEYXRhID0gZXZlbnQuZGF0YTtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuXHJcbiAgICBpZiAodGhpcy5maWxsaW5nRmluaXNoZWRDYWxsYmFjaykge1xyXG4gICAgICB0aGlzLmZpbGxpbmdGaW5pc2hlZENhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRmlsbFdvcmtlckVycm9yKGV2ZW50OiBFcnJvckV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdGaWxsIHdvcmtlciBlcnJvcicsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsbFBvbHlnb24ocG9seWdvbjogUG9seWdvbikge1xyXG4gICAgY29uc3QgZmlsbFN0cmlwcyA9IHRoaXMuZ2V0UG9seWdvbkZpbGxTdHJpcHMocG9seWdvbik7XHJcblxyXG4gICAgdGhpcy5maWxsV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgdHlwZTogRmlsbFdvcmtlck1lc3NhZ2VUeXBlLkZpbGxTdHJpcHMsXHJcbiAgICAgIGZpbGxTdHJpcHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQb2x5Z29uRmlsbFN0cmlwcyhwb2x5Z29uOiBQb2x5Z29uKTogRmlsbFN0cmlwW10ge1xyXG4gICAgY29uc3QgdmVydGljZXMgPSBwb2x5Z29uLmdldFZlcnRpY2VzKCk7XHJcbiAgICBjb25zdCB2ZXJ0aWNlc0NvdW50ID0gcG9seWdvbi5nZXRWZXJ0aWNlc0NvdW50KCk7XHJcblxyXG4gICAgLy8gaW5kWzAgLi4gbi0xXVxyXG4gICAgY29uc3Qgc29ydGVkVmVydGV4SW5kaWNlcyA9IHZlcnRpY2VzLm1hcCgoX3ZlcnRleCwgaW5kZXgpID0+IGluZGV4KTtcclxuICAgIHNvcnRlZFZlcnRleEluZGljZXMuc29ydCgoaSwgaikgPT4gdmVydGljZXNbaV0ueSAtIHZlcnRpY2VzW2pdLnkpO1xyXG5cclxuICAgIGNvbnN0IHlNaW4gPSB2ZXJ0aWNlc1tzb3J0ZWRWZXJ0ZXhJbmRpY2VzWzBdXS55O1xyXG4gICAgY29uc3QgeU1heCA9IHZlcnRpY2VzW3NvcnRlZFZlcnRleEluZGljZXNbdmVydGljZXNDb3VudCAtIDFdXS55O1xyXG5cclxuICAgIC8vIEFFVFxyXG4gICAgY29uc3QgYWN0aXZlRWRnZVRhYmxlOiBBY3RpdmVFZGdlW10gPSBbXTtcclxuICAgIGxldCBrID0gMDtcclxuICAgIGxldCBwcmV2aW91c1kgPSB5TWluO1xyXG5cclxuICAgIGNvbnN0IGZpbGxTdHJpcHM6IEZpbGxTdHJpcFtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgeSA9IHlNaW4gKyAxOyB5IDw9IHlNYXg7IHkgKz0gMSkge1xyXG4gICAgICBmb3IgKDsgayA8IHZlcnRpY2VzQ291bnQ7IGsgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IHZlcnRleEluZGV4ID0gc29ydGVkVmVydGV4SW5kaWNlc1trXTtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0aWNlc1t2ZXJ0ZXhJbmRleF07XHJcbiAgICAgICAgaWYgKHZlcnRleC55ICE9PSBwcmV2aW91c1kpIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNWZXJ0ZXhJbmRleCA9IHBvbHlnb24uZ2V0UHJldmlvdXNQb2ludEluZGV4KHZlcnRleEluZGV4KTtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1ZlcnRleCA9IHZlcnRpY2VzW3ByZXZpb3VzVmVydGV4SW5kZXhdO1xyXG4gICAgICAgIGlmIChwcmV2aW91c1ZlcnRleC55ID49IHZlcnRleC55KSB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2aW91c0VkZ2UgPSBuZXcgQWN0aXZlRWRnZSh2ZXJ0ZXgsIHByZXZpb3VzVmVydGV4KTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5wdXNoKHByZXZpb3VzRWRnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGVkZ2VJbmRleCA9IGFjdGl2ZUVkZ2VUYWJsZS5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIGVkZ2UgPT4gZWRnZS5sb3dlclBvaW50ID09PSBwcmV2aW91c1ZlcnRleCAmJiBlZGdlLmhpZ2hlclBvaW50ID09PSB2ZXJ0ZXhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBhY3RpdmVFZGdlVGFibGUuc3BsaWNlKGVkZ2VJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXh0VmVydGV4SW5kZXggPSBwb2x5Z29uLmdldE5leHRQb2ludEluZGV4KHZlcnRleEluZGV4KTtcclxuICAgICAgICBjb25zdCBuZXh0VmVydGV4ID0gdmVydGljZXNbbmV4dFZlcnRleEluZGV4XTtcclxuICAgICAgICBpZiAobmV4dFZlcnRleC55ID49IHZlcnRleC55KSB7XHJcbiAgICAgICAgICBjb25zdCBuZXh0RWRnZSA9IG5ldyBBY3RpdmVFZGdlKHZlcnRleCwgbmV4dFZlcnRleCk7XHJcbiAgICAgICAgICBhY3RpdmVFZGdlVGFibGUucHVzaChuZXh0RWRnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGVkZ2VJbmRleCA9IGFjdGl2ZUVkZ2VUYWJsZS5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIGVkZ2UgPT4gZWRnZS5sb3dlclBvaW50ID09PSBuZXh0VmVydGV4ICYmIGVkZ2UuaGlnaGVyUG9pbnQgPT09IHZlcnRleFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zcGxpY2UoZWRnZUluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwcmV2aW91c1kgPj0gMCAmJiBwcmV2aW91c1kgPCB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgICBhY3RpdmVFZGdlVGFibGUuc29ydCgoZTEsIGUyKSA9PiBlMS54IC0gZTIueCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZlRWRnZVRhYmxlLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgICBjb25zdCBlMSA9IGFjdGl2ZUVkZ2VUYWJsZVtpXTtcclxuICAgICAgICAgIGNvbnN0IGUyID0gYWN0aXZlRWRnZVRhYmxlW2kgKyAxXTtcclxuXHJcbiAgICAgICAgICBmaWxsU3RyaXBzLnB1c2goe1xyXG4gICAgICAgICAgICB5OiBwcmV2aW91c1ksXHJcbiAgICAgICAgICAgIGZyb21YOiBlMS54LFxyXG4gICAgICAgICAgICB0b1g6IGUyLnhcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYWN0aXZlRWRnZVRhYmxlLmZvckVhY2goZWRnZSA9PiBlZGdlLm5leHRTY2FuTGluZSgpKTtcclxuICAgICAgcHJldmlvdXNZID0geTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsbFN0cmlwcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VuZEFwcEZpbGxEYXRhRXZlbnQoZXZlbnQ6IEFwcEV2ZW50KSB7XHJcbiAgICB0aGlzLmZpbGxXb3JrZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICB0eXBlOiBGaWxsV29ya2VyTWVzc2FnZVR5cGUuTmV3RmlsbERhdGFFdmVudCxcclxuICAgICAgZXZlbnRcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9wb2x5Z29uLWZpbGxlci9Qb2x5Z29uRmlsbGVyLnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjdGl2ZUVkZ2Uge1xyXG4gIHB1YmxpYyBsb3dlclBvaW50OiBQb2ludDtcclxuICBwdWJsaWMgaGlnaGVyUG9pbnQ6IFBvaW50O1xyXG5cclxuICBwcml2YXRlIGludmVyc2VTbG9wZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3g6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobG93ZXJQb2ludDogUG9pbnQsIGhpZ2hlclBvaW50OiBQb2ludCkge1xyXG4gICAgdGhpcy5sb3dlclBvaW50ID0gbG93ZXJQb2ludDtcclxuICAgIHRoaXMuaGlnaGVyUG9pbnQgPSBoaWdoZXJQb2ludDtcclxuXHJcbiAgICB0aGlzLl94ID0gdGhpcy5sb3dlclBvaW50Lng7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZVNsb3BlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZXh0U2NhbkxpbmUoKSB7XHJcbiAgICB0aGlzLl94ICs9IHRoaXMuaW52ZXJzZVNsb3BlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVTbG9wZSgpIHtcclxuICAgIGlmICh0aGlzLmhpZ2hlclBvaW50LnkgPT09IHRoaXMubG93ZXJQb2ludC55KSB7XHJcbiAgICAgIHRoaXMuaW52ZXJzZVNsb3BlID0gOTk5OTk5OTk5OTk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmludmVyc2VTbG9wZSA9XHJcbiAgICAgICAgKHRoaXMuaGlnaGVyUG9pbnQueCAtIHRoaXMubG93ZXJQb2ludC54KSAvICh0aGlzLmhpZ2hlclBvaW50LnkgLSB0aGlzLmxvd2VyUG9pbnQueSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3BvbHlnb24tZmlsbGVyL0FjdGl2ZUVkZ2UudHMiLCJpbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdjb21tb24vQ09MT1JTJztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgTGluZVByb3BlcnRpZXMgfSBmcm9tICdjb21tb24vTGluZVByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5pbXBvcnQgeyBQb2x5Z29uRmlsbGVyIH0gZnJvbSAncG9seWdvbi1maWxsZXIvUG9seWdvbkZpbGxlcic7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5pbnRlcmZhY2UgUmVuZGVyZXJEZXBlbmRlbmNpZXMge1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcG9seWdvbkZpbGxlcjogUG9seWdvbkZpbGxlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcclxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZW5kZXJpbmdDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgcHJpdmF0ZSBwb2x5Z29uRmlsbGVyOiBQb2x5Z29uRmlsbGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFJlbmRlcmVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmIChjb250ZXh0ID09PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCBjYW52YXMgMmQgcmVuZGVyaW5nIGNvbnRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmZvbnQgPSBjb25maWd1cmF0aW9uLmNhbnZhc0ZvbnQ7XHJcblxyXG4gICAgdGhpcy5wb2x5Z29uRmlsbGVyID0gZGVwZW5kZW5jaWVzLnBvbHlnb25GaWxsZXI7XHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIuaW5qZWN0Q2FudmFzUmVuZGVyaW5nQ29udGV4dCh0aGlzLnJlbmRlcmluZ0NvbnRleHQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5zdHJva2VTdHlsZSA9IENPTE9SUy5CTEFDSy5maWxsU3R5bGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhd1BvaW50KHBvaW50OiBQb2ludCkge1xyXG4gICAgdGhpcy5kcmF3UGl4ZWwocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhd1BpeGVsKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuZmlsbFJlY3QoeCwgeSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhd0xpbmUobGluZTogTGluZSwgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzKTogdm9pZDtcclxuICBwdWJsaWMgZHJhd0xpbmUoc3RhcnRQb2ludDogUG9pbnQsIGVuZFBvaW50OiBQb2ludCwgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzKTogdm9pZDtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIHB1YmxpYyBkcmF3TGluZSguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgaWYgKGFyZ3NbMF0gaW5zdGFuY2VvZiBMaW5lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRyYXdMaW5lQmV0d2VlblBvaW50cyhhcmdzWzBdLnAxLCBhcmdzWzBdLnAyLCBhcmdzWzFdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRyYXdMaW5lQmV0d2VlblBvaW50cyhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3UGF0aChwYXRoOiBQYXRoKSB7XHJcbiAgICBjb25zdCBwYXRoTGluZVByb3BlcnRpZXMgPSBwYXRoLmdldExpbmVQcm9wZXJ0aWVzKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIHBhdGguZ2V0TGluZUl0ZXJhdG9yKCkpIHtcclxuICAgICAgdGhpcy5kcmF3TGluZShsaW5lLCBwYXRoTGluZVByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbGxUZXh0KHRleHQ6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkO1xyXG4gIHB1YmxpYyBmaWxsVGV4dCh0ZXh0OiBzdHJpbmcsIHBvaW50OiBQb2ludCk6IHZvaWQ7XHJcbiAgcHVibGljIGZpbGxUZXh0KHRleHQ6IHN0cmluZywgcG9pbnRPclg6IG51bWJlciB8IFBvaW50LCB5PzogbnVtYmVyKSB7XHJcbiAgICBsZXQgeCA9IHBvaW50T3JYO1xyXG4gICAgaWYgKHR5cGVvZiBwb2ludE9yWCA9PT0gJ29iamVjdCcgJiYgcG9pbnRPclggaW5zdGFuY2VvZiBQb2ludCkge1xyXG4gICAgICB4ID0gcG9pbnRPclgueDtcclxuICAgICAgeSA9IHBvaW50T3JYLnk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmZpbGxUZXh0KHRleHQsIDxudW1iZXI+eCwgPG51bWJlcj55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpIHtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXdMaW5lQmV0d2VlblBvaW50cyhcclxuICAgIHN0YXJ0UG9pbnQ6IFBvaW50LFxyXG4gICAgZW5kUG9pbnQ6IFBvaW50LFxyXG4gICAgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBsaW5lUHJvcGVydGllcy5jb2xvci5maWxsU3R5bGU7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0Lm1vdmVUbyhzdGFydFBvaW50LngsIHN0YXJ0UG9pbnQueSk7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQubGluZVRvKGVuZFBvaW50LngsIGVuZFBvaW50LnkpO1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LnN0cm9rZSgpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9SZW5kZXJlci50cyIsImltcG9ydCB7IEhpdFRlc3RSZXN1bHQgfSBmcm9tICdjb21tb24vSGl0VGVzdFJlc3VsdCc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJ1JlbmRlcmVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFnZSB7XHJcbiAgcHVibGljIGxheWVyczogTGF5ZXJbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgcmVuZGVyKHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5yZW5kZXIocmVuZGVyZXIpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVMYXllcihsYXllcjogTGF5ZXIpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5sYXllcnMuaW5kZXhPZihsYXllcik7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpdFRlc3QocG9pbnQ6IFBvaW50KTogSGl0VGVzdFJlc3VsdCB8IG51bGwge1xyXG4gICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLmxheWVycykge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBsYXllci5oaXRUZXN0KHBvaW50KTtcclxuICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaW5kTGF5ZXJCeU5hbWUobmFtZTogc3RyaW5nKTogTGF5ZXIge1xyXG4gICAgY29uc3QgZm91bmRMYXllciA9IHRoaXMubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIubmFtZSA9PT0gbmFtZSk7XHJcblxyXG4gICAgaWYgKCFmb3VuZExheWVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTGF5ZXIgd2l0aCBuYW1lICR7bmFtZX0gZG9lcyBub3QgZXhpc3RgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm91bmRMYXllcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvU3RhZ2UudHMiLCJpbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvc2VzdFBhdGhGaW5kZXIge1xyXG4gIHB1YmxpYyBnZXRDbG9zZXN0UGF0aChwYXRoczogUGF0aFtdLCBwb2ludDogUG9pbnQpOiBQYXRoIHtcclxuICAgIGlmIChwYXRocy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXRocyBhcnJheSBpcyBlbXB0eScpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbG9zZXN0UGF0aCA9IHBhdGhzWzBdO1xyXG4gICAgbGV0IGNsb3Nlc3REaXN0YW5jZSA9IHRoaXMuZ2V0UGF0aFRvUG9pbnREaXN0YW5jZShjbG9zZXN0UGF0aCwgcG9pbnQpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgcGF0aCA9IHBhdGhzW2ldO1xyXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZ2V0UGF0aFRvUG9pbnREaXN0YW5jZShwYXRoLCBwb2ludCk7XHJcblxyXG4gICAgICBpZiAoY2xvc2VzdERpc3RhbmNlID4gZGlzdGFuY2UpIHtcclxuICAgICAgICBjbG9zZXN0UGF0aCA9IHBhdGg7XHJcbiAgICAgICAgY2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvc2VzdFBhdGg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhdGhUb1BvaW50RGlzdGFuY2UocGF0aDogUGF0aCwgcG9pbnQ6IFBvaW50KSB7XHJcbiAgICByZXR1cm4gcG9pbnQuZ2V0RGlzdGFuY2VTcXVhcmVkVG8ocGF0aC5nZXRDZW50ZXJPZkdyYXZpdHkoKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0Nsb3Nlc3RQYXRoRmluZGVyLnRzIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IExvYWRpbmdGaW5pc2hlZEV2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL0xvYWRpbmdGaW5pc2hlZEV2ZW50JztcclxuaW1wb3J0IHsgTG9hZGluZ1N0YXJ0ZWRFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9Mb2FkaW5nU3RhcnRlZEV2ZW50JztcclxuXHJcbmludGVyZmFjZSBJbWFnZURvd25sb2FkZXJEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VEb3dubG9hZGVyIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IEltYWdlRG93bmxvYWRlckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGltYWdlVG9JbWFnZURhdGEoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPEltYWdlRGF0YT4ge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IDJkIGRyYXdpbmcgY2FudmFzIGNvbnRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaXNJbWFnZURvd25sb2FkZWQoaW1hZ2UpKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMud2FpdEZvckltYWdlKGltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXMud2lkdGggPSBpbWFnZS5uYXR1cmFsV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodDtcclxuXHJcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltYWdlLm5hdHVyYWxXaWR0aCwgaW1hZ2UubmF0dXJhbEhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzSW1hZ2VEb3dubG9hZGVkKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICBpZiAoIWltYWdlLmNvbXBsZXRlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW1hZ2UubmF0dXJhbFdpZHRoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgd2FpdEZvckltYWdlKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICB0aGlzLmRpc3BhdGNoTG9hZGluZ1N0YXJ0ZWRFdmVudCgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRpc3BhdGNoTG9hZGluZ0ZpbmlzaGVkRXZlbnQgPSB0aGlzLmRpc3BhdGNoTG9hZGluZ0ZpbmlzaGVkRXZlbnQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIG9uTG9hZCgpIHtcclxuICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcclxuICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xyXG4gICAgICAgIGRpc3BhdGNoTG9hZGluZ0ZpbmlzaGVkRXZlbnQoKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIG9uRXJyb3IoKSB7XHJcbiAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XHJcbiAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcclxuICAgICAgICBkaXNwYXRjaExvYWRpbmdGaW5pc2hlZEV2ZW50KCk7XHJcbiAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xyXG4gICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc3BhdGNoTG9hZGluZ1N0YXJ0ZWRFdmVudCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IExvYWRpbmdTdGFydGVkRXZlbnQoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc3BhdGNoTG9hZGluZ0ZpbmlzaGVkRXZlbnQoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBMb2FkaW5nRmluaXNoZWRFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyLnRzIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7XHJcbiAgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCxcclxuICBOZXdIZWlnaHRNYXBFdmVudCxcclxuICBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudCxcclxuICBOZXdMaWdodENvbG9yRXZlbnQsXHJcbiAgTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50LFxyXG4gIE5ld0xpZ2h0VHlwZUV2ZW50LFxyXG4gIE5ld05vcm1hbE1hcEV2ZW50XHJcbn0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IExpZ2h0VHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFR5cGUnO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuXHJcbmltcG9ydCB7IEltYWdlRG93bmxvYWRlciB9IGZyb20gJ3NlcnZpY2VzL0ltYWdlRG93bmxvYWRlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBJbnB1dERhdGFJbml0aWFsaXplckRlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgcG9seWdvbkxheWVyOiBMYXllcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0RGF0YUluaXRpYWxpemVyIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcG9seWdvbkxheWVyOiBMYXllcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBJbnB1dERhdGFJbml0aWFsaXplckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5pbWFnZURvd25sb2FkZXIgPSBkZXBlbmRlbmNpZXMuaW1hZ2VEb3dubG9hZGVyO1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkxheWVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGluaXQoKSB7XHJcbiAgICB0aGlzLmFkZEluaXRpYWxQb2x5Z29ucygpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlc1RvRG93bmxvYWQ6IEhUTUxJbWFnZUVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGJhY2tncm91bmRUZXh0dXJlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGJhY2tncm91bmRUZXh0dXJlSW1hZ2Uuc3JjID0gY29uZmlndXJhdGlvbi5wcmVzZXRCYWNrZ3JvdW5kVGV4dHVyZXNbMF07XHJcblxyXG4gICAgY29uc3Qgbm9ybWFsTWFwSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG5vcm1hbE1hcEltYWdlLnNyYyA9IGNvbmZpZ3VyYXRpb24ucHJlc2V0Tm9ybWFsTWFwc1swXTtcclxuXHJcbiAgICBjb25zdCBoZWlnaHRNYXBJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaGVpZ2h0TWFwSW1hZ2Uuc3JjID0gY29uZmlndXJhdGlvbi5wcmVzZXRIZWlnaHRNYXBzWzBdO1xyXG5cclxuICAgIGltYWdlc1RvRG93bmxvYWQucHVzaChiYWNrZ3JvdW5kVGV4dHVyZUltYWdlLCBub3JtYWxNYXBJbWFnZSwgaGVpZ2h0TWFwSW1hZ2UpO1xyXG5cclxuICAgIGNvbnN0IGRvd25sb2FkZWRJbWFnZURhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgaW1hZ2VzVG9Eb3dubG9hZC5tYXAoaW1hZ2UgPT4gdGhpcy5pbWFnZURvd25sb2FkZXIuaW1hZ2VUb0ltYWdlRGF0YShpbWFnZSkpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQoZG93bmxvYWRlZEltYWdlRGF0YVswXSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3Tm9ybWFsTWFwRXZlbnQoZG93bmxvYWRlZEltYWdlRGF0YVsxXSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3SGVpZ2h0TWFwRXZlbnQoZG93bmxvYWRlZEltYWdlRGF0YVsyXSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChcclxuICAgICAgbmV3IE5ld0hlaWdodE1hcEludGVuc2l0eUV2ZW50KGNvbmZpZ3VyYXRpb24ucHJlc2V0SGVpZ2h0TWFwSW50ZW5zaXR5KVxyXG4gICAgKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0xpZ2h0Q29sb3JFdmVudChjb25maWd1cmF0aW9uLnByZXNldExpZ2h0Q29sb3IpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgIG5ldyBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQoY29uZmlndXJhdGlvbi5tb3ZpbmdMaWdodC5kZWZhdWx0UmFkaXVzKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0xpZ2h0VHlwZUV2ZW50KExpZ2h0VHlwZS5Db25zdGFudCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIC8vIE5vdGhpbmcgdG8gZGVzdHJveSBoZXJlXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEluaXRpYWxQb2x5Z29ucygpIHtcclxuICAgIGNvbnN0IHBvaW50czEgPSBbXHJcbiAgICAgIG5ldyBQb2ludCg5NCwgOTMpLFxyXG4gICAgICBuZXcgUG9pbnQoNjksIDM4NiksXHJcbiAgICAgIG5ldyBQb2ludCgxOTAsIDUyNSksXHJcbiAgICAgIG5ldyBQb2ludCg2NjQsIDM2NClcclxuICAgIF07XHJcbiAgICBjb25zdCBwb2x5Z29uMSA9IG5ldyBQb2x5Z29uKHBvaW50czEsIExpbmVQcm9wZXJ0aWVzLmdldERlZmF1bHQoKSk7XHJcblxyXG4gICAgY29uc3QgcG9pbnRzMiA9IFtcclxuICAgICAgbmV3IFBvaW50KDc3NywgMTQyKSxcclxuICAgICAgbmV3IFBvaW50KDcwMCwgNTApLFxyXG4gICAgICBuZXcgUG9pbnQoNDMzLCAzNCksXHJcbiAgICAgIG5ldyBQb2ludCg0MDQsIDE1NiksXHJcbiAgICAgIG5ldyBQb2ludCg1MjcsIDI2MyksXHJcbiAgICAgIG5ldyBQb2ludCg3NTAsIDM1MClcclxuICAgIF07XHJcbiAgICBjb25zdCBwb2x5Z29uMiA9IG5ldyBQb2x5Z29uKHBvaW50czIsIExpbmVQcm9wZXJ0aWVzLmdldERlZmF1bHQoKSk7XHJcblxyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIucGF0aHMucHVzaChwb2x5Z29uMSwgcG9seWdvbjIpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvSW5wdXREYXRhSW5pdGlhbGl6ZXIudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtcclxuICBOZXdMaWdodFBvc2l0aW9uRXZlbnQsXHJcbiAgTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50LFxyXG4gIE5ld0xpZ2h0VHlwZUV2ZW50XHJcbn0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5pbXBvcnQgeyBMaWdodFR5cGUgfSBmcm9tICdjb21tb24vTGlnaHRUeXBlJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIExpZ2h0U2ltdWxhdG9yRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBjZW50ZXJQb2ludDogUG9pbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaWdodFNpbXVsYXRvciBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgaG9yaXpvbnRhbFJhZGlhbnNNb2R1bG9WYWx1ZSA9IDIgKiBNYXRoLlBJOyAvLyBbMDsgMzYwXSBkZWdyZWVzXHJcbiAgcHJpdmF0ZSBob3Jpem9udGFsU3RlcEluUmFkaWFuczogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIG1pblZlcnRpY2FsQW5nbGU6IG51bWJlcjtcclxuICBwcml2YXRlIHZlcnRpY2FsQW5nbGVEZWx0YTogbnVtYmVyO1xyXG4gIHByaXZhdGUgdmVydGljYWxTdGVwSW5SYWRpYW5zOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjZW50ZXJQb2ludDogUG9pbnQ7XHJcblxyXG4gIHByaXZhdGUgbW92aW5nTGlnaHRJbnRlcnZhbElkOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBsaWdodEhvcml6b250YWxBbmdsZSA9IDA7XHJcbiAgcHJpdmF0ZSBsaWdodFZlcnRpY2FsQW5nbGVPZmZzZXQgPSBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0Lm1pblZlcnRpY2FsQW5nbGU7XHJcbiAgcHJpdmF0ZSBsaWdodFZlcnRpY2FsUmlzaW5nID0gdHJ1ZTtcclxuICBwcml2YXRlIGxpZ2h0UG9zaXRpb25SYWRpdXM6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBMaWdodFNpbXVsYXRvckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5jZW50ZXJQb2ludCA9IGRlcGVuZGVuY2llcy5jZW50ZXJQb2ludDtcclxuXHJcbiAgICB0aGlzLm9uTmV3TGlnaHRUeXBlID0gdGhpcy5vbk5ld0xpZ2h0VHlwZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5tb3ZpbmdMaWdodFRpY2sgPSB0aGlzLm1vdmluZ0xpZ2h0VGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5ld0xpZ2h0UG9zaXRpb25SYWRpdXMgPSB0aGlzLm9uTmV3TGlnaHRQb3NpdGlvblJhZGl1cy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKE5ld0xpZ2h0VHlwZUV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld0xpZ2h0VHlwZSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICB0aGlzLm9uTmV3TGlnaHRQb3NpdGlvblJhZGl1c1xyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnBlcmZvcm1Jbml0aWFsQ2FsY3VsYXRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoTmV3TGlnaHRUeXBlRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTmV3TGlnaHRUeXBlKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25OZXdMaWdodFBvc2l0aW9uUmFkaXVzXHJcbiAgICApO1xyXG4gICAgdGhpcy5zdG9wTW92aW5nTGlnaHQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGVyZm9ybUluaXRpYWxDYWxjdWxhdGlvbnMoKSB7XHJcbiAgICB0aGlzLmhvcml6b250YWxTdGVwSW5SYWRpYW5zID0gY29uZmlndXJhdGlvbi5tb3ZpbmdMaWdodC50aWNrSW50ZXJ2YWwgL1xyXG4gICAgICBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0Lmhvcml6b250YWxMYXBUaW1lICpcclxuICAgICAgMiAqXHJcbiAgICAgIE1hdGguUEk7XHJcblxyXG4gICAgdGhpcy5taW5WZXJ0aWNhbEFuZ2xlID0gY29uZmlndXJhdGlvbi5tb3ZpbmdMaWdodC5taW5WZXJ0aWNhbEFuZ2xlO1xyXG4gICAgdGhpcy52ZXJ0aWNhbEFuZ2xlRGVsdGEgPSBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0Lm1heFZlcnRpY2FsQW5nbGUgLVxyXG4gICAgICB0aGlzLm1pblZlcnRpY2FsQW5nbGU7XHJcblxyXG4gICAgdGhpcy52ZXJ0aWNhbFN0ZXBJblJhZGlhbnMgPSBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0LnRpY2tJbnRlcnZhbCAvXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQudmVydGljYWxMYXBUaW1lICpcclxuICAgICAgdGhpcy52ZXJ0aWNhbEFuZ2xlRGVsdGE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3TGlnaHRUeXBlKGV2ZW50OiBOZXdMaWdodFR5cGVFdmVudCkge1xyXG4gICAgc3dpdGNoIChldmVudC5wYXlsb2FkKSB7XHJcbiAgICAgIGNhc2UgTGlnaHRUeXBlLkNvbnN0YW50OlxyXG4gICAgICAgIHRoaXMuc3RvcE1vdmluZ0xpZ2h0KCk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaExpZ2h0UG9zaXRpb24obmV3IFZlY3RvcjMoMCwgMCwgMSkpO1xyXG4gICAgICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMaWdodFR5cGUuTW92aW5nOlxyXG4gICAgICAgIHRoaXMuc3RhcnRNb3ZpbmdMaWdodCgpO1xyXG4gICAgICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbGlnaHQgdHlwZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwYXRjaExpZ2h0UG9zaXRpb24ocG9zaXRpb246IFZlY3RvcjMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0xpZ2h0UG9zaXRpb25FdmVudChwb3NpdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydE1vdmluZ0xpZ2h0KCkge1xyXG4gICAgdGhpcy5tb3ZpbmdMaWdodEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChcclxuICAgICAgdGhpcy5tb3ZpbmdMaWdodFRpY2ssXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQudGlja0ludGVydmFsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZpbmdMaWdodFRpY2soKSB7XHJcbiAgICBjb25zdCB7IHg6IGNlbnRlclgsIHk6IGNlbnRlclkgfSA9IHRoaXMuY2VudGVyUG9pbnQ7XHJcbiAgICBjb25zdCB2ZXJ0aWNhbEFuZ2xlID1cclxuICAgICAgY29uZmlndXJhdGlvbi5tb3ZpbmdMaWdodC5taW5WZXJ0aWNhbEFuZ2xlICsgdGhpcy5saWdodFZlcnRpY2FsQW5nbGVPZmZzZXQ7XHJcblxyXG4gICAgY29uc3QgaG9yaXpvbnRhbFJhZGl1cyA9IHRoaXMubGlnaHRQb3NpdGlvblJhZGl1cyAqIE1hdGguY29zKHZlcnRpY2FsQW5nbGUpO1xyXG5cclxuICAgIGNvbnN0IHggPSBjZW50ZXJYICsgaG9yaXpvbnRhbFJhZGl1cyAqIE1hdGguY29zKHRoaXMubGlnaHRIb3Jpem9udGFsQW5nbGUpO1xyXG4gICAgY29uc3QgeSA9IGNlbnRlclkgKyBob3Jpem9udGFsUmFkaXVzICogTWF0aC5zaW4odGhpcy5saWdodEhvcml6b250YWxBbmdsZSk7XHJcbiAgICBjb25zdCB6ID0gdGhpcy5saWdodFBvc2l0aW9uUmFkaXVzICogTWF0aC5zaW4odmVydGljYWxBbmdsZSk7XHJcblxyXG4gICAgY29uc3QgbGlnaHRQb3NpdGlvbiA9IG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG4gICAgdGhpcy5kaXNwYXRjaExpZ2h0UG9zaXRpb24obGlnaHRQb3NpdGlvbik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuXHJcbiAgICB0aGlzLmhvcml6b250YWxUaWNrKCk7XHJcbiAgICB0aGlzLnZlcnRpY2FsVGljaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBob3Jpem9udGFsVGljaygpIHtcclxuICAgIHRoaXMubGlnaHRIb3Jpem9udGFsQW5nbGUgKz0gdGhpcy5ob3Jpem9udGFsU3RlcEluUmFkaWFucztcclxuICAgIGlmICh0aGlzLmxpZ2h0SG9yaXpvbnRhbEFuZ2xlID49IHRoaXMuaG9yaXpvbnRhbFJhZGlhbnNNb2R1bG9WYWx1ZSkge1xyXG4gICAgICB0aGlzLmxpZ2h0SG9yaXpvbnRhbEFuZ2xlIC09IHRoaXMuaG9yaXpvbnRhbFJhZGlhbnNNb2R1bG9WYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVydGljYWxUaWNrKCkge1xyXG4gICAgaWYgKHRoaXMubGlnaHRWZXJ0aWNhbFJpc2luZykge1xyXG4gICAgICB0aGlzLmxpZ2h0VmVydGljYWxBbmdsZU9mZnNldCArPSB0aGlzLnZlcnRpY2FsU3RlcEluUmFkaWFucztcclxuICAgICAgaWYgKHRoaXMubGlnaHRWZXJ0aWNhbEFuZ2xlT2Zmc2V0ID49IHRoaXMudmVydGljYWxBbmdsZURlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5saWdodFZlcnRpY2FsUmlzaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGlnaHRWZXJ0aWNhbEFuZ2xlT2Zmc2V0IC09IHRoaXMudmVydGljYWxTdGVwSW5SYWRpYW5zO1xyXG4gICAgICBpZiAodGhpcy5saWdodFZlcnRpY2FsQW5nbGVPZmZzZXQgPD0gMCkge1xyXG4gICAgICAgIHRoaXMubGlnaHRWZXJ0aWNhbFJpc2luZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcE1vdmluZ0xpZ2h0KCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLm1vdmluZ0xpZ2h0SW50ZXJ2YWxJZCk7XHJcbiAgICB0aGlzLmxpZ2h0SG9yaXpvbnRhbEFuZ2xlID0gMDtcclxuICAgIHRoaXMubGlnaHRWZXJ0aWNhbEFuZ2xlT2Zmc2V0ID0gY29uZmlndXJhdGlvbi5tb3ZpbmdMaWdodC5taW5WZXJ0aWNhbEFuZ2xlO1xyXG4gICAgdGhpcy5saWdodFZlcnRpY2FsUmlzaW5nID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25OZXdMaWdodFBvc2l0aW9uUmFkaXVzKGV2ZW50OiBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQpIHtcclxuICAgIHRoaXMubGlnaHRQb3NpdGlvblJhZGl1cyA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0xpZ2h0U2ltdWxhdG9yLnRzIiwiaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnY29tbW9uL1BvbHlnb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvbHlnb25DbGlwcGVyIHtcclxuICBwdWJsaWMgY2xpcFBvbHlnb25zKHBvbHlnb24xOiBQb2x5Z29uLCBwb2x5Z29uMjogUG9seWdvbikge1xyXG4gICAgaWYgKHBvbHlnb24xLmlzQ29udmV4KCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2xpcFBvbHlnb24ocG9seWdvbjIsIHBvbHlnb24xKTtcclxuICAgIH0gZWxzZSBpZiAocG9seWdvbjIuaXNDb252ZXgoKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jbGlwUG9seWdvbihwb2x5Z29uMSwgcG9seWdvbjIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcignQm90aCBwb2x5Z29ucyBhcmUgY29uY2F2ZScpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHN1YmplY3RQb2x5Z29uXHJcbiAgICogQHBhcmFtIGNsaXBwaW5nUG9seWdvbiBNdXN0IGJlIGNvbnZleFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbGlwUG9seWdvbihzdWJqZWN0UG9seWdvbjogUG9seWdvbiwgY2xpcHBpbmdQb2x5Z29uOiBQb2x5Z29uKSB7XHJcbiAgICBjb25zdCBjbGlwcGluZ1BvbHlnb25DZW50ZXIgPSBjbGlwcGluZ1BvbHlnb24uZ2V0Q2VudGVyT2ZHcmF2aXR5KCk7XHJcblxyXG4gICAgbGV0IG91dHB1dDogUG9pbnRbXSA9IHN1YmplY3RQb2x5Z29uLmdldFZlcnRpY2VzKCk7XHJcbiAgICBjb25zdCBjbGlwcGluZ1BvbHlnb25FZGdlczogTGluZVtdID0gW107XHJcbiAgICBjb25zdCBjbGlwcGluZ1BvbHlnb25WZXJ0aWNlcyA9IGNsaXBwaW5nUG9seWdvbi5nZXRWZXJ0aWNlcygpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpcHBpbmdQb2x5Z29uVmVydGljZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgZWRnZSA9IG5ldyBMaW5lKFxyXG4gICAgICAgIGNsaXBwaW5nUG9seWdvblZlcnRpY2VzWyhpICsgMSkgJSBjbGlwcGluZ1BvbHlnb25WZXJ0aWNlcy5sZW5ndGhdLFxyXG4gICAgICAgIGNsaXBwaW5nUG9seWdvblZlcnRpY2VzW2ldXHJcbiAgICAgICk7XHJcbiAgICAgIGNsaXBwaW5nUG9seWdvbkVkZ2VzLnB1c2goZWRnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBlZGdlIG9mIGNsaXBwaW5nUG9seWdvbkVkZ2VzKSB7XHJcbiAgICAgIGNvbnN0IGlucHV0ID0gb3V0cHV0O1xyXG4gICAgICBvdXRwdXQgPSBbXTtcclxuICAgICAgbGV0IHBwID0gaW5wdXRbaW5wdXQubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICBpbnB1dC5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2FtZVNpZGUocCwgY2xpcHBpbmdQb2x5Z29uQ2VudGVyLCBlZGdlKSkge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmlzU2FtZVNpZGUocHAsIGNsaXBwaW5nUG9seWdvbkNlbnRlciwgZWRnZSkpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2godGhpcy5nZXRJbnRlcnNlY3Rpb25Qb2ludChuZXcgTGluZShwcCwgcCksIGVkZ2UpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG91dHB1dC5wdXNoKHApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc1NhbWVTaWRlKHBwLCBjbGlwcGluZ1BvbHlnb25DZW50ZXIsIGVkZ2UpKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKHRoaXMuZ2V0SW50ZXJzZWN0aW9uUG9pbnQobmV3IExpbmUocHAsIHApLCBlZGdlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBwID0gcDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG91dHB1dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3V0cHV0V2l0aG91dER1cGxpY2F0ZXM6IFBvaW50W10gPSBbXTtcclxuICAgIG91dHB1dFdpdGhvdXREdXBsaWNhdGVzLnB1c2gob3V0cHV0WzBdKTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb3V0cHV0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhUG9pbnQuZXBzaWxvbkVxdWFscyhvdXRwdXRbaV0sIG91dHB1dFdpdGhvdXREdXBsaWNhdGVzW291dHB1dFdpdGhvdXREdXBsaWNhdGVzLmxlbmd0aCAtIDFdKVxyXG4gICAgICApIHtcclxuICAgICAgICBvdXRwdXRXaXRob3V0RHVwbGljYXRlcy5wdXNoKG91dHB1dFtpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxyXG4gICAgY29uc3Qgcm91bmRlZFBvaW50cyA9IG91dHB1dFdpdGhvdXREdXBsaWNhdGVzLm1hcChwb2ludCA9PiBwb2ludC5mbG9vcigpKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvbHlnb24ocm91bmRlZFBvaW50cywgc3ViamVjdFBvbHlnb24ubGluZVByb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1NhbWVTaWRlKHAxOiBQb2ludCwgcDI6IFBvaW50LCBsaW5lOiBMaW5lKSB7XHJcbiAgICBjb25zdCBwMURpciA9IGxpbmUuZ2V0RGlyZWN0aW9uKHAxKTtcclxuICAgIGNvbnN0IHAyRGlyID0gbGluZS5nZXREaXJlY3Rpb24ocDIpO1xyXG5cclxuICAgIGlmIChwMURpciA9PT0gcDJEaXIgfHwgcDFEaXIgPT09IDAgfHwgcDJEaXIgPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJbnRlcnNlY3Rpb25Qb2ludChsaW5lMTogTGluZSwgbGluZTI6IExpbmUpIHtcclxuICAgIGNvbnN0IGRpcmVjdGlvbjEgPSBQb2ludC5zdWJ0cmFjdChsaW5lMS5wMiwgbGluZTEucDEpO1xyXG4gICAgY29uc3QgZGlyZWN0aW9uMiA9IFBvaW50LnN1YnRyYWN0KGxpbmUyLnAyLCBsaW5lMi5wMSk7XHJcblxyXG4gICAgY29uc3QgZG90UGVycCA9IGRpcmVjdGlvbjEueCAqIGRpcmVjdGlvbjIueSAtIGRpcmVjdGlvbjEueSAqIGRpcmVjdGlvbjIueDtcclxuXHJcbiAgICBjb25zdCBjID0gbmV3IFBvaW50KGxpbmUyLnAxLnggLSBsaW5lMS5wMS54LCBsaW5lMi5wMS55IC0gbGluZTEucDEueSk7XHJcbiAgICBjb25zdCB0ID0gKGMueCAqIGRpcmVjdGlvbjIueSAtIGMueSAqIGRpcmVjdGlvbjIueCkgLyBkb3RQZXJwO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9pbnQobGluZTEucDEueCArIHQgKiBkaXJlY3Rpb24xLngsIGxpbmUxLnAxLnkgKyB0ICogZGlyZWN0aW9uMS55KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvUG9seWdvbkNsaXBwZXIudHMiLCJpbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IExFWCB9IGZyb20gJ0xFWCc7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuXHJcbmltcG9ydCB7IElucHV0RGF0YVNlcnZpY2UgfSBmcm9tICd1aS9JbnB1dERhdGFTZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9hZGluZ1VJU2VydmljZSB9IGZyb20gJ3VpL0xvYWRpbmdVSVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICd1aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXInO1xyXG5pbXBvcnQgeyBOZXdQb2x5Z29uVUlDb250cm9sbGVyIH0gZnJvbSAndWkvTmV3UG9seWdvblVJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFBhdGhEcmFnZ2luZ1NlcnZpY2UgfSBmcm9tICd1aS9QYXRoRHJhZ2dpbmdTZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9pbnREcmFnZ2luZ1NlcnZpY2UgfSBmcm9tICd1aS9Qb2ludERyYWdnaW5nU2VydmljZSc7XHJcbmltcG9ydCB7IFBvaW50SW5zZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAndWkvUG9pbnRJbnNlcnRlclNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb2ludFJlbW92ZXJTZXJ2aWNlIH0gZnJvbSAndWkvUG9pbnRSZW1vdmVyU2VydmljZSc7XHJcbmltcG9ydCB7IFBvaW50U3luY1NlcnZpY2UgfSBmcm9tICd1aS9Qb2ludFN5bmNTZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VyaWFsaXphdGlvblNlcnZpY2UgfSBmcm9tICd1aS9TZXJpYWxpemF0aW9uU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBDbG9zZXN0UGF0aEZpbmRlciB9IGZyb20gJ3NlcnZpY2VzL0Nsb3Nlc3RQYXRoRmluZGVyJztcclxuaW1wb3J0IHsgSW1hZ2VEb3dubG9hZGVyIH0gZnJvbSAnc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyJztcclxuaW1wb3J0IHsgUG9seWdvbkNsaXBwZXIgfSBmcm9tICdzZXJ2aWNlcy9Qb2x5Z29uQ2xpcHBlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBMaW5lQ2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9MaW5lQ2xpY2tFdmVudCc7XHJcblxyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheSc7XHJcbmltcG9ydCB7IERpYWxvZ092ZXJsYXkgfSBmcm9tICd1aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXknO1xyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0J1dHRvbic7XHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nJztcclxuaW1wb3J0IHsgUG9seWdvbkNsaXBwaW5nU2VydmljZSB9IGZyb20gJ3VpL1BvbHlnb25DbGlwcGluZ1NlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIFVJQ29udHJvbGxlckRlcGVuZGVuY2llcyB7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG4gIHBvbHlnb25DbGlwcGVyOiBQb2x5Z29uQ2xpcHBlcjtcclxuICBjbG9zZXN0UGF0aEZpbmRlcjogQ2xvc2VzdFBhdGhGaW5kZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVSUNvbnRyb2xsZXIgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcG9seWdvbkNsaXBwZXI6IFBvbHlnb25DbGlwcGVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2xvc2VzdFBhdGhGaW5kZXI6IENsb3Nlc3RQYXRoRmluZGVyO1xyXG5cclxuICBwcml2YXRlIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIHByaXZhdGUgYXBwbGljYXRpb25VSUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkaWFsb2dPdmVybGF5OiBEaWFsb2dPdmVybGF5O1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHVpU2VydmljZXM6IFNlcnZpY2VbXSA9IFtdO1xyXG4gIHByaXZhdGUgbmV3UG9seWdvblVJQ29udHJvbGxlcjogTmV3UG9seWdvblVJQ29udHJvbGxlcjtcclxuICBwcml2YXRlIHBhdGhEcmFnZ2luZ1NlcnZpY2U6IFBhdGhEcmFnZ2luZ1NlcnZpY2U7XHJcbiAgcHJpdmF0ZSBwb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlOiBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFVJQ29udHJvbGxlckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5jYW52YXMgPSBkZXBlbmRlbmNpZXMuY2FudmFzO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IGRlcGVuZGVuY2llcy5yZW5kZXJlcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmltYWdlRG93bmxvYWRlciA9IGRlcGVuZGVuY2llcy5pbWFnZURvd25sb2FkZXI7XHJcbiAgICB0aGlzLnBvbHlnb25DbGlwcGVyID0gZGVwZW5kZW5jaWVzLnBvbHlnb25DbGlwcGVyO1xyXG4gICAgdGhpcy5jbG9zZXN0UGF0aEZpbmRlciA9IGRlcGVuZGVuY2llcy5jbG9zZXN0UGF0aEZpbmRlcjtcclxuXHJcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZmluZEFwcGxpY2F0aW9uVUlDb250YWluZXIoKTtcclxuICAgIHRoaXMuZmluZERpYWxvZ092ZXJsYXkoKTtcclxuXHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IG5ldyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIodGhpcy5jYW52YXMpO1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVOZXdQb2x5Z29uVUlDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBvaW50RHJhZ2dpbmdTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBvaW50SW5zZXJ0ZXJTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBvaW50UmVtb3ZlclNlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlUG9pbnRTeW5jU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVQYXRoRHJhZ2dpbmdTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVNlcmlhbGl6YXRpb25TZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUlucHV0RGF0YVNlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlUG9seWdvbkNsaXBwaW5nU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVMb2FkaW5nVUlTZXJ2aWNlKCk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLmZvckVhY2godWlTZXJ2aWNlID0+IHVpU2VydmljZS5pbml0KCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMuZm9yRWFjaCh1aVNlcnZpY2UgPT4gdWlTZXJ2aWNlLmRlc3Ryb3koKSk7XHJcbiAgICB0aGlzLnVpU2VydmljZXMuc3BsaWNlKDAsIHRoaXMudWlTZXJ2aWNlcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCFldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhdGhEcmFnZ2luZ1NlcnZpY2Uuc3RhcnRNb3ZpbmdQYXRoKGV2ZW50KTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGlmICh0aGlzLnBhdGhEcmFnZ2luZ1NlcnZpY2UuaXNEcmFnZ2luZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9pbnQgPSB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci5nZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNsaXBwaW5nU2VydmljZS5jbGlwUG9seWdvbnMocG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpdFRlc3RSZXN1bHQgPSB0aGlzLnN0YWdlLmhpdFRlc3QocG9pbnQpO1xyXG5cclxuICAgIGlmICghaGl0VGVzdFJlc3VsdCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uZXdQb2x5Z29uVUlDb250cm9sbGVyLmFkZE5ld1BvaW50KHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWhpdFRlc3RSZXN1bHQucGF0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICBuZXcgTGluZUNsaWNrRXZlbnQoaGl0VGVzdFJlc3VsdC5saW5lLCBoaXRUZXN0UmVzdWx0LnBhdGgsIHBvaW50KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZEFwcGxpY2F0aW9uVUlDb250YWluZXIoKSB7XHJcbiAgICBjb25zdCBhcHBsaWNhdGlvblVJQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlndXJhdGlvbi5hcHBsaWNhdGlvblVJQ29udGFpbmVySUQpO1xyXG4gICAgaWYgKCFhcHBsaWNhdGlvblVJQ29udGFpbmVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXBwbGljYXRpb24gVUkgY29udGFpbmVyIG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBwbGljYXRpb25VSUNvbnRhaW5lciA9IGFwcGxpY2F0aW9uVUlDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmREaWFsb2dPdmVybGF5KCkge1xyXG4gICAgY29uc3QgZGlhbG9nT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FwcC1kaWFsb2ctb3ZlcmxheScpO1xyXG4gICAgaWYgKCFkaWFsb2dPdmVybGF5KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRGlhbG9nIG92ZXJsYXkgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaWFsb2dPdmVybGF5ID0gPERpYWxvZ092ZXJsYXk+ZGlhbG9nT3ZlcmxheTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9pbnRTeW5jU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHBvaW50U3luY1NlcnZpY2UgPSBuZXcgUG9pbnRTeW5jU2VydmljZSh7XHJcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5hcHBsaWNhdGlvblVJQ29udGFpbmVyLFxyXG4gICAgICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLFxyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZSxcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2gocG9pbnRTeW5jU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVBvaW50UmVtb3ZlclNlcnZpY2UoKSB7XHJcbiAgICBjb25zdCBwb2ludFJlbW92ZXJTZXJ2aWNlID0gbmV3IFBvaW50UmVtb3ZlclNlcnZpY2Uoe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChwb2ludFJlbW92ZXJTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9pbnREcmFnZ2luZ1NlcnZpY2UoKSB7XHJcbiAgICBjb25zdCBwb2ludERyYWdnaW5nU2VydmljZSA9IG5ldyBQb2ludERyYWdnaW5nU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlLFxyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChwb2ludERyYWdnaW5nU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU5ld1BvbHlnb25VSUNvbnRyb2xsZXIoKSB7XHJcbiAgICB0aGlzLm5ld1BvbHlnb25VSUNvbnRyb2xsZXIgPSBuZXcgTmV3UG9seWdvblVJQ29udHJvbGxlcih7XHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlLFxyXG4gICAgICBwb2x5Z29uTGF5ZXI6IHRoaXMuc3RhZ2UuZmluZExheWVyQnlOYW1lKExFWC5QT0xZR09OX0xBWUVSX05BTUUpLFxyXG4gICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcixcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2godGhpcy5uZXdQb2x5Z29uVUlDb250cm9sbGVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9pbnRJbnNlcnRlclNlcnZpY2UoKSB7XHJcbiAgICBjb25zdCBwb2ludEluc2VydGVyU2VydmljZSA9IG5ldyBQb2ludEluc2VydGVyU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHBvaW50SW5zZXJ0ZXJTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUGF0aERyYWdnaW5nU2VydmljZSgpIHtcclxuICAgIHRoaXMucGF0aERyYWdnaW5nU2VydmljZSA9IG5ldyBQYXRoRHJhZ2dpbmdTZXJ2aWNlKHtcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXHJcbiAgICAgIGNsb3Nlc3RQYXRoRmluZGVyOiB0aGlzLmNsb3Nlc3RQYXRoRmluZGVyXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaCh0aGlzLnBhdGhEcmFnZ2luZ1NlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVTZXJpYWxpemF0aW9uU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHNlcmlhbGl6YXRpb25TZXJ2aWNlID0gbmV3IFNlcmlhbGl6YXRpb25TZXJ2aWNlKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2VcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHNlcmlhbGl6YXRpb25TZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSW5wdXREYXRhU2VydmljZSgpIHtcclxuICAgIGNvbnN0IGlucHV0RGF0YVNlcnZpY2UgPSBuZXcgSW5wdXREYXRhU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIGltYWdlRG93bmxvYWRlcjogdGhpcy5pbWFnZURvd25sb2FkZXIsXHJcbiAgICAgIGRpYWxvZ092ZXJsYXk6IHRoaXMuZGlhbG9nT3ZlcmxheVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2goaW5wdXREYXRhU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVBvbHlnb25DbGlwcGluZ1NlcnZpY2UoKSB7XHJcbiAgICB0aGlzLnBvbHlnb25DbGlwcGluZ1NlcnZpY2UgPSBuZXcgUG9seWdvbkNsaXBwaW5nU2VydmljZSh7XHJcbiAgICAgIHBvbHlnb25DbGlwcGVyOiB0aGlzLnBvbHlnb25DbGlwcGVyLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBwb2x5Z29uTGF5ZXI6IHRoaXMuc3RhZ2UuZmluZExheWVyQnlOYW1lKExFWC5QT0xZR09OX0xBWUVSX05BTUUpLFxyXG4gICAgICBjbG9zZXN0UGF0aEZpbmRlcjogdGhpcy5jbG9zZXN0UGF0aEZpbmRlclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2godGhpcy5wb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTG9hZGluZ1VJU2VydmljZSgpIHtcclxuICAgIGNvbnN0IGxvYWRpbmdVSVNlcnZpY2UgPSBuZXcgTG9hZGluZ1VJU2VydmljZSh7XHJcbiAgICAgIGRpYWxvZ092ZXJsYXk6IHRoaXMuZGlhbG9nT3ZlcmxheSxcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2gobG9hZGluZ1VJU2VydmljZSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1VJQ29udHJvbGxlci50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VEb3dubG9hZGVyIH0gZnJvbSAnc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nT3ZlcmxheSB9IGZyb20gJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEJhY2tncm91bmRTZWxlY3RCdXR0b24sXHJcbiAgSGVpZ2h0TWFwSW50ZW5zaXR5SW5wdXQsXHJcbiAgSGVpZ2h0TWFwU2VsZWN0QnV0dG9uLFxyXG4gIExpZ2h0Q29sb3JTZWxlY3RCdXR0b24sXHJcbiAgTGlnaHRUeXBlU2VsZWN0LFxyXG4gIE5vcm1hbE1hcFNlbGVjdEJ1dHRvblxyXG59IGZyb20gJ3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YSc7XHJcblxyXG5pbnRlcmZhY2UgU2VyaWFsaXphdGlvblNlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG4gIGRpYWxvZ092ZXJsYXk6IERpYWxvZ092ZXJsYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dERhdGFTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBpbnB1dERhdGFDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGlhbG9nT3ZlcmxheTogRGlhbG9nT3ZlcmxheTtcclxuICBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcblxyXG4gIHByaXZhdGUgYmFja2dyb3VuZFNlbGVjdEJ1dHRvbjogQmFja2dyb3VuZFNlbGVjdEJ1dHRvbjtcclxuICBwcml2YXRlIGhlaWdodE1hcFNlbGVjdEJ1dHRvbjogSGVpZ2h0TWFwU2VsZWN0QnV0dG9uO1xyXG4gIHByaXZhdGUgbGlnaHRDb2xvclNlbGVjdEJ1dHRvbjogTGlnaHRDb2xvclNlbGVjdEJ1dHRvbjtcclxuICBwcml2YXRlIG5vcm1hbE1hcFNlbGVjdEJ1dHRvbjogTm9ybWFsTWFwU2VsZWN0QnV0dG9uO1xyXG4gIHByaXZhdGUgbGlnaHRUeXBlU2VsZWN0OiBMaWdodFR5cGVTZWxlY3Q7XHJcbiAgcHJpdmF0ZSBoZWlnaHRNYXBJbnRlbnNpdHlJbnB1dDogSGVpZ2h0TWFwSW50ZW5zaXR5SW5wdXQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogU2VyaWFsaXphdGlvblNlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuaW1hZ2VEb3dubG9hZGVyID0gZGVwZW5kZW5jaWVzLmltYWdlRG93bmxvYWRlcjtcclxuICAgIHRoaXMuZGlhbG9nT3ZlcmxheSA9IGRlcGVuZGVuY2llcy5kaWFsb2dPdmVybGF5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLmZpbmRJbnB1dERhdGFDb250YWluZXIoKTtcclxuICAgIHRoaXMuc2V0dXBFbGVtZW50cygpO1xyXG5cclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYmFja2dyb3VuZFNlbGVjdEJ1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmxpZ2h0Q29sb3JTZWxlY3RCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ub3JtYWxNYXBTZWxlY3RCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oZWlnaHRNYXBTZWxlY3RCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5saWdodFR5cGVTZWxlY3QpO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5oZWlnaHRNYXBJbnRlbnNpdHlJbnB1dCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuYmFja2dyb3VuZFNlbGVjdEJ1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmxpZ2h0Q29sb3JTZWxlY3RCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5ub3JtYWxNYXBTZWxlY3RCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5oZWlnaHRNYXBTZWxlY3RCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5saWdodFR5cGVTZWxlY3QpO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5oZWlnaHRNYXBJbnRlbnNpdHlJbnB1dCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRJbnB1dERhdGFDb250YWluZXIoKSB7XHJcbiAgICBjb25zdCBpbnB1dERhdGFDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZGF0YS1jb250YWluZXInKTtcclxuICAgIGlmICghaW5wdXREYXRhQ29udGFpbmVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5wdXQgZGF0YSBjb250YWluZXIgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIgPSBpbnB1dERhdGFDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwRWxlbWVudHMoKSB7XHJcbiAgICBjb25zdCB7IGV2ZW50QWdncmVnYXRvciwgZGlhbG9nT3ZlcmxheSwgaW1hZ2VEb3dubG9hZGVyIH0gPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IGltYWdlU2VsZWN0QnV0dG9uRGVwZW5kZW5jaWVzID0geyBldmVudEFnZ3JlZ2F0b3IsIGRpYWxvZ092ZXJsYXksIGltYWdlRG93bmxvYWRlciB9O1xyXG4gICAgY29uc3QgY29sb3JTZWxlY3RCdXR0b25EZXBlbmRlbmNpZXMgPSB7IGRpYWxvZ092ZXJsYXksIGV2ZW50QWdncmVnYXRvciB9O1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZFNlbGVjdEJ1dHRvbiA9IG5ldyBCYWNrZ3JvdW5kU2VsZWN0QnV0dG9uKGltYWdlU2VsZWN0QnV0dG9uRGVwZW5kZW5jaWVzKTtcclxuICAgIHRoaXMuaGVpZ2h0TWFwU2VsZWN0QnV0dG9uID0gbmV3IEhlaWdodE1hcFNlbGVjdEJ1dHRvbihpbWFnZVNlbGVjdEJ1dHRvbkRlcGVuZGVuY2llcyk7XHJcbiAgICB0aGlzLmxpZ2h0Q29sb3JTZWxlY3RCdXR0b24gPSBuZXcgTGlnaHRDb2xvclNlbGVjdEJ1dHRvbihjb2xvclNlbGVjdEJ1dHRvbkRlcGVuZGVuY2llcyk7XHJcbiAgICB0aGlzLm5vcm1hbE1hcFNlbGVjdEJ1dHRvbiA9IG5ldyBOb3JtYWxNYXBTZWxlY3RCdXR0b24oaW1hZ2VTZWxlY3RCdXR0b25EZXBlbmRlbmNpZXMpO1xyXG4gICAgdGhpcy5saWdodFR5cGVTZWxlY3QgPSBuZXcgTGlnaHRUeXBlU2VsZWN0KHsgZXZlbnRBZ2dyZWdhdG9yIH0pO1xyXG4gICAgdGhpcy5oZWlnaHRNYXBJbnRlbnNpdHlJbnB1dCA9IG5ldyBIZWlnaHRNYXBJbnRlbnNpdHlJbnB1dCh7IGV2ZW50QWdncmVnYXRvciB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvSW5wdXREYXRhU2VydmljZS50cyIsImltcG9ydCB7IEJhY2tncm91bmRTZWxlY3RCdXR0b24gfSBmcm9tICd1aS9jb21wb25lbnRzL2lucHV0LWRhdGEvQmFja2dyb3VuZFNlbGVjdEJ1dHRvbic7XHJcbmltcG9ydCB7IEhlaWdodE1hcEludGVuc2l0eUlucHV0IH0gZnJvbSAndWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0hlaWdodE1hcEludGVuc2l0eUlucHV0JztcclxuaW1wb3J0IHsgSGVpZ2h0TWFwU2VsZWN0QnV0dG9uIH0gZnJvbSAndWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0hlaWdodE1hcFNlbGVjdEJ1dHRvbic7XHJcbmltcG9ydCB7IExpZ2h0Q29sb3JTZWxlY3RCdXR0b24gfSBmcm9tICd1aS9jb21wb25lbnRzL2lucHV0LWRhdGEvTGlnaHRDb2xvclNlbGVjdEJ1dHRvbic7XHJcbmltcG9ydCB7IExpZ2h0VHlwZVNlbGVjdCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodFR5cGVTZWxlY3QnO1xyXG5pbXBvcnQgeyBOb3JtYWxNYXBTZWxlY3RCdXR0b24gfSBmcm9tICd1aS9jb21wb25lbnRzL2lucHV0LWRhdGEvTm9ybWFsTWFwU2VsZWN0QnV0dG9uJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgQmFja2dyb3VuZFNlbGVjdEJ1dHRvbixcclxuICBIZWlnaHRNYXBJbnRlbnNpdHlJbnB1dCxcclxuICBIZWlnaHRNYXBTZWxlY3RCdXR0b24sXHJcbiAgTGlnaHRDb2xvclNlbGVjdEJ1dHRvbixcclxuICBMaWdodFR5cGVTZWxlY3QsXHJcbiAgTm9ybWFsTWFwU2VsZWN0QnV0dG9uXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9pbmRleC50cyIsImltcG9ydCB7IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YSc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IEltYWdlU2VsZWN0RGlhbG9nIH0gZnJvbSAndWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nJztcclxuaW1wb3J0IHsgSW1hZ2VTZWxlY3REaWFsb2dCdXR0b24sIEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uRGVwZW5kZW5jaWVzIH0gZnJvbSAndWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nQnV0dG9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kU2VsZWN0QnV0dG9uIGV4dGVuZHMgSW1hZ2VTZWxlY3REaWFsb2dCdXR0b24ge1xyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogSW1hZ2VTZWxlY3REaWFsb2dCdXR0b25EZXBlbmRlbmNpZXMpIHtcclxuICAgIHN1cGVyKGRlcGVuZGVuY2llcyk7XHJcblxyXG4gICAgdGhpcy5idXR0b24uaW5uZXJUZXh0ID0gJ1NlbGVjdCBiYWNrZ3JvdW5kIHRleHR1cmUnO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldHVwRGlhbG9nQm94KCkge1xyXG4gICAgdGhpcy5kaWFsb2dCb3ggPSBuZXcgSW1hZ2VTZWxlY3REaWFsb2coXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ucHJlc2V0QmFja2dyb3VuZFRleHR1cmVzLFxyXG4gICAgICBjb25maWd1cmF0aW9uLmluaXRpYWxDdXN0b21CYWNrZ3JvdW5kQ29sb3JIZXhcclxuICAgICk7XHJcbiAgICB0aGlzLmRpYWxvZ0JveC5uYW1lID0gJ0JhY2tncm91bmQgdGV4dHVyZSc7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYXN5bmMgb25EaWFsb2dCb3hDbG9zZWQoKSB7XHJcbiAgICBpZiAodGhpcy5kaWFsb2dCb3gud2FzQ2FuY2VsbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBhd2FpdCB0aGlzLmdldFNlbGVjdGVkSW1hZ2VEYXRhKCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudChpbWFnZURhdGEpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtYmFja2dyb3VuZC1zZWxlY3QtYnV0dG9uJywgQmFja2dyb3VuZFNlbGVjdEJ1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9CYWNrZ3JvdW5kU2VsZWN0QnV0dG9uLnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW1hZ2VTZWxlY3REaWFsb2cuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9JbWFnZVNlbGVjdERpYWxvZy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW1hZ2Utc2VsZWN0LWRpYWxvZyB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDc1JTtcXG4gIG1heC13aWR0aDogODAwcHg7IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19faGVhZGluZyB7XFxuICBtYXJnaW46IDAuNWVtIDA7IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYmxvY2sge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgcGFkZGluZy1ib3R0b206IDFlbTsgfVxcblxcbi5pbWFnZS1zZWxlY3QtZGlhbG9nX19wcmVzZXQtaW1hZ2VzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgLmltYWdlLXNlbGVjdC1kaWFsb2dfX3ByZXNldC1pbWFnZXMtY29udGFpbmVyID4gZGl2IHtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87IH1cXG4gIC5pbWFnZS1zZWxlY3QtZGlhbG9nX19wcmVzZXQtaW1hZ2VzLWNvbnRhaW5lciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4OyB9XFxuXFxuLmltYWdlLXNlbGVjdC1kaWFsb2dfX2N1c3RvbS1pbWFnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMjUlO1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBtYXJnaW46IGF1dG87IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19faW1hZ2UtLXNlbGVjdGVkIHtcXG4gIGJvcmRlcjogc29saWQgM3B4IGdyZWVuOyB9XFxuXFxuLmltYWdlLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDFlbTsgfVxcbiAgLmltYWdlLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5cclxuaW50ZXJmYWNlIEhlaWdodE1hcEludGVuc2l0eUlucHV0RGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlaWdodE1hcEludGVuc2l0eUlucHV0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBpbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBIZWlnaHRNYXBJbnRlbnNpdHlJbnB1dERlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2hlaWdodC1tYXAtaW50ZW5zaXR5Jyk7XHJcbiAgICBsYWJlbC5pbm5lclRleHQgPSAnSGVpZ2h0IG1hcCBpbnRlbnNpdHk6ICc7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcbiAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRoaXMuaW5wdXQudHlwZSA9ICdudW1iZXInO1xyXG4gICAgdGhpcy5pbnB1dC5taW4gPSAnMCc7XHJcbiAgICB0aGlzLmlucHV0Lm1heCA9ICcxJztcclxuICAgIHRoaXMuaW5wdXQuc3RlcCA9ICcwLjAxJztcclxuICAgIHRoaXMucmVzZXRJbnB1dFZhbHVlKCk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xyXG5cclxuICAgIHRoaXMub25JbnB1dENoYW5nZSA9IHRoaXMub25JbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uSW5wdXRDaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uSW5wdXRDaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbklucHV0Q2hhbmdlKCkge1xyXG4gICAgY29uc3QgaW50ZW5zaXR5ID0gcGFyc2VGbG9hdCh0aGlzLmlucHV0LnZhbHVlKTtcclxuICAgIGlmIChOdW1iZXIuaXNOYU4oaW50ZW5zaXR5KSkge1xyXG4gICAgICB0aGlzLnJlc2V0SW5wdXRWYWx1ZSgpO1xyXG4gICAgICBhbGVydCgnSGVpZ2h0IG1hcCBpbnRlbnNpdHkgbXVzdCBiZSBhIG51bWJlcicpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0hlaWdodE1hcEludGVuc2l0eUV2ZW50KGludGVuc2l0eSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0SW5wdXRWYWx1ZSgpIHtcclxuICAgIHRoaXMuaW5wdXQudmFsdWUgPSBjb25maWd1cmF0aW9uLnByZXNldEhlaWdodE1hcEludGVuc2l0eS50b1N0cmluZygpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoZWlnaHQtbWFwLWludGVuc2l0eS1pbnB1dCcsIEhlaWdodE1hcEludGVuc2l0eUlucHV0KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0hlaWdodE1hcEludGVuc2l0eUlucHV0LnRzIiwiaW1wb3J0IHsgTmV3SGVpZ2h0TWFwRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YSc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IEltYWdlU2VsZWN0RGlhbG9nIH0gZnJvbSAndWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nJztcclxuaW1wb3J0IHsgSW1hZ2VTZWxlY3REaWFsb2dCdXR0b24sIEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uRGVwZW5kZW5jaWVzIH0gZnJvbSAndWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nQnV0dG9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWlnaHRNYXBTZWxlY3RCdXR0b24gZXh0ZW5kcyBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbiB7XHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbkRlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoZGVwZW5kZW5jaWVzKTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbi5pbm5lclRleHQgPSAnU2VsZWN0IGhlaWdodCBtYXAnO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldHVwRGlhbG9nQm94KCkge1xyXG4gICAgdGhpcy5kaWFsb2dCb3ggPSBuZXcgSW1hZ2VTZWxlY3REaWFsb2coXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ucHJlc2V0SGVpZ2h0TWFwcyxcclxuICAgICAgY29uZmlndXJhdGlvbi5pbml0aWFsQ3VzdG9tSGVpZ2h0TWFwQ29sb3JIZXhcclxuICAgICk7XHJcbiAgICB0aGlzLmRpYWxvZ0JveC5uYW1lID0gJ0hlaWdodCBtYXAnO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFzeW5jIG9uRGlhbG9nQm94Q2xvc2VkKCkge1xyXG4gICAgaWYgKHRoaXMuZGlhbG9nQm94Lndhc0NhbmNlbGxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gYXdhaXQgdGhpcy5nZXRTZWxlY3RlZEltYWdlRGF0YSgpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0hlaWdodE1hcEV2ZW50KGltYWdlRGF0YSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1oZWlnaHQtbWFwLXNlbGVjdC1idXR0b24nLCBIZWlnaHRNYXBTZWxlY3RCdXR0b24pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2lucHV0LWRhdGEvSGVpZ2h0TWFwU2VsZWN0QnV0dG9uLnRzIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IE5ld0xpZ2h0Q29sb3JFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JTZWxlY3REaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQm94QnV0dG9uLCBEaWFsb2dCb3hCdXR0b25EZXBlbmRlbmNpZXMgfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveEJ1dHRvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpZ2h0Q29sb3JTZWxlY3RCdXR0b25EZXBlbmRlbmNpZXMgZXh0ZW5kcyBEaWFsb2dCb3hCdXR0b25EZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGlnaHRDb2xvclNlbGVjdEJ1dHRvbiBleHRlbmRzIERpYWxvZ0JveEJ1dHRvbiB7XHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBwcm90ZWN0ZWQgZGlhbG9nQm94OiBDb2xvclNlbGVjdERpYWxvZztcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBMaWdodENvbG9yU2VsZWN0QnV0dG9uRGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcih7IGRpYWxvZ092ZXJsYXk6IGRlcGVuZGVuY2llcy5kaWFsb2dPdmVybGF5IH0pO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbi5pbm5lclRleHQgPSAnU2VsZWN0IGxpZ2h0IGNvbG9yJztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXR1cERpYWxvZ0JveCgpIHtcclxuICAgIHRoaXMuZGlhbG9nQm94ID0gbmV3IENvbG9yU2VsZWN0RGlhbG9nKCk7XHJcbiAgICB0aGlzLmRpYWxvZ0JveC5uYW1lID0gJ0xpZ2h0IGNvbG9yJztcclxuICAgIHRoaXMuZGlhbG9nQm94LnNlbGVjdGVkQ29sb3IgPSBjb25maWd1cmF0aW9uLnByZXNldExpZ2h0Q29sb3IudG9Db2xvcigpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uRGlhbG9nQm94Q2xvc2VkKCkge1xyXG4gICAgaWYgKHRoaXMuZGlhbG9nQm94Lndhc0NhbmNlbGxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlnaHRDb2xvciA9IHRoaXMuZGlhbG9nQm94LnNlbGVjdGVkQ29sb3I7XHJcbiAgICBjb25zdCBsaWdodFZlY3RvciA9IFZlY3RvcjMuZnJvbUNvbG9yKGxpZ2h0Q29sb3IpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRDb2xvckV2ZW50KGxpZ2h0VmVjdG9yKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWxpZ2h0LWNvbG9yLXNlbGVjdC1idXR0b24nLCBMaWdodENvbG9yU2VsZWN0QnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0xpZ2h0Q29sb3JTZWxlY3RCdXR0b24udHMiLCJpbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9EaWFsb2dCb3guc2Nzcyc7XHJcblxyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbW1vbi9Db2xvcic7XHJcblxyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy5zY3NzJztcclxuXHJcbmNvbnN0IGNsYXNzTmFtZXMgPSB7XHJcbiAgRElBTE9HX0JPWDogJ2RpYWxvZy1ib3gnLFxyXG4gIERJQUxPRzogJ2NvbG9yLXNlbGVjdC1kaWFsb2cnLFxyXG4gIEhFQURFUjogJ2NvbG9yLXNlbGVjdC1kaWFsb2dfX2hlYWRlcicsXHJcbiAgSEVBRElORzogJ2NvbG9yLXNlbGVjdC1kaWFsb2dfX2hlYWRpbmcnLFxyXG4gIEJMT0NLOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYmxvY2snLFxyXG4gIEJPVFRPTV9CVVRUT05TOiAnY29sb3Itc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMnXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JTZWxlY3REaWFsb2cgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIERpYWxvZ0JveCB7XHJcbiAgcHJpdmF0ZSBfd2FzQ2FuY2VsbGVkID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSBoZWFkaW5nOiBIVE1MSGVhZGluZ0VsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgY29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGNhbmNlbEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjb25maXJtQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkRJQUxPR19CT1gpO1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuRElBTE9HKTtcclxuXHJcbiAgICB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2sgPSB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2sgPSB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVIZWFkZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlQ29sb3JJbnB1dCgpO1xyXG4gICAgdGhpcy5jcmVhdGVCb3R0b21CdXR0b25zKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICByZXR1cm4gWyduYW1lJ107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpIHx8ICdDb2xvciBzZWxlY3QnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2V0QXR0cmlidXRlKCduYW1lJywgdmFsdWUpO1xyXG4gICAgdGhpcy5oZWFkaW5nLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzZWxlY3RlZENvbG9yKCkge1xyXG4gICAgcmV0dXJuIENvbG9yLmZyb21IZXhTdHJpbmcodGhpcy5jb2xvcklucHV0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc2VsZWN0ZWRDb2xvcihjb2xvcjogQ29sb3IpIHtcclxuICAgIHRoaXMuY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yLnRvSGV4U3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLl93YXNDYW5jZWxsZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2spO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdhc0NhbmNlbGxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl93YXNDYW5jZWxsZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbG9zZScpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5DbG9zZSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmNyZWF0ZUJsb2NrKCk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkhFQURFUik7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgdGhpcy5oZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRoaXMuaGVhZGluZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuSEVBRElORyk7XHJcbiAgICB0aGlzLmhlYWRpbmcuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLmhlYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDb2xvcklucHV0KCkge1xyXG4gICAgdGhpcy5jb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRoaXMuY29sb3JJbnB1dC50eXBlID0gJ2NvbG9yJztcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5jb2xvcklucHV0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQm90dG9tQnV0dG9ucygpIHtcclxuICAgIGNvbnN0IGJvdHRvbUJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJvdHRvbUJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJPVFRPTV9CVVRUT05TKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQoYm90dG9tQnV0dG9uc0NvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xyXG5cclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLmlubmVyVGV4dCA9ICdDb25maXJtJztcclxuXHJcbiAgICBib3R0b21CdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FuY2VsQnV0dG9uKTtcclxuICAgIGJvdHRvbUJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb25maXJtQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DYW5jZWxCdXR0b25DbGljaygpIHtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db25maXJtQnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLl93YXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQmxvY2soKSB7XHJcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJMT0NLKTtcclxuXHJcbiAgICByZXR1cm4gYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1jb2xvci1zZWxlY3QtZGlhbG9nJywgQ29sb3JTZWxlY3REaWFsb2cpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dCb3guc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dCb3guc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dCb3guc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9EaWFsb2dCb3guc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRpYWxvZy1ib3gge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLCAwKTtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgY29sb3I6ICMyMjI7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTsgfVxcblxcbi5kaWFsb2ctYm94LS1hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMSk7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9EaWFsb2dCb3guc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQ29sb3JTZWxlY3REaWFsb2cuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Db2xvclNlbGVjdERpYWxvZy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29sb3Itc2VsZWN0LWRpYWxvZyB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1heC13aWR0aDogMzAwcHg7IH1cXG5cXG4uY29sb3Itc2VsZWN0LWRpYWxvZ19fYmxvY2sge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgcGFkZGluZy1ib3R0b206IDFlbTsgfVxcblxcbi5jb2xvci1zZWxlY3QtZGlhbG9nX19oZWFkaW5nIHtcXG4gIG1hcmdpbjogMC41ZW0gMDsgfVxcblxcbi5jb2xvci1zZWxlY3QtZGlhbG9nX19ib3R0b20tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tdG9wOiAxZW07IH1cXG4gIC5jb2xvci1zZWxlY3QtZGlhbG9nX19ib3R0b20tYnV0dG9ucyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuM2VtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBMaWdodFR5cGUgfSBmcm9tICdjb21tb24vTGlnaHRUeXBlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBOZXdMaWdodFR5cGVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgTGlnaHRQb3NpdGlvblJhZGl1c0lucHV0IH0gZnJvbSAndWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0xpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpZ2h0VHlwZVNlbGVjdERlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaWdodFR5cGVTZWxlY3QgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBsaWdodFR5cGVJbmZvTGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgbGlnaHRUeXBlOiBMaWdodFR5cGUuQ29uc3RhbnQsXHJcbiAgICAgIG9wdGlvblZhbHVlOiAnY29uc3RhbnQnLFxyXG4gICAgICBvcHRpb25MYWJlbDogJ0NvbnN0YW50IChbMCwgMCwgMV0pJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGlnaHRUeXBlOiBMaWdodFR5cGUuTW92aW5nLFxyXG4gICAgICBvcHRpb25WYWx1ZTogJ21vdmluZycsXHJcbiAgICAgIG9wdGlvbkxhYmVsOiAnTW92aW5nIGFib3ZlIHRoZSBzY3JlZW4nXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgcHJpdmF0ZSBsaWdodFR5cGVTZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gIHByaXZhdGUgbGlnaHRQb3NpdGlvblJhZGl1c0lucHV0OiBMaWdodFBvc2l0aW9uUmFkaXVzSW5wdXQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogTGlnaHRUeXBlU2VsZWN0RGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy5zZXR1cExpZ2h0VHlwZUxhYmVsKCk7XHJcbiAgICB0aGlzLnNldHVwTGlnaHRUeXBlU2VsZWN0KCk7XHJcblxyXG4gICAgdGhpcy5vbkxpZ2h0VHlwZUNoYW5nZSA9IHRoaXMub25MaWdodFR5cGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubGlnaHRQb3NpdGlvblJhZGl1c0lucHV0ID0gbmV3IExpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dCh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saWdodFBvc2l0aW9uUmFkaXVzSW5wdXQuc3R5bGUubWFyZ2luTGVmdCA9ICc1cHgnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzZWxlY3RlZExpZ2h0VHlwZSgpOiBMaWdodFR5cGUge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMubGlnaHRUeXBlU2VsZWN0LnZhbHVlO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRMaWdodFR5cGVJbmZvID0gdGhpcy5saWdodFR5cGVJbmZvTGlzdC5maW5kKFxyXG4gICAgICBsaWdodFR5cGVJbmZvID0+IGxpZ2h0VHlwZUluZm8ub3B0aW9uVmFsdWUgPT09IHNlbGVjdGVkVmFsdWVcclxuICAgICk7XHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZExpZ2h0VHlwZUluZm8pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGxpZ2h0IHR5cGUgc2VsZWN0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0ZWRMaWdodFR5cGVJbmZvLmxpZ2h0VHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc2VsZWN0ZWRMaWdodFR5cGUobGlnaHRUeXBlOiBMaWdodFR5cGUpIHtcclxuICAgIGNvbnN0IGZvdW5kTGlnaHRUeXBlSW5mbyA9IHRoaXMubGlnaHRUeXBlSW5mb0xpc3QuZmluZChcclxuICAgICAgbGlnaHRUeXBlSW5mbyA9PiBsaWdodFR5cGVJbmZvLmxpZ2h0VHlwZSA9PT0gbGlnaHRUeXBlXHJcbiAgICApO1xyXG4gICAgaWYgKCFmb3VuZExpZ2h0VHlwZUluZm8pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaWdodCB0eXBlIG5vdCBzdXBwb3J0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxpZ2h0VHlwZVNlbGVjdC52YWx1ZSA9IGZvdW5kTGlnaHRUeXBlSW5mby5vcHRpb25WYWx1ZTtcclxuICAgIHRoaXMub25MaWdodFR5cGVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMubGlnaHRUeXBlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25MaWdodFR5cGVDaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5saWdodFR5cGVTZWxlY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkxpZ2h0VHlwZUNoYW5nZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwTGlnaHRUeXBlTGFiZWwoKSB7XHJcbiAgICBjb25zdCBsaWdodFR5cGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsaWdodFR5cGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsaWdodC10eXBlLXNlbGVjdCcpO1xyXG4gICAgbGlnaHRUeXBlTGFiZWwuaW5uZXJUZXh0ID0gJ0xpZ2h0IHR5cGU6ICc7XHJcblxyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChsaWdodFR5cGVMYWJlbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwTGlnaHRUeXBlU2VsZWN0KCkge1xyXG4gICAgdGhpcy5saWdodFR5cGVTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIHRoaXMubGlnaHRUeXBlU2VsZWN0LmlkID0gJ2xpZ2h0LXR5cGUtc2VsZWN0JztcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5saWdodFR5cGVTZWxlY3QpO1xyXG5cclxuICAgIHRoaXMubGlnaHRUeXBlSW5mb0xpc3QuZm9yRWFjaChsaWdodFR5cGUgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGxpZ2h0VHlwZS5vcHRpb25MYWJlbDtcclxuICAgICAgb3B0aW9uLnZhbHVlID0gbGlnaHRUeXBlLm9wdGlvblZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5saWdodFR5cGVTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkxpZ2h0VHlwZUNoYW5nZSgpIHtcclxuICAgIGNvbnN0IGxpZ2h0VHlwZSA9IHRoaXMuc2VsZWN0ZWRMaWdodFR5cGU7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRUeXBlRXZlbnQobGlnaHRUeXBlKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuXHJcbiAgICBpZiAobGlnaHRUeXBlID09PSBMaWdodFR5cGUuTW92aW5nKSB7XHJcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5saWdodFBvc2l0aW9uUmFkaXVzSW5wdXQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1saWdodC10eXBlLXNlbGVjdCcsIExpZ2h0VHlwZVNlbGVjdCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodFR5cGVTZWxlY3QudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5cclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuaW50ZXJmYWNlIExpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dERlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaWdodFBvc2l0aW9uUmFkaXVzSW5wdXQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBpbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBMaWdodFBvc2l0aW9uUmFkaXVzSW5wdXREZXBlbmRlbmNpZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xpZ2h0LXBvc2l0aW9uLXJhZGl1cy1pbnB1dCcpO1xyXG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gJ0xpZ2h0IHBvc2l0aW9uIHJhZGl1czogJztcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGhpcy5pbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICB0aGlzLmlucHV0LmlkID0gJ2xpZ2h0LXBvc2l0aW9uLXJhZGl1cy1pbnB1dCc7XHJcbiAgICB0aGlzLmlucHV0Lm1pbiA9ICcwJztcclxuICAgIHRoaXMuaW5wdXQuc3R5bGUud2lkdGggPSAnODBweCc7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xyXG5cclxuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0LmRlZmF1bHRSYWRpdXMpO1xyXG4gICAgdGhpcy5vbkxpZ2h0UG9zaXRpb25SYWRpdXNDaGFuZ2UgPSB0aGlzLm9uTGlnaHRQb3NpdGlvblJhZGl1c0NoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBsaWdodFBvc2l0aW9uUmFkaXVzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmlucHV0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgbGlnaHRQb3NpdGlvblJhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNldElucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5vbkxpZ2h0UG9zaXRpb25SYWRpdXNDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkxpZ2h0UG9zaXRpb25SYWRpdXNDaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uTGlnaHRQb3NpdGlvblJhZGl1c0NoYW5nZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTGlnaHRQb3NpdGlvblJhZGl1c0NoYW5nZSgpIHtcclxuICAgIGNvbnN0IGxpZ2h0UG9zaXRpb25SYWRpdXMgPSB0aGlzLmxpZ2h0UG9zaXRpb25SYWRpdXM7XHJcbiAgICB0aGlzLnNldElucHV0VmFsdWUobGlnaHRQb3NpdGlvblJhZGl1cyk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50KGxpZ2h0UG9zaXRpb25SYWRpdXMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWUudG9GaXhlZCgyKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWxpZ2h0LXBvc2l0aW9uLXJhZGl1cy1pbnB1dCcsIExpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodFBvc2l0aW9uUmFkaXVzSW5wdXQudHMiLCJpbXBvcnQgeyBOZXdOb3JtYWxNYXBFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VTZWxlY3REaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cnO1xyXG5pbXBvcnQgeyBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbiwgSW1hZ2VTZWxlY3REaWFsb2dCdXR0b25EZXBlbmRlbmNpZXMgfSBmcm9tICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2dCdXR0b24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5vcm1hbE1hcFNlbGVjdEJ1dHRvbiBleHRlbmRzIEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uIHtcclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uRGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcihkZXBlbmRlbmNpZXMpO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uLmlubmVyVGV4dCA9ICdTZWxlY3Qgbm9ybWFsIG1hcCc7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0dXBEaWFsb2dCb3goKSB7XHJcbiAgICB0aGlzLmRpYWxvZ0JveCA9IG5ldyBJbWFnZVNlbGVjdERpYWxvZyhcclxuICAgICAgY29uZmlndXJhdGlvbi5wcmVzZXROb3JtYWxNYXBzLFxyXG4gICAgICBjb25maWd1cmF0aW9uLmluaXRpYWxDdXN0b21Ob3JtYWxNYXBDb2xvckhleFxyXG4gICAgKTtcclxuICAgIHRoaXMuZGlhbG9nQm94Lm5hbWUgPSAnTm9ybWFsIG1hcCc7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYXN5bmMgb25EaWFsb2dCb3hDbG9zZWQoKSB7XHJcbiAgICBpZiAodGhpcy5kaWFsb2dCb3gud2FzQ2FuY2VsbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBhd2FpdCB0aGlzLmdldFNlbGVjdGVkSW1hZ2VEYXRhKCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3Tm9ybWFsTWFwRXZlbnQoaW1hZ2VEYXRhKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLW5vcm1hbC1tYXAtc2VsZWN0LWJ1dHRvbicsIE5vcm1hbE1hcFNlbGVjdEJ1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9Ob3JtYWxNYXBTZWxlY3RCdXR0b24udHMiLCJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTG9hZGluZ0ZpbmlzaGVkRXZlbnQgfSBmcm9tICdldmVudHMvdWkvTG9hZGluZ0ZpbmlzaGVkRXZlbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nU3RhcnRlZEV2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL0xvYWRpbmdTdGFydGVkRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nT3ZlcmxheSB9IGZyb20gJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheSc7XHJcbmltcG9ydCB7IExvYWRpbmdCYXJEaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2xvYWRpbmctYmFyLWRpYWxvZy9Mb2FkaW5nQmFyRGlhbG9nJztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmludGVyZmFjZSBMb2FkaW5nVUlTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBkaWFsb2dPdmVybGF5OiBEaWFsb2dPdmVybGF5O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1VJU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBkaWFsb2dPdmVybGF5OiBEaWFsb2dPdmVybGF5O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9hZGluZ0JhckRpYWxvZzogTG9hZGluZ0JhckRpYWxvZztcclxuXHJcbiAgcHJpdmF0ZSBsb2FkZWRBc3NldHNDb3VudCA9IDA7XHJcbiAgcHJpdmF0ZSB0b3RhbEFzc2V0c1RvTG9hZENvdW50ID0gMDtcclxuXHJcbiAgcHJpdmF0ZSBoaWRlTG9hZGluZ0JhclRpbWVvdXRJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogTG9hZGluZ1VJU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5kaWFsb2dPdmVybGF5ID0gZGVwZW5kZW5jaWVzLmRpYWxvZ092ZXJsYXk7XHJcblxyXG4gICAgdGhpcy5sb2FkaW5nQmFyRGlhbG9nID0gbmV3IExvYWRpbmdCYXJEaWFsb2coKTtcclxuXHJcbiAgICB0aGlzLm9uTG9hZGluZ1N0YXJ0ZWRFdmVudCA9IHRoaXMub25Mb2FkaW5nU3RhcnRlZEV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTG9hZGluZ0ZpbmlzaGVkRXZlbnQgPSB0aGlzLm9uTG9hZGluZ0ZpbmlzaGVkRXZlbnQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGlkZUxvYWRpbmdCYXIgPSB0aGlzLmhpZGVMb2FkaW5nQmFyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIExvYWRpbmdGaW5pc2hlZEV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbkxvYWRpbmdGaW5pc2hlZEV2ZW50XHJcbiAgICApO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgTG9hZGluZ1N0YXJ0ZWRFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25Mb2FkaW5nU3RhcnRlZEV2ZW50XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBMb2FkaW5nRmluaXNoZWRFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25Mb2FkaW5nRmluaXNoZWRFdmVudFxyXG4gICAgKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIExvYWRpbmdTdGFydGVkRXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICB0aGlzLm9uTG9hZGluZ1N0YXJ0ZWRFdmVudFxyXG4gICAgKTtcclxuICAgIHRoaXMuaGlkZUxvYWRpbmdCYXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Mb2FkaW5nU3RhcnRlZEV2ZW50KCkge1xyXG4gICAgaWYgKHRoaXMudG90YWxBc3NldHNUb0xvYWRDb3VudCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNob3dMb2FkaW5nQmFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b3RhbEFzc2V0c1RvTG9hZENvdW50ICs9IDE7XHJcbiAgICB0aGlzLnVwZGF0ZUxvYWRpbmdCYXIoKTtcclxuICAgIHRoaXMuYWJvcnREZWxheWVkSGlkZUxvYWRpbmdCYXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Mb2FkaW5nRmluaXNoZWRFdmVudCgpIHtcclxuICAgIHRoaXMubG9hZGVkQXNzZXRzQ291bnQgKz0gMTtcclxuICAgIHRoaXMudXBkYXRlTG9hZGluZ0JhcigpO1xyXG5cclxuICAgIGlmICh0aGlzLmxvYWRlZEFzc2V0c0NvdW50ID09PSB0aGlzLnRvdGFsQXNzZXRzVG9Mb2FkQ291bnQpIHtcclxuICAgICAgdGhpcy5kZWxheWVkSGlkZUxvYWRpbmdCYXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmxvYWRlZEFzc2V0c0NvdW50ID0gMDtcclxuICAgIHRoaXMudG90YWxBc3NldHNUb0xvYWRDb3VudCA9IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dMb2FkaW5nQmFyKCkge1xyXG4gICAgdGhpcy5kaWFsb2dPdmVybGF5LnNob3dEaWFsb2codGhpcy5sb2FkaW5nQmFyRGlhbG9nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsYXllZEhpZGVMb2FkaW5nQmFyKCkge1xyXG4gICAgdGhpcy5oaWRlTG9hZGluZ0JhclRpbWVvdXRJZCA9IHNldFRpbWVvdXQoXHJcbiAgICAgIHRoaXMuaGlkZUxvYWRpbmdCYXIsXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ubG9hZGluZ0JhckhpZGVEZWxheVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWJvcnREZWxheWVkSGlkZUxvYWRpbmdCYXIoKSB7XHJcbiAgICBpZiAodGhpcy5oaWRlTG9hZGluZ0JhclRpbWVvdXRJZCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5oaWRlTG9hZGluZ0JhclRpbWVvdXRJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVMb2FkaW5nQmFyKCkge1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gICAgdGhpcy5sb2FkaW5nQmFyRGlhbG9nLmNsb3NlKCk7XHJcbiAgICB0aGlzLmhpZGVMb2FkaW5nQmFyVGltZW91dElkID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlTG9hZGluZ0JhcigpIHtcclxuICAgIHRoaXMubG9hZGluZ0JhckRpYWxvZy5sb2FkZWRBc3NldHNDb3VudCA9IHRoaXMubG9hZGVkQXNzZXRzQ291bnQudG9GaXhlZCgwKTtcclxuICAgIHRoaXMubG9hZGluZ0JhckRpYWxvZy50b3RhbEFzc2V0c0NvdW50ID0gdGhpcy50b3RhbEFzc2V0c1RvTG9hZENvdW50LnRvRml4ZWQoMCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL0xvYWRpbmdVSVNlcnZpY2UudHMiLCJpbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcblxyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvbG9hZGluZy1iYXItZGlhbG9nL0xvYWRpbmdCYXJEaWFsb2cuc2Nzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0JhckRpYWxvZyBleHRlbmRzIEhUTUxFbGVtZW50IGltcGxlbWVudHMgRGlhbG9nQm94IHtcclxuICBwcml2YXRlIGJhY2tncm91bmRCYXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgcHJvZ3Jlc3NMYWJlbDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdsb2FkaW5nLWJhci1kaWFsb2cgZGlhbG9nLWJveCc7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmJhY2tncm91bmRCYXIuY2xhc3NOYW1lID0gJ2xvYWRpbmctZGlhbG9nX19iYWNrZ3JvdW5kLWJhcic7XHJcbiAgICB0aGlzLmJhY2tncm91bmRCYXIuaW5uZXJUZXh0ID0gJyAnO1xyXG5cclxuICAgIHRoaXMucHJvZ3Jlc3NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdGV4dC5pbm5lclRleHQgPSAnTG9hZGluZy4uLiAnO1xyXG4gICAgdGV4dC5hcHBlbmRDaGlsZCh0aGlzLnByb2dyZXNzTGFiZWwpO1xyXG5cclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kQmFyKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGV4dCk7XHJcblxyXG4gICAgdGhpcy50b3RhbEFzc2V0c0NvdW50ID0gJzAnO1xyXG4gICAgdGhpcy5sb2FkZWRBc3NldHNDb3VudCA9ICcwJztcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICByZXR1cm4gWyd0b3RhbC1hc3NldHMtY291bnQnLCAnbG9hZGVkLWFzc2V0cy1jb3VudCddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgLy8gRW1wdHlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIC8vIEVtcHR5XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHJpYnV0ZTogc3RyaW5nLCBfb2xkVmFsdWU6IHN0cmluZywgX25ld1ZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmIChhdHRyaWJ1dGUgPT09ICd0b3RhbC1hc3NldHMtY291bnQnIHx8IGF0dHJpYnV0ZSA9PT0gJ2xvYWRlZC1hc3NldHMtY291bnQnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbG9zZScpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5DbG9zZSgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdG90YWxBc3NldHNDb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndG90YWwtYXNzZXRzLWNvdW50JykgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHRvdGFsQXNzZXRzQ291bnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RvdGFsLWFzc2V0cy1jb3VudCcsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbG9hZGVkQXNzZXRzQ291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2xvYWRlZC1hc3NldHMtY291bnQnKSB8fCAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgbG9hZGVkQXNzZXRzQ291bnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2xvYWRlZC1hc3NldHMtY291bnQnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGxvYWRlZEFzc2V0c0NvdW50ID0gcGFyc2VJbnQodGhpcy5sb2FkZWRBc3NldHNDb3VudCwgMTApO1xyXG4gICAgY29uc3QgdG90YWxBc3NldHNDb3VudCA9IHBhcnNlSW50KHRoaXMudG90YWxBc3NldHNDb3VudCwgMTApO1xyXG5cclxuICAgIGxldCBwcm9ncmVzcyA9IDEwMDtcclxuICAgIGlmICh0b3RhbEFzc2V0c0NvdW50ID4gMCkge1xyXG4gICAgICBwcm9ncmVzcyA9IE1hdGgucm91bmQobG9hZGVkQXNzZXRzQ291bnQgLyB0b3RhbEFzc2V0c0NvdW50ICogMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRCYXIuc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc30lYDtcclxuXHJcbiAgICB0aGlzLnByb2dyZXNzTGFiZWwuaW5uZXJUZXh0ID0gYCR7bG9hZGVkQXNzZXRzQ291bnR9IC8gJHt0b3RhbEFzc2V0c0NvdW50fSAoJHtwcm9ncmVzc30gJSlgO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWxvYWRpbmctYmFyLWRpYWxvZycsIExvYWRpbmdCYXJEaWFsb2cpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2xvYWRpbmctYmFyLWRpYWxvZy9Mb2FkaW5nQmFyRGlhbG9nLnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTG9hZGluZ0JhckRpYWxvZy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0xvYWRpbmdCYXJEaWFsb2cuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Mb2FkaW5nQmFyRGlhbG9nLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvbG9hZGluZy1iYXItZGlhbG9nL0xvYWRpbmdCYXJEaWFsb2cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvYWRpbmctYmFyLWRpYWxvZyB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmxvYWRpbmctZGlhbG9nX19iYWNrZ3JvdW5kLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxuICBtYXJnaW46IC0ycmVtO1xcbiAgei1pbmRleDogLTE7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9sb2FkaW5nLWJhci1kaWFsb2cvTG9hZGluZ0JhckRpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIHtcclxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjYW52YXNDbGllbnRSZWN0OiBDbGllbnRSZWN0O1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNhbnZhc09mZnNldCgpO1xyXG5cclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVDYW52YXNPZmZzZXQoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUNhbnZhc09mZnNldCgpIHtcclxuICAgIHRoaXMuY2FudmFzQ2xpZW50UmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoXHJcbiAgICAgIGV2ZW50LmNsaWVudFggLSB0aGlzLmNhbnZhc0NsaWVudFJlY3QubGVmdCxcclxuICAgICAgZXZlbnQuY2xpZW50WSAtIHRoaXMuY2FudmFzQ2xpZW50UmVjdC50b3BcclxuICAgICkuZmxvb3IoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLnRzIiwiaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICdjb21tb24vUG9seWdvbic7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICdSZW5kZXJlcic7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICd1aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXInO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFBvaW50Q2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9Qb2ludENsaWNrRXZlbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckZpbmlzaGVkRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRmluaXNoZWRFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbnRlcmZhY2UgTmV3UG9seWdvblVJQ29udHJvbGxlckRlcGVuZGVuY2llcyB7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdQb2x5Z29uVUlDb250cm9sbGVyIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSB1bmZpbmlzaGVkUGF0aDogUGF0aDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHBhdGhMYXllciA9IG5ldyBMYXllcihMRVguUEFUSF9MQVlFUl9OQU1FKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IHBvbHlnb25MYXllcjogTGF5ZXI7XHJcblxyXG4gIHByaXZhdGUgbGFzdE1vdXNlUG9zaXRpb246IFBvaW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IE5ld1BvbHlnb25VSUNvbnRyb2xsZXJEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uTGF5ZXI7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gZGVwZW5kZW5jaWVzLnJlbmRlcmVyO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIHRoaXMuY2xvc2VQYXRoID0gdGhpcy5jbG9zZVBhdGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uUG9pbnRDbGljayA9IHRoaXMub25Qb2ludENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdOZXdMaW5lR3VpZGUgPSB0aGlzLmRyYXdOZXdMaW5lR3VpZGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMucHVzaCh0aGlzLnBhdGhMYXllcik7XHJcbiAgICB0aGlzLnN0YXJ0TmV3VW5maW5pc2hlZFBhdGgoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5zdGFnZS5yZW1vdmVMYXllcih0aGlzLnBhdGhMYXllcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkTmV3UG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLnVuZmluaXNoZWRQYXRoLmFkZFZlcnRleChwb2ludCk7XHJcbiAgICB0aGlzLmRpc3BhdGNoVXBkYXRlVUlFdmVudHMoKTtcclxuXHJcbiAgICBpZiAodGhpcy51bmZpbmlzaGVkUGF0aC5nZXRWZXJ0aWNlc0NvdW50KCkgPT09IDEpIHtcclxuICAgICAgdGhpcy5sYXN0TW91c2VQb3NpdGlvbiA9IHBvaW50O1xyXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMubGFzdE1vdXNlUG9zaXRpb24gPSB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci5nZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd05ld0xpbmVHdWlkZSgpIHtcclxuICAgIGNvbnN0IGxhc3RQb2ludCA9IHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGV4KHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGljZXNDb3VudCgpIC0gMSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmRyYXdMaW5lKFxyXG4gICAgICBsYXN0UG9pbnQsXHJcbiAgICAgIHRoaXMubGFzdE1vdXNlUG9zaXRpb24sXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ubmV3TGluZVByZXZpZXdQcm9wZXJ0aWVzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblBvaW50Q2xpY2soZXZlbnQ6IFBvaW50Q2xpY2tFdmVudCkge1xyXG4gICAgY29uc3QgcGF0aFBvaW50RWxlbWVudCA9IGV2ZW50LnBheWxvYWQ7XHJcblxyXG4gICAgaWYgKHBhdGhQb2ludEVsZW1lbnQucGF0aCA9PT0gdGhpcy51bmZpbmlzaGVkUGF0aCAmJiBwYXRoUG9pbnRFbGVtZW50LmluaXRpYWwpIHtcclxuICAgICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgcGF0aFBvaW50RWxlbWVudC5pbml0aWFsID0gZmFsc2U7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnROZXdVbmZpbmlzaGVkUGF0aCgpIHtcclxuICAgIHRoaXMudW5maW5pc2hlZFBhdGggPSBuZXcgUGF0aChbXSwgY29uZmlndXJhdGlvbi5uZXdQb2x5Z29uTGluZVByb3BlcnRpZXMpO1xyXG4gICAgdGhpcy5wYXRoTGF5ZXIucGF0aHMucHVzaCh0aGlzLnVuZmluaXNoZWRQYXRoKTtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvc2VQYXRoKCkge1xyXG4gICAgaWYgKHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGljZXNDb3VudCgpIDwgY29uZmlndXJhdGlvbi5taW5Qb2x5Z29uUG9pbnRzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUG9seWdvbiBtdXN0IGhhdmUgYXQgbGVhc3QgJHtjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHN9IHZlcnRpY2VzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51bmZpbmlzaGVkUGF0aC5saW5lUHJvcGVydGllcyA9IGNvbmZpZ3VyYXRpb24ucG9seWdvbkxpbmVQcm9wZXJ0aWVzO1xyXG4gICAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uKHRoaXMudW5maW5pc2hlZFBhdGgpO1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIucGF0aHMucHVzaChwb2x5Z29uKTtcclxuICAgIHRoaXMucGF0aExheWVyLnJlbW92ZVBhdGgodGhpcy51bmZpbmlzaGVkUGF0aCk7XHJcblxyXG4gICAgdGhpcy5zdGFydE5ld1VuZmluaXNoZWRQYXRoKCk7XHJcbiAgICB0aGlzLmRpc3BhdGNoVXBkYXRlVUlFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGF0Y2hVcGRhdGVVSUV2ZW50cygpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSAyNzpcclxuICAgICAgICB0aGlzLnBhdGhMYXllci5yZW1vdmVQYXRoKHRoaXMudW5maW5pc2hlZFBhdGgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnROZXdVbmZpbmlzaGVkUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hVcGRhdGVVSUV2ZW50cygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUmVuZGVyRmluaXNoZWRFdmVudC5uYW1lLCB0aGlzLmRyYXdOZXdMaW5lR3VpZGUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludENsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoUmVuZGVyRmluaXNoZWRFdmVudC5uYW1lLCB0aGlzLmRyYXdOZXdMaW5lR3VpZGUpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludENsaWNrKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvTmV3UG9seWdvblVJQ29udHJvbGxlci50cyIsImltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICd1aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXInO1xyXG5cclxuaW1wb3J0IHsgQ2xvc2VzdFBhdGhGaW5kZXIgfSBmcm9tICdzZXJ2aWNlcy9DbG9zZXN0UGF0aEZpbmRlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmludGVyZmFjZSBQYXRoRHJhZ2dpbmdTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBjbG9zZXN0UGF0aEZpbmRlcjogQ2xvc2VzdFBhdGhGaW5kZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoRHJhZ2dpbmdTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNsb3Nlc3RQYXRoRmluZGVyOiBDbG9zZXN0UGF0aEZpbmRlcjtcclxuXHJcbiAgcHJpdmF0ZSBwYXRoVG9EcmFnOiBQYXRoIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgcHJldmlvdXNQb2ludDogUG9pbnQgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBhdGhEcmFnZ2luZ1NlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLmNsb3Nlc3RQYXRoRmluZGVyID0gZGVwZW5kZW5jaWVzLmNsb3Nlc3RQYXRoRmluZGVyO1xyXG5cclxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VPdXQgPSB0aGlzLm9uTW91c2VPdXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgLy8gVE9ETzogcG9zc2libGUgcGF0aCBnaG9zdCBsYXllciBoZXJlXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3RvcERyYWdnaW5nUGF0aCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0RyYWdnaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzRHJhZ2dpbmc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnRNb3ZpbmdQYXRoKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBjb25zdCBwb2ludCA9IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLmdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgIHRoaXMucGF0aFRvRHJhZyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMucHJldmlvdXNQb2ludCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdCBhbGxQYXRoc0luQm91bmRpbmdCb3g6IFBhdGhbXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5zdGFnZS5sYXllcnMpIHtcclxuICAgICAgY29uc3QgcGF0aHNJbkJvdW5kaW5nQm94ID0gbGF5ZXIucGF0aHMuZmlsdGVyKHBhdGggPT4gcGF0aC5pc1BvaW50SW5Cb3VuZGluZ0JveChwb2ludCkpO1xyXG4gICAgICBhbGxQYXRoc0luQm91bmRpbmdCb3gucHVzaCguLi5wYXRoc0luQm91bmRpbmdCb3gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhbGxQYXRoc0luQm91bmRpbmdCb3gubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgnQ2Fubm90IGRyYWcgcGF0aCAtIG5vIHBhdGggZm91bmQsIHBvaW50IGlzIG5vdCBpbiB0aGUgYm91bmRpbmcgYm94Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXRoVG9EcmFnID0gdGhpcy5jbG9zZXN0UGF0aEZpbmRlci5nZXRDbG9zZXN0UGF0aChhbGxQYXRoc0luQm91bmRpbmdCb3gsIHBvaW50KTtcclxuICAgIHRoaXMucHJldmlvdXNQb2ludCA9IHBvaW50O1xyXG4gICAgdGhpcy5faXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLm9uTW91c2VPdXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5vbk1vdXNlT3V0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5wYXRoVG9EcmFnIHx8ICF0aGlzLnByZXZpb3VzUG9pbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIuZ2V0UG9pbnRGcm9tTW91c2VFdmVudChldmVudCk7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uVmVjdG9yID0gUG9pbnQuc3VidHJhY3QocG9pbnQsIHRoaXMucHJldmlvdXNQb2ludCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBwYXRoUG9pbnQgb2YgdGhpcy5wYXRoVG9EcmFnLmdldFZlcnRpY2VzKCkpIHtcclxuICAgICAgcGF0aFBvaW50Lm1vdmVUbyhQb2ludC5hZGQocGF0aFBvaW50LCB0cmFuc2l0aW9uVmVjdG9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG5cclxuICAgIHRoaXMucHJldmlvdXNQb2ludCA9IHBvaW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlVXAoX2V2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLnN0b3BEcmFnZ2luZ1BhdGgoKTtcclxuICAgIHRoaXMuY2FuY2VsTmV4dENsaWNrRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZU91dChfZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIHRoaXMuc3RvcERyYWdnaW5nUGF0aCgpO1xyXG4gICAgdGhpcy5faXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdG9wRHJhZ2dpbmdQYXRoKCkge1xyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5wYXRoVG9EcmFnID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5wcmV2aW91c1BvaW50ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYW5jZWxOZXh0Q2xpY2tFdmVudCgpIHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCB0cnVlKTtcclxuICAgICAgdGhpcy5faXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCB0cnVlKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUGF0aERyYWdnaW5nU2VydmljZS50cyIsImltcG9ydCB7IENPTE9SUyB9IGZyb20gJ2NvbW1vbi9DT0xPUlMnO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IExpbmVQcm9wZXJ0aWVzIH0gZnJvbSAnY29tbW9uL0xpbmVQcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBGaW5pc2hQb2ludERyYWdFdmVudCB9IGZyb20gJ2V2ZW50cy9wb2ludC1kcmFnL0ZpbmlzaFBvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgUG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9Qb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFN0YXJ0UG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50RHJhZ2dpbmdTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50RHJhZ2dpbmdTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwYXRoR2hvc3RMYXllcjogTGF5ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9pbnREcmFnZ2luZ1NlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcblxyXG4gICAgdGhpcy5vblN0YXJ0UG9pbnREcmFnID0gdGhpcy5vblN0YXJ0UG9pbnREcmFnLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRmluaXNoUG9pbnREcmFnID0gdGhpcy5vbkZpbmlzaFBvaW50RHJhZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblBvaW50RHJhZyA9IHRoaXMub25Qb2ludERyYWcuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5wYXRoR2hvc3RMYXllciA9IG5ldyBMYXllcihMRVguUEFUSF9HSE9TVF9MQVlFUl9OQU1FKTtcclxuICAgIHRoaXMuc3RhZ2UubGF5ZXJzLnNwbGljZSgwLCAwLCB0aGlzLnBhdGhHaG9zdExheWVyKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFN0YXJ0UG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uU3RhcnRQb2ludERyYWcpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihGaW5pc2hQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25GaW5pc2hQb2ludERyYWcpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludERyYWcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnBhdGhHaG9zdExheWVyLnBhdGhzID0gW107XHJcbiAgICB0aGlzLnN0YWdlLnJlbW92ZUxheWVyKHRoaXMucGF0aEdob3N0TGF5ZXIpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoU3RhcnRQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25TdGFydFBvaW50RHJhZyk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBGaW5pc2hQb2ludERyYWdFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25GaW5pc2hQb2ludERyYWdcclxuICAgICk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50RHJhZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU3RhcnRQb2ludERyYWcoZXZlbnQ6IFN0YXJ0UG9pbnREcmFnRXZlbnQpIHtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICghY29uZmlndXJhdGlvbi5kaXNwbGF5UGF0aEdob3N0V2hlbkRyYWdnaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXRoID0gZXZlbnQucGF5bG9hZC5wYXRoLmNsb25lKCk7XHJcbiAgICBwYXRoLmxpbmVQcm9wZXJ0aWVzID0gbmV3IExpbmVQcm9wZXJ0aWVzKENPTE9SUy5HUkVFTiwgMSk7XHJcbiAgICB0aGlzLnBhdGhHaG9zdExheWVyLnBhdGhzLnB1c2gocGF0aCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZpbmlzaFBvaW50RHJhZyhldmVudDogRmluaXNoUG9pbnREcmFnRXZlbnQpIHtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gICAgaWYgKCFjb25maWd1cmF0aW9uLmRpc3BsYXlQYXRoR2hvc3RXaGVuRHJhZ2dpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGF0aEdob3N0TGF5ZXIucGF0aHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUG9pbnREcmFnKGV2ZW50OiBQb2ludERyYWdFdmVudCkge1xyXG4gICAgY29uc3QgeyBlbGVtZW50LCBuZXdQb3NpdGlvbiB9ID0gZXZlbnQucGF5bG9hZDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIGVsZW1lbnQucGF0aC5nZXRWZXJ0aWNlc0l0ZXJhdG9yKCkpIHtcclxuICAgICAgaWYgKHBvaW50LmVxdWFscyhuZXdQb3NpdGlvbikpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgeCA9IG5ld1Bvc2l0aW9uLng7XHJcbiAgICBsZXQgeSA9IG5ld1Bvc2l0aW9uLnk7XHJcblxyXG4gICAgaWYgKHggPCAwKSB7XHJcbiAgICAgIHggPSAwO1xyXG4gICAgfSBlbHNlIGlmICh4ID49IHRoaXMuY2FudmFzLndpZHRoKSB7XHJcbiAgICAgIHggPSB0aGlzLmNhbnZhcy53aWR0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPCAwKSB7XHJcbiAgICAgIHkgPSAwO1xyXG4gICAgfSBlbHNlIGlmICh5ID49IHRoaXMuY2FudmFzLmhlaWdodCkge1xyXG4gICAgICB5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LnBvaW50Lm1vdmVUbyh4LCB5KTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2ludERyYWdnaW5nU2VydmljZS50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBMaW5lQ2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9MaW5lQ2xpY2tFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50SW5zZXJ0ZXJTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50SW5zZXJ0ZXJTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBwcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcCA9IDA7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c0xpbmVIaXQ6IExpbmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9pbnRJbnNlcnRlclNlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICB0aGlzLm9uTGluZUNsaWNrID0gdGhpcy5vbkxpbmVDbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKExpbmVDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbkxpbmVDbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoTGluZUNsaWNrRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTGluZUNsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25MaW5lQ2xpY2soZXZlbnQ6IExpbmVDbGlja0V2ZW50KSB7XHJcbiAgICBjb25zdCBwcmV2aW91c0xpbmVIaXQgPSB0aGlzLnByZXZpb3VzTGluZUhpdDtcclxuICAgIGNvbnN0IHByZXZpb3VzTGluZUNsaWNrVGltZXN0YW1wID0gdGhpcy5wcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcDtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSGl0ID0gZXZlbnQucGF5bG9hZC5saW5lO1xyXG4gICAgdGhpcy5wcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcCA9IGN1cnJlbnRUaW1lc3RhbXA7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhcHJldmlvdXNMaW5lSGl0IHx8XHJcbiAgICAgIGN1cnJlbnRUaW1lc3RhbXAgLSBwcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcCA+IGNvbmZpZ3VyYXRpb24uZG91YmxlQ2xpY2tNYXhEZWxheVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJldmlvdXNMaW5lSGl0LmVxdWFscyhldmVudC5wYXlsb2FkLmxpbmUpKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQucGF5bG9hZC5wYXRoLmZpbmRQb2ludEluZGV4KGV2ZW50LnBheWxvYWQubGluZS5wMik7XHJcbiAgICAgIGNvbnN0IG5ld1BvaW50ID0gZXZlbnQucGF5bG9hZC5saW5lLmdldE1pZGRsZVBvaW50KCk7XHJcbiAgICAgIGNvbnN0IGZsb29yZWRQb2ludCA9IG5ld1BvaW50LmZsb29yKCk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGV2ZW50LnBheWxvYWQucGF0aC5pbnNlcnRWZXJ0ZXgoZmxvb3JlZFBvaW50LCBpbmRleCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUT0RPOiBmaXggd3JvbmcgcmVuZGVyaW5nXHJcbiAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2ludEluc2VydGVyU2VydmljZS50cyIsImltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFBvaW50Q2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9Qb2ludENsaWNrRXZlbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludEVsZW1lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudCc7XHJcblxyXG5pbnRlcmZhY2UgUG9pbnRSZW1vdmVyU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludFJlbW92ZXJTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBwcmV2aW91c1BhdGhQb2ludEVsZW1lbnQ6IFBhdGhQb2ludEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c0NsaWNrVGltZXN0YW1wID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2ludFJlbW92ZXJTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLm9uUG9pbnRDbGljayA9IHRoaXMub25Qb2ludENsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUG9pbnRDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludENsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Qb2ludENsaWNrKGV2ZW50OiBQb2ludENsaWNrRXZlbnQpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhQb2ludEVsZW1lbnQgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgY29uc3QgcHJldmlvdXNQYXRoUG9pbnRFbGVtZW50ID0gdGhpcy5wcmV2aW91c1BhdGhQb2ludEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwcmV2aW91c0NsaWNrVGltZXN0YW1wID0gdGhpcy5wcmV2aW91c0NsaWNrVGltZXN0YW1wO1xyXG5cclxuICAgIHRoaXMudXBkYXRlUHJldmlvdXNDbGlja0luZm9ybWF0aW9uKGV2ZW50LCBjdXJyZW50VGltZXN0YW1wKTtcclxuXHJcbiAgICBpZiAoIXByZXZpb3VzUGF0aFBvaW50RWxlbWVudCB8fCBwcmV2aW91c1BhdGhQb2ludEVsZW1lbnQgIT09IHBhdGhQb2ludEVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50VGltZXN0YW1wIC0gcHJldmlvdXNDbGlja1RpbWVzdGFtcCA+IGNvbmZpZ3VyYXRpb24uZG91YmxlQ2xpY2tNYXhEZWxheSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmVQcmV2aW91c0NsaWNrZWRQb2ludCgpO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVByZXZpb3VzQ2xpY2tJbmZvcm1hdGlvbihldmVudDogUG9pbnRDbGlja0V2ZW50LCB0aW1lc3RhbXA6IG51bWJlcikge1xyXG4gICAgdGhpcy5wcmV2aW91c1BhdGhQb2ludEVsZW1lbnQgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5wcmV2aW91c0NsaWNrVGltZXN0YW1wID0gdGltZXN0YW1wO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVQcmV2aW91c0NsaWNrZWRQb2ludCgpIHtcclxuICAgIGNvbnN0IHBhdGggPSB0aGlzLnByZXZpb3VzUGF0aFBvaW50RWxlbWVudC5wYXRoO1xyXG4gICAgY29uc3QgcG9pbnQgPSB0aGlzLnByZXZpb3VzUGF0aFBvaW50RWxlbWVudC5wb2ludDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBwYXRoLnJlbW92ZVZlcnRleChwb2ludCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ0Nhbm5vdCByZW1vdmUgdmVydGV4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcmV2aW91c1BhdGhQb2ludEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1BvaW50UmVtb3ZlclNlcnZpY2UudHMiLCJpbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFBhdGhQb2ludEVsZW1lbnQsXHJcbiAgUGF0aFBvaW50RWxlbWVudERlcGVuZGVuY2llc1xyXG59IGZyb20gJ3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50JztcclxuaW1wb3J0IHsgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIH0gZnJvbSAndWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50U3luY1NlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIHN0YWdlOiBTdGFnZTtcclxuICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGF0aFBvaW50VHVwbGUge1xyXG4gIHBhdGg6IFBhdGg7XHJcbiAgcG9pbnQ6IFBvaW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRTeW5jU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcGF0aFBvaW50RWxlbWVudHM6IFBhdGhQb2ludEVsZW1lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwYXRoUG9pbnREZXBlbmRlbmNpZXM6IFBhdGhQb2ludEVsZW1lbnREZXBlbmRlbmNpZXM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9pbnRTeW5jU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5zdGFnZSA9IGRlcGVuZGVuY2llcy5zdGFnZTtcclxuICAgIHRoaXMuY29udGFpbmVyID0gZGVwZW5kZW5jaWVzLmNvbnRhaW5lcjtcclxuICAgIHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyID0gZGVwZW5kZW5jaWVzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICB0aGlzLnBhdGhQb2ludERlcGVuZGVuY2llcyA9IHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lclxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnN5bmNocm9uaXplRWxlbWVudHMgPSB0aGlzLnN5bmNocm9uaXplRWxlbWVudHMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgU3luY0NvbXBvbmVudHNFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMuc3luY2hyb25pemVFbGVtZW50c1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgU3luY0NvbXBvbmVudHNFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMuc3luY2hyb25pemVFbGVtZW50c1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzeW5jaHJvbml6ZUVsZW1lbnRzKGV2ZW50OiBTeW5jQ29tcG9uZW50c0V2ZW50KSB7XHJcbiAgICBjb25zdCBlbGVtZW50c1RvUmVtb3ZlID0gdGhpcy5nZXRSZWR1bmRhbnRFbGVtZW50cygpO1xyXG4gICAgZWxlbWVudHNUb1JlbW92ZS5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQucmVtb3ZlKCkpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhQb2ludFR1cGxlcyA9IHRoaXMuZ2V0UGF0aFBvaW50VHVwbGVzKCk7XHJcbiAgICBjb25zdCBwb2ludHNXaXRob3V0RWxlbWVudHMgPSB0aGlzLmdldFBvaW50c1dpdGhvdXRFbGVtZW50cyhwYXRoUG9pbnRUdXBsZXMpO1xyXG4gICAgY29uc3QgbmV3RWxlbWVudHMgPSB0aGlzLmNyZWF0ZVBhdGhQb2ludEVsZW1lbnRzKHBvaW50c1dpdGhvdXRFbGVtZW50cyk7XHJcbiAgICBuZXdFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRzTm90UmVtb3ZlZCA9IHRoaXMucGF0aFBvaW50RWxlbWVudHMuZmlsdGVyKFxyXG4gICAgICBlbGVtZW50ID0+IGVsZW1lbnRzVG9SZW1vdmUuaW5kZXhPZihlbGVtZW50KSA9PT0gLTFcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wYXRoUG9pbnRFbGVtZW50cyA9IFsuLi5uZXdFbGVtZW50cywgLi4uZWxlbWVudHNOb3RSZW1vdmVkXTtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYXRoUG9pbnRUdXBsZXMoKSB7XHJcbiAgICBjb25zdCBwYXRoUG9pbnRUdXBsZXM6IFBhdGhQb2ludFR1cGxlW10gPSBbXTtcclxuXHJcbiAgICB0aGlzLnN0YWdlLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgbGF5ZXIucGF0aHMuZm9yRWFjaChwYXRoID0+IHtcclxuICAgICAgICBwYXRoLmdldFZlcnRpY2VzKCkuZm9yRWFjaChwb2ludCA9PiB7XHJcbiAgICAgICAgICBwYXRoUG9pbnRUdXBsZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgIHBvaW50XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGF0aFBvaW50VHVwbGVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQYXRoUG9pbnRFbGVtZW50cyhwYXRoUG9pbnRzOiBQYXRoUG9pbnRUdXBsZVtdKSB7XHJcbiAgICByZXR1cm4gcGF0aFBvaW50cy5tYXAoXHJcbiAgICAgIHBhdGhQb2ludCA9PlxyXG4gICAgICAgIG5ldyBQYXRoUG9pbnRFbGVtZW50KHBhdGhQb2ludC5wYXRoLCBwYXRoUG9pbnQucG9pbnQsIHRoaXMucGF0aFBvaW50RGVwZW5kZW5jaWVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmVkdW5kYW50RWxlbWVudHMoKSB7XHJcbiAgICBjb25zdCBhY3RpdmVQYXRocyA9IHRoaXMuZ2V0QWN0aXZlUGF0aHMoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wYXRoUG9pbnRFbGVtZW50cy5maWx0ZXIoXHJcbiAgICAgIGNvbXBvbmVudCA9PlxyXG4gICAgICAgIGFjdGl2ZVBhdGhzLmluZGV4T2YoY29tcG9uZW50LnBhdGgpID09PSAtMSB8fFxyXG4gICAgICAgIGNvbXBvbmVudC5wYXRoLmdldFZlcnRpY2VzKCkuaW5kZXhPZihjb21wb25lbnQucG9pbnQpID09PSAtMVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UG9pbnRzV2l0aG91dEVsZW1lbnRzKHBhdGhQb2ludHM6IFBhdGhQb2ludFR1cGxlW10pIHtcclxuICAgIHJldHVybiBwYXRoUG9pbnRzLmZpbHRlcihcclxuICAgICAgcGF0aFBvaW50ID0+XHJcbiAgICAgICAgIXRoaXMucGF0aFBvaW50RWxlbWVudHMuZmluZChcclxuICAgICAgICAgIGNvbXBvbmVudCA9PiBjb21wb25lbnQucGF0aCA9PT0gcGF0aFBvaW50LnBhdGggJiYgY29tcG9uZW50LnBvaW50ID09PSBwYXRoUG9pbnQucG9pbnRcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBY3RpdmVQYXRocygpIHtcclxuICAgIGNvbnN0IHBhdGhzOiBQYXRoW10gPSBbXTtcclxuICAgIHRoaXMuc3RhZ2UubGF5ZXJzLm1hcChsYXllciA9PiBwYXRocy5wdXNoKC4uLmxheWVyLnBhdGhzKSk7XHJcblxyXG4gICAgcmV0dXJuIHBhdGhzO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2ludFN5bmNTZXJ2aWNlLnRzIiwiaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuaW1wb3J0IHsgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIH0gZnJvbSAndWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBGaW5pc2hQb2ludERyYWdFdmVudCB9IGZyb20gJ2V2ZW50cy9wb2ludC1kcmFnL0ZpbmlzaFBvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgUG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9Qb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFN0YXJ0UG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgUG9pbnRDbGlja0V2ZW50IH0gZnJvbSAnZXZlbnRzL1BvaW50Q2xpY2tFdmVudCc7XHJcblxyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50LnNjc3MnO1xyXG5cclxuY29uc3QgY2xhc3NOYW1lcyA9IHtcclxuICBDT01QT05FTlQ6ICdhcHBsaWNhdGlvbi11aV9fdmVydGV4JyxcclxuICBJTklUSUFMOiAnYXBwbGljYXRpb24tdWlfX3ZlcnRleC0taW5pdGlhbCdcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGF0aFBvaW50RWxlbWVudERlcGVuZGVuY2llcyB7XHJcbiAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoUG9pbnRFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHB1YmxpYyBwYXRoOiBQYXRoO1xyXG4gIHB1YmxpYyBwb2ludDogUG9pbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoOiBQYXRoLCBwb2ludDogUG9pbnQsIGRlcGVuZGVuY2llczogUGF0aFBvaW50RWxlbWVudERlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5DT01QT05FTlQpO1xyXG5cclxuICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmcgPSB0aGlzLnN0b3BEcmFnZ2luZy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnBhdGgubGluZVByb3BlcnRpZXMuY29sb3IuZmlsbFN0eWxlO1xyXG4gICAgdGhpcy5zdHlsZS50b3AgPSBgJHt0aGlzLnBvaW50Lnl9cHhgO1xyXG4gICAgdGhpcy5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5wb2ludC54fXB4YDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaW5pdGlhbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWVzLklOSVRJQUwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBpbml0aWFsKGlzSW5pdGlhbDogYm9vbGVhbikge1xyXG4gICAgaWYgKGlzSW5pdGlhbCkge1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5JTklUSUFMKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWVzLklOSVRJQUwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5wYXRoLmdldFZlcnRpY2VzQ291bnQoKSA9PT0gMSB8fFxyXG4gICAgICAoIXRoaXMucGF0aC5jbG9zZWQgJiYgdGhpcy5wYXRoLmZpbmRQb2ludEluZGV4KHRoaXMucG9pbnQpID09PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcclxuICAgIHRoaXMucG9pbnQubW92ZUNhbGxiYWNrID0gdGhpcy51cGRhdGVQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucG9pbnQubW92ZUNhbGxiYWNrID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VEb3duKCkge1xyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgUG9pbnRDbGlja0V2ZW50KHRoaXMpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblxyXG4gICAgaWYgKGV2ZW50LmhhbmRsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN0YXJ0UG9pbnREcmFnRXZlbnQodGhpcykpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLmdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUG9pbnREcmFnRXZlbnQodGhpcywgbW91c2VQb3NpdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdG9wRHJhZ2dpbmcoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBGaW5pc2hQb2ludERyYWdFdmVudCh0aGlzKSk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXBhdGgtcG9pbnQnLCBQYXRoUG9pbnRFbGVtZW50KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9QYXRoUG9pbnRFbGVtZW50LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUGF0aFBvaW50RWxlbWVudC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL1BhdGhQb2ludEVsZW1lbnQuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcGxpY2F0aW9uLXVpX192ZXJ0ZXgge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHg7IH1cXG4gIC5hcHBsaWNhdGlvbi11aV9fdmVydGV4Om5vdCg6YWN0aXZlKSB7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IH1cXG4gIC5hcHBsaWNhdGlvbi11aV9fdmVydGV4OmFjdGl2ZSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkOyB9XFxuXFxuLmFwcGxpY2F0aW9uLXVpX192ZXJ0ZXgtLWluaXRpYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTFmZjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuXHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgTG9hZEJ1dHRvbiB9IGZyb20gJ3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9Mb2FkQnV0dG9uJztcclxuaW1wb3J0IHsgU2F2ZUJ1dHRvbiB9IGZyb20gJ3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9TYXZlQnV0dG9uJztcclxuXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBTZXJpYWxpemF0aW9uU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VyaWFsaXphdGlvblNlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHNlcmlhbGl6YXRpb25Db250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSBzdGFnZTogU3RhZ2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogU2VyaWFsaXphdGlvblNlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIGNvbnN0IHNlcmlhbGl6YXRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VyaWFsaXphdGlvbi1jb250YWluZXInKTtcclxuICAgIGlmICghc2VyaWFsaXphdGlvbkNvbnRhaW5lcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlcmlhbGl6YXRpb24gY29udGFpbmVyIG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VyaWFsaXphdGlvbkNvbnRhaW5lciA9IHNlcmlhbGl6YXRpb25Db250YWluZXI7XHJcblxyXG4gICAgY29uc3QgbG9hZEJ1dHRvbiA9IG5ldyBMb2FkQnV0dG9uKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2VcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IG5ldyBTYXZlQnV0dG9uKHtcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2VcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2VyaWFsaXphdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkQnV0dG9uKTtcclxuICAgIHRoaXMuc2VyaWFsaXphdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB0aGlzLnNlcmlhbGl6YXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1NlcmlhbGl6YXRpb25TZXJ2aWNlLnRzIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmltcG9ydCB7IExFWCB9IGZyb20gJ0xFWCc7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgU2VyaWFsaXphYmxlTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2FkQnV0dG9uRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkQnV0dG9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBidXR0b25FbGVtZW50OiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBMb2FkQnV0dG9uRGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcblxyXG4gICAgdGhpcy5idXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuaW5uZXJUZXh0ID0gJ0xvYWQnO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2xpY2soKSB7XHJcbiAgICBjb25zdCBzZXJpYWxpemVkRGF0YSA9IHByb21wdCgnUGxlYXNlIHBhc3RlIHRoZSBzZXJpYWxpemVkIGRhdGEnKTtcclxuXHJcbiAgICBpZiAoIXNlcmlhbGl6ZWREYXRhKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb2x5Z29uTGF5ZXIgPSB0aGlzLnN0YWdlLmZpbmRMYXllckJ5TmFtZShMRVguUE9MWUdPTl9MQVlFUl9OQU1FKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50U2VyaWFsaXphYmxlTGF5ZXIgPSBwb2x5Z29uTGF5ZXIudG9TZXJpYWxpemFibGVPYmplY3QoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzZXJpYWxpemFibGVMYXllciA9IDxTZXJpYWxpemFibGVMYXllcj5KU09OLnBhcnNlKHNlcmlhbGl6ZWREYXRhKTtcclxuICAgICAgcG9seWdvbkxheWVyLmZyb21TZXJpYWxpemFibGVPYmplY3QoPFNlcmlhbGl6YWJsZUxheWVyPnNlcmlhbGl6YWJsZUxheWVyKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHBvbHlnb25MYXllci5mcm9tU2VyaWFsaXphYmxlT2JqZWN0KGN1cnJlbnRTZXJpYWxpemFibGVMYXllcik7XHJcbiAgICAgIGFsZXJ0KCdJbnZhbGlkIGRhdGEnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1sb2FkLWJ1dHRvbicsIExvYWRCdXR0b24pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL3NlcmlhbGl6YXRpb24vTG9hZEJ1dHRvbi50cyIsImltcG9ydCB7IExFWCB9IGZyb20gJ0xFWCc7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTYXZlQnV0dG9uRGVwZW5kZW5jaWVzIHtcclxuICBzdGFnZTogU3RhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTYXZlQnV0dG9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgYnV0dG9uRWxlbWVudDogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogU2F2ZUJ1dHRvbkRlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LmlubmVyVGV4dCA9ICdTYXZlJztcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25FbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNsaWNrKCkge1xyXG4gICAgY29uc3QgcG9seWdvbkxheWVyID0gdGhpcy5zdGFnZS5maW5kTGF5ZXJCeU5hbWUoTEVYLlBPTFlHT05fTEFZRVJfTkFNRSk7XHJcbiAgICBjb25zdCBzZXJpYWxpemFibGVPYmplY3QgPSBwb2x5Z29uTGF5ZXIudG9TZXJpYWxpemFibGVPYmplY3QoKTtcclxuXHJcbiAgICBjb25zdCBzZXJpYWxpemVkRGF0YSA9IEpTT04uc3RyaW5naWZ5KHNlcmlhbGl6YWJsZU9iamVjdCk7XHJcbiAgICBwcm9tcHQoJ0NvcHkgdGhlIGRhdGEnLCBzZXJpYWxpemVkRGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1zYXZlLWJ1dHRvbicsIFNhdmVCdXR0b24pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL3NlcmlhbGl6YXRpb24vU2F2ZUJ1dHRvbi50cyIsImltcG9ydCAndWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5LnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQm94IH0gZnJvbSAndWkvY29tcG9uZW50cy9EaWFsb2dCb3gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpYWxvZ092ZXJsYXkgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSBvdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkaWFsb2dCb3hTdGFjazogRGlhbG9nQm94W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmRpYWxvZ0JveFN0YWNrID0gW107XHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5RWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5vbk92ZXJsYXlDbGljayA9IHRoaXMub25PdmVybGF5Q2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25EaWFsb2dDbG9zZSA9IHRoaXMub25EaWFsb2dDbG9zZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5vdmVybGF5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdmVybGF5Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5vdmVybGF5RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdmVybGF5Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dEaWFsb2coZGlhbG9nQm94OiBEaWFsb2dCb3gpIHtcclxuICAgIGlmICh0aGlzLmRpYWxvZ0JveFN0YWNrLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNob3dPdmVybGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaWFsb2dCb3hTdGFjay5wdXNoKGRpYWxvZ0JveCk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGRpYWxvZ0JveCk7XHJcbiAgICBkaWFsb2dCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uRGlhbG9nQ2xvc2UpO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgIGRpYWxvZ0JveC5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctYm94LS1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk92ZXJsYXlDbGljaygpIHtcclxuICAgIGlmICh0aGlzLmRpYWxvZ0JveFN0YWNrLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9wbW9zdERpYWxvZ0JveCA9IHRoaXMuZGlhbG9nQm94U3RhY2tbdGhpcy5kaWFsb2dCb3hTdGFjay5sZW5ndGggLSAxXTtcclxuICAgIGlmICghdG9wbW9zdERpYWxvZ0JveC5jYW5DbG9zZSgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0b3Btb3N0RGlhbG9nQm94LmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRGlhbG9nQ2xvc2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBkaWFsb2dCb3ggPSA8RGlhbG9nQm94PmV2ZW50LnRhcmdldDtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQoZGlhbG9nQm94KTtcclxuICAgIGRpYWxvZ0JveC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25EaWFsb2dDbG9zZSk7XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgZGlhbG9nQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2RpYWxvZy1ib3gtLWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGlhbG9nQm94SW5kZXggPSB0aGlzLmRpYWxvZ0JveFN0YWNrLmluZGV4T2YoZGlhbG9nQm94KTtcclxuICAgIHRoaXMuZGlhbG9nQm94U3RhY2suc3BsaWNlKGRpYWxvZ0JveEluZGV4LCAxKTtcclxuXHJcbiAgICBpZiAodGhpcy5kaWFsb2dCb3hTdGFjay5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93T3ZlcmxheSgpIHtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS0tdmlzaWJsZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdwb3B1cC1hY3RpdmUnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZU92ZXJsYXkoKSB7XHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktLXZpc2libGUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAtYWN0aXZlJyk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1kaWFsb2ctb3ZlcmxheScsIERpYWxvZ092ZXJsYXkpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dPdmVybGF5LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vRGlhbG9nT3ZlcmxheS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0RpYWxvZ092ZXJsYXkuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkucG9wdXAtYWN0aXZlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluLW91dDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuXFxuLm92ZXJsYXktLXZpc2libGUge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRGlhbG9nT3ZlcmxheSB9IGZyb20gJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheSc7XHJcbmltcG9ydCB7IEluc3RydWN0aW9uc0RpYWxvZyB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdHJ1Y3Rpb25zQnV0dG9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByaXZhdGUgYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBwcml2YXRlIGluc3RydWN0aW9uc0RpYWxvZzogSW5zdHJ1Y3Rpb25zRGlhbG9nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuYnV0dG9uLnRleHRDb250ZW50ID0gJ0luc3RydWN0aW9ucyc7XHJcbiAgICB0aGlzLmJ1dHRvbi5jbGFzc05hbWUgPSAnaW5zdHJ1Y3Rpb25zLWJ1dHRvbic7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcclxuXHJcbiAgICB0aGlzLm9uQnV0dG9uQ2xpY2sgPSB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zRGlhbG9nID0gbmV3IEluc3RydWN0aW9uc0RpYWxvZygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgcmV0dXJuIFsnZGlhbG9nLW92ZXJsYXktaWQnXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGlhbG9nT3ZlcmxheUlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkaWFsb2ctb3ZlcmxheS1pZCcpIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBkaWFsb2dPdmVybGF5SWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2RpYWxvZy1vdmVybGF5LWlkJywgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5idXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkJ1dHRvbkNsaWNrKCkge1xyXG4gICAgY29uc3QgZGlhbG9nT3ZlcmxheSA9IDxEaWFsb2dPdmVybGF5PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGlhbG9nT3ZlcmxheUlkKTtcclxuICAgIGlmICghZGlhbG9nT3ZlcmxheSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpYWxvZyBvdmVybGF5IG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpYWxvZ092ZXJsYXkuc2hvd0RpYWxvZyh0aGlzLmluc3RydWN0aW9uc0RpYWxvZyk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaW5zdHJ1Y3Rpb25zLWJ1dHRvbicsIEluc3RydWN0aW9uc0J1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0J1dHRvbi50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNEaWFsb2cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluc3RydWN0aW9ucy1kaWFsb2cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMzUwZjtcXG4gIGNvbG9yOiAjZWVlOyB9XFxuXFxuLmluc3RydWN0aW9ucy1kaWFsb2dfX3RpdGxlIHtcXG4gIG1hcmdpbjogMDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNEaWFsb2cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUG9seWdvbkNsaXBwZXIgfSBmcm9tICdzZXJ2aWNlcy9Qb2x5Z29uQ2xpcHBlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuaW1wb3J0IHsgQ2xvc2VzdFBhdGhGaW5kZXIgfSBmcm9tICdzZXJ2aWNlcy9DbG9zZXN0UGF0aEZpbmRlcic7XHJcblxyXG5pbnRlcmZhY2UgUG9seWdvbkNsaXBwaW5nU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgcG9seWdvbkNsaXBwZXI6IFBvbHlnb25DbGlwcGVyO1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHBvbHlnb25MYXllcjogTGF5ZXI7XHJcbiAgY2xvc2VzdFBhdGhGaW5kZXI6IENsb3Nlc3RQYXRoRmluZGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbkNsaXBwaW5nU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcG9seWdvbkNsaXBwZXI6IFBvbHlnb25DbGlwcGVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2xvc2VzdFBhdGhGaW5kZXI6IENsb3Nlc3RQYXRoRmluZGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBvbHlnb25DbGlwcGluZ1NlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMucG9seWdvbkNsaXBwZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkNsaXBwZXI7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uTGF5ZXI7XHJcbiAgICB0aGlzLmNsb3Nlc3RQYXRoRmluZGVyID0gZGVwZW5kZW5jaWVzLmNsb3Nlc3RQYXRoRmluZGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICAvLyBOb3RoaW5nIHRvIGRvIGhlcmVcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgLy8gTm90aGluZyB0byBkbyBoZXJlXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xpcFBvbHlnb25zKHBvaW50OiBQb2ludCkge1xyXG4gICAgY29uc3QgcG9seWdvbnNJbkJvdW5kaW5nQm94ID0gPFBvbHlnb25bXT50aGlzLnBvbHlnb25MYXllci5wYXRocy5maWx0ZXIocGF0aCA9PlxyXG4gICAgICBwYXRoLmlzUG9pbnRJbkJvdW5kaW5nQm94KHBvaW50KVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocG9seWdvbnNJbkJvdW5kaW5nQm94Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCdDbGljayBpbiB0aGUgYm91bmRpbmcgYm94IG9mIGF0IGxlYXN0IDIgcG9seWdvbnMnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb252ZXhQb2x5Z29ucyA9IHBvbHlnb25zSW5Cb3VuZGluZ0JveC5maWx0ZXIocG9seWdvbiA9PiBwb2x5Z29uLmlzQ29udmV4KCkpO1xyXG4gICAgaWYgKGNvbnZleFBvbHlnb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ0Nhbm5vdCBmaW5kIGEgY29udmV4IHBvbHlnb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZXN0Q29udmV4UG9seWdvbiA9IDxQb2x5Z29uPnRoaXMuY2xvc2VzdFBhdGhGaW5kZXIuZ2V0Q2xvc2VzdFBhdGgoXHJcbiAgICAgIGNvbnZleFBvbHlnb25zLFxyXG4gICAgICBwb2ludFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzdWJqZWN0UG9seWdvbnMgPSBwb2x5Z29uc0luQm91bmRpbmdCb3guZmlsdGVyKFxyXG4gICAgICBwb2x5Z29uID0+IHBvbHlnb24gIT09IGNsb3Nlc3RDb252ZXhQb2x5Z29uXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2xvc2VzdFN1YmplY3RQb2x5Z29uID0gPFBvbHlnb24+dGhpcy5jbG9zZXN0UGF0aEZpbmRlci5nZXRDbG9zZXN0UGF0aChcclxuICAgICAgc3ViamVjdFBvbHlnb25zLFxyXG4gICAgICBwb2ludFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjbGlwcGVkUG9seWdvbiA9IHRoaXMucG9seWdvbkNsaXBwZXIuY2xpcFBvbHlnb24oXHJcbiAgICAgIGNsb3Nlc3RTdWJqZWN0UG9seWdvbixcclxuICAgICAgY2xvc2VzdENvbnZleFBvbHlnb25cclxuICAgICk7XHJcbiAgICBpZiAoIWNsaXBwZWRQb2x5Z29uKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgnQ2Fubm90IGNsaXAgcG9seWdvbnMgKHRoZXkgZG8gbm90IG92ZXJsYXApJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIucmVtb3ZlUGF0aChjbG9zZXN0U3ViamVjdFBvbHlnb24pO1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIucmVtb3ZlUGF0aChjbG9zZXN0Q29udmV4UG9seWdvbik7XHJcblxyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIucGF0aHMucHVzaChjbGlwcGVkUG9seWdvbik7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5pbXBvcnQgeyBFdmVudFF1ZXVlIH0gZnJvbSAnZXZlbnRzL0V2ZW50UXVldWUnO1xyXG5cclxudHlwZSBFdmVudExpc3RlbmVyID0gKGV2ZW50OiBBcHBFdmVudCkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudEFnZ3JlZ2F0b3Ige1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJNYXAgPSBuZXcgTWFwPHN0cmluZywgRXZlbnRMaXN0ZW5lcltdPigpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRRdWV1ZSA9IG5ldyBFdmVudFF1ZXVlKCk7XHJcbiAgcHJpdmF0ZSBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmdldEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XHJcblxyXG4gICAgaWYgKGV2ZW50TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xyXG4gICAgICBldmVudExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxpc3RlbmVyTWFwLnNldChldmVudFR5cGUsIGV2ZW50TGlzdGVuZXJzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmdldEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSk7XHJcbiAgICBjb25zdCBsaXN0ZW5lckluZGV4ID0gZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XHJcblxyXG4gICAgaWYgKGxpc3RlbmVySW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGV2ZW50TGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxpc3RlbmVyTWFwLnNldChldmVudFR5cGUsIGV2ZW50TGlzdGVuZXJzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNwYXRjaEV2ZW50KGV2ZW50OiBBcHBFdmVudCkge1xyXG4gICAgdGhpcy5ldmVudFF1ZXVlLmVucXVldWUoZXZlbnQpO1xyXG5cclxuICAgIGlmICghdGhpcy5pc0Rpc3BhdGNoaW5nKSB7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudEZyb21RdWV1ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwYXRjaEV2ZW50RnJvbVF1ZXVlKCkge1xyXG4gICAgdGhpcy5pc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBldmVudCA9IHRoaXMuZXZlbnRRdWV1ZS5kZXF1ZXVlKCk7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnQuZXZlbnRUeXBlKTtcclxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4gbGlzdGVuZXIoZXZlbnQpKTtcclxuXHJcbiAgICBpZiAodGhpcy5ldmVudFF1ZXVlLmlzRW1wdHkoKSkge1xyXG4gICAgICB0aGlzLmlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudEZyb21RdWV1ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFdmVudExpc3RlbmVycyhldmVudFR5cGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXJNYXAuZ2V0KGV2ZW50VHlwZSkgfHwgW107XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3IudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRRdWV1ZSB7XHJcbiAgcHJpdmF0ZSBfcXVldWU6IEFwcEV2ZW50W10gPSBbXTtcclxuXHJcbiAgcHVibGljIGVucXVldWUoZXZlbnQ6IEFwcEV2ZW50KSB7XHJcbiAgICB0aGlzLl9xdWV1ZS5wdXNoKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXF1ZXVlKCk6IEFwcEV2ZW50IHtcclxuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1F1ZXVlIGlzIGVtcHR5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlLnNwbGljZSgwLCAxKVswXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcXVldWUubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRMZW5ndGgoKSA9PT0gMDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL0V2ZW50UXVldWUudHMiXSwic291cmNlUm9vdCI6IiJ9