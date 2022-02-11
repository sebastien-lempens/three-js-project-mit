// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bCluR":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "405ad4ff61350acf";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gciwV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "infoDiv", ()=>infoDiv
);
var _swiperBundleEsmBrowserJs = require("../../../node_modules/swiper/swiper-bundle.esm.browser.js");
var _swiperBundleEsmBrowserJsDefault = parcelHelpers.interopDefault(_swiperBundleEsmBrowserJs);
var _swiperBundleMinCss = require("../../../node_modules/swiper/swiper-bundle.min.css");
const infoDiv = document.createElement('div');
infoDiv.classList.add('MIT_info');
infoDiv.innerHTML = `\n     <div class="MIT_info__wrapper">\n       <div class="MIT_info__inner">\n        <article>\n            <h1>Hi Folks!</h1>\n            <p>\n                If like me you was a big fan of  "Point & Click" games from the 90's, you probably know the <a href="https://en.wikipedia.org/wiki/Monkey_Island_(series)" target="_blank">Monkey Island Saga</a>! So many hours spent on it... \n            </p>\n            <p style="display:inline">\n               I hope you enjoyed it.  <pre style="display:inline">  Sébastien Lempens</pre>\n            </p>\n        </article>\n        <div class="MIT_info__gallery">\n            <div class="swiper">\n            <div class="swiper-wrapper">\n                <div class="swiper-slide">\n                    <picture>\n                    <source type="image/webp" media="(max-width: 425px)" \n                    srcset="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-1.jpg?as=webp&width=400')}" />\n                        <img src="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-1.jpg?as=webp&width=1200')}">\n                    </picture>\n                    <legend>\n                    Based on my <a href="https://www.deviantart.com/slempens" target="_blank">digital draw</a> from 2012 I thought,<br>why do not reproduce it in Webgl? That's what I tried to do :)\n                    </legend>\n                </div>\n                <div class="swiper-slide">\n                    <picture>\n                    <source type="image/webp" media="(max-width: 425px)" \n                    srcset="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-2.jpg?as=webp&width=400')}" />\n                        <img src="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-2.jpg?as=webp&width=1200')}">\n                    </picture>\n                    <legend>\n                        I started working with <a href="https://www.maxon.net/en/cinema-4d" target="_blank">Cinema 4D</a> to modeling 3D elements. \n                    </legend>\n                </div>\n                <div class="swiper-slide">\n                    <picture>\n                    <source type="image/webp" media="(max-width: 425px)" \n                    srcset="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-3.jpg?as=webp&width=400')}" />\n                        <img src="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-3.jpg?as=webp&width=1200')}">\n                    </picture>\n                    <legend>\n                       I'm not a 3D expert but I got what I wanted.\n                       <br>To save time, I downloaded this "Guybrush" model from <a href="https://sketchfab.com/3d-models/guybrush-threepwood-idle-b0b14f34f99143279e198a75e326d8c2" target="_blank">sketchfab (Artikora Artist)</a>\n                    </legend>\n                </div>\n                <div class="swiper-slide">\n                    <picture>\n                    <source type="image/webp" media="(max-width: 425px)" \n                    srcset="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-4.jpg?as=webp&width=400')}" />\n                        <img src="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-4.jpg?as=webp&width=1200')}">\n                    </picture>\n                    <legend>I discovered <a href="https://www.adobe.com/products/substance3d-painter.html" target="_blank">Adobe Substance 3D Painter</a> for texturing... Impressive!</legend>\n                </div>\n                <div class="swiper-slide">\n                    <picture>\n                    <source type="image/webp" media="(max-width: 425px)" \n                    srcset="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-5.jpg?as=webp&width=400')}" />\n                        <img src="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-5.jpg?as=webp&width=1200')}">\n                    </picture>\n                    <legend>I applied custom procedural textures & materials to my 3D objects.\n                    <br>Learning curve was not too difficult.</legend>\n                </div>\n                <div class="swiper-slide">\n                    <picture>\n                    <source type="image/webp" media="(max-width: 425px)" \n                    srcset="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-6.jpg?as=webp&width=400')}" />\n                        <img src="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-6.jpg?as=webp&width=1200')}">\n                    </picture>\n                    <legend class="void"></legend>\n                </div>\n                <div class="swiper-slide">\n                    <picture>\n                    <source type="image/webp" media="(max-width: 425px)" \n                    srcset="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-7.jpg?as=webp&width=400')}" />\n                        <img src="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-7.jpg?as=webp&width=1200')}">\n                    </picture>\n                    <legend class="void"></legend>\n                </div>\n                <div class="swiper-slide">\n                    <picture>\n                    <source type="image/webp" media="(max-width: 425px)" \n                    srcset="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-8.jpg?as=webp&width=400')}" />\n                        <img src="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-8.jpg?as=webp&width=1200')}">\n                    </picture>\n                    <legend>\n                        I used the amazing library <a href="https://threejs.org" target="_blank">Three.js</a> to develop my  project.\n                        <br>It uses Webgl API which is implemented right into the browser.\n                    </legend>\n                </div>\n                <div class="swiper-slide">\n                    <picture>\n                    <source type="image/webp" media="(max-width: 425px)" \n                    srcset="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-9.jpg?as=webp&width=400')}" />\n                        <img src="${require('../images/gallery-wip/monkey-island-tribute-wip-slide-9.jpg?as=webp&width=1200')}">\n                    </picture>\n                    <legend>I'm already thinking about my next project. Thanks for watching :)</legend>\n                </div>\n            </div>\n            <div class="swiper-pagination"></div>\n            </div>\n        </div>\n       </div>\n     </div>\n    `;
document.querySelector('body').append(infoDiv);
new _swiperBundleEsmBrowserJsDefault.default('.MIT_info__gallery > .swiper', {
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            shadow: false,
            translate: [
                '-20%',
                0,
                -1
            ]
        },
        next: {
            shadow: false,
            translate: [
                '100%',
                0,
                0
            ]
        }
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: false
    }
});

},{"../../../node_modules/swiper/swiper-bundle.esm.browser.js":"6QXsf","../../../node_modules/swiper/swiper-bundle.min.css":"dOGRJ","../images/gallery-wip/monkey-island-tribute-wip-slide-1.jpg?as=webp&width=400":"1zVWa","../images/gallery-wip/monkey-island-tribute-wip-slide-1.jpg?as=webp&width=1200":"CILQR","../images/gallery-wip/monkey-island-tribute-wip-slide-2.jpg?as=webp&width=400":"371UE","../images/gallery-wip/monkey-island-tribute-wip-slide-2.jpg?as=webp&width=1200":"9O7V1","../images/gallery-wip/monkey-island-tribute-wip-slide-3.jpg?as=webp&width=400":"1ZnPk","../images/gallery-wip/monkey-island-tribute-wip-slide-3.jpg?as=webp&width=1200":"9RwaZ","../images/gallery-wip/monkey-island-tribute-wip-slide-4.jpg?as=webp&width=400":"gEsOO","../images/gallery-wip/monkey-island-tribute-wip-slide-4.jpg?as=webp&width=1200":"2S5AP","../images/gallery-wip/monkey-island-tribute-wip-slide-5.jpg?as=webp&width=400":"5xPkb","../images/gallery-wip/monkey-island-tribute-wip-slide-5.jpg?as=webp&width=1200":"9sU45","../images/gallery-wip/monkey-island-tribute-wip-slide-6.jpg?as=webp&width=400":"cqC5w","../images/gallery-wip/monkey-island-tribute-wip-slide-6.jpg?as=webp&width=1200":"7PV3K","../images/gallery-wip/monkey-island-tribute-wip-slide-7.jpg?as=webp&width=400":"ebUfy","../images/gallery-wip/monkey-island-tribute-wip-slide-7.jpg?as=webp&width=1200":"4jSGb","../images/gallery-wip/monkey-island-tribute-wip-slide-8.jpg?as=webp&width=400":"9KEsO","../images/gallery-wip/monkey-island-tribute-wip-slide-8.jpg?as=webp&width=1200":"9de3z","../images/gallery-wip/monkey-island-tribute-wip-slide-9.jpg?as=webp&width=400":"1I7di","../images/gallery-wip/monkey-island-tribute-wip-slide-9.jpg?as=webp&width=1200":"g2yH3","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6QXsf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swiper", ()=>Swiper
);
parcelHelpers.export(exports, "default", ()=>Swiper
);
/**
 * Swiper 7.0.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 3, 2021
 */ /**
 * SSR Window 4.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: August 25, 2021
 */ /* eslint-disable no-param-reassign */ function isObject$1(obj) {
    return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend$1(target = {
}, src = {
}) {
    Object.keys(src).forEach((key)=>{
        if (typeof target[key] === 'undefined') target[key] = src[key];
        else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) extend$1(target[key], src[key]);
    });
}
const ssrDocument = {
    body: {
    },
    addEventListener () {
    },
    removeEventListener () {
    },
    activeElement: {
        blur () {
        },
        nodeName: ''
    },
    querySelector () {
        return null;
    },
    querySelectorAll () {
        return [];
    },
    getElementById () {
        return null;
    },
    createEvent () {
        return {
            initEvent () {
            }
        };
    },
    createElement () {
        return {
            children: [],
            childNodes: [],
            style: {
            },
            setAttribute () {
            },
            getElementsByTagName () {
                return [];
            }
        };
    },
    createElementNS () {
        return {
        };
    },
    importNode () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    }
};
function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {
    };
    extend$1(doc, ssrDocument);
    return doc;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ''
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    },
    history: {
        replaceState () {
        },
        pushState () {
        },
        go () {
        },
        back () {
        }
    },
    CustomEvent: function CustomEvent1() {
        return this;
    },
    addEventListener () {
    },
    removeEventListener () {
    },
    getComputedStyle () {
        return {
            getPropertyValue () {
                return '';
            }
        };
    },
    Image () {
    },
    Date () {
    },
    screen: {
    },
    setTimeout () {
    },
    clearTimeout () {
    },
    matchMedia () {
        return {
        };
    },
    requestAnimationFrame (callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame (id) {
        if (typeof setTimeout === 'undefined') return;
        clearTimeout(id);
    }
};
function getWindow() {
    const win = typeof window !== 'undefined' ? window : {
    };
    extend$1(win, ssrWindow);
    return win;
}
/**
 * Dom7 4.0.0
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: August 25, 2021
 */ /* eslint-disable no-proto */ function makeReactive(obj) {
    const proto = obj.__proto__;
    Object.defineProperty(obj, '__proto__', {
        get () {
            return proto;
        },
        set (value) {
            proto.__proto__ = value;
        }
    });
}
class Dom7 extends Array {
    constructor(items){
        super(...items || []);
        makeReactive(this);
    }
}
function arrayFlat(arr = []) {
    const res = [];
    arr.forEach((el)=>{
        if (Array.isArray(el)) res.push(...arrayFlat(el));
        else res.push(el);
    });
    return res;
}
function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
    const uniqueArray = [];
    for(let i = 0; i < arr.length; i += 1)if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    return uniqueArray;
}
function qsa(selector, context) {
    if (typeof selector !== 'string') return [
        selector
    ];
    const a = [];
    const res = context.querySelectorAll(selector);
    for(let i = 0; i < res.length; i += 1)a.push(res[i]);
    return a;
}
function $(selector, context) {
    const window = getWindow();
    const document = getDocument();
    let arr = [];
    if (!context && selector instanceof Dom7) return selector;
    if (!selector) return new Dom7(arr);
    if (typeof selector === 'string') {
        const html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
            let toCreate = 'div';
            if (html.indexOf('<li') === 0) toCreate = 'ul';
            if (html.indexOf('<tr') === 0) toCreate = 'tbody';
            if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
            if (html.indexOf('<tbody') === 0) toCreate = 'table';
            if (html.indexOf('<option') === 0) toCreate = 'select';
            const tempParent = document.createElement(toCreate);
            tempParent.innerHTML = html;
            for(let i = 0; i < tempParent.childNodes.length; i += 1)arr.push(tempParent.childNodes[i]);
        } else arr = qsa(selector.trim(), context || document);
         // arr = qsa(selector, document);
    } else if (selector.nodeType || selector === window || selector === document) arr.push(selector);
    else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
    }
    return new Dom7(arrayUnique(arr));
}
$.fn = Dom7.prototype; // eslint-disable-next-line
function addClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')
    ));
    this.forEach((el)=>{
        el.classList.add(...classNames);
    });
    return this;
}
function removeClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')
    ));
    this.forEach((el)=>{
        el.classList.remove(...classNames);
    });
    return this;
}
function toggleClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')
    ));
    this.forEach((el)=>{
        classNames.forEach((className)=>{
            el.classList.toggle(className);
        });
    });
}
function hasClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')
    ));
    return arrayFilter(this, (el)=>{
        return classNames.filter((className)=>el.classList.contains(className)
        ).length > 0;
    }).length > 0;
}
function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
    } // Set attrs
    for(let i = 0; i < this.length; i += 1){
        if (arguments.length === 2) // String
        this[i].setAttribute(attrs, value);
        else // Object
        for(const attrName in attrs){
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
        }
    }
    return this;
}
function removeAttr(attr1) {
    for(let i = 0; i < this.length; i += 1)this[i].removeAttribute(attr1);
    return this;
}
function transform(transform1) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transform = transform1;
    return this;
}
function transition$1(duration) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
    return this;
}
function on(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    function handleLiveEvent(e) {
        const target = e.target;
        if (!target) return;
        const eventData = e.target.dom7EventData || [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        if ($(target).is(targetSelector)) listener.apply(target, eventData);
        else {
            const parents = $(target).parents(); // eslint-disable-line
            for(let k = 0; k < parents.length; k += 1)if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
        }
    }
    function handleEvent(e) {
        const eventData = e && e.target ? e.target.dom7EventData || [] : [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        listener.apply(this, eventData);
    }
    const events = eventType.split(' ');
    let j;
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (!targetSelector) for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {
            };
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
                listener,
                proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
        }
        else // Live events
        for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {
            };
            if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
            el.dom7LiveListeners[event].push({
                listener,
                proxyListener: handleLiveEvent
            });
            el.addEventListener(event, handleLiveEvent, capture);
        }
    }
    return this;
}
function off(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    const events = eventType.split(' ');
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            let handlers;
            if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event];
            else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
            if (handlers && handlers.length) for(let k = handlers.length - 1; k >= 0; k -= 1){
                const handler = handlers[k];
                if (listener && handler.listener === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (!listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                }
            }
        }
    }
    return this;
}
function trigger(...args) {
    const window = getWindow();
    const events = args[0].split(' ');
    const eventData = args[1];
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            if (window.CustomEvent) {
                const evt = new window.CustomEvent(event, {
                    detail: eventData,
                    bubbles: true,
                    cancelable: true
                });
                el.dom7EventData = args.filter((data, dataIndex)=>dataIndex > 0
                );
                el.dispatchEvent(evt);
                el.dom7EventData = [];
                delete el.dom7EventData;
            }
        }
    }
    return this;
}
function transitionEnd$1(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
    }
    if (callback) dom.on('transitionend', fireCallBack);
    return this;
}
function outerWidth(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const styles = this.styles();
            return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
        }
        return this[0].offsetWidth;
    }
    return null;
}
function outerHeight(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const styles = this.styles();
            return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
        }
        return this[0].offsetHeight;
    }
    return null;
}
function offset() {
    if (this.length > 0) {
        const window = getWindow();
        const document = getDocument();
        const el = this[0];
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
        };
    }
    return null;
}
function styles() {
    const window = getWindow();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {
    };
}
function css(props, value) {
    const window = getWindow();
    let i;
    if (arguments.length === 1) {
        if (typeof props === 'string') {
            // .css('width')
            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
            // .css({ width: '100px' })
            for(i = 0; i < this.length; i += 1)for(const prop in props)this[i].style[prop] = props[prop];
            return this;
        }
    }
    if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for(i = 0; i < this.length; i += 1)this[i].style[props] = value;
        return this;
    }
    return this;
}
function each(callback) {
    if (!callback) return this;
    this.forEach((el, index)=>{
        callback.apply(el, [
            el,
            index
        ]);
    });
    return this;
}
function filter(callback) {
    const result = arrayFilter(this, callback);
    return $(result);
}
function html(html1) {
    if (typeof html1 === 'undefined') return this[0] ? this[0].innerHTML : null;
    for(let i = 0; i < this.length; i += 1)this[i].innerHTML = html1;
    return this;
}
function text(text1) {
    if (typeof text1 === 'undefined') return this[0] ? this[0].textContent.trim() : null;
    for(let i = 0; i < this.length; i += 1)this[i].textContent = text1;
    return this;
}
function is(selector) {
    const window = getWindow();
    const document = getDocument();
    const el = this[0];
    let compareWith;
    let i;
    if (!el || typeof selector === 'undefined') return false;
    if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    if (selector === document) return el === document;
    if (selector === window) return el === window;
    if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [
            selector
        ] : selector;
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    return false;
}
function index() {
    let child = this[0];
    let i;
    if (child) {
        i = 0; // eslint-disable-next-line
        while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
        return i;
    }
    return undefined;
}
function eq(index1) {
    if (typeof index1 === 'undefined') return this;
    const length = this.length;
    if (index1 > length - 1) return $([]);
    if (index1 < 0) {
        const returnIndex = length + index1;
        if (returnIndex < 0) return $([]);
        return $([
            this[returnIndex]
        ]);
    }
    return $([
        this[index1]
    ]);
}
function append(...els) {
    let newChild;
    const document = getDocument();
    for(let k = 0; k < els.length; k += 1){
        newChild = els[k];
        for(let i = 0; i < this.length; i += 1){
            if (typeof newChild === 'string') {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;
                while(tempDiv.firstChild)this[i].appendChild(tempDiv.firstChild);
            } else if (newChild instanceof Dom7) for(let j = 0; j < newChild.length; j += 1)this[i].appendChild(newChild[j]);
            else this[i].appendChild(newChild);
        }
    }
    return this;
}
function prepend(newChild) {
    const document = getDocument();
    let i;
    let j;
    for(i = 0; i < this.length; i += 1){
        if (typeof newChild === 'string') {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;
            for(j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        } else if (newChild instanceof Dom7) for(j = 0; j < newChild.length; j += 1)this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        else this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
    return this;
}
function next(selector) {
    if (this.length > 0) {
        if (selector) {
            if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return $([
                this[0].nextElementSibling
            ]);
            return $([]);
        }
        if (this[0].nextElementSibling) return $([
            this[0].nextElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function nextAll(selector) {
    const nextEls = [];
    let el = this[0];
    if (!el) return $([]);
    while(el.nextElementSibling){
        const next1 = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if ($(next1).is(selector)) nextEls.push(next1);
        } else nextEls.push(next1);
        el = next1;
    }
    return $(nextEls);
}
function prev(selector) {
    if (this.length > 0) {
        const el = this[0];
        if (selector) {
            if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) return $([
                el.previousElementSibling
            ]);
            return $([]);
        }
        if (el.previousElementSibling) return $([
            el.previousElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function prevAll(selector) {
    const prevEls = [];
    let el = this[0];
    if (!el) return $([]);
    while(el.previousElementSibling){
        const prev1 = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if ($(prev1).is(selector)) prevEls.push(prev1);
        } else prevEls.push(prev1);
        el = prev1;
    }
    return $(prevEls);
}
function parent(selector) {
    const parents = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode !== null) {
        if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
        } else parents.push(this[i].parentNode);
    }
    return $(parents);
}
function parents(selector) {
    const parents1 = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        let parent1 = this[i].parentNode; // eslint-disable-line
        while(parent1){
            if (selector) {
                if ($(parent1).is(selector)) parents1.push(parent1);
            } else parents1.push(parent1);
            parent1 = parent1.parentNode;
        }
    }
    return $(parents1);
}
function closest(selector) {
    let closest1 = this; // eslint-disable-line
    if (typeof selector === 'undefined') return $([]);
    if (!closest1.is(selector)) closest1 = closest1.parents(selector).eq(0);
    return closest1;
}
function find(selector) {
    const foundElements = [];
    for(let i = 0; i < this.length; i += 1){
        const found = this[i].querySelectorAll(selector);
        for(let j = 0; j < found.length; j += 1)foundElements.push(found[j]);
    }
    return $(foundElements);
}
function children(selector) {
    const children1 = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        const childNodes = this[i].children;
        for(let j = 0; j < childNodes.length; j += 1)if (!selector || $(childNodes[j]).is(selector)) children1.push(childNodes[j]);
    }
    return $(children1);
}
function remove() {
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    return this;
}
const Methods = {
    addClass,
    removeClass,
    hasClass,
    toggleClass,
    attr,
    removeAttr,
    transform,
    transition: transition$1,
    on,
    off,
    trigger,
    transitionEnd: transitionEnd$1,
    outerWidth,
    outerHeight,
    styles,
    offset,
    css,
    each,
    html,
    text,
    is,
    index,
    eq,
    append,
    prepend,
    next,
    nextAll,
    prev,
    prevAll,
    parent,
    parents,
    closest,
    find,
    children,
    filter,
    remove
};
Object.keys(Methods).forEach((methodName)=>{
    Object.defineProperty($.fn, methodName, {
        value: Methods[methodName],
        writable: true
    });
});
function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key)=>{
        try {
            object[key] = null;
        } catch (e) {
        }
        try {
            delete object[key];
        } catch (e) {
        }
    });
}
function nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
}
function now() {
    return Date.now();
}
function getComputedStyle$1(el) {
    const window = getWindow();
    let style;
    if (window.getComputedStyle) style = window.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}
