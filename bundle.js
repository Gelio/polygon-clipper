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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(8);
const LineProperties_1 = __webpack_require__(7);
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
    presetLightColor: COLORS_1.COLORS.WHITE
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
    moveTo(pointOrX, y) {
        if (typeof pointOrX === 'number') {
            if (!y) {
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

var	fixUrls = __webpack_require__(25);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(8);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(11);
exports.COLORS = {
    BLACK: new Color_1.Color(0, 0, 0),
    RED: new Color_1.Color(255, 0, 0),
    GREEN: new Color_1.Color(0, 255, 0),
    BLUE: new Color_1.Color(0, 0, 255),
    WHITE: new Color_1.Color(255, 255, 255)
};
Object.freeze(exports.COLORS);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Path_1 = __webpack_require__(10);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HitTestResult_1 = __webpack_require__(31);
const Line_1 = __webpack_require__(16);
const LineProperties_1 = __webpack_require__(7);
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
}
exports.Path = Path;


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LightVersorType;
(function (LightVersorType) {
    LightVersorType[LightVersorType["Constant"] = 0] = "Constant";
    LightVersorType[LightVersorType["Circling"] = 1] = "Circling";
})(LightVersorType = exports.LightVersorType || (exports.LightVersorType = {}));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NewBackgroundTextureEvent_1 = __webpack_require__(35);
exports.NewBackgroundTextureEvent = NewBackgroundTextureEvent_1.NewBackgroundTextureEvent;
const NewHeightMapEvent_1 = __webpack_require__(36);
exports.NewHeightMapEvent = NewHeightMapEvent_1.NewHeightMapEvent;
const NewLightColorEvent_1 = __webpack_require__(37);
exports.NewLightColorEvent = NewLightColorEvent_1.NewLightColorEvent;
const NewLightVersorTypeEvent_1 = __webpack_require__(38);
exports.NewLightVersorTypeEvent = NewLightVersorTypeEvent_1.NewLightVersorTypeEvent;
const NewNormalMapEvent_1 = __webpack_require__(39);
exports.NewNormalMapEvent = NewNormalMapEvent_1.NewNormalMapEvent;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Path_1 = __webpack_require__(10);
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
}
exports.Polygon = Polygon;


/***/ }),
/* 15 */
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
/* 16 */
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
}
exports.Line = Line;


/***/ }),
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(69);
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(23);
__webpack_require__(26);
__webpack_require__(27);
const Application_1 = __webpack_require__(29);
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nbody {\n  line-height: 1.5; }\n\n.main-canvas {\n  border: solid 1px black; }\n\n.main-container {\n  width: 100%;\n  padding: 0 1em; }\n\n.canvas-wrapper {\n  width: 100%;\n  position: relative; }\n\n.application-ui {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none; }\n  .application-ui * {\n    pointer-events: all; }\n\n.app-header {\n  margin-bottom: 1em;\n  margin-left: 1em; }\n\n.app-name {\n  margin: 0; }\n\n.footer {\n  margin: 1em 1em; }\n", ""]);

// exports


/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

/***/ }),
/* 28 */
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
/* 29 */
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
const ImageDownloader_1 = __webpack_require__(30);
const Layer_1 = __webpack_require__(9);
const EventAggregator_1 = __webpack_require__(32);
const LEX_1 = __webpack_require__(6);
const PolygonFiller_1 = __webpack_require__(34);
const InputDataInitializer_1 = __webpack_require__(41);
const Renderer_1 = __webpack_require__(42);
const Stage_1 = __webpack_require__(43);
const UIController_1 = __webpack_require__(44);
const RenderEvent_1 = __webpack_require__(1);
class Application {
    constructor(canvas) {
        this.canvas = canvas;
        this.eventAggregator = new EventAggregator_1.EventAggregator();
        this.imageDownloader = new ImageDownloader_1.ImageDownloader();
        this.polygonFiller = new PolygonFiller_1.PolygonFiller({
            canvas: this.canvas,
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
            imageDownloader: this.imageDownloader
        });
        this.render = this.render.bind(this);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const polygonLayer = new Layer_1.Layer(LEX_1.LEX.POLYGON_LAYER_NAME);
            this.stage.layers.push(polygonLayer);
            this.polygonFiller.init();
            this.uiController.init();
            this.addEventListeners();
            const inputDataInitializer = new InputDataInitializer_1.InputDataInitializer({
                eventAggregator: this.eventAggregator,
                imageDownloader: this.imageDownloader,
                polygonLayer
            });
            yield inputDataInitializer.init();
        });
    }
    destroy() {
        this.polygonFiller.destroy();
        this.uiController.destroy();
        this.removeEventListeners();
    }
    render(event) {
        this.renderer.clear();
        this.stage.render(this.renderer);
        event.handled = true;
    }
    addEventListeners() {
        this.eventAggregator.addEventListener(RenderEvent_1.RenderEvent.eventType, this.render);
    }
    removeEventListeners() {
        this.eventAggregator.removeEventListener(RenderEvent_1.RenderEvent.eventType, this.render);
    }
}
exports.Application = Application;


/***/ }),
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventQueue_1 = __webpack_require__(33);
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(11);
const LightVersorType_1 = __webpack_require__(12);
const input_data_1 = __webpack_require__(13);
const ActiveEdge_1 = __webpack_require__(40);
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
        this.onNewLightVersorType = this.onNewLightVersorType.bind(this);
        this.onNewNormalMap = this.onNewNormalMap.bind(this);
    }
    injectCanvasRenderingContext(renderingContext) {
        this.renderingContext = renderingContext;
    }
    init() {
        const eventAggregator = this.eventAggregator;
        eventAggregator.addEventListener(input_data_1.NewBackgroundTextureEvent.eventType, this.onNewBackgroundTexture);
        eventAggregator.addEventListener(input_data_1.NewHeightMapEvent.eventType, this.onNewHeightMap);
        eventAggregator.addEventListener(input_data_1.NewLightColorEvent.eventType, this.onNewLightColor);
        eventAggregator.addEventListener(input_data_1.NewLightVersorTypeEvent.eventType, this.onNewLightVersorType);
        eventAggregator.addEventListener(input_data_1.NewNormalMapEvent.eventType, this.onNewNormalMap);
    }
    destroy() {
        const eventAggregator = this.eventAggregator;
        eventAggregator.removeEventListener(input_data_1.NewBackgroundTextureEvent.eventType, this.onNewBackgroundTexture);
        eventAggregator.removeEventListener(input_data_1.NewHeightMapEvent.eventType, this.onNewHeightMap);
        eventAggregator.removeEventListener(input_data_1.NewLightColorEvent.eventType, this.onNewLightColor);
        eventAggregator.removeEventListener(input_data_1.NewLightVersorTypeEvent.eventType, this.onNewLightVersorType);
        eventAggregator.removeEventListener(input_data_1.NewNormalMapEvent.eventType, this.onNewNormalMap);
    }
    fillPolygon(polygon) {
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
        this.canvasImageData = this.renderingContext.getImageData(0, 0, this.canvas.width, this.canvas.height);
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
                for (let x = e1.x; x <= e2.x; x += 1) {
                    this.putPixel(x, y);
                }
            }
            activeEdgeTable.forEach(edge => edge.nextScanLine());
            previousY = y;
        }
        this.renderingContext.putImageData(this.canvasImageData, 0, 0);
    }
    putPixel(x, y) {
        if (x >= this.canvasImageData.width || y >= this.canvasImageData.height) {
            return;
        }
        // tslint:disable no-bitwise
        x = ~~x;
        y = ~~y;
        // tslint:enable no-bitwise
        const backgroundTexture = this.fillData.backgroundTexture;
        const backgroundTextureX = x % backgroundTexture.width;
        const backgroundTextureY = y % backgroundTexture.height;
        const backgroundTextureIndex = (backgroundTextureX + backgroundTextureY * backgroundTexture.width) * 4;
        const index = (x + y * this.canvasImageData.width) * 4;
        this.canvasImageData.data[index] = backgroundTexture.data[backgroundTextureIndex];
        this.canvasImageData.data[index + 1] = backgroundTexture.data[backgroundTextureIndex + 1];
        this.canvasImageData.data[index + 2] = backgroundTexture.data[backgroundTextureIndex + 2];
        this.canvasImageData.data[index + 3] = backgroundTexture.data[backgroundTextureIndex + 3];
        // this.canvasImageData.data[index] = 0;
        // this.canvasImageData.data[index + 1] = 0;
        // this.canvasImageData.data[index + 2] = 0;
        // this.canvasImageData.data[index + 3] = 255;
        this.renderingContext.fillRect(x, y, 1, 1);
        // this.renderingContext.putImageData(this.canvasImageData, 0, 0);
    }
    onNewBackgroundTexture(event) {
        this.fillData.backgroundTexture = event.payload;
        event.handled = true;
    }
    onNewHeightMap(event) {
        this.fillData.heightMap = event.payload;
        event.handled = true;
    }
    onNewLightColor(event) {
        this.fillData.lightColor = event.payload;
        event.handled = true;
    }
    onNewLightVersorType(event) {
        this.fillData.lightVersorType = event.payload;
        event.handled = true;
    }
    onNewNormalMap(event) {
        this.fillData.normalMap = event.payload;
        event.handled = true;
    }
}
exports.PolygonFiller = PolygonFiller;


/***/ }),
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
const input_data_1 = __webpack_require__(13);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(2);
const configuration_1 = __webpack_require__(0);
const LightVersorType_1 = __webpack_require__(12);
const LineProperties_1 = __webpack_require__(7);
const Point_1 = __webpack_require__(3);
const Polygon_1 = __webpack_require__(14);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(8);
const Line_1 = __webpack_require__(16);
const Point_1 = __webpack_require__(3);
const Polygon_1 = __webpack_require__(14);
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
        if (path instanceof Polygon_1.Polygon) {
            this.polygonFiller.fillPolygon(path);
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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(6);
const InputDataService_1 = __webpack_require__(45);
const MousePositionTransformer_1 = __webpack_require__(52);
const NewPolygonUIController_1 = __webpack_require__(53);
const PathDraggingService_1 = __webpack_require__(54);
const PointDraggingService_1 = __webpack_require__(55);
const PointInserterService_1 = __webpack_require__(56);
const PointRemoverService_1 = __webpack_require__(57);
const PointSyncService_1 = __webpack_require__(58);
const SerializationService_1 = __webpack_require__(62);
const LineClickEvent_1 = __webpack_require__(20);
__webpack_require__(65);
__webpack_require__(68);
__webpack_require__(21);
class UIController {
    constructor(dependencies) {
        this.uiServices = [];
        this.canvas = dependencies.canvas;
        this.renderer = dependencies.renderer;
        this.stage = dependencies.stage;
        this.eventAggregator = dependencies.eventAggregator;
        this.imageDownloader = dependencies.imageDownloader;
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
            stage: this.stage
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
}
exports.UIController = UIController;


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
const input_data_1 = __webpack_require__(13);
const RenderEvent_1 = __webpack_require__(1);
const configuration_1 = __webpack_require__(0);
const ColorSelectDialog_1 = __webpack_require__(46);
const ImageSelectDialog_1 = __webpack_require__(49);
const LightVersorType_1 = __webpack_require__(12);
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(11);
__webpack_require__(47);
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".color-select-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: solid 1px black;\n  border-radius: 25px;\n  z-index: 1;\n  padding: 1rem;\n  background-color: white;\n  width: 75vw; }\n\n.color-select-dialog__block {\n  border-bottom: solid 1px black;\n  padding-bottom: 1em; }\n\n.color-select-dialog__heading {\n  margin: 0.5em 0; }\n\n.color-select-dialog__bottom-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1em; }\n  .color-select-dialog__bottom-buttons button {\n    font-size: 1.3em; }\n", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(50);
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
        this.customColorContainer.appendChild(this.customColorInput);
        this.customColorImage = new Image(20, 20);
        this.customColorContainer.appendChild(this.customColorImage);
    }
    onCustomColorInputChange() {
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
        this.selectImage(this.customColorImage);
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".image-select-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: solid 1px black;\n  border-radius: 25px;\n  z-index: 1;\n  padding: 1rem;\n  background-color: white;\n  width: 75vw; }\n\n.image-select-dialog__heading {\n  margin: 0.5em 0; }\n\n.image-select-dialog__block {\n  border-bottom: solid 1px black;\n  padding-bottom: 1em; }\n\n.image-select-dialog__preset-images-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .image-select-dialog__preset-images-container > div {\n    max-width: 25%;\n    max-height: 200px;\n    margin: auto; }\n  .image-select-dialog__preset-images-container img {\n    max-width: 100%;\n    max-height: 200px; }\n\n.image-select-dialog__custom-image {\n  display: block;\n  max-width: 25%;\n  max-height: 200px;\n  margin: auto; }\n\n.image-select-dialog__image--selected {\n  border: solid 3px green; }\n\n.image-select-dialog__bottom-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1em; }\n  .image-select-dialog__bottom-buttons button {\n    font-size: 1.3em; }\n", ""]);

// exports


/***/ }),
/* 52 */
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
        return new Point_1.Point(event.pageX - this.canvasClientRect.left, event.pageY - this.canvasClientRect.top);
    }
}
exports.MousePositionTransformer = MousePositionTransformer;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Layer_1 = __webpack_require__(9);
const Path_1 = __webpack_require__(10);
const Polygon_1 = __webpack_require__(14);
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(6);
const PointClickEvent_1 = __webpack_require__(15);
const RenderEvent_1 = __webpack_require__(1);
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
    }
    init() {
        this.stage.layers.push(this.pathLayer);
        this.startNewUnfinishedPath();
        this.canvas.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('keydown', this.onKeyDown);
        this.eventAggregator.addEventListener(PointClickEvent_1.PointClickEvent.eventType, this.onPointClick);
    }
    destroy() {
        this.canvas.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('keydown', this.onKeyDown);
        this.eventAggregator.removeEventListener(PointClickEvent_1.PointClickEvent.eventType, this.onPointClick);
        this.stage.removeLayer(this.pathLayer);
    }
    addNewPoint(point) {
        this.unfinishedPath.addVertex(point);
        this.dispatchUpdateUIEvents();
    }
    onMouseMove(event) {
        const unfinishedPathVerticesCount = this.unfinishedPath.getVerticesCount();
        if (unfinishedPathVerticesCount === 0) {
            return;
        }
        const lastPoint = this.unfinishedPath.getVertex(unfinishedPathVerticesCount - 1);
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        const point = this.mousePositionTransformer.getPointFromMouseEvent(event);
        this.renderer.drawLine(lastPoint, point, configuration_1.configuration.newLinePreviewProperties);
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
}
exports.NewPolygonUIController = NewPolygonUIController;


/***/ }),
/* 54 */
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const COLORS_1 = __webpack_require__(8);
const Layer_1 = __webpack_require__(9);
const LineProperties_1 = __webpack_require__(7);
const configuration_1 = __webpack_require__(0);
const LEX_1 = __webpack_require__(6);
const FinishPointDragEvent_1 = __webpack_require__(17);
const PointDragEvent_1 = __webpack_require__(18);
const StartPointDragEvent_1 = __webpack_require__(19);
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(2);
class PointDraggingService {
    constructor(dependencies) {
        this.eventAggregator = dependencies.eventAggregator;
        this.stage = dependencies.stage;
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
        component.point.moveTo(newPosition);
        this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
        event.handled = true;
    }
}
exports.PointDraggingService = PointDraggingService;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LineClickEvent_1 = __webpack_require__(20);
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
            try {
                event.payload.path.insertVertex(newPoint, index);
            }
            catch (error) {
                return alert(error.message);
            }
            this.eventAggregator.dispatchEvent(new RenderEvent_1.RenderEvent());
            this.eventAggregator.dispatchEvent(new SyncComponentsEvent_1.SyncComponentsEvent());
        }
    }
}
exports.PointInserterService = PointInserterService;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(0);
const PointClickEvent_1 = __webpack_require__(15);
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PathPointComponent_1 = __webpack_require__(59);
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FinishPointDragEvent_1 = __webpack_require__(17);
const PointDragEvent_1 = __webpack_require__(18);
const StartPointDragEvent_1 = __webpack_require__(19);
const PointClickEvent_1 = __webpack_require__(15);
__webpack_require__(60);
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".application-ui__vertex {\n  border: solid 1px black;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  transform: translate(-50%, -50%); }\n  .application-ui__vertex:active {\n    border-color: red;\n    border-width: 2px; }\n\n.application-ui__vertex--initial {\n  background-color: #0051ff; }\n", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LoadButton_1 = __webpack_require__(63);
const SaveButton_1 = __webpack_require__(64);
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RenderEvent_1 = __webpack_require__(1);
const SyncComponentsEvent_1 = __webpack_require__(2);
const LEX_1 = __webpack_require__(6);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LEX_1 = __webpack_require__(6);
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(66);
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: 1;\n  background-color: black;\n  transition: opacity 250ms ease-in-out;\n  pointer-events: none; }\n\n.overlay--visible {\n  opacity: 0.5;\n  pointer-events: all; }\n", ""]);

// exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const InstructionsDialog_1 = __webpack_require__(21);
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".instructions-dialog-wrapper {\n  z-index: 2; }\n\n.instructions-dialog__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n  opacity: 0;\n  transition: opacity 250ms ease-in-out; }\n\n.instructions-dialog__overlay--active {\n  opacity: 0.5; }\n\n.instructions-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transform: translate(-50%, -50%) scale(0, 0);\n  background-color: #1f350f;\n  border: solid 1px black;\n  color: #eee;\n  padding: 2em;\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px black;\n  transition: transform 250ms ease-in-out; }\n\n.instructions-dialog--active {\n  transform: translate(-50%, -50%) scale(1, 1); }\n\n.instructions-dialog__title {\n  margin: 0; }\n", ""]);

// exports


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmJjNGM1Mjc5MWRiOGNmZDgzMjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9SZW5kZXJFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9MRVgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9MaW5lUHJvcGVydGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0NPTE9SUy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0xheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vUGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL0NvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vTGlnaHRWZXJzb3JUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1BvbHlnb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9Qb2ludENsaWNrRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9MaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9GaW5pc2hQb2ludERyYWdFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL3BvaW50LWRyYWcvUG9pbnREcmFnRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL1N0YXJ0UG9pbnREcmFnRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9MaW5lQ2xpY2tFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2Nzcz80NDQ2Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL3dlYmNvbXBvbmVudHMtaGktc2QtY2UuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9JbWFnZURvd25sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9IaXRUZXN0UmVzdWx0LnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvRXZlbnRBZ2dyZWdhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMvRXZlbnRRdWV1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWdvbi1maWxsZXIvUG9seWdvbkZpbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3SGVpZ2h0TWFwRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0Q29sb3JFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld05vcm1hbE1hcEV2ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5Z29uLWZpbGxlci9BY3RpdmVFZGdlLnRzIiwid2VicGFjazovLy8uL3NyYy9JbnB1dERhdGFJbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9VSUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL0lucHV0RGF0YVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3M/OTYyNCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3M/NmNmNiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvTmV3UG9seWdvblVJQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUGF0aERyYWdnaW5nU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvUG9pbnREcmFnZ2luZ1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1BvaW50SW5zZXJ0ZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2ludFJlbW92ZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9Qb2ludFN5bmNTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9QYXRoUG9pbnRDb21wb25lbnQuc2Nzcz83MjliIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9TZXJpYWxpemF0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL0xvYWRCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9TYXZlQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzPzkwYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS5zY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzPzRlMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQSx3Q0FBdUM7QUFDdkMsZ0RBQXVEO0FBQ3ZELHVDQUFxQztBQUVyQyxNQUFNLGFBQWEsR0FBRztJQUNwQix3QkFBd0IsRUFBRSxJQUFJLCtCQUFjLENBQUMsZUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUQsd0JBQXdCLEVBQUUsSUFBSSwrQkFBYyxDQUFDLGVBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNELHFCQUFxQixFQUFFLCtCQUFjLENBQUMsVUFBVSxFQUFFO0lBQ2xELHdCQUF3QixFQUFFLGdCQUFnQjtJQUMxQyxZQUFZLEVBQUUsRUFBRTtJQUNoQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsNEJBQTRCLEVBQUUsS0FBSztJQUNuQyxPQUFPLEVBQUUsR0FBRztJQUNaLCtCQUErQixFQUFFLEVBQUU7SUFDbkMsVUFBVSxFQUFFLFlBQVk7SUFDeEIsd0JBQXdCLEVBQUUsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QyxtQ0FBbUMsRUFBRSxJQUFJO0lBQ3pDLHdCQUF3QixFQUFFO1FBQ3hCLHVDQUF1QztRQUN2QyxrQ0FBa0M7S0FDbkM7SUFDRCxnQkFBZ0IsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO0lBQzVELGdCQUFnQixFQUFFLENBQUMsd0NBQXdDLEVBQUUsbUNBQW1DLENBQUM7SUFDakcsZ0JBQWdCLEVBQUUsZUFBTSxDQUFDLEtBQUs7Q0FDL0IsQ0FBQztBQUVPLHNDQUFhOzs7Ozs7Ozs7O0FDekJ0QjtJQUFBO1FBQ2tCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixjQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUMzQyxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBS3pCLENBQUM7SUFIUSxNQUFNLEtBQUssU0FBUztRQUN6QixNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjtBQVJELGtDQVFDOzs7Ozs7Ozs7O0FDUkQ7SUFBQTtRQUNrQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsY0FBUyxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztRQUNuRCxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBS3pCLENBQUM7SUFIUSxNQUFNLEtBQUssU0FBUztRQUN6QixNQUFNLENBQUMscUJBQXFCLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBUkQsa0RBUUM7Ozs7Ozs7Ozs7QUNSRDtJQWNFLFlBQVksQ0FBUyxFQUFFLENBQVM7UUFiekIsaUJBQVksR0FBd0IsSUFBSSxDQUFDO1FBYzlDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBWEQsSUFBVyxDQUFDO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELElBQVcsQ0FBQztRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFPTSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVMsRUFBRSxFQUFTO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBUyxFQUFFLEVBQVM7UUFDekMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQVMsRUFBRSxFQUFTO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sTUFBTSxDQUFDLHlCQUF5QixDQUFDLEVBQVMsRUFBRSxFQUFTO1FBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFTLEVBQUUsRUFBUztRQUN6QyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFFbkUsRUFB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QUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVPLGFBQWE7UUFDbkIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQTNCRCxnREEyQkM7QUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzs7Ozs7O0FDL0I1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDekJBO0FBQ0E7OztBQUdBO0FBQ0EsdURBQXdELGVBQWUsRUFBRSxtQ0FBbUMsb0JBQW9CLFdBQVcsWUFBWSxlQUFlLGlCQUFpQixrQkFBa0IsMkJBQTJCLGVBQWUsMENBQTBDLEVBQUUsMkNBQTJDLGlCQUFpQixFQUFFLDBCQUEwQixvQkFBb0IsYUFBYSxjQUFjLGVBQWUsaURBQWlELDhCQUE4Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix3QkFBd0Isa0NBQWtDLDRDQUE0QyxFQUFFLGtDQUFrQyxpREFBaUQsRUFBRSxpQ0FBaUMsY0FBYyxFQUFFOztBQUUveUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZiYzRjNTI3OTFkYjhjZmQ4MzI0IiwiaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnY29tbW9uL0NPTE9SUyc7XHJcbmltcG9ydCB7IExpbmVQcm9wZXJ0aWVzIH0gZnJvbSAnY29tbW9uL0xpbmVQcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuY29uc3QgY29uZmlndXJhdGlvbiA9IHtcclxuICBuZXdMaW5lUHJldmlld1Byb3BlcnRpZXM6IG5ldyBMaW5lUHJvcGVydGllcyhDT0xPUlMuQkxVRSwgMiksXHJcbiAgbmV3UG9seWdvbkxpbmVQcm9wZXJ0aWVzOiBuZXcgTGluZVByb3BlcnRpZXMoQ09MT1JTLlJFRCwgMSksXHJcbiAgcG9seWdvbkxpbmVQcm9wZXJ0aWVzOiBMaW5lUHJvcGVydGllcy5nZXREZWZhdWx0KCksXHJcbiAgYXBwbGljYXRpb25VSUNvbnRhaW5lcklEOiAnYXBwbGljYXRpb24tdWknLFxyXG4gIGhpdFRvbGVyYW5jZTogMTAsXHJcbiAgbWluUG9seWdvblBvaW50czogMyxcclxuICBkb3VibGVDbGlja01heERlbGF5OiA1MDAsXHJcbiAgZGlzcGxheVBhdGhHaG9zdFdoZW5EcmFnZ2luZzogZmFsc2UsXHJcbiAgZXBzaWxvbjogMC4xLFxyXG4gIGxpbmVEZXZpYXRpb25BbGxvd2FuY2VJbkRlZ3JlZXM6IDIwLFxyXG4gIGNhbnZhc0ZvbnQ6ICczMHB0IHNlcmlmJyxcclxuICBsaW5lQ29uZGl0aW9uTGFiZWxPZmZzZXQ6IG5ldyBQb2ludCg1LCAwKSxcclxuICByZW1vdmVDb25kaXRpb25zV2hlbkluc2VydGluZ1BvaW50czogdHJ1ZSxcclxuICBwcmVzZXRCYWNrZ3JvdW5kVGV4dHVyZXM6IFtcclxuICAgICdpbWFnZXMvYmFja2dyb3VuZHMvRnVubnktQ2F0LUZhY2UuanBnJyxcclxuICAgICdpbWFnZXMvYmFja2dyb3VuZHMvaHFkZWZhdWx0LmpwZydcclxuICBdLFxyXG4gIHByZXNldEhlaWdodE1hcHM6IFsnaW1hZ2VzL2hlaWdodC1tYXBzL2JyaWNrX2hlaWdodG1hcC5wbmcnXSxcclxuICBwcmVzZXROb3JtYWxNYXBzOiBbJ2ltYWdlcy9ub3JtYWwtbWFwcy9icmlja19ub3JtYWxtYXAucG5nJywgJ2ltYWdlcy9ub3JtYWwtbWFwcy9ub3JtYWxfbWFwLmpwZyddLFxyXG4gIHByZXNldExpZ2h0Q29sb3I6IENPTE9SUy5XSElURVxyXG59O1xyXG5cclxuZXhwb3J0IHsgY29uZmlndXJhdGlvbiB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb25maWd1cmF0aW9uLnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlckV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkID0gbnVsbDtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gUmVuZGVyRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnUmVuZGVyRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvUmVuZGVyRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3luY0NvbXBvbmVudHNFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZCA9IG51bGw7XHJcbiAgcHVibGljIHJlYWRvbmx5IGV2ZW50VHlwZSA9IFN5bmNDb21wb25lbnRzRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnU3luY0NvbXBvbmVudHNFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50LnRzIiwidHlwZSBNb3ZlQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuICBwdWJsaWMgbW92ZUNhbGxiYWNrOiBNb3ZlQ2FsbGJhY2sgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3k6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5feTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl94ID0geDtcclxuICAgIHRoaXMuX3kgPSB5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhZGQocDE6IFBvaW50LCBwMjogUG9pbnQpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHAxLnggKyBwMi54LCBwMS55ICsgcDIueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHN1YnRyYWN0KHAxOiBQb2ludCwgcDI6IFBvaW50KTogUG9pbnQge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludChwMS54IC0gcDIueCwgcDEueSAtIHAyLnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXREaXN0YW5jZUJldHdlZW4ocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChQb2ludC5nZXREaXN0YW5jZUJldHdlZW5TcXVhcmVkKHAxLCBwMikpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXREaXN0YW5jZUJldHdlZW5TcXVhcmVkKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnBvdyhwMS54IC0gcDIueCwgMikgKyBNYXRoLnBvdyhwMS55IC0gcDIueSwgMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEFuZ2xlKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIGxldCBhbmdsZSA9IChNYXRoLmF0YW4yKHAyLnkgLSBwMS55LCBwMi54IC0gcDEueCkpICogMTgwIC8gTWF0aC5QSTtcclxuXHJcbiAgICBpZiAoYW5nbGUgPCAwKSB7XHJcbiAgICAgIGFuZ2xlICs9IDM2MDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYW5nbGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW92ZVRvKHBvaW50OiBQb2ludCk6IHZvaWQ7XHJcbiAgcHVibGljIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XHJcbiAgcHVibGljIG1vdmVUbyhwb2ludE9yWDogUG9pbnQgfCBudW1iZXIsIHk/OiBudW1iZXIpIHtcclxuICAgIGlmICh0eXBlb2YgcG9pbnRPclggPT09ICdudW1iZXInKSB7XHJcbiAgICAgIGlmICgheSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigneCBpcyBkZWZpbmVkLCBidXQgeSBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5tb3ZlVG9Db29yZGluYXRlcyhwb2ludE9yWCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubW92ZVRvUG9pbnQocG9pbnRPclgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVxdWFscyhwb2ludDogUG9pbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnggPT09IHBvaW50LnggJiYgdGhpcy55ID09PSBwb2ludC55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERpc3RhbmNlVG8ocG9pbnQ6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBQb2ludC5nZXREaXN0YW5jZUJldHdlZW4odGhpcywgcG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERpc3RhbmNlU3F1YXJlZFRvKHBvaW50OiBQb2ludCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gUG9pbnQuZ2V0RGlzdGFuY2VCZXR3ZWVuU3F1YXJlZCh0aGlzLCBwb2ludCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZVRvUG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb3ZlVG9Db29yZGluYXRlcyhwb2ludC54LCBwb2ludC55KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92ZVRvQ29vcmRpbmF0ZXMoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3ggPSB4O1xyXG4gICAgdGhpcy5feSA9IHk7XHJcblxyXG4gICAgaWYgKHRoaXMubW92ZUNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMubW92ZUNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9Qb2ludC50cyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBEaWN0aW9uYXJ5XHJcbmNvbnN0IExFWCA9IHtcclxuICBQT0xZR09OX0xBWUVSX05BTUU6ICdQb2x5Z29uTGF5ZXInLFxyXG4gIFBBVEhfTEFZRVJfTkFNRTogJ1BhdGhMYXllcicsXHJcbiAgUEFUSF9HSE9TVF9MQVlFUl9OQU1FOiAnUGF0aEdob3N0TGF5ZXInLFxyXG4gIE5FV19DT05ESVRJT05fRVZFTlRfTkFNRTogJ25ldy1jb25kaXRpb24nLFxyXG4gIFJFTU9WRV9DT05ESVRJT05fRVZFTlRfTkFNRTogJ3JlbW92ZS1jb25kaXRpb24nLFxyXG4gIEtFWV9DT0RFOiB7XHJcbiAgICBFU0NBUEU6IDI3XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBMRVhcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvTEVYLnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5pbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdjb21tb24vQ09MT1JTJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5lUHJvcGVydGllcyB7XHJcbiAgcHVibGljIGNvbG9yOiBDb2xvcjtcclxuICBwdWJsaWMgdGhpY2tuZXNzOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbG9yOiBDb2xvciwgdGhpY2tuZXNzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMudGhpY2tuZXNzID0gdGhpY2tuZXNzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXREZWZhdWx0KCk6IExpbmVQcm9wZXJ0aWVzIHtcclxuICAgIHJldHVybiBuZXcgTGluZVByb3BlcnRpZXMoQ09MT1JTLkJMQUNLLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpOiBMaW5lUHJvcGVydGllcyB7XHJcbiAgICByZXR1cm4gbmV3IExpbmVQcm9wZXJ0aWVzKHRoaXMuY29sb3IsIHRoaXMudGhpY2tuZXNzKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0xpbmVQcm9wZXJ0aWVzLnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb21tb24vQ29sb3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcclxuICBCTEFDSzogbmV3IENvbG9yKDAsIDAsIDApLFxyXG4gIFJFRDogbmV3IENvbG9yKDI1NSwgMCwgMCksXHJcbiAgR1JFRU46IG5ldyBDb2xvcigwLCAyNTUsIDApLFxyXG4gIEJMVUU6IG5ldyBDb2xvcigwLCAwLCAyNTUpLFxyXG4gIFdISVRFOiBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSlcclxufTtcclxuXHJcbk9iamVjdC5mcmVlemUoQ09MT1JTKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0NPTE9SUy50cyIsImltcG9ydCB7IEhpdFRlc3RSZXN1bHQgfSBmcm9tICdjb21tb24vSGl0VGVzdFJlc3VsdCc7XHJcbmltcG9ydCB7IFBhdGgsIFNlcmlhbGl6YWJsZVBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICdSZW5kZXJlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmlhbGl6YWJsZUxheWVyIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcGF0aHM6IFNlcmlhbGl6YWJsZVBhdGhbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExheWVyIHtcclxuICBwdWJsaWMgcGF0aHM6IFBhdGhbXSA9IFtdO1xyXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIocmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcbiAgICB0aGlzLnBhdGhzLmZvckVhY2gocGF0aCA9PiByZW5kZXJlci5kcmF3UGF0aChwYXRoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUGF0aChwYXRoOiBQYXRoKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucGF0aHMuaW5kZXhPZihwYXRoKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGF0aHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaXRUZXN0KHBvaW50OiBQb2ludCk6IEhpdFRlc3RSZXN1bHQgfCBudWxsIHtcclxuICAgIGZvciAoY29uc3QgcGF0aCBvZiB0aGlzLnBhdGhzKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBhdGguaGl0VGVzdChwb2ludCk7XHJcbiAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlc3VsdC5sYXllciA9IHRoaXM7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvU2VyaWFsaXphYmxlT2JqZWN0KCk6IFNlcmlhbGl6YWJsZUxheWVyIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgcGF0aHM6IHRoaXMucGF0aHMubWFwKHBhdGggPT4gcGF0aC50b1NlcmlhbGl6YWJsZU9iamVjdCgpKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmcm9tU2VyaWFsaXphYmxlT2JqZWN0KHNlcmlhbGl6YWJsZUxheWVyOiBTZXJpYWxpemFibGVMYXllcikge1xyXG4gICAgdGhpcy5uYW1lID0gc2VyaWFsaXphYmxlTGF5ZXIubmFtZTtcclxuXHJcbiAgICB0aGlzLnBhdGhzLnNwbGljZSgwLCB0aGlzLnBhdGhzLmxlbmd0aCk7XHJcblxyXG4gICAgc2VyaWFsaXphYmxlTGF5ZXIucGF0aHMuZm9yRWFjaChzZXJpYWxpemFibGVQYXRoID0+IHtcclxuICAgICAgdGhpcy5wYXRocy5wdXNoKFBhdGguZnJvbVNlcmlhbGl6YWJsZVBhdGgoc2VyaWFsaXphYmxlUGF0aCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9MYXllci50cyIsImltcG9ydCB7IEhpdFRlc3RSZXN1bHQgfSBmcm9tICdjb21tb24vSGl0VGVzdFJlc3VsdCc7XHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IExpbmVQcm9wZXJ0aWVzIH0gZnJvbSAnY29tbW9uL0xpbmVQcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmlhbGl6YWJsZVBhdGgge1xyXG4gIGxpbmVQcm9wZXJ0aWVzOiBMaW5lUHJvcGVydGllcztcclxuICBjbG9zZWQ6IGJvb2xlYW47XHJcbiAgdmVydGljZXM6IHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICB9W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoIHtcclxuICBwdWJsaWMgY2xvc2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGxpbmVQcm9wZXJ0aWVzOiBMaW5lUHJvcGVydGllcztcclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdmVydGljZXM6IFBvaW50W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzOiBQb2ludFtdLCBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXMpIHtcclxuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcclxuICAgIHRoaXMubGluZVByb3BlcnRpZXMgPSBsaW5lUHJvcGVydGllcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbVNlcmlhbGl6YWJsZVBhdGgoc2VyaWFsaXphYmxlUGF0aDogU2VyaWFsaXphYmxlUGF0aCkge1xyXG4gICAgY29uc3QgcmVhbFBvaW50cyA9IHNlcmlhbGl6YWJsZVBhdGgudmVydGljZXMubWFwKHZlcnRleCA9PiBuZXcgUG9pbnQodmVydGV4LngsIHZlcnRleC55KSk7XHJcbiAgICBjb25zdCByZWFsTGluZVByb3BlcnRpZXMgPSBuZXcgTGluZVByb3BlcnRpZXMoXHJcbiAgICAgIHNlcmlhbGl6YWJsZVBhdGgubGluZVByb3BlcnRpZXMuY29sb3IsXHJcbiAgICAgIHNlcmlhbGl6YWJsZVBhdGgubGluZVByb3BlcnRpZXMudGhpY2tuZXNzXHJcbiAgICApO1xyXG4gICAgY29uc3QgcGF0aCA9IG5ldyBQYXRoKHJlYWxQb2ludHMsIHJlYWxMaW5lUHJvcGVydGllcyk7XHJcbiAgICBwYXRoLmNsb3NlZCA9IHNlcmlhbGl6YWJsZVBhdGguY2xvc2VkO1xyXG5cclxuICAgIHJldHVybiBwYXRoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljICpnZXRWZXJ0aWNlc0l0ZXJhdG9yKCkge1xyXG4gICAgY29uc3QgdmVydGljZXNDb3VudCA9IHRoaXMudmVydGljZXMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJ0aWNlc0NvdW50OyBpICs9IDEpIHtcclxuICAgICAgeWllbGQgdGhpcy52ZXJ0aWNlc1tpXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jbG9zZWQgJiYgdmVydGljZXNDb3VudCA+IDApIHtcclxuICAgICAgeWllbGQgdGhpcy52ZXJ0aWNlc1swXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyAqZ2V0TGluZUl0ZXJhdG9yKCkge1xyXG4gICAgbGV0IHByZXZpb3VzUG9pbnQ7XHJcblxyXG4gICAgZm9yIChjb25zdCBwb2ludCBvZiB0aGlzLmdldFZlcnRpY2VzSXRlcmF0b3IoKSkge1xyXG4gICAgICBpZiAoIXByZXZpb3VzUG9pbnQpIHtcclxuICAgICAgICBwcmV2aW91c1BvaW50ID0gcG9pbnQ7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHlpZWxkIG5ldyBMaW5lKHByZXZpb3VzUG9pbnQsIHBvaW50KTtcclxuICAgICAgcHJldmlvdXNQb2ludCA9IHBvaW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFN0YXJ0aW5nUG9pbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1swXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRWZXJ0aWNlc0NvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmVydGljZXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExpbmVQcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubGluZVByb3BlcnRpZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGl0VGVzdChwb2ludDogUG9pbnQpOiBIaXRUZXN0UmVzdWx0IHwgbnVsbCB7XHJcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgdGhpcy5nZXRMaW5lSXRlcmF0b3IoKSkge1xyXG4gICAgICBpZiAobGluZS5kaXN0YW5jZVRvUG9pbnQocG9pbnQpIDw9IGNvbmZpZ3VyYXRpb24uaGl0VG9sZXJhbmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIaXRUZXN0UmVzdWx0KGxpbmUsIHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VmVydGV4KGluZGV4OiBudW1iZXIpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlc1tpbmRleF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VmVydGljZXMoKTogUG9pbnRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRWZXJ0ZXgocG9pbnQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLnZlcnRpY2VzLnB1c2gocG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVZlcnRleChwb2ludDogUG9pbnQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kUG9pbnRJbmRleChwb2ludCk7XHJcblxyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLnZlcnRpY2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5zZXJ0VmVydGV4KHBvaW50OiBQb2ludCwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy52ZXJ0aWNlcy5zcGxpY2UoaW5kZXgsIDAsIHBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9uZSgpOiBQYXRoIHtcclxuICAgIGNvbnN0IHZlcnRpY2VzID0gWy4uLnRoaXMuZ2V0VmVydGljZXMoKS5tYXAocG9pbnQgPT4gcG9pbnQuY2xvbmUoKSldO1xyXG4gICAgY29uc3QgbGluZVByb3BlcnRpZXMgPSB0aGlzLmxpbmVQcm9wZXJ0aWVzLmNsb25lKCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQYXRoKHZlcnRpY2VzLCBsaW5lUHJvcGVydGllcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmluZFBvaW50SW5kZXgocG9pbnQ6IFBvaW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcy5pbmRleE9mKHBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRCb3VuZGluZ0JveCgpIHtcclxuICAgIGxldCBtaW5YID0gSW5maW5pdHk7XHJcbiAgICBsZXQgbWF4WCA9IDA7XHJcbiAgICBsZXQgbWluWSA9IEluZmluaXR5O1xyXG4gICAgbGV0IG1heFkgPSAwO1xyXG5cclxuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaChwb2ludCA9PiB7XHJcbiAgICAgIGlmIChwb2ludC54IDwgbWluWCkge1xyXG4gICAgICAgIG1pblggPSBwb2ludC54O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwb2ludC54ID4gbWF4WCkge1xyXG4gICAgICAgIG1heFggPSBwb2ludC54O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwb2ludC55IDwgbWluWSkge1xyXG4gICAgICAgIG1pblkgPSBwb2ludC55O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwb2ludC55ID4gbWF4WSkge1xyXG4gICAgICAgIG1heFkgPSBwb2ludC55O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtaW5YLFxyXG4gICAgICBtYXhYLFxyXG4gICAgICBtaW5ZLFxyXG4gICAgICBtYXhZXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzUG9pbnRJbkJvdW5kaW5nQm94KHBvaW50OiBQb2ludCkge1xyXG4gICAgY29uc3QgYm91bmRpbmdCb3ggPSB0aGlzLmdldEJvdW5kaW5nQm94KCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgcG9pbnQueCA+PSBib3VuZGluZ0JveC5taW5YICYmXHJcbiAgICAgIHBvaW50LnggPD0gYm91bmRpbmdCb3gubWF4WCAmJlxyXG4gICAgICBwb2ludC55ID49IGJvdW5kaW5nQm94Lm1pblkgJiZcclxuICAgICAgcG9pbnQueSA8PSBib3VuZGluZ0JveC5tYXhZXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvU2VyaWFsaXphYmxlT2JqZWN0KCk6IFNlcmlhbGl6YWJsZVBhdGgge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGluZVByb3BlcnRpZXM6IHRoaXMubGluZVByb3BlcnRpZXMuY2xvbmUoKSxcclxuICAgICAgY2xvc2VkOiB0aGlzLmNsb3NlZCxcclxuICAgICAgdmVydGljZXM6IHRoaXMudmVydGljZXMubWFwKHZlcnRleCA9PiAoe1xyXG4gICAgICAgIHg6IHZlcnRleC54LFxyXG4gICAgICAgIHk6IHZlcnRleC55XHJcbiAgICAgIH0pKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROZXh0UG9pbnRJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKGluZGV4ICsgMSkgJSB0aGlzLmdldFZlcnRpY2VzQ291bnQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROZXh0UG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudmVydGljZXMuaW5kZXhPZihwb2ludCk7XHJcbiAgICBjb25zdCBuZXh0UG9pbnRJbmRleCA9IHRoaXMuZ2V0TmV4dFBvaW50SW5kZXgoaW5kZXgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdldFZlcnRleChuZXh0UG9pbnRJbmRleCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UHJldmlvdXNQb2ludEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgIGxldCBwcmV2aW91c1BvaW50SW5kZXggPSBpbmRleCAtIDE7XHJcbiAgICBpZiAocHJldmlvdXNQb2ludEluZGV4IDwgMCkge1xyXG4gICAgICBwcmV2aW91c1BvaW50SW5kZXggPSB0aGlzLmdldFZlcnRpY2VzQ291bnQoKSAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzUG9pbnRJbmRleDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQcmV2aW91c1BvaW50KHBvaW50OiBQb2ludCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnZlcnRpY2VzLmluZGV4T2YocG9pbnQpO1xyXG4gICAgY29uc3QgcHJldmlvdXNQb2ludEluZGV4ID0gdGhpcy5nZXRQcmV2aW91c1BvaW50SW5kZXgoaW5kZXgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdldFZlcnRleChwcmV2aW91c1BvaW50SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1vdmVUbyhwYXRoOiBQYXRoKSB7XHJcbiAgICBpZiAodGhpcy5nZXRWZXJ0aWNlc0NvdW50KCkgIT09IHBhdGguZ2V0VmVydGljZXNDb3VudCgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG51bWJlciBvZiB2ZXJ0aWNlcyBkb2VzIG5vdCBtYXRjaCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNsb3NlZCAhPT0gcGF0aC5jbG9zZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGF0aCdzIGNsb3NlZCBzdGF0ZSBkb2VzIG5vdCBtYXRjaFwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHBvaW50LCBpbmRleCkgPT4gcG9pbnQubW92ZVRvKHBhdGguZ2V0VmVydGV4KGluZGV4KSkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vUGF0aC50cyIsImV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHI6IG51bWJlcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgZzogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSBiOiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IGZpbGxTdHlsZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnIgPSByO1xyXG4gICAgdGhpcy5nID0gZztcclxuICAgIHRoaXMuYiA9IGI7XHJcblxyXG4gICAgdGhpcy5maWxsU3R5bGUgPSBgcmdiKCR7dGhpcy5yfSwgJHt0aGlzLmd9LCAke3RoaXMuYn0pYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUhleFN0cmluZyhoZXhTdHJpbmc6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVkUGFydCA9IGhleFN0cmluZy5zbGljZSgxLCAzKTtcclxuICAgIGNvbnN0IGdyZWVuUGFydCA9IGhleFN0cmluZy5zbGljZSgzLCA1KTtcclxuICAgIGNvbnN0IGJsdWVQYXJ0ID0gaGV4U3RyaW5nLnNsaWNlKDUsIDcpO1xyXG5cclxuICAgIGNvbnN0IHJlZCA9IHBhcnNlSW50KHJlZFBhcnQsIDE2KTtcclxuICAgIGNvbnN0IGdyZWVuID0gcGFyc2VJbnQoZ3JlZW5QYXJ0LCAxNik7XHJcbiAgICBjb25zdCBibHVlID0gcGFyc2VJbnQoYmx1ZVBhcnQsIDE2KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IENvbG9yKHJlZCwgZ3JlZW4sIGJsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW50ZWdlclRvUGFkZGVkSGV4KGludGVnZXI6IG51bWJlcikge1xyXG4gICAgY29uc3QgaGV4ID0gaW50ZWdlci50b1N0cmluZygxNik7XHJcblxyXG4gICAgaWYgKGhleC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIGAgJHtoZXh9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBoZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9IZXhTdHJpbmcoKSB7XHJcbiAgICBjb25zdCByZWRQYXJ0ID0gQ29sb3IuaW50ZWdlclRvUGFkZGVkSGV4KHRoaXMucik7XHJcbiAgICBjb25zdCBncmVlblBhcnQgPSBDb2xvci5pbnRlZ2VyVG9QYWRkZWRIZXgodGhpcy5nKTtcclxuICAgIGNvbnN0IGJsdWVQYXJ0ID0gQ29sb3IuaW50ZWdlclRvUGFkZGVkSGV4KHRoaXMuYik7XHJcblxyXG4gICAgcmV0dXJuIGAjJHtyZWRQYXJ0ICsgYmx1ZVBhcnQgKyBncmVlblBhcnR9YDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0NvbG9yLnRzIiwiZXhwb3J0IGVudW0gTGlnaHRWZXJzb3JUeXBlIHtcclxuICBDb25zdGFudCxcclxuICBDaXJjbGluZ1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbW1vbi9MaWdodFZlcnNvclR5cGUudHMiLCJpbXBvcnQgeyBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCc7XHJcbmltcG9ydCB7IE5ld0hlaWdodE1hcEV2ZW50IH0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEvTmV3SGVpZ2h0TWFwRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdMaWdodENvbG9yRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodENvbG9yRXZlbnQnO1xyXG5pbXBvcnQgeyBOZXdMaWdodFZlcnNvclR5cGVFdmVudCB9IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhL05ld0xpZ2h0VmVyc29yVHlwZUV2ZW50JztcclxuaW1wb3J0IHsgTmV3Tm9ybWFsTWFwRXZlbnQgfSBmcm9tICdldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudCc7XHJcblxyXG5leHBvcnQge1xyXG4gIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgTmV3TGlnaHRDb2xvckV2ZW50LFxyXG4gIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LFxyXG4gIE5ld05vcm1hbE1hcEV2ZW50XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL2luZGV4LnRzIiwiaW1wb3J0IHsgTGluZVByb3BlcnRpZXMgfSBmcm9tICdjb21tb24vTGluZVByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgUGF0aCB7XHJcbiAgY29uc3RydWN0b3IocGF0aDogUGF0aCk7XHJcbiAgY29uc3RydWN0b3IodmVydGljZXM6IFBvaW50W10sIGxpbmVQcm9wZXJ0aWVzOiBMaW5lUHJvcGVydGllcyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhdGhPclZlcnRpY2VzOiBQYXRoIHwgUG9pbnRbXSwgbGluZVByb3BlcnRpZXM/OiBMaW5lUHJvcGVydGllcykge1xyXG4gICAgbGV0IHZlcnRpY2VzOiBQb2ludFtdO1xyXG5cclxuICAgIGlmIChwYXRoT3JWZXJ0aWNlcyBpbnN0YW5jZW9mIFBhdGgpIHtcclxuICAgICAgY29uc3QgcGF0aCA9IHBhdGhPclZlcnRpY2VzO1xyXG4gICAgICB2ZXJ0aWNlcyA9IHBhdGguZ2V0VmVydGljZXMoKTtcclxuICAgICAgbGluZVByb3BlcnRpZXMgPSBwYXRoLmxpbmVQcm9wZXJ0aWVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmVydGljZXMgPSBwYXRoT3JWZXJ0aWNlcztcclxuICAgICAgbGluZVByb3BlcnRpZXMgPSA8TGluZVByb3BlcnRpZXM+bGluZVByb3BlcnRpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgUG9seWdvbi5lbnN1cmVWZXJ0aWNlc0xlbmd0aCh2ZXJ0aWNlcyk7XHJcbiAgICBzdXBlcih2ZXJ0aWNlcywgbGluZVByb3BlcnRpZXMpO1xyXG4gICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZW5zdXJlVmVydGljZXNMZW5ndGgodmVydGljZXM6IFBvaW50W10pIHtcclxuICAgIGlmICh2ZXJ0aWNlcy5sZW5ndGggPj0gY29uZmlndXJhdGlvbi5taW5Qb2x5Z29uUG9pbnRzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFBvbHlnb24gbXVzdCBoYXZlIGF0IGxlYXN0ICR7Y29uZmlndXJhdGlvbi5taW5Qb2x5Z29uUG9pbnRzfSB2ZXJ0aWNlc2ApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb25lKCk6IFBvbHlnb24ge1xyXG4gICAgcmV0dXJuIG5ldyBQb2x5Z29uKHN1cGVyLmNsb25lKCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVZlcnRleChwb2ludDogUG9pbnQpIHtcclxuICAgIGlmICh0aGlzLmdldFZlcnRpY2VzQ291bnQoKSA9PT0gY29uZmlndXJhdGlvbi5taW5Qb2x5Z29uUG9pbnRzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGRlbGV0ZSB2ZXJ0ZXgnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5yZW1vdmVWZXJ0ZXgocG9pbnQpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vUG9seWdvbi50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuaW1wb3J0IHsgUGF0aFBvaW50Q29tcG9uZW50IH0gZnJvbSAndWkvY29tcG9uZW50cy9QYXRoUG9pbnRDb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50Q2xpY2tFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gUG9pbnRDbGlja0V2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogUGF0aFBvaW50Q29tcG9uZW50O1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhdGhQb2ludENvbXBvbmVudDogUGF0aFBvaW50Q29tcG9uZW50KSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBwYXRoUG9pbnRDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gJ1BvaW50Q2xpY2tFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9Qb2ludENsaWNrRXZlbnQudHMiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGluZSB7XHJcbiAgcHVibGljIHAxOiBQb2ludDtcclxuICBwdWJsaWMgcDI6IFBvaW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwMTogUG9pbnQsIHAyOiBQb2ludCkge1xyXG4gICAgaWYgKHAxLmVxdWFscyhwMikpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIGxpbmUgYmV0d2VlbiBwb2ludHMgYXQgdGhlIHNhbWUgY29vcmRpbmF0ZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnAxID0gcDE7XHJcbiAgICB0aGlzLnAyID0gcDI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzdGFuY2VUb1BvaW50KHA6IFBvaW50KTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHBvaW50UHJvamVjdGlvbiA9IHRoaXMucHJvamVjdFBvaW50KHApO1xyXG5cclxuICAgIHJldHVybiBQb2ludC5nZXREaXN0YW5jZUJldHdlZW4ocCwgcG9pbnRQcm9qZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcm9qZWN0UG9pbnQocDogUG9pbnQpIHtcclxuICAgIGNvbnN0IHAxID0gdGhpcy5wMTtcclxuICAgIGNvbnN0IHAyID0gdGhpcy5wMjtcclxuXHJcbiAgICBsZXQgdCA9XHJcbiAgICAgICgocC54IC0gcDEueCkgKiAocDIueCAtIHAxLngpICsgKHAueSAtIHAxLnkpICogKHAyLnkgLSBwMS55KSkgL1xyXG4gICAgICBQb2ludC5nZXREaXN0YW5jZUJldHdlZW5TcXVhcmVkKHAxLCBwMik7XHJcbiAgICB0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdCkpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUG9pbnQocDEueCArIHQgKiAocDIueCAtIHAxLngpLCBwMS55ICsgdCAqIChwMi55IC0gcDEueSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVxdWFscyhsaW5lOiBMaW5lKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAodGhpcy5wMS5lcXVhbHMobGluZS5wMSkgJiYgdGhpcy5wMi5lcXVhbHMobGluZS5wMikpIHx8XHJcbiAgICAgICh0aGlzLnAxLmVxdWFscyhsaW5lLnAyKSAmJiB0aGlzLnAyLmVxdWFscyhsaW5lLnAxKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TWlkZGxlUG9pbnQoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIG5ldyBQb2ludCgodGhpcy5wMS54ICsgdGhpcy5wMi54KSAvIDIsICh0aGlzLnAxLnkgKyB0aGlzLnAyLnkpIC8gMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGVuZ3RoKCkge1xyXG4gICAgcmV0dXJuIFBvaW50LmdldERpc3RhbmNlQmV0d2Vlbih0aGlzLnAxLCB0aGlzLnAyKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0xpbmUudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IFBhdGhQb2ludENvbXBvbmVudCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvUGF0aFBvaW50Q29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaW5pc2hQb2ludERyYWdFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogUGF0aFBvaW50Q29tcG9uZW50O1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBGaW5pc2hQb2ludERyYWdFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aFBvaW50Q29tcG9uZW50OiBQYXRoUG9pbnRDb21wb25lbnQpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IHBhdGhQb2ludENvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiAnRmluaXNoUG9pbnREcmFnRXZlbnQnO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvcG9pbnQtZHJhZy9GaW5pc2hQb2ludERyYWdFdmVudC50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5pbXBvcnQgeyBQYXRoUG9pbnRDb21wb25lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnREcmFnRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IHtcclxuICAgIGNvbXBvbmVudDogUGF0aFBvaW50Q29tcG9uZW50LFxyXG4gICAgbmV3UG9zaXRpb246IFBvaW50XHJcbiAgfTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gUG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhdGhQb2ludENvbXBvbmVudDogUGF0aFBvaW50Q29tcG9uZW50LCBuZXdQb3NpdGlvbjogUG9pbnQpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IHtcclxuICAgICAgY29tcG9uZW50OiBwYXRoUG9pbnRDb21wb25lbnQsXHJcbiAgICAgIG5ld1Bvc2l0aW9uXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdQb2ludERyYWdFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9wb2ludC1kcmFnL1BvaW50RHJhZ0V2ZW50LnRzIiwiaW1wb3J0IHsgQXBwRXZlbnQgfSBmcm9tICdldmVudHMvQXBwRXZlbnQnO1xyXG5pbXBvcnQgeyBQYXRoUG9pbnRDb21wb25lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhcnRQb2ludERyYWdFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogUGF0aFBvaW50Q29tcG9uZW50O1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBTdGFydFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXRoUG9pbnRDb21wb25lbnQ6IFBhdGhQb2ludENvbXBvbmVudCkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gcGF0aFBvaW50Q29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdTdGFydFBvaW50RHJhZ0V2ZW50JztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL3BvaW50LWRyYWcvU3RhcnRQb2ludERyYWdFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdjb21tb24vTGluZSc7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmludGVyZmFjZSBMaW5lQ2xpY2tFdmVudFBheWxvYWQge1xyXG4gIGxpbmU6IExpbmU7XHJcbiAgcGF0aDogUGF0aDtcclxuICBwb3NpdGlvbjogUG9pbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5lQ2xpY2tFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTGluZUNsaWNrRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBMaW5lQ2xpY2tFdmVudFBheWxvYWQ7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IobGluZTogTGluZSwgcGF0aDogUGF0aCwgcG9zaXRpb246IFBvaW50KSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSB7XHJcbiAgICAgIGxpbmUsXHJcbiAgICAgIHBhdGgsXHJcbiAgICAgIHBvc2l0aW9uXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdMaW5lQ2xpY2tFdmVudCc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9MaW5lQ2xpY2tFdmVudC50cyIsImltcG9ydCAndWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluc3RydWN0aW9uc0RpYWxvZyBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcml2YXRlIG92ZXJsYXk6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZGlhbG9nQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIGRpc21pc3NCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5jbGFzc05hbWUgPSAnaW5zdHJ1Y3Rpb25zLWRpYWxvZy13cmFwcGVyJztcclxuXHJcbiAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMub3ZlcmxheS5jbGFzc05hbWUgPSAnaW5zdHJ1Y3Rpb25zLWRpYWxvZ19fb3ZlcmxheSc7XHJcblxyXG4gICAgdGhpcy5kaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuZGlhbG9nQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdpbnN0cnVjdGlvbnMtZGlhbG9nJztcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdJbnN0cnVjdGlvbnMnO1xyXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ2luc3RydWN0aW9ucy1kaWFsb2dfX3RpdGxlJztcclxuICAgIHRoaXMuZGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICB0aGlzLmRpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVVzYWdlTGlzdCgpKTtcclxuXHJcbiAgICB0aGlzLmRpc21pc3NCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuZGlzbWlzc0J1dHRvbi50ZXh0Q29udGVudCA9ICdEaXNtaXNzJztcclxuICAgIHRoaXMuZGlzbWlzc0J1dHRvbi5jbGFzc05hbWUgPSAnaW5zdHJ1Y3Rpb25zLWRpYWxvZ19fZGlzbWlzcy1idXR0b24nO1xyXG5cclxuICAgIHRoaXMuZGlhbG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGlzbWlzc0J1dHRvbik7XHJcblxyXG4gICAgdGhpcy5kaXNtaXNzID0gdGhpcy5kaXNtaXNzLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuZGlhbG9nQ29udGFpbmVyKTtcclxuICAgIHRoaXMuZGlzbWlzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGlzbWlzcyk7XHJcbiAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRpc21pc3MpO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbnMtZGlhbG9nX19vdmVybGF5LS1hY3RpdmUnKTtcclxuICAgICAgdGhpcy5kaWFsb2dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5zdHJ1Y3Rpb25zLWRpYWxvZy0tYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5vdmVybGF5KTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5kaWFsb2dDb250YWluZXIpO1xyXG4gICAgdGhpcy5kaXNtaXNzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kaXNtaXNzKTtcclxuICAgIHRoaXMub3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGlzbWlzcyk7XHJcblxyXG4gICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2luc3RydWN0aW9ucy1kaWFsb2dfX292ZXJsYXktLWFjdGl2ZScpO1xyXG4gICAgdGhpcy5kaWFsb2dDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5zdHJ1Y3Rpb25zLWRpYWxvZy0tYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc21pc3MoKSB7XHJcbiAgICB0aGlzLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVVc2FnZUxpc3QoKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgICBjb25zdCB1c2FnZSA9IFtcclxuICAgICAgJ0NsaWNrIG9uIHRoZSBmcmVlIHNwYWNlIGluIHRoZSBjYW52YXMgdG8gc3RhcnQgY3JlYXRpbmcgdmVydGljZXMnLFxyXG4gICAgICAnQ2xpY2sgb24gdGhlIGluaXRpYWwgdmVydGV4IHRvIGNsb3NlIHRoZSBwYXRoIGludG8gYSBwb2x5Z29uJyxcclxuICAgICAgJ0FsdGVybmF0aXZlbHksIHlvdSBtYXkgcHJlc3MgRXNjYXBlIHRvIGNhbmNlbCBhZGRpbmcgYSBuZXcgcGF0aCcsXHJcbiAgICAgICdDbGljayBhbmQgZHJhZyB0aGUgdmVydGV4IHRvIG1vdmUgaXQnLFxyXG4gICAgICAnRG91YmxlIGNsaWNrIG9uIGFuIGVkZ2UgdG8gYWRkIGEgdmVydGV4IGluIHRoZSBtaWRkbGUgb2YgaXQnLFxyXG4gICAgICAnRG91YmxlIGNsaWNrIG9uIGEgdmVydGV4IHRvIHJlbW92ZSBpdCcsXHJcbiAgICAgICdQcmVzc2luZyBDdHJsIGFsbG93cyBkcmFnZ2luZyBhIHdob2xlIHBvbHlnb24nLFxyXG4gICAgICAnU2F2ZSBhbGxvd3MgeW91IHRvIGV4cG9ydCBhbGwgdGhlIHBvbHlnb25zIG9uIHRoZSBzY3JlZW4nLFxyXG4gICAgICAnTG9hZCBhbGxvd3MgeW91IHRvIHJlc3RvcmUgdGhlIHBvbHlnb25zJ1xyXG4gICAgXTtcclxuXHJcbiAgICB1c2FnZS5tYXAodXNhZ2VJdGVtVGV4dCA9PiB0aGlzLmNyZWF0ZVVzYWdlTGlzdEl0ZW0odXNhZ2VJdGVtVGV4dCkpXHJcbiAgICAgIC5mb3JFYWNoKHVzYWdlTGlzdEl0ZW0gPT4gbGlzdC5hcHBlbmRDaGlsZCh1c2FnZUxpc3RJdGVtKSk7XHJcblxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVVzYWdlTGlzdEl0ZW0odGV4dENvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBpdGVtLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaW5zdHJ1Y3Rpb25zLWRpYWxvZycsIEluc3RydWN0aW9uc0RpYWxvZyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy50cyIsImltcG9ydCAnaW5kZXguc2Nzcyc7XHJcbmltcG9ydCAnbm9ybWFsaXplLmNzcyc7XHJcblxyXG5pbXBvcnQgJ0B3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy93ZWJjb21wb25lbnRzLWhpLXNkLWNlJztcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQXBwbGljYXRpb24nO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBib290c3RyYXAsIGZhbHNlKTtcclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcCgpOiB2b2lkIHtcclxuICBjb25zdCBjYW52YXNJZCA9ICdtYWluLWNhbnZhcyc7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpO1xyXG4gIGlmICghY2FudmFzKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbnZhcyB3aXRoIGlkICR7Y2FudmFzSWR9IGNhbm5vdCBiZSBmb3VuZGApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXBwbGljYXRpb24gPSBuZXcgQXBwbGljYXRpb24oPEhUTUxDYW52YXNFbGVtZW50PmNhbnZhcyk7XHJcbiAgYXBwbGljYXRpb24uaW5pdCgpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2luZGV4LnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgfVxcblxcbi5tYWluLWNhbnZhcyB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjazsgfVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMWVtOyB9XFxuXFxuLmNhbnZhcy13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmFwcGxpY2F0aW9uLXVpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAuYXBwbGljYXRpb24tdWkgKiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7IH1cXG5cXG4uYXBwLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLmFwcC1uYW1lIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5mb290ZXIge1xcbiAgbWFyZ2luOiAxZW0gMWVtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uKCl7LypcblxuIENvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG5cbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcblxuIENvcHlyaWdodCAoYykgMjAxNCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgSj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT10aGlzP3RoaXM6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDp0aGlzLEFhPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihnLHEsTil7ZyE9QXJyYXkucHJvdG90eXBlJiZnIT1PYmplY3QucHJvdG90eXBlJiYoZ1txXT1OLnZhbHVlKX07ZnVuY3Rpb24gc2IoKXtzYj1mdW5jdGlvbigpe307Si5TeW1ib2x8fChKLlN5bWJvbD10Yil9dmFyIHRiPWZ1bmN0aW9uKCl7dmFyIGc9MDtyZXR1cm4gZnVuY3Rpb24ocSl7cmV0dXJuXCJqc2NvbXBfc3ltYm9sX1wiKyhxfHxcIlwiKStnKyt9fSgpO1xuZnVuY3Rpb24gZGQoKXtzYigpO3ZhciBnPUouU3ltYm9sLml0ZXJhdG9yO2d8fChnPUouU3ltYm9sLml0ZXJhdG9yPUouU3ltYm9sKFwiaXRlcmF0b3JcIikpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIEFycmF5LnByb3RvdHlwZVtnXSYmQWEoQXJyYXkucHJvdG90eXBlLGcse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBlZCh0aGlzKX19KTtkZD1mdW5jdGlvbigpe319ZnVuY3Rpb24gZWQoZyl7dmFyIHE9MDtyZXR1cm4gZmQoZnVuY3Rpb24oKXtyZXR1cm4gcTxnLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTpnW3ErK119Ontkb25lOiEwfX0pfWZ1bmN0aW9uIGZkKGcpe2RkKCk7Zz17bmV4dDpnfTtnW0ouU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtyZXR1cm4gZ31mdW5jdGlvbiBnZChnKXtkZCgpO3ZhciBxPWdbU3ltYm9sLml0ZXJhdG9yXTtyZXR1cm4gcT9xLmNhbGwoZyk6ZWQoZyl9XG5mdW5jdGlvbiBoZChnKXtmb3IodmFyIHEsTj1bXTshKHE9Zy5uZXh0KCkpLmRvbmU7KU4ucHVzaChxLnZhbHVlKTtyZXR1cm4gTn1cbihmdW5jdGlvbigpe2Z1bmN0aW9uIGcoKXt2YXIgYT10aGlzO3RoaXMubT17fTt0aGlzLmc9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O3ZhciBiPW5ldyBCYTtiLnJ1bGVzPVtdO3RoaXMuaD12LnNldCh0aGlzLmcsbmV3IHYoYikpO3RoaXMuaT0hMTt0aGlzLmI9dGhpcy5hPW51bGw7dWIoZnVuY3Rpb24oKXthLmMoKX0pfWZ1bmN0aW9uIHEoKXt0aGlzLmN1c3RvbVN0eWxlcz1bXTt0aGlzLmVucXVldWVkPSExfWZ1bmN0aW9uIE4oKXt9ZnVuY3Rpb24gaGEoYSl7dGhpcy5jYWNoZT17fTt0aGlzLmM9dm9pZCAwPT09YT8xMDA6YX1mdW5jdGlvbiBuKCl7fWZ1bmN0aW9uIHYoYSxiLGMsZCxlKXt0aGlzLkQ9YXx8bnVsbDt0aGlzLmI9Ynx8bnVsbDt0aGlzLmxhPWN8fFtdO3RoaXMuTj1udWxsO3RoaXMuVj1lfHxcIlwiO3RoaXMuYT10aGlzLkE9dGhpcy5KPW51bGx9ZnVuY3Rpb24gdSgpe31mdW5jdGlvbiBCYSgpe3RoaXMuZW5kPXRoaXMuc3RhcnQ9MDt0aGlzLnJ1bGVzPXRoaXMucGFyZW50PVxudGhpcy5wcmV2aW91cz1udWxsO3RoaXMuY3NzVGV4dD10aGlzLnBhcnNlZENzc1RleHQ9XCJcIjt0aGlzLmF0UnVsZT0hMTt0aGlzLnR5cGU9MDt0aGlzLnBhcnNlZFNlbGVjdG9yPXRoaXMuc2VsZWN0b3I9dGhpcy5rZXlmcmFtZXNOYW1lPVwiXCJ9ZnVuY3Rpb24gaWQoYSl7ZnVuY3Rpb24gYihiLGMpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShiLFwiaW5uZXJIVE1MXCIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlLGNvbmZpZ3VyYWJsZTohMCxnZXQ6Yy5nZXQsc2V0OmZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMsZT12b2lkIDA7dCh0aGlzKSYmKGU9W10sTyh0aGlzLGZ1bmN0aW9uKGEpe2EhPT1kJiZlLnB1c2goYSl9KSk7Yy5zZXQuY2FsbCh0aGlzLGIpO2lmKGUpZm9yKHZhciBmPTA7ZjxlLmxlbmd0aDtmKyspe3ZhciBrPWVbZl07MT09PWsuX19DRV9zdGF0ZSYmYS5kaXNjb25uZWN0ZWRDYWxsYmFjayhrKX10aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT9hLmYodGhpcyk6YS5sKHRoaXMpO1xucmV0dXJuIGJ9fSl9ZnVuY3Rpb24gYyhiLGMpe3goYixcImluc2VydEFkamFjZW50RWxlbWVudFwiLGZ1bmN0aW9uKGIsZCl7dmFyIGU9dChkKTtiPWMuY2FsbCh0aGlzLGIsZCk7ZSYmYS5hKGQpO3QoYikmJmEuYihkKTtyZXR1cm4gYn0pfXZiJiZ4KEVsZW1lbnQucHJvdG90eXBlLFwiYXR0YWNoU2hhZG93XCIsZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX19DRV9zaGFkb3dSb290PWE9dmIuY2FsbCh0aGlzLGEpfSk7aWYoQ2EmJkNhLmdldCliKEVsZW1lbnQucHJvdG90eXBlLENhKTtlbHNlIGlmKERhJiZEYS5nZXQpYihIVE1MRWxlbWVudC5wcm90b3R5cGUsRGEpO2Vsc2V7dmFyIGQ9RWEuY2FsbChkb2N1bWVudCxcImRpdlwiKTthLnMoZnVuY3Rpb24oYSl7YihhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gd2IuY2FsbCh0aGlzLCEwKS5pbm5lckhUTUx9LHNldDpmdW5jdGlvbihhKXt2YXIgYj1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT9cbnRoaXMuY29udGVudDp0aGlzO2ZvcihkLmlubmVySFRNTD1hOzA8Yi5jaGlsZE5vZGVzLmxlbmd0aDspRmEuY2FsbChiLGIuY2hpbGROb2Rlc1swXSk7Zm9yKDswPGQuY2hpbGROb2Rlcy5sZW5ndGg7KWlhLmNhbGwoYixkLmNoaWxkTm9kZXNbMF0pfX0pfSl9eChFbGVtZW50LnByb3RvdHlwZSxcInNldEF0dHJpYnV0ZVwiLGZ1bmN0aW9uKGIsYyl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4geGIuY2FsbCh0aGlzLGIsYyk7dmFyIGQ9R2EuY2FsbCh0aGlzLGIpO3hiLmNhbGwodGhpcyxiLGMpO2M9R2EuY2FsbCh0aGlzLGIpO2EuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYixkLGMsbnVsbCl9KTt4KEVsZW1lbnQucHJvdG90eXBlLFwic2V0QXR0cmlidXRlTlNcIixmdW5jdGlvbihiLGMsZCl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4geWIuY2FsbCh0aGlzLGIsYyxkKTt2YXIgZT1qYS5jYWxsKHRoaXMsYixjKTt5Yi5jYWxsKHRoaXMsYixjLGQpO2Q9amEuY2FsbCh0aGlzLFxuYixjKTthLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGMsZSxkLGIpfSk7eChFbGVtZW50LnByb3RvdHlwZSxcInJlbW92ZUF0dHJpYnV0ZVwiLGZ1bmN0aW9uKGIpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIHpiLmNhbGwodGhpcyxiKTt2YXIgYz1HYS5jYWxsKHRoaXMsYik7emIuY2FsbCh0aGlzLGIpO251bGwhPT1jJiZhLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGIsYyxudWxsLG51bGwpfSk7eChFbGVtZW50LnByb3RvdHlwZSxcInJlbW92ZUF0dHJpYnV0ZU5TXCIsZnVuY3Rpb24oYixjKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBBYi5jYWxsKHRoaXMsYixjKTt2YXIgZD1qYS5jYWxsKHRoaXMsYixjKTtBYi5jYWxsKHRoaXMsYixjKTt2YXIgZT1qYS5jYWxsKHRoaXMsYixjKTtkIT09ZSYmYS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxjLGQsZSxiKX0pO0JiP2MoSFRNTEVsZW1lbnQucHJvdG90eXBlLEJiKTpDYj9jKEVsZW1lbnQucHJvdG90eXBlLFxuQ2IpOmNvbnNvbGUud2FybihcIkN1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjaW5zZXJ0QWRqYWNlbnRFbGVtZW50YCB3YXMgbm90IHBhdGNoZWQuXCIpO0hhKGEsRWxlbWVudC5wcm90b3R5cGUse1o6amQsYXBwZW5kOmtkfSk7bGQoYSx7amE6bWQsV2E6bmQscmVwbGFjZVdpdGg6b2QscmVtb3ZlOnBkfSl9ZnVuY3Rpb24gbGQoYSxiKXt2YXIgYz1FbGVtZW50LnByb3RvdHlwZTtmdW5jdGlvbiBkKGIpe3JldHVybiBmdW5jdGlvbihjKXtmb3IodmFyIGQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDsrK2UpZFtlLTBdPWFyZ3VtZW50c1tlXTtlPVtdO2Zvcih2YXIgZj1bXSxnPTA7ZzxkLmxlbmd0aDtnKyspe3ZhciBtPWRbZ107bSBpbnN0YW5jZW9mIEVsZW1lbnQmJnQobSkmJmYucHVzaChtKTtpZihtIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3IobT1tLmZpcnN0Q2hpbGQ7bTttPW0ubmV4dFNpYmxpbmcpZS5wdXNoKG0pO2Vsc2UgZS5wdXNoKG0pfWIuYXBwbHkodGhpcyxcbmQpO2ZvcihkPTA7ZDxmLmxlbmd0aDtkKyspYS5hKGZbZF0pO2lmKHQodGhpcykpZm9yKGQ9MDtkPGUubGVuZ3RoO2QrKylmPWVbZF0sZiBpbnN0YW5jZW9mIEVsZW1lbnQmJmEuYihmKX19dm9pZCAwIT09Yi5qYSYmKGMuYmVmb3JlPWQoYi5qYSkpO3ZvaWQgMCE9PWIuamEmJihjLmFmdGVyPWQoYi5XYSkpO3ZvaWQgMCE9PWIucmVwbGFjZVdpdGgmJngoYyxcInJlcGxhY2VXaXRoXCIsZnVuY3Rpb24oYyl7Zm9yKHZhciBkPVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7KytlKWRbZS0wXT1hcmd1bWVudHNbZV07ZT1bXTtmb3IodmFyIGg9W10sdz0wO3c8ZC5sZW5ndGg7dysrKXt2YXIgZz1kW3ddO2cgaW5zdGFuY2VvZiBFbGVtZW50JiZ0KGcpJiZoLnB1c2goZyk7aWYoZyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKGc9Zy5maXJzdENoaWxkO2c7Zz1nLm5leHRTaWJsaW5nKWUucHVzaChnKTtlbHNlIGUucHVzaChnKX13PXQodGhpcyk7Yi5yZXBsYWNlV2l0aC5hcHBseSh0aGlzLFxuZCk7Zm9yKGQ9MDtkPGgubGVuZ3RoO2QrKylhLmEoaFtkXSk7aWYodylmb3IoYS5hKHRoaXMpLGQ9MDtkPGUubGVuZ3RoO2QrKyloPWVbZF0saCBpbnN0YW5jZW9mIEVsZW1lbnQmJmEuYihoKX0pO3ZvaWQgMCE9PWIucmVtb3ZlJiZ4KGMsXCJyZW1vdmVcIixmdW5jdGlvbigpe3ZhciBjPXQodGhpcyk7Yi5yZW1vdmUuY2FsbCh0aGlzKTtjJiZhLmEodGhpcyl9KX1mdW5jdGlvbiBxZChhKXtmdW5jdGlvbiBiKGIsZCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGIsXCJ0ZXh0Q29udGVudFwiLHtlbnVtZXJhYmxlOmQuZW51bWVyYWJsZSxjb25maWd1cmFibGU6ITAsZ2V0OmQuZ2V0LHNldDpmdW5jdGlvbihiKXtpZih0aGlzLm5vZGVUeXBlPT09Tm9kZS5URVhUX05PREUpZC5zZXQuY2FsbCh0aGlzLGIpO2Vsc2V7dmFyIGM9dm9pZCAwO2lmKHRoaXMuZmlyc3RDaGlsZCl7dmFyIGU9dGhpcy5jaGlsZE5vZGVzLGg9ZS5sZW5ndGg7aWYoMDxoJiZ0KHRoaXMpKXtjPUFycmF5KGgpO2Zvcih2YXIgdz1cbjA7dzxoO3crKyljW3ddPWVbd119fWQuc2V0LmNhbGwodGhpcyxiKTtpZihjKWZvcihiPTA7YjxjLmxlbmd0aDtiKyspYS5hKGNbYl0pfX19KX14KE5vZGUucHJvdG90eXBlLFwiaW5zZXJ0QmVmb3JlXCIsZnVuY3Rpb24oYixkKXtpZihiIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGIuY2hpbGROb2Rlcyk7Yj1EYi5jYWxsKHRoaXMsYixkKTtpZih0KHRoaXMpKWZvcihkPTA7ZDxjLmxlbmd0aDtkKyspYS5iKGNbZF0pO3JldHVybiBifWM9dChiKTtkPURiLmNhbGwodGhpcyxiLGQpO2MmJmEuYShiKTt0KHRoaXMpJiZhLmIoYik7cmV0dXJuIGR9KTt4KE5vZGUucHJvdG90eXBlLFwiYXBwZW5kQ2hpbGRcIixmdW5jdGlvbihiKXtpZihiIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGIuY2hpbGROb2Rlcyk7Yj1pYS5jYWxsKHRoaXMsYik7aWYodCh0aGlzKSlmb3IodmFyIGU9XG4wO2U8Yy5sZW5ndGg7ZSsrKWEuYihjW2VdKTtyZXR1cm4gYn1jPXQoYik7ZT1pYS5jYWxsKHRoaXMsYik7YyYmYS5hKGIpO3QodGhpcykmJmEuYihiKTtyZXR1cm4gZX0pO3goTm9kZS5wcm90b3R5cGUsXCJjbG9uZU5vZGVcIixmdW5jdGlvbihiKXtiPXdiLmNhbGwodGhpcyxiKTt0aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT9hLmYoYik6YS5sKGIpO3JldHVybiBifSk7eChOb2RlLnByb3RvdHlwZSxcInJlbW92ZUNoaWxkXCIsZnVuY3Rpb24oYil7dmFyIGM9dChiKSxlPUZhLmNhbGwodGhpcyxiKTtjJiZhLmEoYik7cmV0dXJuIGV9KTt4KE5vZGUucHJvdG90eXBlLFwicmVwbGFjZUNoaWxkXCIsZnVuY3Rpb24oYixkKXtpZihiIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGIuY2hpbGROb2Rlcyk7Yj1FYi5jYWxsKHRoaXMsYixkKTtpZih0KHRoaXMpKWZvcihhLmEoZCksZD0wO2Q8Yy5sZW5ndGg7ZCsrKWEuYihjW2RdKTtcbnJldHVybiBifWM9dChiKTt2YXIgZj1FYi5jYWxsKHRoaXMsYixkKSxrPXQodGhpcyk7ayYmYS5hKGQpO2MmJmEuYShiKTtrJiZhLmIoYik7cmV0dXJuIGZ9KTtJYSYmSWEuZ2V0P2IoTm9kZS5wcm90b3R5cGUsSWEpOmEucyhmdW5jdGlvbihhKXtiKGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe2Zvcih2YXIgYT1bXSxiPTA7Yjx0aGlzLmNoaWxkTm9kZXMubGVuZ3RoO2IrKylhLnB1c2godGhpcy5jaGlsZE5vZGVzW2JdLnRleHRDb250ZW50KTtyZXR1cm4gYS5qb2luKFwiXCIpfSxzZXQ6ZnVuY3Rpb24oYSl7Zm9yKDt0aGlzLmZpcnN0Q2hpbGQ7KUZhLmNhbGwodGhpcyx0aGlzLmZpcnN0Q2hpbGQpO2lhLmNhbGwodGhpcyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSl9fSl9KX1mdW5jdGlvbiByZChhKXt4KERvY3VtZW50LnByb3RvdHlwZSxcImNyZWF0ZUVsZW1lbnRcIixmdW5jdGlvbihiKXtpZih0aGlzLl9fQ0VfaGFzUmVnaXN0cnkpe3ZhciBjPVxuYS5jKGIpO2lmKGMpcmV0dXJuIG5ldyBjLmNvbnN0cnVjdG9yfWI9RWEuY2FsbCh0aGlzLGIpO2EuZyhiKTtyZXR1cm4gYn0pO3goRG9jdW1lbnQucHJvdG90eXBlLFwiaW1wb3J0Tm9kZVwiLGZ1bmN0aW9uKGIsYyl7Yj1zZC5jYWxsKHRoaXMsYixjKTt0aGlzLl9fQ0VfaGFzUmVnaXN0cnk/YS5mKGIpOmEubChiKTtyZXR1cm4gYn0pO3goRG9jdW1lbnQucHJvdG90eXBlLFwiY3JlYXRlRWxlbWVudE5TXCIsZnVuY3Rpb24oYixjKXtpZih0aGlzLl9fQ0VfaGFzUmVnaXN0cnkmJihudWxsPT09Ynx8XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1iKSl7dmFyIGQ9YS5jKGMpO2lmKGQpcmV0dXJuIG5ldyBkLmNvbnN0cnVjdG9yfWI9dGQuY2FsbCh0aGlzLGIsYyk7YS5nKGIpO3JldHVybiBifSk7SGEoYSxEb2N1bWVudC5wcm90b3R5cGUse1o6dWQsYXBwZW5kOnZkfSl9ZnVuY3Rpb24gSGEoYSxiLGMpe2Z1bmN0aW9uIGQoYil7cmV0dXJuIGZ1bmN0aW9uKGMpe2Zvcih2YXIgZD1bXSxcbmU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7KytlKWRbZS0wXT1hcmd1bWVudHNbZV07ZT1bXTtmb3IodmFyIGY9W10sZz0wO2c8ZC5sZW5ndGg7ZysrKXt2YXIgbT1kW2ddO20gaW5zdGFuY2VvZiBFbGVtZW50JiZ0KG0pJiZmLnB1c2gobSk7aWYobSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKG09bS5maXJzdENoaWxkO207bT1tLm5leHRTaWJsaW5nKWUucHVzaChtKTtlbHNlIGUucHVzaChtKX1iLmFwcGx5KHRoaXMsZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrKylhLmEoZltkXSk7aWYodCh0aGlzKSlmb3IoZD0wO2Q8ZS5sZW5ndGg7ZCsrKWY9ZVtkXSxmIGluc3RhbmNlb2YgRWxlbWVudCYmYS5iKGYpfX12b2lkIDAhPT1jLlomJihiLnByZXBlbmQ9ZChjLlopKTt2b2lkIDAhPT1jLmFwcGVuZCYmKGIuYXBwZW5kPWQoYy5hcHBlbmQpKX1mdW5jdGlvbiB3ZChhKXt3aW5kb3cuSFRNTEVsZW1lbnQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKCl7dmFyIGI9dGhpcy5jb25zdHJ1Y3RvcixcbmQ9YS53KGIpO2lmKCFkKXRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGJlaW5nIGNvbnN0cnVjdGVkIHdhcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBjdXN0b21FbGVtZW50c2AuXCIpO3ZhciBlPWQuY29uc3RydWN0aW9uU3RhY2s7aWYoMD09PWUubGVuZ3RoKXJldHVybiBlPUVhLmNhbGwoZG9jdW1lbnQsZC5sb2NhbE5hbWUpLE9iamVjdC5zZXRQcm90b3R5cGVPZihlLGIucHJvdG90eXBlKSxlLl9fQ0Vfc3RhdGU9MSxlLl9fQ0VfZGVmaW5pdGlvbj1kLGEuZyhlKSxlO2Q9ZS5sZW5ndGgtMTt2YXIgZj1lW2RdO2lmKGY9PT1GYil0aHJvdyBFcnJvcihcIlRoZSBIVE1MRWxlbWVudCBjb25zdHJ1Y3RvciB3YXMgZWl0aGVyIGNhbGxlZCByZWVudHJhbnRseSBmb3IgdGhpcyBjb25zdHJ1Y3RvciBvciBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXCIpO2VbZF09RmI7T2JqZWN0LnNldFByb3RvdHlwZU9mKGYsYi5wcm90b3R5cGUpO2EuZyhmKTtyZXR1cm4gZn1iLnByb3RvdHlwZT14ZC5wcm90b3R5cGU7XG5yZXR1cm4gYn0oKX1mdW5jdGlvbiB5KGEpe3RoaXMuYz0hMTt0aGlzLmE9YTt0aGlzLmg9bmV3IE1hcDt0aGlzLmY9ZnVuY3Rpb24oYSl7cmV0dXJuIGEoKX07dGhpcy5iPSExO3RoaXMuZz1bXTt0aGlzLmk9bmV3IEphKGEsZG9jdW1lbnQpfWZ1bmN0aW9uIEdiKCl7dmFyIGE9dGhpczt0aGlzLmI9dGhpcy5hPXZvaWQgMDt0aGlzLmY9bmV3IFByb21pc2UoZnVuY3Rpb24oYil7YS5iPWI7YS5hJiZiKGEuYSl9KX1mdW5jdGlvbiBKYShhLGIpe3RoaXMuYj1hO3RoaXMuYT1iO3RoaXMuTT12b2lkIDA7dGhpcy5iLmYodGhpcy5hKTtcImxvYWRpbmdcIj09PXRoaXMuYS5yZWFkeVN0YXRlJiYodGhpcy5NPW5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuZi5iaW5kKHRoaXMpKSx0aGlzLk0ub2JzZXJ2ZSh0aGlzLmEse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSkpfWZ1bmN0aW9uIEIoKXt0aGlzLm89bmV3IE1hcDt0aGlzLm09bmV3IE1hcDt0aGlzLmo9W107dGhpcy5oPSExfWZ1bmN0aW9uIGwoYSxcbmIsYyl7aWYoYSE9PUhiKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGNvbnN0cnVjdG9yXCIpO2E9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2EuX19wcm90b19fPWwucHJvdG90eXBlO2EuRihiLGMpO3JldHVybiBhfWZ1bmN0aW9uIGthKGEpe2lmKCFhLl9fc2hhZHl8fHZvaWQgMD09PWEuX19zaGFkeS5maXJzdENoaWxkKXthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTthLl9fc2hhZHkuZmlyc3RDaGlsZD1LYShhKTthLl9fc2hhZHkubGFzdENoaWxkPUxhKGEpO0liKGEpO2Zvcih2YXIgYj1hLl9fc2hhZHkuY2hpbGROb2Rlcz1TKGEpLGM9MCxkO2M8Yi5sZW5ndGgmJihkPWJbY10pO2MrKylkLl9fc2hhZHk9ZC5fX3NoYWR5fHx7fSxkLl9fc2hhZHkucGFyZW50Tm9kZT1hLGQuX19zaGFkeS5uZXh0U2libGluZz1iW2MrMV18fG51bGwsZC5fX3NoYWR5LnByZXZpb3VzU2libGluZz1iW2MtMV18fG51bGwsSmIoZCl9fWZ1bmN0aW9uIHlkKGEpe3ZhciBiPWEmJmEuTTtcbmImJihiLlguZGVsZXRlKGEuUmEpLGIuWC5zaXplfHwoYS5TYS5fX3NoYWR5LlQ9bnVsbCkpfWZ1bmN0aW9uIHpkKGEsYil7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307YS5fX3NoYWR5LlR8fChhLl9fc2hhZHkuVD1uZXcgbGEpO2EuX19zaGFkeS5ULlguYWRkKGIpO3ZhciBjPWEuX19zaGFkeS5UO3JldHVybntSYTpiLE06YyxTYTphLHRha2VSZWNvcmRzOmZ1bmN0aW9uKCl7cmV0dXJuIGMudGFrZVJlY29yZHMoKX19fWZ1bmN0aW9uIGxhKCl7dGhpcy5hPSExO3RoaXMuYWRkZWROb2Rlcz1bXTt0aGlzLnJlbW92ZWROb2Rlcz1bXTt0aGlzLlg9bmV3IFNldH1mdW5jdGlvbiBUKGEpe3JldHVybiBhLl9fc2hhZHkmJnZvaWQgMCE9PWEuX19zaGFkeS5maXJzdENoaWxkfWZ1bmN0aW9uIEcoYSl7cmV0dXJuXCJTaGFkeVJvb3RcIj09PWEuTWF9ZnVuY3Rpb24gWihhKXthPWEuZ2V0Um9vdE5vZGUoKTtpZihHKGEpKXJldHVybiBhfWZ1bmN0aW9uIE1hKGEsYil7aWYoYSYmYilmb3IodmFyIGM9XG5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKSxkPTAsZTtkPGMubGVuZ3RoJiYoZT1jW2RdKTtkKyspe3ZhciBmPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYixlKTtmJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxlLGYpfX1mdW5jdGlvbiBOYShhLGIpe2Zvcih2YXIgYz1bXSxkPTE7ZDxhcmd1bWVudHMubGVuZ3RoOysrZCljW2QtMV09YXJndW1lbnRzW2RdO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKyspTWEoYSxjW2RdKTtyZXR1cm4gYX1mdW5jdGlvbiBBZChhLGIpe2Zvcih2YXIgYyBpbiBiKWFbY109YltjXX1mdW5jdGlvbiBLYihhKXtPYS5wdXNoKGEpO1BhLnRleHRDb250ZW50PUxiKyt9ZnVuY3Rpb24gTWIoYSxiKXtmb3IoO2I7KXtpZihiPT1hKXJldHVybiEwO2I9Yi5wYXJlbnROb2RlfXJldHVybiExfWZ1bmN0aW9uIE5iKGEpe1FhfHwoUWE9ITAsS2IobWEpKTthYS5wdXNoKGEpfWZ1bmN0aW9uIG1hKCl7UWE9ITE7Zm9yKHZhciBhPSEhYWEubGVuZ3RoO2FhLmxlbmd0aDspYWEuc2hpZnQoKSgpO1xucmV0dXJuIGF9ZnVuY3Rpb24gQmQoYSxiKXt2YXIgYz1iLmdldFJvb3ROb2RlKCk7cmV0dXJuIGEubWFwKGZ1bmN0aW9uKGEpe3ZhciBiPWM9PT1hLnRhcmdldC5nZXRSb290Tm9kZSgpO2lmKGImJmEuYWRkZWROb2Rlcyl7aWYoYj1BcnJheS5mcm9tKGEuYWRkZWROb2RlcykuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBjPT09YS5nZXRSb290Tm9kZSgpfSksYi5sZW5ndGgpcmV0dXJuIGE9T2JqZWN0LmNyZWF0ZShhKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImFkZGVkTm9kZXNcIix7dmFsdWU6Yixjb25maWd1cmFibGU6ITB9KSxhfWVsc2UgaWYoYilyZXR1cm4gYX0pLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYX0pfWZ1bmN0aW9uIE9iKGEpe3N3aXRjaChhKXtjYXNlIFwiJlwiOnJldHVyblwiJmFtcDtcIjtjYXNlIFwiPFwiOnJldHVyblwiJmx0O1wiO2Nhc2UgXCI+XCI6cmV0dXJuXCImZ3Q7XCI7Y2FzZSAnXCInOnJldHVyblwiJnF1b3Q7XCI7Y2FzZSBcIlxcdTAwYTBcIjpyZXR1cm5cIiZuYnNwO1wifX1cbmZ1bmN0aW9uIFBiKGEpe2Zvcih2YXIgYj17fSxjPTA7YzxhLmxlbmd0aDtjKyspYlthW2NdXT0hMDtyZXR1cm4gYn1mdW5jdGlvbiBSYShhLGIpe1widGVtcGxhdGVcIj09PWEubG9jYWxOYW1lJiYoYT1hLmNvbnRlbnQpO2Zvcih2YXIgYz1cIlwiLGQ9Yj9iKGEpOmEuY2hpbGROb2RlcyxlPTAsZj1kLmxlbmd0aCxrO2U8ZiYmKGs9ZFtlXSk7ZSsrKXthOnt2YXIgaD1rO3ZhciB3PWE7dmFyIGc9Yjtzd2l0Y2goaC5ub2RlVHlwZSl7Y2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpmb3IodmFyIG09aC5sb2NhbE5hbWUsbD1cIjxcIittLHE9aC5hdHRyaWJ1dGVzLG49MDt3PXFbbl07bisrKWwrPVwiIFwiK3cubmFtZSsnPVwiJyt3LnZhbHVlLnJlcGxhY2UoQ2QsT2IpKydcIic7bCs9XCI+XCI7aD1EZFttXT9sOmwrUmEoaCxnKStcIjwvXCIrbStcIj5cIjticmVhayBhO2Nhc2UgTm9kZS5URVhUX05PREU6aD1oLmRhdGE7aD13JiZFZFt3LmxvY2FsTmFtZV0/aDpoLnJlcGxhY2UoRmQsT2IpO2JyZWFrIGE7Y2FzZSBOb2RlLkNPTU1FTlRfTk9ERTpoPVxuXCJcXHgzYyEtLVwiK2guZGF0YStcIi0tXFx4M2VcIjticmVhayBhO2RlZmF1bHQ6dGhyb3cgd2luZG93LmNvbnNvbGUuZXJyb3IoaCksRXJyb3IoXCJub3QgaW1wbGVtZW50ZWRcIik7fX1jKz1ofXJldHVybiBjfWZ1bmN0aW9uIFUoYSl7Qy5jdXJyZW50Tm9kZT1hO3JldHVybiBDLnBhcmVudE5vZGUoKX1mdW5jdGlvbiBLYShhKXtDLmN1cnJlbnROb2RlPWE7cmV0dXJuIEMuZmlyc3RDaGlsZCgpfWZ1bmN0aW9uIExhKGEpe0MuY3VycmVudE5vZGU9YTtyZXR1cm4gQy5sYXN0Q2hpbGQoKX1mdW5jdGlvbiBRYihhKXtDLmN1cnJlbnROb2RlPWE7cmV0dXJuIEMucHJldmlvdXNTaWJsaW5nKCl9ZnVuY3Rpb24gUmIoYSl7Qy5jdXJyZW50Tm9kZT1hO3JldHVybiBDLm5leHRTaWJsaW5nKCl9ZnVuY3Rpb24gUyhhKXt2YXIgYj1bXTtDLmN1cnJlbnROb2RlPWE7Zm9yKGE9Qy5maXJzdENoaWxkKCk7YTspYi5wdXNoKGEpLGE9Qy5uZXh0U2libGluZygpO3JldHVybiBifWZ1bmN0aW9uIFNiKGEpe0QuY3VycmVudE5vZGU9XG5hO3JldHVybiBELnBhcmVudE5vZGUoKX1mdW5jdGlvbiBUYihhKXtELmN1cnJlbnROb2RlPWE7cmV0dXJuIEQuZmlyc3RDaGlsZCgpfWZ1bmN0aW9uIFViKGEpe0QuY3VycmVudE5vZGU9YTtyZXR1cm4gRC5sYXN0Q2hpbGQoKX1mdW5jdGlvbiBWYihhKXtELmN1cnJlbnROb2RlPWE7cmV0dXJuIEQucHJldmlvdXNTaWJsaW5nKCl9ZnVuY3Rpb24gV2IoYSl7RC5jdXJyZW50Tm9kZT1hO3JldHVybiBELm5leHRTaWJsaW5nKCl9ZnVuY3Rpb24gWGIoYSl7dmFyIGI9W107RC5jdXJyZW50Tm9kZT1hO2ZvcihhPUQuZmlyc3RDaGlsZCgpO2E7KWIucHVzaChhKSxhPUQubmV4dFNpYmxpbmcoKTtyZXR1cm4gYn1mdW5jdGlvbiBZYihhKXtyZXR1cm4gUmEoYSxmdW5jdGlvbihhKXtyZXR1cm4gUyhhKX0pfWZ1bmN0aW9uIFpiKGEpe3N3aXRjaChhLm5vZGVUeXBlKXtjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOmNhc2UgTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFOmE9ZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihhLFxuTm9kZUZpbHRlci5TSE9XX1RFWFQsbnVsbCwhMSk7Zm9yKHZhciBiPVwiXCIsYztjPWEubmV4dE5vZGUoKTspYis9Yy5ub2RlVmFsdWU7cmV0dXJuIGI7ZGVmYXVsdDpyZXR1cm4gYS5ub2RlVmFsdWV9fWZ1bmN0aW9uIEsoYSxiLGMpe2Zvcih2YXIgZCBpbiBiKXt2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsZCk7ZSYmZS5jb25maWd1cmFibGV8fCFlJiZjP09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGQsYltkXSk6YyYmY29uc29sZS53YXJuKFwiQ291bGQgbm90IGRlZmluZVwiLGQsXCJvblwiLGEpfX1mdW5jdGlvbiBQKGEpe0soYSwkYik7SyhhLFNhKTtLKGEsVGEpfWZ1bmN0aW9uIGFjKGEsYixjKXtKYihhKTtjPWN8fG51bGw7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307Yi5fX3NoYWR5PWIuX19zaGFkeXx8e307YyYmKGMuX19zaGFkeT1jLl9fc2hhZHl8fHt9KTthLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWM/Yy5fX3NoYWR5LnByZXZpb3VzU2libGluZzpiLmxhc3RDaGlsZDtcbnZhciBkPWEuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc7ZCYmZC5fX3NoYWR5JiYoZC5fX3NoYWR5Lm5leHRTaWJsaW5nPWEpOyhkPWEuX19zaGFkeS5uZXh0U2libGluZz1jKSYmZC5fX3NoYWR5JiYoZC5fX3NoYWR5LnByZXZpb3VzU2libGluZz1hKTthLl9fc2hhZHkucGFyZW50Tm9kZT1iO2M/Yz09PWIuX19zaGFkeS5maXJzdENoaWxkJiYoYi5fX3NoYWR5LmZpcnN0Q2hpbGQ9YSk6KGIuX19zaGFkeS5sYXN0Q2hpbGQ9YSxiLl9fc2hhZHkuZmlyc3RDaGlsZHx8KGIuX19zaGFkeS5maXJzdENoaWxkPWEpKTtiLl9fc2hhZHkuY2hpbGROb2Rlcz1udWxsfWZ1bmN0aW9uIFVhKGEsYixjKXtpZihiPT09YSl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdhcHBlbmRDaGlsZCcgb24gJ05vZGUnOiBUaGUgbmV3IGNoaWxkIGVsZW1lbnQgY29udGFpbnMgdGhlIHBhcmVudC5cIik7aWYoYyl7dmFyIGQ9Yy5fX3NoYWR5JiZjLl9fc2hhZHkucGFyZW50Tm9kZTtpZih2b2lkIDAhPT1kJiZcbmQhPT1hfHx2b2lkIDA9PT1kJiZVKGMpIT09YSl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdpbnNlcnRCZWZvcmUnIG9uICdOb2RlJzogVGhlIG5vZGUgYmVmb3JlIHdoaWNoIHRoZSBuZXcgbm9kZSBpcyB0byBiZSBpbnNlcnRlZCBpcyBub3QgYSBjaGlsZCBvZiB0aGlzIG5vZGUuXCIpO31pZihjPT09YilyZXR1cm4gYjtiLnBhcmVudE5vZGUmJlZhKGIucGFyZW50Tm9kZSxiKTtkPVooYSk7dmFyIGU7aWYoZT1kKWE6e2lmKCFiLl9fbm9JbnNlcnRpb25Qb2ludCl7dmFyIGY7XCJzbG90XCI9PT1iLmxvY2FsTmFtZT9mPVtiXTpiLnF1ZXJ5U2VsZWN0b3JBbGwmJihmPWIucXVlcnlTZWxlY3RvckFsbChcInNsb3RcIikpO2lmKGYmJmYubGVuZ3RoKXtlPWY7YnJlYWsgYX19ZT12b2lkIDB9KGY9ZSkmJmQuUWEoZik7ZCYmKFwic2xvdFwiPT09YS5sb2NhbE5hbWV8fGYpJiZkLkwoKTtpZihUKGEpKXtkPWM7SWIoYSk7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307dm9pZCAwIT09YS5fX3NoYWR5LmZpcnN0Q2hpbGQmJlxuKGEuX19zaGFkeS5jaGlsZE5vZGVzPW51bGwpO2lmKGIubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe2Y9Yi5jaGlsZE5vZGVzO2ZvcihlPTA7ZTxmLmxlbmd0aDtlKyspYWMoZltlXSxhLGQpO2IuX19zaGFkeT1iLl9fc2hhZHl8fHt9O2Q9dm9pZCAwIT09Yi5fX3NoYWR5LmZpcnN0Q2hpbGQ/bnVsbDp2b2lkIDA7Yi5fX3NoYWR5LmZpcnN0Q2hpbGQ9Yi5fX3NoYWR5Lmxhc3RDaGlsZD1kO2IuX19zaGFkeS5jaGlsZE5vZGVzPWR9ZWxzZSBhYyhiLGEsZCk7aWYoV2EoYSkpe2EuX19zaGFkeS5yb290LkwoKTt2YXIgaz0hMH1lbHNlIGEuX19zaGFkeS5yb290JiYoaz0hMCl9a3x8KGs9RyhhKT9hLmhvc3Q6YSxjPyhjPWJjKGMpLFhhLmNhbGwoayxiLGMpKTpjYy5jYWxsKGssYikpO2RjKGEsYik7cmV0dXJuIGJ9ZnVuY3Rpb24gVmEoYSxiKXtpZihiLnBhcmVudE5vZGUhPT1hKXRocm93IEVycm9yKFwiVGhlIG5vZGUgdG8gYmUgcmVtb3ZlZCBpcyBub3QgYSBjaGlsZCBvZiB0aGlzIG5vZGU6IFwiK1xuYik7dmFyIGM9WihiKTtpZihUKGEpKXtiLl9fc2hhZHk9Yi5fX3NoYWR5fHx7fTthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTtiPT09YS5fX3NoYWR5LmZpcnN0Q2hpbGQmJihhLl9fc2hhZHkuZmlyc3RDaGlsZD1iLl9fc2hhZHkubmV4dFNpYmxpbmcpO2I9PT1hLl9fc2hhZHkubGFzdENoaWxkJiYoYS5fX3NoYWR5Lmxhc3RDaGlsZD1iLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nKTt2YXIgZD1iLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nO3ZhciBlPWIuX19zaGFkeS5uZXh0U2libGluZztkJiYoZC5fX3NoYWR5PWQuX19zaGFkeXx8e30sZC5fX3NoYWR5Lm5leHRTaWJsaW5nPWUpO2UmJihlLl9fc2hhZHk9ZS5fX3NoYWR5fHx7fSxlLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWQpO2IuX19zaGFkeS5wYXJlbnROb2RlPWIuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc9Yi5fX3NoYWR5Lm5leHRTaWJsaW5nPXZvaWQgMDt2b2lkIDAhPT1hLl9fc2hhZHkuY2hpbGROb2RlcyYmKGEuX19zaGFkeS5jaGlsZE5vZGVzPVxubnVsbCk7aWYoV2EoYSkpe2EuX19zaGFkeS5yb290LkwoKTt2YXIgZj0hMH19ZWMoYik7YyYmKChlPWEmJlwic2xvdFwiPT09YS5sb2NhbE5hbWUpJiYoZj0hMCksKChkPWMuVGEoYikpfHxlKSYmYy5MKCkpO2Z8fChmPUcoYSk/YS5ob3N0OmEsKCFhLl9fc2hhZHkucm9vdCYmXCJzbG90XCIhPT1iLmxvY2FsTmFtZXx8Zj09PVUoYikpJiZiYS5jYWxsKGYsYikpO2RjKGEsbnVsbCxiKTtyZXR1cm4gYn1mdW5jdGlvbiBlYyhhKXtpZihhLl9fc2hhZHkmJnZvaWQgMCE9PWEuX19zaGFkeS5tYSlmb3IodmFyIGI9YS5jaGlsZE5vZGVzLGM9MCxkPWIubGVuZ3RoLGU7YzxkJiYoZT1iW2NdKTtjKyspZWMoZSk7YS5fX3NoYWR5JiYoYS5fX3NoYWR5Lm1hPXZvaWQgMCl9ZnVuY3Rpb24gYmMoYSl7dmFyIGI9YTthJiZcInNsb3RcIj09PWEubG9jYWxOYW1lJiYoYj0oYj1hLl9fc2hhZHkmJmEuX19zaGFkeS5SKSYmYi5sZW5ndGg/YlswXTpiYyhhLm5leHRTaWJsaW5nKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gV2EoYSl7cmV0dXJuKGE9XG5hJiZhLl9fc2hhZHkmJmEuX19zaGFkeS5yb290KSYmYS50YSgpfWZ1bmN0aW9uIGZjKGEsYil7XCJzbG90XCI9PT1iPyhhPWEucGFyZW50Tm9kZSxXYShhKSYmYS5fX3NoYWR5LnJvb3QuTCgpKTpcInNsb3RcIj09PWEubG9jYWxOYW1lJiZcIm5hbWVcIj09PWImJihiPVooYSkpJiYoYi5WYShhKSxiLkwoKSl9ZnVuY3Rpb24gZGMoYSxiLGMpe2lmKGE9YS5fX3NoYWR5JiZhLl9fc2hhZHkuVCliJiZhLmFkZGVkTm9kZXMucHVzaChiKSxjJiZhLnJlbW92ZWROb2Rlcy5wdXNoKGMpLGEuaGIoKX1mdW5jdGlvbiBnYyhhKXtpZihhJiZhLm5vZGVUeXBlKXthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTt2YXIgYj1hLl9fc2hhZHkubWE7dm9pZCAwPT09YiYmKEcoYSk/Yj1hOmI9KGI9YS5wYXJlbnROb2RlKT9nYyhiKTphLGNhLmNhbGwoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGEpJiYoYS5fX3NoYWR5Lm1hPWIpKTtyZXR1cm4gYn19ZnVuY3Rpb24gbmEoYSxiLGMpe3ZhciBkPVtdO2hjKGEuY2hpbGROb2RlcyxcbmIsYyxkKTtyZXR1cm4gZH1mdW5jdGlvbiBoYyhhLGIsYyxkKXtmb3IodmFyIGU9MCxmPWEubGVuZ3RoLGs7ZTxmJiYoaz1hW2VdKTtlKyspe3ZhciBoO2lmKGg9ay5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXtoPWs7dmFyIHc9YixnPWMsbT1kLGw9dyhoKTtsJiZtLnB1c2goaCk7ZyYmZyhsKT9oPWw6KGhjKGguY2hpbGROb2Rlcyx3LGcsbSksaD12b2lkIDApfWlmKGgpYnJlYWt9fWZ1bmN0aW9uIGljKGEpe2E9YS5nZXRSb290Tm9kZSgpO0coYSkmJmEudmEoKX1mdW5jdGlvbiBqYyhhLGIsYyl7b2F8fChvYT13aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5TY29waW5nU2hpbSk7b2EmJlwiY2xhc3NcIj09PWI/b2Euc2V0RWxlbWVudENsYXNzKGEsYyk6KGtjLmNhbGwoYSxiLGMpLGZjKGEsYikpfWZ1bmN0aW9uIGxjKGEsYil7aWYoYS5vd25lckRvY3VtZW50IT09ZG9jdW1lbnQpcmV0dXJuIFlhLmNhbGwoZG9jdW1lbnQsYSxiKTt2YXIgYz1ZYS5jYWxsKGRvY3VtZW50LFxuYSwhMSk7aWYoYil7YT1hLmNoaWxkTm9kZXM7Yj0wO2Zvcih2YXIgZDtiPGEubGVuZ3RoO2IrKylkPWxjKGFbYl0sITApLGMuYXBwZW5kQ2hpbGQoZCl9cmV0dXJuIGN9ZnVuY3Rpb24gWmEoYSxiKXt2YXIgYz1bXSxkPWE7Zm9yKGE9YT09PXdpbmRvdz93aW5kb3c6YS5nZXRSb290Tm9kZSgpO2Q7KWMucHVzaChkKSxkPWQuYXNzaWduZWRTbG90P2QuYXNzaWduZWRTbG90OmQubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUmJmQuaG9zdCYmKGJ8fGQhPT1hKT9kLmhvc3Q6ZC5wYXJlbnROb2RlO2NbYy5sZW5ndGgtMV09PT1kb2N1bWVudCYmYy5wdXNoKHdpbmRvdyk7cmV0dXJuIGN9ZnVuY3Rpb24gbWMoYSxiKXtpZighRylyZXR1cm4gYTthPVphKGEsITApO2Zvcih2YXIgYz0wLGQsZSxmLGs7YzxiLmxlbmd0aDtjKyspaWYoZD1iW2NdLGY9ZD09PXdpbmRvdz93aW5kb3c6ZC5nZXRSb290Tm9kZSgpLGYhPT1lJiYoaz1hLmluZGV4T2YoZiksZT1mKSwhRyhmKXx8XG4tMTxrKXJldHVybiBkfWZ1bmN0aW9uICRhKGEpe2Z1bmN0aW9uIGIoYixkKXtiPW5ldyBhKGIsZCk7Yi5lYT1kJiYhIWQuY29tcG9zZWQ7cmV0dXJuIGJ9QWQoYixhKTtiLnByb3RvdHlwZT1hLnByb3RvdHlwZTtyZXR1cm4gYn1mdW5jdGlvbiBuYyhhLGIsYyl7aWYoYz1iLl9faGFuZGxlcnMmJmIuX19oYW5kbGVyc1thLnR5cGVdJiZiLl9faGFuZGxlcnNbYS50eXBlXVtjXSlmb3IodmFyIGQ9MCxlOyhlPWNbZF0pJiZhLnRhcmdldCE9PWEucmVsYXRlZFRhcmdldCYmKGUuY2FsbChiLGEpLCFhLkthKTtkKyspO31mdW5jdGlvbiBHZChhKXt2YXIgYj1hLmNvbXBvc2VkUGF0aCgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiY3VycmVudFRhcmdldFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sY29uZmlndXJhYmxlOiEwfSk7Zm9yKHZhciBjPWIubGVuZ3RoLTE7MDw9YztjLS0pe3ZhciBkPWJbY107bmMoYSxkLFwiY2FwdHVyZVwiKTtpZihhLmZhKXJldHVybn1PYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcblwiZXZlbnRQaGFzZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRXZlbnQuQVRfVEFSR0VUfX0pO3ZhciBlO2ZvcihjPTA7YzxiLmxlbmd0aDtjKyspe2Q9YltjXTt2YXIgZj1kLl9fc2hhZHkmJmQuX19zaGFkeS5yb290O2lmKDA9PT1jfHxmJiZmPT09ZSlpZihuYyhhLGQsXCJidWJibGVcIiksZCE9PXdpbmRvdyYmKGU9ZC5nZXRSb290Tm9kZSgpKSxhLmZhKWJyZWFrfX1mdW5jdGlvbiBvYyhhLGIsYyxkLGUsZil7Zm9yKHZhciBrPTA7azxhLmxlbmd0aDtrKyspe3ZhciBoPWFba10sdz1oLnR5cGUsZz1oLmNhcHR1cmUsbT1oLm9uY2UsbD1oLnBhc3NpdmU7aWYoYj09PWgubm9kZSYmYz09PXcmJmQ9PT1nJiZlPT09bSYmZj09PWwpcmV0dXJuIGt9cmV0dXJuLTF9ZnVuY3Rpb24gcGMoYSxiLGMpe2lmKGIpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyl7dmFyIGQ9ISFjLmNhcHR1cmU7dmFyIGU9ISFjLm9uY2U7dmFyIGY9ISFjLnBhc3NpdmV9ZWxzZSBkPSEhYyxmPWU9ITE7dmFyIGs9YyYmYy5nYXx8XG50aGlzLGg9YltkYV07aWYoaCl7aWYoLTE8b2MoaCxrLGEsZCxlLGYpKXJldHVybn1lbHNlIGJbZGFdPVtdO2g9ZnVuY3Rpb24oZCl7ZSYmdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKTtkLl9fdGFyZ2V0fHxxYyhkKTtpZihrIT09dGhpcyl7dmFyIGY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkLFwiY3VycmVudFRhcmdldFwiKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZCxcImN1cnJlbnRUYXJnZXRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGt9LGNvbmZpZ3VyYWJsZTohMH0pfWlmKGQuY29tcG9zZWR8fC0xPGQuY29tcG9zZWRQYXRoKCkuaW5kZXhPZihrKSlpZihkLnRhcmdldD09PWQucmVsYXRlZFRhcmdldClkLmV2ZW50UGhhc2U9PT1FdmVudC5CVUJCTElOR19QSEFTRSYmZC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtlbHNlIGlmKGQuZXZlbnRQaGFzZT09PUV2ZW50LkNBUFRVUklOR19QSEFTRXx8ZC5idWJibGVzfHxkLnRhcmdldD09PWspe3ZhciBoPVxuXCJvYmplY3RcIj09PXR5cGVvZiBiJiZiLmhhbmRsZUV2ZW50P2IuaGFuZGxlRXZlbnQoZCk6Yi5jYWxsKGssZCk7ayE9PXRoaXMmJihmPyhPYmplY3QuZGVmaW5lUHJvcGVydHkoZCxcImN1cnJlbnRUYXJnZXRcIixmKSxmPW51bGwpOmRlbGV0ZSBkLmN1cnJlbnRUYXJnZXQpO3JldHVybiBofX07YltkYV0ucHVzaCh7bm9kZTp0aGlzLHR5cGU6YSxjYXB0dXJlOmQsb25jZTplLHBhc3NpdmU6ZixsYjpofSk7YWJbYV0/KHRoaXMuX19oYW5kbGVycz10aGlzLl9faGFuZGxlcnN8fHt9LHRoaXMuX19oYW5kbGVyc1thXT10aGlzLl9faGFuZGxlcnNbYV18fHtjYXB0dXJlOltdLGJ1YmJsZTpbXX0sdGhpcy5fX2hhbmRsZXJzW2FdW2Q/XCJjYXB0dXJlXCI6XCJidWJibGVcIl0ucHVzaChoKSk6KHRoaXMgaW5zdGFuY2VvZiBXaW5kb3c/cmM6c2MpLmNhbGwodGhpcyxhLGgsYyl9fWZ1bmN0aW9uIHRjKGEsYixjKXtpZihiKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMpe3ZhciBkPSEhYy5jYXB0dXJlO3ZhciBlPVxuISFjLm9uY2U7dmFyIGY9ISFjLnBhc3NpdmV9ZWxzZSBkPSEhYyxmPWU9ITE7dmFyIGs9YyYmYy5nYXx8dGhpcyxoPXZvaWQgMDt2YXIgZz1udWxsO3RyeXtnPWJbZGFdfWNhdGNoKHIpe31nJiYoZT1vYyhnLGssYSxkLGUsZiksLTE8ZSYmKGg9Zy5zcGxpY2UoZSwxKVswXS5sYixnLmxlbmd0aHx8KGJbZGFdPXZvaWQgMCkpKTsodGhpcyBpbnN0YW5jZW9mIFdpbmRvdz91Yzp2YykuY2FsbCh0aGlzLGEsaHx8YixjKTtoJiZhYlthXSYmdGhpcy5fX2hhbmRsZXJzJiZ0aGlzLl9faGFuZGxlcnNbYV0mJihhPXRoaXMuX19oYW5kbGVyc1thXVtkP1wiY2FwdHVyZVwiOlwiYnViYmxlXCJdLGg9YS5pbmRleE9mKGgpLC0xPGgmJmEuc3BsaWNlKGgsMSkpfX1mdW5jdGlvbiBIZCgpe2Zvcih2YXIgYSBpbiBhYil3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihhLGZ1bmN0aW9uKGEpe2EuX190YXJnZXR8fChxYyhhKSxHZChhKSl9LCEwKX1mdW5jdGlvbiBxYyhhKXthLl9fdGFyZ2V0PWEudGFyZ2V0O2EucmE9XG5hLnJlbGF0ZWRUYXJnZXQ7aWYoRS5TKXt2YXIgYj13YyxjPU9iamVjdC5nZXRQcm90b3R5cGVPZihhKTtpZighYy5oYXNPd25Qcm9wZXJ0eShcIl9fcGF0Y2hQcm90b1wiKSl7dmFyIGQ9T2JqZWN0LmNyZWF0ZShjKTtkLm5iPWM7TWEoZCxiKTtjLl9fcGF0Y2hQcm90bz1kfWEuX19wcm90b19fPWMuX19wYXRjaFByb3RvfWVsc2UgTWEoYSx3Yyl9ZnVuY3Rpb24gZWEoYSxiKXtyZXR1cm57aW5kZXg6YSxVOltdLFc6Yn19ZnVuY3Rpb24gSWQoYSxiLGMsZCl7dmFyIGU9MCxmPTAsaz0wLGg9MCxnPU1hdGgubWluKGItZSxkLWYpO2lmKDA9PWUmJjA9PWYpYTp7Zm9yKGs9MDtrPGc7aysrKWlmKGFba10hPT1jW2tdKWJyZWFrIGE7az1nfWlmKGI9PWEubGVuZ3RoJiZkPT1jLmxlbmd0aCl7aD1hLmxlbmd0aDtmb3IodmFyIHI9Yy5sZW5ndGgsbT0wO208Zy1rJiZKZChhWy0taF0sY1stLXJdKTspbSsrO2g9bX1lKz1rO2YrPWs7Yi09aDtkLT1oO2lmKDA9PWItZSYmMD09ZC1mKXJldHVybltdO1xuaWYoZT09Yil7Zm9yKGI9ZWEoZSwwKTtmPGQ7KWIuVS5wdXNoKGNbZisrXSk7cmV0dXJuW2JdfWlmKGY9PWQpcmV0dXJuW2VhKGUsYi1lKV07Zz1lO2s9ZjtkPWQtaysxO2g9Yi1nKzE7Yj1BcnJheShkKTtmb3Iocj0wO3I8ZDtyKyspYltyXT1BcnJheShoKSxiW3JdWzBdPXI7Zm9yKHI9MDtyPGg7cisrKWJbMF1bcl09cjtmb3Iocj0xO3I8ZDtyKyspZm9yKG09MTttPGg7bSsrKWlmKGFbZyttLTFdPT09Y1trK3ItMV0pYltyXVttXT1iW3ItMV1bbS0xXTtlbHNle3ZhciBsPWJbci0xXVttXSsxLG49YltyXVttLTFdKzE7YltyXVttXT1sPG4/bDpufWc9Yi5sZW5ndGgtMTtrPWJbMF0ubGVuZ3RoLTE7ZD1iW2ddW2tdO2ZvcihhPVtdOzA8Z3x8MDxrOykwPT1nPyhhLnB1c2goMiksay0tKTowPT1rPyhhLnB1c2goMyksZy0tKTooaD1iW2ctMV1bay0xXSxyPWJbZy0xXVtrXSxtPWJbZ11bay0xXSxsPXI8bT9yPGg/cjpoOm08aD9tOmgsbD09aD8oaD09ZD9hLnB1c2goMCk6KGEucHVzaCgxKSxcbmQ9aCksZy0tLGstLSk6bD09cj8oYS5wdXNoKDMpLGctLSxkPXIpOihhLnB1c2goMiksay0tLGQ9bSkpO2EucmV2ZXJzZSgpO2I9dm9pZCAwO2c9W107Zm9yKGs9MDtrPGEubGVuZ3RoO2srKylzd2l0Y2goYVtrXSl7Y2FzZSAwOmImJihnLnB1c2goYiksYj12b2lkIDApO2UrKztmKys7YnJlYWs7Y2FzZSAxOmJ8fChiPWVhKGUsMCkpO2IuVysrO2UrKztiLlUucHVzaChjW2ZdKTtmKys7YnJlYWs7Y2FzZSAyOmJ8fChiPWVhKGUsMCkpO2IuVysrO2UrKzticmVhaztjYXNlIDM6Ynx8KGI9ZWEoZSwwKSksYi5VLnB1c2goY1tmXSksZisrfWImJmcucHVzaChiKTtyZXR1cm4gZ31mdW5jdGlvbiBKZChhLGIpe3JldHVybiBhPT09Yn1mdW5jdGlvbiB4YyhhKXt2YXIgYj1bXTtkbyBiLnVuc2hpZnQoYSk7d2hpbGUoYT1hLnBhcmVudE5vZGUpO3JldHVybiBifWZ1bmN0aW9uIHljKGEpe2ljKGEpO3JldHVybiBhLl9fc2hhZHkmJmEuX19zaGFkeS5hc3NpZ25lZFNsb3R8fG51bGx9ZnVuY3Rpb24gTChhLFxuYil7Zm9yKHZhciBjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGIpLGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXSxmPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYixlKTtmLnZhbHVlP2FbZV09Zi52YWx1ZTpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxlLGYpfX1mdW5jdGlvbiBLZCgpe3ZhciBhPXdpbmRvdy5jdXN0b21FbGVtZW50cyYmd2luZG93LmN1c3RvbUVsZW1lbnRzLm5hdGl2ZUhUTUxFbGVtZW50fHxIVE1MRWxlbWVudDtMKHdpbmRvdy5Ob2RlLnByb3RvdHlwZSxMZCk7TCh3aW5kb3cuV2luZG93LnByb3RvdHlwZSxNZCk7TCh3aW5kb3cuVGV4dC5wcm90b3R5cGUsTmQpO0wod2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLGJiKTtMKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSx6Yyk7TCh3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLEFjKTt3aW5kb3cuSFRNTFNsb3RFbGVtZW50JiZMKHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQucHJvdG90eXBlLFxuQmMpO0woYS5wcm90b3R5cGUsT2QpO0UuUyYmKFAod2luZG93Lk5vZGUucHJvdG90eXBlKSxQKHdpbmRvdy5UZXh0LnByb3RvdHlwZSksUCh3aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUpLFAod2luZG93LkVsZW1lbnQucHJvdG90eXBlKSxQKGEucHJvdG90eXBlKSxQKHdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUpLHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQmJlAod2luZG93LkhUTUxTbG90RWxlbWVudC5wcm90b3R5cGUpKX1mdW5jdGlvbiBDYyhhKXt2YXIgYj1QZC5oYXMoYSk7YT0vXlthLXpdWy4wLTlfYS16XSotW1xcLS4wLTlfYS16XSokLy50ZXN0KGEpO3JldHVybiFiJiZhfWZ1bmN0aW9uIHQoYSl7dmFyIGI9YS5pc0Nvbm5lY3RlZDtpZih2b2lkIDAhPT1iKXJldHVybiBiO2Zvcig7YSYmIShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KTspYT1hLnBhcmVudE5vZGV8fCh3aW5kb3cuU2hhZG93Um9vdCYmYSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/XG5hLmhvc3Q6dm9pZCAwKTtyZXR1cm4hKCFhfHwhKGEuX19DRV9pc0ltcG9ydERvY3VtZW50fHxhIGluc3RhbmNlb2YgRG9jdW1lbnQpKX1mdW5jdGlvbiBjYihhLGIpe2Zvcig7YiYmYiE9PWEmJiFiLm5leHRTaWJsaW5nOyliPWIucGFyZW50Tm9kZTtyZXR1cm4gYiYmYiE9PWE/Yi5uZXh0U2libGluZzpudWxsfWZ1bmN0aW9uIE8oYSxiLGMpe2M9Yz9jOm5ldyBTZXQ7Zm9yKHZhciBkPWE7ZDspe2lmKGQubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7dmFyIGU9ZDtiKGUpO3ZhciBmPWUubG9jYWxOYW1lO2lmKFwibGlua1wiPT09ZiYmXCJpbXBvcnRcIj09PWUuZ2V0QXR0cmlidXRlKFwicmVsXCIpKXtkPWUuaW1wb3J0O2lmKGQgaW5zdGFuY2VvZiBOb2RlJiYhYy5oYXMoZCkpZm9yKGMuYWRkKGQpLGQ9ZC5maXJzdENoaWxkO2Q7ZD1kLm5leHRTaWJsaW5nKU8oZCxiLGMpO2Q9Y2IoYSxlKTtjb250aW51ZX1lbHNlIGlmKFwidGVtcGxhdGVcIj09PWYpe2Q9Y2IoYSxlKTtjb250aW51ZX1pZihlPVxuZS5fX0NFX3NoYWRvd1Jvb3QpZm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKU8oZSxiLGMpfWQ9ZC5maXJzdENoaWxkP2QuZmlyc3RDaGlsZDpjYihhLGQpfX1mdW5jdGlvbiB4KGEsYixjKXthW2JdPWN9ZnVuY3Rpb24gZGIoYSl7YT1hLnJlcGxhY2UoRi5ZYSxcIlwiKS5yZXBsYWNlKEYucG9ydCxcIlwiKTt2YXIgYj1EYyxjPWEsZD1uZXcgQmE7ZC5zdGFydD0wO2QuZW5kPWMubGVuZ3RoO2Zvcih2YXIgZT1kLGY9MCxrPWMubGVuZ3RoO2Y8aztmKyspaWYoXCJ7XCI9PT1jW2ZdKXtlLnJ1bGVzfHwoZS5ydWxlcz1bXSk7dmFyIGg9ZSxnPWgucnVsZXNbaC5ydWxlcy5sZW5ndGgtMV18fG51bGw7ZT1uZXcgQmE7ZS5zdGFydD1mKzE7ZS5wYXJlbnQ9aDtlLnByZXZpb3VzPWc7aC5ydWxlcy5wdXNoKGUpfWVsc2VcIn1cIj09PWNbZl0mJihlLmVuZD1mKzEsZT1lLnBhcmVudHx8ZCk7cmV0dXJuIGIoZCxhKX1mdW5jdGlvbiBEYyhhLGIpe3ZhciBjPWIuc3Vic3RyaW5nKGEuc3RhcnQsXG5hLmVuZC0xKTthLnBhcnNlZENzc1RleHQ9YS5jc3NUZXh0PWMudHJpbSgpO2EucGFyZW50JiYoYz1iLnN1YnN0cmluZyhhLnByZXZpb3VzP2EucHJldmlvdXMuZW5kOmEucGFyZW50LnN0YXJ0LGEuc3RhcnQtMSksYz1RZChjKSxjPWMucmVwbGFjZShGLkJhLFwiIFwiKSxjPWMuc3Vic3RyaW5nKGMubGFzdEluZGV4T2YoXCI7XCIpKzEpLGM9YS5wYXJzZWRTZWxlY3Rvcj1hLnNlbGVjdG9yPWMudHJpbSgpLGEuYXRSdWxlPTA9PT1jLmluZGV4T2YoXCJAXCIpLGEuYXRSdWxlPzA9PT1jLmluZGV4T2YoXCJAbWVkaWFcIik/YS50eXBlPUkuTUVESUFfUlVMRTpjLm1hdGNoKEYuY2IpJiYoYS50eXBlPUkuZGEsYS5rZXlmcmFtZXNOYW1lPWEuc2VsZWN0b3Iuc3BsaXQoRi5CYSkucG9wKCkpOmEudHlwZT0wPT09Yy5pbmRleE9mKFwiLS1cIik/SS5uYTpJLlNUWUxFX1JVTEUpO2lmKGM9YS5ydWxlcylmb3IodmFyIGQ9MCxlPWMubGVuZ3RoLGY7ZDxlJiYoZj1jW2RdKTtkKyspRGMoZixiKTtyZXR1cm4gYX1mdW5jdGlvbiBRZChhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXFxcKFswLTlhLWZdezEsNn0pXFxzL2dpLFxuZnVuY3Rpb24oYSxjKXthPWM7Zm9yKGM9Ni1hLmxlbmd0aDtjLS07KWE9XCIwXCIrYTtyZXR1cm5cIlxcXFxcIithfSl9ZnVuY3Rpb24gRWMoYSxiLGMpe2M9dm9pZCAwPT09Yz9cIlwiOmM7dmFyIGQ9XCJcIjtpZihhLmNzc1RleHR8fGEucnVsZXMpe3ZhciBlPWEucnVsZXMsZjtpZihmPWUpZj1lWzBdLGY9IShmJiZmLnNlbGVjdG9yJiYwPT09Zi5zZWxlY3Rvci5pbmRleE9mKFwiLS1cIikpO2lmKGYpe2Y9MDtmb3IodmFyIGs9ZS5sZW5ndGgsaDtmPGsmJihoPWVbZl0pO2YrKylkPUVjKGgsYixkKX1lbHNlIGI/Yj1hLmNzc1RleHQ6KGI9YS5jc3NUZXh0LGI9Yi5yZXBsYWNlKEYud2EsXCJcIikucmVwbGFjZShGLkFhLFwiXCIpLGI9Yi5yZXBsYWNlKEYuZWIsXCJcIikucmVwbGFjZShGLmpiLFwiXCIpKSwoZD1iLnRyaW0oKSkmJihkPVwiICBcIitkK1wiXFxuXCIpfWQmJihhLnNlbGVjdG9yJiYoYys9YS5zZWxlY3RvcitcIiB7XFxuXCIpLGMrPWQsYS5zZWxlY3RvciYmKGMrPVwifVxcblxcblwiKSk7cmV0dXJuIGN9ZnVuY3Rpb24gRmMoYSl7QT1cbmEmJmEuc2hpbWNzc3Byb3BlcnRpZXM/ITE6enx8IShuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdFxcLzYwMXxFZGdlXFwvMTUvKXx8IXdpbmRvdy5DU1N8fCFDU1Muc3VwcG9ydHN8fCFDU1Muc3VwcG9ydHMoXCJib3gtc2hhZG93XCIsXCIwIDAgMCB2YXIoLS1mb28pXCIpKX1mdW5jdGlvbiBWKGEsYil7aWYoIWEpcmV0dXJuXCJcIjtcInN0cmluZ1wiPT09dHlwZW9mIGEmJihhPWRiKGEpKTtiJiZXKGEsYik7cmV0dXJuIEVjKGEsQSl9ZnVuY3Rpb24gcGEoYSl7IWEuX19jc3NSdWxlcyYmYS50ZXh0Q29udGVudCYmKGEuX19jc3NSdWxlcz1kYihhLnRleHRDb250ZW50KSk7cmV0dXJuIGEuX19jc3NSdWxlc3x8bnVsbH1mdW5jdGlvbiBHYyhhKXtyZXR1cm4hIWEucGFyZW50JiZhLnBhcmVudC50eXBlPT09SS5kYX1mdW5jdGlvbiBXKGEsYixjLGQpe2lmKGEpe3ZhciBlPSExLGY9YS50eXBlO2lmKGQmJmY9PT1JLk1FRElBX1JVTEUpe3ZhciBrPWEuc2VsZWN0b3IubWF0Y2goUmQpO1xuayYmKHdpbmRvdy5tYXRjaE1lZGlhKGtbMV0pLm1hdGNoZXN8fChlPSEwKSl9Zj09PUkuU1RZTEVfUlVMRT9iKGEpOmMmJmY9PT1JLmRhP2MoYSk6Zj09PUkubmEmJihlPSEwKTtpZigoYT1hLnJ1bGVzKSYmIWUpe2U9MDtmPWEubGVuZ3RoO2Zvcih2YXIgaDtlPGYmJihoPWFbZV0pO2UrKylXKGgsYixjLGQpfX19ZnVuY3Rpb24gZWIoYSxiLGMsZCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2ImJmUuc2V0QXR0cmlidXRlKFwic2NvcGVcIixiKTtlLnRleHRDb250ZW50PWE7SGMoZSxjLGQpO3JldHVybiBlfWZ1bmN0aW9uIEhjKGEsYixjKXtiPWJ8fGRvY3VtZW50LmhlYWQ7Yi5pbnNlcnRCZWZvcmUoYSxjJiZjLm5leHRTaWJsaW5nfHxiLmZpcnN0Q2hpbGQpO1E/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihRKT09PU5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HJiYoUT1hKTpRPWF9ZnVuY3Rpb24gSWMoYSxiKXt2YXIgYz1hLmluZGV4T2YoXCJ2YXIoXCIpO1xuaWYoLTE9PT1jKXJldHVybiBiKGEsXCJcIixcIlwiLFwiXCIpO2E6e3ZhciBkPTA7dmFyIGU9YyszO2Zvcih2YXIgZj1hLmxlbmd0aDtlPGY7ZSsrKWlmKFwiKFwiPT09YVtlXSlkKys7ZWxzZSBpZihcIilcIj09PWFbZV0mJjA9PT0tLWQpYnJlYWsgYTtlPS0xfWQ9YS5zdWJzdHJpbmcoYys0LGUpO2M9YS5zdWJzdHJpbmcoMCxjKTthPUljKGEuc3Vic3RyaW5nKGUrMSksYik7ZT1kLmluZGV4T2YoXCIsXCIpO3JldHVybi0xPT09ZT9iKGMsZC50cmltKCksXCJcIixhKTpiKGMsZC5zdWJzdHJpbmcoMCxlKS50cmltKCksZC5zdWJzdHJpbmcoZSsxKS50cmltKCksYSl9ZnVuY3Rpb24gcWEoYSxiKXt6P2Euc2V0QXR0cmlidXRlKFwiY2xhc3NcIixiKTp3aW5kb3cuU2hhZHlET00ubmF0aXZlTWV0aG9kcy5zZXRBdHRyaWJ1dGUuY2FsbChhLFwiY2xhc3NcIixiKX1mdW5jdGlvbiBSKGEpe3ZhciBiPWEubG9jYWxOYW1lLGM9XCJcIjtiPy0xPGIuaW5kZXhPZihcIi1cIil8fChjPWIsYj1hLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJpc1wiKXx8XG5cIlwiKTooYj1hLmlzLGM9YS5leHRlbmRzKTtyZXR1cm57aXM6YixWOmN9fWZ1bmN0aW9uIEpjKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKGMudGFyZ2V0IT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiZjLnRhcmdldCE9PWRvY3VtZW50LmhlYWQpZm9yKHZhciBkPTA7ZDxjLmFkZGVkTm9kZXMubGVuZ3RoO2QrKyl7dmFyIGU9Yy5hZGRlZE5vZGVzW2RdO2lmKGUubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7dmFyIGY9ZS5nZXRSb290Tm9kZSgpO3ZhciBrPWU7dmFyIGg9W107ay5jbGFzc0xpc3Q/aD1BcnJheS5mcm9tKGsuY2xhc3NMaXN0KTprIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQmJmsuaGFzQXR0cmlidXRlKFwiY2xhc3NcIikmJihoPWsuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuc3BsaXQoL1xccysvKSk7az1oO2g9ay5pbmRleE9mKHAuYSk7aWYoKGs9LTE8aD9rW2grMV06XCJcIikmJmY9PT1lLm93bmVyRG9jdW1lbnQpcC5iKGUsXG5rLCEwKTtlbHNlIGlmKGYubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUmJihmPWYuaG9zdCkpaWYoZj1SKGYpLmlzLGs9PT1mKWZvcihlPXdpbmRvdy5TaGFkeURPTS5uYXRpdmVNZXRob2RzLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlLFwiOm5vdCguXCIrcC5hK1wiKVwiKSxmPTA7ZjxlLmxlbmd0aDtmKyspcC5oKGVbZl0sayk7ZWxzZSBrJiZwLmIoZSxrLCEwKSxwLmIoZSxmKX19fX1mdW5jdGlvbiBTZChhKXtpZihhPXJhW2FdKWEuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9uPWEuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9ufHwwLGEuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uPWEuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9ufHwwLGEuX2FwcGx5U2hpbU5leHRWZXJzaW9uPShhLl9hcHBseVNoaW1OZXh0VmVyc2lvbnx8MCkrMX1mdW5jdGlvbiBLYyhhKXtyZXR1cm4gYS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb249PT1hLl9hcHBseVNoaW1OZXh0VmVyc2lvbn1cbmZ1bmN0aW9uIFRkKGEpe2EuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uPWEuX2FwcGx5U2hpbU5leHRWZXJzaW9uO2EuYnx8KGEuYj0hMCxVZC50aGVuKGZ1bmN0aW9uKCl7YS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb249YS5fYXBwbHlTaGltTmV4dFZlcnNpb247YS5iPSExfSkpfWZ1bmN0aW9uIHViKGEpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe0xjP0xjKGEpOihmYnx8KGZiPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEpe2diPWF9KSxcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlP2diKCk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbigpe1wiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUmJmdiKCl9KSksZmIudGhlbihmdW5jdGlvbigpe2EmJmEoKX0pKX0pfShmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudClyZXR1cm4gbmV3IEN1c3RvbUV2ZW50KGEsXG5iKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO2MuaW5pdEN1c3RvbUV2ZW50KGEsISFiLmJ1YmJsZXMsISFiLmNhbmNlbGFibGUsYi5kZXRhaWwpO3JldHVybiBjfWZ1bmN0aW9uIGMoYSl7aWYobSlyZXR1cm4gYS5vd25lckRvY3VtZW50IT09ZG9jdW1lbnQ/YS5vd25lckRvY3VtZW50Om51bGw7dmFyIGI9YS5fX2ltcG9ydERvYztpZighYiYmYS5wYXJlbnROb2RlKXtiPWEucGFyZW50Tm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jbG9zZXN0KWI9Yi5jbG9zZXN0KFwibGlua1tyZWw9aW1wb3J0XVwiKTtlbHNlIGZvcig7IWgoYikmJihiPWIucGFyZW50Tm9kZSk7KTthLl9faW1wb3J0RG9jPWJ9cmV0dXJuIGJ9ZnVuY3Rpb24gZChhKXt2YXIgYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XTpub3QoW2ltcG9ydC1kZXBlbmRlbmN5XSlcIiksYz1iLmxlbmd0aDtjP2woYixmdW5jdGlvbihiKXtyZXR1cm4gayhiLGZ1bmN0aW9uKCl7MD09PVxuLS1jJiZhKCl9KX0pOmEoKX1mdW5jdGlvbiBlKGEpe2Z1bmN0aW9uIGIoKXtcImxvYWRpbmdcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGUmJmRvY3VtZW50LmJvZHkmJihkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGIpLGEoKSl9ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixiKTtiKCl9ZnVuY3Rpb24gZihhKXtlKGZ1bmN0aW9uKCl7cmV0dXJuIGQoZnVuY3Rpb24oKXtyZXR1cm4gYSYmYSgpfSl9KX1mdW5jdGlvbiBrKGEsYil7aWYoYS5fX2xvYWRlZCliJiZiKCk7ZWxzZSBpZihcInNjcmlwdFwiPT09YS5sb2NhbE5hbWUmJiFhLnNyY3x8XCJzdHlsZVwiPT09YS5sb2NhbE5hbWUmJiFhLmZpcnN0Q2hpbGQpYS5fX2xvYWRlZD0hMCxiJiZiKCk7ZWxzZXt2YXIgYz1mdW5jdGlvbihkKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoZC50eXBlLGMpO2EuX19sb2FkZWQ9ITA7YiYmYigpfTthLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsXG5jKTt6JiZcInN0eWxlXCI9PT1hLmxvY2FsTmFtZXx8YS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixjKX19ZnVuY3Rpb24gaChhKXtyZXR1cm4gYS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiZcImxpbmtcIj09PWEubG9jYWxOYW1lJiZcImltcG9ydFwiPT09YS5yZWx9ZnVuY3Rpb24gZygpe3ZhciBhPXRoaXM7dGhpcy5hPXt9O3RoaXMuYj0wO3RoaXMuZj1uZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihiKXtyZXR1cm4gYS5sKGIpfSk7dGhpcy5mLm9ic2VydmUoZG9jdW1lbnQuaGVhZCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KTt0aGlzLmMoZG9jdW1lbnQpfWZ1bmN0aW9uIGwoYSxiLGMpe3ZhciBkPWE/YS5sZW5ndGg6MCxlPWM/LTE6MTtmb3IoYz1jP2QtMTowO2M8ZCYmMDw9YztjKz1lKWIoYVtjXSxjKX12YXIgbT1cImltcG9ydFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIiksbj1udWxsOyExPT09XCJjdXJyZW50U2NyaXB0XCJpbiBkb2N1bWVudCYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50LFxuXCJjdXJyZW50U2NyaXB0XCIse2dldDpmdW5jdGlvbigpe3JldHVybiBufHwoXCJjb21wbGV0ZVwiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9kb2N1bWVudC5zY3JpcHRzW2RvY3VtZW50LnNjcmlwdHMubGVuZ3RoLTFdOm51bGwpfSxjb25maWd1cmFibGU6ITB9KTt2YXIgcT0vKHVybFxcKCkoW14pXSopKFxcKSkvZyx0PS8oQGltcG9ydFtcXHNdKyg/IXVybFxcKCkpKFteO10qKSg7KS9nLHU9Lyg8bGlua1tePl0qKShyZWw9Wyd8XCJdP3N0eWxlc2hlZXRbJ3xcIl0/W14+XSo+KS9nLHA9e1phOmZ1bmN0aW9uKGEsYil7YS5ocmVmJiZhLnNldEF0dHJpYnV0ZShcImhyZWZcIixwLiQoYS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLGIpKTthLnNyYyYmYS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixwLiQoYS5nZXRBdHRyaWJ1dGUoXCJzcmNcIiksYikpO2lmKFwic3R5bGVcIj09PWEubG9jYWxOYW1lKXt2YXIgYz1wLkNhKGEudGV4dENvbnRlbnQsYixxKTthLnRleHRDb250ZW50PXAuQ2EoYyxiLHQpfX0sQ2E6ZnVuY3Rpb24oYSxcbmIsYyl7cmV0dXJuIGEucmVwbGFjZShjLGZ1bmN0aW9uKGEsYyxkLGUpe2E9ZC5yZXBsYWNlKC9bXCInXS9nLFwiXCIpO2ImJihhPXAuJChhLGIpKTtyZXR1cm4gYytcIidcIithK1wiJ1wiK2V9KX0sJDpmdW5jdGlvbihhLGIpe2lmKHZvaWQgMD09PXAuaGEpe3AuaGE9ITE7dHJ5e3ZhciBjPW5ldyBVUkwoXCJiXCIsXCJodHRwOi8vYVwiKTtjLnBhdGhuYW1lPVwiYyUyMGRcIjtwLmhhPVwiaHR0cDovL2EvYyUyMGRcIj09PWMuaHJlZn1jYXRjaChzZSl7fX1pZihwLmhhKXJldHVybihuZXcgVVJMKGEsYikpLmhyZWY7Yz1wLlBhO2N8fChjPWRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcInRlbXBcIikscC5QYT1jLGMucGE9Yy5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSxjLmhlYWQuYXBwZW5kQ2hpbGQoYy5wYSksYy5vYT1jLmNyZWF0ZUVsZW1lbnQoXCJhXCIpKTtjLnBhLmhyZWY9YjtjLm9hLmhyZWY9YTtyZXR1cm4gYy5vYS5ocmVmfHxhfX0sdj17YXN5bmM6ITAsbG9hZDpmdW5jdGlvbihhLFxuYixjKXtpZihhKWlmKGEubWF0Y2goL15kYXRhOi8pKXthPWEuc3BsaXQoXCIsXCIpO3ZhciBkPWFbMV07ZD0tMTxhWzBdLmluZGV4T2YoXCI7YmFzZTY0XCIpP2F0b2IoZCk6ZGVjb2RlVVJJQ29tcG9uZW50KGQpO2IoZCl9ZWxzZXt2YXIgZT1uZXcgWE1MSHR0cFJlcXVlc3Q7ZS5vcGVuKFwiR0VUXCIsYSx2LmFzeW5jKTtlLm9ubG9hZD1mdW5jdGlvbigpe3ZhciBhPWUucmVzcG9uc2VVUkx8fGUuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMb2NhdGlvblwiKTthJiYwPT09YS5pbmRleE9mKFwiL1wiKSYmKGE9KGxvY2F0aW9uLm9yaWdpbnx8bG9jYXRpb24ucHJvdG9jb2wrXCIvL1wiK2xvY2F0aW9uLmhvc3QpK2EpO3ZhciBkPWUucmVzcG9uc2V8fGUucmVzcG9uc2VUZXh0OzMwND09PWUuc3RhdHVzfHwwPT09ZS5zdGF0dXN8fDIwMDw9ZS5zdGF0dXMmJjMwMD5lLnN0YXR1cz9iKGQsYSk6YyhkKX07ZS5zZW5kKCl9ZWxzZSBjKFwiZXJyb3I6IGhyZWYgbXVzdCBiZSBzcGVjaWZpZWRcIil9fSx6PS9UcmlkZW50Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpfHxcbi9FZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7Zy5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2E9YS5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XVwiKTtsKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIuaChhKX0pfTtnLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1hLmhyZWY7aWYodm9pZCAwIT09dGhpcy5hW2NdKXt2YXIgZD10aGlzLmFbY107ZCYmZC5fX2xvYWRlZCYmKGEuaW1wb3J0PWQsdGhpcy5nKGEpKX1lbHNlIHRoaXMuYisrLHRoaXMuYVtjXT1cInBlbmRpbmdcIix2LmxvYWQoYyxmdW5jdGlvbihhLGQpe2E9Yi5tKGEsZHx8Yyk7Yi5hW2NdPWE7Yi5iLS07Yi5jKGEpO2IuaSgpfSxmdW5jdGlvbigpe2IuYVtjXT1udWxsO2IuYi0tO2IuaSgpfSl9O2cucHJvdG90eXBlLm09ZnVuY3Rpb24oYSxiKXtpZighYSlyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3omJihhPWEucmVwbGFjZSh1LFxuZnVuY3Rpb24oYSxiLGMpe3JldHVybi0xPT09YS5pbmRleE9mKFwidHlwZT1cIik/YitcIiB0eXBlPWltcG9ydC1kaXNhYmxlIFwiK2M6YX0pKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7Yy5pbm5lckhUTUw9YTtpZihjLmNvbnRlbnQpYT1jLmNvbnRlbnQ7ZWxzZSBmb3IoYT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Yy5maXJzdENoaWxkOylhLmFwcGVuZENoaWxkKGMuZmlyc3RDaGlsZCk7aWYoYz1hLnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpKWI9cC4kKGMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxiKSxjLnJlbW92ZUF0dHJpYnV0ZShcImhyZWZcIik7Yz1hLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPWltcG9ydF0sIGxpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWZdW3R5cGU9aW1wb3J0LWRpc2FibGVdLFxcbiAgICBzdHlsZTpub3QoW3R5cGVdKSwgbGlua1tyZWw9c3R5bGVzaGVldF1baHJlZl06bm90KFt0eXBlXSksXFxuICAgIHNjcmlwdDpub3QoW3R5cGVdKSwgc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCJdLFxcbiAgICBzY3JpcHRbdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXScpO1xudmFyIGQ9MDtsKGMsZnVuY3Rpb24oYSl7ayhhKTtwLlphKGEsYik7YS5zZXRBdHRyaWJ1dGUoXCJpbXBvcnQtZGVwZW5kZW5jeVwiLFwiXCIpO1wic2NyaXB0XCI9PT1hLmxvY2FsTmFtZSYmIWEuc3JjJiZhLnRleHRDb250ZW50JiYoYS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcImRhdGE6dGV4dC9qYXZhc2NyaXB0O2NoYXJzZXQ9dXRmLTgsXCIrZW5jb2RlVVJJQ29tcG9uZW50KGEudGV4dENvbnRlbnQrKFwiXFxuLy8jIHNvdXJjZVVSTD1cIitiKyhkP1wiLVwiK2Q6XCJcIikrXCIuanNcXG5cIikpKSxhLnRleHRDb250ZW50PVwiXCIsZCsrKX0pO3JldHVybiBhfTtnLnByb3RvdHlwZS5pPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztpZighdGhpcy5iKXt0aGlzLmYuZGlzY29ubmVjdCgpO3RoaXMuZmxhdHRlbihkb2N1bWVudCk7dmFyIGI9ITEsYz0hMSxkPWZ1bmN0aW9uKCl7YyYmYiYmKGEuYyhkb2N1bWVudCksYS5ifHwoYS5mLm9ic2VydmUoZG9jdW1lbnQuaGVhZCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KSxhLmooKSkpfTtcbnRoaXMucyhmdW5jdGlvbigpe2M9ITA7ZCgpfSk7dGhpcy5vKGZ1bmN0aW9uKCl7Yj0hMDtkKCl9KX19O2cucHJvdG90eXBlLmZsYXR0ZW49ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczthPWEucXVlcnlTZWxlY3RvckFsbChcImxpbmtbcmVsPWltcG9ydF1cIik7bChhLGZ1bmN0aW9uKGEpe3ZhciBjPWIuYVthLmhyZWZdOyhhLmltcG9ydD1jKSYmYy5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSYmKGIuYVthLmhyZWZdPWEsYS5yZWFkeVN0YXRlPVwibG9hZGluZ1wiLGEuaW1wb3J0PWEsYi5mbGF0dGVuKGMpLGEuYXBwZW5kQ2hpbGQoYykpfSl9O2cucHJvdG90eXBlLm89ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihlKXtpZihlPGQpe3ZhciBmPWNbZV0sZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2YucmVtb3ZlQXR0cmlidXRlKFwiaW1wb3J0LWRlcGVuZGVuY3lcIik7bChmLmF0dHJpYnV0ZXMsZnVuY3Rpb24oYSl7cmV0dXJuIGcuc2V0QXR0cmlidXRlKGEubmFtZSxcbmEudmFsdWUpfSk7bj1nO2YucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZyxmKTtrKGcsZnVuY3Rpb24oKXtuPW51bGw7YihlKzEpfSl9ZWxzZSBhKCl9dmFyIGM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdFtpbXBvcnQtZGVwZW5kZW5jeV1cIiksZD1jLmxlbmd0aDtiKDApfTtnLnByb3RvdHlwZS5zPWZ1bmN0aW9uKGEpe3ZhciBiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtpbXBvcnQtZGVwZW5kZW5jeV0sXFxuICAgIGxpbmtbcmVsPXN0eWxlc2hlZXRdW2ltcG9ydC1kZXBlbmRlbmN5XVwiKSxkPWIubGVuZ3RoO2lmKGQpe3ZhciBlPXomJiEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWZdW3R5cGU9aW1wb3J0LWRpc2FibGVdXCIpO2woYixmdW5jdGlvbihiKXtrKGIsZnVuY3Rpb24oKXtiLnJlbW92ZUF0dHJpYnV0ZShcImltcG9ydC1kZXBlbmRlbmN5XCIpOzA9PT0tLWQmJmEoKX0pO2lmKGUmJmIucGFyZW50Tm9kZSE9PVxuZG9jdW1lbnQuaGVhZCl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChiLmxvY2FsTmFtZSk7Zi5fX2FwcGxpZWRFbGVtZW50PWI7Zi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJpbXBvcnQtcGxhY2Vob2xkZXJcIik7Yi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmLGIubmV4dFNpYmxpbmcpO2ZvcihmPWMoYik7ZiYmYyhmKTspZj1jKGYpO2YucGFyZW50Tm9kZSE9PWRvY3VtZW50LmhlYWQmJihmPW51bGwpO2RvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGIsZik7Yi5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpfX0pfWVsc2UgYSgpfTtnLnByb3RvdHlwZS5qPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2woYixmdW5jdGlvbihiKXtyZXR1cm4gYS5nKGIpfSwhMCl9O2cucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7YS5fX2xvYWRlZHx8KGEuX19sb2FkZWQ9ITAsYS5pbXBvcnQmJihhLmltcG9ydC5yZWFkeVN0YXRlPVxuXCJjb21wbGV0ZVwiKSxhLmRpc3BhdGNoRXZlbnQoYihhLmltcG9ydD9cImxvYWRcIjpcImVycm9yXCIse2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfSkpKX07Zy5wcm90b3R5cGUubD1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2woYSxmdW5jdGlvbihhKXtyZXR1cm4gbChhLmFkZGVkTm9kZXMsZnVuY3Rpb24oYSl7YSYmYS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiYoaChhKT9iLmgoYSk6Yi5jKGEpKX0pfSl9O2lmKG0pe3ZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2woeCxmdW5jdGlvbihhKXthLmltcG9ydCYmXCJsb2FkaW5nXCI9PT1hLmltcG9ydC5yZWFkeVN0YXRlfHwoYS5fX2xvYWRlZD0hMCl9KTt4PWZ1bmN0aW9uKGEpe2E9YS50YXJnZXQ7aChhKSYmKGEuX19sb2FkZWQ9ITApfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLHgsITApO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLFxueCwhMCl9ZWxzZXt2YXIgeT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLFwiYmFzZVVSSVwiKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoKCF5fHx5LmNvbmZpZ3VyYWJsZT9Ob2RlOkVsZW1lbnQpLnByb3RvdHlwZSxcImJhc2VVUklcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9aCh0aGlzKT90aGlzOmModGhpcyk7cmV0dXJuIGE/YS5ocmVmOnkmJnkuZ2V0P3kuZ2V0LmNhbGwodGhpcyk6KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpfHx3aW5kb3cubG9jYXRpb24pLmhyZWZ9LGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwfSk7ZShmdW5jdGlvbigpe3JldHVybiBuZXcgZ30pfWYoZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChiKFwiSFRNTEltcG9ydHNMb2FkZWRcIix7Y2FuY2VsYWJsZTohMCxidWJibGVzOiEwLGRldGFpbDp2b2lkIDB9KSl9KTthLnVzZU5hdGl2ZT1tO2Eud2hlblJlYWR5PWY7YS5pbXBvcnRGb3JFbGVtZW50PVxuY30pKHdpbmRvdy5IVE1MSW1wb3J0cz13aW5kb3cuSFRNTEltcG9ydHN8fHt9KTt2YXIgRT13aW5kb3cuU2hhZHlET018fHt9O0UuJGE9ISghRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93fHwhTm9kZS5wcm90b3R5cGUuZ2V0Um9vdE5vZGUpO3ZhciBoYj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLFwiZmlyc3RDaGlsZFwiKTtFLlM9ISEoaGImJmhiLmNvbmZpZ3VyYWJsZSYmaGIuZ2V0KTtFLnphPUUuZm9yY2V8fCFFLiRhO3ZhciBYPUVsZW1lbnQucHJvdG90eXBlLE1jPVgubWF0Y2hlc3x8WC5tYXRjaGVzU2VsZWN0b3J8fFgubW96TWF0Y2hlc1NlbGVjdG9yfHxYLm1zTWF0Y2hlc1NlbGVjdG9yfHxYLm9NYXRjaGVzU2VsZWN0b3J8fFgud2Via2l0TWF0Y2hlc1NlbGVjdG9yLFBhPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpLExiPTAsT2E9W107KG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCl7Zm9yKDtPYS5sZW5ndGg7KXRyeXtPYS5zaGlmdCgpKCl9Y2F0Y2goYSl7dGhyb3cgUGEudGV4dENvbnRlbnQ9XG5MYisrLGE7fX0pKS5vYnNlcnZlKFBhLHtjaGFyYWN0ZXJEYXRhOiEwfSk7dmFyIFZkPSEhZG9jdW1lbnQuY29udGFpbnMsYWE9W10sUWE7bWEubGlzdD1hYTtsYS5wcm90b3R5cGUuaGI9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3RoaXMuYXx8KHRoaXMuYT0hMCxLYihmdW5jdGlvbigpe2EuYigpfSkpfTtsYS5wcm90b3R5cGUuYj1mdW5jdGlvbigpe2lmKHRoaXMuYSl7dGhpcy5hPSExO3ZhciBhPXRoaXMudGFrZVJlY29yZHMoKTthLmxlbmd0aCYmdGhpcy5YLmZvckVhY2goZnVuY3Rpb24oYil7YihhKX0pfX07bGEucHJvdG90eXBlLnRha2VSZWNvcmRzPWZ1bmN0aW9uKCl7aWYodGhpcy5hZGRlZE5vZGVzLmxlbmd0aHx8dGhpcy5yZW1vdmVkTm9kZXMubGVuZ3RoKXt2YXIgYT1be2FkZGVkTm9kZXM6dGhpcy5hZGRlZE5vZGVzLHJlbW92ZWROb2Rlczp0aGlzLnJlbW92ZWROb2Rlc31dO3RoaXMuYWRkZWROb2Rlcz1bXTt0aGlzLnJlbW92ZWROb2Rlcz1bXTtyZXR1cm4gYX1yZXR1cm5bXX07XG52YXIgY2M9RWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGQsWGE9RWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlLGJhPUVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNoaWxkLGtjPUVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSxOYz1FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsaWI9RWxlbWVudC5wcm90b3R5cGUuY2xvbmVOb2RlLFlhPURvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlLHNjPUVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIsdmM9RWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcixyYz1XaW5kb3cucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIsdWM9V2luZG93LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLGpiPUVsZW1lbnQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQsY2E9Tm9kZS5wcm90b3R5cGUuY29udGFpbnN8fEhUTUxFbGVtZW50LnByb3RvdHlwZS5jb250YWlucyxXZD1PYmplY3QuZnJlZXplKHthcHBlbmRDaGlsZDpjYyxcbmluc2VydEJlZm9yZTpYYSxyZW1vdmVDaGlsZDpiYSxzZXRBdHRyaWJ1dGU6a2MscmVtb3ZlQXR0cmlidXRlOk5jLGNsb25lTm9kZTppYixpbXBvcnROb2RlOllhLGFkZEV2ZW50TGlzdGVuZXI6c2MscmVtb3ZlRXZlbnRMaXN0ZW5lcjp2YyxyYjpyYyxzYjp1YyxkaXNwYXRjaEV2ZW50OmpiLHF1ZXJ5U2VsZWN0b3I6RWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvcixxdWVyeVNlbGVjdG9yQWxsOkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwsY29udGFpbnM6Y2F9KSxDZD0vWyZcXHUwMEEwXCJdL2csRmQ9L1smXFx1MDBBMDw+XS9nLERkPVBiKFwiYXJlYSBiYXNlIGJyIGNvbCBjb21tYW5kIGVtYmVkIGhyIGltZyBpbnB1dCBrZXlnZW4gbGluayBtZXRhIHBhcmFtIHNvdXJjZSB0cmFjayB3YnJcIi5zcGxpdChcIiBcIikpLEVkPVBiKFwic3R5bGUgc2NyaXB0IHhtcCBpZnJhbWUgbm9lbWJlZCBub2ZyYW1lcyBwbGFpbnRleHQgbm9zY3JpcHRcIi5zcGxpdChcIiBcIikpLEM9ZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihkb2N1bWVudCxcbk5vZGVGaWx0ZXIuU0hPV19BTEwsbnVsbCwhMSksRD1kb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGRvY3VtZW50LE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULG51bGwsITEpLFhkPU9iamVjdC5mcmVlemUoe3BhcmVudE5vZGU6VSxmaXJzdENoaWxkOkthLGxhc3RDaGlsZDpMYSxwcmV2aW91c1NpYmxpbmc6UWIsbmV4dFNpYmxpbmc6UmIsY2hpbGROb2RlczpTLHBhcmVudEVsZW1lbnQ6U2IsZmlyc3RFbGVtZW50Q2hpbGQ6VGIsbGFzdEVsZW1lbnRDaGlsZDpVYixwcmV2aW91c0VsZW1lbnRTaWJsaW5nOlZiLG5leHRFbGVtZW50U2libGluZzpXYixjaGlsZHJlbjpYYixpbm5lckhUTUw6WWIsdGV4dENvbnRlbnQ6WmJ9KSxrYj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpfHxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSxzYT1kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJpbmVydFwiKS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxubGI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihEb2N1bWVudC5wcm90b3R5cGUsXCJhY3RpdmVFbGVtZW50XCIpLCRiPXtwYXJlbnRFbGVtZW50OntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5wYXJlbnROb2RlO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERSYmKGE9bnVsbCk7cmV0dXJuIHZvaWQgMCE9PWE/YTpTYih0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxwYXJlbnROb2RlOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5wYXJlbnROb2RlO3JldHVybiB2b2lkIDAhPT1hP2E6VSh0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxuZXh0U2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkubmV4dFNpYmxpbmc7cmV0dXJuIHZvaWQgMCE9PWE/YTpSYih0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxwcmV2aW91c1NpYmxpbmc6e2dldDpmdW5jdGlvbigpe3ZhciBhPVxudGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nO3JldHVybiB2b2lkIDAhPT1hP2E6UWIodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sY2xhc3NOYW1lOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn0sc2V0OmZ1bmN0aW9uKGEpe3RoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX0sY29uZmlndXJhYmxlOiEwfSxuZXh0RWxlbWVudFNpYmxpbmc6e2dldDpmdW5jdGlvbigpe2lmKHRoaXMuX19zaGFkeSYmdm9pZCAwIT09dGhpcy5fX3NoYWR5Lm5leHRTaWJsaW5nKXtmb3IodmFyIGE9dGhpcy5uZXh0U2libGluZzthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX1yZXR1cm4gV2IodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0scHJldmlvdXNFbGVtZW50U2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7aWYodGhpcy5fX3NoYWR5JiZ2b2lkIDAhPT10aGlzLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nKXtmb3IodmFyIGE9XG50aGlzLnByZXZpb3VzU2libGluZzthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5wcmV2aW91c1NpYmxpbmc7cmV0dXJuIGF9cmV0dXJuIFZiKHRoaXMpfSxjb25maWd1cmFibGU6ITB9fSxTYT17Y2hpbGROb2Rlczp7Z2V0OmZ1bmN0aW9uKCl7aWYoVCh0aGlzKSl7aWYoIXRoaXMuX19zaGFkeS5jaGlsZE5vZGVzKXt0aGlzLl9fc2hhZHkuY2hpbGROb2Rlcz1bXTtmb3IodmFyIGE9dGhpcy5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKXRoaXMuX19zaGFkeS5jaGlsZE5vZGVzLnB1c2goYSl9dmFyIGI9dGhpcy5fX3NoYWR5LmNoaWxkTm9kZXN9ZWxzZSBiPVModGhpcyk7Yi5pdGVtPWZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfTtyZXR1cm4gYn0sY29uZmlndXJhYmxlOiEwfSxjaGlsZEVsZW1lbnRDb3VudDp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RofSxjb25maWd1cmFibGU6ITB9LGZpcnN0Q2hpbGQ6e2dldDpmdW5jdGlvbigpe3ZhciBhPVxudGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkuZmlyc3RDaGlsZDtyZXR1cm4gdm9pZCAwIT09YT9hOkthKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LGxhc3RDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkubGFzdENoaWxkO3JldHVybiB2b2lkIDAhPT1hP2E6TGEodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sdGV4dENvbnRlbnQ6e2dldDpmdW5jdGlvbigpe2lmKFQodGhpcykpe2Zvcih2YXIgYT1bXSxiPTAsYz10aGlzLmNoaWxkTm9kZXMsZDtkPWNbYl07YisrKWQubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERSYmYS5wdXNoKGQudGV4dENvbnRlbnQpO3JldHVybiBhLmpvaW4oXCJcIil9cmV0dXJuIFpiKHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYSl7c3dpdGNoKHRoaXMubm9kZVR5cGUpe2Nhc2UgTm9kZS5FTEVNRU5UX05PREU6Y2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6Zm9yKDt0aGlzLmZpcnN0Q2hpbGQ7KXRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTtcbigwPGEubGVuZ3RofHx0aGlzLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpJiZ0aGlzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTticmVhaztkZWZhdWx0OnRoaXMubm9kZVZhbHVlPWF9fSxjb25maWd1cmFibGU6ITB9LGZpcnN0RWxlbWVudENoaWxkOntnZXQ6ZnVuY3Rpb24oKXtpZih0aGlzLl9fc2hhZHkmJnZvaWQgMCE9PXRoaXMuX19zaGFkeS5maXJzdENoaWxkKXtmb3IodmFyIGE9dGhpcy5maXJzdENoaWxkO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLm5leHRTaWJsaW5nO3JldHVybiBhfXJldHVybiBUYih0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxsYXN0RWxlbWVudENoaWxkOntnZXQ6ZnVuY3Rpb24oKXtpZih0aGlzLl9fc2hhZHkmJnZvaWQgMCE9PXRoaXMuX19zaGFkeS5sYXN0Q2hpbGQpe2Zvcih2YXIgYT10aGlzLmxhc3RDaGlsZDthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5wcmV2aW91c1NpYmxpbmc7XG5yZXR1cm4gYX1yZXR1cm4gVWIodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sY2hpbGRyZW46e2dldDpmdW5jdGlvbigpe3ZhciBhO1QodGhpcyk/YT1BcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwodGhpcy5jaGlsZE5vZGVzLGZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREV9KTphPVhiKHRoaXMpO2EuaXRlbT1mdW5jdGlvbihiKXtyZXR1cm4gYVtiXX07cmV0dXJuIGF9LGNvbmZpZ3VyYWJsZTohMH0saW5uZXJIVE1MOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT90aGlzLmNvbnRlbnQ6dGhpcztyZXR1cm4gVCh0aGlzKT9SYShhKTpZYihhKX0sc2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT90aGlzLmNvbnRlbnQ6dGhpcztiLmZpcnN0Q2hpbGQ7KWIucmVtb3ZlQ2hpbGQoYi5maXJzdENoaWxkKTtmb3Ioa2ImJmtiLnNldD9rYi5zZXQuY2FsbChzYSxhKTpcbnNhLmlubmVySFRNTD1hO3NhLmZpcnN0Q2hpbGQ7KWIuYXBwZW5kQ2hpbGQoc2EuZmlyc3RDaGlsZCl9LGNvbmZpZ3VyYWJsZTohMH19LE9jPXtzaGFkb3dSb290OntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkuZmJ8fG51bGx9LGNvbmZpZ3VyYWJsZTohMH19LFRhPXthY3RpdmVFbGVtZW50OntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1sYiYmbGIuZ2V0P2xiLmdldC5jYWxsKGRvY3VtZW50KTpFLlM/dm9pZCAwOmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7aWYoYSYmYS5ub2RlVHlwZSl7dmFyIGI9ISFHKHRoaXMpO2lmKHRoaXM9PT1kb2N1bWVudHx8YiYmdGhpcy5ob3N0IT09YSYmY2EuY2FsbCh0aGlzLmhvc3QsYSkpe2ZvcihiPVooYSk7YiYmYiE9PXRoaXM7KWE9Yi5ob3N0LGI9WihhKTthPXRoaXM9PT1kb2N1bWVudD9iP251bGw6YTpiPT09dGhpcz9hOm51bGx9ZWxzZSBhPW51bGx9ZWxzZSBhPW51bGw7cmV0dXJuIGF9LHNldDpmdW5jdGlvbigpe30sXG5jb25maWd1cmFibGU6ITB9fSxKYj1FLlM/ZnVuY3Rpb24oKXt9OmZ1bmN0aW9uKGEpe2EuX19zaGFkeSYmYS5fX3NoYWR5Lk5hfHwoYS5fX3NoYWR5PWEuX19zaGFkeXx8e30sYS5fX3NoYWR5Lk5hPSEwLEsoYSwkYiwhMCkpfSxJYj1FLlM/ZnVuY3Rpb24oKXt9OmZ1bmN0aW9uKGEpe2EuX19zaGFkeSYmYS5fX3NoYWR5LkxhfHwoYS5fX3NoYWR5PWEuX19zaGFkeXx8e30sYS5fX3NoYWR5LkxhPSEwLEsoYSxTYSwhMCksSyhhLE9jLCEwKSl9LG9hPW51bGwsZGE9XCJfX2V2ZW50V3JhcHBlcnNcIitEYXRlLm5vdygpLFlkPXtibHVyOiEwLGZvY3VzOiEwLGZvY3VzaW46ITAsZm9jdXNvdXQ6ITAsY2xpY2s6ITAsZGJsY2xpY2s6ITAsbW91c2Vkb3duOiEwLG1vdXNlZW50ZXI6ITAsbW91c2VsZWF2ZTohMCxtb3VzZW1vdmU6ITAsbW91c2VvdXQ6ITAsbW91c2VvdmVyOiEwLG1vdXNldXA6ITAsd2hlZWw6ITAsYmVmb3JlaW5wdXQ6ITAsaW5wdXQ6ITAsa2V5ZG93bjohMCxrZXl1cDohMCxjb21wb3NpdGlvbnN0YXJ0OiEwLFxuY29tcG9zaXRpb251cGRhdGU6ITAsY29tcG9zaXRpb25lbmQ6ITAsdG91Y2hzdGFydDohMCx0b3VjaGVuZDohMCx0b3VjaG1vdmU6ITAsdG91Y2hjYW5jZWw6ITAscG9pbnRlcm92ZXI6ITAscG9pbnRlcmVudGVyOiEwLHBvaW50ZXJkb3duOiEwLHBvaW50ZXJtb3ZlOiEwLHBvaW50ZXJ1cDohMCxwb2ludGVyY2FuY2VsOiEwLHBvaW50ZXJvdXQ6ITAscG9pbnRlcmxlYXZlOiEwLGdvdHBvaW50ZXJjYXB0dXJlOiEwLGxvc3Rwb2ludGVyY2FwdHVyZTohMCxkcmFnc3RhcnQ6ITAsZHJhZzohMCxkcmFnZW50ZXI6ITAsZHJhZ2xlYXZlOiEwLGRyYWdvdmVyOiEwLGRyb3A6ITAsZHJhZ2VuZDohMCxET01BY3RpdmF0ZTohMCxET01Gb2N1c0luOiEwLERPTUZvY3VzT3V0OiEwLGtleXByZXNzOiEwfSx3Yz17Z2V0IGNvbXBvc2VkKCl7ITEhPT10aGlzLmlzVHJ1c3RlZCYmdm9pZCAwPT09dGhpcy5lYSYmKHRoaXMuZWE9WWRbdGhpcy50eXBlXSk7cmV0dXJuIHRoaXMuZWF8fCExfSxjb21wb3NlZFBhdGg6ZnVuY3Rpb24oKXt0aGlzLnFhfHxcbih0aGlzLnFhPVphKHRoaXMuX190YXJnZXQsdGhpcy5jb21wb3NlZCkpO3JldHVybiB0aGlzLnFhfSxnZXQgdGFyZ2V0KCl7cmV0dXJuIG1jKHRoaXMuY3VycmVudFRhcmdldCx0aGlzLmNvbXBvc2VkUGF0aCgpKX0sZ2V0IHJlbGF0ZWRUYXJnZXQoKXtpZighdGhpcy5yYSlyZXR1cm4gbnVsbDt0aGlzLnNhfHwodGhpcy5zYT1aYSh0aGlzLnJhLCEwKSk7cmV0dXJuIG1jKHRoaXMuY3VycmVudFRhcmdldCx0aGlzLnNhKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7RXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbi5jYWxsKHRoaXMpO3RoaXMuZmE9ITB9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe0V2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24uY2FsbCh0aGlzKTt0aGlzLmZhPXRoaXMuS2E9ITB9fSxhYj17Zm9jdXM6ITAsYmx1cjohMH0sWmQ9JGEod2luZG93LkV2ZW50KSwkZD0kYSh3aW5kb3cuQ3VzdG9tRXZlbnQpLGFlPVxuJGEod2luZG93Lk1vdXNlRXZlbnQpLEhiPXt9O2wucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUpO2wucHJvdG90eXBlLkY9ZnVuY3Rpb24oYSxiKXt0aGlzLk1hPVwiU2hhZHlSb290XCI7a2EoYSk7a2EodGhpcyk7dGhpcy5ob3N0PWE7dGhpcy5IPWImJmIubW9kZTthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTthLl9fc2hhZHkucm9vdD10aGlzO2EuX19zaGFkeS5mYj1cImNsb3NlZFwiIT09dGhpcy5IP3RoaXM6bnVsbDt0aGlzLlA9ITE7dGhpcy5iPVtdO3RoaXMuYT17fTt0aGlzLmM9W107Yj1TKGEpO2Zvcih2YXIgYz0wLGQ9Yi5sZW5ndGg7YzxkO2MrKyliYS5jYWxsKGEsYltjXSl9O2wucHJvdG90eXBlLkw9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3RoaXMuUHx8KHRoaXMuUD0hMCxOYihmdW5jdGlvbigpe3JldHVybiBhLnZhKCl9KSl9O2wucHJvdG90eXBlLks9ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcyxiPXRoaXM7YjspYi5QJiYoYT1iKSxcbmI9Yi5VYSgpO3JldHVybiBhfTtsLnByb3RvdHlwZS5VYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuaG9zdC5nZXRSb290Tm9kZSgpO2lmKEcoYSkpZm9yKHZhciBiPXRoaXMuaG9zdC5jaGlsZE5vZGVzLGM9MCxkO2M8Yi5sZW5ndGg7YysrKWlmKGQ9YltjXSx0aGlzLmooZCkpcmV0dXJuIGF9O2wucHJvdG90eXBlLnZhPWZ1bmN0aW9uKCl7dGhpcy5QJiZ0aGlzLksoKS5fcmVuZGVyUm9vdCgpfTtsLnByb3RvdHlwZS5fcmVuZGVyUm9vdD1mdW5jdGlvbigpe3RoaXMuUD0hMTt0aGlzLkIoKTt0aGlzLnMoKX07bC5wcm90b3R5cGUuQj1mdW5jdGlvbigpe3RoaXMuZigpO2Zvcih2YXIgYT0wLGI7YTx0aGlzLmIubGVuZ3RoO2ErKyliPXRoaXMuYlthXSx0aGlzLm8oYik7Zm9yKGI9dGhpcy5ob3N0LmZpcnN0Q2hpbGQ7YjtiPWIubmV4dFNpYmxpbmcpdGhpcy5oKGIpO2ZvcihhPTA7YTx0aGlzLmIubGVuZ3RoO2ErKyl7Yj10aGlzLmJbYV07aWYoIWIuX19zaGFkeS5hc3NpZ25lZE5vZGVzLmxlbmd0aClmb3IodmFyIGM9XG5iLmZpcnN0Q2hpbGQ7YztjPWMubmV4dFNpYmxpbmcpdGhpcy5oKGMsYik7Yz1iLnBhcmVudE5vZGU7KGM9Yy5fX3NoYWR5JiZjLl9fc2hhZHkucm9vdCkmJmMudGEoKSYmYy5fcmVuZGVyUm9vdCgpO3RoaXMuZyhiLl9fc2hhZHkuUixiLl9fc2hhZHkuYXNzaWduZWROb2Rlcyk7aWYoYz1iLl9fc2hhZHkudWEpe2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKWNbZF0uX19zaGFkeS5pYT1udWxsO2IuX19zaGFkeS51YT1udWxsO2MubGVuZ3RoPmIuX19zaGFkeS5hc3NpZ25lZE5vZGVzLmxlbmd0aCYmKGIuX19zaGFkeS5rYT0hMCl9Yi5fX3NoYWR5LmthJiYoYi5fX3NoYWR5LmthPSExLHRoaXMuaShiKSl9fTtsLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEsYil7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307dmFyIGM9YS5fX3NoYWR5LmlhO2EuX19zaGFkeS5pYT1udWxsO2J8fChiPShiPXRoaXMuYVthLnNsb3R8fFwiX19jYXRjaGFsbFwiXSkmJmJbMF0pO2I/KGIuX19zaGFkeS5hc3NpZ25lZE5vZGVzLnB1c2goYSksXG5hLl9fc2hhZHkuYXNzaWduZWRTbG90PWIpOmEuX19zaGFkeS5hc3NpZ25lZFNsb3Q9dm9pZCAwO2MhPT1hLl9fc2hhZHkuYXNzaWduZWRTbG90JiZhLl9fc2hhZHkuYXNzaWduZWRTbG90JiYoYS5fX3NoYWR5LmFzc2lnbmVkU2xvdC5fX3NoYWR5LmthPSEwKX07bC5wcm90b3R5cGUubz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fc2hhZHkuYXNzaWduZWROb2RlczthLl9fc2hhZHkuYXNzaWduZWROb2Rlcz1bXTthLl9fc2hhZHkuUj1bXTtpZihhLl9fc2hhZHkudWE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXTtkLl9fc2hhZHkuaWE9ZC5fX3NoYWR5LmFzc2lnbmVkU2xvdDtkLl9fc2hhZHkuYXNzaWduZWRTbG90PT09YSYmKGQuX19zaGFkeS5hc3NpZ25lZFNsb3Q9bnVsbCl9fTtsLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZDtjPGIubGVuZ3RoJiYoZD1iW2NdKTtjKyspXCJzbG90XCI9PWQubG9jYWxOYW1lP3RoaXMuZyhhLGQuX19zaGFkeS5hc3NpZ25lZE5vZGVzKTpcbmEucHVzaChiW2NdKX07bC5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXtqYi5jYWxsKGEsbmV3IEV2ZW50KFwic2xvdGNoYW5nZVwiKSk7YS5fX3NoYWR5LmFzc2lnbmVkU2xvdCYmdGhpcy5pKGEuX19zaGFkeS5hc3NpZ25lZFNsb3QpfTtsLnByb3RvdHlwZS5zPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMuYixiPVtdLGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXS5wYXJlbnROb2RlO2QuX19zaGFkeSYmZC5fX3NoYWR5LnJvb3R8fCEoMD5iLmluZGV4T2YoZCkpfHxiLnB1c2goZCl9Zm9yKGE9MDthPGIubGVuZ3RoO2ErKyljPWJbYV0sdGhpcy5PKGM9PT10aGlzP3RoaXMuaG9zdDpjLHRoaXMudyhjKSl9O2wucHJvdG90eXBlLnc9ZnVuY3Rpb24oYSl7dmFyIGI9W107YT1hLmNoaWxkTm9kZXM7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY107aWYodGhpcy5qKGQpKXtkPWQuX19zaGFkeS5SO2Zvcih2YXIgZT0wO2U8ZC5sZW5ndGg7ZSsrKWIucHVzaChkW2VdKX1lbHNlIGIucHVzaChkKX1yZXR1cm4gYn07XG5sLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEpe3JldHVyblwic2xvdFwiPT1hLmxvY2FsTmFtZX07bC5wcm90b3R5cGUuTz1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1TKGEpLGQ9SWQoYixiLmxlbmd0aCxjLGMubGVuZ3RoKSxlPTAsZj0wLGs7ZTxkLmxlbmd0aCYmKGs9ZFtlXSk7ZSsrKXtmb3IodmFyIGc9MCxsO2c8ay5VLmxlbmd0aCYmKGw9ay5VW2ddKTtnKyspVShsKT09PWEmJmJhLmNhbGwoYSxsKSxjLnNwbGljZShrLmluZGV4K2YsMSk7Zi09ay5XfWZvcihlPTA7ZTxkLmxlbmd0aCYmKGs9ZFtlXSk7ZSsrKWZvcihmPWNbay5pbmRleF0sZz1rLmluZGV4O2c8ay5pbmRleCtrLlc7ZysrKWw9YltnXSxYYS5jYWxsKGEsbCxmKSxjLnNwbGljZShnLDAsbCl9O2wucHJvdG90eXBlLlFhPWZ1bmN0aW9uKGEpe3RoaXMuYy5wdXNoLmFwcGx5KHRoaXMuYyxbXS5jb25jYXQoYSBpbnN0YW5jZW9mIEFycmF5P2E6aGQoZ2QoYSkpKSl9O2wucHJvdG90eXBlLmY9ZnVuY3Rpb24oKXt0aGlzLmMubGVuZ3RoJiZcbih0aGlzLkcodGhpcy5jKSx0aGlzLmM9W10pfTtsLnByb3RvdHlwZS5HPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY107ZC5fX3NoYWR5PWQuX19zaGFkeXx8e307a2EoZCk7a2EoZC5wYXJlbnROb2RlKTt2YXIgZT10aGlzLmwoZCk7dGhpcy5hW2VdPyhiPWJ8fHt9LGJbZV09ITAsdGhpcy5hW2VdLnB1c2goZCkpOnRoaXMuYVtlXT1bZF07dGhpcy5iLnB1c2goZCl9aWYoYilmb3IodmFyIGYgaW4gYil0aGlzLmFbZl09dGhpcy5tKHRoaXMuYVtmXSl9O2wucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSl7dmFyIGI9YS5uYW1lfHxhLmdldEF0dHJpYnV0ZShcIm5hbWVcIil8fFwiX19jYXRjaGFsbFwiO3JldHVybiBhLk9hPWJ9O2wucHJvdG90eXBlLm09ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc29ydChmdW5jdGlvbihhLGMpe2E9eGMoYSk7Zm9yKHZhciBiPXhjKGMpLGU9MDtlPGEubGVuZ3RoO2UrKyl7Yz1hW2VdO3ZhciBmPWJbZV07aWYoYyE9PWYpcmV0dXJuIGE9XG5BcnJheS5mcm9tKGMucGFyZW50Tm9kZS5jaGlsZE5vZGVzKSxhLmluZGV4T2YoYyktYS5pbmRleE9mKGYpfX0pfTtsLnByb3RvdHlwZS5UYT1mdW5jdGlvbihhKXt0aGlzLmYoKTt2YXIgYj10aGlzLmEsYztmb3IoYyBpbiBiKWZvcih2YXIgZD1iW2NdLGU9MDtlPGQubGVuZ3RoO2UrKyl7dmFyIGY9ZFtlXTtpZihNYihhLGYpKXtkLnNwbGljZShlLDEpO3ZhciBrPXRoaXMuYi5pbmRleE9mKGYpOzA8PWsmJnRoaXMuYi5zcGxpY2UoaywxKTtlLS07dGhpcy5JKGYpO2s9ITB9fXJldHVybiBrfTtsLnByb3RvdHlwZS5WYT1mdW5jdGlvbihhKXt2YXIgYj1hLk9hLGM9dGhpcy5sKGEpO2lmKGMhPT1iKXtiPXRoaXMuYVtiXTt2YXIgZD1iLmluZGV4T2YoYSk7MDw9ZCYmYi5zcGxpY2UoZCwxKTtiPXRoaXMuYVtjXXx8KHRoaXMuYVtjXT1bXSk7Yi5wdXNoKGEpOzE8Yi5sZW5ndGgmJih0aGlzLmFbY109dGhpcy5tKGIpKX19O2wucHJvdG90eXBlLkk9ZnVuY3Rpb24oYSl7aWYoYT1hLl9fc2hhZHkuUilmb3IodmFyIGI9XG4wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdLGQ9VShjKTtkJiZiYS5jYWxsKGQsYyl9fTtsLnByb3RvdHlwZS50YT1mdW5jdGlvbigpe3RoaXMuZigpO3JldHVybiEhdGhpcy5iLmxlbmd0aH07bC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyl7XCJvYmplY3RcIiE9PXR5cGVvZiBjJiYoYz17Y2FwdHVyZTohIWN9KTtjLmdhPXRoaXM7dGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoYSxiLGMpfTtsLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXtcIm9iamVjdFwiIT09dHlwZW9mIGMmJihjPXtjYXB0dXJlOiEhY30pO2MuZ2E9dGhpczt0aGlzLmhvc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyl9O2wucHJvdG90eXBlLmdldEVsZW1lbnRCeUlkPWZ1bmN0aW9uKGEpe3JldHVybiBuYSh0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBiLmlkPT1hfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH07KGZ1bmN0aW9uKGEpe0soYSxcblNhLCEwKTtLKGEsVGEsITApfSkobC5wcm90b3R5cGUpO3ZhciBNZD17YWRkRXZlbnRMaXN0ZW5lcjpwYy5iaW5kKHdpbmRvdykscmVtb3ZlRXZlbnRMaXN0ZW5lcjp0Yy5iaW5kKHdpbmRvdyl9LExkPXthZGRFdmVudExpc3RlbmVyOnBjLHJlbW92ZUV2ZW50TGlzdGVuZXI6dGMsYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFVhKHRoaXMsYSl9LGluc2VydEJlZm9yZTpmdW5jdGlvbihhLGIpe3JldHVybiBVYSh0aGlzLGEsYil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKGEpe3JldHVybiBWYSh0aGlzLGEpfSxyZXBsYWNlQ2hpbGQ6ZnVuY3Rpb24oYSxiKXtVYSh0aGlzLGEsYik7VmEodGhpcyxiKTtyZXR1cm4gYX0sY2xvbmVOb2RlOmZ1bmN0aW9uKGEpe2lmKFwidGVtcGxhdGVcIj09dGhpcy5sb2NhbE5hbWUpdmFyIGI9aWIuY2FsbCh0aGlzLGEpO2Vsc2UgaWYoYj1pYi5jYWxsKHRoaXMsITEpLGEpe2E9dGhpcy5jaGlsZE5vZGVzO2Zvcih2YXIgYz0wLGQ7YzxhLmxlbmd0aDtjKyspZD1cbmFbY10uY2xvbmVOb2RlKCEwKSxiLmFwcGVuZENoaWxkKGQpfXJldHVybiBifSxnZXRSb290Tm9kZTpmdW5jdGlvbigpe3JldHVybiBnYyh0aGlzKX0sY29udGFpbnM6ZnVuY3Rpb24oYSl7cmV0dXJuIE1iKHRoaXMsYSl9LGdldCBpc0Nvbm5lY3RlZCgpe3ZhciBhPXRoaXMub3duZXJEb2N1bWVudDtpZihWZCYmY2EuY2FsbChhLHRoaXMpfHxhLmRvY3VtZW50RWxlbWVudCYmY2EuY2FsbChhLmRvY3VtZW50RWxlbWVudCx0aGlzKSlyZXR1cm4hMDtmb3IoYT10aGlzO2EmJiEoYSBpbnN0YW5jZW9mIERvY3VtZW50KTspYT1hLnBhcmVudE5vZGV8fChhIGluc3RhbmNlb2YgbD9hLmhvc3Q6dm9pZCAwKTtyZXR1cm4hIShhJiZhIGluc3RhbmNlb2YgRG9jdW1lbnQpfSxkaXNwYXRjaEV2ZW50OmZ1bmN0aW9uKGEpe21hKCk7cmV0dXJuIGpiLmNhbGwodGhpcyxhKX19LE5kPXtnZXQgYXNzaWduZWRTbG90KCl7cmV0dXJuIHljKHRoaXMpfX0sYmI9e3F1ZXJ5U2VsZWN0b3I6ZnVuY3Rpb24oYSl7cmV0dXJuIG5hKHRoaXMsXG5mdW5jdGlvbihiKXtyZXR1cm4gTWMuY2FsbChiLGEpfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH0scXVlcnlTZWxlY3RvckFsbDpmdW5jdGlvbihhKXtyZXR1cm4gbmEodGhpcyxmdW5jdGlvbihiKXtyZXR1cm4gTWMuY2FsbChiLGEpfSl9fSxCYz17YXNzaWduZWROb2RlczpmdW5jdGlvbihhKXtpZihcInNsb3RcIj09PXRoaXMubG9jYWxOYW1lKXJldHVybiBpYyh0aGlzKSx0aGlzLl9fc2hhZHk/KGEmJmEuZmxhdHRlbj90aGlzLl9fc2hhZHkuUjp0aGlzLl9fc2hhZHkuYXNzaWduZWROb2Rlcyl8fFtdOltdfX0semM9TmEoe3NldEF0dHJpYnV0ZTpmdW5jdGlvbihhLGIpe2pjKHRoaXMsYSxiKX0scmVtb3ZlQXR0cmlidXRlOmZ1bmN0aW9uKGEpe05jLmNhbGwodGhpcyxhKTtmYyh0aGlzLGEpfSxhdHRhY2hTaGFkb3c6ZnVuY3Rpb24oYSl7aWYoIXRoaXMpdGhyb3dcIk11c3QgcHJvdmlkZSBhIGhvc3QuXCI7aWYoIWEpdGhyb3dcIk5vdCBlbm91Z2ggYXJndW1lbnRzLlwiO3JldHVybiBuZXcgbChIYixcbnRoaXMsYSl9LGdldCBzbG90KCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwic2xvdFwiKX0sc2V0IHNsb3QoYSl7amModGhpcyxcInNsb3RcIixhKX0sZ2V0IGFzc2lnbmVkU2xvdCgpe3JldHVybiB5Yyh0aGlzKX19LGJiLEJjKTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyh6YyxPYyk7dmFyIEFjPU5hKHtpbXBvcnROb2RlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGxjKGEsYil9LGdldEVsZW1lbnRCeUlkOmZ1bmN0aW9uKGEpe3JldHVybiBuYSh0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBiLmlkPT1hfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH19LGJiKTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhBYyx7X2FjdGl2ZUVsZW1lbnQ6VGEuYWN0aXZlRWxlbWVudH0pO3ZhciBiZT1IVE1MRWxlbWVudC5wcm90b3R5cGUuYmx1cixPZD1OYSh7Ymx1cjpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5LnJvb3Q7KGE9YSYmYS5hY3RpdmVFbGVtZW50KT9cbmEuYmx1cigpOmJlLmNhbGwodGhpcyl9fSk7RS56YSYmKHdpbmRvdy5TaGFkeURPTT17aW5Vc2U6RS56YSxwYXRjaDpmdW5jdGlvbihhKXtyZXR1cm4gYX0saXNTaGFkeVJvb3Q6RyxlbnF1ZXVlOk5iLGZsdXNoOm1hLHNldHRpbmdzOkUsZmlsdGVyTXV0YXRpb25zOkJkLG9ic2VydmVDaGlsZHJlbjp6ZCx1bm9ic2VydmVDaGlsZHJlbjp5ZCxuYXRpdmVNZXRob2RzOldkLG5hdGl2ZVRyZWU6WGR9LHdpbmRvdy5FdmVudD1aZCx3aW5kb3cuQ3VzdG9tRXZlbnQ9JGQsd2luZG93Lk1vdXNlRXZlbnQ9YWUsSGQoKSxLZCgpLHdpbmRvdy5TaGFkb3dSb290PWwpO3ZhciBQZD1uZXcgU2V0KFwiYW5ub3RhdGlvbi14bWwgY29sb3ItcHJvZmlsZSBmb250LWZhY2UgZm9udC1mYWNlLXNyYyBmb250LWZhY2UtdXJpIGZvbnQtZmFjZS1mb3JtYXQgZm9udC1mYWNlLW5hbWUgbWlzc2luZy1nbHlwaFwiLnNwbGl0KFwiIFwiKSk7Qi5wcm90b3R5cGUuQj1mdW5jdGlvbihhLGIpe3RoaXMuby5zZXQoYSxiKTtcbnRoaXMubS5zZXQoYi5jb25zdHJ1Y3RvcixiKX07Qi5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vLmdldChhKX07Qi5wcm90b3R5cGUudz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5tLmdldChhKX07Qi5wcm90b3R5cGUucz1mdW5jdGlvbihhKXt0aGlzLmg9ITA7dGhpcy5qLnB1c2goYSl9O0IucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpczt0aGlzLmgmJk8oYSxmdW5jdGlvbihhKXtyZXR1cm4gYi5nKGEpfSl9O0IucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7aWYodGhpcy5oJiYhYS5fX0NFX3BhdGNoZWQpe2EuX19DRV9wYXRjaGVkPSEwO2Zvcih2YXIgYj0wO2I8dGhpcy5qLmxlbmd0aDtiKyspdGhpcy5qW2JdKGEpfX07Qi5wcm90b3R5cGUuYj1mdW5jdGlvbihhKXt2YXIgYj1bXTtPKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIucHVzaChhKX0pO2ZvcihhPTA7YTxiLmxlbmd0aDthKyspe3ZhciBjPWJbYV07MT09PWMuX19DRV9zdGF0ZT90aGlzLmNvbm5lY3RlZENhbGxiYWNrKGMpOlxudGhpcy5pKGMpfX07Qi5wcm90b3R5cGUuYT1mdW5jdGlvbihhKXt2YXIgYj1bXTtPKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIucHVzaChhKX0pO2ZvcihhPTA7YTxiLmxlbmd0aDthKyspe3ZhciBjPWJbYV07MT09PWMuX19DRV9zdGF0ZSYmdGhpcy5kaXNjb25uZWN0ZWRDYWxsYmFjayhjKX19O0IucHJvdG90eXBlLmY9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO2I9Yj9iOnt9O3ZhciBkPWIua2J8fG5ldyBTZXQsZT1iLkRhfHxmdW5jdGlvbihhKXtyZXR1cm4gYy5pKGEpfSxmPVtdO08oYSxmdW5jdGlvbihhKXtpZihcImxpbmtcIj09PWEubG9jYWxOYW1lJiZcImltcG9ydFwiPT09YS5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpe3ZhciBiPWEuaW1wb3J0O2IgaW5zdGFuY2VvZiBOb2RlJiZcImNvbXBsZXRlXCI9PT1iLnJlYWR5U3RhdGU/KGIuX19DRV9pc0ltcG9ydERvY3VtZW50PSEwLGIuX19DRV9oYXNSZWdpc3RyeT0hMCk6YS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7dmFyIGI9XG5hLmltcG9ydDtpZighYi5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQpe2IuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkPSEwO2IuX19DRV9pc0ltcG9ydERvY3VtZW50PSEwO2IuX19DRV9oYXNSZWdpc3RyeT0hMDt2YXIgZj1uZXcgU2V0KGQpO2YuZGVsZXRlKGIpO2MuZihiLHtrYjpmLERhOmV9KX19KX1lbHNlIGYucHVzaChhKX0sZCk7aWYodGhpcy5oKWZvcihhPTA7YTxmLmxlbmd0aDthKyspdGhpcy5nKGZbYV0pO2ZvcihhPTA7YTxmLmxlbmd0aDthKyspZShmW2FdKX07Qi5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXtpZih2b2lkIDA9PT1hLl9fQ0Vfc3RhdGUpe3ZhciBiPXRoaXMuYyhhLmxvY2FsTmFtZSk7aWYoYil7Yi5jb25zdHJ1Y3Rpb25TdGFjay5wdXNoKGEpO3ZhciBjPWIuY29uc3RydWN0b3I7dHJ5e3RyeXtpZihuZXcgYyE9PWEpdGhyb3cgRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IgZGlkIG5vdCBwcm9kdWNlIHRoZSBlbGVtZW50IGJlaW5nIHVwZ3JhZGVkLlwiKTtcbn1maW5hbGx5e2IuY29uc3RydWN0aW9uU3RhY2sucG9wKCl9fWNhdGNoKGYpe3Rocm93IGEuX19DRV9zdGF0ZT0yLGY7fWEuX19DRV9zdGF0ZT0xO2EuX19DRV9kZWZpbml0aW9uPWI7aWYoYi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spZm9yKGI9Yi5vYnNlcnZlZEF0dHJpYnV0ZXMsYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdLGU9YS5nZXRBdHRyaWJ1dGUoZCk7bnVsbCE9PWUmJnRoaXMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGEsZCxudWxsLGUsbnVsbCl9dChhKSYmdGhpcy5jb25uZWN0ZWRDYWxsYmFjayhhKX19fTtCLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtiLmNvbm5lY3RlZENhbGxiYWNrJiZiLmNvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9O0IucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPWEuX19DRV9kZWZpbml0aW9uO2IuZGlzY29ubmVjdGVkQ2FsbGJhY2smJlxuYi5kaXNjb25uZWN0ZWRDYWxsYmFjay5jYWxsKGEpfTtCLnByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1hLl9fQ0VfZGVmaW5pdGlvbjtmLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayYmLTE8Zi5vYnNlcnZlZEF0dHJpYnV0ZXMuaW5kZXhPZihiKSYmZi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2suY2FsbChhLGIsYyxkLGUpfTtKYS5wcm90b3R5cGUuYz1mdW5jdGlvbigpe3RoaXMuTSYmdGhpcy5NLmRpc2Nvbm5lY3QoKX07SmEucHJvdG90eXBlLmY9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hLnJlYWR5U3RhdGU7XCJpbnRlcmFjdGl2ZVwiIT09YiYmXCJjb21wbGV0ZVwiIT09Ynx8dGhpcy5jKCk7Zm9yKGI9MDtiPGEubGVuZ3RoO2IrKylmb3IodmFyIGM9YVtiXS5hZGRlZE5vZGVzLGQ9MDtkPGMubGVuZ3RoO2QrKyl0aGlzLmIuZihjW2RdKX07R2IucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXtpZih0aGlzLmEpdGhyb3cgRXJyb3IoXCJBbHJlYWR5IHJlc29sdmVkLlwiKTtcbnRoaXMuYT12b2lkIDA7dGhpcy5iJiZ0aGlzLmIodm9pZCAwKX07eS5wcm90b3R5cGUuZGVmaW5lPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztpZighKGIgaW5zdGFuY2VvZiBGdW5jdGlvbikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9ycyBtdXN0IGJlIGZ1bmN0aW9ucy5cIik7aWYoIUNjKGEpKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSBlbGVtZW50IG5hbWUgJ1wiK2ErXCInIGlzIG5vdCB2YWxpZC5cIik7aWYodGhpcy5hLmMoYSkpdGhyb3cgRXJyb3IoXCJBIGN1c3RvbSBlbGVtZW50IHdpdGggbmFtZSAnXCIrYStcIicgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLlwiKTtpZih0aGlzLmMpdGhyb3cgRXJyb3IoXCJBIGN1c3RvbSBlbGVtZW50IGlzIGFscmVhZHkgYmVpbmcgZGVmaW5lZC5cIik7dGhpcy5jPSEwO3RyeXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1lW2FdO2lmKHZvaWQgMCE9PWImJiEoYiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSl0aHJvdyBFcnJvcihcIlRoZSAnXCIrXG5hK1wiJyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO3JldHVybiBifSxlPWIucHJvdG90eXBlO2lmKCEoZSBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcidzIHByb3RvdHlwZSBpcyBub3QgYW4gb2JqZWN0LlwiKTt2YXIgZj1kKFwiY29ubmVjdGVkQ2FsbGJhY2tcIik7dmFyIGc9ZChcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIpO3ZhciBoPWQoXCJhZG9wdGVkQ2FsbGJhY2tcIik7dmFyIGw9ZChcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiKTt2YXIgbj1iLm9ic2VydmVkQXR0cmlidXRlc3x8W119Y2F0Y2gobSl7cmV0dXJufWZpbmFsbHl7dGhpcy5jPSExfWI9e2xvY2FsTmFtZTphLGNvbnN0cnVjdG9yOmIsY29ubmVjdGVkQ2FsbGJhY2s6ZixkaXNjb25uZWN0ZWRDYWxsYmFjazpnLGFkb3B0ZWRDYWxsYmFjazpoLGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjazpsLG9ic2VydmVkQXR0cmlidXRlczpuLGNvbnN0cnVjdGlvblN0YWNrOltdfTtcbnRoaXMuYS5CKGEsYik7dGhpcy5nLnB1c2goYik7dGhpcy5ifHwodGhpcy5iPSEwLHRoaXMuZihmdW5jdGlvbigpe3JldHVybiBjLmooKX0pKX07eS5wcm90b3R5cGUuaj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7aWYoITEhPT10aGlzLmIpe3RoaXMuYj0hMTtmb3IodmFyIGI9dGhpcy5nLGM9W10sZD1uZXcgTWFwLGU9MDtlPGIubGVuZ3RoO2UrKylkLnNldChiW2VdLmxvY2FsTmFtZSxbXSk7dGhpcy5hLmYoZG9jdW1lbnQse0RhOmZ1bmN0aW9uKGIpe2lmKHZvaWQgMD09PWIuX19DRV9zdGF0ZSl7dmFyIGU9Yi5sb2NhbE5hbWUsZj1kLmdldChlKTtmP2YucHVzaChiKTphLmEuYyhlKSYmYy5wdXNoKGIpfX19KTtmb3IoZT0wO2U8Yy5sZW5ndGg7ZSsrKXRoaXMuYS5pKGNbZV0pO2Zvcig7MDxiLmxlbmd0aDspe3ZhciBmPWIuc2hpZnQoKTtlPWYubG9jYWxOYW1lO2Y9ZC5nZXQoZi5sb2NhbE5hbWUpO2Zvcih2YXIgZz0wO2c8Zi5sZW5ndGg7ZysrKXRoaXMuYS5pKGZbZ10pOyhlPXRoaXMuaC5nZXQoZSkpJiZcbmUuYygpfX19O3kucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtpZihhPXRoaXMuYS5jKGEpKXJldHVybiBhLmNvbnN0cnVjdG9yfTt5LnByb3RvdHlwZS53aGVuRGVmaW5lZD1mdW5jdGlvbihhKXtpZighQ2MoYSkpcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBTeW50YXhFcnJvcihcIidcIithK1wiJyBpcyBub3QgYSB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lLlwiKSk7dmFyIGI9dGhpcy5oLmdldChhKTtpZihiKXJldHVybiBiLmY7Yj1uZXcgR2I7dGhpcy5oLnNldChhLGIpO3RoaXMuYS5jKGEpJiYhdGhpcy5nLnNvbWUoZnVuY3Rpb24oYil7cmV0dXJuIGIubG9jYWxOYW1lPT09YX0pJiZiLmMoKTtyZXR1cm4gYi5mfTt5LnByb3RvdHlwZS5sPWZ1bmN0aW9uKGEpe3RoaXMuaS5jKCk7dmFyIGI9dGhpcy5mO3RoaXMuZj1mdW5jdGlvbihjKXtyZXR1cm4gYShmdW5jdGlvbigpe3JldHVybiBiKGMpfSl9fTt3aW5kb3cuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5PXk7eS5wcm90b3R5cGUuZGVmaW5lPVxueS5wcm90b3R5cGUuZGVmaW5lO3kucHJvdG90eXBlLmdldD15LnByb3RvdHlwZS5nZXQ7eS5wcm90b3R5cGUud2hlbkRlZmluZWQ9eS5wcm90b3R5cGUud2hlbkRlZmluZWQ7eS5wcm90b3R5cGUucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaz15LnByb3RvdHlwZS5sO3ZhciBFYT13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQsdGQ9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50TlMsc2Q9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlLHVkPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUucHJlcGVuZCx2ZD13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmFwcGVuZCxjZT13aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUucHJlcGVuZCxkZT13aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUuYXBwZW5kLHdiPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5jbG9uZU5vZGUsaWE9d2luZG93Lk5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkLFxuRGI9d2luZG93Lk5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZSxGYT13aW5kb3cuTm9kZS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQsRWI9d2luZG93Lk5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCxJYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5Ob2RlLnByb3RvdHlwZSxcInRleHRDb250ZW50XCIpLHZiPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3csQ2E9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksR2E9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZSx4Yj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlLHpiPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsamE9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZU5TLHliPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVOUyxcbkFiPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGVOUyxDYj13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50LGpkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5wcmVwZW5kLGtkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hcHBlbmQsbWQ9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmJlZm9yZSxuZD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWZ0ZXIsb2Q9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VXaXRoLHBkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUseGQ9d2luZG93LkhUTUxFbGVtZW50LERhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSxCYj13aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudCxGYj1uZXcgZnVuY3Rpb24oKXt9LHRhPXdpbmRvdy5jdXN0b21FbGVtZW50cztcbmlmKCF0YXx8dGEuZm9yY2VQb2x5ZmlsbHx8XCJmdW5jdGlvblwiIT10eXBlb2YgdGEuZGVmaW5lfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiB0YS5nZXQpe3ZhciBZPW5ldyBCO3dkKFkpO3JkKFkpO0hhKFksRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUse1o6Y2UsYXBwZW5kOmRlfSk7cWQoWSk7aWQoWSk7ZG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT0hMDt2YXIgZWU9bmV3IHkoWSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdyxcImN1c3RvbUVsZW1lbnRzXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOmVlfSl9dmFyIEk9e1NUWUxFX1JVTEU6MSxkYTo3LE1FRElBX1JVTEU6NCxuYToxRTN9LEY9e1lhOi9cXC9cXCpbXipdKlxcKisoW14vKl1bXipdKlxcKispKlxcLy9naW0scG9ydDovQGltcG9ydFteO10qOy9naW0sd2E6Lyg/Ol5bXjtcXC1cXHN9XSspPy0tW147e31dKj86W157fTtdKj8oPzpbO1xcbl18JCkvZ2ltLEFhOi8oPzpeW147XFwtXFxzfV0rKT8tLVteO3t9XSo/Oltee307XSo/e1tefV0qP30oPzpbO1xcbl18JCk/L2dpbSxcbmViOi9AYXBwbHlcXHMqXFwoP1teKTtdKlxcKT9cXHMqKD86WztcXG5dfCQpPy9naW0samI6L1teOzpdKj86W147XSo/dmFyXFwoW147XSpcXCkoPzpbO1xcbl18JCk/L2dpbSxjYjovXkBbXlxcc10qa2V5ZnJhbWVzLyxCYTovXFxzKy9nfSx6PSEod2luZG93LlNoYWR5RE9NJiZ3aW5kb3cuU2hhZHlET00uaW5Vc2UpO2lmKHdpbmRvdy5TaGFkeUNTUyYmdm9pZCAwIT09d2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzcyl2YXIgQT13aW5kb3cuU2hhZHlDU1MubmF0aXZlQ3NzO2Vsc2Ugd2luZG93LlNoYWR5Q1NTPyhGYyh3aW5kb3cuU2hhZHlDU1MpLHdpbmRvdy5TaGFkeUNTUz12b2lkIDApOkZjKHdpbmRvdy5XZWJDb21wb25lbnRzJiZ3aW5kb3cuV2ViQ29tcG9uZW50cy5mbGFncyk7dmFyIHVhPS8oPzpefFs7XFxze11cXHMqKSgtLVtcXHctXSo/KVxccyo6XFxzKig/OigoPzonKD86XFxcXCd8LikqPyd8XCIoPzpcXFxcXCJ8LikqP1wifFxcKFteKV0qP1xcKXxbXn07e10pKyl8XFx7KFtefV0qKVxcfSg/Oig/PVs7XFxzfV0pfCQpKS9naSxcbnZhPS8oPzpefFxcVyspQGFwcGx5XFxzKlxcKD8oW14pO1xcbl0qKVxcKT8vZ2ksZmU9LygtLVtcXHctXSspXFxzKihbOiw7KV18JCkvZ2ksZ2U9LyhhbmltYXRpb25cXHMqOil8KGFuaW1hdGlvbi1uYW1lXFxzKjopLyxSZD0vQG1lZGlhXFxzKC4qKS8saGU9L1xce1tefV0qXFx9L2csUT1udWxsO3UucHJvdG90eXBlLmI9ZnVuY3Rpb24oYSxiLGMpe2EuX19zdHlsZVNjb3BlZD9hLl9fc3R5bGVTY29wZWQ9bnVsbDp0aGlzLmooYSxifHxcIlwiLGMpfTt1LnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEsYixjKXthLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJnRoaXMuaChhLGIsYyk7aWYoYT1cInRlbXBsYXRlXCI9PT1hLmxvY2FsTmFtZT8oYS5jb250ZW50fHxhLm9iKS5jaGlsZE5vZGVzOmEuY2hpbGRyZW58fGEuY2hpbGROb2Rlcylmb3IodmFyIGQ9MDtkPGEubGVuZ3RoO2QrKyl0aGlzLmooYVtkXSxiLGMpfTt1LnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEsYixjKXtpZihiKWlmKGEuY2xhc3NMaXN0KWM/KGEuY2xhc3NMaXN0LnJlbW92ZShcInN0eWxlLXNjb3BlXCIpLFxuYS5jbGFzc0xpc3QucmVtb3ZlKGIpKTooYS5jbGFzc0xpc3QuYWRkKFwic3R5bGUtc2NvcGVcIiksYS5jbGFzc0xpc3QuYWRkKGIpKTtlbHNlIGlmKGEuZ2V0QXR0cmlidXRlKXt2YXIgZD1hLmdldEF0dHJpYnV0ZShpZSk7Yz9kJiYoYj1kLnJlcGxhY2UoXCJzdHlsZS1zY29wZVwiLFwiXCIpLnJlcGxhY2UoYixcIlwiKSxxYShhLGIpKTpxYShhLChkP2QrXCIgXCI6XCJcIikrXCJzdHlsZS1zY29wZSBcIitiKX19O3UucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEuX19jc3NCdWlsZDt6fHxcInNoYWR5XCI9PT1kP2I9VihiLGMpOihhPVIoYSksYj10aGlzLkcoYixhLmlzLGEuVixjKStcIlxcblxcblwiKTtyZXR1cm4gYi50cmltKCl9O3UucHJvdG90eXBlLkc9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dGhpcy5mKGIsYyk7Yj10aGlzLmkoYik7dmFyIGY9dGhpcztyZXR1cm4gVihhLGZ1bmN0aW9uKGEpe2EuY3x8KGYuSShhLGIsZSksYS5jPSEwKTtkJiZkKGEsYixlKX0pfTt1LnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe3JldHVybiBhP1xuamUrYTpcIlwifTt1LnByb3RvdHlwZS5mPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/XCJbaXM9XCIrYStcIl1cIjphfTt1LnByb3RvdHlwZS5JPWZ1bmN0aW9uKGEsYixjKXt0aGlzLmwoYSx0aGlzLmcsYixjKX07dS5wcm90b3R5cGUubD1mdW5jdGlvbihhLGIsYyxkKXthLnNlbGVjdG9yPWEudj10aGlzLm0oYSxiLGMsZCl9O3UucHJvdG90eXBlLm09ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9YS5zZWxlY3Rvci5zcGxpdChQYyk7aWYoIUdjKGEpKXthPTA7Zm9yKHZhciBmPWUubGVuZ3RoLGc7YTxmJiYoZz1lW2FdKTthKyspZVthXT1iLmNhbGwodGhpcyxnLGMsZCl9cmV0dXJuIGUuam9pbihQYyl9O3UucHJvdG90eXBlLnM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShtYixmdW5jdGlvbihhLGMsZCl7LTE8ZC5pbmRleE9mKFwiK1wiKT9kPWQucmVwbGFjZSgvXFwrL2csXCJfX19cIik6LTE8ZC5pbmRleE9mKFwiX19fXCIpJiYoZD1kLnJlcGxhY2UoL19fXy9nLFwiK1wiKSk7cmV0dXJuXCI6XCIrYytcIihcIitcbmQrXCIpXCJ9KX07dS5wcm90b3R5cGUuZz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcyxlPSExO2E9YS50cmltKCk7dmFyIGY9bWIudGVzdChhKTtmJiYoYT1hLnJlcGxhY2UobWIsZnVuY3Rpb24oYSxiLGMpe3JldHVyblwiOlwiK2IrXCIoXCIrYy5yZXBsYWNlKC9cXHMvZyxcIlwiKStcIilcIn0pLGE9dGhpcy5zKGEpKTthPWEucmVwbGFjZShrZSxuYitcIiAkMVwiKTthPWEucmVwbGFjZShsZSxmdW5jdGlvbihhLGYsZyl7ZXx8KGE9ZC5CKGcsZixiLGMpLGU9ZXx8YS5zdG9wLGY9YS5YYSxnPWEudmFsdWUpO3JldHVybiBmK2d9KTtmJiYoYT10aGlzLnMoYSkpO3JldHVybiBhfTt1LnByb3RvdHlwZS5CPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWEuaW5kZXhPZihvYik7MDw9YS5pbmRleE9mKG5iKT9hPXRoaXMuRihhLGQpOjAhPT1lJiYoYT1jP3RoaXMubyhhLGMpOmEpO2M9ITE7MDw9ZSYmKGI9XCJcIixjPSEwKTtpZihjKXt2YXIgZj0hMDtjJiYoYT1hLnJlcGxhY2UobWUsZnVuY3Rpb24oYSxiKXtyZXR1cm5cIiA+IFwiK1xuYn0pKX1hPWEucmVwbGFjZShuZSxmdW5jdGlvbihhLGIsYyl7cmV0dXJuJ1tkaXI9XCInK2MrJ1wiXSAnK2IrXCIsIFwiK2IrJ1tkaXI9XCInK2MrJ1wiXSd9KTtyZXR1cm57dmFsdWU6YSxYYTpiLHN0b3A6Zn19O3UucHJvdG90eXBlLm89ZnVuY3Rpb24oYSxiKXthPWEuc3BsaXQoUWMpO2FbMF0rPWI7cmV0dXJuIGEuam9pbihRYyl9O3UucHJvdG90eXBlLkY9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLm1hdGNoKFJjKTtyZXR1cm4oYz1jJiZjWzJdLnRyaW0oKXx8XCJcIik/Y1swXS5tYXRjaChTYyk/YS5yZXBsYWNlKFJjLGZ1bmN0aW9uKGEsYyxmKXtyZXR1cm4gYitmfSk6Yy5zcGxpdChTYylbMF09PT1iP2M6b2U6YS5yZXBsYWNlKG5iLGIpfTt1LnByb3RvdHlwZS5IPWZ1bmN0aW9uKGEpe2Euc2VsZWN0b3I9YS5wYXJzZWRTZWxlY3Rvcjt0aGlzLncoYSk7dGhpcy5sKGEsdGhpcy5LKX07dS5wcm90b3R5cGUudz1mdW5jdGlvbihhKXthLnNlbGVjdG9yPT09cGUmJihhLnNlbGVjdG9yPVwiaHRtbFwiKX07XG51LnByb3RvdHlwZS5LPWZ1bmN0aW9uKGEpe3JldHVybiBhLm1hdGNoKG9iKT90aGlzLmcoYSxUYyk6dGhpcy5vKGEudHJpbSgpLFRjKX07Si5PYmplY3QuZGVmaW5lUHJvcGVydGllcyh1LnByb3RvdHlwZSx7YTp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHlsZS1zY29wZVwifX19KTt2YXIgbWI9LzoobnRoWy1cXHddKylcXCgoW14pXSspXFwpLyxUYz1cIjpub3QoLnN0eWxlLXNjb3BlKVwiLFBjPVwiLFwiLGxlPS8oXnxbXFxzPit+XSspKCg/OlxcWy4rP1xcXXxbXlxccz4rfj1bXSkrKS9nLFNjPS9bWy46IypdLyxuYj1cIjpob3N0XCIscGU9XCI6cm9vdFwiLG9iPVwiOjpzbG90dGVkXCIsa2U9bmV3IFJlZ0V4cChcIl4oXCIrb2IrXCIpXCIpLFJjPS8oOmhvc3QpKD86XFwoKCg/OlxcKFteKShdKlxcKXxbXikoXSopKz8pXFwpKS8sbWU9Lyg/Ojo6c2xvdHRlZCkoPzpcXCgoKD86XFwoW14pKF0qXFwpfFteKShdKikrPylcXCkpLyxuZT0vKC4qKTpkaXJcXCgoPzoobHRyfHJ0bCkpXFwpLyxcbmplPVwiLlwiLFFjPVwiOlwiLGllPVwiY2xhc3NcIixvZT1cInNob3VsZF9ub3RfbWF0Y2hcIixwPW5ldyB1O3YuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBhP2EuX19zdHlsZUluZm86bnVsbH07di5zZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5fX3N0eWxlSW5mbz1ifTt2LnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuRH07di5wcm90b3R5cGUuX2dldFN0eWxlUnVsZXM9di5wcm90b3R5cGUuYzt2YXIgVWM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEubWF0Y2hlc3x8YS5tYXRjaGVzU2VsZWN0b3J8fGEubW96TWF0Y2hlc1NlbGVjdG9yfHxhLm1zTWF0Y2hlc1NlbGVjdG9yfHxhLm9NYXRjaGVzU2VsZWN0b3J8fGEud2Via2l0TWF0Y2hlc1NlbGVjdG9yfSh3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpLHFlPW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goXCJUcmlkZW50XCIpO24ucHJvdG90eXBlLkg9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPXt9LGQ9W10sZT0wO1coYSxmdW5jdGlvbihhKXtiLmMoYSk7XG5hLmluZGV4PWUrKztiLkcoYS51LmNzc1RleHQsYyl9LGZ1bmN0aW9uKGEpe2QucHVzaChhKX0pO2EuYj1kO2E9W107Zm9yKHZhciBmIGluIGMpYS5wdXNoKGYpO3JldHVybiBhfTtuLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEpe2lmKCFhLnUpe3ZhciBiPXt9LGM9e307dGhpcy5iKGEsYykmJihiLkM9YyxhLnJ1bGVzPW51bGwpO2IuY3NzVGV4dD10aGlzLkYoYSk7YS51PWJ9fTtuLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS51O2lmKGMpe2lmKGMuQylyZXR1cm4gT2JqZWN0LmFzc2lnbihiLGMuQyksITB9ZWxzZXtjPWEucGFyc2VkQ3NzVGV4dDtmb3IodmFyIGQ7YT11YS5leGVjKGMpOyl7ZD0oYVsyXXx8YVszXSkudHJpbSgpO2lmKFwiaW5oZXJpdFwiIT09ZHx8XCJ1bnNldFwiIT09ZCliW2FbMV0udHJpbSgpXT1kO2Q9ITB9cmV0dXJuIGR9fTtuLnByb3RvdHlwZS5GPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLksoYS5wYXJzZWRDc3NUZXh0KX07bi5wcm90b3R5cGUuSz1mdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKGhlLFxuXCJcIikucmVwbGFjZSh1YSxcIlwiKX07bi5wcm90b3R5cGUuRz1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYztjPWZlLmV4ZWMoYSk7KXt2YXIgZD1jWzFdO1wiOlwiIT09Y1syXSYmKGJbZF09ITApfX07bi5wcm90b3R5cGUuYWE9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpLGM9MCxkO2M8Yi5sZW5ndGg7YysrKWQ9YltjXSxhW2RdPXRoaXMuYShhW2RdLGEpfTtuLnByb3RvdHlwZS5hPWZ1bmN0aW9uKGEsYil7aWYoYSlpZigwPD1hLmluZGV4T2YoXCI7XCIpKWE9dGhpcy5mKGEsYik7ZWxzZXt2YXIgYz10aGlzO2E9SWMoYSxmdW5jdGlvbihhLGUsZixnKXtpZighZSlyZXR1cm4gYStnOyhlPWMuYShiW2VdLGIpKSYmXCJpbml0aWFsXCIhPT1lP1wiYXBwbHktc2hpbS1pbmhlcml0XCI9PT1lJiYoZT1cImluaGVyaXRcIik6ZT1jLmEoYltmXXx8ZixiKXx8ZjtyZXR1cm4gYSsoZXx8XCJcIikrZ30pfXJldHVybiBhJiZhLnRyaW0oKXx8XCJcIn07bi5wcm90b3R5cGUuZj1mdW5jdGlvbihhLFxuYil7YT1hLnNwbGl0KFwiO1wiKTtmb3IodmFyIGM9MCxkLGU7YzxhLmxlbmd0aDtjKyspaWYoZD1hW2NdKXt2YS5sYXN0SW5kZXg9MDtpZihlPXZhLmV4ZWMoZCkpZD10aGlzLmEoYltlWzFdXSxiKTtlbHNlIGlmKGU9ZC5pbmRleE9mKFwiOlwiKSwtMSE9PWUpe3ZhciBmPWQuc3Vic3RyaW5nKGUpO2Y9Zi50cmltKCk7Zj10aGlzLmEoZixiKXx8ZjtkPWQuc3Vic3RyaW5nKDAsZSkrZn1hW2NdPWQmJmQubGFzdEluZGV4T2YoXCI7XCIpPT09ZC5sZW5ndGgtMT9kLnNsaWNlKDAsLTEpOmR8fFwiXCJ9cmV0dXJuIGEuam9pbihcIjtcIil9O24ucHJvdG90eXBlLkI9ZnVuY3Rpb24oYSxiKXt2YXIgYz1cIlwiO2EudXx8dGhpcy5jKGEpO2EudS5jc3NUZXh0JiYoYz10aGlzLmYoYS51LmNzc1RleHQsYikpO2EuY3NzVGV4dD1jfTtuLnByb3RvdHlwZS53PWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5jc3NUZXh0LGQ9YS5jc3NUZXh0O251bGw9PWEueWEmJihhLnlhPWdlLnRlc3QoYykpO2lmKGEueWEpaWYobnVsbD09XG5hLlkpe2EuWT1bXTtmb3IodmFyIGUgaW4gYilkPWJbZV0sZD1kKGMpLGMhPT1kJiYoYz1kLGEuWS5wdXNoKGUpKX1lbHNle2ZvcihlPTA7ZTxhLlkubGVuZ3RoOysrZSlkPWJbYS5ZW2VdXSxjPWQoYyk7ZD1jfWEuY3NzVGV4dD1kfTtuLnByb3RvdHlwZS5PPWZ1bmN0aW9uKGEsYil7dmFyIGM9e30sZD10aGlzLGU9W107VyhhLGZ1bmN0aW9uKGEpe2EudXx8ZC5jKGEpO3ZhciBmPWEudnx8YS5wYXJzZWRTZWxlY3RvcjtiJiZhLnUuQyYmZiYmVWMuY2FsbChiLGYpJiYoZC5iKGEsYyksYT1hLmluZGV4LGY9cGFyc2VJbnQoYS8zMiwxMCksZVtmXT0oZVtmXXx8MCl8MTw8YSUzMil9LG51bGwsITApO3JldHVybntDOmMsa2V5OmV9fTtuLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhLGIsYyxkKXtiLnV8fHRoaXMuYyhiKTtpZihiLnUuQyl7dmFyIGU9UihhKTthPWUuaXM7ZT1lLlY7ZT1hP3AuZihhLGUpOlwiaHRtbFwiO3ZhciBmPWIucGFyc2VkU2VsZWN0b3IsZz1cIjpob3N0ID4gKlwiPT09Znx8XG5cImh0bWxcIj09PWYsaD0wPT09Zi5pbmRleE9mKFwiOmhvc3RcIikmJiFnO1wic2hhZHlcIj09PWMmJihnPWY9PT1lK1wiID4gKi5cIitlfHwtMSE9PWYuaW5kZXhPZihcImh0bWxcIiksaD0hZyYmMD09PWYuaW5kZXhPZihlKSk7XCJzaGFkb3dcIj09PWMmJihnPVwiOmhvc3QgPiAqXCI9PT1mfHxcImh0bWxcIj09PWYsaD1oJiYhZyk7aWYoZ3x8aCljPWUsaCYmKHomJiFiLnYmJihiLnY9cC5tKGIscC5nLHAuaShhKSxlKSksYz1iLnZ8fGUpLGQoe2liOmMsYmI6aCxxYjpnfSl9fTtuLnByb3RvdHlwZS5JPWZ1bmN0aW9uKGEsYil7dmFyIGM9e30sZD17fSxlPXRoaXMsZj1iJiZiLl9fY3NzQnVpbGQ7VyhiLGZ1bmN0aW9uKGIpe2UuY2EoYSxiLGYsZnVuY3Rpb24oZil7VWMuY2FsbChhLnBifHxhLGYuaWIpJiYoZi5iYj9lLmIoYixjKTplLmIoYixkKSl9KX0sbnVsbCwhMCk7cmV0dXJue2diOmQsYWI6Y319O24ucHJvdG90eXBlLmJhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLGU9UihhKSxmPXAuZihlLmlzLFxuZS5WKSxnPW5ldyBSZWdFeHAoXCIoPzpefFteLiNbOl0pXCIrKGEuZXh0ZW5kcz9cIlxcXFxcIitmLnNsaWNlKDAsLTEpK1wiXFxcXF1cIjpmKStcIigkfFsuOltcXFxccz4rfl0pXCIpO2U9di5nZXQoYSkuRDt2YXIgaD10aGlzLmgoZSxjKTtyZXR1cm4gcC5jKGEsZSxmdW5jdGlvbihhKXtkLkIoYSxiKTt6fHxHYyhhKXx8IWEuY3NzVGV4dHx8KGQudyhhLGgpLGQubChhLGcsZixjKSl9KX07bi5wcm90b3R5cGUuaD1mdW5jdGlvbihhLGIpe2E9YS5iO3ZhciBjPXt9O2lmKCF6JiZhKWZvcih2YXIgZD0wLGU9YVtkXTtkPGEubGVuZ3RoO2U9YVsrK2RdKXRoaXMuaihlLGIpLGNbZS5rZXlmcmFtZXNOYW1lXT10aGlzLmkoZSk7cmV0dXJuIGN9O24ucHJvdG90eXBlLmk9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBiLnJlcGxhY2UoYS5mLGEuYSl9fTtuLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEsYil7YS5mPW5ldyBSZWdFeHAoYS5rZXlmcmFtZXNOYW1lLFwiZ1wiKTthLmE9YS5rZXlmcmFtZXNOYW1lK1xuXCItXCIrYjthLnY9YS52fHxhLnNlbGVjdG9yO2Euc2VsZWN0b3I9YS52LnJlcGxhY2UoYS5rZXlmcmFtZXNOYW1lLGEuYSl9O24ucHJvdG90eXBlLmw9ZnVuY3Rpb24oYSxiLGMsZCl7YS52PWEudnx8YS5zZWxlY3RvcjtkPVwiLlwiK2Q7Zm9yKHZhciBlPWEudi5zcGxpdChcIixcIiksZj0wLGc9ZS5sZW5ndGgsaDtmPGcmJihoPWVbZl0pO2YrKyllW2ZdPWgubWF0Y2goYik/aC5yZXBsYWNlKGMsZCk6ZCtcIiBcIitoO2Euc2VsZWN0b3I9ZS5qb2luKFwiLFwiKX07bi5wcm90b3R5cGUubz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIixlPWQ7YyYmKGU9ZC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxccyp4LXNjb3BlXFxcXHMqXCIrYytcIlxcXFxzKlwiLFwiZ1wiKSxcIiBcIikpO2UrPShlP1wiIFwiOlwiXCIpK1wieC1zY29wZSBcIitiO2QhPT1lJiZxYShhLGUpfTtuLnByb3RvdHlwZS5zPWZ1bmN0aW9uKGEsYixjLGQpe2I9ZD9kLnRleHRDb250ZW50fHxcIlwiOnRoaXMuYmEoYSxiLGMpO3ZhciBlPVxudi5nZXQoYSksZj1lLmE7ZiYmIXomJmYhPT1kJiYoZi5fdXNlQ291bnQtLSwwPj1mLl91c2VDb3VudCYmZi5wYXJlbnROb2RlJiZmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZikpO3o/ZS5hPyhlLmEudGV4dENvbnRlbnQ9YixkPWUuYSk6YiYmKGQ9ZWIoYixjLGEuc2hhZG93Um9vdCxlLmIpKTpkP2QucGFyZW50Tm9kZXx8KHFlJiYtMTxiLmluZGV4T2YoXCJAbWVkaWFcIikmJihkLnRleHRDb250ZW50PWIpLEhjKGQsbnVsbCxlLmIpKTpiJiYoZD1lYihiLGMsbnVsbCxlLmIpKTtkJiYoZC5fdXNlQ291bnQ9ZC5fdXNlQ291bnR8fDAsZS5hIT1kJiZkLl91c2VDb3VudCsrLGUuYT1kKTtyZXR1cm4gZH07bi5wcm90b3R5cGUubT1mdW5jdGlvbihhLGIpe3ZhciBjPXBhKGEpLGQ9dGhpczthLnRleHRDb250ZW50PVYoYyxmdW5jdGlvbihhKXt2YXIgYz1hLmNzc1RleHQ9YS5wYXJzZWRDc3NUZXh0O2EudSYmYS51LmNzc1RleHQmJihjPWMucmVwbGFjZShGLndhLFwiXCIpLnJlcGxhY2UoRi5BYSxcblwiXCIpLGEuY3NzVGV4dD1kLmYoYyxiKSl9KX07Si5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhuLnByb3RvdHlwZSx7Zzp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJ4LXNjb3BlXCJ9fX0pO3ZhciBNPW5ldyBuLHBiPXt9LHdhPXdpbmRvdy5jdXN0b21FbGVtZW50cztpZih3YSYmIXope3ZhciByZT13YS5kZWZpbmU7d2EuZGVmaW5lPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1kb2N1bWVudC5jcmVhdGVDb21tZW50KFwiIFNoYWR5IERPTSBzdHlsZXMgZm9yIFwiK2ErXCIgXCIpLGU9ZG9jdW1lbnQuaGVhZDtlLmluc2VydEJlZm9yZShkLChRP1EubmV4dFNpYmxpbmc6bnVsbCl8fGUuZmlyc3RDaGlsZCk7UT1kO3BiW2FdPWQ7cmV0dXJuIHJlLmNhbGwod2EsYSxiLGMpfX1oYS5wcm90b3R5cGUuYT1mdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF07aWYoYS5DW2VdIT09YltlXSlyZXR1cm4hMX1yZXR1cm4hMH07XG5oYS5wcm90b3R5cGUuYj1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT10aGlzLmNhY2hlW2FdfHxbXTtlLnB1c2goe0M6YixzdHlsZUVsZW1lbnQ6YyxBOmR9KTtlLmxlbmd0aD50aGlzLmMmJmUuc2hpZnQoKTt0aGlzLmNhY2hlW2FdPWV9O2hhLnByb3RvdHlwZS5mZXRjaD1mdW5jdGlvbihhLGIsYyl7aWYoYT10aGlzLmNhY2hlW2FdKWZvcih2YXIgZD1hLmxlbmd0aC0xOzA8PWQ7ZC0tKXt2YXIgZT1hW2RdO2lmKHRoaXMuYShlLGIsYykpcmV0dXJuIGV9fTtpZigheil7dmFyIFZjPW5ldyBNdXRhdGlvbk9ic2VydmVyKEpjKSxXYz1mdW5jdGlvbihhKXtWYy5vYnNlcnZlKGEse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSl9O2lmKHdpbmRvdy5jdXN0b21FbGVtZW50cyYmIXdpbmRvdy5jdXN0b21FbGVtZW50cy5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrKVdjKGRvY3VtZW50KTtlbHNle3ZhciBxYj1mdW5jdGlvbigpe1djKGRvY3VtZW50LmJvZHkpfTt3aW5kb3cuSFRNTEltcG9ydHM/XG53aW5kb3cuSFRNTEltcG9ydHMud2hlblJlYWR5KHFiKTpyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtpZihcImxvYWRpbmdcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUpe3ZhciBhPWZ1bmN0aW9uKCl7cWIoKTtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGEpfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGEpfWVsc2UgcWIoKX0pfU49ZnVuY3Rpb24oKXtKYyhWYy50YWtlUmVjb3JkcygpKX19dmFyIHJhPXt9LFVkPVByb21pc2UucmVzb2x2ZSgpLGZiPW51bGwsTGM9d2luZG93LkhUTUxJbXBvcnRzJiZ3aW5kb3cuSFRNTEltcG9ydHMud2hlblJlYWR5fHxudWxsLGdiLHhhPW51bGwsZmE9bnVsbDtxLnByb3RvdHlwZS54YT1mdW5jdGlvbigpeyF0aGlzLmVucXVldWVkJiZmYSYmKHRoaXMuZW5xdWV1ZWQ9ITAsdWIoZmEpKX07cS5wcm90b3R5cGUuYj1mdW5jdGlvbihhKXthLl9fc2VlbkJ5U2hhZHlDU1N8fFxuKGEuX19zZWVuQnlTaGFkeUNTUz0hMCx0aGlzLmN1c3RvbVN0eWxlcy5wdXNoKGEpLHRoaXMueGEoKSl9O3EucHJvdG90eXBlLmE9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuX19zaGFkeUNTU0NhY2hlZFN0eWxlP2EuX19zaGFkeUNTU0NhY2hlZFN0eWxlOmEuZ2V0U3R5bGU/YS5nZXRTdHlsZSgpOmF9O3EucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5jdXN0b21TdHlsZXMsYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKCFjLl9fc2hhZHlDU1NDYWNoZWRTdHlsZSl7dmFyIGQ9dGhpcy5hKGMpO2QmJihkPWQuX19hcHBsaWVkRWxlbWVudHx8ZCx4YSYmeGEoZCksYy5fX3NoYWR5Q1NTQ2FjaGVkU3R5bGU9ZCl9fXJldHVybiBhfTtxLnByb3RvdHlwZS5hZGRDdXN0b21TdHlsZT1xLnByb3RvdHlwZS5iO3EucHJvdG90eXBlLmdldFN0eWxlRm9yQ3VzdG9tU3R5bGU9cS5wcm90b3R5cGUuYTtxLnByb3RvdHlwZS5wcm9jZXNzU3R5bGVzPXEucHJvdG90eXBlLmM7XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhxLnByb3RvdHlwZSx7dHJhbnNmb3JtQ2FsbGJhY2s6e2dldDpmdW5jdGlvbigpe3JldHVybiB4YX0sc2V0OmZ1bmN0aW9uKGEpe3hhPWF9fSx2YWxpZGF0ZUNhbGxiYWNrOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZmF9LHNldDpmdW5jdGlvbihhKXt2YXIgYj0hMTtmYXx8KGI9ITApO2ZhPWE7YiYmdGhpcy54YSgpfX19KTt2YXIgWGM9bmV3IGhhO2cucHJvdG90eXBlLnc9ZnVuY3Rpb24oKXtOKCl9O2cucHJvdG90eXBlLkk9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5tW2FdPSh0aGlzLm1bYV18fDApKzE7cmV0dXJuIGErXCItXCIrYn07Zy5wcm90b3R5cGUuSGE9ZnVuY3Rpb24oYSl7cmV0dXJuIHBhKGEpfTtnLnByb3RvdHlwZS5KYT1mdW5jdGlvbihhKXtyZXR1cm4gVihhKX07Zy5wcm90b3R5cGUuSD1mdW5jdGlvbihhKXthPWEuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVcIik7Zm9yKHZhciBiPVtdLGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9XG5hW2NdO2IucHVzaChkLnRleHRDb250ZW50KTtkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCl9cmV0dXJuIGIuam9pbihcIlwiKS50cmltKCl9O2cucHJvdG90eXBlLmFhPWZ1bmN0aW9uKGEpe3JldHVybihhPWEuY29udGVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIikpP2EuZ2V0QXR0cmlidXRlKFwiY3NzLWJ1aWxkXCIpfHxcIlwiOlwiXCJ9O2cucHJvdG90eXBlLnByZXBhcmVUZW1wbGF0ZT1mdW5jdGlvbihhLGIsYyl7aWYoIWEuZil7YS5mPSEwO2EubmFtZT1iO2EuZXh0ZW5kcz1jO3JhW2JdPWE7dmFyIGQ9dGhpcy5hYShhKSxlPXRoaXMuSChhKTtjPXtpczpiLGV4dGVuZHM6YyxtYjpkfTt6fHxwLmIoYS5jb250ZW50LGIpO3RoaXMuYygpO3ZhciBmPXZhLnRlc3QoZSl8fHVhLnRlc3QoZSk7dmEubGFzdEluZGV4PTA7dWEubGFzdEluZGV4PTA7ZT1kYihlKTtmJiZBJiZ0aGlzLmEmJnRoaXMuYS50cmFuc2Zvcm1SdWxlcyhlLGIpO2EuX3N0eWxlQXN0PWU7YS5nPWQ7ZD1bXTtBfHwoZD1NLkgoYS5fc3R5bGVBc3QpKTtcbmlmKCFkLmxlbmd0aHx8QSliPXRoaXMuTyhjLGEuX3N0eWxlQXN0LHo/YS5jb250ZW50Om51bGwscGJbYl0pLGEuYT1iO2EuYz1kfX07Zy5wcm90b3R5cGUuTz1mdW5jdGlvbihhLGIsYyxkKXtiPXAuYyhhLGIpO2lmKGIubGVuZ3RoKXJldHVybiBlYihiLGEuaXMsYyxkKX07Zy5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSl7dmFyIGI9UihhKSxjPWIuaXM7Yj1iLlY7dmFyIGQ9cGJbY107Yz1yYVtjXTtpZihjKXt2YXIgZT1jLl9zdHlsZUFzdDt2YXIgZj1jLmN9cmV0dXJuIHYuc2V0KGEsbmV3IHYoZSxkLGYsMCxiKSl9O2cucHJvdG90eXBlLkY9ZnVuY3Rpb24oKXshdGhpcy5hJiZ3aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW0mJih0aGlzLmE9d2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbSx0aGlzLmEuaW52YWxpZENhbGxiYWNrPVNkKX07Zy5wcm90b3R5cGUuRz1mdW5jdGlvbigpe3ZhciBhPXRoaXM7IXRoaXMuYiYmd2luZG93LlNoYWR5Q1NTJiZ3aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UmJlxuKHRoaXMuYj13aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UsdGhpcy5iLnRyYW5zZm9ybUNhbGxiYWNrPWZ1bmN0aW9uKGIpe2EucyhiKX0sdGhpcy5iLnZhbGlkYXRlQ2FsbGJhY2s9ZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXsoYS5iLmVucXVldWVkfHxhLmkpJiZhLmYoKX0pfSl9O2cucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXt0aGlzLkYoKTt0aGlzLkcoKX07Zy5wcm90b3R5cGUuZj1mdW5jdGlvbigpe3RoaXMuYygpO2lmKHRoaXMuYil7dmFyIGE9dGhpcy5iLnByb2Nlc3NTdHlsZXMoKTt0aGlzLmIuZW5xdWV1ZWQmJihBP3RoaXMuRmEoYSk6KHRoaXMubyh0aGlzLmcsdGhpcy5oKSx0aGlzLkIoYSkpLHRoaXMuYi5lbnF1ZXVlZD0hMSx0aGlzLmkmJiFBJiZ0aGlzLnN0eWxlRG9jdW1lbnQoKSl9fTtnLnByb3RvdHlwZS5zdHlsZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz1SKGEpLmlzLGQ9di5nZXQoYSk7ZHx8KGQ9dGhpcy5jYShhKSk7XG50aGlzLmooYSl8fCh0aGlzLmk9ITApO2ImJihkLk49ZC5OfHx7fSxPYmplY3QuYXNzaWduKGQuTixiKSk7aWYoQSl7aWYoZC5OKXtiPWQuTjtmb3IodmFyIGUgaW4gYiludWxsPT09ZT9hLnN0eWxlLnJlbW92ZVByb3BlcnR5KGUpOmEuc3R5bGUuc2V0UHJvcGVydHkoZSxiW2VdKX1pZigoKGU9cmFbY10pfHx0aGlzLmooYSkpJiZlJiZlLmEmJiFLYyhlKSl7aWYoS2MoZSl8fGUuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uIT09ZS5fYXBwbHlTaGltTmV4dFZlcnNpb24pdGhpcy5jKCksdGhpcy5hJiZ0aGlzLmEudHJhbnNmb3JtUnVsZXMoZS5fc3R5bGVBc3QsYyksZS5hLnRleHRDb250ZW50PXAuYyhhLGQuRCksVGQoZSk7eiYmKGM9YS5zaGFkb3dSb290KSYmKGMucXVlcnlTZWxlY3RvcihcInN0eWxlXCIpLnRleHRDb250ZW50PXAuYyhhLGQuRCkpO2QuRD1lLl9zdHlsZUFzdH19ZWxzZSB0aGlzLm8oYSxkKSxkLmxhJiZkLmxhLmxlbmd0aCYmdGhpcy5LKGEsZCl9O2cucHJvdG90eXBlLmw9XG5mdW5jdGlvbihhKXtyZXR1cm4oYT1hLmdldFJvb3ROb2RlKCkuaG9zdCk/di5nZXQoYSk/YTp0aGlzLmwoYSk6dGhpcy5nfTtnLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEpe3JldHVybiBhPT09dGhpcy5nfTtnLnByb3RvdHlwZS5LPWZ1bmN0aW9uKGEsYil7dmFyIGM9UihhKS5pcyxkPVhjLmZldGNoKGMsYi5KLGIubGEpLGU9ZD9kLnN0eWxlRWxlbWVudDpudWxsLGY9Yi5BO2IuQT1kJiZkLkF8fHRoaXMuSShjKTtlPU0ucyhhLGIuSixiLkEsZSk7enx8TS5vKGEsYi5BLGYpO2R8fFhjLmIoYyxiLkosZSxiLkEpfTtnLnByb3RvdHlwZS5vPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5sKGEpLGQ9di5nZXQoYyk7Yz1PYmplY3QuY3JlYXRlKGQuSnx8bnVsbCk7dmFyIGU9TS5JKGEsYi5EKTthPU0uTyhkLkQsYSkuQztPYmplY3QuYXNzaWduKGMsZS5hYixhLGUuZ2IpO3RoaXMuYmEoYyxiLk4pO00uYWEoYyk7Yi5KPWN9O2cucHJvdG90eXBlLmJhPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjIGluIGIpe3ZhciBkPVxuYltjXTtpZihkfHwwPT09ZClhW2NdPWR9fTtnLnByb3RvdHlwZS5zdHlsZURvY3VtZW50PWZ1bmN0aW9uKGEpe3RoaXMuc3R5bGVTdWJ0cmVlKHRoaXMuZyxhKX07Zy5wcm90b3R5cGUuc3R5bGVTdWJ0cmVlPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5zaGFkb3dSb290OyhjfHx0aGlzLmooYSkpJiZ0aGlzLnN0eWxlRWxlbWVudChhLGIpO2lmKGI9YyYmKGMuY2hpbGRyZW58fGMuY2hpbGROb2RlcykpZm9yKGE9MDthPGIubGVuZ3RoO2ErKyl0aGlzLnN0eWxlU3VidHJlZShiW2FdKTtlbHNlIGlmKGE9YS5jaGlsZHJlbnx8YS5jaGlsZE5vZGVzKWZvcihiPTA7YjxhLmxlbmd0aDtiKyspdGhpcy5zdHlsZVN1YnRyZWUoYVtiXSl9O2cucHJvdG90eXBlLkZhPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz10aGlzLmIuZ2V0U3R5bGVGb3JDdXN0b21TdHlsZShhW2JdKTtjJiZ0aGlzLkVhKGMpfX07Zy5wcm90b3R5cGUuQj1mdW5jdGlvbihhKXtmb3IodmFyIGI9XG4wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz10aGlzLmIuZ2V0U3R5bGVGb3JDdXN0b21TdHlsZShhW2JdKTtjJiZNLm0oYyx0aGlzLmguSil9fTtnLnByb3RvdHlwZS5zPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1wYShhKTtXKGMsZnVuY3Rpb24oYSl7ej9wLncoYSk6cC5IKGEpO0EmJihiLmMoKSxiLmEmJmIuYS50cmFuc2Zvcm1SdWxlKGEpKX0pO0E/YS50ZXh0Q29udGVudD1WKGMpOnRoaXMuaC5ELnJ1bGVzLnB1c2goYyl9O2cucHJvdG90eXBlLkVhPWZ1bmN0aW9uKGEpe2lmKEEmJnRoaXMuYSl7dmFyIGI9cGEoYSk7dGhpcy5jKCk7dGhpcy5hLnRyYW5zZm9ybVJ1bGVzKGIpO2EudGV4dENvbnRlbnQ9VihiKX19O2cucHJvdG90eXBlLmdldENvbXB1dGVkU3R5bGVWYWx1ZT1mdW5jdGlvbihhLGIpe3ZhciBjO0F8fChjPSh2LmdldChhKXx8di5nZXQodGhpcy5sKGEpKSkuSltiXSk7cmV0dXJuKGM9Y3x8d2luZG93LmdldENvbXB1dGVkU3R5bGUoYSkuZ2V0UHJvcGVydHlWYWx1ZShiKSk/XG5jLnRyaW0oKTpcIlwifTtnLnByb3RvdHlwZS5JYT1mdW5jdGlvbihhLGIpe3ZhciBjPWEuZ2V0Um9vdE5vZGUoKTtiPWI/Yi5zcGxpdCgvXFxzLyk6W107Yz1jLmhvc3QmJmMuaG9zdC5sb2NhbE5hbWU7aWYoIWMpe3ZhciBkPWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7aWYoZCl7ZD1kLnNwbGl0KC9cXHMvKTtmb3IodmFyIGU9MDtlPGQubGVuZ3RoO2UrKylpZihkW2VdPT09cC5hKXtjPWRbZSsxXTticmVha319fWMmJmIucHVzaChwLmEsYyk7QXx8KGM9di5nZXQoYSkpJiZjLkEmJmIucHVzaChNLmcsYy5BKTtxYShhLGIuam9pbihcIiBcIikpfTtnLnByb3RvdHlwZS5HYT1mdW5jdGlvbihhKXtyZXR1cm4gdi5nZXQoYSl9O2cucHJvdG90eXBlLmZsdXNoPWcucHJvdG90eXBlLnc7Zy5wcm90b3R5cGUucHJlcGFyZVRlbXBsYXRlPWcucHJvdG90eXBlLnByZXBhcmVUZW1wbGF0ZTtnLnByb3RvdHlwZS5zdHlsZUVsZW1lbnQ9Zy5wcm90b3R5cGUuc3R5bGVFbGVtZW50O2cucHJvdG90eXBlLnN0eWxlRG9jdW1lbnQ9XG5nLnByb3RvdHlwZS5zdHlsZURvY3VtZW50O2cucHJvdG90eXBlLnN0eWxlU3VidHJlZT1nLnByb3RvdHlwZS5zdHlsZVN1YnRyZWU7Zy5wcm90b3R5cGUuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlPWcucHJvdG90eXBlLmdldENvbXB1dGVkU3R5bGVWYWx1ZTtnLnByb3RvdHlwZS5zZXRFbGVtZW50Q2xhc3M9Zy5wcm90b3R5cGUuSWE7Zy5wcm90b3R5cGUuX3N0eWxlSW5mb0Zvck5vZGU9Zy5wcm90b3R5cGUuR2E7Zy5wcm90b3R5cGUudHJhbnNmb3JtQ3VzdG9tU3R5bGVGb3JEb2N1bWVudD1nLnByb3RvdHlwZS5zO2cucHJvdG90eXBlLmdldFN0eWxlQXN0PWcucHJvdG90eXBlLkhhO2cucHJvdG90eXBlLnN0eWxlQXN0VG9TdHJpbmc9Zy5wcm90b3R5cGUuSmE7Zy5wcm90b3R5cGUuZmx1c2hDdXN0b21TdHlsZXM9Zy5wcm90b3R5cGUuZjtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhnLnByb3RvdHlwZSx7bmF0aXZlU2hhZG93OntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gen19LG5hdGl2ZUNzczp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEF9fX0pO1xudmFyIEg9bmV3IGc7aWYod2luZG93LlNoYWR5Q1NTKXt2YXIgWWM9d2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbTt2YXIgWmM9d2luZG93LlNoYWR5Q1NTLkN1c3RvbVN0eWxlSW50ZXJmYWNlfXdpbmRvdy5TaGFkeUNTUz17U2NvcGluZ1NoaW06SCxwcmVwYXJlVGVtcGxhdGU6ZnVuY3Rpb24oYSxiLGMpe0guZigpO0gucHJlcGFyZVRlbXBsYXRlKGEsYixjKX0sc3R5bGVTdWJ0cmVlOmZ1bmN0aW9uKGEsYil7SC5mKCk7SC5zdHlsZVN1YnRyZWUoYSxiKX0sc3R5bGVFbGVtZW50OmZ1bmN0aW9uKGEpe0guZigpO0guc3R5bGVFbGVtZW50KGEpfSxzdHlsZURvY3VtZW50OmZ1bmN0aW9uKGEpe0guZigpO0guc3R5bGVEb2N1bWVudChhKX0sZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEguZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKGEsYil9LG5hdGl2ZUNzczpBLG5hdGl2ZVNoYWRvdzp6fTtZYyYmKHdpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW09WWMpO1pjJiYod2luZG93LlNoYWR5Q1NTLkN1c3RvbVN0eWxlSW50ZXJmYWNlPVxuWmMpO3ZhciByYj13aW5kb3cuY3VzdG9tRWxlbWVudHMseWE9d2luZG93LkhUTUxJbXBvcnRzO3dpbmRvdy5XZWJDb21wb25lbnRzPXdpbmRvdy5XZWJDb21wb25lbnRzfHx7fTtpZihyYiYmcmIucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayl7dmFyIHphLCRjPWZ1bmN0aW9uKCl7aWYoemEpe3ZhciBhPXphO3phPW51bGw7YSgpO3JldHVybiEwfX0sYWQ9eWEud2hlblJlYWR5O3JiLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2soZnVuY3Rpb24oYSl7emE9YTthZCgkYyl9KTt5YS53aGVuUmVhZHk9ZnVuY3Rpb24oYSl7YWQoZnVuY3Rpb24oKXskYygpP3lhLndoZW5SZWFkeShhKTphKCl9KX19eWEud2hlblJlYWR5KGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7d2luZG93LldlYkNvbXBvbmVudHMucmVhZHk9ITA7ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJXZWJDb21wb25lbnRzUmVhZHlcIix7YnViYmxlczohMH0pKX0pfSk7XG52YXIgYmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2JkLnRleHRDb250ZW50PVwiYm9keSB7dHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluIDAuMnM7IH0gXFxuYm9keVt1bnJlc29sdmVkXSB7b3BhY2l0eTogMDsgZGlzcGxheTogYmxvY2s7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsgfSBcXG5cIjt2YXIgY2Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7Y2QuaW5zZXJ0QmVmb3JlKGJkLGNkLmZpcnN0Q2hpbGQpfSkoKTt9KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWJjb21wb25lbnRzLWhpLXNkLWNlLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL3dlYmNvbXBvbmVudHMtaGktc2QtY2UuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW1hZ2VEb3dubG9hZGVyIH0gZnJvbSAnY29tbW9uL0ltYWdlRG93bmxvYWRlcic7XHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IExFWCB9IGZyb20gJ0xFWCc7XHJcblxyXG5pbXBvcnQgeyBQb2x5Z29uRmlsbGVyIH0gZnJvbSAncG9seWdvbi1maWxsZXIvUG9seWdvbkZpbGxlcic7XHJcblxyXG5pbXBvcnQgeyBJbnB1dERhdGFJbml0aWFsaXplciB9IGZyb20gJ0lucHV0RGF0YUluaXRpYWxpemVyJztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICdSZW5kZXJlcic7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAndWkvVUlDb250cm9sbGVyJztcclxuXHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XHJcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHByaXZhdGUgdWlDb250cm9sbGVyOiBVSUNvbnRyb2xsZXI7XHJcbiAgcHJpdmF0ZSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG4gIHByaXZhdGUgcG9seWdvbkZpbGxlcjogUG9seWdvbkZpbGxlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IG5ldyBFdmVudEFnZ3JlZ2F0b3IoKTtcclxuICAgIHRoaXMuaW1hZ2VEb3dubG9hZGVyID0gbmV3IEltYWdlRG93bmxvYWRlcigpO1xyXG4gICAgdGhpcy5wb2x5Z29uRmlsbGVyID0gbmV3IFBvbHlnb25GaWxsZXIoe1xyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcclxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgcG9seWdvbkZpbGxlcjogdGhpcy5wb2x5Z29uRmlsbGVyXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhZ2UgPSBuZXcgU3RhZ2UoKTtcclxuXHJcbiAgICB0aGlzLnVpQ29udHJvbGxlciA9IG5ldyBVSUNvbnRyb2xsZXIoe1xyXG4gICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2UsXHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIGltYWdlRG93bmxvYWRlcjogdGhpcy5pbWFnZURvd25sb2FkZXJcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBpbml0KCkge1xyXG4gICAgY29uc3QgcG9seWdvbkxheWVyID0gbmV3IExheWVyKExFWC5QT0xZR09OX0xBWUVSX05BTUUpO1xyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMucHVzaChwb2x5Z29uTGF5ZXIpO1xyXG5cclxuICAgIHRoaXMucG9seWdvbkZpbGxlci5pbml0KCk7XHJcbiAgICB0aGlzLnVpQ29udHJvbGxlci5pbml0KCk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgY29uc3QgaW5wdXREYXRhSW5pdGlhbGl6ZXIgPSBuZXcgSW5wdXREYXRhSW5pdGlhbGl6ZXIoe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBpbWFnZURvd25sb2FkZXI6IHRoaXMuaW1hZ2VEb3dubG9hZGVyLFxyXG4gICAgICBwb2x5Z29uTGF5ZXJcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IGlucHV0RGF0YUluaXRpYWxpemVyLmluaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5wb2x5Z29uRmlsbGVyLmRlc3Ryb3koKTtcclxuICAgIHRoaXMudWlDb250cm9sbGVyLmRlc3Ryb3koKTtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKGV2ZW50OiBSZW5kZXJFdmVudCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xyXG4gICAgdGhpcy5zdGFnZS5yZW5kZXIodGhpcy5yZW5kZXJlcik7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFJlbmRlckV2ZW50LmV2ZW50VHlwZSwgdGhpcy5yZW5kZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoUmVuZGVyRXZlbnQuZXZlbnRUeXBlLCB0aGlzLnJlbmRlcik7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL0FwcGxpY2F0aW9uLnRzIiwiZXhwb3J0IGNsYXNzIEltYWdlRG93bmxvYWRlciB7XHJcbiAgcHVibGljIGFzeW5jIGltYWdlVG9JbWFnZURhdGEoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiBQcm9taXNlPEltYWdlRGF0YT4ge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IDJkIGRyYXdpbmcgY2FudmFzIGNvbnRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaXNJbWFnZURvd25sb2FkZWQoaW1hZ2UpKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMud2FpdEZvckltYWdlKGltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXMud2lkdGggPSBpbWFnZS5uYXR1cmFsV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodDtcclxuXHJcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltYWdlLm5hdHVyYWxXaWR0aCwgaW1hZ2UubmF0dXJhbEhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzSW1hZ2VEb3dubG9hZGVkKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICBpZiAoIWltYWdlLmNvbXBsZXRlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW1hZ2UubmF0dXJhbFdpZHRoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgd2FpdEZvckltYWdlKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmdW5jdGlvbiBvbkxvYWQoKSB7XHJcbiAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XHJcbiAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIG9uRXJyb3IoKSB7XHJcbiAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XHJcbiAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcclxuICAgICAgICByZWplY3QoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XHJcbiAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0ltYWdlRG93bmxvYWRlci50cyIsImltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ2NvbW1vbi9MaW5lJztcclxuaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIaXRUZXN0UmVzdWx0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbGluZTogTGluZTtcclxuICBwdWJsaWMgcGF0aD86IFBhdGg7XHJcbiAgcHVibGljIGxheWVyPzogTGF5ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxpbmU6IExpbmUsIHBhdGg/OiBQYXRoLCBsYXllcj86IExheWVyKSB7XHJcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xyXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvY29tbW9uL0hpdFRlc3RSZXN1bHQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcbmltcG9ydCB7IEV2ZW50UXVldWUgfSBmcm9tICdldmVudHMvRXZlbnRRdWV1ZSc7XHJcblxyXG50eXBlIEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQ6IEFwcEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50QWdncmVnYXRvciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lck1hcCA9IG5ldyBNYXA8c3RyaW5nLCBFdmVudExpc3RlbmVyW10+KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudFF1ZXVlID0gbmV3IEV2ZW50UXVldWUoKTtcclxuICBwcml2YXRlIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyKSB7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcclxuXHJcbiAgICBpZiAoZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XHJcbiAgICAgIGV2ZW50TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdGVuZXJNYXAuc2V0KGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyKSB7XHJcbiAgICBjb25zdCBldmVudExpc3RlbmVycyA9IHRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcclxuICAgIGNvbnN0IGxpc3RlbmVySW5kZXggPSBldmVudExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcclxuXHJcbiAgICBpZiAobGlzdGVuZXJJbmRleCAhPT0gLTEpIHtcclxuICAgICAgZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlzdGVuZXJNYXAuc2V0KGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IEFwcEV2ZW50KSB7XHJcbiAgICB0aGlzLmV2ZW50UXVldWUuZW5xdWV1ZShldmVudCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRGlzcGF0Y2hpbmcpIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50RnJvbVF1ZXVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRpc3BhdGNoRXZlbnRGcm9tUXVldWUoKSB7XHJcbiAgICB0aGlzLmlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudFF1ZXVlLmRlcXVldWUoKTtcclxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5nZXRFdmVudExpc3RlbmVycyhldmVudC5ldmVudFR5cGUpO1xyXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBsaXN0ZW5lcihldmVudCkpO1xyXG5cclxuICAgIGlmICh0aGlzLmV2ZW50UXVldWUuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRoaXMuaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50RnJvbVF1ZXVlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lck1hcC5nZXQoZXZlbnRUeXBlKSB8fCBbXTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL0V2ZW50QWdncmVnYXRvci50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudFF1ZXVlIHtcclxuICBwcml2YXRlIF9xdWV1ZTogQXBwRXZlbnRbXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgZW5xdWV1ZShldmVudDogQXBwRXZlbnQpIHtcclxuICAgIHRoaXMuX3F1ZXVlLnB1c2goZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlcXVldWUoKTogQXBwRXZlbnQge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVldWUgaXMgZW1wdHknKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcXVldWUuc3BsaWNlKDAsIDEpWzBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNFbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdldExlbmd0aCgpID09PSAwO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvRXZlbnRRdWV1ZS50cyIsImltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29tbW9uL0NvbG9yJztcclxuaW1wb3J0IHsgTGlnaHRWZXJzb3JUeXBlIH0gZnJvbSAnY29tbW9uL0xpZ2h0VmVyc29yVHlwZSc7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICdjb21tb24vUG9seWdvbic7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtcclxuICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEV2ZW50LFxyXG4gIE5ld0xpZ2h0Q29sb3JFdmVudCxcclxuICBOZXdMaWdodFZlcnNvclR5cGVFdmVudCxcclxuICBOZXdOb3JtYWxNYXBFdmVudFxyXG59IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuXHJcbmltcG9ydCB7IEFjdGl2ZUVkZ2UgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9BY3RpdmVFZGdlJztcclxuaW1wb3J0IHsgQXBwRmlsbERhdGEgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9BcHBGaWxsRGF0YSc7XHJcblxyXG5pbnRlcmZhY2UgUG9seWdvbkZpbGxlckRlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvbHlnb25GaWxsZXIge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVuZGVyaW5nQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHByaXZhdGUgY2FudmFzSW1hZ2VEYXRhOiBJbWFnZURhdGE7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgZmlsbERhdGE6IEFwcEZpbGxEYXRhID0ge1xyXG4gICAgYmFja2dyb3VuZFRleHR1cmU6IG5ldyBJbWFnZURhdGEoMSwgMSksXHJcbiAgICBoZWlnaHRNYXA6IG5ldyBJbWFnZURhdGEoMSwgMSksXHJcbiAgICBsaWdodENvbG9yOiBuZXcgQ29sb3IoMCwgMCwgMCksXHJcbiAgICBsaWdodFZlcnNvclR5cGU6IExpZ2h0VmVyc29yVHlwZS5Db25zdGFudCxcclxuICAgIG5vcm1hbE1hcDogbmV3IEltYWdlRGF0YSgxLCAxKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9seWdvbkZpbGxlckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5jYW52YXMgPSBkZXBlbmRlbmNpZXMuY2FudmFzO1xyXG5cclxuICAgIHRoaXMub25OZXdCYWNrZ3JvdW5kVGV4dHVyZSA9IHRoaXMub25OZXdCYWNrZ3JvdW5kVGV4dHVyZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk5ld0hlaWdodE1hcCA9IHRoaXMub25OZXdIZWlnaHRNYXAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25OZXdMaWdodENvbG9yID0gdGhpcy5vbk5ld0xpZ2h0Q29sb3IuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25OZXdMaWdodFZlcnNvclR5cGUgPSB0aGlzLm9uTmV3TGlnaHRWZXJzb3JUeXBlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTmV3Tm9ybWFsTWFwID0gdGhpcy5vbk5ld05vcm1hbE1hcC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluamVjdENhbnZhc1JlbmRlcmluZ0NvbnRleHQocmVuZGVyaW5nQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQgPSByZW5kZXJpbmdDb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICBjb25zdCBldmVudEFnZ3JlZ2F0b3IgPSB0aGlzLmV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25OZXdCYWNrZ3JvdW5kVGV4dHVyZVxyXG4gICAgKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKE5ld0hlaWdodE1hcEV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld0hlaWdodE1hcCk7XHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihOZXdMaWdodENvbG9yRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTmV3TGlnaHRDb2xvcik7XHJcbiAgICBldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihOZXdMaWdodFZlcnNvclR5cGVFdmVudC5ldmVudFR5cGUsIHRoaXMub25OZXdMaWdodFZlcnNvclR5cGUpO1xyXG4gICAgZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoTmV3Tm9ybWFsTWFwRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uTmV3Tm9ybWFsTWFwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgY29uc3QgZXZlbnRBZ2dyZWdhdG9yID0gdGhpcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQuZXZlbnRUeXBlLFxyXG4gICAgICB0aGlzLm9uTmV3QmFja2dyb3VuZFRleHR1cmVcclxuICAgICk7XHJcbiAgICBldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihOZXdIZWlnaHRNYXBFdmVudC5ldmVudFR5cGUsIHRoaXMub25OZXdIZWlnaHRNYXApO1xyXG4gICAgZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoTmV3TGlnaHRDb2xvckV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld0xpZ2h0Q29sb3IpO1xyXG4gICAgZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LmV2ZW50VHlwZSxcclxuICAgICAgdGhpcy5vbk5ld0xpZ2h0VmVyc29yVHlwZVxyXG4gICAgKTtcclxuICAgIGV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKE5ld05vcm1hbE1hcEV2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbk5ld05vcm1hbE1hcCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmlsbFBvbHlnb24ocG9seWdvbjogUG9seWdvbikge1xyXG4gICAgY29uc3QgdmVydGljZXMgPSBwb2x5Z29uLmdldFZlcnRpY2VzKCk7XHJcbiAgICBjb25zdCB2ZXJ0aWNlc0NvdW50ID0gcG9seWdvbi5nZXRWZXJ0aWNlc0NvdW50KCk7XHJcblxyXG4gICAgLy8gaW5kWzAgLi4gbi0xXVxyXG4gICAgY29uc3Qgc29ydGVkVmVydGV4SW5kaWNlcyA9IHZlcnRpY2VzLm1hcCgoX3ZlcnRleCwgaW5kZXgpID0+IGluZGV4KTtcclxuICAgIHNvcnRlZFZlcnRleEluZGljZXMuc29ydCgoaSwgaikgPT4gdmVydGljZXNbaV0ueSAtIHZlcnRpY2VzW2pdLnkpO1xyXG5cclxuICAgIGNvbnN0IHlNaW4gPSB2ZXJ0aWNlc1tzb3J0ZWRWZXJ0ZXhJbmRpY2VzWzBdXS55O1xyXG4gICAgY29uc3QgeU1heCA9IHZlcnRpY2VzW3NvcnRlZFZlcnRleEluZGljZXNbdmVydGljZXNDb3VudCAtIDFdXS55O1xyXG5cclxuICAgIC8vIEFFVFxyXG4gICAgY29uc3QgYWN0aXZlRWRnZVRhYmxlOiBBY3RpdmVFZGdlW10gPSBbXTtcclxuICAgIGxldCBrID0gMDtcclxuICAgIGxldCBwcmV2aW91c1kgPSB5TWluO1xyXG5cclxuICAgIHRoaXMuY2FudmFzSW1hZ2VEYXRhID0gdGhpcy5yZW5kZXJpbmdDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBmb3IgKGxldCB5ID0geU1pbiArIDE7IHkgPD0geU1heDsgeSArPSAxKSB7XHJcbiAgICAgIGZvciAoOyBrIDwgdmVydGljZXNDb3VudDsgayArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgdmVydGV4SW5kZXggPSBzb3J0ZWRWZXJ0ZXhJbmRpY2VzW2tdO1xyXG4gICAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRpY2VzW3ZlcnRleEluZGV4XTtcclxuICAgICAgICBpZiAodmVydGV4LnkgIT09IHByZXZpb3VzWSkge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcmV2aW91c1ZlcnRleEluZGV4ID0gcG9seWdvbi5nZXRQcmV2aW91c1BvaW50SW5kZXgodmVydGV4SW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmVydGV4ID0gdmVydGljZXNbcHJldmlvdXNWZXJ0ZXhJbmRleF07XHJcbiAgICAgICAgaWYgKHByZXZpb3VzVmVydGV4LnkgPj0gdmVydGV4LnkpIHtcclxuICAgICAgICAgIGNvbnN0IHByZXZpb3VzRWRnZSA9IG5ldyBBY3RpdmVFZGdlKHZlcnRleCwgcHJldmlvdXNWZXJ0ZXgpO1xyXG4gICAgICAgICAgYWN0aXZlRWRnZVRhYmxlLnB1c2gocHJldmlvdXNFZGdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgZWRnZUluZGV4ID0gYWN0aXZlRWRnZVRhYmxlLmZpbmRJbmRleChcclxuICAgICAgICAgICAgZWRnZSA9PiBlZGdlLmxvd2VyUG9pbnQgPT09IHByZXZpb3VzVmVydGV4ICYmIGVkZ2UuaGlnaGVyUG9pbnQgPT09IHZlcnRleFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5zcGxpY2UoZWRnZUluZGV4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRWZXJ0ZXhJbmRleCA9IHBvbHlnb24uZ2V0TmV4dFBvaW50SW5kZXgodmVydGV4SW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IG5leHRWZXJ0ZXggPSB2ZXJ0aWNlc1tuZXh0VmVydGV4SW5kZXhdO1xyXG4gICAgICAgIGlmIChuZXh0VmVydGV4LnkgPj0gdmVydGV4LnkpIHtcclxuICAgICAgICAgIGNvbnN0IG5leHRFZGdlID0gbmV3IEFjdGl2ZUVkZ2UodmVydGV4LCBuZXh0VmVydGV4KTtcclxuICAgICAgICAgIGFjdGl2ZUVkZ2VUYWJsZS5wdXNoKG5leHRFZGdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgZWRnZUluZGV4ID0gYWN0aXZlRWRnZVRhYmxlLmZpbmRJbmRleChcclxuICAgICAgICAgICAgZWRnZSA9PiBlZGdlLmxvd2VyUG9pbnQgPT09IG5leHRWZXJ0ZXggJiYgZWRnZS5oaWdoZXJQb2ludCA9PT0gdmVydGV4XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYWN0aXZlRWRnZVRhYmxlLnNwbGljZShlZGdlSW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYWN0aXZlRWRnZVRhYmxlLnNvcnQoKGUxLCBlMikgPT4gZTEueCAtIGUyLngpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmVFZGdlVGFibGUubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICBjb25zdCBlMSA9IGFjdGl2ZUVkZ2VUYWJsZVtpXTtcclxuICAgICAgICBjb25zdCBlMiA9IGFjdGl2ZUVkZ2VUYWJsZVtpICsgMV07XHJcblxyXG4gICAgICAgIC8vIHRoaXMucmVuZGVyaW5nQ29udGV4dC5maWxsUmVjdChlMS54LCB5LCBlMi54IC0gZTEueCwgMSk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IGUxLng7IHggPD0gZTIueDsgeCArPSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnB1dFBpeGVsKHgsIHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYWN0aXZlRWRnZVRhYmxlLmZvckVhY2goZWRnZSA9PiBlZGdlLm5leHRTY2FuTGluZSgpKTtcclxuICAgICAgcHJldmlvdXNZID0geTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuY2FudmFzSW1hZ2VEYXRhLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHV0UGl4ZWwoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIGlmICh4ID49IHRoaXMuY2FudmFzSW1hZ2VEYXRhLndpZHRoIHx8IHkgPj0gdGhpcy5jYW52YXNJbWFnZURhdGEuaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZSBuby1iaXR3aXNlXHJcbiAgICB4ID0gfn54O1xyXG4gICAgeSA9IH5+eTtcclxuICAgIC8vIHRzbGludDplbmFibGUgbm8tYml0d2lzZVxyXG5cclxuICAgIGNvbnN0IGJhY2tncm91bmRUZXh0dXJlID0gdGhpcy5maWxsRGF0YS5iYWNrZ3JvdW5kVGV4dHVyZTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRUZXh0dXJlWCA9IHggJSBiYWNrZ3JvdW5kVGV4dHVyZS53aWR0aDtcclxuICAgIGNvbnN0IGJhY2tncm91bmRUZXh0dXJlWSA9IHkgJSBiYWNrZ3JvdW5kVGV4dHVyZS5oZWlnaHQ7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kVGV4dHVyZUluZGV4ID1cclxuICAgICAgKGJhY2tncm91bmRUZXh0dXJlWCArIGJhY2tncm91bmRUZXh0dXJlWSAqIGJhY2tncm91bmRUZXh0dXJlLndpZHRoKSAqIDQ7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSAoeCArIHkgKiB0aGlzLmNhbnZhc0ltYWdlRGF0YS53aWR0aCkgKiA0O1xyXG4gICAgdGhpcy5jYW52YXNJbWFnZURhdGEuZGF0YVtpbmRleF0gPSBiYWNrZ3JvdW5kVGV4dHVyZS5kYXRhW2JhY2tncm91bmRUZXh0dXJlSW5kZXhdO1xyXG4gICAgdGhpcy5jYW52YXNJbWFnZURhdGEuZGF0YVtpbmRleCArIDFdID0gYmFja2dyb3VuZFRleHR1cmUuZGF0YVtiYWNrZ3JvdW5kVGV4dHVyZUluZGV4ICsgMV07XHJcbiAgICB0aGlzLmNhbnZhc0ltYWdlRGF0YS5kYXRhW2luZGV4ICsgMl0gPSBiYWNrZ3JvdW5kVGV4dHVyZS5kYXRhW2JhY2tncm91bmRUZXh0dXJlSW5kZXggKyAyXTtcclxuICAgIHRoaXMuY2FudmFzSW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA9IGJhY2tncm91bmRUZXh0dXJlLmRhdGFbYmFja2dyb3VuZFRleHR1cmVJbmRleCArIDNdO1xyXG4gICAgLy8gdGhpcy5jYW52YXNJbWFnZURhdGEuZGF0YVtpbmRleF0gPSAwO1xyXG4gICAgLy8gdGhpcy5jYW52YXNJbWFnZURhdGEuZGF0YVtpbmRleCArIDFdID0gMDtcclxuICAgIC8vIHRoaXMuY2FudmFzSW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAyXSA9IDA7XHJcbiAgICAvLyB0aGlzLmNhbnZhc0ltYWdlRGF0YS5kYXRhW2luZGV4ICsgM10gPSAyNTU7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmZpbGxSZWN0KHgsIHksIDEsIDEpO1xyXG4gICAgLy8gdGhpcy5yZW5kZXJpbmdDb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLmNhbnZhc0ltYWdlRGF0YSwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3QmFja2dyb3VuZFRleHR1cmUoZXZlbnQ6IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQpIHtcclxuICAgIHRoaXMuZmlsbERhdGEuYmFja2dyb3VuZFRleHR1cmUgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3SGVpZ2h0TWFwKGV2ZW50OiBOZXdIZWlnaHRNYXBFdmVudCkge1xyXG4gICAgdGhpcy5maWxsRGF0YS5oZWlnaHRNYXAgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3TGlnaHRDb2xvcihldmVudDogTmV3TGlnaHRDb2xvckV2ZW50KSB7XHJcbiAgICB0aGlzLmZpbGxEYXRhLmxpZ2h0Q29sb3IgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3TGlnaHRWZXJzb3JUeXBlKGV2ZW50OiBOZXdMaWdodFZlcnNvclR5cGVFdmVudCkge1xyXG4gICAgdGhpcy5maWxsRGF0YS5saWdodFZlcnNvclR5cGUgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTmV3Tm9ybWFsTWFwKGV2ZW50OiBOZXdOb3JtYWxNYXBFdmVudCkge1xyXG4gICAgdGhpcy5maWxsRGF0YS5ub3JtYWxNYXAgPSBldmVudC5wYXlsb2FkO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3BvbHlnb24tZmlsbGVyL1BvbHlnb25GaWxsZXIudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3QmFja2dyb3VuZFRleHR1cmVFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogSW1hZ2VEYXRhO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbWFnZURhdGE6IEltYWdlRGF0YSkge1xyXG4gICAgdGhpcy5wYXlsb2FkID0gaW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuICdOZXdCYWNrZ3JvdW5kVGV4dHVyZSc7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2V2ZW50cy9pbnB1dC1kYXRhL05ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQudHMiLCJpbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3SGVpZ2h0TWFwRXZlbnQgaW1wbGVtZW50cyBBcHBFdmVudCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IEltYWdlRGF0YTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3SGVpZ2h0TWFwRXZlbnQuZXZlbnRUeXBlO1xyXG4gIHB1YmxpYyBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGltYWdlRGF0YTogSW1hZ2VEYXRhKSB7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBldmVudFR5cGUoKSB7XHJcbiAgICByZXR1cm4gTmV3SGVpZ2h0TWFwRXZlbnQubmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvZXZlbnRzL2lucHV0LWRhdGEvTmV3SGVpZ2h0TWFwRXZlbnQudHMiLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbW1vbi9Db2xvcic7XHJcblxyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJ2V2ZW50cy9BcHBFdmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3TGlnaHRDb2xvckV2ZW50IGltcGxlbWVudHMgQXBwRXZlbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBDb2xvcjtcclxuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRUeXBlID0gTmV3TGlnaHRDb2xvckV2ZW50LmV2ZW50VHlwZTtcclxuICBwdWJsaWMgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2xvcjogQ29sb3IpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZXZlbnRUeXBlKCkge1xyXG4gICAgcmV0dXJuIE5ld0xpZ2h0Q29sb3JFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodENvbG9yRXZlbnQudHMiLCJpbXBvcnQgeyBMaWdodFZlcnNvclR5cGUgfSBmcm9tICdjb21tb24vTGlnaHRWZXJzb3JUeXBlJztcclxuXHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdMaWdodFZlcnNvclR5cGVFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogTGlnaHRWZXJzb3JUeXBlO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdMaWdodFZlcnNvclR5cGVFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IobGlnaHRWZXJzb3JUeXBlOiBMaWdodFZlcnNvclR5cGUpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGxpZ2h0VmVyc29yVHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdMaWdodFZlcnNvclR5cGVFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdMaWdodFZlcnNvclR5cGVFdmVudC50cyIsImltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnZXZlbnRzL0FwcEV2ZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdOb3JtYWxNYXBFdmVudCBpbXBsZW1lbnRzIEFwcEV2ZW50IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgcGF5bG9hZDogSW1hZ2VEYXRhO1xyXG4gIHB1YmxpYyByZWFkb25seSBldmVudFR5cGUgPSBOZXdOb3JtYWxNYXBFdmVudC5ldmVudFR5cGU7XHJcbiAgcHVibGljIGhhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW1hZ2VEYXRhOiBJbWFnZURhdGEpIHtcclxuICAgIHRoaXMucGF5bG9hZCA9IGltYWdlRGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGV2ZW50VHlwZSgpIHtcclxuICAgIHJldHVybiBOZXdOb3JtYWxNYXBFdmVudC5uYW1lO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9ldmVudHMvaW5wdXQtZGF0YS9OZXdOb3JtYWxNYXBFdmVudC50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBY3RpdmVFZGdlIHtcclxuICBwdWJsaWMgbG93ZXJQb2ludDogUG9pbnQ7XHJcbiAgcHVibGljIGhpZ2hlclBvaW50OiBQb2ludDtcclxuXHJcbiAgcHJpdmF0ZSBpbnZlcnNlU2xvcGU6IG51bWJlcjtcclxuICBwcml2YXRlIF94OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxvd2VyUG9pbnQ6IFBvaW50LCBoaWdoZXJQb2ludDogUG9pbnQpIHtcclxuICAgIHRoaXMubG93ZXJQb2ludCA9IGxvd2VyUG9pbnQ7XHJcbiAgICB0aGlzLmhpZ2hlclBvaW50ID0gaGlnaGVyUG9pbnQ7XHJcblxyXG4gICAgdGhpcy5feCA9IHRoaXMubG93ZXJQb2ludC54O1xyXG4gICAgdGhpcy5jYWxjdWxhdGVTbG9wZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmV4dFNjYW5MaW5lKCkge1xyXG4gICAgdGhpcy5feCArPSB0aGlzLmludmVyc2VTbG9wZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlU2xvcGUoKSB7XHJcbiAgICBpZiAodGhpcy5oaWdoZXJQb2ludC55ID09PSB0aGlzLmxvd2VyUG9pbnQueSkge1xyXG4gICAgICB0aGlzLmludmVyc2VTbG9wZSA9IDk5OTk5OTk5OTk5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnZlcnNlU2xvcGUgPSAodGhpcy5oaWdoZXJQb2ludC54IC0gdGhpcy5sb3dlclBvaW50LngpIC8gKHRoaXMuaGlnaGVyUG9pbnQueSAtIHRoaXMubG93ZXJQb2ludC55KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcG9seWdvbi1maWxsZXIvQWN0aXZlRWRnZS50cyIsImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQge1xyXG4gIE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQsXHJcbiAgTmV3SGVpZ2h0TWFwRXZlbnQsXHJcbiAgTmV3TGlnaHRDb2xvckV2ZW50LFxyXG4gIE5ld0xpZ2h0VmVyc29yVHlwZUV2ZW50LFxyXG4gIE5ld05vcm1hbE1hcEV2ZW50XHJcbn0gZnJvbSAnZXZlbnRzL2lucHV0LWRhdGEnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5pbXBvcnQgeyBJbWFnZURvd25sb2FkZXIgfSBmcm9tICdjb21tb24vSW1hZ2VEb3dubG9hZGVyJztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBMaWdodFZlcnNvclR5cGUgfSBmcm9tICdjb21tb24vTGlnaHRWZXJzb3JUeXBlJztcclxuaW1wb3J0IHsgTGluZVByb3BlcnRpZXMgfSBmcm9tICdjb21tb24vTGluZVByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcbmltcG9ydCB7IFBvbHlnb24gfSBmcm9tICdjb21tb24vUG9seWdvbic7XHJcblxyXG5pbnRlcmZhY2UgSW5wdXREYXRhSW5pdGlhbGl6ZXJEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG4gIHBvbHlnb25MYXllcjogTGF5ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dERhdGFJbml0aWFsaXplciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcG9seWdvbkxheWVyOiBMYXllcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBJbnB1dERhdGFJbml0aWFsaXplckRlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5pbWFnZURvd25sb2FkZXIgPSBkZXBlbmRlbmNpZXMuaW1hZ2VEb3dubG9hZGVyO1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkxheWVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGluaXQoKSB7XHJcbiAgICB0aGlzLmFkZEluaXRpYWxQb2x5Z29ucygpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlc1RvRG93bmxvYWQ6IEhUTUxJbWFnZUVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGJhY2tncm91bmRUZXh0dXJlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGJhY2tncm91bmRUZXh0dXJlSW1hZ2Uuc3JjID0gY29uZmlndXJhdGlvbi5wcmVzZXRCYWNrZ3JvdW5kVGV4dHVyZXNbMF07XHJcblxyXG4gICAgY29uc3Qgbm9ybWFsTWFwSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG5vcm1hbE1hcEltYWdlLnNyYyA9IGNvbmZpZ3VyYXRpb24ucHJlc2V0Tm9ybWFsTWFwc1swXTtcclxuXHJcbiAgICBjb25zdCBoZWlnaHRNYXBJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaGVpZ2h0TWFwSW1hZ2Uuc3JjID0gY29uZmlndXJhdGlvbi5wcmVzZXRIZWlnaHRNYXBzWzBdO1xyXG5cclxuICAgIGltYWdlc1RvRG93bmxvYWQucHVzaChiYWNrZ3JvdW5kVGV4dHVyZUltYWdlLCBub3JtYWxNYXBJbWFnZSwgaGVpZ2h0TWFwSW1hZ2UpO1xyXG5cclxuICAgIGNvbnN0IGRvd25sb2FkZWRJbWFnZURhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgaW1hZ2VzVG9Eb3dubG9hZC5tYXAoaW1hZ2UgPT4gdGhpcy5pbWFnZURvd25sb2FkZXIuaW1hZ2VUb0ltYWdlRGF0YShpbWFnZSkpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQoZG93bmxvYWRlZEltYWdlRGF0YVswXSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3Tm9ybWFsTWFwRXZlbnQoZG93bmxvYWRlZEltYWdlRGF0YVsxXSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3SGVpZ2h0TWFwRXZlbnQoZG93bmxvYWRlZEltYWdlRGF0YVsyXSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRDb2xvckV2ZW50KGNvbmZpZ3VyYXRpb24ucHJlc2V0TGlnaHRDb2xvcikpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgTmV3TGlnaHRWZXJzb3JUeXBlRXZlbnQoTGlnaHRWZXJzb3JUeXBlLkNvbnN0YW50KSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkSW5pdGlhbFBvbHlnb25zKCkge1xyXG4gICAgY29uc3QgcG9pbnRzMSA9IFtcclxuICAgICAgbmV3IFBvaW50KDk0LCA5MyksXHJcbiAgICAgIG5ldyBQb2ludCg2OSwgMzg2KSxcclxuICAgICAgbmV3IFBvaW50KDE5MCwgNTI1KSxcclxuICAgICAgbmV3IFBvaW50KDY2NCwgMzY0KVxyXG4gICAgXTtcclxuICAgIGNvbnN0IHBvbHlnb24xID0gbmV3IFBvbHlnb24ocG9pbnRzMSwgTGluZVByb3BlcnRpZXMuZ2V0RGVmYXVsdCgpKTtcclxuXHJcbiAgICBjb25zdCBwb2ludHMyID0gW1xyXG4gICAgICBuZXcgUG9pbnQoNzc3LCAxNDIpLFxyXG4gICAgICBuZXcgUG9pbnQoNzAwLCA1MCksXHJcbiAgICAgIG5ldyBQb2ludCg0MzMsIDM0KSxcclxuICAgICAgbmV3IFBvaW50KDQwNCwgMTU2KSxcclxuICAgICAgbmV3IFBvaW50KDUyNywgMjYzKSxcclxuICAgICAgbmV3IFBvaW50KDc1MCwgMzUwKVxyXG4gICAgXTtcclxuICAgIGNvbnN0IHBvbHlnb24yID0gbmV3IFBvbHlnb24ocG9pbnRzMiwgTGluZVByb3BlcnRpZXMuZ2V0RGVmYXVsdCgpKTtcclxuXHJcbiAgICB0aGlzLnBvbHlnb25MYXllci5wYXRocy5wdXNoKHBvbHlnb24xLCBwb2x5Z29uMik7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9JbnB1dERhdGFJbml0aWFsaXplci50cyIsImltcG9ydCB7IENPTE9SUyB9IGZyb20gJ2NvbW1vbi9DT0xPUlMnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ2NvbW1vbi9Qb2x5Z29uJztcclxuXHJcbmltcG9ydCB7IFBvbHlnb25GaWxsZXIgfSBmcm9tICdwb2x5Z29uLWZpbGxlci9Qb2x5Z29uRmlsbGVyJztcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuXHJcbmludGVyZmFjZSBSZW5kZXJlckRlcGVuZGVuY2llcyB7XHJcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwb2x5Z29uRmlsbGVyOiBQb2x5Z29uRmlsbGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xyXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIHJlbmRlcmluZ0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwcml2YXRlIHBvbHlnb25GaWxsZXI6IFBvbHlnb25GaWxsZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUmVuZGVyZXJEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKGNvbnRleHQgPT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGNhbnZhcyAyZCByZW5kZXJpbmcgY29udGV4dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuZm9udCA9IGNvbmZpZ3VyYXRpb24uY2FudmFzRm9udDtcclxuXHJcbiAgICB0aGlzLnBvbHlnb25GaWxsZXIgPSBkZXBlbmRlbmNpZXMucG9seWdvbkZpbGxlcjtcclxuICAgIHRoaXMucG9seWdvbkZpbGxlci5pbmplY3RDYW52YXNSZW5kZXJpbmdDb250ZXh0KHRoaXMucmVuZGVyaW5nQ29udGV4dCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LnN0cm9rZVN0eWxlID0gQ09MT1JTLkJMQUNLLmZpbGxTdHlsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3UG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLmRyYXdQaXhlbChwb2ludC54LCBwb2ludC55KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3UGl4ZWwoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5maWxsUmVjdCh4LCB5LCAxLCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3TGluZShsaW5lOiBMaW5lLCBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXMpOiB2b2lkO1xyXG4gIHB1YmxpYyBkcmF3TGluZShzdGFydFBvaW50OiBQb2ludCwgZW5kUG9pbnQ6IFBvaW50LCBsaW5lUHJvcGVydGllczogTGluZVByb3BlcnRpZXMpOiB2b2lkO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgcHVibGljIGRyYXdMaW5lKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICBpZiAoYXJnc1swXSBpbnN0YW5jZW9mIExpbmUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZHJhd0xpbmVCZXR3ZWVuUG9pbnRzKGFyZ3NbMF0ucDEsIGFyZ3NbMF0ucDIsIGFyZ3NbMV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZHJhd0xpbmVCZXR3ZWVuUG9pbnRzKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGRyYXdQYXRoKHBhdGg6IFBhdGgpIHtcclxuICAgIGNvbnN0IHBhdGhMaW5lUHJvcGVydGllcyA9IHBhdGguZ2V0TGluZVByb3BlcnRpZXMoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgcGF0aC5nZXRMaW5lSXRlcmF0b3IoKSkge1xyXG4gICAgICB0aGlzLmRyYXdMaW5lKGxpbmUsIHBhdGhMaW5lUHJvcGVydGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBQb2x5Z29uKSB7XHJcbiAgICAgIHRoaXMucG9seWdvbkZpbGxlci5maWxsUG9seWdvbihwYXRoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaWxsVGV4dCh0ZXh0OiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcclxuICBwdWJsaWMgZmlsbFRleHQodGV4dDogc3RyaW5nLCBwb2ludDogUG9pbnQpOiB2b2lkO1xyXG4gIHB1YmxpYyBmaWxsVGV4dCh0ZXh0OiBzdHJpbmcsIHBvaW50T3JYOiBudW1iZXIgfCBQb2ludCwgeT86IG51bWJlcikge1xyXG4gICAgbGV0IHggPSBwb2ludE9yWDtcclxuICAgIGlmICh0eXBlb2YgcG9pbnRPclggPT09ICdvYmplY3QnICYmIHBvaW50T3JYIGluc3RhbmNlb2YgUG9pbnQpIHtcclxuICAgICAgeCA9IHBvaW50T3JYLng7XHJcbiAgICAgIHkgPSBwb2ludE9yWC55O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5maWxsVGV4dCh0ZXh0LCA8bnVtYmVyPngsIDxudW1iZXI+eSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3TGluZUJldHdlZW5Qb2ludHMoXHJcbiAgICBzdGFydFBvaW50OiBQb2ludCxcclxuICAgIGVuZFBvaW50OiBQb2ludCxcclxuICAgIGxpbmVQcm9wZXJ0aWVzOiBMaW5lUHJvcGVydGllc1xyXG4gICkge1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LnN0cm9rZVN0eWxlID0gbGluZVByb3BlcnRpZXMuY29sb3IuZmlsbFN0eWxlO1xyXG5cclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5tb3ZlVG8oc3RhcnRQb2ludC54LCBzdGFydFBvaW50LnkpO1xyXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmxpbmVUbyhlbmRQb2ludC54LCBlbmRQb2ludC55KTtcclxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5zdHJva2UoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvUmVuZGVyZXIudHMiLCJpbXBvcnQgeyBIaXRUZXN0UmVzdWx0IH0gZnJvbSAnY29tbW9uL0hpdFRlc3RSZXN1bHQnO1xyXG5pbXBvcnQgeyBMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICdSZW5kZXJlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhZ2Uge1xyXG4gIHB1YmxpYyBsYXllcnM6IExheWVyW10gPSBbXTtcclxuXHJcbiAgcHVibGljIHJlbmRlcihyZW5kZXJlcjogUmVuZGVyZXIpIHtcclxuICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gbGF5ZXIucmVuZGVyKHJlbmRlcmVyKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlTGF5ZXIobGF5ZXI6IExheWVyKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubGF5ZXJzLmluZGV4T2YobGF5ZXIpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaXRUZXN0KHBvaW50OiBQb2ludCk6IEhpdFRlc3RSZXN1bHQgfCBudWxsIHtcclxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5sYXllcnMpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gbGF5ZXIuaGl0VGVzdChwb2ludCk7XHJcbiAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmluZExheWVyQnlOYW1lKG5hbWU6IHN0cmluZyk6IExheWVyIHtcclxuICAgIGNvbnN0IGZvdW5kTGF5ZXIgPSB0aGlzLmxheWVycy5maW5kKGxheWVyID0+IGxheWVyLm5hbWUgPT09IG5hbWUpO1xyXG5cclxuICAgIGlmICghZm91bmRMYXllcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYExheWVyIHdpdGggbmFtZSAke25hbWV9IGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZvdW5kTGF5ZXI7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL1N0YWdlLnRzIiwiaW1wb3J0IHsgSW1hZ2VEb3dubG9hZGVyIH0gZnJvbSAnY29tbW9uL0ltYWdlRG93bmxvYWRlcic7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICdSZW5kZXJlcic7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXREYXRhU2VydmljZSB9IGZyb20gJ3VpL0lucHV0RGF0YVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICd1aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXInO1xyXG5pbXBvcnQgeyBOZXdQb2x5Z29uVUlDb250cm9sbGVyIH0gZnJvbSAndWkvTmV3UG9seWdvblVJQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFBhdGhEcmFnZ2luZ1NlcnZpY2UgfSBmcm9tICd1aS9QYXRoRHJhZ2dpbmdTZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9pbnREcmFnZ2luZ1NlcnZpY2UgfSBmcm9tICd1aS9Qb2ludERyYWdnaW5nU2VydmljZSc7XHJcbmltcG9ydCB7IFBvaW50SW5zZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAndWkvUG9pbnRJbnNlcnRlclNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb2ludFJlbW92ZXJTZXJ2aWNlIH0gZnJvbSAndWkvUG9pbnRSZW1vdmVyU2VydmljZSc7XHJcbmltcG9ydCB7IFBvaW50U3luY1NlcnZpY2UgfSBmcm9tICd1aS9Qb2ludFN5bmNTZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VyaWFsaXphdGlvblNlcnZpY2UgfSBmcm9tICd1aS9TZXJpYWxpemF0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJ3VpL1VJU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTGluZUNsaWNrRXZlbnQgfSBmcm9tICdldmVudHMvTGluZUNsaWNrRXZlbnQnO1xyXG5cclxuaW1wb3J0ICd1aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXknO1xyXG5pbXBvcnQgJ3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0J1dHRvbic7XHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zRGlhbG9nJztcclxuXHJcbmludGVyZmFjZSBVSUNvbnRyb2xsZXJEZXBlbmRlbmNpZXMge1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHN0YWdlOiBTdGFnZTtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVJQ29udHJvbGxlciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhZ2U6IFN0YWdlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxuXHJcbiAgcHJpdmF0ZSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIGFwcGxpY2F0aW9uVUlDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHVpU2VydmljZXM6IFVJU2VydmljZVtdID0gW107XHJcbiAgcHJpdmF0ZSBuZXdQb2x5Z29uVUlDb250cm9sbGVyOiBOZXdQb2x5Z29uVUlDb250cm9sbGVyO1xyXG4gIHByaXZhdGUgcGF0aERyYWdnaW5nU2VydmljZTogUGF0aERyYWdnaW5nU2VydmljZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBVSUNvbnRyb2xsZXJEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIHRoaXMucmVuZGVyZXIgPSBkZXBlbmRlbmNpZXMucmVuZGVyZXI7XHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5pbWFnZURvd25sb2FkZXIgPSBkZXBlbmRlbmNpZXMuaW1hZ2VEb3dubG9hZGVyO1xyXG5cclxuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgY29uc3QgYXBwbGljYXRpb25VSUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZ3VyYXRpb24uYXBwbGljYXRpb25VSUNvbnRhaW5lcklEKTtcclxuICAgIGlmICghYXBwbGljYXRpb25VSUNvbnRhaW5lcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwcGxpY2F0aW9uIFVJIGNvbnRhaW5lciBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uVUlDb250YWluZXIgPSBhcHBsaWNhdGlvblVJQ29udGFpbmVyO1xyXG5cclxuICAgIHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyID0gbmV3IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcih0aGlzLmNhbnZhcyk7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZU5ld1BvbHlnb25VSUNvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlUG9pbnREcmFnZ2luZ1NlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlUG9pbnRJbnNlcnRlclNlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlUG9pbnRSZW1vdmVyU2VydmljZSgpO1xyXG4gICAgdGhpcy5jcmVhdGVQb2ludFN5bmNTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBhdGhEcmFnZ2luZ1NlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlU2VyaWFsaXphdGlvblNlcnZpY2UoKTtcclxuICAgIHRoaXMuY3JlYXRlSW5wdXREYXRhU2VydmljZSgpO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5mb3JFYWNoKHVpU2VydmljZSA9PiB1aVNlcnZpY2UuaW5pdCgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XHJcblxyXG4gICAgdGhpcy51aVNlcnZpY2VzLmZvckVhY2godWlTZXJ2aWNlID0+IHVpU2VydmljZS5kZXN0cm95KCkpO1xyXG4gICAgdGhpcy51aVNlcnZpY2VzLnNwbGljZSgwLCB0aGlzLnVpU2VydmljZXMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICghZXZlbnQuY3RybEtleSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXRoRHJhZ2dpbmdTZXJ2aWNlLnN0YXJ0TW92aW5nUGF0aChldmVudCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXRoRHJhZ2dpbmdTZXJ2aWNlLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIuZ2V0UG9pbnRGcm9tTW91c2VFdmVudChldmVudCk7XHJcblxyXG4gICAgY29uc3QgaGl0VGVzdFJlc3VsdCA9IHRoaXMuc3RhZ2UuaGl0VGVzdChwb2ludCk7XHJcblxyXG4gICAgaWYgKCFoaXRUZXN0UmVzdWx0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5ld1BvbHlnb25VSUNvbnRyb2xsZXIuYWRkTmV3UG9pbnQocG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaGl0VGVzdFJlc3VsdC5wYXRoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IExpbmVDbGlja0V2ZW50KGhpdFRlc3RSZXN1bHQubGluZSwgaGl0VGVzdFJlc3VsdC5wYXRoLCBwb2ludCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQb2ludFN5bmNTZXJ2aWNlKCkge1xyXG4gICAgY29uc3QgcG9pbnRTeW5jU2VydmljZSA9IG5ldyBQb2ludFN5bmNTZXJ2aWNlKHtcclxuICAgICAgY29udGFpbmVyOiB0aGlzLmFwcGxpY2F0aW9uVUlDb250YWluZXIsXHJcbiAgICAgIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlLFxyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChwb2ludFN5bmNTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUG9pbnRSZW1vdmVyU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHBvaW50UmVtb3ZlclNlcnZpY2UgPSBuZXcgUG9pbnRSZW1vdmVyU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHBvaW50UmVtb3ZlclNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQb2ludERyYWdnaW5nU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHBvaW50RHJhZ2dpbmdTZXJ2aWNlID0gbmV3IFBvaW50RHJhZ2dpbmdTZXJ2aWNlKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2VcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHBvaW50RHJhZ2dpbmdTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTmV3UG9seWdvblVJQ29udHJvbGxlcigpIHtcclxuICAgIHRoaXMubmV3UG9seWdvblVJQ29udHJvbGxlciA9IG5ldyBOZXdQb2x5Z29uVUlDb250cm9sbGVyKHtcclxuICAgICAgYXBwbGljYXRpb25VSUNvbnRhaW5lcjogdGhpcy5hcHBsaWNhdGlvblVJQ29udGFpbmVyLFxyXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZSxcclxuICAgICAgcG9seWdvbkxheWVyOiB0aGlzLnN0YWdlLmZpbmRMYXllckJ5TmFtZShMRVguUE9MWUdPTl9MQVlFUl9OQU1FKSxcclxuICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXHJcbiAgICAgIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIsXHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3JcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHRoaXMubmV3UG9seWdvblVJQ29udHJvbGxlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVBvaW50SW5zZXJ0ZXJTZXJ2aWNlKCkge1xyXG4gICAgY29uc3QgcG9pbnRJbnNlcnRlclNlcnZpY2UgPSBuZXcgUG9pbnRJbnNlcnRlclNlcnZpY2Uoe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaChwb2ludEluc2VydGVyU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVBhdGhEcmFnZ2luZ1NlcnZpY2UoKSB7XHJcbiAgICB0aGlzLnBhdGhEcmFnZ2luZ1NlcnZpY2UgPSBuZXcgUGF0aERyYWdnaW5nU2VydmljZSh7XHJcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIsXHJcbiAgICAgIHN0YWdlOiB0aGlzLnN0YWdlXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVpU2VydmljZXMucHVzaCh0aGlzLnBhdGhEcmFnZ2luZ1NlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVTZXJpYWxpemF0aW9uU2VydmljZSgpIHtcclxuICAgIGNvbnN0IHNlcmlhbGl6YXRpb25TZXJ2aWNlID0gbmV3IFNlcmlhbGl6YXRpb25TZXJ2aWNlKHtcclxuICAgICAgZXZlbnRBZ2dyZWdhdG9yOiB0aGlzLmV2ZW50QWdncmVnYXRvcixcclxuICAgICAgc3RhZ2U6IHRoaXMuc3RhZ2VcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKHNlcmlhbGl6YXRpb25TZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSW5wdXREYXRhU2VydmljZSgpIHtcclxuICAgIGNvbnN0IGlucHV0RGF0YVNlcnZpY2UgPSBuZXcgSW5wdXREYXRhU2VydmljZSh7XHJcbiAgICAgIGV2ZW50QWdncmVnYXRvcjogdGhpcy5ldmVudEFnZ3JlZ2F0b3IsXHJcbiAgICAgIGltYWdlRG93bmxvYWRlcjogdGhpcy5pbWFnZURvd25sb2FkZXJcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudWlTZXJ2aWNlcy5wdXNoKGlucHV0RGF0YVNlcnZpY2UpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9VSUNvbnRyb2xsZXIudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtcclxuICBOZXdCYWNrZ3JvdW5kVGV4dHVyZUV2ZW50LFxyXG4gIE5ld0hlaWdodE1hcEV2ZW50LFxyXG4gIE5ld0xpZ2h0Q29sb3JFdmVudCxcclxuICBOZXdMaWdodFZlcnNvclR5cGVFdmVudCxcclxuICBOZXdOb3JtYWxNYXBFdmVudFxyXG59IGZyb20gJ2V2ZW50cy9pbnB1dC1kYXRhJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICd1aS9VSVNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JTZWxlY3REaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cnO1xyXG5pbXBvcnQgeyBEaWFsb2dPdmVybGF5IH0gZnJvbSAndWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5JztcclxuaW1wb3J0IHsgSW1hZ2VTZWxlY3REaWFsb2cgfSBmcm9tICd1aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgSW1hZ2VEb3dubG9hZGVyIH0gZnJvbSAnY29tbW9uL0ltYWdlRG93bmxvYWRlcic7XHJcbmltcG9ydCB7IExpZ2h0VmVyc29yVHlwZSB9IGZyb20gJ2NvbW1vbi9MaWdodFZlcnNvclR5cGUnO1xyXG5cclxuaW50ZXJmYWNlIFNlcmlhbGl6YXRpb25TZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBpbWFnZURvd25sb2FkZXI6IEltYWdlRG93bmxvYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0RGF0YVNlcnZpY2UgaW1wbGVtZW50cyBVSVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgaW5wdXREYXRhQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGRpYWxvZ092ZXJsYXk6IERpYWxvZ092ZXJsYXk7XHJcbiAgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIGltYWdlRG93bmxvYWRlcjogSW1hZ2VEb3dubG9hZGVyO1xyXG5cclxuICBwcml2YXRlIG9wZW5CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBiYWNrZ3JvdW5kVGV4dHVyZURpYWxvZzogSW1hZ2VTZWxlY3REaWFsb2c7XHJcblxyXG4gIHByaXZhdGUgb3BlbkxpZ2h0Q29sb3JEaWFsb2dCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgbGlnaHRDb2xvckRpYWxvZzogQ29sb3JTZWxlY3REaWFsb2c7XHJcblxyXG4gIHByaXZhdGUgbGlnaHRWZXJzb3JDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgbGlnaHRWZXJzb3JTZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIG9wZW5IZWlnaHRNYXBEaWFsb2dCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gIHByaXZhdGUgaGVpZ2h0TWFwRGlhbG9nOiBJbWFnZVNlbGVjdERpYWxvZztcclxuXHJcbiAgcHJpdmF0ZSBvcGVuTm9ybWFsTWFwRGlhbG9nQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBwcml2YXRlIG5vcm1hbE1hcERpYWxvZzogSW1hZ2VTZWxlY3REaWFsb2c7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogU2VyaWFsaXphdGlvblNlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuaW1hZ2VEb3dubG9hZGVyID0gZGVwZW5kZW5jaWVzLmltYWdlRG93bmxvYWRlcjtcclxuXHJcbiAgICB0aGlzLnNldHVwQmFja2dyb3VuZFRleHR1cmVEaWFsb2coKTtcclxuICAgIHRoaXMuc2V0dXBMaWdodFZlcnNvclNlbGVjdCgpO1xyXG4gICAgdGhpcy5zZXR1cExpZ2h0Q29sb3JEaWFsb2coKTtcclxuICAgIHRoaXMuc2V0dXBOb3JtYWxNYXBEaWFsb2coKTtcclxuICAgIHRoaXMuc2V0dXBIZWlnaHRNYXBEaWFsb2coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgY29uc3QgaW5wdXREYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWRhdGEtY29udGFpbmVyJyk7XHJcbiAgICBpZiAoIWlucHV0RGF0YUNvbnRhaW5lcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0IGRhdGEgY29udGFpbmVyIG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyID0gaW5wdXREYXRhQ29udGFpbmVyO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5vcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2dCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5vcGVuTGlnaHRDb2xvckRpYWxvZ0J1dHRvbik7XHJcbiAgICB0aGlzLmlucHV0RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm9wZW5Ob3JtYWxNYXBEaWFsb2dCdXR0b24pO1xyXG4gICAgdGhpcy5pbnB1dERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5vcGVuSGVpZ2h0TWFwRGlhbG9nQnV0dG9uKTtcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubGlnaHRWZXJzb3JDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGRpYWxvZ092ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcHAtZGlhbG9nLW92ZXJsYXknKTtcclxuICAgIGlmICghZGlhbG9nT3ZlcmxheSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpYWxvZyBvdmVybGF5IG5vdCBmb3VuZCcpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaWFsb2dPdmVybGF5ID0gPERpYWxvZ092ZXJsYXk+ZGlhbG9nT3ZlcmxheTtcclxuXHJcbiAgICB0aGlzLm9wZW5CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAnY2xpY2snLFxyXG4gICAgICB0aGlzLm9wZW5CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ1xyXG4gICAgKTtcclxuICAgIHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5MaWdodENvbG9yRGlhbG9nKTtcclxuICAgIHRoaXMub3Blbk5vcm1hbE1hcERpYWxvZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbk5vcm1hbE1hcERpYWxvZyk7XHJcbiAgICB0aGlzLm9wZW5IZWlnaHRNYXBEaWFsb2dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5IZWlnaHRNYXBEaWFsb2cpO1xyXG4gICAgdGhpcy5saWdodFZlcnNvclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uTGlnaHRWZXJzb3JTZWxlY3RDaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIHRoaXMuaW5wdXREYXRhQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIHRoaXMub3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdjbGljaycsXHJcbiAgICAgIHRoaXMub3BlbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nXHJcbiAgICApO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZURpYWxvZy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0Nsb3NlZCk7XHJcbiAgICB0aGlzLmJhY2tncm91bmRUZXh0dXJlRGlhbG9nLmNsb3NlKCk7XHJcblxyXG4gICAgdGhpcy5vcGVuTGlnaHRDb2xvckRpYWxvZ0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2cpO1xyXG4gICAgdGhpcy5saWdodENvbG9yRGlhbG9nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkxpZ2h0Q29sb3JEaWFsb2dDbG9zZWQpO1xyXG4gICAgdGhpcy5saWdodENvbG9yRGlhbG9nLmNsb3NlKCk7XHJcblxyXG4gICAgdGhpcy5vcGVuSGVpZ2h0TWFwRGlhbG9nQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuSGVpZ2h0TWFwRGlhbG9nKTtcclxuICAgIHRoaXMuaGVpZ2h0TWFwRGlhbG9nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkhlaWdodE1hcERpYWxvZ0Nsb3NlZCk7XHJcbiAgICB0aGlzLmhlaWdodE1hcERpYWxvZy5jbG9zZSgpO1xyXG5cclxuICAgIHRoaXMub3Blbk5vcm1hbE1hcERpYWxvZ0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbk5vcm1hbE1hcERpYWxvZyk7XHJcbiAgICB0aGlzLm5vcm1hbE1hcERpYWxvZy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25Ob3JtYWxNYXBEaWFsb2dDbG9zZWQpO1xyXG4gICAgdGhpcy5ub3JtYWxNYXBEaWFsb2cuY2xvc2UoKTtcclxuXHJcbiAgICB0aGlzLmxpZ2h0VmVyc29yU2VsZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25MaWdodFZlcnNvclNlbGVjdENoYW5nZSk7XHJcbiAgfVxyXG5cclxuICAvLyAjcmVnaW9uIEJhY2tncm91bmQgdGV4dHVyZSBkaWFsb2dcclxuICBwcml2YXRlIHNldHVwQmFja2dyb3VuZFRleHR1cmVEaWFsb2coKSB7XHJcbiAgICB0aGlzLm9wZW5CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5vcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2dCdXR0b24uaW5uZXJUZXh0ID0gJ1NlbGVjdCBiYWNrZ3JvdW5kIHRleHR1cmUnO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmVEaWFsb2cgPSBuZXcgSW1hZ2VTZWxlY3REaWFsb2coY29uZmlndXJhdGlvbi5wcmVzZXRCYWNrZ3JvdW5kVGV4dHVyZXMpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZURpYWxvZy5uYW1lID0gJ0JhY2tncm91bmQgdGV4dHVyZSc7XHJcblxyXG4gICAgdGhpcy5vcGVuQmFja2dyb3VuZFRleHR1cmVEaWFsb2cgPSB0aGlzLm9wZW5CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQ2xvc2VkID0gdGhpcy5vbkJhY2tncm91bmRUZXh0dXJlRGlhbG9nQ2xvc2VkLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZygpIHtcclxuICAgIHRoaXMuZGlhbG9nT3ZlcmxheS5zaG93RGlhbG9nKHRoaXMuYmFja2dyb3VuZFRleHR1cmVEaWFsb2cpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kVGV4dHVyZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25CYWNrZ3JvdW5kVGV4dHVyZURpYWxvZ0Nsb3NlZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIG9uQmFja2dyb3VuZFRleHR1cmVEaWFsb2dDbG9zZWQoKSB7XHJcbiAgICBpZiAodGhpcy5iYWNrZ3JvdW5kVGV4dHVyZURpYWxvZy53YXNDYW5jZWxsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkSW1hZ2UgPSB0aGlzLmJhY2tncm91bmRUZXh0dXJlRGlhbG9nLnNlbGVjdGVkSW1hZ2U7XHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBhd2FpdCB0aGlzLmltYWdlRG93bmxvYWRlci5pbWFnZVRvSW1hZ2VEYXRhKHNlbGVjdGVkSW1hZ2UpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0JhY2tncm91bmRUZXh0dXJlRXZlbnQoaW1hZ2VEYXRhKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIExpZ2h0IGNvbG9yIGRpYWxvZ1xyXG4gIHByaXZhdGUgc2V0dXBMaWdodENvbG9yRGlhbG9nKCkge1xyXG4gICAgdGhpcy5vcGVuTGlnaHRDb2xvckRpYWxvZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5vcGVuTGlnaHRDb2xvckRpYWxvZ0J1dHRvbi5pbm5lclRleHQgPSAnU2VsZWN0IGxpZ2h0IGNvbG9yJztcclxuXHJcbiAgICB0aGlzLmxpZ2h0Q29sb3JEaWFsb2cgPSBuZXcgQ29sb3JTZWxlY3REaWFsb2coKTtcclxuICAgIHRoaXMubGlnaHRDb2xvckRpYWxvZy5uYW1lID0gJ0xpZ2h0IGNvbG9yJztcclxuICAgIHRoaXMubGlnaHRDb2xvckRpYWxvZy5zZWxlY3RlZENvbG9yID0gY29uZmlndXJhdGlvbi5wcmVzZXRMaWdodENvbG9yO1xyXG5cclxuICAgIHRoaXMub3BlbkxpZ2h0Q29sb3JEaWFsb2cgPSB0aGlzLm9wZW5MaWdodENvbG9yRGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTGlnaHRDb2xvckRpYWxvZ0Nsb3NlZCA9IHRoaXMub25MaWdodENvbG9yRGlhbG9nQ2xvc2VkLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5MaWdodENvbG9yRGlhbG9nKCkge1xyXG4gICAgdGhpcy5kaWFsb2dPdmVybGF5LnNob3dEaWFsb2codGhpcy5saWdodENvbG9yRGlhbG9nKTtcclxuICAgIHRoaXMubGlnaHRDb2xvckRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25MaWdodENvbG9yRGlhbG9nQ2xvc2VkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgb25MaWdodENvbG9yRGlhbG9nQ2xvc2VkKCkge1xyXG4gICAgaWYgKHRoaXMubGlnaHRDb2xvckRpYWxvZy53YXNDYW5jZWxsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpZ2h0Q29sb3IgPSB0aGlzLmxpZ2h0Q29sb3JEaWFsb2cuc2VsZWN0ZWRDb2xvcjtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld0xpZ2h0Q29sb3JFdmVudChsaWdodENvbG9yKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIE5vcm1hbCBtYXAgZGlhbG9nXHJcbiAgcHJpdmF0ZSBzZXR1cE5vcm1hbE1hcERpYWxvZygpIHtcclxuICAgIHRoaXMub3Blbk5vcm1hbE1hcERpYWxvZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5vcGVuTm9ybWFsTWFwRGlhbG9nQnV0dG9uLmlubmVyVGV4dCA9ICdTZWxlY3Qgbm9ybWFsIG1hcCc7XHJcblxyXG4gICAgdGhpcy5ub3JtYWxNYXBEaWFsb2cgPSBuZXcgSW1hZ2VTZWxlY3REaWFsb2coY29uZmlndXJhdGlvbi5wcmVzZXROb3JtYWxNYXBzKTtcclxuICAgIHRoaXMubm9ybWFsTWFwRGlhbG9nLm5hbWUgPSAnTm9ybWFsIG1hcCc7XHJcblxyXG4gICAgdGhpcy5vcGVuTm9ybWFsTWFwRGlhbG9nID0gdGhpcy5vcGVuTm9ybWFsTWFwRGlhbG9nLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTm9ybWFsTWFwRGlhbG9nQ2xvc2VkID0gdGhpcy5vbk5vcm1hbE1hcERpYWxvZ0Nsb3NlZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMubm9ybWFsTWFwRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbk5vcm1hbE1hcERpYWxvZ0Nsb3NlZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5Ob3JtYWxNYXBEaWFsb2coKSB7XHJcbiAgICB0aGlzLmRpYWxvZ092ZXJsYXkuc2hvd0RpYWxvZyh0aGlzLm5vcm1hbE1hcERpYWxvZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIG9uTm9ybWFsTWFwRGlhbG9nQ2xvc2VkKCkge1xyXG4gICAgaWYgKHRoaXMubm9ybWFsTWFwRGlhbG9nLndhc0NhbmNlbGxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRJbWFnZSA9IHRoaXMubm9ybWFsTWFwRGlhbG9nLnNlbGVjdGVkSW1hZ2U7XHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBhd2FpdCB0aGlzLmltYWdlRG93bmxvYWRlci5pbWFnZVRvSW1hZ2VEYXRhKHNlbGVjdGVkSW1hZ2UpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IE5ld05vcm1hbE1hcEV2ZW50KGltYWdlRGF0YSkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgfVxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBMaWdodCB2ZXJzb3Igc2VsZWN0XHJcbiAgcHJpdmF0ZSBzZXR1cExpZ2h0VmVyc29yU2VsZWN0KCkge1xyXG4gICAgdGhpcy5saWdodFZlcnNvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xpZ2h0LXdlcnNvci1zZWxlY3QnKTtcclxuICAgIGxhYmVsLmlubmVyVGV4dCA9ICdMaWdodCB2ZXJzb3I6ICc7XHJcbiAgICB0aGlzLmxpZ2h0VmVyc29yQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcbiAgICB0aGlzLmxpZ2h0VmVyc29yU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBjb25zdCBjb25zdGFudFZlcnNvck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgY29uc3RhbnRWZXJzb3JPcHRpb24uaW5uZXJUZXh0ID0gJ0NvbnN0YW50IChbMCwgMCwgMV0pJztcclxuICAgIGNvbnN0YW50VmVyc29yT3B0aW9uLnZhbHVlID0gJ2NvbnN0YW50JztcclxuXHJcbiAgICBjb25zdCBtb3ZpbmdWZXJzb3JPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgIG1vdmluZ1ZlcnNvck9wdGlvbi5pbm5lclRleHQgPSAnQ2lyY2xpbmcgYWJvdmUgdGhlIHNjcmVlbic7XHJcbiAgICBtb3ZpbmdWZXJzb3JPcHRpb24udmFsdWUgPSAnY2lyY2xpbmcnO1xyXG5cclxuICAgIHRoaXMubGlnaHRWZXJzb3JTZWxlY3QuYXBwZW5kQ2hpbGQoY29uc3RhbnRWZXJzb3JPcHRpb24pO1xyXG4gICAgdGhpcy5saWdodFZlcnNvclNlbGVjdC5hcHBlbmRDaGlsZChtb3ZpbmdWZXJzb3JPcHRpb24pO1xyXG5cclxuICAgIHRoaXMubGlnaHRWZXJzb3JDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5saWdodFZlcnNvclNlbGVjdCk7XHJcblxyXG4gICAgdGhpcy5vbkxpZ2h0VmVyc29yU2VsZWN0Q2hhbmdlID0gdGhpcy5vbkxpZ2h0VmVyc29yU2VsZWN0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTGlnaHRWZXJzb3JTZWxlY3RDaGFuZ2UoKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMubGlnaHRWZXJzb3JTZWxlY3QudmFsdWU7XHJcbiAgICBjb25zdCB2ZXJzb3JUeXBlczogeyBbbmFtZTogc3RyaW5nXTogTGlnaHRWZXJzb3JUeXBlIH0gPSB7XHJcbiAgICAgIGNvbnN0YW50OiBMaWdodFZlcnNvclR5cGUuQ29uc3RhbnQsXHJcbiAgICAgIGNpcmNsaW5nOiBMaWdodFZlcnNvclR5cGUuQ2lyY2xpbmdcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdmVyc29yVHlwZSA9IHZlcnNvclR5cGVzW3ZhbHVlXTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdMaWdodFZlcnNvclR5cGVFdmVudCh2ZXJzb3JUeXBlKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBIZWlnaHQgbWFwIGRpYWxvZ1xyXG4gIHByaXZhdGUgc2V0dXBIZWlnaHRNYXBEaWFsb2coKSB7XHJcbiAgICB0aGlzLm9wZW5IZWlnaHRNYXBEaWFsb2dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMub3BlbkhlaWdodE1hcERpYWxvZ0J1dHRvbi5pbm5lclRleHQgPSAnU2VsZWN0IGhlaWdodCBtYXAnO1xyXG5cclxuICAgIHRoaXMuaGVpZ2h0TWFwRGlhbG9nID0gbmV3IEltYWdlU2VsZWN0RGlhbG9nKGNvbmZpZ3VyYXRpb24ucHJlc2V0SGVpZ2h0TWFwcyk7XHJcbiAgICB0aGlzLmhlaWdodE1hcERpYWxvZy5uYW1lID0gJ0hlaWdodCBtYXAnO1xyXG5cclxuICAgIHRoaXMub3BlbkhlaWdodE1hcERpYWxvZyA9IHRoaXMub3BlbkhlaWdodE1hcERpYWxvZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkhlaWdodE1hcERpYWxvZ0Nsb3NlZCA9IHRoaXMub25IZWlnaHRNYXBEaWFsb2dDbG9zZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmhlaWdodE1hcERpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25IZWlnaHRNYXBEaWFsb2dDbG9zZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuSGVpZ2h0TWFwRGlhbG9nKCkge1xyXG4gICAgdGhpcy5kaWFsb2dPdmVybGF5LnNob3dEaWFsb2codGhpcy5oZWlnaHRNYXBEaWFsb2cpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBvbkhlaWdodE1hcERpYWxvZ0Nsb3NlZCgpIHtcclxuICAgIGlmICh0aGlzLmhlaWdodE1hcERpYWxvZy53YXNDYW5jZWxsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkSW1hZ2UgPSB0aGlzLmhlaWdodE1hcERpYWxvZy5zZWxlY3RlZEltYWdlO1xyXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gYXdhaXQgdGhpcy5pbWFnZURvd25sb2FkZXIuaW1hZ2VUb0ltYWdlRGF0YShzZWxlY3RlZEltYWdlKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBOZXdIZWlnaHRNYXBFdmVudChpbWFnZURhdGEpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gIH1cclxuICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvSW5wdXREYXRhU2VydmljZS50cyIsImltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gJ3VpL2NvbXBvbmVudHMvRGlhbG9nQm94JztcclxuXHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29tbW9uL0NvbG9yJztcclxuXHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3MnO1xyXG5cclxuY29uc3QgY2xhc3NOYW1lcyA9IHtcclxuICBESUFMT0c6ICdjb2xvci1zZWxlY3QtZGlhbG9nJyxcclxuICBIRUFERVI6ICdjb2xvci1zZWxlY3QtZGlhbG9nX19oZWFkZXInLFxyXG4gIEhFQURJTkc6ICdjb2xvci1zZWxlY3QtZGlhbG9nX19oZWFkaW5nJyxcclxuICBCTE9DSzogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2Jsb2NrJyxcclxuICBCT1RUT01fQlVUVE9OUzogJ2NvbG9yLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yU2VsZWN0RGlhbG9nIGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBEaWFsb2dCb3gge1xyXG4gIHByaXZhdGUgX3dhc0NhbmNlbGxlZCA9IHRydWU7XHJcblxyXG4gIHByaXZhdGUgaGVhZGVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGhlYWRpbmc6IEhUTUxIZWFkaW5nRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBjb2xvcklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGJvdHRvbUJ1dHRvbnNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgY2FuY2VsQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBwcml2YXRlIGNvbmZpcm1CdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuRElBTE9HKTtcclxuXHJcbiAgICB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2sgPSB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2sgPSB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVIZWFkZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlQ29sb3JJbnB1dCgpO1xyXG4gICAgdGhpcy5jcmVhdGVCb3R0b21CdXR0b25zKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAgICByZXR1cm4gWyduYW1lJ107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpIHx8ICdDb2xvciBzZWxlY3QnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2V0QXR0cmlidXRlKCduYW1lJywgdmFsdWUpO1xyXG4gICAgdGhpcy5oZWFkaW5nLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzZWxlY3RlZENvbG9yKCkge1xyXG4gICAgcmV0dXJuIENvbG9yLmZyb21IZXhTdHJpbmcodGhpcy5jb2xvcklucHV0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc2VsZWN0ZWRDb2xvcihjb2xvcjogQ29sb3IpIHtcclxuICAgIHRoaXMuY29sb3JJbnB1dC52YWx1ZSA9IGNvbG9yLnRvSGV4U3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLl93YXNDYW5jZWxsZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmNvbG9ySW5wdXQpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIpO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2FuY2VsQnV0dG9uQ2xpY2spO1xyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuaGVhZGVyKTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5jb2xvcklucHV0KTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB3YXNDYW5jZWxsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2FzQ2FuY2VsbGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlKCkge1xyXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xvc2UnKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuQ2xvc2UoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgdGhpcy5oZWFkZXIgPSB0aGlzLmNyZWF0ZUJsb2NrKCk7XHJcbiAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuSEVBREVSKTtcclxuXHJcbiAgICB0aGlzLmhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGhpcy5oZWFkaW5nLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5IRUFESU5HKTtcclxuICAgIHRoaXMuaGVhZGluZy5pbm5lclRleHQgPSB0aGlzLm5hbWU7XHJcblxyXG4gICAgdGhpcy5oZWFkZXIuYXBwZW5kQ2hpbGQodGhpcy5oZWFkaW5nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ29sb3JJbnB1dCgpIHtcclxuICAgIHRoaXMuY29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aGlzLmNvbG9ySW5wdXQudHlwZSA9ICdjb2xvcic7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUJvdHRvbUJ1dHRvbnMoKSB7XHJcbiAgICB0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuQk9UVE9NX0JVVFRPTlMpO1xyXG5cclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJztcclxuXHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5pbm5lclRleHQgPSAnQ29uZmlybSc7XHJcblxyXG4gICAgdGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FuY2VsQnV0dG9uKTtcclxuICAgIHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbmZpcm1CdXR0b24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNhbmNlbEJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNvbmZpcm1CdXR0b25DbGljaygpIHtcclxuICAgIHRoaXMuX3dhc0NhbmNlbGxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCbG9jaygpIHtcclxuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuQkxPQ0spO1xyXG5cclxuICAgIHJldHVybiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWNvbG9yLXNlbGVjdC1kaWFsb2cnLCBDb2xvclNlbGVjdERpYWxvZyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvY29sb3Itc2VsZWN0LWRpYWxvZy9Db2xvclNlbGVjdERpYWxvZy50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQ29sb3JTZWxlY3REaWFsb2cuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Db2xvclNlbGVjdERpYWxvZy5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91aS9jb21wb25lbnRzL2NvbG9yLXNlbGVjdC1kaWFsb2cvQ29sb3JTZWxlY3REaWFsb2cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbG9yLXNlbGVjdC1kaWFsb2cge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNzV2dzsgfVxcblxcbi5jb2xvci1zZWxlY3QtZGlhbG9nX19ibG9jayB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNvbG9yLXNlbGVjdC1kaWFsb2dfX2hlYWRpbmcge1xcbiAgbWFyZ2luOiAwLjVlbSAwOyB9XFxuXFxuLmNvbG9yLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi10b3A6IDFlbTsgfVxcbiAgLmNvbG9yLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9jb2xvci1zZWxlY3QtZGlhbG9nL0NvbG9yU2VsZWN0RGlhbG9nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAndWkvY29tcG9uZW50cy9pbWFnZS1zZWxlY3QtZGlhbG9nL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQm94IH0gZnJvbSAndWkvY29tcG9uZW50cy9EaWFsb2dCb3gnO1xyXG5cclxuY29uc3QgY2xhc3NOYW1lcyA9IHtcclxuICBESUFMT0c6ICdpbWFnZS1zZWxlY3QtZGlhbG9nJyxcclxuICBIRUFERVI6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19oZWFkZXInLFxyXG4gIEhFQURJTkc6ICdpbWFnZS1zZWxlY3QtZGlhbG9nX19oZWFkaW5nJyxcclxuICBCTE9DSzogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2Jsb2NrJyxcclxuICBCTE9DS19USVRMRTogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2Jsb2NrLXRpdGxlJyxcclxuICBQUkVTRVRfSU1BR0VTX0NPTlRBSU5FUjogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX3ByZXNldC1pbWFnZXMtY29udGFpbmVyJyxcclxuICBTRUxFQ1RFRF9JTUFHRTogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2ltYWdlLS1zZWxlY3RlZCcsXHJcbiAgQ1VTVE9NX0lNQUdFOiAnaW1hZ2Utc2VsZWN0LWRpYWxvZ19fY3VzdG9tLWltYWdlJyxcclxuICBCT1RUT01fQlVUVE9OUzogJ2ltYWdlLXNlbGVjdC1kaWFsb2dfX2JvdHRvbS1idXR0b25zJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlU2VsZWN0RGlhbG9nIGV4dGVuZHMgSFRNTEVsZW1lbnQgaW1wbGVtZW50cyBEaWFsb2dCb3gge1xyXG4gIHByaXZhdGUgX3ByZXNldEltYWdlVXJsczogc3RyaW5nW107XHJcblxyXG4gIHByaXZhdGUgaGVhZGVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGhlYWRpbmc6IEhUTUxIZWFkaW5nRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBwcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIGN1c3RvbUltYWdlQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIGN1c3RvbUZpbGVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGN1c3RvbUltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGN1c3RvbUNvbG9yQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIGN1c3RvbUNvbG9ySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjdXN0b21Db2xvckltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGJvdHRvbUJ1dHRvbnNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgY2FuY2VsQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICBwcml2YXRlIGNvbmZpcm1CdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICBwcml2YXRlIF9zZWxlY3RlZEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIHByaXZhdGUgX3dhc0NhbmNlbGxlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwcmVzZXRJbWFnZVVybHM6IHN0cmluZ1tdKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuX3ByZXNldEltYWdlVXJscyA9IHByZXNldEltYWdlVXJscztcclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5ESUFMT0cpO1xyXG5cclxuICAgIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljayA9IHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zaG93Q3VzdG9tSW1hZ2UgPSB0aGlzLnNob3dDdXN0b21JbWFnZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrID0gdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrID0gdGhpcy5vbkNvbmZpcm1CdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkN1c3RvbUNvbG9ySW5wdXRDaGFuZ2UgPSB0aGlzLm9uQ3VzdG9tQ29sb3JJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVByZXNldEltYWdlc0xpc3QoKTtcclxuICAgIHRoaXMuY3JlYXRlQ3VzdG9tSW1hZ2VQaWNrZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlQ3VzdG9tQ29sb3JQaWNrZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlQm90dG9tQnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gICAgcmV0dXJuIFsnbmFtZSddO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSB8fCAnSW1hZ2Ugc2VsZWN0JztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbmFtZScsIHZhbHVlKTtcclxuICAgIHRoaXMuaGVhZGluZy5pbm5lclRleHQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgd2FzQ2FuY2VsbGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dhc0NhbmNlbGxlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcHJlc2V0SW1hZ2VVcmxzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByZXNldEltYWdlVXJscztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRJbWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEltYWdlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5fd2FzQ2FuY2VsbGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5wcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5jdXN0b21JbWFnZUNvbnRhaW5lcik7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tQ29sb3JDb250YWluZXIpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNhbmNlbEJ1dHRvbkNsaWNrKTtcclxuICAgIHRoaXMuY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Db25maXJtQnV0dG9uQ2xpY2spO1xyXG4gICAgdGhpcy5jdXN0b21GaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5zaG93Q3VzdG9tSW1hZ2UpO1xyXG4gICAgdGhpcy5jdXN0b21JbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljayk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkN1c3RvbUNvbG9ySW5wdXRDaGFuZ2UpO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvckltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrKTtcclxuXHJcbiAgICB0aGlzLnByZXNldEltYWdlc0xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcclxuICAgICAgLmZvckVhY2goaW1hZ2UgPT4gaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VsZWN0YWJsZUltYWdlQ2xpY2spKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG4gICAgICAuZm9yRWFjaChpbWFnZSA9PiBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljaykpO1xyXG4gICAgdGhpcy5jdXN0b21GaWxlSW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5zaG93Q3VzdG9tSW1hZ2UpO1xyXG4gICAgdGhpcy5jdXN0b21JbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWxlY3RhYmxlSW1hZ2VDbGljayk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkN1c3RvbUNvbG9ySW5wdXRDaGFuZ2UpO1xyXG4gICAgdGhpcy5jdXN0b21Db2xvckltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlbGVjdGFibGVJbWFnZUNsaWNrKTtcclxuXHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DYW5jZWxCdXR0b25DbGljayk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29uZmlybUJ1dHRvbkNsaWNrKTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuaGVhZGVyKTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5wcmVzZXRJbWFnZXNMaXN0Q29udGFpbmVyKTtcclxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5jdXN0b21JbWFnZUNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuY3VzdG9tQ29sb3JDb250YWluZXIpO1xyXG4gICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbkNsb3NlKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbG9zZScpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgdGhpcy5oZWFkZXIgPSB0aGlzLmNyZWF0ZUJsb2NrKCk7XHJcbiAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuSEVBREVSKTtcclxuXHJcbiAgICB0aGlzLmhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGhpcy5oZWFkaW5nLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5IRUFESU5HKTtcclxuICAgIHRoaXMuaGVhZGluZy5pbm5lclRleHQgPSB0aGlzLm5hbWU7XHJcblxyXG4gICAgdGhpcy5oZWFkZXIuYXBwZW5kQ2hpbGQodGhpcy5oZWFkaW5nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUHJlc2V0SW1hZ2VzTGlzdCgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlQmxvY2soKTtcclxuICAgIGNvbnN0IGJsb2NrVGl0bGUgPSB0aGlzLmNyZWF0ZUJsb2NrVGl0bGUoJ0Nob29zZSBwcmVzZXQgaW1hZ2UnKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChibG9ja1RpdGxlKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGltYWdlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXMuUFJFU0VUX0lNQUdFU19DT05UQUlORVIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlc0NvbnRhaW5lcik7XHJcbiAgICB0aGlzLnByZXNldEltYWdlVXJscy5tYXAodXJsID0+IHRoaXMuY3JlYXRlU2VsZWN0YWJsZUltYWdlKHVybCkpXHJcbiAgICAgIC5mb3JFYWNoKGltYWdlID0+IGltYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSkpO1xyXG5cclxuICAgIHRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHJcbiAgICB0aGlzLnNlbGVjdEltYWdlKDxIVE1MSW1hZ2VFbGVtZW50PnRoaXMucHJlc2V0SW1hZ2VzTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbWcnKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUN1c3RvbUltYWdlUGlja2VyKCkge1xyXG4gICAgdGhpcy5jdXN0b21JbWFnZUNvbnRhaW5lciA9IHRoaXMuY3JlYXRlQmxvY2soKTtcclxuICAgIGNvbnN0IGJsb2NrVGl0bGUgPSB0aGlzLmNyZWF0ZUJsb2NrVGl0bGUoJ1NlbGVjdCBjdXN0b20gaW1hZ2UnKTtcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYmxvY2tUaXRsZSk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21GaWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGhpcy5jdXN0b21GaWxlSW5wdXQudHlwZSA9ICdmaWxlJztcclxuICAgIHRoaXMuY3VzdG9tRmlsZUlucHV0LmFjY2VwdCA9ICdpbWFnZS8qJztcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jdXN0b21GaWxlSW5wdXQpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHRoaXMuY3VzdG9tSW1hZ2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkNVU1RPTV9JTUFHRSk7XHJcbiAgICB0aGlzLmN1c3RvbUltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tSW1hZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93Q3VzdG9tSW1hZ2UoKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21GaWxlSW5wdXQuZmlsZXMgJiYgdGhpcy5jdXN0b21GaWxlSW5wdXQuZmlsZXNbMF0pIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBlID0+IHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbiAgICAgICAgdGhpcy5jdXN0b21JbWFnZS5zcmMgPSAoPGFueT5lLnRhcmdldCkucmVzdWx0O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0SW1hZ2UodGhpcy5jdXN0b21JbWFnZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmN1c3RvbUZpbGVJbnB1dC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUN1c3RvbUNvbG9yUGlja2VyKCkge1xyXG4gICAgdGhpcy5jdXN0b21Db2xvckNvbnRhaW5lciA9IHRoaXMuY3JlYXRlQmxvY2soKTtcclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5jcmVhdGVCbG9ja1RpdGxlKCdDdXN0b20gc29saWQgY29sb3InKTtcclxuICAgIHRoaXMuY3VzdG9tQ29sb3JDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW5wdXQudHlwZSA9ICdjb2xvcic7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tQ29sb3JJbnB1dCk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21Db2xvckltYWdlID0gbmV3IEltYWdlKDIwLCAyMCk7XHJcbiAgICB0aGlzLmN1c3RvbUNvbG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3VzdG9tQ29sb3JJbWFnZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ3VzdG9tQ29sb3JJbnB1dENoYW5nZSgpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gdGhpcy5jdXN0b21Db2xvckltYWdlLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY3VzdG9tQ29sb3JJbWFnZS5oZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpZiAoIWN0eCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgY2FudmFzIGRyYXdpbmcgY29udGV4dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmN1c3RvbUNvbG9ySW5wdXQudmFsdWU7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgdGhpcy5zZWxlY3RJbWFnZSh0aGlzLmN1c3RvbUNvbG9ySW1hZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCb3R0b21CdXR0b25zKCkge1xyXG4gICAgdGhpcy5ib3R0b21CdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJPVFRPTV9CVVRUT05TKTtcclxuXHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XHJcblxyXG4gICAgdGhpcy5jb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmNvbmZpcm1CdXR0b24uaW5uZXJUZXh0ID0gJ0NvbmZpcm0nO1xyXG5cclxuICAgIHRoaXMuYm90dG9tQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbmNlbEJ1dHRvbik7XHJcbiAgICB0aGlzLmJvdHRvbUJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb25maXJtQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DYW5jZWxCdXR0b25DbGljaygpIHtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Db25maXJtQnV0dG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLl93YXNDYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQmxvY2soKSB7XHJcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLkJMT0NLKTtcclxuXHJcbiAgICByZXR1cm4gYmxvY2s7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUJsb2NrVGl0bGUodGl0bGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgYmxvY2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBibG9ja1RpdGxlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5CTE9DS19USVRMRSk7XHJcbiAgICBibG9ja1RpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xyXG5cclxuICAgIHJldHVybiBibG9ja1RpdGxlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVTZWxlY3RhYmxlSW1hZ2UoaW1hZ2VTb3VyY2U6IHN0cmluZykge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TZWxlY3RhYmxlSW1hZ2VDbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCFldmVudC5zcmNFbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlbGVjdEltYWdlKDxIVE1MSW1hZ2VFbGVtZW50PmV2ZW50LnNyY0VsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RJbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgaWYgKGltYWdlID09PSB0aGlzLl9zZWxlY3RlZEltYWdlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbWFnZSkge1xyXG4gICAgICB0aGlzLl9zZWxlY3RlZEltYWdlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lcy5TRUxFQ1RFRF9JTUFHRSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChjbGFzc05hbWVzLlNFTEVDVEVEX0lNQUdFKTtcclxuICAgIHRoaXMuX3NlbGVjdGVkSW1hZ2UgPSBpbWFnZTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWltYWdlLXNlbGVjdC1kaWFsb2cnLCBJbWFnZVNlbGVjdERpYWxvZyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvaW1hZ2Utc2VsZWN0LWRpYWxvZy9JbWFnZVNlbGVjdERpYWxvZy50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0ltYWdlU2VsZWN0RGlhbG9nLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW1hZ2VTZWxlY3REaWFsb2cuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9JbWFnZVNlbGVjdERpYWxvZy5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmltYWdlLXNlbGVjdC1kaWFsb2cge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNzV2dzsgfVxcblxcbi5pbWFnZS1zZWxlY3QtZGlhbG9nX19oZWFkaW5nIHtcXG4gIG1hcmdpbjogMC41ZW0gMDsgfVxcblxcbi5pbWFnZS1zZWxlY3QtZGlhbG9nX19ibG9jayB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtOyB9XFxuXFxuLmltYWdlLXNlbGVjdC1kaWFsb2dfX3ByZXNldC1pbWFnZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwOyB9XFxuICAuaW1hZ2Utc2VsZWN0LWRpYWxvZ19fcHJlc2V0LWltYWdlcy1jb250YWluZXIgPiBkaXYge1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIG1hcmdpbjogYXV0bzsgfVxcbiAgLmltYWdlLXNlbGVjdC1kaWFsb2dfX3ByZXNldC1pbWFnZXMtY29udGFpbmVyIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19fY3VzdG9tLWltYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAyNSU7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbjogYXV0bzsgfVxcblxcbi5pbWFnZS1zZWxlY3QtZGlhbG9nX19pbWFnZS0tc2VsZWN0ZWQge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggZ3JlZW47IH1cXG5cXG4uaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLXRvcDogMWVtOyB9XFxuICAuaW1hZ2Utc2VsZWN0LWRpYWxvZ19fYm90dG9tLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL2ltYWdlLXNlbGVjdC1kaWFsb2cvSW1hZ2VTZWxlY3REaWFsb2cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciB7XHJcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgY2FudmFzQ2xpZW50UmVjdDogQ2xpZW50UmVjdDtcclxuXHJcbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgdGhpcy51cGRhdGVDYW52YXNPZmZzZXQoKTtcclxuXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2FudmFzT2Zmc2V0KCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVDYW52YXNPZmZzZXQoKSB7XHJcbiAgICB0aGlzLmNhbnZhc0NsaWVudFJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KFxyXG4gICAgICBldmVudC5wYWdlWCAtIHRoaXMuY2FudmFzQ2xpZW50UmVjdC5sZWZ0LFxyXG4gICAgICBldmVudC5wYWdlWSAtIHRoaXMuY2FudmFzQ2xpZW50UmVjdC50b3BcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci50cyIsImltcG9ydCB7IExheWVyIH0gZnJvbSAnY29tbW9uL0xheWVyJztcclxuaW1wb3J0IHsgUGF0aCB9IGZyb20gJ2NvbW1vbi9QYXRoJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdjb21tb24vUG9pbnQnO1xyXG5pbXBvcnQgeyBQb2x5Z29uIH0gZnJvbSAnY29tbW9uL1BvbHlnb24nO1xyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IExFWCB9IGZyb20gJ0xFWCc7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuaW1wb3J0IHsgTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyIH0gZnJvbSAndWkvTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyJztcclxuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAndWkvVUlTZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBQb2ludENsaWNrRXZlbnQgfSBmcm9tICdldmVudHMvUG9pbnRDbGlja0V2ZW50JztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW50ZXJmYWNlIE5ld1BvbHlnb25VSUNvbnRyb2xsZXJEZXBlbmRlbmNpZXMge1xyXG4gIGFwcGxpY2F0aW9uVUlDb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgcG9seWdvbkxheWVyOiBMYXllcjtcclxuICByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3UG9seWdvblVJQ29udHJvbGxlciBpbXBsZW1lbnRzIFVJU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBhcHBsaWNhdGlvblVJQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBwcml2YXRlIHVuZmluaXNoZWRQYXRoOiBQYXRoO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcGF0aExheWVyID0gbmV3IExheWVyKExFWC5QQVRIX0xBWUVSX05BTUUpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcG9seWdvbkxheWVyOiBMYXllcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBOZXdQb2x5Z29uVUlDb250cm9sbGVyRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uVUlDb250YWluZXIgPSBkZXBlbmRlbmNpZXMuYXBwbGljYXRpb25VSUNvbnRhaW5lcjtcclxuICAgIHRoaXMuY2FudmFzID0gZGVwZW5kZW5jaWVzLmNhbnZhcztcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IGRlcGVuZGVuY2llcy5wb2x5Z29uTGF5ZXI7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gZGVwZW5kZW5jaWVzLnJlbmRlcmVyO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIHRoaXMuY2xvc2VQYXRoID0gdGhpcy5jbG9zZVBhdGguYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uUG9pbnRDbGljayA9IHRoaXMub25Qb2ludENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuc3RhZ2UubGF5ZXJzLnB1c2godGhpcy5wYXRoTGF5ZXIpO1xyXG4gICAgdGhpcy5zdGFydE5ld1VuZmluaXNoZWRQYXRoKCk7XHJcblxyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUG9pbnRDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihQb2ludENsaWNrRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uUG9pbnRDbGljayk7XHJcbiAgICB0aGlzLnN0YWdlLnJlbW92ZUxheWVyKHRoaXMucGF0aExheWVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGROZXdQb2ludChwb2ludDogUG9pbnQpIHtcclxuICAgIHRoaXMudW5maW5pc2hlZFBhdGguYWRkVmVydGV4KHBvaW50KTtcclxuICAgIHRoaXMuZGlzcGF0Y2hVcGRhdGVVSUV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgY29uc3QgdW5maW5pc2hlZFBhdGhWZXJ0aWNlc0NvdW50ID0gdGhpcy51bmZpbmlzaGVkUGF0aC5nZXRWZXJ0aWNlc0NvdW50KCk7XHJcbiAgICBpZiAodW5maW5pc2hlZFBhdGhWZXJ0aWNlc0NvdW50ID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsYXN0UG9pbnQgPSB0aGlzLnVuZmluaXNoZWRQYXRoLmdldFZlcnRleCh1bmZpbmlzaGVkUGF0aFZlcnRpY2VzQ291bnQgLSAxKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG5cclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIuZ2V0UG9pbnRGcm9tTW91c2VFdmVudChldmVudCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmRyYXdMaW5lKGxhc3RQb2ludCwgcG9pbnQsIGNvbmZpZ3VyYXRpb24ubmV3TGluZVByZXZpZXdQcm9wZXJ0aWVzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Qb2ludENsaWNrKGV2ZW50OiBQb2ludENsaWNrRXZlbnQpIHtcclxuICAgIGNvbnN0IHBhdGhQb2ludENvbXBvbmVudCA9IGV2ZW50LnBheWxvYWQ7XHJcblxyXG4gICAgaWYgKHBhdGhQb2ludENvbXBvbmVudC5wYXRoID09PSB0aGlzLnVuZmluaXNoZWRQYXRoICYmIHBhdGhQb2ludENvbXBvbmVudC5pbml0aWFsKSB7XHJcbiAgICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHBhdGhQb2ludENvbXBvbmVudC5pbml0aWFsID0gZmFsc2U7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnROZXdVbmZpbmlzaGVkUGF0aCgpIHtcclxuICAgIHRoaXMudW5maW5pc2hlZFBhdGggPSBuZXcgUGF0aChbXSwgY29uZmlndXJhdGlvbi5uZXdQb2x5Z29uTGluZVByb3BlcnRpZXMpO1xyXG4gICAgdGhpcy5wYXRoTGF5ZXIucGF0aHMucHVzaCh0aGlzLnVuZmluaXNoZWRQYXRoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvc2VQYXRoKCkge1xyXG4gICAgaWYgKHRoaXMudW5maW5pc2hlZFBhdGguZ2V0VmVydGljZXNDb3VudCgpIDwgY29uZmlndXJhdGlvbi5taW5Qb2x5Z29uUG9pbnRzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUG9seWdvbiBtdXN0IGhhdmUgYXQgbGVhc3QgJHtjb25maWd1cmF0aW9uLm1pblBvbHlnb25Qb2ludHN9IHZlcnRpY2VzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51bmZpbmlzaGVkUGF0aC5saW5lUHJvcGVydGllcyA9IGNvbmZpZ3VyYXRpb24ucG9seWdvbkxpbmVQcm9wZXJ0aWVzO1xyXG4gICAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uKHRoaXMudW5maW5pc2hlZFBhdGgpO1xyXG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIucGF0aHMucHVzaChwb2x5Z29uKTtcclxuICAgIHRoaXMucGF0aExheWVyLnJlbW92ZVBhdGgodGhpcy51bmZpbmlzaGVkUGF0aCk7XHJcblxyXG4gICAgdGhpcy5zdGFydE5ld1VuZmluaXNoZWRQYXRoKCk7XHJcbiAgICB0aGlzLmRpc3BhdGNoVXBkYXRlVUlFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGF0Y2hVcGRhdGVVSUV2ZW50cygpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSAyNzpcclxuICAgICAgICB0aGlzLnBhdGhMYXllci5yZW1vdmVQYXRoKHRoaXMudW5maW5pc2hlZFBhdGgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnROZXdVbmZpbmlzaGVkUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hVcGRhdGVVSUV2ZW50cygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvTmV3UG9seWdvblVJQ29udHJvbGxlci50cyIsImltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICd1aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXInO1xyXG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICd1aS9VSVNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW50ZXJmYWNlIFBhdGhEcmFnZ2luZ1NlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHN0YWdlOiBTdGFnZTtcclxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIG1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjogTW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aERyYWdnaW5nU2VydmljZSBpbXBsZW1lbnRzIFVJU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuXHJcbiAgcHJpdmF0ZSBwYXRoVG9EcmFnOiBQYXRoIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgcHJldmlvdXNQb2ludDogUG9pbnQgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBhdGhEcmFnZ2luZ1NlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRlcGVuZGVuY2llcy5jYW52YXM7XHJcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciA9IGRlcGVuZGVuY2llcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcblxyXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Nb3VzZU91dCA9IHRoaXMub25Nb3VzZU91dC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKSB7XHJcbiAgICAvLyBUT0RPOiBwb3NzaWJsZSBwb2x5Z29uIGdob3N0IGxheWVyIGhlcmVcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdQYXRoKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzRHJhZ2dpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNEcmFnZ2luZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydE1vdmluZ1BhdGgoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIuZ2V0UG9pbnRGcm9tTW91c2VFdmVudChldmVudCk7XHJcblxyXG4gICAgdGhpcy5wYXRoVG9EcmFnID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5wcmV2aW91c1BvaW50ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5zdGFnZS5sYXllcnMpIHtcclxuICAgICAgZm9yIChjb25zdCBwYXRoIG9mIGxheWVyLnBhdGhzKSB7XHJcbiAgICAgICAgaWYgKCFwYXRoLmlzUG9pbnRJbkJvdW5kaW5nQm94KHBvaW50KSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhdGhUb0RyYWcgPSBwYXRoO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnBhdGhUb0RyYWcpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCdDYW5ub3QgZHJhZyBwYXRoIC0gbm8gcGF0aCBmb3VuZCwgcG9pbnQgaXMgbm90IGluIHRoZSBib3VuZGluZyBib3gnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByZXZpb3VzUG9pbnQgPSBwb2ludDtcclxuICAgIHRoaXMuX2lzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKTtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5vbk1vdXNlT3V0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XHJcbiAgICB0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMub25Nb3VzZU91dCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMucGF0aFRvRHJhZyB8fCAhdGhpcy5wcmV2aW91c1BvaW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb2ludCA9IHRoaXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyLmdldFBvaW50RnJvbU1vdXNlRXZlbnQoZXZlbnQpO1xyXG4gICAgY29uc3QgdHJhbnNpdGlvblZlY3RvciA9IFBvaW50LnN1YnRyYWN0KHBvaW50LCB0aGlzLnByZXZpb3VzUG9pbnQpO1xyXG5cclxuICAgIGZvciAoY29uc3QgcGF0aFBvaW50IG9mIHRoaXMucGF0aFRvRHJhZy5nZXRWZXJ0aWNlcygpKSB7XHJcbiAgICAgIHBhdGhQb2ludC5tb3ZlVG8oUG9pbnQuYWRkKHBhdGhQb2ludCwgdHJhbnNpdGlvblZlY3RvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuXHJcbiAgICB0aGlzLnByZXZpb3VzUG9pbnQgPSBwb2ludDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZVVwKF9ldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdQYXRoKCk7XHJcbiAgICB0aGlzLmNhbmNlbE5leHRDbGlja0V2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTW91c2VPdXQoX2V2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLnN0b3BEcmFnZ2luZ1BhdGgoKTtcclxuICAgIHRoaXMuX2lzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcERyYWdnaW5nUGF0aCgpIHtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMucGF0aFRvRHJhZyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMucHJldmlvdXNQb2ludCA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FuY2VsTmV4dENsaWNrRXZlbnQoKSB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuX2lzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1BhdGhEcmFnZ2luZ1NlcnZpY2UudHMiLCJpbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdjb21tb24vQ09MT1JTJztcclxuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdjb21tb24vTGF5ZXInO1xyXG5pbXBvcnQgeyBMaW5lUHJvcGVydGllcyB9IGZyb20gJ2NvbW1vbi9MaW5lUHJvcGVydGllcyc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IExFWCB9IGZyb20gJ0xFWCc7XHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICd1aS9VSVNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRmluaXNoUG9pbnREcmFnRXZlbnQgfSBmcm9tICdldmVudHMvcG9pbnQtZHJhZy9GaW5pc2hQb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFBvaW50RHJhZ0V2ZW50IH0gZnJvbSAnZXZlbnRzL3BvaW50LWRyYWcvUG9pbnREcmFnRXZlbnQnO1xyXG5pbXBvcnQgeyBTdGFydFBvaW50RHJhZ0V2ZW50IH0gZnJvbSAnZXZlbnRzL3BvaW50LWRyYWcvU3RhcnRQb2ludERyYWdFdmVudCc7XHJcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnZXZlbnRzL1JlbmRlckV2ZW50JztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmludGVyZmFjZSBQb2ludERyYWdnaW5nU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnREcmFnZ2luZ1NlcnZpY2UgaW1wbGVtZW50cyBVSVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFnZTogU3RhZ2U7XHJcbiAgcHJpdmF0ZSBwYXRoR2hvc3RMYXllcjogTGF5ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogUG9pbnREcmFnZ2luZ1NlcnZpY2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZGVwZW5kZW5jaWVzLmV2ZW50QWdncmVnYXRvcjtcclxuICAgIHRoaXMuc3RhZ2UgPSBkZXBlbmRlbmNpZXMuc3RhZ2U7XHJcblxyXG4gICAgdGhpcy5vblN0YXJ0UG9pbnREcmFnID0gdGhpcy5vblN0YXJ0UG9pbnREcmFnLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRmluaXNoUG9pbnREcmFnID0gdGhpcy5vbkZpbmlzaFBvaW50RHJhZy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblBvaW50RHJhZyA9IHRoaXMub25Qb2ludERyYWcuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5wYXRoR2hvc3RMYXllciA9IG5ldyBMYXllcihMRVguUEFUSF9HSE9TVF9MQVlFUl9OQU1FKTtcclxuICAgIHRoaXMuc3RhZ2UubGF5ZXJzLnNwbGljZSgwLCAwLCB0aGlzLnBhdGhHaG9zdExheWVyKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5hZGRFdmVudExpc3RlbmVyKFN0YXJ0UG9pbnREcmFnRXZlbnQuZXZlbnRUeXBlLCB0aGlzLm9uU3RhcnRQb2ludERyYWcpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihGaW5pc2hQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25GaW5pc2hQb2ludERyYWcpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludERyYWcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnBhdGhHaG9zdExheWVyLnBhdGhzID0gW107XHJcbiAgICB0aGlzLnN0YWdlLnJlbW92ZUxheWVyKHRoaXMucGF0aEdob3N0TGF5ZXIpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoU3RhcnRQb2ludERyYWdFdmVudC5ldmVudFR5cGUsIHRoaXMub25TdGFydFBvaW50RHJhZyk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBGaW5pc2hQb2ludERyYWdFdmVudC5ldmVudFR5cGUsXHJcbiAgICAgIHRoaXMub25GaW5pc2hQb2ludERyYWdcclxuICAgICk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFBvaW50RHJhZ0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50RHJhZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU3RhcnRQb2ludERyYWcoZXZlbnQ6IFN0YXJ0UG9pbnREcmFnRXZlbnQpIHtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICghY29uZmlndXJhdGlvbi5kaXNwbGF5UGF0aEdob3N0V2hlbkRyYWdnaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXRoID0gZXZlbnQucGF5bG9hZC5wYXRoLmNsb25lKCk7XHJcbiAgICBwYXRoLmxpbmVQcm9wZXJ0aWVzID0gbmV3IExpbmVQcm9wZXJ0aWVzKENPTE9SUy5HUkVFTiwgMSk7XHJcbiAgICB0aGlzLnBhdGhHaG9zdExheWVyLnBhdGhzLnB1c2gocGF0aCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZpbmlzaFBvaW50RHJhZyhldmVudDogRmluaXNoUG9pbnREcmFnRXZlbnQpIHtcclxuICAgIGV2ZW50LmhhbmRsZWQgPSB0cnVlO1xyXG4gICAgaWYgKCFjb25maWd1cmF0aW9uLmRpc3BsYXlQYXRoR2hvc3RXaGVuRHJhZ2dpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGF0aEdob3N0TGF5ZXIucGF0aHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBSZW5kZXJFdmVudCgpKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFN5bmNDb21wb25lbnRzRXZlbnQoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUG9pbnREcmFnKGV2ZW50OiBQb2ludERyYWdFdmVudCkge1xyXG4gICAgY29uc3QgeyBjb21wb25lbnQsIG5ld1Bvc2l0aW9uIH0gPSBldmVudC5wYXlsb2FkO1xyXG5cclxuICAgIGZvciAoY29uc3QgcG9pbnQgb2YgY29tcG9uZW50LnBhdGguZ2V0VmVydGljZXNJdGVyYXRvcigpKSB7XHJcbiAgICAgIGlmIChwb2ludC5lcXVhbHMobmV3UG9zaXRpb24pKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50LnBvaW50Lm1vdmVUbyhuZXdQb3NpdGlvbik7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUG9pbnREcmFnZ2luZ1NlcnZpY2UudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTGluZUNsaWNrRXZlbnQgfSBmcm9tICdldmVudHMvTGluZUNsaWNrRXZlbnQnO1xyXG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2V2ZW50cy9SZW5kZXJFdmVudCc7XHJcbmltcG9ydCB7IFN5bmNDb21wb25lbnRzRXZlbnQgfSBmcm9tICdldmVudHMvdWkvU3luY0NvbXBvbmVudHNFdmVudCc7XHJcblxyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAnY29tbW9uL0xpbmUnO1xyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJ3VpL1VJU2VydmljZSc7XHJcblxyXG5pbnRlcmZhY2UgUG9pbnRJbnNlcnRlclNlcnZpY2VEZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRJbnNlcnRlclNlcnZpY2UgaW1wbGVtZW50cyBVSVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gIHByaXZhdGUgcHJldmlvdXNMaW5lQ2xpY2tUaW1lc3RhbXAgPSAwO1xyXG4gIHByaXZhdGUgcHJldmlvdXNMaW5lSGl0OiBMaW5lO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFBvaW50SW5zZXJ0ZXJTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcblxyXG4gICAgdGhpcy5vbkxpbmVDbGljayA9IHRoaXMub25MaW5lQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihMaW5lQ2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25MaW5lQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKExpbmVDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vbkxpbmVDbGljayk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTGluZUNsaWNrKGV2ZW50OiBMaW5lQ2xpY2tFdmVudCkge1xyXG4gICAgY29uc3QgcHJldmlvdXNMaW5lSGl0ID0gdGhpcy5wcmV2aW91c0xpbmVIaXQ7XHJcbiAgICBjb25zdCBwcmV2aW91c0xpbmVDbGlja1RpbWVzdGFtcCA9IHRoaXMucHJldmlvdXNMaW5lQ2xpY2tUaW1lc3RhbXA7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICB0aGlzLnByZXZpb3VzTGluZUhpdCA9IGV2ZW50LnBheWxvYWQubGluZTtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lQ2xpY2tUaW1lc3RhbXAgPSBjdXJyZW50VGltZXN0YW1wO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgIXByZXZpb3VzTGluZUhpdCB8fFxyXG4gICAgICBjdXJyZW50VGltZXN0YW1wIC0gcHJldmlvdXNMaW5lQ2xpY2tUaW1lc3RhbXAgPiBjb25maWd1cmF0aW9uLmRvdWJsZUNsaWNrTWF4RGVsYXlcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByZXZpb3VzTGluZUhpdC5lcXVhbHMoZXZlbnQucGF5bG9hZC5saW5lKSkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGV2ZW50LnBheWxvYWQucGF0aC5maW5kUG9pbnRJbmRleChldmVudC5wYXlsb2FkLmxpbmUucDIpO1xyXG4gICAgICBjb25zdCBuZXdQb2ludCA9IGV2ZW50LnBheWxvYWQubGluZS5nZXRNaWRkbGVQb2ludCgpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBldmVudC5wYXlsb2FkLnBhdGguaW5zZXJ0VmVydGV4KG5ld1BvaW50LCBpbmRleCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9Qb2ludEluc2VydGVyU2VydmljZS50cyIsImltcG9ydCB7IGNvbmZpZ3VyYXRpb24gfSBmcm9tICdjb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAndWkvVUlTZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2V2ZW50cy9FdmVudEFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBQb2ludENsaWNrRXZlbnQgfSBmcm9tICdldmVudHMvUG9pbnRDbGlja0V2ZW50JztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5pbXBvcnQgeyBQYXRoUG9pbnRDb21wb25lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudCc7XHJcblxyXG5pbnRlcmZhY2UgUG9pbnRSZW1vdmVyU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludFJlbW92ZXJTZXJ2aWNlIGltcGxlbWVudHMgVUlTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBwcml2YXRlIHByZXZpb3VzUGF0aFBvaW50Q29tcG9uZW50OiBQYXRoUG9pbnRDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c0NsaWNrVGltZXN0YW1wID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2ludFJlbW92ZXJTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGRlcGVuZGVuY2llcy5ldmVudEFnZ3JlZ2F0b3I7XHJcbiAgICB0aGlzLm9uUG9pbnRDbGljayA9IHRoaXMub25Qb2ludENsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmFkZEV2ZW50TGlzdGVuZXIoUG9pbnRDbGlja0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5vblBvaW50Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFBvaW50Q2xpY2tFdmVudC5ldmVudFR5cGUsIHRoaXMub25Qb2ludENsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Qb2ludENsaWNrKGV2ZW50OiBQb2ludENsaWNrRXZlbnQpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhQb2ludENvbXBvbmVudCA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgICBjb25zdCBwcmV2aW91c1BhdGhQb2ludENvbXBvbmVudCA9IHRoaXMucHJldmlvdXNQYXRoUG9pbnRDb21wb25lbnQ7XHJcbiAgICBjb25zdCBwcmV2aW91c0NsaWNrVGltZXN0YW1wID0gdGhpcy5wcmV2aW91c0NsaWNrVGltZXN0YW1wO1xyXG5cclxuICAgIHRoaXMudXBkYXRlUHJldmlvdXNDbGlja0luZm9ybWF0aW9uKGV2ZW50LCBjdXJyZW50VGltZXN0YW1wKTtcclxuXHJcbiAgICBpZiAoIXByZXZpb3VzUGF0aFBvaW50Q29tcG9uZW50IHx8IHByZXZpb3VzUGF0aFBvaW50Q29tcG9uZW50ICE9PSBwYXRoUG9pbnRDb21wb25lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50VGltZXN0YW1wIC0gcHJldmlvdXNDbGlja1RpbWVzdGFtcCA+IGNvbmZpZ3VyYXRpb24uZG91YmxlQ2xpY2tNYXhEZWxheSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmVQcmV2aW91c0NsaWNrZWRQb2ludCgpO1xyXG4gICAgZXZlbnQuaGFuZGxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVByZXZpb3VzQ2xpY2tJbmZvcm1hdGlvbihldmVudDogUG9pbnRDbGlja0V2ZW50LCB0aW1lc3RhbXA6IG51bWJlcikge1xyXG4gICAgdGhpcy5wcmV2aW91c1BhdGhQb2ludENvbXBvbmVudCA9IGV2ZW50LnBheWxvYWQ7XHJcbiAgICB0aGlzLnByZXZpb3VzQ2xpY2tUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVByZXZpb3VzQ2xpY2tlZFBvaW50KCkge1xyXG4gICAgY29uc3QgcGF0aCA9IHRoaXMucHJldmlvdXNQYXRoUG9pbnRDb21wb25lbnQucGF0aDtcclxuICAgIGNvbnN0IHBvaW50ID0gdGhpcy5wcmV2aW91c1BhdGhQb2ludENvbXBvbmVudC5wb2ludDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBwYXRoLnJlbW92ZVZlcnRleChwb2ludCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ0Nhbm5vdCByZW1vdmUgdmVydGV4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcmV2aW91c1BhdGhQb2ludENvbXBvbmVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFJlbmRlckV2ZW50KCkpO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgU3luY0NvbXBvbmVudHNFdmVudCgpKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvUG9pbnRSZW1vdmVyU2VydmljZS50cyIsImltcG9ydCB7IFBhdGggfSBmcm9tICdjb21tb24vUGF0aCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnY29tbW9uL1BvaW50JztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJ3VpL1VJU2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBQYXRoUG9pbnRDb21wb25lbnQgfSBmcm9tICd1aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lciB9IGZyb20gJ3VpL01vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcic7XHJcblxyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgU3luY0NvbXBvbmVudHNFdmVudCB9IGZyb20gJ2V2ZW50cy91aS9TeW5jQ29tcG9uZW50c0V2ZW50JztcclxuXHJcbmludGVyZmFjZSBQb2ludFN5bmNTZXJ2aWNlRGVwZW5kZW5jaWVzIHtcclxuICBzdGFnZTogU3RhZ2U7XHJcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhdGhQb2ludCB7XHJcbiAgcGF0aDogUGF0aDtcclxuICBwb2ludDogUG9pbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludFN5bmNTZXJ2aWNlIGltcGxlbWVudHMgVUlTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHBhdGhQb2ludENvbXBvbmVudHM6IFBhdGhQb2ludENvbXBvbmVudFtdID0gW107XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBQb2ludFN5bmNTZXJ2aWNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICB0aGlzLnN0YWdlID0gZGVwZW5kZW5jaWVzLnN0YWdlO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBkZXBlbmRlbmNpZXMuY29udGFpbmVyO1xyXG4gICAgdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgPSBkZXBlbmRlbmNpZXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIHRoaXMuc3luY2hyb25pemVDb21wb25lbnRzID0gdGhpcy5zeW5jaHJvbml6ZUNvbXBvbmVudHMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihTeW5jQ29tcG9uZW50c0V2ZW50LmV2ZW50VHlwZSwgdGhpcy5zeW5jaHJvbml6ZUNvbXBvbmVudHMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5yZW1vdmVFdmVudExpc3RlbmVyKFN5bmNDb21wb25lbnRzRXZlbnQuZXZlbnRUeXBlLCB0aGlzLnN5bmNocm9uaXplQ29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3luY2hyb25pemVDb21wb25lbnRzKGV2ZW50OiBTeW5jQ29tcG9uZW50c0V2ZW50KSB7XHJcbiAgICBjb25zdCBjb21wb25lbnRzVG9SZW1vdmUgPSB0aGlzLmdldFJlZHVuZGFudENvbXBvbmVudHMoKTtcclxuICAgIGNvbXBvbmVudHNUb1JlbW92ZS5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQucmVtb3ZlKCkpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhQb2ludHMgPSB0aGlzLmdldFBhdGhQb2ludHMoKTtcclxuICAgIGNvbnN0IHBvaW50c1dpdGhvdXRDb21wb25lbnRzID0gdGhpcy5nZXRQb2ludHNXaXRob3V0Q29tcG9uZW50cyhwYXRoUG9pbnRzKTtcclxuICAgIGNvbnN0IG5ld0NvbXBvbmVudHMgPSB0aGlzLmNyZWF0ZVBhdGhQb2ludENvbXBvbmVudHMocG9pbnRzV2l0aG91dENvbXBvbmVudHMpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBvbmVudHNOb3RSZW1vdmVkID0gdGhpcy5wYXRoUG9pbnRDb21wb25lbnRzLmZpbHRlcihcclxuICAgICAgY29tcG9uZW50ID0+IGNvbXBvbmVudHNUb1JlbW92ZS5pbmRleE9mKGNvbXBvbmVudCkgPT09IC0xXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucGF0aFBvaW50Q29tcG9uZW50cyA9IFsuLi5uZXdDb21wb25lbnRzLCAuLi5jb21wb25lbnRzTm90UmVtb3ZlZF07XHJcbiAgICBldmVudC5oYW5kbGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGF0aFBvaW50cygpIHtcclxuICAgIGNvbnN0IHBhdGhQb2ludHM6IFBhdGhQb2ludFtdID0gW107XHJcblxyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgIGxheWVyLnBhdGhzLmZvckVhY2gocGF0aCA9PiB7XHJcbiAgICAgICAgcGF0aC5nZXRWZXJ0aWNlcygpLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICAgICAgcGF0aFBvaW50cy5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgcG9pbnRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwYXRoUG9pbnRzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVQYXRoUG9pbnRDb21wb25lbnRzKHBhdGhQb2ludHM6IFBhdGhQb2ludFtdKSB7XHJcbiAgICByZXR1cm4gcGF0aFBvaW50cy5tYXAoXHJcbiAgICAgIHBhdGhQb2ludCA9PlxyXG4gICAgICAgIG5ldyBQYXRoUG9pbnRDb21wb25lbnQocGF0aFBvaW50LnBhdGgsIHBhdGhQb2ludC5wb2ludCwge1xyXG4gICAgICAgICAgYXBwbGljYXRpb25VSUNvbnRhaW5lcjogdGhpcy5jb250YWluZXIsXHJcbiAgICAgICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICAgICAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lclxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSZWR1bmRhbnRDb21wb25lbnRzKCkge1xyXG4gICAgY29uc3QgYWN0aXZlUGF0aHMgPSB0aGlzLmdldEFjdGl2ZVBhdGhzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucGF0aFBvaW50Q29tcG9uZW50cy5maWx0ZXIoXHJcbiAgICAgIGNvbXBvbmVudCA9PlxyXG4gICAgICAgIGFjdGl2ZVBhdGhzLmluZGV4T2YoY29tcG9uZW50LnBhdGgpID09PSAtMSB8fFxyXG4gICAgICAgIGNvbXBvbmVudC5wYXRoLmdldFZlcnRpY2VzKCkuaW5kZXhPZihjb21wb25lbnQucG9pbnQpID09PSAtMVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UG9pbnRzV2l0aG91dENvbXBvbmVudHMocGF0aFBvaW50czogUGF0aFBvaW50W10pIHtcclxuICAgIHJldHVybiBwYXRoUG9pbnRzLmZpbHRlcihcclxuICAgICAgcGF0aFBvaW50ID0+XHJcbiAgICAgICAgIXRoaXMucGF0aFBvaW50Q29tcG9uZW50cy5maW5kKFxyXG4gICAgICAgICAgY29tcG9uZW50ID0+IGNvbXBvbmVudC5wYXRoID09PSBwYXRoUG9pbnQucGF0aCAmJiBjb21wb25lbnQucG9pbnQgPT09IHBhdGhQb2ludC5wb2ludFxyXG4gICAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEFjdGl2ZVBhdGhzKCkge1xyXG4gICAgY29uc3QgcGF0aHM6IFBhdGhbXSA9IFtdO1xyXG4gICAgdGhpcy5zdGFnZS5sYXllcnMubWFwKGxheWVyID0+IHBhdGhzLnB1c2goLi4ubGF5ZXIucGF0aHMpKTtcclxuXHJcbiAgICByZXR1cm4gcGF0aHM7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL1BvaW50U3luY1NlcnZpY2UudHMiLCJpbXBvcnQgeyBQYXRoIH0gZnJvbSAnY29tbW9uL1BhdGgnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ2NvbW1vbi9Qb2ludCc7XHJcblxyXG5pbXBvcnQgeyBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgfSBmcm9tICd1aS9Nb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXInO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnZXZlbnRzL0V2ZW50QWdncmVnYXRvcic7XHJcbmltcG9ydCB7IEZpbmlzaFBvaW50RHJhZ0V2ZW50IH0gZnJvbSAnZXZlbnRzL3BvaW50LWRyYWcvRmluaXNoUG9pbnREcmFnRXZlbnQnO1xyXG5pbXBvcnQgeyBQb2ludERyYWdFdmVudCB9IGZyb20gJ2V2ZW50cy9wb2ludC1kcmFnL1BvaW50RHJhZ0V2ZW50JztcclxuaW1wb3J0IHsgU3RhcnRQb2ludERyYWdFdmVudCB9IGZyb20gJ2V2ZW50cy9wb2ludC1kcmFnL1N0YXJ0UG9pbnREcmFnRXZlbnQnO1xyXG5pbXBvcnQgeyBQb2ludENsaWNrRXZlbnQgfSBmcm9tICdldmVudHMvUG9pbnRDbGlja0V2ZW50JztcclxuXHJcbmltcG9ydCAndWkvY29tcG9uZW50cy9QYXRoUG9pbnRDb21wb25lbnQuc2Nzcyc7XHJcblxyXG5jb25zdCBDT01QT05FTlRfQ0xBU1NfTkFNRSA9ICdhcHBsaWNhdGlvbi11aV9fdmVydGV4JztcclxuY29uc3QgSU5JVElBTF9DTEFTU19OQU1FID0gJ2FwcGxpY2F0aW9uLXVpX192ZXJ0ZXgtLWluaXRpYWwnO1xyXG5cclxuaW50ZXJmYWNlIFBhdGhQb2ludENvbXBvbmVudERlcGVuZGVuY2llcyB7XHJcbiAgYXBwbGljYXRpb25VSUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgbW91c2VQb3NpdGlvblRyYW5zZm9ybWVyOiBNb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoUG9pbnRDb21wb25lbnQge1xyXG4gIHB1YmxpYyBlbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcclxuICBwdWJsaWMgcGF0aDogUGF0aDtcclxuICBwdWJsaWMgcG9pbnQ6IFBvaW50O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgYXBwbGljYXRpb25VSUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBtb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXI6IE1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHBhdGg6IFBhdGgsXHJcbiAgICBwb2ludDogUG9pbnQsXHJcbiAgICBkZXBlbmRlbmNpZXM6IFBhdGhQb2ludENvbXBvbmVudERlcGVuZGVuY2llc1xyXG4gICkge1xyXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgIHRoaXMucG9pbnQgPSBwb2ludDtcclxuICAgIHRoaXMuYXBwbGljYXRpb25VSUNvbnRhaW5lciA9IGRlcGVuZGVuY2llcy5hcHBsaWNhdGlvblVJQ29udGFpbmVyO1xyXG4gICAgdGhpcy5tb3VzZVBvc2l0aW9uVHJhbnNmb3JtZXIgPSBkZXBlbmRlbmNpZXMubW91c2VQb3NpdGlvblRyYW5zZm9ybWVyO1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG5cclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RvcERyYWdnaW5nID0gdGhpcy5zdG9wRHJhZ2dpbmcuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZSgpIHtcclxuICAgIHRoaXMucG9pbnQubW92ZUNhbGxiYWNrID0gbnVsbDtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnBhdGgubGluZVByb3BlcnRpZXMuY29sb3IuZmlsbFN0eWxlO1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IGAke3RoaXMucG9pbnQueX1weGA7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3RoaXMucG9pbnQueH1weGA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGluaXRpYWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhJTklUSUFMX0NMQVNTX05BTUUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBpbml0aWFsKGlzSW5pdGlhbDogYm9vbGVhbikge1xyXG4gICAgaWYgKGlzSW5pdGlhbCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChJTklUSUFMX0NMQVNTX05BTUUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoSU5JVElBTF9DTEFTU19OQU1FKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdCgpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5hcHBsaWNhdGlvblVJQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ09NUE9ORU5UX0NMQVNTX05BTUUpO1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5wYXRoLmdldFZlcnRpY2VzQ291bnQoKSA9PT0gMSB8fFxyXG4gICAgICAoIXRoaXMucGF0aC5jbG9zZWQgJiYgdGhpcy5wYXRoLmZpbmRQb2ludEluZGV4KHRoaXMucG9pbnQpID09PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xyXG4gICAgdGhpcy5wb2ludC5tb3ZlQ2FsbGJhY2sgPSB0aGlzLnVwZGF0ZVBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlRG93bigpIHtcclxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IFBvaW50Q2xpY2tFdmVudCh0aGlzKTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cclxuICAgIGlmIChldmVudC5oYW5kbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTdGFydFBvaW50RHJhZ0V2ZW50KHRoaXMpKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGNvbnN0IG1vdXNlUG9zaXRpb24gPSB0aGlzLm1vdXNlUG9zaXRpb25UcmFuc2Zvcm1lci5nZXRQb2ludEZyb21Nb3VzZUV2ZW50KGV2ZW50KTtcclxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLmRpc3BhdGNoRXZlbnQobmV3IFBvaW50RHJhZ0V2ZW50KHRoaXMsIG1vdXNlUG9zaXRpb24pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcERyYWdnaW5nKCkge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgRmluaXNoUG9pbnREcmFnRXZlbnQodGhpcykpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnN0b3BEcmFnZ2luZyk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvUGF0aFBvaW50Q29tcG9uZW50LnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUGF0aFBvaW50Q29tcG9uZW50LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUGF0aFBvaW50Q29tcG9uZW50LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUGF0aFBvaW50Q29tcG9uZW50LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvUGF0aFBvaW50Q29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hcHBsaWNhdGlvbi11aV9fdmVydGV4IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcbiAgLmFwcGxpY2F0aW9uLXVpX192ZXJ0ZXg6YWN0aXZlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci13aWR0aDogMnB4OyB9XFxuXFxuLmFwcGxpY2F0aW9uLXVpX192ZXJ0ZXgtLWluaXRpYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTFmZjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL1BhdGhQb2ludENvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuXHJcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnU3RhZ2UnO1xyXG5cclxuaW1wb3J0IHsgTG9hZEJ1dHRvbiB9IGZyb20gJ3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9Mb2FkQnV0dG9uJztcclxuaW1wb3J0IHsgU2F2ZUJ1dHRvbiB9IGZyb20gJ3VpL2NvbXBvbmVudHMvc2VyaWFsaXphdGlvbi9TYXZlQnV0dG9uJztcclxuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAndWkvVUlTZXJ2aWNlJztcclxuXHJcbmludGVyZmFjZSBTZXJpYWxpemF0aW9uU2VydmljZURlcGVuZGVuY2llcyB7XHJcbiAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VyaWFsaXphdGlvblNlcnZpY2UgaW1wbGVtZW50cyBVSVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc2VyaWFsaXphdGlvbkNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHN0YWdlOiBTdGFnZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVwZW5kZW5jaWVzOiBTZXJpYWxpemF0aW9uU2VydmljZURlcGVuZGVuY2llcykge1xyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5zdGFnZSA9IGRlcGVuZGVuY2llcy5zdGFnZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0KCkge1xyXG4gICAgY29uc3Qgc2VyaWFsaXphdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXJpYWxpemF0aW9uLWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKCFzZXJpYWxpemF0aW9uQ29udGFpbmVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2VyaWFsaXphdGlvbiBjb250YWluZXIgbm90IGZvdW5kJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXJpYWxpemF0aW9uQ29udGFpbmVyID0gc2VyaWFsaXphdGlvbkNvbnRhaW5lcjtcclxuXHJcbiAgICBjb25zdCBsb2FkQnV0dG9uID0gbmV3IExvYWRCdXR0b24oe1xyXG4gICAgICBldmVudEFnZ3JlZ2F0b3I6IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gbmV3IFNhdmVCdXR0b24oe1xyXG4gICAgICBzdGFnZTogdGhpcy5zdGFnZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXJpYWxpemF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRCdXR0b24pO1xyXG4gICAgdGhpcy5zZXJpYWxpemF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIHRoaXMuc2VyaWFsaXphdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvU2VyaWFsaXphdGlvblNlcnZpY2UudHMiLCJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdldmVudHMvRXZlbnRBZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgUmVuZGVyRXZlbnQgfSBmcm9tICdldmVudHMvUmVuZGVyRXZlbnQnO1xyXG5pbXBvcnQgeyBTeW5jQ29tcG9uZW50c0V2ZW50IH0gZnJvbSAnZXZlbnRzL3VpL1N5bmNDb21wb25lbnRzRXZlbnQnO1xyXG5cclxuaW1wb3J0IHsgTEVYIH0gZnJvbSAnTEVYJztcclxuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICdTdGFnZSc7XHJcblxyXG5pbXBvcnQgeyBTZXJpYWxpemFibGVMYXllciB9IGZyb20gJ2NvbW1vbi9MYXllcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvYWRCdXR0b25EZXBlbmRlbmNpZXMge1xyXG4gIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gIHN0YWdlOiBTdGFnZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRCdXR0b24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGJ1dHRvbkVsZW1lbnQ6IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IExvYWRCdXR0b25EZXBlbmRlbmNpZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBkZXBlbmRlbmNpZXMuZXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgdGhpcy5zdGFnZSA9IGRlcGVuZGVuY2llcy5zdGFnZTtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LmlubmVyVGV4dCA9ICdMb2FkJztcclxuXHJcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuYnV0dG9uRWxlbWVudCk7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNsaWNrKCkge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSBwcm9tcHQoJ1BsZWFzZSBwYXN0ZSB0aGUgc2VyaWFsaXplZCBkYXRhJyk7XHJcblxyXG4gICAgaWYgKCFzZXJpYWxpemVkRGF0YSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9seWdvbkxheWVyID0gdGhpcy5zdGFnZS5maW5kTGF5ZXJCeU5hbWUoTEVYLlBPTFlHT05fTEFZRVJfTkFNRSk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFNlcmlhbGl6YWJsZUxheWVyID0gcG9seWdvbkxheWVyLnRvU2VyaWFsaXphYmxlT2JqZWN0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2VyaWFsaXphYmxlTGF5ZXIgPSA8U2VyaWFsaXphYmxlTGF5ZXI+SlNPTi5wYXJzZShzZXJpYWxpemVkRGF0YSk7XHJcbiAgICAgIHBvbHlnb25MYXllci5mcm9tU2VyaWFsaXphYmxlT2JqZWN0KDxTZXJpYWxpemFibGVMYXllcj5zZXJpYWxpemFibGVMYXllcik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBwb2x5Z29uTGF5ZXIuZnJvbVNlcmlhbGl6YWJsZU9iamVjdChjdXJyZW50U2VyaWFsaXphYmxlTGF5ZXIpO1xyXG4gICAgICBhbGVydCgnSW52YWxpZCBkYXRhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IuZGlzcGF0Y2hFdmVudChuZXcgUmVuZGVyRXZlbnQoKSk7XHJcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5kaXNwYXRjaEV2ZW50KG5ldyBTeW5jQ29tcG9uZW50c0V2ZW50KCkpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtbG9hZC1idXR0b24nLCBMb2FkQnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9zZXJpYWxpemF0aW9uL0xvYWRCdXR0b24udHMiLCJpbXBvcnQgeyBMRVggfSBmcm9tICdMRVgnO1xyXG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gJ1N0YWdlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2F2ZUJ1dHRvbkRlcGVuZGVuY2llcyB7XHJcbiAgc3RhZ2U6IFN0YWdlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZUJ1dHRvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGJ1dHRvbkVsZW1lbnQ6IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXBlbmRlbmNpZXM6IFNhdmVCdXR0b25EZXBlbmRlbmNpZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGFnZSA9IGRlcGVuZGVuY2llcy5zdGFnZTtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5idXR0b25FbGVtZW50LmlubmVyVGV4dCA9ICdTYXZlJztcclxuXHJcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuYnV0dG9uRWxlbWVudCk7XHJcbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNsaWNrKCkge1xyXG4gICAgY29uc3QgcG9seWdvbkxheWVyID0gdGhpcy5zdGFnZS5maW5kTGF5ZXJCeU5hbWUoTEVYLlBPTFlHT05fTEFZRVJfTkFNRSk7XHJcbiAgICBjb25zdCBzZXJpYWxpemFibGVPYmplY3QgPSBwb2x5Z29uTGF5ZXIudG9TZXJpYWxpemFibGVPYmplY3QoKTtcclxuXHJcbiAgICBjb25zdCBzZXJpYWxpemVkRGF0YSA9IEpTT04uc3RyaW5naWZ5KHNlcmlhbGl6YWJsZU9iamVjdCk7XHJcbiAgICBwcm9tcHQoJ0NvcHkgdGhlIGRhdGEnLCBzZXJpYWxpemVkRGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1zYXZlLWJ1dHRvbicsIFNhdmVCdXR0b24pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy91aS9jb21wb25lbnRzL3NlcmlhbGl6YXRpb24vU2F2ZUJ1dHRvbi50cyIsImltcG9ydCAndWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5LnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nQm94IH0gZnJvbSAndWkvY29tcG9uZW50cy9EaWFsb2dCb3gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpYWxvZ092ZXJsYXkgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgcHJpdmF0ZSBvdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBkaWFsb2dCb3g6IERpYWxvZ0JveCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xyXG5cclxuICAgIHRoaXMub25PdmVybGF5Q2xpY2sgPSB0aGlzLm9uT3ZlcmxheUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRGlhbG9nQ2xvc2UgPSB0aGlzLm9uRGlhbG9nQ2xvc2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5RWxlbWVudCk7XHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk92ZXJsYXlDbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMub3ZlcmxheUVsZW1lbnQpO1xyXG4gICAgdGhpcy5vdmVybGF5RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdmVybGF5Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dEaWFsb2coZGlhbG9nQm94OiBEaWFsb2dCb3gpIHtcclxuICAgIHRoaXMuZGlhbG9nQm94ID0gZGlhbG9nQm94O1xyXG4gICAgdGhpcy5zaG93T3ZlcmxheSgpO1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChkaWFsb2dCb3gpO1xyXG4gICAgZGlhbG9nQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkRpYWxvZ0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25PdmVybGF5Q2xpY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlhbG9nQm94IHx8ICF0aGlzLmRpYWxvZ0JveC5jYW5DbG9zZSgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpYWxvZ0JveC5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkRpYWxvZ0Nsb3NlKCkge1xyXG4gICAgaWYgKHRoaXMuZGlhbG9nQm94KSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5kaWFsb2dCb3gpO1xyXG4gICAgICB0aGlzLmRpYWxvZ0JveC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25EaWFsb2dDbG9zZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpYWxvZ0JveCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd092ZXJsYXkoKSB7XHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktLXZpc2libGUnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZU92ZXJsYXkoKSB7XHJcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktLXZpc2libGUnKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWRpYWxvZy1vdmVybGF5JywgRGlhbG9nT3ZlcmxheSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3VpL2NvbXBvbmVudHMvZGlhbG9nLW92ZXJsYXkvRGlhbG9nT3ZlcmxheS50cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0RpYWxvZ092ZXJsYXkuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9EaWFsb2dPdmVybGF5LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vRGlhbG9nT3ZlcmxheS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91aS9jb21wb25lbnRzL2RpYWxvZy1vdmVybGF5L0RpYWxvZ092ZXJsYXkuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcblxcbi5vdmVybGF5LS12aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvdWkvY29tcG9uZW50cy9kaWFsb2ctb3ZlcmxheS9EaWFsb2dPdmVybGF5LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluc3RydWN0aW9uc0RpYWxvZyB9IGZyb20gJ3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zdHJ1Y3Rpb25zQnV0dG9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHByaXZhdGUgYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLmJ1dHRvbi50ZXh0Q29udGVudCA9ICdJbnN0cnVjdGlvbnMnO1xyXG4gICAgdGhpcy5idXR0b24uY2xhc3NOYW1lID0gJ2luc3RydWN0aW9ucy1idXR0b24nO1xyXG5cclxuICAgIHRoaXMub25CdXR0b25DbGljayA9IHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbik7XHJcbiAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuYnV0dG9uKTtcclxuICAgIHRoaXMuYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25CdXR0b25DbGljaygpIHtcclxuICAgIGNvbnN0IGluc3RydWN0aW9uc0RpYWxvZyA9IG5ldyBJbnN0cnVjdGlvbnNEaWFsb2coKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zRGlhbG9nKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1pbnN0cnVjdGlvbnMtYnV0dG9uJywgSW5zdHJ1Y3Rpb25zQnV0dG9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvdWkvY29tcG9uZW50cy9pbnN0cnVjdGlvbnMvSW5zdHJ1Y3Rpb25zQnV0dG9uLnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSW5zdHJ1Y3Rpb25zRGlhbG9nLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VpL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25zL0luc3RydWN0aW9uc0RpYWxvZy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5zdHJ1Y3Rpb25zLWRpYWxvZy13cmFwcGVyIHtcXG4gIHotaW5kZXg6IDI7IH1cXG5cXG4uaW5zdHJ1Y3Rpb25zLWRpYWxvZ19fb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQ7IH1cXG5cXG4uaW5zdHJ1Y3Rpb25zLWRpYWxvZ19fb3ZlcmxheS0tYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAuNTsgfVxcblxcbi5pbnN0cnVjdGlvbnMtZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogMjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMzUwZjtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgY29sb3I6ICNlZWU7XFxuICBwYWRkaW5nOiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7IH1cXG5cXG4uaW5zdHJ1Y3Rpb25zLWRpYWxvZy0tYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEsIDEpOyB9XFxuXFxuLmluc3RydWN0aW9ucy1kaWFsb2dfX3RpdGxlIHtcXG4gIG1hcmdpbjogMDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy91aS9jb21wb25lbnRzL2luc3RydWN0aW9ucy9JbnN0cnVjdGlvbnNEaWFsb2cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==