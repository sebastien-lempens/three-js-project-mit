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
})({"6enR1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "12197b106519bae4";
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

},{}],"lVAeZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DRACOLoader", ()=>DRACOLoader
);
var _three = require("three");
const _taskCache = new WeakMap();
class DRACOLoader extends _three.Loader {
    constructor(manager){
        super(manager);
        this.decoderPath = '';
        this.decoderConfig = {
        };
        this.decoderBinary = null;
        this.decoderPending = null;
        this.workerLimit = 4;
        this.workerPool = [];
        this.workerNextTaskID = 1;
        this.workerSourceURL = '';
        this.defaultAttributeIDs = {
            position: 'POSITION',
            normal: 'NORMAL',
            color: 'COLOR',
            uv: 'TEX_COORD'
        };
        this.defaultAttributeTypes = {
            position: 'Float32Array',
            normal: 'Float32Array',
            color: 'Float32Array',
            uv: 'Float32Array'
        };
    }
    setDecoderPath(path) {
        this.decoderPath = path;
        return this;
    }
    setDecoderConfig(config) {
        this.decoderConfig = config;
        return this;
    }
    setWorkerLimit(workerLimit) {
        this.workerLimit = workerLimit;
        return this;
    }
    load(url, onLoad, onProgress, onError) {
        const loader = new _three.FileLoader(this.manager);
        loader.setPath(this.path);
        loader.setResponseType('arraybuffer');
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(this.withCredentials);
        loader.load(url, (buffer)=>{
            const taskConfig = {
                attributeIDs: this.defaultAttributeIDs,
                attributeTypes: this.defaultAttributeTypes,
                useUniqueIDs: false
            };
            this.decodeGeometry(buffer, taskConfig).then(onLoad).catch(onError);
        }, onProgress, onError);
    }
    /** @deprecated Kept for backward-compatibility with previous DRACOLoader versions. */ decodeDracoFile(buffer, callback, attributeIDs, attributeTypes) {
        const taskConfig = {
            attributeIDs: attributeIDs || this.defaultAttributeIDs,
            attributeTypes: attributeTypes || this.defaultAttributeTypes,
            useUniqueIDs: !!attributeIDs
        };
        this.decodeGeometry(buffer, taskConfig).then(callback);
    }
    decodeGeometry(buffer, taskConfig) {
        // TODO: For backward-compatibility, support 'attributeTypes' objects containing
        // references (rather than names) to typed array constructors. These must be
        // serialized before sending them to the worker.
        for(const attribute in taskConfig.attributeTypes){
            const type = taskConfig.attributeTypes[attribute];
            if (type.BYTES_PER_ELEMENT !== undefined) taskConfig.attributeTypes[attribute] = type.name;
        }
        //
        const taskKey = JSON.stringify(taskConfig);
        // Check for an existing task using this buffer. A transferred buffer cannot be transferred
        // again from this thread.
        if (_taskCache.has(buffer)) {
            const cachedTask = _taskCache.get(buffer);
            if (cachedTask.key === taskKey) return cachedTask.promise;
            else if (buffer.byteLength === 0) // Technically, it would be possible to wait for the previous task to complete,
            // transfer the buffer back, and decode again with the second configuration. That
            // is complex, and I don't know of any reason to decode a Draco buffer twice in
            // different ways, so this is left unimplemented.
            throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
        }
        //
        let worker;
        const taskID = this.workerNextTaskID++;
        const taskCost = buffer.byteLength;
        // Obtain a worker and assign a task, and construct a geometry instance
        // when the task completes.
        const geometryPending = this._getWorker(taskID, taskCost).then((_worker)=>{
            worker = _worker;
            return new Promise((resolve, reject)=>{
                worker._callbacks[taskID] = {
                    resolve,
                    reject
                };
                worker.postMessage({
                    type: 'decode',
                    id: taskID,
                    taskConfig,
                    buffer
                }, [
                    buffer
                ]);
            // this.debug();
            });
        }).then((message)=>this._createGeometry(message.geometry)
        );
        // Remove task from the task list.
        // Note: replaced '.finally()' with '.catch().then()' block - iOS 11 support (#19416)
        geometryPending.catch(()=>true
        ).then(()=>{
            if (worker && taskID) this._releaseTask(worker, taskID);
        });
        // Cache the task result.
        _taskCache.set(buffer, {
            key: taskKey,
            promise: geometryPending
        });
        return geometryPending;
    }
    _createGeometry(geometryData) {
        const geometry = new _three.BufferGeometry();
        if (geometryData.index) geometry.setIndex(new _three.BufferAttribute(geometryData.index.array, 1));
        for(let i = 0; i < geometryData.attributes.length; i++){
            const attribute = geometryData.attributes[i];
            const name = attribute.name;
            const array = attribute.array;
            const itemSize = attribute.itemSize;
            geometry.setAttribute(name, new _three.BufferAttribute(array, itemSize));
        }
        return geometry;
    }
    _loadLibrary(url, responseType) {
        const loader = new _three.FileLoader(this.manager);
        loader.setPath(this.decoderPath);
        loader.setResponseType(responseType);
        loader.setWithCredentials(this.withCredentials);
        return new Promise((resolve, reject)=>{
            loader.load(url, resolve, undefined, reject);
        });
    }
    preload() {
        this._initDecoder();
        return this;
    }
    _initDecoder() {
        if (this.decoderPending) return this.decoderPending;
        const useJS = typeof WebAssembly !== 'object' || this.decoderConfig.type === 'js';
        const librariesPending = [];
        if (useJS) librariesPending.push(this._loadLibrary('draco_decoder.js', 'text'));
        else {
            librariesPending.push(this._loadLibrary('draco_wasm_wrapper.js', 'text'));
            librariesPending.push(this._loadLibrary('draco_decoder.wasm', 'arraybuffer'));
        }
        this.decoderPending = Promise.all(librariesPending).then((libraries)=>{
            const jsContent = libraries[0];
            if (!useJS) this.decoderConfig.wasmBinary = libraries[1];
            const fn = DRACOWorker.toString();
            const body = [
                '/* draco decoder */',
                jsContent,
                '',
                '/* worker */',
                fn.substring(fn.indexOf('{') + 1, fn.lastIndexOf('}'))
            ].join('\n');
            this.workerSourceURL = URL.createObjectURL(new Blob([
                body
            ]));
        });
        return this.decoderPending;
    }
    _getWorker(taskID, taskCost) {
        return this._initDecoder().then(()=>{
            if (this.workerPool.length < this.workerLimit) {
                const worker = new Worker(this.workerSourceURL);
                worker._callbacks = {
                };
                worker._taskCosts = {
                };
                worker._taskLoad = 0;
                worker.postMessage({
                    type: 'init',
                    decoderConfig: this.decoderConfig
                });
                worker.onmessage = function(e) {
                    const message = e.data;
                    switch(message.type){
                        case 'decode':
                            worker._callbacks[message.id].resolve(message);
                            break;
                        case 'error':
                            worker._callbacks[message.id].reject(message);
                            break;
                        default:
                            console.error('THREE.DRACOLoader: Unexpected message, "' + message.type + '"');
                    }
                };
                this.workerPool.push(worker);
            } else this.workerPool.sort(function(a, b) {
                return a._taskLoad > b._taskLoad ? -1 : 1;
            });
            const worker = this.workerPool[this.workerPool.length - 1];
            worker._taskCosts[taskID] = taskCost;
            worker._taskLoad += taskCost;
            return worker;
        });
    }
    _releaseTask(worker, taskID) {
        worker._taskLoad -= worker._taskCosts[taskID];
        delete worker._callbacks[taskID];
        delete worker._taskCosts[taskID];
    }
    debug() {
        console.log('Task load: ', this.workerPool.map((worker)=>worker._taskLoad
        ));
    }
    dispose() {
        for(let i = 0; i < this.workerPool.length; ++i)this.workerPool[i].terminate();
        this.workerPool.length = 0;
        return this;
    }
}
/* WEB WORKER */ function DRACOWorker() {
    let decoderConfig;
    let decoderPending;
    onmessage = function(e) {
        const message = e.data;
        switch(message.type){
            case 'init':
                decoderConfig = message.decoderConfig;
                decoderPending = new Promise(function(resolve /*, reject*/ ) {
                    decoderConfig.onModuleLoaded = function(draco) {
                        // Module is Promise-like. Wrap before resolving to avoid loop.
                        resolve({
                            draco: draco
                        });
                    };
                    DracoDecoderModule(decoderConfig); // eslint-disable-line no-undef
                });
                break;
            case 'decode':
                const buffer = message.buffer;
                const taskConfig = message.taskConfig;
                decoderPending.then((module)=>{
                    const draco = module.draco;
                    const decoder = new draco.Decoder();
                    const decoderBuffer = new draco.DecoderBuffer();
                    decoderBuffer.Init(new Int8Array(buffer), buffer.byteLength);
                    try {
                        const geometry = decodeGeometry(draco, decoder, decoderBuffer, taskConfig);
                        const buffers = geometry.attributes.map((attr)=>attr.array.buffer
                        );
                        if (geometry.index) buffers.push(geometry.index.array.buffer);
                        self.postMessage({
                            type: 'decode',
                            id: message.id,
                            geometry
                        }, buffers);
                    } catch (error) {
                        console.error(error);
                        self.postMessage({
                            type: 'error',
                            id: message.id,
                            error: error.message
                        });
                    } finally{
                        draco.destroy(decoderBuffer);
                        draco.destroy(decoder);
                    }
                });
                break;
        }
    };
    function decodeGeometry(draco, decoder, decoderBuffer, taskConfig) {
        const attributeIDs = taskConfig.attributeIDs;
        const attributeTypes = taskConfig.attributeTypes;
        let dracoGeometry;
        let decodingStatus;
        const geometryType = decoder.GetEncodedGeometryType(decoderBuffer);
        if (geometryType === draco.TRIANGULAR_MESH) {
            dracoGeometry = new draco.Mesh();
            decodingStatus = decoder.DecodeBufferToMesh(decoderBuffer, dracoGeometry);
        } else if (geometryType === draco.POINT_CLOUD) {
            dracoGeometry = new draco.PointCloud();
            decodingStatus = decoder.DecodeBufferToPointCloud(decoderBuffer, dracoGeometry);
        } else throw new Error('THREE.DRACOLoader: Unexpected geometry type.');
        if (!decodingStatus.ok() || dracoGeometry.ptr === 0) throw new Error('THREE.DRACOLoader: Decoding failed: ' + decodingStatus.error_msg());
        const geometry = {
            index: null,
            attributes: []
        };
        // Gather all vertex attributes.
        for(const attributeName in attributeIDs){
            const attributeType = self[attributeTypes[attributeName]];
            let attribute;
            let attributeID;
            // A Draco file may be created with default vertex attributes, whose attribute IDs
            // are mapped 1:1 from their semantic name (POSITION, NORMAL, ...). Alternatively,
            // a Draco file may contain a custom set of attributes, identified by known unique
            // IDs. glTF files always do the latter, and `.drc` files typically do the former.
            if (taskConfig.useUniqueIDs) {
                attributeID = attributeIDs[attributeName];
                attribute = decoder.GetAttributeByUniqueId(dracoGeometry, attributeID);
            } else {
                attributeID = decoder.GetAttributeId(dracoGeometry, draco[attributeIDs[attributeName]]);
                if (attributeID === -1) continue;
                attribute = decoder.GetAttribute(dracoGeometry, attributeID);
            }
            geometry.attributes.push(decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute));
        }
        // Add index.
        if (geometryType === draco.TRIANGULAR_MESH) geometry.index = decodeIndex(draco, decoder, dracoGeometry);
        draco.destroy(dracoGeometry);
        return geometry;
    }
    function decodeIndex(draco, decoder, dracoGeometry) {
        const numFaces = dracoGeometry.num_faces();
        const numIndices = numFaces * 3;
        const byteLength = numIndices * 4;
        const ptr = draco._malloc(byteLength);
        decoder.GetTrianglesUInt32Array(dracoGeometry, byteLength, ptr);
        const index = new Uint32Array(draco.HEAPF32.buffer, ptr, numIndices).slice();
        draco._free(ptr);
        return {
            array: index,
            itemSize: 1
        };
    }
    function decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute) {
        const numComponents = attribute.num_components();
        const numPoints = dracoGeometry.num_points();
        const numValues = numPoints * numComponents;
        const byteLength = numValues * attributeType.BYTES_PER_ELEMENT;
        const dataType = getDracoDataType(draco, attributeType);
        const ptr = draco._malloc(byteLength);
        decoder.GetAttributeDataArrayForAllPoints(dracoGeometry, attribute, dataType, byteLength, ptr);
        const array = new attributeType(draco.HEAPF32.buffer, ptr, numValues).slice();
        draco._free(ptr);
        return {
            name: attributeName,
            array: array,
            itemSize: numComponents
        };
    }
    function getDracoDataType(draco, attributeType) {
        switch(attributeType){
            case Float32Array:
                return draco.DT_FLOAT32;
            case Int8Array:
                return draco.DT_INT8;
            case Int16Array:
                return draco.DT_INT16;
            case Int32Array:
                return draco.DT_INT32;
            case Uint8Array:
                return draco.DT_UINT8;
            case Uint16Array:
                return draco.DT_UINT16;
            case Uint32Array:
                return draco.DT_UINT32;
        }
    }
}

},{"three":"1AKvZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["6enR1"], null, "parcelRequire7e77")

//# sourceMappingURL=DRACOLoader.6519bae4.js.map