function getTranslate(el, axis = 'x') {
    const window = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle$1(el);
    if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) curTransform = curTransform.split(', ').map((a)=>a.replace(',', '.')
        ).join(', ');
         // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
    }
    if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend(...args) {
    const to = Object(args[0]);
    const noExtend = [
        '__proto__',
        'constructor',
        'prototype'
    ];
    for(let i = 1; i < args.length; i += 1){
        const nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0
            );
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        to[nextKey] = {
                        };
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({ swiper , targetPosition , side  }) {
    const window = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = 'none';
    window.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? 'next' : 'prev';
    const isOutOfBound = (current, target)=>{
        return dir === 'next' && current >= target || dir === 'prev' && current <= target;
    };
    const animate = ()=>{
        time = new Date().getTime();
        if (startTime === null) startTime = time;
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.scrollSnapType = '';
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window.requestAnimationFrame(animate);
    };
    animate();
}
let support;
function calcSupport() {
    const window = getWindow();
    const document = getDocument();
    return {
        smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        passiveListener: (function checkPassiveListener() {
            let supportsPassive = false;
            try {
                const opts = Object.defineProperty({
                }, 'passive', {
                    // eslint-disable-next-line
                    get () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener('testPassiveListener', null, opts);
            } catch (e) {
            }
            return supportsPassive;
        })(),
        gestures: (function checkGestures() {
            return 'ongesturestart' in window;
        })()
    };
}
function getSupport() {
    if (!support) support = calcSupport();
    return support;
}
let deviceCached;
function calcDevice({ userAgent  } = {
}) {
    const support1 = getSupport();
    const window = getWindow();
    const platform = window.navigator.platform;
    const ua = userAgent || window.navigator.userAgent;
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === 'Win32';
    let macos = platform === 'MacIntel'; // iPadOs 13 fix
    const iPadScreens = [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810'
    ];
    if (!ipad && macos && support1.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            '13_0_0'
        ];
        macos = false;
    } // Android
    if (android && !windows) {
        device.os = 'android';
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
    } // Export object
    return device;
}
function getDevice(overrides = {
}) {
    if (!deviceCached) deviceCached = calcDevice(overrides);
    return deviceCached;
}
let browser;
function calcBrowser() {
    const window = getWindow();
    function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }
    return {
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
}
function getBrowser() {
    if (!browser) browser = calcBrowser();
    return browser;
}
function Resize({ swiper , on: on1 , emit  }) {
    const window = getWindow();
    let observer = null;
    const resizeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('beforeResize');
        emit('resize');
    };
    const createObserver = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries)=>{
            const { width , height  } = swiper;
            let newWidth = width;
            let newHeight = height;
            entries.forEach(({ contentBoxSize , contentRect , target  })=>{
                if (target && target !== swiper.el) return;
                newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });
            if (newWidth !== width || newHeight !== height) resizeHandler();
        });
        observer.observe(swiper.el);
    };
    const removeObserver = ()=>{
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('orientationchange');
    };
    on1('init', ()=>{
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
            createObserver();
            return;
        }
        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', orientationChangeHandler);
    });
    on1('destroy', ()=>{
        removeObserver();
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', orientationChangeHandler);
    });
}
function Observer({ swiper , extendParams , on: on1 , emit  }) {
    const observers = [];
    const window = getWindow();
    const attach = (target, options = {
    })=>{
        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations)=>{
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (mutations.length === 1) {
                emit('observerUpdate', mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate1() {
                emit('observerUpdate', mutations[0]);
            };
            if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate);
            else window.setTimeout(observerUpdate, 0);
        });
        observer.observe(target, {
            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
            childList: typeof options.childList === 'undefined' ? true : options.childList,
            characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        observers.push(observer);
    };
    const init = ()=>{
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = swiper.$el.parents();
            for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
        } // Observe container
        attach(swiper.$el[0], {
            childList: swiper.params.observeSlideChildren
        }); // Observe wrapper
        attach(swiper.$wrapperEl[0], {
            attributes: false
        });
    };
    const destroy = ()=>{
        observers.forEach((observer)=>{
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });
    on1('init', init);
    on1('destroy', destroy);
}
/* eslint-disable no-underscore-dangle */ var eventsEmitter = {
    on (events, handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach((event)=>{
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once (events, handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        function onceHandler(...args) {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny (handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
        return self;
    },
    offAny (handler) {
        const self = this;
        if (!self.eventsAnyListeners) return self;
        const index1 = self.eventsAnyListeners.indexOf(handler);
        if (index1 >= 0) self.eventsAnyListeners.splice(index1, 1);
        return self;
    },
    off (events, handler) {
        const self = this;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach((event)=>{
            if (typeof handler === 'undefined') self.eventsListeners[event] = [];
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index1)=>{
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index1, 1);
            });
        });
        return self;
    },
    emit (...args) {
        const self = this;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach((event)=>{
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler)=>{
                eventHandler.apply(context, [
                    event,
                    ...data
                ]);
            });
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler)=>{
                eventHandler.apply(context, data);
            });
        });
        return self;
    }
};
function updateSize() {
    const swiper = this;
    let width;
    let height;
    const $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) width = swiper.params.width;
    else width = $el[0].clientWidth;
    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) height = swiper.params.height;
    else height = $el[0].clientHeight;
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
     // Subtract paddings
    width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
    height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
    });
}
function updateSlides() {
    const swiper = this;
    function getDirectionLabel(property) {
        if (swiper.isHorizontal()) return property;
         // prettier-ignore
        return ({
            'width': 'height',
            'margin-top': 'margin-left',
            'margin-bottom ': 'margin-right',
            'margin-left': 'margin-top',
            'margin-right': 'margin-bottom',
            'padding-left': 'padding-top',
            'padding-right': 'padding-bottom',
            'marginRight': 'marginBottom'
        })[property];
    }
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const { $wrapperEl , size: swiperSize , rtlTranslate: rtl , wrongRTL  } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') offsetBefore = params.slidesOffsetBefore.call(swiper);
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') offsetAfter = params.slidesOffsetAfter.call(swiper);
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index1 = 0;
    if (typeof swiperSize === 'undefined') return;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    swiper.virtualSize = -spaceBetween; // reset margins
    if (rtl) slides.css({
        marginLeft: '',
        marginBottom: '',
        marginTop: ''
    });
    else slides.css({
        marginRight: '',
        marginBottom: '',
        marginTop: ''
    }); // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) swiper.grid.initSlides(slidesLength);
     // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
        return typeof params.breakpoints[key].slidesPerView !== 'undefined';
    }).length > 0;
    for(let i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        const slide = slides.eq(i);
        if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        if (slide.css('display') === 'none') continue; // eslint-disable-line
        if (params.slidesPerView === 'auto') {
            if (shouldResetSlideSize) slides[i].style[getDirectionLabel('width')] = ``;
            const slideStyles = getComputedStyle(slide[0]);
            const currentTransform = slide[0].style.transform;
            const currentWebKitTransform = slide[0].style.webkitTransform;
            if (currentTransform) slide[0].style.transform = 'none';
            if (currentWebKitTransform) slide[0].style.webkitTransform = 'none';
            if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
            else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, 'width');
                const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                const boxSizing = slideStyles.getPropertyValue('box-sizing');
                if (boxSizing && boxSizing === 'border-box') slideSize = width + marginLeft + marginRight;
                else {
                    const { clientWidth , offsetWidth  } = slide[0];
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) slide[0].style.transform = currentTransform;
            if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index1 % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index1 - Math.min(swiper.params.slidesPerGroupSkip, index1)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index1 += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) $wrapperEl.css({
        width: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (params.setWrapperSize) $wrapperEl.css({
        [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
     // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for(let i1 = 0; i1 < snapGrid.length; i1 += 1){
            let slidesGridItem = snapGrid[i1];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i1] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (params.spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
        slides.filter((_, slideIndex)=>{
            if (!params.cssMode) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).css({
            [key]: `${spaceBetween}px`
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap)=>{
            if (snap < 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
            snapGrid.forEach((snap, snapIndex)=>{
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex)=>{
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid
        );
        swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid
        );
    }
    if (slidesLength !== previousSlidesLength) swiper.emit('slidesLengthChange');
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit('slidesGridLengthChange');
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
}
function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === 'number') swiper.setTransition(speed);
    else if (speed === true) swiper.setTransition(swiper.params.speed);
    const getSlideByIndex = (index1)=>{
        if (isVirtual) return swiper.slides.filter((el)=>parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index1
        )[0];
        return swiper.slides.eq(index1)[0];
    }; // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) swiper.visibleSlides.each((slide)=>{
            activeSlides.push(slide);
        });
        else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
            const index1 = swiper.activeIndex + i;
            if (index1 > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index1));
        }
    } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
     // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== 'undefined') {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
    }
     // Update Height
    if (newHeight) swiper.$wrapperEl.css('height', `${newHeight}px`);
}
function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
}
function updateSlidesProgress(translate = this && this.translate || 0) {
    const swiper = this;
    const params = swiper.params;
    const { slides , rtlTranslate: rtl  } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate; // Visible Slides
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for(let i = 0; i < slides.length; i += 1){
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(params.slideVisibleClass);
        }
        slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
}
function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === 'undefined') {
        const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress , isBeginning , isEnd  } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
    }
    Object.assign(swiper, {
        progress,
        isBeginning,
        isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) swiper.emit('reachBeginning toEdge');
    if (isEnd && !wasEnd) swiper.emit('reachEnd toEdge');
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit('fromEdge');
    swiper.emit('progress', progress);
}
function updateSlidesClasses() {
    const swiper = this;
    const { slides , params , $wrapperEl , activeIndex , realIndex  } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
    let activeSlide;
    if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
    else activeSlide = slides.eq(activeIndex);
     // Active classes
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } // Next Slide
    let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
    } // Prev Slide
    let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    }
    swiper.emitSlidesClasses();
}
function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { slidesGrid , snapGrid , params , activeIndex: previousIndex , realIndex: previousRealIndex , snapIndex: previousSnapIndex  } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    if (typeof activeIndex === 'undefined') {
        for(let i = 0; i < slidesGrid.length; i += 1){
            if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
                else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
        } // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
    }
    if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit('snapIndexChange');
        }
        return;
    } // Get real index
    const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
    Object.assign(swiper, {
        snapIndex,
        realIndex,
        previousIndex,
        activeIndex
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) swiper.emit('realIndexChange');
    if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit('slideChange');
}
function updateClickedSlide(e) {
    const swiper = this;
    const params = swiper.params;
    const slide = $(e.target).closest(`.${params.slideClass}`)[0];
    let slideFound = false;
    let slideIndex;
    if (slide) {
        for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
        else swiper.clickedIndex = slideIndex;
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}
var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
};
function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
    const swiper = this;
    const { params , rtlTranslate: rtl , translate , $wrapperEl  } = swiper;
    if (params.virtualTranslate) return rtl ? -translate : translate;
    if (params.cssMode) return translate;
    let currentTranslate = getTranslate($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}
function setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl , params , $wrapperEl , wrapperEl , progress  } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate : translate;
    else y = translate;
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate);
    swiper.emit('setTranslate', swiper.translate, byController);
}
function minTranslate() {
    return -this.snapGrid[0];
}
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
    const swiper = this;
    const { params , wrapperEl  } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) return false;
    const minTranslate1 = swiper.minTranslate();
    const maxTranslate1 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate1) newTranslate = minTranslate1;
    else if (translateBounds && translate < maxTranslate1) newTranslate = maxTranslate1;
    else newTranslate = translate; // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        else {
            if (!swiper.support.smoothScroll) {
                animateCSSModeScroll({
                    swiper,
                    targetPosition: -newTranslate,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: -newTranslate,
                behavior: 'smooth'
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionEnd');
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionStart');
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;
                if (runCallbacks) swiper.emit('transitionEnd');
            };
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}
var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
};
function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
    swiper.emit('setTransition', duration, byController);
}
function transitionEmit({ swiper , runCallbacks , direction , step  }) {
    const { activeIndex , previousIndex  } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';
        else if (activeIndex < previousIndex) dir = 'prev';
        else dir = 'reset';
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
            swiper.emit(`slideResetTransition${step}`);
            return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === 'next') swiper.emit(`slideNextTransition${step}`);
        else swiper.emit(`slidePrevTransition${step}`);
    }
}
function transitionStart(runCallbacks = true, direction) {
    const swiper = this;
    const { params  } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) swiper.updateAutoHeight();
    transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'Start'
    });
}
function transitionEnd(runCallbacks = true, direction) {
    const swiper = this;
    const { params  } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'End'
    });
}
var transition = {
    setTransition,
    transitionStart,
    transitionEnd
};
function slideTo(index1 = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
    if (typeof index1 !== 'number' && typeof index1 !== 'string') throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index1}] given.`);
    if (typeof index1 === 'string') {
        /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */ const indexAsNumber = parseInt(index1, 10);
        /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */ const isValidNumber = isFinite(indexAsNumber);
        if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index1}] given.`);
         // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.
        index1 = indexAsNumber;
    }
    const swiper = this;
    let slideIndex = index1;
    if (slideIndex < 0) slideIndex = 0;
    const { params , snapGrid , slidesGrid , previousIndex , activeIndex , rtlTranslate: rtl , wrapperEl , enabled  } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit('beforeSlideChangeStart');
    const translate1 = -snapGrid[snapIndex]; // Update progress
    swiper.updateProgress(translate1); // Normalize slideIndex
    if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
        const normalizedTranslate = -Math.floor(translate1 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
            else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
        } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
    }
     // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate1 < swiper.translate && translate1 < swiper.minTranslate()) return false;
        if (!swiper.allowSlidePrev && translate1 > swiper.translate && translate1 > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false;
        }
    }
    let direction;
    if (slideIndex > activeIndex) direction = 'next';
    else if (slideIndex < activeIndex) direction = 'prev';
    else direction = 'reset'; // Update Index
    if (rtl && -translate1 === swiper.translate || !rtl && translate1 === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== 'slide') swiper.setTranslate(translate1);
        if (direction !== 'reset') {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate1 : -translate1;
        if (speed === 0) {
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            if (isVirtual) swiper.wrapperEl.style.scrollSnapType = 'none';
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
            if (isVirtual) requestAnimationFrame(()=>{
                swiper.wrapperEl.style.scrollSnapType = '';
            });
        } else {
            if (!swiper.support.smoothScroll) {
                animateCSSModeScroll({
                    swiper,
                    targetPosition: t,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: t,
                behavior: 'smooth'
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(translate1);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(translate1);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd1(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                swiper.onSlideToWrapperTransitionEnd = null;
                delete swiper.onSlideToWrapperTransitionEnd;
                swiper.transitionEnd(runCallbacks, direction);
            };
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        }
    }
    return true;
}
function slideToLoop(index1 = 0, speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    let newIndex = index1;
    if (swiper.params.loop) newIndex += swiper.loopedSlides;
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { animating , enabled , params  } = swiper;
    if (!enabled) return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { params , animating , snapGrid , slidesGrid , rtlTranslate , enabled  } = swiper;
    if (!enabled) return swiper;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    const translate1 = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate1);
    const normalizedSnapGrid = snapGrid.map((val)=>normalize(val)
    );
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex)=>{
            if (normalizedTranslate >= snap) // prevSnap = snap;
            prevSnapIndex = snapIndex;
        });
        if (typeof prevSnapIndex !== 'undefined') prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
    let prevIndex = 0;
    if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */ function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
    const swiper = this;
    let index1 = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index1);
    const snapIndex = skip + Math.floor((index1 - skip) / swiper.params.slidesPerGroup);
    const translate1 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate1 >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate1 - currentSnap > (nextSnap - currentSnap) * threshold) index1 += swiper.params.slidesPerGroup;
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate1 - prevSnap <= (currentSnap - prevSnap) * threshold) index1 -= swiper.params.slidesPerGroup;
    }
    index1 = Math.max(index1, 0);
    index1 = Math.min(index1, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index1, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
    const swiper = this;
    const { params , $wrapperEl  } = swiper;
    const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                nextTick(()=>{
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
            nextTick(()=>{
                swiper.slideTo(slideToIndex);
            });
        } else swiper.slideTo(slideToIndex);
    } else swiper.slideTo(slideToIndex);
}
var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
};
function loopCreate() {
    const swiper = this;
    const document = getDocument();
    const { params , $wrapperEl  } = swiper; // Remove duplicated slides
    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
    let slides = $wrapperEl.children(`.${params.slideClass}`);
    if (params.loopFillGroupWithBlank) {
        const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
        if (blankSlidesNum !== params.slidesPerGroup) {
            for(let i = 0; i < blankSlidesNum; i += 1){
                const blankNode = $(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                $wrapperEl.append(blankNode);
            }
            slides = $wrapperEl.children(`.${params.slideClass}`);
        }
    }
    if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
    const prependSlides = [];
    const appendSlides = [];
    slides.each((el, index1)=>{
        const slide1 = $(el);
        if (index1 < swiper.loopedSlides) appendSlides.push(el);
        if (index1 < slides.length && index1 >= slides.length - swiper.loopedSlides) prependSlides.push(el);
        slide1.attr('data-swiper-slide-index', index1);
    });
    for(let i = 0; i < appendSlides.length; i += 1)$wrapperEl.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    for(let i1 = prependSlides.length - 1; i1 >= 0; i1 -= 1)$wrapperEl.prepend($(prependSlides[i1].cloneNode(true)).addClass(params.slideDuplicateClass));
}
function loopFix() {
    const swiper = this;
    swiper.emit('beforeLoopFix');
    const { activeIndex , slides , loopedSlides , allowSlidePrev , allowSlideNext , snapGrid , rtlTranslate: rtl  } = swiper;
    let newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    const snapTranslate = -snapGrid[activeIndex];
    const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
}
function loopDestroy() {
    const swiper = this;
    const { $wrapperEl , params , slides  } = swiper;
    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
    slides.removeAttr('data-swiper-slide-index');
}
var loop = {
    loopCreate,
    loopFix,
    loopDestroy
};
function setGrabCursor(moving) {
    const swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
}
function unsetGrabCursor() {
    const swiper = this;
    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}
var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
};
function closestElement(selector, base = this) {
    function __closestFrom(el) {
        if (!el || el === getDocument() || el === getWindow()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function onTouchStart(event) {
    const swiper = this;
    const document = getDocument();
    const window = getWindow();
    const data = swiper.touchEventsData;
    const { params , touches , enabled  } = swiper;
    if (!enabled) return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let $targetEl = $(e.target);
    if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
    if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return; // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
    if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = $(event.path[0]);
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }
    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') event.preventDefault();
        else return;
    }
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    if (e.type !== 'touchstart') {
        let preventDefault = true;
        if ($targetEl.is(data.focusableElements)) preventDefault = false;
        if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
    }
    swiper.emit('touchStart', e);
}
function onTouchMove(event) {
    const document = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params , touches , rtlTranslate: rtl , enabled  } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) swiper.emit('touchMoveOpposite', e);
        return;
    }
    if (data.isTouchEvent && e.type !== 'touchmove') return;
    const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
    const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        // isMoved = true;
        swiper.allowClick = false;
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = now();
        }
        return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) // Vertical
        {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
    }
    if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) swiper.emit('touchMove', e);
    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === 'undefined') {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
        else // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
    }
    if (data.isScrolling) swiper.emit('touchMoveOpposite', e);
    if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
    }
    if (data.isScrolling) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) return;
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
    if (!data.isMoved) {
        if (params.loop && !params.cssMode) swiper.loopFix();
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        data.allowMomentumBounce = false; // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
        swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    let diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) resistanceRatio = 0;
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
    }
    if (disableParentSwiper) e.preventedByNestedSwiper = true;
     // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
     // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return; // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
     // Update progress
    swiper.updateProgress(data.currentTranslate); // Update translate
    swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params , touches , rtlTranslate: rtl , slidesGrid , enabled  } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) swiper.emit('touchEnd', e);
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
        data.isMoved = false;
        data.startMoving = false;
        return;
    } // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
     // Time diff
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
    if (swiper.allowClick) {
        swiper.updateClickedSlide(e);
        swiper.emit('tap click', e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit('doubleTap doubleClick', e);
    }
    data.lastClickTime = now();
    nextTick(()=>{
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
    else currentPos = -data.currentTranslate;
    if (params.cssMode) return;
    if (swiper.params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
            currentPos
        });
        return;
    } // Find current slide
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== 'undefined') {
            if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        } else if (currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    } // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === 'next') {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === 'prev') {
            if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === 'next') swiper.slideTo(stopIndex + increment);
            if (swiper.swipeDirection === 'prev') swiper.slideTo(stopIndex);
        } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
    }
}
function onResize() {
    const swiper = this;
    const { params , el  } = swiper;
    if (el && el.offsetWidth === 0) return; // Breakpoints
    if (params.breakpoints) swiper.setBreakpoint();
     // Save locks
    const { allowSlideNext , allowSlidePrev , snapGrid  } = swiper; // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    else swiper.slideTo(swiper.activeIndex, 0, false, true);
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
     // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}
function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}
function onScroll() {
    const swiper = this;
    const { wrapperEl , rtlTranslate , enabled  } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
    else swiper.translate = -wrapperEl.scrollTop;
     // eslint-disable-next-line
    if (swiper.translate === -0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    swiper.emit('setTranslate', swiper.translate, false);
}
let dummyEventAttached = false;
function dummyEventListener() {
}
const events = (swiper, method)=>{
    const document = getDocument();
    const { params , touchEvents , el , wrapperEl , device , support: support1  } = swiper;
    const capture = !!params.nested;
    const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    const swiperMethod = method; // Touch Events
    if (!support1.touch) {
        el[domMethod](touchEvents.start, swiper.onTouchStart, false);
        document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
        document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
    } else {
        const passiveListener = touchEvents.start === 'touchstart' && support1.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
        el[domMethod](touchEvents.move, swiper.onTouchMove, support1.passiveListener ? {
            passive: false,
            capture
        } : capture);
        el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    } // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el[domMethod]('click', swiper.onClick, true);
    if (params.cssMode) wrapperEl[domMethod]('scroll', swiper.onScroll);
     // Resize handler
    if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
    else swiper[swiperMethod]('observerUpdate', onResize, true);
};
function attachEvents() {
    const swiper = this;
    const document = getDocument();
    const { params , support: support1  } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
    swiper.onClick = onClick.bind(swiper);
    if (support1.touch && !dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
    }
    events(swiper, 'on');
}
function detachEvents() {
    const swiper = this;
    events(swiper, 'off');
}
var events$1 = {
    attachEvents,
    detachEvents
};
const isGridEnabled = (swiper, params)=>{
    return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
    const swiper = this;
    const { activeIndex , initialized , loopedSlides =0 , params , $el  } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') $el.addClass(`${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    }
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) swiper.changeDirection();
    extend(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit('breakpoint', breakpointParams);
}
function getBreakpoint(breakpoints, base = 'window', containerEl) {
    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    let breakpoint = false;
    const window = getWindow();
    const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point)=>{
        if (typeof point === 'string' && point.indexOf('@') === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value,
                point
            };
        }
        return {
            value: point,
            point
        };
    });
    points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10)
    );
    for(let i = 0; i < points.length; i += 1){
        const { point , value  } = points[i];
        if (base === 'window') {
            if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
        } else if (value <= containerEl.clientWidth) breakpoint = point;
    }
    return breakpoint || 'max';
}
var breakpoints = {
    setBreakpoint,
    getBreakpoint
};
function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item)=>{
        if (typeof item === 'object') Object.keys(item).forEach((classNames)=>{
            if (item[classNames]) resultClasses.push(prefix + classNames);
        });
        else if (typeof item === 'string') resultClasses.push(prefix + item);
    });
    return resultClasses;
}
function addClasses() {
    const swiper = this;
    const { classNames , params , rtl , $el , device , support: support1  } = swiper; // prettier-ignore
    const suffixes = prepareClasses([
        'initialized',
        params.direction,
        {
            'pointer-events': !support1.touch
        },
        {
            'free-mode': swiper.params.freeMode && params.freeMode.enabled
        },
        {
            'autoheight': params.autoHeight
        },
        {
            'rtl': rtl
        },
        {
            'grid': params.grid && params.grid.rows > 1
        },
        {
            'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
        },
        {
            'android': device.android
        },
        {
            'ios': device.ios
        },
        {
            'css-mode': params.cssMode
        },
        {
            'centered': params.cssMode && params.centeredSlides
        }
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    $el.addClass([
        ...classNames
    ].join(' '));
    swiper.emitContainerClasses();
}
function removeClasses() {
    const swiper = this;
    const { $el , classNames  } = swiper;
    $el.removeClass(classNames.join(' '));
    swiper.emitContainerClasses();
}
var classes = {
    addClasses,
    removeClasses
};
function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    const window = getWindow();
    let image;
    function onReady() {
        if (callback) callback();
    }
    const isPicture = $(imageEl).parent('picture')[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
            image = new window.Image();
            image.onload = onReady;
            image.onerror = onReady;
            if (sizes) image.sizes = sizes;
            if (srcset) image.srcset = srcset;
            if (src) image.src = src;
        } else onReady();
    } else // image already loaded...
    onReady();
}
function preloadImages() {
    const swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
            if (swiper.params.updateOnImagesReady) swiper.update();
            swiper.emit('imagesReady');
        }
    }
    for(let i = 0; i < swiper.imagesToLoad.length; i += 1){
        const imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
    }
}
var images = {
    loadImage,
    preloadImages
};
function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked , params  } = swiper;
    const { slidesOffsetBefore  } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else swiper.isLocked = swiper.snapGrid.length === 1;
    if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
    if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
}
var checkOverflow$1 = {
    checkOverflow
};
var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    // NS
    containerModifierClass: 'swiper-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj = {
    }) {
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) {
            extend(allModulesParams, obj);
            return;
        }
        if ([
            'navigation',
            'pagination',
            'scrollbar'
        ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
            auto: true
        };
        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
            extend(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) params[moduleParamName] = {
            enabled: true
        };
        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) params[moduleParamName].enabled = true;
        if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
        };
        extend(allModulesParams, obj);
    };
}
/* eslint no-param-reassign: "off" */ const prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes,
    images
};
const extendedDefaults = {
};
class Swiper {
    constructor(...args){
        let el1;
        let params;
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') params = args[0];
        else [el1, params] = args;
        if (!params) params = {
        };
        params = extend({
        }, params);
        if (el1 && !params.el) params.el = el1;
        if (params.el && $(params.el).length > 1) {
            const swipers = [];
            $(params.el).each((containerEl)=>{
                const newParams = extend({
                }, params, {
                    el: containerEl
                });
                swipers.push(new Swiper(newParams));
            });
            return swipers;
        } // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = getSupport();
        swiper.device = getDevice({
            userAgent: params.userAgent
        });
        swiper.browser = getBrowser();
        swiper.eventsListeners = {
        };
        swiper.eventsAnyListeners = [];
        if (typeof swiper.modules === 'undefined') swiper.modules = [];
        if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
        const allModulesParams = {
        };
        swiper.modules.forEach((mod)=>{
            mod({
                swiper,
                extendParams: moduleExtendParams(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        }); // Extend defaults with modules params
        const swiperParams = extend({
        }, defaults, allModulesParams); // Extend defaults with passed params
        swiper.params = extend({
        }, swiperParams, extendedDefaults, params);
        swiper.originalParams = extend({
        }, swiper.params);
        swiper.passedParams = extend({
        }, params); // add event listeners
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
            swiper.on(eventName, swiper.params.on[eventName]);
        });
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
         // Save Dom lib
        swiper.$ = $; // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el: el1,
            // Classes
            classNames: [],
            // Slides
            slides: $(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal () {
                return swiper.params.direction === 'horizontal';
            },
            isVertical () {
                return swiper.params.direction === 'vertical';
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEvents: function touchEvents() {
                const touch = [
                    'touchstart',
                    'touchmove',
                    'touchend',
                    'touchcancel'
                ];
                const desktop = [
                    'pointerdown',
                    'pointermove',
                    'pointerup'
                ];
                swiper.touchEventsTouch = {
                    start: touch[0],
                    move: touch[1],
                    end: touch[2],
                    cancel: touch[3]
                };
                swiper.touchEventsDesktop = {
                    start: desktop[0],
                    move: desktop[1],
                    end: desktop[2]
                };
                return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
            }(),
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: now(),
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                isTouchEvent: undefined,
                startMoving: undefined
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        });
        swiper.emit('_swiper'); // Init
        if (swiper.params.init) swiper.init();
         // Return app instance
        return swiper;
    }
    enable() {
        const swiper1 = this;
        if (swiper1.enabled) return;
        swiper1.enabled = true;
        if (swiper1.params.grabCursor) swiper1.setGrabCursor();
        swiper1.emit('enable');
    }
    disable() {
        const swiper1 = this;
        if (!swiper1.enabled) return;
        swiper1.enabled = false;
        if (swiper1.params.grabCursor) swiper1.unsetGrabCursor();
        swiper1.emit('disable');
    }
    setProgress(progress, speed) {
        const swiper1 = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper1.minTranslate();
        const max = swiper1.maxTranslate();
        const current = (max - min) * progress + min;
        swiper1.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper1.updateActiveIndex();
        swiper1.updateSlidesClasses();
    }
    emitContainerClasses() {
        const swiper1 = this;
        if (!swiper1.params._emitClasses || !swiper1.el) return;
        const cls = swiper1.el.className.split(' ').filter((className)=>{
            return className.indexOf('swiper') === 0 || className.indexOf(swiper1.params.containerModifierClass) === 0;
        });
        swiper1.emit('_containerClasses', cls.join(' '));
    }
    getSlideClasses(slideEl) {
        const swiper1 = this;
        return slideEl.className.split(' ').filter((className)=>{
            return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper1.params.slideClass) === 0;
        }).join(' ');
    }
    emitSlidesClasses() {
        const swiper1 = this;
        if (!swiper1.params._emitClasses || !swiper1.el) return;
        const updates = [];
        swiper1.slides.each((slideEl)=>{
            const classNames = swiper1.getSlideClasses(slideEl);
            updates.push({
                slideEl,
                classNames
            });
            swiper1.emit('_slideClass', slideEl, classNames);
        });
        swiper1.emit('_slideClasses', updates);
    }
    slidesPerViewDynamic(view = 'current', exact = false) {
        const swiper1 = this;
        const { params: params1 , slides , slidesGrid , slidesSizesGrid , size: swiperSize , activeIndex  } = swiper1;
        let spv = 1;
        if (params1.centeredSlides) {
            let slideSize = slides[activeIndex].swiperSlideSize;
            let breakLoop;
            for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for(let i1 = activeIndex - 1; i1 >= 0; i1 -= 1)if (slides[i1] && !breakLoop) {
                slideSize += slides[i1].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else {
            // eslint-disable-next-line
            if (view === 'current') for(let i = activeIndex + 1; i < slides.length; i += 1){
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            }
            else // previous
            for(let i1 = activeIndex - 1; i1 >= 0; i1 -= 1){
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i1] < swiperSize;
                if (slideInView) spv += 1;
            }
        }
        return spv;
    }
    update() {
        const swiper1 = this;
        if (!swiper1 || swiper1.destroyed) return;
        const { snapGrid , params: params1  } = swiper1; // Breakpoints
        if (params1.breakpoints) swiper1.setBreakpoint();
        swiper1.updateSize();
        swiper1.updateSlides();
        swiper1.updateProgress();
        swiper1.updateSlidesClasses();
        function setTranslate1() {
            const translateValue = swiper1.rtlTranslate ? swiper1.translate * -1 : swiper1.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper1.maxTranslate()), swiper1.minTranslate());
            swiper1.setTranslate(newTranslate);
            swiper1.updateActiveIndex();
            swiper1.updateSlidesClasses();
        }
        let translated;
        if (swiper1.params.freeMode && swiper1.params.freeMode.enabled) {
            setTranslate1();
            if (swiper1.params.autoHeight) swiper1.updateAutoHeight();
        } else {
            if ((swiper1.params.slidesPerView === 'auto' || swiper1.params.slidesPerView > 1) && swiper1.isEnd && !swiper1.params.centeredSlides) translated = swiper1.slideTo(swiper1.slides.length - 1, 0, false, true);
            else translated = swiper1.slideTo(swiper1.activeIndex, 0, false, true);
            if (!translated) setTranslate1();
        }
        if (params1.watchOverflow && snapGrid !== swiper1.snapGrid) swiper1.checkOverflow();
        swiper1.emit('update');
    }
    changeDirection(newDirection, needUpdate = true) {
        const swiper1 = this;
        const currentDirection = swiper1.params.direction;
        if (!newDirection) // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') return swiper1;
        swiper1.$el.removeClass(`${swiper1.params.containerModifierClass}${currentDirection}`).addClass(`${swiper1.params.containerModifierClass}${newDirection}`);
        swiper1.emitContainerClasses();
        swiper1.params.direction = newDirection;
        swiper1.slides.each((slideEl)=>{
            if (newDirection === 'vertical') slideEl.style.width = '';
            else slideEl.style.height = '';
        });
        swiper1.emit('changeDirection');
        if (needUpdate) swiper1.update();
        return swiper1;
    }
    mount(el) {
        const swiper1 = this;
        if (swiper1.mounted) return true; // Find el
        const $el = $(el || swiper1.params.el);
        el = $el[0];
        if (!el) return false;
        el.swiper = swiper1;
        const getWrapperSelector = ()=>{
            return `.${(swiper1.params.wrapperClass || '').trim().split(' ').join('.')}`;
        };
        const getWrapper = ()=>{
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items
                res.children = (options)=>$el.children(options)
                ;
                return res;
            }
            return $el.children(getWrapperSelector());
        }; // Find Wrapper
        let $wrapperEl = getWrapper();
        if ($wrapperEl.length === 0 && swiper1.params.createElements) {
            const document = getDocument();
            const wrapper = document.createElement('div');
            $wrapperEl = $(wrapper);
            wrapper.className = swiper1.params.wrapperClass;
            $el.append(wrapper);
            $el.children(`.${swiper1.params.slideClass}`).each((slideEl)=>{
                $wrapperEl.append(slideEl);
            });
        }
        Object.assign(swiper1, {
            $el,
            el,
            $wrapperEl,
            wrapperEl: $wrapperEl[0],
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
            rtlTranslate: swiper1.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
            wrongRTL: $wrapperEl.css('display') === '-webkit-box'
        });
        return true;
    }
    init(el) {
        const swiper1 = this;
        if (swiper1.initialized) return swiper1;
        const mounted = swiper1.mount(el);
        if (mounted === false) return swiper1;
        swiper1.emit('beforeInit'); // Set breakpoint
        if (swiper1.params.breakpoints) swiper1.setBreakpoint();
         // Add Classes
        swiper1.addClasses(); // Create loop
        if (swiper1.params.loop) swiper1.loopCreate();
         // Update size
        swiper1.updateSize(); // Update slides
        swiper1.updateSlides();
        if (swiper1.params.watchOverflow) swiper1.checkOverflow();
         // Set Grab Cursor
        if (swiper1.params.grabCursor && swiper1.enabled) swiper1.setGrabCursor();
        if (swiper1.params.preloadImages) swiper1.preloadImages();
         // Slide To Initial Slide
        if (swiper1.params.loop) swiper1.slideTo(swiper1.params.initialSlide + swiper1.loopedSlides, 0, swiper1.params.runCallbacksOnInit, false, true);
        else swiper1.slideTo(swiper1.params.initialSlide, 0, swiper1.params.runCallbacksOnInit, false, true);
         // Attach events
        swiper1.attachEvents(); // Init Flag
        swiper1.initialized = true; // Emit
        swiper1.emit('init');
        swiper1.emit('afterInit');
        return swiper1;
    }
    destroy(deleteInstance = true, cleanStyles = true) {
        const swiper1 = this;
        const { params: params1 , $el , $wrapperEl , slides  } = swiper1;
        if (typeof swiper1.params === 'undefined' || swiper1.destroyed) return null;
        swiper1.emit('beforeDestroy'); // Init Flag
        swiper1.initialized = false; // Detach events
        swiper1.detachEvents(); // Destroy loop
        if (params1.loop) swiper1.loopDestroy();
         // Cleanup styles
        if (cleanStyles) {
            swiper1.removeClasses();
            $el.removeAttr('style');
            $wrapperEl.removeAttr('style');
            if (slides && slides.length) slides.removeClass([
                params1.slideVisibleClass,
                params1.slideActiveClass,
                params1.slideNextClass,
                params1.slidePrevClass
            ].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
        }
        swiper1.emit('destroy'); // Detach emitter events
        Object.keys(swiper1.eventsListeners).forEach((eventName)=>{
            swiper1.off(eventName);
        });
        if (deleteInstance !== false) {
            swiper1.$el[0].swiper = null;
            deleteProps(swiper1);
        }
        swiper1.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        extend(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return defaults;
    }
    static installModule(mod) {
        if (!Swiper.prototype.modules) Swiper.prototype.modules = [];
        const modules = Swiper.prototype.modules;
        if (typeof mod === 'function' && modules.indexOf(mod) < 0) modules.push(mod);
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m)=>Swiper.installModule(m)
            );
            return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
    }
}
Object.keys(prototypes).forEach((prototypeGroup)=>{
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod)=>{
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
});
Swiper.use([
    Resize,
    Observer
]);
function Virtual({ swiper: swiper1 , extendParams , on: on1  }) {
    extendParams({
        virtual: {
            enabled: false,
            slides: [],
            cache: true,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: true,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    swiper1.virtual = {
        cache: {
        },
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    function renderSlide(slide1, index1) {
        const params1 = swiper1.params.virtual;
        if (params1.cache && swiper1.virtual.cache[index1]) return swiper1.virtual.cache[index1];
        const $slideEl = params1.renderSlide ? $(params1.renderSlide.call(swiper1, slide1, index1)) : $(`<div class="${swiper1.params.slideClass}" data-swiper-slide-index="${index1}">${slide1}</div>`);
        if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index1);
        if (params1.cache) swiper1.virtual.cache[index1] = $slideEl;
        return $slideEl;
    }
    function update1(force) {
        const { slidesPerView , slidesPerGroup , centeredSlides  } = swiper1.params;
        const { addSlidesBefore , addSlidesAfter  } = swiper1.params.virtual;
        const { from: previousFrom , to: previousTo , slides , slidesGrid: previousSlidesGrid , offset: previousOffset  } = swiper1.virtual;
        swiper1.updateActiveIndex();
        const activeIndex = swiper1.activeIndex || 0;
        let offsetProp;
        if (swiper1.rtlTranslate) offsetProp = 'right';
        else offsetProp = swiper1.isHorizontal() ? 'left' : 'top';
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
            slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
            slidesBefore = slidesPerGroup + addSlidesBefore;
        }
        const from = Math.max((activeIndex || 0) - slidesBefore, 0);
        const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        const offset1 = (swiper1.slidesGrid[from] || 0) - (swiper1.slidesGrid[0] || 0);
        Object.assign(swiper1.virtual, {
            from,
            to,
            offset: offset1,
            slidesGrid: swiper1.slidesGrid
        });
        function onRendered() {
            swiper1.updateSlides();
            swiper1.updateProgress();
            swiper1.updateSlidesClasses();
            if (swiper1.lazy && swiper1.params.lazy.enabled) swiper1.lazy.load();
        }
        if (previousFrom === from && previousTo === to && !force) {
            if (swiper1.slidesGrid !== previousSlidesGrid && offset1 !== previousOffset) swiper1.slides.css(offsetProp, `${offset1}px`);
            swiper1.updateProgress();
            return;
        }
        if (swiper1.params.virtual.renderExternal) {
            swiper1.params.virtual.renderExternal.call(swiper1, {
                offset: offset1,
                from,
                to,
                slides: function getSlides() {
                    const slidesToRender = [];
                    for(let i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                    return slidesToRender;
                }()
            });
            if (swiper1.params.virtual.renderExternalUpdate) onRendered();
            return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        if (force) swiper1.$wrapperEl.find(`.${swiper1.params.slideClass}`).remove();
        else {
            for(let i = previousFrom; i <= previousTo; i += 1)if (i < from || i > to) swiper1.$wrapperEl.find(`.${swiper1.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
        for(let i = 0; i < slides.length; i += 1)if (i >= from && i <= to) {
            if (typeof previousTo === 'undefined' || force) appendIndexes.push(i);
            else {
                if (i > previousTo) appendIndexes.push(i);
                if (i < previousFrom) prependIndexes.push(i);
            }
        }
        appendIndexes.forEach((index1)=>{
            swiper1.$wrapperEl.append(renderSlide(slides[index1], index1));
        });
        prependIndexes.sort((a, b)=>b - a
        ).forEach((index1)=>{
            swiper1.$wrapperEl.prepend(renderSlide(slides[index1], index1));
        });
        swiper1.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset1}px`);
        onRendered();
    }
    function appendSlide(slides) {
        if (typeof slides === 'object' && 'length' in slides) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper1.virtual.slides.push(slides[i]);
        } else swiper1.virtual.slides.push(slides);
        update1(true);
    }
    function prependSlide(slides) {
        const activeIndex = swiper1.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper1.virtual.slides.unshift(slides[i]);
            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
        } else swiper1.virtual.slides.unshift(slides);
        if (swiper1.params.virtual.cache) {
            const cache = swiper1.virtual.cache;
            const newCache = {
            };
            Object.keys(cache).forEach((cachedIndex)=>{
                const $cachedEl = cache[cachedIndex];
                const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
                if (cachedElIndex) $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
            });
            swiper1.virtual.cache = newCache;
        }
        update1(true);
        swiper1.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        let activeIndex = swiper1.activeIndex;
        if (Array.isArray(slidesIndexes)) for(let i = slidesIndexes.length - 1; i >= 0; i -= 1){
            swiper1.virtual.slides.splice(slidesIndexes[i], 1);
            if (swiper1.params.virtual.cache) delete swiper1.virtual.cache[slidesIndexes[i]];
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        else {
            swiper1.virtual.slides.splice(slidesIndexes, 1);
            if (swiper1.params.virtual.cache) delete swiper1.virtual.cache[slidesIndexes];
            if (slidesIndexes < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        update1(true);
        swiper1.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
        swiper1.virtual.slides = [];
        if (swiper1.params.virtual.cache) swiper1.virtual.cache = {
        };
        update1(true);
        swiper1.slideTo(0, 0);
    }
    on1('beforeInit', ()=>{
        if (!swiper1.params.virtual.enabled) return;
        swiper1.virtual.slides = swiper1.params.virtual.slides;
        swiper1.classNames.push(`${swiper1.params.containerModifierClass}virtual`);
        swiper1.params.watchSlidesProgress = true;
        swiper1.originalParams.watchSlidesProgress = true;
        if (!swiper1.params.initialSlide) update1();
    });
    on1('setTranslate', ()=>{
        if (!swiper1.params.virtual.enabled) return;
        update1();
    });
    on1('init update resize', ()=>{
        if (!swiper1.params.virtual.enabled) return;
        if (swiper1.params.cssMode) setCSSProperty(swiper1.wrapperEl, '--swiper-virtual-size', `${swiper1.virtualSize}px`);
    });
    Object.assign(swiper1.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update: update1
    });
}
/* eslint-disable consistent-return */ function Keyboard({ swiper: swiper1 , extendParams , on: on1 , emit  }) {
    const document = getDocument();
    const window = getWindow();
    swiper1.keyboard = {
        enabled: false
    };
    extendParams({
        keyboard: {
            enabled: false,
            onlyInViewport: true,
            pageUpDown: true
        }
    });
    function handle(event) {
        if (!swiper1.enabled) return;
        const { rtlTranslate: rtl  } = swiper1;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper1.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40; // Directions locks
        if (!swiper1.allowSlideNext && (swiper1.isHorizontal() && isArrowRight || swiper1.isVertical() && isArrowDown || isPageDown)) return false;
        if (!swiper1.allowSlidePrev && (swiper1.isHorizontal() && isArrowLeft || swiper1.isVertical() && isArrowUp || isPageUp)) return false;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) return undefined;
        if (swiper1.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
            let inView = false; // Check that swiper should be inside of visible area of window
            if (swiper1.$el.parents(`.${swiper1.params.slideClass}`).length > 0 && swiper1.$el.parents(`.${swiper1.params.slideActiveClass}`).length === 0) return undefined;
            const $el = swiper1.$el;
            const swiperWidth = $el[0].clientWidth;
            const swiperHeight = $el[0].clientHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const swiperOffset = swiper1.$el.offset();
            if (rtl) swiperOffset.left -= swiper1.$el[0].scrollLeft;
            const swiperCoord = [
                [
                    swiperOffset.left,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left,
                    swiperOffset.top + swiperHeight
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top + swiperHeight
                ]
            ];
            for(let i = 0; i < swiperCoord.length; i += 1){
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                    inView = true;
                }
            }
            if (!inView) return undefined;
        }
        if (swiper1.isHorizontal()) {
            if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper1.slideNext();
            if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper1.slidePrev();
        } else {
            if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (isPageDown || isArrowDown) swiper1.slideNext();
            if (isPageUp || isArrowUp) swiper1.slidePrev();
        }
        emit('keyPress', kc);
        return undefined;
    }
    function enable() {
        if (swiper1.keyboard.enabled) return;
        $(document).on('keydown', handle);
        swiper1.keyboard.enabled = true;
    }
    function disable() {
        if (!swiper1.keyboard.enabled) return;
        $(document).off('keydown', handle);
        swiper1.keyboard.enabled = false;
    }
    on1('init', ()=>{
        if (swiper1.params.keyboard.enabled) enable();
    });
    on1('destroy', ()=>{
        if (swiper1.keyboard.enabled) disable();
    });
    Object.assign(swiper1.keyboard, {
        enable,
        disable
    });
}
/* eslint-disable consistent-return */ function Mousewheel({ swiper: swiper1 , extendParams , on: on1 , emit  }) {
    const window = getWindow();
    extendParams({
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: 'container',
            thresholdDelta: null,
            thresholdTime: null
        }
    });
    swiper1.mousewheel = {
        enabled: false
    };
    let timeout;
    let lastScrollTime = now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy
        if ('detail' in e) sY = e.detail;
        if ('wheelDelta' in e) sY = -e.wheelDelta / 120;
        if ('wheelDeltaY' in e) sY = -e.wheelDeltaY / 120;
        if ('wheelDeltaX' in e) sX = -e.wheelDeltaX / 120;
         // side scrolling on FF with DOMMouseScroll
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ('deltaY' in e) pY = e.deltaY;
        if ('deltaX' in e) pX = e.deltaX;
        if (e.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        } // Fall-back if spin cannot be determined
        if (pX && !sX) sX = pX < 1 ? -1 : 1;
        if (pY && !sY) sY = pY < 1 ? -1 : 1;
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
        };
    }
    function handleMouseEnter() {
        if (!swiper1.enabled) return;
        swiper1.mouseEntered = true;
    }
    function handleMouseLeave() {
        if (!swiper1.enabled) return;
        swiper1.mouseEntered = false;
    }
    function animateSlider(newEvent) {
        if (swiper1.params.mousewheel.thresholdDelta && newEvent.delta < swiper1.params.mousewheel.thresholdDelta) // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
        if (swiper1.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper1.params.mousewheel.thresholdTime) // Prevent if time between scrolls is below configured threshold
        return false;
         // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && now() - lastScrollTime < 60) // Return false as a default
        return true;
         // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
            if ((!swiper1.isEnd || swiper1.params.loop) && !swiper1.animating) {
                swiper1.slideNext();
                emit('scroll', newEvent.raw);
            }
        } else if ((!swiper1.isBeginning || swiper1.params.loop) && !swiper1.animating) {
            swiper1.slidePrev();
            emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime(); // Return false as a default
        return false;
    }
    function releaseScroll(newEvent) {
        const params1 = swiper1.params.mousewheel;
        if (newEvent.direction < 0) {
            if (swiper1.isEnd && !swiper1.params.loop && params1.releaseOnEdges) // Return true to animate scroll on edges
            return true;
        } else if (swiper1.isBeginning && !swiper1.params.loop && params1.releaseOnEdges) // Return true to animate scroll on edges
        return true;
        return false;
    }
    function handle(event) {
        let e = event;
        let disableParentSwiper = true;
        if (!swiper1.enabled) return;
        const params1 = swiper1.params.mousewheel;
        if (swiper1.params.cssMode) e.preventDefault();
        let target = swiper1.$el;
        if (swiper1.params.mousewheel.eventsTarget !== 'container') target = $(swiper1.params.mousewheel.eventsTarget);
        if (!swiper1.mouseEntered && !target[0].contains(e.target) && !params1.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        let delta = 0;
        const rtlFactor = swiper1.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params1.forceToAxis) {
            if (swiper1.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                else return true;
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
            else return true;
        } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        if (delta === 0) return true;
        if (params1.invert) delta = -delta; // Get the scroll positions
        let positions = swiper1.getTranslate() + delta * params1.sensitivity;
        if (positions >= swiper1.minTranslate()) positions = swiper1.minTranslate();
        if (positions <= swiper1.maxTranslate()) positions = swiper1.maxTranslate(); // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper1.params.loop ? true : !(positions === swiper1.minTranslate() || positions === swiper1.maxTranslate());
        if (disableParentSwiper && swiper1.params.nested) e.stopPropagation();
        if (!swiper1.params.freeMode || !swiper1.params.freeMode.enabled) {
            // Register the new event in a variable which stores the relevant data
            const newEvent = {
                time: now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event
            }; // Keep the most recent events
            if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.
            if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
            } else animateSlider(newEvent);
             // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (releaseScroll(newEvent)) return true;
        } else {
            // Freemode or scrollContainer:
            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            const newEvent = {
                time: now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta)
            };
            const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
            if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined;
                if (swiper1.params.loop) swiper1.loopFix();
                let position = swiper1.getTranslate() + delta * params1.sensitivity;
                const wasBeginning = swiper1.isBeginning;
                const wasEnd = swiper1.isEnd;
                if (position >= swiper1.minTranslate()) position = swiper1.minTranslate();
                if (position <= swiper1.maxTranslate()) position = swiper1.maxTranslate();
                swiper1.setTransition(0);
                swiper1.setTranslate(position);
                swiper1.updateProgress();
                swiper1.updateActiveIndex();
                swiper1.updateSlidesClasses();
                if (!wasBeginning && swiper1.isBeginning || !wasEnd && swiper1.isEnd) swiper1.updateSlidesClasses();
                if (swiper1.params.freeMode.sticky) {
                    // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                    // the end of a momentum scroll by storing recent (N=15?) wheel events.
                    // 1. do all N events have decreasing or same (absolute value) delta?
                    // 2. did all N events arrive in the last M (M=500?) msecs?
                    // 3. does the earliest event have an (absolute value) delta that's
                    //    at least P (P=1?) larger than the most recent event's delta?
                    // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                    // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                    // Snap immediately and ignore remaining wheel events in this scroll.
                    // See comment above for "remaining wheel events in this scroll" determination.
                    // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                    clearTimeout(timeout);
                    timeout = undefined;
                    if (recentWheelEvents.length >= 15) recentWheelEvents.shift(); // only store the last N events
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    const firstEvent = recentWheelEvents[0];
                    recentWheelEvents.push(newEvent);
                    if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                    recentWheelEvents.splice(0);
                    else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                        // We're at the end of the deceleration of a momentum scroll, so there's no need
                        // to wait for more events. Snap ASAP on the next tick.
                        // Also, because there's some remaining momentum we'll bias the snap in the
                        // direction of the ongoing scroll because it's better UX for the scroll to snap
                        // in the same direction as the scroll instead of reversing to snap.  Therefore,
                        // if it's already scrolled more than 20% in the current direction, keep going.
                        const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        timeout = nextTick(()=>{
                            swiper1.slideToClosest(swiper1.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                    }
                    if (!timeout) // if we get here, then we haven't detected the end of a momentum scroll, so
                    // we'll consider a scroll "complete" when there haven't been any wheel events
                    // for 500ms.
                    timeout = nextTick(()=>{
                        const snapToThreshold = 0.5;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        swiper1.slideToClosest(swiper1.params.speed, true, undefined, snapToThreshold);
                    }, 500);
                } // Emit event
                if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay
                if (swiper1.params.autoplay && swiper1.params.autoplayDisableOnInteraction) swiper1.autoplay.stop(); // Return page scroll on edge positions
                if (position === swiper1.minTranslate() || position === swiper1.maxTranslate()) return true;
            }
        }
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    function events1(method) {
        let target = swiper1.$el;
        if (swiper1.params.mousewheel.eventsTarget !== 'container') target = $(swiper1.params.mousewheel.eventsTarget);
        target[method]('mouseenter', handleMouseEnter);
        target[method]('mouseleave', handleMouseLeave);
        target[method]('wheel', handle);
    }
    function enable() {
        if (swiper1.params.cssMode) {
            swiper1.wrapperEl.removeEventListener('wheel', handle);
            return true;
        }
        if (swiper1.mousewheel.enabled) return false;
        events1('on');
        swiper1.mousewheel.enabled = true;
        return true;
    }
    function disable() {
        if (swiper1.params.cssMode) {
            swiper1.wrapperEl.addEventListener(event, handle);
            return true;
        }
        if (!swiper1.mousewheel.enabled) return false;
        events1('off');
        swiper1.mousewheel.enabled = false;
        return true;
    }
    on1('init', ()=>{
        if (!swiper1.params.mousewheel.enabled && swiper1.params.cssMode) disable();
        if (swiper1.params.mousewheel.enabled) enable();
    });
    on1('destroy', ()=>{
        if (swiper1.params.cssMode) enable();
        if (swiper1.mousewheel.enabled) disable();
    });
    Object.assign(swiper1.mousewheel, {
        enable,
        disable
    });
}
function createElementIfNotDefined(swiper1, originalParams, params1, checkProps) {
    const document = getDocument();
    if (swiper1.params.createElements) Object.keys(checkProps).forEach((key)=>{
        if (!params1[key] && params1.auto === true) {
            const element = document.createElement('div');
            element.className = checkProps[key];
            swiper1.$el.append(element);
            params1[key] = element;
            originalParams[key] = element;
        }
    });
    return params1;
}
function Navigation({ swiper: swiper1 , extendParams , on: on1 , emit  }) {
    extendParams({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock'
        }
    });
    swiper1.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
    };
    function getEl(el2) {
        let $el;
        if (el2) {
            $el = $(el2);
            if (swiper1.params.uniqueNavElements && typeof el2 === 'string' && $el.length > 1 && swiper1.$el.find(el2).length === 1) $el = swiper1.$el.find(el2);
        }
        return $el;
    }
    function toggleEl($el, disabled) {
        const params1 = swiper1.params.navigation;
        if ($el && $el.length > 0) {
            $el[disabled ? 'addClass' : 'removeClass'](params1.disabledClass);
            if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
            if (swiper1.params.watchOverflow && swiper1.enabled) $el[swiper1.isLocked ? 'addClass' : 'removeClass'](params1.lockClass);
        }
    }
    function update1() {
        // Update Navigation Buttons
        if (swiper1.params.loop) return;
        const { $nextEl , $prevEl  } = swiper1.navigation;
        toggleEl($prevEl, swiper1.isBeginning);
        toggleEl($nextEl, swiper1.isEnd);
    }
    function onPrevClick(e) {
        e.preventDefault();
        if (swiper1.isBeginning && !swiper1.params.loop) return;
        swiper1.slidePrev();
    }
    function onNextClick(e) {
        e.preventDefault();
        if (swiper1.isEnd && !swiper1.params.loop) return;
        swiper1.slideNext();
    }
    function init() {
        const params1 = swiper1.params.navigation;
        swiper1.params.navigation = createElementIfNotDefined(swiper1, swiper1.originalParams.navigation, swiper1.params.navigation, {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev'
        });
        if (!(params1.nextEl || params1.prevEl)) return;
        const $nextEl = getEl(params1.nextEl);
        const $prevEl = getEl(params1.prevEl);
        if ($nextEl && $nextEl.length > 0) $nextEl.on('click', onNextClick);
        if ($prevEl && $prevEl.length > 0) $prevEl.on('click', onPrevClick);
        Object.assign(swiper1.navigation, {
            $nextEl,
            nextEl: $nextEl && $nextEl[0],
            $prevEl,
            prevEl: $prevEl && $prevEl[0]
        });
        if (!swiper1.enabled) {
            if ($nextEl) $nextEl.addClass(params1.lockClass);
            if ($prevEl) $prevEl.addClass(params1.lockClass);
        }
    }
    function destroy() {
        const { $nextEl , $prevEl  } = swiper1.navigation;
        if ($nextEl && $nextEl.length) {
            $nextEl.off('click', onNextClick);
            $nextEl.removeClass(swiper1.params.navigation.disabledClass);
        }
        if ($prevEl && $prevEl.length) {
            $prevEl.off('click', onPrevClick);
            $prevEl.removeClass(swiper1.params.navigation.disabledClass);
        }
    }
    on1('init', ()=>{
        init();
        update1();
    });
    on1('toEdge fromEdge lock unlock', ()=>{
        update1();
    });
    on1('destroy', ()=>{
        destroy();
    });
    on1('enable disable', ()=>{
        const { $nextEl , $prevEl  } = swiper1.navigation;
        if ($nextEl) $nextEl[swiper1.enabled ? 'removeClass' : 'addClass'](swiper1.params.navigation.lockClass);
        if ($prevEl) $prevEl[swiper1.enabled ? 'removeClass' : 'addClass'](swiper1.params.navigation.lockClass);
    });
    on1('click', (_s, e)=>{
        const { $nextEl , $prevEl  } = swiper1.navigation;
        const targetEl = e.target;
        if (swiper1.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
            if (swiper1.pagination && swiper1.params.pagination && swiper1.params.pagination.clickable && (swiper1.pagination.el === targetEl || swiper1.pagination.el.contains(targetEl))) return;
            let isHidden;
            if ($nextEl) isHidden = $nextEl.hasClass(swiper1.params.navigation.hiddenClass);
            else if ($prevEl) isHidden = $prevEl.hasClass(swiper1.params.navigation.hiddenClass);
            if (isHidden === true) emit('navigationShow');
            else emit('navigationHide');
            if ($nextEl) $nextEl.toggleClass(swiper1.params.navigation.hiddenClass);
            if ($prevEl) $prevEl.toggleClass(swiper1.params.navigation.hiddenClass);
        }
    });
    Object.assign(swiper1.navigation, {
        update: update1,
        init,
        destroy
    });
}
function classesToSelector(classes1 = '') {
    return `.${classes1.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.')}`;
}
function Pagination({ swiper: swiper1 , extendParams , on: on1 , emit  }) {
    const pfx = 'swiper-pagination';
    extendParams({
        pagination: {
            el: null,
            bulletElement: 'span',
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: 'bullets',
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: (number)=>number
            ,
            formatFractionTotal: (number)=>number
            ,
            bulletClass: `${pfx}-bullet`,
            bulletActiveClass: `${pfx}-bullet-active`,
            modifierClass: `${pfx}-`,
            currentClass: `${pfx}-current`,
            totalClass: `${pfx}-total`,
            hiddenClass: `${pfx}-hidden`,
            progressbarFillClass: `${pfx}-progressbar-fill`,
            progressbarOppositeClass: `${pfx}-progressbar-opposite`,
            clickableClass: `${pfx}-clickable`,
            lockClass: `${pfx}-lock`,
            horizontalClass: `${pfx}-horizontal`,
            verticalClass: `${pfx}-vertical`
        }
    });
    swiper1.pagination = {
        el: null,
        $el: null,
        bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
        return !swiper1.params.pagination.el || !swiper1.pagination.el || !swiper1.pagination.$el || swiper1.pagination.$el.length === 0;
    }
    function setSideBullets($bulletEl, position) {
        const { bulletActiveClass  } = swiper1.params.pagination;
        $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
    }
    function update1() {
        // Render || Update Pagination bullets/items
        const rtl = swiper1.rtl;
        const params1 = swiper1.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper1.virtual && swiper1.params.virtual.enabled ? swiper1.virtual.slides.length : swiper1.slides.length;
        const $el = swiper1.pagination.$el; // Current/Total
        let current;
        const total = swiper1.params.loop ? Math.ceil((slidesLength - swiper1.loopedSlides * 2) / swiper1.params.slidesPerGroup) : swiper1.snapGrid.length;
        if (swiper1.params.loop) {
            current = Math.ceil((swiper1.activeIndex - swiper1.loopedSlides) / swiper1.params.slidesPerGroup);
            if (current > slidesLength - 1 - swiper1.loopedSlides * 2) current -= slidesLength - swiper1.loopedSlides * 2;
            if (current > total - 1) current -= total;
            if (current < 0 && swiper1.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper1.snapIndex !== 'undefined') current = swiper1.snapIndex;
        else current = swiper1.activeIndex || 0;
         // Types
        if (params1.type === 'bullets' && swiper1.pagination.bullets && swiper1.pagination.bullets.length > 0) {
            const bullets = swiper1.pagination.bullets;
            let firstIndex;
            let lastIndex;
            let midIndex;
            if (params1.dynamicBullets) {
                bulletSize = bullets.eq(0)[swiper1.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                $el.css(swiper1.isHorizontal() ? 'width' : 'height', `${bulletSize * (params1.dynamicMainBullets + 4)}px`);
                if (params1.dynamicMainBullets > 1 && swiper1.previousIndex !== undefined) {
                    dynamicBulletIndex += current - swiper1.previousIndex;
                    if (dynamicBulletIndex > params1.dynamicMainBullets - 1) dynamicBulletIndex = params1.dynamicMainBullets - 1;
                    else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                }
                firstIndex = current - dynamicBulletIndex;
                lastIndex = firstIndex + (Math.min(bullets.length, params1.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
            }
            bullets.removeClass([
                '',
                '-next',
                '-next-next',
                '-prev',
                '-prev-prev',
                '-main'
            ].map((suffix)=>`${params1.bulletActiveClass}${suffix}`
            ).join(' '));
            if ($el.length > 1) bullets.each((bullet)=>{
                const $bullet = $(bullet);
                const bulletIndex = $bullet.index();
                if (bulletIndex === current) $bullet.addClass(params1.bulletActiveClass);
                if (params1.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params1.bulletActiveClass}-main`);
                    if (bulletIndex === firstIndex) setSideBullets($bullet, 'prev');
                    if (bulletIndex === lastIndex) setSideBullets($bullet, 'next');
                }
            });
            else {
                const $bullet = bullets.eq(current);
                const bulletIndex = $bullet.index();
                $bullet.addClass(params1.bulletActiveClass);
                if (params1.dynamicBullets) {
                    const $firstDisplayedBullet = bullets.eq(firstIndex);
                    const $lastDisplayedBullet = bullets.eq(lastIndex);
                    for(let i = firstIndex; i <= lastIndex; i += 1)bullets.eq(i).addClass(`${params1.bulletActiveClass}-main`);
                    if (swiper1.params.loop) {
                        if (bulletIndex >= bullets.length - params1.dynamicMainBullets) {
                            for(let i1 = params1.dynamicMainBullets; i1 >= 0; i1 -= 1)bullets.eq(bullets.length - i1).addClass(`${params1.bulletActiveClass}-main`);
                            bullets.eq(bullets.length - params1.dynamicMainBullets - 1).addClass(`${params1.bulletActiveClass}-prev`);
                        } else {
                            setSideBullets($firstDisplayedBullet, 'prev');
                            setSideBullets($lastDisplayedBullet, 'next');
                        }
                    } else {
                        setSideBullets($firstDisplayedBullet, 'prev');
                        setSideBullets($lastDisplayedBullet, 'next');
                    }
                }
            }
            if (params1.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params1.dynamicMainBullets + 4);
                const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                const offsetProp = rtl ? 'right' : 'left';
                bullets.css(swiper1.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
            }
        }
        if (params1.type === 'fraction') {
            $el.find(classesToSelector(params1.currentClass)).text(params1.formatFractionCurrent(current + 1));
            $el.find(classesToSelector(params1.totalClass)).text(params1.formatFractionTotal(total));
        }
        if (params1.type === 'progressbar') {
            let progressbarDirection;
            if (params1.progressbarOpposite) progressbarDirection = swiper1.isHorizontal() ? 'vertical' : 'horizontal';
            else progressbarDirection = swiper1.isHorizontal() ? 'horizontal' : 'vertical';
            const scale = (current + 1) / total;
            let scaleX = 1;
            let scaleY = 1;
            if (progressbarDirection === 'horizontal') scaleX = scale;
            else scaleY = scale;
            $el.find(classesToSelector(params1.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper1.params.speed);
        }
        if (params1.type === 'custom' && params1.renderCustom) {
            $el.html(params1.renderCustom(swiper1, current + 1, total));
            emit('paginationRender', $el[0]);
        } else emit('paginationUpdate', $el[0]);
        if (swiper1.params.watchOverflow && swiper1.enabled) $el[swiper1.isLocked ? 'addClass' : 'removeClass'](params1.lockClass);
    }
    function render() {
        // Render Container
        const params1 = swiper1.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper1.virtual && swiper1.params.virtual.enabled ? swiper1.virtual.slides.length : swiper1.slides.length;
        const $el = swiper1.pagination.$el;
        let paginationHTML = '';
        if (params1.type === 'bullets') {
            let numberOfBullets = swiper1.params.loop ? Math.ceil((slidesLength - swiper1.loopedSlides * 2) / swiper1.params.slidesPerGroup) : swiper1.snapGrid.length;
            if (swiper1.params.freeMode && swiper1.params.freeMode.enabled && !swiper1.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
            for(let i = 0; i < numberOfBullets; i += 1)if (params1.renderBullet) paginationHTML += params1.renderBullet.call(swiper1, i, params1.bulletClass);
            else paginationHTML += `<${params1.bulletElement} class="${params1.bulletClass}"></${params1.bulletElement}>`;
            $el.html(paginationHTML);
            swiper1.pagination.bullets = $el.find(classesToSelector(params1.bulletClass));
        }
        if (params1.type === 'fraction') {
            if (params1.renderFraction) paginationHTML = params1.renderFraction.call(swiper1, params1.currentClass, params1.totalClass);
            else paginationHTML = `<span class="${params1.currentClass}"></span>` + ' / ' + `<span class="${params1.totalClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params1.type === 'progressbar') {
            if (params1.renderProgressbar) paginationHTML = params1.renderProgressbar.call(swiper1, params1.progressbarFillClass);
            else paginationHTML = `<span class="${params1.progressbarFillClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params1.type !== 'custom') emit('paginationRender', swiper1.pagination.$el[0]);
    }
    function init() {
        swiper1.params.pagination = createElementIfNotDefined(swiper1, swiper1.originalParams.pagination, swiper1.params.pagination, {
            el: 'swiper-pagination'
        });
        const params1 = swiper1.params.pagination;
        if (!params1.el) return;
        let $el = $(params1.el);
        if ($el.length === 0) return;
        if (swiper1.params.uniqueNavElements && typeof params1.el === 'string' && $el.length > 1) {
            $el = swiper1.$el.find(params1.el); // check if it belongs to another nested Swiper
            if ($el.length > 1) $el = $el.filter((el2)=>{
                if ($(el2).parents('.swiper')[0] !== swiper1.el) return false;
                return true;
            });
        }
        if (params1.type === 'bullets' && params1.clickable) $el.addClass(params1.clickableClass);
        $el.addClass(params1.modifierClass + params1.type);
        $el.addClass(params1.modifierClass + swiper1.params.direction);
        if (params1.type === 'bullets' && params1.dynamicBullets) {
            $el.addClass(`${params1.modifierClass}${params1.type}-dynamic`);
            dynamicBulletIndex = 0;
            if (params1.dynamicMainBullets < 1) params1.dynamicMainBullets = 1;
        }
        if (params1.type === 'progressbar' && params1.progressbarOpposite) $el.addClass(params1.progressbarOppositeClass);
        if (params1.clickable) $el.on('click', classesToSelector(params1.bulletClass), function onClick1(e) {
            e.preventDefault();
            let index1 = $(this).index() * swiper1.params.slidesPerGroup;
            if (swiper1.params.loop) index1 += swiper1.loopedSlides;
            swiper1.slideTo(index1);
        });
        Object.assign(swiper1.pagination, {
            $el,
            el: $el[0]
        });
        if (!swiper1.enabled) $el.addClass(params1.lockClass);
    }
    function destroy() {
        const params1 = swiper1.params.pagination;
        if (isPaginationDisabled()) return;
        const $el = swiper1.pagination.$el;
        $el.removeClass(params1.hiddenClass);
        $el.removeClass(params1.modifierClass + params1.type);
        $el.removeClass(params1.modifierClass + swiper1.params.direction);
        if (swiper1.pagination.bullets && swiper1.pagination.bullets.removeClass) swiper1.pagination.bullets.removeClass(params1.bulletActiveClass);
        if (params1.clickable) $el.off('click', classesToSelector(params1.bulletClass));
    }
    on1('init', ()=>{
        init();
        render();
        update1();
    });
    on1('activeIndexChange', ()=>{
        if (swiper1.params.loop) update1();
        else if (typeof swiper1.snapIndex === 'undefined') update1();
    });
    on1('snapIndexChange', ()=>{
        if (!swiper1.params.loop) update1();
    });
    on1('slidesLengthChange', ()=>{
        if (swiper1.params.loop) {
            render();
            update1();
        }
    });
    on1('snapGridLengthChange', ()=>{
        if (!swiper1.params.loop) {
            render();
            update1();
        }
    });
    on1('destroy', ()=>{
        destroy();
    });
    on1('enable disable', ()=>{
        const { $el  } = swiper1.pagination;
        if ($el) $el[swiper1.enabled ? 'removeClass' : 'addClass'](swiper1.params.pagination.lockClass);
    });
    on1('lock unlock', ()=>{
        update1();
    });
    on1('click', (_s, e)=>{
        const targetEl = e.target;
        const { $el  } = swiper1.pagination;
        if (swiper1.params.pagination.el && swiper1.params.pagination.hideOnClick && $el.length > 0 && !$(targetEl).hasClass(swiper1.params.pagination.bulletClass)) {
            if (swiper1.navigation && (swiper1.navigation.nextEl && targetEl === swiper1.navigation.nextEl || swiper1.navigation.prevEl && targetEl === swiper1.navigation.prevEl)) return;
            const isHidden = $el.hasClass(swiper1.params.pagination.hiddenClass);
            if (isHidden === true) emit('paginationShow');
            else emit('paginationHide');
            $el.toggleClass(swiper1.params.pagination.hiddenClass);
        }
    });
    Object.assign(swiper1.pagination, {
        render,
        update: update1,
        init,
        destroy
    });
}
function Scrollbar({ swiper: swiper1 , extendParams , on: on1 , emit  }) {
    const document = getDocument();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
        scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag'
        }
    });
    swiper1.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null
    };
    function setTranslate1() {
        if (!swiper1.params.scrollbar.el || !swiper1.scrollbar.el) return;
        const { scrollbar , rtlTranslate: rtl , progress  } = swiper1;
        const { $dragEl , $el  } = scrollbar;
        const params1 = swiper1.params.scrollbar;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
        } else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
        if (swiper1.isHorizontal()) {
            $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
            $dragEl[0].style.width = `${newSize}px`;
        } else {
            $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
            $dragEl[0].style.height = `${newSize}px`;
        }
        if (params1.hide) {
            clearTimeout(timeout);
            $el[0].style.opacity = 1;
            timeout = setTimeout(()=>{
                $el[0].style.opacity = 0;
                $el.transition(400);
            }, 1000);
        }
    }
    function setTransition1(duration) {
        if (!swiper1.params.scrollbar.el || !swiper1.scrollbar.el) return;
        swiper1.scrollbar.$dragEl.transition(duration);
    }
    function updateSize1() {
        if (!swiper1.params.scrollbar.el || !swiper1.scrollbar.el) return;
        const { scrollbar  } = swiper1;
        const { $dragEl , $el  } = scrollbar;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        trackSize = swiper1.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        divider = swiper1.size / (swiper1.virtualSize + swiper1.params.slidesOffsetBefore - (swiper1.params.centeredSlides ? swiper1.snapGrid[0] : 0));
        if (swiper1.params.scrollbar.dragSize === 'auto') dragSize = trackSize * divider;
        else dragSize = parseInt(swiper1.params.scrollbar.dragSize, 10);
        if (swiper1.isHorizontal()) $dragEl[0].style.width = `${dragSize}px`;
        else $dragEl[0].style.height = `${dragSize}px`;
        if (divider >= 1) $el[0].style.display = 'none';
        else $el[0].style.display = '';
        if (swiper1.params.scrollbar.hide) $el[0].style.opacity = 0;
        if (swiper1.params.watchOverflow && swiper1.enabled) scrollbar.$el[swiper1.isLocked ? 'addClass' : 'removeClass'](swiper1.params.scrollbar.lockClass);
    }
    function getPointerPosition(e) {
        if (swiper1.isHorizontal()) return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
    }
    function setDragPosition(e) {
        const { scrollbar , rtlTranslate: rtl  } = swiper1;
        const { $el  } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - $el.offset()[swiper1.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) positionRatio = 1 - positionRatio;
        const position = swiper1.minTranslate() + (swiper1.maxTranslate() - swiper1.minTranslate()) * positionRatio;
        swiper1.updateProgress(position);
        swiper1.setTranslate(position);
        swiper1.updateActiveIndex();
        swiper1.updateSlidesClasses();
    }
    function onDragStart(e) {
        const params1 = swiper1.params.scrollbar;
        const { scrollbar , $wrapperEl  } = swiper1;
        const { $el , $dragEl  } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper1.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        setDragPosition(e);
        clearTimeout(dragTimeout);
        $el.transition(0);
        if (params1.hide) $el.css('opacity', 1);
        if (swiper1.params.cssMode) swiper1.$wrapperEl.css('scroll-snap-type', 'none');
        emit('scrollbarDragStart', e);
    }
    function onDragMove(e) {
        const { scrollbar , $wrapperEl  } = swiper1;
        const { $el , $dragEl  } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        emit('scrollbarDragMove', e);
    }
    function onDragEnd(e) {
        const params1 = swiper1.params.scrollbar;
        const { scrollbar , $wrapperEl  } = swiper1;
        const { $el  } = scrollbar;
        if (!isTouched) return;
        isTouched = false;
        if (swiper1.params.cssMode) {
            swiper1.$wrapperEl.css('scroll-snap-type', '');
            $wrapperEl.transition('');
        }
        if (params1.hide) {
            clearTimeout(dragTimeout);
            dragTimeout = nextTick(()=>{
                $el.css('opacity', 0);
                $el.transition(400);
            }, 1000);
        }
        emit('scrollbarDragEnd', e);
        if (params1.snapOnRelease) swiper1.slideToClosest();
    }
    function events1(method) {
        const { scrollbar , touchEventsTouch , touchEventsDesktop , params: params1 , support: support1  } = swiper1;
        const $el = scrollbar.$el;
        const target = $el[0];
        const activeListener = support1.passiveListener && params1.passiveListeners ? {
            passive: false,
            capture: false
        } : false;
        const passiveListener = support1.passiveListener && params1.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
        if (!support1.touch) {
            target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
            document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
            document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
        } else {
            target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
            target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
            target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
        }
    }
    function enableDraggable() {
        if (!swiper1.params.scrollbar.el) return;
        events1('on');
    }
    function disableDraggable() {
        if (!swiper1.params.scrollbar.el) return;
        events1('off');
    }
    function init() {
        const { scrollbar , $el: $swiperEl  } = swiper1;
        swiper1.params.scrollbar = createElementIfNotDefined(swiper1, swiper1.originalParams.scrollbar, swiper1.params.scrollbar, {
            el: 'swiper-scrollbar'
        });
        const params1 = swiper1.params.scrollbar;
        if (!params1.el) return;
        let $el = $(params1.el);
        if (swiper1.params.uniqueNavElements && typeof params1.el === 'string' && $el.length > 1 && $swiperEl.find(params1.el).length === 1) $el = $swiperEl.find(params1.el);
        let $dragEl = $el.find(`.${swiper1.params.scrollbar.dragClass}`);
        if ($dragEl.length === 0) {
            $dragEl = $(`<div class="${swiper1.params.scrollbar.dragClass}"></div>`);
            $el.append($dragEl);
        }
        Object.assign(scrollbar, {
            $el,
            el: $el[0],
            $dragEl,
            dragEl: $dragEl[0]
        });
        if (params1.draggable) enableDraggable();
        if ($el) $el[swiper1.enabled ? 'removeClass' : 'addClass'](swiper1.params.scrollbar.lockClass);
    }
    function destroy() {
        disableDraggable();
    }
    on1('init', ()=>{
        init();
        updateSize1();
        setTranslate1();
    });
    on1('update resize observerUpdate lock unlock', ()=>{
        updateSize1();
    });
    on1('setTranslate', ()=>{
        setTranslate1();
    });
    on1('setTransition', (_s, duration)=>{
        setTransition1(duration);
    });
    on1('enable disable', ()=>{
        const { $el  } = swiper1.scrollbar;
        if ($el) $el[swiper1.enabled ? 'removeClass' : 'addClass'](swiper1.params.scrollbar.lockClass);
    });
    on1('destroy', ()=>{
        destroy();
    });
    Object.assign(swiper1.scrollbar, {
        updateSize: updateSize1,
        setTranslate: setTranslate1,
        init,
        destroy
    });
}
function Parallax({ swiper: swiper1 , extendParams , on: on1  }) {
    extendParams({
        parallax: {
            enabled: false
        }
    });
    const setTransform = (el2, progress)=>{
        const { rtl  } = swiper1;
        const $el = $(el2);
        const rtlFactor = rtl ? -1 : 1;
        const p = $el.attr('data-swiper-parallax') || '0';
        let x = $el.attr('data-swiper-parallax-x');
        let y = $el.attr('data-swiper-parallax-y');
        const scale = $el.attr('data-swiper-parallax-scale');
        const opacity = $el.attr('data-swiper-parallax-opacity');
        if (x || y) {
            x = x || '0';
            y = y || '0';
        } else if (swiper1.isHorizontal()) {
            x = p;
            y = '0';
        } else {
            y = p;
            x = '0';
        }
        if (x.indexOf('%') >= 0) x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        else x = `${x * progress * rtlFactor}px`;
        if (y.indexOf('%') >= 0) y = `${parseInt(y, 10) * progress}%`;
        else y = `${y * progress}px`;
        if (typeof opacity !== 'undefined' && opacity !== null) {
            const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
            $el[0].style.opacity = currentOpacity;
        }
        if (typeof scale === 'undefined' || scale === null) $el.transform(`translate3d(${x}, ${y}, 0px)`);
        else {
            const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
            $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
        }
    };
    const setTranslate1 = ()=>{
        const { $el , slides , progress , snapGrid  } = swiper1;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((el2)=>{
            setTransform(el2, progress);
        });
        slides.each((slideEl, slideIndex)=>{
            let slideProgress = slideEl.progress;
            if (swiper1.params.slidesPerGroup > 1 && swiper1.params.slidesPerView !== 'auto') slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((el2)=>{
                setTransform(el2, slideProgress);
            });
        });
    };
    const setTransition1 = (duration = swiper1.params.speed)=>{
        const { $el  } = swiper1;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((parallaxEl)=>{
            const $parallaxEl = $(parallaxEl);
            let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            $parallaxEl.transition(parallaxDuration);
        });
    };
    on1('beforeInit', ()=>{
        if (!swiper1.params.parallax.enabled) return;
        swiper1.params.watchSlidesProgress = true;
        swiper1.originalParams.watchSlidesProgress = true;
    });
    on1('init', ()=>{
        if (!swiper1.params.parallax.enabled) return;
        setTranslate1();
    });
    on1('setTranslate', ()=>{
        if (!swiper1.params.parallax.enabled) return;
        setTranslate1();
    });
    on1('setTransition', (_swiper, duration)=>{
        if (!swiper1.params.parallax.enabled) return;
        setTransition1(duration);
    });
}
function Zoom({ swiper: swiper1 , extendParams , on: on1 , emit  }) {
    const window = getWindow();
    extendParams({
        zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed'
        }
    });
    swiper1.zoom = {
        enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let gesturesEnabled;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const gesture = {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
    };
    const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {
        },
        touchesCurrent: {
        }
    };
    const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
    };
    let scale = 1;
    Object.defineProperty(swiper1.zoom, 'scale', {
        get () {
            return scale;
        },
        set (value) {
            if (scale !== value) {
                const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                emit('zoomChange', value, imageEl, slideEl);
            }
            scale = value;
        }
    });
    function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const x1 = e.targetTouches[0].pageX;
        const y1 = e.targetTouches[0].pageY;
        const x2 = e.targetTouches[1].pageX;
        const y2 = e.targetTouches[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    } // Events
    function onGestureStart(e) {
        const support1 = swiper1.support;
        const params1 = swiper1.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!support1.gestures) {
            if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) return;
            fakeGestureTouched = true;
            gesture.scaleStart = getDistanceBetweenTouches(e);
        }
        if (!gesture.$slideEl || !gesture.$slideEl.length) {
            gesture.$slideEl = $(e.target).closest(`.${swiper1.params.slideClass}`);
            if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper1.slides.eq(swiper1.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params1.containerClass}`).eq(0).find('img, svg, canvas, picture, .swiper-zoom-target');
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params1.containerClass}`);
            gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params1.maxRatio;
            if (gesture.$imageWrapEl.length === 0) {
                gesture.$imageEl = undefined;
                return;
            }
        }
        if (gesture.$imageEl) gesture.$imageEl.transition(0);
        isScaling = true;
    }
    function onGestureChange(e) {
        const support1 = swiper1.support;
        const params1 = swiper1.params.zoom;
        const zoom = swiper1.zoom;
        if (!support1.gestures) {
            if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) return;
            fakeGestureMoved = true;
            gesture.scaleMove = getDistanceBetweenTouches(e);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            if (e.type === 'gesturechange') onGestureStart(e);
            return;
        }
        if (support1.gestures) zoom.scale = e.scale * currentScale;
        else zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        if (zoom.scale < params1.minRatio) zoom.scale = params1.minRatio + 1 - (params1.minRatio - zoom.scale + 1) ** 0.5;
        gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function onGestureEnd(e) {
        const device = swiper1.device;
        const support1 = swiper1.support;
        const params1 = swiper1.params.zoom;
        const zoom = swiper1.zoom;
        if (!support1.gestures) {
            if (!fakeGestureTouched || !fakeGestureMoved) return;
            if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) return;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params1.minRatio);
        gesture.$imageEl.transition(swiper1.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
    }
    function onTouchStart1(e) {
        const device = swiper1.device;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    }
    function onTouchMove1(e) {
        const zoom = swiper1.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper1.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;
        if (!image.isMoved) {
            image.width = gesture.$imageEl[0].offsetWidth;
            image.height = gesture.$imageEl[0].offsetHeight;
            image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
            image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
            gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
            gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
            gesture.$imageWrapEl.transition(0);
        } // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (!image.isMoved && !isScaling) {
            if (swiper1.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                image.isTouched = false;
                return;
            }
            if (!swiper1.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                image.isTouched = false;
                return;
            }
        }
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
        if (image.currentX < image.minX) image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        if (image.currentY < image.minY) image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
         // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTouchEnd1() {
        const zoom = swiper1.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY; // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTransitionEnd() {
        const zoom = swiper1.zoom;
        if (gesture.$slideEl && swiper1.previousIndex !== swiper1.activeIndex) {
            if (gesture.$imageEl) gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
            if (gesture.$imageWrapEl) gesture.$imageWrapEl.transform('translate3d(0,0,0)');
            zoom.scale = 1;
            currentScale = 1;
            gesture.$slideEl = undefined;
            gesture.$imageEl = undefined;
            gesture.$imageWrapEl = undefined;
        }
    }
    function zoomIn(e) {
        const zoom = swiper1.zoom;
        const params1 = swiper1.params.zoom;
        if (!gesture.$slideEl) {
            if (e && e.target) gesture.$slideEl = $(e.target).closest(`.${swiper1.params.slideClass}`);
            if (!gesture.$slideEl) {
                if (swiper1.params.virtual && swiper1.params.virtual.enabled && swiper1.virtual) gesture.$slideEl = swiper1.$wrapperEl.children(`.${swiper1.params.slideActiveClass}`);
                else gesture.$slideEl = swiper1.slides.eq(swiper1.activeIndex);
            }
            gesture.$imageEl = gesture.$slideEl.find(`.${params1.containerClass}`).eq(0).find('img, svg, canvas, picture, .swiper-zoom-target');
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params1.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper1.params.cssMode) {
            swiper1.wrapperEl.style.overflow = 'hidden';
            swiper1.wrapperEl.style.touchAction = 'none';
        }
        gesture.$slideEl.addClass(`${params1.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        if (typeof image.touchesStart.x === 'undefined' && e) {
            touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
            touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params1.maxRatio;
        currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params1.maxRatio;
        if (e) {
            slideWidth = gesture.$slideEl[0].offsetWidth;
            slideHeight = gesture.$slideEl[0].offsetHeight;
            offsetX = gesture.$slideEl.offset().left + window.scrollX;
            offsetY = gesture.$slideEl.offset().top + window.scrollY;
            diffX = offsetX + slideWidth / 2 - touchX;
            diffY = offsetY + slideHeight / 2 - touchY;
            imageWidth = gesture.$imageEl[0].offsetWidth;
            imageHeight = gesture.$imageEl[0].offsetHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            translateX = diffX * zoom.scale;
            translateY = diffY * zoom.scale;
            if (translateX < translateMinX) translateX = translateMinX;
            if (translateX > translateMaxX) translateX = translateMaxX;
            if (translateY < translateMinY) translateY = translateMinY;
            if (translateY > translateMaxY) translateY = translateMaxY;
        } else {
            translateX = 0;
            translateY = 0;
        }
        gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
        gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function zoomOut() {
        const zoom = swiper1.zoom;
        const params1 = swiper1.params.zoom;
        if (!gesture.$slideEl) {
            if (swiper1.params.virtual && swiper1.params.virtual.enabled && swiper1.virtual) gesture.$slideEl = swiper1.$wrapperEl.children(`.${swiper1.params.slideActiveClass}`);
            else gesture.$slideEl = swiper1.slides.eq(swiper1.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params1.containerClass}`).eq(0).find('img, svg, canvas, picture, .swiper-zoom-target');
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params1.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper1.params.cssMode) {
            swiper1.wrapperEl.style.overflow = '';
            swiper1.wrapperEl.style.touchAction = '';
        }
        zoom.scale = 1;
        currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass(`${params1.zoomedSlideClass}`);
        gesture.$slideEl = undefined;
    } // Toggle Zoom
    function zoomToggle(e) {
        const zoom = swiper1.zoom;
        if (zoom.scale && zoom.scale !== 1) // Zoom Out
        zoomOut();
        else // Zoom In
        zoomIn(e);
    }
    function getListeners() {
        const support1 = swiper1.support;
        const passiveListener = swiper1.touchEvents.start === 'touchstart' && support1.passiveListener && swiper1.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        const activeListenerWithCapture = support1.passiveListener ? {
            passive: false,
            capture: true
        } : true;
        return {
            passiveListener,
            activeListenerWithCapture
        };
    }
    function getSlideSelector() {
        return `.${swiper1.params.slideClass}`;
    }
    function toggleGestures(method) {
        const { passiveListener  } = getListeners();
        const slideSelector = getSlideSelector();
        swiper1.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
        swiper1.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
        swiper1.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
    }
    function enableGestures() {
        if (gesturesEnabled) return;
        gesturesEnabled = true;
        toggleGestures('on');
    }
    function disableGestures() {
        if (!gesturesEnabled) return;
        gesturesEnabled = false;
        toggleGestures('off');
    } // Attach/Detach Events
    function enable() {
        const zoom = swiper1.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const support1 = swiper1.support;
        const { passiveListener , activeListenerWithCapture  } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support1.gestures) {
            swiper1.$wrapperEl.on(swiper1.touchEvents.start, enableGestures, passiveListener);
            swiper1.$wrapperEl.on(swiper1.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper1.touchEvents.start === 'touchstart') {
            swiper1.$wrapperEl.on(swiper1.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper1.$wrapperEl.on(swiper1.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper1.$wrapperEl.on(swiper1.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper1.touchEvents.cancel) swiper1.$wrapperEl.on(swiper1.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper1.$wrapperEl.on(swiper1.touchEvents.move, `.${swiper1.params.zoom.containerClass}`, onTouchMove1, activeListenerWithCapture);
    }
    function disable() {
        const zoom = swiper1.zoom;
        if (!zoom.enabled) return;
        const support1 = swiper1.support;
        zoom.enabled = false;
        const { passiveListener , activeListenerWithCapture  } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support1.gestures) {
            swiper1.$wrapperEl.off(swiper1.touchEvents.start, enableGestures, passiveListener);
            swiper1.$wrapperEl.off(swiper1.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper1.touchEvents.start === 'touchstart') {
            swiper1.$wrapperEl.off(swiper1.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper1.$wrapperEl.off(swiper1.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper1.$wrapperEl.off(swiper1.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper1.touchEvents.cancel) swiper1.$wrapperEl.off(swiper1.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper1.$wrapperEl.off(swiper1.touchEvents.move, `.${swiper1.params.zoom.containerClass}`, onTouchMove1, activeListenerWithCapture);
    }
    on1('init', ()=>{
        if (swiper1.params.zoom.enabled) enable();
    });
    on1('destroy', ()=>{
        disable();
    });
    on1('touchStart', (_s, e)=>{
        if (!swiper1.zoom.enabled) return;
        onTouchStart1(e);
    });
    on1('touchEnd', (_s, e)=>{
        if (!swiper1.zoom.enabled) return;
        onTouchEnd1();
    });
    on1('doubleTap', (_s, e)=>{
        if (!swiper1.animating && swiper1.params.zoom.enabled && swiper1.zoom.enabled && swiper1.params.zoom.toggle) zoomToggle(e);
    });
    on1('transitionEnd', ()=>{
        if (swiper1.zoom.enabled && swiper1.params.zoom.enabled) onTransitionEnd();
    });
    on1('slideChange', ()=>{
        if (swiper1.zoom.enabled && swiper1.params.zoom.enabled && swiper1.params.cssMode) onTransitionEnd();
    });
    Object.assign(swiper1.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
    });
}
function Lazy({ swiper: swiper1 , extendParams , on: on1 , emit  }) {
    extendParams({
        lazy: {
            checkInView: false,
            enabled: false,
            loadPrevNext: false,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: false,
            scrollingElement: '',
            elementClass: 'swiper-lazy',
            loadingClass: 'swiper-lazy-loading',
            loadedClass: 'swiper-lazy-loaded',
            preloaderClass: 'swiper-lazy-preloader'
        }
    });
    swiper1.lazy = {
    };
    let scrollHandlerAttached = false;
    let initialImageLoaded = false;
    function loadInSlide(index1, loadInDuplicate = true) {
        const params1 = swiper1.params.lazy;
        if (typeof index1 === 'undefined') return;
        if (swiper1.slides.length === 0) return;
        const isVirtual = swiper1.virtual && swiper1.params.virtual.enabled;
        const $slideEl = isVirtual ? swiper1.$wrapperEl.children(`.${swiper1.params.slideClass}[data-swiper-slide-index="${index1}"]`) : swiper1.slides.eq(index1);
        const $images = $slideEl.find(`.${params1.elementClass}:not(.${params1.loadedClass}):not(.${params1.loadingClass})`);
        if ($slideEl.hasClass(params1.elementClass) && !$slideEl.hasClass(params1.loadedClass) && !$slideEl.hasClass(params1.loadingClass)) $images.push($slideEl[0]);
        if ($images.length === 0) return;
        $images.each((imageEl)=>{
            const $imageEl = $(imageEl);
            $imageEl.addClass(params1.loadingClass);
            const background = $imageEl.attr('data-background');
            const src = $imageEl.attr('data-src');
            const srcset = $imageEl.attr('data-srcset');
            const sizes = $imageEl.attr('data-sizes');
            const $pictureEl = $imageEl.parent('picture');
            swiper1.loadImage($imageEl[0], src || background, srcset, sizes, false, ()=>{
                if (typeof swiper1 === 'undefined' || swiper1 === null || !swiper1 || swiper1 && !swiper1.params || swiper1.destroyed) return;
                if (background) {
                    $imageEl.css('background-image', `url("${background}")`);
                    $imageEl.removeAttr('data-background');
                } else {
                    if (srcset) {
                        $imageEl.attr('srcset', srcset);
                        $imageEl.removeAttr('data-srcset');
                    }
                    if (sizes) {
                        $imageEl.attr('sizes', sizes);
                        $imageEl.removeAttr('data-sizes');
                    }
                    if ($pictureEl.length) $pictureEl.children('source').each((sourceEl)=>{
                        const $source = $(sourceEl);
                        if ($source.attr('data-srcset')) {
                            $source.attr('srcset', $source.attr('data-srcset'));
                            $source.removeAttr('data-srcset');
                        }
                    });
                    if (src) {
                        $imageEl.attr('src', src);
                        $imageEl.removeAttr('data-src');
                    }
                }
                $imageEl.addClass(params1.loadedClass).removeClass(params1.loadingClass);
                $slideEl.find(`.${params1.preloaderClass}`).remove();
                if (swiper1.params.loop && loadInDuplicate) {
                    const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                    if ($slideEl.hasClass(swiper1.params.slideDuplicateClass)) {
                        const originalSlide = swiper1.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper1.params.slideDuplicateClass})`);
                        loadInSlide(originalSlide.index(), false);
                    } else {
                        const duplicatedSlide = swiper1.$wrapperEl.children(`.${swiper1.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                        loadInSlide(duplicatedSlide.index(), false);
                    }
                }
                emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                if (swiper1.params.autoHeight) swiper1.updateAutoHeight();
            });
            emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
    }
    function load() {
        const { $wrapperEl , params: swiperParams1 , slides , activeIndex  } = swiper1;
        const isVirtual = swiper1.virtual && swiperParams1.virtual.enabled;
        const params1 = swiperParams1.lazy;
        let slidesPerView = swiperParams1.slidesPerView;
        if (slidesPerView === 'auto') slidesPerView = 0;
        function slideExist(index1) {
            if (isVirtual) {
                if ($wrapperEl.children(`.${swiperParams1.slideClass}[data-swiper-slide-index="${index1}"]`).length) return true;
            } else if (slides[index1]) return true;
            return false;
        }
        function slideIndex(slideEl) {
            if (isVirtual) return $(slideEl).attr('data-swiper-slide-index');
            return $(slideEl).index();
        }
        if (!initialImageLoaded) initialImageLoaded = true;
        if (swiper1.params.watchSlidesProgress) $wrapperEl.children(`.${swiperParams1.slideVisibleClass}`).each((slideEl)=>{
            const index1 = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
            loadInSlide(index1);
        });
        else if (slidesPerView > 1) {
            for(let i = activeIndex; i < activeIndex + slidesPerView; i += 1)if (slideExist(i)) loadInSlide(i);
        } else loadInSlide(activeIndex);
        if (params1.loadPrevNext) {
            if (slidesPerView > 1 || params1.loadPrevNextAmount && params1.loadPrevNextAmount > 1) {
                const amount = params1.loadPrevNextAmount;
                const spv = slidesPerView;
                const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
                for(let i = activeIndex + slidesPerView; i < maxIndex; i += 1)if (slideExist(i)) loadInSlide(i);
                 // Prev Slides
                for(let i1 = minIndex; i1 < activeIndex; i1 += 1)if (slideExist(i1)) loadInSlide(i1);
            } else {
                const nextSlide = $wrapperEl.children(`.${swiperParams1.slideNextClass}`);
                if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                const prevSlide = $wrapperEl.children(`.${swiperParams1.slidePrevClass}`);
                if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
            }
        }
    }
    function checkInViewOnLoad() {
        const window = getWindow();
        if (!swiper1 || swiper1.destroyed) return;
        const $scrollElement = swiper1.params.lazy.scrollingElement ? $(swiper1.params.lazy.scrollingElement) : $(window);
        const isWindow = $scrollElement[0] === window;
        const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
        const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
        const swiperOffset = swiper1.$el.offset();
        const { rtlTranslate: rtl  } = swiper1;
        let inView = false;
        if (rtl) swiperOffset.left -= swiper1.$el[0].scrollLeft;
        const swiperCoord = [
            [
                swiperOffset.left,
                swiperOffset.top
            ],
            [
                swiperOffset.left + swiper1.width,
                swiperOffset.top
            ],
            [
                swiperOffset.left,
                swiperOffset.top + swiper1.height
            ],
            [
                swiperOffset.left + swiper1.width,
                swiperOffset.top + swiper1.height
            ]
        ];
        for(let i = 0; i < swiperCoord.length; i += 1){
            const point = swiperCoord[i];
            if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                inView = true;
            }
        }
        const passiveListener = swiper1.touchEvents.start === 'touchstart' && swiper1.support.passiveListener && swiper1.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (inView) {
            load();
            $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
        } else if (!scrollHandlerAttached) {
            scrollHandlerAttached = true;
            $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
        }
    }
    on1('beforeInit', ()=>{
        if (swiper1.params.lazy.enabled && swiper1.params.preloadImages) swiper1.params.preloadImages = false;
    });
    on1('init', ()=>{
        if (swiper1.params.lazy.enabled) {
            if (swiper1.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on1('scroll', ()=>{
        if (swiper1.params.freeMode && swiper1.params.freeMode.enabled && !swiper1.params.freeMode.sticky) load();
    });
    on1('scrollbarDragMove resize _freeModeNoMomentumRelease', ()=>{
        if (swiper1.params.lazy.enabled) {
            if (swiper1.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on1('transitionStart', ()=>{
        if (swiper1.params.lazy.enabled) {
            if (swiper1.params.lazy.loadOnTransitionStart || !swiper1.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
                if (swiper1.params.lazy.checkInView) checkInViewOnLoad();
                else load();
            }
        }
    });
    on1('transitionEnd', ()=>{
        if (swiper1.params.lazy.enabled && !swiper1.params.lazy.loadOnTransitionStart) {
            if (swiper1.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on1('slideChange', ()=>{
        const { lazy , cssMode , watchSlidesProgress , touchReleaseOnEdges , resistanceRatio  } = swiper1.params;
        if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) load();
    });
    Object.assign(swiper1.lazy, {
        load,
        loadInSlide
    });
}
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */ function Controller({ swiper: swiper1 , extendParams , on: on1  }) {
    extendParams({
        controller: {
            control: undefined,
            inverse: false,
            by: 'slide' // or 'container'
        }
    });
    swiper1.controller = {
        control: undefined
    };
    function LinearSpline(x, y) {
        const binarySearch = function search() {
            let maxIndex;
            let minIndex;
            let guess;
            return (array, val)=>{
                minIndex = -1;
                maxIndex = array.length;
                while(maxIndex - minIndex > 1){
                    guess = maxIndex + minIndex >> 1;
                    if (array[guess] <= val) minIndex = guess;
                    else maxIndex = guess;
                }
                return maxIndex;
            };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        let i1;
        let i3;
        this.interpolate = function interpolate(x2) {
            if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
    } // xxx: for now i will just save one spline function to to
    function getInterpolateFunction(c) {
        if (!swiper1.controller.spline) swiper1.controller.spline = swiper1.params.loop ? new LinearSpline(swiper1.slidesGrid, c.slidesGrid) : new LinearSpline(swiper1.snapGrid, c.snapGrid);
    }
    function setTranslate1(_t, byController) {
        const controlled = swiper1.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper1 = swiper1.constructor;
        function setControlledTranslate(c) {
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            const translate1 = swiper1.rtlTranslate ? -swiper1.translate : swiper1.translate;
            if (swiper1.params.controller.by === 'slide') {
                getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper1.controller.spline.interpolate(-translate1);
            }
            if (!controlledTranslate || swiper1.params.controller.by === 'container') {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper1.maxTranslate() - swiper1.minTranslate());
                controlledTranslate = (translate1 - swiper1.minTranslate()) * multiplier + c.minTranslate();
            }
            if (swiper1.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper1);
            c.updateActiveIndex();
            c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
            for(let i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper1) setControlledTranslate(controlled[i]);
        } else if (controlled instanceof Swiper1 && byController !== controlled) setControlledTranslate(controlled);
    }
    function setTransition1(duration, byController) {
        const Swiper1 = swiper1.constructor;
        const controlled = swiper1.controller.control;
        let i;
        function setControlledTransition(c) {
            c.setTransition(duration, swiper1);
            if (duration !== 0) {
                c.transitionStart();
                if (c.params.autoHeight) nextTick(()=>{
                    c.updateAutoHeight();
                });
                c.$wrapperEl.transitionEnd(()=>{
                    if (!controlled) return;
                    if (c.params.loop && swiper1.params.controller.by === 'slide') c.loopFix();
                    c.transitionEnd();
                });
            }
        }
        if (Array.isArray(controlled)) {
            for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper1) setControlledTransition(controlled[i]);
        } else if (controlled instanceof Swiper1 && byController !== controlled) setControlledTransition(controlled);
    }
    function removeSpline() {
        if (!swiper1.controller.control) return;
        if (swiper1.controller.spline) {
            swiper1.controller.spline = undefined;
            delete swiper1.controller.spline;
        }
    }
    on1('beforeInit', ()=>{
        swiper1.controller.control = swiper1.params.controller.control;
    });
    on1('update', ()=>{
        removeSpline();
    });
    on1('resize', ()=>{
        removeSpline();
    });
    on1('observerUpdate', ()=>{
        removeSpline();
    });
    on1('setTranslate', (_s, translate1, byController)=>{
        if (!swiper1.controller.control) return;
        swiper1.controller.setTranslate(translate1, byController);
    });
    on1('setTransition', (_s, duration, byController)=>{
        if (!swiper1.controller.control) return;
        swiper1.controller.setTransition(duration, byController);
    });
    Object.assign(swiper1.controller, {
        setTranslate: setTranslate1,
        setTransition: setTransition1
    });
}
function A11y({ swiper: swiper1 , extendParams , on: on1  }) {
    extendParams({
        a11y: {
            enabled: true,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            slideLabelMessage: '{{index}} / {{slidesLength}}',
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: 'group'
        }
    });
    let liveRegion = null;
    function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
    }
    function getRandomNumber(size = 16) {
        const randomChar = ()=>Math.round(16 * Math.random()).toString(16)
        ;
        return 'x'.repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
    }
    function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
    }
    function addElRole($el, role) {
        $el.attr('role', role);
    }
    function addElRoleDescription($el, description) {
        $el.attr('aria-roledescription', description);
    }
    function addElControls($el, controls) {
        $el.attr('aria-controls', controls);
    }
    function addElLabel($el, label) {
        $el.attr('aria-label', label);
    }
    function addElId($el, id) {
        $el.attr('id', id);
    }
    function addElLive($el, live) {
        $el.attr('aria-live', live);
    }
    function disableEl($el) {
        $el.attr('aria-disabled', true);
    }
    function enableEl($el) {
        $el.attr('aria-disabled', false);
    }
    function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params1 = swiper1.params.a11y;
        const $targetEl = $(e.target);
        if (swiper1.navigation && swiper1.navigation.$nextEl && $targetEl.is(swiper1.navigation.$nextEl)) {
            if (!(swiper1.isEnd && !swiper1.params.loop)) swiper1.slideNext();
            if (swiper1.isEnd) notify(params1.lastSlideMessage);
            else notify(params1.nextSlideMessage);
        }
        if (swiper1.navigation && swiper1.navigation.$prevEl && $targetEl.is(swiper1.navigation.$prevEl)) {
            if (!(swiper1.isBeginning && !swiper1.params.loop)) swiper1.slidePrev();
            if (swiper1.isBeginning) notify(params1.firstSlideMessage);
            else notify(params1.prevSlideMessage);
        }
        if (swiper1.pagination && $targetEl.is(classesToSelector(swiper1.params.pagination.bulletClass))) $targetEl[0].click();
    }
    function updateNavigation() {
        if (swiper1.params.loop || !swiper1.navigation) return;
        const { $nextEl , $prevEl  } = swiper1.navigation;
        if ($prevEl && $prevEl.length > 0) {
            if (swiper1.isBeginning) {
                disableEl($prevEl);
                makeElNotFocusable($prevEl);
            } else {
                enableEl($prevEl);
                makeElFocusable($prevEl);
            }
        }
        if ($nextEl && $nextEl.length > 0) {
            if (swiper1.isEnd) {
                disableEl($nextEl);
                makeElNotFocusable($nextEl);
            } else {
                enableEl($nextEl);
                makeElFocusable($nextEl);
            }
        }
    }
    function hasPagination() {
        return swiper1.pagination && swiper1.params.pagination.clickable && swiper1.pagination.bullets && swiper1.pagination.bullets.length;
    }
    function updatePagination() {
        const params1 = swiper1.params.a11y;
        if (hasPagination()) swiper1.pagination.bullets.each((bulletEl)=>{
            const $bulletEl = $(bulletEl);
            makeElFocusable($bulletEl);
            if (!swiper1.params.pagination.renderBullet) {
                addElRole($bulletEl, 'button');
                addElLabel($bulletEl, params1.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
            }
        });
    }
    const initNavEl = ($el, wrapperId, message)=>{
        makeElFocusable($el);
        if ($el[0].tagName !== 'BUTTON') {
            addElRole($el, 'button');
            $el.on('keydown', onEnterOrSpaceKey);
        }
        addElLabel($el, message);
        addElControls($el, wrapperId);
    };
    function init() {
        const params1 = swiper1.params.a11y;
        swiper1.$el.append(liveRegion); // Container
        const $containerEl = swiper1.$el;
        if (params1.containerRoleDescriptionMessage) addElRoleDescription($containerEl, params1.containerRoleDescriptionMessage);
        if (params1.containerMessage) addElLabel($containerEl, params1.containerMessage);
         // Wrapper
        const $wrapperEl = swiper1.$wrapperEl;
        const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper1.params.autoplay && swiper1.params.autoplay.enabled ? 'off' : 'polite';
        addElId($wrapperEl, wrapperId);
        addElLive($wrapperEl, live); // Slide
        if (params1.itemRoleDescriptionMessage) addElRoleDescription($(swiper1.slides), params1.itemRoleDescriptionMessage);
        addElRole($(swiper1.slides), params1.slideRole);
        const slidesLength = swiper1.params.loop ? swiper1.slides.filter((el2)=>!el2.classList.contains(swiper1.params.slideDuplicateClass)
        ).length : swiper1.slides.length;
        swiper1.slides.each((slideEl, index1)=>{
            const $slideEl = $(slideEl);
            const slideIndex = swiper1.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index1;
            const ariaLabelMessage = params1.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            addElLabel($slideEl, ariaLabelMessage);
        }); // Navigation
        let $nextEl;
        let $prevEl;
        if (swiper1.navigation && swiper1.navigation.$nextEl) $nextEl = swiper1.navigation.$nextEl;
        if (swiper1.navigation && swiper1.navigation.$prevEl) $prevEl = swiper1.navigation.$prevEl;
        if ($nextEl && $nextEl.length) initNavEl($nextEl, wrapperId, params1.nextSlideMessage);
        if ($prevEl && $prevEl.length) initNavEl($prevEl, wrapperId, params1.prevSlideMessage);
         // Pagination
        if (hasPagination()) swiper1.pagination.$el.on('keydown', classesToSelector(swiper1.params.pagination.bulletClass), onEnterOrSpaceKey);
    }
    function destroy() {
        if (liveRegion && liveRegion.length > 0) liveRegion.remove();
        let $nextEl;
        let $prevEl;
        if (swiper1.navigation && swiper1.navigation.$nextEl) $nextEl = swiper1.navigation.$nextEl;
        if (swiper1.navigation && swiper1.navigation.$prevEl) $prevEl = swiper1.navigation.$prevEl;
        if ($nextEl) $nextEl.off('keydown', onEnterOrSpaceKey);
        if ($prevEl) $prevEl.off('keydown', onEnterOrSpaceKey);
         // Pagination
        if (hasPagination()) swiper1.pagination.$el.off('keydown', classesToSelector(swiper1.params.pagination.bulletClass), onEnterOrSpaceKey);
    }
    on1('beforeInit', ()=>{
        liveRegion = $(`<span class="${swiper1.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
    });
    on1('afterInit', ()=>{
        if (!swiper1.params.a11y.enabled) return;
        init();
        updateNavigation();
    });
    on1('toEdge', ()=>{
        if (!swiper1.params.a11y.enabled) return;
        updateNavigation();
    });
    on1('fromEdge', ()=>{
        if (!swiper1.params.a11y.enabled) return;
        updateNavigation();
    });
    on1('paginationUpdate', ()=>{
        if (!swiper1.params.a11y.enabled) return;
        updatePagination();
    });
    on1('destroy', ()=>{
        if (!swiper1.params.a11y.enabled) return;
        destroy();
    });
}
function History1({ swiper: swiper1 , extendParams , on: on1  }) {
    extendParams({
        history: {
            enabled: false,
            root: '',
            replaceState: false,
            key: 'slides'
        }
    });
    let initialized = false;
    let paths = {
    };
    const slugify = (text1)=>{
        return text1.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    };
    const getPathValues = (urlOverride)=>{
        const window = getWindow();
        let location;
        if (urlOverride) location = new URL(urlOverride);
        else location = window.location;
        const pathArray = location.pathname.slice(1).split('/').filter((part)=>part !== ''
        );
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
            key,
            value
        };
    };
    const setHistory = (key, index1)=>{
        const window = getWindow();
        if (!initialized || !swiper1.params.history.enabled) return;
        let location;
        if (swiper1.params.url) location = new URL(swiper1.params.url);
        else location = window.location;
        const slide1 = swiper1.slides.eq(index1);
        let value = slugify(slide1.attr('data-history'));
        if (swiper1.params.history.root.length > 0) {
            let root = swiper1.params.history.root;
            if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
            value = `${root}/${key}/${value}`;
        } else if (!location.pathname.includes(key)) value = `${key}/${value}`;
        const currentState = window.history.state;
        if (currentState && currentState.value === value) return;
        if (swiper1.params.history.replaceState) window.history.replaceState({
            value
        }, null, value);
        else window.history.pushState({
            value
        }, null, value);
    };
    const scrollToSlide = (speed, value, runCallbacks)=>{
        if (value) for(let i = 0, length = swiper1.slides.length; i < length; i += 1){
            const slide1 = swiper1.slides.eq(i);
            const slideHistory = slugify(slide1.attr('data-history'));
            if (slideHistory === value && !slide1.hasClass(swiper1.params.slideDuplicateClass)) {
                const index1 = slide1.index();
                swiper1.slideTo(index1, speed, runCallbacks);
            }
        }
        else swiper1.slideTo(0, speed, runCallbacks);
    };
    const setHistoryPopState = ()=>{
        paths = getPathValues(swiper1.params.url);
        scrollToSlide(swiper1.params.speed, swiper1.paths.value, false);
    };
    const init = ()=>{
        const window = getWindow();
        if (!swiper1.params.history) return;
        if (!window.history || !window.history.pushState) {
            swiper1.params.history.enabled = false;
            swiper1.params.hashNavigation.enabled = true;
            return;
        }
        initialized = true;
        paths = getPathValues(swiper1.params.url);
        if (!paths.key && !paths.value) return;
        scrollToSlide(0, paths.value, swiper1.params.runCallbacksOnInit);
        if (!swiper1.params.history.replaceState) window.addEventListener('popstate', setHistoryPopState);
    };
    const destroy = ()=>{
        const window = getWindow();
        if (!swiper1.params.history.replaceState) window.removeEventListener('popstate', setHistoryPopState);
    };
    on1('init', ()=>{
        if (swiper1.params.history.enabled) init();
    });
    on1('destroy', ()=>{
        if (swiper1.params.history.enabled) destroy();
    });
    on1('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) setHistory(swiper1.params.history.key, swiper1.activeIndex);
    });
    on1('slideChange', ()=>{
        if (initialized && swiper1.params.cssMode) setHistory(swiper1.params.history.key, swiper1.activeIndex);
    });
}
function HashNavigation({ swiper: swiper1 , extendParams , emit , on: on1  }) {
    let initialized = false;
    const document = getDocument();
    const window = getWindow();
    extendParams({
        hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false
        }
    });
    const onHashChange = ()=>{
        emit('hashChange');
        const newHash = document.location.hash.replace('#', '');
        const activeSlideHash = swiper1.slides.eq(swiper1.activeIndex).attr('data-hash');
        if (newHash !== activeSlideHash) {
            const newIndex = swiper1.$wrapperEl.children(`.${swiper1.params.slideClass}[data-hash="${newHash}"]`).index();
            if (typeof newIndex === 'undefined') return;
            swiper1.slideTo(newIndex);
        }
    };
    const setHash = ()=>{
        if (!initialized || !swiper1.params.hashNavigation.enabled) return;
        if (swiper1.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, null, `#${swiper1.slides.eq(swiper1.activeIndex).attr('data-hash')}` || '');
            emit('hashSet');
        } else {
            const slide1 = swiper1.slides.eq(swiper1.activeIndex);
            const hash = slide1.attr('data-hash') || slide1.attr('data-history');
            document.location.hash = hash || '';
            emit('hashSet');
        }
    };
    const init = ()=>{
        if (!swiper1.params.hashNavigation.enabled || swiper1.params.history && swiper1.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace('#', '');
        if (hash) {
            const speed = 0;
            for(let i = 0, length = swiper1.slides.length; i < length; i += 1){
                const slide1 = swiper1.slides.eq(i);
                const slideHash = slide1.attr('data-hash') || slide1.attr('data-history');
                if (slideHash === hash && !slide1.hasClass(swiper1.params.slideDuplicateClass)) {
                    const index1 = slide1.index();
                    swiper1.slideTo(index1, speed, swiper1.params.runCallbacksOnInit, true);
                }
            }
        }
        if (swiper1.params.hashNavigation.watchState) $(window).on('hashchange', onHashChange);
    };
    const destroy = ()=>{
        if (swiper1.params.hashNavigation.watchState) $(window).off('hashchange', onHashChange);
    };
    on1('init', ()=>{
        if (swiper1.params.hashNavigation.enabled) init();
    });
    on1('destroy', ()=>{
        if (swiper1.params.hashNavigation.enabled) destroy();
    });
    on1('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) setHash();
    });
    on1('slideChange', ()=>{
        if (initialized && swiper1.params.cssMode) setHash();
    });
}
/* eslint no-underscore-dangle: "off" */ function Autoplay({ swiper: swiper1 , extendParams , on: on1 , emit  }) {
    let timeout;
    swiper1.autoplay = {
        running: false,
        paused: false
    };
    extendParams({
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    });
    function run() {
        const $activeSlideEl = swiper1.slides.eq(swiper1.activeIndex);
        let delay = swiper1.params.autoplay.delay;
        if ($activeSlideEl.attr('data-swiper-autoplay')) delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper1.params.autoplay.delay;
        clearTimeout(timeout);
        timeout = nextTick(()=>{
            let autoplayResult;
            if (swiper1.params.autoplay.reverseDirection) {
                if (swiper1.params.loop) {
                    swiper1.loopFix();
                    autoplayResult = swiper1.slidePrev(swiper1.params.speed, true, true);
                    emit('autoplay');
                } else if (!swiper1.isBeginning) {
                    autoplayResult = swiper1.slidePrev(swiper1.params.speed, true, true);
                    emit('autoplay');
                } else if (!swiper1.params.autoplay.stopOnLastSlide) {
                    autoplayResult = swiper1.slideTo(swiper1.slides.length - 1, swiper1.params.speed, true, true);
                    emit('autoplay');
                } else stop();
            } else if (swiper1.params.loop) {
                swiper1.loopFix();
                autoplayResult = swiper1.slideNext(swiper1.params.speed, true, true);
                emit('autoplay');
            } else if (!swiper1.isEnd) {
                autoplayResult = swiper1.slideNext(swiper1.params.speed, true, true);
                emit('autoplay');
            } else if (!swiper1.params.autoplay.stopOnLastSlide) {
                autoplayResult = swiper1.slideTo(0, swiper1.params.speed, true, true);
                emit('autoplay');
            } else stop();
            if (swiper1.params.cssMode && swiper1.autoplay.running) run();
            else if (autoplayResult === false) run();
        }, delay);
    }
    function start() {
        if (typeof timeout !== 'undefined') return false;
        if (swiper1.autoplay.running) return false;
        swiper1.autoplay.running = true;
        emit('autoplayStart');
        run();
        return true;
    }
    function stop() {
        if (!swiper1.autoplay.running) return false;
        if (typeof timeout === 'undefined') return false;
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        swiper1.autoplay.running = false;
        emit('autoplayStop');
        return true;
    }
    function pause(speed) {
        if (!swiper1.autoplay.running) return;
        if (swiper1.autoplay.paused) return;
        if (timeout) clearTimeout(timeout);
        swiper1.autoplay.paused = true;
        if (speed === 0 || !swiper1.params.autoplay.waitForTransition) {
            swiper1.autoplay.paused = false;
            run();
        } else [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper1.$wrapperEl[0].addEventListener(event, onTransitionEnd);
        });
    }
    function onVisibilityChange() {
        const document = getDocument();
        if (document.visibilityState === 'hidden' && swiper1.autoplay.running) pause();
        if (document.visibilityState === 'visible' && swiper1.autoplay.paused) {
            run();
            swiper1.autoplay.paused = false;
        }
    }
    function onTransitionEnd(e) {
        if (!swiper1 || swiper1.destroyed || !swiper1.$wrapperEl) return;
        if (e.target !== swiper1.$wrapperEl[0]) return;
        [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper1.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
        swiper1.autoplay.paused = false;
        if (!swiper1.autoplay.running) stop();
        else run();
    }
    function onMouseEnter() {
        if (swiper1.params.autoplay.disableOnInteraction) stop();
        else pause();
        [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper1.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
    }
    function onMouseLeave() {
        if (swiper1.params.autoplay.disableOnInteraction) return;
        swiper1.autoplay.paused = false;
        run();
    }
    function attachMouseEvents() {
        if (swiper1.params.autoplay.pauseOnMouseEnter) {
            swiper1.$el.on('mouseenter', onMouseEnter);
            swiper1.$el.on('mouseleave', onMouseLeave);
        }
    }
    function detachMouseEvents() {
        swiper1.$el.off('mouseenter', onMouseEnter);
        swiper1.$el.off('mouseleave', onMouseLeave);
    }
    on1('init', ()=>{
        if (swiper1.params.autoplay.enabled) {
            start();
            const document = getDocument();
            document.addEventListener('visibilitychange', onVisibilityChange);
            attachMouseEvents();
        }
    });
    on1('beforeTransitionStart', (_s, speed, internal)=>{
        if (swiper1.autoplay.running) {
            if (internal || !swiper1.params.autoplay.disableOnInteraction) swiper1.autoplay.pause(speed);
            else stop();
        }
    });
    on1('sliderFirstMove', ()=>{
        if (swiper1.autoplay.running) {
            if (swiper1.params.autoplay.disableOnInteraction) stop();
            else pause();
        }
    });
    on1('touchEnd', ()=>{
        if (swiper1.params.cssMode && swiper1.autoplay.paused && !swiper1.params.autoplay.disableOnInteraction) run();
    });
    on1('destroy', ()=>{
        detachMouseEvents();
        if (swiper1.autoplay.running) stop();
        const document = getDocument();
        document.removeEventListener('visibilitychange', onVisibilityChange);
    });
    Object.assign(swiper1.autoplay, {
        pause,
        run,
        start,
        stop
    });
}
function Thumb({ swiper: swiper1 , extendParams , on: on1  }) {
    extendParams({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-thumbs'
        }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper1.thumbs = {
        swiper: null
    };
    function onThumbClick() {
        const thumbsSwiper = swiper1.thumbs.swiper;
        if (!thumbsSwiper) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && $(clickedSlide).hasClass(swiper1.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        else slideToIndex = clickedIndex;
        if (swiper1.params.loop) {
            let currentIndex = swiper1.activeIndex;
            if (swiper1.slides.eq(currentIndex).hasClass(swiper1.params.slideDuplicateClass)) {
                swiper1.loopFix(); // eslint-disable-next-line
                swiper1._clientLeft = swiper1.$wrapperEl[0].clientLeft;
                currentIndex = swiper1.activeIndex;
            }
            const prevIndex = swiper1.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            const nextIndex = swiper1.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
            else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
            else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
            else slideToIndex = prevIndex;
        }
        swiper1.slideTo(slideToIndex);
    }
    function init() {
        const { thumbs: thumbsParams  } = swiper1.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper1.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
            swiper1.thumbs.swiper = thumbsParams.swiper;
            Object.assign(swiper1.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            Object.assign(swiper1.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
        } else if (isObject(thumbsParams.swiper)) {
            const thumbsSwiperParams = Object.assign({
            }, thumbsParams.swiper);
            Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper1.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
            swiperCreated = true;
        }
        swiper1.thumbs.swiper.$el.addClass(swiper1.params.thumbs.thumbsContainerClass);
        swiper1.thumbs.swiper.on('tap', onThumbClick);
        return true;
    }
    function update1(initial) {
        const thumbsSwiper = swiper1.thumbs.swiper;
        if (!thumbsSwiper) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        const autoScrollOffset = swiper1.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper1.realIndex !== thumbsSwiper.realIndex || useOffset) {
            let currentThumbsIndex = thumbsSwiper.activeIndex;
            let newThumbsIndex;
            let direction;
            if (thumbsSwiper.params.loop) {
                if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                    thumbsSwiper.loopFix(); // eslint-disable-next-line
                    thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                    currentThumbsIndex = thumbsSwiper.activeIndex;
                } // Find actual thumbs index to slide to
                const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper1.realIndex}"]`).eq(0).index();
                const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper1.realIndex}"]`).eq(0).index();
                if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
                else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
                else newThumbsIndex = prevThumbsIndex;
                direction = swiper1.activeIndex > swiper1.previousIndex ? 'next' : 'prev';
            } else {
                newThumbsIndex = swiper1.realIndex;
                direction = newThumbsIndex > swiper1.previousIndex ? 'next' : 'prev';
            }
            if (useOffset) newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
            }
        } // Activate thumbs
        let thumbsToActivate = 1;
        const thumbActiveClass = swiper1.params.thumbs.slideThumbActiveClass;
        if (swiper1.params.slidesPerView > 1 && !swiper1.params.centeredSlides) thumbsToActivate = swiper1.params.slidesPerView;
        if (!swiper1.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(let i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper1.realIndex + i}"]`).addClass(thumbActiveClass);
        else for(let i1 = 0; i1 < thumbsToActivate; i1 += 1)thumbsSwiper.slides.eq(swiper1.realIndex + i1).addClass(thumbActiveClass);
    }
    on1('beforeInit', ()=>{
        const { thumbs  } = swiper1.params;
        if (!thumbs || !thumbs.swiper) return;
        init();
        update1(true);
    });
    on1('slideChange update resize observerUpdate', ()=>{
        if (!swiper1.thumbs.swiper) return;
        update1();
    });
    on1('setTransition', (_s, duration)=>{
        const thumbsSwiper = swiper1.thumbs.swiper;
        if (!thumbsSwiper) return;
        thumbsSwiper.setTransition(duration);
    });
    on1('beforeDestroy', ()=>{
        const thumbsSwiper = swiper1.thumbs.swiper;
        if (!thumbsSwiper) return;
        if (swiperCreated && thumbsSwiper) thumbsSwiper.destroy();
    });
    Object.assign(swiper1.thumbs, {
        init,
        update: update1
    });
}
function freeMode({ swiper: swiper1 , extendParams , emit , once  }) {
    extendParams({
        freeMode: {
            enabled: false,
            momentum: true,
            momentumRatio: 1,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: false,
            minimumVelocity: 0.02
        }
    });
    function onTouchMove1() {
        const { touchEventsData: data , touches  } = swiper1; // Velocity
        if (data.velocities.length === 0) data.velocities.push({
            position: touches[swiper1.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
        });
        data.velocities.push({
            position: touches[swiper1.isHorizontal() ? 'currentX' : 'currentY'],
            time: now()
        });
    }
    function onTouchEnd1({ currentPos  }) {
        const { params: params1 , $wrapperEl , rtlTranslate: rtl , snapGrid , touchEventsData: data  } = swiper1; // Time diff
        const touchEndTime = now();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (currentPos < -swiper1.minTranslate()) {
            swiper1.slideTo(swiper1.activeIndex);
            return;
        }
        if (currentPos > -swiper1.maxTranslate()) {
            if (swiper1.slides.length < snapGrid.length) swiper1.slideTo(snapGrid.length - 1);
            else swiper1.slideTo(swiper1.slides.length - 1);
            return;
        }
        if (params1.freeMode.momentum) {
            if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop();
                const velocityEvent = data.velocities.pop();
                const distance = lastMoveEvent.position - velocityEvent.position;
                const time = lastMoveEvent.time - velocityEvent.time;
                swiper1.velocity = distance / time;
                swiper1.velocity /= 2;
                if (Math.abs(swiper1.velocity) < params1.freeMode.minimumVelocity) swiper1.velocity = 0;
                 // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || now() - lastMoveEvent.time > 300) swiper1.velocity = 0;
            } else swiper1.velocity = 0;
            swiper1.velocity *= params1.freeMode.momentumVelocityRatio;
            data.velocities.length = 0;
            let momentumDuration = 1000 * params1.freeMode.momentumRatio;
            const momentumDistance = swiper1.velocity * momentumDuration;
            let newPosition = swiper1.translate + momentumDistance;
            if (rtl) newPosition = -newPosition;
            let doBounce = false;
            let afterBouncePosition;
            const bounceAmount = Math.abs(swiper1.velocity) * 20 * params1.freeMode.momentumBounceRatio;
            let needsLoopFix;
            if (newPosition < swiper1.maxTranslate()) {
                if (params1.freeMode.momentumBounce) {
                    if (newPosition + swiper1.maxTranslate() < -bounceAmount) newPosition = swiper1.maxTranslate() - bounceAmount;
                    afterBouncePosition = swiper1.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper1.maxTranslate();
                if (params1.loop && params1.centeredSlides) needsLoopFix = true;
            } else if (newPosition > swiper1.minTranslate()) {
                if (params1.freeMode.momentumBounce) {
                    if (newPosition - swiper1.minTranslate() > bounceAmount) newPosition = swiper1.minTranslate() + bounceAmount;
                    afterBouncePosition = swiper1.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper1.minTranslate();
                if (params1.loop && params1.centeredSlides) needsLoopFix = true;
            } else if (params1.freeMode.sticky) {
                let nextSlide;
                for(let j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper1.swipeDirection === 'next') newPosition = snapGrid[nextSlide];
                else newPosition = snapGrid[nextSlide - 1];
                newPosition = -newPosition;
            }
            if (needsLoopFix) once('transitionEnd', ()=>{
                swiper1.loopFix();
            });
             // Fix duration
            if (swiper1.velocity !== 0) {
                if (rtl) momentumDuration = Math.abs((-newPosition - swiper1.translate) / swiper1.velocity);
                else momentumDuration = Math.abs((newPosition - swiper1.translate) / swiper1.velocity);
                if (params1.freeMode.sticky) {
                    // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper1.translate);
                    const currentSlideSize = swiper1.slidesSizesGrid[swiper1.activeIndex];
                    if (moveDistance < currentSlideSize) momentumDuration = params1.speed;
                    else if (moveDistance < 2 * currentSlideSize) momentumDuration = params1.speed * 1.5;
                    else momentumDuration = params1.speed * 2.5;
                }
            } else if (params1.freeMode.sticky) {
                swiper1.slideToClosest();
                return;
            }
            if (params1.freeMode.momentumBounce && doBounce) {
                swiper1.updateProgress(afterBouncePosition);
                swiper1.setTransition(momentumDuration);
                swiper1.setTranslate(newPosition);
                swiper1.transitionStart(true, swiper1.swipeDirection);
                swiper1.animating = true;
                $wrapperEl.transitionEnd(()=>{
                    if (!swiper1 || swiper1.destroyed || !data.allowMomentumBounce) return;
                    emit('momentumBounce');
                    swiper1.setTransition(params1.speed);
                    setTimeout(()=>{
                        swiper1.setTranslate(afterBouncePosition);
                        $wrapperEl.transitionEnd(()=>{
                            if (!swiper1 || swiper1.destroyed) return;
                            swiper1.transitionEnd();
                        });
                    }, 0);
                });
            } else if (swiper1.velocity) {
                emit('_freeModeNoMomentumRelease');
                swiper1.updateProgress(newPosition);
                swiper1.setTransition(momentumDuration);
                swiper1.setTranslate(newPosition);
                swiper1.transitionStart(true, swiper1.swipeDirection);
                if (!swiper1.animating) {
                    swiper1.animating = true;
                    $wrapperEl.transitionEnd(()=>{
                        if (!swiper1 || swiper1.destroyed) return;
                        swiper1.transitionEnd();
                    });
                }
            } else swiper1.updateProgress(newPosition);
            swiper1.updateActiveIndex();
            swiper1.updateSlidesClasses();
        } else if (params1.freeMode.sticky) {
            swiper1.slideToClosest();
            return;
        } else if (params1.freeMode) emit('_freeModeNoMomentumRelease');
        if (!params1.freeMode.momentum || timeDiff >= params1.longSwipesMs) {
            swiper1.updateProgress();
            swiper1.updateActiveIndex();
            swiper1.updateSlidesClasses();
        }
    }
    Object.assign(swiper1, {
        freeMode: {
            onTouchMove: onTouchMove1,
            onTouchEnd: onTouchEnd1
        }
    });
}
function Grid({ swiper: swiper1 , extendParams  }) {
    extendParams({
        grid: {
            rows: 1,
            fill: 'column'
        }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    const initSlides = (slidesLength)=>{
        const { slidesPerView  } = swiper1.params;
        const { rows , fill  } = swiper1.params.grid;
        slidesPerRow = slidesNumberEvenToRows / rows;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) slidesNumberEvenToRows = slidesLength;
        else slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        if (slidesPerView !== 'auto' && fill === 'row') slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    };
    const updateSlide = (i, slide1, slidesLength, getDirectionLabel)=>{
        const { slidesPerGroup , spaceBetween  } = swiper1.params;
        const { rows , fill  } = swiper1.params.grid; // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === 'row' && slidesPerGroup > 1) {
            const groupIndex = Math.floor(i / (slidesPerGroup * rows));
            const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
            const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
            slide1.css({
                '-webkit-order': newSlideOrderIndex,
                order: newSlideOrderIndex
            });
        } else if (fill === 'column') {
            column = Math.floor(i / rows);
            row = i - column * rows;
            if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                row += 1;
                if (row >= rows) {
                    row = 0;
                    column += 1;
                }
            }
        } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
        }
        slide1.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
    };
    const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel)=>{
        const { spaceBetween , centeredSlides , roundLengths  } = swiper1.params;
        const { rows  } = swiper1.params.grid;
        swiper1.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper1.virtualSize = Math.ceil(swiper1.virtualSize / rows) - spaceBetween;
        swiper1.$wrapperEl.css({
            [getDirectionLabel('width')]: `${swiper1.virtualSize + spaceBetween}px`
        });
        if (centeredSlides) {
            snapGrid.splice(0, snapGrid.length);
            const newSlidesGrid = [];
            for(let i = 0; i < snapGrid.length; i += 1){
                let slidesGridItem = snapGrid[i];
                if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper1.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid.push(...newSlidesGrid);
        }
    };
    swiper1.grid = {
        initSlides,
        updateSlide,
        updateWrapperSize
    };
}
function appendSlide(slides) {
    const swiper1 = this;
    const { $wrapperEl , params: params1  } = swiper1;
    if (params1.loop) swiper1.loopDestroy();
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
    } else $wrapperEl.append(slides);
    if (params1.loop) swiper1.loopCreate();
    if (!params1.observer) swiper1.update();
}
function prependSlide(slides) {
    const swiper1 = this;
    const { params: params1 , $wrapperEl , activeIndex  } = swiper1;
    if (params1.loop) swiper1.loopDestroy();
    let newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.prepend(slides[i]);
        newActiveIndex = activeIndex + slides.length;
    } else $wrapperEl.prepend(slides);
    if (params1.loop) swiper1.loopCreate();
    if (!params1.observer) swiper1.update();
    swiper1.slideTo(newActiveIndex, 0, false);
}
function addSlide(index1, slides) {
    const swiper1 = this;
    const { $wrapperEl , params: params1 , activeIndex  } = swiper1;
    let activeIndexBuffer = activeIndex;
    if (params1.loop) {
        activeIndexBuffer -= swiper1.loopedSlides;
        swiper1.loopDestroy();
        swiper1.slides = $wrapperEl.children(`.${params1.slideClass}`);
    }
    const baseLength = swiper1.slides.length;
    if (index1 <= 0) {
        swiper1.prependSlide(slides);
        return;
    }
    if (index1 >= baseLength) {
        swiper1.appendSlide(slides);
        return;
    }
    let newActiveIndex = activeIndexBuffer > index1 ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for(let i = baseLength - 1; i >= index1; i -= 1){
        const currentSlide = swiper1.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i1 = 0; i1 < slides.length; i1 += 1)if (slides[i1]) $wrapperEl.append(slides[i1]);
        newActiveIndex = activeIndexBuffer > index1 ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else $wrapperEl.append(slides);
    for(let i1 = 0; i1 < slidesBuffer.length; i1 += 1)$wrapperEl.append(slidesBuffer[i1]);
    if (params1.loop) swiper1.loopCreate();
    if (!params1.observer) swiper1.update();
    if (params1.loop) swiper1.slideTo(newActiveIndex + swiper1.loopedSlides, 0, false);
    else swiper1.slideTo(newActiveIndex, 0, false);
}
function removeSlide(slidesIndexes) {
    const swiper1 = this;
    const { params: params1 , $wrapperEl , activeIndex  } = swiper1;
    let activeIndexBuffer = activeIndex;
    if (params1.loop) {
        activeIndexBuffer -= swiper1.loopedSlides;
        swiper1.loopDestroy();
        swiper1.slides = $wrapperEl.children(`.${params1.slideClass}`);
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for(let i = 0; i < slidesIndexes.length; i += 1){
            indexToRemove = slidesIndexes[i];
            if (swiper1.slides[indexToRemove]) swiper1.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
        indexToRemove = slidesIndexes;
        if (swiper1.slides[indexToRemove]) swiper1.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params1.loop) swiper1.loopCreate();
    if (!params1.observer) swiper1.update();
    if (params1.loop) swiper1.slideTo(newActiveIndex + swiper1.loopedSlides, 0, false);
    else swiper1.slideTo(newActiveIndex, 0, false);
}
function removeAllSlides() {
    const swiper1 = this;
    const slidesIndexes = [];
    for(let i = 0; i < swiper1.slides.length; i += 1)slidesIndexes.push(i);
    swiper1.removeSlide(slidesIndexes);
}
function Manipulation({ swiper: swiper1  }) {
    Object.assign(swiper1, {
        appendSlide: appendSlide.bind(swiper1),
        prependSlide: prependSlide.bind(swiper1),
        addSlide: addSlide.bind(swiper1),
        removeSlide: removeSlide.bind(swiper1),
        removeAllSlides: removeAllSlides.bind(swiper1)
    });
}
function effectInit(params1) {
    const { effect , swiper: swiper1 , on: on1 , setTranslate: setTranslate1 , setTransition: setTransition1 , overwriteParams , perspective  } = params1;
    on1('beforeInit', ()=>{
        if (swiper1.params.effect !== effect) return;
        swiper1.classNames.push(`${swiper1.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) swiper1.classNames.push(`${swiper1.params.containerModifierClass}3d`);
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {
        };
        Object.assign(swiper1.params, overwriteParamsResult);
        Object.assign(swiper1.originalParams, overwriteParamsResult);
    });
    on1('setTranslate', ()=>{
        if (swiper1.params.effect !== effect) return;
        setTranslate1();
    });
    on1('setTransition', (_s, duration)=>{
        if (swiper1.params.effect !== effect) return;
        setTransition1(duration);
    });
}
function effectTarget(effectParams, $slideEl) {
    if (effectParams.transformEl) return $slideEl.find(effectParams.transformEl).css({
        'backface-visibility': 'hidden',
        '-webkit-backface-visibility': 'hidden'
    });
    return $slideEl;
}
function effectVirtualTransitionEnd({ swiper: swiper1 , duration , transformEl , allSlides  }) {
    const { slides , activeIndex , $wrapperEl  } = swiper1;
    if (swiper1.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let $transitionEndTarget;
        if (allSlides) $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
        else $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
        $transitionEndTarget.transitionEnd(()=>{
            if (eventTriggered) return;
            if (!swiper1 || swiper1.destroyed) return;
            eventTriggered = true;
            swiper1.animating = false;
            const triggerEvents = [
                'webkitTransitionEnd',
                'transitionend'
            ];
            for(let i = 0; i < triggerEvents.length; i += 1)$wrapperEl.trigger(triggerEvents[i]);
        });
    }
}
function EffectFade({ swiper: swiper1 , extendParams , on: on1  }) {
    extendParams({
        fadeEffect: {
            crossFade: false,
            transformEl: null
        }
    });
    const setTranslate1 = ()=>{
        const { slides  } = swiper1;
        const params1 = swiper1.params.fadeEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = swiper1.slides.eq(i);
            const offset1 = $slideEl[0].swiperSlideOffset;
            let tx = -offset1;
            if (!swiper1.params.virtualTranslate) tx -= swiper1.translate;
            let ty = 0;
            if (!swiper1.isHorizontal()) {
                ty = tx;
                tx = 0;
            }
            const slideOpacity = swiper1.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
            const $targetEl = effectTarget(params1, $slideEl);
            $targetEl.css({
                opacity: slideOpacity
            }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
    };
    const setTransition1 = (duration)=>{
        const { transformEl  } = swiper1.params.fadeEffect;
        const $transitionElements = transformEl ? swiper1.slides.find(transformEl) : swiper1.slides;
        $transitionElements.transition(duration);
        effectVirtualTransitionEnd({
            swiper: swiper1,
            duration,
            transformEl,
            allSlides: true
        });
    };
    effectInit({
        effect: 'fade',
        swiper: swiper1,
        on: on1,
        setTranslate: setTranslate1,
        setTransition: setTransition1,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper1.params.cssMode
            })
    });
}
function EffectCube({ swiper: swiper1 , extendParams , on: on1  }) {
    extendParams({
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    const setTranslate1 = ()=>{
        const { $el , $wrapperEl , slides , width: swiperWidth , height: swiperHeight , rtlTranslate: rtl , size: swiperSize , browser: browser1  } = swiper1;
        const params1 = swiper1.params.cubeEffect;
        const isHorizontal = swiper1.isHorizontal();
        const isVirtual = swiper1.virtual && swiper1.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;
        if (params1.shadow) {
            if (isHorizontal) {
                $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                    $wrapperEl.append($cubeShadowEl);
                }
                $cubeShadowEl.css({
                    height: `${swiperWidth}px`
                });
            } else {
                $cubeShadowEl = $el.find('.swiper-cube-shadow');
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                    $el.append($cubeShadowEl);
                }
            }
        }
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let slideIndex = i;
            if (isVirtual) slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
            let slideAngle = slideIndex * 90;
            let round = Math.floor(slideAngle / 360);
            if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
            }
            const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            let tx = 0;
            let ty = 0;
            let tz = 0;
            if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
            } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
            } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
            } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
            }
            if (rtl) tx = -tx;
            if (!isHorizontal) {
                ty = tx;
                tx = 0;
            }
            const transform1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
            if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
            }
            $slideEl.transform(transform1);
            if (params1.slideShadows) {
                // Set shadows
                let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if (shadowBefore.length === 0) {
                    shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                    $slideEl.append(shadowBefore);
                }
                if (shadowAfter.length === 0) {
                    shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                    $slideEl.append(shadowAfter);
                }
                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
            }
        }
        $wrapperEl.css({
            '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
            'transform-origin': `50% 50% -${swiperSize / 2}px`
        });
        if (params1.shadow) {
            if (isHorizontal) $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params1.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params1.shadowScale})`);
            else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                const scale1 = params1.shadowScale;
                const scale2 = params1.shadowScale / multiplier;
                const offset1 = params1.shadowOffset;
                $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset1}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
            }
        }
        const zFactor = browser1.isSafari || browser1.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper1.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper1.isHorizontal() ? -wrapperRotate : 0}deg)`);
    };
    const setTransition1 = (duration)=>{
        const { $el , slides  } = swiper1;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        if (swiper1.params.cubeEffect.shadow && !swiper1.isHorizontal()) $el.find('.swiper-cube-shadow').transition(duration);
    };
    effectInit({
        effect: 'cube',
        swiper: swiper1,
        on: on1,
        setTranslate: setTranslate1,
        setTransition: setTransition1,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
    });
}
function createShadow(params1, $slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
    const $shadowContainer = params1.transformEl ? $slideEl.find(params1.transformEl) : $slideEl;
    let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
    if (!$shadowEl.length) {
        $shadowEl = $(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
        $shadowContainer.append($shadowEl);
    }
    return $shadowEl;
}
function EffectFlip({ swiper: swiper1 , extendParams , on: on1  }) {
    extendParams({
        flipEffect: {
            slideShadows: true,
            limitRotation: true,
            transformEl: null
        }
    });
    const setTranslate1 = ()=>{
        const { slides , rtlTranslate: rtl  } = swiper1;
        const params1 = swiper1.params.flipEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let progress = $slideEl[0].progress;
            if (swiper1.params.flipEffect.limitRotation) progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            const offset1 = $slideEl[0].swiperSlideOffset;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = swiper1.params.cssMode ? -offset1 - swiper1.translate : -offset1;
            let ty = 0;
            if (!swiper1.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
            } else if (rtl) rotateY = -rotateY;
            $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
            if (params1.slideShadows) {
                // Set shadows
                let shadowBefore = swiper1.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let shadowAfter = swiper1.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if (shadowBefore.length === 0) shadowBefore = createShadow(params1, $slideEl, swiper1.isHorizontal() ? 'left' : 'top');
                if (shadowAfter.length === 0) shadowAfter = createShadow(params1, $slideEl, swiper1.isHorizontal() ? 'right' : 'bottom');
                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
            }
            const transform1 = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            const $targetEl = effectTarget(params1, $slideEl);
            $targetEl.transform(transform1);
        }
    };
    const setTransition1 = (duration)=>{
        const { transformEl  } = swiper1.params.flipEffect;
        const $transitionElements = transformEl ? swiper1.slides.find(transformEl) : swiper1.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        effectVirtualTransitionEnd({
            swiper: swiper1,
            duration,
            transformEl
        });
    };
    effectInit({
        effect: 'flip',
        swiper: swiper1,
        on: on1,
        setTranslate: setTranslate1,
        setTransition: setTransition1,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper1.params.cssMode
            })
    });
}
function EffectCoverflow({ swiper: swiper1 , extendParams , on: on1  }) {
    extendParams({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true,
            transformEl: null
        }
    });
    const setTranslate1 = ()=>{
        const { width: swiperWidth , height: swiperHeight , slides , slidesSizesGrid  } = swiper1;
        const params1 = swiper1.params.coverflowEffect;
        const isHorizontal = swiper1.isHorizontal();
        const transform1 = swiper1.translate;
        const center = isHorizontal ? -transform1 + swiperWidth / 2 : -transform1 + swiperHeight / 2;
        const rotate = isHorizontal ? params1.rotate : -params1.rotate;
        const translate1 = params1.depth; // Each slide offset from center
        for(let i = 0, length = slides.length; i < length; i += 1){
            const $slideEl = slides.eq(i);
            const slideSize = slidesSizesGrid[i];
            const slideOffset = $slideEl[0].swiperSlideOffset;
            const offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params1.modifier;
            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
            let translateZ = -translate1 * Math.abs(offsetMultiplier);
            let stretch = params1.stretch; // Allow percentage to make a relative stretch for responsive sliders
            if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) stretch = parseFloat(params1.stretch) / 100 * slideSize;
            let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
            let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
            let scale = 1 - (1 - params1.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
            if (Math.abs(scale) < 0.001) scale = 0;
            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            const $targetEl = effectTarget(params1, $slideEl);
            $targetEl.transform(slideTransform);
            $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
            if (params1.slideShadows) {
                // Set shadows
                let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if ($shadowBeforeEl.length === 0) $shadowBeforeEl = createShadow(params1, $slideEl, isHorizontal ? 'left' : 'top');
                if ($shadowAfterEl.length === 0) $shadowAfterEl = createShadow(params1, $slideEl, isHorizontal ? 'right' : 'bottom');
                if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
        }
    };
    const setTransition1 = (duration)=>{
        const { transformEl  } = swiper1.params.coverflowEffect;
        const $transitionElements = transformEl ? swiper1.slides.find(transformEl) : swiper1.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    };
    effectInit({
        effect: 'coverflow',
        swiper: swiper1,
        on: on1,
        setTranslate: setTranslate1,
        setTransition: setTransition1,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                watchSlidesProgress: true
            })
    });
}
function EffectCreative({ swiper: swiper1 , extendParams , on: on1  }) {
    extendParams({
        creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: false,
            progressMultiplier: 1,
            perspective: true,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const getTranslateValue = (value)=>{
        if (typeof value === 'string') return value;
        return `${value}px`;
    };
    const setTranslate1 = ()=>{
        const { slides  } = swiper1;
        const params1 = swiper1.params.creativeEffect;
        const { progressMultiplier: multiplier  } = params1;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max($slideEl[0].progress, -params1.limitProgress), params1.limitProgress);
            const offset1 = $slideEl[0].swiperSlideOffset;
            const t = [
                swiper1.params.cssMode ? -offset1 - swiper1.translate : -offset1,
                0,
                0
            ];
            const r = [
                0,
                0,
                0
            ];
            let custom = false;
            if (!swiper1.isHorizontal()) {
                t[1] = t[0];
                t[0] = 0;
            }
            let data = {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                scale: 1,
                opacity: 1
            };
            if (progress < 0) {
                data = params1.next;
                custom = true;
            } else if (progress > 0) {
                data = params1.prev;
                custom = true;
            } // set translate
            t.forEach((value, index1)=>{
                t[index1] = `calc(${value}px + (${getTranslateValue(data.translate[index1])} * ${Math.abs(progress * multiplier)}))`;
            }); // set rotates
            r.forEach((value, index1)=>{
                r[index1] = data.rotate[index1] * Math.abs(progress * multiplier);
            });
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const translateString = t.join(', ');
            const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
            const scaleString = progress < 0 ? `scale(${1 + (1 - data.scale) * progress * multiplier})` : `scale(${1 - (1 - data.scale) * progress * multiplier})`;
            const opacityString = progress < 0 ? 1 + (1 - data.opacity) * progress * multiplier : 1 - (1 - data.opacity) * progress * multiplier;
            const transform1 = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows
            if (custom && data.shadow || !custom) {
                let $shadowEl = $slideEl.children('.swiper-slide-shadow');
                if ($shadowEl.length === 0 && data.shadow) $shadowEl = createShadow(params1, $slideEl);
                if ($shadowEl.length) {
                    const shadowOpacity = params1.shadowPerProgress ? progress * (1 / params1.limitProgress) : progress;
                    $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                }
            }
            const $targetEl = effectTarget(params1, $slideEl);
            $targetEl.transform(transform1).css({
                opacity: opacityString
            });
            if (data.origin) $targetEl.css('transform-origin', data.origin);
        }
    };
    const setTransition1 = (duration)=>{
        const { transformEl  } = swiper1.params.creativeEffect;
        const $transitionElements = transformEl ? swiper1.slides.find(transformEl) : swiper1.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        effectVirtualTransitionEnd({
            swiper: swiper1,
            duration,
            transformEl
        });
    };
    effectInit({
        effect: 'creative',
        swiper: swiper1,
        on: on1,
        setTranslate: setTranslate1,
        setTransition: setTransition1,
        perspective: ()=>swiper1.params.creativeEffect.perspective
        ,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper1.params.cssMode
            })
    });
}
function EffectCards({ swiper: swiper1 , extendParams , on: on1  }) {
    extendParams({
        cardsEffect: {
            slideShadows: true,
            transformEl: null
        }
    });
    const setTranslate1 = ()=>{
        const { slides , activeIndex  } = swiper1;
        const params1 = swiper1.params.cardsEffect;
        const { startTranslate , isTouched  } = swiper1.touchEventsData;
        const currentTranslate = swiper1.translate;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max(slideProgress, -4), 4);
            let offset1 = $slideEl[0].swiperSlideOffset;
            if (swiper1.params.centeredSlides && !swiper1.params.cssMode) swiper1.$wrapperEl.transform(`translateX(${swiper1.minTranslate()}px)`);
            if (swiper1.params.centeredSlides && swiper1.params.cssMode) offset1 -= slides[0].swiperSlideOffset;
            let tX = swiper1.params.cssMode ? -offset1 - swiper1.translate : -offset1;
            let tY = 0;
            const tZ = -100 * Math.abs(progress);
            let scale = 1;
            let rotate = -2 * progress;
            let tXAdd = 8 - Math.abs(progress) * 0.75;
            const isSwipeToNext = (i === activeIndex || i === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper1.params.cssMode) && currentTranslate < startTranslate;
            const isSwipeToPrev = (i === activeIndex || i === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper1.params.cssMode) && currentTranslate > startTranslate;
            if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                rotate += -28 * progress * subProgress;
                scale += -0.5 * subProgress;
                tXAdd += 96 * subProgress;
                tY = `${-25 * subProgress * Math.abs(progress)}%`;
            }
            if (progress < 0) // next
            tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
            else if (progress > 0) // prev
            tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
            else tX = `${tX}px`;
            if (!swiper1.isHorizontal()) {
                const prevY = tY;
                tY = tX;
                tX = prevY;
            }
            const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
            const transform1 = `\n        translate3d(${tX}, ${tY}, ${tZ}px)\n        rotateZ(${rotate}deg)\n        scale(${scaleString})\n      `;
            if (params1.slideShadows) {
                // Set shadows
                let $shadowEl = $slideEl.find('.swiper-slide-shadow');
                if ($shadowEl.length === 0) $shadowEl = createShadow(params1, $slideEl);
                if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
            }
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const $targetEl = effectTarget(params1, $slideEl);
            $targetEl.transform(transform1);
        }
    };
    const setTransition1 = (duration)=>{
        const { transformEl  } = swiper1.params.cardsEffect;
        const $transitionElements = transformEl ? swiper1.slides.find(transformEl) : swiper1.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        effectVirtualTransitionEnd({
            swiper: swiper1,
            duration,
            transformEl
        });
    };
    effectInit({
        effect: 'cards',
        swiper: swiper1,
        on: on1,
        setTranslate: setTranslate1,
        setTransition: setTransition1,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper1.params.cssMode
            })
    });
}
// Swiper Class
const modules = [
    Virtual,
    Keyboard,
    Mousewheel,
    Navigation,
    Pagination,
    Scrollbar,
    Parallax,
    Zoom,
    Lazy,
    Controller,
    A11y,
    History1,
    HashNavigation,
    Autoplay,
    Thumb,
    freeMode,
    Grid,
    Manipulation,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    EffectCreative,
    EffectCards
];
Swiper.use(modules);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dOGRJ":[function() {},{}],"1zVWa":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-1.5afa455f.webp";

},{"./helpers/bundle-url":"8YnfL"}],"CILQR":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-1.e40970a2.webp";

},{"./helpers/bundle-url":"8YnfL"}],"371UE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-2.03390290.webp";

},{"./helpers/bundle-url":"8YnfL"}],"9O7V1":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-2.810772fd.webp";

},{"./helpers/bundle-url":"8YnfL"}],"1ZnPk":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-3.21dfd675.webp";

},{"./helpers/bundle-url":"8YnfL"}],"9RwaZ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-3.51979463.webp";

},{"./helpers/bundle-url":"8YnfL"}],"gEsOO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-4.b52e649c.webp";

},{"./helpers/bundle-url":"8YnfL"}],"2S5AP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-4.e8fda2b8.webp";

},{"./helpers/bundle-url":"8YnfL"}],"5xPkb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-5.33f6cfa2.webp";

},{"./helpers/bundle-url":"8YnfL"}],"9sU45":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-5.9b94f966.webp";

},{"./helpers/bundle-url":"8YnfL"}],"cqC5w":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-6.9e05da6d.webp";

},{"./helpers/bundle-url":"8YnfL"}],"7PV3K":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-6.5752899b.webp";

},{"./helpers/bundle-url":"8YnfL"}],"ebUfy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-7.85fef4aa.webp";

},{"./helpers/bundle-url":"8YnfL"}],"4jSGb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-7.45efffa1.webp";

},{"./helpers/bundle-url":"8YnfL"}],"9KEsO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-8.3f7241a0.webp";

},{"./helpers/bundle-url":"8YnfL"}],"9de3z":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-8.7fd17235.webp";

},{"./helpers/bundle-url":"8YnfL"}],"1I7di":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-9.b2d78ff1.webp";

},{"./helpers/bundle-url":"8YnfL"}],"g2yH3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('5wyFo') + "monkey-island-tribute-wip-slide-9.c411f6ba.webp";

},{"./helpers/bundle-url":"8YnfL"}]},["bCluR"], null, "parcelRequire7e77")

//# sourceMappingURL=info.61350acf.js.map
