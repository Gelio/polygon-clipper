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
const Point_1 = __webpack_require__(3);
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
const Point_1 = __webpack_require__(3);
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
    getWeightedCenterPoint() {
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
    getCenterPoint() {
        const boundingBox = this.getBoundingBox();
        const centerX = (boundingBox.maxX + boundingBox.minX) / 2;
        const centerY = (boundingBox.maxY + boundingBox.minY) / 2;
        return new Point_1.Point(centerX, centerY);
    }
}
exports.Path = Path;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(3);
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
__webpack_require__(76);
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
            if (y >= 0 && y < this.canvas.height) {
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
const Point_1 = __webpack_require__(3);
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
        return point.getDistanceSquaredTo(path.getWeightedCenterPoint());
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
const input_data_1 = __webpack_require__(11);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(2);
const configuration_1 = __webpack_require__(0);
const LightVersorType_1 = __webpack_require__(10);
const LineProperties_1 = __webpack_require__(8);
const Point_1 = __webpack_require__(3);
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
/* 49 */
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Line_1 = __webpack_require__(14);
const Point_1 = __webpack_require__(3);
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
        const clippingPolygonCenter = clippingPolygon.getWeightedCenterPoint();
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
const MousePositionTransformer_1 = __webpack_require__(59);
const NewPolygonUIController_1 = __webpack_require__(60);
const PathDraggingService_1 = __webpack_require__(61);
const PointDraggingService_1 = __webpack_require__(62);
const PointInserterService_1 = __webpack_require__(63);
const PointRemoverService_1 = __webpack_require__(64);
const PointSyncService_1 = __webpack_require__(65);
const SerializationService_1 = __webpack_require__(69);
const LineClickEvent_1 = __webpack_require__(23);
__webpack_require__(72);
__webpack_require__(75);
__webpack_require__(24);
const PolygonClippingService_1 = __webpack_require__(78);
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
const input_data_1 = __webpack_require__(11);
const RenderEvent_1 = __webpack_require__(1);
const configuration_1 = __webpack_require__(0);
const ColorSelectDialog_1 = __webpack_require__(53);
const ImageSelectDialog_1 = __webpack_require__(56);
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(6);
__webpack_require__(54);
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".color-select-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: solid 1px black;\n  border-radius: 25px;\n  z-index: 1;\n  padding: 1rem;\n  background-color: white;\n  width: 75vw; }\n\n.color-select-dialog__block {\n  border-bottom: solid 1px black;\n  padding-bottom: 1em; }\n\n.color-select-dialog__heading {\n  margin: 0.5em 0; }\n\n.color-select-dialog__bottom-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1em; }\n  .color-select-dialog__bottom-buttons button {\n    font-size: 1.3em; }\n", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(57);
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".image-select-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: solid 1px black;\n  border-radius: 25px;\n  z-index: 1;\n  padding: 1rem;\n  background-color: white;\n  width: 75vw; }\n\n.image-select-dialog__heading {\n  margin: 0.5em 0; }\n\n.image-select-dialog__block {\n  border-bottom: solid 1px black;\n  padding-bottom: 1em; }\n\n.image-select-dialog__preset-images-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .image-select-dialog__preset-images-container > div {\n    max-width: 25%;\n    max-height: 200px;\n    margin: auto; }\n  .image-select-dialog__preset-images-container img {\n    max-width: 100%;\n    max-height: 200px; }\n\n.image-select-dialog__custom-image {\n  display: block;\n  max-width: 25%;\n  max-height: 200px;\n  margin: auto; }\n\n.image-select-dialog__image--selected {\n  border: solid 3px green; }\n\n.image-select-dialog__bottom-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1em; }\n  .image-select-dialog__bottom-buttons button {\n    font-size: 1.3em; }\n", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(3);
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
/* 60 */
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(3);
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
/* 62 */
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
/* 63 */
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
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PathPointComponent_1 = __webpack_require__(66);
const SyncComponentsEvent_1 = __webpack_require__(2);
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FinishPointDragEvent_1 = __webpack_require__(20);
const PointDragEvent_1 = __webpack_require__(21);
const StartPointDragEvent_1 = __webpack_require__(22);
const PointClickEvent_1 = __webpack_require__(18);
__webpack_require__(67);
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".application-ui__vertex {\n  border: solid 1px black;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border: solid 2px; }\n  .application-ui__vertex:not(:active) {\n    border-color: green; }\n  .application-ui__vertex:active {\n    border-color: red; }\n\n.application-ui__vertex--initial {\n  background-color: #0051ff; }\n", ""]);

// exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoadButton_1 = __webpack_require__(70);
const SaveButton_1 = __webpack_require__(71);
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
/* 70 */
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
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(73);
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: 1;\n  background-color: black;\n  transition: opacity 250ms ease-in-out;\n  pointer-events: none; }\n\n.overlay--visible {\n  opacity: 0.5;\n  pointer-events: all; }\n", ""]);

// exports


/***/ }),
/* 75 */
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".instructions-dialog-wrapper {\n  z-index: 2; }\n\n.instructions-dialog__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n  opacity: 0;\n  transition: opacity 250ms ease-in-out; }\n\n.instructions-dialog__overlay--active {\n  opacity: 0.5; }\n\n.instructions-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transform: translate(-50%, -50%) scale(0, 0);\n  background-color: #1f350f;\n  border: solid 1px black;\n  color: #eee;\n  padding: 2em;\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px black;\n  transition: transform 250ms ease-in-out; }\n\n.instructions-dialog--active {\n  transform: translate(-50%, -50%) scale(1, 1); }\n\n.instructions-dialog__title {\n  margin: 0; }\n", ""]);

// exports


/***/ }),
/* 78 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTBjOGFhNjY3OWY2NzZhZDk4NDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9SZW5kZXJFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xFWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0xpbmVQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vQ09MT1JTLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vTGlnaHRWZXJzb3JUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0xheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vUGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0xpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlnb24tZmlsbGVyL0ZpbGxXb3JrZXJNZXNzYWdlVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1BvbHlnb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9WZWN0b3IzLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvUG9pbnRDbGlja0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvUmVuZGVyRmluaXNoZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3BvaW50LWRyYWcvRmluaXNoUG9pbnREcmFnRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL1BvaW50RHJhZ0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9TdGFydFBvaW50RHJhZ0V2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvTGluZUNsaWNrRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/NDQ0NiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy93ZWJjb21wb25lbnRzLWhpLXNkLWNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vSGl0VGVzdFJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL0V2ZW50QWdncmVnYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL0V2ZW50UXVldWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlnb24tZmlsbGVyL1BvbHlnb25GaWxsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0hlaWdodE1hcEV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodENvbG9yRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWdvbi1maWxsZXIvQWN0aXZlRWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9DbG9zZXN0UGF0aEZpbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9JbnB1dERhdGFJbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvTGlnaHRTaW11bGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1BvbHlnb25DbGlwcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0lucHV0RGF0YVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3M/OTYyNCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3M/NmNmNiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvTmV3UG9seWdvblVJQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUGF0aERyYWdnaW5nU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUG9pbnREcmFnZ2luZ1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1BvaW50SW5zZXJ0ZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2ludFJlbW92ZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2ludFN5bmNTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9QYXRoUG9pbnRDb21wb25lbnQuc2Nzcz83MjliIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9TZXJpYWxpemF0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL0xvYWRCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9TYXZlQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzPzkwYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzPzRlMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQSx3Q0FBdUM7QUFDdkMsZ0RBQXVEO0FB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LEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFF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QUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVELE1BQU0sb0JBQW9CLEdBQVksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FDekUsY0FBYyxFQUNkLEtBQUssQ0FDTixDQUFDO1FBRUYsTUFBTSxlQUFlLEdBQUcscUJBQXFCLENBQUMsTUFBTSxDQUNsRCxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sS0FBSyxvQkFBb0IsQ0FDNUMsQ0FBQztRQUNGLE1BQU0scUJBQXFCLEdBQVksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFckcsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMscUJBQXFCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNwRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUkseUNBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNGO0FBMURELHdEQTBEQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTBjOGFhNjY3OWY2NzZhZDk4NDkiLCJpbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdjb21tb24vQ09MT1JTJztcclxuaW1wb3J0IHsgTGluZVByb3BlcnRpZXMgfSBmcm9tICdjb21tb24vTGluZVByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5jb25zdCBjb25maWd1cmF0aW9uID0ge1xyXG4gIG5ld0xpbmVQcmV2aWV3UHJvcGVydGllczogbmV3IExpbmVQcm9wZXJ0aWVzKENPTE9SUy5CTFVFLCAyKSxcclxuICBuZXdQb2x5Z29uTGluZVByb3BlcnRpZXM6IG5ldyBMaW5lUHJvcGVydGllcyhDT0xPUlMuUkVELCAxKSxcclxuICBwb2x5Z29uTGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzLmdldERlZmF1bHQoKSxcclxuICBhcHBsaWNhdGlvblVJQ29udGFpbmVySUQ6ICdhcHBsaWNhdGlvbi11aScsXHJcbiAgaGl0VG9sZXJhbmNlOiAxMCxcclxuICBtaW5Qb2x5Z29uUG9pbnRzOiAzLFxyXG4gIGRvdWJsZUNsaWNrTWF4RGVsYXk6IDUwMCxcclxuICBkaXNwbGF5UGF0aEdob3N0V2hlbkRyYWdnaW5nOiBmYWxzZSxcclxuICBlcHNpbG9uOiAwLjEsXHJcbiAgbGluZURldmlhdGlvbkFsbG93YW5jZUluRGVncmVlczogMjAsXHJcbiAgY2FudmFzRm9udDogJzMwcHQgc2VyaWYnLFxyXG4gIGxpbmVDb25kaXRpb25MYWJlbE9mZnNldDogbmV3IFBvaW50KDUsIDApLFxyXG4gIHJlbW92ZUNvbmRpdGlvbnNXaGVuSW5zZXJ0aW5nUG9pbnRzOiB0cnVlLFxyXG4gIHByZXNldEJhY2tncm91bmRUZXh0dXJlczogW1xyXG4gICAgJ2ltYWdlcy9iYWNrZ3JvdW5kcy9GdW5ueS1DYXQtRmFjZS5qcGcnLFxyXG4gICAgJ2ltYWdlcy9iYWNrZ3JvdW5kcy9ocWRlZmF1bHQuanBnJ1xyXG4gIF0sXHJcbiAgcHJlc2V0SGVpZ2h0TWFwczogWydpbWFnZXMvaGVpZ2h0LW1hcHMvYnJpY2tfaGVpZ2h0bWFwLnBuZyddLFxyXG4gIHByZXNldE5vcm1hbE1hcHM6IFsnaW1hZ2VzL25vcm1hbC1tYXBzL2JyaWNrX25vcm1hbG1hcC5wbmcnLCAnaW1hZ2VzL25vcm1hbC1tYXBzL25vcm1hbF9tYXAuanBnJ10sXHJcbiAgcHJlc2V0TGlnaHRDb2xvcjogQ09MT1JTLldISVRFLFxyXG4gIGNpcmNsaW5nTGlnaHQ6IHtcclxuICAgIGxhcFRpbWU6IDEwICogMTAwMCxcclxuICAgIGludGVydmFsOiA1MCxcclxuICAgIGhlaWdodDogNTAsXHJcbiAgICBkaXN0YW5jZTogNTBcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBjb25maWd1cmF0aW9uIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbmZpZ3VyYXRpb24udHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQgPSBudWxsO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBSZW5kZXJFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdSZW5kZXJFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9SZW5kZXJFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTeW5jQ29tcG9uZW50c0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkID0gbnVsbDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gU3luY0NvbXBvbmVudHNFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdTeW5jQ29tcG9uZW50c0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQudHMiLCJ0eXBlIE1vdmVDYWxsYmFjayA9ICgpID0+IHZvaWQ7XHJcblxyXG5jb25zdCBFUFNJTE9OID0gMC4xO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuICBwdWJsaWMgbW92ZUNhbGxiYWNrOiBNb3ZlQ2FsbGJhY2sgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3k6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5feTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0geDtcclxuICAgIHRoaXMuX3kgPSB5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhZGQocDE6IFBvaW50LCBwMjogUG9pbnQpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHAxLnggKyBwMi54LCBwMS55ICsgcDIueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHN1YnRyYWN0KHAxOiBQb2ludCwgcDI6IFBvaW50KTogUG9pbnQge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludChwMS54IC0gcDIueCwgcDEueSAtIHAyLnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXREaXN0YW5jZUJldHdlZW4ocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChQb2ludC5nZXREaXN0YW5jZUJldHdlZW5TcXVhcmVkKHAxLCBwMikpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXREaXN0YW5jZUJldHdlZW5TcXVhcmVkKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnBvdyhwMS54IC0gcDIueCwgMikgKyBNYXRoLnBvdyhwMS55IC0gcDIueSwgMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEFuZ2xlKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIGxldCBhbmdsZSA9IChNYXRoLmF0YW4yKHAyLnkgLSBwMS55LCBwMi54IC0gcDEueCkpICogMTgwIC8gTWF0aC5QSTtcclxuXHJcbiAgICBpZiAoYW5nbGUgPCAwKSB7XHJcbiAgICAgIGFuZ2xlICs9IDM2MDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYW5nbGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRvdFByb2R1Y3QocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICAgIHJldHVybiBwMS54ICogcDIueCArIHAxLnkgKiBwMi55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcm9zc1Byb2R1Y3QocDE6IFBvaW50LCBwMjogUG9pbnQpIHtcclxuICAgIHJldHVybiBwMS54ICogcDIueSAtIHAxLnkgKiBwMi54O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBlcHNpbG9uRXF1YWxzKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgICByZXR1cm4gUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuKHAxLCBwMikgPD0gRVBTSUxPTjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3ZlVG8ocG9pbnQ6IFBvaW50KTogdm9pZDtcclxuICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcclxuICBwdWJsaWMgbW92ZVRvKHBvaW50T3JYOiBQb2ludCB8IG51bWJlciwgeT86IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiBwb2ludE9yWCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgaWYgKHkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigneCBpcyBkZWZpbmVkLCBidXQgeSBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5tb3ZlVG9Db29yZGluYXRlcyhwb2ludE9yWCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubW92ZVRvUG9pbnQocG9pbnRPclgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVxdWFscyhwb2ludDogUG9pbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnggPT09IHBvaW50LnggJiYgdGhpcy55ID09PSBwb2ludC55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERpc3RhbmNlVG8ocG9pbnQ6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBQb2ludC5nZXREaXN0YW5jZUJldHdlZW4odGhpcywgcG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERpc3RhbmNlU3F1YXJlZFRvKHBvaW50OiBQb2ludCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuU3F1YXJlZCh0aGlzLCBwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmbG9vcigpIHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoTWF0aC5mbG9vcih0aGlzLngpLCBNYXRoLmZsb29yKHRoaXMueSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlVG9Qb2ludChwb2ludDogUG9pbnQpIHtcclxuICAgIHJldHVybiB0aGlzLm1vdmVUb0Nvb3JkaW5hdGVzKHBvaW50LngsIHBvaW50LnkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlVG9Db29yZGluYXRlcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5feCA9IHg7XHJcbiAgICB0aGlzLl95ID0geTtcclxuXHJcbiAgICBpZiAodGhpcy5tb3ZlQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5tb3ZlQ2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL1BvaW50LnRzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHI6IG51bWJlcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgZzogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBiOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IGZpbGxTdHlsZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnIgPSByO1xyXG4gICAgdGhpcy5nID0gZztcclxuICAgIHRoaXMuYiA9IGI7XHJcblxyXG4gICAgdGhpcy5maWxsU3R5bGUgPSBgcmdiKCR7dGhpcy5yfSwgJHt0aGlzLmd9LCAke3RoaXMuYn0pYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUhleFN0cmluZyhoZXhTdHJpbmc6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVkUGFydCA9IGhleFN0cmluZy5zbGljZSgxLCAzKTtcclxuICAgIGNvbnN0IGdyZWVuUGFydCA9IGhleFN0cmluZy5zbGljZSgzLCA1KTtcclxuICAgIGNvbnN0IGJsdWVQYXJ0ID0gaGV4U3RyaW5nLnNsaWNlKDUsIDcpO1xyXG5cclxuICAgIGNvbnN0IHJlZCA9IHBhcnNlSW50KHJlZFBhcnQsIDE2KTtcclxuICAgIGNvbnN0IGdyZWVuID0gcGFyc2VJbnQoZ3JlZW5QYXJ0LCAxNik7XHJcbiAgICBjb25zdCBibHVlID0gcGFyc2VJbnQoYmx1ZVBhcnQsIDE2KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IENvbG9yKHJlZCwgZ3JlZW4sIGJsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW50ZWdlclRvUGFkZGVkSGV4KGludGVnZXI6IG51bWJlcikge1xyXG4gICAgY29uc3QgaGV4ID0gaW50ZWdlci50b1N0cmluZygxNik7XHJcblxyXG4gICAgaWYgKGhleC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIGAgJHtoZXh9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBoZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9IZXhTdHJpbmcoKSB7XHJcbiAgICBjb25zdCByZWRQYXJ0ID0gQ29sb3IuaW50ZWdlclRvUGFkZGVkSGV4KHRoaXMucik7XHJcbiAgICBjb25zdCBncmVlblBhcnQgPSBDb2xvci5pbnRlZ2VyVG9QYWRkZWRIZXgodGhpcy5nKTtcclxuICAgIGNvbnN0IGJsdWVQYXJ0ID0gQ29sb3IuaW50ZWdlclRvUGFkZGVkSGV4KHRoaXMuYik7XHJcblxyXG4gICAgcmV0dXJuIGAjJHtyZWRQYXJ0ICsgYmx1ZVBhcnQgKyBncmVlblBhcnR9YDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0NvbG9yLnRzIiwiLy8gRGljdGlvbmFyeVxyXG5jb25zdCBMRVggPSB7XHJcbiAgUE9MWUdPTl9MQVlFUl9OQU1FOiAnUG9seWdvbkxheWVyJyxcclxuICBQQVRIX0xBWUVSX05BTUU6ICdQYXRoTGF5ZXInLFxyXG4gIFBBVEhfR0hPU1RfTEFZRVJfTkFNRTogJ1BhdGhHaG9zdExheWVyJyxcclxuICBORVdfQ09ORElUSU9OX0VWRU5UX05BTUU6ICduZXctY29uZGl0aW9uJyxcclxuICBSRU1PVkVfQ09ORElUSU9OX0VWRU5UX05BTUU6ICdyZW1vdmUtY29uZGl0aW9uJyxcclxuICBLRVlfQ09ERToge1xyXG4gICAgRVNDQVBFOiAyN1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgTEVYXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL0xFWC50cyIsImltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29tbW9uL0NvbG9yJztcclxuaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnY29tbW9uL0NPTE9SUyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGluZVByb3BlcnRpZXMge1xyXG4gIHB1YmxpYyBjb2xvcjogQ29sb3I7XHJcbiAgcHVibGljIHRoaWNrbmVzczogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2xvcjogQ29sb3IsIHRoaWNrbmVzczogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLnRoaWNrbmVzcyA9IHRoaWNrbmVzcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVmYXVsdCgpOiBMaW5lUHJvcGVydGllcyB7XHJcbiAgICByZXR1cm4gbmV3IExpbmVQcm9wZXJ0aWVzKENPTE9SUy5CTEFDSywgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKTogTGluZVByb3BlcnRpZXMge1xyXG4gICAgcmV0dXJuIG5ldyBMaW5lUHJvcGVydGllcyh0aGlzLmNvbG9yLCB0aGlzLnRoaWNrbmVzcyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9MaW5lUHJvcGVydGllcy50cyIsImltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29tbW9uL0NvbG9yJztcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcbiAgQkxBQ0s6IG5ldyBDb2xvcigwLCAwLCAwKSxcclxuICBSRUQ6IG5ldyBDb2xvcigyNTUsIDAsIDApLFxyXG4gIEdSRUVOOiBuZXcgQ29sb3IoMCwgMjU1LCAwKSxcclxuICBCTFVFOiBuZXcgQ29sb3IoMCwgMCwgMjU1KSxcclxuICBXSElURTogbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUpXHJcbn07XHJcblxyXG5PYmplY3QuZnJlZXplKENPTE9SUyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9DT0xPUlMudHMiLCJleHBvcnQgZW51bSBMaWdodFZlcnNvclR5cGUge1xyXG4gIENvbnN0YW50LFxyXG4gIENpcmNsaW5nXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0xpZ2h0VmVyc29yVHlwZS50cyIsImltcG9ydCB7IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50JztcclxuaW1wb3J0IHsgTmV3SGVpZ2h0TWFwRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdIZWlnaHRNYXBFdmVudCc7XHJcbmltcG9ydCB7IE5ld0xpZ2h0Q29sb3JFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0Q29sb3JFdmVudCc7XHJcbmltcG9ydCB7IE5ld0xpZ2h0VmVyc29yRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFZlcnNvckV2ZW50JztcclxuaW1wb3J0IHsgTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFZlcnNvclR5cGVFdmVudCc7XHJcbmltcG9ydCB7IE5ld05vcm1hbE1hcEV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3Tm9ybWFsTWFwRXZlbnQnO1xyXG5cclxuZXhwb3J0IHtcclxuICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEV2ZW50LFxyXG4gIE5ld0xpZ2h0Q29sb3JFdmVudCxcclxuICBOZXdMaWdodFZlcnNvckV2ZW50LFxyXG4gIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LFxyXG4gIE5ld05vcm1hbE1hcEV2ZW50XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL2luZGV4LnRzIiwiaW1wb3J0IHsgSGl0VGVzdFJlc3VsdCB9IGZyb20gJ2NvbW1vbi9IaXRUZXN0UmVzdWx0JztcclxuaW1wb3J0IHsgUGF0aCwgU2VyaWFsaXphYmxlUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJ1JlbmRlcmVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXphYmxlTGF5ZXIge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwYXRoczogU2VyaWFsaXphYmxlUGF0aFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5ZXIge1xyXG4gIHB1YmxpYyBwYXRoczogUGF0aFtdID0gW107XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcihyZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHRoaXMucGF0aHMuZm9yRWFjaChwYXRoID0+IHJlbmRlcmVyLmRyYXdQYXRoKHBhdGgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVQYXRoKHBhdGg6IFBhdGgpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXRocy5pbmRleE9mKHBhdGgpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXRocy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpdFRlc3QocG9pbnQ6IFBvaW50KTogSGl0VGVzdFJlc3VsdCB8IG51bGwge1xyXG4gICAgZm9yIChjb25zdCBwYXRoIG9mIHRoaXMucGF0aHMpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gcGF0aC5oaXRUZXN0KHBvaW50KTtcclxuICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVzdWx0LmxheWVyID0gdGhpcztcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9TZXJpYWxpemFibGVPYmplY3QoKTogU2VyaWFsaXphYmxlTGF5ZXIge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICBwYXRoczogdGhpcy5wYXRocy5tYXAocGF0aCA9PiBwYXRoLnRvU2VyaWFsaXphYmxlT2JqZWN0KCkpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZyb21TZXJpYWxpemFibGVPYmplY3Qoc2VyaWFsaXphYmxlTGF5ZXI6IFNlcmlhbGl6YWJsZUxheWVyKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBzZXJpYWxpemFibGVMYXllci5uYW1lO1xyXG5cclxuICAgIHRoaXMucGF0aHMuc3BsaWNlKDAsIHRoaXMucGF0aHMubGVuZ3RoKTtcclxuXHJcbiAgICBzZXJpYWxpemFibGVMYXllci5wYXRocy5mb3JFYWNoKHNlcmlhbGl6YWJsZVBhdGggPT4ge1xyXG4gICAgICB0aGlzLnBhdGhzLnB1c2goUGF0aC5mcm9tU2VyaWFsaXphYmxlUGF0aChzZXJpYWxpemFibGVQYXRoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0xheWVyLnRzIiwiaW1wb3J0IHsgSGl0VGVzdFJlc3VsdCB9IGZyb20gJ2NvbW1vbi9IaXRUZXN0UmVzdWx0JztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgTGluZVByb3BlcnRpZXMgfSBmcm9tICdjb21tb24vTGluZVByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXphYmxlUGF0aCB7XHJcbiAgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzO1xyXG4gIGNsb3NlZDogYm9vbGVhbjtcclxuICB2ZXJ0aWNlczoge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gIH1bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGgge1xyXG4gIHB1YmxpYyBjbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzO1xyXG4gIHByb3RlY3RlZCByZWFkb25seSB2ZXJ0aWNlczogUG9pbnRbXTtcclxuXHJcbiAgY29uc3RydWN0b3IodmVydGljZXM6IFBvaW50W10sIGxpbmVQcm9wZXJ0aWVzOiBMaW5lUHJvcGVydGllcykge1xyXG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xyXG4gICAgdGhpcy5saW5lUHJvcGVydGllcyA9IGxpbmVQcm9wZXJ0aWVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tU2VyaWFsaXphYmxlUGF0aChzZXJpYWxpemFibGVQYXRoOiBTZXJpYWxpemFibGVQYXRoKSB7XHJcbiAgICBjb25zdCByZWFsUG9pbnRzID0gc2VyaWFsaXphYmxlUGF0aC52ZXJ0aWNlcy5tYXAodmVydGV4ID0+IG5ldyBQb2ludCh2ZXJ0ZXgueCwgdmVydGV4LnkpKTtcclxuICAgIGNvbnN0IHJlYWxMaW5lUHJvcGVydGllcyA9IG5ldyBMaW5lUHJvcGVydGllcyhcclxuICAgICAgc2VyaWFsaXphYmxlUGF0aC5saW5lUHJvcGVydGllcy5jb2xvcixcclxuICAgICAgc2VyaWFsaXphYmxlUGF0aC5saW5lUHJvcGVydGllcy50aGlja25lc3NcclxuICAgICk7XHJcbiAgICBjb25zdCBwYXRoID0gbmV3IFBhdGgocmVhbFBvaW50cywgcmVhbExpbmVQcm9wZXJ0aWVzKTtcclxuICAgIHBhdGguY2xvc2VkID0gc2VyaWFsaXphYmxlUGF0aC5jbG9zZWQ7XHJcblxyXG4gICAgcmV0dXJuIHBhdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgKmdldFZlcnRpY2VzSXRlcmF0b3IoKSB7XHJcbiAgICBjb25zdCB2ZXJ0aWNlc0NvdW50ID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzQ291bnQ7IGkgKz0gMSkge1xyXG4gICAgICB5aWVsZCB0aGlzLnZlcnRpY2VzW2ldO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNsb3NlZCAmJiB2ZXJ0aWNlc0NvdW50ID4gMCkge1xyXG4gICAgICB5aWVsZCB0aGlzLnZlcnRpY2VzWzBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljICpnZXRMaW5lSXRlcmF0b3IoKSB7XHJcbiAgICBsZXQgcHJldmlvdXNQb2ludDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHBvaW50IG9mIHRoaXMuZ2V0VmVydGljZXNJdGVyYXRvcigpKSB7XHJcbiAgICAgIGlmICghcHJldmlvdXNQb2ludCkge1xyXG4gICAgICAgIHByZXZpb3VzUG9pbnQgPSBwb2ludDtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgeWllbGQgbmV3IExpbmUocHJldmlvdXNQb2ludCwgcG9pbnQpO1xyXG4gICAgICBwcmV2aW91c1BvaW50ID0gcG9pbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U3RhcnRpbmdQb2ludCgpIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzWzBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFZlcnRpY2VzQ291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGluZVByb3BlcnRpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saW5lUHJvcGVydGllcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaXRUZXN0KHBvaW50OiBQb2ludCk6IEhpdFRlc3RSZXN1bHQgfCBudWxsIHtcclxuICAgIGZvciAoY29uc3QgbGluZSBvZiB0aGlzLmdldExpbmVJdGVyYXRvcigpKSB7XHJcbiAgICAgIGlmIChsaW5lLmRpc3RhbmNlVG9Qb2ludChwb2ludCkgPD0gY29uZmlndXJhdGlvbi5oaXRUb2xlcmFuY2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEhpdFRlc3RSZXN1bHQobGluZSwgdGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRWZXJ0ZXgoaW5kZXg6IG51bWJlcik6IFBvaW50IHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzW2luZGV4XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRWZXJ0aWNlcygpOiBQb2ludFtdIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFZlcnRleChwb2ludDogUG9pbnQpIHtcclxuICAgIHRoaXMudmVydGljZXMucHVzaChwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlVmVydGV4KHBvaW50OiBQb2ludCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRQb2ludEluZGV4KHBvaW50KTtcclxuXHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMudmVydGljZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnNlcnRWZXJ0ZXgocG9pbnQ6IFBvaW50LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnZlcnRpY2VzLnNwbGljZShpbmRleCwgMCwgcG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCk6IFBhdGgge1xyXG4gICAgY29uc3QgdmVydGljZXMgPSBbLi4udGhpcy5nZXRWZXJ0aWNlcygpLm1hcChwb2ludCA9PiBwb2ludC5jbG9uZSgpKV07XHJcbiAgICBjb25zdCBsaW5lUHJvcGVydGllcyA9IHRoaXMubGluZVByb3BlcnRpZXMuY2xvbmUoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBhdGgodmVydGljZXMsIGxpbmVQcm9wZXJ0aWVzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaW5kUG9pbnRJbmRleChwb2ludDogUG9pbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzLmluZGV4T2YocG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEJvdW5kaW5nQm94KCkge1xyXG4gICAgbGV0IG1pblggPSBJbmZpbml0eTtcclxuICAgIGxldCBtYXhYID0gMDtcclxuICAgIGxldCBtaW5ZID0gSW5maW5pdHk7XHJcbiAgICBsZXQgbWF4WSA9IDA7XHJcblxyXG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKHBvaW50ID0+IHtcclxuICAgICAgaWYgKHBvaW50LnggPCBtaW5YKSB7XHJcbiAgICAgICAgbWluWCA9IHBvaW50Lng7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvaW50LnggPiBtYXhYKSB7XHJcbiAgICAgICAgbWF4WCA9IHBvaW50Lng7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvaW50LnkgPCBtaW5ZKSB7XHJcbiAgICAgICAgbWluWSA9IHBvaW50Lnk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBvaW50LnkgPiBtYXhZKSB7XHJcbiAgICAgICAgbWF4WSA9IHBvaW50Lnk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1pblgsXHJcbiAgICAgIG1heFgsXHJcbiAgICAgIG1pblksXHJcbiAgICAgIG1heFlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNQb2ludEluQm91bmRpbmdCb3gocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBjb25zdCBib3VuZGluZ0JveCA9IHRoaXMuZ2V0Qm91bmRpbmdCb3goKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwb2ludC54ID49IGJvdW5kaW5nQm94Lm1pblggJiZcclxuICAgICAgcG9pbnQueCA8PSBib3VuZGluZ0JveC5tYXhYICYmXHJcbiAgICAgIHBvaW50LnkgPj0gYm91bmRpbmdCb3gubWluWSAmJlxyXG4gICAgICBwb2ludC55IDw9IGJvdW5kaW5nQm94Lm1heFlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9TZXJpYWxpemFibGVPYmplY3QoKTogU2VyaWFsaXphYmxlUGF0aCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsaW5lUHJvcGVydGllczogdGhpcy5saW5lUHJvcGVydGllcy5jbG9uZSgpLFxyXG4gICAgICBjbG9zZWQ6IHRoaXMuY2xvc2VkLFxyXG4gICAgICB2ZXJ0aWNlczogdGhpcy52ZXJ0aWNlcy5tYXAodmVydGV4ID0+ICh7XHJcbiAgICAgICAgeDogdmVydGV4LngsXHJcbiAgICAgICAgeTogdmVydGV4LnlcclxuICAgICAgfSkpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5leHRQb2ludEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiAoaW5kZXggKyAxKSAlIHRoaXMuZ2V0VmVydGljZXNDb3VudCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE5leHRQb2ludChwb2ludDogUG9pbnQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy52ZXJ0aWNlcy5pbmRleE9mKHBvaW50KTtcclxuICAgIGNvbnN0IG5leHRQb2ludEluZGV4ID0gdGhpcy5nZXROZXh0UG9pbnRJbmRleChpbmRleCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VmVydGV4KG5leHRQb2ludEluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQcmV2aW91c1BvaW50SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgbGV0IHByZXZpb3VzUG9pbnRJbmRleCA9IGluZGV4IC0gMTtcclxuICAgIGlmIChwcmV2aW91c1BvaW50SW5kZXggPCAwKSB7XHJcbiAgICAgIHByZXZpb3VzUG9pbnRJbmRleCA9IHRoaXMuZ2V0VmVydGljZXNDb3VudCgpIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNQb2ludEluZGV4O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFByZXZpb3VzUG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudmVydGljZXMuaW5kZXhPZihwb2ludCk7XHJcbiAgICBjb25zdCBwcmV2aW91c1BvaW50SW5kZXggPSB0aGlzLmdldFByZXZpb3VzUG9pbnRJbmRleChpbmRleCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VmVydGV4KHByZXZpb3VzUG9pbnRJbmRleCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW92ZVRvKHBhdGg6IFBhdGgpIHtcclxuICAgIGlmICh0aGlzLmdldFZlcnRpY2VzQ291bnQoKSAhPT0gcGF0aC5nZXRWZXJ0aWNlc0NvdW50KCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgbnVtYmVyIG9mIHZlcnRpY2VzIGRvZXMgbm90IG1hdGNoJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2xvc2VkICE9PSBwYXRoLmNsb3NlZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXRoJ3MgY2xvc2VkIHN0YXRlIGRvZXMgbm90IG1hdGNoXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiBwb2ludC5tb3ZlVG8ocGF0aC5nZXRWZXJ0ZXgoaW5kZXgpKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0V2VpZ2h0ZWRDZW50ZXJQb2ludCgpIHtcclxuICAgIGxldCBjZW50ZXJYID0gMDtcclxuICAgIGxldCBjZW50ZXJZID0gMDtcclxuXHJcbiAgICB0aGlzLmdldFZlcnRpY2VzKCkuZm9yRWFjaChwb2ludCA9PiB7XHJcbiAgICAgIGNlbnRlclggKz0gcG9pbnQueDtcclxuICAgICAgY2VudGVyWSArPSBwb2ludC55O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2VudGVyWCAvPSB0aGlzLmdldFZlcnRpY2VzQ291bnQoKTtcclxuICAgIGNlbnRlclkgLz0gdGhpcy5nZXRWZXJ0aWNlc0NvdW50KCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb2ludChjZW50ZXJYLCBjZW50ZXJZKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDZW50ZXJQb2ludCgpIHtcclxuICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gdGhpcy5nZXRCb3VuZGluZ0JveCgpO1xyXG5cclxuICAgIGNvbnN0IGNlbnRlclggPSAoYm91bmRpbmdCb3gubWF4WCArIGJvdW5kaW5nQm94Lm1pblgpIC8gMjtcclxuICAgIGNvbnN0IGNlbnRlclkgPSAoYm91bmRpbmdCb3gubWF4WSArIGJvdW5kaW5nQm94Lm1pblkpIC8gMjtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBvaW50KGNlbnRlclgsIGNlbnRlclkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vUGF0aC50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5lIHtcclxuICBwdWJsaWMgcDE6IFBvaW50O1xyXG4gIHB1YmxpYyBwMjogUG9pbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHAxOiBQb2ludCwgcDI6IFBvaW50KSB7XHJcbiAgICBpZiAocDEuZXF1YWxzKHAyKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjcmVhdGUgbGluZSBiZXR3ZWVuIHBvaW50cyBhdCB0aGUgc2FtZSBjb29yZGluYXRlcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucDEgPSBwMTtcclxuICAgIHRoaXMucDIgPSBwMjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXN0YW5jZVRvUG9pbnQocDogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgY29uc3QgcG9pbnRQcm9qZWN0aW9uID0gdGhpcy5wcm9qZWN0UG9pbnQocCk7XHJcblxyXG4gICAgcmV0dXJuIFBvaW50LmdldERpc3RhbmNlQmV0d2VlbihwLCBwb2ludFByb2plY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHByb2plY3RQb2ludChwOiBQb2ludCkge1xyXG4gICAgY29uc3QgcDEgPSB0aGlzLnAxO1xyXG4gICAgY29uc3QgcDIgPSB0aGlzLnAyO1xyXG5cclxuICAgIGxldCB0ID1cclxuICAgICAgKChwLnggLSBwMS54KSAqIChwMi54IC0gcDEueCkgKyAocC55IC0gcDEueSkgKiAocDIueSAtIHAxLnkpKSAvXHJcbiAgICAgIFBvaW50LmdldERpc3RhbmNlQmV0d2VlblNxdWFyZWQocDEsIHAyKTtcclxuICAgIHQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0KSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb2ludChwMS54ICsgdCAqIChwMi54IC0gcDEueCksIHAxLnkgKyB0ICogKHAyLnkgLSBwMS55KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXF1YWxzKGxpbmU6IExpbmUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICh0aGlzLnAxLmVxdWFscyhsaW5lLnAxKSAmJiB0aGlzLnAyLmVxdWFscyhsaW5lLnAyKSkgfHxcclxuICAgICAgKHRoaXMucDEuZXF1YWxzKGxpbmUucDIpICYmIHRoaXMucDIuZXF1YWxzKGxpbmUucDEpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRNaWRkbGVQb2ludCgpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KCh0aGlzLnAxLnggKyB0aGlzLnAyLngpIC8gMiwgKHRoaXMucDEueSArIHRoaXMucDIueSkgLyAyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuKHRoaXMucDEsIHRoaXMucDIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERpcmVjdGlvbihwOiBQb2ludCkge1xyXG4gICAgY29uc3QgZGlyZWN0aW9uID0gUG9pbnQuY3Jvc3NQcm9kdWN0KFBvaW50LnN1YnRyYWN0KHRoaXMucDIsIHRoaXMucDEpLCBQb2ludC5zdWJ0cmFjdChwLCB0aGlzLnAxKSk7XHJcbiAgICBpZiAoTWF0aC5hYnMoZGlyZWN0aW9uKSA8IDAuMDAwMSkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID4gMCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0xpbmUudHMiLCJleHBvcnQgZW51bSBGaWxsV29ya2VyTWVzc2FnZVR5cGUge1xyXG4gIEZpbGxEYXRhLFxyXG4gIFN0YXJ0RmlsbCxcclxuICBGaWxsU3RyaXBzLFxyXG4gIEVuZEZpbGwsXHJcbiAgTGlnaHRWZXJzb3JcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9wb2x5Z29uLWZpbGxlci9GaWxsV29ya2VyTWVzc2FnZVR5cGUudHMiLCJpbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBQYXRoIHtcclxuICBjb25zdHJ1Y3RvcihwYXRoOiBQYXRoKTtcclxuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlczogUG9pbnRbXSwgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzKTtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aE9yVmVydGljZXM6IFBhdGggfCBQb2ludFtdLCBsaW5lUHJvcGVydGllcz86IExpbmVQcm9wZXJ0aWVzKSB7XHJcbiAgICBsZXQgdmVydGljZXM6IFBvaW50W107XHJcblxyXG4gICAgaWYgKHBhdGhPclZlcnRpY2VzIGluc3RhbmNlb2YgUGF0aCkge1xyXG4gICAgICBjb25zdCBwYXRoID0gcGF0aE9yVmVydGljZXM7XHJcbiAgICAgIHZlcnRpY2VzID0gcGF0aC5nZXRWZXJ0aWNlcygpO1xyXG4gICAgICBsaW5lUHJvcGVydGllcyA9IHBhdGgubGluZVByb3BlcnRpZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2ZXJ0aWNlcyA9IHBhdGhPclZlcnRpY2VzO1xyXG4gICAgICBsaW5lUHJvcGVydGllcyA9IDxMaW5lUHJvcGVydGllcz5saW5lUHJvcGVydGllcztcclxuICAgIH1cclxuXHJcbiAgICBQb2x5Z29uLmVuc3VyZVZlcnRpY2VzTGVuZ3RoKHZlcnRpY2VzKTtcclxuICAgIHN1cGVyKHZlcnRpY2VzLCBsaW5lUHJvcGVydGllcyk7XHJcbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBlbnN1cmVWZXJ0aWNlc0xlbmd0aCh2ZXJ0aWNlczogUG9pbnRbXSkge1xyXG4gICAgaWYgKHZlcnRpY2VzLmxlbmd0aCA+PSBjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihgUG9seWdvbiBtdXN0IGhhdmUgYXQgbGVhc3QgJHtjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHN9IHZlcnRpY2VzYCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKTogUG9seWdvbiB7XHJcbiAgICByZXR1cm4gbmV3IFBvbHlnb24oc3VwZXIuY2xvbmUoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlVmVydGV4KHBvaW50OiBQb2ludCkge1xyXG4gICAgaWYgKHRoaXMuZ2V0VmVydGljZXNDb3VudCgpID09PSBjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlIHZlcnRleCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnJlbW92ZVZlcnRleChwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNDb252ZXgoKSB7XHJcbiAgICBsZXQgbGFzdExpbmU6IExpbmUgfCBudWxsID0gbnVsbDtcclxuICAgIGxldCBsYXN0RGlyZWN0aW9uOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgdGhpcy5nZXRMaW5lSXRlcmF0b3IoKSkge1xyXG4gICAgICBpZiAoIWxhc3RMaW5lKSB7XHJcbiAgICAgICAgbGFzdExpbmUgPSBsaW5lO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50RGlyZWN0aW9uID0gbGFzdExpbmUuZ2V0RGlyZWN0aW9uKGxpbmUucDIpO1xyXG4gICAgICBsYXN0TGluZSA9IGxpbmU7XHJcblxyXG4gICAgICBpZiAobGFzdERpcmVjdGlvbiA9PT0gbnVsbCAmJiBjdXJyZW50RGlyZWN0aW9uICE9PSAwKSB7XHJcbiAgICAgICAgbGFzdERpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb247XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSAwKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uICE9PSBsYXN0RGlyZWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9Qb2x5Z29uLnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5cclxuY29uc3QgTUFYX0NPTE9SID0gMjU1O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjMge1xyXG4gIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgcHVibGljIHk6IG51bWJlcjtcclxuICBwdWJsaWMgejogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMueiA9IHo7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGZyb21Db2xvcihjb2xvcjogQ29sb3IpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyhjb2xvci5yIC8gTUFYX0NPTE9SLCBjb2xvci5nIC8gTUFYX0NPTE9SLCBjb2xvci5iIC8gTUFYX0NPTE9SKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYWRkKHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYxLnggKyB2Mi54LCB2MS55ICsgdjIueSwgdjEueiArIHYyLnopO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzdWJ0cmFjdCh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBWZWN0b3IzIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh2MS54IC0gdjIueCwgdjEueSAtIHYyLnksIHYxLnogLSB2Mi56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3Jvc3NQcm9kdWN0KHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IFZlY3RvcjMge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKFxyXG4gICAgICB2MS55ICogdjIueiAtIHYxLnogKiB2Mi55LFxyXG4gICAgICB2MS56ICogdjIueCAtIHYxLnggKiB2Mi56LFxyXG4gICAgICB2MS54ICogdjIueSAtIHYxLnkgKiB2Mi54XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkb3RQcm9kdWN0KHYxOiBWZWN0b3IzLCB2MjogVmVjdG9yMyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdjEueCAqIHYyLnggKyB2MS55ICogdjIueSArIHYxLnogKiB2Mi56O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjb3NpbmVBbmdsZSh2MTogVmVjdG9yMywgdjI6IFZlY3RvcjMpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZG90UHJvZHVjdCA9IFZlY3RvcjMuZG90UHJvZHVjdCh2MSwgdjIpO1xyXG4gICAgY29uc3QgbGVuZ3RoMSA9IHYxLmdldExlbmd0aCgpO1xyXG4gICAgY29uc3QgbGVuZ3RoMiA9IHYyLmdldExlbmd0aCgpO1xyXG5cclxuICAgIHJldHVybiBkb3RQcm9kdWN0IC8gKGxlbmd0aDEgKiBsZW5ndGgyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b0NvbG9yKCk6IENvbG9yIHtcclxuICAgIGNvbnN0IHIgPSBNYXRoLmZsb29yKHRoaXMueCAqIE1BWF9DT0xPUik7XHJcbiAgICBjb25zdCBnID0gTWF0aC5mbG9vcih0aGlzLnkgKiBNQVhfQ09MT1IpO1xyXG4gICAgY29uc3QgYiA9IE1hdGguZmxvb3IodGhpcy56ICogTUFYX0NPTE9SKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IENvbG9yKHIsIGcsIGIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5vcm1hbGl6ZSgpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IzKHRoaXMueCAvIGxlbmd0aCwgdGhpcy55IC8gbGVuZ3RoLCB0aGlzLnogLyBsZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlbmd0aCgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICoqIDIgKyB0aGlzLnkgKiogMiArIHRoaXMueiAqKiAyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMyh0aGlzLngsIHRoaXMueSwgdGhpcy56KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbnZlcnQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoLXRoaXMueCwgLXRoaXMueSwgLXRoaXMueik7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9WZWN0b3IzLnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5pbXBvcnQgeyBQYXRoUG9pbnRDb21wb25lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRDbGlja0V2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBQb2ludENsaWNrRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBQYXRoUG9pbnRDb21wb25lbnQ7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aFBvaW50Q29tcG9uZW50OiBQYXRoUG9pbnRDb21wb25lbnQpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IHBhdGhQb2ludENvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnUG9pbnRDbGlja0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL1BvaW50Q2xpY2tFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJGaW5pc2hlZEV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkID0gbnVsbDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gUmVuZGVyRmluaXNoZWRFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIFJlbmRlckZpbmlzaGVkRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL1JlbmRlckZpbmlzaGVkRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludENvbXBvbmVudCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvUGF0aFBvaW50Q29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaW5pc2hQb2ludERyYWdFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogUGF0aFBvaW50Q29tcG9uZW50O1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBGaW5pc2hQb2ludERyYWdFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aFBvaW50Q29tcG9uZW50OiBQYXRoUG9pbnRDb21wb25lbnQpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IHBhdGhQb2ludENvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnRmluaXNoUG9pbnREcmFnRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9GaW5pc2hQb2ludERyYWdFdmVudC50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5pbXBvcnQgeyBQYXRoUG9pbnRDb21wb25lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnREcmFnRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IHtcclxuICAgIGNvbXBvbmVudDogUGF0aFBvaW50Q29tcG9uZW50LFxyXG4gICAgbmV3UG9zaXRpb246IFBvaW50XHJcbiAgfTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gUG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhdGhQb2ludENvbXBvbmVudDogUGF0aFBvaW50Q29tcG9uZW50LCBuZXdQb3NpdGlvbjogUG9pbnQpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IHtcclxuICAgICAgY29tcG9uZW50OiBwYXRoUG9pbnRDb21wb25lbnQsXHJcbiAgICAgIG5ld1Bvc2l0aW9uXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdQb2ludERyYWdFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL1BvaW50RHJhZ0V2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5pbXBvcnQgeyBQYXRoUG9pbnRDb21wb25lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhcnRQb2ludERyYWdFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogUGF0aFBvaW50Q29tcG9uZW50O1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBTdGFydFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoUG9pbnRDb21wb25lbnQ6IFBhdGhQb2ludENvbXBvbmVudCkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gcGF0aFBvaW50Q29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdTdGFydFBvaW50RHJhZ0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL3BvaW50LWRyYWcvU3RhcnRQb2ludERyYWdFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmludGVyZmFjZSBMaW5lQ2xpY2tFdmVudFBheWxvYWQge1xyXG4gIGxpbmU6IExpbmU7XHJcbiAgcGF0aDogUGF0aDtcclxuICBwb3NpdGlvbjogUG9pbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5lQ2xpY2tFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTGluZUNsaWNrRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBMaW5lQ2xpY2tFdmVudFBheWxvYWQ7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IobGluZTogTGluZSwgcGF0aDogUGF0aCwgcG9zaXRpb246IFBvaW50KSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSB7XHJcbiAgICAgIGxpbmUsXHJcbiAgICAgIHBhdGgsXHJcbiAgICAgIHBvc2l0aW9uXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdMaW5lQ2xpY2tFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9MaW5lQ2xpY2tFdmVudC50cyIsImltcG9ydCAndWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RydWN0aW9uc0RpYWxvZyBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcml2YXRlIG92ZXJsYXk6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGlhbG9nQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIGRpc21pc3NCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5jbGFzc05hbWUgPSAnaW5zdHJ1Y3Rpb25zLWRpYWxvZy13cmFwcGVyJztcclxuXHJcbiAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMub3ZlcmxheS5jbGFzc05hbWUgPSAnaW5zdHJ1Y3Rpb25zLWRpYWxvZ19fb3ZlcmxheSc7XHJcblxyXG4gICAgdGhpcy5kaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuZGlhbG9nQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbnMtZGlhbG9nJztcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdJbnN0cnVjdGlvbnMnO1xyXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ2luc3RydWN0aW9ucy1kaWFsb2dfX3RpdGxlJztcclxuICAgIHRoaXMuZGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICB0aGlzLmRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVVzYWdlTGlzdCgpKTtcclxuXHJcbiAgICB0aGlzLmRpc21pc3NCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuZGlzbWlzc0J1dHRvbi50ZXh0Q29udGVudCA9ICdEaXNtaXNzJztcclxuICAgIHRoaXMuZGlzbWlzc0J1dHRvbi5jbGFzc05hbWUgPSAnaW5zdHJ1Y3Rpb25zLWRpYWxvZ19fZGlzbWlzcy1idXR0b24nO1xyXG5cclxuICAgIHRoaXMuZGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGlzbWlzc0J1dHRvbik7XHJcblxyXG4gICAgdGhpcy5kaXNtaXNzID0gdGhpcy5kaXNtaXNzLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuZGlhbG9nQ29udGFpbmVyKTtcclxuICAgIHRoaXMuZGlzbWlzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGlzbWlzcyk7XHJcbiAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRpc21pc3MpO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbnMtZGlhbG9nX19vdmVybGF5LS1hY3RpdmUnKTtcclxuICAgICAgdGhpcy5kaWFsb2dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5zdHJ1Y3Rpb25zLWRpYWxvZy0tYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5vdmVybGF5KTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5kaWFsb2dDb250YWluZXIpO1xyXG4gICAgdGhpcy5kaXNtaXNzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kaXNtaXNzKTtcclxuICAgIHRoaXMub3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGlzbWlzcyk7XHJcblxyXG4gICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2luc3RydWN0aW9ucy1kaWFsb2dfX292ZXJsYXktLWFjdGl2ZScpO1xyXG4gICAgdGhpcy5kaWFsb2dDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5zdHJ1Y3Rpb25zLWRpYWxvZy0tYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc21pc3MoKSB7XHJcbiAgICB0aGlzLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVVc2FnZUxpc3QoKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgICBjb25zdCB1c2FnZSA9IFtcclxuICAgICAgJ0NsaWNrIG9uIHRoZSBmcmVlIHNwYWNlIGluIHRoZSBjYW52YXMgdG8gc3RhcnQgY3JlYXRpbmcgdmVydGljZXMnLFxyXG4gICAgICAnQ2xpY2sgb24gdGhlIGluaXRpYWwgdmVydGV4IHRvIGNsb3NlIHRoZSBwYXRoIGludG8gYSBwb2x5Z29uJyxcclxuICAgICAgJ0FsdGVybmF0aXZlbHksIHlvdSBtYXkgcHJlc3MgRXNjYXBlIHRvIGNhbmNlbCBhZGRpbmcgYSBuZXcgcGF0aCcsXHJcbiAgICAgICdDbGljayBhbmQgZHJhZyB0aGUgdmVydGV4IHRvIG1vdmUgaXQnLFxyXG4gICAgICAnRG91YmxlIGNsaWNrIG9uIGFuIGVkZ2UgdG8gYWRkIGEgdmVydGV4IGluIHRoZSBtaWRkbGUgb2YgaXQnLFxyXG4gICAgICAnRG91YmxlIGNsaWNrIG9uIGEgdmVydGV4IHRvIHJlbW92ZSBpdCcsXHJcbiAgICAgICdQcmVzc2luZyBDdHJsIGFsbG93cyBkcmFnZ2luZyBhIHdob2xlIHBvbHlnb24nLFxyXG4gICAgICAnU2F2ZSBhbGxvd3MgeW91IHRvIGV4cG9ydCBhbGwgdGhlIHBvbHlnb25zIG9uIHRoZSBzY3JlZW4nLFxyXG4gICAgICAnTG9hZCBhbGxvd3MgeW91IHRvIHJlc3RvcmUgdGhlIHBvbHlnb25zJ1xyXG4gICAgXTtcclxuXHJcbiAgICB1c2FnZS5tYXAodXNhZ2VJdGVtVGV4dCA9PiB0aGlzLmNyZWF0ZVVzYWdlTGlzdEl0ZW0odXNhZ2VJdGVtVGV4dCkpXHJcbiAgICAgIC5mb3JFYWNoKHVzYWdlTGlzdEl0ZW0gPT4gbGlzdC5hcHBlbmRDaGlsZCh1c2FnZUxpc3RJdGVtKSk7XHJcblxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVVzYWdlTGlzdEl0ZW0odGV4dENvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBpdGVtLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaW5zdHJ1Y3Rpb25zLWRpYWxvZycsIEluc3RydWN0aW9uc0RpYWxvZyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy50cyIsImltcG9ydCAnaW5kZXguc2Nzcyc7XHJcbmltcG9ydCAnbm9ybWFsaXplLmNzcyc7XHJcblxyXG5pbXBvcnQgJ0B3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy93ZWJjb21wb25lbnRzLWhpLXNkLWNlJztcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQXBwbGljYXRpb24nO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGJvb3RzdHJhcDtcclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcCgpOiB2b2lkIHtcclxuICBjb25zdCBjYW52YXNJZCA9ICdtYWluLWNhbnZhcyc7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpO1xyXG4gIGlmICghY2FudmFzKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbnZhcyB3aXRoIGlkICR7Y2FudmFzSWR9IGNhbm5vdCBiZSBmb3VuZGApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXBwbGljYXRpb24gPSBuZXcgQXBwbGljYXRpb24oPEhUTUxDYW52YXNFbGVtZW50PmNhbnZhcyk7XHJcbiAgYXBwbGljYXRpb24uaW5pdCgpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2luZGV4LnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgfVxcblxcbi5tYWluLWNhbnZhcyB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjazsgfVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMWVtOyB9XFxuXFxuLmNhbnZhcy13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmFwcGxpY2F0aW9uLXVpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAuYXBwbGljYXRpb24tdWkgKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7IH1cXG5cXG4uYXBwLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLmFwcC1uYW1lIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5mb290ZXIge1xcbiAgbWFyZ2luOiAxZW0gMWVtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uKCl7LypcblxuIENvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG5cbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcblxuIENvcHlyaWdodCAoYykgMjAxNCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgSj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT10aGlzP3RoaXM6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDp0aGlzLEFhPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihnLHEsTil7ZyE9QXJyYXkucHJvdG90eXBlJiZnIT1PYmplY3QucHJvdG90eXBlJiYoZ1txXT1OLnZhbHVlKX07ZnVuY3Rpb24gc2IoKXtzYj1mdW5jdGlvbigpe307Si5TeW1ib2x8fChKLlN5bWJvbD10Yil9dmFyIHRiPWZ1bmN0aW9uKCl7dmFyIGc9MDtyZXR1cm4gZnVuY3Rpb24ocSl7cmV0dXJuXCJqc2NvbXBfc3ltYm9sX1wiKyhxfHxcIlwiKStnKyt9fSgpO1xuZnVuY3Rpb24gZGQoKXtzYigpO3ZhciBnPUouU3ltYm9sLml0ZXJhdG9yO2d8fChnPUouU3ltYm9sLml0ZXJhdG9yPUouU3ltYm9sKFwiaXRlcmF0b3JcIikpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIEFycmF5LnByb3RvdHlwZVtnXSYmQWEoQXJyYXkucHJvdG90eXBlLGcse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBlZCh0aGlzKX19KTtkZD1mdW5jdGlvbigpe319ZnVuY3Rpb24gZWQoZyl7dmFyIHE9MDtyZXR1cm4gZmQoZnVuY3Rpb24oKXtyZXR1cm4gcTxnLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTpnW3ErK119Ontkb25lOiEwfX0pfWZ1bmN0aW9uIGZkKGcpe2RkKCk7Zz17bmV4dDpnfTtnW0ouU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtyZXR1cm4gZ31mdW5jdGlvbiBnZChnKXtkZCgpO3ZhciBxPWdbU3ltYm9sLml0ZXJhdG9yXTtyZXR1cm4gcT9xLmNhbGwoZyk6ZWQoZyl9XG5mdW5jdGlvbiBoZChnKXtmb3IodmFyIHEsTj1bXTshKHE9Zy5uZXh0KCkpLmRvbmU7KU4ucHVzaChxLnZhbHVlKTtyZXR1cm4gTn1cbihmdW5jdGlvbigpe2Z1bmN0aW9uIGcoKXt2YXIgYT10aGlzO3RoaXMubT17fTt0aGlzLmc9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O3ZhciBiPW5ldyBCYTtiLnJ1bGVzPVtdO3RoaXMuaD12LnNldCh0aGlzLmcsbmV3IHYoYikpO3RoaXMuaT0hMTt0aGlzLmI9dGhpcy5hPW51bGw7dWIoZnVuY3Rpb24oKXthLmMoKX0pfWZ1bmN0aW9uIHEoKXt0aGlzLmN1c3RvbVN0eWxlcz1bXTt0aGlzLmVucXVldWVkPSExfWZ1bmN0aW9uIE4oKXt9ZnVuY3Rpb24gaGEoYSl7dGhpcy5jYWNoZT17fTt0aGlzLmM9dm9pZCAwPT09YT8xMDA6YX1mdW5jdGlvbiBuKCl7fWZ1bmN0aW9uIHYoYSxiLGMsZCxlKXt0aGlzLkQ9YXx8bnVsbDt0aGlzLmI9Ynx8bnVsbDt0aGlzLmxhPWN8fFtdO3RoaXMuTj1udWxsO3RoaXMuVj1lfHxcIlwiO3RoaXMuYT10aGlzLkE9dGhpcy5KPW51bGx9ZnVuY3Rpb24gdSgpe31mdW5jdGlvbiBCYSgpe3RoaXMuZW5kPXRoaXMuc3RhcnQ9MDt0aGlzLnJ1bGVzPXRoaXMucGFyZW50PVxudGhpcy5wcmV2aW91cz1udWxsO3RoaXMuY3NzVGV4dD10aGlzLnBhcnNlZENzc1RleHQ9XCJcIjt0aGlzLmF0UnVsZT0hMTt0aGlzLnR5cGU9MDt0aGlzLnBhcnNlZFNlbGVjdG9yPXRoaXMuc2VsZWN0b3I9dGhpcy5rZXlmcmFtZXNOYW1lPVwiXCJ9ZnVuY3Rpb24gaWQoYSl7ZnVuY3Rpb24gYihiLGMpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShiLFwiaW5uZXJIVE1MXCIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlLGNvbmZpZ3VyYWJsZTohMCxnZXQ6Yy5nZXQsc2V0OmZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMsZT12b2lkIDA7dCh0aGlzKSYmKGU9W10sTyh0aGlzLGZ1bmN0aW9uKGEpe2EhPT1kJiZlLnB1c2goYSl9KSk7Yy5zZXQuY2FsbCh0aGlzLGIpO2lmKGUpZm9yKHZhciBmPTA7ZjxlLmxlbmd0aDtmKyspe3ZhciBrPWVbZl07MT09PWsuX19DRV9zdGF0ZSYmYS5kaXNjb25uZWN0ZWRDYWxsYmFjayhrKX10aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT9hLmYodGhpcyk6YS5sKHRoaXMpO1xucmV0dXJuIGJ9fSl9ZnVuY3Rpb24gYyhiLGMpe3goYixcImluc2VydEFkamFjZW50RWxlbWVudFwiLGZ1bmN0aW9uKGIsZCl7dmFyIGU9dChkKTtiPWMuY2FsbCh0aGlzLGIsZCk7ZSYmYS5hKGQpO3QoYikmJmEuYihkKTtyZXR1cm4gYn0pfXZiJiZ4KEVsZW1lbnQucHJvdG90eXBlLFwiYXR0YWNoU2hhZG93XCIsZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX19DRV9zaGFkb3dSb290PWE9dmIuY2FsbCh0aGlzLGEpfSk7aWYoQ2EmJkNhLmdldCliKEVsZW1lbnQucHJvdG90eXBlLENhKTtlbHNlIGlmKERhJiZEYS5nZXQpYihIVE1MRWxlbWVudC5wcm90b3R5cGUsRGEpO2Vsc2V7dmFyIGQ9RWEuY2FsbChkb2N1bWVudCxcImRpdlwiKTthLnMoZnVuY3Rpb24oYSl7YihhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gd2IuY2FsbCh0aGlzLCEwKS5pbm5lckhUTUx9LHNldDpmdW5jdGlvbihhKXt2YXIgYj1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT9cbnRoaXMuY29udGVudDp0aGlzO2ZvcihkLmlubmVySFRNTD1hOzA8Yi5jaGlsZE5vZGVzLmxlbmd0aDspRmEuY2FsbChiLGIuY2hpbGROb2Rlc1swXSk7Zm9yKDswPGQuY2hpbGROb2Rlcy5sZW5ndGg7KWlhLmNhbGwoYixkLmNoaWxkTm9kZXNbMF0pfX0pfSl9eChFbGVtZW50LnByb3RvdHlwZSxcInNldEF0dHJpYnV0ZVwiLGZ1bmN0aW9uKGIsYyl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4geGIuY2FsbCh0aGlzLGIsYyk7dmFyIGQ9R2EuY2FsbCh0aGlzLGIpO3hiLmNhbGwodGhpcyxiLGMpO2M9R2EuY2FsbCh0aGlzLGIpO2EuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYixkLGMsbnVsbCl9KTt4KEVsZW1lbnQucHJvdG90eXBlLFwic2V0QXR0cmlidXRlTlNcIixmdW5jdGlvbihiLGMsZCl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4geWIuY2FsbCh0aGlzLGIsYyxkKTt2YXIgZT1qYS5jYWxsKHRoaXMsYixjKTt5Yi5jYWxsKHRoaXMsYixjLGQpO2Q9amEuY2FsbCh0aGlzLFxuYixjKTthLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGMsZSxkLGIpfSk7eChFbGVtZW50LnByb3RvdHlwZSxcInJlbW92ZUF0dHJpYnV0ZVwiLGZ1bmN0aW9uKGIpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIHpiLmNhbGwodGhpcyxiKTt2YXIgYz1HYS5jYWxsKHRoaXMsYik7emIuY2FsbCh0aGlzLGIpO251bGwhPT1jJiZhLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGIsYyxudWxsLG51bGwpfSk7eChFbGVtZW50LnByb3RvdHlwZSxcInJlbW92ZUF0dHJpYnV0ZU5TXCIsZnVuY3Rpb24oYixjKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBBYi5jYWxsKHRoaXMsYixjKTt2YXIgZD1qYS5jYWxsKHRoaXMsYixjKTtBYi5jYWxsKHRoaXMsYixjKTt2YXIgZT1qYS5jYWxsKHRoaXMsYixjKTtkIT09ZSYmYS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxjLGQsZSxiKX0pO0JiP2MoSFRNTEVsZW1lbnQucHJvdG90eXBlLEJiKTpDYj9jKEVsZW1lbnQucHJvdG90eXBlLFxuQ2IpOmNvbnNvbGUud2FybihcIkN1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjaW5zZXJ0QWRqYWNlbnRFbGVtZW50YCB3YXMgbm90IHBhdGNoZWQuXCIpO0hhKGEsRWxlbWVudC5wcm90b3R5cGUse1o6amQsYXBwZW5kOmtkfSk7bGQoYSx7amE6bWQsV2E6bmQscmVwbGFjZVdpdGg6b2QscmVtb3ZlOnBkfSl9ZnVuY3Rpb24gbGQoYSxiKXt2YXIgYz1FbGVtZW50LnByb3RvdHlwZTtmdW5jdGlvbiBkKGIpe3JldHVybiBmdW5jdGlvbihjKXtmb3IodmFyIGQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDsrK2UpZFtlLTBdPWFyZ3VtZW50c1tlXTtlPVtdO2Zvcih2YXIgZj1bXSxnPTA7ZzxkLmxlbmd0aDtnKyspe3ZhciBtPWRbZ107bSBpbnN0YW5jZW9mIEVsZW1lbnQmJnQobSkmJmYucHVzaChtKTtpZihtIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3IobT1tLmZpcnN0Q2hpbGQ7bTttPW0ubmV4dFNpYmxpbmcpZS5wdXNoKG0pO2Vsc2UgZS5wdXNoKG0pfWIuYXBwbHkodGhpcyxcbmQpO2ZvcihkPTA7ZDxmLmxlbmd0aDtkKyspYS5hKGZbZF0pO2lmKHQodGhpcykpZm9yKGQ9MDtkPGUubGVuZ3RoO2QrKylmPWVbZF0sZiBpbnN0YW5jZW9mIEVsZW1lbnQmJmEuYihmKX19dm9pZCAwIT09Yi5qYSYmKGMuYmVmb3JlPWQoYi5qYSkpO3ZvaWQgMCE9PWIuamEmJihjLmFmdGVyPWQoYi5XYSkpO3ZvaWQgMCE9PWIucmVwbGFjZVdpdGgmJngoYyxcInJlcGxhY2VXaXRoXCIsZnVuY3Rpb24oYyl7Zm9yKHZhciBkPVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7KytlKWRbZS0wXT1hcmd1bWVudHNbZV07ZT1bXTtmb3IodmFyIGg9W10sdz0wO3c8ZC5sZW5ndGg7dysrKXt2YXIgZz1kW3ddO2cgaW5zdGFuY2VvZiBFbGVtZW50JiZ0KGcpJiZoLnB1c2goZyk7aWYoZyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKGc9Zy5maXJzdENoaWxkO2c7Zz1nLm5leHRTaWJsaW5nKWUucHVzaChnKTtlbHNlIGUucHVzaChnKX13PXQodGhpcyk7Yi5yZXBsYWNlV2l0aC5hcHBseSh0aGlzLFxuZCk7Zm9yKGQ9MDtkPGgubGVuZ3RoO2QrKylhLmEoaFtkXSk7aWYodylmb3IoYS5hKHRoaXMpLGQ9MDtkPGUubGVuZ3RoO2QrKyloPWVbZF0saCBpbnN0YW5jZW9mIEVsZW1lbnQmJmEuYihoKX0pO3ZvaWQgMCE9PWIucmVtb3ZlJiZ4KGMsXCJyZW1vdmVcIixmdW5jdGlvbigpe3ZhciBjPXQodGhpcyk7Yi5yZW1vdmUuY2FsbCh0aGlzKTtjJiZhLmEodGhpcyl9KX1mdW5jdGlvbiBxZChhKXtmdW5jdGlvbiBiKGIsZCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGIsXCJ0ZXh0Q29udGVudFwiLHtlbnVtZXJhYmxlOmQuZW51bWVyYWJsZSxjb25maWd1cmFibGU6ITAsZ2V0OmQuZ2V0LHNldDpmdW5jdGlvbihiKXtpZih0aGlzLm5vZGVUeXBlPT09Tm9kZS5URVhUX05PREUpZC5zZXQuY2FsbCh0aGlzLGIpO2Vsc2V7dmFyIGM9dm9pZCAwO2lmKHRoaXMuZmlyc3RDaGlsZCl7dmFyIGU9dGhpcy5jaGlsZE5vZGVzLGg9ZS5sZW5ndGg7aWYoMDxoJiZ0KHRoaXMpKXtjPUFycmF5KGgpO2Zvcih2YXIgdz1cbjA7dzxoO3crKyljW3ddPWVbd119fWQuc2V0LmNhbGwodGhpcyxiKTtpZihjKWZvcihiPTA7YjxjLmxlbmd0aDtiKyspYS5hKGNbYl0pfX19KX14KE5vZGUucHJvdG90eXBlLFwiaW5zZXJ0QmVmb3JlXCIsZnVuY3Rpb24oYixkKXtpZihiIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGIuY2hpbGROb2Rlcyk7Yj1EYi5jYWxsKHRoaXMsYixkKTtpZih0KHRoaXMpKWZvcihkPTA7ZDxjLmxlbmd0aDtkKyspYS5iKGNbZF0pO3JldHVybiBifWM9dChiKTtkPURiLmNhbGwodGhpcyxiLGQpO2MmJmEuYShiKTt0KHRoaXMpJiZhLmIoYik7cmV0dXJuIGR9KTt4KE5vZGUucHJvdG90eXBlLFwiYXBwZW5kQ2hpbGRcIixmdW5jdGlvbihiKXtpZihiIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGIuY2hpbGROb2Rlcyk7Yj1pYS5jYWxsKHRoaXMsYik7aWYodCh0aGlzKSlmb3IodmFyIGU9XG4wO2U8Yy5sZW5ndGg7ZSsrKWEuYihjW2VdKTtyZXR1cm4gYn1jPXQoYik7ZT1pYS5jYWxsKHRoaXMsYik7YyYmYS5hKGIpO3QodGhpcykmJmEuYihiKTtyZXR1cm4gZX0pO3goTm9kZS5wcm90b3R5cGUsXCJjbG9uZU5vZGVcIixmdW5jdGlvbihiKXtiPXdiLmNhbGwodGhpcyxiKTt0aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT9hLmYoYik6YS5sKGIpO3JldHVybiBifSk7eChOb2RlLnByb3RvdHlwZSxcInJlbW92ZUNoaWxkXCIsZnVuY3Rpb24oYil7dmFyIGM9dChiKSxlPUZhLmNhbGwodGhpcyxiKTtjJiZhLmEoYik7cmV0dXJuIGV9KTt4KE5vZGUucHJvdG90eXBlLFwicmVwbGFjZUNoaWxkXCIsZnVuY3Rpb24oYixkKXtpZihiIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGIuY2hpbGROb2Rlcyk7Yj1FYi5jYWxsKHRoaXMsYixkKTtpZih0KHRoaXMpKWZvcihhLmEoZCksZD0wO2Q8Yy5sZW5ndGg7ZCsrKWEuYihjW2RdKTtcbnJldHVybiBifWM9dChiKTt2YXIgZj1FYi5jYWxsKHRoaXMsYixkKSxrPXQodGhpcyk7ayYmYS5hKGQpO2MmJmEuYShiKTtrJiZhLmIoYik7cmV0dXJuIGZ9KTtJYSYmSWEuZ2V0P2IoTm9kZS5wcm90b3R5cGUsSWEpOmEucyhmdW5jdGlvbihhKXtiKGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe2Zvcih2YXIgYT1bXSxiPTA7Yjx0aGlzLmNoaWxkTm9kZXMubGVuZ3RoO2IrKylhLnB1c2godGhpcy5jaGlsZE5vZGVzW2JdLnRleHRDb250ZW50KTtyZXR1cm4gYS5qb2luKFwiXCIpfSxzZXQ6ZnVuY3Rpb24oYSl7Zm9yKDt0aGlzLmZpcnN0Q2hpbGQ7KUZhLmNhbGwodGhpcyx0aGlzLmZpcnN0Q2hpbGQpO2lhLmNhbGwodGhpcyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSl9fSl9KX1mdW5jdGlvbiByZChhKXt4KERvY3VtZW50LnByb3RvdHlwZSxcImNyZWF0ZUVsZW1lbnRcIixmdW5jdGlvbihiKXtpZih0aGlzLl9fQ0VfaGFzUmVnaXN0cnkpe3ZhciBjPVxuYS5jKGIpO2lmKGMpcmV0dXJuIG5ldyBjLmNvbnN0cnVjdG9yfWI9RWEuY2FsbCh0aGlzLGIpO2EuZyhiKTtyZXR1cm4gYn0pO3goRG9jdW1lbnQucHJvdG90eXBlLFwiaW1wb3J0Tm9kZVwiLGZ1bmN0aW9uKGIsYyl7Yj1zZC5jYWxsKHRoaXMsYixjKTt0aGlzLl9fQ0VfaGFzUmVnaXN0cnk/YS5mKGIpOmEubChiKTtyZXR1cm4gYn0pO3goRG9jdW1lbnQucHJvdG90eXBlLFwiY3JlYXRlRWxlbWVudE5TXCIsZnVuY3Rpb24oYixjKXtpZih0aGlzLl9fQ0VfaGFzUmVnaXN0cnkmJihudWxsPT09Ynx8XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1iKSl7dmFyIGQ9YS5jKGMpO2lmKGQpcmV0dXJuIG5ldyBkLmNvbnN0cnVjdG9yfWI9dGQuY2FsbCh0aGlzLGIsYyk7YS5nKGIpO3JldHVybiBifSk7SGEoYSxEb2N1bWVudC5wcm90b3R5cGUse1o6dWQsYXBwZW5kOnZkfSl9ZnVuY3Rpb24gSGEoYSxiLGMpe2Z1bmN0aW9uIGQoYil7cmV0dXJuIGZ1bmN0aW9uKGMpe2Zvcih2YXIgZD1bXSxcbmU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7KytlKWRbZS0wXT1hcmd1bWVudHNbZV07ZT1bXTtmb3IodmFyIGY9W10sZz0wO2c8ZC5sZW5ndGg7ZysrKXt2YXIgbT1kW2ddO20gaW5zdGFuY2VvZiBFbGVtZW50JiZ0KG0pJiZmLnB1c2gobSk7aWYobSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKG09bS5maXJzdENoaWxkO207bT1tLm5leHRTaWJsaW5nKWUucHVzaChtKTtlbHNlIGUucHVzaChtKX1iLmFwcGx5KHRoaXMsZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrKylhLmEoZltkXSk7aWYodCh0aGlzKSlmb3IoZD0wO2Q8ZS5sZW5ndGg7ZCsrKWY9ZVtkXSxmIGluc3RhbmNlb2YgRWxlbWVudCYmYS5iKGYpfX12b2lkIDAhPT1jLlomJihiLnByZXBlbmQ9ZChjLlopKTt2b2lkIDAhPT1jLmFwcGVuZCYmKGIuYXBwZW5kPWQoYy5hcHBlbmQpKX1mdW5jdGlvbiB3ZChhKXt3aW5kb3cuSFRNTEVsZW1lbnQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKCl7dmFyIGI9dGhpcy5jb25zdHJ1Y3RvcixcbmQ9YS53KGIpO2lmKCFkKXRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGJlaW5nIGNvbnN0cnVjdGVkIHdhcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBjdXN0b21FbGVtZW50c2AuXCIpO3ZhciBlPWQuY29uc3RydWN0aW9uU3RhY2s7aWYoMD09PWUubGVuZ3RoKXJldHVybiBlPUVhLmNhbGwoZG9jdW1lbnQsZC5sb2NhbE5hbWUpLE9iamVjdC5zZXRQcm90b3R5cGVPZihlLGIucHJvdG90eXBlKSxlLl9fQ0Vfc3RhdGU9MSxlLl9fQ0VfZGVmaW5pdGlvbj1kLGEuZyhlKSxlO2Q9ZS5sZW5ndGgtMTt2YXIgZj1lW2RdO2lmKGY9PT1GYil0aHJvdyBFcnJvcihcIlRoZSBIVE1MRWxlbWVudCBjb25zdHJ1Y3RvciB3YXMgZWl0aGVyIGNhbGxlZCByZWVudHJhbnRseSBmb3IgdGhpcyBjb25zdHJ1Y3RvciBvciBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXCIpO2VbZF09RmI7T2JqZWN0LnNldFByb3RvdHlwZU9mKGYsYi5wcm90b3R5cGUpO2EuZyhmKTtyZXR1cm4gZn1iLnByb3RvdHlwZT14ZC5wcm90b3R5cGU7XG5yZXR1cm4gYn0oKX1mdW5jdGlvbiB5KGEpe3RoaXMuYz0hMTt0aGlzLmE9YTt0aGlzLmg9bmV3IE1hcDt0aGlzLmY9ZnVuY3Rpb24oYSl7cmV0dXJuIGEoKX07dGhpcy5iPSExO3RoaXMuZz1bXTt0aGlzLmk9bmV3IEphKGEsZG9jdW1lbnQpfWZ1bmN0aW9uIEdiKCl7dmFyIGE9dGhpczt0aGlzLmI9dGhpcy5hPXZvaWQgMDt0aGlzLmY9bmV3IFByb21pc2UoZnVuY3Rpb24oYil7YS5iPWI7YS5hJiZiKGEuYSl9KX1mdW5jdGlvbiBKYShhLGIpe3RoaXMuYj1hO3RoaXMuYT1iO3RoaXMuTT12b2lkIDA7dGhpcy5iLmYodGhpcy5hKTtcImxvYWRpbmdcIj09PXRoaXMuYS5yZWFkeVN0YXRlJiYodGhpcy5NPW5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuZi5iaW5kKHRoaXMpKSx0aGlzLk0ub2JzZXJ2ZSh0aGlzLmEse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSkpfWZ1bmN0aW9uIEIoKXt0aGlzLm89bmV3IE1hcDt0aGlzLm09bmV3IE1hcDt0aGlzLmo9W107dGhpcy5oPSExfWZ1bmN0aW9uIGwoYSxcbmIsYyl7aWYoYSE9PUhiKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGNvbnN0cnVjdG9yXCIpO2E9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2EuX19wcm90b19fPWwucHJvdG90eXBlO2EuRihiLGMpO3JldHVybiBhfWZ1bmN0aW9uIGthKGEpe2lmKCFhLl9fc2hhZHl8fHZvaWQgMD09PWEuX19zaGFkeS5maXJzdENoaWxkKXthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTthLl9fc2hhZHkuZmlyc3RDaGlsZD1LYShhKTthLl9fc2hhZHkubGFzdENoaWxkPUxhKGEpO0liKGEpO2Zvcih2YXIgYj1hLl9fc2hhZHkuY2hpbGROb2Rlcz1TKGEpLGM9MCxkO2M8Yi5sZW5ndGgmJihkPWJbY10pO2MrKylkLl9fc2hhZHk9ZC5fX3NoYWR5fHx7fSxkLl9fc2hhZHkucGFyZW50Tm9kZT1hLGQuX19zaGFkeS5uZXh0U2libGluZz1iW2MrMV18fG51bGwsZC5fX3NoYWR5LnByZXZpb3VzU2libGluZz1iW2MtMV18fG51bGwsSmIoZCl9fWZ1bmN0aW9uIHlkKGEpe3ZhciBiPWEmJmEuTTtcbmImJihiLlguZGVsZXRlKGEuUmEpLGIuWC5zaXplfHwoYS5TYS5fX3NoYWR5LlQ9bnVsbCkpfWZ1bmN0aW9uIHpkKGEsYil7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307YS5fX3NoYWR5LlR8fChhLl9fc2hhZHkuVD1uZXcgbGEpO2EuX19zaGFkeS5ULlguYWRkKGIpO3ZhciBjPWEuX19zaGFkeS5UO3JldHVybntSYTpiLE06YyxTYTphLHRha2VSZWNvcmRzOmZ1bmN0aW9uKCl7cmV0dXJuIGMudGFrZVJlY29yZHMoKX19fWZ1bmN0aW9uIGxhKCl7dGhpcy5hPSExO3RoaXMuYWRkZWROb2Rlcz1bXTt0aGlzLnJlbW92ZWROb2Rlcz1bXTt0aGlzLlg9bmV3IFNldH1mdW5jdGlvbiBUKGEpe3JldHVybiBhLl9fc2hhZHkmJnZvaWQgMCE9PWEuX19zaGFkeS5maXJzdENoaWxkfWZ1bmN0aW9uIEcoYSl7cmV0dXJuXCJTaGFkeVJvb3RcIj09PWEuTWF9ZnVuY3Rpb24gWihhKXthPWEuZ2V0Um9vdE5vZGUoKTtpZihHKGEpKXJldHVybiBhfWZ1bmN0aW9uIE1hKGEsYil7aWYoYSYmYilmb3IodmFyIGM9XG5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKSxkPTAsZTtkPGMubGVuZ3RoJiYoZT1jW2RdKTtkKyspe3ZhciBmPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYixlKTtmJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxlLGYpfX1mdW5jdGlvbiBOYShhLGIpe2Zvcih2YXIgYz1bXSxkPTE7ZDxhcmd1bWVudHMubGVuZ3RoOysrZCljW2QtMV09YXJndW1lbnRzW2RdO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKyspTWEoYSxjW2RdKTtyZXR1cm4gYX1mdW5jdGlvbiBBZChhLGIpe2Zvcih2YXIgYyBpbiBiKWFbY109YltjXX1mdW5jdGlvbiBLYihhKXtPYS5wdXNoKGEpO1BhLnRleHRDb250ZW50PUxiKyt9ZnVuY3Rpb24gTWIoYSxiKXtmb3IoO2I7KXtpZihiPT1hKXJldHVybiEwO2I9Yi5wYXJlbnROb2RlfXJldHVybiExfWZ1bmN0aW9uIE5iKGEpe1FhfHwoUWE9ITAsS2IobWEpKTthYS5wdXNoKGEpfWZ1bmN0aW9uIG1hKCl7UWE9ITE7Zm9yKHZhciBhPSEhYWEubGVuZ3RoO2FhLmxlbmd0aDspYWEuc2hpZnQoKSgpO1xucmV0dXJuIGF9ZnVuY3Rpb24gQmQoYSxiKXt2YXIgYz1iLmdldFJvb3ROb2RlKCk7cmV0dXJuIGEubWFwKGZ1bmN0aW9uKGEpe3ZhciBiPWM9PT1hLnRhcmdldC5nZXRSb290Tm9kZSgpO2lmKGImJmEuYWRkZWROb2Rlcyl7aWYoYj1BcnJheS5mcm9tKGEuYWRkZWROb2RlcykuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBjPT09YS5nZXRSb290Tm9kZSgpfSksYi5sZW5ndGgpcmV0dXJuIGE9T2JqZWN0LmNyZWF0ZShhKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImFkZGVkTm9kZXNcIix7dmFsdWU6Yixjb25maWd1cmFibGU6ITB9KSxhfWVsc2UgaWYoYilyZXR1cm4gYX0pLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYX0pfWZ1bmN0aW9uIE9iKGEpe3N3aXRjaChhKXtjYXNlIFwiJlwiOnJldHVyblwiJmFtcDtcIjtjYXNlIFwiPFwiOnJldHVyblwiJmx0O1wiO2Nhc2UgXCI+XCI6cmV0dXJuXCImZ3Q7XCI7Y2FzZSAnXCInOnJldHVyblwiJnF1b3Q7XCI7Y2FzZSBcIlxcdTAwYTBcIjpyZXR1cm5cIiZuYnNwO1wifX1cbmZ1bmN0aW9uIFBiKGEpe2Zvcih2YXIgYj17fSxjPTA7YzxhLmxlbmd0aDtjKyspYlthW2NdXT0hMDtyZXR1cm4gYn1mdW5jdGlvbiBSYShhLGIpe1widGVtcGxhdGVcIj09PWEubG9jYWxOYW1lJiYoYT1hLmNvbnRlbnQpO2Zvcih2YXIgYz1cIlwiLGQ9Yj9iKGEpOmEuY2hpbGROb2RlcyxlPTAsZj1kLmxlbmd0aCxrO2U8ZiYmKGs9ZFtlXSk7ZSsrKXthOnt2YXIgaD1rO3ZhciB3PWE7dmFyIGc9Yjtzd2l0Y2goaC5ub2RlVHlwZSl7Y2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpmb3IodmFyIG09aC5sb2NhbE5hbWUsbD1cIjxcIittLHE9aC5hdHRyaWJ1dGVzLG49MDt3PXFbbl07bisrKWwrPVwiIFwiK3cubmFtZSsnPVwiJyt3LnZhbHVlLnJlcGxhY2UoQ2QsT2IpKydcIic7bCs9XCI+XCI7aD1EZFttXT9sOmwrUmEoaCxnKStcIjwvXCIrbStcIj5cIjticmVhayBhO2Nhc2UgTm9kZS5URVhUX05PREU6aD1oLmRhdGE7aD13JiZFZFt3LmxvY2FsTmFtZV0/aDpoLnJlcGxhY2UoRmQsT2IpO2JyZWFrIGE7Y2FzZSBOb2RlLkNPTU1FTlRfTk9ERTpoPVxuXCJcXHgzYyEtLVwiK2guZGF0YStcIi0tXFx4M2VcIjticmVhayBhO2RlZmF1bHQ6dGhyb3cgd2luZG93LmNvbnNvbGUuZXJyb3IoaCksRXJyb3IoXCJub3QgaW1wbGVtZW50ZWRcIik7fX1jKz1ofXJldHVybiBjfWZ1bmN0aW9uIFUoYSl7Qy5jdXJyZW50Tm9kZT1hO3JldHVybiBDLnBhcmVudE5vZGUoKX1mdW5jdGlvbiBLYShhKXtDLmN1cnJlbnROb2RlPWE7cmV0dXJuIEMuZmlyc3RDaGlsZCgpfWZ1bmN0aW9uIExhKGEpe0MuY3VycmVudE5vZGU9YTtyZXR1cm4gQy5sYXN0Q2hpbGQoKX1mdW5jdGlvbiBRYihhKXtDLmN1cnJlbnROb2RlPWE7cmV0dXJuIEMucHJldmlvdXNTaWJsaW5nKCl9ZnVuY3Rpb24gUmIoYSl7Qy5jdXJyZW50Tm9kZT1hO3JldHVybiBDLm5leHRTaWJsaW5nKCl9ZnVuY3Rpb24gUyhhKXt2YXIgYj1bXTtDLmN1cnJlbnROb2RlPWE7Zm9yKGE9Qy5maXJzdENoaWxkKCk7YTspYi5wdXNoKGEpLGE9Qy5uZXh0U2libGluZygpO3JldHVybiBifWZ1bmN0aW9uIFNiKGEpe0QuY3VycmVudE5vZGU9XG5hO3JldHVybiBELnBhcmVudE5vZGUoKX1mdW5jdGlvbiBUYihhKXtELmN1cnJlbnROb2RlPWE7cmV0dXJuIEQuZmlyc3RDaGlsZCgpfWZ1bmN0aW9uIFViKGEpe0QuY3VycmVudE5vZGU9YTtyZXR1cm4gRC5sYXN0Q2hpbGQoKX1mdW5jdGlvbiBWYihhKXtELmN1cnJlbnROb2RlPWE7cmV0dXJuIEQucHJldmlvdXNTaWJsaW5nKCl9ZnVuY3Rpb24gV2IoYSl7RC5jdXJyZW50Tm9kZT1hO3JldHVybiBELm5leHRTaWJsaW5nKCl9ZnVuY3Rpb24gWGIoYSl7dmFyIGI9W107RC5jdXJyZW50Tm9kZT1hO2ZvcihhPUQuZmlyc3RDaGlsZCgpO2E7KWIucHVzaChhKSxhPUQubmV4dFNpYmxpbmcoKTtyZXR1cm4gYn1mdW5jdGlvbiBZYihhKXtyZXR1cm4gUmEoYSxmdW5jdGlvbihhKXtyZXR1cm4gUyhhKX0pfWZ1bmN0aW9uIFpiKGEpe3N3aXRjaChhLm5vZGVUeXBlKXtjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOmNhc2UgTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFOmE9ZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihhLFxuTm9kZUZpbHRlci5TSE9XX1RFWFQsbnVsbCwhMSk7Zm9yKHZhciBiPVwiXCIsYztjPWEubmV4dE5vZGUoKTspYis9Yy5ub2RlVmFsdWU7cmV0dXJuIGI7ZGVmYXVsdDpyZXR1cm4gYS5ub2RlVmFsdWV9fWZ1bmN0aW9uIEsoYSxiLGMpe2Zvcih2YXIgZCBpbiBiKXt2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsZCk7ZSYmZS5jb25maWd1cmFibGV8fCFlJiZjP09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGQsYltkXSk6YyYmY29uc29sZS53YXJuKFwiQ291bGQgbm90IGRlZmluZVwiLGQsXCJvblwiLGEpfX1mdW5jdGlvbiBQKGEpe0soYSwkYik7SyhhLFNhKTtLKGEsVGEpfWZ1bmN0aW9uIGFjKGEsYixjKXtKYihhKTtjPWN8fG51bGw7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307Yi5fX3NoYWR5PWIuX19zaGFkeXx8e307YyYmKGMuX19zaGFkeT1jLl9fc2hhZHl8fHt9KTthLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWM/Yy5fX3NoYWR5LnByZXZpb3VzU2libGluZzpiLmxhc3RDaGlsZDtcbnZhciBkPWEuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc7ZCYmZC5fX3NoYWR5JiYoZC5fX3NoYWR5Lm5leHRTaWJsaW5nPWEpOyhkPWEuX19zaGFkeS5uZXh0U2libGluZz1jKSYmZC5fX3NoYWR5JiYoZC5fX3NoYWR5LnByZXZpb3VzU2libGluZz1hKTthLl9fc2hhZHkucGFyZW50Tm9kZT1iO2M/Yz09PWIuX19zaGFkeS5maXJzdENoaWxkJiYoYi5fX3NoYWR5LmZpcnN0Q2hpbGQ9YSk6KGIuX19zaGFkeS5sYXN0Q2hpbGQ9YSxiLl9fc2hhZHkuZmlyc3RDaGlsZHx8KGIuX19zaGFkeS5maXJzdENoaWxkPWEpKTtiLl9fc2hhZHkuY2hpbGROb2Rlcz1udWxsfWZ1bmN0aW9uIFVhKGEsYixjKXtpZihiPT09YSl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdhcHBlbmRDaGlsZCcgb24gJ05vZGUnOiBUaGUgbmV3IGNoaWxkIGVsZW1lbnQgY29udGFpbnMgdGhlIHBhcmVudC5cIik7aWYoYyl7dmFyIGQ9Yy5fX3NoYWR5JiZjLl9fc2hhZHkucGFyZW50Tm9kZTtpZih2b2lkIDAhPT1kJiZcbmQhPT1hfHx2b2lkIDA9PT1kJiZVKGMpIT09YSl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdpbnNlcnRCZWZvcmUnIG9uICdOb2RlJzogVGhlIG5vZGUgYmVmb3JlIHdoaWNoIHRoZSBuZXcgbm9kZSBpcyB0byBiZSBpbnNlcnRlZCBpcyBub3QgYSBjaGlsZCBvZiB0aGlzIG5vZGUuXCIpO31pZihjPT09YilyZXR1cm4gYjtiLnBhcmVudE5vZGUmJlZhKGIucGFyZW50Tm9kZSxiKTtkPVooYSk7dmFyIGU7aWYoZT1kKWE6e2lmKCFiLl9fbm9JbnNlcnRpb25Qb2ludCl7dmFyIGY7XCJzbG90XCI9PT1iLmxvY2FsTmFtZT9mPVtiXTpiLnF1ZXJ5U2VsZWN0b3JBbGwmJihmPWIucXVlcnlTZWxlY3RvckFsbChcInNsb3RcIikpO2lmKGYmJmYubGVuZ3RoKXtlPWY7YnJlYWsgYX19ZT12b2lkIDB9KGY9ZSkmJmQuUWEoZik7ZCYmKFwic2xvdFwiPT09YS5sb2NhbE5hbWV8fGYpJiZkLkwoKTtpZihUKGEpKXtkPWM7SWIoYSk7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307dm9pZCAwIT09YS5fX3NoYWR5LmZpcnN0Q2hpbGQmJlxuKGEuX19zaGFkeS5jaGlsZE5vZGVzPW51bGwpO2lmKGIubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe2Y9Yi5jaGlsZE5vZGVzO2ZvcihlPTA7ZTxmLmxlbmd0aDtlKyspYWMoZltlXSxhLGQpO2IuX19zaGFkeT1iLl9fc2hhZHl8fHt9O2Q9dm9pZCAwIT09Yi5fX3NoYWR5LmZpcnN0Q2hpbGQ/bnVsbDp2b2lkIDA7Yi5fX3NoYWR5LmZpcnN0Q2hpbGQ9Yi5fX3NoYWR5Lmxhc3RDaGlsZD1kO2IuX19zaGFkeS5jaGlsZE5vZGVzPWR9ZWxzZSBhYyhiLGEsZCk7aWYoV2EoYSkpe2EuX19zaGFkeS5yb290LkwoKTt2YXIgaz0hMH1lbHNlIGEuX19zaGFkeS5yb290JiYoaz0hMCl9a3x8KGs9RyhhKT9hLmhvc3Q6YSxjPyhjPWJjKGMpLFhhLmNhbGwoayxiLGMpKTpjYy5jYWxsKGssYikpO2RjKGEsYik7cmV0dXJuIGJ9ZnVuY3Rpb24gVmEoYSxiKXtpZihiLnBhcmVudE5vZGUhPT1hKXRocm93IEVycm9yKFwiVGhlIG5vZGUgdG8gYmUgcmVtb3ZlZCBpcyBub3QgYSBjaGlsZCBvZiB0aGlzIG5vZGU6IFwiK1xuYik7dmFyIGM9WihiKTtpZihUKGEpKXtiLl9fc2hhZHk9Yi5fX3NoYWR5fHx7fTthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTtiPT09YS5fX3NoYWR5LmZpcnN0Q2hpbGQmJihhLl9fc2hhZHkuZmlyc3RDaGlsZD1iLl9fc2hhZHkubmV4dFNpYmxpbmcpO2I9PT1hLl9fc2hhZHkubGFzdENoaWxkJiYoYS5fX3NoYWR5Lmxhc3RDaGlsZD1iLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nKTt2YXIgZD1iLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nO3ZhciBlPWIuX19zaGFkeS5uZXh0U2libGluZztkJiYoZC5fX3NoYWR5PWQuX19zaGFkeXx8e30sZC5fX3NoYWR5Lm5leHRTaWJsaW5nPWUpO2UmJihlLl9fc2hhZHk9ZS5fX3NoYWR5fHx7fSxlLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWQpO2IuX19zaGFkeS5wYXJlbnROb2RlPWIuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc9Yi5fX3NoYWR5Lm5leHRTaWJsaW5nPXZvaWQgMDt2b2lkIDAhPT1hLl9fc2hhZHkuY2hpbGROb2RlcyYmKGEuX19zaGFkeS5jaGlsZE5vZGVzPVxubnVsbCk7aWYoV2EoYSkpe2EuX19zaGFkeS5yb290LkwoKTt2YXIgZj0hMH19ZWMoYik7YyYmKChlPWEmJlwic2xvdFwiPT09YS5sb2NhbE5hbWUpJiYoZj0hMCksKChkPWMuVGEoYikpfHxlKSYmYy5MKCkpO2Z8fChmPUcoYSk/YS5ob3N0OmEsKCFhLl9fc2hhZHkucm9vdCYmXCJzbG90XCIhPT1iLmxvY2FsTmFtZXx8Zj09PVUoYikpJiZiYS5jYWxsKGYsYikpO2RjKGEsbnVsbCxiKTtyZXR1cm4gYn1mdW5jdGlvbiBlYyhhKXtpZihhLl9fc2hhZHkmJnZvaWQgMCE9PWEuX19zaGFkeS5tYSlmb3IodmFyIGI9YS5jaGlsZE5vZGVzLGM9MCxkPWIubGVuZ3RoLGU7YzxkJiYoZT1iW2NdKTtjKyspZWMoZSk7YS5fX3NoYWR5JiYoYS5fX3NoYWR5Lm1hPXZvaWQgMCl9ZnVuY3Rpb24gYmMoYSl7dmFyIGI9YTthJiZcInNsb3RcIj09PWEubG9jYWxOYW1lJiYoYj0oYj1hLl9fc2hhZHkmJmEuX19zaGFkeS5SKSYmYi5sZW5ndGg/YlswXTpiYyhhLm5leHRTaWJsaW5nKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gV2EoYSl7cmV0dXJuKGE9XG5hJiZhLl9fc2hhZHkmJmEuX19zaGFkeS5yb290KSYmYS50YSgpfWZ1bmN0aW9uIGZjKGEsYil7XCJzbG90XCI9PT1iPyhhPWEucGFyZW50Tm9kZSxXYShhKSYmYS5fX3NoYWR5LnJvb3QuTCgpKTpcInNsb3RcIj09PWEubG9jYWxOYW1lJiZcIm5hbWVcIj09PWImJihiPVooYSkpJiYoYi5WYShhKSxiLkwoKSl9ZnVuY3Rpb24gZGMoYSxiLGMpe2lmKGE9YS5fX3NoYWR5JiZhLl9fc2hhZHkuVCliJiZhLmFkZGVkTm9kZXMucHVzaChiKSxjJiZhLnJlbW92ZWROb2Rlcy5wdXNoKGMpLGEuaGIoKX1mdW5jdGlvbiBnYyhhKXtpZihhJiZhLm5vZGVUeXBlKXthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTt2YXIgYj1hLl9fc2hhZHkubWE7dm9pZCAwPT09YiYmKEcoYSk/Yj1hOmI9KGI9YS5wYXJlbnROb2RlKT9nYyhiKTphLGNhLmNhbGwoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGEpJiYoYS5fX3NoYWR5Lm1hPWIpKTtyZXR1cm4gYn19ZnVuY3Rpb24gbmEoYSxiLGMpe3ZhciBkPVtdO2hjKGEuY2hpbGROb2RlcyxcbmIsYyxkKTtyZXR1cm4gZH1mdW5jdGlvbiBoYyhhLGIsYyxkKXtmb3IodmFyIGU9MCxmPWEubGVuZ3RoLGs7ZTxmJiYoaz1hW2VdKTtlKyspe3ZhciBoO2lmKGg9ay5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXtoPWs7dmFyIHc9YixnPWMsbT1kLGw9dyhoKTtsJiZtLnB1c2goaCk7ZyYmZyhsKT9oPWw6KGhjKGguY2hpbGROb2Rlcyx3LGcsbSksaD12b2lkIDApfWlmKGgpYnJlYWt9fWZ1bmN0aW9uIGljKGEpe2E9YS5nZXRSb290Tm9kZSgpO0coYSkmJmEudmEoKX1mdW5jdGlvbiBqYyhhLGIsYyl7b2F8fChvYT13aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5TY29waW5nU2hpbSk7b2EmJlwiY2xhc3NcIj09PWI/b2Euc2V0RWxlbWVudENsYXNzKGEsYyk6KGtjLmNhbGwoYSxiLGMpLGZjKGEsYikpfWZ1bmN0aW9uIGxjKGEsYil7aWYoYS5vd25lckRvY3VtZW50IT09ZG9jdW1lbnQpcmV0dXJuIFlhLmNhbGwoZG9jdW1lbnQsYSxiKTt2YXIgYz1ZYS5jYWxsKGRvY3VtZW50LFxuYSwhMSk7aWYoYil7YT1hLmNoaWxkTm9kZXM7Yj0wO2Zvcih2YXIgZDtiPGEubGVuZ3RoO2IrKylkPWxjKGFbYl0sITApLGMuYXBwZW5kQ2hpbGQoZCl9cmV0dXJuIGN9ZnVuY3Rpb24gWmEoYSxiKXt2YXIgYz1bXSxkPWE7Zm9yKGE9YT09PXdpbmRvdz93aW5kb3c6YS5nZXRSb290Tm9kZSgpO2Q7KWMucHVzaChkKSxkPWQuYXNzaWduZWRTbG90P2QuYXNzaWduZWRTbG90OmQubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUmJmQuaG9zdCYmKGJ8fGQhPT1hKT9kLmhvc3Q6ZC5wYXJlbnROb2RlO2NbYy5sZW5ndGgtMV09PT1kb2N1bWVudCYmYy5wdXNoKHdpbmRvdyk7cmV0dXJuIGN9ZnVuY3Rpb24gbWMoYSxiKXtpZighRylyZXR1cm4gYTthPVphKGEsITApO2Zvcih2YXIgYz0wLGQsZSxmLGs7YzxiLmxlbmd0aDtjKyspaWYoZD1iW2NdLGY9ZD09PXdpbmRvdz93aW5kb3c6ZC5nZXRSb290Tm9kZSgpLGYhPT1lJiYoaz1hLmluZGV4T2YoZiksZT1mKSwhRyhmKXx8XG4tMTxrKXJldHVybiBkfWZ1bmN0aW9uICRhKGEpe2Z1bmN0aW9uIGIoYixkKXtiPW5ldyBhKGIsZCk7Yi5lYT1kJiYhIWQuY29tcG9zZWQ7cmV0dXJuIGJ9QWQoYixhKTtiLnByb3RvdHlwZT1hLnByb3RvdHlwZTtyZXR1cm4gYn1mdW5jdGlvbiBuYyhhLGIsYyl7aWYoYz1iLl9faGFuZGxlcnMmJmIuX19oYW5kbGVyc1thLnR5cGVdJiZiLl9faGFuZGxlcnNbYS50eXBlXVtjXSlmb3IodmFyIGQ9MCxlOyhlPWNbZF0pJiZhLnRhcmdldCE9PWEucmVsYXRlZFRhcmdldCYmKGUuY2FsbChiLGEpLCFhLkthKTtkKyspO31mdW5jdGlvbiBHZChhKXt2YXIgYj1hLmNvbXBvc2VkUGF0aCgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiY3VycmVudFRhcmdldFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sY29uZmlndXJhYmxlOiEwfSk7Zm9yKHZhciBjPWIubGVuZ3RoLTE7MDw9YztjLS0pe3ZhciBkPWJbY107bmMoYSxkLFwiY2FwdHVyZVwiKTtpZihhLmZhKXJldHVybn1PYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcblwiZXZlbnRQaGFzZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRXZlbnQuQVRfVEFSR0VUfX0pO3ZhciBlO2ZvcihjPTA7YzxiLmxlbmd0aDtjKyspe2Q9YltjXTt2YXIgZj1kLl9fc2hhZHkmJmQuX19zaGFkeS5yb290O2lmKDA9PT1jfHxmJiZmPT09ZSlpZihuYyhhLGQsXCJidWJibGVcIiksZCE9PXdpbmRvdyYmKGU9ZC5nZXRSb290Tm9kZSgpKSxhLmZhKWJyZWFrfX1mdW5jdGlvbiBvYyhhLGIsYyxkLGUsZil7Zm9yKHZhciBrPTA7azxhLmxlbmd0aDtrKyspe3ZhciBoPWFba10sdz1oLnR5cGUsZz1oLmNhcHR1cmUsbT1oLm9uY2UsbD1oLnBhc3NpdmU7aWYoYj09PWgubm9kZSYmYz09PXcmJmQ9PT1nJiZlPT09bSYmZj09PWwpcmV0dXJuIGt9cmV0dXJuLTF9ZnVuY3Rpb24gcGMoYSxiLGMpe2lmKGIpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyl7dmFyIGQ9ISFjLmNhcHR1cmU7dmFyIGU9ISFjLm9uY2U7dmFyIGY9ISFjLnBhc3NpdmV9ZWxzZSBkPSEhYyxmPWU9ITE7dmFyIGs9YyYmYy5nYXx8XG50aGlzLGg9YltkYV07aWYoaCl7aWYoLTE8b2MoaCxrLGEsZCxlLGYpKXJldHVybn1lbHNlIGJbZGFdPVtdO2g9ZnVuY3Rpb24oZCl7ZSYmdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKTtkLl9fdGFyZ2V0fHxxYyhkKTtpZihrIT09dGhpcyl7dmFyIGY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkLFwiY3VycmVudFRhcmdldFwiKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZCxcImN1cnJlbnRUYXJnZXRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGt9LGNvbmZpZ3VyYWJsZTohMH0pfWlmKGQuY29tcG9zZWR8fC0xPGQuY29tcG9zZWRQYXRoKCkuaW5kZXhPZihrKSlpZihkLnRhcmdldD09PWQucmVsYXRlZFRhcmdldClkLmV2ZW50UGhhc2U9PT1FdmVudC5CVUJCTElOR19QSEFTRSYmZC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtlbHNlIGlmKGQuZXZlbnRQaGFzZT09PUV2ZW50LkNBUFRVUklOR19QSEFTRXx8ZC5idWJibGVzfHxkLnRhcmdldD09PWspe3ZhciBoPVxuXCJvYmplY3RcIj09PXR5cGVvZiBiJiZiLmhhbmRsZUV2ZW50P2IuaGFuZGxlRXZlbnQoZCk6Yi5jYWxsKGssZCk7ayE9PXRoaXMmJihmPyhPYmplY3QuZGVmaW5lUHJvcGVydHkoZCxcImN1cnJlbnRUYXJnZXRcIixmKSxmPW51bGwpOmRlbGV0ZSBkLmN1cnJlbnRUYXJnZXQpO3JldHVybiBofX07YltkYV0ucHVzaCh7bm9kZTp0aGlzLHR5cGU6YSxjYXB0dXJlOmQsb25jZTplLHBhc3NpdmU6ZixsYjpofSk7YWJbYV0/KHRoaXMuX19oYW5kbGVycz10aGlzLl9faGFuZGxlcnN8fHt9LHRoaXMuX19oYW5kbGVyc1thXT10aGlzLl9faGFuZGxlcnNbYV18fHtjYXB0dXJlOltdLGJ1YmJsZTpbXX0sdGhpcy5fX2hhbmRsZXJzW2FdW2Q/XCJjYXB0dXJlXCI6XCJidWJibGVcIl0ucHVzaChoKSk6KHRoaXMgaW5zdGFuY2VvZiBXaW5kb3c/cmM6c2MpLmNhbGwodGhpcyxhLGgsYyl9fWZ1bmN0aW9uIHRjKGEsYixjKXtpZihiKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMpe3ZhciBkPSEhYy5jYXB0dXJlO3ZhciBlPVxuISFjLm9uY2U7dmFyIGY9ISFjLnBhc3NpdmV9ZWxzZSBkPSEhYyxmPWU9ITE7dmFyIGs9YyYmYy5nYXx8dGhpcyxoPXZvaWQgMDt2YXIgZz1udWxsO3RyeXtnPWJbZGFdfWNhdGNoKHIpe31nJiYoZT1vYyhnLGssYSxkLGUsZiksLTE8ZSYmKGg9Zy5zcGxpY2UoZSwxKVswXS5sYixnLmxlbmd0aHx8KGJbZGFdPXZvaWQgMCkpKTsodGhpcyBpbnN0YW5jZW9mIFdpbmRvdz91Yzp2YykuY2FsbCh0aGlzLGEsaHx8YixjKTtoJiZhYlthXSYmdGhpcy5fX2hhbmRsZXJzJiZ0aGlzLl9faGFuZGxlcnNbYV0mJihhPXRoaXMuX19oYW5kbGVyc1thXVtkP1wiY2FwdHVyZVwiOlwiYnViYmxlXCJdLGg9YS5pbmRleE9mKGgpLC0xPGgmJmEuc3BsaWNlKGgsMSkpfX1mdW5jdGlvbiBIZCgpe2Zvcih2YXIgYSBpbiBhYil3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihhLGZ1bmN0aW9uKGEpe2EuX190YXJnZXR8fChxYyhhKSxHZChhKSl9LCEwKX1mdW5jdGlvbiBxYyhhKXthLl9fdGFyZ2V0PWEudGFyZ2V0O2EucmE9XG5hLnJlbGF0ZWRUYXJnZXQ7aWYoRS5TKXt2YXIgYj13YyxjPU9iamVjdC5nZXRQcm90b3R5cGVPZihhKTtpZighYy5oYXNPd25Qcm9wZXJ0eShcIl9fcGF0Y2hQcm90b1wiKSl7dmFyIGQ9T2JqZWN0LmNyZWF0ZShjKTtkLm5iPWM7TWEoZCxiKTtjLl9fcGF0Y2hQcm90bz1kfWEuX19wcm90b19fPWMuX19wYXRjaFByb3RvfWVsc2UgTWEoYSx3Yyl9ZnVuY3Rpb24gZWEoYSxiKXtyZXR1cm57aW5kZXg6YSxVOltdLFc6Yn19ZnVuY3Rpb24gSWQoYSxiLGMsZCl7dmFyIGU9MCxmPTAsaz0wLGg9MCxnPU1hdGgubWluKGItZSxkLWYpO2lmKDA9PWUmJjA9PWYpYTp7Zm9yKGs9MDtrPGc7aysrKWlmKGFba10hPT1jW2tdKWJyZWFrIGE7az1nfWlmKGI9PWEubGVuZ3RoJiZkPT1jLmxlbmd0aCl7aD1hLmxlbmd0aDtmb3IodmFyIHI9Yy5sZW5ndGgsbT0wO208Zy1rJiZKZChhWy0taF0sY1stLXJdKTspbSsrO2g9bX1lKz1rO2YrPWs7Yi09aDtkLT1oO2lmKDA9PWItZSYmMD09ZC1mKXJldHVybltdO1xuaWYoZT09Yil7Zm9yKGI9ZWEoZSwwKTtmPGQ7KWIuVS5wdXNoKGNbZisrXSk7cmV0dXJuW2JdfWlmKGY9PWQpcmV0dXJuW2VhKGUsYi1lKV07Zz1lO2s9ZjtkPWQtaysxO2g9Yi1nKzE7Yj1BcnJheShkKTtmb3Iocj0wO3I8ZDtyKyspYltyXT1BcnJheShoKSxiW3JdWzBdPXI7Zm9yKHI9MDtyPGg7cisrKWJbMF1bcl09cjtmb3Iocj0xO3I8ZDtyKyspZm9yKG09MTttPGg7bSsrKWlmKGFbZyttLTFdPT09Y1trK3ItMV0pYltyXVttXT1iW3ItMV1bbS0xXTtlbHNle3ZhciBsPWJbci0xXVttXSsxLG49YltyXVttLTFdKzE7YltyXVttXT1sPG4/bDpufWc9Yi5sZW5ndGgtMTtrPWJbMF0ubGVuZ3RoLTE7ZD1iW2ddW2tdO2ZvcihhPVtdOzA8Z3x8MDxrOykwPT1nPyhhLnB1c2goMiksay0tKTowPT1rPyhhLnB1c2goMyksZy0tKTooaD1iW2ctMV1bay0xXSxyPWJbZy0xXVtrXSxtPWJbZ11bay0xXSxsPXI8bT9yPGg/cjpoOm08aD9tOmgsbD09aD8oaD09ZD9hLnB1c2goMCk6KGEucHVzaCgxKSxcbmQ9aCksZy0tLGstLSk6bD09cj8oYS5wdXNoKDMpLGctLSxkPXIpOihhLnB1c2goMiksay0tLGQ9bSkpO2EucmV2ZXJzZSgpO2I9dm9pZCAwO2c9W107Zm9yKGs9MDtrPGEubGVuZ3RoO2srKylzd2l0Y2goYVtrXSl7Y2FzZSAwOmImJihnLnB1c2goYiksYj12b2lkIDApO2UrKztmKys7YnJlYWs7Y2FzZSAxOmJ8fChiPWVhKGUsMCkpO2IuVysrO2UrKztiLlUucHVzaChjW2ZdKTtmKys7YnJlYWs7Y2FzZSAyOmJ8fChiPWVhKGUsMCkpO2IuVysrO2UrKzticmVhaztjYXNlIDM6Ynx8KGI9ZWEoZSwwKSksYi5VLnB1c2goY1tmXSksZisrfWImJmcucHVzaChiKTtyZXR1cm4gZ31mdW5jdGlvbiBKZChhLGIpe3JldHVybiBhPT09Yn1mdW5jdGlvbiB4YyhhKXt2YXIgYj1bXTtkbyBiLnVuc2hpZnQoYSk7d2hpbGUoYT1hLnBhcmVudE5vZGUpO3JldHVybiBifWZ1bmN0aW9uIHljKGEpe2ljKGEpO3JldHVybiBhLl9fc2hhZHkmJmEuX19zaGFkeS5hc3NpZ25lZFNsb3R8fG51bGx9ZnVuY3Rpb24gTChhLFxuYil7Zm9yKHZhciBjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGIpLGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXSxmPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYixlKTtmLnZhbHVlP2FbZV09Zi52YWx1ZTpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxlLGYpfX1mdW5jdGlvbiBLZCgpe3ZhciBhPXdpbmRvdy5jdXN0b21FbGVtZW50cyYmd2luZG93LmN1c3RvbUVsZW1lbnRzLm5hdGl2ZUhUTUxFbGVtZW50fHxIVE1MRWxlbWVudDtMKHdpbmRvdy5Ob2RlLnByb3RvdHlwZSxMZCk7TCh3aW5kb3cuV2luZG93LnByb3RvdHlwZSxNZCk7TCh3aW5kb3cuVGV4dC5wcm90b3R5cGUsTmQpO0wod2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLGJiKTtMKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSx6Yyk7TCh3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLEFjKTt3aW5kb3cuSFRNTFNsb3RFbGVtZW50JiZMKHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQucHJvdG90eXBlLFxuQmMpO0woYS5wcm90b3R5cGUsT2QpO0UuUyYmKFAod2luZG93Lk5vZGUucHJvdG90eXBlKSxQKHdpbmRvdy5UZXh0LnByb3RvdHlwZSksUCh3aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUpLFAod2luZG93LkVsZW1lbnQucHJvdG90eXBlKSxQKGEucHJvdG90eXBlKSxQKHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUpLHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQmJlAod2luZG93LkhUTUxTbG90RWxlbWVudC5wcm90b3R5cGUpKX1mdW5jdGlvbiBDYyhhKXt2YXIgYj1QZC5oYXMoYSk7YT0vXlthLXpdWy4wLTlfYS16XSotW1xcLS4wLTlfYS16XSokLy50ZXN0KGEpO3JldHVybiFiJiZhfWZ1bmN0aW9uIHQoYSl7dmFyIGI9YS5pc0Nvbm5lY3RlZDtpZih2b2lkIDAhPT1iKXJldHVybiBiO2Zvcig7YSYmIShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KTspYT1hLnBhcmVudE5vZGV8fCh3aW5kb3cuU2hhZG93Um9vdCYmYSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/XG5hLmhvc3Q6dm9pZCAwKTtyZXR1cm4hKCFhfHwhKGEuX19DRV9pc0ltcG9ydERvY3VtZW50fHxhIGluc3RhbmNlb2YgRG9jdW1lbnQpKX1mdW5jdGlvbiBjYihhLGIpe2Zvcig7YiYmYiE9PWEmJiFiLm5leHRTaWJsaW5nOyliPWIucGFyZW50Tm9kZTtyZXR1cm4gYiYmYiE9PWE/Yi5uZXh0U2libGluZzpudWxsfWZ1bmN0aW9uIE8oYSxiLGMpe2M9Yz9jOm5ldyBTZXQ7Zm9yKHZhciBkPWE7ZDspe2lmKGQubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7dmFyIGU9ZDtiKGUpO3ZhciBmPWUubG9jYWxOYW1lO2lmKFwibGlua1wiPT09ZiYmXCJpbXBvcnRcIj09PWUuZ2V0QXR0cmlidXRlKFwicmVsXCIpKXtkPWUuaW1wb3J0O2lmKGQgaW5zdGFuY2VvZiBOb2RlJiYhYy5oYXMoZCkpZm9yKGMuYWRkKGQpLGQ9ZC5maXJzdENoaWxkO2Q7ZD1kLm5leHRTaWJsaW5nKU8oZCxiLGMpO2Q9Y2IoYSxlKTtjb250aW51ZX1lbHNlIGlmKFwidGVtcGxhdGVcIj09PWYpe2Q9Y2IoYSxlKTtjb250aW51ZX1pZihlPVxuZS5fX0NFX3NoYWRvd1Jvb3QpZm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKU8oZSxiLGMpfWQ9ZC5maXJzdENoaWxkP2QuZmlyc3RDaGlsZDpjYihhLGQpfX1mdW5jdGlvbiB4KGEsYixjKXthW2JdPWN9ZnVuY3Rpb24gZGIoYSl7YT1hLnJlcGxhY2UoRi5ZYSxcIlwiKS5yZXBsYWNlKEYucG9ydCxcIlwiKTt2YXIgYj1EYyxjPWEsZD1uZXcgQmE7ZC5zdGFydD0wO2QuZW5kPWMubGVuZ3RoO2Zvcih2YXIgZT1kLGY9MCxrPWMubGVuZ3RoO2Y8aztmKyspaWYoXCJ7XCI9PT1jW2ZdKXtlLnJ1bGVzfHwoZS5ydWxlcz1bXSk7dmFyIGg9ZSxnPWgucnVsZXNbaC5ydWxlcy5sZW5ndGgtMV18fG51bGw7ZT1uZXcgQmE7ZS5zdGFydD1mKzE7ZS5wYXJlbnQ9aDtlLnByZXZpb3VzPWc7aC5ydWxlcy5wdXNoKGUpfWVsc2VcIn1cIj09PWNbZl0mJihlLmVuZD1mKzEsZT1lLnBhcmVudHx8ZCk7cmV0dXJuIGIoZCxhKX1mdW5jdGlvbiBEYyhhLGIpe3ZhciBjPWIuc3Vic3RyaW5nKGEuc3RhcnQsXG5hLmVuZC0xKTthLnBhcnNlZENzc1RleHQ9YS5jc3NUZXh0PWMudHJpbSgpO2EucGFyZW50JiYoYz1iLnN1YnN0cmluZyhhLnByZXZpb3VzP2EucHJldmlvdXMuZW5kOmEucGFyZW50LnN0YXJ0LGEuc3RhcnQtMSksYz1RZChjKSxjPWMucmVwbGFjZShGLkJhLFwiIFwiKSxjPWMuc3Vic3RyaW5nKGMubGFzdEluZGV4T2YoXCI7XCIpKzEpLGM9YS5wYXJzZWRTZWxlY3Rvcj1hLnNlbGVjdG9yPWMudHJpbSgpLGEuYXRSdWxlPTA9PT1jLmluZGV4T2YoXCJAXCIpLGEuYXRSdWxlPzA9PT1jLmluZGV4T2YoXCJAbWVkaWFcIik/YS50eXBlPUkuTUVESUFfUlVMRTpjLm1hdGNoKEYuY2IpJiYoYS50eXBlPUkuZGEsYS5rZXlmcmFtZXNOYW1lPWEuc2VsZWN0b3Iuc3BsaXQoRi5CYSkucG9wKCkpOmEudHlwZT0wPT09Yy5pbmRleE9mKFwiLS1cIik/SS5uYTpJLlNUWUxFX1JVTEUpO2lmKGM9YS5ydWxlcylmb3IodmFyIGQ9MCxlPWMubGVuZ3RoLGY7ZDxlJiYoZj1jW2RdKTtkKyspRGMoZixiKTtyZXR1cm4gYX1mdW5jdGlvbiBRZChhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXFxcKFswLTlhLWZdezEsNn0pXFxzL2dpLFxuZnVuY3Rpb24oYSxjKXthPWM7Zm9yKGM9Ni1hLmxlbmd0aDtjLS07KWE9XCIwXCIrYTtyZXR1cm5cIlxcXFxcIithfSl9ZnVuY3Rpb24gRWMoYSxiLGMpe2M9dm9pZCAwPT09Yz9cIlwiOmM7dmFyIGQ9XCJcIjtpZihhLmNzc1RleHR8fGEucnVsZXMpe3ZhciBlPWEucnVsZXMsZjtpZihmPWUpZj1lWzBdLGY9IShmJiZmLnNlbGVjdG9yJiYwPT09Zi5zZWxlY3Rvci5pbmRleE9mKFwiLS1cIikpO2lmKGYpe2Y9MDtmb3IodmFyIGs9ZS5sZW5ndGgsaDtmPGsmJihoPWVbZl0pO2YrKylkPUVjKGgsYixkKX1lbHNlIGI/Yj1hLmNzc1RleHQ6KGI9YS5jc3NUZXh0LGI9Yi5yZXBsYWNlKEYud2EsXCJcIikucmVwbGFjZShGLkFhLFwiXCIpLGI9Yi5yZXBsYWNlKEYuZWIsXCJcIikucmVwbGFjZShGLmpiLFwiXCIpKSwoZD1iLnRyaW0oKSkmJihkPVwiICBcIitkK1wiXFxuXCIpfWQmJihhLnNlbGVjdG9yJiYoYys9YS5zZWxlY3RvcitcIiB7XFxuXCIpLGMrPWQsYS5zZWxlY3RvciYmKGMrPVwifVxcblxcblwiKSk7cmV0dXJuIGN9ZnVuY3Rpb24gRmMoYSl7QT1cbmEmJmEuc2hpbWNzc3Byb3BlcnRpZXM/ITE6enx8IShuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdFxcLzYwMXxFZGdlXFwvMTUvKXx8IXdpbmRvdy5DU1N8fCFDU1Muc3VwcG9ydHN8fCFDU1Muc3VwcG9ydHMoXCJib3gtc2hhZG93XCIsXCIwIDAgMCB2YXIoLS1mb28pXCIpKX1mdW5jdGlvbiBWKGEsYil7aWYoIWEpcmV0dXJuXCJcIjtcInN0cmluZ1wiPT09dHlwZW9mIGEmJihhPWRiKGEpKTtiJiZXKGEsYik7cmV0dXJuIEVjKGEsQSl9ZnVuY3Rpb24gcGEoYSl7IWEuX19jc3NSdWxlcyYmYS50ZXh0Q29udGVudCYmKGEuX19jc3NSdWxlcz1kYihhLnRleHRDb250ZW50KSk7cmV0dXJuIGEuX19jc3NSdWxlc3x8bnVsbH1mdW5jdGlvbiBHYyhhKXtyZXR1cm4hIWEucGFyZW50JiZhLnBhcmVudC50eXBlPT09SS5kYX1mdW5jdGlvbiBXKGEsYixjLGQpe2lmKGEpe3ZhciBlPSExLGY9YS50eXBlO2lmKGQmJmY9PT1JLk1FRElBX1JVTEUpe3ZhciBrPWEuc2VsZWN0b3IubWF0Y2goUmQpO1xuayYmKHdpbmRvdy5tYXRjaE1lZGlhKGtbMV0pLm1hdGNoZXN8fChlPSEwKSl9Zj09PUkuU1RZTEVfUlVMRT9iKGEpOmMmJmY9PT1JLmRhP2MoYSk6Zj09PUkubmEmJihlPSEwKTtpZigoYT1hLnJ1bGVzKSYmIWUpe2U9MDtmPWEubGVuZ3RoO2Zvcih2YXIgaDtlPGYmJihoPWFbZV0pO2UrKylXKGgsYixjLGQpfX19ZnVuY3Rpb24gZWIoYSxiLGMsZCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2ImJmUuc2V0QXR0cmlidXRlKFwic2NvcGVcIixiKTtlLnRleHRDb250ZW50PWE7SGMoZSxjLGQpO3JldHVybiBlfWZ1bmN0aW9uIEhjKGEsYixjKXtiPWJ8fGRvY3VtZW50LmhlYWQ7Yi5pbnNlcnRCZWZvcmUoYSxjJiZjLm5leHRTaWJsaW5nfHxiLmZpcnN0Q2hpbGQpO1E/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihRKT09PU5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HJiYoUT1hKTpRPWF9ZnVuY3Rpb24gSWMoYSxiKXt2YXIgYz1hLmluZGV4T2YoXCJ2YXIoXCIpO1xuaWYoLTE9PT1jKXJldHVybiBiKGEsXCJcIixcIlwiLFwiXCIpO2E6e3ZhciBkPTA7dmFyIGU9YyszO2Zvcih2YXIgZj1hLmxlbmd0aDtlPGY7ZSsrKWlmKFwiKFwiPT09YVtlXSlkKys7ZWxzZSBpZihcIilcIj09PWFbZV0mJjA9PT0tLWQpYnJlYWsgYTtlPS0xfWQ9YS5zdWJzdHJpbmcoYys0LGUpO2M9YS5zdWJzdHJpbmcoMCxjKTthPUljKGEuc3Vic3RyaW5nKGUrMSksYik7ZT1kLmluZGV4T2YoXCIsXCIpO3JldHVybi0xPT09ZT9iKGMsZC50cmltKCksXCJcIixhKTpiKGMsZC5zdWJzdHJpbmcoMCxlKS50cmltKCksZC5zdWJzdHJpbmcoZSsxKS50cmltKCksYSl9ZnVuY3Rpb24gcWEoYSxiKXt6P2Euc2V0QXR0cmlidXRlKFwiY2xhc3NcIixiKTp3aW5kb3cuU2hhZHlET00ubmF0aXZlTWV0aG9kcy5zZXRBdHRyaWJ1dGUuY2FsbChhLFwiY2xhc3NcIixiKX1mdW5jdGlvbiBSKGEpe3ZhciBiPWEubG9jYWxOYW1lLGM9XCJcIjtiPy0xPGIuaW5kZXhPZihcIi1cIil8fChjPWIsYj1hLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJpc1wiKXx8XG5cIlwiKTooYj1hLmlzLGM9YS5leHRlbmRzKTtyZXR1cm57aXM6YixWOmN9fWZ1bmN0aW9uIEpjKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKGMudGFyZ2V0IT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiZjLnRhcmdldCE9PWRvY3VtZW50LmhlYWQpZm9yKHZhciBkPTA7ZDxjLmFkZGVkTm9kZXMubGVuZ3RoO2QrKyl7dmFyIGU9Yy5hZGRlZE5vZGVzW2RdO2lmKGUubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7dmFyIGY9ZS5nZXRSb290Tm9kZSgpO3ZhciBrPWU7dmFyIGg9W107ay5jbGFzc0xpc3Q/aD1BcnJheS5mcm9tKGsuY2xhc3NMaXN0KTprIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQmJmsuaGFzQXR0cmlidXRlKFwiY2xhc3NcIikmJihoPWsuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuc3BsaXQoL1xccysvKSk7az1oO2g9ay5pbmRleE9mKHAuYSk7aWYoKGs9LTE8aD9rW2grMV06XCJcIikmJmY9PT1lLm93bmVyRG9jdW1lbnQpcC5iKGUsXG5rLCEwKTtlbHNlIGlmKGYubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUmJihmPWYuaG9zdCkpaWYoZj1SKGYpLmlzLGs9PT1mKWZvcihlPXdpbmRvdy5TaGFkeURPTS5uYXRpdmVNZXRob2RzLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlLFwiOm5vdCguXCIrcC5hK1wiKVwiKSxmPTA7ZjxlLmxlbmd0aDtmKyspcC5oKGVbZl0sayk7ZWxzZSBrJiZwLmIoZSxrLCEwKSxwLmIoZSxmKX19fX1mdW5jdGlvbiBTZChhKXtpZihhPXJhW2FdKWEuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9uPWEuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9ufHwwLGEuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uPWEuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9ufHwwLGEuX2FwcGx5U2hpbU5leHRWZXJzaW9uPShhLl9hcHBseVNoaW1OZXh0VmVyc2lvbnx8MCkrMX1mdW5jdGlvbiBLYyhhKXtyZXR1cm4gYS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb249PT1hLl9hcHBseVNoaW1OZXh0VmVyc2lvbn1cbmZ1bmN0aW9uIFRkKGEpe2EuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uPWEuX2FwcGx5U2hpbU5leHRWZXJzaW9uO2EuYnx8KGEuYj0hMCxVZC50aGVuKGZ1bmN0aW9uKCl7YS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb249YS5fYXBwbHlTaGltTmV4dFZlcnNpb247YS5iPSExfSkpfWZ1bmN0aW9uIHViKGEpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe0xjP0xjKGEpOihmYnx8KGZiPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEpe2diPWF9KSxcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlP2diKCk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbigpe1wiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUmJmdiKCl9KSksZmIudGhlbihmdW5jdGlvbigpe2EmJmEoKX0pKX0pfShmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudClyZXR1cm4gbmV3IEN1c3RvbUV2ZW50KGEsXG5iKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO2MuaW5pdEN1c3RvbUV2ZW50KGEsISFiLmJ1YmJsZXMsISFiLmNhbmNlbGFibGUsYi5kZXRhaWwpO3JldHVybiBjfWZ1bmN0aW9uIGMoYSl7aWYobSlyZXR1cm4gYS5vd25lckRvY3VtZW50IT09ZG9jdW1lbnQ/YS5vd25lckRvY3VtZW50Om51bGw7dmFyIGI9YS5fX2ltcG9ydERvYztpZighYiYmYS5wYXJlbnROb2RlKXtiPWEucGFyZW50Tm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jbG9zZXN0KWI9Yi5jbG9zZXN0KFwibGlua1tyZWw9aW1wb3J0XVwiKTtlbHNlIGZvcig7IWgoYikmJihiPWIucGFyZW50Tm9kZSk7KTthLl9faW1wb3J0RG9jPWJ9cmV0dXJuIGJ9ZnVuY3Rpb24gZChhKXt2YXIgYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XTpub3QoW2ltcG9ydC1kZXBlbmRlbmN5XSlcIiksYz1iLmxlbmd0aDtjP2woYixmdW5jdGlvbihiKXtyZXR1cm4gayhiLGZ1bmN0aW9uKCl7MD09PVxuLS1jJiZhKCl9KX0pOmEoKX1mdW5jdGlvbiBlKGEpe2Z1bmN0aW9uIGIoKXtcImxvYWRpbmdcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGUmJmRvY3VtZW50LmJvZHkmJihkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGIpLGEoKSl9ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixiKTtiKCl9ZnVuY3Rpb24gZihhKXtlKGZ1bmN0aW9uKCl7cmV0dXJuIGQoZnVuY3Rpb24oKXtyZXR1cm4gYSYmYSgpfSl9KX1mdW5jdGlvbiBrKGEsYil7aWYoYS5fX2xvYWRlZCliJiZiKCk7ZWxzZSBpZihcInNjcmlwdFwiPT09YS5sb2NhbE5hbWUmJiFhLnNyY3x8XCJzdHlsZVwiPT09YS5sb2NhbE5hbWUmJiFhLmZpcnN0Q2hpbGQpYS5fX2xvYWRlZD0hMCxiJiZiKCk7ZWxzZXt2YXIgYz1mdW5jdGlvbihkKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoZC50eXBlLGMpO2EuX19sb2FkZWQ9ITA7YiYmYigpfTthLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsXG5jKTt6JiZcInN0eWxlXCI9PT1hLmxvY2FsTmFtZXx8YS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixjKX19ZnVuY3Rpb24gaChhKXtyZXR1cm4gYS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiZcImxpbmtcIj09PWEubG9jYWxOYW1lJiZcImltcG9ydFwiPT09YS5yZWx9ZnVuY3Rpb24gZygpe3ZhciBhPXRoaXM7dGhpcy5hPXt9O3RoaXMuYj0wO3RoaXMuZj1uZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihiKXtyZXR1cm4gYS5sKGIpfSk7dGhpcy5mLm9ic2VydmUoZG9jdW1lbnQuaGVhZCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KTt0aGlzLmMoZG9jdW1lbnQpfWZ1bmN0aW9uIGwoYSxiLGMpe3ZhciBkPWE/YS5sZW5ndGg6MCxlPWM/LTE6MTtmb3IoYz1jP2QtMTowO2M8ZCYmMDw9YztjKz1lKWIoYVtjXSxjKX12YXIgbT1cImltcG9ydFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIiksbj1udWxsOyExPT09XCJjdXJyZW50U2NyaXB0XCJpbiBkb2N1bWVudCYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50LFxuXCJjdXJyZW50U2NyaXB0XCIse2dldDpmdW5jdGlvbigpe3JldHVybiBufHwoXCJjb21wbGV0ZVwiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9kb2N1bWVudC5zY3JpcHRzW2RvY3VtZW50LnNjcmlwdHMubGVuZ3RoLTFdOm51bGwpfSxjb25maWd1cmFibGU6ITB9KTt2YXIgcT0vKHVybFxcKCkoW14pXSopKFxcKSkvZyx0PS8oQGltcG9ydFtcXHNdKyg/IXVybFxcKCkpKFteO10qKSg7KS9nLHU9Lyg8bGlua1tePl0qKShyZWw9Wyd8XCJdP3N0eWxlc2hlZXRbJ3xcIl0/W14+XSo+KS9nLHA9e1phOmZ1bmN0aW9uKGEsYil7YS5ocmVmJiZhLnNldEF0dHJpYnV0ZShcImhyZWZcIixwLiQoYS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLGIpKTthLnNyYyYmYS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixwLiQoYS5nZXRBdHRyaWJ1dGUoXCJzcmNcIiksYikpO2lmKFwic3R5bGVcIj09PWEubG9jYWxOYW1lKXt2YXIgYz1wLkNhKGEudGV4dENvbnRlbnQsYixxKTthLnRleHRDb250ZW50PXAuQ2EoYyxiLHQpfX0sQ2E6ZnVuY3Rpb24oYSxcbmIsYyl7cmV0dXJuIGEucmVwbGFjZShjLGZ1bmN0aW9uKGEsYyxkLGUpe2E9ZC5yZXBsYWNlKC9bXCInXS9nLFwiXCIpO2ImJihhPXAuJChhLGIpKTtyZXR1cm4gYytcIidcIithK1wiJ1wiK2V9KX0sJDpmdW5jdGlvbihhLGIpe2lmKHZvaWQgMD09PXAuaGEpe3AuaGE9ITE7dHJ5e3ZhciBjPW5ldyBVUkwoXCJiXCIsXCJodHRwOi8vYVwiKTtjLnBhdGhuYW1lPVwiYyUyMGRcIjtwLmhhPVwiaHR0cDovL2EvYyUyMGRcIj09PWMuaHJlZn1jYXRjaChzZSl7fX1pZihwLmhhKXJldHVybihuZXcgVVJMKGEsYikpLmhyZWY7Yz1wLlBhO2N8fChjPWRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcInRlbXBcIikscC5QYT1jLGMucGE9Yy5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSxjLmhlYWQuYXBwZW5kQ2hpbGQoYy5wYSksYy5vYT1jLmNyZWF0ZUVsZW1lbnQoXCJhXCIpKTtjLnBhLmhyZWY9YjtjLm9hLmhyZWY9YTtyZXR1cm4gYy5vYS5ocmVmfHxhfX0sdj17YXN5bmM6ITAsbG9hZDpmdW5jdGlvbihhLFxuYixjKXtpZihhKWlmKGEubWF0Y2goL15kYXRhOi8pKXthPWEuc3BsaXQoXCIsXCIpO3ZhciBkPWFbMV07ZD0tMTxhWzBdLmluZGV4T2YoXCI7YmFzZTY0XCIpP2F0b2IoZCk6ZGVjb2RlVVJJQ29tcG9uZW50KGQpO2IoZCl9ZWxzZXt2YXIgZT1uZXcgWE1MSHR0cFJlcXVlc3Q7ZS5vcGVuKFwiR0VUXCIsYSx2LmFzeW5jKTtlLm9ubG9hZD1mdW5jdGlvbigpe3ZhciBhPWUucmVzcG9uc2VVUkx8fGUuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMb2NhdGlvblwiKTthJiYwPT09YS5pbmRleE9mKFwiL1wiKSYmKGE9KGxvY2F0aW9uLm9yaWdpbnx8bG9jYXRpb24ucHJvdG9jb2wrXCIvL1wiK2xvY2F0aW9uLmhvc3QpK2EpO3ZhciBkPWUucmVzcG9uc2V8fGUucmVzcG9uc2VUZXh0OzMwND09PWUuc3RhdHVzfHwwPT09ZS5zdGF0dXN8fDIwMDw9ZS5zdGF0dXMmJjMwMD5lLnN0YXR1cz9iKGQsYSk6YyhkKX07ZS5zZW5kKCl9ZWxzZSBjKFwiZXJyb3I6IGhyZWYgbXVzdCBiZSBzcGVjaWZpZWRcIil9fSx6PS9UcmlkZW50Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpfHxcbi9FZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7Zy5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2E9YS5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XVwiKTtsKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIuaChhKX0pfTtnLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1hLmhyZWY7aWYodm9pZCAwIT09dGhpcy5hW2NdKXt2YXIgZD10aGlzLmFbY107ZCYmZC5fX2xvYWRlZCYmKGEuaW1wb3J0PWQsdGhpcy5nKGEpKX1lbHNlIHRoaXMuYisrLHRoaXMuYVtjXT1cInBlbmRpbmdcIix2LmxvYWQoYyxmdW5jdGlvbihhLGQpe2E9Yi5tKGEsZHx8Yyk7Yi5hW2NdPWE7Yi5iLS07Yi5jKGEpO2IuaSgpfSxmdW5jdGlvbigpe2IuYVtjXT1udWxsO2IuYi0tO2IuaSgpfSl9O2cucHJvdG90eXBlLm09ZnVuY3Rpb24oYSxiKXtpZighYSlyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3omJihhPWEucmVwbGFjZSh1LFxuZnVuY3Rpb24oYSxiLGMpe3JldHVybi0xPT09YS5pbmRleE9mKFwidHlwZT1cIik/YitcIiB0eXBlPWltcG9ydC1kaXNhYmxlIFwiK2M6YX0pKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7Yy5pbm5lckhUTUw9YTtpZihjLmNvbnRlbnQpYT1jLmNvbnRlbnQ7ZWxzZSBmb3IoYT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Yy5maXJzdENoaWxkOylhLmFwcGVuZENoaWxkKGMuZmlyc3RDaGlsZCk7aWYoYz1hLnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpKWI9cC4kKGMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxiKSxjLnJlbW92ZUF0dHJpYnV0ZShcImhyZWZcIik7Yz1hLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPWltcG9ydF0sIGxpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWZdW3R5cGU9aW1wb3J0LWRpc2FibGVdLFxcbiAgICBzdHlsZTpub3QoW3R5cGVdKSwgbGlua1tyZWw9c3R5bGVzaGVldF1baHJlZl06bm90KFt0eXBlXSksXFxuICAgIHNjcmlwdDpub3QoW3R5cGVdKSwgc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCJdLFxcbiAgICBzY3JpcHRbdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXScpO1xudmFyIGQ9MDtsKGMsZnVuY3Rpb24oYSl7ayhhKTtwLlphKGEsYik7YS5zZXRBdHRyaWJ1dGUoXCJpbXBvcnQtZGVwZW5kZW5jeVwiLFwiXCIpO1wic2NyaXB0XCI9PT1hLmxvY2FsTmFtZSYmIWEuc3JjJiZhLnRleHRDb250ZW50JiYoYS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcImRhdGE6dGV4dC9qYXZhc2NyaXB0O2NoYXJzZXQ9dXRmLTgsXCIrZW5jb2RlVVJJQ29tcG9uZW50KGEudGV4dENvbnRlbnQrKFwiXFxuLy8jIHNvdXJjZVVSTD1cIitiKyhkP1wiLVwiK2Q6XCJcIikrXCIuanNcXG5cIikpKSxhLnRleHRDb250ZW50PVwiXCIsZCsrKX0pO3JldHVybiBhfTtnLnByb3RvdHlwZS5pPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztpZighdGhpcy5iKXt0aGlzLmYuZGlzY29ubmVjdCgpO3RoaXMuZmxhdHRlbihkb2N1bWVudCk7dmFyIGI9ITEsYz0hMSxkPWZ1bmN0aW9uKCl7YyYmYiYmKGEuYyhkb2N1bWVudCksYS5ifHwoYS5mLm9ic2VydmUoZG9jdW1lbnQuaGVhZCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KSxhLmooKSkpfTtcbnRoaXMucyhmdW5jdGlvbigpe2M9ITA7ZCgpfSk7dGhpcy5vKGZ1bmN0aW9uKCl7Yj0hMDtkKCl9KX19O2cucHJvdG90eXBlLmZsYXR0ZW49ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczthPWEucXVlcnlTZWxlY3RvckFsbChcImxpbmtbcmVsPWltcG9ydF1cIik7bChhLGZ1bmN0aW9uKGEpe3ZhciBjPWIuYVthLmhyZWZdOyhhLmltcG9ydD1jKSYmYy5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSYmKGIuYVthLmhyZWZdPWEsYS5yZWFkeVN0YXRlPVwibG9hZGluZ1wiLGEuaW1wb3J0PWEsYi5mbGF0dGVuKGMpLGEuYXBwZW5kQ2hpbGQoYykpfSl9O2cucHJvdG90eXBlLm89ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihlKXtpZihlPGQpe3ZhciBmPWNbZV0sZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2YucmVtb3ZlQXR0cmlidXRlKFwiaW1wb3J0LWRlcGVuZGVuY3lcIik7bChmLmF0dHJpYnV0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIGcuc2V0QXR0cmlidXRlKGEubmFtZSxcbmEudmFsdWUpfSk7bj1nO2YucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZyxmKTtrKGcsZnVuY3Rpb24oKXtuPW51bGw7YihlKzEpfSl9ZWxzZSBhKCl9dmFyIGM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdFtpbXBvcnQtZGVwZW5kZW5jeV1cIiksZD1jLmxlbmd0aDtiKDApfTtnLnByb3RvdHlwZS5zPWZ1bmN0aW9uKGEpe3ZhciBiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtpbXBvcnQtZGVwZW5kZW5jeV0sXFxuICAgIGxpbmtbcmVsPXN0eWxlc2hlZXRdW2ltcG9ydC1kZXBlbmRlbmN5XVwiKSxkPWIubGVuZ3RoO2lmKGQpe3ZhciBlPXomJiEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWZdW3R5cGU9aW1wb3J0LWRpc2FibGVdXCIpO2woYixmdW5jdGlvbihiKXtrKGIsZnVuY3Rpb24oKXtiLnJlbW92ZUF0dHJpYnV0ZShcImltcG9ydC1kZXBlbmRlbmN5XCIpOzA9PT0tLWQmJmEoKX0pO2lmKGUmJmIucGFyZW50Tm9kZSE9PVxuZG9jdW1lbnQuaGVhZCl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChiLmxvY2FsTmFtZSk7Zi5fX2FwcGxpZWRFbGVtZW50PWI7Zi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJpbXBvcnQtcGxhY2Vob2xkZXJcIik7Yi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmLGIubmV4dFNpYmxpbmcpO2ZvcihmPWMoYik7ZiYmYyhmKTspZj1jKGYpO2YucGFyZW50Tm9kZSE9PWRvY3VtZW50LmhlYWQmJihmPW51bGwpO2RvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGIsZik7Yi5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpfX0pfWVsc2UgYSgpfTtnLnByb3RvdHlwZS5qPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2woYixmdW5jdGlvbihiKXtyZXR1cm4gYS5nKGIpfSwhMCl9O2cucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7YS5fX2xvYWRlZHx8KGEuX19sb2FkZWQ9ITAsYS5pbXBvcnQmJihhLmltcG9ydC5yZWFkeVN0YXRlPVxuXCJjb21wbGV0ZVwiKSxhLmRpc3BhdGNoRXZlbnQoYihhLmltcG9ydD9cImxvYWRcIjpcImVycm9yXCIse2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfSkpKX07Zy5wcm90b3R5cGUubD1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2woYSxmdW5jdGlvbihhKXtyZXR1cm4gbChhLmFkZGVkTm9kZXMsZnVuY3Rpb24oYSl7YSYmYS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiYoaChhKT9iLmgoYSk6Yi5jKGEpKX0pfSl9O2lmKG0pe3ZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2woeCxmdW5jdGlvbihhKXthLmltcG9ydCYmXCJsb2FkaW5nXCI9PT1hLmltcG9ydC5yZWFkeVN0YXRlfHwoYS5fX2xvYWRlZD0hMCl9KTt4PWZ1bmN0aW9uKGEpe2E9YS50YXJnZXQ7aChhKSYmKGEuX19sb2FkZWQ9ITApfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLHgsITApO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLFxueCwhMCl9ZWxzZXt2YXIgeT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLFwiYmFzZVVSSVwiKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoKCF5fHx5LmNvbmZpZ3VyYWJsZT9Ob2RlOkVsZW1lbnQpLnByb3RvdHlwZSxcImJhc2VVUklcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9aCh0aGlzKT90aGlzOmModGhpcyk7cmV0dXJuIGE/YS5ocmVmOnkmJnkuZ2V0P3kuZ2V0LmNhbGwodGhpcyk6KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpfHx3aW5kb3cubG9jYXRpb24pLmhyZWZ9LGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwfSk7ZShmdW5jdGlvbigpe3JldHVybiBuZXcgZ30pfWYoZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChiKFwiSFRNTEltcG9ydHNMb2FkZWRcIix7Y2FuY2VsYWJsZTohMCxidWJibGVzOiEwLGRldGFpbDp2b2lkIDB9KSl9KTthLnVzZU5hdGl2ZT1tO2Eud2hlblJlYWR5PWY7YS5pbXBvcnRGb3JFbGVtZW50PVxuY30pKHdpbmRvdy5IVE1MSW1wb3J0cz13aW5kb3cuSFRNTEltcG9ydHN8fHt9KTt2YXIgRT13aW5kb3cuU2hhZHlET018fHt9O0UuJGE9ISghRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93fHwhTm9kZS5wcm90b3R5cGUuZ2V0Um9vdE5vZGUpO3ZhciBoYj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLFwiZmlyc3RDaGlsZFwiKTtFLlM9ISEoaGImJmhiLmNvbmZpZ3VyYWJsZSYmaGIuZ2V0KTtFLnphPUUuZm9yY2V8fCFFLiRhO3ZhciBYPUVsZW1lbnQucHJvdG90eXBlLE1jPVgubWF0Y2hlc3x8WC5tYXRjaGVzU2VsZWN0b3J8fFgubW96TWF0Y2hlc1NlbGVjdG9yfHxYLm1zTWF0Y2hlc1NlbGVjdG9yfHxYLm9NYXRjaGVzU2VsZWN0b3J8fFgud2Via2l0TWF0Y2hlc1NlbGVjdG9yLFBhPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpLExiPTAsT2E9W107KG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCl7Zm9yKDtPYS5sZW5ndGg7KXRyeXtPYS5zaGlmdCgpKCl9Y2F0Y2goYSl7dGhyb3cgUGEudGV4dENvbnRlbnQ9XG5MYisrLGE7fX0pKS5vYnNlcnZlKFBhLHtjaGFyYWN0ZXJEYXRhOiEwfSk7dmFyIFZkPSEhZG9jdW1lbnQuY29udGFpbnMsYWE9W10sUWE7bWEubGlzdD1hYTtsYS5wcm90b3R5cGUuaGI9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3RoaXMuYXx8KHRoaXMuYT0hMCxLYihmdW5jdGlvbigpe2EuYigpfSkpfTtsYS5wcm90b3R5cGUuYj1mdW5jdGlvbigpe2lmKHRoaXMuYSl7dGhpcy5hPSExO3ZhciBhPXRoaXMudGFrZVJlY29yZHMoKTthLmxlbmd0aCYmdGhpcy5YLmZvckVhY2goZnVuY3Rpb24oYil7YihhKX0pfX07bGEucHJvdG90eXBlLnRha2VSZWNvcmRzPWZ1bmN0aW9uKCl7aWYodGhpcy5hZGRlZE5vZGVzLmxlbmd0aHx8dGhpcy5yZW1vdmVkTm9kZXMubGVuZ3RoKXt2YXIgYT1be2FkZGVkTm9kZXM6dGhpcy5hZGRlZE5vZGVzLHJlbW92ZWROb2Rlczp0aGlzLnJlbW92ZWROb2Rlc31dO3RoaXMuYWRkZWROb2Rlcz1bXTt0aGlzLnJlbW92ZWROb2Rlcz1bXTtyZXR1cm4gYX1yZXR1cm5bXX07XG52YXIgY2M9RWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGQsWGE9RWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlLGJhPUVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNoaWxkLGtjPUVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSxOYz1FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsaWI9RWxlbWVudC5wcm90b3R5cGUuY2xvbmVOb2RlLFlhPURvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlLHNjPUVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIsdmM9RWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcixyYz1XaW5kb3cucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIsdWM9V2luZG93LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLGpiPUVsZW1lbnQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQsY2E9Tm9kZS5wcm90b3R5cGUuY29udGFpbnN8fEhUTUxFbGVtZW50LnByb3RvdHlwZS5jb250YWlucyxXZD1PYmplY3QuZnJlZXplKHthcHBlbmRDaGlsZDpjYyxcbmluc2VydEJlZm9yZTpYYSxyZW1vdmVDaGlsZDpiYSxzZXRBdHRyaWJ1dGU6a2MscmVtb3ZlQXR0cmlidXRlOk5jLGNsb25lTm9kZTppYixpbXBvcnROb2RlOllhLGFkZEV2ZW50TGlzdGVuZXI6c2MscmVtb3ZlRXZlbnRMaXN0ZW5lcjp2YyxyYjpyYyxzYjp1YyxkaXNwYXRjaEV2ZW50OmpiLHF1ZXJ5U2VsZWN0b3I6RWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvcixxdWVyeVNlbGVjdG9yQWxsOkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwsY29udGFpbnM6Y2F9KSxDZD0vWyZcXHUwMEEwXCJdL2csRmQ9L1smXFx1MDBBMDw+XS9nLERkPVBiKFwiYXJlYSBiYXNlIGJyIGNvbCBjb21tYW5kIGVtYmVkIGhyIGltZyBpbnB1dCBrZXlnZW4gbGluayBtZXRhIHBhcmFtIHNvdXJjZSB0cmFjayB3YnJcIi5zcGxpdChcIiBcIikpLEVkPVBiKFwic3R5bGUgc2NyaXB0IHhtcCBpZnJhbWUgbm9lbWJlZCBub2ZyYW1lcyBwbGFpbnRleHQgbm9zY3JpcHRcIi5zcGxpdChcIiBcIikpLEM9ZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihkb2N1bWVudCxcbk5vZGVGaWx0ZXIuU0hPV19BTEwsbnVsbCwhMSksRD1kb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGRvY3VtZW50LE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULG51bGwsITEpLFhkPU9iamVjdC5mcmVlemUoe3BhcmVudE5vZGU6VSxmaXJzdENoaWxkOkthLGxhc3RDaGlsZDpMYSxwcmV2aW91c1NpYmxpbmc6UWIsbmV4dFNpYmxpbmc6UmIsY2hpbGROb2RlczpTLHBhcmVudEVsZW1lbnQ6U2IsZmlyc3RFbGVtZW50Q2hpbGQ6VGIsbGFzdEVsZW1lbnRDaGlsZDpVYixwcmV2aW91c0VsZW1lbnRTaWJsaW5nOlZiLG5leHRFbGVtZW50U2libGluZzpXYixjaGlsZHJlbjpYYixpbm5lckhUTUw6WWIsdGV4dENvbnRlbnQ6WmJ9KSxrYj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpfHxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSxzYT1kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJpbmVydFwiKS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxubGI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihEb2N1bWVudC5wcm90b3R5cGUsXCJhY3RpdmVFbGVtZW50XCIpLCRiPXtwYXJlbnRFbGVtZW50OntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5wYXJlbnROb2RlO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERSYmKGE9bnVsbCk7cmV0dXJuIHZvaWQgMCE9PWE/YTpTYih0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxwYXJlbnROb2RlOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5wYXJlbnROb2RlO3JldHVybiB2b2lkIDAhPT1hP2E6VSh0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxuZXh0U2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkubmV4dFNpYmxpbmc7cmV0dXJuIHZvaWQgMCE9PWE/YTpSYih0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxwcmV2aW91c1NpYmxpbmc6e2dldDpmdW5jdGlvbigpe3ZhciBhPVxudGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nO3JldHVybiB2b2lkIDAhPT1hP2E6UWIodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sY2xhc3NOYW1lOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn0sc2V0OmZ1bmN0aW9uKGEpe3RoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX0sY29uZmlndXJhYmxlOiEwfSxuZXh0RWxlbWVudFNpYmxpbmc6e2dldDpmdW5jdGlvbigpe2lmKHRoaXMuX19zaGFkeSYmdm9pZCAwIT09dGhpcy5fX3NoYWR5Lm5leHRTaWJsaW5nKXtmb3IodmFyIGE9dGhpcy5uZXh0U2libGluZzthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX1yZXR1cm4gV2IodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0scHJldmlvdXNFbGVtZW50U2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7aWYodGhpcy5fX3NoYWR5JiZ2b2lkIDAhPT10aGlzLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nKXtmb3IodmFyIGE9XG50aGlzLnByZXZpb3VzU2libGluZzthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5wcmV2aW91c1NpYmxpbmc7cmV0dXJuIGF9cmV0dXJuIFZiKHRoaXMpfSxjb25maWd1cmFibGU6ITB9fSxTYT17Y2hpbGROb2Rlczp7Z2V0OmZ1bmN0aW9uKCl7aWYoVCh0aGlzKSl7aWYoIXRoaXMuX19zaGFkeS5jaGlsZE5vZGVzKXt0aGlzLl9fc2hhZHkuY2hpbGROb2Rlcz1bXTtmb3IodmFyIGE9dGhpcy5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKXRoaXMuX19zaGFkeS5jaGlsZE5vZGVzLnB1c2goYSl9dmFyIGI9dGhpcy5fX3NoYWR5LmNoaWxkTm9kZXN9ZWxzZSBiPVModGhpcyk7Yi5pdGVtPWZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfTtyZXR1cm4gYn0sY29uZmlndXJhYmxlOiEwfSxjaGlsZEVsZW1lbnRDb3VudDp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RofSxjb25maWd1cmFibGU6ITB9LGZpcnN0Q2hpbGQ6e2dldDpmdW5jdGlvbigpe3ZhciBhPVxudGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkuZmlyc3RDaGlsZDtyZXR1cm4gdm9pZCAwIT09YT9hOkthKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LGxhc3RDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkubGFzdENoaWxkO3JldHVybiB2b2lkIDAhPT1hP2E6TGEodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sdGV4dENvbnRlbnQ6e2dldDpmdW5jdGlvbigpe2lmKFQodGhpcykpe2Zvcih2YXIgYT1bXSxiPTAsYz10aGlzLmNoaWxkTm9kZXMsZDtkPWNbYl07YisrKWQubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERSYmYS5wdXNoKGQudGV4dENvbnRlbnQpO3JldHVybiBhLmpvaW4oXCJcIil9cmV0dXJuIFpiKHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYSl7c3dpdGNoKHRoaXMubm9kZVR5cGUpe2Nhc2UgTm9kZS5FTEVNRU5UX05PREU6Y2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6Zm9yKDt0aGlzLmZpcnN0Q2hpbGQ7KXRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTtcbigwPGEubGVuZ3RofHx0aGlzLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpJiZ0aGlzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTticmVhaztkZWZhdWx0OnRoaXMubm9kZVZhbHVlPWF9fSxjb25maWd1cmFibGU6ITB9LGZpcnN0RWxlbWVudENoaWxkOntnZXQ6ZnVuY3Rpb24oKXtpZih0aGlzLl9fc2hhZHkmJnZvaWQgMCE9PXRoaXMuX19zaGFkeS5maXJzdENoaWxkKXtmb3IodmFyIGE9dGhpcy5maXJzdENoaWxkO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLm5leHRTaWJsaW5nO3JldHVybiBhfXJldHVybiBUYih0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxsYXN0RWxlbWVudENoaWxkOntnZXQ6ZnVuY3Rpb24oKXtpZih0aGlzLl9fc2hhZHkmJnZvaWQgMCE9PXRoaXMuX19zaGFkeS5sYXN0Q2hpbGQpe2Zvcih2YXIgYT10aGlzLmxhc3RDaGlsZDthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5wcmV2aW91c1NpYmxpbmc7XG5yZXR1cm4gYX1yZXR1cm4gVWIodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sY2hpbGRyZW46e2dldDpmdW5jdGlvbigpe3ZhciBhO1QodGhpcyk/YT1BcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwodGhpcy5jaGlsZE5vZGVzLGZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREV9KTphPVhiKHRoaXMpO2EuaXRlbT1mdW5jdGlvbihiKXtyZXR1cm4gYVtiXX07cmV0dXJuIGF9LGNvbmZpZ3VyYWJsZTohMH0saW5uZXJIVE1MOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT90aGlzLmNvbnRlbnQ6dGhpcztyZXR1cm4gVCh0aGlzKT9SYShhKTpZYihhKX0sc2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT90aGlzLmNvbnRlbnQ6dGhpcztiLmZpcnN0Q2hpbGQ7KWIucmVtb3ZlQ2hpbGQoYi5maXJzdENoaWxkKTtmb3Ioa2ImJmtiLnNldD9rYi5zZXQuY2FsbChzYSxhKTpcbnNhLmlubmVySFRNTD1hO3NhLmZpcnN0Q2hpbGQ7KWIuYXBwZW5kQ2hpbGQoc2EuZmlyc3RDaGlsZCl9LGNvbmZpZ3VyYWJsZTohMH19LE9jPXtzaGFkb3dSb290OntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkuZmJ8fG51bGx9LGNvbmZpZ3VyYWJsZTohMH19LFRhPXthY3RpdmVFbGVtZW50OntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1sYiYmbGIuZ2V0P2xiLmdldC5jYWxsKGRvY3VtZW50KTpFLlM/dm9pZCAwOmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7aWYoYSYmYS5ub2RlVHlwZSl7dmFyIGI9ISFHKHRoaXMpO2lmKHRoaXM9PT1kb2N1bWVudHx8YiYmdGhpcy5ob3N0IT09YSYmY2EuY2FsbCh0aGlzLmhvc3QsYSkpe2ZvcihiPVooYSk7YiYmYiE9PXRoaXM7KWE9Yi5ob3N0LGI9WihhKTthPXRoaXM9PT1kb2N1bWVudD9iP251bGw6YTpiPT09dGhpcz9hOm51bGx9ZWxzZSBhPW51bGx9ZWxzZSBhPW51bGw7cmV0dXJuIGF9LHNldDpmdW5jdGlvbigpe30sXG5jb25maWd1cmFibGU6ITB9fSxKYj1FLlM/ZnVuY3Rpb24oKXt9OmZ1bmN0aW9uKGEpe2EuX19zaGFkeSYmYS5fX3NoYWR5Lk5hfHwoYS5fX3NoYWR5PWEuX19zaGFkeXx8e30sYS5fX3NoYWR5Lk5hPSEwLEsoYSwkYiwhMCkpfSxJYj1FLlM/ZnVuY3Rpb24oKXt9OmZ1bmN0aW9uKGEpe2EuX19zaGFkeSYmYS5fX3NoYWR5LkxhfHwoYS5fX3NoYWR5PWEuX19zaGFkeXx8e30sYS5fX3NoYWR5LkxhPSEwLEsoYSxTYSwhMCksSyhhLE9jLCEwKSl9LG9hPW51bGwsZGE9XCJfX2V2ZW50V3JhcHBlcnNcIitEYXRlLm5vdygpLFlkPXtibHVyOiEwLGZvY3VzOiEwLGZvY3VzaW46ITAsZm9jdXNvdXQ6ITAsY2xpY2s6ITAsZGJsY2xpY2s6ITAsbW91c2Vkb3duOiEwLG1vdXNlZW50ZXI6ITAsbW91c2VsZWF2ZTohMCxtb3VzZW1vdmU6ITAsbW91c2VvdXQ6ITAsbW91c2VvdmVyOiEwLG1vdXNldXA6ITAsd2hlZWw6ITAsYmVmb3JlaW5wdXQ6ITAsaW5wdXQ6ITAsa2V5ZG93bjohMCxrZXl1cDohMCxjb21wb3NpdGlvbnN0YXJ0OiEwLFxuY29tcG9zaXRpb251cGRhdGU6ITAsY29tcG9zaXRpb25lbmQ6ITAsdG91Y2hzdGFydDohMCx0b3VjaGVuZDohMCx0b3VjaG1vdmU6ITAsdG91Y2hjYW5jZWw6ITAscG9pbnRlcm92ZXI6ITAscG9pbnRlcmVudGVyOiEwLHBvaW50ZXJkb3duOiEwLHBvaW50ZXJtb3ZlOiEwLHBvaW50ZXJ1cDohMCxwb2ludGVyY2FuY2VsOiEwLHBvaW50ZXJvdXQ6ITAscG9pbnRlcmxlYXZlOiEwLGdvdHBvaW50ZXJjYXB0dXJlOiEwLGxvc3Rwb2ludGVyY2FwdHVyZTohMCxkcmFnc3RhcnQ6ITAsZHJhZzohMCxkcmFnZW50ZXI6ITAsZHJhZ2xlYXZlOiEwLGRyYWdvdmVyOiEwLGRyb3A6ITAsZHJhZ2VuZDohMCxET01BY3RpdmF0ZTohMCxET01Gb2N1c0luOiEwLERPTUZvY3VzT3V0OiEwLGtleXByZXNzOiEwfSx3Yz17Z2V0IGNvbXBvc2VkKCl7ITEhPT10aGlzLmlzVHJ1c3RlZCYmdm9pZCAwPT09dGhpcy5lYSYmKHRoaXMuZWE9WWRbdGhpcy50eXBlXSk7cmV0dXJuIHRoaXMuZWF8fCExfSxjb21wb3NlZFBhdGg6ZnVuY3Rpb24oKXt0aGlzLnFhfHxcbih0aGlzLnFhPVphKHRoaXMuX190YXJnZXQsdGhpcy5jb21wb3NlZCkpO3JldHVybiB0aGlzLnFhfSxnZXQgdGFyZ2V0KCl7cmV0dXJuIG1jKHRoaXMuY3VycmVudFRhcmdldCx0aGlzLmNvbXBvc2VkUGF0aCgpKX0sZ2V0IHJlbGF0ZWRUYXJnZXQoKXtpZighdGhpcy5yYSlyZXR1cm4gbnVsbDt0aGlzLnNhfHwodGhpcy5zYT1aYSh0aGlzLnJhLCEwKSk7cmV0dXJuIG1jKHRoaXMuY3VycmVudFRhcmdldCx0aGlzLnNhKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7RXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbi5jYWxsKHRoaXMpO3RoaXMuZmE9ITB9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe0V2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24uY2FsbCh0aGlzKTt0aGlzLmZhPXRoaXMuS2E9ITB9fSxhYj17Zm9jdXM6ITAsYmx1cjohMH0sWmQ9JGEod2luZG93LkV2ZW50KSwkZD0kYSh3aW5kb3cuQ3VzdG9tRXZlbnQpLGFlPVxuJGEod2luZG93Lk1vdXNlRXZlbnQpLEhiPXt9O2wucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUpO2wucHJvdG90eXBlLkY9ZnVuY3Rpb24oYSxiKXt0aGlzLk1hPVwiU2hhZHlSb290XCI7a2EoYSk7a2EodGhpcyk7dGhpcy5ob3N0PWE7dGhpcy5IPWImJmIubW9kZTthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTthLl9fc2hhZHkucm9vdD10aGlzO2EuX19zaGFkeS5mYj1cImNsb3NlZFwiIT09dGhpcy5IP3RoaXM6bnVsbDt0aGlzLlA9ITE7dGhpcy5iPVtdO3RoaXMuYT17fTt0aGlzLmM9W107Yj1TKGEpO2Zvcih2YXIgYz0wLGQ9Yi5sZW5ndGg7YzxkO2MrKyliYS5jYWxsKGEsYltjXSl9O2wucHJvdG90eXBlLkw9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3RoaXMuUHx8KHRoaXMuUD0hMCxOYihmdW5jdGlvbigpe3JldHVybiBhLnZhKCl9KSl9O2wucHJvdG90eXBlLks9ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcyxiPXRoaXM7YjspYi5QJiYoYT1iKSxcbmI9Yi5VYSgpO3JldHVybiBhfTtsLnByb3RvdHlwZS5VYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuaG9zdC5nZXRSb290Tm9kZSgpO2lmKEcoYSkpZm9yKHZhciBiPXRoaXMuaG9zdC5jaGlsZE5vZGVzLGM9MCxkO2M8Yi5sZW5ndGg7YysrKWlmKGQ9YltjXSx0aGlzLmooZCkpcmV0dXJuIGF9O2wucHJvdG90eXBlLnZhPWZ1bmN0aW9uKCl7dGhpcy5QJiZ0aGlzLksoKS5fcmVuZGVyUm9vdCgpfTtsLnByb3RvdHlwZS5fcmVuZGVyUm9vdD1mdW5jdGlvbigpe3RoaXMuUD0hMTt0aGlzLkIoKTt0aGlzLnMoKX07bC5wcm90b3R5cGUuQj1mdW5jdGlvbigpe3RoaXMuZigpO2Zvcih2YXIgYT0wLGI7YTx0aGlzLmIubGVuZ3RoO2ErKyliPXRoaXMuYlthXSx0aGlzLm8oYik7Zm9yKGI9dGhpcy5ob3N0LmZpcnN0Q2hpbGQ7YjtiPWIubmV4dFNpYmxpbmcpdGhpcy5oKGIpO2ZvcihhPTA7YTx0aGlzLmIubGVuZ3RoO2ErKyl7Yj10aGlzLmJbYV07aWYoIWIuX19zaGFkeS5hc3NpZ25lZE5vZGVzLmxlbmd0aClmb3IodmFyIGM9XG5iLmZpcnN0Q2hpbGQ7YztjPWMubmV4dFNpYmxpbmcpdGhpcy5oKGMsYik7Yz1iLnBhcmVudE5vZGU7KGM9Yy5fX3NoYWR5JiZjLl9fc2hhZHkucm9vdCkmJmMudGEoKSYmYy5fcmVuZGVyUm9vdCgpO3RoaXMuZyhiLl9fc2hhZHkuUixiLl9fc2hhZHkuYXNzaWduZWROb2Rlcyk7aWYoYz1iLl9fc2hhZHkudWEpe2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKWNbZF0uX19zaGFkeS5pYT1udWxsO2IuX19zaGFkeS51YT1udWxsO2MubGVuZ3RoPmIuX19zaGFkeS5hc3NpZ25lZE5vZGVzLmxlbmd0aCYmKGIuX19zaGFkeS5rYT0hMCl9Yi5fX3NoYWR5LmthJiYoYi5fX3NoYWR5LmthPSExLHRoaXMuaShiKSl9fTtsLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEsYil7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307dmFyIGM9YS5fX3NoYWR5LmlhO2EuX19zaGFkeS5pYT1udWxsO2J8fChiPShiPXRoaXMuYVthLnNsb3R8fFwiX19jYXRjaGFsbFwiXSkmJmJbMF0pO2I/KGIuX19zaGFkeS5hc3NpZ25lZE5vZGVzLnB1c2goYSksXG5hLl9fc2hhZHkuYXNzaWduZWRTbG90PWIpOmEuX19zaGFkeS5hc3NpZ25lZFNsb3Q9dm9pZCAwO2MhPT1hLl9fc2hhZHkuYXNzaWduZWRTbG90JiZhLl9fc2hhZHkuYXNzaWduZWRTbG90JiYoYS5fX3NoYWR5LmFzc2lnbmVkU2xvdC5fX3NoYWR5LmthPSEwKX07bC5wcm90b3R5cGUubz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fc2hhZHkuYXNzaWduZWROb2RlczthLl9fc2hhZHkuYXNzaWduZWROb2Rlcz1bXTthLl9fc2hhZHkuUj1bXTtpZihhLl9fc2hhZHkudWE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXTtkLl9fc2hhZHkuaWE9ZC5fX3NoYWR5LmFzc2lnbmVkU2xvdDtkLl9fc2hhZHkuYXNzaWduZWRTbG90PT09YSYmKGQuX19zaGFkeS5hc3NpZ25lZFNsb3Q9bnVsbCl9fTtsLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZDtjPGIubGVuZ3RoJiYoZD1iW2NdKTtjKyspXCJzbG90XCI9PWQubG9jYWxOYW1lP3RoaXMuZyhhLGQuX19zaGFkeS5hc3NpZ25lZE5vZGVzKTpcbmEucHVzaChiW2NdKX07bC5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXtqYi5jYWxsKGEsbmV3IEV2ZW50KFwic2xvdGNoYW5nZVwiKSk7YS5fX3NoYWR5LmFzc2lnbmVkU2xvdCYmdGhpcy5pKGEuX19zaGFkeS5hc3NpZ25lZFNsb3QpfTtsLnByb3RvdHlwZS5zPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMuYixiPVtdLGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXS5wYXJlbnROb2RlO2QuX19zaGFkeSYmZC5fX3NoYWR5LnJvb3R8fCEoMD5iLmluZGV4T2YoZCkpfHxiLnB1c2goZCl9Zm9yKGE9MDthPGIubGVuZ3RoO2ErKyljPWJbYV0sdGhpcy5PKGM9PT10aGlzP3RoaXMuaG9zdDpjLHRoaXMudyhjKSl9O2wucHJvdG90eXBlLnc9ZnVuY3Rpb24oYSl7dmFyIGI9W107YT1hLmNoaWxkTm9kZXM7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY107aWYodGhpcy5qKGQpKXtkPWQuX19zaGFkeS5SO2Zvcih2YXIgZT0wO2U8ZC5sZW5ndGg7ZSsrKWIucHVzaChkW2VdKX1lbHNlIGIucHVzaChkKX1yZXR1cm4gYn07XG5sLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEpe3JldHVyblwic2xvdFwiPT1hLmxvY2FsTmFtZX07bC5wcm90b3R5cGUuTz1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1TKGEpLGQ9SWQoYixiLmxlbmd0aCxjLGMubGVuZ3RoKSxlPTAsZj0wLGs7ZTxkLmxlbmd0aCYmKGs9ZFtlXSk7ZSsrKXtmb3IodmFyIGc9MCxsO2c8ay5VLmxlbmd0aCYmKGw9ay5VW2ddKTtnKyspVShsKT09PWEmJmJhLmNhbGwoYSxsKSxjLnNwbGljZShrLmluZGV4K2YsMSk7Zi09ay5XfWZvcihlPTA7ZTxkLmxlbmd0aCYmKGs9ZFtlXSk7ZSsrKWZvcihmPWNbay5pbmRleF0sZz1rLmluZGV4O2c8ay5pbmRleCtrLlc7ZysrKWw9YltnXSxYYS5jYWxsKGEsbCxmKSxjLnNwbGljZShnLDAsbCl9O2wucHJvdG90eXBlLlFhPWZ1bmN0aW9uKGEpe3RoaXMuYy5wdXNoLmFwcGx5KHRoaXMuYyxbXS5jb25jYXQoYSBpbnN0YW5jZW9mIEFycmF5P2E6aGQoZ2QoYSkpKSl9O2wucHJvdG90eXBlLmY9ZnVuY3Rpb24oKXt0aGlzLmMubGVuZ3RoJiZcbih0aGlzLkcodGhpcy5jKSx0aGlzLmM9W10pfTtsLnByb3RvdHlwZS5HPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY107ZC5fX3NoYWR5PWQuX19zaGFkeXx8e307a2EoZCk7a2EoZC5wYXJlbnROb2RlKTt2YXIgZT10aGlzLmwoZCk7dGhpcy5hW2VdPyhiPWJ8fHt9LGJbZV09ITAsdGhpcy5hW2VdLnB1c2goZCkpOnRoaXMuYVtlXT1bZF07dGhpcy5iLnB1c2goZCl9aWYoYilmb3IodmFyIGYgaW4gYil0aGlzLmFbZl09dGhpcy5tKHRoaXMuYVtmXSl9O2wucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSl7dmFyIGI9YS5uYW1lfHxhLmdldEF0dHJpYnV0ZShcIm5hbWVcIil8fFwiX19jYXRjaGFsbFwiO3JldHVybiBhLk9hPWJ9O2wucHJvdG90eXBlLm09ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc29ydChmdW5jdGlvbihhLGMpe2E9eGMoYSk7Zm9yKHZhciBiPXhjKGMpLGU9MDtlPGEubGVuZ3RoO2UrKyl7Yz1hW2VdO3ZhciBmPWJbZV07aWYoYyE9PWYpcmV0dXJuIGE9XG5BcnJheS5mcm9tKGMucGFyZW50Tm9kZS5jaGlsZE5vZGVzKSxhLmluZGV4T2YoYyktYS5pbmRleE9mKGYpfX0pfTtsLnByb3RvdHlwZS5UYT1mdW5jdGlvbihhKXt0aGlzLmYoKTt2YXIgYj10aGlzLmEsYztmb3IoYyBpbiBiKWZvcih2YXIgZD1iW2NdLGU9MDtlPGQubGVuZ3RoO2UrKyl7dmFyIGY9ZFtlXTtpZihNYihhLGYpKXtkLnNwbGljZShlLDEpO3ZhciBrPXRoaXMuYi5pbmRleE9mKGYpOzA8PWsmJnRoaXMuYi5zcGxpY2UoaywxKTtlLS07dGhpcy5JKGYpO2s9ITB9fXJldHVybiBrfTtsLnByb3RvdHlwZS5WYT1mdW5jdGlvbihhKXt2YXIgYj1hLk9hLGM9dGhpcy5sKGEpO2lmKGMhPT1iKXtiPXRoaXMuYVtiXTt2YXIgZD1iLmluZGV4T2YoYSk7MDw9ZCYmYi5zcGxpY2UoZCwxKTtiPXRoaXMuYVtjXXx8KHRoaXMuYVtjXT1bXSk7Yi5wdXNoKGEpOzE8Yi5sZW5ndGgmJih0aGlzLmFbY109dGhpcy5tKGIpKX19O2wucHJvdG90eXBlLkk9ZnVuY3Rpb24oYSl7aWYoYT1hLl9fc2hhZHkuUilmb3IodmFyIGI9XG4wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdLGQ9VShjKTtkJiZiYS5jYWxsKGQsYyl9fTtsLnByb3RvdHlwZS50YT1mdW5jdGlvbigpe3RoaXMuZigpO3JldHVybiEhdGhpcy5iLmxlbmd0aH07bC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyl7XCJvYmplY3RcIiE9PXR5cGVvZiBjJiYoYz17Y2FwdHVyZTohIWN9KTtjLmdhPXRoaXM7dGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoYSxiLGMpfTtsLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXtcIm9iamVjdFwiIT09dHlwZW9mIGMmJihjPXtjYXB0dXJlOiEhY30pO2MuZ2E9dGhpczt0aGlzLmhvc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyl9O2wucHJvdG90eXBlLmdldEVsZW1lbnRCeUlkPWZ1bmN0aW9uKGEpe3JldHVybiBuYSh0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBiLmlkPT1hfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH07KGZ1bmN0aW9uKGEpe0soYSxcblNhLCEwKTtLKGEsVGEsITApfSkobC5wcm90b3R5cGUpO3ZhciBNZD17YWRkRXZlbnRMaXN0ZW5lcjpwYy5iaW5kKHdpbmRvdykscmVtb3ZlRXZlbnRMaXN0ZW5lcjp0Yy5iaW5kKHdpbmRvdyl9LExkPXthZGRFdmVudExpc3RlbmVyOnBjLHJlbW92ZUV2ZW50TGlzdGVuZXI6dGMsYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFVhKHRoaXMsYSl9LGluc2VydEJlZm9yZTpmdW5jdGlvbihhLGIpe3JldHVybiBVYSh0aGlzLGEsYil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKGEpe3JldHVybiBWYSh0aGlzLGEpfSxyZXBsYWNlQ2hpbGQ6ZnVuY3Rpb24oYSxiKXtVYSh0aGlzLGEsYik7VmEodGhpcyxiKTtyZXR1cm4gYX0sY2xvbmVOb2RlOmZ1bmN0aW9uKGEpe2lmKFwidGVtcGxhdGVcIj09dGhpcy5sb2NhbE5hbWUpdmFyIGI9aWIuY2FsbCh0aGlzLGEpO2Vsc2UgaWYoYj1pYi5jYWxsKHRoaXMsITEpLGEpe2E9dGhpcy5jaGlsZE5vZGVzO2Zvcih2YXIgYz0wLGQ7YzxhLmxlbmd0aDtjKyspZD1cbmFbY10uY2xvbmVOb2RlKCEwKSxiLmFwcGVuZENoaWxkKGQpfXJldHVybiBifSxnZXRSb290Tm9kZTpmdW5jdGlvbigpe3JldHVybiBnYyh0aGlzKX0sY29udGFpbnM6ZnVuY3Rpb24oYSl7cmV0dXJuIE1iKHRoaXMsYSl9LGdldCBpc0Nvbm5lY3RlZCgpe3ZhciBhPXRoaXMub3duZXJEb2N1bWVudDtpZihWZCYmY2EuY2FsbChhLHRoaXMpfHxhLmRvY3VtZW50RWxlbWVudCYmY2EuY2FsbChhLmRvY3VtZW50RWxlbWVudCx0aGlzKSlyZXR1cm4hMDtmb3IoYT10aGlzO2EmJiEoYSBpbnN0YW5jZW9mIERvY3VtZW50KTspYT1hLnBhcmVudE5vZGV8fChhIGluc3RhbmNlb2YgbD9hLmhvc3Q6dm9pZCAwKTtyZXR1cm4hIShhJiZhIGluc3RhbmNlb2YgRG9jdW1lbnQpfSxkaXNwYXRjaEV2ZW50OmZ1bmN0aW9uKGEpe21hKCk7cmV0dXJuIGpiLmNhbGwodGhpcyxhKX19LE5kPXtnZXQgYXNzaWduZWRTbG90KCl7cmV0dXJuIHljKHRoaXMpfX0sYmI9e3F1ZXJ5U2VsZWN0b3I6ZnVuY3Rpb24oYSl7cmV0dXJuIG5hKHRoaXMsXG5mdW5jdGlvbihiKXtyZXR1cm4gTWMuY2FsbChiLGEpfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH0scXVlcnlTZWxlY3RvckFsbDpmdW5jdGlvbihhKXtyZXR1cm4gbmEodGhpcyxmdW5jdGlvbihiKXtyZXR1cm4gTWMuY2FsbChiLGEpfSl9fSxCYz17YXNzaWduZWROb2RlczpmdW5jdGlvbihhKXtpZihcInNsb3RcIj09PXRoaXMubG9jYWxOYW1lKXJldHVybiBpYyh0aGlzKSx0aGlzLl9fc2hhZHk/KGEmJmEuZmxhdHRlbj90aGlzLl9fc2hhZHkuUjp0aGlzLl9fc2hhZHkuYXNzaWduZWROb2Rlcyl8fFtdOltdfX0semM9TmEoe3NldEF0dHJpYnV0ZTpmdW5jdGlvbihhLGIpe2pjKHRoaXMsYSxiKX0scmVtb3ZlQXR0cmlidXRlOmZ1bmN0aW9uKGEpe05jLmNhbGwodGhpcyxhKTtmYyh0aGlzLGEpfSxhdHRhY2hTaGFkb3c6ZnVuY3Rpb24oYSl7aWYoIXRoaXMpdGhyb3dcIk11c3QgcHJvdmlkZSBhIGhvc3QuXCI7aWYoIWEpdGhyb3dcIk5vdCBlbm91Z2ggYXJndW1lbnRzLlwiO3JldHVybiBuZXcgbChIYixcbnRoaXMsYSl9LGdldCBzbG90KCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwic2xvdFwiKX0sc2V0IHNsb3QoYSl7amModGhpcyxcInNsb3RcIixhKX0sZ2V0IGFzc2lnbmVkU2xvdCgpe3JldHVybiB5Yyh0aGlzKX19LGJiLEJjKTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyh6YyxPYyk7dmFyIEFjPU5hKHtpbXBvcnROb2RlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGxjKGEsYil9LGdldEVsZW1lbnRCeUlkOmZ1bmN0aW9uKGEpe3JldHVybiBuYSh0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBiLmlkPT1hfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH19LGJiKTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhBYyx7X2FjdGl2ZUVsZW1lbnQ6VGEuYWN0aXZlRWxlbWVudH0pO3ZhciBiZT1IVE1MRWxlbWVudC5wcm90b3R5cGUuYmx1cixPZD1OYSh7Ymx1cjpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5LnJvb3Q7KGE9YSYmYS5hY3RpdmVFbGVtZW50KT9cbmEuYmx1cigpOmJlLmNhbGwodGhpcyl9fSk7RS56YSYmKHdpbmRvdy5TaGFkeURPTT17aW5Vc2U6RS56YSxwYXRjaDpmdW5jdGlvbihhKXtyZXR1cm4gYX0saXNTaGFkeVJvb3Q6RyxlbnF1ZXVlOk5iLGZsdXNoOm1hLHNldHRpbmdzOkUsZmlsdGVyTXV0YXRpb25zOkJkLG9ic2VydmVDaGlsZHJlbjp6ZCx1bm9ic2VydmVDaGlsZHJlbjp5ZCxuYXRpdmVNZXRob2RzOldkLG5hdGl2ZVRyZWU6WGR9LHdpbmRvdy5FdmVudD1aZCx3aW5kb3cuQ3VzdG9tRXZlbnQ9JGQsd2luZG93Lk1vdXNlRXZlbnQ9YWUsSGQoKSxLZCgpLHdpbmRvdy5TaGFkb3dSb290PWwpO3ZhciBQZD1uZXcgU2V0KFwiYW5ub3RhdGlvbi14bWwgY29sb3ItcHJvZmlsZSBmb250LWZhY2UgZm9udC1mYWNlLXNyYyBmb250LWZhY2UtdXJpIGZvbnQtZmFjZS1mb3JtYXQgZm9udC1mYWNlLW5hbWUgbWlzc2luZy1nbHlwaFwiLnNwbGl0KFwiIFwiKSk7Qi5wcm90b3R5cGUuQj1mdW5jdGlvbihhLGIpe3RoaXMuby5zZXQoYSxiKTtcbnRoaXMubS5zZXQoYi5jb25zdHJ1Y3RvcixiKX07Qi5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vLmdldChhKX07Qi5wcm90b3R5cGUudz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5tLmdldChhKX07Qi5wcm90b3R5cGUucz1mdW5jdGlvbihhKXt0aGlzLmg9ITA7dGhpcy5qLnB1c2goYSl9O0IucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczt0aGlzLmgmJk8oYSxmdW5jdGlvbihhKXtyZXR1cm4gYi5nKGEpfSl9O0IucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7aWYodGhpcy5oJiYhYS5fX0NFX3BhdGNoZWQpe2EuX19DRV9wYXRjaGVkPSEwO2Zvcih2YXIgYj0wO2I8dGhpcy5qLmxlbmd0aDtiKyspdGhpcy5qW2JdKGEpfX07Qi5wcm90b3R5cGUuYj1mdW5jdGlvbihhKXt2YXIgYj1bXTtPKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIucHVzaChhKX0pO2ZvcihhPTA7YTxiLmxlbmd0aDthKyspe3ZhciBjPWJbYV07MT09PWMuX19DRV9zdGF0ZT90aGlzLmNvbm5lY3RlZENhbGxiYWNrKGMpOlxudGhpcy5pKGMpfX07Qi5wcm90b3R5cGUuYT1mdW5jdGlvbihhKXt2YXIgYj1bXTtPKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIucHVzaChhKX0pO2ZvcihhPTA7YTxiLmxlbmd0aDthKyspe3ZhciBjPWJbYV07MT09PWMuX19DRV9zdGF0ZSYmdGhpcy5kaXNjb25uZWN0ZWRDYWxsYmFjayhjKX19O0IucHJvdG90eXBlLmY9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO2I9Yj9iOnt9O3ZhciBkPWIua2J8fG5ldyBTZXQsZT1iLkRhfHxmdW5jdGlvbihhKXtyZXR1cm4gYy5pKGEpfSxmPVtdO08oYSxmdW5jdGlvbihhKXtpZihcImxpbmtcIj09PWEubG9jYWxOYW1lJiZcImltcG9ydFwiPT09YS5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpe3ZhciBiPWEuaW1wb3J0O2IgaW5zdGFuY2VvZiBOb2RlJiZcImNvbXBsZXRlXCI9PT1iLnJlYWR5U3RhdGU/KGIuX19DRV9pc0ltcG9ydERvY3VtZW50PSEwLGIuX19DRV9oYXNSZWdpc3RyeT0hMCk6YS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7dmFyIGI9XG5hLmltcG9ydDtpZighYi5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQpe2IuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkPSEwO2IuX19DRV9pc0ltcG9ydERvY3VtZW50PSEwO2IuX19DRV9oYXNSZWdpc3RyeT0hMDt2YXIgZj1uZXcgU2V0KGQpO2YuZGVsZXRlKGIpO2MuZihiLHtrYjpmLERhOmV9KX19KX1lbHNlIGYucHVzaChhKX0sZCk7aWYodGhpcy5oKWZvcihhPTA7YTxmLmxlbmd0aDthKyspdGhpcy5nKGZbYV0pO2ZvcihhPTA7YTxmLmxlbmd0aDthKyspZShmW2FdKX07Qi5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXtpZih2b2lkIDA9PT1hLl9fQ0Vfc3RhdGUpe3ZhciBiPXRoaXMuYyhhLmxvY2FsTmFtZSk7aWYoYil7Yi5jb25zdHJ1Y3Rpb25TdGFjay5wdXNoKGEpO3ZhciBjPWIuY29uc3RydWN0b3I7dHJ5e3RyeXtpZihuZXcgYyE9PWEpdGhyb3cgRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IgZGlkIG5vdCBwcm9kdWNlIHRoZSBlbGVtZW50IGJlaW5nIHVwZ3JhZGVkLlwiKTtcbn1maW5hbGx5e2IuY29uc3RydWN0aW9uU3RhY2sucG9wKCl9fWNhdGNoKGYpe3Rocm93IGEuX19DRV9zdGF0ZT0yLGY7fWEuX19DRV9zdGF0ZT0xO2EuX19DRV9kZWZpbml0aW9uPWI7aWYoYi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spZm9yKGI9Yi5vYnNlcnZlZEF0dHJpYnV0ZXMsYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdLGU9YS5nZXRBdHRyaWJ1dGUoZCk7bnVsbCE9PWUmJnRoaXMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGEsZCxudWxsLGUsbnVsbCl9dChhKSYmdGhpcy5jb25uZWN0ZWRDYWxsYmFjayhhKX19fTtCLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtiLmNvbm5lY3RlZENhbGxiYWNrJiZiLmNvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9O0IucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPWEuX19DRV9kZWZpbml0aW9uO2IuZGlzY29ubmVjdGVkQ2FsbGJhY2smJlxuYi5kaXNjb25uZWN0ZWRDYWxsYmFjay5jYWxsKGEpfTtCLnByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1hLl9fQ0VfZGVmaW5pdGlvbjtmLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayYmLTE8Zi5vYnNlcnZlZEF0dHJpYnV0ZXMuaW5kZXhPZihiKSYmZi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2suY2FsbChhLGIsYyxkLGUpfTtKYS5wcm90b3R5cGUuYz1mdW5jdGlvbigpe3RoaXMuTSYmdGhpcy5NLmRpc2Nvbm5lY3QoKX07SmEucHJvdG90eXBlLmY9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hLnJlYWR5U3RhdGU7XCJpbnRlcmFjdGl2ZVwiIT09YiYmXCJjb21wbGV0ZVwiIT09Ynx8dGhpcy5jKCk7Zm9yKGI9MDtiPGEubGVuZ3RoO2IrKylmb3IodmFyIGM9YVtiXS5hZGRlZE5vZGVzLGQ9MDtkPGMubGVuZ3RoO2QrKyl0aGlzLmIuZihjW2RdKX07R2IucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXtpZih0aGlzLmEpdGhyb3cgRXJyb3IoXCJBbHJlYWR5IHJlc29sdmVkLlwiKTtcbnRoaXMuYT12b2lkIDA7dGhpcy5iJiZ0aGlzLmIodm9pZCAwKX07eS5wcm90b3R5cGUuZGVmaW5lPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztpZighKGIgaW5zdGFuY2VvZiBGdW5jdGlvbikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9ycyBtdXN0IGJlIGZ1bmN0aW9ucy5cIik7aWYoIUNjKGEpKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSBlbGVtZW50IG5hbWUgJ1wiK2ErXCInIGlzIG5vdCB2YWxpZC5cIik7aWYodGhpcy5hLmMoYSkpdGhyb3cgRXJyb3IoXCJBIGN1c3RvbSBlbGVtZW50IHdpdGggbmFtZSAnXCIrYStcIicgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLlwiKTtpZih0aGlzLmMpdGhyb3cgRXJyb3IoXCJBIGN1c3RvbSBlbGVtZW50IGlzIGFscmVhZHkgYmVpbmcgZGVmaW5lZC5cIik7dGhpcy5jPSEwO3RyeXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1lW2FdO2lmKHZvaWQgMCE9PWImJiEoYiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSl0aHJvdyBFcnJvcihcIlRoZSAnXCIrXG5hK1wiJyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO3JldHVybiBifSxlPWIucHJvdG90eXBlO2lmKCEoZSBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcidzIHByb3RvdHlwZSBpcyBub3QgYW4gb2JqZWN0LlwiKTt2YXIgZj1kKFwiY29ubmVjdGVkQ2FsbGJhY2tcIik7dmFyIGc9ZChcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIpO3ZhciBoPWQoXCJhZG9wdGVkQ2FsbGJhY2tcIik7dmFyIGw9ZChcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiKTt2YXIgbj1iLm9ic2VydmVkQXR0cmlidXRlc3x8W119Y2F0Y2gobSl7cmV0dXJufWZpbmFsbHl7dGhpcy5jPSExfWI9e2xvY2FsTmFtZTphLGNvbnN0cnVjdG9yOmIsY29ubmVjdGVkQ2FsbGJhY2s6ZixkaXNjb25uZWN0ZWRDYWxsYmFjazpnLGFkb3B0ZWRDYWxsYmFjazpoLGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjazpsLG9ic2VydmVkQXR0cmlidXRlczpuLGNvbnN0cnVjdGlvblN0YWNrOltdfTtcbnRoaXMuYS5CKGEsYik7dGhpcy5nLnB1c2goYik7dGhpcy5ifHwodGhpcy5iPSEwLHRoaXMuZihmdW5jdGlvbigpe3JldHVybiBjLmooKX0pKX07eS5wcm90b3R5cGUuaj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7aWYoITEhPT10aGlzLmIpe3RoaXMuYj0hMTtmb3IodmFyIGI9dGhpcy5nLGM9W10sZD1uZXcgTWFwLGU9MDtlPGIubGVuZ3RoO2UrKylkLnNldChiW2VdLmxvY2FsTmFtZSxbXSk7dGhpcy5hLmYoZG9jdW1lbnQse0RhOmZ1bmN0aW9uKGIpe2lmKHZvaWQgMD09PWIuX19DRV9zdGF0ZSl7dmFyIGU9Yi5sb2NhbE5hbWUsZj1kLmdldChlKTtmP2YucHVzaChiKTphLmEuYyhlKSYmYy5wdXNoKGIpfX19KTtmb3IoZT0wO2U8Yy5sZW5ndGg7ZSsrKXRoaXMuYS5pKGNbZV0pO2Zvcig7MDxiLmxlbmd0aDspe3ZhciBmPWIuc2hpZnQoKTtlPWYubG9jYWxOYW1lO2Y9ZC5nZXQoZi5sb2NhbE5hbWUpO2Zvcih2YXIgZz0wO2c8Zi5sZW5ndGg7ZysrKXRoaXMuYS5pKGZbZ10pOyhlPXRoaXMuaC5nZXQoZSkpJiZcbmUuYygpfX19O3kucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtpZihhPXRoaXMuYS5jKGEpKXJldHVybiBhLmNvbnN0cnVjdG9yfTt5LnByb3RvdHlwZS53aGVuRGVmaW5lZD1mdW5jdGlvbihhKXtpZighQ2MoYSkpcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBTeW50YXhFcnJvcihcIidcIithK1wiJyBpcyBub3QgYSB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lLlwiKSk7dmFyIGI9dGhpcy5oLmdldChhKTtpZihiKXJldHVybiBiLmY7Yj1uZXcgR2I7dGhpcy5oLnNldChhLGIpO3RoaXMuYS5jKGEpJiYhdGhpcy5nLnNvbWUoZnVuY3Rpb24oYil7cmV0dXJuIGIubG9jYWxOYW1lPT09YX0pJiZiLmMoKTtyZXR1cm4gYi5mfTt5LnByb3RvdHlwZS5sPWZ1bmN0aW9uKGEpe3RoaXMuaS5jKCk7dmFyIGI9dGhpcy5mO3RoaXMuZj1mdW5jdGlvbihjKXtyZXR1cm4gYShmdW5jdGlvbigpe3JldHVybiBiKGMpfSl9fTt3aW5kb3cuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5PXk7eS5wcm90b3R5cGUuZGVmaW5lPVxueS5wcm90b3R5cGUuZGVmaW5lO3kucHJvdG90eXBlLmdldD15LnByb3RvdHlwZS5nZXQ7eS5wcm90b3R5cGUud2hlbkRlZmluZWQ9eS5wcm90b3R5cGUud2hlbkRlZmluZWQ7eS5wcm90b3R5cGUucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaz15LnByb3RvdHlwZS5sO3ZhciBFYT13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQsdGQ9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50TlMsc2Q9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlLHVkPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUucHJlcGVuZCx2ZD13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmFwcGVuZCxjZT13aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUucHJlcGVuZCxkZT13aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUuYXBwZW5kLHdiPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5jbG9uZU5vZGUsaWE9d2luZG93Lk5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkLFxuRGI9d2luZG93Lk5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZSxGYT13aW5kb3cuTm9kZS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQsRWI9d2luZG93Lk5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCxJYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5Ob2RlLnByb3RvdHlwZSxcInRleHRDb250ZW50XCIpLHZiPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3csQ2E9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksR2E9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZSx4Yj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlLHpiPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsamE9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZU5TLHliPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVOUyxcbkFiPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGVOUyxDYj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50LGpkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5wcmVwZW5kLGtkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hcHBlbmQsbWQ9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmJlZm9yZSxuZD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWZ0ZXIsb2Q9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VXaXRoLHBkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUseGQ9d2luZG93LkhUTUxFbGVtZW50LERhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSxCYj13aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudCxGYj1uZXcgZnVuY3Rpb24oKXt9LHRhPXdpbmRvdy5jdXN0b21FbGVtZW50cztcbmlmKCF0YXx8dGEuZm9yY2VQb2x5ZmlsbHx8XCJmdW5jdGlvblwiIT10eXBlb2YgdGEuZGVmaW5lfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiB0YS5nZXQpe3ZhciBZPW5ldyBCO3dkKFkpO3JkKFkpO0hhKFksRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUse1o6Y2UsYXBwZW5kOmRlfSk7cWQoWSk7aWQoWSk7ZG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT0hMDt2YXIgZWU9bmV3IHkoWSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdyxcImN1c3RvbUVsZW1lbnRzXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOmVlfSl9dmFyIEk9e1NUWUxFX1JVTEU6MSxkYTo3LE1FRElBX1JVTEU6NCxuYToxRTN9LEY9e1lhOi9cXC9cXCpbXipdKlxcKisoW14vKl1bXipdKlxcKispKlxcLy9naW0scG9ydDovQGltcG9ydFteO10qOy9naW0sd2E6Lyg/Ol5bXjtcXC1cXHN9XSspPy0tW147e31dKj86W157fTtdKj8oPzpbO1xcbl18JCkvZ2ltLEFhOi8oPzpeW147XFwtXFxzfV0rKT8tLVteO3t9XSo/Oltee307XSo/e1tefV0qP30oPzpbO1xcbl18JCk/L2dpbSxcbmViOi9AYXBwbHlcXHMqXFwoP1teKTtdKlxcKT9cXHMqKD86WztcXG5dfCQpPy9naW0samI6L1teOzpdKj86W147XSo/dmFyXFwoW147XSpcXCkoPzpbO1xcbl18JCk/L2dpbSxjYjovXkBbXlxcc10qa2V5ZnJhbWVzLyxCYTovXFxzKy9nfSx6PSEod2luZG93LlNoYWR5RE9NJiZ3aW5kb3cuU2hhZHlET00uaW5Vc2UpO2lmKHdpbmRvdy5TaGFkeUNTUyYmdm9pZCAwIT09d2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzcyl2YXIgQT13aW5kb3cuU2hhZHlDU1MubmF0aXZlQ3NzO2Vsc2Ugd2luZG93LlNoYWR5Q1NTPyhGYyh3aW5kb3cuU2hhZHlDU1MpLHdpbmRvdy5TaGFkeUNTUz12b2lkIDApOkZjKHdpbmRvdy5XZWJDb21wb25lbnRzJiZ3aW5kb3cuV2ViQ29tcG9uZW50cy5mbGFncyk7dmFyIHVhPS8oPzpefFs7XFxze11cXHMqKSgtLVtcXHctXSo/KVxccyo6XFxzKig/OigoPzonKD86XFxcXCd8LikqPyd8XCIoPzpcXFxcXCJ8LikqP1wifFxcKFteKV0qP1xcKXxbXn07e10pKyl8XFx7KFtefV0qKVxcfSg/Oig/PVs7XFxzfV0pfCQpKS9naSxcbnZhPS8oPzpefFxcVyspQGFwcGx5XFxzKlxcKD8oW14pO1xcbl0qKVxcKT8vZ2ksZmU9LygtLVtcXHctXSspXFxzKihbOiw7KV18JCkvZ2ksZ2U9LyhhbmltYXRpb25cXHMqOil8KGFuaW1hdGlvbi1uYW1lXFxzKjopLyxSZD0vQG1lZGlhXFxzKC4qKS8saGU9L1xce1tefV0qXFx9L2csUT1udWxsO3UucHJvdG90eXBlLmI9ZnVuY3Rpb24oYSxiLGMpe2EuX19zdHlsZVNjb3BlZD9hLl9fc3R5bGVTY29wZWQ9bnVsbDp0aGlzLmooYSxifHxcIlwiLGMpfTt1LnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEsYixjKXthLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJnRoaXMuaChhLGIsYyk7aWYoYT1cInRlbXBsYXRlXCI9PT1hLmxvY2FsTmFtZT8oYS5jb250ZW50fHxhLm9iKS5jaGlsZE5vZGVzOmEuY2hpbGRyZW58fGEuY2hpbGROb2Rlcylmb3IodmFyIGQ9MDtkPGEubGVuZ3RoO2QrKyl0aGlzLmooYVtkXSxiLGMpfTt1LnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEsYixjKXtpZihiKWlmKGEuY2xhc3NMaXN0KWM/KGEuY2xhc3NMaXN0LnJlbW92ZShcInN0eWxlLXNjb3BlXCIpLFxuYS5jbGFzc0xpc3QucmVtb3ZlKGIpKTooYS5jbGFzc0xpc3QuYWRkKFwic3R5bGUtc2NvcGVcIiksYS5jbGFzc0xpc3QuYWRkKGIpKTtlbHNlIGlmKGEuZ2V0QXR0cmlidXRlKXt2YXIgZD1hLmdldEF0dHJpYnV0ZShpZSk7Yz9kJiYoYj1kLnJlcGxhY2UoXCJzdHlsZS1zY29wZVwiLFwiXCIpLnJlcGxhY2UoYixcIlwiKSxxYShhLGIpKTpxYShhLChkP2QrXCIgXCI6XCJcIikrXCJzdHlsZS1zY29wZSBcIitiKX19O3UucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEuX19jc3NCdWlsZDt6fHxcInNoYWR5XCI9PT1kP2I9VihiLGMpOihhPVIoYSksYj10aGlzLkcoYixhLmlzLGEuVixjKStcIlxcblxcblwiKTtyZXR1cm4gYi50cmltKCl9O3UucHJvdG90eXBlLkc9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dGhpcy5mKGIsYyk7Yj10aGlzLmkoYik7dmFyIGY9dGhpcztyZXR1cm4gVihhLGZ1bmN0aW9uKGEpe2EuY3x8KGYuSShhLGIsZSksYS5jPSEwKTtkJiZkKGEsYixlKX0pfTt1LnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe3JldHVybiBhP1xuamUrYTpcIlwifTt1LnByb3RvdHlwZS5mPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/XCJbaXM9XCIrYStcIl1cIjphfTt1LnByb3RvdHlwZS5JPWZ1bmN0aW9uKGEsYixjKXt0aGlzLmwoYSx0aGlzLmcsYixjKX07dS5wcm90b3R5cGUubD1mdW5jdGlvbihhLGIsYyxkKXthLnNlbGVjdG9yPWEudj10aGlzLm0oYSxiLGMsZCl9O3UucHJvdG90eXBlLm09ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9YS5zZWxlY3Rvci5zcGxpdChQYyk7aWYoIUdjKGEpKXthPTA7Zm9yKHZhciBmPWUubGVuZ3RoLGc7YTxmJiYoZz1lW2FdKTthKyspZVthXT1iLmNhbGwodGhpcyxnLGMsZCl9cmV0dXJuIGUuam9pbihQYyl9O3UucHJvdG90eXBlLnM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShtYixmdW5jdGlvbihhLGMsZCl7LTE8ZC5pbmRleE9mKFwiK1wiKT9kPWQucmVwbGFjZSgvXFwrL2csXCJfX19cIik6LTE8ZC5pbmRleE9mKFwiX19fXCIpJiYoZD1kLnJlcGxhY2UoL19fXy9nLFwiK1wiKSk7cmV0dXJuXCI6XCIrYytcIihcIitcbmQrXCIpXCJ9KX07dS5wcm90b3R5cGUuZz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcyxlPSExO2E9YS50cmltKCk7dmFyIGY9bWIudGVzdChhKTtmJiYoYT1hLnJlcGxhY2UobWIsZnVuY3Rpb24oYSxiLGMpe3JldHVyblwiOlwiK2IrXCIoXCIrYy5yZXBsYWNlKC9cXHMvZyxcIlwiKStcIilcIn0pLGE9dGhpcy5zKGEpKTthPWEucmVwbGFjZShrZSxuYitcIiAkMVwiKTthPWEucmVwbGFjZShsZSxmdW5jdGlvbihhLGYsZyl7ZXx8KGE9ZC5CKGcsZixiLGMpLGU9ZXx8YS5zdG9wLGY9YS5YYSxnPWEudmFsdWUpO3JldHVybiBmK2d9KTtmJiYoYT10aGlzLnMoYSkpO3JldHVybiBhfTt1LnByb3RvdHlwZS5CPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWEuaW5kZXhPZihvYik7MDw9YS5pbmRleE9mKG5iKT9hPXRoaXMuRihhLGQpOjAhPT1lJiYoYT1jP3RoaXMubyhhLGMpOmEpO2M9ITE7MDw9ZSYmKGI9XCJcIixjPSEwKTtpZihjKXt2YXIgZj0hMDtjJiYoYT1hLnJlcGxhY2UobWUsZnVuY3Rpb24oYSxiKXtyZXR1cm5cIiA+IFwiK1xuYn0pKX1hPWEucmVwbGFjZShuZSxmdW5jdGlvbihhLGIsYyl7cmV0dXJuJ1tkaXI9XCInK2MrJ1wiXSAnK2IrXCIsIFwiK2IrJ1tkaXI9XCInK2MrJ1wiXSd9KTtyZXR1cm57dmFsdWU6YSxYYTpiLHN0b3A6Zn19O3UucHJvdG90eXBlLm89ZnVuY3Rpb24oYSxiKXthPWEuc3BsaXQoUWMpO2FbMF0rPWI7cmV0dXJuIGEuam9pbihRYyl9O3UucHJvdG90eXBlLkY9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLm1hdGNoKFJjKTtyZXR1cm4oYz1jJiZjWzJdLnRyaW0oKXx8XCJcIik/Y1swXS5tYXRjaChTYyk/YS5yZXBsYWNlKFJjLGZ1bmN0aW9uKGEsYyxmKXtyZXR1cm4gYitmfSk6Yy5zcGxpdChTYylbMF09PT1iP2M6b2U6YS5yZXBsYWNlKG5iLGIpfTt1LnByb3RvdHlwZS5IPWZ1bmN0aW9uKGEpe2Euc2VsZWN0b3I9YS5wYXJzZWRTZWxlY3Rvcjt0aGlzLncoYSk7dGhpcy5sKGEsdGhpcy5LKX07dS5wcm90b3R5cGUudz1mdW5jdGlvbihhKXthLnNlbGVjdG9yPT09cGUmJihhLnNlbGVjdG9yPVwiaHRtbFwiKX07XG51LnByb3RvdHlwZS5LPWZ1bmN0aW9uKGEpe3JldHVybiBhLm1hdGNoKG9iKT90aGlzLmcoYSxUYyk6dGhpcy5vKGEudHJpbSgpLFRjKX07Si5PYmplY3QuZGVmaW5lUHJvcGVydGllcyh1LnByb3RvdHlwZSx7YTp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHlsZS1zY29wZVwifX19KTt2YXIgbWI9LzoobnRoWy1cXHddKylcXCgoW14pXSspXFwpLyxUYz1cIjpub3QoLnN0eWxlLXNjb3BlKVwiLFBjPVwiLFwiLGxlPS8oXnxbXFxzPit+XSspKCg/OlxcWy4rP1xcXXxbXlxccz4rfj1bXSkrKS9nLFNjPS9bWy46IypdLyxuYj1cIjpob3N0XCIscGU9XCI6cm9vdFwiLG9iPVwiOjpzbG90dGVkXCIsa2U9bmV3IFJlZ0V4cChcIl4oXCIrb2IrXCIpXCIpLFJjPS8oOmhvc3QpKD86XFwoKCg/OlxcKFteKShdKlxcKXxbXikoXSopKz8pXFwpKS8sbWU9Lyg/Ojo6c2xvdHRlZCkoPzpcXCgoKD86XFwoW14pKF0qXFwpfFteKShdKikrPylcXCkpLyxuZT0vKC4qKTpkaXJcXCgoPzoobHRyfHJ0bCkpXFwpLyxcbmplPVwiLlwiLFFjPVwiOlwiLGllPVwiY2xhc3NcIixvZT1cInNob3VsZF9ub3RfbWF0Y2hcIixwPW5ldyB1O3YuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBhP2EuX19zdHlsZUluZm86bnVsbH07di5zZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5fX3N0eWxlSW5mbz1ifTt2LnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuRH07di5wcm90b3R5cGUuX2dldFN0eWxlUnVsZXM9di5wcm90b3R5cGUuYzt2YXIgVWM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEubWF0Y2hlc3x8YS5tYXRjaGVzU2VsZWN0b3J8fGEubW96TWF0Y2hlc1NlbGVjdG9yfHxhLm1zTWF0Y2hlc1NlbGVjdG9yfHxhLm9NYXRjaGVzU2VsZWN0b3J8fGEud2Via2l0TWF0Y2hlc1NlbGVjdG9yfSh3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpLHFlPW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goXCJUcmlkZW50XCIpO24ucHJvdG90eXBlLkg9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPXt9LGQ9W10sZT0wO1coYSxmdW5jdGlvbihhKXtiLmMoYSk7XG5hLmluZGV4PWUrKztiLkcoYS51LmNzc1RleHQsYyl9LGZ1bmN0aW9uKGEpe2QucHVzaChhKX0pO2EuYj1kO2E9W107Zm9yKHZhciBmIGluIGMpYS5wdXNoKGYpO3JldHVybiBhfTtuLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEpe2lmKCFhLnUpe3ZhciBiPXt9LGM9e307dGhpcy5iKGEsYykmJihiLkM9YyxhLnJ1bGVzPW51bGwpO2IuY3NzVGV4dD10aGlzLkYoYSk7YS51PWJ9fTtuLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS51O2lmKGMpe2lmKGMuQylyZXR1cm4gT2JqZWN0LmFzc2lnbihiLGMuQyksITB9ZWxzZXtjPWEucGFyc2VkQ3NzVGV4dDtmb3IodmFyIGQ7YT11YS5leGVjKGMpOyl7ZD0oYVsyXXx8YVszXSkudHJpbSgpO2lmKFwiaW5oZXJpdFwiIT09ZHx8XCJ1bnNldFwiIT09ZCliW2FbMV0udHJpbSgpXT1kO2Q9ITB9cmV0dXJuIGR9fTtuLnByb3RvdHlwZS5GPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLksoYS5wYXJzZWRDc3NUZXh0KX07bi5wcm90b3R5cGUuSz1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKGhlLFxuXCJcIikucmVwbGFjZSh1YSxcIlwiKX07bi5wcm90b3R5cGUuRz1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYztjPWZlLmV4ZWMoYSk7KXt2YXIgZD1jWzFdO1wiOlwiIT09Y1syXSYmKGJbZF09ITApfX07bi5wcm90b3R5cGUuYWE9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpLGM9MCxkO2M8Yi5sZW5ndGg7YysrKWQ9YltjXSxhW2RdPXRoaXMuYShhW2RdLGEpfTtuLnByb3RvdHlwZS5hPWZ1bmN0aW9uKGEsYil7aWYoYSlpZigwPD1hLmluZGV4T2YoXCI7XCIpKWE9dGhpcy5mKGEsYik7ZWxzZXt2YXIgYz10aGlzO2E9SWMoYSxmdW5jdGlvbihhLGUsZixnKXtpZighZSlyZXR1cm4gYStnOyhlPWMuYShiW2VdLGIpKSYmXCJpbml0aWFsXCIhPT1lP1wiYXBwbHktc2hpbS1pbmhlcml0XCI9PT1lJiYoZT1cImluaGVyaXRcIik6ZT1jLmEoYltmXXx8ZixiKXx8ZjtyZXR1cm4gYSsoZXx8XCJcIikrZ30pfXJldHVybiBhJiZhLnRyaW0oKXx8XCJcIn07bi5wcm90b3R5cGUuZj1mdW5jdGlvbihhLFxuYil7YT1hLnNwbGl0KFwiO1wiKTtmb3IodmFyIGM9MCxkLGU7YzxhLmxlbmd0aDtjKyspaWYoZD1hW2NdKXt2YS5sYXN0SW5kZXg9MDtpZihlPXZhLmV4ZWMoZCkpZD10aGlzLmEoYltlWzFdXSxiKTtlbHNlIGlmKGU9ZC5pbmRleE9mKFwiOlwiKSwtMSE9PWUpe3ZhciBmPWQuc3Vic3RyaW5nKGUpO2Y9Zi50cmltKCk7Zj10aGlzLmEoZixiKXx8ZjtkPWQuc3Vic3RyaW5nKDAsZSkrZn1hW2NdPWQmJmQubGFzdEluZGV4T2YoXCI7XCIpPT09ZC5sZW5ndGgtMT9kLnNsaWNlKDAsLTEpOmR8fFwiXCJ9cmV0dXJuIGEuam9pbihcIjtcIil9O24ucHJvdG90eXBlLkI9ZnVuY3Rpb24oYSxiKXt2YXIgYz1cIlwiO2EudXx8dGhpcy5jKGEpO2EudS5jc3NUZXh0JiYoYz10aGlzLmYoYS51LmNzc1RleHQsYikpO2EuY3NzVGV4dD1jfTtuLnByb3RvdHlwZS53PWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5jc3NUZXh0LGQ9YS5jc3NUZXh0O251bGw9PWEueWEmJihhLnlhPWdlLnRlc3QoYykpO2lmKGEueWEpaWYobnVsbD09XG5hLlkpe2EuWT1bXTtmb3IodmFyIGUgaW4gYilkPWJbZV0sZD1kKGMpLGMhPT1kJiYoYz1kLGEuWS5wdXNoKGUpKX1lbHNle2ZvcihlPTA7ZTxhLlkubGVuZ3RoOysrZSlkPWJbYS5ZW2VdXSxjPWQoYyk7ZD1jfWEuY3NzVGV4dD1kfTtuLnByb3RvdHlwZS5PPWZ1bmN0aW9uKGEsYil7dmFyIGM9e30sZD10aGlzLGU9W107VyhhLGZ1bmN0aW9uKGEpe2EudXx8ZC5jKGEpO3ZhciBmPWEudnx8YS5wYXJzZWRTZWxlY3RvcjtiJiZhLnUuQyYmZiYmVWMuY2FsbChiLGYpJiYoZC5iKGEsYyksYT1hLmluZGV4LGY9cGFyc2VJbnQoYS8zMiwxMCksZVtmXT0oZVtmXXx8MCl8MTw8YSUzMil9LG51bGwsITApO3JldHVybntDOmMsa2V5OmV9fTtuLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhLGIsYyxkKXtiLnV8fHRoaXMuYyhiKTtpZihiLnUuQyl7dmFyIGU9UihhKTthPWUuaXM7ZT1lLlY7ZT1hP3AuZihhLGUpOlwiaHRtbFwiO3ZhciBmPWIucGFyc2VkU2VsZWN0b3IsZz1cIjpob3N0ID4gKlwiPT09Znx8XG5cImh0bWxcIj09PWYsaD0wPT09Zi5pbmRleE9mKFwiOmhvc3RcIikmJiFnO1wic2hhZHlcIj09PWMmJihnPWY9PT1lK1wiID4gKi5cIitlfHwtMSE9PWYuaW5kZXhPZihcImh0bWxcIiksaD0hZyYmMD09PWYuaW5kZXhPZihlKSk7XCJzaGFkb3dcIj09PWMmJihnPVwiOmhvc3QgPiAqXCI9PT1mfHxcImh0bWxcIj09PWYsaD1oJiYhZyk7aWYoZ3x8aCljPWUsaCYmKHomJiFiLnYmJihiLnY9cC5tKGIscC5nLHAuaShhKSxlKSksYz1iLnZ8fGUpLGQoe2liOmMsYmI6aCxxYjpnfSl9fTtuLnByb3RvdHlwZS5JPWZ1bmN0aW9uKGEsYil7dmFyIGM9e30sZD17fSxlPXRoaXMsZj1iJiZiLl9fY3NzQnVpbGQ7VyhiLGZ1bmN0aW9uKGIpe2UuY2EoYSxiLGYsZnVuY3Rpb24oZil7VWMuY2FsbChhLnBifHxhLGYuaWIpJiYoZi5iYj9lLmIoYixjKTplLmIoYixkKSl9KX0sbnVsbCwhMCk7cmV0dXJue2diOmQsYWI6Y319O24ucHJvdG90eXBlLmJhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU9UihhKSxmPXAuZihlLmlzLFxuZS5WKSxnPW5ldyBSZWdFeHAoXCIoPzpefFteLiNbOl0pXCIrKGEuZXh0ZW5kcz9cIlxcXFxcIitmLnNsaWNlKDAsLTEpK1wiXFxcXF1cIjpmKStcIigkfFsuOltcXFxccz4rfl0pXCIpO2U9di5nZXQoYSkuRDt2YXIgaD10aGlzLmgoZSxjKTtyZXR1cm4gcC5jKGEsZSxmdW5jdGlvbihhKXtkLkIoYSxiKTt6fHxHYyhhKXx8IWEuY3NzVGV4dHx8KGQudyhhLGgpLGQubChhLGcsZixjKSl9KX07bi5wcm90b3R5cGUuaD1mdW5jdGlvbihhLGIpe2E9YS5iO3ZhciBjPXt9O2lmKCF6JiZhKWZvcih2YXIgZD0wLGU9YVtkXTtkPGEubGVuZ3RoO2U9YVsrK2RdKXRoaXMuaihlLGIpLGNbZS5rZXlmcmFtZXNOYW1lXT10aGlzLmkoZSk7cmV0dXJuIGN9O24ucHJvdG90eXBlLmk9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBiLnJlcGxhY2UoYS5mLGEuYSl9fTtuLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEsYil7YS5mPW5ldyBSZWdFeHAoYS5rZXlmcmFtZXNOYW1lLFwiZ1wiKTthLmE9YS5rZXlmcmFtZXNOYW1lK1xuXCItXCIrYjthLnY9YS52fHxhLnNlbGVjdG9yO2Euc2VsZWN0b3I9YS52LnJlcGxhY2UoYS5rZXlmcmFtZXNOYW1lLGEuYSl9O24ucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSxiLGMsZCl7YS52PWEudnx8YS5zZWxlY3RvcjtkPVwiLlwiK2Q7Zm9yKHZhciBlPWEudi5zcGxpdChcIixcIiksZj0wLGc9ZS5sZW5ndGgsaDtmPGcmJihoPWVbZl0pO2YrKyllW2ZdPWgubWF0Y2goYik/aC5yZXBsYWNlKGMsZCk6ZCtcIiBcIitoO2Euc2VsZWN0b3I9ZS5qb2luKFwiLFwiKX07bi5wcm90b3R5cGUubz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIixlPWQ7YyYmKGU9ZC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxccyp4LXNjb3BlXFxcXHMqXCIrYytcIlxcXFxzKlwiLFwiZ1wiKSxcIiBcIikpO2UrPShlP1wiIFwiOlwiXCIpK1wieC1zY29wZSBcIitiO2QhPT1lJiZxYShhLGUpfTtuLnByb3RvdHlwZS5zPWZ1bmN0aW9uKGEsYixjLGQpe2I9ZD9kLnRleHRDb250ZW50fHxcIlwiOnRoaXMuYmEoYSxiLGMpO3ZhciBlPVxudi5nZXQoYSksZj1lLmE7ZiYmIXomJmYhPT1kJiYoZi5fdXNlQ291bnQtLSwwPj1mLl91c2VDb3VudCYmZi5wYXJlbnROb2RlJiZmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZikpO3o/ZS5hPyhlLmEudGV4dENvbnRlbnQ9YixkPWUuYSk6YiYmKGQ9ZWIoYixjLGEuc2hhZG93Um9vdCxlLmIpKTpkP2QucGFyZW50Tm9kZXx8KHFlJiYtMTxiLmluZGV4T2YoXCJAbWVkaWFcIikmJihkLnRleHRDb250ZW50PWIpLEhjKGQsbnVsbCxlLmIpKTpiJiYoZD1lYihiLGMsbnVsbCxlLmIpKTtkJiYoZC5fdXNlQ291bnQ9ZC5fdXNlQ291bnR8fDAsZS5hIT1kJiZkLl91c2VDb3VudCsrLGUuYT1kKTtyZXR1cm4gZH07bi5wcm90b3R5cGUubT1mdW5jdGlvbihhLGIpe3ZhciBjPXBhKGEpLGQ9dGhpczthLnRleHRDb250ZW50PVYoYyxmdW5jdGlvbihhKXt2YXIgYz1hLmNzc1RleHQ9YS5wYXJzZWRDc3NUZXh0O2EudSYmYS51LmNzc1RleHQmJihjPWMucmVwbGFjZShGLndhLFwiXCIpLnJlcGxhY2UoRi5BYSxcblwiXCIpLGEuY3NzVGV4dD1kLmYoYyxiKSl9KX07Si5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhuLnByb3RvdHlwZSx7Zzp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJ4LXNjb3BlXCJ9fX0pO3ZhciBNPW5ldyBuLHBiPXt9LHdhPXdpbmRvdy5jdXN0b21FbGVtZW50cztpZih3YSYmIXope3ZhciByZT13YS5kZWZpbmU7d2EuZGVmaW5lPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1kb2N1bWVudC5jcmVhdGVDb21tZW50KFwiIFNoYWR5IERPTSBzdHlsZXMgZm9yIFwiK2ErXCIgXCIpLGU9ZG9jdW1lbnQuaGVhZDtlLmluc2VydEJlZm9yZShkLChRP1EubmV4dFNpYmxpbmc6bnVsbCl8fGUuZmlyc3RDaGlsZCk7UT1kO3BiW2FdPWQ7cmV0dXJuIHJlLmNhbGwod2EsYSxiLGMpfX1oYS5wcm90b3R5cGUuYT1mdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF07aWYoYS5DW2VdIT09YltlXSlyZXR1cm4hMX1yZXR1cm4hMH07XG5oYS5wcm90b3R5cGUuYj1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT10aGlzLmNhY2hlW2FdfHxbXTtlLnB1c2goe0M6YixzdHlsZUVsZW1lbnQ6YyxBOmR9KTtlLmxlbmd0aD50aGlzLmMmJmUuc2hpZnQoKTt0aGlzLmNhY2hlW2FdPWV9O2hhLnByb3RvdHlwZS5mZXRjaD1mdW5jdGlvbihhLGIsYyl7aWYoYT10aGlzLmNhY2hlW2FdKWZvcih2YXIgZD1hLmxlbmd0aC0xOzA8PWQ7ZC0tKXt2YXIgZT1hW2RdO2lmKHRoaXMuYShlLGIsYykpcmV0dXJuIGV9fTtpZigheil7dmFyIFZjPW5ldyBNdXRhdGlvbk9ic2VydmVyKEpjKSxXYz1mdW5jdGlvbihhKXtWYy5vYnNlcnZlKGEse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSl9O2lmKHdpbmRvdy5jdXN0b21FbGVtZW50cyYmIXdpbmRvdy5jdXN0b21FbGVtZW50cy5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrKVdjKGRvY3VtZW50KTtlbHNle3ZhciBxYj1mdW5jdGlvbigpe1djKGRvY3VtZW50LmJvZHkpfTt3aW5kb3cuSFRNTEltcG9ydHM/XG53aW5kb3cuSFRNTEltcG9ydHMud2hlblJlYWR5KHFiKTpyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtpZihcImxvYWRpbmdcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUpe3ZhciBhPWZ1bmN0aW9uKCl7cWIoKTtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGEpfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGEpfWVsc2UgcWIoKX0pfU49ZnVuY3Rpb24oKXtKYyhWYy50YWtlUmVjb3JkcygpKX19dmFyIHJhPXt9LFVkPVByb21pc2UucmVzb2x2ZSgpLGZiPW51bGwsTGM9d2luZG93LkhUTUxJbXBvcnRzJiZ3aW5kb3cuSFRNTEltcG9ydHMud2hlblJlYWR5fHxudWxsLGdiLHhhPW51bGwsZmE9bnVsbDtxLnByb3RvdHlwZS54YT1mdW5jdGlvbigpeyF0aGlzLmVucXVldWVkJiZmYSYmKHRoaXMuZW5xdWV1ZWQ9ITAsdWIoZmEpKX07cS5wcm90b3R5cGUuYj1mdW5jdGlvbihhKXthLl9fc2VlbkJ5U2hhZHlDU1N8fFxuKGEuX19zZWVuQnlTaGFkeUNTUz0hMCx0aGlzLmN1c3RvbVN0eWxlcy5wdXNoKGEpLHRoaXMueGEoKSl9O3EucHJvdG90eXBlLmE9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuX19zaGFkeUNTU0NhY2hlZFN0eWxlP2EuX19zaGFkeUNTU0NhY2hlZFN0eWxlOmEuZ2V0U3R5bGU/YS5nZXRTdHlsZSgpOmF9O3EucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5jdXN0b21TdHlsZXMsYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKCFjLl9fc2hhZHlDU1NDYWNoZWRTdHlsZSl7dmFyIGQ9dGhpcy5hKGMpO2QmJihkPWQuX19hcHBsaWVkRWxlbWVudHx8ZCx4YSYmeGEoZCksYy5fX3NoYWR5Q1NTQ2FjaGVkU3R5bGU9ZCl9fXJldHVybiBhfTtxLnByb3RvdHlwZS5hZGRDdXN0b21TdHlsZT1xLnByb3RvdHlwZS5iO3EucHJvdG90eXBlLmdldFN0eWxlRm9yQ3VzdG9tU3R5bGU9cS5wcm90b3R5cGUuYTtxLnByb3RvdHlwZS5wcm9jZXNzU3R5bGVzPXEucHJvdG90eXBlLmM7XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhxLnByb3RvdHlwZSx7dHJhbnNmb3JtQ2FsbGJhY2s6e2dldDpmdW5jdGlvbigpe3JldHVybiB4YX0sc2V0OmZ1bmN0aW9uKGEpe3hhPWF9fSx2YWxpZGF0ZUNhbGxiYWNrOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZmF9LHNldDpmdW5jdGlvbihhKXt2YXIgYj0hMTtmYXx8KGI9ITApO2ZhPWE7YiYmdGhpcy54YSgpfX19KTt2YXIgWGM9bmV3IGhhO2cucHJvdG90eXBlLnc9ZnVuY3Rpb24oKXtOKCl9O2cucHJvdG90eXBlLkk9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5tW2FdPSh0aGlzLm1bYV18fDApKzE7cmV0dXJuIGErXCItXCIrYn07Zy5wcm90b3R5cGUuSGE9ZnVuY3Rpb24oYSl7cmV0dXJuIHBhKGEpfTtnLnByb3RvdHlwZS5KYT1mdW5jdGlvbihhKXtyZXR1cm4gVihhKX07Zy5wcm90b3R5cGUuSD1mdW5jdGlvbihhKXthPWEuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVcIik7Zm9yKHZhciBiPVtdLGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9XG5hW2NdO2IucHVzaChkLnRleHRDb250ZW50KTtkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCl9cmV0dXJuIGIuam9pbihcIlwiKS50cmltKCl9O2cucHJvdG90eXBlLmFhPWZ1bmN0aW9uKGEpe3JldHVybihhPWEuY29udGVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIikpP2EuZ2V0QXR0cmlidXRlKFwiY3NzLWJ1aWxkXCIpfHxcIlwiOlwiXCJ9O2cucHJvdG90eXBlLnByZXBhcmVUZW1wbGF0ZT1mdW5jdGlvbihhLGIsYyl7aWYoIWEuZil7YS5mPSEwO2EubmFtZT1iO2EuZXh0ZW5kcz1jO3JhW2JdPWE7dmFyIGQ9dGhpcy5hYShhKSxlPXRoaXMuSChhKTtjPXtpczpiLGV4dGVuZHM6YyxtYjpkfTt6fHxwLmIoYS5jb250ZW50LGIpO3RoaXMuYygpO3ZhciBmPXZhLnRlc3QoZSl8fHVhLnRlc3QoZSk7dmEubGFzdEluZGV4PTA7dWEubGFzdEluZGV4PTA7ZT1kYihlKTtmJiZBJiZ0aGlzLmEmJnRoaXMuYS50cmFuc2Zvcm1SdWxlcyhlLGIpO2EuX3N0eWxlQXN0PWU7YS5nPWQ7ZD1bXTtBfHwoZD1NLkgoYS5fc3R5bGVBc3QpKTtcbmlmKCFkLmxlbmd0aHx8QSliPXRoaXMuTyhjLGEuX3N0eWxlQXN0LHo/YS5jb250ZW50Om51bGwscGJbYl0pLGEuYT1iO2EuYz1kfX07Zy5wcm90b3R5cGUuTz1mdW5jdGlvbihhLGIsYyxkKXtiPXAuYyhhLGIpO2lmKGIubGVuZ3RoKXJldHVybiBlYihiLGEuaXMsYyxkKX07Zy5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSl7dmFyIGI9UihhKSxjPWIuaXM7Yj1iLlY7dmFyIGQ9cGJbY107Yz1yYVtjXTtpZihjKXt2YXIgZT1jLl9zdHlsZUFzdDt2YXIgZj1jLmN9cmV0dXJuIHYuc2V0KGEsbmV3IHYoZSxkLGYsMCxiKSl9O2cucHJvdG90eXBlLkY9ZnVuY3Rpb24oKXshdGhpcy5hJiZ3aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW0mJih0aGlzLmE9d2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbSx0aGlzLmEuaW52YWxpZENhbGxiYWNrPVNkKX07Zy5wcm90b3R5cGUuRz1mdW5jdGlvbigpe3ZhciBhPXRoaXM7IXRoaXMuYiYmd2luZG93LlNoYWR5Q1NTJiZ3aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UmJlxuKHRoaXMuYj13aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UsdGhpcy5iLnRyYW5zZm9ybUNhbGxiYWNrPWZ1bmN0aW9uKGIpe2EucyhiKX0sdGhpcy5iLnZhbGlkYXRlQ2FsbGJhY2s9ZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXsoYS5iLmVucXVldWVkfHxhLmkpJiZhLmYoKX0pfSl9O2cucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXt0aGlzLkYoKTt0aGlzLkcoKX07Zy5wcm90b3R5cGUuZj1mdW5jdGlvbigpe3RoaXMuYygpO2lmKHRoaXMuYil7dmFyIGE9dGhpcy5iLnByb2Nlc3NTdHlsZXMoKTt0aGlzLmIuZW5xdWV1ZWQmJihBP3RoaXMuRmEoYSk6KHRoaXMubyh0aGlzLmcsdGhpcy5oKSx0aGlzLkIoYSkpLHRoaXMuYi5lbnF1ZXVlZD0hMSx0aGlzLmkmJiFBJiZ0aGlzLnN0eWxlRG9jdW1lbnQoKSl9fTtnLnByb3RvdHlwZS5zdHlsZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz1SKGEpLmlzLGQ9di5nZXQoYSk7ZHx8KGQ9dGhpcy5jYShhKSk7XG50aGlzLmooYSl8fCh0aGlzLmk9ITApO2ImJihkLk49ZC5OfHx7fSxPYmplY3QuYXNzaWduKGQuTixiKSk7aWYoQSl7aWYoZC5OKXtiPWQuTjtmb3IodmFyIGUgaW4gYiludWxsPT09ZT9hLnN0eWxlLnJlbW92ZVByb3BlcnR5KGUpOmEuc3R5bGUuc2V0UHJvcGVydHkoZSxiW2VdKX1pZigoKGU9cmFbY10pfHx0aGlzLmooYSkpJiZlJiZlLmEmJiFLYyhlKSl7aWYoS2MoZSl8fGUuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uIT09ZS5fYXBwbHlTaGltTmV4dFZlcnNpb24pdGhpcy5jKCksdGhpcy5hJiZ0aGlzLmEudHJhbnNmb3JtUnVsZXMoZS5fc3R5bGVBc3QsYyksZS5hLnRleHRDb250ZW50PXAuYyhhLGQuRCksVGQoZSk7eiYmKGM9YS5zaGFkb3dSb290KSYmKGMucXVlcnlTZWxlY3RvcihcInN0eWxlXCIpLnRleHRDb250ZW50PXAuYyhhLGQuRCkpO2QuRD1lLl9zdHlsZUFzdH19ZWxzZSB0aGlzLm8oYSxkKSxkLmxhJiZkLmxhLmxlbmd0aCYmdGhpcy5LKGEsZCl9O2cucHJvdG90eXBlLmw9XG5mdW5jdGlvbihhKXtyZXR1cm4oYT1hLmdldFJvb3ROb2RlKCkuaG9zdCk/di5nZXQoYSk/YTp0aGlzLmwoYSk6dGhpcy5nfTtnLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEpe3JldHVybiBhPT09dGhpcy5nfTtnLnByb3RvdHlwZS5LPWZ1bmN0aW9uKGEsYil7dmFyIGM9UihhKS5pcyxkPVhjLmZldGNoKGMsYi5KLGIubGEpLGU9ZD9kLnN0eWxlRWxlbWVudDpudWxsLGY9Yi5BO2IuQT1kJiZkLkF8fHRoaXMuSShjKTtlPU0ucyhhLGIuSixiLkEsZSk7enx8TS5vKGEsYi5BLGYpO2R8fFhjLmIoYyxiLkosZSxiLkEpfTtnLnByb3RvdHlwZS5vPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5sKGEpLGQ9di5nZXQoYyk7Yz1PYmplY3QuY3JlYXRlKGQuSnx8bnVsbCk7dmFyIGU9TS5JKGEsYi5EKTthPU0uTyhkLkQsYSkuQztPYmplY3QuYXNzaWduKGMsZS5hYixhLGUuZ2IpO3RoaXMuYmEoYyxiLk4pO00uYWEoYyk7Yi5KPWN9O2cucHJvdG90eXBlLmJhPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjIGluIGIpe3ZhciBkPVxuYltjXTtpZihkfHwwPT09ZClhW2NdPWR9fTtnLnByb3RvdHlwZS5zdHlsZURvY3VtZW50PWZ1bmN0aW9uKGEpe3RoaXMuc3R5bGVTdWJ0cmVlKHRoaXMuZyxhKX07Zy5wcm90b3R5cGUuc3R5bGVTdWJ0cmVlPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5zaGFkb3dSb290OyhjfHx0aGlzLmooYSkpJiZ0aGlzLnN0eWxlRWxlbWVudChhLGIpO2lmKGI9YyYmKGMuY2hpbGRyZW58fGMuY2hpbGROb2RlcykpZm9yKGE9MDthPGIubGVuZ3RoO2ErKyl0aGlzLnN0eWxlU3VidHJlZShiW2FdKTtlbHNlIGlmKGE9YS5jaGlsZHJlbnx8YS5jaGlsZE5vZGVzKWZvcihiPTA7YjxhLmxlbmd0aDtiKyspdGhpcy5zdHlsZVN1YnRyZWUoYVtiXSl9O2cucHJvdG90eXBlLkZhPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz10aGlzLmIuZ2V0U3R5bGVGb3JDdXN0b21TdHlsZShhW2JdKTtjJiZ0aGlzLkVhKGMpfX07Zy5wcm90b3R5cGUuQj1mdW5jdGlvbihhKXtmb3IodmFyIGI9XG4wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz10aGlzLmIuZ2V0U3R5bGVGb3JDdXN0b21TdHlsZShhW2JdKTtjJiZNLm0oYyx0aGlzLmguSil9fTtnLnByb3RvdHlwZS5zPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1wYShhKTtXKGMsZnVuY3Rpb24oYSl7ej9wLncoYSk6cC5IKGEpO0EmJihiLmMoKSxiLmEmJmIuYS50cmFuc2Zvcm1SdWxlKGEpKX0pO0E/YS50ZXh0Q29udGVudD1WKGMpOnRoaXMuaC5ELnJ1bGVzLnB1c2goYyl9O2cucHJvdG90eXBlLkVhPWZ1bmN0aW9uKGEpe2lmKEEmJnRoaXMuYSl7dmFyIGI9cGEoYSk7dGhpcy5jKCk7dGhpcy5hLnRyYW5zZm9ybVJ1bGVzKGIpO2EudGV4dENvbnRlbnQ9VihiKX19O2cucHJvdG90eXBlLmdldENvbXB1dGVkU3R5bGVWYWx1ZT1mdW5jdGlvbihhLGIpe3ZhciBjO0F8fChjPSh2LmdldChhKXx8di5nZXQodGhpcy5sKGEpKSkuSltiXSk7cmV0dXJuKGM9Y3x8d2luZG93LmdldENvbXB1dGVkU3R5bGUoYSkuZ2V0UHJvcGVydHlWYWx1ZShiKSk/XG5jLnRyaW0oKTpcIlwifTtnLnByb3RvdHlwZS5JYT1mdW5jdGlvbihhLGIpe3ZhciBjPWEuZ2V0Um9vdE5vZGUoKTtiPWI/Yi5zcGxpdCgvXFxzLyk6W107Yz1jLmhvc3QmJmMuaG9zdC5sb2NhbE5hbWU7aWYoIWMpe3ZhciBkPWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7aWYoZCl7ZD1kLnNwbGl0KC9cXHMvKTtmb3IodmFyIGU9MDtlPGQubGVuZ3RoO2UrKylpZihkW2VdPT09cC5hKXtjPWRbZSsxXTticmVha319fWMmJmIucHVzaChwLmEsYyk7QXx8KGM9di5nZXQoYSkpJiZjLkEmJmIucHVzaChNLmcsYy5BKTtxYShhLGIuam9pbihcIiBcIikpfTtnLnByb3RvdHlwZS5HYT1mdW5jdGlvbihhKXtyZXR1cm4gdi5nZXQoYSl9O2cucHJvdG90eXBlLmZsdXNoPWcucHJvdG90eXBlLnc7Zy5wcm90b3R5cGUucHJlcGFyZVRlbXBsYXRlPWcucHJvdG90eXBlLnByZXBhcmVUZW1wbGF0ZTtnLnByb3RvdHlwZS5zdHlsZUVsZW1lbnQ9Zy5wcm90b3R5cGUuc3R5bGVFbGVtZW50O2cucHJvdG90eXBlLnN0eWxlRG9jdW1lbnQ9XG5nLnByb3RvdHlwZS5zdHlsZURvY3VtZW50O2cucHJvdG90eXBlLnN0eWxlU3VidHJlZT1nLnByb3RvdHlwZS5zdHlsZVN1YnRyZWU7Zy5wcm90b3R5cGUuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlPWcucHJvdG90eXBlLmdldENvbXB1dGVkU3R5bGVWYWx1ZTtnLnByb3RvdHlwZS5zZXRFbGVtZW50Q2xhc3M9Zy5wcm90b3R5cGUuSWE7Zy5wcm90b3R5cGUuX3N0eWxlSW5mb0Zvck5vZGU9Zy5wcm90b3R5cGUuR2E7Zy5wcm90b3R5cGUudHJhbnNmb3JtQ3VzdG9tU3R5bGVGb3JEb2N1bWVudD1nLnByb3RvdHlwZS5zO2cucHJvdG90eXBlLmdldFN0eWxlQXN0PWcucHJvdG90eXBlLkhhO2cucHJvdG90eXBlLnN0eWxlQXN0VG9TdHJpbmc9Zy5wcm90b3R5cGUuSmE7Zy5wcm90b3R5cGUuZmx1c2hDdXN0b21TdHlsZXM9Zy5wcm90b3R5cGUuZjtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhnLnByb3RvdHlwZSx7bmF0aXZlU2hhZG93OntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gen19LG5hdGl2ZUNzczp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEF9fX0pO1xudmFyIEg9bmV3IGc7aWYod2luZG93LlNoYWR5Q1NTKXt2YXIgWWM9d2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbTt2YXIgWmM9d2luZG93LlNoYWR5Q1NTLkN1c3RvbVN0eWxlSW50ZXJmYWNlfXdpbmRvdy5TaGFkeUNTUz17U2NvcGluZ1NoaW06SCxwcmVwYXJlVGVtcGxhdGU6ZnVuY3Rpb24oYSxiLGMpe0guZigpO0gucHJlcGFyZVRlbXBsYXRlKGEsYixjKX0sc3R5bGVTdWJ0cmVlOmZ1bmN0aW9uKGEsYil7SC5mKCk7SC5zdHlsZVN1YnRyZWUoYSxiKX0sc3R5bGVFbGVtZW50OmZ1bmN0aW9uKGEpe0guZigpO0guc3R5bGVFbGVtZW50KGEpfSxzdHlsZURvY3VtZW50OmZ1bmN0aW9uKGEpe0guZigpO0guc3R5bGVEb2N1bWVudChhKX0sZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEguZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKGEsYil9LG5hdGl2ZUNzczpBLG5hdGl2ZVNoYWRvdzp6fTtZYyYmKHdpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW09WWMpO1pjJiYod2luZG93LlNoYWR5Q1NTLkN1c3RvbVN0eWxlSW50ZXJmYWNlPVxuWmMpO3ZhciByYj13aW5kb3cuY3VzdG9tRWxlbWVudHMseWE9d2luZG93LkhUTUxJbXBvcnRzO3dpbmRvdy5XZWJDb21wb25lbnRzPXdpbmRvdy5XZWJDb21wb25lbnRzfHx7fTtpZihyYiYmcmIucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayl7dmFyIHphLCRjPWZ1bmN0aW9uKCl7aWYoemEpe3ZhciBhPXphO3phPW51bGw7YSgpO3JldHVybiEwfX0sYWQ9eWEud2hlblJlYWR5O3JiLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2soZnVuY3Rpb24oYSl7emE9YTthZCgkYyl9KTt5YS53aGVuUmVhZHk9ZnVuY3Rpb24oYSl7YWQoZnVuY3Rpb24oKXskYygpP3lhLndoZW5SZWFkeShhKTphKCl9KX19eWEud2hlblJlYWR5KGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7d2luZG93LldlYkNvbXBvbmVudHMucmVhZHk9ITA7ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJXZWJDb21wb25lbnRzUmVhZHlcIix7YnViYmxlczohMH0pKX0pfSk7XG52YXIgYmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2JkLnRleHRDb250ZW50PVwiYm9keSB7dHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluIDAuMnM7IH0gXFxuYm9keVt1bnJlc29sdmVkXSB7b3BhY2l0eTogMDsgZGlzcGxheTogYmxvY2s7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsgfSBcXG5cIjt2YXIgY2Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7Y2QuaW5zZXJ0QmVmb3JlKGJkLGNkLmZpcnN0Q2hpbGQpfSkoKTt9KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWJjb21wb25lbnRzLWhpLXNkLWNlLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL3dlYmNvbXBvbmVudHMtaGktc2QtY2UuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnY29tbW9uL1BvbHlnb24nO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuXHJcbmltcG9ydCB7IFBvbHlnb25GaWxsZXIgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9Qb2x5Z29uRmlsbGVyJztcclxuXHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuXHJcbmltcG9ydCB7IENsb3Nlc3RQYXRoRmluZGVyIH0gZnJvbSAnc2VydmljZXMvQ2xvc2VzdFBhdGhGaW5kZXInO1xyXG5pbXBvcnQgeyBJbWFnZURvd25sb2FkZXIgfSBmcm9tICdzZXJ2aWNlcy9JbWFnZURvd25sb2FkZXInO1xyXG5pbXBvcnQgeyBJbnB1dERhdGFJbml0aWFsaXplciB9IGZyb20gJ3NlcnZpY2VzL0lucHV0RGF0YUluaXRpYWxpemVyJztcclxuaW1wb3J0IHsgTGlnaHRTaW11bGF0b3IgfSBmcm9tICdzZXJ2aWNlcy9MaWdodFNpbXVsYXRvcic7XHJcbmltcG9ydCB7IFBvbHlnb25DbGlwcGVyIH0gZnJvbSAnc2VydmljZXMvUG9seWdvbkNsaXBwZXInO1xyXG5cclxuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAndWkvVUlDb250cm9sbGVyJztcclxuXHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgUmVuZGVyRmluaXNoZWRFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJGaW5pc2hlZEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XHJcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHByaXZhdGUgdWlDb250cm9sbGVyOiBVSUNvbnRyb2xsZXI7XHJcbiAgcHJpdmF0ZSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBwb2x5Z29uRmlsbGVyOiBQb2x5Z29uRmlsbGVyO1xyXG4gIHByaXZhdGUgcG9seWdvbkxheWVyOiBMYXllcjtcclxuXHJcbiAgcHJpdmF0ZSBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuICBwcml2YXRlIGxpZ2h0U2ltdWxhdG9yOiBMaWdodFNpbXVsYXRvcjtcclxuXHJcbiAgcHJpdmF0ZSBpc1JlbmRlcmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXNOZXh0UmVuZGVyUXVldWVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBuZXcgRXZlbnRBZ2dyZWdhdG9yKCk7XHJcbiAgICB0aGlzLmltYWdlRG93bmxvYWRlciA9IG5ldyBJbWFnZURvd25sb2FkZXIoKTtcclxuICAgIHRoaXMucG9seWdvbkZpbGxlciA9IG5ldyBQb2x5Z29uRmlsbGVyKHtcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpZ2h0U2ltdWxhdG9yID0gbmV3IExpZ2h0U2ltdWxhdG9yKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIHBvbHlnb25GaWxsZXI6IHRoaXMucG9seWdvbkZpbGxlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YWdlID0gbmV3IFN0YWdlKCk7XHJcblxyXG4gICAgdGhpcy51aUNvbnRyb2xsZXIgPSBuZXcgVUlDb250cm9sbGVyKHtcclxuICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlLFxyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBpbWFnZURvd25sb2FkZXI6IHRoaXMuaW1hZ2VEb3dubG9hZGVyLFxyXG4gICAgICBwb2x5Z29uQ2xpcHBlcjogbmV3IFBvbHlnb25DbGlwcGVyKCksXHJcbiAgICAgIGNsb3Nlc3RQYXRoRmluZGVyOiBuZXcgQ2xvc2VzdFBhdGhGaW5kZXIoKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vblJlbmRlckV2ZW50ID0gdGhpcy5vblJlbmRlckV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaW5pdCgpIHtcclxuICAgIHRoaXMucG9seWdvbkxheWVyID0gbmV3IExheWVyKExFWC5QT0xZR09OX0xBWUVSX05BTUUpO1xyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMucHVzaCh0aGlzLnBvbHlnb25MYXllcik7XHJcblxyXG4gICAgdGhpcy5wb2x5Z29uRmlsbGVyLmluaXQoKTtcclxuICAgIHRoaXMubGlnaHRTaW11bGF0b3IuaW5pdCgpO1xyXG4gICAgdGhpcy51aUNvbnRyb2xsZXIuaW5pdCgpO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RGF0YUluaXRpYWxpemVyID0gbmV3IElucHV0RGF0YUluaXRpYWxpemVyKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgaW1hZ2VEb3dubG9hZGVyOiB0aGlzLmltYWdlRG93bmxvYWRlcixcclxuICAgICAgcG9seWdvbkxheWVyOiB0aGlzLnBvbHlnb25MYXllclxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgaW5wdXREYXRhSW5pdGlhbGl6ZXIuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5saWdodFNpbXVsYXRvci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLnVpQ29udHJvbGxlci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUmVuZGVyRXZlbnQoZXZlbnQ6IFJlbmRlckV2ZW50KSB7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5pc1JlbmRlcmluZykge1xyXG4gICAgICB0aGlzLmlzTmV4dFJlbmRlclF1ZXVlZCA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc1JlbmRlcmluZyA9IHRydWU7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyByZW5kZXIoKSB7XHJcbiAgICBhd2FpdCB0aGlzLnBvbHlnb25GaWxsZXIuZmlsbFBvbHlnb25zKDxQb2x5Z29uW10+dGhpcy5wb2x5Z29uTGF5ZXIucGF0aHMpO1xyXG4gICAgdGhpcy5zdGFnZS5yZW5kZXIodGhpcy5yZW5kZXJlcik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJGaW5pc2hlZEV2ZW50KCkpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzTmV4dFJlbmRlclF1ZXVlZCkge1xyXG4gICAgICB0aGlzLmlzTmV4dFJlbmRlclF1ZXVlZCA9IGZhbHNlO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc1JlbmRlcmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUmVuZGVyRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUmVuZGVyRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoUmVuZGVyRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUmVuZGVyRXZlbnQpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9BcHBsaWNhdGlvbi50cyIsImltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIaXRUZXN0UmVzdWx0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbGluZTogTGluZTtcclxuICBwdWJsaWMgcGF0aD86IFBhdGg7XHJcbiAgcHVibGljIGxheWVyPzogTGF5ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpbmU6IExpbmUsIHBhdGg/OiBQYXRoLCBsYXllcj86IExheWVyKSB7XHJcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0hpdFRlc3RSZXN1bHQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IEV2ZW50UXVldWUgfSBmcm9tICdldmVudHMvRXZlbnRRdWV1ZSc7XHJcblxyXG50eXBlIEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQ6IEFwcEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50QWdncmVnYXRvciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lck1hcCA9IG5ldyBNYXA8c3RyaW5nLCBFdmVudExpc3RlbmVyW10+KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudFF1ZXVlID0gbmV3IEV2ZW50UXVldWUoKTtcclxuICBwcml2YXRlIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyKSB7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcclxuXHJcbiAgICBpZiAoZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XHJcbiAgICAgIGV2ZW50TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdGVuZXJNYXAuc2V0KGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyKSB7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcclxuICAgIGNvbnN0IGxpc3RlbmVySW5kZXggPSBldmVudExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcclxuXHJcbiAgICBpZiAobGlzdGVuZXJJbmRleCAhPT0gLTEpIHtcclxuICAgICAgZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdGVuZXJNYXAuc2V0KGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IEFwcEV2ZW50KSB7XHJcbiAgICB0aGlzLmV2ZW50UXVldWUuZW5xdWV1ZShldmVudCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRGlzcGF0Y2hpbmcpIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50RnJvbVF1ZXVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc3BhdGNoRXZlbnRGcm9tUXVldWUoKSB7XHJcbiAgICB0aGlzLmlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudFF1ZXVlLmRlcXVldWUoKTtcclxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5nZXRFdmVudExpc3RlbmVycyhldmVudC5ldmVudFR5cGUpO1xyXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBsaXN0ZW5lcihldmVudCkpO1xyXG5cclxuICAgIGlmICh0aGlzLmV2ZW50UXVldWUuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRoaXMuaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50RnJvbVF1ZXVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lck1hcC5nZXQoZXZlbnRUeXBlKSB8fCBbXTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL0V2ZW50QWdncmVnYXRvci50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudFF1ZXVlIHtcclxuICBwcml2YXRlIF9xdWV1ZTogQXBwRXZlbnRbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgZW5xdWV1ZShldmVudDogQXBwRXZlbnQpIHtcclxuICAgIHRoaXMuX3F1ZXVlLnB1c2goZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlcXVldWUoKTogQXBwRXZlbnQge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVldWUgaXMgZW1wdHknKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcXVldWUuc3BsaWNlKDAsIDEpWzBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNFbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldExlbmd0aCgpID09PSAwO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvRXZlbnRRdWV1ZS50cyIsImltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29tbW9uL0NvbG9yJztcclxuaW1wb3J0IHsgTGlnaHRWZXJzb3JUeXBlIH0gZnJvbSAnY29tbW9uL0xpZ2h0VmVyc29yVHlwZSc7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICdjb21tb24vUG9seWdvbic7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtcclxuICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEV2ZW50LFxyXG4gIE5ld0xpZ2h0Q29sb3JFdmVudCxcclxuICBOZXdMaWdodFZlcnNvckV2ZW50LFxyXG4gIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LFxyXG4gIE5ld05vcm1hbE1hcEV2ZW50XHJcbn0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5cclxuaW1wb3J0IHsgQWN0aXZlRWRnZSB9IGZyb20gJ3BvbHlnb24tZmlsbGVyL0FjdGl2ZUVkZ2UnO1xyXG5pbXBvcnQgeyBBcHBGaWxsRGF0YSB9IGZyb20gJ3BvbHlnb24tZmlsbGVyL0FwcEZpbGxEYXRhJztcclxuaW1wb3J0IHsgRmlsbFN0cmlwIH0gZnJvbSAncG9seWdvbi1maWxsZXIvRmlsbFN0cmlwJztcclxuaW1wb3J0IHsgRmlsbFdvcmtlck1lc3NhZ2VUeXBlIH0gZnJvbSAncG9seWdvbi1maWxsZXIvRmlsbFdvcmtlck1lc3NhZ2VUeXBlJztcclxuXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmNvbnN0IEZJTExfV09SS0VSX1VSTCA9ICdmaWxsV29ya2VyLmpzJztcclxuXHJcbmludGVyZmFjZSBQb2x5Z29uRmlsbGVyRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbkZpbGxlciBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVuZGVyaW5nQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICBwcml2YXRlIGZpbGxXb3JrZXI6IFdvcmtlcjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBmaWxsRGF0YTogQXBwRmlsbERhdGEgPSB7XHJcbiAgICBiYWNrZ3JvdW5kVGV4dHVyZTogbmV3IEltYWdlRGF0YSgxLCAxKSxcclxuICAgIGhlaWdodE1hcDogbmV3IEltYWdlRGF0YSgxLCAxKSxcclxuICAgIGxpZ2h0Q29sb3I6IG5ldyBDb2xvcigwLCAwLCAwKSxcclxuICAgIGxpZ2h0VmVyc29yVHlwZTogTGlnaHRWZXJzb3JUeXBlLkNvbnN0YW50LFxyXG4gICAgbm9ybWFsTWFwOiBuZXcgSW1hZ2VEYXRhKDEsIDEpXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2x5Z29uRmlsbGVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcblxyXG4gICAgdGhpcy5vbk5ld0JhY2tncm91bmRUZXh0dXJlID0gdGhpcy5vbk5ld0JhY2tncm91bmRUZXh0dXJlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTmV3SGVpZ2h0TWFwID0gdGhpcy5vbk5ld0hlaWdodE1hcC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5ld0xpZ2h0Q29sb3IgPSB0aGlzLm9uTmV3TGlnaHRDb2xvci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5ld0xpZ2h0VmVyc29yID0gdGhpcy5vbk5ld0xpZ2h0VmVyc29yLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTmV3TGlnaHRWZXJzb3JUeXBlID0gdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5ld05vcm1hbE1hcCA9IHRoaXMub25OZXdOb3JtYWxNYXAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25GaWxsV29ya2VyTWVzc2FnZSA9IHRoaXMub25GaWxsV29ya2VyTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluamVjdENhbnZhc1JlbmRlcmluZ0NvbnRleHQocmVuZGVyaW5nQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQgPSByZW5kZXJpbmdDb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICBjb25zdCBldmVudEFnZ3JlZ2F0b3IgPSB0aGlzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25OZXdCYWNrZ3JvdW5kVGV4dHVyZVxyXG4gICAgKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKE5ld0hlaWdodE1hcEV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld0hlaWdodE1hcCk7XHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihOZXdMaWdodENvbG9yRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTmV3TGlnaHRDb2xvcik7XHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihOZXdMaWdodFZlcnNvckV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld0xpZ2h0VmVyc29yKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZSk7XHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihOZXdOb3JtYWxNYXBFdmVudC5ldmVudFR5cGUsIHRoaXMub25OZXdOb3JtYWxNYXApO1xyXG5cclxuICAgIHRoaXMuZmlsbFdvcmtlciA9IG5ldyBXb3JrZXIoRklMTF9XT1JLRVJfVVJMKTtcclxuICAgIHRoaXMuc2VuZEFwcEZpbGxEYXRhVG9Xb3JrZXIoKTtcclxuXHJcbiAgICB0aGlzLmZpbGxXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25GaWxsV29ya2VyTWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIGNvbnN0IGV2ZW50QWdncmVnYXRvciA9IHRoaXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIGV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbk5ld0JhY2tncm91bmRUZXh0dXJlXHJcbiAgICApO1xyXG4gICAgZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoTmV3SGVpZ2h0TWFwRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTmV3SGVpZ2h0TWFwKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKE5ld0xpZ2h0Q29sb3JFdmVudC5ldmVudFR5cGUsIHRoaXMub25OZXdMaWdodENvbG9yKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKE5ld0xpZ2h0VmVyc29yRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTmV3TGlnaHRWZXJzb3IpO1xyXG4gICAgZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZVxyXG4gICAgKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKE5ld05vcm1hbE1hcEV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld05vcm1hbE1hcCk7XHJcbiAgICB0aGlzLmZpbGxXb3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25GaWxsV29ya2VyTWVzc2FnZSk7XHJcbiAgICB0aGlzLmZpbGxXb3JrZXIudGVybWluYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmlsbFBvbHlnb25zKHBvbHlnb25zOiBQb2x5Z29uW10pIHtcclxuICAgIGNvbnN0IGZpbGxXb3JrZXIgPSB0aGlzLmZpbGxXb3JrZXI7XHJcblxyXG4gICAgZmlsbFdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5TdGFydEZpbGxcclxuICAgIH0pO1xyXG5cclxuICAgIHBvbHlnb25zLmZvckVhY2gocG9seWdvbiA9PiB0aGlzLmZpbGxQb2x5Z29uKHBvbHlnb24pKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmdW5jdGlvbiBvbk1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3I6IEVycm9yRXZlbnQpIHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGZpbGxXb3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSk7XHJcbiAgICAgICAgZmlsbFdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWxsV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xyXG4gICAgICBmaWxsV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XHJcblxyXG4gICAgICBmaWxsV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICB0eXBlOiBGaWxsV29ya2VyTWVzc2FnZVR5cGUuRW5kRmlsbFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZpbGxXb3JrZXJNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcclxuICAgIHRoaXMucmVuZGVyQXJyYXlCdWZmZXIoZXZlbnQuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckFycmF5QnVmZmVyKGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlcikge1xyXG4gICAgY29uc3QgdWludDhBcnJheSA9IG5ldyBVaW50OENsYW1wZWRBcnJheShhcnJheUJ1ZmZlcik7XHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKHVpbnQ4QXJyYXksIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsbFBvbHlnb24ocG9seWdvbjogUG9seWdvbikge1xyXG4gICAgY29uc3QgZmlsbFN0cmlwcyA9IHRoaXMuZ2V0UG9seWdvbkZpbGxTdHJpcHMocG9seWdvbik7XHJcblxyXG4gICAgdGhpcy5maWxsV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgdHlwZTogRmlsbFdvcmtlck1lc3NhZ2VUeXBlLkZpbGxTdHJpcHMsXHJcbiAgICAgIGZpbGxTdHJpcHNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZW5kQXBwRmlsbERhdGFUb1dvcmtlcigpIHtcclxuICAgIHRoaXMuZmlsbFdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIHR5cGU6IEZpbGxXb3JrZXJNZXNzYWdlVHlwZS5GaWxsRGF0YSxcclxuICAgICAgd2lkdGg6IHRoaXMuY2FudmFzLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY2FudmFzLmhlaWdodCxcclxuICAgICAgYXBwRmlsbERhdGE6IHRoaXMuZmlsbERhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQb2x5Z29uRmlsbFN0cmlwcyhwb2x5Z29uOiBQb2x5Z29uKTogRmlsbFN0cmlwW10ge1xyXG4gICAgY29uc3QgdmVydGljZXMgPSBwb2x5Z29uLmdldFZlcnRpY2VzKCk7XHJcbiAgICBjb25zdCB2ZXJ0aWNlc0NvdW50ID0gcG9seWdvbi5nZXRWZXJ0aWNlc0NvdW50KCk7XHJcblxyXG4gICAgLy8gaW5kWzAgLi4gbi0xXVxyXG4gICAgY29uc3Qgc29ydGVkVmVydGV4SW5kaWNlcyA9IHZlcnRpY2VzLm1hcCgoX3ZlcnRleCwgaW5kZXgpID0+IGluZGV4KTtcclxuICAgIHNvcnRlZFZlcnRleEluZGljZXMuc29ydCgoaSwgaikgPT4gdmVydGljZXNbaV0ueSAtIHZlcnRpY2VzW2pdLnkpO1xyXG5cclxuICAgIGNvbnN0IHlNaW4gPSB2ZXJ0aWNlc1tzb3J0ZWRWZXJ0ZXhJbmRpY2VzWzBdXS55O1xyXG4gICAgY29uc3QgeU1heCA9IHZlcnRpY2VzW3NvcnRlZFZlcnRleEluZGljZXNbdmVydGljZXNDb3VudCAtIDFdXS55O1xyXG5cclxuICAgIC8vIEFFVFxyXG4gICAgY29uc3QgYWN0aXZlRWRnZVRhYmxlOiBBY3RpdmVFZGdlW10gPSBbXTtcclxuICAgIGxldCBrID0gMDtcclxuICAgIGxldCBwcmV2aW91c1kgPSB5TWluO1xyXG5cclxuICAgIGNvbnN0IGZpbGxTdHJpcHM6IEZpbGxTdHJpcFtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgeSA9IHlNaW4gKyAxOyB5IDw9IHlNYXg7IHkgKz0gMSkge1xyXG4gICAgICBmb3IgKDsgayA8IHZlcnRpY2VzQ291bnQ7IGsgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IHZlcnRleEluZGV4ID0gc29ydGVkVmVydGV4SW5kaWNlc1trXTtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0aWNlc1t2ZXJ0ZXhJbmRleF07XHJcbiAgICAgICAgaWYgKHZlcnRleC55ICE9PSBwcmV2aW91c1kpIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNWZXJ0ZXhJbmRleCA9IHBvbHlnb24uZ2V0UHJldmlvdXNQb2ludEluZGV4KHZlcnRleEluZGV4KTtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1ZlcnRleCA9IHZlcnRpY2VzW3ByZXZpb3VzVmVydGV4SW5kZXhdO1xyXG4gICAgICAgIGlmIChwcmV2aW91c1ZlcnRleC55ID49IHZlcnRleC55KSB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2aW91c0VkZ2UgPSBuZXcgQWN0aXZlRWRnZSh2ZXJ0ZXgsIHByZXZpb3VzVmVydGV4KTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5wdXNoKHByZXZpb3VzRWRnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGVkZ2VJbmRleCA9IGFjdGl2ZUVkZ2VUYWJsZS5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIGVkZ2UgPT4gZWRnZS5sb3dlclBvaW50ID09PSBwcmV2aW91c1ZlcnRleCAmJiBlZGdlLmhpZ2hlclBvaW50ID09PSB2ZXJ0ZXhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBhY3RpdmVFZGdlVGFibGUuc3BsaWNlKGVkZ2VJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXh0VmVydGV4SW5kZXggPSBwb2x5Z29uLmdldE5leHRQb2ludEluZGV4KHZlcnRleEluZGV4KTtcclxuICAgICAgICBjb25zdCBuZXh0VmVydGV4ID0gdmVydGljZXNbbmV4dFZlcnRleEluZGV4XTtcclxuICAgICAgICBpZiAobmV4dFZlcnRleC55ID49IHZlcnRleC55KSB7XHJcbiAgICAgICAgICBjb25zdCBuZXh0RWRnZSA9IG5ldyBBY3RpdmVFZGdlKHZlcnRleCwgbmV4dFZlcnRleCk7XHJcbiAgICAgICAgICBhY3RpdmVFZGdlVGFibGUucHVzaChuZXh0RWRnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGVkZ2VJbmRleCA9IGFjdGl2ZUVkZ2VUYWJsZS5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIGVkZ2UgPT4gZWRnZS5sb3dlclBvaW50ID09PSBuZXh0VmVydGV4ICYmIGVkZ2UuaGlnaGVyUG9pbnQgPT09IHZlcnRleFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zcGxpY2UoZWRnZUluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh5ID49IDAgJiYgeSA8IHRoaXMuY2FudmFzLmhlaWdodCkge1xyXG4gICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zb3J0KChlMSwgZTIpID0+IGUxLnggLSBlMi54KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmVFZGdlVGFibGUubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgIGNvbnN0IGUxID0gYWN0aXZlRWRnZVRhYmxlW2ldO1xyXG4gICAgICAgICAgY29uc3QgZTIgPSBhY3RpdmVFZGdlVGFibGVbaSArIDFdO1xyXG5cclxuICAgICAgICAgIC8vIHRoaXMucmVuZGVyaW5nQ29udGV4dC5maWxsUmVjdChlMS54LCB5LCBlMi54IC0gZTEueCwgMSk7XHJcbiAgICAgICAgICBmaWxsU3RyaXBzLnB1c2goe1xyXG4gICAgICAgICAgICB5LFxyXG4gICAgICAgICAgICBmcm9tWDogZTEueCxcclxuICAgICAgICAgICAgdG9YOiBlMi54XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5mb3JFYWNoKGVkZ2UgPT4gZWRnZS5uZXh0U2NhbkxpbmUoKSk7XHJcbiAgICAgIHByZXZpb3VzWSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZpbGxTdHJpcHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3QmFja2dyb3VuZFRleHR1cmUoZXZlbnQ6IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQpIHtcclxuICAgIHRoaXMuZmlsbERhdGEuYmFja2dyb3VuZFRleHR1cmUgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5zZW5kQXBwRmlsbERhdGFUb1dvcmtlcigpO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3SGVpZ2h0TWFwKGV2ZW50OiBOZXdIZWlnaHRNYXBFdmVudCkge1xyXG4gICAgdGhpcy5maWxsRGF0YS5oZWlnaHRNYXAgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5zZW5kQXBwRmlsbERhdGFUb1dvcmtlcigpO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3TGlnaHRDb2xvcihldmVudDogTmV3TGlnaHRDb2xvckV2ZW50KSB7XHJcbiAgICB0aGlzLmZpbGxEYXRhLmxpZ2h0Q29sb3IgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgdGhpcy5zZW5kQXBwRmlsbERhdGFUb1dvcmtlcigpO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3TGlnaHRWZXJzb3IoZXZlbnQ6IE5ld0xpZ2h0VmVyc29yRXZlbnQpIHtcclxuICAgIGNvbnN0IGxpZ2h0VmVyc29yID0gZXZlbnQucGF5bG9hZDtcclxuXHJcbiAgICB0aGlzLmZpbGxXb3JrZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICB0eXBlOiBGaWxsV29ya2VyTWVzc2FnZVR5cGUuTGlnaHRWZXJzb3IsXHJcbiAgICAgIHZlcnNvcjoge1xyXG4gICAgICAgIHg6IGxpZ2h0VmVyc29yLngsXHJcbiAgICAgICAgeTogbGlnaHRWZXJzb3IueSxcclxuICAgICAgICB6OiBsaWdodFZlcnNvci56XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk5ld0xpZ2h0VmVyc29yVHlwZShldmVudDogTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQpIHtcclxuICAgIHRoaXMuZmlsbERhdGEubGlnaHRWZXJzb3JUeXBlID0gZXZlbnQucGF5bG9hZDtcclxuICAgIHRoaXMuc2VuZEFwcEZpbGxEYXRhVG9Xb3JrZXIoKTtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk5ld05vcm1hbE1hcChldmVudDogTmV3Tm9ybWFsTWFwRXZlbnQpIHtcclxuICAgIHRoaXMuZmlsbERhdGEubm9ybWFsTWFwID0gZXZlbnQucGF5bG9hZDtcclxuICAgIHRoaXMuc2VuZEFwcEZpbGxEYXRhVG9Xb3JrZXIoKTtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9wb2x5Z29uLWZpbGxlci9Qb2x5Z29uRmlsbGVyLnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IEltYWdlRGF0YTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW1hZ2VEYXRhOiBJbWFnZURhdGEpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGltYWdlRGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnTmV3QmFja2dyb3VuZFRleHR1cmUnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0hlaWdodE1hcEV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBJbWFnZURhdGE7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0hlaWdodE1hcEV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbWFnZURhdGE6IEltYWdlRGF0YSkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gaW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld0hlaWdodE1hcEV2ZW50Lm5hbWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0hlaWdodE1hcEV2ZW50LnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5cclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0xpZ2h0Q29sb3JFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogQ29sb3I7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IE5ld0xpZ2h0Q29sb3JFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoY29sb3I6IENvbG9yKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBjb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodENvbG9yRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRDb2xvckV2ZW50LnRzIiwiaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuXHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdMaWdodFZlcnNvckV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBWZWN0b3IzO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdMaWdodFZlcnNvckV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsaWdodFZlcnNvcjogVmVjdG9yMykge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gbGlnaHRWZXJzb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3TGlnaHRWZXJzb3JFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFZlcnNvckV2ZW50LnRzIiwiaW1wb3J0IHsgTGlnaHRWZXJzb3JUeXBlIH0gZnJvbSAnY29tbW9uL0xpZ2h0VmVyc29yVHlwZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IExpZ2h0VmVyc29yVHlwZTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpZ2h0VmVyc29yVHlwZTogTGlnaHRWZXJzb3JUeXBlKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBsaWdodFZlcnNvclR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3Tm9ybWFsTWFwRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IEltYWdlRGF0YTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3Tm9ybWFsTWFwRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlRGF0YTogSW1hZ2VEYXRhKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3Tm9ybWFsTWFwRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3Tm9ybWFsTWFwRXZlbnQudHMiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWN0aXZlRWRnZSB7XHJcbiAgcHVibGljIGxvd2VyUG9pbnQ6IFBvaW50O1xyXG4gIHB1YmxpYyBoaWdoZXJQb2ludDogUG9pbnQ7XHJcblxyXG4gIHByaXZhdGUgaW52ZXJzZVNsb3BlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihsb3dlclBvaW50OiBQb2ludCwgaGlnaGVyUG9pbnQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLmxvd2VyUG9pbnQgPSBsb3dlclBvaW50O1xyXG4gICAgdGhpcy5oaWdoZXJQb2ludCA9IGhpZ2hlclBvaW50O1xyXG5cclxuICAgIHRoaXMuX3ggPSB0aGlzLmxvd2VyUG9pbnQueDtcclxuICAgIHRoaXMuY2FsY3VsYXRlU2xvcGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeCgpIHtcclxuICAgIHJldHVybiB0aGlzLl94O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5leHRTY2FuTGluZSgpIHtcclxuICAgIHRoaXMuX3ggKz0gdGhpcy5pbnZlcnNlU2xvcGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVNsb3BlKCkge1xyXG4gICAgaWYgKHRoaXMuaGlnaGVyUG9pbnQueSA9PT0gdGhpcy5sb3dlclBvaW50LnkpIHtcclxuICAgICAgdGhpcy5pbnZlcnNlU2xvcGUgPSA5OTk5OTk5OTk5OTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW52ZXJzZVNsb3BlID0gKHRoaXMuaGlnaGVyUG9pbnQueCAtIHRoaXMubG93ZXJQb2ludC54KSAvICh0aGlzLmhpZ2hlclBvaW50LnkgLSB0aGlzLmxvd2VyUG9pbnQueSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3BvbHlnb24tZmlsbGVyL0FjdGl2ZUVkZ2UudHMiLCJpbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdjb21tb24vQ09MT1JTJztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgTGluZVByb3BlcnRpZXMgfSBmcm9tICdjb21tb24vTGluZVByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5pbXBvcnQgeyBQb2x5Z29uRmlsbGVyIH0gZnJvbSAncG9seWdvbi1maWxsZXIvUG9seWdvbkZpbGxlcic7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5pbnRlcmZhY2UgUmVuZGVyZXJEZXBlbmRlbmNpZXMge1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcG9seWdvbkZpbGxlcjogUG9seWdvbkZpbGxlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcclxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZW5kZXJpbmdDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgcHJpdmF0ZSBwb2x5Z29uRmlsbGVyOiBQb2x5Z29uRmlsbGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFJlbmRlcmVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmIChjb250ZXh0ID09PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCBjYW52YXMgMmQgcmVuZGVyaW5nIGNvbnRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmZvbnQgPSBjb25maWd1cmF0aW9uLmNhbnZhc0ZvbnQ7XHJcblxyXG4gICAgdGhpcy5wb2x5Z29uRmlsbGVyID0gZGVwZW5kZW5jaWVzLnBvbHlnb25GaWxsZXI7XHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIuaW5qZWN0Q2FudmFzUmVuZGVyaW5nQ29udGV4dCh0aGlzLnJlbmRlcmluZ0NvbnRleHQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5zdHJva2VTdHlsZSA9IENPTE9SUy5CTEFDSy5maWxsU3R5bGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhd1BvaW50KHBvaW50OiBQb2ludCkge1xyXG4gICAgdGhpcy5kcmF3UGl4ZWwocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhd1BpeGVsKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuZmlsbFJlY3QoeCwgeSwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhd0xpbmUobGluZTogTGluZSwgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzKTogdm9pZDtcclxuICBwdWJsaWMgZHJhd0xpbmUoc3RhcnRQb2ludDogUG9pbnQsIGVuZFBvaW50OiBQb2ludCwgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzKTogdm9pZDtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG4gIHB1YmxpYyBkcmF3TGluZSguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgaWYgKGFyZ3NbMF0gaW5zdGFuY2VvZiBMaW5lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRyYXdMaW5lQmV0d2VlblBvaW50cyhhcmdzWzBdLnAxLCBhcmdzWzBdLnAyLCBhcmdzWzFdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRyYXdMaW5lQmV0d2VlblBvaW50cyhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3UGF0aChwYXRoOiBQYXRoKSB7XHJcbiAgICBjb25zdCBwYXRoTGluZVByb3BlcnRpZXMgPSBwYXRoLmdldExpbmVQcm9wZXJ0aWVzKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIHBhdGguZ2V0TGluZUl0ZXJhdG9yKCkpIHtcclxuICAgICAgdGhpcy5kcmF3TGluZShsaW5lLCBwYXRoTGluZVByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbGxUZXh0KHRleHQ6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkO1xyXG4gIHB1YmxpYyBmaWxsVGV4dCh0ZXh0OiBzdHJpbmcsIHBvaW50OiBQb2ludCk6IHZvaWQ7XHJcbiAgcHVibGljIGZpbGxUZXh0KHRleHQ6IHN0cmluZywgcG9pbnRPclg6IG51bWJlciB8IFBvaW50LCB5PzogbnVtYmVyKSB7XHJcbiAgICBsZXQgeCA9IHBvaW50T3JYO1xyXG4gICAgaWYgKHR5cGVvZiBwb2ludE9yWCA9PT0gJ29iamVjdCcgJiYgcG9pbnRPclggaW5zdGFuY2VvZiBQb2ludCkge1xyXG4gICAgICB4ID0gcG9pbnRPclgueDtcclxuICAgICAgeSA9IHBvaW50T3JYLnk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmZpbGxUZXh0KHRleHQsIDxudW1iZXI+eCwgPG51bWJlcj55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpIHtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXdMaW5lQmV0d2VlblBvaW50cyhcclxuICAgIHN0YXJ0UG9pbnQ6IFBvaW50LFxyXG4gICAgZW5kUG9pbnQ6IFBvaW50LFxyXG4gICAgbGluZVByb3BlcnRpZXM6IExpbmVQcm9wZXJ0aWVzXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBsaW5lUHJvcGVydGllcy5jb2xvci5maWxsU3R5bGU7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0Lm1vdmVUbyhzdGFydFBvaW50LngsIHN0YXJ0UG9pbnQueSk7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQubGluZVRvKGVuZFBvaW50LngsIGVuZFBvaW50LnkpO1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LnN0cm9rZSgpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9SZW5kZXJlci50cyIsImltcG9ydCB7IEhpdFRlc3RSZXN1bHQgfSBmcm9tICdjb21tb24vSGl0VGVzdFJlc3VsdCc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJ1JlbmRlcmVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFnZSB7XHJcbiAgcHVibGljIGxheWVyczogTGF5ZXJbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgcmVuZGVyKHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5yZW5kZXIocmVuZGVyZXIpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVMYXllcihsYXllcjogTGF5ZXIpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5sYXllcnMuaW5kZXhPZihsYXllcik7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpdFRlc3QocG9pbnQ6IFBvaW50KTogSGl0VGVzdFJlc3VsdCB8IG51bGwge1xyXG4gICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLmxheWVycykge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBsYXllci5oaXRUZXN0KHBvaW50KTtcclxuICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaW5kTGF5ZXJCeU5hbWUobmFtZTogc3RyaW5nKTogTGF5ZXIge1xyXG4gICAgY29uc3QgZm91bmRMYXllciA9IHRoaXMubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIubmFtZSA9PT0gbmFtZSk7XHJcblxyXG4gICAgaWYgKCFmb3VuZExheWVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTGF5ZXIgd2l0aCBuYW1lICR7bmFtZX0gZG9lcyBub3QgZXhpc3RgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm91bmRMYXllcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvU3RhZ2UudHMiLCJpbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvc2VzdFBhdGhGaW5kZXIge1xyXG4gIHB1YmxpYyBnZXRDbG9zZXN0UGF0aChwYXRoczogUGF0aFtdLCBwb2ludDogUG9pbnQpOiBQYXRoIHtcclxuICAgIGlmIChwYXRocy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXRocyBhcnJheSBpcyBlbXB0eScpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbG9zZXN0UGF0aCA9IHBhdGhzWzBdO1xyXG4gICAgbGV0IGNsb3Nlc3REaXN0YW5jZSA9IHRoaXMuZ2V0UGF0aFRvUG9pbnREaXN0YW5jZShjbG9zZXN0UGF0aCwgcG9pbnQpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgcGF0aCA9IHBhdGhzW2ldO1xyXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZ2V0UGF0aFRvUG9pbnREaXN0YW5jZShwYXRoLCBwb2ludCk7XHJcblxyXG4gICAgICBpZiAoY2xvc2VzdERpc3RhbmNlID4gZGlzdGFuY2UpIHtcclxuICAgICAgICBjbG9zZXN0UGF0aCA9IHBhdGg7XHJcbiAgICAgICAgY2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvc2VzdFBhdGg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhdGhUb1BvaW50RGlzdGFuY2UocGF0aDogUGF0aCwgcG9pbnQ6IFBvaW50KSB7XHJcbiAgICByZXR1cm4gcG9pbnQuZ2V0RGlzdGFuY2VTcXVhcmVkVG8ocGF0aC5nZXRXZWlnaHRlZENlbnRlclBvaW50KCkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9DbG9zZXN0UGF0aEZpbmRlci50cyIsImV4cG9ydCBjbGFzcyBJbWFnZURvd25sb2FkZXIge1xyXG4gIHB1YmxpYyBhc3luYyBpbWFnZVRvSW1hZ2VEYXRhKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KTogUHJvbWlzZTxJbWFnZURhdGE+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCAyZCBkcmF3aW5nIGNhbnZhcyBjb250ZXh0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzSW1hZ2VEb3dubG9hZGVkKGltYWdlKSkge1xyXG4gICAgICBhd2FpdCB0aGlzLndhaXRGb3JJbWFnZShpbWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gaW1hZ2UubmF0dXJhbFdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGltYWdlLm5hdHVyYWxIZWlnaHQ7XHJcblxyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG5cclxuICAgIHJldHVybiBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWFnZS5uYXR1cmFsV2lkdGgsIGltYWdlLm5hdHVyYWxIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0ltYWdlRG93bmxvYWRlZChpbWFnZTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgaWYgKCFpbWFnZS5jb21wbGV0ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGltYWdlLm5hdHVyYWxXaWR0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHdhaXRGb3JJbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZnVuY3Rpb24gb25Mb2FkKCkge1xyXG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xyXG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBvbkVycm9yKCkge1xyXG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xyXG4gICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XHJcbiAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xyXG4gICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL0ltYWdlRG93bmxvYWRlci50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQge1xyXG4gIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgTmV3TGlnaHRDb2xvckV2ZW50LFxyXG4gIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LFxyXG4gIE5ld05vcm1hbE1hcEV2ZW50XHJcbn0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IExpZ2h0VmVyc29yVHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFZlcnNvclR5cGUnO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuXHJcbmltcG9ydCB7IEltYWdlRG93bmxvYWRlciB9IGZyb20gJ3NlcnZpY2VzL0ltYWdlRG93bmxvYWRlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBJbnB1dERhdGFJbml0aWFsaXplckRlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgcG9seWdvbkxheWVyOiBMYXllcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0RGF0YUluaXRpYWxpemVyIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcG9seWdvbkxheWVyOiBMYXllcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBJbnB1dERhdGFJbml0aWFsaXplckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5pbWFnZURvd25sb2FkZXIgPSBkZXBlbmRlbmNpZXMuaW1hZ2VEb3dubG9hZGVyO1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkxheWVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGluaXQoKSB7XHJcbiAgICB0aGlzLmFkZEluaXRpYWxQb2x5Z29ucygpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlc1RvRG93bmxvYWQ6IEhUTUxJbWFnZUVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGJhY2tncm91bmRUZXh0dXJlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGJhY2tncm91bmRUZXh0dXJlSW1hZ2Uuc3JjID0gY29uZmlndXJhdGlvbi5wcmVzZXRCYWNrZ3JvdW5kVGV4dHVyZXNbMF07XHJcblxyXG4gICAgY29uc3Qgbm9ybWFsTWFwSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG5vcm1hbE1hcEltYWdlLnNyYyA9IGNvbmZpZ3VyYXRpb24ucHJlc2V0Tm9ybWFsTWFwc1swXTtcclxuXHJcbiAgICBjb25zdCBoZWlnaHRNYXBJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaGVpZ2h0TWFwSW1hZ2Uuc3JjID0gY29uZmlndXJhdGlvbi5wcmVzZXRIZWlnaHRNYXBzWzBdO1xyXG5cclxuICAgIGltYWdlc1RvRG93bmxvYWQucHVzaChiYWNrZ3JvdW5kVGV4dHVyZUltYWdlLCBub3JtYWxNYXBJbWFnZSwgaGVpZ2h0TWFwSW1hZ2UpO1xyXG5cclxuICAgIGNvbnN0IGRvd25sb2FkZWRJbWFnZURhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgaW1hZ2VzVG9Eb3dubG9hZC5tYXAoaW1hZ2UgPT4gdGhpcy5pbWFnZURvd25sb2FkZXIuaW1hZ2VUb0ltYWdlRGF0YShpbWFnZSkpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQoZG93bmxvYWRlZEltYWdlRGF0YVswXSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3Tm9ybWFsTWFwRXZlbnQoZG93bmxvYWRlZEltYWdlRGF0YVsxXSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3SGVpZ2h0TWFwRXZlbnQoZG93bmxvYWRlZEltYWdlRGF0YVsyXSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRDb2xvckV2ZW50KGNvbmZpZ3VyYXRpb24ucHJlc2V0TGlnaHRDb2xvcikpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQoTGlnaHRWZXJzb3JUeXBlLkNvbnN0YW50KSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgLy8gTm90aGluZyB0byBkZXN0cm95IGhlcmVcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkSW5pdGlhbFBvbHlnb25zKCkge1xyXG4gICAgY29uc3QgcG9pbnRzMSA9IFtcclxuICAgICAgbmV3IFBvaW50KDk0LCA5MyksXHJcbiAgICAgIG5ldyBQb2ludCg2OSwgMzg2KSxcclxuICAgICAgbmV3IFBvaW50KDE5MCwgNTI1KSxcclxuICAgICAgbmV3IFBvaW50KDY2NCwgMzY0KVxyXG4gICAgXTtcclxuICAgIGNvbnN0IHBvbHlnb24xID0gbmV3IFBvbHlnb24ocG9pbnRzMSwgTGluZVByb3BlcnRpZXMuZ2V0RGVmYXVsdCgpKTtcclxuXHJcbiAgICBjb25zdCBwb2ludHMyID0gW1xyXG4gICAgICBuZXcgUG9pbnQoNzc3LCAxNDIpLFxyXG4gICAgICBuZXcgUG9pbnQoNzAwLCA1MCksXHJcbiAgICAgIG5ldyBQb2ludCg0MzMsIDM0KSxcclxuICAgICAgbmV3IFBvaW50KDQwNCwgMTU2KSxcclxuICAgICAgbmV3IFBvaW50KDUyNywgMjYzKSxcclxuICAgICAgbmV3IFBvaW50KDc1MCwgMzUwKVxyXG4gICAgXTtcclxuICAgIGNvbnN0IHBvbHlnb24yID0gbmV3IFBvbHlnb24ocG9pbnRzMiwgTGluZVByb3BlcnRpZXMuZ2V0RGVmYXVsdCgpKTtcclxuXHJcbiAgICB0aGlzLnBvbHlnb25MYXllci5wYXRocy5wdXNoKHBvbHlnb24xLCBwb2x5Z29uMik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9JbnB1dERhdGFJbml0aWFsaXplci50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBOZXdMaWdodFZlcnNvckV2ZW50LCBOZXdMaWdodFZlcnNvclR5cGVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmltcG9ydCB7IExpZ2h0VmVyc29yVHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFZlcnNvclR5cGUnO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5cclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW50ZXJmYWNlIExpZ2h0U2ltdWxhdG9yRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpZ2h0U2ltdWxhdG9yIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgc3RlcEluUmFkaWFucyA9IGNvbmZpZ3VyYXRpb24uY2lyY2xpbmdMaWdodC5pbnRlcnZhbCAvXHJcbiAgICBjb25maWd1cmF0aW9uLmNpcmNsaW5nTGlnaHQubGFwVGltZSAqXHJcbiAgICAyICpcclxuICAgIE1hdGguUEk7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHJhZGlhbnNNb2R1bG9WYWx1ZSA9IDIgKiBNYXRoLlBJO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBwcml2YXRlIGNpcmNsaW5nTGlnaHRJbnRlcnZhbElkOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBjaXJjbGluZ0xpZ2h0QW5nbGUgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IExpZ2h0U2ltdWxhdG9yRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZSA9IHRoaXMub25OZXdMaWdodFZlcnNvclR5cGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2lyY2xpbmdMaWdodFRpY2sgPSB0aGlzLmNpcmNsaW5nTGlnaHRUaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICB0aGlzLm9uTmV3TGlnaHRWZXJzb3JUeXBlXHJcbiAgICApO1xyXG4gICAgdGhpcy5zdG9wQ2lyY2xpbmdMaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk5ld0xpZ2h0VmVyc29yVHlwZShldmVudDogTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQpIHtcclxuICAgIHN3aXRjaCAoZXZlbnQucGF5bG9hZCkge1xyXG4gICAgICBjYXNlIExpZ2h0VmVyc29yVHlwZS5Db25zdGFudDpcclxuICAgICAgICB0aGlzLnN0b3BDaXJjbGluZ0xpZ2h0KCk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaExpZ2h0VmVyc29yKG5ldyBWZWN0b3IzKDAsIDAsIDEpKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTGlnaHRWZXJzb3JUeXBlLkNpcmNsaW5nOlxyXG4gICAgICAgIHRoaXMuc3RhcnRDaXJjbGluZ0xpZ2h0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsaWdodCB2ZXJzb3IgdHlwZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwYXRjaExpZ2h0VmVyc29yKHZlcnNvcjogVmVjdG9yMykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRWZXJzb3JFdmVudCh2ZXJzb3IpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRDaXJjbGluZ0xpZ2h0KCkge1xyXG4gICAgdGhpcy5jaXJjbGluZ0xpZ2h0SW50ZXJ2YWxJZCA9IHNldEludGVydmFsKFxyXG4gICAgICB0aGlzLmNpcmNsaW5nTGlnaHRUaWNrLFxyXG4gICAgICBjb25maWd1cmF0aW9uLmNpcmNsaW5nTGlnaHQuaW50ZXJ2YWxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNpcmNsaW5nTGlnaHRUaWNrKCkge1xyXG4gICAgY29uc3QgeCA9IGNvbmZpZ3VyYXRpb24uY2lyY2xpbmdMaWdodC5kaXN0YW5jZSAqIE1hdGguY29zKHRoaXMuY2lyY2xpbmdMaWdodEFuZ2xlKTtcclxuICAgIGNvbnN0IHkgPSBjb25maWd1cmF0aW9uLmNpcmNsaW5nTGlnaHQuZGlzdGFuY2UgKiBNYXRoLnNpbih0aGlzLmNpcmNsaW5nTGlnaHRBbmdsZSk7XHJcblxyXG4gICAgY29uc3QgbGlnaHRWZWN0b3IgPSBuZXcgVmVjdG9yMyh4LCB5LCBjb25maWd1cmF0aW9uLmNpcmNsaW5nTGlnaHQuaGVpZ2h0KTtcclxuICAgIGNvbnN0IGxpZ2h0VmVyc29yID0gbGlnaHRWZWN0b3Iubm9ybWFsaXplKCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRWZXJzb3JFdmVudChsaWdodFZlcnNvcikpO1xyXG5cclxuICAgIHRoaXMuY2lyY2xpbmdMaWdodEFuZ2xlICs9IExpZ2h0U2ltdWxhdG9yLnN0ZXBJblJhZGlhbnM7XHJcbiAgICBpZiAodGhpcy5jaXJjbGluZ0xpZ2h0QW5nbGUgPj0gTGlnaHRTaW11bGF0b3IucmFkaWFuc01vZHVsb1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2lyY2xpbmdMaWdodEFuZ2xlIC09IExpZ2h0U2ltdWxhdG9yLnJhZGlhbnNNb2R1bG9WYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcENpcmNsaW5nTGlnaHQoKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuY2lyY2xpbmdMaWdodEludGVydmFsSWQpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9MaWdodFNpbXVsYXRvci50cyIsImltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2x5Z29uQ2xpcHBlciB7XHJcbiAgcHVibGljIGNsaXBQb2x5Z29ucyhwb2x5Z29uMTogUG9seWdvbiwgcG9seWdvbjI6IFBvbHlnb24pIHtcclxuICAgIGlmIChwb2x5Z29uMS5pc0NvbnZleCgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsaXBQb2x5Z29uKHBvbHlnb24yLCBwb2x5Z29uMSk7XHJcbiAgICB9IGVsc2UgaWYgKHBvbHlnb24yLmlzQ29udmV4KCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2xpcFBvbHlnb24ocG9seWdvbjEsIHBvbHlnb24yKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvdGggcG9seWdvbnMgYXJlIGNvbmNhdmUnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBzdWJqZWN0UG9seWdvblxyXG4gICAqIEBwYXJhbSBjbGlwcGluZ1BvbHlnb24gTXVzdCBiZSBjb252ZXhcclxuICAgKi9cclxuICBwdWJsaWMgY2xpcFBvbHlnb24oc3ViamVjdFBvbHlnb246IFBvbHlnb24sIGNsaXBwaW5nUG9seWdvbjogUG9seWdvbikge1xyXG4gICAgY29uc3QgY2xpcHBpbmdQb2x5Z29uQ2VudGVyID0gY2xpcHBpbmdQb2x5Z29uLmdldFdlaWdodGVkQ2VudGVyUG9pbnQoKTtcclxuXHJcbiAgICBsZXQgb3V0cHV0OiBQb2ludFtdID0gc3ViamVjdFBvbHlnb24uZ2V0VmVydGljZXMoKTtcclxuICAgIGNvbnN0IGNsaXBwaW5nUG9seWdvbkVkZ2VzOiBMaW5lW10gPSBbXTtcclxuICAgIGNvbnN0IGNsaXBwaW5nUG9seWdvblZlcnRpY2VzID0gY2xpcHBpbmdQb2x5Z29uLmdldFZlcnRpY2VzKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlwcGluZ1BvbHlnb25WZXJ0aWNlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBlZGdlID0gbmV3IExpbmUoXHJcbiAgICAgICAgY2xpcHBpbmdQb2x5Z29uVmVydGljZXNbKGkgKyAxKSAlIGNsaXBwaW5nUG9seWdvblZlcnRpY2VzLmxlbmd0aF0sXHJcbiAgICAgICAgY2xpcHBpbmdQb2x5Z29uVmVydGljZXNbaV1cclxuICAgICAgKTtcclxuICAgICAgY2xpcHBpbmdQb2x5Z29uRWRnZXMucHVzaChlZGdlKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgY2xpcHBpbmdQb2x5Z29uRWRnZXMpIHtcclxuICAgICAgY29uc3QgaW5wdXQgPSBvdXRwdXQ7XHJcbiAgICAgIG91dHB1dCA9IFtdO1xyXG4gICAgICBsZXQgcHAgPSBpbnB1dFtpbnB1dC5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgIGlucHV0LmZvckVhY2gocCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTYW1lU2lkZShwLCBjbGlwcGluZ1BvbHlnb25DZW50ZXIsIGVkZ2UpKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuaXNTYW1lU2lkZShwcCwgY2xpcHBpbmdQb2x5Z29uQ2VudGVyLCBlZGdlKSkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaCh0aGlzLmdldEludGVyc2VjdGlvblBvaW50KG5ldyBMaW5lKHBwLCBwKSwgZWRnZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb3V0cHV0LnB1c2gocCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0aGlzLmlzU2FtZVNpZGUocHAsIGNsaXBwaW5nUG9seWdvbkNlbnRlciwgZWRnZSkpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2godGhpcy5nZXRJbnRlcnNlY3Rpb25Qb2ludChuZXcgTGluZShwcCwgcCksIGVkZ2UpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHAgPSBwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3V0cHV0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvdXRwdXRXaXRob3V0RHVwbGljYXRlczogUG9pbnRbXSA9IFtdO1xyXG4gICAgb3V0cHV0V2l0aG91dER1cGxpY2F0ZXMucHVzaChvdXRwdXRbMF0pO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvdXRwdXQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFQb2ludC5lcHNpbG9uRXF1YWxzKG91dHB1dFtpXSwgb3V0cHV0V2l0aG91dER1cGxpY2F0ZXNbb3V0cHV0V2l0aG91dER1cGxpY2F0ZXMubGVuZ3RoIC0gMV0pXHJcbiAgICAgICkge1xyXG4gICAgICAgIG91dHB1dFdpdGhvdXREdXBsaWNhdGVzLnB1c2gob3V0cHV0W2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXHJcbiAgICBjb25zdCByb3VuZGVkUG9pbnRzID0gb3V0cHV0V2l0aG91dER1cGxpY2F0ZXMubWFwKHBvaW50ID0+IHBvaW50LmZsb29yKCkpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9seWdvbihyb3VuZGVkUG9pbnRzLCBzdWJqZWN0UG9seWdvbi5saW5lUHJvcGVydGllcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzU2FtZVNpZGUocDE6IFBvaW50LCBwMjogUG9pbnQsIGxpbmU6IExpbmUpIHtcclxuICAgIGNvbnN0IHAxRGlyID0gbGluZS5nZXREaXJlY3Rpb24ocDEpO1xyXG4gICAgY29uc3QgcDJEaXIgPSBsaW5lLmdldERpcmVjdGlvbihwMik7XHJcblxyXG4gICAgaWYgKHAxRGlyID09PSBwMkRpciB8fCBwMURpciA9PT0gMCB8fCBwMkRpciA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEludGVyc2VjdGlvblBvaW50KGxpbmUxOiBMaW5lLCBsaW5lMjogTGluZSkge1xyXG4gICAgY29uc3QgZGlyZWN0aW9uMSA9IFBvaW50LnN1YnRyYWN0KGxpbmUxLnAyLCBsaW5lMS5wMSk7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24yID0gUG9pbnQuc3VidHJhY3QobGluZTIucDIsIGxpbmUyLnAxKTtcclxuXHJcbiAgICBjb25zdCBkb3RQZXJwID0gZGlyZWN0aW9uMS54ICogZGlyZWN0aW9uMi55IC0gZGlyZWN0aW9uMS55ICogZGlyZWN0aW9uMi54O1xyXG5cclxuICAgIGNvbnN0IGMgPSBuZXcgUG9pbnQobGluZTIucDEueCAtIGxpbmUxLnAxLngsIGxpbmUyLnAxLnkgLSBsaW5lMS5wMS55KTtcclxuICAgIGNvbnN0IHQgPSAoYy54ICogZGlyZWN0aW9uMi55IC0gYy55ICogZGlyZWN0aW9uMi54KSAvIGRvdFBlcnA7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQb2ludChsaW5lMS5wMS54ICsgdCAqIGRpcmVjdGlvbjEueCwgbGluZTEucDEueSArIHQgKiBkaXJlY3Rpb24xLnkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9Qb2x5Z29uQ2xpcHBlci50cyIsImltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICdSZW5kZXJlcic7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXREYXRhU2VydmljZSB9IGZyb20gJ3VpL0lucHV0RGF0YVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICd1aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXInO1xyXG5pbXBvcnQgeyBOZXdQb2x5Z29uVUlDb250cm9sbGVyIH0gZnJvbSAndWkvTmV3UG9seWdvblVJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFBhdGhEcmFnZ2luZ1NlcnZpY2UgfSBmcm9tICd1aS9QYXRoRHJhZ2dpbmdTZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9pbnREcmFnZ2luZ1NlcnZpY2UgfSBmcm9tICd1aS9Qb2ludERyYWdnaW5nU2VydmljZSc7XHJcbmltcG9ydCB7IFBvaW50SW5zZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAndWkvUG9pbnRJbnNlcnRlclNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb2ludFJlbW92ZXJTZXJ2aWNlIH0gZnJvbSAndWkvUG9pbnRSZW1vdmVyU2VydmljZSc7XHJcbmltcG9ydCB7IFBvaW50U3luY1NlcnZpY2UgfSBmcm9tICd1aS9Qb2ludFN5bmNTZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VyaWFsaXphdGlvblNlcnZpY2UgfSBmcm9tICd1aS9TZXJpYWxpemF0aW9uU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBDbG9zZXN0UGF0aEZpbmRlciB9IGZyb20gJ3NlcnZpY2VzL0Nsb3Nlc3RQYXRoRmluZGVyJztcclxuaW1wb3J0IHsgSW1hZ2VEb3dubG9hZGVyIH0gZnJvbSAnc2VydmljZXMvSW1hZ2VEb3dubG9hZGVyJztcclxuaW1wb3J0IHsgUG9seWdvbkNsaXBwZXIgfSBmcm9tICdzZXJ2aWNlcy9Qb2x5Z29uQ2xpcHBlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBMaW5lQ2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9MaW5lQ2xpY2tFdmVudCc7XHJcblxyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheSc7XHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zQnV0dG9uJztcclxuaW1wb3J0ICd1aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNEaWFsb2cnO1xyXG5pbXBvcnQgeyBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlIH0gZnJvbSAndWkvUG9seWdvbkNsaXBwaW5nU2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgVUlDb250cm9sbGVyRGVwZW5kZW5jaWVzIHtcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgcG9seWdvbkNsaXBwZXI6IFBvbHlnb25DbGlwcGVyO1xyXG4gIGNsb3Nlc3RQYXRoRmluZGVyOiBDbG9zZXN0UGF0aEZpbmRlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVJQ29udHJvbGxlciBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwb2x5Z29uQ2xpcHBlcjogUG9seWdvbkNsaXBwZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjbG9zZXN0UGF0aEZpbmRlcjogQ2xvc2VzdFBhdGhGaW5kZXI7XHJcblxyXG4gIHByaXZhdGUgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgcHJpdmF0ZSBhcHBsaWNhdGlvblVJQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSB1aVNlcnZpY2VzOiBTZXJ2aWNlW10gPSBbXTtcclxuICBwcml2YXRlIG5ld1BvbHlnb25VSUNvbnRyb2xsZXI6IE5ld1BvbHlnb25VSUNvbnRyb2xsZXI7XHJcbiAgcHJpdmF0ZSBwYXRoRHJhZ2dpbmdTZXJ2aWNlOiBQYXRoRHJhZ2dpbmdTZXJ2aWNlO1xyXG4gIHByaXZhdGUgcG9seWdvbkNsaXBwaW5nU2VydmljZTogUG9seWdvbkNsaXBwaW5nU2VydmljZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBVSUNvbnRyb2xsZXJEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIHRoaXMucmVuZGVyZXIgPSBkZXBlbmRlbmNpZXMucmVuZGVyZXI7XHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5pbWFnZURvd25sb2FkZXIgPSBkZXBlbmRlbmNpZXMuaW1hZ2VEb3dubG9hZGVyO1xyXG4gICAgdGhpcy5wb2x5Z29uQ2xpcHBlciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uQ2xpcHBlcjtcclxuICAgIHRoaXMuY2xvc2VzdFBhdGhGaW5kZXIgPSBkZXBlbmRlbmNpZXMuY2xvc2VzdFBhdGhGaW5kZXI7XHJcblxyXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICBjb25zdCBhcHBsaWNhdGlvblVJQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlndXJhdGlvbi5hcHBsaWNhdGlvblVJQ29udGFpbmVySUQpO1xyXG4gICAgaWYgKCFhcHBsaWNhdGlvblVJQ29udGFpbmVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXBwbGljYXRpb24gVUkgY29udGFpbmVyIG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBwbGljYXRpb25VSUNvbnRhaW5lciA9IGFwcGxpY2F0aW9uVUlDb250YWluZXI7XHJcblxyXG4gICAgdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgPSBuZXcgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyKHRoaXMuY2FudmFzKTtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlTmV3UG9seWdvblVJQ29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5jcmVhdGVQb2ludERyYWdnaW5nU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVQb2ludEluc2VydGVyU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVQb2ludFJlbW92ZXJTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBvaW50U3luY1NlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlUGF0aERyYWdnaW5nU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVTZXJpYWxpemF0aW9uU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVJbnB1dERhdGFTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBvbHlnb25DbGlwcGluZ1NlcnZpY2UoKTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMuZm9yRWFjaCh1aVNlcnZpY2UgPT4gdWlTZXJ2aWNlLmluaXQoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5mb3JFYWNoKHVpU2VydmljZSA9PiB1aVNlcnZpY2UuZGVzdHJveSgpKTtcclxuICAgIHRoaXMudWlTZXJ2aWNlcy5zcGxpY2UoMCwgdGhpcy51aVNlcnZpY2VzLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIWV2ZW50LmN0cmxLZXkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGF0aERyYWdnaW5nU2VydmljZS5zdGFydE1vdmluZ1BhdGgoZXZlbnQpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgaWYgKHRoaXMucGF0aERyYWdnaW5nU2VydmljZS5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb2ludCA9IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLmdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgIGlmIChldmVudC5zaGlmdEtleSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlLmNsaXBQb2x5Z29ucyhwb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGl0VGVzdFJlc3VsdCA9IHRoaXMuc3RhZ2UuaGl0VGVzdChwb2ludCk7XHJcblxyXG4gICAgaWYgKCFoaXRUZXN0UmVzdWx0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5ld1BvbHlnb25VSUNvbnRyb2xsZXIuYWRkTmV3UG9pbnQocG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaGl0VGVzdFJlc3VsdC5wYXRoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgIG5ldyBMaW5lQ2xpY2tFdmVudChoaXRUZXN0UmVzdWx0LmxpbmUsIGhpdFRlc3RSZXN1bHQucGF0aCwgcG9pbnQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQb2ludFN5bmNTZXJ2aWNlKCkge1xyXG4gICAgY29uc3QgcG9pbnRTeW5jU2VydmljZSA9IG5ldyBQb2ludFN5bmNTZXJ2aWNlKHtcclxuICAgICAgY29udGFpbmVyOiB0aGlzLmFwcGxpY2F0aW9uVUlDb250YWluZXIsXHJcbiAgICAgIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChwb2ludFN5bmNTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9pbnRSZW1vdmVyU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHBvaW50UmVtb3ZlclNlcnZpY2UgPSBuZXcgUG9pbnRSZW1vdmVyU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHBvaW50UmVtb3ZlclNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQb2ludERyYWdnaW5nU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHBvaW50RHJhZ2dpbmdTZXJ2aWNlID0gbmV3IFBvaW50RHJhZ2dpbmdTZXJ2aWNlKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXNcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHBvaW50RHJhZ2dpbmdTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTmV3UG9seWdvblVJQ29udHJvbGxlcigpIHtcclxuICAgIHRoaXMubmV3UG9seWdvblVJQ29udHJvbGxlciA9IG5ldyBOZXdQb2x5Z29uVUlDb250cm9sbGVyKHtcclxuICAgICAgYXBwbGljYXRpb25VSUNvbnRhaW5lcjogdGhpcy5hcHBsaWNhdGlvblVJQ29udGFpbmVyLFxyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZSxcclxuICAgICAgcG9seWdvbkxheWVyOiB0aGlzLnN0YWdlLmZpbmRMYXllckJ5TmFtZShMRVguUE9MWUdPTl9MQVlFUl9OQU1FKSxcclxuICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXHJcbiAgICAgIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIsXHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHRoaXMubmV3UG9seWdvblVJQ29udHJvbGxlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVBvaW50SW5zZXJ0ZXJTZXJ2aWNlKCkge1xyXG4gICAgY29uc3QgcG9pbnRJbnNlcnRlclNlcnZpY2UgPSBuZXcgUG9pbnRJbnNlcnRlclNlcnZpY2Uoe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChwb2ludEluc2VydGVyU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVBhdGhEcmFnZ2luZ1NlcnZpY2UoKSB7XHJcbiAgICB0aGlzLnBhdGhEcmFnZ2luZ1NlcnZpY2UgPSBuZXcgUGF0aERyYWdnaW5nU2VydmljZSh7XHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlLFxyXG4gICAgICBjbG9zZXN0UGF0aEZpbmRlcjogdGhpcy5jbG9zZXN0UGF0aEZpbmRlclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLnB1c2godGhpcy5wYXRoRHJhZ2dpbmdTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlU2VyaWFsaXphdGlvblNlcnZpY2UoKSB7XHJcbiAgICBjb25zdCBzZXJpYWxpemF0aW9uU2VydmljZSA9IG5ldyBTZXJpYWxpemF0aW9uU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChzZXJpYWxpemF0aW9uU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUlucHV0RGF0YVNlcnZpY2UoKSB7XHJcbiAgICBjb25zdCBpbnB1dERhdGFTZXJ2aWNlID0gbmV3IElucHV0RGF0YVNlcnZpY2Uoe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBpbWFnZURvd25sb2FkZXI6IHRoaXMuaW1hZ2VEb3dubG9hZGVyXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChpbnB1dERhdGFTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9seWdvbkNsaXBwaW5nU2VydmljZSgpIHtcclxuICAgIHRoaXMucG9seWdvbkNsaXBwaW5nU2VydmljZSA9IG5ldyBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlKHtcclxuICAgICAgcG9seWdvbkNsaXBwZXI6IHRoaXMucG9seWdvbkNsaXBwZXIsXHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIHBvbHlnb25MYXllcjogdGhpcy5zdGFnZS5maW5kTGF5ZXJCeU5hbWUoTEVYLlBPTFlHT05fTEFZRVJfTkFNRSksXHJcbiAgICAgIGNsb3Nlc3RQYXRoRmluZGVyOiB0aGlzLmNsb3Nlc3RQYXRoRmluZGVyXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaCh0aGlzLnBvbHlnb25DbGlwcGluZ1NlcnZpY2UpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9VSUNvbnRyb2xsZXIudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtcclxuICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEV2ZW50LFxyXG4gIE5ld0xpZ2h0Q29sb3JFdmVudCxcclxuICBOZXdMaWdodFZlcnNvclR5cGVFdmVudCxcclxuICBOZXdOb3JtYWxNYXBFdmVudFxyXG59IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBJbWFnZURvd25sb2FkZXIgfSBmcm9tICdzZXJ2aWNlcy9JbWFnZURvd25sb2FkZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclNlbGVjdERpYWxvZyB9IGZyb20gJ3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZyc7XHJcbmltcG9ydCB7IERpYWxvZ092ZXJsYXkgfSBmcm9tICd1aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXknO1xyXG5pbXBvcnQgeyBJbWFnZVNlbGVjdERpYWxvZyB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZyc7XHJcblxyXG5pbXBvcnQgeyBMaWdodFZlcnNvclR5cGUgfSBmcm9tICdjb21tb24vTGlnaHRWZXJzb3JUeXBlJztcclxuXHJcbmludGVyZmFjZSBTZXJpYWxpemF0aW9uU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dERhdGFTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBpbnB1dERhdGFDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGlhbG9nT3ZlcmxheTogRGlhbG9nT3ZlcmxheTtcclxuICBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgaW1hZ2VEb3dubG9hZGVyOiBJbWFnZURvd25sb2FkZXI7XHJcblxyXG4gIHByaXZhdGUgb3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBwcml2YXRlIGJhY2tncm91bmRUZXh0dXJlRGlhbG9nOiBJbWFnZVNlbGVjdERpYWxvZztcclxuXHJcbiAgcHJpdmF0ZSBvcGVuTGlnaHRDb2xvckRpYWxvZ0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBsaWdodENvbG9yRGlhbG9nOiBDb2xvclNlbGVjdERpYWxvZztcclxuXHJcbiAgcHJpdmF0ZSBsaWdodFZlcnNvckNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBsaWdodFZlcnNvclNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgb3BlbkhlaWdodE1hcERpYWxvZ0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBoZWlnaHRNYXBEaWFsb2c6IEltYWdlU2VsZWN0RGlhbG9nO1xyXG5cclxuICBwcml2YXRlIG9wZW5Ob3JtYWxNYXBEaWFsb2dCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgbm9ybWFsTWFwRGlhbG9nOiBJbWFnZVNlbGVjdERpYWxvZztcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBTZXJpYWxpemF0aW9uU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5pbWFnZURvd25sb2FkZXIgPSBkZXBlbmRlbmNpZXMuaW1hZ2VEb3dubG9hZGVyO1xyXG5cclxuICAgIHRoaXMuc2V0dXBCYWNrZ3JvdW5kVGV4dHVyZURpYWxvZygpO1xyXG4gICAgdGhpcy5zZXR1cExpZ2h0VmVyc29yU2VsZWN0KCk7XHJcbiAgICB0aGlzLnNldHVwTGlnaHRDb2xvckRpYWxvZygpO1xyXG4gICAgdGhpcy5zZXR1cE5vcm1hbE1hcERpYWxvZygpO1xyXG4gICAgdGhpcy5zZXR1cEhlaWdodE1hcERpYWxvZygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICBjb25zdCBpbnB1dERhdGFDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZGF0YS1jb250YWluZXInKTtcclxuICAgIGlmICghaW5wdXREYXRhQ29udGFpbmVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5wdXQgZGF0YSBjb250YWluZXIgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIgPSBpbnB1dERhdGFDb250YWluZXI7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm9wZW5CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0J1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm9wZW5MaWdodENvbG9yRGlhbG9nQnV0dG9uKTtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMub3Blbk5vcm1hbE1hcERpYWxvZ0J1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm9wZW5IZWlnaHRNYXBEaWFsb2dCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5saWdodFZlcnNvckNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgZGlhbG9nT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FwcC1kaWFsb2ctb3ZlcmxheScpO1xyXG4gICAgaWYgKCFkaWFsb2dPdmVybGF5KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRGlhbG9nIG92ZXJsYXkgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkgPSA8RGlhbG9nT3ZlcmxheT5kaWFsb2dPdmVybGF5O1xyXG5cclxuICAgIHRoaXMub3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdjbGljaycsXHJcbiAgICAgIHRoaXMub3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nXHJcbiAgICApO1xyXG4gICAgdGhpcy5vcGVuTGlnaHRDb2xvckRpYWxvZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2cpO1xyXG4gICAgdGhpcy5vcGVuTm9ybWFsTWFwRGlhbG9nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuTm9ybWFsTWFwRGlhbG9nKTtcclxuICAgIHRoaXMub3BlbkhlaWdodE1hcERpYWxvZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbkhlaWdodE1hcERpYWxvZyk7XHJcbiAgICB0aGlzLmxpZ2h0VmVyc29yU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25MaWdodFZlcnNvclNlbGVjdENoYW5nZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgdGhpcy5vcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2dCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2NsaWNrJyxcclxuICAgICAgdGhpcy5vcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2dcclxuICAgICk7XHJcbiAgICB0aGlzLmJhY2tncm91bmRUZXh0dXJlRGlhbG9nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQ2xvc2VkKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmVEaWFsb2cuY2xvc2UoKTtcclxuXHJcbiAgICB0aGlzLm9wZW5MaWdodENvbG9yRGlhbG9nQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vcGVuTGlnaHRDb2xvckRpYWxvZyk7XHJcbiAgICB0aGlzLmxpZ2h0Q29sb3JEaWFsb2cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uTGlnaHRDb2xvckRpYWxvZ0Nsb3NlZCk7XHJcbiAgICB0aGlzLmxpZ2h0Q29sb3JEaWFsb2cuY2xvc2UoKTtcclxuXHJcbiAgICB0aGlzLm9wZW5IZWlnaHRNYXBEaWFsb2dCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5IZWlnaHRNYXBEaWFsb2cpO1xyXG4gICAgdGhpcy5oZWlnaHRNYXBEaWFsb2cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uSGVpZ2h0TWFwRGlhbG9nQ2xvc2VkKTtcclxuICAgIHRoaXMuaGVpZ2h0TWFwRGlhbG9nLmNsb3NlKCk7XHJcblxyXG4gICAgdGhpcy5vcGVuTm9ybWFsTWFwRGlhbG9nQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuTm9ybWFsTWFwRGlhbG9nKTtcclxuICAgIHRoaXMubm9ybWFsTWFwRGlhbG9nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbk5vcm1hbE1hcERpYWxvZ0Nsb3NlZCk7XHJcbiAgICB0aGlzLm5vcm1hbE1hcERpYWxvZy5jbG9zZSgpO1xyXG5cclxuICAgIHRoaXMubGlnaHRWZXJzb3JTZWxlY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkxpZ2h0VmVyc29yU2VsZWN0Q2hhbmdlKTtcclxuICB9XHJcblxyXG4gIC8vICNyZWdpb24gQmFja2dyb3VuZCB0ZXh0dXJlIGRpYWxvZ1xyXG4gIHByaXZhdGUgc2V0dXBCYWNrZ3JvdW5kVGV4dHVyZURpYWxvZygpIHtcclxuICAgIHRoaXMub3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLm9wZW5CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0J1dHRvbi5pbm5lclRleHQgPSAnU2VsZWN0IGJhY2tncm91bmQgdGV4dHVyZSc7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZURpYWxvZyA9IG5ldyBJbWFnZVNlbGVjdERpYWxvZyhjb25maWd1cmF0aW9uLnByZXNldEJhY2tncm91bmRUZXh0dXJlcyk7XHJcbiAgICB0aGlzLmJhY2tncm91bmRUZXh0dXJlRGlhbG9nLm5hbWUgPSAnQmFja2dyb3VuZCB0ZXh0dXJlJztcclxuXHJcbiAgICB0aGlzLm9wZW5CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZyA9IHRoaXMub3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQmFja2dyb3VuZFRleHR1cmVEaWFsb2dDbG9zZWQgPSB0aGlzLm9uQmFja2dyb3VuZFRleHR1cmVEaWFsb2dDbG9zZWQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nKCkge1xyXG4gICAgdGhpcy5kaWFsb2dPdmVybGF5LnNob3dEaWFsb2codGhpcy5iYWNrZ3JvdW5kVGV4dHVyZURpYWxvZyk7XHJcbiAgICB0aGlzLmJhY2tncm91bmRUZXh0dXJlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQ2xvc2VkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgb25CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0Nsb3NlZCgpIHtcclxuICAgIGlmICh0aGlzLmJhY2tncm91bmRUZXh0dXJlRGlhbG9nLndhc0NhbmNlbGxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRJbWFnZSA9IHRoaXMuYmFja2dyb3VuZFRleHR1cmVEaWFsb2cuc2VsZWN0ZWRJbWFnZTtcclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGF3YWl0IHRoaXMuaW1hZ2VEb3dubG9hZGVyLmltYWdlVG9JbWFnZURhdGEoc2VsZWN0ZWRJbWFnZSk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudChpbWFnZURhdGEpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gIH1cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gTGlnaHQgY29sb3IgZGlhbG9nXHJcbiAgcHJpdmF0ZSBzZXR1cExpZ2h0Q29sb3JEaWFsb2coKSB7XHJcbiAgICB0aGlzLm9wZW5MaWdodENvbG9yRGlhbG9nQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLm9wZW5MaWdodENvbG9yRGlhbG9nQnV0dG9uLmlubmVyVGV4dCA9ICdTZWxlY3QgbGlnaHQgY29sb3InO1xyXG5cclxuICAgIHRoaXMubGlnaHRDb2xvckRpYWxvZyA9IG5ldyBDb2xvclNlbGVjdERpYWxvZygpO1xyXG4gICAgdGhpcy5saWdodENvbG9yRGlhbG9nLm5hbWUgPSAnTGlnaHQgY29sb3InO1xyXG4gICAgdGhpcy5saWdodENvbG9yRGlhbG9nLnNlbGVjdGVkQ29sb3IgPSBjb25maWd1cmF0aW9uLnByZXNldExpZ2h0Q29sb3I7XHJcblxyXG4gICAgdGhpcy5vcGVuTGlnaHRDb2xvckRpYWxvZyA9IHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25MaWdodENvbG9yRGlhbG9nQ2xvc2VkID0gdGhpcy5vbkxpZ2h0Q29sb3JEaWFsb2dDbG9zZWQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlbkxpZ2h0Q29sb3JEaWFsb2coKSB7XHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkuc2hvd0RpYWxvZyh0aGlzLmxpZ2h0Q29sb3JEaWFsb2cpO1xyXG4gICAgdGhpcy5saWdodENvbG9yRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkxpZ2h0Q29sb3JEaWFsb2dDbG9zZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBvbkxpZ2h0Q29sb3JEaWFsb2dDbG9zZWQoKSB7XHJcbiAgICBpZiAodGhpcy5saWdodENvbG9yRGlhbG9nLndhc0NhbmNlbGxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlnaHRDb2xvciA9IHRoaXMubGlnaHRDb2xvckRpYWxvZy5zZWxlY3RlZENvbG9yO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRDb2xvckV2ZW50KGxpZ2h0Q29sb3IpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gIH1cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gTm9ybWFsIG1hcCBkaWFsb2dcclxuICBwcml2YXRlIHNldHVwTm9ybWFsTWFwRGlhbG9nKCkge1xyXG4gICAgdGhpcy5vcGVuTm9ybWFsTWFwRGlhbG9nQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2dCdXR0b24uaW5uZXJUZXh0ID0gJ1NlbGVjdCBub3JtYWwgbWFwJztcclxuXHJcbiAgICB0aGlzLm5vcm1hbE1hcERpYWxvZyA9IG5ldyBJbWFnZVNlbGVjdERpYWxvZyhjb25maWd1cmF0aW9uLnByZXNldE5vcm1hbE1hcHMpO1xyXG4gICAgdGhpcy5ub3JtYWxNYXBEaWFsb2cubmFtZSA9ICdOb3JtYWwgbWFwJztcclxuXHJcbiAgICB0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2cgPSB0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2cuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Ob3JtYWxNYXBEaWFsb2dDbG9zZWQgPSB0aGlzLm9uTm9ybWFsTWFwRGlhbG9nQ2xvc2VkLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5ub3JtYWxNYXBEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uTm9ybWFsTWFwRGlhbG9nQ2xvc2VkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3Blbk5vcm1hbE1hcERpYWxvZygpIHtcclxuICAgIHRoaXMuZGlhbG9nT3ZlcmxheS5zaG93RGlhbG9nKHRoaXMubm9ybWFsTWFwRGlhbG9nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgb25Ob3JtYWxNYXBEaWFsb2dDbG9zZWQoKSB7XHJcbiAgICBpZiAodGhpcy5ub3JtYWxNYXBEaWFsb2cud2FzQ2FuY2VsbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZEltYWdlID0gdGhpcy5ub3JtYWxNYXBEaWFsb2cuc2VsZWN0ZWRJbWFnZTtcclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGF3YWl0IHRoaXMuaW1hZ2VEb3dubG9hZGVyLmltYWdlVG9JbWFnZURhdGEoc2VsZWN0ZWRJbWFnZSk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3Tm9ybWFsTWFwRXZlbnQoaW1hZ2VEYXRhKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIExpZ2h0IHZlcnNvciBzZWxlY3RcclxuICBwcml2YXRlIHNldHVwTGlnaHRWZXJzb3JTZWxlY3QoKSB7XHJcbiAgICB0aGlzLmxpZ2h0VmVyc29yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbGlnaHQtd2Vyc29yLXNlbGVjdCcpO1xyXG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gJ0xpZ2h0IHZlcnNvcjogJztcclxuICAgIHRoaXMubGlnaHRWZXJzb3JDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuICAgIHRoaXMubGlnaHRWZXJzb3JTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIGNvbnN0IGNvbnN0YW50VmVyc29yT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBjb25zdGFudFZlcnNvck9wdGlvbi5pbm5lclRleHQgPSAnQ29uc3RhbnQgKFswLCAwLCAxXSknO1xyXG4gICAgY29uc3RhbnRWZXJzb3JPcHRpb24udmFsdWUgPSAnY29uc3RhbnQnO1xyXG5cclxuICAgIGNvbnN0IG1vdmluZ1ZlcnNvck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgbW92aW5nVmVyc29yT3B0aW9uLmlubmVyVGV4dCA9ICdDaXJjbGluZyBhYm92ZSB0aGUgc2NyZWVuJztcclxuICAgIG1vdmluZ1ZlcnNvck9wdGlvbi52YWx1ZSA9ICdjaXJjbGluZyc7XHJcblxyXG4gICAgdGhpcy5saWdodFZlcnNvclNlbGVjdC5hcHBlbmRDaGlsZChjb25zdGFudFZlcnNvck9wdGlvbik7XHJcbiAgICB0aGlzLmxpZ2h0VmVyc29yU2VsZWN0LmFwcGVuZENoaWxkKG1vdmluZ1ZlcnNvck9wdGlvbik7XHJcblxyXG4gICAgdGhpcy5saWdodFZlcnNvckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmxpZ2h0VmVyc29yU2VsZWN0KTtcclxuXHJcbiAgICB0aGlzLm9uTGlnaHRWZXJzb3JTZWxlY3RDaGFuZ2UgPSB0aGlzLm9uTGlnaHRWZXJzb3JTZWxlY3RDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25MaWdodFZlcnNvclNlbGVjdENoYW5nZSgpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5saWdodFZlcnNvclNlbGVjdC52YWx1ZTtcclxuICAgIGNvbnN0IHZlcnNvclR5cGVzOiB7IFtuYW1lOiBzdHJpbmddOiBMaWdodFZlcnNvclR5cGUgfSA9IHtcclxuICAgICAgY29uc3RhbnQ6IExpZ2h0VmVyc29yVHlwZS5Db25zdGFudCxcclxuICAgICAgY2lyY2xpbmc6IExpZ2h0VmVyc29yVHlwZS5DaXJjbGluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB2ZXJzb3JUeXBlID0gdmVyc29yVHlwZXNbdmFsdWVdO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50KHZlcnNvclR5cGUpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIEhlaWdodCBtYXAgZGlhbG9nXHJcbiAgcHJpdmF0ZSBzZXR1cEhlaWdodE1hcERpYWxvZygpIHtcclxuICAgIHRoaXMub3BlbkhlaWdodE1hcERpYWxvZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5vcGVuSGVpZ2h0TWFwRGlhbG9nQnV0dG9uLmlubmVyVGV4dCA9ICdTZWxlY3QgaGVpZ2h0IG1hcCc7XHJcblxyXG4gICAgdGhpcy5oZWlnaHRNYXBEaWFsb2cgPSBuZXcgSW1hZ2VTZWxlY3REaWFsb2coY29uZmlndXJhdGlvbi5wcmVzZXRIZWlnaHRNYXBzKTtcclxuICAgIHRoaXMuaGVpZ2h0TWFwRGlhbG9nLm5hbWUgPSAnSGVpZ2h0IG1hcCc7XHJcblxyXG4gICAgdGhpcy5vcGVuSGVpZ2h0TWFwRGlhbG9nID0gdGhpcy5vcGVuSGVpZ2h0TWFwRGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uSGVpZ2h0TWFwRGlhbG9nQ2xvc2VkID0gdGhpcy5vbkhlaWdodE1hcERpYWxvZ0Nsb3NlZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuaGVpZ2h0TWFwRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkhlaWdodE1hcERpYWxvZ0Nsb3NlZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5IZWlnaHRNYXBEaWFsb2coKSB7XHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkuc2hvd0RpYWxvZyh0aGlzLmhlaWdodE1hcERpYWxvZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIG9uSGVpZ2h0TWFwRGlhbG9nQ2xvc2VkKCkge1xyXG4gICAgaWYgKHRoaXMuaGVpZ2h0TWFwRGlhbG9nLndhc0NhbmNlbGxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRJbWFnZSA9IHRoaXMuaGVpZ2h0TWFwRGlhbG9nLnNlbGVjdGVkSW1hZ2U7XHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBhd2FpdCB0aGlzLmltYWdlRG93bmxvYWRlci5pbWFnZVRvSW1hZ2VEYXRhKHNlbGVjdGVkSW1hZ2UpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0hlaWdodE1hcEV2ZW50KGltYWdlRGF0YSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG4gIC8vICNlbmRyZWdpb25cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9JbnB1dERhdGFTZXJ2aWNlLnRzIiwiaW1wb3J0IHsgRGlhbG9nQm94IH0gZnJvbSAndWkvY29tcG9uZW50cy9EaWFsb2dCb3gnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5cclxuaW1wb3J0ICd1aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cuc2Nzcyc7XHJcblxyXG5jb25zdCBjbGFzc05hbWVzID0ge1xyXG4gIERJQUxPRzogJ2NvbG9yLXNlbGVjdC1kaWFsb2cnLFxyXG4gIEhFQURFUjogJ2NvbG9yLXNlbGVjdC1kaWFsb2dfX2hlYWRlcicsXHJcbiAgSEVBRElORzogJ2NvbG9yLXNlbGVjdC1kaWFsb2dfX2hlYWRpbmcnLFxyXG4gIEJMT0NLOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYmxvY2snLFxyXG4gIEJPVFRPTV9CVVRUT05TOiAnY29sb3Itc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMnXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JTZWxlY3REaWFsb2cgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIERpYWxvZ0JveCB7XHJcbiAgcHJpdmF0ZSBfd2FzQ2FuY2VsbGVkID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSBoZWFkZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgaGVhZGluZzogSFRNTEhlYWRpbmdFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYm90dG9tQnV0dG9uc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjYW5jZWxCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgY29uZmlybUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5ESUFMT0cpO1xyXG5cclxuICAgIHRoaXMub25DYW5jZWxCdXR0b25DbGljayA9IHRoaXMub25DYW5jZWxCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayA9IHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUhlYWRlcigpO1xyXG4gICAgdGhpcy5jcmVhdGVDb2xvcklucHV0KCk7XHJcbiAgICB0aGlzLmNyZWF0ZUJvdHRvbUJ1dHRvbnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICAgIHJldHVybiBbJ25hbWUnXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJykgfHwgJ0NvbG9yIHNlbGVjdCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB2YWx1ZSk7XHJcbiAgICB0aGlzLmhlYWRpbmcuaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gQ29sb3IuZnJvbUhleFN0cmluZyh0aGlzLmNvbG9ySW5wdXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBzZWxlY3RlZENvbG9yKGNvbG9yOiBDb2xvcikge1xyXG4gICAgdGhpcy5jb2xvcklucHV0LnZhbHVlID0gY29sb3IudG9IZXhTdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuX3dhc0NhbmNlbGxlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlcik7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuY29sb3JJbnB1dCk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lcik7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DYW5jZWxCdXR0b25DbGljayk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5oZWFkZXIpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmNvbG9ySW5wdXQpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIpO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2spO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHdhc0NhbmNlbGxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl93YXNDYW5jZWxsZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbG9zZScpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5DbG9zZSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICB0aGlzLmhlYWRlciA9IHRoaXMuY3JlYXRlQmxvY2soKTtcclxuICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5IRUFERVIpO1xyXG5cclxuICAgIHRoaXMuaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aGlzLmhlYWRpbmcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkhFQURJTkcpO1xyXG4gICAgdGhpcy5oZWFkaW5nLmlubmVyVGV4dCA9IHRoaXMubmFtZTtcclxuXHJcbiAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLmhlYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDb2xvcklucHV0KCkge1xyXG4gICAgdGhpcy5jb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRoaXMuY29sb3JJbnB1dC50eXBlID0gJ2NvbG9yJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQm90dG9tQnV0dG9ucygpIHtcclxuICAgIHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5CT1RUT01fQlVUVE9OUyk7XHJcblxyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xyXG5cclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLmlubmVyVGV4dCA9ICdDb25maXJtJztcclxuXHJcbiAgICB0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW5jZWxCdXR0b24pO1xyXG4gICAgdGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29uZmlybUJ1dHRvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2FuY2VsQnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29uZmlybUJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdGhpcy5fd2FzQ2FuY2VsbGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUJsb2NrKCkge1xyXG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5CTE9DSyk7XHJcblxyXG4gICAgcmV0dXJuIGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtY29sb3Itc2VsZWN0LWRpYWxvZycsIENvbG9yU2VsZWN0RGlhbG9nKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQ29sb3JTZWxlY3REaWFsb2cuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Db2xvclNlbGVjdERpYWxvZy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29sb3Itc2VsZWN0LWRpYWxvZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA3NXZ3OyB9XFxuXFxuLmNvbG9yLXNlbGVjdC1kaWFsb2dfX2Jsb2NrIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcXG4gIHBhZGRpbmctYm90dG9tOiAxZW07IH1cXG5cXG4uY29sb3Itc2VsZWN0LWRpYWxvZ19faGVhZGluZyB7XFxuICBtYXJnaW46IDAuNWVtIDA7IH1cXG5cXG4uY29sb3Itc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLXRvcDogMWVtOyB9XFxuICAuY29sb3Itc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cuc2Nzcyc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tICd1aS9jb21wb25lbnRzL0RpYWxvZ0JveCc7XHJcblxyXG5jb25zdCBjbGFzc05hbWVzID0ge1xyXG4gIERJQUxPRzogJ2ltYWdlLXNlbGVjdC1kaWFsb2cnLFxyXG4gIEhFQURFUjogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2hlYWRlcicsXHJcbiAgSEVBRElORzogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2hlYWRpbmcnLFxyXG4gIEJMT0NLOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYmxvY2snLFxyXG4gIEJMT0NLX1RJVExFOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYmxvY2stdGl0bGUnLFxyXG4gIFBSRVNFVF9JTUFHRVNfQ09OVEFJTkVSOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fcHJlc2V0LWltYWdlcy1jb250YWluZXInLFxyXG4gIFNFTEVDVEVEX0lNQUdFOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19faW1hZ2UtLXNlbGVjdGVkJyxcclxuICBDVVNUT01fSU1BR0U6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19jdXN0b20taW1hZ2UnLFxyXG4gIEJPVFRPTV9CVVRUT05TOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMnXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VTZWxlY3REaWFsb2cgZXh0ZW5kcyBIVE1MRWxlbWVudCBpbXBsZW1lbnRzIERpYWxvZ0JveCB7XHJcbiAgcHJpdmF0ZSBfcHJlc2V0SW1hZ2VVcmxzOiBzdHJpbmdbXTtcclxuXHJcbiAgcHJpdmF0ZSBoZWFkZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgaGVhZGluZzogSFRNTEhlYWRpbmdFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIHByZXNldEltYWdlc0xpc3RDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgY3VzdG9tSW1hZ2VDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgY3VzdG9tRmlsZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgY3VzdG9tSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgY3VzdG9tQ29sb3JDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgY3VzdG9tQ29sb3JJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGN1c3RvbUNvbG9ySW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgYm90dG9tQnV0dG9uc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjYW5jZWxCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgY29uZmlybUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgX3NlbGVjdGVkSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfd2FzQ2FuY2VsbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByZXNldEltYWdlVXJsczogc3RyaW5nW10pIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5fcHJlc2V0SW1hZ2VVcmxzID0gcHJlc2V0SW1hZ2VVcmxzO1xyXG5cclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkRJQUxPRyk7XHJcblxyXG4gICAgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrID0gdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNob3dDdXN0b21JbWFnZSA9IHRoaXMuc2hvd0N1c3RvbUltYWdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2sgPSB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2sgPSB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ3VzdG9tQ29sb3JJbnB1dENoYW5nZSA9IHRoaXMub25DdXN0b21Db2xvcklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVIZWFkZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlUHJlc2V0SW1hZ2VzTGlzdCgpO1xyXG4gICAgdGhpcy5jcmVhdGVDdXN0b21JbWFnZVBpY2tlcigpO1xyXG4gICAgdGhpcy5jcmVhdGVDdXN0b21Db2xvclBpY2tlcigpO1xyXG4gICAgdGhpcy5jcmVhdGVCb3R0b21CdXR0b25zKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICByZXR1cm4gWyduYW1lJ107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpIHx8ICdJbWFnZSBzZWxlY3QnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2V0QXR0cmlidXRlKCduYW1lJywgdmFsdWUpO1xyXG4gICAgdGhpcy5oZWFkaW5nLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB3YXNDYW5jZWxsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2FzQ2FuY2VsbGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBwcmVzZXRJbWFnZVVybHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJlc2V0SW1hZ2VVcmxzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzZWxlY3RlZEltYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW1hZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLl93YXNDYW5jZWxsZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLnByZXNldEltYWdlc0xpc3RDb250YWluZXIpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmN1c3RvbUltYWdlQ29udGFpbmVyKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5jdXN0b21Db2xvckNvbnRhaW5lcik7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2spO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayk7XHJcbiAgICB0aGlzLmN1c3RvbUZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnNob3dDdXN0b21JbWFnZSk7XHJcbiAgICB0aGlzLmN1c3RvbUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uQ3VzdG9tQ29sb3JJbnB1dENoYW5nZSk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spO1xyXG5cclxuICAgIHRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gICAgICAuZm9yRWFjaChpbWFnZSA9PiBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljaykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5wcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXHJcbiAgICAgIC5mb3JFYWNoKGltYWdlID0+IGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrKSk7XHJcbiAgICB0aGlzLmN1c3RvbUZpbGVJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnNob3dDdXN0b21JbWFnZSk7XHJcbiAgICB0aGlzLmN1c3RvbUltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uQ3VzdG9tQ29sb3JJbnB1dENoYW5nZSk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spO1xyXG5cclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2spO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5oZWFkZXIpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnByZXNldEltYWdlc0xpc3RDb250YWluZXIpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmN1c3RvbUltYWdlQ29udGFpbmVyKTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5jdXN0b21Db2xvckNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuQ2xvc2UoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZSgpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICB0aGlzLmhlYWRlciA9IHRoaXMuY3JlYXRlQmxvY2soKTtcclxuICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5IRUFERVIpO1xyXG5cclxuICAgIHRoaXMuaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aGlzLmhlYWRpbmcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkhFQURJTkcpO1xyXG4gICAgdGhpcy5oZWFkaW5nLmlubmVyVGV4dCA9IHRoaXMubmFtZTtcclxuXHJcbiAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLmhlYWRpbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQcmVzZXRJbWFnZXNMaXN0KCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVCbG9jaygpO1xyXG4gICAgY29uc3QgYmxvY2tUaXRsZSA9IHRoaXMuY3JlYXRlQmxvY2tUaXRsZSgnQ2hvb3NlIHByZXNldCBpbWFnZScpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJsb2NrVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW1hZ2VzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5QUkVTRVRfSU1BR0VTX0NPTlRBSU5FUik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VzQ29udGFpbmVyKTtcclxuICAgIHRoaXMucHJlc2V0SW1hZ2VVcmxzLm1hcCh1cmwgPT4gdGhpcy5jcmVhdGVTZWxlY3RhYmxlSW1hZ2UodXJsKSlcclxuICAgICAgLmZvckVhY2goaW1hZ2UgPT4gaW1hZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKSk7XHJcblxyXG4gICAgdGhpcy5wcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0SW1hZ2UoPEhUTUxJbWFnZUVsZW1lbnQ+dGhpcy5wcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ3VzdG9tSW1hZ2VQaWNrZXIoKSB7XHJcbiAgICB0aGlzLmN1c3RvbUltYWdlQ29udGFpbmVyID0gdGhpcy5jcmVhdGVCbG9jaygpO1xyXG4gICAgY29uc3QgYmxvY2tUaXRsZSA9IHRoaXMuY3JlYXRlQmxvY2tUaXRsZSgnU2VsZWN0IGN1c3RvbSBpbWFnZScpO1xyXG4gICAgdGhpcy5jdXN0b21JbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChibG9ja1RpdGxlKTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUZpbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aGlzLmN1c3RvbUZpbGVJbnB1dC50eXBlID0gJ2ZpbGUnO1xyXG4gICAgdGhpcy5jdXN0b21GaWxlSW5wdXQuYWNjZXB0ID0gJ2ltYWdlLyonO1xyXG4gICAgdGhpcy5jdXN0b21JbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmN1c3RvbUZpbGVJbnB1dCk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgdGhpcy5jdXN0b21JbWFnZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuQ1VTVE9NX0lNQUdFKTtcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jdXN0b21JbWFnZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dDdXN0b21JbWFnZSgpIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbUZpbGVJbnB1dC5maWxlcyAmJiB0aGlzLmN1c3RvbUZpbGVJbnB1dC5maWxlc1swXSkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgcmVhZGVyLm9ubG9hZCA9IGUgPT4ge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICAgICAgICB0aGlzLmN1c3RvbUltYWdlLnNyYyA9ICg8YW55PmUudGFyZ2V0KS5yZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RJbWFnZSh0aGlzLmN1c3RvbUltYWdlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuY3VzdG9tRmlsZUlucHV0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ3VzdG9tQ29sb3JQaWNrZXIoKSB7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9yQ29udGFpbmVyID0gdGhpcy5jcmVhdGVCbG9jaygpO1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmNyZWF0ZUJsb2NrVGl0bGUoJ0N1c3RvbSBzb2xpZCBjb2xvcicpO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21Db2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dC50eXBlID0gJ2NvbG9yJztcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dC52YWx1ZSA9ICcjMDAwMDAwJztcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jdXN0b21Db2xvcklucHV0KTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW1hZ2UgPSBuZXcgSW1hZ2UoMjAsIDIwKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jdXN0b21Db2xvckltYWdlKTtcclxuXHJcbiAgICB0aGlzLnNldEN1c3RvbUNvbG9ySW1hZ2VDb2xvcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkN1c3RvbUNvbG9ySW5wdXRDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLnNldEN1c3RvbUNvbG9ySW1hZ2VDb2xvcigpO1xyXG4gICAgdGhpcy5zZWxlY3RJbWFnZSh0aGlzLmN1c3RvbUNvbG9ySW1hZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDdXN0b21Db2xvckltYWdlQ29sb3IoKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuY3VzdG9tQ29sb3JJbWFnZS53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmN1c3RvbUNvbG9ySW1hZ2UuaGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKCFjdHgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGNhbnZhcyBkcmF3aW5nIGNvbnRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jdXN0b21Db2xvcklucHV0LnZhbHVlO1xyXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21Db2xvckltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQm90dG9tQnV0dG9ucygpIHtcclxuICAgIHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5CT1RUT01fQlVUVE9OUyk7XHJcblxyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xyXG5cclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLmlubmVyVGV4dCA9ICdDb25maXJtJztcclxuXHJcbiAgICB0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW5jZWxCdXR0b24pO1xyXG4gICAgdGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29uZmlybUJ1dHRvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2FuY2VsQnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29uZmlybUJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdGhpcy5fd2FzQ2FuY2VsbGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUJsb2NrKCkge1xyXG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5CTE9DSyk7XHJcblxyXG4gICAgcmV0dXJuIGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCbG9ja1RpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGJsb2NrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgYmxvY2tUaXRsZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuQkxPQ0tfVElUTEUpO1xyXG4gICAgYmxvY2tUaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcclxuXHJcbiAgICByZXR1cm4gYmxvY2tUaXRsZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlU2VsZWN0YWJsZUltYWdlKGltYWdlU291cmNlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5zcmMgPSBpbWFnZVNvdXJjZTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU2VsZWN0YWJsZUltYWdlQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICghZXZlbnQuc3JjRWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZWxlY3RJbWFnZSg8SFRNTEltYWdlRWxlbWVudD5ldmVudC5zcmNFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VsZWN0SW1hZ2UoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIGlmIChpbWFnZSA9PT0gdGhpcy5fc2VsZWN0ZWRJbWFnZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkSW1hZ2UpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWRJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZXMuU0VMRUNURURfSU1BR0UpO1xyXG4gICAgfVxyXG5cclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5TRUxFQ1RFRF9JTUFHRSk7XHJcbiAgICB0aGlzLl9zZWxlY3RlZEltYWdlID0gaW1hZ2U7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1pbWFnZS1zZWxlY3QtZGlhbG9nJywgSW1hZ2VTZWxlY3REaWFsb2cpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9JbWFnZVNlbGVjdERpYWxvZy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW1hZ2VTZWxlY3REaWFsb2cuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbWFnZS1zZWxlY3QtZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDc1dnc7IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19faGVhZGluZyB7XFxuICBtYXJnaW46IDAuNWVtIDA7IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYmxvY2sge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgcGFkZGluZy1ib3R0b206IDFlbTsgfVxcblxcbi5pbWFnZS1zZWxlY3QtZGlhbG9nX19wcmVzZXQtaW1hZ2VzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgLmltYWdlLXNlbGVjdC1kaWFsb2dfX3ByZXNldC1pbWFnZXMtY29udGFpbmVyID4gZGl2IHtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87IH1cXG4gIC5pbWFnZS1zZWxlY3QtZGlhbG9nX19wcmVzZXQtaW1hZ2VzLWNvbnRhaW5lciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4OyB9XFxuXFxuLmltYWdlLXNlbGVjdC1kaWFsb2dfX2N1c3RvbS1pbWFnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMjUlO1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBtYXJnaW46IGF1dG87IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19faW1hZ2UtLXNlbGVjdGVkIHtcXG4gIGJvcmRlcjogc29saWQgM3B4IGdyZWVuOyB9XFxuXFxuLmltYWdlLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDFlbTsgfVxcbiAgLmltYWdlLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIGNhbnZhc0NsaWVudFJlY3Q6IENsaWVudFJlY3Q7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2FudmFzT2Zmc2V0KCk7XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNhbnZhc09mZnNldCgpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlQ2FudmFzT2Zmc2V0KCkge1xyXG4gICAgdGhpcy5jYW52YXNDbGllbnRSZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UG9pbnRGcm9tTW91c2VFdmVudChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludChcclxuICAgICAgZXZlbnQuY2xpZW50WCAtIHRoaXMuY2FudmFzQ2xpZW50UmVjdC5sZWZ0LFxyXG4gICAgICBldmVudC5jbGllbnRZIC0gdGhpcy5jYW52YXNDbGllbnRSZWN0LnRvcFxyXG4gICAgKS5mbG9vcigpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIudHMiLCJpbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBMRVggfSBmcm9tICdMRVgnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJ1JlbmRlcmVyJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcbmltcG9ydCB7IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciB9IGZyb20gJ3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcic7XHJcblxyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgUG9pbnRDbGlja0V2ZW50IH0gZnJvbSAnZXZlbnRzL1BvaW50Q2xpY2tFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgUmVuZGVyRmluaXNoZWRFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJGaW5pc2hlZEV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmludGVyZmFjZSBOZXdQb2x5Z29uVUlDb250cm9sbGVyRGVwZW5kZW5jaWVzIHtcclxuICBhcHBsaWNhdGlvblVJQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIHBvbHlnb25MYXllcjogTGF5ZXI7XHJcbiAgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHN0YWdlOiBTdGFnZTtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ld1BvbHlnb25VSUNvbnRyb2xsZXIgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGFwcGxpY2F0aW9uVUlDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gIHByaXZhdGUgdW5maW5pc2hlZFBhdGg6IFBhdGg7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwYXRoTGF5ZXIgPSBuZXcgTGF5ZXIoTEVYLlBBVEhfTEFZRVJfTkFNRSk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG5cclxuICBwcml2YXRlIGxhc3RNb3VzZVBvc2l0aW9uOiBQb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBOZXdQb2x5Z29uVUlDb250cm9sbGVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uVUlDb250YWluZXIgPSBkZXBlbmRlbmNpZXMuYXBwbGljYXRpb25VSUNvbnRhaW5lcjtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uTGF5ZXI7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gZGVwZW5kZW5jaWVzLnJlbmRlcmVyO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIHRoaXMuY2xvc2VQYXRoID0gdGhpcy5jbG9zZVBhdGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uUG9pbnRDbGljayA9IHRoaXMub25Qb2ludENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdOZXdMaW5lR3VpZGUgPSB0aGlzLmRyYXdOZXdMaW5lR3VpZGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMucHVzaCh0aGlzLnBhdGhMYXllcik7XHJcbiAgICB0aGlzLnN0YXJ0TmV3VW5maW5pc2hlZFBhdGgoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5zdGFnZS5yZW1vdmVMYXllcih0aGlzLnBhdGhMYXllcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkTmV3UG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLnVuZmluaXNoZWRQYXRoLmFkZFZlcnRleChwb2ludCk7XHJcbiAgICB0aGlzLmRpc3BhdGNoVXBkYXRlVUlFdmVudHMoKTtcclxuXHJcbiAgICBpZiAodGhpcy51bmZpbmlzaGVkUGF0aC5nZXRWZXJ0aWNlc0NvdW50KCkgPT09IDEpIHtcclxuICAgICAgdGhpcy5sYXN0TW91c2VQb3NpdGlvbiA9IHBvaW50O1xyXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMubGFzdE1vdXNlUG9zaXRpb24gPSB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci5nZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd05ld0xpbmVHdWlkZSgpIHtcclxuICAgIGNvbnN0IGxhc3RQb2ludCA9IHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGV4KHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGljZXNDb3VudCgpIC0gMSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmRyYXdMaW5lKGxhc3RQb2ludCwgdGhpcy5sYXN0TW91c2VQb3NpdGlvbiwgY29uZmlndXJhdGlvbi5uZXdMaW5lUHJldmlld1Byb3BlcnRpZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblBvaW50Q2xpY2soZXZlbnQ6IFBvaW50Q2xpY2tFdmVudCkge1xyXG4gICAgY29uc3QgcGF0aFBvaW50Q29tcG9uZW50ID0gZXZlbnQucGF5bG9hZDtcclxuXHJcbiAgICBpZiAocGF0aFBvaW50Q29tcG9uZW50LnBhdGggPT09IHRoaXMudW5maW5pc2hlZFBhdGggJiYgcGF0aFBvaW50Q29tcG9uZW50LmluaXRpYWwpIHtcclxuICAgICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgcGF0aFBvaW50Q29tcG9uZW50LmluaXRpYWwgPSBmYWxzZTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydE5ld1VuZmluaXNoZWRQYXRoKCkge1xyXG4gICAgdGhpcy51bmZpbmlzaGVkUGF0aCA9IG5ldyBQYXRoKFtdLCBjb25maWd1cmF0aW9uLm5ld1BvbHlnb25MaW5lUHJvcGVydGllcyk7XHJcbiAgICB0aGlzLnBhdGhMYXllci5wYXRocy5wdXNoKHRoaXMudW5maW5pc2hlZFBhdGgpO1xyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9zZVBhdGgoKSB7XHJcbiAgICBpZiAodGhpcy51bmZpbmlzaGVkUGF0aC5nZXRWZXJ0aWNlc0NvdW50KCkgPCBjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQb2x5Z29uIG11c3QgaGF2ZSBhdCBsZWFzdCAke2NvbmZpZ3VyYXRpb24ubWluUG9seWdvblBvaW50c30gdmVydGljZXNgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVuZmluaXNoZWRQYXRoLmxpbmVQcm9wZXJ0aWVzID0gY29uZmlndXJhdGlvbi5wb2x5Z29uTGluZVByb3BlcnRpZXM7XHJcbiAgICBjb25zdCBwb2x5Z29uID0gbmV3IFBvbHlnb24odGhpcy51bmZpbmlzaGVkUGF0aCk7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllci5wYXRocy5wdXNoKHBvbHlnb24pO1xyXG4gICAgdGhpcy5wYXRoTGF5ZXIucmVtb3ZlUGF0aCh0aGlzLnVuZmluaXNoZWRQYXRoKTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0TmV3VW5maW5pc2hlZFBhdGgoKTtcclxuICAgIHRoaXMuZGlzcGF0Y2hVcGRhdGVVSUV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwYXRjaFVwZGF0ZVVJRXZlbnRzKCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIDI3OlxyXG4gICAgICAgIHRoaXMucGF0aExheWVyLnJlbW92ZVBhdGgodGhpcy51bmZpbmlzaGVkUGF0aCk7XHJcbiAgICAgICAgdGhpcy5zdGFydE5ld1VuZmluaXNoZWRQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaFVwZGF0ZVVJRXZlbnRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihSZW5kZXJGaW5pc2hlZEV2ZW50Lm5hbWUsIHRoaXMuZHJhd05ld0xpbmVHdWlkZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUG9pbnRDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihSZW5kZXJGaW5pc2hlZEV2ZW50Lm5hbWUsIHRoaXMuZHJhd05ld0xpbmVHdWlkZSk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoUG9pbnRDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50Q2xpY2spO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9OZXdQb2x5Z29uVUlDb250cm9sbGVyLnRzIiwiaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcbmltcG9ydCB7IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciB9IGZyb20gJ3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcic7XHJcblxyXG5pbXBvcnQgeyBDbG9zZXN0UGF0aEZpbmRlciB9IGZyb20gJ3NlcnZpY2VzL0Nsb3Nlc3RQYXRoRmluZGVyJztcclxuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJ3NlcnZpY2VzL1NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW50ZXJmYWNlIFBhdGhEcmFnZ2luZ1NlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHN0YWdlOiBTdGFnZTtcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIGNsb3Nlc3RQYXRoRmluZGVyOiBDbG9zZXN0UGF0aEZpbmRlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGhEcmFnZ2luZ1NlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2xvc2VzdFBhdGhGaW5kZXI6IENsb3Nlc3RQYXRoRmluZGVyO1xyXG5cclxuICBwcml2YXRlIHBhdGhUb0RyYWc6IFBhdGggfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c1BvaW50OiBQb2ludCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9pc0RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUGF0aERyYWdnaW5nU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5zdGFnZSA9IGRlcGVuZGVuY2llcy5zdGFnZTtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyID0gZGVwZW5kZW5jaWVzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICAgIHRoaXMuY2xvc2VzdFBhdGhGaW5kZXIgPSBkZXBlbmRlbmNpZXMuY2xvc2VzdFBhdGhGaW5kZXI7XHJcblxyXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZU91dCA9IHRoaXMub25Nb3VzZU91dC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICAvLyBUT0RPOiBwb3NzaWJsZSBwb2x5Z29uIGdob3N0IGxheWVyIGhlcmVcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdQYXRoKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzRHJhZ2dpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNEcmFnZ2luZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydE1vdmluZ1BhdGgoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIuZ2V0UG9pbnRGcm9tTW91c2VFdmVudChldmVudCk7XHJcblxyXG4gICAgdGhpcy5wYXRoVG9EcmFnID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5wcmV2aW91c1BvaW50ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGNvbnN0IGFsbFBhdGhzSW5Cb3VuZGluZ0JveDogUGF0aFtdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLnN0YWdlLmxheWVycykge1xyXG4gICAgICBjb25zdCBwYXRoc0luQm91bmRpbmdCb3ggPSBsYXllci5wYXRocy5maWx0ZXIocGF0aCA9PiBwYXRoLmlzUG9pbnRJbkJvdW5kaW5nQm94KHBvaW50KSk7XHJcbiAgICAgIGFsbFBhdGhzSW5Cb3VuZGluZ0JveC5wdXNoKC4uLnBhdGhzSW5Cb3VuZGluZ0JveCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFsbFBhdGhzSW5Cb3VuZGluZ0JveC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCdDYW5ub3QgZHJhZyBwYXRoIC0gbm8gcGF0aCBmb3VuZCwgcG9pbnQgaXMgbm90IGluIHRoZSBib3VuZGluZyBib3gnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhdGhUb0RyYWcgPSB0aGlzLmNsb3Nlc3RQYXRoRmluZGVyLmdldENsb3Nlc3RQYXRoKGFsbFBhdGhzSW5Cb3VuZGluZ0JveCwgcG9pbnQpO1xyXG4gICAgdGhpcy5wcmV2aW91c1BvaW50ID0gcG9pbnQ7XHJcbiAgICB0aGlzLl9pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMub25Nb3VzZU91dCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApO1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLm9uTW91c2VPdXQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLnBhdGhUb0RyYWcgfHwgIXRoaXMucHJldmlvdXNQb2ludCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9pbnQgPSB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci5nZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50KTtcclxuICAgIGNvbnN0IHRyYW5zaXRpb25WZWN0b3IgPSBQb2ludC5zdWJ0cmFjdChwb2ludCwgdGhpcy5wcmV2aW91c1BvaW50KTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHBhdGhQb2ludCBvZiB0aGlzLnBhdGhUb0RyYWcuZ2V0VmVydGljZXMoKSkge1xyXG4gICAgICBwYXRoUG9pbnQubW92ZVRvKFBvaW50LmFkZChwYXRoUG9pbnQsIHRyYW5zaXRpb25WZWN0b3IpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcblxyXG4gICAgdGhpcy5wcmV2aW91c1BvaW50ID0gcG9pbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VVcChfZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIHRoaXMuc3RvcERyYWdnaW5nUGF0aCgpO1xyXG4gICAgdGhpcy5jYW5jZWxOZXh0Q2xpY2tFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlT3V0KF9ldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdQYXRoKCk7XHJcbiAgICB0aGlzLl9pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0b3BEcmFnZ2luZ1BhdGgoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLnBhdGhUb0RyYWcgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnByZXZpb3VzUG9pbnQgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbmNlbE5leHRDbGlja0V2ZW50KCkge1xyXG4gICAgY29uc3QgaGFuZGxlciA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIHRydWUpO1xyXG4gICAgICB0aGlzLl9pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIsIHRydWUpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9QYXRoRHJhZ2dpbmdTZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnY29tbW9uL0NPTE9SUyc7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgTGluZVByb3BlcnRpZXMgfSBmcm9tICdjb21tb24vTGluZVByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBMRVggfSBmcm9tICdMRVgnO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEZpbmlzaFBvaW50RHJhZ0V2ZW50IH0gZnJvbSAnZXZlbnRzL3BvaW50LWRyYWcvRmluaXNoUG9pbnREcmFnRXZlbnQnO1xyXG5pbXBvcnQgeyBQb2ludERyYWdFdmVudCB9IGZyb20gJ2V2ZW50cy9wb2ludC1kcmFnL1BvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgU3RhcnRQb2ludERyYWdFdmVudCB9IGZyb20gJ2V2ZW50cy9wb2ludC1kcmFnL1N0YXJ0UG9pbnREcmFnRXZlbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbnRlcmZhY2UgUG9pbnREcmFnZ2luZ1NlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHN0YWdlOiBTdGFnZTtcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnREcmFnZ2luZ1NlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHBhdGhHaG9zdExheWVyOiBMYXllcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2ludERyYWdnaW5nU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5zdGFnZSA9IGRlcGVuZGVuY2llcy5zdGFnZTtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuXHJcbiAgICB0aGlzLm9uU3RhcnRQb2ludERyYWcgPSB0aGlzLm9uU3RhcnRQb2ludERyYWcuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25GaW5pc2hQb2ludERyYWcgPSB0aGlzLm9uRmluaXNoUG9pbnREcmFnLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uUG9pbnREcmFnID0gdGhpcy5vblBvaW50RHJhZy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLnBhdGhHaG9zdExheWVyID0gbmV3IExheWVyKExFWC5QQVRIX0dIT1NUX0xBWUVSX05BTUUpO1xyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMuc3BsaWNlKDAsIDAsIHRoaXMucGF0aEdob3N0TGF5ZXIpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoU3RhcnRQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25TdGFydFBvaW50RHJhZyk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKEZpbmlzaFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbkZpbmlzaFBvaW50RHJhZyk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50RHJhZyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMucGF0aEdob3N0TGF5ZXIucGF0aHMgPSBbXTtcclxuICAgIHRoaXMuc3RhZ2UucmVtb3ZlTGF5ZXIodGhpcy5wYXRoR2hvc3RMYXllcik7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihTdGFydFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblN0YXJ0UG9pbnREcmFnKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIEZpbmlzaFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbkZpbmlzaFBvaW50RHJhZ1xyXG4gICAgKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoUG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUG9pbnREcmFnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TdGFydFBvaW50RHJhZyhldmVudDogU3RhcnRQb2ludERyYWdFdmVudCkge1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKCFjb25maWd1cmF0aW9uLmRpc3BsYXlQYXRoR2hvc3RXaGVuRHJhZ2dpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhdGggPSBldmVudC5wYXlsb2FkLnBhdGguY2xvbmUoKTtcclxuICAgIHBhdGgubGluZVByb3BlcnRpZXMgPSBuZXcgTGluZVByb3BlcnRpZXMoQ09MT1JTLkdSRUVOLCAxKTtcclxuICAgIHRoaXMucGF0aEdob3N0TGF5ZXIucGF0aHMucHVzaChwYXRoKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRmluaXNoUG9pbnREcmFnKGV2ZW50OiBGaW5pc2hQb2ludERyYWdFdmVudCkge1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgICBpZiAoIWNvbmZpZ3VyYXRpb24uZGlzcGxheVBhdGhHaG9zdFdoZW5EcmFnZ2luZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXRoR2hvc3RMYXllci5wYXRocyA9IFtdO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Qb2ludERyYWcoZXZlbnQ6IFBvaW50RHJhZ0V2ZW50KSB7XHJcbiAgICBjb25zdCB7IGNvbXBvbmVudCwgbmV3UG9zaXRpb24gfSA9IGV2ZW50LnBheWxvYWQ7XHJcblxyXG4gICAgZm9yIChjb25zdCBwb2ludCBvZiBjb21wb25lbnQucGF0aC5nZXRWZXJ0aWNlc0l0ZXJhdG9yKCkpIHtcclxuICAgICAgaWYgKHBvaW50LmVxdWFscyhuZXdQb3NpdGlvbikpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgeCA9IG5ld1Bvc2l0aW9uLng7XHJcbiAgICBsZXQgeSA9IG5ld1Bvc2l0aW9uLnk7XHJcblxyXG4gICAgaWYgKHggPCAwKSB7XHJcbiAgICAgIHggPSAwO1xyXG4gICAgfSBlbHNlIGlmICh4ID49IHRoaXMuY2FudmFzLndpZHRoKSB7XHJcbiAgICAgIHggPSB0aGlzLmNhbnZhcy53aWR0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHkgPCAwKSB7XHJcbiAgICAgIHkgPSAwO1xyXG4gICAgfSBlbHNlIGlmICh5ID49IHRoaXMuY2FudmFzLmhlaWdodCkge1xyXG4gICAgICB5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnQucG9pbnQubW92ZVRvKHgsIHkpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1BvaW50RHJhZ2dpbmdTZXJ2aWNlLnRzIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IExpbmVDbGlja0V2ZW50IH0gZnJvbSAnZXZlbnRzL0xpbmVDbGlja0V2ZW50JztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgUG9pbnRJbnNlcnRlclNlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRJbnNlcnRlclNlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBwcml2YXRlIHByZXZpb3VzTGluZUNsaWNrVGltZXN0YW1wID0gMDtcclxuICBwcml2YXRlIHByZXZpb3VzTGluZUhpdDogTGluZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2ludEluc2VydGVyU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIHRoaXMub25MaW5lQ2xpY2sgPSB0aGlzLm9uTGluZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoTGluZUNsaWNrRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTGluZUNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihMaW5lQ2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25MaW5lQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkxpbmVDbGljayhldmVudDogTGluZUNsaWNrRXZlbnQpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzTGluZUhpdCA9IHRoaXMucHJldmlvdXNMaW5lSGl0O1xyXG4gICAgY29uc3QgcHJldmlvdXNMaW5lQ2xpY2tUaW1lc3RhbXAgPSB0aGlzLnByZXZpb3VzTGluZUNsaWNrVGltZXN0YW1wO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgdGhpcy5wcmV2aW91c0xpbmVIaXQgPSBldmVudC5wYXlsb2FkLmxpbmU7XHJcbiAgICB0aGlzLnByZXZpb3VzTGluZUNsaWNrVGltZXN0YW1wID0gY3VycmVudFRpbWVzdGFtcDtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICFwcmV2aW91c0xpbmVIaXQgfHxcclxuICAgICAgY3VycmVudFRpbWVzdGFtcCAtIHByZXZpb3VzTGluZUNsaWNrVGltZXN0YW1wID4gY29uZmlndXJhdGlvbi5kb3VibGVDbGlja01heERlbGF5XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcmV2aW91c0xpbmVIaXQuZXF1YWxzKGV2ZW50LnBheWxvYWQubGluZSkpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBldmVudC5wYXlsb2FkLnBhdGguZmluZFBvaW50SW5kZXgoZXZlbnQucGF5bG9hZC5saW5lLnAyKTtcclxuICAgICAgY29uc3QgbmV3UG9pbnQgPSBldmVudC5wYXlsb2FkLmxpbmUuZ2V0TWlkZGxlUG9pbnQoKTtcclxuICAgICAgY29uc3QgZmxvb3JlZFBvaW50ID0gbmV3UG9pbnQuZmxvb3IoKTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZXZlbnQucGF5bG9hZC5wYXRoLmluc2VydFZlcnRleChmbG9vcmVkUG9pbnQsIGluZGV4KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRPRE86IGZpeCB3cm9uZyByZW5kZXJpbmdcclxuICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1BvaW50SW5zZXJ0ZXJTZXJ2aWNlLnRzIiwiaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgUG9pbnRDbGlja0V2ZW50IH0gZnJvbSAnZXZlbnRzL1BvaW50Q2xpY2tFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuaW1wb3J0IHsgUGF0aFBvaW50Q29tcG9uZW50IH0gZnJvbSAndWkvY29tcG9uZW50cy9QYXRoUG9pbnRDb21wb25lbnQnO1xyXG5cclxuaW50ZXJmYWNlIFBvaW50UmVtb3ZlclNlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRSZW1vdmVyU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gIHByaXZhdGUgcHJldmlvdXNQYXRoUG9pbnRDb21wb25lbnQ6IFBhdGhQb2ludENvbXBvbmVudDtcclxuICBwcml2YXRlIHByZXZpb3VzQ2xpY2tUaW1lc3RhbXAgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBvaW50UmVtb3ZlclNlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMub25Qb2ludENsaWNrID0gdGhpcy5vblBvaW50Q2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihQb2ludENsaWNrRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUG9pbnRDbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoUG9pbnRDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblBvaW50Q2xpY2soZXZlbnQ6IFBvaW50Q2xpY2tFdmVudCkge1xyXG4gICAgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgY29uc3QgcGF0aFBvaW50Q29tcG9uZW50ID0gZXZlbnQucGF5bG9hZDtcclxuICAgIGNvbnN0IHByZXZpb3VzUGF0aFBvaW50Q29tcG9uZW50ID0gdGhpcy5wcmV2aW91c1BhdGhQb2ludENvbXBvbmVudDtcclxuICAgIGNvbnN0IHByZXZpb3VzQ2xpY2tUaW1lc3RhbXAgPSB0aGlzLnByZXZpb3VzQ2xpY2tUaW1lc3RhbXA7XHJcblxyXG4gICAgdGhpcy51cGRhdGVQcmV2aW91c0NsaWNrSW5mb3JtYXRpb24oZXZlbnQsIGN1cnJlbnRUaW1lc3RhbXApO1xyXG5cclxuICAgIGlmICghcHJldmlvdXNQYXRoUG9pbnRDb21wb25lbnQgfHwgcHJldmlvdXNQYXRoUG9pbnRDb21wb25lbnQgIT09IHBhdGhQb2ludENvbXBvbmVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnRUaW1lc3RhbXAgLSBwcmV2aW91c0NsaWNrVGltZXN0YW1wID4gY29uZmlndXJhdGlvbi5kb3VibGVDbGlja01heERlbGF5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZVByZXZpb3VzQ2xpY2tlZFBvaW50KCk7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUHJldmlvdXNDbGlja0luZm9ybWF0aW9uKGV2ZW50OiBQb2ludENsaWNrRXZlbnQsIHRpbWVzdGFtcDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnByZXZpb3VzUGF0aFBvaW50Q29tcG9uZW50ID0gZXZlbnQucGF5bG9hZDtcclxuICAgIHRoaXMucHJldmlvdXNDbGlja1RpbWVzdGFtcCA9IHRpbWVzdGFtcDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlUHJldmlvdXNDbGlja2VkUG9pbnQoKSB7XHJcbiAgICBjb25zdCBwYXRoID0gdGhpcy5wcmV2aW91c1BhdGhQb2ludENvbXBvbmVudC5wYXRoO1xyXG4gICAgY29uc3QgcG9pbnQgPSB0aGlzLnByZXZpb3VzUGF0aFBvaW50Q29tcG9uZW50LnBvaW50O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHBhdGgucmVtb3ZlVmVydGV4KHBvaW50KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgnQ2Fubm90IHJlbW92ZSB2ZXJ0ZXgnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByZXZpb3VzUGF0aFBvaW50Q29tcG9uZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2ludFJlbW92ZXJTZXJ2aWNlLnRzIiwiaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgUGF0aFBvaW50Q29tcG9uZW50IH0gZnJvbSAndWkvY29tcG9uZW50cy9QYXRoUG9pbnRDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICd1aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXInO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbnRlcmZhY2UgUG9pbnRTeW5jU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQYXRoUG9pbnQge1xyXG4gIHBhdGg6IFBhdGg7XHJcbiAgcG9pbnQ6IFBvaW50O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRTeW5jU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcGF0aFBvaW50Q29tcG9uZW50czogUGF0aFBvaW50Q29tcG9uZW50W10gPSBbXTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBvaW50U3luY1NlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRlcGVuZGVuY2llcy5jb250YWluZXI7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy5zeW5jaHJvbml6ZUNvbXBvbmVudHMgPSB0aGlzLnN5bmNocm9uaXplQ29tcG9uZW50cy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFN5bmNDb21wb25lbnRzRXZlbnQuZXZlbnRUeXBlLCB0aGlzLnN5bmNocm9uaXplQ29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoU3luY0NvbXBvbmVudHNFdmVudC5ldmVudFR5cGUsIHRoaXMuc3luY2hyb25pemVDb21wb25lbnRzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzeW5jaHJvbml6ZUNvbXBvbmVudHMoZXZlbnQ6IFN5bmNDb21wb25lbnRzRXZlbnQpIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudHNUb1JlbW92ZSA9IHRoaXMuZ2V0UmVkdW5kYW50Q29tcG9uZW50cygpO1xyXG4gICAgY29tcG9uZW50c1RvUmVtb3ZlLmZvckVhY2goY29tcG9uZW50ID0+IGNvbXBvbmVudC5yZW1vdmUoKSk7XHJcblxyXG4gICAgY29uc3QgcGF0aFBvaW50cyA9IHRoaXMuZ2V0UGF0aFBvaW50cygpO1xyXG4gICAgY29uc3QgcG9pbnRzV2l0aG91dENvbXBvbmVudHMgPSB0aGlzLmdldFBvaW50c1dpdGhvdXRDb21wb25lbnRzKHBhdGhQb2ludHMpO1xyXG4gICAgY29uc3QgbmV3Q29tcG9uZW50cyA9IHRoaXMuY3JlYXRlUGF0aFBvaW50Q29tcG9uZW50cyhwb2ludHNXaXRob3V0Q29tcG9uZW50cyk7XHJcblxyXG4gICAgY29uc3QgY29tcG9uZW50c05vdFJlbW92ZWQgPSB0aGlzLnBhdGhQb2ludENvbXBvbmVudHMuZmlsdGVyKFxyXG4gICAgICBjb21wb25lbnQgPT4gY29tcG9uZW50c1RvUmVtb3ZlLmluZGV4T2YoY29tcG9uZW50KSA9PT0gLTFcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wYXRoUG9pbnRDb21wb25lbnRzID0gWy4uLm5ld0NvbXBvbmVudHMsIC4uLmNvbXBvbmVudHNOb3RSZW1vdmVkXTtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQYXRoUG9pbnRzKCkge1xyXG4gICAgY29uc3QgcGF0aFBvaW50czogUGF0aFBvaW50W10gPSBbXTtcclxuXHJcbiAgICB0aGlzLnN0YWdlLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgbGF5ZXIucGF0aHMuZm9yRWFjaChwYXRoID0+IHtcclxuICAgICAgICBwYXRoLmdldFZlcnRpY2VzKCkuZm9yRWFjaChwb2ludCA9PiB7XHJcbiAgICAgICAgICBwYXRoUG9pbnRzLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICBwb2ludFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBhdGhQb2ludHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVBhdGhQb2ludENvbXBvbmVudHMocGF0aFBvaW50czogUGF0aFBvaW50W10pIHtcclxuICAgIHJldHVybiBwYXRoUG9pbnRzLm1hcChcclxuICAgICAgcGF0aFBvaW50ID0+XHJcbiAgICAgICAgbmV3IFBhdGhQb2ludENvbXBvbmVudChwYXRoUG9pbnQucGF0aCwgcGF0aFBvaW50LnBvaW50LCB7XHJcbiAgICAgICAgICBhcHBsaWNhdGlvblVJQ29udGFpbmVyOiB0aGlzLmNvbnRhaW5lcixcclxuICAgICAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgICAgICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyXHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJlZHVuZGFudENvbXBvbmVudHMoKSB7XHJcbiAgICBjb25zdCBhY3RpdmVQYXRocyA9IHRoaXMuZ2V0QWN0aXZlUGF0aHMoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wYXRoUG9pbnRDb21wb25lbnRzLmZpbHRlcihcclxuICAgICAgY29tcG9uZW50ID0+XHJcbiAgICAgICAgYWN0aXZlUGF0aHMuaW5kZXhPZihjb21wb25lbnQucGF0aCkgPT09IC0xIHx8XHJcbiAgICAgICAgY29tcG9uZW50LnBhdGguZ2V0VmVydGljZXMoKS5pbmRleE9mKGNvbXBvbmVudC5wb2ludCkgPT09IC0xXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQb2ludHNXaXRob3V0Q29tcG9uZW50cyhwYXRoUG9pbnRzOiBQYXRoUG9pbnRbXSkge1xyXG4gICAgcmV0dXJuIHBhdGhQb2ludHMuZmlsdGVyKFxyXG4gICAgICBwYXRoUG9pbnQgPT5cclxuICAgICAgICAhdGhpcy5wYXRoUG9pbnRDb21wb25lbnRzLmZpbmQoXHJcbiAgICAgICAgICBjb21wb25lbnQgPT4gY29tcG9uZW50LnBhdGggPT09IHBhdGhQb2ludC5wYXRoICYmIGNvbXBvbmVudC5wb2ludCA9PT0gcGF0aFBvaW50LnBvaW50XHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QWN0aXZlUGF0aHMoKSB7XHJcbiAgICBjb25zdCBwYXRoczogUGF0aFtdID0gW107XHJcbiAgICB0aGlzLnN0YWdlLmxheWVycy5tYXAobGF5ZXIgPT4gcGF0aHMucHVzaCguLi5sYXllci5wYXRocykpO1xyXG5cclxuICAgIHJldHVybiBwYXRocztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUG9pbnRTeW5jU2VydmljZS50cyIsImltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmltcG9ydCB7IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciB9IGZyb20gJ3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcic7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgRmluaXNoUG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9GaW5pc2hQb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFBvaW50RHJhZ0V2ZW50IH0gZnJvbSAnZXZlbnRzL3BvaW50LWRyYWcvUG9pbnREcmFnRXZlbnQnO1xyXG5pbXBvcnQgeyBTdGFydFBvaW50RHJhZ0V2ZW50IH0gZnJvbSAnZXZlbnRzL3BvaW50LWRyYWcvU3RhcnRQb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFBvaW50Q2xpY2tFdmVudCB9IGZyb20gJ2V2ZW50cy9Qb2ludENsaWNrRXZlbnQnO1xyXG5cclxuaW1wb3J0ICd1aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudC5zY3NzJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVF9DTEFTU19OQU1FID0gJ2FwcGxpY2F0aW9uLXVpX192ZXJ0ZXgnO1xyXG5jb25zdCBJTklUSUFMX0NMQVNTX05BTUUgPSAnYXBwbGljYXRpb24tdWlfX3ZlcnRleC0taW5pdGlhbCc7XHJcblxyXG5pbnRlcmZhY2UgUGF0aFBvaW50Q29tcG9uZW50RGVwZW5kZW5jaWVzIHtcclxuICBhcHBsaWNhdGlvblVJQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGhQb2ludENvbXBvbmVudCB7XHJcbiAgcHVibGljIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHB1YmxpYyBwYXRoOiBQYXRoO1xyXG4gIHB1YmxpYyBwb2ludDogUG9pbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblVJQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcGF0aDogUGF0aCxcclxuICAgIHBvaW50OiBQb2ludCxcclxuICAgIGRlcGVuZGVuY2llczogUGF0aFBvaW50Q29tcG9uZW50RGVwZW5kZW5jaWVzXHJcbiAgKSB7XHJcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgdGhpcy5wb2ludCA9IHBvaW50O1xyXG4gICAgdGhpcy5hcHBsaWNhdGlvblVJQ29udGFpbmVyID0gZGVwZW5kZW5jaWVzLmFwcGxpY2F0aW9uVUlDb250YWluZXI7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmcgPSB0aGlzLnN0b3BEcmFnZ2luZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKCkge1xyXG4gICAgdGhpcy5wb2ludC5tb3ZlQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xyXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMucGF0aC5saW5lUHJvcGVydGllcy5jb2xvci5maWxsU3R5bGU7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gYCR7dGhpcy5wb2ludC55fXB4YDtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5wb2ludC54fXB4YDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaW5pdGlhbCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKElOSVRJQUxfQ0xBU1NfTkFNRSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGluaXRpYWwoaXNJbml0aWFsOiBib29sZWFuKSB7XHJcbiAgICBpZiAoaXNJbml0aWFsKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKElOSVRJQUxfQ0xBU1NfTkFNRSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShJTklUSUFMX0NMQVNTX05BTUUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0KCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uVUlDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChDT01QT05FTlRfQ0xBU1NfTkFNRSk7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnBhdGguZ2V0VmVydGljZXNDb3VudCgpID09PSAxIHx8XHJcbiAgICAgICghdGhpcy5wYXRoLmNsb3NlZCAmJiB0aGlzLnBhdGguZmluZFBvaW50SW5kZXgodGhpcy5wb2ludCkgPT09IDApXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5pbml0aWFsID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XHJcbiAgICB0aGlzLnBvaW50Lm1vdmVDYWxsYmFjayA9IHRoaXMudXBkYXRlUG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VEb3duKCkge1xyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgUG9pbnRDbGlja0V2ZW50KHRoaXMpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblxyXG4gICAgaWYgKGV2ZW50LmhhbmRsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN0YXJ0UG9pbnREcmFnRXZlbnQodGhpcykpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zdG9wRHJhZ2dpbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgY29uc3QgbW91c2VQb3NpdGlvbiA9IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLmdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUG9pbnREcmFnRXZlbnQodGhpcywgbW91c2VQb3NpdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdG9wRHJhZ2dpbmcoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBGaW5pc2hQb2ludERyYWdFdmVudCh0aGlzKSk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9QYXRoUG9pbnRDb21wb25lbnQudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9QYXRoUG9pbnRDb21wb25lbnQuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9QYXRoUG9pbnRDb21wb25lbnQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9QYXRoUG9pbnRDb21wb25lbnQuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9QYXRoUG9pbnRDb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcGxpY2F0aW9uLXVpX192ZXJ0ZXgge1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHg7IH1cXG4gIC5hcHBsaWNhdGlvbi11aV9fdmVydGV4Om5vdCg6YWN0aXZlKSB7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IH1cXG4gIC5hcHBsaWNhdGlvbi11aV9fdmVydGV4OmFjdGl2ZSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkOyB9XFxuXFxuLmFwcGxpY2F0aW9uLXVpX192ZXJ0ZXgtLWluaXRpYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTFmZjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuXHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgTG9hZEJ1dHRvbiB9IGZyb20gJ3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9Mb2FkQnV0dG9uJztcclxuaW1wb3J0IHsgU2F2ZUJ1dHRvbiB9IGZyb20gJ3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9TYXZlQnV0dG9uJztcclxuXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICdzZXJ2aWNlcy9TZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBTZXJpYWxpemF0aW9uU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VyaWFsaXphdGlvblNlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHNlcmlhbGl6YXRpb25Db250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSBzdGFnZTogU3RhZ2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogU2VyaWFsaXphdGlvblNlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIGNvbnN0IHNlcmlhbGl6YXRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VyaWFsaXphdGlvbi1jb250YWluZXInKTtcclxuICAgIGlmICghc2VyaWFsaXphdGlvbkNvbnRhaW5lcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlcmlhbGl6YXRpb24gY29udGFpbmVyIG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VyaWFsaXphdGlvbkNvbnRhaW5lciA9IHNlcmlhbGl6YXRpb25Db250YWluZXI7XHJcblxyXG4gICAgY29uc3QgbG9hZEJ1dHRvbiA9IG5ldyBMb2FkQnV0dG9uKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2VcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IG5ldyBTYXZlQnV0dG9uKHtcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2VcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2VyaWFsaXphdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkQnV0dG9uKTtcclxuICAgIHRoaXMuc2VyaWFsaXphdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB0aGlzLnNlcmlhbGl6YXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1NlcmlhbGl6YXRpb25TZXJ2aWNlLnRzIiwiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmltcG9ydCB7IExFWCB9IGZyb20gJ0xFWCc7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgU2VyaWFsaXphYmxlTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2FkQnV0dG9uRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBzdGFnZTogU3RhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkQnV0dG9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBidXR0b25FbGVtZW50OiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBMb2FkQnV0dG9uRGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5pbm5lclRleHQgPSAnTG9hZCc7XHJcblxyXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DbGljaygpIHtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWREYXRhID0gcHJvbXB0KCdQbGVhc2UgcGFzdGUgdGhlIHNlcmlhbGl6ZWQgZGF0YScpO1xyXG5cclxuICAgIGlmICghc2VyaWFsaXplZERhdGEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvbHlnb25MYXllciA9IHRoaXMuc3RhZ2UuZmluZExheWVyQnlOYW1lKExFWC5QT0xZR09OX0xBWUVSX05BTUUpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRTZXJpYWxpemFibGVMYXllciA9IHBvbHlnb25MYXllci50b1NlcmlhbGl6YWJsZU9iamVjdCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNlcmlhbGl6YWJsZUxheWVyID0gPFNlcmlhbGl6YWJsZUxheWVyPkpTT04ucGFyc2Uoc2VyaWFsaXplZERhdGEpO1xyXG4gICAgICBwb2x5Z29uTGF5ZXIuZnJvbVNlcmlhbGl6YWJsZU9iamVjdCg8U2VyaWFsaXphYmxlTGF5ZXI+c2VyaWFsaXphYmxlTGF5ZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcG9seWdvbkxheWVyLmZyb21TZXJpYWxpemFibGVPYmplY3QoY3VycmVudFNlcmlhbGl6YWJsZUxheWVyKTtcclxuICAgICAgYWxlcnQoJ0ludmFsaWQgZGF0YScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWxvYWQtYnV0dG9uJywgTG9hZEJ1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9Mb2FkQnV0dG9uLnRzIiwiaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNhdmVCdXR0b25EZXBlbmRlbmNpZXMge1xyXG4gIHN0YWdlOiBTdGFnZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhdmVCdXR0b24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBidXR0b25FbGVtZW50OiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBTYXZlQnV0dG9uRGVwZW5kZW5jaWVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5pbm5lclRleHQgPSAnU2F2ZSc7XHJcblxyXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbkVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DbGljaygpIHtcclxuICAgIGNvbnN0IHBvbHlnb25MYXllciA9IHRoaXMuc3RhZ2UuZmluZExheWVyQnlOYW1lKExFWC5QT0xZR09OX0xBWUVSX05BTUUpO1xyXG4gICAgY29uc3Qgc2VyaWFsaXphYmxlT2JqZWN0ID0gcG9seWdvbkxheWVyLnRvU2VyaWFsaXphYmxlT2JqZWN0KCk7XHJcblxyXG4gICAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSBKU09OLnN0cmluZ2lmeShzZXJpYWxpemFibGVPYmplY3QpO1xyXG4gICAgcHJvbXB0KCdDb3B5IHRoZSBkYXRhJywgc2VyaWFsaXplZERhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtc2F2ZS1idXR0b24nLCBTYXZlQnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL1NhdmVCdXR0b24udHMiLCJpbXBvcnQgJ3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzJztcclxuXHJcbmltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvRGlhbG9nQm94JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dPdmVybGF5IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByaXZhdGUgb3ZlcmxheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGlhbG9nQm94OiBEaWFsb2dCb3ggfCB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcclxuXHJcbiAgICB0aGlzLm9uT3ZlcmxheUNsaWNrID0gdGhpcy5vbk92ZXJsYXlDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkRpYWxvZ0Nsb3NlID0gdGhpcy5vbkRpYWxvZ0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheUVsZW1lbnQpO1xyXG4gICAgdGhpcy5vdmVybGF5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdmVybGF5Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLm92ZXJsYXlFbGVtZW50KTtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3ZlcmxheUNsaWNrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93RGlhbG9nKGRpYWxvZ0JveDogRGlhbG9nQm94KSB7XHJcbiAgICB0aGlzLmRpYWxvZ0JveCA9IGRpYWxvZ0JveDtcclxuICAgIHRoaXMuc2hvd092ZXJsYXkoKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZGlhbG9nQm94KTtcclxuICAgIGRpYWxvZ0JveC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25EaWFsb2dDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uT3ZlcmxheUNsaWNrKCkge1xyXG4gICAgaWYgKCF0aGlzLmRpYWxvZ0JveCB8fCAhdGhpcy5kaWFsb2dCb3guY2FuQ2xvc2UoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaWFsb2dCb3guY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25EaWFsb2dDbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLmRpYWxvZ0JveCkge1xyXG4gICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZGlhbG9nQm94KTtcclxuICAgICAgdGhpcy5kaWFsb2dCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLm9uRGlhbG9nQ2xvc2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaWFsb2dCb3ggPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmhpZGVPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dPdmVybGF5KCkge1xyXG4gICAgdGhpcy5vdmVybGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LS12aXNpYmxlJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVPdmVybGF5KCkge1xyXG4gICAgdGhpcy5vdmVybGF5RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LS12aXNpYmxlJyk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1kaWFsb2ctb3ZlcmxheScsIERpYWxvZ092ZXJsYXkpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dPdmVybGF5LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vRGlhbG9nT3ZlcmxheS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0RpYWxvZ092ZXJsYXkuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW4tb3V0O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG5cXG4ub3ZlcmxheS0tdmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwb2ludGVyLWV2ZW50czogYWxsOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnN0cnVjdGlvbnNEaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNEaWFsb2cnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RydWN0aW9uc0J1dHRvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcml2YXRlIGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5idXR0b24udGV4dENvbnRlbnQgPSAnSW5zdHJ1Y3Rpb25zJztcclxuICAgIHRoaXMuYnV0dG9uLmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbnMtYnV0dG9uJztcclxuXHJcbiAgICB0aGlzLm9uQnV0dG9uQ2xpY2sgPSB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24pO1xyXG4gICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmJ1dHRvbik7XHJcbiAgICB0aGlzLmJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQnV0dG9uQ2xpY2soKSB7XHJcbiAgICBjb25zdCBpbnN0cnVjdGlvbnNEaWFsb2cgPSBuZXcgSW5zdHJ1Y3Rpb25zRGlhbG9nKCk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGluc3RydWN0aW9uc0RpYWxvZyk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaW5zdHJ1Y3Rpb25zLWJ1dHRvbicsIEluc3RydWN0aW9uc0J1dHRvbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0J1dHRvbi50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNEaWFsb2cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluc3RydWN0aW9ucy1kaWFsb2ctd3JhcHBlciB7XFxuICB6LWluZGV4OiAyOyB9XFxuXFxuLmluc3RydWN0aW9ucy1kaWFsb2dfX292ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW4tb3V0OyB9XFxuXFxuLmluc3RydWN0aW9ucy1kaWFsb2dfX292ZXJsYXktLWFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG5cXG4uaW5zdHJ1Y3Rpb25zLWRpYWxvZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjM1MGY7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGNvbG9yOiAjZWVlO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0OyB9XFxuXFxuLmluc3RydWN0aW9ucy1kaWFsb2ctLWFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLCAxKTsgfVxcblxcbi5pbnN0cnVjdGlvbnMtZGlhbG9nX190aXRsZSB7XFxuICBtYXJnaW46IDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFBvbHlnb25DbGlwcGVyIH0gZnJvbSAnc2VydmljZXMvUG9seWdvbkNsaXBwZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMvU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICdjb21tb24vUG9seWdvbic7XHJcbmltcG9ydCB7IENsb3Nlc3RQYXRoRmluZGVyIH0gZnJvbSAnc2VydmljZXMvQ2xvc2VzdFBhdGhGaW5kZXInO1xyXG5cclxuaW50ZXJmYWNlIFBvbHlnb25DbGlwcGluZ1NlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIHBvbHlnb25DbGlwcGVyOiBQb2x5Z29uQ2xpcHBlcjtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwb2x5Z29uTGF5ZXI6IExheWVyO1xyXG4gIGNsb3Nlc3RQYXRoRmluZGVyOiBDbG9zZXN0UGF0aEZpbmRlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvbHlnb25DbGlwcGluZ1NlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHBvbHlnb25DbGlwcGVyOiBQb2x5Z29uQ2xpcHBlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcG9seWdvbkxheWVyOiBMYXllcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNsb3Nlc3RQYXRoRmluZGVyOiBDbG9zZXN0UGF0aEZpbmRlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2x5Z29uQ2xpcHBpbmdTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLnBvbHlnb25DbGlwcGVyID0gZGVwZW5kZW5jaWVzLnBvbHlnb25DbGlwcGVyO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkxheWVyO1xyXG4gICAgdGhpcy5jbG9zZXN0UGF0aEZpbmRlciA9IGRlcGVuZGVuY2llcy5jbG9zZXN0UGF0aEZpbmRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgLy8gTm90aGluZyB0byBkbyBoZXJlXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveSgpIHtcclxuICAgIC8vIE5vdGhpbmcgdG8gZG8gaGVyZVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsaXBQb2x5Z29ucyhwb2ludDogUG9pbnQpIHtcclxuICAgIGNvbnN0IHBvbHlnb25zSW5Cb3VuZGluZ0JveCA9IDxQb2x5Z29uW10+dGhpcy5wb2x5Z29uTGF5ZXIucGF0aHMuZmlsdGVyKHBhdGggPT5cclxuICAgICAgcGF0aC5pc1BvaW50SW5Cb3VuZGluZ0JveChwb2ludClcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHBvbHlnb25zSW5Cb3VuZGluZ0JveC5sZW5ndGggPCAyKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgnQ2xpY2sgaW4gdGhlIGJvdW5kaW5nIGJveCBvZiBhdCBsZWFzdCAyIHBvbHlnb25zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udmV4UG9seWdvbnMgPSBwb2x5Z29uc0luQm91bmRpbmdCb3guZmlsdGVyKHBvbHlnb24gPT4gcG9seWdvbi5pc0NvbnZleCgpKTtcclxuICAgIGlmIChjb252ZXhQb2x5Z29ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCdDYW5ub3QgZmluZCBhIGNvbnZleCBwb2x5Z29uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdENvbnZleFBvbHlnb24gPSA8UG9seWdvbj50aGlzLmNsb3Nlc3RQYXRoRmluZGVyLmdldENsb3Nlc3RQYXRoKFxyXG4gICAgICBjb252ZXhQb2x5Z29ucyxcclxuICAgICAgcG9pbnRcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc3ViamVjdFBvbHlnb25zID0gcG9seWdvbnNJbkJvdW5kaW5nQm94LmZpbHRlcihcclxuICAgICAgcG9seWdvbiA9PiBwb2x5Z29uICE9PSBjbG9zZXN0Q29udmV4UG9seWdvblxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNsb3Nlc3RTdWJqZWN0UG9seWdvbiA9IDxQb2x5Z29uPnRoaXMuY2xvc2VzdFBhdGhGaW5kZXIuZ2V0Q2xvc2VzdFBhdGgoc3ViamVjdFBvbHlnb25zLCBwb2ludCk7XHJcblxyXG4gICAgY29uc3QgY2xpcHBlZFBvbHlnb24gPSB0aGlzLnBvbHlnb25DbGlwcGVyLmNsaXBQb2x5Z29uKGNsb3Nlc3RTdWJqZWN0UG9seWdvbiwgY2xvc2VzdENvbnZleFBvbHlnb24pO1xyXG4gICAgaWYgKCFjbGlwcGVkUG9seWdvbikge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ0Nhbm5vdCBjbGlwIHBvbHlnb25zICh0aGV5IGRvIG5vdCBvdmVybGFwKScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucG9seWdvbkxheWVyLnJlbW92ZVBhdGgoY2xvc2VzdFN1YmplY3RQb2x5Z29uKTtcclxuICAgIHRoaXMucG9seWdvbkxheWVyLnJlbW92ZVBhdGgoY2xvc2VzdENvbnZleFBvbHlnb24pO1xyXG5cclxuICAgIHRoaXMucG9seWdvbkxheWVyLnBhdGhzLnB1c2goY2xpcHBlZFBvbHlnb24pO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUG9seWdvbkNsaXBwaW5nU2VydmljZS50cyJdLCJzb3VyY2VSb290IjoiIn0=