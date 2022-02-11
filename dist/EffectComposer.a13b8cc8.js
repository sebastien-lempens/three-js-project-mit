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
})({"51mzQ":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "6f644546a13b8cc8";
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

},{}],"2heCw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectComposer", ()=>EffectComposer
);
parcelHelpers.export(exports, "Pass", ()=>Pass
);
var _threeModuleJs = require("../../../build/three.module.js");
var _copyShaderJs = require("../shaders/CopyShader.js");
var _shaderPassJs = require("../postprocessing/ShaderPass.js");
var _maskPassJs = require("../postprocessing/MaskPass.js");
var EffectComposer = function(renderer, renderTarget) {
    this.renderer = renderer;
    if (renderTarget === undefined) {
        var parameters = {
            minFilter: _threeModuleJs.LinearFilter,
            magFilter: _threeModuleJs.LinearFilter,
            format: _threeModuleJs.RGBAFormat
        };
        var size = renderer.getSize(new _threeModuleJs.Vector2());
        this._pixelRatio = renderer.getPixelRatio();
        this._width = size.width;
        this._height = size.height;
        renderTarget = new _threeModuleJs.WebGLRenderTarget(this._width * this._pixelRatio, this._height * this._pixelRatio, parameters);
        renderTarget.texture.name = 'EffectComposer.rt1';
    } else {
        this._pixelRatio = 1;
        this._width = renderTarget.width;
        this._height = renderTarget.height;
    }
    this.renderTarget1 = renderTarget;
    this.renderTarget2 = renderTarget.clone();
    this.renderTarget2.texture.name = 'EffectComposer.rt2';
    this.writeBuffer = this.renderTarget1;
    this.readBuffer = this.renderTarget2;
    this.renderToScreen = true;
    this.passes = [];
    // dependencies
    if (_copyShaderJs.CopyShader === undefined) console.error('THREE.EffectComposer relies on CopyShader');
    if (_shaderPassJs.ShaderPass === undefined) console.error('THREE.EffectComposer relies on ShaderPass');
    this.copyPass = new _shaderPassJs.ShaderPass(_copyShaderJs.CopyShader);
    this.clock = new _threeModuleJs.Clock();
};
Object.assign(EffectComposer.prototype, {
    swapBuffers: function() {
        var tmp = this.readBuffer;
        this.readBuffer = this.writeBuffer;
        this.writeBuffer = tmp;
    },
    addPass: function(pass) {
        this.passes.push(pass);
        pass.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    },
    insertPass: function(pass, index) {
        this.passes.splice(index, 0, pass);
        pass.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    },
    removePass: function(pass) {
        const index = this.passes.indexOf(pass);
        if (index !== -1) this.passes.splice(index, 1);
    },
    isLastEnabledPass: function(passIndex) {
        for(var i = passIndex + 1; i < this.passes.length; i++){
            if (this.passes[i].enabled) return false;
        }
        return true;
    },
    render: function(deltaTime) {
        // deltaTime value is in seconds
        if (deltaTime === undefined) deltaTime = this.clock.getDelta();
        var currentRenderTarget = this.renderer.getRenderTarget();
        var maskActive = false;
        var pass, i, il = this.passes.length;
        for(i = 0; i < il; i++){
            pass = this.passes[i];
            if (pass.enabled === false) continue;
            pass.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i);
            pass.render(this.renderer, this.writeBuffer, this.readBuffer, deltaTime, maskActive);
            if (pass.needsSwap) {
                if (maskActive) {
                    var context = this.renderer.getContext();
                    var stencil = this.renderer.state.buffers.stencil;
                    //context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );
                    stencil.setFunc(context.NOTEQUAL, 1, 4294967295);
                    this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, deltaTime);
                    //context.stencilFunc( context.EQUAL, 1, 0xffffffff );
                    stencil.setFunc(context.EQUAL, 1, 4294967295);
                }
                this.swapBuffers();
            }
            if (_maskPassJs.MaskPass !== undefined) {
                if (pass instanceof _maskPassJs.MaskPass) maskActive = true;
                else if (pass instanceof _maskPassJs.ClearMaskPass) maskActive = false;
            }
        }
        this.renderer.setRenderTarget(currentRenderTarget);
    },
    reset: function(renderTarget) {
        if (renderTarget === undefined) {
            var size = this.renderer.getSize(new _threeModuleJs.Vector2());
            this._pixelRatio = this.renderer.getPixelRatio();
            this._width = size.width;
            this._height = size.height;
            renderTarget = this.renderTarget1.clone();
            renderTarget.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
        }
        this.renderTarget1.dispose();
        this.renderTarget2.dispose();
        this.renderTarget1 = renderTarget;
        this.renderTarget2 = renderTarget.clone();
        this.writeBuffer = this.renderTarget1;
        this.readBuffer = this.renderTarget2;
    },
    setSize: function(width, height) {
        this._width = width;
        this._height = height;
        var effectiveWidth = this._width * this._pixelRatio;
        var effectiveHeight = this._height * this._pixelRatio;
        this.renderTarget1.setSize(effectiveWidth, effectiveHeight);
        this.renderTarget2.setSize(effectiveWidth, effectiveHeight);
        for(var i = 0; i < this.passes.length; i++)this.passes[i].setSize(effectiveWidth, effectiveHeight);
    },
    setPixelRatio: function(pixelRatio) {
        this._pixelRatio = pixelRatio;
        this.setSize(this._width, this._height);
    }
});
var Pass = function() {
    // if set to true, the pass is processed by the composer
    this.enabled = true;
    // if set to true, the pass indicates to swap read and write buffer after rendering
    this.needsSwap = true;
    // if set to true, the pass clears its buffer before rendering
    this.clear = false;
    // if set to true, the result of the pass is rendered to screen. This is set automatically by EffectComposer.
    this.renderToScreen = false;
};
Object.assign(Pass.prototype, {
    setSize: function() {
    },
    render: function() {
        console.error('THREE.Pass: .render() must be implemented in derived pass.');
    }
});
// Helper for passes that need to fill the viewport with a single quad.
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

},{"../../../build/three.module.js":"1AKvZ","../shaders/CopyShader.js":"8otj0","../postprocessing/ShaderPass.js":"io8KX","../postprocessing/MaskPass.js":"haccP","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"haccP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MaskPass", ()=>MaskPass
);
parcelHelpers.export(exports, "ClearMaskPass", ()=>ClearMaskPass
);
var _passJs = require("../postprocessing/Pass.js");
var MaskPass = function(scene, camera) {
    _passJs.Pass.call(this);
    this.scene = scene;
    this.camera = camera;
    this.clear = true;
    this.needsSwap = false;
    this.inverse = false;
};
MaskPass.prototype = Object.assign(Object.create(_passJs.Pass.prototype), {
    constructor: MaskPass,
    render: function(renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {
        var context = renderer.getContext();
        var state = renderer.state;
        // don't update color or depth
        state.buffers.color.setMask(false);
        state.buffers.depth.setMask(false);
        // lock buffers
        state.buffers.color.setLocked(true);
        state.buffers.depth.setLocked(true);
        // set up stencil
        var writeValue, clearValue;
        if (this.inverse) {
            writeValue = 0;
            clearValue = 1;
        } else {
            writeValue = 1;
            clearValue = 0;
        }
        state.buffers.stencil.setTest(true);
        state.buffers.stencil.setOp(context.REPLACE, context.REPLACE, context.REPLACE);
        state.buffers.stencil.setFunc(context.ALWAYS, writeValue, 4294967295);
        state.buffers.stencil.setClear(clearValue);
        state.buffers.stencil.setLocked(true);
        // draw into the stencil buffer
        renderer.setRenderTarget(readBuffer);
        if (this.clear) renderer.clear();
        renderer.render(this.scene, this.camera);
        renderer.setRenderTarget(writeBuffer);
        if (this.clear) renderer.clear();
        renderer.render(this.scene, this.camera);
        // unlock color and depth buffer for subsequent rendering
        state.buffers.color.setLocked(false);
        state.buffers.depth.setLocked(false);
        // only render where stencil is set to 1
        state.buffers.stencil.setLocked(false);
        state.buffers.stencil.setFunc(context.EQUAL, 1, 4294967295); // draw if == 1
        state.buffers.stencil.setOp(context.KEEP, context.KEEP, context.KEEP);
        state.buffers.stencil.setLocked(true);
    }
});
var ClearMaskPass = function() {
    _passJs.Pass.call(this);
    this.needsSwap = false;
};
ClearMaskPass.prototype = Object.create(_passJs.Pass.prototype);
Object.assign(ClearMaskPass.prototype, {
    render: function(renderer /*, writeBuffer, readBuffer, deltaTime, maskActive */ ) {
        renderer.state.buffers.stencil.setLocked(false);
        renderer.state.buffers.stencil.setTest(false);
    }
});

},{"../postprocessing/Pass.js":"3lYUd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["51mzQ"], null, "parcelRequire7e77")

//# sourceMappingURL=EffectComposer.a13b8cc8.js.map
