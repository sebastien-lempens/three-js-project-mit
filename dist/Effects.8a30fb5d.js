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
})({"3Mob8":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "703387218a30fb5d";
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

},{}],"4YosH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _three = require("three");
var _gsap = require("gsap");
var _shaderPass = require("three/examples/jsm/postprocessing/ShaderPass");
var _bokehPass = require("three/examples/jsm/postprocessing/BokehPass");
var _colorCorrectionShader = require("three/examples/jsm/shaders/ColorCorrectionShader");
//import { SobelOperatorShader } from 'three/examples/jsm/shaders/SobelOperatorShader'
var _unrealBloomPass = require("three/examples/jsm/postprocessing/UnrealBloomPass");
var _vertexGlsl = require("../shaders/fog/vertex.glsl");
var _vertexGlslDefault = parcelHelpers.interopDefault(_vertexGlsl);
var _fragmentGlsl = require("../shaders/fog/fragment.glsl");
var _fragmentGlslDefault = parcelHelpers.interopDefault(_fragmentGlsl);
var _vertexGlsl1 = require("../shaders/flame/vertex.glsl");
var _vertexGlslDefault1 = parcelHelpers.interopDefault(_vertexGlsl1);
var _fragmentGlsl1 = require("../shaders/flame/fragment.glsl");
var _fragmentGlslDefault1 = parcelHelpers.interopDefault(_fragmentGlsl1);
var _vertexGlsl2 = require("../shaders/dust/vertex.glsl");
var _vertexGlslDefault2 = parcelHelpers.interopDefault(_vertexGlsl2);
var _fragmentGlsl2 = require("../shaders/dust/fragment.glsl");
var _fragmentGlslDefault2 = parcelHelpers.interopDefault(_fragmentGlsl2);
var _vertexGlsl3 = require("../shaders/stars/vertex.glsl");
var _vertexGlslDefault3 = parcelHelpers.interopDefault(_vertexGlsl3);
var _fragmentGlsl3 = require("../shaders/stars/fragment.glsl");
var _fragmentGlslDefault3 = parcelHelpers.interopDefault(_fragmentGlsl3);
var _vertexGlsl4 = require("../shaders/scene/vertex.glsl");
var _vertexGlslDefault4 = parcelHelpers.interopDefault(_vertexGlsl4);
var _fragmentGlsl4 = require("../shaders/scene/fragment.glsl");
var _fragmentGlslDefault4 = parcelHelpers.interopDefault(_fragmentGlsl4);
var _seaOnBeforeCompileJs = require("../shaders/meshes/seaOnBeforeCompile.js");
var _seaOnBeforeCompileJsDefault = parcelHelpers.interopDefault(_seaOnBeforeCompileJs);
var _starsOnBeforeCompileJs = require("../shaders/meshes/starsOnBeforeCompile.js");
var _starsOnBeforeCompileJsDefault = parcelHelpers.interopDefault(_starsOnBeforeCompileJs);
var _shoresOnBeforeCompileJs = require("../shaders/meshes/shoresOnBeforeCompile.js");
var _shoresOnBeforeCompileJsDefault = parcelHelpers.interopDefault(_shoresOnBeforeCompileJs);
var _treesOnBeforeCompileJs = require("../shaders/meshes/treesOnBeforeCompile.js");
var _treesOnBeforeCompileJsDefault = parcelHelpers.interopDefault(_treesOnBeforeCompileJs);
var _mountainsOnBeforeCompileJs = require("../shaders/meshes/mountainsOnBeforeCompile.js");
var _mountainsOnBeforeCompileJsDefault = parcelHelpers.interopDefault(_mountainsOnBeforeCompileJs);
var _vegetationOnBeforeCompileJs = require("../shaders/meshes/vegetationOnBeforeCompile.js");
var _vegetationOnBeforeCompileJsDefault = parcelHelpers.interopDefault(_vegetationOnBeforeCompileJs);
var _rocksOnBeforeCompileJs = require("../shaders/meshes/rocksOnBeforeCompile.js");
var _rocksOnBeforeCompileJsDefault = parcelHelpers.interopDefault(_rocksOnBeforeCompileJs);
var _palmtreesOnBeforeCompileJs = require("../shaders/meshes/palmtreesOnBeforeCompile.js");
var _palmtreesOnBeforeCompileJsDefault = parcelHelpers.interopDefault(_palmtreesOnBeforeCompileJs);
var _moonOnBeforeCompileJs = require("../shaders/meshes/moonOnBeforeCompile.js");
var _moonOnBeforeCompileJsDefault = parcelHelpers.interopDefault(_moonOnBeforeCompileJs);
class Effects {
    constructor(){
        this.app = window.app;
        this.scene = this.app.webgl.scene;
        this.camera = this.app.webgl.camera;
        this.meshes = this.app.webgl.world.meshes;
        this.effectComposer = {
        };
        this.fog = {
            geometry: null,
            material: null,
            mesh: null
        };
        this.flame = {
            geometry: null,
            material: null,
            mesh: null
        };
        this.flame2 = {
            geometry: null,
            material: null,
            mesh: null
        };
        this.stars = {
            geometry: null,
            material: null,
            mesh: null
        };
        this.dust = {
            geometry: null,
            material: null,
            mesh: null,
            colors: [
                [
                    0,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    1
                ], 
            ],
            particles: 400
        };
        this.mesh = {
        };
        this.addFog();
        this.addFlames();
        this.addStars();
        this.addDust();
        this.setShaderMeshTrees();
        this.setShaderMeshShores();
        this.setShaderMeshSea();
        this.setShaderMeshMountains();
        this.setShaderMeshVegetation();
        this.setShaderMeshRocks();
        this.setShaderMeshPalmtrees();
        this.setShaderMeshMoon();
        this.setShaderScene();
    }
    addFog() {
        this.fog.geometry = new _three.BoxBufferGeometry(0.6, 0.005, 0.5, 1, 1, 1);
        this.fog.material = new _three.ShaderMaterial({
            clipping: true,
            clippingPlanes: this.app.webgl.clippingPlanes,
            uniforms: {
                uTime: {
                    value: this.app.timer
                },
                uColor: {
                    value: this.scene.background
                }
            },
            transparent: true,
            vertexShader: _vertexGlslDefault.default,
            fragmentShader: _fragmentGlslDefault.default
        });
        this.fog.mesh = new _three.Mesh(this.fog.geometry, this.fog.material);
        this.fog.mesh.position.z = 0;
        this.fog.mesh.position.y = 0.0065;
        this.fog.mesh.name = 'Fog';
        this.scene.add(this.fog.mesh);
    }
    addFlames() {
        this.flame.geometry = new _three.PlaneBufferGeometry(0.03, 0.03);
        this.flame.material = new _three.ShaderMaterial({
            transparent: true,
            clipping: true,
            clippingPlanes: this.app.webgl.clippingPlanes,
            uniforms: {
                uTime: {
                    value: this.app.timer
                }
            },
            vertexShader: _vertexGlslDefault1.default,
            fragmentShader: _fragmentGlslDefault1.default
        });
        this.flame.mesh = new _three.Mesh(this.flame.geometry, this.flame.material);
        this.flame.mesh.position.set(-0.0646, 0.031, -0.027);
        this.flame.mesh.name = 'Flame';
        this.flame2.mesh = this.flame.mesh.clone();
        this.flame2.mesh.name = 'Flame 2';
        this.flame2.mesh.position.set(-0.055, 0.031, -0.083);
        this.scene.add(this.flame.mesh);
        setTimeout(()=>this.scene.add(this.flame2.mesh)
        , 500);
    }
    addStars() {
        const vertices = [];
        const opacities = [];
        for(let i = 0; i < 5000; i++){
            const x = _three.MathUtils.randFloatSpread(10);
            const y = _three.MathUtils.randFloat(0, 5);
            const z = _three.MathUtils.randFloatSpread(10);
            vertices.push(x, y, z);
            opacities.push(Math.random() * 0.4 + 0.05);
        }
        this.stars.geometry = new _three.BufferGeometry();
        this.stars.geometry.setAttribute('position', new _three.Float32BufferAttribute(vertices, 3));
        this.stars.geometry.setAttribute('opacity', new _three.Float32BufferAttribute(opacities, 1));
        this.stars.material = new _three.ShaderMaterial({
            transparent: true,
            uniforms: {
                uSize: {
                    value: 0.9
                }
            },
            vertexShader: _vertexGlslDefault3.default,
            fragmentShader: _fragmentGlslDefault3.default
        });
        this.stars.mesh = new _three.Points(this.stars.geometry, this.stars.material);
        this.scene.add(this.stars.mesh);
    }
    addDust() {
        // Vertices Position
        const positions = [];
        const colors = [];
        const opacities = [];
        for(let i = 0; i < this.dust.particles; i++){
            const xyz = [
                _three.MathUtils.randFloatSpread(0.25),
                Math.random() * 0.05 + 0.005,
                _three.MathUtils.randFloatSpread(0.25), 
            ];
            const randomColor = this.dust.colors[Math.round(Math.random() * (this.dust.colors.length - 1))];
            const rgb = randomColor;
            const opacity = Math.random() + 0.2;
            positions.push(...xyz);
            colors.push(...rgb);
            opacities.push(opacity);
        }
        this.dust.geometry = new _three.BufferGeometry();
        this.dust.geometry.setAttribute('position', new _three.Float32BufferAttribute(positions, 3));
        this.dust.geometry.setAttribute('color', new _three.Float32BufferAttribute(colors, 3));
        this.dust.geometry.setAttribute('opacity', new _three.Float32BufferAttribute(opacities, 1));
        this.dust.material = new _three.ShaderMaterial({
            clipping: true,
            clippingPlanes: this.app.webgl.clippingPlanes,
            uniforms: {
                uTime: {
                    value: this.app.timer
                },
                uSize: {
                    value: 0.9
                }
            },
            depthWrite: false,
            blending: _three.AdditiveBlending,
            vertexColors: true,
            vertexShader: _vertexGlslDefault2.default,
            fragmentShader: _fragmentGlslDefault2.default
        });
        this.dust.mesh = new _three.Points(this.dust.geometry, this.dust.material);
        this.scene.add(this.dust.mesh);
    }
    setShaderMeshSea() {
        const [mesh] = this.meshes.filter((mesh1)=>mesh1.name === 'Sea'
        );
        this.mesh.sea = mesh;
        _seaOnBeforeCompileJsDefault.default(this.mesh.sea);
    }
    setShaderMeshShores() {
        const [mesh] = this.meshes.filter((mesh1)=>mesh1.name === 'Shores'
        );
        this.mesh.shores = mesh;
        _shoresOnBeforeCompileJsDefault.default(this.mesh.shores);
    }
    setShaderMeshTrees() {
        const [mesh] = this.meshes.filter((mesh1)=>mesh1.name === 'Trees'
        );
        this.mesh.trees = mesh;
        _treesOnBeforeCompileJsDefault.default(this.mesh.trees);
    }
    setShaderMeshMountains() {
        const [mesh] = this.meshes.filter((mesh1)=>mesh1.name === 'Mountains'
        );
        this.mesh.mountains = mesh;
        _mountainsOnBeforeCompileJsDefault.default(this.mesh.mountains);
    }
    setShaderMeshVegetation() {
        const [mesh] = this.meshes.filter((mesh1)=>mesh1.name === 'Vegetation'
        );
        this.mesh.vegetation = mesh;
        _vegetationOnBeforeCompileJsDefault.default(this.mesh.vegetation);
    }
    setShaderMeshRocks() {
        const [mesh] = this.meshes.filter((mesh1)=>mesh1.name === 'Rocks'
        );
        this.mesh.rocks = mesh;
        _rocksOnBeforeCompileJsDefault.default(this.mesh.rocks);
    }
    setShaderMeshPalmtrees() {
        const [mesh] = this.meshes.filter((mesh1)=>mesh1.name === 'Palmtrees'
        );
        this.mesh.palmtrees = mesh;
        _palmtreesOnBeforeCompileJsDefault.default(this.mesh.palmtrees);
    }
    setShaderMeshMoon() {
        const [mesh] = this.meshes.filter((mesh1)=>mesh1.name === 'Moon'
        );
        this.mesh.moon = mesh;
        this.mesh.moon.scale.addScalar(0.35);
        _moonOnBeforeCompileJsDefault.default(this.mesh.moon);
    }
    async setShaderScene() {
        /**
     * BloomPass Shader
     */ const bloomPass = new _unrealBloomPass.UnrealBloomPass();
        bloomPass.strength = this.app.params.scene.effect.bloom.strength, bloomPass.radius = this.app.params.scene.effect.bloom.radius, bloomPass.threshold = this.app.params.scene.effect.bloom.threshold, this.effectComposer.bloomPass = bloomPass;
        /**
     * BokehPass Shader
     */ const bokehPass = new _bokehPass.BokehPass(this.scene, this.camera, {
            focus: this.app.params.scene.effect.bokeh.focus,
            aperture: this.app.params.scene.effect.bokeh.aperture,
            maxblur: 0.01
        });
        this.effectComposer.bokehPass = bokehPass;
        /**
     * Custom Shaders
     * 1. Color Correction
     * 2. Custom Shader
     */ const colorCorrectionShader = new _shaderPass.ShaderPass(_colorCorrectionShader.ColorCorrectionShader);
        colorCorrectionShader.uniforms.addRGB.value = new _three.Vector3(0, 0.01, 0.04);
        colorCorrectionShader.uniforms.powRGB.value = new _three.Vector3(1, 1, 0.95);
        /*const edgeShader = new ShaderPass(SobelOperatorShader)

		edgeShader.uniforms.resolution.value = new THREE.Vector2(
			window.innerWidth,
			window.innerHeight
		)
		this.effectComposer.edgeShader = edgeShader */ const sceneReveal = {
            uniforms: {
                tDiffuse: {
                    value: null
                },
                opacity: {
                    value: 1
                },
                uColor: {
                    value: this.scene.background
                },
                uProgress: {
                    value: 0.0001
                }
            },
            vertexShader: _vertexGlslDefault4.default,
            fragmentShader: _fragmentGlslDefault4.default
        };
        const sceneRevealPass = new _shaderPass.ShaderPass(sceneReveal);
        sceneRevealPass.material.transparent = true;
        const { mainTitleEl  } = this.app.webgl;
        _gsap.gsap.to(sceneRevealPass.material.uniforms.uProgress, {
            onStart () {
                mainTitleEl.removeAttribute('style');
                _gsap.gsap.to(mainTitleEl, {
                    ease: 'power1.inOut',
                    delay: 0.5,
                    duration: 2,
                    opacity: 0,
                    force3D: true,
                    scale: 1.2,
                    onComplete () {
                        const h1 = document.querySelector('h1');
                        h1.classList.add('top-left-position');
                        _gsap.gsap.set(mainTitleEl, {
                            scale: 1
                        });
                        _gsap.gsap.fromTo(mainTitleEl, {
                            opacity: 0,
                            scale: 0.9
                        }, {
                            opacity: 1,
                            scale: 1,
                            duration: 2,
                            force3D: true,
                            ease: 'power1.inOut'
                        });
                    }
                });
            },
            delay: 1,
            value: 1.2,
            duration: 4,
            ease: 'none'
        });
        /**
     * Add shader to composer
     */ //this.app.webgl.composer.removePass(edgeShader)
        //this.app.webgl.composer.addPass(edgeShader)
        this.app.webgl.composer.addPass(sceneRevealPass);
        this.app.webgl.composer.addPass(colorCorrectionShader);
        this.app.webgl.composer.addPass(bloomPass);
        this.app.webgl.composer.addPass(bokehPass);
        this.app.effectComposer = this.effectComposer;
    }
    update() {
        if (this.fog.material) {
            this.fog.material.uniforms.uTime.value = this.app.timer;
            this.fog.material.uniforms.uColor.value = this.scene.background;
        }
        if (this.flame.material) {
            this.flame.material.uniforms.uTime.value = this.app.timer;
            this.flame.mesh.rotation.y = this.flame2.mesh.rotation.y = this.app.webgl.camera.rotation.y;
        }
        if (this.dust.mesh) this.dust.material.uniforms.uTime.value = this.app.timer;
        if (this.mesh.sea) {
            if (!this.mesh.sea.material.userData.materialShader.uniforms.uDepth.value) this.mesh.sea.material.userData.materialShader.uniforms.uDepth.value = new _three.TextureLoader().load('assets/textures/GrayscaleSea.jpg');
            this.mesh.sea.material.userData.materialShader.uniforms.uColor.value = this.scene.background;
            this.mesh.sea.material.userData.materialShader.uniforms.uTime.value = this.app.timer;
        }
        if (this.mesh.shores) {
            if (!this.mesh.shores.material.userData.materialShader.uniforms.uDepth.value) this.mesh.shores.material.userData.materialShader.uniforms.uDepth.value = new _three.TextureLoader().load('assets/textures/GrayscaleShores.jpg');
            this.mesh.shores.material.userData.materialShader.uniforms.uColor.value = this.scene.background;
        }
        if (this.mesh.trees) {
            if (!this.mesh.trees.material.userData.materialShader.uniforms.uDepth.value) this.mesh.trees.material.userData.materialShader.uniforms.uDepth.value = new _three.TextureLoader().load('assets/textures/GrayscaleTrees.jpg');
            this.mesh.trees.material.userData.materialShader.uniforms.uColor.value = this.scene.background;
        }
        if (this.mesh.mountains) {
            if (!this.mesh.mountains.material.userData.materialShader.uniforms.uDepth.value) this.mesh.mountains.material.userData.materialShader.uniforms.uDepth.value = new _three.TextureLoader().load('assets/textures/GrayscaleMountains.jpg');
            this.mesh.mountains.material.userData.materialShader.uniforms.uColor.value = this.scene.background;
        }
        if (this.mesh.vegetation) {
            if (!this.mesh.vegetation.material.userData.materialShader.uniforms.uDepth.value) this.mesh.vegetation.material.userData.materialShader.uniforms.uDepth.value = new _three.TextureLoader().load('assets/textures/GrayscaleVegetation.jpg');
            this.mesh.vegetation.material.userData.materialShader.uniforms.uColor.value = this.scene.background;
        }
        if (this.mesh.rocks) {
            if (!this.mesh.rocks.material.userData.materialShader.uniforms.uDepth.value) this.mesh.rocks.material.userData.materialShader.uniforms.uDepth.value = new _three.TextureLoader().load('assets/textures/GrayscaleRocks.jpg');
            this.mesh.rocks.material.userData.materialShader.uniforms.uColor.value = this.scene.background;
        }
        if (this.mesh.palmtrees) {
            if (!this.mesh.palmtrees.material.userData.materialShader.uniforms.uDepth.value) this.mesh.palmtrees.material.userData.materialShader.uniforms.uDepth.value = new _three.TextureLoader().load('assets/textures/GrayscalePalmtrees.jpg');
            if (!this.mesh.palmtrees.material.userData.materialShader.uniforms.uDepth2.value) this.mesh.palmtrees.material.userData.materialShader.uniforms.uDepth2.value = new _three.TextureLoader().load('assets/textures/Grayscale2Palmtrees.jpg');
            this.mesh.palmtrees.material.userData.materialShader.uniforms.uColor.value = this.scene.background;
            this.mesh.palmtrees.material.userData.materialShader.uniforms.uTime.value = this.app.timer;
        }
        if (this.mesh.moon) this.mesh.moon.material.userData.materialShader.uniforms.uHaloColor.value = this.scene.background;
    }
}
exports.default = Effects;

},{"three":"1AKvZ","gsap":"iCVLt","three/examples/jsm/postprocessing/ShaderPass":"io8KX","three/examples/jsm/postprocessing/BokehPass":"dp9lp","three/examples/jsm/shaders/ColorCorrectionShader":"fY6QE","three/examples/jsm/postprocessing/UnrealBloomPass":"cmZxs","../shaders/fog/vertex.glsl":"6RgtW","../shaders/fog/fragment.glsl":"bfzpA","../shaders/flame/vertex.glsl":"gxlD0","../shaders/flame/fragment.glsl":"5XfPS","../shaders/dust/vertex.glsl":"6Tmse","../shaders/dust/fragment.glsl":"iaRk0","../shaders/stars/vertex.glsl":"jaDJ9","../shaders/stars/fragment.glsl":"b9P8p","../shaders/scene/vertex.glsl":"36tKB","../shaders/scene/fragment.glsl":"cP8Bk","../shaders/meshes/seaOnBeforeCompile.js":"74KAB","../shaders/meshes/starsOnBeforeCompile.js":"iuosM","../shaders/meshes/shoresOnBeforeCompile.js":"6aVLU","../shaders/meshes/treesOnBeforeCompile.js":"bDDMj","../shaders/meshes/mountainsOnBeforeCompile.js":"7ya9A","../shaders/meshes/vegetationOnBeforeCompile.js":"f1xIN","../shaders/meshes/rocksOnBeforeCompile.js":"266Rp","../shaders/meshes/palmtreesOnBeforeCompile.js":"cz6pn","../shaders/meshes/moonOnBeforeCompile.js":"hEEzq","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"io8KX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShaderPass", ()=>ShaderPass
);
var _threeModuleJs = require("../../../build/three.module.js");
var _passJs = require("../postprocessing/Pass.js");
var ShaderPass = function(shader, textureID) {
    _passJs.Pass.call(this);
    this.textureID = textureID !== undefined ? textureID : 'tDiffuse';
    if (shader instanceof _threeModuleJs.ShaderMaterial) {
        this.uniforms = shader.uniforms;
        this.material = shader;
    } else if (shader) {
        this.uniforms = _threeModuleJs.UniformsUtils.clone(shader.uniforms);
        this.material = new _threeModuleJs.ShaderMaterial({
            defines: Object.assign({
            }, shader.defines),
            uniforms: this.uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader
        });
    }
    this.fsQuad = new _passJs.Pass.FullScreenQuad(this.material);
};
ShaderPass.prototype = Object.assign(Object.create(_passJs.Pass.prototype), {
    constructor: ShaderPass,
    render: function(renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {
        if (this.uniforms[this.textureID]) this.uniforms[this.textureID].value = readBuffer.texture;
        this.fsQuad.material = this.material;
        if (this.renderToScreen) {
            renderer.setRenderTarget(null);
            this.fsQuad.render(renderer);
        } else {
            renderer.setRenderTarget(writeBuffer);
            // TODO: Avoid using autoClear properties, see https://github.com/mrdoob/three.js/pull/15571#issuecomment-465669600
            if (this.clear) renderer.clear(renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil);
            this.fsQuad.render(renderer);
        }
    }
});

},{"../../../build/three.module.js":"1AKvZ","../postprocessing/Pass.js":"3lYUd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3lYUd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Pass", ()=>Pass
);
var _threeModuleJs = require("../../../build/three.module.js");
function Pass() {
    // if set to true, the pass is processed by the composer
    this.enabled = true;
    // if set to true, the pass indicates to swap read and write buffer after rendering
    this.needsSwap = true;
    // if set to true, the pass clears its buffer before rendering
    this.clear = false;
    // if set to true, the result of the pass is rendered to screen. This is set automatically by EffectComposer.
    this.renderToScreen = false;
}
Object.assign(Pass.prototype, {
    setSize: function() {
    },
    render: function() {
        console.error('THREE.Pass: .render() must be implemented in derived pass.');
    }
});
// Helper for passes that need to fill the viewport with a single quad.
// Important: It's actually a hack to put FullScreenQuad into the Pass namespace. This is only
// done to make examples/js code work. Normally, FullScreenQuad should be exported
// from this module like Pass.
Pass.FullScreenQuad = (function() {
    var camera = new _threeModuleJs.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    // https://github.com/mrdoob/three.js/pull/21358
    var geometry = new _threeModuleJs.BufferGeometry();
    geometry.setAttribute('position', new _threeModuleJs.Float32BufferAttribute([
        -1,
        3,
        0,
        -1,
        -1,
        0,
        3,
        -1,
        0
    ], 3));
    geometry.setAttribute('uv', new _threeModuleJs.Float32BufferAttribute([
        0,
        2,
        0,
        0,
        2,
        0
    ], 2));
    var FullScreenQuad = function(material) {
        this._mesh = new _threeModuleJs.Mesh(geometry, material);
    };
    Object.defineProperty(FullScreenQuad.prototype, 'material', {
        get: function() {
            return this._mesh.material;
        },
        set: function(value) {
            this._mesh.material = value;
        }
    });
    Object.assign(FullScreenQuad.prototype, {
        dispose: function() {
            this._mesh.geometry.dispose();
        },
        render: function(renderer) {
            renderer.render(this._mesh, camera);
        }
    });
    return FullScreenQuad;
})();

},{"../../../build/three.module.js":"1AKvZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dp9lp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BokehPass", ()=>BokehPass
);
var _threeModuleJs = require("../../../build/three.module.js");
var _passJs = require("../postprocessing/Pass.js");
var _bokehShaderJs = require("../shaders/BokehShader.js");
/**
 * Depth-of-field post-process with bokeh shader
 */ var BokehPass = function(scene, camera, params) {
    _passJs.Pass.call(this);
    this.scene = scene;
    this.camera = camera;
    var focus = params.focus !== undefined ? params.focus : 1;
    var aspect = params.aspect !== undefined ? params.aspect : camera.aspect;
    var aperture = params.aperture !== undefined ? params.aperture : 0.025;
    var maxblur = params.maxblur !== undefined ? params.maxblur : 1;
    // render targets
    var width = params.width || window.innerWidth || 1;
    var height = params.height || window.innerHeight || 1;
    this.renderTargetDepth = new _threeModuleJs.WebGLRenderTarget(width, height, {
        minFilter: _threeModuleJs.NearestFilter,
        magFilter: _threeModuleJs.NearestFilter
    });
    this.renderTargetDepth.texture.name = 'BokehPass.depth';
    // depth material
    this.materialDepth = new _threeModuleJs.MeshDepthMaterial();
    this.materialDepth.depthPacking = _threeModuleJs.RGBADepthPacking;
    this.materialDepth.blending = _threeModuleJs.NoBlending;
    // bokeh material
    if (_bokehShaderJs.BokehShader === undefined) console.error('THREE.BokehPass relies on BokehShader');
    var bokehShader = _bokehShaderJs.BokehShader;
    var bokehUniforms = _threeModuleJs.UniformsUtils.clone(bokehShader.uniforms);
    bokehUniforms['tDepth'].value = this.renderTargetDepth.texture;
    bokehUniforms['focus'].value = focus;
    bokehUniforms['aspect'].value = aspect;
    bokehUniforms['aperture'].value = aperture;
    bokehUniforms['maxblur'].value = maxblur;
    bokehUniforms['nearClip'].value = camera.near;
    bokehUniforms['farClip'].value = camera.far;
    this.materialBokeh = new _threeModuleJs.ShaderMaterial({
        defines: Object.assign({
        }, bokehShader.defines),
        uniforms: bokehUniforms,
        vertexShader: bokehShader.vertexShader,
        fragmentShader: bokehShader.fragmentShader
    });
    this.uniforms = bokehUniforms;
    this.needsSwap = false;
    this.fsQuad = new _passJs.Pass.FullScreenQuad(this.materialBokeh);
    this._oldClearColor = new _threeModuleJs.Color();
};
BokehPass.prototype = Object.assign(Object.create(_passJs.Pass.prototype), {
    constructor: BokehPass,
    render: function(renderer, writeBuffer, readBuffer /*, deltaTime, maskActive*/ ) {
        // Render depth into texture
        this.scene.overrideMaterial = this.materialDepth;
        renderer.getClearColor(this._oldClearColor);
        var oldClearAlpha = renderer.getClearAlpha();
        var oldAutoClear = renderer.autoClear;
        renderer.autoClear = false;
        renderer.setClearColor(16777215);
        renderer.setClearAlpha(1);
        renderer.setRenderTarget(this.renderTargetDepth);
        renderer.clear();
        renderer.render(this.scene, this.camera);
        // Render bokeh composite
        this.uniforms['tColor'].value = readBuffer.texture;
        this.uniforms['nearClip'].value = this.camera.near;
        this.uniforms['farClip'].value = this.camera.far;
        if (this.renderToScreen) {
            renderer.setRenderTarget(null);
            this.fsQuad.render(renderer);
        } else {
            renderer.setRenderTarget(writeBuffer);
            renderer.clear();
            this.fsQuad.render(renderer);
        }
        this.scene.overrideMaterial = null;
        renderer.setClearColor(this._oldClearColor);
        renderer.setClearAlpha(oldClearAlpha);
        renderer.autoClear = oldAutoClear;
    }
});

},{"../../../build/three.module.js":"1AKvZ","../postprocessing/Pass.js":"3lYUd","../shaders/BokehShader.js":"8XJo0","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8XJo0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BokehShader", ()=>BokehShader
);
/**
 * Depth-of-field shader with bokeh
 * ported from GLSL shader by Martins Upitis
 * http://artmartinsh.blogspot.com/2010/02/glsl-lens-blur-filter-with-bokeh.html
 */ var BokehShader = {
    defines: {
        'DEPTH_PACKING': 1,
        'PERSPECTIVE_CAMERA': 1
    },
    uniforms: {
        'tColor': {
            value: null
        },
        'tDepth': {
            value: null
        },
        'focus': {
            value: 1
        },
        'aspect': {
            value: 1
        },
        'aperture': {
            value: 0.025
        },
        'maxblur': {
            value: 0.01
        },
        'nearClip': {
            value: 1
        },
        'farClip': {
            value: 1000
        }
    },
    vertexShader: [
        'varying vec2 vUv;',
        'void main() {',
        '	vUv = uv;',
        '	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
        '}'
    ].join('\n'),
    fragmentShader: [
        '#include <common>',
        'varying vec2 vUv;',
        'uniform sampler2D tColor;',
        'uniform sampler2D tDepth;',
        'uniform float maxblur;',
        'uniform float aperture;',
        'uniform float nearClip;',
        'uniform float farClip;',
        'uniform float focus;',
        'uniform float aspect;',
        '#include <packing>',
        'float getDepth( const in vec2 screenPosition ) {',
        '	#if DEPTH_PACKING == 1',
        '	return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );',
        '	#else',
        '	return texture2D( tDepth, screenPosition ).x;',
        '	#endif',
        '}',
        'float getViewZ( const in float depth ) {',
        '	#if PERSPECTIVE_CAMERA == 1',
        '	return perspectiveDepthToViewZ( depth, nearClip, farClip );',
        '	#else',
        '	return orthographicDepthToViewZ( depth, nearClip, farClip );',
        '	#endif',
        '}',
        'void main() {',
        '	vec2 aspectcorrect = vec2( 1.0, aspect );',
        '	float viewZ = getViewZ( getDepth( vUv ) );',
        '	float factor = ( focus + viewZ );',
        '	vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );',
        '	vec2 dofblur9 = dofblur * 0.9;',
        '	vec2 dofblur7 = dofblur * 0.7;',
        '	vec2 dofblur4 = dofblur * 0.4;',
        '	vec4 col = vec4( 0.0 );',
        '	col += texture2D( tColor, vUv.xy );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );',
        '	col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );',
        '	gl_FragColor = col / 41.0;',
        '	gl_FragColor.a = 1.0;',
        '}'
    ].join('\n')
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fY6QE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorCorrectionShader", ()=>ColorCorrectionShader
);
var _threeModuleJs = require("../../../build/three.module.js");
/**
 * Color correction
 */ var ColorCorrectionShader = {
    uniforms: {
        'tDiffuse': {
            value: null
        },
        'powRGB': {
            value: new _threeModuleJs.Vector3(2, 2, 2)
        },
        'mulRGB': {
            value: new _threeModuleJs.Vector3(1, 1, 1)
        },
        'addRGB': {
            value: new _threeModuleJs.Vector3(0, 0, 0)
        }
    },
    vertexShader: [
        'varying vec2 vUv;',
        'void main() {',
        '	vUv = uv;',
        '	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
        '}'
    ].join('\n'),
    fragmentShader: [
        'uniform sampler2D tDiffuse;',
        'uniform vec3 powRGB;',
        'uniform vec3 mulRGB;',
        'uniform vec3 addRGB;',
        'varying vec2 vUv;',
        'void main() {',
        '	gl_FragColor = texture2D( tDiffuse, vUv );',
        '	gl_FragColor.rgb = mulRGB * pow( ( gl_FragColor.rgb + addRGB ), powRGB );',
        '}'
    ].join('\n')
};

},{"../../../build/three.module.js":"1AKvZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cmZxs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnrealBloomPass", ()=>UnrealBloomPass
);
var _threeModuleJs = require("../../../build/three.module.js");
var _passJs = require("../postprocessing/Pass.js");
var _copyShaderJs = require("../shaders/CopyShader.js");
var _luminosityHighPassShaderJs = require("../shaders/LuminosityHighPassShader.js");
/**
 * UnrealBloomPass is inspired by the bloom pass of Unreal Engine. It creates a
 * mip map chain of bloom textures and blurs them with different radii. Because
 * of the weighted combination of mips, and because larger blurs are done on
 * higher mips, this effect provides good quality and performance.
 *
 * Reference:
 * - https://docs.unrealengine.com/latest/INT/Engine/Rendering/PostProcessEffects/Bloom/
 */ var UnrealBloomPass = function(resolution, strength, radius, threshold) {
    _passJs.Pass.call(this);
    this.strength = strength !== undefined ? strength : 1;
    this.radius = radius;
    this.threshold = threshold;
    this.resolution = resolution !== undefined ? new _threeModuleJs.Vector2(resolution.x, resolution.y) : new _threeModuleJs.Vector2(256, 256);
    // create color only once here, reuse it later inside the render function
    this.clearColor = new _threeModuleJs.Color(0, 0, 0);
    // render targets
    var pars = {
        minFilter: _threeModuleJs.LinearFilter,
        magFilter: _threeModuleJs.LinearFilter,
        format: _threeModuleJs.RGBAFormat
    };
    this.renderTargetsHorizontal = [];
    this.renderTargetsVertical = [];
    this.nMips = 5;
    var resx = Math.round(this.resolution.x / 2);
    var resy = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new _threeModuleJs.WebGLRenderTarget(resx, resy, pars);
    this.renderTargetBright.texture.name = 'UnrealBloomPass.bright';
    this.renderTargetBright.texture.generateMipmaps = false;
    for(var i = 0; i < this.nMips; i++){
        var renderTargetHorizonal = new _threeModuleJs.WebGLRenderTarget(resx, resy, pars);
        renderTargetHorizonal.texture.name = 'UnrealBloomPass.h' + i;
        renderTargetHorizonal.texture.generateMipmaps = false;
        this.renderTargetsHorizontal.push(renderTargetHorizonal);
        var renderTargetVertical = new _threeModuleJs.WebGLRenderTarget(resx, resy, pars);
        renderTargetVertical.texture.name = 'UnrealBloomPass.v' + i;
        renderTargetVertical.texture.generateMipmaps = false;
        this.renderTargetsVertical.push(renderTargetVertical);
        resx = Math.round(resx / 2);
        resy = Math.round(resy / 2);
    }
    // luminosity high pass material
    if (_luminosityHighPassShaderJs.LuminosityHighPassShader === undefined) console.error('THREE.UnrealBloomPass relies on LuminosityHighPassShader');
    var highPassShader = _luminosityHighPassShaderJs.LuminosityHighPassShader;
    this.highPassUniforms = _threeModuleJs.UniformsUtils.clone(highPassShader.uniforms);
    this.highPassUniforms['luminosityThreshold'].value = threshold;
    this.highPassUniforms['smoothWidth'].value = 0.01;
    this.materialHighPassFilter = new _threeModuleJs.ShaderMaterial({
        uniforms: this.highPassUniforms,
        vertexShader: highPassShader.vertexShader,
        fragmentShader: highPassShader.fragmentShader,
        defines: {
        }
    });
    // Gaussian Blur Materials
    this.separableBlurMaterials = [];
    var kernelSizeArray = [
        3,
        5,
        7,
        9,
        11
    ];
    var resx = Math.round(this.resolution.x / 2);
    var resy = Math.round(this.resolution.y / 2);
    for(var i = 0; i < this.nMips; i++){
        this.separableBlurMaterials.push(this.getSeperableBlurMaterial(kernelSizeArray[i]));
        this.separableBlurMaterials[i].uniforms['texSize'].value = new _threeModuleJs.Vector2(resx, resy);
        resx = Math.round(resx / 2);
        resy = Math.round(resy / 2);
    }
    // Composite material
    this.compositeMaterial = this.getCompositeMaterial(this.nMips);
    this.compositeMaterial.uniforms['blurTexture1'].value = this.renderTargetsVertical[0].texture;
    this.compositeMaterial.uniforms['blurTexture2'].value = this.renderTargetsVertical[1].texture;
    this.compositeMaterial.uniforms['blurTexture3'].value = this.renderTargetsVertical[2].texture;
    this.compositeMaterial.uniforms['blurTexture4'].value = this.renderTargetsVertical[3].texture;
    this.compositeMaterial.uniforms['blurTexture5'].value = this.renderTargetsVertical[4].texture;
    this.compositeMaterial.uniforms['bloomStrength'].value = strength;
    this.compositeMaterial.uniforms['bloomRadius'].value = 0.1;
    this.compositeMaterial.needsUpdate = true;
    var bloomFactors = [
        1,
        0.8,
        0.6,
        0.4,
        0.2
    ];
    this.compositeMaterial.uniforms['bloomFactors'].value = bloomFactors;
    this.bloomTintColors = [
        new _threeModuleJs.Vector3(1, 1, 1),
        new _threeModuleJs.Vector3(1, 1, 1),
        new _threeModuleJs.Vector3(1, 1, 1),
        new _threeModuleJs.Vector3(1, 1, 1),
        new _threeModuleJs.Vector3(1, 1, 1)
    ];
    this.compositeMaterial.uniforms['bloomTintColors'].value = this.bloomTintColors;
    // copy material
    if (_copyShaderJs.CopyShader === undefined) console.error('THREE.UnrealBloomPass relies on CopyShader');
    var copyShader = _copyShaderJs.CopyShader;
    this.copyUniforms = _threeModuleJs.UniformsUtils.clone(copyShader.uniforms);
    this.copyUniforms['opacity'].value = 1;
    this.materialCopy = new _threeModuleJs.ShaderMaterial({
        uniforms: this.copyUniforms,
        vertexShader: copyShader.vertexShader,
        fragmentShader: copyShader.fragmentShader,
        blending: _threeModuleJs.AdditiveBlending,
        depthTest: false,
        depthWrite: false,
        transparent: true
    });
    this.enabled = true;
    this.needsSwap = false;
    this._oldClearColor = new _threeModuleJs.Color();
    this.oldClearAlpha = 1;
    this.basic = new _threeModuleJs.MeshBasicMaterial();
    this.fsQuad = new _passJs.Pass.FullScreenQuad(null);
};
UnrealBloomPass.prototype = Object.assign(Object.create(_passJs.Pass.prototype), {
    constructor: UnrealBloomPass,
    dispose: function() {
        for(var i = 0; i < this.renderTargetsHorizontal.length; i++)this.renderTargetsHorizontal[i].dispose();
        for(var i = 0; i < this.renderTargetsVertical.length; i++)this.renderTargetsVertical[i].dispose();
        this.renderTargetBright.dispose();
    },
    setSize: function(width, height) {
        var resx = Math.round(width / 2);
        var resy = Math.round(height / 2);
        this.renderTargetBright.setSize(resx, resy);
        for(var i = 0; i < this.nMips; i++){
            this.renderTargetsHorizontal[i].setSize(resx, resy);
            this.renderTargetsVertical[i].setSize(resx, resy);
            this.separableBlurMaterials[i].uniforms['texSize'].value = new _threeModuleJs.Vector2(resx, resy);
            resx = Math.round(resx / 2);
            resy = Math.round(resy / 2);
        }
    },
    render: function(renderer, writeBuffer, readBuffer, deltaTime, maskActive) {
        renderer.getClearColor(this._oldClearColor);
        this.oldClearAlpha = renderer.getClearAlpha();
        var oldAutoClear = renderer.autoClear;
        renderer.autoClear = false;
        renderer.setClearColor(this.clearColor, 0);
        if (maskActive) renderer.state.buffers.stencil.setTest(false);
        // Render input to screen
        if (this.renderToScreen) {
            this.fsQuad.material = this.basic;
            this.basic.map = readBuffer.texture;
            renderer.setRenderTarget(null);
            renderer.clear();
            this.fsQuad.render(renderer);
        }
        // 1. Extract Bright Areas
        this.highPassUniforms['tDiffuse'].value = readBuffer.texture;
        this.highPassUniforms['luminosityThreshold'].value = this.threshold;
        this.fsQuad.material = this.materialHighPassFilter;
        renderer.setRenderTarget(this.renderTargetBright);
        renderer.clear();
        this.fsQuad.render(renderer);
        // 2. Blur All the mips progressively
        var inputRenderTarget = this.renderTargetBright;
        for(var i = 0; i < this.nMips; i++){
            this.fsQuad.material = this.separableBlurMaterials[i];
            this.separableBlurMaterials[i].uniforms['colorTexture'].value = inputRenderTarget.texture;
            this.separableBlurMaterials[i].uniforms['direction'].value = UnrealBloomPass.BlurDirectionX;
            renderer.setRenderTarget(this.renderTargetsHorizontal[i]);
            renderer.clear();
            this.fsQuad.render(renderer);
            this.separableBlurMaterials[i].uniforms['colorTexture'].value = this.renderTargetsHorizontal[i].texture;
            this.separableBlurMaterials[i].uniforms['direction'].value = UnrealBloomPass.BlurDirectionY;
            renderer.setRenderTarget(this.renderTargetsVertical[i]);
            renderer.clear();
            this.fsQuad.render(renderer);
            inputRenderTarget = this.renderTargetsVertical[i];
        }
        // Composite All the mips
        this.fsQuad.material = this.compositeMaterial;
        this.compositeMaterial.uniforms['bloomStrength'].value = this.strength;
        this.compositeMaterial.uniforms['bloomRadius'].value = this.radius;
        this.compositeMaterial.uniforms['bloomTintColors'].value = this.bloomTintColors;
        renderer.setRenderTarget(this.renderTargetsHorizontal[0]);
        renderer.clear();
        this.fsQuad.render(renderer);
        // Blend it additively over the input texture
        this.fsQuad.material = this.materialCopy;
        this.copyUniforms['tDiffuse'].value = this.renderTargetsHorizontal[0].texture;
        if (maskActive) renderer.state.buffers.stencil.setTest(true);
        if (this.renderToScreen) {
            renderer.setRenderTarget(null);
            this.fsQuad.render(renderer);
        } else {
            renderer.setRenderTarget(readBuffer);
            this.fsQuad.render(renderer);
        }
        // Restore renderer settings
        renderer.setClearColor(this._oldClearColor, this.oldClearAlpha);
        renderer.autoClear = oldAutoClear;
    },
    getSeperableBlurMaterial: function(kernelRadius) {
        return new _threeModuleJs.ShaderMaterial({
            defines: {
                'KERNEL_RADIUS': kernelRadius,
                'SIGMA': kernelRadius
            },
            uniforms: {
                'colorTexture': {
                    value: null
                },
                'texSize': {
                    value: new _threeModuleJs.Vector2(0.5, 0.5)
                },
                'direction': {
                    value: new _threeModuleJs.Vector2(0.5, 0.5)
                }
            },
            vertexShader: 'varying vec2 vUv;\n\
				void main() {\n\
					vUv = uv;\n\
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\
				}',
            fragmentShader: '#include <common>\
				varying vec2 vUv;\n\
				uniform sampler2D colorTexture;\n\
				uniform vec2 texSize;\
				uniform vec2 direction;\
				\
				float gaussianPdf(in float x, in float sigma) {\
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\
				}\
				void main() {\n\
					vec2 invSize = 1.0 / texSize;\
					float fSigma = float(SIGMA);\
					float weightSum = gaussianPdf(0.0, fSigma);\
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {\
						float x = float(i);\
						float w = gaussianPdf(x, fSigma);\
						vec2 uvOffset = direction * invSize * x;\
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\
						diffuseSum += (sample1 + sample2) * w;\
						weightSum += 2.0 * w;\
					}\
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\
				}'
        });
    },
    getCompositeMaterial: function(nMips) {
        return new _threeModuleJs.ShaderMaterial({
            defines: {
                'NUM_MIPS': nMips
            },
            uniforms: {
                'blurTexture1': {
                    value: null
                },
                'blurTexture2': {
                    value: null
                },
                'blurTexture3': {
                    value: null
                },
                'blurTexture4': {
                    value: null
                },
                'blurTexture5': {
                    value: null
                },
                'dirtTexture': {
                    value: null
                },
                'bloomStrength': {
                    value: 1
                },
                'bloomFactors': {
                    value: null
                },
                'bloomTintColors': {
                    value: null
                },
                'bloomRadius': {
                    value: 0
                }
            },
            vertexShader: 'varying vec2 vUv;\n\
				void main() {\n\
					vUv = uv;\n\
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\
				}',
            fragmentShader: 'varying vec2 vUv;\
				uniform sampler2D blurTexture1;\
				uniform sampler2D blurTexture2;\
				uniform sampler2D blurTexture3;\
				uniform sampler2D blurTexture4;\
				uniform sampler2D blurTexture5;\
				uniform sampler2D dirtTexture;\
				uniform float bloomStrength;\
				uniform float bloomRadius;\
				uniform float bloomFactors[NUM_MIPS];\
				uniform vec3 bloomTintColors[NUM_MIPS];\
				\
				float lerpBloomFactor(const in float factor) { \
					float mirrorFactor = 1.2 - factor;\
					return mix(factor, mirrorFactor, bloomRadius);\
				}\
				\
				void main() {\
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + \
													 lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + \
													 lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + \
													 lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + \
													 lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\
				}'
        });
    }
});
UnrealBloomPass.BlurDirectionX = new _threeModuleJs.Vector2(1, 0);
UnrealBloomPass.BlurDirectionY = new _threeModuleJs.Vector2(0, 1);

},{"../../../build/three.module.js":"1AKvZ","../postprocessing/Pass.js":"3lYUd","../shaders/CopyShader.js":"8otj0","../shaders/LuminosityHighPassShader.js":"dcjMF","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8otj0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CopyShader", ()=>CopyShader
);
/**
 * Full-screen textured quad shader
 */ var CopyShader = {
    uniforms: {
        'tDiffuse': {
            value: null
        },
        'opacity': {
            value: 1
        }
    },
    vertexShader: [
        'varying vec2 vUv;',
        'void main() {',
        '	vUv = uv;',
        '	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
        '}'
    ].join('\n'),
    fragmentShader: [
        'uniform float opacity;',
        'uniform sampler2D tDiffuse;',
        'varying vec2 vUv;',
        'void main() {',
        '	vec4 texel = texture2D( tDiffuse, vUv );',
        '	gl_FragColor = opacity * texel;',
        '}'
    ].join('\n')
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dcjMF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LuminosityHighPassShader", ()=>LuminosityHighPassShader
);
var _threeModuleJs = require("../../../build/three.module.js");
/**
 * Luminosity
 * http://en.wikipedia.org/wiki/Luminosity
 */ var LuminosityHighPassShader = {
    shaderID: 'luminosityHighPass',
    uniforms: {
        'tDiffuse': {
            value: null
        },
        'luminosityThreshold': {
            value: 1
        },
        'smoothWidth': {
            value: 1
        },
        'defaultColor': {
            value: new _threeModuleJs.Color(0)
        },
        'defaultOpacity': {
            value: 0
        }
    },
    vertexShader: [
        'varying vec2 vUv;',
        'void main() {',
        '	vUv = uv;',
        '	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
        '}'
    ].join('\n'),
    fragmentShader: [
        'uniform sampler2D tDiffuse;',
        'uniform vec3 defaultColor;',
        'uniform float defaultOpacity;',
        'uniform float luminosityThreshold;',
        'uniform float smoothWidth;',
        'varying vec2 vUv;',
        'void main() {',
        '	vec4 texel = texture2D( tDiffuse, vUv );',
        '	vec3 luma = vec3( 0.299, 0.587, 0.114 );',
        '	float v = dot( texel.xyz, luma );',
        '	vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );',
        '	float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );',
        '	gl_FragColor = mix( outputColor, texel, alpha );',
        '}'
    ].join('\n')
};

},{"../../../build/three.module.js":"1AKvZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6RgtW":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vPosition;\nvarying vec3 vViewPosition;\nvarying vec2 vScreenSpace;\n#include <clipping_planes_pars_vertex>\nvoid main(){\n    #include <begin_vertex>    \n    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n    vUv=uv;\n    vec4 vViewPosition4=modelViewMatrix*vec4(position,1.);\n    vViewPosition=vViewPosition4.xyz;\n    vPosition=position;\n    vScreenSpace=gl_Position.xy/gl_Position.w;\n    #include <project_vertex>\n    #include <clipping_planes_vertex>    \n}";

},{}],"bfzpA":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nuniform float uTime;\nuniform vec3 uColor;\nvarying vec3 vPosition;\n#include <clipping_planes_pars_fragment>\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_0 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_0;\n  vec3 i1 = min( g_0.xyz, l.zxy );\n  vec3 i2 = max( g_0.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvoid main(){\n    #include <clipping_planes_fragment>\n    float gradient = 1.0 + (vPosition.z / -0.15);\n    float noise = snoise(-vPosition.xzz * 15.0 + uTime/20.);\n     noise += snoise(-vPosition.xzz * 10.0 + uTime/15.);\n    noise += snoise(-vPosition.xzz * 5.0 + uTime/10.);\n    noise = smoothstep(-0.5, 0.7, noise + sin(uTime) * 0.1) - smoothstep(0.701, 4.0, noise + sin(uTime) * 0.1);\n    vec3 color = uColor;\n    color = mix(uColor + 0.3, uColor, noise);\n    color.g += 0.025;\n    gl_FragColor=vec4(color, noise - 0.6);\n}";

},{}],"gxlD0":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vPosition;\n#include <clipping_planes_pars_vertex>\nvoid main(){\n    #include <begin_vertex>\n    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n    vUv=uv;\n    vPosition=position;\n    #include <project_vertex>\n    #include <clipping_planes_vertex>\n}";

},{}],"5XfPS":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nuniform float uTime;\nvarying vec3 vPosition;\nvarying vec2 vUv;\n#include <clipping_planes_pars_fragment>\n// procedural noise from IQ\nvec2 hash(vec2 p)\n{\n    p=vec2(dot(p,vec2(127.1,311.7)),\n    dot(p,vec2(269.5,183.3)));\n    return-1.+2.*fract(sin(p)*43758.5453123);\n}\n\nfloat noise(in vec2 p)\n{\n    const float K1=.366025404;// (sqrt(3)-1)/2;\n    const float K2=.211324865;// (3-sqrt(3))/6;\n    \n    vec2 i=floor(p+(p.x+p.y)*K1);\n    \n    vec2 a=p-i+(i.x+i.y)*K2;\n    vec2 o=(a.x>a.y)?vec2(1.,0.):vec2(0.,1.);\n    vec2 b=a-o+K2;\n    vec2 c=a-1.+2.*K2;\n    \n    vec3 h=max(.5-vec3(dot(a,a),dot(b,b),dot(c,c)),0.);\n    \n    vec3 n=h*h*h*h*vec3(dot(a,hash(i+0.)),dot(b,hash(i+o)),dot(c,hash(i+1.)));\n    \n    return dot(n,vec3(70.));\n}\nfloat fbm(vec2 uv)\n{\n    float f;\n    mat2 m=mat2(1.6,1.2,-1.2,1.6);\n    f=.5000*noise(uv);uv=m*uv;\n    f+=.2500*noise(uv);uv=m*uv;\n    f+=.1250*noise(uv);uv=m*uv;\n    f+=.0625*noise(uv);uv=m*uv;\n    f=.5+.5*f;\n    return f;\n}\nvoid main(){\n    #include <clipping_planes_fragment>\n    vec2 uv=vUv;\n    vec2 q=vUv;\n    float strength=floor(q.x+6.);\n    float T3=max(3.,1.25*strength)*uTime;\n    q.x+=-.5;\n    float n=fbm(strength*q-vec2(0,T3));\n    float c=1.-16.*pow(max(0.,length(q*vec2(1.8+q.y*1.5,.75))-n*max(0.,q.y+.25)),1.2);\n    float c1=n*c*(1.5-pow(0.50*uv.y,2.));\n    c1=clamp(c1,0.,1.);\n    vec3 col=vec3(1.5*c1,1.5*c1*c1*c1,c1*c1*c1*c1*c1*c1);\n    float a=c*(1.-pow(uv.y,3.));\n    vec3 color = mix(vec3(0.),col,a);\n    if(color.r < 0.7) discard;\n    gl_FragColor=vec4(color,1.);\n}";

},{}],"6Tmse":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nattribute float opacity;\nuniform float uTime;\nuniform float uSize;\nvarying vec3 vColor;\nvarying float vOpacity;\n#include <clipping_planes_pars_vertex>\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvoid main()\n{\n    #include <begin_vertex>  \n    #include <project_vertex>\n    #include <clipping_planes_vertex>     \n    /** \n     * Position\n     */\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);  \n    modelPosition.x  += .02 *  snoise(modelPosition.xyz * 40.0 + uTime * 0.01);\n    modelPosition.y  += .02 * snoise(modelPosition.xyz * 10.0 + uTime * 0.01);\n    modelPosition.z  += .02 * snoise(modelPosition.xyz * 80.0 + uTime * 0.01);\n\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n    gl_Position = projectedPosition;\n    /**\n     * Size\n     */\n     gl_PointSize = uSize;\n     gl_PointSize *= (1.0 / - viewPosition.z);\n\n    /**\n     * Color\n     */\n    vColor = color;\n    /**\n    * Opacity\n    */\n    vOpacity = opacity;\n\n}";

},{}],"iaRk0":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nvarying vec3 vColor;\nvarying float vOpacity;\nuniform float uTime;\n#include <clipping_planes_pars_fragment>\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nvoid main()\n{\n    #include <clipping_planes_fragment>\n    float dustIntensity = max(sin(vOpacity * uTime * 2.0), 0.1);\n    // Light point\n    float strength = distance(gl_PointCoord, vec2(0.5));\n    strength =( 1.0 - strength);\n    strength = pow(strength, 12.0);\n\n    // Final color\n    vec3 color = mix(vec3(0.0), vColor, strength);\n    gl_FragColor = vec4(color, dustIntensity);\n}";

},{}],"jaDJ9":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nattribute float opacity;\nuniform float uSize;\nvarying float vOpacity;\nvoid main()\n{\n    #include <begin_vertex>\n    /** \n     * Position\n     */\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);  \n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n    gl_Position = projectedPosition;\n    /**\n     * Size\n     */\n     gl_PointSize = uSize;\n\n    /**\n    * Opacity\n    */\n    vOpacity = opacity;\n\n}";

},{}],"b9P8p":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nvarying float vOpacity;\nvoid main()\n{\n    vec3 color = vec3(1.0);\n    gl_FragColor = vec4(color, vOpacity);\n}";

},{}],"36tKB":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nvoid main(){\n    vUv=uv;\n    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}";

},{}],"cP8Bk":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nuniform float uProgress;\nuniform sampler2D tDiffuse;\nuniform vec3 uColor;\nvarying vec2 vUv;\nvoid main(){\n    vec4 texel=texture2D(tDiffuse,vUv);\n    vec2 uv=vUv;\n    uv=uv-.5;\n    float circle=length(dot(uv,uv));\n    circle=smoothstep(uProgress,uProgress-.4,circle);\n    vec3 color=mix(uColor,texel.xyz,circle);\n    gl_FragColor=vec4(color,circle);\n}";

},{}],"74KAB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _three = require("three");
/**
 * @typedef {import} snoise3
 * @param {snoise3} 3D noise function
 */ var _simplex3DGlsl = require("../packages/glsl-noise/simplex-3d.glsl");
