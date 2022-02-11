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
})({"4DiRi":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "29a78ccb6f9cf571";
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

},{}],"jzUEM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GLTFLoader", ()=>GLTFLoader
);
var _three = require("three");
class GLTFLoader extends _three.Loader {
    constructor(manager){
        super(manager);
        this.dracoLoader = null;
        this.ktx2Loader = null;
        this.meshoptDecoder = null;
        this.pluginCallbacks = [];
        this.register(function(parser) {
            return new GLTFMaterialsClearcoatExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFTextureBasisUExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFTextureWebPExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsTransmissionExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsVolumeExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsIorExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsSpecularExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFLightsExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMeshoptCompression(parser);
        });
    }
    load(url, onLoad, onProgress, onError) {
        const scope = this;
        let resourcePath;
        if (this.resourcePath !== '') resourcePath = this.resourcePath;
        else if (this.path !== '') resourcePath = this.path;
        else resourcePath = _three.LoaderUtils.extractUrlBase(url);
        // Tells the LoadingManager to track an extra item, which resolves after
        // the model is fully loaded. This means the count of items loaded will
        // be incorrect, but ensures manager.onLoad() does not fire early.
        this.manager.itemStart(url);
        const _onError = function(e) {
            if (onError) onError(e);
            else console.error(e);
            scope.manager.itemError(url);
            scope.manager.itemEnd(url);
        };
        const loader = new _three.FileLoader(this.manager);
        loader.setPath(this.path);
        loader.setResponseType('arraybuffer');
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(this.withCredentials);
        loader.load(url, function(data) {
            try {
                scope.parse(data, resourcePath, function(gltf) {
                    onLoad(gltf);
                    scope.manager.itemEnd(url);
                }, _onError);
            } catch (e) {
                _onError(e);
            }
        }, onProgress, _onError);
    }
    setDRACOLoader(dracoLoader) {
        this.dracoLoader = dracoLoader;
        return this;
    }
    setDDSLoader() {
        throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
    }
    setKTX2Loader(ktx2Loader) {
        this.ktx2Loader = ktx2Loader;
        return this;
    }
    setMeshoptDecoder(meshoptDecoder) {
        this.meshoptDecoder = meshoptDecoder;
        return this;
    }
    register(callback) {
        if (this.pluginCallbacks.indexOf(callback) === -1) this.pluginCallbacks.push(callback);
        return this;
    }
    unregister(callback) {
        if (this.pluginCallbacks.indexOf(callback) !== -1) this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1);
        return this;
    }
    parse(data, path, onLoad, onError) {
        let content;
        const extensions = {
        };
        const plugins = {
        };
        if (typeof data === 'string') content = data;
        else {
            const magic = _three.LoaderUtils.decodeText(new Uint8Array(data, 0, 4));
            if (magic === BINARY_EXTENSION_HEADER_MAGIC) {
                try {
                    extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
                } catch (error) {
                    if (onError) onError(error);
                    return;
                }
                content = extensions[EXTENSIONS.KHR_BINARY_GLTF].content;
            } else content = _three.LoaderUtils.decodeText(new Uint8Array(data));
        }
        const json = JSON.parse(content);
        if (json.asset === undefined || json.asset.version[0] < 2) {
            if (onError) onError(new Error('THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.'));
            return;
        }
        const parser = new GLTFParser(json, {
            path: path || this.resourcePath || '',
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        parser.fileLoader.setRequestHeader(this.requestHeader);
        for(let i = 0; i < this.pluginCallbacks.length; i++){
            const plugin = this.pluginCallbacks[i](parser);
            plugins[plugin.name] = plugin;
            // Workaround to avoid determining as unknown extension
            // in addUnknownExtensionsToUserData().
            // Remove this workaround if we move all the existing
            // extension handlers to plugin system
            extensions[plugin.name] = true;
        }
        if (json.extensionsUsed) for(let i1 = 0; i1 < json.extensionsUsed.length; ++i1){
            const extensionName = json.extensionsUsed[i1];
            const extensionsRequired = json.extensionsRequired || [];
            switch(extensionName){
                case EXTENSIONS.KHR_MATERIALS_UNLIT:
                    extensions[extensionName] = new GLTFMaterialsUnlitExtension();
                    break;
                case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                    extensions[extensionName] = new GLTFMaterialsPbrSpecularGlossinessExtension();
                    break;
                case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
                    extensions[extensionName] = new GLTFDracoMeshCompressionExtension(json, this.dracoLoader);
                    break;
                case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
                    extensions[extensionName] = new GLTFTextureTransformExtension();
                    break;
                case EXTENSIONS.KHR_MESH_QUANTIZATION:
                    extensions[extensionName] = new GLTFMeshQuantizationExtension();
                    break;
                default:
                    if (extensionsRequired.indexOf(extensionName) >= 0 && plugins[extensionName] === undefined) console.warn('THREE.GLTFLoader: Unknown extension "' + extensionName + '".');
            }
        }
        parser.setExtensions(extensions);
        parser.setPlugins(plugins);
        parser.parse(onLoad, onError);
    }
}
/* GLTFREGISTRY */ function GLTFRegistry() {
    let objects = {
    };
    return {
        get: function(key) {
            return objects[key];
        },
        add: function(key, object) {
            objects[key] = object;
        },
        remove: function(key) {
            delete objects[key];
        },
        removeAll: function() {
            objects = {
            };
        }
    };
}
/*********************************/ /********** EXTENSIONS ***********/ /*********************************/ const EXTENSIONS = {
    KHR_BINARY_GLTF: 'KHR_binary_glTF',
    KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
    KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
    KHR_MATERIALS_CLEARCOAT: 'KHR_materials_clearcoat',
    KHR_MATERIALS_IOR: 'KHR_materials_ior',
    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
    KHR_MATERIALS_SPECULAR: 'KHR_materials_specular',
    KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
    KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
    KHR_MATERIALS_VOLUME: 'KHR_materials_volume',
    KHR_TEXTURE_BASISU: 'KHR_texture_basisu',
    KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
    KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
    EXT_TEXTURE_WEBP: 'EXT_texture_webp',
    EXT_MESHOPT_COMPRESSION: 'EXT_meshopt_compression'
};
/**
 * Punctual Lights Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
 */ class GLTFLightsExtension {
    constructor(parser1){
        this.parser = parser1;
        this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;
        // Object3D instance caches
        this.cache = {
            refs: {
            },
            uses: {
            }
        };
    }
    _markDefs() {
        const parser1 = this.parser;
        const nodeDefs = this.parser.json.nodes || [];
        for(let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++){
            const nodeDef = nodeDefs[nodeIndex];
            if (nodeDef.extensions && nodeDef.extensions[this.name] && nodeDef.extensions[this.name].light !== undefined) parser1._addNodeRef(this.cache, nodeDef.extensions[this.name].light);
        }
    }
    _loadLight(lightIndex) {
        const parser1 = this.parser;
        const cacheKey = 'light:' + lightIndex;
        let dependency = parser1.cache.get(cacheKey);
        if (dependency) return dependency;
        const json = parser1.json;
        const extensions = json.extensions && json.extensions[this.name] || {
        };
        const lightDefs = extensions.lights || [];
        const lightDef = lightDefs[lightIndex];
        let lightNode;
        const color = new _three.Color(16777215);
        if (lightDef.color !== undefined) color.fromArray(lightDef.color);
        const range = lightDef.range !== undefined ? lightDef.range : 0;
        switch(lightDef.type){
            case 'directional':
                lightNode = new _three.DirectionalLight(color);
                lightNode.target.position.set(0, 0, -1);
                lightNode.add(lightNode.target);
                break;
            case 'point':
                lightNode = new _three.PointLight(color);
                lightNode.distance = range;
                break;
            case 'spot':
                lightNode = new _three.SpotLight(color);
                lightNode.distance = range;
                // Handle spotlight properties.
                lightDef.spot = lightDef.spot || {
                };
                lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
                lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4;
                lightNode.angle = lightDef.spot.outerConeAngle;
                lightNode.penumbra = 1 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
                lightNode.target.position.set(0, 0, -1);
                lightNode.add(lightNode.target);
                break;
            default:
                throw new Error('THREE.GLTFLoader: Unexpected light type: ' + lightDef.type);
        }
        // Some lights (e.g. spot) default to a position other than the origin. Reset the position
        // here, because node-level parsing will only override position if explicitly specified.
        lightNode.position.set(0, 0, 0);
        lightNode.decay = 2;
        if (lightDef.intensity !== undefined) lightNode.intensity = lightDef.intensity;
        lightNode.name = parser1.createUniqueName(lightDef.name || 'light_' + lightIndex);
        dependency = Promise.resolve(lightNode);
        parser1.cache.add(cacheKey, dependency);
        return dependency;
    }
    createNodeAttachment(nodeIndex) {
        const self = this;
        const parser1 = this.parser;
        const json = parser1.json;
        const nodeDef = json.nodes[nodeIndex];
        const lightDef = nodeDef.extensions && nodeDef.extensions[this.name] || {
        };
        const lightIndex = lightDef.light;
        if (lightIndex === undefined) return null;
        return this._loadLight(lightIndex).then(function(light) {
            return parser1._getNodeRef(self.cache, lightIndex, light);
        });
    }
}
/**
 * Unlit Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
 */ class GLTFMaterialsUnlitExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
        return _three.MeshBasicMaterial;
    }
    extendParams(materialParams, materialDef, parser) {
        const pending = [];
        materialParams.color = new _three.Color(1, 1, 1);
        materialParams.opacity = 1;
        const metallicRoughness = materialDef.pbrMetallicRoughness;
        if (metallicRoughness) {
            if (Array.isArray(metallicRoughness.baseColorFactor)) {
                const array = metallicRoughness.baseColorFactor;
                materialParams.color.fromArray(array);
                materialParams.opacity = array[3];
            }
            if (metallicRoughness.baseColorTexture !== undefined) pending.push(parser.assignTexture(materialParams, 'map', metallicRoughness.baseColorTexture));
        }
        return Promise.all(pending);
    }
}
/**
 * Clearcoat Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
 */ class GLTFMaterialsClearcoatExtension {
    constructor(parser2){
        this.parser = parser2;
        this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(materialIndex) {
        const parser3 = this.parser;
        const materialDef = parser3.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser3 = this.parser;
        const materialDef = parser3.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        if (extension.clearcoatFactor !== undefined) materialParams.clearcoat = extension.clearcoatFactor;
        if (extension.clearcoatTexture !== undefined) pending.push(parser3.assignTexture(materialParams, 'clearcoatMap', extension.clearcoatTexture));
        if (extension.clearcoatRoughnessFactor !== undefined) materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;
        if (extension.clearcoatRoughnessTexture !== undefined) pending.push(parser3.assignTexture(materialParams, 'clearcoatRoughnessMap', extension.clearcoatRoughnessTexture));
        if (extension.clearcoatNormalTexture !== undefined) {
            pending.push(parser3.assignTexture(materialParams, 'clearcoatNormalMap', extension.clearcoatNormalTexture));
            if (extension.clearcoatNormalTexture.scale !== undefined) {
                const scale = extension.clearcoatNormalTexture.scale;
                materialParams.clearcoatNormalScale = new _three.Vector2(scale, scale);
            }
        }
        return Promise.all(pending);
    }
}
/**
 * Transmission Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_transmission
 * Draft: https://github.com/KhronosGroup/glTF/pull/1698
 */ class GLTFMaterialsTransmissionExtension {
    constructor(parser3){
        this.parser = parser3;
        this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(materialIndex) {
        const parser4 = this.parser;
        const materialDef = parser4.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser4 = this.parser;
        const materialDef = parser4.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        if (extension.transmissionFactor !== undefined) materialParams.transmission = extension.transmissionFactor;
        if (extension.transmissionTexture !== undefined) pending.push(parser4.assignTexture(materialParams, 'transmissionMap', extension.transmissionTexture));
        return Promise.all(pending);
    }
}
/**
 * Materials Volume Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_volume
 */ class GLTFMaterialsVolumeExtension {
    constructor(parser4){
        this.parser = parser4;
        this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(materialIndex) {
        const parser5 = this.parser;
        const materialDef = parser5.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser5 = this.parser;
        const materialDef = parser5.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        materialParams.thickness = extension.thicknessFactor !== undefined ? extension.thicknessFactor : 0;
        if (extension.thicknessTexture !== undefined) pending.push(parser5.assignTexture(materialParams, 'thicknessMap', extension.thicknessTexture));
        materialParams.attenuationDistance = extension.attenuationDistance || 0;
        const colorArray = extension.attenuationColor || [
            1,
            1,
            1
        ];
        materialParams.attenuationTint = new _three.Color(colorArray[0], colorArray[1], colorArray[2]);
        return Promise.all(pending);
    }
}
/**
 * Materials ior Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_ior
 */ class GLTFMaterialsIorExtension {
    constructor(parser5){
        this.parser = parser5;
        this.name = EXTENSIONS.KHR_MATERIALS_IOR;
    }
    getMaterialType(materialIndex) {
        const parser6 = this.parser;
        const materialDef = parser6.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser6 = this.parser;
        const materialDef = parser6.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const extension = materialDef.extensions[this.name];
        materialParams.ior = extension.ior !== undefined ? extension.ior : 1.5;
        return Promise.resolve();
    }
}
/**
 * Materials specular Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_specular
 */ class GLTFMaterialsSpecularExtension {
    constructor(parser6){
        this.parser = parser6;
        this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(materialIndex) {
        const parser7 = this.parser;
        const materialDef = parser7.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser7 = this.parser;
        const materialDef = parser7.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        materialParams.specularIntensity = extension.specularFactor !== undefined ? extension.specularFactor : 1;
        if (extension.specularTexture !== undefined) pending.push(parser7.assignTexture(materialParams, 'specularIntensityMap', extension.specularTexture));
        const colorArray = extension.specularColorFactor || [
            1,
            1,
            1
        ];
        materialParams.specularTint = new _three.Color(colorArray[0], colorArray[1], colorArray[2]);
        if (extension.specularColorTexture !== undefined) pending.push(parser7.assignTexture(materialParams, 'specularTintMap', extension.specularColorTexture).then(function(texture) {
            texture.encoding = _three.sRGBEncoding;
        }));
        return Promise.all(pending);
    }
}
/**
 * BasisU Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_basisu
 */ class GLTFTextureBasisUExtension {
    constructor(parser7){
        this.parser = parser7;
        this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
    }
    loadTexture(textureIndex) {
        const parser8 = this.parser;
        const json = parser8.json;
        const textureDef = json.textures[textureIndex];
        if (!textureDef.extensions || !textureDef.extensions[this.name]) return null;
        const extension = textureDef.extensions[this.name];
        const source = json.images[extension.source];
        const loader = parser8.options.ktx2Loader;
        if (!loader) {
            if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) throw new Error('THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures');
            else // Assumes that the extension is optional and that a fallback texture is present
            return null;
        }
        return parser8.loadTextureImage(textureIndex, source, loader);
    }
}
/**
 * WebP Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_webp
 */ class GLTFTextureWebPExtension {
    constructor(parser8){
        this.parser = parser8;
        this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
        this.isSupported = null;
    }
    loadTexture(textureIndex) {
        const name = this.name;
        const parser9 = this.parser;
        const json = parser9.json;
        const textureDef = json.textures[textureIndex];
        if (!textureDef.extensions || !textureDef.extensions[name]) return null;
        const extension = textureDef.extensions[name];
        const source = json.images[extension.source];
        let loader = parser9.textureLoader;
        if (source.uri) {
            const handler = parser9.options.manager.getHandler(source.uri);
            if (handler !== null) loader = handler;
        }
        return this.detectSupport().then(function(isSupported) {
            if (isSupported) return parser9.loadTextureImage(textureIndex, source, loader);
            if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) throw new Error('THREE.GLTFLoader: WebP required by asset but unsupported.');
            // Fall back to PNG or JPEG.
            return parser9.loadTexture(textureIndex);
        });
    }
    detectSupport() {
        if (!this.isSupported) this.isSupported = new Promise(function(resolve) {
            const image = new Image();
            // Lossy test image. Support for lossy images doesn't guarantee support for all
            // WebP images, unfortunately.
            image.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
            image.onload = image.onerror = function() {
                resolve(image.height === 1);
            };
        });
        return this.isSupported;
    }
}
/**
 * meshopt BufferView Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_meshopt_compression
 */ class GLTFMeshoptCompression {
    constructor(parser9){
        this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
        this.parser = parser9;
    }
    loadBufferView(index) {
        const json = this.parser.json;
        const bufferView = json.bufferViews[index];
        if (bufferView.extensions && bufferView.extensions[this.name]) {
            const extensionDef = bufferView.extensions[this.name];
            const buffer = this.parser.getDependency('buffer', extensionDef.buffer);
            const decoder = this.parser.options.meshoptDecoder;
            if (!decoder || !decoder.supported) {
                if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) throw new Error('THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files');
                else // Assumes that the extension is optional and that fallback buffer data is present
                return null;
            }
            return Promise.all([
                buffer,
                decoder.ready
            ]).then(function(res) {
                const byteOffset = extensionDef.byteOffset || 0;
                const byteLength = extensionDef.byteLength || 0;
                const count = extensionDef.count;
                const stride = extensionDef.byteStride;
                const result = new ArrayBuffer(count * stride);
                const source = new Uint8Array(res[0], byteOffset, byteLength);
                decoder.decodeGltfBuffer(new Uint8Array(result), count, stride, source, extensionDef.mode, extensionDef.filter);
                return result;
            });
        } else return null;
    }
}
/* BINARY EXTENSION */ const BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
const BINARY_EXTENSION_HEADER_LENGTH = 12;
const BINARY_EXTENSION_CHUNK_TYPES = {
    JSON: 1313821514,
    BIN: 5130562
};
class GLTFBinaryExtension {
    constructor(data){
        this.name = EXTENSIONS.KHR_BINARY_GLTF;
        this.content = null;
        this.body = null;
        const headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);
        this.header = {
            magic: _three.LoaderUtils.decodeText(new Uint8Array(data.slice(0, 4))),
            version: headerView.getUint32(4, true),
            length: headerView.getUint32(8, true)
        };
        if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) throw new Error('THREE.GLTFLoader: Unsupported glTF-Binary header.');
        else if (this.header.version < 2) throw new Error('THREE.GLTFLoader: Legacy binary file detected.');
        const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
        const chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
        let chunkIndex = 0;
        while(chunkIndex < chunkContentsLength){
            const chunkLength = chunkView.getUint32(chunkIndex, true);
            chunkIndex += 4;
            const chunkType = chunkView.getUint32(chunkIndex, true);
            chunkIndex += 4;
            if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
                const contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
                this.content = _three.LoaderUtils.decodeText(contentArray);
            } else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
                const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
                this.body = data.slice(byteOffset, byteOffset + chunkLength);
            }
            // Clients must ignore chunks with unknown types.
            chunkIndex += chunkLength;
        }
        if (this.content === null) throw new Error('THREE.GLTFLoader: JSON content not found.');
    }
}
/**
 * DRACO Mesh Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
 */ class GLTFDracoMeshCompressionExtension {
    constructor(json, dracoLoader){
        if (!dracoLoader) throw new Error('THREE.GLTFLoader: No DRACOLoader instance provided.');
        this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
        this.json = json;
        this.dracoLoader = dracoLoader;
        this.dracoLoader.preload();
    }
    decodePrimitive(primitive, parser) {
        const json1 = this.json;
        const dracoLoader1 = this.dracoLoader;
        const bufferViewIndex = primitive.extensions[this.name].bufferView;
        const gltfAttributeMap = primitive.extensions[this.name].attributes;
        const threeAttributeMap = {
        };
        const attributeNormalizedMap = {
        };
        const attributeTypeMap = {
        };
        for(const attributeName in gltfAttributeMap){
            const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
            threeAttributeMap[threeAttributeName] = gltfAttributeMap[attributeName];
        }
        for(const attributeName1 in primitive.attributes){
            const threeAttributeName = ATTRIBUTES[attributeName1] || attributeName1.toLowerCase();
            if (gltfAttributeMap[attributeName1] !== undefined) {
                const accessorDef = json1.accessors[primitive.attributes[attributeName1]];
                const componentType = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
                attributeTypeMap[threeAttributeName] = componentType;
                attributeNormalizedMap[threeAttributeName] = accessorDef.normalized === true;
            }
        }
        return parser.getDependency('bufferView', bufferViewIndex).then(function(bufferView) {
            return new Promise(function(resolve) {
                dracoLoader1.decodeDracoFile(bufferView, function(geometry) {
                    for(const attributeName2 in geometry.attributes){
                        const attribute = geometry.attributes[attributeName2];
                        const normalized = attributeNormalizedMap[attributeName2];
                        if (normalized !== undefined) attribute.normalized = normalized;
                    }
                    resolve(geometry);
                }, threeAttributeMap, attributeTypeMap);
            });
        });
    }
}
/**
 * Texture Transform Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
 */ class GLTFTextureTransformExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(texture, transform) {
        if (transform.texCoord !== undefined) console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.');
        if (transform.offset === undefined && transform.rotation === undefined && transform.scale === undefined) // See https://github.com/mrdoob/three.js/issues/21819.
        return texture;
        texture = texture.clone();
        if (transform.offset !== undefined) texture.offset.fromArray(transform.offset);
        if (transform.rotation !== undefined) texture.rotation = transform.rotation;
        if (transform.scale !== undefined) texture.repeat.fromArray(transform.scale);
        texture.needsUpdate = true;
        return texture;
    }
}
/**
 * Specular-Glossiness Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness
 */ /**
 * A sub class of StandardMaterial with some of the functionality
 * changed via the `onBeforeCompile` callback
 * @pailhead
 */ class GLTFMeshStandardSGMaterial extends _three.MeshStandardMaterial {
    constructor(params){
        super();
        this.isGLTFSpecularGlossinessMaterial = true;
        //various chunks that need replacing
        const specularMapParsFragmentChunk = [
            '#ifdef USE_SPECULARMAP',
            '	uniform sampler2D specularMap;',
            '#endif'
        ].join('\n');
        const glossinessMapParsFragmentChunk = [
            '#ifdef USE_GLOSSINESSMAP',
            '	uniform sampler2D glossinessMap;',
            '#endif'
        ].join('\n');
        const specularMapFragmentChunk = [
            'vec3 specularFactor = specular;',
            '#ifdef USE_SPECULARMAP',
            '	vec4 texelSpecular = texture2D( specularMap, vUv );',
            '	texelSpecular = sRGBToLinear( texelSpecular );',
            '	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture',
            '	specularFactor *= texelSpecular.rgb;',
            '#endif'
        ].join('\n');
        const glossinessMapFragmentChunk = [
            'float glossinessFactor = glossiness;',
            '#ifdef USE_GLOSSINESSMAP',
            '	vec4 texelGlossiness = texture2D( glossinessMap, vUv );',
            '	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture',
            '	glossinessFactor *= texelGlossiness.a;',
            '#endif'
        ].join('\n');
        const lightPhysicalFragmentChunk = [
            'PhysicalMaterial material;',
            'material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );',
            'vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );',
            'float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );',
            'material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.',
            'material.roughness += geometryRoughness;',
            'material.roughness = min( material.roughness, 1.0 );',
            'material.specularColor = specularFactor;', 
        ].join('\n');
        const uniforms = {
            specular: {
                value: new _three.Color().setHex(16777215)
            },
            glossiness: {
                value: 1
            },
            specularMap: {
                value: null
            },
            glossinessMap: {
                value: null
            }
        };
        this._extraUniforms = uniforms;
        this.onBeforeCompile = function(shader) {
            for(const uniformName in uniforms)shader.uniforms[uniformName] = uniforms[uniformName];
            shader.fragmentShader = shader.fragmentShader.replace('uniform float roughness;', 'uniform vec3 specular;').replace('uniform float metalness;', 'uniform float glossiness;').replace('#include <roughnessmap_pars_fragment>', specularMapParsFragmentChunk).replace('#include <metalnessmap_pars_fragment>', glossinessMapParsFragmentChunk).replace('#include <roughnessmap_fragment>', specularMapFragmentChunk).replace('#include <metalnessmap_fragment>', glossinessMapFragmentChunk).replace('#include <lights_physical_fragment>', lightPhysicalFragmentChunk);
        };
        Object.defineProperties(this, {
            specular: {
                get: function() {
                    return uniforms.specular.value;
                },
                set: function(v) {
                    uniforms.specular.value = v;
                }
            },
            specularMap: {
                get: function() {
                    return uniforms.specularMap.value;
                },
                set: function(v) {
                    uniforms.specularMap.value = v;
                    if (v) this.defines.USE_SPECULARMAP = ''; // USE_UV is set by the renderer for specular maps
                    else delete this.defines.USE_SPECULARMAP;
                }
            },
            glossiness: {
                get: function() {
                    return uniforms.glossiness.value;
                },
                set: function(v) {
                    uniforms.glossiness.value = v;
                }
            },
            glossinessMap: {
                get: function() {
                    return uniforms.glossinessMap.value;
                },
                set: function(v) {
                    uniforms.glossinessMap.value = v;
                    if (v) {
                        this.defines.USE_GLOSSINESSMAP = '';
                        this.defines.USE_UV = '';
                    } else {
                        delete this.defines.USE_GLOSSINESSMAP;
                        delete this.defines.USE_UV;
                    }
                }
            }
        });
        delete this.metalness;
        delete this.roughness;
        delete this.metalnessMap;
        delete this.roughnessMap;
        this.setValues(params);
    }
    copy(source) {
        super.copy(source);
        this.specularMap = source.specularMap;
        this.specular.copy(source.specular);
        this.glossinessMap = source.glossinessMap;
        this.glossiness = source.glossiness;
        delete this.metalness;
        delete this.roughness;
        delete this.metalnessMap;
        delete this.roughnessMap;
        return this;
    }
}
class GLTFMaterialsPbrSpecularGlossinessExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS;
        this.specularGlossinessParams = [
            'color',
            'map',
            'lightMap',
            'lightMapIntensity',
            'aoMap',
            'aoMapIntensity',
            'emissive',
            'emissiveIntensity',
            'emissiveMap',
            'bumpMap',
            'bumpScale',
            'normalMap',
            'normalMapType',
            'displacementMap',
            'displacementScale',
            'displacementBias',
            'specularMap',
            'specular',
            'glossinessMap',
            'glossiness',
            'alphaMap',
            'envMap',
            'envMapIntensity',
            'refractionRatio', 
        ];
    }
    getMaterialType() {
        return GLTFMeshStandardSGMaterial;
    }
    extendParams(materialParams, materialDef, parser) {
        const pbrSpecularGlossiness = materialDef.extensions[this.name];
        materialParams.color = new _three.Color(1, 1, 1);
        materialParams.opacity = 1;
        const pending = [];
        if (Array.isArray(pbrSpecularGlossiness.diffuseFactor)) {
            const array = pbrSpecularGlossiness.diffuseFactor;
            materialParams.color.fromArray(array);
            materialParams.opacity = array[3];
        }
        if (pbrSpecularGlossiness.diffuseTexture !== undefined) pending.push(parser.assignTexture(materialParams, 'map', pbrSpecularGlossiness.diffuseTexture));
        materialParams.emissive = new _three.Color(0, 0, 0);
        materialParams.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1;
        materialParams.specular = new _three.Color(1, 1, 1);
        if (Array.isArray(pbrSpecularGlossiness.specularFactor)) materialParams.specular.fromArray(pbrSpecularGlossiness.specularFactor);
        if (pbrSpecularGlossiness.specularGlossinessTexture !== undefined) {
            const specGlossMapDef = pbrSpecularGlossiness.specularGlossinessTexture;
            pending.push(parser.assignTexture(materialParams, 'glossinessMap', specGlossMapDef));
            pending.push(parser.assignTexture(materialParams, 'specularMap', specGlossMapDef));
        }
        return Promise.all(pending);
    }
    createMaterial(materialParams) {
        const material = new GLTFMeshStandardSGMaterial(materialParams);
        material.fog = true;
        material.color = materialParams.color;
        material.map = materialParams.map === undefined ? null : materialParams.map;
        material.lightMap = null;
        material.lightMapIntensity = 1;
        material.aoMap = materialParams.aoMap === undefined ? null : materialParams.aoMap;
        material.aoMapIntensity = 1;
        material.emissive = materialParams.emissive;
        material.emissiveIntensity = 1;
        material.emissiveMap = materialParams.emissiveMap === undefined ? null : materialParams.emissiveMap;
        material.bumpMap = materialParams.bumpMap === undefined ? null : materialParams.bumpMap;
        material.bumpScale = 1;
        material.normalMap = materialParams.normalMap === undefined ? null : materialParams.normalMap;
        material.normalMapType = _three.TangentSpaceNormalMap;
        if (materialParams.normalScale) material.normalScale = materialParams.normalScale;
        material.displacementMap = null;
        material.displacementScale = 1;
        material.displacementBias = 0;
        material.specularMap = materialParams.specularMap === undefined ? null : materialParams.specularMap;
        material.specular = materialParams.specular;
        material.glossinessMap = materialParams.glossinessMap === undefined ? null : materialParams.glossinessMap;
        material.glossiness = materialParams.glossiness;
        material.alphaMap = null;
        material.envMap = materialParams.envMap === undefined ? null : materialParams.envMap;
        material.envMapIntensity = 1;
        material.refractionRatio = 0.98;
        return material;
    }
}
/**
 * Mesh Quantization Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
 */ class GLTFMeshQuantizationExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
    }
}
/*********************************/ /********** INTERPOLATION ********/ /*********************************/ // Spline Interpolation
// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
class GLTFCubicSplineInterpolant extends _three.Interpolant {
    constructor(parameterPositions, sampleValues, sampleSize, resultBuffer){
        super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    }
    copySampleValue_(index) {
        // Copies a sample value to the result buffer. See description of glTF
        // CUBICSPLINE values layout in interpolate_() function below.
        const result = this.resultBuffer, values = this.sampleValues, valueSize = this.valueSize, offset = index * valueSize * 3 + valueSize;
        for(let i = 0; i !== valueSize; i++)result[i] = values[offset + i];
        return result;
    }
}
GLTFCubicSplineInterpolant.prototype.beforeStart_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;
GLTFCubicSplineInterpolant.prototype.afterEnd_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;
GLTFCubicSplineInterpolant.prototype.interpolate_ = function(i1, t0, t, t1) {
    const result = this.resultBuffer;
    const values = this.sampleValues;
    const stride = this.valueSize;
    const stride2 = stride * 2;
    const stride3 = stride * 3;
    const td = t1 - t0;
    const p = (t - t0) / td;
    const pp = p * p;
    const ppp = pp * p;
    const offset1 = i1 * stride3;
    const offset0 = offset1 - stride3;
    const s2 = -2 * ppp + 3 * pp;
    const s3 = ppp - pp;
    const s0 = 1 - s2;
    const s1 = s3 - pp + p;
    // Layout of keyframe output values for CUBICSPLINE animations:
    //   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
    for(let i = 0; i !== stride; i++){
        const p0 = values[offset0 + i + stride]; // splineVertex_k
        const m0 = values[offset0 + i + stride2] * td; // outTangent_k * (t_k+1 - t_k)
        const p1 = values[offset1 + i + stride]; // splineVertex_k+1
        const m1 = values[offset1 + i] * td; // inTangent_k+1 * (t_k+1 - t_k)
        result[i] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
    }
    return result;
};
const _q = new _three.Quaternion();
class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {
    interpolate_(i1, t0, t, t1) {
        const result = super.interpolate_(i1, t0, t, t1);
        _q.fromArray(result).normalize().toArray(result);
        return result;
    }
}
/*********************************/ /********** INTERNALS ************/ /*********************************/ /* CONSTANTS */ const WEBGL_CONSTANTS = {
    FLOAT: 5126,
    //FLOAT_MAT2: 35674,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123
};
const WEBGL_COMPONENT_TYPES = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
};
const WEBGL_FILTERS = {
    9728: _three.NearestFilter,
    9729: _three.LinearFilter,
    9984: _three.NearestMipmapNearestFilter,
    9985: _three.LinearMipmapNearestFilter,
    9986: _three.NearestMipmapLinearFilter,
    9987: _three.LinearMipmapLinearFilter
};
const WEBGL_WRAPPINGS = {
    33071: _three.ClampToEdgeWrapping,
    33648: _three.MirroredRepeatWrapping,
    10497: _three.RepeatWrapping
};
const WEBGL_TYPE_SIZES = {
    'SCALAR': 1,
    'VEC2': 2,
    'VEC3': 3,
    'VEC4': 4,
    'MAT2': 4,
    'MAT3': 9,
    'MAT4': 16
};
const ATTRIBUTES = {
    POSITION: 'position',
    NORMAL: 'normal',
    TANGENT: 'tangent',
    TEXCOORD_0: 'uv',
    TEXCOORD_1: 'uv2',
    COLOR_0: 'color',
    WEIGHTS_0: 'skinWeight',
    JOINTS_0: 'skinIndex'
};
const PATH_PROPERTIES = {
    scale: 'scale',
    translation: 'position',
    rotation: 'quaternion',
    weights: 'morphTargetInfluences'
};
const INTERPOLATION = {
    CUBICSPLINE: undefined,
    // keyframe track will be initialized with a default interpolation type, then modified.
    LINEAR: _three.InterpolateLinear,
    STEP: _three.InterpolateDiscrete
};
const ALPHA_MODES = {
    OPAQUE: 'OPAQUE',
    MASK: 'MASK',
    BLEND: 'BLEND'
};
/* UTILITY FUNCTIONS */ function resolveURL(url, path) {
    // Invalid URL
    if (typeof url !== 'string' || url === '') return '';
    // Host Relative URL
    if (/^https?:\/\//i.test(path) && /^\//.test(url)) path = path.replace(/(^https?:\/\/[^\/]+).*/i, '$1');
    // Absolute URL http://,https://,//
    if (/^(https?:)?\/\//i.test(url)) return url;
    // Data URI
    if (/^data:.*,.*$/i.test(url)) return url;
    // Blob URL
    if (/^blob:.*$/i.test(url)) return url;
    // Relative URL
    return path + url;
}
/**
 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
 */ function createDefaultMaterial(cache) {
    if (cache['DefaultMaterial'] === undefined) cache['DefaultMaterial'] = new _three.MeshStandardMaterial({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: false,
        depthTest: true,
        side: _three.FrontSide
    });
    return cache['DefaultMaterial'];
}
function addUnknownExtensionsToUserData(knownExtensions, object, objectDef) {
    // Add unknown glTF extensions to an object's userData.
    for(const name in objectDef.extensions)if (knownExtensions[name] === undefined) {
        object.userData.gltfExtensions = object.userData.gltfExtensions || {
        };
        object.userData.gltfExtensions[name] = objectDef.extensions[name];
    }
}
/**
 * @param {Object3D|Material|BufferGeometry} object
 * @param {GLTF.definition} gltfDef
 */ function assignExtrasToUserData(object, gltfDef) {
    if (gltfDef.extras !== undefined) {
        if (typeof gltfDef.extras === 'object') Object.assign(object.userData, gltfDef.extras);
        else console.warn('THREE.GLTFLoader: Ignoring primitive type .extras, ' + gltfDef.extras);
    }
}
/**
 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
 *
 * @param {BufferGeometry} geometry
 * @param {Array<GLTF.Target>} targets
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */ function addMorphTargets(geometry, targets, parser10) {
    let hasMorphPosition = false;
    let hasMorphNormal = false;
    for(let i = 0, il = targets.length; i < il; i++){
        const target = targets[i];
        if (target.POSITION !== undefined) hasMorphPosition = true;
        if (target.NORMAL !== undefined) hasMorphNormal = true;
        if (hasMorphPosition && hasMorphNormal) break;
    }
    if (!hasMorphPosition && !hasMorphNormal) return Promise.resolve(geometry);
    const pendingPositionAccessors = [];
    const pendingNormalAccessors = [];
    for(let i1 = 0, il1 = targets.length; i1 < il1; i1++){
        const target = targets[i1];
        if (hasMorphPosition) {
            const pendingAccessor = target.POSITION !== undefined ? parser10.getDependency('accessor', target.POSITION) : geometry.attributes.position;
            pendingPositionAccessors.push(pendingAccessor);
        }
        if (hasMorphNormal) {
            const pendingAccessor = target.NORMAL !== undefined ? parser10.getDependency('accessor', target.NORMAL) : geometry.attributes.normal;
            pendingNormalAccessors.push(pendingAccessor);
        }
    }
    return Promise.all([
        Promise.all(pendingPositionAccessors),
        Promise.all(pendingNormalAccessors)
    ]).then(function(accessors) {
        const morphPositions = accessors[0];
        const morphNormals = accessors[1];
        if (hasMorphPosition) geometry.morphAttributes.position = morphPositions;
        if (hasMorphNormal) geometry.morphAttributes.normal = morphNormals;
        geometry.morphTargetsRelative = true;
        return geometry;
    });
}
/**
 * @param {Mesh} mesh
 * @param {GLTF.Mesh} meshDef
 */ function updateMorphTargets(mesh, meshDef) {
    mesh.updateMorphTargets();
    if (meshDef.weights !== undefined) for(let i = 0, il = meshDef.weights.length; i < il; i++)mesh.morphTargetInfluences[i] = meshDef.weights[i];
    // .extras has user-defined data, so check that .extras.targetNames is an array.
    if (meshDef.extras && Array.isArray(meshDef.extras.targetNames)) {
        const targetNames = meshDef.extras.targetNames;
        if (mesh.morphTargetInfluences.length === targetNames.length) {
            mesh.morphTargetDictionary = {
            };
            for(let i1 = 0, il1 = targetNames.length; i1 < il1; i1++)mesh.morphTargetDictionary[targetNames[i1]] = i1;
        } else console.warn('THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.');
    }
}
function createPrimitiveKey(primitiveDef) {
    const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
    let geometryKey;
    if (dracoExtension) geometryKey = 'draco:' + dracoExtension.bufferView + ':' + dracoExtension.indices + ':' + createAttributesKey(dracoExtension.attributes);
    else geometryKey = primitiveDef.indices + ':' + createAttributesKey(primitiveDef.attributes) + ':' + primitiveDef.mode;
    return geometryKey;
}
function createAttributesKey(attributes) {
    let attributesKey = '';
    const keys = Object.keys(attributes).sort();
    for(let i = 0, il = keys.length; i < il; i++)attributesKey += keys[i] + ':' + attributes[keys[i]] + ';';
    return attributesKey;
}
function getNormalizedComponentScale(constructor) {
    // Reference:
    // https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization#encoding-quantized-data
    switch(constructor){
        case Int8Array:
            return 1 / 127;
        case Uint8Array:
            return 1 / 255;
        case Int16Array:
            return 1 / 32767;
        case Uint16Array:
            return 1 / 65535;
        default:
            throw new Error('THREE.GLTFLoader: Unsupported normalized accessor component type.');
    }
}
/* GLTF PARSER */ class GLTFParser {
    constructor(json1 = {
    }, options = {
    }){
        this.json = json1;
        this.extensions = {
        };
        this.plugins = {
        };
        this.options = options;
        // loader object cache
        this.cache = new GLTFRegistry();
        // associations between Three.js objects and glTF elements
        this.associations = new Map();
        // BufferGeometry caching
        this.primitiveCache = {
        };
        // Object3D instance caches
        this.meshCache = {
            refs: {
            },
            uses: {
            }
        };
        this.cameraCache = {
            refs: {
            },
            uses: {
            }
        };
        this.lightCache = {
            refs: {
            },
            uses: {
            }
        };
        this.textureCache = {
        };
        // Track node names, to ensure no duplicates
        this.nodeNamesUsed = {
        };
        // Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
        // expensive work of uploading a texture to the GPU off the main thread.
        if (typeof createImageBitmap !== 'undefined' && /Firefox/.test(navigator.userAgent) === false) this.textureLoader = new _three.ImageBitmapLoader(this.options.manager);
        else this.textureLoader = new _three.TextureLoader(this.options.manager);
        this.textureLoader.setCrossOrigin(this.options.crossOrigin);
        this.textureLoader.setRequestHeader(this.options.requestHeader);
        this.fileLoader = new _three.FileLoader(this.options.manager);
        this.fileLoader.setResponseType('arraybuffer');
        if (this.options.crossOrigin === 'use-credentials') this.fileLoader.setWithCredentials(true);
    }
    setExtensions(extensions) {
        this.extensions = extensions;
    }
    setPlugins(plugins) {
        this.plugins = plugins;
    }
    parse(onLoad, onError) {
        const parser10 = this;
        const json2 = this.json;
        const extensions = this.extensions;
        // Clear the loader cache
        this.cache.removeAll();
        // Mark the special nodes/meshes in json for efficient parse
        this._invokeAll(function(ext) {
            return ext._markDefs && ext._markDefs();
        });
        Promise.all(this._invokeAll(function(ext) {
            return ext.beforeRoot && ext.beforeRoot();
        })).then(function() {
            return Promise.all([
                parser10.getDependencies('scene'),
                parser10.getDependencies('animation'),
                parser10.getDependencies('camera'), 
            ]);
        }).then(function(dependencies) {
            const result = {
                scene: dependencies[0][json2.scene || 0],
                scenes: dependencies[0],
                animations: dependencies[1],
                cameras: dependencies[2],
                asset: json2.asset,
                parser: parser10,
                userData: {
                }
            };
            addUnknownExtensionsToUserData(extensions, result, json2);
            assignExtrasToUserData(result, json2);
            Promise.all(parser10._invokeAll(function(ext) {
                return ext.afterRoot && ext.afterRoot(result);
            })).then(function() {
                onLoad(result);
            });
        }).catch(onError);
    }
    /**
	 * Marks the special nodes/meshes in json for efficient parse.
	 */ _markDefs() {
        const nodeDefs = this.json.nodes || [];
        const skinDefs = this.json.skins || [];
        const meshDefs = this.json.meshes || [];
        // Nothing in the node definition indicates whether it is a Bone or an
        // Object3D. Use the skins' joint references to mark bones.
        for(let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++){
            const joints = skinDefs[skinIndex].joints;
            for(let i = 0, il = joints.length; i < il; i++)nodeDefs[joints[i]].isBone = true;
        }
        // Iterate over all nodes, marking references to shared resources,
        // as well as skeleton joints.
        for(let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++){
            const nodeDef = nodeDefs[nodeIndex];
            if (nodeDef.mesh !== undefined) {
                this._addNodeRef(this.meshCache, nodeDef.mesh);
                // Nothing in the mesh definition indicates whether it is
                // a SkinnedMesh or Mesh. Use the node's mesh reference
                // to mark SkinnedMesh if node has skin.
                if (nodeDef.skin !== undefined) meshDefs[nodeDef.mesh].isSkinnedMesh = true;
            }
            if (nodeDef.camera !== undefined) this._addNodeRef(this.cameraCache, nodeDef.camera);
        }
    }
    /**
	 * Counts references to shared node / Object3D resources. These resources
	 * can be reused, or "instantiated", at multiple nodes in the scene
	 * hierarchy. Mesh, Camera, and Light instances are instantiated and must
	 * be marked. Non-scenegraph resources (like Materials, Geometries, and
	 * Textures) can be reused directly and are not marked here.
	 *
	 * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
	 */ _addNodeRef(cache, index) {
        if (index === undefined) return;
        if (cache.refs[index] === undefined) cache.refs[index] = cache.uses[index] = 0;
        cache.refs[index]++;
    }
    /** Returns a reference to a shared resource, cloning it if necessary. */ _getNodeRef(cache, index, object) {
        if (cache.refs[index] <= 1) return object;
        const ref = object.clone();
        // Propagates mappings to the cloned object, prevents mappings on the
        // original object from being lost.
        const updateMappings = (original, clone)=>{
            const mappings = this.associations.get(original);
            if (mappings != null) this.associations.set(clone, mappings);
            for (const [i, child] of original.children.entries())updateMappings(child, clone.children[i]);
        };
        updateMappings(object, ref);
        ref.name += '_instance_' + cache.uses[index]++;
        return ref;
    }
    _invokeOne(func) {
        const extensions = Object.values(this.plugins);
        extensions.push(this);
        for(let i = 0; i < extensions.length; i++){
            const result = func(extensions[i]);
            if (result) return result;
        }
        return null;
    }
    _invokeAll(func) {
        const extensions = Object.values(this.plugins);
        extensions.unshift(this);
        const pending = [];
        for(let i = 0; i < extensions.length; i++){
            const result = func(extensions[i]);
            if (result) pending.push(result);
        }
        return pending;
    }
    /**
	 * Requests the specified dependency asynchronously, with caching.
	 * @param {string} type
	 * @param {number} index
	 * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
	 */ getDependency(type, index) {
        const cacheKey = type + ':' + index;
        let dependency = this.cache.get(cacheKey);
        if (!dependency) {
            switch(type){
                case 'scene':
                    dependency = this.loadScene(index);
                    break;
                case 'node':
                    dependency = this.loadNode(index);
                    break;
                case 'mesh':
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadMesh && ext.loadMesh(index);
                    });
                    break;
                case 'accessor':
                    dependency = this.loadAccessor(index);
                    break;
                case 'bufferView':
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadBufferView && ext.loadBufferView(index);
                    });
                    break;
                case 'buffer':
                    dependency = this.loadBuffer(index);
                    break;
                case 'material':
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadMaterial && ext.loadMaterial(index);
                    });
                    break;
                case 'texture':
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadTexture && ext.loadTexture(index);
                    });
                    break;
                case 'skin':
                    dependency = this.loadSkin(index);
                    break;
                case 'animation':
                    dependency = this.loadAnimation(index);
                    break;
                case 'camera':
                    dependency = this.loadCamera(index);
                    break;
                default:
                    throw new Error('Unknown type: ' + type);
            }
            this.cache.add(cacheKey, dependency);
        }
        return dependency;
    }
    /**
	 * Requests all dependencies of the specified type asynchronously, with caching.
	 * @param {string} type
	 * @return {Promise<Array<Object>>}
	 */ getDependencies(type) {
        let dependencies = this.cache.get(type);
        if (!dependencies) {
            const parser10 = this;
            const defs = this.json[type + (type === 'mesh' ? 'es' : 's')] || [];
            dependencies = Promise.all(defs.map(function(def, index) {
                return parser10.getDependency(type, index);
            }));
            this.cache.add(type, dependencies);
        }
        return dependencies;
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferIndex
	 * @return {Promise<ArrayBuffer>}
	 */ loadBuffer(bufferIndex) {
        const bufferDef = this.json.buffers[bufferIndex];
        const loader = this.fileLoader;
        if (bufferDef.type && bufferDef.type !== 'arraybuffer') throw new Error('THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.');
        // If present, GLB container is required to be the first buffer.
        if (bufferDef.uri === undefined && bufferIndex === 0) return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
        const options1 = this.options;
        return new Promise(function(resolve, reject) {
            loader.load(resolveURL(bufferDef.uri, options1.path), resolve, undefined, function() {
                reject(new Error('THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".'));
            });
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferViewIndex
	 * @return {Promise<ArrayBuffer>}
	 */ loadBufferView(bufferViewIndex) {
        const bufferViewDef = this.json.bufferViews[bufferViewIndex];
        return this.getDependency('buffer', bufferViewDef.buffer).then(function(buffer) {
            const byteLength = bufferViewDef.byteLength || 0;
            const byteOffset = bufferViewDef.byteOffset || 0;
            return buffer.slice(byteOffset, byteOffset + byteLength);
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
	 * @param {number} accessorIndex
	 * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
	 */ loadAccessor(accessorIndex) {
        const parser10 = this;
        const json2 = this.json;
        const accessorDef = this.json.accessors[accessorIndex];
        if (accessorDef.bufferView === undefined && accessorDef.sparse === undefined) // Ignore empty accessors, which may be used to declare runtime
        // information about attributes coming from another source (e.g. Draco
        // compression extension).
        return Promise.resolve(null);
        const pendingBufferViews = [];
        if (accessorDef.bufferView !== undefined) pendingBufferViews.push(this.getDependency('bufferView', accessorDef.bufferView));
        else pendingBufferViews.push(null);
        if (accessorDef.sparse !== undefined) {
            pendingBufferViews.push(this.getDependency('bufferView', accessorDef.sparse.indices.bufferView));
            pendingBufferViews.push(this.getDependency('bufferView', accessorDef.sparse.values.bufferView));
        }
        return Promise.all(pendingBufferViews).then(function(bufferViews) {
            const bufferView = bufferViews[0];
            const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
            const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
            // For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
            const elementBytes = TypedArray.BYTES_PER_ELEMENT;
            const itemBytes = elementBytes * itemSize;
            const byteOffset = accessorDef.byteOffset || 0;
            const byteStride = accessorDef.bufferView !== undefined ? json2.bufferViews[accessorDef.bufferView].byteStride : undefined;
            const normalized = accessorDef.normalized === true;
            let array, bufferAttribute;
            // The buffer is not interleaved if the stride is the item size in bytes.
            if (byteStride && byteStride !== itemBytes) {
                // Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
                // This makes sure that IBA.count reflects accessor.count properly
                const ibSlice = Math.floor(byteOffset / byteStride);
                const ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType + ':' + ibSlice + ':' + accessorDef.count;
                let ib = parser10.cache.get(ibCacheKey);
                if (!ib) {
                    array = new TypedArray(bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes);
                    // Integer parameters to IB/IBA are in array elements, not bytes.
                    ib = new _three.InterleavedBuffer(array, byteStride / elementBytes);
                    parser10.cache.add(ibCacheKey, ib);
                }
                bufferAttribute = new _three.InterleavedBufferAttribute(ib, itemSize, byteOffset % byteStride / elementBytes, normalized);
            } else {
                if (bufferView === null) array = new TypedArray(accessorDef.count * itemSize);
                else array = new TypedArray(bufferView, byteOffset, accessorDef.count * itemSize);
                bufferAttribute = new _three.BufferAttribute(array, itemSize, normalized);
            }
            // https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
            if (accessorDef.sparse !== undefined) {
                const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
                const TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType];
                const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
                const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;
                const sparseIndices = new TypedArrayIndices(bufferViews[1], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices);
                const sparseValues = new TypedArray(bufferViews[2], byteOffsetValues, accessorDef.sparse.count * itemSize);
                if (bufferView !== null) // Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
                bufferAttribute = new _three.BufferAttribute(bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized);
                for(let i = 0, il = sparseIndices.length; i < il; i++){
                    const index = sparseIndices[i];
                    bufferAttribute.setX(index, sparseValues[i * itemSize]);
                    if (itemSize >= 2) bufferAttribute.setY(index, sparseValues[i * itemSize + 1]);
                    if (itemSize >= 3) bufferAttribute.setZ(index, sparseValues[i * itemSize + 2]);
                    if (itemSize >= 4) bufferAttribute.setW(index, sparseValues[i * itemSize + 3]);
                    if (itemSize >= 5) throw new Error('THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.');
                }
            }
            return bufferAttribute;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
	 * @param {number} textureIndex
	 * @return {Promise<THREE.Texture>}
	 */ loadTexture(textureIndex) {
        const json2 = this.json;
        const options1 = this.options;
        const textureDef = json2.textures[textureIndex];
        const source = json2.images[textureDef.source];
        let loader = this.textureLoader;
        if (source.uri) {
            const handler = options1.manager.getHandler(source.uri);
            if (handler !== null) loader = handler;
        }
        return this.loadTextureImage(textureIndex, source, loader);
    }
    loadTextureImage(textureIndex, source, loader) {
        const parser10 = this;
        const json2 = this.json;
        const options1 = this.options;
        const textureDef = json2.textures[textureIndex];
        const cacheKey = (source.uri || source.bufferView) + ':' + textureDef.sampler;
        if (this.textureCache[cacheKey]) // See https://github.com/mrdoob/three.js/issues/21559.
        return this.textureCache[cacheKey];
        const URL1 = self.URL || self.webkitURL;
        let sourceURI = source.uri || '';
        let isObjectURL = false;
        if (source.bufferView !== undefined) // Load binary image data from bufferView, if provided.
        sourceURI = parser10.getDependency('bufferView', source.bufferView).then(function(bufferView) {
            isObjectURL = true;
            const blob = new Blob([
                bufferView
            ], {
                type: source.mimeType
            });
            sourceURI = URL1.createObjectURL(blob);
            return sourceURI;
        });
        else if (source.uri === undefined) throw new Error('THREE.GLTFLoader: Image ' + textureIndex + ' is missing URI and bufferView');
        const promise = Promise.resolve(sourceURI).then(function(sourceURI1) {
            return new Promise(function(resolve, reject) {
                let onLoad = resolve;
                if (loader.isImageBitmapLoader === true) onLoad = function(imageBitmap) {
                    const texture = new _three.Texture(imageBitmap);
                    texture.needsUpdate = true;
                    resolve(texture);
                };
                loader.load(resolveURL(sourceURI1, options1.path), onLoad, undefined, reject);
            });
        }).then(function(texture) {
            // Clean up resources and configure Texture.
            if (isObjectURL === true) URL1.revokeObjectURL(sourceURI);
            texture.flipY = false;
            if (textureDef.name) texture.name = textureDef.name;
            const samplers = json2.samplers || {
            };
            const sampler = samplers[textureDef.sampler] || {
            };
            texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || _three.LinearFilter;
            texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || _three.LinearMipmapLinearFilter;
            texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || _three.RepeatWrapping;
            texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || _three.RepeatWrapping;
            parser10.associations.set(texture, {
                textures: textureIndex
            });
            return texture;
        }).catch(function() {
            console.error('THREE.GLTFLoader: Couldn\'t load texture', sourceURI);
            return null;
        });
        this.textureCache[cacheKey] = promise;
        return promise;
    }
    /**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise<Texture>}
	 */ assignTexture(materialParams, mapName, mapDef) {
        const parser10 = this;
        return this.getDependency('texture', mapDef.index).then(function(texture) {
            // Materials sample aoMap from UV set 1 and other maps from UV set 0 - this can't be configured
            // However, we will copy UV set 0 to UV set 1 on demand for aoMap
            if (mapDef.texCoord !== undefined && mapDef.texCoord != 0 && !(mapName === 'aoMap' && mapDef.texCoord == 1)) console.warn('THREE.GLTFLoader: Custom UV set ' + mapDef.texCoord + ' for texture ' + mapName + ' not yet supported.');
            if (parser10.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
                const transform = mapDef.extensions !== undefined ? mapDef.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : undefined;
                if (transform) {
                    const gltfReference = parser10.associations.get(texture);
                    texture = parser10.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(texture, transform);
                    parser10.associations.set(texture, gltfReference);
                }
            }
            materialParams[mapName] = texture;
            return texture;
        });
    }
    /**
	 * Assigns final material to a Mesh, Line, or Points instance. The instance
	 * already has a material (generated from the glTF material options alone)
	 * but reuse of the same glTF material may require multiple threejs materials
	 * to accommodate different primitive types, defines, etc. New materials will
	 * be created if necessary, and reused from a cache.
	 * @param  {Object3D} mesh Mesh, Line, or Points instance.
	 */ assignFinalMaterial(mesh) {
        const geometry = mesh.geometry;
        let material = mesh.material;
        const useDerivativeTangents = geometry.attributes.tangent === undefined;
        const useVertexColors = geometry.attributes.color !== undefined;
        const useFlatShading = geometry.attributes.normal === undefined;
        if (mesh.isPoints) {
            const cacheKey = 'PointsMaterial:' + material.uuid;
            let pointsMaterial = this.cache.get(cacheKey);
            if (!pointsMaterial) {
                pointsMaterial = new _three.PointsMaterial();
                _three.Material.prototype.copy.call(pointsMaterial, material);
                pointsMaterial.color.copy(material.color);
                pointsMaterial.map = material.map;
                pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px
                this.cache.add(cacheKey, pointsMaterial);
            }
            material = pointsMaterial;
        } else if (mesh.isLine) {
            const cacheKey = 'LineBasicMaterial:' + material.uuid;
            let lineMaterial = this.cache.get(cacheKey);
            if (!lineMaterial) {
                lineMaterial = new _three.LineBasicMaterial();
                _three.Material.prototype.copy.call(lineMaterial, material);
                lineMaterial.color.copy(material.color);
                this.cache.add(cacheKey, lineMaterial);
            }
            material = lineMaterial;
        }
        // Clone the material if it will be modified
        if (useDerivativeTangents || useVertexColors || useFlatShading) {
            let cacheKey = 'ClonedMaterial:' + material.uuid + ':';
            if (material.isGLTFSpecularGlossinessMaterial) cacheKey += 'specular-glossiness:';
            if (useDerivativeTangents) cacheKey += 'derivative-tangents:';
            if (useVertexColors) cacheKey += 'vertex-colors:';
            if (useFlatShading) cacheKey += 'flat-shading:';
            let cachedMaterial = this.cache.get(cacheKey);
            if (!cachedMaterial) {
                cachedMaterial = material.clone();
                if (useVertexColors) cachedMaterial.vertexColors = true;
                if (useFlatShading) cachedMaterial.flatShading = true;
                if (useDerivativeTangents) {
                    // https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
                    if (cachedMaterial.normalScale) cachedMaterial.normalScale.y *= -1;
                    if (cachedMaterial.clearcoatNormalScale) cachedMaterial.clearcoatNormalScale.y *= -1;
                }
                this.cache.add(cacheKey, cachedMaterial);
                this.associations.set(cachedMaterial, this.associations.get(material));
            }
            material = cachedMaterial;
        }
        // workarounds for mesh and geometry
        if (material.aoMap && geometry.attributes.uv2 === undefined && geometry.attributes.uv !== undefined) geometry.setAttribute('uv2', geometry.attributes.uv);
        mesh.material = material;
    }
    getMaterialType() {
        return _three.MeshStandardMaterial;
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
	 * @param {number} materialIndex
	 * @return {Promise<Material>}
	 */ loadMaterial(materialIndex) {
        const parser10 = this;
        const json2 = this.json;
        const extensions = this.extensions;
        const materialDef = json2.materials[materialIndex];
        let materialType;
        const materialParams = {
        };
        const materialExtensions = materialDef.extensions || {
        };
        const pending = [];
        if (materialExtensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            const sgExtension = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            materialType = sgExtension.getMaterialType();
            pending.push(sgExtension.extendParams(materialParams, materialDef, parser10));
        } else if (materialExtensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
            const kmuExtension = extensions[EXTENSIONS.KHR_MATERIALS_UNLIT];
            materialType = kmuExtension.getMaterialType();
            pending.push(kmuExtension.extendParams(materialParams, materialDef, parser10));
        } else {
            // Specification:
            // https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material
            const metallicRoughness = materialDef.pbrMetallicRoughness || {
            };
            materialParams.color = new _three.Color(1, 1, 1);
            materialParams.opacity = 1;
            if (Array.isArray(metallicRoughness.baseColorFactor)) {
                const array = metallicRoughness.baseColorFactor;
                materialParams.color.fromArray(array);
                materialParams.opacity = array[3];
            }
            if (metallicRoughness.baseColorTexture !== undefined) pending.push(parser10.assignTexture(materialParams, 'map', metallicRoughness.baseColorTexture));
            materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1;
            materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1;
            if (metallicRoughness.metallicRoughnessTexture !== undefined) {
                pending.push(parser10.assignTexture(materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture));
                pending.push(parser10.assignTexture(materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture));
            }
            materialType = this._invokeOne(function(ext) {
                return ext.getMaterialType && ext.getMaterialType(materialIndex);
            });
            pending.push(Promise.all(this._invokeAll(function(ext) {
                return ext.extendMaterialParams && ext.extendMaterialParams(materialIndex, materialParams);
            })));
        }
        if (materialDef.doubleSided === true) materialParams.side = _three.DoubleSide;
        const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;
        if (alphaMode === ALPHA_MODES.BLEND) {
            materialParams.transparent = true;
            // See: https://github.com/mrdoob/three.js/issues/17706
            materialParams.depthWrite = false;
        } else {
            materialParams.format = _three.RGBFormat;
            materialParams.transparent = false;
            if (alphaMode === ALPHA_MODES.MASK) materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;
        }
        if (materialDef.normalTexture !== undefined && materialType !== _three.MeshBasicMaterial) {
            pending.push(parser10.assignTexture(materialParams, 'normalMap', materialDef.normalTexture));
            materialParams.normalScale = new _three.Vector2(1, 1);
            if (materialDef.normalTexture.scale !== undefined) {
                const scale = materialDef.normalTexture.scale;
                materialParams.normalScale.set(scale, scale);
            }
        }
        if (materialDef.occlusionTexture !== undefined && materialType !== _three.MeshBasicMaterial) {
            pending.push(parser10.assignTexture(materialParams, 'aoMap', materialDef.occlusionTexture));
            if (materialDef.occlusionTexture.strength !== undefined) materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;
        }
        if (materialDef.emissiveFactor !== undefined && materialType !== _three.MeshBasicMaterial) materialParams.emissive = new _three.Color().fromArray(materialDef.emissiveFactor);
        if (materialDef.emissiveTexture !== undefined && materialType !== _three.MeshBasicMaterial) pending.push(parser10.assignTexture(materialParams, 'emissiveMap', materialDef.emissiveTexture));
        return Promise.all(pending).then(function() {
            let material;
            if (materialType === GLTFMeshStandardSGMaterial) material = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(materialParams);
            else material = new materialType(materialParams);
            if (materialDef.name) material.name = materialDef.name;
            // baseColorTexture, emissiveTexture, and specularGlossinessTexture use sRGB encoding.
            if (material.map) material.map.encoding = _three.sRGBEncoding;
            if (material.emissiveMap) material.emissiveMap.encoding = _three.sRGBEncoding;
            assignExtrasToUserData(material, materialDef);
            parser10.associations.set(material, {
                materials: materialIndex
            });
            if (materialDef.extensions) addUnknownExtensionsToUserData(extensions, material, materialDef);
            return material;
        });
    }
    /** When Object3D instances are targeted by animation, they need unique names. */ createUniqueName(originalName) {
        const sanitizedName = _three.PropertyBinding.sanitizeNodeName(originalName || '');
        let name = sanitizedName;
        for(let i = 1; this.nodeNamesUsed[name]; ++i)name = sanitizedName + '_' + i;
        this.nodeNamesUsed[name] = true;
        return name;
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
	 *
	 * Creates BufferGeometries from primitives.
	 *
	 * @param {Array<GLTF.Primitive>} primitives
	 * @return {Promise<Array<BufferGeometry>>}
	 */ loadGeometries(primitives) {
        const parser10 = this;
        const extensions = this.extensions;
        const cache = this.primitiveCache;
        function createDracoPrimitive(primitive) {
            return extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(primitive, parser10).then(function(geometry) {
                return addPrimitiveAttributes(geometry, primitive, parser10);
            });
        }
        const pending = [];
        for(let i = 0, il = primitives.length; i < il; i++){
            const primitive = primitives[i];
            const cacheKey = createPrimitiveKey(primitive);
            // See if we've already created this geometry
            const cached = cache[cacheKey];
            if (cached) // Use the cached geometry if it exists
            pending.push(cached.promise);
            else {
                let geometryPromise;
                if (primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) // Use DRACO geometry if available
                geometryPromise = createDracoPrimitive(primitive);
                else // Otherwise create a new geometry
                geometryPromise = addPrimitiveAttributes(new _three.BufferGeometry(), primitive, parser10);
                // Cache this geometry
                cache[cacheKey] = {
                    primitive: primitive,
                    promise: geometryPromise
                };
                pending.push(geometryPromise);
            }
        }
        return Promise.all(pending);
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
	 * @param {number} meshIndex
	 * @return {Promise<Group|Mesh|SkinnedMesh>}
	 */ loadMesh(meshIndex) {
        const parser10 = this;
        const json2 = this.json;
        const extensions = this.extensions;
        const meshDef = json2.meshes[meshIndex];
        const primitives = meshDef.primitives;
        const pending = [];
        for(let i = 0, il = primitives.length; i < il; i++){
            const material = primitives[i].material === undefined ? createDefaultMaterial(this.cache) : this.getDependency('material', primitives[i].material);
            pending.push(material);
        }
        pending.push(parser10.loadGeometries(primitives));
        return Promise.all(pending).then(function(results) {
            const materials = results.slice(0, results.length - 1);
            const geometries = results[results.length - 1];
            const meshes = [];
            for(let i1 = 0, il1 = geometries.length; i1 < il1; i1++){
                const geometry = geometries[i1];
                const primitive = primitives[i1];
                // 1. create Mesh
                let mesh;
                const material = materials[i1];
                if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || primitive.mode === undefined) {
                    // .isSkinnedMesh isn't in glTF spec. See ._markDefs()
                    mesh = meshDef.isSkinnedMesh === true ? new _three.SkinnedMesh(geometry, material) : new _three.Mesh(geometry, material);
                    if (mesh.isSkinnedMesh === true && !mesh.geometry.attributes.skinWeight.normalized) // we normalize floating point skin weight array to fix malformed assets (see #15319)
                    // it's important to skip this for non-float32 data since normalizeSkinWeights assumes non-normalized inputs
                    mesh.normalizeSkinWeights();
                    if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP) mesh.geometry = toTrianglesDrawMode(mesh.geometry, _three.TriangleStripDrawMode);
                    else if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN) mesh.geometry = toTrianglesDrawMode(mesh.geometry, _three.TriangleFanDrawMode);
                } else if (primitive.mode === WEBGL_CONSTANTS.LINES) mesh = new _three.LineSegments(geometry, material);
                else if (primitive.mode === WEBGL_CONSTANTS.LINE_STRIP) mesh = new _three.Line(geometry, material);
                else if (primitive.mode === WEBGL_CONSTANTS.LINE_LOOP) mesh = new _three.LineLoop(geometry, material);
                else if (primitive.mode === WEBGL_CONSTANTS.POINTS) mesh = new _three.Points(geometry, material);
                else throw new Error('THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode);
                if (Object.keys(mesh.geometry.morphAttributes).length > 0) updateMorphTargets(mesh, meshDef);
                mesh.name = parser10.createUniqueName(meshDef.name || 'mesh_' + meshIndex);
                assignExtrasToUserData(mesh, meshDef);
                if (primitive.extensions) addUnknownExtensionsToUserData(extensions, mesh, primitive);
                parser10.assignFinalMaterial(mesh);
                meshes.push(mesh);
            }
            for(let i2 = 0, il2 = meshes.length; i2 < il2; i2++)parser10.associations.set(meshes[i2], {
                meshes: meshIndex,
                primitives: i2
            });
            if (meshes.length === 1) return meshes[0];
            const group = new _three.Group();
            parser10.associations.set(group, {
                meshes: meshIndex
            });
            for(let i3 = 0, il3 = meshes.length; i3 < il3; i3++)group.add(meshes[i3]);
            return group;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
	 * @param {number} cameraIndex
	 * @return {Promise<THREE.Camera>}
	 */ loadCamera(cameraIndex) {
        let camera;
        const cameraDef = this.json.cameras[cameraIndex];
        const params1 = cameraDef[cameraDef.type];
        if (!params1) {
            console.warn('THREE.GLTFLoader: Missing camera parameters.');
            return;
        }
        if (cameraDef.type === 'perspective') camera = new _three.PerspectiveCamera(_three.MathUtils.radToDeg(params1.yfov), params1.aspectRatio || 1, params1.znear || 1, params1.zfar || 2000000);
        else if (cameraDef.type === 'orthographic') camera = new _three.OrthographicCamera(-params1.xmag, params1.xmag, params1.ymag, -params1.ymag, params1.znear, params1.zfar);
        if (cameraDef.name) camera.name = this.createUniqueName(cameraDef.name);
        assignExtrasToUserData(camera, cameraDef);
        return Promise.resolve(camera);
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
	 * @param {number} skinIndex
	 * @return {Promise<Object>}
	 */ loadSkin(skinIndex) {
        const skinDef = this.json.skins[skinIndex];
        const skinEntry = {
            joints: skinDef.joints
        };
        if (skinDef.inverseBindMatrices === undefined) return Promise.resolve(skinEntry);
        return this.getDependency('accessor', skinDef.inverseBindMatrices).then(function(accessor) {
            skinEntry.inverseBindMatrices = accessor;
            return skinEntry;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
	 * @param {number} animationIndex
	 * @return {Promise<AnimationClip>}
	 */ loadAnimation(animationIndex) {
        const json2 = this.json;
        const animationDef = json2.animations[animationIndex];
        const pendingNodes = [];
        const pendingInputAccessors = [];
        const pendingOutputAccessors = [];
        const pendingSamplers = [];
        const pendingTargets = [];
        for(let i = 0, il = animationDef.channels.length; i < il; i++){
            const channel = animationDef.channels[i];
            const sampler = animationDef.samplers[channel.sampler];
            const target = channel.target;
            const name = target.node !== undefined ? target.node : target.id; // NOTE: target.id is deprecated.
            const input = animationDef.parameters !== undefined ? animationDef.parameters[sampler.input] : sampler.input;
            const output = animationDef.parameters !== undefined ? animationDef.parameters[sampler.output] : sampler.output;
            pendingNodes.push(this.getDependency('node', name));
            pendingInputAccessors.push(this.getDependency('accessor', input));
            pendingOutputAccessors.push(this.getDependency('accessor', output));
            pendingSamplers.push(sampler);
            pendingTargets.push(target);
        }
        return Promise.all([
            Promise.all(pendingNodes),
            Promise.all(pendingInputAccessors),
            Promise.all(pendingOutputAccessors),
            Promise.all(pendingSamplers),
            Promise.all(pendingTargets)
        ]).then(function(dependencies) {
            const nodes = dependencies[0];
            const inputAccessors = dependencies[1];
            const outputAccessors = dependencies[2];
            const samplers = dependencies[3];
            const targets = dependencies[4];
            const tracks = [];
            for(let i1 = 0, il1 = nodes.length; i1 < il1; i1++){
                const node = nodes[i1];
                const inputAccessor = inputAccessors[i1];
                const outputAccessor = outputAccessors[i1];
                const sampler = samplers[i1];
                const target = targets[i1];
                if (node === undefined) continue;
                node.updateMatrix();
                node.matrixAutoUpdate = true;
                let TypedKeyframeTrack;
                switch(PATH_PROPERTIES[target.path]){
                    case PATH_PROPERTIES.weights:
                        TypedKeyframeTrack = _three.NumberKeyframeTrack;
                        break;
                    case PATH_PROPERTIES.rotation:
                        TypedKeyframeTrack = _three.QuaternionKeyframeTrack;
                        break;
                    case PATH_PROPERTIES.position:
                    case PATH_PROPERTIES.scale:
                    default:
                        TypedKeyframeTrack = _three.VectorKeyframeTrack;
                        break;
                }
                const targetName = node.name ? node.name : node.uuid;
                const interpolation = sampler.interpolation !== undefined ? INTERPOLATION[sampler.interpolation] : _three.InterpolateLinear;
                const targetNames = [];
                if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) // Node may be a Group (glTF mesh with several primitives) or a Mesh.
                node.traverse(function(object) {
                    if (object.isMesh === true && object.morphTargetInfluences) targetNames.push(object.name ? object.name : object.uuid);
                });
                else targetNames.push(targetName);
                let outputArray = outputAccessor.array;
                if (outputAccessor.normalized) {
                    const scale = getNormalizedComponentScale(outputArray.constructor);
                    const scaled = new Float32Array(outputArray.length);
                    for(let j = 0, jl = outputArray.length; j < jl; j++)scaled[j] = outputArray[j] * scale;
                    outputArray = scaled;
                }
                for(let j = 0, jl = targetNames.length; j < jl; j++){
                    const track = new TypedKeyframeTrack(targetNames[j] + '.' + PATH_PROPERTIES[target.path], inputAccessor.array, outputArray, interpolation);
                    // Override interpolation with custom factory method.
                    if (sampler.interpolation === 'CUBICSPLINE') {
                        track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline(result) {
                            // A CUBICSPLINE keyframe in glTF has three output values for each input value,
                            // representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
                            // must be divided by three to get the interpolant's sampleSize argument.
                            const interpolantType = this instanceof _three.QuaternionKeyframeTrack ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;
                            return new interpolantType(this.times, this.values, this.getValueSize() / 3, result);
                        };
                        // Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
                        track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
                    }
                    tracks.push(track);
                }
            }
            const name = animationDef.name ? animationDef.name : 'animation_' + animationIndex;
            return new _three.AnimationClip(name, undefined, tracks);
        });
    }
    createNodeMesh(nodeIndex) {
        const json2 = this.json;
        const parser10 = this;
        const nodeDef = json2.nodes[nodeIndex];
        if (nodeDef.mesh === undefined) return null;
        return parser10.getDependency('mesh', nodeDef.mesh).then(function(mesh) {
            const node = parser10._getNodeRef(parser10.meshCache, nodeDef.mesh, mesh);
            // if weights are provided on the node, override weights on the mesh.
            if (nodeDef.weights !== undefined) node.traverse(function(o) {
                if (!o.isMesh) return;
                for(let i = 0, il = nodeDef.weights.length; i < il; i++)o.morphTargetInfluences[i] = nodeDef.weights[i];
            });
            return node;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
	 * @param {number} nodeIndex
	 * @return {Promise<Object3D>}
	 */ loadNode(nodeIndex) {
        const json2 = this.json;
        const extensions = this.extensions;
        const parser10 = this;
        const nodeDef = json2.nodes[nodeIndex];
        // reserve node's name before its dependencies, so the root has the intended name.
        const nodeName = nodeDef.name ? parser10.createUniqueName(nodeDef.name) : '';
        return (function() {
            const pending = [];
            const meshPromise = parser10._invokeOne(function(ext) {
                return ext.createNodeMesh && ext.createNodeMesh(nodeIndex);
            });
            if (meshPromise) pending.push(meshPromise);
            if (nodeDef.camera !== undefined) pending.push(parser10.getDependency('camera', nodeDef.camera).then(function(camera) {
                return parser10._getNodeRef(parser10.cameraCache, nodeDef.camera, camera);
            }));
            parser10._invokeAll(function(ext) {
                return ext.createNodeAttachment && ext.createNodeAttachment(nodeIndex);
            }).forEach(function(promise) {
                pending.push(promise);
            });
            return Promise.all(pending);
        })().then(function(objects) {
            let node;
            // .isBone isn't in glTF spec. See ._markDefs
            if (nodeDef.isBone === true) node = new _three.Bone();
            else if (objects.length > 1) node = new _three.Group();
            else if (objects.length === 1) node = objects[0];
            else node = new _three.Object3D();
            if (node !== objects[0]) for(let i = 0, il = objects.length; i < il; i++)node.add(objects[i]);
            if (nodeDef.name) {
                node.userData.name = nodeDef.name;
                node.name = nodeName;
            }
            assignExtrasToUserData(node, nodeDef);
            if (nodeDef.extensions) addUnknownExtensionsToUserData(extensions, node, nodeDef);
            if (nodeDef.matrix !== undefined) {
                const matrix = new _three.Matrix4();
                matrix.fromArray(nodeDef.matrix);
                node.applyMatrix4(matrix);
            } else {
                if (nodeDef.translation !== undefined) node.position.fromArray(nodeDef.translation);
                if (nodeDef.rotation !== undefined) node.quaternion.fromArray(nodeDef.rotation);
                if (nodeDef.scale !== undefined) node.scale.fromArray(nodeDef.scale);
            }
            if (!parser10.associations.has(node)) parser10.associations.set(node, {
            });
            parser10.associations.get(node).nodes = nodeIndex;
            return node;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	 * @param {number} sceneIndex
	 * @return {Promise<Group>}
	 */ loadScene(sceneIndex) {
        const json2 = this.json;
        const extensions = this.extensions;
        const sceneDef = this.json.scenes[sceneIndex];
        const parser10 = this;
        // Loader returns Group, not Scene.
        // See: https://github.com/mrdoob/three.js/issues/18342#issuecomment-578981172
        const scene = new _three.Group();
        if (sceneDef.name) scene.name = parser10.createUniqueName(sceneDef.name);
        assignExtrasToUserData(scene, sceneDef);
        if (sceneDef.extensions) addUnknownExtensionsToUserData(extensions, scene, sceneDef);
        const nodeIds = sceneDef.nodes || [];
        const pending = [];
        for(let i = 0, il = nodeIds.length; i < il; i++)pending.push(buildNodeHierarchy(nodeIds[i], scene, json2, parser10));
        return Promise.all(pending).then(function() {
            // Removes dangling associations, associations that reference a node that
            // didn't make it into the scene.
            const reduceAssociations = (node)=>{
                const reducedAssociations = new Map();
                for (const [key, value] of parser10.associations)if (key instanceof _three.Material || key instanceof _three.Texture) reducedAssociations.set(key, value);
                node.traverse((node1)=>{
                    const mappings = parser10.associations.get(node1);
                    if (mappings != null) reducedAssociations.set(node1, mappings);
                });
                return reducedAssociations;
            };
            parser10.associations = reduceAssociations(scene);
            return scene;
        });
    }
}
function buildNodeHierarchy(nodeId, parentObject, json2, parser10) {
    const nodeDef = json2.nodes[nodeId];
    return parser10.getDependency('node', nodeId).then(function(node) {
        if (nodeDef.skin === undefined) return node;
        // build skeleton here as well
        let skinEntry;
        return parser10.getDependency('skin', nodeDef.skin).then(function(skin) {
            skinEntry = skin;
            const pendingJoints = [];
            for(let i = 0, il = skinEntry.joints.length; i < il; i++)pendingJoints.push(parser10.getDependency('node', skinEntry.joints[i]));
            return Promise.all(pendingJoints);
        }).then(function(jointNodes) {
            node.traverse(function(mesh) {
                if (!mesh.isMesh) return;
                const bones = [];
                const boneInverses = [];
                for(let j = 0, jl = jointNodes.length; j < jl; j++){
                    const jointNode = jointNodes[j];
                    if (jointNode) {
                        bones.push(jointNode);
                        const mat = new _three.Matrix4();
                        if (skinEntry.inverseBindMatrices !== undefined) mat.fromArray(skinEntry.inverseBindMatrices.array, j * 16);
                        boneInverses.push(mat);
                    } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', skinEntry.joints[j]);
                }
                mesh.bind(new _three.Skeleton(bones, boneInverses), mesh.matrixWorld);
            });
            return node;
        });
    }).then(function(node) {
        // build node hierachy
        parentObject.add(node);
        const pending = [];
        if (nodeDef.children) {
            const children = nodeDef.children;
            for(let i = 0, il = children.length; i < il; i++){
                const child = children[i];
                pending.push(buildNodeHierarchy(child, node, json2, parser10));
            }
        }
        return Promise.all(pending);
    });
}
/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 */ function computeBounds(geometry, primitiveDef, parser10) {
    const attributes = primitiveDef.attributes;
    const box = new _three.Box3();
    if (attributes.POSITION !== undefined) {
        const accessor = parser10.json.accessors[attributes.POSITION];
        const min = accessor.min;
        const max = accessor.max;
        // glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.
        if (min !== undefined && max !== undefined) {
            box.set(new _three.Vector3(min[0], min[1], min[2]), new _three.Vector3(max[0], max[1], max[2]));
            if (accessor.normalized) {
                const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
                box.min.multiplyScalar(boxScale);
                box.max.multiplyScalar(boxScale);
            }
        } else {
            console.warn('THREE.GLTFLoader: Missing min/max properties for accessor POSITION.');
            return;
        }
    } else return;
    const targets = primitiveDef.targets;
    if (targets !== undefined) {
        const maxDisplacement = new _three.Vector3();
        const vector = new _three.Vector3();
        for(let i = 0, il = targets.length; i < il; i++){
            const target = targets[i];
            if (target.POSITION !== undefined) {
                const accessor = parser10.json.accessors[target.POSITION];
                const min = accessor.min;
                const max = accessor.max;
                // glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.
                if (min !== undefined && max !== undefined) {
                    // we need to get max of absolute components because target weight is [-1,1]
                    vector.setX(Math.max(Math.abs(min[0]), Math.abs(max[0])));
                    vector.setY(Math.max(Math.abs(min[1]), Math.abs(max[1])));
                    vector.setZ(Math.max(Math.abs(min[2]), Math.abs(max[2])));
                    if (accessor.normalized) {
                        const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
                        vector.multiplyScalar(boxScale);
                    }
                    // Note: this assumes that the sum of all weights is at most 1. This isn't quite correct - it's more conservative
                    // to assume that each target can have a max weight of 1. However, for some use cases - notably, when morph targets
                    // are used to implement key-frame animations and as such only two are active at a time - this results in very large
                    // boxes. So for now we make a box that's sometimes a touch too small but is hopefully mostly of reasonable size.
                    maxDisplacement.max(vector);
                } else console.warn('THREE.GLTFLoader: Missing min/max properties for accessor POSITION.');
            }
        }
        // As per comment above this box isn't conservative, but has a reasonable size for a very large number of morph targets.
        box.expandByVector(maxDisplacement);
    }
    geometry.boundingBox = box;
    const sphere = new _three.Sphere();
    box.getCenter(sphere.center);
    sphere.radius = box.min.distanceTo(box.max) / 2;
    geometry.boundingSphere = sphere;
}
/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */ function addPrimitiveAttributes(geometry, primitiveDef, parser10) {
    const attributes = primitiveDef.attributes;
    const pending = [];
    function assignAttributeAccessor(accessorIndex, attributeName) {
        return parser10.getDependency('accessor', accessorIndex).then(function(accessor) {
            geometry.setAttribute(attributeName, accessor);
        });
    }
    for(const gltfAttributeName in attributes){
        const threeAttributeName = ATTRIBUTES[gltfAttributeName] || gltfAttributeName.toLowerCase();
        // Skip attributes already provided by e.g. Draco extension.
        if (threeAttributeName in geometry.attributes) continue;
        pending.push(assignAttributeAccessor(attributes[gltfAttributeName], threeAttributeName));
    }
    if (primitiveDef.indices !== undefined && !geometry.index) {
        const accessor = parser10.getDependency('accessor', primitiveDef.indices).then(function(accessor1) {
            geometry.setIndex(accessor1);
        });
        pending.push(accessor);
    }
    assignExtrasToUserData(geometry, primitiveDef);
    computeBounds(geometry, primitiveDef, parser10);
    return Promise.all(pending).then(function() {
        return primitiveDef.targets !== undefined ? addMorphTargets(geometry, primitiveDef.targets, parser10) : geometry;
    });
}
/**
 * @param {BufferGeometry} geometry
 * @param {Number} drawMode
 * @return {BufferGeometry}
 */ function toTrianglesDrawMode(geometry, drawMode) {
    let index = geometry.getIndex();
    // generate index if not present
    if (index === null) {
        const indices = [];
        const position = geometry.getAttribute('position');
        if (position !== undefined) {
            for(let i = 0; i < position.count; i++)indices.push(i);
            geometry.setIndex(indices);
            index = geometry.getIndex();
        } else {
            console.error('THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.');
            return geometry;
        }
    }
    //
    const numberOfTriangles = index.count - 2;
    const newIndices = [];
    if (drawMode === _three.TriangleFanDrawMode) // gl.TRIANGLE_FAN
    for(let i = 1; i <= numberOfTriangles; i++){
        newIndices.push(index.getX(0));
        newIndices.push(index.getX(i));
        newIndices.push(index.getX(i + 1));
    }
    else {
        // gl.TRIANGLE_STRIP
        for(let i1 = 0; i1 < numberOfTriangles; i1++)if (i1 % 2 === 0) {
            newIndices.push(index.getX(i1));
            newIndices.push(index.getX(i1 + 1));
            newIndices.push(index.getX(i1 + 2));
        } else {
            newIndices.push(index.getX(i1 + 2));
            newIndices.push(index.getX(i1 + 1));
            newIndices.push(index.getX(i1));
        }
    }
    if (newIndices.length / 3 !== numberOfTriangles) console.error('THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.');
    // build final geometry
    const newGeometry = geometry.clone();
    newGeometry.setIndex(newIndices);
    return newGeometry;
}

},{"three":"1AKvZ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["4DiRi"], null, "parcelRequire7e77")

//# sourceMappingURL=GLTFLoader.6f9cf571.js.map
