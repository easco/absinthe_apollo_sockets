(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module2, desc) => {
    if (module2 && typeof module2 === "object" || typeof module2 === "function") {
      for (let key of __getOwnPropNames(module2))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module2) => {
    return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
  };

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js"(exports, module2) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __createBinding2;
      (function(factory) {
        var root2 = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root2, createExporter(exports2)));
          });
        } else if (typeof module2 === "object" && typeof module2.exports === "object") {
          factory(createExporter(root2, createExporter(module2.exports)));
        } else {
          factory(createExporter(root2));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root2) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends2 = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __2() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__2.prototype = b.prototype, new __2());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest2 = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result2) {
              result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding2(o, m, p);
        };
        __createBinding2 = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          Object.defineProperty(o, k2, { enumerable: true, get: function() {
            return m[k];
          } });
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values2 = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read2(arguments[i]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __spreadArray2 = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await2 = function(v) {
          return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues2 = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result2 = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding2(result2, mod, k);
          }
          __setModuleDefault(result2, mod);
          return result2;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      });
    }
  });

  // node_modules/backo2/index.js
  var require_backo2 = __commonJS({
    "node_modules/backo2/index.js"(exports, module2) {
      module2.exports = Backoff;
      function Backoff(opts) {
        opts = opts || {};
        this.ms = opts.min || 100;
        this.max = opts.max || 1e4;
        this.factor = opts.factor || 2;
        this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        this.attempts = 0;
      }
      Backoff.prototype.duration = function() {
        var ms = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var rand = Math.random();
          var deviation = Math.floor(rand * this.jitter * ms);
          ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
        }
        return Math.min(ms, this.max) | 0;
      };
      Backoff.prototype.reset = function() {
        this.attempts = 0;
      };
      Backoff.prototype.setMin = function(min) {
        this.ms = min;
      };
      Backoff.prototype.setMax = function(max) {
        this.max = max;
      };
      Backoff.prototype.setJitter = function(jitter) {
        this.jitter = jitter;
      };
    }
  });

  // node_modules/eventemitter3/index.js
  var require_eventemitter3 = __commonJS({
    "node_modules/eventemitter3/index.js"(exports, module2) {
      "use strict";
      var has = Object.prototype.hasOwnProperty;
      var prefix = "~";
      function Events() {
      }
      if (Object.create) {
        Events.prototype = Object.create(null);
        if (!new Events().__proto__)
          prefix = false;
      }
      function EE(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
      }
      function addListener(emitter, event, fn, context, once) {
        if (typeof fn !== "function") {
          throw new TypeError("The listener must be a function");
        }
        var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
        if (!emitter._events[evt])
          emitter._events[evt] = listener, emitter._eventsCount++;
        else if (!emitter._events[evt].fn)
          emitter._events[evt].push(listener);
        else
          emitter._events[evt] = [emitter._events[evt], listener];
        return emitter;
      }
      function clearEvent(emitter, evt) {
        if (--emitter._eventsCount === 0)
          emitter._events = new Events();
        else
          delete emitter._events[evt];
      }
      function EventEmitter() {
        this._events = new Events();
        this._eventsCount = 0;
      }
      EventEmitter.prototype.eventNames = function eventNames() {
        var names = [], events, name;
        if (this._eventsCount === 0)
          return names;
        for (name in events = this._events) {
          if (has.call(events, name))
            names.push(prefix ? name.slice(1) : name);
        }
        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events));
        }
        return names;
      };
      EventEmitter.prototype.listeners = function listeners(event) {
        var evt = prefix ? prefix + event : event, handlers = this._events[evt];
        if (!handlers)
          return [];
        if (handlers.fn)
          return [handlers.fn];
        for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
          ee[i] = handlers[i].fn;
        }
        return ee;
      };
      EventEmitter.prototype.listenerCount = function listenerCount(event) {
        var evt = prefix ? prefix + event : event, listeners = this._events[evt];
        if (!listeners)
          return 0;
        if (listeners.fn)
          return 1;
        return listeners.length;
      };
      EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt])
          return false;
        var listeners = this._events[evt], len = arguments.length, args, i;
        if (listeners.fn) {
          if (listeners.once)
            this.removeListener(event, listeners.fn, void 0, true);
          switch (len) {
            case 1:
              return listeners.fn.call(listeners.context), true;
            case 2:
              return listeners.fn.call(listeners.context, a1), true;
            case 3:
              return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
          }
          for (i = 1, args = new Array(len - 1); i < len; i++) {
            args[i - 1] = arguments[i];
          }
          listeners.fn.apply(listeners.context, args);
        } else {
          var length = listeners.length, j;
          for (i = 0; i < length; i++) {
            if (listeners[i].once)
              this.removeListener(event, listeners[i].fn, void 0, true);
            switch (len) {
              case 1:
                listeners[i].fn.call(listeners[i].context);
                break;
              case 2:
                listeners[i].fn.call(listeners[i].context, a1);
                break;
              case 3:
                listeners[i].fn.call(listeners[i].context, a1, a2);
                break;
              case 4:
                listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                break;
              default:
                if (!args)
                  for (j = 1, args = new Array(len - 1); j < len; j++) {
                    args[j - 1] = arguments[j];
                  }
                listeners[i].fn.apply(listeners[i].context, args);
            }
          }
        }
        return true;
      };
      EventEmitter.prototype.on = function on(event, fn, context) {
        return addListener(this, event, fn, context, false);
      };
      EventEmitter.prototype.once = function once(event, fn, context) {
        return addListener(this, event, fn, context, true);
      };
      EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt])
          return this;
        if (!fn) {
          clearEvent(this, evt);
          return this;
        }
        var listeners = this._events[evt];
        if (listeners.fn) {
          if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
          }
        } else {
          for (var i = 0, events = [], length = listeners.length; i < length; i++) {
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
              events.push(listeners[i]);
            }
          }
          if (events.length)
            this._events[evt] = events.length === 1 ? events[0] : events;
          else
            clearEvent(this, evt);
        }
        return this;
      };
      EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;
        if (event) {
          evt = prefix ? prefix + event : event;
          if (this._events[evt])
            clearEvent(this, evt);
        } else {
          this._events = new Events();
          this._eventsCount = 0;
        }
        return this;
      };
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.addListener = EventEmitter.prototype.on;
      EventEmitter.prefixed = prefix;
      EventEmitter.EventEmitter = EventEmitter;
      if (typeof module2 !== "undefined") {
        module2.exports = EventEmitter;
      }
    }
  });

  // node_modules/subscriptions-transport-ws/dist/utils/is-string.js
  var require_is_string = __commonJS({
    "node_modules/subscriptions-transport-ws/dist/utils/is-string.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function isString(value) {
        return typeof value === "string";
      }
      exports.default = isString;
    }
  });

  // node_modules/subscriptions-transport-ws/dist/utils/is-object.js
  var require_is_object = __commonJS({
    "node_modules/subscriptions-transport-ws/dist/utils/is-object.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function isObject(value) {
        return value !== null && typeof value === "object";
      }
      exports.default = isObject;
    }
  });

  // node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js
  var require_nodejsCustomInspectSymbol = __commonJS({
    "node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var nodejsCustomInspectSymbol2 = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : void 0;
      var _default = nodejsCustomInspectSymbol2;
      exports.default = _default;
    }
  });

  // node_modules/graphql/jsutils/inspect.js
  var require_inspect = __commonJS({
    "node_modules/graphql/jsutils/inspect.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = inspect2;
      var _nodejsCustomInspectSymbol = _interopRequireDefault(require_nodejsCustomInspectSymbol());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _typeof5(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof5 = function _typeof6(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof5 = function _typeof6(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof5(obj);
      }
      var MAX_ARRAY_LENGTH2 = 10;
      var MAX_RECURSIVE_DEPTH2 = 2;
      function inspect2(value) {
        return formatValue2(value, []);
      }
      function formatValue2(value, seenValues) {
        switch (_typeof5(value)) {
          case "string":
            return JSON.stringify(value);
          case "function":
            return value.name ? "[function ".concat(value.name, "]") : "[function]";
          case "object":
            if (value === null) {
              return "null";
            }
            return formatObjectValue2(value, seenValues);
          default:
            return String(value);
        }
      }
      function formatObjectValue2(value, previouslySeenValues) {
        if (previouslySeenValues.indexOf(value) !== -1) {
          return "[Circular]";
        }
        var seenValues = [].concat(previouslySeenValues, [value]);
        var customInspectFn = getCustomFn2(value);
        if (customInspectFn !== void 0) {
          var customValue = customInspectFn.call(value);
          if (customValue !== value) {
            return typeof customValue === "string" ? customValue : formatValue2(customValue, seenValues);
          }
        } else if (Array.isArray(value)) {
          return formatArray2(value, seenValues);
        }
        return formatObject2(value, seenValues);
      }
      function formatObject2(object, seenValues) {
        var keys = Object.keys(object);
        if (keys.length === 0) {
          return "{}";
        }
        if (seenValues.length > MAX_RECURSIVE_DEPTH2) {
          return "[" + getObjectTag2(object) + "]";
        }
        var properties = keys.map(function(key) {
          var value = formatValue2(object[key], seenValues);
          return key + ": " + value;
        });
        return "{ " + properties.join(", ") + " }";
      }
      function formatArray2(array, seenValues) {
        if (array.length === 0) {
          return "[]";
        }
        if (seenValues.length > MAX_RECURSIVE_DEPTH2) {
          return "[Array]";
        }
        var len = Math.min(MAX_ARRAY_LENGTH2, array.length);
        var remaining = array.length - len;
        var items = [];
        for (var i = 0; i < len; ++i) {
          items.push(formatValue2(array[i], seenValues));
        }
        if (remaining === 1) {
          items.push("... 1 more item");
        } else if (remaining > 1) {
          items.push("... ".concat(remaining, " more items"));
        }
        return "[" + items.join(", ") + "]";
      }
      function getCustomFn2(object) {
        var customInspectFn = object[String(_nodejsCustomInspectSymbol.default)];
        if (typeof customInspectFn === "function") {
          return customInspectFn;
        }
        if (typeof object.inspect === "function") {
          return object.inspect;
        }
      }
      function getObjectTag2(object) {
        var tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
        if (tag === "Object" && typeof object.constructor === "function") {
          var name = object.constructor.name;
          if (typeof name === "string" && name !== "") {
            return name;
          }
        }
        return tag;
      }
    }
  });

  // node_modules/graphql/jsutils/invariant.js
  var require_invariant = __commonJS({
    "node_modules/graphql/jsutils/invariant.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = invariant3;
      function invariant3(condition, message) {
        var booleanCondition = Boolean(condition);
        if (!booleanCondition) {
          throw new Error(message != null ? message : "Unexpected invariant triggered.");
        }
      }
    }
  });

  // node_modules/graphql/jsutils/defineInspect.js
  var require_defineInspect = __commonJS({
    "node_modules/graphql/jsutils/defineInspect.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = defineInspect2;
      var _invariant = _interopRequireDefault(require_invariant());
      var _nodejsCustomInspectSymbol = _interopRequireDefault(require_nodejsCustomInspectSymbol());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function defineInspect2(classObject) {
        var fn = classObject.prototype.toJSON;
        typeof fn === "function" || (0, _invariant.default)(0);
        classObject.prototype.inspect = fn;
        if (_nodejsCustomInspectSymbol.default) {
          classObject.prototype[_nodejsCustomInspectSymbol.default] = fn;
        }
      }
    }
  });

  // node_modules/graphql/language/ast.js
  var require_ast = __commonJS({
    "node_modules/graphql/language/ast.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isNode = isNode2;
      exports.Token = exports.Location = void 0;
      var _defineInspect = _interopRequireDefault(require_defineInspect());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Location2 = /* @__PURE__ */ function() {
        function Location3(startToken, endToken, source) {
          this.start = startToken.start;
          this.end = endToken.end;
          this.startToken = startToken;
          this.endToken = endToken;
          this.source = source;
        }
        var _proto = Location3.prototype;
        _proto.toJSON = function toJSON() {
          return {
            start: this.start,
            end: this.end
          };
        };
        return Location3;
      }();
      exports.Location = Location2;
      (0, _defineInspect.default)(Location2);
      var Token2 = /* @__PURE__ */ function() {
        function Token3(kind, start, end, line, column, prev, value) {
          this.kind = kind;
          this.start = start;
          this.end = end;
          this.line = line;
          this.column = column;
          this.value = value;
          this.prev = prev;
          this.next = null;
        }
        var _proto2 = Token3.prototype;
        _proto2.toJSON = function toJSON() {
          return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
          };
        };
        return Token3;
      }();
      exports.Token = Token2;
      (0, _defineInspect.default)(Token2);
      function isNode2(maybeNode) {
        return maybeNode != null && typeof maybeNode.kind === "string";
      }
    }
  });

  // node_modules/graphql/language/visitor.js
  var require_visitor = __commonJS({
    "node_modules/graphql/language/visitor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.visit = visit2;
      exports.visitInParallel = visitInParallel2;
      exports.getVisitFn = getVisitFn2;
      exports.BREAK = exports.QueryDocumentKeys = void 0;
      var _inspect = _interopRequireDefault(require_inspect());
      var _ast = require_ast();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var QueryDocumentKeys2 = {
        Name: [],
        Document: ["definitions"],
        OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
        VariableDefinition: ["variable", "type", "defaultValue", "directives"],
        Variable: ["name"],
        SelectionSet: ["selections"],
        Field: ["alias", "name", "arguments", "directives", "selectionSet"],
        Argument: ["name", "value"],
        FragmentSpread: ["name", "directives"],
        InlineFragment: ["typeCondition", "directives", "selectionSet"],
        FragmentDefinition: [
          "name",
          "variableDefinitions",
          "typeCondition",
          "directives",
          "selectionSet"
        ],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: ["values"],
        ObjectValue: ["fields"],
        ObjectField: ["name", "value"],
        Directive: ["name", "arguments"],
        NamedType: ["name"],
        ListType: ["type"],
        NonNullType: ["type"],
        SchemaDefinition: ["description", "directives", "operationTypes"],
        OperationTypeDefinition: ["type"],
        ScalarTypeDefinition: ["description", "name", "directives"],
        ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        FieldDefinition: ["description", "name", "arguments", "type", "directives"],
        InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
        InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        UnionTypeDefinition: ["description", "name", "directives", "types"],
        EnumTypeDefinition: ["description", "name", "directives", "values"],
        EnumValueDefinition: ["description", "name", "directives"],
        InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
        DirectiveDefinition: ["description", "name", "arguments", "locations"],
        SchemaExtension: ["directives", "operationTypes"],
        ScalarTypeExtension: ["name", "directives"],
        ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
        InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
        UnionTypeExtension: ["name", "directives", "types"],
        EnumTypeExtension: ["name", "directives", "values"],
        InputObjectTypeExtension: ["name", "directives", "fields"]
      };
      exports.QueryDocumentKeys = QueryDocumentKeys2;
      var BREAK2 = Object.freeze({});
      exports.BREAK = BREAK2;
      function visit2(root2, visitor) {
        var visitorKeys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : QueryDocumentKeys2;
        var stack = void 0;
        var inArray = Array.isArray(root2);
        var keys = [root2];
        var index = -1;
        var edits = [];
        var node = void 0;
        var key = void 0;
        var parent = void 0;
        var path = [];
        var ancestors = [];
        var newRoot = root2;
        do {
          index++;
          var isLeaving = index === keys.length;
          var isEdited = isLeaving && edits.length !== 0;
          if (isLeaving) {
            key = ancestors.length === 0 ? void 0 : path[path.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
              if (inArray) {
                node = node.slice();
              } else {
                var clone = {};
                for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
                  var k = _Object$keys2[_i2];
                  clone[k] = node[k];
                }
                node = clone;
              }
              var editOffset = 0;
              for (var ii = 0; ii < edits.length; ii++) {
                var editKey = edits[ii][0];
                var editValue = edits[ii][1];
                if (inArray) {
                  editKey -= editOffset;
                }
                if (inArray && editValue === null) {
                  node.splice(editKey, 1);
                  editOffset++;
                } else {
                  node[editKey] = editValue;
                }
              }
            }
            index = stack.index;
            keys = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
          } else {
            key = parent ? inArray ? index : keys[index] : void 0;
            node = parent ? parent[key] : newRoot;
            if (node === null || node === void 0) {
              continue;
            }
            if (parent) {
              path.push(key);
            }
          }
          var result2 = void 0;
          if (!Array.isArray(node)) {
            if (!(0, _ast.isNode)(node)) {
              throw new Error("Invalid AST Node: ".concat((0, _inspect.default)(node), "."));
            }
            var visitFn = getVisitFn2(visitor, node.kind, isLeaving);
            if (visitFn) {
              result2 = visitFn.call(visitor, node, key, parent, path, ancestors);
              if (result2 === BREAK2) {
                break;
              }
              if (result2 === false) {
                if (!isLeaving) {
                  path.pop();
                  continue;
                }
              } else if (result2 !== void 0) {
                edits.push([key, result2]);
                if (!isLeaving) {
                  if ((0, _ast.isNode)(result2)) {
                    node = result2;
                  } else {
                    path.pop();
                    continue;
                  }
                }
              }
            }
          }
          if (result2 === void 0 && isEdited) {
            edits.push([key, node]);
          }
          if (isLeaving) {
            path.pop();
          } else {
            var _visitorKeys$node$kin;
            stack = {
              inArray,
              index,
              keys,
              edits,
              prev: stack
            };
            inArray = Array.isArray(node);
            keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
            index = -1;
            edits = [];
            if (parent) {
              ancestors.push(parent);
            }
            parent = node;
          }
        } while (stack !== void 0);
        if (edits.length !== 0) {
          newRoot = edits[edits.length - 1][1];
        }
        return newRoot;
      }
      function visitInParallel2(visitors) {
        var skipping = new Array(visitors.length);
        return {
          enter: function enter(node) {
            for (var i = 0; i < visitors.length; i++) {
              if (skipping[i] == null) {
                var fn = getVisitFn2(visitors[i], node.kind, false);
                if (fn) {
                  var result2 = fn.apply(visitors[i], arguments);
                  if (result2 === false) {
                    skipping[i] = node;
                  } else if (result2 === BREAK2) {
                    skipping[i] = BREAK2;
                  } else if (result2 !== void 0) {
                    return result2;
                  }
                }
              }
            }
          },
          leave: function leave(node) {
            for (var i = 0; i < visitors.length; i++) {
              if (skipping[i] == null) {
                var fn = getVisitFn2(visitors[i], node.kind, true);
                if (fn) {
                  var result2 = fn.apply(visitors[i], arguments);
                  if (result2 === BREAK2) {
                    skipping[i] = BREAK2;
                  } else if (result2 !== void 0 && result2 !== false) {
                    return result2;
                  }
                }
              } else if (skipping[i] === node) {
                skipping[i] = null;
              }
            }
          }
        };
      }
      function getVisitFn2(visitor, kind, isLeaving) {
        var kindVisitor = visitor[kind];
        if (kindVisitor) {
          if (!isLeaving && typeof kindVisitor === "function") {
            return kindVisitor;
          }
          var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
          if (typeof kindSpecificVisitor === "function") {
            return kindSpecificVisitor;
          }
        } else {
          var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
          if (specificVisitor) {
            if (typeof specificVisitor === "function") {
              return specificVisitor;
            }
            var specificKindVisitor = specificVisitor[kind];
            if (typeof specificKindVisitor === "function") {
              return specificKindVisitor;
            }
          }
        }
      }
    }
  });

  // node_modules/graphql/language/blockString.js
  var require_blockString = __commonJS({
    "node_modules/graphql/language/blockString.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.dedentBlockStringValue = dedentBlockStringValue2;
      exports.getBlockStringIndentation = getBlockStringIndentation2;
      exports.printBlockString = printBlockString2;
      function dedentBlockStringValue2(rawString) {
        var lines = rawString.split(/\r\n|[\n\r]/g);
        var commonIndent = getBlockStringIndentation2(rawString);
        if (commonIndent !== 0) {
          for (var i = 1; i < lines.length; i++) {
            lines[i] = lines[i].slice(commonIndent);
          }
        }
        var startLine = 0;
        while (startLine < lines.length && isBlank2(lines[startLine])) {
          ++startLine;
        }
        var endLine = lines.length;
        while (endLine > startLine && isBlank2(lines[endLine - 1])) {
          --endLine;
        }
        return lines.slice(startLine, endLine).join("\n");
      }
      function isBlank2(str) {
        for (var i = 0; i < str.length; ++i) {
          if (str[i] !== " " && str[i] !== "	") {
            return false;
          }
        }
        return true;
      }
      function getBlockStringIndentation2(value) {
        var _commonIndent;
        var isFirstLine = true;
        var isEmptyLine = true;
        var indent2 = 0;
        var commonIndent = null;
        for (var i = 0; i < value.length; ++i) {
          switch (value.charCodeAt(i)) {
            case 13:
              if (value.charCodeAt(i + 1) === 10) {
                ++i;
              }
            case 10:
              isFirstLine = false;
              isEmptyLine = true;
              indent2 = 0;
              break;
            case 9:
            case 32:
              ++indent2;
              break;
            default:
              if (isEmptyLine && !isFirstLine && (commonIndent === null || indent2 < commonIndent)) {
                commonIndent = indent2;
              }
              isEmptyLine = false;
          }
        }
        return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
      }
      function printBlockString2(value) {
        var indentation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        var preferMultipleLines = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        var isSingleLine = value.indexOf("\n") === -1;
        var hasLeadingSpace = value[0] === " " || value[0] === "	";
        var hasTrailingQuote = value[value.length - 1] === '"';
        var hasTrailingSlash = value[value.length - 1] === "\\";
        var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
        var result2 = "";
        if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
          result2 += "\n" + indentation;
        }
        result2 += indentation ? value.replace(/\n/g, "\n" + indentation) : value;
        if (printAsMultipleLines) {
          result2 += "\n";
        }
        return '"""' + result2.replace(/"""/g, '\\"""') + '"""';
      }
    }
  });

  // node_modules/graphql/language/printer.js
  var require_printer = __commonJS({
    "node_modules/graphql/language/printer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.print = print2;
      var _visitor = require_visitor();
      var _blockString = require_blockString();
      function print2(ast) {
        return (0, _visitor.visit)(ast, {
          leave: printDocASTReducer2
        });
      }
      var MAX_LINE_LENGTH2 = 80;
      var printDocASTReducer2 = {
        Name: function Name2(node) {
          return node.value;
        },
        Variable: function Variable2(node) {
          return "$" + node.name;
        },
        Document: function Document2(node) {
          return join2(node.definitions, "\n\n") + "\n";
        },
        OperationDefinition: function OperationDefinition2(node) {
          var op = node.operation;
          var name = node.name;
          var varDefs = wrap3("(", join2(node.variableDefinitions, ", "), ")");
          var directives = join2(node.directives, " ");
          var selectionSet = node.selectionSet;
          return !name && !directives && !varDefs && op === "query" ? selectionSet : join2([op, join2([name, varDefs]), directives, selectionSet], " ");
        },
        VariableDefinition: function VariableDefinition2(_ref) {
          var variable = _ref.variable, type = _ref.type, defaultValue = _ref.defaultValue, directives = _ref.directives;
          return variable + ": " + type + wrap3(" = ", defaultValue) + wrap3(" ", join2(directives, " "));
        },
        SelectionSet: function SelectionSet2(_ref2) {
          var selections = _ref2.selections;
          return block2(selections);
        },
        Field: function Field2(_ref3) {
          var alias = _ref3.alias, name = _ref3.name, args = _ref3.arguments, directives = _ref3.directives, selectionSet = _ref3.selectionSet;
          var prefix = wrap3("", alias, ": ") + name;
          var argsLine = prefix + wrap3("(", join2(args, ", "), ")");
          if (argsLine.length > MAX_LINE_LENGTH2) {
            argsLine = prefix + wrap3("(\n", indent2(join2(args, "\n")), "\n)");
          }
          return join2([argsLine, join2(directives, " "), selectionSet], " ");
        },
        Argument: function Argument2(_ref4) {
          var name = _ref4.name, value = _ref4.value;
          return name + ": " + value;
        },
        FragmentSpread: function FragmentSpread2(_ref5) {
          var name = _ref5.name, directives = _ref5.directives;
          return "..." + name + wrap3(" ", join2(directives, " "));
        },
        InlineFragment: function InlineFragment2(_ref6) {
          var typeCondition = _ref6.typeCondition, directives = _ref6.directives, selectionSet = _ref6.selectionSet;
          return join2(["...", wrap3("on ", typeCondition), join2(directives, " "), selectionSet], " ");
        },
        FragmentDefinition: function FragmentDefinition2(_ref7) {
          var name = _ref7.name, typeCondition = _ref7.typeCondition, variableDefinitions = _ref7.variableDefinitions, directives = _ref7.directives, selectionSet = _ref7.selectionSet;
          return "fragment ".concat(name).concat(wrap3("(", join2(variableDefinitions, ", "), ")"), " ") + "on ".concat(typeCondition, " ").concat(wrap3("", join2(directives, " "), " ")) + selectionSet;
        },
        IntValue: function IntValue2(_ref8) {
          var value = _ref8.value;
          return value;
        },
        FloatValue: function FloatValue2(_ref9) {
          var value = _ref9.value;
          return value;
        },
        StringValue: function StringValue2(_ref10, key) {
          var value = _ref10.value, isBlockString = _ref10.block;
          return isBlockString ? (0, _blockString.printBlockString)(value, key === "description" ? "" : "  ") : JSON.stringify(value);
        },
        BooleanValue: function BooleanValue2(_ref11) {
          var value = _ref11.value;
          return value ? "true" : "false";
        },
        NullValue: function NullValue2() {
          return "null";
        },
        EnumValue: function EnumValue2(_ref12) {
          var value = _ref12.value;
          return value;
        },
        ListValue: function ListValue2(_ref13) {
          var values = _ref13.values;
          return "[" + join2(values, ", ") + "]";
        },
        ObjectValue: function ObjectValue2(_ref14) {
          var fields = _ref14.fields;
          return "{" + join2(fields, ", ") + "}";
        },
        ObjectField: function ObjectField2(_ref15) {
          var name = _ref15.name, value = _ref15.value;
          return name + ": " + value;
        },
        Directive: function Directive2(_ref16) {
          var name = _ref16.name, args = _ref16.arguments;
          return "@" + name + wrap3("(", join2(args, ", "), ")");
        },
        NamedType: function NamedType2(_ref17) {
          var name = _ref17.name;
          return name;
        },
        ListType: function ListType2(_ref18) {
          var type = _ref18.type;
          return "[" + type + "]";
        },
        NonNullType: function NonNullType2(_ref19) {
          var type = _ref19.type;
          return type + "!";
        },
        SchemaDefinition: addDescription2(function(_ref20) {
          var directives = _ref20.directives, operationTypes = _ref20.operationTypes;
          return join2(["schema", join2(directives, " "), block2(operationTypes)], " ");
        }),
        OperationTypeDefinition: function OperationTypeDefinition2(_ref21) {
          var operation = _ref21.operation, type = _ref21.type;
          return operation + ": " + type;
        },
        ScalarTypeDefinition: addDescription2(function(_ref22) {
          var name = _ref22.name, directives = _ref22.directives;
          return join2(["scalar", name, join2(directives, " ")], " ");
        }),
        ObjectTypeDefinition: addDescription2(function(_ref23) {
          var name = _ref23.name, interfaces = _ref23.interfaces, directives = _ref23.directives, fields = _ref23.fields;
          return join2(["type", name, wrap3("implements ", join2(interfaces, " & ")), join2(directives, " "), block2(fields)], " ");
        }),
        FieldDefinition: addDescription2(function(_ref24) {
          var name = _ref24.name, args = _ref24.arguments, type = _ref24.type, directives = _ref24.directives;
          return name + (hasMultilineItems2(args) ? wrap3("(\n", indent2(join2(args, "\n")), "\n)") : wrap3("(", join2(args, ", "), ")")) + ": " + type + wrap3(" ", join2(directives, " "));
        }),
        InputValueDefinition: addDescription2(function(_ref25) {
          var name = _ref25.name, type = _ref25.type, defaultValue = _ref25.defaultValue, directives = _ref25.directives;
          return join2([name + ": " + type, wrap3("= ", defaultValue), join2(directives, " ")], " ");
        }),
        InterfaceTypeDefinition: addDescription2(function(_ref26) {
          var name = _ref26.name, interfaces = _ref26.interfaces, directives = _ref26.directives, fields = _ref26.fields;
          return join2(["interface", name, wrap3("implements ", join2(interfaces, " & ")), join2(directives, " "), block2(fields)], " ");
        }),
        UnionTypeDefinition: addDescription2(function(_ref27) {
          var name = _ref27.name, directives = _ref27.directives, types = _ref27.types;
          return join2(["union", name, join2(directives, " "), types && types.length !== 0 ? "= " + join2(types, " | ") : ""], " ");
        }),
        EnumTypeDefinition: addDescription2(function(_ref28) {
          var name = _ref28.name, directives = _ref28.directives, values = _ref28.values;
          return join2(["enum", name, join2(directives, " "), block2(values)], " ");
        }),
        EnumValueDefinition: addDescription2(function(_ref29) {
          var name = _ref29.name, directives = _ref29.directives;
          return join2([name, join2(directives, " ")], " ");
        }),
        InputObjectTypeDefinition: addDescription2(function(_ref30) {
          var name = _ref30.name, directives = _ref30.directives, fields = _ref30.fields;
          return join2(["input", name, join2(directives, " "), block2(fields)], " ");
        }),
        DirectiveDefinition: addDescription2(function(_ref31) {
          var name = _ref31.name, args = _ref31.arguments, repeatable = _ref31.repeatable, locations = _ref31.locations;
          return "directive @" + name + (hasMultilineItems2(args) ? wrap3("(\n", indent2(join2(args, "\n")), "\n)") : wrap3("(", join2(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join2(locations, " | ");
        }),
        SchemaExtension: function SchemaExtension2(_ref32) {
          var directives = _ref32.directives, operationTypes = _ref32.operationTypes;
          return join2(["extend schema", join2(directives, " "), block2(operationTypes)], " ");
        },
        ScalarTypeExtension: function ScalarTypeExtension2(_ref33) {
          var name = _ref33.name, directives = _ref33.directives;
          return join2(["extend scalar", name, join2(directives, " ")], " ");
        },
        ObjectTypeExtension: function ObjectTypeExtension2(_ref34) {
          var name = _ref34.name, interfaces = _ref34.interfaces, directives = _ref34.directives, fields = _ref34.fields;
          return join2(["extend type", name, wrap3("implements ", join2(interfaces, " & ")), join2(directives, " "), block2(fields)], " ");
        },
        InterfaceTypeExtension: function InterfaceTypeExtension2(_ref35) {
          var name = _ref35.name, interfaces = _ref35.interfaces, directives = _ref35.directives, fields = _ref35.fields;
          return join2(["extend interface", name, wrap3("implements ", join2(interfaces, " & ")), join2(directives, " "), block2(fields)], " ");
        },
        UnionTypeExtension: function UnionTypeExtension2(_ref36) {
          var name = _ref36.name, directives = _ref36.directives, types = _ref36.types;
          return join2(["extend union", name, join2(directives, " "), types && types.length !== 0 ? "= " + join2(types, " | ") : ""], " ");
        },
        EnumTypeExtension: function EnumTypeExtension2(_ref37) {
          var name = _ref37.name, directives = _ref37.directives, values = _ref37.values;
          return join2(["extend enum", name, join2(directives, " "), block2(values)], " ");
        },
        InputObjectTypeExtension: function InputObjectTypeExtension2(_ref38) {
          var name = _ref38.name, directives = _ref38.directives, fields = _ref38.fields;
          return join2(["extend input", name, join2(directives, " "), block2(fields)], " ");
        }
      };
      function addDescription2(cb) {
        return function(node) {
          return join2([node.description, cb(node)], "\n");
        };
      }
      function join2(maybeArray) {
        var _maybeArray$filter$jo;
        var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function(x) {
          return x;
        }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
      }
      function block2(array) {
        return wrap3("{\n", indent2(join2(array, "\n")), "\n}");
      }
      function wrap3(start, maybeString) {
        var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
        return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
      }
      function indent2(str) {
        return wrap3("  ", str.replace(/\n/g, "\n  "));
      }
      function isMultiline2(str) {
        return str.indexOf("\n") !== -1;
      }
      function hasMultilineItems2(maybeArray) {
        return maybeArray != null && maybeArray.some(isMultiline2);
      }
    }
  });

  // node_modules/graphql/language/kinds.js
  var require_kinds = __commonJS({
    "node_modules/graphql/language/kinds.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Kind = void 0;
      var Kind2 = Object.freeze({
        NAME: "Name",
        DOCUMENT: "Document",
        OPERATION_DEFINITION: "OperationDefinition",
        VARIABLE_DEFINITION: "VariableDefinition",
        SELECTION_SET: "SelectionSet",
        FIELD: "Field",
        ARGUMENT: "Argument",
        FRAGMENT_SPREAD: "FragmentSpread",
        INLINE_FRAGMENT: "InlineFragment",
        FRAGMENT_DEFINITION: "FragmentDefinition",
        VARIABLE: "Variable",
        INT: "IntValue",
        FLOAT: "FloatValue",
        STRING: "StringValue",
        BOOLEAN: "BooleanValue",
        NULL: "NullValue",
        ENUM: "EnumValue",
        LIST: "ListValue",
        OBJECT: "ObjectValue",
        OBJECT_FIELD: "ObjectField",
        DIRECTIVE: "Directive",
        NAMED_TYPE: "NamedType",
        LIST_TYPE: "ListType",
        NON_NULL_TYPE: "NonNullType",
        SCHEMA_DEFINITION: "SchemaDefinition",
        OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
        SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
        OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
        FIELD_DEFINITION: "FieldDefinition",
        INPUT_VALUE_DEFINITION: "InputValueDefinition",
        INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
        UNION_TYPE_DEFINITION: "UnionTypeDefinition",
        ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
        ENUM_VALUE_DEFINITION: "EnumValueDefinition",
        INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
        DIRECTIVE_DEFINITION: "DirectiveDefinition",
        SCHEMA_EXTENSION: "SchemaExtension",
        SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
        OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
        INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
        UNION_TYPE_EXTENSION: "UnionTypeExtension",
        ENUM_TYPE_EXTENSION: "EnumTypeExtension",
        INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
      });
      exports.Kind = Kind2;
    }
  });

  // node_modules/graphql/utilities/getOperationAST.js
  var require_getOperationAST = __commonJS({
    "node_modules/graphql/utilities/getOperationAST.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getOperationAST = getOperationAST;
      var _kinds = require_kinds();
      function getOperationAST(documentAST, operationName) {
        var operation = null;
        for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
          var definition = _documentAST$definiti2[_i2];
          if (definition.kind === _kinds.Kind.OPERATION_DEFINITION) {
            var _definition$name;
            if (operationName == null) {
              if (operation) {
                return null;
              }
              operation = definition;
            } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
              return definition;
            }
          }
        }
        return operation;
      }
    }
  });

  // node_modules/symbol-observable/lib/ponyfill.js
  var require_ponyfill = __commonJS({
    "node_modules/symbol-observable/lib/ponyfill.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = symbolObservablePonyfill2;
      function symbolObservablePonyfill2(root2) {
        var result2;
        var _Symbol = root2.Symbol;
        if (typeof _Symbol === "function") {
          if (_Symbol.observable) {
            result2 = _Symbol.observable;
          } else {
            result2 = _Symbol("observable");
            _Symbol.observable = result2;
          }
        } else {
          result2 = "@@observable";
        }
        return result2;
      }
    }
  });

  // node_modules/symbol-observable/lib/index.js
  var require_lib = __commonJS({
    "node_modules/symbol-observable/lib/index.js"(exports, module2) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _ponyfill = require_ponyfill();
      var _ponyfill2 = _interopRequireDefault(_ponyfill);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var root2;
      if (typeof self !== "undefined") {
        root2 = self;
      } else if (typeof window !== "undefined") {
        root2 = window;
      } else if (typeof global !== "undefined") {
        root2 = global;
      } else if (typeof module2 !== "undefined") {
        root2 = module2;
      } else {
        root2 = Function("return this")();
      }
      var result2 = (0, _ponyfill2["default"])(root2);
      exports["default"] = result2;
    }
  });

  // node_modules/subscriptions-transport-ws/dist/protocol.js
  var require_protocol = __commonJS({
    "node_modules/subscriptions-transport-ws/dist/protocol.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.GRAPHQL_SUBSCRIPTIONS = exports.GRAPHQL_WS = void 0;
      var GRAPHQL_WS = "graphql-ws";
      exports.GRAPHQL_WS = GRAPHQL_WS;
      var GRAPHQL_SUBSCRIPTIONS = "graphql-subscriptions";
      exports.GRAPHQL_SUBSCRIPTIONS = GRAPHQL_SUBSCRIPTIONS;
    }
  });

  // node_modules/subscriptions-transport-ws/dist/defaults.js
  var require_defaults = __commonJS({
    "node_modules/subscriptions-transport-ws/dist/defaults.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WS_TIMEOUT = exports.MIN_WS_TIMEOUT = void 0;
      var MIN_WS_TIMEOUT = 1e3;
      exports.MIN_WS_TIMEOUT = MIN_WS_TIMEOUT;
      var WS_TIMEOUT = 3e4;
      exports.WS_TIMEOUT = WS_TIMEOUT;
    }
  });

  // node_modules/subscriptions-transport-ws/dist/message-types.js
  var require_message_types = __commonJS({
    "node_modules/subscriptions-transport-ws/dist/message-types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var MessageTypes = function() {
        function MessageTypes2() {
          throw new Error("Static Class");
        }
        MessageTypes2.GQL_CONNECTION_INIT = "connection_init";
        MessageTypes2.GQL_CONNECTION_ACK = "connection_ack";
        MessageTypes2.GQL_CONNECTION_ERROR = "connection_error";
        MessageTypes2.GQL_CONNECTION_KEEP_ALIVE = "ka";
        MessageTypes2.GQL_CONNECTION_TERMINATE = "connection_terminate";
        MessageTypes2.GQL_START = "start";
        MessageTypes2.GQL_DATA = "data";
        MessageTypes2.GQL_ERROR = "error";
        MessageTypes2.GQL_COMPLETE = "complete";
        MessageTypes2.GQL_STOP = "stop";
        MessageTypes2.SUBSCRIPTION_START = "subscription_start";
        MessageTypes2.SUBSCRIPTION_DATA = "subscription_data";
        MessageTypes2.SUBSCRIPTION_SUCCESS = "subscription_success";
        MessageTypes2.SUBSCRIPTION_FAIL = "subscription_fail";
        MessageTypes2.SUBSCRIPTION_END = "subscription_end";
        MessageTypes2.INIT = "init";
        MessageTypes2.INIT_SUCCESS = "init_success";
        MessageTypes2.INIT_FAIL = "init_fail";
        MessageTypes2.KEEP_ALIVE = "keepalive";
        return MessageTypes2;
      }();
      exports.default = MessageTypes;
    }
  });

  // node_modules/subscriptions-transport-ws/dist/client.js
  var require_client = __commonJS({
    "node_modules/subscriptions-transport-ws/dist/client.js"(exports) {
      "use strict";
      var __assign2 = exports && exports.__assign || function() {
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign2.apply(this, arguments);
      };
      var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result2) {
            result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator2 = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __spreadArray2 = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SubscriptionClient = void 0;
      var _global = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : {};
      var NativeWebSocket = _global.WebSocket || _global.MozWebSocket;
      var Backoff = require_backo2();
      var eventemitter3_1 = require_eventemitter3();
      var is_string_1 = require_is_string();
      var is_object_1 = require_is_object();
      var printer_1 = require_printer();
      var getOperationAST_1 = require_getOperationAST();
      var symbol_observable_1 = require_lib();
      var protocol_1 = require_protocol();
      var defaults_1 = require_defaults();
      var message_types_1 = require_message_types();
      var SubscriptionClient3 = function() {
        function SubscriptionClient4(url, options, webSocketImpl, webSocketProtocols) {
          var _a5 = options || {}, _b = _a5.connectionCallback, connectionCallback = _b === void 0 ? void 0 : _b, _c = _a5.connectionParams, connectionParams = _c === void 0 ? {} : _c, _d = _a5.minTimeout, minTimeout = _d === void 0 ? defaults_1.MIN_WS_TIMEOUT : _d, _e = _a5.timeout, timeout = _e === void 0 ? defaults_1.WS_TIMEOUT : _e, _f = _a5.reconnect, reconnect = _f === void 0 ? false : _f, _g = _a5.reconnectionAttempts, reconnectionAttempts = _g === void 0 ? Infinity : _g, _h = _a5.lazy, lazy = _h === void 0 ? false : _h, _j = _a5.inactivityTimeout, inactivityTimeout = _j === void 0 ? 0 : _j, _k = _a5.wsOptionArguments, wsOptionArguments = _k === void 0 ? [] : _k;
          this.wsImpl = webSocketImpl || NativeWebSocket;
          if (!this.wsImpl) {
            throw new Error("Unable to find native implementation, or alternative implementation for WebSocket!");
          }
          this.wsProtocols = webSocketProtocols || protocol_1.GRAPHQL_WS;
          this.connectionCallback = connectionCallback;
          this.url = url;
          this.operations = {};
          this.nextOperationId = 0;
          this.minWsTimeout = minTimeout;
          this.wsTimeout = timeout;
          this.unsentMessagesQueue = [];
          this.reconnect = reconnect;
          this.reconnecting = false;
          this.reconnectionAttempts = reconnectionAttempts;
          this.lazy = !!lazy;
          this.inactivityTimeout = inactivityTimeout;
          this.closedByUser = false;
          this.backoff = new Backoff({ jitter: 0.5 });
          this.eventEmitter = new eventemitter3_1.EventEmitter();
          this.middlewares = [];
          this.client = null;
          this.maxConnectTimeGenerator = this.createMaxConnectTimeGenerator();
          this.connectionParams = this.getConnectionParams(connectionParams);
          this.wsOptionArguments = wsOptionArguments;
          if (!this.lazy) {
            this.connect();
          }
        }
        Object.defineProperty(SubscriptionClient4.prototype, "status", {
          get: function() {
            if (this.client === null) {
              return this.wsImpl.CLOSED;
            }
            return this.client.readyState;
          },
          enumerable: false,
          configurable: true
        });
        SubscriptionClient4.prototype.close = function(isForced, closedByUser) {
          if (isForced === void 0) {
            isForced = true;
          }
          if (closedByUser === void 0) {
            closedByUser = true;
          }
          this.clearInactivityTimeout();
          if (this.client !== null) {
            this.closedByUser = closedByUser;
            if (isForced) {
              this.clearCheckConnectionInterval();
              this.clearMaxConnectTimeout();
              this.clearTryReconnectTimeout();
              this.unsubscribeAll();
              this.sendMessage(void 0, message_types_1.default.GQL_CONNECTION_TERMINATE, null);
            }
            this.client.close();
            this.client.onopen = null;
            this.client.onclose = null;
            this.client.onerror = null;
            this.client.onmessage = null;
            this.client = null;
            this.eventEmitter.emit("disconnected");
            if (!isForced) {
              this.tryReconnect();
            }
          }
        };
        SubscriptionClient4.prototype.request = function(request) {
          var _a5;
          var getObserver = this.getObserver.bind(this);
          var executeOperation = this.executeOperation.bind(this);
          var unsubscribe = this.unsubscribe.bind(this);
          var opId;
          this.clearInactivityTimeout();
          return _a5 = {}, _a5[symbol_observable_1.default] = function() {
            return this;
          }, _a5.subscribe = function(observerOrNext, onError, onComplete) {
            var observer = getObserver(observerOrNext, onError, onComplete);
            opId = executeOperation(request, function(error, result2) {
              if (error === null && result2 === null) {
                if (observer.complete) {
                  observer.complete();
                }
              } else if (error) {
                if (observer.error) {
                  observer.error(error[0]);
                }
              } else {
                if (observer.next) {
                  observer.next(result2);
                }
              }
            });
            return {
              unsubscribe: function() {
                if (opId) {
                  unsubscribe(opId);
                  opId = null;
                }
              }
            };
          }, _a5;
        };
        SubscriptionClient4.prototype.on = function(eventName, callback, context) {
          var handler = this.eventEmitter.on(eventName, callback, context);
          return function() {
            handler.off(eventName, callback, context);
          };
        };
        SubscriptionClient4.prototype.onConnected = function(callback, context) {
          return this.on("connected", callback, context);
        };
        SubscriptionClient4.prototype.onConnecting = function(callback, context) {
          return this.on("connecting", callback, context);
        };
        SubscriptionClient4.prototype.onDisconnected = function(callback, context) {
          return this.on("disconnected", callback, context);
        };
        SubscriptionClient4.prototype.onReconnected = function(callback, context) {
          return this.on("reconnected", callback, context);
        };
        SubscriptionClient4.prototype.onReconnecting = function(callback, context) {
          return this.on("reconnecting", callback, context);
        };
        SubscriptionClient4.prototype.onError = function(callback, context) {
          return this.on("error", callback, context);
        };
        SubscriptionClient4.prototype.unsubscribeAll = function() {
          var _this = this;
          Object.keys(this.operations).forEach(function(subId) {
            _this.unsubscribe(subId);
          });
        };
        SubscriptionClient4.prototype.applyMiddlewares = function(options) {
          var _this = this;
          return new Promise(function(resolve, reject) {
            var queue = function(funcs, scope) {
              var next = function(error) {
                if (error) {
                  reject(error);
                } else {
                  if (funcs.length > 0) {
                    var f = funcs.shift();
                    if (f) {
                      f.applyMiddleware.apply(scope, [options, next]);
                    }
                  } else {
                    resolve(options);
                  }
                }
              };
              next();
            };
            queue(__spreadArray2([], _this.middlewares, true), _this);
          });
        };
        SubscriptionClient4.prototype.use = function(middlewares) {
          var _this = this;
          middlewares.map(function(middleware) {
            if (typeof middleware.applyMiddleware === "function") {
              _this.middlewares.push(middleware);
            } else {
              throw new Error("Middleware must implement the applyMiddleware function.");
            }
          });
          return this;
        };
        SubscriptionClient4.prototype.getConnectionParams = function(connectionParams) {
          return function() {
            return new Promise(function(resolve, reject) {
              if (typeof connectionParams === "function") {
                try {
                  return resolve(connectionParams.call(null));
                } catch (error) {
                  return reject(error);
                }
              }
              resolve(connectionParams);
            });
          };
        };
        SubscriptionClient4.prototype.executeOperation = function(options, handler) {
          var _this = this;
          if (this.client === null) {
            this.connect();
          }
          var opId = this.generateOperationId();
          this.operations[opId] = { options, handler };
          this.applyMiddlewares(options).then(function(processedOptions) {
            _this.checkOperationOptions(processedOptions, handler);
            if (_this.operations[opId]) {
              _this.operations[opId] = { options: processedOptions, handler };
              _this.sendMessage(opId, message_types_1.default.GQL_START, processedOptions);
            }
          }).catch(function(error) {
            _this.unsubscribe(opId);
            handler(_this.formatErrors(error));
          });
          return opId;
        };
        SubscriptionClient4.prototype.getObserver = function(observerOrNext, error, complete) {
          if (typeof observerOrNext === "function") {
            return {
              next: function(v) {
                return observerOrNext(v);
              },
              error: function(e) {
                return error && error(e);
              },
              complete: function() {
                return complete && complete();
              }
            };
          }
          return observerOrNext;
        };
        SubscriptionClient4.prototype.createMaxConnectTimeGenerator = function() {
          var minValue = this.minWsTimeout;
          var maxValue = this.wsTimeout;
          return new Backoff({
            min: minValue,
            max: maxValue,
            factor: 1.2
          });
        };
        SubscriptionClient4.prototype.clearCheckConnectionInterval = function() {
          if (this.checkConnectionIntervalId) {
            clearInterval(this.checkConnectionIntervalId);
            this.checkConnectionIntervalId = null;
          }
        };
        SubscriptionClient4.prototype.clearMaxConnectTimeout = function() {
          if (this.maxConnectTimeoutId) {
            clearTimeout(this.maxConnectTimeoutId);
            this.maxConnectTimeoutId = null;
          }
        };
        SubscriptionClient4.prototype.clearTryReconnectTimeout = function() {
          if (this.tryReconnectTimeoutId) {
            clearTimeout(this.tryReconnectTimeoutId);
            this.tryReconnectTimeoutId = null;
          }
        };
        SubscriptionClient4.prototype.clearInactivityTimeout = function() {
          if (this.inactivityTimeoutId) {
            clearTimeout(this.inactivityTimeoutId);
            this.inactivityTimeoutId = null;
          }
        };
        SubscriptionClient4.prototype.setInactivityTimeout = function() {
          var _this = this;
          if (this.inactivityTimeout > 0 && Object.keys(this.operations).length === 0) {
            this.inactivityTimeoutId = setTimeout(function() {
              if (Object.keys(_this.operations).length === 0) {
                _this.close();
              }
            }, this.inactivityTimeout);
          }
        };
        SubscriptionClient4.prototype.checkOperationOptions = function(options, handler) {
          var query = options.query, variables = options.variables, operationName = options.operationName;
          if (!query) {
            throw new Error("Must provide a query.");
          }
          if (!handler) {
            throw new Error("Must provide an handler.");
          }
          if (!(0, is_string_1.default)(query) && !(0, getOperationAST_1.getOperationAST)(query, operationName) || operationName && !(0, is_string_1.default)(operationName) || variables && !(0, is_object_1.default)(variables)) {
            throw new Error("Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object.");
          }
        };
        SubscriptionClient4.prototype.buildMessage = function(id, type, payload) {
          var payloadToReturn = payload && payload.query ? __assign2(__assign2({}, payload), { query: typeof payload.query === "string" ? payload.query : (0, printer_1.print)(payload.query) }) : payload;
          return {
            id,
            type,
            payload: payloadToReturn
          };
        };
        SubscriptionClient4.prototype.formatErrors = function(errors) {
          if (Array.isArray(errors)) {
            return errors;
          }
          if (errors && errors.errors) {
            return this.formatErrors(errors.errors);
          }
          if (errors && errors.message) {
            return [errors];
          }
          return [{
            name: "FormatedError",
            message: "Unknown error",
            originalError: errors
          }];
        };
        SubscriptionClient4.prototype.sendMessage = function(id, type, payload) {
          this.sendMessageRaw(this.buildMessage(id, type, payload));
        };
        SubscriptionClient4.prototype.sendMessageRaw = function(message) {
          switch (this.status) {
            case this.wsImpl.OPEN:
              var serializedMessage = JSON.stringify(message);
              try {
                JSON.parse(serializedMessage);
              } catch (e) {
                this.eventEmitter.emit("error", new Error("Message must be JSON-serializable. Got: " + message));
              }
              this.client.send(serializedMessage);
              break;
            case this.wsImpl.CONNECTING:
              this.unsentMessagesQueue.push(message);
              break;
            default:
              if (!this.reconnecting) {
                this.eventEmitter.emit("error", new Error("A message was not sent because socket is not connected, is closing or is already closed. Message was: " + JSON.stringify(message)));
              }
          }
        };
        SubscriptionClient4.prototype.generateOperationId = function() {
          return String(++this.nextOperationId);
        };
        SubscriptionClient4.prototype.tryReconnect = function() {
          var _this = this;
          if (!this.reconnect || this.backoff.attempts >= this.reconnectionAttempts) {
            return;
          }
          if (!this.reconnecting) {
            Object.keys(this.operations).forEach(function(key) {
              _this.unsentMessagesQueue.push(_this.buildMessage(key, message_types_1.default.GQL_START, _this.operations[key].options));
            });
            this.reconnecting = true;
          }
          this.clearTryReconnectTimeout();
          var delay = this.backoff.duration();
          this.tryReconnectTimeoutId = setTimeout(function() {
            _this.connect();
          }, delay);
        };
        SubscriptionClient4.prototype.flushUnsentMessagesQueue = function() {
          var _this = this;
          this.unsentMessagesQueue.forEach(function(message) {
            _this.sendMessageRaw(message);
          });
          this.unsentMessagesQueue = [];
        };
        SubscriptionClient4.prototype.checkConnection = function() {
          if (this.wasKeepAliveReceived) {
            this.wasKeepAliveReceived = false;
            return;
          }
          if (!this.reconnecting) {
            this.close(false, true);
          }
        };
        SubscriptionClient4.prototype.checkMaxConnectTimeout = function() {
          var _this = this;
          this.clearMaxConnectTimeout();
          this.maxConnectTimeoutId = setTimeout(function() {
            if (_this.status !== _this.wsImpl.OPEN) {
              _this.reconnecting = true;
              _this.close(false, true);
            }
          }, this.maxConnectTimeGenerator.duration());
        };
        SubscriptionClient4.prototype.connect = function() {
          var _a5;
          var _this = this;
          this.client = new ((_a5 = this.wsImpl).bind.apply(_a5, __spreadArray2([void 0, this.url, this.wsProtocols], this.wsOptionArguments, false)))();
          this.checkMaxConnectTimeout();
          this.client.onopen = function() {
            return __awaiter2(_this, void 0, void 0, function() {
              var connectionParams, error_1;
              return __generator2(this, function(_a6) {
                switch (_a6.label) {
                  case 0:
                    if (!(this.status === this.wsImpl.OPEN))
                      return [3, 4];
                    this.clearMaxConnectTimeout();
                    this.closedByUser = false;
                    this.eventEmitter.emit(this.reconnecting ? "reconnecting" : "connecting");
                    _a6.label = 1;
                  case 1:
                    _a6.trys.push([1, 3, , 4]);
                    return [4, this.connectionParams()];
                  case 2:
                    connectionParams = _a6.sent();
                    this.sendMessage(void 0, message_types_1.default.GQL_CONNECTION_INIT, connectionParams);
                    this.flushUnsentMessagesQueue();
                    return [3, 4];
                  case 3:
                    error_1 = _a6.sent();
                    this.sendMessage(void 0, message_types_1.default.GQL_CONNECTION_ERROR, error_1);
                    this.flushUnsentMessagesQueue();
                    return [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          };
          this.client.onclose = function() {
            if (!_this.closedByUser) {
              _this.close(false, false);
            }
          };
          this.client.onerror = function(err) {
            _this.eventEmitter.emit("error", err);
          };
          this.client.onmessage = function(_a6) {
            var data = _a6.data;
            _this.processReceivedData(data);
          };
        };
        SubscriptionClient4.prototype.processReceivedData = function(receivedData) {
          var parsedMessage;
          var opId;
          try {
            parsedMessage = JSON.parse(receivedData);
            opId = parsedMessage.id;
          } catch (e) {
            throw new Error("Message must be JSON-parseable. Got: " + receivedData);
          }
          if ([
            message_types_1.default.GQL_DATA,
            message_types_1.default.GQL_COMPLETE,
            message_types_1.default.GQL_ERROR
          ].indexOf(parsedMessage.type) !== -1 && !this.operations[opId]) {
            this.unsubscribe(opId);
            return;
          }
          switch (parsedMessage.type) {
            case message_types_1.default.GQL_CONNECTION_ERROR:
              if (this.connectionCallback) {
                this.connectionCallback(parsedMessage.payload);
              }
              break;
            case message_types_1.default.GQL_CONNECTION_ACK:
              this.eventEmitter.emit(this.reconnecting ? "reconnected" : "connected", parsedMessage.payload);
              this.reconnecting = false;
              this.backoff.reset();
              this.maxConnectTimeGenerator.reset();
              if (this.connectionCallback) {
                this.connectionCallback();
              }
              break;
            case message_types_1.default.GQL_COMPLETE:
              var handler = this.operations[opId].handler;
              delete this.operations[opId];
              handler.call(this, null, null);
              break;
            case message_types_1.default.GQL_ERROR:
              this.operations[opId].handler(this.formatErrors(parsedMessage.payload), null);
              delete this.operations[opId];
              break;
            case message_types_1.default.GQL_DATA:
              var parsedPayload = !parsedMessage.payload.errors ? parsedMessage.payload : __assign2(__assign2({}, parsedMessage.payload), { errors: this.formatErrors(parsedMessage.payload.errors) });
              this.operations[opId].handler(null, parsedPayload);
              break;
            case message_types_1.default.GQL_CONNECTION_KEEP_ALIVE:
              var firstKA = typeof this.wasKeepAliveReceived === "undefined";
              this.wasKeepAliveReceived = true;
              if (firstKA) {
                this.checkConnection();
              }
              if (this.checkConnectionIntervalId) {
                clearInterval(this.checkConnectionIntervalId);
                this.checkConnection();
              }
              this.checkConnectionIntervalId = setInterval(this.checkConnection.bind(this), this.wsTimeout);
              break;
            default:
              throw new Error("Invalid message type!");
          }
        };
        SubscriptionClient4.prototype.unsubscribe = function(opId) {
          if (this.operations[opId]) {
            delete this.operations[opId];
            this.setInactivityTimeout();
            this.sendMessage(opId, message_types_1.default.GQL_STOP, void 0);
          }
        };
        return SubscriptionClient4;
      }();
      exports.SubscriptionClient = SubscriptionClient3;
    }
  });

  // node_modules/tslib/modules/index.js
  var import_tslib = __toModule(require_tslib());
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet
  } = import_tslib.default;

  // node_modules/ts-invariant/lib/invariant.esm.js
  var genericMessage = "Invariant Violation";
  var _a = Object.setPrototypeOf;
  var setPrototypeOf = _a === void 0 ? function(obj, proto) {
    obj.__proto__ = proto;
    return obj;
  } : _a;
  var InvariantError = function(_super) {
    __extends(InvariantError2, _super);
    function InvariantError2(message) {
      if (message === void 0) {
        message = genericMessage;
      }
      var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
      _this.framesToPop = 1;
      _this.name = genericMessage;
      setPrototypeOf(_this, InvariantError2.prototype);
      return _this;
    }
    return InvariantError2;
  }(Error);
  function invariant(condition, message) {
    if (!condition) {
      throw new InvariantError(message);
    }
  }
  var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
  var verbosityLevel = verbosityLevels.indexOf("log");
  function wrapConsoleMethod(name) {
    return function() {
      if (verbosityLevels.indexOf(name) >= verbosityLevel) {
        var method = console[name] || console.log;
        return method.apply(console, arguments);
      }
    };
  }
  (function(invariant3) {
    invariant3.debug = wrapConsoleMethod("debug");
    invariant3.log = wrapConsoleMethod("log");
    invariant3.warn = wrapConsoleMethod("warn");
    invariant3.error = wrapConsoleMethod("error");
  })(invariant || (invariant = {}));
  function setVerbosity(level) {
    var old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
  }

  // node_modules/@apollo/client/utilities/globals/maybe.js
  function maybe(thunk) {
    try {
      return thunk();
    } catch (_a5) {
    }
  }

  // node_modules/@apollo/client/utilities/globals/global.js
  var global_default = maybe(function() {
    return globalThis;
  }) || maybe(function() {
    return window;
  }) || maybe(function() {
    return self;
  }) || maybe(function() {
    return global;
  }) || maybe(function() {
    return Function("return this")();
  });

  // node_modules/@apollo/client/utilities/globals/DEV.js
  var __ = "__";
  var GLOBAL_KEY = [__, __].join("DEV");
  function getDEV() {
    try {
      return Boolean(__DEV__);
    } catch (_a5) {
      Object.defineProperty(global_default, GLOBAL_KEY, {
        value: maybe(function() {
          return "development";
        }) !== "production",
        enumerable: false,
        configurable: true,
        writable: true
      });
      return global_default[GLOBAL_KEY];
    }
  }
  var DEV_default = getDEV();

  // node_modules/ts-invariant/process/index.js
  function maybe2(thunk) {
    try {
      return thunk();
    } catch (_) {
    }
  }
  var safeGlobal = maybe2(function() {
    return globalThis;
  }) || maybe2(function() {
    return window;
  }) || maybe2(function() {
    return self;
  }) || maybe2(function() {
    return global;
  }) || maybe2(function() {
    return Function("return this")();
  });
  var needToRemove = false;
  function install() {
    if (safeGlobal && !maybe2(function() {
      return "development";
    }) && !maybe2(function() {
      return process;
    })) {
      Object.defineProperty(safeGlobal, "process", {
        value: {
          env: {
            NODE_ENV: "production"
          }
        },
        configurable: true,
        enumerable: false,
        writable: true
      });
      needToRemove = true;
    }
  }
  install();
  function remove() {
    if (needToRemove) {
      delete safeGlobal.process;
      needToRemove = false;
    }
  }

  // node_modules/graphql/jsutils/isObjectLike.mjs
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof5(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof5(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function isObjectLike(value) {
    return _typeof(value) == "object" && value !== null;
  }

  // node_modules/graphql/polyfills/symbols.mjs
  var SYMBOL_ITERATOR = typeof Symbol === "function" && Symbol.iterator != null ? Symbol.iterator : "@@iterator";
  var SYMBOL_ASYNC_ITERATOR = typeof Symbol === "function" && Symbol.asyncIterator != null ? Symbol.asyncIterator : "@@asyncIterator";
  var SYMBOL_TO_STRING_TAG = typeof Symbol === "function" && Symbol.toStringTag != null ? Symbol.toStringTag : "@@toStringTag";

  // node_modules/graphql/language/location.mjs
  function getLocation(source, position) {
    var lineRegexp = /\r\n|[\n\r]/g;
    var line = 1;
    var column = position + 1;
    var match;
    while ((match = lineRegexp.exec(source.body)) && match.index < position) {
      line += 1;
      column = position + 1 - (match.index + match[0].length);
    }
    return {
      line,
      column
    };
  }

  // node_modules/graphql/language/printLocation.mjs
  function printLocation(location) {
    return printSourceLocation(location.source, getLocation(location.source, location.start));
  }
  function printSourceLocation(source, sourceLocation) {
    var firstLineColumnOffset = source.locationOffset.column - 1;
    var body = whitespace(firstLineColumnOffset) + source.body;
    var lineIndex = sourceLocation.line - 1;
    var lineOffset = source.locationOffset.line - 1;
    var lineNum = sourceLocation.line + lineOffset;
    var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
    var columnNum = sourceLocation.column + columnOffset;
    var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
    var lines = body.split(/\r\n|[\n\r]/g);
    var locationLine = lines[lineIndex];
    if (locationLine.length > 120) {
      var subLineIndex = Math.floor(columnNum / 80);
      var subLineColumnNum = columnNum % 80;
      var subLines = [];
      for (var i = 0; i < locationLine.length; i += 80) {
        subLines.push(locationLine.slice(i, i + 80));
      }
      return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function(subLine) {
        return ["", subLine];
      }), [[" ", whitespace(subLineColumnNum - 1) + "^"], ["", subLines[subLineIndex + 1]]]));
    }
    return locationStr + printPrefixedLines([
      ["".concat(lineNum - 1), lines[lineIndex - 1]],
      ["".concat(lineNum), locationLine],
      ["", whitespace(columnNum - 1) + "^"],
      ["".concat(lineNum + 1), lines[lineIndex + 1]]
    ]);
  }
  function printPrefixedLines(lines) {
    var existingLines = lines.filter(function(_ref) {
      var _ = _ref[0], line = _ref[1];
      return line !== void 0;
    });
    var padLen = Math.max.apply(Math, existingLines.map(function(_ref2) {
      var prefix = _ref2[0];
      return prefix.length;
    }));
    return existingLines.map(function(_ref3) {
      var prefix = _ref3[0], line = _ref3[1];
      return leftPad(padLen, prefix) + (line ? " | " + line : " |");
    }).join("\n");
  }
  function whitespace(len) {
    return Array(len + 1).join(" ");
  }
  function leftPad(len, str) {
    return whitespace(len - str.length) + str;
  }

  // node_modules/graphql/error/GraphQLError.mjs
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof5(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof5(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result2;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result2 = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result2 = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result2);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof2(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2)
          _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var GraphQLError = /* @__PURE__ */ function(_Error) {
    _inherits(GraphQLError2, _Error);
    var _super = _createSuper(GraphQLError2);
    function GraphQLError2(message, nodes, source, positions, path, originalError, extensions) {
      var _nodeLocations, _nodeLocations2, _nodeLocations3;
      var _this;
      _classCallCheck(this, GraphQLError2);
      _this = _super.call(this, message);
      _this.name = "GraphQLError";
      _this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
      _this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0);
      var nodeLocations = [];
      for (var _i2 = 0, _ref3 = (_this$nodes = _this.nodes) !== null && _this$nodes !== void 0 ? _this$nodes : []; _i2 < _ref3.length; _i2++) {
        var _this$nodes;
        var _ref4 = _ref3[_i2];
        var loc = _ref4.loc;
        if (loc != null) {
          nodeLocations.push(loc);
        }
      }
      nodeLocations = undefinedIfEmpty(nodeLocations);
      _this.source = source !== null && source !== void 0 ? source : (_nodeLocations = nodeLocations) === null || _nodeLocations === void 0 ? void 0 : _nodeLocations[0].source;
      _this.positions = positions !== null && positions !== void 0 ? positions : (_nodeLocations2 = nodeLocations) === null || _nodeLocations2 === void 0 ? void 0 : _nodeLocations2.map(function(loc2) {
        return loc2.start;
      });
      _this.locations = positions && source ? positions.map(function(pos) {
        return getLocation(source, pos);
      }) : (_nodeLocations3 = nodeLocations) === null || _nodeLocations3 === void 0 ? void 0 : _nodeLocations3.map(function(loc2) {
        return getLocation(loc2.source, loc2.start);
      });
      _this.path = path !== null && path !== void 0 ? path : void 0;
      var originalExtensions = originalError === null || originalError === void 0 ? void 0 : originalError.extensions;
      if (extensions == null && isObjectLike(originalExtensions)) {
        _this.extensions = _objectSpread({}, originalExtensions);
      } else {
        _this.extensions = extensions !== null && extensions !== void 0 ? extensions : {};
      }
      Object.defineProperties(_assertThisInitialized(_this), {
        message: {
          enumerable: true
        },
        locations: {
          enumerable: _this.locations != null
        },
        path: {
          enumerable: _this.path != null
        },
        extensions: {
          enumerable: _this.extensions != null && Object.keys(_this.extensions).length > 0
        },
        name: {
          enumerable: false
        },
        nodes: {
          enumerable: false
        },
        source: {
          enumerable: false
        },
        positions: {
          enumerable: false
        },
        originalError: {
          enumerable: false
        }
      });
      if (originalError !== null && originalError !== void 0 && originalError.stack) {
        Object.defineProperty(_assertThisInitialized(_this), "stack", {
          value: originalError.stack,
          writable: true,
          configurable: true
        });
        return _possibleConstructorReturn(_this);
      }
      if (Error.captureStackTrace) {
        Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError2);
      } else {
        Object.defineProperty(_assertThisInitialized(_this), "stack", {
          value: Error().stack,
          writable: true,
          configurable: true
        });
      }
      return _this;
    }
    _createClass(GraphQLError2, [{
      key: "toString",
      value: function toString3() {
        return printError(this);
      }
    }, {
      key: SYMBOL_TO_STRING_TAG,
      get: function get() {
        return "Object";
      }
    }]);
    return GraphQLError2;
  }(/* @__PURE__ */ _wrapNativeSuper(Error));
  function undefinedIfEmpty(array) {
    return array === void 0 || array.length === 0 ? void 0 : array;
  }
  function printError(error) {
    var output = error.message;
    if (error.nodes) {
      for (var _i4 = 0, _error$nodes2 = error.nodes; _i4 < _error$nodes2.length; _i4++) {
        var node = _error$nodes2[_i4];
        if (node.loc) {
          output += "\n\n" + printLocation(node.loc);
        }
      }
    } else if (error.source && error.locations) {
      for (var _i6 = 0, _error$locations2 = error.locations; _i6 < _error$locations2.length; _i6++) {
        var location = _error$locations2[_i6];
        output += "\n\n" + printSourceLocation(error.source, location);
      }
    }
    return output;
  }

  // node_modules/graphql/error/syntaxError.mjs
  function syntaxError(source, position, description) {
    return new GraphQLError("Syntax Error: ".concat(description), void 0, source, [position]);
  }

  // node_modules/graphql/language/kinds.mjs
  var Kind = Object.freeze({
    NAME: "Name",
    DOCUMENT: "Document",
    OPERATION_DEFINITION: "OperationDefinition",
    VARIABLE_DEFINITION: "VariableDefinition",
    SELECTION_SET: "SelectionSet",
    FIELD: "Field",
    ARGUMENT: "Argument",
    FRAGMENT_SPREAD: "FragmentSpread",
    INLINE_FRAGMENT: "InlineFragment",
    FRAGMENT_DEFINITION: "FragmentDefinition",
    VARIABLE: "Variable",
    INT: "IntValue",
    FLOAT: "FloatValue",
    STRING: "StringValue",
    BOOLEAN: "BooleanValue",
    NULL: "NullValue",
    ENUM: "EnumValue",
    LIST: "ListValue",
    OBJECT: "ObjectValue",
    OBJECT_FIELD: "ObjectField",
    DIRECTIVE: "Directive",
    NAMED_TYPE: "NamedType",
    LIST_TYPE: "ListType",
    NON_NULL_TYPE: "NonNullType",
    SCHEMA_DEFINITION: "SchemaDefinition",
    OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
    SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
    OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
    FIELD_DEFINITION: "FieldDefinition",
    INPUT_VALUE_DEFINITION: "InputValueDefinition",
    INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
    UNION_TYPE_DEFINITION: "UnionTypeDefinition",
    ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
    ENUM_VALUE_DEFINITION: "EnumValueDefinition",
    INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
    DIRECTIVE_DEFINITION: "DirectiveDefinition",
    SCHEMA_EXTENSION: "SchemaExtension",
    SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
    OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
    INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
    UNION_TYPE_EXTENSION: "UnionTypeExtension",
    ENUM_TYPE_EXTENSION: "EnumTypeExtension",
    INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
  });

  // node_modules/graphql/jsutils/invariant.mjs
  function invariant2(condition, message) {
    var booleanCondition = Boolean(condition);
    if (!booleanCondition) {
      throw new Error(message != null ? message : "Unexpected invariant triggered.");
    }
  }

  // node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs
  var nodejsCustomInspectSymbol = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : void 0;
  var nodejsCustomInspectSymbol_default = nodejsCustomInspectSymbol;

  // node_modules/graphql/jsutils/defineInspect.mjs
  function defineInspect(classObject) {
    var fn = classObject.prototype.toJSON;
    typeof fn === "function" || invariant2(0);
    classObject.prototype.inspect = fn;
    if (nodejsCustomInspectSymbol_default) {
      classObject.prototype[nodejsCustomInspectSymbol_default] = fn;
    }
  }

  // node_modules/graphql/language/ast.mjs
  var Location = /* @__PURE__ */ function() {
    function Location2(startToken, endToken, source) {
      this.start = startToken.start;
      this.end = endToken.end;
      this.startToken = startToken;
      this.endToken = endToken;
      this.source = source;
    }
    var _proto = Location2.prototype;
    _proto.toJSON = function toJSON() {
      return {
        start: this.start,
        end: this.end
      };
    };
    return Location2;
  }();
  defineInspect(Location);
  var Token = /* @__PURE__ */ function() {
    function Token2(kind, start, end, line, column, prev, value) {
      this.kind = kind;
      this.start = start;
      this.end = end;
      this.line = line;
      this.column = column;
      this.value = value;
      this.prev = prev;
      this.next = null;
    }
    var _proto2 = Token2.prototype;
    _proto2.toJSON = function toJSON() {
      return {
        kind: this.kind,
        value: this.value,
        line: this.line,
        column: this.column
      };
    };
    return Token2;
  }();
  defineInspect(Token);
  function isNode(maybeNode) {
    return maybeNode != null && typeof maybeNode.kind === "string";
  }

  // node_modules/graphql/language/tokenKind.mjs
  var TokenKind = Object.freeze({
    SOF: "<SOF>",
    EOF: "<EOF>",
    BANG: "!",
    DOLLAR: "$",
    AMP: "&",
    PAREN_L: "(",
    PAREN_R: ")",
    SPREAD: "...",
    COLON: ":",
    EQUALS: "=",
    AT: "@",
    BRACKET_L: "[",
    BRACKET_R: "]",
    BRACE_L: "{",
    PIPE: "|",
    BRACE_R: "}",
    NAME: "Name",
    INT: "Int",
    FLOAT: "Float",
    STRING: "String",
    BLOCK_STRING: "BlockString",
    COMMENT: "Comment"
  });

  // node_modules/graphql/jsutils/inspect.mjs
  function _typeof3(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof3 = function _typeof5(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof3 = function _typeof5(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof3(obj);
  }
  var MAX_ARRAY_LENGTH = 10;
  var MAX_RECURSIVE_DEPTH = 2;
  function inspect(value) {
    return formatValue(value, []);
  }
  function formatValue(value, seenValues) {
    switch (_typeof3(value)) {
      case "string":
        return JSON.stringify(value);
      case "function":
        return value.name ? "[function ".concat(value.name, "]") : "[function]";
      case "object":
        if (value === null) {
          return "null";
        }
        return formatObjectValue(value, seenValues);
      default:
        return String(value);
    }
  }
  function formatObjectValue(value, previouslySeenValues) {
    if (previouslySeenValues.indexOf(value) !== -1) {
      return "[Circular]";
    }
    var seenValues = [].concat(previouslySeenValues, [value]);
    var customInspectFn = getCustomFn(value);
    if (customInspectFn !== void 0) {
      var customValue = customInspectFn.call(value);
      if (customValue !== value) {
        return typeof customValue === "string" ? customValue : formatValue(customValue, seenValues);
      }
    } else if (Array.isArray(value)) {
      return formatArray(value, seenValues);
    }
    return formatObject(value, seenValues);
  }
  function formatObject(object, seenValues) {
    var keys = Object.keys(object);
    if (keys.length === 0) {
      return "{}";
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
      return "[" + getObjectTag(object) + "]";
    }
    var properties = keys.map(function(key) {
      var value = formatValue(object[key], seenValues);
      return key + ": " + value;
    });
    return "{ " + properties.join(", ") + " }";
  }
  function formatArray(array, seenValues) {
    if (array.length === 0) {
      return "[]";
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
      return "[Array]";
    }
    var len = Math.min(MAX_ARRAY_LENGTH, array.length);
    var remaining = array.length - len;
    var items = [];
    for (var i = 0; i < len; ++i) {
      items.push(formatValue(array[i], seenValues));
    }
    if (remaining === 1) {
      items.push("... 1 more item");
    } else if (remaining > 1) {
      items.push("... ".concat(remaining, " more items"));
    }
    return "[" + items.join(", ") + "]";
  }
  function getCustomFn(object) {
    var customInspectFn = object[String(nodejsCustomInspectSymbol_default)];
    if (typeof customInspectFn === "function") {
      return customInspectFn;
    }
    if (typeof object.inspect === "function") {
      return object.inspect;
    }
  }
  function getObjectTag(object) {
    var tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
    if (tag === "Object" && typeof object.constructor === "function") {
      var name = object.constructor.name;
      if (typeof name === "string" && name !== "") {
        return name;
      }
    }
    return tag;
  }

  // node_modules/graphql/jsutils/devAssert.mjs
  function devAssert(condition, message) {
    var booleanCondition = Boolean(condition);
    if (!booleanCondition) {
      throw new Error(message);
    }
  }

  // node_modules/graphql/jsutils/instanceOf.mjs
  function _typeof4(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof4 = function _typeof5(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof4 = function _typeof5(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof4(obj);
  }
  var instanceOf_default = false ? function instanceOf(value, constructor) {
    return value instanceof constructor;
  } : function instanceOf2(value, constructor) {
    if (value instanceof constructor) {
      return true;
    }
    if (_typeof4(value) === "object" && value !== null) {
      var _value$constructor;
      var className = constructor.prototype[Symbol.toStringTag];
      var valueClassName = Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
      if (className === valueClassName) {
        var stringifiedValue = inspect(value);
        throw new Error("Cannot use ".concat(className, ' "').concat(stringifiedValue, '" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.'));
      }
    }
    return false;
  };

  // node_modules/graphql/language/source.mjs
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  var Source = /* @__PURE__ */ function() {
    function Source2(body) {
      var name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "GraphQL request";
      var locationOffset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        line: 1,
        column: 1
      };
      typeof body === "string" || devAssert(0, "Body must be a string. Received: ".concat(inspect(body), "."));
      this.body = body;
      this.name = name;
      this.locationOffset = locationOffset;
      this.locationOffset.line > 0 || devAssert(0, "line in locationOffset is 1-indexed and must be positive.");
      this.locationOffset.column > 0 || devAssert(0, "column in locationOffset is 1-indexed and must be positive.");
    }
    _createClass2(Source2, [{
      key: SYMBOL_TO_STRING_TAG,
      get: function get() {
        return "Source";
      }
    }]);
    return Source2;
  }();
  function isSource(source) {
    return instanceOf_default(source, Source);
  }

  // node_modules/graphql/language/directiveLocation.mjs
  var DirectiveLocation = Object.freeze({
    QUERY: "QUERY",
    MUTATION: "MUTATION",
    SUBSCRIPTION: "SUBSCRIPTION",
    FIELD: "FIELD",
    FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
    FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
    INLINE_FRAGMENT: "INLINE_FRAGMENT",
    VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
    SCHEMA: "SCHEMA",
    SCALAR: "SCALAR",
    OBJECT: "OBJECT",
    FIELD_DEFINITION: "FIELD_DEFINITION",
    ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
    INTERFACE: "INTERFACE",
    UNION: "UNION",
    ENUM: "ENUM",
    ENUM_VALUE: "ENUM_VALUE",
    INPUT_OBJECT: "INPUT_OBJECT",
    INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
  });

  // node_modules/graphql/language/blockString.mjs
  function dedentBlockStringValue(rawString) {
    var lines = rawString.split(/\r\n|[\n\r]/g);
    var commonIndent = getBlockStringIndentation(rawString);
    if (commonIndent !== 0) {
      for (var i = 1; i < lines.length; i++) {
        lines[i] = lines[i].slice(commonIndent);
      }
    }
    var startLine = 0;
    while (startLine < lines.length && isBlank(lines[startLine])) {
      ++startLine;
    }
    var endLine = lines.length;
    while (endLine > startLine && isBlank(lines[endLine - 1])) {
      --endLine;
    }
    return lines.slice(startLine, endLine).join("\n");
  }
  function isBlank(str) {
    for (var i = 0; i < str.length; ++i) {
      if (str[i] !== " " && str[i] !== "	") {
        return false;
      }
    }
    return true;
  }
  function getBlockStringIndentation(value) {
    var _commonIndent;
    var isFirstLine = true;
    var isEmptyLine = true;
    var indent2 = 0;
    var commonIndent = null;
    for (var i = 0; i < value.length; ++i) {
      switch (value.charCodeAt(i)) {
        case 13:
          if (value.charCodeAt(i + 1) === 10) {
            ++i;
          }
        case 10:
          isFirstLine = false;
          isEmptyLine = true;
          indent2 = 0;
          break;
        case 9:
        case 32:
          ++indent2;
          break;
        default:
          if (isEmptyLine && !isFirstLine && (commonIndent === null || indent2 < commonIndent)) {
            commonIndent = indent2;
          }
          isEmptyLine = false;
      }
    }
    return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
  }
  function printBlockString(value) {
    var indentation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var preferMultipleLines = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var isSingleLine = value.indexOf("\n") === -1;
    var hasLeadingSpace = value[0] === " " || value[0] === "	";
    var hasTrailingQuote = value[value.length - 1] === '"';
    var hasTrailingSlash = value[value.length - 1] === "\\";
    var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
    var result2 = "";
    if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
      result2 += "\n" + indentation;
    }
    result2 += indentation ? value.replace(/\n/g, "\n" + indentation) : value;
    if (printAsMultipleLines) {
      result2 += "\n";
    }
    return '"""' + result2.replace(/"""/g, '\\"""') + '"""';
  }

  // node_modules/graphql/language/lexer.mjs
  var Lexer = /* @__PURE__ */ function() {
    function Lexer2(source) {
      var startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0, null);
      this.source = source;
      this.lastToken = startOfFileToken;
      this.token = startOfFileToken;
      this.line = 1;
      this.lineStart = 0;
    }
    var _proto = Lexer2.prototype;
    _proto.advance = function advance() {
      this.lastToken = this.token;
      var token = this.token = this.lookahead();
      return token;
    };
    _proto.lookahead = function lookahead() {
      var token = this.token;
      if (token.kind !== TokenKind.EOF) {
        do {
          var _token$next;
          token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
        } while (token.kind === TokenKind.COMMENT);
      }
      return token;
    };
    return Lexer2;
  }();
  function isPunctuatorTokenKind(kind) {
    return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
  }
  function printCharCode(code) {
    return isNaN(code) ? TokenKind.EOF : code < 127 ? JSON.stringify(String.fromCharCode(code)) : '"\\u'.concat(("00" + code.toString(16).toUpperCase()).slice(-4), '"');
  }
  function readToken(lexer, prev) {
    var source = lexer.source;
    var body = source.body;
    var bodyLength = body.length;
    var pos = prev.end;
    while (pos < bodyLength) {
      var code = body.charCodeAt(pos);
      var _line = lexer.line;
      var _col = 1 + pos - lexer.lineStart;
      switch (code) {
        case 65279:
        case 9:
        case 32:
        case 44:
          ++pos;
          continue;
        case 10:
          ++pos;
          ++lexer.line;
          lexer.lineStart = pos;
          continue;
        case 13:
          if (body.charCodeAt(pos + 1) === 10) {
            pos += 2;
          } else {
            ++pos;
          }
          ++lexer.line;
          lexer.lineStart = pos;
          continue;
        case 33:
          return new Token(TokenKind.BANG, pos, pos + 1, _line, _col, prev);
        case 35:
          return readComment(source, pos, _line, _col, prev);
        case 36:
          return new Token(TokenKind.DOLLAR, pos, pos + 1, _line, _col, prev);
        case 38:
          return new Token(TokenKind.AMP, pos, pos + 1, _line, _col, prev);
        case 40:
          return new Token(TokenKind.PAREN_L, pos, pos + 1, _line, _col, prev);
        case 41:
          return new Token(TokenKind.PAREN_R, pos, pos + 1, _line, _col, prev);
        case 46:
          if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
            return new Token(TokenKind.SPREAD, pos, pos + 3, _line, _col, prev);
          }
          break;
        case 58:
          return new Token(TokenKind.COLON, pos, pos + 1, _line, _col, prev);
        case 61:
          return new Token(TokenKind.EQUALS, pos, pos + 1, _line, _col, prev);
        case 64:
          return new Token(TokenKind.AT, pos, pos + 1, _line, _col, prev);
        case 91:
          return new Token(TokenKind.BRACKET_L, pos, pos + 1, _line, _col, prev);
        case 93:
          return new Token(TokenKind.BRACKET_R, pos, pos + 1, _line, _col, prev);
        case 123:
          return new Token(TokenKind.BRACE_L, pos, pos + 1, _line, _col, prev);
        case 124:
          return new Token(TokenKind.PIPE, pos, pos + 1, _line, _col, prev);
        case 125:
          return new Token(TokenKind.BRACE_R, pos, pos + 1, _line, _col, prev);
        case 34:
          if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
            return readBlockString(source, pos, _line, _col, prev, lexer);
          }
          return readString(source, pos, _line, _col, prev);
        case 45:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return readNumber(source, pos, code, _line, _col, prev);
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 95:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          return readName(source, pos, _line, _col, prev);
      }
      throw syntaxError(source, pos, unexpectedCharacterMessage(code));
    }
    var line = lexer.line;
    var col = 1 + pos - lexer.lineStart;
    return new Token(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
  }
  function unexpectedCharacterMessage(code) {
    if (code < 32 && code !== 9 && code !== 10 && code !== 13) {
      return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
    }
    if (code === 39) {
      return `Unexpected single quote character ('), did you mean to use a double quote (")?`;
    }
    return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
  }
  function readComment(source, start, line, col, prev) {
    var body = source.body;
    var code;
    var position = start;
    do {
      code = body.charCodeAt(++position);
    } while (!isNaN(code) && (code > 31 || code === 9));
    return new Token(TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
  }
  function readNumber(source, start, firstCode, line, col, prev) {
    var body = source.body;
    var code = firstCode;
    var position = start;
    var isFloat = false;
    if (code === 45) {
      code = body.charCodeAt(++position);
    }
    if (code === 48) {
      code = body.charCodeAt(++position);
      if (code >= 48 && code <= 57) {
        throw syntaxError(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
      }
    } else {
      position = readDigits(source, position, code);
      code = body.charCodeAt(position);
    }
    if (code === 46) {
      isFloat = true;
      code = body.charCodeAt(++position);
      position = readDigits(source, position, code);
      code = body.charCodeAt(position);
    }
    if (code === 69 || code === 101) {
      isFloat = true;
      code = body.charCodeAt(++position);
      if (code === 43 || code === 45) {
        code = body.charCodeAt(++position);
      }
      position = readDigits(source, position, code);
      code = body.charCodeAt(position);
    }
    if (code === 46 || isNameStart(code)) {
      throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
    }
    return new Token(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
  }
  function readDigits(source, start, firstCode) {
    var body = source.body;
    var position = start;
    var code = firstCode;
    if (code >= 48 && code <= 57) {
      do {
        code = body.charCodeAt(++position);
      } while (code >= 48 && code <= 57);
      return position;
    }
    throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }
  function readString(source, start, line, col, prev) {
    var body = source.body;
    var position = start + 1;
    var chunkStart = position;
    var code = 0;
    var value = "";
    while (position < body.length && !isNaN(code = body.charCodeAt(position)) && code !== 10 && code !== 13) {
      if (code === 34) {
        value += body.slice(chunkStart, position);
        return new Token(TokenKind.STRING, start, position + 1, line, col, prev, value);
      }
      if (code < 32 && code !== 9) {
        throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
      }
      ++position;
      if (code === 92) {
        value += body.slice(chunkStart, position - 1);
        code = body.charCodeAt(position);
        switch (code) {
          case 34:
            value += '"';
            break;
          case 47:
            value += "/";
            break;
          case 92:
            value += "\\";
            break;
          case 98:
            value += "\b";
            break;
          case 102:
            value += "\f";
            break;
          case 110:
            value += "\n";
            break;
          case 114:
            value += "\r";
            break;
          case 116:
            value += "	";
            break;
          case 117: {
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));
            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw syntaxError(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }
            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }
          default:
            throw syntaxError(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
        }
        ++position;
        chunkStart = position;
      }
    }
    throw syntaxError(source, position, "Unterminated string.");
  }
  function readBlockString(source, start, line, col, prev, lexer) {
    var body = source.body;
    var position = start + 3;
    var chunkStart = position;
    var code = 0;
    var rawValue = "";
    while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
      if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
        rawValue += body.slice(chunkStart, position);
        return new Token(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, dedentBlockStringValue(rawValue));
      }
      if (code < 32 && code !== 9 && code !== 10 && code !== 13) {
        throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
      }
      if (code === 10) {
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
      } else if (code === 13) {
        if (body.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }
        ++lexer.line;
        lexer.lineStart = position;
      } else if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
        rawValue += body.slice(chunkStart, position) + '"""';
        position += 4;
        chunkStart = position;
      } else {
        ++position;
      }
    }
    throw syntaxError(source, position, "Unterminated string.");
  }
  function uniCharCode(a, b, c, d) {
    return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
  }
  function char2hex(a) {
    return a >= 48 && a <= 57 ? a - 48 : a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : -1;
  }
  function readName(source, start, line, col, prev) {
    var body = source.body;
    var bodyLength = body.length;
    var position = start + 1;
    var code = 0;
    while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122)) {
      ++position;
    }
    return new Token(TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
  }
  function isNameStart(code) {
    return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
  }

  // node_modules/graphql/language/parser.mjs
  function parse(source, options) {
    var parser = new Parser(source, options);
    return parser.parseDocument();
  }
  var Parser = /* @__PURE__ */ function() {
    function Parser2(source, options) {
      var sourceObj = isSource(source) ? source : new Source(source);
      this._lexer = new Lexer(sourceObj);
      this._options = options;
    }
    var _proto = Parser2.prototype;
    _proto.parseName = function parseName() {
      var token = this.expectToken(TokenKind.NAME);
      return {
        kind: Kind.NAME,
        value: token.value,
        loc: this.loc(token)
      };
    };
    _proto.parseDocument = function parseDocument2() {
      var start = this._lexer.token;
      return {
        kind: Kind.DOCUMENT,
        definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF),
        loc: this.loc(start)
      };
    };
    _proto.parseDefinition = function parseDefinition() {
      if (this.peek(TokenKind.NAME)) {
        switch (this._lexer.token.value) {
          case "query":
          case "mutation":
          case "subscription":
            return this.parseOperationDefinition();
          case "fragment":
            return this.parseFragmentDefinition();
          case "schema":
          case "scalar":
          case "type":
          case "interface":
          case "union":
          case "enum":
          case "input":
          case "directive":
            return this.parseTypeSystemDefinition();
          case "extend":
            return this.parseTypeSystemExtension();
        }
      } else if (this.peek(TokenKind.BRACE_L)) {
        return this.parseOperationDefinition();
      } else if (this.peekDescription()) {
        return this.parseTypeSystemDefinition();
      }
      throw this.unexpected();
    };
    _proto.parseOperationDefinition = function parseOperationDefinition() {
      var start = this._lexer.token;
      if (this.peek(TokenKind.BRACE_L)) {
        return {
          kind: Kind.OPERATION_DEFINITION,
          operation: "query",
          name: void 0,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(start)
        };
      }
      var operation = this.parseOperationType();
      var name;
      if (this.peek(TokenKind.NAME)) {
        name = this.parseName();
      }
      return {
        kind: Kind.OPERATION_DEFINITION,
        operation,
        name,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    };
    _proto.parseOperationType = function parseOperationType() {
      var operationToken = this.expectToken(TokenKind.NAME);
      switch (operationToken.value) {
        case "query":
          return "query";
        case "mutation":
          return "mutation";
        case "subscription":
          return "subscription";
      }
      throw this.unexpected(operationToken);
    };
    _proto.parseVariableDefinitions = function parseVariableDefinitions() {
      return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
    };
    _proto.parseVariableDefinition = function parseVariableDefinition() {
      var start = this._lexer.token;
      return {
        kind: Kind.VARIABLE_DEFINITION,
        variable: this.parseVariable(),
        type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseValueLiteral(true) : void 0,
        directives: this.parseDirectives(true),
        loc: this.loc(start)
      };
    };
    _proto.parseVariable = function parseVariable() {
      var start = this._lexer.token;
      this.expectToken(TokenKind.DOLLAR);
      return {
        kind: Kind.VARIABLE,
        name: this.parseName(),
        loc: this.loc(start)
      };
    };
    _proto.parseSelectionSet = function parseSelectionSet() {
      var start = this._lexer.token;
      return {
        kind: Kind.SELECTION_SET,
        selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R),
        loc: this.loc(start)
      };
    };
    _proto.parseSelection = function parseSelection() {
      return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
    };
    _proto.parseField = function parseField() {
      var start = this._lexer.token;
      var nameOrAlias = this.parseName();
      var alias;
      var name;
      if (this.expectOptionalToken(TokenKind.COLON)) {
        alias = nameOrAlias;
        name = this.parseName();
      } else {
        name = nameOrAlias;
      }
      return {
        kind: Kind.FIELD,
        alias,
        name,
        arguments: this.parseArguments(false),
        directives: this.parseDirectives(false),
        selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0,
        loc: this.loc(start)
      };
    };
    _proto.parseArguments = function parseArguments(isConst) {
      var item = isConst ? this.parseConstArgument : this.parseArgument;
      return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
    };
    _proto.parseArgument = function parseArgument() {
      var start = this._lexer.token;
      var name = this.parseName();
      this.expectToken(TokenKind.COLON);
      return {
        kind: Kind.ARGUMENT,
        name,
        value: this.parseValueLiteral(false),
        loc: this.loc(start)
      };
    };
    _proto.parseConstArgument = function parseConstArgument() {
      var start = this._lexer.token;
      return {
        kind: Kind.ARGUMENT,
        name: this.parseName(),
        value: (this.expectToken(TokenKind.COLON), this.parseValueLiteral(true)),
        loc: this.loc(start)
      };
    };
    _proto.parseFragment = function parseFragment() {
      var start = this._lexer.token;
      this.expectToken(TokenKind.SPREAD);
      var hasTypeCondition = this.expectOptionalKeyword("on");
      if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
        return {
          kind: Kind.FRAGMENT_SPREAD,
          name: this.parseFragmentName(),
          directives: this.parseDirectives(false),
          loc: this.loc(start)
        };
      }
      return {
        kind: Kind.INLINE_FRAGMENT,
        typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    };
    _proto.parseFragmentDefinition = function parseFragmentDefinition() {
      var _this$_options;
      var start = this._lexer.token;
      this.expectKeyword("fragment");
      if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
        return {
          kind: Kind.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          variableDefinitions: this.parseVariableDefinitions(),
          typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(start)
        };
      }
      return {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    };
    _proto.parseFragmentName = function parseFragmentName() {
      if (this._lexer.token.value === "on") {
        throw this.unexpected();
      }
      return this.parseName();
    };
    _proto.parseValueLiteral = function parseValueLiteral(isConst) {
      var token = this._lexer.token;
      switch (token.kind) {
        case TokenKind.BRACKET_L:
          return this.parseList(isConst);
        case TokenKind.BRACE_L:
          return this.parseObject(isConst);
        case TokenKind.INT:
          this._lexer.advance();
          return {
            kind: Kind.INT,
            value: token.value,
            loc: this.loc(token)
          };
        case TokenKind.FLOAT:
          this._lexer.advance();
          return {
            kind: Kind.FLOAT,
            value: token.value,
            loc: this.loc(token)
          };
        case TokenKind.STRING:
        case TokenKind.BLOCK_STRING:
          return this.parseStringLiteral();
        case TokenKind.NAME:
          this._lexer.advance();
          switch (token.value) {
            case "true":
              return {
                kind: Kind.BOOLEAN,
                value: true,
                loc: this.loc(token)
              };
            case "false":
              return {
                kind: Kind.BOOLEAN,
                value: false,
                loc: this.loc(token)
              };
            case "null":
              return {
                kind: Kind.NULL,
                loc: this.loc(token)
              };
            default:
              return {
                kind: Kind.ENUM,
                value: token.value,
                loc: this.loc(token)
              };
          }
        case TokenKind.DOLLAR:
          if (!isConst) {
            return this.parseVariable();
          }
          break;
      }
      throw this.unexpected();
    };
    _proto.parseStringLiteral = function parseStringLiteral() {
      var token = this._lexer.token;
      this._lexer.advance();
      return {
        kind: Kind.STRING,
        value: token.value,
        block: token.kind === TokenKind.BLOCK_STRING,
        loc: this.loc(token)
      };
    };
    _proto.parseList = function parseList(isConst) {
      var _this = this;
      var start = this._lexer.token;
      var item = function item2() {
        return _this.parseValueLiteral(isConst);
      };
      return {
        kind: Kind.LIST,
        values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
        loc: this.loc(start)
      };
    };
    _proto.parseObject = function parseObject(isConst) {
      var _this2 = this;
      var start = this._lexer.token;
      var item = function item2() {
        return _this2.parseObjectField(isConst);
      };
      return {
        kind: Kind.OBJECT,
        fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R),
        loc: this.loc(start)
      };
    };
    _proto.parseObjectField = function parseObjectField(isConst) {
      var start = this._lexer.token;
      var name = this.parseName();
      this.expectToken(TokenKind.COLON);
      return {
        kind: Kind.OBJECT_FIELD,
        name,
        value: this.parseValueLiteral(isConst),
        loc: this.loc(start)
      };
    };
    _proto.parseDirectives = function parseDirectives(isConst) {
      var directives = [];
      while (this.peek(TokenKind.AT)) {
        directives.push(this.parseDirective(isConst));
      }
      return directives;
    };
    _proto.parseDirective = function parseDirective(isConst) {
      var start = this._lexer.token;
      this.expectToken(TokenKind.AT);
      return {
        kind: Kind.DIRECTIVE,
        name: this.parseName(),
        arguments: this.parseArguments(isConst),
        loc: this.loc(start)
      };
    };
    _proto.parseTypeReference = function parseTypeReference() {
      var start = this._lexer.token;
      var type;
      if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
        type = this.parseTypeReference();
        this.expectToken(TokenKind.BRACKET_R);
        type = {
          kind: Kind.LIST_TYPE,
          type,
          loc: this.loc(start)
        };
      } else {
        type = this.parseNamedType();
      }
      if (this.expectOptionalToken(TokenKind.BANG)) {
        return {
          kind: Kind.NON_NULL_TYPE,
          type,
          loc: this.loc(start)
        };
      }
      return type;
    };
    _proto.parseNamedType = function parseNamedType() {
      var start = this._lexer.token;
      return {
        kind: Kind.NAMED_TYPE,
        name: this.parseName(),
        loc: this.loc(start)
      };
    };
    _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
      var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
      if (keywordToken.kind === TokenKind.NAME) {
        switch (keywordToken.value) {
          case "schema":
            return this.parseSchemaDefinition();
          case "scalar":
            return this.parseScalarTypeDefinition();
          case "type":
            return this.parseObjectTypeDefinition();
          case "interface":
            return this.parseInterfaceTypeDefinition();
          case "union":
            return this.parseUnionTypeDefinition();
          case "enum":
            return this.parseEnumTypeDefinition();
          case "input":
            return this.parseInputObjectTypeDefinition();
          case "directive":
            return this.parseDirectiveDefinition();
        }
      }
      throw this.unexpected(keywordToken);
    };
    _proto.peekDescription = function peekDescription() {
      return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
    };
    _proto.parseDescription = function parseDescription() {
      if (this.peekDescription()) {
        return this.parseStringLiteral();
      }
    };
    _proto.parseSchemaDefinition = function parseSchemaDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword("schema");
      var directives = this.parseDirectives(true);
      var operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
      return {
        kind: Kind.SCHEMA_DEFINITION,
        description,
        directives,
        operationTypes,
        loc: this.loc(start)
      };
    };
    _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
      var start = this._lexer.token;
      var operation = this.parseOperationType();
      this.expectToken(TokenKind.COLON);
      var type = this.parseNamedType();
      return {
        kind: Kind.OPERATION_TYPE_DEFINITION,
        operation,
        type,
        loc: this.loc(start)
      };
    };
    _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword("scalar");
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      return {
        kind: Kind.SCALAR_TYPE_DEFINITION,
        description,
        name,
        directives,
        loc: this.loc(start)
      };
    };
    _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword("type");
      var name = this.parseName();
      var interfaces = this.parseImplementsInterfaces();
      var directives = this.parseDirectives(true);
      var fields = this.parseFieldsDefinition();
      return {
        kind: Kind.OBJECT_TYPE_DEFINITION,
        description,
        name,
        interfaces,
        directives,
        fields,
        loc: this.loc(start)
      };
    };
    _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
      var _this$_options2;
      if (!this.expectOptionalKeyword("implements")) {
        return [];
      }
      if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
        var types = [];
        this.expectOptionalToken(TokenKind.AMP);
        do {
          types.push(this.parseNamedType());
        } while (this.expectOptionalToken(TokenKind.AMP) || this.peek(TokenKind.NAME));
        return types;
      }
      return this.delimitedMany(TokenKind.AMP, this.parseNamedType);
    };
    _proto.parseFieldsDefinition = function parseFieldsDefinition() {
      var _this$_options3;
      if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(TokenKind.BRACE_L) && this._lexer.lookahead().kind === TokenKind.BRACE_R) {
        this._lexer.advance();
        this._lexer.advance();
        return [];
      }
      return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
    };
    _proto.parseFieldDefinition = function parseFieldDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      var name = this.parseName();
      var args = this.parseArgumentDefs();
      this.expectToken(TokenKind.COLON);
      var type = this.parseTypeReference();
      var directives = this.parseDirectives(true);
      return {
        kind: Kind.FIELD_DEFINITION,
        description,
        name,
        arguments: args,
        type,
        directives,
        loc: this.loc(start)
      };
    };
    _proto.parseArgumentDefs = function parseArgumentDefs() {
      return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
    };
    _proto.parseInputValueDef = function parseInputValueDef() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      var name = this.parseName();
      this.expectToken(TokenKind.COLON);
      var type = this.parseTypeReference();
      var defaultValue;
      if (this.expectOptionalToken(TokenKind.EQUALS)) {
        defaultValue = this.parseValueLiteral(true);
      }
      var directives = this.parseDirectives(true);
      return {
        kind: Kind.INPUT_VALUE_DEFINITION,
        description,
        name,
        type,
        defaultValue,
        directives,
        loc: this.loc(start)
      };
    };
    _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword("interface");
      var name = this.parseName();
      var interfaces = this.parseImplementsInterfaces();
      var directives = this.parseDirectives(true);
      var fields = this.parseFieldsDefinition();
      return {
        kind: Kind.INTERFACE_TYPE_DEFINITION,
        description,
        name,
        interfaces,
        directives,
        fields,
        loc: this.loc(start)
      };
    };
    _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword("union");
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var types = this.parseUnionMemberTypes();
      return {
        kind: Kind.UNION_TYPE_DEFINITION,
        description,
        name,
        directives,
        types,
        loc: this.loc(start)
      };
    };
    _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
      return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
    };
    _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword("enum");
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var values = this.parseEnumValuesDefinition();
      return {
        kind: Kind.ENUM_TYPE_DEFINITION,
        description,
        name,
        directives,
        values,
        loc: this.loc(start)
      };
    };
    _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
      return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
    };
    _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      return {
        kind: Kind.ENUM_VALUE_DEFINITION,
        description,
        name,
        directives,
        loc: this.loc(start)
      };
    };
    _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword("input");
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var fields = this.parseInputFieldsDefinition();
      return {
        kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
        description,
        name,
        directives,
        fields,
        loc: this.loc(start)
      };
    };
    _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
      return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
    };
    _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
      var keywordToken = this._lexer.lookahead();
      if (keywordToken.kind === TokenKind.NAME) {
        switch (keywordToken.value) {
          case "schema":
            return this.parseSchemaExtension();
          case "scalar":
            return this.parseScalarTypeExtension();
          case "type":
            return this.parseObjectTypeExtension();
          case "interface":
            return this.parseInterfaceTypeExtension();
          case "union":
            return this.parseUnionTypeExtension();
          case "enum":
            return this.parseEnumTypeExtension();
          case "input":
            return this.parseInputObjectTypeExtension();
        }
      }
      throw this.unexpected(keywordToken);
    };
    _proto.parseSchemaExtension = function parseSchemaExtension() {
      var start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("schema");
      var directives = this.parseDirectives(true);
      var operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
      if (directives.length === 0 && operationTypes.length === 0) {
        throw this.unexpected();
      }
      return {
        kind: Kind.SCHEMA_EXTENSION,
        directives,
        operationTypes,
        loc: this.loc(start)
      };
    };
    _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("scalar");
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      if (directives.length === 0) {
        throw this.unexpected();
      }
      return {
        kind: Kind.SCALAR_TYPE_EXTENSION,
        name,
        directives,
        loc: this.loc(start)
      };
    };
    _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("type");
      var name = this.parseName();
      var interfaces = this.parseImplementsInterfaces();
      var directives = this.parseDirectives(true);
      var fields = this.parseFieldsDefinition();
      if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
        throw this.unexpected();
      }
      return {
        kind: Kind.OBJECT_TYPE_EXTENSION,
        name,
        interfaces,
        directives,
        fields,
        loc: this.loc(start)
      };
    };
    _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("interface");
      var name = this.parseName();
      var interfaces = this.parseImplementsInterfaces();
      var directives = this.parseDirectives(true);
      var fields = this.parseFieldsDefinition();
      if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
        throw this.unexpected();
      }
      return {
        kind: Kind.INTERFACE_TYPE_EXTENSION,
        name,
        interfaces,
        directives,
        fields,
        loc: this.loc(start)
      };
    };
    _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("union");
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var types = this.parseUnionMemberTypes();
      if (directives.length === 0 && types.length === 0) {
        throw this.unexpected();
      }
      return {
        kind: Kind.UNION_TYPE_EXTENSION,
        name,
        directives,
        types,
        loc: this.loc(start)
      };
    };
    _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("enum");
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var values = this.parseEnumValuesDefinition();
      if (directives.length === 0 && values.length === 0) {
        throw this.unexpected();
      }
      return {
        kind: Kind.ENUM_TYPE_EXTENSION,
        name,
        directives,
        values,
        loc: this.loc(start)
      };
    };
    _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword("extend");
      this.expectKeyword("input");
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var fields = this.parseInputFieldsDefinition();
      if (directives.length === 0 && fields.length === 0) {
        throw this.unexpected();
      }
      return {
        kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
        name,
        directives,
        fields,
        loc: this.loc(start)
      };
    };
    _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword("directive");
      this.expectToken(TokenKind.AT);
      var name = this.parseName();
      var args = this.parseArgumentDefs();
      var repeatable = this.expectOptionalKeyword("repeatable");
      this.expectKeyword("on");
      var locations = this.parseDirectiveLocations();
      return {
        kind: Kind.DIRECTIVE_DEFINITION,
        description,
        name,
        arguments: args,
        repeatable,
        locations,
        loc: this.loc(start)
      };
    };
    _proto.parseDirectiveLocations = function parseDirectiveLocations() {
      return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
    };
    _proto.parseDirectiveLocation = function parseDirectiveLocation() {
      var start = this._lexer.token;
      var name = this.parseName();
      if (DirectiveLocation[name.value] !== void 0) {
        return name;
      }
      throw this.unexpected(start);
    };
    _proto.loc = function loc(startToken) {
      var _this$_options4;
      if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
        return new Location(startToken, this._lexer.lastToken, this._lexer.source);
      }
    };
    _proto.peek = function peek(kind) {
      return this._lexer.token.kind === kind;
    };
    _proto.expectToken = function expectToken(kind) {
      var token = this._lexer.token;
      if (token.kind === kind) {
        this._lexer.advance();
        return token;
      }
      throw syntaxError(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
    };
    _proto.expectOptionalToken = function expectOptionalToken(kind) {
      var token = this._lexer.token;
      if (token.kind === kind) {
        this._lexer.advance();
        return token;
      }
      return void 0;
    };
    _proto.expectKeyword = function expectKeyword(value) {
      var token = this._lexer.token;
      if (token.kind === TokenKind.NAME && token.value === value) {
        this._lexer.advance();
      } else {
        throw syntaxError(this._lexer.source, token.start, 'Expected "'.concat(value, '", found ').concat(getTokenDesc(token), "."));
      }
    };
    _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
      var token = this._lexer.token;
      if (token.kind === TokenKind.NAME && token.value === value) {
        this._lexer.advance();
        return true;
      }
      return false;
    };
    _proto.unexpected = function unexpected(atToken) {
      var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
      return syntaxError(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
    };
    _proto.any = function any(openKind, parseFn, closeKind) {
      this.expectToken(openKind);
      var nodes = [];
      while (!this.expectOptionalToken(closeKind)) {
        nodes.push(parseFn.call(this));
      }
      return nodes;
    };
    _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
      if (this.expectOptionalToken(openKind)) {
        var nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (!this.expectOptionalToken(closeKind));
        return nodes;
      }
      return [];
    };
    _proto.many = function many(openKind, parseFn, closeKind) {
      this.expectToken(openKind);
      var nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));
      return nodes;
    };
    _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
      this.expectOptionalToken(delimiterKind);
      var nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (this.expectOptionalToken(delimiterKind));
      return nodes;
    };
    return Parser2;
  }();
  function getTokenDesc(token) {
    var value = token.value;
    return getTokenKindDesc(token.kind) + (value != null ? ' "'.concat(value, '"') : "");
  }
  function getTokenKindDesc(kind) {
    return isPunctuatorTokenKind(kind) ? '"'.concat(kind, '"') : kind;
  }

  // node_modules/graphql/language/visitor.mjs
  var QueryDocumentKeys = {
    Name: [],
    Document: ["definitions"],
    OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
    Variable: ["name"],
    SelectionSet: ["selections"],
    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
    Argument: ["name", "value"],
    FragmentSpread: ["name", "directives"],
    InlineFragment: ["typeCondition", "directives", "selectionSet"],
    FragmentDefinition: [
      "name",
      "variableDefinitions",
      "typeCondition",
      "directives",
      "selectionSet"
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ["values"],
    ObjectValue: ["fields"],
    ObjectField: ["name", "value"],
    Directive: ["name", "arguments"],
    NamedType: ["name"],
    ListType: ["type"],
    NonNullType: ["type"],
    SchemaDefinition: ["description", "directives", "operationTypes"],
    OperationTypeDefinition: ["type"],
    ScalarTypeDefinition: ["description", "name", "directives"],
    ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
    InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
    InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
    UnionTypeDefinition: ["description", "name", "directives", "types"],
    EnumTypeDefinition: ["description", "name", "directives", "values"],
    EnumValueDefinition: ["description", "name", "directives"],
    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
    DirectiveDefinition: ["description", "name", "arguments", "locations"],
    SchemaExtension: ["directives", "operationTypes"],
    ScalarTypeExtension: ["name", "directives"],
    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
    UnionTypeExtension: ["name", "directives", "types"],
    EnumTypeExtension: ["name", "directives", "values"],
    InputObjectTypeExtension: ["name", "directives", "fields"]
  };
  var BREAK = Object.freeze({});
  function visit(root2, visitor) {
    var visitorKeys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : QueryDocumentKeys;
    var stack = void 0;
    var inArray = Array.isArray(root2);
    var keys = [root2];
    var index = -1;
    var edits = [];
    var node = void 0;
    var key = void 0;
    var parent = void 0;
    var path = [];
    var ancestors = [];
    var newRoot = root2;
    do {
      index++;
      var isLeaving = index === keys.length;
      var isEdited = isLeaving && edits.length !== 0;
      if (isLeaving) {
        key = ancestors.length === 0 ? void 0 : path[path.length - 1];
        node = parent;
        parent = ancestors.pop();
        if (isEdited) {
          if (inArray) {
            node = node.slice();
          } else {
            var clone = {};
            for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
              var k = _Object$keys2[_i2];
              clone[k] = node[k];
            }
            node = clone;
          }
          var editOffset = 0;
          for (var ii = 0; ii < edits.length; ii++) {
            var editKey = edits[ii][0];
            var editValue = edits[ii][1];
            if (inArray) {
              editKey -= editOffset;
            }
            if (inArray && editValue === null) {
              node.splice(editKey, 1);
              editOffset++;
            } else {
              node[editKey] = editValue;
            }
          }
        }
        index = stack.index;
        keys = stack.keys;
        edits = stack.edits;
        inArray = stack.inArray;
        stack = stack.prev;
      } else {
        key = parent ? inArray ? index : keys[index] : void 0;
        node = parent ? parent[key] : newRoot;
        if (node === null || node === void 0) {
          continue;
        }
        if (parent) {
          path.push(key);
        }
      }
      var result2 = void 0;
      if (!Array.isArray(node)) {
        if (!isNode(node)) {
          throw new Error("Invalid AST Node: ".concat(inspect(node), "."));
        }
        var visitFn = getVisitFn(visitor, node.kind, isLeaving);
        if (visitFn) {
          result2 = visitFn.call(visitor, node, key, parent, path, ancestors);
          if (result2 === BREAK) {
            break;
          }
          if (result2 === false) {
            if (!isLeaving) {
              path.pop();
              continue;
            }
          } else if (result2 !== void 0) {
            edits.push([key, result2]);
            if (!isLeaving) {
              if (isNode(result2)) {
                node = result2;
              } else {
                path.pop();
                continue;
              }
            }
          }
        }
      }
      if (result2 === void 0 && isEdited) {
        edits.push([key, node]);
      }
      if (isLeaving) {
        path.pop();
      } else {
        var _visitorKeys$node$kin;
        stack = {
          inArray,
          index,
          keys,
          edits,
          prev: stack
        };
        inArray = Array.isArray(node);
        keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
        index = -1;
        edits = [];
        if (parent) {
          ancestors.push(parent);
        }
        parent = node;
      }
    } while (stack !== void 0);
    if (edits.length !== 0) {
      newRoot = edits[edits.length - 1][1];
    }
    return newRoot;
  }
  function getVisitFn(visitor, kind, isLeaving) {
    var kindVisitor = visitor[kind];
    if (kindVisitor) {
      if (!isLeaving && typeof kindVisitor === "function") {
        return kindVisitor;
      }
      var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
      if (typeof kindSpecificVisitor === "function") {
        return kindSpecificVisitor;
      }
    } else {
      var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
      if (specificVisitor) {
        if (typeof specificVisitor === "function") {
          return specificVisitor;
        }
        var specificKindVisitor = specificVisitor[kind];
        if (typeof specificKindVisitor === "function") {
          return specificKindVisitor;
        }
      }
    }
  }

  // node_modules/graphql/language/printer.mjs
  function print(ast) {
    return visit(ast, {
      leave: printDocASTReducer
    });
  }
  var MAX_LINE_LENGTH = 80;
  var printDocASTReducer = {
    Name: function Name(node) {
      return node.value;
    },
    Variable: function Variable(node) {
      return "$" + node.name;
    },
    Document: function Document(node) {
      return join(node.definitions, "\n\n") + "\n";
    },
    OperationDefinition: function OperationDefinition(node) {
      var op = node.operation;
      var name = node.name;
      var varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
      var directives = join(node.directives, " ");
      var selectionSet = node.selectionSet;
      return !name && !directives && !varDefs && op === "query" ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], " ");
    },
    VariableDefinition: function VariableDefinition(_ref) {
      var variable = _ref.variable, type = _ref.type, defaultValue = _ref.defaultValue, directives = _ref.directives;
      return variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "));
    },
    SelectionSet: function SelectionSet(_ref2) {
      var selections = _ref2.selections;
      return block(selections);
    },
    Field: function Field(_ref3) {
      var alias = _ref3.alias, name = _ref3.name, args = _ref3.arguments, directives = _ref3.directives, selectionSet = _ref3.selectionSet;
      var prefix = wrap("", alias, ": ") + name;
      var argsLine = prefix + wrap("(", join(args, ", "), ")");
      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
      }
      return join([argsLine, join(directives, " "), selectionSet], " ");
    },
    Argument: function Argument(_ref4) {
      var name = _ref4.name, value = _ref4.value;
      return name + ": " + value;
    },
    FragmentSpread: function FragmentSpread(_ref5) {
      var name = _ref5.name, directives = _ref5.directives;
      return "..." + name + wrap(" ", join(directives, " "));
    },
    InlineFragment: function InlineFragment(_ref6) {
      var typeCondition = _ref6.typeCondition, directives = _ref6.directives, selectionSet = _ref6.selectionSet;
      return join(["...", wrap("on ", typeCondition), join(directives, " "), selectionSet], " ");
    },
    FragmentDefinition: function FragmentDefinition(_ref7) {
      var name = _ref7.name, typeCondition = _ref7.typeCondition, variableDefinitions = _ref7.variableDefinitions, directives = _ref7.directives, selectionSet = _ref7.selectionSet;
      return "fragment ".concat(name).concat(wrap("(", join(variableDefinitions, ", "), ")"), " ") + "on ".concat(typeCondition, " ").concat(wrap("", join(directives, " "), " ")) + selectionSet;
    },
    IntValue: function IntValue(_ref8) {
      var value = _ref8.value;
      return value;
    },
    FloatValue: function FloatValue(_ref9) {
      var value = _ref9.value;
      return value;
    },
    StringValue: function StringValue(_ref10, key) {
      var value = _ref10.value, isBlockString = _ref10.block;
      return isBlockString ? printBlockString(value, key === "description" ? "" : "  ") : JSON.stringify(value);
    },
    BooleanValue: function BooleanValue(_ref11) {
      var value = _ref11.value;
      return value ? "true" : "false";
    },
    NullValue: function NullValue() {
      return "null";
    },
    EnumValue: function EnumValue(_ref12) {
      var value = _ref12.value;
      return value;
    },
    ListValue: function ListValue(_ref13) {
      var values = _ref13.values;
      return "[" + join(values, ", ") + "]";
    },
    ObjectValue: function ObjectValue(_ref14) {
      var fields = _ref14.fields;
      return "{" + join(fields, ", ") + "}";
    },
    ObjectField: function ObjectField(_ref15) {
      var name = _ref15.name, value = _ref15.value;
      return name + ": " + value;
    },
    Directive: function Directive(_ref16) {
      var name = _ref16.name, args = _ref16.arguments;
      return "@" + name + wrap("(", join(args, ", "), ")");
    },
    NamedType: function NamedType(_ref17) {
      var name = _ref17.name;
      return name;
    },
    ListType: function ListType(_ref18) {
      var type = _ref18.type;
      return "[" + type + "]";
    },
    NonNullType: function NonNullType(_ref19) {
      var type = _ref19.type;
      return type + "!";
    },
    SchemaDefinition: addDescription(function(_ref20) {
      var directives = _ref20.directives, operationTypes = _ref20.operationTypes;
      return join(["schema", join(directives, " "), block(operationTypes)], " ");
    }),
    OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
      var operation = _ref21.operation, type = _ref21.type;
      return operation + ": " + type;
    },
    ScalarTypeDefinition: addDescription(function(_ref22) {
      var name = _ref22.name, directives = _ref22.directives;
      return join(["scalar", name, join(directives, " ")], " ");
    }),
    ObjectTypeDefinition: addDescription(function(_ref23) {
      var name = _ref23.name, interfaces = _ref23.interfaces, directives = _ref23.directives, fields = _ref23.fields;
      return join(["type", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
    }),
    FieldDefinition: addDescription(function(_ref24) {
      var name = _ref24.name, args = _ref24.arguments, type = _ref24.type, directives = _ref24.directives;
      return name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "));
    }),
    InputValueDefinition: addDescription(function(_ref25) {
      var name = _ref25.name, type = _ref25.type, defaultValue = _ref25.defaultValue, directives = _ref25.directives;
      return join([name + ": " + type, wrap("= ", defaultValue), join(directives, " ")], " ");
    }),
    InterfaceTypeDefinition: addDescription(function(_ref26) {
      var name = _ref26.name, interfaces = _ref26.interfaces, directives = _ref26.directives, fields = _ref26.fields;
      return join(["interface", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
    }),
    UnionTypeDefinition: addDescription(function(_ref27) {
      var name = _ref27.name, directives = _ref27.directives, types = _ref27.types;
      return join(["union", name, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
    }),
    EnumTypeDefinition: addDescription(function(_ref28) {
      var name = _ref28.name, directives = _ref28.directives, values = _ref28.values;
      return join(["enum", name, join(directives, " "), block(values)], " ");
    }),
    EnumValueDefinition: addDescription(function(_ref29) {
      var name = _ref29.name, directives = _ref29.directives;
      return join([name, join(directives, " ")], " ");
    }),
    InputObjectTypeDefinition: addDescription(function(_ref30) {
      var name = _ref30.name, directives = _ref30.directives, fields = _ref30.fields;
      return join(["input", name, join(directives, " "), block(fields)], " ");
    }),
    DirectiveDefinition: addDescription(function(_ref31) {
      var name = _ref31.name, args = _ref31.arguments, repeatable = _ref31.repeatable, locations = _ref31.locations;
      return "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ");
    }),
    SchemaExtension: function SchemaExtension(_ref32) {
      var directives = _ref32.directives, operationTypes = _ref32.operationTypes;
      return join(["extend schema", join(directives, " "), block(operationTypes)], " ");
    },
    ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
      var name = _ref33.name, directives = _ref33.directives;
      return join(["extend scalar", name, join(directives, " ")], " ");
    },
    ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
      var name = _ref34.name, interfaces = _ref34.interfaces, directives = _ref34.directives, fields = _ref34.fields;
      return join(["extend type", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
    },
    InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
      var name = _ref35.name, interfaces = _ref35.interfaces, directives = _ref35.directives, fields = _ref35.fields;
      return join(["extend interface", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ");
    },
    UnionTypeExtension: function UnionTypeExtension(_ref36) {
      var name = _ref36.name, directives = _ref36.directives, types = _ref36.types;
      return join(["extend union", name, join(directives, " "), types && types.length !== 0 ? "= " + join(types, " | ") : ""], " ");
    },
    EnumTypeExtension: function EnumTypeExtension(_ref37) {
      var name = _ref37.name, directives = _ref37.directives, values = _ref37.values;
      return join(["extend enum", name, join(directives, " "), block(values)], " ");
    },
    InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
      var name = _ref38.name, directives = _ref38.directives, fields = _ref38.fields;
      return join(["extend input", name, join(directives, " "), block(fields)], " ");
    }
  };
  function addDescription(cb) {
    return function(node) {
      return join([node.description, cb(node)], "\n");
    };
  }
  function join(maybeArray) {
    var _maybeArray$filter$jo;
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function(x) {
      return x;
    }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
  }
  function block(array) {
    return wrap("{\n", indent(join(array, "\n")), "\n}");
  }
  function wrap(start, maybeString) {
    var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
  }
  function indent(str) {
    return wrap("  ", str.replace(/\n/g, "\n  "));
  }
  function isMultiline(str) {
    return str.indexOf("\n") !== -1;
  }
  function hasMultilineItems(maybeArray) {
    return maybeArray != null && maybeArray.some(isMultiline);
  }

  // node_modules/@apollo/client/utilities/globals/fix-graphql.js
  function removeTemporaryGlobals() {
    return typeof Source === "function" ? remove() : remove();
  }

  // node_modules/@apollo/client/utilities/globals/index.js
  function checkDEV() {
    __DEV__ ? invariant(typeof DEV_default === "boolean", DEV_default) : invariant(typeof DEV_default === "boolean", 38);
  }
  removeTemporaryGlobals();
  checkDEV();

  // node_modules/@apollo/client/utilities/graphql/directives.js
  function shouldInclude(_a5, variables) {
    var directives = _a5.directives;
    if (!directives || !directives.length) {
      return true;
    }
    return getInclusionDirectives(directives).every(function(_a6) {
      var directive = _a6.directive, ifArgument = _a6.ifArgument;
      var evaledValue = false;
      if (ifArgument.value.kind === "Variable") {
        evaledValue = variables && variables[ifArgument.value.name.value];
        __DEV__ ? invariant(evaledValue !== void 0, "Invalid variable referenced in @" + directive.name.value + " directive.") : invariant(evaledValue !== void 0, 39);
      } else {
        evaledValue = ifArgument.value.value;
      }
      return directive.name.value === "skip" ? !evaledValue : evaledValue;
    });
  }
  function getDirectiveNames(root2) {
    var names = [];
    visit(root2, {
      Directive: function(node) {
        names.push(node.name.value);
      }
    });
    return names;
  }
  function hasDirectives(names, root2) {
    return getDirectiveNames(root2).some(function(name) {
      return names.indexOf(name) > -1;
    });
  }
  function hasClientExports(document2) {
    return document2 && hasDirectives(["client"], document2) && hasDirectives(["export"], document2);
  }
  function isInclusionDirective(_a5) {
    var value = _a5.name.value;
    return value === "skip" || value === "include";
  }
  function getInclusionDirectives(directives) {
    var result2 = [];
    if (directives && directives.length) {
      directives.forEach(function(directive) {
        if (!isInclusionDirective(directive))
          return;
        var directiveArguments = directive.arguments;
        var directiveName = directive.name.value;
        __DEV__ ? invariant(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.") : invariant(directiveArguments && directiveArguments.length === 1, 40);
        var ifArgument = directiveArguments[0];
        __DEV__ ? invariant(ifArgument.name && ifArgument.name.value === "if", "Invalid argument for the @" + directiveName + " directive.") : invariant(ifArgument.name && ifArgument.name.value === "if", 41);
        var ifValue = ifArgument.value;
        __DEV__ ? invariant(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), "Argument for the @" + directiveName + " directive must be a variable or a boolean value.") : invariant(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 42);
        result2.push({ directive, ifArgument });
      });
    }
    return result2;
  }

  // node_modules/@apollo/client/utilities/graphql/fragments.js
  function getFragmentQueryDocument(document2, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document2.definitions.forEach(function(definition) {
      if (definition.kind === "OperationDefinition") {
        throw __DEV__ ? new InvariantError("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : "") + ". No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new InvariantError(43);
      }
      if (definition.kind === "FragmentDefinition") {
        fragments.push(definition);
      }
    });
    if (typeof actualFragmentName === "undefined") {
      __DEV__ ? invariant(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.") : invariant(fragments.length === 1, 44);
      actualFragmentName = fragments[0].name.value;
    }
    var query = __assign(__assign({}, document2), { definitions: __spreadArray([
      {
        kind: "OperationDefinition",
        operation: "query",
        selectionSet: {
          kind: "SelectionSet",
          selections: [
            {
              kind: "FragmentSpread",
              name: {
                kind: "Name",
                value: actualFragmentName
              }
            }
          ]
        }
      }
    ], document2.definitions, true) });
    return query;
  }
  function createFragmentMap(fragments) {
    if (fragments === void 0) {
      fragments = [];
    }
    var symTable = {};
    fragments.forEach(function(fragment) {
      symTable[fragment.name.value] = fragment;
    });
    return symTable;
  }
  function getFragmentFromSelection(selection, fragmentMap) {
    switch (selection.kind) {
      case "InlineFragment":
        return selection;
      case "FragmentSpread": {
        var fragment = fragmentMap && fragmentMap[selection.name.value];
        __DEV__ ? invariant(fragment, "No fragment named " + selection.name.value + ".") : invariant(fragment, 45);
        return fragment;
      }
      default:
        return null;
    }
  }

  // node_modules/@apollo/client/utilities/common/objects.js
  function isNonNullObject(obj) {
    return obj !== null && typeof obj === "object";
  }

  // node_modules/@apollo/client/utilities/graphql/storeUtils.js
  function makeReference(id) {
    return { __ref: String(id) };
  }
  function isReference(obj) {
    return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
  }
  function isDocumentNode(value) {
    return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
  }
  function isStringValue(value) {
    return value.kind === "StringValue";
  }
  function isBooleanValue(value) {
    return value.kind === "BooleanValue";
  }
  function isIntValue(value) {
    return value.kind === "IntValue";
  }
  function isFloatValue(value) {
    return value.kind === "FloatValue";
  }
  function isVariable(value) {
    return value.kind === "Variable";
  }
  function isObjectValue(value) {
    return value.kind === "ObjectValue";
  }
  function isListValue(value) {
    return value.kind === "ListValue";
  }
  function isEnumValue(value) {
    return value.kind === "EnumValue";
  }
  function isNullValue(value) {
    return value.kind === "NullValue";
  }
  function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
      argObj[name.value] = Number(value.value);
    } else if (isBooleanValue(value) || isStringValue(value)) {
      argObj[name.value] = value.value;
    } else if (isObjectValue(value)) {
      var nestedArgObj_1 = {};
      value.fields.map(function(obj) {
        return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
      });
      argObj[name.value] = nestedArgObj_1;
    } else if (isVariable(value)) {
      var variableValue = (variables || {})[value.name.value];
      argObj[name.value] = variableValue;
    } else if (isListValue(value)) {
      argObj[name.value] = value.values.map(function(listValue) {
        var nestedArgArrayObj = {};
        valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
        return nestedArgArrayObj[name.value];
      });
    } else if (isEnumValue(value)) {
      argObj[name.value] = value.value;
    } else if (isNullValue(value)) {
      argObj[name.value] = null;
    } else {
      throw __DEV__ ? new InvariantError('The inline argument "' + name.value + '" of kind "' + value.kind + '"is not supported. Use variables instead of inline arguments to overcome this limitation.') : new InvariantError(54);
    }
  }
  function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
      directivesObj = {};
      field.directives.forEach(function(directive) {
        directivesObj[directive.name.value] = {};
        if (directive.arguments) {
          directive.arguments.forEach(function(_a5) {
            var name = _a5.name, value = _a5.value;
            return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
          });
        }
      });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
      argObj = {};
      field.arguments.forEach(function(_a5) {
        var name = _a5.name, value = _a5.value;
        return valueToObjectRepresentation(argObj, name, value, variables);
      });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
  }
  var KNOWN_DIRECTIVES = [
    "connection",
    "include",
    "skip",
    "client",
    "rest",
    "export"
  ];
  var getStoreKeyName = Object.assign(function(fieldName, args, directives) {
    if (args && directives && directives["connection"] && directives["connection"]["key"]) {
      if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
        var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
        filterKeys.sort();
        var filteredArgs_1 = {};
        filterKeys.forEach(function(key) {
          filteredArgs_1[key] = args[key];
        });
        return directives["connection"]["key"] + "(" + stringify(filteredArgs_1) + ")";
      } else {
        return directives["connection"]["key"];
      }
    }
    var completeFieldName = fieldName;
    if (args) {
      var stringifiedArgs = stringify(args);
      completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) {
      Object.keys(directives).forEach(function(key) {
        if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
          return;
        if (directives[key] && Object.keys(directives[key]).length) {
          completeFieldName += "@" + key + "(" + stringify(directives[key]) + ")";
        } else {
          completeFieldName += "@" + key;
        }
      });
    }
    return completeFieldName;
  }, {
    setStringify: function(s) {
      var previous = stringify;
      stringify = s;
      return previous;
    }
  });
  var stringify = function defaultStringify(value) {
    return JSON.stringify(value, stringifyReplacer);
  };
  function stringifyReplacer(_key, value) {
    if (isNonNullObject(value) && !Array.isArray(value)) {
      value = Object.keys(value).sort().reduce(function(copy, key) {
        copy[key] = value[key];
        return copy;
      }, {});
    }
    return value;
  }
  function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
      var argObj_1 = {};
      field.arguments.forEach(function(_a5) {
        var name = _a5.name, value = _a5.value;
        return valueToObjectRepresentation(argObj_1, name, value, variables);
      });
      return argObj_1;
    }
    return null;
  }
  function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
  }
  function getTypenameFromResult(result2, selectionSet, fragmentMap) {
    if (typeof result2.__typename === "string") {
      return result2.__typename;
    }
    for (var _i = 0, _a5 = selectionSet.selections; _i < _a5.length; _i++) {
      var selection = _a5[_i];
      if (isField(selection)) {
        if (selection.name.value === "__typename") {
          return result2[resultKeyNameFromField(selection)];
        }
      } else {
        var typename = getTypenameFromResult(result2, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
        if (typeof typename === "string") {
          return typename;
        }
      }
    }
  }
  function isField(selection) {
    return selection.kind === "Field";
  }
  function isInlineFragment(selection) {
    return selection.kind === "InlineFragment";
  }

  // node_modules/@apollo/client/utilities/graphql/getFromAST.js
  function checkDocument(doc) {
    __DEV__ ? invariant(doc && doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant(doc && doc.kind === "Document", 46);
    var operations = doc.definitions.filter(function(d) {
      return d.kind !== "FragmentDefinition";
    }).map(function(definition) {
      if (definition.kind !== "OperationDefinition") {
        throw __DEV__ ? new InvariantError('Schema type definitions not allowed in queries. Found: "' + definition.kind + '"') : new InvariantError(47);
      }
      return definition;
    });
    __DEV__ ? invariant(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations") : invariant(operations.length <= 1, 48);
    return doc;
  }
  function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function(definition) {
      return definition.kind === "OperationDefinition";
    })[0];
  }
  function getOperationName(doc) {
    return doc.definitions.filter(function(definition) {
      return definition.kind === "OperationDefinition" && definition.name;
    }).map(function(x) {
      return x.name.value;
    })[0] || null;
  }
  function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function(definition) {
      return definition.kind === "FragmentDefinition";
    });
  }
  function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    __DEV__ ? invariant(queryDef && queryDef.operation === "query", "Must contain a query definition.") : invariant(queryDef && queryDef.operation === "query", 49);
    return queryDef;
  }
  function getFragmentDefinition(doc) {
    __DEV__ ? invariant(doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant(doc.kind === "Document", 50);
    __DEV__ ? invariant(doc.definitions.length <= 1, "Fragment must have exactly one definition.") : invariant(doc.definitions.length <= 1, 51);
    var fragmentDef = doc.definitions[0];
    __DEV__ ? invariant(fragmentDef.kind === "FragmentDefinition", "Must be a fragment definition.") : invariant(fragmentDef.kind === "FragmentDefinition", 52);
    return fragmentDef;
  }
  function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a5 = queryDoc.definitions; _i < _a5.length; _i++) {
      var definition = _a5[_i];
      if (definition.kind === "OperationDefinition") {
        var operation = definition.operation;
        if (operation === "query" || operation === "mutation" || operation === "subscription") {
          return definition;
        }
      }
      if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
        fragmentDefinition = definition;
      }
    }
    if (fragmentDefinition) {
      return fragmentDefinition;
    }
    throw __DEV__ ? new InvariantError("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new InvariantError(53);
  }
  function getDefaultValues(definition) {
    var defaultValues = Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) {
      defs.forEach(function(def) {
        if (def.defaultValue) {
          valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
        }
      });
    }
    return defaultValues;
  }

  // node_modules/@apollo/client/utilities/common/filterInPlace.js
  function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function(elem, i) {
      if (test.call(this, elem, i, array)) {
        array[target++] = elem;
      }
    }, context);
    array.length = target;
    return array;
  }

  // node_modules/@apollo/client/utilities/graphql/transform.js
  var TYPENAME_FIELD = {
    kind: "Field",
    name: {
      kind: "Name",
      value: "__typename"
    }
  };
  function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function(selection) {
      return selection.kind === "FragmentSpread" && isEmpty(fragments[selection.name.value], fragments);
    });
  }
  function nullIfDocIsEmpty(doc) {
    return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
  }
  function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
      return directives.some(function(dir) {
        return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
      });
    };
  }
  function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(visit(doc, {
      Variable: {
        enter: function(node, _key, parent) {
          if (parent.kind !== "VariableDefinition") {
            variablesInUse[node.name.value] = true;
          }
        }
      },
      Field: {
        enter: function(node) {
          if (directives && node.directives) {
            var shouldRemoveField = directives.some(function(directive) {
              return directive.remove;
            });
            if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
              if (node.arguments) {
                node.arguments.forEach(function(arg) {
                  if (arg.value.kind === "Variable") {
                    variablesToRemove.push({
                      name: arg.value.name.value
                    });
                  }
                });
              }
              if (node.selectionSet) {
                getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function(frag) {
                  fragmentSpreadsToRemove.push({
                    name: frag.name.value
                  });
                });
              }
              return null;
            }
          }
        }
      },
      FragmentSpread: {
        enter: function(node) {
          fragmentSpreadsInUse[node.name.value] = true;
        }
      },
      Directive: {
        enter: function(node) {
          if (getDirectiveMatcher(directives)(node)) {
            return null;
          }
        }
      }
    }));
    if (modifiedDoc && filterInPlace(variablesToRemove, function(v) {
      return !!v.name && !variablesInUse[v.name];
    }).length) {
      modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    }
    if (modifiedDoc && filterInPlace(fragmentSpreadsToRemove, function(fs) {
      return !!fs.name && !fragmentSpreadsInUse[fs.name];
    }).length) {
      modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    }
    return modifiedDoc;
  }
  var addTypenameToDocument = Object.assign(function(doc) {
    return visit(checkDocument(doc), {
      SelectionSet: {
        enter: function(node, _key, parent) {
          if (parent && parent.kind === "OperationDefinition") {
            return;
          }
          var selections = node.selections;
          if (!selections) {
            return;
          }
          var skip = selections.some(function(selection) {
            return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
          });
          if (skip) {
            return;
          }
          var field = parent;
          if (isField(field) && field.directives && field.directives.some(function(d) {
            return d.name.value === "export";
          })) {
            return;
          }
          return __assign(__assign({}, node), { selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
        }
      }
    });
  }, {
    added: function(field) {
      return field === TYPENAME_FIELD;
    }
  });
  var connectionRemoveConfig = {
    test: function(directive) {
      var willRemove = directive.name.value === "connection";
      if (willRemove) {
        if (!directive.arguments || !directive.arguments.some(function(arg) {
          return arg.name.value === "key";
        })) {
          __DEV__ && invariant.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.");
        }
      }
      return willRemove;
    }
  };
  function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
  }
  function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
      return config.some(function(aConfig) {
        return argument.value && argument.value.kind === "Variable" && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
      });
    };
  }
  function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(visit(doc, {
      OperationDefinition: {
        enter: function(node) {
          return __assign(__assign({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function(varDef) {
            return !config.some(function(arg) {
              return arg.name === varDef.variable.name.value;
            });
          }) : [] });
        }
      },
      Field: {
        enter: function(node) {
          var shouldRemoveField = config.some(function(argConfig) {
            return argConfig.remove;
          });
          if (shouldRemoveField) {
            var argMatchCount_1 = 0;
            if (node.arguments) {
              node.arguments.forEach(function(arg) {
                if (argMatcher(arg)) {
                  argMatchCount_1 += 1;
                }
              });
            }
            if (argMatchCount_1 === 1) {
              return null;
            }
          }
        }
      },
      Argument: {
        enter: function(node) {
          if (argMatcher(node)) {
            return null;
          }
        }
      }
    }));
  }
  function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
      if (config.some(function(def) {
        return def.name === node.name.value;
      })) {
        return null;
      }
    }
    return nullIfDocIsEmpty(visit(doc, {
      FragmentSpread: { enter },
      FragmentDefinition: { enter }
    }));
  }
  function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function(selection) {
      if ((isField(selection) || isInlineFragment(selection)) && selection.selectionSet) {
        getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function(frag) {
          return allFragments.push(frag);
        });
      } else if (selection.kind === "FragmentSpread") {
        allFragments.push(selection);
      }
    });
    return allFragments;
  }
  function buildQueryFromSelectionSet(document2) {
    var definition = getMainDefinition(document2);
    var definitionOperation = definition.operation;
    if (definitionOperation === "query") {
      return document2;
    }
    var modifiedDoc = visit(document2, {
      OperationDefinition: {
        enter: function(node) {
          return __assign(__assign({}, node), { operation: "query" });
        }
      }
    });
    return modifiedDoc;
  }
  function removeClientSetsFromDocument(document2) {
    checkDocument(document2);
    var modifiedDoc = removeDirectivesFromDocument([
      {
        test: function(directive) {
          return directive.name.value === "client";
        },
        remove: true
      }
    ], document2);
    if (modifiedDoc) {
      modifiedDoc = visit(modifiedDoc, {
        FragmentDefinition: {
          enter: function(node) {
            if (node.selectionSet) {
              var isTypenameOnly = node.selectionSet.selections.every(function(selection) {
                return isField(selection) && selection.name.value === "__typename";
              });
              if (isTypenameOnly) {
                return null;
              }
            }
          }
        }
      });
    }
    return modifiedDoc;
  }

  // node_modules/@apollo/client/utilities/common/mergeDeep.js
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
  }
  function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
      var merger = new DeepMerger();
      for (var i = 1; i < count; ++i) {
        target = merger.merge(target, sources[i]);
      }
    }
    return target;
  }
  var defaultReconciler = function(target, source, property) {
    return this.merge(target[property], source[property]);
  };
  var DeepMerger = function() {
    function DeepMerger2(reconciler) {
      if (reconciler === void 0) {
        reconciler = defaultReconciler;
      }
      this.reconciler = reconciler;
      this.isObject = isNonNullObject;
      this.pastCopies = new Set();
    }
    DeepMerger2.prototype.merge = function(target, source) {
      var _this = this;
      var context = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        context[_i - 2] = arguments[_i];
      }
      if (isNonNullObject(source) && isNonNullObject(target)) {
        Object.keys(source).forEach(function(sourceKey) {
          if (hasOwnProperty.call(target, sourceKey)) {
            var targetValue = target[sourceKey];
            if (source[sourceKey] !== targetValue) {
              var result2 = _this.reconciler.apply(_this, __spreadArray([target, source, sourceKey], context, false));
              if (result2 !== targetValue) {
                target = _this.shallowCopyForMerge(target);
                target[sourceKey] = result2;
              }
            }
          } else {
            target = _this.shallowCopyForMerge(target);
            target[sourceKey] = source[sourceKey];
          }
        });
        return target;
      }
      return source;
    };
    DeepMerger2.prototype.shallowCopyForMerge = function(value) {
      if (isNonNullObject(value) && !this.pastCopies.has(value)) {
        if (Array.isArray(value)) {
          value = value.slice(0);
        } else {
          value = __assign({ __proto__: Object.getPrototypeOf(value) }, value);
        }
        this.pastCopies.add(value);
      }
      return value;
    };
    return DeepMerger2;
  }();

  // node_modules/zen-observable-ts/module.js
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it)
      return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _defineProperties3(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass3(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties3(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties3(Constructor, staticProps);
    return Constructor;
  }
  var hasSymbols = function() {
    return typeof Symbol === "function";
  };
  var hasSymbol = function(name) {
    return hasSymbols() && Boolean(Symbol[name]);
  };
  var getSymbol = function(name) {
    return hasSymbol(name) ? Symbol[name] : "@@" + name;
  };
  if (hasSymbols() && !hasSymbol("observable")) {
    Symbol.observable = Symbol("observable");
  }
  var SymbolIterator = getSymbol("iterator");
  var SymbolObservable = getSymbol("observable");
  var SymbolSpecies = getSymbol("species");
  function getMethod(obj, key) {
    var value = obj[key];
    if (value == null)
      return void 0;
    if (typeof value !== "function")
      throw new TypeError(value + " is not a function");
    return value;
  }
  function getSpecies(obj) {
    var ctor = obj.constructor;
    if (ctor !== void 0) {
      ctor = ctor[SymbolSpecies];
      if (ctor === null) {
        ctor = void 0;
      }
    }
    return ctor !== void 0 ? ctor : Observable;
  }
  function isObservable(x) {
    return x instanceof Observable;
  }
  function hostReportError(e) {
    if (hostReportError.log) {
      hostReportError.log(e);
    } else {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function enqueue(fn) {
    Promise.resolve().then(function() {
      try {
        fn();
      } catch (e) {
        hostReportError(e);
      }
    });
  }
  function cleanupSubscription(subscription2) {
    var cleanup = subscription2._cleanup;
    if (cleanup === void 0)
      return;
    subscription2._cleanup = void 0;
    if (!cleanup) {
      return;
    }
    try {
      if (typeof cleanup === "function") {
        cleanup();
      } else {
        var unsubscribe = getMethod(cleanup, "unsubscribe");
        if (unsubscribe) {
          unsubscribe.call(cleanup);
        }
      }
    } catch (e) {
      hostReportError(e);
    }
  }
  function closeSubscription(subscription2) {
    subscription2._observer = void 0;
    subscription2._queue = void 0;
    subscription2._state = "closed";
  }
  function flushSubscription(subscription2) {
    var queue = subscription2._queue;
    if (!queue) {
      return;
    }
    subscription2._queue = void 0;
    subscription2._state = "ready";
    for (var i = 0; i < queue.length; ++i) {
      notifySubscription(subscription2, queue[i].type, queue[i].value);
      if (subscription2._state === "closed")
        break;
    }
  }
  function notifySubscription(subscription2, type, value) {
    subscription2._state = "running";
    var observer = subscription2._observer;
    try {
      var m = getMethod(observer, type);
      switch (type) {
        case "next":
          if (m)
            m.call(observer, value);
          break;
        case "error":
          closeSubscription(subscription2);
          if (m)
            m.call(observer, value);
          else
            throw value;
          break;
        case "complete":
          closeSubscription(subscription2);
          if (m)
            m.call(observer);
          break;
      }
    } catch (e) {
      hostReportError(e);
    }
    if (subscription2._state === "closed")
      cleanupSubscription(subscription2);
    else if (subscription2._state === "running")
      subscription2._state = "ready";
  }
  function onNotify(subscription2, type, value) {
    if (subscription2._state === "closed")
      return;
    if (subscription2._state === "buffering") {
      subscription2._queue.push({
        type,
        value
      });
      return;
    }
    if (subscription2._state !== "ready") {
      subscription2._state = "buffering";
      subscription2._queue = [{
        type,
        value
      }];
      enqueue(function() {
        return flushSubscription(subscription2);
      });
      return;
    }
    notifySubscription(subscription2, type, value);
  }
  var Subscription = /* @__PURE__ */ function() {
    function Subscription2(observer, subscriber) {
      this._cleanup = void 0;
      this._observer = observer;
      this._queue = void 0;
      this._state = "initializing";
      var subscriptionObserver = new SubscriptionObserver(this);
      try {
        this._cleanup = subscriber.call(void 0, subscriptionObserver);
      } catch (e) {
        subscriptionObserver.error(e);
      }
      if (this._state === "initializing")
        this._state = "ready";
    }
    var _proto = Subscription2.prototype;
    _proto.unsubscribe = function unsubscribe() {
      if (this._state !== "closed") {
        closeSubscription(this);
        cleanupSubscription(this);
      }
    };
    _createClass3(Subscription2, [{
      key: "closed",
      get: function() {
        return this._state === "closed";
      }
    }]);
    return Subscription2;
  }();
  var SubscriptionObserver = /* @__PURE__ */ function() {
    function SubscriptionObserver2(subscription2) {
      this._subscription = subscription2;
    }
    var _proto2 = SubscriptionObserver2.prototype;
    _proto2.next = function next(value) {
      onNotify(this._subscription, "next", value);
    };
    _proto2.error = function error(value) {
      onNotify(this._subscription, "error", value);
    };
    _proto2.complete = function complete() {
      onNotify(this._subscription, "complete");
    };
    _createClass3(SubscriptionObserver2, [{
      key: "closed",
      get: function() {
        return this._subscription._state === "closed";
      }
    }]);
    return SubscriptionObserver2;
  }();
  var Observable = /* @__PURE__ */ function() {
    function Observable2(subscriber) {
      if (!(this instanceof Observable2))
        throw new TypeError("Observable cannot be called as a function");
      if (typeof subscriber !== "function")
        throw new TypeError("Observable initializer must be a function");
      this._subscriber = subscriber;
    }
    var _proto3 = Observable2.prototype;
    _proto3.subscribe = function subscribe(observer) {
      if (typeof observer !== "object" || observer === null) {
        observer = {
          next: observer,
          error: arguments[1],
          complete: arguments[2]
        };
      }
      return new Subscription(observer, this._subscriber);
    };
    _proto3.forEach = function forEach2(fn) {
      var _this = this;
      return new Promise(function(resolve, reject) {
        if (typeof fn !== "function") {
          reject(new TypeError(fn + " is not a function"));
          return;
        }
        function done() {
          subscription2.unsubscribe();
          resolve();
        }
        var subscription2 = _this.subscribe({
          next: function(value) {
            try {
              fn(value, done);
            } catch (e) {
              reject(e);
              subscription2.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
      });
    };
    _proto3.map = function map(fn) {
      var _this2 = this;
      if (typeof fn !== "function")
        throw new TypeError(fn + " is not a function");
      var C = getSpecies(this);
      return new C(function(observer) {
        return _this2.subscribe({
          next: function(value) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            observer.complete();
          }
        });
      });
    };
    _proto3.filter = function filter(fn) {
      var _this3 = this;
      if (typeof fn !== "function")
        throw new TypeError(fn + " is not a function");
      var C = getSpecies(this);
      return new C(function(observer) {
        return _this3.subscribe({
          next: function(value) {
            try {
              if (!fn(value))
                return;
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            observer.complete();
          }
        });
      });
    };
    _proto3.reduce = function reduce(fn) {
      var _this4 = this;
      if (typeof fn !== "function")
        throw new TypeError(fn + " is not a function");
      var C = getSpecies(this);
      var hasSeed = arguments.length > 1;
      var hasValue = false;
      var seed = arguments[1];
      var acc = seed;
      return new C(function(observer) {
        return _this4.subscribe({
          next: function(value) {
            var first = !hasValue;
            hasValue = true;
            if (!first || hasSeed) {
              try {
                acc = fn(acc, value);
              } catch (e) {
                return observer.error(e);
              }
            } else {
              acc = value;
            }
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            if (!hasValue && !hasSeed)
              return observer.error(new TypeError("Cannot reduce an empty sequence"));
            observer.next(acc);
            observer.complete();
          }
        });
      });
    };
    _proto3.concat = function concat() {
      var _this5 = this;
      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }
      var C = getSpecies(this);
      return new C(function(observer) {
        var subscription2;
        var index = 0;
        function startNext(next) {
          subscription2 = next.subscribe({
            next: function(v) {
              observer.next(v);
            },
            error: function(e) {
              observer.error(e);
            },
            complete: function() {
              if (index === sources.length) {
                subscription2 = void 0;
                observer.complete();
              } else {
                startNext(C.from(sources[index++]));
              }
            }
          });
        }
        startNext(_this5);
        return function() {
          if (subscription2) {
            subscription2.unsubscribe();
            subscription2 = void 0;
          }
        };
      });
    };
    _proto3.flatMap = function flatMap(fn) {
      var _this6 = this;
      if (typeof fn !== "function")
        throw new TypeError(fn + " is not a function");
      var C = getSpecies(this);
      return new C(function(observer) {
        var subscriptions = [];
        var outer = _this6.subscribe({
          next: function(value) {
            if (fn) {
              try {
                value = fn(value);
              } catch (e) {
                return observer.error(e);
              }
            }
            var inner = C.from(value).subscribe({
              next: function(value2) {
                observer.next(value2);
              },
              error: function(e) {
                observer.error(e);
              },
              complete: function() {
                var i = subscriptions.indexOf(inner);
                if (i >= 0)
                  subscriptions.splice(i, 1);
                completeIfDone();
              }
            });
            subscriptions.push(inner);
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            completeIfDone();
          }
        });
        function completeIfDone() {
          if (outer.closed && subscriptions.length === 0)
            observer.complete();
        }
        return function() {
          subscriptions.forEach(function(s) {
            return s.unsubscribe();
          });
          outer.unsubscribe();
        };
      });
    };
    _proto3[SymbolObservable] = function() {
      return this;
    };
    Observable2.from = function from(x) {
      var C = typeof this === "function" ? this : Observable2;
      if (x == null)
        throw new TypeError(x + " is not an object");
      var method = getMethod(x, SymbolObservable);
      if (method) {
        var observable = method.call(x);
        if (Object(observable) !== observable)
          throw new TypeError(observable + " is not an object");
        if (isObservable(observable) && observable.constructor === C)
          return observable;
        return new C(function(observer) {
          return observable.subscribe(observer);
        });
      }
      if (hasSymbol("iterator")) {
        method = getMethod(x, SymbolIterator);
        if (method) {
          return new C(function(observer) {
            enqueue(function() {
              if (observer.closed)
                return;
              for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done; ) {
                var item = _step.value;
                observer.next(item);
                if (observer.closed)
                  return;
              }
              observer.complete();
            });
          });
        }
      }
      if (Array.isArray(x)) {
        return new C(function(observer) {
          enqueue(function() {
            if (observer.closed)
              return;
            for (var i = 0; i < x.length; ++i) {
              observer.next(x[i]);
              if (observer.closed)
                return;
            }
            observer.complete();
          });
        });
      }
      throw new TypeError(x + " is not observable");
    };
    Observable2.of = function of() {
      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }
      var C = typeof this === "function" ? this : Observable2;
      return new C(function(observer) {
        enqueue(function() {
          if (observer.closed)
            return;
          for (var i = 0; i < items.length; ++i) {
            observer.next(items[i]);
            if (observer.closed)
              return;
          }
          observer.complete();
        });
      });
    };
    _createClass3(Observable2, null, [{
      key: SymbolSpecies,
      get: function() {
        return this;
      }
    }]);
    return Observable2;
  }();
  if (hasSymbols()) {
    Object.defineProperty(Observable, Symbol("extensions"), {
      value: {
        symbol: SymbolObservable,
        hostReportError
      },
      configurable: true
    });
  }

  // node_modules/@apollo/client/node_modules/symbol-observable/es/ponyfill.js
  function symbolObservablePonyfill(root2) {
    var result2;
    var Symbol2 = root2.Symbol;
    if (typeof Symbol2 === "function") {
      if (Symbol2.observable) {
        result2 = Symbol2.observable;
      } else {
        if (typeof Symbol2.for === "function") {
          result2 = Symbol2.for("https://github.com/benlesh/symbol-observable");
        } else {
          result2 = Symbol2("https://github.com/benlesh/symbol-observable");
        }
        try {
          Symbol2.observable = result2;
        } catch (err) {
        }
      }
    } else {
      result2 = "@@observable";
    }
    return result2;
  }

  // node_modules/@apollo/client/node_modules/symbol-observable/es/index.js
  var root;
  if (typeof self !== "undefined") {
    root = self;
  } else if (typeof window !== "undefined") {
    root = window;
  } else if (typeof global !== "undefined") {
    root = global;
  } else if (typeof module !== "undefined") {
    root = module;
  } else {
    root = Function("return this")();
  }
  var result = symbolObservablePonyfill(root);

  // node_modules/@apollo/client/utilities/observables/Observable.js
  var prototype = Observable.prototype;
  var fakeObsSymbol = "@@observable";
  if (!prototype[fakeObsSymbol]) {
    prototype[fakeObsSymbol] = function() {
      return this;
    };
  }

  // node_modules/@apollo/client/utilities/common/cloneDeep.js
  var toString = Object.prototype.toString;
  function cloneDeep(value) {
    return cloneDeepHelper(value);
  }
  function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
      case "[object Array]": {
        seen = seen || new Map();
        if (seen.has(val))
          return seen.get(val);
        var copy_1 = val.slice(0);
        seen.set(val, copy_1);
        copy_1.forEach(function(child, i) {
          copy_1[i] = cloneDeepHelper(child, seen);
        });
        return copy_1;
      }
      case "[object Object]": {
        seen = seen || new Map();
        if (seen.has(val))
          return seen.get(val);
        var copy_2 = Object.create(Object.getPrototypeOf(val));
        seen.set(val, copy_2);
        Object.keys(val).forEach(function(key) {
          copy_2[key] = cloneDeepHelper(val[key], seen);
        });
        return copy_2;
      }
      default:
        return val;
    }
  }

  // node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js
  function deepFreeze(value) {
    var workSet = new Set([value]);
    workSet.forEach(function(obj) {
      if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
        Object.getOwnPropertyNames(obj).forEach(function(name) {
          if (isNonNullObject(obj[name]))
            workSet.add(obj[name]);
        });
      }
    });
    return value;
  }
  function shallowFreeze(obj) {
    if (__DEV__ && !Object.isFrozen(obj)) {
      try {
        Object.freeze(obj);
      } catch (e) {
        if (e instanceof TypeError)
          return null;
        throw e;
      }
    }
    return obj;
  }
  function maybeDeepFreeze(obj) {
    if (__DEV__) {
      deepFreeze(obj);
    }
    return obj;
  }

  // node_modules/@apollo/client/utilities/observables/iteration.js
  function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function(obs) {
      return obs[method] && observersWithMethod.push(obs);
    });
    observersWithMethod.forEach(function(obs) {
      return obs[method](argument);
    });
  }

  // node_modules/@apollo/client/utilities/observables/asyncMap.js
  function asyncMap(observable, mapFn, catchFn) {
    return new Observable(function(observer) {
      var next = observer.next, error = observer.error, complete = observer.complete;
      var activeCallbackCount = 0;
      var completed = false;
      var promiseQueue = {
        then: function(callback) {
          return new Promise(function(resolve) {
            return resolve(callback());
          });
        }
      };
      function makeCallback(examiner, delegate) {
        if (examiner) {
          return function(arg) {
            ++activeCallbackCount;
            var both = function() {
              return examiner(arg);
            };
            promiseQueue = promiseQueue.then(both, both).then(function(result2) {
              --activeCallbackCount;
              next && next.call(observer, result2);
              if (completed) {
                handler.complete();
              }
            }, function(error2) {
              --activeCallbackCount;
              throw error2;
            }).catch(function(caught) {
              error && error.call(observer, caught);
            });
          };
        } else {
          return function(arg) {
            return delegate && delegate.call(observer, arg);
          };
        }
      }
      var handler = {
        next: makeCallback(mapFn, next),
        error: makeCallback(catchFn, error),
        complete: function() {
          completed = true;
          if (!activeCallbackCount) {
            complete && complete.call(observer);
          }
        }
      };
      var sub = observable.subscribe(handler);
      return function() {
        return sub.unsubscribe();
      };
    });
  }

  // node_modules/@apollo/client/utilities/common/canUse.js
  var canUseWeakMap = typeof WeakMap === "function" && !(typeof navigator === "object" && navigator.product === "ReactNative");
  var canUseWeakSet = typeof WeakSet === "function";
  var canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";

  // node_modules/@apollo/client/utilities/observables/subclassing.js
  function fixObservableSubclass(subclass) {
    function set(key) {
      Object.defineProperty(subclass, key, { value: Observable });
    }
    if (canUseSymbol && Symbol.species) {
      set(Symbol.species);
    }
    set("@@species");
    return subclass;
  }

  // node_modules/@apollo/client/utilities/observables/Concast.js
  function isPromiseLike(value) {
    return value && typeof value.then === "function";
  }
  var Concast = function(_super) {
    __extends(Concast2, _super);
    function Concast2(sources) {
      var _this = _super.call(this, function(observer) {
        _this.addObserver(observer);
        return function() {
          return _this.removeObserver(observer);
        };
      }) || this;
      _this.observers = new Set();
      _this.addCount = 0;
      _this.promise = new Promise(function(resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      });
      _this.handlers = {
        next: function(result2) {
          if (_this.sub !== null) {
            _this.latest = ["next", result2];
            iterateObserversSafely(_this.observers, "next", result2);
          }
        },
        error: function(error) {
          var sub = _this.sub;
          if (sub !== null) {
            if (sub)
              setTimeout(function() {
                return sub.unsubscribe();
              });
            _this.sub = null;
            _this.latest = ["error", error];
            _this.reject(error);
            iterateObserversSafely(_this.observers, "error", error);
          }
        },
        complete: function() {
          if (_this.sub !== null) {
            var value = _this.sources.shift();
            if (!value) {
              _this.sub = null;
              if (_this.latest && _this.latest[0] === "next") {
                _this.resolve(_this.latest[1]);
              } else {
                _this.resolve();
              }
              iterateObserversSafely(_this.observers, "complete");
            } else if (isPromiseLike(value)) {
              value.then(function(obs) {
                return _this.sub = obs.subscribe(_this.handlers);
              });
            } else {
              _this.sub = value.subscribe(_this.handlers);
            }
          }
        }
      };
      _this.cancel = function(reason) {
        _this.reject(reason);
        _this.sources = [];
        _this.handlers.complete();
      };
      _this.promise.catch(function(_) {
      });
      if (typeof sources === "function") {
        sources = [new Observable(sources)];
      }
      if (isPromiseLike(sources)) {
        sources.then(function(iterable) {
          return _this.start(iterable);
        }, _this.handlers.error);
      } else {
        _this.start(sources);
      }
      return _this;
    }
    Concast2.prototype.start = function(sources) {
      if (this.sub !== void 0)
        return;
      this.sources = Array.from(sources);
      this.handlers.complete();
    };
    Concast2.prototype.deliverLastMessage = function(observer) {
      if (this.latest) {
        var nextOrError = this.latest[0];
        var method = observer[nextOrError];
        if (method) {
          method.call(observer, this.latest[1]);
        }
        if (this.sub === null && nextOrError === "next" && observer.complete) {
          observer.complete();
        }
      }
    };
    Concast2.prototype.addObserver = function(observer) {
      if (!this.observers.has(observer)) {
        this.deliverLastMessage(observer);
        this.observers.add(observer);
        ++this.addCount;
      }
    };
    Concast2.prototype.removeObserver = function(observer, quietly) {
      if (this.observers.delete(observer) && --this.addCount < 1 && !quietly) {
        this.handlers.error(new Error("Observable cancelled prematurely"));
      }
    };
    Concast2.prototype.cleanup = function(callback) {
      var _this = this;
      var called = false;
      var once = function() {
        if (!called) {
          called = true;
          _this.observers.delete(observer);
          callback();
        }
      };
      var observer = {
        next: once,
        error: once,
        complete: once
      };
      var count = this.addCount;
      this.addObserver(observer);
      this.addCount = count;
    };
    return Concast2;
  }(Observable);
  fixObservableSubclass(Concast);

  // node_modules/@apollo/client/utilities/common/arrays.js
  function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
  }

  // node_modules/@apollo/client/utilities/common/errorHandling.js
  function graphQLResultHasError(result2) {
    return result2.errors && result2.errors.length > 0 || false;
  }

  // node_modules/@apollo/client/utilities/common/compact.js
  function compact() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      objects[_i] = arguments[_i];
    }
    var result2 = Object.create(null);
    objects.forEach(function(obj) {
      if (!obj)
        return;
      Object.keys(obj).forEach(function(key) {
        var value = obj[key];
        if (value !== void 0) {
          result2[key] = value;
        }
      });
    });
    return result2;
  }

  // node_modules/@apollo/client/utilities/common/makeUniqueId.js
  var prefixCounts = new Map();
  function makeUniqueId(prefix) {
    var count = prefixCounts.get(prefix) || 1;
    prefixCounts.set(prefix, count + 1);
    return prefix + ":" + count + ":" + Math.random().toString(36).slice(2);
  }

  // node_modules/@apollo/client/utilities/common/stringifyForDisplay.js
  function stringifyForDisplay(value) {
    var undefId = makeUniqueId("stringifyForDisplay");
    return JSON.stringify(value, function(key, value2) {
      return value2 === void 0 ? undefId : value2;
    }).split(JSON.stringify(undefId)).join("<undefined>");
  }

  // node_modules/@apollo/client/link/utils/fromError.js
  function fromError(errorValue) {
    return new Observable(function(observer) {
      observer.error(errorValue);
    });
  }

  // node_modules/@apollo/client/link/utils/throwServerError.js
  var throwServerError = function(response, result2, message) {
    var error = new Error(message);
    error.name = "ServerError";
    error.response = response;
    error.statusCode = response.status;
    error.result = result2;
    throw error;
  };

  // node_modules/@apollo/client/link/utils/validateOperation.js
  function validateOperation(operation) {
    var OPERATION_FIELDS = [
      "query",
      "operationName",
      "variables",
      "extensions",
      "context"
    ];
    for (var _i = 0, _a5 = Object.keys(operation); _i < _a5.length; _i++) {
      var key = _a5[_i];
      if (OPERATION_FIELDS.indexOf(key) < 0) {
        throw __DEV__ ? new InvariantError("illegal argument: " + key) : new InvariantError(26);
      }
    }
    return operation;
  }

  // node_modules/@apollo/client/link/utils/createOperation.js
  function createOperation(starting, operation) {
    var context = __assign({}, starting);
    var setContext = function(next) {
      if (typeof next === "function") {
        context = __assign(__assign({}, context), next(context));
      } else {
        context = __assign(__assign({}, context), next);
      }
    };
    var getContext = function() {
      return __assign({}, context);
    };
    Object.defineProperty(operation, "setContext", {
      enumerable: false,
      value: setContext
    });
    Object.defineProperty(operation, "getContext", {
      enumerable: false,
      value: getContext
    });
    return operation;
  }

  // node_modules/@apollo/client/link/utils/transformOperation.js
  function transformOperation(operation) {
    var transformedOperation = {
      variables: operation.variables || {},
      extensions: operation.extensions || {},
      operationName: operation.operationName,
      query: operation.query
    };
    if (!transformedOperation.operationName) {
      transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
    }
    return transformedOperation;
  }

  // node_modules/@apollo/client/link/core/ApolloLink.js
  function passthrough(op, forward) {
    return forward ? forward(op) : Observable.of();
  }
  function toLink(handler) {
    return typeof handler === "function" ? new ApolloLink(handler) : handler;
  }
  function isTerminating(link2) {
    return link2.request.length <= 1;
  }
  var LinkError = function(_super) {
    __extends(LinkError2, _super);
    function LinkError2(message, link2) {
      var _this = _super.call(this, message) || this;
      _this.link = link2;
      return _this;
    }
    return LinkError2;
  }(Error);
  var ApolloLink = function() {
    function ApolloLink2(request) {
      if (request)
        this.request = request;
    }
    ApolloLink2.empty = function() {
      return new ApolloLink2(function() {
        return Observable.of();
      });
    };
    ApolloLink2.from = function(links) {
      if (links.length === 0)
        return ApolloLink2.empty();
      return links.map(toLink).reduce(function(x, y) {
        return x.concat(y);
      });
    };
    ApolloLink2.split = function(test, left, right) {
      var leftLink = toLink(left);
      var rightLink = toLink(right || new ApolloLink2(passthrough));
      if (isTerminating(leftLink) && isTerminating(rightLink)) {
        return new ApolloLink2(function(operation) {
          return test(operation) ? leftLink.request(operation) || Observable.of() : rightLink.request(operation) || Observable.of();
        });
      } else {
        return new ApolloLink2(function(operation, forward) {
          return test(operation) ? leftLink.request(operation, forward) || Observable.of() : rightLink.request(operation, forward) || Observable.of();
        });
      }
    };
    ApolloLink2.execute = function(link2, operation) {
      return link2.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of();
    };
    ApolloLink2.concat = function(first, second) {
      var firstLink = toLink(first);
      if (isTerminating(firstLink)) {
        __DEV__ && invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
        return firstLink;
      }
      var nextLink = toLink(second);
      if (isTerminating(nextLink)) {
        return new ApolloLink2(function(operation) {
          return firstLink.request(operation, function(op) {
            return nextLink.request(op) || Observable.of();
          }) || Observable.of();
        });
      } else {
        return new ApolloLink2(function(operation, forward) {
          return firstLink.request(operation, function(op) {
            return nextLink.request(op, forward) || Observable.of();
          }) || Observable.of();
        });
      }
    };
    ApolloLink2.prototype.split = function(test, left, right) {
      return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
    };
    ApolloLink2.prototype.concat = function(next) {
      return ApolloLink2.concat(this, next);
    };
    ApolloLink2.prototype.request = function(operation, forward) {
      throw __DEV__ ? new InvariantError("request is not implemented") : new InvariantError(21);
    };
    ApolloLink2.prototype.onError = function(error, observer) {
      if (observer && observer.error) {
        observer.error(error);
        return false;
      }
      throw error;
    };
    ApolloLink2.prototype.setOnError = function(fn) {
      this.onError = fn;
      return this;
    };
    return ApolloLink2;
  }();

  // node_modules/@apollo/client/link/core/execute.js
  var execute = ApolloLink.execute;

  // node_modules/@apollo/client/version.js
  var version = "3.4.16";

  // node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js
  var hasOwnProperty2 = Object.prototype.hasOwnProperty;
  function parseAndCheckHttpResponse(operations) {
    return function(response) {
      return response.text().then(function(bodyText) {
        try {
          return JSON.parse(bodyText);
        } catch (err) {
          var parseError = err;
          parseError.name = "ServerParseError";
          parseError.response = response;
          parseError.statusCode = response.status;
          parseError.bodyText = bodyText;
          throw parseError;
        }
      }).then(function(result2) {
        if (response.status >= 300) {
          throwServerError(response, result2, "Response not successful: Received status code " + response.status);
        }
        if (!Array.isArray(result2) && !hasOwnProperty2.call(result2, "data") && !hasOwnProperty2.call(result2, "errors")) {
          throwServerError(response, result2, "Server response was missing for query '" + (Array.isArray(operations) ? operations.map(function(op) {
            return op.operationName;
          }) : operations.operationName) + "'.");
        }
        return result2;
      });
    };
  }

  // node_modules/@apollo/client/link/http/serializeFetchParameter.js
  var serializeFetchParameter = function(p, label) {
    var serialized;
    try {
      serialized = JSON.stringify(p);
    } catch (e) {
      var parseError = __DEV__ ? new InvariantError("Network request failed. " + label + " is not serializable: " + e.message) : new InvariantError(23);
      parseError.parseError = e;
      throw parseError;
    }
    return serialized;
  };

  // node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js
  var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false
  };
  var defaultHeaders = {
    accept: "*/*",
    "content-type": "application/json"
  };
  var defaultOptions = {
    method: "POST"
  };
  var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions
  };
  var selectHttpOptionsAndBody = function(operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      configs[_i - 2] = arguments[_i];
    }
    var options = __assign(__assign({}, fallbackConfig.options), { headers: fallbackConfig.headers, credentials: fallbackConfig.credentials });
    var http = fallbackConfig.http || {};
    configs.forEach(function(config) {
      options = __assign(__assign(__assign({}, options), config.options), { headers: __assign(__assign({}, options.headers), headersToLowerCase(config.headers)) });
      if (config.credentials)
        options.credentials = config.credentials;
      http = __assign(__assign({}, http), config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName, variables };
    if (http.includeExtensions)
      body.extensions = extensions;
    if (http.includeQuery)
      body.query = print(query);
    return {
      options,
      body
    };
  };
  function headersToLowerCase(headers) {
    if (headers) {
      var normalized_1 = Object.create(null);
      Object.keys(Object(headers)).forEach(function(name) {
        normalized_1[name.toLowerCase()] = headers[name];
      });
      return normalized_1;
    }
    return headers;
  }

  // node_modules/@apollo/client/link/http/checkFetcher.js
  var checkFetcher = function(fetcher) {
    if (!fetcher && typeof fetch === "undefined") {
      throw __DEV__ ? new InvariantError(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new InvariantError(22);
    }
  };

  // node_modules/@apollo/client/link/http/createSignalIfSupported.js
  var createSignalIfSupported = function() {
    if (typeof AbortController === "undefined")
      return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller, signal };
  };

  // node_modules/@apollo/client/link/http/selectURI.js
  var selectURI = function(operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
      return contextURI;
    } else if (typeof fallbackURI === "function") {
      return fallbackURI(operation);
    } else {
      return fallbackURI || "/graphql";
    }
  };

  // node_modules/@apollo/client/link/http/rewriteURIForGET.js
  function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function(key, value) {
      queryParams.push(key + "=" + encodeURIComponent(value));
    };
    if ("query" in body) {
      addQueryParam("query", body.query);
    }
    if (body.operationName) {
      addQueryParam("operationName", body.operationName);
    }
    if (body.variables) {
      var serializedVariables = void 0;
      try {
        serializedVariables = serializeFetchParameter(body.variables, "Variables map");
      } catch (parseError) {
        return { parseError };
      }
      addQueryParam("variables", serializedVariables);
    }
    if (body.extensions) {
      var serializedExtensions = void 0;
      try {
        serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
      } catch (parseError) {
        return { parseError };
      }
      addQueryParam("extensions", serializedExtensions);
    }
    var fragment = "", preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf("#");
    if (fragmentStart !== -1) {
      fragment = chosenURI.substr(fragmentStart);
      preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
    var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
    return { newURI };
  }

  // node_modules/@apollo/client/link/http/createHttpLink.js
  var backupFetch = maybe(function() {
    return fetch;
  });
  var createHttpLink = function(linkOptions) {
    if (linkOptions === void 0) {
      linkOptions = {};
    }
    var _a5 = linkOptions.uri, uri = _a5 === void 0 ? "/graphql" : _a5, preferredFetch = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, _b = linkOptions.includeUnusedVariables, includeUnusedVariables = _b === void 0 ? false : _b, requestOptions = __rest(linkOptions, ["uri", "fetch", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
    if (__DEV__) {
      checkFetcher(preferredFetch || backupFetch);
    }
    var linkConfig = {
      http: { includeExtensions },
      options: requestOptions.fetchOptions,
      credentials: requestOptions.credentials,
      headers: requestOptions.headers
    };
    return new ApolloLink(function(operation) {
      var chosenURI = selectURI(operation, uri);
      var context = operation.getContext();
      var clientAwarenessHeaders = {};
      if (context.clientAwareness) {
        var _a6 = context.clientAwareness, name_1 = _a6.name, version2 = _a6.version;
        if (name_1) {
          clientAwarenessHeaders["apollographql-client-name"] = name_1;
        }
        if (version2) {
          clientAwarenessHeaders["apollographql-client-version"] = version2;
        }
      }
      var contextHeaders = __assign(__assign({}, clientAwarenessHeaders), context.headers);
      var contextConfig = {
        http: context.http,
        options: context.fetchOptions,
        credentials: context.credentials,
        headers: contextHeaders
      };
      var _b2 = selectHttpOptionsAndBody(operation, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
      if (body.variables && !includeUnusedVariables) {
        var unusedNames_1 = new Set(Object.keys(body.variables));
        visit(operation.query, {
          Variable: function(node, _key, parent) {
            if (parent && parent.kind !== "VariableDefinition") {
              unusedNames_1.delete(node.name.value);
            }
          }
        });
        if (unusedNames_1.size) {
          body.variables = __assign({}, body.variables);
          unusedNames_1.forEach(function(name) {
            delete body.variables[name];
          });
        }
      }
      var controller;
      if (!options.signal) {
        var _c = createSignalIfSupported(), _controller = _c.controller, signal = _c.signal;
        controller = _controller;
        if (controller)
          options.signal = signal;
      }
      var definitionIsMutation = function(d) {
        return d.kind === "OperationDefinition" && d.operation === "mutation";
      };
      if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
        options.method = "GET";
      }
      if (options.method === "GET") {
        var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
        if (parseError) {
          return fromError(parseError);
        }
        chosenURI = newURI;
      } else {
        try {
          options.body = serializeFetchParameter(body, "Payload");
        } catch (parseError2) {
          return fromError(parseError2);
        }
      }
      return new Observable(function(observer) {
        var currentFetch = preferredFetch || maybe(function() {
          return fetch;
        }) || backupFetch;
        currentFetch(chosenURI, options).then(function(response) {
          operation.setContext({ response });
          return response;
        }).then(parseAndCheckHttpResponse(operation)).then(function(result2) {
          observer.next(result2);
          observer.complete();
          return result2;
        }).catch(function(err) {
          if (err.name === "AbortError")
            return;
          if (err.result && err.result.errors && err.result.data) {
            observer.next(err.result);
          }
          observer.error(err);
        });
        return function() {
          if (controller)
            controller.abort();
        };
      });
    });
  };

  // node_modules/@apollo/client/link/http/HttpLink.js
  var HttpLink = function(_super) {
    __extends(HttpLink2, _super);
    function HttpLink2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this, createHttpLink(options).request) || this;
      _this.options = options;
      return _this;
    }
    return HttpLink2;
  }(ApolloLink);

  // node_modules/@wry/equality/lib/equality.esm.js
  var _a2 = Object.prototype;
  var toString2 = _a2.toString;
  var hasOwnProperty3 = _a2.hasOwnProperty;
  var fnToStr = Function.prototype.toString;
  var previousComparisons = new Map();
  function equal(a, b) {
    try {
      return check(a, b);
    } finally {
      previousComparisons.clear();
    }
  }
  function check(a, b) {
    if (a === b) {
      return true;
    }
    var aTag = toString2.call(a);
    var bTag = toString2.call(b);
    if (aTag !== bTag) {
      return false;
    }
    switch (aTag) {
      case "[object Array]":
        if (a.length !== b.length)
          return false;
      case "[object Object]": {
        if (previouslyCompared(a, b))
          return true;
        var aKeys = definedKeys(a);
        var bKeys = definedKeys(b);
        var keyCount = aKeys.length;
        if (keyCount !== bKeys.length)
          return false;
        for (var k = 0; k < keyCount; ++k) {
          if (!hasOwnProperty3.call(b, aKeys[k])) {
            return false;
          }
        }
        for (var k = 0; k < keyCount; ++k) {
          var key = aKeys[k];
          if (!check(a[key], b[key])) {
            return false;
          }
        }
        return true;
      }
      case "[object Error]":
        return a.name === b.name && a.message === b.message;
      case "[object Number]":
        if (a !== a)
          return b !== b;
      case "[object Boolean]":
      case "[object Date]":
        return +a === +b;
      case "[object RegExp]":
      case "[object String]":
        return a == "" + b;
      case "[object Map]":
      case "[object Set]": {
        if (a.size !== b.size)
          return false;
        if (previouslyCompared(a, b))
          return true;
        var aIterator = a.entries();
        var isMap = aTag === "[object Map]";
        while (true) {
          var info = aIterator.next();
          if (info.done)
            break;
          var _a5 = info.value, aKey = _a5[0], aValue = _a5[1];
          if (!b.has(aKey)) {
            return false;
          }
          if (isMap && !check(aValue, b.get(aKey))) {
            return false;
          }
        }
        return true;
      }
      case "[object Uint16Array]":
      case "[object Uint8Array]":
      case "[object Uint32Array]":
      case "[object Int32Array]":
      case "[object Int8Array]":
      case "[object Int16Array]":
      case "[object ArrayBuffer]":
        a = new Uint8Array(a);
        b = new Uint8Array(b);
      case "[object DataView]": {
        var len = a.byteLength;
        if (len === b.byteLength) {
          while (len-- && a[len] === b[len]) {
          }
        }
        return len === -1;
      }
      case "[object AsyncFunction]":
      case "[object GeneratorFunction]":
      case "[object AsyncGeneratorFunction]":
      case "[object Function]": {
        var aCode = fnToStr.call(a);
        if (aCode !== fnToStr.call(b)) {
          return false;
        }
        return !endsWith(aCode, nativeCodeSuffix);
      }
    }
    return false;
  }
  function definedKeys(obj) {
    return Object.keys(obj).filter(isDefinedKey, obj);
  }
  function isDefinedKey(key) {
    return this[key] !== void 0;
  }
  var nativeCodeSuffix = "{ [native code] }";
  function endsWith(full, suffix) {
    var fromIndex = full.length - suffix.length;
    return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
  }
  function previouslyCompared(a, b) {
    var bSet = previousComparisons.get(a);
    if (bSet) {
      if (bSet.has(b))
        return true;
    } else {
      previousComparisons.set(a, bSet = new Set());
    }
    bSet.add(b);
    return false;
  }

  // node_modules/@wry/trie/lib/trie.esm.js
  var defaultMakeData = function() {
    return Object.create(null);
  };
  var _a3 = Array.prototype;
  var forEach = _a3.forEach;
  var slice = _a3.slice;
  var Trie = function() {
    function Trie2(weakness, makeData) {
      if (weakness === void 0) {
        weakness = true;
      }
      if (makeData === void 0) {
        makeData = defaultMakeData;
      }
      this.weakness = weakness;
      this.makeData = makeData;
    }
    Trie2.prototype.lookup = function() {
      var array = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
      }
      return this.lookupArray(array);
    };
    Trie2.prototype.lookupArray = function(array) {
      var node = this;
      forEach.call(array, function(key) {
        return node = node.getChildTrie(key);
      });
      return node.data || (node.data = this.makeData(slice.call(array)));
    };
    Trie2.prototype.getChildTrie = function(key) {
      var map = this.weakness && isObjRef(key) ? this.weak || (this.weak = new WeakMap()) : this.strong || (this.strong = new Map());
      var child = map.get(key);
      if (!child)
        map.set(key, child = new Trie2(this.weakness, this.makeData));
      return child;
    };
    return Trie2;
  }();
  function isObjRef(value) {
    switch (typeof value) {
      case "object":
        if (value === null)
          break;
      case "function":
        return true;
    }
    return false;
  }

  // node_modules/@wry/context/lib/context.esm.js
  var currentContext = null;
  var MISSING_VALUE = {};
  var idCounter = 1;
  var makeSlotClass = function() {
    return function() {
      function Slot2() {
        this.id = [
          "slot",
          idCounter++,
          Date.now(),
          Math.random().toString(36).slice(2)
        ].join(":");
      }
      Slot2.prototype.hasValue = function() {
        for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
          if (this.id in context_1.slots) {
            var value = context_1.slots[this.id];
            if (value === MISSING_VALUE)
              break;
            if (context_1 !== currentContext) {
              currentContext.slots[this.id] = value;
            }
            return true;
          }
        }
        if (currentContext) {
          currentContext.slots[this.id] = MISSING_VALUE;
        }
        return false;
      };
      Slot2.prototype.getValue = function() {
        if (this.hasValue()) {
          return currentContext.slots[this.id];
        }
      };
      Slot2.prototype.withValue = function(value, callback, args, thisArg) {
        var _a5;
        var slots = (_a5 = {
          __proto__: null
        }, _a5[this.id] = value, _a5);
        var parent = currentContext;
        currentContext = { parent, slots };
        try {
          return callback.apply(thisArg, args);
        } finally {
          currentContext = parent;
        }
      };
      Slot2.bind = function(callback) {
        var context = currentContext;
        return function() {
          var saved = currentContext;
          try {
            currentContext = context;
            return callback.apply(this, arguments);
          } finally {
            currentContext = saved;
          }
        };
      };
      Slot2.noContext = function(callback, args, thisArg) {
        if (currentContext) {
          var saved = currentContext;
          try {
            currentContext = null;
            return callback.apply(thisArg, args);
          } finally {
            currentContext = saved;
          }
        } else {
          return callback.apply(thisArg, args);
        }
      };
      return Slot2;
    }();
  };
  var globalKey = "@wry/context:Slot";
  var host = Array;
  var Slot = host[globalKey] || function() {
    var Slot2 = makeSlotClass();
    try {
      Object.defineProperty(host, globalKey, {
        value: host[globalKey] = Slot2,
        enumerable: false,
        writable: false,
        configurable: false
      });
    } finally {
      return Slot2;
    }
  }();
  var bind = Slot.bind;
  var noContext = Slot.noContext;

  // node_modules/optimism/lib/bundle.esm.js
  function defaultDispose() {
  }
  var Cache = function() {
    function Cache3(max, dispose) {
      if (max === void 0) {
        max = Infinity;
      }
      if (dispose === void 0) {
        dispose = defaultDispose;
      }
      this.max = max;
      this.dispose = dispose;
      this.map = new Map();
      this.newest = null;
      this.oldest = null;
    }
    Cache3.prototype.has = function(key) {
      return this.map.has(key);
    };
    Cache3.prototype.get = function(key) {
      var node = this.getNode(key);
      return node && node.value;
    };
    Cache3.prototype.getNode = function(key) {
      var node = this.map.get(key);
      if (node && node !== this.newest) {
        var older = node.older, newer = node.newer;
        if (newer) {
          newer.older = older;
        }
        if (older) {
          older.newer = newer;
        }
        node.older = this.newest;
        node.older.newer = node;
        node.newer = null;
        this.newest = node;
        if (node === this.oldest) {
          this.oldest = newer;
        }
      }
      return node;
    };
    Cache3.prototype.set = function(key, value) {
      var node = this.getNode(key);
      if (node) {
        return node.value = value;
      }
      node = {
        key,
        value,
        newer: null,
        older: this.newest
      };
      if (this.newest) {
        this.newest.newer = node;
      }
      this.newest = node;
      this.oldest = this.oldest || node;
      this.map.set(key, node);
      return node.value;
    };
    Cache3.prototype.clean = function() {
      while (this.oldest && this.map.size > this.max) {
        this.delete(this.oldest.key);
      }
    };
    Cache3.prototype.delete = function(key) {
      var node = this.map.get(key);
      if (node) {
        if (node === this.newest) {
          this.newest = node.older;
        }
        if (node === this.oldest) {
          this.oldest = node.newer;
        }
        if (node.newer) {
          node.newer.older = node.older;
        }
        if (node.older) {
          node.older.newer = node.newer;
        }
        this.map.delete(key);
        this.dispose(node.value, key);
        return true;
      }
      return false;
    };
    return Cache3;
  }();
  var parentEntrySlot = new Slot();
  var _a4;
  var hasOwnProperty4 = Object.prototype.hasOwnProperty;
  var toArray = (_a4 = Array.from, _a4 === void 0 ? function(collection) {
    var array = [];
    collection.forEach(function(item) {
      return array.push(item);
    });
    return array;
  } : _a4);
  function maybeUnsubscribe(entryOrDep) {
    var unsubscribe = entryOrDep.unsubscribe;
    if (typeof unsubscribe === "function") {
      entryOrDep.unsubscribe = void 0;
      unsubscribe();
    }
  }
  var emptySetPool = [];
  var POOL_TARGET_SIZE = 100;
  function assert(condition, optionalMessage) {
    if (!condition) {
      throw new Error(optionalMessage || "assertion failure");
    }
  }
  function valueIs(a, b) {
    var len = a.length;
    return len > 0 && len === b.length && a[len - 1] === b[len - 1];
  }
  function valueGet(value) {
    switch (value.length) {
      case 0:
        throw new Error("unknown value");
      case 1:
        return value[0];
      case 2:
        throw value[1];
    }
  }
  function valueCopy(value) {
    return value.slice(0);
  }
  var Entry = function() {
    function Entry2(fn) {
      this.fn = fn;
      this.parents = new Set();
      this.childValues = new Map();
      this.dirtyChildren = null;
      this.dirty = true;
      this.recomputing = false;
      this.value = [];
      this.deps = null;
      ++Entry2.count;
    }
    Entry2.prototype.peek = function() {
      if (this.value.length === 1 && !mightBeDirty(this)) {
        rememberParent(this);
        return this.value[0];
      }
    };
    Entry2.prototype.recompute = function(args) {
      assert(!this.recomputing, "already recomputing");
      rememberParent(this);
      return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
    };
    Entry2.prototype.setDirty = function() {
      if (this.dirty)
        return;
      this.dirty = true;
      this.value.length = 0;
      reportDirty(this);
      maybeUnsubscribe(this);
    };
    Entry2.prototype.dispose = function() {
      var _this = this;
      this.setDirty();
      forgetChildren(this);
      eachParent(this, function(parent, child) {
        parent.setDirty();
        forgetChild(parent, _this);
      });
    };
    Entry2.prototype.forget = function() {
      this.dispose();
    };
    Entry2.prototype.dependOn = function(dep2) {
      dep2.add(this);
      if (!this.deps) {
        this.deps = emptySetPool.pop() || new Set();
      }
      this.deps.add(dep2);
    };
    Entry2.prototype.forgetDeps = function() {
      var _this = this;
      if (this.deps) {
        toArray(this.deps).forEach(function(dep2) {
          return dep2.delete(_this);
        });
        this.deps.clear();
        emptySetPool.push(this.deps);
        this.deps = null;
      }
    };
    Entry2.count = 0;
    return Entry2;
  }();
  function rememberParent(child) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
      child.parents.add(parent);
      if (!parent.childValues.has(child)) {
        parent.childValues.set(child, []);
      }
      if (mightBeDirty(child)) {
        reportDirtyChild(parent, child);
      } else {
        reportCleanChild(parent, child);
      }
      return parent;
    }
  }
  function reallyRecompute(entry, args) {
    forgetChildren(entry);
    parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
    if (maybeSubscribe(entry, args)) {
      setClean(entry);
    }
    return valueGet(entry.value);
  }
  function recomputeNewValue(entry, args) {
    entry.recomputing = true;
    entry.value.length = 0;
    try {
      entry.value[0] = entry.fn.apply(null, args);
    } catch (e) {
      entry.value[1] = e;
    }
    entry.recomputing = false;
  }
  function mightBeDirty(entry) {
    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
  }
  function setClean(entry) {
    entry.dirty = false;
    if (mightBeDirty(entry)) {
      return;
    }
    reportClean(entry);
  }
  function reportDirty(child) {
    eachParent(child, reportDirtyChild);
  }
  function reportClean(child) {
    eachParent(child, reportCleanChild);
  }
  function eachParent(child, callback) {
    var parentCount = child.parents.size;
    if (parentCount) {
      var parents = toArray(child.parents);
      for (var i = 0; i < parentCount; ++i) {
        callback(parents[i], child);
      }
    }
  }
  function reportDirtyChild(parent, child) {
    assert(parent.childValues.has(child));
    assert(mightBeDirty(child));
    var parentWasClean = !mightBeDirty(parent);
    if (!parent.dirtyChildren) {
      parent.dirtyChildren = emptySetPool.pop() || new Set();
    } else if (parent.dirtyChildren.has(child)) {
      return;
    }
    parent.dirtyChildren.add(child);
    if (parentWasClean) {
      reportDirty(parent);
    }
  }
  function reportCleanChild(parent, child) {
    assert(parent.childValues.has(child));
    assert(!mightBeDirty(child));
    var childValue = parent.childValues.get(child);
    if (childValue.length === 0) {
      parent.childValues.set(child, valueCopy(child.value));
    } else if (!valueIs(childValue, child.value)) {
      parent.setDirty();
    }
    removeDirtyChild(parent, child);
    if (mightBeDirty(parent)) {
      return;
    }
    reportClean(parent);
  }
  function removeDirtyChild(parent, child) {
    var dc = parent.dirtyChildren;
    if (dc) {
      dc.delete(child);
      if (dc.size === 0) {
        if (emptySetPool.length < POOL_TARGET_SIZE) {
          emptySetPool.push(dc);
        }
        parent.dirtyChildren = null;
      }
    }
  }
  function forgetChildren(parent) {
    if (parent.childValues.size > 0) {
      parent.childValues.forEach(function(_value, child) {
        forgetChild(parent, child);
      });
    }
    parent.forgetDeps();
    assert(parent.dirtyChildren === null);
  }
  function forgetChild(parent, child) {
    child.parents.delete(parent);
    parent.childValues.delete(child);
    removeDirtyChild(parent, child);
  }
  function maybeSubscribe(entry, args) {
    if (typeof entry.subscribe === "function") {
      try {
        maybeUnsubscribe(entry);
        entry.unsubscribe = entry.subscribe.apply(null, args);
      } catch (e) {
        entry.setDirty();
        return false;
      }
    }
    return true;
  }
  var EntryMethods = {
    setDirty: true,
    dispose: true,
    forget: true
  };
  function dep(options) {
    var depsByKey = new Map();
    var subscribe = options && options.subscribe;
    function depend(key) {
      var parent = parentEntrySlot.getValue();
      if (parent) {
        var dep_1 = depsByKey.get(key);
        if (!dep_1) {
          depsByKey.set(key, dep_1 = new Set());
        }
        parent.dependOn(dep_1);
        if (typeof subscribe === "function") {
          maybeUnsubscribe(dep_1);
          dep_1.unsubscribe = subscribe(key);
        }
      }
    }
    depend.dirty = function dirty(key, entryMethodName) {
      var dep2 = depsByKey.get(key);
      if (dep2) {
        var m_1 = entryMethodName && hasOwnProperty4.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
        toArray(dep2).forEach(function(entry) {
          return entry[m_1]();
        });
        depsByKey.delete(key);
        maybeUnsubscribe(dep2);
      }
    };
    return depend;
  }
  function makeDefaultMakeCacheKeyFunction() {
    var keyTrie = new Trie(typeof WeakMap === "function");
    return function() {
      return keyTrie.lookupArray(arguments);
    };
  }
  var defaultMakeCacheKey = makeDefaultMakeCacheKeyFunction();
  var caches = new Set();
  function wrap2(originalFunction, options) {
    if (options === void 0) {
      options = Object.create(null);
    }
    var cache2 = new Cache(options.max || Math.pow(2, 16), function(entry) {
      return entry.dispose();
    });
    var keyArgs = options.keyArgs;
    var makeCacheKey = options.makeCacheKey || makeDefaultMakeCacheKeyFunction();
    var optimistic = function() {
      var key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
      if (key === void 0) {
        return originalFunction.apply(null, arguments);
      }
      var entry = cache2.get(key);
      if (!entry) {
        cache2.set(key, entry = new Entry(originalFunction));
        entry.subscribe = options.subscribe;
        entry.forget = function() {
          return cache2.delete(key);
        };
      }
      var value = entry.recompute(Array.prototype.slice.call(arguments));
      cache2.set(key, entry);
      caches.add(cache2);
      if (!parentEntrySlot.hasValue()) {
        caches.forEach(function(cache3) {
          return cache3.clean();
        });
        caches.clear();
      }
      return value;
    };
    Object.defineProperty(optimistic, "size", {
      get: function() {
        return cache2["map"].size;
      },
      configurable: false,
      enumerable: false
    });
    function dirtyKey(key) {
      var entry = cache2.get(key);
      if (entry) {
        entry.setDirty();
      }
    }
    optimistic.dirtyKey = dirtyKey;
    optimistic.dirty = function dirty() {
      dirtyKey(makeCacheKey.apply(null, arguments));
    };
    function peekKey(key) {
      var entry = cache2.get(key);
      if (entry) {
        return entry.peek();
      }
    }
    optimistic.peekKey = peekKey;
    optimistic.peek = function peek() {
      return peekKey(makeCacheKey.apply(null, arguments));
    };
    function forgetKey(key) {
      return cache2.delete(key);
    }
    optimistic.forgetKey = forgetKey;
    optimistic.forget = function forget() {
      return forgetKey(makeCacheKey.apply(null, arguments));
    };
    optimistic.makeCacheKey = makeCacheKey;
    optimistic.getKey = keyArgs ? function getKey() {
      return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
    } : makeCacheKey;
    return Object.freeze(optimistic);
  }

  // node_modules/@apollo/client/cache/core/cache.js
  var ApolloCache = function() {
    function ApolloCache2() {
      this.getFragmentDoc = wrap2(getFragmentQueryDocument);
    }
    ApolloCache2.prototype.batch = function(options) {
      var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
      this.performTransaction(options.update, optimisticId);
    };
    ApolloCache2.prototype.recordOptimisticTransaction = function(transaction, optimisticId) {
      this.performTransaction(transaction, optimisticId);
    };
    ApolloCache2.prototype.transformDocument = function(document2) {
      return document2;
    };
    ApolloCache2.prototype.identify = function(object) {
      return;
    };
    ApolloCache2.prototype.gc = function() {
      return [];
    };
    ApolloCache2.prototype.modify = function(options) {
      return false;
    };
    ApolloCache2.prototype.transformForLink = function(document2) {
      return document2;
    };
    ApolloCache2.prototype.readQuery = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = !!options.optimistic;
      }
      return this.read(__assign(__assign({}, options), { rootId: options.id || "ROOT_QUERY", optimistic }));
    };
    ApolloCache2.prototype.readFragment = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = !!options.optimistic;
      }
      return this.read(__assign(__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic }));
    };
    ApolloCache2.prototype.writeQuery = function(_a5) {
      var id = _a5.id, data = _a5.data, options = __rest(_a5, ["id", "data"]);
      return this.write(Object.assign(options, {
        dataId: id || "ROOT_QUERY",
        result: data
      }));
    };
    ApolloCache2.prototype.writeFragment = function(_a5) {
      var id = _a5.id, data = _a5.data, fragment = _a5.fragment, fragmentName = _a5.fragmentName, options = __rest(_a5, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(options, {
        query: this.getFragmentDoc(fragment, fragmentName),
        dataId: id,
        result: data
      }));
    };
    return ApolloCache2;
  }();

  // node_modules/@apollo/client/cache/core/types/common.js
  var MissingFieldError = function(_super) {
    __extends(MissingFieldError2, _super);
    function MissingFieldError2(message, path, query, variables) {
      var _this = _super.call(this, message) || this;
      _this.message = message;
      _this.path = path;
      _this.query = query;
      _this.variables = variables;
      _this.__proto__ = MissingFieldError2.prototype;
      return _this;
    }
    return MissingFieldError2;
  }(Error);

  // node_modules/@apollo/client/cache/inmemory/helpers.js
  var hasOwn = Object.prototype.hasOwnProperty;
  function defaultDataIdFromObject(_a5, context) {
    var __typename = _a5.__typename, id = _a5.id, _id = _a5._id;
    if (typeof __typename === "string") {
      if (context) {
        context.keyObject = id !== void 0 ? { id } : _id !== void 0 ? { _id } : void 0;
      }
      if (id === void 0)
        id = _id;
      if (id !== void 0) {
        return __typename + ":" + (typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
      }
    }
  }
  var defaultConfig = {
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    canonizeResults: false
  };
  function normalizeConfig(config) {
    return compact(defaultConfig, config);
  }
  function shouldCanonizeResults(config) {
    var value = config.canonizeResults;
    return value === void 0 ? defaultConfig.canonizeResults : value;
  }
  function getTypenameFromStoreObject(store, objectOrReference) {
    return isReference(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
  }
  var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
  function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
  }
  function selectionSetMatchesResult(selectionSet, result2, variables) {
    if (isNonNullObject(result2)) {
      return Array.isArray(result2) ? result2.every(function(item) {
        return selectionSetMatchesResult(selectionSet, item, variables);
      }) : selectionSet.selections.every(function(field) {
        if (isField(field) && shouldInclude(field, variables)) {
          var key = resultKeyNameFromField(field);
          return hasOwn.call(result2, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result2[key], variables));
        }
        return true;
      });
    }
    return false;
  }
  function storeValueIsStoreObject(value) {
    return isNonNullObject(value) && !isReference(value) && !Array.isArray(value);
  }
  function makeProcessedFieldsMerger() {
    return new DeepMerger();
  }

  // node_modules/@apollo/client/cache/inmemory/entityStore.js
  var DELETE = Object.create(null);
  var delModifier = function() {
    return DELETE;
  };
  var INVALIDATE = Object.create(null);
  var EntityStore = function() {
    function EntityStore2(policies, group) {
      var _this = this;
      this.policies = policies;
      this.group = group;
      this.data = Object.create(null);
      this.rootIds = Object.create(null);
      this.refs = Object.create(null);
      this.getFieldValue = function(objectOrReference, storeFieldName) {
        return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
      };
      this.canRead = function(objOrRef) {
        return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
      };
      this.toReference = function(objOrIdOrRef, mergeIntoStore) {
        if (typeof objOrIdOrRef === "string") {
          return makeReference(objOrIdOrRef);
        }
        if (isReference(objOrIdOrRef)) {
          return objOrIdOrRef;
        }
        var id = _this.policies.identify(objOrIdOrRef)[0];
        if (id) {
          var ref = makeReference(id);
          if (mergeIntoStore) {
            _this.merge(id, objOrIdOrRef);
          }
          return ref;
        }
      };
    }
    EntityStore2.prototype.toObject = function() {
      return __assign({}, this.data);
    };
    EntityStore2.prototype.has = function(dataId) {
      return this.lookup(dataId, true) !== void 0;
    };
    EntityStore2.prototype.get = function(dataId, fieldName) {
      this.group.depend(dataId, fieldName);
      if (hasOwn.call(this.data, dataId)) {
        var storeObject = this.data[dataId];
        if (storeObject && hasOwn.call(storeObject, fieldName)) {
          return storeObject[fieldName];
        }
      }
      if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) {
        return this.policies.rootTypenamesById[dataId];
      }
      if (this instanceof Layer) {
        return this.parent.get(dataId, fieldName);
      }
    };
    EntityStore2.prototype.lookup = function(dataId, dependOnExistence) {
      if (dependOnExistence)
        this.group.depend(dataId, "__exists");
      if (hasOwn.call(this.data, dataId)) {
        return this.data[dataId];
      }
      if (this instanceof Layer) {
        return this.parent.lookup(dataId, dependOnExistence);
      }
      if (this.policies.rootTypenamesById[dataId]) {
        return Object.create(null);
      }
    };
    EntityStore2.prototype.merge = function(older, newer) {
      var _this = this;
      var dataId;
      if (isReference(older))
        older = older.__ref;
      if (isReference(newer))
        newer = newer.__ref;
      var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
      var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
      if (!incoming)
        return;
      __DEV__ ? invariant(typeof dataId === "string", "store.merge expects a string ID") : invariant(typeof dataId === "string", 1);
      var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
      this.data[dataId] = merged;
      if (merged !== existing) {
        delete this.refs[dataId];
        if (this.group.caching) {
          var fieldsToDirty_1 = Object.create(null);
          if (!existing)
            fieldsToDirty_1.__exists = 1;
          Object.keys(incoming).forEach(function(storeFieldName) {
            if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
              fieldsToDirty_1[storeFieldName] = 1;
              var fieldName = fieldNameFromStoreName(storeFieldName);
              if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                fieldsToDirty_1[fieldName] = 1;
              }
              if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                delete merged[storeFieldName];
              }
            }
          });
          if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && this.policies.rootTypenamesById[dataId] === merged.__typename) {
            delete fieldsToDirty_1.__typename;
          }
          Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
            return _this.group.dirty(dataId, fieldName);
          });
        }
      }
    };
    EntityStore2.prototype.modify = function(dataId, fields) {
      var _this = this;
      var storeObject = this.lookup(dataId);
      if (storeObject) {
        var changedFields_1 = Object.create(null);
        var needToMerge_1 = false;
        var allDeleted_1 = true;
        var sharedDetails_1 = {
          DELETE,
          INVALIDATE,
          isReference,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(fieldNameOrOptions, from) {
            return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
              fieldName: fieldNameOrOptions,
              from: from || makeReference(dataId)
            } : fieldNameOrOptions, { store: _this });
          }
        };
        Object.keys(storeObject).forEach(function(storeFieldName) {
          var fieldName = fieldNameFromStoreName(storeFieldName);
          var fieldValue = storeObject[storeFieldName];
          if (fieldValue === void 0)
            return;
          var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
          if (modify) {
            var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign(__assign({}, sharedDetails_1), { fieldName, storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
            if (newValue === INVALIDATE) {
              _this.group.dirty(dataId, storeFieldName);
            } else {
              if (newValue === DELETE)
                newValue = void 0;
              if (newValue !== fieldValue) {
                changedFields_1[storeFieldName] = newValue;
                needToMerge_1 = true;
                fieldValue = newValue;
              }
            }
          }
          if (fieldValue !== void 0) {
            allDeleted_1 = false;
          }
        });
        if (needToMerge_1) {
          this.merge(dataId, changedFields_1);
          if (allDeleted_1) {
            if (this instanceof Layer) {
              this.data[dataId] = void 0;
            } else {
              delete this.data[dataId];
            }
            this.group.dirty(dataId, "__exists");
          }
          return true;
        }
      }
      return false;
    };
    EntityStore2.prototype.delete = function(dataId, fieldName, args) {
      var _a5;
      var storeObject = this.lookup(dataId);
      if (storeObject) {
        var typename = this.getFieldValue(storeObject, "__typename");
        var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({ typename, fieldName, args }) : fieldName;
        return this.modify(dataId, storeFieldName ? (_a5 = {}, _a5[storeFieldName] = delModifier, _a5) : delModifier);
      }
      return false;
    };
    EntityStore2.prototype.evict = function(options, limit) {
      var evicted = false;
      if (options.id) {
        if (hasOwn.call(this.data, options.id)) {
          evicted = this.delete(options.id, options.fieldName, options.args);
        }
        if (this instanceof Layer && this !== limit) {
          evicted = this.parent.evict(options, limit) || evicted;
        }
        if (options.fieldName || evicted) {
          this.group.dirty(options.id, options.fieldName || "__exists");
        }
      }
      return evicted;
    };
    EntityStore2.prototype.clear = function() {
      this.replace(null);
    };
    EntityStore2.prototype.extract = function() {
      var _this = this;
      var obj = this.toObject();
      var extraRootIds = [];
      this.getRootIdSet().forEach(function(id) {
        if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
          extraRootIds.push(id);
        }
      });
      if (extraRootIds.length) {
        obj.__META = { extraRootIds: extraRootIds.sort() };
      }
      return obj;
    };
    EntityStore2.prototype.replace = function(newData) {
      var _this = this;
      Object.keys(this.data).forEach(function(dataId) {
        if (!(newData && hasOwn.call(newData, dataId))) {
          _this.delete(dataId);
        }
      });
      if (newData) {
        var __META = newData.__META, rest_1 = __rest(newData, ["__META"]);
        Object.keys(rest_1).forEach(function(dataId) {
          _this.merge(dataId, rest_1[dataId]);
        });
        if (__META) {
          __META.extraRootIds.forEach(this.retain, this);
        }
      }
    };
    EntityStore2.prototype.retain = function(rootId) {
      return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore2.prototype.release = function(rootId) {
      if (this.rootIds[rootId] > 0) {
        var count = --this.rootIds[rootId];
        if (!count)
          delete this.rootIds[rootId];
        return count;
      }
      return 0;
    };
    EntityStore2.prototype.getRootIdSet = function(ids) {
      if (ids === void 0) {
        ids = new Set();
      }
      Object.keys(this.rootIds).forEach(ids.add, ids);
      if (this instanceof Layer) {
        this.parent.getRootIdSet(ids);
      } else {
        Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
      }
      return ids;
    };
    EntityStore2.prototype.gc = function() {
      var _this = this;
      var ids = this.getRootIdSet();
      var snapshot = this.toObject();
      ids.forEach(function(id) {
        if (hasOwn.call(snapshot, id)) {
          Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
          delete snapshot[id];
        }
      });
      var idsToRemove = Object.keys(snapshot);
      if (idsToRemove.length) {
        var root_1 = this;
        while (root_1 instanceof Layer)
          root_1 = root_1.parent;
        idsToRemove.forEach(function(id) {
          return root_1.delete(id);
        });
      }
      return idsToRemove;
    };
    EntityStore2.prototype.findChildRefIds = function(dataId) {
      if (!hasOwn.call(this.refs, dataId)) {
        var found_1 = this.refs[dataId] = Object.create(null);
        var root2 = this.data[dataId];
        if (!root2)
          return found_1;
        var workSet_1 = new Set([root2]);
        workSet_1.forEach(function(obj) {
          if (isReference(obj)) {
            found_1[obj.__ref] = true;
          }
          if (isNonNullObject(obj)) {
            Object.keys(obj).forEach(function(key) {
              var child = obj[key];
              if (isNonNullObject(child)) {
                workSet_1.add(child);
              }
            });
          }
        });
      }
      return this.refs[dataId];
    };
    EntityStore2.prototype.makeCacheKey = function() {
      return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore2;
  }();
  var CacheGroup = function() {
    function CacheGroup2(caching, parent) {
      if (parent === void 0) {
        parent = null;
      }
      this.caching = caching;
      this.parent = parent;
      this.d = null;
      this.resetCaching();
    }
    CacheGroup2.prototype.resetCaching = function() {
      this.d = this.caching ? dep() : null;
      this.keyMaker = new Trie(canUseWeakMap);
    };
    CacheGroup2.prototype.depend = function(dataId, storeFieldName) {
      if (this.d) {
        this.d(makeDepKey(dataId, storeFieldName));
        var fieldName = fieldNameFromStoreName(storeFieldName);
        if (fieldName !== storeFieldName) {
          this.d(makeDepKey(dataId, fieldName));
        }
        if (this.parent) {
          this.parent.depend(dataId, storeFieldName);
        }
      }
    };
    CacheGroup2.prototype.dirty = function(dataId, storeFieldName) {
      if (this.d) {
        this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
      }
    };
    return CacheGroup2;
  }();
  function makeDepKey(dataId, storeFieldName) {
    return storeFieldName + "#" + dataId;
  }
  function maybeDependOnExistenceOfEntity(store, entityId) {
    if (supportsResultCaching(store)) {
      store.group.depend(entityId, "__exists");
    }
  }
  (function(EntityStore2) {
    var Root = function(_super) {
      __extends(Root2, _super);
      function Root2(_a5) {
        var policies = _a5.policies, _b = _a5.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a5.seed;
        var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
        _this.stump = new Stump(_this);
        _this.storageTrie = new Trie(canUseWeakMap);
        if (seed)
          _this.replace(seed);
        return _this;
      }
      Root2.prototype.addLayer = function(layerId, replay) {
        return this.stump.addLayer(layerId, replay);
      };
      Root2.prototype.removeLayer = function() {
        return this;
      };
      Root2.prototype.getStorage = function() {
        return this.storageTrie.lookupArray(arguments);
      };
      return Root2;
    }(EntityStore2);
    EntityStore2.Root = Root;
  })(EntityStore || (EntityStore = {}));
  var Layer = function(_super) {
    __extends(Layer2, _super);
    function Layer2(id, parent, replay, group) {
      var _this = _super.call(this, parent.policies, group) || this;
      _this.id = id;
      _this.parent = parent;
      _this.replay = replay;
      _this.group = group;
      replay(_this);
      return _this;
    }
    Layer2.prototype.addLayer = function(layerId, replay) {
      return new Layer2(layerId, this, replay, this.group);
    };
    Layer2.prototype.removeLayer = function(layerId) {
      var _this = this;
      var parent = this.parent.removeLayer(layerId);
      if (layerId === this.id) {
        if (this.group.caching) {
          Object.keys(this.data).forEach(function(dataId) {
            var ownStoreObject = _this.data[dataId];
            var parentStoreObject = parent["lookup"](dataId);
            if (!parentStoreObject) {
              _this.delete(dataId);
            } else if (!ownStoreObject) {
              _this.group.dirty(dataId, "__exists");
              Object.keys(parentStoreObject).forEach(function(storeFieldName) {
                _this.group.dirty(dataId, storeFieldName);
              });
            } else if (ownStoreObject !== parentStoreObject) {
              Object.keys(ownStoreObject).forEach(function(storeFieldName) {
                if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                  _this.group.dirty(dataId, storeFieldName);
                }
              });
            }
          });
        }
        return parent;
      }
      if (parent === this.parent)
        return this;
      return parent.addLayer(this.id, this.replay);
    };
    Layer2.prototype.toObject = function() {
      return __assign(__assign({}, this.parent.toObject()), this.data);
    };
    Layer2.prototype.findChildRefIds = function(dataId) {
      var fromParent = this.parent.findChildRefIds(dataId);
      return hasOwn.call(this.data, dataId) ? __assign(__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer2.prototype.getStorage = function() {
      var p = this.parent;
      while (p.parent)
        p = p.parent;
      return p.getStorage.apply(p, arguments);
    };
    return Layer2;
  }(EntityStore);
  var Stump = function(_super) {
    __extends(Stump2, _super);
    function Stump2(root2) {
      return _super.call(this, "EntityStore.Stump", root2, function() {
      }, new CacheGroup(root2.group.caching, root2.group)) || this;
    }
    Stump2.prototype.removeLayer = function() {
      return this;
    };
    Stump2.prototype.merge = function() {
      return this.parent.merge.apply(this.parent, arguments);
    };
    return Stump2;
  }(Layer);
  function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    return equal(existingValue, incomingValue) ? existingValue : incomingValue;
  }
  function supportsResultCaching(store) {
    return !!(store instanceof EntityStore && store.group.caching);
  }

  // node_modules/@apollo/client/cache/inmemory/object-canon.js
  function shallowCopy(value) {
    if (isNonNullObject(value)) {
      return Array.isArray(value) ? value.slice(0) : __assign({ __proto__: Object.getPrototypeOf(value) }, value);
    }
    return value;
  }
  var ObjectCanon = function() {
    function ObjectCanon2() {
      this.known = new (canUseWeakSet ? WeakSet : Set)();
      this.pool = new Trie(canUseWeakMap);
      this.passes = new WeakMap();
      this.keysByJSON = new Map();
      this.empty = this.admit({});
    }
    ObjectCanon2.prototype.isKnown = function(value) {
      return isNonNullObject(value) && this.known.has(value);
    };
    ObjectCanon2.prototype.pass = function(value) {
      if (isNonNullObject(value)) {
        var copy = shallowCopy(value);
        this.passes.set(copy, value);
        return copy;
      }
      return value;
    };
    ObjectCanon2.prototype.admit = function(value) {
      var _this = this;
      if (isNonNullObject(value)) {
        var original = this.passes.get(value);
        if (original)
          return original;
        var proto = Object.getPrototypeOf(value);
        switch (proto) {
          case Array.prototype: {
            if (this.known.has(value))
              return value;
            var array = value.map(this.admit, this);
            var node = this.pool.lookupArray(array);
            if (!node.array) {
              this.known.add(node.array = array);
              if (__DEV__) {
                Object.freeze(array);
              }
            }
            return node.array;
          }
          case null:
          case Object.prototype: {
            if (this.known.has(value))
              return value;
            var proto_1 = Object.getPrototypeOf(value);
            var array_1 = [proto_1];
            var keys = this.sortedKeys(value);
            array_1.push(keys.json);
            var firstValueIndex_1 = array_1.length;
            keys.sorted.forEach(function(key) {
              array_1.push(_this.admit(value[key]));
            });
            var node = this.pool.lookupArray(array_1);
            if (!node.object) {
              var obj_1 = node.object = Object.create(proto_1);
              this.known.add(obj_1);
              keys.sorted.forEach(function(key, i) {
                obj_1[key] = array_1[firstValueIndex_1 + i];
              });
              if (__DEV__) {
                Object.freeze(obj_1);
              }
            }
            return node.object;
          }
        }
      }
      return value;
    };
    ObjectCanon2.prototype.sortedKeys = function(obj) {
      var keys = Object.keys(obj);
      var node = this.pool.lookupArray(keys);
      if (!node.keys) {
        keys.sort();
        var json = JSON.stringify(keys);
        if (!(node.keys = this.keysByJSON.get(json))) {
          this.keysByJSON.set(json, node.keys = { sorted: keys, json });
        }
      }
      return node.keys;
    };
    return ObjectCanon2;
  }();
  var canonicalStringify = Object.assign(function(value) {
    if (isNonNullObject(value)) {
      if (stringifyCanon === void 0) {
        resetCanonicalStringify();
      }
      var canonical = stringifyCanon.admit(value);
      var json = stringifyCache.get(canonical);
      if (json === void 0) {
        stringifyCache.set(canonical, json = JSON.stringify(canonical));
      }
      return json;
    }
    return JSON.stringify(value);
  }, {
    reset: resetCanonicalStringify
  });
  var stringifyCanon;
  var stringifyCache;
  function resetCanonicalStringify() {
    stringifyCanon = new ObjectCanon();
    stringifyCache = new (canUseWeakMap ? WeakMap : Map)();
  }

  // node_modules/@apollo/client/cache/inmemory/readFromStore.js
  function missingFromInvariant(err, context) {
    return new MissingFieldError(err.message, context.path.slice(), context.query, context.variables);
  }
  function execSelectionSetKeyArgs(options) {
    return [
      options.selectionSet,
      options.objectOrReference,
      options.context,
      options.context.canonizeResults
    ];
  }
  var StoreReader = function() {
    function StoreReader2(config) {
      var _this = this;
      this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
      this.config = compact(config, {
        addTypename: config.addTypename !== false,
        canonizeResults: shouldCanonizeResults(config)
      });
      this.canon = config.canon || new ObjectCanon();
      this.executeSelectionSet = wrap2(function(options) {
        var _a5;
        var canonizeResults = options.context.canonizeResults;
        var peekArgs = execSelectionSetKeyArgs(options);
        peekArgs[3] = !canonizeResults;
        var other = (_a5 = _this.executeSelectionSet).peek.apply(_a5, peekArgs);
        if (other) {
          if (canonizeResults) {
            return __assign(__assign({}, other), { result: _this.canon.admit(other.result) });
          }
          return other;
        }
        maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
        return _this.execSelectionSetImpl(options);
      }, {
        max: this.config.resultCacheMaxSize,
        keyArgs: execSelectionSetKeyArgs,
        makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
          if (supportsResultCaching(context.store)) {
            return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
          }
        }
      });
      this.executeSubSelectedArray = wrap2(function(options) {
        maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
        return _this.execSubSelectedArrayImpl(options);
      }, {
        max: this.config.resultCacheMaxSize,
        makeCacheKey: function(_a5) {
          var field = _a5.field, array = _a5.array, context = _a5.context;
          if (supportsResultCaching(context.store)) {
            return context.store.makeCacheKey(field, array, context.varString);
          }
        }
      });
    }
    StoreReader2.prototype.resetCanon = function() {
      this.canon = new ObjectCanon();
    };
    StoreReader2.prototype.diffQueryAgainstStore = function(_a5) {
      var store = _a5.store, query = _a5.query, _b = _a5.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a5.variables, _c = _a5.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a5.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
      var policies = this.config.cache.policies;
      variables = __assign(__assign({}, getDefaultValues(getQueryDefinition(query))), variables);
      var rootRef = makeReference(rootId);
      var execResult = this.executeSelectionSet({
        selectionSet: getMainDefinition(query).selectionSet,
        objectOrReference: rootRef,
        enclosingRef: rootRef,
        context: {
          store,
          query,
          policies,
          variables,
          varString: canonicalStringify(variables),
          canonizeResults,
          fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
          path: []
        }
      });
      var hasMissingFields = execResult.missing && execResult.missing.length > 0;
      if (hasMissingFields && !returnPartialData) {
        throw execResult.missing[0];
      }
      return {
        result: execResult.result,
        missing: execResult.missing,
        complete: !hasMissingFields
      };
    };
    StoreReader2.prototype.isFresh = function(result2, parent, selectionSet, context) {
      if (supportsResultCaching(context.store) && this.knownResults.get(result2) === selectionSet) {
        var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result2));
        if (latest && result2 === latest.result) {
          return true;
        }
      }
      return false;
    };
    StoreReader2.prototype.execSelectionSetImpl = function(_a5) {
      var _this = this;
      var selectionSet = _a5.selectionSet, objectOrReference = _a5.objectOrReference, enclosingRef = _a5.enclosingRef, context = _a5.context;
      if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
        return {
          result: this.canon.empty,
          missing: [missingFromInvariant(__DEV__ ? new InvariantError("Dangling reference to missing " + objectOrReference.__ref + " object") : new InvariantError(5), context)]
        };
      }
      var variables = context.variables, policies = context.policies, store = context.store;
      var objectsToMerge = [];
      var finalResult = { result: null };
      var typename = store.getFieldValue(objectOrReference, "__typename");
      if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
        objectsToMerge.push({ __typename: typename });
      }
      function getMissing() {
        return finalResult.missing || (finalResult.missing = []);
      }
      function handleMissing(result2) {
        var _a6;
        if (result2.missing)
          (_a6 = getMissing()).push.apply(_a6, result2.missing);
        return result2.result;
      }
      var workSet = new Set(selectionSet.selections);
      workSet.forEach(function(selection) {
        var _a6;
        if (!shouldInclude(selection, variables))
          return;
        if (isField(selection)) {
          var fieldValue = policies.readField({
            fieldName: selection.name.value,
            field: selection,
            variables: context.variables,
            from: objectOrReference
          }, context);
          var resultName = resultKeyNameFromField(selection);
          context.path.push(resultName);
          if (fieldValue === void 0) {
            if (!addTypenameToDocument.added(selection)) {
              getMissing().push(missingFromInvariant(__DEV__ ? new InvariantError("Can't find field '" + selection.name.value + "' on " + (isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2))) : new InvariantError(6), context));
            }
          } else if (Array.isArray(fieldValue)) {
            fieldValue = handleMissing(_this.executeSubSelectedArray({
              field: selection,
              array: fieldValue,
              enclosingRef,
              context
            }));
          } else if (!selection.selectionSet) {
            if (context.canonizeResults) {
              fieldValue = _this.canon.pass(fieldValue);
            }
          } else if (fieldValue != null) {
            fieldValue = handleMissing(_this.executeSelectionSet({
              selectionSet: selection.selectionSet,
              objectOrReference: fieldValue,
              enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
              context
            }));
          }
          if (fieldValue !== void 0) {
            objectsToMerge.push((_a6 = {}, _a6[resultName] = fieldValue, _a6));
          }
          invariant(context.path.pop() === resultName);
        } else {
          var fragment = getFragmentFromSelection(selection, context.fragmentMap);
          if (fragment && policies.fragmentMatches(fragment, typename)) {
            fragment.selectionSet.selections.forEach(workSet.add, workSet);
          }
        }
      });
      var merged = mergeDeepArray(objectsToMerge);
      finalResult.result = context.canonizeResults ? this.canon.admit(merged) : maybeDeepFreeze(merged);
      this.knownResults.set(finalResult.result, selectionSet);
      return finalResult;
    };
    StoreReader2.prototype.execSubSelectedArrayImpl = function(_a5) {
      var _this = this;
      var field = _a5.field, array = _a5.array, enclosingRef = _a5.enclosingRef, context = _a5.context;
      var missing;
      function handleMissing(childResult, i) {
        if (childResult.missing) {
          missing = missing || [];
          missing.push.apply(missing, childResult.missing);
        }
        invariant(context.path.pop() === i);
        return childResult.result;
      }
      if (field.selectionSet) {
        array = array.filter(context.store.canRead);
      }
      array = array.map(function(item, i) {
        if (item === null) {
          return null;
        }
        context.path.push(i);
        if (Array.isArray(item)) {
          return handleMissing(_this.executeSubSelectedArray({
            field,
            array: item,
            enclosingRef,
            context
          }), i);
        }
        if (field.selectionSet) {
          return handleMissing(_this.executeSelectionSet({
            selectionSet: field.selectionSet,
            objectOrReference: item,
            enclosingRef: isReference(item) ? item : enclosingRef,
            context
          }), i);
        }
        if (__DEV__) {
          assertSelectionSetForIdValue(context.store, field, item);
        }
        invariant(context.path.pop() === i);
        return item;
      });
      return {
        result: context.canonizeResults ? this.canon.admit(array) : array,
        missing
      };
    };
    return StoreReader2;
  }();
  function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
      var workSet_1 = new Set([fieldValue]);
      workSet_1.forEach(function(value) {
        if (isNonNullObject(value)) {
          __DEV__ ? invariant(!isReference(value), "Missing selection set for object of type " + getTypenameFromStoreObject(store, value) + " returned for query field " + field.name.value) : invariant(!isReference(value), 7);
          Object.values(value).forEach(workSet_1.add, workSet_1);
        }
      });
    }
  }

  // node_modules/@apollo/client/cache/inmemory/writeToStore.js
  var StoreWriter = function() {
    function StoreWriter2(cache2, reader) {
      this.cache = cache2;
      this.reader = reader;
    }
    StoreWriter2.prototype.writeToStore = function(store, _a5) {
      var _this = this;
      var query = _a5.query, result2 = _a5.result, dataId = _a5.dataId, variables = _a5.variables, overwrite = _a5.overwrite;
      var operationDefinition = getOperationDefinition(query);
      var merger = makeProcessedFieldsMerger();
      variables = __assign(__assign({}, getDefaultValues(operationDefinition)), variables);
      var context = {
        store,
        written: Object.create(null),
        merge: function(existing, incoming) {
          return merger.merge(existing, incoming);
        },
        variables,
        varString: canonicalStringify(variables),
        fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
        overwrite: !!overwrite,
        incomingById: new Map(),
        clientOnly: false
      };
      var ref = this.processSelectionSet({
        result: result2 || Object.create(null),
        dataId,
        selectionSet: operationDefinition.selectionSet,
        mergeTree: { map: new Map() },
        context
      });
      if (!isReference(ref)) {
        throw __DEV__ ? new InvariantError("Could not identify object " + JSON.stringify(result2)) : new InvariantError(8);
      }
      context.incomingById.forEach(function(_a6, dataId2) {
        var fields = _a6.fields, mergeTree = _a6.mergeTree, selections = _a6.selections;
        var entityRef = makeReference(dataId2);
        if (mergeTree && mergeTree.map.size) {
          var applied = _this.applyMerges(mergeTree, entityRef, fields, context);
          if (isReference(applied)) {
            return;
          }
          fields = applied;
        }
        if (__DEV__ && !context.overwrite) {
          var hasSelectionSet_1 = function(storeFieldName) {
            return fieldsWithSelectionSets_1.has(fieldNameFromStoreName(storeFieldName));
          };
          var fieldsWithSelectionSets_1 = new Set();
          selections.forEach(function(selection) {
            if (isField(selection) && selection.selectionSet) {
              fieldsWithSelectionSets_1.add(selection.name.value);
            }
          });
          var hasMergeFunction_1 = function(storeFieldName) {
            var childTree = mergeTree && mergeTree.map.get(storeFieldName);
            return Boolean(childTree && childTree.info && childTree.info.merge);
          };
          Object.keys(fields).forEach(function(storeFieldName) {
            if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) {
              warnAboutDataLoss(entityRef, fields, storeFieldName, context.store);
            }
          });
        }
        store.merge(dataId2, fields);
      });
      store.retain(ref.__ref);
      return ref;
    };
    StoreWriter2.prototype.processSelectionSet = function(_a5) {
      var _this = this;
      var dataId = _a5.dataId, result2 = _a5.result, selectionSet = _a5.selectionSet, context = _a5.context, mergeTree = _a5.mergeTree;
      var policies = this.cache.policies;
      var _b = policies.identify(result2, selectionSet, context.fragmentMap), id = _b[0], keyObject = _b[1];
      dataId = dataId || id;
      if (typeof dataId === "string") {
        var sets = context.written[dataId] || (context.written[dataId] = []);
        var ref = makeReference(dataId);
        if (sets.indexOf(selectionSet) >= 0)
          return ref;
        sets.push(selectionSet);
        if (this.reader && this.reader.isFresh(result2, ref, selectionSet, context)) {
          return ref;
        }
      }
      var incomingFields = Object.create(null);
      if (keyObject) {
        incomingFields = context.merge(incomingFields, keyObject);
      }
      var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result2, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
      if (typeof typename === "string") {
        incomingFields.__typename = typename;
      }
      var selections = new Set(selectionSet.selections);
      selections.forEach(function(selection) {
        var _a6;
        if (!shouldInclude(selection, context.variables))
          return;
        if (isField(selection)) {
          var resultFieldKey = resultKeyNameFromField(selection);
          var value = result2[resultFieldKey];
          var wasClientOnly = context.clientOnly;
          context.clientOnly = wasClientOnly || !!(selection.directives && selection.directives.some(function(d) {
            return d.name.value === "client";
          }));
          if (value !== void 0) {
            var storeFieldName = policies.getStoreFieldName({
              typename,
              fieldName: selection.name.value,
              field: selection,
              variables: context.variables
            });
            var childTree = getChildMergeTree(mergeTree, storeFieldName);
            var incomingValue = _this.processFieldValue(value, selection, context, childTree);
            var childTypename = void 0;
            if (selection.selectionSet) {
              childTypename = context.store.getFieldValue(incomingValue, "__typename");
              if (!childTypename && isReference(incomingValue)) {
                var info = context.incomingById.get(incomingValue.__ref);
                childTypename = info && info.fields.__typename;
              }
            }
            var merge = policies.getMergeFunction(typename, selection.name.value, childTypename);
            if (merge) {
              childTree.info = {
                field: selection,
                typename,
                merge
              };
            } else {
              maybeRecycleChildMergeTree(mergeTree, storeFieldName);
            }
            incomingFields = context.merge(incomingFields, (_a6 = {}, _a6[storeFieldName] = incomingValue, _a6));
          } else if (!context.clientOnly && !addTypenameToDocument.added(selection)) {
            __DEV__ && invariant.error(("Missing field '" + resultKeyNameFromField(selection) + "' while writing result " + JSON.stringify(result2, null, 2)).substring(0, 1e3));
          }
          context.clientOnly = wasClientOnly;
        } else {
          var fragment = getFragmentFromSelection(selection, context.fragmentMap);
          if (fragment && policies.fragmentMatches(fragment, typename, result2, context.variables)) {
            fragment.selectionSet.selections.forEach(selections.add, selections);
          }
        }
      });
      if (typeof dataId === "string") {
        var previous = context.incomingById.get(dataId);
        if (previous) {
          previous.fields = context.merge(previous.fields, incomingFields);
          previous.mergeTree = mergeMergeTrees(previous.mergeTree, mergeTree);
          previous.selections.forEach(selections.add, selections);
          previous.selections = selections;
        } else {
          context.incomingById.set(dataId, {
            fields: incomingFields,
            mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
            selections
          });
        }
        return makeReference(dataId);
      }
      return incomingFields;
    };
    StoreWriter2.prototype.processFieldValue = function(value, field, context, mergeTree) {
      var _this = this;
      if (!field.selectionSet || value === null) {
        return __DEV__ ? cloneDeep(value) : value;
      }
      if (Array.isArray(value)) {
        return value.map(function(item, i) {
          var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
          maybeRecycleChildMergeTree(mergeTree, i);
          return value2;
        });
      }
      return this.processSelectionSet({
        result: value,
        selectionSet: field.selectionSet,
        context,
        mergeTree
      });
    };
    StoreWriter2.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
      var _a5;
      var _this = this;
      if (mergeTree.map.size && !isReference(incoming)) {
        var e_1 = !Array.isArray(incoming) && (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0;
        var i_1 = incoming;
        if (e_1 && !getStorageArgs) {
          getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
        }
        var changedFields_1;
        var getValue_1 = function(from, name) {
          return Array.isArray(from) ? typeof name === "number" ? from[name] : void 0 : context.store.getFieldValue(from, String(name));
        };
        mergeTree.map.forEach(function(childTree, storeFieldName) {
          var eVal = getValue_1(e_1, storeFieldName);
          var iVal = getValue_1(i_1, storeFieldName);
          if (iVal === void 0)
            return;
          if (getStorageArgs) {
            getStorageArgs.push(storeFieldName);
          }
          var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
          if (aVal !== iVal) {
            changedFields_1 = changedFields_1 || new Map();
            changedFields_1.set(storeFieldName, aVal);
          }
          if (getStorageArgs) {
            invariant(getStorageArgs.pop() === storeFieldName);
          }
        });
        if (changedFields_1) {
          incoming = Array.isArray(i_1) ? i_1.slice(0) : __assign({}, i_1);
          changedFields_1.forEach(function(value, name) {
            incoming[name] = value;
          });
        }
      }
      if (mergeTree.info) {
        return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a5 = context.store).getStorage.apply(_a5, getStorageArgs));
      }
      return incoming;
    };
    return StoreWriter2;
  }();
  var emptyMergeTreePool = [];
  function getChildMergeTree(_a5, name) {
    var map = _a5.map;
    if (!map.has(name)) {
      map.set(name, emptyMergeTreePool.pop() || { map: new Map() });
    }
    return map.get(name);
  }
  function mergeMergeTrees(left, right) {
    if (left === right || !right || mergeTreeIsEmpty(right))
      return left;
    if (!left || mergeTreeIsEmpty(left))
      return right;
    var info = left.info && right.info ? __assign(__assign({}, left.info), right.info) : left.info || right.info;
    var needToMergeMaps = left.map.size && right.map.size;
    var map = needToMergeMaps ? new Map() : left.map.size ? left.map : right.map;
    var merged = { info, map };
    if (needToMergeMaps) {
      var remainingRightKeys_1 = new Set(right.map.keys());
      left.map.forEach(function(leftTree, key) {
        merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
        remainingRightKeys_1.delete(key);
      });
      remainingRightKeys_1.forEach(function(key) {
        merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
      });
    }
    return merged;
  }
  function mergeTreeIsEmpty(tree) {
    return !tree || !(tree.info || tree.map.size);
  }
  function maybeRecycleChildMergeTree(_a5, name) {
    var map = _a5.map;
    var childTree = map.get(name);
    if (childTree && mergeTreeIsEmpty(childTree)) {
      emptyMergeTreePool.push(childTree);
      map.delete(name);
    }
  }
  var warnings = new Set();
  function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function(objOrRef) {
      var child = store.getFieldValue(objOrRef, storeFieldName);
      return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing)
      return;
    var incoming = getChild(incomingObj);
    if (!incoming)
      return;
    if (isReference(existing))
      return;
    if (equal(existing, incoming))
      return;
    if (Object.keys(existing).every(function(key) {
      return store.getFieldValue(incoming, key) !== void 0;
    })) {
      return;
    }
    var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var typeDotName = parentType + "." + fieldName;
    if (warnings.has(typeDotName))
      return;
    warnings.add(typeDotName);
    var childTypenames = [];
    if (!Array.isArray(existing) && !Array.isArray(incoming)) {
      [existing, incoming].forEach(function(child) {
        var typename = store.getFieldValue(child, "__typename");
        if (typeof typename === "string" && !childTypenames.includes(typename)) {
          childTypenames.push(typename);
        }
      });
    }
    __DEV__ && invariant.warn("Cache data may be lost when replacing the " + fieldName + " field of a " + parentType + " object.\n\nTo address this problem (which is not a bug in Apollo Client), " + (childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "") + "define a custom merge function for the " + typeDotName + " field, so InMemoryCache can safely merge these objects:\n\n  existing: " + JSON.stringify(existing).slice(0, 1e3) + "\n  incoming: " + JSON.stringify(incoming).slice(0, 1e3) + "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n");
  }

  // node_modules/@apollo/client/cache/inmemory/reactiveVars.js
  var cacheSlot = new Slot();
  var cacheInfoMap = new WeakMap();
  function getCacheInfo(cache2) {
    var info = cacheInfoMap.get(cache2);
    if (!info) {
      cacheInfoMap.set(cache2, info = {
        vars: new Set(),
        dep: dep()
      });
    }
    return info;
  }
  function forgetCache(cache2) {
    getCacheInfo(cache2).vars.forEach(function(rv) {
      return rv.forgetCache(cache2);
    });
  }
  function recallCache(cache2) {
    getCacheInfo(cache2).vars.forEach(function(rv) {
      return rv.attachCache(cache2);
    });
  }
  function makeVar(value) {
    var caches2 = new Set();
    var listeners = new Set();
    var rv = function(newValue) {
      if (arguments.length > 0) {
        if (value !== newValue) {
          value = newValue;
          caches2.forEach(function(cache3) {
            getCacheInfo(cache3).dep.dirty(rv);
            broadcast(cache3);
          });
          var oldListeners = Array.from(listeners);
          listeners.clear();
          oldListeners.forEach(function(listener) {
            return listener(value);
          });
        }
      } else {
        var cache2 = cacheSlot.getValue();
        if (cache2) {
          attach(cache2);
          getCacheInfo(cache2).dep(rv);
        }
      }
      return value;
    };
    rv.onNextChange = function(listener) {
      listeners.add(listener);
      return function() {
        listeners.delete(listener);
      };
    };
    var attach = rv.attachCache = function(cache2) {
      caches2.add(cache2);
      getCacheInfo(cache2).vars.add(rv);
      return rv;
    };
    rv.forgetCache = function(cache2) {
      return caches2.delete(cache2);
    };
    return rv;
  }
  function broadcast(cache2) {
    if (cache2.broadcastWatches) {
      cache2.broadcastWatches();
    }
  }

  // node_modules/@apollo/client/cache/inmemory/policies.js
  getStoreKeyName.setStringify(canonicalStringify);
  function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
  }
  var nullKeyFieldsFn = function() {
    return void 0;
  };
  var simpleKeyArgsFn = function(_args, context) {
    return context.fieldName;
  };
  var mergeTrueFn = function(existing, incoming, _a5) {
    var mergeObjects = _a5.mergeObjects;
    return mergeObjects(existing, incoming);
  };
  var mergeFalseFn = function(_, incoming) {
    return incoming;
  };
  var Policies = function() {
    function Policies2(config) {
      this.config = config;
      this.typePolicies = Object.create(null);
      this.toBeAdded = Object.create(null);
      this.supertypeMap = new Map();
      this.fuzzySubtypes = new Map();
      this.rootIdsByTypename = Object.create(null);
      this.rootTypenamesById = Object.create(null);
      this.usingPossibleTypes = false;
      this.config = __assign({ dataIdFromObject: defaultDataIdFromObject }, config);
      this.cache = this.config.cache;
      this.setRootTypename("Query");
      this.setRootTypename("Mutation");
      this.setRootTypename("Subscription");
      if (config.possibleTypes) {
        this.addPossibleTypes(config.possibleTypes);
      }
      if (config.typePolicies) {
        this.addTypePolicies(config.typePolicies);
      }
    }
    Policies2.prototype.identify = function(object, selectionSet, fragmentMap) {
      var typename = selectionSet && fragmentMap ? getTypenameFromResult(object, selectionSet, fragmentMap) : object.__typename;
      if (typename === this.rootTypenamesById.ROOT_QUERY) {
        return ["ROOT_QUERY"];
      }
      var context = {
        typename,
        selectionSet,
        fragmentMap
      };
      var id;
      var policy = typename && this.getTypePolicy(typename);
      var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
      while (keyFn) {
        var specifierOrId = keyFn(object, context);
        if (Array.isArray(specifierOrId)) {
          keyFn = keyFieldsFnFromSpecifier(specifierOrId);
        } else {
          id = specifierOrId;
          break;
        }
      }
      id = id ? String(id) : void 0;
      return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies2.prototype.addTypePolicies = function(typePolicies) {
      var _this = this;
      Object.keys(typePolicies).forEach(function(typename) {
        var _a5 = typePolicies[typename], queryType = _a5.queryType, mutationType = _a5.mutationType, subscriptionType = _a5.subscriptionType, incoming = __rest(_a5, ["queryType", "mutationType", "subscriptionType"]);
        if (queryType)
          _this.setRootTypename("Query", typename);
        if (mutationType)
          _this.setRootTypename("Mutation", typename);
        if (subscriptionType)
          _this.setRootTypename("Subscription", typename);
        if (hasOwn.call(_this.toBeAdded, typename)) {
          _this.toBeAdded[typename].push(incoming);
        } else {
          _this.toBeAdded[typename] = [incoming];
        }
      });
    };
    Policies2.prototype.updateTypePolicy = function(typename, incoming) {
      var _this = this;
      var existing = this.getTypePolicy(typename);
      var keyFields = incoming.keyFields, fields = incoming.fields;
      function setMerge(existing2, merge) {
        existing2.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing2.merge;
      }
      setMerge(existing, incoming.merge);
      existing.keyFn = keyFields === false ? nullKeyFieldsFn : Array.isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
      if (fields) {
        Object.keys(fields).forEach(function(fieldName) {
          var existing2 = _this.getFieldPolicy(typename, fieldName, true);
          var incoming2 = fields[fieldName];
          if (typeof incoming2 === "function") {
            existing2.read = incoming2;
          } else {
            var keyArgs = incoming2.keyArgs, read = incoming2.read, merge = incoming2.merge;
            existing2.keyFn = keyArgs === false ? simpleKeyArgsFn : Array.isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
            if (typeof read === "function") {
              existing2.read = read;
            }
            setMerge(existing2, merge);
          }
          if (existing2.read && existing2.merge) {
            existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
          }
        });
      }
    };
    Policies2.prototype.setRootTypename = function(which, typename) {
      if (typename === void 0) {
        typename = which;
      }
      var rootId = "ROOT_" + which.toUpperCase();
      var old = this.rootTypenamesById[rootId];
      if (typename !== old) {
        __DEV__ ? invariant(!old || old === which, "Cannot change root " + which + " __typename more than once") : invariant(!old || old === which, 2);
        if (old)
          delete this.rootIdsByTypename[old];
        this.rootIdsByTypename[typename] = rootId;
        this.rootTypenamesById[rootId] = typename;
      }
    };
    Policies2.prototype.addPossibleTypes = function(possibleTypes) {
      var _this = this;
      this.usingPossibleTypes = true;
      Object.keys(possibleTypes).forEach(function(supertype) {
        _this.getSupertypeSet(supertype, true);
        possibleTypes[supertype].forEach(function(subtype) {
          _this.getSupertypeSet(subtype, true).add(supertype);
          var match = subtype.match(TypeOrFieldNameRegExp);
          if (!match || match[0] !== subtype) {
            _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
          }
        });
      });
    };
    Policies2.prototype.getTypePolicy = function(typename) {
      var _this = this;
      if (!hasOwn.call(this.typePolicies, typename)) {
        var policy_1 = this.typePolicies[typename] = Object.create(null);
        policy_1.fields = Object.create(null);
        var supertypes = this.supertypeMap.get(typename);
        if (supertypes && supertypes.size) {
          supertypes.forEach(function(supertype) {
            var _a5 = _this.getTypePolicy(supertype), fields = _a5.fields, rest = __rest(_a5, ["fields"]);
            Object.assign(policy_1, rest);
            Object.assign(policy_1.fields, fields);
          });
        }
      }
      var inbox = this.toBeAdded[typename];
      if (inbox && inbox.length) {
        inbox.splice(0).forEach(function(policy) {
          _this.updateTypePolicy(typename, policy);
        });
      }
      return this.typePolicies[typename];
    };
    Policies2.prototype.getFieldPolicy = function(typename, fieldName, createIfMissing) {
      if (typename) {
        var fieldPolicies = this.getTypePolicy(typename).fields;
        return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = Object.create(null));
      }
    };
    Policies2.prototype.getSupertypeSet = function(subtype, createIfMissing) {
      var supertypeSet = this.supertypeMap.get(subtype);
      if (!supertypeSet && createIfMissing) {
        this.supertypeMap.set(subtype, supertypeSet = new Set());
      }
      return supertypeSet;
    };
    Policies2.prototype.fragmentMatches = function(fragment, typename, result2, variables) {
      var _this = this;
      if (!fragment.typeCondition)
        return true;
      if (!typename)
        return false;
      var supertype = fragment.typeCondition.name.value;
      if (typename === supertype)
        return true;
      if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
        var typenameSupertypeSet = this.getSupertypeSet(typename, true);
        var workQueue_1 = [typenameSupertypeSet];
        var maybeEnqueue_1 = function(subtype) {
          var supertypeSet2 = _this.getSupertypeSet(subtype, false);
          if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) {
            workQueue_1.push(supertypeSet2);
          }
        };
        var needToCheckFuzzySubtypes = !!(result2 && this.fuzzySubtypes.size);
        var checkingFuzzySubtypes = false;
        for (var i = 0; i < workQueue_1.length; ++i) {
          var supertypeSet = workQueue_1[i];
          if (supertypeSet.has(supertype)) {
            if (!typenameSupertypeSet.has(supertype)) {
              if (checkingFuzzySubtypes) {
                __DEV__ && invariant.warn("Inferring subtype " + typename + " of supertype " + supertype);
              }
              typenameSupertypeSet.add(supertype);
            }
            return true;
          }
          supertypeSet.forEach(maybeEnqueue_1);
          if (needToCheckFuzzySubtypes && i === workQueue_1.length - 1 && selectionSetMatchesResult(fragment.selectionSet, result2, variables)) {
            needToCheckFuzzySubtypes = false;
            checkingFuzzySubtypes = true;
            this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
              var match = typename.match(regExp);
              if (match && match[0] === typename) {
                maybeEnqueue_1(fuzzyString);
              }
            });
          }
        }
      }
      return false;
    };
    Policies2.prototype.hasKeyArgs = function(typename, fieldName) {
      var policy = this.getFieldPolicy(typename, fieldName, false);
      return !!(policy && policy.keyFn);
    };
    Policies2.prototype.getStoreFieldName = function(fieldSpec) {
      var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
      var policy = this.getFieldPolicy(typename, fieldName, false);
      var storeFieldName;
      var keyFn = policy && policy.keyFn;
      if (keyFn && typename) {
        var context = {
          typename,
          fieldName,
          field: fieldSpec.field || null,
          variables: fieldSpec.variables
        };
        var args = argsFromFieldSpecifier(fieldSpec);
        while (keyFn) {
          var specifierOrString = keyFn(args, context);
          if (Array.isArray(specifierOrString)) {
            keyFn = keyArgsFnFromSpecifier(specifierOrString);
          } else {
            storeFieldName = specifierOrString || fieldName;
            break;
          }
        }
      }
      if (storeFieldName === void 0) {
        storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
      }
      if (storeFieldName === false) {
        return fieldName;
      }
      return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
    };
    Policies2.prototype.readField = function(options, context) {
      var objectOrReference = options.from;
      if (!objectOrReference)
        return;
      var nameOrField = options.field || options.fieldName;
      if (!nameOrField)
        return;
      if (options.typename === void 0) {
        var typename = context.store.getFieldValue(objectOrReference, "__typename");
        if (typename)
          options.typename = typename;
      }
      var storeFieldName = this.getStoreFieldName(options);
      var fieldName = fieldNameFromStoreName(storeFieldName);
      var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
      var policy = this.getFieldPolicy(options.typename, fieldName, false);
      var read = policy && policy.read;
      if (read) {
        var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
        return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
      }
      return existing;
    };
    Policies2.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
      var policy = this.getFieldPolicy(parentTypename, fieldName, false);
      var merge = policy && policy.merge;
      if (!merge && childTypename) {
        policy = this.getTypePolicy(childTypename);
        merge = policy && policy.merge;
      }
      return merge;
    };
    Policies2.prototype.runMergeFunction = function(existing, incoming, _a5, context, storage) {
      var field = _a5.field, typename = _a5.typename, merge = _a5.merge;
      if (merge === mergeTrueFn) {
        return makeMergeObjectsFunction(context.store)(existing, incoming);
      }
      if (merge === mergeFalseFn) {
        return incoming;
      }
      if (context.overwrite) {
        existing = void 0;
      }
      return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename, fieldName: field.name.value, field, variables: context.variables }, context, storage || Object.create(null)));
    };
    return Policies2;
  }();
  function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a5 = context.store, toReference = _a5.toReference, canRead = _a5.canRead;
    return {
      args: argsFromFieldSpecifier(fieldSpec),
      field: fieldSpec.field || null,
      fieldName,
      storeFieldName,
      variables,
      isReference,
      toReference,
      storage,
      cache: policies.cache,
      canRead,
      readField: function(fieldNameOrOptions, from) {
        var options;
        if (typeof fieldNameOrOptions === "string") {
          options = {
            fieldName: fieldNameOrOptions,
            from: arguments.length > 1 ? from : objectOrReference
          };
        } else if (isNonNullObject(fieldNameOrOptions)) {
          options = __assign({}, fieldNameOrOptions);
          if (!hasOwn.call(fieldNameOrOptions, "from")) {
            options.from = objectOrReference;
          }
        } else {
          __DEV__ && invariant.warn("Unexpected readField arguments: " + stringifyForDisplay(Array.from(arguments)));
          return;
        }
        if (__DEV__ && options.from === void 0) {
          __DEV__ && invariant.warn("Undefined 'from' passed to readField with arguments " + stringifyForDisplay(Array.from(arguments)));
        }
        if (options.variables === void 0) {
          options.variables = variables;
        }
        return policies.readField(options, context);
      },
      mergeObjects: makeMergeObjectsFunction(context.store)
    };
  }
  function makeMergeObjectsFunction(store) {
    return function mergeObjects(existing, incoming) {
      if (Array.isArray(existing) || Array.isArray(incoming)) {
        throw __DEV__ ? new InvariantError("Cannot automatically merge arrays") : new InvariantError(3);
      }
      if (isNonNullObject(existing) && isNonNullObject(incoming)) {
        var eType = store.getFieldValue(existing, "__typename");
        var iType = store.getFieldValue(incoming, "__typename");
        var typesDiffer = eType && iType && eType !== iType;
        if (typesDiffer) {
          return incoming;
        }
        if (isReference(existing) && storeValueIsStoreObject(incoming)) {
          store.merge(existing.__ref, incoming);
          return existing;
        }
        if (storeValueIsStoreObject(existing) && isReference(incoming)) {
          store.merge(existing, incoming.__ref);
          return incoming;
        }
        if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
          return __assign(__assign({}, existing), incoming);
        }
      }
      return incoming;
    };
  }
  function keyArgsFnFromSpecifier(specifier) {
    return function(args, context) {
      return args ? context.fieldName + ":" + JSON.stringify(computeKeyObject(args, specifier, false)) : context.fieldName;
    };
  }
  function keyFieldsFnFromSpecifier(specifier) {
    var trie = new Trie(canUseWeakMap);
    return function(object, context) {
      var aliasMap;
      if (context.selectionSet && context.fragmentMap) {
        var info = trie.lookupArray([
          context.selectionSet,
          context.fragmentMap
        ]);
        aliasMap = info.aliasMap || (info.aliasMap = makeAliasMap(context.selectionSet, context.fragmentMap));
      }
      var keyObject = context.keyObject = computeKeyObject(object, specifier, true, aliasMap);
      return context.typename + ":" + JSON.stringify(keyObject);
    };
  }
  function makeAliasMap(selectionSet, fragmentMap) {
    var map = Object.create(null);
    var workQueue = new Set([selectionSet]);
    workQueue.forEach(function(selectionSet2) {
      selectionSet2.selections.forEach(function(selection) {
        if (isField(selection)) {
          if (selection.alias) {
            var responseKey = selection.alias.value;
            var storeKey = selection.name.value;
            if (storeKey !== responseKey) {
              var aliases = map.aliases || (map.aliases = Object.create(null));
              aliases[storeKey] = responseKey;
            }
          }
          if (selection.selectionSet) {
            var subsets = map.subsets || (map.subsets = Object.create(null));
            subsets[selection.name.value] = makeAliasMap(selection.selectionSet, fragmentMap);
          }
        } else {
          var fragment = getFragmentFromSelection(selection, fragmentMap);
          if (fragment) {
            workQueue.add(fragment.selectionSet);
          }
        }
      });
    });
    return map;
  }
  function computeKeyObject(response, specifier, strict, aliasMap) {
    var keyObj = Object.create(null);
    var lastResponseKey;
    var lastActualKey;
    specifier.forEach(function(s) {
      if (Array.isArray(s)) {
        if (typeof lastActualKey === "string" && typeof lastResponseKey === "string") {
          var subsets = aliasMap && aliasMap.subsets;
          var subset = subsets && subsets[lastActualKey];
          keyObj[lastActualKey] = computeKeyObject(response[lastResponseKey], s, strict, subset);
        }
      } else {
        var aliases = aliasMap && aliasMap.aliases;
        var responseName = aliases && aliases[s] || s;
        if (hasOwn.call(response, responseName)) {
          keyObj[lastActualKey = s] = response[lastResponseKey = responseName];
        } else {
          __DEV__ ? invariant(!strict, "Missing field '" + responseName + "' while computing key fields") : invariant(!strict, 4);
          lastResponseKey = lastActualKey = void 0;
        }
      }
    });
    return keyObj;
  }

  // node_modules/@apollo/client/cache/inmemory/inMemoryCache.js
  var InMemoryCache = function(_super) {
    __extends(InMemoryCache2, _super);
    function InMemoryCache2(config) {
      if (config === void 0) {
        config = {};
      }
      var _this = _super.call(this) || this;
      _this.watches = new Set();
      _this.typenameDocumentCache = new Map();
      _this.makeVar = makeVar;
      _this.txCount = 0;
      _this.config = normalizeConfig(config);
      _this.addTypename = !!_this.config.addTypename;
      _this.policies = new Policies({
        cache: _this,
        dataIdFromObject: _this.config.dataIdFromObject,
        possibleTypes: _this.config.possibleTypes,
        typePolicies: _this.config.typePolicies
      });
      _this.init();
      return _this;
    }
    InMemoryCache2.prototype.init = function() {
      var rootStore = this.data = new EntityStore.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = rootStore.stump;
      this.resetResultCache();
    };
    InMemoryCache2.prototype.resetResultCache = function(resetResultIdentities) {
      var _this = this;
      var previousReader = this.storeReader;
      this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: shouldCanonizeResults(this.config),
        canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon
      }));
      this.maybeBroadcastWatch = wrap2(function(c, options) {
        return _this.broadcastWatch(c, options);
      }, {
        max: this.config.resultCacheMaxSize,
        makeCacheKey: function(c) {
          var store = c.optimistic ? _this.optimisticData : _this.data;
          if (supportsResultCaching(store)) {
            var optimistic = c.optimistic, rootId = c.rootId, variables = c.variables;
            return store.makeCacheKey(c.query, c.callback, canonicalStringify({ optimistic, rootId, variables }));
          }
        }
      });
      new Set([
        this.data.group,
        this.optimisticData.group
      ]).forEach(function(group) {
        return group.resetCaching();
      });
    };
    InMemoryCache2.prototype.restore = function(data) {
      this.init();
      if (data)
        this.data.replace(data);
      return this;
    };
    InMemoryCache2.prototype.extract = function(optimistic) {
      if (optimistic === void 0) {
        optimistic = false;
      }
      return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache2.prototype.read = function(options) {
      var _a5 = options.returnPartialData, returnPartialData = _a5 === void 0 ? false : _a5;
      try {
        return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData })).result || null;
      } catch (e) {
        if (e instanceof MissingFieldError) {
          return null;
        }
        throw e;
      }
    };
    InMemoryCache2.prototype.write = function(options) {
      try {
        ++this.txCount;
        return this.storeWriter.writeToStore(this.data, options);
      } finally {
        if (!--this.txCount && options.broadcast !== false) {
          this.broadcastWatches();
        }
      }
    };
    InMemoryCache2.prototype.modify = function(options) {
      if (hasOwn.call(options, "id") && !options.id) {
        return false;
      }
      var store = options.optimistic ? this.optimisticData : this.data;
      try {
        ++this.txCount;
        return store.modify(options.id || "ROOT_QUERY", options.fields);
      } finally {
        if (!--this.txCount && options.broadcast !== false) {
          this.broadcastWatches();
        }
      }
    };
    InMemoryCache2.prototype.diff = function(options) {
      return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
    };
    InMemoryCache2.prototype.watch = function(watch) {
      var _this = this;
      if (!this.watches.size) {
        recallCache(this);
      }
      this.watches.add(watch);
      if (watch.immediate) {
        this.maybeBroadcastWatch(watch);
      }
      return function() {
        if (_this.watches.delete(watch) && !_this.watches.size) {
          forgetCache(_this);
        }
        _this.maybeBroadcastWatch.forget(watch);
      };
    };
    InMemoryCache2.prototype.gc = function(options) {
      canonicalStringify.reset();
      var ids = this.optimisticData.gc();
      if (options && !this.txCount) {
        if (options.resetResultCache) {
          this.resetResultCache(options.resetResultIdentities);
        } else if (options.resetResultIdentities) {
          this.storeReader.resetCanon();
        }
      }
      return ids;
    };
    InMemoryCache2.prototype.retain = function(rootId, optimistic) {
      return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache2.prototype.release = function(rootId, optimistic) {
      return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache2.prototype.identify = function(object) {
      return isReference(object) ? object.__ref : this.policies.identify(object)[0];
    };
    InMemoryCache2.prototype.evict = function(options) {
      if (!options.id) {
        if (hasOwn.call(options, "id")) {
          return false;
        }
        options = __assign(__assign({}, options), { id: "ROOT_QUERY" });
      }
      try {
        ++this.txCount;
        return this.optimisticData.evict(options, this.data);
      } finally {
        if (!--this.txCount && options.broadcast !== false) {
          this.broadcastWatches();
        }
      }
    };
    InMemoryCache2.prototype.reset = function(options) {
      var _this = this;
      this.init();
      canonicalStringify.reset();
      if (options && options.discardWatches) {
        this.watches.forEach(function(watch) {
          return _this.maybeBroadcastWatch.forget(watch);
        });
        this.watches.clear();
        forgetCache(this);
      } else {
        this.broadcastWatches();
      }
      return Promise.resolve();
    };
    InMemoryCache2.prototype.removeOptimistic = function(idToRemove) {
      var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
      if (newOptimisticData !== this.optimisticData) {
        this.optimisticData = newOptimisticData;
        this.broadcastWatches();
      }
    };
    InMemoryCache2.prototype.batch = function(options) {
      var _this = this;
      var update = options.update, _a5 = options.optimistic, optimistic = _a5 === void 0 ? true : _a5, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
      var perform = function(layer) {
        var _a6 = _this, data = _a6.data, optimisticData = _a6.optimisticData;
        ++_this.txCount;
        if (layer) {
          _this.data = _this.optimisticData = layer;
        }
        try {
          update(_this);
        } finally {
          --_this.txCount;
          _this.data = data;
          _this.optimisticData = optimisticData;
        }
      };
      var alreadyDirty = new Set();
      if (onWatchUpdated && !this.txCount) {
        this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch) {
          alreadyDirty.add(watch);
          return false;
        } }));
      }
      if (typeof optimistic === "string") {
        this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
      } else if (optimistic === false) {
        perform(this.data);
      } else {
        perform();
      }
      if (typeof removeOptimistic === "string") {
        this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
      }
      if (onWatchUpdated && alreadyDirty.size) {
        this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch, diff) {
          var result2 = onWatchUpdated.call(this, watch, diff);
          if (result2 !== false) {
            alreadyDirty.delete(watch);
          }
          return result2;
        } }));
        if (alreadyDirty.size) {
          alreadyDirty.forEach(function(watch) {
            return _this.maybeBroadcastWatch.dirty(watch);
          });
        }
      } else {
        this.broadcastWatches(options);
      }
    };
    InMemoryCache2.prototype.performTransaction = function(update, optimisticId) {
      return this.batch({
        update,
        optimistic: optimisticId || optimisticId !== null
      });
    };
    InMemoryCache2.prototype.transformDocument = function(document2) {
      if (this.addTypename) {
        var result2 = this.typenameDocumentCache.get(document2);
        if (!result2) {
          result2 = addTypenameToDocument(document2);
          this.typenameDocumentCache.set(document2, result2);
          this.typenameDocumentCache.set(result2, result2);
        }
        return result2;
      }
      return document2;
    };
    InMemoryCache2.prototype.broadcastWatches = function(options) {
      var _this = this;
      if (!this.txCount) {
        this.watches.forEach(function(c) {
          return _this.maybeBroadcastWatch(c, options);
        });
      }
    };
    InMemoryCache2.prototype.broadcastWatch = function(c, options) {
      var lastDiff = c.lastDiff;
      var diff = this.diff(c);
      if (options) {
        if (c.optimistic && typeof options.optimistic === "string") {
          diff.fromOptimisticTransaction = true;
        }
        if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
          return;
        }
      }
      if (!lastDiff || !equal(lastDiff.result, diff.result)) {
        c.callback(c.lastDiff = diff, lastDiff);
      }
    };
    return InMemoryCache2;
  }(ApolloCache);

  // node_modules/@apollo/client/errors/index.js
  function isApolloError(err) {
    return err.hasOwnProperty("graphQLErrors");
  }
  var generateErrorMessage = function(err) {
    var message = "";
    if (isNonEmptyArray(err.graphQLErrors) || isNonEmptyArray(err.clientErrors)) {
      var errors = (err.graphQLErrors || []).concat(err.clientErrors || []);
      errors.forEach(function(error) {
        var errorMessage = error ? error.message : "Error message not found.";
        message += errorMessage + "\n";
      });
    }
    if (err.networkError) {
      message += err.networkError.message + "\n";
    }
    message = message.replace(/\n$/, "");
    return message;
  };
  var ApolloError = function(_super) {
    __extends(ApolloError2, _super);
    function ApolloError2(_a5) {
      var graphQLErrors = _a5.graphQLErrors, clientErrors = _a5.clientErrors, networkError = _a5.networkError, errorMessage = _a5.errorMessage, extraInfo = _a5.extraInfo;
      var _this = _super.call(this, errorMessage) || this;
      _this.graphQLErrors = graphQLErrors || [];
      _this.clientErrors = clientErrors || [];
      _this.networkError = networkError || null;
      _this.message = errorMessage || generateErrorMessage(_this);
      _this.extraInfo = extraInfo;
      _this.__proto__ = ApolloError2.prototype;
      return _this;
    }
    return ApolloError2;
  }(Error);

  // node_modules/@apollo/client/core/networkStatus.js
  var NetworkStatus;
  (function(NetworkStatus2) {
    NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
    NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
    NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
    NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
    NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
    NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
    NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
  })(NetworkStatus || (NetworkStatus = {}));
  function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
  }

  // node_modules/@apollo/client/core/ObservableQuery.js
  var assign = Object.assign;
  var hasOwnProperty5 = Object.hasOwnProperty;
  var warnedAboutUpdateQuery = false;
  var ObservableQuery = function(_super) {
    __extends(ObservableQuery2, _super);
    function ObservableQuery2(_a5) {
      var queryManager = _a5.queryManager, queryInfo = _a5.queryInfo, options = _a5.options;
      var _this = _super.call(this, function(observer) {
        try {
          var subObserver = observer._subscription._observer;
          if (subObserver && !subObserver.error) {
            subObserver.error = defaultSubscriptionObserverErrorCallback;
          }
        } catch (_a6) {
        }
        var first = !_this.observers.size;
        _this.observers.add(observer);
        var last = _this.last;
        if (last && last.error) {
          observer.error && observer.error(last.error);
        } else if (last && last.result) {
          observer.next && observer.next(last.result);
        }
        if (first) {
          _this.reobserve().catch(function() {
          });
        }
        return function() {
          if (_this.observers.delete(observer) && !_this.observers.size) {
            _this.tearDownQuery();
          }
        };
      }) || this;
      _this.observers = new Set();
      _this.subscriptions = new Set();
      _this.isTornDown = false;
      _this.options = options;
      _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
      var opDef = getOperationDefinition(options.query);
      _this.queryName = opDef && opDef.name && opDef.name.value;
      _this.initialFetchPolicy = options.fetchPolicy || "cache-first";
      _this.queryManager = queryManager;
      _this.queryInfo = queryInfo;
      return _this;
    }
    Object.defineProperty(ObservableQuery2.prototype, "variables", {
      get: function() {
        return this.options.variables;
      },
      enumerable: false,
      configurable: true
    });
    ObservableQuery2.prototype.result = function() {
      var _this = this;
      return new Promise(function(resolve, reject) {
        var observer = {
          next: function(result2) {
            resolve(result2);
            _this.observers.delete(observer);
            if (!_this.observers.size) {
              _this.queryManager.removeQuery(_this.queryId);
            }
            setTimeout(function() {
              subscription2.unsubscribe();
            }, 0);
          },
          error: reject
        };
        var subscription2 = _this.subscribe(observer);
      });
    };
    ObservableQuery2.prototype.getCurrentResult = function(saveAsLastResult) {
      if (saveAsLastResult === void 0) {
        saveAsLastResult = true;
      }
      var lastResult = this.getLastResult(true);
      var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
      var result2 = __assign(__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus });
      var _a5 = this.options.fetchPolicy, fetchPolicy = _a5 === void 0 ? "cache-first" : _a5;
      var shouldReturnCachedData = lastResult || fetchPolicy !== "network-only" && fetchPolicy !== "no-cache" && fetchPolicy !== "standby";
      if (shouldReturnCachedData && !this.queryManager.transform(this.options.query).hasForcedResolvers) {
        var diff = this.queryInfo.getDiff();
        if (diff.complete || this.options.returnPartialData) {
          result2.data = diff.result;
        }
        if (equal(result2.data, {})) {
          result2.data = void 0;
        }
        if (diff.complete) {
          if (result2.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
            result2.networkStatus = NetworkStatus.ready;
            result2.loading = false;
          }
          delete result2.partial;
        } else if (fetchPolicy !== "no-cache") {
          result2.partial = true;
        }
        if (__DEV__ && !diff.complete && !this.options.partialRefetch && !result2.loading && !result2.data && !result2.error) {
          logMissingFieldErrors(diff.missing);
        }
      }
      if (saveAsLastResult) {
        this.updateLastResult(result2);
      }
      return result2;
    };
    ObservableQuery2.prototype.isDifferentFromLastResult = function(newResult) {
      return !this.last || !equal(this.last.result, newResult);
    };
    ObservableQuery2.prototype.getLast = function(key, variablesMustMatch) {
      var last = this.last;
      if (last && last[key] && (!variablesMustMatch || equal(last.variables, this.variables))) {
        return last[key];
      }
    };
    ObservableQuery2.prototype.getLastResult = function(variablesMustMatch) {
      return this.getLast("result", variablesMustMatch);
    };
    ObservableQuery2.prototype.getLastError = function(variablesMustMatch) {
      return this.getLast("error", variablesMustMatch);
    };
    ObservableQuery2.prototype.resetLastResults = function() {
      delete this.last;
      this.isTornDown = false;
    };
    ObservableQuery2.prototype.resetQueryStoreErrors = function() {
      this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery2.prototype.refetch = function(variables) {
      var _a5;
      var reobserveOptions = {
        pollInterval: 0
      };
      var fetchPolicy = this.options.fetchPolicy;
      if (fetchPolicy === "no-cache") {
        reobserveOptions.fetchPolicy = "no-cache";
      } else if (fetchPolicy !== "cache-and-network") {
        reobserveOptions.fetchPolicy = "network-only";
      }
      if (__DEV__ && variables && hasOwnProperty5.call(variables, "variables")) {
        var queryDef = getQueryDefinition(this.options.query);
        var vars = queryDef.variableDefinitions;
        if (!vars || !vars.some(function(v) {
          return v.variable.name.value === "variables";
        })) {
          __DEV__ && invariant.warn("Called refetch(" + JSON.stringify(variables) + ") for query " + (((_a5 = queryDef.name) === null || _a5 === void 0 ? void 0 : _a5.value) || JSON.stringify(queryDef)) + ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?");
        }
      }
      if (variables && !equal(this.options.variables, variables)) {
        reobserveOptions.variables = this.options.variables = __assign(__assign({}, this.options.variables), variables);
      }
      this.queryInfo.resetLastWrite();
      return this.reobserve(reobserveOptions, NetworkStatus.refetch);
    };
    ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
      var _this = this;
      var combinedOptions = __assign(__assign({}, fetchMoreOptions.query ? fetchMoreOptions : __assign(__assign(__assign({}, this.options), fetchMoreOptions), { variables: __assign(__assign({}, this.options.variables), fetchMoreOptions.variables) })), { fetchPolicy: "no-cache" });
      var qid = this.queryManager.generateQueryId();
      if (combinedOptions.notifyOnNetworkStatusChange) {
        this.queryInfo.networkStatus = NetworkStatus.fetchMore;
        this.observe();
      }
      return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function(fetchMoreResult) {
        var data = fetchMoreResult.data;
        var updateQuery = fetchMoreOptions.updateQuery;
        if (updateQuery) {
          if (__DEV__ && !warnedAboutUpdateQuery) {
            __DEV__ && invariant.warn("The updateQuery callback for fetchMore is deprecated, and will be removed\nin the next major version of Apollo Client.\n\nPlease convert updateQuery functions to field policies with appropriate\nread and merge functions, or use/adapt a helper function (such as\nconcatPagination, offsetLimitPagination, or relayStylePagination) from\n@apollo/client/utilities.\n\nThe field policy system handles pagination more effectively than a\nhand-written updateQuery function, and you only need to define the policy\nonce, rather than every time you call fetchMore.");
            warnedAboutUpdateQuery = true;
          }
          _this.updateQuery(function(previous) {
            return updateQuery(previous, {
              fetchMoreResult: data,
              variables: combinedOptions.variables
            });
          });
        } else {
          _this.queryManager.cache.writeQuery({
            query: combinedOptions.query,
            variables: combinedOptions.variables,
            data
          });
        }
        return fetchMoreResult;
      }).finally(function() {
        _this.queryManager.stopQuery(qid);
        _this.reobserve();
      });
    };
    ObservableQuery2.prototype.subscribeToMore = function(options) {
      var _this = this;
      var subscription2 = this.queryManager.startGraphQLSubscription({
        query: options.document,
        variables: options.variables,
        context: options.context
      }).subscribe({
        next: function(subscriptionData) {
          var updateQuery = options.updateQuery;
          if (updateQuery) {
            _this.updateQuery(function(previous, _a5) {
              var variables = _a5.variables;
              return updateQuery(previous, {
                subscriptionData,
                variables
              });
            });
          }
        },
        error: function(err) {
          if (options.onError) {
            options.onError(err);
            return;
          }
          __DEV__ && invariant.error("Unhandled GraphQL subscription error", err);
        }
      });
      this.subscriptions.add(subscription2);
      return function() {
        if (_this.subscriptions.delete(subscription2)) {
          subscription2.unsubscribe();
        }
      };
    };
    ObservableQuery2.prototype.setOptions = function(newOptions) {
      return this.reobserve(newOptions);
    };
    ObservableQuery2.prototype.setVariables = function(variables) {
      if (equal(this.variables, variables)) {
        return this.observers.size ? this.result() : Promise.resolve();
      }
      this.options.variables = variables;
      if (!this.observers.size) {
        return Promise.resolve();
      }
      return this.reobserve({
        fetchPolicy: this.initialFetchPolicy,
        variables
      }, NetworkStatus.setVariables);
    };
    ObservableQuery2.prototype.updateQuery = function(mapFn) {
      var queryManager = this.queryManager;
      var result2 = queryManager.cache.diff({
        query: this.options.query,
        variables: this.variables,
        returnPartialData: true,
        optimistic: false
      }).result;
      var newResult = mapFn(result2, {
        variables: this.variables
      });
      if (newResult) {
        queryManager.cache.writeQuery({
          query: this.options.query,
          data: newResult,
          variables: this.variables
        });
        queryManager.broadcastQueries();
      }
    };
    ObservableQuery2.prototype.startPolling = function(pollInterval) {
      this.options.pollInterval = pollInterval;
      this.updatePolling();
    };
    ObservableQuery2.prototype.stopPolling = function() {
      this.options.pollInterval = 0;
      this.updatePolling();
    };
    ObservableQuery2.prototype.fetch = function(options, newNetworkStatus) {
      this.queryManager.setObservableQuery(this);
      return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
    };
    ObservableQuery2.prototype.updatePolling = function() {
      var _this = this;
      if (this.queryManager.ssrMode) {
        return;
      }
      var _a5 = this, pollingInfo = _a5.pollingInfo, pollInterval = _a5.options.pollInterval;
      if (!pollInterval) {
        if (pollingInfo) {
          clearTimeout(pollingInfo.timeout);
          delete this.pollingInfo;
        }
        return;
      }
      if (pollingInfo && pollingInfo.interval === pollInterval) {
        return;
      }
      __DEV__ ? invariant(pollInterval, "Attempted to start a polling query without a polling interval.") : invariant(pollInterval, 12);
      var info = pollingInfo || (this.pollingInfo = {});
      info.interval = pollInterval;
      var maybeFetch = function() {
        if (_this.pollingInfo) {
          if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
            _this.reobserve({
              fetchPolicy: "network-only"
            }, NetworkStatus.poll).then(poll, poll);
          } else {
            poll();
          }
        }
        ;
      };
      var poll = function() {
        var info2 = _this.pollingInfo;
        if (info2) {
          clearTimeout(info2.timeout);
          info2.timeout = setTimeout(maybeFetch, info2.interval);
        }
      };
      poll();
    };
    ObservableQuery2.prototype.updateLastResult = function(newResult, variables) {
      if (variables === void 0) {
        variables = this.variables;
      }
      this.last = __assign(__assign({}, this.last), { result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult), variables });
      if (!isNonEmptyArray(newResult.errors)) {
        delete this.last.error;
      }
      return this.last;
    };
    ObservableQuery2.prototype.reobserve = function(newOptions, newNetworkStatus) {
      var _this = this;
      this.isTornDown = false;
      var useDisposableConcast = newNetworkStatus === NetworkStatus.refetch || newNetworkStatus === NetworkStatus.fetchMore || newNetworkStatus === NetworkStatus.poll;
      var oldVariables = this.options.variables;
      var options = useDisposableConcast ? compact(this.options, newOptions) : assign(this.options, compact(newOptions));
      if (!useDisposableConcast) {
        this.updatePolling();
        if (newOptions && newOptions.variables && !newOptions.fetchPolicy && !equal(newOptions.variables, oldVariables)) {
          options.fetchPolicy = this.initialFetchPolicy;
          if (newNetworkStatus === void 0) {
            newNetworkStatus = NetworkStatus.setVariables;
          }
        }
      }
      var variables = options.variables && __assign({}, options.variables);
      var concast = this.fetch(options, newNetworkStatus);
      var observer = {
        next: function(result2) {
          _this.reportResult(result2, variables);
        },
        error: function(error) {
          _this.reportError(error, variables);
        }
      };
      if (!useDisposableConcast) {
        if (this.concast && this.observer) {
          this.concast.removeObserver(this.observer, true);
        }
        this.concast = concast;
        this.observer = observer;
      }
      concast.addObserver(observer);
      return concast.promise;
    };
    ObservableQuery2.prototype.observe = function() {
      this.reportResult(this.getCurrentResult(false), this.variables);
    };
    ObservableQuery2.prototype.reportResult = function(result2, variables) {
      if (this.getLastError() || this.isDifferentFromLastResult(result2)) {
        this.updateLastResult(result2, variables);
        iterateObserversSafely(this.observers, "next", result2);
      }
    };
    ObservableQuery2.prototype.reportError = function(error, variables) {
      var errorResult = __assign(__assign({}, this.getLastResult()), { error, errors: error.graphQLErrors, networkStatus: NetworkStatus.error, loading: false });
      this.updateLastResult(errorResult, variables);
      iterateObserversSafely(this.observers, "error", this.last.error = error);
    };
    ObservableQuery2.prototype.hasObservers = function() {
      return this.observers.size > 0;
    };
    ObservableQuery2.prototype.tearDownQuery = function() {
      if (this.isTornDown)
        return;
      if (this.concast && this.observer) {
        this.concast.removeObserver(this.observer);
        delete this.concast;
        delete this.observer;
      }
      this.stopPolling();
      this.subscriptions.forEach(function(sub) {
        return sub.unsubscribe();
      });
      this.subscriptions.clear();
      this.queryManager.stopQuery(this.queryId);
      this.observers.clear();
      this.isTornDown = true;
    };
    return ObservableQuery2;
  }(Observable);
  fixObservableSubclass(ObservableQuery);
  function defaultSubscriptionObserverErrorCallback(error) {
    __DEV__ && invariant.error("Unhandled error", error.message, error.stack);
  }
  function logMissingFieldErrors(missing) {
    if (__DEV__ && isNonEmptyArray(missing)) {
      __DEV__ && invariant.debug("Missing cache result fields: " + missing.map(function(m) {
        return m.path.join(".");
      }).join(", "), missing);
    }
  }
  function applyNextFetchPolicy(options) {
    var _a5 = options.fetchPolicy, fetchPolicy = _a5 === void 0 ? "cache-first" : _a5, nextFetchPolicy = options.nextFetchPolicy;
    if (nextFetchPolicy) {
      options.fetchPolicy = typeof nextFetchPolicy === "function" ? nextFetchPolicy.call(options, fetchPolicy) : nextFetchPolicy;
    }
  }

  // node_modules/@apollo/client/core/LocalState.js
  var LocalState = function() {
    function LocalState2(_a5) {
      var cache2 = _a5.cache, client = _a5.client, resolvers = _a5.resolvers, fragmentMatcher = _a5.fragmentMatcher;
      this.cache = cache2;
      if (client) {
        this.client = client;
      }
      if (resolvers) {
        this.addResolvers(resolvers);
      }
      if (fragmentMatcher) {
        this.setFragmentMatcher(fragmentMatcher);
      }
    }
    LocalState2.prototype.addResolvers = function(resolvers) {
      var _this = this;
      this.resolvers = this.resolvers || {};
      if (Array.isArray(resolvers)) {
        resolvers.forEach(function(resolverGroup) {
          _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
        });
      } else {
        this.resolvers = mergeDeep(this.resolvers, resolvers);
      }
    };
    LocalState2.prototype.setResolvers = function(resolvers) {
      this.resolvers = {};
      this.addResolvers(resolvers);
    };
    LocalState2.prototype.getResolvers = function() {
      return this.resolvers || {};
    };
    LocalState2.prototype.runResolvers = function(_a5) {
      var document2 = _a5.document, remoteResult = _a5.remoteResult, context = _a5.context, variables = _a5.variables, _b = _a5.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_c) {
          if (document2) {
            return [2, this.resolveDocument(document2, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
              return __assign(__assign({}, remoteResult), { data: localResult.result });
            })];
          }
          return [2, remoteResult];
        });
      });
    };
    LocalState2.prototype.setFragmentMatcher = function(fragmentMatcher) {
      this.fragmentMatcher = fragmentMatcher;
    };
    LocalState2.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    };
    LocalState2.prototype.clientQuery = function(document2) {
      if (hasDirectives(["client"], document2)) {
        if (this.resolvers) {
          return document2;
        }
      }
      return null;
    };
    LocalState2.prototype.serverQuery = function(document2) {
      return removeClientSetsFromDocument(document2);
    };
    LocalState2.prototype.prepareContext = function(context) {
      var cache2 = this.cache;
      return __assign(__assign({}, context), { cache: cache2, getCacheKey: function(obj) {
        return cache2.identify(obj);
      } });
    };
    LocalState2.prototype.addExportedVariables = function(document2, variables, context) {
      if (variables === void 0) {
        variables = {};
      }
      if (context === void 0) {
        context = {};
      }
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a5) {
          if (document2) {
            return [2, this.resolveDocument(document2, this.buildRootValueFromCache(document2, variables) || {}, this.prepareContext(context), variables).then(function(data) {
              return __assign(__assign({}, variables), data.exportedVariables);
            })];
          }
          return [2, __assign({}, variables)];
        });
      });
    };
    LocalState2.prototype.shouldForceResolvers = function(document2) {
      var forceResolvers = false;
      visit(document2, {
        Directive: {
          enter: function(node) {
            if (node.name.value === "client" && node.arguments) {
              forceResolvers = node.arguments.some(function(arg) {
                return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
              });
              if (forceResolvers) {
                return BREAK;
              }
            }
          }
        }
      });
      return forceResolvers;
    };
    LocalState2.prototype.buildRootValueFromCache = function(document2, variables) {
      return this.cache.diff({
        query: buildQueryFromSelectionSet(document2),
        variables,
        returnPartialData: true,
        optimistic: false
      }).result;
    };
    LocalState2.prototype.resolveDocument = function(document2, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
      if (context === void 0) {
        context = {};
      }
      if (variables === void 0) {
        variables = {};
      }
      if (fragmentMatcher === void 0) {
        fragmentMatcher = function() {
          return true;
        };
      }
      if (onlyRunForcedResolvers === void 0) {
        onlyRunForcedResolvers = false;
      }
      return __awaiter(this, void 0, void 0, function() {
        var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a5, cache2, client, execContext;
        return __generator(this, function(_b) {
          mainDefinition = getMainDefinition(document2);
          fragments = getFragmentDefinitions(document2);
          fragmentMap = createFragmentMap(fragments);
          definitionOperation = mainDefinition.operation;
          defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
          _a5 = this, cache2 = _a5.cache, client = _a5.client;
          execContext = {
            fragmentMap,
            context: __assign(__assign({}, context), { cache: cache2, client }),
            variables,
            fragmentMatcher,
            defaultOperationType,
            exportedVariables: {},
            onlyRunForcedResolvers
          };
          return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function(result2) {
            return {
              result: result2,
              exportedVariables: execContext.exportedVariables
            };
          })];
        });
      });
    };
    LocalState2.prototype.resolveSelectionSet = function(selectionSet, rootValue, execContext) {
      return __awaiter(this, void 0, void 0, function() {
        var fragmentMap, context, variables, resultsToMerge, execute2;
        var _this = this;
        return __generator(this, function(_a5) {
          fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
          resultsToMerge = [rootValue];
          execute2 = function(selection) {
            return __awaiter(_this, void 0, void 0, function() {
              var fragment, typeCondition;
              return __generator(this, function(_a6) {
                if (!shouldInclude(selection, variables)) {
                  return [2];
                }
                if (isField(selection)) {
                  return [2, this.resolveField(selection, rootValue, execContext).then(function(fieldResult) {
                    var _a7;
                    if (typeof fieldResult !== "undefined") {
                      resultsToMerge.push((_a7 = {}, _a7[resultKeyNameFromField(selection)] = fieldResult, _a7));
                    }
                  })];
                }
                if (isInlineFragment(selection)) {
                  fragment = selection;
                } else {
                  fragment = fragmentMap[selection.name.value];
                  __DEV__ ? invariant(fragment, "No fragment named " + selection.name.value) : invariant(fragment, 11);
                }
                if (fragment && fragment.typeCondition) {
                  typeCondition = fragment.typeCondition.name.value;
                  if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                    return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function(fragmentResult) {
                      resultsToMerge.push(fragmentResult);
                    })];
                  }
                }
                return [2];
              });
            });
          };
          return [2, Promise.all(selectionSet.selections.map(execute2)).then(function() {
            return mergeDeepArray(resultsToMerge);
          })];
        });
      });
    };
    LocalState2.prototype.resolveField = function(field, rootValue, execContext) {
      return __awaiter(this, void 0, void 0, function() {
        var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
        var _this = this;
        return __generator(this, function(_a5) {
          variables = execContext.variables;
          fieldName = field.name.value;
          aliasedFieldName = resultKeyNameFromField(field);
          aliasUsed = fieldName !== aliasedFieldName;
          defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
          resultPromise = Promise.resolve(defaultResult);
          if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
            resolverType = rootValue.__typename || execContext.defaultOperationType;
            resolverMap = this.resolvers && this.resolvers[resolverType];
            if (resolverMap) {
              resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
              if (resolve) {
                resultPromise = Promise.resolve(cacheSlot.withValue(this.cache, resolve, [
                  rootValue,
                  argumentsObjectFromField(field, variables),
                  execContext.context,
                  { field, fragmentMap: execContext.fragmentMap }
                ]));
              }
            }
          }
          return [2, resultPromise.then(function(result2) {
            if (result2 === void 0) {
              result2 = defaultResult;
            }
            if (field.directives) {
              field.directives.forEach(function(directive) {
                if (directive.name.value === "export" && directive.arguments) {
                  directive.arguments.forEach(function(arg) {
                    if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                      execContext.exportedVariables[arg.value.value] = result2;
                    }
                  });
                }
              });
            }
            if (!field.selectionSet) {
              return result2;
            }
            if (result2 == null) {
              return result2;
            }
            if (Array.isArray(result2)) {
              return _this.resolveSubSelectedArray(field, result2, execContext);
            }
            if (field.selectionSet) {
              return _this.resolveSelectionSet(field.selectionSet, result2, execContext);
            }
          })];
        });
      });
    };
    LocalState2.prototype.resolveSubSelectedArray = function(field, result2, execContext) {
      var _this = this;
      return Promise.all(result2.map(function(item) {
        if (item === null) {
          return null;
        }
        if (Array.isArray(item)) {
          return _this.resolveSubSelectedArray(field, item, execContext);
        }
        if (field.selectionSet) {
          return _this.resolveSelectionSet(field.selectionSet, item, execContext);
        }
      }));
    };
    return LocalState2;
  }();

  // node_modules/@apollo/client/core/QueryInfo.js
  var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
  function wrapDestructiveCacheMethod(cache2, methodName) {
    var original = cache2[methodName];
    if (typeof original === "function") {
      cache2[methodName] = function() {
        destructiveMethodCounts.set(cache2, (destructiveMethodCounts.get(cache2) + 1) % 1e15);
        return original.apply(this, arguments);
      };
    }
  }
  function cancelNotifyTimeout(info) {
    if (info["notifyTimeout"]) {
      clearTimeout(info["notifyTimeout"]);
      info["notifyTimeout"] = void 0;
    }
  }
  var QueryInfo = function() {
    function QueryInfo2(queryManager, queryId) {
      if (queryId === void 0) {
        queryId = queryManager.generateQueryId();
      }
      this.queryId = queryId;
      this.listeners = new Set();
      this.document = null;
      this.lastRequestId = 1;
      this.subscriptions = new Set();
      this.stopped = false;
      this.dirty = false;
      this.observableQuery = null;
      var cache2 = this.cache = queryManager.cache;
      if (!destructiveMethodCounts.has(cache2)) {
        destructiveMethodCounts.set(cache2, 0);
        wrapDestructiveCacheMethod(cache2, "evict");
        wrapDestructiveCacheMethod(cache2, "modify");
        wrapDestructiveCacheMethod(cache2, "reset");
      }
    }
    QueryInfo2.prototype.init = function(query) {
      var networkStatus = query.networkStatus || NetworkStatus.loading;
      if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) {
        networkStatus = NetworkStatus.setVariables;
      }
      if (!equal(query.variables, this.variables)) {
        this.lastDiff = void 0;
      }
      Object.assign(this, {
        document: query.document,
        variables: query.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus
      });
      if (query.observableQuery) {
        this.setObservableQuery(query.observableQuery);
      }
      if (query.lastRequestId) {
        this.lastRequestId = query.lastRequestId;
      }
      return this;
    };
    QueryInfo2.prototype.reset = function() {
      cancelNotifyTimeout(this);
      this.lastDiff = void 0;
      this.dirty = false;
    };
    QueryInfo2.prototype.getDiff = function(variables) {
      if (variables === void 0) {
        variables = this.variables;
      }
      var options = this.getDiffOptions(variables);
      if (this.lastDiff && equal(options, this.lastDiff.options)) {
        return this.lastDiff.diff;
      }
      this.updateWatch(this.variables = variables);
      var oq = this.observableQuery;
      if (oq && oq.options.fetchPolicy === "no-cache") {
        return { complete: false };
      }
      var diff = this.cache.diff(options);
      this.updateLastDiff(diff, options);
      return diff;
    };
    QueryInfo2.prototype.updateLastDiff = function(diff, options) {
      this.lastDiff = diff ? {
        diff,
        options: options || this.getDiffOptions()
      } : void 0;
    };
    QueryInfo2.prototype.getDiffOptions = function(variables) {
      var _a5;
      if (variables === void 0) {
        variables = this.variables;
      }
      return {
        query: this.document,
        variables,
        returnPartialData: true,
        optimistic: true,
        canonizeResults: (_a5 = this.observableQuery) === null || _a5 === void 0 ? void 0 : _a5.options.canonizeResults
      };
    };
    QueryInfo2.prototype.setDiff = function(diff) {
      var _this = this;
      var oldDiff = this.lastDiff && this.lastDiff.diff;
      this.updateLastDiff(diff);
      if (!this.dirty && !equal(oldDiff && oldDiff.result, diff && diff.result)) {
        this.dirty = true;
        if (!this.notifyTimeout) {
          this.notifyTimeout = setTimeout(function() {
            return _this.notify();
          }, 0);
        }
      }
    };
    QueryInfo2.prototype.setObservableQuery = function(oq) {
      var _this = this;
      if (oq === this.observableQuery)
        return;
      if (this.oqListener) {
        this.listeners.delete(this.oqListener);
      }
      this.observableQuery = oq;
      if (oq) {
        oq["queryInfo"] = this;
        this.listeners.add(this.oqListener = function() {
          if (_this.getDiff().fromOptimisticTransaction) {
            oq["observe"]();
          } else {
            oq.reobserve();
          }
        });
      } else {
        delete this.oqListener;
      }
    };
    QueryInfo2.prototype.notify = function() {
      var _this = this;
      cancelNotifyTimeout(this);
      if (this.shouldNotify()) {
        this.listeners.forEach(function(listener) {
          return listener(_this);
        });
      }
      this.dirty = false;
    };
    QueryInfo2.prototype.shouldNotify = function() {
      if (!this.dirty || !this.listeners.size) {
        return false;
      }
      if (isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
        var fetchPolicy = this.observableQuery.options.fetchPolicy;
        if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") {
          return false;
        }
      }
      return true;
    };
    QueryInfo2.prototype.stop = function() {
      if (!this.stopped) {
        this.stopped = true;
        this.reset();
        this.cancel();
        this.cancel = QueryInfo2.prototype.cancel;
        this.subscriptions.forEach(function(sub) {
          return sub.unsubscribe();
        });
        var oq = this.observableQuery;
        if (oq)
          oq.stopPolling();
      }
    };
    QueryInfo2.prototype.cancel = function() {
    };
    QueryInfo2.prototype.updateWatch = function(variables) {
      var _this = this;
      if (variables === void 0) {
        variables = this.variables;
      }
      var oq = this.observableQuery;
      if (oq && oq.options.fetchPolicy === "no-cache") {
        return;
      }
      var watchOptions = __assign(__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function(diff) {
        return _this.setDiff(diff);
      } });
      if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
        this.cancel();
        this.cancel = this.cache.watch(this.lastWatch = watchOptions);
      }
    };
    QueryInfo2.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    };
    QueryInfo2.prototype.shouldWrite = function(result2, variables) {
      var lastWrite = this.lastWrite;
      return !(lastWrite && lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result2.data, lastWrite.result.data));
    };
    QueryInfo2.prototype.markResult = function(result2, options, cacheWriteBehavior) {
      var _this = this;
      this.graphQLErrors = isNonEmptyArray(result2.errors) ? result2.errors : [];
      this.reset();
      if (options.fetchPolicy === "no-cache") {
        this.updateLastDiff({ result: result2.data, complete: true }, this.getDiffOptions(options.variables));
      } else if (cacheWriteBehavior !== 0) {
        if (shouldWriteResult(result2, options.errorPolicy)) {
          this.cache.performTransaction(function(cache2) {
            if (_this.shouldWrite(result2, options.variables)) {
              cache2.writeQuery({
                query: _this.document,
                data: result2.data,
                variables: options.variables,
                overwrite: cacheWriteBehavior === 1
              });
              _this.lastWrite = {
                result: result2,
                variables: options.variables,
                dmCount: destructiveMethodCounts.get(_this.cache)
              };
            } else {
              if (_this.lastDiff && _this.lastDiff.diff.complete) {
                result2.data = _this.lastDiff.diff.result;
                return;
              }
            }
            var diffOptions = _this.getDiffOptions(options.variables);
            var diff = cache2.diff(diffOptions);
            if (!_this.stopped) {
              _this.updateWatch(options.variables);
            }
            _this.updateLastDiff(diff, diffOptions);
            if (diff.complete) {
              result2.data = diff.result;
            }
          });
        } else {
          this.lastWrite = void 0;
        }
      }
    };
    QueryInfo2.prototype.markReady = function() {
      this.networkError = null;
      return this.networkStatus = NetworkStatus.ready;
    };
    QueryInfo2.prototype.markError = function(error) {
      this.networkStatus = NetworkStatus.error;
      this.lastWrite = void 0;
      this.reset();
      if (error.graphQLErrors) {
        this.graphQLErrors = error.graphQLErrors;
      }
      if (error.networkError) {
        this.networkError = error.networkError;
      }
      return error;
    };
    return QueryInfo2;
  }();
  function shouldWriteResult(result2, errorPolicy) {
    if (errorPolicy === void 0) {
      errorPolicy = "none";
    }
    var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
    var writeWithErrors = !graphQLResultHasError(result2);
    if (!writeWithErrors && ignoreErrors && result2.data) {
      writeWithErrors = true;
    }
    return writeWithErrors;
  }

  // node_modules/@apollo/client/core/QueryManager.js
  var hasOwnProperty6 = Object.prototype.hasOwnProperty;
  var QueryManager = function() {
    function QueryManager2(_a5) {
      var cache2 = _a5.cache, link2 = _a5.link, _b = _a5.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a5.onBroadcast, _c = _a5.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a5.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a5.localState, assumeImmutableResults = _a5.assumeImmutableResults;
      this.clientAwareness = {};
      this.queries = new Map();
      this.fetchCancelFns = new Map();
      this.transformCache = new (canUseWeakMap ? WeakMap : Map)();
      this.queryIdCounter = 1;
      this.requestIdCounter = 1;
      this.mutationIdCounter = 1;
      this.inFlightLinkObservables = new Map();
      this.cache = cache2;
      this.link = link2;
      this.queryDeduplication = queryDeduplication;
      this.clientAwareness = clientAwareness;
      this.localState = localState || new LocalState({ cache: cache2 });
      this.ssrMode = ssrMode;
      this.assumeImmutableResults = !!assumeImmutableResults;
      if (this.onBroadcast = onBroadcast) {
        this.mutationStore = Object.create(null);
      }
    }
    QueryManager2.prototype.stop = function() {
      var _this = this;
      this.queries.forEach(function(_info, queryId) {
        _this.stopQueryNoBroadcast(queryId);
      });
      this.cancelPendingFetches(__DEV__ ? new InvariantError("QueryManager stopped while query was in flight") : new InvariantError(13));
    };
    QueryManager2.prototype.cancelPendingFetches = function(error) {
      this.fetchCancelFns.forEach(function(cancel) {
        return cancel(error);
      });
      this.fetchCancelFns.clear();
    };
    QueryManager2.prototype.mutate = function(_a5) {
      var mutation = _a5.mutation, variables = _a5.variables, optimisticResponse = _a5.optimisticResponse, updateQueries = _a5.updateQueries, _b = _a5.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a5.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a5.update, onQueryUpdated = _a5.onQueryUpdated, _d = _a5.errorPolicy, errorPolicy = _d === void 0 ? "none" : _d, _e = _a5.fetchPolicy, fetchPolicy = _e === void 0 ? "network-only" : _e, keepRootFields = _a5.keepRootFields, context = _a5.context;
      return __awaiter(this, void 0, void 0, function() {
        var mutationId, mutationStoreValue, self2;
        return __generator(this, function(_f) {
          switch (_f.label) {
            case 0:
              __DEV__ ? invariant(mutation, "mutation option is required. You must specify your GraphQL document in the mutation option.") : invariant(mutation, 14);
              __DEV__ ? invariant(fetchPolicy === "network-only" || fetchPolicy === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : invariant(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 15);
              mutationId = this.generateMutationId();
              mutation = this.transform(mutation).document;
              variables = this.getVariables(mutation, variables);
              if (!this.transform(mutation).hasClientExports)
                return [3, 2];
              return [4, this.localState.addExportedVariables(mutation, variables, context)];
            case 1:
              variables = _f.sent();
              _f.label = 2;
            case 2:
              mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
                mutation,
                variables,
                loading: true,
                error: null
              });
              if (optimisticResponse) {
                this.markMutationOptimistic(optimisticResponse, {
                  mutationId,
                  document: mutation,
                  variables,
                  fetchPolicy,
                  errorPolicy,
                  context,
                  updateQueries,
                  update: updateWithProxyFn,
                  keepRootFields
                });
              }
              this.broadcastQueries();
              self2 = this;
              return [2, new Promise(function(resolve, reject) {
                return asyncMap(self2.getObservableFromLink(mutation, __assign(__assign({}, context), { optimisticResponse }), variables, false), function(result2) {
                  if (graphQLResultHasError(result2) && errorPolicy === "none") {
                    throw new ApolloError({
                      graphQLErrors: result2.errors
                    });
                  }
                  if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = null;
                  }
                  var storeResult = __assign({}, result2);
                  if (typeof refetchQueries === "function") {
                    refetchQueries = refetchQueries(storeResult);
                  }
                  if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) {
                    delete storeResult.errors;
                  }
                  return self2.markMutationResult({
                    mutationId,
                    result: storeResult,
                    document: mutation,
                    variables,
                    fetchPolicy,
                    errorPolicy,
                    context,
                    update: updateWithProxyFn,
                    updateQueries,
                    awaitRefetchQueries,
                    refetchQueries,
                    removeOptimistic: optimisticResponse ? mutationId : void 0,
                    onQueryUpdated,
                    keepRootFields
                  });
                }).subscribe({
                  next: function(storeResult) {
                    self2.broadcastQueries();
                    resolve(storeResult);
                  },
                  error: function(err) {
                    if (mutationStoreValue) {
                      mutationStoreValue.loading = false;
                      mutationStoreValue.error = err;
                    }
                    if (optimisticResponse) {
                      self2.cache.removeOptimistic(mutationId);
                    }
                    self2.broadcastQueries();
                    reject(err instanceof ApolloError ? err : new ApolloError({
                      networkError: err
                    }));
                  }
                });
              })];
          }
        });
      });
    };
    QueryManager2.prototype.markMutationResult = function(mutation, cache2) {
      var _this = this;
      if (cache2 === void 0) {
        cache2 = this.cache;
      }
      var result2 = mutation.result;
      var cacheWrites = [];
      var skipCache = mutation.fetchPolicy === "no-cache";
      if (!skipCache && shouldWriteResult(result2, mutation.errorPolicy)) {
        cacheWrites.push({
          result: result2.data,
          dataId: "ROOT_MUTATION",
          query: mutation.document,
          variables: mutation.variables
        });
        var updateQueries_1 = mutation.updateQueries;
        if (updateQueries_1) {
          this.queries.forEach(function(_a5, queryId) {
            var observableQuery = _a5.observableQuery;
            var queryName = observableQuery && observableQuery.queryName;
            if (!queryName || !hasOwnProperty6.call(updateQueries_1, queryName)) {
              return;
            }
            var updater = updateQueries_1[queryName];
            var _b = _this.queries.get(queryId), document2 = _b.document, variables = _b.variables;
            var _c = cache2.diff({
              query: document2,
              variables,
              returnPartialData: true,
              optimistic: false
            }), currentQueryResult = _c.result, complete = _c.complete;
            if (complete && currentQueryResult) {
              var nextQueryResult = updater(currentQueryResult, {
                mutationResult: result2,
                queryName: document2 && getOperationName(document2) || void 0,
                queryVariables: variables
              });
              if (nextQueryResult) {
                cacheWrites.push({
                  result: nextQueryResult,
                  dataId: "ROOT_QUERY",
                  query: document2,
                  variables
                });
              }
            }
          });
        }
      }
      if (cacheWrites.length > 0 || mutation.refetchQueries || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
        var results_1 = [];
        this.refetchQueries({
          updateCache: function(cache3) {
            if (!skipCache) {
              cacheWrites.forEach(function(write) {
                return cache3.write(write);
              });
            }
            var update = mutation.update;
            if (update) {
              if (!skipCache) {
                var diff = cache3.diff({
                  id: "ROOT_MUTATION",
                  query: _this.transform(mutation.document).asQuery,
                  variables: mutation.variables,
                  optimistic: false,
                  returnPartialData: true
                });
                if (diff.complete) {
                  result2 = __assign(__assign({}, result2), { data: diff.result });
                }
              }
              update(cache3, result2, {
                context: mutation.context,
                variables: mutation.variables
              });
            }
            if (!skipCache && !mutation.keepRootFields) {
              cache3.modify({
                id: "ROOT_MUTATION",
                fields: function(value, _a5) {
                  var fieldName = _a5.fieldName, DELETE2 = _a5.DELETE;
                  return fieldName === "__typename" ? value : DELETE2;
                }
              });
            }
          },
          include: mutation.refetchQueries,
          optimistic: false,
          removeOptimistic: mutation.removeOptimistic,
          onQueryUpdated: mutation.onQueryUpdated || null
        }).forEach(function(result3) {
          return results_1.push(result3);
        });
        if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
          return Promise.all(results_1).then(function() {
            return result2;
          });
        }
      }
      return Promise.resolve(result2);
    };
    QueryManager2.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
      var _this = this;
      var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables) : optimisticResponse;
      return this.cache.recordOptimisticTransaction(function(cache2) {
        try {
          _this.markMutationResult(__assign(__assign({}, mutation), { result: { data } }), cache2);
        } catch (error) {
          __DEV__ && invariant.error(error);
        }
      }, mutation.mutationId);
    };
    QueryManager2.prototype.fetchQuery = function(queryId, options, networkStatus) {
      return this.fetchQueryObservable(queryId, options, networkStatus).promise;
    };
    QueryManager2.prototype.getQueryStore = function() {
      var store = Object.create(null);
      this.queries.forEach(function(info, queryId) {
        store[queryId] = {
          variables: info.variables,
          networkStatus: info.networkStatus,
          networkError: info.networkError,
          graphQLErrors: info.graphQLErrors
        };
      });
      return store;
    };
    QueryManager2.prototype.resetErrors = function(queryId) {
      var queryInfo = this.queries.get(queryId);
      if (queryInfo) {
        queryInfo.networkError = void 0;
        queryInfo.graphQLErrors = [];
      }
    };
    QueryManager2.prototype.transform = function(document2) {
      var transformCache = this.transformCache;
      if (!transformCache.has(document2)) {
        var transformed = this.cache.transformDocument(document2);
        var forLink = removeConnectionDirectiveFromDocument(this.cache.transformForLink(transformed));
        var clientQuery = this.localState.clientQuery(transformed);
        var serverQuery = forLink && this.localState.serverQuery(forLink);
        var cacheEntry_1 = {
          document: transformed,
          hasClientExports: hasClientExports(transformed),
          hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
          clientQuery,
          serverQuery,
          defaultVars: getDefaultValues(getOperationDefinition(transformed)),
          asQuery: __assign(__assign({}, transformed), { definitions: transformed.definitions.map(function(def) {
            if (def.kind === "OperationDefinition" && def.operation !== "query") {
              return __assign(__assign({}, def), { operation: "query" });
            }
            return def;
          }) })
        };
        var add = function(doc) {
          if (doc && !transformCache.has(doc)) {
            transformCache.set(doc, cacheEntry_1);
          }
        };
        add(document2);
        add(transformed);
        add(clientQuery);
        add(serverQuery);
      }
      return transformCache.get(document2);
    };
    QueryManager2.prototype.getVariables = function(document2, variables) {
      return __assign(__assign({}, this.transform(document2).defaultVars), variables);
    };
    QueryManager2.prototype.watchQuery = function(options) {
      options = __assign(__assign({}, options), { variables: this.getVariables(options.query, options.variables) });
      if (typeof options.notifyOnNetworkStatusChange === "undefined") {
        options.notifyOnNetworkStatusChange = false;
      }
      var queryInfo = new QueryInfo(this);
      var observable = new ObservableQuery({
        queryManager: this,
        queryInfo,
        options
      });
      this.queries.set(observable.queryId, queryInfo);
      queryInfo.init({
        document: options.query,
        observableQuery: observable,
        variables: options.variables
      });
      return observable;
    };
    QueryManager2.prototype.query = function(options, queryId) {
      var _this = this;
      if (queryId === void 0) {
        queryId = this.generateQueryId();
      }
      __DEV__ ? invariant(options.query, "query option is required. You must specify your GraphQL document in the query option.") : invariant(options.query, 16);
      __DEV__ ? invariant(options.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : invariant(options.query.kind === "Document", 17);
      __DEV__ ? invariant(!options.returnPartialData, "returnPartialData option only supported on watchQuery.") : invariant(!options.returnPartialData, 18);
      __DEV__ ? invariant(!options.pollInterval, "pollInterval option only supported on watchQuery.") : invariant(!options.pollInterval, 19);
      return this.fetchQuery(queryId, options).finally(function() {
        return _this.stopQuery(queryId);
      });
    };
    QueryManager2.prototype.generateQueryId = function() {
      return String(this.queryIdCounter++);
    };
    QueryManager2.prototype.generateRequestId = function() {
      return this.requestIdCounter++;
    };
    QueryManager2.prototype.generateMutationId = function() {
      return String(this.mutationIdCounter++);
    };
    QueryManager2.prototype.stopQueryInStore = function(queryId) {
      this.stopQueryInStoreNoBroadcast(queryId);
      this.broadcastQueries();
    };
    QueryManager2.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
      var queryInfo = this.queries.get(queryId);
      if (queryInfo)
        queryInfo.stop();
    };
    QueryManager2.prototype.clearStore = function(options) {
      if (options === void 0) {
        options = {
          discardWatches: true
        };
      }
      this.cancelPendingFetches(__DEV__ ? new InvariantError("Store reset while query was in flight (not completed in link chain)") : new InvariantError(20));
      this.queries.forEach(function(queryInfo) {
        if (queryInfo.observableQuery) {
          queryInfo.networkStatus = NetworkStatus.loading;
        } else {
          queryInfo.stop();
        }
      });
      if (this.mutationStore) {
        this.mutationStore = Object.create(null);
      }
      return this.cache.reset(options);
    };
    QueryManager2.prototype.getObservableQueries = function(include) {
      var _this = this;
      if (include === void 0) {
        include = "active";
      }
      var queries = new Map();
      var queryNamesAndDocs = new Map();
      var legacyQueryOptions = new Set();
      if (Array.isArray(include)) {
        include.forEach(function(desc) {
          if (typeof desc === "string") {
            queryNamesAndDocs.set(desc, false);
          } else if (isDocumentNode(desc)) {
            queryNamesAndDocs.set(_this.transform(desc).document, false);
          } else if (isNonNullObject(desc) && desc.query) {
            legacyQueryOptions.add(desc);
          }
        });
      }
      this.queries.forEach(function(_a5, queryId) {
        var oq = _a5.observableQuery, document2 = _a5.document;
        if (oq) {
          if (include === "all") {
            queries.set(queryId, oq);
            return;
          }
          var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
          if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
            return;
          }
          if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document2 && queryNamesAndDocs.has(document2)) {
            queries.set(queryId, oq);
            if (queryName)
              queryNamesAndDocs.set(queryName, true);
            if (document2)
              queryNamesAndDocs.set(document2, true);
          }
        }
      });
      if (legacyQueryOptions.size) {
        legacyQueryOptions.forEach(function(options) {
          var queryId = makeUniqueId("legacyOneTimeQuery");
          var queryInfo = _this.getQuery(queryId).init({
            document: options.query,
            variables: options.variables
          });
          var oq = new ObservableQuery({
            queryManager: _this,
            queryInfo,
            options: __assign(__assign({}, options), { fetchPolicy: "network-only" })
          });
          invariant(oq.queryId === queryId);
          queryInfo.setObservableQuery(oq);
          queries.set(queryId, oq);
        });
      }
      if (__DEV__ && queryNamesAndDocs.size) {
        queryNamesAndDocs.forEach(function(included, nameOrDoc) {
          if (!included) {
            __DEV__ && invariant.warn("Unknown query " + (typeof nameOrDoc === "string" ? "named " : "") + JSON.stringify(nameOrDoc, null, 2) + " requested in refetchQueries options.include array");
          }
        });
      }
      return queries;
    };
    QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
      var _this = this;
      if (includeStandby === void 0) {
        includeStandby = false;
      }
      var observableQueryPromises = [];
      this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
        var fetchPolicy = observableQuery.options.fetchPolicy;
        observableQuery.resetLastResults();
        if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
          observableQueryPromises.push(observableQuery.refetch());
        }
        _this.getQuery(queryId).setDiff(null);
      });
      this.broadcastQueries();
      return Promise.all(observableQueryPromises);
    };
    QueryManager2.prototype.setObservableQuery = function(observableQuery) {
      this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager2.prototype.startGraphQLSubscription = function(_a5) {
      var _this = this;
      var query = _a5.query, fetchPolicy = _a5.fetchPolicy, errorPolicy = _a5.errorPolicy, variables = _a5.variables, _b = _a5.context, context = _b === void 0 ? {} : _b;
      query = this.transform(query).document;
      variables = this.getVariables(query, variables);
      var makeObservable = function(variables2) {
        return _this.getObservableFromLink(query, context, variables2).map(function(result2) {
          if (fetchPolicy !== "no-cache") {
            if (shouldWriteResult(result2, errorPolicy)) {
              _this.cache.write({
                query,
                result: result2.data,
                dataId: "ROOT_SUBSCRIPTION",
                variables: variables2
              });
            }
            _this.broadcastQueries();
          }
          if (graphQLResultHasError(result2)) {
            throw new ApolloError({
              graphQLErrors: result2.errors
            });
          }
          return result2;
        });
      };
      if (this.transform(query).hasClientExports) {
        var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
        return new Observable(function(observer) {
          var sub = null;
          observablePromise_1.then(function(observable) {
            return sub = observable.subscribe(observer);
          }, observer.error);
          return function() {
            return sub && sub.unsubscribe();
          };
        });
      }
      return makeObservable(variables);
    };
    QueryManager2.prototype.stopQuery = function(queryId) {
      this.stopQueryNoBroadcast(queryId);
      this.broadcastQueries();
    };
    QueryManager2.prototype.stopQueryNoBroadcast = function(queryId) {
      this.stopQueryInStoreNoBroadcast(queryId);
      this.removeQuery(queryId);
    };
    QueryManager2.prototype.removeQuery = function(queryId) {
      this.fetchCancelFns.delete(queryId);
      this.getQuery(queryId).stop();
      this.queries.delete(queryId);
    };
    QueryManager2.prototype.broadcastQueries = function() {
      if (this.onBroadcast)
        this.onBroadcast();
      this.queries.forEach(function(info) {
        return info.notify();
      });
    };
    QueryManager2.prototype.getLocalState = function() {
      return this.localState;
    };
    QueryManager2.prototype.getObservableFromLink = function(query, context, variables, deduplication) {
      var _this = this;
      var _a5;
      if (deduplication === void 0) {
        deduplication = (_a5 = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a5 !== void 0 ? _a5 : this.queryDeduplication;
      }
      var observable;
      var serverQuery = this.transform(query).serverQuery;
      if (serverQuery) {
        var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link2 = _b.link;
        var operation = {
          query: serverQuery,
          variables,
          operationName: getOperationName(serverQuery) || void 0,
          context: this.prepareContext(__assign(__assign({}, context), { forceFetch: !deduplication }))
        };
        context = operation.context;
        if (deduplication) {
          var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
          inFlightLinkObservables_1.set(serverQuery, byVariables_1);
          var varJson_1 = canonicalStringify(variables);
          observable = byVariables_1.get(varJson_1);
          if (!observable) {
            var concast = new Concast([
              execute(link2, operation)
            ]);
            byVariables_1.set(varJson_1, observable = concast);
            concast.cleanup(function() {
              if (byVariables_1.delete(varJson_1) && byVariables_1.size < 1) {
                inFlightLinkObservables_1.delete(serverQuery);
              }
            });
          }
        } else {
          observable = new Concast([
            execute(link2, operation)
          ]);
        }
      } else {
        observable = new Concast([
          Observable.of({ data: {} })
        ]);
        context = this.prepareContext(context);
      }
      var clientQuery = this.transform(query).clientQuery;
      if (clientQuery) {
        observable = asyncMap(observable, function(result2) {
          return _this.localState.runResolvers({
            document: clientQuery,
            remoteResult: result2,
            context,
            variables
          });
        });
      }
      return observable;
    };
    QueryManager2.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
      var requestId = queryInfo.lastRequestId = this.generateRequestId();
      return asyncMap(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function(result2) {
        var hasErrors = isNonEmptyArray(result2.errors);
        if (requestId >= queryInfo.lastRequestId) {
          if (hasErrors && options.errorPolicy === "none") {
            throw queryInfo.markError(new ApolloError({
              graphQLErrors: result2.errors
            }));
          }
          queryInfo.markResult(result2, options, cacheWriteBehavior);
          queryInfo.markReady();
        }
        var aqr = {
          data: result2.data,
          loading: false,
          networkStatus: queryInfo.networkStatus || NetworkStatus.ready
        };
        if (hasErrors && options.errorPolicy !== "ignore") {
          aqr.errors = result2.errors;
        }
        return aqr;
      }, function(networkError) {
        var error = isApolloError(networkError) ? networkError : new ApolloError({ networkError });
        if (requestId >= queryInfo.lastRequestId) {
          queryInfo.markError(error);
        }
        throw error;
      });
    };
    QueryManager2.prototype.fetchQueryObservable = function(queryId, options, networkStatus) {
      var _this = this;
      if (networkStatus === void 0) {
        networkStatus = NetworkStatus.loading;
      }
      var query = this.transform(options.query).document;
      var variables = this.getVariables(query, options.variables);
      var queryInfo = this.getQuery(queryId);
      var _a5 = options.fetchPolicy, fetchPolicy = _a5 === void 0 ? "cache-first" : _a5, _b = options.errorPolicy, errorPolicy = _b === void 0 ? "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
      var normalized = Object.assign({}, options, {
        query,
        variables,
        fetchPolicy,
        errorPolicy,
        returnPartialData,
        notifyOnNetworkStatusChange,
        context
      });
      var fromVariables = function(variables2) {
        normalized.variables = variables2;
        return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
      };
      this.fetchCancelFns.set(queryId, function(reason) {
        setTimeout(function() {
          return concast.cancel(reason);
        });
      });
      var concast = new Concast(this.transform(normalized.query).hasClientExports ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables) : fromVariables(normalized.variables));
      concast.cleanup(function() {
        _this.fetchCancelFns.delete(queryId);
        applyNextFetchPolicy(options);
      });
      return concast;
    };
    QueryManager2.prototype.refetchQueries = function(_a5) {
      var _this = this;
      var updateCache = _a5.updateCache, include = _a5.include, _b = _a5.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a5.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a5.onQueryUpdated;
      var includedQueriesById = new Map();
      if (include) {
        this.getObservableQueries(include).forEach(function(oq, queryId) {
          includedQueriesById.set(queryId, {
            oq,
            lastDiff: _this.getQuery(queryId).getDiff()
          });
        });
      }
      var results = new Map();
      if (updateCache) {
        this.cache.batch({
          update: updateCache,
          optimistic: optimistic && removeOptimistic || false,
          removeOptimistic,
          onWatchUpdated: function(watch, diff, lastDiff) {
            var oq = watch.watcher instanceof QueryInfo && watch.watcher.observableQuery;
            if (oq) {
              if (onQueryUpdated) {
                includedQueriesById.delete(oq.queryId);
                var result2 = onQueryUpdated(oq, diff, lastDiff);
                if (result2 === true) {
                  result2 = oq.refetch();
                }
                if (result2 !== false) {
                  results.set(oq, result2);
                }
                return false;
              }
              if (onQueryUpdated !== null) {
                includedQueriesById.set(oq.queryId, { oq, lastDiff, diff });
              }
            }
          }
        });
      }
      if (includedQueriesById.size) {
        includedQueriesById.forEach(function(_a6, queryId) {
          var oq = _a6.oq, lastDiff = _a6.lastDiff, diff = _a6.diff;
          var result2;
          if (onQueryUpdated) {
            if (!diff) {
              var info = oq["queryInfo"];
              info.reset();
              diff = info.getDiff();
            }
            result2 = onQueryUpdated(oq, diff, lastDiff);
          }
          if (!onQueryUpdated || result2 === true) {
            result2 = oq.refetch();
          }
          if (result2 !== false) {
            results.set(oq, result2);
          }
          if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
            _this.stopQueryNoBroadcast(queryId);
          }
        });
      }
      if (removeOptimistic) {
        this.cache.removeOptimistic(removeOptimistic);
      }
      return results;
    };
    QueryManager2.prototype.fetchQueryByPolicy = function(queryInfo, _a5, networkStatus) {
      var _this = this;
      var query = _a5.query, variables = _a5.variables, fetchPolicy = _a5.fetchPolicy, refetchWritePolicy = _a5.refetchWritePolicy, errorPolicy = _a5.errorPolicy, returnPartialData = _a5.returnPartialData, context = _a5.context, notifyOnNetworkStatusChange = _a5.notifyOnNetworkStatusChange;
      var oldNetworkStatus = queryInfo.networkStatus;
      queryInfo.init({
        document: query,
        variables,
        networkStatus
      });
      var readCache = function() {
        return queryInfo.getDiff(variables);
      };
      var resultsFromCache = function(diff2, networkStatus2) {
        if (networkStatus2 === void 0) {
          networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
        }
        var data = diff2.result;
        if (__DEV__ && !returnPartialData && !equal(data, {})) {
          logMissingFieldErrors(diff2.missing);
        }
        var fromData = function(data2) {
          return Observable.of(__assign({ data: data2, loading: isNetworkRequestInFlight(networkStatus2), networkStatus: networkStatus2 }, diff2.complete ? null : { partial: true }));
        };
        if (data && _this.transform(query).hasForcedResolvers) {
          return _this.localState.runResolvers({
            document: query,
            remoteResult: { data },
            context,
            variables,
            onlyRunForcedResolvers: true
          }).then(function(resolved) {
            return fromData(resolved.data || void 0);
          });
        }
        return fromData(data);
      };
      var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
      var resultsFromLink = function() {
        return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
          variables,
          context,
          fetchPolicy,
          errorPolicy
        });
      };
      var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
      switch (fetchPolicy) {
        default:
        case "cache-first": {
          var diff = readCache();
          if (diff.complete) {
            return [
              resultsFromCache(diff, queryInfo.markReady())
            ];
          }
          if (returnPartialData || shouldNotify) {
            return [
              resultsFromCache(diff),
              resultsFromLink()
            ];
          }
          return [
            resultsFromLink()
          ];
        }
        case "cache-and-network": {
          var diff = readCache();
          if (diff.complete || returnPartialData || shouldNotify) {
            return [
              resultsFromCache(diff),
              resultsFromLink()
            ];
          }
          return [
            resultsFromLink()
          ];
        }
        case "cache-only":
          return [
            resultsFromCache(readCache(), queryInfo.markReady())
          ];
        case "network-only":
          if (shouldNotify) {
            return [
              resultsFromCache(readCache()),
              resultsFromLink()
            ];
          }
          return [resultsFromLink()];
        case "no-cache":
          if (shouldNotify) {
            return [
              resultsFromCache(queryInfo.getDiff()),
              resultsFromLink()
            ];
          }
          return [resultsFromLink()];
        case "standby":
          return [];
      }
    };
    QueryManager2.prototype.getQuery = function(queryId) {
      if (queryId && !this.queries.has(queryId)) {
        this.queries.set(queryId, new QueryInfo(this, queryId));
      }
      return this.queries.get(queryId);
    };
    QueryManager2.prototype.prepareContext = function(context) {
      if (context === void 0) {
        context = {};
      }
      var newContext = this.localState.prepareContext(context);
      return __assign(__assign({}, newContext), { clientAwareness: this.clientAwareness });
    };
    return QueryManager2;
  }();

  // node_modules/@apollo/client/core/ApolloClient.js
  var hasSuggestedDevtools = false;
  function mergeOptions(defaults, options) {
    return compact(defaults, options, options.variables && {
      variables: __assign(__assign({}, defaults.variables), options.variables)
    });
  }
  var ApolloClient = function() {
    function ApolloClient2(options) {
      var _this = this;
      this.defaultOptions = {};
      this.resetStoreCallbacks = [];
      this.clearStoreCallbacks = [];
      var uri = options.uri, credentials = options.credentials, headers = options.headers, cache2 = options.cache, _a5 = options.ssrMode, ssrMode = _a5 === void 0 ? false : _a5, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === "object" && !window.__APOLLO_CLIENT__ && __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions2 = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
      var link2 = options.link;
      if (!link2) {
        link2 = uri ? new HttpLink({ uri, credentials, headers }) : ApolloLink.empty();
      }
      if (!cache2) {
        throw __DEV__ ? new InvariantError("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new InvariantError(9);
      }
      this.link = link2;
      this.cache = cache2;
      this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
      this.queryDeduplication = queryDeduplication;
      this.defaultOptions = defaultOptions2 || {};
      this.typeDefs = typeDefs;
      if (ssrForceFetchDelay) {
        setTimeout(function() {
          return _this.disableNetworkFetches = false;
        }, ssrForceFetchDelay);
      }
      this.watchQuery = this.watchQuery.bind(this);
      this.query = this.query.bind(this);
      this.mutate = this.mutate.bind(this);
      this.resetStore = this.resetStore.bind(this);
      this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
      if (connectToDevTools && typeof window === "object") {
        window.__APOLLO_CLIENT__ = this;
      }
      if (!hasSuggestedDevtools && __DEV__) {
        hasSuggestedDevtools = true;
        if (typeof window !== "undefined" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
          var nav = window.navigator;
          var ua = nav && nav.userAgent;
          var url = void 0;
          if (typeof ua === "string") {
            if (ua.indexOf("Chrome/") > -1) {
              url = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
            } else if (ua.indexOf("Firefox/") > -1) {
              url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
            }
          }
          if (url) {
            __DEV__ && invariant.log("Download the Apollo DevTools for a better development experience: " + url);
          }
        }
      }
      this.version = version;
      this.localState = new LocalState({
        cache: cache2,
        client: this,
        resolvers,
        fragmentMatcher
      });
      this.queryManager = new QueryManager({
        cache: this.cache,
        link: this.link,
        queryDeduplication,
        ssrMode,
        clientAwareness: {
          name: clientAwarenessName,
          version: clientAwarenessVersion
        },
        localState: this.localState,
        assumeImmutableResults,
        onBroadcast: connectToDevTools ? function() {
          if (_this.devToolsHookCb) {
            _this.devToolsHookCb({
              action: {},
              state: {
                queries: _this.queryManager.getQueryStore(),
                mutations: _this.queryManager.mutationStore || {}
              },
              dataWithOptimisticResults: _this.cache.extract(true)
            });
          }
        } : void 0
      });
    }
    ApolloClient2.prototype.stop = function() {
      this.queryManager.stop();
    };
    ApolloClient2.prototype.watchQuery = function(options) {
      if (this.defaultOptions.watchQuery) {
        options = mergeOptions(this.defaultOptions.watchQuery, options);
      }
      if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
        options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
      }
      return this.queryManager.watchQuery(options);
    };
    ApolloClient2.prototype.query = function(options) {
      if (this.defaultOptions.query) {
        options = mergeOptions(this.defaultOptions.query, options);
      }
      __DEV__ ? invariant(options.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : invariant(options.fetchPolicy !== "cache-and-network", 10);
      if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
        options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
      }
      return this.queryManager.query(options);
    };
    ApolloClient2.prototype.mutate = function(options) {
      if (this.defaultOptions.mutate) {
        options = mergeOptions(this.defaultOptions.mutate, options);
      }
      return this.queryManager.mutate(options);
    };
    ApolloClient2.prototype.subscribe = function(options) {
      return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient2.prototype.readQuery = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = false;
      }
      return this.cache.readQuery(options, optimistic);
    };
    ApolloClient2.prototype.readFragment = function(options, optimistic) {
      if (optimistic === void 0) {
        optimistic = false;
      }
      return this.cache.readFragment(options, optimistic);
    };
    ApolloClient2.prototype.writeQuery = function(options) {
      this.cache.writeQuery(options);
      this.queryManager.broadcastQueries();
    };
    ApolloClient2.prototype.writeFragment = function(options) {
      this.cache.writeFragment(options);
      this.queryManager.broadcastQueries();
    };
    ApolloClient2.prototype.__actionHookForDevTools = function(cb) {
      this.devToolsHookCb = cb;
    };
    ApolloClient2.prototype.__requestRaw = function(payload) {
      return execute(this.link, payload);
    };
    ApolloClient2.prototype.resetStore = function() {
      var _this = this;
      return Promise.resolve().then(function() {
        return _this.queryManager.clearStore({
          discardWatches: false
        });
      }).then(function() {
        return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
          return fn();
        }));
      }).then(function() {
        return _this.reFetchObservableQueries();
      });
    };
    ApolloClient2.prototype.clearStore = function() {
      var _this = this;
      return Promise.resolve().then(function() {
        return _this.queryManager.clearStore({
          discardWatches: true
        });
      }).then(function() {
        return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
          return fn();
        }));
      });
    };
    ApolloClient2.prototype.onResetStore = function(cb) {
      var _this = this;
      this.resetStoreCallbacks.push(cb);
      return function() {
        _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c) {
          return c !== cb;
        });
      };
    };
    ApolloClient2.prototype.onClearStore = function(cb) {
      var _this = this;
      this.clearStoreCallbacks.push(cb);
      return function() {
        _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c) {
          return c !== cb;
        });
      };
    };
    ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
      return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient2.prototype.refetchQueries = function(options) {
      var map = this.queryManager.refetchQueries(options);
      var queries = [];
      var results = [];
      map.forEach(function(result3, obsQuery) {
        queries.push(obsQuery);
        results.push(result3);
      });
      var result2 = Promise.all(results);
      result2.queries = queries;
      result2.results = results;
      result2.catch(function(error) {
        __DEV__ && invariant.debug("In client.refetchQueries, Promise.all promise rejected with error " + error);
      });
      return result2;
    };
    ApolloClient2.prototype.getObservableQueries = function(include) {
      if (include === void 0) {
        include = "active";
      }
      return this.queryManager.getObservableQueries(include);
    };
    ApolloClient2.prototype.extract = function(optimistic) {
      return this.cache.extract(optimistic);
    };
    ApolloClient2.prototype.restore = function(serializedState) {
      return this.cache.restore(serializedState);
    };
    ApolloClient2.prototype.addResolvers = function(resolvers) {
      this.localState.addResolvers(resolvers);
    };
    ApolloClient2.prototype.setResolvers = function(resolvers) {
      this.localState.setResolvers(resolvers);
    };
    ApolloClient2.prototype.getResolvers = function() {
      return this.localState.getResolvers();
    };
    ApolloClient2.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
      this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient2.prototype.setLink = function(newLink) {
      this.link = this.queryManager.link = newLink;
    };
    return ApolloClient2;
  }();

  // node_modules/graphql-tag/lib/index.js
  var docCache = new Map();
  var fragmentSourceMap = new Map();
  var printFragmentWarnings = true;
  var experimentalFragmentVariables = false;
  function normalize(string) {
    return string.replace(/[\s,]+/g, " ").trim();
  }
  function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
  }
  function processFragments(ast) {
    var seenKeys = new Set();
    var definitions = [];
    ast.definitions.forEach(function(fragmentDefinition) {
      if (fragmentDefinition.kind === "FragmentDefinition") {
        var fragmentName = fragmentDefinition.name.value;
        var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
        var sourceKeySet = fragmentSourceMap.get(fragmentName);
        if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
          if (printFragmentWarnings) {
            console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
          }
        } else if (!sourceKeySet) {
          fragmentSourceMap.set(fragmentName, sourceKeySet = new Set());
        }
        sourceKeySet.add(sourceKey);
        if (!seenKeys.has(sourceKey)) {
          seenKeys.add(sourceKey);
          definitions.push(fragmentDefinition);
        }
      } else {
        definitions.push(fragmentDefinition);
      }
    });
    return __assign(__assign({}, ast), { definitions });
  }
  function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function(node) {
      if (node.loc)
        delete node.loc;
      Object.keys(node).forEach(function(key) {
        var value = node[key];
        if (value && typeof value === "object") {
          workSet.add(value);
        }
      });
    });
    var loc = doc.loc;
    if (loc) {
      delete loc.startToken;
      delete loc.endToken;
    }
    return doc;
  }
  function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
      var parsed = parse(source, {
        experimentalFragmentVariables
      });
      if (!parsed || parsed.kind !== "Document") {
        throw new Error("Not a valid GraphQL document.");
      }
      docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
  }
  function gql(literals) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (typeof literals === "string") {
      literals = [literals];
    }
    var result2 = literals[0];
    args.forEach(function(arg, i) {
      if (arg && arg.kind === "Document") {
        result2 += arg.loc.source.body;
      } else {
        result2 += arg;
      }
      result2 += literals[i + 1];
    });
    return parseDocument(result2);
  }
  function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
  }
  function disableFragmentWarnings() {
    printFragmentWarnings = false;
  }
  function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
  }
  function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
  }
  var extras = {
    gql,
    resetCaches,
    disableFragmentWarnings,
    enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables
  };
  (function(gql_1) {
    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
  })(gql || (gql = {}));
  gql["default"] = gql;

  // node_modules/@apollo/client/core/index.js
  setVerbosity(DEV_default ? "log" : "silent");

  // node_modules/@apollo/client/link/ws/index.js
  var import_subscriptions_transport_ws = __toModule(require_client());
  var WebSocketLink = function(_super) {
    __extends(WebSocketLink2, _super);
    function WebSocketLink2(paramsOrClient) {
      var _this = _super.call(this) || this;
      if (paramsOrClient instanceof import_subscriptions_transport_ws.SubscriptionClient) {
        _this.subscriptionClient = paramsOrClient;
      } else {
        _this.subscriptionClient = new import_subscriptions_transport_ws.SubscriptionClient(paramsOrClient.uri, paramsOrClient.options, paramsOrClient.webSocketImpl);
      }
      return _this;
    }
    WebSocketLink2.prototype.request = function(operation) {
      return this.subscriptionClient.request(operation);
    };
    return WebSocketLink2;
  }(ApolloLink);

  // assets/main.js
  var import_subscriptions_transport_ws2 = __toModule(require_client());
  var GRAPHQL_SUBSCRIPTIONS_ENDPOINT = "ws://localhost:8080/socket/websocket";
  var subscriptionClient = new import_subscriptions_transport_ws2.SubscriptionClient(GRAPHQL_SUBSCRIPTIONS_ENDPOINT, {
    reconnect: true
  });
  var link = new WebSocketLink(subscriptionClient);
  var cache = new InMemoryCache();
  window.apolloClient = new ApolloClient({
    cache,
    link
  });
  var counterValues = window.apolloClient.subscribe({
    query: gql`
    subscription {
      counter(id: "first") {
        id, value
      }
    }
  `
  });
  var subscription = counterValues.subscribe({
    next(value) {
      console.log(value);
      const valueContainer = document.getElementById("counterValue");
      if (valueContainer) {
        valueContainer.innerText = String(value.data.counter.value);
      }
    },
    error(err) {
      console.log(`Finished with error: ${err}`);
    },
    complete() {
      console.log("Finished");
    }
  });
  function incrementCounter() {
    window.apolloClient.mutate({
      mutation: gql`
    mutation {
      increment_counter(id: "first") {
        value
      }
    }
  `
    });
  }
  window.addEventListener("load", function() {
    let incrementButton = document.getElementById("increment");
    if (incrementButton) {
      incrementButton.onclick = incrementCounter;
    } else {
      console.log("Could not find the button.");
    }
    let disconnectButton = document.getElementById("disconnect");
    if (disconnectButton) {
      disconnectButton.onclick = () => {
        subscription.unsubscribe();
        subscription = null;
      };
    } else {
      console.log("Could not find the disconnectButton.");
    }
  });
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=main.js.map