var _simplex3DGlslDefault = parcelHelpers.interopDefault(_simplex3DGlsl);
/**
 * OnBeforeCompile Three js function
 * @param {object} mesh - Mesh with material
 * @return {void}
 */ const SeaMaterialOnBeforeCompile = (mesh)=>{
    /**
   * @type {object}
   */ const { material  } = mesh;
    material.onBeforeCompile = (shader)=>{
        /**
     * Uniforms
     * @property {float} uTime - Timer
     * @property {sampler2D} uDepth - Grayscale picture for Depth
     * @property {vec3} uColor - Scene Color Background
     */ shader.uniforms.uTime = {
            value: 0
        };
        shader.uniforms.uDepth = {
            value: null
        };
        shader.uniforms.uColor = {
            value: new _three.Vector3()
        };
        /**
     * @typedef {string} shaders
     * @property {string} vertex shader
     * @property {string} fragment shader
     */ shader.vertexShader = `\n    varying vec3 vPosition; \n    uniform float uTime;\n    ${_simplex3DGlslDefault.default}\n    ${shader.vertexShader}`;
        shader.vertexShader = shader.vertexShader.replace(/#include <beginnormal_vertex>/, (match)=>`\n        vec3 normalTransform = normal;\n        normalTransform.xz +=  0.025 * sin( normalTransform.xz * 100.0 + uTime);\n        vec3 objectNormal = vec3( normalTransform );\n        #ifdef USE_TANGENT\n          vec3 objectTangent = vec3( tangent.xyz );\n        #endif\n      `
        );
        shader.vertexShader = shader.vertexShader.replace(/#include <begin_vertex>/, (match)=>match + `\n      float noise = snoise((transformed.xxz) * 150.0 + uTime/10.0); \n      noise += snoise((transformed.xzz) * 300.0 + uTime/10.0); \n      transformed.yz += noise * normalTransform.xz * 0.1 * 0.35;\n      vPosition = transformed;\n      `
        );
        shader.fragmentShader = `\n    uniform float uTime;\n    uniform vec3 uColor;\n    uniform sampler2D uDepth;\n    varying vec3 vPosition;\n    ${_simplex3DGlslDefault.default} \n    ${shader.fragmentShader}`;
        shader.fragmentShader = shader.fragmentShader.replace(/#include <dithering_fragment>/, (match)=>match + `\n        float depth = texture2D(uDepth, fract(vUv)).g;\n        float noise = snoise(vPosition * 20.0 + uTime/5.0); \n        vec3 old_gl_FragColor = vec4(outgoingLight, diffuseColor.a).rgb;\n        vec3 color = mix(uColor,old_gl_FragColor,depth);\n        gl_FragColor = vec4(color, 1.0);\n        `
        );
        mesh.material.userData.materialShader = shader;
    };
};
exports.default = SeaMaterialOnBeforeCompile;

},{"three":"1AKvZ","../packages/glsl-noise/simplex-3d.glsl":"dvTre","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dvTre":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n";

},{}],"iuosM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _three = require("three");
/**
 * OnBeforeCompile Three js function
 * @param {object} mesh - Mesh with material
 * @return {void}
 */ const StarsMaterialOnBeforeCompile = (mesh)=>{
    /**
   * @type {object}
   */ const { material  } = mesh;
    material.onBeforeCompile = (shader)=>{
        /**
     * Uniforms
     * @property {vec3} uHaloColor - Scene Color Background
     */ shader.uniforms.uHaloColor = {
            value: new _three.Vector3()
        };
        /**
     * @typedef {string} shaders
     * @property {string} vertex shader
     * @property {string} fragment shader
     */ shader.vertexShader = `\n        attribute float opacity;\n        varying float vOpacity;\n		${shader.vertexShader}`;
        shader.vertexShader = shader.vertexShader.replace(/#include <begin_vertex>/, (match)=>match + `\n        vOpacity = opacity;\n			`
        );
        shader.fragmentShader = `\n    varying float vOpacity;\n		${shader.fragmentShader}`;
        shader.fragmentShader = shader.fragmentShader.replace(/#include <dithering_fragment>/, (match)=>match + `\n        gl_FragColor = vec4(color, 1.0);\n				    `
        );
        mesh.material.userData.materialShader = shader;
    };
};
exports.default = StarsMaterialOnBeforeCompile;

},{"three":"1AKvZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6aVLU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _three = require("three");
/**
  * OnBeforeCompile Three js function
  * @param {object} mesh - Mesh with material
  * @return {void}
  */ const ShoresMaterialOnBeforeCompile = (mesh)=>{
    /**
    * @type {object}
    */ const { material  } = mesh;
    material.onBeforeCompile = (shader)=>{
        /**
      * Uniforms
      * @property {sampler2D} uDepth - Grayscale picture for Depth
      * @property {vec3} uColor - Scene Color Background
      */ shader.uniforms.uDepth = {
            value: null
        };
        shader.uniforms.uColor = {
            value: new _three.Vector3()
        };
        /**
      * @typedef {string} shaders
      * @property {string} fragment shader
      */ shader.fragmentShader = `\n     uniform vec3 uColor;\n     uniform sampler2D uDepth;\n     ${shader.fragmentShader}`;
        shader.fragmentShader = shader.fragmentShader.replace(/#include <dithering_fragment>/, (match)=>match + `\n         float depth = texture2D(uDepth, fract(vUv)).g;\n         vec3 old_gl_FragColor = vec4(outgoingLight, diffuseColor.a).rgb;\n         vec3 color = mix(uColor,old_gl_FragColor,depth);\n         gl_FragColor = vec4(color, 1.0);\n         `
        );
        mesh.material.userData.materialShader = shader;
    };
};
exports.default = ShoresMaterialOnBeforeCompile;

},{"three":"1AKvZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bDDMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _three = require("three");
/**
  * OnBeforeCompile Three js function
  * @param {object} mesh - Mesh with material
  * @return {void}
  */ const TreesMaterialOnBeforeCompile = (mesh)=>{
    /**
    * @type {object}
    */ const { material  } = mesh;
    material.onBeforeCompile = (shader)=>{
        /**
      * Uniforms
      * @property {sampler2D} uDepth - Grayscale picture for Depth
      * @property {vec3} uColor - Scene Color Background
      */ shader.uniforms.uDepth = {
            value: null
        };
        shader.uniforms.uColor = {
            value: new _three.Vector3()
        };
        /**
      * @typedef {string} shaders
      * @property {string} fragment shader
      */ shader.fragmentShader = `\n     uniform vec3 uColor;\n     uniform sampler2D uDepth;\n     ${shader.fragmentShader}`;
        shader.fragmentShader = shader.fragmentShader.replace(/#include <dithering_fragment>/, (match)=>match + `\n         float depth = texture2D(uDepth, fract(vUv)).g;\n         vec3 old_gl_FragColor = vec4(outgoingLight, diffuseColor.a).rgb;\n         vec3 color = mix(uColor, old_gl_FragColor, depth);\n         gl_FragColor = vec4(color, 1.0);\n         `
        );
        mesh.material.userData.materialShader = shader;
    };
};
exports.default = TreesMaterialOnBeforeCompile;

},{"three":"1AKvZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7ya9A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _three = require("three");
/**
  * OnBeforeCompile Three js function
  * @param {object} mesh - Mesh with material
  * @return {void}
  */ const MountainsMaterialOnBeforeCompile = (mesh)=>{
    /**
    * @type {object}
    */ const { material  } = mesh;
    material.onBeforeCompile = (shader)=>{
        /**
      * Uniforms
      * @property {sampler2D} uDepth - Grayscale picture for Depth
      * @property {vec3} uColor - Scene Color Background
      */ shader.uniforms.uDepth = {
            value: null
        };
        shader.uniforms.uColor = {
            value: new _three.Vector3()
        };
        /**
      * @typedef {string} shaders
      * @property {string} fragment shader
      */ shader.fragmentShader = `\n     uniform vec3 uColor;\n     uniform sampler2D uDepth;\n     ${shader.fragmentShader}`;
        shader.fragmentShader = shader.fragmentShader.replace(/#include <dithering_fragment>/, (match)=>match + `\n         float depth = texture2D(uDepth, fract(vUv)).g;\n         vec3 old_gl_FragColor = vec4(outgoingLight, diffuseColor.a).rgb;\n         vec3 color = mix(uColor,old_gl_FragColor,depth);\n         gl_FragColor = vec4(color, 1.0);\n         `
        );
        mesh.material.userData.materialShader = shader;
    };
};
exports.default = MountainsMaterialOnBeforeCompile;

},{"three":"1AKvZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"f1xIN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _three = require("three");
/**
  * OnBeforeCompile Three js function
  * @param {object} mesh - Mesh with material
  * @return {void}
  */ const VegetationMaterialOnBeforeCompile = (mesh)=>{
    /**
    * @type {object}
    */ const { material  } = mesh;
    material.onBeforeCompile = (shader)=>{
        /**
      * Uniforms
      * @property {sampler2D} uDepth - Grayscale picture for Depth
      * @property {vec3} uColor - Scene Color Background
      */ shader.uniforms.uDepth = {
            value: null
        };
        shader.uniforms.uColor = {
            value: new _three.Vector3()
        };
        /**
      * @typedef {string} shaders
      * @property {string} fragment shader
      */ shader.vertexShader = `\n      varying vec3 vPosition; \n     ${shader.vertexShader}`;
        shader.vertexShader = shader.vertexShader.replace(/#include <begin_vertex>/, (match)=>match + `\n         vPosition = position;\n         `
        );
        shader.fragmentShader = `\n     uniform vec3 uColor;\n     uniform sampler2D uDepth;\n     varying vec3 vPosition; \n     ${shader.fragmentShader}`;
        shader.fragmentShader = shader.fragmentShader.replace(/#include <dithering_fragment>/, (match)=>match + `\n         float depth = texture2D(uDepth, fract(vUv)).g;\n         vec3 old_gl_FragColor = vec4(outgoingLight, diffuseColor.a).rgb;\n         vec3 color =  mix(uColor, old_gl_FragColor, depth);  \n         color.b += 0.005; \n         gl_FragColor = vec4(vec3(color), 1.0);    \n         `
        );
        mesh.material.userData.materialShader = shader;
    };
};
exports.default = VegetationMaterialOnBeforeCompile;

},{"three":"1AKvZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"266Rp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _three = require("three");
/**
  * OnBeforeCompile Three js function
  * @param {object} mesh - Mesh with material
  * @return {void}
  */ const RocksMaterialOnBeforeCompile = (mesh)=>{
    /**
    * @type {object}
    */ const { material  } = mesh;
    material.onBeforeCompile = (shader)=>{
        /**
      * Uniforms
      * @property {sampler2D} uDepth - Grayscale picture for Depth
      * @property {vec3} uColor - Scene Color Background
      */ shader.uniforms.uDepth = {
            value: null
        };
        shader.uniforms.uColor = {
            value: new _three.Vector3()
        };
        /**
      * @typedef {string} shaders
      * @property {string} fragment shader
      */ shader.fragmentShader = `\n     uniform vec3 uColor;\n     uniform sampler2D uDepth;\n     ${shader.fragmentShader}`;
        shader.fragmentShader = shader.fragmentShader.replace(/#include <dithering_fragment>/, (match)=>match + `\n         float depth = texture2D(uDepth, fract(vUv)).g;\n         vec3 old_gl_FragColor = vec4(outgoingLight, diffuseColor.a).rgb;\n         vec3 color = mix(uColor,old_gl_FragColor,depth);\n         gl_FragColor = vec4(color, 1.0); \n         `
        );
        mesh.material.userData.materialShader = shader;
    };
};
exports.default = RocksMaterialOnBeforeCompile;

},{"three":"1AKvZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cz6pn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _three = require("three");
/**
 * OnBeforeCompile Three js function
 * @param {object} mesh - Mesh with material
 * @return {void}
 */ const PalmtreesMaterialOnBeforeCompile = (mesh)=>{
    /**
	 * @type {object}
	 */ const { material  } = mesh;
    material.onBeforeCompile = (shader)=>{
        /**
		 * Uniforms
		 * @property {sampler2D} uDepth - Grayscale picture for Depth
		 * @property {vec3} uColor - Scene Color Background
		 */ shader.uniforms.uTime = {
            value: null
        };
        shader.uniforms.uDepth = {
            value: null
        };
        shader.uniforms.uDepth2 = {
            value: null
        };
        shader.uniforms.uColor = {
            value: new _three.Vector3()
        };
        /**
		 * @typedef {string} shaders
		 * @property {string} fragment shader
		 */ shader.vertexShader = `\n      uniform float uTime;\n      uniform sampler2D uDepth2;\n      ${shader.vertexShader}`;
        shader.vertexShader = shader.vertexShader.replace(/#include <project_vertex>/, `\n        float depth = texture2D(uDepth2, fract(vUv)).g;  \n        if(depth > .7) {\n          transformed.x += sin(depth * ( transformed.x * transformed.x)  + uTime) * 0.0006;\n          transformed.y += sin(depth * ( transformed.y * transformed.y) + uTime) * 0.00039;\n          transformed.z += sin(depth * transformed.z + uTime) * 0.00039;\n        }\n        vec4 mvPosition = vec4( transformed, 1.0 );\n        #ifdef USE_INSTANCING\n        mvPosition = instanceMatrix * mvPosition;\n        #endif\n        mvPosition = modelViewMatrix * mvPosition;\n        gl_Position = projectionMatrix * mvPosition;\n        `);
        shader.fragmentShader = `\n     uniform vec3 uColor;\n     uniform sampler2D uDepth;\n     ${shader.fragmentShader}`;
        shader.fragmentShader = shader.fragmentShader.replace(/#include <dithering_fragment>/, (match)=>match + `\n         float depth = texture2D(uDepth, fract(vUv)).g;\n         vec3 old_gl_FragColor = vec4(outgoingLight, diffuseColor.a).rgb;\n         vec3 color = mix(uColor,old_gl_FragColor,depth);\n         gl_FragColor = vec4(color, 1.0); \n         `
        );
        mesh.material.userData.materialShader = shader;
    };
};
exports.default = PalmtreesMaterialOnBeforeCompile;

},{"three":"1AKvZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hEEzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _three = require("three");
/**
 * OnBeforeCompile Three js function
 * @param {object} mesh - Mesh with material
 * @return {void}
 */ const MoonMaterialOnBeforeCompile = (mesh)=>{
    /**
	 * @type {object}
	 */ const { material  } = mesh;
    material.onBeforeCompile = (shader)=>{
        /**
		 * Uniforms
		 * @property {vec3} uHaloColor - Scene Color Background
		 */ shader.uniforms.uHaloColor = {
            value: new _three.Vector3()
        };
        /**
		 * @typedef {string} shaders
		 * @property {string} vertex shader
		 * @property {string} fragment shader
		 */ shader.vertexShader = `\n		 varying vec3 vPosition; \n		${shader.vertexShader}`;
        shader.vertexShader = shader.vertexShader.replace(/#include <begin_vertex>/, (match)=>match + `\n			vPosition = position;\n			`
        );
        shader.fragmentShader = `\n		uniform vec3 uHaloColor;\n		varying vec3 vPosition; \n		${shader.fragmentShader}`;
        shader.fragmentShader = shader.fragmentShader.replace(/#include <dithering_fragment>/, (match)=>match + `\n				float moonIntensity = 0.6;\n				vec3 moonUv = vPosition/0.1;\n				vec2 moonUvHalo =  (vPosition.xy/0.1);\n				float moonHalo = .7 - distance(moonUvHalo, vec2(0.05, -0.1));\n				float moonMaskBottom = max(.5 + moonUv.y + (-moonUv.x * 0.3), 0.0);  \n				float moonMask = moonHalo * moonMaskBottom / (1.0-moonIntensity);\n				vec3 diffuse = diffuseColor.rgb;\n				diffuse.g += 0.1;\n				diffuse.b += 0.15;\n				vec3 color = mix(uHaloColor, diffuse, moonMask);\n				gl_FragColor = vec4(color, 1.0);\n				`
        );
        mesh.material.userData.materialShader = shader;
    };
};
exports.default = MoonMaterialOnBeforeCompile;

},{"three":"1AKvZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["3Mob8"], null, "parcelRequire7e77")

//# sourceMappingURL=Effects.8a30fb5d.js.map
