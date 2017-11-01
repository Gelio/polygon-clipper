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
const COLORS_1 = __webpack_require__(9);
const LineProperties_1 = __webpack_require__(8);
const Point_1 = __webpack_require__(2);
const configuration = {
    newLinePreviewProperties: new LineProperties_1.LineProperties(COLORS_1.COLORS.BLUE, 2),
    newPolygonLineProperties: new LineProperties_1.LineProperties(COLORS_1.COLORS.RED, 1),
    polygonLineProperties: LineProperties_1.LineProperties.getDefault(),
    applicationUIContainerID: 'application-ui',
    hitTolerance: 10,
    minPolygonPoints: 3,
    doubleClickMaxDelay: 500,
    displayPathGhostWhenDragging: false,
    epsilon: 0.1,
    lineDeviationAllowanceInDegrees: 20,
    canvasFont: '30pt serif',
    lineConditionLabelOffset: new Point_1.Point(5, 0),
    removeConditionsWhenInsertingPoints: true,
    presetBackgroundTextures: [
        'images/backgrounds/Funny-Cat-Face.jpg',
        'images/backgrounds/hqdefault.jpg'
    ],
    presetHeightMaps: ['images/height-maps/brick_heightmap.png'],
    presetNormalMaps: ['images/normal-maps/brick_normalmap.png', 'images/normal-maps/normal_map.jpg'],
    presetLightColor: COLORS_1.COLORS.WHITE,
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
        let angle = (Math.atan2(p2.y - p1.y, p2.x - p1.x)) * 180 / Math.PI;
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
/* 6 */
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
const COLORS_1 = __webpack_require__(9);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(6);
exports.COLORS = {
    BLACK: new Color_1.Color(0, 0, 0),
    RED: new Color_1.Color(255, 0, 0),
    GREEN: new Color_1.Color(0, 255, 0),
    BLUE: new Color_1.Color(0, 0, 255),
    WHITE: new Color_1.Color(255, 255, 255)
};
Object.freeze(exports.COLORS);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LightVersorType;
(function (LightVersorType) {
    LightVersorType[LightVersorType["Constant"] = 0] = "Constant";
    LightVersorType[LightVersorType["Circling"] = 1] = "Circling";
})(LightVersorType = exports.LightVersorType || (exports.LightVersorType = {}));


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Path_1 = __webpack_require__(13);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HitTestResult_1 = __webpack_require__(33);
const Line_1 = __webpack_require__(14);
const LineProperties_1 = __webpack_require__(8);
const Point_1 = __webpack_require__(2);
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
}
exports.Path = Path;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(2);
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
        if (Math.abs(direction) < 0.00000001) {
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Path_1 = __webpack_require__(13);
const Point_1 = __webpack_require__(2);
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
    getCenterPoint() {
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PointClickEvent {
    constructor(pathPointComponent) {
        this.eventType = PointClickEvent.eventType;
        this.handled = false;
        this.payload = pathPointComponent;
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
    constructor(pathPointComponent) {
        this.eventType = FinishPointDragEvent.eventType;
        this.handled = false;
        this.payload = pathPointComponent;
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
    constructor(pathPointComponent, newPosition) {
        this.eventType = PointDragEvent.eventType;
        this.handled = false;
        this.payload = {
            component: pathPointComponent,
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
    constructor(pathPointComponent) {
        this.eventType = StartPointDragEvent.eventType;
        this.handled = false;
        this.payload = pathPointComponent;
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
__webpack_require__(75);
class InstructionsDialog extends HTMLElement {
    constructor() {
        super();
        this.className = 'instructions-dialog-wrapper';
        this.overlay = document.createElement('div');
        this.overlay.className = 'instructions-dialog__overlay';
        this.dialogContainer = document.createElement('div');
        this.dialogContainer.className = 'instructions-dialog';
        const title = document.createElement('h1');
        title.textContent = 'Instructions';
        title.className = 'instructions-dialog__title';
        this.dialogContainer.appendChild(title);
        this.dialogContainer.appendChild(this.createUsageList());
        this.dismissButton = document.createElement('button');
        this.dismissButton.textContent = 'Dismiss';
        this.dismissButton.className = 'instructions-dialog__dismiss-button';
        this.dialogContainer.appendChild(this.dismissButton);
        this.dismiss = this.dismiss.bind(this);
    }
    connectedCallback() {
        this.appendChild(this.overlay);
        this.appendChild(this.dialogContainer);
        this.dismissButton.addEventListener('click', this.dismiss);
        this.overlay.addEventListener('click', this.dismiss);
        requestAnimationFrame(() => {
            this.overlay.classList.add('instructions-dialog__overlay--active');
            this.dialogContainer.classList.add('instructions-dialog--active');
        });
    }
    disconnectedCallback() {
        this.removeChild(this.overlay);
        this.removeChild(this.dialogContainer);
        this.dismissButton.removeEventListener('click', this.dismiss);
        this.overlay.removeEventListener('click', this.dismiss);
        this.overlay.classList.remove('instructions-dialog__overlay--active');
        this.dialogContainer.classList.remove('instructions-dialog--active');
    }
    dismiss() {
        this.remove();
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
            'Save allows you to export all the polygons on the screen',
            'Load allows you to restore the polygons'
        ];
        usage.map(usageItemText => this.createUsageListItem(usageItemText))
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
window.addEventListener('load', bootstrap, false);
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
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
const Layer_1 = __webpack_require__(12);
const EventAggregator_1 = __webpack_require__(34);
const LEX_1 = __webpack_require__(7);
const PolygonFiller_1 = __webpack_require__(36);
const Renderer_1 = __webpack_require__(44);
const Stage_1 = __webpack_require__(45);
const ImageDownloader_1 = __webpack_require__(46);
const InputDataInitializer_1 = __webpack_require__(47);
const LightSimulator_1 = __webpack_require__(48);
const PolygonClipper_1 = __webpack_require__(49);
const UIController_1 = __webpack_require__(50);
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
            polygonClipper: new PolygonClipper_1.PolygonClipper()
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
const Color_1 = __webpack_require__(6);
const LightVersorType_1 = __webpack_require__(10);
const input_data_1 = __webpack_require__(11);
const ActiveEdge_1 = __webpack_require__(43);
const FillWorkerMessageType_1 = __webpack_require__(15);
const FILL_WORKER_URL = 'fillWorker.js';
class PolygonFiller {
    constructor(dependencies) {
        this.fillData = {
            backgroundTexture: new ImageData(1, 1),
            heightMap: new ImageData(1, 1),
            lightColor: new Color_1.Color(0, 0, 0),
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
        this.renderArrayBuffer(event.data);
    }
    renderArrayBuffer(arrayBuffer) {
        const uint8Array = new Uint8ClampedArray(arrayBuffer);
        const imageData = new ImageData(uint8Array, this.canvas.width, this.canvas.height);
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
            activeEdgeTable.sort((e1, e2) => e1.x - e2.x);
            for (let i = 0; i < activeEdgeTable.length; i += 2) {
                const e1 = activeEdgeTable[i];
                const e2 = activeEdgeTable[i + 1];
                // this.renderingContext.fillRect(e1.x, y, e2.x - e1.x, 1);
                fillStrips.push({
                    y,
                    fromX: e1.x,
                    toX: e2.x
                });
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
            this.inverseSlope = (this.higherPoint.x - this.lowerPoint.x) / (this.higherPoint.y - this.lowerPoint.y);
        }
    }
}
exports.ActiveEdge = ActiveEdge;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(9);
const Line_1 = __webpack_require__(14);
const Point_1 = __webpack_require__(2);
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
const input_data_1 = __webpack_require__(11);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(3);
const configuration_1 = __webpack_require__(0);
const LightVersorType_1 = __webpack_require__(10);
const LineProperties_1 = __webpack_require__(8);
const Point_1 = __webpack_require__(2);
const Polygon_1 = __webpack_require__(16);
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = __webpack_require__(11);
const configuration_1 = __webpack_require__(0);
const LightVersorType_1 = __webpack_require__(10);
const Vector3_1 = __webpack_require__(17);
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Line_1 = __webpack_require__(14);
const Point_1 = __webpack_require__(2);
const Polygon_1 = __webpack_require__(16);
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
        const clippingPolygonCenter = clippingPolygon.getCenterPoint();
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
        const roundedPoints = outputWithoutDuplicates.map(point => new Point_1.Point(~~point.x, ~~point.y));
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(7);
const InputDataService_1 = __webpack_require__(51);
const MousePositionTransformer_1 = __webpack_require__(58);
const NewPolygonUIController_1 = __webpack_require__(59);
const PathDraggingService_1 = __webpack_require__(60);
const PointDraggingService_1 = __webpack_require__(61);
const PointInserterService_1 = __webpack_require__(62);
const PointRemoverService_1 = __webpack_require__(63);
const PointSyncService_1 = __webpack_require__(64);
const SerializationService_1 = __webpack_require__(68);
const LineClickEvent_1 = __webpack_require__(23);
__webpack_require__(71);
__webpack_require__(74);
__webpack_require__(24);
const PolygonClippingService_1 = __webpack_require__(77);
class UIController {
    constructor(dependencies) {
        this.uiServices = [];
        this.canvas = dependencies.canvas;
        this.renderer = dependencies.renderer;
        this.stage = dependencies.stage;
        this.eventAggregator = dependencies.eventAggregator;
        this.imageDownloader = dependencies.imageDownloader;
        this.polygonClipper = dependencies.polygonClipper;
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
            stage: this.stage
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
            polygonLayer: this.stage.findLayerByName(LEX_1.LEX.POLYGON_LAYER_NAME)
        });
        this.uiServices.push(this.polygonClippingService);
    }
}
exports.UIController = UIController;


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
const input_data_1 = __webpack_require__(11);
const RenderEvent_1 = __webpack_require__(1);
const configuration_1 = __webpack_require__(0);
const ColorSelectDialog_1 = __webpack_require__(52);
const ImageSelectDialog_1 = __webpack_require__(55);
const LightVersorType_1 = __webpack_require__(10);
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
        this.lightColorDialog.selectedColor = configuration_1.configuration.presetLightColor;
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
            this.eventAggregator.dispatchEvent(new input_data_1.NewLightColorEvent(lightColor));
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(6);
__webpack_require__(53);
const classNames = {
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".color-select-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: solid 1px black;\n  border-radius: 25px;\n  z-index: 1;\n  padding: 1rem;\n  background-color: white;\n  width: 75vw; }\n\n.color-select-dialog__block {\n  border-bottom: solid 1px black;\n  padding-bottom: 1em; }\n\n.color-select-dialog__heading {\n  margin: 0.5em 0; }\n\n.color-select-dialog__bottom-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1em; }\n  .color-select-dialog__bottom-buttons button {\n    font-size: 1.3em; }\n", ""]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(56);
const classNames = {
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
        this.presetImagesListContainer.querySelectorAll('img')
            .forEach(image => image.addEventListener('click', this.onSelectableImageClick));
    }
    disconnectedCallback() {
        this.presetImagesListContainer.querySelectorAll('img')
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
        this.presetImageUrls.map(url => this.createSelectableImage(url))
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
        if (!event.srcElement) {
            return;
        }
        this.selectImage(event.srcElement);
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".image-select-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: solid 1px black;\n  border-radius: 25px;\n  z-index: 1;\n  padding: 1rem;\n  background-color: white;\n  width: 75vw; }\n\n.image-select-dialog__heading {\n  margin: 0.5em 0; }\n\n.image-select-dialog__block {\n  border-bottom: solid 1px black;\n  padding-bottom: 1em; }\n\n.image-select-dialog__preset-images-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .image-select-dialog__preset-images-container > div {\n    max-width: 25%;\n    max-height: 200px;\n    margin: auto; }\n  .image-select-dialog__preset-images-container img {\n    max-width: 100%;\n    max-height: 200px; }\n\n.image-select-dialog__custom-image {\n  display: block;\n  max-width: 25%;\n  max-height: 200px;\n  margin: auto; }\n\n.image-select-dialog__image--selected {\n  border: solid 3px green; }\n\n.image-select-dialog__bottom-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1em; }\n  .image-select-dialog__bottom-buttons button {\n    font-size: 1.3em; }\n", ""]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(2);
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
        return new Point_1.Point(event.clientX - this.canvasClientRect.left, event.clientY - this.canvasClientRect.top);
    }
}
exports.MousePositionTransformer = MousePositionTransformer;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Layer_1 = __webpack_require__(12);
const Path_1 = __webpack_require__(13);
const Polygon_1 = __webpack_require__(16);
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(7);
const PointClickEvent_1 = __webpack_require__(18);
const RenderEvent_1 = __webpack_require__(1);
const RenderFinishedEvent_1 = __webpack_require__(19);
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
        const pathPointComponent = event.payload;
        if (pathPointComponent.path === this.unfinishedPath && pathPointComponent.initial) {
            event.handled = true;
            try {
                this.closePath();
                pathPointComponent.initial = false;
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(2);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(3);
class PathDraggingService {
    constructor(dependencies) {
        this._isDragging = false;
        this.eventAggregator = dependencies.eventAggregator;
        this.stage = dependencies.stage;
        this.canvas = dependencies.canvas;
        this.mousePositionTransformer = dependencies.mousePositionTransformer;
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }
    init() {
        // TODO: possible polygon ghost layer here
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
        for (const layer of this.stage.layers) {
            for (const path of layer.paths) {
                if (!path.isPointInBoundingBox(point)) {
                    continue;
                }
                this.pathToDrag = path;
                break;
            }
        }
        if (!this.pathToDrag) {
            return alert('Cannot drag path - no path found, point is not in the bounding box');
        }
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(9);
const Layer_1 = __webpack_require__(12);
const LineProperties_1 = __webpack_require__(8);
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(7);
const FinishPointDragEvent_1 = __webpack_require__(20);
const PointDragEvent_1 = __webpack_require__(21);
const StartPointDragEvent_1 = __webpack_require__(22);
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
        const { component, newPosition } = event.payload;
        for (const point of component.path.getVerticesIterator()) {
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
        component.point.moveTo(x, y);
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        event.handled = true;
    }
}
exports.PointDraggingService = PointDraggingService;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LineClickEvent_1 = __webpack_require__(23);
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
            try {
                event.payload.path.insertVertex(newPoint, index);
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(0);
const PointClickEvent_1 = __webpack_require__(18);
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
        const pathPointComponent = event.payload;
        const previousPathPointComponent = this.previousPathPointComponent;
        const previousClickTimestamp = this.previousClickTimestamp;
        this.updatePreviousClickInformation(event, currentTimestamp);
        if (!previousPathPointComponent || previousPathPointComponent !== pathPointComponent) {
            return;
        }
        if (currentTimestamp - previousClickTimestamp > configuration_1.configuration.doubleClickMaxDelay) {
            return;
        }
        this.removePreviousClickedPoint();
        event.handled = true;
    }
    updatePreviousClickInformation(event, timestamp) {
        this.previousPathPointComponent = event.payload;
        this.previousClickTimestamp = timestamp;
    }
    removePreviousClickedPoint() {
        const path = this.previousPathPointComponent.path;
        const point = this.previousPathPointComponent.point;
        try {
            path.removeVertex(point);
        }
        catch (error) {
            return alert('Cannot remove vertex');
        }
        this.previousPathPointComponent.remove();
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        this.eventAggregator.dispatchEvent(new SyncComponentsEvent_1.SyncComponentsEvent());
    }
}
exports.PointRemoverService = PointRemoverService;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PathPointComponent_1 = __webpack_require__(65);
const SyncComponentsEvent_1 = __webpack_require__(3);
class PointSyncService {
    constructor(dependencies) {
        this.pathPointComponents = [];
        this.stage = dependencies.stage;
        this.container = dependencies.container;
        this.mousePositionTransformer = dependencies.mousePositionTransformer;
        this.eventAggregator = dependencies.eventAggregator;
        this.synchronizeComponents = this.synchronizeComponents.bind(this);
    }
    init() {
        this.eventAggregator.addEventListener(SyncComponentsEvent_1.SyncComponentsEvent.eventType, this.synchronizeComponents);
    }
    destroy() {
        this.eventAggregator.removeEventListener(SyncComponentsEvent_1.SyncComponentsEvent.eventType, this.synchronizeComponents);
    }
    synchronizeComponents(event) {
        const componentsToRemove = this.getRedundantComponents();
        componentsToRemove.forEach(component => component.remove());
        const pathPoints = this.getPathPoints();
        const pointsWithoutComponents = this.getPointsWithoutComponents(pathPoints);
        const newComponents = this.createPathPointComponents(pointsWithoutComponents);
        const componentsNotRemoved = this.pathPointComponents.filter(component => componentsToRemove.indexOf(component) === -1);
        this.pathPointComponents = [...newComponents, ...componentsNotRemoved];
        event.handled = true;
    }
    getPathPoints() {
        const pathPoints = [];
        this.stage.layers.forEach(layer => {
            layer.paths.forEach(path => {
                path.getVertices().forEach(point => {
                    pathPoints.push({
                        path,
                        point
                    });
                });
            });
        });
        return pathPoints;
    }
    createPathPointComponents(pathPoints) {
        return pathPoints.map(pathPoint => new PathPointComponent_1.PathPointComponent(pathPoint.path, pathPoint.point, {
            applicationUIContainer: this.container,
            eventAggregator: this.eventAggregator,
            mousePositionTransformer: this.mousePositionTransformer
        }));
    }
    getRedundantComponents() {
        const activePaths = this.getActivePaths();
        return this.pathPointComponents.filter(component => activePaths.indexOf(component.path) === -1 ||
            component.path.getVertices().indexOf(component.point) === -1);
    }
    getPointsWithoutComponents(pathPoints) {
        return pathPoints.filter(pathPoint => !this.pathPointComponents.find(component => component.path === pathPoint.path && component.point === pathPoint.point));
    }
    getActivePaths() {
        const paths = [];
        this.stage.layers.map(layer => paths.push(...layer.paths));
        return paths;
    }
}
exports.PointSyncService = PointSyncService;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FinishPointDragEvent_1 = __webpack_require__(20);
const PointDragEvent_1 = __webpack_require__(21);
const StartPointDragEvent_1 = __webpack_require__(22);
const PointClickEvent_1 = __webpack_require__(18);
__webpack_require__(66);
const COMPONENT_CLASS_NAME = 'application-ui__vertex';
const INITIAL_CLASS_NAME = 'application-ui__vertex--initial';
class PathPointComponent {
    constructor(path, point, dependencies) {
        this.path = path;
        this.point = point;
        this.applicationUIContainer = dependencies.applicationUIContainer;
        this.mousePositionTransformer = dependencies.mousePositionTransformer;
        this.eventAggregator = dependencies.eventAggregator;
        this.updatePosition = this.updatePosition.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.stopDragging = this.stopDragging.bind(this);
        this.init();
    }
    remove() {
        this.point.moveCallback = null;
        this.element.removeEventListener('mousedown', this.onMouseDown);
        this.element.remove();
    }
    updatePosition() {
        this.element.style.backgroundColor = this.path.lineProperties.color.fillStyle;
        this.element.style.top = `${this.point.y}px`;
        this.element.style.left = `${this.point.x}px`;
    }
    get initial() {
        return this.element.classList.contains(INITIAL_CLASS_NAME);
    }
    set initial(isInitial) {
        if (isInitial) {
            this.element.classList.add(INITIAL_CLASS_NAME);
        }
        else {
            this.element.classList.remove(INITIAL_CLASS_NAME);
        }
    }
    init() {
        this.element = document.createElement('div');
        this.applicationUIContainer.appendChild(this.element);
        this.element.classList.add(COMPONENT_CLASS_NAME);
        this.updatePosition();
        if (this.path.getVerticesCount() === 1 ||
            (!this.path.closed && this.path.findPointIndex(this.point) === 0)) {
            this.initial = true;
        }
        this.element.addEventListener('mousedown', this.onMouseDown);
        this.point.moveCallback = this.updatePosition;
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
exports.PathPointComponent = PathPointComponent;


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
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./PathPointComponent.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./PathPointComponent.scss");
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
exports.push([module.i, ".application-ui__vertex {\n  border: solid 1px black;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border: solid 2px; }\n  .application-ui__vertex:not(:active) {\n    border-color: green; }\n  .application-ui__vertex:active {\n    border-color: red; }\n\n.application-ui__vertex--initial {\n  background-color: #0051ff; }\n", ""]);

// exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoadButton_1 = __webpack_require__(69);
const SaveButton_1 = __webpack_require__(70);
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(3);
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
/* 70 */
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(72);
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
    }
    onOverlayClick() {
        if (!this.dialogBox || !this.dialogBox.canClose()) {
            return;
        }
        this.dialogBox.close();
    }
    onDialogClose() {
        if (this.dialogBox) {
            this.removeChild(this.dialogBox);
            this.dialogBox.removeEventListener('close', this.onDialogClose);
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: 1;\n  background-color: black;\n  transition: opacity 250ms ease-in-out;\n  pointer-events: none; }\n\n.overlay--visible {\n  opacity: 0.5;\n  pointer-events: all; }\n", ""]);

// exports


/***/ }),
/* 74 */
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
        const instructionsDialog = new InstructionsDialog_1.InstructionsDialog();
        this.appendChild(instructionsDialog);
    }
}
exports.InstructionsButton = InstructionsButton;
window.customElements.define('app-instructions-button', InstructionsButton);


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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".instructions-dialog-wrapper {\n  z-index: 2; }\n\n.instructions-dialog__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n  opacity: 0;\n  transition: opacity 250ms ease-in-out; }\n\n.instructions-dialog__overlay--active {\n  opacity: 0.5; }\n\n.instructions-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transform: translate(-50%, -50%) scale(0, 0);\n  background-color: #1f350f;\n  border: solid 1px black;\n  color: #eee;\n  padding: 2em;\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px black;\n  transition: transform 250ms ease-in-out; }\n\n.instructions-dialog--active {\n  transform: translate(-50%, -50%) scale(1, 1); }\n\n.instructions-dialog__title {\n  margin: 0; }\n", ""]);

// exports


/***/ }),
/* 77 */
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
    }
    init() {
        // Nothing to do here
    }
    destroy() {
        // Nothing to do here
    }
    clipPolygons(point) {
        const matchingPolygons = this.polygonLayer.paths
            .filter(path => path.isPointInBoundingBox(point))
            .map(path => path);
        if (matchingPolygons.length < 2) {
            alert('Click in the bounding box of at least 2 polygons');
            return;
        }
        const convexPolygon = matchingPolygons.find(polygon => polygon.isConvex());
        if (!convexPolygon) {
            alert('Cannot find a convex polygon');
            return;
        }
        const subjectPolygonIndex = convexPolygon === matchingPolygons[0] ? 1 : 0;
        const subjectPolygon = matchingPolygons[subjectPolygonIndex];
        const clippedPolygon = this.polygonClipper.clipPolygon(subjectPolygon, convexPolygon);
        if (!clippedPolygon) {
            alert('Cannot clip polygons (they do not overlap)');
            return;
        }
        this.polygonLayer.removePath(subjectPolygon);
        this.polygonLayer.removePath(convexPolygon);
        this.polygonLayer.paths.push(clippedPolygon);
        this.eventAggregator.dispatchEvent(new SyncComponentsEvent_1.SyncComponentsEvent());
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
    }
}
exports.PolygonClippingService = PolygonClippingService;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDkxZDk1ZDQ5ZTVhOGQ3ZDcyZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9SZW5kZXJFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xFWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0xpbmVQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vQ09MT1JTLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vTGlnaHRWZXJzb3JUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0xheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vUGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0xpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlnb24tZmlsbGVyL0ZpbGxXb3JrZXJNZXNzYWdlVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1BvbHlnb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9WZWN0b3IzLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvUG9pbnRDbGlja0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvUmVuZGVyRmluaXNoZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3BvaW50LWRyYWcvRmluaXNoUG9pbnREcmFnRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL1BvaW50RHJhZ0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvTGluZUNsaWNrRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/NDQ0NiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy93ZWJjb21wb25lbnRzLWhpLXNkLWNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vSGl0VGVzdFJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL0V2ZW50QWdncmVnYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL0V2ZW50UXVldWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlnb24tZmlsbGVyL1BvbHlnb25GaWxsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0hlaWdodE1hcEV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodENvbG9yRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWdvbi1maWxsZXIvQWN0aXZlRWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9JbWFnZURvd25sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL0lucHV0RGF0YUluaXRpYWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9MaWdodFNpbXVsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvUG9seWdvbkNsaXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1VJQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvSW5wdXREYXRhU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cuc2Nzcz85NjI0Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cuc2Nzcz82Y2Y2Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9OZXdQb2x5Z29uVUlDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9QYXRoRHJhZ2dpbmdTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2ludERyYWdnaW5nU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUG9pbnRJbnNlcnRlclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1BvaW50UmVtb3ZlclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1BvaW50U3luY1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvUGF0aFBvaW50Q29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudC5zY3NzPzcyOWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvUGF0aFBvaW50Q29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1NlcmlhbGl6YXRpb25TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL3NlcmlhbGl6YXRpb24vTG9hZEJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL1NhdmVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5LnNjc3M/OTBhYyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3M/NGUyZiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1BvbHlnb25DbGlwcGluZ1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBLHdDQUF1QztBQUN2QyxnREFBdUQ7QUFDdkQsdUNBQXFDO0FBRXJDLE1BQU0sYUFBYSxHQUFHO0lBQ3BCLHdCQUF3QixFQUFF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U0FBUyxDQUFDLEtBQVk7UUFDbEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBVyxFQUFFLEVBQVc7UUFDeEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBVyxFQUFFLEVBQVc7UUFDN0MsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBVyxFQUFFLEVBQVc7UUFDakQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUNoQixFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUN6QixFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUN6QixFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUMxQixDQUFDO0lBQ0osQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBVyxFQUFFLEVBQVc7UUFDL0MsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQVcsRUFBRSxFQUFXO1FBQ2hELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFL0IsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sT0FBTztRQUNaLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBRXpDLE1BQU0sQ0FBQyxJQUFJLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxTQUFTO1FBQ2QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWhDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSxTQUFTO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBSSxDQUFDLENBQUMsRUFBSSxDQUFDLElBQUcsYUFBSSxDQUFDLENBQUMsRUFBSSxDQUFDLElBQUcsYUFBSSxDQUFDLENBQUMsRUFBSSxDQUFDLEVBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sS0FBSztRQUNWLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxNQUFNO1FBQ1gsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBcEVELDBCQW9FQzs7Ozs7Ozs7OztBQ3JFRDtJQUtFLFlBQVksa0JBQXNDO1FBSmxDLGNBQVMsR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBRS9DLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztJQUNwQyxDQUFDO0lBRU0sTUFBTSxLQUFLLFNBQVM7UUFDekIsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQVpELDBDQVlDOzs7Ozs7Ozs7O0FDYkQ7SUFBQTtRQUNrQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsY0FBUyxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztRQUNuRCxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBS3pCLENBQUM7SUFIUSxNQUFNLEtBQUssU0FBUztRQUN6QixNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7Q0FDRjtBQVJELGtEQVFDOzs7Ozs7Ozs7O0FDUEQ7SUFLRSxZQUFZLGtCQUFzQztRQUhsQyxjQUFTLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxDQUFDO1FBQ3BELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztJQUNwQyxDQUFDO0lBRU0sTUFBTSxLQUFLLFNBQVM7UUFDekIsTUFBTSxDQUFDLHNCQUFzQixDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQVpELG9EQVlDOzs7Ozs7Ozs7O0FDWEQ7SUFRRSxZQUFZLGtCQUFzQyxFQUFFLFdBQWtCO1FBSHRELGNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDO1FBQzlDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFNBQVMsRUFBRSxrQkFBa0I7WUFDN0IsV0FBVztTQUNaLENBQUM7SUFDSixDQUFDO0lBRU0sTUFBTSxLQUFLLFNBQVM7UUFDekIsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQWxCRCx3Q0FrQkM7Ozs7Ozs7Ozs7QUNuQkQ7SUFLRSxZQUFZLGtCQUFzQztRQUhsQyxjQUFTLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxDQUFDO1FBQ25ELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztJQUNwQyxDQUFDO0lBRU0sTUFBTSxLQUFLLFNBQVM7UUFDekIsTUFBTSxDQUFDLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQVpELGtEQVlDOzs7Ozs7Ozs7O0FDSEQ7SUFLRSxZQUFZLElBQVUsRUFBRSxJQUFVLEVBQUUsUUFBZTtRQUpuQyxjQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUU5QyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR3JCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixJQUFJO1lBQ0osSUFBSTtZQUNKLFFBQVE7U0FDVCxDQUFDO0lBQ0osQ0FBQztJQUVNLE1BQU0sS0FBSyxTQUFTO1FBQ3pCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7QUFoQkQsd0NBZ0JDOzs7Ozs7Ozs7O0FDNUJELHdCQUE0RDtBQUU1RCx3QkFBZ0MsU0FBUSxXQUFXO0lBS2pEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsU0FBUyxHQUFHLDZCQUE2QixDQUFDO1FBRS9DLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztRQUV4RCxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7UUFFdkQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztRQUNuQyxLQUFLLENBQUMsU0FBUyxHQUFHLDRCQUE0QixDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcscUNBQXFDLENBQUM7UUFFckUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJELHFCQUFxQixDQUFDLEdBQUcsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU8sT0FBTztRQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sZUFBZTtRQUNyQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFDLE1BQU0sS0FBSyxHQUFHO1lBQ1osa0VBQWtFO1lBQ2xFLDhEQUE4RDtZQUM5RCxpRUFBaUU7WUFDakUsc0NBQXNDO1lBQ3RDLDZEQUE2RDtZQUM3RCx1Q0FBdUM7WUFDdkMsK0NBQStDO1lBQy9DLDBEQUEwRDtZQUMxRCx5Q0FBeUM7U0FDMUMsQ0FBQztRQUVGLEtBQUssQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDaEUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBRTdELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sbUJBQW1CLENBQUMsV0FBbUI7UUFDN0MsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUUvQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGO0FBckZELGdEQXFGQztBQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixFQUFFLGtCQUFrQixDQUFDLENBQUM7Ozs7Ozs7Ozs7QUN6RjVFLHdCQUFvQjtBQUNwQix3QkFBdUI7QUFFdkIsd0JBQStEO0FBRS9ELDhDQUEwQztBQUUxQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUVsRDtJQUNFLE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQztJQUMvQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLFFBQVEsa0JBQWtCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFvQixNQUFNLENBQUMsQ0FBQztJQUMvRCxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckIsQ0FBQzs7Ozs7OztBQ2xCRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDekJBO0FBQ0E7OztBQUdBO0FBQ0EscUNBQXNDLDJCQUEyQixFQUFFLDRCQUE0Qix3QkFBd0IsRUFBRSxVQUFVLHFCQUFxQixFQUFFLGtCQUFrQiw0QkFBNEIsRUFBRSxxQkFBcUIsZ0JBQWdCLG1CQUFtQixFQUFFLHFCQUFxQixnQkFBZ0IsdUJBQXVCLEVBQUUscUJBQXFCLHVCQUF1QixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQix5QkFBeUIsRUFBRSx1QkFBdUIsMEJBQTBCLEVBQUUsaUJBQWlCLHVCQUF1QixxQkFBcUIsRUFBRSxlQUFlLGNBQWMsRUFBRSxhQUFhLG9CQUFvQixFQUFFOztBQUVybkI7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7O0FDeEZBLHlDOzs7Ozs7QUNBQSwwREFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOExBQThMLHlEQUF5RCxjQUFjLGdCQUFnQix3QkFBd0Isa0JBQWtCLFFBQVEsbUJBQW1CLG9DQUFvQztBQUMzWSxjQUFjLEtBQUssd0JBQXdCLDhDQUE4Qyw2REFBNkQsNkNBQTZDLGlCQUFpQixFQUFFLGdCQUFnQixlQUFlLFFBQVEscUJBQXFCLG1CQUFtQixxQkFBcUIsRUFBRSxTQUFTLEVBQUUsZUFBZSxLQUFLLEdBQUcsUUFBUSxnQ0FBZ0MsYUFBYSxTQUFTLGVBQWUsS0FBSyx5QkFBeUI7QUFDemMsZUFBZSxlQUFlLG1CQUFtQixpQkFBaUI7QUFDbEUsWUFBWSxhQUFhLFdBQVcsVUFBVSxnQ0FBZ0MsYUFBYSxXQUFXLDhCQUE4QixVQUFVLG1CQUFtQixjQUFjLE1BQU0sRUFBRSxhQUFhLHFCQUFxQixpQkFBaUIsY0FBYyxlQUFlLGNBQWMsd0JBQXdCLGNBQWMsc0JBQXNCLGVBQWUsZUFBZSxjQUFjLFlBQVksYUFBYSwwQkFBMEIsY0FBYyxjQUFjLHNCQUFzQjtBQUNsZSxtQkFBbUIsbUNBQW1DLGVBQWUsWUFBWSx3REFBd0QsZUFBZSxnQkFBZ0IscUNBQXFDLGtFQUFrRSxvQkFBb0Isa0NBQWtDLGlCQUFpQixHQUFHLG1CQUFtQixpQkFBaUIsV0FBVyxLQUFLLFdBQVcsNENBQTRDO0FBQ3BjLFVBQVUsRUFBRSxnQkFBZ0IsMENBQTBDLFdBQVcsbUJBQW1CLFVBQVUsYUFBYSxTQUFTLEVBQUUsbURBQW1ELDhDQUE4QyxFQUFFLHNDQUFzQywrQ0FBK0MsS0FBSyw4QkFBOEIsZ0JBQWdCLEtBQUssNkNBQTZDLGtDQUFrQyxpQkFBaUI7QUFDdGQsa0JBQWtCLGtCQUFrQixzQkFBc0IsNEJBQTRCLEtBQUssc0JBQXNCLDZCQUE2QixFQUFFLEVBQUUsaURBQWlELGdEQUFnRCxzQkFBc0Isa0JBQWtCLGtCQUFrQiw0Q0FBNEMsRUFBRSxxREFBcUQsa0RBQWtELHdCQUF3QixvQkFBb0I7QUFDOWUsS0FBSyx5Q0FBeUMsRUFBRSxrREFBa0QsOENBQThDLHNCQUFzQixnQkFBZ0IseURBQXlELEVBQUUsc0RBQXNELGdEQUFnRCx3QkFBd0Isa0JBQWtCLHdCQUF3QixnREFBZ0QsRUFBRTtBQUMzYyxzRkFBc0Ysd0JBQXdCLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxFQUFFLGlCQUFpQix3QkFBd0IsY0FBYyxtQkFBbUIsaUJBQWlCLG1CQUFtQix3QkFBd0IsS0FBSyxpQkFBaUIsV0FBVyxLQUFLLFdBQVcsc0NBQXNDLG9EQUFvRCxFQUFFLDBCQUEwQixlQUFlO0FBQ3hlLEdBQUcsUUFBUSxXQUFXLGNBQWMsbUJBQW1CLFdBQVcseUNBQXlDLGtDQUFrQyxpQ0FBaUMsc0RBQXNELGlCQUFpQixtQkFBbUIsd0JBQXdCLEtBQUssaUJBQWlCLFdBQVcsS0FBSyxXQUFXLHNDQUFzQyxvREFBb0QsRUFBRSwwQkFBMEIsZUFBZSxVQUFVO0FBQ2hlLEdBQUcsUUFBUSxXQUFXLGNBQWMsdUJBQXVCLFdBQVcsd0NBQXdDLEVBQUUsMkNBQTJDLGNBQWMsb0JBQW9CLGFBQWEsRUFBRSxlQUFlLGdCQUFnQix1Q0FBdUMsa0VBQWtFLHFEQUFxRCxLQUFLLGFBQWEsb0JBQW9CLGlDQUFpQyxpQkFBaUIsV0FBVztBQUM1ZSxFQUFFLElBQUksZUFBZSxtQkFBbUIsYUFBYSxXQUFXLGdCQUFnQixFQUFFLDhDQUE4QyxrQ0FBa0MsZ0RBQWdELG9CQUFvQixtQkFBbUIsV0FBVyxjQUFjLFNBQVMsT0FBTyxvQkFBb0IsVUFBVSxnQkFBZ0IsU0FBUyxFQUFFLDJDQUEyQyxrQ0FBa0MsZ0RBQWdELGtCQUFrQjtBQUMxZSxFQUFFLFdBQVcsY0FBYyxTQUFTLE9BQU8sa0JBQWtCLFVBQVUsZ0JBQWdCLFNBQVMsRUFBRSx5Q0FBeUMsa0JBQWtCLGtEQUFrRCxTQUFTLEVBQUUsMkNBQTJDLDZCQUE2QixVQUFVLFNBQVMsRUFBRSw4Q0FBOEMsa0NBQWtDLGdEQUFnRCxvQkFBb0IsMEJBQTBCLFdBQVc7QUFDaGYsU0FBUyxPQUFPLGtDQUFrQyxVQUFVLFVBQVUsVUFBVSxTQUFTLEVBQUUsZ0RBQWdELEtBQUssNkNBQTZDLGlCQUFpQix5QkFBeUIsMkNBQTJDLGtCQUFrQixpQkFBaUIsS0FBSyxnQkFBZ0IsK0JBQStCLDBDQUEwQyxFQUFFLEVBQUUsZUFBZSxpREFBaUQsMEJBQTBCO0FBQ2pmLE9BQU8sOEJBQThCLGtCQUFrQixPQUFPLFNBQVMsRUFBRSxnREFBZ0Qsb0JBQW9CLG9DQUFvQyxTQUFTLEVBQUUscURBQXFELDBFQUEwRSxhQUFhLDhCQUE4QixvQkFBb0IsT0FBTyxTQUFTLEVBQUUseUJBQXlCLGVBQWUsRUFBRSxtQkFBbUIsY0FBYyxtQkFBbUI7QUFDMWUsSUFBSSxtQkFBbUIsd0JBQXdCLEtBQUssaUJBQWlCLFdBQVcsS0FBSyxXQUFXLHNDQUFzQyxvREFBb0QsRUFBRSwwQkFBMEIsZUFBZSxnQkFBZ0IsUUFBUSxXQUFXLGNBQWMsbUJBQW1CLFdBQVcseUNBQXlDLGlDQUFpQywwQ0FBMEMsZUFBZSw4QkFBOEIsYUFBYTtBQUNsZSxTQUFTLG9HQUFvRywwQkFBMEIsd0lBQXdJLGFBQWEsV0FBVyxrSUFBa0ksUUFBUSxxQ0FBcUMsT0FBTyxTQUFTO0FBQ3RlLFNBQVMsR0FBRyxjQUFjLFVBQVUsU0FBUyxlQUFlLG1CQUFtQixZQUFZLFVBQVUsVUFBVSwwQkFBMEIsY0FBYyxXQUFXLHFCQUFxQiwrQkFBK0IsTUFBTSxZQUFZLEVBQUUsaUJBQWlCLFNBQVMsU0FBUyxjQUFjLGlCQUFpQixzR0FBc0csd0JBQXdCLEdBQUcsYUFBYSxlQUFlLGVBQWUsVUFBVSxVQUFVO0FBQzVlLEtBQUsscURBQXFELG9DQUFvQyx3QkFBd0IsU0FBUyxTQUFTLGVBQWUsOENBQThDLHdCQUF3QiwyQkFBMkIsMEJBQTBCLE1BQU0sMENBQTBDLHFCQUFxQiwyQkFBMkIseUdBQXlHLGVBQWU7QUFDMWUsc0RBQXNELGlCQUFpQix3QkFBd0Isa0NBQWtDLHFCQUFxQixrQkFBa0IsT0FBTyxxQ0FBcUMseUJBQXlCLGNBQWMsVUFBVSxtQkFBbUIscUJBQXFCLGVBQWUsY0FBYyxnREFBZ0QsY0FBYyx5QkFBeUIsY0FBYyxrQkFBa0IsaUJBQWlCLGlCQUFpQjtBQUNuZSxvQ0FBb0MscUJBQXFCLEtBQUssMkNBQTJDLGlDQUFpQyxpQkFBaUIsaUJBQWlCLG1CQUFtQix3QkFBd0IsUUFBUSxXQUFXLGVBQWUsU0FBUyxpQkFBaUIseUJBQXlCLGVBQWUsV0FBVyxvQkFBb0IsaUJBQWlCLEtBQUssRUFBRSxFQUFFLGlCQUFpQixlQUFlLFNBQVMsZUFBZSxtQkFBbUIsV0FBVyxjQUFjLE1BQU0sc0JBQXNCLFVBQVU7QUFDOWYsU0FBUyxpQkFBaUIsc0JBQXNCLHlCQUF5QixpQ0FBaUMsb0JBQW9CLGlEQUFpRCwyQkFBMkIsMkVBQTJFLHdCQUF3QixJQUFJLG1CQUFtQixxQkFBcUIsU0FBUyxFQUFFLGVBQWUsVUFBVSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSwyQkFBMkI7QUFDbmYsZUFBZSxZQUFZLEtBQUssV0FBVyxlQUFlLFNBQVMsaUJBQWlCLHdDQUF3QyxvREFBb0QsY0FBYyxLQUFLLEdBQUcsUUFBUSxRQUFRLFFBQVEsbUJBQW1CLHdFQUF3RSxPQUFPLGtEQUFrRCxPQUFPLCtCQUErQixRQUFRLDZCQUE2Qix3Q0FBd0MsUUFBUTtBQUM3ZSwwQkFBMEIsUUFBUSxpRUFBaUUsS0FBSyxTQUFTLGNBQWMsZ0JBQWdCLHNCQUFzQixlQUFlLGdCQUFnQixzQkFBc0IsZUFBZSxnQkFBZ0IscUJBQXFCLGVBQWUsZ0JBQWdCLDJCQUEyQixlQUFlLGdCQUFnQix1QkFBdUIsY0FBYyxTQUFTLGdCQUFnQixxQkFBcUIsRUFBRSw2QkFBNkIsU0FBUyxlQUFlO0FBQ2pmLEVBQUUsc0JBQXNCLGVBQWUsZ0JBQWdCLHNCQUFzQixlQUFlLGdCQUFnQixxQkFBcUIsZUFBZSxnQkFBZ0IsMkJBQTJCLGVBQWUsZ0JBQWdCLHVCQUF1QixlQUFlLFNBQVMsZ0JBQWdCLHFCQUFxQixFQUFFLDZCQUE2QixTQUFTLGVBQWUsd0JBQXdCLFlBQVksRUFBRSxlQUFlLG1CQUFtQjtBQUM3YSw4QkFBOEIsZUFBZSxlQUFlLGdCQUFnQixTQUFTLDRCQUE0QixrQkFBa0IsZ0JBQWdCLDJDQUEyQyx1R0FBdUcsY0FBYyxRQUFRLFFBQVEsUUFBUSxtQkFBbUIsTUFBTSxVQUFVLHdCQUF3Qix3QkFBd0IsMkJBQTJCLEVBQUU7QUFDM2IsZ0NBQWdDLHdDQUF3QyxzRUFBc0UsdUJBQXVCLDRIQUE0SCwwQkFBMEIsbUJBQW1CLDhHQUE4RyxNQUFNLHNDQUFzQztBQUN4ZSwwS0FBMEssa0JBQWtCLGlDQUFpQyxPQUFPLE1BQU0sVUFBVSwwQkFBMEIsTUFBTSw4RUFBOEUsZ0JBQWdCLElBQUksU0FBUyxTQUFTLGVBQWUsb0NBQW9DLFNBQVMsSUFBSSxNQUFNLHdCQUF3QjtBQUN0ZSw0QkFBNEIsNkNBQTZDLGVBQWUsUUFBUSxXQUFXLGlCQUFpQix3QkFBd0IsNENBQTRDLDJDQUEyQyx1QkFBdUIsZUFBZSxVQUFVLG1CQUFtQixTQUFTLDRCQUE0Qiw2REFBNkQsUUFBUSxTQUFTLGlCQUFpQjtBQUNsYixHQUFHLFdBQVcsU0FBUyx3QkFBd0Isd0JBQXdCLHVFQUF1RSx5RUFBeUUsZ0NBQWdDLDRCQUE0QiwyQkFBMkIsMEJBQTBCLDJCQUEyQiw4QkFBOEIsNEVBQTRFO0FBQzdjLE1BQU0sVUFBVSxtQkFBbUIsVUFBVSxNQUFNLGlFQUFpRSxxRkFBcUYsYUFBYSxTQUFTLGVBQWUsNEVBQTRFLGNBQWMsVUFBVSxpQ0FBaUMsZUFBZSxRQUFRLHlGQUF5RixTQUFTLGVBQWU7QUFDM2Ysc0NBQXNDLGlCQUFpQixrSEFBa0gsbUJBQW1CLHFGQUFxRixlQUFlLGtCQUFrQix3QkFBd0IsbUJBQW1CLHdHQUF3RyxVQUFVLG1CQUFtQixTQUFTO0FBQzNlLE9BQU8sU0FBUyxxQkFBcUIseUJBQXlCLGNBQWMsS0FBSyxNQUFNLHFDQUFxQyxJQUFJLHVCQUF1QixhQUFhLDhDQUE4QyxZQUFZLGVBQWUsa0JBQWtCLGFBQWEsbUJBQW1CLHNEQUFzRCxpRUFBaUUsaUJBQWlCLDJEQUEyRDtBQUNsZSxNQUFNLE1BQU0sZUFBZSxJQUFJLFVBQVUsV0FBVyxtQ0FBbUMsU0FBUyxpQkFBaUIsYUFBYSx3Q0FBd0MsRUFBRSw0SEFBNEgseUNBQXlDLFNBQVMsaUJBQWlCLGVBQWUsV0FBVyxvQkFBb0IsV0FBVztBQUNoYSxjQUFjLGVBQWUsZ0JBQWdCLGFBQWEscUJBQXFCLFNBQVMsUUFBUSx3QkFBd0IsU0FBUyxtQkFBbUIsK0VBQStFLDBEQUEwRCxNQUFNLGVBQWUsdUJBQXVCLHlDQUF5QyxlQUFlLFNBQVMsaUJBQWlCLEVBQUUscUJBQXFCLEtBQUssS0FBSyxXQUFXLGtCQUFrQixlQUFlO0FBQ3hlLGNBQWMsZUFBZSx3QkFBd0IsRUFBRSxNQUFNLFFBQVEsV0FBVyxLQUFLLE9BQU8sZ0NBQWdDLG1GQUFtRix5QkFBeUIsWUFBWSxXQUFXLEtBQUsscURBQXFELG1EQUFtRCxTQUFTLG1CQUFtQixNQUFNLHdCQUF3QixrQkFBa0IsZUFBZSxrQkFBa0Isa0JBQWtCO0FBQzNlLGFBQWEsTUFBTSw2QkFBNkIsY0FBYyxjQUFjLG1DQUFtQyxrQkFBa0IsYUFBYSx5REFBeUQseUNBQXlDLGVBQWUsU0FBUyxpQkFBaUIsRUFBRSw4SUFBOEksdUVBQXVFO0FBQ2hmLGdFQUFnRSx5RkFBeUYsV0FBVyxZQUFZLGlEQUFpRCxFQUFFLDBDQUEwQyx5Q0FBeUMscUJBQXFCLG9HQUFvRyxtQkFBbUIsTUFBTSx3QkFBd0Isa0JBQWtCO0FBQ2xmLFNBQVMsa0JBQWtCLGtCQUFrQiw2QkFBNkIsV0FBVyxJQUFJLFFBQVEsVUFBVSw4RUFBOEUsbURBQW1ELGdJQUFnSSxjQUFjLHNEQUFzRCwwQkFBMEIsS0FBSyxlQUFlLG9CQUFvQjtBQUNsZixnQkFBZ0IsUUFBUSxvQ0FBb0Msc0NBQXNDLHVCQUF1QixPQUFPLFFBQVEsaUJBQWlCLDJCQUEyQixjQUFjLGlCQUFpQixPQUFPLGtCQUFrQixxQkFBcUIsd0NBQXdDLGlCQUFpQixRQUFRLElBQUksMkJBQTJCLElBQUksNkJBQTZCLFdBQVcsdUJBQXVCLHlCQUF5QixLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSztBQUMxZCxTQUFTLGNBQWMsSUFBSSxrQkFBa0IsVUFBVSwwQkFBMEIsSUFBSSxJQUFJLFFBQVEsUUFBUSxXQUFXLFFBQVEsSUFBSSw0QkFBNEIsUUFBUSxJQUFJLGNBQWMsUUFBUSxJQUFJLFlBQVksSUFBSSwrQ0FBK0MsS0FBSyxnQ0FBZ0MsZ0JBQWdCLGFBQWEsZ0JBQWdCLFVBQVUsU0FBUyxTQUFTO0FBQy9XLDREQUE0RCxZQUFZLFNBQVMsS0FBSyxRQUFRLFdBQVcsaUJBQWlCLCtCQUErQixJQUFJLElBQUksTUFBTSxzQkFBc0IsTUFBTSxJQUFJLGVBQWUsSUFBSSxNQUFNLHNCQUFzQixNQUFNLElBQUksTUFBTSx5Q0FBeUMsYUFBYSxTQUFTLGlCQUFpQixhQUFhLGVBQWUsU0FBUyxnQkFBZ0Isc0JBQXNCLFNBQVMsZUFBZSxNQUFNLCtDQUErQztBQUM5ZSxHQUFHLDRDQUE0QyxXQUFXLEtBQUssa0RBQWtELG1EQUFtRCxjQUFjLGtGQUFrRiw0QkFBNEIsOEJBQThCLDRCQUE0Qix3Q0FBd0MsK0JBQStCLGdDQUFnQztBQUNqYyxJQUFJLGtCQUFrQixrT0FBa08sZUFBZSxnQkFBZ0IsNkNBQTZDLFlBQVksY0FBYyxvQkFBb0IsdUJBQXVCLEtBQUsscURBQXFEO0FBQ25jLGVBQWUsK0RBQStELGlCQUFpQixLQUFLLHlCQUF5QixnQkFBZ0IsbUNBQW1DLGtCQUFrQixjQUFjLFlBQVksRUFBRSxFQUFFLG1DQUFtQyxRQUFRLEtBQUssa0JBQWtCLGlEQUFpRCxXQUFXLDREQUE0RCxFQUFFLHlCQUF5QixVQUFVLFNBQVMsd0JBQXdCLFVBQVUsU0FBUztBQUNuZixxQ0FBcUMsRUFBRSx5QkFBeUIscUNBQXFDLGtCQUFrQixPQUFPLGVBQWUsd0NBQXdDLHNCQUFzQixVQUFVLGVBQWUsMkJBQTJCLElBQUksU0FBUyxVQUFVLHNCQUFzQiwwQ0FBMEMsU0FBUyxZQUFZLFdBQVcsYUFBYSxnQkFBZ0IsTUFBTSxvQ0FBb0MsY0FBYyxpQkFBaUI7QUFDNWQsU0FBUyxtQ0FBbUMseUlBQXlJLHNQQUFzUCxzQ0FBc0MsY0FBYyxZQUFZLFNBQVMsZUFBZSw4QkFBOEIsSUFBSTtBQUNyaUIsY0FBYyxJQUFJLGlCQUFpQixJQUFJLFNBQVMsYUFBYSxFQUFFLG1CQUFtQixrQkFBa0IsU0FBUyx1QkFBdUIsZ0JBQWdCLCtEQUErRCxNQUFNLElBQUkscUJBQXFCLGNBQWMsZ0JBQWdCLDJJQUEySSxrQ0FBa0MsNEJBQTRCLFFBQVEsU0FBUyxlQUFlO0FBQ3pmLG1LQUFtSyxnQkFBZ0IsZUFBZSwrQkFBK0IsVUFBVSxlQUFlLGVBQWUsK0RBQStELDBCQUEwQixlQUFlLHVDQUF1QyxvQkFBb0IsTUFBTSxrQkFBa0Isd0JBQXdCO0FBQzVkLDZDQUE2Qyx3REFBd0Qsb0JBQW9CLElBQUksV0FBVyxVQUFVLGNBQWMsaUJBQWlCLHFCQUFxQixzQ0FBc0MsNkJBQTZCLGdCQUFnQixVQUFVLFNBQVMsbUJBQW1CLG1CQUFtQixpREFBaUQsNkVBQTZFLGlCQUFpQjtBQUNqZSwrQkFBK0IsR0FBRyxRQUFRLFVBQVUsbUJBQW1CLElBQUksc0JBQXNCLG9DQUFvQyxLQUFLLHFCQUFxQixtQkFBbUIseUJBQXlCLGlCQUFpQix1RkFBdUYsaUJBQWlCLHlGQUF5RixjQUFjLHVCQUF1QjtBQUNsYyx5QkFBeUIsT0FBTyxVQUFVLGVBQWUsWUFBWSxXQUFXLEtBQUssV0FBVyw2RUFBNkUsc0JBQXNCLEtBQUssc0JBQXNCLG1DQUFtQyxzQkFBc0IsUUFBUSxTQUFTLHdJQUF3SSxJQUFJLGlCQUFpQjtBQUNyYyxNQUFNLGtLQUFrSyxXQUFXLGdCQUFnQixnQ0FBZ0MsZUFBZSwwTEFBMEwsZUFBZTtBQUMzYixlQUFlLHNEQUFzRCxnQ0FBZ0MsbURBQW1ELE9BQU8sR0FBRyxlQUFlLGlDQUFpQywwQ0FBMEMsS0FBSyxnR0FBZ0csdUNBQXVDLHNCQUFzQixPQUFPLEdBQUcsRUFBRSxhQUFhLGdCQUFnQjtBQUN2YyxHQUFHLDBDQUEwQyx5REFBeUQsU0FBUyxjQUFjLDREQUE0RCxvQkFBb0IscUJBQXFCLGVBQWUsaUVBQWlFLFVBQVUsd0JBQXdCLEVBQUUsZ0JBQWdCLFNBQVMsY0FBYyx3RkFBd0Ysa0JBQWtCLHNCQUFzQjtBQUM3ZixTQUFTLEVBQUUsTUFBTSxjQUFjLGFBQWEseUdBQXlHLGdEQUFnRCxJQUFJLGNBQWMsYUFBYSxvQkFBb0IsY0FBYyxFQUFFLEVBQUUsZ0JBQWdCLHFCQUFxQixrR0FBa0csS0FBSyxrQkFBa0IsZ0NBQWdDLGNBQWMsUUFBUTtBQUM5ZCxHQUFHLHlEQUF5RCxjQUFjLDhFQUE4RSxhQUFhLFdBQVcsVUFBVSxTQUFTLHdDQUF3QyxjQUFjLEVBQUUsOEJBQThCLHdCQUF3QixFQUFFLGlCQUFpQixrQkFBa0IsNEJBQTRCLGNBQWMsVUFBVSxlQUFlLHVEQUF1RDtBQUNoZCxpQkFBaUIsZUFBZSw4RkFBOEYsaUJBQWlCLEVBQUUsMERBQTBELEtBQUssMkRBQTJELGlCQUFpQiw2REFBNkQsMERBQTBELDBCQUEwQiw4QkFBOEIsMkJBQTJCO0FBQ3RlLEtBQUsscUNBQXFDLHdCQUF3QixnQkFBZ0IscUJBQXFCLEVBQUUsaUJBQWlCLGtCQUFrQixRQUFRLElBQUksOEJBQThCLG1CQUFtQiwrQkFBK0IsWUFBWSxrQ0FBa0MsT0FBTyxpSkFBaUosWUFBWSxZQUFZLHFCQUFxQixJQUFJO0FBQy9kLEtBQUssMkJBQTJCLGVBQWUsV0FBVyxvQkFBb0IsdUNBQXVDLEtBQUssS0FBSyx5QkFBeUIsd0JBQXdCLG9CQUFvQixxREFBcUQscUZBQXFGLGlDQUFpQyx1RUFBdUUsU0FBUyx5Q0FBeUM7QUFDeGUsdUNBQXVDLDBCQUEwQixXQUFXLHlDQUF5QyxnQkFBZ0IsY0FBYyxHQUFHLDBCQUEwQixvQkFBb0IsdUJBQXVCLGdCQUFnQixzQ0FBc0MseURBQXlELGNBQWMsU0FBUyxNQUFNLE9BQU8sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLEdBQUcsNEJBQTRCLCtDQUErQztBQUN0ZSxnQkFBZ0IsNERBQTRELEdBQUcseUNBQXlDLGNBQWMseUJBQXlCLDZDQUE2QyxhQUFhLDZCQUE2Qix1RkFBdUY7QUFDN1UsUUFBUSxnQkFBZ0IsS0FBSyxVQUFVLHVDQUF1QywyRkFBMkYscUhBQXFILEVBQUUsVUFBVSx5QkFBeUIsV0FBVyxZQUFZLG9CQUFvQix1QkFBdUIsMkJBQTJCLHNEQUFzRCx3QkFBd0I7QUFDOWUsa0JBQWtCLEtBQUssSUFBSSxFQUFFLGtCQUFrQixLQUFLLElBQUksSUFBSSxnQ0FBZ0MsV0FBVyx5Q0FBeUMsZ0JBQWdCLGtCQUFrQix3SUFBd0ksR0FBRywwQkFBMEIsY0FBYyxRQUFRLDhDQUE4Qyx1Q0FBdUMsMkJBQTJCO0FBQzdkLFNBQVMsRUFBRSxJQUFJLCtCQUErQixlQUFlLE9BQU8sT0FBTyxFQUFFLFNBQVMsd0VBQXdFLE1BQU0sMEJBQTBCLHFIQUFxSCxNQUFNLHFGQUFxRixnQkFBZ0IsZUFBZSx1Q0FBdUMsYUFBYSxFQUFFO0FBQ25lLGVBQWUsMENBQTBDLHFCQUFxQiw0Q0FBNEMsMkNBQTJDLFdBQVcsUUFBUSxRQUFRLHVDQUF1QyxnQ0FBZ0MsMkJBQTJCLEVBQUUsVUFBVSx5QkFBeUIsMkRBQTJELGdCQUFnQixjQUFjLE1BQU0sMEJBQTBCO0FBQ2hjLHVEQUF1RCx1Q0FBdUMsS0FBSywwQkFBMEIsV0FBVyxnQkFBZ0Isa0NBQWtDLHdEQUF3RCxFQUFFLEdBQUcsTUFBTSxvREFBb0QsZ0JBQWdCLDJEQUEyRCxFQUFFLGNBQWMsV0FBVyx1QkFBdUIsdUNBQXVDO0FBQ3JkLE1BQU0sS0FBSyxnRUFBZ0UsNkVBQTZFLGVBQWUsMkJBQTJCLGlHQUFpRywrQkFBK0IsRUFBRSxhQUFhLGFBQWEsRUFBRSxhQUFhLHFEQUFxRCx1Q0FBdUMsR0FBRyxFQUFFLGNBQWMsY0FBYztBQUMxZSxFQUFFLDJDQUEyQyxFQUFFLDBCQUEwQixxRUFBcUUsb0VBQW9FLG9DQUFvQyxvQkFBb0IsMExBQTBMLGlDQUFpQyxLQUFLLFVBQVUsS0FBSyxhQUFhLFNBQVM7QUFDL2dCLFNBQVMsZUFBZSxpQkFBaUIsRUFBRSxvQ0FBb0MsV0FBVywyQkFBMkIsV0FBVyxpQ0FBaUMsTUFBTSxJQUFJLDBCQUEwQixXQUFXLFVBQVUseUJBQXlCLHFDQUFxQyxLQUFLLElBQUksb0NBQW9DLHFEQUFxRCxRQUFRLDBEQUEwRCxFQUFFLG1CQUFtQixxQkFBcUIsU0FBUztBQUMvZSwyZkFBMmY7QUFDM2YsbVJBQW1SO0FBQ25SLHFIQUFxSCx5T0FBeU87QUFDOVYsMkVBQTJFLGVBQWUsZUFBZSw0Q0FBNEMsNENBQTRDLDZCQUE2QixpQkFBaUIsYUFBYSxlQUFlLDRDQUE0Qyw0QkFBNEIsaUJBQWlCLGNBQWMsZUFBZSw2Q0FBNkMsNkJBQTZCLGlCQUFpQixrQkFBa0IsZUFBZTtBQUM3ZiwyQ0FBMkMsNkJBQTZCLGlCQUFpQixZQUFZLGVBQWUsc0NBQXNDLGlCQUFpQiw2QkFBNkIsaUJBQWlCLHFCQUFxQixlQUFlLG9EQUFvRCwyQkFBMkIsa0NBQWtDLGlCQUFpQixTQUFTLGdCQUFnQixpQkFBaUIseUJBQXlCLGVBQWUsd0RBQXdEO0FBQ3pnQixxQkFBcUIsa0NBQWtDLHFCQUFxQixTQUFTLGdCQUFnQixrQkFBa0IsS0FBSyxZQUFZLGVBQWUsWUFBWSw2QkFBNkIsMkJBQTJCLDBCQUEwQixFQUFFLGdEQUFnRCw4QkFBOEIsZUFBZSxtQkFBbUIsYUFBYSxTQUFTLGlCQUFpQixvQkFBb0IsZUFBZSw0QkFBNEIsaUJBQWlCLGFBQWEsZUFBZTtBQUMxZixzQ0FBc0MsNkJBQTZCLGlCQUFpQixZQUFZLGVBQWUsMkNBQTJDLDZCQUE2QixpQkFBaUIsY0FBYyxlQUFlLFlBQVkscUNBQXFDLE9BQU8sMERBQTBELGtCQUFrQixnQkFBZ0IsaUJBQWlCLHNCQUFzQiw2REFBNkQsZ0JBQWdCO0FBQzdlLDhGQUE4RixNQUFNLDBCQUEwQixpQkFBaUIsb0JBQW9CLGVBQWUsbURBQW1ELDBCQUEwQixrQ0FBa0MsaUJBQWlCLFNBQVMsZ0JBQWdCLGlCQUFpQixtQkFBbUIsZUFBZSxrREFBa0QseUJBQXlCLGtDQUFrQztBQUMzZSxTQUFTLGdCQUFnQixpQkFBaUIsV0FBVyxlQUFlLE1BQU0sa0VBQWtFLHNDQUFzQyxhQUFhLG1CQUFtQixhQUFhLFNBQVMsaUJBQWlCLFlBQVksZUFBZSxvREFBb0QsMkJBQTJCLGlCQUFpQix3REFBd0QsYUFBYSw2QkFBNkI7QUFDdGQsZUFBZSxjQUFjLDhCQUE4QixrQkFBa0IsS0FBSyxZQUFZLGVBQWUsMkNBQTJDLGtCQUFrQixLQUFLLGVBQWUsZUFBZSx5RUFBeUUsa0JBQWtCLGdCQUFnQiw0REFBNEQsV0FBVyxZQUFZLGlCQUFpQiwyQ0FBMkMsWUFBWSxZQUFZLFNBQVMsaUJBQWlCO0FBQ3pmLGlCQUFpQixvQkFBb0IsYUFBYSxpREFBaUQsNkJBQTZCLG9CQUFvQixhQUFhLGlEQUFpRCx3Q0FBd0MsNkNBQTZDO0FBQ3ZTLHVZQUF1WSxLQUFLLGVBQWUsK0RBQStELG1CQUFtQix5QkFBeUI7QUFDdGdCLDBDQUEwQyxlQUFlLGNBQWMsa0RBQWtELHFCQUFxQix3QkFBd0Isa0NBQWtDLHNDQUFzQyw0QkFBNEIsMkNBQTJDLFdBQVcscUNBQXFDLG9EQUFvRCxvQkFBb0IsS0FBSyxpQkFBaUI7QUFDbmMsNEJBQTRCLHNEQUFzRCw0QkFBNEIsb0JBQW9CLE1BQU0sU0FBUyxZQUFZLGlCQUFpQix3QkFBd0Isb0JBQW9CLHlDQUF5QyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sdUJBQXVCLElBQUkscUJBQXFCLHlCQUF5QixXQUFXLGlDQUFpQyxjQUFjLElBQUkseUJBQXlCLHNCQUFzQixFQUFFO0FBQzFlLFNBQVMsVUFBVSwwQkFBMEIsOEJBQThCLDZDQUE2QyxXQUFXLGtDQUFrQywwQkFBMEIsZ0NBQWdDLG1DQUFtQyxVQUFVLFNBQVMsVUFBVSx5QkFBeUIsU0FBUyxjQUFjLGdCQUFnQiwwQkFBMEIsMkJBQTJCLEVBQUUsMEJBQTBCLFFBQVEsZ0JBQWdCLEtBQUssWUFBWTtBQUN6ZCxhQUFhLEVBQUUsNEJBQTRCLGVBQWUsdURBQXVELDRDQUE0QyxtQkFBbUIsWUFBWSxXQUFXLHlCQUF5QixrQkFBa0IsMkRBQTJELDRDQUE0Qyw0QkFBNEIsd0JBQXdCLG1CQUFtQixrQkFBa0IsOENBQThDO0FBQ2hlLHdEQUF3RCw0RkFBNEYsMEJBQTBCLDhCQUE4QiwyQkFBMkIsZUFBZSw4QkFBOEIsV0FBVyxLQUFLLFdBQVcsb0NBQW9DLDREQUE0RCw0QkFBNEIsY0FBYyxxQkFBcUI7QUFDOWMsY0FBYywwQkFBMEIsbUNBQW1DLHdEQUF3RCx5QkFBeUIsMEJBQTBCLFdBQVcsS0FBSyxzQkFBc0Isd0RBQXdELFFBQVEsV0FBVyxtREFBbUQsMEJBQTBCLFNBQVMsZUFBZSxZQUFZLFdBQVcsS0FBSyxXQUFXLGNBQWMsY0FBYyxZQUFZLFdBQVcsaUJBQWlCLGVBQWU7QUFDdGdCLDBCQUEwQiwyQkFBMkIsNEJBQTRCLHFEQUFxRCxxQkFBcUIsS0FBSyxjQUFjLHlCQUF5QixpREFBaUQsT0FBTyxRQUFRLHFCQUFxQiwrQkFBK0IsY0FBYywyQ0FBMkMsMkJBQTJCLHFFQUFxRSx5QkFBeUI7QUFDN2UsNEJBQTRCLDBCQUEwQixjQUFjLFdBQVcsS0FBSyxXQUFXLHdCQUF3QixNQUFNLGlCQUFpQixnQkFBZ0Isa0JBQWtCLDBDQUEwQyxlQUFlLGlEQUFpRCwwQkFBMEIsbURBQW1ELGVBQWUsMEJBQTBCLDRCQUE0QixRQUFRLG9CQUFvQixXQUFXLEtBQUssT0FBTyxXQUFXO0FBQzFlLCtEQUErRCxHQUFHLDJCQUEyQixTQUFTLGVBQWUsOEJBQThCLFdBQVcsS0FBSyxXQUFXLFlBQVksY0FBYyx3QkFBd0IseUJBQXlCLElBQUksVUFBVSxNQUFNLFVBQVUsMkJBQTJCLHVCQUF1QixVQUFVLFlBQVksbUJBQW1CLG9CQUFvQiw0QkFBNEIsVUFBVSxvQ0FBb0MsMEJBQTBCO0FBQzFlLEVBQUUsV0FBVyxLQUFLLGtCQUFrQixrQkFBa0IsMEJBQTBCLFNBQVMsdUJBQXVCLDZDQUE2Qyx5QkFBeUIsWUFBWSxFQUFFLFVBQVUsbUNBQW1DLGdEQUFnRCx5QkFBeUIsWUFBWSxFQUFFLFVBQVUsc0NBQXNDLHVDQUF1QywyQkFBMkIsZUFBZSxhQUFhLFVBQVUsWUFBWSxhQUFhO0FBQ3pmLE9BQU8sV0FBVyxlQUFlLFFBQVEscUVBQXFFLEtBQUssbUVBQW1FLGtCQUFrQiw0QkFBNEIsb0JBQW9CLHlCQUF5QixrQkFBa0IsNEJBQTRCLGFBQWEsV0FBVyxTQUFTLHVCQUF1QixvREFBb0QsOEJBQThCLGtCQUFrQixjQUFjLFdBQVc7QUFDcGYsb0NBQW9DLFNBQVMsd0JBQXdCLGdCQUFnQixzQkFBc0Isa0JBQWtCLG1CQUFtQix5QkFBeUIsb0ZBQW9GLFdBQVcsNEJBQTRCLGdEQUFnRCxtQ0FBbUMsMkJBQTJCLEtBQUssd0JBQXdCLEtBQUssbUJBQW1CLGlCQUFpQixLQUFLLDBCQUEwQjtBQUN2ZixZQUFZLG9CQUFvQixhQUFhLFVBQVUsV0FBVyw4QkFBOEIsMkJBQTJCLG9CQUFvQixHQUFHLEtBQUssMEJBQTBCLHlIQUF5SCxRQUFRLDJCQUEyQixhQUFhLDZCQUE2QixnQkFBZ0IsV0FBVywwQkFBMEIscUNBQXFDLG1DQUFtQztBQUNwZixRQUFRLFlBQVksaUNBQWlDLGFBQWEsa0JBQWtCLG9CQUFvQixpQkFBaUIsUUFBUSwrQkFBK0IsV0FBVyx5QkFBeUIsZUFBZSw0QkFBNEIsMkJBQTJCLGVBQWUsYUFBYSxVQUFVLFlBQVksS0FBSyw0QkFBNEIsZ0NBQWdDLEVBQUUseUNBQXlDLGdCQUFnQixzQ0FBc0M7QUFDOWQsd0JBQXdCLEVBQUUsd0JBQXdCLDZCQUE2QixTQUFTLHdJQUF3SSwyRkFBMkYsOElBQThJLDRCQUE0QjtBQUNyZSw2QkFBNkIsMEJBQTBCLHNCQUFzQiwwQkFBMEIsc0JBQXNCLDBCQUEwQixVQUFVLGdCQUFnQiwwQkFBMEIsV0FBVyx3QkFBd0IsY0FBYyxHQUFHLDBCQUEwQiw0QkFBNEIsa0JBQWtCLFlBQVksZ0JBQWdCLG1CQUFtQiwwQkFBMEIsU0FBUyxnQkFBZ0IsaUJBQWlCLEVBQUUsUUFBUSxXQUFXLEtBQUssV0FBVztBQUMvZCxZQUFZLDBCQUEwQixTQUFTLGdCQUFnQixpQkFBaUIsRUFBRSxRQUFRLFdBQVcsS0FBSyxXQUFXLGlEQUFpRCw0QkFBNEIsV0FBVyxTQUFTLHdDQUF3QyxjQUFjLE1BQU0sZ0JBQWdCLDJEQUEyRCxlQUFlLHFJQUFxSTtBQUNqZixTQUFTLGdDQUFnQyw4QkFBOEIsMkJBQTJCLHNCQUFzQixpQkFBaUIsWUFBWSxPQUFPLFVBQVUsR0FBRyxFQUFFLGVBQWUsSUFBSSxrQkFBa0IsV0FBVyxpQkFBaUIsUUFBUSxXQUFXLGFBQWEsMEJBQTBCLDBCQUEwQiwwQkFBMEIsTUFBTSw0QkFBNEIsb0JBQW9CLElBQUksSUFBSTtBQUN4WixDQUFDLFFBQVEsMkJBQTJCLFNBQVMsd0JBQXdCLGVBQWUsb0JBQW9CLDZEQUE2RCxXQUFXLEtBQUssK0JBQStCLHlEQUF5RCxtQ0FBbUMsMENBQTBDLHdCQUF3QixrREFBa0QsNkNBQTZDLHdCQUF3QjtBQUN6ZSxnQ0FBZ0MseURBQXlELHdCQUF3Qiw0R0FBNEcsMEJBQTBCLDZCQUE2QiwyQkFBMkIsd0JBQXdCLDRDQUE0QyxRQUFRLFdBQVcsa0NBQWtDLFdBQVcsb0JBQW9CLDBCQUEwQjtBQUNqZSxjQUFjLHdCQUF3QixpQ0FBaUMsV0FBVyxrR0FBa0csMEVBQTBFLDJGQUEyRixvRUFBb0UsVUFBVSxJQUFJLGtCQUFrQixXQUFXO0FBQ3hjLG9DQUFvQyxTQUFTLGVBQWUsOEdBQThHLDZCQUE2QixnQ0FBZ0MsMkJBQTJCLG9DQUFvQywrQkFBK0IsU0FBUyxPQUFPLFFBQVEsVUFBVSxHQUFHO0FBQzFXLGNBQWMsZUFBZSxxQ0FBcUMsYUFBYSxJQUFJLHlCQUF5QixXQUFXLGdCQUFnQixVQUFVLG9DQUFvQyxXQUFXLDZCQUE2QixtQkFBbUIsZUFBZSwwQkFBMEIsNkJBQTZCLGtDQUFrQyxFQUFFLFFBQVEsV0FBVyxtQkFBbUIsS0FBSyxXQUFXLEVBQUUsZ0JBQWdCLGNBQWMscUJBQXFCLFlBQVksV0FBVyxtQkFBbUI7QUFDL2UsU0FBUyw0QkFBNEIsdUNBQXVDLG9DQUFvQyxnR0FBZ0csb0JBQW9CLGdCQUFnQixTQUFTLGdCQUFnQixzQ0FBc0MsdUJBQXVCLFNBQVMsWUFBWSwwQkFBMEIsV0FBVyxhQUFhLG1CQUFtQixvQkFBb0IsWUFBWSxJQUFJLCtCQUErQjtBQUN2ZSxtQkFBbUIsZ0NBQWdDLGdEQUFnRCxvREFBb0Q7QUFDdko7QUFDQSxtZUFBbWU7QUFDbmUsbUZBQW1GLFlBQVksTUFBTSxNQUFNLGlDQUFpQyxlQUFlLEVBQUUsTUFBTSxNQUFNLDZCQUE2QixnQkFBZ0IsK0NBQStDLHVDQUF1QyxFQUFFLE9BQU8sc0NBQXNDLElBQUksdURBQXVELEdBQUcsZ0JBQWdCLEtBQUssV0FBVyxTQUFTLFFBQVEsc0JBQXNCLEtBQUssV0FBVyxTQUFTLElBQUksR0FBRyxJQUFJLEtBQUs7QUFDemdCLG9CQUFvQixhQUFhLG1CQUFtQixRQUFRLFdBQVcsU0FBUyw2Q0FBNkMsNkNBQTZDLHVGQUF1Rix1SEFBdUgsZUFBZSxHQUFHLDBFQUEwRSxPQUFPLElBQUksS0FBSyxRQUFRLEdBQUc7QUFDL2UsOEJBQThCLGtDQUFrQywyRUFBMkUsR0FBRyxJQUFJLFVBQVUsOEJBQThCLHdEQUF3RCw4QkFBOEIsOENBQThDLGdHQUFnRyxXQUFXLHNCQUFzQiw4QkFBOEI7QUFDN2QsMkVBQTJFLHdCQUF3Qix5QkFBeUIsaUdBQWlHLDhCQUE4QixtQkFBbUIsK0RBQStELGlCQUFpQixnQ0FBZ0Msa0JBQWtCLFlBQVksV0FBVyx1QkFBdUIseUJBQXlCLFlBQVksR0FBRywwQkFBMEI7QUFDaGdCLFNBQVMsNEJBQTRCLHlCQUF5Qiw4QkFBOEIsc0JBQXNCLGdDQUFnQyxnQ0FBZ0MsZ0NBQWdDLDJCQUEyQixXQUFXLElBQUkscUJBQXFCLGNBQWMsNEJBQTRCLG1CQUFtQiwwQkFBMEIsb0NBQW9DLDBGQUEwRjtBQUN0ZSxNQUFNLEdBQUcsOEJBQThCLGdCQUFnQixXQUFXLGlCQUFpQixtQ0FBbUMsd0NBQXdDLGVBQWUseUJBQXlCLCtCQUErQixpREFBaUQsV0FBVyxFQUFFLGlCQUFpQixVQUFVLGdDQUFnQyxvQkFBb0IsMERBQTBELEtBQUssa0JBQWtCLE1BQU0sU0FBUyxpQ0FBaUM7QUFDbmYsRUFBRSxHQUFHLCtCQUErQixnREFBZ0QsRUFBRSxPQUFPLHNCQUFzQiw0QkFBNEIsY0FBYyxRQUFRLG1CQUFtQiw0QkFBNEIsa0JBQWtCLHlFQUF5RSxXQUFXLDJDQUEyQywwQkFBMEIsNEJBQTRCLFVBQVUsa0JBQWtCLDBCQUEwQjtBQUNqZCwwQkFBMEIscURBQXFELHVDQUF1QyxHQUFHLDZDQUE2QyxzQkFBc0IsRUFBRTtBQUM5TCx1REFBdUQsa0JBQWtCLDZCQUE2QixvQkFBb0Isd0JBQXdCLHlCQUF5QixlQUFlLHlDQUF5QyxtQkFBbUIsNEhBQTRILG1FQUFtRSwwQkFBMEIsZUFBZSxVQUFVLGdCQUFnQjtBQUN4ZixZQUFZLG1CQUFtQixhQUFhLFVBQVUsRUFBRSxNQUFNLEtBQUsseUJBQXlCLFVBQVUsMEJBQTBCLFNBQVMsUUFBUSxNQUFNLGtDQUFrQyxvQkFBb0IsUUFBUSw0QkFBNEIsVUFBVSxNQUFNLHNDQUFzQyxLQUFLLGtCQUFrQixVQUFVLGFBQWEsRUFBRSxzQkFBc0IsK0NBQStDLEtBQUssV0FBVywwQkFBMEIsZ0NBQWdDLDBCQUEwQjtBQUNoZ0Isb0JBQW9CLDRCQUE0QixVQUFVLGFBQWEsRUFBRSxXQUFXLHdCQUF3QiwyQkFBMkIsOENBQThDLFdBQVcsZ0NBQWdDLDRCQUE0Qix1QkFBdUIsaUJBQWlCLEtBQUssV0FBVyx5QkFBeUIsaUJBQWlCLDJGQUEyRixtQkFBbUIsRUFBRSx3QkFBd0I7QUFDdGUsR0FBRyxZQUFZLEdBQUcsZ0JBQWdCLFdBQVcsZUFBZSxlQUFlLG9DQUFvQyxpQ0FBaUMscUJBQXFCLFdBQVcsaUJBQWlCLHFCQUFxQix3QkFBd0Isb0NBQW9DLGdCQUFnQixJQUFJLDRCQUE0QixTQUFTLGVBQWUsdUNBQXVDLGFBQWEsNEJBQTRCLDRCQUE0Qiw4QkFBOEI7QUFDcGUsS0FBSyxPQUFPLHNEQUFzRCxLQUFLLFFBQVEsYUFBYSx1QkFBdUIsSUFBSSxhQUFhLDRCQUE0QixRQUFRLGFBQWEsZ0JBQWdCLFlBQVksNEJBQTRCLDJGQUEyRixVQUFVLE9BQU8sWUFBWSxpQ0FBaUMsZUFBZSxVQUFVLFdBQVcsT0FBTyxNQUFNLG9CQUFvQjtBQUMzYyx3Q0FBd0MsZ0ZBQWdGLHNEQUFzRCxnRUFBZ0UsZUFBZSxJQUFJLDRCQUE0QixRQUFRLEtBQUssMEJBQTBCLGdCQUFnQix1QkFBdUIsZ0RBQWdELEVBQUUsVUFBVSxPQUFPLFlBQVksK0JBQStCO0FBQ3pkLDRGQUE0RixhQUFhLGtCQUFrQiwyQkFBMkIsU0FBUyw4Q0FBOEMsR0FBRyw0QkFBNEIsTUFBTSxTQUFTLDRCQUE0QixXQUFXLGtEQUFrRCxVQUFVLDBCQUEwQixtQkFBbUIsNEJBQTRCLDRCQUE0QixvQ0FBb0M7QUFDdmUsTUFBTSxvQkFBb0IsNkNBQTZDLGdDQUFnQyxvQkFBb0IsUUFBUSwwQ0FBMEMsY0FBYywyQ0FBMkMsd0JBQXdCLDhCQUE4QixzQ0FBc0MsaUVBQWlFLDJCQUEyQixnQkFBZ0IsZ0NBQWdDLHFDQUFxQztBQUNuZixlQUFlLHdGQUF3Rix1S0FBdUssNERBQTRELFVBQVUsNEJBQTRCLG1CQUFtQiw4QkFBOEIsZ0NBQWdDO0FBQ2pjLHdCQUF3QixHQUFHLHVDQUF1QyxHQUFHLDZDQUE2QyxrQkFBa0IsRUFBRSxpQkFBaUIsMEJBQTBCLFdBQVcsaUJBQWlCLDBCQUEwQiw2RUFBNkUsdURBQXVELElBQUksUUFBUSwwQkFBMEIsK0JBQStCLFlBQVksV0FBVyxLQUFLLFdBQVcsMEJBQTBCO0FBQ2pmLGlDQUFpQyx3QkFBd0IsUUFBUSx1QkFBdUIsRUFBRSwyQkFBMkIsaUJBQWlCLG1DQUFtQyx3Q0FBd0MsS0FBSyxLQUFLLFdBQVcsNEJBQTRCLE9BQU8sK0NBQStDLGNBQWMsd0JBQXdCLEdBQUcsd0ZBQXdGLEtBQUssa0JBQWtCLG1CQUFtQjtBQUNuZSxrRUFBa0Usb0NBQW9DLGlCQUFpQixLQUFLLG9EQUFvRCxnREFBZ0QsVUFBVSxFQUFFLGFBQWEsc0JBQXNCLFNBQVMsMkdBQTJHLDBCQUEwQiwrQ0FBK0MsMEJBQTBCO0FBQ3RlLDZEQUE2RCwwQkFBMEIsa0ZBQWtGLHlCQUF5QixnQ0FBZ0MsV0FBVyxLQUFLLFdBQVcsNkJBQTZCLGdCQUFnQixrRUFBa0UsVUFBVSx5Q0FBeUMsaURBQWlEO0FBQ2hkLHFDQUFxQyxtQkFBbUIsZUFBZSxVQUFVLGlCQUFpQixNQUFNLG1CQUFtQixlQUFlLFVBQVUsaUJBQWlCLFNBQVMsV0FBVyxLQUFLLGVBQWUsRUFBRSxjQUFjLHlCQUF5QixLQUFLLDBCQUEwQixpQ0FBaUMsZ0JBQWdCLDJCQUEyQixjQUFjLDJCQUEyQixhQUFhLDBCQUEwQixzQ0FBc0MsaUJBQWlCLFdBQVcsS0FBSztBQUN4ZixLQUFLLHNCQUFzQiw0QkFBNEIsMEJBQTBCLDJCQUEyQiwrRUFBK0UsNENBQTRDLFNBQVMsT0FBTyxTQUFTLFlBQVksUUFBUSw2QkFBNkIsR0FBRyxxQkFBcUIsb0JBQW9CLFNBQVMsNkJBQTZCLGVBQWUsZUFBZSxRQUFRLHlDQUF5QyxjQUFjLE1BQU0sS0FBSztBQUMzZSxxRUFBcUUsUUFBUSxnQ0FBZ0MsV0FBVyxtQ0FBbUMsMkJBQTJCLGtCQUFrQixNQUFNLFlBQVksUUFBUSxNQUFNLGtCQUFrQixVQUFVLGtDQUFrQyx5QkFBeUIsbUhBQW1ILHlCQUF5QixXQUFXO0FBQ3RkLGtGQUFrRixPQUFPLG9DQUFvQyxpQ0FBaUMsMkJBQTJCLEVBQUUsR0FBRyx5QkFBeUIsU0FBUyxVQUFVLHlCQUF5QixTQUFTLFdBQVcsNkJBQTZCLHdIQUF3SCx1Q0FBdUMseUJBQXlCO0FBQzVlLHVCQUF1QixlQUFlLHVCQUF1QixNQUFNLFFBQVEsTUFBTSw4RUFBOEUsMkNBQTJDLHlKQUF5Six1RUFBdUUsaUJBQWlCLGlEQUFpRDtBQUM1ZSxZQUFZLDREQUE0RCwwQkFBMEIsbUJBQW1CLDRCQUE0QixtRUFBbUUsc0JBQXNCLG1CQUFtQixnQkFBZ0Isc0JBQXNCLDRCQUE0QiwyQkFBMkIsMkJBQTJCLGlCQUFpQixlQUFlLDZCQUE2QixlQUFlLFFBQVEsT0FBTyw2QkFBNkIsZ0JBQWdCO0FBQzdmLEtBQUsscUJBQXFCLHNDQUFzQyw2QkFBNkIsdUNBQXVDLG1CQUFtQix1Q0FBdUMsMkNBQTJDLFdBQVcsNEJBQTRCLDJDQUEyQyxXQUFXLDZCQUE2QiwyQkFBMkIsWUFBWSxXQUFXLEtBQUssMENBQTBDLGdCQUFnQiwwQkFBMEI7QUFDOWUsRUFBRSxXQUFXLEtBQUssMENBQTBDLHFCQUFxQiwwQkFBMEIsbUJBQW1CLGdCQUFnQixnQkFBZ0IscUNBQXFDLEVBQUUsNkNBQTZDLDJCQUEyQixjQUFjLFlBQVksU0FBUyx5QkFBeUIscUJBQXFCLGdEQUFnRCxNQUFNLHlDQUF5QztBQUM3YixhQUFhLDZCQUE2QixzQkFBc0IscUJBQXFCLDJCQUEyQixPQUFPLDhCQUE4QixNQUFNLGdCQUFnQixZQUFZLFdBQVcsbUJBQW1CLFNBQVMsUUFBUSxpQkFBaUIsc0NBQXNDLG1CQUFtQiwyQkFBMkIsaUJBQWlCLGdDQUFnQyx3REFBd0Qsa0RBQWtEO0FBQ3RlLDBCQUEwQixrREFBa0Qsb0VBQW9FLDJDQUEyQyw2Q0FBNkMsMERBQTBELHVDQUF1Qyw0Q0FBNEMsNENBQTRDLHFDQUFxQyxjQUFjLGVBQWUsVUFBVSxZQUFZLGVBQWUsV0FBVztBQUNuaEIsWUFBWSxvQkFBb0IsaUNBQWlDLDRDQUE0QyxpQkFBaUIsOENBQThDLE1BQU0seUJBQXlCLDRCQUE0QixNQUFNLG9CQUFvQiwwQkFBMEIsTUFBTSxrQkFBa0IsMkJBQTJCLE1BQU0sbUJBQW1CLHFDQUFxQyxvQ0FBb0MsNkJBQTZCLG1DQUFtQztBQUNoZixJQUFJLG1EQUFtRCw4Q0FBOEMscUNBQXFDLHFCQUFxQixPQUFPLFNBQVMsUUFBUSxJQUFJLFVBQVUsaUJBQWlCLHlDQUF5QyxLQUFLLE9BQU8sRUFBRSx5QkFBeUIsY0FBYyx5QkFBeUIsR0FBRyx3QkFBd0IsaUNBQWlDLDhCQUE4Qiw2REFBNkQsV0FBVyxHQUFHLEVBQUU7QUFDcGYsdUNBQXVDLHNCQUFzQixpQ0FBaUMsRUFBRSxxQkFBcUIsV0FBVyxnQkFBZ0Isa0JBQWtCLG9CQUFvQixFQUFFLEtBQUssc0NBQXNDLGtDQUFrQyxLQUFLOztBQUUxUTs7Ozs7Ozs7QUM5S0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSx3Q0FBcUM7QUFFckMsa0RBQXlEO0FBQ3pELHFDQUEwQjtBQUUxQixnREFBNkQ7QUFFN0QsMkNBQW9DO0FBQ3BDLHdDQUE4QjtBQUU5QixrREFBMkQ7QUFDM0QsdURBQXFFO0FBQ3JFLGlEQUF5RDtBQUN6RCxpREFBeUQ7QUFFekQsK0NBQStDO0FBRS9DLDZDQUFpRDtBQUNqRCxzREFBaUU7QUFFakU7SUFnQkUsWUFBWSxNQUF5QjtRQUg3QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFHakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDO1lBQ3JDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDdEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLCtCQUFjLENBQUM7WUFDdkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDO1lBQzNCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBRXpCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwyQkFBWSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsY0FBYyxFQUFFLElBQUksK0JBQWMsRUFBRTtTQUNyQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVZLElBQUk7O1lBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRTFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBRXpCLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQztnQkFDcEQsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO2dCQUNyQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ3JDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTthQUNoQyxDQUFDLENBQUM7WUFFSCxNQUFNLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU8sYUFBYSxDQUFDLEtBQWtCO1FBQ3RDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXJCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFFL0IsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRWEsTUFBTTs7WUFDbEIsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBWSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHlDQUFtQixFQUFFLENBQUMsQ0FBQztZQUU5RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO2dCQUNoQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQzNCLENBQUM7UUFFSCxDQUFDO0tBQUE7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLHlCQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RixDQUFDO0NBQ0Y7QUExR0Qsa0NBMEdDOzs7Ozs7Ozs7O0FDMUhEO0lBS0UsWUFBWSxJQUFVLEVBQUUsSUFBVyxFQUFFLEtBQWE7UUFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBVkQsc0NBVUM7Ozs7Ozs7Ozs7QUNiRCw2Q0FBK0M7QUFJL0M7SUFBQTtRQUNtQixnQkFBVyxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO1FBQ2pELGVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUN2QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQWdEaEMsQ0FBQztJQTlDUSxnQkFBZ0IsQ0FBQyxTQUFpQixFQUFFLFFBQXVCO1FBQ2hFLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6RCxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLG1CQUFtQixDQUFDLFNBQWlCLEVBQUUsUUFBdUI7UUFDbkUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkQsRUFBRSxDQUFDLENBQUMsYUFBYSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSxhQUFhLENBQUMsS0FBZTtRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRU8sc0JBQXNCO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTFCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxTQUFpQjtRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQW5ERCwwQ0FtREM7Ozs7Ozs7Ozs7QUN0REQ7SUFBQTtRQUNVLFdBQU0sR0FBZSxFQUFFLENBQUM7SUFxQmxDLENBQUM7SUFuQlEsT0FBTyxDQUFDLEtBQWU7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE9BQU87UUFDWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sU0FBUztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRU0sT0FBTztRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQXRCRCxnQ0FzQkM7Ozs7Ozs7Ozs7QUN4QkQsdUNBQXFDO0FBQ3JDLGtEQUF5RDtBQUl6RCw2Q0FPMkI7QUFFM0IsNkNBQXVEO0FBR3ZELHdEQUE2RTtBQUk3RSxNQUFNLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFPeEM7SUFlRSxZQUFZLFlBQXVDO1FBUmxDLGFBQVEsR0FBZ0I7WUFDdkMsaUJBQWlCLEVBQUUsSUFBSSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QyxTQUFTLEVBQUUsSUFBSSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixVQUFVLEVBQUUsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsZUFBZSxFQUFFLGlDQUFlLENBQUMsUUFBUTtZQUN6QyxTQUFTLEVBQUUsSUFBSSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMvQixDQUFDO1FBR0EsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUVsQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sNEJBQTRCLENBQUMsZ0JBQTBDO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUMzQyxDQUFDO0lBRU0sSUFBSTtRQUNULE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFN0MsZUFBZSxDQUFDLGdCQUFnQixDQUM5QixzQ0FBeUIsQ0FBQyxTQUFTLEVBQ25DLElBQUksQ0FBQyxzQkFBc0IsQ0FDNUIsQ0FBQztRQUNGLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyw4QkFBaUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25GLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQywrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JGLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkYsZUFBZSxDQUFDLGdCQUFnQixDQUFDLG9DQUF1QixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMvRixlQUFlLENBQUMsZ0JBQWdCLENBQUMsOEJBQWlCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVuRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSxPQUFPO1FBQ1osTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUU3QyxlQUFlLENBQUMsbUJBQW1CLENBQ2pDLHNDQUF5QixDQUFDLFNBQVMsRUFDbkMsSUFBSSxDQUFDLHNCQUFzQixDQUM1QixDQUFDO1FBQ0YsZUFBZSxDQUFDLG1CQUFtQixDQUFDLDhCQUFpQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEYsZUFBZSxDQUFDLG1CQUFtQixDQUFDLCtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEYsZUFBZSxDQUFDLG1CQUFtQixDQUFDLGdDQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxRixlQUFlLENBQUMsbUJBQW1CLENBQ2pDLG9DQUF1QixDQUFDLFNBQVMsRUFDakMsSUFBSSxDQUFDLG9CQUFvQixDQUMxQixDQUFDO1FBQ0YsZUFBZSxDQUFDLG1CQUFtQixDQUFDLDhCQUFpQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sWUFBWSxDQUFDLFFBQW1CO1FBQ3JDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFbkMsVUFBVSxDQUFDLFdBQVcsQ0FBQztZQUNyQixJQUFJLEVBQUUsNkNBQXFCLENBQUMsU0FBUztTQUN0QyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQztnQkFDRSxPQUFPLEVBQUUsQ0FBQztnQkFDVixvQkFBb0IsRUFBRSxDQUFDO1lBQ3pCLENBQUM7WUFFRCxpQkFBaUIsS0FBaUI7Z0JBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDZCxvQkFBb0IsRUFBRSxDQUFDO1lBQ3pCLENBQUM7WUFFRDtnQkFDRSxVQUFVLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRCxVQUFVLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELENBQUM7WUFFRCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2xELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFOUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztnQkFDckIsSUFBSSxFQUFFLDZDQUFxQixDQUFDLE9BQU87YUFDcEMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sbUJBQW1CLENBQUMsS0FBbUI7UUFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU8saUJBQWlCLENBQUMsV0FBd0I7UUFDaEQsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0RCxNQUFNLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVPLFdBQVcsQ0FBQyxPQUFnQjtRQUNsQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7WUFDMUIsSUFBSSxFQUFFLDZDQUFxQixDQUFDLFVBQVU7WUFDdEMsVUFBVTtTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyx1QkFBdUI7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7WUFDMUIsSUFBSSxFQUFFLDZDQUFxQixDQUFDLFFBQVE7WUFDcEMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQzFCLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUMzQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sb0JBQW9CLENBQUMsT0FBZ0I7UUFDM0MsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRWpELGdCQUFnQjtRQUNoQixNQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRSxNQUFNO1FBQ04sTUFBTSxlQUFlLEdBQWlCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFckIsTUFBTSxVQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUVuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3pDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLE1BQU0sV0FBVyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsS0FBSyxDQUFDO2dCQUNSLENBQUM7Z0JBRUQsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3ZFLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNyRCxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxNQUFNLFlBQVksR0FBRyxJQUFJLHVCQUFVLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUM1RCxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxjQUFjLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxNQUFNLENBQzFFLENBQUM7b0JBQ0YsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRUQsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMvRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzdDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLE1BQU0sUUFBUSxHQUFHLElBQUksdUJBQVUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBQ3BELGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FDekMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLE1BQU0sQ0FDdEUsQ0FBQztvQkFDRixlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztZQUNILENBQUM7WUFFRCxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFOUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDbkQsTUFBTSxFQUFFLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixNQUFNLEVBQUUsR0FBRyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUVsQywyREFBMkQ7Z0JBQzNELFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ2QsQ0FBQztvQkFDRCxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ1gsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUNWLENBQUMsQ0FBQztZQUNMLENBQUM7WUFFRCxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDckQsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNoQixDQUFDO1FBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRU8sc0JBQXNCLENBQUMsS0FBZ0M7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ2hELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxjQUFjLENBQUMsS0FBd0I7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRU8sZUFBZSxDQUFDLEtBQXlCO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDekMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQTBCO1FBQ2pELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFFbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7WUFDMUIsSUFBSSxFQUFFLDZDQUFxQixDQUFDLFdBQVc7WUFDdkMsTUFBTSxFQUFFO2dCQUNOLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDaEIsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUNoQixDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDakI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sb0JBQW9CLENBQUMsS0FBOEI7UUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM5QyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRU8sY0FBYyxDQUFDLEtBQXdCO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBdlBELHNDQXVQQzs7Ozs7Ozs7OztBQ2pSRDtJQUtFLFlBQVksU0FBb0I7UUFIaEIsY0FBUyxHQUFHLHlCQUF5QixDQUFDLFNBQVMsQ0FBQztRQUN6RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFFTSxNQUFNLEtBQUssU0FBUztRQUN6QixNQUFNLENBQUMsc0JBQXNCLENBQUM7SUFDaEMsQ0FBQztDQUNGO0FBWkQsOERBWUM7Ozs7Ozs7Ozs7QUNaRDtJQUtFLFlBQVksU0FBb0I7UUFIaEIsY0FBUyxHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztRQUNqRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFFTSxNQUFNLEtBQUssU0FBUztRQUN6QixNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQVpELDhDQVlDOzs7Ozs7Ozs7O0FDVkQ7SUFLRSxZQUFZLEtBQVk7UUFIUixjQUFTLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDO1FBQ2xELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVNLE1BQU0sS0FBSyxTQUFTO1FBQ3pCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztDQUNGO0FBWkQsZ0RBWUM7Ozs7Ozs7Ozs7QUNaRDtJQUtFLFlBQVksV0FBb0I7UUFIaEIsY0FBUyxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztRQUNuRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO0lBQzdCLENBQUM7SUFFTSxNQUFNLEtBQUssU0FBUztRQUN6QixNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7Q0FDRjtBQVpELGtEQVlDOzs7Ozs7Ozs7O0FDWkQ7SUFLRSxZQUFZLGVBQWdDO1FBSDVCLGNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFDdkQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sTUFBTSxLQUFLLFNBQVM7UUFDekIsTUFBTSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDO0NBQ0Y7QUFaRCwwREFZQzs7Ozs7Ozs7OztBQ2REO0lBS0UsWUFBWSxTQUFvQjtRQUhoQixjQUFTLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1FBQ2pELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUVNLE1BQU0sS0FBSyxTQUFTO1FBQ3pCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQztDQUNGO0FBWkQsOENBWUM7Ozs7Ozs7Ozs7QUNaRDtJQU9FLFlBQVksVUFBaUIsRUFBRSxXQUFrQjtRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUUvQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBVyxDQUFDO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQy9CLENBQUM7SUFFTyxjQUFjO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNsQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUcsQ0FBQztJQUNILENBQUM7Q0FDRjtBQTlCRCxnQ0E4QkM7Ozs7Ozs7Ozs7QUNoQ0Qsd0NBQXVDO0FBQ3ZDLHVDQUFtQztBQUduQyx1Q0FBcUM7QUFJckMsK0NBQThDO0FBTzlDO0lBS0UsWUFBWSxZQUFrQztRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDbEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsNkJBQWEsQ0FBQyxVQUFVLENBQUM7UUFFdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sU0FBUyxDQUFDLEtBQVk7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sU0FBUyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUtELGtDQUFrQztJQUMzQixRQUFRLENBQUMsR0FBRyxJQUFXO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxXQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDO0lBQ0gsQ0FBQztJQUVNLFFBQVEsQ0FBQyxJQUFVO1FBQ3hCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFcEQsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDO0lBSU0sUUFBUSxDQUFDLElBQVksRUFBRSxRQUF3QixFQUFFLENBQVU7UUFDaEUsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxRQUFRLFlBQVksYUFBSyxDQUFDLENBQUMsQ0FBQztZQUM5RCxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNmLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBVSxDQUFDLEVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRU8scUJBQXFCLENBQzNCLFVBQWlCLEVBQ2pCLFFBQWUsRUFDZixjQUE4QjtRQUU5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBRW5FLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQTdFRCw0QkE2RUM7Ozs7Ozs7Ozs7QUN2RkQ7SUFBQTtRQUNTLFdBQU0sR0FBWSxFQUFFLENBQUM7SUFxQzlCLENBQUM7SUFuQ1EsTUFBTSxDQUFDLFFBQWtCO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSxXQUFXLENBQUMsS0FBWTtRQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLE9BQU8sQ0FBQyxLQUFZO1FBQ3pCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNaLFFBQVEsQ0FBQztZQUNYLENBQUM7WUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLGVBQWUsQ0FBQyxJQUFZO1FBQ2pDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztRQUVsRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FDRjtBQXRDRCxzQkFzQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDRDtJQUNlLGdCQUFnQixDQUFDLEtBQXVCOztZQUNuRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztZQUMxRCxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUVELE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNsQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFFcEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRS9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0UsQ0FBQztLQUFBO0lBRU8saUJBQWlCLENBQUMsS0FBdUI7UUFDL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQXVCO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQztnQkFDRSxLQUFLLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUM7WUFFRDtnQkFDRSxLQUFLLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLEVBQUUsQ0FBQztZQUNYLENBQUM7WUFFRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFsREQsMENBa0RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREQsNkNBTTJCO0FBQzNCLDZDQUFpRDtBQUNqRCxxREFBb0U7QUFFcEUsK0NBQThDO0FBRzlDLGtEQUF5RDtBQUN6RCxnREFBdUQ7QUFDdkQsdUNBQXFDO0FBQ3JDLDBDQUF5QztBQVd6QztJQUtFLFlBQVksWUFBOEM7UUFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUM7SUFDaEQsQ0FBQztJQUVZLElBQUk7O1lBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFFMUIsTUFBTSxnQkFBZ0IsR0FBdUIsRUFBRSxDQUFDO1lBRWhELE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUMzQyxzQkFBc0IsQ0FBQyxHQUFHLEdBQUcsNkJBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2RSxNQUFNLGNBQWMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ25DLGNBQWMsQ0FBQyxHQUFHLEdBQUcsNkJBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2RCxNQUFNLGNBQWMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ25DLGNBQWMsQ0FBQyxHQUFHLEdBQUcsNkJBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2RCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBRTlFLE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUMzQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzVFLENBQUM7WUFFRixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHNDQUF5QixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLDhCQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLDhCQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLCtCQUFrQixDQUFDLDZCQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzNGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksb0NBQXVCLENBQUMsaUNBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUFBO0lBRU0sT0FBTztRQUNaLDBCQUEwQjtJQUM1QixDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLE1BQU0sT0FBTyxHQUFHO1lBQ2QsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNqQixJQUFJLGFBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ2xCLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkIsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNwQixDQUFDO1FBQ0YsTUFBTSxRQUFRLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE9BQU8sRUFBRSwrQkFBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFbkUsTUFBTSxPQUFPLEdBQUc7WUFDZCxJQUFJLGFBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ25CLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDbEIsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNsQixJQUFJLGFBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ25CLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkIsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNwQixDQUFDO1FBQ0YsTUFBTSxRQUFRLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE9BQU8sRUFBRSwrQkFBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHlDQUFtQixFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0NBQ0Y7QUFqRUQsb0RBaUVDOzs7Ozs7Ozs7O0FDNUZELDZDQUFpRjtBQUVqRiwrQ0FBOEM7QUFFOUMsa0RBQXlEO0FBQ3pELDBDQUF5QztBQVF6QztJQWFFLFlBQVksWUFBd0M7UUFGNUMsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBRzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztRQUVwRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sSUFBSTtRQUNULElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQ25DLG9DQUF1QixDQUFDLFNBQVMsRUFDakMsSUFBSSxDQUFDLG9CQUFvQixDQUMxQixDQUFDO0lBQ0osQ0FBQztJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUN0QyxvQ0FBdUIsQ0FBQyxTQUFTLEVBQ2pDLElBQUksQ0FBQyxvQkFBb0IsQ0FDMUIsQ0FBQztRQUNGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxLQUE4QjtRQUN6RCxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QixLQUFLLGlDQUFlLENBQUMsUUFBUTtnQkFDM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLGlCQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxLQUFLLENBQUM7WUFFUixLQUFLLGlDQUFlLENBQUMsUUFBUTtnQkFDM0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzFCLEtBQUssQ0FBQztZQUVSO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNqRCxDQUFDO0lBQ0gsQ0FBQztJQUVPLG1CQUFtQixDQUFDLE1BQWU7UUFDekMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxnQ0FBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTyxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFdBQVcsQ0FDeEMsSUFBSSxDQUFDLGlCQUFpQixFQUN0Qiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQ3JDLENBQUM7SUFDSixDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLDZCQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sQ0FBQyxHQUFHLDZCQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sV0FBVyxHQUFHLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLDZCQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUU1QyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGdDQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLGtCQUFrQixJQUFJLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDeEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLGtCQUFrQixJQUFJLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztRQUMvRCxDQUFDO0lBQ0gsQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixhQUFhLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDOUMsQ0FBQzs7QUE5RXVCLDRCQUFhLEdBQUcsNkJBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUTtJQUMxRSw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPO0lBQ25DLENBQUM7SUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDO0FBRWMsaUNBQWtCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7QUFOM0Qsd0NBZ0ZDOzs7Ozs7Ozs7O0FDOUZELHVDQUFtQztBQUNuQyx1Q0FBcUM7QUFDckMsMENBQXlDO0FBRXpDO0lBQ1MsWUFBWSxDQUFDLFFBQWlCLEVBQUUsUUFBaUI7UUFDdEQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSSxXQUFXLENBQUMsY0FBdUIsRUFBRSxlQUF3QjtRQUNsRSxNQUFNLHFCQUFxQixHQUFHLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUUvRCxJQUFJLE1BQU0sR0FBWSxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsTUFBTSxvQkFBb0IsR0FBVyxFQUFFLENBQUM7UUFDeEMsTUFBTSx1QkFBdUIsR0FBRyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzNELE1BQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUNuQix1QkFBdUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsRUFDakUsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQzNCLENBQUM7WUFDRixvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLG9CQUFvQixDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDckIsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWpDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksV0FBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNoRSxDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLFdBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDaEUsQ0FBQztnQkFDSCxDQUFDO2dCQUNELEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDVCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFFRCxNQUFNLHVCQUF1QixHQUFZLEVBQUUsQ0FBQztRQUM1Qyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUMxQyxFQUFFLENBQUMsQ0FDRCxDQUFDLGFBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FDN0YsQ0FBQyxDQUFDLENBQUM7Z0JBQ0QsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFDSCxDQUFDO1FBRUQsc0NBQXNDO1FBQ3RDLE1BQU0sYUFBYSxHQUFHLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksYUFBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1RixNQUFNLENBQUMsSUFBSSxpQkFBTyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVPLFVBQVUsQ0FBQyxFQUFTLEVBQUUsRUFBUyxFQUFFLElBQVU7UUFDakQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXBDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU8sb0JBQW9CLENBQUMsS0FBVyxFQUFFLEtBQVc7UUFDbkQsTUFBTSxVQUFVLEdBQUcsYUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RCxNQUFNLFVBQVUsR0FBRyxhQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXRELE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFMUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxhQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7UUFFOUQsTUFBTSxDQUFDLElBQUksYUFBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztDQUNGO0FBNUZELHdDQTRGQzs7Ozs7Ozs7OztBQ2hHRCwrQ0FBOEM7QUFDOUMscUNBQTBCO0FBSTFCLG1EQUF1RDtBQUN2RCwyREFBdUU7QUFDdkUseURBQW1FO0FBQ25FLHNEQUE2RDtBQUM3RCx1REFBK0Q7QUFDL0QsdURBQStEO0FBQy9ELHNEQUE2RDtBQUM3RCxtREFBdUQ7QUFDdkQsdURBQStEO0FBTy9ELGlEQUF1RDtBQUV2RCx3QkFBb0Q7QUFDcEQsd0JBQXVEO0FBQ3ZELHdCQUF1RDtBQUN2RCx5REFBbUU7QUFXbkU7SUFnQkUsWUFBWSxZQUFzQztRQUxqQyxlQUFVLEdBQWMsRUFBRSxDQUFDO1FBTTFDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDO1FBRWxELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sSUFBSTtRQUNULE1BQU0sc0JBQXNCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyw2QkFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDL0YsRUFBRSxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFFRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsc0JBQXNCLENBQUM7UUFFckQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksbURBQXdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0sT0FBTztRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8sV0FBVyxDQUFDLEtBQWlCO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxPQUFPLENBQUMsS0FBaUI7UUFDL0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksK0JBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRU8sc0JBQXNCO1FBQzVCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsQ0FBQztZQUM1QyxTQUFTLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtZQUN0Qyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsd0JBQXdCO1lBQ3ZELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDdEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8seUJBQXlCO1FBQy9CLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQztZQUNsRCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDdEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU8sMEJBQTBCO1FBQ2hDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQztZQUNwRCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyw0QkFBNEI7UUFDbEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksK0NBQXNCLENBQUM7WUFDdkQsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtZQUNuRCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFHLENBQUMsa0JBQWtCLENBQUM7WUFDaEUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLHdCQUF3QixFQUFFLElBQUksQ0FBQyx3QkFBd0I7WUFDdkQsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3RDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTywwQkFBMEI7UUFDaEMsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLDJDQUFvQixDQUFDO1lBQ3BELGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUN0QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyx5QkFBeUI7UUFDL0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLENBQUM7WUFDakQsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsd0JBQXdCO1lBQ3ZELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU8sMEJBQTBCO1FBQ2hDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQztZQUNwRCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVPLHNCQUFzQjtRQUM1QixNQUFNLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLENBQUM7WUFDNUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUN0QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyw0QkFBNEI7UUFDbEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksK0NBQXNCLENBQUM7WUFDdkQsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsU0FBRyxDQUFDLGtCQUFrQixDQUFDO1NBQ2pFLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRjtBQTNMRCxvQ0EyTEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlORCw2Q0FNMkI7QUFDM0IsNkNBQWlEO0FBRWpELCtDQUE4QztBQUk5QyxvREFBd0Y7QUFFeEYsb0RBQXdGO0FBRXhGLGtEQUF5RDtBQU96RDtJQXFCRSxZQUFZLFlBQThDO1FBQ3hELElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUM7UUFFcEQsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLElBQUk7UUFDVCxNQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUVELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFL0QsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25FLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLEdBQWtCLGFBQWEsQ0FBQztRQUVsRCxJQUFJLENBQUMsaUNBQWlDLENBQUMsZ0JBQWdCLENBQ3JELE9BQU8sRUFDUCxJQUFJLENBQUMsMkJBQTJCLENBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSxPQUFPO1FBQ1osMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXZDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxtQkFBbUIsQ0FDeEQsT0FBTyxFQUNQLElBQUksQ0FBQywyQkFBMkIsQ0FDakMsQ0FBQztRQUNGLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXJDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRCxvQ0FBb0M7SUFDNUIsNEJBQTRCO1FBQ2xDLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxTQUFTLEdBQUcsMkJBQTJCLENBQUM7UUFFL0UsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUkscUNBQWlCLENBQUMsNkJBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUM7UUFFekQsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLCtCQUErQixHQUFHLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVPLDJCQUEyQjtRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFYSwrQkFBK0I7O1lBQzNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLENBQUM7WUFDVCxDQUFDO1lBRUQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQztZQUNqRSxNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFN0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxzQ0FBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUFBO0lBQ0QsYUFBYTtJQUViLDZCQUE2QjtJQUNyQixxQkFBcUI7UUFDM0IsSUFBSSxDQUFDLDBCQUEwQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztRQUVqRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEdBQUcsNkJBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUVyRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU8sb0JBQW9CO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVhLHdCQUF3Qjs7WUFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQztZQUNULENBQUM7WUFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksK0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHlCQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELENBQUM7S0FBQTtJQUNELGFBQWE7SUFFYiw0QkFBNEI7SUFDcEIsb0JBQW9CO1FBQzFCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFFL0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLHFDQUFpQixDQUFDLDZCQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7UUFFekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVhLHVCQUF1Qjs7WUFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNLENBQUM7WUFDVCxDQUFDO1lBRUQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7WUFDekQsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRTdFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksOEJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHlCQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELENBQUM7S0FBQTtJQUNELGFBQWE7SUFFYiw4QkFBOEI7SUFDdEIsc0JBQXNCO1FBQzVCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUNqRCxLQUFLLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1FBQ25DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUQsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlELG9CQUFvQixDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUN4RCxvQkFBb0IsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1FBRXhDLE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsMkJBQTJCLENBQUM7UUFDM0Qsa0JBQWtCLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUV0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLHlCQUF5QjtRQUMvQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQzNDLE1BQU0sV0FBVyxHQUF3QztZQUN2RCxRQUFRLEVBQUUsaUNBQWUsQ0FBQyxRQUFRO1lBQ2xDLFFBQVEsRUFBRSxpQ0FBZSxDQUFDLFFBQVE7U0FDbkMsQ0FBQztRQUVGLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLG9DQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSx5QkFBVyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsYUFBYTtJQUViLDRCQUE0QjtJQUNwQixvQkFBb0I7UUFDMUIsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUUvRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUkscUNBQWlCLENBQUMsNkJBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztRQUV6QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRU8sbUJBQW1CO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRWEsdUJBQXVCOztZQUNuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU0sQ0FBQztZQUNULENBQUM7WUFFRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztZQUN6RCxNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFN0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSw4QkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUFBO0NBRUY7QUF4UEQsNENBd1BDOzs7Ozs7Ozs7O0FDL1FELHVDQUFxQztBQUVyQyx3QkFBa0U7QUFFbEUsTUFBTSxVQUFVLEdBQUc7SUFDakIsTUFBTSxFQUFFLHFCQUFxQjtJQUM3QixNQUFNLEVBQUUsNkJBQTZCO0lBQ3JDLE9BQU8sRUFBRSw4QkFBOEI7SUFDdkMsS0FBSyxFQUFFLDRCQUE0QjtJQUNuQyxjQUFjLEVBQUUscUNBQXFDO0NBQ3RELENBQUM7QUFFRix1QkFBK0IsU0FBUSxXQUFXO0lBWWhEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFaRixrQkFBYSxHQUFHLElBQUksQ0FBQztRQWMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxNQUFNLEtBQUssa0JBQWtCO1FBQ2xDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxjQUFjLENBQUM7SUFDckQsQ0FBQztJQUVELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsTUFBTSxDQUFDLGFBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBWTtRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsSUFBVyxZQUFZO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxRQUFRO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFFTyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXJFLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFFdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUV6QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sbUJBQW1CO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVPLFdBQVc7UUFDakIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRjtBQXpIRCw4Q0F5SEM7QUFFRCxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixFQUFFLGlCQUFpQixDQUFDLENBQUM7Ozs7Ozs7QUN6SXBFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUN6QkE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBZ0Qsb0JBQW9CLGFBQWEsY0FBYyxxQ0FBcUMsNEJBQTRCLHdCQUF3QixlQUFlLGtCQUFrQiw0QkFBNEIsZ0JBQWdCLEVBQUUsaUNBQWlDLG1DQUFtQyx3QkFBd0IsRUFBRSxtQ0FBbUMsb0JBQW9CLEVBQUUsMENBQTBDLGtCQUFrQixrQ0FBa0Msb0JBQW9CLEVBQUUsaURBQWlELHVCQUF1QixFQUFFOztBQUU1bEI7Ozs7Ozs7Ozs7QUNQQSx3QkFBa0U7QUFJbEUsTUFBTSxVQUFVLEdBQUc7SUFDakIsTUFBTSxFQUFFLHFCQUFxQjtJQUM3QixNQUFNLEVBQUUsNkJBQTZCO0lBQ3JDLE9BQU8sRUFBRSw4QkFBOEI7SUFDdkMsS0FBSyxFQUFFLDRCQUE0QjtJQUNuQyxXQUFXLEVBQUUsa0NBQWtDO0lBQy9DLHVCQUF1QixFQUFFLDhDQUE4QztJQUN2RSxjQUFjLEVBQUUsc0NBQXNDO0lBQ3RELFlBQVksRUFBRSxtQ0FBbUM7SUFDakQsY0FBYyxFQUFFLHFDQUFxQztDQUN0RCxDQUFDO0FBRUYsdUJBQStCLFNBQVEsV0FBVztJQXNCaEQsWUFBWSxlQUF5QjtRQUNuQyxLQUFLLEVBQUUsQ0FBQztRQUhGLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBSzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFFeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSxNQUFNLEtBQUssa0JBQWtCO1FBQ2xDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxjQUFjLENBQUM7SUFDckQsQ0FBQztJQUVELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFXLFlBQVk7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQVcsZUFBZTtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFN0UsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNuRCxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVNLG9CQUFvQjtRQUN6QixJQUFJLENBQUMseUJBQXlCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ25ELE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLFFBQVE7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRW5DLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sc0JBQXNCO1FBQzVCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNoRSxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWxDLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDbEUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM3RCxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFNBQVMsQ0FBQztRQUUzQyxJQUFJLENBQUMsV0FBVyxDQUFtQixJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVPLHVCQUF1QjtRQUM3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9DLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVPLGVBQWU7UUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7WUFFaEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbEIsa0NBQWtDO2dCQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBUyxDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDO1lBRUYsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDSCxDQUFDO0lBRU8sdUJBQXVCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN4QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU8sd0JBQXdCO1FBQzlCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVPLHdCQUF3QjtRQUM5QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztRQUMzQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFFN0MsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUVELEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztRQUM1QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUV2QyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRXpDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU8sV0FBVztRQUNqQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQWE7UUFDcEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsVUFBVSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRU8scUJBQXFCLENBQUMsV0FBbUI7UUFDL0MsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoRCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDO1FBRXhCLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0IsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU8sc0JBQXNCLENBQUMsS0FBaUI7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBbUIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxXQUFXLENBQUMsS0FBdUI7UUFDekMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFFRCxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBblJELDhDQW1SQztBQUVELGNBQWMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzs7Ozs7OztBQ3JTcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3pCQTtBQUNBOzs7QUFHQTtBQUNBLCtDQUFnRCxvQkFBb0IsYUFBYSxjQUFjLHFDQUFxQyw0QkFBNEIsd0JBQXdCLGVBQWUsa0JBQWtCLDRCQUE0QixnQkFBZ0IsRUFBRSxtQ0FBbUMsb0JBQW9CLEVBQUUsaUNBQWlDLG1DQUFtQyx3QkFBd0IsRUFBRSxtREFBbUQsa0JBQWtCLHdCQUF3QixtQ0FBbUMsb0JBQW9CLEVBQUUseURBQXlELHFCQUFxQix3QkFBd0IsbUJBQW1CLEVBQUUsdURBQXVELHNCQUFzQix3QkFBd0IsRUFBRSx3Q0FBd0MsbUJBQW1CLG1CQUFtQixzQkFBc0IsaUJBQWlCLEVBQUUsMkNBQTJDLDRCQUE0QixFQUFFLDBDQUEwQyxrQkFBa0Isa0NBQWtDLG9CQUFvQixFQUFFLGlEQUFpRCx1QkFBdUIsRUFBRTs7QUFFcHBDOzs7Ozs7Ozs7O0FDUEEsdUNBQXFDO0FBRXJDO0lBSUUsWUFBWSxNQUF5QjtRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFTSxzQkFBc0IsQ0FBQyxLQUFpQjtRQUM3QyxNQUFNLENBQUMsSUFBSSxhQUFLLENBQ2QsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUMxQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQzFDLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUF4QkQsNERBd0JDOzs7Ozs7Ozs7O0FDMUJELHdDQUFxQztBQUNyQyx1Q0FBbUM7QUFFbkMsMENBQXlDO0FBQ3pDLCtDQUE4QztBQUM5QyxxQ0FBMEI7QUFRMUIsa0RBQXlEO0FBQ3pELDZDQUFpRDtBQUNqRCxzREFBaUU7QUFDakUscURBQW9FO0FBWXBFO0lBY0UsWUFBWSxZQUFnRDtRQUwzQyxjQUFTLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBTTFELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUM7UUFDbEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDOUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztRQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBRXBELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLElBQUk7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxXQUFXLENBQUMsS0FBWTtRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUU5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDO0lBRU8sV0FBVyxDQUFDLEtBQWlCO1FBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLDZCQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQXNCO1FBQ3pDLE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUV6QyxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGNBQWMsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXJCLElBQUksQ0FBQztnQkFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLGtCQUFrQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckMsQ0FBQztZQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTyxzQkFBc0I7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFdBQUksQ0FBQyxFQUFFLEVBQUUsNkJBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLFNBQVM7UUFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsNkJBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDNUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsNkJBQWEsQ0FBQyxnQkFBZ0IsV0FBVyxDQUFDLENBQUM7UUFDM0YsQ0FBQztRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxHQUFHLDZCQUFhLENBQUMscUJBQXFCLENBQUM7UUFDekUsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTyxzQkFBc0I7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSx5QkFBVyxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHlDQUFtQixFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sU0FBUyxDQUFDLEtBQW9CO1FBQ3BDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEtBQUssRUFBRTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztnQkFDOUIsS0FBSyxDQUFDO1lBRVI7Z0JBQ0UsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMseUNBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsaUNBQWUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMseUNBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFGLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsaUNBQWUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Q0FDRjtBQTlIRCx3REE4SEM7Ozs7Ozs7Ozs7QUN6SkQsdUNBQXFDO0FBT3JDLDZDQUFpRDtBQUNqRCxxREFBb0U7QUFTcEU7SUFVRSxZQUFZLFlBQTZDO1FBRmpELGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxZQUFZLENBQUMsd0JBQXdCLENBQUM7UUFFdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLElBQUk7UUFDVCwwQ0FBMEM7SUFDNUMsQ0FBQztJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFTSxlQUFlLENBQUMsS0FBaUI7UUFDdEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBRS9CLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0QyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxRQUFRLENBQUM7Z0JBQ1gsQ0FBQztnQkFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsS0FBSyxDQUFDO1lBQ1IsQ0FBQztRQUNILENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0VBQW9FLENBQUMsQ0FBQztRQUNyRixDQUFDO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU8sb0JBQW9CO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTyxXQUFXLENBQUMsS0FBaUI7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRSxNQUFNLGdCQUFnQixHQUFHLGFBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVuRSxHQUFHLENBQUMsQ0FBQyxNQUFNLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0RCxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSx5QkFBVyxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHlDQUFtQixFQUFFLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRU8sU0FBUyxDQUFDLE1BQWtCO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxVQUFVLENBQUMsTUFBa0I7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sb0JBQW9CO1FBQzFCLE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBaUIsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQWxIRCxrREFrSEM7Ozs7Ozs7Ozs7QUNwSUQsd0NBQXVDO0FBQ3ZDLHdDQUFxQztBQUNyQyxnREFBdUQ7QUFDdkQsK0NBQThDO0FBRTlDLHFDQUEwQjtBQUsxQix1REFBOEU7QUFDOUUsaURBQWtFO0FBQ2xFLHNEQUE0RTtBQUM1RSw2Q0FBaUQ7QUFDakQscURBQW9FO0FBUXBFO0lBTUUsWUFBWSxZQUE4QztRQUN4RCxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUVsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyx5Q0FBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQywyQ0FBb0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQywrQkFBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMseUNBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQ3RDLDJDQUFvQixDQUFDLFNBQVMsRUFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO1FBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQywrQkFBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQTBCO1FBQ2pELEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXJCLEVBQUUsQ0FBQyxDQUFDLENBQUMsNkJBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUFDLGVBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSx5Q0FBbUIsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQTJCO1FBQ25ELEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsNkJBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUUvQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHlCQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUkseUNBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxXQUFXLENBQUMsS0FBcUI7UUFDdkMsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBRWpELEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLE1BQU0sQ0FBQztZQUNULENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRXRCLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNSLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNWLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDUixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBRUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDLENBQUM7UUFDdEQsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBN0ZELG9EQTZGQzs7Ozs7Ozs7OztBQ2xIRCxpREFBdUQ7QUFDdkQsNkNBQWlEO0FBQ2pELHFEQUFvRTtBQUdwRSwrQ0FBOEM7QUFPOUM7SUFNRSxZQUFZLFlBQThDO1FBSGxELCtCQUEwQixHQUFHLENBQUMsQ0FBQztRQUlyQyxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUM7UUFFcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sSUFBSTtRQUNULElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsK0JBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQywrQkFBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVPLFdBQVcsQ0FBQyxLQUFxQjtRQUN2QyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzdDLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1FBRW5FLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLGdCQUFnQixDQUFDO1FBRW5ELEVBQUUsQ0FBQyxDQUNELENBQUMsZUFBZTtZQUNoQixnQkFBZ0IsR0FBRywwQkFBMEIsR0FBRyw2QkFBYSxDQUFDLG1CQUNoRSxDQUFDLENBQUMsQ0FBQztZQUNELE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2RSxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVyRCxJQUFJLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNuRCxDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBRUQsNEJBQTRCO1lBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSx5Q0FBbUIsRUFBRSxDQUFDLENBQUM7UUFDaEUsQ0FBQztJQUNILENBQUM7Q0FDRjtBQWxERCxvREFrREM7Ozs7Ozs7Ozs7QUMvREQsK0NBQThDO0FBSTlDLGtEQUF5RDtBQUN6RCw2Q0FBaUQ7QUFDakQscURBQW9FO0FBT3BFO0lBTUUsWUFBWSxZQUE2QztRQUZqRCwyQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFHakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLElBQUk7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLGlDQUFlLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRU0sT0FBTztRQUNaLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsaUNBQWUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFTyxZQUFZLENBQUMsS0FBc0I7UUFDekMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFcEMsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3pDLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1FBQ25FLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBRTNELElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUU3RCxFQUFFLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixJQUFJLDBCQUEwQixLQUFLLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUNyRixNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsc0JBQXNCLEdBQUcsNkJBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDbEYsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyw4QkFBOEIsQ0FBQyxLQUFzQixFQUFFLFNBQWlCO1FBQzlFLElBQUksQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ2hELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUVPLDBCQUEwQjtRQUNoQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDO1FBQ2xELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUM7UUFFcEQsSUFBSSxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSx5Q0FBbUIsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGO0FBM0RELGtEQTJEQzs7Ozs7Ozs7OztBQ25FRCxxREFBc0U7QUFJdEUscURBQW9FO0FBY3BFO0lBT0UsWUFBWSxZQUEwQztRQUw5Qyx3QkFBbUIsR0FBeUIsRUFBRSxDQUFDO1FBTXJELElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztRQUN0RSxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUM7UUFFcEQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVNLElBQUk7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLHlDQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRU0sT0FBTztRQUNaLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMseUNBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFTSxxQkFBcUIsQ0FBQyxLQUEwQjtRQUNyRCxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ3pELGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRTVELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxNQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RSxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUU5RSxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQzFELFNBQVMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMxRCxDQUFDO1FBRUYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsR0FBRyxhQUFhLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3ZFLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxhQUFhO1FBQ25CLE1BQU0sVUFBVSxHQUFnQixFQUFFLENBQUM7UUFFbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNqQyxVQUFVLENBQUMsSUFBSSxDQUFDO3dCQUNkLElBQUk7d0JBQ0osS0FBSztxQkFDTixDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRU8seUJBQXlCLENBQUMsVUFBdUI7UUFDdkQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQ25CLFNBQVMsQ0FBQyxFQUFFLENBQ1YsSUFBSSx1Q0FBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDdEQsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDdEMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLHdCQUF3QixFQUFFLElBQUksQ0FBQyx3QkFBd0I7U0FDeEQsQ0FBQyxDQUNMLENBQUM7SUFDSixDQUFDO0lBRU8sc0JBQXNCO1FBQzVCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUUxQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FDcEMsU0FBUyxDQUFDLEVBQUUsQ0FDVixXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMvRCxDQUFDO0lBQ0osQ0FBQztJQUVPLDBCQUEwQixDQUFDLFVBQXVCO1FBQ3hELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUN0QixTQUFTLENBQUMsRUFBRSxDQUNWLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FDNUIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsS0FBSyxDQUN0RixDQUNKLENBQUM7SUFDSixDQUFDO0lBRU8sY0FBYztRQUNwQixNQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0Y7QUE3RkQsNENBNkZDOzs7Ozs7Ozs7O0FDOUdELHVEQUE4RTtBQUM5RSxpREFBa0U7QUFDbEUsc0RBQTRFO0FBQzVFLGtEQUF5RDtBQUV6RCx3QkFBK0M7QUFFL0MsTUFBTSxvQkFBb0IsR0FBRyx3QkFBd0IsQ0FBQztBQUN0RCxNQUFNLGtCQUFrQixHQUFHLGlDQUFpQyxDQUFDO0FBUTdEO0lBUUUsWUFDRSxJQUFVLEVBQ1YsS0FBWSxFQUNaLFlBQTRDO1FBRTVDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUM7UUFDbEUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztRQUN0RSxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUM7UUFFcEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU0sTUFBTTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sY0FBYztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUM5RSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQVcsT0FBTyxDQUFDLFNBQWtCO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0gsQ0FBQztJQUVPLElBQUk7UUFDVixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLEVBQUUsQ0FBQyxDQUNELElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUNsRSxDQUFDLENBQUMsQ0FBQztZQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sV0FBVztRQUNqQixNQUFNLEtBQUssR0FBRyxJQUFJLGlDQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUkseUNBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVsRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU8sV0FBVyxDQUFDLEtBQWlCO1FBQ25DLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSwyQ0FBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDRjtBQTVGRCxnREE0RkM7Ozs7Ozs7QUNsSEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3pCQTtBQUNBOzs7QUFHQTtBQUNBLGtEQUFtRCw0QkFBNEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIscUNBQXFDLHNCQUFzQixFQUFFLDBDQUEwQywwQkFBMEIsRUFBRSxvQ0FBb0Msd0JBQXdCLEVBQUUsc0NBQXNDLDhCQUE4QixFQUFFOztBQUU5WTs7Ozs7Ozs7OztBQ0hBLDZDQUFvRTtBQUNwRSw2Q0FBb0U7QUFTcEU7SUFLRSxZQUFZLFlBQThDO1FBQ3hELElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVNLElBQUk7UUFDVCxNQUFNLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNsRixFQUFFLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUVELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztRQUVyRCxNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLENBQUM7WUFDaEMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQUM7UUFDSCxNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLENBQUM7WUFDaEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sT0FBTztRQUNaLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFsQ0Qsb0RBa0NDOzs7Ozs7Ozs7O0FDL0NELDZDQUFpRDtBQUNqRCxxREFBb0U7QUFFcEUscUNBQTBCO0FBVTFCLGdCQUF3QixTQUFRLFdBQVc7SUFLekMsWUFBWSxZQUFvQztRQUM5QyxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUV0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxPQUFPO1FBQ2IsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFFbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxTQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUV4RSxNQUFNLHdCQUF3QixHQUFHLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRXJFLElBQUksQ0FBQztZQUNILE1BQU0saUJBQWlCLEdBQXNCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEUsWUFBWSxDQUFDLHNCQUFzQixDQUFvQixpQkFBaUIsQ0FBQyxDQUFDO1FBQzVFLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2YsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDOUQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHlCQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUkseUNBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDRjtBQWhERCxnQ0FnREM7QUFFRCxjQUFjLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDaEVyRCxxQ0FBMEI7QUFPMUIsZ0JBQXdCLFNBQVEsV0FBVztJQUl6QyxZQUFZLFlBQW9DO1FBQzlDLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFFdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sb0JBQW9CO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sT0FBTztRQUNiLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFNBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sa0JBQWtCLEdBQUcsWUFBWSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFL0QsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNGO0FBL0JELGdDQStCQztBQUVELGNBQWMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUN4Q3JELHdCQUF5RDtBQUl6RCxtQkFBMkIsU0FBUSxXQUFXO0lBSTVDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU0sb0JBQW9CO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sVUFBVSxDQUFDLFNBQW9CO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTyxjQUFjO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxhQUFhO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDRjtBQXZERCxzQ0F1REM7QUFFRCxjQUFjLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLGFBQWEsQ0FBQyxDQUFDOzs7Ozs7O0FDN0QzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDekJBO0FBQ0E7OztBQUdBO0FBQ0EsbUNBQW9DLHVCQUF1QixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQixlQUFlLGVBQWUsNEJBQTRCLDBDQUEwQyx5QkFBeUIsRUFBRSx1QkFBdUIsaUJBQWlCLHdCQUF3QixFQUFFOztBQUVwVDs7Ozs7Ozs7OztBQ1BBLHFEQUFtRjtBQUVuRix3QkFBZ0MsU0FBUSxXQUFXO0lBR2pEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO1FBRTlDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLG9CQUFvQjtRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVPLGFBQWE7UUFDbkIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQTNCRCxnREEyQkM7QUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzs7Ozs7O0FDL0I1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDekJBO0FBQ0E7OztBQUdBO0FBQ0EsdURBQXdELGVBQWUsRUFBRSxtQ0FBbUMsb0JBQW9CLFdBQVcsWUFBWSxlQUFlLGlCQUFpQixrQkFBa0IsMkJBQTJCLGVBQWUsMENBQTBDLEVBQUUsMkNBQTJDLGlCQUFpQixFQUFFLDBCQUEwQixvQkFBb0IsYUFBYSxjQUFjLGVBQWUsaURBQWlELDhCQUE4Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix3QkFBd0Isa0NBQWtDLDRDQUE0QyxFQUFFLGtDQUFrQyxpREFBaUQsRUFBRSxpQ0FBaUMsY0FBYyxFQUFFOztBQUUveUI7Ozs7Ozs7Ozs7QUNIQSw2Q0FBaUQ7QUFDakQscURBQW9FO0FBWXBFO0lBS0UsWUFBWSxZQUFnRDtRQUMxRCxJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztJQUNoRCxDQUFDO0lBRU0sSUFBSTtRQUNULHFCQUFxQjtJQUN2QixDQUFDO0lBRU0sT0FBTztRQUNaLHFCQUFxQjtJQUN2QixDQUFDO0lBRU0sWUFBWSxDQUFDLEtBQVk7UUFDOUIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7YUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRTlCLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1lBRTFELE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxNQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFFdEMsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELE1BQU0sbUJBQW1CLEdBQUcsYUFBYSxLQUFLLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxNQUFNLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTdELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUNwRCxjQUFjLEVBQ2QsYUFBYSxDQUNkLENBQUM7UUFFRixFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7WUFFcEQsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHlDQUFtQixFQUFFLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHlCQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRjtBQTNERCx3REEyREMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA5MWQ5NWQ0OWU1YThkN2Q3MmY5IiwiaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnY29tbW9uL0NPTE9SUyc7XHJcbmltcG9ydCB7IExpbmVQcm9wZXJ0aWVzIH0gZnJvbSAnY29tbW9uL0xpbmVQcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuY29uc3QgY29uZmlndXJhdGlvbiA9IHtcclxuICBuZXdMaW5lUHJldmlld1Byb3BlcnRpZXM6IG5ldyBMaW5lUHJvcGVydGllcyhDT0xPUlMuQkxVRSwgMiksXHJcbiAgbmV3UG9seWdvbkxpbmVQcm9wZXJ0aWVzOiBuZXcgTGluZVByb3BlcnRpZXMoQ09MT1JTLlJFRCwgMSksXHJcbiAgcG9seWdvbkxpbmVQcm9wZXJ0aWVzOiBMaW5lUHJvcGVydGllcy5nZXREZWZhdWx0KCksXHJcbiAgYXBwbGljYXRpb25VSUNvbnRhaW5lcklEOiAnYXBwbGljYXRpb24tdWknLFxyXG4gIGhpdFRvbGVyYW5jZTogMTAsXHJcbiAgbWluUG9seWdvblBvaW50czogMyxcclxuICBkb3VibGVDbGlja01heERlbGF5OiA1MDAsXHJcbiAgZGlzcGxheVBhdGhHaG9zdFdoZW5EcmFnZ2luZzogZmFsc2UsXHJcbiAgZXBzaWxvbjogMC4xLFxyXG4gIGxpbmVEZXZpYXRpb25BbGxvd2FuY2VJbkRlZ3JlZXM6IDIwLFxyXG4gIGNhbnZhc0ZvbnQ6ICczMHB0IHNlcmlmJyxcclxuICBsaW5lQ29uZGl0aW9uTGFiZWxPZmZzZXQ6IG5ldyBQb2ludCg1LCAwKSxcclxuICByZW1vdmVDb25kaXRpb25zV2hlbkluc2VydGluZ1BvaW50czogdHJ1ZSxcclxuICBwcmVzZXRCYWNrZ3JvdW5kVGV4dHVyZXM6IFtcclxuICAgICdpbWFnZXMvYmFja2dyb3VuZHMvRnVubnktQ2F0LUZhY2UuanBnJyxcclxuICAgICdpbWFnZXMvYmFja2dyb3VuZHMvaHFkZWZhdWx0LmpwZydcclxuICBdLFxyXG4gIHByZXNldEhlaWdodE1hcHM6IFsnaW1hZ2VzL2hlaWdodC1tYXBzL2JyaWNrX2hlaWdodG1hcC5wbmcnXSxcclxuICBwcmVzZXROb3JtYWxNYXBzOiBbJ2ltYWdlcy9ub3JtYWwtbWFwcy9icmlja19ub3JtYWxtYXAucG5nJywgJ2ltYWdlcy9ub3JtYWwtbWFwcy9ub3JtYWxfbWFwLmpwZyddLFxyXG4gIHByZXNldExpZ2h0Q29sb3I6IENPTE9SUy5XSElURSxcclxuICBjaXJjbGluZ0xpZ2h0OiB7XHJcbiAgICBsYXBUaW1lOiAxMCAqIDEwMDAsXHJcbiAgICBpbnRlcnZhbDogNTAsXHJcbiAgICBoZWlnaHQ6IDUwLFxyXG4gICAgZGlzdGFuY2U6IDUwXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgY29uZmlndXJhdGlvbiB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb25maWd1cmF0aW9uLnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlckV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkID0gbnVsbDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gUmVuZGVyRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnUmVuZGVyRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvUmVuZGVyRXZlbnQudHMiLCJ0eXBlIE1vdmVDYWxsYmFjayA9ICgpID0+IHZvaWQ7XHJcblxyXG5jb25zdCBFUFNJTE9OID0gMC4xO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuICBwdWJsaWMgbW92ZUNhbGxiYWNrOiBNb3ZlQ2FsbGJhY2sgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3k6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5feTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0geDtcclxuICAgIHRoaXMuX3kgPSB5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhZGQocDE6IFBvaW50LCBwMjogUG9pbnQpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHAxLnggKyBwMi54LCBwMS55ICsgcDIueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHN1YnRyYWN0KHAxOiBQb2ludCwgcDI6IFBvaW50KTogUG9pbnQge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludChwMS54IC0gcDIueCwgcDEueSAtIHAyLnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXREaXN0YW5jZUJldHdlZW4ocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChQb2ludC5nZXREaXN0YW5jZUJldHdlZW5TcXVhcmVkKHAxLCBwMikpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXREaXN0YW5jZUJldHdlZW5TcXVhcmVkKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnBvdyhwMS54IC0gcDIueCwgMikgKyBNYXRoLnBvdyhwMS55IC0gcDIueSwgMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEFuZ2xlKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIGxldCBhbmdsZSA9IChNYXRoLmF0YW4yKHAyLnkgLSBwMS55LCBwMi54IC0gcDEueCkpICogMTgwIC8gTWF0aC5QSTtcclxuXHJcbiAgICBpZiAoYW5nbGUgPCAwKSB7XHJcbiAgICAgIGFuZ2xlICs9IDM2MDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYW5nbGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRvdFByb2R1Y3QocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICAgIHJldHVybiBwMS54ICogcDIueCArIHAxLnkgKiBwMi55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcm9zc1Byb2R1Y3QocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICAgIHJldHVybiBwMS54ICogcDIueSAtIHAxLnkgKiBwMi54O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBlcHNpbG9uRXF1YWxzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgICByZXR1cm4gUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuKHAxLCBwMikgPD0gRVBTSUxPTjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3ZlVG8ocG9pbnQ6IFBvaW50KTogdm9pZDtcclxuICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcclxuICBwdWJsaWMgbW92ZVRvKHBvaW50T3JYOiBQb2ludCB8IG51bWJlciwgeT86IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiBwb2ludE9yWCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgaWYgKHkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigneCBpcyBkZWZpbmVkLCBidXQgeSBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5tb3ZlVG9Db29yZGluYXRlcyhwb2ludE9yWCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubW92ZVRvUG9pbnQocG9pbnRPclgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVxdWFscyhwb2ludDogUG9pbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnggPT09IHBvaW50LnggJiYgdGhpcy55ID09PSBwb2ludC55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERpc3RhbmNlVG8ocG9pbnQ6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBQb2ludC5nZXREaXN0YW5jZUJldHdlZW4odGhpcywgcG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERpc3RhbmNlU3F1YXJlZFRvKHBvaW50OiBQb2ludCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuU3F1YXJlZCh0aGlzLCBwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZVRvUG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb3ZlVG9Db29yZGluYXRlcyhwb2ludC54LCBwb2ludC55KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZVRvQ29vcmRpbmF0ZXMoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgdGhpcy5feSA9IHk7XHJcblxyXG4gICAgaWYgKHRoaXMubW92ZUNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMubW92ZUNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9Qb2ludC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTeW5jQ29tcG9uZW50c0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkID0gbnVsbDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gU3luY0NvbXBvbmVudHNFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdTeW5jQ29tcG9uZW50c0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQudHMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcjogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBnOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IGI6IG51bWJlcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgZmlsbFN0eWxlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpIHtcclxuICAgIHRoaXMuciA9IHI7XHJcbiAgICB0aGlzLmcgPSBnO1xyXG4gICAgdGhpcy5iID0gYjtcclxuXHJcbiAgICB0aGlzLmZpbGxTdHlsZSA9IGByZ2IoJHt0aGlzLnJ9LCAke3RoaXMuZ30sICR7dGhpcy5ifSlgO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tSGV4U3RyaW5nKGhleFN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZWRQYXJ0ID0gaGV4U3RyaW5nLnNsaWNlKDEsIDMpO1xyXG4gICAgY29uc3QgZ3JlZW5QYXJ0ID0gaGV4U3RyaW5nLnNsaWNlKDMsIDUpO1xyXG4gICAgY29uc3QgYmx1ZVBhcnQgPSBoZXhTdHJpbmcuc2xpY2UoNSwgNyk7XHJcblxyXG4gICAgY29uc3QgcmVkID0gcGFyc2VJbnQocmVkUGFydCwgMTYpO1xyXG4gICAgY29uc3QgZ3JlZW4gPSBwYXJzZUludChncmVlblBhcnQsIDE2KTtcclxuICAgIGNvbnN0IGJsdWUgPSBwYXJzZUludChibHVlUGFydCwgMTYpO1xyXG5cclxuICAgIHJldHVybiBuZXcgQ29sb3IocmVkLCBncmVlbiwgYmx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbnRlZ2VyVG9QYWRkZWRIZXgoaW50ZWdlcjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBoZXggPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KTtcclxuXHJcbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gYCAke2hleH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGhleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0hleFN0cmluZygpIHtcclxuICAgIGNvbnN0IHJlZFBhcnQgPSBDb2xvci5pbnRlZ2VyVG9QYWRkZWRIZXgodGhpcy5yKTtcclxuICAgIGNvbnN0IGdyZWVuUGFydCA9IENvbG9yLmludGVnZXJUb1BhZGRlZEhleCh0aGlzLmcpO1xyXG4gICAgY29uc3QgYmx1ZVBhcnQgPSBDb2xvci5pbnRlZ2VyVG9QYWRkZWRIZXgodGhpcy5iKTtcclxuXHJcbiAgICByZXR1cm4gYCMke3JlZFBhcnQgKyBibHVlUGFydCArIGdyZWVuUGFydH1gO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vQ29sb3IudHMiLCIvLyBEaWN0aW9uYXJ5XHJcbmNvbnN0IExFWCA9IHtcclxuICBQT0xZR09OX0xBWUVSX05BTUU6ICdQb2x5Z29uTGF5ZXInLFxyXG4gIFBBVEhfTEFZRVJfTkFNRTogJ1BhdGhMYXllcicsXHJcbiAgUEFUSF9HSE9TVF9MQVlFUl9OQU1FOiAnUGF0aEdob3N0TGF5ZXInLFxyXG4gIE5FV19DT05ESVRJT05fRVZFTlRfTkFNRTogJ25ldy1jb25kaXRpb24nLFxyXG4gIFJFTU9WRV9DT05ESVRJT05fRVZFTlRfTkFNRTogJ3JlbW92ZS1jb25kaXRpb24nLFxyXG4gIEtFWV9DT0RFOiB7XHJcbiAgICBFU0NBUEU6IDI3XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBMRVhcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvTEVYLnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5pbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdjb21tb24vQ09MT1JTJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5lUHJvcGVydGllcyB7XHJcbiAgcHVibGljIGNvbG9yOiBDb2xvcjtcclxuICBwdWJsaWMgdGhpY2tuZXNzOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbG9yOiBDb2xvciwgdGhpY2tuZXNzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMudGhpY2tuZXNzID0gdGhpY2tuZXNzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXREZWZhdWx0KCk6IExpbmVQcm9wZXJ0aWVzIHtcclxuICAgIHJldHVybiBuZXcgTGluZVByb3BlcnRpZXMoQ09MT1JTLkJMQUNLLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpOiBMaW5lUHJvcGVydGllcyB7XHJcbiAgICByZXR1cm4gbmV3IExpbmVQcm9wZXJ0aWVzKHRoaXMuY29sb3IsIHRoaXMudGhpY2tuZXNzKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0xpbmVQcm9wZXJ0aWVzLnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcclxuICBCTEFDSzogbmV3IENvbG9yKDAsIDAsIDApLFxyXG4gIFJFRDogbmV3IENvbG9yKDI1NSwgMCwgMCksXHJcbiAgR1JFRU46IG5ldyBDb2xvcigwLCAyNTUsIDApLFxyXG4gIEJMVUU6IG5ldyBDb2xvcigwLCAwLCAyNTUpLFxyXG4gIFdISVRFOiBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSlcclxufTtcclxuXHJcbk9iamVjdC5mcmVlemUoQ09MT1JTKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0NPTE9SUy50cyIsImV4cG9ydCBlbnVtIExpZ2h0VmVyc29yVHlwZSB7XHJcbiAgQ29uc3RhbnQsXHJcbiAgQ2lyY2xpbmdcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vTGlnaHRWZXJzb3JUeXBlLnRzIiwiaW1wb3J0IHsgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdIZWlnaHRNYXBFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0hlaWdodE1hcEV2ZW50JztcclxuaW1wb3J0IHsgTmV3TGlnaHRDb2xvckV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRDb2xvckV2ZW50JztcclxuaW1wb3J0IHsgTmV3TGlnaHRWZXJzb3JFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdMaWdodFZlcnNvclR5cGVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yVHlwZUV2ZW50JztcclxuaW1wb3J0IHsgTmV3Tm9ybWFsTWFwRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudCc7XHJcblxyXG5leHBvcnQge1xyXG4gIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgTmV3TGlnaHRDb2xvckV2ZW50LFxyXG4gIE5ld0xpZ2h0VmVyc29yRXZlbnQsXHJcbiAgTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQsXHJcbiAgTmV3Tm9ybWFsTWFwRXZlbnRcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvaW5kZXgudHMiLCJpbXBvcnQgeyBIaXRUZXN0UmVzdWx0IH0gZnJvbSAnY29tbW9uL0hpdFRlc3RSZXN1bHQnO1xyXG5pbXBvcnQgeyBQYXRoLCBTZXJpYWxpemFibGVQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnUmVuZGVyZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJpYWxpemFibGVMYXllciB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBhdGhzOiBTZXJpYWxpemFibGVQYXRoW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYXllciB7XHJcbiAgcHVibGljIHBhdGhzOiBQYXRoW10gPSBbXTtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgdGhpcy5wYXRocy5mb3JFYWNoKHBhdGggPT4gcmVuZGVyZXIuZHJhd1BhdGgocGF0aCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVBhdGgocGF0aDogUGF0aCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnBhdGhzLmluZGV4T2YocGF0aCk7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhdGhzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGl0VGVzdChwb2ludDogUG9pbnQpOiBIaXRUZXN0UmVzdWx0IHwgbnVsbCB7XHJcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgdGhpcy5wYXRocykge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBwYXRoLmhpdFRlc3QocG9pbnQpO1xyXG4gICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXN1bHQubGF5ZXIgPSB0aGlzO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1NlcmlhbGl6YWJsZU9iamVjdCgpOiBTZXJpYWxpemFibGVMYXllciB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIHBhdGhzOiB0aGlzLnBhdGhzLm1hcChwYXRoID0+IHBhdGgudG9TZXJpYWxpemFibGVPYmplY3QoKSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZnJvbVNlcmlhbGl6YWJsZU9iamVjdChzZXJpYWxpemFibGVMYXllcjogU2VyaWFsaXphYmxlTGF5ZXIpIHtcclxuICAgIHRoaXMubmFtZSA9IHNlcmlhbGl6YWJsZUxheWVyLm5hbWU7XHJcblxyXG4gICAgdGhpcy5wYXRocy5zcGxpY2UoMCwgdGhpcy5wYXRocy5sZW5ndGgpO1xyXG5cclxuICAgIHNlcmlhbGl6YWJsZUxheWVyLnBhdGhzLmZvckVhY2goc2VyaWFsaXphYmxlUGF0aCA9PiB7XHJcbiAgICAgIHRoaXMucGF0aHMucHVzaChQYXRoLmZyb21TZXJpYWxpemFibGVQYXRoKHNlcmlhbGl6YWJsZVBhdGgpKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vTGF5ZXIudHMiLCJpbXBvcnQgeyBIaXRUZXN0UmVzdWx0IH0gZnJvbSAnY29tbW9uL0hpdFRlc3RSZXN1bHQnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJpYWxpemFibGVQYXRoIHtcclxuICBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXM7XHJcbiAgY2xvc2VkOiBib29sZWFuO1xyXG4gIHZlcnRpY2VzOiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgfVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aCB7XHJcbiAgcHVibGljIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXM7XHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHZlcnRpY2VzOiBQb2ludFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlczogUG9pbnRbXSwgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzKSB7XHJcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XHJcbiAgICB0aGlzLmxpbmVQcm9wZXJ0aWVzID0gbGluZVByb3BlcnRpZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZyb21TZXJpYWxpemFibGVQYXRoKHNlcmlhbGl6YWJsZVBhdGg6IFNlcmlhbGl6YWJsZVBhdGgpIHtcclxuICAgIGNvbnN0IHJlYWxQb2ludHMgPSBzZXJpYWxpemFibGVQYXRoLnZlcnRpY2VzLm1hcCh2ZXJ0ZXggPT4gbmV3IFBvaW50KHZlcnRleC54LCB2ZXJ0ZXgueSkpO1xyXG4gICAgY29uc3QgcmVhbExpbmVQcm9wZXJ0aWVzID0gbmV3IExpbmVQcm9wZXJ0aWVzKFxyXG4gICAgICBzZXJpYWxpemFibGVQYXRoLmxpbmVQcm9wZXJ0aWVzLmNvbG9yLFxyXG4gICAgICBzZXJpYWxpemFibGVQYXRoLmxpbmVQcm9wZXJ0aWVzLnRoaWNrbmVzc1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHBhdGggPSBuZXcgUGF0aChyZWFsUG9pbnRzLCByZWFsTGluZVByb3BlcnRpZXMpO1xyXG4gICAgcGF0aC5jbG9zZWQgPSBzZXJpYWxpemFibGVQYXRoLmNsb3NlZDtcclxuXHJcbiAgICByZXR1cm4gcGF0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyAqZ2V0VmVydGljZXNJdGVyYXRvcigpIHtcclxuICAgIGNvbnN0IHZlcnRpY2VzQ291bnQgPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXNDb3VudDsgaSArPSAxKSB7XHJcbiAgICAgIHlpZWxkIHRoaXMudmVydGljZXNbaV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2xvc2VkICYmIHZlcnRpY2VzQ291bnQgPiAwKSB7XHJcbiAgICAgIHlpZWxkIHRoaXMudmVydGljZXNbMF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgKmdldExpbmVJdGVyYXRvcigpIHtcclxuICAgIGxldCBwcmV2aW91c1BvaW50O1xyXG5cclxuICAgIGZvciAoY29uc3QgcG9pbnQgb2YgdGhpcy5nZXRWZXJ0aWNlc0l0ZXJhdG9yKCkpIHtcclxuICAgICAgaWYgKCFwcmV2aW91c1BvaW50KSB7XHJcbiAgICAgICAgcHJldmlvdXNQb2ludCA9IHBvaW50O1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB5aWVsZCBuZXcgTGluZShwcmV2aW91c1BvaW50LCBwb2ludCk7XHJcbiAgICAgIHByZXZpb3VzUG9pbnQgPSBwb2ludDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdGFydGluZ1BvaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljZXNbMF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VmVydGljZXNDb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMaW5lUHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB0aGlzLmxpbmVQcm9wZXJ0aWVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpdFRlc3QocG9pbnQ6IFBvaW50KTogSGl0VGVzdFJlc3VsdCB8IG51bGwge1xyXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIHRoaXMuZ2V0TGluZUl0ZXJhdG9yKCkpIHtcclxuICAgICAgaWYgKGxpbmUuZGlzdGFuY2VUb1BvaW50KHBvaW50KSA8PSBjb25maWd1cmF0aW9uLmhpdFRvbGVyYW5jZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgSGl0VGVzdFJlc3VsdChsaW5lLCB0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFZlcnRleChpbmRleDogbnVtYmVyKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljZXNbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFZlcnRpY2VzKCk6IFBvaW50W10ge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkVmVydGV4KHBvaW50OiBQb2ludCkge1xyXG4gICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVWZXJ0ZXgocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZFBvaW50SW5kZXgocG9pbnQpO1xyXG5cclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy52ZXJ0aWNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGluc2VydFZlcnRleChwb2ludDogUG9pbnQsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMudmVydGljZXMuc3BsaWNlKGluZGV4LCAwLCBwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKTogUGF0aCB7XHJcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFsuLi50aGlzLmdldFZlcnRpY2VzKCkubWFwKHBvaW50ID0+IHBvaW50LmNsb25lKCkpXTtcclxuICAgIGNvbnN0IGxpbmVQcm9wZXJ0aWVzID0gdGhpcy5saW5lUHJvcGVydGllcy5jbG9uZSgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUGF0aCh2ZXJ0aWNlcywgbGluZVByb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbmRQb2ludEluZGV4KHBvaW50OiBQb2ludCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljZXMuaW5kZXhPZihwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Qm91bmRpbmdCb3goKSB7XHJcbiAgICBsZXQgbWluWCA9IEluZmluaXR5O1xyXG4gICAgbGV0IG1heFggPSAwO1xyXG4gICAgbGV0IG1pblkgPSBJbmZpbml0eTtcclxuICAgIGxldCBtYXhZID0gMDtcclxuXHJcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICBpZiAocG9pbnQueCA8IG1pblgpIHtcclxuICAgICAgICBtaW5YID0gcG9pbnQueDtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9pbnQueCA+IG1heFgpIHtcclxuICAgICAgICBtYXhYID0gcG9pbnQueDtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9pbnQueSA8IG1pblkpIHtcclxuICAgICAgICBtaW5ZID0gcG9pbnQueTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9pbnQueSA+IG1heFkpIHtcclxuICAgICAgICBtYXhZID0gcG9pbnQueTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWluWCxcclxuICAgICAgbWF4WCxcclxuICAgICAgbWluWSxcclxuICAgICAgbWF4WVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1BvaW50SW5Cb3VuZGluZ0JveChwb2ludDogUG9pbnQpIHtcclxuICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gdGhpcy5nZXRCb3VuZGluZ0JveCgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIHBvaW50LnggPj0gYm91bmRpbmdCb3gubWluWCAmJlxyXG4gICAgICBwb2ludC54IDw9IGJvdW5kaW5nQm94Lm1heFggJiZcclxuICAgICAgcG9pbnQueSA+PSBib3VuZGluZ0JveC5taW5ZICYmXHJcbiAgICAgIHBvaW50LnkgPD0gYm91bmRpbmdCb3gubWF4WVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1NlcmlhbGl6YWJsZU9iamVjdCgpOiBTZXJpYWxpemFibGVQYXRoIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpbmVQcm9wZXJ0aWVzOiB0aGlzLmxpbmVQcm9wZXJ0aWVzLmNsb25lKCksXHJcbiAgICAgIGNsb3NlZDogdGhpcy5jbG9zZWQsXHJcbiAgICAgIHZlcnRpY2VzOiB0aGlzLnZlcnRpY2VzLm1hcCh2ZXJ0ZXggPT4gKHtcclxuICAgICAgICB4OiB2ZXJ0ZXgueCxcclxuICAgICAgICB5OiB2ZXJ0ZXgueVxyXG4gICAgICB9KSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TmV4dFBvaW50SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChpbmRleCArIDEpICUgdGhpcy5nZXRWZXJ0aWNlc0NvdW50KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TmV4dFBvaW50KHBvaW50OiBQb2ludCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnZlcnRpY2VzLmluZGV4T2YocG9pbnQpO1xyXG4gICAgY29uc3QgbmV4dFBvaW50SW5kZXggPSB0aGlzLmdldE5leHRQb2ludEluZGV4KGluZGV4KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRWZXJ0ZXgobmV4dFBvaW50SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFByZXZpb3VzUG9pbnRJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICBsZXQgcHJldmlvdXNQb2ludEluZGV4ID0gaW5kZXggLSAxO1xyXG4gICAgaWYgKHByZXZpb3VzUG9pbnRJbmRleCA8IDApIHtcclxuICAgICAgcHJldmlvdXNQb2ludEluZGV4ID0gdGhpcy5nZXRWZXJ0aWNlc0NvdW50KCkgLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcmV2aW91c1BvaW50SW5kZXg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UHJldmlvdXNQb2ludChwb2ludDogUG9pbnQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy52ZXJ0aWNlcy5pbmRleE9mKHBvaW50KTtcclxuICAgIGNvbnN0IHByZXZpb3VzUG9pbnRJbmRleCA9IHRoaXMuZ2V0UHJldmlvdXNQb2ludEluZGV4KGluZGV4KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRWZXJ0ZXgocHJldmlvdXNQb2ludEluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3ZlVG8ocGF0aDogUGF0aCkge1xyXG4gICAgaWYgKHRoaXMuZ2V0VmVydGljZXNDb3VudCgpICE9PSBwYXRoLmdldFZlcnRpY2VzQ291bnQoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBudW1iZXIgb2YgdmVydGljZXMgZG9lcyBub3QgbWF0Y2gnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jbG9zZWQgIT09IHBhdGguY2xvc2VkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhdGgncyBjbG9zZWQgc3RhdGUgZG9lcyBub3QgbWF0Y2hcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKChwb2ludCwgaW5kZXgpID0+IHBvaW50Lm1vdmVUbyhwYXRoLmdldFZlcnRleChpbmRleCkpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL1BhdGgudHMiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGluZSB7XHJcbiAgcHVibGljIHAxOiBQb2ludDtcclxuICBwdWJsaWMgcDI6IFBvaW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gICAgaWYgKHAxLmVxdWFscyhwMikpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIGxpbmUgYmV0d2VlbiBwb2ludHMgYXQgdGhlIHNhbWUgY29vcmRpbmF0ZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnAxID0gcDE7XHJcbiAgICB0aGlzLnAyID0gcDI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzdGFuY2VUb1BvaW50KHA6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHBvaW50UHJvamVjdGlvbiA9IHRoaXMucHJvamVjdFBvaW50KHApO1xyXG5cclxuICAgIHJldHVybiBQb2ludC5nZXREaXN0YW5jZUJldHdlZW4ocCwgcG9pbnRQcm9qZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcm9qZWN0UG9pbnQocDogUG9pbnQpIHtcclxuICAgIGNvbnN0IHAxID0gdGhpcy5wMTtcclxuICAgIGNvbnN0IHAyID0gdGhpcy5wMjtcclxuXHJcbiAgICBsZXQgdCA9XHJcbiAgICAgICgocC54IC0gcDEueCkgKiAocDIueCAtIHAxLngpICsgKHAueSAtIHAxLnkpICogKHAyLnkgLSBwMS55KSkgL1xyXG4gICAgICBQb2ludC5nZXREaXN0YW5jZUJldHdlZW5TcXVhcmVkKHAxLCBwMik7XHJcbiAgICB0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdCkpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9pbnQocDEueCArIHQgKiAocDIueCAtIHAxLngpLCBwMS55ICsgdCAqIChwMi55IC0gcDEueSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVxdWFscyhsaW5lOiBMaW5lKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAodGhpcy5wMS5lcXVhbHMobGluZS5wMSkgJiYgdGhpcy5wMi5lcXVhbHMobGluZS5wMikpIHx8XHJcbiAgICAgICh0aGlzLnAxLmVxdWFscyhsaW5lLnAyKSAmJiB0aGlzLnAyLmVxdWFscyhsaW5lLnAxKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TWlkZGxlUG9pbnQoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludCgodGhpcy5wMS54ICsgdGhpcy5wMi54KSAvIDIsICh0aGlzLnAxLnkgKyB0aGlzLnAyLnkpIC8gMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIFBvaW50LmdldERpc3RhbmNlQmV0d2Vlbih0aGlzLnAxLCB0aGlzLnAyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREaXJlY3Rpb24ocDogUG9pbnQpIHtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFBvaW50LmNyb3NzUHJvZHVjdChQb2ludC5zdWJ0cmFjdCh0aGlzLnAyLCB0aGlzLnAxKSwgUG9pbnQuc3VidHJhY3QocCwgdGhpcy5wMSkpO1xyXG4gICAgaWYgKE1hdGguYWJzKGRpcmVjdGlvbikgPCAwLjAwMDAwMDAxKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vTGluZS50cyIsImV4cG9ydCBlbnVtIEZpbGxXb3JrZXJNZXNzYWdlVHlwZSB7XHJcbiAgRmlsbERhdGEsXHJcbiAgU3RhcnRGaWxsLFxyXG4gIEZpbGxTdHJpcHMsXHJcbiAgRW5kRmlsbCxcclxuICBMaWdodFZlcnNvclxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3BvbHlnb24tZmlsbGVyL0ZpbGxXb3JrZXJNZXNzYWdlVHlwZS50cyIsImltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IExpbmVQcm9wZXJ0aWVzIH0gZnJvbSAnY29tbW9uL0xpbmVQcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbiBleHRlbmRzIFBhdGgge1xyXG4gIGNvbnN0cnVjdG9yKHBhdGg6IFBhdGgpO1xyXG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzOiBQb2ludFtdLCBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXMpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoT3JWZXJ0aWNlczogUGF0aCB8IFBvaW50W10sIGxpbmVQcm9wZXJ0aWVzPzogTGluZVByb3BlcnRpZXMpIHtcclxuICAgIGxldCB2ZXJ0aWNlczogUG9pbnRbXTtcclxuXHJcbiAgICBpZiAocGF0aE9yVmVydGljZXMgaW5zdGFuY2VvZiBQYXRoKSB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBwYXRoT3JWZXJ0aWNlcztcclxuICAgICAgdmVydGljZXMgPSBwYXRoLmdldFZlcnRpY2VzKCk7XHJcbiAgICAgIGxpbmVQcm9wZXJ0aWVzID0gcGF0aC5saW5lUHJvcGVydGllcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZlcnRpY2VzID0gcGF0aE9yVmVydGljZXM7XHJcbiAgICAgIGxpbmVQcm9wZXJ0aWVzID0gPExpbmVQcm9wZXJ0aWVzPmxpbmVQcm9wZXJ0aWVzO1xyXG4gICAgfVxyXG5cclxuICAgIFBvbHlnb24uZW5zdXJlVmVydGljZXNMZW5ndGgodmVydGljZXMpO1xyXG4gICAgc3VwZXIodmVydGljZXMsIGxpbmVQcm9wZXJ0aWVzKTtcclxuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGVuc3VyZVZlcnRpY2VzTGVuZ3RoKHZlcnRpY2VzOiBQb2ludFtdKSB7XHJcbiAgICBpZiAodmVydGljZXMubGVuZ3RoID49IGNvbmZpZ3VyYXRpb24ubWluUG9seWdvblBvaW50cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBQb2x5Z29uIG11c3QgaGF2ZSBhdCBsZWFzdCAke2NvbmZpZ3VyYXRpb24ubWluUG9seWdvblBvaW50c30gdmVydGljZXNgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpOiBQb2x5Z29uIHtcclxuICAgIHJldHVybiBuZXcgUG9seWdvbihzdXBlci5jbG9uZSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVWZXJ0ZXgocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBpZiAodGhpcy5nZXRWZXJ0aWNlc0NvdW50KCkgPT09IGNvbmZpZ3VyYXRpb24ubWluUG9seWdvblBvaW50cykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgdmVydGV4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIucmVtb3ZlVmVydGV4KHBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDZW50ZXJQb2ludCgpIHtcclxuICAgIGxldCBjZW50ZXJYID0gMDtcclxuICAgIGxldCBjZW50ZXJZID0gMDtcclxuXHJcbiAgICB0aGlzLmdldFZlcnRpY2VzKCkuZm9yRWFjaChwb2ludCA9PiB7XHJcbiAgICAgIGNlbnRlclggKz0gcG9pbnQueDtcclxuICAgICAgY2VudGVyWSArPSBwb2ludC55O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2VudGVyWCAvPSB0aGlzLmdldFZlcnRpY2VzQ291bnQoKTtcclxuICAgIGNlbnRlclkgLz0gdGhpcy5nZXRWZXJ0aWNlc0NvdW50KCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb2ludChjZW50ZXJYLCBjZW50ZXJZKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0NvbnZleCgpIHtcclxuICAgIGxldCBsYXN0TGluZTogTGluZSB8IG51bGwgPSBudWxsO1xyXG4gICAgbGV0IGxhc3REaXJlY3Rpb246IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGZvciAoY29uc3QgbGluZSBvZiB0aGlzLmdldExpbmVJdGVyYXRvcigpKSB7XHJcbiAgICAgIGlmICghbGFzdExpbmUpIHtcclxuICAgICAgICBsYXN0TGluZSA9IGxpbmU7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnREaXJlY3Rpb24gPSBsYXN0TGluZS5nZXREaXJlY3Rpb24obGluZS5wMik7XHJcbiAgICAgIGxhc3RMaW5lID0gbGluZTtcclxuXHJcbiAgICAgIGlmIChsYXN0RGlyZWN0aW9uID09PSBudWxsICYmIGN1cnJlbnREaXJlY3Rpb24gIT09IDApIHtcclxuICAgICAgICBsYXN0RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbjtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IDApIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gIT09IGxhc3REaXJlY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL1BvbHlnb24udHMiLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbW1vbi9Db2xvcic7XHJcblxyXG5jb25zdCBNQVhfQ09MT1IgPSAyNTU7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMyB7XHJcbiAgcHVibGljIHg6IG51bWJlcjtcclxuICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gIHB1YmxpYyB6OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy56ID0gejtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUNvbG9yKGNvbG9yOiBDb2xvcik6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKGNvbG9yLnIgLyBNQVhfQ09MT1IsIGNvbG9yLmcgLyBNQVhfQ09MT1IsIGNvbG9yLmIgLyBNQVhfQ09MT1IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhZGQodjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModjEueCArIHYyLngsIHYxLnkgKyB2Mi55LCB2MS56ICsgdjIueik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHN1YnRyYWN0KHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYxLnggLSB2Mi54LCB2MS55IC0gdjIueSwgdjEueiAtIHYyLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcm9zc1Byb2R1Y3QodjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKTogVmVjdG9yMyB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoXHJcbiAgICAgIHYxLnkgKiB2Mi56IC0gdjEueiAqIHYyLnksXHJcbiAgICAgIHYxLnogKiB2Mi54IC0gdjEueCAqIHYyLnosXHJcbiAgICAgIHYxLnggKiB2Mi55IC0gdjEueSAqIHYyLnhcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRvdFByb2R1Y3QodjE6IFZlY3RvcjMsIHYyOiBWZWN0b3IzKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB2MS54ICogdjIueCArIHYxLnkgKiB2Mi55ICsgdjEueiAqIHYyLno7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNvc2luZUFuZ2xlKHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICBjb25zdCBkb3RQcm9kdWN0ID0gVmVjdG9yMy5kb3RQcm9kdWN0KHYxLCB2Mik7XHJcbiAgICBjb25zdCBsZW5ndGgxID0gdjEuZ2V0TGVuZ3RoKCk7XHJcbiAgICBjb25zdCBsZW5ndGgyID0gdjIuZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgcmV0dXJuIGRvdFByb2R1Y3QgLyAobGVuZ3RoMSAqIGxlbmd0aDIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvQ29sb3IoKTogQ29sb3Ige1xyXG4gICAgY29uc3QgciA9IE1hdGguZmxvb3IodGhpcy54ICogTUFYX0NPTE9SKTtcclxuICAgIGNvbnN0IGcgPSBNYXRoLmZsb29yKHRoaXMueSAqIE1BWF9DT0xPUik7XHJcbiAgICBjb25zdCBiID0gTWF0aC5mbG9vcih0aGlzLnogKiBNQVhfQ09MT1IpO1xyXG5cclxuICAgIHJldHVybiBuZXcgQ29sb3IociwgZywgYik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbm9ybWFsaXplKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjModGhpcy54IC8gbGVuZ3RoLCB0aGlzLnkgLyBsZW5ndGgsIHRoaXMueiAvIGxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiogMiArIHRoaXMueSAqKiAyICsgdGhpcy56ICoqIDIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGludmVydCgpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMygtdGhpcy54LCAtdGhpcy55LCAtdGhpcy56KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL1ZlY3RvcjMudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludENvbXBvbmVudCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvUGF0aFBvaW50Q29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludENsaWNrRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IFBhdGhQb2ludENvbXBvbmVudDtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoUG9pbnRDb21wb25lbnQ6IFBhdGhQb2ludENvbXBvbmVudCkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gcGF0aFBvaW50Q29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdQb2ludENsaWNrRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvUG9pbnRDbGlja0V2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlckZpbmlzaGVkRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQgPSBudWxsO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBSZW5kZXJGaW5pc2hlZEV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gUmVuZGVyRmluaXNoZWRFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvUmVuZGVyRmluaXNoZWRFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuaW1wb3J0IHsgUGF0aFBvaW50Q29tcG9uZW50IH0gZnJvbSAndWkvY29tcG9uZW50cy9QYXRoUG9pbnRDb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbmlzaFBvaW50RHJhZ0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBQYXRoUG9pbnRDb21wb25lbnQ7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IEZpbmlzaFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoUG9pbnRDb21wb25lbnQ6IFBhdGhQb2ludENvbXBvbmVudCkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gcGF0aFBvaW50Q29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdGaW5pc2hQb2ludERyYWdFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL0ZpbmlzaFBvaW50RHJhZ0V2ZW50LnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludENvbXBvbmVudCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvUGF0aFBvaW50Q29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludERyYWdFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDoge1xyXG4gICAgY29tcG9uZW50OiBQYXRoUG9pbnRDb21wb25lbnQsXHJcbiAgICBuZXdQb3NpdGlvbjogUG9pbnRcclxuICB9O1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBQb2ludERyYWdFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aFBvaW50Q29tcG9uZW50OiBQYXRoUG9pbnRDb21wb25lbnQsIG5ld1Bvc2l0aW9uOiBQb2ludCkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0ge1xyXG4gICAgICBjb21wb25lbnQ6IHBhdGhQb2ludENvbXBvbmVudCxcclxuICAgICAgbmV3UG9zaXRpb25cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ1BvaW50RHJhZ0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL3BvaW50LWRyYWcvUG9pbnREcmFnRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludENvbXBvbmVudCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvUGF0aFBvaW50Q29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFydFBvaW50RHJhZ0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBQYXRoUG9pbnRDb21wb25lbnQ7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IFN0YXJ0UG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhdGhQb2ludENvbXBvbmVudDogUGF0aFBvaW50Q29tcG9uZW50KSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBwYXRoUG9pbnRDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ1N0YXJ0UG9pbnREcmFnRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuaW50ZXJmYWNlIExpbmVDbGlja0V2ZW50UGF5bG9hZCB7XHJcbiAgbGluZTogTGluZTtcclxuICBwYXRoOiBQYXRoO1xyXG4gIHBvc2l0aW9uOiBQb2ludDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpbmVDbGlja0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBMaW5lQ2xpY2tFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IExpbmVDbGlja0V2ZW50UGF5bG9hZDtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsaW5lOiBMaW5lLCBwYXRoOiBQYXRoLCBwb3NpdGlvbjogUG9pbnQpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IHtcclxuICAgICAgbGluZSxcclxuICAgICAgcGF0aCxcclxuICAgICAgcG9zaXRpb25cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ0xpbmVDbGlja0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL0xpbmVDbGlja0V2ZW50LnRzIiwiaW1wb3J0ICd1aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNEaWFsb2cuc2Nzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdHJ1Y3Rpb25zRGlhbG9nIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByaXZhdGUgb3ZlcmxheTogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkaWFsb2dDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgZGlzbWlzc0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbnMtZGlhbG9nLXdyYXBwZXInO1xyXG5cclxuICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5vdmVybGF5LmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbnMtZGlhbG9nX19vdmVybGF5JztcclxuXHJcbiAgICB0aGlzLmRpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5kaWFsb2dDb250YWluZXIuY2xhc3NOYW1lID0gJ2luc3RydWN0aW9ucy1kaWFsb2cnO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0luc3RydWN0aW9ucyc7XHJcbiAgICB0aXRsZS5jbGFzc05hbWUgPSAnaW5zdHJ1Y3Rpb25zLWRpYWxvZ19fdGl0bGUnO1xyXG4gICAgdGhpcy5kaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIHRoaXMuZGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVXNhZ2VMaXN0KCkpO1xyXG5cclxuICAgIHRoaXMuZGlzbWlzc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5kaXNtaXNzQnV0dG9uLnRleHRDb250ZW50ID0gJ0Rpc21pc3MnO1xyXG4gICAgdGhpcy5kaXNtaXNzQnV0dG9uLmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbnMtZGlhbG9nX19kaXNtaXNzLWJ1dHRvbic7XHJcblxyXG4gICAgdGhpcy5kaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kaXNtaXNzQnV0dG9uKTtcclxuXHJcbiAgICB0aGlzLmRpc21pc3MgPSB0aGlzLmRpc21pc3MuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5kaWFsb2dDb250YWluZXIpO1xyXG4gICAgdGhpcy5kaXNtaXNzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kaXNtaXNzKTtcclxuICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGlzbWlzcyk7XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2luc3RydWN0aW9ucy1kaWFsb2dfX292ZXJsYXktLWFjdGl2ZScpO1xyXG4gICAgICB0aGlzLmRpYWxvZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbnMtZGlhbG9nLS1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLm92ZXJsYXkpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmRpYWxvZ0NvbnRhaW5lcik7XHJcbiAgICB0aGlzLmRpc21pc3NCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRpc21pc3MpO1xyXG4gICAgdGhpcy5vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kaXNtaXNzKTtcclxuXHJcbiAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaW5zdHJ1Y3Rpb25zLWRpYWxvZ19fb3ZlcmxheS0tYWN0aXZlJyk7XHJcbiAgICB0aGlzLmRpYWxvZ0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpbnN0cnVjdGlvbnMtZGlhbG9nLS1hY3RpdmUnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzbWlzcygpIHtcclxuICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVVzYWdlTGlzdCgpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgIGNvbnN0IHVzYWdlID0gW1xyXG4gICAgICAnQ2xpY2sgb24gdGhlIGZyZWUgc3BhY2UgaW4gdGhlIGNhbnZhcyB0byBzdGFydCBjcmVhdGluZyB2ZXJ0aWNlcycsXHJcbiAgICAgICdDbGljayBvbiB0aGUgaW5pdGlhbCB2ZXJ0ZXggdG8gY2xvc2UgdGhlIHBhdGggaW50byBhIHBvbHlnb24nLFxyXG4gICAgICAnQWx0ZXJuYXRpdmVseSwgeW91IG1heSBwcmVzcyBFc2NhcGUgdG8gY2FuY2VsIGFkZGluZyBhIG5ldyBwYXRoJyxcclxuICAgICAgJ0NsaWNrIGFuZCBkcmFnIHRoZSB2ZXJ0ZXggdG8gbW92ZSBpdCcsXHJcbiAgICAgICdEb3VibGUgY2xpY2sgb24gYW4gZWRnZSB0byBhZGQgYSB2ZXJ0ZXggaW4gdGhlIG1pZGRsZSBvZiBpdCcsXHJcbiAgICAgICdEb3VibGUgY2xpY2sgb24gYSB2ZXJ0ZXggdG8gcmVtb3ZlIGl0JyxcclxuICAgICAgJ1ByZXNzaW5nIEN0cmwgYWxsb3dzIGRyYWdnaW5nIGEgd2hvbGUgcG9seWdvbicsXHJcbiAgICAgICdTYXZlIGFsbG93cyB5b3UgdG8gZXhwb3J0IGFsbCB0aGUgcG9seWdvbnMgb24gdGhlIHNjcmVlbicsXHJcbiAgICAgICdMb2FkIGFsbG93cyB5b3UgdG8gcmVzdG9yZSB0aGUgcG9seWdvbnMnXHJcbiAgICBdO1xyXG5cclxuICAgIHVzYWdlLm1hcCh1c2FnZUl0ZW1UZXh0ID0+IHRoaXMuY3JlYXRlVXNhZ2VMaXN0SXRlbSh1c2FnZUl0ZW1UZXh0KSlcclxuICAgICAgLmZvckVhY2godXNhZ2VMaXN0SXRlbSA9PiBsaXN0LmFwcGVuZENoaWxkKHVzYWdlTGlzdEl0ZW0pKTtcclxuXHJcbiAgICByZXR1cm4gbGlzdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVXNhZ2VMaXN0SXRlbSh0ZXh0Q29udGVudDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGl0ZW0udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuXHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1pbnN0cnVjdGlvbnMtZGlhbG9nJywgSW5zdHJ1Y3Rpb25zRGlhbG9nKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnRzIiwiaW1wb3J0ICdpbmRleC5zY3NzJztcclxuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcclxuXHJcbmltcG9ydCAnQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL3dlYmNvbXBvbmVudHMtaGktc2QtY2UnO1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdBcHBsaWNhdGlvbic7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGJvb3RzdHJhcCwgZmFsc2UpO1xyXG5cclxuZnVuY3Rpb24gYm9vdHN0cmFwKCk6IHZvaWQge1xyXG4gIGNvbnN0IGNhbnZhc0lkID0gJ21haW4tY2FudmFzJztcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XHJcbiAgaWYgKCFjYW52YXMpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgQ2FudmFzIHdpdGggaWQgJHtjYW52YXNJZH0gY2Fubm90IGJlIGZvdW5kYCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhcHBsaWNhdGlvbiA9IG5ldyBBcHBsaWNhdGlvbig8SFRNTENhbnZhc0VsZW1lbnQ+Y2FudmFzKTtcclxuICBhcHBsaWNhdGlvbi5pbml0KCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvaW5kZXgudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41OyB9XFxuXFxuLm1haW4tY2FudmFzIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrOyB9XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAxZW07IH1cXG5cXG4uY2FudmFzLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uYXBwbGljYXRpb24tdWkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gIC5hcHBsaWNhdGlvbi11aSAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDsgfVxcblxcbi5hcHAtaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07IH1cXG5cXG4uYXBwLW5hbWUge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLmZvb3RlciB7XFxuICBtYXJnaW46IDFlbSAxZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24oKXsvKlxuXG4gQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG5cbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcblxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuXG4gQ29weXJpZ2h0IChjKSAyMDE0IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuJ3VzZSBzdHJpY3QnO3ZhciBKPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdz09PXRoaXM/dGhpczpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZudWxsIT1nbG9iYWw/Z2xvYmFsOnRoaXMsQWE9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXM/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGcscSxOKXtnIT1BcnJheS5wcm90b3R5cGUmJmchPU9iamVjdC5wcm90b3R5cGUmJihnW3FdPU4udmFsdWUpfTtmdW5jdGlvbiBzYigpe3NiPWZ1bmN0aW9uKCl7fTtKLlN5bWJvbHx8KEouU3ltYm9sPXRiKX12YXIgdGI9ZnVuY3Rpb24oKXt2YXIgZz0wO3JldHVybiBmdW5jdGlvbihxKXtyZXR1cm5cImpzY29tcF9zeW1ib2xfXCIrKHF8fFwiXCIpK2crK319KCk7XG5mdW5jdGlvbiBkZCgpe3NiKCk7dmFyIGc9Si5TeW1ib2wuaXRlcmF0b3I7Z3x8KGc9Si5TeW1ib2wuaXRlcmF0b3I9Si5TeW1ib2woXCJpdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlW2ddJiZBYShBcnJheS5wcm90b3R5cGUsZyx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGVkKHRoaXMpfX0pO2RkPWZ1bmN0aW9uKCl7fX1mdW5jdGlvbiBlZChnKXt2YXIgcT0wO3JldHVybiBmZChmdW5jdGlvbigpe3JldHVybiBxPGcubGVuZ3RoP3tkb25lOiExLHZhbHVlOmdbcSsrXX06e2RvbmU6ITB9fSl9ZnVuY3Rpb24gZmQoZyl7ZGQoKTtnPXtuZXh0Omd9O2dbSi5TeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3JldHVybiBnfWZ1bmN0aW9uIGdkKGcpe2RkKCk7dmFyIHE9Z1tTeW1ib2wuaXRlcmF0b3JdO3JldHVybiBxP3EuY2FsbChnKTplZChnKX1cbmZ1bmN0aW9uIGhkKGcpe2Zvcih2YXIgcSxOPVtdOyEocT1nLm5leHQoKSkuZG9uZTspTi5wdXNoKHEudmFsdWUpO3JldHVybiBOfVxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZygpe3ZhciBhPXRoaXM7dGhpcy5tPXt9O3RoaXMuZz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7dmFyIGI9bmV3IEJhO2IucnVsZXM9W107dGhpcy5oPXYuc2V0KHRoaXMuZyxuZXcgdihiKSk7dGhpcy5pPSExO3RoaXMuYj10aGlzLmE9bnVsbDt1YihmdW5jdGlvbigpe2EuYygpfSl9ZnVuY3Rpb24gcSgpe3RoaXMuY3VzdG9tU3R5bGVzPVtdO3RoaXMuZW5xdWV1ZWQ9ITF9ZnVuY3Rpb24gTigpe31mdW5jdGlvbiBoYShhKXt0aGlzLmNhY2hlPXt9O3RoaXMuYz12b2lkIDA9PT1hPzEwMDphfWZ1bmN0aW9uIG4oKXt9ZnVuY3Rpb24gdihhLGIsYyxkLGUpe3RoaXMuRD1hfHxudWxsO3RoaXMuYj1ifHxudWxsO3RoaXMubGE9Y3x8W107dGhpcy5OPW51bGw7dGhpcy5WPWV8fFwiXCI7dGhpcy5hPXRoaXMuQT10aGlzLko9bnVsbH1mdW5jdGlvbiB1KCl7fWZ1bmN0aW9uIEJhKCl7dGhpcy5lbmQ9dGhpcy5zdGFydD0wO3RoaXMucnVsZXM9dGhpcy5wYXJlbnQ9XG50aGlzLnByZXZpb3VzPW51bGw7dGhpcy5jc3NUZXh0PXRoaXMucGFyc2VkQ3NzVGV4dD1cIlwiO3RoaXMuYXRSdWxlPSExO3RoaXMudHlwZT0wO3RoaXMucGFyc2VkU2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj10aGlzLmtleWZyYW1lc05hbWU9XCJcIn1mdW5jdGlvbiBpZChhKXtmdW5jdGlvbiBiKGIsYyl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGIsXCJpbm5lckhUTUxcIix7ZW51bWVyYWJsZTpjLmVudW1lcmFibGUsY29uZmlndXJhYmxlOiEwLGdldDpjLmdldCxzZXQ6ZnVuY3Rpb24oYil7dmFyIGQ9dGhpcyxlPXZvaWQgMDt0KHRoaXMpJiYoZT1bXSxPKHRoaXMsZnVuY3Rpb24oYSl7YSE9PWQmJmUucHVzaChhKX0pKTtjLnNldC5jYWxsKHRoaXMsYik7aWYoZSlmb3IodmFyIGY9MDtmPGUubGVuZ3RoO2YrKyl7dmFyIGs9ZVtmXTsxPT09ay5fX0NFX3N0YXRlJiZhLmRpc2Nvbm5lY3RlZENhbGxiYWNrKGspfXRoaXMub3duZXJEb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5P2EuZih0aGlzKTphLmwodGhpcyk7XG5yZXR1cm4gYn19KX1mdW5jdGlvbiBjKGIsYyl7eChiLFwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50XCIsZnVuY3Rpb24oYixkKXt2YXIgZT10KGQpO2I9Yy5jYWxsKHRoaXMsYixkKTtlJiZhLmEoZCk7dChiKSYmYS5iKGQpO3JldHVybiBifSl9dmImJngoRWxlbWVudC5wcm90b3R5cGUsXCJhdHRhY2hTaGFkb3dcIixmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fX0NFX3NoYWRvd1Jvb3Q9YT12Yi5jYWxsKHRoaXMsYSl9KTtpZihDYSYmQ2EuZ2V0KWIoRWxlbWVudC5wcm90b3R5cGUsQ2EpO2Vsc2UgaWYoRGEmJkRhLmdldCliKEhUTUxFbGVtZW50LnByb3RvdHlwZSxEYSk7ZWxzZXt2YXIgZD1FYS5jYWxsKGRvY3VtZW50LFwiZGl2XCIpO2EucyhmdW5jdGlvbihhKXtiKGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB3Yi5jYWxsKHRoaXMsITApLmlubmVySFRNTH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPVwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lP1xudGhpcy5jb250ZW50OnRoaXM7Zm9yKGQuaW5uZXJIVE1MPWE7MDxiLmNoaWxkTm9kZXMubGVuZ3RoOylGYS5jYWxsKGIsYi5jaGlsZE5vZGVzWzBdKTtmb3IoOzA8ZC5jaGlsZE5vZGVzLmxlbmd0aDspaWEuY2FsbChiLGQuY2hpbGROb2Rlc1swXSl9fSl9KX14KEVsZW1lbnQucHJvdG90eXBlLFwic2V0QXR0cmlidXRlXCIsZnVuY3Rpb24oYixjKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiB4Yi5jYWxsKHRoaXMsYixjKTt2YXIgZD1HYS5jYWxsKHRoaXMsYik7eGIuY2FsbCh0aGlzLGIsYyk7Yz1HYS5jYWxsKHRoaXMsYik7YS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxiLGQsYyxudWxsKX0pO3goRWxlbWVudC5wcm90b3R5cGUsXCJzZXRBdHRyaWJ1dGVOU1wiLGZ1bmN0aW9uKGIsYyxkKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiB5Yi5jYWxsKHRoaXMsYixjLGQpO3ZhciBlPWphLmNhbGwodGhpcyxiLGMpO3liLmNhbGwodGhpcyxiLGMsZCk7ZD1qYS5jYWxsKHRoaXMsXG5iLGMpO2EuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYyxlLGQsYil9KTt4KEVsZW1lbnQucHJvdG90eXBlLFwicmVtb3ZlQXR0cmlidXRlXCIsZnVuY3Rpb24oYil7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gemIuY2FsbCh0aGlzLGIpO3ZhciBjPUdhLmNhbGwodGhpcyxiKTt6Yi5jYWxsKHRoaXMsYik7bnVsbCE9PWMmJmEuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYixjLG51bGwsbnVsbCl9KTt4KEVsZW1lbnQucHJvdG90eXBlLFwicmVtb3ZlQXR0cmlidXRlTlNcIixmdW5jdGlvbihiLGMpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIEFiLmNhbGwodGhpcyxiLGMpO3ZhciBkPWphLmNhbGwodGhpcyxiLGMpO0FiLmNhbGwodGhpcyxiLGMpO3ZhciBlPWphLmNhbGwodGhpcyxiLGMpO2QhPT1lJiZhLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGMsZCxlLGIpfSk7QmI/YyhIVE1MRWxlbWVudC5wcm90b3R5cGUsQmIpOkNiP2MoRWxlbWVudC5wcm90b3R5cGUsXG5DYik6Y29uc29sZS53YXJuKFwiQ3VzdG9tIEVsZW1lbnRzOiBgRWxlbWVudCNpbnNlcnRBZGphY2VudEVsZW1lbnRgIHdhcyBub3QgcGF0Y2hlZC5cIik7SGEoYSxFbGVtZW50LnByb3RvdHlwZSx7WjpqZCxhcHBlbmQ6a2R9KTtsZChhLHtqYTptZCxXYTpuZCxyZXBsYWNlV2l0aDpvZCxyZW1vdmU6cGR9KX1mdW5jdGlvbiBsZChhLGIpe3ZhciBjPUVsZW1lbnQucHJvdG90eXBlO2Z1bmN0aW9uIGQoYil7cmV0dXJuIGZ1bmN0aW9uKGMpe2Zvcih2YXIgZD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoOysrZSlkW2UtMF09YXJndW1lbnRzW2VdO2U9W107Zm9yKHZhciBmPVtdLGc9MDtnPGQubGVuZ3RoO2crKyl7dmFyIG09ZFtnXTttIGluc3RhbmNlb2YgRWxlbWVudCYmdChtKSYmZi5wdXNoKG0pO2lmKG0gaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KWZvcihtPW0uZmlyc3RDaGlsZDttO209bS5uZXh0U2libGluZyllLnB1c2gobSk7ZWxzZSBlLnB1c2gobSl9Yi5hcHBseSh0aGlzLFxuZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrKylhLmEoZltkXSk7aWYodCh0aGlzKSlmb3IoZD0wO2Q8ZS5sZW5ndGg7ZCsrKWY9ZVtkXSxmIGluc3RhbmNlb2YgRWxlbWVudCYmYS5iKGYpfX12b2lkIDAhPT1iLmphJiYoYy5iZWZvcmU9ZChiLmphKSk7dm9pZCAwIT09Yi5qYSYmKGMuYWZ0ZXI9ZChiLldhKSk7dm9pZCAwIT09Yi5yZXBsYWNlV2l0aCYmeChjLFwicmVwbGFjZVdpdGhcIixmdW5jdGlvbihjKXtmb3IodmFyIGQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDsrK2UpZFtlLTBdPWFyZ3VtZW50c1tlXTtlPVtdO2Zvcih2YXIgaD1bXSx3PTA7dzxkLmxlbmd0aDt3Kyspe3ZhciBnPWRbd107ZyBpbnN0YW5jZW9mIEVsZW1lbnQmJnQoZykmJmgucHVzaChnKTtpZihnIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3IoZz1nLmZpcnN0Q2hpbGQ7ZztnPWcubmV4dFNpYmxpbmcpZS5wdXNoKGcpO2Vsc2UgZS5wdXNoKGcpfXc9dCh0aGlzKTtiLnJlcGxhY2VXaXRoLmFwcGx5KHRoaXMsXG5kKTtmb3IoZD0wO2Q8aC5sZW5ndGg7ZCsrKWEuYShoW2RdKTtpZih3KWZvcihhLmEodGhpcyksZD0wO2Q8ZS5sZW5ndGg7ZCsrKWg9ZVtkXSxoIGluc3RhbmNlb2YgRWxlbWVudCYmYS5iKGgpfSk7dm9pZCAwIT09Yi5yZW1vdmUmJngoYyxcInJlbW92ZVwiLGZ1bmN0aW9uKCl7dmFyIGM9dCh0aGlzKTtiLnJlbW92ZS5jYWxsKHRoaXMpO2MmJmEuYSh0aGlzKX0pfWZ1bmN0aW9uIHFkKGEpe2Z1bmN0aW9uIGIoYixkKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYixcInRleHRDb250ZW50XCIse2VudW1lcmFibGU6ZC5lbnVtZXJhYmxlLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZC5nZXQsc2V0OmZ1bmN0aW9uKGIpe2lmKHRoaXMubm9kZVR5cGU9PT1Ob2RlLlRFWFRfTk9ERSlkLnNldC5jYWxsKHRoaXMsYik7ZWxzZXt2YXIgYz12b2lkIDA7aWYodGhpcy5maXJzdENoaWxkKXt2YXIgZT10aGlzLmNoaWxkTm9kZXMsaD1lLmxlbmd0aDtpZigwPGgmJnQodGhpcykpe2M9QXJyYXkoaCk7Zm9yKHZhciB3PVxuMDt3PGg7dysrKWNbd109ZVt3XX19ZC5zZXQuY2FsbCh0aGlzLGIpO2lmKGMpZm9yKGI9MDtiPGMubGVuZ3RoO2IrKylhLmEoY1tiXSl9fX0pfXgoTm9kZS5wcm90b3R5cGUsXCJpbnNlcnRCZWZvcmVcIixmdW5jdGlvbihiLGQpe2lmKGIgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYi5jaGlsZE5vZGVzKTtiPURiLmNhbGwodGhpcyxiLGQpO2lmKHQodGhpcykpZm9yKGQ9MDtkPGMubGVuZ3RoO2QrKylhLmIoY1tkXSk7cmV0dXJuIGJ9Yz10KGIpO2Q9RGIuY2FsbCh0aGlzLGIsZCk7YyYmYS5hKGIpO3QodGhpcykmJmEuYihiKTtyZXR1cm4gZH0pO3goTm9kZS5wcm90b3R5cGUsXCJhcHBlbmRDaGlsZFwiLGZ1bmN0aW9uKGIpe2lmKGIgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYi5jaGlsZE5vZGVzKTtiPWlhLmNhbGwodGhpcyxiKTtpZih0KHRoaXMpKWZvcih2YXIgZT1cbjA7ZTxjLmxlbmd0aDtlKyspYS5iKGNbZV0pO3JldHVybiBifWM9dChiKTtlPWlhLmNhbGwodGhpcyxiKTtjJiZhLmEoYik7dCh0aGlzKSYmYS5iKGIpO3JldHVybiBlfSk7eChOb2RlLnByb3RvdHlwZSxcImNsb25lTm9kZVwiLGZ1bmN0aW9uKGIpe2I9d2IuY2FsbCh0aGlzLGIpO3RoaXMub3duZXJEb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5P2EuZihiKTphLmwoYik7cmV0dXJuIGJ9KTt4KE5vZGUucHJvdG90eXBlLFwicmVtb3ZlQ2hpbGRcIixmdW5jdGlvbihiKXt2YXIgYz10KGIpLGU9RmEuY2FsbCh0aGlzLGIpO2MmJmEuYShiKTtyZXR1cm4gZX0pO3goTm9kZS5wcm90b3R5cGUsXCJyZXBsYWNlQ2hpbGRcIixmdW5jdGlvbihiLGQpe2lmKGIgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYi5jaGlsZE5vZGVzKTtiPUViLmNhbGwodGhpcyxiLGQpO2lmKHQodGhpcykpZm9yKGEuYShkKSxkPTA7ZDxjLmxlbmd0aDtkKyspYS5iKGNbZF0pO1xucmV0dXJuIGJ9Yz10KGIpO3ZhciBmPUViLmNhbGwodGhpcyxiLGQpLGs9dCh0aGlzKTtrJiZhLmEoZCk7YyYmYS5hKGIpO2smJmEuYihiKTtyZXR1cm4gZn0pO0lhJiZJYS5nZXQ/YihOb2RlLnByb3RvdHlwZSxJYSk6YS5zKGZ1bmN0aW9uKGEpe2IoYSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVtdLGI9MDtiPHRoaXMuY2hpbGROb2Rlcy5sZW5ndGg7YisrKWEucHVzaCh0aGlzLmNoaWxkTm9kZXNbYl0udGV4dENvbnRlbnQpO3JldHVybiBhLmpvaW4oXCJcIil9LHNldDpmdW5jdGlvbihhKXtmb3IoO3RoaXMuZmlyc3RDaGlsZDspRmEuY2FsbCh0aGlzLHRoaXMuZmlyc3RDaGlsZCk7aWEuY2FsbCh0aGlzLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKX19KX0pfWZ1bmN0aW9uIHJkKGEpe3goRG9jdW1lbnQucHJvdG90eXBlLFwiY3JlYXRlRWxlbWVudFwiLGZ1bmN0aW9uKGIpe2lmKHRoaXMuX19DRV9oYXNSZWdpc3RyeSl7dmFyIGM9XG5hLmMoYik7aWYoYylyZXR1cm4gbmV3IGMuY29uc3RydWN0b3J9Yj1FYS5jYWxsKHRoaXMsYik7YS5nKGIpO3JldHVybiBifSk7eChEb2N1bWVudC5wcm90b3R5cGUsXCJpbXBvcnROb2RlXCIsZnVuY3Rpb24oYixjKXtiPXNkLmNhbGwodGhpcyxiLGMpO3RoaXMuX19DRV9oYXNSZWdpc3RyeT9hLmYoYik6YS5sKGIpO3JldHVybiBifSk7eChEb2N1bWVudC5wcm90b3R5cGUsXCJjcmVhdGVFbGVtZW50TlNcIixmdW5jdGlvbihiLGMpe2lmKHRoaXMuX19DRV9oYXNSZWdpc3RyeSYmKG51bGw9PT1ifHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWIpKXt2YXIgZD1hLmMoYyk7aWYoZClyZXR1cm4gbmV3IGQuY29uc3RydWN0b3J9Yj10ZC5jYWxsKHRoaXMsYixjKTthLmcoYik7cmV0dXJuIGJ9KTtIYShhLERvY3VtZW50LnByb3RvdHlwZSx7Wjp1ZCxhcHBlbmQ6dmR9KX1mdW5jdGlvbiBIYShhLGIsYyl7ZnVuY3Rpb24gZChiKXtyZXR1cm4gZnVuY3Rpb24oYyl7Zm9yKHZhciBkPVtdLFxuZT0wO2U8YXJndW1lbnRzLmxlbmd0aDsrK2UpZFtlLTBdPWFyZ3VtZW50c1tlXTtlPVtdO2Zvcih2YXIgZj1bXSxnPTA7ZzxkLmxlbmd0aDtnKyspe3ZhciBtPWRbZ107bSBpbnN0YW5jZW9mIEVsZW1lbnQmJnQobSkmJmYucHVzaChtKTtpZihtIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3IobT1tLmZpcnN0Q2hpbGQ7bTttPW0ubmV4dFNpYmxpbmcpZS5wdXNoKG0pO2Vsc2UgZS5wdXNoKG0pfWIuYXBwbHkodGhpcyxkKTtmb3IoZD0wO2Q8Zi5sZW5ndGg7ZCsrKWEuYShmW2RdKTtpZih0KHRoaXMpKWZvcihkPTA7ZDxlLmxlbmd0aDtkKyspZj1lW2RdLGYgaW5zdGFuY2VvZiBFbGVtZW50JiZhLmIoZil9fXZvaWQgMCE9PWMuWiYmKGIucHJlcGVuZD1kKGMuWikpO3ZvaWQgMCE9PWMuYXBwZW5kJiYoYi5hcHBlbmQ9ZChjLmFwcGVuZCkpfWZ1bmN0aW9uIHdkKGEpe3dpbmRvdy5IVE1MRWxlbWVudD1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXt2YXIgYj10aGlzLmNvbnN0cnVjdG9yLFxuZD1hLncoYik7aWYoIWQpdGhyb3cgRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgYmVpbmcgY29uc3RydWN0ZWQgd2FzIG5vdCByZWdpc3RlcmVkIHdpdGggYGN1c3RvbUVsZW1lbnRzYC5cIik7dmFyIGU9ZC5jb25zdHJ1Y3Rpb25TdGFjaztpZigwPT09ZS5sZW5ndGgpcmV0dXJuIGU9RWEuY2FsbChkb2N1bWVudCxkLmxvY2FsTmFtZSksT2JqZWN0LnNldFByb3RvdHlwZU9mKGUsYi5wcm90b3R5cGUpLGUuX19DRV9zdGF0ZT0xLGUuX19DRV9kZWZpbml0aW9uPWQsYS5nKGUpLGU7ZD1lLmxlbmd0aC0xO3ZhciBmPWVbZF07aWYoZj09PUZiKXRocm93IEVycm9yKFwiVGhlIEhUTUxFbGVtZW50IGNvbnN0cnVjdG9yIHdhcyBlaXRoZXIgY2FsbGVkIHJlZW50cmFudGx5IGZvciB0aGlzIGNvbnN0cnVjdG9yIG9yIGNhbGxlZCBtdWx0aXBsZSB0aW1lcy5cIik7ZVtkXT1GYjtPYmplY3Quc2V0UHJvdG90eXBlT2YoZixiLnByb3RvdHlwZSk7YS5nKGYpO3JldHVybiBmfWIucHJvdG90eXBlPXhkLnByb3RvdHlwZTtcbnJldHVybiBifSgpfWZ1bmN0aW9uIHkoYSl7dGhpcy5jPSExO3RoaXMuYT1hO3RoaXMuaD1uZXcgTWFwO3RoaXMuZj1mdW5jdGlvbihhKXtyZXR1cm4gYSgpfTt0aGlzLmI9ITE7dGhpcy5nPVtdO3RoaXMuaT1uZXcgSmEoYSxkb2N1bWVudCl9ZnVuY3Rpb24gR2IoKXt2YXIgYT10aGlzO3RoaXMuYj10aGlzLmE9dm9pZCAwO3RoaXMuZj1uZXcgUHJvbWlzZShmdW5jdGlvbihiKXthLmI9YjthLmEmJmIoYS5hKX0pfWZ1bmN0aW9uIEphKGEsYil7dGhpcy5iPWE7dGhpcy5hPWI7dGhpcy5NPXZvaWQgMDt0aGlzLmIuZih0aGlzLmEpO1wibG9hZGluZ1wiPT09dGhpcy5hLnJlYWR5U3RhdGUmJih0aGlzLk09bmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5mLmJpbmQodGhpcykpLHRoaXMuTS5vYnNlcnZlKHRoaXMuYSx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KSl9ZnVuY3Rpb24gQigpe3RoaXMubz1uZXcgTWFwO3RoaXMubT1uZXcgTWFwO3RoaXMuaj1bXTt0aGlzLmg9ITF9ZnVuY3Rpb24gbChhLFxuYixjKXtpZihhIT09SGIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgY29uc3RydWN0b3JcIik7YT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7YS5fX3Byb3RvX189bC5wcm90b3R5cGU7YS5GKGIsYyk7cmV0dXJuIGF9ZnVuY3Rpb24ga2EoYSl7aWYoIWEuX19zaGFkeXx8dm9pZCAwPT09YS5fX3NoYWR5LmZpcnN0Q2hpbGQpe2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O2EuX19zaGFkeS5maXJzdENoaWxkPUthKGEpO2EuX19zaGFkeS5sYXN0Q2hpbGQ9TGEoYSk7SWIoYSk7Zm9yKHZhciBiPWEuX19zaGFkeS5jaGlsZE5vZGVzPVMoYSksYz0wLGQ7YzxiLmxlbmd0aCYmKGQ9YltjXSk7YysrKWQuX19zaGFkeT1kLl9fc2hhZHl8fHt9LGQuX19zaGFkeS5wYXJlbnROb2RlPWEsZC5fX3NoYWR5Lm5leHRTaWJsaW5nPWJbYysxXXx8bnVsbCxkLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWJbYy0xXXx8bnVsbCxKYihkKX19ZnVuY3Rpb24geWQoYSl7dmFyIGI9YSYmYS5NO1xuYiYmKGIuWC5kZWxldGUoYS5SYSksYi5YLnNpemV8fChhLlNhLl9fc2hhZHkuVD1udWxsKSl9ZnVuY3Rpb24gemQoYSxiKXthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTthLl9fc2hhZHkuVHx8KGEuX19zaGFkeS5UPW5ldyBsYSk7YS5fX3NoYWR5LlQuWC5hZGQoYik7dmFyIGM9YS5fX3NoYWR5LlQ7cmV0dXJue1JhOmIsTTpjLFNhOmEsdGFrZVJlY29yZHM6ZnVuY3Rpb24oKXtyZXR1cm4gYy50YWtlUmVjb3JkcygpfX19ZnVuY3Rpb24gbGEoKXt0aGlzLmE9ITE7dGhpcy5hZGRlZE5vZGVzPVtdO3RoaXMucmVtb3ZlZE5vZGVzPVtdO3RoaXMuWD1uZXcgU2V0fWZ1bmN0aW9uIFQoYSl7cmV0dXJuIGEuX19zaGFkeSYmdm9pZCAwIT09YS5fX3NoYWR5LmZpcnN0Q2hpbGR9ZnVuY3Rpb24gRyhhKXtyZXR1cm5cIlNoYWR5Um9vdFwiPT09YS5NYX1mdW5jdGlvbiBaKGEpe2E9YS5nZXRSb290Tm9kZSgpO2lmKEcoYSkpcmV0dXJuIGF9ZnVuY3Rpb24gTWEoYSxiKXtpZihhJiZiKWZvcih2YXIgYz1cbk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGIpLGQ9MCxlO2Q8Yy5sZW5ndGgmJihlPWNbZF0pO2QrKyl7dmFyIGY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiLGUpO2YmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGUsZil9fWZ1bmN0aW9uIE5hKGEsYil7Zm9yKHZhciBjPVtdLGQ9MTtkPGFyZ3VtZW50cy5sZW5ndGg7KytkKWNbZC0xXT1hcmd1bWVudHNbZF07Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKylNYShhLGNbZF0pO3JldHVybiBhfWZ1bmN0aW9uIEFkKGEsYil7Zm9yKHZhciBjIGluIGIpYVtjXT1iW2NdfWZ1bmN0aW9uIEtiKGEpe09hLnB1c2goYSk7UGEudGV4dENvbnRlbnQ9TGIrK31mdW5jdGlvbiBNYihhLGIpe2Zvcig7Yjspe2lmKGI9PWEpcmV0dXJuITA7Yj1iLnBhcmVudE5vZGV9cmV0dXJuITF9ZnVuY3Rpb24gTmIoYSl7UWF8fChRYT0hMCxLYihtYSkpO2FhLnB1c2goYSl9ZnVuY3Rpb24gbWEoKXtRYT0hMTtmb3IodmFyIGE9ISFhYS5sZW5ndGg7YWEubGVuZ3RoOylhYS5zaGlmdCgpKCk7XG5yZXR1cm4gYX1mdW5jdGlvbiBCZChhLGIpe3ZhciBjPWIuZ2V0Um9vdE5vZGUoKTtyZXR1cm4gYS5tYXAoZnVuY3Rpb24oYSl7dmFyIGI9Yz09PWEudGFyZ2V0LmdldFJvb3ROb2RlKCk7aWYoYiYmYS5hZGRlZE5vZGVzKXtpZihiPUFycmF5LmZyb20oYS5hZGRlZE5vZGVzKS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGM9PT1hLmdldFJvb3ROb2RlKCl9KSxiLmxlbmd0aClyZXR1cm4gYT1PYmplY3QuY3JlYXRlKGEpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiYWRkZWROb2Rlc1wiLHt2YWx1ZTpiLGNvbmZpZ3VyYWJsZTohMH0pLGF9ZWxzZSBpZihiKXJldHVybiBhfSkuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBhfSl9ZnVuY3Rpb24gT2IoYSl7c3dpdGNoKGEpe2Nhc2UgXCImXCI6cmV0dXJuXCImYW1wO1wiO2Nhc2UgXCI8XCI6cmV0dXJuXCImbHQ7XCI7Y2FzZSBcIj5cIjpyZXR1cm5cIiZndDtcIjtjYXNlICdcIic6cmV0dXJuXCImcXVvdDtcIjtjYXNlIFwiXFx1MDBhMFwiOnJldHVyblwiJm5ic3A7XCJ9fVxuZnVuY3Rpb24gUGIoYSl7Zm9yKHZhciBiPXt9LGM9MDtjPGEubGVuZ3RoO2MrKyliW2FbY11dPSEwO3JldHVybiBifWZ1bmN0aW9uIFJhKGEsYil7XCJ0ZW1wbGF0ZVwiPT09YS5sb2NhbE5hbWUmJihhPWEuY29udGVudCk7Zm9yKHZhciBjPVwiXCIsZD1iP2IoYSk6YS5jaGlsZE5vZGVzLGU9MCxmPWQubGVuZ3RoLGs7ZTxmJiYoaz1kW2VdKTtlKyspe2E6e3ZhciBoPWs7dmFyIHc9YTt2YXIgZz1iO3N3aXRjaChoLm5vZGVUeXBlKXtjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOmZvcih2YXIgbT1oLmxvY2FsTmFtZSxsPVwiPFwiK20scT1oLmF0dHJpYnV0ZXMsbj0wO3c9cVtuXTtuKyspbCs9XCIgXCIrdy5uYW1lKyc9XCInK3cudmFsdWUucmVwbGFjZShDZCxPYikrJ1wiJztsKz1cIj5cIjtoPURkW21dP2w6bCtSYShoLGcpK1wiPC9cIittK1wiPlwiO2JyZWFrIGE7Y2FzZSBOb2RlLlRFWFRfTk9ERTpoPWguZGF0YTtoPXcmJkVkW3cubG9jYWxOYW1lXT9oOmgucmVwbGFjZShGZCxPYik7YnJlYWsgYTtjYXNlIE5vZGUuQ09NTUVOVF9OT0RFOmg9XG5cIlxceDNjIS0tXCIraC5kYXRhK1wiLS1cXHgzZVwiO2JyZWFrIGE7ZGVmYXVsdDp0aHJvdyB3aW5kb3cuY29uc29sZS5lcnJvcihoKSxFcnJvcihcIm5vdCBpbXBsZW1lbnRlZFwiKTt9fWMrPWh9cmV0dXJuIGN9ZnVuY3Rpb24gVShhKXtDLmN1cnJlbnROb2RlPWE7cmV0dXJuIEMucGFyZW50Tm9kZSgpfWZ1bmN0aW9uIEthKGEpe0MuY3VycmVudE5vZGU9YTtyZXR1cm4gQy5maXJzdENoaWxkKCl9ZnVuY3Rpb24gTGEoYSl7Qy5jdXJyZW50Tm9kZT1hO3JldHVybiBDLmxhc3RDaGlsZCgpfWZ1bmN0aW9uIFFiKGEpe0MuY3VycmVudE5vZGU9YTtyZXR1cm4gQy5wcmV2aW91c1NpYmxpbmcoKX1mdW5jdGlvbiBSYihhKXtDLmN1cnJlbnROb2RlPWE7cmV0dXJuIEMubmV4dFNpYmxpbmcoKX1mdW5jdGlvbiBTKGEpe3ZhciBiPVtdO0MuY3VycmVudE5vZGU9YTtmb3IoYT1DLmZpcnN0Q2hpbGQoKTthOyliLnB1c2goYSksYT1DLm5leHRTaWJsaW5nKCk7cmV0dXJuIGJ9ZnVuY3Rpb24gU2IoYSl7RC5jdXJyZW50Tm9kZT1cbmE7cmV0dXJuIEQucGFyZW50Tm9kZSgpfWZ1bmN0aW9uIFRiKGEpe0QuY3VycmVudE5vZGU9YTtyZXR1cm4gRC5maXJzdENoaWxkKCl9ZnVuY3Rpb24gVWIoYSl7RC5jdXJyZW50Tm9kZT1hO3JldHVybiBELmxhc3RDaGlsZCgpfWZ1bmN0aW9uIFZiKGEpe0QuY3VycmVudE5vZGU9YTtyZXR1cm4gRC5wcmV2aW91c1NpYmxpbmcoKX1mdW5jdGlvbiBXYihhKXtELmN1cnJlbnROb2RlPWE7cmV0dXJuIEQubmV4dFNpYmxpbmcoKX1mdW5jdGlvbiBYYihhKXt2YXIgYj1bXTtELmN1cnJlbnROb2RlPWE7Zm9yKGE9RC5maXJzdENoaWxkKCk7YTspYi5wdXNoKGEpLGE9RC5uZXh0U2libGluZygpO3JldHVybiBifWZ1bmN0aW9uIFliKGEpe3JldHVybiBSYShhLGZ1bmN0aW9uKGEpe3JldHVybiBTKGEpfSl9ZnVuY3Rpb24gWmIoYSl7c3dpdGNoKGEubm9kZVR5cGUpe2Nhc2UgTm9kZS5FTEVNRU5UX05PREU6Y2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6YT1kb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGEsXG5Ob2RlRmlsdGVyLlNIT1dfVEVYVCxudWxsLCExKTtmb3IodmFyIGI9XCJcIixjO2M9YS5uZXh0Tm9kZSgpOyliKz1jLm5vZGVWYWx1ZTtyZXR1cm4gYjtkZWZhdWx0OnJldHVybiBhLm5vZGVWYWx1ZX19ZnVuY3Rpb24gSyhhLGIsYyl7Zm9yKHZhciBkIGluIGIpe3ZhciBlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxkKTtlJiZlLmNvbmZpZ3VyYWJsZXx8IWUmJmM/T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsZCxiW2RdKTpjJiZjb25zb2xlLndhcm4oXCJDb3VsZCBub3QgZGVmaW5lXCIsZCxcIm9uXCIsYSl9fWZ1bmN0aW9uIFAoYSl7SyhhLCRiKTtLKGEsU2EpO0soYSxUYSl9ZnVuY3Rpb24gYWMoYSxiLGMpe0piKGEpO2M9Y3x8bnVsbDthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTtiLl9fc2hhZHk9Yi5fX3NoYWR5fHx7fTtjJiYoYy5fX3NoYWR5PWMuX19zaGFkeXx8e30pO2EuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc9Yz9jLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nOmIubGFzdENoaWxkO1xudmFyIGQ9YS5fX3NoYWR5LnByZXZpb3VzU2libGluZztkJiZkLl9fc2hhZHkmJihkLl9fc2hhZHkubmV4dFNpYmxpbmc9YSk7KGQ9YS5fX3NoYWR5Lm5leHRTaWJsaW5nPWMpJiZkLl9fc2hhZHkmJihkLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWEpO2EuX19zaGFkeS5wYXJlbnROb2RlPWI7Yz9jPT09Yi5fX3NoYWR5LmZpcnN0Q2hpbGQmJihiLl9fc2hhZHkuZmlyc3RDaGlsZD1hKTooYi5fX3NoYWR5Lmxhc3RDaGlsZD1hLGIuX19zaGFkeS5maXJzdENoaWxkfHwoYi5fX3NoYWR5LmZpcnN0Q2hpbGQ9YSkpO2IuX19zaGFkeS5jaGlsZE5vZGVzPW51bGx9ZnVuY3Rpb24gVWEoYSxiLGMpe2lmKGI9PT1hKXRocm93IEVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ2FwcGVuZENoaWxkJyBvbiAnTm9kZSc6IFRoZSBuZXcgY2hpbGQgZWxlbWVudCBjb250YWlucyB0aGUgcGFyZW50LlwiKTtpZihjKXt2YXIgZD1jLl9fc2hhZHkmJmMuX19zaGFkeS5wYXJlbnROb2RlO2lmKHZvaWQgMCE9PWQmJlxuZCE9PWF8fHZvaWQgMD09PWQmJlUoYykhPT1hKXRocm93IEVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ2luc2VydEJlZm9yZScgb24gJ05vZGUnOiBUaGUgbm9kZSBiZWZvcmUgd2hpY2ggdGhlIG5ldyBub2RlIGlzIHRvIGJlIGluc2VydGVkIGlzIG5vdCBhIGNoaWxkIG9mIHRoaXMgbm9kZS5cIik7fWlmKGM9PT1iKXJldHVybiBiO2IucGFyZW50Tm9kZSYmVmEoYi5wYXJlbnROb2RlLGIpO2Q9WihhKTt2YXIgZTtpZihlPWQpYTp7aWYoIWIuX19ub0luc2VydGlvblBvaW50KXt2YXIgZjtcInNsb3RcIj09PWIubG9jYWxOYW1lP2Y9W2JdOmIucXVlcnlTZWxlY3RvckFsbCYmKGY9Yi5xdWVyeVNlbGVjdG9yQWxsKFwic2xvdFwiKSk7aWYoZiYmZi5sZW5ndGgpe2U9ZjticmVhayBhfX1lPXZvaWQgMH0oZj1lKSYmZC5RYShmKTtkJiYoXCJzbG90XCI9PT1hLmxvY2FsTmFtZXx8ZikmJmQuTCgpO2lmKFQoYSkpe2Q9YztJYihhKTthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTt2b2lkIDAhPT1hLl9fc2hhZHkuZmlyc3RDaGlsZCYmXG4oYS5fX3NoYWR5LmNoaWxkTm9kZXM9bnVsbCk7aWYoYi5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSl7Zj1iLmNoaWxkTm9kZXM7Zm9yKGU9MDtlPGYubGVuZ3RoO2UrKylhYyhmW2VdLGEsZCk7Yi5fX3NoYWR5PWIuX19zaGFkeXx8e307ZD12b2lkIDAhPT1iLl9fc2hhZHkuZmlyc3RDaGlsZD9udWxsOnZvaWQgMDtiLl9fc2hhZHkuZmlyc3RDaGlsZD1iLl9fc2hhZHkubGFzdENoaWxkPWQ7Yi5fX3NoYWR5LmNoaWxkTm9kZXM9ZH1lbHNlIGFjKGIsYSxkKTtpZihXYShhKSl7YS5fX3NoYWR5LnJvb3QuTCgpO3ZhciBrPSEwfWVsc2UgYS5fX3NoYWR5LnJvb3QmJihrPSEwKX1rfHwoaz1HKGEpP2EuaG9zdDphLGM/KGM9YmMoYyksWGEuY2FsbChrLGIsYykpOmNjLmNhbGwoayxiKSk7ZGMoYSxiKTtyZXR1cm4gYn1mdW5jdGlvbiBWYShhLGIpe2lmKGIucGFyZW50Tm9kZSE9PWEpdGhyb3cgRXJyb3IoXCJUaGUgbm9kZSB0byBiZSByZW1vdmVkIGlzIG5vdCBhIGNoaWxkIG9mIHRoaXMgbm9kZTogXCIrXG5iKTt2YXIgYz1aKGIpO2lmKFQoYSkpe2IuX19zaGFkeT1iLl9fc2hhZHl8fHt9O2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O2I9PT1hLl9fc2hhZHkuZmlyc3RDaGlsZCYmKGEuX19zaGFkeS5maXJzdENoaWxkPWIuX19zaGFkeS5uZXh0U2libGluZyk7Yj09PWEuX19zaGFkeS5sYXN0Q2hpbGQmJihhLl9fc2hhZHkubGFzdENoaWxkPWIuX19zaGFkeS5wcmV2aW91c1NpYmxpbmcpO3ZhciBkPWIuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc7dmFyIGU9Yi5fX3NoYWR5Lm5leHRTaWJsaW5nO2QmJihkLl9fc2hhZHk9ZC5fX3NoYWR5fHx7fSxkLl9fc2hhZHkubmV4dFNpYmxpbmc9ZSk7ZSYmKGUuX19zaGFkeT1lLl9fc2hhZHl8fHt9LGUuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc9ZCk7Yi5fX3NoYWR5LnBhcmVudE5vZGU9Yi5fX3NoYWR5LnByZXZpb3VzU2libGluZz1iLl9fc2hhZHkubmV4dFNpYmxpbmc9dm9pZCAwO3ZvaWQgMCE9PWEuX19zaGFkeS5jaGlsZE5vZGVzJiYoYS5fX3NoYWR5LmNoaWxkTm9kZXM9XG5udWxsKTtpZihXYShhKSl7YS5fX3NoYWR5LnJvb3QuTCgpO3ZhciBmPSEwfX1lYyhiKTtjJiYoKGU9YSYmXCJzbG90XCI9PT1hLmxvY2FsTmFtZSkmJihmPSEwKSwoKGQ9Yy5UYShiKSl8fGUpJiZjLkwoKSk7Znx8KGY9RyhhKT9hLmhvc3Q6YSwoIWEuX19zaGFkeS5yb290JiZcInNsb3RcIiE9PWIubG9jYWxOYW1lfHxmPT09VShiKSkmJmJhLmNhbGwoZixiKSk7ZGMoYSxudWxsLGIpO3JldHVybiBifWZ1bmN0aW9uIGVjKGEpe2lmKGEuX19zaGFkeSYmdm9pZCAwIT09YS5fX3NoYWR5Lm1hKWZvcih2YXIgYj1hLmNoaWxkTm9kZXMsYz0wLGQ9Yi5sZW5ndGgsZTtjPGQmJihlPWJbY10pO2MrKyllYyhlKTthLl9fc2hhZHkmJihhLl9fc2hhZHkubWE9dm9pZCAwKX1mdW5jdGlvbiBiYyhhKXt2YXIgYj1hO2EmJlwic2xvdFwiPT09YS5sb2NhbE5hbWUmJihiPShiPWEuX19zaGFkeSYmYS5fX3NoYWR5LlIpJiZiLmxlbmd0aD9iWzBdOmJjKGEubmV4dFNpYmxpbmcpKTtyZXR1cm4gYn1mdW5jdGlvbiBXYShhKXtyZXR1cm4oYT1cbmEmJmEuX19zaGFkeSYmYS5fX3NoYWR5LnJvb3QpJiZhLnRhKCl9ZnVuY3Rpb24gZmMoYSxiKXtcInNsb3RcIj09PWI/KGE9YS5wYXJlbnROb2RlLFdhKGEpJiZhLl9fc2hhZHkucm9vdC5MKCkpOlwic2xvdFwiPT09YS5sb2NhbE5hbWUmJlwibmFtZVwiPT09YiYmKGI9WihhKSkmJihiLlZhKGEpLGIuTCgpKX1mdW5jdGlvbiBkYyhhLGIsYyl7aWYoYT1hLl9fc2hhZHkmJmEuX19zaGFkeS5UKWImJmEuYWRkZWROb2Rlcy5wdXNoKGIpLGMmJmEucmVtb3ZlZE5vZGVzLnB1c2goYyksYS5oYigpfWZ1bmN0aW9uIGdjKGEpe2lmKGEmJmEubm9kZVR5cGUpe2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O3ZhciBiPWEuX19zaGFkeS5tYTt2b2lkIDA9PT1iJiYoRyhhKT9iPWE6Yj0oYj1hLnBhcmVudE5vZGUpP2djKGIpOmEsY2EuY2FsbChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsYSkmJihhLl9fc2hhZHkubWE9YikpO3JldHVybiBifX1mdW5jdGlvbiBuYShhLGIsYyl7dmFyIGQ9W107aGMoYS5jaGlsZE5vZGVzLFxuYixjLGQpO3JldHVybiBkfWZ1bmN0aW9uIGhjKGEsYixjLGQpe2Zvcih2YXIgZT0wLGY9YS5sZW5ndGgsaztlPGYmJihrPWFbZV0pO2UrKyl7dmFyIGg7aWYoaD1rLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpe2g9azt2YXIgdz1iLGc9YyxtPWQsbD13KGgpO2wmJm0ucHVzaChoKTtnJiZnKGwpP2g9bDooaGMoaC5jaGlsZE5vZGVzLHcsZyxtKSxoPXZvaWQgMCl9aWYoaClicmVha319ZnVuY3Rpb24gaWMoYSl7YT1hLmdldFJvb3ROb2RlKCk7RyhhKSYmYS52YSgpfWZ1bmN0aW9uIGpjKGEsYixjKXtvYXx8KG9hPXdpbmRvdy5TaGFkeUNTUyYmd2luZG93LlNoYWR5Q1NTLlNjb3BpbmdTaGltKTtvYSYmXCJjbGFzc1wiPT09Yj9vYS5zZXRFbGVtZW50Q2xhc3MoYSxjKTooa2MuY2FsbChhLGIsYyksZmMoYSxiKSl9ZnVuY3Rpb24gbGMoYSxiKXtpZihhLm93bmVyRG9jdW1lbnQhPT1kb2N1bWVudClyZXR1cm4gWWEuY2FsbChkb2N1bWVudCxhLGIpO3ZhciBjPVlhLmNhbGwoZG9jdW1lbnQsXG5hLCExKTtpZihiKXthPWEuY2hpbGROb2RlcztiPTA7Zm9yKHZhciBkO2I8YS5sZW5ndGg7YisrKWQ9bGMoYVtiXSwhMCksYy5hcHBlbmRDaGlsZChkKX1yZXR1cm4gY31mdW5jdGlvbiBaYShhLGIpe3ZhciBjPVtdLGQ9YTtmb3IoYT1hPT09d2luZG93P3dpbmRvdzphLmdldFJvb3ROb2RlKCk7ZDspYy5wdXNoKGQpLGQ9ZC5hc3NpZ25lZFNsb3Q/ZC5hc3NpZ25lZFNsb3Q6ZC5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSYmZC5ob3N0JiYoYnx8ZCE9PWEpP2QuaG9zdDpkLnBhcmVudE5vZGU7Y1tjLmxlbmd0aC0xXT09PWRvY3VtZW50JiZjLnB1c2god2luZG93KTtyZXR1cm4gY31mdW5jdGlvbiBtYyhhLGIpe2lmKCFHKXJldHVybiBhO2E9WmEoYSwhMCk7Zm9yKHZhciBjPTAsZCxlLGYsaztjPGIubGVuZ3RoO2MrKylpZihkPWJbY10sZj1kPT09d2luZG93P3dpbmRvdzpkLmdldFJvb3ROb2RlKCksZiE9PWUmJihrPWEuaW5kZXhPZihmKSxlPWYpLCFHKGYpfHxcbi0xPGspcmV0dXJuIGR9ZnVuY3Rpb24gJGEoYSl7ZnVuY3Rpb24gYihiLGQpe2I9bmV3IGEoYixkKTtiLmVhPWQmJiEhZC5jb21wb3NlZDtyZXR1cm4gYn1BZChiLGEpO2IucHJvdG90eXBlPWEucHJvdG90eXBlO3JldHVybiBifWZ1bmN0aW9uIG5jKGEsYixjKXtpZihjPWIuX19oYW5kbGVycyYmYi5fX2hhbmRsZXJzW2EudHlwZV0mJmIuX19oYW5kbGVyc1thLnR5cGVdW2NdKWZvcih2YXIgZD0wLGU7KGU9Y1tkXSkmJmEudGFyZ2V0IT09YS5yZWxhdGVkVGFyZ2V0JiYoZS5jYWxsKGIsYSksIWEuS2EpO2QrKyk7fWZ1bmN0aW9uIEdkKGEpe3ZhciBiPWEuY29tcG9zZWRQYXRoKCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJjdXJyZW50VGFyZ2V0XCIse2dldDpmdW5jdGlvbigpe3JldHVybiBkfSxjb25maWd1cmFibGU6ITB9KTtmb3IodmFyIGM9Yi5sZW5ndGgtMTswPD1jO2MtLSl7dmFyIGQ9YltjXTtuYyhhLGQsXCJjYXB0dXJlXCIpO2lmKGEuZmEpcmV0dXJufU9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFxuXCJldmVudFBoYXNlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBFdmVudC5BVF9UQVJHRVR9fSk7dmFyIGU7Zm9yKGM9MDtjPGIubGVuZ3RoO2MrKyl7ZD1iW2NdO3ZhciBmPWQuX19zaGFkeSYmZC5fX3NoYWR5LnJvb3Q7aWYoMD09PWN8fGYmJmY9PT1lKWlmKG5jKGEsZCxcImJ1YmJsZVwiKSxkIT09d2luZG93JiYoZT1kLmdldFJvb3ROb2RlKCkpLGEuZmEpYnJlYWt9fWZ1bmN0aW9uIG9jKGEsYixjLGQsZSxmKXtmb3IodmFyIGs9MDtrPGEubGVuZ3RoO2srKyl7dmFyIGg9YVtrXSx3PWgudHlwZSxnPWguY2FwdHVyZSxtPWgub25jZSxsPWgucGFzc2l2ZTtpZihiPT09aC5ub2RlJiZjPT09dyYmZD09PWcmJmU9PT1tJiZmPT09bClyZXR1cm4ga31yZXR1cm4tMX1mdW5jdGlvbiBwYyhhLGIsYyl7aWYoYil7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBjKXt2YXIgZD0hIWMuY2FwdHVyZTt2YXIgZT0hIWMub25jZTt2YXIgZj0hIWMucGFzc2l2ZX1lbHNlIGQ9ISFjLGY9ZT0hMTt2YXIgaz1jJiZjLmdhfHxcbnRoaXMsaD1iW2RhXTtpZihoKXtpZigtMTxvYyhoLGssYSxkLGUsZikpcmV0dXJufWVsc2UgYltkYV09W107aD1mdW5jdGlvbihkKXtlJiZ0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxiLGMpO2QuX190YXJnZXR8fHFjKGQpO2lmKGshPT10aGlzKXt2YXIgZj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGQsXCJjdXJyZW50VGFyZ2V0XCIpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShkLFwiY3VycmVudFRhcmdldFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4ga30sY29uZmlndXJhYmxlOiEwfSl9aWYoZC5jb21wb3NlZHx8LTE8ZC5jb21wb3NlZFBhdGgoKS5pbmRleE9mKGspKWlmKGQudGFyZ2V0PT09ZC5yZWxhdGVkVGFyZ2V0KWQuZXZlbnRQaGFzZT09PUV2ZW50LkJVQkJMSU5HX1BIQVNFJiZkLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO2Vsc2UgaWYoZC5ldmVudFBoYXNlPT09RXZlbnQuQ0FQVFVSSU5HX1BIQVNFfHxkLmJ1YmJsZXN8fGQudGFyZ2V0PT09ayl7dmFyIGg9XG5cIm9iamVjdFwiPT09dHlwZW9mIGImJmIuaGFuZGxlRXZlbnQ/Yi5oYW5kbGVFdmVudChkKTpiLmNhbGwoayxkKTtrIT09dGhpcyYmKGY/KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLFwiY3VycmVudFRhcmdldFwiLGYpLGY9bnVsbCk6ZGVsZXRlIGQuY3VycmVudFRhcmdldCk7cmV0dXJuIGh9fTtiW2RhXS5wdXNoKHtub2RlOnRoaXMsdHlwZTphLGNhcHR1cmU6ZCxvbmNlOmUscGFzc2l2ZTpmLGxiOmh9KTthYlthXT8odGhpcy5fX2hhbmRsZXJzPXRoaXMuX19oYW5kbGVyc3x8e30sdGhpcy5fX2hhbmRsZXJzW2FdPXRoaXMuX19oYW5kbGVyc1thXXx8e2NhcHR1cmU6W10sYnViYmxlOltdfSx0aGlzLl9faGFuZGxlcnNbYV1bZD9cImNhcHR1cmVcIjpcImJ1YmJsZVwiXS5wdXNoKGgpKToodGhpcyBpbnN0YW5jZW9mIFdpbmRvdz9yYzpzYykuY2FsbCh0aGlzLGEsaCxjKX19ZnVuY3Rpb24gdGMoYSxiLGMpe2lmKGIpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyl7dmFyIGQ9ISFjLmNhcHR1cmU7dmFyIGU9XG4hIWMub25jZTt2YXIgZj0hIWMucGFzc2l2ZX1lbHNlIGQ9ISFjLGY9ZT0hMTt2YXIgaz1jJiZjLmdhfHx0aGlzLGg9dm9pZCAwO3ZhciBnPW51bGw7dHJ5e2c9YltkYV19Y2F0Y2gocil7fWcmJihlPW9jKGcsayxhLGQsZSxmKSwtMTxlJiYoaD1nLnNwbGljZShlLDEpWzBdLmxiLGcubGVuZ3RofHwoYltkYV09dm9pZCAwKSkpOyh0aGlzIGluc3RhbmNlb2YgV2luZG93P3VjOnZjKS5jYWxsKHRoaXMsYSxofHxiLGMpO2gmJmFiW2FdJiZ0aGlzLl9faGFuZGxlcnMmJnRoaXMuX19oYW5kbGVyc1thXSYmKGE9dGhpcy5fX2hhbmRsZXJzW2FdW2Q/XCJjYXB0dXJlXCI6XCJidWJibGVcIl0saD1hLmluZGV4T2YoaCksLTE8aCYmYS5zcGxpY2UoaCwxKSl9fWZ1bmN0aW9uIEhkKCl7Zm9yKHZhciBhIGluIGFiKXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGEsZnVuY3Rpb24oYSl7YS5fX3RhcmdldHx8KHFjKGEpLEdkKGEpKX0sITApfWZ1bmN0aW9uIHFjKGEpe2EuX190YXJnZXQ9YS50YXJnZXQ7YS5yYT1cbmEucmVsYXRlZFRhcmdldDtpZihFLlMpe3ZhciBiPXdjLGM9T2JqZWN0LmdldFByb3RvdHlwZU9mKGEpO2lmKCFjLmhhc093blByb3BlcnR5KFwiX19wYXRjaFByb3RvXCIpKXt2YXIgZD1PYmplY3QuY3JlYXRlKGMpO2QubmI9YztNYShkLGIpO2MuX19wYXRjaFByb3RvPWR9YS5fX3Byb3RvX189Yy5fX3BhdGNoUHJvdG99ZWxzZSBNYShhLHdjKX1mdW5jdGlvbiBlYShhLGIpe3JldHVybntpbmRleDphLFU6W10sVzpifX1mdW5jdGlvbiBJZChhLGIsYyxkKXt2YXIgZT0wLGY9MCxrPTAsaD0wLGc9TWF0aC5taW4oYi1lLGQtZik7aWYoMD09ZSYmMD09ZilhOntmb3Ioaz0wO2s8ZztrKyspaWYoYVtrXSE9PWNba10pYnJlYWsgYTtrPWd9aWYoYj09YS5sZW5ndGgmJmQ9PWMubGVuZ3RoKXtoPWEubGVuZ3RoO2Zvcih2YXIgcj1jLmxlbmd0aCxtPTA7bTxnLWsmJkpkKGFbLS1oXSxjWy0tcl0pOyltKys7aD1tfWUrPWs7Zis9aztiLT1oO2QtPWg7aWYoMD09Yi1lJiYwPT1kLWYpcmV0dXJuW107XG5pZihlPT1iKXtmb3IoYj1lYShlLDApO2Y8ZDspYi5VLnB1c2goY1tmKytdKTtyZXR1cm5bYl19aWYoZj09ZClyZXR1cm5bZWEoZSxiLWUpXTtnPWU7az1mO2Q9ZC1rKzE7aD1iLWcrMTtiPUFycmF5KGQpO2ZvcihyPTA7cjxkO3IrKyliW3JdPUFycmF5KGgpLGJbcl1bMF09cjtmb3Iocj0wO3I8aDtyKyspYlswXVtyXT1yO2ZvcihyPTE7cjxkO3IrKylmb3IobT0xO208aDttKyspaWYoYVtnK20tMV09PT1jW2srci0xXSliW3JdW21dPWJbci0xXVttLTFdO2Vsc2V7dmFyIGw9YltyLTFdW21dKzEsbj1iW3JdW20tMV0rMTtiW3JdW21dPWw8bj9sOm59Zz1iLmxlbmd0aC0xO2s9YlswXS5sZW5ndGgtMTtkPWJbZ11ba107Zm9yKGE9W107MDxnfHwwPGs7KTA9PWc/KGEucHVzaCgyKSxrLS0pOjA9PWs/KGEucHVzaCgzKSxnLS0pOihoPWJbZy0xXVtrLTFdLHI9YltnLTFdW2tdLG09YltnXVtrLTFdLGw9cjxtP3I8aD9yOmg6bTxoP206aCxsPT1oPyhoPT1kP2EucHVzaCgwKTooYS5wdXNoKDEpLFxuZD1oKSxnLS0say0tKTpsPT1yPyhhLnB1c2goMyksZy0tLGQ9cik6KGEucHVzaCgyKSxrLS0sZD1tKSk7YS5yZXZlcnNlKCk7Yj12b2lkIDA7Zz1bXTtmb3Ioaz0wO2s8YS5sZW5ndGg7aysrKXN3aXRjaChhW2tdKXtjYXNlIDA6YiYmKGcucHVzaChiKSxiPXZvaWQgMCk7ZSsrO2YrKzticmVhaztjYXNlIDE6Ynx8KGI9ZWEoZSwwKSk7Yi5XKys7ZSsrO2IuVS5wdXNoKGNbZl0pO2YrKzticmVhaztjYXNlIDI6Ynx8KGI9ZWEoZSwwKSk7Yi5XKys7ZSsrO2JyZWFrO2Nhc2UgMzpifHwoYj1lYShlLDApKSxiLlUucHVzaChjW2ZdKSxmKyt9YiYmZy5wdXNoKGIpO3JldHVybiBnfWZ1bmN0aW9uIEpkKGEsYil7cmV0dXJuIGE9PT1ifWZ1bmN0aW9uIHhjKGEpe3ZhciBiPVtdO2RvIGIudW5zaGlmdChhKTt3aGlsZShhPWEucGFyZW50Tm9kZSk7cmV0dXJuIGJ9ZnVuY3Rpb24geWMoYSl7aWMoYSk7cmV0dXJuIGEuX19zaGFkeSYmYS5fX3NoYWR5LmFzc2lnbmVkU2xvdHx8bnVsbH1mdW5jdGlvbiBMKGEsXG5iKXtmb3IodmFyIGM9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYiksZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdLGY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiLGUpO2YudmFsdWU/YVtlXT1mLnZhbHVlOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGUsZil9fWZ1bmN0aW9uIEtkKCl7dmFyIGE9d2luZG93LmN1c3RvbUVsZW1lbnRzJiZ3aW5kb3cuY3VzdG9tRWxlbWVudHMubmF0aXZlSFRNTEVsZW1lbnR8fEhUTUxFbGVtZW50O0wod2luZG93Lk5vZGUucHJvdG90eXBlLExkKTtMKHdpbmRvdy5XaW5kb3cucHJvdG90eXBlLE1kKTtMKHdpbmRvdy5UZXh0LnByb3RvdHlwZSxOZCk7TCh3aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUsYmIpO0wod2luZG93LkVsZW1lbnQucHJvdG90eXBlLHpjKTtMKHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUsQWMpO3dpbmRvdy5IVE1MU2xvdEVsZW1lbnQmJkwod2luZG93LkhUTUxTbG90RWxlbWVudC5wcm90b3R5cGUsXG5CYyk7TChhLnByb3RvdHlwZSxPZCk7RS5TJiYoUCh3aW5kb3cuTm9kZS5wcm90b3R5cGUpLFAod2luZG93LlRleHQucHJvdG90eXBlKSxQKHdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSksUCh3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpLFAoYS5wcm90b3R5cGUpLFAod2luZG93LkRvY3VtZW50LnByb3RvdHlwZSksd2luZG93LkhUTUxTbG90RWxlbWVudCYmUCh3aW5kb3cuSFRNTFNsb3RFbGVtZW50LnByb3RvdHlwZSkpfWZ1bmN0aW9uIENjKGEpe3ZhciBiPVBkLmhhcyhhKTthPS9eW2Etel1bLjAtOV9hLXpdKi1bXFwtLjAtOV9hLXpdKiQvLnRlc3QoYSk7cmV0dXJuIWImJmF9ZnVuY3Rpb24gdChhKXt2YXIgYj1hLmlzQ29ubmVjdGVkO2lmKHZvaWQgMCE9PWIpcmV0dXJuIGI7Zm9yKDthJiYhKGEuX19DRV9pc0ltcG9ydERvY3VtZW50fHxhIGluc3RhbmNlb2YgRG9jdW1lbnQpOylhPWEucGFyZW50Tm9kZXx8KHdpbmRvdy5TaGFkb3dSb290JiZhIGluc3RhbmNlb2YgU2hhZG93Um9vdD9cbmEuaG9zdDp2b2lkIDApO3JldHVybiEoIWF8fCEoYS5fX0NFX2lzSW1wb3J0RG9jdW1lbnR8fGEgaW5zdGFuY2VvZiBEb2N1bWVudCkpfWZ1bmN0aW9uIGNiKGEsYil7Zm9yKDtiJiZiIT09YSYmIWIubmV4dFNpYmxpbmc7KWI9Yi5wYXJlbnROb2RlO3JldHVybiBiJiZiIT09YT9iLm5leHRTaWJsaW5nOm51bGx9ZnVuY3Rpb24gTyhhLGIsYyl7Yz1jP2M6bmV3IFNldDtmb3IodmFyIGQ9YTtkOyl7aWYoZC5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXt2YXIgZT1kO2IoZSk7dmFyIGY9ZS5sb2NhbE5hbWU7aWYoXCJsaW5rXCI9PT1mJiZcImltcG9ydFwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpe2Q9ZS5pbXBvcnQ7aWYoZCBpbnN0YW5jZW9mIE5vZGUmJiFjLmhhcyhkKSlmb3IoYy5hZGQoZCksZD1kLmZpcnN0Q2hpbGQ7ZDtkPWQubmV4dFNpYmxpbmcpTyhkLGIsYyk7ZD1jYihhLGUpO2NvbnRpbnVlfWVsc2UgaWYoXCJ0ZW1wbGF0ZVwiPT09Zil7ZD1jYihhLGUpO2NvbnRpbnVlfWlmKGU9XG5lLl9fQ0Vfc2hhZG93Um9vdClmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpTyhlLGIsYyl9ZD1kLmZpcnN0Q2hpbGQ/ZC5maXJzdENoaWxkOmNiKGEsZCl9fWZ1bmN0aW9uIHgoYSxiLGMpe2FbYl09Y31mdW5jdGlvbiBkYihhKXthPWEucmVwbGFjZShGLllhLFwiXCIpLnJlcGxhY2UoRi5wb3J0LFwiXCIpO3ZhciBiPURjLGM9YSxkPW5ldyBCYTtkLnN0YXJ0PTA7ZC5lbmQ9Yy5sZW5ndGg7Zm9yKHZhciBlPWQsZj0wLGs9Yy5sZW5ndGg7ZjxrO2YrKylpZihcIntcIj09PWNbZl0pe2UucnVsZXN8fChlLnJ1bGVzPVtdKTt2YXIgaD1lLGc9aC5ydWxlc1toLnJ1bGVzLmxlbmd0aC0xXXx8bnVsbDtlPW5ldyBCYTtlLnN0YXJ0PWYrMTtlLnBhcmVudD1oO2UucHJldmlvdXM9ZztoLnJ1bGVzLnB1c2goZSl9ZWxzZVwifVwiPT09Y1tmXSYmKGUuZW5kPWYrMSxlPWUucGFyZW50fHxkKTtyZXR1cm4gYihkLGEpfWZ1bmN0aW9uIERjKGEsYil7dmFyIGM9Yi5zdWJzdHJpbmcoYS5zdGFydCxcbmEuZW5kLTEpO2EucGFyc2VkQ3NzVGV4dD1hLmNzc1RleHQ9Yy50cmltKCk7YS5wYXJlbnQmJihjPWIuc3Vic3RyaW5nKGEucHJldmlvdXM/YS5wcmV2aW91cy5lbmQ6YS5wYXJlbnQuc3RhcnQsYS5zdGFydC0xKSxjPVFkKGMpLGM9Yy5yZXBsYWNlKEYuQmEsXCIgXCIpLGM9Yy5zdWJzdHJpbmcoYy5sYXN0SW5kZXhPZihcIjtcIikrMSksYz1hLnBhcnNlZFNlbGVjdG9yPWEuc2VsZWN0b3I9Yy50cmltKCksYS5hdFJ1bGU9MD09PWMuaW5kZXhPZihcIkBcIiksYS5hdFJ1bGU/MD09PWMuaW5kZXhPZihcIkBtZWRpYVwiKT9hLnR5cGU9SS5NRURJQV9SVUxFOmMubWF0Y2goRi5jYikmJihhLnR5cGU9SS5kYSxhLmtleWZyYW1lc05hbWU9YS5zZWxlY3Rvci5zcGxpdChGLkJhKS5wb3AoKSk6YS50eXBlPTA9PT1jLmluZGV4T2YoXCItLVwiKT9JLm5hOkkuU1RZTEVfUlVMRSk7aWYoYz1hLnJ1bGVzKWZvcih2YXIgZD0wLGU9Yy5sZW5ndGgsZjtkPGUmJihmPWNbZF0pO2QrKylEYyhmLGIpO3JldHVybiBhfWZ1bmN0aW9uIFFkKGEpe3JldHVybiBhLnJlcGxhY2UoL1xcXFwoWzAtOWEtZl17MSw2fSlcXHMvZ2ksXG5mdW5jdGlvbihhLGMpe2E9Yztmb3IoYz02LWEubGVuZ3RoO2MtLTspYT1cIjBcIithO3JldHVyblwiXFxcXFwiK2F9KX1mdW5jdGlvbiBFYyhhLGIsYyl7Yz12b2lkIDA9PT1jP1wiXCI6Yzt2YXIgZD1cIlwiO2lmKGEuY3NzVGV4dHx8YS5ydWxlcyl7dmFyIGU9YS5ydWxlcyxmO2lmKGY9ZSlmPWVbMF0sZj0hKGYmJmYuc2VsZWN0b3ImJjA9PT1mLnNlbGVjdG9yLmluZGV4T2YoXCItLVwiKSk7aWYoZil7Zj0wO2Zvcih2YXIgaz1lLmxlbmd0aCxoO2Y8ayYmKGg9ZVtmXSk7ZisrKWQ9RWMoaCxiLGQpfWVsc2UgYj9iPWEuY3NzVGV4dDooYj1hLmNzc1RleHQsYj1iLnJlcGxhY2UoRi53YSxcIlwiKS5yZXBsYWNlKEYuQWEsXCJcIiksYj1iLnJlcGxhY2UoRi5lYixcIlwiKS5yZXBsYWNlKEYuamIsXCJcIikpLChkPWIudHJpbSgpKSYmKGQ9XCIgIFwiK2QrXCJcXG5cIil9ZCYmKGEuc2VsZWN0b3ImJihjKz1hLnNlbGVjdG9yK1wiIHtcXG5cIiksYys9ZCxhLnNlbGVjdG9yJiYoYys9XCJ9XFxuXFxuXCIpKTtyZXR1cm4gY31mdW5jdGlvbiBGYyhhKXtBPVxuYSYmYS5zaGltY3NzcHJvcGVydGllcz8hMTp6fHwhKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FwcGxlV2ViS2l0XFwvNjAxfEVkZ2VcXC8xNS8pfHwhd2luZG93LkNTU3x8IUNTUy5zdXBwb3J0c3x8IUNTUy5zdXBwb3J0cyhcImJveC1zaGFkb3dcIixcIjAgMCAwIHZhcigtLWZvbylcIikpfWZ1bmN0aW9uIFYoYSxiKXtpZighYSlyZXR1cm5cIlwiO1wic3RyaW5nXCI9PT10eXBlb2YgYSYmKGE9ZGIoYSkpO2ImJlcoYSxiKTtyZXR1cm4gRWMoYSxBKX1mdW5jdGlvbiBwYShhKXshYS5fX2Nzc1J1bGVzJiZhLnRleHRDb250ZW50JiYoYS5fX2Nzc1J1bGVzPWRiKGEudGV4dENvbnRlbnQpKTtyZXR1cm4gYS5fX2Nzc1J1bGVzfHxudWxsfWZ1bmN0aW9uIEdjKGEpe3JldHVybiEhYS5wYXJlbnQmJmEucGFyZW50LnR5cGU9PT1JLmRhfWZ1bmN0aW9uIFcoYSxiLGMsZCl7aWYoYSl7dmFyIGU9ITEsZj1hLnR5cGU7aWYoZCYmZj09PUkuTUVESUFfUlVMRSl7dmFyIGs9YS5zZWxlY3Rvci5tYXRjaChSZCk7XG5rJiYod2luZG93Lm1hdGNoTWVkaWEoa1sxXSkubWF0Y2hlc3x8KGU9ITApKX1mPT09SS5TVFlMRV9SVUxFP2IoYSk6YyYmZj09PUkuZGE/YyhhKTpmPT09SS5uYSYmKGU9ITApO2lmKChhPWEucnVsZXMpJiYhZSl7ZT0wO2Y9YS5sZW5ndGg7Zm9yKHZhciBoO2U8ZiYmKGg9YVtlXSk7ZSsrKVcoaCxiLGMsZCl9fX1mdW5jdGlvbiBlYihhLGIsYyxkKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7YiYmZS5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLGIpO2UudGV4dENvbnRlbnQ9YTtIYyhlLGMsZCk7cmV0dXJuIGV9ZnVuY3Rpb24gSGMoYSxiLGMpe2I9Ynx8ZG9jdW1lbnQuaGVhZDtiLmluc2VydEJlZm9yZShhLGMmJmMubmV4dFNpYmxpbmd8fGIuZmlyc3RDaGlsZCk7UT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKFEpPT09Tm9kZS5ET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkcmJihRPWEpOlE9YX1mdW5jdGlvbiBJYyhhLGIpe3ZhciBjPWEuaW5kZXhPZihcInZhcihcIik7XG5pZigtMT09PWMpcmV0dXJuIGIoYSxcIlwiLFwiXCIsXCJcIik7YTp7dmFyIGQ9MDt2YXIgZT1jKzM7Zm9yKHZhciBmPWEubGVuZ3RoO2U8ZjtlKyspaWYoXCIoXCI9PT1hW2VdKWQrKztlbHNlIGlmKFwiKVwiPT09YVtlXSYmMD09PS0tZClicmVhayBhO2U9LTF9ZD1hLnN1YnN0cmluZyhjKzQsZSk7Yz1hLnN1YnN0cmluZygwLGMpO2E9SWMoYS5zdWJzdHJpbmcoZSsxKSxiKTtlPWQuaW5kZXhPZihcIixcIik7cmV0dXJuLTE9PT1lP2IoYyxkLnRyaW0oKSxcIlwiLGEpOmIoYyxkLnN1YnN0cmluZygwLGUpLnRyaW0oKSxkLnN1YnN0cmluZyhlKzEpLnRyaW0oKSxhKX1mdW5jdGlvbiBxYShhLGIpe3o/YS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGIpOndpbmRvdy5TaGFkeURPTS5uYXRpdmVNZXRob2RzLnNldEF0dHJpYnV0ZS5jYWxsKGEsXCJjbGFzc1wiLGIpfWZ1bmN0aW9uIFIoYSl7dmFyIGI9YS5sb2NhbE5hbWUsYz1cIlwiO2I/LTE8Yi5pbmRleE9mKFwiLVwiKXx8KGM9YixiPWEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImlzXCIpfHxcblwiXCIpOihiPWEuaXMsYz1hLmV4dGVuZHMpO3JldHVybntpczpiLFY6Y319ZnVuY3Rpb24gSmMoYSl7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl07aWYoYy50YXJnZXQhPT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQmJmMudGFyZ2V0IT09ZG9jdW1lbnQuaGVhZClmb3IodmFyIGQ9MDtkPGMuYWRkZWROb2Rlcy5sZW5ndGg7ZCsrKXt2YXIgZT1jLmFkZGVkTm9kZXNbZF07aWYoZS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXt2YXIgZj1lLmdldFJvb3ROb2RlKCk7dmFyIGs9ZTt2YXIgaD1bXTtrLmNsYXNzTGlzdD9oPUFycmF5LmZyb20oay5jbGFzc0xpc3QpOmsgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCYmay5oYXNBdHRyaWJ1dGUoXCJjbGFzc1wiKSYmKGg9ay5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKS5zcGxpdCgvXFxzKy8pKTtrPWg7aD1rLmluZGV4T2YocC5hKTtpZigoaz0tMTxoP2tbaCsxXTpcIlwiKSYmZj09PWUub3duZXJEb2N1bWVudClwLmIoZSxcbmssITApO2Vsc2UgaWYoZi5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSYmKGY9Zi5ob3N0KSlpZihmPVIoZikuaXMsaz09PWYpZm9yKGU9d2luZG93LlNoYWR5RE9NLm5hdGl2ZU1ldGhvZHMucXVlcnlTZWxlY3RvckFsbC5jYWxsKGUsXCI6bm90KC5cIitwLmErXCIpXCIpLGY9MDtmPGUubGVuZ3RoO2YrKylwLmgoZVtmXSxrKTtlbHNlIGsmJnAuYihlLGssITApLHAuYihlLGYpfX19fWZ1bmN0aW9uIFNkKGEpe2lmKGE9cmFbYV0pYS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb249YS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb258fDAsYS5fYXBwbHlTaGltVmFsaWRhdGluZ1ZlcnNpb249YS5fYXBwbHlTaGltVmFsaWRhdGluZ1ZlcnNpb258fDAsYS5fYXBwbHlTaGltTmV4dFZlcnNpb249KGEuX2FwcGx5U2hpbU5leHRWZXJzaW9ufHwwKSsxfWZ1bmN0aW9uIEtjKGEpe3JldHVybiBhLl9hcHBseVNoaW1DdXJyZW50VmVyc2lvbj09PWEuX2FwcGx5U2hpbU5leHRWZXJzaW9ufVxuZnVuY3Rpb24gVGQoYSl7YS5fYXBwbHlTaGltVmFsaWRhdGluZ1ZlcnNpb249YS5fYXBwbHlTaGltTmV4dFZlcnNpb247YS5ifHwoYS5iPSEwLFVkLnRoZW4oZnVuY3Rpb24oKXthLl9hcHBseVNoaW1DdXJyZW50VmVyc2lvbj1hLl9hcHBseVNoaW1OZXh0VmVyc2lvbjthLmI9ITF9KSl9ZnVuY3Rpb24gdWIoYSl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7TGM/TGMoYSk6KGZifHwoZmI9bmV3IFByb21pc2UoZnVuY3Rpb24oYSl7Z2I9YX0pLFwiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGU/Z2IoKTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGZ1bmN0aW9uKCl7XCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZSYmZ2IoKX0pKSxmYi50aGVuKGZ1bmN0aW9uKCl7YSYmYSgpfSkpfSl9KGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxiKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50KXJldHVybiBuZXcgQ3VzdG9tRXZlbnQoYSxcbmIpO3ZhciBjPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7Yy5pbml0Q3VzdG9tRXZlbnQoYSwhIWIuYnViYmxlcywhIWIuY2FuY2VsYWJsZSxiLmRldGFpbCk7cmV0dXJuIGN9ZnVuY3Rpb24gYyhhKXtpZihtKXJldHVybiBhLm93bmVyRG9jdW1lbnQhPT1kb2N1bWVudD9hLm93bmVyRG9jdW1lbnQ6bnVsbDt2YXIgYj1hLl9faW1wb3J0RG9jO2lmKCFiJiZhLnBhcmVudE5vZGUpe2I9YS5wYXJlbnROb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmNsb3Nlc3QpYj1iLmNsb3Nlc3QoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2Vsc2UgZm9yKDshaChiKSYmKGI9Yi5wYXJlbnROb2RlKTspO2EuX19pbXBvcnREb2M9Yn1yZXR1cm4gYn1mdW5jdGlvbiBkKGEpe3ZhciBiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdOm5vdChbaW1wb3J0LWRlcGVuZGVuY3ldKVwiKSxjPWIubGVuZ3RoO2M/bChiLGZ1bmN0aW9uKGIpe3JldHVybiBrKGIsZnVuY3Rpb24oKXswPT09XG4tLWMmJmEoKX0pfSk6YSgpfWZ1bmN0aW9uIGUoYSl7ZnVuY3Rpb24gYigpe1wibG9hZGluZ1wiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZSYmZG9jdW1lbnQuYm9keSYmKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsYiksYSgpKX1kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGIpO2IoKX1mdW5jdGlvbiBmKGEpe2UoZnVuY3Rpb24oKXtyZXR1cm4gZChmdW5jdGlvbigpe3JldHVybiBhJiZhKCl9KX0pfWZ1bmN0aW9uIGsoYSxiKXtpZihhLl9fbG9hZGVkKWImJmIoKTtlbHNlIGlmKFwic2NyaXB0XCI9PT1hLmxvY2FsTmFtZSYmIWEuc3JjfHxcInN0eWxlXCI9PT1hLmxvY2FsTmFtZSYmIWEuZmlyc3RDaGlsZClhLl9fbG9hZGVkPSEwLGImJmIoKTtlbHNle3ZhciBjPWZ1bmN0aW9uKGQpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLnR5cGUsYyk7YS5fX2xvYWRlZD0hMDtiJiZiKCl9O2EuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixcbmMpO3omJlwic3R5bGVcIj09PWEubG9jYWxOYW1lfHxhLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGMpfX1mdW5jdGlvbiBoKGEpe3JldHVybiBhLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJlwibGlua1wiPT09YS5sb2NhbE5hbWUmJlwiaW1wb3J0XCI9PT1hLnJlbH1mdW5jdGlvbiBnKCl7dmFyIGE9dGhpczt0aGlzLmE9e307dGhpcy5iPTA7dGhpcy5mPW5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGIpe3JldHVybiBhLmwoYil9KTt0aGlzLmYub2JzZXJ2ZShkb2N1bWVudC5oZWFkLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pO3RoaXMuYyhkb2N1bWVudCl9ZnVuY3Rpb24gbChhLGIsYyl7dmFyIGQ9YT9hLmxlbmd0aDowLGU9Yz8tMToxO2ZvcihjPWM/ZC0xOjA7YzxkJiYwPD1jO2MrPWUpYihhW2NdLGMpfXZhciBtPVwiaW1wb3J0XCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKSxuPW51bGw7ITE9PT1cImN1cnJlbnRTY3JpcHRcImluIGRvY3VtZW50JiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZG9jdW1lbnQsXG5cImN1cnJlbnRTY3JpcHRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG58fChcImNvbXBsZXRlXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlP2RvY3VtZW50LnNjcmlwdHNbZG9jdW1lbnQuc2NyaXB0cy5sZW5ndGgtMV06bnVsbCl9LGNvbmZpZ3VyYWJsZTohMH0pO3ZhciBxPS8odXJsXFwoKShbXildKikoXFwpKS9nLHQ9LyhAaW1wb3J0W1xcc10rKD8hdXJsXFwoKSkoW147XSopKDspL2csdT0vKDxsaW5rW14+XSopKHJlbD1bJ3xcIl0/c3R5bGVzaGVldFsnfFwiXT9bXj5dKj4pL2cscD17WmE6ZnVuY3Rpb24oYSxiKXthLmhyZWYmJmEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLHAuJChhLmdldEF0dHJpYnV0ZShcImhyZWZcIiksYikpO2Euc3JjJiZhLnNldEF0dHJpYnV0ZShcInNyY1wiLHAuJChhLmdldEF0dHJpYnV0ZShcInNyY1wiKSxiKSk7aWYoXCJzdHlsZVwiPT09YS5sb2NhbE5hbWUpe3ZhciBjPXAuQ2EoYS50ZXh0Q29udGVudCxiLHEpO2EudGV4dENvbnRlbnQ9cC5DYShjLGIsdCl9fSxDYTpmdW5jdGlvbihhLFxuYixjKXtyZXR1cm4gYS5yZXBsYWNlKGMsZnVuY3Rpb24oYSxjLGQsZSl7YT1kLnJlcGxhY2UoL1tcIiddL2csXCJcIik7YiYmKGE9cC4kKGEsYikpO3JldHVybiBjK1wiJ1wiK2ErXCInXCIrZX0pfSwkOmZ1bmN0aW9uKGEsYil7aWYodm9pZCAwPT09cC5oYSl7cC5oYT0hMTt0cnl7dmFyIGM9bmV3IFVSTChcImJcIixcImh0dHA6Ly9hXCIpO2MucGF0aG5hbWU9XCJjJTIwZFwiO3AuaGE9XCJodHRwOi8vYS9jJTIwZFwiPT09Yy5ocmVmfWNhdGNoKHNlKXt9fWlmKHAuaGEpcmV0dXJuKG5ldyBVUkwoYSxiKSkuaHJlZjtjPXAuUGE7Y3x8KGM9ZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwidGVtcFwiKSxwLlBhPWMsYy5wYT1jLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpLGMuaGVhZC5hcHBlbmRDaGlsZChjLnBhKSxjLm9hPWMuY3JlYXRlRWxlbWVudChcImFcIikpO2MucGEuaHJlZj1iO2Mub2EuaHJlZj1hO3JldHVybiBjLm9hLmhyZWZ8fGF9fSx2PXthc3luYzohMCxsb2FkOmZ1bmN0aW9uKGEsXG5iLGMpe2lmKGEpaWYoYS5tYXRjaCgvXmRhdGE6Lykpe2E9YS5zcGxpdChcIixcIik7dmFyIGQ9YVsxXTtkPS0xPGFbMF0uaW5kZXhPZihcIjtiYXNlNjRcIik/YXRvYihkKTpkZWNvZGVVUklDb21wb25lbnQoZCk7YihkKX1lbHNle3ZhciBlPW5ldyBYTUxIdHRwUmVxdWVzdDtlLm9wZW4oXCJHRVRcIixhLHYuYXN5bmMpO2Uub25sb2FkPWZ1bmN0aW9uKCl7dmFyIGE9ZS5yZXNwb25zZVVSTHx8ZS5nZXRSZXNwb25zZUhlYWRlcihcIkxvY2F0aW9uXCIpO2EmJjA9PT1hLmluZGV4T2YoXCIvXCIpJiYoYT0obG9jYXRpb24ub3JpZ2lufHxsb2NhdGlvbi5wcm90b2NvbCtcIi8vXCIrbG9jYXRpb24uaG9zdCkrYSk7dmFyIGQ9ZS5yZXNwb25zZXx8ZS5yZXNwb25zZVRleHQ7MzA0PT09ZS5zdGF0dXN8fDA9PT1lLnN0YXR1c3x8MjAwPD1lLnN0YXR1cyYmMzAwPmUuc3RhdHVzP2IoZCxhKTpjKGQpfTtlLnNlbmQoKX1lbHNlIGMoXCJlcnJvcjogaHJlZiBtdXN0IGJlIHNwZWNpZmllZFwiKX19LHo9L1RyaWRlbnQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCl8fFxuL0VkZ2VcXC9cXGQuL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtnLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7YT1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2woYSxmdW5jdGlvbihhKXtyZXR1cm4gYi5oKGEpfSl9O2cucHJvdG90eXBlLmg9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPWEuaHJlZjtpZih2b2lkIDAhPT10aGlzLmFbY10pe3ZhciBkPXRoaXMuYVtjXTtkJiZkLl9fbG9hZGVkJiYoYS5pbXBvcnQ9ZCx0aGlzLmcoYSkpfWVsc2UgdGhpcy5iKyssdGhpcy5hW2NdPVwicGVuZGluZ1wiLHYubG9hZChjLGZ1bmN0aW9uKGEsZCl7YT1iLm0oYSxkfHxjKTtiLmFbY109YTtiLmItLTtiLmMoYSk7Yi5pKCl9LGZ1bmN0aW9uKCl7Yi5hW2NdPW51bGw7Yi5iLS07Yi5pKCl9KX07Zy5wcm90b3R5cGUubT1mdW5jdGlvbihhLGIpe2lmKCFhKXJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7eiYmKGE9YS5yZXBsYWNlKHUsXG5mdW5jdGlvbihhLGIsYyl7cmV0dXJuLTE9PT1hLmluZGV4T2YoXCJ0eXBlPVwiKT9iK1wiIHR5cGU9aW1wb3J0LWRpc2FibGUgXCIrYzphfSkpO3ZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtjLmlubmVySFRNTD1hO2lmKGMuY29udGVudClhPWMuY29udGVudDtlbHNlIGZvcihhPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtjLmZpcnN0Q2hpbGQ7KWEuYXBwZW5kQ2hpbGQoYy5maXJzdENoaWxkKTtpZihjPWEucXVlcnlTZWxlY3RvcihcImJhc2VcIikpYj1wLiQoYy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLGIpLGMucmVtb3ZlQXR0cmlidXRlKFwiaHJlZlwiKTtjPWEucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9aW1wb3J0XSwgbGlua1tyZWw9c3R5bGVzaGVldF1baHJlZl1bdHlwZT1pbXBvcnQtZGlzYWJsZV0sXFxuICAgIHN0eWxlOm5vdChbdHlwZV0pLCBsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmXTpub3QoW3R5cGVdKSxcXG4gICAgc2NyaXB0Om5vdChbdHlwZV0pLCBzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIl0sXFxuICAgIHNjcmlwdFt0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJdJyk7XG52YXIgZD0wO2woYyxmdW5jdGlvbihhKXtrKGEpO3AuWmEoYSxiKTthLnNldEF0dHJpYnV0ZShcImltcG9ydC1kZXBlbmRlbmN5XCIsXCJcIik7XCJzY3JpcHRcIj09PWEubG9jYWxOYW1lJiYhYS5zcmMmJmEudGV4dENvbnRlbnQmJihhLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiZGF0YTp0ZXh0L2phdmFzY3JpcHQ7Y2hhcnNldD11dGYtOCxcIitlbmNvZGVVUklDb21wb25lbnQoYS50ZXh0Q29udGVudCsoXCJcXG4vLyMgc291cmNlVVJMPVwiK2IrKGQ/XCItXCIrZDpcIlwiKStcIi5qc1xcblwiKSkpLGEudGV4dENvbnRlbnQ9XCJcIixkKyspfSk7cmV0dXJuIGF9O2cucHJvdG90eXBlLmk9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2lmKCF0aGlzLmIpe3RoaXMuZi5kaXNjb25uZWN0KCk7dGhpcy5mbGF0dGVuKGRvY3VtZW50KTt2YXIgYj0hMSxjPSExLGQ9ZnVuY3Rpb24oKXtjJiZiJiYoYS5jKGRvY3VtZW50KSxhLmJ8fChhLmYub2JzZXJ2ZShkb2N1bWVudC5oZWFkLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pLGEuaigpKSl9O1xudGhpcy5zKGZ1bmN0aW9uKCl7Yz0hMDtkKCl9KTt0aGlzLm8oZnVuY3Rpb24oKXtiPSEwO2QoKX0pfX07Zy5wcm90b3R5cGUuZmxhdHRlbj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2E9YS5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XVwiKTtsKGEsZnVuY3Rpb24oYSl7dmFyIGM9Yi5hW2EuaHJlZl07KGEuaW1wb3J0PWMpJiZjLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFJiYoYi5hW2EuaHJlZl09YSxhLnJlYWR5U3RhdGU9XCJsb2FkaW5nXCIsYS5pbXBvcnQ9YSxiLmZsYXR0ZW4oYyksYS5hcHBlbmRDaGlsZChjKSl9KX07Zy5wcm90b3R5cGUubz1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKGUpe2lmKGU8ZCl7dmFyIGY9Y1tlXSxnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7Zi5yZW1vdmVBdHRyaWJ1dGUoXCJpbXBvcnQtZGVwZW5kZW5jeVwiKTtsKGYuYXR0cmlidXRlcyxmdW5jdGlvbihhKXtyZXR1cm4gZy5zZXRBdHRyaWJ1dGUoYS5uYW1lLFxuYS52YWx1ZSl9KTtuPWc7Zi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChnLGYpO2soZyxmdW5jdGlvbigpe249bnVsbDtiKGUrMSl9KX1lbHNlIGEoKX12YXIgYz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2NyaXB0W2ltcG9ydC1kZXBlbmRlbmN5XVwiKSxkPWMubGVuZ3RoO2IoMCl9O2cucHJvdG90eXBlLnM9ZnVuY3Rpb24oYSl7dmFyIGI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW2ltcG9ydC1kZXBlbmRlbmN5XSxcXG4gICAgbGlua1tyZWw9c3R5bGVzaGVldF1baW1wb3J0LWRlcGVuZGVuY3ldXCIpLGQ9Yi5sZW5ndGg7aWYoZCl7dmFyIGU9eiYmISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlua1tyZWw9c3R5bGVzaGVldF1baHJlZl1bdHlwZT1pbXBvcnQtZGlzYWJsZV1cIik7bChiLGZ1bmN0aW9uKGIpe2soYixmdW5jdGlvbigpe2IucmVtb3ZlQXR0cmlidXRlKFwiaW1wb3J0LWRlcGVuZGVuY3lcIik7MD09PS0tZCYmYSgpfSk7aWYoZSYmYi5wYXJlbnROb2RlIT09XG5kb2N1bWVudC5oZWFkKXt2YXIgZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGIubG9jYWxOYW1lKTtmLl9fYXBwbGllZEVsZW1lbnQ9YjtmLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImltcG9ydC1wbGFjZWhvbGRlclwiKTtiLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGYsYi5uZXh0U2libGluZyk7Zm9yKGY9YyhiKTtmJiZjKGYpOylmPWMoZik7Zi5wYXJlbnROb2RlIT09ZG9jdW1lbnQuaGVhZCYmKGY9bnVsbCk7ZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoYixmKTtiLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIil9fSl9ZWxzZSBhKCl9O2cucHJvdG90eXBlLmo9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtbcmVsPWltcG9ydF1cIik7bChiLGZ1bmN0aW9uKGIpe3JldHVybiBhLmcoYil9LCEwKX07Zy5wcm90b3R5cGUuZz1mdW5jdGlvbihhKXthLl9fbG9hZGVkfHwoYS5fX2xvYWRlZD0hMCxhLmltcG9ydCYmKGEuaW1wb3J0LnJlYWR5U3RhdGU9XG5cImNvbXBsZXRlXCIpLGEuZGlzcGF0Y2hFdmVudChiKGEuaW1wb3J0P1wibG9hZFwiOlwiZXJyb3JcIix7YnViYmxlczohMSxjYW5jZWxhYmxlOiExLGRldGFpbDp2b2lkIDB9KSkpfTtnLnByb3RvdHlwZS5sPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7bChhLGZ1bmN0aW9uKGEpe3JldHVybiBsKGEuYWRkZWROb2RlcyxmdW5jdGlvbihhKXthJiZhLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJihoKGEpP2IuaChhKTpiLmMoYSkpfSl9KX07aWYobSl7dmFyIHg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtbcmVsPWltcG9ydF1cIik7bCh4LGZ1bmN0aW9uKGEpe2EuaW1wb3J0JiZcImxvYWRpbmdcIj09PWEuaW1wb3J0LnJlYWR5U3RhdGV8fChhLl9fbG9hZGVkPSEwKX0pO3g9ZnVuY3Rpb24oYSl7YT1hLnRhcmdldDtoKGEpJiYoYS5fX2xvYWRlZD0hMCl9O2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIseCwhMCk7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsXG54LCEwKX1lbHNle3ZhciB5PU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTm9kZS5wcm90b3R5cGUsXCJiYXNlVVJJXCIpO09iamVjdC5kZWZpbmVQcm9wZXJ0eSgoIXl8fHkuY29uZmlndXJhYmxlP05vZGU6RWxlbWVudCkucHJvdG90eXBlLFwiYmFzZVVSSVwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1oKHRoaXMpP3RoaXM6Yyh0aGlzKTtyZXR1cm4gYT9hLmhyZWY6eSYmeS5nZXQ/eS5nZXQuY2FsbCh0aGlzKTooZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VcIil8fHdpbmRvdy5sb2NhdGlvbikuaHJlZn0sY29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITB9KTtlKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBnfSl9ZihmdW5jdGlvbigpe3JldHVybiBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGIoXCJIVE1MSW1wb3J0c0xvYWRlZFwiLHtjYW5jZWxhYmxlOiEwLGJ1YmJsZXM6ITAsZGV0YWlsOnZvaWQgMH0pKX0pO2EudXNlTmF0aXZlPW07YS53aGVuUmVhZHk9ZjthLmltcG9ydEZvckVsZW1lbnQ9XG5jfSkod2luZG93LkhUTUxJbXBvcnRzPXdpbmRvdy5IVE1MSW1wb3J0c3x8e30pO3ZhciBFPXdpbmRvdy5TaGFkeURPTXx8e307RS4kYT0hKCFFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3d8fCFOb2RlLnByb3RvdHlwZS5nZXRSb290Tm9kZSk7dmFyIGhiPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTm9kZS5wcm90b3R5cGUsXCJmaXJzdENoaWxkXCIpO0UuUz0hIShoYiYmaGIuY29uZmlndXJhYmxlJiZoYi5nZXQpO0UuemE9RS5mb3JjZXx8IUUuJGE7dmFyIFg9RWxlbWVudC5wcm90b3R5cGUsTWM9WC5tYXRjaGVzfHxYLm1hdGNoZXNTZWxlY3Rvcnx8WC5tb3pNYXRjaGVzU2VsZWN0b3J8fFgubXNNYXRjaGVzU2VsZWN0b3J8fFgub01hdGNoZXNTZWxlY3Rvcnx8WC53ZWJraXRNYXRjaGVzU2VsZWN0b3IsUGE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIiksTGI9MCxPYT1bXTsobmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oKXtmb3IoO09hLmxlbmd0aDspdHJ5e09hLnNoaWZ0KCkoKX1jYXRjaChhKXt0aHJvdyBQYS50ZXh0Q29udGVudD1cbkxiKyssYTt9fSkpLm9ic2VydmUoUGEse2NoYXJhY3RlckRhdGE6ITB9KTt2YXIgVmQ9ISFkb2N1bWVudC5jb250YWlucyxhYT1bXSxRYTttYS5saXN0PWFhO2xhLnByb3RvdHlwZS5oYj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7dGhpcy5hfHwodGhpcy5hPSEwLEtiKGZ1bmN0aW9uKCl7YS5iKCl9KSl9O2xhLnByb3RvdHlwZS5iPWZ1bmN0aW9uKCl7aWYodGhpcy5hKXt0aGlzLmE9ITE7dmFyIGE9dGhpcy50YWtlUmVjb3JkcygpO2EubGVuZ3RoJiZ0aGlzLlguZm9yRWFjaChmdW5jdGlvbihiKXtiKGEpfSl9fTtsYS5wcm90b3R5cGUudGFrZVJlY29yZHM9ZnVuY3Rpb24oKXtpZih0aGlzLmFkZGVkTm9kZXMubGVuZ3RofHx0aGlzLnJlbW92ZWROb2Rlcy5sZW5ndGgpe3ZhciBhPVt7YWRkZWROb2Rlczp0aGlzLmFkZGVkTm9kZXMscmVtb3ZlZE5vZGVzOnRoaXMucmVtb3ZlZE5vZGVzfV07dGhpcy5hZGRlZE5vZGVzPVtdO3RoaXMucmVtb3ZlZE5vZGVzPVtdO3JldHVybiBhfXJldHVybltdfTtcbnZhciBjYz1FbGVtZW50LnByb3RvdHlwZS5hcHBlbmRDaGlsZCxYYT1FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRCZWZvcmUsYmE9RWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2hpbGQsa2M9RWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlLE5jPUVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZSxpYj1FbGVtZW50LnByb3RvdHlwZS5jbG9uZU5vZGUsWWE9RG9jdW1lbnQucHJvdG90eXBlLmltcG9ydE5vZGUsc2M9RWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcix2Yz1FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLHJjPVdpbmRvdy5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcix1Yz1XaW5kb3cucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIsamI9RWxlbWVudC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCxjYT1Ob2RlLnByb3RvdHlwZS5jb250YWluc3x8SFRNTEVsZW1lbnQucHJvdG90eXBlLmNvbnRhaW5zLFdkPU9iamVjdC5mcmVlemUoe2FwcGVuZENoaWxkOmNjLFxuaW5zZXJ0QmVmb3JlOlhhLHJlbW92ZUNoaWxkOmJhLHNldEF0dHJpYnV0ZTprYyxyZW1vdmVBdHRyaWJ1dGU6TmMsY2xvbmVOb2RlOmliLGltcG9ydE5vZGU6WWEsYWRkRXZlbnRMaXN0ZW5lcjpzYyxyZW1vdmVFdmVudExpc3RlbmVyOnZjLHJiOnJjLHNiOnVjLGRpc3BhdGNoRXZlbnQ6amIscXVlcnlTZWxlY3RvcjpFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLHF1ZXJ5U2VsZWN0b3JBbGw6RWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbCxjb250YWluczpjYX0pLENkPS9bJlxcdTAwQTBcIl0vZyxGZD0vWyZcXHUwMEEwPD5dL2csRGQ9UGIoXCJhcmVhIGJhc2UgYnIgY29sIGNvbW1hbmQgZW1iZWQgaHIgaW1nIGlucHV0IGtleWdlbiBsaW5rIG1ldGEgcGFyYW0gc291cmNlIHRyYWNrIHdiclwiLnNwbGl0KFwiIFwiKSksRWQ9UGIoXCJzdHlsZSBzY3JpcHQgeG1wIGlmcmFtZSBub2VtYmVkIG5vZnJhbWVzIHBsYWludGV4dCBub3NjcmlwdFwiLnNwbGl0KFwiIFwiKSksQz1kb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGRvY3VtZW50LFxuTm9kZUZpbHRlci5TSE9XX0FMTCxudWxsLCExKSxEPWRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZG9jdW1lbnQsTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsbnVsbCwhMSksWGQ9T2JqZWN0LmZyZWV6ZSh7cGFyZW50Tm9kZTpVLGZpcnN0Q2hpbGQ6S2EsbGFzdENoaWxkOkxhLHByZXZpb3VzU2libGluZzpRYixuZXh0U2libGluZzpSYixjaGlsZE5vZGVzOlMscGFyZW50RWxlbWVudDpTYixmaXJzdEVsZW1lbnRDaGlsZDpUYixsYXN0RWxlbWVudENoaWxkOlViLHByZXZpb3VzRWxlbWVudFNpYmxpbmc6VmIsbmV4dEVsZW1lbnRTaWJsaW5nOldiLGNoaWxkcmVuOlhiLGlubmVySFRNTDpZYix0ZXh0Q29udGVudDpaYn0pLGtiPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIil8fE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpLHNhPWRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcImluZXJ0XCIpLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5sYj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKERvY3VtZW50LnByb3RvdHlwZSxcImFjdGl2ZUVsZW1lbnRcIiksJGI9e3BhcmVudEVsZW1lbnQ6e2dldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5LnBhcmVudE5vZGU7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFJiYoYT1udWxsKTtyZXR1cm4gdm9pZCAwIT09YT9hOlNiKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LHBhcmVudE5vZGU6e2dldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5LnBhcmVudE5vZGU7cmV0dXJuIHZvaWQgMCE9PWE/YTpVKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LG5leHRTaWJsaW5nOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5uZXh0U2libGluZztyZXR1cm4gdm9pZCAwIT09YT9hOlJiKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LHByZXZpb3VzU2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9XG50aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc7cmV0dXJuIHZvaWQgMCE9PWE/YTpRYih0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxjbGFzc05hbWU6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifSxzZXQ6ZnVuY3Rpb24oYSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGEpfSxjb25maWd1cmFibGU6ITB9LG5leHRFbGVtZW50U2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7aWYodGhpcy5fX3NoYWR5JiZ2b2lkIDAhPT10aGlzLl9fc2hhZHkubmV4dFNpYmxpbmcpe2Zvcih2YXIgYT10aGlzLm5leHRTaWJsaW5nO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLm5leHRTaWJsaW5nO3JldHVybiBhfXJldHVybiBXYih0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxwcmV2aW91c0VsZW1lbnRTaWJsaW5nOntnZXQ6ZnVuY3Rpb24oKXtpZih0aGlzLl9fc2hhZHkmJnZvaWQgMCE9PXRoaXMuX19zaGFkeS5wcmV2aW91c1NpYmxpbmcpe2Zvcih2YXIgYT1cbnRoaXMucHJldmlvdXNTaWJsaW5nO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLnByZXZpb3VzU2libGluZztyZXR1cm4gYX1yZXR1cm4gVmIodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH19LFNhPXtjaGlsZE5vZGVzOntnZXQ6ZnVuY3Rpb24oKXtpZihUKHRoaXMpKXtpZighdGhpcy5fX3NoYWR5LmNoaWxkTm9kZXMpe3RoaXMuX19zaGFkeS5jaGlsZE5vZGVzPVtdO2Zvcih2YXIgYT10aGlzLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpdGhpcy5fX3NoYWR5LmNoaWxkTm9kZXMucHVzaChhKX12YXIgYj10aGlzLl9fc2hhZHkuY2hpbGROb2Rlc31lbHNlIGI9Uyh0aGlzKTtiLml0ZW09ZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19O3JldHVybiBifSxjb25maWd1cmFibGU6ITB9LGNoaWxkRWxlbWVudENvdW50OntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGh9LGNvbmZpZ3VyYWJsZTohMH0sZmlyc3RDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9XG50aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5maXJzdENoaWxkO3JldHVybiB2b2lkIDAhPT1hP2E6S2EodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sbGFzdENoaWxkOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5sYXN0Q2hpbGQ7cmV0dXJuIHZvaWQgMCE9PWE/YTpMYSh0aGlzKX0sY29uZmlndXJhYmxlOiEwfSx0ZXh0Q29udGVudDp7Z2V0OmZ1bmN0aW9uKCl7aWYoVCh0aGlzKSl7Zm9yKHZhciBhPVtdLGI9MCxjPXRoaXMuY2hpbGROb2RlcyxkO2Q9Y1tiXTtiKyspZC5ub2RlVHlwZSE9PU5vZGUuQ09NTUVOVF9OT0RFJiZhLnB1c2goZC50ZXh0Q29udGVudCk7cmV0dXJuIGEuam9pbihcIlwiKX1yZXR1cm4gWmIodGhpcyl9LHNldDpmdW5jdGlvbihhKXtzd2l0Y2godGhpcy5ub2RlVHlwZSl7Y2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpjYXNlIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpmb3IoO3RoaXMuZmlyc3RDaGlsZDspdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZpcnN0Q2hpbGQpO1xuKDA8YS5sZW5ndGh8fHRoaXMubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSkmJnRoaXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpO2JyZWFrO2RlZmF1bHQ6dGhpcy5ub2RlVmFsdWU9YX19LGNvbmZpZ3VyYWJsZTohMH0sZmlyc3RFbGVtZW50Q2hpbGQ6e2dldDpmdW5jdGlvbigpe2lmKHRoaXMuX19zaGFkeSYmdm9pZCAwIT09dGhpcy5fX3NoYWR5LmZpcnN0Q2hpbGQpe2Zvcih2YXIgYT10aGlzLmZpcnN0Q2hpbGQ7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFOylhPWEubmV4dFNpYmxpbmc7cmV0dXJuIGF9cmV0dXJuIFRiKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LGxhc3RFbGVtZW50Q2hpbGQ6e2dldDpmdW5jdGlvbigpe2lmKHRoaXMuX19zaGFkeSYmdm9pZCAwIT09dGhpcy5fX3NoYWR5Lmxhc3RDaGlsZCl7Zm9yKHZhciBhPXRoaXMubGFzdENoaWxkO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLnByZXZpb3VzU2libGluZztcbnJldHVybiBhfXJldHVybiBVYih0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxjaGlsZHJlbjp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE7VCh0aGlzKT9hPUFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCh0aGlzLmNoaWxkTm9kZXMsZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERX0pOmE9WGIodGhpcyk7YS5pdGVtPWZ1bmN0aW9uKGIpe3JldHVybiBhW2JdfTtyZXR1cm4gYX0sY29uZmlndXJhYmxlOiEwfSxpbm5lckhUTUw6e2dldDpmdW5jdGlvbigpe3ZhciBhPVwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lP3RoaXMuY29udGVudDp0aGlzO3JldHVybiBUKHRoaXMpP1JhKGEpOlliKGEpfSxzZXQ6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lP3RoaXMuY29udGVudDp0aGlzO2IuZmlyc3RDaGlsZDspYi5yZW1vdmVDaGlsZChiLmZpcnN0Q2hpbGQpO2ZvcihrYiYma2Iuc2V0P2tiLnNldC5jYWxsKHNhLGEpOlxuc2EuaW5uZXJIVE1MPWE7c2EuZmlyc3RDaGlsZDspYi5hcHBlbmRDaGlsZChzYS5maXJzdENoaWxkKX0sY29uZmlndXJhYmxlOiEwfX0sT2M9e3NoYWRvd1Jvb3Q6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5mYnx8bnVsbH0sY29uZmlndXJhYmxlOiEwfX0sVGE9e2FjdGl2ZUVsZW1lbnQ6e2dldDpmdW5jdGlvbigpe3ZhciBhPWxiJiZsYi5nZXQ/bGIuZ2V0LmNhbGwoZG9jdW1lbnQpOkUuUz92b2lkIDA6ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtpZihhJiZhLm5vZGVUeXBlKXt2YXIgYj0hIUcodGhpcyk7aWYodGhpcz09PWRvY3VtZW50fHxiJiZ0aGlzLmhvc3QhPT1hJiZjYS5jYWxsKHRoaXMuaG9zdCxhKSl7Zm9yKGI9WihhKTtiJiZiIT09dGhpczspYT1iLmhvc3QsYj1aKGEpO2E9dGhpcz09PWRvY3VtZW50P2I/bnVsbDphOmI9PT10aGlzP2E6bnVsbH1lbHNlIGE9bnVsbH1lbHNlIGE9bnVsbDtyZXR1cm4gYX0sc2V0OmZ1bmN0aW9uKCl7fSxcbmNvbmZpZ3VyYWJsZTohMH19LEpiPUUuUz9mdW5jdGlvbigpe306ZnVuY3Rpb24oYSl7YS5fX3NoYWR5JiZhLl9fc2hhZHkuTmF8fChhLl9fc2hhZHk9YS5fX3NoYWR5fHx7fSxhLl9fc2hhZHkuTmE9ITAsSyhhLCRiLCEwKSl9LEliPUUuUz9mdW5jdGlvbigpe306ZnVuY3Rpb24oYSl7YS5fX3NoYWR5JiZhLl9fc2hhZHkuTGF8fChhLl9fc2hhZHk9YS5fX3NoYWR5fHx7fSxhLl9fc2hhZHkuTGE9ITAsSyhhLFNhLCEwKSxLKGEsT2MsITApKX0sb2E9bnVsbCxkYT1cIl9fZXZlbnRXcmFwcGVyc1wiK0RhdGUubm93KCksWWQ9e2JsdXI6ITAsZm9jdXM6ITAsZm9jdXNpbjohMCxmb2N1c291dDohMCxjbGljazohMCxkYmxjbGljazohMCxtb3VzZWRvd246ITAsbW91c2VlbnRlcjohMCxtb3VzZWxlYXZlOiEwLG1vdXNlbW92ZTohMCxtb3VzZW91dDohMCxtb3VzZW92ZXI6ITAsbW91c2V1cDohMCx3aGVlbDohMCxiZWZvcmVpbnB1dDohMCxpbnB1dDohMCxrZXlkb3duOiEwLGtleXVwOiEwLGNvbXBvc2l0aW9uc3RhcnQ6ITAsXG5jb21wb3NpdGlvbnVwZGF0ZTohMCxjb21wb3NpdGlvbmVuZDohMCx0b3VjaHN0YXJ0OiEwLHRvdWNoZW5kOiEwLHRvdWNobW92ZTohMCx0b3VjaGNhbmNlbDohMCxwb2ludGVyb3ZlcjohMCxwb2ludGVyZW50ZXI6ITAscG9pbnRlcmRvd246ITAscG9pbnRlcm1vdmU6ITAscG9pbnRlcnVwOiEwLHBvaW50ZXJjYW5jZWw6ITAscG9pbnRlcm91dDohMCxwb2ludGVybGVhdmU6ITAsZ290cG9pbnRlcmNhcHR1cmU6ITAsbG9zdHBvaW50ZXJjYXB0dXJlOiEwLGRyYWdzdGFydDohMCxkcmFnOiEwLGRyYWdlbnRlcjohMCxkcmFnbGVhdmU6ITAsZHJhZ292ZXI6ITAsZHJvcDohMCxkcmFnZW5kOiEwLERPTUFjdGl2YXRlOiEwLERPTUZvY3VzSW46ITAsRE9NRm9jdXNPdXQ6ITAsa2V5cHJlc3M6ITB9LHdjPXtnZXQgY29tcG9zZWQoKXshMSE9PXRoaXMuaXNUcnVzdGVkJiZ2b2lkIDA9PT10aGlzLmVhJiYodGhpcy5lYT1ZZFt0aGlzLnR5cGVdKTtyZXR1cm4gdGhpcy5lYXx8ITF9LGNvbXBvc2VkUGF0aDpmdW5jdGlvbigpe3RoaXMucWF8fFxuKHRoaXMucWE9WmEodGhpcy5fX3RhcmdldCx0aGlzLmNvbXBvc2VkKSk7cmV0dXJuIHRoaXMucWF9LGdldCB0YXJnZXQoKXtyZXR1cm4gbWModGhpcy5jdXJyZW50VGFyZ2V0LHRoaXMuY29tcG9zZWRQYXRoKCkpfSxnZXQgcmVsYXRlZFRhcmdldCgpe2lmKCF0aGlzLnJhKXJldHVybiBudWxsO3RoaXMuc2F8fCh0aGlzLnNhPVphKHRoaXMucmEsITApKTtyZXR1cm4gbWModGhpcy5jdXJyZW50VGFyZ2V0LHRoaXMuc2EpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXtFdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uLmNhbGwodGhpcyk7dGhpcy5mYT0hMH0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7RXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbi5jYWxsKHRoaXMpO3RoaXMuZmE9dGhpcy5LYT0hMH19LGFiPXtmb2N1czohMCxibHVyOiEwfSxaZD0kYSh3aW5kb3cuRXZlbnQpLCRkPSRhKHdpbmRvdy5DdXN0b21FdmVudCksYWU9XG4kYSh3aW5kb3cuTW91c2VFdmVudCksSGI9e307bC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSk7bC5wcm90b3R5cGUuRj1mdW5jdGlvbihhLGIpe3RoaXMuTWE9XCJTaGFkeVJvb3RcIjtrYShhKTtrYSh0aGlzKTt0aGlzLmhvc3Q9YTt0aGlzLkg9YiYmYi5tb2RlO2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O2EuX19zaGFkeS5yb290PXRoaXM7YS5fX3NoYWR5LmZiPVwiY2xvc2VkXCIhPT10aGlzLkg/dGhpczpudWxsO3RoaXMuUD0hMTt0aGlzLmI9W107dGhpcy5hPXt9O3RoaXMuYz1bXTtiPVMoYSk7Zm9yKHZhciBjPTAsZD1iLmxlbmd0aDtjPGQ7YysrKWJhLmNhbGwoYSxiW2NdKX07bC5wcm90b3R5cGUuTD1mdW5jdGlvbigpe3ZhciBhPXRoaXM7dGhpcy5QfHwodGhpcy5QPSEwLE5iKGZ1bmN0aW9uKCl7cmV0dXJuIGEudmEoKX0pKX07bC5wcm90b3R5cGUuSz1mdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLGI9dGhpcztiOyliLlAmJihhPWIpLFxuYj1iLlVhKCk7cmV0dXJuIGF9O2wucHJvdG90eXBlLlVhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5ob3N0LmdldFJvb3ROb2RlKCk7aWYoRyhhKSlmb3IodmFyIGI9dGhpcy5ob3N0LmNoaWxkTm9kZXMsYz0wLGQ7YzxiLmxlbmd0aDtjKyspaWYoZD1iW2NdLHRoaXMuaihkKSlyZXR1cm4gYX07bC5wcm90b3R5cGUudmE9ZnVuY3Rpb24oKXt0aGlzLlAmJnRoaXMuSygpLl9yZW5kZXJSb290KCl9O2wucHJvdG90eXBlLl9yZW5kZXJSb290PWZ1bmN0aW9uKCl7dGhpcy5QPSExO3RoaXMuQigpO3RoaXMucygpfTtsLnByb3RvdHlwZS5CPWZ1bmN0aW9uKCl7dGhpcy5mKCk7Zm9yKHZhciBhPTAsYjthPHRoaXMuYi5sZW5ndGg7YSsrKWI9dGhpcy5iW2FdLHRoaXMubyhiKTtmb3IoYj10aGlzLmhvc3QuZmlyc3RDaGlsZDtiO2I9Yi5uZXh0U2libGluZyl0aGlzLmgoYik7Zm9yKGE9MDthPHRoaXMuYi5sZW5ndGg7YSsrKXtiPXRoaXMuYlthXTtpZighYi5fX3NoYWR5LmFzc2lnbmVkTm9kZXMubGVuZ3RoKWZvcih2YXIgYz1cbmIuZmlyc3RDaGlsZDtjO2M9Yy5uZXh0U2libGluZyl0aGlzLmgoYyxiKTtjPWIucGFyZW50Tm9kZTsoYz1jLl9fc2hhZHkmJmMuX19zaGFkeS5yb290KSYmYy50YSgpJiZjLl9yZW5kZXJSb290KCk7dGhpcy5nKGIuX19zaGFkeS5SLGIuX19zaGFkeS5hc3NpZ25lZE5vZGVzKTtpZihjPWIuX19zaGFkeS51YSl7Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspY1tkXS5fX3NoYWR5LmlhPW51bGw7Yi5fX3NoYWR5LnVhPW51bGw7Yy5sZW5ndGg+Yi5fX3NoYWR5LmFzc2lnbmVkTm9kZXMubGVuZ3RoJiYoYi5fX3NoYWR5LmthPSEwKX1iLl9fc2hhZHkua2EmJihiLl9fc2hhZHkua2E9ITEsdGhpcy5pKGIpKX19O2wucHJvdG90eXBlLmg9ZnVuY3Rpb24oYSxiKXthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTt2YXIgYz1hLl9fc2hhZHkuaWE7YS5fX3NoYWR5LmlhPW51bGw7Ynx8KGI9KGI9dGhpcy5hW2Euc2xvdHx8XCJfX2NhdGNoYWxsXCJdKSYmYlswXSk7Yj8oYi5fX3NoYWR5LmFzc2lnbmVkTm9kZXMucHVzaChhKSxcbmEuX19zaGFkeS5hc3NpZ25lZFNsb3Q9Yik6YS5fX3NoYWR5LmFzc2lnbmVkU2xvdD12b2lkIDA7YyE9PWEuX19zaGFkeS5hc3NpZ25lZFNsb3QmJmEuX19zaGFkeS5hc3NpZ25lZFNsb3QmJihhLl9fc2hhZHkuYXNzaWduZWRTbG90Ll9fc2hhZHkua2E9ITApfTtsLnByb3RvdHlwZS5vPWZ1bmN0aW9uKGEpe3ZhciBiPWEuX19zaGFkeS5hc3NpZ25lZE5vZGVzO2EuX19zaGFkeS5hc3NpZ25lZE5vZGVzPVtdO2EuX19zaGFkeS5SPVtdO2lmKGEuX19zaGFkeS51YT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdO2QuX19zaGFkeS5pYT1kLl9fc2hhZHkuYXNzaWduZWRTbG90O2QuX19zaGFkeS5hc3NpZ25lZFNsb3Q9PT1hJiYoZC5fX3NoYWR5LmFzc2lnbmVkU2xvdD1udWxsKX19O2wucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkO2M8Yi5sZW5ndGgmJihkPWJbY10pO2MrKylcInNsb3RcIj09ZC5sb2NhbE5hbWU/dGhpcy5nKGEsZC5fX3NoYWR5LmFzc2lnbmVkTm9kZXMpOlxuYS5wdXNoKGJbY10pfTtsLnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe2piLmNhbGwoYSxuZXcgRXZlbnQoXCJzbG90Y2hhbmdlXCIpKTthLl9fc2hhZHkuYXNzaWduZWRTbG90JiZ0aGlzLmkoYS5fX3NoYWR5LmFzc2lnbmVkU2xvdCl9O2wucHJvdG90eXBlLnM9ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5iLGI9W10sYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLnBhcmVudE5vZGU7ZC5fX3NoYWR5JiZkLl9fc2hhZHkucm9vdHx8ISgwPmIuaW5kZXhPZihkKSl8fGIucHVzaChkKX1mb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKWM9YlthXSx0aGlzLk8oYz09PXRoaXM/dGhpcy5ob3N0OmMsdGhpcy53KGMpKX07bC5wcm90b3R5cGUudz1mdW5jdGlvbihhKXt2YXIgYj1bXTthPWEuY2hpbGROb2Rlcztmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXTtpZih0aGlzLmooZCkpe2Q9ZC5fX3NoYWR5LlI7Zm9yKHZhciBlPTA7ZTxkLmxlbmd0aDtlKyspYi5wdXNoKGRbZV0pfWVsc2UgYi5wdXNoKGQpfXJldHVybiBifTtcbmwucHJvdG90eXBlLmo9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzbG90XCI9PWEubG9jYWxOYW1lfTtsLnByb3RvdHlwZS5PPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVMoYSksZD1JZChiLGIubGVuZ3RoLGMsYy5sZW5ndGgpLGU9MCxmPTAsaztlPGQubGVuZ3RoJiYoaz1kW2VdKTtlKyspe2Zvcih2YXIgZz0wLGw7ZzxrLlUubGVuZ3RoJiYobD1rLlVbZ10pO2crKylVKGwpPT09YSYmYmEuY2FsbChhLGwpLGMuc3BsaWNlKGsuaW5kZXgrZiwxKTtmLT1rLld9Zm9yKGU9MDtlPGQubGVuZ3RoJiYoaz1kW2VdKTtlKyspZm9yKGY9Y1trLmluZGV4XSxnPWsuaW5kZXg7ZzxrLmluZGV4K2suVztnKyspbD1iW2ddLFhhLmNhbGwoYSxsLGYpLGMuc3BsaWNlKGcsMCxsKX07bC5wcm90b3R5cGUuUWE9ZnVuY3Rpb24oYSl7dGhpcy5jLnB1c2guYXBwbHkodGhpcy5jLFtdLmNvbmNhdChhIGluc3RhbmNlb2YgQXJyYXk/YTpoZChnZChhKSkpKX07bC5wcm90b3R5cGUuZj1mdW5jdGlvbigpe3RoaXMuYy5sZW5ndGgmJlxuKHRoaXMuRyh0aGlzLmMpLHRoaXMuYz1bXSl9O2wucHJvdG90eXBlLkc9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXTtkLl9fc2hhZHk9ZC5fX3NoYWR5fHx7fTtrYShkKTtrYShkLnBhcmVudE5vZGUpO3ZhciBlPXRoaXMubChkKTt0aGlzLmFbZV0/KGI9Ynx8e30sYltlXT0hMCx0aGlzLmFbZV0ucHVzaChkKSk6dGhpcy5hW2VdPVtkXTt0aGlzLmIucHVzaChkKX1pZihiKWZvcih2YXIgZiBpbiBiKXRoaXMuYVtmXT10aGlzLm0odGhpcy5hW2ZdKX07bC5wcm90b3R5cGUubD1mdW5jdGlvbihhKXt2YXIgYj1hLm5hbWV8fGEuZ2V0QXR0cmlidXRlKFwibmFtZVwiKXx8XCJfX2NhdGNoYWxsXCI7cmV0dXJuIGEuT2E9Yn07bC5wcm90b3R5cGUubT1mdW5jdGlvbihhKXtyZXR1cm4gYS5zb3J0KGZ1bmN0aW9uKGEsYyl7YT14YyhhKTtmb3IodmFyIGI9eGMoYyksZT0wO2U8YS5sZW5ndGg7ZSsrKXtjPWFbZV07dmFyIGY9YltlXTtpZihjIT09ZilyZXR1cm4gYT1cbkFycmF5LmZyb20oYy5wYXJlbnROb2RlLmNoaWxkTm9kZXMpLGEuaW5kZXhPZihjKS1hLmluZGV4T2YoZil9fSl9O2wucHJvdG90eXBlLlRhPWZ1bmN0aW9uKGEpe3RoaXMuZigpO3ZhciBiPXRoaXMuYSxjO2ZvcihjIGluIGIpZm9yKHZhciBkPWJbY10sZT0wO2U8ZC5sZW5ndGg7ZSsrKXt2YXIgZj1kW2VdO2lmKE1iKGEsZikpe2Quc3BsaWNlKGUsMSk7dmFyIGs9dGhpcy5iLmluZGV4T2YoZik7MDw9ayYmdGhpcy5iLnNwbGljZShrLDEpO2UtLTt0aGlzLkkoZik7az0hMH19cmV0dXJuIGt9O2wucHJvdG90eXBlLlZhPWZ1bmN0aW9uKGEpe3ZhciBiPWEuT2EsYz10aGlzLmwoYSk7aWYoYyE9PWIpe2I9dGhpcy5hW2JdO3ZhciBkPWIuaW5kZXhPZihhKTswPD1kJiZiLnNwbGljZShkLDEpO2I9dGhpcy5hW2NdfHwodGhpcy5hW2NdPVtdKTtiLnB1c2goYSk7MTxiLmxlbmd0aCYmKHRoaXMuYVtjXT10aGlzLm0oYikpfX07bC5wcm90b3R5cGUuST1mdW5jdGlvbihhKXtpZihhPWEuX19zaGFkeS5SKWZvcih2YXIgYj1cbjA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl0sZD1VKGMpO2QmJmJhLmNhbGwoZCxjKX19O2wucHJvdG90eXBlLnRhPWZ1bmN0aW9uKCl7dGhpcy5mKCk7cmV0dXJuISF0aGlzLmIubGVuZ3RofTtsLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXtcIm9iamVjdFwiIT09dHlwZW9mIGMmJihjPXtjYXB0dXJlOiEhY30pO2MuZ2E9dGhpczt0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcihhLGIsYyl9O2wucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYSxiLGMpe1wib2JqZWN0XCIhPT10eXBlb2YgYyYmKGM9e2NhcHR1cmU6ISFjfSk7Yy5nYT10aGlzO3RoaXMuaG9zdC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKX07bC5wcm90b3R5cGUuZ2V0RWxlbWVudEJ5SWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG5hKHRoaXMsZnVuY3Rpb24oYil7cmV0dXJuIGIuaWQ9PWF9LGZ1bmN0aW9uKGEpe3JldHVybiEhYX0pWzBdfHxudWxsfTsoZnVuY3Rpb24oYSl7SyhhLFxuU2EsITApO0soYSxUYSwhMCl9KShsLnByb3RvdHlwZSk7dmFyIE1kPXthZGRFdmVudExpc3RlbmVyOnBjLmJpbmQod2luZG93KSxyZW1vdmVFdmVudExpc3RlbmVyOnRjLmJpbmQod2luZG93KX0sTGQ9e2FkZEV2ZW50TGlzdGVuZXI6cGMscmVtb3ZlRXZlbnRMaXN0ZW5lcjp0YyxhcHBlbmRDaGlsZDpmdW5jdGlvbihhKXtyZXR1cm4gVWEodGhpcyxhKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFVhKHRoaXMsYSxiKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFZhKHRoaXMsYSl9LHJlcGxhY2VDaGlsZDpmdW5jdGlvbihhLGIpe1VhKHRoaXMsYSxiKTtWYSh0aGlzLGIpO3JldHVybiBhfSxjbG9uZU5vZGU6ZnVuY3Rpb24oYSl7aWYoXCJ0ZW1wbGF0ZVwiPT10aGlzLmxvY2FsTmFtZSl2YXIgYj1pYi5jYWxsKHRoaXMsYSk7ZWxzZSBpZihiPWliLmNhbGwodGhpcywhMSksYSl7YT10aGlzLmNoaWxkTm9kZXM7Zm9yKHZhciBjPTAsZDtjPGEubGVuZ3RoO2MrKylkPVxuYVtjXS5jbG9uZU5vZGUoITApLGIuYXBwZW5kQ2hpbGQoZCl9cmV0dXJuIGJ9LGdldFJvb3ROb2RlOmZ1bmN0aW9uKCl7cmV0dXJuIGdjKHRoaXMpfSxjb250YWluczpmdW5jdGlvbihhKXtyZXR1cm4gTWIodGhpcyxhKX0sZ2V0IGlzQ29ubmVjdGVkKCl7dmFyIGE9dGhpcy5vd25lckRvY3VtZW50O2lmKFZkJiZjYS5jYWxsKGEsdGhpcyl8fGEuZG9jdW1lbnRFbGVtZW50JiZjYS5jYWxsKGEuZG9jdW1lbnRFbGVtZW50LHRoaXMpKXJldHVybiEwO2ZvcihhPXRoaXM7YSYmIShhIGluc3RhbmNlb2YgRG9jdW1lbnQpOylhPWEucGFyZW50Tm9kZXx8KGEgaW5zdGFuY2VvZiBsP2EuaG9zdDp2b2lkIDApO3JldHVybiEhKGEmJmEgaW5zdGFuY2VvZiBEb2N1bWVudCl9LGRpc3BhdGNoRXZlbnQ6ZnVuY3Rpb24oYSl7bWEoKTtyZXR1cm4gamIuY2FsbCh0aGlzLGEpfX0sTmQ9e2dldCBhc3NpZ25lZFNsb3QoKXtyZXR1cm4geWModGhpcyl9fSxiYj17cXVlcnlTZWxlY3RvcjpmdW5jdGlvbihhKXtyZXR1cm4gbmEodGhpcyxcbmZ1bmN0aW9uKGIpe3JldHVybiBNYy5jYWxsKGIsYSl9LGZ1bmN0aW9uKGEpe3JldHVybiEhYX0pWzBdfHxudWxsfSxxdWVyeVNlbGVjdG9yQWxsOmZ1bmN0aW9uKGEpe3JldHVybiBuYSh0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBNYy5jYWxsKGIsYSl9KX19LEJjPXthc3NpZ25lZE5vZGVzOmZ1bmN0aW9uKGEpe2lmKFwic2xvdFwiPT09dGhpcy5sb2NhbE5hbWUpcmV0dXJuIGljKHRoaXMpLHRoaXMuX19zaGFkeT8oYSYmYS5mbGF0dGVuP3RoaXMuX19zaGFkeS5SOnRoaXMuX19zaGFkeS5hc3NpZ25lZE5vZGVzKXx8W106W119fSx6Yz1OYSh7c2V0QXR0cmlidXRlOmZ1bmN0aW9uKGEsYil7amModGhpcyxhLGIpfSxyZW1vdmVBdHRyaWJ1dGU6ZnVuY3Rpb24oYSl7TmMuY2FsbCh0aGlzLGEpO2ZjKHRoaXMsYSl9LGF0dGFjaFNoYWRvdzpmdW5jdGlvbihhKXtpZighdGhpcyl0aHJvd1wiTXVzdCBwcm92aWRlIGEgaG9zdC5cIjtpZighYSl0aHJvd1wiTm90IGVub3VnaCBhcmd1bWVudHMuXCI7cmV0dXJuIG5ldyBsKEhiLFxudGhpcyxhKX0sZ2V0IHNsb3QoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzbG90XCIpfSxzZXQgc2xvdChhKXtqYyh0aGlzLFwic2xvdFwiLGEpfSxnZXQgYXNzaWduZWRTbG90KCl7cmV0dXJuIHljKHRoaXMpfX0sYmIsQmMpO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHpjLE9jKTt2YXIgQWM9TmEoe2ltcG9ydE5vZGU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbGMoYSxiKX0sZ2V0RWxlbWVudEJ5SWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG5hKHRoaXMsZnVuY3Rpb24oYil7cmV0dXJuIGIuaWQ9PWF9LGZ1bmN0aW9uKGEpe3JldHVybiEhYX0pWzBdfHxudWxsfX0sYmIpO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEFjLHtfYWN0aXZlRWxlbWVudDpUYS5hY3RpdmVFbGVtZW50fSk7dmFyIGJlPUhUTUxFbGVtZW50LnByb3RvdHlwZS5ibHVyLE9kPU5hKHtibHVyOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkucm9vdDsoYT1hJiZhLmFjdGl2ZUVsZW1lbnQpP1xuYS5ibHVyKCk6YmUuY2FsbCh0aGlzKX19KTtFLnphJiYod2luZG93LlNoYWR5RE9NPXtpblVzZTpFLnphLHBhdGNoOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxpc1NoYWR5Um9vdDpHLGVucXVldWU6TmIsZmx1c2g6bWEsc2V0dGluZ3M6RSxmaWx0ZXJNdXRhdGlvbnM6QmQsb2JzZXJ2ZUNoaWxkcmVuOnpkLHVub2JzZXJ2ZUNoaWxkcmVuOnlkLG5hdGl2ZU1ldGhvZHM6V2QsbmF0aXZlVHJlZTpYZH0sd2luZG93LkV2ZW50PVpkLHdpbmRvdy5DdXN0b21FdmVudD0kZCx3aW5kb3cuTW91c2VFdmVudD1hZSxIZCgpLEtkKCksd2luZG93LlNoYWRvd1Jvb3Q9bCk7dmFyIFBkPW5ldyBTZXQoXCJhbm5vdGF0aW9uLXhtbCBjb2xvci1wcm9maWxlIGZvbnQtZmFjZSBmb250LWZhY2Utc3JjIGZvbnQtZmFjZS11cmkgZm9udC1mYWNlLWZvcm1hdCBmb250LWZhY2UtbmFtZSBtaXNzaW5nLWdseXBoXCIuc3BsaXQoXCIgXCIpKTtCLnByb3RvdHlwZS5CPWZ1bmN0aW9uKGEsYil7dGhpcy5vLnNldChhLGIpO1xudGhpcy5tLnNldChiLmNvbnN0cnVjdG9yLGIpfTtCLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm8uZ2V0KGEpfTtCLnByb3RvdHlwZS53PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm0uZ2V0KGEpfTtCLnByb3RvdHlwZS5zPWZ1bmN0aW9uKGEpe3RoaXMuaD0hMDt0aGlzLmoucHVzaChhKX07Qi5wcm90b3R5cGUubD1mdW5jdGlvbihhKXt2YXIgYj10aGlzO3RoaXMuaCYmTyhhLGZ1bmN0aW9uKGEpe3JldHVybiBiLmcoYSl9KX07Qi5wcm90b3R5cGUuZz1mdW5jdGlvbihhKXtpZih0aGlzLmgmJiFhLl9fQ0VfcGF0Y2hlZCl7YS5fX0NFX3BhdGNoZWQ9ITA7Zm9yKHZhciBiPTA7Yjx0aGlzLmoubGVuZ3RoO2IrKyl0aGlzLmpbYl0oYSl9fTtCLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEpe3ZhciBiPVtdO08oYSxmdW5jdGlvbihhKXtyZXR1cm4gYi5wdXNoKGEpfSk7Zm9yKGE9MDthPGIubGVuZ3RoO2ErKyl7dmFyIGM9YlthXTsxPT09Yy5fX0NFX3N0YXRlP3RoaXMuY29ubmVjdGVkQ2FsbGJhY2soYyk6XG50aGlzLmkoYyl9fTtCLnByb3RvdHlwZS5hPWZ1bmN0aW9uKGEpe3ZhciBiPVtdO08oYSxmdW5jdGlvbihhKXtyZXR1cm4gYi5wdXNoKGEpfSk7Zm9yKGE9MDthPGIubGVuZ3RoO2ErKyl7dmFyIGM9YlthXTsxPT09Yy5fX0NFX3N0YXRlJiZ0aGlzLmRpc2Nvbm5lY3RlZENhbGxiYWNrKGMpfX07Qi5wcm90b3R5cGUuZj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7Yj1iP2I6e307dmFyIGQ9Yi5rYnx8bmV3IFNldCxlPWIuRGF8fGZ1bmN0aW9uKGEpe3JldHVybiBjLmkoYSl9LGY9W107TyhhLGZ1bmN0aW9uKGEpe2lmKFwibGlua1wiPT09YS5sb2NhbE5hbWUmJlwiaW1wb3J0XCI9PT1hLmdldEF0dHJpYnV0ZShcInJlbFwiKSl7dmFyIGI9YS5pbXBvcnQ7YiBpbnN0YW5jZW9mIE5vZGUmJlwiY29tcGxldGVcIj09PWIucmVhZHlTdGF0ZT8oYi5fX0NFX2lzSW1wb3J0RG9jdW1lbnQ9ITAsYi5fX0NFX2hhc1JlZ2lzdHJ5PSEwKTphLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXt2YXIgYj1cbmEuaW1wb3J0O2lmKCFiLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZCl7Yi5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQ9ITA7Yi5fX0NFX2lzSW1wb3J0RG9jdW1lbnQ9ITA7Yi5fX0NFX2hhc1JlZ2lzdHJ5PSEwO3ZhciBmPW5ldyBTZXQoZCk7Zi5kZWxldGUoYik7Yy5mKGIse2tiOmYsRGE6ZX0pfX0pfWVsc2UgZi5wdXNoKGEpfSxkKTtpZih0aGlzLmgpZm9yKGE9MDthPGYubGVuZ3RoO2ErKyl0aGlzLmcoZlthXSk7Zm9yKGE9MDthPGYubGVuZ3RoO2ErKyllKGZbYV0pfTtCLnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe2lmKHZvaWQgMD09PWEuX19DRV9zdGF0ZSl7dmFyIGI9dGhpcy5jKGEubG9jYWxOYW1lKTtpZihiKXtiLmNvbnN0cnVjdGlvblN0YWNrLnB1c2goYSk7dmFyIGM9Yi5jb25zdHJ1Y3Rvcjt0cnl7dHJ5e2lmKG5ldyBjIT09YSl0aHJvdyBFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvciBkaWQgbm90IHByb2R1Y2UgdGhlIGVsZW1lbnQgYmVpbmcgdXBncmFkZWQuXCIpO1xufWZpbmFsbHl7Yi5jb25zdHJ1Y3Rpb25TdGFjay5wb3AoKX19Y2F0Y2goZil7dGhyb3cgYS5fX0NFX3N0YXRlPTIsZjt9YS5fX0NFX3N0YXRlPTE7YS5fX0NFX2RlZmluaXRpb249YjtpZihiLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaylmb3IoYj1iLm9ic2VydmVkQXR0cmlidXRlcyxjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPWJbY10sZT1hLmdldEF0dHJpYnV0ZShkKTtudWxsIT09ZSYmdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYSxkLG51bGwsZSxudWxsKX10KGEpJiZ0aGlzLmNvbm5lY3RlZENhbGxiYWNrKGEpfX19O0IucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPWEuX19DRV9kZWZpbml0aW9uO2IuY29ubmVjdGVkQ2FsbGJhY2smJmIuY29ubmVjdGVkQ2FsbGJhY2suY2FsbChhKX07Qi5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9YS5fX0NFX2RlZmluaXRpb247Yi5kaXNjb25uZWN0ZWRDYWxsYmFjayYmXG5iLmRpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9O0IucHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaz1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPWEuX19DRV9kZWZpbml0aW9uO2YuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJiYtMTxmLm9ic2VydmVkQXR0cmlidXRlcy5pbmRleE9mKGIpJiZmLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjay5jYWxsKGEsYixjLGQsZSl9O0phLnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7dGhpcy5NJiZ0aGlzLk0uZGlzY29ubmVjdCgpfTtKYS5wcm90b3R5cGUuZj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmEucmVhZHlTdGF0ZTtcImludGVyYWN0aXZlXCIhPT1iJiZcImNvbXBsZXRlXCIhPT1ifHx0aGlzLmMoKTtmb3IoYj0wO2I8YS5sZW5ndGg7YisrKWZvcih2YXIgYz1hW2JdLmFkZGVkTm9kZXMsZD0wO2Q8Yy5sZW5ndGg7ZCsrKXRoaXMuYi5mKGNbZF0pfTtHYi5wcm90b3R5cGUuYz1mdW5jdGlvbigpe2lmKHRoaXMuYSl0aHJvdyBFcnJvcihcIkFscmVhZHkgcmVzb2x2ZWQuXCIpO1xudGhpcy5hPXZvaWQgMDt0aGlzLmImJnRoaXMuYih2b2lkIDApfTt5LnByb3RvdHlwZS5kZWZpbmU9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO2lmKCEoYiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3JzIG11c3QgYmUgZnVuY3Rpb25zLlwiKTtpZighQ2MoYSkpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVGhlIGVsZW1lbnQgbmFtZSAnXCIrYStcIicgaXMgbm90IHZhbGlkLlwiKTtpZih0aGlzLmEuYyhhKSl0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgd2l0aCBuYW1lICdcIithK1wiJyBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuXCIpO2lmKHRoaXMuYyl0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBkZWZpbmVkLlwiKTt0aGlzLmM9ITA7dHJ5e3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWVbYV07aWYodm9pZCAwIT09YiYmIShiIGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IEVycm9yKFwiVGhlICdcIitcbmErXCInIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7cmV0dXJuIGJ9LGU9Yi5wcm90b3R5cGU7aWYoIShlIGluc3RhbmNlb2YgT2JqZWN0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yJ3MgcHJvdG90eXBlIGlzIG5vdCBhbiBvYmplY3QuXCIpO3ZhciBmPWQoXCJjb25uZWN0ZWRDYWxsYmFja1wiKTt2YXIgZz1kKFwiZGlzY29ubmVjdGVkQ2FsbGJhY2tcIik7dmFyIGg9ZChcImFkb3B0ZWRDYWxsYmFja1wiKTt2YXIgbD1kKFwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIpO3ZhciBuPWIub2JzZXJ2ZWRBdHRyaWJ1dGVzfHxbXX1jYXRjaChtKXtyZXR1cm59ZmluYWxseXt0aGlzLmM9ITF9Yj17bG9jYWxOYW1lOmEsY29uc3RydWN0b3I6Yixjb25uZWN0ZWRDYWxsYmFjazpmLGRpc2Nvbm5lY3RlZENhbGxiYWNrOmcsYWRvcHRlZENhbGxiYWNrOmgsYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrOmwsb2JzZXJ2ZWRBdHRyaWJ1dGVzOm4sY29uc3RydWN0aW9uU3RhY2s6W119O1xudGhpcy5hLkIoYSxiKTt0aGlzLmcucHVzaChiKTt0aGlzLmJ8fCh0aGlzLmI9ITAsdGhpcy5mKGZ1bmN0aW9uKCl7cmV0dXJuIGMuaigpfSkpfTt5LnByb3RvdHlwZS5qPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztpZighMSE9PXRoaXMuYil7dGhpcy5iPSExO2Zvcih2YXIgYj10aGlzLmcsYz1bXSxkPW5ldyBNYXAsZT0wO2U8Yi5sZW5ndGg7ZSsrKWQuc2V0KGJbZV0ubG9jYWxOYW1lLFtdKTt0aGlzLmEuZihkb2N1bWVudCx7RGE6ZnVuY3Rpb24oYil7aWYodm9pZCAwPT09Yi5fX0NFX3N0YXRlKXt2YXIgZT1iLmxvY2FsTmFtZSxmPWQuZ2V0KGUpO2Y/Zi5wdXNoKGIpOmEuYS5jKGUpJiZjLnB1c2goYil9fX0pO2ZvcihlPTA7ZTxjLmxlbmd0aDtlKyspdGhpcy5hLmkoY1tlXSk7Zm9yKDswPGIubGVuZ3RoOyl7dmFyIGY9Yi5zaGlmdCgpO2U9Zi5sb2NhbE5hbWU7Zj1kLmdldChmLmxvY2FsTmFtZSk7Zm9yKHZhciBnPTA7ZzxmLmxlbmd0aDtnKyspdGhpcy5hLmkoZltnXSk7KGU9dGhpcy5oLmdldChlKSkmJlxuZS5jKCl9fX07eS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe2lmKGE9dGhpcy5hLmMoYSkpcmV0dXJuIGEuY29uc3RydWN0b3J9O3kucHJvdG90eXBlLndoZW5EZWZpbmVkPWZ1bmN0aW9uKGEpe2lmKCFDYyhhKSlyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFN5bnRheEVycm9yKFwiJ1wiK2ErXCInIGlzIG5vdCBhIHZhbGlkIGN1c3RvbSBlbGVtZW50IG5hbWUuXCIpKTt2YXIgYj10aGlzLmguZ2V0KGEpO2lmKGIpcmV0dXJuIGIuZjtiPW5ldyBHYjt0aGlzLmguc2V0KGEsYik7dGhpcy5hLmMoYSkmJiF0aGlzLmcuc29tZShmdW5jdGlvbihiKXtyZXR1cm4gYi5sb2NhbE5hbWU9PT1hfSkmJmIuYygpO3JldHVybiBiLmZ9O3kucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSl7dGhpcy5pLmMoKTt2YXIgYj10aGlzLmY7dGhpcy5mPWZ1bmN0aW9uKGMpe3JldHVybiBhKGZ1bmN0aW9uKCl7cmV0dXJuIGIoYyl9KX19O3dpbmRvdy5DdXN0b21FbGVtZW50UmVnaXN0cnk9eTt5LnByb3RvdHlwZS5kZWZpbmU9XG55LnByb3RvdHlwZS5kZWZpbmU7eS5wcm90b3R5cGUuZ2V0PXkucHJvdG90eXBlLmdldDt5LnByb3RvdHlwZS53aGVuRGVmaW5lZD15LnByb3RvdHlwZS53aGVuRGVmaW5lZDt5LnByb3RvdHlwZS5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrPXkucHJvdG90eXBlLmw7dmFyIEVhPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCx0ZD13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnROUyxzZD13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmltcG9ydE5vZGUsdWQ9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5wcmVwZW5kLHZkPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuYXBwZW5kLGNlPXdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5wcmVwZW5kLGRlPXdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5hcHBlbmQsd2I9d2luZG93Lk5vZGUucHJvdG90eXBlLmNsb25lTm9kZSxpYT13aW5kb3cuTm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQsXG5EYj13aW5kb3cuTm9kZS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlLEZhPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCxFYj13aW5kb3cuTm9kZS5wcm90b3R5cGUucmVwbGFjZUNoaWxkLElhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93Lk5vZGUucHJvdG90eXBlLFwidGV4dENvbnRlbnRcIiksdmI9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdyxDYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSxHYT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlLHhiPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUsemI9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZSxqYT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlTlMseWI9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZU5TLFxuQWI9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZU5TLENiPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQsamQ9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnByZXBlbmQsa2Q9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCxtZD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYmVmb3JlLG5kPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZnRlcixvZD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZVdpdGgscGQ9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSx4ZD13aW5kb3cuSFRNTEVsZW1lbnQsRGE9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpLEJiPXdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50LEZiPW5ldyBmdW5jdGlvbigpe30sdGE9d2luZG93LmN1c3RvbUVsZW1lbnRzO1xuaWYoIXRhfHx0YS5mb3JjZVBvbHlmaWxsfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiB0YS5kZWZpbmV8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHRhLmdldCl7dmFyIFk9bmV3IEI7d2QoWSk7cmQoWSk7SGEoWSxEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSx7WjpjZSxhcHBlbmQ6ZGV9KTtxZChZKTtpZChZKTtkb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5PSEwO3ZhciBlZT1uZXcgeShZKTtPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LFwiY3VzdG9tRWxlbWVudHNcIix7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsdmFsdWU6ZWV9KX12YXIgST17U1RZTEVfUlVMRToxLGRhOjcsTUVESUFfUlVMRTo0LG5hOjFFM30sRj17WWE6L1xcL1xcKlteKl0qXFwqKyhbXi8qXVteKl0qXFwqKykqXFwvL2dpbSxwb3J0Oi9AaW1wb3J0W147XSo7L2dpbSx3YTovKD86XlteO1xcLVxcc31dKyk/LS1bXjt7fV0qPzpbXnt9O10qPyg/Ols7XFxuXXwkKS9naW0sQWE6Lyg/Ol5bXjtcXC1cXHN9XSspPy0tW147e31dKj86W157fTtdKj97W159XSo/fSg/Ols7XFxuXXwkKT8vZ2ltLFxuZWI6L0BhcHBseVxccypcXCg/W14pO10qXFwpP1xccyooPzpbO1xcbl18JCk/L2dpbSxqYjovW147Ol0qPzpbXjtdKj92YXJcXChbXjtdKlxcKSg/Ols7XFxuXXwkKT8vZ2ltLGNiOi9eQFteXFxzXSprZXlmcmFtZXMvLEJhOi9cXHMrL2d9LHo9ISh3aW5kb3cuU2hhZHlET00mJndpbmRvdy5TaGFkeURPTS5pblVzZSk7aWYod2luZG93LlNoYWR5Q1NTJiZ2b2lkIDAhPT13aW5kb3cuU2hhZHlDU1MubmF0aXZlQ3NzKXZhciBBPXdpbmRvdy5TaGFkeUNTUy5uYXRpdmVDc3M7ZWxzZSB3aW5kb3cuU2hhZHlDU1M/KEZjKHdpbmRvdy5TaGFkeUNTUyksd2luZG93LlNoYWR5Q1NTPXZvaWQgMCk6RmMod2luZG93LldlYkNvbXBvbmVudHMmJndpbmRvdy5XZWJDb21wb25lbnRzLmZsYWdzKTt2YXIgdWE9Lyg/Ol58WztcXHN7XVxccyopKC0tW1xcdy1dKj8pXFxzKjpcXHMqKD86KCg/OicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoW14pXSo/XFwpfFtefTt7XSkrKXxcXHsoW159XSopXFx9KD86KD89WztcXHN9XSl8JCkpL2dpLFxudmE9Lyg/Ol58XFxXKylAYXBwbHlcXHMqXFwoPyhbXik7XFxuXSopXFwpPy9naSxmZT0vKC0tW1xcdy1dKylcXHMqKFs6LDspXXwkKS9naSxnZT0vKGFuaW1hdGlvblxccyo6KXwoYW5pbWF0aW9uLW5hbWVcXHMqOikvLFJkPS9AbWVkaWFcXHMoLiopLyxoZT0vXFx7W159XSpcXH0vZyxRPW51bGw7dS5wcm90b3R5cGUuYj1mdW5jdGlvbihhLGIsYyl7YS5fX3N0eWxlU2NvcGVkP2EuX19zdHlsZVNjb3BlZD1udWxsOnRoaXMuaihhLGJ8fFwiXCIsYyl9O3UucHJvdG90eXBlLmo9ZnVuY3Rpb24oYSxiLGMpe2Eubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmdGhpcy5oKGEsYixjKTtpZihhPVwidGVtcGxhdGVcIj09PWEubG9jYWxOYW1lPyhhLmNvbnRlbnR8fGEub2IpLmNoaWxkTm9kZXM6YS5jaGlsZHJlbnx8YS5jaGlsZE5vZGVzKWZvcih2YXIgZD0wO2Q8YS5sZW5ndGg7ZCsrKXRoaXMuaihhW2RdLGIsYyl9O3UucHJvdG90eXBlLmg9ZnVuY3Rpb24oYSxiLGMpe2lmKGIpaWYoYS5jbGFzc0xpc3QpYz8oYS5jbGFzc0xpc3QucmVtb3ZlKFwic3R5bGUtc2NvcGVcIiksXG5hLmNsYXNzTGlzdC5yZW1vdmUoYikpOihhLmNsYXNzTGlzdC5hZGQoXCJzdHlsZS1zY29wZVwiKSxhLmNsYXNzTGlzdC5hZGQoYikpO2Vsc2UgaWYoYS5nZXRBdHRyaWJ1dGUpe3ZhciBkPWEuZ2V0QXR0cmlidXRlKGllKTtjP2QmJihiPWQucmVwbGFjZShcInN0eWxlLXNjb3BlXCIsXCJcIikucmVwbGFjZShiLFwiXCIpLHFhKGEsYikpOnFhKGEsKGQ/ZCtcIiBcIjpcIlwiKStcInN0eWxlLXNjb3BlIFwiK2IpfX07dS5wcm90b3R5cGUuYz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YS5fX2Nzc0J1aWxkO3p8fFwic2hhZHlcIj09PWQ/Yj1WKGIsYyk6KGE9UihhKSxiPXRoaXMuRyhiLGEuaXMsYS5WLGMpK1wiXFxuXFxuXCIpO3JldHVybiBiLnRyaW0oKX07dS5wcm90b3R5cGUuRz1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT10aGlzLmYoYixjKTtiPXRoaXMuaShiKTt2YXIgZj10aGlzO3JldHVybiBWKGEsZnVuY3Rpb24oYSl7YS5jfHwoZi5JKGEsYixlKSxhLmM9ITApO2QmJmQoYSxiLGUpfSl9O3UucHJvdG90eXBlLmk9ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XG5qZSthOlwiXCJ9O3UucHJvdG90eXBlLmY9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9cIltpcz1cIithK1wiXVwiOmF9O3UucHJvdG90eXBlLkk9ZnVuY3Rpb24oYSxiLGMpe3RoaXMubChhLHRoaXMuZyxiLGMpfTt1LnByb3RvdHlwZS5sPWZ1bmN0aW9uKGEsYixjLGQpe2Euc2VsZWN0b3I9YS52PXRoaXMubShhLGIsYyxkKX07dS5wcm90b3R5cGUubT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1hLnNlbGVjdG9yLnNwbGl0KFBjKTtpZighR2MoYSkpe2E9MDtmb3IodmFyIGY9ZS5sZW5ndGgsZzthPGYmJihnPWVbYV0pO2ErKyllW2FdPWIuY2FsbCh0aGlzLGcsYyxkKX1yZXR1cm4gZS5qb2luKFBjKX07dS5wcm90b3R5cGUucz1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKG1iLGZ1bmN0aW9uKGEsYyxkKXstMTxkLmluZGV4T2YoXCIrXCIpP2Q9ZC5yZXBsYWNlKC9cXCsvZyxcIl9fX1wiKTotMTxkLmluZGV4T2YoXCJfX19cIikmJihkPWQucmVwbGFjZSgvX19fL2csXCIrXCIpKTtyZXR1cm5cIjpcIitjK1wiKFwiK1xuZCtcIilcIn0pfTt1LnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU9ITE7YT1hLnRyaW0oKTt2YXIgZj1tYi50ZXN0KGEpO2YmJihhPWEucmVwbGFjZShtYixmdW5jdGlvbihhLGIsYyl7cmV0dXJuXCI6XCIrYitcIihcIitjLnJlcGxhY2UoL1xccy9nLFwiXCIpK1wiKVwifSksYT10aGlzLnMoYSkpO2E9YS5yZXBsYWNlKGtlLG5iK1wiICQxXCIpO2E9YS5yZXBsYWNlKGxlLGZ1bmN0aW9uKGEsZixnKXtlfHwoYT1kLkIoZyxmLGIsYyksZT1lfHxhLnN0b3AsZj1hLlhhLGc9YS52YWx1ZSk7cmV0dXJuIGYrZ30pO2YmJihhPXRoaXMucyhhKSk7cmV0dXJuIGF9O3UucHJvdG90eXBlLkI9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9YS5pbmRleE9mKG9iKTswPD1hLmluZGV4T2YobmIpP2E9dGhpcy5GKGEsZCk6MCE9PWUmJihhPWM/dGhpcy5vKGEsYyk6YSk7Yz0hMTswPD1lJiYoYj1cIlwiLGM9ITApO2lmKGMpe3ZhciBmPSEwO2MmJihhPWEucmVwbGFjZShtZSxmdW5jdGlvbihhLGIpe3JldHVyblwiID4gXCIrXG5ifSkpfWE9YS5yZXBsYWNlKG5lLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4nW2Rpcj1cIicrYysnXCJdICcrYitcIiwgXCIrYisnW2Rpcj1cIicrYysnXCJdJ30pO3JldHVybnt2YWx1ZTphLFhhOmIsc3RvcDpmfX07dS5wcm90b3R5cGUubz1mdW5jdGlvbihhLGIpe2E9YS5zcGxpdChRYyk7YVswXSs9YjtyZXR1cm4gYS5qb2luKFFjKX07dS5wcm90b3R5cGUuRj1mdW5jdGlvbihhLGIpe3ZhciBjPWEubWF0Y2goUmMpO3JldHVybihjPWMmJmNbMl0udHJpbSgpfHxcIlwiKT9jWzBdLm1hdGNoKFNjKT9hLnJlcGxhY2UoUmMsZnVuY3Rpb24oYSxjLGYpe3JldHVybiBiK2Z9KTpjLnNwbGl0KFNjKVswXT09PWI/YzpvZTphLnJlcGxhY2UobmIsYil9O3UucHJvdG90eXBlLkg9ZnVuY3Rpb24oYSl7YS5zZWxlY3Rvcj1hLnBhcnNlZFNlbGVjdG9yO3RoaXMudyhhKTt0aGlzLmwoYSx0aGlzLkspfTt1LnByb3RvdHlwZS53PWZ1bmN0aW9uKGEpe2Euc2VsZWN0b3I9PT1wZSYmKGEuc2VsZWN0b3I9XCJodG1sXCIpfTtcbnUucHJvdG90eXBlLks9ZnVuY3Rpb24oYSl7cmV0dXJuIGEubWF0Y2gob2IpP3RoaXMuZyhhLFRjKTp0aGlzLm8oYS50cmltKCksVGMpfTtKLk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHUucHJvdG90eXBlLHthOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5cInN0eWxlLXNjb3BlXCJ9fX0pO3ZhciBtYj0vOihudGhbLVxcd10rKVxcKChbXildKylcXCkvLFRjPVwiOm5vdCguc3R5bGUtc2NvcGUpXCIsUGM9XCIsXCIsbGU9LyhefFtcXHM+K35dKykoKD86XFxbLis/XFxdfFteXFxzPit+PVtdKSspL2csU2M9L1tbLjojKl0vLG5iPVwiOmhvc3RcIixwZT1cIjpyb290XCIsb2I9XCI6OnNsb3R0ZWRcIixrZT1uZXcgUmVnRXhwKFwiXihcIitvYitcIilcIiksUmM9Lyg6aG9zdCkoPzpcXCgoKD86XFwoW14pKF0qXFwpfFteKShdKikrPylcXCkpLyxtZT0vKD86OjpzbG90dGVkKSg/OlxcKCgoPzpcXChbXikoXSpcXCl8W14pKF0qKSs/KVxcKSkvLG5lPS8oLiopOmRpclxcKCg/OihsdHJ8cnRsKSlcXCkvLFxuamU9XCIuXCIsUWM9XCI6XCIsaWU9XCJjbGFzc1wiLG9lPVwic2hvdWxkX25vdF9tYXRjaFwiLHA9bmV3IHU7di5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGE/YS5fX3N0eWxlSW5mbzpudWxsfTt2LnNldD1mdW5jdGlvbihhLGIpe3JldHVybiBhLl9fc3R5bGVJbmZvPWJ9O3YucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5EfTt2LnByb3RvdHlwZS5fZ2V0U3R5bGVSdWxlcz12LnByb3RvdHlwZS5jO3ZhciBVYz1mdW5jdGlvbihhKXtyZXR1cm4gYS5tYXRjaGVzfHxhLm1hdGNoZXNTZWxlY3Rvcnx8YS5tb3pNYXRjaGVzU2VsZWN0b3J8fGEubXNNYXRjaGVzU2VsZWN0b3J8fGEub01hdGNoZXNTZWxlY3Rvcnx8YS53ZWJraXRNYXRjaGVzU2VsZWN0b3J9KHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSkscWU9bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChcIlRyaWRlbnRcIik7bi5wcm90b3R5cGUuSD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9e30sZD1bXSxlPTA7VyhhLGZ1bmN0aW9uKGEpe2IuYyhhKTtcbmEuaW5kZXg9ZSsrO2IuRyhhLnUuY3NzVGV4dCxjKX0sZnVuY3Rpb24oYSl7ZC5wdXNoKGEpfSk7YS5iPWQ7YT1bXTtmb3IodmFyIGYgaW4gYylhLnB1c2goZik7cmV0dXJuIGF9O24ucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSl7aWYoIWEudSl7dmFyIGI9e30sYz17fTt0aGlzLmIoYSxjKSYmKGIuQz1jLGEucnVsZXM9bnVsbCk7Yi5jc3NUZXh0PXRoaXMuRihhKTthLnU9Yn19O24ucHJvdG90eXBlLmI9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnU7aWYoYyl7aWYoYy5DKXJldHVybiBPYmplY3QuYXNzaWduKGIsYy5DKSwhMH1lbHNle2M9YS5wYXJzZWRDc3NUZXh0O2Zvcih2YXIgZDthPXVhLmV4ZWMoYyk7KXtkPShhWzJdfHxhWzNdKS50cmltKCk7aWYoXCJpbmhlcml0XCIhPT1kfHxcInVuc2V0XCIhPT1kKWJbYVsxXS50cmltKCldPWQ7ZD0hMH1yZXR1cm4gZH19O24ucHJvdG90eXBlLkY9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuSyhhLnBhcnNlZENzc1RleHQpfTtuLnByb3RvdHlwZS5LPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoaGUsXG5cIlwiKS5yZXBsYWNlKHVhLFwiXCIpfTtuLnByb3RvdHlwZS5HPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjO2M9ZmUuZXhlYyhhKTspe3ZhciBkPWNbMV07XCI6XCIhPT1jWzJdJiYoYltkXT0hMCl9fTtuLnByb3RvdHlwZS5hYT1mdW5jdGlvbihhKXtmb3IodmFyIGI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSksYz0wLGQ7YzxiLmxlbmd0aDtjKyspZD1iW2NdLGFbZF09dGhpcy5hKGFbZF0sYSl9O24ucHJvdG90eXBlLmE9ZnVuY3Rpb24oYSxiKXtpZihhKWlmKDA8PWEuaW5kZXhPZihcIjtcIikpYT10aGlzLmYoYSxiKTtlbHNle3ZhciBjPXRoaXM7YT1JYyhhLGZ1bmN0aW9uKGEsZSxmLGcpe2lmKCFlKXJldHVybiBhK2c7KGU9Yy5hKGJbZV0sYikpJiZcImluaXRpYWxcIiE9PWU/XCJhcHBseS1zaGltLWluaGVyaXRcIj09PWUmJihlPVwiaW5oZXJpdFwiKTplPWMuYShiW2ZdfHxmLGIpfHxmO3JldHVybiBhKyhlfHxcIlwiKStnfSl9cmV0dXJuIGEmJmEudHJpbSgpfHxcIlwifTtuLnByb3RvdHlwZS5mPWZ1bmN0aW9uKGEsXG5iKXthPWEuc3BsaXQoXCI7XCIpO2Zvcih2YXIgYz0wLGQsZTtjPGEubGVuZ3RoO2MrKylpZihkPWFbY10pe3ZhLmxhc3RJbmRleD0wO2lmKGU9dmEuZXhlYyhkKSlkPXRoaXMuYShiW2VbMV1dLGIpO2Vsc2UgaWYoZT1kLmluZGV4T2YoXCI6XCIpLC0xIT09ZSl7dmFyIGY9ZC5zdWJzdHJpbmcoZSk7Zj1mLnRyaW0oKTtmPXRoaXMuYShmLGIpfHxmO2Q9ZC5zdWJzdHJpbmcoMCxlKStmfWFbY109ZCYmZC5sYXN0SW5kZXhPZihcIjtcIik9PT1kLmxlbmd0aC0xP2Quc2xpY2UoMCwtMSk6ZHx8XCJcIn1yZXR1cm4gYS5qb2luKFwiO1wiKX07bi5wcm90b3R5cGUuQj1mdW5jdGlvbihhLGIpe3ZhciBjPVwiXCI7YS51fHx0aGlzLmMoYSk7YS51LmNzc1RleHQmJihjPXRoaXMuZihhLnUuY3NzVGV4dCxiKSk7YS5jc3NUZXh0PWN9O24ucHJvdG90eXBlLnc9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmNzc1RleHQsZD1hLmNzc1RleHQ7bnVsbD09YS55YSYmKGEueWE9Z2UudGVzdChjKSk7aWYoYS55YSlpZihudWxsPT1cbmEuWSl7YS5ZPVtdO2Zvcih2YXIgZSBpbiBiKWQ9YltlXSxkPWQoYyksYyE9PWQmJihjPWQsYS5ZLnB1c2goZSkpfWVsc2V7Zm9yKGU9MDtlPGEuWS5sZW5ndGg7KytlKWQ9YlthLllbZV1dLGM9ZChjKTtkPWN9YS5jc3NUZXh0PWR9O24ucHJvdG90eXBlLk89ZnVuY3Rpb24oYSxiKXt2YXIgYz17fSxkPXRoaXMsZT1bXTtXKGEsZnVuY3Rpb24oYSl7YS51fHxkLmMoYSk7dmFyIGY9YS52fHxhLnBhcnNlZFNlbGVjdG9yO2ImJmEudS5DJiZmJiZVYy5jYWxsKGIsZikmJihkLmIoYSxjKSxhPWEuaW5kZXgsZj1wYXJzZUludChhLzMyLDEwKSxlW2ZdPShlW2ZdfHwwKXwxPDxhJTMyKX0sbnVsbCwhMCk7cmV0dXJue0M6YyxrZXk6ZX19O24ucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEsYixjLGQpe2IudXx8dGhpcy5jKGIpO2lmKGIudS5DKXt2YXIgZT1SKGEpO2E9ZS5pcztlPWUuVjtlPWE/cC5mKGEsZSk6XCJodG1sXCI7dmFyIGY9Yi5wYXJzZWRTZWxlY3RvcixnPVwiOmhvc3QgPiAqXCI9PT1mfHxcblwiaHRtbFwiPT09ZixoPTA9PT1mLmluZGV4T2YoXCI6aG9zdFwiKSYmIWc7XCJzaGFkeVwiPT09YyYmKGc9Zj09PWUrXCIgPiAqLlwiK2V8fC0xIT09Zi5pbmRleE9mKFwiaHRtbFwiKSxoPSFnJiYwPT09Zi5pbmRleE9mKGUpKTtcInNoYWRvd1wiPT09YyYmKGc9XCI6aG9zdCA+ICpcIj09PWZ8fFwiaHRtbFwiPT09ZixoPWgmJiFnKTtpZihnfHxoKWM9ZSxoJiYoeiYmIWIudiYmKGIudj1wLm0oYixwLmcscC5pKGEpLGUpKSxjPWIudnx8ZSksZCh7aWI6YyxiYjpoLHFiOmd9KX19O24ucHJvdG90eXBlLkk9ZnVuY3Rpb24oYSxiKXt2YXIgYz17fSxkPXt9LGU9dGhpcyxmPWImJmIuX19jc3NCdWlsZDtXKGIsZnVuY3Rpb24oYil7ZS5jYShhLGIsZixmdW5jdGlvbihmKXtVYy5jYWxsKGEucGJ8fGEsZi5pYikmJihmLmJiP2UuYihiLGMpOmUuYihiLGQpKX0pfSxudWxsLCEwKTtyZXR1cm57Z2I6ZCxhYjpjfX07bi5wcm90b3R5cGUuYmE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMsZT1SKGEpLGY9cC5mKGUuaXMsXG5lLlYpLGc9bmV3IFJlZ0V4cChcIig/Ol58W14uI1s6XSlcIisoYS5leHRlbmRzP1wiXFxcXFwiK2Yuc2xpY2UoMCwtMSkrXCJcXFxcXVwiOmYpK1wiKCR8Wy46W1xcXFxzPit+XSlcIik7ZT12LmdldChhKS5EO3ZhciBoPXRoaXMuaChlLGMpO3JldHVybiBwLmMoYSxlLGZ1bmN0aW9uKGEpe2QuQihhLGIpO3p8fEdjKGEpfHwhYS5jc3NUZXh0fHwoZC53KGEsaCksZC5sKGEsZyxmLGMpKX0pfTtuLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEsYil7YT1hLmI7dmFyIGM9e307aWYoIXomJmEpZm9yKHZhciBkPTAsZT1hW2RdO2Q8YS5sZW5ndGg7ZT1hWysrZF0pdGhpcy5qKGUsYiksY1tlLmtleWZyYW1lc05hbWVdPXRoaXMuaShlKTtyZXR1cm4gY307bi5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGIucmVwbGFjZShhLmYsYS5hKX19O24ucHJvdG90eXBlLmo9ZnVuY3Rpb24oYSxiKXthLmY9bmV3IFJlZ0V4cChhLmtleWZyYW1lc05hbWUsXCJnXCIpO2EuYT1hLmtleWZyYW1lc05hbWUrXG5cIi1cIitiO2Eudj1hLnZ8fGEuc2VsZWN0b3I7YS5zZWxlY3Rvcj1hLnYucmVwbGFjZShhLmtleWZyYW1lc05hbWUsYS5hKX07bi5wcm90b3R5cGUubD1mdW5jdGlvbihhLGIsYyxkKXthLnY9YS52fHxhLnNlbGVjdG9yO2Q9XCIuXCIrZDtmb3IodmFyIGU9YS52LnNwbGl0KFwiLFwiKSxmPTAsZz1lLmxlbmd0aCxoO2Y8ZyYmKGg9ZVtmXSk7ZisrKWVbZl09aC5tYXRjaChiKT9oLnJlcGxhY2UoYyxkKTpkK1wiIFwiK2g7YS5zZWxlY3Rvcj1lLmpvaW4oXCIsXCIpfTtuLnByb3RvdHlwZS5vPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiLGU9ZDtjJiYoZT1kLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxzKngtc2NvcGVcXFxccypcIitjK1wiXFxcXHMqXCIsXCJnXCIpLFwiIFwiKSk7ZSs9KGU/XCIgXCI6XCJcIikrXCJ4LXNjb3BlIFwiK2I7ZCE9PWUmJnFhKGEsZSl9O24ucHJvdG90eXBlLnM9ZnVuY3Rpb24oYSxiLGMsZCl7Yj1kP2QudGV4dENvbnRlbnR8fFwiXCI6dGhpcy5iYShhLGIsYyk7dmFyIGU9XG52LmdldChhKSxmPWUuYTtmJiYheiYmZiE9PWQmJihmLl91c2VDb3VudC0tLDA+PWYuX3VzZUNvdW50JiZmLnBhcmVudE5vZGUmJmYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmKSk7ej9lLmE/KGUuYS50ZXh0Q29udGVudD1iLGQ9ZS5hKTpiJiYoZD1lYihiLGMsYS5zaGFkb3dSb290LGUuYikpOmQ/ZC5wYXJlbnROb2RlfHwocWUmJi0xPGIuaW5kZXhPZihcIkBtZWRpYVwiKSYmKGQudGV4dENvbnRlbnQ9YiksSGMoZCxudWxsLGUuYikpOmImJihkPWViKGIsYyxudWxsLGUuYikpO2QmJihkLl91c2VDb3VudD1kLl91c2VDb3VudHx8MCxlLmEhPWQmJmQuX3VzZUNvdW50KyssZS5hPWQpO3JldHVybiBkfTtuLnByb3RvdHlwZS5tPWZ1bmN0aW9uKGEsYil7dmFyIGM9cGEoYSksZD10aGlzO2EudGV4dENvbnRlbnQ9VihjLGZ1bmN0aW9uKGEpe3ZhciBjPWEuY3NzVGV4dD1hLnBhcnNlZENzc1RleHQ7YS51JiZhLnUuY3NzVGV4dCYmKGM9Yy5yZXBsYWNlKEYud2EsXCJcIikucmVwbGFjZShGLkFhLFxuXCJcIiksYS5jc3NUZXh0PWQuZihjLGIpKX0pfTtKLk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG4ucHJvdG90eXBlLHtnOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5cIngtc2NvcGVcIn19fSk7dmFyIE09bmV3IG4scGI9e30sd2E9d2luZG93LmN1c3RvbUVsZW1lbnRzO2lmKHdhJiYheil7dmFyIHJlPXdhLmRlZmluZTt3YS5kZWZpbmU9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCIgU2hhZHkgRE9NIHN0eWxlcyBmb3IgXCIrYStcIiBcIiksZT1kb2N1bWVudC5oZWFkO2UuaW5zZXJ0QmVmb3JlKGQsKFE/US5uZXh0U2libGluZzpudWxsKXx8ZS5maXJzdENoaWxkKTtRPWQ7cGJbYV09ZDtyZXR1cm4gcmUuY2FsbCh3YSxhLGIsYyl9fWhhLnByb3RvdHlwZS5hPWZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXTtpZihhLkNbZV0hPT1iW2VdKXJldHVybiExfXJldHVybiEwfTtcbmhhLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXRoaXMuY2FjaGVbYV18fFtdO2UucHVzaCh7QzpiLHN0eWxlRWxlbWVudDpjLEE6ZH0pO2UubGVuZ3RoPnRoaXMuYyYmZS5zaGlmdCgpO3RoaXMuY2FjaGVbYV09ZX07aGEucHJvdG90eXBlLmZldGNoPWZ1bmN0aW9uKGEsYixjKXtpZihhPXRoaXMuY2FjaGVbYV0pZm9yKHZhciBkPWEubGVuZ3RoLTE7MDw9ZDtkLS0pe3ZhciBlPWFbZF07aWYodGhpcy5hKGUsYixjKSlyZXR1cm4gZX19O2lmKCF6KXt2YXIgVmM9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoSmMpLFdjPWZ1bmN0aW9uKGEpe1ZjLm9ic2VydmUoYSx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KX07aWYod2luZG93LmN1c3RvbUVsZW1lbnRzJiYhd2luZG93LmN1c3RvbUVsZW1lbnRzLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2spV2MoZG9jdW1lbnQpO2Vsc2V7dmFyIHFiPWZ1bmN0aW9uKCl7V2MoZG9jdW1lbnQuYm9keSl9O3dpbmRvdy5IVE1MSW1wb3J0cz9cbndpbmRvdy5IVE1MSW1wb3J0cy53aGVuUmVhZHkocWIpOnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2lmKFwibG9hZGluZ1wiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZSl7dmFyIGE9ZnVuY3Rpb24oKXtxYigpO2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsYSl9O2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsYSl9ZWxzZSBxYigpfSl9Tj1mdW5jdGlvbigpe0pjKFZjLnRha2VSZWNvcmRzKCkpfX12YXIgcmE9e30sVWQ9UHJvbWlzZS5yZXNvbHZlKCksZmI9bnVsbCxMYz13aW5kb3cuSFRNTEltcG9ydHMmJndpbmRvdy5IVE1MSW1wb3J0cy53aGVuUmVhZHl8fG51bGwsZ2IseGE9bnVsbCxmYT1udWxsO3EucHJvdG90eXBlLnhhPWZ1bmN0aW9uKCl7IXRoaXMuZW5xdWV1ZWQmJmZhJiYodGhpcy5lbnF1ZXVlZD0hMCx1YihmYSkpfTtxLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEpe2EuX19zZWVuQnlTaGFkeUNTU3x8XG4oYS5fX3NlZW5CeVNoYWR5Q1NTPSEwLHRoaXMuY3VzdG9tU3R5bGVzLnB1c2goYSksdGhpcy54YSgpKX07cS5wcm90b3R5cGUuYT1mdW5jdGlvbihhKXtyZXR1cm4gYS5fX3NoYWR5Q1NTQ2FjaGVkU3R5bGU/YS5fX3NoYWR5Q1NTQ2FjaGVkU3R5bGU6YS5nZXRTdHlsZT9hLmdldFN0eWxlKCk6YX07cS5wcm90b3R5cGUuYz1mdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmN1c3RvbVN0eWxlcyxiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl07aWYoIWMuX19zaGFkeUNTU0NhY2hlZFN0eWxlKXt2YXIgZD10aGlzLmEoYyk7ZCYmKGQ9ZC5fX2FwcGxpZWRFbGVtZW50fHxkLHhhJiZ4YShkKSxjLl9fc2hhZHlDU1NDYWNoZWRTdHlsZT1kKX19cmV0dXJuIGF9O3EucHJvdG90eXBlLmFkZEN1c3RvbVN0eWxlPXEucHJvdG90eXBlLmI7cS5wcm90b3R5cGUuZ2V0U3R5bGVGb3JDdXN0b21TdHlsZT1xLnByb3RvdHlwZS5hO3EucHJvdG90eXBlLnByb2Nlc3NTdHlsZXM9cS5wcm90b3R5cGUuYztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHEucHJvdG90eXBlLHt0cmFuc2Zvcm1DYWxsYmFjazp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHhhfSxzZXQ6ZnVuY3Rpb24oYSl7eGE9YX19LHZhbGlkYXRlQ2FsbGJhY2s6e2dldDpmdW5jdGlvbigpe3JldHVybiBmYX0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPSExO2ZhfHwoYj0hMCk7ZmE9YTtiJiZ0aGlzLnhhKCl9fX0pO3ZhciBYYz1uZXcgaGE7Zy5wcm90b3R5cGUudz1mdW5jdGlvbigpe04oKX07Zy5wcm90b3R5cGUuST1mdW5jdGlvbihhKXt2YXIgYj10aGlzLm1bYV09KHRoaXMubVthXXx8MCkrMTtyZXR1cm4gYStcIi1cIitifTtnLnByb3RvdHlwZS5IYT1mdW5jdGlvbihhKXtyZXR1cm4gcGEoYSl9O2cucHJvdG90eXBlLkphPWZ1bmN0aW9uKGEpe3JldHVybiBWKGEpfTtnLnByb3RvdHlwZS5IPWZ1bmN0aW9uKGEpe2E9YS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVwiKTtmb3IodmFyIGI9W10sYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1cbmFbY107Yi5wdXNoKGQudGV4dENvbnRlbnQpO2QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKX1yZXR1cm4gYi5qb2luKFwiXCIpLnRyaW0oKX07Zy5wcm90b3R5cGUuYWE9ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVwiKSk/YS5nZXRBdHRyaWJ1dGUoXCJjc3MtYnVpbGRcIil8fFwiXCI6XCJcIn07Zy5wcm90b3R5cGUucHJlcGFyZVRlbXBsYXRlPWZ1bmN0aW9uKGEsYixjKXtpZighYS5mKXthLmY9ITA7YS5uYW1lPWI7YS5leHRlbmRzPWM7cmFbYl09YTt2YXIgZD10aGlzLmFhKGEpLGU9dGhpcy5IKGEpO2M9e2lzOmIsZXh0ZW5kczpjLG1iOmR9O3p8fHAuYihhLmNvbnRlbnQsYik7dGhpcy5jKCk7dmFyIGY9dmEudGVzdChlKXx8dWEudGVzdChlKTt2YS5sYXN0SW5kZXg9MDt1YS5sYXN0SW5kZXg9MDtlPWRiKGUpO2YmJkEmJnRoaXMuYSYmdGhpcy5hLnRyYW5zZm9ybVJ1bGVzKGUsYik7YS5fc3R5bGVBc3Q9ZTthLmc9ZDtkPVtdO0F8fChkPU0uSChhLl9zdHlsZUFzdCkpO1xuaWYoIWQubGVuZ3RofHxBKWI9dGhpcy5PKGMsYS5fc3R5bGVBc3Qsej9hLmNvbnRlbnQ6bnVsbCxwYltiXSksYS5hPWI7YS5jPWR9fTtnLnByb3RvdHlwZS5PPWZ1bmN0aW9uKGEsYixjLGQpe2I9cC5jKGEsYik7aWYoYi5sZW5ndGgpcmV0dXJuIGViKGIsYS5pcyxjLGQpfTtnLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhKXt2YXIgYj1SKGEpLGM9Yi5pcztiPWIuVjt2YXIgZD1wYltjXTtjPXJhW2NdO2lmKGMpe3ZhciBlPWMuX3N0eWxlQXN0O3ZhciBmPWMuY31yZXR1cm4gdi5zZXQoYSxuZXcgdihlLGQsZiwwLGIpKX07Zy5wcm90b3R5cGUuRj1mdW5jdGlvbigpeyF0aGlzLmEmJndpbmRvdy5TaGFkeUNTUyYmd2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbSYmKHRoaXMuYT13aW5kb3cuU2hhZHlDU1MuQXBwbHlTaGltLHRoaXMuYS5pbnZhbGlkQ2FsbGJhY2s9U2QpfTtnLnByb3RvdHlwZS5HPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczshdGhpcy5iJiZ3aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5DdXN0b21TdHlsZUludGVyZmFjZSYmXG4odGhpcy5iPXdpbmRvdy5TaGFkeUNTUy5DdXN0b21TdHlsZUludGVyZmFjZSx0aGlzLmIudHJhbnNmb3JtQ2FsbGJhY2s9ZnVuY3Rpb24oYil7YS5zKGIpfSx0aGlzLmIudmFsaWRhdGVDYWxsYmFjaz1mdW5jdGlvbigpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpeyhhLmIuZW5xdWV1ZWR8fGEuaSkmJmEuZigpfSl9KX07Zy5wcm90b3R5cGUuYz1mdW5jdGlvbigpe3RoaXMuRigpO3RoaXMuRygpfTtnLnByb3RvdHlwZS5mPWZ1bmN0aW9uKCl7dGhpcy5jKCk7aWYodGhpcy5iKXt2YXIgYT10aGlzLmIucHJvY2Vzc1N0eWxlcygpO3RoaXMuYi5lbnF1ZXVlZCYmKEE/dGhpcy5GYShhKToodGhpcy5vKHRoaXMuZyx0aGlzLmgpLHRoaXMuQihhKSksdGhpcy5iLmVucXVldWVkPSExLHRoaXMuaSYmIUEmJnRoaXMuc3R5bGVEb2N1bWVudCgpKX19O2cucHJvdG90eXBlLnN0eWxlRWxlbWVudD1mdW5jdGlvbihhLGIpe3ZhciBjPVIoYSkuaXMsZD12LmdldChhKTtkfHwoZD10aGlzLmNhKGEpKTtcbnRoaXMuaihhKXx8KHRoaXMuaT0hMCk7YiYmKGQuTj1kLk58fHt9LE9iamVjdC5hc3NpZ24oZC5OLGIpKTtpZihBKXtpZihkLk4pe2I9ZC5OO2Zvcih2YXIgZSBpbiBiKW51bGw9PT1lP2Euc3R5bGUucmVtb3ZlUHJvcGVydHkoZSk6YS5zdHlsZS5zZXRQcm9wZXJ0eShlLGJbZV0pfWlmKCgoZT1yYVtjXSl8fHRoaXMuaihhKSkmJmUmJmUuYSYmIUtjKGUpKXtpZihLYyhlKXx8ZS5fYXBwbHlTaGltVmFsaWRhdGluZ1ZlcnNpb24hPT1lLl9hcHBseVNoaW1OZXh0VmVyc2lvbil0aGlzLmMoKSx0aGlzLmEmJnRoaXMuYS50cmFuc2Zvcm1SdWxlcyhlLl9zdHlsZUFzdCxjKSxlLmEudGV4dENvbnRlbnQ9cC5jKGEsZC5EKSxUZChlKTt6JiYoYz1hLnNoYWRvd1Jvb3QpJiYoYy5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIikudGV4dENvbnRlbnQ9cC5jKGEsZC5EKSk7ZC5EPWUuX3N0eWxlQXN0fX1lbHNlIHRoaXMubyhhLGQpLGQubGEmJmQubGEubGVuZ3RoJiZ0aGlzLksoYSxkKX07Zy5wcm90b3R5cGUubD1cbmZ1bmN0aW9uKGEpe3JldHVybihhPWEuZ2V0Um9vdE5vZGUoKS5ob3N0KT92LmdldChhKT9hOnRoaXMubChhKTp0aGlzLmd9O2cucHJvdG90eXBlLmo9ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT10aGlzLmd9O2cucHJvdG90eXBlLks9ZnVuY3Rpb24oYSxiKXt2YXIgYz1SKGEpLmlzLGQ9WGMuZmV0Y2goYyxiLkosYi5sYSksZT1kP2Quc3R5bGVFbGVtZW50Om51bGwsZj1iLkE7Yi5BPWQmJmQuQXx8dGhpcy5JKGMpO2U9TS5zKGEsYi5KLGIuQSxlKTt6fHxNLm8oYSxiLkEsZik7ZHx8WGMuYihjLGIuSixlLGIuQSl9O2cucHJvdG90eXBlLm89ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmwoYSksZD12LmdldChjKTtjPU9iamVjdC5jcmVhdGUoZC5KfHxudWxsKTt2YXIgZT1NLkkoYSxiLkQpO2E9TS5PKGQuRCxhKS5DO09iamVjdC5hc3NpZ24oYyxlLmFiLGEsZS5nYik7dGhpcy5iYShjLGIuTik7TS5hYShjKTtiLko9Y307Zy5wcm90b3R5cGUuYmE9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMgaW4gYil7dmFyIGQ9XG5iW2NdO2lmKGR8fDA9PT1kKWFbY109ZH19O2cucHJvdG90eXBlLnN0eWxlRG9jdW1lbnQ9ZnVuY3Rpb24oYSl7dGhpcy5zdHlsZVN1YnRyZWUodGhpcy5nLGEpfTtnLnByb3RvdHlwZS5zdHlsZVN1YnRyZWU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnNoYWRvd1Jvb3Q7KGN8fHRoaXMuaihhKSkmJnRoaXMuc3R5bGVFbGVtZW50KGEsYik7aWYoYj1jJiYoYy5jaGlsZHJlbnx8Yy5jaGlsZE5vZGVzKSlmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKXRoaXMuc3R5bGVTdWJ0cmVlKGJbYV0pO2Vsc2UgaWYoYT1hLmNoaWxkcmVufHxhLmNoaWxkTm9kZXMpZm9yKGI9MDtiPGEubGVuZ3RoO2IrKyl0aGlzLnN0eWxlU3VidHJlZShhW2JdKX07Zy5wcm90b3R5cGUuRmE9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPXRoaXMuYi5nZXRTdHlsZUZvckN1c3RvbVN0eWxlKGFbYl0pO2MmJnRoaXMuRWEoYyl9fTtnLnByb3RvdHlwZS5CPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cbjA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPXRoaXMuYi5nZXRTdHlsZUZvckN1c3RvbVN0eWxlKGFbYl0pO2MmJk0ubShjLHRoaXMuaC5KKX19O2cucHJvdG90eXBlLnM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPXBhKGEpO1coYyxmdW5jdGlvbihhKXt6P3AudyhhKTpwLkgoYSk7QSYmKGIuYygpLGIuYSYmYi5hLnRyYW5zZm9ybVJ1bGUoYSkpfSk7QT9hLnRleHRDb250ZW50PVYoYyk6dGhpcy5oLkQucnVsZXMucHVzaChjKX07Zy5wcm90b3R5cGUuRWE9ZnVuY3Rpb24oYSl7aWYoQSYmdGhpcy5hKXt2YXIgYj1wYShhKTt0aGlzLmMoKTt0aGlzLmEudHJhbnNmb3JtUnVsZXMoYik7YS50ZXh0Q29udGVudD1WKGIpfX07Zy5wcm90b3R5cGUuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlPWZ1bmN0aW9uKGEsYil7dmFyIGM7QXx8KGM9KHYuZ2V0KGEpfHx2LmdldCh0aGlzLmwoYSkpKS5KW2JdKTtyZXR1cm4oYz1jfHx3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhKS5nZXRQcm9wZXJ0eVZhbHVlKGIpKT9cbmMudHJpbSgpOlwiXCJ9O2cucHJvdG90eXBlLklhPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5nZXRSb290Tm9kZSgpO2I9Yj9iLnNwbGl0KC9cXHMvKTpbXTtjPWMuaG9zdCYmYy5ob3N0LmxvY2FsTmFtZTtpZighYyl7dmFyIGQ9YS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtpZihkKXtkPWQuc3BsaXQoL1xccy8pO2Zvcih2YXIgZT0wO2U8ZC5sZW5ndGg7ZSsrKWlmKGRbZV09PT1wLmEpe2M9ZFtlKzFdO2JyZWFrfX19YyYmYi5wdXNoKHAuYSxjKTtBfHwoYz12LmdldChhKSkmJmMuQSYmYi5wdXNoKE0uZyxjLkEpO3FhKGEsYi5qb2luKFwiIFwiKSl9O2cucHJvdG90eXBlLkdhPWZ1bmN0aW9uKGEpe3JldHVybiB2LmdldChhKX07Zy5wcm90b3R5cGUuZmx1c2g9Zy5wcm90b3R5cGUudztnLnByb3RvdHlwZS5wcmVwYXJlVGVtcGxhdGU9Zy5wcm90b3R5cGUucHJlcGFyZVRlbXBsYXRlO2cucHJvdG90eXBlLnN0eWxlRWxlbWVudD1nLnByb3RvdHlwZS5zdHlsZUVsZW1lbnQ7Zy5wcm90b3R5cGUuc3R5bGVEb2N1bWVudD1cbmcucHJvdG90eXBlLnN0eWxlRG9jdW1lbnQ7Zy5wcm90b3R5cGUuc3R5bGVTdWJ0cmVlPWcucHJvdG90eXBlLnN0eWxlU3VidHJlZTtnLnByb3RvdHlwZS5nZXRDb21wdXRlZFN0eWxlVmFsdWU9Zy5wcm90b3R5cGUuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlO2cucHJvdG90eXBlLnNldEVsZW1lbnRDbGFzcz1nLnByb3RvdHlwZS5JYTtnLnByb3RvdHlwZS5fc3R5bGVJbmZvRm9yTm9kZT1nLnByb3RvdHlwZS5HYTtnLnByb3RvdHlwZS50cmFuc2Zvcm1DdXN0b21TdHlsZUZvckRvY3VtZW50PWcucHJvdG90eXBlLnM7Zy5wcm90b3R5cGUuZ2V0U3R5bGVBc3Q9Zy5wcm90b3R5cGUuSGE7Zy5wcm90b3R5cGUuc3R5bGVBc3RUb1N0cmluZz1nLnByb3RvdHlwZS5KYTtnLnByb3RvdHlwZS5mbHVzaEN1c3RvbVN0eWxlcz1nLnByb3RvdHlwZS5mO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGcucHJvdG90eXBlLHtuYXRpdmVTaGFkb3c6e2dldDpmdW5jdGlvbigpe3JldHVybiB6fX0sbmF0aXZlQ3NzOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gQX19fSk7XG52YXIgSD1uZXcgZztpZih3aW5kb3cuU2hhZHlDU1Mpe3ZhciBZYz13aW5kb3cuU2hhZHlDU1MuQXBwbHlTaGltO3ZhciBaYz13aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2V9d2luZG93LlNoYWR5Q1NTPXtTY29waW5nU2hpbTpILHByZXBhcmVUZW1wbGF0ZTpmdW5jdGlvbihhLGIsYyl7SC5mKCk7SC5wcmVwYXJlVGVtcGxhdGUoYSxiLGMpfSxzdHlsZVN1YnRyZWU6ZnVuY3Rpb24oYSxiKXtILmYoKTtILnN0eWxlU3VidHJlZShhLGIpfSxzdHlsZUVsZW1lbnQ6ZnVuY3Rpb24oYSl7SC5mKCk7SC5zdHlsZUVsZW1lbnQoYSl9LHN0eWxlRG9jdW1lbnQ6ZnVuY3Rpb24oYSl7SC5mKCk7SC5zdHlsZURvY3VtZW50KGEpfSxnZXRDb21wdXRlZFN0eWxlVmFsdWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSC5nZXRDb21wdXRlZFN0eWxlVmFsdWUoYSxiKX0sbmF0aXZlQ3NzOkEsbmF0aXZlU2hhZG93Onp9O1ljJiYod2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbT1ZYyk7WmMmJih3aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2U9XG5aYyk7dmFyIHJiPXdpbmRvdy5jdXN0b21FbGVtZW50cyx5YT13aW5kb3cuSFRNTEltcG9ydHM7d2luZG93LldlYkNvbXBvbmVudHM9d2luZG93LldlYkNvbXBvbmVudHN8fHt9O2lmKHJiJiZyYi5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrKXt2YXIgemEsJGM9ZnVuY3Rpb24oKXtpZih6YSl7dmFyIGE9emE7emE9bnVsbDthKCk7cmV0dXJuITB9fSxhZD15YS53aGVuUmVhZHk7cmIucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayhmdW5jdGlvbihhKXt6YT1hO2FkKCRjKX0pO3lhLndoZW5SZWFkeT1mdW5jdGlvbihhKXthZChmdW5jdGlvbigpeyRjKCk/eWEud2hlblJlYWR5KGEpOmEoKX0pfX15YS53aGVuUmVhZHkoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt3aW5kb3cuV2ViQ29tcG9uZW50cy5yZWFkeT0hMDtkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIldlYkNvbXBvbmVudHNSZWFkeVwiLHtidWJibGVzOiEwfSkpfSl9KTtcbnZhciBiZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7YmQudGV4dENvbnRlbnQ9XCJib2R5IHt0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4gMC4yczsgfSBcXG5ib2R5W3VucmVzb2x2ZWRdIHtvcGFjaXR5OiAwOyBkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9zaXRpb246IHJlbGF0aXZlOyB9IFxcblwiO3ZhciBjZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKTtjZC5pbnNlcnRCZWZvcmUoYmQsY2QuZmlyc3RDaGlsZCl9KSgpO30pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdlYmNvbXBvbmVudHMtaGktc2QtY2UuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Ad2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvd2ViY29tcG9uZW50cy1oaS1zZC1jZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICdjb21tb24vUG9seWdvbic7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBMRVggfSBmcm9tICdMRVgnO1xyXG5cclxuaW1wb3J0IHsgUG9seWdvbkZpbGxlciB9IGZyb20gJ3BvbHlnb24tZmlsbGVyL1BvbHlnb25GaWxsZXInO1xyXG5cclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICdSZW5kZXJlcic7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VEb3dubG9hZGVyIH0gZnJvbSAnc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyJztcclxuaW1wb3J0IHsgSW5wdXREYXRhSW5pdGlhbGl6ZXIgfSBmcm9tICdzZXJ2aWNlcy9JbnB1dERhdGFJbml0aWFsaXplcic7XHJcbmltcG9ydCB7IExpZ2h0U2ltdWxhdG9yIH0gZnJvbSAnc2VydmljZXMvTGlnaHRTaW11bGF0b3InO1xyXG5pbXBvcnQgeyBQb2x5Z29uQ2xpcHBlciB9IGZyb20gJ3NlcnZpY2VzL1BvbHlnb25DbGlwcGVyJztcclxuXHJcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJ3VpL1VJQ29udHJvbGxlcic7XHJcblxyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckZpbmlzaGVkRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRmluaXNoZWRFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24ge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICBwcml2YXRlIHVpQ29udHJvbGxlcjogVUlDb250cm9sbGVyO1xyXG4gIHByaXZhdGUgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gIHByaXZhdGUgcG9seWdvbkZpbGxlcjogUG9seWdvbkZpbGxlcjtcclxuICBwcml2YXRlIHBvbHlnb25MYXllcjogTGF5ZXI7XHJcblxyXG4gIHByaXZhdGUgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgcHJpdmF0ZSBsaWdodFNpbXVsYXRvcjogTGlnaHRTaW11bGF0b3I7XHJcblxyXG4gIHByaXZhdGUgaXNSZW5kZXJpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIGlzTmV4dFJlbmRlclF1ZXVlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gbmV3IEV2ZW50QWdncmVnYXRvcigpO1xyXG4gICAgdGhpcy5pbWFnZURvd25sb2FkZXIgPSBuZXcgSW1hZ2VEb3dubG9hZGVyKCk7XHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIgPSBuZXcgUG9seWdvbkZpbGxlcih7XHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saWdodFNpbXVsYXRvciA9IG5ldyBMaWdodFNpbXVsYXRvcih7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICBwb2x5Z29uRmlsbGVyOiB0aGlzLnBvbHlnb25GaWxsZXJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGFnZSA9IG5ldyBTdGFnZSgpO1xyXG5cclxuICAgIHRoaXMudWlDb250cm9sbGVyID0gbmV3IFVJQ29udHJvbGxlcih7XHJcbiAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZSxcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgaW1hZ2VEb3dubG9hZGVyOiB0aGlzLmltYWdlRG93bmxvYWRlcixcclxuICAgICAgcG9seWdvbkNsaXBwZXI6IG5ldyBQb2x5Z29uQ2xpcHBlcigpXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uUmVuZGVyRXZlbnQgPSB0aGlzLm9uUmVuZGVyRXZlbnQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBpbml0KCkge1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBuZXcgTGF5ZXIoTEVYLlBPTFlHT05fTEFZRVJfTkFNRSk7XHJcbiAgICB0aGlzLnN0YWdlLmxheWVycy5wdXNoKHRoaXMucG9seWdvbkxheWVyKTtcclxuXHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIuaW5pdCgpO1xyXG4gICAgdGhpcy5saWdodFNpbXVsYXRvci5pbml0KCk7XHJcbiAgICB0aGlzLnVpQ29udHJvbGxlci5pbml0KCk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgY29uc3QgaW5wdXREYXRhSW5pdGlhbGl6ZXIgPSBuZXcgSW5wdXREYXRhSW5pdGlhbGl6ZXIoe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBpbWFnZURvd25sb2FkZXI6IHRoaXMuaW1hZ2VEb3dubG9hZGVyLFxyXG4gICAgICBwb2x5Z29uTGF5ZXI6IHRoaXMucG9seWdvbkxheWVyXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBpbnB1dERhdGFJbml0aWFsaXplci5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMucG9seWdvbkZpbGxlci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmxpZ2h0U2ltdWxhdG9yLmRlc3Ryb3koKTtcclxuICAgIHRoaXMudWlDb250cm9sbGVyLmRlc3Ryb3koKTtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25SZW5kZXJFdmVudChldmVudDogUmVuZGVyRXZlbnQpIHtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLmlzUmVuZGVyaW5nKSB7XHJcbiAgICAgIHRoaXMuaXNOZXh0UmVuZGVyUXVldWVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzUmVuZGVyaW5nID0gdHJ1ZTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHJlbmRlcigpIHtcclxuICAgIGF3YWl0IHRoaXMucG9seWdvbkZpbGxlci5maWxsUG9seWdvbnMoPFBvbHlnb25bXT50aGlzLnBvbHlnb25MYXllci5wYXRocyk7XHJcbiAgICB0aGlzLnN0YWdlLnJlbmRlcih0aGlzLnJlbmRlcmVyKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckZpbmlzaGVkRXZlbnQoKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNOZXh0UmVuZGVyUXVldWVkKSB7XHJcbiAgICAgIHRoaXMuaXNOZXh0UmVuZGVyUXVldWVkID0gZmFsc2U7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzUmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUmVuZGVyRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUmVuZGVyRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoUmVuZGVyRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUmVuZGVyRXZlbnQpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9BcHBsaWNhdGlvbi50cyIsImltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIaXRUZXN0UmVzdWx0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbGluZTogTGluZTtcclxuICBwdWJsaWMgcGF0aD86IFBhdGg7XHJcbiAgcHVibGljIGxheWVyPzogTGF5ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpbmU6IExpbmUsIHBhdGg/OiBQYXRoLCBsYXllcj86IExheWVyKSB7XHJcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0hpdFRlc3RSZXN1bHQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IEV2ZW50UXVldWUgfSBmcm9tICdldmVudHMvRXZlbnRRdWV1ZSc7XHJcblxyXG50eXBlIEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQ6IEFwcEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50QWdncmVnYXRvciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lck1hcCA9IG5ldyBNYXA8c3RyaW5nLCBFdmVudExpc3RlbmVyW10+KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudFF1ZXVlID0gbmV3IEV2ZW50UXVldWUoKTtcclxuICBwcml2YXRlIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyKSB7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcclxuXHJcbiAgICBpZiAoZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XHJcbiAgICAgIGV2ZW50TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdGVuZXJNYXAuc2V0KGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyKSB7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcclxuICAgIGNvbnN0IGxpc3RlbmVySW5kZXggPSBldmVudExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcclxuXHJcbiAgICBpZiAobGlzdGVuZXJJbmRleCAhPT0gLTEpIHtcclxuICAgICAgZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdGVuZXJNYXAuc2V0KGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IEFwcEV2ZW50KSB7XHJcbiAgICB0aGlzLmV2ZW50UXVldWUuZW5xdWV1ZShldmVudCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRGlzcGF0Y2hpbmcpIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50RnJvbVF1ZXVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc3BhdGNoRXZlbnRGcm9tUXVldWUoKSB7XHJcbiAgICB0aGlzLmlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudFF1ZXVlLmRlcXVldWUoKTtcclxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5nZXRFdmVudExpc3RlbmVycyhldmVudC5ldmVudFR5cGUpO1xyXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBsaXN0ZW5lcihldmVudCkpO1xyXG5cclxuICAgIGlmICh0aGlzLmV2ZW50UXVldWUuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRoaXMuaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50RnJvbVF1ZXVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lck1hcC5nZXQoZXZlbnRUeXBlKSB8fCBbXTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL0V2ZW50QWdncmVnYXRvci50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudFF1ZXVlIHtcclxuICBwcml2YXRlIF9xdWV1ZTogQXBwRXZlbnRbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgZW5xdWV1ZShldmVudDogQXBwRXZlbnQpIHtcclxuICAgIHRoaXMuX3F1ZXVlLnB1c2goZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlcXVldWUoKTogQXBwRXZlbnQge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVldWUgaXMgZW1wdHknKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcXVldWUuc3BsaWNlKDAsIDEpWzBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNFbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldExlbmd0aCgpID09PSAwO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvRXZlbnRRdWV1ZS50cyIsImltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29tbW9uL0NvbG9yJztcclxuaW1wb3J0IHsgTGlnaHRWZXJzb3JUeXBlIH0gZnJvbSAnY29tbW9uL0xpZ2h0VmVyc29yVHlwZSc7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICdjb21tb24vUG9seWdvbic7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtcclxuICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEV2ZW50LFxyXG4gIE5ld0xpZ2h0Q29sb3JFdmVudCxcclxuICBOZXdMaWdodFZlcnNvckV2ZW50LFxyXG4gIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LFxyXG4gIE5ld05vcm1hbE1hcEV2ZW50XHJcbn0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5cclxuaW1wb3J0IHsgQWN0aXZlRWRnZSB9IGZyb20gJ3BvbHlnb24tZmlsbGVyL0FjdGl2ZUVkZ2UnO1xyXG5pbXBvcnQgeyBBcHBGaWxsRGF0YSB9IGZyb20gJ3BvbHlnb24tZmlsbGVyL0FwcEZpbGxEYXRhJztcclxuaW1wb3J0IHsgRmlsbFN0cmlwIH0gZnJvbSAncG9seWdvbi1maWxsZXIvRmlsbFN0cmlwJztcclxuaW1wb3J0IHsgRmlsbFdvcmtlck1lc3NhZ2VUeXBlIH0gZnJvbSAncG9seWdvbi1maWxsZXIvRmlsbFdvcmtlck1lc3NhZ2VUeXBlJztcclxuXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmNvbnN0IEZJTExfV09SS0VSX1VSTCA9ICdmaWxsV29ya2VyLmpzJztcclxuXHJcbmludGVyZmFjZSBQb2x5Z29uRmlsbGVyRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbkZpbGxlciBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVuZGVyaW5nQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICBwcml2YXRlIGZpbGxXb3JrZXI6IFdvcmtlcjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBmaWxsRGF0YTogQXBwRmlsbERhdGEgPSB7XHJcbiAgICBiYWNrZ3JvdW5kVGV4dHVyZTogbmV3IEltYWdlRGF0YSgxLCAxKSxcclxuICAgIGhlaWdodE1hcDogbmV3IEltYWdlRGF0YSgxLCAxKSxcclxuICAgIGxpZ2h0Q29sb3I6IG5ldyBDb2xvcigwLCAwLCAwKSxcclxuICAgIGxpZ2h0VmVyc29yVHlwZTogTGlnaHRWZXJzb3JUeXBlLkNvbnN0YW50LFxyXG4gICAgbm9ybWFsTWFwOiBuZXcgSW1hZ2VEYXRhKDEsIDEpXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2x5Z29uRmlsbGVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcblxyXG4gICAgdGhpcy5vbk5ld0JhY2tncm91bmRUZXh0dXJlID0gdGhpcy5vbk5ld0JhY2tncm91bmRUZXh0dXJlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTmV3SGVpZ2h0TWFwID0gdGhpcy5vbk5ld0hlaWdodE1hcC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5ld0xpZ2h0Q29sb3IgPSB0aGlzLm9uTmV3TGlnaHRDb2xvci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5ld0xpZ2h0VmVyc29yID0gdGhpcy5vbk5ld0xpZ2h0VmVyc29yLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTmV3TGlnaHRWZXJzb3JUeXBlID0gdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5ld05vcm1hbE1hcCA9IHRoaXMub25OZXdOb3JtYWxNYXAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25GaWxsV29ya2VyTWVzc2FnZSA9IHRoaXMub25GaWxsV29ya2VyTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluamVjdENhbnZhc1JlbmRlcmluZ0NvbnRleHQocmVuZGVyaW5nQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQgPSByZW5kZXJpbmdDb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICBjb25zdCBldmVudEFnZ3JlZ2F0b3IgPSB0aGlzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25OZXdCYWNrZ3JvdW5kVGV4dHVyZVxyXG4gICAgKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKE5ld0hlaWdodE1hcEV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld0hlaWdodE1hcCk7XHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihOZXdMaWdodENvbG9yRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTmV3TGlnaHRDb2xvcik7XHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihOZXdMaWdodFZlcnNvckV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld0xpZ2h0VmVyc29yKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZSk7XHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihOZXdOb3JtYWxNYXBFdmVudC5ldmVudFR5cGUsIHRoaXMub25OZXdOb3JtYWxNYXApO1xyXG5cclxuICAgIHRoaXMuZmlsbFdvcmtlciA9IG5ldyBXb3JrZXIoRklMTF9XT1JLRVJfVVJMKTtcclxuICAgIHRoaXMuc2VuZEFwcEZpbGxEYXRhVG9Xb3JrZXIoKTtcclxuXHJcbiAgICB0aGlzLmZpbGxXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25GaWxsV29ya2VyTWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIGNvbnN0IGV2ZW50QWdncmVnYXRvciA9IHRoaXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIGV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbk5ld0JhY2tncm91bmRUZXh0dXJlXHJcbiAgICApO1xyXG4gICAgZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoTmV3SGVpZ2h0TWFwRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTmV3SGVpZ2h0TWFwKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKE5ld0xpZ2h0Q29sb3JFdmVudC5ldmVudFR5cGUsIHRoaXMub25OZXdMaWdodENvbG9yKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKE5ld0xpZ2h0VmVyc29yRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTmV3TGlnaHRWZXJzb3IpO1xyXG4gICAgZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZVxyXG4gICAgKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKE5ld05vcm1hbE1hcEV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld05vcm1hbE1hcCk7XHJcbiAgICB0aGlzLmZpbGxXb3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25GaWxsV29ya2VyTWVzc2FnZSk7XHJcbiAgICB0aGlzLmZpbGxXb3JrZXIudGVybWluYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmlsbFBvbHlnb25zKHBvbHlnb25zOiBQb2x5Z29uW10pIHtcclxuICAgIGNvbnN0IGZpbGxXb3JrZXIgPSB0aGlzLmZpbGxXb3JrZXI7XHJcblxyXG4gICAgZmlsbFdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5TdGFydEZpbGxcclxuICAgIH0pO1xyXG5cclxuICAgIHBvbHlnb25zLmZvckVhY2gocG9seWdvbiA9PiB0aGlzLmZpbGxQb2x5Z29uKHBvbHlnb24pKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmdW5jdGlvbiBvbk1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3I6IEVycm9yRXZlbnQpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGZpbGxXb3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSk7XHJcbiAgICAgICAgZmlsbFdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWxsV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xyXG4gICAgICBmaWxsV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XHJcblxyXG4gICAgICBmaWxsV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICB0eXBlOiBGaWxsV29ya2VyTWVzc2FnZVR5cGUuRW5kRmlsbFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZpbGxXb3JrZXJNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcclxuICAgIHRoaXMucmVuZGVyQXJyYXlCdWZmZXIoZXZlbnQuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckFycmF5QnVmZmVyKGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlcikge1xyXG4gICAgY29uc3QgdWludDhBcnJheSA9IG5ldyBVaW50OENsYW1wZWRBcnJheShhcnJheUJ1ZmZlcik7XHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKHVpbnQ4QXJyYXksIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsbFBvbHlnb24ocG9seWdvbjogUG9seWdvbikge1xyXG4gICAgY29uc3QgZmlsbFN0cmlwcyA9IHRoaXMuZ2V0UG9seWdvbkZpbGxTdHJpcHMocG9seWdvbik7XHJcblxyXG4gICAgdGhpcy5maWxsV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgdHlwZTogRmlsbFdvcmtlck1lc3NhZ2VUeXBlLkZpbGxTdHJpcHMsXHJcbiAgICAgIGZpbGxTdHJpcHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZW5kQXBwRmlsbERhdGFUb1dvcmtlcigpIHtcclxuICAgIHRoaXMuZmlsbFdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5GaWxsRGF0YSxcclxuICAgICAgd2lkdGg6IHRoaXMuY2FudmFzLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY2FudmFzLmhlaWdodCxcclxuICAgICAgYXBwRmlsbERhdGE6IHRoaXMuZmlsbERhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQb2x5Z29uRmlsbFN0cmlwcyhwb2x5Z29uOiBQb2x5Z29uKTogRmlsbFN0cmlwW10ge1xyXG4gICAgY29uc3QgdmVydGljZXMgPSBwb2x5Z29uLmdldFZlcnRpY2VzKCk7XHJcbiAgICBjb25zdCB2ZXJ0aWNlc0NvdW50ID0gcG9seWdvbi5nZXRWZXJ0aWNlc0NvdW50KCk7XHJcblxyXG4gICAgLy8gaW5kWzAgLi4gbi0xXVxyXG4gICAgY29uc3Qgc29ydGVkVmVydGV4SW5kaWNlcyA9IHZlcnRpY2VzLm1hcCgoX3ZlcnRleCwgaW5kZXgpID0+IGluZGV4KTtcclxuICAgIHNvcnRlZFZlcnRleEluZGljZXMuc29ydCgoaSwgaikgPT4gdmVydGljZXNbaV0ueSAtIHZlcnRpY2VzW2pdLnkpO1xyXG5cclxuICAgIGNvbnN0IHlNaW4gPSB2ZXJ0aWNlc1tzb3J0ZWRWZXJ0ZXhJbmRpY2VzWzBdXS55O1xyXG4gICAgY29uc3QgeU1heCA9IHZlcnRpY2VzW3NvcnRlZFZlcnRleEluZGljZXNbdmVydGljZXNDb3VudCAtIDFdXS55O1xyXG5cclxuICAgIC8vIEFFVFxyXG4gICAgY29uc3QgYWN0aXZlRWRnZVRhYmxlOiBBY3RpdmVFZGdlW10gPSBbXTtcclxuICAgIGxldCBrID0gMDtcclxuICAgIGxldCBwcmV2aW91c1kgPSB5TWluO1xyXG5cclxuICAgIGNvbnN0IGZpbGxTdHJpcHM6IEZpbGxTdHJpcFtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgeSA9IHlNaW4gKyAxOyB5IDw9IHlNYXg7IHkgKz0gMSkge1xyXG4gICAgICBmb3IgKDsgayA8IHZlcnRpY2VzQ291bnQ7IGsgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IHZlcnRleEluZGV4ID0gc29ydGVkVmVydGV4SW5kaWNlc1trXTtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0aWNlc1t2ZXJ0ZXhJbmRleF07XHJcbiAgICAgICAgaWYgKHZlcnRleC55ICE9PSBwcmV2aW91c1kpIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNWZXJ0ZXhJbmRleCA9IHBvbHlnb24uZ2V0UHJldmlvdXNQb2ludEluZGV4KHZlcnRleEluZGV4KTtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1ZlcnRleCA9IHZlcnRpY2VzW3ByZXZpb3VzVmVydGV4SW5kZXhdO1xyXG4gICAgICAgIGlmIChwcmV2aW91c1ZlcnRleC55ID49IHZlcnRleC55KSB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2aW91c0VkZ2UgPSBuZXcgQWN0aXZlRWRnZSh2ZXJ0ZXgsIHByZXZpb3VzVmVydGV4KTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5wdXNoKHByZXZpb3VzRWRnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGVkZ2VJbmRleCA9IGFjdGl2ZUVkZ2VUYWJsZS5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIGVkZ2UgPT4gZWRnZS5sb3dlclBvaW50ID09PSBwcmV2aW91c1ZlcnRleCAmJiBlZGdlLmhpZ2hlclBvaW50ID09PSB2ZXJ0ZXhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBhY3RpdmVFZGdlVGFibGUuc3BsaWNlKGVkZ2VJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXh0VmVydGV4SW5kZXggPSBwb2x5Z29uLmdldE5leHRQb2ludEluZGV4KHZlcnRleEluZGV4KTtcclxuICAgICAgICBjb25zdCBuZXh0VmVydGV4ID0gdmVydGljZXNbbmV4dFZlcnRleEluZGV4XTtcclxuICAgICAgICBpZiAobmV4dFZlcnRleC55ID49IHZlcnRleC55KSB7XHJcbiAgICAgICAgICBjb25zdCBuZXh0RWRnZSA9IG5ldyBBY3RpdmVFZGdlKHZlcnRleCwgbmV4dFZlcnRleCk7XHJcbiAgICAgICAgICBhY3RpdmVFZGdlVGFibGUucHVzaChuZXh0RWRnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGVkZ2VJbmRleCA9IGFjdGl2ZUVkZ2VUYWJsZS5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIGVkZ2UgPT4gZWRnZS5sb3dlclBvaW50ID09PSBuZXh0VmVydGV4ICYmIGVkZ2UuaGlnaGVyUG9pbnQgPT09IHZlcnRleFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zcGxpY2UoZWRnZUluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zb3J0KChlMSwgZTIpID0+IGUxLnggLSBlMi54KTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZlRWRnZVRhYmxlLmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgY29uc3QgZTEgPSBhY3RpdmVFZGdlVGFibGVbaV07XHJcbiAgICAgICAgY29uc3QgZTIgPSBhY3RpdmVFZGdlVGFibGVbaSArIDFdO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnJlbmRlcmluZ0NvbnRleHQuZmlsbFJlY3QoZTEueCwgeSwgZTIueCAtIGUxLngsIDEpO1xyXG4gICAgICAgIGZpbGxTdHJpcHMucHVzaCh7XHJcbiAgICAgICAgICB5LFxyXG4gICAgICAgICAgZnJvbVg6IGUxLngsXHJcbiAgICAgICAgICB0b1g6IGUyLnhcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYWN0aXZlRWRnZVRhYmxlLmZvckVhY2goZWRnZSA9PiBlZGdlLm5leHRTY2FuTGluZSgpKTtcclxuICAgICAgcHJldmlvdXNZID0geTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsbFN0cmlwcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25OZXdCYWNrZ3JvdW5kVGV4dHVyZShldmVudDogTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCkge1xyXG4gICAgdGhpcy5maWxsRGF0YS5iYWNrZ3JvdW5kVGV4dHVyZSA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgICB0aGlzLnNlbmRBcHBGaWxsRGF0YVRvV29ya2VyKCk7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25OZXdIZWlnaHRNYXAoZXZlbnQ6IE5ld0hlaWdodE1hcEV2ZW50KSB7XHJcbiAgICB0aGlzLmZpbGxEYXRhLmhlaWdodE1hcCA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgICB0aGlzLnNlbmRBcHBGaWxsRGF0YVRvV29ya2VyKCk7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25OZXdMaWdodENvbG9yKGV2ZW50OiBOZXdMaWdodENvbG9yRXZlbnQpIHtcclxuICAgIHRoaXMuZmlsbERhdGEubGlnaHRDb2xvciA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgICB0aGlzLnNlbmRBcHBGaWxsRGF0YVRvV29ya2VyKCk7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25OZXdMaWdodFZlcnNvcihldmVudDogTmV3TGlnaHRWZXJzb3JFdmVudCkge1xyXG4gICAgY29uc3QgbGlnaHRWZXJzb3IgPSBldmVudC5wYXlsb2FkO1xyXG5cclxuICAgIHRoaXMuZmlsbFdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5MaWdodFZlcnNvcixcclxuICAgICAgdmVyc29yOiB7XHJcbiAgICAgICAgeDogbGlnaHRWZXJzb3IueCxcclxuICAgICAgICB5OiBsaWdodFZlcnNvci55LFxyXG4gICAgICAgIHo6IGxpZ2h0VmVyc29yLnpcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3TGlnaHRWZXJzb3JUeXBlKGV2ZW50OiBOZXdMaWdodFZlcnNvclR5cGVFdmVudCkge1xyXG4gICAgdGhpcy5maWxsRGF0YS5saWdodFZlcnNvclR5cGUgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5zZW5kQXBwRmlsbERhdGFUb1dvcmtlcigpO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3Tm9ybWFsTWFwKGV2ZW50OiBOZXdOb3JtYWxNYXBFdmVudCkge1xyXG4gICAgdGhpcy5maWxsRGF0YS5ub3JtYWxNYXAgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5zZW5kQXBwRmlsbERhdGFUb1dvcmtlcigpO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3BvbHlnb24tZmlsbGVyL1BvbHlnb25GaWxsZXIudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogSW1hZ2VEYXRhO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbWFnZURhdGE6IEltYWdlRGF0YSkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gaW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdOZXdCYWNrZ3JvdW5kVGV4dHVyZSc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3SGVpZ2h0TWFwRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IEltYWdlRGF0YTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3SGVpZ2h0TWFwRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlRGF0YTogSW1hZ2VEYXRhKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3SGVpZ2h0TWFwRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3SGVpZ2h0TWFwRXZlbnQudHMiLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbW1vbi9Db2xvcic7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3TGlnaHRDb2xvckV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBDb2xvcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3TGlnaHRDb2xvckV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2xvcjogQ29sb3IpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld0xpZ2h0Q29sb3JFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodENvbG9yRXZlbnQudHMiLCJpbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0xpZ2h0VmVyc29yRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IFZlY3RvcjM7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0xpZ2h0VmVyc29yRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpZ2h0VmVyc29yOiBWZWN0b3IzKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBsaWdodFZlcnNvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodFZlcnNvckV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yRXZlbnQudHMiLCJpbXBvcnQgeyBMaWdodFZlcnNvclR5cGUgfSBmcm9tICdjb21tb24vTGlnaHRWZXJzb3JUeXBlJztcclxuXHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdMaWdodFZlcnNvclR5cGVFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogTGlnaHRWZXJzb3JUeXBlO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdMaWdodFZlcnNvclR5cGVFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IobGlnaHRWZXJzb3JUeXBlOiBMaWdodFZlcnNvclR5cGUpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGxpZ2h0VmVyc29yVHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodFZlcnNvclR5cGVFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFZlcnNvclR5cGVFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdOb3JtYWxNYXBFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogSW1hZ2VEYXRhO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdOb3JtYWxNYXBFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW1hZ2VEYXRhOiBJbWFnZURhdGEpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGltYWdlRGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdOb3JtYWxNYXBFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudC50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBY3RpdmVFZGdlIHtcclxuICBwdWJsaWMgbG93ZXJQb2ludDogUG9pbnQ7XHJcbiAgcHVibGljIGhpZ2hlclBvaW50OiBQb2ludDtcclxuXHJcbiAgcHJpdmF0ZSBpbnZlcnNlU2xvcGU6IG51bWJlcjtcclxuICBwcml2YXRlIF94OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxvd2VyUG9pbnQ6IFBvaW50LCBoaWdoZXJQb2ludDogUG9pbnQpIHtcclxuICAgIHRoaXMubG93ZXJQb2ludCA9IGxvd2VyUG9pbnQ7XHJcbiAgICB0aGlzLmhpZ2hlclBvaW50ID0gaGlnaGVyUG9pbnQ7XHJcblxyXG4gICAgdGhpcy5feCA9IHRoaXMubG93ZXJQb2ludC54O1xyXG4gICAgdGhpcy5jYWxjdWxhdGVTbG9wZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmV4dFNjYW5MaW5lKCkge1xyXG4gICAgdGhpcy5feCArPSB0aGlzLmludmVyc2VTbG9wZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlU2xvcGUoKSB7XHJcbiAgICBpZiAodGhpcy5oaWdoZXJQb2ludC55ID09PSB0aGlzLmxvd2VyUG9pbnQueSkge1xyXG4gICAgICB0aGlzLmludmVyc2VTbG9wZSA9IDk5OTk5OTk5OTk5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnZlcnNlU2xvcGUgPSAodGhpcy5oaWdoZXJQb2ludC54IC0gdGhpcy5sb3dlclBvaW50LngpIC8gKHRoaXMuaGlnaGVyUG9pbnQueSAtIHRoaXMubG93ZXJQb2ludC55KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcG9seWdvbi1maWxsZXIvQWN0aXZlRWRnZS50cyIsImltcG9ydCB7IENPTE9SUyB9IGZyb20gJ2NvbW1vbi9DT0xPUlMnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmltcG9ydCB7IFBvbHlnb25GaWxsZXIgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9Qb2x5Z29uRmlsbGVyJztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmludGVyZmFjZSBSZW5kZXJlckRlcGVuZGVuY2llcyB7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwb2x5Z29uRmlsbGVyOiBQb2x5Z29uRmlsbGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlbmRlcmluZ0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwcml2YXRlIHBvbHlnb25GaWxsZXI6IFBvbHlnb25GaWxsZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUmVuZGVyZXJEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKGNvbnRleHQgPT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGNhbnZhcyAyZCByZW5kZXJpbmcgY29udGV4dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuZm9udCA9IGNvbmZpZ3VyYXRpb24uY2FudmFzRm9udDtcclxuXHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkZpbGxlcjtcclxuICAgIHRoaXMucG9seWdvbkZpbGxlci5pbmplY3RDYW52YXNSZW5kZXJpbmdDb250ZXh0KHRoaXMucmVuZGVyaW5nQ29udGV4dCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LnN0cm9rZVN0eWxlID0gQ09MT1JTLkJMQUNLLmZpbGxTdHlsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3UG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLmRyYXdQaXhlbChwb2ludC54LCBwb2ludC55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3UGl4ZWwoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3TGluZShsaW5lOiBMaW5lLCBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXMpOiB2b2lkO1xyXG4gIHB1YmxpYyBkcmF3TGluZShzdGFydFBvaW50OiBQb2ludCwgZW5kUG9pbnQ6IFBvaW50LCBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXMpOiB2b2lkO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgcHVibGljIGRyYXdMaW5lKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICBpZiAoYXJnc1swXSBpbnN0YW5jZW9mIExpbmUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZHJhd0xpbmVCZXR3ZWVuUG9pbnRzKGFyZ3NbMF0ucDEsIGFyZ3NbMF0ucDIsIGFyZ3NbMV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZHJhd0xpbmVCZXR3ZWVuUG9pbnRzKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRyYXdQYXRoKHBhdGg6IFBhdGgpIHtcclxuICAgIGNvbnN0IHBhdGhMaW5lUHJvcGVydGllcyA9IHBhdGguZ2V0TGluZVByb3BlcnRpZXMoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgcGF0aC5nZXRMaW5lSXRlcmF0b3IoKSkge1xyXG4gICAgICB0aGlzLmRyYXdMaW5lKGxpbmUsIHBhdGhMaW5lUHJvcGVydGllcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmlsbFRleHQodGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XHJcbiAgcHVibGljIGZpbGxUZXh0KHRleHQ6IHN0cmluZywgcG9pbnQ6IFBvaW50KTogdm9pZDtcclxuICBwdWJsaWMgZmlsbFRleHQodGV4dDogc3RyaW5nLCBwb2ludE9yWDogbnVtYmVyIHwgUG9pbnQsIHk/OiBudW1iZXIpIHtcclxuICAgIGxldCB4ID0gcG9pbnRPclg7XHJcbiAgICBpZiAodHlwZW9mIHBvaW50T3JYID09PSAnb2JqZWN0JyAmJiBwb2ludE9yWCBpbnN0YW5jZW9mIFBvaW50KSB7XHJcbiAgICAgIHggPSBwb2ludE9yWC54O1xyXG4gICAgICB5ID0gcG9pbnRPclgueTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuZmlsbFRleHQodGV4dCwgPG51bWJlcj54LCA8bnVtYmVyPnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd0xpbmVCZXR3ZWVuUG9pbnRzKFxyXG4gICAgc3RhcnRQb2ludDogUG9pbnQsXHJcbiAgICBlbmRQb2ludDogUG9pbnQsXHJcbiAgICBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXNcclxuICApIHtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5zdHJva2VTdHlsZSA9IGxpbmVQcm9wZXJ0aWVzLmNvbG9yLmZpbGxTdHlsZTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQubW92ZVRvKHN0YXJ0UG9pbnQueCwgc3RhcnRQb2ludC55KTtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5saW5lVG8oZW5kUG9pbnQueCwgZW5kUG9pbnQueSk7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuc3Ryb2tlKCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL1JlbmRlcmVyLnRzIiwiaW1wb3J0IHsgSGl0VGVzdFJlc3VsdCB9IGZyb20gJ2NvbW1vbi9IaXRUZXN0UmVzdWx0JztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnUmVuZGVyZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YWdlIHtcclxuICBwdWJsaWMgbGF5ZXJzOiBMYXllcltdID0gW107XHJcblxyXG4gIHB1YmxpYyByZW5kZXIocmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcbiAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IGxheWVyLnJlbmRlcihyZW5kZXJlcikpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUxheWVyKGxheWVyOiBMYXllcikge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxheWVycy5pbmRleE9mKGxheWVyKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGl0VGVzdChwb2ludDogUG9pbnQpOiBIaXRUZXN0UmVzdWx0IHwgbnVsbCB7XHJcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMubGF5ZXJzKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGxheWVyLmhpdFRlc3QocG9pbnQpO1xyXG4gICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbmRMYXllckJ5TmFtZShuYW1lOiBzdHJpbmcpOiBMYXllciB7XHJcbiAgICBjb25zdCBmb3VuZExheWVyID0gdGhpcy5sYXllcnMuZmluZChsYXllciA9PiBsYXllci5uYW1lID09PSBuYW1lKTtcclxuXHJcbiAgICBpZiAoIWZvdW5kTGF5ZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBMYXllciB3aXRoIG5hbWUgJHtuYW1lfSBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmb3VuZExheWVyO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9TdGFnZS50cyIsImV4cG9ydCBjbGFzcyBJbWFnZURvd25sb2FkZXIge1xyXG4gIHB1YmxpYyBhc3luYyBpbWFnZVRvSW1hZ2VEYXRhKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogUHJvbWlzZTxJbWFnZURhdGE+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCAyZCBkcmF3aW5nIGNhbnZhcyBjb250ZXh0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzSW1hZ2VEb3dubG9hZGVkKGltYWdlKSkge1xyXG4gICAgICBhd2FpdCB0aGlzLndhaXRGb3JJbWFnZShpbWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gaW1hZ2UubmF0dXJhbFdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGltYWdlLm5hdHVyYWxIZWlnaHQ7XHJcblxyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG5cclxuICAgIHJldHVybiBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWFnZS5uYXR1cmFsV2lkdGgsIGltYWdlLm5hdHVyYWxIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0ltYWdlRG93bmxvYWRlZChpbWFnZTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgaWYgKCFpbWFnZS5jb21wbGV0ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGltYWdlLm5hdHVyYWxXaWR0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHdhaXRGb3JJbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZnVuY3Rpb24gb25Mb2FkKCkge1xyXG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xyXG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBvbkVycm9yKCkge1xyXG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xyXG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XHJcbiAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xyXG4gICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0ltYWdlRG93bmxvYWRlci50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQge1xyXG4gIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgTmV3TGlnaHRDb2xvckV2ZW50LFxyXG4gIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LFxyXG4gIE5ld05vcm1hbE1hcEV2ZW50XHJcbn0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IExpZ2h0VmVyc29yVHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFZlcnNvclR5cGUnO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuXHJcbmltcG9ydCB7IEltYWdlRG93bmxvYWRlciB9IGZyb20gJ3NlcnZpY2VzL0ltYWdlRG93bmxvYWRlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBJbnB1dERhdGFJbml0aWFsaXplckRlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgcG9seWdvbkxheWVyOiBMYXllcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0RGF0YUluaXRpYWxpemVyIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcG9seWdvbkxheWVyOiBMYXllcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBJbnB1dERhdGFJbml0aWFsaXplckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5pbWFnZURvd25sb2FkZXIgPSBkZXBlbmRlbmNpZXMuaW1hZ2VEb3dubG9hZGVyO1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkxheWVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGluaXQoKSB7XHJcbiAgICB0aGlzLmFkZEluaXRpYWxQb2x5Z29ucygpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlc1RvRG93bmxvYWQ6IEhUTUxJbWFnZUVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGJhY2tncm91bmRUZXh0dXJlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGJhY2tncm91bmRUZXh0dXJlSW1hZ2Uuc3JjID0gY29uZmlndXJhdGlvbi5wcmVzZXRCYWNrZ3JvdW5kVGV4dHVyZXNbMF07XHJcblxyXG4gICAgY29uc3Qgbm9ybWFsTWFwSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG5vcm1hbE1hcEltYWdlLnNyYyA9IGNvbmZpZ3VyYXRpb24ucHJlc2V0Tm9ybWFsTWFwc1swXTtcclxuXHJcbiAgICBjb25zdCBoZWlnaHRNYXBJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaGVpZ2h0TWFwSW1hZ2Uuc3JjID0gY29uZmlndXJhdGlvbi5wcmVzZXRIZWlnaHRNYXBzWzBdO1xyXG5cclxuICAgIGltYWdlc1RvRG93bmxvYWQucHVzaChiYWNrZ3JvdW5kVGV4dHVyZUltYWdlLCBub3JtYWxNYXBJbWFnZSwgaGVpZ2h0TWFwSW1hZ2UpO1xyXG5cclxuICAgIGNvbnN0IGRvd25sb2FkZWRJbWFnZURhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgaW1hZ2VzVG9Eb3dubG9hZC5tYXAoaW1hZ2UgPT4gdGhpcy5pbWFnZURvd25sb2FkZXIuaW1hZ2VUb0ltYWdlRGF0YShpbWFnZSkpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQoZG93bmxvYWRlZEltYWdlRGF0YVswXSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3Tm9ybWFsTWFwRXZlbnQoZG93bmxvYWRlZEltYWdlRGF0YVsxXSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3SGVpZ2h0TWFwRXZlbnQoZG93bmxvYWRlZEltYWdlRGF0YVsyXSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRDb2xvckV2ZW50KGNvbmZpZ3VyYXRpb24ucHJlc2V0TGlnaHRDb2xvcikpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQoTGlnaHRWZXJzb3JUeXBlLkNvbnN0YW50KSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgLy8gTm90aGluZyB0byBkZXN0cm95IGhlcmVcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkSW5pdGlhbFBvbHlnb25zKCkge1xyXG4gICAgY29uc3QgcG9pbnRzMSA9IFtcclxuICAgICAgbmV3IFBvaW50KDk0LCA5MyksXHJcbiAgICAgIG5ldyBQb2ludCg2OSwgMzg2KSxcclxuICAgICAgbmV3IFBvaW50KDE5MCwgNTI1KSxcclxuICAgICAgbmV3IFBvaW50KDY2NCwgMzY0KVxyXG4gICAgXTtcclxuICAgIGNvbnN0IHBvbHlnb24xID0gbmV3IFBvbHlnb24ocG9pbnRzMSwgTGluZVByb3BlcnRpZXMuZ2V0RGVmYXVsdCgpKTtcclxuXHJcbiAgICBjb25zdCBwb2ludHMyID0gW1xyXG4gICAgICBuZXcgUG9pbnQoNzc3LCAxNDIpLFxyXG4gICAgICBuZXcgUG9pbnQoNzAwLCA1MCksXHJcbiAgICAgIG5ldyBQb2ludCg0MzMsIDM0KSxcclxuICAgICAgbmV3IFBvaW50KDQwNCwgMTU2KSxcclxuICAgICAgbmV3IFBvaW50KDUyNywgMjYzKSxcclxuICAgICAgbmV3IFBvaW50KDc1MCwgMzUwKVxyXG4gICAgXTtcclxuICAgIGNvbnN0IHBvbHlnb24yID0gbmV3IFBvbHlnb24ocG9pbnRzMiwgTGluZVByb3BlcnRpZXMuZ2V0RGVmYXVsdCgpKTtcclxuXHJcbiAgICB0aGlzLnBvbHlnb25MYXllci5wYXRocy5wdXNoKHBvbHlnb24xLCBwb2x5Z29uMik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9JbnB1dERhdGFJbml0aWFsaXplci50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBOZXdMaWdodFZlcnNvckV2ZW50LCBOZXdMaWdodFZlcnNvclR5cGVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IExpZ2h0VmVyc29yVHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFZlcnNvclR5cGUnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIExpZ2h0U2ltdWxhdG9yRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpZ2h0U2ltdWxhdG9yIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgc3RlcEluUmFkaWFucyA9IGNvbmZpZ3VyYXRpb24uY2lyY2xpbmdMaWdodC5pbnRlcnZhbCAvXHJcbiAgICBjb25maWd1cmF0aW9uLmNpcmNsaW5nTGlnaHQubGFwVGltZSAqXHJcbiAgICAyICpcclxuICAgIE1hdGguUEk7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHJhZGlhbnNNb2R1bG9WYWx1ZSA9IDIgKiBNYXRoLlBJO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBwcml2YXRlIGNpcmNsaW5nTGlnaHRJbnRlcnZhbElkOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBjaXJjbGluZ0xpZ2h0QW5nbGUgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IExpZ2h0U2ltdWxhdG9yRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZSA9IHRoaXMub25OZXdMaWdodFZlcnNvclR5cGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2lyY2xpbmdMaWdodFRpY2sgPSB0aGlzLmNpcmNsaW5nTGlnaHRUaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICB0aGlzLm9uTmV3TGlnaHRWZXJzb3JUeXBlXHJcbiAgICApO1xyXG4gICAgdGhpcy5zdG9wQ2lyY2xpbmdMaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk5ld0xpZ2h0VmVyc29yVHlwZShldmVudDogTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQpIHtcclxuICAgIHN3aXRjaCAoZXZlbnQucGF5bG9hZCkge1xyXG4gICAgICBjYXNlIExpZ2h0VmVyc29yVHlwZS5Db25zdGFudDpcclxuICAgICAgICB0aGlzLnN0b3BDaXJjbGluZ0xpZ2h0KCk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaExpZ2h0VmVyc29yKG5ldyBWZWN0b3IzKDAsIDAsIDEpKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTGlnaHRWZXJzb3JUeXBlLkNpcmNsaW5nOlxyXG4gICAgICAgIHRoaXMuc3RhcnRDaXJjbGluZ0xpZ2h0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsaWdodCB2ZXJzb3IgdHlwZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwYXRjaExpZ2h0VmVyc29yKHZlcnNvcjogVmVjdG9yMykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRWZXJzb3JFdmVudCh2ZXJzb3IpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRDaXJjbGluZ0xpZ2h0KCkge1xyXG4gICAgdGhpcy5jaXJjbGluZ0xpZ2h0SW50ZXJ2YWxJZCA9IHNldEludGVydmFsKFxyXG4gICAgICB0aGlzLmNpcmNsaW5nTGlnaHRUaWNrLFxyXG4gICAgICBjb25maWd1cmF0aW9uLmNpcmNsaW5nTGlnaHQuaW50ZXJ2YWxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNpcmNsaW5nTGlnaHRUaWNrKCkge1xyXG4gICAgY29uc3QgeCA9IGNvbmZpZ3VyYXRpb24uY2lyY2xpbmdMaWdodC5kaXN0YW5jZSAqIE1hdGguY29zKHRoaXMuY2lyY2xpbmdMaWdodEFuZ2xlKTtcclxuICAgIGNvbnN0IHkgPSBjb25maWd1cmF0aW9uLmNpcmNsaW5nTGlnaHQuZGlzdGFuY2UgKiBNYXRoLnNpbih0aGlzLmNpcmNsaW5nTGlnaHRBbmdsZSk7XHJcblxyXG4gICAgY29uc3QgbGlnaHRWZWN0b3IgPSBuZXcgVmVjdG9yMyh4LCB5LCBjb25maWd1cmF0aW9uLmNpcmNsaW5nTGlnaHQuaGVpZ2h0KTtcclxuICAgIGNvbnN0IGxpZ2h0VmVyc29yID0gbGlnaHRWZWN0b3Iubm9ybWFsaXplKCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRWZXJzb3JFdmVudChsaWdodFZlcnNvcikpO1xyXG5cclxuICAgIHRoaXMuY2lyY2xpbmdMaWdodEFuZ2xlICs9IExpZ2h0U2ltdWxhdG9yLnN0ZXBJblJhZGlhbnM7XHJcbiAgICBpZiAodGhpcy5jaXJjbGluZ0xpZ2h0QW5nbGUgPj0gTGlnaHRTaW11bGF0b3IucmFkaWFuc01vZHVsb1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2lyY2xpbmdMaWdodEFuZ2xlIC09IExpZ2h0U2ltdWxhdG9yLnJhZGlhbnNNb2R1bG9WYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcENpcmNsaW5nTGlnaHQoKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuY2lyY2xpbmdMaWdodEludGVydmFsSWQpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9MaWdodFNpbXVsYXRvci50cyIsImltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2x5Z29uQ2xpcHBlciB7XHJcbiAgcHVibGljIGNsaXBQb2x5Z29ucyhwb2x5Z29uMTogUG9seWdvbiwgcG9seWdvbjI6IFBvbHlnb24pIHtcclxuICAgIGlmIChwb2x5Z29uMS5pc0NvbnZleCgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsaXBQb2x5Z29uKHBvbHlnb24yLCBwb2x5Z29uMSk7XHJcbiAgICB9IGVsc2UgaWYgKHBvbHlnb24yLmlzQ29udmV4KCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2xpcFBvbHlnb24ocG9seWdvbjEsIHBvbHlnb24yKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvdGggcG9seWdvbnMgYXJlIGNvbmNhdmUnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBzdWJqZWN0UG9seWdvblxyXG4gICAqIEBwYXJhbSBjbGlwcGluZ1BvbHlnb24gTXVzdCBiZSBjb252ZXhcclxuICAgKi9cclxuICBwdWJsaWMgY2xpcFBvbHlnb24oc3ViamVjdFBvbHlnb246IFBvbHlnb24sIGNsaXBwaW5nUG9seWdvbjogUG9seWdvbikge1xyXG4gICAgY29uc3QgY2xpcHBpbmdQb2x5Z29uQ2VudGVyID0gY2xpcHBpbmdQb2x5Z29uLmdldENlbnRlclBvaW50KCk7XHJcblxyXG4gICAgbGV0IG91dHB1dDogUG9pbnRbXSA9IHN1YmplY3RQb2x5Z29uLmdldFZlcnRpY2VzKCk7XHJcbiAgICBjb25zdCBjbGlwcGluZ1BvbHlnb25FZGdlczogTGluZVtdID0gW107XHJcbiAgICBjb25zdCBjbGlwcGluZ1BvbHlnb25WZXJ0aWNlcyA9IGNsaXBwaW5nUG9seWdvbi5nZXRWZXJ0aWNlcygpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpcHBpbmdQb2x5Z29uVmVydGljZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgZWRnZSA9IG5ldyBMaW5lKFxyXG4gICAgICAgIGNsaXBwaW5nUG9seWdvblZlcnRpY2VzWyhpICsgMSkgJSBjbGlwcGluZ1BvbHlnb25WZXJ0aWNlcy5sZW5ndGhdLFxyXG4gICAgICAgIGNsaXBwaW5nUG9seWdvblZlcnRpY2VzW2ldXHJcbiAgICAgICk7XHJcbiAgICAgIGNsaXBwaW5nUG9seWdvbkVkZ2VzLnB1c2goZWRnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBlZGdlIG9mIGNsaXBwaW5nUG9seWdvbkVkZ2VzKSB7XHJcbiAgICAgIGNvbnN0IGlucHV0ID0gb3V0cHV0O1xyXG4gICAgICBvdXRwdXQgPSBbXTtcclxuICAgICAgbGV0IHBwID0gaW5wdXRbaW5wdXQubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICBpbnB1dC5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2FtZVNpZGUocCwgY2xpcHBpbmdQb2x5Z29uQ2VudGVyLCBlZGdlKSkge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmlzU2FtZVNpZGUocHAsIGNsaXBwaW5nUG9seWdvbkNlbnRlciwgZWRnZSkpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2godGhpcy5nZXRJbnRlcnNlY3Rpb25Qb2ludChuZXcgTGluZShwcCwgcCksIGVkZ2UpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG91dHB1dC5wdXNoKHApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc1NhbWVTaWRlKHBwLCBjbGlwcGluZ1BvbHlnb25DZW50ZXIsIGVkZ2UpKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKHRoaXMuZ2V0SW50ZXJzZWN0aW9uUG9pbnQobmV3IExpbmUocHAsIHApLCBlZGdlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBwID0gcDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG91dHB1dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3V0cHV0V2l0aG91dER1cGxpY2F0ZXM6IFBvaW50W10gPSBbXTtcclxuICAgIG91dHB1dFdpdGhvdXREdXBsaWNhdGVzLnB1c2gob3V0cHV0WzBdKTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb3V0cHV0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhUG9pbnQuZXBzaWxvbkVxdWFscyhvdXRwdXRbaV0sIG91dHB1dFdpdGhvdXREdXBsaWNhdGVzW291dHB1dFdpdGhvdXREdXBsaWNhdGVzLmxlbmd0aCAtIDFdKVxyXG4gICAgICApIHtcclxuICAgICAgICBvdXRwdXRXaXRob3V0RHVwbGljYXRlcy5wdXNoKG91dHB1dFtpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxyXG4gICAgY29uc3Qgcm91bmRlZFBvaW50cyA9IG91dHB1dFdpdGhvdXREdXBsaWNhdGVzLm1hcChwb2ludCA9PiBuZXcgUG9pbnQofn5wb2ludC54LCB+fnBvaW50LnkpKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvbHlnb24ocm91bmRlZFBvaW50cywgc3ViamVjdFBvbHlnb24ubGluZVByb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1NhbWVTaWRlKHAxOiBQb2ludCwgcDI6IFBvaW50LCBsaW5lOiBMaW5lKSB7XHJcbiAgICBjb25zdCBwMURpciA9IGxpbmUuZ2V0RGlyZWN0aW9uKHAxKTtcclxuICAgIGNvbnN0IHAyRGlyID0gbGluZS5nZXREaXJlY3Rpb24ocDIpO1xyXG5cclxuICAgIGlmIChwMURpciA9PT0gcDJEaXIgfHwgcDFEaXIgPT09IDAgfHwgcDJEaXIgPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJbnRlcnNlY3Rpb25Qb2ludChsaW5lMTogTGluZSwgbGluZTI6IExpbmUpIHtcclxuICAgIGNvbnN0IGRpcmVjdGlvbjEgPSBQb2ludC5zdWJ0cmFjdChsaW5lMS5wMiwgbGluZTEucDEpO1xyXG4gICAgY29uc3QgZGlyZWN0aW9uMiA9IFBvaW50LnN1YnRyYWN0KGxpbmUyLnAyLCBsaW5lMi5wMSk7XHJcblxyXG4gICAgY29uc3QgZG90UGVycCA9IGRpcmVjdGlvbjEueCAqIGRpcmVjdGlvbjIueSAtIGRpcmVjdGlvbjEueSAqIGRpcmVjdGlvbjIueDtcclxuXHJcbiAgICBjb25zdCBjID0gbmV3IFBvaW50KGxpbmUyLnAxLnggLSBsaW5lMS5wMS54LCBsaW5lMi5wMS55IC0gbGluZTEucDEueSk7XHJcbiAgICBjb25zdCB0ID0gKGMueCAqIGRpcmVjdGlvbjIueSAtIGMueSAqIGRpcmVjdGlvbjIueCkgLyBkb3RQZXJwO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9pbnQobGluZTEucDEueCArIHQgKiBkaXJlY3Rpb24xLngsIGxpbmUxLnAxLnkgKyB0ICogZGlyZWN0aW9uMS55KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvUG9seWdvbkNsaXBwZXIudHMiLCJpbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IExFWCB9IGZyb20gJ0xFWCc7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuXHJcbmltcG9ydCB7IElucHV0RGF0YVNlcnZpY2UgfSBmcm9tICd1aS9JbnB1dERhdGFTZXJ2aWNlJztcclxuaW1wb3J0IHsgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIH0gZnJvbSAndWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyJztcclxuaW1wb3J0IHsgTmV3UG9seWdvblVJQ29udHJvbGxlciB9IGZyb20gJ3VpL05ld1BvbHlnb25VSUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBQYXRoRHJhZ2dpbmdTZXJ2aWNlIH0gZnJvbSAndWkvUGF0aERyYWdnaW5nU2VydmljZSc7XHJcbmltcG9ydCB7IFBvaW50RHJhZ2dpbmdTZXJ2aWNlIH0gZnJvbSAndWkvUG9pbnREcmFnZ2luZ1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb2ludEluc2VydGVyU2VydmljZSB9IGZyb20gJ3VpL1BvaW50SW5zZXJ0ZXJTZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9pbnRSZW1vdmVyU2VydmljZSB9IGZyb20gJ3VpL1BvaW50UmVtb3ZlclNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb2ludFN5bmNTZXJ2aWNlIH0gZnJvbSAndWkvUG9pbnRTeW5jU2VydmljZSc7XHJcbmltcG9ydCB7IFNlcmlhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAndWkvU2VyaWFsaXphdGlvblNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VEb3dubG9hZGVyIH0gZnJvbSAnc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyJztcclxuaW1wb3J0IHsgUG9seWdvbkNsaXBwZXIgfSBmcm9tICdzZXJ2aWNlcy9Qb2x5Z29uQ2xpcHBlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBMaW5lQ2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9MaW5lQ2xpY2tFdmVudCc7XHJcblxyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheSc7XHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zQnV0dG9uJztcclxuaW1wb3J0ICd1aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNEaWFsb2cnO1xyXG5pbXBvcnQgeyBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlIH0gZnJvbSAndWkvUG9seWdvbkNsaXBwaW5nU2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgVUlDb250cm9sbGVyRGVwZW5kZW5jaWVzIHtcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgcG9seWdvbkNsaXBwZXI6IFBvbHlnb25DbGlwcGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVUlDb250cm9sbGVyIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHBvbHlnb25DbGlwcGVyOiBQb2x5Z29uQ2xpcHBlcjtcclxuXHJcbiAgcHJpdmF0ZSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIGFwcGxpY2F0aW9uVUlDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHVpU2VydmljZXM6IFNlcnZpY2VbXSA9IFtdO1xyXG4gIHByaXZhdGUgbmV3UG9seWdvblVJQ29udHJvbGxlcjogTmV3UG9seWdvblVJQ29udHJvbGxlcjtcclxuICBwcml2YXRlIHBhdGhEcmFnZ2luZ1NlcnZpY2U6IFBhdGhEcmFnZ2luZ1NlcnZpY2U7XHJcbiAgcHJpdmF0ZSBwb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlOiBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFVJQ29udHJvbGxlckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5jYW52YXMgPSBkZXBlbmRlbmNpZXMuY2FudmFzO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IGRlcGVuZGVuY2llcy5yZW5kZXJlcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmltYWdlRG93bmxvYWRlciA9IGRlcGVuZGVuY2llcy5pbWFnZURvd25sb2FkZXI7XHJcbiAgICB0aGlzLnBvbHlnb25DbGlwcGVyID0gZGVwZW5kZW5jaWVzLnBvbHlnb25DbGlwcGVyO1xyXG5cclxuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgY29uc3QgYXBwbGljYXRpb25VSUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZ3VyYXRpb24uYXBwbGljYXRpb25VSUNvbnRhaW5lcklEKTtcclxuICAgIGlmICghYXBwbGljYXRpb25VSUNvbnRhaW5lcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwcGxpY2F0aW9uIFVJIGNvbnRhaW5lciBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uVUlDb250YWluZXIgPSBhcHBsaWNhdGlvblVJQ29udGFpbmVyO1xyXG5cclxuICAgIHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyID0gbmV3IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcih0aGlzLmNhbnZhcyk7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZU5ld1BvbHlnb25VSUNvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlUG9pbnREcmFnZ2luZ1NlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlUG9pbnRJbnNlcnRlclNlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlUG9pbnRSZW1vdmVyU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVQb2ludFN5bmNTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBhdGhEcmFnZ2luZ1NlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlU2VyaWFsaXphdGlvblNlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlSW5wdXREYXRhU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlKCk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLmZvckVhY2godWlTZXJ2aWNlID0+IHVpU2VydmljZS5pbml0KCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMuZm9yRWFjaCh1aVNlcnZpY2UgPT4gdWlTZXJ2aWNlLmRlc3Ryb3koKSk7XHJcbiAgICB0aGlzLnVpU2VydmljZXMuc3BsaWNlKDAsIHRoaXMudWlTZXJ2aWNlcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCFldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhdGhEcmFnZ2luZ1NlcnZpY2Uuc3RhcnRNb3ZpbmdQYXRoKGV2ZW50KTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGlmICh0aGlzLnBhdGhEcmFnZ2luZ1NlcnZpY2UuaXNEcmFnZ2luZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9pbnQgPSB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci5nZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50KTtcclxuXHJcbiAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkNsaXBwaW5nU2VydmljZS5jbGlwUG9seWdvbnMocG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpdFRlc3RSZXN1bHQgPSB0aGlzLnN0YWdlLmhpdFRlc3QocG9pbnQpO1xyXG5cclxuICAgIGlmICghaGl0VGVzdFJlc3VsdCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uZXdQb2x5Z29uVUlDb250cm9sbGVyLmFkZE5ld1BvaW50KHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWhpdFRlc3RSZXN1bHQucGF0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBMaW5lQ2xpY2tFdmVudChoaXRUZXN0UmVzdWx0LmxpbmUsIGhpdFRlc3RSZXN1bHQucGF0aCwgcG9pbnQpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9pbnRTeW5jU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHBvaW50U3luY1NlcnZpY2UgPSBuZXcgUG9pbnRTeW5jU2VydmljZSh7XHJcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5hcHBsaWNhdGlvblVJQ29udGFpbmVyLFxyXG4gICAgICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLFxyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZSxcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2gocG9pbnRTeW5jU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVBvaW50UmVtb3ZlclNlcnZpY2UoKSB7XHJcbiAgICBjb25zdCBwb2ludFJlbW92ZXJTZXJ2aWNlID0gbmV3IFBvaW50UmVtb3ZlclNlcnZpY2Uoe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChwb2ludFJlbW92ZXJTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9pbnREcmFnZ2luZ1NlcnZpY2UoKSB7XHJcbiAgICBjb25zdCBwb2ludERyYWdnaW5nU2VydmljZSA9IG5ldyBQb2ludERyYWdnaW5nU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlLFxyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChwb2ludERyYWdnaW5nU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZU5ld1BvbHlnb25VSUNvbnRyb2xsZXIoKSB7XHJcbiAgICB0aGlzLm5ld1BvbHlnb25VSUNvbnRyb2xsZXIgPSBuZXcgTmV3UG9seWdvblVJQ29udHJvbGxlcih7XHJcbiAgICAgIGFwcGxpY2F0aW9uVUlDb250YWluZXI6IHRoaXMuYXBwbGljYXRpb25VSUNvbnRhaW5lcixcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXHJcbiAgICAgIHBvbHlnb25MYXllcjogdGhpcy5zdGFnZS5maW5kTGF5ZXJCeU5hbWUoTEVYLlBPTFlHT05fTEFZRVJfTkFNRSksXHJcbiAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxyXG4gICAgICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaCh0aGlzLm5ld1BvbHlnb25VSUNvbnRyb2xsZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQb2ludEluc2VydGVyU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHBvaW50SW5zZXJ0ZXJTZXJ2aWNlID0gbmV3IFBvaW50SW5zZXJ0ZXJTZXJ2aWNlKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2gocG9pbnRJbnNlcnRlclNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQYXRoRHJhZ2dpbmdTZXJ2aWNlKCkge1xyXG4gICAgdGhpcy5wYXRoRHJhZ2dpbmdTZXJ2aWNlID0gbmV3IFBhdGhEcmFnZ2luZ1NlcnZpY2Uoe1xyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLFxyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2godGhpcy5wYXRoRHJhZ2dpbmdTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlU2VyaWFsaXphdGlvblNlcnZpY2UoKSB7XHJcbiAgICBjb25zdCBzZXJpYWxpemF0aW9uU2VydmljZSA9IG5ldyBTZXJpYWxpemF0aW9uU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChzZXJpYWxpemF0aW9uU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUlucHV0RGF0YVNlcnZpY2UoKSB7XHJcbiAgICBjb25zdCBpbnB1dERhdGFTZXJ2aWNlID0gbmV3IElucHV0RGF0YVNlcnZpY2Uoe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBpbWFnZURvd25sb2FkZXI6IHRoaXMuaW1hZ2VEb3dubG9hZGVyXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChpbnB1dERhdGFTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9seWdvbkNsaXBwaW5nU2VydmljZSgpIHtcclxuICAgIHRoaXMucG9seWdvbkNsaXBwaW5nU2VydmljZSA9IG5ldyBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlKHtcclxuICAgICAgcG9seWdvbkNsaXBwZXI6IHRoaXMucG9seWdvbkNsaXBwZXIsXHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIHBvbHlnb25MYXllcjogdGhpcy5zdGFnZS5maW5kTGF5ZXJCeU5hbWUoTEVYLlBPTFlHT05fTEFZRVJfTkFNRSlcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHRoaXMucG9seWdvbkNsaXBwaW5nU2VydmljZSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1VJQ29udHJvbGxlci50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQge1xyXG4gIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgTmV3TGlnaHRDb2xvckV2ZW50LFxyXG4gIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LFxyXG4gIE5ld05vcm1hbE1hcEV2ZW50XHJcbn0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IEltYWdlRG93bmxvYWRlciB9IGZyb20gJ3NlcnZpY2VzL0ltYWdlRG93bmxvYWRlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IENvbG9yU2VsZWN0RGlhbG9nIH0gZnJvbSAndWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nJztcclxuaW1wb3J0IHsgRGlhbG9nT3ZlcmxheSB9IGZyb20gJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheSc7XHJcbmltcG9ydCB7IEltYWdlU2VsZWN0RGlhbG9nIH0gZnJvbSAndWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nJztcclxuXHJcbmltcG9ydCB7IExpZ2h0VmVyc29yVHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFZlcnNvclR5cGUnO1xyXG5cclxuaW50ZXJmYWNlIFNlcmlhbGl6YXRpb25TZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0RGF0YVNlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIGlucHV0RGF0YUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkaWFsb2dPdmVybGF5OiBEaWFsb2dPdmVybGF5O1xyXG4gIHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2dCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgYmFja2dyb3VuZFRleHR1cmVEaWFsb2c6IEltYWdlU2VsZWN0RGlhbG9nO1xyXG5cclxuICBwcml2YXRlIG9wZW5MaWdodENvbG9yRGlhbG9nQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBwcml2YXRlIGxpZ2h0Q29sb3JEaWFsb2c6IENvbG9yU2VsZWN0RGlhbG9nO1xyXG5cclxuICBwcml2YXRlIGxpZ2h0VmVyc29yQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGxpZ2h0VmVyc29yU2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuSGVpZ2h0TWFwRGlhbG9nQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBwcml2YXRlIGhlaWdodE1hcERpYWxvZzogSW1hZ2VTZWxlY3REaWFsb2c7XHJcblxyXG4gIHByaXZhdGUgb3Blbk5vcm1hbE1hcERpYWxvZ0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBub3JtYWxNYXBEaWFsb2c6IEltYWdlU2VsZWN0RGlhbG9nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFNlcmlhbGl6YXRpb25TZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmltYWdlRG93bmxvYWRlciA9IGRlcGVuZGVuY2llcy5pbWFnZURvd25sb2FkZXI7XHJcblxyXG4gICAgdGhpcy5zZXR1cEJhY2tncm91bmRUZXh0dXJlRGlhbG9nKCk7XHJcbiAgICB0aGlzLnNldHVwTGlnaHRWZXJzb3JTZWxlY3QoKTtcclxuICAgIHRoaXMuc2V0dXBMaWdodENvbG9yRGlhbG9nKCk7XHJcbiAgICB0aGlzLnNldHVwTm9ybWFsTWFwRGlhbG9nKCk7XHJcbiAgICB0aGlzLnNldHVwSGVpZ2h0TWFwRGlhbG9nKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIGNvbnN0IGlucHV0RGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1kYXRhLWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKCFpbnB1dERhdGFDb250YWluZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBkYXRhIGNvbnRhaW5lciBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lciA9IGlucHV0RGF0YUNvbnRhaW5lcjtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMub3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQnV0dG9uKTtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2dCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5vcGVuTm9ybWFsTWFwRGlhbG9nQnV0dG9uKTtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMub3BlbkhlaWdodE1hcERpYWxvZ0J1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmxpZ2h0VmVyc29yQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXBwLWRpYWxvZy1vdmVybGF5Jyk7XHJcbiAgICBpZiAoIWRpYWxvZ092ZXJsYXkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWFsb2cgb3ZlcmxheSBub3QgZm91bmQnKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGlhbG9nT3ZlcmxheSA9IDxEaWFsb2dPdmVybGF5PmRpYWxvZ092ZXJsYXk7XHJcblxyXG4gICAgdGhpcy5vcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2NsaWNrJyxcclxuICAgICAgdGhpcy5vcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2dcclxuICAgICk7XHJcbiAgICB0aGlzLm9wZW5MaWdodENvbG9yRGlhbG9nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuTGlnaHRDb2xvckRpYWxvZyk7XHJcbiAgICB0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2cpO1xyXG4gICAgdGhpcy5vcGVuSGVpZ2h0TWFwRGlhbG9nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuSGVpZ2h0TWFwRGlhbG9nKTtcclxuICAgIHRoaXMubGlnaHRWZXJzb3JTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkxpZ2h0VmVyc29yU2VsZWN0Q2hhbmdlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICB0aGlzLm9wZW5CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAnY2xpY2snLFxyXG4gICAgICB0aGlzLm9wZW5CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ1xyXG4gICAgKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmVEaWFsb2cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uQmFja2dyb3VuZFRleHR1cmVEaWFsb2dDbG9zZWQpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZURpYWxvZy5jbG9zZSgpO1xyXG5cclxuICAgIHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2dCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9wZW5MaWdodENvbG9yRGlhbG9nKTtcclxuICAgIHRoaXMubGlnaHRDb2xvckRpYWxvZy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25MaWdodENvbG9yRGlhbG9nQ2xvc2VkKTtcclxuICAgIHRoaXMubGlnaHRDb2xvckRpYWxvZy5jbG9zZSgpO1xyXG5cclxuICAgIHRoaXMub3BlbkhlaWdodE1hcERpYWxvZ0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkhlaWdodE1hcERpYWxvZyk7XHJcbiAgICB0aGlzLmhlaWdodE1hcERpYWxvZy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25IZWlnaHRNYXBEaWFsb2dDbG9zZWQpO1xyXG4gICAgdGhpcy5oZWlnaHRNYXBEaWFsb2cuY2xvc2UoKTtcclxuXHJcbiAgICB0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2dCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2cpO1xyXG4gICAgdGhpcy5ub3JtYWxNYXBEaWFsb2cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uTm9ybWFsTWFwRGlhbG9nQ2xvc2VkKTtcclxuICAgIHRoaXMubm9ybWFsTWFwRGlhbG9nLmNsb3NlKCk7XHJcblxyXG4gICAgdGhpcy5saWdodFZlcnNvclNlbGVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uTGlnaHRWZXJzb3JTZWxlY3RDaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gI3JlZ2lvbiBCYWNrZ3JvdW5kIHRleHR1cmUgZGlhbG9nXHJcbiAgcHJpdmF0ZSBzZXR1cEJhY2tncm91bmRUZXh0dXJlRGlhbG9nKCkge1xyXG4gICAgdGhpcy5vcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMub3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQnV0dG9uLmlubmVyVGV4dCA9ICdTZWxlY3QgYmFja2dyb3VuZCB0ZXh0dXJlJztcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRUZXh0dXJlRGlhbG9nID0gbmV3IEltYWdlU2VsZWN0RGlhbG9nKGNvbmZpZ3VyYXRpb24ucHJlc2V0QmFja2dyb3VuZFRleHR1cmVzKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmVEaWFsb2cubmFtZSA9ICdCYWNrZ3JvdW5kIHRleHR1cmUnO1xyXG5cclxuICAgIHRoaXMub3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nID0gdGhpcy5vcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0Nsb3NlZCA9IHRoaXMub25CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0Nsb3NlZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2coKSB7XHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkuc2hvd0RpYWxvZyh0aGlzLmJhY2tncm91bmRUZXh0dXJlRGlhbG9nKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmVEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uQmFja2dyb3VuZFRleHR1cmVEaWFsb2dDbG9zZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBvbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQ2xvc2VkKCkge1xyXG4gICAgaWYgKHRoaXMuYmFja2dyb3VuZFRleHR1cmVEaWFsb2cud2FzQ2FuY2VsbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZEltYWdlID0gdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZURpYWxvZy5zZWxlY3RlZEltYWdlO1xyXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gYXdhaXQgdGhpcy5pbWFnZURvd25sb2FkZXIuaW1hZ2VUb0ltYWdlRGF0YShzZWxlY3RlZEltYWdlKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50KGltYWdlRGF0YSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBMaWdodCBjb2xvciBkaWFsb2dcclxuICBwcml2YXRlIHNldHVwTGlnaHRDb2xvckRpYWxvZygpIHtcclxuICAgIHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2dCdXR0b24uaW5uZXJUZXh0ID0gJ1NlbGVjdCBsaWdodCBjb2xvcic7XHJcblxyXG4gICAgdGhpcy5saWdodENvbG9yRGlhbG9nID0gbmV3IENvbG9yU2VsZWN0RGlhbG9nKCk7XHJcbiAgICB0aGlzLmxpZ2h0Q29sb3JEaWFsb2cubmFtZSA9ICdMaWdodCBjb2xvcic7XHJcbiAgICB0aGlzLmxpZ2h0Q29sb3JEaWFsb2cuc2VsZWN0ZWRDb2xvciA9IGNvbmZpZ3VyYXRpb24ucHJlc2V0TGlnaHRDb2xvcjtcclxuXHJcbiAgICB0aGlzLm9wZW5MaWdodENvbG9yRGlhbG9nID0gdGhpcy5vcGVuTGlnaHRDb2xvckRpYWxvZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkxpZ2h0Q29sb3JEaWFsb2dDbG9zZWQgPSB0aGlzLm9uTGlnaHRDb2xvckRpYWxvZ0Nsb3NlZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuTGlnaHRDb2xvckRpYWxvZygpIHtcclxuICAgIHRoaXMuZGlhbG9nT3ZlcmxheS5zaG93RGlhbG9nKHRoaXMubGlnaHRDb2xvckRpYWxvZyk7XHJcbiAgICB0aGlzLmxpZ2h0Q29sb3JEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uTGlnaHRDb2xvckRpYWxvZ0Nsb3NlZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIG9uTGlnaHRDb2xvckRpYWxvZ0Nsb3NlZCgpIHtcclxuICAgIGlmICh0aGlzLmxpZ2h0Q29sb3JEaWFsb2cud2FzQ2FuY2VsbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaWdodENvbG9yID0gdGhpcy5saWdodENvbG9yRGlhbG9nLnNlbGVjdGVkQ29sb3I7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdMaWdodENvbG9yRXZlbnQobGlnaHRDb2xvcikpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBOb3JtYWwgbWFwIGRpYWxvZ1xyXG4gIHByaXZhdGUgc2V0dXBOb3JtYWxNYXBEaWFsb2coKSB7XHJcbiAgICB0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMub3Blbk5vcm1hbE1hcERpYWxvZ0J1dHRvbi5pbm5lclRleHQgPSAnU2VsZWN0IG5vcm1hbCBtYXAnO1xyXG5cclxuICAgIHRoaXMubm9ybWFsTWFwRGlhbG9nID0gbmV3IEltYWdlU2VsZWN0RGlhbG9nKGNvbmZpZ3VyYXRpb24ucHJlc2V0Tm9ybWFsTWFwcyk7XHJcbiAgICB0aGlzLm5vcm1hbE1hcERpYWxvZy5uYW1lID0gJ05vcm1hbCBtYXAnO1xyXG5cclxuICAgIHRoaXMub3Blbk5vcm1hbE1hcERpYWxvZyA9IHRoaXMub3Blbk5vcm1hbE1hcERpYWxvZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5vcm1hbE1hcERpYWxvZ0Nsb3NlZCA9IHRoaXMub25Ob3JtYWxNYXBEaWFsb2dDbG9zZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLm5vcm1hbE1hcERpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25Ob3JtYWxNYXBEaWFsb2dDbG9zZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuTm9ybWFsTWFwRGlhbG9nKCkge1xyXG4gICAgdGhpcy5kaWFsb2dPdmVybGF5LnNob3dEaWFsb2codGhpcy5ub3JtYWxNYXBEaWFsb2cpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBvbk5vcm1hbE1hcERpYWxvZ0Nsb3NlZCgpIHtcclxuICAgIGlmICh0aGlzLm5vcm1hbE1hcERpYWxvZy53YXNDYW5jZWxsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkSW1hZ2UgPSB0aGlzLm5vcm1hbE1hcERpYWxvZy5zZWxlY3RlZEltYWdlO1xyXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gYXdhaXQgdGhpcy5pbWFnZURvd25sb2FkZXIuaW1hZ2VUb0ltYWdlRGF0YShzZWxlY3RlZEltYWdlKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdOb3JtYWxNYXBFdmVudChpbWFnZURhdGEpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gIH1cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gTGlnaHQgdmVyc29yIHNlbGVjdFxyXG4gIHByaXZhdGUgc2V0dXBMaWdodFZlcnNvclNlbGVjdCgpIHtcclxuICAgIHRoaXMubGlnaHRWZXJzb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsaWdodC13ZXJzb3Itc2VsZWN0Jyk7XHJcbiAgICBsYWJlbC5pbm5lclRleHQgPSAnTGlnaHQgdmVyc29yOiAnO1xyXG4gICAgdGhpcy5saWdodFZlcnNvckNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgdGhpcy5saWdodFZlcnNvclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgY29uc3QgY29uc3RhbnRWZXJzb3JPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIGNvbnN0YW50VmVyc29yT3B0aW9uLmlubmVyVGV4dCA9ICdDb25zdGFudCAoWzAsIDAsIDFdKSc7XHJcbiAgICBjb25zdGFudFZlcnNvck9wdGlvbi52YWx1ZSA9ICdjb25zdGFudCc7XHJcblxyXG4gICAgY29uc3QgbW92aW5nVmVyc29yT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBtb3ZpbmdWZXJzb3JPcHRpb24uaW5uZXJUZXh0ID0gJ0NpcmNsaW5nIGFib3ZlIHRoZSBzY3JlZW4nO1xyXG4gICAgbW92aW5nVmVyc29yT3B0aW9uLnZhbHVlID0gJ2NpcmNsaW5nJztcclxuXHJcbiAgICB0aGlzLmxpZ2h0VmVyc29yU2VsZWN0LmFwcGVuZENoaWxkKGNvbnN0YW50VmVyc29yT3B0aW9uKTtcclxuICAgIHRoaXMubGlnaHRWZXJzb3JTZWxlY3QuYXBwZW5kQ2hpbGQobW92aW5nVmVyc29yT3B0aW9uKTtcclxuXHJcbiAgICB0aGlzLmxpZ2h0VmVyc29yQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubGlnaHRWZXJzb3JTZWxlY3QpO1xyXG5cclxuICAgIHRoaXMub25MaWdodFZlcnNvclNlbGVjdENoYW5nZSA9IHRoaXMub25MaWdodFZlcnNvclNlbGVjdENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkxpZ2h0VmVyc29yU2VsZWN0Q2hhbmdlKCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmxpZ2h0VmVyc29yU2VsZWN0LnZhbHVlO1xyXG4gICAgY29uc3QgdmVyc29yVHlwZXM6IHsgW25hbWU6IHN0cmluZ106IExpZ2h0VmVyc29yVHlwZSB9ID0ge1xyXG4gICAgICBjb25zdGFudDogTGlnaHRWZXJzb3JUeXBlLkNvbnN0YW50LFxyXG4gICAgICBjaXJjbGluZzogTGlnaHRWZXJzb3JUeXBlLkNpcmNsaW5nXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHZlcnNvclR5cGUgPSB2ZXJzb3JUeXBlc1t2YWx1ZV07XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQodmVyc29yVHlwZSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gSGVpZ2h0IG1hcCBkaWFsb2dcclxuICBwcml2YXRlIHNldHVwSGVpZ2h0TWFwRGlhbG9nKCkge1xyXG4gICAgdGhpcy5vcGVuSGVpZ2h0TWFwRGlhbG9nQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLm9wZW5IZWlnaHRNYXBEaWFsb2dCdXR0b24uaW5uZXJUZXh0ID0gJ1NlbGVjdCBoZWlnaHQgbWFwJztcclxuXHJcbiAgICB0aGlzLmhlaWdodE1hcERpYWxvZyA9IG5ldyBJbWFnZVNlbGVjdERpYWxvZyhjb25maWd1cmF0aW9uLnByZXNldEhlaWdodE1hcHMpO1xyXG4gICAgdGhpcy5oZWlnaHRNYXBEaWFsb2cubmFtZSA9ICdIZWlnaHQgbWFwJztcclxuXHJcbiAgICB0aGlzLm9wZW5IZWlnaHRNYXBEaWFsb2cgPSB0aGlzLm9wZW5IZWlnaHRNYXBEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25IZWlnaHRNYXBEaWFsb2dDbG9zZWQgPSB0aGlzLm9uSGVpZ2h0TWFwRGlhbG9nQ2xvc2VkLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5oZWlnaHRNYXBEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uSGVpZ2h0TWFwRGlhbG9nQ2xvc2VkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlbkhlaWdodE1hcERpYWxvZygpIHtcclxuICAgIHRoaXMuZGlhbG9nT3ZlcmxheS5zaG93RGlhbG9nKHRoaXMuaGVpZ2h0TWFwRGlhbG9nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgb25IZWlnaHRNYXBEaWFsb2dDbG9zZWQoKSB7XHJcbiAgICBpZiAodGhpcy5oZWlnaHRNYXBEaWFsb2cud2FzQ2FuY2VsbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZEltYWdlID0gdGhpcy5oZWlnaHRNYXBEaWFsb2cuc2VsZWN0ZWRJbWFnZTtcclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGF3YWl0IHRoaXMuaW1hZ2VEb3dubG9hZGVyLmltYWdlVG9JbWFnZURhdGEoc2VsZWN0ZWRJbWFnZSk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3SGVpZ2h0TWFwRXZlbnQoaW1hZ2VEYXRhKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcbiAgLy8gI2VuZHJlZ2lvblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL0lucHV0RGF0YVNlcnZpY2UudHMiLCJpbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcblxyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbW1vbi9Db2xvcic7XHJcblxyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy5zY3NzJztcclxuXHJcbmNvbnN0IGNsYXNzTmFtZXMgPSB7XHJcbiAgRElBTE9HOiAnY29sb3Itc2VsZWN0LWRpYWxvZycsXHJcbiAgSEVBREVSOiAnY29sb3Itc2VsZWN0LWRpYWxvZ19faGVhZGVyJyxcclxuICBIRUFESU5HOiAnY29sb3Itc2VsZWN0LWRpYWxvZ19faGVhZGluZycsXHJcbiAgQkxPQ0s6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19ibG9jaycsXHJcbiAgQk9UVE9NX0JVVFRPTlM6ICdjb2xvci1zZWxlY3QtZGlhbG9nX19ib3R0b20tYnV0dG9ucydcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xvclNlbGVjdERpYWxvZyBleHRlbmRzIEhUTUxFbGVtZW50IGltcGxlbWVudHMgRGlhbG9nQm94IHtcclxuICBwcml2YXRlIF93YXNDYW5jZWxsZWQgPSB0cnVlO1xyXG5cclxuICBwcml2YXRlIGhlYWRlcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBoZWFkaW5nOiBIVE1MSGVhZGluZ0VsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgY29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBib3R0b21CdXR0b25zQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIGNhbmNlbEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjb25maXJtQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkRJQUxPRyk7XHJcblxyXG4gICAgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrID0gdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrID0gdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbG9ySW5wdXQoKTtcclxuICAgIHRoaXMuY3JlYXRlQm90dG9tQnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgcmV0dXJuIFsnbmFtZSddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSB8fCAnQ29sb3Igc2VsZWN0JztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbmFtZScsIHZhbHVlKTtcclxuICAgIHRoaXMuaGVhZGluZy5pbm5lclRleHQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRDb2xvcigpIHtcclxuICAgIHJldHVybiBDb2xvci5mcm9tSGV4U3RyaW5nKHRoaXMuY29sb3JJbnB1dC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHNlbGVjdGVkQ29sb3IoY29sb3I6IENvbG9yKSB7XHJcbiAgICB0aGlzLmNvbG9ySW5wdXQudmFsdWUgPSBjb2xvci50b0hleFN0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5fd2FzQ2FuY2VsbGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5jb2xvcklucHV0KTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmhlYWRlcik7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuY29sb3JJbnB1dCk7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lcik7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DYW5jZWxCdXR0b25DbGljayk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2FzQ2FuY2VsbGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dhc0NhbmNlbGxlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbkNsb3NlKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIHRoaXMuaGVhZGVyID0gdGhpcy5jcmVhdGVCbG9jaygpO1xyXG4gICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkhFQURFUik7XHJcblxyXG4gICAgdGhpcy5oZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRoaXMuaGVhZGluZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuSEVBRElORyk7XHJcbiAgICB0aGlzLmhlYWRpbmcuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xyXG5cclxuICAgIHRoaXMuaGVhZGVyLmFwcGVuZENoaWxkKHRoaXMuaGVhZGluZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUNvbG9ySW5wdXQoKSB7XHJcbiAgICB0aGlzLmNvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGhpcy5jb2xvcklucHV0LnR5cGUgPSAnY29sb3InO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCb3R0b21CdXR0b25zKCkge1xyXG4gICAgdGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJPVFRPTV9CVVRUT05TKTtcclxuXHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XHJcblxyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24uaW5uZXJUZXh0ID0gJ0NvbmZpcm0nO1xyXG5cclxuICAgIHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbmNlbEJ1dHRvbik7XHJcbiAgICB0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb25maXJtQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DYW5jZWxCdXR0b25DbGljaygpIHtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db25maXJtQnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLl93YXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQmxvY2soKSB7XHJcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJMT0NLKTtcclxuXHJcbiAgICByZXR1cm4gYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1jb2xvci1zZWxlY3QtZGlhbG9nJywgQ29sb3JTZWxlY3REaWFsb2cpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Db2xvclNlbGVjdERpYWxvZy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQ29sb3JTZWxlY3REaWFsb2cuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb2xvci1zZWxlY3QtZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDc1dnc7IH1cXG5cXG4uY29sb3Itc2VsZWN0LWRpYWxvZ19fYmxvY2sge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgcGFkZGluZy1ib3R0b206IDFlbTsgfVxcblxcbi5jb2xvci1zZWxlY3QtZGlhbG9nX19oZWFkaW5nIHtcXG4gIG1hcmdpbjogMC41ZW0gMDsgfVxcblxcbi5jb2xvci1zZWxlY3QtZGlhbG9nX19ib3R0b20tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tdG9wOiAxZW07IH1cXG4gIC5jb2xvci1zZWxlY3QtZGlhbG9nX19ib3R0b20tYnV0dG9ucyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuM2VtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJ3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZy5zY3NzJztcclxuXHJcbmltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvRGlhbG9nQm94JztcclxuXHJcbmNvbnN0IGNsYXNzTmFtZXMgPSB7XHJcbiAgRElBTE9HOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZycsXHJcbiAgSEVBREVSOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19faGVhZGVyJyxcclxuICBIRUFESU5HOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19faGVhZGluZycsXHJcbiAgQkxPQ0s6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19ibG9jaycsXHJcbiAgQkxPQ0tfVElUTEU6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19ibG9jay10aXRsZScsXHJcbiAgUFJFU0VUX0lNQUdFU19DT05UQUlORVI6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19wcmVzZXQtaW1hZ2VzLWNvbnRhaW5lcicsXHJcbiAgU0VMRUNURURfSU1BR0U6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19pbWFnZS0tc2VsZWN0ZWQnLFxyXG4gIENVU1RPTV9JTUFHRTogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2N1c3RvbS1pbWFnZScsXHJcbiAgQk9UVE9NX0JVVFRPTlM6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19ib3R0b20tYnV0dG9ucydcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVNlbGVjdERpYWxvZyBleHRlbmRzIEhUTUxFbGVtZW50IGltcGxlbWVudHMgRGlhbG9nQm94IHtcclxuICBwcml2YXRlIF9wcmVzZXRJbWFnZVVybHM6IHN0cmluZ1tdO1xyXG5cclxuICBwcml2YXRlIGhlYWRlcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBoZWFkaW5nOiBIVE1MSGVhZGluZ0VsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgcHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjdXN0b21JbWFnZUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjdXN0b21GaWxlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjdXN0b21JbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBjdXN0b21Db2xvckNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjdXN0b21Db2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgY3VzdG9tQ29sb3JJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBib3R0b21CdXR0b25zQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIGNhbmNlbEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjb25maXJtQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICBwcml2YXRlIF93YXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJlc2V0SW1hZ2VVcmxzOiBzdHJpbmdbXSkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLl9wcmVzZXRJbWFnZVVybHMgPSBwcmVzZXRJbWFnZVVybHM7XHJcblxyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuRElBTE9HKTtcclxuXHJcbiAgICB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2sgPSB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2hvd0N1c3RvbUltYWdlID0gdGhpcy5zaG93Q3VzdG9tSW1hZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DYW5jZWxCdXR0b25DbGljayA9IHRoaXMub25DYW5jZWxCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayA9IHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DdXN0b21Db2xvcklucHV0Q2hhbmdlID0gdGhpcy5vbkN1c3RvbUNvbG9ySW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUhlYWRlcigpO1xyXG4gICAgdGhpcy5jcmVhdGVQcmVzZXRJbWFnZXNMaXN0KCk7XHJcbiAgICB0aGlzLmNyZWF0ZUN1c3RvbUltYWdlUGlja2VyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUN1c3RvbUNvbG9yUGlja2VyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUJvdHRvbUJ1dHRvbnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgIHJldHVybiBbJ25hbWUnXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJykgfHwgJ0ltYWdlIHNlbGVjdCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB2YWx1ZSk7XHJcbiAgICB0aGlzLmhlYWRpbmcuaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdhc0NhbmNlbGxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl93YXNDYW5jZWxsZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHByZXNldEltYWdlVXJscygpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmVzZXRJbWFnZVVybHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSW1hZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbWFnZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuX3dhc0NhbmNlbGxlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlcik7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lcik7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tSW1hZ2VDb250YWluZXIpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmN1c3RvbUNvbG9yQ29udGFpbmVyKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DYW5jZWxCdXR0b25DbGljayk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrKTtcclxuICAgIHRoaXMuY3VzdG9tRmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuc2hvd0N1c3RvbUltYWdlKTtcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25DdXN0b21Db2xvcklucHV0Q2hhbmdlKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljayk7XHJcblxyXG4gICAgdGhpcy5wcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbiAgICAgIC5mb3JFYWNoKGltYWdlID0+IGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLnByZXNldEltYWdlc0xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICAgICAgLmZvckVhY2goaW1hZ2UgPT4gaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spKTtcclxuICAgIHRoaXMuY3VzdG9tRmlsZUlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuc2hvd0N1c3RvbUltYWdlKTtcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvcklucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25DdXN0b21Db2xvcklucHV0Q2hhbmdlKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljayk7XHJcblxyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2spO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmhlYWRlcik7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lcik7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuY3VzdG9tSW1hZ2VDb250YWluZXIpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmN1c3RvbUNvbG9yQ29udGFpbmVyKTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5DbG9zZSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlKCkge1xyXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xvc2UnKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIHRoaXMuaGVhZGVyID0gdGhpcy5jcmVhdGVCbG9jaygpO1xyXG4gICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkhFQURFUik7XHJcblxyXG4gICAgdGhpcy5oZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRoaXMuaGVhZGluZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuSEVBRElORyk7XHJcbiAgICB0aGlzLmhlYWRpbmcuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xyXG5cclxuICAgIHRoaXMuaGVhZGVyLmFwcGVuZENoaWxkKHRoaXMuaGVhZGluZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVByZXNldEltYWdlc0xpc3QoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUJsb2NrKCk7XHJcbiAgICBjb25zdCBibG9ja1RpdGxlID0gdGhpcy5jcmVhdGVCbG9ja1RpdGxlKCdDaG9vc2UgcHJlc2V0IGltYWdlJyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmxvY2tUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbWFnZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLlBSRVNFVF9JTUFHRVNfQ09OVEFJTkVSKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZXNDb250YWluZXIpO1xyXG4gICAgdGhpcy5wcmVzZXRJbWFnZVVybHMubWFwKHVybCA9PiB0aGlzLmNyZWF0ZVNlbGVjdGFibGVJbWFnZSh1cmwpKVxyXG4gICAgICAuZm9yRWFjaChpbWFnZSA9PiBpbWFnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpKTtcclxuXHJcbiAgICB0aGlzLnByZXNldEltYWdlc0xpc3RDb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RJbWFnZSg8SFRNTEltYWdlRWxlbWVudD50aGlzLnByZXNldEltYWdlc0xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcignaW1nJykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDdXN0b21JbWFnZVBpY2tlcigpIHtcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2VDb250YWluZXIgPSB0aGlzLmNyZWF0ZUJsb2NrKCk7XHJcbiAgICBjb25zdCBibG9ja1RpdGxlID0gdGhpcy5jcmVhdGVCbG9ja1RpdGxlKCdTZWxlY3QgY3VzdG9tIGltYWdlJyk7XHJcbiAgICB0aGlzLmN1c3RvbUltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJsb2NrVGl0bGUpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tRmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRoaXMuY3VzdG9tRmlsZUlucHV0LnR5cGUgPSAnZmlsZSc7XHJcbiAgICB0aGlzLmN1c3RvbUZpbGVJbnB1dC5hY2NlcHQgPSAnaW1hZ2UvKic7XHJcbiAgICB0aGlzLmN1c3RvbUltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tRmlsZUlucHV0KTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICB0aGlzLmN1c3RvbUltYWdlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5DVVNUT01fSU1BR0UpO1xyXG4gICAgdGhpcy5jdXN0b21JbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmN1c3RvbUltYWdlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0N1c3RvbUltYWdlKCkge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tRmlsZUlucHV0LmZpbGVzICYmIHRoaXMuY3VzdG9tRmlsZUlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICByZWFkZXIub25sb2FkID0gZSA9PiB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gICAgICAgIHRoaXMuY3VzdG9tSW1hZ2Uuc3JjID0gKDxhbnk+ZS50YXJnZXQpLnJlc3VsdDtcclxuICAgICAgICB0aGlzLnNlbGVjdEltYWdlKHRoaXMuY3VzdG9tSW1hZ2UpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5jdXN0b21GaWxlSW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDdXN0b21Db2xvclBpY2tlcigpIHtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JDb250YWluZXIgPSB0aGlzLmNyZWF0ZUJsb2NrKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuY3JlYXRlQmxvY2tUaXRsZSgnQ3VzdG9tIHNvbGlkIGNvbG9yJyk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvcklucHV0LnR5cGUgPSAnY29sb3InO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvcklucHV0LnZhbHVlID0gJyMwMDAwMDAnO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmN1c3RvbUNvbG9ySW5wdXQpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbWFnZSA9IG5ldyBJbWFnZSgyMCwgMjApO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmN1c3RvbUNvbG9ySW1hZ2UpO1xyXG5cclxuICAgIHRoaXMuc2V0Q3VzdG9tQ29sb3JJbWFnZUNvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ3VzdG9tQ29sb3JJbnB1dENoYW5nZSgpIHtcclxuICAgIHRoaXMuc2V0Q3VzdG9tQ29sb3JJbWFnZUNvbG9yKCk7XHJcbiAgICB0aGlzLnNlbGVjdEltYWdlKHRoaXMuY3VzdG9tQ29sb3JJbWFnZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEN1c3RvbUNvbG9ySW1hZ2VDb2xvcigpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gdGhpcy5jdXN0b21Db2xvckltYWdlLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY3VzdG9tQ29sb3JJbWFnZS5oZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpZiAoIWN0eCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgY2FudmFzIGRyYXdpbmcgY29udGV4dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmN1c3RvbUNvbG9ySW5wdXQudmFsdWU7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCb3R0b21CdXR0b25zKCkge1xyXG4gICAgdGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJPVFRPTV9CVVRUT05TKTtcclxuXHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XHJcblxyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24uaW5uZXJUZXh0ID0gJ0NvbmZpcm0nO1xyXG5cclxuICAgIHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbmNlbEJ1dHRvbik7XHJcbiAgICB0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb25maXJtQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DYW5jZWxCdXR0b25DbGljaygpIHtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db25maXJtQnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLl93YXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQmxvY2soKSB7XHJcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJMT0NLKTtcclxuXHJcbiAgICByZXR1cm4gYmxvY2s7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUJsb2NrVGl0bGUodGl0bGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgYmxvY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBibG9ja1RpdGxlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5CTE9DS19USVRMRSk7XHJcbiAgICBibG9ja1RpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xyXG5cclxuICAgIHJldHVybiBibG9ja1RpdGxlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVTZWxlY3RhYmxlSW1hZ2UoaW1hZ2VTb3VyY2U6IHN0cmluZykge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TZWxlY3RhYmxlSW1hZ2VDbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCFldmVudC5zcmNFbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlbGVjdEltYWdlKDxIVE1MSW1hZ2VFbGVtZW50PmV2ZW50LnNyY0VsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RJbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgaWYgKGltYWdlID09PSB0aGlzLl9zZWxlY3RlZEltYWdlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbWFnZSkge1xyXG4gICAgICB0aGlzLl9zZWxlY3RlZEltYWdlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lcy5TRUxFQ1RFRF9JTUFHRSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLlNFTEVDVEVEX0lNQUdFKTtcclxuICAgIHRoaXMuX3NlbGVjdGVkSW1hZ2UgPSBpbWFnZTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWltYWdlLXNlbGVjdC1kaWFsb2cnLCBJbWFnZVNlbGVjdERpYWxvZyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZy50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW1hZ2VTZWxlY3REaWFsb2cuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9JbWFnZVNlbGVjdERpYWxvZy5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmltYWdlLXNlbGVjdC1kaWFsb2cge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNzV2dzsgfVxcblxcbi5pbWFnZS1zZWxlY3QtZGlhbG9nX19oZWFkaW5nIHtcXG4gIG1hcmdpbjogMC41ZW0gMDsgfVxcblxcbi5pbWFnZS1zZWxlY3QtZGlhbG9nX19ibG9jayB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtOyB9XFxuXFxuLmltYWdlLXNlbGVjdC1kaWFsb2dfX3ByZXNldC1pbWFnZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAuaW1hZ2Utc2VsZWN0LWRpYWxvZ19fcHJlc2V0LWltYWdlcy1jb250YWluZXIgPiBkaXYge1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIG1hcmdpbjogYXV0bzsgfVxcbiAgLmltYWdlLXNlbGVjdC1kaWFsb2dfX3ByZXNldC1pbWFnZXMtY29udGFpbmVyIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19fY3VzdG9tLWltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAyNSU7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbjogYXV0bzsgfVxcblxcbi5pbWFnZS1zZWxlY3QtZGlhbG9nX19pbWFnZS0tc2VsZWN0ZWQge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggZ3JlZW47IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLXRvcDogMWVtOyB9XFxuICAuaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciB7XHJcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgY2FudmFzQ2xpZW50UmVjdDogQ2xpZW50UmVjdDtcclxuXHJcbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgdGhpcy51cGRhdGVDYW52YXNPZmZzZXQoKTtcclxuXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2FudmFzT2Zmc2V0KCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVDYW52YXNPZmZzZXQoKSB7XHJcbiAgICB0aGlzLmNhbnZhc0NsaWVudFJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KFxyXG4gICAgICBldmVudC5jbGllbnRYIC0gdGhpcy5jYW52YXNDbGllbnRSZWN0LmxlZnQsXHJcbiAgICAgIGV2ZW50LmNsaWVudFkgLSB0aGlzLmNhbnZhc0NsaWVudFJlY3QudG9wXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIudHMiLCJpbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBMRVggfSBmcm9tICdMRVgnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJ1JlbmRlcmVyJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcbmltcG9ydCB7IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciB9IGZyb20gJ3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcic7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgUG9pbnRDbGlja0V2ZW50IH0gZnJvbSAnZXZlbnRzL1BvaW50Q2xpY2tFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgUmVuZGVyRmluaXNoZWRFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJGaW5pc2hlZEV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmludGVyZmFjZSBOZXdQb2x5Z29uVUlDb250cm9sbGVyRGVwZW5kZW5jaWVzIHtcclxuICBhcHBsaWNhdGlvblVJQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIHBvbHlnb25MYXllcjogTGF5ZXI7XHJcbiAgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHN0YWdlOiBTdGFnZTtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ld1BvbHlnb25VSUNvbnRyb2xsZXIgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uVUlDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gIHByaXZhdGUgdW5maW5pc2hlZFBhdGg6IFBhdGg7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwYXRoTGF5ZXIgPSBuZXcgTGF5ZXIoTEVYLlBBVEhfTEFZRVJfTkFNRSk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG5cclxuICBwcml2YXRlIGxhc3RNb3VzZVBvc2l0aW9uOiBQb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBOZXdQb2x5Z29uVUlDb250cm9sbGVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uVUlDb250YWluZXIgPSBkZXBlbmRlbmNpZXMuYXBwbGljYXRpb25VSUNvbnRhaW5lcjtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uTGF5ZXI7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gZGVwZW5kZW5jaWVzLnJlbmRlcmVyO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIHRoaXMuY2xvc2VQYXRoID0gdGhpcy5jbG9zZVBhdGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uUG9pbnRDbGljayA9IHRoaXMub25Qb2ludENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdOZXdMaW5lR3VpZGUgPSB0aGlzLmRyYXdOZXdMaW5lR3VpZGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMucHVzaCh0aGlzLnBhdGhMYXllcik7XHJcbiAgICB0aGlzLnN0YXJ0TmV3VW5maW5pc2hlZFBhdGgoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5zdGFnZS5yZW1vdmVMYXllcih0aGlzLnBhdGhMYXllcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkTmV3UG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLnVuZmluaXNoZWRQYXRoLmFkZFZlcnRleChwb2ludCk7XHJcbiAgICB0aGlzLmRpc3BhdGNoVXBkYXRlVUlFdmVudHMoKTtcclxuXHJcbiAgICBpZiAodGhpcy51bmZpbmlzaGVkUGF0aC5nZXRWZXJ0aWNlc0NvdW50KCkgPT09IDEpIHtcclxuICAgICAgdGhpcy5sYXN0TW91c2VQb3NpdGlvbiA9IHBvaW50O1xyXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMubGFzdE1vdXNlUG9zaXRpb24gPSB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci5nZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd05ld0xpbmVHdWlkZSgpIHtcclxuICAgIGNvbnN0IGxhc3RQb2ludCA9IHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGV4KHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGljZXNDb3VudCgpIC0gMSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmRyYXdMaW5lKGxhc3RQb2ludCwgdGhpcy5sYXN0TW91c2VQb3NpdGlvbiwgY29uZmlndXJhdGlvbi5uZXdMaW5lUHJldmlld1Byb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblBvaW50Q2xpY2soZXZlbnQ6IFBvaW50Q2xpY2tFdmVudCkge1xyXG4gICAgY29uc3QgcGF0aFBvaW50Q29tcG9uZW50ID0gZXZlbnQucGF5bG9hZDtcclxuXHJcbiAgICBpZiAocGF0aFBvaW50Q29tcG9uZW50LnBhdGggPT09IHRoaXMudW5maW5pc2hlZFBhdGggJiYgcGF0aFBvaW50Q29tcG9uZW50LmluaXRpYWwpIHtcclxuICAgICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgcGF0aFBvaW50Q29tcG9uZW50LmluaXRpYWwgPSBmYWxzZTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydE5ld1VuZmluaXNoZWRQYXRoKCkge1xyXG4gICAgdGhpcy51bmZpbmlzaGVkUGF0aCA9IG5ldyBQYXRoKFtdLCBjb25maWd1cmF0aW9uLm5ld1BvbHlnb25MaW5lUHJvcGVydGllcyk7XHJcbiAgICB0aGlzLnBhdGhMYXllci5wYXRocy5wdXNoKHRoaXMudW5maW5pc2hlZFBhdGgpO1xyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9zZVBhdGgoKSB7XHJcbiAgICBpZiAodGhpcy51bmZpbmlzaGVkUGF0aC5nZXRWZXJ0aWNlc0NvdW50KCkgPCBjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQb2x5Z29uIG11c3QgaGF2ZSBhdCBsZWFzdCAke2NvbmZpZ3VyYXRpb24ubWluUG9seWdvblBvaW50c30gdmVydGljZXNgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVuZmluaXNoZWRQYXRoLmxpbmVQcm9wZXJ0aWVzID0gY29uZmlndXJhdGlvbi5wb2x5Z29uTGluZVByb3BlcnRpZXM7XHJcbiAgICBjb25zdCBwb2x5Z29uID0gbmV3IFBvbHlnb24odGhpcy51bmZpbmlzaGVkUGF0aCk7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllci5wYXRocy5wdXNoKHBvbHlnb24pO1xyXG4gICAgdGhpcy5wYXRoTGF5ZXIucmVtb3ZlUGF0aCh0aGlzLnVuZmluaXNoZWRQYXRoKTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0TmV3VW5maW5pc2hlZFBhdGgoKTtcclxuICAgIHRoaXMuZGlzcGF0Y2hVcGRhdGVVSUV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwYXRjaFVwZGF0ZVVJRXZlbnRzKCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIDI3OlxyXG4gICAgICAgIHRoaXMucGF0aExheWVyLnJlbW92ZVBhdGgodGhpcy51bmZpbmlzaGVkUGF0aCk7XHJcbiAgICAgICAgdGhpcy5zdGFydE5ld1VuZmluaXNoZWRQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaFVwZGF0ZVVJRXZlbnRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihSZW5kZXJGaW5pc2hlZEV2ZW50Lm5hbWUsIHRoaXMuZHJhd05ld0xpbmVHdWlkZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUG9pbnRDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihSZW5kZXJGaW5pc2hlZEV2ZW50Lm5hbWUsIHRoaXMuZHJhd05ld0xpbmVHdWlkZSk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoUG9pbnRDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50Q2xpY2spO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9OZXdQb2x5Z29uVUlDb250cm9sbGVyLnRzIiwiaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcbmltcG9ydCB7IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciB9IGZyb20gJ3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcic7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbnRlcmZhY2UgUGF0aERyYWdnaW5nU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoRHJhZ2dpbmdTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuXHJcbiAgcHJpdmF0ZSBwYXRoVG9EcmFnOiBQYXRoIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgcHJldmlvdXNQb2ludDogUG9pbnQgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBhdGhEcmFnZ2luZ1NlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcblxyXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZU91dCA9IHRoaXMub25Nb3VzZU91dC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICAvLyBUT0RPOiBwb3NzaWJsZSBwb2x5Z29uIGdob3N0IGxheWVyIGhlcmVcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdQYXRoKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzRHJhZ2dpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNEcmFnZ2luZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydE1vdmluZ1BhdGgoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIuZ2V0UG9pbnRGcm9tTW91c2VFdmVudChldmVudCk7XHJcblxyXG4gICAgdGhpcy5wYXRoVG9EcmFnID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5wcmV2aW91c1BvaW50ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5zdGFnZS5sYXllcnMpIHtcclxuICAgICAgZm9yIChjb25zdCBwYXRoIG9mIGxheWVyLnBhdGhzKSB7XHJcbiAgICAgICAgaWYgKCFwYXRoLmlzUG9pbnRJbkJvdW5kaW5nQm94KHBvaW50KSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhdGhUb0RyYWcgPSBwYXRoO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnBhdGhUb0RyYWcpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCdDYW5ub3QgZHJhZyBwYXRoIC0gbm8gcGF0aCBmb3VuZCwgcG9pbnQgaXMgbm90IGluIHRoZSBib3VuZGluZyBib3gnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByZXZpb3VzUG9pbnQgPSBwb2ludDtcclxuICAgIHRoaXMuX2lzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5vbk1vdXNlT3V0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMub25Nb3VzZU91dCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMucGF0aFRvRHJhZyB8fCAhdGhpcy5wcmV2aW91c1BvaW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb2ludCA9IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLmdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQpO1xyXG4gICAgY29uc3QgdHJhbnNpdGlvblZlY3RvciA9IFBvaW50LnN1YnRyYWN0KHBvaW50LCB0aGlzLnByZXZpb3VzUG9pbnQpO1xyXG5cclxuICAgIGZvciAoY29uc3QgcGF0aFBvaW50IG9mIHRoaXMucGF0aFRvRHJhZy5nZXRWZXJ0aWNlcygpKSB7XHJcbiAgICAgIHBhdGhQb2ludC5tb3ZlVG8oUG9pbnQuYWRkKHBhdGhQb2ludCwgdHJhbnNpdGlvblZlY3RvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuXHJcbiAgICB0aGlzLnByZXZpb3VzUG9pbnQgPSBwb2ludDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZVVwKF9ldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdQYXRoKCk7XHJcbiAgICB0aGlzLmNhbmNlbE5leHRDbGlja0V2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VPdXQoX2V2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLnN0b3BEcmFnZ2luZ1BhdGgoKTtcclxuICAgIHRoaXMuX2lzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcERyYWdnaW5nUGF0aCgpIHtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMucGF0aFRvRHJhZyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMucHJldmlvdXNQb2ludCA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FuY2VsTmV4dENsaWNrRXZlbnQoKSB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuX2lzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1BhdGhEcmFnZ2luZ1NlcnZpY2UudHMiLCJpbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdjb21tb24vQ09MT1JTJztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IExFWCB9IGZyb20gJ0xFWCc7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRmluaXNoUG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9GaW5pc2hQb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFBvaW50RHJhZ0V2ZW50IH0gZnJvbSAnZXZlbnRzL3BvaW50LWRyYWcvUG9pbnREcmFnRXZlbnQnO1xyXG5pbXBvcnQgeyBTdGFydFBvaW50RHJhZ0V2ZW50IH0gZnJvbSAnZXZlbnRzL3BvaW50LWRyYWcvU3RhcnRQb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmludGVyZmFjZSBQb2ludERyYWdnaW5nU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludERyYWdnaW5nU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcGF0aEdob3N0TGF5ZXI6IExheWVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBvaW50RHJhZ2dpbmdTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG4gICAgdGhpcy5jYW52YXMgPSBkZXBlbmRlbmNpZXMuY2FudmFzO1xyXG5cclxuICAgIHRoaXMub25TdGFydFBvaW50RHJhZyA9IHRoaXMub25TdGFydFBvaW50RHJhZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkZpbmlzaFBvaW50RHJhZyA9IHRoaXMub25GaW5pc2hQb2ludERyYWcuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Qb2ludERyYWcgPSB0aGlzLm9uUG9pbnREcmFnLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMucGF0aEdob3N0TGF5ZXIgPSBuZXcgTGF5ZXIoTEVYLlBBVEhfR0hPU1RfTEFZRVJfTkFNRSk7XHJcbiAgICB0aGlzLnN0YWdlLmxheWVycy5zcGxpY2UoMCwgMCwgdGhpcy5wYXRoR2hvc3RMYXllcik7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihTdGFydFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblN0YXJ0UG9pbnREcmFnKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoRmluaXNoUG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uRmluaXNoUG9pbnREcmFnKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUG9pbnREcmFnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5wYXRoR2hvc3RMYXllci5wYXRocyA9IFtdO1xyXG4gICAgdGhpcy5zdGFnZS5yZW1vdmVMYXllcih0aGlzLnBhdGhHaG9zdExheWVyKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFN0YXJ0UG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uU3RhcnRQb2ludERyYWcpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgRmluaXNoUG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICB0aGlzLm9uRmluaXNoUG9pbnREcmFnXHJcbiAgICApO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludERyYWcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblN0YXJ0UG9pbnREcmFnKGV2ZW50OiBTdGFydFBvaW50RHJhZ0V2ZW50KSB7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoIWNvbmZpZ3VyYXRpb24uZGlzcGxheVBhdGhHaG9zdFdoZW5EcmFnZ2luZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGF0aCA9IGV2ZW50LnBheWxvYWQucGF0aC5jbG9uZSgpO1xyXG4gICAgcGF0aC5saW5lUHJvcGVydGllcyA9IG5ldyBMaW5lUHJvcGVydGllcyhDT0xPUlMuR1JFRU4sIDEpO1xyXG4gICAgdGhpcy5wYXRoR2hvc3RMYXllci5wYXRocy5wdXNoKHBhdGgpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25GaW5pc2hQb2ludERyYWcoZXZlbnQ6IEZpbmlzaFBvaW50RHJhZ0V2ZW50KSB7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICAgIGlmICghY29uZmlndXJhdGlvbi5kaXNwbGF5UGF0aEdob3N0V2hlbkRyYWdnaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhdGhHaG9zdExheWVyLnBhdGhzID0gW107XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblBvaW50RHJhZyhldmVudDogUG9pbnREcmFnRXZlbnQpIHtcclxuICAgIGNvbnN0IHsgY29tcG9uZW50LCBuZXdQb3NpdGlvbiB9ID0gZXZlbnQucGF5bG9hZDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIGNvbXBvbmVudC5wYXRoLmdldFZlcnRpY2VzSXRlcmF0b3IoKSkge1xyXG4gICAgICBpZiAocG9pbnQuZXF1YWxzKG5ld1Bvc2l0aW9uKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB4ID0gbmV3UG9zaXRpb24ueDtcclxuICAgIGxldCB5ID0gbmV3UG9zaXRpb24ueTtcclxuXHJcbiAgICBpZiAoeCA8IDApIHtcclxuICAgICAgeCA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKHggPj0gdGhpcy5jYW52YXMud2lkdGgpIHtcclxuICAgICAgeCA9IHRoaXMuY2FudmFzLndpZHRoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoeSA8IDApIHtcclxuICAgICAgeSA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKHkgPj0gdGhpcy5jYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgIHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudC5wb2ludC5tb3ZlVG8oeCwgeSk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUG9pbnREcmFnZ2luZ1NlcnZpY2UudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTGluZUNsaWNrRXZlbnQgfSBmcm9tICdldmVudHMvTGluZUNsaWNrRXZlbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBQb2ludEluc2VydGVyU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludEluc2VydGVyU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gIHByaXZhdGUgcHJldmlvdXNMaW5lQ2xpY2tUaW1lc3RhbXAgPSAwO1xyXG4gIHByaXZhdGUgcHJldmlvdXNMaW5lSGl0OiBMaW5lO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBvaW50SW5zZXJ0ZXJTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy5vbkxpbmVDbGljayA9IHRoaXMub25MaW5lQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihMaW5lQ2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25MaW5lQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKExpbmVDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbkxpbmVDbGljayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTGluZUNsaWNrKGV2ZW50OiBMaW5lQ2xpY2tFdmVudCkge1xyXG4gICAgY29uc3QgcHJldmlvdXNMaW5lSGl0ID0gdGhpcy5wcmV2aW91c0xpbmVIaXQ7XHJcbiAgICBjb25zdCBwcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcCA9IHRoaXMucHJldmlvdXNMaW5lQ2xpY2tUaW1lc3RhbXA7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICB0aGlzLnByZXZpb3VzTGluZUhpdCA9IGV2ZW50LnBheWxvYWQubGluZTtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lQ2xpY2tUaW1lc3RhbXAgPSBjdXJyZW50VGltZXN0YW1wO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgIXByZXZpb3VzTGluZUhpdCB8fFxyXG4gICAgICBjdXJyZW50VGltZXN0YW1wIC0gcHJldmlvdXNMaW5lQ2xpY2tUaW1lc3RhbXAgPiBjb25maWd1cmF0aW9uLmRvdWJsZUNsaWNrTWF4RGVsYXlcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByZXZpb3VzTGluZUhpdC5lcXVhbHMoZXZlbnQucGF5bG9hZC5saW5lKSkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnBheWxvYWQucGF0aC5maW5kUG9pbnRJbmRleChldmVudC5wYXlsb2FkLmxpbmUucDIpO1xyXG4gICAgICBjb25zdCBuZXdQb2ludCA9IGV2ZW50LnBheWxvYWQubGluZS5nZXRNaWRkbGVQb2ludCgpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBldmVudC5wYXlsb2FkLnBhdGguaW5zZXJ0VmVydGV4KG5ld1BvaW50LCBpbmRleCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUT0RPOiBmaXggd3JvbmcgcmVuZGVyaW5nXHJcbiAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2ludEluc2VydGVyU2VydmljZS50cyIsImltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFBvaW50Q2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9Qb2ludENsaWNrRXZlbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludENvbXBvbmVudCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvUGF0aFBvaW50Q29tcG9uZW50JztcclxuXHJcbmludGVyZmFjZSBQb2ludFJlbW92ZXJTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50UmVtb3ZlclNlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBwcml2YXRlIHByZXZpb3VzUGF0aFBvaW50Q29tcG9uZW50OiBQYXRoUG9pbnRDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c0NsaWNrVGltZXN0YW1wID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2ludFJlbW92ZXJTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLm9uUG9pbnRDbGljayA9IHRoaXMub25Qb2ludENsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUG9pbnRDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludENsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Qb2ludENsaWNrKGV2ZW50OiBQb2ludENsaWNrRXZlbnQpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhQb2ludENvbXBvbmVudCA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgICBjb25zdCBwcmV2aW91c1BhdGhQb2ludENvbXBvbmVudCA9IHRoaXMucHJldmlvdXNQYXRoUG9pbnRDb21wb25lbnQ7XHJcbiAgICBjb25zdCBwcmV2aW91c0NsaWNrVGltZXN0YW1wID0gdGhpcy5wcmV2aW91c0NsaWNrVGltZXN0YW1wO1xyXG5cclxuICAgIHRoaXMudXBkYXRlUHJldmlvdXNDbGlja0luZm9ybWF0aW9uKGV2ZW50LCBjdXJyZW50VGltZXN0YW1wKTtcclxuXHJcbiAgICBpZiAoIXByZXZpb3VzUGF0aFBvaW50Q29tcG9uZW50IHx8IHByZXZpb3VzUGF0aFBvaW50Q29tcG9uZW50ICE9PSBwYXRoUG9pbnRDb21wb25lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50VGltZXN0YW1wIC0gcHJldmlvdXNDbGlja1RpbWVzdGFtcCA+IGNvbmZpZ3VyYXRpb24uZG91YmxlQ2xpY2tNYXhEZWxheSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmVQcmV2aW91c0NsaWNrZWRQb2ludCgpO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVByZXZpb3VzQ2xpY2tJbmZvcm1hdGlvbihldmVudDogUG9pbnRDbGlja0V2ZW50LCB0aW1lc3RhbXA6IG51bWJlcikge1xyXG4gICAgdGhpcy5wcmV2aW91c1BhdGhQb2ludENvbXBvbmVudCA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgICB0aGlzLnByZXZpb3VzQ2xpY2tUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVByZXZpb3VzQ2xpY2tlZFBvaW50KCkge1xyXG4gICAgY29uc3QgcGF0aCA9IHRoaXMucHJldmlvdXNQYXRoUG9pbnRDb21wb25lbnQucGF0aDtcclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5wcmV2aW91c1BhdGhQb2ludENvbXBvbmVudC5wb2ludDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBwYXRoLnJlbW92ZVZlcnRleChwb2ludCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ0Nhbm5vdCByZW1vdmUgdmVydGV4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcmV2aW91c1BhdGhQb2ludENvbXBvbmVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUG9pbnRSZW1vdmVyU2VydmljZS50cyIsImltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuXHJcbmltcG9ydCB7IFBhdGhQb2ludENvbXBvbmVudCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvUGF0aFBvaW50Q29tcG9uZW50JztcclxuaW1wb3J0IHsgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIH0gZnJvbSAndWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50U3luY1NlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIHN0YWdlOiBTdGFnZTtcclxuICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGF0aFBvaW50IHtcclxuICBwYXRoOiBQYXRoO1xyXG4gIHBvaW50OiBQb2ludDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50U3luY1NlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHBhdGhQb2ludENvbXBvbmVudHM6IFBhdGhQb2ludENvbXBvbmVudFtdID0gW107XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2ludFN5bmNTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBkZXBlbmRlbmNpZXMuY29udGFpbmVyO1xyXG4gICAgdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgPSBkZXBlbmRlbmNpZXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIHRoaXMuc3luY2hyb25pemVDb21wb25lbnRzID0gdGhpcy5zeW5jaHJvbml6ZUNvbXBvbmVudHMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihTeW5jQ29tcG9uZW50c0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5zeW5jaHJvbml6ZUNvbXBvbmVudHMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFN5bmNDb21wb25lbnRzRXZlbnQuZXZlbnRUeXBlLCB0aGlzLnN5bmNocm9uaXplQ29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3luY2hyb25pemVDb21wb25lbnRzKGV2ZW50OiBTeW5jQ29tcG9uZW50c0V2ZW50KSB7XHJcbiAgICBjb25zdCBjb21wb25lbnRzVG9SZW1vdmUgPSB0aGlzLmdldFJlZHVuZGFudENvbXBvbmVudHMoKTtcclxuICAgIGNvbXBvbmVudHNUb1JlbW92ZS5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQucmVtb3ZlKCkpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhQb2ludHMgPSB0aGlzLmdldFBhdGhQb2ludHMoKTtcclxuICAgIGNvbnN0IHBvaW50c1dpdGhvdXRDb21wb25lbnRzID0gdGhpcy5nZXRQb2ludHNXaXRob3V0Q29tcG9uZW50cyhwYXRoUG9pbnRzKTtcclxuICAgIGNvbnN0IG5ld0NvbXBvbmVudHMgPSB0aGlzLmNyZWF0ZVBhdGhQb2ludENvbXBvbmVudHMocG9pbnRzV2l0aG91dENvbXBvbmVudHMpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBvbmVudHNOb3RSZW1vdmVkID0gdGhpcy5wYXRoUG9pbnRDb21wb25lbnRzLmZpbHRlcihcclxuICAgICAgY29tcG9uZW50ID0+IGNvbXBvbmVudHNUb1JlbW92ZS5pbmRleE9mKGNvbXBvbmVudCkgPT09IC0xXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucGF0aFBvaW50Q29tcG9uZW50cyA9IFsuLi5uZXdDb21wb25lbnRzLCAuLi5jb21wb25lbnRzTm90UmVtb3ZlZF07XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGF0aFBvaW50cygpIHtcclxuICAgIGNvbnN0IHBhdGhQb2ludHM6IFBhdGhQb2ludFtdID0gW107XHJcblxyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgIGxheWVyLnBhdGhzLmZvckVhY2gocGF0aCA9PiB7XHJcbiAgICAgICAgcGF0aC5nZXRWZXJ0aWNlcygpLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICAgICAgcGF0aFBvaW50cy5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgcG9pbnRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwYXRoUG9pbnRzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQYXRoUG9pbnRDb21wb25lbnRzKHBhdGhQb2ludHM6IFBhdGhQb2ludFtdKSB7XHJcbiAgICByZXR1cm4gcGF0aFBvaW50cy5tYXAoXHJcbiAgICAgIHBhdGhQb2ludCA9PlxyXG4gICAgICAgIG5ldyBQYXRoUG9pbnRDb21wb25lbnQocGF0aFBvaW50LnBhdGgsIHBhdGhQb2ludC5wb2ludCwge1xyXG4gICAgICAgICAgYXBwbGljYXRpb25VSUNvbnRhaW5lcjogdGhpcy5jb250YWluZXIsXHJcbiAgICAgICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICAgICAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lclxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSZWR1bmRhbnRDb21wb25lbnRzKCkge1xyXG4gICAgY29uc3QgYWN0aXZlUGF0aHMgPSB0aGlzLmdldEFjdGl2ZVBhdGhzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucGF0aFBvaW50Q29tcG9uZW50cy5maWx0ZXIoXHJcbiAgICAgIGNvbXBvbmVudCA9PlxyXG4gICAgICAgIGFjdGl2ZVBhdGhzLmluZGV4T2YoY29tcG9uZW50LnBhdGgpID09PSAtMSB8fFxyXG4gICAgICAgIGNvbXBvbmVudC5wYXRoLmdldFZlcnRpY2VzKCkuaW5kZXhPZihjb21wb25lbnQucG9pbnQpID09PSAtMVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UG9pbnRzV2l0aG91dENvbXBvbmVudHMocGF0aFBvaW50czogUGF0aFBvaW50W10pIHtcclxuICAgIHJldHVybiBwYXRoUG9pbnRzLmZpbHRlcihcclxuICAgICAgcGF0aFBvaW50ID0+XHJcbiAgICAgICAgIXRoaXMucGF0aFBvaW50Q29tcG9uZW50cy5maW5kKFxyXG4gICAgICAgICAgY29tcG9uZW50ID0+IGNvbXBvbmVudC5wYXRoID09PSBwYXRoUG9pbnQucGF0aCAmJiBjb21wb25lbnQucG9pbnQgPT09IHBhdGhQb2ludC5wb2ludFxyXG4gICAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEFjdGl2ZVBhdGhzKCkge1xyXG4gICAgY29uc3QgcGF0aHM6IFBhdGhbXSA9IFtdO1xyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMubWFwKGxheWVyID0+IHBhdGhzLnB1c2goLi4ubGF5ZXIucGF0aHMpKTtcclxuXHJcbiAgICByZXR1cm4gcGF0aHM7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1BvaW50U3luY1NlcnZpY2UudHMiLCJpbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICd1aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXInO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IEZpbmlzaFBvaW50RHJhZ0V2ZW50IH0gZnJvbSAnZXZlbnRzL3BvaW50LWRyYWcvRmluaXNoUG9pbnREcmFnRXZlbnQnO1xyXG5pbXBvcnQgeyBQb2ludERyYWdFdmVudCB9IGZyb20gJ2V2ZW50cy9wb2ludC1kcmFnL1BvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgU3RhcnRQb2ludERyYWdFdmVudCB9IGZyb20gJ2V2ZW50cy9wb2ludC1kcmFnL1N0YXJ0UG9pbnREcmFnRXZlbnQnO1xyXG5pbXBvcnQgeyBQb2ludENsaWNrRXZlbnQgfSBmcm9tICdldmVudHMvUG9pbnRDbGlja0V2ZW50JztcclxuXHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9QYXRoUG9pbnRDb21wb25lbnQuc2Nzcyc7XHJcblxyXG5jb25zdCBDT01QT05FTlRfQ0xBU1NfTkFNRSA9ICdhcHBsaWNhdGlvbi11aV9fdmVydGV4JztcclxuY29uc3QgSU5JVElBTF9DTEFTU19OQU1FID0gJ2FwcGxpY2F0aW9uLXVpX192ZXJ0ZXgtLWluaXRpYWwnO1xyXG5cclxuaW50ZXJmYWNlIFBhdGhQb2ludENvbXBvbmVudERlcGVuZGVuY2llcyB7XHJcbiAgYXBwbGljYXRpb25VSUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoUG9pbnRDb21wb25lbnQge1xyXG4gIHB1YmxpYyBlbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcclxuICBwdWJsaWMgcGF0aDogUGF0aDtcclxuICBwdWJsaWMgcG9pbnQ6IFBvaW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgYXBwbGljYXRpb25VSUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHBhdGg6IFBhdGgsXHJcbiAgICBwb2ludDogUG9pbnQsXHJcbiAgICBkZXBlbmRlbmNpZXM6IFBhdGhQb2ludENvbXBvbmVudERlcGVuZGVuY2llc1xyXG4gICkge1xyXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgIHRoaXMucG9pbnQgPSBwb2ludDtcclxuICAgIHRoaXMuYXBwbGljYXRpb25VSUNvbnRhaW5lciA9IGRlcGVuZGVuY2llcy5hcHBsaWNhdGlvblVJQ29udGFpbmVyO1xyXG4gICAgdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgPSBkZXBlbmRlbmNpZXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RvcERyYWdnaW5nID0gdGhpcy5zdG9wRHJhZ2dpbmcuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZSgpIHtcclxuICAgIHRoaXMucG9pbnQubW92ZUNhbGxiYWNrID0gbnVsbDtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnBhdGgubGluZVByb3BlcnRpZXMuY29sb3IuZmlsbFN0eWxlO1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke3RoaXMucG9pbnQueX1weGA7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3RoaXMucG9pbnQueH1weGA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGluaXRpYWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhJTklUSUFMX0NMQVNTX05BTUUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBpbml0aWFsKGlzSW5pdGlhbDogYm9vbGVhbikge1xyXG4gICAgaWYgKGlzSW5pdGlhbCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChJTklUSUFMX0NMQVNTX05BTUUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoSU5JVElBTF9DTEFTU19OQU1FKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdCgpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5hcHBsaWNhdGlvblVJQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ09NUE9ORU5UX0NMQVNTX05BTUUpO1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5wYXRoLmdldFZlcnRpY2VzQ291bnQoKSA9PT0gMSB8fFxyXG4gICAgICAoIXRoaXMucGF0aC5jbG9zZWQgJiYgdGhpcy5wYXRoLmZpbmRQb2ludEluZGV4KHRoaXMucG9pbnQpID09PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xyXG4gICAgdGhpcy5wb2ludC5tb3ZlQ2FsbGJhY2sgPSB0aGlzLnVwZGF0ZVBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlRG93bigpIHtcclxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IFBvaW50Q2xpY2tFdmVudCh0aGlzKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgIGlmIChldmVudC5oYW5kbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTdGFydFBvaW50RHJhZ0V2ZW50KHRoaXMpKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci5nZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50KTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFBvaW50RHJhZ0V2ZW50KHRoaXMsIG1vdXNlUG9zaXRpb24pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcERyYWdnaW5nKCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgRmluaXNoUG9pbnREcmFnRXZlbnQodGhpcykpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvUGF0aFBvaW50Q29tcG9uZW50LnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUGF0aFBvaW50Q29tcG9uZW50LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUGF0aFBvaW50Q29tcG9uZW50LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUGF0aFBvaW50Q29tcG9uZW50LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvUGF0aFBvaW50Q29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hcHBsaWNhdGlvbi11aV9fdmVydGV4IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogc29saWQgMnB4OyB9XFxuICAuYXBwbGljYXRpb24tdWlfX3ZlcnRleDpub3QoOmFjdGl2ZSkge1xcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyB9XFxuICAuYXBwbGljYXRpb24tdWlfX3ZlcnRleDphY3RpdmUge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDsgfVxcblxcbi5hcHBsaWNhdGlvbi11aV9fdmVydGV4LS1pbml0aWFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUxZmY7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9QYXRoUG9pbnRDb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcblxyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuXHJcbmltcG9ydCB7IExvYWRCdXR0b24gfSBmcm9tICd1aS9jb21wb25lbnRzL3NlcmlhbGl6YXRpb24vTG9hZEJ1dHRvbic7XHJcbmltcG9ydCB7IFNhdmVCdXR0b24gfSBmcm9tICd1aS9jb21wb25lbnRzL3NlcmlhbGl6YXRpb24vU2F2ZUJ1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgU2VyaWFsaXphdGlvblNlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHN0YWdlOiBTdGFnZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlcmlhbGl6YXRpb25TZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzZXJpYWxpemF0aW9uQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgc3RhZ2U6IFN0YWdlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFNlcmlhbGl6YXRpb25TZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICBjb25zdCBzZXJpYWxpemF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlcmlhbGl6YXRpb24tY29udGFpbmVyJyk7XHJcbiAgICBpZiAoIXNlcmlhbGl6YXRpb25Db250YWluZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJpYWxpemF0aW9uIGNvbnRhaW5lciBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlcmlhbGl6YXRpb25Db250YWluZXIgPSBzZXJpYWxpemF0aW9uQ29udGFpbmVyO1xyXG5cclxuICAgIGNvbnN0IGxvYWRCdXR0b24gPSBuZXcgTG9hZEJ1dHRvbih7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBuZXcgU2F2ZUJ1dHRvbih7XHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNlcmlhbGl6YXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9hZEJ1dHRvbik7XHJcbiAgICB0aGlzLnNlcmlhbGl6YXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgdGhpcy5zZXJpYWxpemF0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9TZXJpYWxpemF0aW9uU2VydmljZS50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBMRVggfSBmcm9tICdMRVgnO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuXHJcbmltcG9ydCB7IFNlcmlhbGl6YWJsZUxheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9hZEJ1dHRvbkRlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZEJ1dHRvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgYnV0dG9uRWxlbWVudDogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogTG9hZEJ1dHRvbkRlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuaW5uZXJUZXh0ID0gJ0xvYWQnO1xyXG5cclxuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25FbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5idXR0b25FbGVtZW50KTtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2xpY2soKSB7XHJcbiAgICBjb25zdCBzZXJpYWxpemVkRGF0YSA9IHByb21wdCgnUGxlYXNlIHBhc3RlIHRoZSBzZXJpYWxpemVkIGRhdGEnKTtcclxuXHJcbiAgICBpZiAoIXNlcmlhbGl6ZWREYXRhKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb2x5Z29uTGF5ZXIgPSB0aGlzLnN0YWdlLmZpbmRMYXllckJ5TmFtZShMRVguUE9MWUdPTl9MQVlFUl9OQU1FKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50U2VyaWFsaXphYmxlTGF5ZXIgPSBwb2x5Z29uTGF5ZXIudG9TZXJpYWxpemFibGVPYmplY3QoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzZXJpYWxpemFibGVMYXllciA9IDxTZXJpYWxpemFibGVMYXllcj5KU09OLnBhcnNlKHNlcmlhbGl6ZWREYXRhKTtcclxuICAgICAgcG9seWdvbkxheWVyLmZyb21TZXJpYWxpemFibGVPYmplY3QoPFNlcmlhbGl6YWJsZUxheWVyPnNlcmlhbGl6YWJsZUxheWVyKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHBvbHlnb25MYXllci5mcm9tU2VyaWFsaXphYmxlT2JqZWN0KGN1cnJlbnRTZXJpYWxpemFibGVMYXllcik7XHJcbiAgICAgIGFsZXJ0KCdJbnZhbGlkIGRhdGEnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1sb2FkLWJ1dHRvbicsIExvYWRCdXR0b24pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL3NlcmlhbGl6YXRpb24vTG9hZEJ1dHRvbi50cyIsImltcG9ydCB7IExFWCB9IGZyb20gJ0xFWCc7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTYXZlQnV0dG9uRGVwZW5kZW5jaWVzIHtcclxuICBzdGFnZTogU3RhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTYXZlQnV0dG9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgYnV0dG9uRWxlbWVudDogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogU2F2ZUJ1dHRvbkRlcGVuZGVuY2llcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuaW5uZXJUZXh0ID0gJ1NhdmUnO1xyXG5cclxuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25FbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5idXR0b25FbGVtZW50KTtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2xpY2soKSB7XHJcbiAgICBjb25zdCBwb2x5Z29uTGF5ZXIgPSB0aGlzLnN0YWdlLmZpbmRMYXllckJ5TmFtZShMRVguUE9MWUdPTl9MQVlFUl9OQU1FKTtcclxuICAgIGNvbnN0IHNlcmlhbGl6YWJsZU9iamVjdCA9IHBvbHlnb25MYXllci50b1NlcmlhbGl6YWJsZU9iamVjdCgpO1xyXG5cclxuICAgIGNvbnN0IHNlcmlhbGl6ZWREYXRhID0gSlNPTi5zdHJpbmdpZnkoc2VyaWFsaXphYmxlT2JqZWN0KTtcclxuICAgIHByb21wdCgnQ29weSB0aGUgZGF0YScsIHNlcmlhbGl6ZWREYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXNhdmUtYnV0dG9uJywgU2F2ZUJ1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9TYXZlQnV0dG9uLnRzIiwiaW1wb3J0ICd1aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkuc2Nzcyc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbG9nT3ZlcmxheSBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcml2YXRlIG92ZXJsYXlFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGRpYWxvZ0JveDogRGlhbG9nQm94IHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5vdmVybGF5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5vdmVybGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XHJcblxyXG4gICAgdGhpcy5vbk92ZXJsYXlDbGljayA9IHRoaXMub25PdmVybGF5Q2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25EaWFsb2dDbG9zZSA9IHRoaXMub25EaWFsb2dDbG9zZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXlFbGVtZW50KTtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3ZlcmxheUNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5vdmVybGF5RWxlbWVudCk7XHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk92ZXJsYXlDbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd0RpYWxvZyhkaWFsb2dCb3g6IERpYWxvZ0JveCkge1xyXG4gICAgdGhpcy5kaWFsb2dCb3ggPSBkaWFsb2dCb3g7XHJcbiAgICB0aGlzLnNob3dPdmVybGF5KCk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGRpYWxvZ0JveCk7XHJcbiAgICBkaWFsb2dCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uRGlhbG9nQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk92ZXJsYXlDbGljaygpIHtcclxuICAgIGlmICghdGhpcy5kaWFsb2dCb3ggfHwgIXRoaXMuZGlhbG9nQm94LmNhbkNsb3NlKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlhbG9nQm94LmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRGlhbG9nQ2xvc2UoKSB7XHJcbiAgICBpZiAodGhpcy5kaWFsb2dCb3gpIHtcclxuICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmRpYWxvZ0JveCk7XHJcbiAgICAgIHRoaXMuZGlhbG9nQm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkRpYWxvZ0Nsb3NlKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGlhbG9nQm94ID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93T3ZlcmxheSgpIHtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS0tdmlzaWJsZScpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlT3ZlcmxheSgpIHtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS0tdmlzaWJsZScpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZGlhbG9nLW92ZXJsYXknLCBEaWFsb2dPdmVybGF5KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5LnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vRGlhbG9nT3ZlcmxheS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0RpYWxvZ092ZXJsYXkuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dPdmVybGF5LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluLW91dDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuXFxuLm92ZXJsYXktLXZpc2libGUge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5zdHJ1Y3Rpb25zRGlhbG9nIH0gZnJvbSAndWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnN0cnVjdGlvbnNCdXR0b24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSBidXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuYnV0dG9uLnRleHRDb250ZW50ID0gJ0luc3RydWN0aW9ucyc7XHJcbiAgICB0aGlzLmJ1dHRvbi5jbGFzc05hbWUgPSAnaW5zdHJ1Y3Rpb25zLWJ1dHRvbic7XHJcblxyXG4gICAgdGhpcy5vbkJ1dHRvbkNsaWNrID0gdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcclxuICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5idXR0b24pO1xyXG4gICAgdGhpcy5idXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkJ1dHRvbkNsaWNrKCkge1xyXG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zRGlhbG9nID0gbmV3IEluc3RydWN0aW9uc0RpYWxvZygpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnNEaWFsb2cpO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWluc3RydWN0aW9ucy1idXR0b24nLCBJbnN0cnVjdGlvbnNCdXR0b24pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNCdXR0b24udHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9JbnN0cnVjdGlvbnNEaWFsb2cuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9JbnN0cnVjdGlvbnNEaWFsb2cuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9JbnN0cnVjdGlvbnNEaWFsb2cuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbnN0cnVjdGlvbnMtZGlhbG9nLXdyYXBwZXIge1xcbiAgei1pbmRleDogMjsgfVxcblxcbi5pbnN0cnVjdGlvbnMtZGlhbG9nX19vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluLW91dDsgfVxcblxcbi5pbnN0cnVjdGlvbnMtZGlhbG9nX19vdmVybGF5LS1hY3RpdmUge1xcbiAgb3BhY2l0eTogMC41OyB9XFxuXFxuLmluc3RydWN0aW9ucy1kaWFsb2cge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYzNTBmO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBjb2xvcjogI2VlZTtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDsgfVxcblxcbi5pbnN0cnVjdGlvbnMtZGlhbG9nLS1hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSwgMSk7IH1cXG5cXG4uaW5zdHJ1Y3Rpb25zLWRpYWxvZ19fdGl0bGUge1xcbiAgbWFyZ2luOiAwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQb2x5Z29uQ2xpcHBlciB9IGZyb20gJ3NlcnZpY2VzL1BvbHlnb25DbGlwcGVyJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnY29tbW9uL1BvbHlnb24nO1xyXG5cclxuaW50ZXJmYWNlIFBvbHlnb25DbGlwcGluZ1NlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIHBvbHlnb25DbGlwcGVyOiBQb2x5Z29uQ2xpcHBlcjtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbkNsaXBwaW5nU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcG9seWdvbkNsaXBwZXI6IFBvbHlnb25DbGlwcGVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBvbHlnb25DbGlwcGluZ1NlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMucG9seWdvbkNsaXBwZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkNsaXBwZXI7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uTGF5ZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIC8vIE5vdGhpbmcgdG8gZG8gaGVyZVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICAvLyBOb3RoaW5nIHRvIGRvIGhlcmVcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGlwUG9seWdvbnMocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBjb25zdCBtYXRjaGluZ1BvbHlnb25zID0gdGhpcy5wb2x5Z29uTGF5ZXIucGF0aHNcclxuICAgICAgLmZpbHRlcihwYXRoID0+IHBhdGguaXNQb2ludEluQm91bmRpbmdCb3gocG9pbnQpKVxyXG4gICAgICAubWFwKHBhdGggPT4gPFBvbHlnb24+cGF0aCk7XHJcblxyXG4gICAgaWYgKG1hdGNoaW5nUG9seWdvbnMubGVuZ3RoIDwgMikge1xyXG4gICAgICBhbGVydCgnQ2xpY2sgaW4gdGhlIGJvdW5kaW5nIGJveCBvZiBhdCBsZWFzdCAyIHBvbHlnb25zJyk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udmV4UG9seWdvbiA9IG1hdGNoaW5nUG9seWdvbnMuZmluZChwb2x5Z29uID0+IHBvbHlnb24uaXNDb252ZXgoKSk7XHJcbiAgICBpZiAoIWNvbnZleFBvbHlnb24pIHtcclxuICAgICAgYWxlcnQoJ0Nhbm5vdCBmaW5kIGEgY29udmV4IHBvbHlnb24nKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJqZWN0UG9seWdvbkluZGV4ID0gY29udmV4UG9seWdvbiA9PT0gbWF0Y2hpbmdQb2x5Z29uc1swXSA/IDEgOiAwO1xyXG4gICAgY29uc3Qgc3ViamVjdFBvbHlnb24gPSBtYXRjaGluZ1BvbHlnb25zW3N1YmplY3RQb2x5Z29uSW5kZXhdO1xyXG5cclxuICAgIGNvbnN0IGNsaXBwZWRQb2x5Z29uID0gdGhpcy5wb2x5Z29uQ2xpcHBlci5jbGlwUG9seWdvbihcclxuICAgICAgc3ViamVjdFBvbHlnb24sXHJcbiAgICAgIGNvbnZleFBvbHlnb25cclxuICAgICk7XHJcblxyXG4gICAgaWYgKCFjbGlwcGVkUG9seWdvbikge1xyXG4gICAgICBhbGVydCgnQ2Fubm90IGNsaXAgcG9seWdvbnMgKHRoZXkgZG8gbm90IG92ZXJsYXApJyk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIucmVtb3ZlUGF0aChzdWJqZWN0UG9seWdvbik7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllci5yZW1vdmVQYXRoKGNvbnZleFBvbHlnb24pO1xyXG5cclxuICAgIHRoaXMucG9seWdvbkxheWVyLnBhdGhzLnB1c2goY2xpcHBlZFBvbHlnb24pO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUG9seWdvbkNsaXBwaW5nU2VydmljZS50cyJdLCJzb3VyY2VSb290IjoiIn0=