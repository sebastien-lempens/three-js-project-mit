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
})({"hyADc":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "be3d1d5bdeba434e";
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

},{}],"6VjDO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMeshSize", ()=>getMeshSize
);
parcelHelpers.export(exports, "getTweakPane", ()=>getTweakPane
);
var _three = require("three");
var _tweakpane = require("tweakpane");
const getMeshSize = (mesh)=>{
    return new _three.Box3().setFromObject(mesh).getSize(mesh.position.clone());
};
const getTweakPane = (ctx)=>{
    ctx.gui = new _tweakpane.Pane();
    ctx.gui.containerElem_.style.width = '400px';
    /**
	 * Pane Scene
	 */ const paneScene = ctx.gui.addFolder({
        title: 'Scene',
        expanded: false
    });
    // Background Color
    paneScene.addInput(ctx.params.scene, 'backgroundColor', {
        label: 'Background Color'
    }).on('change', ({ value  })=>{
        ctx.scene.background = new _three.Color(value);
    });
    //ClipPane
    paneScene.addInput(ctx.params.scene, 'reveal', {
        min: -500,
        max: 300,
        step: 0.001,
        label: 'Reveal Scene'
    }).on('change', ({ value  })=>{
        const [plane] = ctx.webgl.clippingPlanes;
        ctx.webgl.clippingPlanes[0].constant = value;
    });
    // Effect: Bloom
    paneScene.addInput(ctx.params.scene.effect.bloom, 'strength', {
        label: 'Bloom strength',
        min: 0,
        max: 1,
        step: 0.001
    }).on('change', ({ value  })=>{
        const { effectComposer: { bloomPass  } ,  } = ctx;
        bloomPass.strength = value;
    });
    paneScene.addInput(ctx.params.scene.effect.bloom, 'radius', {
        label: 'Bloom radius',
        min: 0,
        max: 2,
        step: 0.001
    }).on('change', ({ value  })=>{
        const { effectComposer: { bloomPass  } ,  } = ctx;
        bloomPass.radius = value;
    });
    paneScene.addInput(ctx.params.scene.effect.bloom, 'threshold', {
        label: 'Bloom threshold',
        min: 0,
        max: 0.5,
        step: 0.0001
    }).on('change', ({ value  })=>{
        const { effectComposer: { bloomPass  } ,  } = ctx;
        bloomPass.threshold = value;
    });
    ctx.gui.addSeparator();
    // Effect : Bokeh
    paneScene.addInput(ctx.params.scene.effect.bokeh, 'aperture', {
        label: 'Bokeh Aperture',
        min: 0,
        max: 0.1,
        step: 0.00001
    }).on('change', ({ value  })=>{
        const { effectComposer: { bokehPass  } ,  } = ctx;
        bokehPass.uniforms.aperture.value = value;
    });
    paneScene.addInput(ctx.params.scene.effect.bokeh, 'focus', {
        label: 'Bokeh Focus',
        min: 0,
        max: 1,
        step: 0.0001
    }).on('change', ({ value  })=>{
        const { effectComposer: { bokehPass  } ,  } = ctx;
        bokehPass.uniforms.focus.value = value;
    });
    ctx.gui.addSeparator();
    /**
	 * Pane Camera
	 */ const paneCamera = ctx.gui.addFolder({
        title: 'Camera',
        expanded: false
    });
    paneCamera.addInput(ctx.params.camera, 'orbitControl', {
        label: 'OrbitControl: Enable'
    }).on('change', ({ value  })=>{
        const { controls  } = ctx.webgl;
        controls.enabled = value;
    });
    paneCamera.addInput(ctx.params.camera, 'unlock', {
        label: 'OrbitControl: Disable Restrictions'
    });
    paneCamera.addInput(ctx.params.camera, 'posXvalue');
    paneCamera.addInput(ctx.params.camera, 'posYvalue');
    paneCamera.addInput(ctx.params.camera, 'posZvalue');
    ctx.gui.addSeparator();
    /**
	 * Pane Lights
	 */ const paneLights = ctx.gui.addFolder({
        title: 'Lights',
        expanded: false
    });
    // Ambiant Light
    paneLights.addInput(ctx.params.lights.ambiant, 'color', {
        label: 'Ambiant Color'
    }).on('change', ({ value  })=>{
        ctx.webgl.ambiantLight.color = new _three.Color(value);
    });
    paneLights.addInput(ctx.params.lights.ambiant, 'intensity', {
        label: 'Ambiant Intensity',
        min: 0,
        max: 8,
        step: 0.01
    }).on('change', ({ value  })=>{
        ctx.webgl.ambiantLight.intensity = value;
    });
    paneLights.addSeparator();
    //Spot Light Color
    paneLights.addInput(ctx.params.lights.spot, 'color', {
        label: 'Spot Light Color'
    }).on('change', ({ value  })=>{
        ctx.webgl.spotLight.color = new _three.Color(value);
    });
    //Spot Light Intensity
    paneLights.addInput(ctx.params.lights.spot, 'intensity', {
        label: 'Spot Light Intensity',
        min: 0,
        max: 4,
        step: 0.01
    }).on('change', ({ value  })=>{
        ctx.webgl.spotLight.intensity = value;
    });
    //Spot Light Angle
    paneLights.addInput(ctx.params.lights.spot, 'angle', {
        label: 'Spot Light angle',
        min: 0,
        max: 0.2,
        step: 0.001
    }).on('change', ({ value  })=>{
        ctx.webgl.spotLight.angle = value;
    });
    //Spot Light Penumbra
    paneLights.addInput(ctx.params.lights.spot, 'penumbra', {
        label: 'Spot Light penumbra',
        min: 0,
        max: 1,
        step: 0.01
    }).on('change', ({ value  })=>{
        ctx.webgl.spotLight.penumbra = value;
    });
    // Sport Light Position
    paneLights.addInput(ctx.params.lights.spot, 'position', {
        x: {
            min: -2,
            max: 2,
            step: 0.001
        },
        y: {
            min: -2,
            max: 2,
            step: 0.001
        },
        z: {
            min: -2,
            max: 2,
            step: 0.001
        },
        label: 'Spot Light Position'
    }).on('change', ({ value  })=>{
        ctx.webgl.spotLight.position.set(...Object.values(value));
    });
    //Spot Light Helper
    paneLights.addInput(ctx.params.lights.spot, 'helper', {
        label: 'Spot Light Helper'
    }).on('change', ({ value  })=>{
        ctx.webgl.spotLightHelper.visible = value;
    });
    paneLights.addSeparator();
    // Point Light Color
    paneLights.addInput(ctx.params.lights.pointlight, 'color', {
        label: 'Point Light Color'
    }).on('change', ({ value  })=>{
        ctx.webgl.pointLight.color = new _three.Color(value);
        ctx.webgl.pointLight2.color = new _three.Color(value);
    });
    // Point Light Distance
    paneLights.addInput(ctx.params.lights.pointlight, 'distance', {
        min: 0.1,
        max: 2,
        step: 0.01,
        label: 'Point Light Distance'
    }).on('change', ({ value  })=>{
        ctx.webgl.pointLight.distance = value;
        ctx.webgl.pointLight2.distance = value;
    });
    // Point Light Decay
    paneLights.addInput(ctx.params.lights.pointlight, 'decay', {
        min: 0,
        max: 2,
        step: 0.01,
        label: 'Point Light Decay'
    }).on('change', ({ value  })=>{
        ctx.webgl.pointLight.decay = value;
        ctx.webgl.pointLight2.decay = value;
    });
    // Point Light Position
    paneLights.addInput(ctx.params.lights.pointlight, 'position', {
        x: {
            min: -1,
            max: 1,
            step: 0.001
        },
        y: {
            min: -1,
            max: 1,
            step: 0.001
        },
        z: {
            min: -1,
            max: 1,
            step: 0.001
        },
        label: 'Point Light Position'
    }).on('change', ({ value  })=>{
        ctx.webgl.pointLight.position.set(...Object.values(value));
    });
    // Point Light Intensity
    paneLights.addInput(ctx.params.lights.pointlight, 'intensity', {
        min: 0,
        max: 1,
        step: 0.001,
        label: 'Point Light Intensity'
    }).on('change', ({ value  })=>{
        ctx.webgl.pointLight.intensity = value;
        ctx.webgl.pointLight2.intensity = value;
    });
    // Point Light Helper
    paneLights.addInput(ctx.params.lights.pointlight, 'helper', {
        label: 'Point Light Helper'
    }).on('change', ({ value  })=>{
        ctx.webgl.pointLightHelper.visible = value;
    });
    // Point Light Position
    paneLights.addInput(ctx.params.lights.pointlight2, 'position', {
        x: {
            min: -1,
            max: 1,
            step: 0.001
        },
        y: {
            min: -1,
            max: 1,
            step: 0.001
        },
        z: {
            min: -1,
            max: 1,
            step: 0.001
        },
        label: 'Point Light 2 Position'
    }).on('change', ({ value  })=>{
        ctx.webgl.pointLight2.position.set(...Object.values(value));
    });
    // Point Light 2 Helper
    paneLights.addInput(ctx.params.lights.pointlight2, 'helper', {
        label: 'Point Light 2 Helper'
    }).on('change', ({ value  })=>{
        ctx.webgl.pointLight2helper.visible = value;
    });
    return ctx.gui;
};

},{"three":"1AKvZ","tweakpane":"eKcFU","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eKcFU":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define([
        'exports'
    ], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Tweakpane = {
    }));
})(this, function(exports) {
    'use strict';
    /***
     * A simple semantic versioning perser.
     */ class Semver {
        /**
         * @hidden
         */ constructor(text){
            const [core, prerelease] = text.split('-');
            const coreComps = core.split('.');
            this.major = parseInt(coreComps[0], 10);
            this.minor = parseInt(coreComps[1], 10);
            this.patch = parseInt(coreComps[2], 10);
            this.prerelease = prerelease !== null && prerelease !== void 0 ? prerelease : null;
        }
        toString() {
            const core1 = [
                this.major,
                this.minor,
                this.patch
            ].join('.');
            return this.prerelease !== null ? [
                core1,
                this.prerelease
            ].join('-') : core1;
        }
    }
    class BladeApi {
        constructor(controller){
            this.controller_ = controller;
        }
        get disabled() {
            return this.controller_.viewProps.get('disabled');
        }
        set disabled(disabled) {
            this.controller_.viewProps.set('disabled', disabled);
        }
        get hidden() {
            return this.controller_.viewProps.get('hidden');
        }
        set hidden(hidden) {
            this.controller_.viewProps.set('hidden', hidden);
        }
        dispose() {
            this.controller_.viewProps.set('disposed', true);
        }
    }
    class TpEvent {
        constructor(target4){
            this.target = target4;
        }
    }
    class TpChangeEvent extends TpEvent {
        constructor(target1, value2, presetKey, last){
            super(target1);
            this.value = value2;
            this.presetKey = presetKey;
            this.last = last !== null && last !== void 0 ? last : true;
        }
    }
    class TpUpdateEvent extends TpEvent {
        constructor(target2, value1, presetKey1){
            super(target2);
            this.value = value1;
            this.presetKey = presetKey1;
        }
    }
    class TpFoldEvent extends TpEvent {
        constructor(target3, expanded1){
            super(target3);
            this.expanded = expanded1;
        }
    }
    function forceCast(v) {
        return v;
    }
    function isEmpty(value2) {
        return value2 === null || value2 === undefined;
    }
    function deepEqualsArray(a1, a2) {
        if (a1.length !== a2.length) return false;
        for(let i = 0; i < a1.length; i++){
            if (a1[i] !== a2[i]) return false;
        }
        return true;
    }
    const CREATE_MESSAGE_MAP = {
        alreadydisposed: ()=>'View has been already disposed'
        ,
        invalidparams: (context)=>`Invalid parameters for '${context.name}'`
        ,
        nomatchingcontroller: (context)=>`No matching controller for '${context.key}'`
        ,
        nomatchingview: (context)=>`No matching view for '${JSON.stringify(context.params)}'`
        ,
        notbindable: ()=>`Value is not bindable`
        ,
        propertynotfound: (context)=>`Property '${context.name}' not found`
        ,
        shouldneverhappen: ()=>'This error should never happen'
    };
    class TpError {
        constructor(config){
            var _a;
            this.message = (_a = CREATE_MESSAGE_MAP[config.type](forceCast(config.context))) !== null && _a !== void 0 ? _a : 'Unexpected error';
            this.name = this.constructor.name;
            this.stack = new Error(this.message).stack;
            this.type = config.type;
        }
        static alreadyDisposed() {
            return new TpError({
                type: 'alreadydisposed'
            });
        }
        static notBindable() {
            return new TpError({
                type: 'notbindable'
            });
        }
        static propertyNotFound(name) {
            return new TpError({
                type: 'propertynotfound',
                context: {
                    name: name
                }
            });
        }
        static shouldNeverHappen() {
            return new TpError({
                type: 'shouldneverhappen'
            });
        }
    }
    class BindingTarget {
        constructor(obj1, key2, opt_id){
            this.obj_ = obj1;
            this.key_ = key2;
            this.presetKey_ = opt_id !== null && opt_id !== void 0 ? opt_id : key2;
        }
        static isBindable(obj) {
            if (obj === null) return false;
            if (typeof obj !== 'object') return false;
            return true;
        }
        get key() {
            return this.key_;
        }
        get presetKey() {
            return this.presetKey_;
        }
        read() {
            return this.obj_[this.key_];
        }
        write(value) {
            this.obj_[this.key_] = value;
        }
        writeProperty(name, value) {
            const valueObj = this.read();
            if (!BindingTarget.isBindable(valueObj)) throw TpError.notBindable();
            if (!(name in valueObj)) throw TpError.propertyNotFound(name);
            valueObj[name] = value;
        }
    }
    class ButtonApi extends BladeApi {
        get label() {
            return this.controller_.props.get('label');
        }
        set label(label) {
            this.controller_.props.set('label', label);
        }
        get title() {
            var _a1;
            return (_a1 = this.controller_.valueController.props.get('title')) !== null && _a1 !== void 0 ? _a1 : '';
        }
        set title(title) {
            this.controller_.valueController.props.set('title', title);
        }
        on(eventName, handler) {
            const bh = handler.bind(this);
            const emitter = this.controller_.valueController.emitter;
            emitter.on(eventName, ()=>{
                bh(new TpEvent(this));
            });
            return this;
        }
    }
    class Emitter {
        constructor(){
            this.observers_ = {
            };
        }
        on(eventName, handler) {
            let observers = this.observers_[eventName];
            if (!observers) observers = this.observers_[eventName] = [];
            observers.push({
                handler: handler
            });
            return this;
        }
        off(eventName, handler) {
            const observers = this.observers_[eventName];
            if (observers) this.observers_[eventName] = observers.filter((observer)=>{
                return observer.handler !== handler;
            });
            return this;
        }
        emit(eventName, event) {
            const observers = this.observers_[eventName];
            if (!observers) return;
            observers.forEach((observer)=>{
                observer.handler(event);
            });
        }
    }
    const PREFIX = 'tp';
    function ClassName(viewName) {
        const fn = (opt_elementName, opt_modifier)=>{
            return [
                PREFIX,
                '-',
                viewName,
                'v',
                opt_elementName ? `_${opt_elementName}` : '',
                opt_modifier ? `-${opt_modifier}` : '', 
            ].join('');
        };
        return fn;
    }
    function compose(h1, h2) {
        return (input)=>h2(h1(input))
        ;
    }
    function extractValue(ev) {
        return ev.rawValue;
    }
    function bindValue(value3, applyValue) {
        value3.emitter.on('change', compose(extractValue, applyValue));
        applyValue(value3.rawValue);
    }
    function bindValueMap(valueMap, key1, applyValue) {
        bindValue(valueMap.value(key1), applyValue);
    }
    function applyClass(elem, className, active) {
        if (active) elem.classList.add(className);
        else elem.classList.remove(className);
    }
    function valueToClassName(elem, className) {
        return (value3)=>{
            applyClass(elem, className, value3);
        };
    }
    function bindValueToTextContent(value3, elem) {
        bindValue(value3, (text1)=>{
            elem.textContent = text1 !== null && text1 !== void 0 ? text1 : '';
        });
    }
    const className$q = ClassName('btn');
    class ButtonView {
        constructor(doc39, config1){
            this.element = doc39.createElement('div');
            this.element.classList.add(className$q());
            config1.viewProps.bindClassModifiers(this.element);
            const buttonElem = doc39.createElement('button');
            buttonElem.classList.add(className$q('b'));
            config1.viewProps.bindDisabled(buttonElem);
            this.element.appendChild(buttonElem);
            this.buttonElement = buttonElem;
            const titleElem = doc39.createElement('div');
            titleElem.classList.add(className$q('t'));
            bindValueToTextContent(config1.props.value('title'), titleElem);
            this.buttonElement.appendChild(titleElem);
        }
    }
    class ButtonController {
        constructor(doc1, config2){
            this.emitter = new Emitter();
            this.onClick_ = this.onClick_.bind(this);
            this.props = config2.props;
            this.viewProps = config2.viewProps;
            this.view = new ButtonView(doc1, {
                props: this.props,
                viewProps: this.viewProps
            });
            this.view.buttonElement.addEventListener('click', this.onClick_);
        }
        onClick_() {
            this.emitter.emit('click', {
                sender: this
            });
        }
    }
    class BoundValue {
        constructor(initialValue2, config3){
            var _a2;
            this.constraint_ = config3 === null || config3 === void 0 ? void 0 : config3.constraint;
            this.equals_ = (_a2 = config3 === null || config3 === void 0 ? void 0 : config3.equals) !== null && _a2 !== void 0 ? _a2 : (v1, v2)=>v1 === v2
            ;
            this.emitter = new Emitter();
            this.rawValue_ = initialValue2;
        }
        get constraint() {
            return this.constraint_;
        }
        get rawValue() {
            return this.rawValue_;
        }
        set rawValue(rawValue) {
            this.setRawValue(rawValue, {
                forceEmit: false,
                last: true
            });
        }
        setRawValue(rawValue, options) {
            const opts = options !== null && options !== void 0 ? options : {
                forceEmit: false,
                last: true
            };
            const constrainedValue = this.constraint_ ? this.constraint_.constrain(rawValue) : rawValue;
            const changed = !this.equals_(this.rawValue_, constrainedValue);
            if (!changed && !opts.forceEmit) return;
            this.emitter.emit('beforechange', {
                sender: this
            });
            this.rawValue_ = constrainedValue;
            this.emitter.emit('change', {
                options: opts,
                rawValue: constrainedValue,
                sender: this
            });
        }
    }
    class PrimitiveValue {
        constructor(initialValue1){
            this.emitter = new Emitter();
            this.value_ = initialValue1;
        }
        get rawValue() {
            return this.value_;
        }
        set rawValue(value) {
            this.setRawValue(value, {
                forceEmit: false,
                last: true
            });
        }
        setRawValue(value, options) {
            const opts = options !== null && options !== void 0 ? options : {
                forceEmit: false,
                last: true
            };
            if (this.value_ === value && !opts.forceEmit) return;
            this.emitter.emit('beforechange', {
                sender: this
            });
            this.value_ = value;
            this.emitter.emit('change', {
                options: opts,
                rawValue: this.value_,
                sender: this
            });
        }
    }
    function createValue(initialValue2, config4) {
        const constraint = config4 === null || config4 === void 0 ? void 0 : config4.constraint;
        const equals = config4 === null || config4 === void 0 ? void 0 : config4.equals;
        if (!constraint && !equals) return new PrimitiveValue(initialValue2);
        return new BoundValue(initialValue2, config4);
    }
    class ValueMap {
        constructor(valueMap){
            this.emitter = new Emitter();
            this.valMap_ = valueMap;
            for(const key1 in this.valMap_){
                const v = this.valMap_[key1];
                v.emitter.on('change', ()=>{
                    this.emitter.emit('change', {
                        key: key1,
                        sender: this
                    });
                });
            }
        }
        static createCore(initialValue) {
            const keys = Object.keys(initialValue);
            return keys.reduce((o, key2)=>{
                return Object.assign(o, {
                    [key2]: createValue(initialValue[key2])
                });
            }, {
            });
        }
        static fromObject(initialValue) {
            const core1 = this.createCore(initialValue);
            return new ValueMap(core1);
        }
        get(key) {
            return this.valMap_[key].rawValue;
        }
        set(key, value) {
            this.valMap_[key].rawValue = value;
        }
        value(key) {
            return this.valMap_[key];
        }
    }
    function parseObject(value3, keyToParserMap) {
        const keys = Object.keys(keyToParserMap);
        const result = keys.reduce((tmp, key3)=>{
            if (tmp === undefined) return undefined;
            const parser = keyToParserMap[key3];
            const result1 = parser(value3[key3]);
            return result1.succeeded ? Object.assign(Object.assign({
            }, tmp), {
                [key3]: result1.value
            }) : undefined;
        }, {
        });
        return forceCast(result);
    }
    function parseArray(value3, parseItem) {
        return value3.reduce((tmp, item)=>{
            if (tmp === undefined) return undefined;
            const result = parseItem(item);
            if (!result.succeeded || result.value === undefined) return undefined;
            return [
                ...tmp,
                result.value
            ];
        }, []);
    }
    function isObject(value3) {
        if (value3 === null) return false;
        return typeof value3 === 'object';
    }
    function createParamsParserBuilder(parse) {
        return (optional)=>(v)=>{
                if (!optional && v === undefined) return {
                    succeeded: false,
                    value: undefined
                };
                if (optional && v === undefined) return {
                    succeeded: true,
                    value: undefined
                };
                const result = parse(v);
                return result !== undefined ? {
                    succeeded: true,
                    value: result
                } : {
                    succeeded: false,
                    value: undefined
                };
            }
        ;
    }
    function createParamsParserBuilders(optional) {
        return {
            custom: (parse)=>createParamsParserBuilder(parse)(optional)
            ,
            boolean: createParamsParserBuilder((v)=>typeof v === 'boolean' ? v : undefined
            )(optional),
            number: createParamsParserBuilder((v)=>typeof v === 'number' ? v : undefined
            )(optional),
            string: createParamsParserBuilder((v)=>typeof v === 'string' ? v : undefined
            )(optional),
            function: createParamsParserBuilder((v)=>typeof v === 'function' ? v : undefined
            )(optional),
            constant: (value3)=>createParamsParserBuilder((v)=>v === value3 ? value3 : undefined
                )(optional)
            ,
            raw: createParamsParserBuilder((v)=>v
            )(optional),
            object: (keyToParserMap)=>createParamsParserBuilder((v)=>{
                    if (!isObject(v)) return undefined;
                    return parseObject(v, keyToParserMap);
                })(optional)
            ,
            array: (itemParser)=>createParamsParserBuilder((v)=>{
                    if (!Array.isArray(v)) return undefined;
                    return parseArray(v, itemParser);
                })(optional)
        };
    }
    const ParamsParsers = {
        optional: createParamsParserBuilders(true),
        required: createParamsParserBuilders(false)
    };
    function parseParams(value3, keyToParserMap) {
        const result = ParamsParsers.required.object(keyToParserMap)(value3);
        return result.succeeded ? result.value : undefined;
    }
    function disposeElement(elem) {
        if (elem && elem.parentElement) elem.parentElement.removeChild(elem);
        return null;
    }
    function getAllBladePositions() {
        return [
            'veryfirst',
            'first',
            'last',
            'verylast'
        ];
    }
    const className$p = ClassName('');
    const POS_TO_CLASS_NAME_MAP = {
        veryfirst: 'vfst',
        first: 'fst',
        last: 'lst',
        verylast: 'vlst'
    };
    class BladeController {
        constructor(config4){
            this.parent_ = null;
            this.blade = config4.blade;
            this.view = config4.view;
            this.viewProps = config4.viewProps;
            const elem1 = this.view.element;
            this.blade.value('positions').emitter.on('change', ()=>{
                getAllBladePositions().forEach((pos)=>{
                    elem1.classList.remove(className$p(undefined, POS_TO_CLASS_NAME_MAP[pos]));
                });
                this.blade.get('positions').forEach((pos)=>{
                    elem1.classList.add(className$p(undefined, POS_TO_CLASS_NAME_MAP[pos]));
                });
            });
            this.viewProps.handleDispose(()=>{
                disposeElement(elem1);
            });
        }
        get parent() {
            return this.parent_;
        }
    }
    const SVG_NS = 'http://www.w3.org/2000/svg';
    function forceReflow(element) {
        element.offsetHeight;
    }
    function disableTransitionTemporarily(element, callback) {
        const t = element.style.transition;
        element.style.transition = 'none';
        callback();
        element.style.transition = t;
    }
    function supportsTouch(doc2) {
        return doc2.ontouchstart !== undefined;
    }
    function getGlobalObject() {
        return new Function('return this')();
    }
    function getWindowDocument() {
        const globalObj = forceCast(getGlobalObject());
        return globalObj.document;
    }
    function isBrowser() {
        return 'document' in getGlobalObject();
    }
    function getCanvasContext(canvasElement) {
        return isBrowser() ? canvasElement.getContext('2d') : null;
    }
    const ICON_ID_TO_INNER_HTML_MAP = {
        check: '<path d="M2 8l4 4l8 -8"/>',
        dropdown: '<path d="M5 7h6l-3 3 z"/>',
        p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
    };
    function createSvgIconElement(document, iconId) {
        const elem1 = document.createElementNS(SVG_NS, 'svg');
        elem1.innerHTML = ICON_ID_TO_INNER_HTML_MAP[iconId];
        return elem1;
    }
    function insertElementAt(parentElement, element, index) {
        parentElement.insertBefore(element, parentElement.children[index]);
    }
    function removeElement(element) {
        if (element.parentElement) element.parentElement.removeChild(element);
    }
    function removeChildElements(element) {
        while(element.children.length > 0)element.removeChild(element.children[0]);
    }
    function removeChildNodes(element) {
        while(element.childNodes.length > 0)element.removeChild(element.childNodes[0]);
    }
    function findNextTarget(ev) {
        if (ev.relatedTarget) return forceCast(ev.relatedTarget);
        if ('explicitOriginalTarget' in ev) return ev.explicitOriginalTarget;
        return null;
    }
    const className$o = ClassName('lbl');
    function createLabelNode(doc2, label) {
        const frag = doc2.createDocumentFragment();
        const lineNodes = label.split('\n').map((line)=>{
            return doc2.createTextNode(line);
        });
        lineNodes.forEach((lineNode, index)=>{
            if (index > 0) frag.appendChild(doc2.createElement('br'));
            frag.appendChild(lineNode);
        });
        return frag;
    }
    class LabelView {
        constructor(doc2, config5){
            this.element = doc2.createElement('div');
            this.element.classList.add(className$o());
            config5.viewProps.bindClassModifiers(this.element);
            const labelElem = doc2.createElement('div');
            labelElem.classList.add(className$o('l'));
            bindValueMap(config5.props, 'label', (value3)=>{
                if (isEmpty(value3)) this.element.classList.add(className$o(undefined, 'nol'));
                else {
                    this.element.classList.remove(className$o(undefined, 'nol'));
                    removeChildNodes(labelElem);
                    labelElem.appendChild(createLabelNode(doc2, value3));
                }
            });
            this.element.appendChild(labelElem);
            this.labelElement = labelElem;
            const valueElem = doc2.createElement('div');
            valueElem.classList.add(className$o('v'));
            this.element.appendChild(valueElem);
            this.valueElement = valueElem;
        }
    }
    class LabelController extends BladeController {
        constructor(doc3, config6){
            const viewProps = config6.valueController.viewProps;
            super(Object.assign(Object.assign({
            }, config6), {
                view: new LabelView(doc3, {
                    props: config6.props,
                    viewProps: viewProps
                }),
                viewProps: viewProps
            }));
            this.props = config6.props;
            this.valueController = config6.valueController;
            this.view.valueElement.appendChild(this.valueController.view.element);
        }
    }
    const ButtonBladePlugin = {
        id: 'button',
        type: 'blade',
        accept (params) {
            const p = ParamsParsers;
            const result = parseParams(params, {
                title: p.required.string,
                view: p.required.constant('button'),
                label: p.optional.string
            });
            return result ? {
                params: result
            } : null;
        },
        controller (args) {
            return new LabelController(args.document, {
                blade: args.blade,
                props: ValueMap.fromObject({
                    label: args.params.label
                }),
                valueController: new ButtonController(args.document, {
                    props: ValueMap.fromObject({
                        title: args.params.title
                    }),
                    viewProps: args.viewProps
                })
            });
        },
        api (args) {
            if (!(args.controller instanceof LabelController)) return null;
            if (!(args.controller.valueController instanceof ButtonController)) return null;
            return new ButtonApi(args.controller);
        }
    };
    class ValueBladeController extends BladeController {
        constructor(config7){
            super(config7);
            this.value = config7.value;
        }
    }
    function createBlade() {
        return new ValueMap({
            positions: createValue([], {
                equals: deepEqualsArray
            })
        });
    }
    class Foldable extends ValueMap {
        constructor(valueMap1){
            super(valueMap1);
        }
        static create(expanded) {
            const coreObj = {
                completed: true,
                expanded: expanded,
                expandedHeight: null,
                shouldFixHeight: false,
                temporaryExpanded: null
            };
            const core1 = ValueMap.createCore(coreObj);
            return new Foldable(core1);
        }
        get styleExpanded() {
            var _a3;
            return (_a3 = this.get('temporaryExpanded')) !== null && _a3 !== void 0 ? _a3 : this.get('expanded');
        }
        get styleHeight() {
            if (!this.styleExpanded) return '0';
            const exHeight = this.get('expandedHeight');
            if (this.get('shouldFixHeight') && !isEmpty(exHeight)) return `${exHeight}px`;
            return 'auto';
        }
        bindExpandedClass(elem, expandedClassName) {
            bindValueMap(this, 'expanded', ()=>{
                const expanded2 = this.styleExpanded;
                if (expanded2) elem.classList.add(expandedClassName);
                else elem.classList.remove(expandedClassName);
            });
        }
    }
    function computeExpandedFolderHeight(folder, containerElement) {
        let height = 0;
        disableTransitionTemporarily(containerElement, ()=>{
            folder.set('expandedHeight', null);
            folder.set('temporaryExpanded', true);
            forceReflow(containerElement);
            height = containerElement.clientHeight;
            folder.set('temporaryExpanded', null);
            forceReflow(containerElement);
        });
        return height;
    }
    function applyHeight(foldable, elem2) {
        elem2.style.height = foldable.styleHeight;
    }
    function bindFoldable(foldable, elem2) {
        foldable.value('expanded').emitter.on('beforechange', ()=>{
            foldable.set('completed', false);
            if (isEmpty(foldable.get('expandedHeight'))) foldable.set('expandedHeight', computeExpandedFolderHeight(foldable, elem2));
            foldable.set('shouldFixHeight', true);
            forceReflow(elem2);
        });
        foldable.emitter.on('change', ()=>{
            applyHeight(foldable, elem2);
        });
        applyHeight(foldable, elem2);
        elem2.addEventListener('transitionend', (ev)=>{
            if (ev.propertyName !== 'height') return;
            foldable.set('shouldFixHeight', false);
            foldable.set('expandedHeight', null);
            foldable.set('completed', true);
        });
    }
    class RackLikeApi extends BladeApi {
        constructor(controller1, rackApi){
            super(controller1);
            this.rackApi_ = rackApi;
        }
    }
    function addButtonAsBlade(api, params) {
        return api.addBlade(Object.assign(Object.assign({
        }, params), {
            view: 'button'
        }));
    }
    function addFolderAsBlade(api, params) {
        return api.addBlade(Object.assign(Object.assign({
        }, params), {
            view: 'folder'
        }));
    }
    function addSeparatorAsBlade(api, opt_params) {
        const params = opt_params || {
        };
        return api.addBlade(Object.assign(Object.assign({
        }, params), {
            view: 'separator'
        }));
    }
    function addTabAsBlade(api, params) {
        return api.addBlade(Object.assign(Object.assign({
        }, params), {
            view: 'tab'
        }));
    }
    class NestedOrderedSet {
        constructor(extract){
            this.emitter = new Emitter();
            this.items_ = [];
            this.cache_ = new Set();
            this.onSubListAdd_ = this.onSubListAdd_.bind(this);
            this.onSubListRemove_ = this.onSubListRemove_.bind(this);
            this.extract_ = extract;
        }
        get items() {
            return this.items_;
        }
        allItems() {
            return Array.from(this.cache_);
        }
        find(callback) {
            for (const item of this.allItems()){
                if (callback(item)) return item;
            }
            return null;
        }
        includes(item) {
            return this.cache_.has(item);
        }
        add(item, opt_index) {
            if (this.includes(item)) throw TpError.shouldNeverHappen();
            const index = opt_index !== undefined ? opt_index : this.items_.length;
            this.items_.splice(index, 0, item);
            this.cache_.add(item);
            const subList = this.extract_(item);
            if (subList) {
                subList.emitter.on('add', this.onSubListAdd_);
                subList.emitter.on('remove', this.onSubListRemove_);
                subList.allItems().forEach((item)=>{
                    this.cache_.add(item);
                });
            }
            this.emitter.emit('add', {
                index: index,
                item: item,
                root: this,
                target: this
            });
        }
        remove(item) {
            const index = this.items_.indexOf(item);
            if (index < 0) return;
            this.items_.splice(index, 1);
            this.cache_.delete(item);
            const subList = this.extract_(item);
            if (subList) {
                subList.emitter.off('add', this.onSubListAdd_);
                subList.emitter.off('remove', this.onSubListRemove_);
            }
            this.emitter.emit('remove', {
                index: index,
                item: item,
                root: this,
                target: this
            });
        }
        onSubListAdd_(ev) {
            this.cache_.add(ev.item);
            this.emitter.emit('add', {
                index: ev.index,
                item: ev.item,
                root: this,
                target: ev.target
            });
        }
        onSubListRemove_(ev) {
            this.cache_.delete(ev.item);
            this.emitter.emit('remove', {
                index: ev.index,
                item: ev.item,
                root: this,
                target: ev.target
            });
        }
    }
    class InputBindingApi extends BladeApi {
        constructor(controller2){
            super(controller2);
            this.onBindingChange_ = this.onBindingChange_.bind(this);
            this.emitter_ = new Emitter();
            this.controller_.binding.emitter.on('change', this.onBindingChange_);
        }
        get label() {
            return this.controller_.props.get('label');
        }
        set label(label) {
            this.controller_.props.set('label', label);
        }
        on(eventName, handler) {
            const bh = handler.bind(this);
            this.emitter_.on(eventName, (ev)=>{
                bh(ev.event);
            });
            return this;
        }
        refresh() {
            this.controller_.binding.read();
        }
        onBindingChange_(ev) {
            const value3 = ev.sender.target.read();
            this.emitter_.emit('change', {
                event: new TpChangeEvent(this, forceCast(value3), this.controller_.binding.target.presetKey, ev.options.last)
            });
        }
    }
    class InputBindingController extends LabelController {
        constructor(doc4, config8){
            super(doc4, config8);
            this.binding = config8.binding;
        }
    }
    class MonitorBindingApi extends BladeApi {
        constructor(controller3){
            super(controller3);
            this.onBindingUpdate_ = this.onBindingUpdate_.bind(this);
            this.emitter_ = new Emitter();
            this.controller_.binding.emitter.on('update', this.onBindingUpdate_);
        }
        get label() {
            return this.controller_.props.get('label');
        }
        set label(label) {
            this.controller_.props.set('label', label);
        }
        on(eventName, handler) {
            const bh = handler.bind(this);
            this.emitter_.on(eventName, (ev)=>{
                bh(ev.event);
            });
            return this;
        }
        refresh() {
            this.controller_.binding.read();
        }
        onBindingUpdate_(ev) {
            const value3 = ev.sender.target.read();
            this.emitter_.emit('update', {
                event: new TpUpdateEvent(this, forceCast(value3), this.controller_.binding.target.presetKey)
            });
        }
    }
    class MonitorBindingController extends LabelController {
        constructor(doc5, config9){
            super(doc5, config9);
            this.binding = config9.binding;
            this.viewProps.bindDisabled(this.binding.ticker);
            this.viewProps.handleDispose(()=>{
                this.binding.dispose();
            });
        }
    }
    function findSubBladeApiSet(api) {
        if (api instanceof RackApi) return api['apiSet_'];
        if (api instanceof RackLikeApi) return api['rackApi_']['apiSet_'];
        return null;
    }
    function getApiByController(apiSet, controller4) {
        const api = apiSet.find((api1)=>api1.controller_ === controller4
        );
        if (!api) throw TpError.shouldNeverHappen();
        return api;
    }
    function createBindingTarget(obj2, key3, opt_id1) {
        if (!BindingTarget.isBindable(obj2)) throw TpError.notBindable();
        return new BindingTarget(obj2, key3, opt_id1);
    }
    class RackApi extends BladeApi {
        constructor(controller4, pool){
            super(controller4);
            this.onRackAdd_ = this.onRackAdd_.bind(this);
            this.onRackRemove_ = this.onRackRemove_.bind(this);
            this.onRackInputChange_ = this.onRackInputChange_.bind(this);
            this.onRackMonitorUpdate_ = this.onRackMonitorUpdate_.bind(this);
            this.emitter_ = new Emitter();
            this.apiSet_ = new NestedOrderedSet(findSubBladeApiSet);
            this.pool_ = pool;
            const rack = this.controller_.rack;
            rack.emitter.on('add', this.onRackAdd_);
            rack.emitter.on('remove', this.onRackRemove_);
            rack.emitter.on('inputchange', this.onRackInputChange_);
            rack.emitter.on('monitorupdate', this.onRackMonitorUpdate_);
            rack.children.forEach((bc)=>{
                this.setUpApi_(bc);
            });
        }
        get children() {
            return this.controller_.rack.children.map((bc)=>getApiByController(this.apiSet_, bc)
            );
        }
        addInput(object, key, opt_params) {
            const params = opt_params || {
            };
            const doc6 = this.controller_.view.element.ownerDocument;
            const bc = this.pool_.createInput(doc6, createBindingTarget(object, key, params.presetKey), params);
            const api = new InputBindingApi(bc);
            return this.add(api, params.index);
        }
        addMonitor(object, key, opt_params) {
            const params = opt_params || {
            };
            const doc6 = this.controller_.view.element.ownerDocument;
            const bc = this.pool_.createMonitor(doc6, createBindingTarget(object, key), params);
            const api = new MonitorBindingApi(bc);
            return forceCast(this.add(api, params.index));
        }
        addFolder(params) {
            return addFolderAsBlade(this, params);
        }
        addButton(params) {
            return addButtonAsBlade(this, params);
        }
        addSeparator(opt_params) {
            return addSeparatorAsBlade(this, opt_params);
        }
        addTab(params) {
            return addTabAsBlade(this, params);
        }
        add(api, opt_index) {
            this.controller_.rack.add(api.controller_, opt_index);
            const gapi = this.apiSet_.find((a)=>a.controller_ === api.controller_
            );
            if (gapi) this.apiSet_.remove(gapi);
            this.apiSet_.add(api);
            return api;
        }
        remove(api) {
            this.controller_.rack.remove(api.controller_);
        }
        addBlade(params) {
            const doc6 = this.controller_.view.element.ownerDocument;
            const bc = this.pool_.createBlade(doc6, params);
            const api = this.pool_.createBladeApi(bc);
            return this.add(api, params.index);
        }
        on(eventName, handler) {
            const bh = handler.bind(this);
            this.emitter_.on(eventName, (ev)=>{
                bh(ev.event);
            });
            return this;
        }
        setUpApi_(bc) {
            const api = this.apiSet_.find((api1)=>api1.controller_ === bc
            );
            if (!api) this.apiSet_.add(this.pool_.createBladeApi(bc));
        }
        onRackAdd_(ev) {
            this.setUpApi_(ev.bladeController);
        }
        onRackRemove_(ev) {
            if (ev.isRoot) {
                const api = getApiByController(this.apiSet_, ev.bladeController);
                this.apiSet_.remove(api);
            }
        }
        onRackInputChange_(ev) {
            const bc = ev.bladeController;
            if (bc instanceof InputBindingController) {
                const api = getApiByController(this.apiSet_, bc);
                const binding = bc.binding;
                this.emitter_.emit('change', {
                    event: new TpChangeEvent(api, forceCast(binding.target.read()), binding.target.presetKey, ev.options.last)
                });
            } else if (bc instanceof ValueBladeController) {
                const api = getApiByController(this.apiSet_, bc);
                this.emitter_.emit('change', {
                    event: new TpChangeEvent(api, bc.value.rawValue, undefined, ev.options.last)
                });
            }
        }
        onRackMonitorUpdate_(ev) {
            if (!(ev.bladeController instanceof MonitorBindingController)) throw TpError.shouldNeverHappen();
            const api = getApiByController(this.apiSet_, ev.bladeController);
            const binding = ev.bladeController.binding;
            this.emitter_.emit('update', {
                event: new TpUpdateEvent(api, forceCast(binding.target.read()), binding.target.presetKey)
            });
        }
    }
    class FolderApi extends RackLikeApi {
        constructor(controller5, pool1){
            super(controller5, new RackApi(controller5.rackController, pool1));
            this.emitter_ = new Emitter();
            this.controller_.foldable.value('expanded').emitter.on('change', (ev)=>{
                this.emitter_.emit('fold', {
                    event: new TpFoldEvent(this, ev.sender.rawValue)
                });
            });
            this.rackApi_.on('change', (ev)=>{
                this.emitter_.emit('change', {
                    event: ev
                });
            });
            this.rackApi_.on('update', (ev)=>{
                this.emitter_.emit('update', {
                    event: ev
                });
            });
        }
        get expanded() {
            return this.controller_.foldable.get('expanded');
        }
        set expanded(expanded) {
            this.controller_.foldable.set('expanded', expanded);
        }
        get title() {
            return this.controller_.props.get('title');
        }
        set title(title) {
            this.controller_.props.set('title', title);
        }
        get children() {
            return this.rackApi_.children;
        }
        addInput(object, key, opt_params) {
            return this.rackApi_.addInput(object, key, opt_params);
        }
        addMonitor(object, key, opt_params) {
            return this.rackApi_.addMonitor(object, key, opt_params);
        }
        addFolder(params) {
            return this.rackApi_.addFolder(params);
        }
        addButton(params) {
            return this.rackApi_.addButton(params);
        }
        addSeparator(opt_params) {
            return this.rackApi_.addSeparator(opt_params);
        }
        addTab(params) {
            return this.rackApi_.addTab(params);
        }
        add(api, opt_index) {
            return this.rackApi_.add(api, opt_index);
        }
        remove(api) {
            this.rackApi_.remove(api);
        }
        addBlade(params) {
            return this.rackApi_.addBlade(params);
        }
        on(eventName, handler) {
            const bh = handler.bind(this);
            this.emitter_.on(eventName, (ev)=>{
                bh(ev.event);
            });
            return this;
        }
    }
    class RackLikeController extends BladeController {
        constructor(config10){
            super({
                blade: config10.blade,
                view: config10.view,
                viewProps: config10.rackController.viewProps
            });
            this.rackController = config10.rackController;
        }
    }
    class PlainView {
        constructor(doc6, config11){
            const className = ClassName(config11.viewName);
            this.element = doc6.createElement('div');
            this.element.classList.add(className());
            config11.viewProps.bindClassModifiers(this.element);
        }
    }
    function findInputBindingController(bcs, b) {
        for(let i = 0; i < bcs.length; i++){
            const bc = bcs[i];
            if (bc instanceof InputBindingController && bc.binding === b) return bc;
        }
        return null;
    }
    function findMonitorBindingController(bcs, b) {
        for(let i = 0; i < bcs.length; i++){
            const bc = bcs[i];
            if (bc instanceof MonitorBindingController && bc.binding === b) return bc;
        }
        return null;
    }
    function findValueBladeController(bcs, v) {
        for(let i = 0; i < bcs.length; i++){
            const bc = bcs[i];
            if (bc instanceof ValueBladeController && bc.value === v) return bc;
        }
        return null;
    }
    function findSubRack(bc) {
        if (bc instanceof RackController) return bc.rack;
        if (bc instanceof RackLikeController) return bc.rackController.rack;
        return null;
    }
    function findSubBladeControllerSet(bc) {
        const rack1 = findSubRack(bc);
        return rack1 ? rack1['bcSet_'] : null;
    }
    class BladeRack {
        constructor(blade){
            var _a4;
            this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this);
            this.onSetAdd_ = this.onSetAdd_.bind(this);
            this.onSetRemove_ = this.onSetRemove_.bind(this);
            this.onChildDispose_ = this.onChildDispose_.bind(this);
            this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this);
            this.onChildInputChange_ = this.onChildInputChange_.bind(this);
            this.onChildMonitorUpdate_ = this.onChildMonitorUpdate_.bind(this);
            this.onChildValueChange_ = this.onChildValueChange_.bind(this);
            this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this);
            this.onDescendantLayout_ = this.onDescendantLayout_.bind(this);
            this.onDescendantInputChange_ = this.onDescendantInputChange_.bind(this);
            this.onDescendantMonitorUpdate_ = this.onDescendantMonitorUpdate_.bind(this);
            this.emitter = new Emitter();
            this.blade_ = blade !== null && blade !== void 0 ? blade : null;
            (_a4 = this.blade_) === null || _a4 === void 0 || _a4.value('positions').emitter.on('change', this.onBladePositionsChange_);
            this.bcSet_ = new NestedOrderedSet(findSubBladeControllerSet);
            this.bcSet_.emitter.on('add', this.onSetAdd_);
            this.bcSet_.emitter.on('remove', this.onSetRemove_);
        }
        get children() {
            return this.bcSet_.items;
        }
        add(bc, opt_index) {
            if (bc.parent) bc.parent.remove(bc);
            bc['parent_'] = this;
            this.bcSet_.add(bc, opt_index);
        }
        remove(bc) {
            bc['parent_'] = null;
            this.bcSet_.remove(bc);
        }
        find(controllerClass) {
            return forceCast(this.bcSet_.allItems().filter((bc)=>{
                return bc instanceof controllerClass;
            }));
        }
        onSetAdd_(ev) {
            this.updatePositions_();
            const isRoot = ev.target === ev.root;
            this.emitter.emit('add', {
                bladeController: ev.item,
                index: ev.index,
                isRoot: isRoot,
                sender: this
            });
            if (!isRoot) return;
            const bc = ev.item;
            bc.viewProps.emitter.on('change', this.onChildViewPropsChange_);
            bc.blade.value('positions').emitter.on('change', this.onChildPositionsChange_);
            bc.viewProps.handleDispose(this.onChildDispose_);
            if (bc instanceof InputBindingController) bc.binding.emitter.on('change', this.onChildInputChange_);
            else if (bc instanceof MonitorBindingController) bc.binding.emitter.on('update', this.onChildMonitorUpdate_);
            else if (bc instanceof ValueBladeController) bc.value.emitter.on('change', this.onChildValueChange_);
            else {
                const rack1 = findSubRack(bc);
                if (rack1) {
                    const emitter = rack1.emitter;
                    emitter.on('layout', this.onDescendantLayout_);
                    emitter.on('inputchange', this.onDescendantInputChange_);
                    emitter.on('monitorupdate', this.onDescendantMonitorUpdate_);
                }
            }
        }
        onSetRemove_(ev) {
            this.updatePositions_();
            const isRoot = ev.target === ev.root;
            this.emitter.emit('remove', {
                bladeController: ev.item,
                isRoot: isRoot,
                sender: this
            });
            if (!isRoot) return;
            const bc = ev.item;
            if (bc instanceof InputBindingController) bc.binding.emitter.off('change', this.onChildInputChange_);
            else if (bc instanceof MonitorBindingController) bc.binding.emitter.off('update', this.onChildMonitorUpdate_);
            else if (bc instanceof ValueBladeController) bc.value.emitter.off('change', this.onChildValueChange_);
            else {
                const rack1 = findSubRack(bc);
                if (rack1) {
                    const emitter = rack1.emitter;
                    emitter.off('layout', this.onDescendantLayout_);
                    emitter.off('inputchange', this.onDescendantInputChange_);
                    emitter.off('monitorupdate', this.onDescendantMonitorUpdate_);
                }
            }
        }
        updatePositions_() {
            const visibleItems = this.bcSet_.items.filter((bc)=>!bc.viewProps.get('hidden')
            );
            const firstVisibleItem = visibleItems[0];
            const lastVisibleItem = visibleItems[visibleItems.length - 1];
            this.bcSet_.items.forEach((bc)=>{
                const ps = [];
                if (bc === firstVisibleItem) {
                    ps.push('first');
                    if (!this.blade_ || this.blade_.get('positions').includes('veryfirst')) ps.push('veryfirst');
                }
                if (bc === lastVisibleItem) {
                    ps.push('last');
                    if (!this.blade_ || this.blade_.get('positions').includes('verylast')) ps.push('verylast');
                }
                bc.blade.set('positions', ps);
            });
        }
        onChildPositionsChange_() {
            this.updatePositions_();
            this.emitter.emit('layout', {
                sender: this
            });
        }
        onChildViewPropsChange_(_ev) {
            this.updatePositions_();
            this.emitter.emit('layout', {
                sender: this
            });
        }
        onChildDispose_() {
            const disposedUcs = this.bcSet_.items.filter((bc)=>{
                return bc.viewProps.get('disposed');
            });
            disposedUcs.forEach((bc)=>{
                this.bcSet_.remove(bc);
            });
        }
        onChildInputChange_(ev) {
            const bc = findInputBindingController(this.find(InputBindingController), ev.sender);
            if (!bc) throw TpError.shouldNeverHappen();
            this.emitter.emit('inputchange', {
                bladeController: bc,
                options: ev.options,
                sender: this
            });
        }
        onChildMonitorUpdate_(ev) {
            const bc = findMonitorBindingController(this.find(MonitorBindingController), ev.sender);
            if (!bc) throw TpError.shouldNeverHappen();
            this.emitter.emit('monitorupdate', {
                bladeController: bc,
                sender: this
            });
        }
        onChildValueChange_(ev) {
            const bc = findValueBladeController(this.find(ValueBladeController), ev.sender);
            if (!bc) throw TpError.shouldNeverHappen();
            this.emitter.emit('inputchange', {
                bladeController: bc,
                options: ev.options,
                sender: this
            });
        }
        onDescendantLayout_(_) {
            this.updatePositions_();
            this.emitter.emit('layout', {
                sender: this
            });
        }
        onDescendantInputChange_(ev) {
            this.emitter.emit('inputchange', {
                bladeController: ev.bladeController,
                options: ev.options,
                sender: this
            });
        }
        onDescendantMonitorUpdate_(ev) {
            this.emitter.emit('monitorupdate', {
                bladeController: ev.bladeController,
                sender: this
            });
        }
        onBladePositionsChange_() {
            this.updatePositions_();
        }
    }
    class RackController extends BladeController {
        constructor(doc7, config12){
            super(Object.assign(Object.assign({
            }, config12), {
                view: new PlainView(doc7, {
                    viewName: 'brk',
                    viewProps: config12.viewProps
                })
            }));
            this.onRackAdd_ = this.onRackAdd_.bind(this);
            this.onRackRemove_ = this.onRackRemove_.bind(this);
            const rack1 = new BladeRack(config12.root ? undefined : config12.blade);
            rack1.emitter.on('add', this.onRackAdd_);
            rack1.emitter.on('remove', this.onRackRemove_);
            this.rack = rack1;
            this.viewProps.handleDispose(()=>{
                for(let i = this.rack.children.length - 1; i >= 0; i--){
                    const bc = this.rack.children[i];
                    bc.viewProps.set('disposed', true);
                }
            });
        }
        onRackAdd_(ev) {
            if (!ev.isRoot) return;
            insertElementAt(this.view.element, ev.bladeController.view.element, ev.index);
        }
        onRackRemove_(ev) {
            if (!ev.isRoot) return;
            removeElement(ev.bladeController.view.element);
        }
    }
    const bladeContainerClassName = ClassName('cnt');
    class FolderView {
        constructor(doc8, config13){
            this.className_ = ClassName(config13.viewName || 'fld');
            this.element = doc8.createElement('div');
            this.element.classList.add(this.className_(), bladeContainerClassName());
            config13.viewProps.bindClassModifiers(this.element);
            this.foldable_ = config13.foldable;
            this.foldable_.bindExpandedClass(this.element, this.className_(undefined, 'expanded'));
            bindValueMap(this.foldable_, 'completed', valueToClassName(this.element, this.className_(undefined, 'cpl')));
            const buttonElem1 = doc8.createElement('button');
            buttonElem1.classList.add(this.className_('b'));
            bindValueMap(config13.props, 'title', (title)=>{
                if (isEmpty(title)) this.element.classList.add(this.className_(undefined, 'not'));
                else this.element.classList.remove(this.className_(undefined, 'not'));
            });
            config13.viewProps.bindDisabled(buttonElem1);
            this.element.appendChild(buttonElem1);
            this.buttonElement = buttonElem1;
            const titleElem1 = doc8.createElement('div');
            titleElem1.classList.add(this.className_('t'));
            bindValueToTextContent(config13.props.value('title'), titleElem1);
            this.buttonElement.appendChild(titleElem1);
            this.titleElement = titleElem1;
            const markElem = doc8.createElement('div');
            markElem.classList.add(this.className_('m'));
            this.buttonElement.appendChild(markElem);
            const containerElem = config13.containerElement;
            containerElem.classList.add(this.className_('c'));
            this.element.appendChild(containerElem);
            this.containerElement = containerElem;
        }
    }
    class FolderController extends RackLikeController {
        constructor(doc9, config14){
            var _a5;
            const foldable = Foldable.create((_a5 = config14.expanded) !== null && _a5 !== void 0 ? _a5 : true);
            const rc = new RackController(doc9, {
                blade: config14.blade,
                root: config14.root,
                viewProps: config14.viewProps
            });
            super(Object.assign(Object.assign({
            }, config14), {
                rackController: rc,
                view: new FolderView(doc9, {
                    containerElement: rc.view.element,
                    foldable: foldable,
                    props: config14.props,
                    viewName: config14.root ? 'rot' : undefined,
                    viewProps: config14.viewProps
                })
            }));
            this.onTitleClick_ = this.onTitleClick_.bind(this);
            this.props = config14.props;
            this.foldable = foldable;
            bindFoldable(this.foldable, this.view.containerElement);
            this.view.buttonElement.addEventListener('click', this.onTitleClick_);
        }
        get document() {
            return this.view.element.ownerDocument;
        }
        onTitleClick_() {
            this.foldable.set('expanded', !this.foldable.get('expanded'));
        }
    }
    const FolderBladePlugin = {
        id: 'folder',
        type: 'blade',
        accept (params) {
            const p = ParamsParsers;
            const result = parseParams(params, {
                title: p.required.string,
                view: p.required.constant('folder'),
                expanded: p.optional.boolean
            });
            return result ? {
                params: result
            } : null;
        },
        controller (args) {
            return new FolderController(args.document, {
                blade: args.blade,
                expanded: args.params.expanded,
                props: ValueMap.fromObject({
                    title: args.params.title
                }),
                viewProps: args.viewProps
            });
        },
        api (args) {
            if (!(args.controller instanceof FolderController)) return null;
            return new FolderApi(args.controller, args.pool);
        }
    };
    class LabeledValueController extends ValueBladeController {
        constructor(doc10, config15){
            const viewProps1 = config15.valueController.viewProps;
            super(Object.assign(Object.assign({
            }, config15), {
                value: config15.valueController.value,
                view: new LabelView(doc10, {
                    props: config15.props,
                    viewProps: viewProps1
                }),
                viewProps: viewProps1
            }));
            this.props = config15.props;
            this.valueController = config15.valueController;
            this.view.valueElement.appendChild(this.valueController.view.element);
        }
    }
    class SeparatorApi extends BladeApi {
    }
    const className$n = ClassName('spr');
    class SeparatorView {
        constructor(doc11, config16){
            this.element = doc11.createElement('div');
            this.element.classList.add(className$n());
            config16.viewProps.bindClassModifiers(this.element);
            const hrElem = doc11.createElement('hr');
            hrElem.classList.add(className$n('r'));
            this.element.appendChild(hrElem);
        }
    }
    class SeparatorController extends BladeController {
        constructor(doc12, config17){
            super(Object.assign(Object.assign({
            }, config17), {
                view: new SeparatorView(doc12, {
                    viewProps: config17.viewProps
                })
            }));
        }
    }
    const SeparatorBladePlugin = {
        id: 'separator',
        type: 'blade',
        accept (params) {
            const p = ParamsParsers;
            const result = parseParams(params, {
                view: p.required.constant('separator')
            });
            return result ? {
                params: result
            } : null;
        },
        controller (args) {
            return new SeparatorController(args.document, {
                blade: args.blade,
                viewProps: args.viewProps
            });
        },
        api (args) {
            if (!(args.controller instanceof SeparatorController)) return null;
            return new SeparatorApi(args.controller);
        }
    };
    const className$m = ClassName('');
    function valueToModifier(elem2, modifier) {
        return valueToClassName(elem2, className$m(undefined, modifier));
    }
    class ViewProps extends ValueMap {
        constructor(valueMap2){
            super(valueMap2);
        }
        static create(opt_initialValue) {
            var _a6, _b;
            const initialValue3 = opt_initialValue !== null && opt_initialValue !== void 0 ? opt_initialValue : {
            };
            const coreObj = {
                disabled: (_a6 = initialValue3.disabled) !== null && _a6 !== void 0 ? _a6 : false,
                disposed: false,
                hidden: (_b = initialValue3.hidden) !== null && _b !== void 0 ? _b : false
            };
            const core1 = ValueMap.createCore(coreObj);
            return new ViewProps(core1);
        }
        bindClassModifiers(elem) {
            bindValueMap(this, 'disabled', valueToModifier(elem, 'disabled'));
            bindValueMap(this, 'hidden', valueToModifier(elem, 'hidden'));
        }
        bindDisabled(target) {
            bindValueMap(this, 'disabled', (disabled)=>{
                target.disabled = disabled;
            });
        }
        bindTabIndex(elem) {
            bindValueMap(this, 'disabled', (disabled)=>{
                elem.tabIndex = disabled ? -1 : 0;
            });
        }
        handleDispose(callback) {
            this.value('disposed').emitter.on('change', (disposed)=>{
                if (disposed) callback();
            });
        }
    }
    const className$l = ClassName('tbi');
    class TabItemView {
        constructor(doc13, config18){
            this.element = doc13.createElement('div');
            this.element.classList.add(className$l());
            config18.viewProps.bindClassModifiers(this.element);
            bindValueMap(config18.props, 'selected', (selected)=>{
                if (selected) this.element.classList.add(className$l(undefined, 'sel'));
                else this.element.classList.remove(className$l(undefined, 'sel'));
            });
            const buttonElem2 = doc13.createElement('button');
            buttonElem2.classList.add(className$l('b'));
            config18.viewProps.bindDisabled(buttonElem2);
            this.element.appendChild(buttonElem2);
            this.buttonElement = buttonElem2;
            const titleElem2 = doc13.createElement('div');
            titleElem2.classList.add(className$l('t'));
            bindValueToTextContent(config18.props.value('title'), titleElem2);
            this.buttonElement.appendChild(titleElem2);
            this.titleElement = titleElem2;
        }
    }
    class TabItemController {
        constructor(doc14, config19){
            this.emitter = new Emitter();
            this.onClick_ = this.onClick_.bind(this);
            this.props = config19.props;
            this.viewProps = config19.viewProps;
            this.view = new TabItemView(doc14, {
                props: config19.props,
                viewProps: config19.viewProps
            });
            this.view.buttonElement.addEventListener('click', this.onClick_);
        }
        onClick_() {
            this.emitter.emit('click', {
                sender: this
            });
        }
    }
    class TabPageController {
        constructor(doc15, config20){
            this.onItemClick_ = this.onItemClick_.bind(this);
            this.ic_ = new TabItemController(doc15, {
                props: config20.itemProps,
                viewProps: ViewProps.create()
            });
            this.ic_.emitter.on('click', this.onItemClick_);
            this.cc_ = new RackController(doc15, {
                blade: createBlade(),
                viewProps: ViewProps.create()
            });
            this.props = config20.props;
            bindValueMap(this.props, 'selected', (selected)=>{
                this.itemController.props.set('selected', selected);
                this.contentController.viewProps.set('hidden', !selected);
            });
        }
        get itemController() {
            return this.ic_;
        }
        get contentController() {
            return this.cc_;
        }
        onItemClick_() {
            this.props.set('selected', true);
        }
    }
    class TabPageApi {
        constructor(controller6, contentRackApi){
            this.controller_ = controller6;
            this.rackApi_ = contentRackApi;
        }
        get title() {
            var _a7;
            return (_a7 = this.controller_.itemController.props.get('title')) !== null && _a7 !== void 0 ? _a7 : '';
        }
        set title(title) {
            this.controller_.itemController.props.set('title', title);
        }
        get selected() {
            return this.controller_.props.get('selected');
        }
        set selected(selected) {
            this.controller_.props.set('selected', selected);
        }
        get children() {
            return this.rackApi_.children;
        }
        addButton(params) {
            return this.rackApi_.addButton(params);
        }
        addFolder(params) {
            return this.rackApi_.addFolder(params);
        }
        addSeparator(opt_params) {
            return this.rackApi_.addSeparator(opt_params);
        }
        addTab(params) {
            return this.rackApi_.addTab(params);
        }
        add(api, opt_index) {
            this.rackApi_.add(api, opt_index);
        }
        remove(api) {
            this.rackApi_.remove(api);
        }
        addInput(object, key, opt_params) {
            return this.rackApi_.addInput(object, key, opt_params);
        }
        addMonitor(object, key, opt_params) {
            return this.rackApi_.addMonitor(object, key, opt_params);
        }
        addBlade(params) {
            return this.rackApi_.addBlade(params);
        }
    }
    class TabApi extends RackLikeApi {
        constructor(controller7, pool2){
            super(controller7, new RackApi(controller7.rackController, pool2));
            this.onPageAdd_ = this.onPageAdd_.bind(this);
            this.onPageRemove_ = this.onPageRemove_.bind(this);
            this.emitter_ = new Emitter();
            this.pageApiMap_ = new Map();
            this.rackApi_.on('change', (ev)=>{
                this.emitter_.emit('change', {
                    event: ev
                });
            });
            this.rackApi_.on('update', (ev)=>{
                this.emitter_.emit('update', {
                    event: ev
                });
            });
            this.controller_.pageSet.emitter.on('add', this.onPageAdd_);
            this.controller_.pageSet.emitter.on('remove', this.onPageRemove_);
            this.controller_.pageSet.items.forEach((pc)=>{
                this.setUpPageApi_(pc);
            });
        }
        get pages() {
            return this.controller_.pageSet.items.map((pc)=>{
                const api = this.pageApiMap_.get(pc);
                if (!api) throw TpError.shouldNeverHappen();
                return api;
            });
        }
        addPage(params) {
            const doc16 = this.controller_.view.element.ownerDocument;
            const pc = new TabPageController(doc16, {
                itemProps: ValueMap.fromObject({
                    selected: false,
                    title: params.title
                }),
                props: ValueMap.fromObject({
                    selected: false
                })
            });
            this.controller_.add(pc, params.index);
            const api = this.pageApiMap_.get(pc);
            if (!api) throw TpError.shouldNeverHappen();
            return api;
        }
        removePage(index) {
            this.controller_.remove(index);
        }
        on(eventName, handler) {
            const bh = handler.bind(this);
            this.emitter_.on(eventName, (ev)=>{
                bh(ev.event);
            });
            return this;
        }
        setUpPageApi_(pc) {
            const rackApi1 = this.rackApi_['apiSet_'].find((api)=>api.controller_ === pc.contentController
            );
            if (!rackApi1) throw TpError.shouldNeverHappen();
            const api = new TabPageApi(pc, rackApi1);
            this.pageApiMap_.set(pc, api);
        }
        onPageAdd_(ev) {
            this.setUpPageApi_(ev.item);
        }
        onPageRemove_(ev) {
            const api = this.pageApiMap_.get(ev.item);
            if (!api) throw TpError.shouldNeverHappen();
            this.pageApiMap_.delete(ev.item);
        }
    }
    const className$k = ClassName('tab');
    class TabView {
        constructor(doc16, config21){
            this.element = doc16.createElement('div');
            this.element.classList.add(className$k(), bladeContainerClassName());
            config21.viewProps.bindClassModifiers(this.element);
            bindValue(config21.empty, valueToClassName(this.element, className$k(undefined, 'nop')));
            const itemsElem = doc16.createElement('div');
            itemsElem.classList.add(className$k('i'));
            this.element.appendChild(itemsElem);
            this.itemsElement = itemsElem;
            const contentsElem = config21.contentsElement;
            contentsElem.classList.add(className$k('c'));
            this.element.appendChild(contentsElem);
            this.contentsElement = contentsElem;
        }
    }
    class TabController extends RackLikeController {
        constructor(doc17, config22){
            const cr = new RackController(doc17, {
                blade: config22.blade,
                viewProps: config22.viewProps
            });
            const empty = createValue(true);
            super({
                blade: config22.blade,
                rackController: cr,
                view: new TabView(doc17, {
                    contentsElement: cr.view.element,
                    empty: empty,
                    viewProps: config22.viewProps
                })
            });
            this.onPageAdd_ = this.onPageAdd_.bind(this);
            this.onPageRemove_ = this.onPageRemove_.bind(this);
            this.onPageSelectedChange_ = this.onPageSelectedChange_.bind(this);
            this.pageSet_ = new NestedOrderedSet(()=>null
            );
            this.pageSet_.emitter.on('add', this.onPageAdd_);
            this.pageSet_.emitter.on('remove', this.onPageRemove_);
            this.empty_ = empty;
            this.applyPages_();
        }
        get pageSet() {
            return this.pageSet_;
        }
        add(pc, opt_index) {
            this.pageSet_.add(pc, opt_index !== null && opt_index !== void 0 ? opt_index : this.pageSet_.items.length);
        }
        remove(index) {
            this.pageSet_.remove(this.pageSet_.items[index]);
        }
        applyPages_() {
            this.keepSelection_();
            this.empty_.rawValue = this.pageSet_.items.length === 0;
        }
        onPageAdd_(ev) {
            const pc = ev.item;
            insertElementAt(this.view.itemsElement, pc.itemController.view.element, ev.index);
            this.rackController.rack.add(pc.contentController, ev.index);
            pc.props.value('selected').emitter.on('change', this.onPageSelectedChange_);
            this.applyPages_();
        }
        onPageRemove_(ev) {
            const pc = ev.item;
            removeElement(pc.itemController.view.element);
            this.rackController.rack.remove(pc.contentController);
            pc.props.value('selected').emitter.off('change', this.onPageSelectedChange_);
            this.applyPages_();
        }
        keepSelection_() {
            if (this.pageSet_.items.length === 0) return;
            const firstSelIndex = this.pageSet_.items.findIndex((pc)=>pc.props.get('selected')
            );
            if (firstSelIndex < 0) this.pageSet_.items.forEach((pc, i)=>{
                pc.props.set('selected', i === 0);
            });
            else this.pageSet_.items.forEach((pc, i)=>{
                pc.props.set('selected', i === firstSelIndex);
            });
        }
        onPageSelectedChange_(ev) {
            if (ev.rawValue) {
                const index = this.pageSet_.items.findIndex((pc)=>pc.props.value('selected') === ev.sender
                );
                this.pageSet_.items.forEach((pc, i)=>{
                    pc.props.set('selected', i === index);
                });
            } else this.keepSelection_();
        }
    }
    const TabBladePlugin = {
        id: 'tab',
        type: 'blade',
        accept (params) {
            const p = ParamsParsers;
            const result = parseParams(params, {
                pages: p.required.array(p.required.object({
                    title: p.required.string
                })),
                view: p.required.constant('tab')
            });
            if (!result || result.pages.length === 0) return null;
            return {
                params: result
            };
        },
        controller (args) {
            const c = new TabController(args.document, {
                blade: args.blade,
                viewProps: args.viewProps
            });
            args.params.pages.forEach((p)=>{
                const pc = new TabPageController(args.document, {
                    itemProps: ValueMap.fromObject({
                        selected: false,
                        title: p.title
                    }),
                    props: ValueMap.fromObject({
                        selected: false
                    })
                });
                c.add(pc);
            });
            return c;
        },
        api (args) {
            if (!(args.controller instanceof TabController)) return null;
            return new TabApi(args.controller, args.pool);
        }
    };
    function createBladeController(plugin, args) {
        const ac = plugin.accept(args.params);
        if (!ac) return null;
        const disabled = ParamsParsers.optional.boolean(args.params['disabled']).value;
        const hidden = ParamsParsers.optional.boolean(args.params['hidden']).value;
        return plugin.controller({
            blade: createBlade(),
            document: args.document,
            params: forceCast(Object.assign(Object.assign({
            }, ac.params), {
                disabled: disabled,
                hidden: hidden
            })),
            viewProps: ViewProps.create({
                disabled: disabled,
                hidden: hidden
            })
        });
    }
    class ManualTicker {
        constructor(){
            this.disabled = false;
            this.emitter = new Emitter();
        }
        dispose() {
        }
        tick() {
            if (this.disabled) return;
            this.emitter.emit('tick', {
                sender: this
            });
        }
    }
    class IntervalTicker {
        constructor(doc18, interval){
            this.disabled_ = false;
            this.timerId_ = null;
            this.onTick_ = this.onTick_.bind(this);
            this.doc_ = doc18;
            this.emitter = new Emitter();
            this.interval_ = interval;
            this.setTimer_();
        }
        get disabled() {
            return this.disabled_;
        }
        set disabled(inactive) {
            this.disabled_ = inactive;
            if (this.disabled_) this.clearTimer_();
            else this.setTimer_();
        }
        dispose() {
            this.clearTimer_();
        }
        clearTimer_() {
            if (this.timerId_ === null) return;
            const win = this.doc_.defaultView;
            if (win) win.clearInterval(this.timerId_);
            this.timerId_ = null;
        }
        setTimer_() {
            this.clearTimer_();
            if (this.interval_ <= 0) return;
            const win = this.doc_.defaultView;
            if (win) this.timerId_ = win.setInterval(this.onTick_, this.interval_);
        }
        onTick_() {
            if (this.disabled_) return;
            this.emitter.emit('tick', {
                sender: this
            });
        }
    }
    class CompositeConstraint {
        constructor(constraints){
            this.constraints = constraints;
        }
        constrain(value) {
            return this.constraints.reduce((result, c)=>{
                return c.constrain(result);
            }, value);
        }
    }
    function findConstraint(c, constraintClass) {
        if (c instanceof constraintClass) return c;
        if (c instanceof CompositeConstraint) {
            const result = c.constraints.reduce((tmpResult, sc)=>{
                if (tmpResult) return tmpResult;
                return sc instanceof constraintClass ? sc : null;
            }, null);
            if (result) return result;
        }
        return null;
    }
    class ListConstraint {
        constructor(options1){
            this.options = options1;
        }
        constrain(value) {
            const opts = this.options;
            if (opts.length === 0) return value;
            const matched = opts.filter((item)=>{
                return item.value === value;
            }).length > 0;
            return matched ? value : opts[0].value;
        }
    }
    class RangeConstraint {
        constructor(config23){
            this.maxValue = config23.max;
            this.minValue = config23.min;
        }
        constrain(value) {
            let result = value;
            if (!isEmpty(this.minValue)) result = Math.max(result, this.minValue);
            if (!isEmpty(this.maxValue)) result = Math.min(result, this.maxValue);
            return result;
        }
    }
    class StepConstraint {
        constructor(step){
            this.step = step;
        }
        constrain(value) {
            const r = value < 0 ? -Math.round(-value / this.step) : Math.round(value / this.step);
            return r * this.step;
        }
    }
    const className$j = ClassName('lst');
    class ListView {
        constructor(doc19, config24){
            this.onValueChange_ = this.onValueChange_.bind(this);
            this.props_ = config24.props;
            this.element = doc19.createElement('div');
            this.element.classList.add(className$j());
            config24.viewProps.bindClassModifiers(this.element);
            const selectElem = doc19.createElement('select');
            selectElem.classList.add(className$j('s'));
            bindValueMap(this.props_, 'options', (opts)=>{
                removeChildElements(selectElem);
                opts.forEach((item, index)=>{
                    const optionElem = doc19.createElement('option');
                    optionElem.dataset.index = String(index);
                    optionElem.textContent = item.text;
                    optionElem.value = String(item.value);
                    selectElem.appendChild(optionElem);
                });
            });
            config24.viewProps.bindDisabled(selectElem);
            this.element.appendChild(selectElem);
            this.selectElement = selectElem;
            const markElem1 = doc19.createElement('div');
            markElem1.classList.add(className$j('m'));
            markElem1.appendChild(createSvgIconElement(doc19, 'dropdown'));
            this.element.appendChild(markElem1);
            config24.value.emitter.on('change', this.onValueChange_);
            this.value_ = config24.value;
            this.update_();
        }
        update_() {
            this.selectElement.value = String(this.value_.rawValue);
        }
        onValueChange_() {
            this.update_();
        }
    }
    class ListController {
        constructor(doc20, config25){
            this.onSelectChange_ = this.onSelectChange_.bind(this);
            this.props = config25.props;
            this.value = config25.value;
            this.viewProps = config25.viewProps;
            this.view = new ListView(doc20, {
                props: this.props,
                value: this.value,
                viewProps: this.viewProps
            });
            this.view.selectElement.addEventListener('change', this.onSelectChange_);
        }
        onSelectChange_(e) {
            const selectElem1 = forceCast(e.currentTarget);
            const optElem = selectElem1.selectedOptions.item(0);
            if (!optElem) return;
            const itemIndex = Number(optElem.dataset.index);
            this.value.rawValue = this.props.get('options')[itemIndex].value;
        }
    }
    const className$i = ClassName('pop');
    class PopupView {
        constructor(doc21, config26){
            this.element = doc21.createElement('div');
            this.element.classList.add(className$i());
            config26.viewProps.bindClassModifiers(this.element);
            bindValue(config26.shows, valueToClassName(this.element, className$i(undefined, 'v')));
        }
    }
    class PopupController {
        constructor(doc22, config27){
            this.shows = createValue(false);
            this.viewProps = config27.viewProps;
            this.view = new PopupView(doc22, {
                shows: this.shows,
                viewProps: this.viewProps
            });
        }
    }
    const className$h = ClassName('txt');
    class TextView {
        constructor(doc23, config28){
            this.onChange_ = this.onChange_.bind(this);
            this.element = doc23.createElement('div');
            this.element.classList.add(className$h());
            config28.viewProps.bindClassModifiers(this.element);
            this.props_ = config28.props;
            this.props_.emitter.on('change', this.onChange_);
            const inputElem = doc23.createElement('input');
            inputElem.classList.add(className$h('i'));
            inputElem.type = 'text';
            config28.viewProps.bindDisabled(inputElem);
            this.element.appendChild(inputElem);
            this.inputElement = inputElem;
            config28.value.emitter.on('change', this.onChange_);
            this.value_ = config28.value;
            this.refresh();
        }
        refresh() {
            const formatter = this.props_.get('formatter');
            this.inputElement.value = formatter(this.value_.rawValue);
        }
        onChange_() {
            this.refresh();
        }
    }
    class TextController {
        constructor(doc24, config29){
            this.onInputChange_ = this.onInputChange_.bind(this);
            this.parser_ = config29.parser;
            this.props = config29.props;
            this.value = config29.value;
            this.viewProps = config29.viewProps;
            this.view = new TextView(doc24, {
                props: config29.props,
                value: this.value,
                viewProps: this.viewProps
            });
            this.view.inputElement.addEventListener('change', this.onInputChange_);
        }
        onInputChange_(e) {
            const inputElem1 = forceCast(e.currentTarget);
            const value3 = inputElem1.value;
            const parsedValue = this.parser_(value3);
            if (!isEmpty(parsedValue)) this.value.rawValue = parsedValue;
            this.view.refresh();
        }
    }
    function boolToString(value3) {
        return String(value3);
    }
    function boolFromUnknown(value3) {
        if (value3 === 'false') return false;
        return !!value3;
    }
    function BooleanFormatter(value3) {
        return boolToString(value3);
    }
    class NumberLiteralNode {
        constructor(text1){
            this.text = text1;
        }
        evaluate() {
            return Number(this.text);
        }
        toString() {
            return this.text;
        }
    }
    const BINARY_OPERATION_MAP = {
        '**': (v1, v2)=>Math.pow(v1, v2)
        ,
        '*': (v1, v2)=>v1 * v2
        ,
        '/': (v1, v2)=>v1 / v2
        ,
        '%': (v1, v2)=>v1 % v2
        ,
        '+': (v1, v2)=>v1 + v2
        ,
        '-': (v1, v2)=>v1 - v2
        ,
        '<<': (v1, v2)=>v1 << v2
        ,
        '>>': (v1, v2)=>v1 >> v2
        ,
        '>>>': (v1, v2)=>v1 >>> v2
        ,
        '&': (v1, v2)=>v1 & v2
        ,
        '^': (v1, v2)=>v1 ^ v2
        ,
        '|': (v1, v2)=>v1 | v2
    };
    class BinaryOperationNode {
        constructor(operator, left, right){
            this.left = left;
            this.operator = operator;
            this.right = right;
        }
        evaluate() {
            const op = BINARY_OPERATION_MAP[this.operator];
            if (!op) throw new Error(`unexpected binary operator: '${this.operator}`);
            return op(this.left.evaluate(), this.right.evaluate());
        }
        toString() {
            return [
                'b(',
                this.left.toString(),
                this.operator,
                this.right.toString(),
                ')', 
            ].join(' ');
        }
    }
    const UNARY_OPERATION_MAP = {
        '+': (v)=>v
        ,
        '-': (v)=>-v
        ,
        '~': (v)=>~v
    };
    class UnaryOperationNode {
        constructor(operator1, expr){
            this.operator = operator1;
            this.expression = expr;
        }
        evaluate() {
            const op = UNARY_OPERATION_MAP[this.operator];
            if (!op) throw new Error(`unexpected unary operator: '${this.operator}`);
            return op(this.expression.evaluate());
        }
        toString() {
            return [
                'u(',
                this.operator,
                this.expression.toString(),
                ')'
            ].join(' ');
        }
    }
    function combineReader(parsers) {
        return (text2, cursor)=>{
            for(let i = 0; i < parsers.length; i++){
                const result = parsers[i](text2, cursor);
                if (result !== '') return result;
            }
            return '';
        };
    }
    function readWhitespace(text2, cursor) {
        var _a8;
        const m = text2.substr(cursor).match(/^\s+/);
        return (_a8 = m && m[0]) !== null && _a8 !== void 0 ? _a8 : '';
    }
    function readNonZeroDigit(text2, cursor) {
        const ch = text2.substr(cursor, 1);
        return ch.match(/^[1-9]$/) ? ch : '';
    }
    function readDecimalDigits(text2, cursor) {
        var _a8;
        const m = text2.substr(cursor).match(/^[0-9]+/);
        return (_a8 = m && m[0]) !== null && _a8 !== void 0 ? _a8 : '';
    }
    function readSignedInteger(text2, cursor) {
        const ds = readDecimalDigits(text2, cursor);
        if (ds !== '') return ds;
        const sign = text2.substr(cursor, 1);
        cursor += 1;
        if (sign !== '-' && sign !== '+') return '';
        const sds = readDecimalDigits(text2, cursor);
        if (sds === '') return '';
        return sign + sds;
    }
    function readExponentPart(text2, cursor) {
        const e = text2.substr(cursor, 1);
        cursor += 1;
        if (e.toLowerCase() !== 'e') return '';
        const si = readSignedInteger(text2, cursor);
        if (si === '') return '';
        return e + si;
    }
    function readDecimalIntegerLiteral(text2, cursor) {
        const ch = text2.substr(cursor, 1);
        if (ch === '0') return ch;
        const nzd = readNonZeroDigit(text2, cursor);
        cursor += nzd.length;
        if (nzd === '') return '';
        return nzd + readDecimalDigits(text2, cursor);
    }
    function readDecimalLiteral1(text2, cursor) {
        const dil = readDecimalIntegerLiteral(text2, cursor);
        cursor += dil.length;
        if (dil === '') return '';
        const dot = text2.substr(cursor, 1);
        cursor += dot.length;
        if (dot !== '.') return '';
        const dds = readDecimalDigits(text2, cursor);
        cursor += dds.length;
        return dil + dot + dds + readExponentPart(text2, cursor);
    }
    function readDecimalLiteral2(text2, cursor) {
        const dot = text2.substr(cursor, 1);
        cursor += dot.length;
        if (dot !== '.') return '';
        const dds = readDecimalDigits(text2, cursor);
        cursor += dds.length;
        if (dds === '') return '';
        return dot + dds + readExponentPart(text2, cursor);
    }
    function readDecimalLiteral3(text2, cursor) {
        const dil = readDecimalIntegerLiteral(text2, cursor);
        cursor += dil.length;
        if (dil === '') return '';
        return dil + readExponentPart(text2, cursor);
    }
    const readDecimalLiteral = combineReader([
        readDecimalLiteral1,
        readDecimalLiteral2,
        readDecimalLiteral3, 
    ]);
    function parseBinaryDigits(text2, cursor) {
        var _a8;
        const m = text2.substr(cursor).match(/^[01]+/);
        return (_a8 = m && m[0]) !== null && _a8 !== void 0 ? _a8 : '';
    }
    function readBinaryIntegerLiteral(text2, cursor) {
        const prefix = text2.substr(cursor, 2);
        cursor += prefix.length;
        if (prefix.toLowerCase() !== '0b') return '';
        const bds = parseBinaryDigits(text2, cursor);
        if (bds === '') return '';
        return prefix + bds;
    }
    function readOctalDigits(text2, cursor) {
        var _a8;
        const m = text2.substr(cursor).match(/^[0-7]+/);
        return (_a8 = m && m[0]) !== null && _a8 !== void 0 ? _a8 : '';
    }
    function readOctalIntegerLiteral(text2, cursor) {
        const prefix = text2.substr(cursor, 2);
        cursor += prefix.length;
        if (prefix.toLowerCase() !== '0o') return '';
        const ods = readOctalDigits(text2, cursor);
        if (ods === '') return '';
        return prefix + ods;
    }
    function readHexDigits(text2, cursor) {
        var _a8;
        const m = text2.substr(cursor).match(/^[0-9a-f]+/i);
        return (_a8 = m && m[0]) !== null && _a8 !== void 0 ? _a8 : '';
    }
    function readHexIntegerLiteral(text2, cursor) {
        const prefix = text2.substr(cursor, 2);
        cursor += prefix.length;
        if (prefix.toLowerCase() !== '0x') return '';
        const hds = readHexDigits(text2, cursor);
        if (hds === '') return '';
        return prefix + hds;
    }
    const readNonDecimalIntegerLiteral = combineReader([
        readBinaryIntegerLiteral,
        readOctalIntegerLiteral,
        readHexIntegerLiteral, 
    ]);
    const readNumericLiteral = combineReader([
        readNonDecimalIntegerLiteral,
        readDecimalLiteral, 
    ]);
    function parseLiteral(text2, cursor) {
        const num = readNumericLiteral(text2, cursor);
        cursor += num.length;
        if (num === '') return null;
        return {
            evaluable: new NumberLiteralNode(num),
            cursor: cursor
        };
    }
    function parseParenthesizedExpression(text2, cursor) {
        const op = text2.substr(cursor, 1);
        cursor += op.length;
        if (op !== '(') return null;
        const expr1 = parseExpression(text2, cursor);
        if (!expr1) return null;
        cursor = expr1.cursor;
        cursor += readWhitespace(text2, cursor).length;
        const cl = text2.substr(cursor, 1);
        cursor += cl.length;
        if (cl !== ')') return null;
        return {
            evaluable: expr1.evaluable,
            cursor: cursor
        };
    }
    function parsePrimaryExpression(text2, cursor) {
        return parseLiteral(text2, cursor) || parseParenthesizedExpression(text2, cursor);
    }
    function parseUnaryExpression(text2, cursor) {
        const expr1 = parsePrimaryExpression(text2, cursor);
        if (expr1) return expr1;
        const op = text2.substr(cursor, 1);
        cursor += op.length;
        if (op !== '+' && op !== '-' && op !== '~') return null;
        const num = parseUnaryExpression(text2, cursor);
        if (!num) return null;
        cursor = num.cursor;
        return {
            cursor: cursor,
            evaluable: new UnaryOperationNode(op, num.evaluable)
        };
    }
    function readBinaryOperator(ops, text2, cursor) {
        cursor += readWhitespace(text2, cursor).length;
        const op = ops.filter((op1)=>text2.startsWith(op1, cursor)
        )[0];
        if (!op) return null;
        cursor += op.length;
        cursor += readWhitespace(text2, cursor).length;
        return {
            cursor: cursor,
            operator: op
        };
    }
    function createBinaryOperationExpressionParser(exprParser, ops) {
        return (text2, cursor)=>{
            const firstExpr = exprParser(text2, cursor);
            if (!firstExpr) return null;
            cursor = firstExpr.cursor;
            let expr1 = firstExpr.evaluable;
            for(;;){
                const op = readBinaryOperator(ops, text2, cursor);
                if (!op) break;
                cursor = op.cursor;
                const nextExpr = exprParser(text2, cursor);
                if (!nextExpr) return null;
                cursor = nextExpr.cursor;
                expr1 = new BinaryOperationNode(op.operator, expr1, nextExpr.evaluable);
            }
            return expr1 ? {
                cursor: cursor,
                evaluable: expr1
            } : null;
        };
    }
    const parseBinaryOperationExpression = [
        [
            '**'
        ],
        [
            '*',
            '/',
            '%'
        ],
        [
            '+',
            '-'
        ],
        [
            '<<',
            '>>>',
            '>>'
        ],
        [
            '&'
        ],
        [
            '^'
        ],
        [
            '|'
        ], 
    ].reduce((parser, ops)=>{
        return createBinaryOperationExpressionParser(parser, ops);
    }, parseUnaryExpression);
    function parseExpression(text2, cursor) {
        cursor += readWhitespace(text2, cursor).length;
        return parseBinaryOperationExpression(text2, cursor);
    }
    function parseEcmaNumberExpression(text2) {
        const expr1 = parseExpression(text2, 0);
        if (!expr1) return null;
        const cursor = expr1.cursor + readWhitespace(text2, expr1.cursor).length;
        if (cursor !== text2.length) return null;
        return expr1.evaluable;
    }
    function parseNumber(text2) {
        var _a8;
        const r = parseEcmaNumberExpression(text2);
        return (_a8 = r === null || r === void 0 ? void 0 : r.evaluate()) !== null && _a8 !== void 0 ? _a8 : null;
    }
    function numberFromUnknown(value3) {
        if (typeof value3 === 'number') return value3;
        if (typeof value3 === 'string') {
            const pv = parseNumber(value3);
            if (!isEmpty(pv)) return pv;
        }
        return 0;
    }
    function numberToString(value3) {
        return String(value3);
    }
    function createNumberFormatter(digits) {
        return (value3)=>{
            return value3.toFixed(Math.max(Math.min(digits, 20), 0));
        };
    }
    const innerFormatter = createNumberFormatter(0);
    function formatPercentage(value3) {
        return innerFormatter(value3) + '%';
    }
    function stringFromUnknown(value3) {
        return String(value3);
    }
    function formatString(value3) {
        return value3;
    }
    function fillBuffer(buffer, bufferSize) {
        while(buffer.length < bufferSize)buffer.push(undefined);
    }
    function initializeBuffer(bufferSize) {
        const buffer = [];
        fillBuffer(buffer, bufferSize);
        return createValue(buffer);
    }
    function createTrimmedBuffer(buffer) {
        const index = buffer.indexOf(undefined);
        return forceCast(index < 0 ? buffer : buffer.slice(0, index));
    }
    function createPushedBuffer(buffer, newValue) {
        const newBuffer = [
            ...createTrimmedBuffer(buffer),
            newValue
        ];
        if (newBuffer.length > buffer.length) newBuffer.splice(0, newBuffer.length - buffer.length);
        else fillBuffer(newBuffer, buffer.length);
        return newBuffer;
    }
    function connectValues({ primary , secondary , forward , backward ,  }) {
        let changing = false;
        function preventFeedback(callback) {
            if (changing) return;
            changing = true;
            callback();
            changing = false;
        }
        primary.emitter.on('change', (ev)=>{
            preventFeedback(()=>{
                secondary.setRawValue(forward(primary, secondary), ev.options);
            });
        });
        secondary.emitter.on('change', (ev)=>{
            preventFeedback(()=>{
                primary.setRawValue(backward(primary, secondary), ev.options);
            });
            preventFeedback(()=>{
                secondary.setRawValue(forward(primary, secondary), ev.options);
            });
        });
        preventFeedback(()=>{
            secondary.setRawValue(forward(primary, secondary), {
                forceEmit: false,
                last: true
            });
        });
    }
    function getStepForKey(baseStep, keys) {
        const step1 = baseStep * (keys.altKey ? 0.1 : 1) * (keys.shiftKey ? 10 : 1);
        if (keys.upKey) return +step1;
        else if (keys.downKey) return -step1;
        return 0;
    }
    function getVerticalStepKeys(ev) {
        return {
            altKey: ev.altKey,
            downKey: ev.key === 'ArrowDown',
            shiftKey: ev.shiftKey,
            upKey: ev.key === 'ArrowUp'
        };
    }
    function getHorizontalStepKeys(ev) {
        return {
            altKey: ev.altKey,
            downKey: ev.key === 'ArrowLeft',
            shiftKey: ev.shiftKey,
            upKey: ev.key === 'ArrowRight'
        };
    }
    function isVerticalArrowKey(key3) {
        return key3 === 'ArrowUp' || key3 === 'ArrowDown';
    }
    function isArrowKey(key3) {
        return isVerticalArrowKey(key3) || key3 === 'ArrowLeft' || key3 === 'ArrowRight';
    }
    function computeOffset$1(ev, elem2) {
        const win = elem2.ownerDocument.defaultView;
        const rect = elem2.getBoundingClientRect();
        return {
            x: ev.pageX - ((win && win.scrollX || 0) + rect.left),
            y: ev.pageY - ((win && win.scrollY || 0) + rect.top)
        };
    }
    class PointerHandler {
        constructor(element){
            this.lastTouch_ = null;
            this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this);
            this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this);
            this.onMouseDown_ = this.onMouseDown_.bind(this);
            this.onTouchEnd_ = this.onTouchEnd_.bind(this);
            this.onTouchMove_ = this.onTouchMove_.bind(this);
            this.onTouchStart_ = this.onTouchStart_.bind(this);
            this.elem_ = element;
            this.emitter = new Emitter();
            element.addEventListener('touchstart', this.onTouchStart_);
            element.addEventListener('touchmove', this.onTouchMove_);
            element.addEventListener('touchend', this.onTouchEnd_);
            element.addEventListener('mousedown', this.onMouseDown_);
        }
        computePosition_(offset) {
            const rect = this.elem_.getBoundingClientRect();
            return {
                bounds: {
                    width: rect.width,
                    height: rect.height
                },
                point: offset ? {
                    x: offset.x,
                    y: offset.y
                } : null
            };
        }
        onMouseDown_(ev) {
            var _a8;
            ev.preventDefault();
            (_a8 = ev.currentTarget) === null || _a8 === void 0 || _a8.focus();
            const doc25 = this.elem_.ownerDocument;
            doc25.addEventListener('mousemove', this.onDocumentMouseMove_);
            doc25.addEventListener('mouseup', this.onDocumentMouseUp_);
            this.emitter.emit('down', {
                altKey: ev.altKey,
                data: this.computePosition_(computeOffset$1(ev, this.elem_)),
                sender: this,
                shiftKey: ev.shiftKey
            });
        }
        onDocumentMouseMove_(ev) {
            this.emitter.emit('move', {
                altKey: ev.altKey,
                data: this.computePosition_(computeOffset$1(ev, this.elem_)),
                sender: this,
                shiftKey: ev.shiftKey
            });
        }
        onDocumentMouseUp_(ev) {
            const doc25 = this.elem_.ownerDocument;
            doc25.removeEventListener('mousemove', this.onDocumentMouseMove_);
            doc25.removeEventListener('mouseup', this.onDocumentMouseUp_);
            this.emitter.emit('up', {
                altKey: ev.altKey,
                data: this.computePosition_(computeOffset$1(ev, this.elem_)),
                sender: this,
                shiftKey: ev.shiftKey
            });
        }
        onTouchStart_(ev) {
            ev.preventDefault();
            const touch = ev.targetTouches.item(0);
            const rect = this.elem_.getBoundingClientRect();
            this.emitter.emit('down', {
                altKey: ev.altKey,
                data: this.computePosition_(touch ? {
                    x: touch.clientX - rect.left,
                    y: touch.clientY - rect.top
                } : undefined),
                sender: this,
                shiftKey: ev.shiftKey
            });
            this.lastTouch_ = touch;
        }
        onTouchMove_(ev) {
            const touch = ev.targetTouches.item(0);
            const rect = this.elem_.getBoundingClientRect();
            this.emitter.emit('move', {
                altKey: ev.altKey,
                data: this.computePosition_(touch ? {
                    x: touch.clientX - rect.left,
                    y: touch.clientY - rect.top
                } : undefined),
                sender: this,
                shiftKey: ev.shiftKey
            });
            this.lastTouch_ = touch;
        }
        onTouchEnd_(ev) {
            var _a9;
            const touch = (_a9 = ev.targetTouches.item(0)) !== null && _a9 !== void 0 ? _a9 : this.lastTouch_;
            const rect = this.elem_.getBoundingClientRect();
            this.emitter.emit('up', {
                altKey: ev.altKey,
                data: this.computePosition_(touch ? {
                    x: touch.clientX - rect.left,
                    y: touch.clientY - rect.top
                } : undefined),
                sender: this,
                shiftKey: ev.shiftKey
            });
        }
    }
    function mapRange(value3, start1, end1, start2, end2) {
        const p = (value3 - start1) / (end1 - start1);
        return start2 + p * (end2 - start2);
    }
    function getDecimalDigits(value3) {
        const text2 = String(value3.toFixed(10));
        const frac = text2.split('.')[1];
        return frac.replace(/0+$/, '').length;
    }
    function constrainRange(value3, min, max) {
        return Math.min(Math.max(value3, min), max);
    }
    function loopRange(value3, max) {
        return (value3 % max + max) % max;
    }
    const className$g = ClassName('txt');
    class NumberTextView {
        constructor(doc25, config30){
            this.onChange_ = this.onChange_.bind(this);
            this.props_ = config30.props;
            this.props_.emitter.on('change', this.onChange_);
            this.element = doc25.createElement('div');
            this.element.classList.add(className$g(), className$g(undefined, 'num'));
            if (config30.arrayPosition) this.element.classList.add(className$g(undefined, config30.arrayPosition));
            config30.viewProps.bindClassModifiers(this.element);
            const inputElem1 = doc25.createElement('input');
            inputElem1.classList.add(className$g('i'));
            inputElem1.type = 'text';
            config30.viewProps.bindDisabled(inputElem1);
            this.element.appendChild(inputElem1);
            this.inputElement = inputElem1;
            this.onDraggingChange_ = this.onDraggingChange_.bind(this);
            this.dragging_ = config30.dragging;
            this.dragging_.emitter.on('change', this.onDraggingChange_);
            this.element.classList.add(className$g());
            this.inputElement.classList.add(className$g('i'));
            const knobElem = doc25.createElement('div');
            knobElem.classList.add(className$g('k'));
            this.element.appendChild(knobElem);
            this.knobElement = knobElem;
            const guideElem = doc25.createElementNS(SVG_NS, 'svg');
            guideElem.classList.add(className$g('g'));
            this.knobElement.appendChild(guideElem);
            const bodyElem = doc25.createElementNS(SVG_NS, 'path');
            bodyElem.classList.add(className$g('gb'));
            guideElem.appendChild(bodyElem);
            this.guideBodyElem_ = bodyElem;
            const headElem = doc25.createElementNS(SVG_NS, 'path');
            headElem.classList.add(className$g('gh'));
            guideElem.appendChild(headElem);
            this.guideHeadElem_ = headElem;
            const tooltipElem = doc25.createElement('div');
            tooltipElem.classList.add(ClassName('tt')());
            this.knobElement.appendChild(tooltipElem);
            this.tooltipElem_ = tooltipElem;
            config30.value.emitter.on('change', this.onChange_);
            this.value = config30.value;
            this.refresh();
        }
        onDraggingChange_(ev) {
            if (ev.rawValue === null) {
                this.element.classList.remove(className$g(undefined, 'drg'));
                return;
            }
            this.element.classList.add(className$g(undefined, 'drg'));
            const x = ev.rawValue / this.props_.get('draggingScale');
            const aox = x + (x > 0 ? -1 : x < 0 ? 1 : 0);
            const adx = constrainRange(-aox, -4, 4);
            this.guideHeadElem_.setAttributeNS(null, 'd', [
                `M ${aox + adx},0 L${aox},4 L${aox + adx},8`,
                `M ${x},-1 L${x},9`
            ].join(' '));
            this.guideBodyElem_.setAttributeNS(null, 'd', `M 0,4 L${x},4`);
            const formatter = this.props_.get('formatter');
            this.tooltipElem_.textContent = formatter(this.value.rawValue);
            this.tooltipElem_.style.left = `${x}px`;
        }
        refresh() {
            const formatter = this.props_.get('formatter');
            this.inputElement.value = formatter(this.value.rawValue);
        }
        onChange_() {
            this.refresh();
        }
    }
    class NumberTextController {
        constructor(doc26, config31){
            this.originRawValue_ = 0;
            this.onInputChange_ = this.onInputChange_.bind(this);
            this.onInputKeyDown_ = this.onInputKeyDown_.bind(this);
            this.onInputKeyUp_ = this.onInputKeyUp_.bind(this);
            this.onPointerDown_ = this.onPointerDown_.bind(this);
            this.onPointerMove_ = this.onPointerMove_.bind(this);
            this.onPointerUp_ = this.onPointerUp_.bind(this);
            this.baseStep_ = config31.baseStep;
            this.parser_ = config31.parser;
            this.props = config31.props;
            this.value = config31.value;
            this.viewProps = config31.viewProps;
            this.dragging_ = createValue(null);
            this.view = new NumberTextView(doc26, {
                arrayPosition: config31.arrayPosition,
                dragging: this.dragging_,
                props: this.props,
                value: this.value,
                viewProps: this.viewProps
            });
            this.view.inputElement.addEventListener('change', this.onInputChange_);
            this.view.inputElement.addEventListener('keydown', this.onInputKeyDown_);
            this.view.inputElement.addEventListener('keyup', this.onInputKeyUp_);
            const ph = new PointerHandler(this.view.knobElement);
            ph.emitter.on('down', this.onPointerDown_);
            ph.emitter.on('move', this.onPointerMove_);
            ph.emitter.on('up', this.onPointerUp_);
        }
        onInputChange_(e) {
            const inputElem2 = forceCast(e.currentTarget);
            const value3 = inputElem2.value;
            const parsedValue = this.parser_(value3);
            if (!isEmpty(parsedValue)) this.value.rawValue = parsedValue;
            this.view.refresh();
        }
        onInputKeyDown_(ev) {
            const step1 = getStepForKey(this.baseStep_, getVerticalStepKeys(ev));
            if (step1 === 0) return;
            this.value.setRawValue(this.value.rawValue + step1, {
                forceEmit: false,
                last: false
            });
        }
        onInputKeyUp_(ev) {
            const step1 = getStepForKey(this.baseStep_, getVerticalStepKeys(ev));
            if (step1 === 0) return;
            this.value.setRawValue(this.value.rawValue, {
                forceEmit: true,
                last: true
            });
        }
        onPointerDown_() {
            this.originRawValue_ = this.value.rawValue;
            this.dragging_.rawValue = 0;
        }
        computeDraggingValue_(data) {
            if (!data.point) return null;
            const dx = data.point.x - data.bounds.width / 2;
            return this.originRawValue_ + dx * this.props.get('draggingScale');
        }
        onPointerMove_(ev) {
            const v = this.computeDraggingValue_(ev.data);
            if (v === null) return;
            this.value.setRawValue(v, {
                forceEmit: false,
                last: false
            });
            this.dragging_.rawValue = this.value.rawValue - this.originRawValue_;
        }
        onPointerUp_(ev) {
            const v = this.computeDraggingValue_(ev.data);
            if (v === null) return;
            this.value.setRawValue(v, {
                forceEmit: true,
                last: true
            });
            this.dragging_.rawValue = null;
        }
    }
    const className$f = ClassName('sld');
    class SliderView {
        constructor(doc27, config32){
            this.onChange_ = this.onChange_.bind(this);
            this.props_ = config32.props;
            this.props_.emitter.on('change', this.onChange_);
            this.element = doc27.createElement('div');
            this.element.classList.add(className$f());
            config32.viewProps.bindClassModifiers(this.element);
            const trackElem = doc27.createElement('div');
            trackElem.classList.add(className$f('t'));
            config32.viewProps.bindTabIndex(trackElem);
            this.element.appendChild(trackElem);
            this.trackElement = trackElem;
            const knobElem1 = doc27.createElement('div');
            knobElem1.classList.add(className$f('k'));
            this.trackElement.appendChild(knobElem1);
            this.knobElement = knobElem1;
            config32.value.emitter.on('change', this.onChange_);
            this.value = config32.value;
            this.update_();
        }
        update_() {
            const p = constrainRange(mapRange(this.value.rawValue, this.props_.get('minValue'), this.props_.get('maxValue'), 0, 100), 0, 100);
            this.knobElement.style.width = `${p}%`;
        }
        onChange_() {
            this.update_();
        }
    }
    class SliderController {
        constructor(doc28, config33){
            this.onKeyDown_ = this.onKeyDown_.bind(this);
            this.onKeyUp_ = this.onKeyUp_.bind(this);
            this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this);
            this.onPointerUp_ = this.onPointerUp_.bind(this);
            this.baseStep_ = config33.baseStep;
            this.value = config33.value;
            this.viewProps = config33.viewProps;
            this.props = config33.props;
            this.view = new SliderView(doc28, {
                props: this.props,
                value: this.value,
                viewProps: this.viewProps
            });
            this.ptHandler_ = new PointerHandler(this.view.trackElement);
            this.ptHandler_.emitter.on('down', this.onPointerDownOrMove_);
            this.ptHandler_.emitter.on('move', this.onPointerDownOrMove_);
            this.ptHandler_.emitter.on('up', this.onPointerUp_);
            this.view.trackElement.addEventListener('keydown', this.onKeyDown_);
            this.view.trackElement.addEventListener('keyup', this.onKeyUp_);
        }
        handlePointerEvent_(d, opts) {
            if (!d.point) return;
            this.value.setRawValue(mapRange(constrainRange(d.point.x, 0, d.bounds.width), 0, d.bounds.width, this.props.get('minValue'), this.props.get('maxValue')), opts);
        }
        onPointerDownOrMove_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: false,
                last: false
            });
        }
        onPointerUp_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: true,
                last: true
            });
        }
        onKeyDown_(ev) {
            const step1 = getStepForKey(this.baseStep_, getHorizontalStepKeys(ev));
            if (step1 === 0) return;
            this.value.setRawValue(this.value.rawValue + step1, {
                forceEmit: false,
                last: false
            });
        }
        onKeyUp_(ev) {
            const step1 = getStepForKey(this.baseStep_, getHorizontalStepKeys(ev));
            if (step1 === 0) return;
            this.value.setRawValue(this.value.rawValue, {
                forceEmit: true,
                last: true
            });
        }
    }
    const className$e = ClassName('sldtxt');
    class SliderTextView {
        constructor(doc29, config34){
            this.element = doc29.createElement('div');
            this.element.classList.add(className$e());
            const sliderElem = doc29.createElement('div');
            sliderElem.classList.add(className$e('s'));
            this.sliderView_ = config34.sliderView;
            sliderElem.appendChild(this.sliderView_.element);
            this.element.appendChild(sliderElem);
            const textElem = doc29.createElement('div');
            textElem.classList.add(className$e('t'));
            this.textView_ = config34.textView;
            textElem.appendChild(this.textView_.element);
            this.element.appendChild(textElem);
        }
    }
    class SliderTextController {
        constructor(doc30, config35){
            this.value = config35.value;
            this.viewProps = config35.viewProps;
            this.sliderC_ = new SliderController(doc30, {
                baseStep: config35.baseStep,
                props: config35.sliderProps,
                value: config35.value,
                viewProps: this.viewProps
            });
            this.textC_ = new NumberTextController(doc30, {
                baseStep: config35.baseStep,
                parser: config35.parser,
                props: config35.textProps,
                value: config35.value,
                viewProps: config35.viewProps
            });
            this.view = new SliderTextView(doc30, {
                sliderView: this.sliderC_.view,
                textView: this.textC_.view
            });
        }
        get sliderController() {
            return this.sliderC_;
        }
        get textController() {
            return this.textC_;
        }
    }
    function writePrimitive(target5, value3) {
        target5.write(value3);
    }
    function parseListOptions(value3) {
        const p = ParamsParsers;
        if (Array.isArray(value3)) return p.required.array(p.required.object({
            text: p.required.string,
            value: p.required.raw
        }))(value3).value;
        if (typeof value3 === 'object') return p.required.raw(value3).value;
        return undefined;
    }
    function parsePickerLayout(value3) {
        if (value3 === 'inline' || value3 === 'popup') return value3;
        return undefined;
    }
    function parsePointDimensionParams(value3) {
        const p = ParamsParsers;
        return p.required.object({
            max: p.optional.number,
            min: p.optional.number,
            step: p.optional.number
        })(value3).value;
    }
    function normalizeListOptions(options1) {
        if (Array.isArray(options1)) return options1;
        const items = [];
        Object.keys(options1).forEach((text2)=>{
            items.push({
                text: text2,
                value: options1[text2]
            });
        });
        return items;
    }
    function createListConstraint(options1) {
        return !isEmpty(options1) ? new ListConstraint(normalizeListOptions(forceCast(options1))) : null;
    }
    function findListItems(constraint) {
        const c = constraint ? findConstraint(constraint, ListConstraint) : null;
        if (!c) return null;
        return c.options;
    }
    function findStep(constraint) {
        const c = constraint ? findConstraint(constraint, StepConstraint) : null;
        if (!c) return null;
        return c.step;
    }
    function getSuitableDecimalDigits(constraint, rawValue) {
        const sc = constraint && findConstraint(constraint, StepConstraint);
        if (sc) return getDecimalDigits(sc.step);
        return Math.max(getDecimalDigits(rawValue), 2);
    }
    function getBaseStep(constraint) {
        const step1 = findStep(constraint);
        return step1 !== null && step1 !== void 0 ? step1 : 1;
    }
    function getSuitableDraggingScale(constraint, rawValue) {
        var _a10;
        const sc = constraint && findConstraint(constraint, StepConstraint);
        const base = Math.abs((_a10 = sc === null || sc === void 0 ? void 0 : sc.step) !== null && _a10 !== void 0 ? _a10 : rawValue);
        return base === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(base)) - 1);
    }
    const className$d = ClassName('ckb');
    class CheckboxView {
        constructor(doc31, config36){
            this.onValueChange_ = this.onValueChange_.bind(this);
            this.element = doc31.createElement('div');
            this.element.classList.add(className$d());
            config36.viewProps.bindClassModifiers(this.element);
            const labelElem1 = doc31.createElement('label');
            labelElem1.classList.add(className$d('l'));
            this.element.appendChild(labelElem1);
            const inputElem2 = doc31.createElement('input');
            inputElem2.classList.add(className$d('i'));
            inputElem2.type = 'checkbox';
            labelElem1.appendChild(inputElem2);
            this.inputElement = inputElem2;
            config36.viewProps.bindDisabled(this.inputElement);
            const wrapperElem = doc31.createElement('div');
            wrapperElem.classList.add(className$d('w'));
            labelElem1.appendChild(wrapperElem);
            const markElem2 = createSvgIconElement(doc31, 'check');
            wrapperElem.appendChild(markElem2);
            config36.value.emitter.on('change', this.onValueChange_);
            this.value = config36.value;
            this.update_();
        }
        update_() {
            this.inputElement.checked = this.value.rawValue;
        }
        onValueChange_() {
            this.update_();
        }
    }
    class CheckboxController {
        constructor(doc32, config37){
            this.onInputChange_ = this.onInputChange_.bind(this);
            this.value = config37.value;
            this.viewProps = config37.viewProps;
            this.view = new CheckboxView(doc32, {
                value: this.value,
                viewProps: this.viewProps
            });
            this.view.inputElement.addEventListener('change', this.onInputChange_);
        }
        onInputChange_(e) {
            const inputElem3 = forceCast(e.currentTarget);
            this.value.rawValue = inputElem3.checked;
        }
    }
    function createConstraint$5(params) {
        const constraints1 = [];
        const lc = createListConstraint(params.options);
        if (lc) constraints1.push(lc);
        return new CompositeConstraint(constraints1);
    }
    const BooleanInputPlugin = {
        id: 'input-bool',
        type: 'input',
        accept: (value3, params)=>{
            if (typeof value3 !== 'boolean') return null;
            const p = ParamsParsers;
            const result = parseParams(params, {
                options: p.optional.custom(parseListOptions)
            });
            return result ? {
                initialValue: value3,
                params: result
            } : null;
        },
        binding: {
            reader: (_args)=>boolFromUnknown
            ,
            constraint: (args)=>createConstraint$5(args.params)
            ,
            writer: (_args)=>writePrimitive
        },
        controller: (args)=>{
            var _a10;
            const doc33 = args.document;
            const value3 = args.value;
            const c = args.constraint;
            if (c && findConstraint(c, ListConstraint)) return new ListController(doc33, {
                props: ValueMap.fromObject({
                    options: (_a10 = findListItems(c)) !== null && _a10 !== void 0 ? _a10 : []
                }),
                value: value3,
                viewProps: args.viewProps
            });
            return new CheckboxController(doc33, {
                value: value3,
                viewProps: args.viewProps
            });
        }
    };
    const className$c = ClassName('col');
    class ColorView {
        constructor(doc33, config38){
            this.element = doc33.createElement('div');
            this.element.classList.add(className$c());
            config38.foldable.bindExpandedClass(this.element, className$c(undefined, 'expanded'));
            bindValueMap(config38.foldable, 'completed', valueToClassName(this.element, className$c(undefined, 'cpl')));
            const headElem1 = doc33.createElement('div');
            headElem1.classList.add(className$c('h'));
            this.element.appendChild(headElem1);
            const swatchElem = doc33.createElement('div');
            swatchElem.classList.add(className$c('s'));
            headElem1.appendChild(swatchElem);
            this.swatchElement = swatchElem;
            const textElem1 = doc33.createElement('div');
            textElem1.classList.add(className$c('t'));
            headElem1.appendChild(textElem1);
            this.textElement = textElem1;
            if (config38.pickerLayout === 'inline') {
                const pickerElem = doc33.createElement('div');
                pickerElem.classList.add(className$c('p'));
                this.element.appendChild(pickerElem);
                this.pickerElement = pickerElem;
            } else this.pickerElement = null;
        }
    }
    function rgbToHsl(r, g, b) {
        const rp = constrainRange(r / 255, 0, 1);
        const gp = constrainRange(g / 255, 0, 1);
        const bp = constrainRange(b / 255, 0, 1);
        const cmax = Math.max(rp, gp, bp);
        const cmin = Math.min(rp, gp, bp);
        const c = cmax - cmin;
        let h = 0;
        let s = 0;
        const l = (cmin + cmax) / 2;
        if (c !== 0) {
            s = c / (1 - Math.abs(cmax + cmin - 1));
            if (rp === cmax) h = (gp - bp) / c;
            else if (gp === cmax) h = 2 + (bp - rp) / c;
            else h = 4 + (rp - gp) / c;
            h = h / 6 + (h < 0 ? 1 : 0);
        }
        return [
            h * 360,
            s * 100,
            l * 100
        ];
    }
    function hslToRgb(h, s, l) {
        const hp = (h % 360 + 360) % 360;
        const sp = constrainRange(s / 100, 0, 1);
        const lp = constrainRange(l / 100, 0, 1);
        const c = (1 - Math.abs(2 * lp - 1)) * sp;
        const x = c * (1 - Math.abs(hp / 60 % 2 - 1));
        const m = lp - c / 2;
        let rp, gp, bp;
        if (hp >= 0 && hp < 60) [rp, gp, bp] = [
            c,
            x,
            0
        ];
        else if (hp >= 60 && hp < 120) [rp, gp, bp] = [
            x,
            c,
            0
        ];
        else if (hp >= 120 && hp < 180) [rp, gp, bp] = [
            0,
            c,
            x
        ];
        else if (hp >= 180 && hp < 240) [rp, gp, bp] = [
            0,
            x,
            c
        ];
        else if (hp >= 240 && hp < 300) [rp, gp, bp] = [
            x,
            0,
            c
        ];
        else [rp, gp, bp] = [
            c,
            0,
            x
        ];
        return [
            (rp + m) * 255,
            (gp + m) * 255,
            (bp + m) * 255
        ];
    }
    function rgbToHsv(r, g, b) {
        const rp = constrainRange(r / 255, 0, 1);
        const gp = constrainRange(g / 255, 0, 1);
        const bp = constrainRange(b / 255, 0, 1);
        const cmax = Math.max(rp, gp, bp);
        const cmin = Math.min(rp, gp, bp);
        const d = cmax - cmin;
        let h;
        if (d === 0) h = 0;
        else if (cmax === rp) h = 60 * (((gp - bp) / d % 6 + 6) % 6);
        else if (cmax === gp) h = 60 * ((bp - rp) / d + 2);
        else h = 60 * ((rp - gp) / d + 4);
        const s = cmax === 0 ? 0 : d / cmax;
        const v = cmax;
        return [
            h,
            s * 100,
            v * 100
        ];
    }
    function hsvToRgb(h, s, v) {
        const hp = loopRange(h, 360);
        const sp = constrainRange(s / 100, 0, 1);
        const vp = constrainRange(v / 100, 0, 1);
        const c = vp * sp;
        const x = c * (1 - Math.abs(hp / 60 % 2 - 1));
        const m = vp - c;
        let rp, gp, bp;
        if (hp >= 0 && hp < 60) [rp, gp, bp] = [
            c,
            x,
            0
        ];
        else if (hp >= 60 && hp < 120) [rp, gp, bp] = [
            x,
            c,
            0
        ];
        else if (hp >= 120 && hp < 180) [rp, gp, bp] = [
            0,
            c,
            x
        ];
        else if (hp >= 180 && hp < 240) [rp, gp, bp] = [
            0,
            x,
            c
        ];
        else if (hp >= 240 && hp < 300) [rp, gp, bp] = [
            x,
            0,
            c
        ];
        else [rp, gp, bp] = [
            c,
            0,
            x
        ];
        return [
            (rp + m) * 255,
            (gp + m) * 255,
            (bp + m) * 255
        ];
    }
    function hslToHsv(h, s, l) {
        const sd = l + s * (100 - Math.abs(2 * l - 100)) / 200;
        return [
            h,
            sd !== 0 ? s * (100 - Math.abs(2 * l - 100)) / sd : 0,
            l + s * (100 - Math.abs(2 * l - 100)) / 200, 
        ];
    }
    function hsvToHsl(h, s, v) {
        const sd = 100 - Math.abs(v * (200 - s) / 100 - 100);
        return [
            h,
            sd !== 0 ? s * v / sd : 0,
            v * (200 - s) / 200
        ];
    }
    function removeAlphaComponent(comps) {
        return [
            comps[0],
            comps[1],
            comps[2]
        ];
    }
    function appendAlphaComponent(comps, alpha) {
        return [
            comps[0],
            comps[1],
            comps[2],
            alpha
        ];
    }
    const MODE_CONVERTER_MAP = {
        hsl: {
            hsl: (h, s, l)=>[
                    h,
                    s,
                    l
                ]
            ,
            hsv: hslToHsv,
            rgb: hslToRgb
        },
        hsv: {
            hsl: hsvToHsl,
            hsv: (h, s, v)=>[
                    h,
                    s,
                    v
                ]
            ,
            rgb: hsvToRgb
        },
        rgb: {
            hsl: rgbToHsl,
            hsv: rgbToHsv,
            rgb: (r, g, b)=>[
                    r,
                    g,
                    b
                ]
        }
    };
    function convertColorMode(components, fromMode, toMode) {
        return MODE_CONVERTER_MAP[fromMode][toMode](...components);
    }
    const CONSTRAINT_MAP = {
        hsl: (comps)=>{
            var _a11;
            return [
                loopRange(comps[0], 360),
                constrainRange(comps[1], 0, 100),
                constrainRange(comps[2], 0, 100),
                constrainRange((_a11 = comps[3]) !== null && _a11 !== void 0 ? _a11 : 1, 0, 1), 
            ];
        },
        hsv: (comps)=>{
            var _a12;
            return [
                loopRange(comps[0], 360),
                constrainRange(comps[1], 0, 100),
                constrainRange(comps[2], 0, 100),
                constrainRange((_a12 = comps[3]) !== null && _a12 !== void 0 ? _a12 : 1, 0, 1), 
            ];
        },
        rgb: (comps)=>{
            var _a13;
            return [
                constrainRange(comps[0], 0, 255),
                constrainRange(comps[1], 0, 255),
                constrainRange(comps[2], 0, 255),
                constrainRange((_a13 = comps[3]) !== null && _a13 !== void 0 ? _a13 : 1, 0, 1), 
            ];
        }
    };
    function isRgbColorComponent(obj2, key3) {
        if (typeof obj2 !== 'object' || isEmpty(obj2)) return false;
        return key3 in obj2 && typeof obj2[key3] === 'number';
    }
    class Color {
        constructor(comps, mode){
            this.mode_ = mode;
            this.comps_ = CONSTRAINT_MAP[mode](comps);
        }
        static black() {
            return new Color([
                0,
                0,
                0
            ], 'rgb');
        }
        static fromObject(obj) {
            const comps1 = 'a' in obj ? [
                obj.r,
                obj.g,
                obj.b,
                obj.a
            ] : [
                obj.r,
                obj.g,
                obj.b
            ];
            return new Color(comps1, 'rgb');
        }
        static toRgbaObject(color) {
            return color.toRgbaObject();
        }
        static isRgbColorObject(obj) {
            return isRgbColorComponent(obj, 'r') && isRgbColorComponent(obj, 'g') && isRgbColorComponent(obj, 'b');
        }
        static isRgbaColorObject(obj) {
            return this.isRgbColorObject(obj) && isRgbColorComponent(obj, 'a');
        }
        static isColorObject(obj) {
            return this.isRgbColorObject(obj);
        }
        static equals(v1, v2) {
            if (v1.mode_ !== v2.mode_) return false;
            const comps1 = v1.comps_;
            const comps2 = v2.comps_;
            for(let i = 0; i < comps1.length; i++){
                if (comps1[i] !== comps2[i]) return false;
            }
            return true;
        }
        get mode() {
            return this.mode_;
        }
        getComponents(opt_mode) {
            return appendAlphaComponent(convertColorMode(removeAlphaComponent(this.comps_), this.mode_, opt_mode || this.mode_), this.comps_[3]);
        }
        toRgbaObject() {
            const rgbComps = this.getComponents('rgb');
            return {
                r: rgbComps[0],
                g: rgbComps[1],
                b: rgbComps[2],
                a: rgbComps[3]
            };
        }
    }
    const className$b = ClassName('colp');
    class ColorPickerView {
        constructor(doc34, config39){
            this.alphaViews_ = null;
            this.element = doc34.createElement('div');
            this.element.classList.add(className$b());
            const hsvElem = doc34.createElement('div');
            hsvElem.classList.add(className$b('hsv'));
            const svElem = doc34.createElement('div');
            svElem.classList.add(className$b('sv'));
            this.svPaletteView_ = config39.svPaletteView;
            svElem.appendChild(this.svPaletteView_.element);
            hsvElem.appendChild(svElem);
            const hElem = doc34.createElement('div');
            hElem.classList.add(className$b('h'));
            this.hPaletteView_ = config39.hPaletteView;
            hElem.appendChild(this.hPaletteView_.element);
            hsvElem.appendChild(hElem);
            this.element.appendChild(hsvElem);
            const rgbElem = doc34.createElement('div');
            rgbElem.classList.add(className$b('rgb'));
            this.textView_ = config39.textView;
            rgbElem.appendChild(this.textView_.element);
            this.element.appendChild(rgbElem);
            if (config39.alphaViews) {
                this.alphaViews_ = {
                    palette: config39.alphaViews.palette,
                    text: config39.alphaViews.text
                };
                const aElem = doc34.createElement('div');
                aElem.classList.add(className$b('a'));
                const apElem = doc34.createElement('div');
                apElem.classList.add(className$b('ap'));
                apElem.appendChild(this.alphaViews_.palette.element);
                aElem.appendChild(apElem);
                const atElem = doc34.createElement('div');
                atElem.classList.add(className$b('at'));
                atElem.appendChild(this.alphaViews_.text.element);
                aElem.appendChild(atElem);
                this.element.appendChild(aElem);
            }
        }
        get allFocusableElements() {
            const elems = [
                this.svPaletteView_.element,
                this.hPaletteView_.element,
                this.textView_.modeSelectElement,
                ...this.textView_.textViews.map((v)=>v.inputElement
                ), 
            ];
            if (this.alphaViews_) elems.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement);
            return elems;
        }
    }
    function parseColorInputParams(params) {
        const p = ParamsParsers;
        return parseParams(params, {
            alpha: p.optional.boolean,
            expanded: p.optional.boolean,
            picker: p.optional.custom(parsePickerLayout)
        });
    }
    function getBaseStepForColor(forAlpha) {
        return forAlpha ? 0.1 : 1;
    }
    function parseCssNumberOrPercentage(text2, maxValue) {
        const m = text2.match(/^(.+)%$/);
        if (!m) return Math.min(parseFloat(text2), maxValue);
        return Math.min(parseFloat(m[1]) * 0.01 * maxValue, maxValue);
    }
    const ANGLE_TO_DEG_MAP = {
        deg: (angle)=>angle
        ,
        grad: (angle)=>angle * 360 / 400
        ,
        rad: (angle)=>angle * 360 / (2 * Math.PI)
        ,
        turn: (angle)=>angle * 360
    };
    function parseCssNumberOrAngle(text2) {
        const m = text2.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
        if (!m) return parseFloat(text2);
        const angle = parseFloat(m[1]);
        const unit = m[2];
        return ANGLE_TO_DEG_MAP[unit](angle);
    }
    const NOTATION_TO_PARSER_MAP = {
        'func.rgb': (text2)=>{
            const m = text2.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
            if (!m) return null;
            const comps1 = [
                parseCssNumberOrPercentage(m[1], 255),
                parseCssNumberOrPercentage(m[2], 255),
                parseCssNumberOrPercentage(m[3], 255), 
            ];
            if (isNaN(comps1[0]) || isNaN(comps1[1]) || isNaN(comps1[2])) return null;
            return new Color(comps1, 'rgb');
        },
        'func.rgba': (text2)=>{
            const m = text2.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
            if (!m) return null;
            const comps1 = [
                parseCssNumberOrPercentage(m[1], 255),
                parseCssNumberOrPercentage(m[2], 255),
                parseCssNumberOrPercentage(m[3], 255),
                parseCssNumberOrPercentage(m[4], 1), 
            ];
            if (isNaN(comps1[0]) || isNaN(comps1[1]) || isNaN(comps1[2]) || isNaN(comps1[3])) return null;
            return new Color(comps1, 'rgb');
        },
        'func.hsl': (text2)=>{
            const m = text2.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
            if (!m) return null;
            const comps1 = [
                parseCssNumberOrAngle(m[1]),
                parseCssNumberOrPercentage(m[2], 100),
                parseCssNumberOrPercentage(m[3], 100), 
            ];
            if (isNaN(comps1[0]) || isNaN(comps1[1]) || isNaN(comps1[2])) return null;
            return new Color(comps1, 'hsl');
        },
        'func.hsla': (text2)=>{
            const m = text2.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
            if (!m) return null;
            const comps1 = [
                parseCssNumberOrAngle(m[1]),
                parseCssNumberOrPercentage(m[2], 100),
                parseCssNumberOrPercentage(m[3], 100),
                parseCssNumberOrPercentage(m[4], 1), 
            ];
            if (isNaN(comps1[0]) || isNaN(comps1[1]) || isNaN(comps1[2]) || isNaN(comps1[3])) return null;
            return new Color(comps1, 'hsl');
        },
        'hex.rgb': (text2)=>{
            const mRgb = text2.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
            if (mRgb) return new Color([
                parseInt(mRgb[1] + mRgb[1], 16),
                parseInt(mRgb[2] + mRgb[2], 16),
                parseInt(mRgb[3] + mRgb[3], 16), 
            ], 'rgb');
            const mRrggbb = text2.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
            if (mRrggbb) return new Color([
                parseInt(mRrggbb[1], 16),
                parseInt(mRrggbb[2], 16),
                parseInt(mRrggbb[3], 16), 
            ], 'rgb');
            return null;
        },
        'hex.rgba': (text2)=>{
            const mRgb = text2.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
            if (mRgb) return new Color([
                parseInt(mRgb[1] + mRgb[1], 16),
                parseInt(mRgb[2] + mRgb[2], 16),
                parseInt(mRgb[3] + mRgb[3], 16),
                mapRange(parseInt(mRgb[4] + mRgb[4], 16), 0, 255, 0, 1), 
            ], 'rgb');
            const mRrggbb = text2.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
            if (mRrggbb) return new Color([
                parseInt(mRrggbb[1], 16),
                parseInt(mRrggbb[2], 16),
                parseInt(mRrggbb[3], 16),
                mapRange(parseInt(mRrggbb[4], 16), 0, 255, 0, 1), 
            ], 'rgb');
            return null;
        }
    };
    function getColorNotation(text2) {
        const notations = Object.keys(NOTATION_TO_PARSER_MAP);
        return notations.reduce((result, notation)=>{
            if (result) return result;
            const subparser = NOTATION_TO_PARSER_MAP[notation];
            return subparser(text2) ? notation : null;
        }, null);
    }
    const CompositeColorParser = (text2)=>{
        const notation = getColorNotation(text2);
        return notation ? NOTATION_TO_PARSER_MAP[notation](text2) : null;
    };
    function hasAlphaComponent(notation) {
        return notation === 'func.hsla' || notation === 'func.rgba' || notation === 'hex.rgba';
    }
    function colorFromString(value3) {
        if (typeof value3 === 'string') {
            const cv = CompositeColorParser(value3);
            if (cv) return cv;
        }
        return Color.black();
    }
    function zerofill(comp) {
        const hex = constrainRange(Math.floor(comp), 0, 255).toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }
    function colorToHexRgbString(value3, prefix = '#') {
        const hexes = removeAlphaComponent(value3.getComponents('rgb')).map(zerofill).join('');
        return `${prefix}${hexes}`;
    }
    function colorToHexRgbaString(value3, prefix = '#') {
        const rgbaComps = value3.getComponents('rgb');
        const hexes = [
            rgbaComps[0],
            rgbaComps[1],
            rgbaComps[2],
            rgbaComps[3] * 255
        ].map(zerofill).join('');
        return `${prefix}${hexes}`;
    }
    function colorToFunctionalRgbString(value3) {
        const formatter = createNumberFormatter(0);
        const comps1 = removeAlphaComponent(value3.getComponents('rgb')).map((comp)=>formatter(comp)
        );
        return `rgb(${comps1.join(', ')})`;
    }
    function colorToFunctionalRgbaString(value3) {
        const aFormatter = createNumberFormatter(2);
        const rgbFormatter = createNumberFormatter(0);
        const comps1 = value3.getComponents('rgb').map((comp, index)=>{
            const formatter = index === 3 ? aFormatter : rgbFormatter;
            return formatter(comp);
        });
        return `rgba(${comps1.join(', ')})`;
    }
    function colorToFunctionalHslString(value3) {
        const formatters = [
            createNumberFormatter(0),
            formatPercentage,
            formatPercentage, 
        ];
        const comps1 = removeAlphaComponent(value3.getComponents('hsl')).map((comp, index)=>formatters[index](comp)
        );
        return `hsl(${comps1.join(', ')})`;
    }
    function colorToFunctionalHslaString(value3) {
        const formatters = [
            createNumberFormatter(0),
            formatPercentage,
            formatPercentage,
            createNumberFormatter(2), 
        ];
        const comps1 = value3.getComponents('hsl').map((comp, index)=>formatters[index](comp)
        );
        return `hsla(${comps1.join(', ')})`;
    }
    const NOTATION_TO_STRINGIFIER_MAP = {
        'func.hsl': colorToFunctionalHslString,
        'func.hsla': colorToFunctionalHslaString,
        'func.rgb': colorToFunctionalRgbString,
        'func.rgba': colorToFunctionalRgbaString,
        'hex.rgb': colorToHexRgbString,
        'hex.rgba': colorToHexRgbaString
    };
    function getColorStringifier(notation) {
        return NOTATION_TO_STRINGIFIER_MAP[notation];
    }
    const className$a = ClassName('apl');
    class APaletteView {
        constructor(doc35, config40){
            this.onValueChange_ = this.onValueChange_.bind(this);
            this.value = config40.value;
            this.value.emitter.on('change', this.onValueChange_);
            this.element = doc35.createElement('div');
            this.element.classList.add(className$a());
            config40.viewProps.bindTabIndex(this.element);
            const barElem = doc35.createElement('div');
            barElem.classList.add(className$a('b'));
            this.element.appendChild(barElem);
            const colorElem = doc35.createElement('div');
            colorElem.classList.add(className$a('c'));
            barElem.appendChild(colorElem);
            this.colorElem_ = colorElem;
            const markerElem = doc35.createElement('div');
            markerElem.classList.add(className$a('m'));
            this.element.appendChild(markerElem);
            this.markerElem_ = markerElem;
            const previewElem = doc35.createElement('div');
            previewElem.classList.add(className$a('p'));
            this.markerElem_.appendChild(previewElem);
            this.previewElem_ = previewElem;
            this.update_();
        }
        update_() {
            const c = this.value.rawValue;
            const rgbaComps = c.getComponents('rgb');
            const leftColor = new Color([
                rgbaComps[0],
                rgbaComps[1],
                rgbaComps[2],
                0
            ], 'rgb');
            const rightColor = new Color([
                rgbaComps[0],
                rgbaComps[1],
                rgbaComps[2],
                255
            ], 'rgb');
            const gradientComps = [
                'to right',
                colorToFunctionalRgbaString(leftColor),
                colorToFunctionalRgbaString(rightColor), 
            ];
            this.colorElem_.style.background = `linear-gradient(${gradientComps.join(',')})`;
            this.previewElem_.style.backgroundColor = colorToFunctionalRgbaString(c);
            const left1 = mapRange(rgbaComps[3], 0, 1, 0, 100);
            this.markerElem_.style.left = `${left1}%`;
        }
        onValueChange_() {
            this.update_();
        }
    }
    class APaletteController {
        constructor(doc36, config41){
            this.onKeyDown_ = this.onKeyDown_.bind(this);
            this.onKeyUp_ = this.onKeyUp_.bind(this);
            this.onPointerDown_ = this.onPointerDown_.bind(this);
            this.onPointerMove_ = this.onPointerMove_.bind(this);
            this.onPointerUp_ = this.onPointerUp_.bind(this);
            this.value = config41.value;
            this.viewProps = config41.viewProps;
            this.view = new APaletteView(doc36, {
                value: this.value,
                viewProps: this.viewProps
            });
            this.ptHandler_ = new PointerHandler(this.view.element);
            this.ptHandler_.emitter.on('down', this.onPointerDown_);
            this.ptHandler_.emitter.on('move', this.onPointerMove_);
            this.ptHandler_.emitter.on('up', this.onPointerUp_);
            this.view.element.addEventListener('keydown', this.onKeyDown_);
            this.view.element.addEventListener('keyup', this.onKeyUp_);
        }
        handlePointerEvent_(d, opts) {
            if (!d.point) return;
            const alpha = d.point.x / d.bounds.width;
            const c = this.value.rawValue;
            const [h, s, v] = c.getComponents('hsv');
            this.value.setRawValue(new Color([
                h,
                s,
                v,
                alpha
            ], 'hsv'), opts);
        }
        onPointerDown_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: false,
                last: false
            });
        }
        onPointerMove_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: false,
                last: false
            });
        }
        onPointerUp_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: true,
                last: true
            });
        }
        onKeyDown_(ev) {
            const step1 = getStepForKey(getBaseStepForColor(true), getHorizontalStepKeys(ev));
            if (step1 === 0) return;
            const c = this.value.rawValue;
            const [h, s, v, a] = c.getComponents('hsv');
            this.value.setRawValue(new Color([
                h,
                s,
                v,
                a + step1
            ], 'hsv'), {
                forceEmit: false,
                last: false
            });
        }
        onKeyUp_(ev) {
            const step1 = getStepForKey(getBaseStepForColor(true), getHorizontalStepKeys(ev));
            if (step1 === 0) return;
            this.value.setRawValue(this.value.rawValue, {
                forceEmit: true,
                last: true
            });
        }
    }
    const className$9 = ClassName('coltxt');
    function createModeSelectElement(doc37) {
        const selectElem1 = doc37.createElement('select');
        const items = [
            {
                text: 'RGB',
                value: 'rgb'
            },
            {
                text: 'HSL',
                value: 'hsl'
            },
            {
                text: 'HSV',
                value: 'hsv'
            }, 
        ];
        selectElem1.appendChild(items.reduce((frag, item)=>{
            const optElem = doc37.createElement('option');
            optElem.textContent = item.text;
            optElem.value = item.value;
            frag.appendChild(optElem);
            return frag;
        }, doc37.createDocumentFragment()));
        return selectElem1;
    }
    class ColorTextView {
        constructor(doc37, config42){
            this.element = doc37.createElement('div');
            this.element.classList.add(className$9());
            const modeElem = doc37.createElement('div');
            modeElem.classList.add(className$9('m'));
            this.modeElem_ = createModeSelectElement(doc37);
            this.modeElem_.classList.add(className$9('ms'));
            modeElem.appendChild(this.modeSelectElement);
            const modeMarkerElem = doc37.createElement('div');
            modeMarkerElem.classList.add(className$9('mm'));
            modeMarkerElem.appendChild(createSvgIconElement(doc37, 'dropdown'));
            modeElem.appendChild(modeMarkerElem);
            this.element.appendChild(modeElem);
            const textsElem = doc37.createElement('div');
            textsElem.classList.add(className$9('w'));
            this.element.appendChild(textsElem);
            this.textsElem_ = textsElem;
            this.textViews_ = config42.textViews;
            this.applyTextViews_();
            bindValue(config42.colorMode, (mode1)=>{
                this.modeElem_.value = mode1;
            });
        }
        get modeSelectElement() {
            return this.modeElem_;
        }
        get textViews() {
            return this.textViews_;
        }
        set textViews(textViews) {
            this.textViews_ = textViews;
            this.applyTextViews_();
        }
        applyTextViews_() {
            removeChildElements(this.textsElem_);
            const doc38 = this.element.ownerDocument;
            this.textViews_.forEach((v)=>{
                const compElem = doc38.createElement('div');
                compElem.classList.add(className$9('c'));
                compElem.appendChild(v.element);
                this.textsElem_.appendChild(compElem);
            });
        }
    }
    const FORMATTER = createNumberFormatter(0);
    const MODE_TO_CONSTRAINT_MAP = {
        rgb: ()=>{
            return new RangeConstraint({
                min: 0,
                max: 255
            });
        },
        hsl: (index)=>{
            return index === 0 ? new RangeConstraint({
                min: 0,
                max: 360
            }) : new RangeConstraint({
                min: 0,
                max: 100
            });
        },
        hsv: (index)=>{
            return index === 0 ? new RangeConstraint({
                min: 0,
                max: 360
            }) : new RangeConstraint({
                min: 0,
                max: 100
            });
        }
    };
    function createComponentController(doc38, config43, index) {
        return new NumberTextController(doc38, {
            arrayPosition: index === 0 ? 'fst' : index === 2 ? 'lst' : 'mid',
            baseStep: getBaseStepForColor(false),
            parser: config43.parser,
            props: ValueMap.fromObject({
                draggingScale: 1,
                formatter: FORMATTER
            }),
            value: createValue(0, {
                constraint: MODE_TO_CONSTRAINT_MAP[config43.colorMode](index)
            }),
            viewProps: config43.viewProps
        });
    }
    class ColorTextController {
        constructor(doc38, config43){
            this.onModeSelectChange_ = this.onModeSelectChange_.bind(this);
            this.parser_ = config43.parser;
            this.value = config43.value;
            this.viewProps = config43.viewProps;
            this.colorMode = createValue(this.value.rawValue.mode);
            this.ccs_ = this.createComponentControllers_(doc38);
            this.view = new ColorTextView(doc38, {
                colorMode: this.colorMode,
                textViews: [
                    this.ccs_[0].view,
                    this.ccs_[1].view,
                    this.ccs_[2].view
                ]
            });
            this.view.modeSelectElement.addEventListener('change', this.onModeSelectChange_);
        }
        createComponentControllers_(doc) {
            const cc = {
                colorMode: this.colorMode.rawValue,
                parser: this.parser_,
                viewProps: this.viewProps
            };
            const ccs = [
                createComponentController(doc, cc, 0),
                createComponentController(doc, cc, 1),
                createComponentController(doc, cc, 2), 
            ];
            ccs.forEach((cs, index)=>{
                connectValues({
                    primary: this.value,
                    secondary: cs.value,
                    forward: (p)=>{
                        return p.rawValue.getComponents(this.colorMode.rawValue)[index];
                    },
                    backward: (p, s)=>{
                        const pickedMode = this.colorMode.rawValue;
                        const comps1 = p.rawValue.getComponents(pickedMode);
                        comps1[index] = s.rawValue;
                        return new Color(appendAlphaComponent(removeAlphaComponent(comps1), comps1[3]), pickedMode);
                    }
                });
            });
            return ccs;
        }
        onModeSelectChange_(ev) {
            const selectElem1 = ev.currentTarget;
            this.colorMode.rawValue = selectElem1.value;
            this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument);
            this.view.textViews = [
                this.ccs_[0].view,
                this.ccs_[1].view,
                this.ccs_[2].view, 
            ];
        }
    }
    const className$8 = ClassName('hpl');
    class HPaletteView {
        constructor(doc40, config44){
            this.onValueChange_ = this.onValueChange_.bind(this);
            this.value = config44.value;
            this.value.emitter.on('change', this.onValueChange_);
            this.element = doc40.createElement('div');
            this.element.classList.add(className$8());
            config44.viewProps.bindTabIndex(this.element);
            const colorElem1 = doc40.createElement('div');
            colorElem1.classList.add(className$8('c'));
            this.element.appendChild(colorElem1);
            const markerElem1 = doc40.createElement('div');
            markerElem1.classList.add(className$8('m'));
            this.element.appendChild(markerElem1);
            this.markerElem_ = markerElem1;
            this.update_();
        }
        update_() {
            const c = this.value.rawValue;
            const [h] = c.getComponents('hsv');
            this.markerElem_.style.backgroundColor = colorToFunctionalRgbString(new Color([
                h,
                100,
                100
            ], 'hsv'));
            const left1 = mapRange(h, 0, 360, 0, 100);
            this.markerElem_.style.left = `${left1}%`;
        }
        onValueChange_() {
            this.update_();
        }
    }
    class HPaletteController {
        constructor(doc41, config45){
            this.onKeyDown_ = this.onKeyDown_.bind(this);
            this.onKeyUp_ = this.onKeyUp_.bind(this);
            this.onPointerDown_ = this.onPointerDown_.bind(this);
            this.onPointerMove_ = this.onPointerMove_.bind(this);
            this.onPointerUp_ = this.onPointerUp_.bind(this);
            this.value = config45.value;
            this.viewProps = config45.viewProps;
            this.view = new HPaletteView(doc41, {
                value: this.value,
                viewProps: this.viewProps
            });
            this.ptHandler_ = new PointerHandler(this.view.element);
            this.ptHandler_.emitter.on('down', this.onPointerDown_);
            this.ptHandler_.emitter.on('move', this.onPointerMove_);
            this.ptHandler_.emitter.on('up', this.onPointerUp_);
            this.view.element.addEventListener('keydown', this.onKeyDown_);
            this.view.element.addEventListener('keyup', this.onKeyUp_);
        }
        handlePointerEvent_(d, opts) {
            if (!d.point) return;
            const hue = mapRange(d.point.x, 0, d.bounds.width, 0, 360);
            const c = this.value.rawValue;
            const [, s, v, a] = c.getComponents('hsv');
            this.value.setRawValue(new Color([
                hue,
                s,
                v,
                a
            ], 'hsv'), opts);
        }
        onPointerDown_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: false,
                last: false
            });
        }
        onPointerMove_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: false,
                last: false
            });
        }
        onPointerUp_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: true,
                last: true
            });
        }
        onKeyDown_(ev) {
            const step1 = getStepForKey(getBaseStepForColor(false), getHorizontalStepKeys(ev));
            if (step1 === 0) return;
            const c = this.value.rawValue;
            const [h, s, v, a] = c.getComponents('hsv');
            this.value.setRawValue(new Color([
                h + step1,
                s,
                v,
                a
            ], 'hsv'), {
                forceEmit: false,
                last: false
            });
        }
        onKeyUp_(ev) {
            const step1 = getStepForKey(getBaseStepForColor(false), getHorizontalStepKeys(ev));
            if (step1 === 0) return;
            this.value.setRawValue(this.value.rawValue, {
                forceEmit: true,
                last: true
            });
        }
    }
    const className$7 = ClassName('svp');
    const CANVAS_RESOL = 64;
    class SvPaletteView {
        constructor(doc42, config46){
            this.onValueChange_ = this.onValueChange_.bind(this);
            this.value = config46.value;
            this.value.emitter.on('change', this.onValueChange_);
            this.element = doc42.createElement('div');
            this.element.classList.add(className$7());
            config46.viewProps.bindTabIndex(this.element);
            const canvasElem = doc42.createElement('canvas');
            canvasElem.height = CANVAS_RESOL;
            canvasElem.width = CANVAS_RESOL;
            canvasElem.classList.add(className$7('c'));
            this.element.appendChild(canvasElem);
            this.canvasElement = canvasElem;
            const markerElem2 = doc42.createElement('div');
            markerElem2.classList.add(className$7('m'));
            this.element.appendChild(markerElem2);
            this.markerElem_ = markerElem2;
            this.update_();
        }
        update_() {
            const ctx = getCanvasContext(this.canvasElement);
            if (!ctx) return;
            const c = this.value.rawValue;
            const hsvComps = c.getComponents('hsv');
            const width = this.canvasElement.width;
            const height = this.canvasElement.height;
            const imgData = ctx.getImageData(0, 0, width, height);
            const data = imgData.data;
            for(let iy = 0; iy < height; iy++)for(let ix = 0; ix < width; ix++){
                const s = mapRange(ix, 0, width, 0, 100);
                const v = mapRange(iy, 0, height, 100, 0);
                const rgbComps = hsvToRgb(hsvComps[0], s, v);
                const i = (iy * width + ix) * 4;
                data[i] = rgbComps[0];
                data[i + 1] = rgbComps[1];
                data[i + 2] = rgbComps[2];
                data[i + 3] = 255;
            }
            ctx.putImageData(imgData, 0, 0);
            const left1 = mapRange(hsvComps[1], 0, 100, 0, 100);
            this.markerElem_.style.left = `${left1}%`;
            const top = mapRange(hsvComps[2], 0, 100, 100, 0);
            this.markerElem_.style.top = `${top}%`;
        }
        onValueChange_() {
            this.update_();
        }
    }
    class SvPaletteController {
        constructor(doc43, config47){
            this.onKeyDown_ = this.onKeyDown_.bind(this);
            this.onKeyUp_ = this.onKeyUp_.bind(this);
            this.onPointerDown_ = this.onPointerDown_.bind(this);
            this.onPointerMove_ = this.onPointerMove_.bind(this);
            this.onPointerUp_ = this.onPointerUp_.bind(this);
            this.value = config47.value;
            this.viewProps = config47.viewProps;
            this.view = new SvPaletteView(doc43, {
                value: this.value,
                viewProps: this.viewProps
            });
            this.ptHandler_ = new PointerHandler(this.view.element);
            this.ptHandler_.emitter.on('down', this.onPointerDown_);
            this.ptHandler_.emitter.on('move', this.onPointerMove_);
            this.ptHandler_.emitter.on('up', this.onPointerUp_);
            this.view.element.addEventListener('keydown', this.onKeyDown_);
            this.view.element.addEventListener('keyup', this.onKeyUp_);
        }
        handlePointerEvent_(d, opts) {
            if (!d.point) return;
            const saturation = mapRange(d.point.x, 0, d.bounds.width, 0, 100);
            const value3 = mapRange(d.point.y, 0, d.bounds.height, 100, 0);
            const [h, , , a] = this.value.rawValue.getComponents('hsv');
            this.value.setRawValue(new Color([
                h,
                saturation,
                value3,
                a
            ], 'hsv'), opts);
        }
        onPointerDown_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: false,
                last: false
            });
        }
        onPointerMove_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: false,
                last: false
            });
        }
        onPointerUp_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: true,
                last: true
            });
        }
        onKeyDown_(ev) {
            if (isArrowKey(ev.key)) ev.preventDefault();
            const [h, s, v, a] = this.value.rawValue.getComponents('hsv');
            const baseStep = getBaseStepForColor(false);
            const ds = getStepForKey(baseStep, getHorizontalStepKeys(ev));
            const dv = getStepForKey(baseStep, getVerticalStepKeys(ev));
            if (ds === 0 && dv === 0) return;
            this.value.setRawValue(new Color([
                h,
                s + ds,
                v + dv,
                a
            ], 'hsv'), {
                forceEmit: false,
                last: false
            });
        }
        onKeyUp_(ev) {
            const baseStep = getBaseStepForColor(false);
            const ds = getStepForKey(baseStep, getHorizontalStepKeys(ev));
            const dv = getStepForKey(baseStep, getVerticalStepKeys(ev));
            if (ds === 0 && dv === 0) return;
            this.value.setRawValue(this.value.rawValue, {
                forceEmit: true,
                last: true
            });
        }
    }
    class ColorPickerController {
        constructor(doc44, config48){
            this.value = config48.value;
            this.viewProps = config48.viewProps;
            this.hPaletteC_ = new HPaletteController(doc44, {
                value: this.value,
                viewProps: this.viewProps
            });
            this.svPaletteC_ = new SvPaletteController(doc44, {
                value: this.value,
                viewProps: this.viewProps
            });
            this.alphaIcs_ = config48.supportsAlpha ? {
                palette: new APaletteController(doc44, {
                    value: this.value,
                    viewProps: this.viewProps
                }),
                text: new NumberTextController(doc44, {
                    parser: parseNumber,
                    baseStep: 0.1,
                    props: ValueMap.fromObject({
                        draggingScale: 0.01,
                        formatter: createNumberFormatter(2)
                    }),
                    value: createValue(0, {
                        constraint: new RangeConstraint({
                            min: 0,
                            max: 1
                        })
                    }),
                    viewProps: this.viewProps
                })
            } : null;
            if (this.alphaIcs_) connectValues({
                primary: this.value,
                secondary: this.alphaIcs_.text.value,
                forward: (p)=>{
                    return p.rawValue.getComponents()[3];
                },
                backward: (p, s)=>{
                    const comps1 = p.rawValue.getComponents();
                    comps1[3] = s.rawValue;
                    return new Color(comps1, p.rawValue.mode);
                }
            });
            this.textC_ = new ColorTextController(doc44, {
                parser: parseNumber,
                value: this.value,
                viewProps: this.viewProps
            });
            this.view = new ColorPickerView(doc44, {
                alphaViews: this.alphaIcs_ ? {
                    palette: this.alphaIcs_.palette.view,
                    text: this.alphaIcs_.text.view
                } : null,
                hPaletteView: this.hPaletteC_.view,
                supportsAlpha: config48.supportsAlpha,
                svPaletteView: this.svPaletteC_.view,
                textView: this.textC_.view
            });
        }
        get textController() {
            return this.textC_;
        }
    }
    const className$6 = ClassName('colsw');
    class ColorSwatchView {
        constructor(doc45, config49){
            this.onValueChange_ = this.onValueChange_.bind(this);
            config49.value.emitter.on('change', this.onValueChange_);
            this.value = config49.value;
            this.element = doc45.createElement('div');
            this.element.classList.add(className$6());
            config49.viewProps.bindClassModifiers(this.element);
            const swatchElem1 = doc45.createElement('div');
            swatchElem1.classList.add(className$6('sw'));
            this.element.appendChild(swatchElem1);
            this.swatchElem_ = swatchElem1;
            const buttonElem3 = doc45.createElement('button');
            buttonElem3.classList.add(className$6('b'));
            config49.viewProps.bindDisabled(buttonElem3);
            this.element.appendChild(buttonElem3);
            this.buttonElement = buttonElem3;
            this.update_();
        }
        update_() {
            const value3 = this.value.rawValue;
            this.swatchElem_.style.backgroundColor = colorToHexRgbaString(value3);
        }
        onValueChange_() {
            this.update_();
        }
    }
    class ColorSwatchController {
        constructor(doc46, config50){
            this.value = config50.value;
            this.viewProps = config50.viewProps;
            this.view = new ColorSwatchView(doc46, {
                value: this.value,
                viewProps: this.viewProps
            });
        }
    }
    class ColorController {
        constructor(doc47, config51){
            this.onButtonBlur_ = this.onButtonBlur_.bind(this);
            this.onButtonClick_ = this.onButtonClick_.bind(this);
            this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
            this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
            this.value = config51.value;
            this.viewProps = config51.viewProps;
            this.foldable_ = Foldable.create(config51.expanded);
            this.swatchC_ = new ColorSwatchController(doc47, {
                value: this.value,
                viewProps: this.viewProps
            });
            const buttonElem4 = this.swatchC_.view.buttonElement;
            buttonElem4.addEventListener('blur', this.onButtonBlur_);
            buttonElem4.addEventListener('click', this.onButtonClick_);
            this.textC_ = new TextController(doc47, {
                parser: config51.parser,
                props: ValueMap.fromObject({
                    formatter: config51.formatter
                }),
                value: this.value,
                viewProps: this.viewProps
            });
            this.view = new ColorView(doc47, {
                foldable: this.foldable_,
                pickerLayout: config51.pickerLayout
            });
            this.view.swatchElement.appendChild(this.swatchC_.view.element);
            this.view.textElement.appendChild(this.textC_.view.element);
            this.popC_ = config51.pickerLayout === 'popup' ? new PopupController(doc47, {
                viewProps: this.viewProps
            }) : null;
            const pickerC = new ColorPickerController(doc47, {
                supportsAlpha: config51.supportsAlpha,
                value: this.value,
                viewProps: this.viewProps
            });
            pickerC.view.allFocusableElements.forEach((elem2)=>{
                elem2.addEventListener('blur', this.onPopupChildBlur_);
                elem2.addEventListener('keydown', this.onPopupChildKeydown_);
            });
            this.pickerC_ = pickerC;
            if (this.popC_) {
                this.view.element.appendChild(this.popC_.view.element);
                this.popC_.view.element.appendChild(pickerC.view.element);
                connectValues({
                    primary: this.foldable_.value('expanded'),
                    secondary: this.popC_.shows,
                    forward: (p)=>p.rawValue
                    ,
                    backward: (_, s)=>s.rawValue
                });
            } else if (this.view.pickerElement) {
                this.view.pickerElement.appendChild(this.pickerC_.view.element);
                bindFoldable(this.foldable_, this.view.pickerElement);
            }
        }
        get textController() {
            return this.textC_;
        }
        onButtonBlur_(e) {
            if (!this.popC_) return;
            const elem2 = this.view.element;
            const nextTarget = forceCast(e.relatedTarget);
            if (!nextTarget || !elem2.contains(nextTarget)) this.popC_.shows.rawValue = false;
        }
        onButtonClick_() {
            this.foldable_.set('expanded', !this.foldable_.get('expanded'));
            if (this.foldable_.get('expanded')) this.pickerC_.view.allFocusableElements[0].focus();
        }
        onPopupChildBlur_(ev) {
            if (!this.popC_) return;
            const elem2 = this.popC_.view.element;
            const nextTarget = findNextTarget(ev);
            if (nextTarget && elem2.contains(nextTarget)) return;
            if (nextTarget && nextTarget === this.swatchC_.view.buttonElement && !supportsTouch(elem2.ownerDocument)) return;
            this.popC_.shows.rawValue = false;
        }
        onPopupChildKeydown_(ev) {
            if (this.popC_) {
                if (ev.key === 'Escape') this.popC_.shows.rawValue = false;
            } else if (this.view.pickerElement) {
                if (ev.key === 'Escape') this.swatchC_.view.buttonElement.focus();
            }
        }
    }
    function colorFromObject(value3) {
        if (Color.isColorObject(value3)) return Color.fromObject(value3);
        return Color.black();
    }
    function colorToRgbNumber(value3) {
        return removeAlphaComponent(value3.getComponents('rgb')).reduce((result, comp)=>{
            return result << 8 | Math.floor(comp) & 255;
        }, 0);
    }
    function colorToRgbaNumber(value3) {
        return value3.getComponents('rgb').reduce((result, comp, index)=>{
            const hex = Math.floor(index === 3 ? comp * 255 : comp) & 255;
            return result << 8 | hex;
        }, 0) >>> 0;
    }
    function numberToRgbColor(num) {
        return new Color([
            num >> 16 & 255,
            num >> 8 & 255,
            num & 255
        ], 'rgb');
    }
    function numberToRgbaColor(num) {
        return new Color([
            num >> 24 & 255,
            num >> 16 & 255,
            num >> 8 & 255,
            mapRange(num & 255, 0, 255, 0, 1), 
        ], 'rgb');
    }
    function colorFromRgbNumber(value3) {
        if (typeof value3 !== 'number') return Color.black();
        return numberToRgbColor(value3);
    }
    function colorFromRgbaNumber(value3) {
        if (typeof value3 !== 'number') return Color.black();
        return numberToRgbaColor(value3);
    }
    function createColorStringWriter(notation) {
        const stringify = getColorStringifier(notation);
        return (target5, value3)=>{
            writePrimitive(target5, stringify(value3));
        };
    }
    function createColorNumberWriter(supportsAlpha) {
        const colorToNumber = supportsAlpha ? colorToRgbaNumber : colorToRgbNumber;
        return (target5, value3)=>{
            writePrimitive(target5, colorToNumber(value3));
        };
    }
    function writeRgbaColorObject(target5, value3) {
        const obj2 = value3.toRgbaObject();
        target5.writeProperty('r', obj2.r);
        target5.writeProperty('g', obj2.g);
        target5.writeProperty('b', obj2.b);
        target5.writeProperty('a', obj2.a);
    }
    function writeRgbColorObject(target5, value3) {
        const obj2 = value3.toRgbaObject();
        target5.writeProperty('r', obj2.r);
        target5.writeProperty('g', obj2.g);
        target5.writeProperty('b', obj2.b);
    }
    function createColorObjectWriter(supportsAlpha) {
        return supportsAlpha ? writeRgbaColorObject : writeRgbColorObject;
    }
    function shouldSupportAlpha$1(inputParams) {
        return 'alpha' in inputParams && inputParams.alpha === true;
    }
    function createFormatter$1(supportsAlpha) {
        return supportsAlpha ? (v)=>colorToHexRgbaString(v, '0x')
         : (v)=>colorToHexRgbString(v, '0x')
        ;
    }
    const NumberColorInputPlugin = {
        id: 'input-color-number',
        type: 'input',
        accept: (value3, params)=>{
            if (typeof value3 !== 'number') return null;
            if (!('view' in params)) return null;
            if (params.view !== 'color') return null;
            const result = parseColorInputParams(params);
            return result ? {
                initialValue: value3,
                params: result
            } : null;
        },
        binding: {
            reader: (args)=>{
                return shouldSupportAlpha$1(args.params) ? colorFromRgbaNumber : colorFromRgbNumber;
            },
            equals: Color.equals,
            writer: (args)=>{
                return createColorNumberWriter(shouldSupportAlpha$1(args.params));
            }
        },
        controller: (args)=>{
            const supportsAlpha = shouldSupportAlpha$1(args.params);
            const expanded2 = 'expanded' in args.params ? args.params.expanded : undefined;
            const picker = 'picker' in args.params ? args.params.picker : undefined;
            return new ColorController(args.document, {
                expanded: expanded2 !== null && expanded2 !== void 0 ? expanded2 : false,
                formatter: createFormatter$1(supportsAlpha),
                parser: CompositeColorParser,
                pickerLayout: picker !== null && picker !== void 0 ? picker : 'popup',
                supportsAlpha: supportsAlpha,
                value: args.value,
                viewProps: args.viewProps
            });
        }
    };
    function shouldSupportAlpha(initialValue3) {
        return Color.isRgbaColorObject(initialValue3);
    }
    const ObjectColorInputPlugin = {
        id: 'input-color-object',
        type: 'input',
        accept: (value3, params)=>{
            if (!Color.isColorObject(value3)) return null;
            const result = parseColorInputParams(params);
            return result ? {
                initialValue: value3,
                params: result
            } : null;
        },
        binding: {
            reader: (_args)=>colorFromObject
            ,
            equals: Color.equals,
            writer: (args)=>createColorObjectWriter(shouldSupportAlpha(args.initialValue))
        },
        controller: (args)=>{
            const supportsAlpha = Color.isRgbaColorObject(args.initialValue);
            const expanded2 = 'expanded' in args.params ? args.params.expanded : undefined;
            const picker = 'picker' in args.params ? args.params.picker : undefined;
            const formatter = supportsAlpha ? colorToHexRgbaString : colorToHexRgbString;
            return new ColorController(args.document, {
                expanded: expanded2 !== null && expanded2 !== void 0 ? expanded2 : false,
                formatter: formatter,
                parser: CompositeColorParser,
                pickerLayout: picker !== null && picker !== void 0 ? picker : 'popup',
                supportsAlpha: supportsAlpha,
                value: args.value,
                viewProps: args.viewProps
            });
        }
    };
    const StringColorInputPlugin = {
        id: 'input-color-string',
        type: 'input',
        accept: (value3, params)=>{
            if (typeof value3 !== 'string') return null;
            if ('view' in params && params.view === 'text') return null;
            const notation = getColorNotation(value3);
            if (!notation) return null;
            const result = parseColorInputParams(params);
            return result ? {
                initialValue: value3,
                params: result
            } : null;
        },
        binding: {
            reader: (_args)=>colorFromString
            ,
            equals: Color.equals,
            writer: (args)=>{
                const notation = getColorNotation(args.initialValue);
                if (!notation) throw TpError.shouldNeverHappen();
                return createColorStringWriter(notation);
            }
        },
        controller: (args)=>{
            const notation = getColorNotation(args.initialValue);
            if (!notation) throw TpError.shouldNeverHappen();
            const stringifier = getColorStringifier(notation);
            const expanded2 = 'expanded' in args.params ? args.params.expanded : undefined;
            const picker = 'picker' in args.params ? args.params.picker : undefined;
            return new ColorController(args.document, {
                expanded: expanded2 !== null && expanded2 !== void 0 ? expanded2 : false,
                formatter: stringifier,
                parser: CompositeColorParser,
                pickerLayout: picker !== null && picker !== void 0 ? picker : 'popup',
                supportsAlpha: hasAlphaComponent(notation),
                value: args.value,
                viewProps: args.viewProps
            });
        }
    };
    class PointNdConstraint {
        constructor(config52){
            this.components = config52.components;
            this.asm_ = config52.assembly;
        }
        constrain(value) {
            const comps1 = this.asm_.toComponents(value).map((comp, index)=>{
                var _a14, _b;
                return (_b = (_a14 = this.components[index]) === null || _a14 === void 0 ? void 0 : _a14.constrain(comp)) !== null && _b !== void 0 ? _b : comp;
            });
            return this.asm_.fromComponents(comps1);
        }
    }
    const className$5 = ClassName('pndtxt');
    class PointNdTextView {
        constructor(doc48, config53){
            this.textViews = config53.textViews;
            this.element = doc48.createElement('div');
            this.element.classList.add(className$5());
            this.textViews.forEach((v)=>{
                const axisElem = doc48.createElement('div');
                axisElem.classList.add(className$5('a'));
                axisElem.appendChild(v.element);
                this.element.appendChild(axisElem);
            });
        }
    }
    function createAxisController(doc49, config54, index) {
        return new NumberTextController(doc49, {
            arrayPosition: index === 0 ? 'fst' : index === config54.axes.length - 1 ? 'lst' : 'mid',
            baseStep: config54.axes[index].baseStep,
            parser: config54.parser,
            props: config54.axes[index].textProps,
            value: createValue(0, {
                constraint: config54.axes[index].constraint
            }),
            viewProps: config54.viewProps
        });
    }
    class PointNdTextController {
        constructor(doc49, config54){
            this.value = config54.value;
            this.viewProps = config54.viewProps;
            this.acs_ = config54.axes.map((_, index)=>createAxisController(doc49, config54, index)
            );
            this.acs_.forEach((c, index)=>{
                connectValues({
                    primary: this.value,
                    secondary: c.value,
                    forward: (p)=>{
                        return config54.assembly.toComponents(p.rawValue)[index];
                    },
                    backward: (p, s)=>{
                        const comps1 = config54.assembly.toComponents(p.rawValue);
                        comps1[index] = s.rawValue;
                        return config54.assembly.fromComponents(comps1);
                    }
                });
            });
            this.view = new PointNdTextView(doc49, {
                textViews: this.acs_.map((ac)=>ac.view
                )
            });
        }
    }
    function createStepConstraint(params) {
        if ('step' in params && !isEmpty(params.step)) return new StepConstraint(params.step);
        return null;
    }
    function createRangeConstraint(params) {
        if ('max' in params && !isEmpty(params.max) || 'min' in params && !isEmpty(params.min)) return new RangeConstraint({
            max: params.max,
            min: params.min
        });
        return null;
    }
    function createConstraint$4(params) {
        const constraints1 = [];
        const sc = createStepConstraint(params);
        if (sc) constraints1.push(sc);
        const rc1 = createRangeConstraint(params);
        if (rc1) constraints1.push(rc1);
        const lc = createListConstraint(params.options);
        if (lc) constraints1.push(lc);
        return new CompositeConstraint(constraints1);
    }
    function findRange(constraint) {
        const c = constraint ? findConstraint(constraint, RangeConstraint) : null;
        if (!c) return [
            undefined,
            undefined
        ];
        return [
            c.minValue,
            c.maxValue
        ];
    }
    function estimateSuitableRange(constraint) {
        const [min, max] = findRange(constraint);
        return [
            min !== null && min !== void 0 ? min : 0,
            max !== null && max !== void 0 ? max : 100
        ];
    }
    const NumberInputPlugin = {
        id: 'input-number',
        type: 'input',
        accept: (value3, params)=>{
            if (typeof value3 !== 'number') return null;
            const p = ParamsParsers;
            const result = parseParams(params, {
                format: p.optional.function,
                max: p.optional.number,
                min: p.optional.number,
                options: p.optional.custom(parseListOptions),
                step: p.optional.number
            });
            return result ? {
                initialValue: value3,
                params: result
            } : null;
        },
        binding: {
            reader: (_args)=>numberFromUnknown
            ,
            constraint: (args)=>createConstraint$4(args.params)
            ,
            writer: (_args)=>writePrimitive
        },
        controller: (args)=>{
            var _a15, _b;
            const value3 = args.value;
            const c = args.constraint;
            if (c && findConstraint(c, ListConstraint)) return new ListController(args.document, {
                props: ValueMap.fromObject({
                    options: (_a15 = findListItems(c)) !== null && _a15 !== void 0 ? _a15 : []
                }),
                value: value3,
                viewProps: args.viewProps
            });
            const formatter = (_b = 'format' in args.params ? args.params.format : undefined) !== null && _b !== void 0 ? _b : createNumberFormatter(getSuitableDecimalDigits(c, value3.rawValue));
            if (c && findConstraint(c, RangeConstraint)) {
                const [min, max] = estimateSuitableRange(c);
                return new SliderTextController(args.document, {
                    baseStep: getBaseStep(c),
                    parser: parseNumber,
                    sliderProps: ValueMap.fromObject({
                        maxValue: max,
                        minValue: min
                    }),
                    textProps: ValueMap.fromObject({
                        draggingScale: getSuitableDraggingScale(c, value3.rawValue),
                        formatter: formatter
                    }),
                    value: value3,
                    viewProps: args.viewProps
                });
            }
            return new NumberTextController(args.document, {
                baseStep: getBaseStep(c),
                parser: parseNumber,
                props: ValueMap.fromObject({
                    draggingScale: getSuitableDraggingScale(c, value3.rawValue),
                    formatter: formatter
                }),
                value: value3,
                viewProps: args.viewProps
            });
        }
    };
    class Point2d {
        constructor(x = 0, y = 0){
            this.x = x;
            this.y = y;
        }
        getComponents() {
            return [
                this.x,
                this.y
            ];
        }
        static isObject(obj) {
            if (isEmpty(obj)) return false;
            const x1 = obj.x;
            const y1 = obj.y;
            if (typeof x1 !== 'number' || typeof y1 !== 'number') return false;
            return true;
        }
        static equals(v1, v2) {
            return v1.x === v2.x && v1.y === v2.y;
        }
        toObject() {
            return {
                x: this.x,
                y: this.y
            };
        }
    }
    const Point2dAssembly = {
        toComponents: (p)=>p.getComponents()
        ,
        fromComponents: (comps1)=>new Point2d(...comps1)
    };
    const className$4 = ClassName('p2d');
    class Point2dView {
        constructor(doc50, config55){
            this.element = doc50.createElement('div');
            this.element.classList.add(className$4());
            config55.viewProps.bindClassModifiers(this.element);
            bindValue(config55.expanded, valueToClassName(this.element, className$4(undefined, 'expanded')));
            const headElem2 = doc50.createElement('div');
            headElem2.classList.add(className$4('h'));
            this.element.appendChild(headElem2);
            const buttonElem5 = doc50.createElement('button');
            buttonElem5.classList.add(className$4('b'));
            buttonElem5.appendChild(createSvgIconElement(doc50, 'p2dpad'));
            config55.viewProps.bindDisabled(buttonElem5);
            headElem2.appendChild(buttonElem5);
            this.buttonElement = buttonElem5;
            const textElem2 = doc50.createElement('div');
            textElem2.classList.add(className$4('t'));
            headElem2.appendChild(textElem2);
            this.textElement = textElem2;
            if (config55.pickerLayout === 'inline') {
                const pickerElem = doc50.createElement('div');
                pickerElem.classList.add(className$4('p'));
                this.element.appendChild(pickerElem);
                this.pickerElement = pickerElem;
            } else this.pickerElement = null;
        }
    }
    const className$3 = ClassName('p2dp');
    class Point2dPickerView {
        constructor(doc51, config56){
            this.onFoldableChange_ = this.onFoldableChange_.bind(this);
            this.onValueChange_ = this.onValueChange_.bind(this);
            this.invertsY_ = config56.invertsY;
            this.maxValue_ = config56.maxValue;
            this.element = doc51.createElement('div');
            this.element.classList.add(className$3());
            if (config56.layout === 'popup') this.element.classList.add(className$3(undefined, 'p'));
            const padElem = doc51.createElement('div');
            padElem.classList.add(className$3('p'));
            config56.viewProps.bindTabIndex(padElem);
            this.element.appendChild(padElem);
            this.padElement = padElem;
            const svgElem = doc51.createElementNS(SVG_NS, 'svg');
            svgElem.classList.add(className$3('g'));
            this.padElement.appendChild(svgElem);
            this.svgElem_ = svgElem;
            const xAxisElem = doc51.createElementNS(SVG_NS, 'line');
            xAxisElem.classList.add(className$3('ax'));
            xAxisElem.setAttributeNS(null, 'x1', '0');
            xAxisElem.setAttributeNS(null, 'y1', '50%');
            xAxisElem.setAttributeNS(null, 'x2', '100%');
            xAxisElem.setAttributeNS(null, 'y2', '50%');
            this.svgElem_.appendChild(xAxisElem);
            const yAxisElem = doc51.createElementNS(SVG_NS, 'line');
            yAxisElem.classList.add(className$3('ax'));
            yAxisElem.setAttributeNS(null, 'x1', '50%');
            yAxisElem.setAttributeNS(null, 'y1', '0');
            yAxisElem.setAttributeNS(null, 'x2', '50%');
            yAxisElem.setAttributeNS(null, 'y2', '100%');
            this.svgElem_.appendChild(yAxisElem);
            const lineElem = doc51.createElementNS(SVG_NS, 'line');
            lineElem.classList.add(className$3('l'));
            lineElem.setAttributeNS(null, 'x1', '50%');
            lineElem.setAttributeNS(null, 'y1', '50%');
            this.svgElem_.appendChild(lineElem);
            this.lineElem_ = lineElem;
            const markerElem3 = doc51.createElement('div');
            markerElem3.classList.add(className$3('m'));
            this.padElement.appendChild(markerElem3);
            this.markerElem_ = markerElem3;
            config56.value.emitter.on('change', this.onValueChange_);
            this.value = config56.value;
            this.update_();
        }
        get allFocusableElements() {
            return [
                this.padElement
            ];
        }
        update_() {
            const [x1, y1] = this.value.rawValue.getComponents();
            const max = this.maxValue_;
            const px = mapRange(x1, -max, +max, 0, 100);
            const py = mapRange(y1, -max, +max, 0, 100);
            const ipy = this.invertsY_ ? 100 - py : py;
            this.lineElem_.setAttributeNS(null, 'x2', `${px}%`);
            this.lineElem_.setAttributeNS(null, 'y2', `${ipy}%`);
            this.markerElem_.style.left = `${px}%`;
            this.markerElem_.style.top = `${ipy}%`;
        }
        onValueChange_() {
            this.update_();
        }
        onFoldableChange_() {
            this.update_();
        }
    }
    function computeOffset(ev, baseSteps, invertsY) {
        return [
            getStepForKey(baseSteps[0], getHorizontalStepKeys(ev)),
            getStepForKey(baseSteps[1], getVerticalStepKeys(ev)) * (invertsY ? 1 : -1), 
        ];
    }
    class Point2dPickerController {
        constructor(doc52, config57){
            this.onPadKeyDown_ = this.onPadKeyDown_.bind(this);
            this.onPadKeyUp_ = this.onPadKeyUp_.bind(this);
            this.onPointerDown_ = this.onPointerDown_.bind(this);
            this.onPointerMove_ = this.onPointerMove_.bind(this);
            this.onPointerUp_ = this.onPointerUp_.bind(this);
            this.value = config57.value;
            this.viewProps = config57.viewProps;
            this.baseSteps_ = config57.baseSteps;
            this.maxValue_ = config57.maxValue;
            this.invertsY_ = config57.invertsY;
            this.view = new Point2dPickerView(doc52, {
                invertsY: this.invertsY_,
                layout: config57.layout,
                maxValue: this.maxValue_,
                value: this.value,
                viewProps: this.viewProps
            });
            this.ptHandler_ = new PointerHandler(this.view.padElement);
            this.ptHandler_.emitter.on('down', this.onPointerDown_);
            this.ptHandler_.emitter.on('move', this.onPointerMove_);
            this.ptHandler_.emitter.on('up', this.onPointerUp_);
            this.view.padElement.addEventListener('keydown', this.onPadKeyDown_);
            this.view.padElement.addEventListener('keyup', this.onPadKeyUp_);
        }
        handlePointerEvent_(d, opts) {
            if (!d.point) return;
            const max = this.maxValue_;
            const px = mapRange(d.point.x, 0, d.bounds.width, -max, +max);
            const py = mapRange(this.invertsY_ ? d.bounds.height - d.point.y : d.point.y, 0, d.bounds.height, -max, +max);
            this.value.setRawValue(new Point2d(px, py), opts);
        }
        onPointerDown_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: false,
                last: false
            });
        }
        onPointerMove_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: false,
                last: false
            });
        }
        onPointerUp_(ev) {
            this.handlePointerEvent_(ev.data, {
                forceEmit: true,
                last: true
            });
        }
        onPadKeyDown_(ev) {
            if (isArrowKey(ev.key)) ev.preventDefault();
            const [dx, dy] = computeOffset(ev, this.baseSteps_, this.invertsY_);
            if (dx === 0 && dy === 0) return;
            this.value.setRawValue(new Point2d(this.value.rawValue.x + dx, this.value.rawValue.y + dy), {
                forceEmit: false,
                last: false
            });
        }
        onPadKeyUp_(ev) {
            const [dx, dy] = computeOffset(ev, this.baseSteps_, this.invertsY_);
            if (dx === 0 && dy === 0) return;
            this.value.setRawValue(this.value.rawValue, {
                forceEmit: true,
                last: true
            });
        }
    }
    class Point2dController {
        constructor(doc53, config58){
            var _a16, _b;
            this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this);
            this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this);
            this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this);
            this.onPadButtonClick_ = this.onPadButtonClick_.bind(this);
            this.value = config58.value;
            this.viewProps = config58.viewProps;
            this.foldable_ = Foldable.create(config58.expanded);
            this.popC_ = config58.pickerLayout === 'popup' ? new PopupController(doc53, {
                viewProps: this.viewProps
            }) : null;
            const padC = new Point2dPickerController(doc53, {
                baseSteps: [
                    config58.axes[0].baseStep,
                    config58.axes[1].baseStep
                ],
                invertsY: config58.invertsY,
                layout: config58.pickerLayout,
                maxValue: config58.maxValue,
                value: this.value,
                viewProps: this.viewProps
            });
            padC.view.allFocusableElements.forEach((elem2)=>{
                elem2.addEventListener('blur', this.onPopupChildBlur_);
                elem2.addEventListener('keydown', this.onPopupChildKeydown_);
            });
            this.pickerC_ = padC;
            this.textC_ = new PointNdTextController(doc53, {
                assembly: Point2dAssembly,
                axes: config58.axes,
                parser: config58.parser,
                value: this.value,
                viewProps: this.viewProps
            });
            this.view = new Point2dView(doc53, {
                expanded: this.foldable_.value('expanded'),
                pickerLayout: config58.pickerLayout,
                viewProps: this.viewProps
            });
            this.view.textElement.appendChild(this.textC_.view.element);
            (_a16 = this.view.buttonElement) === null || _a16 === void 0 || _a16.addEventListener('blur', this.onPadButtonBlur_);
            (_b = this.view.buttonElement) === null || _b === void 0 || _b.addEventListener('click', this.onPadButtonClick_);
            if (this.popC_) {
                this.view.element.appendChild(this.popC_.view.element);
                this.popC_.view.element.appendChild(this.pickerC_.view.element);
                connectValues({
                    primary: this.foldable_.value('expanded'),
                    secondary: this.popC_.shows,
                    forward: (p)=>p.rawValue
                    ,
                    backward: (_, s)=>s.rawValue
                });
            } else if (this.view.pickerElement) {
                this.view.pickerElement.appendChild(this.pickerC_.view.element);
                bindFoldable(this.foldable_, this.view.pickerElement);
            }
        }
        onPadButtonBlur_(e) {
            if (!this.popC_) return;
            const elem2 = this.view.element;
            const nextTarget = forceCast(e.relatedTarget);
            if (!nextTarget || !elem2.contains(nextTarget)) this.popC_.shows.rawValue = false;
        }
        onPadButtonClick_() {
            this.foldable_.set('expanded', !this.foldable_.get('expanded'));
            if (this.foldable_.get('expanded')) this.pickerC_.view.allFocusableElements[0].focus();
        }
        onPopupChildBlur_(ev) {
            if (!this.popC_) return;
            const elem2 = this.popC_.view.element;
            const nextTarget = findNextTarget(ev);
            if (nextTarget && elem2.contains(nextTarget)) return;
            if (nextTarget && nextTarget === this.view.buttonElement && !supportsTouch(elem2.ownerDocument)) return;
            this.popC_.shows.rawValue = false;
        }
        onPopupChildKeydown_(ev) {
            if (this.popC_) {
                if (ev.key === 'Escape') this.popC_.shows.rawValue = false;
            } else if (this.view.pickerElement) {
                if (ev.key === 'Escape') this.view.buttonElement.focus();
            }
        }
    }
    function point2dFromUnknown(value3) {
        return Point2d.isObject(value3) ? new Point2d(value3.x, value3.y) : new Point2d();
    }
    function writePoint2d(target5, value3) {
        target5.writeProperty('x', value3.x);
        target5.writeProperty('y', value3.y);
    }
    function createDimensionConstraint$2(params) {
        if (!params) return undefined;
        const constraints1 = [];
        if (!isEmpty(params.step)) constraints1.push(new StepConstraint(params.step));
        if (!isEmpty(params.max) || !isEmpty(params.min)) constraints1.push(new RangeConstraint({
            max: params.max,
            min: params.min
        }));
        return new CompositeConstraint(constraints1);
    }
    function createConstraint$3(params) {
        return new PointNdConstraint({
            assembly: Point2dAssembly,
            components: [
                createDimensionConstraint$2('x' in params ? params.x : undefined),
                createDimensionConstraint$2('y' in params ? params.y : undefined), 
            ]
        });
    }
    function getSuitableMaxDimensionValue(constraint, rawValue) {
        const rc1 = constraint && findConstraint(constraint, RangeConstraint);
        if (rc1) return Math.max(Math.abs(rc1.minValue || 0), Math.abs(rc1.maxValue || 0));
        const step1 = getBaseStep(constraint);
        return Math.max(Math.abs(step1) * 10, Math.abs(rawValue) * 10);
    }
    function getSuitableMaxValue(initialValue3, constraint) {
        const xc = constraint instanceof PointNdConstraint ? constraint.components[0] : undefined;
        const yc = constraint instanceof PointNdConstraint ? constraint.components[1] : undefined;
        const xr = getSuitableMaxDimensionValue(xc, initialValue3.x);
        const yr = getSuitableMaxDimensionValue(yc, initialValue3.y);
        return Math.max(xr, yr);
    }
    function createAxis$2(initialValue3, constraint) {
        return {
            baseStep: getBaseStep(constraint),
            constraint: constraint,
            textProps: ValueMap.fromObject({
                draggingScale: getSuitableDraggingScale(constraint, initialValue3),
                formatter: createNumberFormatter(getSuitableDecimalDigits(constraint, initialValue3))
            })
        };
    }
    function shouldInvertY(params) {
        if (!('y' in params)) return false;
        const yParams = params.y;
        if (!yParams) return false;
        return 'inverted' in yParams ? !!yParams.inverted : false;
    }
    const Point2dInputPlugin = {
        id: 'input-point2d',
        type: 'input',
        accept: (value3, params)=>{
            if (!Point2d.isObject(value3)) return null;
            const p = ParamsParsers;
            const result = parseParams(params, {
                expanded: p.optional.boolean,
                picker: p.optional.custom(parsePickerLayout),
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.object({
                    inverted: p.optional.boolean,
                    max: p.optional.number,
                    min: p.optional.number,
                    step: p.optional.number
                })
            });
            return result ? {
                initialValue: value3,
                params: result
            } : null;
        },
        binding: {
            reader: (_args)=>point2dFromUnknown
            ,
            constraint: (args)=>createConstraint$3(args.params)
            ,
            equals: Point2d.equals,
            writer: (_args)=>writePoint2d
        },
        controller: (args)=>{
            const doc54 = args.document;
            const value3 = args.value;
            const c = args.constraint;
            if (!(c instanceof PointNdConstraint)) throw TpError.shouldNeverHappen();
            const expanded2 = 'expanded' in args.params ? args.params.expanded : undefined;
            const picker = 'picker' in args.params ? args.params.picker : undefined;
            return new Point2dController(doc54, {
                axes: [
                    createAxis$2(value3.rawValue.x, c.components[0]),
                    createAxis$2(value3.rawValue.y, c.components[1]), 
                ],
                expanded: expanded2 !== null && expanded2 !== void 0 ? expanded2 : false,
                invertsY: shouldInvertY(args.params),
                maxValue: getSuitableMaxValue(value3.rawValue, c),
                parser: parseNumber,
                pickerLayout: picker !== null && picker !== void 0 ? picker : 'popup',
                value: value3,
                viewProps: args.viewProps
            });
        }
    };
    class Point3d {
        constructor(x1 = 0, y1 = 0, z = 0){
            this.x = x1;
            this.y = y1;
            this.z = z;
        }
        getComponents() {
            return [
                this.x,
                this.y,
                this.z
            ];
        }
        static isObject(obj) {
            if (isEmpty(obj)) return false;
            const x2 = obj.x;
            const y2 = obj.y;
            const z1 = obj.z;
            if (typeof x2 !== 'number' || typeof y2 !== 'number' || typeof z1 !== 'number') return false;
            return true;
        }
        static equals(v1, v2) {
            return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
        }
        toObject() {
            return {
                x: this.x,
                y: this.y,
                z: this.z
            };
        }
    }
    const Point3dAssembly = {
        toComponents: (p)=>p.getComponents()
        ,
        fromComponents: (comps1)=>new Point3d(...comps1)
    };
    function point3dFromUnknown(value3) {
        return Point3d.isObject(value3) ? new Point3d(value3.x, value3.y, value3.z) : new Point3d();
    }
    function writePoint3d(target5, value3) {
        target5.writeProperty('x', value3.x);
        target5.writeProperty('y', value3.y);
        target5.writeProperty('z', value3.z);
    }
    function createDimensionConstraint$1(params) {
        if (!params) return undefined;
        const constraints1 = [];
        if (!isEmpty(params.step)) constraints1.push(new StepConstraint(params.step));
        if (!isEmpty(params.max) || !isEmpty(params.min)) constraints1.push(new RangeConstraint({
            max: params.max,
            min: params.min
        }));
        return new CompositeConstraint(constraints1);
    }
    function createConstraint$2(params) {
        return new PointNdConstraint({
            assembly: Point3dAssembly,
            components: [
                createDimensionConstraint$1('x' in params ? params.x : undefined),
                createDimensionConstraint$1('y' in params ? params.y : undefined),
                createDimensionConstraint$1('z' in params ? params.z : undefined), 
            ]
        });
    }
    function createAxis$1(initialValue3, constraint) {
        return {
            baseStep: getBaseStep(constraint),
            constraint: constraint,
            textProps: ValueMap.fromObject({
                draggingScale: getSuitableDraggingScale(constraint, initialValue3),
                formatter: createNumberFormatter(getSuitableDecimalDigits(constraint, initialValue3))
            })
        };
    }
    const Point3dInputPlugin = {
        id: 'input-point3d',
        type: 'input',
        accept: (value3, params)=>{
            if (!Point3d.isObject(value3)) return null;
            const p = ParamsParsers;
            const result = parseParams(params, {
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.custom(parsePointDimensionParams),
                z: p.optional.custom(parsePointDimensionParams)
            });
            return result ? {
                initialValue: value3,
                params: result
            } : null;
        },
        binding: {
            reader: (_args)=>point3dFromUnknown
            ,
            constraint: (args)=>createConstraint$2(args.params)
            ,
            equals: Point3d.equals,
            writer: (_args)=>writePoint3d
        },
        controller: (args)=>{
            const value3 = args.value;
            const c = args.constraint;
            if (!(c instanceof PointNdConstraint)) throw TpError.shouldNeverHappen();
            return new PointNdTextController(args.document, {
                assembly: Point3dAssembly,
                axes: [
                    createAxis$1(value3.rawValue.x, c.components[0]),
                    createAxis$1(value3.rawValue.y, c.components[1]),
                    createAxis$1(value3.rawValue.z, c.components[2]), 
                ],
                parser: parseNumber,
                value: value3,
                viewProps: args.viewProps
            });
        }
    };
    class Point4d {
        constructor(x2 = 0, y2 = 0, z1 = 0, w = 0){
            this.x = x2;
            this.y = y2;
            this.z = z1;
            this.w = w;
        }
        getComponents() {
            return [
                this.x,
                this.y,
                this.z,
                this.w
            ];
        }
        static isObject(obj) {
            if (isEmpty(obj)) return false;
            const x3 = obj.x;
            const y3 = obj.y;
            const z2 = obj.z;
            const w1 = obj.w;
            if (typeof x3 !== 'number' || typeof y3 !== 'number' || typeof z2 !== 'number' || typeof w1 !== 'number') return false;
            return true;
        }
        static equals(v1, v2) {
            return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z && v1.w === v2.w;
        }
        toObject() {
            return {
                x: this.x,
                y: this.y,
                z: this.z,
                w: this.w
            };
        }
    }
    const Point4dAssembly = {
        toComponents: (p)=>p.getComponents()
        ,
        fromComponents: (comps1)=>new Point4d(...comps1)
    };
    function point4dFromUnknown(value3) {
        return Point4d.isObject(value3) ? new Point4d(value3.x, value3.y, value3.z, value3.w) : new Point4d();
    }
    function writePoint4d(target5, value3) {
        target5.writeProperty('x', value3.x);
        target5.writeProperty('y', value3.y);
        target5.writeProperty('z', value3.z);
        target5.writeProperty('w', value3.w);
    }
    function createDimensionConstraint(params) {
        if (!params) return undefined;
        const constraints1 = [];
        if (!isEmpty(params.step)) constraints1.push(new StepConstraint(params.step));
        if (!isEmpty(params.max) || !isEmpty(params.min)) constraints1.push(new RangeConstraint({
            max: params.max,
            min: params.min
        }));
        return new CompositeConstraint(constraints1);
    }
    function createConstraint$1(params) {
        return new PointNdConstraint({
            assembly: Point4dAssembly,
            components: [
                createDimensionConstraint('x' in params ? params.x : undefined),
                createDimensionConstraint('y' in params ? params.y : undefined),
                createDimensionConstraint('z' in params ? params.z : undefined),
                createDimensionConstraint('w' in params ? params.w : undefined), 
            ]
        });
    }
    function createAxis(initialValue3, constraint) {
        return {
            baseStep: getBaseStep(constraint),
            constraint: constraint,
            textProps: ValueMap.fromObject({
                draggingScale: getSuitableDraggingScale(constraint, initialValue3),
                formatter: createNumberFormatter(getSuitableDecimalDigits(constraint, initialValue3))
            })
        };
    }
    const Point4dInputPlugin = {
        id: 'input-point4d',
        type: 'input',
        accept: (value3, params)=>{
            if (!Point4d.isObject(value3)) return null;
            const p = ParamsParsers;
            const result = parseParams(params, {
                x: p.optional.custom(parsePointDimensionParams),
                y: p.optional.custom(parsePointDimensionParams),
                z: p.optional.custom(parsePointDimensionParams),
                w: p.optional.custom(parsePointDimensionParams)
            });
            return result ? {
                initialValue: value3,
                params: result
            } : null;
        },
        binding: {
            reader: (_args)=>point4dFromUnknown
            ,
            constraint: (args)=>createConstraint$1(args.params)
            ,
            equals: Point4d.equals,
            writer: (_args)=>writePoint4d
        },
        controller: (args)=>{
            const value3 = args.value;
            const c = args.constraint;
            if (!(c instanceof PointNdConstraint)) throw TpError.shouldNeverHappen();
            return new PointNdTextController(args.document, {
                assembly: Point4dAssembly,
                axes: value3.rawValue.getComponents().map((comp, index)=>createAxis(comp, c.components[index])
                ),
                parser: parseNumber,
                value: value3,
                viewProps: args.viewProps
            });
        }
    };
    function createConstraint(params) {
        const constraints1 = [];
        const lc = createListConstraint(params.options);
        if (lc) constraints1.push(lc);
        return new CompositeConstraint(constraints1);
    }
    const StringInputPlugin = {
        id: 'input-string',
        type: 'input',
        accept: (value3, params)=>{
            if (typeof value3 !== 'string') return null;
            const p = ParamsParsers;
            const result = parseParams(params, {
                options: p.optional.custom(parseListOptions)
            });
            return result ? {
                initialValue: value3,
                params: result
            } : null;
        },
        binding: {
            reader: (_args)=>stringFromUnknown
            ,
            constraint: (args)=>createConstraint(args.params)
            ,
            writer: (_args)=>writePrimitive
        },
        controller: (args)=>{
            var _a17;
            const doc54 = args.document;
            const value3 = args.value;
            const c = args.constraint;
            if (c && findConstraint(c, ListConstraint)) return new ListController(doc54, {
                props: ValueMap.fromObject({
                    options: (_a17 = findListItems(c)) !== null && _a17 !== void 0 ? _a17 : []
                }),
                value: value3,
                viewProps: args.viewProps
            });
            return new TextController(doc54, {
                parser: (v)=>v
                ,
                props: ValueMap.fromObject({
                    formatter: formatString
                }),
                value: value3,
                viewProps: args.viewProps
            });
        }
    };
    const Constants = {
        monitor: {
            defaultInterval: 200,
            defaultLineCount: 3
        }
    };
    const className$2 = ClassName('mll');
    class MultiLogView {
        constructor(doc54, config59){
            this.onValueUpdate_ = this.onValueUpdate_.bind(this);
            this.formatter_ = config59.formatter;
            this.element = doc54.createElement('div');
            this.element.classList.add(className$2());
            config59.viewProps.bindClassModifiers(this.element);
            const textareaElem = doc54.createElement('textarea');
            textareaElem.classList.add(className$2('i'));
            textareaElem.style.height = `calc(var(--bld-us) * ${config59.lineCount})`;
            textareaElem.readOnly = true;
            config59.viewProps.bindDisabled(textareaElem);
            this.element.appendChild(textareaElem);
            this.textareaElem_ = textareaElem;
            config59.value.emitter.on('change', this.onValueUpdate_);
            this.value = config59.value;
            this.update_();
        }
        update_() {
            const elem2 = this.textareaElem_;
            const shouldScroll = elem2.scrollTop === elem2.scrollHeight - elem2.clientHeight;
            const lines = [];
            this.value.rawValue.forEach((value3)=>{
                if (value3 !== undefined) lines.push(this.formatter_(value3));
            });
            elem2.textContent = lines.join('\n');
            if (shouldScroll) elem2.scrollTop = elem2.scrollHeight;
        }
        onValueUpdate_() {
            this.update_();
        }
    }
    class MultiLogController {
        constructor(doc55, config60){
            this.value = config60.value;
            this.viewProps = config60.viewProps;
            this.view = new MultiLogView(doc55, {
                formatter: config60.formatter,
                lineCount: config60.lineCount,
                value: this.value,
                viewProps: this.viewProps
            });
        }
    }
    const className$1 = ClassName('sgl');
    class SingleLogView {
        constructor(doc56, config61){
            this.onValueUpdate_ = this.onValueUpdate_.bind(this);
            this.formatter_ = config61.formatter;
            this.element = doc56.createElement('div');
            this.element.classList.add(className$1());
            config61.viewProps.bindClassModifiers(this.element);
            const inputElem3 = doc56.createElement('input');
            inputElem3.classList.add(className$1('i'));
            inputElem3.readOnly = true;
            inputElem3.type = 'text';
            config61.viewProps.bindDisabled(inputElem3);
            this.element.appendChild(inputElem3);
            this.inputElement = inputElem3;
            config61.value.emitter.on('change', this.onValueUpdate_);
            this.value = config61.value;
            this.update_();
        }
        update_() {
            const values = this.value.rawValue;
            const lastValue = values[values.length - 1];
            this.inputElement.value = lastValue !== undefined ? this.formatter_(lastValue) : '';
        }
        onValueUpdate_() {
            this.update_();
        }
    }
    class SingleLogController {
        constructor(doc57, config62){
            this.value = config62.value;
            this.viewProps = config62.viewProps;
            this.view = new SingleLogView(doc57, {
                formatter: config62.formatter,
                value: this.value,
                viewProps: this.viewProps
            });
        }
    }
    const BooleanMonitorPlugin = {
        id: 'monitor-bool',
        type: 'monitor',
        accept: (value3, params)=>{
            if (typeof value3 !== 'boolean') return null;
            const p = ParamsParsers;
            const result = parseParams(params, {
                lineCount: p.optional.number
            });
            return result ? {
                initialValue: value3,
                params: result
            } : null;
        },
        binding: {
            reader: (_args)=>boolFromUnknown
        },
        controller: (args)=>{
            var _a18;
            if (args.value.rawValue.length === 1) return new SingleLogController(args.document, {
                formatter: BooleanFormatter,
                value: args.value,
                viewProps: args.viewProps
            });
            return new MultiLogController(args.document, {
                formatter: BooleanFormatter,
                lineCount: (_a18 = args.params.lineCount) !== null && _a18 !== void 0 ? _a18 : Constants.monitor.defaultLineCount,
                value: args.value,
                viewProps: args.viewProps
            });
        }
    };
    class GraphCursor {
        constructor(){
            this.emitter = new Emitter();
            this.index_ = -1;
        }
        get index() {
            return this.index_;
        }
        set index(index) {
            const changed = this.index_ !== index;
            if (changed) {
                this.index_ = index;
                this.emitter.emit('change', {
                    index: index,
                    sender: this
                });
            }
        }
    }
    const className1 = ClassName('grl');
    class GraphLogView {
        constructor(doc58, config63){
            this.onCursorChange_ = this.onCursorChange_.bind(this);
            this.onValueUpdate_ = this.onValueUpdate_.bind(this);
            this.element = doc58.createElement('div');
            this.element.classList.add(className1());
            config63.viewProps.bindClassModifiers(this.element);
            this.formatter_ = config63.formatter;
            this.minValue_ = config63.minValue;
            this.maxValue_ = config63.maxValue;
            this.cursor_ = config63.cursor;
            this.cursor_.emitter.on('change', this.onCursorChange_);
            const svgElem1 = doc58.createElementNS(SVG_NS, 'svg');
            svgElem1.classList.add(className1('g'));
            svgElem1.style.height = `calc(var(--bld-us) * ${config63.lineCount})`;
            this.element.appendChild(svgElem1);
            this.svgElem_ = svgElem1;
            const lineElem1 = doc58.createElementNS(SVG_NS, 'polyline');
            this.svgElem_.appendChild(lineElem1);
            this.lineElem_ = lineElem1;
            const tooltipElem1 = doc58.createElement('div');
            tooltipElem1.classList.add(className1('t'), ClassName('tt')());
            this.element.appendChild(tooltipElem1);
            this.tooltipElem_ = tooltipElem1;
            config63.value.emitter.on('change', this.onValueUpdate_);
            this.value = config63.value;
            this.update_();
        }
        get graphElement() {
            return this.svgElem_;
        }
        update_() {
            const bounds = this.svgElem_.getBoundingClientRect();
            const maxIndex = this.value.rawValue.length - 1;
            const min = this.minValue_;
            const max = this.maxValue_;
            const points = [];
            this.value.rawValue.forEach((v, index)=>{
                if (v === undefined) return;
                const x3 = mapRange(index, 0, maxIndex, 0, bounds.width);
                const y3 = mapRange(v, min, max, bounds.height, 0);
                points.push([
                    x3,
                    y3
                ].join(','));
            });
            this.lineElem_.setAttributeNS(null, 'points', points.join(' '));
            const tooltipElem2 = this.tooltipElem_;
            const value3 = this.value.rawValue[this.cursor_.index];
            if (value3 === undefined) {
                tooltipElem2.classList.remove(className1('t', 'a'));
                return;
            }
            const tx = mapRange(this.cursor_.index, 0, maxIndex, 0, bounds.width);
            const ty = mapRange(value3, min, max, bounds.height, 0);
            tooltipElem2.style.left = `${tx}px`;
            tooltipElem2.style.top = `${ty}px`;
            tooltipElem2.textContent = `${this.formatter_(value3)}`;
            if (!tooltipElem2.classList.contains(className1('t', 'a'))) {
                tooltipElem2.classList.add(className1('t', 'a'), className1('t', 'in'));
                forceReflow(tooltipElem2);
                tooltipElem2.classList.remove(className1('t', 'in'));
            }
        }
        onValueUpdate_() {
            this.update_();
        }
        onCursorChange_() {
            this.update_();
        }
    }
    class GraphLogController {
        constructor(doc59, config64){
            this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this);
            this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this);
            this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this);
            this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this);
            this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this);
            this.value = config64.value;
            this.viewProps = config64.viewProps;
            this.cursor_ = new GraphCursor();
            this.view = new GraphLogView(doc59, {
                cursor: this.cursor_,
                formatter: config64.formatter,
                lineCount: config64.lineCount,
                maxValue: config64.maxValue,
                minValue: config64.minValue,
                value: this.value,
                viewProps: this.viewProps
            });
            if (!supportsTouch(doc59)) {
                this.view.element.addEventListener('mousemove', this.onGraphMouseMove_);
                this.view.element.addEventListener('mouseleave', this.onGraphMouseLeave_);
            } else {
                const ph1 = new PointerHandler(this.view.element);
                ph1.emitter.on('down', this.onGraphPointerDown_);
                ph1.emitter.on('move', this.onGraphPointerMove_);
                ph1.emitter.on('up', this.onGraphPointerUp_);
            }
        }
        onGraphMouseLeave_() {
            this.cursor_.index = -1;
        }
        onGraphMouseMove_(ev) {
            const bounds = this.view.element.getBoundingClientRect();
            this.cursor_.index = Math.floor(mapRange(ev.offsetX, 0, bounds.width, 0, this.value.rawValue.length));
        }
        onGraphPointerDown_(ev) {
            this.onGraphPointerMove_(ev);
        }
        onGraphPointerMove_(ev) {
            if (!ev.data.point) {
                this.cursor_.index = -1;
                return;
            }
            this.cursor_.index = Math.floor(mapRange(ev.data.point.x, 0, ev.data.bounds.width, 0, this.value.rawValue.length));
        }
        onGraphPointerUp_() {
            this.cursor_.index = -1;
        }
    }
    function createFormatter(params) {
        return 'format' in params && !isEmpty(params.format) ? params.format : createNumberFormatter(2);
    }
    function createTextMonitor(args) {
        var _a19;
        if (args.value.rawValue.length === 1) return new SingleLogController(args.document, {
            formatter: createFormatter(args.params),
            value: args.value,
            viewProps: args.viewProps
        });
        return new MultiLogController(args.document, {
            formatter: createFormatter(args.params),
            lineCount: (_a19 = args.params.lineCount) !== null && _a19 !== void 0 ? _a19 : Constants.monitor.defaultLineCount,
            value: args.value,
            viewProps: args.viewProps
        });
    }
    function createGraphMonitor(args) {
        var _a19, _b1, _c;
        return new GraphLogController(args.document, {
            formatter: createFormatter(args.params),
            lineCount: (_a19 = args.params.lineCount) !== null && _a19 !== void 0 ? _a19 : Constants.monitor.defaultLineCount,
            maxValue: (_b1 = 'max' in args.params ? args.params.max : null) !== null && _b1 !== void 0 ? _b1 : 100,
            minValue: (_c = 'min' in args.params ? args.params.min : null) !== null && _c !== void 0 ? _c : 0,
            value: args.value,
            viewProps: args.viewProps
        });
    }
    function shouldShowGraph(params) {
        return 'view' in params && params.view === 'graph';
    }
    const NumberMonitorPlugin = {
        id: 'monitor-number',
        type: 'monitor',
        accept: (value3, params)=>{
            if (typeof value3 !== 'number') return null;
            const p = ParamsParsers;
            const result = parseParams(params, {
                format: p.optional.function,
                lineCount: p.optional.number,
                max: p.optional.number,
                min: p.optional.number,
                view: p.optional.string
            });
            return result ? {
                initialValue: value3,
                params: result
            } : null;
        },
        binding: {
            defaultBufferSize: (params)=>shouldShowGraph(params) ? 64 : 1
            ,
            reader: (_args)=>numberFromUnknown
        },
        controller: (args)=>{
            if (shouldShowGraph(args.params)) return createGraphMonitor(args);
            return createTextMonitor(args);
        }
    };
    const StringMonitorPlugin = {
        id: 'monitor-string',
        type: 'monitor',
        accept: (value3, params)=>{
            if (typeof value3 !== 'string') return null;
            const p = ParamsParsers;
            const result = parseParams(params, {
                lineCount: p.optional.number,
                multiline: p.optional.boolean
            });
            return result ? {
                initialValue: value3,
                params: result
            } : null;
        },
        binding: {
            reader: (_args)=>stringFromUnknown
        },
        controller: (args)=>{
            var _a19;
            const value3 = args.value;
            const multiline = value3.rawValue.length > 1 || 'multiline' in args.params && args.params.multiline;
            if (multiline) return new MultiLogController(args.document, {
                formatter: formatString,
                lineCount: (_a19 = args.params.lineCount) !== null && _a19 !== void 0 ? _a19 : Constants.monitor.defaultLineCount,
                value: value3,
                viewProps: args.viewProps
            });
            return new SingleLogController(args.document, {
                formatter: formatString,
                value: value3,
                viewProps: args.viewProps
            });
        }
    };
    class InputBinding {
        constructor(config65){
            this.onValueChange_ = this.onValueChange_.bind(this);
            this.reader = config65.reader;
            this.writer = config65.writer;
            this.emitter = new Emitter();
            this.value = config65.value;
            this.value.emitter.on('change', this.onValueChange_);
            this.target = config65.target;
            this.read();
        }
        read() {
            const targetValue = this.target.read();
            if (targetValue !== undefined) this.value.rawValue = this.reader(targetValue);
        }
        write_(rawValue) {
            this.writer(this.target, rawValue);
        }
        onValueChange_(ev) {
            this.write_(ev.rawValue);
            this.emitter.emit('change', {
                options: ev.options,
                rawValue: ev.rawValue,
                sender: this
            });
        }
    }
    function createInputBindingController(plugin, args) {
        const result = plugin.accept(args.target.read(), args.params);
        if (isEmpty(result)) return null;
        const p = ParamsParsers;
        const valueArgs = {
            target: args.target,
            initialValue: result.initialValue,
            params: result.params
        };
        const reader = plugin.binding.reader(valueArgs);
        const constraint = plugin.binding.constraint ? plugin.binding.constraint(valueArgs) : undefined;
        const value3 = createValue(reader(result.initialValue), {
            constraint: constraint,
            equals: plugin.binding.equals
        });
        const binding = new InputBinding({
            reader: reader,
            target: args.target,
            value: value3,
            writer: plugin.binding.writer(valueArgs)
        });
        const disabled = p.optional.boolean(args.params.disabled).value;
        const hidden = p.optional.boolean(args.params.hidden).value;
        const controller8 = plugin.controller({
            constraint: constraint,
            document: args.document,
            initialValue: result.initialValue,
            params: result.params,
            value: binding.value,
            viewProps: ViewProps.create({
                disabled: disabled,
                hidden: hidden
            })
        });
        const label = p.optional.string(args.params.label).value;
        return new InputBindingController(args.document, {
            binding: binding,
            blade: createBlade(),
            props: ValueMap.fromObject({
                label: label || args.target.key
            }),
            valueController: controller8
        });
    }
    class MonitorBinding {
        constructor(config66){
            this.onTick_ = this.onTick_.bind(this);
            this.reader_ = config66.reader;
            this.target = config66.target;
            this.emitter = new Emitter();
            this.value = config66.value;
            this.ticker = config66.ticker;
            this.ticker.emitter.on('tick', this.onTick_);
            this.read();
        }
        dispose() {
            this.ticker.dispose();
        }
        read() {
            const targetValue = this.target.read();
            if (targetValue === undefined) return;
            const buffer = this.value.rawValue;
            const newValue = this.reader_(targetValue);
            this.value.rawValue = createPushedBuffer(buffer, newValue);
            this.emitter.emit('update', {
                rawValue: newValue,
                sender: this
            });
        }
        onTick_(_) {
            this.read();
        }
    }
    function createTicker(document, interval1) {
        return interval1 === 0 ? new ManualTicker() : new IntervalTicker(document, interval1 !== null && interval1 !== void 0 ? interval1 : Constants.monitor.defaultInterval);
    }
    function createMonitorBindingController(plugin, args) {
        var _a20, _b1, _c;
        const P = ParamsParsers;
        const result = plugin.accept(args.target.read(), args.params);
        if (isEmpty(result)) return null;
        const bindingArgs = {
            target: args.target,
            initialValue: result.initialValue,
            params: result.params
        };
        const reader = plugin.binding.reader(bindingArgs);
        const bufferSize = (_b1 = (_a20 = P.optional.number(args.params.bufferSize).value) !== null && _a20 !== void 0 ? _a20 : plugin.binding.defaultBufferSize && plugin.binding.defaultBufferSize(result.params)) !== null && _b1 !== void 0 ? _b1 : 1;
        const interval1 = P.optional.number(args.params.interval).value;
        const binding = new MonitorBinding({
            reader: reader,
            target: args.target,
            ticker: createTicker(args.document, interval1),
            value: initializeBuffer(bufferSize)
        });
        const disabled = P.optional.boolean(args.params.disabled).value;
        const hidden = P.optional.boolean(args.params.hidden).value;
        const controller8 = plugin.controller({
            document: args.document,
            params: result.params,
            value: binding.value,
            viewProps: ViewProps.create({
                disabled: disabled,
                hidden: hidden
            })
        });
        const label = (_c = P.optional.string(args.params.label).value) !== null && _c !== void 0 ? _c : args.target.key;
        return new MonitorBindingController(args.document, {
            binding: binding,
            blade: createBlade(),
            props: ValueMap.fromObject({
                label: label
            }),
            valueController: controller8
        });
    }
    class PluginPool {
        constructor(){
            this.pluginsMap_ = {
                blades: [],
                inputs: [],
                monitors: []
            };
        }
        getAll() {
            return [
                ...this.pluginsMap_.blades,
                ...this.pluginsMap_.inputs,
                ...this.pluginsMap_.monitors, 
            ];
        }
        register(r) {
            if (r.type === 'blade') this.pluginsMap_.blades.unshift(r);
            else if (r.type === 'input') this.pluginsMap_.inputs.unshift(r);
            else if (r.type === 'monitor') this.pluginsMap_.monitors.unshift(r);
        }
        createInput(document, target, params) {
            const initialValue3 = target.read();
            if (isEmpty(initialValue3)) throw new TpError({
                context: {
                    key: target.key
                },
                type: 'nomatchingcontroller'
            });
            const bc = this.pluginsMap_.inputs.reduce((result, plugin)=>result || createInputBindingController(plugin, {
                    document: document,
                    target: target,
                    params: params
                })
            , null);
            if (bc) return bc;
            throw new TpError({
                context: {
                    key: target.key
                },
                type: 'nomatchingcontroller'
            });
        }
        createMonitor(document, target, params) {
            const bc = this.pluginsMap_.monitors.reduce((result, plugin)=>result || createMonitorBindingController(plugin, {
                    document: document,
                    params: params,
                    target: target
                })
            , null);
            if (bc) return bc;
            throw new TpError({
                context: {
                    key: target.key
                },
                type: 'nomatchingcontroller'
            });
        }
        createBlade(document, params) {
            const bc = this.pluginsMap_.blades.reduce((result, plugin)=>result || createBladeController(plugin, {
                    document: document,
                    params: params
                })
            , null);
            if (!bc) throw new TpError({
                type: 'nomatchingview',
                context: {
                    params: params
                }
            });
            return bc;
        }
        createBladeApi(bc) {
            if (bc instanceof InputBindingController) return new InputBindingApi(bc);
            if (bc instanceof MonitorBindingController) return new MonitorBindingApi(bc);
            if (bc instanceof RackController) return new RackApi(bc, this);
            const api = this.pluginsMap_.blades.reduce((result, plugin)=>result || plugin.api({
                    controller: bc,
                    pool: this
                })
            , null);
            if (!api) throw TpError.shouldNeverHappen();
            return api;
        }
    }
    function createDefaultPluginPool() {
        const pool3 = new PluginPool();
        [
            Point2dInputPlugin,
            Point3dInputPlugin,
            Point4dInputPlugin,
            StringInputPlugin,
            NumberInputPlugin,
            StringColorInputPlugin,
            ObjectColorInputPlugin,
            NumberColorInputPlugin,
            BooleanInputPlugin,
            BooleanMonitorPlugin,
            StringMonitorPlugin,
            NumberMonitorPlugin,
            ButtonBladePlugin,
            FolderBladePlugin,
            SeparatorBladePlugin,
            TabBladePlugin, 
        ].forEach((p)=>{
            pool3.register(p);
        });
        return pool3;
    }
    class ListApi extends BladeApi {
        constructor(controller8){
            super(controller8);
            this.emitter_ = new Emitter();
            this.controller_.valueController.value.emitter.on('change', (ev)=>{
                this.emitter_.emit('change', {
                    event: new TpChangeEvent(this, ev.rawValue)
                });
            });
        }
        get label() {
            return this.controller_.props.get('label');
        }
        set label(label) {
            this.controller_.props.set('label', label);
        }
        get options() {
            return this.controller_.valueController.props.get('options');
        }
        set options(options) {
            this.controller_.valueController.props.set('options', options);
        }
        get value() {
            return this.controller_.valueController.value.rawValue;
        }
        set value(value) {
            this.controller_.valueController.value.rawValue = value;
        }
        on(eventName, handler) {
            const bh = handler.bind(this);
            this.emitter_.on(eventName, (ev)=>{
                bh(ev.event);
            });
            return this;
        }
    }
    class SliderApi extends BladeApi {
        constructor(controller9){
            super(controller9);
            this.emitter_ = new Emitter();
            this.controller_.valueController.value.emitter.on('change', (ev)=>{
                this.emitter_.emit('change', {
                    event: new TpChangeEvent(this, ev.rawValue)
                });
            });
        }
        get label() {
            return this.controller_.props.get('label');
        }
        set label(label) {
            this.controller_.props.set('label', label);
        }
        get maxValue() {
            return this.controller_.valueController.sliderController.props.get('maxValue');
        }
        set maxValue(maxValue) {
            this.controller_.valueController.sliderController.props.set('maxValue', maxValue);
        }
        get minValue() {
            return this.controller_.valueController.sliderController.props.get('minValue');
        }
        set minValue(minValue) {
            this.controller_.valueController.sliderController.props.set('minValue', minValue);
        }
        get value() {
            return this.controller_.valueController.value.rawValue;
        }
        set value(value) {
            this.controller_.valueController.value.rawValue = value;
        }
        on(eventName, handler) {
            const bh = handler.bind(this);
            this.emitter_.on(eventName, (ev)=>{
                bh(ev.event);
            });
            return this;
        }
    }
    class TextApi extends BladeApi {
        constructor(controller10){
            super(controller10);
            this.emitter_ = new Emitter();
            this.controller_.valueController.value.emitter.on('change', (ev)=>{
                this.emitter_.emit('change', {
                    event: new TpChangeEvent(this, ev.rawValue)
                });
            });
        }
        get label() {
            return this.controller_.props.get('label');
        }
        set label(label) {
            this.controller_.props.set('label', label);
        }
        get formatter() {
            return this.controller_.valueController.props.get('formatter');
        }
        set formatter(formatter) {
            this.controller_.valueController.props.set('formatter', formatter);
        }
        get value() {
            return this.controller_.valueController.value.rawValue;
        }
        set value(value) {
            this.controller_.valueController.value.rawValue = value;
        }
        on(eventName, handler) {
            const bh = handler.bind(this);
            this.emitter_.on(eventName, (ev)=>{
                bh(ev.event);
            });
            return this;
        }
    }
    const ListBladePlugin = function() {
        return {
            id: 'list',
            type: 'blade',
            accept (params) {
                const p = ParamsParsers;
                const result = parseParams(params, {
                    options: p.required.custom(parseListOptions),
                    value: p.required.raw,
                    view: p.required.constant('list'),
                    label: p.optional.string
                });
                return result ? {
                    params: result
                } : null;
            },
            controller (args) {
                const ic = new ListController(args.document, {
                    props: ValueMap.fromObject({
                        options: normalizeListOptions(args.params.options)
                    }),
                    value: createValue(args.params.value),
                    viewProps: args.viewProps
                });
                return new LabeledValueController(args.document, {
                    blade: args.blade,
                    props: ValueMap.fromObject({
                        label: args.params.label
                    }),
                    valueController: ic
                });
            },
            api (args) {
                if (!(args.controller instanceof LabeledValueController)) return null;
                if (!(args.controller.valueController instanceof ListController)) return null;
                return new ListApi(args.controller);
            }
        };
    }();
    /**
     * @hidden
     */ function exportPresetJson(targets) {
        return targets.reduce((result, target5)=>{
            return Object.assign(result, {
                [target5.presetKey]: target5.read()
            });
        }, {
        });
    }
    /**
     * @hidden
     */ function importPresetJson(targets, preset) {
        targets.forEach((target5)=>{
            const value3 = preset[target5.presetKey];
            if (value3 !== undefined) target5.write(value3);
        });
    }
    class RootApi extends FolderApi {
        /**
         * @hidden
         */ constructor(controller11, pool3){
            super(controller11, pool3);
        }
        get element() {
            return this.controller_.view.element;
        }
        /**
         * Imports a preset of all inputs.
         * @param preset The preset object to import.
         */ importPreset(preset) {
            const targets = this.controller_.rackController.rack.find(InputBindingController).map((ibc)=>{
                return ibc.binding.target;
            });
            importPresetJson(targets, preset);
            this.refresh();
        }
        /**
         * Exports a preset of all inputs.
         * @return An exported preset object.
         */ exportPreset() {
            const targets = this.controller_.rackController.rack.find(InputBindingController).map((ibc)=>{
                return ibc.binding.target;
            });
            return exportPresetJson(targets);
        }
        /**
         * Refreshes all bindings of the pane.
         */ refresh() {
            // Force-read all input bindings
            this.controller_.rackController.rack.find(InputBindingController).forEach((ibc)=>{
                ibc.binding.read();
            });
            // Force-read all monitor bindings
            this.controller_.rackController.rack.find(MonitorBindingController).forEach((mbc)=>{
                mbc.binding.read();
            });
        }
    }
    class RootController extends FolderController {
        constructor(doc60, config67){
            super(doc60, {
                expanded: config67.expanded,
                blade: config67.blade,
                props: config67.props,
                root: true,
                viewProps: config67.viewProps
            });
        }
    }
    const SliderBladePlugin = {
        id: 'slider',
        type: 'blade',
        accept (params) {
            const p = ParamsParsers;
            const result = parseParams(params, {
                max: p.required.number,
                min: p.required.number,
                view: p.required.constant('slider'),
                format: p.optional.function,
                label: p.optional.string,
                value: p.optional.number
            });
            return result ? {
                params: result
            } : null;
        },
        controller (args) {
            var _a20, _b1;
            const v = (_a20 = args.params.value) !== null && _a20 !== void 0 ? _a20 : 0;
            const vc = new SliderTextController(args.document, {
                baseStep: 1,
                parser: parseNumber,
                sliderProps: ValueMap.fromObject({
                    maxValue: args.params.max,
                    minValue: args.params.min
                }),
                textProps: ValueMap.fromObject({
                    draggingScale: getSuitableDraggingScale(undefined, v),
                    formatter: (_b1 = args.params.format) !== null && _b1 !== void 0 ? _b1 : numberToString
                }),
                value: createValue(v),
                viewProps: args.viewProps
            });
            return new LabeledValueController(args.document, {
                blade: args.blade,
                props: ValueMap.fromObject({
                    label: args.params.label
                }),
                valueController: vc
            });
        },
        api (args) {
            if (!(args.controller instanceof LabeledValueController)) return null;
            if (!(args.controller.valueController instanceof SliderTextController)) return null;
            return new SliderApi(args.controller);
        }
    };
    const TextBladePlugin = function() {
        return {
            id: 'text',
            type: 'blade',
            accept (params) {
                const p = ParamsParsers;
                const result = parseParams(params, {
                    parse: p.required.function,
                    value: p.required.raw,
                    view: p.required.constant('text'),
                    format: p.optional.function,
                    label: p.optional.string
                });
                return result ? {
                    params: result
                } : null;
            },
            controller (args) {
                var _a21;
                const ic = new TextController(args.document, {
                    parser: args.params.parse,
                    props: ValueMap.fromObject({
                        formatter: (_a21 = args.params.format) !== null && _a21 !== void 0 ? _a21 : (v)=>String(v)
                    }),
                    value: createValue(args.params.value),
                    viewProps: args.viewProps
                });
                return new LabeledValueController(args.document, {
                    blade: args.blade,
                    props: ValueMap.fromObject({
                        label: args.params.label
                    }),
                    valueController: ic
                });
            },
            api (args) {
                if (!(args.controller instanceof LabeledValueController)) return null;
                if (!(args.controller.valueController instanceof TextController)) return null;
                return new TextApi(args.controller);
            }
        };
    }();
    function createDefaultWrapperElement(doc61) {
        const elem2 = doc61.createElement('div');
        elem2.classList.add(ClassName('dfw')());
        if (doc61.body) doc61.body.appendChild(elem2);
        return elem2;
    }
    function embedStyle(doc61, id, css) {
        if (doc61.querySelector(`style[data-tp-style=${id}]`)) return;
        const styleElem = doc61.createElement('style');
        styleElem.dataset.tpStyle = id;
        styleElem.textContent = css;
        doc61.head.appendChild(styleElem);
    }
    /**
     * The root pane of Tweakpane.
     */ class Pane extends RootApi {
        constructor(opt_config){
            var _a22;
            const config68 = opt_config || {
            };
            const doc61 = (_a22 = config68.document) !== null && _a22 !== void 0 ? _a22 : getWindowDocument();
            const pool4 = createDefaultPluginPool();
            const rootController = new RootController(doc61, {
                expanded: config68.expanded,
                blade: createBlade(),
                props: ValueMap.fromObject({
                    title: config68.title
                }),
                viewProps: ViewProps.create()
            });
            super(rootController, pool4);
            this.pool_ = pool4;
            this.containerElem_ = config68.container || createDefaultWrapperElement(doc61);
            this.containerElem_.appendChild(this.element);
            this.doc_ = doc61;
            this.usesDefaultWrapper_ = !config68.container;
            this.setUpDefaultPlugins_();
        }
        get document() {
            if (!this.doc_) throw TpError.alreadyDisposed();
            return this.doc_;
        }
        dispose() {
            const containerElem1 = this.containerElem_;
            if (!containerElem1) throw TpError.alreadyDisposed();
            if (this.usesDefaultWrapper_) {
                const parentElem = containerElem1.parentElement;
                if (parentElem) parentElem.removeChild(containerElem1);
            }
            this.containerElem_ = null;
            this.doc_ = null;
            super.dispose();
        }
        registerPlugin(bundle) {
            const plugins = 'plugin' in bundle ? [
                bundle.plugin
            ] : 'plugins' in bundle ? bundle.plugins : [];
            plugins.forEach((p)=>{
                this.pool_.register(p);
                this.embedPluginStyle_(p);
            });
        }
        embedPluginStyle_(plugin) {
            if (plugin.css) embedStyle(this.document, `plugin-${plugin.id}`, plugin.css);
        }
        setUpDefaultPlugins_() {
            // NOTE: This string literal will be replaced with the default CSS by Rollup at the compilation time
            embedStyle(this.document, 'default', '.tp-lstv_s,.tp-btnv_b,.tp-p2dv_b,.tp-colswv_sw,.tp-p2dpv_p,.tp-txtv_i,.tp-grlv_g,.tp-sglv_i,.tp-mllv_i,.tp-fldv_b,.tp-rotv_b,.tp-ckbv_i,.tp-coltxtv_ms,.tp-tbiv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-lstv_s,.tp-btnv_b,.tp-p2dv_b{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-lstv_s:hover,.tp-btnv_b:hover,.tp-p2dv_b:hover{background-color:var(--btn-bg-h)}.tp-lstv_s:focus,.tp-btnv_b:focus,.tp-p2dv_b:focus{background-color:var(--btn-bg-f)}.tp-lstv_s:active,.tp-btnv_b:active,.tp-p2dv_b:active{background-color:var(--btn-bg-a)}.tp-lstv_s:disabled,.tp-btnv_b:disabled,.tp-p2dv_b:disabled{opacity:0.5}.tp-colswv_sw,.tp-p2dpv_p,.tp-txtv_i{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-colswv_sw:hover,.tp-p2dpv_p:hover,.tp-txtv_i:hover{background-color:var(--in-bg-h)}.tp-colswv_sw:focus,.tp-p2dpv_p:focus,.tp-txtv_i:focus{background-color:var(--in-bg-f)}.tp-colswv_sw:active,.tp-p2dpv_p:active,.tp-txtv_i:active{background-color:var(--in-bg-a)}.tp-colswv_sw:disabled,.tp-p2dpv_p:disabled,.tp-txtv_i:disabled{opacity:0.5}.tp-grlv_g,.tp-sglv_i,.tp-mllv_i{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);width:100%}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono,Source Code Pro,Menlo,Courier,monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #2f3137);--bs-sh: var(--tp-base-shadow-color, rgba(0,0,0,0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #2f3137);--cnt-bg: var(--tp-container-background-color, rgba(187,188,196,0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187,188,196,0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187,188,196,0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187,188,196,0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(0,0,0,0.2));--in-bg-a: var(--tp-input-background-color-active, rgba(0,0,0,0.35));--in-bg-f: var(--tp-input-background-color-focus, rgba(0,0,0,0.3));--in-bg-h: var(--tp-input-background-color-hover, rgba(0,0,0,0.25));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187,188,196,0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0,0,0,0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187,188,196,0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(0,0,0,0.2))}.tp-fldv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-rotv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1 * var(--cnt-v-p))}.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-fldv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-rotv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-fldv_c>.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv{margin-left:4px}.tp-fldv_c>.tp-fldv>.tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-fldv_c .tp-fldv>.tp-fldv_c,.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-fldv_c>.tp-tabv>.tp-tabv_i,.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-fldv_c .tp-tabv>.tp-tabv_c,.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-fldv_b,.tp-rotv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:calc(var(--cnt-h-p) + 8px);padding-right:calc(2px * 2 + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-fldv_b:hover,.tp-rotv_b:hover{background-color:var(--cnt-bg-h)}.tp-fldv_b:focus,.tp-rotv_b:focus{background-color:var(--cnt-bg-f)}.tp-fldv_b:active,.tp-rotv_b:active{background-color:var(--cnt-bg-a)}.tp-fldv_b:disabled,.tp-rotv_b:disabled{opacity:0.5}.tp-fldv_m,.tp-rotv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:\'\';display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px) / 2 - 2px);margin:auto;opacity:0.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m,.tp-rotv.tp-rotv-expanded .tp-rotv_m{transform:none}.tp-fldv_c,.tp-rotv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c,.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c{display:none}.tp-fldv.tp-fldv-expanded>.tp-fldv_c,.tp-rotv.tp-rotv-expanded .tp-rotv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-coltxtv_m,.tp-lstv{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-coltxtv_mm,.tp-lstv_m{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-coltxtv_mm svg,.tp-lstv_m svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-coltxtv_mm svg path,.tp-lstv_m svg path{fill:currentColor}.tp-coltxtv_w,.tp-pndtxtv{display:flex}.tp-coltxtv_c,.tp-pndtxtv_a{width:100%}.tp-coltxtv_c+.tp-coltxtv_c,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-pndtxtv_a{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:0.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1 * var(--cnt-h-p));right:calc(-1 * var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:\'\';height:2px;left:calc(-1 * var(--cnt-h-p));position:absolute;right:calc(-1 * var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us) * 4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,0.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0,0,0,0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,0.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,0.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,0.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,0.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br)}.tp-colswv.tp-v-disabled{opacity:0.5}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,0.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:\'\';display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us) * 3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left 0.05s, top 0.05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:0.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:0.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:0.5}.tp-mllv_i{display:block;height:calc(var(--bld-us) * 3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:0.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1 * var(--cnt-h-p));right:calc(-1 * var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:0.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:0.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:0.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:\'\';display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:\'\';display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:\'\';display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:0.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:\'\';height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:\'\';height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:0.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:0.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:0.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:\'\';height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:0.1;position:absolute;top:0;transition:border-radius 0.1s, height 0.1s, transform 0.1s, width 0.1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:\'\';font-size:0.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(2px * 2 + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1 * var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1 * var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}');
            this.pool_.getAll().forEach((plugin)=>{
                this.embedPluginStyle_(plugin);
            });
            this.registerPlugin({
                plugins: [
                    SliderBladePlugin,
                    ListBladePlugin,
                    TabBladePlugin,
                    TextBladePlugin, 
                ]
            });
        }
    }
    const VERSION = new Semver('3.0.5');
    exports.BladeApi = BladeApi;
    exports.ButtonApi = ButtonApi;
    exports.FolderApi = FolderApi;
    exports.InputBindingApi = InputBindingApi;
    exports.ListApi = ListApi;
    exports.MonitorBindingApi = MonitorBindingApi;
    exports.Pane = Pane;
    exports.SeparatorApi = SeparatorApi;
    exports.SliderApi = SliderApi;
    exports.TabApi = TabApi;
    exports.TabPageApi = TabPageApi;
    exports.TextApi = TextApi;
    exports.TpChangeEvent = TpChangeEvent;
    exports.VERSION = VERSION;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

},{}]},["hyADc"], null, "parcelRequire7e77")

//# sourceMappingURL=utils.deba434e.js.map
