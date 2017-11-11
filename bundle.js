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
exports.push([module.i, "body,html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}body{line-height:1.5}.main-canvas{border:1px solid #000}.main-container{width:100%;padding:0 1em}.canvas-wrapper{width:100%;position:relative}.application-ui{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.application-ui *{pointer-events:all}.app-header{margin-bottom:1em;margin-left:1em}.app-name{margin:0}.footer{margin:1em}", ""]);

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
exports.push([module.i, ".image-select-dialog{padding:1rem;width:75%;max-width:800px}.image-select-dialog__heading{margin:.5em 0}.image-select-dialog__block{border-bottom:1px solid #000;padding-bottom:1em}.image-select-dialog__preset-images-container{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap}.image-select-dialog__preset-images-container>div{max-width:25%;max-height:200px;margin:auto}.image-select-dialog__preset-images-container img{max-width:100%;max-height:200px}.image-select-dialog__custom-image{display:block;max-width:25%;max-height:200px;margin:auto}.image-select-dialog__image--selected{border:3px solid green}.image-select-dialog__bottom-buttons{display:flex;justify-content:space-around;margin-top:1em}.image-select-dialog__bottom-buttons button{font-size:1.3em}", ""]);

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
exports.push([module.i, ".dialog-box{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);z-index:1;background-color:#eee;border:1px solid #000;border-radius:25px;color:#222;padding:2rem;border-radius:10px;box-shadow:2px 2px 5px #000;transition:transform .25s ease-in-out;will-change:transform}.dialog-box--active{transform:translate(-50%,-50%) scale(1)}", ""]);

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
exports.push([module.i, ".color-select-dialog{padding:1rem;width:50%;max-width:300px}.color-select-dialog__block{border-bottom:1px solid #000;padding-bottom:1em}.color-select-dialog__heading{margin:.5em 0}.color-select-dialog__bottom-buttons{display:flex;justify-content:space-around;margin-top:1em}.color-select-dialog__bottom-buttons button{font-size:1.3em}", ""]);

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
exports.push([module.i, ".loading-bar-dialog{overflow:hidden}.loading-dialog__background-bar{position:absolute;height:100%;transition:width .2s ease-in-out;background-color:cyan;margin:-2rem;z-index:-1}", ""]);

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
exports.push([module.i, ".application-ui__vertex{border:1px solid #000;width:10px;height:10px;position:absolute;transform:translate(-50%,-50%);border:2px solid}.application-ui__vertex:not(:active){border-color:green}.application-ui__vertex:active{border-color:red}.application-ui__vertex--initial{background-color:#0051ff}", ""]);

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
exports.push([module.i, "body.popup-active{overflow:hidden}.overlay{position:fixed;top:0;left:0;width:100%;height:100%;opacity:0;z-index:1;background-color:#000;transition:opacity .25s ease-in-out;pointer-events:none}.overlay--visible{opacity:.5;pointer-events:all}", ""]);

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
exports.push([module.i, ".instructions-dialog{background-color:#1f350f;color:#eee}.instructions-dialog__title{margin:0}", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2ZlMTlkZGEyN2M0Yzk0MWMxY2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9SZW5kZXJFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1ZlY3RvcjMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xFWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0xpZ2h0VHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0NvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vTGluZVByb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9DT0xPUlMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9MYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1BhdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9MaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3SGVpZ2h0TWFwSW50ZW5zaXR5RXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0Q29sb3JFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRQb3NpdGlvbkV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VHlwZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWdvbi1maWxsZXIvRmlsbFdvcmtlck1lc3NhZ2VUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vUG9seWdvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2dCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9Qb2ludENsaWNrRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy91aS9Mb2FkaW5nRmluaXNoZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3VpL0xvYWRpbmdTdGFydGVkRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvRGlhbG9nQm94QnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvUmVuZGVyRmluaXNoZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3BvaW50LWRyYWcvRmluaXNoUG9pbnREcmFnRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL1BvaW50RHJhZ0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvTGluZUNsaWNrRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/NDQ0NiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy93ZWJjb21wb25lbnRzLWhpLXNkLWNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vSGl0VGVzdFJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWdvbi1maWxsZXIvUG9seWdvbkZpbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWdvbi1maWxsZXIvQWN0aXZlRWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9DbG9zZXN0UGF0aEZpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9JbnB1dERhdGFJbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvTGlnaHRTaW11bGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1BvbHlnb25DbGlwcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0lucHV0RGF0YVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0JhY2tncm91bmRTZWxlY3RCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZy5zY3NzPzZjZjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2lucHV0LWRhdGEvSGVpZ2h0TWFwSW50ZW5zaXR5SW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9IZWlnaHRNYXBTZWxlY3RCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodENvbG9yU2VsZWN0QnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvRGlhbG9nQm94LnNjc3M/Njc0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9EaWFsb2dCb3guc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3M/OTYyNCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodFR5cGVTZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodFBvc2l0aW9uUmFkaXVzSW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9Ob3JtYWxNYXBTZWxlY3RCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0xvYWRpbmdVSVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvbG9hZGluZy1iYXItZGlhbG9nL0xvYWRpbmdCYXJEaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvbG9hZGluZy1iYXItZGlhbG9nL0xvYWRpbmdCYXJEaWFsb2cuc2Nzcz8zMWM4Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2xvYWRpbmctYmFyLWRpYWxvZy9Mb2FkaW5nQmFyRGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvTmV3UG9seWdvblVJQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUGF0aERyYWdnaW5nU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUG9pbnREcmFnZ2luZ1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1BvaW50SW5zZXJ0ZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2ludFJlbW92ZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2ludFN5bmNTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQuc2Nzcz9mNmM0Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9TZXJpYWxpemF0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL0xvYWRCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9TYXZlQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzPzkwYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzPzRlMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvRXZlbnRBZ2dyZWdhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9l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Q1UsV0FBTSxHQUFlLEVBQUUsQ0FBQztJQXFCbEMsQ0FBQztJQW5CUSxPQUFPLENBQUMsS0FBZTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sT0FBTztRQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxTQUFTO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzVCLENBQUM7SUFFTSxPQUFPO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGO0FBdEJELGdDQXNCQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2ZlMTlkZGEyN2M0Yzk0MWMxY2EiLCJpbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdjb21tb24vQ09MT1JTJztcclxuaW1wb3J0IHsgTGluZVByb3BlcnRpZXMgfSBmcm9tICdjb21tb24vTGluZVByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuY29uc3QgY29uZmlndXJhdGlvbiA9IHtcclxuICBuZXdMaW5lUHJldmlld1Byb3BlcnRpZXM6IG5ldyBMaW5lUHJvcGVydGllcyhDT0xPUlMuQkxVRSwgMiksXHJcbiAgbmV3UG9seWdvbkxpbmVQcm9wZXJ0aWVzOiBuZXcgTGluZVByb3BlcnRpZXMoQ09MT1JTLlJFRCwgMSksXHJcbiAgcG9seWdvbkxpbmVQcm9wZXJ0aWVzOiBMaW5lUHJvcGVydGllcy5nZXREZWZhdWx0KCksXHJcblxyXG4gIGFwcGxpY2F0aW9uVUlDb250YWluZXJJRDogJ2FwcGxpY2F0aW9uLXVpJyxcclxuXHJcbiAgaGl0VG9sZXJhbmNlOiAxMCxcclxuICBtaW5Qb2x5Z29uUG9pbnRzOiAzLFxyXG4gIGRvdWJsZUNsaWNrTWF4RGVsYXk6IDUwMCxcclxuXHJcbiAgZGlzcGxheVBhdGhHaG9zdFdoZW5EcmFnZ2luZzogZmFsc2UsXHJcbiAgY2FudmFzRm9udDogJzMwcHQgc2VyaWYnLFxyXG4gIGxvYWRpbmdCYXJIaWRlRGVsYXk6IDE1MDAsXHJcblxyXG4gIGluaXRpYWxDdXN0b21CYWNrZ3JvdW5kQ29sb3JIZXg6ICcjMDBhMmU4JywgLy8gYmx1ZS1pc2hcclxuICBwcmVzZXRCYWNrZ3JvdW5kVGV4dHVyZXM6IFtcclxuICAgICdpbWFnZXMvYmFja2dyb3VuZHMvcmVkLWJyaWNrcy5qcGcnLFxyXG4gICAgJ2ltYWdlcy9iYWNrZ3JvdW5kcy9GdW5ueS1DYXQtRmFjZS5qcGcnLFxyXG4gICAgJ2ltYWdlcy9iYWNrZ3JvdW5kcy9ocWRlZmF1bHQuanBnJ1xyXG4gIF0sXHJcbiAgaW5pdGlhbEN1c3RvbUhlaWdodE1hcENvbG9ySGV4OiAnIzAwMDAwMCcsICAvLyBbMCwgMCwgMF1cclxuICBwcmVzZXRIZWlnaHRNYXBzOiBbXHJcbiAgICAnaW1hZ2VzL2hlaWdodC1tYXBzL2JyaWNrX2hlaWdodG1hcC5wbmcnLFxyXG4gICAgJ2ltYWdlcy9oZWlnaHQtbWFwcy90ZXJyYWluLWhlaWdodG1hcC5wbmcnXHJcbiAgXSxcclxuICBpbml0aWFsQ3VzdG9tTm9ybWFsTWFwQ29sb3JIZXg6ICcjN2Y3ZmZmJywgIC8vIFswLCAwLCAxXSAoYmVjYXVzZSB4IGFuZCB5IGFyZSBbLTEsIDFdKVxyXG4gIHByZXNldE5vcm1hbE1hcHM6IFtcclxuICAgICdpbWFnZXMvbm9ybWFsLW1hcHMvYnJpY2tfbm9ybWFsbWFwLnBuZycsXHJcbiAgICAnaW1hZ2VzL25vcm1hbC1tYXBzL25vcm1hbF9tYXAuanBnJyxcclxuICAgICdpbWFnZXMvbm9ybWFsLW1hcHMvY2lyY2xlcy5wbmcnXHJcbiAgXSxcclxuICBwcmVzZXRMaWdodENvbG9yOiBuZXcgVmVjdG9yMygxLCAxLCAxKSxcclxuICBwcmVzZXRIZWlnaHRNYXBJbnRlbnNpdHk6IDAuMDUsXHJcblxyXG4gIG1vdmluZ0xpZ2h0OiB7XHJcbiAgICBob3Jpem9udGFsTGFwVGltZTogMTAgKiAxMDAwLFxyXG4gICAgdmVydGljYWxMYXBUaW1lOiA4ICogMTAwMCxcclxuICAgIG1pblZlcnRpY2FsQW5nbGU6ICgyMCAvIDE4MCkgKiBNYXRoLlBJLFxyXG4gICAgbWF4VmVydGljYWxBbmdsZTogKDcwIC8gMTgwKSAqIE1hdGguUEksXHJcbiAgICB0aWNrSW50ZXJ2YWw6IDUwLFxyXG4gICAgZGVmYXVsdFJhZGl1czogNTAwXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgY29uZmlndXJhdGlvbiB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb25maWd1cmF0aW9uLnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlckV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkID0gbnVsbDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gUmVuZGVyRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnUmVuZGVyRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvUmVuZGVyRXZlbnQudHMiLCJpbXBvcnQgeyBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCc7XHJcbmltcG9ydCB7IE5ld0hlaWdodE1hcEV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3SGVpZ2h0TWFwRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3SGVpZ2h0TWFwSW50ZW5zaXR5RXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdMaWdodENvbG9yRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodENvbG9yRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdMaWdodFBvc2l0aW9uRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFBvc2l0aW9uRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdMaWdodFR5cGVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VHlwZUV2ZW50JztcclxuaW1wb3J0IHsgTmV3Tm9ybWFsTWFwRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudCc7XHJcblxyXG5leHBvcnQge1xyXG4gIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwSW50ZW5zaXR5RXZlbnQsXHJcbiAgTmV3TGlnaHRDb2xvckV2ZW50LFxyXG4gIE5ld0xpZ2h0UG9zaXRpb25FdmVudCxcclxuICBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQsXHJcbiAgTmV3TGlnaHRUeXBlRXZlbnQsXHJcbiAgTmV3Tm9ybWFsTWFwRXZlbnRcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvaW5kZXgudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3luY0NvbXBvbmVudHNFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZCA9IG51bGw7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IFN5bmNDb21wb25lbnRzRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnU3luY0NvbXBvbmVudHNFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50LnRzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInR5cGUgTW92ZUNhbGxiYWNrID0gKCkgPT4gdm9pZDtcclxuXHJcbmNvbnN0IEVQU0lMT04gPSAwLjE7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnQge1xyXG4gIHB1YmxpYyBtb3ZlQ2FsbGJhY2s6IE1vdmVDYWxsYmFjayB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIF94OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfeTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLl95O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgdGhpcy5feSA9IHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFkZChwMTogUG9pbnQsIHAyOiBQb2ludCk6IFBvaW50IHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQocDEueCArIHAyLngsIHAxLnkgKyBwMi55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3VidHJhY3QocDE6IFBvaW50LCBwMjogUG9pbnQpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHAxLnggLSBwMi54LCBwMS55IC0gcDIueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldERpc3RhbmNlQmV0d2VlbihwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFBvaW50LmdldERpc3RhbmNlQmV0d2VlblNxdWFyZWQocDEsIHAyKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldERpc3RhbmNlQmV0d2VlblNxdWFyZWQocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgucG93KHAxLnggLSBwMi54LCAyKSArIE1hdGgucG93KHAxLnkgLSBwMi55LCAyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QW5nbGUocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihwMi55IC0gcDEueSwgcDIueCAtIHAxLngpICogMTgwIC8gTWF0aC5QSTtcclxuXHJcbiAgICBpZiAoYW5nbGUgPCAwKSB7XHJcbiAgICAgIGFuZ2xlICs9IDM2MDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYW5nbGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRvdFByb2R1Y3QocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICAgIHJldHVybiBwMS54ICogcDIueCArIHAxLnkgKiBwMi55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcm9zc1Byb2R1Y3QocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICAgIHJldHVybiBwMS54ICogcDIueSAtIHAxLnkgKiBwMi54O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBlcHNpbG9uRXF1YWxzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgICByZXR1cm4gUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuKHAxLCBwMikgPD0gRVBTSUxPTjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3ZlVG8ocG9pbnQ6IFBvaW50KTogdm9pZDtcclxuICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcclxuICBwdWJsaWMgbW92ZVRvKHBvaW50T3JYOiBQb2ludCB8IG51bWJlciwgeT86IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiBwb2ludE9yWCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgaWYgKHkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigneCBpcyBkZWZpbmVkLCBidXQgeSBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5tb3ZlVG9Db29yZGluYXRlcyhwb2ludE9yWCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubW92ZVRvUG9pbnQocG9pbnRPclgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVxdWFscyhwb2ludDogUG9pbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnggPT09IHBvaW50LnggJiYgdGhpcy55ID09PSBwb2ludC55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERpc3RhbmNlVG8ocG9pbnQ6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBQb2ludC5nZXREaXN0YW5jZUJldHdlZW4odGhpcywgcG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERpc3RhbmNlU3F1YXJlZFRvKHBvaW50OiBQb2ludCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuU3F1YXJlZCh0aGlzLCBwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmbG9vcigpIHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoTWF0aC5mbG9vcih0aGlzLngpLCBNYXRoLmZsb29yKHRoaXMueSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlVG9Qb2ludChwb2ludDogUG9pbnQpIHtcclxuICAgIHJldHVybiB0aGlzLm1vdmVUb0Nvb3JkaW5hdGVzKHBvaW50LngsIHBvaW50LnkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlVG9Db29yZGluYXRlcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5feCA9IHg7XHJcbiAgICB0aGlzLl95ID0geTtcclxuXHJcbiAgICBpZiAodGhpcy5tb3ZlQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5tb3ZlQ2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL1BvaW50LnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5cclxuY29uc3QgTUFYX0NPTE9SID0gMjU1O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjMge1xyXG4gIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgcHVibGljIHk6IG51bWJlcjtcclxuICBwdWJsaWMgejogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMueiA9IHo7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZyb21Db2xvcihjb2xvcjogQ29sb3IpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyhjb2xvci5yIC8gTUFYX0NPTE9SLCBjb2xvci5nIC8gTUFYX0NPTE9SLCBjb2xvci5iIC8gTUFYX0NPTE9SKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYWRkKHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYxLnggKyB2Mi54LCB2MS55ICsgdjIueSwgdjEueiArIHYyLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdWJ0cmFjdCh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh2MS54IC0gdjIueCwgdjEueSAtIHYyLnksIHYxLnogLSB2Mi56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3Jvc3NQcm9kdWN0KHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKFxyXG4gICAgICB2MS55ICogdjIueiAtIHYxLnogKiB2Mi55LFxyXG4gICAgICB2MS56ICogdjIueCAtIHYxLnggKiB2Mi56LFxyXG4gICAgICB2MS54ICogdjIueSAtIHYxLnkgKiB2Mi54XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkb3RQcm9kdWN0KHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdjEueCAqIHYyLnggKyB2MS55ICogdjIueSArIHYxLnogKiB2Mi56O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjb3NpbmVBbmdsZSh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZG90UHJvZHVjdCA9IFZlY3RvcjMuZG90UHJvZHVjdCh2MSwgdjIpO1xyXG4gICAgY29uc3QgbGVuZ3RoMSA9IHYxLmdldExlbmd0aCgpO1xyXG4gICAgY29uc3QgbGVuZ3RoMiA9IHYyLmdldExlbmd0aCgpO1xyXG5cclxuICAgIHJldHVybiBkb3RQcm9kdWN0IC8gKGxlbmd0aDEgKiBsZW5ndGgyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbU5vcm1hbE1hcChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogVmVjdG9yMyB7XHJcbiAgICBjb25zdCB4ID0gciAvIDI1NSAqIDIgLSAxO1xyXG4gICAgY29uc3QgeSA9IGcgLyAyNTUgKiAyIC0gMTtcclxuICAgIGNvbnN0IHogPSBiIC8gMjU1O1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbXVsdGlwbHlDb21wb25lbnRzKHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMykge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYxLnggKiB2Mi54LCB2MS55ICogdjIueSwgdjEueiAqIHYyLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQ29sb3IoKTogQ29sb3Ige1xyXG4gICAgY29uc3QgciA9IE1hdGguZmxvb3IodGhpcy54ICogTUFYX0NPTE9SKTtcclxuICAgIGNvbnN0IGcgPSBNYXRoLmZsb29yKHRoaXMueSAqIE1BWF9DT0xPUik7XHJcbiAgICBjb25zdCBiID0gTWF0aC5mbG9vcih0aGlzLnogKiBNQVhfQ09MT1IpO1xyXG5cclxuICAgIHJldHVybiBuZXcgQ29sb3IociwgZywgYik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbm9ybWFsaXplKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy54IC8gbGVuZ3RoLCB0aGlzLnkgLyBsZW5ndGgsIHRoaXMueiAvIGxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbXVsdGlwbHkoc2NhbGU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCAqIHNjYWxlLCB0aGlzLnkgKiBzY2FsZSwgdGhpcy56ICogc2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlbmd0aCgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICoqIDIgKyB0aGlzLnkgKiogMiArIHRoaXMueiAqKiAyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLngsIHRoaXMueSwgdGhpcy56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnZlcnQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoLXRoaXMueCwgLXRoaXMueSwgLXRoaXMueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmxvb3IoKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcih0aGlzLngpO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IodGhpcy55KTtcclxuICAgIGNvbnN0IHogPSBNYXRoLmZsb29yKHRoaXMueik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vVmVjdG9yMy50cyIsIi8vIERpY3Rpb25hcnlcclxuY29uc3QgTEVYID0ge1xyXG4gIFBPTFlHT05fTEFZRVJfTkFNRTogJ1BvbHlnb25MYXllcicsXHJcbiAgUEFUSF9MQVlFUl9OQU1FOiAnUGF0aExheWVyJyxcclxuICBQQVRIX0dIT1NUX0xBWUVSX05BTUU6ICdQYXRoR2hvc3RMYXllcicsXHJcbiAgTkVXX0NPTkRJVElPTl9FVkVOVF9OQU1FOiAnbmV3LWNvbmRpdGlvbicsXHJcbiAgUkVNT1ZFX0NPTkRJVElPTl9FVkVOVF9OQU1FOiAncmVtb3ZlLWNvbmRpdGlvbicsXHJcbiAgS0VZX0NPREU6IHtcclxuICAgIEVTQ0FQRTogMjdcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBMRVggfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvTEVYLnRzIiwiZXhwb3J0IGVudW0gTGlnaHRUeXBlIHtcclxuICBDb25zdGFudCxcclxuICBNb3ZpbmdcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vTGlnaHRUeXBlLnRzIiwiZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcjogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBnOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IGI6IG51bWJlcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgZmlsbFN0eWxlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpIHtcclxuICAgIHRoaXMuciA9IHI7XHJcbiAgICB0aGlzLmcgPSBnO1xyXG4gICAgdGhpcy5iID0gYjtcclxuXHJcbiAgICB0aGlzLmZpbGxTdHlsZSA9IGByZ2IoJHt0aGlzLnJ9LCAke3RoaXMuZ30sICR7dGhpcy5ifSlgO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tSGV4U3RyaW5nKGhleFN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZWRQYXJ0ID0gaGV4U3RyaW5nLnNsaWNlKDEsIDMpO1xyXG4gICAgY29uc3QgZ3JlZW5QYXJ0ID0gaGV4U3RyaW5nLnNsaWNlKDMsIDUpO1xyXG4gICAgY29uc3QgYmx1ZVBhcnQgPSBoZXhTdHJpbmcuc2xpY2UoNSwgNyk7XHJcblxyXG4gICAgY29uc3QgcmVkID0gcGFyc2VJbnQocmVkUGFydCwgMTYpO1xyXG4gICAgY29uc3QgZ3JlZW4gPSBwYXJzZUludChncmVlblBhcnQsIDE2KTtcclxuICAgIGNvbnN0IGJsdWUgPSBwYXJzZUludChibHVlUGFydCwgMTYpO1xyXG5cclxuICAgIHJldHVybiBuZXcgQ29sb3IocmVkLCBncmVlbiwgYmx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbnRlZ2VyVG9QYWRkZWRIZXgoaW50ZWdlcjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBoZXggPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KTtcclxuXHJcbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gYCAke2hleH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGhleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0hleFN0cmluZygpIHtcclxuICAgIGNvbnN0IHJlZFBhcnQgPSBDb2xvci5pbnRlZ2VyVG9QYWRkZWRIZXgodGhpcy5yKTtcclxuICAgIGNvbnN0IGdyZWVuUGFydCA9IENvbG9yLmludGVnZXJUb1BhZGRlZEhleCh0aGlzLmcpO1xyXG4gICAgY29uc3QgYmx1ZVBhcnQgPSBDb2xvci5pbnRlZ2VyVG9QYWRkZWRIZXgodGhpcy5iKTtcclxuXHJcbiAgICByZXR1cm4gYCMke3JlZFBhcnQgKyBibHVlUGFydCArIGdyZWVuUGFydH1gO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vQ29sb3IudHMiLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbW1vbi9Db2xvcic7XHJcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJ2NvbW1vbi9DT0xPUlMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpbmVQcm9wZXJ0aWVzIHtcclxuICBwdWJsaWMgY29sb3I6IENvbG9yO1xyXG4gIHB1YmxpYyB0aGlja25lc3M6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoY29sb3I6IENvbG9yLCB0aGlja25lc3M6IG51bWJlcikge1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy50aGlja25lc3MgPSB0aGlja25lc3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldERlZmF1bHQoKTogTGluZVByb3BlcnRpZXMge1xyXG4gICAgcmV0dXJuIG5ldyBMaW5lUHJvcGVydGllcyhDT0xPUlMuQkxBQ0ssIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCk6IExpbmVQcm9wZXJ0aWVzIHtcclxuICAgIHJldHVybiBuZXcgTGluZVByb3BlcnRpZXModGhpcy5jb2xvciwgdGhpcy50aGlja25lc3MpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vTGluZVByb3BlcnRpZXMudHMiLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbW1vbi9Db2xvcic7XHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xyXG4gIEJMQUNLOiBuZXcgQ29sb3IoMCwgMCwgMCksXHJcbiAgUkVEOiBuZXcgQ29sb3IoMjU1LCAwLCAwKSxcclxuICBHUkVFTjogbmV3IENvbG9yKDAsIDI1NSwgMCksXHJcbiAgQkxVRTogbmV3IENvbG9yKDAsIDAsIDI1NSksXHJcbiAgV0hJVEU6IG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1KVxyXG59O1xyXG5cclxuT2JqZWN0LmZyZWV6ZShDT0xPUlMpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vQ09MT1JTLnRzIiwiaW1wb3J0IHsgSGl0VGVzdFJlc3VsdCB9IGZyb20gJ2NvbW1vbi9IaXRUZXN0UmVzdWx0JztcclxuaW1wb3J0IHsgUGF0aCwgU2VyaWFsaXphYmxlUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJ1JlbmRlcmVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXphYmxlTGF5ZXIge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwYXRoczogU2VyaWFsaXphYmxlUGF0aFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5ZXIge1xyXG4gIHB1YmxpYyBwYXRoczogUGF0aFtdID0gW107XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihyZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHRoaXMucGF0aHMuZm9yRWFjaChwYXRoID0+IHJlbmRlcmVyLmRyYXdQYXRoKHBhdGgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVQYXRoKHBhdGg6IFBhdGgpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXRocy5pbmRleE9mKHBhdGgpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXRocy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpdFRlc3QocG9pbnQ6IFBvaW50KTogSGl0VGVzdFJlc3VsdCB8IG51bGwge1xyXG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHRoaXMucGF0aHMpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gcGF0aC5oaXRUZXN0KHBvaW50KTtcclxuICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVzdWx0LmxheWVyID0gdGhpcztcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9TZXJpYWxpemFibGVPYmplY3QoKTogU2VyaWFsaXphYmxlTGF5ZXIge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICBwYXRoczogdGhpcy5wYXRocy5tYXAocGF0aCA9PiBwYXRoLnRvU2VyaWFsaXphYmxlT2JqZWN0KCkpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZyb21TZXJpYWxpemFibGVPYmplY3Qoc2VyaWFsaXphYmxlTGF5ZXI6IFNlcmlhbGl6YWJsZUxheWVyKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBzZXJpYWxpemFibGVMYXllci5uYW1lO1xyXG5cclxuICAgIHRoaXMucGF0aHMuc3BsaWNlKDAsIHRoaXMucGF0aHMubGVuZ3RoKTtcclxuXHJcbiAgICBzZXJpYWxpemFibGVMYXllci5wYXRocy5mb3JFYWNoKHNlcmlhbGl6YWJsZVBhdGggPT4ge1xyXG4gICAgICB0aGlzLnBhdGhzLnB1c2goUGF0aC5mcm9tU2VyaWFsaXphYmxlUGF0aChzZXJpYWxpemFibGVQYXRoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0xheWVyLnRzIiwiaW1wb3J0IHsgSGl0VGVzdFJlc3VsdCB9IGZyb20gJ2NvbW1vbi9IaXRUZXN0UmVzdWx0JztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgTGluZVByb3BlcnRpZXMgfSBmcm9tICdjb21tb24vTGluZVByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXphYmxlUGF0aCB7XHJcbiAgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzO1xyXG4gIGNsb3NlZDogYm9vbGVhbjtcclxuICB2ZXJ0aWNlczoge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gIH1bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGgge1xyXG4gIHB1YmxpYyBjbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzO1xyXG4gIHByb3RlY3RlZCByZWFkb25seSB2ZXJ0aWNlczogUG9pbnRbXTtcclxuXHJcbiAgY29uc3RydWN0b3IodmVydGljZXM6IFBvaW50W10sIGxpbmVQcm9wZXJ0aWVzOiBMaW5lUHJvcGVydGllcykge1xyXG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xyXG4gICAgdGhpcy5saW5lUHJvcGVydGllcyA9IGxpbmVQcm9wZXJ0aWVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tU2VyaWFsaXphYmxlUGF0aChzZXJpYWxpemFibGVQYXRoOiBTZXJpYWxpemFibGVQYXRoKSB7XHJcbiAgICBjb25zdCByZWFsUG9pbnRzID0gc2VyaWFsaXphYmxlUGF0aC52ZXJ0aWNlcy5tYXAodmVydGV4ID0+IG5ldyBQb2ludCh2ZXJ0ZXgueCwgdmVydGV4LnkpKTtcclxuICAgIGNvbnN0IHJlYWxMaW5lUHJvcGVydGllcyA9IG5ldyBMaW5lUHJvcGVydGllcyhcclxuICAgICAgc2VyaWFsaXphYmxlUGF0aC5saW5lUHJvcGVydGllcy5jb2xvcixcclxuICAgICAgc2VyaWFsaXphYmxlUGF0aC5saW5lUHJvcGVydGllcy50aGlja25lc3NcclxuICAgICk7XHJcbiAgICBjb25zdCBwYXRoID0gbmV3IFBhdGgocmVhbFBvaW50cywgcmVhbExpbmVQcm9wZXJ0aWVzKTtcclxuICAgIHBhdGguY2xvc2VkID0gc2VyaWFsaXphYmxlUGF0aC5jbG9zZWQ7XHJcblxyXG4gICAgcmV0dXJuIHBhdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgKmdldFZlcnRpY2VzSXRlcmF0b3IoKSB7XHJcbiAgICBjb25zdCB2ZXJ0aWNlc0NvdW50ID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgICB5aWVsZCB0aGlzLnZlcnRpY2VzW2ldO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNsb3NlZCAmJiB2ZXJ0aWNlc0NvdW50ID4gMCkge1xyXG4gICAgICB5aWVsZCB0aGlzLnZlcnRpY2VzWzBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljICpnZXRMaW5lSXRlcmF0b3IoKSB7XHJcbiAgICBsZXQgcHJldmlvdXNQb2ludDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMuZ2V0VmVydGljZXNJdGVyYXRvcigpKSB7XHJcbiAgICAgIGlmICghcHJldmlvdXNQb2ludCkge1xyXG4gICAgICAgIHByZXZpb3VzUG9pbnQgPSBwb2ludDtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgeWllbGQgbmV3IExpbmUocHJldmlvdXNQb2ludCwgcG9pbnQpO1xyXG4gICAgICBwcmV2aW91c1BvaW50ID0gcG9pbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U3RhcnRpbmdQb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzWzBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFZlcnRpY2VzQ291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGluZVByb3BlcnRpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saW5lUHJvcGVydGllcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaXRUZXN0KHBvaW50OiBQb2ludCk6IEhpdFRlc3RSZXN1bHQgfCBudWxsIHtcclxuICAgIGZvciAoY29uc3QgbGluZSBvZiB0aGlzLmdldExpbmVJdGVyYXRvcigpKSB7XHJcbiAgICAgIGlmIChsaW5lLmRpc3RhbmNlVG9Qb2ludChwb2ludCkgPD0gY29uZmlndXJhdGlvbi5oaXRUb2xlcmFuY2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEhpdFRlc3RSZXN1bHQobGluZSwgdGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRWZXJ0ZXgoaW5kZXg6IG51bWJlcik6IFBvaW50IHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzW2luZGV4XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRWZXJ0aWNlcygpOiBQb2ludFtdIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFZlcnRleChwb2ludDogUG9pbnQpIHtcclxuICAgIHRoaXMudmVydGljZXMucHVzaChwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlVmVydGV4KHBvaW50OiBQb2ludCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRQb2ludEluZGV4KHBvaW50KTtcclxuXHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMudmVydGljZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnNlcnRWZXJ0ZXgocG9pbnQ6IFBvaW50LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnZlcnRpY2VzLnNwbGljZShpbmRleCwgMCwgcG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCk6IFBhdGgge1xyXG4gICAgY29uc3QgdmVydGljZXMgPSBbLi4udGhpcy5nZXRWZXJ0aWNlcygpLm1hcChwb2ludCA9PiBwb2ludC5jbG9uZSgpKV07XHJcbiAgICBjb25zdCBsaW5lUHJvcGVydGllcyA9IHRoaXMubGluZVByb3BlcnRpZXMuY2xvbmUoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBhdGgodmVydGljZXMsIGxpbmVQcm9wZXJ0aWVzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaW5kUG9pbnRJbmRleChwb2ludDogUG9pbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzLmluZGV4T2YocG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEJvdW5kaW5nQm94KCkge1xyXG4gICAgbGV0IG1pblggPSBJbmZpbml0eTtcclxuICAgIGxldCBtYXhYID0gMDtcclxuICAgIGxldCBtaW5ZID0gSW5maW5pdHk7XHJcbiAgICBsZXQgbWF4WSA9IDA7XHJcblxyXG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKHBvaW50ID0+IHtcclxuICAgICAgaWYgKHBvaW50LnggPCBtaW5YKSB7XHJcbiAgICAgICAgbWluWCA9IHBvaW50Lng7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvaW50LnggPiBtYXhYKSB7XHJcbiAgICAgICAgbWF4WCA9IHBvaW50Lng7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvaW50LnkgPCBtaW5ZKSB7XHJcbiAgICAgICAgbWluWSA9IHBvaW50Lnk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvaW50LnkgPiBtYXhZKSB7XHJcbiAgICAgICAgbWF4WSA9IHBvaW50Lnk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1pblgsXHJcbiAgICAgIG1heFgsXHJcbiAgICAgIG1pblksXHJcbiAgICAgIG1heFlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNQb2ludEluQm91bmRpbmdCb3gocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBjb25zdCBib3VuZGluZ0JveCA9IHRoaXMuZ2V0Qm91bmRpbmdCb3goKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwb2ludC54ID49IGJvdW5kaW5nQm94Lm1pblggJiZcclxuICAgICAgcG9pbnQueCA8PSBib3VuZGluZ0JveC5tYXhYICYmXHJcbiAgICAgIHBvaW50LnkgPj0gYm91bmRpbmdCb3gubWluWSAmJlxyXG4gICAgICBwb2ludC55IDw9IGJvdW5kaW5nQm94Lm1heFlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9TZXJpYWxpemFibGVPYmplY3QoKTogU2VyaWFsaXphYmxlUGF0aCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsaW5lUHJvcGVydGllczogdGhpcy5saW5lUHJvcGVydGllcy5jbG9uZSgpLFxyXG4gICAgICBjbG9zZWQ6IHRoaXMuY2xvc2VkLFxyXG4gICAgICB2ZXJ0aWNlczogdGhpcy52ZXJ0aWNlcy5tYXAodmVydGV4ID0+ICh7XHJcbiAgICAgICAgeDogdmVydGV4LngsXHJcbiAgICAgICAgeTogdmVydGV4LnlcclxuICAgICAgfSkpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5leHRQb2ludEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiAoaW5kZXggKyAxKSAlIHRoaXMuZ2V0VmVydGljZXNDb3VudCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5leHRQb2ludChwb2ludDogUG9pbnQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy52ZXJ0aWNlcy5pbmRleE9mKHBvaW50KTtcclxuICAgIGNvbnN0IG5leHRQb2ludEluZGV4ID0gdGhpcy5nZXROZXh0UG9pbnRJbmRleChpbmRleCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VmVydGV4KG5leHRQb2ludEluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQcmV2aW91c1BvaW50SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgbGV0IHByZXZpb3VzUG9pbnRJbmRleCA9IGluZGV4IC0gMTtcclxuICAgIGlmIChwcmV2aW91c1BvaW50SW5kZXggPCAwKSB7XHJcbiAgICAgIHByZXZpb3VzUG9pbnRJbmRleCA9IHRoaXMuZ2V0VmVydGljZXNDb3VudCgpIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNQb2ludEluZGV4O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFByZXZpb3VzUG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudmVydGljZXMuaW5kZXhPZihwb2ludCk7XHJcbiAgICBjb25zdCBwcmV2aW91c1BvaW50SW5kZXggPSB0aGlzLmdldFByZXZpb3VzUG9pbnRJbmRleChpbmRleCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VmVydGV4KHByZXZpb3VzUG9pbnRJbmRleCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW92ZVRvKHBhdGg6IFBhdGgpIHtcclxuICAgIGlmICh0aGlzLmdldFZlcnRpY2VzQ291bnQoKSAhPT0gcGF0aC5nZXRWZXJ0aWNlc0NvdW50KCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgbnVtYmVyIG9mIHZlcnRpY2VzIGRvZXMgbm90IG1hdGNoJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2xvc2VkICE9PSBwYXRoLmNsb3NlZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXRoJ3MgY2xvc2VkIHN0YXRlIGRvZXMgbm90IG1hdGNoXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBwb2ludC5tb3ZlVG8ocGF0aC5nZXRWZXJ0ZXgoaW5kZXgpKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2VudGVyT2ZHcmF2aXR5KCkge1xyXG4gICAgbGV0IGNlbnRlclggPSAwO1xyXG4gICAgbGV0IGNlbnRlclkgPSAwO1xyXG5cclxuICAgIHRoaXMuZ2V0VmVydGljZXMoKS5mb3JFYWNoKHBvaW50ID0+IHtcclxuICAgICAgY2VudGVyWCArPSBwb2ludC54O1xyXG4gICAgICBjZW50ZXJZICs9IHBvaW50Lnk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjZW50ZXJYIC89IHRoaXMuZ2V0VmVydGljZXNDb3VudCgpO1xyXG4gICAgY2VudGVyWSAvPSB0aGlzLmdldFZlcnRpY2VzQ291bnQoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvaW50KGNlbnRlclgsIGNlbnRlclkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEJvdW5kaW5nQm94Q2VudGVyKCkge1xyXG4gICAgY29uc3QgYm91bmRpbmdCb3ggPSB0aGlzLmdldEJvdW5kaW5nQm94KCk7XHJcblxyXG4gICAgY29uc3QgY2VudGVyWCA9IChib3VuZGluZ0JveC5tYXhYICsgYm91bmRpbmdCb3gubWluWCkgLyAyO1xyXG4gICAgY29uc3QgY2VudGVyWSA9IChib3VuZGluZ0JveC5tYXhZICsgYm91bmRpbmdCb3gubWluWSkgLyAyO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9pbnQoY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9QYXRoLnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpbmUge1xyXG4gIHB1YmxpYyBwMTogUG9pbnQ7XHJcbiAgcHVibGljIHAyOiBQb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3IocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICAgIGlmIChwMS5lcXVhbHMocDIpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSBsaW5lIGJldHdlZW4gcG9pbnRzIGF0IHRoZSBzYW1lIGNvb3JkaW5hdGVzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wMSA9IHAxO1xyXG4gICAgdGhpcy5wMiA9IHAyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc3RhbmNlVG9Qb2ludChwOiBQb2ludCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBwb2ludFByb2plY3Rpb24gPSB0aGlzLnByb2plY3RQb2ludChwKTtcclxuXHJcbiAgICByZXR1cm4gUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuKHAsIHBvaW50UHJvamVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJvamVjdFBvaW50KHA6IFBvaW50KSB7XHJcbiAgICBjb25zdCBwMSA9IHRoaXMucDE7XHJcbiAgICBjb25zdCBwMiA9IHRoaXMucDI7XHJcblxyXG4gICAgbGV0IHQgPVxyXG4gICAgICAoKHAueCAtIHAxLngpICogKHAyLnggLSBwMS54KSArIChwLnkgLSBwMS55KSAqIChwMi55IC0gcDEueSkpIC9cclxuICAgICAgUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuU3F1YXJlZChwMSwgcDIpO1xyXG4gICAgdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHQpKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHAxLnggKyB0ICogKHAyLnggLSBwMS54KSwgcDEueSArIHQgKiAocDIueSAtIHAxLnkpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlcXVhbHMobGluZTogTGluZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgKHRoaXMucDEuZXF1YWxzKGxpbmUucDEpICYmIHRoaXMucDIuZXF1YWxzKGxpbmUucDIpKSB8fFxyXG4gICAgICAodGhpcy5wMS5lcXVhbHMobGluZS5wMikgJiYgdGhpcy5wMi5lcXVhbHMobGluZS5wMSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE1pZGRsZVBvaW50KCk6IFBvaW50IHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoKHRoaXMucDEueCArIHRoaXMucDIueCkgLyAyLCAodGhpcy5wMS55ICsgdGhpcy5wMi55KSAvIDIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlbmd0aCgpIHtcclxuICAgIHJldHVybiBQb2ludC5nZXREaXN0YW5jZUJldHdlZW4odGhpcy5wMSwgdGhpcy5wMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGlyZWN0aW9uKHA6IFBvaW50KSB7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBQb2ludC5jcm9zc1Byb2R1Y3QoXHJcbiAgICAgIFBvaW50LnN1YnRyYWN0KHRoaXMucDIsIHRoaXMucDEpLFxyXG4gICAgICBQb2ludC5zdWJ0cmFjdChwLCB0aGlzLnAxKVxyXG4gICAgKTtcclxuICAgIGlmIChNYXRoLmFicyhkaXJlY3Rpb24pIDwgMC4wMDAxKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vTGluZS50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBJbWFnZURhdGE7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlRGF0YTogSW1hZ2VEYXRhKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ05ld0JhY2tncm91bmRUZXh0dXJlJztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdIZWlnaHRNYXBFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogSW1hZ2VEYXRhO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdIZWlnaHRNYXBFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW1hZ2VEYXRhOiBJbWFnZURhdGEpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGltYWdlRGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdIZWlnaHRNYXBFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW50ZW5zaXR5OiBudW1iZXIpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGludGVuc2l0eTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudC50cyIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdjb21tb24vVmVjdG9yMyc7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3TGlnaHRDb2xvckV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBWZWN0b3IzO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdMaWdodENvbG9yRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbG9yOiBWZWN0b3IzKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBjb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodENvbG9yRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRDb2xvckV2ZW50LnRzIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuXHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdMaWdodFBvc2l0aW9uRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IFZlY3RvcjM7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0xpZ2h0UG9zaXRpb25FdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IobGlnaHRQb3NpdGlvbjogVmVjdG9yMykge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gbGlnaHRQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodFBvc2l0aW9uRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRQb3NpdGlvbkV2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpZ2h0UG9zaXRpb25SYWRpdXM6IG51bWJlcikge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gbGlnaHRQb3NpdGlvblJhZGl1cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50LnRzIiwiaW1wb3J0IHsgTGlnaHRUeXBlIH0gZnJvbSAnY29tbW9uL0xpZ2h0VHlwZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3TGlnaHRUeXBlRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IExpZ2h0VHlwZTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3TGlnaHRUeXBlRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpZ2h0VHlwZTogTGlnaHRUeXBlKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBsaWdodFR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3TGlnaHRUeXBlRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRUeXBlRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3Tm9ybWFsTWFwRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IEltYWdlRGF0YTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3Tm9ybWFsTWFwRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlRGF0YTogSW1hZ2VEYXRhKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3Tm9ybWFsTWFwRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3Tm9ybWFsTWFwRXZlbnQudHMiLCJleHBvcnQgZW51bSBGaWxsV29ya2VyTWVzc2FnZVR5cGUge1xyXG4gIENhbnZhc0luZm8sXHJcblxyXG4gIE5ld0ZpbGxEYXRhRXZlbnQsXHJcblxyXG4gIFN0YXJ0RmlsbCxcclxuICBGaWxsU3RyaXBzLFxyXG4gIEVuZEZpbGxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9wb2x5Z29uLWZpbGxlci9GaWxsV29ya2VyTWVzc2FnZVR5cGUudHMiLCJpbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBQYXRoIHtcclxuICBjb25zdHJ1Y3RvcihwYXRoOiBQYXRoKTtcclxuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlczogUG9pbnRbXSwgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzKTtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aE9yVmVydGljZXM6IFBhdGggfCBQb2ludFtdLCBsaW5lUHJvcGVydGllcz86IExpbmVQcm9wZXJ0aWVzKSB7XHJcbiAgICBsZXQgdmVydGljZXM6IFBvaW50W107XHJcblxyXG4gICAgaWYgKHBhdGhPclZlcnRpY2VzIGluc3RhbmNlb2YgUGF0aCkge1xyXG4gICAgICBjb25zdCBwYXRoID0gcGF0aE9yVmVydGljZXM7XHJcbiAgICAgIHZlcnRpY2VzID0gcGF0aC5nZXRWZXJ0aWNlcygpO1xyXG4gICAgICBsaW5lUHJvcGVydGllcyA9IHBhdGgubGluZVByb3BlcnRpZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2ZXJ0aWNlcyA9IHBhdGhPclZlcnRpY2VzO1xyXG4gICAgICBsaW5lUHJvcGVydGllcyA9IDxMaW5lUHJvcGVydGllcz5saW5lUHJvcGVydGllcztcclxuICAgIH1cclxuXHJcbiAgICBQb2x5Z29uLmVuc3VyZVZlcnRpY2VzTGVuZ3RoKHZlcnRpY2VzKTtcclxuICAgIHN1cGVyKHZlcnRpY2VzLCBsaW5lUHJvcGVydGllcyk7XHJcbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBlbnN1cmVWZXJ0aWNlc0xlbmd0aCh2ZXJ0aWNlczogUG9pbnRbXSkge1xyXG4gICAgaWYgKHZlcnRpY2VzLmxlbmd0aCA+PSBjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihgUG9seWdvbiBtdXN0IGhhdmUgYXQgbGVhc3QgJHtjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHN9IHZlcnRpY2VzYCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKTogUG9seWdvbiB7XHJcbiAgICByZXR1cm4gbmV3IFBvbHlnb24oc3VwZXIuY2xvbmUoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlVmVydGV4KHBvaW50OiBQb2ludCkge1xyXG4gICAgaWYgKHRoaXMuZ2V0VmVydGljZXNDb3VudCgpID09PSBjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlIHZlcnRleCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnJlbW92ZVZlcnRleChwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNDb252ZXgoKSB7XHJcbiAgICBsZXQgbGFzdExpbmU6IExpbmUgfCBudWxsID0gbnVsbDtcclxuICAgIGxldCBsYXN0RGlyZWN0aW9uOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgdGhpcy5nZXRMaW5lSXRlcmF0b3IoKSkge1xyXG4gICAgICBpZiAoIWxhc3RMaW5lKSB7XHJcbiAgICAgICAgbGFzdExpbmUgPSBsaW5lO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50RGlyZWN0aW9uID0gbGFzdExpbmUuZ2V0RGlyZWN0aW9uKGxpbmUucDIpO1xyXG4gICAgICBsYXN0TGluZSA9IGxpbmU7XHJcblxyXG4gICAgICBpZiAobGFzdERpcmVjdGlvbiA9PT0gbnVsbCAmJiBjdXJyZW50RGlyZWN0aW9uICE9PSAwKSB7XHJcbiAgICAgICAgbGFzdERpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb247XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSAwKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uICE9PSBsYXN0RGlyZWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9Qb2x5Z29uLnRzIiwiaW1wb3J0ICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cuc2Nzcyc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcblxyXG5jb25zdCBjbGFzc05hbWVzID0ge1xyXG4gIERJQUxPR19CT1g6ICdkaWFsb2ctYm94JyxcclxuICBESUFMT0c6ICdpbWFnZS1zZWxlY3QtZGlhbG9nJyxcclxuICBIRUFERVI6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19oZWFkZXInLFxyXG4gIEhFQURJTkc6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19oZWFkaW5nJyxcclxuICBCTE9DSzogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2Jsb2NrJyxcclxuICBCTE9DS19USVRMRTogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2Jsb2NrLXRpdGxlJyxcclxuICBQUkVTRVRfSU1BR0VTX0NPTlRBSU5FUjogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX3ByZXNldC1pbWFnZXMtY29udGFpbmVyJyxcclxuICBTRUxFQ1RFRF9JTUFHRTogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2ltYWdlLS1zZWxlY3RlZCcsXHJcbiAgQ1VTVE9NX0lNQUdFOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fY3VzdG9tLWltYWdlJyxcclxuICBCT1RUT01fQlVUVE9OUzogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlU2VsZWN0RGlhbG9nIGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBEaWFsb2dCb3gge1xyXG4gIHByaXZhdGUgX3ByZXNldEltYWdlVXJsczogc3RyaW5nW107XHJcblxyXG4gIHByaXZhdGUgaGVhZGluZzogSFRNTEhlYWRpbmdFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIHByZXNldEltYWdlc0xpc3RDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgY3VzdG9tRmlsZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgY3VzdG9tSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgY3VzdG9tQ29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGluaXRpYWxDdXN0b21Db2xvckhleDogc3RyaW5nO1xyXG4gIHByaXZhdGUgY3VzdG9tQ29sb3JJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBjYW5jZWxCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgY29uZmlybUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgX3NlbGVjdGVkSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfd2FzQ2FuY2VsbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByZXNldEltYWdlVXJsczogc3RyaW5nW10sIGluaXRpYWxDdXN0b21Db2xvckhleDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuX3ByZXNldEltYWdlVXJscyA9IHByZXNldEltYWdlVXJscztcclxuICAgIHRoaXMuaW5pdGlhbEN1c3RvbUNvbG9ySGV4ID0gaW5pdGlhbEN1c3RvbUNvbG9ySGV4O1xyXG5cclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkRJQUxPR19CT1gpO1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuRElBTE9HKTtcclxuXHJcbiAgICB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2sgPSB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2hvd0N1c3RvbUltYWdlID0gdGhpcy5zaG93Q3VzdG9tSW1hZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DYW5jZWxCdXR0b25DbGljayA9IHRoaXMub25DYW5jZWxCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayA9IHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DdXN0b21Db2xvcklucHV0Q2hhbmdlID0gdGhpcy5vbkN1c3RvbUNvbG9ySW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUhlYWRlcigpO1xyXG4gICAgdGhpcy5jcmVhdGVQcmVzZXRJbWFnZXNMaXN0KCk7XHJcbiAgICB0aGlzLmNyZWF0ZUN1c3RvbUltYWdlUGlja2VyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUN1c3RvbUNvbG9yUGlja2VyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUJvdHRvbUJ1dHRvbnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgIHJldHVybiBbJ25hbWUnXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJykgfHwgJ0ltYWdlIHNlbGVjdCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB2YWx1ZSk7XHJcbiAgICB0aGlzLmhlYWRpbmcuaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdhc0NhbmNlbGxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl93YXNDYW5jZWxsZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHByZXNldEltYWdlVXJscygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmVzZXRJbWFnZVVybHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW1hZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbWFnZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuX3dhc0NhbmNlbGxlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2spO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayk7XHJcbiAgICB0aGlzLmN1c3RvbUZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnNob3dDdXN0b21JbWFnZSk7XHJcbiAgICB0aGlzLmN1c3RvbUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uQ3VzdG9tQ29sb3JJbnB1dENoYW5nZSk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spO1xyXG5cclxuICAgIHRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lclxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICAgICAgLmZvckVhY2goaW1hZ2UgPT4gaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lclxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICAgICAgLmZvckVhY2goaW1hZ2UgPT4gaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spKTtcclxuICAgIHRoaXMuY3VzdG9tRmlsZUlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuc2hvd0N1c3RvbUltYWdlKTtcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvcklucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25DdXN0b21Db2xvcklucHV0Q2hhbmdlKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljayk7XHJcblxyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2spO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuQ2xvc2UoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmNyZWF0ZUJsb2NrKCk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkhFQURFUik7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgdGhpcy5oZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRoaXMuaGVhZGluZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuSEVBRElORyk7XHJcbiAgICB0aGlzLmhlYWRpbmcuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLmhlYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQcmVzZXRJbWFnZXNMaXN0KCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVCbG9jaygpO1xyXG4gICAgY29uc3QgYmxvY2tUaXRsZSA9IHRoaXMuY3JlYXRlQmxvY2tUaXRsZSgnQ2hvb3NlIHByZXNldCBpbWFnZScpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJsb2NrVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW1hZ2VzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5QUkVTRVRfSU1BR0VTX0NPTlRBSU5FUik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VzQ29udGFpbmVyKTtcclxuICAgIHRoaXMucHJlc2V0SW1hZ2VVcmxzXHJcbiAgICAgIC5tYXAodXJsID0+IHRoaXMuY3JlYXRlU2VsZWN0YWJsZUltYWdlKHVybCkpXHJcbiAgICAgIC5mb3JFYWNoKGltYWdlID0+IGltYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSkpO1xyXG5cclxuICAgIHRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5wcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdEltYWdlKDxIVE1MSW1hZ2VFbGVtZW50PnRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbWcnKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUN1c3RvbUltYWdlUGlja2VyKCkge1xyXG4gICAgY29uc3QgY3VzdG9tSW1hZ2VDb250YWluZXIgPSB0aGlzLmNyZWF0ZUJsb2NrKCk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGN1c3RvbUltYWdlQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBibG9ja1RpdGxlID0gdGhpcy5jcmVhdGVCbG9ja1RpdGxlKCdTZWxlY3QgY3VzdG9tIGltYWdlJyk7XHJcbiAgICBjdXN0b21JbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChibG9ja1RpdGxlKTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUZpbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aGlzLmN1c3RvbUZpbGVJbnB1dC50eXBlID0gJ2ZpbGUnO1xyXG4gICAgdGhpcy5jdXN0b21GaWxlSW5wdXQuYWNjZXB0ID0gJ2ltYWdlLyonO1xyXG4gICAgY3VzdG9tSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jdXN0b21GaWxlSW5wdXQpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkNVU1RPTV9JTUFHRSk7XHJcbiAgICBjdXN0b21JbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmN1c3RvbUltYWdlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0N1c3RvbUltYWdlKCkge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tRmlsZUlucHV0LmZpbGVzICYmIHRoaXMuY3VzdG9tRmlsZUlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICByZWFkZXIub25sb2FkID0gZSA9PiB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gICAgICAgIHRoaXMuY3VzdG9tSW1hZ2Uuc3JjID0gKDxhbnk+ZS50YXJnZXQpLnJlc3VsdDtcclxuICAgICAgICB0aGlzLnNlbGVjdEltYWdlKHRoaXMuY3VzdG9tSW1hZ2UpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5jdXN0b21GaWxlSW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDdXN0b21Db2xvclBpY2tlcigpIHtcclxuICAgIGNvbnN0IGN1c3RvbUNvbG9yQ29udGFpbmVyID0gdGhpcy5jcmVhdGVCbG9jaygpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChjdXN0b21Db2xvckNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmNyZWF0ZUJsb2NrVGl0bGUoJ0N1c3RvbSBzb2xpZCBjb2xvcicpO1xyXG4gICAgY3VzdG9tQ29sb3JDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW5wdXQudHlwZSA9ICdjb2xvcic7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW5wdXQudmFsdWUgPSB0aGlzLmluaXRpYWxDdXN0b21Db2xvckhleDtcclxuICAgIGN1c3RvbUNvbG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tQ29sb3JJbnB1dCk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21Db2xvckltYWdlID0gbmV3IEltYWdlKDIwLCAyMCk7XHJcbiAgICBjdXN0b21Db2xvckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmN1c3RvbUNvbG9ySW1hZ2UpO1xyXG5cclxuICAgIHRoaXMuc2V0Q3VzdG9tQ29sb3JJbWFnZUNvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ3VzdG9tQ29sb3JJbnB1dENoYW5nZSgpIHtcclxuICAgIHRoaXMuc2V0Q3VzdG9tQ29sb3JJbWFnZUNvbG9yKCk7XHJcbiAgICB0aGlzLnNlbGVjdEltYWdlKHRoaXMuY3VzdG9tQ29sb3JJbWFnZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEN1c3RvbUNvbG9ySW1hZ2VDb2xvcigpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gdGhpcy5jdXN0b21Db2xvckltYWdlLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY3VzdG9tQ29sb3JJbWFnZS5oZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpZiAoIWN0eCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgY2FudmFzIGRyYXdpbmcgY29udGV4dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmN1c3RvbUNvbG9ySW5wdXQudmFsdWU7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCb3R0b21CdXR0b25zKCkge1xyXG4gICAgY29uc3QgYm90dG9tQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm90dG9tQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuQk9UVE9NX0JVVFRPTlMpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChib3R0b21CdXR0b25zQ29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XHJcblxyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24uaW5uZXJUZXh0ID0gJ0NvbmZpcm0nO1xyXG5cclxuICAgIGJvdHRvbUJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW5jZWxCdXR0b24pO1xyXG4gICAgYm90dG9tQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbmZpcm1CdXR0b24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNhbmNlbEJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNvbmZpcm1CdXR0b25DbGljaygpIHtcclxuICAgIHRoaXMuX3dhc0NhbmNlbGxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCbG9jaygpIHtcclxuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuQkxPQ0spO1xyXG5cclxuICAgIHJldHVybiBibG9jaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQmxvY2tUaXRsZSh0aXRsZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBibG9ja1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGJsb2NrVGl0bGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJMT0NLX1RJVExFKTtcclxuICAgIGJsb2NrVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XHJcblxyXG4gICAgcmV0dXJuIGJsb2NrVGl0bGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVNlbGVjdGFibGVJbWFnZShpbWFnZVNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1hZ2VTb3VyY2U7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNlbGVjdGFibGVJbWFnZUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdEltYWdlKDxIVE1MSW1hZ2VFbGVtZW50PmV2ZW50LnRhcmdldCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdEltYWdlKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICBpZiAoaW1hZ2UgPT09IHRoaXMuX3NlbGVjdGVkSW1hZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZEltYWdlKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWVzLlNFTEVDVEVEX0lNQUdFKTtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuU0VMRUNURURfSU1BR0UpO1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRJbWFnZSA9IGltYWdlO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaW1hZ2Utc2VsZWN0LWRpYWxvZycsIEltYWdlU2VsZWN0RGlhbG9nKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnRzIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcblxyXG5pbXBvcnQgeyBJbWFnZURvd25sb2FkZXIgfSBmcm9tICdzZXJ2aWNlcy9JbWFnZURvd25sb2FkZXInO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VTZWxlY3REaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQm94QnV0dG9uLCBEaWFsb2dCb3hCdXR0b25EZXBlbmRlbmNpZXMgfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveEJ1dHRvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uRGVwZW5kZW5jaWVzIGV4dGVuZHMgRGlhbG9nQm94QnV0dG9uRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uIGV4dGVuZHMgRGlhbG9nQm94QnV0dG9uIHtcclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG5cclxuICBwcm90ZWN0ZWQgZGlhbG9nQm94OiBJbWFnZVNlbGVjdERpYWxvZztcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbkRlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoeyBkaWFsb2dPdmVybGF5OiBkZXBlbmRlbmNpZXMuZGlhbG9nT3ZlcmxheSB9KTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmltYWdlRG93bmxvYWRlciA9IGRlcGVuZGVuY2llcy5pbWFnZURvd25sb2FkZXI7XHJcblxyXG4gICAgdGhpcy5idXR0b24uaW5uZXJUZXh0ID0gJ1NlbGVjdCBpbWFnZSc7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0U2VsZWN0ZWRJbWFnZURhdGEoKTogUHJvbWlzZTxJbWFnZURhdGE+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSW1hZ2UgPSB0aGlzLmRpYWxvZ0JveC5zZWxlY3RlZEltYWdlO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmltYWdlRG93bmxvYWRlci5pbWFnZVRvSW1hZ2VEYXRhKHNlbGVjdGVkSW1hZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaW1hZ2Utc2VsZWN0LWRpYWxvZy1idXR0b24nLCBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZ0J1dHRvbi50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuaW1wb3J0IHsgUGF0aFBvaW50RWxlbWVudCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludENsaWNrRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IFBhdGhQb2ludEVsZW1lbnQ7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aFBvaW50RWxlbWVudDogUGF0aFBvaW50RWxlbWVudCkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gcGF0aFBvaW50RWxlbWVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnUG9pbnRDbGlja0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL1BvaW50Q2xpY2tFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nRmluaXNoZWRFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZCA9IG51bGw7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IExvYWRpbmdGaW5pc2hlZEV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTG9hZGluZ0ZpbmlzaGVkRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL3VpL0xvYWRpbmdGaW5pc2hlZEV2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdTdGFydGVkRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQgPSBudWxsO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBMb2FkaW5nU3RhcnRlZEV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTG9hZGluZ1N0YXJ0ZWRFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvdWkvTG9hZGluZ1N0YXJ0ZWRFdmVudC50cyIsImltcG9ydCB7IERpYWxvZ092ZXJsYXkgfSBmcm9tICd1aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXknO1xyXG5pbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0JveEJ1dHRvbkRlcGVuZGVuY2llcyB7XHJcbiAgZGlhbG9nT3ZlcmxheTogRGlhbG9nT3ZlcmxheTtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERpYWxvZ0JveEJ1dHRvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZGlhbG9nT3ZlcmxheTogRGlhbG9nT3ZlcmxheTtcclxuXHJcbiAgcHJvdGVjdGVkIGRpYWxvZ0JveDogRGlhbG9nQm94O1xyXG4gIHByb3RlY3RlZCBidXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IERpYWxvZ0JveEJ1dHRvbkRlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkgPSBkZXBlbmRlbmNpZXMuZGlhbG9nT3ZlcmxheTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5idXR0b24uaW5uZXJUZXh0ID0gJ09wZW4gZGlhbG9nIGJveCc7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcclxuXHJcbiAgICB0aGlzLm9wZW5EaWFsb2dCb3ggPSB0aGlzLm9wZW5EaWFsb2dCb3guYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25EaWFsb2dCb3hDbG9zZWQgPSB0aGlzLm9uRGlhbG9nQm94Q2xvc2VkLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldHVwRGlhbG9nQm94KCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpYWxvZ0JveCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpYWxvZyBib3ggaXMgdW5kZWZpbmVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkRpYWxvZ0JveCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkRpYWxvZ0JveCk7XHJcblxyXG4gICAgdGhpcy5kaWFsb2dCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uRGlhbG9nQm94Q2xvc2VkKTtcclxuICAgIHRoaXMuZGlhbG9nQm94LmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2V0dXBEaWFsb2dCb3goKTogdm9pZDtcclxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25EaWFsb2dCb3hDbG9zZWQoZXZlbnQ6IEV2ZW50KTogdm9pZDtcclxuXHJcbiAgcHJvdGVjdGVkIG9wZW5EaWFsb2dCb3goKSB7XHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkuc2hvd0RpYWxvZyh0aGlzLmRpYWxvZ0JveCk7XHJcbiAgICB0aGlzLmRpYWxvZ0JveC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25EaWFsb2dCb3hDbG9zZWQpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZGlhbG9nLWJveC1idXR0b24nLCBEaWFsb2dCb3hCdXR0b24pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL0RpYWxvZ0JveEJ1dHRvbi50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJGaW5pc2hlZEV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkID0gbnVsbDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gUmVuZGVyRmluaXNoZWRFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIFJlbmRlckZpbmlzaGVkRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL1JlbmRlckZpbmlzaGVkRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludEVsZW1lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmluaXNoUG9pbnREcmFnRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IFBhdGhQb2ludEVsZW1lbnQ7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IEZpbmlzaFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoUG9pbnRFbGVtZW50OiBQYXRoUG9pbnRFbGVtZW50KSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBwYXRoUG9pbnRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdGaW5pc2hQb2ludERyYWdFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL0ZpbmlzaFBvaW50RHJhZ0V2ZW50LnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludEVsZW1lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnREcmFnRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IHtcclxuICAgIGVsZW1lbnQ6IFBhdGhQb2ludEVsZW1lbnQsXHJcbiAgICBuZXdQb3NpdGlvbjogUG9pbnRcclxuICB9O1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBQb2ludERyYWdFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aFBvaW50RWxlbWVudDogUGF0aFBvaW50RWxlbWVudCwgbmV3UG9zaXRpb246IFBvaW50KSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSB7XHJcbiAgICAgIGVsZW1lbnQ6IHBhdGhQb2ludEVsZW1lbnQsXHJcbiAgICAgIG5ld1Bvc2l0aW9uXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdQb2ludERyYWdFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL1BvaW50RHJhZ0V2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5pbXBvcnQgeyBQYXRoUG9pbnRFbGVtZW50IH0gZnJvbSAndWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ0UG9pbnREcmFnRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IFBhdGhQb2ludEVsZW1lbnQ7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IFN0YXJ0UG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhdGhQb2ludEVsZW1lbnQ6IFBhdGhQb2ludEVsZW1lbnQpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IHBhdGhQb2ludEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ1N0YXJ0UG9pbnREcmFnRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuaW50ZXJmYWNlIExpbmVDbGlja0V2ZW50UGF5bG9hZCB7XHJcbiAgbGluZTogTGluZTtcclxuICBwYXRoOiBQYXRoO1xyXG4gIHBvc2l0aW9uOiBQb2ludDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpbmVDbGlja0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBMaW5lQ2xpY2tFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IExpbmVDbGlja0V2ZW50UGF5bG9hZDtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsaW5lOiBMaW5lLCBwYXRoOiBQYXRoLCBwb3NpdGlvbjogUG9pbnQpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IHtcclxuICAgICAgbGluZSxcclxuICAgICAgcGF0aCxcclxuICAgICAgcG9zaXRpb25cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ0xpbmVDbGlja0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL0xpbmVDbGlja0V2ZW50LnRzIiwiaW1wb3J0IHsgRGlhbG9nQm94IH0gZnJvbSAndWkvY29tcG9uZW50cy9EaWFsb2dCb3gnO1xyXG5cclxuaW1wb3J0ICd1aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNEaWFsb2cuc2Nzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdHJ1Y3Rpb25zRGlhbG9nIGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBEaWFsb2dCb3gge1xyXG4gIHByaXZhdGUgZGlzbWlzc0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbnMtZGlhbG9nIGRpYWxvZy1ib3gnO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnSW5zdHJ1Y3Rpb25zJztcclxuICAgIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSAnaW5zdHJ1Y3Rpb25zLWRpYWxvZ19fdGl0bGUnO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlVXNhZ2VMaXN0KCk7XHJcblxyXG4gICAgdGhpcy5kaXNtaXNzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmRpc21pc3NCdXR0b24udGV4dENvbnRlbnQgPSAnRGlzbWlzcyc7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuZGlzbWlzc0J1dHRvbik7XHJcblxyXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuZGlzbWlzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5kaXNtaXNzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbG9zZScpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5DbG9zZSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVVc2FnZUxpc3QoKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgICBjb25zdCB1c2FnZSA9IFtcclxuICAgICAgJ0NsaWNrIG9uIHRoZSBmcmVlIHNwYWNlIGluIHRoZSBjYW52YXMgdG8gc3RhcnQgY3JlYXRpbmcgdmVydGljZXMnLFxyXG4gICAgICAnQ2xpY2sgb24gdGhlIGluaXRpYWwgdmVydGV4IHRvIGNsb3NlIHRoZSBwYXRoIGludG8gYSBwb2x5Z29uJyxcclxuICAgICAgJ0FsdGVybmF0aXZlbHksIHlvdSBtYXkgcHJlc3MgRXNjYXBlIHRvIGNhbmNlbCBhZGRpbmcgYSBuZXcgcGF0aCcsXHJcbiAgICAgICdDbGljayBhbmQgZHJhZyB0aGUgdmVydGV4IHRvIG1vdmUgaXQnLFxyXG4gICAgICAnRG91YmxlIGNsaWNrIG9uIGFuIGVkZ2UgdG8gYWRkIGEgdmVydGV4IGluIHRoZSBtaWRkbGUgb2YgaXQnLFxyXG4gICAgICAnRG91YmxlIGNsaWNrIG9uIGEgdmVydGV4IHRvIHJlbW92ZSBpdCcsXHJcbiAgICAgICdQcmVzc2luZyBDdHJsIGFsbG93cyBkcmFnZ2luZyBhIHdob2xlIHBvbHlnb24nLFxyXG4gICAgICBcIlNoaWZ0ICsgY2xpY2sgdG8gY2xpcCB0aGUgcG9seWdvbnMgdXNpbmcgU3V0aGVybGFuZC1Ib2RnbWFuJ3MgYWxnb3JpdGhtXCIsXHJcbiAgICAgICdTYXZlIGFsbG93cyB5b3UgdG8gZXhwb3J0IGFsbCB0aGUgcG9seWdvbnMgb24gdGhlIHNjcmVlbicsXHJcbiAgICAgICdMb2FkIGFsbG93cyB5b3UgdG8gcmVzdG9yZSB0aGUgcG9seWdvbnMnXHJcbiAgICBdO1xyXG5cclxuICAgIHVzYWdlXHJcbiAgICAgIC5tYXAodXNhZ2VJdGVtVGV4dCA9PiB0aGlzLmNyZWF0ZVVzYWdlTGlzdEl0ZW0odXNhZ2VJdGVtVGV4dCkpXHJcbiAgICAgIC5mb3JFYWNoKHVzYWdlTGlzdEl0ZW0gPT4gbGlzdC5hcHBlbmRDaGlsZCh1c2FnZUxpc3RJdGVtKSk7XHJcblxyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChsaXN0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVXNhZ2VMaXN0SXRlbSh0ZXh0Q29udGVudDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGl0ZW0udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuXHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1pbnN0cnVjdGlvbnMtZGlhbG9nJywgSW5zdHJ1Y3Rpb25zRGlhbG9nKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnRzIiwiaW1wb3J0ICdpbmRleC5zY3NzJztcclxuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcclxuXHJcbmltcG9ydCAnQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL3dlYmNvbXBvbmVudHMtaGktc2QtY2UnO1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdBcHBsaWNhdGlvbic7XHJcblxyXG53aW5kb3cub25sb2FkID0gYm9vdHN0cmFwO1xyXG5cclxuZnVuY3Rpb24gYm9vdHN0cmFwKCk6IHZvaWQge1xyXG4gIGNvbnN0IGNhbnZhc0lkID0gJ21haW4tY2FudmFzJztcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XHJcbiAgaWYgKCFjYW52YXMpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgQ2FudmFzIHdpdGggaWQgJHtjYW52YXNJZH0gY2Fubm90IGJlIGZvdW5kYCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhcHBsaWNhdGlvbiA9IG5ldyBBcHBsaWNhdGlvbig8SFRNTENhbnZhc0VsZW1lbnQ+Y2FudmFzKTtcclxuICBhcHBsaWNhdGlvbi5pbml0KCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvaW5kZXgudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSxodG1se2JveC1zaXppbmc6Ym9yZGVyLWJveH0qLDphZnRlciw6YmVmb3Jle2JveC1zaXppbmc6aW5oZXJpdH1ib2R5e2xpbmUtaGVpZ2h0OjEuNX0ubWFpbi1jYW52YXN7Ym9yZGVyOjFweCBzb2xpZCAjMDAwfS5tYWluLWNvbnRhaW5lcnt3aWR0aDoxMDAlO3BhZGRpbmc6MCAxZW19LmNhbnZhcy13cmFwcGVye3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmV9LmFwcGxpY2F0aW9uLXVpe3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BvaW50ZXItZXZlbnRzOm5vbmV9LmFwcGxpY2F0aW9uLXVpICp7cG9pbnRlci1ldmVudHM6YWxsfS5hcHAtaGVhZGVye21hcmdpbi1ib3R0b206MWVtO21hcmdpbi1sZWZ0OjFlbX0uYXBwLW5hbWV7bWFyZ2luOjB9LmZvb3RlcnttYXJnaW46MWVtfVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9pbmRleC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbigpey8qXG5cbiBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4ndXNlIHN0cmljdCc7dmFyIG4scD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT10aGlzP3RoaXM6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDp0aGlzLGFhPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihhLGIsYyl7YSE9QXJyYXkucHJvdG90eXBlJiZhIT1PYmplY3QucHJvdG90eXBlJiYoYVtiXT1jLnZhbHVlKX07ZnVuY3Rpb24gYmEoKXtiYT1mdW5jdGlvbigpe307cC5TeW1ib2x8fChwLlN5bWJvbD1kYSl9dmFyIGRhPWZ1bmN0aW9uKCl7dmFyIGE9MDtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuXCJqc2NvbXBfc3ltYm9sX1wiKyhifHxcIlwiKSthKyt9fSgpO1xuZnVuY3Rpb24gZWEoKXtiYSgpO3ZhciBhPXAuU3ltYm9sLml0ZXJhdG9yO2F8fChhPXAuU3ltYm9sLml0ZXJhdG9yPXAuU3ltYm9sKFwiaXRlcmF0b3JcIikpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIEFycmF5LnByb3RvdHlwZVthXSYmYWEoQXJyYXkucHJvdG90eXBlLGEse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBmYSh0aGlzKX19KTtlYT1mdW5jdGlvbigpe319ZnVuY3Rpb24gZmEoYSl7dmFyIGI9MDtyZXR1cm4gaGEoZnVuY3Rpb24oKXtyZXR1cm4gYjxhLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTphW2IrK119Ontkb25lOiEwfX0pfWZ1bmN0aW9uIGhhKGEpe2VhKCk7YT17bmV4dDphfTthW3AuU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtyZXR1cm4gYX1mdW5jdGlvbiBpYShhKXtlYSgpO3ZhciBiPWFbU3ltYm9sLml0ZXJhdG9yXTtyZXR1cm4gYj9iLmNhbGwoYSk6ZmEoYSl9XG5mdW5jdGlvbiBqYShhKXtmb3IodmFyIGIsYz1bXTshKGI9YS5uZXh0KCkpLmRvbmU7KWMucHVzaChiLnZhbHVlKTtyZXR1cm4gY31cbihmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudClyZXR1cm4gbmV3IEN1c3RvbUV2ZW50KGEsYik7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtjLmluaXRDdXN0b21FdmVudChhLCEhYi5idWJibGVzLCEhYi5jYW5jZWxhYmxlLGIuZGV0YWlsKTtyZXR1cm4gY31mdW5jdGlvbiBjKGEpe2lmKG0pcmV0dXJuIGEub3duZXJEb2N1bWVudCE9PWRvY3VtZW50P2Eub3duZXJEb2N1bWVudDpudWxsO3ZhciBiPWEuX19pbXBvcnREb2M7aWYoIWImJmEucGFyZW50Tm9kZSl7Yj1hLnBhcmVudE5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY2xvc2VzdCliPWIuY2xvc2VzdChcImxpbmtbcmVsPWltcG9ydF1cIik7ZWxzZSBmb3IoOyFnKGIpJiYoYj1iLnBhcmVudE5vZGUpOyk7YS5fX2ltcG9ydERvYz1ifXJldHVybiBifWZ1bmN0aW9uIGQoYSl7dmFyIGI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtbcmVsPWltcG9ydF06bm90KFtpbXBvcnQtZGVwZW5kZW5jeV0pXCIpLFxuYz1iLmxlbmd0aDtjP2woYixmdW5jdGlvbihiKXtyZXR1cm4gaChiLGZ1bmN0aW9uKCl7MD09PS0tYyYmYSgpfSl9KTphKCl9ZnVuY3Rpb24gZShhKXtmdW5jdGlvbiBiKCl7XCJsb2FkaW5nXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlJiZkb2N1bWVudC5ib2R5JiYoZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixiKSxhKCkpfWRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsYik7YigpfWZ1bmN0aW9uIGYoYSl7ZShmdW5jdGlvbigpe3JldHVybiBkKGZ1bmN0aW9uKCl7cmV0dXJuIGEmJmEoKX0pfSl9ZnVuY3Rpb24gaChhLGIpe2lmKGEuX19sb2FkZWQpYiYmYigpO2Vsc2UgaWYoXCJzY3JpcHRcIj09PWEubG9jYWxOYW1lJiYhYS5zcmN8fFwic3R5bGVcIj09PWEubG9jYWxOYW1lJiYhYS5maXJzdENoaWxkKWEuX19sb2FkZWQ9ITAsYiYmYigpO2Vsc2V7dmFyIGM9ZnVuY3Rpb24oZCl7YS5yZW1vdmVFdmVudExpc3RlbmVyKGQudHlwZSxcbmMpO2EuX19sb2FkZWQ9ITA7YiYmYigpfTthLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsYyk7S2EmJlwic3R5bGVcIj09PWEubG9jYWxOYW1lfHxhLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGMpfX1mdW5jdGlvbiBnKGEpe3JldHVybiBhLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJlwibGlua1wiPT09YS5sb2NhbE5hbWUmJlwiaW1wb3J0XCI9PT1hLnJlbH1mdW5jdGlvbiBrKCl7dmFyIGE9dGhpczt0aGlzLmE9e307dGhpcy5iPTA7dGhpcy5mPW5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGIpe3JldHVybiBhLklhKGIpfSk7dGhpcy5mLm9ic2VydmUoZG9jdW1lbnQuaGVhZCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KTt0aGlzLmMoZG9jdW1lbnQpfWZ1bmN0aW9uIGwoYSxiLGMpe3ZhciBkPWE/YS5sZW5ndGg6MCxlPWM/LTE6MTtmb3IoYz1jP2QtMTowO2M8ZCYmMDw9YztjKz1lKWIoYVtjXSxjKX12YXIgbT1cImltcG9ydFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIiksXG5xPW51bGw7ITE9PT1cImN1cnJlbnRTY3JpcHRcImluIGRvY3VtZW50JiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZG9jdW1lbnQsXCJjdXJyZW50U2NyaXB0XCIse2dldDpmdW5jdGlvbigpe3JldHVybiBxfHwoXCJjb21wbGV0ZVwiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9kb2N1bWVudC5zY3JpcHRzW2RvY3VtZW50LnNjcmlwdHMubGVuZ3RoLTFdOm51bGwpfSxjb25maWd1cmFibGU6ITB9KTt2YXIgRT0vKHVybFxcKCkoW14pXSopKFxcKSkvZyxKPS8oQGltcG9ydFtcXHNdKyg/IXVybFxcKCkpKFteO10qKSg7KS9nLEtkPS8oPGxpbmtbXj5dKikocmVsPVsnfFwiXT9zdHlsZXNoZWV0Wyd8XCJdP1tePl0qPikvZyx6PXtDYTpmdW5jdGlvbihhLGIpe2EuaHJlZiYmYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsei5SKGEuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxiKSk7YS5zcmMmJmEuc2V0QXR0cmlidXRlKFwic3JjXCIsei5SKGEuZ2V0QXR0cmlidXRlKFwic3JjXCIpLGIpKTtpZihcInN0eWxlXCI9PT1hLmxvY2FsTmFtZSl7dmFyIGM9XG56Lm1hKGEudGV4dENvbnRlbnQsYixFKTthLnRleHRDb250ZW50PXoubWEoYyxiLEopfX0sbWE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBhLnJlcGxhY2UoYyxmdW5jdGlvbihhLGMsZCxlKXthPWQucmVwbGFjZSgvW1wiJ10vZyxcIlwiKTtiJiYoYT16LlIoYSxiKSk7cmV0dXJuIGMrXCInXCIrYStcIidcIitlfSl9LFI6ZnVuY3Rpb24oYSxiKXtpZih2b2lkIDA9PT16LlYpe3ouVj0hMTt0cnl7dmFyIGM9bmV3IFVSTChcImJcIixcImh0dHA6Ly9hXCIpO2MucGF0aG5hbWU9XCJjJTIwZFwiO3ouVj1cImh0dHA6Ly9hL2MlMjBkXCI9PT1jLmhyZWZ9Y2F0Y2goemYpe319aWYoei5WKXJldHVybihuZXcgVVJMKGEsYikpLmhyZWY7Yz16LnZhO2N8fChjPWRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcInRlbXBcIiksei52YT1jLGMuZWE9Yy5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSxjLmhlYWQuYXBwZW5kQ2hpbGQoYy5lYSksYy5kYT1jLmNyZWF0ZUVsZW1lbnQoXCJhXCIpKTtjLmVhLmhyZWY9XG5iO2MuZGEuaHJlZj1hO3JldHVybiBjLmRhLmhyZWZ8fGF9fSxMYj17YXN5bmM6ITAsbG9hZDpmdW5jdGlvbihhLGIsYyl7aWYoYSlpZihhLm1hdGNoKC9eZGF0YTovKSl7YT1hLnNwbGl0KFwiLFwiKTt2YXIgZD1hWzFdO2Q9LTE8YVswXS5pbmRleE9mKFwiO2Jhc2U2NFwiKT9hdG9iKGQpOmRlY29kZVVSSUNvbXBvbmVudChkKTtiKGQpfWVsc2V7dmFyIGU9bmV3IFhNTEh0dHBSZXF1ZXN0O2Uub3BlbihcIkdFVFwiLGEsTGIuYXN5bmMpO2Uub25sb2FkPWZ1bmN0aW9uKCl7dmFyIGE9ZS5yZXNwb25zZVVSTHx8ZS5nZXRSZXNwb25zZUhlYWRlcihcIkxvY2F0aW9uXCIpO2EmJjA9PT1hLmluZGV4T2YoXCIvXCIpJiYoYT0obG9jYXRpb24ub3JpZ2lufHxsb2NhdGlvbi5wcm90b2NvbCtcIi8vXCIrbG9jYXRpb24uaG9zdCkrYSk7dmFyIGQ9ZS5yZXNwb25zZXx8ZS5yZXNwb25zZVRleHQ7MzA0PT09ZS5zdGF0dXN8fDA9PT1lLnN0YXR1c3x8MjAwPD1lLnN0YXR1cyYmMzAwPmUuc3RhdHVzP2IoZCxhKTpjKGQpfTtcbmUuc2VuZCgpfWVsc2UgYyhcImVycm9yOiBocmVmIG11c3QgYmUgc3BlY2lmaWVkXCIpfX0sS2E9L1RyaWRlbnQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCl8fC9FZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7ay5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2E9YS5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XVwiKTtsKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIuRihhKX0pfTtrLnByb3RvdHlwZS5GPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1hLmhyZWY7aWYodm9pZCAwIT09dGhpcy5hW2NdKXt2YXIgZD10aGlzLmFbY107ZCYmZC5fX2xvYWRlZCYmKGEuaW1wb3J0PWQsdGhpcy5sKGEpKX1lbHNlIHRoaXMuYisrLHRoaXMuYVtjXT1cInBlbmRpbmdcIixMYi5sb2FkKGMsZnVuY3Rpb24oYSxkKXthPWIuSmEoYSxkfHxjKTtiLmFbY109YTtiLmItLTtiLmMoYSk7Yi5rYSgpfSxmdW5jdGlvbigpe2IuYVtjXT1udWxsO2IuYi0tO2Iua2EoKX0pfTtcbmsucHJvdG90eXBlLkphPWZ1bmN0aW9uKGEsYil7aWYoIWEpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtLYSYmKGE9YS5yZXBsYWNlKEtkLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4tMT09PWEuaW5kZXhPZihcInR5cGU9XCIpP2IrXCIgdHlwZT1pbXBvcnQtZGlzYWJsZSBcIitjOmF9KSk7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO2MuaW5uZXJIVE1MPWE7aWYoYy5jb250ZW50KWE9Yy5jb250ZW50O2Vsc2UgZm9yKGE9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2MuZmlyc3RDaGlsZDspYS5hcHBlbmRDaGlsZChjLmZpcnN0Q2hpbGQpO2lmKGM9YS5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKSliPXouUihjLmdldEF0dHJpYnV0ZShcImhyZWZcIiksYiksYy5yZW1vdmVBdHRyaWJ1dGUoXCJocmVmXCIpO2M9YS5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1pbXBvcnRdLCBsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmXVt0eXBlPWltcG9ydC1kaXNhYmxlXSxcXG4gICAgc3R5bGU6bm90KFt0eXBlXSksIGxpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWZdOm5vdChbdHlwZV0pLFxcbiAgICBzY3JpcHQ6bm90KFt0eXBlXSksIHNjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiXSxcXG4gICAgc2NyaXB0W3R5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIl0nKTtcbnZhciBkPTA7bChjLGZ1bmN0aW9uKGEpe2goYSk7ei5DYShhLGIpO2Euc2V0QXR0cmlidXRlKFwiaW1wb3J0LWRlcGVuZGVuY3lcIixcIlwiKTtcInNjcmlwdFwiPT09YS5sb2NhbE5hbWUmJiFhLnNyYyYmYS50ZXh0Q29udGVudCYmKGEuc2V0QXR0cmlidXRlKFwic3JjXCIsXCJkYXRhOnRleHQvamF2YXNjcmlwdDtjaGFyc2V0PXV0Zi04LFwiK2VuY29kZVVSSUNvbXBvbmVudChhLnRleHRDb250ZW50KyhcIlxcbi8vIyBzb3VyY2VVUkw9XCIrYisoZD9cIi1cIitkOlwiXCIpK1wiLmpzXFxuXCIpKSksYS50ZXh0Q29udGVudD1cIlwiLGQrKyl9KTtyZXR1cm4gYX07ay5wcm90b3R5cGUua2E9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2lmKCF0aGlzLmIpe3RoaXMuZi5kaXNjb25uZWN0KCk7dGhpcy5mbGF0dGVuKGRvY3VtZW50KTt2YXIgYj0hMSxjPSExLGQ9ZnVuY3Rpb24oKXtjJiZiJiYoYS5jKGRvY3VtZW50KSxhLmJ8fChhLmYub2JzZXJ2ZShkb2N1bWVudC5oZWFkLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pLGEuSGEoKSkpfTtcbnRoaXMuT2EoZnVuY3Rpb24oKXtjPSEwO2QoKX0pO3RoaXMuS2EoZnVuY3Rpb24oKXtiPSEwO2QoKX0pfX07ay5wcm90b3R5cGUuZmxhdHRlbj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2E9YS5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XVwiKTtsKGEsZnVuY3Rpb24oYSl7dmFyIGM9Yi5hW2EuaHJlZl07KGEuaW1wb3J0PWMpJiZjLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFJiYoYi5hW2EuaHJlZl09YSxhLnJlYWR5U3RhdGU9XCJsb2FkaW5nXCIsYS5pbXBvcnQ9YSxiLmZsYXR0ZW4oYyksYS5hcHBlbmRDaGlsZChjKSl9KX07ay5wcm90b3R5cGUuS2E9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihlKXtpZihlPGQpe3ZhciBmPWNbZV0sZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2YucmVtb3ZlQXR0cmlidXRlKFwiaW1wb3J0LWRlcGVuZGVuY3lcIik7bChmLmF0dHJpYnV0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIGcuc2V0QXR0cmlidXRlKGEubmFtZSxcbmEudmFsdWUpfSk7cT1nO2YucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZyxmKTtoKGcsZnVuY3Rpb24oKXtxPW51bGw7YihlKzEpfSl9ZWxzZSBhKCl9dmFyIGM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdFtpbXBvcnQtZGVwZW5kZW5jeV1cIiksZD1jLmxlbmd0aDtiKDApfTtrLnByb3RvdHlwZS5PYT1mdW5jdGlvbihhKXt2YXIgYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbaW1wb3J0LWRlcGVuZGVuY3ldLFxcbiAgICBsaW5rW3JlbD1zdHlsZXNoZWV0XVtpbXBvcnQtZGVwZW5kZW5jeV1cIiksZD1iLmxlbmd0aDtpZihkKXt2YXIgZT1LYSYmISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlua1tyZWw9c3R5bGVzaGVldF1baHJlZl1bdHlwZT1pbXBvcnQtZGlzYWJsZV1cIik7bChiLGZ1bmN0aW9uKGIpe2goYixmdW5jdGlvbigpe2IucmVtb3ZlQXR0cmlidXRlKFwiaW1wb3J0LWRlcGVuZGVuY3lcIik7MD09PS0tZCYmYSgpfSk7aWYoZSYmYi5wYXJlbnROb2RlIT09XG5kb2N1bWVudC5oZWFkKXt2YXIgZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGIubG9jYWxOYW1lKTtmLl9fYXBwbGllZEVsZW1lbnQ9YjtmLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImltcG9ydC1wbGFjZWhvbGRlclwiKTtiLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGYsYi5uZXh0U2libGluZyk7Zm9yKGY9YyhiKTtmJiZjKGYpOylmPWMoZik7Zi5wYXJlbnROb2RlIT09ZG9jdW1lbnQuaGVhZCYmKGY9bnVsbCk7ZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoYixmKTtiLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIil9fSl9ZWxzZSBhKCl9O2sucHJvdG90eXBlLkhhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2woYixmdW5jdGlvbihiKXtyZXR1cm4gYS5sKGIpfSwhMCl9O2sucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSl7YS5fX2xvYWRlZHx8KGEuX19sb2FkZWQ9ITAsYS5pbXBvcnQmJihhLmltcG9ydC5yZWFkeVN0YXRlPVxuXCJjb21wbGV0ZVwiKSxhLmRpc3BhdGNoRXZlbnQoYihhLmltcG9ydD9cImxvYWRcIjpcImVycm9yXCIse2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfSkpKX07ay5wcm90b3R5cGUuSWE9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztsKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGwoYS5hZGRlZE5vZGVzLGZ1bmN0aW9uKGEpe2EmJmEubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmKGcoYSk/Yi5GKGEpOmIuYyhhKSl9KX0pfTtpZihtKXt2YXIgbWE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtbcmVsPWltcG9ydF1cIik7bChtYSxmdW5jdGlvbihhKXthLmltcG9ydCYmXCJsb2FkaW5nXCI9PT1hLmltcG9ydC5yZWFkeVN0YXRlfHwoYS5fX2xvYWRlZD0hMCl9KTttYT1mdW5jdGlvbihhKXthPWEudGFyZ2V0O2coYSkmJihhLl9fbG9hZGVkPSEwKX07ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixtYSwhMCk7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsXG5tYSwhMCl9ZWxzZXt2YXIgY2E9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihOb2RlLnByb3RvdHlwZSxcImJhc2VVUklcIik7T2JqZWN0LmRlZmluZVByb3BlcnR5KCghY2F8fGNhLmNvbmZpZ3VyYWJsZT9Ob2RlOkVsZW1lbnQpLnByb3RvdHlwZSxcImJhc2VVUklcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9Zyh0aGlzKT90aGlzOmModGhpcyk7cmV0dXJuIGE/YS5ocmVmOmNhJiZjYS5nZXQ/Y2EuZ2V0LmNhbGwodGhpcyk6KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpfHx3aW5kb3cubG9jYXRpb24pLmhyZWZ9LGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwfSk7ZShmdW5jdGlvbigpe3JldHVybiBuZXcga30pfWYoZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChiKFwiSFRNTEltcG9ydHNMb2FkZWRcIix7Y2FuY2VsYWJsZTohMCxidWJibGVzOiEwLGRldGFpbDp2b2lkIDB9KSl9KTthLnVzZU5hdGl2ZT1tO2Eud2hlblJlYWR5PWY7YS5pbXBvcnRGb3JFbGVtZW50PVxuY30pKHdpbmRvdy5IVE1MSW1wb3J0cz13aW5kb3cuSFRNTEltcG9ydHN8fHt9KTsvKlxuXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xudmFyIHI9d2luZG93LlNoYWR5RE9NfHx7fTtyLkVhPSEoIUVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvd3x8IU5vZGUucHJvdG90eXBlLmdldFJvb3ROb2RlKTt2YXIga2E9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihOb2RlLnByb3RvdHlwZSxcImZpcnN0Q2hpbGRcIik7ci5HPSEhKGthJiZrYS5jb25maWd1cmFibGUmJmthLmdldCk7ci5sYT1yLmZvcmNlfHwhci5FYTtmdW5jdGlvbiB0KGEpe3JldHVybiBhLl9fc2hhZHkmJnZvaWQgMCE9PWEuX19zaGFkeS5maXJzdENoaWxkfWZ1bmN0aW9uIHUoYSl7cmV0dXJuXCJTaGFkeVJvb3RcIj09PWEuc2F9ZnVuY3Rpb24gbGEoYSl7YT1hLmdldFJvb3ROb2RlKCk7aWYodShhKSlyZXR1cm4gYX12YXIgdj1FbGVtZW50LnByb3RvdHlwZSxuYT12Lm1hdGNoZXN8fHYubWF0Y2hlc1NlbGVjdG9yfHx2Lm1vek1hdGNoZXNTZWxlY3Rvcnx8di5tc01hdGNoZXNTZWxlY3Rvcnx8di5vTWF0Y2hlc1NlbGVjdG9yfHx2LndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbmZ1bmN0aW9uIG9hKGEsYil7aWYoYSYmYilmb3IodmFyIGM9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYiksZD0wLGU7ZDxjLmxlbmd0aCYmKGU9Y1tkXSk7ZCsrKXt2YXIgZj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGIsZSk7ZiYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsZSxmKX19ZnVuY3Rpb24gcGEoYSxiKXtmb3IodmFyIGM9W10sZD0xO2Q8YXJndW1lbnRzLmxlbmd0aDsrK2QpY1tkLTFdPWFyZ3VtZW50c1tkXTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKW9hKGEsY1tkXSk7cmV0dXJuIGF9ZnVuY3Rpb24gcWEoYSxiKXtmb3IodmFyIGMgaW4gYilhW2NdPWJbY119dmFyIHJhPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpLHNhPTAsdGE9W107KG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCl7Zm9yKDt0YS5sZW5ndGg7KXRyeXt0YS5zaGlmdCgpKCl9Y2F0Y2goYSl7dGhyb3cgcmEudGV4dENvbnRlbnQ9c2ErKyxhO319KSkub2JzZXJ2ZShyYSx7Y2hhcmFjdGVyRGF0YTohMH0pO1xuZnVuY3Rpb24gdWEoYSl7dGEucHVzaChhKTtyYS50ZXh0Q29udGVudD1zYSsrfXZhciB2YT0hIWRvY3VtZW50LmNvbnRhaW5zO2Z1bmN0aW9uIHdhKGEsYil7Zm9yKDtiOyl7aWYoYj09YSlyZXR1cm4hMDtiPWIucGFyZW50Tm9kZX1yZXR1cm4hMX07dmFyIHhhPVtdLHlhO2Z1bmN0aW9uIHphKGEpe3lhfHwoeWE9ITAsdWEoQWEpKTt4YS5wdXNoKGEpfWZ1bmN0aW9uIEFhKCl7eWE9ITE7Zm9yKHZhciBhPSEheGEubGVuZ3RoO3hhLmxlbmd0aDspeGEuc2hpZnQoKSgpO3JldHVybiBhfUFhLmxpc3Q9eGE7ZnVuY3Rpb24gQmEoKXt0aGlzLmE9ITE7dGhpcy5hZGRlZE5vZGVzPVtdO3RoaXMucmVtb3ZlZE5vZGVzPVtdO3RoaXMuTj1uZXcgU2V0fWZ1bmN0aW9uIENhKGEpe2EuYXx8KGEuYT0hMCx1YShmdW5jdGlvbigpe0RhKGEpfSkpfWZ1bmN0aW9uIERhKGEpe2lmKGEuYSl7YS5hPSExO3ZhciBiPWEudGFrZVJlY29yZHMoKTtiLmxlbmd0aCYmYS5OLmZvckVhY2goZnVuY3Rpb24oYSl7YShiKX0pfX1CYS5wcm90b3R5cGUudGFrZVJlY29yZHM9ZnVuY3Rpb24oKXtpZih0aGlzLmFkZGVkTm9kZXMubGVuZ3RofHx0aGlzLnJlbW92ZWROb2Rlcy5sZW5ndGgpe3ZhciBhPVt7YWRkZWROb2Rlczp0aGlzLmFkZGVkTm9kZXMscmVtb3ZlZE5vZGVzOnRoaXMucmVtb3ZlZE5vZGVzfV07dGhpcy5hZGRlZE5vZGVzPVtdO3RoaXMucmVtb3ZlZE5vZGVzPVtdO3JldHVybiBhfXJldHVybltdfTtcbmZ1bmN0aW9uIEVhKGEsYil7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307YS5fX3NoYWR5Lkh8fChhLl9fc2hhZHkuSD1uZXcgQmEpO2EuX19zaGFkeS5ILk4uYWRkKGIpO3ZhciBjPWEuX19zaGFkeS5IO3JldHVybnt3YTpiLHc6Yyx5YTphLHRha2VSZWNvcmRzOmZ1bmN0aW9uKCl7cmV0dXJuIGMudGFrZVJlY29yZHMoKX19fWZ1bmN0aW9uIEZhKGEpe3ZhciBiPWEmJmEudztiJiYoYi5OLmRlbGV0ZShhLndhKSxiLk4uc2l6ZXx8KGEueWEuX19zaGFkeS5IPW51bGwpKX1cbmZ1bmN0aW9uIEdhKGEsYil7dmFyIGM9Yi5nZXRSb290Tm9kZSgpO3JldHVybiBhLm1hcChmdW5jdGlvbihhKXt2YXIgYj1jPT09YS50YXJnZXQuZ2V0Um9vdE5vZGUoKTtpZihiJiZhLmFkZGVkTm9kZXMpe2lmKGI9QXJyYXkuZnJvbShhLmFkZGVkTm9kZXMpLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYz09PWEuZ2V0Um9vdE5vZGUoKX0pLGIubGVuZ3RoKXJldHVybiBhPU9iamVjdC5jcmVhdGUoYSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJhZGRlZE5vZGVzXCIse3ZhbHVlOmIsY29uZmlndXJhYmxlOiEwfSksYX1lbHNlIGlmKGIpcmV0dXJuIGF9KS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGF9KX07dmFyIHc9e30sSGE9RWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlLElhPUVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNoaWxkLEphPUVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSxMYT1FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsTWE9RWxlbWVudC5wcm90b3R5cGUuY2xvbmVOb2RlLE5hPURvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlLE9hPUVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIsUGE9RWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcixRYT1XaW5kb3cucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIsUmE9V2luZG93LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLFNhPUVsZW1lbnQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQsVGE9RWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvcixVYT1FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLFZhPU5vZGUucHJvdG90eXBlLmNvbnRhaW5zfHxcbkhUTUxFbGVtZW50LnByb3RvdHlwZS5jb250YWluczt3LmFwcGVuZENoaWxkPUVsZW1lbnQucHJvdG90eXBlLmFwcGVuZENoaWxkO3cuaW5zZXJ0QmVmb3JlPUhhO3cucmVtb3ZlQ2hpbGQ9SWE7dy5zZXRBdHRyaWJ1dGU9SmE7dy5yZW1vdmVBdHRyaWJ1dGU9TGE7dy5jbG9uZU5vZGU9TWE7dy5pbXBvcnROb2RlPU5hO3cuYWRkRXZlbnRMaXN0ZW5lcj1PYTt3LnJlbW92ZUV2ZW50TGlzdGVuZXI9UGE7dy5UYT1RYTt3LlVhPVJhO3cuZGlzcGF0Y2hFdmVudD1TYTt3LnF1ZXJ5U2VsZWN0b3I9VGE7dy5xdWVyeVNlbGVjdG9yQWxsPVVhO3cuY29udGFpbnM9VmE7dmFyIFdhPS9bJlxcdTAwQTBcIl0vZyxYYT0vWyZcXHUwMEEwPD5dL2c7ZnVuY3Rpb24gWWEoYSl7c3dpdGNoKGEpe2Nhc2UgXCImXCI6cmV0dXJuXCImYW1wO1wiO2Nhc2UgXCI8XCI6cmV0dXJuXCImbHQ7XCI7Y2FzZSBcIj5cIjpyZXR1cm5cIiZndDtcIjtjYXNlICdcIic6cmV0dXJuXCImcXVvdDtcIjtjYXNlIFwiXFx1MDBhMFwiOnJldHVyblwiJm5ic3A7XCJ9fWZ1bmN0aW9uIFphKGEpe2Zvcih2YXIgYj17fSxjPTA7YzxhLmxlbmd0aDtjKyspYlthW2NdXT0hMDtyZXR1cm4gYn12YXIgJGE9WmEoXCJhcmVhIGJhc2UgYnIgY29sIGNvbW1hbmQgZW1iZWQgaHIgaW1nIGlucHV0IGtleWdlbiBsaW5rIG1ldGEgcGFyYW0gc291cmNlIHRyYWNrIHdiclwiLnNwbGl0KFwiIFwiKSksYWI9WmEoXCJzdHlsZSBzY3JpcHQgeG1wIGlmcmFtZSBub2VtYmVkIG5vZnJhbWVzIHBsYWludGV4dCBub3NjcmlwdFwiLnNwbGl0KFwiIFwiKSk7XG5mdW5jdGlvbiBiYihhLGIpe1widGVtcGxhdGVcIj09PWEubG9jYWxOYW1lJiYoYT1hLmNvbnRlbnQpO2Zvcih2YXIgYz1cIlwiLGQ9Yj9iKGEpOmEuY2hpbGROb2RlcyxlPTAsZj1kLmxlbmd0aCxoO2U8ZiYmKGg9ZFtlXSk7ZSsrKXthOnt2YXIgZz1oO3ZhciBrPWE7dmFyIGw9Yjtzd2l0Y2goZy5ub2RlVHlwZSl7Y2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpmb3IodmFyIG09Zy5sb2NhbE5hbWUscT1cIjxcIittLEU9Zy5hdHRyaWJ1dGVzLEo9MDtrPUVbSl07SisrKXErPVwiIFwiK2submFtZSsnPVwiJytrLnZhbHVlLnJlcGxhY2UoV2EsWWEpKydcIic7cSs9XCI+XCI7Zz0kYVttXT9xOnErYmIoZyxsKStcIjwvXCIrbStcIj5cIjticmVhayBhO2Nhc2UgTm9kZS5URVhUX05PREU6Zz1nLmRhdGE7Zz1rJiZhYltrLmxvY2FsTmFtZV0/ZzpnLnJlcGxhY2UoWGEsWWEpO2JyZWFrIGE7Y2FzZSBOb2RlLkNPTU1FTlRfTk9ERTpnPVwiXFx4M2MhLS1cIitnLmRhdGErXCItLVxceDNlXCI7YnJlYWsgYTtkZWZhdWx0OnRocm93IHdpbmRvdy5jb25zb2xlLmVycm9yKGcpLFxuRXJyb3IoXCJub3QgaW1wbGVtZW50ZWRcIik7fX1jKz1nfXJldHVybiBjfTt2YXIgeD17fSx5PWRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZG9jdW1lbnQsTm9kZUZpbHRlci5TSE9XX0FMTCxudWxsLCExKSxBPWRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZG9jdW1lbnQsTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsbnVsbCwhMSk7ZnVuY3Rpb24gY2IoYSl7dmFyIGI9W107eS5jdXJyZW50Tm9kZT1hO2ZvcihhPXkuZmlyc3RDaGlsZCgpO2E7KWIucHVzaChhKSxhPXkubmV4dFNpYmxpbmcoKTtyZXR1cm4gYn14LnBhcmVudE5vZGU9ZnVuY3Rpb24oYSl7eS5jdXJyZW50Tm9kZT1hO3JldHVybiB5LnBhcmVudE5vZGUoKX07eC5maXJzdENoaWxkPWZ1bmN0aW9uKGEpe3kuY3VycmVudE5vZGU9YTtyZXR1cm4geS5maXJzdENoaWxkKCl9O3gubGFzdENoaWxkPWZ1bmN0aW9uKGEpe3kuY3VycmVudE5vZGU9YTtyZXR1cm4geS5sYXN0Q2hpbGQoKX07eC5wcmV2aW91c1NpYmxpbmc9ZnVuY3Rpb24oYSl7eS5jdXJyZW50Tm9kZT1hO3JldHVybiB5LnByZXZpb3VzU2libGluZygpfTtcbngubmV4dFNpYmxpbmc9ZnVuY3Rpb24oYSl7eS5jdXJyZW50Tm9kZT1hO3JldHVybiB5Lm5leHRTaWJsaW5nKCl9O3guY2hpbGROb2Rlcz1jYjt4LnBhcmVudEVsZW1lbnQ9ZnVuY3Rpb24oYSl7QS5jdXJyZW50Tm9kZT1hO3JldHVybiBBLnBhcmVudE5vZGUoKX07eC5maXJzdEVsZW1lbnRDaGlsZD1mdW5jdGlvbihhKXtBLmN1cnJlbnROb2RlPWE7cmV0dXJuIEEuZmlyc3RDaGlsZCgpfTt4Lmxhc3RFbGVtZW50Q2hpbGQ9ZnVuY3Rpb24oYSl7QS5jdXJyZW50Tm9kZT1hO3JldHVybiBBLmxhc3RDaGlsZCgpfTt4LnByZXZpb3VzRWxlbWVudFNpYmxpbmc9ZnVuY3Rpb24oYSl7QS5jdXJyZW50Tm9kZT1hO3JldHVybiBBLnByZXZpb3VzU2libGluZygpfTt4Lm5leHRFbGVtZW50U2libGluZz1mdW5jdGlvbihhKXtBLmN1cnJlbnROb2RlPWE7cmV0dXJuIEEubmV4dFNpYmxpbmcoKX07XG54LmNoaWxkcmVuPWZ1bmN0aW9uKGEpe3ZhciBiPVtdO0EuY3VycmVudE5vZGU9YTtmb3IoYT1BLmZpcnN0Q2hpbGQoKTthOyliLnB1c2goYSksYT1BLm5leHRTaWJsaW5nKCk7cmV0dXJuIGJ9O3guaW5uZXJIVE1MPWZ1bmN0aW9uKGEpe3JldHVybiBiYihhLGZ1bmN0aW9uKGEpe3JldHVybiBjYihhKX0pfTt4LnRleHRDb250ZW50PWZ1bmN0aW9uKGEpe3N3aXRjaChhLm5vZGVUeXBlKXtjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOmNhc2UgTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFOmE9ZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihhLE5vZGVGaWx0ZXIuU0hPV19URVhULG51bGwsITEpO2Zvcih2YXIgYj1cIlwiLGM7Yz1hLm5leHROb2RlKCk7KWIrPWMubm9kZVZhbHVlO3JldHVybiBiO2RlZmF1bHQ6cmV0dXJuIGEubm9kZVZhbHVlfX07dmFyIGRiPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIil8fE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpLGViPWRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcImluZXJ0XCIpLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZmI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihEb2N1bWVudC5wcm90b3R5cGUsXCJhY3RpdmVFbGVtZW50XCIpLGdiPXtwYXJlbnRFbGVtZW50OntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5wYXJlbnROb2RlO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERSYmKGE9bnVsbCk7cmV0dXJuIHZvaWQgMCE9PWE/YTp4LnBhcmVudEVsZW1lbnQodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0scGFyZW50Tm9kZTp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZcbnRoaXMuX19zaGFkeS5wYXJlbnROb2RlO3JldHVybiB2b2lkIDAhPT1hP2E6eC5wYXJlbnROb2RlKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LG5leHRTaWJsaW5nOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5uZXh0U2libGluZztyZXR1cm4gdm9pZCAwIT09YT9hOngubmV4dFNpYmxpbmcodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0scHJldmlvdXNTaWJsaW5nOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc7cmV0dXJuIHZvaWQgMCE9PWE/YTp4LnByZXZpb3VzU2libGluZyh0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxjbGFzc05hbWU6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifSxzZXQ6ZnVuY3Rpb24oYSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGEpfSxjb25maWd1cmFibGU6ITB9LG5leHRFbGVtZW50U2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7aWYodGhpcy5fX3NoYWR5JiZcbnZvaWQgMCE9PXRoaXMuX19zaGFkeS5uZXh0U2libGluZyl7Zm9yKHZhciBhPXRoaXMubmV4dFNpYmxpbmc7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFOylhPWEubmV4dFNpYmxpbmc7cmV0dXJuIGF9cmV0dXJuIHgubmV4dEVsZW1lbnRTaWJsaW5nKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LHByZXZpb3VzRWxlbWVudFNpYmxpbmc6e2dldDpmdW5jdGlvbigpe2lmKHRoaXMuX19zaGFkeSYmdm9pZCAwIT09dGhpcy5fX3NoYWR5LnByZXZpb3VzU2libGluZyl7Zm9yKHZhciBhPXRoaXMucHJldmlvdXNTaWJsaW5nO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLnByZXZpb3VzU2libGluZztyZXR1cm4gYX1yZXR1cm4geC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKHRoaXMpfSxjb25maWd1cmFibGU6ITB9fSxoYj17Y2hpbGROb2Rlczp7Z2V0OmZ1bmN0aW9uKCl7aWYodCh0aGlzKSl7aWYoIXRoaXMuX19zaGFkeS5jaGlsZE5vZGVzKXt0aGlzLl9fc2hhZHkuY2hpbGROb2Rlcz1cbltdO2Zvcih2YXIgYT10aGlzLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpdGhpcy5fX3NoYWR5LmNoaWxkTm9kZXMucHVzaChhKX12YXIgYj10aGlzLl9fc2hhZHkuY2hpbGROb2Rlc31lbHNlIGI9eC5jaGlsZE5vZGVzKHRoaXMpO2IuaXRlbT1mdW5jdGlvbihhKXtyZXR1cm4gYlthXX07cmV0dXJuIGJ9LGNvbmZpZ3VyYWJsZTohMH0sY2hpbGRFbGVtZW50Q291bnQ6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aH0sY29uZmlndXJhYmxlOiEwfSxmaXJzdENoaWxkOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5maXJzdENoaWxkO3JldHVybiB2b2lkIDAhPT1hP2E6eC5maXJzdENoaWxkKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LGxhc3RDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkubGFzdENoaWxkO3JldHVybiB2b2lkIDAhPT1hP2E6eC5sYXN0Q2hpbGQodGhpcyl9LFxuY29uZmlndXJhYmxlOiEwfSx0ZXh0Q29udGVudDp7Z2V0OmZ1bmN0aW9uKCl7aWYodCh0aGlzKSl7Zm9yKHZhciBhPVtdLGI9MCxjPXRoaXMuY2hpbGROb2RlcyxkO2Q9Y1tiXTtiKyspZC5ub2RlVHlwZSE9PU5vZGUuQ09NTUVOVF9OT0RFJiZhLnB1c2goZC50ZXh0Q29udGVudCk7cmV0dXJuIGEuam9pbihcIlwiKX1yZXR1cm4geC50ZXh0Q29udGVudCh0aGlzKX0sc2V0OmZ1bmN0aW9uKGEpe3N3aXRjaCh0aGlzLm5vZGVUeXBlKXtjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOmNhc2UgTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFOmZvcig7dGhpcy5maXJzdENoaWxkOyl0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZmlyc3RDaGlsZCk7KDA8YS5sZW5ndGh8fHRoaXMubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSkmJnRoaXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpO2JyZWFrO2RlZmF1bHQ6dGhpcy5ub2RlVmFsdWU9YX19LGNvbmZpZ3VyYWJsZTohMH0sZmlyc3RFbGVtZW50Q2hpbGQ6e2dldDpmdW5jdGlvbigpe2lmKHRoaXMuX19zaGFkeSYmXG52b2lkIDAhPT10aGlzLl9fc2hhZHkuZmlyc3RDaGlsZCl7Zm9yKHZhciBhPXRoaXMuZmlyc3RDaGlsZDthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX1yZXR1cm4geC5maXJzdEVsZW1lbnRDaGlsZCh0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxsYXN0RWxlbWVudENoaWxkOntnZXQ6ZnVuY3Rpb24oKXtpZih0aGlzLl9fc2hhZHkmJnZvaWQgMCE9PXRoaXMuX19zaGFkeS5sYXN0Q2hpbGQpe2Zvcih2YXIgYT10aGlzLmxhc3RDaGlsZDthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5wcmV2aW91c1NpYmxpbmc7cmV0dXJuIGF9cmV0dXJuIHgubGFzdEVsZW1lbnRDaGlsZCh0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxjaGlsZHJlbjp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE7dCh0aGlzKT9hPUFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCh0aGlzLmNoaWxkTm9kZXMsZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZVR5cGU9PT1cbk5vZGUuRUxFTUVOVF9OT0RFfSk6YT14LmNoaWxkcmVuKHRoaXMpO2EuaXRlbT1mdW5jdGlvbihiKXtyZXR1cm4gYVtiXX07cmV0dXJuIGF9LGNvbmZpZ3VyYWJsZTohMH0saW5uZXJIVE1MOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT90aGlzLmNvbnRlbnQ6dGhpcztyZXR1cm4gdCh0aGlzKT9iYihhKTp4LmlubmVySFRNTChhKX0sc2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT90aGlzLmNvbnRlbnQ6dGhpcztiLmZpcnN0Q2hpbGQ7KWIucmVtb3ZlQ2hpbGQoYi5maXJzdENoaWxkKTtmb3IoZGImJmRiLnNldD9kYi5zZXQuY2FsbChlYixhKTplYi5pbm5lckhUTUw9YTtlYi5maXJzdENoaWxkOyliLmFwcGVuZENoaWxkKGViLmZpcnN0Q2hpbGQpfSxjb25maWd1cmFibGU6ITB9fSxpYj17c2hhZG93Um9vdDp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5Lk1hfHxcbm51bGx9LGNvbmZpZ3VyYWJsZTohMH19LGpiPXthY3RpdmVFbGVtZW50OntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1mYiYmZmIuZ2V0P2ZiLmdldC5jYWxsKGRvY3VtZW50KTpyLkc/dm9pZCAwOmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7aWYoYSYmYS5ub2RlVHlwZSl7dmFyIGI9ISF1KHRoaXMpO2lmKHRoaXM9PT1kb2N1bWVudHx8YiYmdGhpcy5ob3N0IT09YSYmdy5jb250YWlucy5jYWxsKHRoaXMuaG9zdCxhKSl7Zm9yKGI9bGEoYSk7YiYmYiE9PXRoaXM7KWE9Yi5ob3N0LGI9bGEoYSk7YT10aGlzPT09ZG9jdW1lbnQ/Yj9udWxsOmE6Yj09PXRoaXM/YTpudWxsfWVsc2UgYT1udWxsfWVsc2UgYT1udWxsO3JldHVybiBhfSxzZXQ6ZnVuY3Rpb24oKXt9LGNvbmZpZ3VyYWJsZTohMH19O1xuZnVuY3Rpb24gQihhLGIsYyl7Zm9yKHZhciBkIGluIGIpe3ZhciBlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxkKTtlJiZlLmNvbmZpZ3VyYWJsZXx8IWUmJmM/T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsZCxiW2RdKTpjJiZjb25zb2xlLndhcm4oXCJDb3VsZCBub3QgZGVmaW5lXCIsZCxcIm9uXCIsYSl9fWZ1bmN0aW9uIEMoYSl7QihhLGdiKTtCKGEsaGIpO0IoYSxqYil9dmFyIGtiPXIuRz9mdW5jdGlvbigpe306ZnVuY3Rpb24oYSl7YS5fX3NoYWR5JiZhLl9fc2hhZHkudGF8fChhLl9fc2hhZHk9YS5fX3NoYWR5fHx7fSxhLl9fc2hhZHkudGE9ITAsQihhLGdiLCEwKSl9LGxiPXIuRz9mdW5jdGlvbigpe306ZnVuY3Rpb24oYSl7YS5fX3NoYWR5JiZhLl9fc2hhZHkucmF8fChhLl9fc2hhZHk9YS5fX3NoYWR5fHx7fSxhLl9fc2hhZHkucmE9ITAsQihhLGhiLCEwKSxCKGEsaWIsITApKX07ZnVuY3Rpb24gbWIoYSxiLGMpe2tiKGEpO2M9Y3x8bnVsbDthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTtiLl9fc2hhZHk9Yi5fX3NoYWR5fHx7fTtjJiYoYy5fX3NoYWR5PWMuX19zaGFkeXx8e30pO2EuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc9Yz9jLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nOmIubGFzdENoaWxkO3ZhciBkPWEuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc7ZCYmZC5fX3NoYWR5JiYoZC5fX3NoYWR5Lm5leHRTaWJsaW5nPWEpOyhkPWEuX19zaGFkeS5uZXh0U2libGluZz1jKSYmZC5fX3NoYWR5JiYoZC5fX3NoYWR5LnByZXZpb3VzU2libGluZz1hKTthLl9fc2hhZHkucGFyZW50Tm9kZT1iO2M/Yz09PWIuX19zaGFkeS5maXJzdENoaWxkJiYoYi5fX3NoYWR5LmZpcnN0Q2hpbGQ9YSk6KGIuX19zaGFkeS5sYXN0Q2hpbGQ9YSxiLl9fc2hhZHkuZmlyc3RDaGlsZHx8KGIuX19zaGFkeS5maXJzdENoaWxkPWEpKTtiLl9fc2hhZHkuY2hpbGROb2Rlcz1udWxsfVxuZnVuY3Rpb24gbmIoYSl7aWYoIWEuX19zaGFkeXx8dm9pZCAwPT09YS5fX3NoYWR5LmZpcnN0Q2hpbGQpe2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O2EuX19zaGFkeS5maXJzdENoaWxkPXguZmlyc3RDaGlsZChhKTthLl9fc2hhZHkubGFzdENoaWxkPXgubGFzdENoaWxkKGEpO2xiKGEpO2Zvcih2YXIgYj1hLl9fc2hhZHkuY2hpbGROb2Rlcz14LmNoaWxkTm9kZXMoYSksYz0wLGQ7YzxiLmxlbmd0aCYmKGQ9YltjXSk7YysrKWQuX19zaGFkeT1kLl9fc2hhZHl8fHt9LGQuX19zaGFkeS5wYXJlbnROb2RlPWEsZC5fX3NoYWR5Lm5leHRTaWJsaW5nPWJbYysxXXx8bnVsbCxkLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWJbYy0xXXx8bnVsbCxrYihkKX19O2Z1bmN0aW9uIG9iKGEsYixjKXtpZihiPT09YSl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdhcHBlbmRDaGlsZCcgb24gJ05vZGUnOiBUaGUgbmV3IGNoaWxkIGVsZW1lbnQgY29udGFpbnMgdGhlIHBhcmVudC5cIik7aWYoYyl7dmFyIGQ9Yy5fX3NoYWR5JiZjLl9fc2hhZHkucGFyZW50Tm9kZTtpZih2b2lkIDAhPT1kJiZkIT09YXx8dm9pZCAwPT09ZCYmeC5wYXJlbnROb2RlKGMpIT09YSl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdpbnNlcnRCZWZvcmUnIG9uICdOb2RlJzogVGhlIG5vZGUgYmVmb3JlIHdoaWNoIHRoZSBuZXcgbm9kZSBpcyB0byBiZSBpbnNlcnRlZCBpcyBub3QgYSBjaGlsZCBvZiB0aGlzIG5vZGUuXCIpO31pZihjPT09YilyZXR1cm4gYjtiLnBhcmVudE5vZGUmJnBiKGIucGFyZW50Tm9kZSxiKTtkPWxhKGEpO3ZhciBlO2lmKGU9ZClhOntpZighYi5fX25vSW5zZXJ0aW9uUG9pbnQpe3ZhciBmO1wic2xvdFwiPT09Yi5sb2NhbE5hbWU/Zj1bYl06XG5iLnF1ZXJ5U2VsZWN0b3JBbGwmJihmPWIucXVlcnlTZWxlY3RvckFsbChcInNsb3RcIikpO2lmKGYmJmYubGVuZ3RoKXtlPWY7YnJlYWsgYX19ZT12b2lkIDB9KGY9ZSkmJmQuQy5wdXNoLmFwcGx5KGQuQyxbXS5jb25jYXQoZiBpbnN0YW5jZW9mIEFycmF5P2Y6amEoaWEoZikpKSk7ZCYmKFwic2xvdFwiPT09YS5sb2NhbE5hbWV8fGYpJiZEKGQpO2lmKHQoYSkpe2Q9YztsYihhKTthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTt2b2lkIDAhPT1hLl9fc2hhZHkuZmlyc3RDaGlsZCYmKGEuX19zaGFkeS5jaGlsZE5vZGVzPW51bGwpO2lmKGIubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe2Y9Yi5jaGlsZE5vZGVzO2ZvcihlPTA7ZTxmLmxlbmd0aDtlKyspbWIoZltlXSxhLGQpO2IuX19zaGFkeT1iLl9fc2hhZHl8fHt9O2Q9dm9pZCAwIT09Yi5fX3NoYWR5LmZpcnN0Q2hpbGQ/bnVsbDp2b2lkIDA7Yi5fX3NoYWR5LmZpcnN0Q2hpbGQ9Yi5fX3NoYWR5Lmxhc3RDaGlsZD1kO1xuYi5fX3NoYWR5LmNoaWxkTm9kZXM9ZH1lbHNlIG1iKGIsYSxkKTtpZihxYihhKSl7RChhLl9fc2hhZHkucm9vdCk7dmFyIGg9ITB9ZWxzZSBhLl9fc2hhZHkucm9vdCYmKGg9ITApfWh8fChoPXUoYSk/YS5ob3N0OmEsYz8oYz1yYihjKSx3Lmluc2VydEJlZm9yZS5jYWxsKGgsYixjKSk6dy5hcHBlbmRDaGlsZC5jYWxsKGgsYikpO3NiKGEsYik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBwYihhLGIpe2lmKGIucGFyZW50Tm9kZSE9PWEpdGhyb3cgRXJyb3IoXCJUaGUgbm9kZSB0byBiZSByZW1vdmVkIGlzIG5vdCBhIGNoaWxkIG9mIHRoaXMgbm9kZTogXCIrYik7dmFyIGM9bGEoYik7aWYodChhKSl7Yi5fX3NoYWR5PWIuX19zaGFkeXx8e307YS5fX3NoYWR5PWEuX19zaGFkeXx8e307Yj09PWEuX19zaGFkeS5maXJzdENoaWxkJiYoYS5fX3NoYWR5LmZpcnN0Q2hpbGQ9Yi5fX3NoYWR5Lm5leHRTaWJsaW5nKTtiPT09YS5fX3NoYWR5Lmxhc3RDaGlsZCYmKGEuX19zaGFkeS5sYXN0Q2hpbGQ9Yi5fX3NoYWR5LnByZXZpb3VzU2libGluZyk7dmFyIGQ9Yi5fX3NoYWR5LnByZXZpb3VzU2libGluZyxlPWIuX19zaGFkeS5uZXh0U2libGluZztkJiYoZC5fX3NoYWR5PWQuX19zaGFkeXx8e30sZC5fX3NoYWR5Lm5leHRTaWJsaW5nPWUpO2UmJihlLl9fc2hhZHk9ZS5fX3NoYWR5fHx7fSxlLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWQpO2IuX19zaGFkeS5wYXJlbnROb2RlPVxuYi5fX3NoYWR5LnByZXZpb3VzU2libGluZz1iLl9fc2hhZHkubmV4dFNpYmxpbmc9dm9pZCAwO3ZvaWQgMCE9PWEuX19zaGFkeS5jaGlsZE5vZGVzJiYoYS5fX3NoYWR5LmNoaWxkTm9kZXM9bnVsbCk7aWYocWIoYSkpe0QoYS5fX3NoYWR5LnJvb3QpO3ZhciBmPSEwfX10YihiKTtpZihjKXsoZD1hJiZcInNsb3RcIj09PWEubG9jYWxOYW1lKSYmKGY9ITApO3ViKGMpO2U9Yy5pO2Zvcih2YXIgaCBpbiBlKWZvcih2YXIgZz1lW2hdLGs9MDtrPGcubGVuZ3RoO2srKyl7dmFyIGw9Z1trXTtpZih3YShiLGwpKXtnLnNwbGljZShrLDEpO3ZhciBtPWMubS5pbmRleE9mKGwpOzA8PW0mJmMubS5zcGxpY2UobSwxKTtrLS07aWYobT1sLl9fc2hhZHkuRClmb3IobD0wO2w8bS5sZW5ndGg7bCsrKXt2YXIgcT1tW2xdLEU9eC5wYXJlbnROb2RlKHEpO0UmJncucmVtb3ZlQ2hpbGQuY2FsbChFLHEpfW09ITB9fShtfHxkKSYmRChjKX1mfHwoZj11KGEpP2EuaG9zdDphLCghYS5fX3NoYWR5LnJvb3QmJlwic2xvdFwiIT09XG5iLmxvY2FsTmFtZXx8Zj09PXgucGFyZW50Tm9kZShiKSkmJncucmVtb3ZlQ2hpbGQuY2FsbChmLGIpKTtzYihhLG51bGwsYik7cmV0dXJuIGJ9ZnVuY3Rpb24gdGIoYSl7aWYoYS5fX3NoYWR5JiZ2b2lkIDAhPT1hLl9fc2hhZHkuY2EpZm9yKHZhciBiPWEuY2hpbGROb2RlcyxjPTAsZD1iLmxlbmd0aCxlO2M8ZCYmKGU9YltjXSk7YysrKXRiKGUpO2EuX19zaGFkeSYmKGEuX19zaGFkeS5jYT12b2lkIDApfWZ1bmN0aW9uIHJiKGEpe3ZhciBiPWE7YSYmXCJzbG90XCI9PT1hLmxvY2FsTmFtZSYmKGI9KGI9YS5fX3NoYWR5JiZhLl9fc2hhZHkuRCkmJmIubGVuZ3RoP2JbMF06cmIoYS5uZXh0U2libGluZykpO3JldHVybiBifWZ1bmN0aW9uIHFiKGEpe3JldHVybihhPWEmJmEuX19zaGFkeSYmYS5fX3NoYWR5LnJvb3QpJiZ2YihhKX1cbmZ1bmN0aW9uIHdiKGEsYil7aWYoXCJzbG90XCI9PT1iKWE9YS5wYXJlbnROb2RlLHFiKGEpJiZEKGEuX19zaGFkeS5yb290KTtlbHNlIGlmKFwic2xvdFwiPT09YS5sb2NhbE5hbWUmJlwibmFtZVwiPT09YiYmKGI9bGEoYSkpKXt2YXIgYz1hLnVhLGQ9eGIoYSk7aWYoZCE9PWMpe2M9Yi5pW2NdO3ZhciBlPWMuaW5kZXhPZihhKTswPD1lJiZjLnNwbGljZShlLDEpO2M9Yi5pW2RdfHwoYi5pW2RdPVtdKTtjLnB1c2goYSk7MTxjLmxlbmd0aCYmKGIuaVtkXT15YihjKSl9RChiKX19ZnVuY3Rpb24gc2IoYSxiLGMpe2lmKGE9YS5fX3NoYWR5JiZhLl9fc2hhZHkuSCliJiZhLmFkZGVkTm9kZXMucHVzaChiKSxjJiZhLnJlbW92ZWROb2Rlcy5wdXNoKGMpLENhKGEpfVxuZnVuY3Rpb24gemIoYSl7aWYoYSYmYS5ub2RlVHlwZSl7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307dmFyIGI9YS5fX3NoYWR5LmNhO3ZvaWQgMD09PWImJih1KGEpP2I9YTpiPShiPWEucGFyZW50Tm9kZSk/emIoYik6YSx3LmNvbnRhaW5zLmNhbGwoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGEpJiYoYS5fX3NoYWR5LmNhPWIpKTtyZXR1cm4gYn19ZnVuY3Rpb24gQWIoYSxiLGMpe3ZhciBkPVtdO0JiKGEuY2hpbGROb2RlcyxiLGMsZCk7cmV0dXJuIGR9ZnVuY3Rpb24gQmIoYSxiLGMsZCl7Zm9yKHZhciBlPTAsZj1hLmxlbmd0aCxoO2U8ZiYmKGg9YVtlXSk7ZSsrKXt2YXIgZztpZihnPWgubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7Zz1oO3ZhciBrPWIsbD1jLG09ZCxxPWsoZyk7cSYmbS5wdXNoKGcpO2wmJmwocSk/Zz1xOihCYihnLmNoaWxkTm9kZXMsayxsLG0pLGc9dm9pZCAwKX1pZihnKWJyZWFrfX12YXIgQ2I9bnVsbDtcbmZ1bmN0aW9uIERiKGEsYixjKXtDYnx8KENiPXdpbmRvdy5TaGFkeUNTUyYmd2luZG93LlNoYWR5Q1NTLlNjb3BpbmdTaGltKTtDYiYmXCJjbGFzc1wiPT09Yj9DYi5zZXRFbGVtZW50Q2xhc3MoYSxjKToody5zZXRBdHRyaWJ1dGUuY2FsbChhLGIsYyksd2IoYSxiKSl9ZnVuY3Rpb24gRWIoYSxiKXtpZihhLm93bmVyRG9jdW1lbnQhPT1kb2N1bWVudClyZXR1cm4gdy5pbXBvcnROb2RlLmNhbGwoZG9jdW1lbnQsYSxiKTt2YXIgYz13LmltcG9ydE5vZGUuY2FsbChkb2N1bWVudCxhLCExKTtpZihiKXthPWEuY2hpbGROb2RlcztiPTA7Zm9yKHZhciBkO2I8YS5sZW5ndGg7YisrKWQ9RWIoYVtiXSwhMCksYy5hcHBlbmRDaGlsZChkKX1yZXR1cm4gY307dmFyIEZiPVwiX19ldmVudFdyYXBwZXJzXCIrRGF0ZS5ub3coKSxHYj17Ymx1cjohMCxmb2N1czohMCxmb2N1c2luOiEwLGZvY3Vzb3V0OiEwLGNsaWNrOiEwLGRibGNsaWNrOiEwLG1vdXNlZG93bjohMCxtb3VzZWVudGVyOiEwLG1vdXNlbGVhdmU6ITAsbW91c2Vtb3ZlOiEwLG1vdXNlb3V0OiEwLG1vdXNlb3ZlcjohMCxtb3VzZXVwOiEwLHdoZWVsOiEwLGJlZm9yZWlucHV0OiEwLGlucHV0OiEwLGtleWRvd246ITAsa2V5dXA6ITAsY29tcG9zaXRpb25zdGFydDohMCxjb21wb3NpdGlvbnVwZGF0ZTohMCxjb21wb3NpdGlvbmVuZDohMCx0b3VjaHN0YXJ0OiEwLHRvdWNoZW5kOiEwLHRvdWNobW92ZTohMCx0b3VjaGNhbmNlbDohMCxwb2ludGVyb3ZlcjohMCxwb2ludGVyZW50ZXI6ITAscG9pbnRlcmRvd246ITAscG9pbnRlcm1vdmU6ITAscG9pbnRlcnVwOiEwLHBvaW50ZXJjYW5jZWw6ITAscG9pbnRlcm91dDohMCxwb2ludGVybGVhdmU6ITAsZ290cG9pbnRlcmNhcHR1cmU6ITAsbG9zdHBvaW50ZXJjYXB0dXJlOiEwLFxuZHJhZ3N0YXJ0OiEwLGRyYWc6ITAsZHJhZ2VudGVyOiEwLGRyYWdsZWF2ZTohMCxkcmFnb3ZlcjohMCxkcm9wOiEwLGRyYWdlbmQ6ITAsRE9NQWN0aXZhdGU6ITAsRE9NRm9jdXNJbjohMCxET01Gb2N1c091dDohMCxrZXlwcmVzczohMH07ZnVuY3Rpb24gSGIoYSxiKXt2YXIgYz1bXSxkPWE7Zm9yKGE9YT09PXdpbmRvdz93aW5kb3c6YS5nZXRSb290Tm9kZSgpO2Q7KWMucHVzaChkKSxkPWQuYXNzaWduZWRTbG90P2QuYXNzaWduZWRTbG90OmQubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUmJmQuaG9zdCYmKGJ8fGQhPT1hKT9kLmhvc3Q6ZC5wYXJlbnROb2RlO2NbYy5sZW5ndGgtMV09PT1kb2N1bWVudCYmYy5wdXNoKHdpbmRvdyk7cmV0dXJuIGN9XG5mdW5jdGlvbiBJYihhLGIpe2lmKCF1KXJldHVybiBhO2E9SGIoYSwhMCk7Zm9yKHZhciBjPTAsZCxlLGYsaDtjPGIubGVuZ3RoO2MrKylpZihkPWJbY10sZj1kPT09d2luZG93P3dpbmRvdzpkLmdldFJvb3ROb2RlKCksZiE9PWUmJihoPWEuaW5kZXhPZihmKSxlPWYpLCF1KGYpfHwtMTxoKXJldHVybiBkfVxudmFyIEpiPXtnZXQgY29tcG9zZWQoKXshMSE9PXRoaXMuaXNUcnVzdGVkJiZ2b2lkIDA9PT10aGlzLlMmJih0aGlzLlM9R2JbdGhpcy50eXBlXSk7cmV0dXJuIHRoaXMuU3x8ITF9LGNvbXBvc2VkUGF0aDpmdW5jdGlvbigpe3RoaXMuZmF8fCh0aGlzLmZhPUhiKHRoaXMuX190YXJnZXQsdGhpcy5jb21wb3NlZCkpO3JldHVybiB0aGlzLmZhfSxnZXQgdGFyZ2V0KCl7cmV0dXJuIEliKHRoaXMuY3VycmVudFRhcmdldCx0aGlzLmNvbXBvc2VkUGF0aCgpKX0sZ2V0IHJlbGF0ZWRUYXJnZXQoKXtpZighdGhpcy5nYSlyZXR1cm4gbnVsbDt0aGlzLmhhfHwodGhpcy5oYT1IYih0aGlzLmdhLCEwKSk7cmV0dXJuIEliKHRoaXMuY3VycmVudFRhcmdldCx0aGlzLmhhKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7RXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbi5jYWxsKHRoaXMpO3RoaXMuVD0hMH0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7RXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbi5jYWxsKHRoaXMpO1xudGhpcy5UPXRoaXMucWE9ITB9fTtmdW5jdGlvbiBLYihhKXtmdW5jdGlvbiBiKGIsZCl7Yj1uZXcgYShiLGQpO2IuUz1kJiYhIWQuY29tcG9zZWQ7cmV0dXJuIGJ9cWEoYixhKTtiLnByb3RvdHlwZT1hLnByb3RvdHlwZTtyZXR1cm4gYn12YXIgTWI9e2ZvY3VzOiEwLGJsdXI6ITB9O2Z1bmN0aW9uIE5iKGEsYixjKXtpZihjPWIuX19oYW5kbGVycyYmYi5fX2hhbmRsZXJzW2EudHlwZV0mJmIuX19oYW5kbGVyc1thLnR5cGVdW2NdKWZvcih2YXIgZD0wLGU7KGU9Y1tkXSkmJmEudGFyZ2V0IT09YS5yZWxhdGVkVGFyZ2V0JiYoZS5jYWxsKGIsYSksIWEucWEpO2QrKyk7fVxuZnVuY3Rpb24gT2IoYSl7dmFyIGI9YS5jb21wb3NlZFBhdGgoKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImN1cnJlbnRUYXJnZXRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGR9LGNvbmZpZ3VyYWJsZTohMH0pO2Zvcih2YXIgYz1iLmxlbmd0aC0xOzA8PWM7Yy0tKXt2YXIgZD1iW2NdO05iKGEsZCxcImNhcHR1cmVcIik7aWYoYS5UKXJldHVybn1PYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImV2ZW50UGhhc2VcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEV2ZW50LkFUX1RBUkdFVH19KTt2YXIgZTtmb3IoYz0wO2M8Yi5sZW5ndGg7YysrKXtkPWJbY107dmFyIGY9ZC5fX3NoYWR5JiZkLl9fc2hhZHkucm9vdDtpZigwPT09Y3x8ZiYmZj09PWUpaWYoTmIoYSxkLFwiYnViYmxlXCIpLGQhPT13aW5kb3cmJihlPWQuZ2V0Um9vdE5vZGUoKSksYS5UKWJyZWFrfX1cbmZ1bmN0aW9uIFBiKGEsYixjLGQsZSxmKXtmb3IodmFyIGg9MDtoPGEubGVuZ3RoO2grKyl7dmFyIGc9YVtoXSxrPWcudHlwZSxsPWcuY2FwdHVyZSxtPWcub25jZSxxPWcucGFzc2l2ZTtpZihiPT09Zy5ub2RlJiZjPT09ayYmZD09PWwmJmU9PT1tJiZmPT09cSlyZXR1cm4gaH1yZXR1cm4tMX1cbmZ1bmN0aW9uIFFiKGEsYixjKXtpZihiKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMpe3ZhciBkPSEhYy5jYXB0dXJlO3ZhciBlPSEhYy5vbmNlO3ZhciBmPSEhYy5wYXNzaXZlfWVsc2UgZD0hIWMsZj1lPSExO3ZhciBoPWMmJmMuVXx8dGhpcyxnPWJbRmJdO2lmKGcpe2lmKC0xPFBiKGcsaCxhLGQsZSxmKSlyZXR1cm59ZWxzZSBiW0ZiXT1bXTtnPWZ1bmN0aW9uKGQpe2UmJnRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyk7ZC5fX3RhcmdldHx8UmIoZCk7aWYoaCE9PXRoaXMpe3ZhciBmPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZCxcImN1cnJlbnRUYXJnZXRcIik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGQsXCJjdXJyZW50VGFyZ2V0XCIse2dldDpmdW5jdGlvbigpe3JldHVybiBofSxjb25maWd1cmFibGU6ITB9KX1pZihkLmNvbXBvc2VkfHwtMTxkLmNvbXBvc2VkUGF0aCgpLmluZGV4T2YoaCkpaWYoZC50YXJnZXQ9PT1kLnJlbGF0ZWRUYXJnZXQpZC5ldmVudFBoYXNlPT09XG5FdmVudC5CVUJCTElOR19QSEFTRSYmZC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtlbHNlIGlmKGQuZXZlbnRQaGFzZT09PUV2ZW50LkNBUFRVUklOR19QSEFTRXx8ZC5idWJibGVzfHxkLnRhcmdldD09PWgpe3ZhciBnPVwib2JqZWN0XCI9PT10eXBlb2YgYiYmYi5oYW5kbGVFdmVudD9iLmhhbmRsZUV2ZW50KGQpOmIuY2FsbChoLGQpO2ghPT10aGlzJiYoZj8oT2JqZWN0LmRlZmluZVByb3BlcnR5KGQsXCJjdXJyZW50VGFyZ2V0XCIsZiksZj1udWxsKTpkZWxldGUgZC5jdXJyZW50VGFyZ2V0KTtyZXR1cm4gZ319O2JbRmJdLnB1c2goe25vZGU6dGhpcyx0eXBlOmEsY2FwdHVyZTpkLG9uY2U6ZSxwYXNzaXZlOmYsVmE6Z30pO01iW2FdPyh0aGlzLl9faGFuZGxlcnM9dGhpcy5fX2hhbmRsZXJzfHx7fSx0aGlzLl9faGFuZGxlcnNbYV09dGhpcy5fX2hhbmRsZXJzW2FdfHx7Y2FwdHVyZTpbXSxidWJibGU6W119LHRoaXMuX19oYW5kbGVyc1thXVtkP1wiY2FwdHVyZVwiOlwiYnViYmxlXCJdLnB1c2goZykpOlxuKHRoaXMgaW5zdGFuY2VvZiBXaW5kb3c/dy5UYTp3LmFkZEV2ZW50TGlzdGVuZXIpLmNhbGwodGhpcyxhLGcsYyl9fVxuZnVuY3Rpb24gU2IoYSxiLGMpe2lmKGIpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyl7dmFyIGQ9ISFjLmNhcHR1cmU7dmFyIGU9ISFjLm9uY2U7dmFyIGY9ISFjLnBhc3NpdmV9ZWxzZSBkPSEhYyxmPWU9ITE7dmFyIGg9YyYmYy5VfHx0aGlzLGc9dm9pZCAwO3ZhciBrPW51bGw7dHJ5e2s9YltGYl19Y2F0Y2gobCl7fWsmJihlPVBiKGssaCxhLGQsZSxmKSwtMTxlJiYoZz1rLnNwbGljZShlLDEpWzBdLlZhLGsubGVuZ3RofHwoYltGYl09dm9pZCAwKSkpOyh0aGlzIGluc3RhbmNlb2YgV2luZG93P3cuVWE6dy5yZW1vdmVFdmVudExpc3RlbmVyKS5jYWxsKHRoaXMsYSxnfHxiLGMpO2cmJk1iW2FdJiZ0aGlzLl9faGFuZGxlcnMmJnRoaXMuX19oYW5kbGVyc1thXSYmKGE9dGhpcy5fX2hhbmRsZXJzW2FdW2Q/XCJjYXB0dXJlXCI6XCJidWJibGVcIl0sZz1hLmluZGV4T2YoZyksLTE8ZyYmYS5zcGxpY2UoZywxKSl9fVxuZnVuY3Rpb24gVGIoKXtmb3IodmFyIGEgaW4gTWIpd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYSxmdW5jdGlvbihhKXthLl9fdGFyZ2V0fHwoUmIoYSksT2IoYSkpfSwhMCl9ZnVuY3Rpb24gUmIoYSl7YS5fX3RhcmdldD1hLnRhcmdldDthLmdhPWEucmVsYXRlZFRhcmdldDtpZihyLkcpe3ZhciBiPU9iamVjdC5nZXRQcm90b3R5cGVPZihhKTtpZighYi5oYXNPd25Qcm9wZXJ0eShcIl9fcGF0Y2hQcm90b1wiKSl7dmFyIGM9T2JqZWN0LmNyZWF0ZShiKTtjLlhhPWI7b2EoYyxKYik7Yi5fX3BhdGNoUHJvdG89Y31hLl9fcHJvdG9fXz1iLl9fcGF0Y2hQcm90b31lbHNlIG9hKGEsSmIpfXZhciBVYj1LYih3aW5kb3cuRXZlbnQpLFZiPUtiKHdpbmRvdy5DdXN0b21FdmVudCksV2I9S2Iod2luZG93Lk1vdXNlRXZlbnQpO2Z1bmN0aW9uIFhiKGEsYil7cmV0dXJue2luZGV4OmEsSTpbXSxNOmJ9fVxuZnVuY3Rpb24gWWIoYSxiLGMsZCl7dmFyIGU9MCxmPTAsaD0wLGc9MCxrPU1hdGgubWluKGItZSxkLWYpO2lmKDA9PWUmJjA9PWYpYTp7Zm9yKGg9MDtoPGs7aCsrKWlmKGFbaF0hPT1jW2hdKWJyZWFrIGE7aD1rfWlmKGI9PWEubGVuZ3RoJiZkPT1jLmxlbmd0aCl7Zz1hLmxlbmd0aDtmb3IodmFyIGw9Yy5sZW5ndGgsbT0wO208ay1oJiZaYihhWy0tZ10sY1stLWxdKTspbSsrO2c9bX1lKz1oO2YrPWg7Yi09ZztkLT1nO2lmKDA9PWItZSYmMD09ZC1mKXJldHVybltdO2lmKGU9PWIpe2ZvcihiPVhiKGUsMCk7ZjxkOyliLkkucHVzaChjW2YrK10pO3JldHVybltiXX1pZihmPT1kKXJldHVybltYYihlLGItZSldO2s9ZTtoPWY7ZD1kLWgrMTtnPWItaysxO2I9QXJyYXkoZCk7Zm9yKGw9MDtsPGQ7bCsrKWJbbF09QXJyYXkoZyksYltsXVswXT1sO2ZvcihsPTA7bDxnO2wrKyliWzBdW2xdPWw7Zm9yKGw9MTtsPGQ7bCsrKWZvcihtPTE7bTxnO20rKylpZihhW2srbS0xXT09PWNbaCtsLTFdKWJbbF1bbV09XG5iW2wtMV1bbS0xXTtlbHNle3ZhciBxPWJbbC0xXVttXSsxLEU9YltsXVttLTFdKzE7YltsXVttXT1xPEU/cTpFfWs9Yi5sZW5ndGgtMTtoPWJbMF0ubGVuZ3RoLTE7ZD1iW2tdW2hdO2ZvcihhPVtdOzA8a3x8MDxoOykwPT1rPyhhLnB1c2goMiksaC0tKTowPT1oPyhhLnB1c2goMyksay0tKTooZz1iW2stMV1baC0xXSxsPWJbay0xXVtoXSxtPWJba11baC0xXSxxPWw8bT9sPGc/bDpnOm08Zz9tOmcscT09Zz8oZz09ZD9hLnB1c2goMCk6KGEucHVzaCgxKSxkPWcpLGstLSxoLS0pOnE9PWw/KGEucHVzaCgzKSxrLS0sZD1sKTooYS5wdXNoKDIpLGgtLSxkPW0pKTthLnJldmVyc2UoKTtiPXZvaWQgMDtrPVtdO2ZvcihoPTA7aDxhLmxlbmd0aDtoKyspc3dpdGNoKGFbaF0pe2Nhc2UgMDpiJiYoay5wdXNoKGIpLGI9dm9pZCAwKTtlKys7ZisrO2JyZWFrO2Nhc2UgMTpifHwoYj1YYihlLDApKTtiLk0rKztlKys7Yi5JLnB1c2goY1tmXSk7ZisrO2JyZWFrO2Nhc2UgMjpifHwoYj1YYihlLDApKTtcbmIuTSsrO2UrKzticmVhaztjYXNlIDM6Ynx8KGI9WGIoZSwwKSksYi5JLnB1c2goY1tmXSksZisrfWImJmsucHVzaChiKTtyZXR1cm4ga31mdW5jdGlvbiBaYihhLGIpe3JldHVybiBhPT09Yn07dmFyICRiPXt9O2Z1bmN0aW9uIEYoYSxiLGMpe2lmKGEhPT0kYil0aHJvdyBuZXcgVHlwZUVycm9yKFwiSWxsZWdhbCBjb25zdHJ1Y3RvclwiKTthPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTthLl9fcHJvdG9fXz1GLnByb3RvdHlwZTthLnNhPVwiU2hhZHlSb290XCI7bmIoYik7bmIoYSk7YS5ob3N0PWI7YS5hPWMmJmMubW9kZTtiLl9fc2hhZHk9Yi5fX3NoYWR5fHx7fTtiLl9fc2hhZHkucm9vdD1hO2IuX19zaGFkeS5NYT1cImNsb3NlZFwiIT09YS5hP2E6bnVsbDthLkw9ITE7YS5tPVtdO2EuaT17fTthLkM9W107Yz14LmNoaWxkTm9kZXMoYik7Zm9yKHZhciBkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKXcucmVtb3ZlQ2hpbGQuY2FsbChiLGNbZF0pO3JldHVybiBhfUYucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUpO2Z1bmN0aW9uIEQoYSl7YS5MfHwoYS5MPSEwLHphKGZ1bmN0aW9uKCl7cmV0dXJuIGFjKGEpfSkpfVxuZnVuY3Rpb24gYWMoYSl7Zm9yKHZhciBiO2E7KXthLkwmJihiPWEpO2E6e3ZhciBjPWE7YT1jLmhvc3QuZ2V0Um9vdE5vZGUoKTtpZih1KGEpKWZvcih2YXIgZD1jLmhvc3QuY2hpbGROb2RlcyxlPTA7ZTxkLmxlbmd0aDtlKyspaWYoYz1kW2VdLFwic2xvdFwiPT1jLmxvY2FsTmFtZSlicmVhayBhO2E9dm9pZCAwfX1iJiZiLl9yZW5kZXJSb290KCl9XG5GLnByb3RvdHlwZS5fcmVuZGVyUm9vdD1mdW5jdGlvbigpe3RoaXMuTD0hMTt1Yih0aGlzKTtmb3IodmFyIGE9MCxiO2E8dGhpcy5tLmxlbmd0aDthKyspe2I9dGhpcy5tW2FdO3ZhciBjPWIuX19zaGFkeS5hc3NpZ25lZE5vZGVzO2IuX19zaGFkeS5hc3NpZ25lZE5vZGVzPVtdO2IuX19zaGFkeS5EPVtdO2lmKGIuX19zaGFkeS5pYT1jKWZvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdO2UuX19zaGFkeS5aPWUuX19zaGFkeS5hc3NpZ25lZFNsb3Q7ZS5fX3NoYWR5LmFzc2lnbmVkU2xvdD09PWImJihlLl9fc2hhZHkuYXNzaWduZWRTbG90PW51bGwpfX1mb3IoYj10aGlzLmhvc3QuZmlyc3RDaGlsZDtiO2I9Yi5uZXh0U2libGluZyliYyh0aGlzLGIpO2ZvcihhPTA7YTx0aGlzLm0ubGVuZ3RoO2ErKyl7Yj10aGlzLm1bYV07aWYoIWIuX19zaGFkeS5hc3NpZ25lZE5vZGVzLmxlbmd0aClmb3IoYz1iLmZpcnN0Q2hpbGQ7YztjPWMubmV4dFNpYmxpbmcpYmModGhpcyxcbmMsYik7Yz1iLnBhcmVudE5vZGU7KGM9Yy5fX3NoYWR5JiZjLl9fc2hhZHkucm9vdCkmJnZiKGMpJiZjLl9yZW5kZXJSb290KCk7Y2ModGhpcyxiLl9fc2hhZHkuRCxiLl9fc2hhZHkuYXNzaWduZWROb2Rlcyk7aWYoYz1iLl9fc2hhZHkuaWEpe2ZvcihkPTA7ZDxjLmxlbmd0aDtkKyspY1tkXS5fX3NoYWR5Llo9bnVsbDtiLl9fc2hhZHkuaWE9bnVsbDtjLmxlbmd0aD5iLl9fc2hhZHkuYXNzaWduZWROb2Rlcy5sZW5ndGgmJihiLl9fc2hhZHkuYWE9ITApfWIuX19zaGFkeS5hYSYmKGIuX19zaGFkeS5hYT0hMSxkYyh0aGlzLGIpKX1hPXRoaXMubTtiPVtdO2ZvcihjPTA7YzxhLmxlbmd0aDtjKyspZD1hW2NdLnBhcmVudE5vZGUsZC5fX3NoYWR5JiZkLl9fc2hhZHkucm9vdHx8ISgwPmIuaW5kZXhPZihkKSl8fGIucHVzaChkKTtmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKXtjPWJbYV07ZD1jPT09dGhpcz90aGlzLmhvc3Q6YztlPVtdO2M9Yy5jaGlsZE5vZGVzO2Zvcih2YXIgZj0wO2Y8Yy5sZW5ndGg7ZisrKXt2YXIgaD1cbmNbZl07aWYoXCJzbG90XCI9PWgubG9jYWxOYW1lKXtoPWguX19zaGFkeS5EO2Zvcih2YXIgZz0wO2c8aC5sZW5ndGg7ZysrKWUucHVzaChoW2ddKX1lbHNlIGUucHVzaChoKX1jPXZvaWQgMDtmPXguY2hpbGROb2RlcyhkKTtoPVliKGUsZS5sZW5ndGgsZixmLmxlbmd0aCk7Zm9yKHZhciBrPWc9MDtnPGgubGVuZ3RoJiYoYz1oW2ddKTtnKyspe2Zvcih2YXIgbD0wLG07bDxjLkkubGVuZ3RoJiYobT1jLklbbF0pO2wrKyl4LnBhcmVudE5vZGUobSk9PT1kJiZ3LnJlbW92ZUNoaWxkLmNhbGwoZCxtKSxmLnNwbGljZShjLmluZGV4K2ssMSk7ay09Yy5NfWZvcihrPTA7azxoLmxlbmd0aCYmKGM9aFtrXSk7aysrKWZvcihnPWZbYy5pbmRleF0sbD1jLmluZGV4O2w8Yy5pbmRleCtjLk07bCsrKW09ZVtsXSx3Lmluc2VydEJlZm9yZS5jYWxsKGQsbSxnKSxmLnNwbGljZShsLDAsbSl9fTtcbmZ1bmN0aW9uIGJjKGEsYixjKXtiLl9fc2hhZHk9Yi5fX3NoYWR5fHx7fTt2YXIgZD1iLl9fc2hhZHkuWjtiLl9fc2hhZHkuWj1udWxsO2N8fChjPShhPWEuaVtiLnNsb3R8fFwiX19jYXRjaGFsbFwiXSkmJmFbMF0pO2M/KGMuX19zaGFkeS5hc3NpZ25lZE5vZGVzLnB1c2goYiksYi5fX3NoYWR5LmFzc2lnbmVkU2xvdD1jKTpiLl9fc2hhZHkuYXNzaWduZWRTbG90PXZvaWQgMDtkIT09Yi5fX3NoYWR5LmFzc2lnbmVkU2xvdCYmYi5fX3NoYWR5LmFzc2lnbmVkU2xvdCYmKGIuX19zaGFkeS5hc3NpZ25lZFNsb3QuX19zaGFkeS5hYT0hMCl9ZnVuY3Rpb24gY2MoYSxiLGMpe2Zvcih2YXIgZD0wLGU7ZDxjLmxlbmd0aCYmKGU9Y1tkXSk7ZCsrKWlmKFwic2xvdFwiPT1lLmxvY2FsTmFtZSl7dmFyIGY9ZS5fX3NoYWR5LmFzc2lnbmVkTm9kZXM7ZiYmZi5sZW5ndGgmJmNjKGEsYixmKX1lbHNlIGIucHVzaChjW2RdKX1cbmZ1bmN0aW9uIGRjKGEsYil7dy5kaXNwYXRjaEV2ZW50LmNhbGwoYixuZXcgRXZlbnQoXCJzbG90Y2hhbmdlXCIpKTtiLl9fc2hhZHkuYXNzaWduZWRTbG90JiZkYyhhLGIuX19zaGFkeS5hc3NpZ25lZFNsb3QpfWZ1bmN0aW9uIHViKGEpe2lmKGEuQy5sZW5ndGgpe2Zvcih2YXIgYj1hLkMsYyxkPTA7ZDxiLmxlbmd0aDtkKyspe3ZhciBlPWJbZF07ZS5fX3NoYWR5PWUuX19zaGFkeXx8e307bmIoZSk7bmIoZS5wYXJlbnROb2RlKTt2YXIgZj14YihlKTthLmlbZl0/KGM9Y3x8e30sY1tmXT0hMCxhLmlbZl0ucHVzaChlKSk6YS5pW2ZdPVtlXTthLm0ucHVzaChlKX1pZihjKWZvcih2YXIgaCBpbiBjKWEuaVtoXT15YihhLmlbaF0pO2EuQz1bXX19ZnVuY3Rpb24geGIoYSl7dmFyIGI9YS5uYW1lfHxhLmdldEF0dHJpYnV0ZShcIm5hbWVcIil8fFwiX19jYXRjaGFsbFwiO3JldHVybiBhLnVhPWJ9XG5mdW5jdGlvbiB5YihhKXtyZXR1cm4gYS5zb3J0KGZ1bmN0aW9uKGEsYyl7YT1lYyhhKTtmb3IodmFyIGI9ZWMoYyksZT0wO2U8YS5sZW5ndGg7ZSsrKXtjPWFbZV07dmFyIGY9YltlXTtpZihjIT09ZilyZXR1cm4gYT1BcnJheS5mcm9tKGMucGFyZW50Tm9kZS5jaGlsZE5vZGVzKSxhLmluZGV4T2YoYyktYS5pbmRleE9mKGYpfX0pfWZ1bmN0aW9uIGVjKGEpe3ZhciBiPVtdO2RvIGIudW5zaGlmdChhKTt3aGlsZShhPWEucGFyZW50Tm9kZSk7cmV0dXJuIGJ9ZnVuY3Rpb24gdmIoYSl7dWIoYSk7cmV0dXJuISFhLm0ubGVuZ3RofUYucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYSxiLGMpe1wib2JqZWN0XCIhPT10eXBlb2YgYyYmKGM9e2NhcHR1cmU6ISFjfSk7Yy5VPXRoaXM7dGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoYSxiLGMpfTtcbkYucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYSxiLGMpe1wib2JqZWN0XCIhPT10eXBlb2YgYyYmKGM9e2NhcHR1cmU6ISFjfSk7Yy5VPXRoaXM7dGhpcy5ob3N0LnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxiLGMpfTtGLnByb3RvdHlwZS5nZXRFbGVtZW50QnlJZD1mdW5jdGlvbihhKXtyZXR1cm4gQWIodGhpcyxmdW5jdGlvbihiKXtyZXR1cm4gYi5pZD09YX0sZnVuY3Rpb24oYSl7cmV0dXJuISFhfSlbMF18fG51bGx9O3ZhciBmYz1GLnByb3RvdHlwZTtCKGZjLGhiLCEwKTtCKGZjLGpiLCEwKTtmdW5jdGlvbiBnYyhhKXt2YXIgYj1hLmdldFJvb3ROb2RlKCk7dShiKSYmYWMoYik7cmV0dXJuIGEuX19zaGFkeSYmYS5fX3NoYWR5LmFzc2lnbmVkU2xvdHx8bnVsbH1cbnZhciBoYz17YWRkRXZlbnRMaXN0ZW5lcjpRYi5iaW5kKHdpbmRvdykscmVtb3ZlRXZlbnRMaXN0ZW5lcjpTYi5iaW5kKHdpbmRvdyl9LGljPXthZGRFdmVudExpc3RlbmVyOlFiLHJlbW92ZUV2ZW50TGlzdGVuZXI6U2IsYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG9iKHRoaXMsYSl9LGluc2VydEJlZm9yZTpmdW5jdGlvbihhLGIpe3JldHVybiBvYih0aGlzLGEsYil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKGEpe3JldHVybiBwYih0aGlzLGEpfSxyZXBsYWNlQ2hpbGQ6ZnVuY3Rpb24oYSxiKXtvYih0aGlzLGEsYik7cGIodGhpcyxiKTtyZXR1cm4gYX0sY2xvbmVOb2RlOmZ1bmN0aW9uKGEpe2lmKFwidGVtcGxhdGVcIj09dGhpcy5sb2NhbE5hbWUpdmFyIGI9dy5jbG9uZU5vZGUuY2FsbCh0aGlzLGEpO2Vsc2UgaWYoYj13LmNsb25lTm9kZS5jYWxsKHRoaXMsITEpLGEpe2E9dGhpcy5jaGlsZE5vZGVzO2Zvcih2YXIgYz0wLGQ7YzxhLmxlbmd0aDtjKyspZD1hW2NdLmNsb25lTm9kZSghMCksXG5iLmFwcGVuZENoaWxkKGQpfXJldHVybiBifSxnZXRSb290Tm9kZTpmdW5jdGlvbigpe3JldHVybiB6Yih0aGlzKX0sY29udGFpbnM6ZnVuY3Rpb24oYSl7cmV0dXJuIHdhKHRoaXMsYSl9LGdldCBpc0Nvbm5lY3RlZCgpe3ZhciBhPXRoaXMub3duZXJEb2N1bWVudDtpZih2YSYmdy5jb250YWlucy5jYWxsKGEsdGhpcyl8fGEuZG9jdW1lbnRFbGVtZW50JiZ3LmNvbnRhaW5zLmNhbGwoYS5kb2N1bWVudEVsZW1lbnQsdGhpcykpcmV0dXJuITA7Zm9yKGE9dGhpczthJiYhKGEgaW5zdGFuY2VvZiBEb2N1bWVudCk7KWE9YS5wYXJlbnROb2RlfHwoYSBpbnN0YW5jZW9mIEY/YS5ob3N0OnZvaWQgMCk7cmV0dXJuISEoYSYmYSBpbnN0YW5jZW9mIERvY3VtZW50KX0sZGlzcGF0Y2hFdmVudDpmdW5jdGlvbihhKXtBYSgpO3JldHVybiB3LmRpc3BhdGNoRXZlbnQuY2FsbCh0aGlzLGEpfX0samM9e2dldCBhc3NpZ25lZFNsb3QoKXtyZXR1cm4gZ2ModGhpcyl9fSxrYz17cXVlcnlTZWxlY3RvcjpmdW5jdGlvbihhKXtyZXR1cm4gQWIodGhpcyxcbmZ1bmN0aW9uKGIpe3JldHVybiBuYS5jYWxsKGIsYSl9LGZ1bmN0aW9uKGEpe3JldHVybiEhYX0pWzBdfHxudWxsfSxxdWVyeVNlbGVjdG9yQWxsOmZ1bmN0aW9uKGEpe3JldHVybiBBYih0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBuYS5jYWxsKGIsYSl9KX19LGxjPXthc3NpZ25lZE5vZGVzOmZ1bmN0aW9uKGEpe2lmKFwic2xvdFwiPT09dGhpcy5sb2NhbE5hbWUpe3ZhciBiPXRoaXMuZ2V0Um9vdE5vZGUoKTt1KGIpJiZhYyhiKTtyZXR1cm4gdGhpcy5fX3NoYWR5PyhhJiZhLmZsYXR0ZW4/dGhpcy5fX3NoYWR5LkQ6dGhpcy5fX3NoYWR5LmFzc2lnbmVkTm9kZXMpfHxbXTpbXX19fSxtYz1wYSh7c2V0QXR0cmlidXRlOmZ1bmN0aW9uKGEsYil7RGIodGhpcyxhLGIpfSxyZW1vdmVBdHRyaWJ1dGU6ZnVuY3Rpb24oYSl7dy5yZW1vdmVBdHRyaWJ1dGUuY2FsbCh0aGlzLGEpO3diKHRoaXMsYSl9LGF0dGFjaFNoYWRvdzpmdW5jdGlvbihhKXtpZighdGhpcyl0aHJvd1wiTXVzdCBwcm92aWRlIGEgaG9zdC5cIjtcbmlmKCFhKXRocm93XCJOb3QgZW5vdWdoIGFyZ3VtZW50cy5cIjtyZXR1cm4gbmV3IEYoJGIsdGhpcyxhKX0sZ2V0IHNsb3QoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzbG90XCIpfSxzZXQgc2xvdChhKXtEYih0aGlzLFwic2xvdFwiLGEpfSxnZXQgYXNzaWduZWRTbG90KCl7cmV0dXJuIGdjKHRoaXMpfX0sa2MsbGMpO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1jLGliKTt2YXIgbmM9cGEoe2ltcG9ydE5vZGU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gRWIoYSxiKX0sZ2V0RWxlbWVudEJ5SWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEFiKHRoaXMsZnVuY3Rpb24oYil7cmV0dXJuIGIuaWQ9PWF9LGZ1bmN0aW9uKGEpe3JldHVybiEhYX0pWzBdfHxudWxsfX0sa2MpO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG5jLHtfYWN0aXZlRWxlbWVudDpqYi5hY3RpdmVFbGVtZW50fSk7XG52YXIgb2M9SFRNTEVsZW1lbnQucHJvdG90eXBlLmJsdXIscGM9cGEoe2JsdXI6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5yb290OyhhPWEmJmEuYWN0aXZlRWxlbWVudCk/YS5ibHVyKCk6b2MuY2FsbCh0aGlzKX19KTtmdW5jdGlvbiBHKGEsYil7Zm9yKHZhciBjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGIpLGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXSxmPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYixlKTtmLnZhbHVlP2FbZV09Zi52YWx1ZTpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxlLGYpfX07aWYoci5sYSl7dmFyIFNoYWR5RE9NPXtpblVzZTpyLmxhLHBhdGNoOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxpc1NoYWR5Um9vdDp1LGVucXVldWU6emEsZmx1c2g6QWEsc2V0dGluZ3M6cixmaWx0ZXJNdXRhdGlvbnM6R2Esb2JzZXJ2ZUNoaWxkcmVuOkVhLHVub2JzZXJ2ZUNoaWxkcmVuOkZhLG5hdGl2ZU1ldGhvZHM6dyxuYXRpdmVUcmVlOnh9O3dpbmRvdy5TaGFkeURPTT1TaGFkeURPTTt3aW5kb3cuRXZlbnQ9VWI7d2luZG93LkN1c3RvbUV2ZW50PVZiO3dpbmRvdy5Nb3VzZUV2ZW50PVdiO1RiKCk7dmFyIHFjPXdpbmRvdy5jdXN0b21FbGVtZW50cyYmd2luZG93LmN1c3RvbUVsZW1lbnRzLm5hdGl2ZUhUTUxFbGVtZW50fHxIVE1MRWxlbWVudDtHKHdpbmRvdy5Ob2RlLnByb3RvdHlwZSxpYyk7Ryh3aW5kb3cuV2luZG93LnByb3RvdHlwZSxoYyk7Ryh3aW5kb3cuVGV4dC5wcm90b3R5cGUsamMpO0cod2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLGtjKTtHKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSxcbm1jKTtHKHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUsbmMpO3dpbmRvdy5IVE1MU2xvdEVsZW1lbnQmJkcod2luZG93LkhUTUxTbG90RWxlbWVudC5wcm90b3R5cGUsbGMpO0cocWMucHJvdG90eXBlLHBjKTtyLkcmJihDKHdpbmRvdy5Ob2RlLnByb3RvdHlwZSksQyh3aW5kb3cuVGV4dC5wcm90b3R5cGUpLEMod2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlKSxDKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSksQyhxYy5wcm90b3R5cGUpLEMod2luZG93LkRvY3VtZW50LnByb3RvdHlwZSksd2luZG93LkhUTUxTbG90RWxlbWVudCYmQyh3aW5kb3cuSFRNTFNsb3RFbGVtZW50LnByb3RvdHlwZSkpO3dpbmRvdy5TaGFkb3dSb290PUZ9O3ZhciByYz1uZXcgU2V0KFwiYW5ub3RhdGlvbi14bWwgY29sb3ItcHJvZmlsZSBmb250LWZhY2UgZm9udC1mYWNlLXNyYyBmb250LWZhY2UtdXJpIGZvbnQtZmFjZS1mb3JtYXQgZm9udC1mYWNlLW5hbWUgbWlzc2luZy1nbHlwaFwiLnNwbGl0KFwiIFwiKSk7ZnVuY3Rpb24gc2MoYSl7dmFyIGI9cmMuaGFzKGEpO2E9L15bYS16XVsuMC05X2Etel0qLVtcXC0uMC05X2Etel0qJC8udGVzdChhKTtyZXR1cm4hYiYmYX1mdW5jdGlvbiBIKGEpe3ZhciBiPWEuaXNDb25uZWN0ZWQ7aWYodm9pZCAwIT09YilyZXR1cm4gYjtmb3IoO2EmJiEoYS5fX0NFX2lzSW1wb3J0RG9jdW1lbnR8fGEgaW5zdGFuY2VvZiBEb2N1bWVudCk7KWE9YS5wYXJlbnROb2RlfHwod2luZG93LlNoYWRvd1Jvb3QmJmEgaW5zdGFuY2VvZiBTaGFkb3dSb290P2EuaG9zdDp2b2lkIDApO3JldHVybiEoIWF8fCEoYS5fX0NFX2lzSW1wb3J0RG9jdW1lbnR8fGEgaW5zdGFuY2VvZiBEb2N1bWVudCkpfVxuZnVuY3Rpb24gdGMoYSxiKXtmb3IoO2ImJmIhPT1hJiYhYi5uZXh0U2libGluZzspYj1iLnBhcmVudE5vZGU7cmV0dXJuIGImJmIhPT1hP2IubmV4dFNpYmxpbmc6bnVsbH1cbmZ1bmN0aW9uIEkoYSxiLGMpe2M9dm9pZCAwPT09Yz9uZXcgU2V0OmM7Zm9yKHZhciBkPWE7ZDspe2lmKGQubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7dmFyIGU9ZDtiKGUpO3ZhciBmPWUubG9jYWxOYW1lO2lmKFwibGlua1wiPT09ZiYmXCJpbXBvcnRcIj09PWUuZ2V0QXR0cmlidXRlKFwicmVsXCIpKXtkPWUuaW1wb3J0O2lmKGQgaW5zdGFuY2VvZiBOb2RlJiYhYy5oYXMoZCkpZm9yKGMuYWRkKGQpLGQ9ZC5maXJzdENoaWxkO2Q7ZD1kLm5leHRTaWJsaW5nKUkoZCxiLGMpO2Q9dGMoYSxlKTtjb250aW51ZX1lbHNlIGlmKFwidGVtcGxhdGVcIj09PWYpe2Q9dGMoYSxlKTtjb250aW51ZX1pZihlPWUuX19DRV9zaGFkb3dSb290KWZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZylJKGUsYixjKX1kPWQuZmlyc3RDaGlsZD9kLmZpcnN0Q2hpbGQ6dGMoYSxkKX19ZnVuY3Rpb24gSyhhLGIsYyl7YVtiXT1jfTtmdW5jdGlvbiB1Yygpe3RoaXMuYT1uZXcgTWFwO3RoaXMubD1uZXcgTWFwO3RoaXMuZj1bXTt0aGlzLmM9ITF9ZnVuY3Rpb24gdmMoYSxiLGMpe2EuYS5zZXQoYixjKTthLmwuc2V0KGMuY29uc3RydWN0b3IsYyl9ZnVuY3Rpb24gd2MoYSxiKXthLmM9ITA7YS5mLnB1c2goYil9ZnVuY3Rpb24geGMoYSxiKXthLmMmJkkoYixmdW5jdGlvbihiKXtyZXR1cm4gYS5iKGIpfSl9dWMucHJvdG90eXBlLmI9ZnVuY3Rpb24oYSl7aWYodGhpcy5jJiYhYS5fX0NFX3BhdGNoZWQpe2EuX19DRV9wYXRjaGVkPSEwO2Zvcih2YXIgYj0wO2I8dGhpcy5mLmxlbmd0aDtiKyspdGhpcy5mW2JdKGEpfX07ZnVuY3Rpb24gTChhLGIpe3ZhciBjPVtdO0koYixmdW5jdGlvbihhKXtyZXR1cm4gYy5wdXNoKGEpfSk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9Y1tiXTsxPT09ZC5fX0NFX3N0YXRlP2EuY29ubmVjdGVkQ2FsbGJhY2soZCk6eWMoYSxkKX19XG5mdW5jdGlvbiBNKGEsYil7dmFyIGM9W107SShiLGZ1bmN0aW9uKGEpe3JldHVybiBjLnB1c2goYSl9KTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKXt2YXIgZD1jW2JdOzE9PT1kLl9fQ0Vfc3RhdGUmJmEuZGlzY29ubmVjdGVkQ2FsbGJhY2soZCl9fVxuZnVuY3Rpb24gTihhLGIsYyl7Yz12b2lkIDA9PT1jP3t9OmM7dmFyIGQ9Yy5TYXx8bmV3IFNldCxlPWMub2F8fGZ1bmN0aW9uKGIpe3JldHVybiB5YyhhLGIpfSxmPVtdO0koYixmdW5jdGlvbihiKXtpZihcImxpbmtcIj09PWIubG9jYWxOYW1lJiZcImltcG9ydFwiPT09Yi5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpe3ZhciBjPWIuaW1wb3J0O2MgaW5zdGFuY2VvZiBOb2RlJiZcImNvbXBsZXRlXCI9PT1jLnJlYWR5U3RhdGU/KGMuX19DRV9pc0ltcG9ydERvY3VtZW50PSEwLGMuX19DRV9oYXNSZWdpc3RyeT0hMCk6Yi5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7dmFyIGM9Yi5pbXBvcnQ7aWYoIWMuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkKXtjLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZD0hMDtjLl9fQ0VfaXNJbXBvcnREb2N1bWVudD0hMDtjLl9fQ0VfaGFzUmVnaXN0cnk9ITA7dmFyIGY9bmV3IFNldChkKTtmLmRlbGV0ZShjKTtOKGEsYyx7U2E6ZixvYTplfSl9fSl9ZWxzZSBmLnB1c2goYil9LFxuZCk7aWYoYS5jKWZvcihiPTA7YjxmLmxlbmd0aDtiKyspYS5iKGZbYl0pO2ZvcihiPTA7YjxmLmxlbmd0aDtiKyspZShmW2JdKX1cbmZ1bmN0aW9uIHljKGEsYil7aWYodm9pZCAwPT09Yi5fX0NFX3N0YXRlKXt2YXIgYz1hLmEuZ2V0KGIubG9jYWxOYW1lKTtpZihjKXtjLmNvbnN0cnVjdGlvblN0YWNrLnB1c2goYik7dmFyIGQ9Yy5jb25zdHJ1Y3Rvcjt0cnl7dHJ5e2lmKG5ldyBkIT09Yil0aHJvdyBFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvciBkaWQgbm90IHByb2R1Y2UgdGhlIGVsZW1lbnQgYmVpbmcgdXBncmFkZWQuXCIpO31maW5hbGx5e2MuY29uc3RydWN0aW9uU3RhY2sucG9wKCl9fWNhdGNoKGgpe3Rocm93IGIuX19DRV9zdGF0ZT0yLGg7fWIuX19DRV9zdGF0ZT0xO2IuX19DRV9kZWZpbml0aW9uPWM7aWYoYy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spZm9yKGM9Yy5vYnNlcnZlZEF0dHJpYnV0ZXMsZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdLGY9Yi5nZXRBdHRyaWJ1dGUoZSk7bnVsbCE9PWYmJmEuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGIsZSxudWxsLGYsbnVsbCl9SChiKSYmXG5hLmNvbm5lY3RlZENhbGxiYWNrKGIpfX19dWMucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPWEuX19DRV9kZWZpbml0aW9uO2IuY29ubmVjdGVkQ2FsbGJhY2smJmIuY29ubmVjdGVkQ2FsbGJhY2suY2FsbChhKX07dWMucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPWEuX19DRV9kZWZpbml0aW9uO2IuZGlzY29ubmVjdGVkQ2FsbGJhY2smJmIuZGlzY29ubmVjdGVkQ2FsbGJhY2suY2FsbChhKX07dWMucHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaz1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPWEuX19DRV9kZWZpbml0aW9uO2YuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJiYtMTxmLm9ic2VydmVkQXR0cmlidXRlcy5pbmRleE9mKGIpJiZmLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjay5jYWxsKGEsYixjLGQsZSl9O2Z1bmN0aW9uIHpjKGEsYil7dGhpcy5oPWE7dGhpcy5hPWI7dGhpcy53PXZvaWQgMDtOKHRoaXMuaCx0aGlzLmEpO1wibG9hZGluZ1wiPT09dGhpcy5hLnJlYWR5U3RhdGUmJih0aGlzLnc9bmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5iLmJpbmQodGhpcykpLHRoaXMudy5vYnNlcnZlKHRoaXMuYSx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KSl9ZnVuY3Rpb24gQWMoYSl7YS53JiZhLncuZGlzY29ubmVjdCgpfXpjLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYS5yZWFkeVN0YXRlO1wiaW50ZXJhY3RpdmVcIiE9PWImJlwiY29tcGxldGVcIiE9PWJ8fEFjKHRoaXMpO2ZvcihiPTA7YjxhLmxlbmd0aDtiKyspZm9yKHZhciBjPWFbYl0uYWRkZWROb2RlcyxkPTA7ZDxjLmxlbmd0aDtkKyspTih0aGlzLmgsY1tkXSl9O2Z1bmN0aW9uIEJjKCl7dmFyIGE9dGhpczt0aGlzLmI9dGhpcy5hPXZvaWQgMDt0aGlzLmM9bmV3IFByb21pc2UoZnVuY3Rpb24oYil7YS5iPWI7YS5hJiZiKGEuYSl9KX1mdW5jdGlvbiBDYyhhKXtpZihhLmEpdGhyb3cgRXJyb3IoXCJBbHJlYWR5IHJlc29sdmVkLlwiKTthLmE9dm9pZCAwO2EuYiYmYS5iKHZvaWQgMCl9O2Z1bmN0aW9uIE8oYSl7dGhpcy5XPSExO3RoaXMuaD1hO3RoaXMuJD1uZXcgTWFwO3RoaXMuWD1mdW5jdGlvbihhKXtyZXR1cm4gYSgpfTt0aGlzLks9ITE7dGhpcy5ZPVtdO3RoaXMueGE9bmV3IHpjKGEsZG9jdW1lbnQpfVxuTy5wcm90b3R5cGUuZGVmaW5lPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztpZighKGIgaW5zdGFuY2VvZiBGdW5jdGlvbikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9ycyBtdXN0IGJlIGZ1bmN0aW9ucy5cIik7aWYoIXNjKGEpKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSBlbGVtZW50IG5hbWUgJ1wiK2ErXCInIGlzIG5vdCB2YWxpZC5cIik7aWYodGhpcy5oLmEuZ2V0KGEpKXRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCB3aXRoIG5hbWUgJ1wiK2ErXCInIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5cIik7aWYodGhpcy5XKXRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIGRlZmluZWQuXCIpO3RoaXMuVz0hMDt0cnl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9ZVthXTtpZih2b2lkIDAhPT1iJiYhKGIgaW5zdGFuY2VvZiBGdW5jdGlvbikpdGhyb3cgRXJyb3IoXCJUaGUgJ1wiK2ErXCInIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7XG5yZXR1cm4gYn0sZT1iLnByb3RvdHlwZTtpZighKGUgaW5zdGFuY2VvZiBPYmplY3QpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IncyBwcm90b3R5cGUgaXMgbm90IGFuIG9iamVjdC5cIik7dmFyIGY9ZChcImNvbm5lY3RlZENhbGxiYWNrXCIpO3ZhciBoPWQoXCJkaXNjb25uZWN0ZWRDYWxsYmFja1wiKTt2YXIgZz1kKFwiYWRvcHRlZENhbGxiYWNrXCIpO3ZhciBrPWQoXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIik7dmFyIGw9Yi5vYnNlcnZlZEF0dHJpYnV0ZXN8fFtdfWNhdGNoKG0pe3JldHVybn1maW5hbGx5e3RoaXMuVz0hMX1iPXtsb2NhbE5hbWU6YSxjb25zdHJ1Y3RvcjpiLGNvbm5lY3RlZENhbGxiYWNrOmYsZGlzY29ubmVjdGVkQ2FsbGJhY2s6aCxhZG9wdGVkQ2FsbGJhY2s6ZyxhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2s6ayxvYnNlcnZlZEF0dHJpYnV0ZXM6bCxjb25zdHJ1Y3Rpb25TdGFjazpbXX07dmModGhpcy5oLGEsYik7dGhpcy5ZLnB1c2goYik7XG50aGlzLkt8fCh0aGlzLks9ITAsdGhpcy5YKGZ1bmN0aW9uKCl7cmV0dXJuIERjKGMpfSkpfTtmdW5jdGlvbiBEYyhhKXtpZighMSE9PWEuSyl7YS5LPSExO2Zvcih2YXIgYj1hLlksYz1bXSxkPW5ldyBNYXAsZT0wO2U8Yi5sZW5ndGg7ZSsrKWQuc2V0KGJbZV0ubG9jYWxOYW1lLFtdKTtOKGEuaCxkb2N1bWVudCx7b2E6ZnVuY3Rpb24oYil7aWYodm9pZCAwPT09Yi5fX0NFX3N0YXRlKXt2YXIgZT1iLmxvY2FsTmFtZSxmPWQuZ2V0KGUpO2Y/Zi5wdXNoKGIpOmEuaC5hLmdldChlKSYmYy5wdXNoKGIpfX19KTtmb3IoZT0wO2U8Yy5sZW5ndGg7ZSsrKXljKGEuaCxjW2VdKTtmb3IoOzA8Yi5sZW5ndGg7KXt2YXIgZj1iLnNoaWZ0KCk7ZT1mLmxvY2FsTmFtZTtmPWQuZ2V0KGYubG9jYWxOYW1lKTtmb3IodmFyIGg9MDtoPGYubGVuZ3RoO2grKyl5YyhhLmgsZltoXSk7KGU9YS4kLmdldChlKSkmJkNjKGUpfX19Ty5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe2lmKGE9dGhpcy5oLmEuZ2V0KGEpKXJldHVybiBhLmNvbnN0cnVjdG9yfTtcbk8ucHJvdG90eXBlLndoZW5EZWZpbmVkPWZ1bmN0aW9uKGEpe2lmKCFzYyhhKSlyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFN5bnRheEVycm9yKFwiJ1wiK2ErXCInIGlzIG5vdCBhIHZhbGlkIGN1c3RvbSBlbGVtZW50IG5hbWUuXCIpKTt2YXIgYj10aGlzLiQuZ2V0KGEpO2lmKGIpcmV0dXJuIGIuYztiPW5ldyBCYzt0aGlzLiQuc2V0KGEsYik7dGhpcy5oLmEuZ2V0KGEpJiYhdGhpcy5ZLnNvbWUoZnVuY3Rpb24oYil7cmV0dXJuIGIubG9jYWxOYW1lPT09YX0pJiZDYyhiKTtyZXR1cm4gYi5jfTtPLnByb3RvdHlwZS5MYT1mdW5jdGlvbihhKXtBYyh0aGlzLnhhKTt2YXIgYj10aGlzLlg7dGhpcy5YPWZ1bmN0aW9uKGMpe3JldHVybiBhKGZ1bmN0aW9uKCl7cmV0dXJuIGIoYyl9KX19O3dpbmRvdy5DdXN0b21FbGVtZW50UmVnaXN0cnk9TztPLnByb3RvdHlwZS5kZWZpbmU9Ty5wcm90b3R5cGUuZGVmaW5lO08ucHJvdG90eXBlLmdldD1PLnByb3RvdHlwZS5nZXQ7XG5PLnByb3RvdHlwZS53aGVuRGVmaW5lZD1PLnByb3RvdHlwZS53aGVuRGVmaW5lZDtPLnByb3RvdHlwZS5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrPU8ucHJvdG90eXBlLkxhO3ZhciBFYz13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQsRmM9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50TlMsR2M9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlLEhjPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUucHJlcGVuZCxJYz13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmFwcGVuZCxKYz13aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUucHJlcGVuZCxLYz13aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUuYXBwZW5kLExjPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5jbG9uZU5vZGUsTWM9d2luZG93Lk5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkLE5jPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5pbnNlcnRCZWZvcmUsT2M9d2luZG93Lk5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkLFBjPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQsUWM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuTm9kZS5wcm90b3R5cGUsXG5cInRleHRDb250ZW50XCIpLFJjPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3csU2M9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksVGM9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZSxVYz13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlLFZjPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsV2M9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZU5TLFhjPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVOUyxZYz13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlTlMsWmM9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudCwkYz13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucHJlcGVuZCxhZD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kLFxuYmQ9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmJlZm9yZSxjZD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWZ0ZXIsZGQ9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VXaXRoLGVkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUsZmQ9d2luZG93LkhUTUxFbGVtZW50LGdkPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSxoZD13aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudDt2YXIgaWQ9bmV3IGZ1bmN0aW9uKCl7fTtmdW5jdGlvbiBqZCgpe3ZhciBhPVA7d2luZG93LkhUTUxFbGVtZW50PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe3ZhciBiPXRoaXMuY29uc3RydWN0b3IsZD1hLmwuZ2V0KGIpO2lmKCFkKXRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGJlaW5nIGNvbnN0cnVjdGVkIHdhcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBjdXN0b21FbGVtZW50c2AuXCIpO3ZhciBlPWQuY29uc3RydWN0aW9uU3RhY2s7aWYoMD09PWUubGVuZ3RoKXJldHVybiBlPUVjLmNhbGwoZG9jdW1lbnQsZC5sb2NhbE5hbWUpLE9iamVjdC5zZXRQcm90b3R5cGVPZihlLGIucHJvdG90eXBlKSxlLl9fQ0Vfc3RhdGU9MSxlLl9fQ0VfZGVmaW5pdGlvbj1kLGEuYihlKSxlO2Q9ZS5sZW5ndGgtMTt2YXIgZj1lW2RdO2lmKGY9PT1pZCl0aHJvdyBFcnJvcihcIlRoZSBIVE1MRWxlbWVudCBjb25zdHJ1Y3RvciB3YXMgZWl0aGVyIGNhbGxlZCByZWVudHJhbnRseSBmb3IgdGhpcyBjb25zdHJ1Y3RvciBvciBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXCIpO1xuZVtkXT1pZDtPYmplY3Quc2V0UHJvdG90eXBlT2YoZixiLnByb3RvdHlwZSk7YS5iKGYpO3JldHVybiBmfWIucHJvdG90eXBlPWZkLnByb3RvdHlwZTtyZXR1cm4gYn0oKX07ZnVuY3Rpb24ga2QoYSxiLGMpe2Z1bmN0aW9uIGQoYil7cmV0dXJuIGZ1bmN0aW9uKGMpe2Zvcih2YXIgZD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoOysrZSlkW2UtMF09YXJndW1lbnRzW2VdO2U9W107Zm9yKHZhciBmPVtdLGw9MDtsPGQubGVuZ3RoO2wrKyl7dmFyIG09ZFtsXTttIGluc3RhbmNlb2YgRWxlbWVudCYmSChtKSYmZi5wdXNoKG0pO2lmKG0gaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KWZvcihtPW0uZmlyc3RDaGlsZDttO209bS5uZXh0U2libGluZyllLnB1c2gobSk7ZWxzZSBlLnB1c2gobSl9Yi5hcHBseSh0aGlzLGQpO2ZvcihkPTA7ZDxmLmxlbmd0aDtkKyspTShhLGZbZF0pO2lmKEgodGhpcykpZm9yKGQ9MDtkPGUubGVuZ3RoO2QrKylmPWVbZF0sZiBpbnN0YW5jZW9mIEVsZW1lbnQmJkwoYSxmKX19dm9pZCAwIT09Yy5QJiYoYi5wcmVwZW5kPWQoYy5QKSk7dm9pZCAwIT09Yy5hcHBlbmQmJihiLmFwcGVuZD1kKGMuYXBwZW5kKSl9O2Z1bmN0aW9uIGxkKCl7dmFyIGE9UDtLKERvY3VtZW50LnByb3RvdHlwZSxcImNyZWF0ZUVsZW1lbnRcIixmdW5jdGlvbihiKXtpZih0aGlzLl9fQ0VfaGFzUmVnaXN0cnkpe3ZhciBjPWEuYS5nZXQoYik7aWYoYylyZXR1cm4gbmV3IGMuY29uc3RydWN0b3J9Yj1FYy5jYWxsKHRoaXMsYik7YS5iKGIpO3JldHVybiBifSk7SyhEb2N1bWVudC5wcm90b3R5cGUsXCJpbXBvcnROb2RlXCIsZnVuY3Rpb24oYixjKXtiPUdjLmNhbGwodGhpcyxiLGMpO3RoaXMuX19DRV9oYXNSZWdpc3RyeT9OKGEsYik6eGMoYSxiKTtyZXR1cm4gYn0pO0soRG9jdW1lbnQucHJvdG90eXBlLFwiY3JlYXRlRWxlbWVudE5TXCIsZnVuY3Rpb24oYixjKXtpZih0aGlzLl9fQ0VfaGFzUmVnaXN0cnkmJihudWxsPT09Ynx8XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1iKSl7dmFyIGQ9YS5hLmdldChjKTtpZihkKXJldHVybiBuZXcgZC5jb25zdHJ1Y3Rvcn1iPUZjLmNhbGwodGhpcyxiLGMpO2EuYihiKTtyZXR1cm4gYn0pO1xua2QoYSxEb2N1bWVudC5wcm90b3R5cGUse1A6SGMsYXBwZW5kOkljfSl9O2Z1bmN0aW9uIG1kKCl7dmFyIGE9UDtmdW5jdGlvbiBiKGIsZCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGIsXCJ0ZXh0Q29udGVudFwiLHtlbnVtZXJhYmxlOmQuZW51bWVyYWJsZSxjb25maWd1cmFibGU6ITAsZ2V0OmQuZ2V0LHNldDpmdW5jdGlvbihiKXtpZih0aGlzLm5vZGVUeXBlPT09Tm9kZS5URVhUX05PREUpZC5zZXQuY2FsbCh0aGlzLGIpO2Vsc2V7dmFyIGM9dm9pZCAwO2lmKHRoaXMuZmlyc3RDaGlsZCl7dmFyIGU9dGhpcy5jaGlsZE5vZGVzLGc9ZS5sZW5ndGg7aWYoMDxnJiZIKHRoaXMpKXtjPUFycmF5KGcpO2Zvcih2YXIgaz0wO2s8ZztrKyspY1trXT1lW2tdfX1kLnNldC5jYWxsKHRoaXMsYik7aWYoYylmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKU0oYSxjW2JdKX19fSl9SyhOb2RlLnByb3RvdHlwZSxcImluc2VydEJlZm9yZVwiLGZ1bmN0aW9uKGIsZCl7aWYoYiBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShiLmNoaWxkTm9kZXMpO1xuYj1OYy5jYWxsKHRoaXMsYixkKTtpZihIKHRoaXMpKWZvcihkPTA7ZDxjLmxlbmd0aDtkKyspTChhLGNbZF0pO3JldHVybiBifWM9SChiKTtkPU5jLmNhbGwodGhpcyxiLGQpO2MmJk0oYSxiKTtIKHRoaXMpJiZMKGEsYik7cmV0dXJuIGR9KTtLKE5vZGUucHJvdG90eXBlLFwiYXBwZW5kQ2hpbGRcIixmdW5jdGlvbihiKXtpZihiIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGIuY2hpbGROb2Rlcyk7Yj1NYy5jYWxsKHRoaXMsYik7aWYoSCh0aGlzKSlmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKylMKGEsY1tlXSk7cmV0dXJuIGJ9Yz1IKGIpO2U9TWMuY2FsbCh0aGlzLGIpO2MmJk0oYSxiKTtIKHRoaXMpJiZMKGEsYik7cmV0dXJuIGV9KTtLKE5vZGUucHJvdG90eXBlLFwiY2xvbmVOb2RlXCIsZnVuY3Rpb24oYil7Yj1MYy5jYWxsKHRoaXMsYik7dGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnk/TihhLGIpOlxueGMoYSxiKTtyZXR1cm4gYn0pO0soTm9kZS5wcm90b3R5cGUsXCJyZW1vdmVDaGlsZFwiLGZ1bmN0aW9uKGIpe3ZhciBjPUgoYiksZT1PYy5jYWxsKHRoaXMsYik7YyYmTShhLGIpO3JldHVybiBlfSk7SyhOb2RlLnByb3RvdHlwZSxcInJlcGxhY2VDaGlsZFwiLGZ1bmN0aW9uKGIsZCl7aWYoYiBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShiLmNoaWxkTm9kZXMpO2I9UGMuY2FsbCh0aGlzLGIsZCk7aWYoSCh0aGlzKSlmb3IoTShhLGQpLGQ9MDtkPGMubGVuZ3RoO2QrKylMKGEsY1tkXSk7cmV0dXJuIGJ9Yz1IKGIpO3ZhciBmPVBjLmNhbGwodGhpcyxiLGQpLGg9SCh0aGlzKTtoJiZNKGEsZCk7YyYmTShhLGIpO2gmJkwoYSxiKTtyZXR1cm4gZn0pO1FjJiZRYy5nZXQ/YihOb2RlLnByb3RvdHlwZSxRYyk6d2MoYSxmdW5jdGlvbihhKXtiKGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe2Zvcih2YXIgYT1cbltdLGI9MDtiPHRoaXMuY2hpbGROb2Rlcy5sZW5ndGg7YisrKWEucHVzaCh0aGlzLmNoaWxkTm9kZXNbYl0udGV4dENvbnRlbnQpO3JldHVybiBhLmpvaW4oXCJcIil9LHNldDpmdW5jdGlvbihhKXtmb3IoO3RoaXMuZmlyc3RDaGlsZDspT2MuY2FsbCh0aGlzLHRoaXMuZmlyc3RDaGlsZCk7TWMuY2FsbCh0aGlzLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKX19KX0pfTtmdW5jdGlvbiBuZChhKXt2YXIgYj1FbGVtZW50LnByb3RvdHlwZTtmdW5jdGlvbiBjKGIpe3JldHVybiBmdW5jdGlvbihjKXtmb3IodmFyIGQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDsrK2UpZFtlLTBdPWFyZ3VtZW50c1tlXTtlPVtdO2Zvcih2YXIgZz1bXSxrPTA7azxkLmxlbmd0aDtrKyspe3ZhciBsPWRba107bCBpbnN0YW5jZW9mIEVsZW1lbnQmJkgobCkmJmcucHVzaChsKTtpZihsIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3IobD1sLmZpcnN0Q2hpbGQ7bDtsPWwubmV4dFNpYmxpbmcpZS5wdXNoKGwpO2Vsc2UgZS5wdXNoKGwpfWIuYXBwbHkodGhpcyxkKTtmb3IoZD0wO2Q8Zy5sZW5ndGg7ZCsrKU0oYSxnW2RdKTtpZihIKHRoaXMpKWZvcihkPTA7ZDxlLmxlbmd0aDtkKyspZz1lW2RdLGcgaW5zdGFuY2VvZiBFbGVtZW50JiZMKGEsZyl9fXZvaWQgMCE9PWJkJiYoYi5iZWZvcmU9YyhiZCkpO3ZvaWQgMCE9PWJkJiYoYi5hZnRlcj1jKGNkKSk7dm9pZCAwIT09XG5kZCYmSyhiLFwicmVwbGFjZVdpdGhcIixmdW5jdGlvbihiKXtmb3IodmFyIGM9W10sZD0wO2Q8YXJndW1lbnRzLmxlbmd0aDsrK2QpY1tkLTBdPWFyZ3VtZW50c1tkXTtkPVtdO2Zvcih2YXIgaD1bXSxnPTA7ZzxjLmxlbmd0aDtnKyspe3ZhciBrPWNbZ107ayBpbnN0YW5jZW9mIEVsZW1lbnQmJkgoaykmJmgucHVzaChrKTtpZihrIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3Ioaz1rLmZpcnN0Q2hpbGQ7aztrPWsubmV4dFNpYmxpbmcpZC5wdXNoKGspO2Vsc2UgZC5wdXNoKGspfWc9SCh0aGlzKTtkZC5hcHBseSh0aGlzLGMpO2ZvcihjPTA7YzxoLmxlbmd0aDtjKyspTShhLGhbY10pO2lmKGcpZm9yKE0oYSx0aGlzKSxjPTA7YzxkLmxlbmd0aDtjKyspaD1kW2NdLGggaW5zdGFuY2VvZiBFbGVtZW50JiZMKGEsaCl9KTt2b2lkIDAhPT1lZCYmSyhiLFwicmVtb3ZlXCIsZnVuY3Rpb24oKXt2YXIgYj1IKHRoaXMpO2VkLmNhbGwodGhpcyk7YiYmTShhLHRoaXMpfSl9O2Z1bmN0aW9uIG9kKCl7dmFyIGE9UDtmdW5jdGlvbiBiKGIsYyl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGIsXCJpbm5lckhUTUxcIix7ZW51bWVyYWJsZTpjLmVudW1lcmFibGUsY29uZmlndXJhYmxlOiEwLGdldDpjLmdldCxzZXQ6ZnVuY3Rpb24oYil7dmFyIGQ9dGhpcyxlPXZvaWQgMDtIKHRoaXMpJiYoZT1bXSxJKHRoaXMsZnVuY3Rpb24oYSl7YSE9PWQmJmUucHVzaChhKX0pKTtjLnNldC5jYWxsKHRoaXMsYik7aWYoZSlmb3IodmFyIGY9MDtmPGUubGVuZ3RoO2YrKyl7dmFyIGg9ZVtmXTsxPT09aC5fX0NFX3N0YXRlJiZhLmRpc2Nvbm5lY3RlZENhbGxiYWNrKGgpfXRoaXMub3duZXJEb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5P04oYSx0aGlzKTp4YyhhLHRoaXMpO3JldHVybiBifX0pfWZ1bmN0aW9uIGMoYixjKXtLKGIsXCJpbnNlcnRBZGphY2VudEVsZW1lbnRcIixmdW5jdGlvbihiLGQpe3ZhciBlPUgoZCk7Yj1jLmNhbGwodGhpcyxiLGQpO2UmJk0oYSxkKTtIKGIpJiZMKGEsZCk7XG5yZXR1cm4gYn0pfVJjJiZLKEVsZW1lbnQucHJvdG90eXBlLFwiYXR0YWNoU2hhZG93XCIsZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX19DRV9zaGFkb3dSb290PWE9UmMuY2FsbCh0aGlzLGEpfSk7aWYoU2MmJlNjLmdldCliKEVsZW1lbnQucHJvdG90eXBlLFNjKTtlbHNlIGlmKGdkJiZnZC5nZXQpYihIVE1MRWxlbWVudC5wcm90b3R5cGUsZ2QpO2Vsc2V7dmFyIGQ9RWMuY2FsbChkb2N1bWVudCxcImRpdlwiKTt3YyhhLGZ1bmN0aW9uKGEpe2IoYSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIExjLmNhbGwodGhpcywhMCkuaW5uZXJIVE1MfSxzZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9XCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWU/dGhpcy5jb250ZW50OnRoaXM7Zm9yKGQuaW5uZXJIVE1MPWE7MDxiLmNoaWxkTm9kZXMubGVuZ3RoOylPYy5jYWxsKGIsYi5jaGlsZE5vZGVzWzBdKTtmb3IoOzA8ZC5jaGlsZE5vZGVzLmxlbmd0aDspTWMuY2FsbChiLFxuZC5jaGlsZE5vZGVzWzBdKX19KX0pfUsoRWxlbWVudC5wcm90b3R5cGUsXCJzZXRBdHRyaWJ1dGVcIixmdW5jdGlvbihiLGMpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIFVjLmNhbGwodGhpcyxiLGMpO3ZhciBkPVRjLmNhbGwodGhpcyxiKTtVYy5jYWxsKHRoaXMsYixjKTtjPVRjLmNhbGwodGhpcyxiKTthLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGIsZCxjLG51bGwpfSk7SyhFbGVtZW50LnByb3RvdHlwZSxcInNldEF0dHJpYnV0ZU5TXCIsZnVuY3Rpb24oYixjLGQpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIFhjLmNhbGwodGhpcyxiLGMsZCk7dmFyIGU9V2MuY2FsbCh0aGlzLGIsYyk7WGMuY2FsbCh0aGlzLGIsYyxkKTtkPVdjLmNhbGwodGhpcyxiLGMpO2EuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYyxlLGQsYil9KTtLKEVsZW1lbnQucHJvdG90eXBlLFwicmVtb3ZlQXR0cmlidXRlXCIsZnVuY3Rpb24oYil7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gVmMuY2FsbCh0aGlzLFxuYik7dmFyIGM9VGMuY2FsbCh0aGlzLGIpO1ZjLmNhbGwodGhpcyxiKTtudWxsIT09YyYmYS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxiLGMsbnVsbCxudWxsKX0pO0soRWxlbWVudC5wcm90b3R5cGUsXCJyZW1vdmVBdHRyaWJ1dGVOU1wiLGZ1bmN0aW9uKGIsYyl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gWWMuY2FsbCh0aGlzLGIsYyk7dmFyIGQ9V2MuY2FsbCh0aGlzLGIsYyk7WWMuY2FsbCh0aGlzLGIsYyk7dmFyIGU9V2MuY2FsbCh0aGlzLGIsYyk7ZCE9PWUmJmEuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYyxkLGUsYil9KTtoZD9jKEhUTUxFbGVtZW50LnByb3RvdHlwZSxoZCk6WmM/YyhFbGVtZW50LnByb3RvdHlwZSxaYyk6Y29uc29sZS53YXJuKFwiQ3VzdG9tIEVsZW1lbnRzOiBgRWxlbWVudCNpbnNlcnRBZGphY2VudEVsZW1lbnRgIHdhcyBub3QgcGF0Y2hlZC5cIik7a2QoYSxFbGVtZW50LnByb3RvdHlwZSx7UDokYyxhcHBlbmQ6YWR9KTtuZChhKX1cbjt2YXIgcGQ9d2luZG93LmN1c3RvbUVsZW1lbnRzO2lmKCFwZHx8cGQuZm9yY2VQb2x5ZmlsbHx8XCJmdW5jdGlvblwiIT10eXBlb2YgcGQuZGVmaW5lfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBwZC5nZXQpe3ZhciBQPW5ldyB1YztqZCgpO2xkKCk7a2QoUCxEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSx7UDpKYyxhcHBlbmQ6S2N9KTttZCgpO29kKCk7ZG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT0hMDt2YXIgY3VzdG9tRWxlbWVudHM9bmV3IE8oUCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdyxcImN1c3RvbUVsZW1lbnRzXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOmN1c3RvbUVsZW1lbnRzfSl9Oy8qXG5cbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5mdW5jdGlvbiBxZCgpe3RoaXMuZW5kPXRoaXMuc3RhcnQ9MDt0aGlzLnJ1bGVzPXRoaXMucGFyZW50PXRoaXMucHJldmlvdXM9bnVsbDt0aGlzLmNzc1RleHQ9dGhpcy5wYXJzZWRDc3NUZXh0PVwiXCI7dGhpcy5hdFJ1bGU9ITE7dGhpcy50eXBlPTA7dGhpcy5wYXJzZWRTZWxlY3Rvcj10aGlzLnNlbGVjdG9yPXRoaXMua2V5ZnJhbWVzTmFtZT1cIlwifVxuZnVuY3Rpb24gcmQoYSl7YT1hLnJlcGxhY2Uoc2QsXCJcIikucmVwbGFjZSh0ZCxcIlwiKTt2YXIgYj11ZCxjPWEsZD1uZXcgcWQ7ZC5zdGFydD0wO2QuZW5kPWMubGVuZ3RoO2Zvcih2YXIgZT1kLGY9MCxoPWMubGVuZ3RoO2Y8aDtmKyspaWYoXCJ7XCI9PT1jW2ZdKXtlLnJ1bGVzfHwoZS5ydWxlcz1bXSk7dmFyIGc9ZSxrPWcucnVsZXNbZy5ydWxlcy5sZW5ndGgtMV18fG51bGw7ZT1uZXcgcWQ7ZS5zdGFydD1mKzE7ZS5wYXJlbnQ9ZztlLnByZXZpb3VzPWs7Zy5ydWxlcy5wdXNoKGUpfWVsc2VcIn1cIj09PWNbZl0mJihlLmVuZD1mKzEsZT1lLnBhcmVudHx8ZCk7cmV0dXJuIGIoZCxhKX1cbmZ1bmN0aW9uIHVkKGEsYil7dmFyIGM9Yi5zdWJzdHJpbmcoYS5zdGFydCxhLmVuZC0xKTthLnBhcnNlZENzc1RleHQ9YS5jc3NUZXh0PWMudHJpbSgpO2EucGFyZW50JiYoYz1iLnN1YnN0cmluZyhhLnByZXZpb3VzP2EucHJldmlvdXMuZW5kOmEucGFyZW50LnN0YXJ0LGEuc3RhcnQtMSksYz12ZChjKSxjPWMucmVwbGFjZSh3ZCxcIiBcIiksYz1jLnN1YnN0cmluZyhjLmxhc3RJbmRleE9mKFwiO1wiKSsxKSxjPWEucGFyc2VkU2VsZWN0b3I9YS5zZWxlY3Rvcj1jLnRyaW0oKSxhLmF0UnVsZT0wPT09Yy5pbmRleE9mKFwiQFwiKSxhLmF0UnVsZT8wPT09Yy5pbmRleE9mKFwiQG1lZGlhXCIpP2EudHlwZT14ZDpjLm1hdGNoKHlkKSYmKGEudHlwZT16ZCxhLmtleWZyYW1lc05hbWU9YS5zZWxlY3Rvci5zcGxpdCh3ZCkucG9wKCkpOmEudHlwZT0wPT09Yy5pbmRleE9mKFwiLS1cIik/QWQ6QmQpO2lmKGM9YS5ydWxlcylmb3IodmFyIGQ9MCxlPWMubGVuZ3RoLGY7ZDxlJiYoZj1jW2RdKTtkKyspdWQoZixcbmIpO3JldHVybiBhfWZ1bmN0aW9uIHZkKGEpe3JldHVybiBhLnJlcGxhY2UoL1xcXFwoWzAtOWEtZl17MSw2fSlcXHMvZ2ksZnVuY3Rpb24oYSxjKXthPWM7Zm9yKGM9Ni1hLmxlbmd0aDtjLS07KWE9XCIwXCIrYTtyZXR1cm5cIlxcXFxcIithfSl9XG5mdW5jdGlvbiBDZChhLGIsYyl7Yz12b2lkIDA9PT1jP1wiXCI6Yzt2YXIgZD1cIlwiO2lmKGEuY3NzVGV4dHx8YS5ydWxlcyl7dmFyIGU9YS5ydWxlcyxmO2lmKGY9ZSlmPWVbMF0sZj0hKGYmJmYuc2VsZWN0b3ImJjA9PT1mLnNlbGVjdG9yLmluZGV4T2YoXCItLVwiKSk7aWYoZil7Zj0wO2Zvcih2YXIgaD1lLmxlbmd0aCxnO2Y8aCYmKGc9ZVtmXSk7ZisrKWQ9Q2QoZyxiLGQpfWVsc2UgYj9iPWEuY3NzVGV4dDooYj1hLmNzc1RleHQsYj1iLnJlcGxhY2UoRGQsXCJcIikucmVwbGFjZShFZCxcIlwiKSxiPWIucmVwbGFjZShGZCxcIlwiKS5yZXBsYWNlKEdkLFwiXCIpKSwoZD1iLnRyaW0oKSkmJihkPVwiICBcIitkK1wiXFxuXCIpfWQmJihhLnNlbGVjdG9yJiYoYys9YS5zZWxlY3RvcitcIiB7XFxuXCIpLGMrPWQsYS5zZWxlY3RvciYmKGMrPVwifVxcblxcblwiKSk7cmV0dXJuIGN9XG52YXIgQmQ9MSx6ZD03LHhkPTQsQWQ9MUUzLHNkPS9cXC9cXCpbXipdKlxcKisoW14vKl1bXipdKlxcKispKlxcLy9naW0sdGQ9L0BpbXBvcnRbXjtdKjsvZ2ltLERkPS8oPzpeW147XFwtXFxzfV0rKT8tLVteO3t9XSo/Oltee307XSo/KD86WztcXG5dfCQpL2dpbSxFZD0vKD86XlteO1xcLVxcc31dKyk/LS1bXjt7fV0qPzpbXnt9O10qP3tbXn1dKj99KD86WztcXG5dfCQpPy9naW0sRmQ9L0BhcHBseVxccypcXCg/W14pO10qXFwpP1xccyooPzpbO1xcbl18JCk/L2dpbSxHZD0vW147Ol0qPzpbXjtdKj92YXJcXChbXjtdKlxcKSg/Ols7XFxuXXwkKT8vZ2ltLHlkPS9eQFteXFxzXSprZXlmcmFtZXMvLHdkPS9cXHMrL2c7dmFyIFE9ISh3aW5kb3cuU2hhZHlET00mJndpbmRvdy5TaGFkeURPTS5pblVzZSksSGQ7ZnVuY3Rpb24gSWQoYSl7SGQ9YSYmYS5zaGltY3NzcHJvcGVydGllcz8hMTpRfHwhKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FwcGxlV2ViS2l0XFwvNjAxfEVkZ2VcXC8xNS8pfHwhd2luZG93LkNTU3x8IUNTUy5zdXBwb3J0c3x8IUNTUy5zdXBwb3J0cyhcImJveC1zaGFkb3dcIixcIjAgMCAwIHZhcigtLWZvbylcIikpfXdpbmRvdy5TaGFkeUNTUyYmdm9pZCAwIT09d2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzcz9IZD13aW5kb3cuU2hhZHlDU1MubmF0aXZlQ3NzOndpbmRvdy5TaGFkeUNTUz8oSWQod2luZG93LlNoYWR5Q1NTKSx3aW5kb3cuU2hhZHlDU1M9dm9pZCAwKTpJZCh3aW5kb3cuV2ViQ29tcG9uZW50cyYmd2luZG93LldlYkNvbXBvbmVudHMuZmxhZ3MpO3ZhciBSPUhkO3ZhciBKZD0vKD86XnxbO1xcc3tdXFxzKikoLS1bXFx3LV0qPylcXHMqOlxccyooPzooKD86Jyg/OlxcXFwnfC4pKj8nfFwiKD86XFxcXFwifC4pKj9cInxcXChbXildKj9cXCl8W159O3tdKSspfFxceyhbXn1dKilcXH0oPzooPz1bO1xcc31dKXwkKSkvZ2ksTGQ9Lyg/Ol58XFxXKylAYXBwbHlcXHMqXFwoPyhbXik7XFxuXSopXFwpPy9naSxNZD0vKC0tW1xcdy1dKylcXHMqKFs6LDspXXwkKS9naSxOZD0vKGFuaW1hdGlvblxccyo6KXwoYW5pbWF0aW9uLW5hbWVcXHMqOikvLE9kPS9AbWVkaWFcXHMoLiopLyxQZD0vXFx7W159XSpcXH0vZztmdW5jdGlvbiBTKGEsYil7aWYoIWEpcmV0dXJuXCJcIjtcInN0cmluZ1wiPT09dHlwZW9mIGEmJihhPXJkKGEpKTtiJiZUKGEsYik7cmV0dXJuIENkKGEsUil9ZnVuY3Rpb24gUWQoYSl7IWEuX19jc3NSdWxlcyYmYS50ZXh0Q29udGVudCYmKGEuX19jc3NSdWxlcz1yZChhLnRleHRDb250ZW50KSk7cmV0dXJuIGEuX19jc3NSdWxlc3x8bnVsbH1mdW5jdGlvbiBSZChhKXtyZXR1cm4hIWEucGFyZW50JiZhLnBhcmVudC50eXBlPT09emR9ZnVuY3Rpb24gVChhLGIsYyxkKXtpZihhKXt2YXIgZT0hMSxmPWEudHlwZTtpZihkJiZmPT09eGQpe3ZhciBoPWEuc2VsZWN0b3IubWF0Y2goT2QpO2gmJih3aW5kb3cubWF0Y2hNZWRpYShoWzFdKS5tYXRjaGVzfHwoZT0hMCkpfWY9PT1CZD9iKGEpOmMmJmY9PT16ZD9jKGEpOmY9PT1BZCYmKGU9ITApO2lmKChhPWEucnVsZXMpJiYhZSl7ZT0wO2Y9YS5sZW5ndGg7Zm9yKHZhciBnO2U8ZiYmKGc9YVtlXSk7ZSsrKVQoZyxiLGMsZCl9fX1cbmZ1bmN0aW9uIFNkKGEsYixjLGQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtiJiZlLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsYik7ZS50ZXh0Q29udGVudD1hO1RkKGUsYyxkKTtyZXR1cm4gZX12YXIgVT1udWxsO2Z1bmN0aW9uIFRkKGEsYixjKXtiPWJ8fGRvY3VtZW50LmhlYWQ7Yi5pbnNlcnRCZWZvcmUoYSxjJiZjLm5leHRTaWJsaW5nfHxiLmZpcnN0Q2hpbGQpO1U/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihVKT09PU5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HJiYoVT1hKTpVPWF9XG5mdW5jdGlvbiBVZChhLGIpe3ZhciBjPWEuaW5kZXhPZihcInZhcihcIik7aWYoLTE9PT1jKXJldHVybiBiKGEsXCJcIixcIlwiLFwiXCIpO2E6e3ZhciBkPTA7dmFyIGU9YyszO2Zvcih2YXIgZj1hLmxlbmd0aDtlPGY7ZSsrKWlmKFwiKFwiPT09YVtlXSlkKys7ZWxzZSBpZihcIilcIj09PWFbZV0mJjA9PT0tLWQpYnJlYWsgYTtlPS0xfWQ9YS5zdWJzdHJpbmcoYys0LGUpO2M9YS5zdWJzdHJpbmcoMCxjKTthPVVkKGEuc3Vic3RyaW5nKGUrMSksYik7ZT1kLmluZGV4T2YoXCIsXCIpO3JldHVybi0xPT09ZT9iKGMsZC50cmltKCksXCJcIixhKTpiKGMsZC5zdWJzdHJpbmcoMCxlKS50cmltKCksZC5zdWJzdHJpbmcoZSsxKS50cmltKCksYSl9ZnVuY3Rpb24gVmQoYSxiKXtRP2Euc2V0QXR0cmlidXRlKFwiY2xhc3NcIixiKTp3aW5kb3cuU2hhZHlET00ubmF0aXZlTWV0aG9kcy5zZXRBdHRyaWJ1dGUuY2FsbChhLFwiY2xhc3NcIixiKX1cbmZ1bmN0aW9uIFYoYSl7dmFyIGI9YS5sb2NhbE5hbWUsYz1cIlwiO2I/LTE8Yi5pbmRleE9mKFwiLVwiKXx8KGM9YixiPWEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImlzXCIpfHxcIlwiKTooYj1hLmlzLGM9YS5leHRlbmRzKTtyZXR1cm57aXM6YixKOmN9fTtmdW5jdGlvbiBXZCgpe31mdW5jdGlvbiBYZChhLGIsYyl7dmFyIGQ9VzthLl9fc3R5bGVTY29wZWQ/YS5fX3N0eWxlU2NvcGVkPW51bGw6WWQoZCxhLGJ8fFwiXCIsYyl9ZnVuY3Rpb24gWWQoYSxiLGMsZCl7Yi5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiZaZChiLGMsZCk7aWYoYj1cInRlbXBsYXRlXCI9PT1iLmxvY2FsTmFtZT8oYi5jb250ZW50fHxiLllhKS5jaGlsZE5vZGVzOmIuY2hpbGRyZW58fGIuY2hpbGROb2Rlcylmb3IodmFyIGU9MDtlPGIubGVuZ3RoO2UrKylZZChhLGJbZV0sYyxkKX1cbmZ1bmN0aW9uIFpkKGEsYixjKXtpZihiKWlmKGEuY2xhc3NMaXN0KWM/KGEuY2xhc3NMaXN0LnJlbW92ZShcInN0eWxlLXNjb3BlXCIpLGEuY2xhc3NMaXN0LnJlbW92ZShiKSk6KGEuY2xhc3NMaXN0LmFkZChcInN0eWxlLXNjb3BlXCIpLGEuY2xhc3NMaXN0LmFkZChiKSk7ZWxzZSBpZihhLmdldEF0dHJpYnV0ZSl7dmFyIGQ9YS5nZXRBdHRyaWJ1dGUoJGQpO2M/ZCYmKGI9ZC5yZXBsYWNlKFwic3R5bGUtc2NvcGVcIixcIlwiKS5yZXBsYWNlKGIsXCJcIiksVmQoYSxiKSk6VmQoYSwoZD9kK1wiIFwiOlwiXCIpK1wic3R5bGUtc2NvcGUgXCIrYil9fWZ1bmN0aW9uIGFlKGEsYixjKXt2YXIgZD1XLGU9YS5fX2Nzc0J1aWxkO1F8fFwic2hhZHlcIj09PWU/Yj1TKGIsYyk6KGE9VihhKSxiPWJlKGQsYixhLmlzLGEuSixjKStcIlxcblxcblwiKTtyZXR1cm4gYi50cmltKCl9XG5mdW5jdGlvbiBiZShhLGIsYyxkLGUpe3ZhciBmPWNlKGMsZCk7Yz1jP2RlK2M6XCJcIjtyZXR1cm4gUyhiLGZ1bmN0aW9uKGIpe2IuY3x8KGIuc2VsZWN0b3I9Yi5qPWVlKGEsYixhLmIsYyxmKSxiLmM9ITApO2UmJmUoYixjLGYpfSl9ZnVuY3Rpb24gY2UoYSxiKXtyZXR1cm4gYj9cIltpcz1cIithK1wiXVwiOmF9ZnVuY3Rpb24gZWUoYSxiLGMsZCxlKXt2YXIgZj1iLnNlbGVjdG9yLnNwbGl0KGZlKTtpZighUmQoYikpe2I9MDtmb3IodmFyIGg9Zi5sZW5ndGgsZztiPGgmJihnPWZbYl0pO2IrKylmW2JdPWMuY2FsbChhLGcsZCxlKX1yZXR1cm4gZi5qb2luKGZlKX1mdW5jdGlvbiBnZShhKXtyZXR1cm4gYS5yZXBsYWNlKGhlLGZ1bmN0aW9uKGEsYyxkKXstMTxkLmluZGV4T2YoXCIrXCIpP2Q9ZC5yZXBsYWNlKC9cXCsvZyxcIl9fX1wiKTotMTxkLmluZGV4T2YoXCJfX19cIikmJihkPWQucmVwbGFjZSgvX19fL2csXCIrXCIpKTtyZXR1cm5cIjpcIitjK1wiKFwiK2QrXCIpXCJ9KX1cbldkLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD0hMTthPWEudHJpbSgpO3ZhciBlPWhlLnRlc3QoYSk7ZSYmKGE9YS5yZXBsYWNlKGhlLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5cIjpcIitiK1wiKFwiK2MucmVwbGFjZSgvXFxzL2csXCJcIikrXCIpXCJ9KSxhPWdlKGEpKTthPWEucmVwbGFjZShpZSxqZStcIiAkMVwiKTthPWEucmVwbGFjZShrZSxmdW5jdGlvbihhLGUsZyl7ZHx8KGE9bGUoZyxlLGIsYyksZD1kfHxhLnN0b3AsZT1hLkJhLGc9YS52YWx1ZSk7cmV0dXJuIGUrZ30pO2UmJihhPWdlKGEpKTtyZXR1cm4gYX07XG5mdW5jdGlvbiBsZShhLGIsYyxkKXt2YXIgZT1hLmluZGV4T2YobWUpOzA8PWEuaW5kZXhPZihqZSk/YT1uZShhLGQpOjAhPT1lJiYoYT1jP29lKGEsYyk6YSk7Yz0hMTswPD1lJiYoYj1cIlwiLGM9ITApO2lmKGMpe3ZhciBmPSEwO2MmJihhPWEucmVwbGFjZShwZSxmdW5jdGlvbihhLGIpe3JldHVyblwiID4gXCIrYn0pKX1hPWEucmVwbGFjZShxZSxmdW5jdGlvbihhLGIsYyl7cmV0dXJuJ1tkaXI9XCInK2MrJ1wiXSAnK2IrXCIsIFwiK2IrJ1tkaXI9XCInK2MrJ1wiXSd9KTtyZXR1cm57dmFsdWU6YSxCYTpiLHN0b3A6Zn19ZnVuY3Rpb24gb2UoYSxiKXthPWEuc3BsaXQocmUpO2FbMF0rPWI7cmV0dXJuIGEuam9pbihyZSl9XG5mdW5jdGlvbiBuZShhLGIpe3ZhciBjPWEubWF0Y2goc2UpO3JldHVybihjPWMmJmNbMl0udHJpbSgpfHxcIlwiKT9jWzBdLm1hdGNoKHRlKT9hLnJlcGxhY2Uoc2UsZnVuY3Rpb24oYSxjLGYpe3JldHVybiBiK2Z9KTpjLnNwbGl0KHRlKVswXT09PWI/Yzp1ZTphLnJlcGxhY2UoamUsYil9ZnVuY3Rpb24gdmUoYSl7YS5zZWxlY3Rvcj09PXdlJiYoYS5zZWxlY3Rvcj1cImh0bWxcIil9V2QucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEubWF0Y2gobWUpP3RoaXMuYihhLHhlKTpvZShhLnRyaW0oKSx4ZSl9O3AuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoV2QucHJvdG90eXBlLHthOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5cInN0eWxlLXNjb3BlXCJ9fX0pO1xudmFyIGhlPS86KG50aFstXFx3XSspXFwoKFteKV0rKVxcKS8seGU9XCI6bm90KC5zdHlsZS1zY29wZSlcIixmZT1cIixcIixrZT0vKF58W1xccz4rfl0rKSgoPzpcXFsuKz9cXF18W15cXHM+K349W10pKykvZyx0ZT0vW1suOiMqXS8samU9XCI6aG9zdFwiLHdlPVwiOnJvb3RcIixtZT1cIjo6c2xvdHRlZFwiLGllPW5ldyBSZWdFeHAoXCJeKFwiK21lK1wiKVwiKSxzZT0vKDpob3N0KSg/OlxcKCgoPzpcXChbXikoXSpcXCl8W14pKF0qKSs/KVxcKSkvLHBlPS8oPzo6OnNsb3R0ZWQpKD86XFwoKCg/OlxcKFteKShdKlxcKXxbXikoXSopKz8pXFwpKS8scWU9LyguKik6ZGlyXFwoKD86KGx0cnxydGwpKVxcKS8sZGU9XCIuXCIscmU9XCI6XCIsJGQ9XCJjbGFzc1wiLHVlPVwic2hvdWxkX25vdF9tYXRjaFwiLFc9bmV3IFdkO2Z1bmN0aW9uIHllKGEsYixjLGQsZSl7dGhpcy51PWF8fG51bGw7dGhpcy5iPWJ8fG51bGw7dGhpcy5iYT1jfHxbXTt0aGlzLkI9bnVsbDt0aGlzLko9ZXx8XCJcIjt0aGlzLmE9dGhpcy5vPXRoaXMudj1udWxsfWZ1bmN0aW9uIFgoYSl7cmV0dXJuIGE/YS5fX3N0eWxlSW5mbzpudWxsfWZ1bmN0aW9uIHplKGEsYil7cmV0dXJuIGEuX19zdHlsZUluZm89Yn15ZS5wcm90b3R5cGUuYz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnV9O3llLnByb3RvdHlwZS5fZ2V0U3R5bGVSdWxlcz15ZS5wcm90b3R5cGUuYzt2YXIgQWUsQmU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlO0FlPUJlLm1hdGNoZXN8fEJlLm1hdGNoZXNTZWxlY3Rvcnx8QmUubW96TWF0Y2hlc1NlbGVjdG9yfHxCZS5tc01hdGNoZXNTZWxlY3Rvcnx8QmUub01hdGNoZXNTZWxlY3Rvcnx8QmUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO3ZhciBDZT1uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKFwiVHJpZGVudFwiKTtmdW5jdGlvbiBEZSgpe31mdW5jdGlvbiBFZShhKXt2YXIgYj17fSxjPVtdLGQ9MDtUKGEsZnVuY3Rpb24oYSl7RmUoYSk7YS5pbmRleD1kKys7YT1hLmcuY3NzVGV4dDtmb3IodmFyIGM7Yz1NZC5leGVjKGEpOyl7dmFyIGU9Y1sxXTtcIjpcIiE9PWNbMl0mJihiW2VdPSEwKX19LGZ1bmN0aW9uKGEpe2MucHVzaChhKX0pO2EuYj1jO2E9W107Zm9yKHZhciBlIGluIGIpYS5wdXNoKGUpO3JldHVybiBhfVxuZnVuY3Rpb24gRmUoYSl7aWYoIWEuZyl7dmFyIGI9e30sYz17fTtHZShhLGMpJiYoYi5zPWMsYS5ydWxlcz1udWxsKTtiLmNzc1RleHQ9YS5wYXJzZWRDc3NUZXh0LnJlcGxhY2UoUGQsXCJcIikucmVwbGFjZShKZCxcIlwiKTthLmc9Yn19ZnVuY3Rpb24gR2UoYSxiKXt2YXIgYz1hLmc7aWYoYyl7aWYoYy5zKXJldHVybiBPYmplY3QuYXNzaWduKGIsYy5zKSwhMH1lbHNle2M9YS5wYXJzZWRDc3NUZXh0O2Zvcih2YXIgZDthPUpkLmV4ZWMoYyk7KXtkPShhWzJdfHxhWzNdKS50cmltKCk7aWYoXCJpbmhlcml0XCIhPT1kfHxcInVuc2V0XCIhPT1kKWJbYVsxXS50cmltKCldPWQ7ZD0hMH1yZXR1cm4gZH19XG5mdW5jdGlvbiBIZShhLGIsYyl7YiYmKGI9MDw9Yi5pbmRleE9mKFwiO1wiKT9JZShhLGIsYyk6VWQoYixmdW5jdGlvbihiLGUsZixoKXtpZighZSlyZXR1cm4gYitoOyhlPUhlKGEsY1tlXSxjKSkmJlwiaW5pdGlhbFwiIT09ZT9cImFwcGx5LXNoaW0taW5oZXJpdFwiPT09ZSYmKGU9XCJpbmhlcml0XCIpOmU9SGUoYSxjW2ZdfHxmLGMpfHxmO3JldHVybiBiKyhlfHxcIlwiKStofSkpO3JldHVybiBiJiZiLnRyaW0oKXx8XCJcIn1cbmZ1bmN0aW9uIEllKGEsYixjKXtiPWIuc3BsaXQoXCI7XCIpO2Zvcih2YXIgZD0wLGUsZjtkPGIubGVuZ3RoO2QrKylpZihlPWJbZF0pe0xkLmxhc3RJbmRleD0wO2lmKGY9TGQuZXhlYyhlKSllPUhlKGEsY1tmWzFdXSxjKTtlbHNlIGlmKGY9ZS5pbmRleE9mKFwiOlwiKSwtMSE9PWYpe3ZhciBoPWUuc3Vic3RyaW5nKGYpO2g9aC50cmltKCk7aD1IZShhLGgsYyl8fGg7ZT1lLnN1YnN0cmluZygwLGYpK2h9YltkXT1lJiZlLmxhc3RJbmRleE9mKFwiO1wiKT09PWUubGVuZ3RoLTE/ZS5zbGljZSgwLC0xKTplfHxcIlwifXJldHVybiBiLmpvaW4oXCI7XCIpfVxuZnVuY3Rpb24gSmUoYSxiKXt2YXIgYz17fSxkPVtdO1QoYSxmdW5jdGlvbihhKXthLmd8fEZlKGEpO3ZhciBlPWEuanx8YS5wYXJzZWRTZWxlY3RvcjtiJiZhLmcucyYmZSYmQWUuY2FsbChiLGUpJiYoR2UoYSxjKSxhPWEuaW5kZXgsZT1wYXJzZUludChhLzMyLDEwKSxkW2VdPShkW2VdfHwwKXwxPDxhJTMyKX0sbnVsbCwhMCk7cmV0dXJue3M6YyxrZXk6ZH19XG5mdW5jdGlvbiBLZShhLGIsYyxkLGUpe2MuZ3x8RmUoYyk7aWYoYy5nLnMpe2I9VihiKTthPWIuaXM7Yj1iLko7Yj1hP2NlKGEsYik6XCJodG1sXCI7dmFyIGY9Yy5wYXJzZWRTZWxlY3RvcixoPVwiOmhvc3QgPiAqXCI9PT1mfHxcImh0bWxcIj09PWYsZz0wPT09Zi5pbmRleE9mKFwiOmhvc3RcIikmJiFoO1wic2hhZHlcIj09PWQmJihoPWY9PT1iK1wiID4gKi5cIitifHwtMSE9PWYuaW5kZXhPZihcImh0bWxcIiksZz0haCYmMD09PWYuaW5kZXhPZihiKSk7XCJzaGFkb3dcIj09PWQmJihoPVwiOmhvc3QgPiAqXCI9PT1mfHxcImh0bWxcIj09PWYsZz1nJiYhaCk7aWYoaHx8ZylkPWIsZyYmKFEmJiFjLmomJihjLmo9ZWUoVyxjLFcuYixhP2RlK2E6XCJcIixiKSksZD1jLmp8fGIpLGUoe1BhOmQsR2E6ZywkYTpofSl9fVxuZnVuY3Rpb24gTGUoYSxiKXt2YXIgYz17fSxkPXt9LGU9TWUsZj1iJiZiLl9fY3NzQnVpbGQ7VChiLGZ1bmN0aW9uKGIpe0tlKGUsYSxiLGYsZnVuY3Rpb24oZSl7QWUuY2FsbChhLlphfHxhLGUuUGEpJiYoZS5HYT9HZShiLGMpOkdlKGIsZCkpfSl9LG51bGwsITApO3JldHVybntOYTpkLEZhOmN9fVxuZnVuY3Rpb24gTmUoYSxiLGMsZCl7dmFyIGU9VihiKSxmPWNlKGUuaXMsZS5KKSxoPW5ldyBSZWdFeHAoXCIoPzpefFteLiNbOl0pXCIrKGIuZXh0ZW5kcz9cIlxcXFxcIitmLnNsaWNlKDAsLTEpK1wiXFxcXF1cIjpmKStcIigkfFsuOltcXFxccz4rfl0pXCIpO2U9WChiKS51O3ZhciBnPU9lKGUsZCk7cmV0dXJuIGFlKGIsZSxmdW5jdGlvbihiKXt2YXIgZT1cIlwiO2IuZ3x8RmUoYik7Yi5nLmNzc1RleHQmJihlPUllKGEsYi5nLmNzc1RleHQsYykpO2IuY3NzVGV4dD1lO2lmKCFRJiYhUmQoYikmJmIuY3NzVGV4dCl7dmFyIGs9ZT1iLmNzc1RleHQ7bnVsbD09Yi5qYSYmKGIuamE9TmQudGVzdChlKSk7aWYoYi5qYSlpZihudWxsPT1iLk8pe2IuTz1bXTtmb3IodmFyIHEgaW4gZylrPWdbcV0saz1rKGUpLGUhPT1rJiYoZT1rLGIuTy5wdXNoKHEpKX1lbHNle2ZvcihxPTA7cTxiLk8ubGVuZ3RoOysrcSlrPWdbYi5PW3FdXSxlPWsoZSk7az1lfWIuY3NzVGV4dD1rO2Iuaj1iLmp8fGIuc2VsZWN0b3I7ZT1cIi5cIitkO1xucT1iLmouc3BsaXQoXCIsXCIpO2s9MDtmb3IodmFyIEU9cS5sZW5ndGgsSjtrPEUmJihKPXFba10pO2srKylxW2tdPUoubWF0Y2goaCk/Si5yZXBsYWNlKGYsZSk6ZStcIiBcIitKO2Iuc2VsZWN0b3I9cS5qb2luKFwiLFwiKX19KX1mdW5jdGlvbiBPZShhLGIpe2E9YS5iO3ZhciBjPXt9O2lmKCFRJiZhKWZvcih2YXIgZD0wLGU9YVtkXTtkPGEubGVuZ3RoO2U9YVsrK2RdKXt2YXIgZj1lLGg9YjtmLmY9bmV3IFJlZ0V4cChmLmtleWZyYW1lc05hbWUsXCJnXCIpO2YuYT1mLmtleWZyYW1lc05hbWUrXCItXCIraDtmLmo9Zi5qfHxmLnNlbGVjdG9yO2Yuc2VsZWN0b3I9Zi5qLnJlcGxhY2UoZi5rZXlmcmFtZXNOYW1lLGYuYSk7Y1tlLmtleWZyYW1lc05hbWVdPVBlKGUpfXJldHVybiBjfWZ1bmN0aW9uIFBlKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYi5yZXBsYWNlKGEuZixhLmEpfX1cbmZ1bmN0aW9uIFFlKGEsYil7dmFyIGM9TWUsZD1RZChhKTthLnRleHRDb250ZW50PVMoZCxmdW5jdGlvbihhKXt2YXIgZD1hLmNzc1RleHQ9YS5wYXJzZWRDc3NUZXh0O2EuZyYmYS5nLmNzc1RleHQmJihkPWQucmVwbGFjZShEZCxcIlwiKS5yZXBsYWNlKEVkLFwiXCIpLGEuY3NzVGV4dD1JZShjLGQsYikpfSl9cC5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhEZS5wcm90b3R5cGUse2E6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVyblwieC1zY29wZVwifX19KTt2YXIgTWU9bmV3IERlO3ZhciBSZT17fSxTZT13aW5kb3cuY3VzdG9tRWxlbWVudHM7aWYoU2UmJiFRKXt2YXIgVGU9U2UuZGVmaW5lO1NlLmRlZmluZT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcIiBTaGFkeSBET00gc3R5bGVzIGZvciBcIithK1wiIFwiKSxlPWRvY3VtZW50LmhlYWQ7ZS5pbnNlcnRCZWZvcmUoZCwoVT9VLm5leHRTaWJsaW5nOm51bGwpfHxlLmZpcnN0Q2hpbGQpO1U9ZDtSZVthXT1kO3JldHVybiBUZS5jYWxsKFNlLGEsYixjKX19O2Z1bmN0aW9uIFVlKGEpe3RoaXMuY2FjaGU9e307dGhpcy5hPXZvaWQgMD09PWE/MTAwOmF9VWUucHJvdG90eXBlLnN0b3JlPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXRoaXMuY2FjaGVbYV18fFtdO2UucHVzaCh7czpiLHN0eWxlRWxlbWVudDpjLG86ZH0pO2UubGVuZ3RoPnRoaXMuYSYmZS5zaGlmdCgpO3RoaXMuY2FjaGVbYV09ZX07VWUucHJvdG90eXBlLmZldGNoPWZ1bmN0aW9uKGEsYixjKXtpZihhPXRoaXMuY2FjaGVbYV0pZm9yKHZhciBkPWEubGVuZ3RoLTE7MDw9ZDtkLS0pe3ZhciBlPWFbZF0sZjthOntmb3IoZj0wO2Y8Yy5sZW5ndGg7ZisrKXt2YXIgaD1jW2ZdO2lmKGUuc1toXSE9PWJbaF0pe2Y9ITE7YnJlYWsgYX19Zj0hMH1pZihmKXJldHVybiBlfX07ZnVuY3Rpb24gVmUoKXt9XG5mdW5jdGlvbiBXZShhKXtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtpZihjLnRhcmdldCE9PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmYy50YXJnZXQhPT1kb2N1bWVudC5oZWFkKWZvcih2YXIgZD0wO2Q8Yy5hZGRlZE5vZGVzLmxlbmd0aDtkKyspe3ZhciBlPWMuYWRkZWROb2Rlc1tkXTtpZihlLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpe3ZhciBmPWUuZ2V0Um9vdE5vZGUoKTt2YXIgaD1lO3ZhciBnPVtdO2guY2xhc3NMaXN0P2c9QXJyYXkuZnJvbShoLmNsYXNzTGlzdCk6aCBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50JiZoLmhhc0F0dHJpYnV0ZShcImNsYXNzXCIpJiYoZz1oLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLnNwbGl0KC9cXHMrLykpO2g9ZztnPWguaW5kZXhPZihXLmEpO2lmKChoPS0xPGc/aFtnKzFdOlwiXCIpJiZmPT09ZS5vd25lckRvY3VtZW50KVhkKGUsaCwhMCk7ZWxzZSBpZihmLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFJiZcbihmPWYuaG9zdCkpaWYoZj1WKGYpLmlzLGg9PT1mKWZvcihlPXdpbmRvdy5TaGFkeURPTS5uYXRpdmVNZXRob2RzLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlLFwiOm5vdCguXCIrVy5hK1wiKVwiKSxmPTA7ZjxlLmxlbmd0aDtmKyspWmQoZVtmXSxoKTtlbHNlIGgmJlhkKGUsaCwhMCksWGQoZSxmKX19fX1cbmlmKCFRKXt2YXIgWGU9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoV2UpLFllPWZ1bmN0aW9uKGEpe1hlLm9ic2VydmUoYSx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KX07aWYod2luZG93LmN1c3RvbUVsZW1lbnRzJiYhd2luZG93LmN1c3RvbUVsZW1lbnRzLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2spWWUoZG9jdW1lbnQpO2Vsc2V7dmFyIFplPWZ1bmN0aW9uKCl7WWUoZG9jdW1lbnQuYm9keSl9O3dpbmRvdy5IVE1MSW1wb3J0cz93aW5kb3cuSFRNTEltcG9ydHMud2hlblJlYWR5KFplKTpyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtpZihcImxvYWRpbmdcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUpe3ZhciBhPWZ1bmN0aW9uKCl7WmUoKTtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGEpfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGEpfWVsc2UgWmUoKX0pfVZlPWZ1bmN0aW9uKCl7V2UoWGUudGFrZVJlY29yZHMoKSl9fVxudmFyICRlPVZlO3ZhciBhZj17fTt2YXIgYmY9UHJvbWlzZS5yZXNvbHZlKCk7ZnVuY3Rpb24gY2YoYSl7aWYoYT1hZlthXSlhLl9hcHBseVNoaW1DdXJyZW50VmVyc2lvbj1hLl9hcHBseVNoaW1DdXJyZW50VmVyc2lvbnx8MCxhLl9hcHBseVNoaW1WYWxpZGF0aW5nVmVyc2lvbj1hLl9hcHBseVNoaW1WYWxpZGF0aW5nVmVyc2lvbnx8MCxhLl9hcHBseVNoaW1OZXh0VmVyc2lvbj0oYS5fYXBwbHlTaGltTmV4dFZlcnNpb258fDApKzF9ZnVuY3Rpb24gZGYoYSl7cmV0dXJuIGEuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9uPT09YS5fYXBwbHlTaGltTmV4dFZlcnNpb259ZnVuY3Rpb24gZWYoYSl7YS5fYXBwbHlTaGltVmFsaWRhdGluZ1ZlcnNpb249YS5fYXBwbHlTaGltTmV4dFZlcnNpb247YS5ifHwoYS5iPSEwLGJmLnRoZW4oZnVuY3Rpb24oKXthLl9hcHBseVNoaW1DdXJyZW50VmVyc2lvbj1hLl9hcHBseVNoaW1OZXh0VmVyc2lvbjthLmI9ITF9KSl9O3ZhciBmZj1udWxsLGdmPXdpbmRvdy5IVE1MSW1wb3J0cyYmd2luZG93LkhUTUxJbXBvcnRzLndoZW5SZWFkeXx8bnVsbCxoZjtmdW5jdGlvbiBqZihhKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtnZj9nZihhKTooZmZ8fChmZj1uZXcgUHJvbWlzZShmdW5jdGlvbihhKXtoZj1hfSksXCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9oZigpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsZnVuY3Rpb24oKXtcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlJiZoZigpfSkpLGZmLnRoZW4oZnVuY3Rpb24oKXthJiZhKCl9KSl9KX07dmFyIGtmPW5ldyBVZTtmdW5jdGlvbiBZKCl7dmFyIGE9dGhpczt0aGlzLkY9e307dGhpcy5jPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt2YXIgYj1uZXcgcWQ7Yi5ydWxlcz1bXTt0aGlzLmY9emUodGhpcy5jLG5ldyB5ZShiKSk7dGhpcy5sPSExO3RoaXMuYj10aGlzLmE9bnVsbDtqZihmdW5jdGlvbigpe2xmKGEpfSl9bj1ZLnByb3RvdHlwZTtuLnBhPWZ1bmN0aW9uKCl7JGUoKX07bi5EYT1mdW5jdGlvbihhKXtyZXR1cm4gUWQoYSl9O24uUmE9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoYSl9O1xubi5wcmVwYXJlVGVtcGxhdGU9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhLmYpe2EuZj0hMDthLm5hbWU9YjthLmV4dGVuZHM9YzthZltiXT1hO3ZhciBkPShkPWEuY29udGVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIikpP2QuZ2V0QXR0cmlidXRlKFwiY3NzLWJ1aWxkXCIpfHxcIlwiOlwiXCI7dmFyIGU9YS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVwiKTtmb3IodmFyIGY9W10saD0wO2g8ZS5sZW5ndGg7aCsrKXt2YXIgZz1lW2hdO2YucHVzaChnLnRleHRDb250ZW50KTtnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZyl9ZT1mLmpvaW4oXCJcIikudHJpbSgpO2M9e2lzOmIsZXh0ZW5kczpjLFdhOmR9O1F8fFhkKGEuY29udGVudCxiKTtsZih0aGlzKTtmPUxkLnRlc3QoZSl8fEpkLnRlc3QoZSk7TGQubGFzdEluZGV4PTA7SmQubGFzdEluZGV4PTA7ZT1yZChlKTtmJiZSJiZ0aGlzLmEmJnRoaXMuYS50cmFuc2Zvcm1SdWxlcyhlLGIpO2EuX3N0eWxlQXN0PWU7YS5sPWQ7ZD1bXTtSfHwoZD1FZShhLl9zdHlsZUFzdCkpO1xuaWYoIWQubGVuZ3RofHxSKWU9UT9hLmNvbnRlbnQ6bnVsbCxiPVJlW2JdLGY9YWUoYyxhLl9zdHlsZUFzdCksYj1mLmxlbmd0aD9TZChmLGMuaXMsZSxiKTp2b2lkIDAsYS5hPWI7YS5jPWR9fTtmdW5jdGlvbiBtZihhKXshYS5iJiZ3aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5DdXN0b21TdHlsZUludGVyZmFjZSYmKGEuYj13aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UsYS5iLnRyYW5zZm9ybUNhbGxiYWNrPWZ1bmN0aW9uKGIpe2EubmEoYil9LGEuYi52YWxpZGF0ZUNhbGxiYWNrPWZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7KGEuYi5lbnF1ZXVlZHx8YS5sKSYmYS5BKCl9KX0pfWZ1bmN0aW9uIGxmKGEpeyFhLmEmJndpbmRvdy5TaGFkeUNTUyYmd2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbSYmKGEuYT13aW5kb3cuU2hhZHlDU1MuQXBwbHlTaGltLGEuYS5pbnZhbGlkQ2FsbGJhY2s9Y2YpO21mKGEpfVxubi5BPWZ1bmN0aW9uKCl7bGYodGhpcyk7aWYodGhpcy5iKXt2YXIgYT10aGlzLmIucHJvY2Vzc1N0eWxlcygpO2lmKHRoaXMuYi5lbnF1ZXVlZCl7aWYoUilmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9dGhpcy5iLmdldFN0eWxlRm9yQ3VzdG9tU3R5bGUoYVtiXSk7aWYoYyYmUiYmdGhpcy5hKXt2YXIgZD1RZChjKTtsZih0aGlzKTt0aGlzLmEudHJhbnNmb3JtUnVsZXMoZCk7Yy50ZXh0Q29udGVudD1TKGQpfX1lbHNlIGZvcihuZih0aGlzLHRoaXMuYyx0aGlzLmYpLGI9MDtiPGEubGVuZ3RoO2IrKykoYz10aGlzLmIuZ2V0U3R5bGVGb3JDdXN0b21TdHlsZShhW2JdKSkmJlFlKGMsdGhpcy5mLnYpO3RoaXMuYi5lbnF1ZXVlZD0hMTt0aGlzLmwmJiFSJiZ0aGlzLnN0eWxlRG9jdW1lbnQoKX19fTtcbm4uc3R5bGVFbGVtZW50PWZ1bmN0aW9uKGEsYil7dmFyIGM9VihhKS5pcyxkPVgoYSk7aWYoIWQpe3ZhciBlPVYoYSk7ZD1lLmlzO2U9ZS5KO3ZhciBmPVJlW2RdO2Q9YWZbZF07aWYoZCl7dmFyIGg9ZC5fc3R5bGVBc3Q7dmFyIGc9ZC5jfWQ9emUoYSxuZXcgeWUoaCxmLGcsMCxlKSl9YSE9PXRoaXMuYyYmKHRoaXMubD0hMCk7YiYmKGQuQj1kLkJ8fHt9LE9iamVjdC5hc3NpZ24oZC5CLGIpKTtpZihSKXtpZihkLkIpe2I9ZC5CO2Zvcih2YXIgayBpbiBiKW51bGw9PT1rP2Euc3R5bGUucmVtb3ZlUHJvcGVydHkoayk6YS5zdHlsZS5zZXRQcm9wZXJ0eShrLGJba10pfWlmKCgoaz1hZltjXSl8fGE9PT10aGlzLmMpJiZrJiZrLmEmJiFkZihrKSl7aWYoZGYoayl8fGsuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uIT09ay5fYXBwbHlTaGltTmV4dFZlcnNpb24pbGYodGhpcyksdGhpcy5hJiZ0aGlzLmEudHJhbnNmb3JtUnVsZXMoay5fc3R5bGVBc3QsYyksay5hLnRleHRDb250ZW50PVxuYWUoYSxkLnUpLGVmKGspO1EmJihjPWEuc2hhZG93Um9vdCkmJihjLnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVwiKS50ZXh0Q29udGVudD1hZShhLGQudSkpO2QudT1rLl9zdHlsZUFzdH19ZWxzZSBpZihuZih0aGlzLGEsZCksZC5iYSYmZC5iYS5sZW5ndGgpe2M9ZDtrPVYoYSkuaXM7ZD0oYj1rZi5mZXRjaChrLGMudixjLmJhKSk/Yi5zdHlsZUVsZW1lbnQ6bnVsbDtoPWMubzsoZz1iJiZiLm8pfHwoZz10aGlzLkZba109KHRoaXMuRltrXXx8MCkrMSxnPWsrXCItXCIrZyk7Yy5vPWc7Zz1jLm87ZT1NZTtlPWQ/ZC50ZXh0Q29udGVudHx8XCJcIjpOZShlLGEsYy52LGcpO2Y9WChhKTt2YXIgbD1mLmE7bCYmIVEmJmwhPT1kJiYobC5fdXNlQ291bnQtLSwwPj1sLl91c2VDb3VudCYmbC5wYXJlbnROb2RlJiZsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobCkpO1E/Zi5hPyhmLmEudGV4dENvbnRlbnQ9ZSxkPWYuYSk6ZSYmKGQ9U2QoZSxnLGEuc2hhZG93Um9vdCxmLmIpKTpkP2QucGFyZW50Tm9kZXx8XG4oQ2UmJi0xPGUuaW5kZXhPZihcIkBtZWRpYVwiKSYmKGQudGV4dENvbnRlbnQ9ZSksVGQoZCxudWxsLGYuYikpOmUmJihkPVNkKGUsZyxudWxsLGYuYikpO2QmJihkLl91c2VDb3VudD1kLl91c2VDb3VudHx8MCxmLmEhPWQmJmQuX3VzZUNvdW50KyssZi5hPWQpO2c9ZDtRfHwoZD1jLm8sZj1lPWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIsaCYmKGY9ZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxccyp4LXNjb3BlXFxcXHMqXCIraCtcIlxcXFxzKlwiLFwiZ1wiKSxcIiBcIikpLGYrPShmP1wiIFwiOlwiXCIpK1wieC1zY29wZSBcIitkLGUhPT1mJiZWZChhLGYpKTtifHxrZi5zdG9yZShrLGMudixnLGMubyl9fTtmdW5jdGlvbiBvZihhLGIpe3JldHVybihiPWIuZ2V0Um9vdE5vZGUoKS5ob3N0KT9YKGIpP2I6b2YoYSxiKTphLmN9XG5mdW5jdGlvbiBuZihhLGIsYyl7YT1vZihhLGIpO3ZhciBkPVgoYSk7YT1PYmplY3QuY3JlYXRlKGQudnx8bnVsbCk7dmFyIGU9TGUoYixjLnUpO2I9SmUoZC51LGIpLnM7T2JqZWN0LmFzc2lnbihhLGUuRmEsYixlLk5hKTtiPWMuQjtmb3IodmFyIGYgaW4gYilpZigoZT1iW2ZdKXx8MD09PWUpYVtmXT1lO2Y9TWU7Yj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhKTtmb3IoZT0wO2U8Yi5sZW5ndGg7ZSsrKWQ9YltlXSxhW2RdPUhlKGYsYVtkXSxhKTtjLnY9YX1uLnN0eWxlRG9jdW1lbnQ9ZnVuY3Rpb24oYSl7dGhpcy5zdHlsZVN1YnRyZWUodGhpcy5jLGEpfTtcbm4uc3R5bGVTdWJ0cmVlPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5zaGFkb3dSb290OyhjfHxhPT09dGhpcy5jKSYmdGhpcy5zdHlsZUVsZW1lbnQoYSxiKTtpZihiPWMmJihjLmNoaWxkcmVufHxjLmNoaWxkTm9kZXMpKWZvcihhPTA7YTxiLmxlbmd0aDthKyspdGhpcy5zdHlsZVN1YnRyZWUoYlthXSk7ZWxzZSBpZihhPWEuY2hpbGRyZW58fGEuY2hpbGROb2Rlcylmb3IoYj0wO2I8YS5sZW5ndGg7YisrKXRoaXMuc3R5bGVTdWJ0cmVlKGFbYl0pfTtuLm5hPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1RZChhKTtUKGMsZnVuY3Rpb24oYSl7aWYoUSl2ZShhKTtlbHNle3ZhciBjPVc7YS5zZWxlY3Rvcj1hLnBhcnNlZFNlbGVjdG9yO3ZlKGEpO2Euc2VsZWN0b3I9YS5qPWVlKGMsYSxjLmMsdm9pZCAwLHZvaWQgMCl9UiYmKGxmKGIpLGIuYSYmYi5hLnRyYW5zZm9ybVJ1bGUoYSkpfSk7Uj9hLnRleHRDb250ZW50PVMoYyk6dGhpcy5mLnUucnVsZXMucHVzaChjKX07XG5uLmdldENvbXB1dGVkU3R5bGVWYWx1ZT1mdW5jdGlvbihhLGIpe3ZhciBjO1J8fChjPShYKGEpfHxYKG9mKHRoaXMsYSkpKS52W2JdKTtyZXR1cm4oYz1jfHx3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhKS5nZXRQcm9wZXJ0eVZhbHVlKGIpKT9jLnRyaW0oKTpcIlwifTtuLlFhPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5nZXRSb290Tm9kZSgpO2I9Yj9iLnNwbGl0KC9cXHMvKTpbXTtjPWMuaG9zdCYmYy5ob3N0LmxvY2FsTmFtZTtpZighYyl7dmFyIGQ9YS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtpZihkKXtkPWQuc3BsaXQoL1xccy8pO2Zvcih2YXIgZT0wO2U8ZC5sZW5ndGg7ZSsrKWlmKGRbZV09PT1XLmEpe2M9ZFtlKzFdO2JyZWFrfX19YyYmYi5wdXNoKFcuYSxjKTtSfHwoYz1YKGEpKSYmYy5vJiZiLnB1c2goTWUuYSxjLm8pO1ZkKGEsYi5qb2luKFwiIFwiKSl9O24uemE9ZnVuY3Rpb24oYSl7cmV0dXJuIFgoYSl9O1kucHJvdG90eXBlLmZsdXNoPVkucHJvdG90eXBlLnBhO1xuWS5wcm90b3R5cGUucHJlcGFyZVRlbXBsYXRlPVkucHJvdG90eXBlLnByZXBhcmVUZW1wbGF0ZTtZLnByb3RvdHlwZS5zdHlsZUVsZW1lbnQ9WS5wcm90b3R5cGUuc3R5bGVFbGVtZW50O1kucHJvdG90eXBlLnN0eWxlRG9jdW1lbnQ9WS5wcm90b3R5cGUuc3R5bGVEb2N1bWVudDtZLnByb3RvdHlwZS5zdHlsZVN1YnRyZWU9WS5wcm90b3R5cGUuc3R5bGVTdWJ0cmVlO1kucHJvdG90eXBlLmdldENvbXB1dGVkU3R5bGVWYWx1ZT1ZLnByb3RvdHlwZS5nZXRDb21wdXRlZFN0eWxlVmFsdWU7WS5wcm90b3R5cGUuc2V0RWxlbWVudENsYXNzPVkucHJvdG90eXBlLlFhO1kucHJvdG90eXBlLl9zdHlsZUluZm9Gb3JOb2RlPVkucHJvdG90eXBlLnphO1kucHJvdG90eXBlLnRyYW5zZm9ybUN1c3RvbVN0eWxlRm9yRG9jdW1lbnQ9WS5wcm90b3R5cGUubmE7WS5wcm90b3R5cGUuZ2V0U3R5bGVBc3Q9WS5wcm90b3R5cGUuRGE7WS5wcm90b3R5cGUuc3R5bGVBc3RUb1N0cmluZz1ZLnByb3RvdHlwZS5SYTtcblkucHJvdG90eXBlLmZsdXNoQ3VzdG9tU3R5bGVzPVkucHJvdG90eXBlLkE7T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoWS5wcm90b3R5cGUse25hdGl2ZVNoYWRvdzp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFF9fSxuYXRpdmVDc3M6e2dldDpmdW5jdGlvbigpe3JldHVybiBSfX19KTt2YXIgWj1uZXcgWSxwZixxZjt3aW5kb3cuU2hhZHlDU1MmJihwZj13aW5kb3cuU2hhZHlDU1MuQXBwbHlTaGltLHFmPXdpbmRvdy5TaGFkeUNTUy5DdXN0b21TdHlsZUludGVyZmFjZSk7d2luZG93LlNoYWR5Q1NTPXtTY29waW5nU2hpbTpaLHByZXBhcmVUZW1wbGF0ZTpmdW5jdGlvbihhLGIsYyl7Wi5BKCk7Wi5wcmVwYXJlVGVtcGxhdGUoYSxiLGMpfSxzdHlsZVN1YnRyZWU6ZnVuY3Rpb24oYSxiKXtaLkEoKTtaLnN0eWxlU3VidHJlZShhLGIpfSxzdHlsZUVsZW1lbnQ6ZnVuY3Rpb24oYSl7Wi5BKCk7Wi5zdHlsZUVsZW1lbnQoYSl9LHN0eWxlRG9jdW1lbnQ6ZnVuY3Rpb24oYSl7Wi5BKCk7Wi5zdHlsZURvY3VtZW50KGEpfSxnZXRDb21wdXRlZFN0eWxlVmFsdWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gWi5nZXRDb21wdXRlZFN0eWxlVmFsdWUoYSxiKX0sbmF0aXZlQ3NzOlIsbmF0aXZlU2hhZG93OlF9O3BmJiYod2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbT1wZik7XG5xZiYmKHdpbmRvdy5TaGFkeUNTUy5DdXN0b21TdHlsZUludGVyZmFjZT1xZik7LypcblxuIENvcHlyaWdodCAoYykgMjAxNCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbnZhciByZj13aW5kb3cuY3VzdG9tRWxlbWVudHMsc2Y9d2luZG93LkhUTUxJbXBvcnRzLHRmPXdpbmRvdy5IVE1MVGVtcGxhdGVFbGVtZW50O3dpbmRvdy5XZWJDb21wb25lbnRzPXdpbmRvdy5XZWJDb21wb25lbnRzfHx7fTtpZihyZiYmcmYucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayl7dmFyIHVmLHZmPWZ1bmN0aW9uKCl7aWYodWYpe3RmLkFhJiZ0Zi5BYSh3aW5kb3cuZG9jdW1lbnQpO3ZhciBhPXVmO3VmPW51bGw7YSgpO3JldHVybiEwfX0sd2Y9c2Yud2hlblJlYWR5O3JmLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2soZnVuY3Rpb24oYSl7dWY9YTt3Zih2Zil9KTtzZi53aGVuUmVhZHk9ZnVuY3Rpb24oYSl7d2YoZnVuY3Rpb24oKXt2ZigpP3NmLndoZW5SZWFkeShhKTphKCl9KX19XG5zZi53aGVuUmVhZHkoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt3aW5kb3cuV2ViQ29tcG9uZW50cy5yZWFkeT0hMDtkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIldlYkNvbXBvbmVudHNSZWFkeVwiLHtidWJibGVzOiEwfSkpfSl9KTt2YXIgeGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3hmLnRleHRDb250ZW50PVwiYm9keSB7dHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluIDAuMnM7IH0gXFxuYm9keVt1bnJlc29sdmVkXSB7b3BhY2l0eTogMDsgZGlzcGxheTogYmxvY2s7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsgfSBcXG5cIjt2YXIgeWY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7eWYuaW5zZXJ0QmVmb3JlKHhmLHlmLmZpcnN0Q2hpbGQpO30pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdlYmNvbXBvbmVudHMtaGktc2QtY2UuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Ad2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvd2ViY29tcG9uZW50cy1oaS1zZC1jZS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXG5cdFx0ZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuXHJcbmltcG9ydCB7IFBvbHlnb25GaWxsZXIgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9Qb2x5Z29uRmlsbGVyJztcclxuXHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuXHJcbmltcG9ydCB7IENsb3Nlc3RQYXRoRmluZGVyIH0gZnJvbSAnc2VydmljZXMvQ2xvc2VzdFBhdGhGaW5kZXInO1xyXG5pbXBvcnQgeyBJbWFnZURvd25sb2FkZXIgfSBmcm9tICdzZXJ2aWNlcy9JbWFnZURvd25sb2FkZXInO1xyXG5pbXBvcnQgeyBJbnB1dERhdGFJbml0aWFsaXplciB9IGZyb20gJ3NlcnZpY2VzL0lucHV0RGF0YUluaXRpYWxpemVyJztcclxuaW1wb3J0IHsgTGlnaHRTaW11bGF0b3IgfSBmcm9tICdzZXJ2aWNlcy9MaWdodFNpbXVsYXRvcic7XHJcbmltcG9ydCB7IFBvbHlnb25DbGlwcGVyIH0gZnJvbSAnc2VydmljZXMvUG9seWdvbkNsaXBwZXInO1xyXG5cclxuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAndWkvVUlDb250cm9sbGVyJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckZpbmlzaGVkRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRmluaXNoZWRFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24ge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICBwcml2YXRlIHVpQ29udHJvbGxlcjogVUlDb250cm9sbGVyO1xyXG4gIHByaXZhdGUgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gIHByaXZhdGUgcG9seWdvbkZpbGxlcjogUG9seWdvbkZpbGxlcjtcclxuICBwcml2YXRlIHBvbHlnb25MYXllcjogTGF5ZXI7XHJcblxyXG4gIHByaXZhdGUgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgcHJpdmF0ZSBsaWdodFNpbXVsYXRvcjogTGlnaHRTaW11bGF0b3I7XHJcblxyXG4gIHByaXZhdGUgaXNSZW5kZXJpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIGlzTmV4dFJlbmRlclF1ZXVlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gbmV3IEV2ZW50QWdncmVnYXRvcigpO1xyXG4gICAgdGhpcy5pbWFnZURvd25sb2FkZXIgPSBuZXcgSW1hZ2VEb3dubG9hZGVyKHsgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvciB9KTtcclxuICAgIHRoaXMucG9seWdvbkZpbGxlciA9IG5ldyBQb2x5Z29uRmlsbGVyKHtcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpZ2h0U2ltdWxhdG9yID0gbmV3IExpZ2h0U2ltdWxhdG9yKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgY2VudGVyUG9pbnQ6IG5ldyBQb2ludCh0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgcG9seWdvbkZpbGxlcjogdGhpcy5wb2x5Z29uRmlsbGVyXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhZ2UgPSBuZXcgU3RhZ2UoKTtcclxuXHJcbiAgICB0aGlzLnVpQ29udHJvbGxlciA9IG5ldyBVSUNvbnRyb2xsZXIoe1xyXG4gICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIGltYWdlRG93bmxvYWRlcjogdGhpcy5pbWFnZURvd25sb2FkZXIsXHJcbiAgICAgIHBvbHlnb25DbGlwcGVyOiBuZXcgUG9seWdvbkNsaXBwZXIoKSxcclxuICAgICAgY2xvc2VzdFBhdGhGaW5kZXI6IG5ldyBDbG9zZXN0UGF0aEZpbmRlcigpXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uUmVuZGVyRXZlbnQgPSB0aGlzLm9uUmVuZGVyRXZlbnQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RhcnRSZW5kZXJpbmcgPSB0aGlzLnN0YXJ0UmVuZGVyaW5nLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRmlsbGluZ0ZpbmlzaGVkID0gdGhpcy5vbkZpbGxpbmdGaW5pc2hlZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGluaXQoKSB7XHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIuZmlsbGluZ0ZpbmlzaGVkQ2FsbGJhY2sgPSB0aGlzLm9uRmlsbGluZ0ZpbmlzaGVkO1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBuZXcgTGF5ZXIoTEVYLlBPTFlHT05fTEFZRVJfTkFNRSk7XHJcbiAgICB0aGlzLnN0YWdlLmxheWVycy5wdXNoKHRoaXMucG9seWdvbkxheWVyKTtcclxuXHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIuaW5pdCgpO1xyXG4gICAgdGhpcy5saWdodFNpbXVsYXRvci5pbml0KCk7XHJcbiAgICB0aGlzLnVpQ29udHJvbGxlci5pbml0KCk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgY29uc3QgaW5wdXREYXRhSW5pdGlhbGl6ZXIgPSBuZXcgSW5wdXREYXRhSW5pdGlhbGl6ZXIoe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBpbWFnZURvd25sb2FkZXI6IHRoaXMuaW1hZ2VEb3dubG9hZGVyLFxyXG4gICAgICBwb2x5Z29uTGF5ZXI6IHRoaXMucG9seWdvbkxheWVyXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBpbnB1dERhdGFJbml0aWFsaXplci5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMucG9seWdvbkZpbGxlci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmxpZ2h0U2ltdWxhdG9yLmRlc3Ryb3koKTtcclxuICAgIHRoaXMudWlDb250cm9sbGVyLmRlc3Ryb3koKTtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25SZW5kZXJFdmVudChldmVudDogUmVuZGVyRXZlbnQpIHtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzUmVuZGVyaW5nKSB7XHJcbiAgICAgIHRoaXMuaXNOZXh0UmVuZGVyUXVldWVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzUmVuZGVyaW5nID0gdHJ1ZTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnN0YXJ0UmVuZGVyaW5nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRSZW5kZXJpbmcoKSB7XHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIuZmlsbFBvbHlnb25zKDxQb2x5Z29uW10+dGhpcy5wb2x5Z29uTGF5ZXIucGF0aHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZpbGxpbmdGaW5pc2hlZCgpIHtcclxuICAgIHRoaXMuc3RhZ2UucmVuZGVyKHRoaXMucmVuZGVyZXIpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRmluaXNoZWRFdmVudCgpKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc05leHRSZW5kZXJRdWV1ZWQpIHtcclxuICAgICAgdGhpcy5pc05leHRSZW5kZXJRdWV1ZWQgPSBmYWxzZTtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RhcnRSZW5kZXJpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc1JlbmRlcmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUmVuZGVyRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUmVuZGVyRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoUmVuZGVyRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUmVuZGVyRXZlbnQpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9BcHBsaWNhdGlvbi50cyIsImltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIaXRUZXN0UmVzdWx0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbGluZTogTGluZTtcclxuICBwdWJsaWMgcGF0aD86IFBhdGg7XHJcbiAgcHVibGljIGxheWVyPzogTGF5ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpbmU6IExpbmUsIHBhdGg/OiBQYXRoLCBsYXllcj86IExheWVyKSB7XHJcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0hpdFRlc3RSZXN1bHQudHMiLCJpbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnY29tbW9uL1BvbHlnb24nO1xyXG5cclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtcclxuICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEludGVuc2l0eUV2ZW50LFxyXG4gIE5ld0xpZ2h0Q29sb3JFdmVudCxcclxuICBOZXdMaWdodFBvc2l0aW9uRXZlbnQsXHJcbiAgTmV3TGlnaHRUeXBlRXZlbnQsXHJcbiAgTmV3Tm9ybWFsTWFwRXZlbnRcclxufSBmcm9tICdldmVudHMvaW5wdXQtZGF0YSc7XHJcblxyXG5pbXBvcnQgeyBBY3RpdmVFZGdlIH0gZnJvbSAncG9seWdvbi1maWxsZXIvQWN0aXZlRWRnZSc7XHJcbmltcG9ydCB7IEZpbGxTdHJpcCB9IGZyb20gJ3BvbHlnb24tZmlsbGVyL0ZpbGxTdHJpcCc7XHJcbmltcG9ydCB7IEZpbGxXb3JrZXJNZXNzYWdlVHlwZSB9IGZyb20gJ3BvbHlnb24tZmlsbGVyL0ZpbGxXb3JrZXJNZXNzYWdlVHlwZSc7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5jb25zdCBGSUxMX1dPUktFUl9VUkwgPSAnZmlsbFdvcmtlci5qcyc7XHJcblxyXG5pbnRlcmZhY2UgUG9seWdvbkZpbGxlckRlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvbHlnb25GaWxsZXIgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwdWJsaWMgZmlsbGluZ0ZpbmlzaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcHJveHlFdmVudHMgPSBbXHJcbiAgICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LFxyXG4gICAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgICBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudCxcclxuICAgIE5ld0xpZ2h0Q29sb3JFdmVudCxcclxuICAgIE5ld0xpZ2h0UG9zaXRpb25FdmVudCxcclxuICAgIE5ld0xpZ2h0VHlwZUV2ZW50LFxyXG4gICAgTmV3Tm9ybWFsTWFwRXZlbnRcclxuICBdO1xyXG5cclxuICBwcml2YXRlIHJlbmRlcmluZ0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgcHJpdmF0ZSBmaWxsV29ya2VyOiBXb3JrZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9seWdvbkZpbGxlckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5jYW52YXMgPSBkZXBlbmRlbmNpZXMuY2FudmFzO1xyXG5cclxuICAgIHRoaXMub25GaWxsV29ya2VyTWVzc2FnZSA9IHRoaXMub25GaWxsV29ya2VyTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkZpbGxXb3JrZXJFcnJvciA9IHRoaXMub25GaWxsV29ya2VyRXJyb3IuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2VuZEFwcEZpbGxEYXRhRXZlbnQgPSB0aGlzLnNlbmRBcHBGaWxsRGF0YUV2ZW50LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5qZWN0Q2FudmFzUmVuZGVyaW5nQ29udGV4dChyZW5kZXJpbmdDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dCA9IHJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMucHJveHlFdmVudHMuZm9yRWFjaChldmVudCA9PlxyXG4gICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LmV2ZW50VHlwZSwgdGhpcy5zZW5kQXBwRmlsbERhdGFFdmVudClcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5maWxsV29ya2VyID0gbmV3IFdvcmtlcihGSUxMX1dPUktFUl9VUkwpO1xyXG4gICAgdGhpcy5maWxsV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgdHlwZTogRmlsbFdvcmtlck1lc3NhZ2VUeXBlLkNhbnZhc0luZm8sXHJcbiAgICAgIHdpZHRoOiB0aGlzLmNhbnZhcy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmNhbnZhcy5oZWlnaHRcclxuICAgIH0pO1xyXG4gICAgdGhpcy5maWxsV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uRmlsbFdvcmtlck1lc3NhZ2UpO1xyXG4gICAgdGhpcy5maWxsV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5vbkZpbGxXb3JrZXJFcnJvcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMucHJveHlFdmVudHMuZm9yRWFjaChldmVudCA9PlxyXG4gICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LmV2ZW50VHlwZSwgdGhpcy5zZW5kQXBwRmlsbERhdGFFdmVudClcclxuICAgICk7XHJcbiAgICB0aGlzLmZpbGxXb3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25GaWxsV29ya2VyTWVzc2FnZSk7XHJcbiAgICB0aGlzLmZpbGxXb3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLm9uRmlsbFdvcmtlckVycm9yKTtcclxuICAgIHRoaXMuZmlsbFdvcmtlci50ZXJtaW5hdGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaWxsUG9seWdvbnMocG9seWdvbnM6IFBvbHlnb25bXSkge1xyXG4gICAgY29uc3QgZmlsbFdvcmtlciA9IHRoaXMuZmlsbFdvcmtlcjtcclxuXHJcbiAgICBmaWxsV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgdHlwZTogRmlsbFdvcmtlck1lc3NhZ2VUeXBlLlN0YXJ0RmlsbFxyXG4gICAgfSk7XHJcblxyXG4gICAgcG9seWdvbnMuZm9yRWFjaChwb2x5Z29uID0+IHRoaXMuZmlsbFBvbHlnb24ocG9seWdvbikpO1xyXG5cclxuICAgIGZpbGxXb3JrZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICB0eXBlOiBGaWxsV29ya2VyTWVzc2FnZVR5cGUuRW5kRmlsbFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRmlsbFdvcmtlck1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xyXG4gICAgY29uc3QgaW1hZ2VEYXRhOiBJbWFnZURhdGEgPSBldmVudC5kYXRhO1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xyXG5cclxuICAgIGlmICh0aGlzLmZpbGxpbmdGaW5pc2hlZENhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMuZmlsbGluZ0ZpbmlzaGVkQ2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25GaWxsV29ya2VyRXJyb3IoZXZlbnQ6IEVycm9yRXZlbnQpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0ZpbGwgd29ya2VyIGVycm9yJywgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaWxsUG9seWdvbihwb2x5Z29uOiBQb2x5Z29uKSB7XHJcbiAgICBjb25zdCBmaWxsU3RyaXBzID0gdGhpcy5nZXRQb2x5Z29uRmlsbFN0cmlwcyhwb2x5Z29uKTtcclxuXHJcbiAgICB0aGlzLmZpbGxXb3JrZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICB0eXBlOiBGaWxsV29ya2VyTWVzc2FnZVR5cGUuRmlsbFN0cmlwcyxcclxuICAgICAgZmlsbFN0cmlwc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBvbHlnb25GaWxsU3RyaXBzKHBvbHlnb246IFBvbHlnb24pOiBGaWxsU3RyaXBbXSB7XHJcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHBvbHlnb24uZ2V0VmVydGljZXMoKTtcclxuICAgIGNvbnN0IHZlcnRpY2VzQ291bnQgPSBwb2x5Z29uLmdldFZlcnRpY2VzQ291bnQoKTtcclxuXHJcbiAgICAvLyBpbmRbMCAuLiBuLTFdXHJcbiAgICBjb25zdCBzb3J0ZWRWZXJ0ZXhJbmRpY2VzID0gdmVydGljZXMubWFwKChfdmVydGV4LCBpbmRleCkgPT4gaW5kZXgpO1xyXG4gICAgc29ydGVkVmVydGV4SW5kaWNlcy5zb3J0KChpLCBqKSA9PiB2ZXJ0aWNlc1tpXS55IC0gdmVydGljZXNbal0ueSk7XHJcblxyXG4gICAgY29uc3QgeU1pbiA9IHZlcnRpY2VzW3NvcnRlZFZlcnRleEluZGljZXNbMF1dLnk7XHJcbiAgICBjb25zdCB5TWF4ID0gdmVydGljZXNbc29ydGVkVmVydGV4SW5kaWNlc1t2ZXJ0aWNlc0NvdW50IC0gMV1dLnk7XHJcblxyXG4gICAgLy8gQUVUXHJcbiAgICBjb25zdCBhY3RpdmVFZGdlVGFibGU6IEFjdGl2ZUVkZ2VbXSA9IFtdO1xyXG4gICAgbGV0IGsgPSAwO1xyXG4gICAgbGV0IHByZXZpb3VzWSA9IHlNaW47XHJcblxyXG4gICAgY29uc3QgZmlsbFN0cmlwczogRmlsbFN0cmlwW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCB5ID0geU1pbiArIDE7IHkgPD0geU1heDsgeSArPSAxKSB7XHJcbiAgICAgIGZvciAoOyBrIDwgdmVydGljZXNDb3VudDsgayArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgdmVydGV4SW5kZXggPSBzb3J0ZWRWZXJ0ZXhJbmRpY2VzW2tdO1xyXG4gICAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRpY2VzW3ZlcnRleEluZGV4XTtcclxuICAgICAgICBpZiAodmVydGV4LnkgIT09IHByZXZpb3VzWSkge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcmV2aW91c1ZlcnRleEluZGV4ID0gcG9seWdvbi5nZXRQcmV2aW91c1BvaW50SW5kZXgodmVydGV4SW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmVydGV4ID0gdmVydGljZXNbcHJldmlvdXNWZXJ0ZXhJbmRleF07XHJcbiAgICAgICAgaWYgKHByZXZpb3VzVmVydGV4LnkgPj0gdmVydGV4LnkpIHtcclxuICAgICAgICAgIGNvbnN0IHByZXZpb3VzRWRnZSA9IG5ldyBBY3RpdmVFZGdlKHZlcnRleCwgcHJldmlvdXNWZXJ0ZXgpO1xyXG4gICAgICAgICAgYWN0aXZlRWRnZVRhYmxlLnB1c2gocHJldmlvdXNFZGdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgZWRnZUluZGV4ID0gYWN0aXZlRWRnZVRhYmxlLmZpbmRJbmRleChcclxuICAgICAgICAgICAgZWRnZSA9PiBlZGdlLmxvd2VyUG9pbnQgPT09IHByZXZpb3VzVmVydGV4ICYmIGVkZ2UuaGlnaGVyUG9pbnQgPT09IHZlcnRleFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zcGxpY2UoZWRnZUluZGV4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRWZXJ0ZXhJbmRleCA9IHBvbHlnb24uZ2V0TmV4dFBvaW50SW5kZXgodmVydGV4SW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IG5leHRWZXJ0ZXggPSB2ZXJ0aWNlc1tuZXh0VmVydGV4SW5kZXhdO1xyXG4gICAgICAgIGlmIChuZXh0VmVydGV4LnkgPj0gdmVydGV4LnkpIHtcclxuICAgICAgICAgIGNvbnN0IG5leHRFZGdlID0gbmV3IEFjdGl2ZUVkZ2UodmVydGV4LCBuZXh0VmVydGV4KTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5wdXNoKG5leHRFZGdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgZWRnZUluZGV4ID0gYWN0aXZlRWRnZVRhYmxlLmZpbmRJbmRleChcclxuICAgICAgICAgICAgZWRnZSA9PiBlZGdlLmxvd2VyUG9pbnQgPT09IG5leHRWZXJ0ZXggJiYgZWRnZS5oaWdoZXJQb2ludCA9PT0gdmVydGV4XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYWN0aXZlRWRnZVRhYmxlLnNwbGljZShlZGdlSW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByZXZpb3VzWSA+PSAwICYmIHByZXZpb3VzWSA8IHRoaXMuY2FudmFzLmhlaWdodCkge1xyXG4gICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zb3J0KChlMSwgZTIpID0+IGUxLnggLSBlMi54KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmVFZGdlVGFibGUubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgIGNvbnN0IGUxID0gYWN0aXZlRWRnZVRhYmxlW2ldO1xyXG4gICAgICAgICAgY29uc3QgZTIgPSBhY3RpdmVFZGdlVGFibGVbaSArIDFdO1xyXG5cclxuICAgICAgICAgIGZpbGxTdHJpcHMucHVzaCh7XHJcbiAgICAgICAgICAgIHk6IHByZXZpb3VzWSxcclxuICAgICAgICAgICAgZnJvbVg6IGUxLngsXHJcbiAgICAgICAgICAgIHRvWDogZTIueFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBhY3RpdmVFZGdlVGFibGUuZm9yRWFjaChlZGdlID0+IGVkZ2UubmV4dFNjYW5MaW5lKCkpO1xyXG4gICAgICBwcmV2aW91c1kgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmaWxsU3RyaXBzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZW5kQXBwRmlsbERhdGFFdmVudChldmVudDogQXBwRXZlbnQpIHtcclxuICAgIHRoaXMuZmlsbFdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5OZXdGaWxsRGF0YUV2ZW50LFxyXG4gICAgICBldmVudFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3BvbHlnb24tZmlsbGVyL1BvbHlnb25GaWxsZXIudHMiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWN0aXZlRWRnZSB7XHJcbiAgcHVibGljIGxvd2VyUG9pbnQ6IFBvaW50O1xyXG4gIHB1YmxpYyBoaWdoZXJQb2ludDogUG9pbnQ7XHJcblxyXG4gIHByaXZhdGUgaW52ZXJzZVNsb3BlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihsb3dlclBvaW50OiBQb2ludCwgaGlnaGVyUG9pbnQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLmxvd2VyUG9pbnQgPSBsb3dlclBvaW50O1xyXG4gICAgdGhpcy5oaWdoZXJQb2ludCA9IGhpZ2hlclBvaW50O1xyXG5cclxuICAgIHRoaXMuX3ggPSB0aGlzLmxvd2VyUG9pbnQueDtcclxuICAgIHRoaXMuY2FsY3VsYXRlU2xvcGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeCgpIHtcclxuICAgIHJldHVybiB0aGlzLl94O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5leHRTY2FuTGluZSgpIHtcclxuICAgIHRoaXMuX3ggKz0gdGhpcy5pbnZlcnNlU2xvcGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVNsb3BlKCkge1xyXG4gICAgaWYgKHRoaXMuaGlnaGVyUG9pbnQueSA9PT0gdGhpcy5sb3dlclBvaW50LnkpIHtcclxuICAgICAgdGhpcy5pbnZlcnNlU2xvcGUgPSA5OTk5OTk5OTk5OTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW52ZXJzZVNsb3BlID1cclxuICAgICAgICAodGhpcy5oaWdoZXJQb2ludC54IC0gdGhpcy5sb3dlclBvaW50LngpIC8gKHRoaXMuaGlnaGVyUG9pbnQueSAtIHRoaXMubG93ZXJQb2ludC55KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcG9seWdvbi1maWxsZXIvQWN0aXZlRWRnZS50cyIsImltcG9ydCB7IENPTE9SUyB9IGZyb20gJ2NvbW1vbi9DT0xPUlMnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmltcG9ydCB7IFBvbHlnb25GaWxsZXIgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9Qb2x5Z29uRmlsbGVyJztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmludGVyZmFjZSBSZW5kZXJlckRlcGVuZGVuY2llcyB7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwb2x5Z29uRmlsbGVyOiBQb2x5Z29uRmlsbGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlbmRlcmluZ0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwcml2YXRlIHBvbHlnb25GaWxsZXI6IFBvbHlnb25GaWxsZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUmVuZGVyZXJEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKGNvbnRleHQgPT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGNhbnZhcyAyZCByZW5kZXJpbmcgY29udGV4dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuZm9udCA9IGNvbmZpZ3VyYXRpb24uY2FudmFzRm9udDtcclxuXHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkZpbGxlcjtcclxuICAgIHRoaXMucG9seWdvbkZpbGxlci5pbmplY3RDYW52YXNSZW5kZXJpbmdDb250ZXh0KHRoaXMucmVuZGVyaW5nQ29udGV4dCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LnN0cm9rZVN0eWxlID0gQ09MT1JTLkJMQUNLLmZpbGxTdHlsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3UG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLmRyYXdQaXhlbChwb2ludC54LCBwb2ludC55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3UGl4ZWwoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3TGluZShsaW5lOiBMaW5lLCBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXMpOiB2b2lkO1xyXG4gIHB1YmxpYyBkcmF3TGluZShzdGFydFBvaW50OiBQb2ludCwgZW5kUG9pbnQ6IFBvaW50LCBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXMpOiB2b2lkO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgcHVibGljIGRyYXdMaW5lKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICBpZiAoYXJnc1swXSBpbnN0YW5jZW9mIExpbmUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZHJhd0xpbmVCZXR3ZWVuUG9pbnRzKGFyZ3NbMF0ucDEsIGFyZ3NbMF0ucDIsIGFyZ3NbMV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZHJhd0xpbmVCZXR3ZWVuUG9pbnRzKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRyYXdQYXRoKHBhdGg6IFBhdGgpIHtcclxuICAgIGNvbnN0IHBhdGhMaW5lUHJvcGVydGllcyA9IHBhdGguZ2V0TGluZVByb3BlcnRpZXMoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgcGF0aC5nZXRMaW5lSXRlcmF0b3IoKSkge1xyXG4gICAgICB0aGlzLmRyYXdMaW5lKGxpbmUsIHBhdGhMaW5lUHJvcGVydGllcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmlsbFRleHQodGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XHJcbiAgcHVibGljIGZpbGxUZXh0KHRleHQ6IHN0cmluZywgcG9pbnQ6IFBvaW50KTogdm9pZDtcclxuICBwdWJsaWMgZmlsbFRleHQodGV4dDogc3RyaW5nLCBwb2ludE9yWDogbnVtYmVyIHwgUG9pbnQsIHk/OiBudW1iZXIpIHtcclxuICAgIGxldCB4ID0gcG9pbnRPclg7XHJcbiAgICBpZiAodHlwZW9mIHBvaW50T3JYID09PSAnb2JqZWN0JyAmJiBwb2ludE9yWCBpbnN0YW5jZW9mIFBvaW50KSB7XHJcbiAgICAgIHggPSBwb2ludE9yWC54O1xyXG4gICAgICB5ID0gcG9pbnRPclgueTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuZmlsbFRleHQodGV4dCwgPG51bWJlcj54LCA8bnVtYmVyPnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd0xpbmVCZXR3ZWVuUG9pbnRzKFxyXG4gICAgc3RhcnRQb2ludDogUG9pbnQsXHJcbiAgICBlbmRQb2ludDogUG9pbnQsXHJcbiAgICBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXNcclxuICApIHtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5zdHJva2VTdHlsZSA9IGxpbmVQcm9wZXJ0aWVzLmNvbG9yLmZpbGxTdHlsZTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQubW92ZVRvKHN0YXJ0UG9pbnQueCwgc3RhcnRQb2ludC55KTtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5saW5lVG8oZW5kUG9pbnQueCwgZW5kUG9pbnQueSk7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuc3Ryb2tlKCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL1JlbmRlcmVyLnRzIiwiaW1wb3J0IHsgSGl0VGVzdFJlc3VsdCB9IGZyb20gJ2NvbW1vbi9IaXRUZXN0UmVzdWx0JztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnUmVuZGVyZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YWdlIHtcclxuICBwdWJsaWMgbGF5ZXJzOiBMYXllcltdID0gW107XHJcblxyXG4gIHB1YmxpYyByZW5kZXIocmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcbiAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IGxheWVyLnJlbmRlcihyZW5kZXJlcikpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUxheWVyKGxheWVyOiBMYXllcikge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxheWVycy5pbmRleE9mKGxheWVyKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGl0VGVzdChwb2ludDogUG9pbnQpOiBIaXRUZXN0UmVzdWx0IHwgbnVsbCB7XHJcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMubGF5ZXJzKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGxheWVyLmhpdFRlc3QocG9pbnQpO1xyXG4gICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbmRMYXllckJ5TmFtZShuYW1lOiBzdHJpbmcpOiBMYXllciB7XHJcbiAgICBjb25zdCBmb3VuZExheWVyID0gdGhpcy5sYXllcnMuZmluZChsYXllciA9PiBsYXllci5uYW1lID09PSBuYW1lKTtcclxuXHJcbiAgICBpZiAoIWZvdW5kTGF5ZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBMYXllciB3aXRoIG5hbWUgJHtuYW1lfSBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmb3VuZExheWVyO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9TdGFnZS50cyIsImltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9zZXN0UGF0aEZpbmRlciB7XHJcbiAgcHVibGljIGdldENsb3Nlc3RQYXRoKHBhdGhzOiBQYXRoW10sIHBvaW50OiBQb2ludCk6IFBhdGgge1xyXG4gICAgaWYgKHBhdGhzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhdGhzIGFycmF5IGlzIGVtcHR5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsb3Nlc3RQYXRoID0gcGF0aHNbMF07XHJcbiAgICBsZXQgY2xvc2VzdERpc3RhbmNlID0gdGhpcy5nZXRQYXRoVG9Qb2ludERpc3RhbmNlKGNsb3Nlc3RQYXRoLCBwb2ludCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRocy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBwYXRoID0gcGF0aHNbaV07XHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5nZXRQYXRoVG9Qb2ludERpc3RhbmNlKHBhdGgsIHBvaW50KTtcclxuXHJcbiAgICAgIGlmIChjbG9zZXN0RGlzdGFuY2UgPiBkaXN0YW5jZSkge1xyXG4gICAgICAgIGNsb3Nlc3RQYXRoID0gcGF0aDtcclxuICAgICAgICBjbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbG9zZXN0UGF0aDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGF0aFRvUG9pbnREaXN0YW5jZShwYXRoOiBQYXRoLCBwb2ludDogUG9pbnQpIHtcclxuICAgIHJldHVybiBwb2ludC5nZXREaXN0YW5jZVNxdWFyZWRUbyhwYXRoLmdldENlbnRlck9mR3Jhdml0eSgpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvQ2xvc2VzdFBhdGhGaW5kZXIudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTG9hZGluZ0ZpbmlzaGVkRXZlbnQgfSBmcm9tICdldmVudHMvdWkvTG9hZGluZ0ZpbmlzaGVkRXZlbnQnO1xyXG5pbXBvcnQgeyBMb2FkaW5nU3RhcnRlZEV2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL0xvYWRpbmdTdGFydGVkRXZlbnQnO1xyXG5cclxuaW50ZXJmYWNlIEltYWdlRG93bmxvYWRlckRlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZURvd25sb2FkZXIge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogSW1hZ2VEb3dubG9hZGVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaW1hZ2VUb0ltYWdlRGF0YShpbWFnZTogSFRNTEltYWdlRWxlbWVudCk6IFByb21pc2U8SW1hZ2VEYXRhPiB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgMmQgZHJhd2luZyBjYW52YXMgY29udGV4dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5pc0ltYWdlRG93bmxvYWRlZChpbWFnZSkpIHtcclxuICAgICAgYXdhaXQgdGhpcy53YWl0Rm9ySW1hZ2UoaW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLm5hdHVyYWxXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0O1xyXG5cclxuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcclxuXHJcbiAgICByZXR1cm4gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1hZ2UubmF0dXJhbFdpZHRoLCBpbWFnZS5uYXR1cmFsSGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNJbWFnZURvd25sb2FkZWQoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIGlmICghaW1hZ2UuY29tcGxldGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbWFnZS5uYXR1cmFsV2lkdGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3YWl0Rm9ySW1hZ2UoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hMb2FkaW5nU3RhcnRlZEV2ZW50KCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgZGlzcGF0Y2hMb2FkaW5nRmluaXNoZWRFdmVudCA9IHRoaXMuZGlzcGF0Y2hMb2FkaW5nRmluaXNoZWRFdmVudC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gb25Mb2FkKCkge1xyXG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xyXG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XHJcbiAgICAgICAgZGlzcGF0Y2hMb2FkaW5nRmluaXNoZWRFdmVudCgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gb25FcnJvcigpIHtcclxuICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcclxuICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xyXG4gICAgICAgIGRpc3BhdGNoTG9hZGluZ0ZpbmlzaGVkRXZlbnQoKTtcclxuICAgICAgICByZWplY3QoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XHJcbiAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGF0Y2hMb2FkaW5nU3RhcnRlZEV2ZW50KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTG9hZGluZ1N0YXJ0ZWRFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGF0Y2hMb2FkaW5nRmluaXNoZWRFdmVudCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IExvYWRpbmdGaW5pc2hlZEV2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9JbWFnZURvd25sb2FkZXIudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtcclxuICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEludGVuc2l0eUV2ZW50LFxyXG4gIE5ld0xpZ2h0Q29sb3JFdmVudCxcclxuICBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQsXHJcbiAgTmV3TGlnaHRUeXBlRXZlbnQsXHJcbiAgTmV3Tm9ybWFsTWFwRXZlbnRcclxufSBmcm9tICdldmVudHMvaW5wdXQtZGF0YSc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgTGlnaHRUeXBlIH0gZnJvbSAnY29tbW9uL0xpZ2h0VHlwZSc7XHJcbmltcG9ydCB7IExpbmVQcm9wZXJ0aWVzIH0gZnJvbSAnY29tbW9uL0xpbmVQcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnY29tbW9uL1BvbHlnb24nO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VEb3dubG9hZGVyIH0gZnJvbSAnc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIElucHV0RGF0YUluaXRpYWxpemVyRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuICBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXREYXRhSW5pdGlhbGl6ZXIgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IElucHV0RGF0YUluaXRpYWxpemVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmltYWdlRG93bmxvYWRlciA9IGRlcGVuZGVuY2llcy5pbWFnZURvd25sb2FkZXI7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uTGF5ZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaW5pdCgpIHtcclxuICAgIHRoaXMuYWRkSW5pdGlhbFBvbHlnb25zKCk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VzVG9Eb3dubG9hZDogSFRNTEltYWdlRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgY29uc3QgYmFja2dyb3VuZFRleHR1cmVJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgYmFja2dyb3VuZFRleHR1cmVJbWFnZS5zcmMgPSBjb25maWd1cmF0aW9uLnByZXNldEJhY2tncm91bmRUZXh0dXJlc1swXTtcclxuXHJcbiAgICBjb25zdCBub3JtYWxNYXBJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbm9ybWFsTWFwSW1hZ2Uuc3JjID0gY29uZmlndXJhdGlvbi5wcmVzZXROb3JtYWxNYXBzWzBdO1xyXG5cclxuICAgIGNvbnN0IGhlaWdodE1hcEltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBoZWlnaHRNYXBJbWFnZS5zcmMgPSBjb25maWd1cmF0aW9uLnByZXNldEhlaWdodE1hcHNbMF07XHJcblxyXG4gICAgaW1hZ2VzVG9Eb3dubG9hZC5wdXNoKGJhY2tncm91bmRUZXh0dXJlSW1hZ2UsIG5vcm1hbE1hcEltYWdlLCBoZWlnaHRNYXBJbWFnZSk7XHJcblxyXG4gICAgY29uc3QgZG93bmxvYWRlZEltYWdlRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICBpbWFnZXNUb0Rvd25sb2FkLm1hcChpbWFnZSA9PiB0aGlzLmltYWdlRG93bmxvYWRlci5pbWFnZVRvSW1hZ2VEYXRhKGltYWdlKSlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudChkb3dubG9hZGVkSW1hZ2VEYXRhWzBdKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdOb3JtYWxNYXBFdmVudChkb3dubG9hZGVkSW1hZ2VEYXRhWzFdKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdIZWlnaHRNYXBFdmVudChkb3dubG9hZGVkSW1hZ2VEYXRhWzJdKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICBuZXcgTmV3SGVpZ2h0TWFwSW50ZW5zaXR5RXZlbnQoY29uZmlndXJhdGlvbi5wcmVzZXRIZWlnaHRNYXBJbnRlbnNpdHkpXHJcbiAgICApO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRDb2xvckV2ZW50KGNvbmZpZ3VyYXRpb24ucHJlc2V0TGlnaHRDb2xvcikpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChcclxuICAgICAgbmV3IE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudChjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0LmRlZmF1bHRSYWRpdXMpXHJcbiAgICApO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRUeXBlRXZlbnQoTGlnaHRUeXBlLkNvbnN0YW50KSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgLy8gTm90aGluZyB0byBkZXN0cm95IGhlcmVcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkSW5pdGlhbFBvbHlnb25zKCkge1xyXG4gICAgY29uc3QgcG9pbnRzMSA9IFtcclxuICAgICAgbmV3IFBvaW50KDk0LCA5MyksXHJcbiAgICAgIG5ldyBQb2ludCg2OSwgMzg2KSxcclxuICAgICAgbmV3IFBvaW50KDE5MCwgNTI1KSxcclxuICAgICAgbmV3IFBvaW50KDY2NCwgMzY0KVxyXG4gICAgXTtcclxuICAgIGNvbnN0IHBvbHlnb24xID0gbmV3IFBvbHlnb24ocG9pbnRzMSwgTGluZVByb3BlcnRpZXMuZ2V0RGVmYXVsdCgpKTtcclxuXHJcbiAgICBjb25zdCBwb2ludHMyID0gW1xyXG4gICAgICBuZXcgUG9pbnQoNzc3LCAxNDIpLFxyXG4gICAgICBuZXcgUG9pbnQoNzAwLCA1MCksXHJcbiAgICAgIG5ldyBQb2ludCg0MzMsIDM0KSxcclxuICAgICAgbmV3IFBvaW50KDQwNCwgMTU2KSxcclxuICAgICAgbmV3IFBvaW50KDUyNywgMjYzKSxcclxuICAgICAgbmV3IFBvaW50KDc1MCwgMzUwKVxyXG4gICAgXTtcclxuICAgIGNvbnN0IHBvbHlnb24yID0gbmV3IFBvbHlnb24ocG9pbnRzMiwgTGluZVByb3BlcnRpZXMuZ2V0RGVmYXVsdCgpKTtcclxuXHJcbiAgICB0aGlzLnBvbHlnb25MYXllci5wYXRocy5wdXNoKHBvbHlnb24xLCBwb2x5Z29uMik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9JbnB1dERhdGFJbml0aWFsaXplci50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQge1xyXG4gIE5ld0xpZ2h0UG9zaXRpb25FdmVudCxcclxuICBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQsXHJcbiAgTmV3TGlnaHRUeXBlRXZlbnRcclxufSBmcm9tICdldmVudHMvaW5wdXQtZGF0YSc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IExpZ2h0VHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFR5cGUnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdjb21tb24vVmVjdG9yMyc7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgTGlnaHRTaW11bGF0b3JEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIGNlbnRlclBvaW50OiBQb2ludDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpZ2h0U2ltdWxhdG9yIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBob3Jpem9udGFsUmFkaWFuc01vZHVsb1ZhbHVlID0gMiAqIE1hdGguUEk7IC8vIFswOyAzNjBdIGRlZ3JlZXNcclxuICBwcml2YXRlIGhvcml6b250YWxTdGVwSW5SYWRpYW5zOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgbWluVmVydGljYWxBbmdsZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgdmVydGljYWxBbmdsZURlbHRhOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB2ZXJ0aWNhbFN0ZXBJblJhZGlhbnM6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNlbnRlclBvaW50OiBQb2ludDtcclxuXHJcbiAgcHJpdmF0ZSBtb3ZpbmdMaWdodEludGVydmFsSWQ6IG51bWJlcjtcclxuICBwcml2YXRlIGxpZ2h0SG9yaXpvbnRhbEFuZ2xlID0gMDtcclxuICBwcml2YXRlIGxpZ2h0VmVydGljYWxBbmdsZU9mZnNldCA9IGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQubWluVmVydGljYWxBbmdsZTtcclxuICBwcml2YXRlIGxpZ2h0VmVydGljYWxSaXNpbmcgPSB0cnVlO1xyXG4gIHByaXZhdGUgbGlnaHRQb3NpdGlvblJhZGl1czogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IExpZ2h0U2ltdWxhdG9yRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmNlbnRlclBvaW50ID0gZGVwZW5kZW5jaWVzLmNlbnRlclBvaW50O1xyXG5cclxuICAgIHRoaXMub25OZXdMaWdodFR5cGUgPSB0aGlzLm9uTmV3TGlnaHRUeXBlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm1vdmluZ0xpZ2h0VGljayA9IHRoaXMubW92aW5nTGlnaHRUaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTmV3TGlnaHRQb3NpdGlvblJhZGl1cyA9IHRoaXMub25OZXdMaWdodFBvc2l0aW9uUmFkaXVzLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoTmV3TGlnaHRUeXBlRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTmV3TGlnaHRUeXBlKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25OZXdMaWdodFBvc2l0aW9uUmFkaXVzXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucGVyZm9ybUluaXRpYWxDYWxjdWxhdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihOZXdMaWdodFR5cGVFdmVudC5ldmVudFR5cGUsIHRoaXMub25OZXdMaWdodFR5cGUpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgTmV3TGlnaHRQb3NpdGlvblJhZGl1c0V2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbk5ld0xpZ2h0UG9zaXRpb25SYWRpdXNcclxuICAgICk7XHJcbiAgICB0aGlzLnN0b3BNb3ZpbmdMaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwZXJmb3JtSW5pdGlhbENhbGN1bGF0aW9ucygpIHtcclxuICAgIHRoaXMuaG9yaXpvbnRhbFN0ZXBJblJhZGlhbnMgPSBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0LnRpY2tJbnRlcnZhbCAvXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQuaG9yaXpvbnRhbExhcFRpbWUgKlxyXG4gICAgICAyICpcclxuICAgICAgTWF0aC5QSTtcclxuXHJcbiAgICB0aGlzLm1pblZlcnRpY2FsQW5nbGUgPSBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0Lm1pblZlcnRpY2FsQW5nbGU7XHJcbiAgICB0aGlzLnZlcnRpY2FsQW5nbGVEZWx0YSA9IGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQubWF4VmVydGljYWxBbmdsZSAtXHJcbiAgICAgIHRoaXMubWluVmVydGljYWxBbmdsZTtcclxuXHJcbiAgICB0aGlzLnZlcnRpY2FsU3RlcEluUmFkaWFucyA9IGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQudGlja0ludGVydmFsIC9cclxuICAgICAgY29uZmlndXJhdGlvbi5tb3ZpbmdMaWdodC52ZXJ0aWNhbExhcFRpbWUgKlxyXG4gICAgICB0aGlzLnZlcnRpY2FsQW5nbGVEZWx0YTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25OZXdMaWdodFR5cGUoZXZlbnQ6IE5ld0xpZ2h0VHlwZUV2ZW50KSB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LnBheWxvYWQpIHtcclxuICAgICAgY2FzZSBMaWdodFR5cGUuQ29uc3RhbnQ6XHJcbiAgICAgICAgdGhpcy5zdG9wTW92aW5nTGlnaHQoKTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoTGlnaHRQb3NpdGlvbihuZXcgVmVjdG9yMygwLCAwLCAxKSk7XHJcbiAgICAgICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExpZ2h0VHlwZS5Nb3Zpbmc6XHJcbiAgICAgICAgdGhpcy5zdGFydE1vdmluZ0xpZ2h0KCk7XHJcbiAgICAgICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsaWdodCB0eXBlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc3BhdGNoTGlnaHRQb3NpdGlvbihwb3NpdGlvbjogVmVjdG9yMykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRQb3NpdGlvbkV2ZW50KHBvc2l0aW9uKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0TW92aW5nTGlnaHQoKSB7XHJcbiAgICB0aGlzLm1vdmluZ0xpZ2h0SW50ZXJ2YWxJZCA9IHNldEludGVydmFsKFxyXG4gICAgICB0aGlzLm1vdmluZ0xpZ2h0VGljayxcclxuICAgICAgY29uZmlndXJhdGlvbi5tb3ZpbmdMaWdodC50aWNrSW50ZXJ2YWxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdmluZ0xpZ2h0VGljaygpIHtcclxuICAgIGNvbnN0IHsgeDogY2VudGVyWCwgeTogY2VudGVyWSB9ID0gdGhpcy5jZW50ZXJQb2ludDtcclxuICAgIGNvbnN0IHZlcnRpY2FsQW5nbGUgPVxyXG4gICAgICBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0Lm1pblZlcnRpY2FsQW5nbGUgKyB0aGlzLmxpZ2h0VmVydGljYWxBbmdsZU9mZnNldDtcclxuXHJcbiAgICBjb25zdCBob3Jpem9udGFsUmFkaXVzID0gdGhpcy5saWdodFBvc2l0aW9uUmFkaXVzICogTWF0aC5jb3ModmVydGljYWxBbmdsZSk7XHJcblxyXG4gICAgY29uc3QgeCA9IGNlbnRlclggKyBob3Jpem9udGFsUmFkaXVzICogTWF0aC5jb3ModGhpcy5saWdodEhvcml6b250YWxBbmdsZSk7XHJcbiAgICBjb25zdCB5ID0gY2VudGVyWSArIGhvcml6b250YWxSYWRpdXMgKiBNYXRoLnNpbih0aGlzLmxpZ2h0SG9yaXpvbnRhbEFuZ2xlKTtcclxuICAgIGNvbnN0IHogPSB0aGlzLmxpZ2h0UG9zaXRpb25SYWRpdXMgKiBNYXRoLnNpbih2ZXJ0aWNhbEFuZ2xlKTtcclxuXHJcbiAgICBjb25zdCBsaWdodFBvc2l0aW9uID0gbmV3IFZlY3RvcjMoeCwgeSwgeik7XHJcbiAgICB0aGlzLmRpc3BhdGNoTGlnaHRQb3NpdGlvbihsaWdodFBvc2l0aW9uKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG5cclxuICAgIHRoaXMuaG9yaXpvbnRhbFRpY2soKTtcclxuICAgIHRoaXMudmVydGljYWxUaWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhvcml6b250YWxUaWNrKCkge1xyXG4gICAgdGhpcy5saWdodEhvcml6b250YWxBbmdsZSArPSB0aGlzLmhvcml6b250YWxTdGVwSW5SYWRpYW5zO1xyXG4gICAgaWYgKHRoaXMubGlnaHRIb3Jpem9udGFsQW5nbGUgPj0gdGhpcy5ob3Jpem9udGFsUmFkaWFuc01vZHVsb1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMubGlnaHRIb3Jpem9udGFsQW5nbGUgLT0gdGhpcy5ob3Jpem9udGFsUmFkaWFuc01vZHVsb1ZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJ0aWNhbFRpY2soKSB7XHJcbiAgICBpZiAodGhpcy5saWdodFZlcnRpY2FsUmlzaW5nKSB7XHJcbiAgICAgIHRoaXMubGlnaHRWZXJ0aWNhbEFuZ2xlT2Zmc2V0ICs9IHRoaXMudmVydGljYWxTdGVwSW5SYWRpYW5zO1xyXG4gICAgICBpZiAodGhpcy5saWdodFZlcnRpY2FsQW5nbGVPZmZzZXQgPj0gdGhpcy52ZXJ0aWNhbEFuZ2xlRGVsdGEpIHtcclxuICAgICAgICB0aGlzLmxpZ2h0VmVydGljYWxSaXNpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5saWdodFZlcnRpY2FsQW5nbGVPZmZzZXQgLT0gdGhpcy52ZXJ0aWNhbFN0ZXBJblJhZGlhbnM7XHJcbiAgICAgIGlmICh0aGlzLmxpZ2h0VmVydGljYWxBbmdsZU9mZnNldCA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5saWdodFZlcnRpY2FsUmlzaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdG9wTW92aW5nTGlnaHQoKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMubW92aW5nTGlnaHRJbnRlcnZhbElkKTtcclxuICAgIHRoaXMubGlnaHRIb3Jpem9udGFsQW5nbGUgPSAwO1xyXG4gICAgdGhpcy5saWdodFZlcnRpY2FsQW5nbGVPZmZzZXQgPSBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0Lm1pblZlcnRpY2FsQW5nbGU7XHJcbiAgICB0aGlzLmxpZ2h0VmVydGljYWxSaXNpbmcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk5ld0xpZ2h0UG9zaXRpb25SYWRpdXMoZXZlbnQ6IE5ld0xpZ2h0UG9zaXRpb25SYWRpdXNFdmVudCkge1xyXG4gICAgdGhpcy5saWdodFBvc2l0aW9uUmFkaXVzID0gZXZlbnQucGF5bG9hZDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvTGlnaHRTaW11bGF0b3IudHMiLCJpbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICdjb21tb24vUG9seWdvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbkNsaXBwZXIge1xyXG4gIHB1YmxpYyBjbGlwUG9seWdvbnMocG9seWdvbjE6IFBvbHlnb24sIHBvbHlnb24yOiBQb2x5Z29uKSB7XHJcbiAgICBpZiAocG9seWdvbjEuaXNDb252ZXgoKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jbGlwUG9seWdvbihwb2x5Z29uMiwgcG9seWdvbjEpO1xyXG4gICAgfSBlbHNlIGlmIChwb2x5Z29uMi5pc0NvbnZleCgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsaXBQb2x5Z29uKHBvbHlnb24xLCBwb2x5Z29uMik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdCb3RoIHBvbHlnb25zIGFyZSBjb25jYXZlJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gc3ViamVjdFBvbHlnb25cclxuICAgKiBAcGFyYW0gY2xpcHBpbmdQb2x5Z29uIE11c3QgYmUgY29udmV4XHJcbiAgICovXHJcbiAgcHVibGljIGNsaXBQb2x5Z29uKHN1YmplY3RQb2x5Z29uOiBQb2x5Z29uLCBjbGlwcGluZ1BvbHlnb246IFBvbHlnb24pIHtcclxuICAgIGNvbnN0IGNsaXBwaW5nUG9seWdvbkNlbnRlciA9IGNsaXBwaW5nUG9seWdvbi5nZXRDZW50ZXJPZkdyYXZpdHkoKTtcclxuXHJcbiAgICBsZXQgb3V0cHV0OiBQb2ludFtdID0gc3ViamVjdFBvbHlnb24uZ2V0VmVydGljZXMoKTtcclxuICAgIGNvbnN0IGNsaXBwaW5nUG9seWdvbkVkZ2VzOiBMaW5lW10gPSBbXTtcclxuICAgIGNvbnN0IGNsaXBwaW5nUG9seWdvblZlcnRpY2VzID0gY2xpcHBpbmdQb2x5Z29uLmdldFZlcnRpY2VzKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlwcGluZ1BvbHlnb25WZXJ0aWNlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBlZGdlID0gbmV3IExpbmUoXHJcbiAgICAgICAgY2xpcHBpbmdQb2x5Z29uVmVydGljZXNbKGkgKyAxKSAlIGNsaXBwaW5nUG9seWdvblZlcnRpY2VzLmxlbmd0aF0sXHJcbiAgICAgICAgY2xpcHBpbmdQb2x5Z29uVmVydGljZXNbaV1cclxuICAgICAgKTtcclxuICAgICAgY2xpcHBpbmdQb2x5Z29uRWRnZXMucHVzaChlZGdlKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgY2xpcHBpbmdQb2x5Z29uRWRnZXMpIHtcclxuICAgICAgY29uc3QgaW5wdXQgPSBvdXRwdXQ7XHJcbiAgICAgIG91dHB1dCA9IFtdO1xyXG4gICAgICBsZXQgcHAgPSBpbnB1dFtpbnB1dC5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgIGlucHV0LmZvckVhY2gocCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTYW1lU2lkZShwLCBjbGlwcGluZ1BvbHlnb25DZW50ZXIsIGVkZ2UpKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuaXNTYW1lU2lkZShwcCwgY2xpcHBpbmdQb2x5Z29uQ2VudGVyLCBlZGdlKSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaCh0aGlzLmdldEludGVyc2VjdGlvblBvaW50KG5ldyBMaW5lKHBwLCBwKSwgZWRnZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb3V0cHV0LnB1c2gocCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0aGlzLmlzU2FtZVNpZGUocHAsIGNsaXBwaW5nUG9seWdvbkNlbnRlciwgZWRnZSkpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2godGhpcy5nZXRJbnRlcnNlY3Rpb25Qb2ludChuZXcgTGluZShwcCwgcCksIGVkZ2UpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHAgPSBwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3V0cHV0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvdXRwdXRXaXRob3V0RHVwbGljYXRlczogUG9pbnRbXSA9IFtdO1xyXG4gICAgb3V0cHV0V2l0aG91dER1cGxpY2F0ZXMucHVzaChvdXRwdXRbMF0pO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvdXRwdXQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFQb2ludC5lcHNpbG9uRXF1YWxzKG91dHB1dFtpXSwgb3V0cHV0V2l0aG91dER1cGxpY2F0ZXNbb3V0cHV0V2l0aG91dER1cGxpY2F0ZXMubGVuZ3RoIC0gMV0pXHJcbiAgICAgICkge1xyXG4gICAgICAgIG91dHB1dFdpdGhvdXREdXBsaWNhdGVzLnB1c2gob3V0cHV0W2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXHJcbiAgICBjb25zdCByb3VuZGVkUG9pbnRzID0gb3V0cHV0V2l0aG91dER1cGxpY2F0ZXMubWFwKHBvaW50ID0+IHBvaW50LmZsb29yKCkpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9seWdvbihyb3VuZGVkUG9pbnRzLCBzdWJqZWN0UG9seWdvbi5saW5lUHJvcGVydGllcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzU2FtZVNpZGUocDE6IFBvaW50LCBwMjogUG9pbnQsIGxpbmU6IExpbmUpIHtcclxuICAgIGNvbnN0IHAxRGlyID0gbGluZS5nZXREaXJlY3Rpb24ocDEpO1xyXG4gICAgY29uc3QgcDJEaXIgPSBsaW5lLmdldERpcmVjdGlvbihwMik7XHJcblxyXG4gICAgaWYgKHAxRGlyID09PSBwMkRpciB8fCBwMURpciA9PT0gMCB8fCBwMkRpciA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEludGVyc2VjdGlvblBvaW50KGxpbmUxOiBMaW5lLCBsaW5lMjogTGluZSkge1xyXG4gICAgY29uc3QgZGlyZWN0aW9uMSA9IFBvaW50LnN1YnRyYWN0KGxpbmUxLnAyLCBsaW5lMS5wMSk7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24yID0gUG9pbnQuc3VidHJhY3QobGluZTIucDIsIGxpbmUyLnAxKTtcclxuXHJcbiAgICBjb25zdCBkb3RQZXJwID0gZGlyZWN0aW9uMS54ICogZGlyZWN0aW9uMi55IC0gZGlyZWN0aW9uMS55ICogZGlyZWN0aW9uMi54O1xyXG5cclxuICAgIGNvbnN0IGMgPSBuZXcgUG9pbnQobGluZTIucDEueCAtIGxpbmUxLnAxLngsIGxpbmUyLnAxLnkgLSBsaW5lMS5wMS55KTtcclxuICAgIGNvbnN0IHQgPSAoYy54ICogZGlyZWN0aW9uMi55IC0gYy55ICogZGlyZWN0aW9uMi54KSAvIGRvdFBlcnA7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb2ludChsaW5lMS5wMS54ICsgdCAqIGRpcmVjdGlvbjEueCwgbGluZTEucDEueSArIHQgKiBkaXJlY3Rpb24xLnkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9Qb2x5Z29uQ2xpcHBlci50cyIsImltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICdSZW5kZXJlcic7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXREYXRhU2VydmljZSB9IGZyb20gJ3VpL0lucHV0RGF0YVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2FkaW5nVUlTZXJ2aWNlIH0gZnJvbSAndWkvTG9hZGluZ1VJU2VydmljZSc7XHJcbmltcG9ydCB7IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciB9IGZyb20gJ3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcic7XHJcbmltcG9ydCB7IE5ld1BvbHlnb25VSUNvbnRyb2xsZXIgfSBmcm9tICd1aS9OZXdQb2x5Z29uVUlDb250cm9sbGVyJztcclxuaW1wb3J0IHsgUGF0aERyYWdnaW5nU2VydmljZSB9IGZyb20gJ3VpL1BhdGhEcmFnZ2luZ1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb2ludERyYWdnaW5nU2VydmljZSB9IGZyb20gJ3VpL1BvaW50RHJhZ2dpbmdTZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9pbnRJbnNlcnRlclNlcnZpY2UgfSBmcm9tICd1aS9Qb2ludEluc2VydGVyU2VydmljZSc7XHJcbmltcG9ydCB7IFBvaW50UmVtb3ZlclNlcnZpY2UgfSBmcm9tICd1aS9Qb2ludFJlbW92ZXJTZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9pbnRTeW5jU2VydmljZSB9IGZyb20gJ3VpL1BvaW50U3luY1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZXJpYWxpemF0aW9uU2VydmljZSB9IGZyb20gJ3VpL1NlcmlhbGl6YXRpb25TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IENsb3Nlc3RQYXRoRmluZGVyIH0gZnJvbSAnc2VydmljZXMvQ2xvc2VzdFBhdGhGaW5kZXInO1xyXG5pbXBvcnQgeyBJbWFnZURvd25sb2FkZXIgfSBmcm9tICdzZXJ2aWNlcy9JbWFnZURvd25sb2FkZXInO1xyXG5pbXBvcnQgeyBQb2x5Z29uQ2xpcHBlciB9IGZyb20gJ3NlcnZpY2VzL1BvbHlnb25DbGlwcGVyJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IExpbmVDbGlja0V2ZW50IH0gZnJvbSAnZXZlbnRzL0xpbmVDbGlja0V2ZW50JztcclxuXHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5JztcclxuaW1wb3J0IHsgRGlhbG9nT3ZlcmxheSB9IGZyb20gJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheSc7XHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zQnV0dG9uJztcclxuaW1wb3J0ICd1aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNEaWFsb2cnO1xyXG5pbXBvcnQgeyBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlIH0gZnJvbSAndWkvUG9seWdvbkNsaXBwaW5nU2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgVUlDb250cm9sbGVyRGVwZW5kZW5jaWVzIHtcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgcG9seWdvbkNsaXBwZXI6IFBvbHlnb25DbGlwcGVyO1xyXG4gIGNsb3Nlc3RQYXRoRmluZGVyOiBDbG9zZXN0UGF0aEZpbmRlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVJQ29udHJvbGxlciBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwb2x5Z29uQ2xpcHBlcjogUG9seWdvbkNsaXBwZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjbG9zZXN0UGF0aEZpbmRlcjogQ2xvc2VzdFBhdGhGaW5kZXI7XHJcblxyXG4gIHByaXZhdGUgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgcHJpdmF0ZSBhcHBsaWNhdGlvblVJQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGRpYWxvZ092ZXJsYXk6IERpYWxvZ092ZXJsYXk7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgdWlTZXJ2aWNlczogU2VydmljZVtdID0gW107XHJcbiAgcHJpdmF0ZSBuZXdQb2x5Z29uVUlDb250cm9sbGVyOiBOZXdQb2x5Z29uVUlDb250cm9sbGVyO1xyXG4gIHByaXZhdGUgcGF0aERyYWdnaW5nU2VydmljZTogUGF0aERyYWdnaW5nU2VydmljZTtcclxuICBwcml2YXRlIHBvbHlnb25DbGlwcGluZ1NlcnZpY2U6IFBvbHlnb25DbGlwcGluZ1NlcnZpY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogVUlDb250cm9sbGVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gZGVwZW5kZW5jaWVzLnJlbmRlcmVyO1xyXG4gICAgdGhpcy5zdGFnZSA9IGRlcGVuZGVuY2llcy5zdGFnZTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuaW1hZ2VEb3dubG9hZGVyID0gZGVwZW5kZW5jaWVzLmltYWdlRG93bmxvYWRlcjtcclxuICAgIHRoaXMucG9seWdvbkNsaXBwZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkNsaXBwZXI7XHJcbiAgICB0aGlzLmNsb3Nlc3RQYXRoRmluZGVyID0gZGVwZW5kZW5jaWVzLmNsb3Nlc3RQYXRoRmluZGVyO1xyXG5cclxuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5maW5kQXBwbGljYXRpb25VSUNvbnRhaW5lcigpO1xyXG4gICAgdGhpcy5maW5kRGlhbG9nT3ZlcmxheSgpO1xyXG5cclxuICAgIHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyID0gbmV3IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcih0aGlzLmNhbnZhcyk7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZU5ld1BvbHlnb25VSUNvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlUG9pbnREcmFnZ2luZ1NlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlUG9pbnRJbnNlcnRlclNlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlUG9pbnRSZW1vdmVyU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVQb2ludFN5bmNTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBhdGhEcmFnZ2luZ1NlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlU2VyaWFsaXphdGlvblNlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlSW5wdXREYXRhU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUxvYWRpbmdVSVNlcnZpY2UoKTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMuZm9yRWFjaCh1aVNlcnZpY2UgPT4gdWlTZXJ2aWNlLmluaXQoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5mb3JFYWNoKHVpU2VydmljZSA9PiB1aVNlcnZpY2UuZGVzdHJveSgpKTtcclxuICAgIHRoaXMudWlTZXJ2aWNlcy5zcGxpY2UoMCwgdGhpcy51aVNlcnZpY2VzLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIWV2ZW50LmN0cmxLZXkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGF0aERyYWdnaW5nU2VydmljZS5zdGFydE1vdmluZ1BhdGgoZXZlbnQpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgaWYgKHRoaXMucGF0aERyYWdnaW5nU2VydmljZS5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb2ludCA9IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLmdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgIGlmIChldmVudC5zaGlmdEtleSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlLmNsaXBQb2x5Z29ucyhwb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGl0VGVzdFJlc3VsdCA9IHRoaXMuc3RhZ2UuaGl0VGVzdChwb2ludCk7XHJcblxyXG4gICAgaWYgKCFoaXRUZXN0UmVzdWx0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5ld1BvbHlnb25VSUNvbnRyb2xsZXIuYWRkTmV3UG9pbnQocG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaGl0VGVzdFJlc3VsdC5wYXRoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgIG5ldyBMaW5lQ2xpY2tFdmVudChoaXRUZXN0UmVzdWx0LmxpbmUsIGhpdFRlc3RSZXN1bHQucGF0aCwgcG9pbnQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaW5kQXBwbGljYXRpb25VSUNvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IGFwcGxpY2F0aW9uVUlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWd1cmF0aW9uLmFwcGxpY2F0aW9uVUlDb250YWluZXJJRCk7XHJcbiAgICBpZiAoIWFwcGxpY2F0aW9uVUlDb250YWluZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcHBsaWNhdGlvbiBVSSBjb250YWluZXIgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hcHBsaWNhdGlvblVJQ29udGFpbmVyID0gYXBwbGljYXRpb25VSUNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZERpYWxvZ092ZXJsYXkoKSB7XHJcbiAgICBjb25zdCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXBwLWRpYWxvZy1vdmVybGF5Jyk7XHJcbiAgICBpZiAoIWRpYWxvZ092ZXJsYXkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWFsb2cgb3ZlcmxheSBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkgPSA8RGlhbG9nT3ZlcmxheT5kaWFsb2dPdmVybGF5O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQb2ludFN5bmNTZXJ2aWNlKCkge1xyXG4gICAgY29uc3QgcG9pbnRTeW5jU2VydmljZSA9IG5ldyBQb2ludFN5bmNTZXJ2aWNlKHtcclxuICAgICAgY29udGFpbmVyOiB0aGlzLmFwcGxpY2F0aW9uVUlDb250YWluZXIsXHJcbiAgICAgIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChwb2ludFN5bmNTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9pbnRSZW1vdmVyU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHBvaW50UmVtb3ZlclNlcnZpY2UgPSBuZXcgUG9pbnRSZW1vdmVyU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHBvaW50UmVtb3ZlclNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQb2ludERyYWdnaW5nU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHBvaW50RHJhZ2dpbmdTZXJ2aWNlID0gbmV3IFBvaW50RHJhZ2dpbmdTZXJ2aWNlKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXNcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHBvaW50RHJhZ2dpbmdTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTmV3UG9seWdvblVJQ29udHJvbGxlcigpIHtcclxuICAgIHRoaXMubmV3UG9seWdvblVJQ29udHJvbGxlciA9IG5ldyBOZXdQb2x5Z29uVUlDb250cm9sbGVyKHtcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXHJcbiAgICAgIHBvbHlnb25MYXllcjogdGhpcy5zdGFnZS5maW5kTGF5ZXJCeU5hbWUoTEVYLlBPTFlHT05fTEFZRVJfTkFNRSksXHJcbiAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxyXG4gICAgICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaCh0aGlzLm5ld1BvbHlnb25VSUNvbnRyb2xsZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQb2ludEluc2VydGVyU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHBvaW50SW5zZXJ0ZXJTZXJ2aWNlID0gbmV3IFBvaW50SW5zZXJ0ZXJTZXJ2aWNlKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2gocG9pbnRJbnNlcnRlclNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQYXRoRHJhZ2dpbmdTZXJ2aWNlKCkge1xyXG4gICAgdGhpcy5wYXRoRHJhZ2dpbmdTZXJ2aWNlID0gbmV3IFBhdGhEcmFnZ2luZ1NlcnZpY2Uoe1xyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLFxyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZSxcclxuICAgICAgY2xvc2VzdFBhdGhGaW5kZXI6IHRoaXMuY2xvc2VzdFBhdGhGaW5kZXJcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHRoaXMucGF0aERyYWdnaW5nU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVNlcmlhbGl6YXRpb25TZXJ2aWNlKCkge1xyXG4gICAgY29uc3Qgc2VyaWFsaXphdGlvblNlcnZpY2UgPSBuZXcgU2VyaWFsaXphdGlvblNlcnZpY2Uoe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2goc2VyaWFsaXphdGlvblNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVJbnB1dERhdGFTZXJ2aWNlKCkge1xyXG4gICAgY29uc3QgaW5wdXREYXRhU2VydmljZSA9IG5ldyBJbnB1dERhdGFTZXJ2aWNlKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgaW1hZ2VEb3dubG9hZGVyOiB0aGlzLmltYWdlRG93bmxvYWRlcixcclxuICAgICAgZGlhbG9nT3ZlcmxheTogdGhpcy5kaWFsb2dPdmVybGF5XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChpbnB1dERhdGFTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9seWdvbkNsaXBwaW5nU2VydmljZSgpIHtcclxuICAgIHRoaXMucG9seWdvbkNsaXBwaW5nU2VydmljZSA9IG5ldyBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlKHtcclxuICAgICAgcG9seWdvbkNsaXBwZXI6IHRoaXMucG9seWdvbkNsaXBwZXIsXHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIHBvbHlnb25MYXllcjogdGhpcy5zdGFnZS5maW5kTGF5ZXJCeU5hbWUoTEVYLlBPTFlHT05fTEFZRVJfTkFNRSksXHJcbiAgICAgIGNsb3Nlc3RQYXRoRmluZGVyOiB0aGlzLmNsb3Nlc3RQYXRoRmluZGVyXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaCh0aGlzLnBvbHlnb25DbGlwcGluZ1NlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVMb2FkaW5nVUlTZXJ2aWNlKCkge1xyXG4gICAgY29uc3QgbG9hZGluZ1VJU2VydmljZSA9IG5ldyBMb2FkaW5nVUlTZXJ2aWNlKHtcclxuICAgICAgZGlhbG9nT3ZlcmxheTogdGhpcy5kaWFsb2dPdmVybGF5LFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChsb2FkaW5nVUlTZXJ2aWNlKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvVUlDb250cm9sbGVyLnRzIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcblxyXG5pbXBvcnQgeyBJbWFnZURvd25sb2FkZXIgfSBmcm9tICdzZXJ2aWNlcy9JbWFnZURvd25sb2FkZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dPdmVybGF5IH0gZnJvbSAndWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5JztcclxuXHJcbmltcG9ydCB7XHJcbiAgQmFja2dyb3VuZFNlbGVjdEJ1dHRvbixcclxuICBIZWlnaHRNYXBJbnRlbnNpdHlJbnB1dCxcclxuICBIZWlnaHRNYXBTZWxlY3RCdXR0b24sXHJcbiAgTGlnaHRDb2xvclNlbGVjdEJ1dHRvbixcclxuICBMaWdodFR5cGVTZWxlY3QsXHJcbiAgTm9ybWFsTWFwU2VsZWN0QnV0dG9uXHJcbn0gZnJvbSAndWkvY29tcG9uZW50cy9pbnB1dC1kYXRhJztcclxuXHJcbmludGVyZmFjZSBTZXJpYWxpemF0aW9uU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgZGlhbG9nT3ZlcmxheTogRGlhbG9nT3ZlcmxheTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0RGF0YVNlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIGlucHV0RGF0YUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkaWFsb2dPdmVybGF5OiBEaWFsb2dPdmVybGF5O1xyXG4gIHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuXHJcbiAgcHJpdmF0ZSBiYWNrZ3JvdW5kU2VsZWN0QnV0dG9uOiBCYWNrZ3JvdW5kU2VsZWN0QnV0dG9uO1xyXG4gIHByaXZhdGUgaGVpZ2h0TWFwU2VsZWN0QnV0dG9uOiBIZWlnaHRNYXBTZWxlY3RCdXR0b247XHJcbiAgcHJpdmF0ZSBsaWdodENvbG9yU2VsZWN0QnV0dG9uOiBMaWdodENvbG9yU2VsZWN0QnV0dG9uO1xyXG4gIHByaXZhdGUgbm9ybWFsTWFwU2VsZWN0QnV0dG9uOiBOb3JtYWxNYXBTZWxlY3RCdXR0b247XHJcbiAgcHJpdmF0ZSBsaWdodFR5cGVTZWxlY3Q6IExpZ2h0VHlwZVNlbGVjdDtcclxuICBwcml2YXRlIGhlaWdodE1hcEludGVuc2l0eUlucHV0OiBIZWlnaHRNYXBJbnRlbnNpdHlJbnB1dDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBTZXJpYWxpemF0aW9uU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5pbWFnZURvd25sb2FkZXIgPSBkZXBlbmRlbmNpZXMuaW1hZ2VEb3dubG9hZGVyO1xyXG4gICAgdGhpcy5kaWFsb2dPdmVybGF5ID0gZGVwZW5kZW5jaWVzLmRpYWxvZ092ZXJsYXk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZmluZElucHV0RGF0YUNvbnRhaW5lcigpO1xyXG4gICAgdGhpcy5zZXR1cEVsZW1lbnRzKCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kU2VsZWN0QnV0dG9uKTtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubGlnaHRDb2xvclNlbGVjdEJ1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm5vcm1hbE1hcFNlbGVjdEJ1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhlaWdodE1hcFNlbGVjdEJ1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmxpZ2h0VHlwZVNlbGVjdCk7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmhlaWdodE1hcEludGVuc2l0eUlucHV0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5iYWNrZ3JvdW5kU2VsZWN0QnV0dG9uKTtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMubGlnaHRDb2xvclNlbGVjdEJ1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLm5vcm1hbE1hcFNlbGVjdEJ1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmhlaWdodE1hcFNlbGVjdEJ1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmxpZ2h0VHlwZVNlbGVjdCk7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmhlaWdodE1hcEludGVuc2l0eUlucHV0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZElucHV0RGF0YUNvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IGlucHV0RGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1kYXRhLWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKCFpbnB1dERhdGFDb250YWluZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBkYXRhIGNvbnRhaW5lciBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lciA9IGlucHV0RGF0YUNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXBFbGVtZW50cygpIHtcclxuICAgIGNvbnN0IHsgZXZlbnRBZ2dyZWdhdG9yLCBkaWFsb2dPdmVybGF5LCBpbWFnZURvd25sb2FkZXIgfSA9IHRoaXM7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VTZWxlY3RCdXR0b25EZXBlbmRlbmNpZXMgPSB7IGV2ZW50QWdncmVnYXRvciwgZGlhbG9nT3ZlcmxheSwgaW1hZ2VEb3dubG9hZGVyIH07XHJcbiAgICBjb25zdCBjb2xvclNlbGVjdEJ1dHRvbkRlcGVuZGVuY2llcyA9IHsgZGlhbG9nT3ZlcmxheSwgZXZlbnRBZ2dyZWdhdG9yIH07XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kU2VsZWN0QnV0dG9uID0gbmV3IEJhY2tncm91bmRTZWxlY3RCdXR0b24oaW1hZ2VTZWxlY3RCdXR0b25EZXBlbmRlbmNpZXMpO1xyXG4gICAgdGhpcy5oZWlnaHRNYXBTZWxlY3RCdXR0b24gPSBuZXcgSGVpZ2h0TWFwU2VsZWN0QnV0dG9uKGltYWdlU2VsZWN0QnV0dG9uRGVwZW5kZW5jaWVzKTtcclxuICAgIHRoaXMubGlnaHRDb2xvclNlbGVjdEJ1dHRvbiA9IG5ldyBMaWdodENvbG9yU2VsZWN0QnV0dG9uKGNvbG9yU2VsZWN0QnV0dG9uRGVwZW5kZW5jaWVzKTtcclxuICAgIHRoaXMubm9ybWFsTWFwU2VsZWN0QnV0dG9uID0gbmV3IE5vcm1hbE1hcFNlbGVjdEJ1dHRvbihpbWFnZVNlbGVjdEJ1dHRvbkRlcGVuZGVuY2llcyk7XHJcbiAgICB0aGlzLmxpZ2h0VHlwZVNlbGVjdCA9IG5ldyBMaWdodFR5cGVTZWxlY3QoeyBldmVudEFnZ3JlZ2F0b3IgfSk7XHJcbiAgICB0aGlzLmhlaWdodE1hcEludGVuc2l0eUlucHV0ID0gbmV3IEhlaWdodE1hcEludGVuc2l0eUlucHV0KHsgZXZlbnRBZ2dyZWdhdG9yIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9JbnB1dERhdGFTZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQmFja2dyb3VuZFNlbGVjdEJ1dHRvbiB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9CYWNrZ3JvdW5kU2VsZWN0QnV0dG9uJztcclxuaW1wb3J0IHsgSGVpZ2h0TWFwSW50ZW5zaXR5SW5wdXQgfSBmcm9tICd1aS9jb21wb25lbnRzL2lucHV0LWRhdGEvSGVpZ2h0TWFwSW50ZW5zaXR5SW5wdXQnO1xyXG5pbXBvcnQgeyBIZWlnaHRNYXBTZWxlY3RCdXR0b24gfSBmcm9tICd1aS9jb21wb25lbnRzL2lucHV0LWRhdGEvSGVpZ2h0TWFwU2VsZWN0QnV0dG9uJztcclxuaW1wb3J0IHsgTGlnaHRDb2xvclNlbGVjdEJ1dHRvbiB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodENvbG9yU2VsZWN0QnV0dG9uJztcclxuaW1wb3J0IHsgTGlnaHRUeXBlU2VsZWN0IH0gZnJvbSAndWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0xpZ2h0VHlwZVNlbGVjdCc7XHJcbmltcG9ydCB7IE5vcm1hbE1hcFNlbGVjdEJ1dHRvbiB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9Ob3JtYWxNYXBTZWxlY3RCdXR0b24nO1xyXG5cclxuZXhwb3J0IHtcclxuICBCYWNrZ3JvdW5kU2VsZWN0QnV0dG9uLFxyXG4gIEhlaWdodE1hcEludGVuc2l0eUlucHV0LFxyXG4gIEhlaWdodE1hcFNlbGVjdEJ1dHRvbixcclxuICBMaWdodENvbG9yU2VsZWN0QnV0dG9uLFxyXG4gIExpZ2h0VHlwZVNlbGVjdCxcclxuICBOb3JtYWxNYXBTZWxlY3RCdXR0b25cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL2luZGV4LnRzIiwiaW1wb3J0IHsgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VTZWxlY3REaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cnO1xyXG5pbXBvcnQgeyBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbiwgSW1hZ2VTZWxlY3REaWFsb2dCdXR0b25EZXBlbmRlbmNpZXMgfSBmcm9tICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2dCdXR0b24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRTZWxlY3RCdXR0b24gZXh0ZW5kcyBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbiB7XHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbkRlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoZGVwZW5kZW5jaWVzKTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbi5pbm5lclRleHQgPSAnU2VsZWN0IGJhY2tncm91bmQgdGV4dHVyZSc7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0dXBEaWFsb2dCb3goKSB7XHJcbiAgICB0aGlzLmRpYWxvZ0JveCA9IG5ldyBJbWFnZVNlbGVjdERpYWxvZyhcclxuICAgICAgY29uZmlndXJhdGlvbi5wcmVzZXRCYWNrZ3JvdW5kVGV4dHVyZXMsXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24uaW5pdGlhbEN1c3RvbUJhY2tncm91bmRDb2xvckhleFxyXG4gICAgKTtcclxuICAgIHRoaXMuZGlhbG9nQm94Lm5hbWUgPSAnQmFja2dyb3VuZCB0ZXh0dXJlJztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhc3luYyBvbkRpYWxvZ0JveENsb3NlZCgpIHtcclxuICAgIGlmICh0aGlzLmRpYWxvZ0JveC53YXNDYW5jZWxsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGF3YWl0IHRoaXMuZ2V0U2VsZWN0ZWRJbWFnZURhdGEoKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50KGltYWdlRGF0YSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1iYWNrZ3JvdW5kLXNlbGVjdC1idXR0b24nLCBCYWNrZ3JvdW5kU2VsZWN0QnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0JhY2tncm91bmRTZWxlY3RCdXR0b24udHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9JbWFnZVNlbGVjdERpYWxvZy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW1hZ2VTZWxlY3REaWFsb2cuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbWFnZS1zZWxlY3QtZGlhbG9ne3BhZGRpbmc6MXJlbTt3aWR0aDo3NSU7bWF4LXdpZHRoOjgwMHB4fS5pbWFnZS1zZWxlY3QtZGlhbG9nX19oZWFkaW5ne21hcmdpbjouNWVtIDB9LmltYWdlLXNlbGVjdC1kaWFsb2dfX2Jsb2Nre2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMwMDA7cGFkZGluZy1ib3R0b206MWVtfS5pbWFnZS1zZWxlY3QtZGlhbG9nX19wcmVzZXQtaW1hZ2VzLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2ZsZXgtd3JhcDp3cmFwfS5pbWFnZS1zZWxlY3QtZGlhbG9nX19wcmVzZXQtaW1hZ2VzLWNvbnRhaW5lcj5kaXZ7bWF4LXdpZHRoOjI1JTttYXgtaGVpZ2h0OjIwMHB4O21hcmdpbjphdXRvfS5pbWFnZS1zZWxlY3QtZGlhbG9nX19wcmVzZXQtaW1hZ2VzLWNvbnRhaW5lciBpbWd7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoyMDBweH0uaW1hZ2Utc2VsZWN0LWRpYWxvZ19fY3VzdG9tLWltYWdle2Rpc3BsYXk6YmxvY2s7bWF4LXdpZHRoOjI1JTttYXgtaGVpZ2h0OjIwMHB4O21hcmdpbjphdXRvfS5pbWFnZS1zZWxlY3QtZGlhbG9nX19pbWFnZS0tc2VsZWN0ZWR7Ym9yZGVyOjNweCBzb2xpZCBncmVlbn0uaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnN7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7bWFyZ2luLXRvcDoxZW19LmltYWdlLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zIGJ1dHRvbntmb250LXNpemU6MS4zZW19XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTmV3SGVpZ2h0TWFwSW50ZW5zaXR5RXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YSc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuXHJcbmludGVyZmFjZSBIZWlnaHRNYXBJbnRlbnNpdHlJbnB1dERlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIZWlnaHRNYXBJbnRlbnNpdHlJbnB1dCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogSGVpZ2h0TWFwSW50ZW5zaXR5SW5wdXREZXBlbmRlbmNpZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdoZWlnaHQtbWFwLWludGVuc2l0eScpO1xyXG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gJ0hlaWdodCBtYXAgaW50ZW5zaXR5OiAnO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aGlzLmlucHV0LnR5cGUgPSAnbnVtYmVyJztcclxuICAgIHRoaXMuaW5wdXQubWluID0gJzAnO1xyXG4gICAgdGhpcy5pbnB1dC5tYXggPSAnMSc7XHJcbiAgICB0aGlzLmlucHV0LnN0ZXAgPSAnMC4wMSc7XHJcbiAgICB0aGlzLnJlc2V0SW5wdXRWYWx1ZSgpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcclxuXHJcbiAgICB0aGlzLm9uSW5wdXRDaGFuZ2UgPSB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbklucHV0Q2hhbmdlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbklucHV0Q2hhbmdlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25JbnB1dENoYW5nZSgpIHtcclxuICAgIGNvbnN0IGludGVuc2l0eSA9IHBhcnNlRmxvYXQodGhpcy5pbnB1dC52YWx1ZSk7XHJcbiAgICBpZiAoTnVtYmVyLmlzTmFOKGludGVuc2l0eSkpIHtcclxuICAgICAgdGhpcy5yZXNldElucHV0VmFsdWUoKTtcclxuICAgICAgYWxlcnQoJ0hlaWdodCBtYXAgaW50ZW5zaXR5IG11c3QgYmUgYSBudW1iZXInKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdIZWlnaHRNYXBJbnRlbnNpdHlFdmVudChpbnRlbnNpdHkpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldElucHV0VmFsdWUoKSB7XHJcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gY29uZmlndXJhdGlvbi5wcmVzZXRIZWlnaHRNYXBJbnRlbnNpdHkudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGVpZ2h0LW1hcC1pbnRlbnNpdHktaW5wdXQnLCBIZWlnaHRNYXBJbnRlbnNpdHlJbnB1dCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9IZWlnaHRNYXBJbnRlbnNpdHlJbnB1dC50cyIsImltcG9ydCB7IE5ld0hlaWdodE1hcEV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5pbXBvcnQgeyBJbWFnZVNlbGVjdERpYWxvZyB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZyc7XHJcbmltcG9ydCB7IEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uLCBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbkRlcGVuZGVuY2llcyB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZ0J1dHRvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVpZ2h0TWFwU2VsZWN0QnV0dG9uIGV4dGVuZHMgSW1hZ2VTZWxlY3REaWFsb2dCdXR0b24ge1xyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogSW1hZ2VTZWxlY3REaWFsb2dCdXR0b25EZXBlbmRlbmNpZXMpIHtcclxuICAgIHN1cGVyKGRlcGVuZGVuY2llcyk7XHJcblxyXG4gICAgdGhpcy5idXR0b24uaW5uZXJUZXh0ID0gJ1NlbGVjdCBoZWlnaHQgbWFwJztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXR1cERpYWxvZ0JveCgpIHtcclxuICAgIHRoaXMuZGlhbG9nQm94ID0gbmV3IEltYWdlU2VsZWN0RGlhbG9nKFxyXG4gICAgICBjb25maWd1cmF0aW9uLnByZXNldEhlaWdodE1hcHMsXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24uaW5pdGlhbEN1c3RvbUhlaWdodE1hcENvbG9ySGV4XHJcbiAgICApO1xyXG4gICAgdGhpcy5kaWFsb2dCb3gubmFtZSA9ICdIZWlnaHQgbWFwJztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhc3luYyBvbkRpYWxvZ0JveENsb3NlZCgpIHtcclxuICAgIGlmICh0aGlzLmRpYWxvZ0JveC53YXNDYW5jZWxsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGF3YWl0IHRoaXMuZ2V0U2VsZWN0ZWRJbWFnZURhdGEoKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdIZWlnaHRNYXBFdmVudChpbWFnZURhdGEpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaGVpZ2h0LW1hcC1zZWxlY3QtYnV0dG9uJywgSGVpZ2h0TWFwU2VsZWN0QnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0hlaWdodE1hcFNlbGVjdEJ1dHRvbi50cyIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdjb21tb24vVmVjdG9yMyc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBOZXdMaWdodENvbG9yRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YSc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuXHJcbmltcG9ydCB7IENvbG9yU2VsZWN0RGlhbG9nIH0gZnJvbSAndWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nJztcclxuXHJcbmltcG9ydCB7IERpYWxvZ0JveEJ1dHRvbiwgRGlhbG9nQm94QnV0dG9uRGVwZW5kZW5jaWVzIH0gZnJvbSAndWkvY29tcG9uZW50cy9EaWFsb2dCb3hCdXR0b24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaWdodENvbG9yU2VsZWN0QnV0dG9uRGVwZW5kZW5jaWVzIGV4dGVuZHMgRGlhbG9nQm94QnV0dG9uRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpZ2h0Q29sb3JTZWxlY3RCdXR0b24gZXh0ZW5kcyBEaWFsb2dCb3hCdXR0b24ge1xyXG4gIHByb3RlY3RlZCByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJvdGVjdGVkIGRpYWxvZ0JveDogQ29sb3JTZWxlY3REaWFsb2c7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogTGlnaHRDb2xvclNlbGVjdEJ1dHRvbkRlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoeyBkaWFsb2dPdmVybGF5OiBkZXBlbmRlbmNpZXMuZGlhbG9nT3ZlcmxheSB9KTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy5idXR0b24uaW5uZXJUZXh0ID0gJ1NlbGVjdCBsaWdodCBjb2xvcic7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0dXBEaWFsb2dCb3goKSB7XHJcbiAgICB0aGlzLmRpYWxvZ0JveCA9IG5ldyBDb2xvclNlbGVjdERpYWxvZygpO1xyXG4gICAgdGhpcy5kaWFsb2dCb3gubmFtZSA9ICdMaWdodCBjb2xvcic7XHJcbiAgICB0aGlzLmRpYWxvZ0JveC5zZWxlY3RlZENvbG9yID0gY29uZmlndXJhdGlvbi5wcmVzZXRMaWdodENvbG9yLnRvQ29sb3IoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvbkRpYWxvZ0JveENsb3NlZCgpIHtcclxuICAgIGlmICh0aGlzLmRpYWxvZ0JveC53YXNDYW5jZWxsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpZ2h0Q29sb3IgPSB0aGlzLmRpYWxvZ0JveC5zZWxlY3RlZENvbG9yO1xyXG4gICAgY29uc3QgbGlnaHRWZWN0b3IgPSBWZWN0b3IzLmZyb21Db2xvcihsaWdodENvbG9yKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0xpZ2h0Q29sb3JFdmVudChsaWdodFZlY3RvcikpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1saWdodC1jb2xvci1zZWxlY3QtYnV0dG9uJywgTGlnaHRDb2xvclNlbGVjdEJ1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9MaWdodENvbG9yU2VsZWN0QnV0dG9uLnRzIiwiaW1wb3J0IHsgRGlhbG9nQm94IH0gZnJvbSAndWkvY29tcG9uZW50cy9EaWFsb2dCb3gnO1xyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvRGlhbG9nQm94LnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5cclxuaW1wb3J0ICd1aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cuc2Nzcyc7XHJcblxyXG5jb25zdCBjbGFzc05hbWVzID0ge1xyXG4gIERJQUxPR19CT1g6ICdkaWFsb2ctYm94JyxcclxuICBESUFMT0c6ICdjb2xvci1zZWxlY3QtZGlhbG9nJyxcclxuICBIRUFERVI6ICdjb2xvci1zZWxlY3QtZGlhbG9nX19oZWFkZXInLFxyXG4gIEhFQURJTkc6ICdjb2xvci1zZWxlY3QtZGlhbG9nX19oZWFkaW5nJyxcclxuICBCTE9DSzogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2Jsb2NrJyxcclxuICBCT1RUT01fQlVUVE9OUzogJ2NvbG9yLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yU2VsZWN0RGlhbG9nIGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBEaWFsb2dCb3gge1xyXG4gIHByaXZhdGUgX3dhc0NhbmNlbGxlZCA9IHRydWU7XHJcblxyXG4gIHByaXZhdGUgaGVhZGluZzogSFRNTEhlYWRpbmdFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjYW5jZWxCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgY29uZmlybUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5ESUFMT0dfQk9YKTtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkRJQUxPRyk7XHJcblxyXG4gICAgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrID0gdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrID0gdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbG9ySW5wdXQoKTtcclxuICAgIHRoaXMuY3JlYXRlQm90dG9tQnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgcmV0dXJuIFsnbmFtZSddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSB8fCAnQ29sb3Igc2VsZWN0JztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbmFtZScsIHZhbHVlKTtcclxuICAgIHRoaXMuaGVhZGluZy5pbm5lclRleHQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRDb2xvcigpIHtcclxuICAgIHJldHVybiBDb2xvci5mcm9tSGV4U3RyaW5nKHRoaXMuY29sb3JJbnB1dC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHNlbGVjdGVkQ29sb3IoY29sb3I6IENvbG9yKSB7XHJcbiAgICB0aGlzLmNvbG9ySW5wdXQudmFsdWUgPSBjb2xvci50b0hleFN0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5fd2FzQ2FuY2VsbGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DYW5jZWxCdXR0b25DbGljayk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB3YXNDYW5jZWxsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2FzQ2FuY2VsbGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlKCkge1xyXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xvc2UnKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuQ2xvc2UoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5jcmVhdGVCbG9jaygpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5IRUFERVIpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgIHRoaXMuaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aGlzLmhlYWRpbmcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkhFQURJTkcpO1xyXG4gICAgdGhpcy5oZWFkaW5nLmlubmVyVGV4dCA9IHRoaXMubmFtZTtcclxuXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGhpcy5oZWFkaW5nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ29sb3JJbnB1dCgpIHtcclxuICAgIHRoaXMuY29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aGlzLmNvbG9ySW5wdXQudHlwZSA9ICdjb2xvcic7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuY29sb3JJbnB1dCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUJvdHRvbUJ1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBib3R0b21CdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib3R0b21CdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5CT1RUT01fQlVUVE9OUyk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGJvdHRvbUJ1dHRvbnNDb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJztcclxuXHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5pbm5lclRleHQgPSAnQ29uZmlybSc7XHJcblxyXG4gICAgYm90dG9tQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbmNlbEJ1dHRvbik7XHJcbiAgICBib3R0b21CdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29uZmlybUJ1dHRvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2FuY2VsQnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29uZmlybUJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdGhpcy5fd2FzQ2FuY2VsbGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUJsb2NrKCkge1xyXG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5CTE9DSyk7XHJcblxyXG4gICAgcmV0dXJuIGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtY29sb3Itc2VsZWN0LWRpYWxvZycsIENvbG9yU2VsZWN0RGlhbG9nKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vRGlhbG9nQm94LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vRGlhbG9nQm94LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vRGlhbG9nQm94LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvRGlhbG9nQm94LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kaWFsb2ctYm94e3Bvc2l0aW9uOmZpeGVkO3RvcDo1MCU7bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDApO3otaW5kZXg6MTtiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7Ym9yZGVyOjFweCBzb2xpZCAjMDAwO2JvcmRlci1yYWRpdXM6MjVweDtjb2xvcjojMjIyO3BhZGRpbmc6MnJlbTtib3JkZXItcmFkaXVzOjEwcHg7Ym94LXNoYWRvdzoycHggMnB4IDVweCAjMDAwO3RyYW5zaXRpb246dHJhbnNmb3JtIC4yNXMgZWFzZS1pbi1vdXQ7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5kaWFsb2ctYm94LS1hY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEpfVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL0RpYWxvZ0JveC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Db2xvclNlbGVjdERpYWxvZy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQ29sb3JTZWxlY3REaWFsb2cuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb2xvci1zZWxlY3QtZGlhbG9ne3BhZGRpbmc6MXJlbTt3aWR0aDo1MCU7bWF4LXdpZHRoOjMwMHB4fS5jb2xvci1zZWxlY3QtZGlhbG9nX19ibG9ja3tib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMDAwO3BhZGRpbmctYm90dG9tOjFlbX0uY29sb3Itc2VsZWN0LWRpYWxvZ19faGVhZGluZ3ttYXJnaW46LjVlbSAwfS5jb2xvci1zZWxlY3QtZGlhbG9nX19ib3R0b20tYnV0dG9uc3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDttYXJnaW4tdG9wOjFlbX0uY29sb3Itc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMgYnV0dG9ue2ZvbnQtc2l6ZToxLjNlbX1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IExpZ2h0VHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFR5cGUnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IE5ld0xpZ2h0VHlwZUV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBMaWdodFBvc2l0aW9uUmFkaXVzSW5wdXQgfSBmcm9tICd1aS9jb21wb25lbnRzL2lucHV0LWRhdGEvTGlnaHRQb3NpdGlvblJhZGl1c0lucHV0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlnaHRUeXBlU2VsZWN0RGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpZ2h0VHlwZVNlbGVjdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGxpZ2h0VHlwZUluZm9MaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICBsaWdodFR5cGU6IExpZ2h0VHlwZS5Db25zdGFudCxcclxuICAgICAgb3B0aW9uVmFsdWU6ICdjb25zdGFudCcsXHJcbiAgICAgIG9wdGlvbkxhYmVsOiAnQ29uc3RhbnQgKFswLCAwLCAxXSknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsaWdodFR5cGU6IExpZ2h0VHlwZS5Nb3ZpbmcsXHJcbiAgICAgIG9wdGlvblZhbHVlOiAnbW92aW5nJyxcclxuICAgICAgb3B0aW9uTGFiZWw6ICdNb3ZpbmcgYWJvdmUgdGhlIHNjcmVlbidcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBwcml2YXRlIGxpZ2h0VHlwZVNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBsaWdodFBvc2l0aW9uUmFkaXVzSW5wdXQ6IExpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBMaWdodFR5cGVTZWxlY3REZXBlbmRlbmNpZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICB0aGlzLnNldHVwTGlnaHRUeXBlTGFiZWwoKTtcclxuICAgIHRoaXMuc2V0dXBMaWdodFR5cGVTZWxlY3QoKTtcclxuXHJcbiAgICB0aGlzLm9uTGlnaHRUeXBlQ2hhbmdlID0gdGhpcy5vbkxpZ2h0VHlwZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5saWdodFBvc2l0aW9uUmFkaXVzSW5wdXQgPSBuZXcgTGlnaHRQb3NpdGlvblJhZGl1c0lucHV0KHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzVweCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkTGlnaHRUeXBlKCk6IExpZ2h0VHlwZSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gdGhpcy5saWdodFR5cGVTZWxlY3QudmFsdWU7XHJcbiAgICBjb25zdCBzZWxlY3RlZExpZ2h0VHlwZUluZm8gPSB0aGlzLmxpZ2h0VHlwZUluZm9MaXN0LmZpbmQoXHJcbiAgICAgIGxpZ2h0VHlwZUluZm8gPT4gbGlnaHRUeXBlSW5mby5vcHRpb25WYWx1ZSA9PT0gc2VsZWN0ZWRWYWx1ZVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdGVkTGlnaHRUeXBlSW5mbykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgbGlnaHQgdHlwZSBzZWxlY3RlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZWxlY3RlZExpZ2h0VHlwZUluZm8ubGlnaHRUeXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBzZWxlY3RlZExpZ2h0VHlwZShsaWdodFR5cGU6IExpZ2h0VHlwZSkge1xyXG4gICAgY29uc3QgZm91bmRMaWdodFR5cGVJbmZvID0gdGhpcy5saWdodFR5cGVJbmZvTGlzdC5maW5kKFxyXG4gICAgICBsaWdodFR5cGVJbmZvID0+IGxpZ2h0VHlwZUluZm8ubGlnaHRUeXBlID09PSBsaWdodFR5cGVcclxuICAgICk7XHJcbiAgICBpZiAoIWZvdW5kTGlnaHRUeXBlSW5mbykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpZ2h0IHR5cGUgbm90IHN1cHBvcnRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlnaHRUeXBlU2VsZWN0LnZhbHVlID0gZm91bmRMaWdodFR5cGVJbmZvLm9wdGlvblZhbHVlO1xyXG4gICAgdGhpcy5vbkxpZ2h0VHlwZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5saWdodFR5cGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkxpZ2h0VHlwZUNoYW5nZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmxpZ2h0VHlwZVNlbGVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uTGlnaHRUeXBlQ2hhbmdlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXBMaWdodFR5cGVMYWJlbCgpIHtcclxuICAgIGNvbnN0IGxpZ2h0VHlwZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxpZ2h0VHlwZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xpZ2h0LXR5cGUtc2VsZWN0Jyk7XHJcbiAgICBsaWdodFR5cGVMYWJlbC5pbm5lclRleHQgPSAnTGlnaHQgdHlwZTogJztcclxuXHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGxpZ2h0VHlwZUxhYmVsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0dXBMaWdodFR5cGVTZWxlY3QoKSB7XHJcbiAgICB0aGlzLmxpZ2h0VHlwZVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgdGhpcy5saWdodFR5cGVTZWxlY3QuaWQgPSAnbGlnaHQtdHlwZS1zZWxlY3QnO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmxpZ2h0VHlwZVNlbGVjdCk7XHJcblxyXG4gICAgdGhpcy5saWdodFR5cGVJbmZvTGlzdC5mb3JFYWNoKGxpZ2h0VHlwZSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBvcHRpb24uaW5uZXJUZXh0ID0gbGlnaHRUeXBlLm9wdGlvbkxhYmVsO1xyXG4gICAgICBvcHRpb24udmFsdWUgPSBsaWdodFR5cGUub3B0aW9uVmFsdWU7XHJcblxyXG4gICAgICB0aGlzLmxpZ2h0VHlwZVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTGlnaHRUeXBlQ2hhbmdlKCkge1xyXG4gICAgY29uc3QgbGlnaHRUeXBlID0gdGhpcy5zZWxlY3RlZExpZ2h0VHlwZTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdMaWdodFR5cGVFdmVudChsaWdodFR5cGUpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG5cclxuICAgIGlmIChsaWdodFR5cGUgPT09IExpZ2h0VHlwZS5Nb3ZpbmcpIHtcclxuICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmxpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubGlnaHRQb3NpdGlvblJhZGl1c0lucHV0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWxpZ2h0LXR5cGUtc2VsZWN0JywgTGlnaHRUeXBlU2VsZWN0KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0xpZ2h0VHlwZVNlbGVjdC50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YSc7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5pbnRlcmZhY2UgTGlnaHRQb3NpdGlvblJhZGl1c0lucHV0RGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBwcml2YXRlIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IExpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dERlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbGlnaHQtcG9zaXRpb24tcmFkaXVzLWlucHV0Jyk7XHJcbiAgICBsYWJlbC5pbm5lclRleHQgPSAnTGlnaHQgcG9zaXRpb24gcmFkaXVzOiAnO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aGlzLmlucHV0LnR5cGUgPSAnbnVtYmVyJztcclxuICAgIHRoaXMuaW5wdXQuaWQgPSAnbGlnaHQtcG9zaXRpb24tcmFkaXVzLWlucHV0JztcclxuICAgIHRoaXMuaW5wdXQubWluID0gJzAnO1xyXG4gICAgdGhpcy5pbnB1dC5zdHlsZS53aWR0aCA9ICc4MHB4JztcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XHJcblxyXG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlKGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQuZGVmYXVsdFJhZGl1cyk7XHJcbiAgICB0aGlzLm9uTGlnaHRQb3NpdGlvblJhZGl1c0NoYW5nZSA9IHRoaXMub25MaWdodFBvc2l0aW9uUmFkaXVzQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGxpZ2h0UG9zaXRpb25SYWRpdXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuaW5wdXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBsaWdodFBvc2l0aW9uUmFkaXVzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLm9uTGlnaHRQb3NpdGlvblJhZGl1c0NoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uTGlnaHRQb3NpdGlvblJhZGl1c0NoYW5nZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25MaWdodFBvc2l0aW9uUmFkaXVzQ2hhbmdlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25MaWdodFBvc2l0aW9uUmFkaXVzQ2hhbmdlKCkge1xyXG4gICAgY29uc3QgbGlnaHRQb3NpdGlvblJhZGl1cyA9IHRoaXMubGlnaHRQb3NpdGlvblJhZGl1cztcclxuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShsaWdodFBvc2l0aW9uUmFkaXVzKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdMaWdodFBvc2l0aW9uUmFkaXVzRXZlbnQobGlnaHRQb3NpdGlvblJhZGl1cykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJbnB1dFZhbHVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZS50b0ZpeGVkKDIpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtbGlnaHQtcG9zaXRpb24tcmFkaXVzLWlucHV0JywgTGlnaHRQb3NpdGlvblJhZGl1c0lucHV0KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL0xpZ2h0UG9zaXRpb25SYWRpdXNJbnB1dC50cyIsImltcG9ydCB7IE5ld05vcm1hbE1hcEV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5pbXBvcnQgeyBJbWFnZVNlbGVjdERpYWxvZyB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZyc7XHJcbmltcG9ydCB7IEltYWdlU2VsZWN0RGlhbG9nQnV0dG9uLCBJbWFnZVNlbGVjdERpYWxvZ0J1dHRvbkRlcGVuZGVuY2llcyB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZ0J1dHRvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgTm9ybWFsTWFwU2VsZWN0QnV0dG9uIGV4dGVuZHMgSW1hZ2VTZWxlY3REaWFsb2dCdXR0b24ge1xyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogSW1hZ2VTZWxlY3REaWFsb2dCdXR0b25EZXBlbmRlbmNpZXMpIHtcclxuICAgIHN1cGVyKGRlcGVuZGVuY2llcyk7XHJcblxyXG4gICAgdGhpcy5idXR0b24uaW5uZXJUZXh0ID0gJ1NlbGVjdCBub3JtYWwgbWFwJztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXR1cERpYWxvZ0JveCgpIHtcclxuICAgIHRoaXMuZGlhbG9nQm94ID0gbmV3IEltYWdlU2VsZWN0RGlhbG9nKFxyXG4gICAgICBjb25maWd1cmF0aW9uLnByZXNldE5vcm1hbE1hcHMsXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24uaW5pdGlhbEN1c3RvbU5vcm1hbE1hcENvbG9ySGV4XHJcbiAgICApO1xyXG4gICAgdGhpcy5kaWFsb2dCb3gubmFtZSA9ICdOb3JtYWwgbWFwJztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhc3luYyBvbkRpYWxvZ0JveENsb3NlZCgpIHtcclxuICAgIGlmICh0aGlzLmRpYWxvZ0JveC53YXNDYW5jZWxsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGF3YWl0IHRoaXMuZ2V0U2VsZWN0ZWRJbWFnZURhdGEoKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdOb3JtYWxNYXBFdmVudChpbWFnZURhdGEpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtbm9ybWFsLW1hcC1zZWxlY3QtYnV0dG9uJywgTm9ybWFsTWFwU2VsZWN0QnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnB1dC1kYXRhL05vcm1hbE1hcFNlbGVjdEJ1dHRvbi50cyIsImltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBMb2FkaW5nRmluaXNoZWRFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9Mb2FkaW5nRmluaXNoZWRFdmVudCc7XHJcbmltcG9ydCB7IExvYWRpbmdTdGFydGVkRXZlbnQgfSBmcm9tICdldmVudHMvdWkvTG9hZGluZ1N0YXJ0ZWRFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dPdmVybGF5IH0gZnJvbSAndWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5JztcclxuaW1wb3J0IHsgTG9hZGluZ0JhckRpYWxvZyB9IGZyb20gJ3VpL2NvbXBvbmVudHMvbG9hZGluZy1iYXItZGlhbG9nL0xvYWRpbmdCYXJEaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuaW50ZXJmYWNlIExvYWRpbmdVSVNlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIGRpYWxvZ092ZXJsYXk6IERpYWxvZ092ZXJsYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nVUlTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGRpYWxvZ092ZXJsYXk6IERpYWxvZ092ZXJsYXk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBsb2FkaW5nQmFyRGlhbG9nOiBMb2FkaW5nQmFyRGlhbG9nO1xyXG5cclxuICBwcml2YXRlIGxvYWRlZEFzc2V0c0NvdW50ID0gMDtcclxuICBwcml2YXRlIHRvdGFsQXNzZXRzVG9Mb2FkQ291bnQgPSAwO1xyXG5cclxuICBwcml2YXRlIGhpZGVMb2FkaW5nQmFyVGltZW91dElkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBMb2FkaW5nVUlTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkgPSBkZXBlbmRlbmNpZXMuZGlhbG9nT3ZlcmxheTtcclxuXHJcbiAgICB0aGlzLmxvYWRpbmdCYXJEaWFsb2cgPSBuZXcgTG9hZGluZ0JhckRpYWxvZygpO1xyXG5cclxuICAgIHRoaXMub25Mb2FkaW5nU3RhcnRlZEV2ZW50ID0gdGhpcy5vbkxvYWRpbmdTdGFydGVkRXZlbnQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Mb2FkaW5nRmluaXNoZWRFdmVudCA9IHRoaXMub25Mb2FkaW5nRmluaXNoZWRFdmVudC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oaWRlTG9hZGluZ0JhciA9IHRoaXMuaGlkZUxvYWRpbmdCYXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgTG9hZGluZ0ZpbmlzaGVkRXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICB0aGlzLm9uTG9hZGluZ0ZpbmlzaGVkRXZlbnRcclxuICAgICk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBMb2FkaW5nU3RhcnRlZEV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbkxvYWRpbmdTdGFydGVkRXZlbnRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIExvYWRpbmdGaW5pc2hlZEV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbkxvYWRpbmdGaW5pc2hlZEV2ZW50XHJcbiAgICApO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgTG9hZGluZ1N0YXJ0ZWRFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25Mb2FkaW5nU3RhcnRlZEV2ZW50XHJcbiAgICApO1xyXG4gICAgdGhpcy5oaWRlTG9hZGluZ0JhcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkxvYWRpbmdTdGFydGVkRXZlbnQoKSB7XHJcbiAgICBpZiAodGhpcy50b3RhbEFzc2V0c1RvTG9hZENvdW50ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc2hvd0xvYWRpbmdCYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvdGFsQXNzZXRzVG9Mb2FkQ291bnQgKz0gMTtcclxuICAgIHRoaXMudXBkYXRlTG9hZGluZ0JhcigpO1xyXG4gICAgdGhpcy5hYm9ydERlbGF5ZWRIaWRlTG9hZGluZ0JhcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkxvYWRpbmdGaW5pc2hlZEV2ZW50KCkge1xyXG4gICAgdGhpcy5sb2FkZWRBc3NldHNDb3VudCArPSAxO1xyXG4gICAgdGhpcy51cGRhdGVMb2FkaW5nQmFyKCk7XHJcblxyXG4gICAgaWYgKHRoaXMubG9hZGVkQXNzZXRzQ291bnQgPT09IHRoaXMudG90YWxBc3NldHNUb0xvYWRDb3VudCkge1xyXG4gICAgICB0aGlzLmRlbGF5ZWRIaWRlTG9hZGluZ0JhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldCgpIHtcclxuICAgIHRoaXMubG9hZGVkQXNzZXRzQ291bnQgPSAwO1xyXG4gICAgdGhpcy50b3RhbEFzc2V0c1RvTG9hZENvdW50ID0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0xvYWRpbmdCYXIoKSB7XHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkuc2hvd0RpYWxvZyh0aGlzLmxvYWRpbmdCYXJEaWFsb2cpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxheWVkSGlkZUxvYWRpbmdCYXIoKSB7XHJcbiAgICB0aGlzLmhpZGVMb2FkaW5nQmFyVGltZW91dElkID0gc2V0VGltZW91dChcclxuICAgICAgdGhpcy5oaWRlTG9hZGluZ0JhcixcclxuICAgICAgY29uZmlndXJhdGlvbi5sb2FkaW5nQmFySGlkZURlbGF5XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhYm9ydERlbGF5ZWRIaWRlTG9hZGluZ0JhcigpIHtcclxuICAgIGlmICh0aGlzLmhpZGVMb2FkaW5nQmFyVGltZW91dElkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhpZGVMb2FkaW5nQmFyVGltZW91dElkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZUxvYWRpbmdCYXIoKSB7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB0aGlzLmxvYWRpbmdCYXJEaWFsb2cuY2xvc2UoKTtcclxuICAgIHRoaXMuaGlkZUxvYWRpbmdCYXJUaW1lb3V0SWQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVMb2FkaW5nQmFyKCkge1xyXG4gICAgdGhpcy5sb2FkaW5nQmFyRGlhbG9nLmxvYWRlZEFzc2V0c0NvdW50ID0gdGhpcy5sb2FkZWRBc3NldHNDb3VudC50b0ZpeGVkKDApO1xyXG4gICAgdGhpcy5sb2FkaW5nQmFyRGlhbG9nLnRvdGFsQXNzZXRzQ291bnQgPSB0aGlzLnRvdGFsQXNzZXRzVG9Mb2FkQ291bnQudG9GaXhlZCgwKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvTG9hZGluZ1VJU2VydmljZS50cyIsImltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvRGlhbG9nQm94JztcclxuXHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9sb2FkaW5nLWJhci1kaWFsb2cvTG9hZGluZ0JhckRpYWxvZy5zY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQmFyRGlhbG9nIGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBEaWFsb2dCb3gge1xyXG4gIHByaXZhdGUgYmFja2dyb3VuZEJhcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwcm9ncmVzc0xhYmVsOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuY2xhc3NOYW1lID0gJ2xvYWRpbmctYmFyLWRpYWxvZyBkaWFsb2ctYm94JztcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZEJhci5jbGFzc05hbWUgPSAnbG9hZGluZy1kaWFsb2dfX2JhY2tncm91bmQtYmFyJztcclxuICAgIHRoaXMuYmFja2dyb3VuZEJhci5pbm5lclRleHQgPSAnICc7XHJcblxyXG4gICAgdGhpcy5wcm9ncmVzc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0ZXh0LmlubmVyVGV4dCA9ICdMb2FkaW5nLi4uICc7XHJcbiAgICB0ZXh0LmFwcGVuZENoaWxkKHRoaXMucHJvZ3Jlc3NMYWJlbCk7XHJcblxyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmJhY2tncm91bmRCYXIpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuXHJcbiAgICB0aGlzLnRvdGFsQXNzZXRzQ291bnQgPSAnMCc7XHJcbiAgICB0aGlzLmxvYWRlZEFzc2V0c0NvdW50ID0gJzAnO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgIHJldHVybiBbJ3RvdGFsLWFzc2V0cy1jb3VudCcsICdsb2FkZWQtYXNzZXRzLWNvdW50J107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAvLyBFbXB0eVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgLy8gRW1wdHlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlOiBzdHJpbmcsIF9vbGRWYWx1ZTogc3RyaW5nLCBfbmV3VmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ3RvdGFsLWFzc2V0cy1jb3VudCcgfHwgYXR0cmlidXRlID09PSAnbG9hZGVkLWFzc2V0cy1jb3VudCcpIHtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbkNsb3NlKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB0b3RhbEFzc2V0c0NvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0b3RhbC1hc3NldHMtY291bnQnKSB8fCAnJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgdG90YWxBc3NldHNDb3VudCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgndG90YWwtYXNzZXRzLWNvdW50JywgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBsb2FkZWRBc3NldHNDb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbG9hZGVkLWFzc2V0cy1jb3VudCcpIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBsb2FkZWRBc3NldHNDb3VudCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbG9hZGVkLWFzc2V0cy1jb3VudCcsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlKCkge1xyXG4gICAgY29uc3QgbG9hZGVkQXNzZXRzQ291bnQgPSBwYXJzZUludCh0aGlzLmxvYWRlZEFzc2V0c0NvdW50LCAxMCk7XHJcbiAgICBjb25zdCB0b3RhbEFzc2V0c0NvdW50ID0gcGFyc2VJbnQodGhpcy50b3RhbEFzc2V0c0NvdW50LCAxMCk7XHJcblxyXG4gICAgbGV0IHByb2dyZXNzID0gMTAwO1xyXG4gICAgaWYgKHRvdGFsQXNzZXRzQ291bnQgPiAwKSB7XHJcbiAgICAgIHByb2dyZXNzID0gTWF0aC5yb3VuZChsb2FkZWRBc3NldHNDb3VudCAvIHRvdGFsQXNzZXRzQ291bnQgKiAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZEJhci5zdHlsZS53aWR0aCA9IGAke3Byb2dyZXNzfSVgO1xyXG5cclxuICAgIHRoaXMucHJvZ3Jlc3NMYWJlbC5pbm5lclRleHQgPSBgJHtsb2FkZWRBc3NldHNDb3VudH0gLyAke3RvdGFsQXNzZXRzQ291bnR9ICgke3Byb2dyZXNzfSAlKWA7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtbG9hZGluZy1iYXItZGlhbG9nJywgTG9hZGluZ0JhckRpYWxvZyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvbG9hZGluZy1iYXItZGlhbG9nL0xvYWRpbmdCYXJEaWFsb2cudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Mb2FkaW5nQmFyRGlhbG9nLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTG9hZGluZ0JhckRpYWxvZy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0xvYWRpbmdCYXJEaWFsb2cuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9sb2FkaW5nLWJhci1kaWFsb2cvTG9hZGluZ0JhckRpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubG9hZGluZy1iYXItZGlhbG9ne292ZXJmbG93OmhpZGRlbn0ubG9hZGluZy1kaWFsb2dfX2JhY2tncm91bmQtYmFye3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3RyYW5zaXRpb246d2lkdGggLjJzIGVhc2UtaW4tb3V0O2JhY2tncm91bmQtY29sb3I6Y3lhbjttYXJnaW46LTJyZW07ei1pbmRleDotMX1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9sb2FkaW5nLWJhci1kaWFsb2cvTG9hZGluZ0JhckRpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIHtcclxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjYW52YXNDbGllbnRSZWN0OiBDbGllbnRSZWN0O1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNhbnZhc09mZnNldCgpO1xyXG5cclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVDYW52YXNPZmZzZXQoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUNhbnZhc09mZnNldCgpIHtcclxuICAgIHRoaXMuY2FudmFzQ2xpZW50UmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoXHJcbiAgICAgIGV2ZW50LmNsaWVudFggLSB0aGlzLmNhbnZhc0NsaWVudFJlY3QubGVmdCxcclxuICAgICAgZXZlbnQuY2xpZW50WSAtIHRoaXMuY2FudmFzQ2xpZW50UmVjdC50b3BcclxuICAgICkuZmxvb3IoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLnRzIiwiaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICdjb21tb24vUG9seWdvbic7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICdSZW5kZXJlcic7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICd1aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXInO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFBvaW50Q2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9Qb2ludENsaWNrRXZlbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckZpbmlzaGVkRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRmluaXNoZWRFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbnRlcmZhY2UgTmV3UG9seWdvblVJQ29udHJvbGxlckRlcGVuZGVuY2llcyB7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdQb2x5Z29uVUlDb250cm9sbGVyIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSB1bmZpbmlzaGVkUGF0aDogUGF0aDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHBhdGhMYXllciA9IG5ldyBMYXllcihMRVguUEFUSF9MQVlFUl9OQU1FKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IHBvbHlnb25MYXllcjogTGF5ZXI7XHJcblxyXG4gIHByaXZhdGUgbGFzdE1vdXNlUG9zaXRpb246IFBvaW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IE5ld1BvbHlnb25VSUNvbnRyb2xsZXJEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uTGF5ZXI7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gZGVwZW5kZW5jaWVzLnJlbmRlcmVyO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIHRoaXMuY2xvc2VQYXRoID0gdGhpcy5jbG9zZVBhdGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uUG9pbnRDbGljayA9IHRoaXMub25Qb2ludENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdOZXdMaW5lR3VpZGUgPSB0aGlzLmRyYXdOZXdMaW5lR3VpZGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMucHVzaCh0aGlzLnBhdGhMYXllcik7XHJcbiAgICB0aGlzLnN0YXJ0TmV3VW5maW5pc2hlZFBhdGgoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5zdGFnZS5yZW1vdmVMYXllcih0aGlzLnBhdGhMYXllcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkTmV3UG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLnVuZmluaXNoZWRQYXRoLmFkZFZlcnRleChwb2ludCk7XHJcbiAgICB0aGlzLmRpc3BhdGNoVXBkYXRlVUlFdmVudHMoKTtcclxuXHJcbiAgICBpZiAodGhpcy51bmZpbmlzaGVkUGF0aC5nZXRWZXJ0aWNlc0NvdW50KCkgPT09IDEpIHtcclxuICAgICAgdGhpcy5sYXN0TW91c2VQb3NpdGlvbiA9IHBvaW50O1xyXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMubGFzdE1vdXNlUG9zaXRpb24gPSB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci5nZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd05ld0xpbmVHdWlkZSgpIHtcclxuICAgIGNvbnN0IGxhc3RQb2ludCA9IHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGV4KHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGljZXNDb3VudCgpIC0gMSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmRyYXdMaW5lKFxyXG4gICAgICBsYXN0UG9pbnQsXHJcbiAgICAgIHRoaXMubGFzdE1vdXNlUG9zaXRpb24sXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ubmV3TGluZVByZXZpZXdQcm9wZXJ0aWVzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblBvaW50Q2xpY2soZXZlbnQ6IFBvaW50Q2xpY2tFdmVudCkge1xyXG4gICAgY29uc3QgcGF0aFBvaW50RWxlbWVudCA9IGV2ZW50LnBheWxvYWQ7XHJcblxyXG4gICAgaWYgKHBhdGhQb2ludEVsZW1lbnQucGF0aCA9PT0gdGhpcy51bmZpbmlzaGVkUGF0aCAmJiBwYXRoUG9pbnRFbGVtZW50LmluaXRpYWwpIHtcclxuICAgICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgcGF0aFBvaW50RWxlbWVudC5pbml0aWFsID0gZmFsc2U7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnROZXdVbmZpbmlzaGVkUGF0aCgpIHtcclxuICAgIHRoaXMudW5maW5pc2hlZFBhdGggPSBuZXcgUGF0aChbXSwgY29uZmlndXJhdGlvbi5uZXdQb2x5Z29uTGluZVByb3BlcnRpZXMpO1xyXG4gICAgdGhpcy5wYXRoTGF5ZXIucGF0aHMucHVzaCh0aGlzLnVuZmluaXNoZWRQYXRoKTtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvc2VQYXRoKCkge1xyXG4gICAgaWYgKHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGljZXNDb3VudCgpIDwgY29uZmlndXJhdGlvbi5taW5Qb2x5Z29uUG9pbnRzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUG9seWdvbiBtdXN0IGhhdmUgYXQgbGVhc3QgJHtjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHN9IHZlcnRpY2VzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51bmZpbmlzaGVkUGF0aC5saW5lUHJvcGVydGllcyA9IGNvbmZpZ3VyYXRpb24ucG9seWdvbkxpbmVQcm9wZXJ0aWVzO1xyXG4gICAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uKHRoaXMudW5maW5pc2hlZFBhdGgpO1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIucGF0aHMucHVzaChwb2x5Z29uKTtcclxuICAgIHRoaXMucGF0aExheWVyLnJlbW92ZVBhdGgodGhpcy51bmZpbmlzaGVkUGF0aCk7XHJcblxyXG4gICAgdGhpcy5zdGFydE5ld1VuZmluaXNoZWRQYXRoKCk7XHJcbiAgICB0aGlzLmRpc3BhdGNoVXBkYXRlVUlFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGF0Y2hVcGRhdGVVSUV2ZW50cygpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSAyNzpcclxuICAgICAgICB0aGlzLnBhdGhMYXllci5yZW1vdmVQYXRoKHRoaXMudW5maW5pc2hlZFBhdGgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnROZXdVbmZpbmlzaGVkUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hVcGRhdGVVSUV2ZW50cygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUmVuZGVyRmluaXNoZWRFdmVudC5uYW1lLCB0aGlzLmRyYXdOZXdMaW5lR3VpZGUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludENsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoUmVuZGVyRmluaXNoZWRFdmVudC5uYW1lLCB0aGlzLmRyYXdOZXdMaW5lR3VpZGUpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludENsaWNrKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvTmV3UG9seWdvblVJQ29udHJvbGxlci50cyIsImltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICd1aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXInO1xyXG5cclxuaW1wb3J0IHsgQ2xvc2VzdFBhdGhGaW5kZXIgfSBmcm9tICdzZXJ2aWNlcy9DbG9zZXN0UGF0aEZpbmRlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmludGVyZmFjZSBQYXRoRHJhZ2dpbmdTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBjbG9zZXN0UGF0aEZpbmRlcjogQ2xvc2VzdFBhdGhGaW5kZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoRHJhZ2dpbmdTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNsb3Nlc3RQYXRoRmluZGVyOiBDbG9zZXN0UGF0aEZpbmRlcjtcclxuXHJcbiAgcHJpdmF0ZSBwYXRoVG9EcmFnOiBQYXRoIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgcHJldmlvdXNQb2ludDogUG9pbnQgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBhdGhEcmFnZ2luZ1NlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLmNsb3Nlc3RQYXRoRmluZGVyID0gZGVwZW5kZW5jaWVzLmNsb3Nlc3RQYXRoRmluZGVyO1xyXG5cclxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VPdXQgPSB0aGlzLm9uTW91c2VPdXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgLy8gVE9ETzogcG9zc2libGUgcGF0aCBnaG9zdCBsYXllciBoZXJlXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3RvcERyYWdnaW5nUGF0aCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0RyYWdnaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzRHJhZ2dpbmc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnRNb3ZpbmdQYXRoKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBjb25zdCBwb2ludCA9IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLmdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgIHRoaXMucGF0aFRvRHJhZyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMucHJldmlvdXNQb2ludCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdCBhbGxQYXRoc0luQm91bmRpbmdCb3g6IFBhdGhbXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5zdGFnZS5sYXllcnMpIHtcclxuICAgICAgY29uc3QgcGF0aHNJbkJvdW5kaW5nQm94ID0gbGF5ZXIucGF0aHMuZmlsdGVyKHBhdGggPT4gcGF0aC5pc1BvaW50SW5Cb3VuZGluZ0JveChwb2ludCkpO1xyXG4gICAgICBhbGxQYXRoc0luQm91bmRpbmdCb3gucHVzaCguLi5wYXRoc0luQm91bmRpbmdCb3gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhbGxQYXRoc0luQm91bmRpbmdCb3gubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgnQ2Fubm90IGRyYWcgcGF0aCAtIG5vIHBhdGggZm91bmQsIHBvaW50IGlzIG5vdCBpbiB0aGUgYm91bmRpbmcgYm94Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXRoVG9EcmFnID0gdGhpcy5jbG9zZXN0UGF0aEZpbmRlci5nZXRDbG9zZXN0UGF0aChhbGxQYXRoc0luQm91bmRpbmdCb3gsIHBvaW50KTtcclxuICAgIHRoaXMucHJldmlvdXNQb2ludCA9IHBvaW50O1xyXG4gICAgdGhpcy5faXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLm9uTW91c2VPdXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5vbk1vdXNlT3V0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5wYXRoVG9EcmFnIHx8ICF0aGlzLnByZXZpb3VzUG9pbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIuZ2V0UG9pbnRGcm9tTW91c2VFdmVudChldmVudCk7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uVmVjdG9yID0gUG9pbnQuc3VidHJhY3QocG9pbnQsIHRoaXMucHJldmlvdXNQb2ludCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBwYXRoUG9pbnQgb2YgdGhpcy5wYXRoVG9EcmFnLmdldFZlcnRpY2VzKCkpIHtcclxuICAgICAgcGF0aFBvaW50Lm1vdmVUbyhQb2ludC5hZGQocGF0aFBvaW50LCB0cmFuc2l0aW9uVmVjdG9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG5cclxuICAgIHRoaXMucHJldmlvdXNQb2ludCA9IHBvaW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlVXAoX2V2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLnN0b3BEcmFnZ2luZ1BhdGgoKTtcclxuICAgIHRoaXMuY2FuY2VsTmV4dENsaWNrRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZU91dChfZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIHRoaXMuc3RvcERyYWdnaW5nUGF0aCgpO1xyXG4gICAgdGhpcy5faXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdG9wRHJhZ2dpbmdQYXRoKCkge1xyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5wYXRoVG9EcmFnID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5wcmV2aW91c1BvaW50ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYW5jZWxOZXh0Q2xpY2tFdmVudCgpIHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCB0cnVlKTtcclxuICAgICAgdGhpcy5faXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCB0cnVlKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUGF0aERyYWdnaW5nU2VydmljZS50cyIsImltcG9ydCB7IENPTE9SUyB9IGZyb20gJ2NvbW1vbi9DT0xPUlMnO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IExpbmVQcm9wZXJ0aWVzIH0gZnJvbSAnY29tbW9uL0xpbmVQcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBGaW5pc2hQb2ludERyYWdFdmVudCB9IGZyb20gJ2V2ZW50cy9wb2ludC1kcmFnL0ZpbmlzaFBvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgUG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9Qb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFN0YXJ0UG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50RHJhZ2dpbmdTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50RHJhZ2dpbmdTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwYXRoR2hvc3RMYXllcjogTGF5ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9pbnREcmFnZ2luZ1NlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcblxyXG4gICAgdGhpcy5vblN0YXJ0UG9pbnREcmFnID0gdGhpcy5vblN0YXJ0UG9pbnREcmFnLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRmluaXNoUG9pbnREcmFnID0gdGhpcy5vbkZpbmlzaFBvaW50RHJhZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblBvaW50RHJhZyA9IHRoaXMub25Qb2ludERyYWcuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5wYXRoR2hvc3RMYXllciA9IG5ldyBMYXllcihMRVguUEFUSF9HSE9TVF9MQVlFUl9OQU1FKTtcclxuICAgIHRoaXMuc3RhZ2UubGF5ZXJzLnNwbGljZSgwLCAwLCB0aGlzLnBhdGhHaG9zdExheWVyKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFN0YXJ0UG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uU3RhcnRQb2ludERyYWcpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihGaW5pc2hQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25GaW5pc2hQb2ludERyYWcpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludERyYWcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnBhdGhHaG9zdExheWVyLnBhdGhzID0gW107XHJcbiAgICB0aGlzLnN0YWdlLnJlbW92ZUxheWVyKHRoaXMucGF0aEdob3N0TGF5ZXIpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoU3RhcnRQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25TdGFydFBvaW50RHJhZyk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBGaW5pc2hQb2ludERyYWdFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25GaW5pc2hQb2ludERyYWdcclxuICAgICk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50RHJhZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU3RhcnRQb2ludERyYWcoZXZlbnQ6IFN0YXJ0UG9pbnREcmFnRXZlbnQpIHtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICghY29uZmlndXJhdGlvbi5kaXNwbGF5UGF0aEdob3N0V2hlbkRyYWdnaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXRoID0gZXZlbnQucGF5bG9hZC5wYXRoLmNsb25lKCk7XHJcbiAgICBwYXRoLmxpbmVQcm9wZXJ0aWVzID0gbmV3IExpbmVQcm9wZXJ0aWVzKENPTE9SUy5HUkVFTiwgMSk7XHJcbiAgICB0aGlzLnBhdGhHaG9zdExheWVyLnBhdGhzLnB1c2gocGF0aCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZpbmlzaFBvaW50RHJhZyhldmVudDogRmluaXNoUG9pbnREcmFnRXZlbnQpIHtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gICAgaWYgKCFjb25maWd1cmF0aW9uLmRpc3BsYXlQYXRoR2hvc3RXaGVuRHJhZ2dpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGF0aEdob3N0TGF5ZXIucGF0aHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUG9pbnREcmFnKGV2ZW50OiBQb2ludERyYWdFdmVudCkge1xyXG4gICAgY29uc3QgeyBlbGVtZW50LCBuZXdQb3NpdGlvbiB9ID0gZXZlbnQucGF5bG9hZDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIGVsZW1lbnQucGF0aC5nZXRWZXJ0aWNlc0l0ZXJhdG9yKCkpIHtcclxuICAgICAgaWYgKHBvaW50LmVxdWFscyhuZXdQb3NpdGlvbikpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgeCA9IG5ld1Bvc2l0aW9uLng7XHJcbiAgICBsZXQgeSA9IG5ld1Bvc2l0aW9uLnk7XHJcblxyXG4gICAgaWYgKHggPCAwKSB7XHJcbiAgICAgIHggPSAwO1xyXG4gICAgfSBlbHNlIGlmICh4ID49IHRoaXMuY2FudmFzLndpZHRoKSB7XHJcbiAgICAgIHggPSB0aGlzLmNhbnZhcy53aWR0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPCAwKSB7XHJcbiAgICAgIHkgPSAwO1xyXG4gICAgfSBlbHNlIGlmICh5ID49IHRoaXMuY2FudmFzLmhlaWdodCkge1xyXG4gICAgICB5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LnBvaW50Lm1vdmVUbyh4LCB5KTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2ludERyYWdnaW5nU2VydmljZS50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBMaW5lQ2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9MaW5lQ2xpY2tFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50SW5zZXJ0ZXJTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50SW5zZXJ0ZXJTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBwcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcCA9IDA7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c0xpbmVIaXQ6IExpbmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9pbnRJbnNlcnRlclNlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICB0aGlzLm9uTGluZUNsaWNrID0gdGhpcy5vbkxpbmVDbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKExpbmVDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbkxpbmVDbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoTGluZUNsaWNrRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTGluZUNsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25MaW5lQ2xpY2soZXZlbnQ6IExpbmVDbGlja0V2ZW50KSB7XHJcbiAgICBjb25zdCBwcmV2aW91c0xpbmVIaXQgPSB0aGlzLnByZXZpb3VzTGluZUhpdDtcclxuICAgIGNvbnN0IHByZXZpb3VzTGluZUNsaWNrVGltZXN0YW1wID0gdGhpcy5wcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcDtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSGl0ID0gZXZlbnQucGF5bG9hZC5saW5lO1xyXG4gICAgdGhpcy5wcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcCA9IGN1cnJlbnRUaW1lc3RhbXA7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhcHJldmlvdXNMaW5lSGl0IHx8XHJcbiAgICAgIGN1cnJlbnRUaW1lc3RhbXAgLSBwcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcCA+IGNvbmZpZ3VyYXRpb24uZG91YmxlQ2xpY2tNYXhEZWxheVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJldmlvdXNMaW5lSGl0LmVxdWFscyhldmVudC5wYXlsb2FkLmxpbmUpKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQucGF5bG9hZC5wYXRoLmZpbmRQb2ludEluZGV4KGV2ZW50LnBheWxvYWQubGluZS5wMik7XHJcbiAgICAgIGNvbnN0IG5ld1BvaW50ID0gZXZlbnQucGF5bG9hZC5saW5lLmdldE1pZGRsZVBvaW50KCk7XHJcbiAgICAgIGNvbnN0IGZsb29yZWRQb2ludCA9IG5ld1BvaW50LmZsb29yKCk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGV2ZW50LnBheWxvYWQucGF0aC5pbnNlcnRWZXJ0ZXgoZmxvb3JlZFBvaW50LCBpbmRleCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUT0RPOiBmaXggd3JvbmcgcmVuZGVyaW5nXHJcbiAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2ludEluc2VydGVyU2VydmljZS50cyIsImltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFBvaW50Q2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9Qb2ludENsaWNrRXZlbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludEVsZW1lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL3BhdGgtcG9pbnQvUGF0aFBvaW50RWxlbWVudCc7XHJcblxyXG5pbnRlcmZhY2UgUG9pbnRSZW1vdmVyU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludFJlbW92ZXJTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBwcmV2aW91c1BhdGhQb2ludEVsZW1lbnQ6IFBhdGhQb2ludEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c0NsaWNrVGltZXN0YW1wID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2ludFJlbW92ZXJTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLm9uUG9pbnRDbGljayA9IHRoaXMub25Qb2ludENsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUG9pbnRDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludENsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Qb2ludENsaWNrKGV2ZW50OiBQb2ludENsaWNrRXZlbnQpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhQb2ludEVsZW1lbnQgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgY29uc3QgcHJldmlvdXNQYXRoUG9pbnRFbGVtZW50ID0gdGhpcy5wcmV2aW91c1BhdGhQb2ludEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwcmV2aW91c0NsaWNrVGltZXN0YW1wID0gdGhpcy5wcmV2aW91c0NsaWNrVGltZXN0YW1wO1xyXG5cclxuICAgIHRoaXMudXBkYXRlUHJldmlvdXNDbGlja0luZm9ybWF0aW9uKGV2ZW50LCBjdXJyZW50VGltZXN0YW1wKTtcclxuXHJcbiAgICBpZiAoIXByZXZpb3VzUGF0aFBvaW50RWxlbWVudCB8fCBwcmV2aW91c1BhdGhQb2ludEVsZW1lbnQgIT09IHBhdGhQb2ludEVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50VGltZXN0YW1wIC0gcHJldmlvdXNDbGlja1RpbWVzdGFtcCA+IGNvbmZpZ3VyYXRpb24uZG91YmxlQ2xpY2tNYXhEZWxheSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmVQcmV2aW91c0NsaWNrZWRQb2ludCgpO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVByZXZpb3VzQ2xpY2tJbmZvcm1hdGlvbihldmVudDogUG9pbnRDbGlja0V2ZW50LCB0aW1lc3RhbXA6IG51bWJlcikge1xyXG4gICAgdGhpcy5wcmV2aW91c1BhdGhQb2ludEVsZW1lbnQgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5wcmV2aW91c0NsaWNrVGltZXN0YW1wID0gdGltZXN0YW1wO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVQcmV2aW91c0NsaWNrZWRQb2ludCgpIHtcclxuICAgIGNvbnN0IHBhdGggPSB0aGlzLnByZXZpb3VzUGF0aFBvaW50RWxlbWVudC5wYXRoO1xyXG4gICAgY29uc3QgcG9pbnQgPSB0aGlzLnByZXZpb3VzUGF0aFBvaW50RWxlbWVudC5wb2ludDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBwYXRoLnJlbW92ZVZlcnRleChwb2ludCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ0Nhbm5vdCByZW1vdmUgdmVydGV4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcmV2aW91c1BhdGhQb2ludEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1BvaW50UmVtb3ZlclNlcnZpY2UudHMiLCJpbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIFBhdGhQb2ludEVsZW1lbnQsXHJcbiAgUGF0aFBvaW50RWxlbWVudERlcGVuZGVuY2llc1xyXG59IGZyb20gJ3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50JztcclxuaW1wb3J0IHsgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIH0gZnJvbSAndWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50U3luY1NlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIHN0YWdlOiBTdGFnZTtcclxuICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGF0aFBvaW50VHVwbGUge1xyXG4gIHBhdGg6IFBhdGg7XHJcbiAgcG9pbnQ6IFBvaW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRTeW5jU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcGF0aFBvaW50RWxlbWVudHM6IFBhdGhQb2ludEVsZW1lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwYXRoUG9pbnREZXBlbmRlbmNpZXM6IFBhdGhQb2ludEVsZW1lbnREZXBlbmRlbmNpZXM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9pbnRTeW5jU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5zdGFnZSA9IGRlcGVuZGVuY2llcy5zdGFnZTtcclxuICAgIHRoaXMuY29udGFpbmVyID0gZGVwZW5kZW5jaWVzLmNvbnRhaW5lcjtcclxuICAgIHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyID0gZGVwZW5kZW5jaWVzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICB0aGlzLnBhdGhQb2ludERlcGVuZGVuY2llcyA9IHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lclxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnN5bmNocm9uaXplRWxlbWVudHMgPSB0aGlzLnN5bmNocm9uaXplRWxlbWVudHMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgU3luY0NvbXBvbmVudHNFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMuc3luY2hyb25pemVFbGVtZW50c1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgU3luY0NvbXBvbmVudHNFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMuc3luY2hyb25pemVFbGVtZW50c1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzeW5jaHJvbml6ZUVsZW1lbnRzKGV2ZW50OiBTeW5jQ29tcG9uZW50c0V2ZW50KSB7XHJcbiAgICBjb25zdCBlbGVtZW50c1RvUmVtb3ZlID0gdGhpcy5nZXRSZWR1bmRhbnRFbGVtZW50cygpO1xyXG4gICAgZWxlbWVudHNUb1JlbW92ZS5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQucmVtb3ZlKCkpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhQb2ludFR1cGxlcyA9IHRoaXMuZ2V0UGF0aFBvaW50VHVwbGVzKCk7XHJcbiAgICBjb25zdCBwb2ludHNXaXRob3V0RWxlbWVudHMgPSB0aGlzLmdldFBvaW50c1dpdGhvdXRFbGVtZW50cyhwYXRoUG9pbnRUdXBsZXMpO1xyXG4gICAgY29uc3QgbmV3RWxlbWVudHMgPSB0aGlzLmNyZWF0ZVBhdGhQb2ludEVsZW1lbnRzKHBvaW50c1dpdGhvdXRFbGVtZW50cyk7XHJcbiAgICBuZXdFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRzTm90UmVtb3ZlZCA9IHRoaXMucGF0aFBvaW50RWxlbWVudHMuZmlsdGVyKFxyXG4gICAgICBlbGVtZW50ID0+IGVsZW1lbnRzVG9SZW1vdmUuaW5kZXhPZihlbGVtZW50KSA9PT0gLTFcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wYXRoUG9pbnRFbGVtZW50cyA9IFsuLi5uZXdFbGVtZW50cywgLi4uZWxlbWVudHNOb3RSZW1vdmVkXTtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYXRoUG9pbnRUdXBsZXMoKSB7XHJcbiAgICBjb25zdCBwYXRoUG9pbnRUdXBsZXM6IFBhdGhQb2ludFR1cGxlW10gPSBbXTtcclxuXHJcbiAgICB0aGlzLnN0YWdlLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgbGF5ZXIucGF0aHMuZm9yRWFjaChwYXRoID0+IHtcclxuICAgICAgICBwYXRoLmdldFZlcnRpY2VzKCkuZm9yRWFjaChwb2ludCA9PiB7XHJcbiAgICAgICAgICBwYXRoUG9pbnRUdXBsZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgIHBvaW50XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGF0aFBvaW50VHVwbGVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQYXRoUG9pbnRFbGVtZW50cyhwYXRoUG9pbnRzOiBQYXRoUG9pbnRUdXBsZVtdKSB7XHJcbiAgICByZXR1cm4gcGF0aFBvaW50cy5tYXAoXHJcbiAgICAgIHBhdGhQb2ludCA9PlxyXG4gICAgICAgIG5ldyBQYXRoUG9pbnRFbGVtZW50KHBhdGhQb2ludC5wYXRoLCBwYXRoUG9pbnQucG9pbnQsIHRoaXMucGF0aFBvaW50RGVwZW5kZW5jaWVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UmVkdW5kYW50RWxlbWVudHMoKSB7XHJcbiAgICBjb25zdCBhY3RpdmVQYXRocyA9IHRoaXMuZ2V0QWN0aXZlUGF0aHMoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wYXRoUG9pbnRFbGVtZW50cy5maWx0ZXIoXHJcbiAgICAgIGNvbXBvbmVudCA9PlxyXG4gICAgICAgIGFjdGl2ZVBhdGhzLmluZGV4T2YoY29tcG9uZW50LnBhdGgpID09PSAtMSB8fFxyXG4gICAgICAgIGNvbXBvbmVudC5wYXRoLmdldFZlcnRpY2VzKCkuaW5kZXhPZihjb21wb25lbnQucG9pbnQpID09PSAtMVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UG9pbnRzV2l0aG91dEVsZW1lbnRzKHBhdGhQb2ludHM6IFBhdGhQb2ludFR1cGxlW10pIHtcclxuICAgIHJldHVybiBwYXRoUG9pbnRzLmZpbHRlcihcclxuICAgICAgcGF0aFBvaW50ID0+XHJcbiAgICAgICAgIXRoaXMucGF0aFBvaW50RWxlbWVudHMuZmluZChcclxuICAgICAgICAgIGNvbXBvbmVudCA9PiBjb21wb25lbnQucGF0aCA9PT0gcGF0aFBvaW50LnBhdGggJiYgY29tcG9uZW50LnBvaW50ID09PSBwYXRoUG9pbnQucG9pbnRcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBY3RpdmVQYXRocygpIHtcclxuICAgIGNvbnN0IHBhdGhzOiBQYXRoW10gPSBbXTtcclxuICAgIHRoaXMuc3RhZ2UubGF5ZXJzLm1hcChsYXllciA9PiBwYXRocy5wdXNoKC4uLmxheWVyLnBhdGhzKSk7XHJcblxyXG4gICAgcmV0dXJuIHBhdGhzO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2ludFN5bmNTZXJ2aWNlLnRzIiwiaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuaW1wb3J0IHsgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIH0gZnJvbSAndWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBGaW5pc2hQb2ludERyYWdFdmVudCB9IGZyb20gJ2V2ZW50cy9wb2ludC1kcmFnL0ZpbmlzaFBvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgUG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9Qb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFN0YXJ0UG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgUG9pbnRDbGlja0V2ZW50IH0gZnJvbSAnZXZlbnRzL1BvaW50Q2xpY2tFdmVudCc7XHJcblxyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50LnNjc3MnO1xyXG5cclxuY29uc3QgY2xhc3NOYW1lcyA9IHtcclxuICBDT01QT05FTlQ6ICdhcHBsaWNhdGlvbi11aV9fdmVydGV4JyxcclxuICBJTklUSUFMOiAnYXBwbGljYXRpb24tdWlfX3ZlcnRleC0taW5pdGlhbCdcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGF0aFBvaW50RWxlbWVudERlcGVuZGVuY2llcyB7XHJcbiAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoUG9pbnRFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHB1YmxpYyBwYXRoOiBQYXRoO1xyXG4gIHB1YmxpYyBwb2ludDogUG9pbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoOiBQYXRoLCBwb2ludDogUG9pbnQsIGRlcGVuZGVuY2llczogUGF0aFBvaW50RWxlbWVudERlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5DT01QT05FTlQpO1xyXG5cclxuICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmcgPSB0aGlzLnN0b3BEcmFnZ2luZy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnBhdGgubGluZVByb3BlcnRpZXMuY29sb3IuZmlsbFN0eWxlO1xyXG4gICAgdGhpcy5zdHlsZS50b3AgPSBgJHt0aGlzLnBvaW50Lnl9cHhgO1xyXG4gICAgdGhpcy5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5wb2ludC54fXB4YDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaW5pdGlhbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWVzLklOSVRJQUwpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBpbml0aWFsKGlzSW5pdGlhbDogYm9vbGVhbikge1xyXG4gICAgaWYgKGlzSW5pdGlhbCkge1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5JTklUSUFMKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWVzLklOSVRJQUwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5wYXRoLmdldFZlcnRpY2VzQ291bnQoKSA9PT0gMSB8fFxyXG4gICAgICAoIXRoaXMucGF0aC5jbG9zZWQgJiYgdGhpcy5wYXRoLmZpbmRQb2ludEluZGV4KHRoaXMucG9pbnQpID09PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcclxuICAgIHRoaXMucG9pbnQubW92ZUNhbGxiYWNrID0gdGhpcy51cGRhdGVQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucG9pbnQubW92ZUNhbGxiYWNrID0gbnVsbDtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VEb3duKCkge1xyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgUG9pbnRDbGlja0V2ZW50KHRoaXMpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblxyXG4gICAgaWYgKGV2ZW50LmhhbmRsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN0YXJ0UG9pbnREcmFnRXZlbnQodGhpcykpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLmdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUG9pbnREcmFnRXZlbnQodGhpcywgbW91c2VQb3NpdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdG9wRHJhZ2dpbmcoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBGaW5pc2hQb2ludERyYWdFdmVudCh0aGlzKSk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXBhdGgtcG9pbnQnLCBQYXRoUG9pbnRFbGVtZW50KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9QYXRoUG9pbnRFbGVtZW50LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUGF0aFBvaW50RWxlbWVudC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL1BhdGhQb2ludEVsZW1lbnQuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9wYXRoLXBvaW50L1BhdGhQb2ludEVsZW1lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcGxpY2F0aW9uLXVpX192ZXJ0ZXh7Ym9yZGVyOjFweCBzb2xpZCAjMDAwO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7cG9zaXRpb246YWJzb2x1dGU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO2JvcmRlcjoycHggc29saWR9LmFwcGxpY2F0aW9uLXVpX192ZXJ0ZXg6bm90KDphY3RpdmUpe2JvcmRlci1jb2xvcjpncmVlbn0uYXBwbGljYXRpb24tdWlfX3ZlcnRleDphY3RpdmV7Ym9yZGVyLWNvbG9yOnJlZH0uYXBwbGljYXRpb24tdWlfX3ZlcnRleC0taW5pdGlhbHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDUxZmZ9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3VpL2NvbXBvbmVudHMvcGF0aC1wb2ludC9QYXRoUG9pbnRFbGVtZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5cclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5pbXBvcnQgeyBMb2FkQnV0dG9uIH0gZnJvbSAndWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL0xvYWRCdXR0b24nO1xyXG5pbXBvcnQgeyBTYXZlQnV0dG9uIH0gZnJvbSAndWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL1NhdmVCdXR0b24nO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIFNlcmlhbGl6YXRpb25TZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJpYWxpemF0aW9uU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc2VyaWFsaXphdGlvbkNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHN0YWdlOiBTdGFnZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBTZXJpYWxpemF0aW9uU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5zdGFnZSA9IGRlcGVuZGVuY2llcy5zdGFnZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgY29uc3Qgc2VyaWFsaXphdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXJpYWxpemF0aW9uLWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKCFzZXJpYWxpemF0aW9uQ29udGFpbmVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2VyaWFsaXphdGlvbiBjb250YWluZXIgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXJpYWxpemF0aW9uQ29udGFpbmVyID0gc2VyaWFsaXphdGlvbkNvbnRhaW5lcjtcclxuXHJcbiAgICBjb25zdCBsb2FkQnV0dG9uID0gbmV3IExvYWRCdXR0b24oe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gbmV3IFNhdmVCdXR0b24oe1xyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXJpYWxpemF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRCdXR0b24pO1xyXG4gICAgdGhpcy5zZXJpYWxpemF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIHRoaXMuc2VyaWFsaXphdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvU2VyaWFsaXphdGlvblNlcnZpY2UudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5pbXBvcnQgeyBTZXJpYWxpemFibGVMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvYWRCdXR0b25EZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHN0YWdlOiBTdGFnZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRCdXR0b24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGJ1dHRvbkVsZW1lbnQ6IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IExvYWRCdXR0b25EZXBlbmRlbmNpZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5zdGFnZSA9IGRlcGVuZGVuY2llcy5zdGFnZTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5pbm5lclRleHQgPSAnTG9hZCc7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uRWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DbGljaygpIHtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWREYXRhID0gcHJvbXB0KCdQbGVhc2UgcGFzdGUgdGhlIHNlcmlhbGl6ZWQgZGF0YScpO1xyXG5cclxuICAgIGlmICghc2VyaWFsaXplZERhdGEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvbHlnb25MYXllciA9IHRoaXMuc3RhZ2UuZmluZExheWVyQnlOYW1lKExFWC5QT0xZR09OX0xBWUVSX05BTUUpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRTZXJpYWxpemFibGVMYXllciA9IHBvbHlnb25MYXllci50b1NlcmlhbGl6YWJsZU9iamVjdCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNlcmlhbGl6YWJsZUxheWVyID0gPFNlcmlhbGl6YWJsZUxheWVyPkpTT04ucGFyc2Uoc2VyaWFsaXplZERhdGEpO1xyXG4gICAgICBwb2x5Z29uTGF5ZXIuZnJvbVNlcmlhbGl6YWJsZU9iamVjdCg8U2VyaWFsaXphYmxlTGF5ZXI+c2VyaWFsaXphYmxlTGF5ZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcG9seWdvbkxheWVyLmZyb21TZXJpYWxpemFibGVPYmplY3QoY3VycmVudFNlcmlhbGl6YWJsZUxheWVyKTtcclxuICAgICAgYWxlcnQoJ0ludmFsaWQgZGF0YScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWxvYWQtYnV0dG9uJywgTG9hZEJ1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9Mb2FkQnV0dG9uLnRzIiwiaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNhdmVCdXR0b25EZXBlbmRlbmNpZXMge1xyXG4gIHN0YWdlOiBTdGFnZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhdmVCdXR0b24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBidXR0b25FbGVtZW50OiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBTYXZlQnV0dG9uRGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcblxyXG4gICAgdGhpcy5idXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuaW5uZXJUZXh0ID0gJ1NhdmUnO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2xpY2soKSB7XHJcbiAgICBjb25zdCBwb2x5Z29uTGF5ZXIgPSB0aGlzLnN0YWdlLmZpbmRMYXllckJ5TmFtZShMRVguUE9MWUdPTl9MQVlFUl9OQU1FKTtcclxuICAgIGNvbnN0IHNlcmlhbGl6YWJsZU9iamVjdCA9IHBvbHlnb25MYXllci50b1NlcmlhbGl6YWJsZU9iamVjdCgpO1xyXG5cclxuICAgIGNvbnN0IHNlcmlhbGl6ZWREYXRhID0gSlNPTi5zdHJpbmdpZnkoc2VyaWFsaXphYmxlT2JqZWN0KTtcclxuICAgIHByb21wdCgnQ29weSB0aGUgZGF0YScsIHNlcmlhbGl6ZWREYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXNhdmUtYnV0dG9uJywgU2F2ZUJ1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9TYXZlQnV0dG9uLnRzIiwiaW1wb3J0ICd1aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkuc2Nzcyc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbG9nT3ZlcmxheSBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcml2YXRlIG92ZXJsYXlFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGRpYWxvZ0JveFN0YWNrOiBEaWFsb2dCb3hbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZGlhbG9nQm94U3RhY2sgPSBbXTtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXlFbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLm9uT3ZlcmxheUNsaWNrID0gdGhpcy5vbk92ZXJsYXlDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkRpYWxvZ0Nsb3NlID0gdGhpcy5vbkRpYWxvZ0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk92ZXJsYXlDbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk92ZXJsYXlDbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd0RpYWxvZyhkaWFsb2dCb3g6IERpYWxvZ0JveCkge1xyXG4gICAgaWYgKHRoaXMuZGlhbG9nQm94U3RhY2subGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc2hvd092ZXJsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpYWxvZ0JveFN0YWNrLnB1c2goZGlhbG9nQm94KTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZGlhbG9nQm94KTtcclxuICAgIGRpYWxvZ0JveC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25EaWFsb2dDbG9zZSk7XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgZGlhbG9nQm94LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1ib3gtLWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uT3ZlcmxheUNsaWNrKCkge1xyXG4gICAgaWYgKHRoaXMuZGlhbG9nQm94U3RhY2subGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b3Btb3N0RGlhbG9nQm94ID0gdGhpcy5kaWFsb2dCb3hTdGFja1t0aGlzLmRpYWxvZ0JveFN0YWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgaWYgKCF0b3Btb3N0RGlhbG9nQm94LmNhbkNsb3NlKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRvcG1vc3REaWFsb2dCb3guY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25EaWFsb2dDbG9zZShldmVudDogRXZlbnQpIHtcclxuICAgIGNvbnN0IGRpYWxvZ0JveCA9IDxEaWFsb2dCb3g+ZXZlbnQudGFyZ2V0O1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZChkaWFsb2dCb3gpO1xyXG4gICAgZGlhbG9nQm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkRpYWxvZ0Nsb3NlKTtcclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICBkaWFsb2dCb3guY2xhc3NMaXN0LnJlbW92ZSgnZGlhbG9nLWJveC0tYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkaWFsb2dCb3hJbmRleCA9IHRoaXMuZGlhbG9nQm94U3RhY2suaW5kZXhPZihkaWFsb2dCb3gpO1xyXG4gICAgdGhpcy5kaWFsb2dCb3hTdGFjay5zcGxpY2UoZGlhbG9nQm94SW5kZXgsIDEpO1xyXG5cclxuICAgIGlmICh0aGlzLmRpYWxvZ0JveFN0YWNrLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dPdmVybGF5KCkge1xyXG4gICAgdGhpcy5vdmVybGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LS12aXNpYmxlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWFjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlT3ZlcmxheSgpIHtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS0tdmlzaWJsZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cC1hY3RpdmUnKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWRpYWxvZy1vdmVybGF5JywgRGlhbG9nT3ZlcmxheSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0RpYWxvZ092ZXJsYXkuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dPdmVybGF5LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vRGlhbG9nT3ZlcmxheS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keS5wb3B1cC1hY3RpdmV7b3ZlcmZsb3c6aGlkZGVufS5vdmVybGF5e3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO29wYWNpdHk6MDt6LWluZGV4OjE7YmFja2dyb3VuZC1jb2xvcjojMDAwO3RyYW5zaXRpb246b3BhY2l0eSAuMjVzIGVhc2UtaW4tb3V0O3BvaW50ZXItZXZlbnRzOm5vbmV9Lm92ZXJsYXktLXZpc2libGV7b3BhY2l0eTouNTtwb2ludGVyLWV2ZW50czphbGx9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBEaWFsb2dPdmVybGF5IH0gZnJvbSAndWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5JztcclxuaW1wb3J0IHsgSW5zdHJ1Y3Rpb25zRGlhbG9nIH0gZnJvbSAndWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnN0cnVjdGlvbnNCdXR0b24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSBidXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgaW5zdHJ1Y3Rpb25zRGlhbG9nOiBJbnN0cnVjdGlvbnNEaWFsb2c7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5idXR0b24udGV4dENvbnRlbnQgPSAnSW5zdHJ1Y3Rpb25zJztcclxuICAgIHRoaXMuYnV0dG9uLmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbnMtYnV0dG9uJztcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24pO1xyXG5cclxuICAgIHRoaXMub25CdXR0b25DbGljayA9IHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5pbnN0cnVjdGlvbnNEaWFsb2cgPSBuZXcgSW5zdHJ1Y3Rpb25zRGlhbG9nKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICByZXR1cm4gWydkaWFsb2ctb3ZlcmxheS1pZCddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkaWFsb2dPdmVybGF5SWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RpYWxvZy1vdmVybGF5LWlkJykgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGRpYWxvZ092ZXJsYXlJZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZGlhbG9nLW92ZXJsYXktaWQnLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQnV0dG9uQ2xpY2soKSB7XHJcbiAgICBjb25zdCBkaWFsb2dPdmVybGF5ID0gPERpYWxvZ092ZXJsYXk+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kaWFsb2dPdmVybGF5SWQpO1xyXG4gICAgaWYgKCFkaWFsb2dPdmVybGF5KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRGlhbG9nIG92ZXJsYXkgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlhbG9nT3ZlcmxheS5zaG93RGlhbG9nKHRoaXMuaW5zdHJ1Y3Rpb25zRGlhbG9nKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1pbnN0cnVjdGlvbnMtYnV0dG9uJywgSW5zdHJ1Y3Rpb25zQnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zQnV0dG9uLnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5zdHJ1Y3Rpb25zLWRpYWxvZ3tiYWNrZ3JvdW5kLWNvbG9yOiMxZjM1MGY7Y29sb3I6I2VlZX0uaW5zdHJ1Y3Rpb25zLWRpYWxvZ19fdGl0bGV7bWFyZ2luOjB9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQb2x5Z29uQ2xpcHBlciB9IGZyb20gJ3NlcnZpY2VzL1BvbHlnb25DbGlwcGVyJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnY29tbW9uL1BvbHlnb24nO1xyXG5pbXBvcnQgeyBDbG9zZXN0UGF0aEZpbmRlciB9IGZyb20gJ3NlcnZpY2VzL0Nsb3Nlc3RQYXRoRmluZGVyJztcclxuXHJcbmludGVyZmFjZSBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBwb2x5Z29uQ2xpcHBlcjogUG9seWdvbkNsaXBwZXI7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcG9seWdvbkxheWVyOiBMYXllcjtcclxuICBjbG9zZXN0UGF0aEZpbmRlcjogQ2xvc2VzdFBhdGhGaW5kZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwb2x5Z29uQ2xpcHBlcjogUG9seWdvbkNsaXBwZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHBvbHlnb25MYXllcjogTGF5ZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjbG9zZXN0UGF0aEZpbmRlcjogQ2xvc2VzdFBhdGhGaW5kZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9seWdvbkNsaXBwaW5nU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5wb2x5Z29uQ2xpcHBlciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uQ2xpcHBlcjtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMucG9seWdvbkxheWVyID0gZGVwZW5kZW5jaWVzLnBvbHlnb25MYXllcjtcclxuICAgIHRoaXMuY2xvc2VzdFBhdGhGaW5kZXIgPSBkZXBlbmRlbmNpZXMuY2xvc2VzdFBhdGhGaW5kZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIC8vIE5vdGhpbmcgdG8gZG8gaGVyZVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICAvLyBOb3RoaW5nIHRvIGRvIGhlcmVcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGlwUG9seWdvbnMocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBjb25zdCBwb2x5Z29uc0luQm91bmRpbmdCb3ggPSA8UG9seWdvbltdPnRoaXMucG9seWdvbkxheWVyLnBhdGhzLmZpbHRlcihwYXRoID0+XHJcbiAgICAgIHBhdGguaXNQb2ludEluQm91bmRpbmdCb3gocG9pbnQpXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChwb2x5Z29uc0luQm91bmRpbmdCb3gubGVuZ3RoIDwgMikge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ0NsaWNrIGluIHRoZSBib3VuZGluZyBib3ggb2YgYXQgbGVhc3QgMiBwb2x5Z29ucycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnZleFBvbHlnb25zID0gcG9seWdvbnNJbkJvdW5kaW5nQm94LmZpbHRlcihwb2x5Z29uID0+IHBvbHlnb24uaXNDb252ZXgoKSk7XHJcbiAgICBpZiAoY29udmV4UG9seWdvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgnQ2Fubm90IGZpbmQgYSBjb252ZXggcG9seWdvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3Nlc3RDb252ZXhQb2x5Z29uID0gPFBvbHlnb24+dGhpcy5jbG9zZXN0UGF0aEZpbmRlci5nZXRDbG9zZXN0UGF0aChcclxuICAgICAgY29udmV4UG9seWdvbnMsXHJcbiAgICAgIHBvaW50XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHN1YmplY3RQb2x5Z29ucyA9IHBvbHlnb25zSW5Cb3VuZGluZ0JveC5maWx0ZXIoXHJcbiAgICAgIHBvbHlnb24gPT4gcG9seWdvbiAhPT0gY2xvc2VzdENvbnZleFBvbHlnb25cclxuICAgICk7XHJcbiAgICBjb25zdCBjbG9zZXN0U3ViamVjdFBvbHlnb24gPSA8UG9seWdvbj50aGlzLmNsb3Nlc3RQYXRoRmluZGVyLmdldENsb3Nlc3RQYXRoKFxyXG4gICAgICBzdWJqZWN0UG9seWdvbnMsXHJcbiAgICAgIHBvaW50XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNsaXBwZWRQb2x5Z29uID0gdGhpcy5wb2x5Z29uQ2xpcHBlci5jbGlwUG9seWdvbihcclxuICAgICAgY2xvc2VzdFN1YmplY3RQb2x5Z29uLFxyXG4gICAgICBjbG9zZXN0Q29udmV4UG9seWdvblxyXG4gICAgKTtcclxuICAgIGlmICghY2xpcHBlZFBvbHlnb24pIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCdDYW5ub3QgY2xpcCBwb2x5Z29ucyAodGhleSBkbyBub3Qgb3ZlcmxhcCknKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBvbHlnb25MYXllci5yZW1vdmVQYXRoKGNsb3Nlc3RTdWJqZWN0UG9seWdvbik7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllci5yZW1vdmVQYXRoKGNsb3Nlc3RDb252ZXhQb2x5Z29uKTtcclxuXHJcbiAgICB0aGlzLnBvbHlnb25MYXllci5wYXRocy5wdXNoKGNsaXBwZWRQb2x5Z29uKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1BvbHlnb25DbGlwcGluZ1NlcnZpY2UudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IEV2ZW50UXVldWUgfSBmcm9tICdldmVudHMvRXZlbnRRdWV1ZSc7XHJcblxyXG50eXBlIEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQ6IEFwcEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50QWdncmVnYXRvciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lck1hcCA9IG5ldyBNYXA8c3RyaW5nLCBFdmVudExpc3RlbmVyW10+KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudFF1ZXVlID0gbmV3IEV2ZW50UXVldWUoKTtcclxuICBwcml2YXRlIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyKSB7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcclxuXHJcbiAgICBpZiAoZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XHJcbiAgICAgIGV2ZW50TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdGVuZXJNYXAuc2V0KGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyKSB7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcclxuICAgIGNvbnN0IGxpc3RlbmVySW5kZXggPSBldmVudExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcclxuXHJcbiAgICBpZiAobGlzdGVuZXJJbmRleCAhPT0gLTEpIHtcclxuICAgICAgZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdGVuZXJNYXAuc2V0KGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IEFwcEV2ZW50KSB7XHJcbiAgICB0aGlzLmV2ZW50UXVldWUuZW5xdWV1ZShldmVudCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRGlzcGF0Y2hpbmcpIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50RnJvbVF1ZXVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc3BhdGNoRXZlbnRGcm9tUXVldWUoKSB7XHJcbiAgICB0aGlzLmlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudFF1ZXVlLmRlcXVldWUoKTtcclxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5nZXRFdmVudExpc3RlbmVycyhldmVudC5ldmVudFR5cGUpO1xyXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBsaXN0ZW5lcihldmVudCkpO1xyXG5cclxuICAgIGlmICh0aGlzLmV2ZW50UXVldWUuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRoaXMuaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50RnJvbVF1ZXVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lck1hcC5nZXQoZXZlbnRUeXBlKSB8fCBbXTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL0V2ZW50QWdncmVnYXRvci50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudFF1ZXVlIHtcclxuICBwcml2YXRlIF9xdWV1ZTogQXBwRXZlbnRbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgZW5xdWV1ZShldmVudDogQXBwRXZlbnQpIHtcclxuICAgIHRoaXMuX3F1ZXVlLnB1c2goZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlcXVldWUoKTogQXBwRXZlbnQge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVldWUgaXMgZW1wdHknKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcXVldWUuc3BsaWNlKDAsIDEpWzBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNFbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldExlbmd0aCgpID09PSAwO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvRXZlbnRRdWV1ZS50cyJdLCJzb3VyY2VSb290IjoiIn0=