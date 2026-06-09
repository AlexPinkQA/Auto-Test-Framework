"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key2 of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../node_modules/.pnpm/math-expression-evaluator@2.0.7/node_modules/math-expression-evaluator/dist/es/token.js
  var require_token = __commonJS({
    "../../node_modules/.pnpm/math-expression-evaluator@2.0.7/node_modules/math-expression-evaluator/dist/es/token.js"(exports) {
      "use strict";
      function e() {
        return e = Object.assign ? Object.assign.bind() : function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var o2 = arguments[t2];
            for (var a in o2) Object.prototype.hasOwnProperty.call(o2, a) && (e2[a] = o2[a]);
          }
          return e2;
        }, e.apply(this, arguments);
      }
      Object.defineProperty(exports, "__esModule", { value: true });
      var t;
      var o = { 0: 11, 1: 0, 2: 3, 3: 0, 4: 0, 5: 0, 6: 0, 7: 11, 8: 11, 9: 1, 10: 10, 11: 0, 12: 11, 13: 0, 14: -1 };
      exports.tokenTypes = void 0, (t = exports.tokenTypes || (exports.tokenTypes = {}))[t.FUNCTION_WITH_ONE_ARG = 0] = "FUNCTION_WITH_ONE_ARG", t[t.NUMBER = 1] = "NUMBER", t[t.BINARY_OPERATOR_HIGH_PRECENDENCE = 2] = "BINARY_OPERATOR_HIGH_PRECENDENCE", t[t.CONSTANT = 3] = "CONSTANT", t[t.OPENING_PARENTHESIS = 4] = "OPENING_PARENTHESIS", t[t.CLOSING_PARENTHESIS = 5] = "CLOSING_PARENTHESIS", t[t.DECIMAL = 6] = "DECIMAL", t[t.POSTFIX_FUNCTION_WITH_ONE_ARG = 7] = "POSTFIX_FUNCTION_WITH_ONE_ARG", t[t.FUNCTION_WITH_N_ARGS = 8] = "FUNCTION_WITH_N_ARGS", t[t.BINARY_OPERATOR_LOW_PRECENDENCE = 9] = "BINARY_OPERATOR_LOW_PRECENDENCE", t[t.BINARY_OPERATOR_PERMUTATION = 10] = "BINARY_OPERATOR_PERMUTATION", t[t.COMMA = 11] = "COMMA", t[t.EVALUATED_FUNCTION = 12] = "EVALUATED_FUNCTION", t[t.EVALUATED_FUNCTION_PARAMETER = 13] = "EVALUATED_FUNCTION_PARAMETER", t[t.SPACE = 14] = "SPACE", exports.createTokens = function(t2) {
        return [{ token: "sin", show: "sin", type: 0, value: t2.math.sin }, { token: "cos", show: "cos", type: 0, value: t2.math.cos }, { token: "tan", show: "tan", type: 0, value: t2.math.tan }, { token: "pi", show: "&pi;", type: 3, value: "PI" }, { token: "(", show: "(", type: 4, value: "(" }, { token: ")", show: ")", type: 5, value: ")" }, { token: "P", show: "P", type: 10, value: t2.math.P }, { token: "C", show: "C", type: 10, value: t2.math.C }, { token: " ", show: " ", type: 14, value: " ".anchor }, { token: "asin", show: "asin", type: 0, value: t2.math.asin }, { token: "acos", show: "acos", type: 0, value: t2.math.acos }, { token: "atan", show: "atan", type: 0, value: t2.math.atan }, { token: "7", show: "7", type: 1, value: "7" }, { token: "8", show: "8", type: 1, value: "8" }, { token: "9", show: "9", type: 1, value: "9" }, { token: "int", show: "Int", type: 0, value: Math.floor }, { token: "cosh", show: "cosh", type: 0, value: t2.math.cosh }, { token: "acosh", show: "acosh", type: 0, value: t2.math.acosh }, { token: "ln", show: " ln", type: 0, value: Math.log }, { token: "^", show: "^", type: 10, value: Math.pow }, { token: "root", show: "root", type: 0, value: Math.sqrt }, { token: "4", show: "4", type: 1, value: "4" }, { token: "5", show: "5", type: 1, value: "5" }, { token: "6", show: "6", type: 1, value: "6" }, { token: "/", show: "&divide;", type: 2, value: t2.math.div }, { token: "!", show: "!", type: 7, value: t2.math.fact }, { token: "tanh", show: "tanh", type: 0, value: t2.math.tanh }, { token: "atanh", show: "atanh", type: 0, value: t2.math.atanh }, { token: "Mod", show: " Mod ", type: 2, value: t2.math.mod }, { token: "1", show: "1", type: 1, value: "1" }, { token: "2", show: "2", type: 1, value: "2" }, { token: "3", show: "3", type: 1, value: "3" }, { token: "*", show: "&times;", type: 2, value: t2.math.mul }, { token: "sinh", show: "sinh", type: 0, value: t2.math.sinh }, { token: "asinh", show: "asinh", type: 0, value: t2.math.asinh }, { token: "e", show: "e", type: 3, value: "E" }, { token: "log", show: " log", type: 0, value: t2.math.log }, { token: "0", show: "0", type: 1, value: "0" }, { token: ".", show: ".", type: 6, value: "." }, { token: "+", show: "+", type: 9, value: t2.math.add }, { token: "-", show: "-", type: 9, value: t2.math.sub }, { token: ",", show: ",", type: 11, value: "," }, { token: "Sigma", show: "&Sigma;", type: 12, value: t2.math.sigma }, { token: "n", show: "n", type: 13, value: "n" }, { token: "Pi", show: "&Pi;", type: 12, value: t2.math.Pi }, { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 }, { token: "&", show: "&", type: 9, value: t2.math.and }].map((function(t3) {
          return e({}, t3, { precedence: o[t3.type] });
        }));
      }, exports.preced = o;
    }
  });

  // ../../node_modules/.pnpm/math-expression-evaluator@2.0.7/node_modules/math-expression-evaluator/dist/es/lexer.js
  var require_lexer = __commonJS({
    "../../node_modules/.pnpm/math-expression-evaluator@2.0.7/node_modules/math-expression-evaluator/dist/es/lexer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var e = require_token();
      function t(e2, t2) {
        for (var n2 = 0; n2 < e2.length; n2++) e2[n2] += t2;
        return e2;
      }
      var n = { 0: true, 1: true, 3: true, 4: true, 6: true, 8: true, 9: true, 12: true, 13: true, 14: true };
      var s = { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 10: true, 11: true, 12: true, 13: true };
      var o = { 0: true, 3: true, 4: true, 8: true, 12: true, 13: true };
      var p = {};
      var r = { 0: true, 1: true, 3: true, 4: true, 6: true, 8: true, 12: true, 13: true };
      var T = { 1: true };
      var h = [[], ["1", "2", "3", "7", "8", "9", "4", "5", "6", "+", "-", "*", "/", "(", ")", "^", "!", "P", "C", "e", "0", ".", ",", "n", " ", "&"], ["pi", "ln", "Pi"], ["sin", "cos", "tan", "Del", "int", "Mod", "log", "pow"], ["asin", "acos", "atan", "cosh", "root", "tanh", "sinh"], ["acosh", "atanh", "asinh", "Sigma"]];
      function E(e2, t2, n2, s2) {
        for (var o2 = 0; o2 < s2; o2++) if (e2[n2 + o2] !== t2[o2]) return false;
        return true;
      }
      function N(e2, t2) {
        for (var n2 = 0; n2 < t2.length; n2++) if (t2[n2].token === e2) return n2;
        return -1;
      }
      exports.addToken = function(t2) {
        for (var n2 = 0; n2 < t2.length; n2++) {
          var s2 = t2[n2].token.length, o2 = -1;
          t2[n2].type === e.tokenTypes.FUNCTION_WITH_N_ARGS && void 0 === t2[n2].numberOfArguments && (t2[n2].numberOfArguments = 2), h[s2] = h[s2] || [];
          for (var p2 = 0; p2 < h[s2].length; p2++) if (t2[n2].token === h[s2][p2]) {
            o2 = N(h[s2][p2], this.tokens);
            break;
          }
          -1 === o2 ? (this.tokens.push(t2[n2]), t2[n2].precedence = e.preced[t2[n2].type], h.length <= t2[n2].token.length && (h[t2[n2].token.length] = []), h[t2[n2].token.length].push(t2[n2].token)) : (this.tokens[o2] = t2[n2], t2[n2].precedence = e.preced[t2[n2].type]);
        }
      }, exports.lex = function(u, a) {
        var y, _ = { value: this.math.changeSign, type: e.tokenTypes.FUNCTION_WITH_ONE_ARG, precedence: 4, show: "-" }, i = { value: ")", show: ")", type: e.tokenTypes.CLOSING_PARENTHESIS, precedence: 0 }, A = { value: "(", type: e.tokenTypes.OPENING_PARENTHESIS, precedence: 0, show: "(" }, O = [A], R = [], l = u, k = n, I = 0, f = p, P = "";
        void 0 !== a && this.addToken(a);
        var c = (function(e2, t2) {
          for (var n2, s2, o2, p2 = [], r2 = t2.length, T2 = 0; T2 < r2; T2++) if (!(T2 < r2 - 1 && " " === t2[T2] && " " === t2[T2 + 1])) {
            for (n2 = "", s2 = t2.length - T2 > h.length - 2 ? h.length - 1 : t2.length - T2; s2 > 0; s2--) if (void 0 !== h[s2]) for (o2 = 0; o2 < h[s2].length; o2++) E(t2, h[s2][o2], T2, s2) && (n2 = h[s2][o2], o2 = h[s2].length, s2 = 0);
            if (T2 += n2.length - 1, "" === n2) throw new Error("Can't understand after " + t2.slice(T2));
            p2.push(e2.tokens[N(n2, e2.tokens)]);
          }
          return p2;
        })(this, l);
        for (y = 0; y < c.length; y++) {
          var C = c[y];
          if (14 !== C.type) {
            var g, S = C.token, d = C.type, v = C.value, w = C.precedence, U = C.show, m = O[O.length - 1];
            for (g = R.length; g-- && 0 === R[g]; ) if (-1 !== [e.tokenTypes.FUNCTION_WITH_ONE_ARG, e.tokenTypes.BINARY_OPERATOR_HIGH_PRECENDENCE, e.tokenTypes.CONSTANT, e.tokenTypes.OPENING_PARENTHESIS, e.tokenTypes.CLOSING_PARENTHESIS, e.tokenTypes.BINARY_OPERATOR_LOW_PRECENDENCE, e.tokenTypes.BINARY_OPERATOR_PERMUTATION, e.tokenTypes.COMMA, e.tokenTypes.EVALUATED_FUNCTION, e.tokenTypes.EVALUATED_FUNCTION_PARAMETER].indexOf(d)) {
              if (true !== k[d]) throw new Error(S + " is not allowed after " + P);
              O.push(i), k = s, f = r, R.pop();
            }
            if (true !== k[d]) throw new Error(S + " is not allowed after " + P);
            true === f[d] && (d = e.tokenTypes.BINARY_OPERATOR_HIGH_PRECENDENCE, v = this.math.mul, U = "&times;", w = 3, y -= 1);
            var H = { value: v, type: d, precedence: w, show: U, numberOfArguments: C.numberOfArguments };
            if (d === e.tokenTypes.FUNCTION_WITH_ONE_ARG) k = n, f = p, t(R, 1), O.push(H), c[y + 1].type !== e.tokenTypes.OPENING_PARENTHESIS && (O.push(A), R.push(2));
            else if (d === e.tokenTypes.NUMBER) m.type === e.tokenTypes.NUMBER ? (m.value += v, t(R, 1)) : O.push(H), k = s, f = o;
            else if (d === e.tokenTypes.BINARY_OPERATOR_HIGH_PRECENDENCE) k = n, f = p, t(R, 2), O.push(H);
            else if (d === e.tokenTypes.CONSTANT) O.push(H), k = s, f = r;
            else if (d === e.tokenTypes.OPENING_PARENTHESIS) t(R, 1), I++, k = n, f = p, O.push(H);
            else if (d === e.tokenTypes.CLOSING_PARENTHESIS) {
              if (!I) throw new Error("Closing parenthesis are more than opening one, wait What!!!");
              I--, k = s, f = r, O.push(H), t(R, 1);
            } else if (d === e.tokenTypes.DECIMAL) {
              if (m.hasDec) throw new Error("Two decimals are not allowed in one number");
              m.type !== e.tokenTypes.NUMBER && (m = { show: "0", value: 0, type: e.tokenTypes.NUMBER, precedence: 0 }, O.push(m), t(R, -1)), k = T, t(R, 1), f = p, m.value += v, m.hasDec = true;
            } else d === e.tokenTypes.POSTFIX_FUNCTION_WITH_ONE_ARG && (k = s, f = r, t(R, 1), O.push(H));
            d === e.tokenTypes.FUNCTION_WITH_N_ARGS ? (k = n, f = p, t(R, C.numberOfArguments + 2), O.push(H), c[y + 1].type !== e.tokenTypes.OPENING_PARENTHESIS && (O.push(A), R.push(C.numberOfArguments + 2))) : d === e.tokenTypes.BINARY_OPERATOR_LOW_PRECENDENCE ? (m.type === e.tokenTypes.BINARY_OPERATOR_LOW_PRECENDENCE ? m.value === this.math.add ? (m.value = v, m.show = U, t(R, 1)) : m.value === this.math.sub && "-" === U && (m.value = this.math.add, m.show = "+", t(R, 1)) : m.type !== e.tokenTypes.CLOSING_PARENTHESIS && m.type !== e.tokenTypes.POSTFIX_FUNCTION_WITH_ONE_ARG && m.type !== e.tokenTypes.NUMBER && m.type !== e.tokenTypes.CONSTANT && m.type !== e.tokenTypes.EVALUATED_FUNCTION_PARAMETER ? "-" === S && (k = n, f = p, t(R, 1), R.push(2), O.push(_), O.push(A)) : (O.push(H), t(R, 2)), k = n, f = p) : d === e.tokenTypes.BINARY_OPERATOR_PERMUTATION ? (k = n, f = p, t(R, 2), O.push(H)) : d === e.tokenTypes.COMMA ? (k = n, f = p, O.push(H)) : d === e.tokenTypes.EVALUATED_FUNCTION ? (k = n, f = p, t(R, 6), O.push(H), c[y + 1].type !== e.tokenTypes.OPENING_PARENTHESIS && (O.push(A), R.push(6))) : d === e.tokenTypes.EVALUATED_FUNCTION_PARAMETER && (k = s, f = r, O.push(H)), t(R, -1), P = S;
          } else if (y > 0 && y < c.length - 1 && 1 === c[y + 1].type && (1 === c[y - 1].type || 6 === c[y - 1].type)) throw new Error("Unexpected Space");
        }
        for (g = R.length; g--; ) O.push(i);
        if (true !== k[5]) throw new Error("complete the expression");
        for (; I--; ) O.push(i);
        return O.push(i), O;
      };
    }
  });

  // ../../node_modules/.pnpm/math-expression-evaluator@2.0.7/node_modules/math-expression-evaluator/dist/es/postfix.js
  var require_postfix = __commonJS({
    "../../node_modules/.pnpm/math-expression-evaluator@2.0.7/node_modules/math-expression-evaluator/dist/es/postfix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true }), exports.toPostfix = function(e) {
        for (var p, t, u, l = [], o = -1, r = -1, s = [{ value: "(", type: 4, precedence: 0, show: "(" }], a = 1; a < e.length; a++) if (1 === e[a].type || 3 === e[a].type || 13 === e[a].type) 1 === e[a].type && (e[a].value = Number(e[a].value)), l.push(e[a]);
        else if (4 === e[a].type) s.push(e[a]);
        else if (5 === e[a].type) for (; 4 !== (null == (h = t = s.pop()) ? void 0 : h.type); ) {
          var h;
          t && l.push(t);
        }
        else if (11 === e[a].type) {
          for (; 4 !== (null == (v = t = s.pop()) ? void 0 : v.type); ) {
            var v;
            t && l.push(t);
          }
          s.push(t);
        } else {
          r = (p = e[a]).precedence, o = (u = s[s.length - 1]).precedence;
          var n = "Math.pow" == u.value && "Math.pow" == p.value;
          if (r > o) s.push(p);
          else {
            for (; o >= r && !n || n && r < o; ) t = s.pop(), u = s[s.length - 1], t && l.push(t), o = u.precedence, n = "Math.pow" == p.value && "Math.pow" == u.value;
            s.push(p);
          }
        }
        return l;
      };
    }
  });

  // ../../node_modules/.pnpm/math-expression-evaluator@2.0.7/node_modules/math-expression-evaluator/dist/es/postfix_evaluator.js
  var require_postfix_evaluator = __commonJS({
    "../../node_modules/.pnpm/math-expression-evaluator@2.0.7/node_modules/math-expression-evaluator/dist/es/postfix_evaluator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true }), exports.postfixEval = function(e, a) {
        (a = a || {}).PI = Math.PI, a.E = Math.E;
        for (var p, u, r, l = [], s = void 0 !== a.n, t = 0; t < e.length; t++) if (1 === e[t].type) l.push({ value: e[t].value, type: 1 });
        else if (3 === e[t].type) l.push({ value: a[e[t].value], type: 1 });
        else if (0 === e[t].type) {
          var v = l[l.length - 1];
          Array.isArray(v) ? v.push(e[t]) : v.value = e[t].value(v.value);
        } else if (7 === e[t].type) {
          var y = l[l.length - 1];
          Array.isArray(y) ? y.push(e[t]) : y.value = e[t].value(y.value);
        } else if (8 === e[t].type) {
          for (var h = [], i = 0; i < e[t].numberOfArguments; i++) {
            var o = l.pop();
            o && h.push(o.value);
          }
          l.push({ type: 1, value: e[t].value.apply(e[t], h.reverse()) });
        } else if (10 === e[t].type) p = l.pop(), u = l.pop(), Array.isArray(u) ? ((u = u.concat(p)).push(e[t]), l.push(u)) : Array.isArray(p) ? (p.unshift(u), p.push(e[t]), l.push(p)) : l.push({ type: 1, value: e[t].value(u.value, p.value) });
        else if (2 === e[t].type || 9 === e[t].type) p = l.pop(), u = l.pop(), Array.isArray(u) ? ((u = u.concat(p)).push(e[t]), l.push(u)) : Array.isArray(p) ? (p.unshift(u), p.push(e[t]), l.push(p)) : l.push({ type: 1, value: e[t].value(u.value, p.value) });
        else if (12 === e[t].type) {
          p = l.pop();
          var n = void 0;
          n = !Array.isArray(p) && p ? [p] : p || [], u = l.pop(), r = l.pop(), l.push({ type: 1, value: e[t].value(r.value, u.value, n) });
        } else 13 === e[t].type && (s ? l.push({ value: a[e[t].value], type: 3 }) : l.push([e[t]]));
        if (l.length > 1) throw new Error("Uncaught Syntax error");
        return parseFloat(l[0].value.toFixed(15));
      };
    }
  });

  // ../../node_modules/.pnpm/math-expression-evaluator@2.0.7/node_modules/math-expression-evaluator/dist/es/functions.js
  var require_functions = __commonJS({
    "../../node_modules/.pnpm/math-expression-evaluator@2.0.7/node_modules/math-expression-evaluator/dist/es/functions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createMathFunctions = function(t) {
        return { isDegree: true, acos: function(n) {
          return t.math.isDegree ? 180 / Math.PI * Math.acos(n) : Math.acos(n);
        }, add: function(t2, n) {
          return t2 + n;
        }, asin: function(n) {
          return t.math.isDegree ? 180 / Math.PI * Math.asin(n) : Math.asin(n);
        }, atan: function(n) {
          return t.math.isDegree ? 180 / Math.PI * Math.atan(n) : Math.atan(n);
        }, acosh: function(t2) {
          return Math.log(t2 + Math.sqrt(t2 * t2 - 1));
        }, asinh: function(t2) {
          return Math.log(t2 + Math.sqrt(t2 * t2 + 1));
        }, atanh: function(t2) {
          return Math.log((1 + t2) / (1 - t2));
        }, C: function(n, r) {
          var a = 1, o = n - r, e = r;
          e < o && (e = o, o = r);
          for (var u = e + 1; u <= n; u++) a *= u;
          var i = t.math.fact(o);
          return "NaN" === i ? "NaN" : a / i;
        }, changeSign: function(t2) {
          return -t2;
        }, cos: function(n) {
          return t.math.isDegree && (n = t.math.toRadian(n)), Math.cos(n);
        }, cosh: function(t2) {
          return (Math.pow(Math.E, t2) + Math.pow(Math.E, -1 * t2)) / 2;
        }, div: function(t2, n) {
          return t2 / n;
        }, fact: function(t2) {
          if (t2 % 1 != 0) return "NaN";
          for (var n = 1, r = 2; r <= t2; r++) n *= r;
          return n;
        }, inverse: function(t2) {
          return 1 / t2;
        }, log: function(t2) {
          return Math.log(t2) / Math.log(10);
        }, mod: function(t2, n) {
          return t2 % n;
        }, mul: function(t2, n) {
          return t2 * n;
        }, P: function(t2, n) {
          for (var r = 1, a = Math.floor(t2) - Math.floor(n) + 1; a <= Math.floor(t2); a++) r *= a;
          return r;
        }, Pi: function(n, r, a) {
          for (var o = 1, e = n; e <= r; e++) o *= Number(t.postfixEval(a, { n: e }));
          return o;
        }, pow10x: function(t2) {
          for (var n = 1; t2--; ) n *= 10;
          return n;
        }, sigma: function(n, r, a) {
          for (var o = 0, e = n; e <= r; e++) o += Number(t.postfixEval(a, { n: e }));
          return o;
        }, sin: function(n) {
          return t.math.isDegree && (n = t.math.toRadian(n)), Math.sin(n);
        }, sinh: function(t2) {
          return (Math.pow(Math.E, t2) - Math.pow(Math.E, -1 * t2)) / 2;
        }, sub: function(t2, n) {
          return t2 - n;
        }, tan: function(n) {
          return t.math.isDegree && (n = t.math.toRadian(n)), Math.tan(n);
        }, tanh: function(n) {
          return t.math.sinh(n) / t.math.cosh(n);
        }, toRadian: function(t2) {
          return t2 * Math.PI / 180;
        }, and: function(t2, n) {
          return t2 & n;
        } };
      };
    }
  });

  // ../../node_modules/.pnpm/math-expression-evaluator@2.0.7/node_modules/math-expression-evaluator/dist/es/index.js
  var require_es = __commonJS({
    "../../node_modules/.pnpm/math-expression-evaluator@2.0.7/node_modules/math-expression-evaluator/dist/es/index.js"(exports, module) {
      "use strict";
      var t = require_lexer();
      var e = require_token();
      var i = require_postfix();
      var o = require_postfix_evaluator();
      var s = require_functions();
      var r = (function() {
        function r2() {
          this.toPostfix = i.toPostfix, this.addToken = t.addToken, this.lex = t.lex, this.postfixEval = o.postfixEval, this.math = s.createMathFunctions(this), this.tokens = e.createTokens(this);
        }
        return r2.prototype.eval = function(t2, e2, i2) {
          return this.postfixEval(this.toPostfix(this.lex(t2, e2)), i2);
        }, r2;
      })();
      r.TOKEN_TYPES = e.tokenTypes, r.tokenTypes = e.tokenTypes, module.exports = r;
    }
  });

  // ../../packages/pixi-panel/build/ui-connect.txt?raw
  var require_ui_connect = __commonJS({
    "../../packages/pixi-panel/build/ui-connect.txt?raw"(exports, module) {
      module.exports = '"use strict";\n(() => {\n  // ../ui-protocol/src/refreshNode.ts\n  function refreshNode({\n    children,\n    sync,\n    refresh,\n    ...props\n  }) {\n    let tick = false;\n    return {\n      component: "Refresh",\n      props,\n      value: tick,\n      sync(patch) {\n        tick = !tick;\n        patch.value = tick;\n        return sync?.call(this, patch);\n      },\n      events: {\n        refresh: refresh ?? refreshHandler\n      },\n      children\n    };\n  }\n  function refreshHandler(depth) {\n    return depth;\n  }\n\n  // ../ui-protocol/src/tree-fns.ts\n  function lookupNode(root2, path) {\n    let node = root2;\n    for (const index of path) {\n      const child = node.children?.[index];\n      if (!child) {\n        throw new Error(`lookupNode() failed: "/${path.join("/")}" not found`);\n      }\n      node = child;\n    }\n    return node;\n  }\n  function syncTree(tree, path, patch) {\n    let node = tree;\n    if (path.length > 0) {\n      node = lookupNode(tree, path);\n    }\n    syncNode(node, path, patch);\n    return patch;\n  }\n  function applyValues(tree, values) {\n    const patch = createPatch();\n    for (const { path, value } of values) {\n      const node = lookupNode(tree, path);\n      try {\n        if (!node.setValue) {\n          throw new Error(\n            `Applying values failed: Node "/${path.join("/")}" didn\'t implement setValue()`\n          );\n        }\n        node.setValue(value);\n      } catch (err) {\n        console.warn(err);\n        patch.errors.push({\n          path,\n          message: err instanceof Error ? err.message : void 0\n        });\n      }\n    }\n    return patch;\n  }\n  function applyEvent(tree, event, patch) {\n    const node = lookupNode(tree, event.path);\n    try {\n      const handler = node.events?.[event.type];\n      let syncParents = void 0;\n      if (handler) {\n        const listener = typeof handler === "function" ? handler : handler[0];\n        syncParents = listener(...event.args);\n      }\n      if (syncParents === void 0) {\n        syncParents = 0;\n      } else if (syncParents === Infinity) {\n        syncParents = event.path.length;\n      }\n      const path = event.path.slice(0, event.path.length - syncParents);\n      return syncTree(tree, path, patch);\n    } catch (err) {\n      console.warn(err);\n      patch.errors.push({\n        path: event.path,\n        message: `${event.type} failed: ${err instanceof Error ? err.message : ""}`\n      });\n      return patch;\n    }\n  }\n  function syncNode(node, path, patch) {\n    const partial = {\n      replacements: [],\n      appends: []\n    };\n    try {\n      node.sync?.(partial);\n    } catch (err) {\n      console.warn(err);\n      patch.errors.push({\n        path,\n        message: `sync failed: ${err instanceof Error ? err.message : ""}`\n      });\n    }\n    const { length, skip } = applyPartial(patch, node, path, partial);\n    for (let i = 0; i < length; i++) {\n      if (skip.includes(i)) {\n        continue;\n      }\n      syncNode(node.children[i], [...path, i], patch);\n    }\n  }\n  function applyPartial(target, node, path, patch) {\n    let length = node.children?.length ?? 0;\n    const skip = [];\n    if ("value" in patch) {\n      target.value.push({ path, value: patch.value });\n    }\n    if (patch.props) {\n      target.props.push({ path, values: patch.props });\n    }\n    for (const { index, ...replacement } of patch.replacements) {\n      if (!node.children) {\n        throw new Error("Can\'t replace children of a leaf node");\n      }\n      const init = createInit(replacement, [...path, index]);\n      target.replacements.push(init.dto);\n      node.children[index] = init.node;\n      skip.push(index);\n    }\n    for (const append of patch.appends) {\n      if (!node.children) {\n        throw new Error("Can\'t append children to a leaf node");\n      }\n      const init = createInit(append, [...path, node.children.length]);\n      target.appends.push(init.dto);\n      node.children.push(init.node);\n    }\n    if (patch.truncate !== void 0) {\n      target.truncates.push({ path, length: patch.truncate });\n      if (!node.children) {\n        throw new Error("Can\'t truncate children of a leaf node");\n      }\n      node.children.length = patch.truncate;\n      length = patch.truncate;\n    }\n    return { length, skip };\n  }\n  function createInit(init, path) {\n    const { component, props = {}, value, children, getValue, ...rest } = init;\n    const node = { ...rest };\n    const dto = {\n      path,\n      component,\n      props,\n      events: void 0,\n      value,\n      setValue: node.setValue ? true : void 0\n    };\n    if (node.events) {\n      dto.events = Object.entries(node.events).map(\n        ([event, fn]) => typeof fn === "function" ? { event } : { event, debounce: fn[1].debounce, throttle: fn[1].throttle }\n      );\n    }\n    if (getValue) {\n      if (node.sync) {\n        const initSync = node.sync.bind(node);\n        node.sync = function(patch) {\n          patch.value = getValue();\n          initSync(patch);\n        };\n      } else {\n        node.sync = function(patch) {\n          patch.value = getValue();\n        };\n      }\n      if (!("value" in init)) {\n        dto.value = getValue();\n      }\n    }\n    if (children) {\n      dto.children = [];\n      node.children = [];\n      for (let i = 0; i < children.length; i++) {\n        const child = createInit(children[i], [...path, i]);\n        dto.children.push(child.dto);\n        node.children[i] = child.node;\n      }\n    }\n    return { dto, node };\n  }\n  function createPatch() {\n    return {\n      props: [],\n      value: [],\n      replacements: [],\n      appends: [],\n      truncates: [],\n      errors: []\n    };\n  }\n\n  // ../ui-protocol/src/evalBridge.ts\n  function evalListen(tree, id) {\n    const receivers = globalThis.__UI_PROTOCOL__ = globalThis.__UI_PROTOCOL__ ?? {};\n    const receiver = {\n      set: (values) => {\n        return applyValues(tree, values);\n      },\n      dispatchEvent: (values, event) => {\n        return applyEvent(tree, event, applyValues(tree, values));\n      },\n      sync: (values, path) => {\n        return syncTree(tree, path, applyValues(tree, values));\n      }\n    };\n    if (receivers[id]) {\n      console.debug(`[devtools] receiver "${id}" was overwritten`);\n    }\n    receivers[id] = receiver;\n  }\n\n  // ../ui-protocol/src/svelte/defineRoot.ts\n  function defineRoot(root2) {\n    return root2;\n  }\n\n  // ../ui-protocol/src/svelte/defineUI.ts\n  function defineUI(init) {\n    return init;\n  }\n\n  // ../ui-protocol/src/conditionalNode.ts\n  function conditionalNode(getValue, whenTruthy, whenFalsy) {\n    const ref = { value: getValue() };\n    function createChild(value) {\n      if (value) {\n        if (typeof whenTruthy === "function") {\n          return whenTruthy(ref);\n        }\n        return whenTruthy;\n      }\n      if (typeof whenFalsy === "function") {\n        return whenFalsy();\n      }\n      return whenFalsy;\n    }\n    let ui = createChild(ref.value);\n    let previous = ref.value;\n    return defineUI({\n      component: "Fragment",\n      children: ui ? [ui] : [],\n      sync(patch) {\n        const next = getValue();\n        if (next) {\n          ref.value = next;\n        }\n        if (!previous === !next) {\n          return;\n        }\n        previous = next;\n        ui = createChild(next);\n        if (!ui) {\n          patch.truncate = 0;\n        } else if (this.children.length === 0) {\n          patch.appends.push(ui);\n        } else {\n          patch.replacements.push({ ...ui, index: 0 });\n        }\n      }\n    });\n  }\n\n  // src/ui-connect/ui-connect.ts\n  var win = window;\n  win.__UI_PROTOCOL__ = win.__UI_PROTOCOL__ ?? {};\n  var root = defineRoot({\n    children: [],\n    sync(patch) {\n      if (root.children.length === 0) {\n        let attempt = 0;\n        let detected = detect();\n        patch.appends.push(\n          refreshNode({\n            interval: 100,\n            children: [\n              conditionalNode(\n                () => detected,\n                (detectedRef) => ({\n                  component: "Trigger",\n                  props: { event: detectedRef.value }\n                })\n              )\n            ],\n            sync(patch2) {\n              detected = detect();\n              if (detected) {\n                return;\n              }\n              if (attempt === 100) {\n                patch2.props = { interval: 5e3 };\n                attempt = -1;\n              } else if (attempt !== -1) {\n                attempt++;\n              }\n            }\n          })\n        );\n      }\n    },\n    events: {\n      reset() {\n        root.children = [];\n      }\n    }\n  });\n  evalListen(root, "connect");\n  function detect() {\n    if (win.__UI_PROTOCOL__?.["pixi"]) {\n      return "ui";\n    }\n    if (win.__PIXI_APP__) {\n      return "pixi";\n    }\n    if (win.__PHASER_GAME__) {\n      return "phaser";\n    }\n    if (win.PHASER_GAME) {\n      return "phaser";\n    }\n    if (win.__PIXI_RENDERER__) {\n      return "pixi";\n    }\n    if (win.__PIXI_STAGE__) {\n      return "pixi";\n    }\n    if (win.__PIXI_DEVTOOLS__) {\n      return "pixi";\n    }\n    if (win.__PIXI_DEVTOOLS_WRAPPER__?.stage) {\n      return "pixi";\n    }\n    if (win.PIXI) {\n      return "patchable_pixi";\n    }\n    return void 0;\n  }\n})();\n';
    }
  });

  // ../../packages/pixi-panel/build/ui-legacy.txt?raw
  var require_ui_legacy = __commonJS({
    "../../packages/pixi-panel/build/ui-legacy.txt?raw"(exports, module) {
      module.exports = '"use strict";\n(() => {\n  // src/pixi-devtools/pixiDevtools.ts\n  function pixiDevtools() {\n    const win2 = window;\n    let detectedVersion = null;\n    let mode;\n    function getGlobal(varname) {\n      return win2[varname];\n    }\n    return {\n      app() {\n        return getGlobal("__PIXI_APP__") ?? getGlobal("__PIXI_DEVTOOLS__")?.app;\n      },\n      root() {\n        const stage = getGlobal("__PIXI_STAGE__");\n        if (stage) {\n          return stage;\n        }\n        const app = this.app();\n        if (app) {\n          return app.stage;\n        }\n        const game = getGlobal("__PHASER_GAME__");\n        if (game) {\n          if (game.scene.scenes.length === 1) {\n            return game.scene.scenes[0];\n          }\n          return game.scene;\n        }\n        const gameDebug = getGlobal("PHASER_GAME");\n        if (gameDebug) {\n          if (gameDebug.scene.scenes.length === 1) {\n            return gameDebug.scene.scenes[0];\n          }\n          return gameDebug.scene;\n        }\n        const stageFromPatched = getGlobal(\n          "__PATCHED_RENDERER_STAGE__"\n        );\n        if (stageFromPatched) {\n          return stageFromPatched;\n        }\n        const officialHook = getGlobal(\n          "__PIXI_DEVTOOLS_WRAPPER__"\n        );\n        if (officialHook?.stage) {\n          return officialHook.stage;\n        }\n        const officialDevtools = getGlobal(\n          "__PIXI_DEVTOOLS__"\n        );\n        if (officialDevtools?.stage) {\n          return officialDevtools.stage;\n        }\n        const renderer = this.renderer();\n        if (renderer?.lastObjectRendered) {\n          return renderer.lastObjectRendered;\n        }\n        if (renderer?._lastObjectRendered) {\n          return renderer._lastObjectRendered;\n        }\n        return void 0;\n      },\n      renderer() {\n        const renderer = getGlobal("__PIXI_RENDERER__");\n        if (renderer) {\n          return renderer;\n        }\n        const app = this.app();\n        if (app) {\n          mode = "PIXI";\n          return app.renderer;\n        }\n        const game = getGlobal("__PHASER_GAME__");\n        if (game) {\n          mode = "PHASER";\n          return game;\n        }\n        const gameDebug = getGlobal("PHASER_GAME");\n        if (gameDebug) {\n          mode = "PHASER";\n          return gameDebug;\n        }\n        const patched2 = getGlobal("__PATCHED_RENDERER__");\n        if (patched2) {\n          return patched2;\n        }\n        const officialHook = getGlobal(\n          "__PIXI_DEVTOOLS_WRAPPER__"\n        );\n        if (officialHook?.renderer) {\n          return officialHook.renderer;\n        }\n        const officialDevtools = getGlobal(\n          "__PIXI_DEVTOOLS__"\n        );\n        if (officialDevtools?.renderer) {\n          return officialDevtools.renderer;\n        }\n        return void 0;\n      },\n      canvas() {\n        const renderer = this.renderer();\n        if (renderer) {\n          if ("canvas" in renderer) {\n            return renderer.canvas;\n          }\n          if ("view" in renderer) {\n            return renderer.view;\n          }\n        }\n        return void 0;\n      },\n      childrenOf(node) {\n        if ("children" in node) {\n          const { children } = node;\n          if (Array.isArray(children)) {\n            return children;\n          }\n          return node.children.list;\n        }\n        if ("list" in node) {\n          return node.list;\n        }\n        if ("scenes" in node) {\n          return node.scenes;\n        }\n        if ("emitters" in node) {\n          return node.emitters.list;\n        }\n        if ("alive" in node) {\n          return node.alive;\n        }\n        return void 0;\n      },\n      parentOf(node) {\n        if ("parent" in node) {\n          return node.parent;\n        }\n        if ("parentContainer" in node) {\n          const container = node.parentContainer;\n          if (container === null) {\n            return node.scene;\n          }\n          return container;\n        }\n        return void 0;\n      },\n      isPixi(node) {\n        if (mode === "PIXI") {\n          return true;\n        }\n        if ("parent" in node) {\n          return true;\n        }\n        return false;\n      },\n      version() {\n        if (detectedVersion !== null) {\n          return detectedVersion;\n        }\n        const root2 = this.root();\n        if (root2) {\n          detectedVersion = void 0;\n          if ("getLocalBounds" in root2) {\n            const bounds = root2.getLocalBounds();\n            if ("containsPoint" in bounds) {\n              detectedVersion = 8;\n            }\n          }\n        }\n        return detectedVersion ?? void 0;\n      },\n      /**\n       * inVersionRange(8, 9) // true if the Pixi.js version is 8 or higher but lower than 9\n       */\n      inVersionRange(start, stop) {\n        const version = this.version();\n        if (version === void 0 || version === -1) {\n          return false;\n        }\n        if (version < start) {\n          return false;\n        }\n        if (stop === void 0 || version < stop) {\n          return true;\n        }\n        return false;\n      }\n    };\n  }\n\n  // src/pixi-devtools/pixiDevtoolsOutline.ts\n  function pixiDevtoolsOutline(devtools) {\n    const metaPropertyMap = /* @__PURE__ */ new WeakMap();\n    function autoId() {\n      autoId.current += 1;\n      if (autoId.current > Number.MAX_SAFE_INTEGER) {\n        autoId.current = 0;\n      }\n      return `${autoId.current}_${Math.floor(Math.random() * 4096).toString(16)}`;\n    }\n    autoId.current = 0;\n    function augment(node) {\n      if (!metaPropertyMap.has(node)) {\n        const newMeta = {\n          id: autoId(),\n          expanded: false\n        };\n        metaPropertyMap.set(node, newMeta);\n        return newMeta;\n      }\n      return metaPropertyMap.get(node);\n    }\n    function findIn(path, container) {\n      if (path.length === 0) {\n        return container;\n      }\n      const id = path[0];\n      const children = devtools.childrenOf(container);\n      if (!children) {\n        return void 0;\n      }\n      const node = children.find(\n        (child) => metaPropertyMap.get(child)?.id === id\n      );\n      if (node) {\n        return findIn(path.slice(1), node);\n      }\n      return void 0;\n    }\n    function find(path) {\n      const root2 = devtools.root();\n      if (!root2) {\n        return void 0;\n      }\n      return findIn(path, { children: [root2] });\n    }\n    function buildName(node) {\n      if (devtools.inVersionRange(8)) {\n        if ("label" in node && node.label) {\n          if (node.label === "Sprite") {\n            return node.label;\n          }\n          if (node.constructor.name) {\n            return `${node.constructor.name} "${node.label}"`;\n          }\n          return `"${node.label}"`;\n        }\n      } else if ("name" in node && node.name) {\n        if (node.constructor.name) {\n          return `${node.constructor.name} "${node.name}"`;\n        }\n        return `"${node.name}"`;\n      }\n      return node.constructor.name ?? "anonymous";\n    }\n    function buildTree(node) {\n      const meta = augment(node);\n      const tree = {\n        id: meta.id,\n        name: buildName(node),\n        leaf: true,\n        active: node === devtools.selection.active(),\n        selectable: devtools.selection.selectable(node),\n        visible: "visible" in node ? node.visible : void 0\n      };\n      const children = devtools.childrenOf(node) ?? [];\n      if (children.length > 0) {\n        tree.leaf = false;\n        if (meta.expanded) {\n          tree.children = children.map(buildTree);\n        }\n      }\n      return tree;\n    }\n    function searchResults(query, node) {\n      const meta = augment(node);\n      const name = buildName(node);\n      const match = name.toLowerCase().indexOf(query) !== -1;\n      const children = devtools.childrenOf(node);\n      if (!children || children.length === 0) {\n        return {\n          id: meta.id,\n          active: node === devtools.selection.active(),\n          selectable: devtools.selection.selectable(node),\n          leaf: true,\n          name,\n          visible: "visible" in node ? node.visible : void 0,\n          match\n        };\n      }\n      const results = [];\n      for (const child of children) {\n        const result = searchResults(query, child);\n        if (result.match !== false) {\n          results.push(result);\n        }\n      }\n      return {\n        id: meta.id,\n        active: node === devtools.selection.active(),\n        selectable: devtools.selection.selectable(node),\n        leaf: false,\n        name,\n        match: !match && results.length !== 0 ? void 0 : match,\n        visible: "visible" in node ? node.visible : void 0,\n        children: results\n      };\n    }\n    return {\n      query: "",\n      tree() {\n        const root2 = devtools.root();\n        if (!root2) {\n          return {\n            id: "disconnected",\n            active: false,\n            selectable: false,\n            leaf: true,\n            name: "(disconnected))",\n            visible: false\n          };\n        }\n        if (!metaPropertyMap.has(root2)) {\n          augment(root2).expanded = true;\n        }\n        if (this.query) {\n          return searchResults(this.query.toLowerCase(), root2);\n        }\n        return buildTree(root2);\n      },\n      expand(path) {\n        const node = find(path);\n        if (node) {\n          augment(node).expanded = true;\n        }\n      },\n      collapse(path) {\n        const node = find(path);\n        if (node) {\n          augment(node).expanded = false;\n        }\n      },\n      selectable(path) {\n        const node = find(path);\n        if (node) {\n          devtools.selection.enable(node);\n        }\n      },\n      unselectable(path) {\n        const node = find(path);\n        if (node) {\n          devtools.selection.disable(node);\n        }\n      },\n      hide(path) {\n        const node = find(path);\n        if (node && "visible" in node) {\n          node.visible = false;\n        }\n      },\n      show(path) {\n        const node = find(path);\n        if (node && "visible" in node) {\n          node.visible = true;\n        }\n      },\n      activate(path) {\n        devtools.selection.activate(find(path));\n      },\n      highlight(path) {\n        devtools.selection.highlight(find(path));\n      },\n      log(path) {\n        const node = find(path);\n        if (node) {\n          console.info(node);\n        }\n      },\n      expandParentsFor(node) {\n        const parent = devtools.parentOf(node);\n        if (parent) {\n          augment(parent).expanded = true;\n          this.expandParentsFor(parent);\n        }\n      }\n    };\n  }\n\n  // src/pixi-devtools/pixiDevtoolsSelection.ts\n  function pixiDevtoolsSelection() {\n    const win2 = window;\n    const metaPropertyMap = /* @__PURE__ */ new WeakMap();\n    let highlight;\n    return {\n      active() {\n        return win2.$pixi;\n      },\n      activate(node) {\n        win2.$pixi = node;\n      },\n      selectable(node) {\n        return metaPropertyMap.get(node) !== false;\n      },\n      disable(node) {\n        metaPropertyMap.set(node, false);\n      },\n      enable(node) {\n        metaPropertyMap.set(node, true);\n      },\n      highlighted() {\n        return highlight;\n      },\n      highlight(node) {\n        highlight = node;\n      }\n    };\n  }\n\n  // src/pixi-devtools/pixiDevtoolsProperties.ts\n  function pixiDevtoolsProperties(devtools) {\n    const metaProperty = /* @__PURE__ */ Symbol("pixi-devtools-properties");\n    function directProp(object, property, type) {\n      if (property in object && typeof object[property] === type) {\n        return [\n          {\n            key: property,\n            get: () => object[property],\n            set: (value) => {\n              object[property] = value;\n            }\n          }\n        ];\n      }\n      return [];\n    }\n    function nestedProp(object, nested, property, type) {\n      if (nested in object && typeof object[nested] === "object" && property in object[nested] && typeof object[nested][property] === type) {\n        return [\n          {\n            key: property,\n            get: () => object[nested][property],\n            set: (value) => {\n              object[nested][property] = value;\n            }\n          }\n        ];\n      }\n      return [];\n    }\n    function pointProperty(node, property, keyX, keyY) {\n      if (property in node && typeof node[property] === "object" && "x" in node[property] && typeof node[property].x === "number" && "y" in node[property] && typeof node[property].y === "number") {\n        return [\n          {\n            key: keyX,\n            get: () => node[property].x,\n            set: (value) => {\n              node[property].x = value;\n            }\n          },\n          {\n            key: keyY,\n            get: () => node[property].y,\n            set: (value) => {\n              node[property].y = value;\n            }\n          }\n        ];\n      }\n      return [];\n    }\n    function getPropDefinition(node) {\n      if (!node[metaProperty]) {\n        const objectDefs = [];\n        objectDefs.push(...directProp(node, "x", "number"));\n        objectDefs.push(...directProp(node, "y", "number"));\n        objectDefs.push(...directProp(node, "angle", "number"));\n        objectDefs.push(...pointProperty(node, "scale", "scaleX", "scaleY"));\n        objectDefs.push(...directProp(node, "scaleX", "number"));\n        objectDefs.push(...directProp(node, "scaleY", "number"));\n        objectDefs.push(...directProp(node, "width", "number"));\n        objectDefs.push(...directProp(node, "height", "number"));\n        objectDefs.push(...pointProperty(node, "anchor", "anchorX", "anchorY"));\n        objectDefs.push(...pointProperty(node, "pivot", "pivotX", "pivotY"));\n        objectDefs.push(...pointProperty(node, "skew", "skewX", "skewY"));\n        objectDefs.push(...directProp(node, "alpha", "number"));\n        objectDefs.push(...directProp(node, "visible", "boolean"));\n        objectDefs.push(...directProp(node, "cullable", "boolean"));\n        objectDefs.push(...directProp(node, "sortableChildren", "boolean"));\n        objectDefs.push(...directProp(node, "zIndex", "number"));\n        objectDefs.push(...directProp(node, "interactiveChildren", "boolean"));\n        if ("originX" in node && typeof node.originX === "number" && "setOrigin" in node && typeof node.setOrigin === "function") {\n          objectDefs.push({\n            key: "originX",\n            get: () => node.originX,\n            set: (value) => node.setOrigin(\n              value,\n              node.originY\n            )\n          });\n          objectDefs.push({\n            key: "originY",\n            get: () => node.originY,\n            set: (value) => node.setOrigin(\n              node.originX,\n              value\n            )\n          });\n        }\n        if (devtools.isPixi(node)) {\n          const container = node;\n          if (typeof container.eventMode === "string") {\n            objectDefs.push(...directProp(node, "eventMode", "string"));\n            objectDefs.push({\n              key: "cursor",\n              get: () => container.cursor,\n              set: (value) => {\n                container.cursor = value;\n              }\n            });\n          } else {\n            objectDefs.push(...directProp(node, "interactive", "boolean"));\n            objectDefs.push(...directProp(node, "buttonMode", "boolean"));\n          }\n        }\n        const textDefs = [];\n        textDefs.push(...directProp(node, "text", "string"));\n        if (devtools.isPixi(node)) {\n          textDefs.push(...nestedProp(node, "style", "align", "string"));\n          textDefs.push(...nestedProp(node, "style", "breakWords", "boolean"));\n          textDefs.push(...nestedProp(node, "style", "dropShadow", "boolean"));\n          textDefs.push(\n            ...nestedProp(node, "style", "dropShadowAlpha", "number")\n          );\n          textDefs.push(\n            ...nestedProp(node, "style", "dropShadowAngle", "number")\n          );\n          textDefs.push(...nestedProp(node, "style", "dropShadowBlur", "number"));\n          textDefs.push(\n            ...nestedProp(node, "style", "dropShadowColor", "string")\n          );\n          textDefs.push(\n            ...nestedProp(node, "style", "dropShadowDistance", "number")\n          );\n          textDefs.push(...nestedProp(node, "style", "fontFamily", "string"));\n          textDefs.push(...nestedProp(node, "style", "fontSize", "number"));\n          textDefs.push(...nestedProp(node, "style", "fontStyle", "string"));\n          textDefs.push(...nestedProp(node, "style", "fontVariant", "string"));\n          textDefs.push(...nestedProp(node, "style", "fontWeight", "string"));\n          textDefs.push(...nestedProp(node, "style", "leading", "number"));\n          textDefs.push(...nestedProp(node, "style", "letterSpacing", "number"));\n          textDefs.push(...nestedProp(node, "style", "lineHeight", "number"));\n          textDefs.push(...nestedProp(node, "style", "lineJoin", "string"));\n          textDefs.push(...nestedProp(node, "style", "miterLimit", "number"));\n          textDefs.push(...nestedProp(node, "style", "padding", "number"));\n          textDefs.push(...nestedProp(node, "style", "stroke", "string"));\n          textDefs.push(\n            ...nestedProp(node, "style", "strokeThickness", "number")\n          );\n          textDefs.push(...nestedProp(node, "style", "textBaseline", "string"));\n          textDefs.push(...nestedProp(node, "style", "trim", "boolean"));\n          textDefs.push(...nestedProp(node, "style", "whiteSpace", "string"));\n          textDefs.push(...nestedProp(node, "style", "wordWrap", "boolean"));\n          textDefs.push(...nestedProp(node, "style", "wordWrapWidth", "number"));\n          textDefs.push(...nestedProp(node, "style", "fontSize", "number"));\n          textDefs.push(...nestedProp(node, "style", "leading", "number"));\n          textDefs.push(...nestedProp(node, "style", "padding", "number"));\n        }\n        node[metaProperty] = {\n          object: objectDefs,\n          text: textDefs\n        };\n      }\n      return node[metaProperty];\n    }\n    return {\n      definitions() {\n        const definitions = {\n          object: [],\n          text: []\n        };\n        const node = devtools.selection.active();\n        if (node && (!("destroyed" in node) || !node.destroyed)) {\n          const nodeDefinitions = getPropDefinition(node);\n          definitions.object.push(...nodeDefinitions.object);\n          definitions.text.push(...nodeDefinitions.text);\n        }\n        return definitions;\n      }\n    };\n  }\n\n  // src/pixi-devtools/pixiDevtoolsViewport.ts\n  function pixiDevtoolsViewport(devtools) {\n    function findNodesAt(point, node, filter) {\n      if (!filter(node)) {\n        return [];\n      }\n      const children = devtools.childrenOf(node);\n      const nodes = [];\n      if (children) {\n        for (let i = children.length - 1; i >= 0; i -= 1) {\n          const child = children[i];\n          nodes.push(...findNodesAt(point, child, filter));\n        }\n      }\n      if ("containsPoint" in node && typeof node.containsPoint === "function" && node.containsPoint(point)) {\n        nodes.push(node);\n      } else if ("getBounds" in node) {\n        const bounds = node.getBounds();\n        if ("containsPoint" in bounds && typeof bounds.containsPoint === "function") {\n          if (bounds.containsPoint(point.x, point.y)) {\n            nodes.push(node);\n          }\n        } else if ("contains" in bounds && typeof bounds.contains === "function" && bounds.contains(point.x, point.y)) {\n          nodes.push(node);\n        }\n      }\n      return nodes;\n    }\n    return {\n      size() {\n        const renderer = devtools.renderer();\n        if (renderer) {\n          if ("width" in renderer) {\n            return {\n              width: renderer.width,\n              height: renderer.height\n            };\n          }\n          return {\n            width: renderer.scale.displaySize.width,\n            height: renderer.scale.displaySize.height\n          };\n        }\n        return void 0;\n      },\n      renderScale() {\n        if (devtools.inVersionRange(8)) {\n          return { x: 1, y: 1 };\n        }\n        return this.inputScale();\n      },\n      inputScale() {\n        const renderer = devtools.renderer();\n        if (renderer) {\n          if ("resolution" in renderer) {\n            return {\n              x: renderer.resolution,\n              y: renderer.resolution\n            };\n          }\n          return renderer.scale.displayScale;\n        }\n        return void 0;\n      },\n      fromClient(clientX, clientY) {\n        const el = devtools.canvas();\n        const scale = this.inputScale();\n        if (el && scale && "getBoundingClientRect" in el) {\n          const bounds = el.getBoundingClientRect();\n          return {\n            x: (clientX - bounds.x) * (el.width / scale.x / bounds.width),\n            y: (clientY - bounds.y) * (el.height / scale.y / bounds.height)\n          };\n        }\n        throw new Error("offscreen canvas?");\n      },\n      ray(point, filter = () => true) {\n        const root2 = devtools.root();\n        if (!root2) {\n          return [];\n        }\n        const nodes = findNodesAt(point, root2, filter);\n        return nodes;\n      }\n    };\n  }\n\n  // src/pixi-devtools/pixiDevtoolsOverlay.ts\n  function pixiDevtoolsOverlay(devtools) {\n    function position(x, y, width, height) {\n      return {\n        position: "absolute",\n        left: x,\n        top: y,\n        width,\n        height\n      };\n    }\n    function buildBorders(color) {\n      const container = document.createElement("div");\n      container.dataset.pixiDevtools = "border";\n      Object.assign(container.style, {\n        ...position("0", "0", "0", "0"),\n        transformOrigin: "top left",\n        transform: "scale(0)"\n      });\n      const top = document.createElement("div");\n      const right = document.createElement("div");\n      const bottom = document.createElement("div");\n      const left = document.createElement("div");\n      top.dataset.pixiDevtools = "borderTop";\n      Object.assign(top.style, {\n        ...position("0", "-3px", "100%", "3px"),\n        transformOrigin: "center bottom",\n        background: color\n      });\n      right.dataset.pixiDevtools = "borderRight";\n      Object.assign(right.style, {\n        ...position("100%", "0", "3px", "100%"),\n        transformOrigin: "center left",\n        background: color\n      });\n      bottom.dataset.pixiDevtools = "borderBottom";\n      Object.assign(bottom.style, {\n        ...position("0", "100%", "100%", "3px"),\n        transformOrigin: "center top",\n        background: color\n      });\n      left.dataset.pixiDevtools = "borderLeft";\n      Object.assign(left.style, {\n        ...position("-3px", "0", "3px", "100%"),\n        transformOrigin: "center right",\n        background: color\n      });\n      container.appendChild(top);\n      container.appendChild(right);\n      container.appendChild(bottom);\n      container.appendChild(left);\n      return {\n        container,\n        top,\n        right,\n        bottom,\n        left\n      };\n    }\n    function resolveScale(node) {\n      const unscale = { x: 1, y: 1 };\n      let parentNode = node;\n      do {\n        if ("scaleX" in parentNode && typeof parentNode.scaleX === "number" && "scaleY" in parentNode && typeof parentNode.scaleY === "number") {\n          unscale.x /= parentNode.scaleX;\n          unscale.y /= parentNode.scaleY;\n        } else if ("scale" in parentNode && typeof parentNode.scale === "object" && "x" in parentNode.scale) {\n          unscale.x /= parentNode.scale.x;\n          unscale.y /= parentNode.scale.y;\n        }\n        parentNode = devtools.parentOf(parentNode);\n      } while (parentNode);\n      return unscale;\n    }\n    function connect(el) {\n      if (!el) {\n        return () => {\n        };\n      }\n      const canvas = el;\n      const clipEl = document.createElement("div");\n      clipEl.dataset.pixiDevtools = "clip";\n      Object.assign(clipEl.style, {\n        position: "fixed",\n        left: "0",\n        top: "0",\n        width: "100%",\n        height: "100%",\n        pointerEvents: "none",\n        overflow: "clip"\n      });\n      const overlayEl = document.createElement("div");\n      overlayEl.dataset.pixiDevtools = "overlay";\n      Object.assign(overlayEl.style, {\n        ...position("0", "0", "0", "0"),\n        pointerEvents: "none",\n        transformOrigin: "top left"\n      });\n      clipEl.appendChild(overlayEl);\n      const highlight = document.createElement("div");\n      highlight.dataset.pixiDevtools = "highlight";\n      Object.assign(highlight.style, {\n        ...position("0", "0", "0", "0"),\n        transformOrigin: "top left",\n        transform: "scale(0)",\n        background: "rgba(102, 163, 218, 0.7)"\n      });\n      overlayEl.appendChild(highlight);\n      const borders = buildBorders("#ff9f2c");\n      overlayEl.appendChild(borders.container);\n      const anchor = document.createElement("div");\n      anchor.dataset.pixiDevtools = "anchor";\n      Object.assign(anchor.style, {\n        ...position("0", "0", "0", "0"),\n        transformOrigin: "top left",\n        transform: "scale(0)"\n      });\n      const dotEl = document.createElement("div");\n      dotEl.dataset.pixiDevtools = "dot";\n      Object.assign(dotEl.style, {\n        ...position("-4px", "-4px", "6px", "6px"),\n        transformOrigin: "top left",\n        background: "#ff9f2c",\n        border: "1px solid #2a2b2b",\n        borderRadius: "50%"\n      });\n      anchor.appendChild(dotEl);\n      overlayEl.appendChild(anchor);\n      function calibrateOverlay() {\n        if (!canvas || !("getBoundingClientRect" in canvas)) {\n          return;\n        }\n        const size = devtools.viewport.size();\n        const scale = devtools.viewport.renderScale();\n        if (!size || !scale) {\n          return;\n        }\n        overlayEl.style.width = `${size.width / scale.x}px`;\n        overlayEl.style.height = `${size.height / scale.y}px`;\n        const canvasBounds = canvas.getBoundingClientRect();\n        overlayEl.style.transform = "";\n        const overlayBounds = overlayEl.getBoundingClientRect();\n        overlayEl.style.transform = `translate(${canvasBounds.x - overlayBounds.x}px, ${canvasBounds.y - overlayBounds.y}px) scale(${canvasBounds.width / overlayBounds.width}, ${canvasBounds.height / overlayBounds.height})`;\n      }\n      let throttle = 0;\n      let raf;\n      function calculateCss(node) {\n        if (!node) {\n          return void 0;\n        }\n        const parent2 = devtools.parentOf(node);\n        if (!parent2) {\n          return void 0;\n        }\n        let size;\n        let m;\n        if ("getLocalBounds" in node) {\n          size = node.getLocalBounds();\n          m = node.worldTransform;\n        } else if ("getLocalTransformMatrix" in node && "width" in node) {\n          const image = node;\n          size = {\n            x: 0,\n            y: 0,\n            width: image.width,\n            height: image.height\n          };\n          if ("originX" in image) {\n            size.x -= image.width * image.originX;\n            size.y -= image.height * image.originY;\n          }\n          m = image.getLocalTransformMatrix();\n        } else {\n          return void 0;\n        }\n        const offset = `translate(${size.x}px, ${size.y}px)`;\n        const unscale = resolveScale(node);\n        let anchorTransform = "scale(0)";\n        if ("anchor" in node || "originX" in node || "pivot" in node) {\n          let pivot = "";\n          if ("pivot" in node) {\n            pivot = `translate(${node.pivot.x}px, ${node.pivot.y}px)`;\n          }\n          anchorTransform = `matrix(${m.a}, ${m.b}, ${m.c}, ${m.d}, ${m.tx}, ${m.ty}) ${pivot} scale(${unscale.x}, ${unscale.y})`;\n        }\n        return {\n          box: {\n            width: `${size.width}px`,\n            height: `${size.height}px`,\n            transform: `matrix(${m.a}, ${m.b}, ${m.c}, ${m.d}, ${m.tx}, ${m.ty}) ${offset}`\n          },\n          borderTop: `scale(1, ${Math.abs(unscale.y)})`,\n          borderRight: `scale(${Math.abs(unscale.x)}, 1)`,\n          borderBottom: `scale(1, ${Math.abs(unscale.y)})`,\n          borderLeft: `scale(${Math.abs(unscale.x)}, 1)`,\n          anchor: anchorTransform\n        };\n      }\n      function updateOverlay() {\n        raf = requestAnimationFrame(updateOverlay);\n        const activeNode = devtools.selection.active();\n        const highlightNode = devtools.selection.highlighted();\n        if (throttle <= 0) {\n          if (activeNode || highlightNode) {\n            calibrateOverlay();\n            throttle = 15;\n          }\n        } else {\n          throttle -= 1;\n        }\n        const activeCss = calculateCss(activeNode);\n        if (activeCss) {\n          borders.container.style.transform = activeCss.box.transform;\n          borders.container.style.width = activeCss.box.width;\n          borders.container.style.height = activeCss.box.height;\n          borders.top.style.transform = activeCss.borderTop;\n          borders.right.style.transform = activeCss.borderRight;\n          borders.bottom.style.transform = activeCss.borderBottom;\n          borders.left.style.transform = activeCss.borderLeft;\n          anchor.style.transform = activeCss.anchor;\n        } else {\n          borders.container.style.transform = "scale(0)";\n          anchor.style.transform = "scale(0)";\n        }\n        const highlightCss = activeNode === highlightNode ? activeCss : calculateCss(highlightNode);\n        if (highlightCss) {\n          highlight.style.transform = highlightCss.box.transform;\n          highlight.style.width = highlightCss.box.width;\n          highlight.style.height = highlightCss.box.height;\n        } else {\n          highlight.style.transform = "scale(0)";\n        }\n      }\n      let parent = canvas;\n      while (parent) {\n        parent = parent.parentElement;\n        if (parent?.tagName === "BODY") {\n          parent.appendChild(clipEl);\n          updateOverlay();\n          break;\n        }\n      }\n      return () => {\n        clipEl.remove();\n        if (raf) {\n          cancelAnimationFrame(raf);\n        }\n      };\n    }\n    let previous = devtools.canvas();\n    let cancel = connect(previous);\n    setInterval(() => {\n      const canvas = devtools.canvas();\n      if (canvas !== previous) {\n        previous = canvas;\n        cancel();\n        cancel = connect(canvas);\n      }\n    }, 2500);\n  }\n\n  // src/pixi-devtools/pixiDevtoolsClickToSelect.ts\n  function pixiDevtoolsClickToSelect(devtools) {\n    let moved = true;\n    function onSelectAt(point) {\n      const $pixi = devtools.selection.active();\n      const nodes = devtools.viewport.ray(point, (node) => {\n        if ("visible" in node && node.visible === false) {\n          return false;\n        }\n        return devtools.selection.selectable(node);\n      });\n      const root2 = devtools.root();\n      if (nodes.length > 1 && nodes[nodes.length - 1] === root2) {\n        nodes.length -= 1;\n      }\n      if (moved || nodes.length === 1) {\n        moved = false;\n        devtools.selection.activate(nodes[0]);\n      } else {\n        let index = $pixi ? nodes.indexOf($pixi) : -1;\n        if (index === -1 || index === nodes.length - 1) {\n          index = 0;\n        } else if (nodes.length > 1) {\n          index += 1;\n        }\n        devtools.selection.activate(nodes[index]);\n      }\n    }\n    function onContextMenu(e) {\n      if (e.defaultPrevented) {\n        return;\n      }\n      e.preventDefault();\n      const point = devtools.viewport.fromClient(e.clientX, e.clientY);\n      onSelectAt(point);\n    }\n    function onPointerDown(e) {\n      if (e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey) {\n        const point = devtools.viewport.fromClient(e.clientX, e.clientY);\n        onSelectAt(point);\n      }\n    }\n    function onPointerMove() {\n      moved = true;\n    }\n    let previous;\n    function bindEvents() {\n      const canvas = devtools.canvas();\n      if (canvas !== previous) {\n        if (previous) {\n          previous.removeEventListener("contextmenu", onContextMenu);\n          previous.removeEventListener("pointerdown", onPointerDown);\n          previous.removeEventListener("pointermove", onPointerMove);\n        }\n        if (canvas) {\n          canvas.addEventListener("contextmenu", onContextMenu);\n          canvas.addEventListener("pointerdown", onPointerDown);\n          canvas.addEventListener("pointermove", onPointerMove);\n        }\n        previous = canvas;\n      }\n    }\n    bindEvents();\n    setInterval(bindEvents, 2500);\n    return {};\n  }\n\n  // ../ui-protocol/src/refreshNode.ts\n  function refreshNode({\n    children,\n    sync,\n    refresh,\n    ...props\n  }) {\n    let tick = false;\n    return {\n      component: "Refresh",\n      props,\n      value: tick,\n      sync(patch) {\n        tick = !tick;\n        patch.value = tick;\n        return sync?.call(this, patch);\n      },\n      events: {\n        refresh: refresh ?? refreshHandler\n      },\n      children\n    };\n  }\n  function refreshHandler(depth) {\n    return depth;\n  }\n\n  // ../ui-protocol/src/svelte/defineUI.ts\n  function defineUI(init) {\n    return init;\n  }\n\n  // ../ui-protocol/src/switchNode.ts\n  function switchNode(selected, choices) {\n    let previous = selected();\n    let choice = previous === void 0 ? void 0 : choices[previous];\n    let ui = typeof choice === "function" ? choice() : choice;\n    return defineUI({\n      component: "Fragment",\n      children: ui ? [ui] : [],\n      sync(patch) {\n        const current = selected();\n        if (current === previous) {\n          return;\n        }\n        previous = current;\n        choice = current === void 0 ? void 0 : choices[current];\n        if (choice) {\n          ui = typeof choice === "function" ? choice() : choice;\n          if (this.children.length === 0) {\n            patch.appends.push(ui);\n          } else {\n            patch.replacements.push({\n              ...ui,\n              index: 0\n            });\n          }\n        } else if (this.children.length === 1) {\n          patch.truncate = 0;\n        }\n      }\n    });\n  }\n\n  // ../ui-protocol/src/conditionalNode.ts\n  function conditionalNode(getValue, whenTruthy, whenFalsy) {\n    const ref = { value: getValue() };\n    function createChild(value) {\n      if (value) {\n        if (typeof whenTruthy === "function") {\n          return whenTruthy(ref);\n        }\n        return whenTruthy;\n      }\n      if (typeof whenFalsy === "function") {\n        return whenFalsy();\n      }\n      return whenFalsy;\n    }\n    let ui = createChild(ref.value);\n    let previous = ref.value;\n    return defineUI({\n      component: "Fragment",\n      children: ui ? [ui] : [],\n      sync(patch) {\n        const next = getValue();\n        if (next) {\n          ref.value = next;\n        }\n        if (!previous === !next) {\n          return;\n        }\n        previous = next;\n        ui = createChild(next);\n        if (!ui) {\n          patch.truncate = 0;\n        } else if (this.children.length === 0) {\n          patch.appends.push(ui);\n        } else {\n          patch.replacements.push({ ...ui, index: 0 });\n        }\n      }\n    });\n  }\n\n  // src/pixi-devtools/session.ts\n  var namespace = "devtools:";\n  var session = {\n    get(key) {\n      try {\n        const value = sessionStorage.getItem(namespace + key);\n        if (value === null) {\n          return void 0;\n        }\n        return JSON.parse(value);\n      } catch {\n        return void 0;\n      }\n    },\n    set(key, value) {\n      try {\n        sessionStorage.setItem(namespace + key, JSON.stringify(value));\n      } catch {\n        return;\n      }\n    }\n  };\n  var session_default = session;\n\n  // ../ui-protocol/src/errorBoundaryNode.ts\n  function errorBoundaryNode(child) {\n    let remove = false;\n    let restored = 0;\n    return defineUI({\n      component: "ErrorBoundary",\n      events: {\n        onerror() {\n          remove = true;\n        },\n        onrestore(value) {\n          restored = value;\n        }\n      },\n      children: [child()],\n      sync(patch) {\n        if (remove) {\n          patch.truncate = 0;\n          remove = false;\n        } else if (restored) {\n          patch.appends.push(child());\n          patch.props = { restored };\n          restored = 0;\n        }\n      }\n    });\n  }\n\n  // src/pixi-devtools/pixiApplicationTab.ts\n  function pixiApplicationTab(appRef) {\n    return defineUI({\n      component: "Fragment",\n      children: [\n        conditionalNode(() => appRef.value?.ticker, tickerPanel),\n        conditionalNode(\n          () => appRef.value?.renderer?.background,\n          backgroundPanel\n        )\n      ]\n    });\n  }\n  function tickerPanel(tickerRef) {\n    return errorBoundaryNode(() => ({\n      component: "Panel",\n      props: {\n        title: "Ticker",\n        expanded: session_default.get("pixi:tickerPanel") ?? true\n      },\n      events: {\n        setExpanded: (expanded) => session_default.set("pixi:tickerPanel", expanded)\n      },\n      children: [\n        {\n          component: "Box",\n          props: { gap: 6, padding: 8 },\n          children: [\n            {\n              component: "Property",\n              props: { label: "Speed", hint: "Factor of current deltaTime" },\n              children: [\n                {\n                  component: "NumberInput",\n                  props: { step: 0.01 },\n                  getValue: () => tickerRef.value.speed,\n                  setValue(speed) {\n                    tickerRef.value.speed = speed;\n                  }\n                }\n              ]\n            },\n            {\n              component: "Property",\n              props: {\n                hint: "Whether or not this ticker has been started"\n              },\n              children: [\n                conditionalNode(\n                  () => tickerRef.value.started,\n                  {\n                    component: "ToggleButton",\n                    props: { icon: "pause" },\n                    events: {\n                      onclick() {\n                        tickerRef.value.stop();\n                      }\n                    }\n                  },\n                  {\n                    component: "ToggleButton",\n                    props: { icon: "play" },\n                    events: {\n                      onclick() {\n                        tickerRef.value.start();\n                      }\n                    }\n                  }\n                )\n              ]\n            }\n          ]\n        }\n      ]\n    }));\n  }\n  function backgroundPanel(backgroundRef) {\n    return errorBoundaryNode(() => ({\n      component: "Panel",\n      props: {\n        title: "Background",\n        expanded: session_default.get("pixi:backgroundPanel") ?? true\n      },\n      events: {\n        setExpanded: (expanded) => session_default.set("pixi:backgroundPanel", expanded)\n      },\n      children: [\n        {\n          component: "Box",\n          props: { gap: 6, padding: 8 },\n          children: [\n            {\n              component: "Property",\n              props: {\n                label: "Color",\n                hint: "The background color and alpha of the main view"\n              },\n              children: [\n                {\n                  component: "ColorInput",\n                  getValue() {\n                    const color = backgroundRef.value.color;\n                    const hex = typeof color.toHex === "function" ? color.toHex() : color;\n                    if (typeof hex !== "string") {\n                      return "";\n                    }\n                    if (backgroundRef.value.alpha >= 1) {\n                      return hex;\n                    }\n                    return hex + Math.round(backgroundRef.value.alpha * 255).toString(16).padStart(2, "0");\n                  },\n                  setValue(color) {\n                    if (color.length === 7) {\n                      backgroundRef.value.color = color;\n                    } else if (color.length === 9) {\n                      backgroundRef.value.color = color.substring(0, 7);\n                      backgroundRef.value.alpha = parseInt(color.substring(7), 16) / 255;\n                    }\n                  }\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }));\n  }\n\n  // ../ui-protocol/src/tree-fns.ts\n  function lookupNode(root2, path) {\n    let node = root2;\n    for (const index of path) {\n      const child = node.children?.[index];\n      if (!child) {\n        throw new Error(`lookupNode() failed: "/${path.join("/")}" not found`);\n      }\n      node = child;\n    }\n    return node;\n  }\n  function syncTree(tree, path, patch) {\n    let node = tree;\n    if (path.length > 0) {\n      node = lookupNode(tree, path);\n    }\n    syncNode(node, path, patch);\n    return patch;\n  }\n  function applyValues(tree, values) {\n    const patch = createPatch();\n    for (const { path, value } of values) {\n      const node = lookupNode(tree, path);\n      try {\n        if (!node.setValue) {\n          throw new Error(\n            `Applying values failed: Node "/${path.join("/")}" didn\'t implement setValue()`\n          );\n        }\n        node.setValue(value);\n      } catch (err) {\n        console.warn(err);\n        patch.errors.push({\n          path,\n          message: err instanceof Error ? err.message : void 0\n        });\n      }\n    }\n    return patch;\n  }\n  function applyEvent(tree, event, patch) {\n    const node = lookupNode(tree, event.path);\n    try {\n      const handler = node.events?.[event.type];\n      let syncParents = void 0;\n      if (handler) {\n        const listener = typeof handler === "function" ? handler : handler[0];\n        syncParents = listener(...event.args);\n      }\n      if (syncParents === void 0) {\n        syncParents = 0;\n      } else if (syncParents === Infinity) {\n        syncParents = event.path.length;\n      }\n      const path = event.path.slice(0, event.path.length - syncParents);\n      return syncTree(tree, path, patch);\n    } catch (err) {\n      console.warn(err);\n      patch.errors.push({\n        path: event.path,\n        message: `${event.type} failed: ${err instanceof Error ? err.message : ""}`\n      });\n      return patch;\n    }\n  }\n  function syncNode(node, path, patch) {\n    const partial = {\n      replacements: [],\n      appends: []\n    };\n    try {\n      node.sync?.(partial);\n    } catch (err) {\n      console.warn(err);\n      patch.errors.push({\n        path,\n        message: `sync failed: ${err instanceof Error ? err.message : ""}`\n      });\n    }\n    const { length, skip } = applyPartial(patch, node, path, partial);\n    for (let i = 0; i < length; i++) {\n      if (skip.includes(i)) {\n        continue;\n      }\n      syncNode(node.children[i], [...path, i], patch);\n    }\n  }\n  function applyPartial(target, node, path, patch) {\n    let length = node.children?.length ?? 0;\n    const skip = [];\n    if ("value" in patch) {\n      target.value.push({ path, value: patch.value });\n    }\n    if (patch.props) {\n      target.props.push({ path, values: patch.props });\n    }\n    for (const { index, ...replacement } of patch.replacements) {\n      if (!node.children) {\n        throw new Error("Can\'t replace children of a leaf node");\n      }\n      const init = createInit(replacement, [...path, index]);\n      target.replacements.push(init.dto);\n      node.children[index] = init.node;\n      skip.push(index);\n    }\n    for (const append of patch.appends) {\n      if (!node.children) {\n        throw new Error("Can\'t append children to a leaf node");\n      }\n      const init = createInit(append, [...path, node.children.length]);\n      target.appends.push(init.dto);\n      node.children.push(init.node);\n    }\n    if (patch.truncate !== void 0) {\n      target.truncates.push({ path, length: patch.truncate });\n      if (!node.children) {\n        throw new Error("Can\'t truncate children of a leaf node");\n      }\n      node.children.length = patch.truncate;\n      length = patch.truncate;\n    }\n    return { length, skip };\n  }\n  function createInit(init, path) {\n    const { component, props = {}, value, children, getValue, ...rest } = init;\n    const node = { ...rest };\n    const dto = {\n      path,\n      component,\n      props,\n      events: void 0,\n      value,\n      setValue: node.setValue ? true : void 0\n    };\n    if (node.events) {\n      dto.events = Object.entries(node.events).map(\n        ([event, fn]) => typeof fn === "function" ? { event } : { event, debounce: fn[1].debounce, throttle: fn[1].throttle }\n      );\n    }\n    if (getValue) {\n      if (node.sync) {\n        const initSync = node.sync.bind(node);\n        node.sync = function(patch) {\n          patch.value = getValue();\n          initSync(patch);\n        };\n      } else {\n        node.sync = function(patch) {\n          patch.value = getValue();\n        };\n      }\n      if (!("value" in init)) {\n        dto.value = getValue();\n      }\n    }\n    if (children) {\n      dto.children = [];\n      node.children = [];\n      for (let i = 0; i < children.length; i++) {\n        const child = createInit(children[i], [...path, i]);\n        dto.children.push(child.dto);\n        node.children[i] = child.node;\n      }\n    }\n    return { dto, node };\n  }\n  function createPatch() {\n    return {\n      props: [],\n      value: [],\n      replacements: [],\n      appends: [],\n      truncates: [],\n      errors: []\n    };\n  }\n\n  // ../ui-protocol/src/evalBridge.ts\n  function evalListen(tree, id) {\n    const receivers = globalThis.__UI_PROTOCOL__ = globalThis.__UI_PROTOCOL__ ?? {};\n    const receiver = {\n      set: (values) => {\n        return applyValues(tree, values);\n      },\n      dispatchEvent: (values, event) => {\n        return applyEvent(tree, event, applyValues(tree, values));\n      },\n      sync: (values, path) => {\n        return syncTree(tree, path, applyValues(tree, values));\n      }\n    };\n    if (receivers[id]) {\n      console.debug(`[devtools] receiver "${id}" was overwritten`);\n    }\n    receivers[id] = receiver;\n  }\n\n  // ../ui-protocol/src/svelte/defineRoot.ts\n  function defineRoot(root2) {\n    return root2;\n  }\n\n  // src/pixi-devtools/ui-legacy.ts\n  var legacy = pixiDevtools();\n  legacy.selection = pixiDevtoolsSelection();\n  var outline = pixiDevtoolsOutline(legacy);\n  legacy.outline = outline;\n  var properties = pixiDevtoolsProperties(legacy);\n  legacy.properties = properties;\n  legacy.viewport = pixiDevtoolsViewport(legacy);\n  legacy.overlay = pixiDevtoolsOverlay(legacy);\n  pixiDevtoolsClickToSelect(legacy);\n  var win = window;\n  win.__UI_PROTOCOL__ = win.__UI_PROTOCOL__ ?? {};\n  var root = defineRoot({\n    children: [],\n    sync(patch) {\n      if (root.children.length === 0) {\n        patch.appends.push(\n          refreshNode({\n            interval: 2e3,\n            children: [\n              conditionalNode(\n                () => {\n                  if (legacy.renderer() ?? legacy.root()) {\n                    return false;\n                  }\n                  if (win.PIXI?.[patched]) {\n                    return false;\n                  }\n                  return !!win.PIXI;\n                },\n                () => initPatchEngine(),\n                () => initLegacyUI()\n              )\n            ]\n          })\n        );\n      }\n    },\n    events: {\n      reset() {\n        root.children = [];\n      }\n    }\n  });\n  evalListen(root, "pixi");\n  var patched = /* @__PURE__ */ Symbol("patched");\n  function initLegacyUI() {\n    const searchInput = defineUI({\n      component: "SearchInput",\n      getValue: () => outline.query,\n      events: {\n        setValue: [\n          (value) => {\n            outline.query = value;\n            return 2;\n          },\n          { debounce: 300 }\n        ],\n        onclear() {\n          outline.query = "";\n          return 2;\n        }\n      }\n    });\n    let direction = "row";\n    return defineUI({\n      component: "Fragment",\n      children: [\n        {\n          component: "SplitPanels",\n          props: { direction: "column" },\n          sync(patch) {\n            patch.props = { direction };\n          },\n          events: {\n            onresize: [\n              (details) => {\n                const size = details;\n                direction = size.width > 500 ? "row" : "column";\n              },\n              { throttle: 100 }\n            ]\n          },\n          children: [\n            {\n              component: "SplitPanel",\n              props: { minWidth: 200, minHeight: 100, size: 2 },\n              children: [\n                refreshNode({\n                  interval: 1e3,\n                  children: [initSceneGraph([searchInput])],\n                  sync(patch) {\n                    if (outline.query.length === 0) {\n                      patch.props = { interval: 1e3 };\n                    } else {\n                      patch.props = { interval: 5e3 };\n                    }\n                  }\n                })\n              ]\n            },\n            {\n              component: "SplitPanel",\n              props: {\n                minWidth: 200,\n                minHeight: 200,\n                maxHeight: 680,\n                size: 3\n              },\n              children: [instructionsFallback(initPropertyTabs())]\n            }\n          ]\n        }\n      ]\n    });\n  }\n  function initSceneGraph(children) {\n    let previous$pixi = void 0;\n    return defineUI({\n      component: "PixiSceneGraph",\n      value: outline.tree(),\n      sync(patch) {\n        if (previous$pixi !== win.$pixi) {\n          if (win.$pixi) {\n            outline.expandParentsFor(win.$pixi);\n          }\n          previous$pixi = win.$pixi;\n        }\n        patch.value = outline.tree();\n      },\n      events: {\n        onexpand: (path) => outline.expand(path),\n        oncollapse: (path) => outline.collapse(path),\n        onactivate: (path) => {\n          outline.activate(path);\n          return 3;\n        },\n        onselectable: (path) => outline.selectable(path),\n        onunselectable: (path) => outline.unselectable(path),\n        onshow: (path) => {\n          outline.show(path);\n          return 3;\n        },\n        onhide: (path) => {\n          outline.hide(path);\n          return 3;\n        },\n        onlog: (path) => outline.log(path),\n        onmouseenter: (path) => outline.highlight(path),\n        onmouseleave: () => outline.highlight([])\n      },\n      children: [\n        ...children,\n        refreshNode({\n          interval: 100,\n          refresh() {\n            if (previous$pixi !== win.$pixi) {\n              return 3;\n            }\n            return 0;\n          }\n        })\n      ]\n    });\n  }\n  function initPropertyTabs() {\n    const appRef = { value: legacy.app() };\n    const allTabs = {\n      scene: { icon: "scene", label: "Scene Properties" },\n      object: { icon: "object", label: "Object Properties" },\n      text: { icon: "text", label: "Text Properties" }\n    };\n    let previous$pixi = win.$pixi;\n    let definitions;\n    let preferredTab = "text";\n    let availableTabs = [];\n    let activeTab;\n    function detect() {\n      definitions = properties.definitions();\n      const sceneVisible = appRef.value?.ticker || appRef.value?.renderer?.background?.color;\n      availableTabs = sceneVisible ? ["scene"] : [];\n      for (const key of Object.keys(allTabs)) {\n        const tab = key;\n        if (definitions[tab] && definitions[tab].length !== 0) {\n          availableTabs.push(tab);\n        }\n      }\n      if (availableTabs.includes(preferredTab)) {\n        activeTab = preferredTab;\n      } else {\n        activeTab = availableTabs.at(-1);\n      }\n    }\n    detect();\n    function enabledTabs() {\n      return Object.fromEntries(\n        Object.entries(allTabs).filter(\n          ([key]) => availableTabs.includes(key)\n        )\n      );\n    }\n    const expanded = {\n      ticker: true,\n      renderer: true,\n      transform: true,\n      transformOrigin: true,\n      skewDimensions: true,\n      visibility: true,\n      rendering: true,\n      interactive: true,\n      font: true,\n      alignment: true,\n      spacing: true,\n      wordWrap: true,\n      dropShadow: true,\n      stroke: true\n    };\n    function initPanel(tab) {\n      return {\n        props: { expanded },\n        getValue: () => {\n          const properties2 = {};\n          for (let i = 0; i < definitions[tab].length; i += 1) {\n            const { key, get } = definitions[tab][i];\n            properties2[key] = get();\n          }\n          return properties2;\n        },\n        setValue({ property, value }) {\n          const definition = definitions[tab].find(\n            (entry) => entry.key === property\n          );\n          if (definition) {\n            definition.set(value);\n          }\n        },\n        events: {\n          setExpanded(key, value) {\n            expanded[key] = value;\n          }\n        }\n      };\n    }\n    return refreshNode({\n      interval: 200,\n      children: [\n        {\n          component: "Tabs",\n          props: {\n            tabs: enabledTabs(),\n            active: activeTab\n          },\n          children: [\n            {\n              component: "Box",\n              props: { padding: 8, gap: 1 },\n              children: [\n                conditionalNode(\n                  () => activeTab,\n                  (activeTabRef) => switchNode(() => activeTabRef.value, {\n                    scene: () => pixiApplicationTab(appRef),\n                    object: () => defineUI({\n                      component: "PixiObjectProperties",\n                      ...initPanel("object")\n                    }),\n                    text: () => defineUI({\n                      component: "PixiTextProperties",\n                      ...initPanel("text")\n                    })\n                  })\n                )\n              ]\n            }\n          ],\n          events: {\n            setActive(tab) {\n              preferredTab = tab;\n              detect();\n            }\n          },\n          sync(patch) {\n            const nextApp = legacy.app();\n            if (previous$pixi === win.$pixi && appRef.value === nextApp) {\n              return;\n            }\n            appRef.value = nextApp;\n            previous$pixi = win.$pixi;\n            detect();\n            patch.props = {\n              tabs: enabledTabs(),\n              active: activeTab\n            };\n          }\n        }\n      ]\n    });\n  }\n  function initPatchEngine() {\n    if (session_default.get("pixi:patchRenderer")) {\n      return refreshNode({\n        interval: 250,\n        depth: 1,\n        children: [\n          {\n            component: "Warning",\n            props: { message: "Attempting to patch..." }\n          }\n        ],\n        sync() {\n          patchRenderEngine();\n        }\n      });\n    }\n    return defineUI({\n      component: "Fragment",\n      children: [\n        {\n          component: "Warning",\n          props: {\n            message: \'"Patch render engine" is available. This type of Devtools connection is less reliable\'\n          }\n        },\n        {\n          component: "Box",\n          props: { padding: 8 },\n          children: [\n            {\n              component: "Button",\n              props: { label: "Patch render engine" },\n              events: {\n                onclick() {\n                  patchRenderEngine();\n                  session_default.set("pixi:patchRenderer", true);\n                  return Infinity;\n                }\n              }\n            }\n          ]\n        },\n        {\n          component: "PixiInstructions",\n          events: {\n            copy(text) {\n              win.copy(text);\n            }\n          }\n        }\n      ]\n    });\n  }\n  function patchRenderEngine() {\n    if (win.PIXI) {\n      patchPixi(win.PIXI);\n    } else {\n      console.error("Patching failed");\n    }\n  }\n  function patchPixi(PIXI) {\n    if (PIXI[patched]) {\n      return;\n    }\n    PIXI[patched] = true;\n    for (const prop of ["Renderer", "WebGLRenderer"]) {\n      const Renderer = PIXI[prop];\n      if (Renderer) {\n        const { render } = Renderer.prototype;\n        Renderer.prototype.render = function pixiDevtoolsRender(...args) {\n          win.__PATCHED_RENDERER__ = this;\n          win.__PATCHED_RENDERER_STAGE__ = args[0];\n          return render.call(this, ...args);\n        };\n      }\n    }\n  }\n  function instructionsFallback(child) {\n    let timer;\n    let instructions = false;\n    return conditionalNode(\n      () => {\n        if (legacy.root()) {\n          instructions = false;\n          clearTimeout(timer);\n          timer = void 0;\n          return false;\n        }\n        if (!timer) {\n          timer = window.setTimeout(() => {\n            instructions = true;\n          }, 2e3);\n        }\n        return instructions;\n      },\n      {\n        component: "PixiInstructions",\n        events: {\n          copy(text) {\n            win.copy(text);\n          }\n        }\n      },\n      child\n    );\n  }\n})();\n';
    }
  });

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/version.js
  var PUBLIC_VERSION = "5";

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/disclose-version.js
  if (typeof window !== "undefined") {
    ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(PUBLIC_VERSION);
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/constants.js
  var EACH_ITEM_REACTIVE = 1;
  var EACH_INDEX_REACTIVE = 1 << 1;
  var EACH_IS_CONTROLLED = 1 << 2;
  var EACH_IS_ANIMATED = 1 << 3;
  var EACH_ITEM_IMMUTABLE = 1 << 4;
  var PROPS_IS_IMMUTABLE = 1;
  var PROPS_IS_RUNES = 1 << 1;
  var PROPS_IS_UPDATED = 1 << 2;
  var PROPS_IS_BINDABLE = 1 << 3;
  var PROPS_IS_LAZY_INITIAL = 1 << 4;
  var TRANSITION_IN = 1;
  var TRANSITION_OUT = 1 << 1;
  var TRANSITION_GLOBAL = 1 << 2;
  var TEMPLATE_FRAGMENT = 1;
  var TEMPLATE_USE_IMPORT_NODE = 1 << 1;
  var TEMPLATE_USE_SVG = 1 << 2;
  var TEMPLATE_USE_MATHML = 1 << 3;
  var HYDRATION_START = "[";
  var HYDRATION_START_ELSE = "[!";
  var HYDRATION_START_FAILED = "[?";
  var HYDRATION_END = "]";
  var HYDRATION_ERROR = {};
  var ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
  var ELEMENT_IS_INPUT = 1 << 2;
  var UNINITIALIZED = /* @__PURE__ */ Symbol();
  var FILENAME = /* @__PURE__ */ Symbol("filename");
  var NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";
  var NAMESPACE_SVG = "http://www.w3.org/2000/svg";
  var NAMESPACE_MATHML = "http://www.w3.org/1998/Math/MathML";

  // ../../node_modules/.pnpm/esm-env@1.2.2/node_modules/esm-env/true.js
  var true_default = true;

  // ../../node_modules/.pnpm/esm-env@1.2.2/node_modules/esm-env/dev-fallback.js
  var node_env = globalThis.process?.env?.NODE_ENV;
  var dev_fallback_default = node_env && !node_env.toLowerCase().startsWith("prod");

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/shared/utils.js
  var is_array = Array.isArray;
  var index_of = Array.prototype.indexOf;
  var includes = Array.prototype.includes;
  var array_from = Array.from;
  var object_keys = Object.keys;
  var define_property = Object.defineProperty;
  var get_descriptor = Object.getOwnPropertyDescriptor;
  var get_descriptors = Object.getOwnPropertyDescriptors;
  var object_prototype = Object.prototype;
  var array_prototype = Array.prototype;
  var get_prototype_of = Object.getPrototypeOf;
  var is_extensible = Object.isExtensible;
  function is_function(thing) {
    return typeof thing === "function";
  }
  var noop = () => {
  };
  function run_all(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]();
    }
  }
  function deferred() {
    var resolve;
    var reject;
    var promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  }
  function to_array(value, n) {
    if (Array.isArray(value)) {
      return value;
    }
    if (n === void 0 || !(Symbol.iterator in value)) {
      return Array.from(value);
    }
    const array = [];
    for (const element2 of value) {
      array.push(element2);
      if (array.length === n) break;
    }
    return array;
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/constants.js
  var DERIVED = 1 << 1;
  var EFFECT = 1 << 2;
  var RENDER_EFFECT = 1 << 3;
  var MANAGED_EFFECT = 1 << 24;
  var BLOCK_EFFECT = 1 << 4;
  var BRANCH_EFFECT = 1 << 5;
  var ROOT_EFFECT = 1 << 6;
  var BOUNDARY_EFFECT = 1 << 7;
  var CONNECTED = 1 << 9;
  var CLEAN = 1 << 10;
  var DIRTY = 1 << 11;
  var MAYBE_DIRTY = 1 << 12;
  var INERT = 1 << 13;
  var DESTROYED = 1 << 14;
  var REACTION_RAN = 1 << 15;
  var DESTROYING = 1 << 25;
  var EFFECT_TRANSPARENT = 1 << 16;
  var EAGER_EFFECT = 1 << 17;
  var HEAD_EFFECT = 1 << 18;
  var EFFECT_PRESERVED = 1 << 19;
  var USER_EFFECT = 1 << 20;
  var EFFECT_OFFSCREEN = 1 << 25;
  var WAS_MARKED = 1 << 16;
  var REACTION_IS_UPDATING = 1 << 21;
  var ASYNC = 1 << 22;
  var ERROR_VALUE = 1 << 23;
  var STATE_SYMBOL = /* @__PURE__ */ Symbol("$state");
  var LEGACY_PROPS = /* @__PURE__ */ Symbol("legacy props");
  var LOADING_ATTR_SYMBOL = /* @__PURE__ */ Symbol("");
  var PROXY_PATH_SYMBOL = /* @__PURE__ */ Symbol("proxy path");
  var HMR_ANCHOR = /* @__PURE__ */ Symbol("hmr anchor");
  var STALE_REACTION = new class StaleReactionError extends Error {
    name = "StaleReactionError";
    message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
  }();
  var IS_XHTML = (
    // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
    !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
  );
  var TEXT_NODE = 3;
  var COMMENT_NODE = 8;

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/shared/errors.js
  function invariant_violation(message) {
    if (dev_fallback_default) {
      const error = new Error(`invariant_violation
An invariant violation occurred, meaning Svelte's internal assumptions were flawed. This is a bug in Svelte, not your app \u2014 please open an issue at https://github.com/sveltejs/svelte, citing the following message: "${message}"
https://svelte.dev/e/invariant_violation`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/invariant_violation`);
    }
  }
  function lifecycle_outside_component(name) {
    if (dev_fallback_default) {
      const error = new Error(`lifecycle_outside_component
\`${name}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
    }
  }
  function missing_context() {
    if (dev_fallback_default) {
      const error = new Error(`missing_context
Context was not set in a parent component
https://svelte.dev/e/missing_context`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/missing_context`);
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/errors.js
  function async_derived_orphan() {
    if (dev_fallback_default) {
      const error = new Error(`async_derived_orphan
Cannot create a \`$derived(...)\` with an \`await\` expression outside of an effect tree
https://svelte.dev/e/async_derived_orphan`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/async_derived_orphan`);
    }
  }
  function bind_invalid_checkbox_value() {
    if (dev_fallback_default) {
      const error = new Error(`bind_invalid_checkbox_value
Using \`bind:value\` together with a checkbox input is not allowed. Use \`bind:checked\` instead
https://svelte.dev/e/bind_invalid_checkbox_value`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/bind_invalid_checkbox_value`);
    }
  }
  function derived_references_self() {
    if (dev_fallback_default) {
      const error = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/derived_references_self`);
    }
  }
  function each_key_duplicate(a, b, value) {
    if (dev_fallback_default) {
      const error = new Error(`each_key_duplicate
${value ? `Keyed each block has duplicate key \`${value}\` at indexes ${a} and ${b}` : `Keyed each block has duplicate key at indexes ${a} and ${b}`}
https://svelte.dev/e/each_key_duplicate`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/each_key_duplicate`);
    }
  }
  function each_key_volatile(index2, a, b) {
    if (dev_fallback_default) {
      const error = new Error(`each_key_volatile
Keyed each block has key that is not idempotent \u2014 the key for item at index ${index2} was \`${a}\` but is now \`${b}\`. Keys must be the same each time for a given item
https://svelte.dev/e/each_key_volatile`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/each_key_volatile`);
    }
  }
  function effect_in_teardown(rune) {
    if (dev_fallback_default) {
      const error = new Error(`effect_in_teardown
\`${rune}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/effect_in_teardown`);
    }
  }
  function effect_in_unowned_derived() {
    if (dev_fallback_default) {
      const error = new Error(`effect_in_unowned_derived
Effect cannot be created inside a \`$derived\` value that was not itself created inside an effect
https://svelte.dev/e/effect_in_unowned_derived`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
    }
  }
  function effect_orphan(rune) {
    if (dev_fallback_default) {
      const error = new Error(`effect_orphan
\`${rune}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/effect_orphan`);
    }
  }
  function effect_update_depth_exceeded() {
    if (dev_fallback_default) {
      const error = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
    }
  }
  function hydration_failed() {
    if (dev_fallback_default) {
      const error = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/hydration_failed`);
    }
  }
  function invalid_snippet() {
    if (dev_fallback_default) {
      const error = new Error(`invalid_snippet
Could not \`{@render}\` snippet due to the expression being \`null\` or \`undefined\`. Consider using optional chaining \`{@render snippet?.()}\`
https://svelte.dev/e/invalid_snippet`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/invalid_snippet`);
    }
  }
  function props_invalid_value(key2) {
    if (dev_fallback_default) {
      const error = new Error(`props_invalid_value
Cannot do \`bind:${key2}={undefined}\` when \`${key2}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/props_invalid_value`);
    }
  }
  function rune_outside_svelte(rune) {
    if (dev_fallback_default) {
      const error = new Error(`rune_outside_svelte
The \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/rune_outside_svelte`);
    }
  }
  function set_context_after_init() {
    if (dev_fallback_default) {
      const error = new Error(`set_context_after_init
\`setContext\` must be called when a component first initializes, not in a subsequent effect or after an \`await\` expression
https://svelte.dev/e/set_context_after_init`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/set_context_after_init`);
    }
  }
  function state_descriptors_fixed() {
    if (dev_fallback_default) {
      const error = new Error(`state_descriptors_fixed
Property descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.
https://svelte.dev/e/state_descriptors_fixed`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
    }
  }
  function state_prototype_fixed() {
    if (dev_fallback_default) {
      const error = new Error(`state_prototype_fixed
Cannot set prototype of \`$state\` object
https://svelte.dev/e/state_prototype_fixed`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
    }
  }
  function state_unsafe_mutation() {
    if (dev_fallback_default) {
      const error = new Error(`state_unsafe_mutation
Updating state inside \`$derived(...)\`, \`$inspect(...)\` or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`
https://svelte.dev/e/state_unsafe_mutation`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
    }
  }
  function svelte_boundary_reset_onerror() {
    if (dev_fallback_default) {
      const error = new Error(`svelte_boundary_reset_onerror
A \`<svelte:boundary>\` \`reset\` function cannot be called while an error is still being handled
https://svelte.dev/e/svelte_boundary_reset_onerror`);
      error.name = "Svelte error";
      throw error;
    } else {
      throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/warnings.js
  var bold = "font-weight: bold";
  var normal = "font-weight: normal";
  function await_reactivity_loss(name) {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${name}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/await_reactivity_loss`);
    }
  }
  function await_waterfall(name, location) {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] await_waterfall
%cAn async derived, \`${name}\` (${location}) was not read immediately after it resolved. This often indicates an unnecessary waterfall, which can slow down your app
https://svelte.dev/e/await_waterfall`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/await_waterfall`);
    }
  }
  function derived_inert() {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] derived_inert
%cReading a derived belonging to a now-destroyed effect may result in stale values
https://svelte.dev/e/derived_inert`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/derived_inert`);
    }
  }
  function hydration_attribute_changed(attribute, html2, value) {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${attribute}\` attribute on \`${html2}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/hydration_attribute_changed`);
    }
  }
  function hydration_mismatch(location) {
    if (dev_fallback_default) {
      console.warn(
        `%c[svelte] hydration_mismatch
%c${location ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location}` : "Hydration failed because the initial UI does not match what was rendered on the server"}
https://svelte.dev/e/hydration_mismatch`,
        bold,
        normal
      );
    } else {
      console.warn(`https://svelte.dev/e/hydration_mismatch`);
    }
  }
  function lifecycle_double_unmount() {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/lifecycle_double_unmount`);
    }
  }
  function state_proxy_equality_mismatch(operator) {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/state_proxy_equality_mismatch`);
    }
  }
  function state_proxy_unmount() {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/state_proxy_unmount`);
    }
  }
  function svelte_boundary_reset_noop() {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] svelte_boundary_reset_noop
%cA \`<svelte:boundary>\` \`reset\` function only resets the boundary the first time it is called
https://svelte.dev/e/svelte_boundary_reset_noop`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
    }
  }
  function transition_slide_display(value) {
    if (dev_fallback_default) {
      console.warn(`%c[svelte] transition_slide_display
%cThe \`slide\` transition does not work correctly for elements with \`display: ${value}\`
https://svelte.dev/e/transition_slide_display`, bold, normal);
    } else {
      console.warn(`https://svelte.dev/e/transition_slide_display`);
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/hydration.js
  var hydrating = false;
  function set_hydrating(value) {
    hydrating = value;
  }
  var hydrate_node;
  function set_hydrate_node(node) {
    if (node === null) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    return hydrate_node = node;
  }
  function hydrate_next() {
    return set_hydrate_node(get_next_sibling(hydrate_node));
  }
  function reset(node) {
    if (!hydrating) return;
    if (get_next_sibling(hydrate_node) !== null) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    hydrate_node = node;
  }
  function next(count = 1) {
    if (hydrating) {
      var i = count;
      var node = hydrate_node;
      while (i--) {
        node = /** @type {TemplateNode} */
        get_next_sibling(node);
      }
      hydrate_node = node;
    }
  }
  function skip_nodes(remove = true) {
    var depth = 0;
    var node = hydrate_node;
    while (true) {
      if (node.nodeType === COMMENT_NODE) {
        var data = (
          /** @type {Comment} */
          node.data
        );
        if (data === HYDRATION_END) {
          if (depth === 0) return node;
          depth -= 1;
        } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE || // "[1", "[2", etc. for if blocks
        data[0] === "[" && !isNaN(Number(data.slice(1)))) {
          depth += 1;
        }
      }
      var next2 = (
        /** @type {TemplateNode} */
        get_next_sibling(node)
      );
      if (remove) node.remove();
      node = next2;
    }
  }
  function read_hydration_instruction(node) {
    if (!node || node.nodeType !== COMMENT_NODE) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    return (
      /** @type {Comment} */
      node.data
    );
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/reactivity/equality.js
  function equals(value) {
    return value === this.v;
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
  }
  function safe_equals(value) {
    return !safe_not_equal(value, this.v);
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/flags/index.js
  var async_mode_flag = false;
  var legacy_mode_flag = false;
  var tracing_mode_flag = false;

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dev/tracing.js
  var tracing_expressions = null;
  function tag(source2, label2) {
    source2.label = label2;
    tag_proxy(source2.v, label2);
    return source2;
  }
  function tag_proxy(value, label2) {
    value?.[PROXY_PATH_SYMBOL]?.(label2);
    return value;
  }
  function label(value) {
    if (typeof value === "symbol") return `Symbol(${value.description})`;
    if (typeof value === "function") return "<function>";
    if (typeof value === "object" && value) return "<object>";
    return String(value);
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/shared/dev.js
  function get_error(label2) {
    const error = new Error();
    const stack2 = get_stack();
    if (stack2.length === 0) {
      return null;
    }
    stack2.unshift("\n");
    define_property(error, "stack", {
      value: stack2.join("\n")
    });
    define_property(error, "name", {
      value: label2
    });
    return (
      /** @type {Error & { stack: string }} */
      error
    );
  }
  function get_stack() {
    const limit = Error.stackTraceLimit;
    Error.stackTraceLimit = Infinity;
    const stack2 = new Error().stack;
    Error.stackTraceLimit = limit;
    if (!stack2) return [];
    const lines = stack2.split("\n");
    const new_lines = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const posixified = line.replaceAll("\\", "/");
      if (line.trim() === "Error") {
        continue;
      }
      if (line.includes("validate_each_keys")) {
        return [];
      }
      if (posixified.includes("svelte/src/internal") || posixified.includes("node_modules/.vite")) {
        continue;
      }
      new_lines.push(line);
    }
    return new_lines;
  }
  function invariant(condition, message) {
    if (!dev_fallback_default) {
      throw new Error("invariant(...) was not guarded by if (DEV)");
    }
    if (!condition) invariant_violation(message);
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/context.js
  var component_context = null;
  function set_component_context(context) {
    component_context = context;
  }
  var dev_stack = null;
  function set_dev_stack(stack2) {
    dev_stack = stack2;
  }
  var dev_current_component_function = null;
  function set_dev_current_component_function(fn) {
    dev_current_component_function = fn;
  }
  function createContext() {
    const key2 = {};
    return [
      () => {
        if (!hasContext(key2)) {
          missing_context();
        }
        return getContext(key2);
      },
      (context) => setContext(key2, context)
    ];
  }
  function getContext(key2) {
    const context_map = get_or_init_context_map("getContext");
    const result = (
      /** @type {T} */
      context_map.get(key2)
    );
    return result;
  }
  function setContext(key2, context) {
    const context_map = get_or_init_context_map("setContext");
    if (async_mode_flag) {
      var flags2 = (
        /** @type {Effect} */
        active_effect.f
      );
      var valid = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && // pop() runs synchronously, so this indicates we're setting context after an await
      !/** @type {ComponentContext} */
      component_context.i;
      if (!valid) {
        set_context_after_init();
      }
    }
    context_map.set(key2, context);
    return context;
  }
  function hasContext(key2) {
    const context_map = get_or_init_context_map("hasContext");
    return context_map.has(key2);
  }
  function push(props, runes = false, fn) {
    component_context = {
      p: component_context,
      i: false,
      c: null,
      e: null,
      s: props,
      x: null,
      r: (
        /** @type {Effect} */
        active_effect
      ),
      l: legacy_mode_flag && !runes ? { s: null, u: null, $: [] } : null
    };
    if (dev_fallback_default) {
      component_context.function = fn;
      dev_current_component_function = fn;
    }
  }
  function pop(component2) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    var effects = context.e;
    if (effects !== null) {
      context.e = null;
      for (var fn of effects) {
        create_user_effect(fn);
      }
    }
    if (component2 !== void 0) {
      context.x = component2;
    }
    context.i = true;
    component_context = context.p;
    if (dev_fallback_default) {
      dev_current_component_function = component_context?.function ?? null;
    }
    return component2 ?? /** @type {T} */
    {};
  }
  function is_runes() {
    return !legacy_mode_flag || component_context !== null && component_context.l === null;
  }
  function get_or_init_context_map(name) {
    if (component_context === null) {
      lifecycle_outside_component(name);
    }
    return component_context.c ??= new Map(get_parent_context(component_context) || void 0);
  }
  function get_parent_context(component_context2) {
    let parent = component_context2.p;
    while (parent !== null) {
      const context_map = parent.c;
      if (context_map !== null) {
        return context_map;
      }
      parent = parent.p;
    }
    return null;
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/task.js
  var micro_tasks = [];
  function run_micro_tasks() {
    var tasks = micro_tasks;
    micro_tasks = [];
    run_all(tasks);
  }
  function queue_micro_task(fn) {
    if (micro_tasks.length === 0 && !is_flushing_sync) {
      var tasks = micro_tasks;
      queueMicrotask(() => {
        if (tasks === micro_tasks) run_micro_tasks();
      });
    }
    micro_tasks.push(fn);
  }
  function flush_tasks() {
    while (micro_tasks.length > 0) {
      run_micro_tasks();
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/error-handling.js
  var adjustments = /* @__PURE__ */ new WeakMap();
  function handle_error(error) {
    var effect2 = active_effect;
    if (effect2 === null) {
      active_reaction.f |= ERROR_VALUE;
      return error;
    }
    if (dev_fallback_default && error instanceof Error && !adjustments.has(error)) {
      adjustments.set(error, get_adjustments(error, effect2));
    }
    if ((effect2.f & REACTION_RAN) === 0 && (effect2.f & EFFECT) === 0) {
      if (dev_fallback_default && !effect2.parent && error instanceof Error) {
        apply_adjustments(error);
      }
      throw error;
    }
    invoke_error_boundary(error, effect2);
  }
  function invoke_error_boundary(error, effect2) {
    while (effect2 !== null) {
      if ((effect2.f & BOUNDARY_EFFECT) !== 0) {
        if ((effect2.f & REACTION_RAN) === 0) {
          throw error;
        }
        try {
          effect2.b.error(error);
          return;
        } catch (e) {
          error = e;
        }
      }
      effect2 = effect2.parent;
    }
    if (dev_fallback_default && error instanceof Error) {
      apply_adjustments(error);
    }
    throw error;
  }
  function get_adjustments(error, effect2) {
    const message_descriptor = get_descriptor(error, "message");
    if (message_descriptor && !message_descriptor.configurable) return;
    var indent = is_firefox ? "  " : "	";
    var component_stack = `
${indent}in ${effect2.fn?.name || "<unknown>"}`;
    var context = effect2.ctx;
    while (context !== null) {
      component_stack += `
${indent}in ${context.function?.[FILENAME].split("/").pop()}`;
      context = context.p;
    }
    return {
      message: error.message + `
${component_stack}
`,
      stack: error.stack?.split("\n").filter((line) => !line.includes("svelte/src/internal")).join("\n")
    };
  }
  function apply_adjustments(error) {
    const adjusted = adjustments.get(error);
    if (adjusted) {
      define_property(error, "message", {
        value: adjusted.message
      });
      define_property(error, "stack", {
        value: adjusted.stack
      });
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/reactivity/status.js
  var STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
  function set_signal_status(signal, status) {
    signal.f = signal.f & STATUS_MASK | status;
  }
  function update_derived_status(derived2) {
    if ((derived2.f & CONNECTED) !== 0 || derived2.deps === null) {
      set_signal_status(derived2, CLEAN);
    } else {
      set_signal_status(derived2, MAYBE_DIRTY);
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/reactivity/utils.js
  function clear_marked(deps) {
    if (deps === null) return;
    for (const dep of deps) {
      if ((dep.f & DERIVED) === 0 || (dep.f & WAS_MARKED) === 0) {
        continue;
      }
      dep.f ^= WAS_MARKED;
      clear_marked(
        /** @type {Derived} */
        dep.deps
      );
    }
  }
  function defer_effect(effect2, dirty_effects, maybe_dirty_effects) {
    if ((effect2.f & DIRTY) !== 0) {
      dirty_effects.add(effect2);
    } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
      maybe_dirty_effects.add(effect2);
    }
    clear_marked(effect2.deps);
    set_signal_status(effect2, CLEAN);
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/reactivity/store.js
  var legacy_is_updating_store = false;
  var is_store_binding = false;
  function capture_store_binding(fn) {
    var previous_is_store_binding = is_store_binding;
    try {
      is_store_binding = false;
      return [fn(), is_store_binding];
    } finally {
      is_store_binding = previous_is_store_binding;
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/reactivity/batch.js
  var batches = /* @__PURE__ */ new Set();
  var current_batch = null;
  var previous_batch = null;
  var batch_values = null;
  var last_scheduled_effect = null;
  var is_flushing_sync = false;
  var is_processing = false;
  var collected_effects = null;
  var legacy_updates = null;
  var flush_count = 0;
  var source_stacks = dev_fallback_default ? /* @__PURE__ */ new Set() : null;
  var uid = 1;
  var Batch = class _Batch {
    id = uid++;
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    current = /* @__PURE__ */ new Map();
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    previous = /* @__PURE__ */ new Map();
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    #commit_callbacks = /* @__PURE__ */ new Set();
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    #discard_callbacks = /* @__PURE__ */ new Set();
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    #fork_commit_callbacks = /* @__PURE__ */ new Set();
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    #pending = /* @__PURE__ */ new Map();
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    #blocking_pending = /* @__PURE__ */ new Map();
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    #deferred = null;
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    #roots = [];
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    #new_effects = [];
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    #dirty_effects = /* @__PURE__ */ new Set();
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    #maybe_dirty_effects = /* @__PURE__ */ new Set();
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    #skipped_branches = /* @__PURE__ */ new Map();
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    #unskipped_branches = /* @__PURE__ */ new Set();
    is_fork = false;
    #decrement_queued = false;
    /** @type {Set<Batch>} */
    #blockers = /* @__PURE__ */ new Set();
    #is_deferred() {
      return this.is_fork || this.#blocking_pending.size > 0;
    }
    #is_blocked() {
      for (const batch of this.#blockers) {
        for (const effect2 of batch.#blocking_pending.keys()) {
          var skipped = false;
          var e = effect2;
          while (e.parent !== null) {
            if (this.#skipped_branches.has(e)) {
              skipped = true;
              break;
            }
            e = e.parent;
          }
          if (!skipped) {
            return true;
          }
        }
      }
      return false;
    }
    /**
     * Add an effect to the #skipped_branches map and reset its children
     * @param {Effect} effect
     */
    skip_effect(effect2) {
      if (!this.#skipped_branches.has(effect2)) {
        this.#skipped_branches.set(effect2, { d: [], m: [] });
      }
      this.#unskipped_branches.delete(effect2);
    }
    /**
     * Remove an effect from the #skipped_branches map and reschedule
     * any tracked dirty/maybe_dirty child effects
     * @param {Effect} effect
     * @param {(e: Effect) => void} callback
     */
    unskip_effect(effect2, callback = (e) => this.schedule(e)) {
      var tracked = this.#skipped_branches.get(effect2);
      if (tracked) {
        this.#skipped_branches.delete(effect2);
        for (var e of tracked.d) {
          set_signal_status(e, DIRTY);
          callback(e);
        }
        for (e of tracked.m) {
          set_signal_status(e, MAYBE_DIRTY);
          callback(e);
        }
      }
      this.#unskipped_branches.add(effect2);
    }
    #process() {
      if (flush_count++ > 1e3) {
        batches.delete(this);
        infinite_loop_guard();
      }
      if (!this.#is_deferred()) {
        for (const e of this.#dirty_effects) {
          this.#maybe_dirty_effects.delete(e);
          set_signal_status(e, DIRTY);
          this.schedule(e);
        }
        for (const e of this.#maybe_dirty_effects) {
          set_signal_status(e, MAYBE_DIRTY);
          this.schedule(e);
        }
      }
      const roots = this.#roots;
      this.#roots = [];
      this.apply();
      var effects = collected_effects = [];
      var render_effects = [];
      var updates = legacy_updates = [];
      for (const root32 of roots) {
        try {
          this.#traverse(root32, effects, render_effects);
        } catch (e) {
          reset_all(root32);
          throw e;
        }
      }
      current_batch = null;
      if (updates.length > 0) {
        var batch = _Batch.ensure();
        for (const e of updates) {
          batch.schedule(e);
        }
      }
      collected_effects = null;
      legacy_updates = null;
      if (this.#is_deferred() || this.#is_blocked()) {
        this.#defer_effects(render_effects);
        this.#defer_effects(effects);
        for (const [e, t] of this.#skipped_branches) {
          reset_branch(e, t);
        }
      } else {
        if (this.#pending.size === 0) {
          batches.delete(this);
        }
        this.#dirty_effects.clear();
        this.#maybe_dirty_effects.clear();
        for (const fn of this.#commit_callbacks) fn(this);
        this.#commit_callbacks.clear();
        previous_batch = this;
        flush_queued_effects(render_effects);
        flush_queued_effects(effects);
        previous_batch = null;
        this.#deferred?.resolve();
      }
      var next_batch = (
        /** @type {Batch | null} */
        /** @type {unknown} */
        current_batch
      );
      if (this.#roots.length > 0) {
        const batch2 = next_batch ??= this;
        batch2.#roots.push(...this.#roots.filter((r) => !batch2.#roots.includes(r)));
      }
      if (next_batch !== null) {
        batches.add(next_batch);
        if (dev_fallback_default) {
          for (const source2 of this.current.keys()) {
            source_stacks.add(source2);
          }
        }
        next_batch.#process();
      }
      if (async_mode_flag && !batches.has(this)) {
        this.#commit();
      }
    }
    /**
     * Traverse the effect tree, executing effects or stashing
     * them for later execution as appropriate
     * @param {Effect} root
     * @param {Effect[]} effects
     * @param {Effect[]} render_effects
     */
    #traverse(root32, effects, render_effects) {
      root32.f ^= CLEAN;
      var effect2 = root32.first;
      while (effect2 !== null) {
        var flags2 = effect2.f;
        var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
        var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
        var skip = is_skippable_branch || (flags2 & INERT) !== 0 || this.#skipped_branches.has(effect2);
        if (!skip && effect2.fn !== null) {
          if (is_branch) {
            effect2.f ^= CLEAN;
          } else if ((flags2 & EFFECT) !== 0) {
            effects.push(effect2);
          } else if (async_mode_flag && (flags2 & (RENDER_EFFECT | MANAGED_EFFECT)) !== 0) {
            render_effects.push(effect2);
          } else if (is_dirty(effect2)) {
            if ((flags2 & BLOCK_EFFECT) !== 0) this.#maybe_dirty_effects.add(effect2);
            update_effect(effect2);
          }
          var child2 = effect2.first;
          if (child2 !== null) {
            effect2 = child2;
            continue;
          }
        }
        while (effect2 !== null) {
          var next2 = effect2.next;
          if (next2 !== null) {
            effect2 = next2;
            break;
          }
          effect2 = effect2.parent;
        }
      }
    }
    /**
     * @param {Effect[]} effects
     */
    #defer_effects(effects) {
      for (var i = 0; i < effects.length; i += 1) {
        defer_effect(effects[i], this.#dirty_effects, this.#maybe_dirty_effects);
      }
    }
    /**
     * Associate a change to a given source with the current
     * batch, noting its previous and current values
     * @param {Value} source
     * @param {any} value
     * @param {boolean} [is_derived]
     */
    capture(source2, value, is_derived = false) {
      if (source2.v !== UNINITIALIZED && !this.previous.has(source2)) {
        this.previous.set(source2, source2.v);
      }
      if ((source2.f & ERROR_VALUE) === 0) {
        this.current.set(source2, [value, is_derived]);
        batch_values?.set(source2, value);
      }
      if (!this.is_fork) {
        source2.v = value;
      }
    }
    activate() {
      current_batch = this;
    }
    deactivate() {
      current_batch = null;
      batch_values = null;
    }
    flush() {
      var source_stacks2 = dev_fallback_default ? /* @__PURE__ */ new Set() : null;
      try {
        is_processing = true;
        current_batch = this;
        this.#process();
      } finally {
        flush_count = 0;
        last_scheduled_effect = null;
        collected_effects = null;
        legacy_updates = null;
        is_processing = false;
        current_batch = null;
        batch_values = null;
        old_values.clear();
        if (dev_fallback_default) {
          for (
            const source2 of
            /** @type {Set<Source>} */
            source_stacks2
          ) {
            source2.updated = null;
          }
        }
      }
    }
    discard() {
      for (const fn of this.#discard_callbacks) fn(this);
      this.#discard_callbacks.clear();
      this.#fork_commit_callbacks.clear();
      batches.delete(this);
    }
    /**
     * @param {Effect} effect
     */
    register_created_effect(effect2) {
      this.#new_effects.push(effect2);
    }
    #commit() {
      for (const batch of batches) {
        var is_earlier = batch.id < this.id;
        var sources = [];
        for (const [source3, [value, is_derived]] of this.current) {
          if (batch.current.has(source3)) {
            var batch_value = (
              /** @type {[any, boolean]} */
              batch.current.get(source3)[0]
            );
            if (is_earlier && value !== batch_value) {
              batch.current.set(source3, [value, is_derived]);
            } else {
              continue;
            }
          }
          sources.push(source3);
        }
        var others = [...batch.current.keys()].filter((s) => !this.current.has(s));
        if (others.length === 0) {
          if (is_earlier) {
            batch.discard();
          }
        } else if (sources.length > 0) {
          if (dev_fallback_default) {
            invariant(batch.#roots.length === 0, "Batch has scheduled roots");
          }
          if (is_earlier) {
            for (const unskipped of this.#unskipped_branches) {
              batch.unskip_effect(unskipped, (e) => {
                if ((e.f & (BLOCK_EFFECT | ASYNC)) !== 0) {
                  batch.schedule(e);
                } else {
                  batch.#defer_effects([e]);
                }
              });
            }
          }
          batch.activate();
          var marked = /* @__PURE__ */ new Set();
          var checked = /* @__PURE__ */ new Map();
          for (var source2 of sources) {
            mark_effects(source2, others, marked, checked);
          }
          checked = /* @__PURE__ */ new Map();
          var current_unequal = [...batch.current.keys()].filter(
            (c) => this.current.has(c) ? (
              /** @type {[any, boolean]} */
              this.current.get(c)[0] !== c
            ) : true
          );
          for (const effect2 of this.#new_effects) {
            if ((effect2.f & (DESTROYED | INERT | EAGER_EFFECT)) === 0 && depends_on(effect2, current_unequal, checked)) {
              if ((effect2.f & (ASYNC | BLOCK_EFFECT)) !== 0) {
                set_signal_status(effect2, DIRTY);
                batch.schedule(effect2);
              } else {
                batch.#dirty_effects.add(effect2);
              }
            }
          }
          if (batch.#roots.length > 0) {
            batch.apply();
            for (var root32 of batch.#roots) {
              batch.#traverse(root32, [], []);
            }
            batch.#roots = [];
          }
          batch.deactivate();
        }
      }
      for (const batch of batches) {
        if (batch.#blockers.has(this)) {
          batch.#blockers.delete(this);
          if (batch.#blockers.size === 0 && !batch.#is_deferred()) {
            batch.activate();
            batch.#process();
          }
        }
      }
    }
    /**
     * @param {boolean} blocking
     * @param {Effect} effect
     */
    increment(blocking, effect2) {
      let pending_count = this.#pending.get(effect2) ?? 0;
      this.#pending.set(effect2, pending_count + 1);
      if (blocking) {
        let blocking_pending_count = this.#blocking_pending.get(effect2) ?? 0;
        this.#blocking_pending.set(effect2, blocking_pending_count + 1);
      }
    }
    /**
     * @param {boolean} blocking
     * @param {Effect} effect
     * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
     */
    decrement(blocking, effect2, skip) {
      let pending_count = this.#pending.get(effect2) ?? 0;
      if (pending_count === 1) {
        this.#pending.delete(effect2);
      } else {
        this.#pending.set(effect2, pending_count - 1);
      }
      if (blocking) {
        let blocking_pending_count = this.#blocking_pending.get(effect2) ?? 0;
        if (blocking_pending_count === 1) {
          this.#blocking_pending.delete(effect2);
        } else {
          this.#blocking_pending.set(effect2, blocking_pending_count - 1);
        }
      }
      if (this.#decrement_queued || skip) return;
      this.#decrement_queued = true;
      queue_micro_task(() => {
        this.#decrement_queued = false;
        this.flush();
      });
    }
    /**
     * @param {Set<Effect>} dirty_effects
     * @param {Set<Effect>} maybe_dirty_effects
     */
    transfer_effects(dirty_effects, maybe_dirty_effects) {
      for (const e of dirty_effects) {
        this.#dirty_effects.add(e);
      }
      for (const e of maybe_dirty_effects) {
        this.#maybe_dirty_effects.add(e);
      }
      dirty_effects.clear();
      maybe_dirty_effects.clear();
    }
    /** @param {(batch: Batch) => void} fn */
    oncommit(fn) {
      this.#commit_callbacks.add(fn);
    }
    /** @param {(batch: Batch) => void} fn */
    ondiscard(fn) {
      this.#discard_callbacks.add(fn);
    }
    /** @param {(batch: Batch) => void} fn */
    on_fork_commit(fn) {
      this.#fork_commit_callbacks.add(fn);
    }
    run_fork_commit_callbacks() {
      for (const fn of this.#fork_commit_callbacks) fn(this);
      this.#fork_commit_callbacks.clear();
    }
    settled() {
      return (this.#deferred ??= deferred()).promise;
    }
    static ensure() {
      if (current_batch === null) {
        const batch = current_batch = new _Batch();
        if (!is_processing) {
          batches.add(current_batch);
          if (!is_flushing_sync) {
            queue_micro_task(() => {
              if (current_batch !== batch) {
                return;
              }
              batch.flush();
            });
          }
        }
      }
      return current_batch;
    }
    apply() {
      if (!async_mode_flag || !this.is_fork && batches.size === 1) {
        batch_values = null;
        return;
      }
      batch_values = /* @__PURE__ */ new Map();
      for (const [source2, [value]] of this.current) {
        batch_values.set(source2, value);
      }
      for (const batch of batches) {
        if (batch === this || batch.is_fork) continue;
        var intersects = false;
        var differs = false;
        if (batch.id < this.id) {
          for (const [source2, [, is_derived]] of batch.current) {
            if (is_derived) continue;
            intersects ||= this.current.has(source2);
            differs ||= !this.current.has(source2);
          }
        }
        if (intersects && differs) {
          this.#blockers.add(batch);
        } else {
          for (const [source2, previous] of batch.previous) {
            if (!batch_values.has(source2)) {
              batch_values.set(source2, previous);
            }
          }
        }
      }
    }
    /**
     *
     * @param {Effect} effect
     */
    schedule(effect2) {
      last_scheduled_effect = effect2;
      if (effect2.b?.is_pending && (effect2.f & (EFFECT | RENDER_EFFECT | MANAGED_EFFECT)) !== 0 && (effect2.f & REACTION_RAN) === 0) {
        effect2.b.defer_effect(effect2);
        return;
      }
      var e = effect2;
      while (e.parent !== null) {
        e = e.parent;
        var flags2 = e.f;
        if (collected_effects !== null && e === active_effect) {
          if (async_mode_flag) return;
          if ((active_reaction === null || (active_reaction.f & DERIVED) === 0) && !legacy_is_updating_store) {
            return;
          }
        }
        if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
          if ((flags2 & CLEAN) === 0) {
            return;
          }
          e.f ^= CLEAN;
        }
      }
      this.#roots.push(e);
    }
  };
  function flushSync(fn) {
    var was_flushing_sync = is_flushing_sync;
    is_flushing_sync = true;
    try {
      var result;
      if (fn) {
        if (current_batch !== null && !current_batch.is_fork) {
          current_batch.flush();
        }
        result = fn();
      }
      while (true) {
        flush_tasks();
        if (current_batch === null) {
          return (
            /** @type {T} */
            result
          );
        }
        current_batch.flush();
      }
    } finally {
      is_flushing_sync = was_flushing_sync;
    }
  }
  function infinite_loop_guard() {
    if (dev_fallback_default) {
      var updates = /* @__PURE__ */ new Map();
      for (
        const source2 of
        /** @type {Batch} */
        current_batch.current.keys()
      ) {
        for (const [stack2, update2] of source2.updated ?? []) {
          var entry = updates.get(stack2);
          if (!entry) {
            entry = { error: update2.error, count: 0 };
            updates.set(stack2, entry);
          }
          entry.count += update2.count;
        }
      }
      for (const update2 of updates.values()) {
        if (update2.error) {
          console.error(update2.error);
        }
      }
    }
    try {
      effect_update_depth_exceeded();
    } catch (error) {
      if (dev_fallback_default) {
        define_property(error, "stack", { value: "" });
      }
      invoke_error_boundary(error, last_scheduled_effect);
    }
  }
  var eager_block_effects = null;
  function flush_queued_effects(effects) {
    var length = effects.length;
    if (length === 0) return;
    var i = 0;
    while (i < length) {
      var effect2 = effects[i++];
      if ((effect2.f & (DESTROYED | INERT)) === 0 && is_dirty(effect2)) {
        eager_block_effects = /* @__PURE__ */ new Set();
        update_effect(effect2);
        if (effect2.deps === null && effect2.first === null && effect2.nodes === null && effect2.teardown === null && effect2.ac === null) {
          unlink_effect(effect2);
        }
        if (eager_block_effects?.size > 0) {
          old_values.clear();
          for (const e of eager_block_effects) {
            if ((e.f & (DESTROYED | INERT)) !== 0) continue;
            const ordered_effects = [e];
            let ancestor = e.parent;
            while (ancestor !== null) {
              if (eager_block_effects.has(ancestor)) {
                eager_block_effects.delete(ancestor);
                ordered_effects.push(ancestor);
              }
              ancestor = ancestor.parent;
            }
            for (let j = ordered_effects.length - 1; j >= 0; j--) {
              const e2 = ordered_effects[j];
              if ((e2.f & (DESTROYED | INERT)) !== 0) continue;
              update_effect(e2);
            }
          }
          eager_block_effects.clear();
        }
      }
    }
    eager_block_effects = null;
  }
  function mark_effects(value, sources, marked, checked) {
    if (marked.has(value)) return;
    marked.add(value);
    if (value.reactions !== null) {
      for (const reaction of value.reactions) {
        const flags2 = reaction.f;
        if ((flags2 & DERIVED) !== 0) {
          mark_effects(
            /** @type {Derived} */
            reaction,
            sources,
            marked,
            checked
          );
        } else if ((flags2 & (ASYNC | BLOCK_EFFECT)) !== 0 && (flags2 & DIRTY) === 0 && depends_on(reaction, sources, checked)) {
          set_signal_status(reaction, DIRTY);
          schedule_effect(
            /** @type {Effect} */
            reaction
          );
        }
      }
    }
  }
  function depends_on(reaction, sources, checked) {
    const depends = checked.get(reaction);
    if (depends !== void 0) return depends;
    if (reaction.deps !== null) {
      for (const dep of reaction.deps) {
        if (includes.call(sources, dep)) {
          return true;
        }
        if ((dep.f & DERIVED) !== 0 && depends_on(
          /** @type {Derived} */
          dep,
          sources,
          checked
        )) {
          checked.set(
            /** @type {Derived} */
            dep,
            true
          );
          return true;
        }
      }
    }
    checked.set(reaction, false);
    return false;
  }
  function schedule_effect(effect2) {
    current_batch.schedule(effect2);
  }
  function reset_branch(effect2, tracked) {
    if ((effect2.f & BRANCH_EFFECT) !== 0 && (effect2.f & CLEAN) !== 0) {
      return;
    }
    if ((effect2.f & DIRTY) !== 0) {
      tracked.d.push(effect2);
    } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
      tracked.m.push(effect2);
    }
    set_signal_status(effect2, CLEAN);
    var e = effect2.first;
    while (e !== null) {
      reset_branch(e, tracked);
      e = e.next;
    }
  }
  function reset_all(effect2) {
    set_signal_status(effect2, CLEAN);
    var e = effect2.first;
    while (e !== null) {
      reset_all(e);
      e = e.next;
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/reactivity/create-subscriber.js
  function createSubscriber(start) {
    let subscribers = 0;
    let version = source(0);
    let stop;
    if (dev_fallback_default) {
      tag(version, "createSubscriber version");
    }
    return () => {
      if (effect_tracking()) {
        get2(version);
        render_effect(() => {
          if (subscribers === 0) {
            stop = untrack(() => start(() => increment(version)));
          }
          subscribers += 1;
          return () => {
            queue_micro_task(() => {
              subscribers -= 1;
              if (subscribers === 0) {
                stop?.();
                stop = void 0;
                increment(version);
              }
            });
          };
        });
      }
    };
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/blocks/boundary.js
  var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
  function boundary(node, props, children, transform_error) {
    new Boundary(node, props, children, transform_error);
  }
  var Boundary = class {
    /** @type {Boundary | null} */
    parent;
    is_pending = false;
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    transform_error;
    /** @type {TemplateNode} */
    #anchor;
    /** @type {TemplateNode | null} */
    #hydrate_open = hydrating ? hydrate_node : null;
    /** @type {BoundaryProps} */
    #props;
    /** @type {((anchor: Node) => void)} */
    #children;
    /** @type {Effect} */
    #effect;
    /** @type {Effect | null} */
    #main_effect = null;
    /** @type {Effect | null} */
    #pending_effect = null;
    /** @type {Effect | null} */
    #failed_effect = null;
    /** @type {DocumentFragment | null} */
    #offscreen_fragment = null;
    #local_pending_count = 0;
    #pending_count = 0;
    #pending_count_update_queued = false;
    /** @type {Set<Effect>} */
    #dirty_effects = /* @__PURE__ */ new Set();
    /** @type {Set<Effect>} */
    #maybe_dirty_effects = /* @__PURE__ */ new Set();
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    #effect_pending = null;
    #effect_pending_subscriber = createSubscriber(() => {
      this.#effect_pending = source(this.#local_pending_count);
      if (dev_fallback_default) {
        tag(this.#effect_pending, "$effect.pending()");
      }
      return () => {
        this.#effect_pending = null;
      };
    });
    /**
     * @param {TemplateNode} node
     * @param {BoundaryProps} props
     * @param {((anchor: Node) => void)} children
     * @param {((error: unknown) => unknown) | undefined} [transform_error]
     */
    constructor(node, props, children, transform_error) {
      this.#anchor = node;
      this.#props = props;
      this.#children = (anchor) => {
        var effect2 = (
          /** @type {Effect} */
          active_effect
        );
        effect2.b = this;
        effect2.f |= BOUNDARY_EFFECT;
        children(anchor);
      };
      this.parent = /** @type {Effect} */
      active_effect.b;
      this.transform_error = transform_error ?? this.parent?.transform_error ?? ((e) => e);
      this.#effect = block(() => {
        if (hydrating) {
          const comment2 = (
            /** @type {Comment} */
            this.#hydrate_open
          );
          hydrate_next();
          const server_rendered_pending = comment2.data === HYDRATION_START_ELSE;
          const server_rendered_failed = comment2.data.startsWith(HYDRATION_START_FAILED);
          if (server_rendered_failed) {
            const serialized_error = JSON.parse(comment2.data.slice(HYDRATION_START_FAILED.length));
            this.#hydrate_failed_content(serialized_error);
          } else if (server_rendered_pending) {
            this.#hydrate_pending_content();
          } else {
            this.#hydrate_resolved_content();
          }
        } else {
          this.#render();
        }
      }, flags);
      if (hydrating) {
        this.#anchor = hydrate_node;
      }
    }
    #hydrate_resolved_content() {
      try {
        this.#main_effect = branch(() => this.#children(this.#anchor));
      } catch (error) {
        this.error(error);
      }
    }
    /**
     * @param {unknown} error The deserialized error from the server's hydration comment
     */
    #hydrate_failed_content(error) {
      const failed = this.#props.failed;
      if (!failed) return;
      this.#failed_effect = branch(() => {
        failed(
          this.#anchor,
          () => error,
          () => () => {
          }
        );
      });
    }
    #hydrate_pending_content() {
      const pending2 = this.#props.pending;
      if (!pending2) return;
      this.is_pending = true;
      this.#pending_effect = branch(() => pending2(this.#anchor));
      queue_micro_task(() => {
        var fragment = this.#offscreen_fragment = document.createDocumentFragment();
        var anchor = create_text();
        fragment.append(anchor);
        this.#main_effect = this.#run(() => {
          return branch(() => this.#children(anchor));
        });
        if (this.#pending_count === 0) {
          this.#anchor.before(fragment);
          this.#offscreen_fragment = null;
          pause_effect(
            /** @type {Effect} */
            this.#pending_effect,
            () => {
              this.#pending_effect = null;
            }
          );
          this.#resolve(
            /** @type {Batch} */
            current_batch
          );
        }
      });
    }
    #render() {
      try {
        this.is_pending = this.has_pending_snippet();
        this.#pending_count = 0;
        this.#local_pending_count = 0;
        this.#main_effect = branch(() => {
          this.#children(this.#anchor);
        });
        if (this.#pending_count > 0) {
          var fragment = this.#offscreen_fragment = document.createDocumentFragment();
          move_effect(this.#main_effect, fragment);
          const pending2 = (
            /** @type {(anchor: Node) => void} */
            this.#props.pending
          );
          this.#pending_effect = branch(() => pending2(this.#anchor));
        } else {
          this.#resolve(
            /** @type {Batch} */
            current_batch
          );
        }
      } catch (error) {
        this.error(error);
      }
    }
    /**
     * @param {Batch} batch
     */
    #resolve(batch) {
      this.is_pending = false;
      batch.transfer_effects(this.#dirty_effects, this.#maybe_dirty_effects);
    }
    /**
     * Defer an effect inside a pending boundary until the boundary resolves
     * @param {Effect} effect
     */
    defer_effect(effect2) {
      defer_effect(effect2, this.#dirty_effects, this.#maybe_dirty_effects);
    }
    /**
     * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
     * @returns {boolean}
     */
    is_rendered() {
      return !this.is_pending && (!this.parent || this.parent.is_rendered());
    }
    has_pending_snippet() {
      return !!this.#props.pending;
    }
    /**
     * @template T
     * @param {() => T} fn
     */
    #run(fn) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      var previous_ctx = component_context;
      set_active_effect(this.#effect);
      set_active_reaction(this.#effect);
      set_component_context(this.#effect.ctx);
      try {
        Batch.ensure();
        return fn();
      } catch (e) {
        handle_error(e);
        return null;
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
        set_component_context(previous_ctx);
      }
    }
    /**
     * Updates the pending count associated with the currently visible pending snippet,
     * if any, such that we can replace the snippet with content once work is done
     * @param {1 | -1} d
     * @param {Batch} batch
     */
    #update_pending_count(d, batch) {
      if (!this.has_pending_snippet()) {
        if (this.parent) {
          this.parent.#update_pending_count(d, batch);
        }
        return;
      }
      this.#pending_count += d;
      if (this.#pending_count === 0) {
        this.#resolve(batch);
        if (this.#pending_effect) {
          pause_effect(this.#pending_effect, () => {
            this.#pending_effect = null;
          });
        }
        if (this.#offscreen_fragment) {
          this.#anchor.before(this.#offscreen_fragment);
          this.#offscreen_fragment = null;
        }
      }
    }
    /**
     * Update the source that powers `$effect.pending()` inside this boundary,
     * and controls when the current `pending` snippet (if any) is removed.
     * Do not call from inside the class
     * @param {1 | -1} d
     * @param {Batch} batch
     */
    update_pending_count(d, batch) {
      this.#update_pending_count(d, batch);
      this.#local_pending_count += d;
      if (!this.#effect_pending || this.#pending_count_update_queued) return;
      this.#pending_count_update_queued = true;
      queue_micro_task(() => {
        this.#pending_count_update_queued = false;
        if (this.#effect_pending) {
          internal_set(this.#effect_pending, this.#local_pending_count);
        }
      });
    }
    get_effect_pending() {
      this.#effect_pending_subscriber();
      return get2(
        /** @type {Source<number>} */
        this.#effect_pending
      );
    }
    /** @param {unknown} error */
    error(error) {
      if (!this.#props.onerror && !this.#props.failed) {
        throw error;
      }
      if (current_batch?.is_fork) {
        if (this.#main_effect) current_batch.skip_effect(this.#main_effect);
        if (this.#pending_effect) current_batch.skip_effect(this.#pending_effect);
        if (this.#failed_effect) current_batch.skip_effect(this.#failed_effect);
        current_batch.on_fork_commit(() => {
          this.#handle_error(error);
        });
      } else {
        this.#handle_error(error);
      }
    }
    /**
     * @param {unknown} error
     */
    #handle_error(error) {
      if (this.#main_effect) {
        destroy_effect(this.#main_effect);
        this.#main_effect = null;
      }
      if (this.#pending_effect) {
        destroy_effect(this.#pending_effect);
        this.#pending_effect = null;
      }
      if (this.#failed_effect) {
        destroy_effect(this.#failed_effect);
        this.#failed_effect = null;
      }
      if (hydrating) {
        set_hydrate_node(
          /** @type {TemplateNode} */
          this.#hydrate_open
        );
        next();
        set_hydrate_node(skip_nodes());
      }
      var onerror = this.#props.onerror;
      let failed = this.#props.failed;
      var did_reset = false;
      var calling_on_error = false;
      const reset2 = () => {
        if (did_reset) {
          svelte_boundary_reset_noop();
          return;
        }
        did_reset = true;
        if (calling_on_error) {
          svelte_boundary_reset_onerror();
        }
        if (this.#failed_effect !== null) {
          pause_effect(this.#failed_effect, () => {
            this.#failed_effect = null;
          });
        }
        this.#run(() => {
          this.#render();
        });
      };
      const handle_error_result = (transformed_error) => {
        try {
          calling_on_error = true;
          onerror?.(transformed_error, reset2);
          calling_on_error = false;
        } catch (error2) {
          invoke_error_boundary(error2, this.#effect && this.#effect.parent);
        }
        if (failed) {
          this.#failed_effect = this.#run(() => {
            try {
              return branch(() => {
                var effect2 = (
                  /** @type {Effect} */
                  active_effect
                );
                effect2.b = this;
                effect2.f |= BOUNDARY_EFFECT;
                failed(
                  this.#anchor,
                  () => transformed_error,
                  () => reset2
                );
              });
            } catch (error2) {
              invoke_error_boundary(
                error2,
                /** @type {Effect} */
                this.#effect.parent
              );
              return null;
            }
          });
        }
      };
      queue_micro_task(() => {
        var result;
        try {
          result = this.transform_error(error);
        } catch (e) {
          invoke_error_boundary(e, this.#effect && this.#effect.parent);
          return;
        }
        if (result !== null && typeof result === "object" && typeof /** @type {any} */
        result.then === "function") {
          result.then(
            handle_error_result,
            /** @param {unknown} e */
            (e) => invoke_error_boundary(e, this.#effect && this.#effect.parent)
          );
        } else {
          handle_error_result(result);
        }
      });
    }
  };

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/reactivity/async.js
  function flatten(blockers, sync, async2, fn) {
    const d = is_runes() ? derived : derived_safe_equal;
    var pending2 = blockers.filter((b) => !b.settled);
    if (async2.length === 0 && pending2.length === 0) {
      fn(sync.map(d));
      return;
    }
    var parent = (
      /** @type {Effect} */
      active_effect
    );
    var restore = capture();
    var blocker_promise = pending2.length === 1 ? pending2[0].promise : pending2.length > 1 ? Promise.all(pending2.map((b) => b.promise)) : null;
    function finish(values) {
      restore();
      try {
        fn(values);
      } catch (error) {
        if ((parent.f & DESTROYED) === 0) {
          invoke_error_boundary(error, parent);
        }
      }
      unset_context();
    }
    if (async2.length === 0) {
      blocker_promise.then(() => finish(sync.map(d)));
      return;
    }
    var decrement_pending = increment_pending();
    function run3() {
      Promise.all(async2.map((expression) => async_derived(expression))).then((result) => finish([...sync.map(d), ...result])).catch((error) => invoke_error_boundary(error, parent)).finally(() => decrement_pending());
    }
    if (blocker_promise) {
      blocker_promise.then(() => {
        restore();
        run3();
        unset_context();
      });
    } else {
      run3();
    }
  }
  function capture() {
    var previous_effect = (
      /** @type {Effect} */
      active_effect
    );
    var previous_reaction = active_reaction;
    var previous_component_context = component_context;
    var previous_batch2 = (
      /** @type {Batch} */
      current_batch
    );
    if (dev_fallback_default) {
      var previous_dev_stack = dev_stack;
    }
    return function restore(activate_batch = true) {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_component_context);
      if (activate_batch && (previous_effect.f & DESTROYED) === 0) {
        previous_batch2?.activate();
        previous_batch2?.apply();
      }
      if (dev_fallback_default) {
        set_reactivity_loss_tracker(null);
        set_dev_stack(previous_dev_stack);
      }
    };
  }
  function unset_context(deactivate_batch = true) {
    set_active_effect(null);
    set_active_reaction(null);
    set_component_context(null);
    if (deactivate_batch) current_batch?.deactivate();
    if (dev_fallback_default) {
      set_reactivity_loss_tracker(null);
      set_dev_stack(null);
    }
  }
  function increment_pending() {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    var boundary2 = (
      /** @type {Boundary} */
      effect2.b
    );
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var blocking = boundary2.is_rendered();
    boundary2.update_pending_count(1, batch);
    batch.increment(blocking, effect2);
    return (skip = false) => {
      boundary2.update_pending_count(-1, batch);
      batch.decrement(blocking, effect2, skip);
    };
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/reactivity/deriveds.js
  var reactivity_loss_tracker = null;
  function set_reactivity_loss_tracker(v) {
    reactivity_loss_tracker = v;
  }
  var recent_async_deriveds = /* @__PURE__ */ new Set();
  // @__NO_SIDE_EFFECTS__
  function derived(fn) {
    var flags2 = DERIVED | DIRTY;
    if (active_effect !== null) {
      active_effect.f |= EFFECT_PRESERVED;
    }
    const signal = {
      ctx: component_context,
      deps: null,
      effects: null,
      equals,
      f: flags2,
      fn,
      reactions: null,
      rv: 0,
      v: (
        /** @type {V} */
        UNINITIALIZED
      ),
      wv: 0,
      parent: active_effect,
      ac: null
    };
    if (dev_fallback_default && tracing_mode_flag) {
      signal.created = get_error("created at");
    }
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function async_derived(fn, label2, location) {
    let parent = (
      /** @type {Effect | null} */
      active_effect
    );
    if (parent === null) {
      async_derived_orphan();
    }
    var promise = (
      /** @type {Promise<V>} */
      /** @type {unknown} */
      void 0
    );
    var signal = source(
      /** @type {V} */
      UNINITIALIZED
    );
    if (dev_fallback_default) signal.label = label2;
    var should_suspend = !active_reaction;
    var deferreds = /* @__PURE__ */ new Map();
    async_effect(() => {
      var effect2 = (
        /** @type {Effect} */
        active_effect
      );
      if (dev_fallback_default) {
        reactivity_loss_tracker = { effect: effect2, effect_deps: /* @__PURE__ */ new Set(), warned: false };
      }
      var d = deferred();
      promise = d.promise;
      try {
        Promise.resolve(fn()).then(d.resolve, d.reject).finally(unset_context);
      } catch (error) {
        d.reject(error);
        unset_context();
      }
      if (dev_fallback_default) {
        if (reactivity_loss_tracker) {
          if (effect2.deps !== null) {
            for (let i = 0; i < skipped_deps; i += 1) {
              reactivity_loss_tracker.effect_deps.add(effect2.deps[i]);
            }
          }
          if (new_deps !== null) {
            for (let i = 0; i < new_deps.length; i += 1) {
              reactivity_loss_tracker.effect_deps.add(new_deps[i]);
            }
          }
        }
        reactivity_loss_tracker = null;
      }
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      if (should_suspend) {
        if ((effect2.f & REACTION_RAN) !== 0) {
          var decrement_pending = increment_pending();
        }
        if (
          /** @type {Boundary} */
          parent.b.is_rendered()
        ) {
          deferreds.get(batch)?.reject(STALE_REACTION);
          deferreds.delete(batch);
        } else {
          for (const d2 of deferreds.values()) {
            d2.reject(STALE_REACTION);
          }
          deferreds.clear();
        }
        deferreds.set(batch, d);
      }
      const handler = (value, error = void 0) => {
        if (dev_fallback_default) {
          reactivity_loss_tracker = null;
        }
        if (decrement_pending) {
          var skip = error === STALE_REACTION;
          decrement_pending(skip);
        }
        if (error === STALE_REACTION || (effect2.f & DESTROYED) !== 0) {
          return;
        }
        batch.activate();
        if (error) {
          signal.f |= ERROR_VALUE;
          internal_set(signal, error);
        } else {
          if ((signal.f & ERROR_VALUE) !== 0) {
            signal.f ^= ERROR_VALUE;
          }
          internal_set(signal, value);
          for (const [b, d2] of deferreds) {
            deferreds.delete(b);
            if (b === batch) break;
            d2.reject(STALE_REACTION);
          }
          if (dev_fallback_default && location !== void 0) {
            recent_async_deriveds.add(signal);
            setTimeout(() => {
              if (recent_async_deriveds.has(signal)) {
                await_waterfall(
                  /** @type {string} */
                  signal.label,
                  location
                );
                recent_async_deriveds.delete(signal);
              }
            });
          }
        }
        batch.deactivate();
      };
      d.promise.then(handler, (e) => handler(null, e || "unknown"));
    });
    teardown(() => {
      for (const d of deferreds.values()) {
        d.reject(STALE_REACTION);
      }
    });
    if (dev_fallback_default) {
      signal.f |= ASYNC;
    }
    return new Promise((fulfil) => {
      function next2(p) {
        function go() {
          if (p === promise) {
            fulfil(signal);
          } else {
            next2(promise);
          }
        }
        p.then(go, go);
      }
      next2(promise);
    });
  }
  // @__NO_SIDE_EFFECTS__
  function user_derived(fn) {
    const d = /* @__PURE__ */ derived(fn);
    if (!async_mode_flag) push_reaction_value(d);
    return d;
  }
  // @__NO_SIDE_EFFECTS__
  function derived_safe_equal(fn) {
    const signal = /* @__PURE__ */ derived(fn);
    signal.equals = safe_equals;
    return signal;
  }
  function destroy_derived_effects(derived2) {
    var effects = derived2.effects;
    if (effects !== null) {
      derived2.effects = null;
      for (var i = 0; i < effects.length; i += 1) {
        destroy_effect(
          /** @type {Effect} */
          effects[i]
        );
      }
    }
  }
  var stack = [];
  function execute_derived(derived2) {
    var value;
    var prev_active_effect = active_effect;
    var parent = derived2.parent;
    if (!is_destroying_effect && parent !== null && (parent.f & (DESTROYED | INERT)) !== 0) {
      derived_inert();
      return derived2.v;
    }
    set_active_effect(parent);
    if (dev_fallback_default) {
      let prev_eager_effects = eager_effects;
      set_eager_effects(/* @__PURE__ */ new Set());
      try {
        if (includes.call(stack, derived2)) {
          derived_references_self();
        }
        stack.push(derived2);
        derived2.f &= ~WAS_MARKED;
        destroy_derived_effects(derived2);
        value = update_reaction(derived2);
      } finally {
        set_active_effect(prev_active_effect);
        set_eager_effects(prev_eager_effects);
        stack.pop();
      }
    } else {
      try {
        derived2.f &= ~WAS_MARKED;
        destroy_derived_effects(derived2);
        value = update_reaction(derived2);
      } finally {
        set_active_effect(prev_active_effect);
      }
    }
    return value;
  }
  function update_derived(derived2) {
    var value = execute_derived(derived2);
    if (!derived2.equals(value)) {
      derived2.wv = increment_write_version();
      if (!current_batch?.is_fork || derived2.deps === null) {
        if (current_batch !== null) {
          current_batch.capture(derived2, value, true);
        } else {
          derived2.v = value;
        }
        if (derived2.deps === null) {
          set_signal_status(derived2, CLEAN);
          return;
        }
      }
    }
    if (is_destroying_effect) {
      return;
    }
    if (batch_values !== null) {
      if (effect_tracking() || current_batch?.is_fork) {
        batch_values.set(derived2, value);
      }
    } else {
      update_derived_status(derived2);
    }
  }
  function freeze_derived_effects(derived2) {
    if (derived2.effects === null) return;
    for (const e of derived2.effects) {
      if (e.teardown || e.ac) {
        e.teardown?.();
        e.ac?.abort(STALE_REACTION);
        e.teardown = noop;
        e.ac = null;
        remove_reactions(e, 0);
        destroy_effect_children(e);
      }
    }
  }
  function unfreeze_derived_effects(derived2) {
    if (derived2.effects === null) return;
    for (const e of derived2.effects) {
      if (e.teardown) {
        update_effect(e);
      }
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/reactivity/sources.js
  var eager_effects = /* @__PURE__ */ new Set();
  var old_values = /* @__PURE__ */ new Map();
  function set_eager_effects(v) {
    eager_effects = v;
  }
  var eager_effects_deferred = false;
  function set_eager_effects_deferred() {
    eager_effects_deferred = true;
  }
  function source(v, stack2) {
    var signal = {
      f: 0,
      // TODO ideally we could skip this altogether, but it causes type errors
      v,
      reactions: null,
      equals,
      rv: 0,
      wv: 0
    };
    if (dev_fallback_default && tracing_mode_flag) {
      signal.created = stack2 ?? get_error("created at");
      signal.updated = null;
      signal.set_during_effect = false;
      signal.trace = null;
    }
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function state(v, stack2) {
    const s = source(v, stack2);
    push_reaction_value(s);
    return s;
  }
  // @__NO_SIDE_EFFECTS__
  function mutable_source(initial_value, immutable = false, trackable = true) {
    const s = source(initial_value);
    if (!immutable) {
      s.equals = safe_equals;
    }
    if (legacy_mode_flag && trackable && component_context !== null && component_context.l !== null) {
      (component_context.l.s ??= []).push(s);
    }
    return s;
  }
  function set(source2, value, should_proxy = false) {
    if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
    // to ensure we error if state is set inside an inspect effect
    (!untracking || (active_reaction.f & EAGER_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | EAGER_EFFECT)) !== 0 && (current_sources === null || !includes.call(current_sources, source2))) {
      state_unsafe_mutation();
    }
    let new_value = should_proxy ? proxy(value) : value;
    if (dev_fallback_default) {
      tag_proxy(
        new_value,
        /** @type {string} */
        source2.label
      );
    }
    return internal_set(source2, new_value, legacy_updates);
  }
  function internal_set(source2, value, updated_during_traversal = null) {
    if (!source2.equals(value)) {
      old_values.set(source2, is_destroying_effect ? value : source2.v);
      var batch = Batch.ensure();
      batch.capture(source2, value);
      if (dev_fallback_default) {
        if (tracing_mode_flag || active_effect !== null) {
          source2.updated ??= /* @__PURE__ */ new Map();
          const count = (source2.updated.get("")?.count ?? 0) + 1;
          source2.updated.set("", { error: (
            /** @type {any} */
            null
          ), count });
          if (tracing_mode_flag || count > 5) {
            const error = get_error("updated at");
            if (error !== null) {
              let entry = source2.updated.get(error.stack);
              if (!entry) {
                entry = { error, count: 0 };
                source2.updated.set(error.stack, entry);
              }
              entry.count++;
            }
          }
        }
        if (active_effect !== null) {
          source2.set_during_effect = true;
        }
      }
      if ((source2.f & DERIVED) !== 0) {
        const derived2 = (
          /** @type {Derived} */
          source2
        );
        if ((source2.f & DIRTY) !== 0) {
          execute_derived(derived2);
        }
        if (batch_values === null) {
          update_derived_status(derived2);
        }
      }
      source2.wv = increment_write_version();
      mark_reactions(source2, DIRTY, updated_during_traversal);
      if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
      if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) {
        flush_eager_effects();
      }
    }
    return value;
  }
  function flush_eager_effects() {
    eager_effects_deferred = false;
    for (const effect2 of eager_effects) {
      if ((effect2.f & CLEAN) !== 0) {
        set_signal_status(effect2, MAYBE_DIRTY);
      }
      if (is_dirty(effect2)) {
        update_effect(effect2);
      }
    }
    eager_effects.clear();
  }
  function increment(source2) {
    set(source2, source2.v + 1);
  }
  function mark_reactions(signal, status, updated_during_traversal) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    var runes = is_runes();
    var length = reactions.length;
    for (var i = 0; i < length; i++) {
      var reaction = reactions[i];
      var flags2 = reaction.f;
      if (!runes && reaction === active_effect) continue;
      if (dev_fallback_default && (flags2 & EAGER_EFFECT) !== 0) {
        eager_effects.add(reaction);
        continue;
      }
      var not_dirty = (flags2 & DIRTY) === 0;
      if (not_dirty) {
        set_signal_status(reaction, status);
      }
      if ((flags2 & DERIVED) !== 0) {
        var derived2 = (
          /** @type {Derived} */
          reaction
        );
        batch_values?.delete(derived2);
        if ((flags2 & WAS_MARKED) === 0) {
          if (flags2 & CONNECTED) {
            reaction.f |= WAS_MARKED;
          }
          mark_reactions(derived2, MAYBE_DIRTY, updated_during_traversal);
        }
      } else if (not_dirty) {
        var effect2 = (
          /** @type {Effect} */
          reaction
        );
        if ((flags2 & BLOCK_EFFECT) !== 0 && eager_block_effects !== null) {
          eager_block_effects.add(effect2);
        }
        if (updated_during_traversal !== null) {
          updated_during_traversal.push(effect2);
        } else {
          schedule_effect(effect2);
        }
      }
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/proxy.js
  var regex_is_valid_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
  function proxy(value) {
    if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
      return value;
    }
    const prototype = get_prototype_of(value);
    if (prototype !== object_prototype && prototype !== array_prototype) {
      return value;
    }
    var sources = /* @__PURE__ */ new Map();
    var is_proxied_array = is_array(value);
    var version = state(0);
    var stack2 = dev_fallback_default && tracing_mode_flag ? get_error("created at") : null;
    var parent_version = update_version;
    var with_parent = (fn) => {
      if (update_version === parent_version) {
        return fn();
      }
      var reaction = active_reaction;
      var version2 = update_version;
      set_active_reaction(null);
      set_update_version(parent_version);
      var result = fn();
      set_active_reaction(reaction);
      set_update_version(version2);
      return result;
    };
    if (is_proxied_array) {
      sources.set("length", state(
        /** @type {any[]} */
        value.length,
        stack2
      ));
      if (dev_fallback_default) {
        value = /** @type {any} */
        inspectable_array(
          /** @type {any[]} */
          value
        );
      }
    }
    var path = "";
    let updating = false;
    function update_path(new_path) {
      if (updating) return;
      updating = true;
      path = new_path;
      tag(version, `${path} version`);
      for (const [prop2, source2] of sources) {
        tag(source2, get_label(path, prop2));
      }
      updating = false;
    }
    return new Proxy(
      /** @type {any} */
      value,
      {
        defineProperty(_, prop2, descriptor) {
          if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
            state_descriptors_fixed();
          }
          var s = sources.get(prop2);
          if (s === void 0) {
            with_parent(() => {
              var s2 = state(descriptor.value, stack2);
              sources.set(prop2, s2);
              if (dev_fallback_default && typeof prop2 === "string") {
                tag(s2, get_label(path, prop2));
              }
              return s2;
            });
          } else {
            set(s, descriptor.value, true);
          }
          return true;
        },
        deleteProperty(target, prop2) {
          var s = sources.get(prop2);
          if (s === void 0) {
            if (prop2 in target) {
              const s2 = with_parent(() => state(UNINITIALIZED, stack2));
              sources.set(prop2, s2);
              increment(version);
              if (dev_fallback_default) {
                tag(s2, get_label(path, prop2));
              }
            }
          } else {
            set(s, UNINITIALIZED);
            increment(version);
          }
          return true;
        },
        get(target, prop2, receiver) {
          if (prop2 === STATE_SYMBOL) {
            return value;
          }
          if (dev_fallback_default && prop2 === PROXY_PATH_SYMBOL) {
            return update_path;
          }
          var s = sources.get(prop2);
          var exists = prop2 in target;
          if (s === void 0 && (!exists || get_descriptor(target, prop2)?.writable)) {
            s = with_parent(() => {
              var p = proxy(exists ? target[prop2] : UNINITIALIZED);
              var s2 = state(p, stack2);
              if (dev_fallback_default) {
                tag(s2, get_label(path, prop2));
              }
              return s2;
            });
            sources.set(prop2, s);
          }
          if (s !== void 0) {
            var v = get2(s);
            return v === UNINITIALIZED ? void 0 : v;
          }
          return Reflect.get(target, prop2, receiver);
        },
        getOwnPropertyDescriptor(target, prop2) {
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor && "value" in descriptor) {
            var s = sources.get(prop2);
            if (s) descriptor.value = get2(s);
          } else if (descriptor === void 0) {
            var source2 = sources.get(prop2);
            var value2 = source2?.v;
            if (source2 !== void 0 && value2 !== UNINITIALIZED) {
              return {
                enumerable: true,
                configurable: true,
                value: value2,
                writable: true
              };
            }
          }
          return descriptor;
        },
        has(target, prop2) {
          if (prop2 === STATE_SYMBOL) {
            return true;
          }
          var s = sources.get(prop2);
          var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
          if (s !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop2)?.writable)) {
            if (s === void 0) {
              s = with_parent(() => {
                var p = has ? proxy(target[prop2]) : UNINITIALIZED;
                var s2 = state(p, stack2);
                if (dev_fallback_default) {
                  tag(s2, get_label(path, prop2));
                }
                return s2;
              });
              sources.set(prop2, s);
            }
            var value2 = get2(s);
            if (value2 === UNINITIALIZED) {
              return false;
            }
          }
          return has;
        },
        set(target, prop2, value2, receiver) {
          var s = sources.get(prop2);
          var has = prop2 in target;
          if (is_proxied_array && prop2 === "length") {
            for (var i = value2; i < /** @type {Source<number>} */
            s.v; i += 1) {
              var other_s = sources.get(i + "");
              if (other_s !== void 0) {
                set(other_s, UNINITIALIZED);
              } else if (i in target) {
                other_s = with_parent(() => state(UNINITIALIZED, stack2));
                sources.set(i + "", other_s);
                if (dev_fallback_default) {
                  tag(other_s, get_label(path, i));
                }
              }
            }
          }
          if (s === void 0) {
            if (!has || get_descriptor(target, prop2)?.writable) {
              s = with_parent(() => state(void 0, stack2));
              if (dev_fallback_default) {
                tag(s, get_label(path, prop2));
              }
              set(s, proxy(value2));
              sources.set(prop2, s);
            }
          } else {
            has = s.v !== UNINITIALIZED;
            var p = with_parent(() => proxy(value2));
            set(s, p);
          }
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor?.set) {
            descriptor.set.call(receiver, value2);
          }
          if (!has) {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
                /** @type {Source<number>} */
                sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n >= ls.v) {
                set(ls, n + 1);
              }
            }
            increment(version);
          }
          return true;
        },
        ownKeys(target) {
          get2(version);
          var own_keys = Reflect.ownKeys(target).filter((key3) => {
            var source3 = sources.get(key3);
            return source3 === void 0 || source3.v !== UNINITIALIZED;
          });
          for (var [key2, source2] of sources) {
            if (source2.v !== UNINITIALIZED && !(key2 in target)) {
              own_keys.push(key2);
            }
          }
          return own_keys;
        },
        setPrototypeOf() {
          state_prototype_fixed();
        }
      }
    );
  }
  function get_label(path, prop2) {
    if (typeof prop2 === "symbol") return `${path}[Symbol(${prop2.description ?? ""})]`;
    if (regex_is_valid_identifier.test(prop2)) return `${path}.${prop2}`;
    return /^\d+$/.test(prop2) ? `${path}[${prop2}]` : `${path}['${prop2}']`;
  }
  function get_proxied_value(value) {
    try {
      if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
        return value[STATE_SYMBOL];
      }
    } catch {
    }
    return value;
  }
  var ARRAY_MUTATING_METHODS = /* @__PURE__ */ new Set([
    "copyWithin",
    "fill",
    "pop",
    "push",
    "reverse",
    "shift",
    "sort",
    "splice",
    "unshift"
  ]);
  function inspectable_array(array) {
    return new Proxy(array, {
      get(target, prop2, receiver) {
        var value = Reflect.get(target, prop2, receiver);
        if (!ARRAY_MUTATING_METHODS.has(
          /** @type {string} */
          prop2
        )) {
          return value;
        }
        return function(...args) {
          set_eager_effects_deferred();
          var result = value.apply(this, args);
          flush_eager_effects();
          return result;
        };
      }
    });
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dev/equality.js
  function init_array_prototype_warnings() {
    const array_prototype2 = Array.prototype;
    const cleanup = Array.__svelte_cleanup;
    if (cleanup) {
      cleanup();
    }
    const { indexOf, lastIndexOf, includes: includes2 } = array_prototype2;
    array_prototype2.indexOf = function(item, from_index) {
      const index2 = indexOf.call(this, item, from_index);
      if (index2 === -1) {
        for (let i = from_index ?? 0; i < this.length; i += 1) {
          if (get_proxied_value(this[i]) === item) {
            state_proxy_equality_mismatch("array.indexOf(...)");
            break;
          }
        }
      }
      return index2;
    };
    array_prototype2.lastIndexOf = function(item, from_index) {
      const index2 = lastIndexOf.call(this, item, from_index ?? this.length - 1);
      if (index2 === -1) {
        for (let i = 0; i <= (from_index ?? this.length - 1); i += 1) {
          if (get_proxied_value(this[i]) === item) {
            state_proxy_equality_mismatch("array.lastIndexOf(...)");
            break;
          }
        }
      }
      return index2;
    };
    array_prototype2.includes = function(item, from_index) {
      const has = includes2.call(this, item, from_index);
      if (!has) {
        for (let i = 0; i < this.length; i += 1) {
          if (get_proxied_value(this[i]) === item) {
            state_proxy_equality_mismatch("array.includes(...)");
            break;
          }
        }
      }
      return has;
    };
    Array.__svelte_cleanup = () => {
      array_prototype2.indexOf = indexOf;
      array_prototype2.lastIndexOf = lastIndexOf;
      array_prototype2.includes = includes2;
    };
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/operations.js
  var $window;
  var $document;
  var is_firefox;
  var first_child_getter;
  var next_sibling_getter;
  function init_operations() {
    if ($window !== void 0) {
      return;
    }
    $window = window;
    $document = document;
    is_firefox = /Firefox/.test(navigator.userAgent);
    var element_prototype = Element.prototype;
    var node_prototype = Node.prototype;
    var text_prototype = Text.prototype;
    first_child_getter = get_descriptor(node_prototype, "firstChild").get;
    next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
    if (is_extensible(element_prototype)) {
      element_prototype.__click = void 0;
      element_prototype.__className = void 0;
      element_prototype.__attributes = null;
      element_prototype.__style = void 0;
      element_prototype.__e = void 0;
    }
    if (is_extensible(text_prototype)) {
      text_prototype.__t = void 0;
    }
    if (dev_fallback_default) {
      element_prototype.__svelte_meta = null;
      init_array_prototype_warnings();
    }
  }
  function create_text(value = "") {
    return document.createTextNode(value);
  }
  // @__NO_SIDE_EFFECTS__
  function get_first_child(node) {
    return (
      /** @type {TemplateNode | null} */
      first_child_getter.call(node)
    );
  }
  // @__NO_SIDE_EFFECTS__
  function get_next_sibling(node) {
    return (
      /** @type {TemplateNode | null} */
      next_sibling_getter.call(node)
    );
  }
  function child(node, is_text) {
    if (!hydrating) {
      return /* @__PURE__ */ get_first_child(node);
    }
    var child2 = /* @__PURE__ */ get_first_child(hydrate_node);
    if (child2 === null) {
      child2 = hydrate_node.appendChild(create_text());
    } else if (is_text && child2.nodeType !== TEXT_NODE) {
      var text2 = create_text();
      child2?.before(text2);
      set_hydrate_node(text2);
      return text2;
    }
    if (is_text) {
      merge_text_nodes(
        /** @type {Text} */
        child2
      );
    }
    set_hydrate_node(child2);
    return child2;
  }
  function first_child(node, is_text = false) {
    if (!hydrating) {
      var first = /* @__PURE__ */ get_first_child(node);
      if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
      return first;
    }
    if (is_text) {
      if (hydrate_node?.nodeType !== TEXT_NODE) {
        var text2 = create_text();
        hydrate_node?.before(text2);
        set_hydrate_node(text2);
        return text2;
      }
      merge_text_nodes(
        /** @type {Text} */
        hydrate_node
      );
    }
    return hydrate_node;
  }
  function sibling(node, count = 1, is_text = false) {
    let next_sibling = hydrating ? hydrate_node : node;
    var last_sibling;
    while (count--) {
      last_sibling = next_sibling;
      next_sibling = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(next_sibling);
    }
    if (!hydrating) {
      return next_sibling;
    }
    if (is_text) {
      if (next_sibling?.nodeType !== TEXT_NODE) {
        var text2 = create_text();
        if (next_sibling === null) {
          last_sibling?.after(text2);
        } else {
          next_sibling.before(text2);
        }
        set_hydrate_node(text2);
        return text2;
      }
      merge_text_nodes(
        /** @type {Text} */
        next_sibling
      );
    }
    set_hydrate_node(next_sibling);
    return next_sibling;
  }
  function clear_text_content(node) {
    node.textContent = "";
  }
  function should_defer_append() {
    if (!async_mode_flag) return false;
    if (eager_block_effects !== null) return false;
    var flags2 = (
      /** @type {Effect} */
      active_effect.f
    );
    return (flags2 & REACTION_RAN) !== 0;
  }
  function create_element(tag2, namespace, is2) {
    let options = is2 ? { is: is2 } : void 0;
    return (
      /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
      document.createElementNS(namespace ?? NAMESPACE_HTML, tag2, options)
    );
  }
  function create_fragment() {
    return document.createDocumentFragment();
  }
  function create_comment(data = "") {
    return document.createComment(data);
  }
  function set_attribute(element2, key2, value = "") {
    if (key2.startsWith("xlink:")) {
      element2.setAttributeNS("http://www.w3.org/1999/xlink", key2, value);
      return;
    }
    return element2.setAttribute(key2, value);
  }
  function merge_text_nodes(text2) {
    if (
      /** @type {string} */
      text2.nodeValue.length < 65536
    ) {
      return;
    }
    let next2 = text2.nextSibling;
    while (next2 !== null && next2.nodeType === TEXT_NODE) {
      next2.remove();
      text2.nodeValue += /** @type {string} */
      next2.nodeValue;
      next2 = text2.nextSibling;
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/misc.js
  function remove_textarea_child(dom) {
    if (hydrating && get_first_child(dom) !== null) {
      clear_text_content(dom);
    }
  }
  var listening_to_form_reset = false;
  function add_form_reset_listener() {
    if (!listening_to_form_reset) {
      listening_to_form_reset = true;
      document.addEventListener(
        "reset",
        (evt) => {
          Promise.resolve().then(() => {
            if (!evt.defaultPrevented) {
              for (
                const e of
                /**@type {HTMLFormElement} */
                evt.target.elements
              ) {
                e.__on_r?.();
              }
            }
          });
        },
        // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
        { capture: true }
      );
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
  function listen(target, events, handler, call_handler_immediately = true) {
    if (call_handler_immediately) {
      handler();
    }
    for (var name of events) {
      target.addEventListener(name, handler);
    }
    teardown(() => {
      for (var name2 of events) {
        target.removeEventListener(name2, handler);
      }
    });
  }
  function without_reactive_context(fn) {
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      return fn();
    } finally {
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  function listen_to_event_and_reset_event(element2, event2, handler, on_reset = handler) {
    element2.addEventListener(event2, () => without_reactive_context(handler));
    const prev = element2.__on_r;
    if (prev) {
      element2.__on_r = () => {
        prev();
        on_reset(true);
      };
    } else {
      element2.__on_r = () => on_reset(true);
    }
    add_form_reset_listener();
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/reactivity/effects.js
  function validate_effect(rune) {
    if (active_effect === null) {
      if (active_reaction === null) {
        effect_orphan(rune);
      }
      effect_in_unowned_derived();
    }
    if (is_destroying_effect) {
      effect_in_teardown(rune);
    }
  }
  function push_effect(effect2, parent_effect) {
    var parent_last = parent_effect.last;
    if (parent_last === null) {
      parent_effect.last = parent_effect.first = effect2;
    } else {
      parent_last.next = effect2;
      effect2.prev = parent_last;
      parent_effect.last = effect2;
    }
  }
  function create_effect(type, fn) {
    var parent = active_effect;
    if (dev_fallback_default) {
      while (parent !== null && (parent.f & EAGER_EFFECT) !== 0) {
        parent = parent.parent;
      }
    }
    if (parent !== null && (parent.f & INERT) !== 0) {
      type |= INERT;
    }
    var effect2 = {
      ctx: component_context,
      deps: null,
      nodes: null,
      f: type | DIRTY | CONNECTED,
      first: null,
      fn,
      last: null,
      next: null,
      parent,
      b: parent && parent.b,
      prev: null,
      teardown: null,
      wv: 0,
      ac: null
    };
    if (dev_fallback_default) {
      effect2.component_function = dev_current_component_function;
    }
    current_batch?.register_created_effect(effect2);
    var e = effect2;
    if ((type & EFFECT) !== 0) {
      if (collected_effects !== null) {
        collected_effects.push(effect2);
      } else {
        Batch.ensure().schedule(effect2);
      }
    } else if (fn !== null) {
      try {
        update_effect(effect2);
      } catch (e2) {
        destroy_effect(effect2);
        throw e2;
      }
      if (e.deps === null && e.teardown === null && e.nodes === null && e.first === e.last && // either `null`, or a singular child
      (e.f & EFFECT_PRESERVED) === 0) {
        e = e.first;
        if ((type & BLOCK_EFFECT) !== 0 && (type & EFFECT_TRANSPARENT) !== 0 && e !== null) {
          e.f |= EFFECT_TRANSPARENT;
        }
      }
    }
    if (e !== null) {
      e.parent = parent;
      if (parent !== null) {
        push_effect(e, parent);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type & ROOT_EFFECT) === 0) {
        var derived2 = (
          /** @type {Derived} */
          active_reaction
        );
        (derived2.effects ??= []).push(e);
      }
    }
    return effect2;
  }
  function effect_tracking() {
    return active_reaction !== null && !untracking;
  }
  function teardown(fn) {
    const effect2 = create_effect(RENDER_EFFECT, null);
    set_signal_status(effect2, CLEAN);
    effect2.teardown = fn;
    return effect2;
  }
  function user_effect(fn) {
    validate_effect("$effect");
    if (dev_fallback_default) {
      define_property(fn, "name", {
        value: "$effect"
      });
    }
    var flags2 = (
      /** @type {Effect} */
      active_effect.f
    );
    var defer = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && (flags2 & REACTION_RAN) === 0;
    if (defer) {
      var context = (
        /** @type {ComponentContext} */
        component_context
      );
      (context.e ??= []).push(fn);
    } else {
      return create_user_effect(fn);
    }
  }
  function create_user_effect(fn) {
    return create_effect(EFFECT | USER_EFFECT, fn);
  }
  function user_pre_effect(fn) {
    validate_effect("$effect.pre");
    if (dev_fallback_default) {
      define_property(fn, "name", {
        value: "$effect.pre"
      });
    }
    return create_effect(RENDER_EFFECT | USER_EFFECT, fn);
  }
  function effect_root(fn) {
    Batch.ensure();
    const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
    return () => {
      destroy_effect(effect2);
    };
  }
  function component_root(fn) {
    Batch.ensure();
    const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
    return (options = {}) => {
      return new Promise((fulfil) => {
        if (options.outro) {
          pause_effect(effect2, () => {
            destroy_effect(effect2);
            fulfil(void 0);
          });
        } else {
          destroy_effect(effect2);
          fulfil(void 0);
        }
      });
    };
  }
  function effect(fn) {
    return create_effect(EFFECT, fn);
  }
  function async_effect(fn) {
    return create_effect(ASYNC | EFFECT_PRESERVED, fn);
  }
  function render_effect(fn, flags2 = 0) {
    return create_effect(RENDER_EFFECT | flags2, fn);
  }
  function template_effect(fn, sync = [], async2 = [], blockers = []) {
    flatten(blockers, sync, async2, (values) => {
      create_effect(RENDER_EFFECT, () => fn(...values.map(get2)));
    });
  }
  function block(fn, flags2 = 0) {
    var effect2 = create_effect(BLOCK_EFFECT | flags2, fn);
    if (dev_fallback_default) {
      effect2.dev_stack = dev_stack;
    }
    return effect2;
  }
  function managed(fn, flags2 = 0) {
    var effect2 = create_effect(MANAGED_EFFECT | flags2, fn);
    if (dev_fallback_default) {
      effect2.dev_stack = dev_stack;
    }
    return effect2;
  }
  function branch(fn) {
    return create_effect(BRANCH_EFFECT | EFFECT_PRESERVED, fn);
  }
  function execute_effect_teardown(effect2) {
    var teardown2 = effect2.teardown;
    if (teardown2 !== null) {
      const previously_destroying_effect = is_destroying_effect;
      const previous_reaction = active_reaction;
      set_is_destroying_effect(true);
      set_active_reaction(null);
      try {
        teardown2.call(null);
      } finally {
        set_is_destroying_effect(previously_destroying_effect);
        set_active_reaction(previous_reaction);
      }
    }
  }
  function destroy_effect_children(signal, remove_dom = false) {
    var effect2 = signal.first;
    signal.first = signal.last = null;
    while (effect2 !== null) {
      const controller = effect2.ac;
      if (controller !== null) {
        without_reactive_context(() => {
          controller.abort(STALE_REACTION);
        });
      }
      var next2 = effect2.next;
      if ((effect2.f & ROOT_EFFECT) !== 0) {
        effect2.parent = null;
      } else {
        destroy_effect(effect2, remove_dom);
      }
      effect2 = next2;
    }
  }
  function destroy_block_effect_children(signal) {
    var effect2 = signal.first;
    while (effect2 !== null) {
      var next2 = effect2.next;
      if ((effect2.f & BRANCH_EFFECT) === 0) {
        destroy_effect(effect2);
      }
      effect2 = next2;
    }
  }
  function destroy_effect(effect2, remove_dom = true) {
    var removed = false;
    if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes !== null && effect2.nodes.end !== null) {
      remove_effect_dom(
        effect2.nodes.start,
        /** @type {TemplateNode} */
        effect2.nodes.end
      );
      removed = true;
    }
    set_signal_status(effect2, DESTROYING);
    destroy_effect_children(effect2, remove_dom && !removed);
    remove_reactions(effect2, 0);
    var transitions = effect2.nodes && effect2.nodes.t;
    if (transitions !== null) {
      for (const transition2 of transitions) {
        transition2.stop();
      }
    }
    execute_effect_teardown(effect2);
    effect2.f ^= DESTROYING;
    effect2.f |= DESTROYED;
    var parent = effect2.parent;
    if (parent !== null && parent.first !== null) {
      unlink_effect(effect2);
    }
    if (dev_fallback_default) {
      effect2.component_function = null;
    }
    effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes = effect2.ac = effect2.b = null;
  }
  function remove_effect_dom(node, end) {
    while (node !== null) {
      var next2 = node === end ? null : get_next_sibling(node);
      node.remove();
      node = next2;
    }
  }
  function unlink_effect(effect2) {
    var parent = effect2.parent;
    var prev = effect2.prev;
    var next2 = effect2.next;
    if (prev !== null) prev.next = next2;
    if (next2 !== null) next2.prev = prev;
    if (parent !== null) {
      if (parent.first === effect2) parent.first = next2;
      if (parent.last === effect2) parent.last = prev;
    }
  }
  function pause_effect(effect2, callback, destroy = true) {
    var transitions = [];
    pause_children(effect2, transitions, true);
    var fn = () => {
      if (destroy) destroy_effect(effect2);
      if (callback) callback();
    };
    var remaining = transitions.length;
    if (remaining > 0) {
      var check = () => --remaining || fn();
      for (var transition2 of transitions) {
        transition2.out(check);
      }
    } else {
      fn();
    }
  }
  function pause_children(effect2, transitions, local) {
    if ((effect2.f & INERT) !== 0) return;
    effect2.f ^= INERT;
    var t = effect2.nodes && effect2.nodes.t;
    if (t !== null) {
      for (const transition2 of t) {
        if (transition2.is_global || local) {
          transitions.push(transition2);
        }
      }
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      if ((child2.f & ROOT_EFFECT) === 0) {
        var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (child2.f & BRANCH_EFFECT) !== 0 && (effect2.f & BLOCK_EFFECT) !== 0;
        pause_children(child2, transitions, transparent ? local : false);
      }
      child2 = sibling2;
    }
  }
  function resume_effect(effect2) {
    resume_children(effect2, true);
  }
  function resume_children(effect2, local) {
    if ((effect2.f & INERT) === 0) return;
    effect2.f ^= INERT;
    if ((effect2.f & CLEAN) === 0) {
      set_signal_status(effect2, DIRTY);
      Batch.ensure().schedule(effect2);
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      resume_children(child2, transparent ? local : false);
      child2 = sibling2;
    }
    var t = effect2.nodes && effect2.nodes.t;
    if (t !== null) {
      for (const transition2 of t) {
        if (transition2.is_global || local) {
          transition2.in();
        }
      }
    }
  }
  function move_effect(effect2, fragment) {
    if (!effect2.nodes) return;
    var node = effect2.nodes.start;
    var end = effect2.nodes.end;
    while (node !== null) {
      var next2 = node === end ? null : get_next_sibling(node);
      fragment.append(node);
      node = next2;
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/legacy.js
  var captured_signals = null;

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/runtime.js
  var is_updating_effect = false;
  var is_destroying_effect = false;
  function set_is_destroying_effect(value) {
    is_destroying_effect = value;
  }
  var active_reaction = null;
  var untracking = false;
  function set_active_reaction(reaction) {
    active_reaction = reaction;
  }
  var active_effect = null;
  function set_active_effect(effect2) {
    active_effect = effect2;
  }
  var current_sources = null;
  function push_reaction_value(value) {
    if (active_reaction !== null && (!async_mode_flag || (active_reaction.f & DERIVED) !== 0)) {
      if (current_sources === null) {
        current_sources = [value];
      } else {
        current_sources.push(value);
      }
    }
  }
  var new_deps = null;
  var skipped_deps = 0;
  var untracked_writes = null;
  function set_untracked_writes(value) {
    untracked_writes = value;
  }
  var write_version = 1;
  var read_version = 0;
  var update_version = read_version;
  function set_update_version(value) {
    update_version = value;
  }
  function increment_write_version() {
    return ++write_version;
  }
  function is_dirty(reaction) {
    var flags2 = reaction.f;
    if ((flags2 & DIRTY) !== 0) {
      return true;
    }
    if (flags2 & DERIVED) {
      reaction.f &= ~WAS_MARKED;
    }
    if ((flags2 & MAYBE_DIRTY) !== 0) {
      var dependencies = (
        /** @type {Value[]} */
        reaction.deps
      );
      var length = dependencies.length;
      for (var i = 0; i < length; i++) {
        var dependency = dependencies[i];
        if (is_dirty(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
      if ((flags2 & CONNECTED) !== 0 && // During time traveling we don't want to reset the status so that
      // traversal of the graph in the other batches still happens
      batch_values === null) {
        set_signal_status(reaction, CLEAN);
      }
    }
    return false;
  }
  function schedule_possible_effect_self_invalidation(signal, effect2, root32 = true) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    if (!async_mode_flag && current_sources !== null && includes.call(current_sources, signal)) {
      return;
    }
    for (var i = 0; i < reactions.length; i++) {
      var reaction = reactions[i];
      if ((reaction.f & DERIVED) !== 0) {
        schedule_possible_effect_self_invalidation(
          /** @type {Derived} */
          reaction,
          effect2,
          false
        );
      } else if (effect2 === reaction) {
        if (root32) {
          set_signal_status(reaction, DIRTY);
        } else if ((reaction.f & CLEAN) !== 0) {
          set_signal_status(reaction, MAYBE_DIRTY);
        }
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
  function update_reaction(reaction) {
    var previous_deps = new_deps;
    var previous_skipped_deps = skipped_deps;
    var previous_untracked_writes = untracked_writes;
    var previous_reaction = active_reaction;
    var previous_sources = current_sources;
    var previous_component_context = component_context;
    var previous_untracking = untracking;
    var previous_update_version = update_version;
    var flags2 = reaction.f;
    new_deps = /** @type {null | Value[]} */
    null;
    skipped_deps = 0;
    untracked_writes = null;
    active_reaction = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
    current_sources = null;
    set_component_context(reaction.ctx);
    untracking = false;
    update_version = ++read_version;
    if (reaction.ac !== null) {
      without_reactive_context(() => {
        reaction.ac.abort(STALE_REACTION);
      });
      reaction.ac = null;
    }
    try {
      reaction.f |= REACTION_IS_UPDATING;
      var fn = (
        /** @type {Function} */
        reaction.fn
      );
      var result = fn();
      reaction.f |= REACTION_RAN;
      var deps = reaction.deps;
      var is_fork = current_batch?.is_fork;
      if (new_deps !== null) {
        var i;
        if (!is_fork) {
          remove_reactions(reaction, skipped_deps);
        }
        if (deps !== null && skipped_deps > 0) {
          deps.length = skipped_deps + new_deps.length;
          for (i = 0; i < new_deps.length; i++) {
            deps[skipped_deps + i] = new_deps[i];
          }
        } else {
          reaction.deps = deps = new_deps;
        }
        if (effect_tracking() && (reaction.f & CONNECTED) !== 0) {
          for (i = skipped_deps; i < deps.length; i++) {
            (deps[i].reactions ??= []).push(reaction);
          }
        }
      } else if (!is_fork && deps !== null && skipped_deps < deps.length) {
        remove_reactions(reaction, skipped_deps);
        deps.length = skipped_deps;
      }
      if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
        for (i = 0; i < /** @type {Source[]} */
        untracked_writes.length; i++) {
          schedule_possible_effect_self_invalidation(
            untracked_writes[i],
            /** @type {Effect} */
            reaction
          );
        }
      }
      if (previous_reaction !== null && previous_reaction !== reaction) {
        read_version++;
        if (previous_reaction.deps !== null) {
          for (let i2 = 0; i2 < previous_skipped_deps; i2 += 1) {
            previous_reaction.deps[i2].rv = read_version;
          }
        }
        if (previous_deps !== null) {
          for (const dep of previous_deps) {
            dep.rv = read_version;
          }
        }
        if (untracked_writes !== null) {
          if (previous_untracked_writes === null) {
            previous_untracked_writes = untracked_writes;
          } else {
            previous_untracked_writes.push(.../** @type {Source[]} */
            untracked_writes);
          }
        }
      }
      if ((reaction.f & ERROR_VALUE) !== 0) {
        reaction.f ^= ERROR_VALUE;
      }
      return result;
    } catch (error) {
      return handle_error(error);
    } finally {
      reaction.f ^= REACTION_IS_UPDATING;
      new_deps = previous_deps;
      skipped_deps = previous_skipped_deps;
      untracked_writes = previous_untracked_writes;
      active_reaction = previous_reaction;
      current_sources = previous_sources;
      set_component_context(previous_component_context);
      untracking = previous_untracking;
      update_version = previous_update_version;
    }
  }
  function remove_reaction(signal, dependency) {
    let reactions = dependency.reactions;
    if (reactions !== null) {
      var index2 = index_of.call(reactions, signal);
      if (index2 !== -1) {
        var new_length = reactions.length - 1;
        if (new_length === 0) {
          reactions = dependency.reactions = null;
        } else {
          reactions[index2] = reactions[new_length];
          reactions.pop();
        }
      }
    }
    if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (new_deps === null || !includes.call(new_deps, dependency))) {
      var derived2 = (
        /** @type {Derived} */
        dependency
      );
      if ((derived2.f & CONNECTED) !== 0) {
        derived2.f ^= CONNECTED;
        derived2.f &= ~WAS_MARKED;
      }
      if (derived2.v !== UNINITIALIZED) {
        update_derived_status(derived2);
      }
      freeze_derived_effects(derived2);
      remove_reactions(derived2, 0);
    }
  }
  function remove_reactions(signal, start_index) {
    var dependencies = signal.deps;
    if (dependencies === null) return;
    for (var i = start_index; i < dependencies.length; i++) {
      remove_reaction(signal, dependencies[i]);
    }
  }
  function update_effect(effect2) {
    var flags2 = effect2.f;
    if ((flags2 & DESTROYED) !== 0) {
      return;
    }
    set_signal_status(effect2, CLEAN);
    var previous_effect = active_effect;
    var was_updating_effect = is_updating_effect;
    active_effect = effect2;
    is_updating_effect = true;
    if (dev_fallback_default) {
      var previous_component_fn = dev_current_component_function;
      set_dev_current_component_function(effect2.component_function);
      var previous_stack = (
        /** @type {any} */
        dev_stack
      );
      set_dev_stack(effect2.dev_stack ?? dev_stack);
    }
    try {
      if ((flags2 & (BLOCK_EFFECT | MANAGED_EFFECT)) !== 0) {
        destroy_block_effect_children(effect2);
      } else {
        destroy_effect_children(effect2);
      }
      execute_effect_teardown(effect2);
      var teardown2 = update_reaction(effect2);
      effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
      effect2.wv = write_version;
      if (dev_fallback_default && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && effect2.deps !== null) {
        for (var dep of effect2.deps) {
          if (dep.set_during_effect) {
            dep.wv = increment_write_version();
            dep.set_during_effect = false;
          }
        }
      }
    } finally {
      is_updating_effect = was_updating_effect;
      active_effect = previous_effect;
      if (dev_fallback_default) {
        set_dev_current_component_function(previous_component_fn);
        set_dev_stack(previous_stack);
      }
    }
  }
  async function tick() {
    if (async_mode_flag) {
      return new Promise((f) => {
        requestAnimationFrame(() => f());
        setTimeout(() => f());
      });
    }
    await Promise.resolve();
    flushSync();
  }
  function get2(signal) {
    var flags2 = signal.f;
    var is_derived = (flags2 & DERIVED) !== 0;
    captured_signals?.add(signal);
    if (active_reaction !== null && !untracking) {
      var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
      if (!destroyed && (current_sources === null || !includes.call(current_sources, signal))) {
        var deps = active_reaction.deps;
        if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
          if (signal.rv < read_version) {
            signal.rv = read_version;
            if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
              skipped_deps++;
            } else if (new_deps === null) {
              new_deps = [signal];
            } else {
              new_deps.push(signal);
            }
          }
        } else {
          (active_reaction.deps ??= []).push(signal);
          var reactions = signal.reactions;
          if (reactions === null) {
            signal.reactions = [active_reaction];
          } else if (!includes.call(reactions, active_reaction)) {
            reactions.push(active_reaction);
          }
        }
      }
    }
    if (dev_fallback_default) {
      if (!untracking && reactivity_loss_tracker && !reactivity_loss_tracker.warned && (reactivity_loss_tracker.effect.f & REACTION_IS_UPDATING) === 0 && !reactivity_loss_tracker.effect_deps.has(signal)) {
        reactivity_loss_tracker.warned = true;
        await_reactivity_loss(
          /** @type {string} */
          signal.label
        );
        var trace2 = get_error("traced at");
        if (trace2) console.warn(trace2);
      }
      recent_async_deriveds.delete(signal);
      if (tracing_mode_flag && !untracking && tracing_expressions !== null && active_reaction !== null && tracing_expressions.reaction === active_reaction) {
        if (signal.trace) {
          signal.trace();
        } else {
          trace2 = get_error("traced at");
          if (trace2) {
            var entry = tracing_expressions.entries.get(signal);
            if (entry === void 0) {
              entry = { traces: [] };
              tracing_expressions.entries.set(signal, entry);
            }
            var last = entry.traces[entry.traces.length - 1];
            if (trace2.stack !== last?.stack) {
              entry.traces.push(trace2);
            }
          }
        }
      }
    }
    if (is_destroying_effect && old_values.has(signal)) {
      return old_values.get(signal);
    }
    if (is_derived) {
      var derived2 = (
        /** @type {Derived} */
        signal
      );
      if (is_destroying_effect) {
        var value = derived2.v;
        if ((derived2.f & CLEAN) === 0 && derived2.reactions !== null || depends_on_old_values(derived2)) {
          value = execute_derived(derived2);
        }
        old_values.set(derived2, value);
        return value;
      }
      var should_connect = (derived2.f & CONNECTED) === 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & CONNECTED) !== 0);
      var is_new = (derived2.f & REACTION_RAN) === 0;
      if (is_dirty(derived2)) {
        if (should_connect) {
          derived2.f |= CONNECTED;
        }
        update_derived(derived2);
      }
      if (should_connect && !is_new) {
        unfreeze_derived_effects(derived2);
        reconnect(derived2);
      }
    }
    if (batch_values?.has(signal)) {
      return batch_values.get(signal);
    }
    if ((signal.f & ERROR_VALUE) !== 0) {
      throw signal.v;
    }
    return signal.v;
  }
  function reconnect(derived2) {
    derived2.f |= CONNECTED;
    if (derived2.deps === null) return;
    for (const dep of derived2.deps) {
      (dep.reactions ??= []).push(derived2);
      if ((dep.f & DERIVED) !== 0 && (dep.f & CONNECTED) === 0) {
        unfreeze_derived_effects(
          /** @type {Derived} */
          dep
        );
        reconnect(
          /** @type {Derived} */
          dep
        );
      }
    }
  }
  function depends_on_old_values(derived2) {
    if (derived2.v === UNINITIALIZED) return true;
    if (derived2.deps === null) return false;
    for (const dep of derived2.deps) {
      if (old_values.has(dep)) {
        return true;
      }
      if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
        /** @type {Derived} */
        dep
      )) {
        return true;
      }
    }
    return false;
  }
  function untrack(fn) {
    var previous_untracking = untracking;
    try {
      untracking = true;
      return fn();
    } finally {
      untracking = previous_untracking;
    }
  }
  function deep_read_state(value) {
    if (typeof value !== "object" || !value || value instanceof EventTarget) {
      return;
    }
    if (STATE_SYMBOL in value) {
      deep_read(value);
    } else if (!Array.isArray(value)) {
      for (let key2 in value) {
        const prop2 = value[key2];
        if (typeof prop2 === "object" && prop2 && STATE_SYMBOL in prop2) {
          deep_read(prop2);
        }
      }
    }
  }
  function deep_read(value, visited = /* @__PURE__ */ new Set()) {
    if (typeof value === "object" && value !== null && // We don't want to traverse DOM elements
    !(value instanceof EventTarget) && !visited.has(value)) {
      visited.add(value);
      if (value instanceof Date) {
        value.getTime();
      }
      for (let key2 in value) {
        try {
          deep_read(value[key2], visited);
        } catch (e) {
        }
      }
      const proto = get_prototype_of(value);
      if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
        const descriptors = get_descriptors(proto);
        for (let key2 in descriptors) {
          const get3 = descriptors[key2].get;
          if (get3) {
            try {
              get3.call(value);
            } catch (e) {
            }
          }
        }
      }
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/events.js
  var event_symbol = /* @__PURE__ */ Symbol("events");
  var all_registered_events = /* @__PURE__ */ new Set();
  var root_event_handles = /* @__PURE__ */ new Set();
  function create_event(event_name, dom, handler, options = {}) {
    function target_handler(event2) {
      if (!options.capture) {
        handle_event_propagation.call(dom, event2);
      }
      if (!event2.cancelBubble) {
        return without_reactive_context(() => {
          return handler?.call(this, event2);
        });
      }
    }
    if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
      queue_micro_task(() => {
        dom.addEventListener(event_name, target_handler, options);
      });
    } else {
      dom.addEventListener(event_name, target_handler, options);
    }
    return target_handler;
  }
  function event(event_name, dom, handler, capture2, passive2) {
    var options = { capture: capture2, passive: passive2 };
    var target_handler = create_event(event_name, dom, handler, options);
    if (dom === document.body || // @ts-ignore
    dom === window || // @ts-ignore
    dom === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
    dom instanceof HTMLMediaElement) {
      teardown(() => {
        dom.removeEventListener(event_name, target_handler, options);
      });
    }
  }
  function delegated(event_name, element2, handler) {
    (element2[event_symbol] ??= {})[event_name] = handler;
  }
  function delegate(events) {
    for (var i = 0; i < events.length; i++) {
      all_registered_events.add(events[i]);
    }
    for (var fn of root_event_handles) {
      fn(events);
    }
  }
  var last_propagated_event = null;
  function handle_event_propagation(event2) {
    var handler_element = this;
    var owner_document = (
      /** @type {Node} */
      handler_element.ownerDocument
    );
    var event_name = event2.type;
    var path = event2.composedPath?.() || [];
    var current_target = (
      /** @type {null | Element} */
      path[0] || event2.target
    );
    last_propagated_event = event2;
    var path_idx = 0;
    var handled_at = last_propagated_event === event2 && event2[event_symbol];
    if (handled_at) {
      var at_idx = path.indexOf(handled_at);
      if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
      window)) {
        event2[event_symbol] = handler_element;
        return;
      }
      var handler_idx = path.indexOf(handler_element);
      if (handler_idx === -1) {
        return;
      }
      if (at_idx <= handler_idx) {
        path_idx = at_idx;
      }
    }
    current_target = /** @type {Element} */
    path[path_idx] || event2.target;
    if (current_target === handler_element) return;
    define_property(event2, "currentTarget", {
      configurable: true,
      get() {
        return current_target || owner_document;
      }
    });
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      var throw_error;
      var other_errors = [];
      while (current_target !== null) {
        var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
        current_target.host || null;
        try {
          var delegated2 = current_target[event_symbol]?.[event_name];
          if (delegated2 != null && (!/** @type {any} */
          current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          event2.target === current_target)) {
            delegated2.call(current_target, event2);
          }
        } catch (error) {
          if (throw_error) {
            other_errors.push(error);
          } else {
            throw_error = error;
          }
        }
        if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
          break;
        }
        current_target = parent_element;
      }
      if (throw_error) {
        for (let error of other_errors) {
          queueMicrotask(() => {
            throw error;
          });
        }
        throw throw_error;
      }
    } finally {
      event2[event_symbol] = handler_element;
      delete event2.currentTarget;
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/reconciler.js
  var policy = (
    // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
    globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
      /** @param {string} html */
      createHTML: (html2) => {
        return html2;
      }
    })
  );

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/template.js
  var TEMPLATE_TAG = IS_XHTML ? "template" : "TEMPLATE";
  function assign_nodes(start, end) {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (effect2.nodes === null) {
      effect2.nodes = { start, end, a: null, t: null };
    }
  }
  function fragment_from_tree(structure, ns) {
    var fragment = create_fragment();
    for (var item of structure) {
      if (typeof item === "string") {
        fragment.append(create_text(item));
        continue;
      }
      if (item === void 0 || item[0][0] === "/") {
        fragment.append(create_comment(item ? item[0].slice(3) : ""));
        continue;
      }
      const [name, attributes, ...children] = item;
      const namespace = name === "svg" ? NAMESPACE_SVG : name === "math" ? NAMESPACE_MATHML : ns;
      var element2 = create_element(name, namespace, attributes?.is);
      for (var key2 in attributes) {
        set_attribute(element2, key2, attributes[key2]);
      }
      if (children.length > 0) {
        var target = element2.nodeName === TEMPLATE_TAG ? (
          /** @type {HTMLTemplateElement} */
          element2.content
        ) : element2;
        target.append(
          fragment_from_tree(children, element2.nodeName === "foreignObject" ? void 0 : namespace)
        );
      }
      fragment.append(element2);
    }
    return fragment;
  }
  // @__NO_SIDE_EFFECTS__
  function from_tree(structure, flags2) {
    var is_fragment = (flags2 & TEMPLATE_FRAGMENT) !== 0;
    var use_import_node = (flags2 & TEMPLATE_USE_IMPORT_NODE) !== 0;
    var node;
    return () => {
      if (hydrating) {
        assign_nodes(hydrate_node, null);
        return hydrate_node;
      }
      if (node === void 0) {
        const ns = (flags2 & TEMPLATE_USE_SVG) !== 0 ? NAMESPACE_SVG : (flags2 & TEMPLATE_USE_MATHML) !== 0 ? NAMESPACE_MATHML : void 0;
        node = fragment_from_tree(structure, ns);
        if (!is_fragment) node = /** @type {TemplateNode} */
        get_first_child(node);
      }
      var clone = (
        /** @type {TemplateNode} */
        use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
      );
      if (is_fragment) {
        var start = (
          /** @type {TemplateNode} */
          get_first_child(clone)
        );
        var end = (
          /** @type {TemplateNode} */
          clone.lastChild
        );
        assign_nodes(start, end);
      } else {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  function text(value = "") {
    if (!hydrating) {
      var t = create_text(value + "");
      assign_nodes(t, t);
      return t;
    }
    var node = hydrate_node;
    if (node.nodeType !== TEXT_NODE) {
      node.before(node = create_text());
      set_hydrate_node(node);
    } else {
      merge_text_nodes(
        /** @type {Text} */
        node
      );
    }
    assign_nodes(node, node);
    return node;
  }
  function comment() {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    var frag = document.createDocumentFragment();
    var start = document.createComment("");
    var anchor = create_text();
    frag.append(start, anchor);
    assign_nodes(start, anchor);
    return frag;
  }
  function append(anchor, dom) {
    if (hydrating) {
      var effect2 = (
        /** @type {Effect & { nodes: EffectNodes }} */
        active_effect
      );
      if ((effect2.f & REACTION_RAN) === 0 || effect2.nodes.end === null) {
        effect2.nodes.end = hydrate_node;
      }
      hydrate_next();
      return;
    }
    if (anchor === null) {
      return;
    }
    anchor.before(
      /** @type {Node} */
      dom
    );
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/utils.js
  var DOM_BOOLEAN_ATTRIBUTES = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "indeterminate",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected",
    "webkitdirectory",
    "defer",
    "disablepictureinpicture",
    "disableremoteplayback"
  ];
  var DOM_PROPERTIES = [
    ...DOM_BOOLEAN_ATTRIBUTES,
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    "readOnly",
    "value",
    "volume",
    "defaultValue",
    "defaultChecked",
    "srcObject",
    "noValidate",
    "allowFullscreen",
    "disablePictureInPicture",
    "disableRemotePlayback"
  ];
  var PASSIVE_EVENTS = ["touchstart", "touchmove"];
  function is_passive_event(name) {
    return PASSIVE_EVENTS.includes(name);
  }
  var STATE_CREATION_RUNES = (
    /** @type {const} */
    [
      "$state",
      "$state.raw",
      "$derived",
      "$derived.by"
    ]
  );
  var RUNES = (
    /** @type {const} */
    [
      ...STATE_CREATION_RUNES,
      "$state.eager",
      "$state.snapshot",
      "$props",
      "$props.id",
      "$bindable",
      "$effect",
      "$effect.pre",
      "$effect.tracking",
      "$effect.root",
      "$effect.pending",
      "$inspect",
      "$inspect().with",
      "$inspect.trace",
      "$host"
    ]
  );

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/render.js
  var should_intro = true;
  function set_text(text2, value) {
    var str = value == null ? "" : typeof value === "object" ? `${value}` : value;
    if (str !== (text2.__t ??= text2.nodeValue)) {
      text2.__t = str;
      text2.nodeValue = `${str}`;
    }
  }
  function mount(component2, options) {
    return _mount(component2, options);
  }
  function hydrate(component2, options) {
    init_operations();
    options.intro = options.intro ?? false;
    const target = options.target;
    const was_hydrating = hydrating;
    const previous_hydrate_node = hydrate_node;
    try {
      var anchor = get_first_child(target);
      while (anchor && (anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
      anchor.data !== HYDRATION_START)) {
        anchor = get_next_sibling(anchor);
      }
      if (!anchor) {
        throw HYDRATION_ERROR;
      }
      set_hydrating(true);
      set_hydrate_node(
        /** @type {Comment} */
        anchor
      );
      const instance = _mount(component2, { ...options, anchor });
      set_hydrating(false);
      return (
        /**  @type {Exports} */
        instance
      );
    } catch (error) {
      if (error instanceof Error && error.message.split("\n").some((line) => line.startsWith("https://svelte.dev/e/"))) {
        throw error;
      }
      if (error !== HYDRATION_ERROR) {
        console.warn("Failed to hydrate: ", error);
      }
      if (options.recover === false) {
        hydration_failed();
      }
      init_operations();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component2, options);
    } finally {
      set_hydrating(was_hydrating);
      set_hydrate_node(previous_hydrate_node);
    }
  }
  var listeners = /* @__PURE__ */ new Map();
  function _mount(Component, { target, anchor, props = {}, events, context, intro = true, transformError }) {
    init_operations();
    var component2 = void 0;
    var unmount2 = component_root(() => {
      var anchor_node = anchor ?? target.appendChild(create_text());
      boundary(
        /** @type {TemplateNode} */
        anchor_node,
        {
          pending: () => {
          }
        },
        (anchor_node2) => {
          push({});
          var ctx = (
            /** @type {ComponentContext} */
            component_context
          );
          if (context) ctx.c = context;
          if (events) {
            props.$$events = events;
          }
          if (hydrating) {
            assign_nodes(
              /** @type {TemplateNode} */
              anchor_node2,
              null
            );
          }
          should_intro = intro;
          component2 = Component(anchor_node2, props) || {};
          should_intro = true;
          if (hydrating) {
            active_effect.nodes.end = hydrate_node;
            if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE || /** @type {Comment} */
            hydrate_node.data !== HYDRATION_END) {
              hydration_mismatch();
              throw HYDRATION_ERROR;
            }
          }
          pop();
        },
        transformError
      );
      var registered_events = /* @__PURE__ */ new Set();
      var event_handle = (events2) => {
        for (var i = 0; i < events2.length; i++) {
          var event_name = events2[i];
          if (registered_events.has(event_name)) continue;
          registered_events.add(event_name);
          var passive2 = is_passive_event(event_name);
          for (const node of [target, document]) {
            var counts = listeners.get(node);
            if (counts === void 0) {
              counts = /* @__PURE__ */ new Map();
              listeners.set(node, counts);
            }
            var count = counts.get(event_name);
            if (count === void 0) {
              node.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
              counts.set(event_name, 1);
            } else {
              counts.set(event_name, count + 1);
            }
          }
        }
      };
      event_handle(array_from(all_registered_events));
      root_event_handles.add(event_handle);
      return () => {
        for (var event_name of registered_events) {
          for (const node of [target, document]) {
            var counts = (
              /** @type {Map<string, number>} */
              listeners.get(node)
            );
            var count = (
              /** @type {number} */
              counts.get(event_name)
            );
            if (--count == 0) {
              node.removeEventListener(event_name, handle_event_propagation);
              counts.delete(event_name);
              if (counts.size === 0) {
                listeners.delete(node);
              }
            } else {
              counts.set(event_name, count);
            }
          }
        }
        root_event_handles.delete(event_handle);
        if (anchor_node !== anchor) {
          anchor_node.parentNode?.removeChild(anchor_node);
        }
      };
    });
    mounted_components.set(component2, unmount2);
    return component2;
  }
  var mounted_components = /* @__PURE__ */ new WeakMap();
  function unmount(component2, options) {
    const fn = mounted_components.get(component2);
    if (fn) {
      mounted_components.delete(component2);
      return fn(options);
    }
    if (dev_fallback_default) {
      if (STATE_SYMBOL in component2) {
        state_proxy_unmount();
      } else {
        lifecycle_double_unmount();
      }
    }
    return Promise.resolve();
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/blocks/branches.js
  var BranchManager = class {
    /** @type {TemplateNode} */
    anchor;
    /** @type {Map<Batch, Key>} */
    #batches = /* @__PURE__ */ new Map();
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    #onscreen = /* @__PURE__ */ new Map();
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    #offscreen = /* @__PURE__ */ new Map();
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    #outroing = /* @__PURE__ */ new Set();
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    #transition = true;
    /**
     * @param {TemplateNode} anchor
     * @param {boolean} transition
     */
    constructor(anchor, transition2 = true) {
      this.anchor = anchor;
      this.#transition = transition2;
    }
    /**
     * @param {Batch} batch
     */
    #commit = (batch) => {
      if (!this.#batches.has(batch)) return;
      var key2 = (
        /** @type {Key} */
        this.#batches.get(batch)
      );
      var onscreen = this.#onscreen.get(key2);
      if (onscreen) {
        resume_effect(onscreen);
        this.#outroing.delete(key2);
      } else {
        var offscreen = this.#offscreen.get(key2);
        if (offscreen) {
          this.#onscreen.set(key2, offscreen.effect);
          this.#offscreen.delete(key2);
          if (dev_fallback_default) {
            offscreen.fragment.lastChild[HMR_ANCHOR] = this.anchor;
          }
          offscreen.fragment.lastChild.remove();
          this.anchor.before(offscreen.fragment);
          onscreen = offscreen.effect;
        }
      }
      for (const [b, k] of this.#batches) {
        this.#batches.delete(b);
        if (b === batch) {
          break;
        }
        const offscreen2 = this.#offscreen.get(k);
        if (offscreen2) {
          destroy_effect(offscreen2.effect);
          this.#offscreen.delete(k);
        }
      }
      for (const [k, effect2] of this.#onscreen) {
        if (k === key2 || this.#outroing.has(k)) continue;
        const on_destroy = () => {
          const keys = Array.from(this.#batches.values());
          if (keys.includes(k)) {
            var fragment = document.createDocumentFragment();
            move_effect(effect2, fragment);
            fragment.append(create_text());
            this.#offscreen.set(k, { effect: effect2, fragment });
          } else {
            destroy_effect(effect2);
          }
          this.#outroing.delete(k);
          this.#onscreen.delete(k);
        };
        if (this.#transition || !onscreen) {
          this.#outroing.add(k);
          pause_effect(effect2, on_destroy, false);
        } else {
          on_destroy();
        }
      }
    };
    /**
     * @param {Batch} batch
     */
    #discard = (batch) => {
      this.#batches.delete(batch);
      const keys = Array.from(this.#batches.values());
      for (const [k, branch2] of this.#offscreen) {
        if (!keys.includes(k)) {
          destroy_effect(branch2.effect);
          this.#offscreen.delete(k);
        }
      }
    };
    /**
     *
     * @param {any} key
     * @param {null | ((target: TemplateNode) => void)} fn
     */
    ensure(key2, fn) {
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      var defer = should_defer_append();
      if (fn && !this.#onscreen.has(key2) && !this.#offscreen.has(key2)) {
        if (defer) {
          var fragment = document.createDocumentFragment();
          var target = create_text();
          fragment.append(target);
          this.#offscreen.set(key2, {
            effect: branch(() => fn(target)),
            fragment
          });
        } else {
          this.#onscreen.set(
            key2,
            branch(() => fn(this.anchor))
          );
        }
      }
      this.#batches.set(batch, key2);
      if (defer) {
        for (const [k, effect2] of this.#onscreen) {
          if (k === key2) {
            batch.unskip_effect(effect2);
          } else {
            batch.skip_effect(effect2);
          }
        }
        for (const [k, branch2] of this.#offscreen) {
          if (k === key2) {
            batch.unskip_effect(branch2.effect);
          } else {
            batch.skip_effect(branch2.effect);
          }
        }
        batch.oncommit(this.#commit);
        batch.ondiscard(this.#discard);
      } else {
        if (hydrating) {
          this.anchor = hydrate_node;
        }
        this.#commit(batch);
      }
    }
  };

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/blocks/snippet.js
  function snippet(node, get_snippet, ...args) {
    var branches = new BranchManager(node);
    block(() => {
      const snippet2 = get_snippet() ?? null;
      if (dev_fallback_default && snippet2 == null) {
        invalid_snippet();
      }
      branches.ensure(snippet2, snippet2 && ((anchor) => snippet2(anchor, ...args)));
    }, EFFECT_TRANSPARENT);
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/index-client.js
  if (dev_fallback_default) {
    let throw_rune_error = function(rune) {
      if (!(rune in globalThis)) {
        let value;
        Object.defineProperty(globalThis, rune, {
          configurable: true,
          // eslint-disable-next-line getter-return
          get: () => {
            if (value !== void 0) {
              return value;
            }
            rune_outside_svelte(rune);
          },
          set: (v) => {
            value = v;
          }
        });
      }
    };
    throw_rune_error("$state");
    throw_rune_error("$effect");
    throw_rune_error("$derived");
    throw_rune_error("$inspect");
    throw_rune_error("$props");
    throw_rune_error("$bindable");
  }
  function onMount(fn) {
    if (component_context === null) {
      lifecycle_outside_component("onMount");
    }
    if (legacy_mode_flag && component_context.l !== null) {
      init_update_callbacks(component_context).m.push(fn);
    } else {
      user_effect(() => {
        const cleanup = untrack(fn);
        if (typeof cleanup === "function") return (
          /** @type {() => void} */
          cleanup
        );
      });
    }
  }
  function onDestroy(fn) {
    if (component_context === null) {
      lifecycle_outside_component("onDestroy");
    }
    onMount(() => () => untrack(fn));
  }
  function init_update_callbacks(context) {
    var l = (
      /** @type {ComponentContextLegacy} */
      context.l
    );
    return l.u ??= { a: [], b: [], m: [] };
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dev/css.js
  var all_styles = /* @__PURE__ */ new Map();
  function register_style(hash2, style) {
    var styles = all_styles.get(hash2);
    if (!styles) {
      styles = /* @__PURE__ */ new Set();
      all_styles.set(hash2, styles);
    }
    styles.add(style);
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/blocks/if.js
  function if_block(node, fn, elseif = false) {
    var marker;
    if (hydrating) {
      marker = hydrate_node;
      hydrate_next();
    }
    var branches = new BranchManager(node);
    var flags2 = elseif ? EFFECT_TRANSPARENT : 0;
    function update_branch(key2, fn2) {
      if (hydrating) {
        var data = read_hydration_instruction(
          /** @type {TemplateNode} */
          marker
        );
        if (key2 !== parseInt(data.substring(1))) {
          var anchor = skip_nodes();
          set_hydrate_node(anchor);
          branches.anchor = anchor;
          set_hydrating(false);
          branches.ensure(key2, fn2);
          set_hydrating(true);
          return;
        }
      }
      branches.ensure(key2, fn2);
    }
    block(() => {
      var has_branch = false;
      fn((fn2, key2 = 0) => {
        has_branch = true;
        update_branch(key2, fn2);
      });
      if (!has_branch) {
        update_branch(-1, null);
      }
    }, flags2);
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/blocks/key.js
  var NAN = /* @__PURE__ */ Symbol("NaN");
  function key(node, get_key, render_fn) {
    if (hydrating) {
      hydrate_next();
    }
    var branches = new BranchManager(node);
    var legacy = !is_runes();
    block(() => {
      var key2 = get_key();
      if (key2 !== key2) {
        key2 = /** @type {any} */
        NAN;
      }
      if (legacy && key2 !== null && typeof key2 === "object") {
        key2 = /** @type {V} */
        {};
      }
      branches.ensure(key2, render_fn);
    });
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/blocks/each.js
  function pause_effects(state2, to_destroy, controlled_anchor) {
    var transitions = [];
    var length = to_destroy.length;
    var group;
    var remaining = to_destroy.length;
    for (var i = 0; i < length; i++) {
      let effect2 = to_destroy[i];
      pause_effect(
        effect2,
        () => {
          if (group) {
            group.pending.delete(effect2);
            group.done.add(effect2);
            if (group.pending.size === 0) {
              var groups = (
                /** @type {Set<EachOutroGroup>} */
                state2.outrogroups
              );
              destroy_effects(state2, array_from(group.done));
              groups.delete(group);
              if (groups.size === 0) {
                state2.outrogroups = null;
              }
            }
          } else {
            remaining -= 1;
          }
        },
        false
      );
    }
    if (remaining === 0) {
      var fast_path = transitions.length === 0 && controlled_anchor !== null;
      if (fast_path) {
        var anchor = (
          /** @type {Element} */
          controlled_anchor
        );
        var parent_node = (
          /** @type {Element} */
          anchor.parentNode
        );
        clear_text_content(parent_node);
        parent_node.append(anchor);
        state2.items.clear();
      }
      destroy_effects(state2, to_destroy, !fast_path);
    } else {
      group = {
        pending: new Set(to_destroy),
        done: /* @__PURE__ */ new Set()
      };
      (state2.outrogroups ??= /* @__PURE__ */ new Set()).add(group);
    }
  }
  function destroy_effects(state2, to_destroy, remove_dom = true) {
    var preserved_effects;
    if (state2.pending.size > 0) {
      preserved_effects = /* @__PURE__ */ new Set();
      for (const keys of state2.pending.values()) {
        for (const key2 of keys) {
          preserved_effects.add(
            /** @type {EachItem} */
            state2.items.get(key2).e
          );
        }
      }
    }
    for (var i = 0; i < to_destroy.length; i++) {
      var e = to_destroy[i];
      if (preserved_effects?.has(e)) {
        e.f |= EFFECT_OFFSCREEN;
        const fragment = document.createDocumentFragment();
        move_effect(e, fragment);
      } else {
        destroy_effect(to_destroy[i], remove_dom);
      }
    }
  }
  var offscreen_anchor;
  function each(node, flags2, get_collection, get_key, render_fn, fallback_fn = null) {
    var anchor = node;
    var items = /* @__PURE__ */ new Map();
    var is_controlled = (flags2 & EACH_IS_CONTROLLED) !== 0;
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        node
      );
      anchor = hydrating ? set_hydrate_node(get_first_child(parent_node)) : parent_node.appendChild(create_text());
    }
    if (hydrating) {
      hydrate_next();
    }
    var fallback2 = null;
    var each_array = derived_safe_equal(() => {
      var collection = get_collection();
      return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
    });
    if (dev_fallback_default) {
      tag(each_array, "{#each ...}");
    }
    var array;
    var pending2 = /* @__PURE__ */ new Map();
    var first_run = true;
    function commit(batch) {
      if ((state2.effect.f & DESTROYED) !== 0) {
        return;
      }
      state2.pending.delete(batch);
      state2.fallback = fallback2;
      reconcile(state2, array, anchor, flags2, get_key);
      if (fallback2 !== null) {
        if (array.length === 0) {
          if ((fallback2.f & EFFECT_OFFSCREEN) === 0) {
            resume_effect(fallback2);
          } else {
            fallback2.f ^= EFFECT_OFFSCREEN;
            move(fallback2, null, anchor);
          }
        } else {
          pause_effect(fallback2, () => {
            fallback2 = null;
          });
        }
      }
    }
    function discard(batch) {
      state2.pending.delete(batch);
    }
    var effect2 = block(() => {
      array = /** @type {V[]} */
      get2(each_array);
      var length = array.length;
      let mismatch = false;
      if (hydrating) {
        var is_else = read_hydration_instruction(anchor) === HYDRATION_START_ELSE;
        if (is_else !== (length === 0)) {
          anchor = skip_nodes();
          set_hydrate_node(anchor);
          set_hydrating(false);
          mismatch = true;
        }
      }
      var keys = /* @__PURE__ */ new Set();
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      var defer = should_defer_append();
      for (var index2 = 0; index2 < length; index2 += 1) {
        if (hydrating && hydrate_node.nodeType === COMMENT_NODE && /** @type {Comment} */
        hydrate_node.data === HYDRATION_END) {
          anchor = /** @type {Comment} */
          hydrate_node;
          mismatch = true;
          set_hydrating(false);
        }
        var value = array[index2];
        var key2 = get_key(value, index2);
        if (dev_fallback_default) {
          var key_again = get_key(value, index2);
          if (key2 !== key_again) {
            each_key_volatile(String(index2), String(key2), String(key_again));
          }
        }
        var item = first_run ? null : items.get(key2);
        if (item) {
          if (item.v) internal_set(item.v, value);
          if (item.i) internal_set(item.i, index2);
          if (defer) {
            batch.unskip_effect(item.e);
          }
        } else {
          item = create_item(
            items,
            first_run ? anchor : offscreen_anchor ??= create_text(),
            value,
            key2,
            index2,
            render_fn,
            flags2,
            get_collection
          );
          if (!first_run) {
            item.e.f |= EFFECT_OFFSCREEN;
          }
          items.set(key2, item);
        }
        keys.add(key2);
      }
      if (length === 0 && fallback_fn && !fallback2) {
        if (first_run) {
          fallback2 = branch(() => fallback_fn(anchor));
        } else {
          fallback2 = branch(() => fallback_fn(offscreen_anchor ??= create_text()));
          fallback2.f |= EFFECT_OFFSCREEN;
        }
      }
      if (length > keys.size) {
        if (dev_fallback_default) {
          validate_each_keys(array, get_key);
        } else {
          each_key_duplicate("", "", "");
        }
      }
      if (hydrating && length > 0) {
        set_hydrate_node(skip_nodes());
      }
      if (!first_run) {
        pending2.set(batch, keys);
        if (defer) {
          for (const [key3, item2] of items) {
            if (!keys.has(key3)) {
              batch.skip_effect(item2.e);
            }
          }
          batch.oncommit(commit);
          batch.ondiscard(discard);
        } else {
          commit(batch);
        }
      }
      if (mismatch) {
        set_hydrating(true);
      }
      get2(each_array);
    });
    var state2 = { effect: effect2, flags: flags2, items, pending: pending2, outrogroups: null, fallback: fallback2 };
    first_run = false;
    if (hydrating) {
      anchor = hydrate_node;
    }
  }
  function skip_to_branch(effect2) {
    while (effect2 !== null && (effect2.f & BRANCH_EFFECT) === 0) {
      effect2 = effect2.next;
    }
    return effect2;
  }
  function reconcile(state2, array, anchor, flags2, get_key) {
    var is_animated = (flags2 & EACH_IS_ANIMATED) !== 0;
    var length = array.length;
    var items = state2.items;
    var current = skip_to_branch(state2.effect.first);
    var seen;
    var prev = null;
    var to_animate;
    var matched = [];
    var stashed = [];
    var value;
    var key2;
    var effect2;
    var i;
    if (is_animated) {
      for (i = 0; i < length; i += 1) {
        value = array[i];
        key2 = get_key(value, i);
        effect2 = /** @type {EachItem} */
        items.get(key2).e;
        if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
          effect2.nodes?.a?.measure();
          (to_animate ??= /* @__PURE__ */ new Set()).add(effect2);
        }
      }
    }
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key2 = get_key(value, i);
      effect2 = /** @type {EachItem} */
      items.get(key2).e;
      if (state2.outrogroups !== null) {
        for (const group of state2.outrogroups) {
          group.pending.delete(effect2);
          group.done.delete(effect2);
        }
      }
      if ((effect2.f & INERT) !== 0) {
        resume_effect(effect2);
        if (is_animated) {
          effect2.nodes?.a?.unfix();
          (to_animate ??= /* @__PURE__ */ new Set()).delete(effect2);
        }
      }
      if ((effect2.f & EFFECT_OFFSCREEN) !== 0) {
        effect2.f ^= EFFECT_OFFSCREEN;
        if (effect2 === current) {
          move(effect2, null, anchor);
        } else {
          var next2 = prev ? prev.next : current;
          if (effect2 === state2.effect.last) {
            state2.effect.last = effect2.prev;
          }
          if (effect2.prev) effect2.prev.next = effect2.next;
          if (effect2.next) effect2.next.prev = effect2.prev;
          link(state2, prev, effect2);
          link(state2, effect2, next2);
          move(effect2, next2, anchor);
          prev = effect2;
          matched = [];
          stashed = [];
          current = skip_to_branch(prev.next);
          continue;
        }
      }
      if (effect2 !== current) {
        if (seen !== void 0 && seen.has(effect2)) {
          if (matched.length < stashed.length) {
            var start = stashed[0];
            var j;
            prev = start.prev;
            var a = matched[0];
            var b = matched[matched.length - 1];
            for (j = 0; j < matched.length; j += 1) {
              move(matched[j], start, anchor);
            }
            for (j = 0; j < stashed.length; j += 1) {
              seen.delete(stashed[j]);
            }
            link(state2, a.prev, b.next);
            link(state2, prev, a);
            link(state2, b, start);
            current = start;
            prev = b;
            i -= 1;
            matched = [];
            stashed = [];
          } else {
            seen.delete(effect2);
            move(effect2, current, anchor);
            link(state2, effect2.prev, effect2.next);
            link(state2, effect2, prev === null ? state2.effect.first : prev.next);
            link(state2, prev, effect2);
            prev = effect2;
          }
          continue;
        }
        matched = [];
        stashed = [];
        while (current !== null && current !== effect2) {
          (seen ??= /* @__PURE__ */ new Set()).add(current);
          stashed.push(current);
          current = skip_to_branch(current.next);
        }
        if (current === null) {
          continue;
        }
      }
      if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
        matched.push(effect2);
      }
      prev = effect2;
      current = skip_to_branch(effect2.next);
    }
    if (state2.outrogroups !== null) {
      for (const group of state2.outrogroups) {
        if (group.pending.size === 0) {
          destroy_effects(state2, array_from(group.done));
          state2.outrogroups?.delete(group);
        }
      }
      if (state2.outrogroups.size === 0) {
        state2.outrogroups = null;
      }
    }
    if (current !== null || seen !== void 0) {
      var to_destroy = [];
      if (seen !== void 0) {
        for (effect2 of seen) {
          if ((effect2.f & INERT) === 0) {
            to_destroy.push(effect2);
          }
        }
      }
      while (current !== null) {
        if ((current.f & INERT) === 0 && current !== state2.fallback) {
          to_destroy.push(current);
        }
        current = skip_to_branch(current.next);
      }
      var destroy_length = to_destroy.length;
      if (destroy_length > 0) {
        var controlled_anchor = (flags2 & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
        if (is_animated) {
          for (i = 0; i < destroy_length; i += 1) {
            to_destroy[i].nodes?.a?.measure();
          }
          for (i = 0; i < destroy_length; i += 1) {
            to_destroy[i].nodes?.a?.fix();
          }
        }
        pause_effects(state2, to_destroy, controlled_anchor);
      }
    }
    if (is_animated) {
      queue_micro_task(() => {
        if (to_animate === void 0) return;
        for (effect2 of to_animate) {
          effect2.nodes?.a?.apply();
        }
      });
    }
  }
  function create_item(items, anchor, value, key2, index2, render_fn, flags2, get_collection) {
    var v = (flags2 & EACH_ITEM_REACTIVE) !== 0 ? (flags2 & EACH_ITEM_IMMUTABLE) === 0 ? mutable_source(value, false, false) : source(value) : null;
    var i = (flags2 & EACH_INDEX_REACTIVE) !== 0 ? source(index2) : null;
    if (dev_fallback_default && v) {
      v.trace = () => {
        get_collection()[i?.v ?? index2];
      };
    }
    return {
      v,
      i,
      e: branch(() => {
        render_fn(anchor, v ?? value, i ?? index2, get_collection);
        return () => {
          items.delete(key2);
        };
      })
    };
  }
  function move(effect2, next2, anchor) {
    if (!effect2.nodes) return;
    var node = effect2.nodes.start;
    var end = effect2.nodes.end;
    var dest = next2 && (next2.f & EFFECT_OFFSCREEN) === 0 ? (
      /** @type {EffectNodes} */
      next2.nodes.start
    ) : anchor;
    while (node !== null) {
      var next_node = (
        /** @type {TemplateNode} */
        get_next_sibling(node)
      );
      dest.before(node);
      if (node === end) {
        return;
      }
      node = next_node;
    }
  }
  function link(state2, prev, next2) {
    if (prev === null) {
      state2.effect.first = next2;
    } else {
      prev.next = next2;
    }
    if (next2 === null) {
      state2.effect.last = prev;
    } else {
      next2.prev = prev;
    }
  }
  function validate_each_keys(array, key_fn) {
    const keys = /* @__PURE__ */ new Map();
    const length = array.length;
    for (let i = 0; i < length; i++) {
      const key2 = key_fn(array[i], i);
      if (keys.has(key2)) {
        const a = String(keys.get(key2));
        const b = String(i);
        let k = String(key2);
        if (k.startsWith("[object ")) k = null;
        each_key_duplicate(a, b, k);
      }
      keys.set(key2, i);
    }
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
  function component(node, get_component, render_fn) {
    var hydration_start_node;
    if (hydrating) {
      hydration_start_node = hydrate_node;
      hydrate_next();
    }
    var branches = new BranchManager(node);
    block(() => {
      var component2 = get_component() ?? null;
      if (hydrating) {
        var data = read_hydration_instruction(
          /** @type {TemplateNode} */
          hydration_start_node
        );
        var server_had_component = data === HYDRATION_START;
        var client_has_component = component2 !== null;
        if (server_had_component !== client_has_component) {
          var anchor = skip_nodes();
          set_hydrate_node(anchor);
          branches.anchor = anchor;
          set_hydrating(false);
          branches.ensure(component2, component2 && ((target) => render_fn(target, component2)));
          set_hydrating(true);
          return;
        }
      }
      branches.ensure(component2, component2 && ((target) => render_fn(target, component2)));
    }, EFFECT_TRANSPARENT);
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/timing.js
  var now = true_default ? () => performance.now() : () => Date.now();
  var raf = {
    // don't access requestAnimationFrame eagerly outside method
    // this allows basic testing of user code without JSDOM
    // bunder will eval and remove ternary when the user's app is built
    tick: (
      /** @param {any} _ */
      (_) => (true_default ? requestAnimationFrame : noop)(_)
    ),
    now: () => now(),
    tasks: /* @__PURE__ */ new Set()
  };

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/loop.js
  function run_tasks() {
    const now2 = raf.now();
    raf.tasks.forEach((task) => {
      if (!task.c(now2)) {
        raf.tasks.delete(task);
        task.f();
      }
    });
    if (raf.tasks.size !== 0) {
      raf.tick(run_tasks);
    }
  }
  function loop(callback) {
    let task;
    if (raf.tasks.size === 0) {
      raf.tick(run_tasks);
    }
    return {
      promise: new Promise((fulfill) => {
        raf.tasks.add(task = { c: callback, f: fulfill });
      }),
      abort() {
        raf.tasks.delete(task);
      }
    };
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/transitions.js
  function dispatch_event(element2, type) {
    without_reactive_context(() => {
      element2.dispatchEvent(new CustomEvent(type));
    });
  }
  function css_property_to_camelcase(style) {
    if (style === "float") return "cssFloat";
    if (style === "offset") return "cssOffset";
    if (style.startsWith("--")) return style;
    const parts = style.split("-");
    if (parts.length === 1) return parts[0];
    return parts[0] + parts.slice(1).map(
      /** @param {any} word */
      (word) => word[0].toUpperCase() + word.slice(1)
    ).join("");
  }
  function css_to_keyframe(css2) {
    const keyframe = {};
    const parts = css2.split(";");
    for (const part of parts) {
      const [property, value] = part.split(":");
      if (!property || value === void 0) break;
      const formatted_property = css_property_to_camelcase(property.trim());
      keyframe[formatted_property] = value.trim();
    }
    return keyframe;
  }
  var linear = (t) => t;
  function transition(flags2, element2, get_fn, get_params) {
    var is_intro = (flags2 & TRANSITION_IN) !== 0;
    var is_outro = (flags2 & TRANSITION_OUT) !== 0;
    var is_both = is_intro && is_outro;
    var is_global = (flags2 & TRANSITION_GLOBAL) !== 0;
    var direction = is_both ? "both" : is_intro ? "in" : "out";
    var current_options;
    var inert = element2.inert;
    var overflow = element2.style.overflow;
    var intro;
    var outro;
    function get_options() {
      return without_reactive_context(() => {
        return current_options ??= get_fn()(element2, get_params?.() ?? /** @type {P} */
        {}, {
          direction
        });
      });
    }
    var transition2 = {
      is_global,
      in() {
        element2.inert = inert;
        if (!is_intro) {
          outro?.abort();
          outro?.reset?.();
          return;
        }
        if (!is_outro) {
          intro?.abort();
        }
        intro = animate(element2, get_options(), outro, 1, () => {
          dispatch_event(element2, "introend");
          intro?.abort();
          intro = current_options = void 0;
          element2.style.overflow = overflow;
        });
      },
      out(fn) {
        if (!is_outro) {
          fn?.();
          current_options = void 0;
          return;
        }
        element2.inert = true;
        outro = animate(element2, get_options(), intro, 0, () => {
          dispatch_event(element2, "outroend");
          fn?.();
        });
      },
      stop: () => {
        intro?.abort();
        outro?.abort();
      }
    };
    var e = (
      /** @type {Effect & { nodes: EffectNodes }} */
      active_effect
    );
    (e.nodes.t ??= []).push(transition2);
    if (is_intro && should_intro) {
      var run3 = is_global;
      if (!run3) {
        var block2 = (
          /** @type {Effect | null} */
          e.parent
        );
        while (block2 && (block2.f & EFFECT_TRANSPARENT) !== 0) {
          while (block2 = block2.parent) {
            if ((block2.f & BLOCK_EFFECT) !== 0) break;
          }
        }
        run3 = !block2 || (block2.f & REACTION_RAN) !== 0;
      }
      if (run3) {
        effect(() => {
          untrack(() => transition2.in());
        });
      }
    }
  }
  function animate(element2, options, counterpart, t2, on_finish) {
    var is_intro = t2 === 1;
    if (is_function(options)) {
      var a;
      var aborted2 = false;
      queue_micro_task(() => {
        if (aborted2) return;
        var o = options({ direction: is_intro ? "in" : "out" });
        a = animate(element2, o, counterpart, t2, on_finish);
      });
      return {
        abort: () => {
          aborted2 = true;
          a?.abort();
        },
        deactivate: () => a.deactivate(),
        reset: () => a.reset(),
        t: () => a.t()
      };
    }
    counterpart?.deactivate();
    if (!options?.duration && !options?.delay) {
      dispatch_event(element2, is_intro ? "introstart" : "outrostart");
      on_finish();
      return {
        abort: noop,
        deactivate: noop,
        reset: noop,
        t: () => t2
      };
    }
    const { delay = 0, css: css2, tick: tick2, easing = linear } = options;
    var keyframes = [];
    if (is_intro && counterpart === void 0) {
      if (tick2) {
        tick2(0, 1);
      }
      if (css2) {
        var styles = css_to_keyframe(css2(0, 1));
        keyframes.push(styles, styles);
      }
    }
    var get_t = () => 1 - t2;
    var animation2 = element2.animate(keyframes, { duration: delay, fill: "forwards" });
    animation2.onfinish = () => {
      animation2.cancel();
      dispatch_event(element2, is_intro ? "introstart" : "outrostart");
      var t1 = counterpart?.t() ?? 1 - t2;
      counterpart?.abort();
      var delta = t2 - t1;
      var duration = (
        /** @type {number} */
        options.duration * Math.abs(delta)
      );
      var keyframes2 = [];
      if (duration > 0) {
        var needs_overflow_hidden = false;
        if (css2) {
          var n = Math.ceil(duration / (1e3 / 60));
          for (var i = 0; i <= n; i += 1) {
            var t = t1 + delta * easing(i / n);
            var styles2 = css_to_keyframe(css2(t, 1 - t));
            keyframes2.push(styles2);
            needs_overflow_hidden ||= styles2.overflow === "hidden";
          }
        }
        if (needs_overflow_hidden) {
          element2.style.overflow = "hidden";
        }
        get_t = () => {
          var time = (
            /** @type {number} */
            /** @type {globalThis.Animation} */
            animation2.currentTime
          );
          return t1 + delta * easing(time / duration);
        };
        if (tick2) {
          loop(() => {
            if (animation2.playState !== "running") return false;
            var t3 = get_t();
            tick2(t3, 1 - t3);
            return true;
          });
        }
      }
      animation2 = element2.animate(keyframes2, { duration, fill: "forwards" });
      animation2.onfinish = () => {
        get_t = () => t2;
        tick2?.(t2, 1 - t2);
        on_finish();
      };
    };
    return {
      abort: () => {
        if (animation2) {
          animation2.cancel();
          animation2.effect = null;
          animation2.onfinish = noop;
        }
      },
      deactivate: () => {
        on_finish = noop;
      },
      reset: () => {
        if (t2 === 0) {
          tick2?.(1, 0);
        }
      },
      t: () => get_t()
    };
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/css.js
  function append_styles(anchor, css2) {
    effect(() => {
      var root32 = anchor.getRootNode();
      var target = (
        /** @type {ShadowRoot} */
        root32.host ? (
          /** @type {ShadowRoot} */
          root32
        ) : (
          /** @type {Document} */
          root32.head ?? /** @type {Document} */
          root32.ownerDocument.head
        )
      );
      if (!target.querySelector("#" + css2.hash)) {
        const style = create_element("style");
        style.id = css2.hash;
        style.textContent = css2.code;
        target.appendChild(style);
        if (dev_fallback_default) {
          register_style(css2.hash, style);
        }
      }
    });
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/actions.js
  function action(dom, action2, get_value) {
    effect(() => {
      var payload = untrack(() => action2(dom, get_value?.()) || {});
      if (get_value && payload?.update) {
        var inited2 = false;
        var prev = (
          /** @type {any} */
          {}
        );
        render_effect(() => {
          var value = get_value();
          deep_read_state(value);
          if (inited2 && safe_not_equal(prev, value)) {
            prev = value;
            payload.update(value);
          }
        });
        inited2 = true;
      }
      if (payload?.destroy) {
        return () => (
          /** @type {Function} */
          payload.destroy()
        );
      }
    });
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/attachments.js
  function attach(node, get_fn) {
    var fn = void 0;
    var e;
    managed(() => {
      if (fn !== (fn = get_fn())) {
        if (e) {
          destroy_effect(e);
          e = null;
        }
        if (fn) {
          e = branch(() => {
            effect(() => (
              /** @type {(node: Element) => void} */
              fn(node)
            ));
          });
        }
      }
    });
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/shared/attributes.js
  var whitespace = [..." 	\n\r\f\xA0\v\uFEFF"];
  function to_class(value, hash2, directives) {
    var classname = value == null ? "" : "" + value;
    if (hash2) {
      classname = classname ? classname + " " + hash2 : hash2;
    }
    if (directives) {
      for (var key2 of Object.keys(directives)) {
        if (directives[key2]) {
          classname = classname ? classname + " " + key2 : key2;
        } else if (classname.length) {
          var len = key2.length;
          var a = 0;
          while ((a = classname.indexOf(key2, a)) >= 0) {
            var b = a + len;
            if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
              classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
            } else {
              a = b;
            }
          }
        }
      }
    }
    return classname === "" ? null : classname;
  }
  function append_styles2(styles, important = false) {
    var separator = important ? " !important;" : ";";
    var css2 = "";
    for (var key2 of Object.keys(styles)) {
      var value = styles[key2];
      if (value != null && value !== "") {
        css2 += " " + key2 + ": " + value + separator;
      }
    }
    return css2;
  }
  function to_css_name(name) {
    if (name[0] !== "-" || name[1] !== "-") {
      return name.toLowerCase();
    }
    return name;
  }
  function to_style(value, styles) {
    if (styles) {
      var new_style = "";
      var normal_styles;
      var important_styles;
      if (Array.isArray(styles)) {
        normal_styles = styles[0];
        important_styles = styles[1];
      } else {
        normal_styles = styles;
      }
      if (value) {
        value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
        var in_str = false;
        var in_apo = 0;
        var in_comment = false;
        var reserved_names = [];
        if (normal_styles) {
          reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
        }
        if (important_styles) {
          reserved_names.push(...Object.keys(important_styles).map(to_css_name));
        }
        var start_index = 0;
        var name_index = -1;
        const len = value.length;
        for (var i = 0; i < len; i++) {
          var c = value[i];
          if (in_comment) {
            if (c === "/" && value[i - 1] === "*") {
              in_comment = false;
            }
          } else if (in_str) {
            if (in_str === c) {
              in_str = false;
            }
          } else if (c === "/" && value[i + 1] === "*") {
            in_comment = true;
          } else if (c === '"' || c === "'") {
            in_str = c;
          } else if (c === "(") {
            in_apo++;
          } else if (c === ")") {
            in_apo--;
          }
          if (!in_comment && in_str === false && in_apo === 0) {
            if (c === ":" && name_index === -1) {
              name_index = i;
            } else if (c === ";" || i === len - 1) {
              if (name_index !== -1) {
                var name = to_css_name(value.substring(start_index, name_index).trim());
                if (!reserved_names.includes(name)) {
                  if (c !== ";") {
                    i++;
                  }
                  var property = value.substring(start_index, i).trim();
                  new_style += " " + property + ";";
                }
              }
              start_index = i + 1;
              name_index = -1;
            }
          }
        }
      }
      if (normal_styles) {
        new_style += append_styles2(normal_styles);
      }
      if (important_styles) {
        new_style += append_styles2(important_styles, true);
      }
      new_style = new_style.trim();
      return new_style === "" ? null : new_style;
    }
    return value == null ? null : String(value);
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/class.js
  function set_class(dom, is_html, value, hash2, prev_classes, next_classes) {
    var prev = dom.__className;
    if (hydrating || prev !== value || prev === void 0) {
      var next_class_name = to_class(value, hash2, next_classes);
      if (!hydrating || next_class_name !== dom.getAttribute("class")) {
        if (next_class_name == null) {
          dom.removeAttribute("class");
        } else if (is_html) {
          dom.className = next_class_name;
        } else {
          dom.setAttribute("class", next_class_name);
        }
      }
      dom.__className = value;
    } else if (next_classes && prev_classes !== next_classes) {
      for (var key2 in next_classes) {
        var is_present = !!next_classes[key2];
        if (prev_classes == null || is_present !== !!prev_classes[key2]) {
          dom.classList.toggle(key2, is_present);
        }
      }
    }
    return next_classes;
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/style.js
  function update_styles(dom, prev = {}, next2, priority) {
    for (var key2 in next2) {
      var value = next2[key2];
      if (prev[key2] !== value) {
        if (next2[key2] == null) {
          dom.style.removeProperty(key2);
        } else {
          dom.style.setProperty(key2, value, priority);
        }
      }
    }
  }
  function set_style(dom, value, prev_styles, next_styles) {
    var prev = dom.__style;
    if (hydrating || prev !== value) {
      var next_style_attr = to_style(value, next_styles);
      if (!hydrating || next_style_attr !== dom.getAttribute("style")) {
        if (next_style_attr == null) {
          dom.removeAttribute("style");
        } else {
          dom.style.cssText = next_style_attr;
        }
      }
      dom.__style = value;
    } else if (next_styles) {
      if (Array.isArray(next_styles)) {
        update_styles(dom, prev_styles?.[0], next_styles[0]);
        update_styles(dom, prev_styles?.[1], next_styles[1], "important");
      } else {
        update_styles(dom, prev_styles, next_styles);
      }
    }
    return next_styles;
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/attributes.js
  var IS_CUSTOM_ELEMENT = /* @__PURE__ */ Symbol("is custom element");
  var IS_HTML = /* @__PURE__ */ Symbol("is html");
  var LINK_TAG = IS_XHTML ? "link" : "LINK";
  function remove_input_defaults(input) {
    if (!hydrating) return;
    var already_removed = false;
    var remove_defaults = () => {
      if (already_removed) return;
      already_removed = true;
      if (input.hasAttribute("value")) {
        var value = input.value;
        set_attribute2(input, "value", null);
        input.value = value;
      }
      if (input.hasAttribute("checked")) {
        var checked = input.checked;
        set_attribute2(input, "checked", null);
        input.checked = checked;
      }
    };
    input.__on_r = remove_defaults;
    queue_micro_task(remove_defaults);
    add_form_reset_listener();
  }
  function set_attribute2(element2, attribute, value, skip_warning) {
    var attributes = get_attributes(element2);
    if (hydrating) {
      attributes[attribute] = element2.getAttribute(attribute);
      if (attribute === "src" || attribute === "srcset" || attribute === "href" && element2.nodeName === LINK_TAG) {
        if (!skip_warning) {
          check_src_in_dev_hydration(element2, attribute, value ?? "");
        }
        return;
      }
    }
    if (attributes[attribute] === (attributes[attribute] = value)) return;
    if (attribute === "loading") {
      element2[LOADING_ATTR_SYMBOL] = value;
    }
    if (value == null) {
      element2.removeAttribute(attribute);
    } else if (typeof value !== "string" && get_setters(element2).includes(attribute)) {
      element2[attribute] = value;
    } else {
      element2.setAttribute(attribute, value);
    }
  }
  function get_attributes(element2) {
    return (
      /** @type {Record<string | symbol, unknown>} **/
      // @ts-expect-error
      element2.__attributes ??= {
        [IS_CUSTOM_ELEMENT]: element2.nodeName.includes("-"),
        [IS_HTML]: element2.namespaceURI === NAMESPACE_HTML
      }
    );
  }
  var setters_cache = /* @__PURE__ */ new Map();
  function get_setters(element2) {
    var cache_key = element2.getAttribute("is") || element2.nodeName;
    var setters = setters_cache.get(cache_key);
    if (setters) return setters;
    setters_cache.set(cache_key, setters = []);
    var descriptors;
    var proto = element2;
    var element_proto = Element.prototype;
    while (element_proto !== proto) {
      descriptors = get_descriptors(proto);
      for (var key2 in descriptors) {
        if (descriptors[key2].set) {
          setters.push(key2);
        }
      }
      proto = get_prototype_of(proto);
    }
    return setters;
  }
  function check_src_in_dev_hydration(element2, attribute, value) {
    if (!dev_fallback_default) return;
    if (attribute === "srcset" && srcset_url_equal(element2, value)) return;
    if (src_url_equal(element2.getAttribute(attribute) ?? "", value)) return;
    hydration_attribute_changed(
      attribute,
      element2.outerHTML.replace(element2.innerHTML, element2.innerHTML && "..."),
      String(value)
    );
  }
  function src_url_equal(element_src, url) {
    if (element_src === url) return true;
    return new URL(element_src, document.baseURI).href === new URL(url, document.baseURI).href;
  }
  function split_srcset(srcset) {
    return srcset.split(",").map((src) => src.trim().split(" ").filter(Boolean));
  }
  function srcset_url_equal(element2, srcset) {
    var element_urls = split_srcset(element2.srcset);
    var urls = split_srcset(srcset);
    return urls.length === element_urls.length && urls.every(
      ([url, width], i) => width === element_urls[i][1] && // We need to test both ways because Vite will create an a full URL with
      // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
      // relative URLs inside srcset are not automatically resolved to absolute URLs by
      // browsers (in contrast to img.src). This means both SSR and DOM code could
      // contain relative or absolute URLs.
      (src_url_equal(element_urls[i][0], url) || src_url_equal(url, element_urls[i][0]))
    );
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
  function bind_value(input, get3, set2 = get3) {
    var batches2 = /* @__PURE__ */ new WeakSet();
    listen_to_event_and_reset_event(input, "input", async (is_reset) => {
      if (dev_fallback_default && input.type === "checkbox") {
        bind_invalid_checkbox_value();
      }
      var value = is_reset ? input.defaultValue : input.value;
      value = is_numberlike_input(input) ? to_number(value) : value;
      set2(value);
      if (current_batch !== null) {
        batches2.add(current_batch);
      }
      await tick();
      if (value !== (value = get3())) {
        var start = input.selectionStart;
        var end = input.selectionEnd;
        var length = input.value.length;
        input.value = value ?? "";
        if (end !== null) {
          var new_length = input.value.length;
          if (start === end && end === length && new_length > length) {
            input.selectionStart = new_length;
            input.selectionEnd = new_length;
          } else {
            input.selectionStart = start;
            input.selectionEnd = Math.min(end, new_length);
          }
        }
      }
    });
    if (
      // If we are hydrating and the value has since changed,
      // then use the updated value from the input instead.
      hydrating && input.defaultValue !== input.value || // If defaultValue is set, then value == defaultValue
      // TODO Svelte 6: remove input.value check and set to empty string?
      untrack(get3) == null && input.value
    ) {
      set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
      if (current_batch !== null) {
        batches2.add(current_batch);
      }
    }
    render_effect(() => {
      if (dev_fallback_default && input.type === "checkbox") {
        bind_invalid_checkbox_value();
      }
      var value = get3();
      if (input === document.activeElement) {
        var batch = (
          /** @type {Batch} */
          async_mode_flag ? previous_batch : current_batch
        );
        if (batches2.has(batch)) {
          return;
        }
      }
      if (is_numberlike_input(input) && value === to_number(input.value)) {
        return;
      }
      if (input.type === "date" && !value && !input.value) {
        return;
      }
      if (value !== input.value) {
        input.value = value ?? "";
      }
    });
  }
  function bind_checked(input, get3, set2 = get3) {
    listen_to_event_and_reset_event(input, "change", (is_reset) => {
      var value = is_reset ? input.defaultChecked : input.checked;
      set2(value);
    });
    if (
      // If we are hydrating and the value has since changed,
      // then use the update value from the input instead.
      hydrating && input.defaultChecked !== input.checked || // If defaultChecked is set, then checked == defaultChecked
      untrack(get3) == null
    ) {
      set2(input.checked);
    }
    render_effect(() => {
      var value = get3();
      input.checked = Boolean(value);
    });
  }
  function is_numberlike_input(input) {
    var type = input.type;
    return type === "number" || type === "range";
  }
  function to_number(value) {
    return value === "" ? null : +value;
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/bindings/size.js
  var ResizeObserverSingleton = class _ResizeObserverSingleton {
    /** */
    #listeners = /* @__PURE__ */ new WeakMap();
    /** @type {ResizeObserver | undefined} */
    #observer;
    /** @type {ResizeObserverOptions} */
    #options;
    /** @static */
    static entries = /* @__PURE__ */ new WeakMap();
    /** @param {ResizeObserverOptions} options */
    constructor(options) {
      this.#options = options;
    }
    /**
     * @param {Element} element
     * @param {(entry: ResizeObserverEntry) => any} listener
     */
    observe(element2, listener) {
      var listeners2 = this.#listeners.get(element2) || /* @__PURE__ */ new Set();
      listeners2.add(listener);
      this.#listeners.set(element2, listeners2);
      this.#getObserver().observe(element2, this.#options);
      return () => {
        var listeners3 = this.#listeners.get(element2);
        listeners3.delete(listener);
        if (listeners3.size === 0) {
          this.#listeners.delete(element2);
          this.#observer.unobserve(element2);
        }
      };
    }
    #getObserver() {
      return this.#observer ?? (this.#observer = new ResizeObserver(
        /** @param {any} entries */
        (entries) => {
          for (var entry of entries) {
            _ResizeObserverSingleton.entries.set(entry.target, entry);
            for (var listener of this.#listeners.get(entry.target) || []) {
              listener(entry);
            }
          }
        }
      ));
    }
  };
  var resize_observer_border_box = /* @__PURE__ */ new ResizeObserverSingleton({
    box: "border-box"
  });
  function bind_element_size(element2, type, set2) {
    var unsub = resize_observer_border_box.observe(element2, () => set2(element2[type]));
    effect(() => {
      untrack(() => set2(element2[type]));
      return unsub;
    });
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
  function is_bound_this(bound_value, element_or_component) {
    return bound_value === element_or_component || bound_value?.[STATE_SYMBOL] === element_or_component;
  }
  function bind_this(element_or_component = {}, update2, get_value, get_parts) {
    var component_effect = (
      /** @type {ComponentContext} */
      component_context.r
    );
    var parent = (
      /** @type {Effect} */
      active_effect
    );
    effect(() => {
      var old_parts;
      var parts;
      render_effect(() => {
        old_parts = parts;
        parts = get_parts?.() || [];
        untrack(() => {
          if (element_or_component !== get_value(...parts)) {
            update2(element_or_component, ...parts);
            if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
              update2(null, ...old_parts);
            }
          }
        });
      });
      return () => {
        let p = parent;
        while (p !== component_effect && p.parent !== null && p.parent.f & DESTROYING) {
          p = p.parent;
        }
        const teardown2 = () => {
          if (parts && is_bound_this(get_value(...parts), element_or_component)) {
            update2(null, ...parts);
          }
        };
        const original_teardown = p.teardown;
        p.teardown = () => {
          teardown2();
          original_teardown?.();
        };
      };
    });
    return element_or_component;
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/bindings/window.js
  function bind_window_size(type, set2) {
    listen(window, ["resize"], () => without_reactive_context(() => set2(window[type])));
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/reactivity/props.js
  var spread_props_handler = {
    get(target, key2) {
      let i = target.props.length;
      while (i--) {
        let p = target.props[i];
        if (is_function(p)) p = p();
        if (typeof p === "object" && p !== null && key2 in p) return p[key2];
      }
    },
    set(target, key2, value) {
      let i = target.props.length;
      while (i--) {
        let p = target.props[i];
        if (is_function(p)) p = p();
        const desc = get_descriptor(p, key2);
        if (desc && desc.set) {
          desc.set(value);
          return true;
        }
      }
      return false;
    },
    getOwnPropertyDescriptor(target, key2) {
      let i = target.props.length;
      while (i--) {
        let p = target.props[i];
        if (is_function(p)) p = p();
        if (typeof p === "object" && p !== null && key2 in p) {
          const descriptor = get_descriptor(p, key2);
          if (descriptor && !descriptor.configurable) {
            descriptor.configurable = true;
          }
          return descriptor;
        }
      }
    },
    has(target, key2) {
      if (key2 === STATE_SYMBOL || key2 === LEGACY_PROPS) return false;
      for (let p of target.props) {
        if (is_function(p)) p = p();
        if (p != null && key2 in p) return true;
      }
      return false;
    },
    ownKeys(target) {
      const keys = [];
      for (let p of target.props) {
        if (is_function(p)) p = p();
        if (!p) continue;
        for (const key2 in p) {
          if (!keys.includes(key2)) keys.push(key2);
        }
        for (const key2 of Object.getOwnPropertySymbols(p)) {
          if (!keys.includes(key2)) keys.push(key2);
        }
      }
      return keys;
    }
  };
  function spread_props(...props) {
    return new Proxy({ props }, spread_props_handler);
  }
  function prop(props, key2, flags2, fallback2) {
    var runes = !legacy_mode_flag || (flags2 & PROPS_IS_RUNES) !== 0;
    var bindable = (flags2 & PROPS_IS_BINDABLE) !== 0;
    var lazy = (flags2 & PROPS_IS_LAZY_INITIAL) !== 0;
    var fallback_value = (
      /** @type {V} */
      fallback2
    );
    var fallback_dirty = true;
    var get_fallback = () => {
      if (fallback_dirty) {
        fallback_dirty = false;
        fallback_value = lazy ? untrack(
          /** @type {() => V} */
          fallback2
        ) : (
          /** @type {V} */
          fallback2
        );
      }
      return fallback_value;
    };
    let setter;
    if (bindable) {
      var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
      setter = get_descriptor(props, key2)?.set ?? (is_entry_props && key2 in props ? (v) => props[key2] = v : void 0);
    }
    var initial_value;
    var is_store_sub = false;
    if (bindable) {
      [initial_value, is_store_sub] = capture_store_binding(() => (
        /** @type {V} */
        props[key2]
      ));
    } else {
      initial_value = /** @type {V} */
      props[key2];
    }
    if (initial_value === void 0 && fallback2 !== void 0) {
      initial_value = get_fallback();
      if (setter) {
        if (runes) props_invalid_value(key2);
        setter(initial_value);
      }
    }
    var getter;
    if (runes) {
      getter = () => {
        var value = (
          /** @type {V} */
          props[key2]
        );
        if (value === void 0) return get_fallback();
        fallback_dirty = true;
        return value;
      };
    } else {
      getter = () => {
        var value = (
          /** @type {V} */
          props[key2]
        );
        if (value !== void 0) {
          fallback_value = /** @type {V} */
          void 0;
        }
        return value === void 0 ? fallback_value : value;
      };
    }
    if (runes && (flags2 & PROPS_IS_UPDATED) === 0) {
      return getter;
    }
    if (setter) {
      var legacy_parent = props.$$legacy;
      return (
        /** @type {() => V} */
        (function(value, mutation) {
          if (arguments.length > 0) {
            if (!runes || !mutation || legacy_parent || is_store_sub) {
              setter(mutation ? getter() : value);
            }
            return value;
          }
          return getter();
        })
      );
    }
    var overridden = false;
    var d = ((flags2 & PROPS_IS_IMMUTABLE) !== 0 ? derived : derived_safe_equal)(() => {
      overridden = false;
      return getter();
    });
    if (dev_fallback_default) {
      d.label = key2;
    }
    if (bindable) get2(d);
    var parent_effect = (
      /** @type {Effect} */
      active_effect
    );
    return (
      /** @type {() => V} */
      (function(value, mutation) {
        if (arguments.length > 0) {
          const new_value = mutation ? get2(d) : runes && bindable ? proxy(value) : value;
          set(d, new_value);
          overridden = true;
          if (fallback_value !== void 0) {
            fallback_value = new_value;
          }
          return value;
        }
        if (is_destroying_effect && overridden || (parent_effect.f & DESTROYED) !== 0) {
          return d.v;
        }
        return get2(d);
      })
    );
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/legacy/legacy-client.js
  function createClassComponent(options) {
    return new Svelte4Component(options);
  }
  var Svelte4Component = class {
    /** @type {any} */
    #events;
    /** @type {Record<string, any>} */
    #instance;
    /**
     * @param {ComponentConstructorOptions & {
     *  component: any;
     * }} options
     */
    constructor(options) {
      var sources = /* @__PURE__ */ new Map();
      var add_source = (key2, value) => {
        var s = mutable_source(value, false, false);
        sources.set(key2, s);
        return s;
      };
      const props = new Proxy(
        { ...options.props || {}, $$events: {} },
        {
          get(target, prop2) {
            return get2(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
          },
          has(target, prop2) {
            if (prop2 === LEGACY_PROPS) return true;
            get2(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
            return Reflect.has(target, prop2);
          },
          set(target, prop2, value) {
            set(sources.get(prop2) ?? add_source(prop2, value), value);
            return Reflect.set(target, prop2, value);
          }
        }
      );
      this.#instance = (options.hydrate ? hydrate : mount)(options.component, {
        target: options.target,
        anchor: options.anchor,
        props,
        context: options.context,
        intro: options.intro ?? false,
        recover: options.recover,
        transformError: options.transformError
      });
      if (!async_mode_flag && (!options?.props?.$$host || options.sync === false)) {
        flushSync();
      }
      this.#events = props.$$events;
      for (const key2 of Object.keys(this.#instance)) {
        if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
        define_property(this, key2, {
          get() {
            return this.#instance[key2];
          },
          /** @param {any} value */
          set(value) {
            this.#instance[key2] = value;
          },
          enumerable: true
        });
      }
      this.#instance.$set = /** @param {Record<string, any>} next */
      (next2) => {
        Object.assign(props, next2);
      };
      this.#instance.$destroy = () => {
        unmount(this.#instance);
      };
    }
    /** @param {Record<string, any>} props */
    $set(props) {
      this.#instance.$set(props);
    }
    /**
     * @param {string} event
     * @param {(...args: any[]) => any} callback
     * @returns {any}
     */
    $on(event2, callback) {
      this.#events[event2] = this.#events[event2] || [];
      const cb = (...args) => callback.call(this, ...args);
      this.#events[event2].push(cb);
      return () => {
        this.#events[event2] = this.#events[event2].filter(
          /** @param {any} fn */
          (fn) => fn !== cb
        );
      };
    }
    $destroy() {
      this.#instance.$destroy();
    }
  };

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/internal/client/dom/elements/custom-element.js
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      /** The Svelte component constructor */
      $$ctor;
      /** Slots */
      $$s;
      /** @type {any} The Svelte component instance */
      $$c;
      /** Whether or not the custom element is connected */
      $$cn = false;
      /** @type {Record<string, any>} Component props data */
      $$d = {};
      /** `true` if currently in the process of reflecting component props back to attributes */
      $$r = false;
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      $$p_d = {};
      /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
      $$l = {};
      /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
      $$l_u = /* @__PURE__ */ new Map();
      /** @type {any} The managed render effect for reflecting attributes */
      $$me;
      /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
      $$shadowRoot = null;
      /**
       * @param {*} $$componentCtor
       * @param {*} $$slots
       * @param {ShadowRootInit | undefined} shadow_root_init
       */
      constructor($$componentCtor, $$slots, shadow_root_init) {
        super();
        this.$$ctor = $$componentCtor;
        this.$$s = $$slots;
        if (shadow_root_init) {
          this.$$shadowRoot = this.attachShadow(shadow_root_init);
        }
      }
      /**
       * @param {string} type
       * @param {EventListenerOrEventListenerObject} listener
       * @param {boolean | AddEventListenerOptions} [options]
       */
      addEventListener(type, listener, options) {
        this.$$l[type] = this.$$l[type] || [];
        this.$$l[type].push(listener);
        if (this.$$c) {
          const unsub = this.$$c.$on(type, listener);
          this.$$l_u.set(listener, unsub);
        }
        super.addEventListener(type, listener, options);
      }
      /**
       * @param {string} type
       * @param {EventListenerOrEventListenerObject} listener
       * @param {boolean | AddEventListenerOptions} [options]
       */
      removeEventListener(type, listener, options) {
        super.removeEventListener(type, listener, options);
        if (this.$$c) {
          const unsub = this.$$l_u.get(listener);
          if (unsub) {
            unsub();
            this.$$l_u.delete(listener);
          }
        }
      }
      async connectedCallback() {
        this.$$cn = true;
        if (!this.$$c) {
          let create_slot = function(name) {
            return (anchor) => {
              const slot2 = create_element("slot");
              if (name !== "default") slot2.name = name;
              append(anchor, slot2);
            };
          };
          await Promise.resolve();
          if (!this.$$cn || this.$$c) {
            return;
          }
          const $$slots = {};
          const existing_slots = get_custom_elements_slots(this);
          for (const name of this.$$s) {
            if (name in existing_slots) {
              if (name === "default" && !this.$$d.children) {
                this.$$d.children = create_slot(name);
                $$slots.default = true;
              } else {
                $$slots[name] = create_slot(name);
              }
            }
          }
          for (const attribute of this.attributes) {
            const name = this.$$g_p(attribute.name);
            if (!(name in this.$$d)) {
              this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
            }
          }
          for (const key2 in this.$$p_d) {
            if (!(key2 in this.$$d) && this[key2] !== void 0) {
              this.$$d[key2] = this[key2];
              delete this[key2];
            }
          }
          this.$$c = createClassComponent({
            component: this.$$ctor,
            target: this.$$shadowRoot || this,
            props: {
              ...this.$$d,
              $$slots,
              $$host: this
            }
          });
          this.$$me = effect_root(() => {
            render_effect(() => {
              this.$$r = true;
              for (const key2 of object_keys(this.$$c)) {
                if (!this.$$p_d[key2]?.reflect) continue;
                this.$$d[key2] = this.$$c[key2];
                const attribute_value = get_custom_element_value(
                  key2,
                  this.$$d[key2],
                  this.$$p_d,
                  "toAttribute"
                );
                if (attribute_value == null) {
                  this.removeAttribute(this.$$p_d[key2].attribute || key2);
                } else {
                  this.setAttribute(this.$$p_d[key2].attribute || key2, attribute_value);
                }
              }
              this.$$r = false;
            });
          });
          for (const type in this.$$l) {
            for (const listener of this.$$l[type]) {
              const unsub = this.$$c.$on(type, listener);
              this.$$l_u.set(listener, unsub);
            }
          }
          this.$$l = {};
        }
      }
      // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
      // and setting attributes through setAttribute etc, this is helpful
      /**
       * @param {string} attr
       * @param {string} _oldValue
       * @param {string} newValue
       */
      attributeChangedCallback(attr2, _oldValue, newValue) {
        if (this.$$r) return;
        attr2 = this.$$g_p(attr2);
        this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
        this.$$c?.$set({ [attr2]: this.$$d[attr2] });
      }
      disconnectedCallback() {
        this.$$cn = false;
        Promise.resolve().then(() => {
          if (!this.$$cn && this.$$c) {
            this.$$c.$destroy();
            this.$$me();
            this.$$c = void 0;
          }
        });
      }
      /**
       * @param {string} attribute_name
       */
      $$g_p(attribute_name) {
        return object_keys(this.$$p_d).find(
          (key2) => this.$$p_d[key2].attribute === attribute_name || !this.$$p_d[key2].attribute && key2.toLowerCase() === attribute_name
        ) || attribute_name;
      }
    };
  }
  function get_custom_element_value(prop2, value, props_definition, transform) {
    const type = props_definition[prop2]?.type;
    value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
    if (!transform || !props_definition[prop2]) {
      return value;
    } else if (transform === "toAttribute") {
      switch (type) {
        case "Object":
        case "Array":
          return value == null ? null : JSON.stringify(value);
        case "Boolean":
          return value ? "" : null;
        case "Number":
          return value == null ? null : value;
        default:
          return value;
      }
    } else {
      switch (type) {
        case "Object":
        case "Array":
          return value && JSON.parse(value);
        case "Boolean":
          return value;
        // conversion already handled above
        case "Number":
          return value != null ? +value : value;
        default:
          return value;
      }
    }
  }
  function get_custom_elements_slots(element2) {
    const result = {};
    element2.childNodes.forEach((node) => {
      result[
        /** @type {Element} node */
        node.slot || "default"
      ] = true;
    });
    return result;
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/transition/index.js
  var linear2 = (x) => x;
  function cubic_out(t) {
    const f = t - 1;
    return f * f * f + 1;
  }
  function fade(node, { delay = 0, duration = 400, easing = linear2 } = {}) {
    const o = +getComputedStyle(node).opacity;
    return {
      delay,
      duration,
      easing,
      css: (t) => `opacity: ${t * o}`
    };
  }
  var slide_warning = false;
  function slide(node, { delay = 0, duration = 400, easing = cubic_out, axis = "y" } = {}) {
    const style = getComputedStyle(node);
    if (dev_fallback_default && !slide_warning && /(contents|inline|table)/.test(style.display)) {
      slide_warning = true;
      Promise.resolve().then(() => slide_warning = false);
      transition_slide_display(style.display);
    }
    const opacity = +style.opacity;
    const primary_property = axis === "y" ? "height" : "width";
    const primary_property_value = parseFloat(style[primary_property]);
    const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
    const capitalized_secondary_properties = secondary_properties.map(
      (e) => (
        /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
        `${e[0].toUpperCase()}${e.slice(1)}`
      )
    );
    const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
    const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
    const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
    const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
    const border_width_start_value = parseFloat(
      style[`border${capitalized_secondary_properties[0]}Width`]
    );
    const border_width_end_value = parseFloat(
      style[`border${capitalized_secondary_properties[1]}Width`]
    );
    return {
      delay,
      duration,
      easing,
      css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;min-${primary_property}: 0`
    };
  }

  // ../../packages/blender-elements/src/icons.ts
  var svg = {
    collapsed: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.4707 4.75001C5.20607 4.76561 4.99957 4.98493 5 5.25001V9.50001C5.00017 9.85719 5.36395 10.099 5.69336 9.96095L10.4434 7.96095C10.8411 7.79354 10.8542 7.2348 10.4649 7.04884L5.71486 4.79884C5.63886 4.76224 5.5549 4.74541 5.4707 4.75001V4.75001Z" fill="white"/>
</svg>`,
    expanded: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.25002 5C4.88275 5.00029 4.64109 5.38318 4.79885 5.71484L7.04885 10.4648C7.2301 10.8441 7.76994 10.8441 7.95119 10.4648L10.2012 5.71484C10.3589 5.38318 10.1173 5.00029 9.75002 5H5.25002Z" fill="white"/>
</svg>`,
    "eye-opened": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49964 3C4.2218 2.99906 2.46364 5.7211 1.13636 7.16211C0.959918 7.35357 0.959918 7.64838 1.13636 7.83984C2.46386 9.28108 4.22229 11.9998 7.49964 12.002C10.7776 12.004 12.5357 9.28077 13.8629 7.83984C14.0394 7.64838 14.0394 7.35357 13.8629 7.16211C12.5355 5.72096 10.7772 3.00094 7.49964 3ZM7.49964 4C7.95927 4 8.41439 4.09053 8.83903 4.26642C9.26367 4.44231 9.64952 4.70011 9.97452 5.02512C10.2995 5.35012 10.5573 5.73597 10.7332 6.16061C10.9091 6.58525 10.9996 7.04037 10.9996 7.5C10.9996 7.95963 10.9091 8.41475 10.7332 8.83939C10.5573 9.26403 10.2995 9.64988 9.97452 9.97488C9.64952 10.2999 9.26367 10.5577 8.83903 10.7336C8.41439 10.9095 7.95927 11 7.49964 11C7.04001 11 6.58489 10.9095 6.16025 10.7336C5.73561 10.5577 5.34976 10.2999 5.02476 9.97488C4.69975 9.64988 4.44195 9.26403 4.26606 8.83939C4.09017 8.41475 3.99964 7.95963 3.99964 7.5C3.99964 7.04037 4.09017 6.58525 4.26606 6.16061C4.44195 5.73597 4.69975 5.35012 5.02476 5.02512C5.34976 4.70011 5.73561 4.44231 6.16025 4.26642C6.58489 4.09053 7.04001 4 7.49964 4ZM7.49964 6C7.30266 6 7.10762 6.03878 6.92563 6.11417C6.74365 6.18955 6.57826 6.30004 6.43897 6.43933C6.29968 6.57862 6.18922 6.74398 6.11384 6.92596C6.03845 7.10795 5.99964 7.30302 5.99964 7.5C5.99964 7.69698 6.03845 7.89205 6.11384 8.07404C6.18922 8.25602 6.29968 8.42138 6.43897 8.56067C6.57826 8.69996 6.74365 8.81045 6.92563 8.88583C7.10762 8.96122 7.30266 9 7.49964 9C7.69662 9 7.89169 8.96122 8.07368 8.88583C8.25566 8.81045 8.42102 8.69996 8.56031 8.56067C8.6996 8.42138 8.81009 8.25602 8.88547 8.07404C8.96086 7.89205 8.99964 7.69698 8.99964 7.5C8.99964 7.30302 8.96086 7.10795 8.88547 6.92596C8.81009 6.74398 8.6996 6.57862 8.56031 6.43933C8.42102 6.30004 8.25566 6.18955 8.07368 6.11417C7.89169 6.03878 7.69662 6 7.49964 6V6Z" fill="white"/>
</svg>`,
    "eye-closed": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M1.50172 7.00001C1.40664 7.00579 1.3152 7.0386 1.23814 7.09459C1.16107 7.15057 1.1016 7.22739 1.06672 7.31602C1.03184 7.40466 1.02299 7.50143 1.04124 7.59492C1.05948 7.68841 1.10404 7.77474 1.16969 7.84376C2.49359 9.28193 4.25209 12.002 7.51539 12.002C10.7787 12.002 12.5391 9.28193 13.863 7.84376C13.9075 7.79542 13.9421 7.73877 13.9647 7.67708C13.9873 7.61538 13.9975 7.54983 13.9948 7.48418C13.9921 7.41852 13.9765 7.35406 13.9488 7.29445C13.9212 7.23483 13.8821 7.18123 13.8337 7.13673C13.7854 7.09223 13.7288 7.05769 13.6671 7.03508C13.6054 7.01247 13.5398 7.00224 13.4742 7.00496C13.4085 7.00768 13.344 7.02331 13.2844 7.05095C13.2248 7.07859 13.1712 7.11768 13.1267 7.16603C11.6912 8.72549 10.2206 11.002 7.51539 11.002C4.81014 11.002 3.33962 8.72549 1.90406 7.16603C1.85384 7.10982 1.79158 7.06569 1.7219 7.03694C1.65223 7.00819 1.57696 6.99557 1.50172 7.00001Z" fill="white"/>
</svg>`,
    "chevron-right": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.49412 3.99414C6.39453 3.99416 6.29722 4.02391 6.21465 4.07959C6.13208 4.13527 6.06801 4.21432 6.03066 4.30664C5.99332 4.39896 5.98439 4.50035 6.00502 4.59778C6.02565 4.69521 6.0749 4.78426 6.14647 4.85352L9.79295 8.5L6.14647 12.1465C6.09851 12.1926 6.06022 12.2477 6.03385 12.3088C6.00748 12.3698 5.99355 12.4356 5.99288 12.5021C5.99222 12.5686 6.00483 12.6345 6.02997 12.6961C6.05511 12.7577 6.09229 12.8136 6.13932 12.8607C6.18635 12.9077 6.24229 12.9449 6.30386 12.97C6.36543 12.9952 6.4314 13.0077 6.49791 13.0071C6.56441 13.0064 6.63012 12.9925 6.69118 12.9661C6.75224 12.9398 6.80742 12.9015 6.8535 12.8535L10.8535 8.85352C10.9472 8.75974 10.9999 8.63259 10.9999 8.5C10.9999 8.36741 10.9472 8.24026 10.8535 8.14648L6.8535 4.14648C6.80687 4.09829 6.75103 4.05998 6.68929 4.03381C6.62755 4.00764 6.56118 3.99414 6.49412 3.99414V3.99414Z" fill="#f9f9f9"/>
</svg>`,
    "chevron-left": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.49861 3.99414C9.5982 3.99416 9.69552 4.02391 9.77809 4.07959C9.86066 4.13527 9.92472 4.21432 9.96207 4.30664C9.99942 4.39896 10.0083 4.50035 9.98772 4.59778C9.96709 4.69521 9.91783 4.78426 9.84627 4.85352L6.19978 8.5L9.84627 12.1465C9.89423 12.1926 9.93252 12.2477 9.95889 12.3088C9.98526 12.3698 9.99919 12.4356 9.99985 12.5021C10.0005 12.5686 9.98791 12.6345 9.96277 12.6961C9.93762 12.7577 9.90045 12.8136 9.85342 12.8607C9.80639 12.9077 9.75045 12.9449 9.68888 12.97C9.62731 12.9952 9.56133 13.0077 9.49483 13.0071C9.42832 13.0064 9.36262 12.9925 9.30156 12.9661C9.2405 12.9398 9.18532 12.9015 9.13924 12.8535L5.13924 8.85352C5.0455 8.75974 4.99285 8.63259 4.99285 8.5C4.99285 8.36741 5.0455 8.24026 5.13924 8.14648L9.13924 4.14648C9.18587 4.09829 9.24171 4.05998 9.30345 4.03381C9.36518 4.00764 9.43156 3.99414 9.49861 3.99414V3.99414Z" fill="white"/>
</svg>`,
    "chevron-down": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49021 5.99416C3.39045 5.99379 3.29287 6.02329 3.20999 6.07882C3.12712 6.13435 3.06274 6.21335 3.02515 6.30575C2.98756 6.39815 2.97846 6.4997 2.99903 6.59731C3.0196 6.69493 3.06891 6.78417 3.1406 6.85354L7.1406 10.8535C7.23437 10.9473 7.36153 11 7.49411 11C7.6267 11 7.75386 10.9473 7.84763 10.8535L11.8476 6.85354C11.8956 6.80746 11.9338 6.7523 11.9602 6.69125C11.9865 6.6302 12.0004 6.5645 12.0011 6.49801C12.0018 6.43152 11.9892 6.36554 11.964 6.30398C11.9389 6.24242 11.9017 6.18651 11.8547 6.13949C11.8077 6.09247 11.7517 6.05526 11.6902 6.03011C11.6286 6.00497 11.5627 5.99235 11.4962 5.99301C11.4297 5.99366 11.364 6.00761 11.3029 6.03396C11.2419 6.06031 11.1867 6.09857 11.1406 6.14651L7.49411 9.79299L3.84763 6.14651C3.80123 6.09855 3.74572 6.06037 3.68433 6.0342C3.62294 6.00804 3.55694 5.99442 3.49021 5.99416V5.99416Z" fill="white"/>
</svg>`,
    search: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0071 1C7.25939 1 5.00712 3.25226 5.00712 6C5.00712 7.1945 5.44861 8.28163 6.15556 9.14453L1.1536 14.1465C1.10564 14.1926 1.06736 14.2477 1.04099 14.3088C1.01462 14.3698 1.00069 14.4356 1.00003 14.5021C0.999359 14.5686 1.01197 14.6345 1.03711 14.6961C1.06226 14.7577 1.09943 14.8136 1.14646 14.8607C1.19348 14.9077 1.24943 14.9449 1.311 14.97C1.37257 14.9952 1.43854 15.0077 1.50505 15.0071C1.57155 15.0064 1.63726 14.9925 1.69831 14.9661C1.75937 14.9398 1.81456 14.9015 1.86064 14.8535L6.86259 9.85156C7.72549 10.5585 8.81262 11 10.0071 11C12.7549 11 15.0071 8.74773 15.0071 6C15.0071 3.25226 12.7549 1 10.0071 1ZM10.0071 2C12.2094 2 14.0071 3.79773 14.0071 6C14.0071 8.20226 12.2094 10 10.0071 10C7.80485 10 6.00712 8.20226 6.00712 6C6.00712 3.79773 7.80485 2 10.0071 2Z" fill="white"/>
</svg>`,
    cross: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8635 4.14683C11.9557 4.24194 12.0064 4.36975 12.0044 4.50219C12.0025 4.63463 11.9481 4.76088 11.8531 4.85325L8.70638 8.00001L11.8531 11.1468C11.9031 11.1923 11.9433 11.2475 11.9714 11.3091C11.9994 11.3706 12.0146 11.4372 12.0162 11.5048C12.0178 11.5724 12.0056 11.6396 11.9805 11.7023C11.9553 11.7651 11.9177 11.8221 11.8699 11.8699C11.8221 11.9177 11.7651 11.9554 11.7023 11.9805C11.6395 12.0057 11.5723 12.0178 11.5047 12.0162C11.4371 12.0147 11.3706 11.9994 11.309 11.9714C11.2475 11.9434 11.1923 11.9032 11.1467 11.8532L7.99997 8.70643L4.8532 11.8532C4.80765 11.9032 4.75244 11.9434 4.69091 11.9714C4.62937 11.9994 4.56282 12.0147 4.49522 12.0163C4.42762 12.0178 4.3604 12.0057 4.29764 11.9805C4.23488 11.9554 4.17786 11.9177 4.13005 11.8699C4.08224 11.8221 4.04461 11.7651 4.01946 11.7023C3.99431 11.6396 3.98216 11.5724 3.98373 11.5048C3.98529 11.4372 4.00055 11.3706 4.02858 11.3091C4.0566 11.2475 4.09682 11.1923 4.14679 11.1468L7.29355 8.00001L4.14679 4.85325C4.09682 4.8077 4.05659 4.75249 4.02857 4.69096C4.00054 4.62943 3.9853 4.56286 3.98374 4.49526C3.98217 4.42766 3.99432 4.36044 4.01947 4.29768C4.04462 4.23492 4.08224 4.17791 4.13005 4.1301C4.17786 4.08229 4.23487 4.04467 4.29763 4.01952C4.3604 3.99437 4.42762 3.98222 4.49521 3.98378C4.56281 3.98535 4.62938 4.00059 4.69091 4.02861C4.75245 4.05664 4.80765 4.09686 4.8532 4.14683L7.99997 7.2936L11.1467 4.14683C11.1933 4.09895 11.249 4.06088 11.3106 4.03489C11.3722 4.0089 11.4383 3.99551 11.5051 3.99551C11.5719 3.99551 11.6381 4.0089 11.6996 4.03489C11.7612 4.06089 11.8169 4.09894 11.8635 4.14683Z" fill="white"/>
</svg>`,
    copy: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M9.51559 1C9.23947 1.00003 9.01563 1.22387 9.01559 1.5V2H7.51559C7.18694 2.005 6.99997 2.25232 6.99997 2.5V3H9.51559H10.5156H13V2.5C13 2.24733 12.8509 2.00474 12.5156 2H11.0156V1.5C11.0156 1.22387 10.7917 1.00003 10.5156 1H9.51559ZM13 3L13.0156 3.5V4H7.01556V3.5L6.99997 3H5.51559C5.23947 3.00003 5.01563 3.22387 5.01559 3.5V7H7.32419C7.37794 6.9925 7.43205 6.98793 7.4863 6.9863C7.70347 6.98018 7.91938 7.02131 8.11909 7.10684C8.31881 7.19237 8.49757 7.32027 8.64301 7.48167C8.78844 7.64308 8.89708 7.83414 8.96141 8.04166C9.02574 8.24917 9.04423 8.4682 9.01559 8.68356V13H14.5156C14.7917 13 15.0156 12.7761 15.0156 12.5V3.5C15.0156 3.22387 14.7917 3.00003 14.5156 3H13Z" fill="white"/>
<path d="M7.50582 7.99609C7.48883 7.99656 7.47188 7.99789 7.45503 8.00009H3.51556C3.4493 7.99915 3.38353 8.01139 3.32205 8.0361C3.26056 8.06081 3.2046 8.09749 3.15742 8.14401C3.11023 8.19053 3.07276 8.24597 3.04719 8.3071C3.02162 8.36822 3.00845 8.43383 3.00845 8.50009C3.00845 8.56635 3.02162 8.63195 3.04719 8.69308C3.07276 8.75421 3.11023 8.80965 3.15742 8.85617C3.2046 8.90269 3.26056 8.93937 3.32205 8.96408C3.38353 8.98878 3.4493 9.00103 3.51556 9.00009H6.30853L1.16206 14.1466C1.11409 14.1926 1.07579 14.2478 1.04942 14.3089C1.02304 14.3699 1.00912 14.4357 1.00845 14.5022C1.00778 14.5687 1.02038 14.6346 1.04553 14.6962C1.07067 14.7578 1.10786 14.8137 1.15489 14.8608C1.20192 14.9078 1.25785 14.945 1.31942 14.9701C1.381 14.9953 1.44697 15.0079 1.51348 15.0072C1.57999 15.0065 1.64571 14.9926 1.70677 14.9662C1.76783 14.9399 1.82301 14.9016 1.86909 14.8536L7.01556 9.70712V12.5C7.01462 12.5663 7.02686 12.632 7.05157 12.6935C7.07628 12.755 7.11296 12.811 7.15948 12.8582C7.206 12.9053 7.26144 12.9428 7.32257 12.9684C7.38369 12.994 7.4493 13.0071 7.51556 13.0071C7.58182 13.0071 7.64742 12.994 7.70855 12.9684C7.76968 12.9428 7.82512 12.9053 7.87164 12.8582C7.91816 12.811 7.95484 12.755 7.97955 12.6935C8.00425 12.632 8.0165 12.5663 8.01556 12.5V8.55664C8.02429 8.48525 8.01752 8.41281 7.99571 8.34428C7.97389 8.27575 7.93754 8.21274 7.88915 8.15953C7.84077 8.10632 7.78148 8.06417 7.71533 8.03596C7.64917 8.00776 7.5777 7.99416 7.50581 7.99609H7.50582Z" fill="white"/>
</svg>`,
    warning: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.01168 0.99997C7.32174 0.99597 6.68595 1.3851 6.37691 2.00192L1.18941 12.373C0.595165 13.5605 1.48251 14.9992 2.81051 15H13.1894C14.5167 14.9992 15.4028 13.5621 14.8105 12.375L9.62301 2.00192C9.31771 1.39255 8.69329 1.00457 8.01168 0.99997ZM6.99996 3.99997H8.99996V9.99997H6.99996V3.99997ZM6.99996 11H8.99996V13H6.99996V11Z" fill="white"/>
</svg>`,
    error: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 1C4.13992 1 1 4.13991 1 8C1 11.8601 4.13992 15 8 15C11.8601 15 15 11.8601 15 8C15 4.13991 11.8601 1 8 1ZM10.9902 3.98633C11.1917 3.98158 11.3898 4.0378 11.5588 4.14758C11.7277 4.25736 11.8595 4.41558 11.937 4.60156C12.0145 4.78755 12.034 4.99263 11.993 5.18988C11.9519 5.38713 11.8523 5.56738 11.707 5.70703L9.41406 8L11.707 10.293C11.803 10.3851 11.8796 10.4955 11.9324 10.6176C11.9852 10.7397 12.0131 10.8712 12.0145 11.0042C12.0158 11.1373 11.9906 11.2693 11.9403 11.3925C11.89 11.5156 11.8157 11.6275 11.7216 11.7216C11.6275 11.8157 11.5156 11.89 11.3924 11.9403C11.2692 11.9906 11.1373 12.0158 11.0042 12.0145C10.8712 12.0131 10.7397 11.9852 10.6176 11.9324C10.4955 11.8796 10.3851 11.803 10.293 11.707L8 9.41406L5.70703 11.707C5.61489 11.803 5.50452 11.8796 5.38239 11.9324C5.26026 11.9852 5.12882 12.0131 4.99577 12.0145C4.86273 12.0158 4.73076 11.9906 4.60757 11.9403C4.48439 11.89 4.37249 11.8157 4.2784 11.7216C4.18432 11.6275 4.10996 11.5156 4.05967 11.3925C4.00938 11.2693 3.98418 11.1373 3.98553 11.0042C3.98689 10.8712 4.01478 10.7397 4.06757 10.6176C4.12036 10.4955 4.19699 10.3851 4.29297 10.293L6.58594 8L4.29297 5.70703C4.15041 5.56828 4.05246 5.3902 4.01166 5.1955C3.97085 5.00079 3.98904 4.79833 4.0639 4.61401C4.13875 4.4297 4.26688 4.27188 4.43189 4.16077C4.5969 4.04965 4.7913 3.99029 4.99023 3.99023C5.12388 3.99024 5.25617 4.01703 5.37928 4.06903C5.5024 4.12103 5.61384 4.19717 5.70703 4.29297L8 6.58594L10.293 4.29297C10.4758 4.10278 10.7265 3.99256 10.9902 3.98633V3.98633Z" fill="white"/>
</svg>`,
    checkbox: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6811 3.58826L5.32765 9.78696L1.89453 6.66595L3.10534 5.33405L5.17222 7.21304L9.3188 2.41174L10.6811 3.58826Z" fill="white"/>
</svg>`,
    selectable: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49123 3C3.14153 3.006 2.90637 3.36077 3.03618 3.68555L7.03618 13.6875C7.21408 14.1378 7.86424 14.0977 7.9854 13.6289L9.16118 9.16016L13.6279 7.98438C14.0929 7.86117 14.1328 7.21669 13.6866 7.03711L3.68657 3.03516C3.62447 3.01046 3.55803 2.99857 3.49123 3.00007V3Z" fill="white"/>
</svg>`,
    unselectable: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M3.49078 3C3.40987 3.00149 3.33053 3.0226 3.25957 3.06152C3.18862 3.10043 3.12818 3.15599 3.08343 3.22341C3.03867 3.29084 3.01096 3.36811 3.00265 3.4486C2.99434 3.5291 3.00566 3.6104 3.0357 3.68554L7.0357 13.6875C7.06006 13.7485 7.09621 13.8042 7.14208 13.8513C7.18795 13.8983 7.24267 13.9359 7.30306 13.9618C7.36346 13.9878 7.42835 14.0016 7.49407 14.0024C7.55979 14.0033 7.62504 13.9912 7.68609 13.9668C7.74713 13.9424 7.80277 13.9063 7.84985 13.8604C7.89692 13.8145 7.93451 13.7599 7.96044 13.6995C7.98638 13.6391 8.00015 13.5741 8.001 13.5084C8.00185 13.4427 7.98975 13.3774 7.96538 13.3164L4.39898 4.39843L13.315 7.96484C13.3765 7.99253 13.443 8.00749 13.5104 8.00881C13.5779 8.01014 13.6449 7.99781 13.7074 7.97256C13.77 7.94731 13.8268 7.90964 13.8744 7.86187C13.922 7.8141 13.9595 7.7572 13.9845 7.69458C14.0096 7.63195 14.0217 7.5649 14.0202 7.49746C14.0186 7.43003 14.0035 7.36357 13.9756 7.30215C13.9477 7.24073 13.9077 7.18559 13.8579 7.14004C13.8082 7.09449 13.7497 7.05948 13.6861 7.0371L3.68609 3.03515C3.62398 3.0105 3.55758 2.99855 3.49078 3V3Z" fill="white"/>
</svg>`,
    scene: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.48242 1C5.29282 1.007 5.12337 1.12023 5.04492 1.29297L1.27148 9.54297C1.27014 9.54597 1.26884 9.54998 1.26757 9.55298C1.15875 9.80634 1 10.1012 1 10.5C1 11.3381 1.52617 12.0347 2.29688 12.4219C3.06758 12.809 4.087 12.9777 5.32031 12.9941C5.61568 12.9971 5.84959 12.7455 5.82422 12.4512C5.82517 12.462 5.81313 12.0726 5.80859 11.7422C5.80409 11.4117 5.80079 11.0724 5.80079 11C5.80079 9.13232 6.81641 7.48086 8.32032 6.5625C8.54869 6.42322 8.627 6.12889 8.49806 5.89453L5.9375 1.25781C5.84642 1.09307 5.67055 0.993431 5.48242 1ZM13 1C11.9014 1 11 1.90136 11 3C11 4.09864 11.9014 5 13 5C14.0986 5 15 4.09864 15 3C15 1.90136 14.0986 1 13 1ZM11 7C8.79678 7 7 8.79678 7 11C7 13.2032 8.79678 15 11 15C13.2032 15 15 13.2032 15 11C15 8.79678 13.2032 7 11 7ZM11 8C12.6628 8 14 9.33722 14 11C14 12.6628 12.6628 14 11 14C9.33722 14 8 12.6628 8 11C8 9.33722 9.33722 8 11 8ZM10.459 9.0332C9.65874 9.0332 9 9.69389 9 10.4941C8.99906 10.5604 9.0113 10.6262 9.03601 10.6877C9.06072 10.7491 9.0974 10.8051 9.14392 10.8523C9.19044 10.8995 9.24588 10.937 9.30701 10.9625C9.36814 10.9881 9.43374 11.0013 9.5 11.0013C9.56626 11.0013 9.63186 10.9881 9.69299 10.9625C9.75412 10.937 9.80956 10.8995 9.85608 10.8523C9.9026 10.8051 9.93928 10.7491 9.96399 10.6877C9.9887 10.6262 10.0009 10.5604 10 10.4941C10 10.2343 10.1992 10.0332 10.459 10.0332C10.5252 10.0341 10.591 10.0219 10.6525 9.99719C10.714 9.97249 10.77 9.93581 10.8171 9.88928C10.8643 9.84276 10.9018 9.78733 10.9274 9.7262C10.9529 9.66507 10.9661 9.59947 10.9661 9.5332C10.9661 9.46694 10.9529 9.40134 10.9274 9.34021C10.9018 9.27908 10.8643 9.22365 10.8171 9.17712C10.77 9.1306 10.714 9.09392 10.6525 9.06921C10.591 9.04451 10.5252 9.03227 10.459 9.0332Z" fill="white"/>
</svg>`,
    object: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M1.49994 1C1.36733 1.00001 1.24017 1.05269 1.1464 1.14645C1.05264 1.24022 0.999952 1.3674 0.999939 1.5V5H1.99994V2H4.99994V1H1.49994ZM10.9999 1V2H13.9999V5H14.9999V1.5C14.9999 1.3674 14.9472 1.24022 14.8535 1.14645C14.7597 1.05269 14.6325 1.00001 14.4999 1H10.9999ZM0.999939 11V14.5C0.999952 14.6326 1.05264 14.7598 1.1464 14.8535C1.24017 14.9473 1.36733 15 1.49994 15H4.99994V14H1.99994V11H0.999939ZM13.9999 11V14H10.9999V15H14.4999C14.6325 15 14.7597 14.9473 14.8535 14.8535C14.9472 14.7598 14.9999 14.6326 14.9999 14.5V11H13.9999Z" fill="#e09558"/>
<path d="M4.49994 4C4.22381 4.00003 3.99997 4.22387 3.99994 4.5V11.5C3.99997 11.7761 4.22381 12 4.49994 12H11.4999C11.7761 12 11.9999 11.7761 11.9999 11.5V4.5C11.9999 4.22387 11.7761 4.00003 11.4999 4H4.49994Z" fill="#e09558"/>
</svg>`,
    text: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 1C5.41288 1 4.02184 2.04607 3.10938 3.1875C3.02649 3.2911 2.98817 3.42338 3.00282 3.55524C3.01747 3.6871 3.0839 3.80774 3.1875 3.89062C3.2911 3.97351 3.42339 4.01184 3.55525 3.99719C3.68711 3.98254 3.80774 3.9161 3.89062 3.8125C4.69049 2.81193 5.73439 2 7.5 2C9.59839 2 10.6341 2.87695 11.252 3.94531C11.8698 5.01367 12 6.31651 12 7H6.75C5.47656 7 4.30676 7.36418 3.43555 8.05469C2.56434 8.7452 2.00781 9.7826 2.00781 11C2.00781 12.2174 2.56434 13.2548 3.43555 13.9453C4.30676 14.6358 5.47656 15 6.75 15H7.5C9.25558 15 10.8877 14.0332 12.0371 12.9668C12.1152 13.4998 12.3266 13.9711 12.6777 14.3223C13.1286 14.7731 13.775 15 14.5 15C14.5663 15.0009 14.632 14.9887 14.6935 14.964C14.755 14.9393 14.811 14.9026 14.8582 14.8561C14.9053 14.8096 14.9428 14.7541 14.9684 14.693C14.994 14.6319 15.0071 14.5663 15.0071 14.5C15.0071 14.4337 14.994 14.3681 14.9684 14.307C14.9428 14.2459 14.9053 14.1904 14.8582 14.1439C14.811 14.0974 14.755 14.0607 14.6935 14.036C14.632 14.0113 14.5663 13.9991 14.5 14C13.975 14 13.6214 13.8519 13.3848 13.6152C13.1481 13.3786 13 13.025 13 12.5V7C13 6.20279 12.8776 4.75678 12.1191 3.44531C11.3607 2.13385 9.89646 1 7.5 1ZM6.75 8H12V11.5605C11.0458 12.6847 9.18875 14 7.5 14H6.75C5.66899 14 4.71813 13.6844 4.05664 13.1602C3.39515 12.6359 3.00781 11.9234 3.00781 11C3.00781 10.0766 3.39515 9.36413 4.05664 8.83984C4.71813 8.31555 5.66899 8 6.75 8Z" fill="#00D093"/>
</svg>`,
    bold: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.00002 1C3.73481 1.00003 3.48047 1.10538 3.29294 1.29291C3.10541 1.48044 3.00005 1.73479 3.00002 2V7.83203C2.98217 7.94002 2.98217 8.05021 3.00002 8.1582V14C3.00005 14.2652 3.10541 14.5196 3.29294 14.7071C3.48047 14.8946 3.73481 15 4.00002 15H10C12.1973 15 14 13.1973 14 11C14 9.23253 12.8148 7.77201 11.2149 7.24805C11.6724 6.59788 12 5.84948 12 5C12 2.80271 10.1973 1 8.00002 1H4.00002ZM5.00002 3H8.00002C9.11643 3 10 3.88359 10 5C10 6.11641 9.11643 7 8.00002 7H5.00002V3ZM5.00002 9H8.00002H10C11.1164 9 12 9.88359 12 11C12 12.1164 11.1164 13 10 13H5.00002V9Z" fill="white"/>
</svg>`,
    italic: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49217 0.999989C7.42592 0.999052 7.36014 1.01129 7.29866 1.036C7.23718 1.06071 7.1812 1.09739 7.13402 1.14391C7.08683 1.19043 7.04938 1.24587 7.0238 1.307C6.99823 1.36812 6.98505 1.43373 6.98505 1.49999C6.98505 1.56625 6.99823 1.63185 7.0238 1.69298C7.04938 1.75411 7.08683 1.80955 7.13402 1.85607C7.1812 1.90259 7.23718 1.93927 7.29866 1.96398C7.36014 1.98869 7.42592 2.00093 7.49217 1.99999H9.99608L9.99408 2.14257L5.0351 13.5508C5.00602 13.6179 4.99203 13.6906 4.99409 13.7637L4.99998 14H2.49217C2.42592 13.9991 2.36014 14.0113 2.29866 14.036C2.23718 14.0607 2.1812 14.0974 2.13402 14.1439C2.08683 14.1904 2.04938 14.2459 2.0238 14.307C1.99823 14.3681 1.98505 14.4337 1.98505 14.5C1.98505 14.5663 1.99823 14.6319 2.0238 14.693C2.04938 14.7541 2.08683 14.8095 2.13402 14.8561C2.1812 14.9026 2.23718 14.9393 2.29866 14.964C2.36014 14.9887 2.42592 15.0009 2.49217 15H8.49217C8.55843 15.0009 8.62422 14.9887 8.6857 14.964C8.74718 14.9393 8.80314 14.9026 8.85033 14.8561C8.89751 14.8095 8.93498 14.7541 8.96056 14.693C8.98613 14.6319 8.9993 14.5663 8.9993 14.5C8.9993 14.4337 8.98613 14.3681 8.96056 14.307C8.93498 14.2459 8.89751 14.1904 8.85033 14.1439C8.80314 14.0974 8.74718 14.0607 8.6857 14.036C8.62422 14.0113 8.55843 13.9991 8.49217 14H5.99998C6.00005 13.9954 6.00005 13.9909 5.99998 13.9863L5.99599 13.8476L10.9511 2.44918C10.9772 2.3887 10.9911 2.32365 10.9921 2.25777L10.9961 1.99999H13.4922C13.5584 2.00093 13.6242 1.98869 13.6857 1.96398C13.7472 1.93927 13.8031 1.90259 13.8503 1.85607C13.8975 1.80955 13.935 1.75411 13.9606 1.69298C13.9861 1.63185 13.9993 1.56625 13.9993 1.49999C13.9993 1.43373 13.9861 1.36812 13.9606 1.307C13.935 1.24587 13.8975 1.19043 13.8503 1.14391C13.8031 1.09739 13.7472 1.06071 13.6857 1.036C13.6242 1.01129 13.5584 0.999052 13.4922 0.999989H7.49217Z" fill="white"/>
</svg>`,
    "small-caps": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49218 1C1.35957 1.00001 1.23241 1.05269 1.13865 1.14645C1.04488 1.24022 0.99219 1.3674 0.992176 1.5V3.5C0.991239 3.56626 1.00348 3.63203 1.02819 3.69351C1.05289 3.755 1.08958 3.81097 1.1361 3.85815C1.18262 3.90534 1.23805 3.94281 1.29918 3.96838C1.36031 3.99396 1.42591 4.00711 1.49218 4.00711C1.55844 4.00711 1.62404 3.99396 1.68517 3.96838C1.7463 3.94281 1.80173 3.90534 1.84826 3.85815C1.89478 3.81097 1.93146 3.755 1.95617 3.69351C1.98087 3.63203 1.99311 3.56626 1.99218 3.5V2H4.99218V14H3.49218C3.42592 13.9991 3.36015 14.0113 3.29866 14.036C3.23718 14.0607 3.18121 14.0974 3.13402 14.1439C3.08684 14.1904 3.04938 14.2459 3.02381 14.307C2.99823 14.3681 2.98505 14.4337 2.98505 14.5C2.98505 14.5663 2.99823 14.6319 3.02381 14.693C3.04938 14.7541 3.08684 14.8096 3.13402 14.8561C3.18121 14.9026 3.23718 14.9393 3.29866 14.964C3.36015 14.9887 3.42592 15.0009 3.49218 15H7.49218C7.55843 15.0009 7.62422 14.9887 7.6857 14.964C7.74719 14.9393 7.80315 14.9026 7.85033 14.8561C7.89752 14.8096 7.93499 14.7541 7.96056 14.693C7.98613 14.6319 7.9993 14.5663 7.9993 14.5C7.9993 14.4337 7.98613 14.3681 7.96056 14.307C7.93499 14.2459 7.89752 14.1904 7.85033 14.1439C7.80315 14.0974 7.74719 14.0607 7.6857 14.036C7.62422 14.0113 7.55843 13.9991 7.49218 14H5.99218V2H8.99218V3.5C8.99124 3.56626 9.00348 3.63203 9.02819 3.69351C9.05289 3.755 9.08957 3.81097 9.1361 3.85815C9.18262 3.90534 9.23805 3.94281 9.29918 3.96838C9.36031 3.99396 9.42591 4.00711 9.49218 4.00711C9.55844 4.00711 9.62404 3.99396 9.68517 3.96838C9.7463 3.94281 9.80173 3.90534 9.84826 3.85815C9.89478 3.81097 9.93146 3.755 9.95617 3.69351C9.98087 3.63203 9.99311 3.56626 9.99218 3.5V1.5C9.99216 1.3674 9.93949 1.24022 9.84572 1.14645C9.75196 1.05269 9.62478 1.00001 9.49218 1H1.49218ZM8.49218 7C8.35957 7.00001 8.23241 7.05269 8.13865 7.14645C8.04488 7.24022 7.99219 7.3674 7.99218 7.5V8.5C7.99124 8.56626 8.00348 8.63203 8.02819 8.69351C8.05289 8.755 8.08958 8.81097 8.1361 8.85815C8.18262 8.90534 8.23805 8.94281 8.29918 8.96838C8.36031 8.99396 8.42591 9.00711 8.49218 9.00711C8.55844 9.00711 8.62404 8.99396 8.68517 8.96838C8.7463 8.94281 8.80173 8.90534 8.84826 8.85815C8.89478 8.81097 8.93146 8.755 8.95617 8.69351C8.98087 8.63203 8.99311 8.56626 8.99218 8.5V8H10.9922V14H10.4922C10.4259 13.9991 10.3601 14.0113 10.2987 14.036C10.2372 14.0607 10.1812 14.0974 10.134 14.1439C10.0868 14.1904 10.0494 14.2459 10.0238 14.307C9.99823 14.3681 9.98505 14.4337 9.98505 14.5C9.98505 14.5663 9.99823 14.6319 10.0238 14.693C10.0494 14.7541 10.0868 14.8096 10.134 14.8561C10.1812 14.9026 10.2372 14.9393 10.2987 14.964C10.3601 14.9887 10.4259 15.0009 10.4922 15H12.4922C12.5584 15.0009 12.6242 14.9887 12.6857 14.964C12.7472 14.9393 12.8031 14.9026 12.8503 14.8561C12.8975 14.8096 12.935 14.7541 12.9606 14.693C12.9861 14.6319 12.9993 14.5663 12.9993 14.5C12.9993 14.4337 12.9861 14.3681 12.9606 14.307C12.935 14.2459 12.8975 14.1904 12.8503 14.1439C12.8031 14.0974 12.7472 14.0607 12.6857 14.036C12.6242 14.0113 12.5584 13.9991 12.4922 14H11.9922V8H13.9922V8.5C13.9912 8.56626 14.0035 8.63203 14.0282 8.69351C14.0529 8.755 14.0896 8.81097 14.1361 8.85815C14.1826 8.90534 14.2381 8.94281 14.2992 8.96838C14.3603 8.99396 14.4259 9.00711 14.4922 9.00711C14.5584 9.00711 14.624 8.99396 14.6852 8.96838C14.7463 8.94281 14.8017 8.90534 14.8483 8.85815C14.8948 8.81097 14.9315 8.755 14.9562 8.69351C14.9809 8.63203 14.9931 8.56626 14.9922 8.5V7.5C14.9922 7.3674 14.9395 7.24022 14.8457 7.14645C14.752 7.05269 14.6248 7.00001 14.4922 7H8.49218Z" fill="white"/>
</svg>`,
    "text-left": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.50001 1.99999C1.43375 1.99905 1.36797 2.01129 1.30649 2.036C1.245 2.06071 1.18904 2.09739 1.14186 2.14391C1.09467 2.19043 1.05721 2.24587 1.03163 2.307C1.00606 2.36812 0.992889 2.43373 0.992889 2.49999C0.992889 2.56625 1.00606 2.63185 1.03163 2.69298C1.05721 2.75411 1.09467 2.80955 1.14186 2.85607C1.18904 2.90259 1.245 2.93927 1.30649 2.96398C1.36797 2.98869 1.43375 3.00093 1.50001 2.99999H14.4922C14.5585 3.00093 14.6242 2.98869 14.6857 2.96398C14.7472 2.93927 14.8032 2.90259 14.8504 2.85607C14.8975 2.80955 14.935 2.75411 14.9606 2.69298C14.9861 2.63185 14.9993 2.56625 14.9993 2.49999C14.9993 2.43373 14.9861 2.36812 14.9606 2.307C14.935 2.24587 14.8975 2.19043 14.8504 2.14391C14.8032 2.09739 14.7472 2.06071 14.6857 2.036C14.6242 2.01129 14.5585 1.99905 14.4922 1.99999H1.50001ZM1.50001 4.99999C1.43375 4.99905 1.36797 5.01129 1.30649 5.036C1.245 5.06071 1.18904 5.09739 1.14186 5.14391C1.09467 5.19043 1.05721 5.24587 1.03163 5.307C1.00606 5.36812 0.992889 5.43373 0.992889 5.49999C0.992889 5.56625 1.00606 5.63185 1.03163 5.69298C1.05721 5.75411 1.09467 5.80955 1.14186 5.85607C1.18904 5.90259 1.245 5.93927 1.30649 5.96398C1.36797 5.98869 1.43375 6.00093 1.50001 5.99999H7.4922C7.55845 6.00093 7.62424 5.98869 7.68572 5.96398C7.7472 5.93927 7.80316 5.90259 7.85035 5.85607C7.89753 5.80955 7.935 5.75411 7.96058 5.69298C7.98615 5.63185 7.99932 5.56625 7.99932 5.49999C7.99932 5.43373 7.98615 5.36812 7.96058 5.307C7.935 5.24587 7.89753 5.19043 7.85035 5.14391C7.80316 5.09739 7.7472 5.06071 7.68572 5.036C7.62424 5.01129 7.55845 4.99905 7.4922 4.99999H1.50001ZM1.50001 7.99999C1.43375 7.99905 1.36797 8.01129 1.30649 8.036C1.245 8.06071 1.18904 8.09739 1.14186 8.14391C1.09467 8.19043 1.05721 8.24587 1.03163 8.307C1.00606 8.36812 0.992889 8.43373 0.992889 8.49999C0.992889 8.56625 1.00606 8.63185 1.03163 8.69298C1.05721 8.75411 1.09467 8.80955 1.14186 8.85607C1.18904 8.90259 1.245 8.93927 1.30649 8.96398C1.36797 8.98869 1.43375 9.00093 1.50001 8.99999H14.4922C14.5585 9.00093 14.6242 8.98869 14.6857 8.96398C14.7472 8.93927 14.8032 8.90259 14.8504 8.85607C14.8975 8.80955 14.935 8.75411 14.9606 8.69298C14.9861 8.63185 14.9993 8.56625 14.9993 8.49999C14.9993 8.43373 14.9861 8.36812 14.9606 8.307C14.935 8.24587 14.8975 8.19043 14.8504 8.14391C14.8032 8.09739 14.7472 8.06071 14.6857 8.036C14.6242 8.01129 14.5585 7.99905 14.4922 7.99999H1.50001ZM1.50001 11C1.43375 10.9991 1.36797 11.0113 1.30649 11.036C1.245 11.0607 1.18904 11.0974 1.14186 11.1439C1.09467 11.1904 1.05721 11.2459 1.03163 11.307C1.00606 11.3681 0.992889 11.4337 0.992889 11.5C0.992889 11.5663 1.00606 11.6319 1.03163 11.693C1.05721 11.7541 1.09467 11.8095 1.14186 11.8561C1.18904 11.9026 1.245 11.9393 1.30649 11.964C1.36797 11.9887 1.43375 12.0009 1.50001 12H7.4922C7.55845 12.0009 7.62424 11.9887 7.68572 11.964C7.7472 11.9393 7.80316 11.9026 7.85035 11.8561C7.89753 11.8095 7.935 11.7541 7.96058 11.693C7.98615 11.6319 7.99932 11.5663 7.99932 11.5C7.99932 11.4337 7.98615 11.3681 7.96058 11.307C7.935 11.2459 7.89753 11.1904 7.85035 11.1439C7.80316 11.0974 7.7472 11.0607 7.68572 11.036C7.62424 11.0113 7.55845 10.9991 7.4922 11H1.50001ZM1.50001 14C1.43375 13.9991 1.36797 14.0113 1.30649 14.036C1.245 14.0607 1.18904 14.0974 1.14186 14.1439C1.09467 14.1904 1.05721 14.2459 1.03163 14.307C1.00606 14.3681 0.992889 14.4337 0.992889 14.5C0.992889 14.5663 1.00606 14.6319 1.03163 14.693C1.05721 14.7541 1.09467 14.8095 1.14186 14.8561C1.18904 14.9026 1.245 14.9393 1.30649 14.964C1.36797 14.9887 1.43375 15.0009 1.50001 15H14.4922C14.5585 15.0009 14.6242 14.9887 14.6857 14.964C14.7472 14.9393 14.8032 14.9026 14.8504 14.8561C14.8975 14.8095 14.935 14.7541 14.9606 14.693C14.9861 14.6319 14.9993 14.5663 14.9993 14.5C14.9993 14.4337 14.9861 14.3681 14.9606 14.307C14.935 14.2459 14.8975 14.1904 14.8504 14.1439C14.8032 14.0974 14.7472 14.0607 14.6857 14.036C14.6242 14.0113 14.5585 13.9991 14.4922 14H1.50001Z" fill="white"/>
</svg>`,
    "text-center": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.4922 1.99999C1.42594 1.99905 1.36016 2.01129 1.29868 2.036C1.23719 2.06071 1.18123 2.09739 1.13405 2.14391C1.08686 2.19043 1.04939 2.24587 1.02382 2.307C0.998245 2.36812 0.985077 2.43373 0.985077 2.49999C0.985077 2.56625 0.998245 2.63185 1.02382 2.69298C1.04939 2.75411 1.08686 2.80955 1.13405 2.85607C1.18123 2.90259 1.23719 2.93927 1.29868 2.96398C1.36016 2.98869 1.42594 3.00093 1.4922 2.99999H14.4863C14.5526 3.00093 14.6184 2.98869 14.6799 2.96398C14.7413 2.93927 14.7973 2.90259 14.8445 2.85607C14.8917 2.80955 14.9291 2.75411 14.9547 2.69298C14.9803 2.63185 14.9935 2.56625 14.9935 2.49999C14.9935 2.43373 14.9803 2.36812 14.9547 2.307C14.9291 2.24587 14.8917 2.19043 14.8445 2.14391C14.7973 2.09739 14.7413 2.06071 14.6799 2.036C14.6184 2.01129 14.5526 1.99905 14.4863 1.99999H1.4922ZM5.4922 4.99999C5.42594 4.99905 5.36016 5.01129 5.29868 5.036C5.23719 5.06071 5.18123 5.09739 5.13405 5.14391C5.08686 5.19043 5.04939 5.24587 5.02382 5.307C4.99825 5.36812 4.98508 5.43373 4.98508 5.49999C4.98508 5.56625 4.99825 5.63185 5.02382 5.69298C5.04939 5.75411 5.08686 5.80955 5.13405 5.85607C5.18123 5.90259 5.23719 5.93927 5.29868 5.96398C5.36016 5.98869 5.42594 6.00093 5.4922 5.99999H10.4863C10.5526 6.00093 10.6184 5.98869 10.6799 5.96398C10.7413 5.93927 10.7973 5.90259 10.8445 5.85607C10.8917 5.80955 10.9291 5.75411 10.9547 5.69298C10.9803 5.63185 10.9935 5.56625 10.9935 5.49999C10.9935 5.43373 10.9803 5.36812 10.9547 5.307C10.9291 5.24587 10.8917 5.19043 10.8445 5.14391C10.7973 5.09739 10.7413 5.06071 10.6799 5.036C10.6184 5.01129 10.5526 4.99905 10.4863 4.99999H5.4922ZM1.4922 7.99999C1.42594 7.99905 1.36016 8.01129 1.29868 8.036C1.23719 8.06071 1.18123 8.09739 1.13405 8.14391C1.08686 8.19043 1.04939 8.24587 1.02382 8.307C0.998245 8.36812 0.985077 8.43373 0.985077 8.49999C0.985077 8.56625 0.998245 8.63185 1.02382 8.69298C1.04939 8.75411 1.08686 8.80955 1.13405 8.85607C1.18123 8.90259 1.23719 8.93927 1.29868 8.96398C1.36016 8.98869 1.42594 9.00093 1.4922 8.99999H14.4863C14.5526 9.00093 14.6184 8.98869 14.6799 8.96398C14.7413 8.93927 14.7973 8.90259 14.8445 8.85607C14.8917 8.80955 14.9291 8.75411 14.9547 8.69298C14.9803 8.63185 14.9935 8.56625 14.9935 8.49999C14.9935 8.43373 14.9803 8.36812 14.9547 8.307C14.9291 8.24587 14.8917 8.19043 14.8445 8.14391C14.7973 8.09739 14.7413 8.06071 14.6799 8.036C14.6184 8.01129 14.5526 7.99905 14.4863 7.99999H1.4922ZM5.4922 11C5.42594 10.9991 5.36016 11.0113 5.29868 11.036C5.23719 11.0607 5.18123 11.0974 5.13405 11.1439C5.08686 11.1904 5.04939 11.2459 5.02382 11.307C4.99825 11.3681 4.98508 11.4337 4.98508 11.5C4.98508 11.5663 4.99825 11.6319 5.02382 11.693C5.04939 11.7541 5.08686 11.8095 5.13405 11.8561C5.18123 11.9026 5.23719 11.9393 5.29868 11.964C5.36016 11.9887 5.42594 12.0009 5.4922 12H10.4863C10.5526 12.0009 10.6184 11.9887 10.6799 11.964C10.7413 11.9393 10.7973 11.9026 10.8445 11.8561C10.8917 11.8095 10.9291 11.7541 10.9547 11.693C10.9803 11.6319 10.9935 11.5663 10.9935 11.5C10.9935 11.4337 10.9803 11.3681 10.9547 11.307C10.9291 11.2459 10.8917 11.1904 10.8445 11.1439C10.7973 11.0974 10.7413 11.0607 10.6799 11.036C10.6184 11.0113 10.5526 10.9991 10.4863 11H5.4922ZM1.4922 14C1.42594 13.9991 1.36016 14.0113 1.29868 14.036C1.23719 14.0607 1.18123 14.0974 1.13405 14.1439C1.08686 14.1904 1.04939 14.2459 1.02382 14.307C0.998245 14.3681 0.985077 14.4337 0.985077 14.5C0.985077 14.5663 0.998245 14.6319 1.02382 14.693C1.04939 14.7541 1.08686 14.8095 1.13405 14.8561C1.18123 14.9026 1.23719 14.9393 1.29868 14.964C1.36016 14.9887 1.42594 15.0009 1.4922 15H14.4863C14.5526 15.0009 14.6184 14.9887 14.6799 14.964C14.7413 14.9393 14.7973 14.9026 14.8445 14.8561C14.8917 14.8095 14.9291 14.7541 14.9547 14.693C14.9803 14.6319 14.9935 14.5663 14.9935 14.5C14.9935 14.4337 14.9803 14.3681 14.9547 14.307C14.9291 14.2459 14.8917 14.1904 14.8445 14.1439C14.7973 14.0974 14.7413 14.0607 14.6799 14.036C14.6184 14.0113 14.5526 13.9991 14.4863 14H1.4922Z" fill="white"/>
</svg>`,
    "text-right": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.4922 1.99999C1.42594 1.99905 1.36016 2.01129 1.29868 2.036C1.2372 2.06071 1.18123 2.09739 1.13405 2.14391C1.08686 2.19043 1.0494 2.24587 1.02382 2.307C0.998249 2.36812 0.985077 2.43373 0.985077 2.49999C0.985077 2.56625 0.998249 2.63185 1.02382 2.69298C1.0494 2.75411 1.08686 2.80955 1.13405 2.85607C1.18123 2.90259 1.2372 2.93927 1.29868 2.96398C1.36016 2.98869 1.42594 3.00093 1.4922 2.99999H14.4863C14.5526 3.00093 14.6184 2.98869 14.6799 2.96398C14.7413 2.93927 14.7973 2.90259 14.8445 2.85607C14.8917 2.80955 14.9291 2.75411 14.9547 2.69298C14.9803 2.63185 14.9935 2.56625 14.9935 2.49999C14.9935 2.43373 14.9803 2.36812 14.9547 2.307C14.9291 2.24587 14.8917 2.19043 14.8445 2.14391C14.7973 2.09739 14.7413 2.06071 14.6799 2.036C14.6184 2.01129 14.5526 1.99905 14.4863 1.99999H1.4922ZM8.4922 4.99999C8.42594 4.99905 8.36016 5.01129 8.29868 5.036C8.2372 5.06071 8.18123 5.09739 8.13405 5.14391C8.08686 5.19043 8.0494 5.24587 8.02382 5.307C7.99825 5.36812 7.98508 5.43373 7.98508 5.49999C7.98508 5.56625 7.99825 5.63185 8.02382 5.69298C8.0494 5.75411 8.08686 5.80955 8.13405 5.85607C8.18123 5.90259 8.2372 5.93927 8.29868 5.96398C8.36016 5.98869 8.42594 6.00093 8.4922 5.99999H14.4863C14.5526 6.00093 14.6184 5.98869 14.6799 5.96398C14.7413 5.93927 14.7973 5.90259 14.8445 5.85607C14.8917 5.80955 14.9291 5.75411 14.9547 5.69298C14.9803 5.63185 14.9935 5.56625 14.9935 5.49999C14.9935 5.43373 14.9803 5.36812 14.9547 5.307C14.9291 5.24587 14.8917 5.19043 14.8445 5.14391C14.7973 5.09739 14.7413 5.06071 14.6799 5.036C14.6184 5.01129 14.5526 4.99905 14.4863 4.99999H8.4922ZM1.4922 7.99999C1.42594 7.99905 1.36016 8.01129 1.29868 8.036C1.2372 8.06071 1.18123 8.09739 1.13405 8.14391C1.08686 8.19043 1.0494 8.24587 1.02382 8.307C0.998249 8.36812 0.985077 8.43373 0.985077 8.49999C0.985077 8.56625 0.998249 8.63185 1.02382 8.69298C1.0494 8.75411 1.08686 8.80955 1.13405 8.85607C1.18123 8.90259 1.2372 8.93927 1.29868 8.96398C1.36016 8.98869 1.42594 9.00093 1.4922 8.99999H14.4863C14.5526 9.00093 14.6184 8.98869 14.6799 8.96398C14.7413 8.93927 14.7973 8.90259 14.8445 8.85607C14.8917 8.80955 14.9291 8.75411 14.9547 8.69298C14.9803 8.63185 14.9935 8.56625 14.9935 8.49999C14.9935 8.43373 14.9803 8.36812 14.9547 8.307C14.9291 8.24587 14.8917 8.19043 14.8445 8.14391C14.7973 8.09739 14.7413 8.06071 14.6799 8.036C14.6184 8.01129 14.5526 7.99905 14.4863 7.99999H1.4922ZM8.4922 11C8.42594 10.9991 8.36016 11.0113 8.29868 11.036C8.2372 11.0607 8.18123 11.0974 8.13405 11.1439C8.08686 11.1904 8.0494 11.2459 8.02382 11.307C7.99825 11.3681 7.98508 11.4337 7.98508 11.5C7.98508 11.5663 7.99825 11.6319 8.02382 11.693C8.0494 11.7541 8.08686 11.8095 8.13405 11.8561C8.18123 11.9026 8.2372 11.9393 8.29868 11.964C8.36016 11.9887 8.42594 12.0009 8.4922 12H14.4863C14.5526 12.0009 14.6184 11.9887 14.6799 11.964C14.7413 11.9393 14.7973 11.9026 14.8445 11.8561C14.8917 11.8095 14.9291 11.7541 14.9547 11.693C14.9803 11.6319 14.9935 11.5663 14.9935 11.5C14.9935 11.4337 14.9803 11.3681 14.9547 11.307C14.9291 11.2459 14.8917 11.1904 14.8445 11.1439C14.7973 11.0974 14.7413 11.0607 14.6799 11.036C14.6184 11.0113 14.5526 10.9991 14.4863 11H8.4922ZM1.4922 14C1.42594 13.9991 1.36016 14.0113 1.29868 14.036C1.2372 14.0607 1.18123 14.0974 1.13405 14.1439C1.08686 14.1904 1.0494 14.2459 1.02382 14.307C0.998249 14.3681 0.985077 14.4337 0.985077 14.5C0.985077 14.5663 0.998249 14.6319 1.02382 14.693C1.0494 14.7541 1.08686 14.8095 1.13405 14.8561C1.18123 14.9026 1.2372 14.9393 1.29868 14.964C1.36016 14.9887 1.42594 15.0009 1.4922 15H14.4863C14.5526 15.0009 14.6184 14.9887 14.6799 14.964C14.7413 14.9393 14.7973 14.9026 14.8445 14.8561C14.8917 14.8095 14.9291 14.7541 14.9547 14.693C14.9803 14.6319 14.9935 14.5663 14.9935 14.5C14.9935 14.4337 14.9803 14.3681 14.9547 14.307C14.9291 14.2459 14.8917 14.1904 14.8445 14.1439C14.7973 14.0974 14.7413 14.0607 14.6799 14.036C14.6184 14.0113 14.5526 13.9991 14.4863 14H1.4922Z" fill="white"/>
</svg>`,
    "text-justify": `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.4922 1.99999C1.42594 1.99905 1.36016 2.01129 1.29868 2.036C1.23719 2.06071 1.18123 2.09739 1.13404 2.14391C1.08686 2.19043 1.04939 2.24587 1.02382 2.307C0.998245 2.36812 0.985077 2.43373 0.985077 2.49999C0.985077 2.56625 0.998245 2.63185 1.02382 2.69298C1.04939 2.75411 1.08686 2.80955 1.13404 2.85607C1.18123 2.90259 1.23719 2.93927 1.29868 2.96398C1.36016 2.98869 1.42594 3.00093 1.4922 2.99999H14.4863C14.5526 3.00093 14.6184 2.98869 14.6799 2.96398C14.7413 2.93927 14.7973 2.90259 14.8445 2.85607C14.8917 2.80955 14.9291 2.75411 14.9547 2.69298C14.9803 2.63185 14.9935 2.56625 14.9935 2.49999C14.9935 2.43373 14.9803 2.36812 14.9547 2.307C14.9291 2.24587 14.8917 2.19043 14.8445 2.14391C14.7973 2.09739 14.7413 2.06071 14.6799 2.036C14.6184 2.01129 14.5526 1.99905 14.4863 1.99999H1.4922ZM1.4922 4.99999C1.42594 4.99905 1.36016 5.01129 1.29868 5.036C1.23719 5.06071 1.18123 5.09739 1.13404 5.14391C1.08686 5.19043 1.04939 5.24587 1.02382 5.307C0.998245 5.36812 0.985077 5.43373 0.985077 5.49999C0.985077 5.56625 0.998245 5.63185 1.02382 5.69298C1.04939 5.75411 1.08686 5.80955 1.13404 5.85607C1.18123 5.90259 1.23719 5.93927 1.29868 5.96398C1.36016 5.98869 1.42594 6.00093 1.4922 5.99999H14.4863C14.5526 6.00093 14.6184 5.98869 14.6799 5.96398C14.7413 5.93927 14.7973 5.90259 14.8445 5.85607C14.8917 5.80955 14.9291 5.75411 14.9547 5.69298C14.9803 5.63185 14.9935 5.56625 14.9935 5.49999C14.9935 5.43373 14.9803 5.36812 14.9547 5.307C14.9291 5.24587 14.8917 5.19043 14.8445 5.14391C14.7973 5.09739 14.7413 5.06071 14.6799 5.036C14.6184 5.01129 14.5526 4.99905 14.4863 4.99999H1.4922ZM1.4922 7.99999C1.42594 7.99905 1.36016 8.01129 1.29868 8.036C1.23719 8.06071 1.18123 8.09739 1.13404 8.14391C1.08686 8.19043 1.04939 8.24587 1.02382 8.307C0.998245 8.36812 0.985077 8.43373 0.985077 8.49999C0.985077 8.56625 0.998245 8.63185 1.02382 8.69298C1.04939 8.75411 1.08686 8.80955 1.13404 8.85607C1.18123 8.90259 1.23719 8.93927 1.29868 8.96398C1.36016 8.98869 1.42594 9.00093 1.4922 8.99999H14.4863C14.5526 9.00093 14.6184 8.98869 14.6799 8.96398C14.7413 8.93927 14.7973 8.90259 14.8445 8.85607C14.8917 8.80955 14.9291 8.75411 14.9547 8.69298C14.9803 8.63185 14.9935 8.56625 14.9935 8.49999C14.9935 8.43373 14.9803 8.36812 14.9547 8.307C14.9291 8.24587 14.8917 8.19043 14.8445 8.14391C14.7973 8.09739 14.7413 8.06071 14.6799 8.036C14.6184 8.01129 14.5526 7.99905 14.4863 7.99999H1.4922ZM1.4922 11C1.42594 10.9991 1.36016 11.0113 1.29868 11.036C1.23719 11.0607 1.18123 11.0974 1.13404 11.1439C1.08686 11.1904 1.04939 11.2459 1.02382 11.307C0.998245 11.3681 0.985077 11.4337 0.985077 11.5C0.985077 11.5663 0.998245 11.6319 1.02382 11.693C1.04939 11.7541 1.08686 11.8095 1.13404 11.8561C1.18123 11.9026 1.23719 11.9393 1.29868 11.964C1.36016 11.9887 1.42594 12.0009 1.4922 12H14.4863C14.5526 12.0009 14.6184 11.9887 14.6799 11.964C14.7413 11.9393 14.7973 11.9026 14.8445 11.8561C14.8917 11.8095 14.9291 11.7541 14.9547 11.693C14.9803 11.6319 14.9935 11.5663 14.9935 11.5C14.9935 11.4337 14.9803 11.3681 14.9547 11.307C14.9291 11.2459 14.8917 11.1904 14.8445 11.1439C14.7973 11.0974 14.7413 11.0607 14.6799 11.036C14.6184 11.0113 14.5526 10.9991 14.4863 11H1.4922ZM1.4922 14C1.42594 13.9991 1.36016 14.0113 1.29868 14.036C1.23719 14.0607 1.18123 14.0974 1.13404 14.1439C1.08686 14.1904 1.04939 14.2459 1.02382 14.307C0.998245 14.3681 0.985077 14.4337 0.985077 14.5C0.985077 14.5663 0.998245 14.6319 1.02382 14.693C1.04939 14.7541 1.08686 14.8095 1.13404 14.8561C1.18123 14.9026 1.23719 14.9393 1.29868 14.964C1.36016 14.9887 1.42594 15.0009 1.4922 15H14.4863C14.5526 15.0009 14.6184 14.9887 14.6799 14.964C14.7413 14.9393 14.7973 14.9026 14.8445 14.8561C14.8917 14.8095 14.9291 14.7541 14.9547 14.693C14.9803 14.6319 14.9935 14.5663 14.9935 14.5C14.9935 14.4337 14.9803 14.3681 14.9547 14.307C14.9291 14.2459 14.8917 14.1904 14.8445 14.1439C14.7973 14.0974 14.7413 14.0607 14.6799 14.036C14.6184 14.0113 14.5526 13.9991 14.4863 14H1.4922Z" fill="white"/>
</svg>`,
    pipette: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7337 1.00057C12.5404 0.996567 12.3472 1.01375 12.1595 1.05135C11.4088 1.20149 10.7126 1.62915 10.1536 2.18807L8.0091 4.29549L6.86067 3.14705C6.81404 3.09886 6.75821 3.06055 6.69647 3.03438C6.63473 3.00821 6.56835 2.99471 6.50129 2.99471C6.4017 2.99473 6.30438 3.02448 6.22181 3.08016C6.13924 3.13584 6.07518 3.21495 6.03784 3.30727C6.00049 3.39959 5.99156 3.50092 6.01219 3.59835C6.03282 3.69578 6.08207 3.78482 6.15364 3.85408L7.80012 5.50057L3.15168 10.19C3.05911 10.2836 3.00718 10.4099 3.00715 10.5416V11.3346L1.15364 13.1881C1.10567 13.2341 1.06737 13.2893 1.04099 13.3504C1.01462 13.4114 1.00069 13.4771 1.00003 13.5437C0.999358 13.6102 1.01197 13.6762 1.03712 13.7378C1.06226 13.7993 1.09943 13.8553 1.14646 13.9023C1.1935 13.9493 1.24944 13.9865 1.31101 14.0116C1.37259 14.0368 1.43857 14.0494 1.50508 14.0487C1.57158 14.0481 1.63728 14.0341 1.69834 14.0077C1.7594 13.9813 1.81459 13.9431 1.86067 13.8951L3.86067 11.8951C3.95443 11.8013 4.00713 11.6742 4.00715 11.5416V10.7467L8.5091 6.20955L9.80207 7.50252L5.29817 12.0416H4.50715C4.37455 12.0416 4.24739 12.0943 4.15364 12.1881L2.15364 14.1881C2.10567 14.2341 2.06737 14.2893 2.041 14.3504C2.01462 14.4114 2.00069 14.4771 2.00003 14.5437C1.99936 14.6102 2.01197 14.6762 2.03712 14.7378C2.06226 14.7993 2.09943 14.8553 2.14646 14.9023C2.1935 14.9493 2.24944 14.9865 2.31101 15.0116C2.37259 15.0368 2.43857 15.0494 2.50508 15.0487C2.57158 15.0481 2.63728 15.0341 2.69834 15.0077C2.7594 14.9813 2.81459 14.9431 2.86067 14.8951L4.71418 13.0416H5.50715C5.57327 13.0416 5.63873 13.0284 5.69975 13.0029C5.76076 12.9775 5.81613 12.9402 5.86262 12.8931L10.5091 8.20955L12.1536 9.85408C12.1997 9.90202 12.2549 9.94028 12.316 9.96663C12.377 9.99299 12.4427 10.0069 12.5092 10.0076C12.5757 10.0082 12.6417 9.99562 12.7032 9.97048C12.7648 9.94533 12.8207 9.90812 12.8677 9.8611C12.9147 9.81408 12.9519 9.75817 12.977 9.69661C13.0022 9.63505 13.0148 9.56908 13.0142 9.50258C13.0135 9.43609 12.9996 9.3704 12.9732 9.30934C12.9469 9.24829 12.9086 9.19314 12.8607 9.14705L11.7181 8.00447L13.8568 5.899L13.8608 5.89504C14.4197 5.33611 14.8473 4.63983 14.9975 3.88912C15.1476 3.1384 14.9786 2.30587 14.3608 1.68801C13.8974 1.22462 13.3136 1.01366 12.7338 1.00051L12.7337 1.00057Z" fill="white"/>
</svg>`,
    play: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.95962 1.99996C3.42344 2.02196 3.00024 2.46336 3.00064 2.99996V13C3.00136 13.7847 3.86414 14.2629 4.52994 13.8477L12.5299 8.84766C13.1559 8.45586 13.1559 7.54406 12.5299 7.15226L4.52994 2.15226C4.35949 2.04526 4.16072 1.99216 3.95962 1.99996Z" fill="white"/>
</svg>`,
    pause: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2V14H6V2H4ZM10 2V14H12V2H10Z" fill="white"/>
</svg>`
  };
  var icons = Object.keys(svg);
  var cache;
  function css() {
    if (typeof URL.createObjectURL !== "function") {
      return "";
    }
    if (cache) {
      return cache;
    }
    const cssVars = [];
    for (const [name, data] of Object.entries(svg)) {
      const url = URL.createObjectURL(
        new Blob([data], { type: "image/svg+xml" })
      );
      cssVars.push(`--icon-${name}: url(${url})`);
    }
    cache = cssVars.join(";\n");
    return cache;
  }

  // ../../packages/blender-elements/src/Base.svelte
  var root = from_tree([["div", { class: "base svelte-x1fddx" }, ,]]);
  var $$css = {
    hash: "svelte-x1fddx",
    code: ".base.svelte-x1fddx {height:100%;font:11px/1.3 system-ui,\n      sans-serif;color:#e5e5e5;text-shadow:0 1px 1px #0006;background:#161616;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}"
  };
  function Base($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css);
    var div = root();
    var node = child(div);
    snippet(node, () => $$props.children ?? noop);
    reset(div);
    template_effect(($0) => set_style(div, $0), [() => css()]);
    append($$anchor, div);
    pop();
  }

  // ../../packages/blender-elements/src/Warning/Warning.svelte
  var root2 = from_tree([["div", { class: "warning svelte-uedhh" }, " ", ,]]);
  var $$css2 = {
    hash: "svelte-uedhh",
    code: '.warning.svelte-uedhh {position:relative;overflow:hidden;min-height:16px;padding:2px 4px 4px 30px;border:1px solid #3d3d3d;border-radius:3px;color:#e1e1e1;background:#472722;&::before {content:"";position:absolute;top:0;left:0;width:24px;height:100%;background:#c1432a center center no-repeat;}&[data-icon="warning"]::before {background-image:var(--icon-warning);}&[data-icon="error"]::before {background-image:var(--icon-error);}}'
  };
  function Warning($$anchor, $$props) {
    append_styles($$anchor, $$css2);
    let icon = prop($$props, "icon", 3, "warning"), message = prop($$props, "message", 3, "");
    var div = root2();
    var text2 = child(div, true);
    var node = sibling(text2);
    snippet(node, () => $$props.children ?? noop);
    reset(div);
    template_effect(() => {
      set_attribute2(div, "data-icon", icon());
      set_text(text2, message());
    });
    append($$anchor, div);
  }

  // ../../packages/ui-protocol/src/tree-fns.ts
  function lookupNode(root32, path) {
    let node = root32;
    for (const index2 of path) {
      const child2 = node.children?.[index2];
      if (!child2) {
        throw new Error(`lookupNode() failed: "/${path.join("/")}" not found`);
      }
      node = child2;
    }
    return node;
  }
  function lookupParent(root32, path) {
    if (path.length === 0) {
      throw new Error("lookupParent failed: Path is empty");
    }
    const index2 = path[path.length - 1];
    if (path.length === 1) {
      return { parent: root32, index: index2 };
    }
    return { parent: lookupNode(root32, path.slice(0, -1)), index: index2 };
  }
  function applyPatch(tree, patch) {
    for (const { path, values: props } of patch.props) {
      const node = lookupNode(tree, path);
      node.setProps(props);
    }
    applyDisplayValues(tree, patch.value);
    for (const replacement of patch.replacements) {
      const { parent, index: index2 } = lookupParent(tree, replacement.path);
      if ("setChild" in parent) {
        const node = parent.setChild(index2, replacement);
        parent.children[index2] = node;
      } else {
        throw new Error("replace failed: Can't replace children of a leaf node");
      }
    }
    for (const append2 of patch.appends) {
      const { parent, index: index2 } = lookupParent(tree, append2.path);
      if ("setChild" in parent) {
        const node = parent.setChild(index2, append2);
        const length = parent.children.push(node);
        if (length !== index2 + 1) {
          throw new Error(`append failed: index mismatch`);
        }
      } else {
        throw new Error("append failed: Can't append children into a leaf node");
      }
    }
    for (const truncate of patch.truncates) {
      const parent = lookupNode(tree, truncate.path);
      if ("truncate" in parent) {
        parent.truncate(truncate.length);
        if (truncate.length >= parent.children.length) {
          throw new Error(`truncate failed: No nodes were removed`);
        }
        parent.children.length = truncate.length;
      } else {
        throw new Error(
          "truncate failed: Can't truncate children of a leaf node"
        );
      }
    }
    for (const error of patch.errors) {
      let parentPath = error.path;
      while (true) {
        parentPath = parentPath.slice(0, -1);
        if (parentPath.length === 0) {
          throw new Error("Error occurred outside ErrorBoundary", {
            cause: error.message
          });
        }
        const parent = lookupNode(tree, parentPath);
        if ("setError" in parent && parent.setError) {
          parent.setError(error.message);
          break;
        }
      }
    }
  }
  function applyDisplayValues(tree, values) {
    for (const { path, value } of values) {
      const node = lookupNode(tree, path);
      if (!node.setValue) {
        throw new Error(
          `Applying values failed: Node "/${path.join("/")}" didn't implement setValue()`
        );
      }
      node.setValue(value);
    }
  }

  // ../../packages/ui-protocol/src/evalBridge.ts
  async function evalConnect(id, evalFn, options) {
    const connectInterval = options?.connectInterval ?? 1e3;
    const signal = options?.signal ?? new AbortController().signal;
    const target = `window.__UI_PROTOCOL__?.[${JSON.stringify(id)}]`;
    const connected = Promise.withResolvers();
    let timer = void 0;
    async function check() {
      const result = await evalFn(
        `typeof window.__UI_PROTOCOL__ === "object" && typeof ${target} === "object"`
      );
      if (result) {
        connected.resolve();
      } else {
        timer = setTimeout(check, connectInterval);
      }
    }
    await check();
    signal.addEventListener("abort", () => {
      clearTimeout(timer);
    });
    await connected.promise;
    clearTimeout(timer);
    return {
      set(values) {
        return evalFn(`${target}.set(${JSON.stringify(values)})`);
      },
      dispatchEvent: (values, event2) => {
        return evalFn(
          `${target}.dispatchEvent(${JSON.stringify(values)}, ${JSON.stringify(event2)})`
        );
      },
      sync: (values, path) => {
        return evalFn(
          `${target}.sync(${JSON.stringify(values)}, ${JSON.stringify(path)})`
        );
      }
    };
  }

  // ../../packages/ui-protocol/src/createSender.ts
  function createSender(tree, connection, onerror) {
    const data = [];
    const queue = { events: [], sync: [] };
    let promise;
    function flushData() {
      const dto = [];
      for (const { node, value } of data) {
        if (isNodeValid(tree, node, "setValue() failed: ")) {
          dto.push({ path: node.path, value });
        }
      }
      data.length = 0;
      return dto;
    }
    async function process() {
      const processing = { events: queue.events, sync: queue.sync };
      queue.events = [];
      queue.sync = [];
      if (processing.events.length === 0 && processing.sync.length === 0 && data.length > 0) {
        applyPatch(tree, await connection.set(flushData()));
        return;
      }
      if (processing.events.length !== 0) {
        for (const { node, event: event2 } of processing.events) {
          if (isNodeValid(tree, node, "dispatchEvent() failed: ")) {
            applyPatch(tree, await connection.dispatchEvent(flushData(), event2));
          }
        }
      }
      if (processing.sync.length !== 0) {
        if (processing.sync.find((node) => node === tree)) {
          applyPatch(tree, await connection.sync(flushData(), tree.path));
        } else {
          for (const node of processing.sync) {
            if (isNodeValid(tree, node, "sync() failed: ")) {
              applyPatch(tree, await connection.sync(flushData(), node.path));
            }
          }
        }
      }
    }
    let resetting = false;
    function schedule() {
      if (resetting) {
        throw new Error("schedule() was called during a reset");
      }
      promise = (async () => {
        do {
          await Promise.resolve();
          try {
            await process();
          } catch (err) {
            onerror(err);
            throw err;
          }
        } while (
          // If there are new events or syncs, process them immediately
          data.length > 0 || queue.events.length > 0 || queue.sync.length > 0
        );
        promise = void 0;
      })();
    }
    return {
      setValue(node, value) {
        data.push({ node, value });
        if (!promise) {
          schedule();
        }
        return promise;
      },
      dispatchEvent(node, event2, ...args) {
        queue.events.push({
          node,
          event: { path: node.path, type: event2, args }
        });
        if (!promise) {
          schedule();
        }
        return promise;
      },
      async reset() {
        resetting = true;
        promise = void 0;
        try {
          if ("children" in tree) {
            tree.children = [];
          }
          const init2 = await connection.dispatchEvent([], {
            path: [],
            type: "reset",
            args: []
          });
          queue.events = [];
          queue.sync = [];
          data.length = 0;
          applyPatch(tree, init2);
        } finally {
          resetting = false;
        }
      }
    };
  }
  function isNodeValid(tree, node, prefix = "") {
    try {
      if (node === lookupNode(tree, node.path)) {
        return true;
      } else {
        console.warn(`${prefix}node was replaced`);
        return false;
      }
    } catch {
      console.warn(`${prefix}node was no longer available`);
      return false;
    }
  }

  // ../../packages/ui-protocol/src/svelte/Fragment.svelte
  function Fragment($$anchor, $$props) {
    var fragment = comment();
    var node = first_child(fragment);
    snippet(node, () => $$props.children);
    append($$anchor, fragment);
  }

  // ../../packages/ui-protocol/src/svelte/VDOMNode.svelte
  function VDOMNode_1($$anchor, $$props) {
    push($$props, true);
    var fragment = comment();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor2) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        component(node_1, () => $$props.vdom.Component, ($$anchor3, vdom_Component) => {
          vdom_Component($$anchor3, spread_props(() => $$props.vdom.props));
        });
        append($$anchor2, fragment_1);
      };
      var consequent_1 = ($$anchor2) => {
        var fragment_2 = comment();
        var node_2 = first_child(fragment_2);
        each(node_2, 16, () => $$props.vdom.children, (child2) => child2, ($$anchor3, child2) => {
          VDOMNode_1($$anchor3, {
            get vdom() {
              return child2;
            }
          });
        });
        append($$anchor2, fragment_2);
      };
      var alternate = ($$anchor2) => {
        var fragment_4 = comment();
        var node_3 = first_child(fragment_4);
        component(node_3, () => $$props.vdom.Component, ($$anchor3, vdom_Component_1) => {
          vdom_Component_1($$anchor3, spread_props(() => $$props.vdom.props, {
            children: ($$anchor4, $$slotProps) => {
              var fragment_5 = comment();
              var node_4 = first_child(fragment_5);
              each(node_4, 16, () => $$props.vdom.children, (child2) => child2, ($$anchor5, child2) => {
                VDOMNode_1($$anchor5, {
                  get vdom() {
                    return child2;
                  }
                });
              });
              append($$anchor4, fragment_5);
            },
            $$slots: { default: true }
          }));
        });
        append($$anchor2, fragment_4);
      };
      if_block(node, ($$render) => {
        if ($$props.vdom.children === void 0) $$render(consequent);
        else if ($$props.vdom.Component === Fragment) $$render(consequent_1, 1);
        else $$render(alternate, -1);
      });
    }
    append($$anchor, fragment);
    pop();
  }

  // ../../packages/ui-protocol/src/svelte/ErrorBoundary.svelte
  var root3 = from_tree([, , " ", ,], 1);
  function ErrorBoundary($$anchor, $$props) {
    push($$props, true);
    let error = state(void 0);
    let triggered = 0;
    let timer;
    let svelteReset;
    user_effect(() => {
      if ($$props.restored !== 0 && $$props.restored === triggered) {
        triggered = 0;
        set(error, void 0);
        clearTimeout(timer);
        svelteReset?.();
        svelteReset = void 0;
      }
    });
    function setError(message) {
      set(error, { message }, true);
      if (triggered) {
        return;
      }
      triggered = 1 + Math.random();
      $$props.onerror();
      timer = window.setTimeout(
        () => {
          $$props.onrestore(triggered);
        },
        3e3
      );
    }
    user_pre_effect(() => {
      $$props.createTrigger?.(setError);
    });
    onDestroy(() => clearTimeout(timer));
    function svelteError(err, reset2) {
      console.error(err);
      svelteReset = reset2;
      setError(err instanceof Error ? err.message : void 0);
    }
    var fragment = root3();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor2) => {
        {
          let $0 = user_derived(() => get2(error).message || "An error occurred");
          Warning($$anchor2, {
            get message() {
              return get2($0);
            }
          });
        }
      };
      if_block(node, ($$render) => {
        if (get2(error)) $$render(consequent);
      });
    }
    var node_1 = sibling(node, 2);
    boundary(node_1, { onerror: svelteError }, ($$anchor2) => {
      var fragment_2 = comment();
      var node_2 = first_child(fragment_2);
      snippet(node_2, () => $$props.children);
      append($$anchor2, fragment_2);
    });
    append($$anchor, fragment);
    pop();
  }

  // ../../packages/ui-protocol/src/svelte/Refresh.svelte
  function Refresh($$anchor, $$props) {
    push($$props, true);
    let timer;
    function poll(current) {
      requestAnimationFrame(() => {
        if (current === timer) {
          $$props.refresh($$props.depth ?? 0);
        }
      });
    }
    user_effect(() => {
      $$props.value;
      if (!$$props.interval) {
        console.error("Invalid interval", $$props.interval);
      } else {
        timer = window.setTimeout(() => poll(timer), $$props.interval);
        return () => {
          clearTimeout(timer);
          timer = void 0;
        };
      }
    });
    var fragment = comment();
    var node = first_child(fragment);
    snippet(node, () => $$props.children ?? noop);
    append($$anchor, fragment);
    pop();
  }

  // ../../packages/ui-protocol/src/svelte/TriggerProvider.svelte
  var [getTriggerContext, setTriggerContext] = createContext();
  function TriggerProvider($$anchor, $$props) {
    push($$props, true);
    setTriggerContext((data) => $$props.ontrigger(data));
    var fragment = comment();
    var node = first_child(fragment);
    snippet(node, () => $$props.children);
    append($$anchor, fragment);
    pop();
  }

  // ../../packages/ui-protocol/src/svelte/Trigger.svelte
  function Trigger($$anchor, $$props) {
    push($$props, true);
    const dispatch = getTriggerContext();
    user_effect(() => {
      dispatch($$props.event);
    });
    pop();
  }

  // ../../packages/blender-elements/src/NumberInput/NumberInput.svelte
  var import_math_expression_evaluator = __toESM(require_es());

  // ../../packages/blender-elements/src/actions/blurOnEnter.ts
  function blurOnEnter(el) {
    function onKeydown(e) {
      if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
        el.blur();
      }
    }
    el.addEventListener("keydown", onKeydown);
    return {
      destroy() {
        el.removeEventListener("keydown", onKeydown);
      }
    };
  }

  // ../../packages/blender-elements/src/actions/numberDrag.ts
  var pointerLockSupported = true;
  function numberDrag(el, config) {
    let started;
    async function onMousedown(e) {
      if (!config.step) {
        return;
      }
      config.onDown?.(e);
      if (typeof config.value === "number") {
        started = {
          moved: 0,
          value: config.value,
          ts: Date.now()
        };
        document.addEventListener("mousemove", onMousemove);
        if (e.target === el) {
          await requestPointerLock(el);
        }
      }
    }
    function onMouseup(e) {
      config.onUp?.(e);
      if (!started) {
        return;
      }
      document.removeEventListener("mousemove", onMousemove);
      if (pointerLockSupported) {
        document.exitPointerLock();
      }
      if (started.moved === 0) {
        config.onClick?.(e);
      }
      started = void 0;
    }
    function onMousemove(e) {
      if (!started || !config.step) {
        return;
      }
      if (started.moved === 0) {
        started.moved = Math.min(1, Math.max(e.movementX, -1));
      } else {
        started.moved += e.movementX;
      }
      const mouseStep = e.shiftKey ? config.step / 20 : config.step / 2;
      const offset = started.moved * mouseStep;
      let value = started.value + offset;
      if (e.ctrlKey) {
        const rest = value % (config.step * (e.shiftKey ? 1 : 10));
        value -= rest;
      }
      if (typeof config.min === "number" && value < config.min) {
        value = config.min;
      }
      if (typeof config.max === "number" && value > config.max) {
        value = config.max;
      }
      config.onChange(value);
    }
    el.addEventListener("mousedown", onMousedown);
    document.addEventListener("mouseup", onMouseup);
    return {
      update(next2) {
        config = next2;
      },
      destroy() {
        el.removeEventListener("mousedown", onMousedown);
        document.removeEventListener("mouseup", onMouseup);
        document.removeEventListener("mousemove", onMousemove);
      }
    };
  }
  async function requestPointerLock(el) {
    if (!pointerLockSupported) {
      return;
    }
    try {
      await el.requestPointerLock();
    } catch (err) {
      console.warn(err);
      pointerLockSupported = false;
    }
  }

  // ../../packages/blender-elements/src/actions/revertOnEscape.ts
  function revertOnEscape(el, previous) {
    function onKeydown(e) {
      if (e.key === "Escape") {
        el.value = previous;
        el.dispatchEvent(new InputEvent("input"));
        e.preventDefault();
        setTimeout(() => {
          el.blur();
        }, 0);
      }
    }
    el.addEventListener("keydown", onKeydown);
    return {
      update(value) {
        previous = value;
      },
      destroy() {
        el.removeEventListener("keydown", onKeydown);
      }
    };
  }

  // ../../packages/blender-elements/src/NumberInput/NumberInput.svelte
  var mexp = new import_math_expression_evaluator.default();
  var root_1 = from_tree([
    [
      "div",
      { class: "drag svelte-wfwke9" },
      [
        "button",
        { class: "arrow left svelte-wfwke9", "aria-label": "down" }
      ],
      " ",
      [
        "button",
        { class: "arrow right svelte-wfwke9", "aria-label": "up" }
      ]
    ]
  ]);
  var root4 = from_tree([
    [
      "div",
      null,
      ["input", { class: "input svelte-wfwke9" }],
      " ",
      ,
    ]
  ]);
  var $$css3 = {
    hash: "svelte-wfwke9",
    code: '.number-input.svelte-wfwke9 {position:relative;overflow:hidden;background:#545454;&:not(.focused, .active):hover {background-color:#656565;}&.active,\n    &.focused {background-color:#222;}&[data-rounded="all"] {border-radius:2px / 3px;}&[data-rounded="top"] {border-top-left-radius:2px 3px;border-top-right-radius:2px 3px;}&[data-rounded="bottom"] {border-bottom-right-radius:2px 3px;border-bottom-left-radius:2px 3px;}}.input.svelte-wfwke9 {display:block;box-sizing:border-box;width:100%;padding-top:2px;padding-bottom:2px;border:0;font:inherit;color:#e5e5e5;text-align:center;text-shadow:0 1px 2px #000c;background-color:transparent;outline:none;&::selection {background-color:#4570b5;}&:focus {color:#e5e5e5;}}.svelte-wfwke9:not(.focused, .active) .input:where(.svelte-wfwke9):hover {color:#fcfcfc;background-color:#797979;}.drag.svelte-wfwke9 {cursor:col-resize;position:absolute;inset:0;}.arrow.svelte-wfwke9 {cursor:pointer;position:absolute;top:0;bottom:0;display:none;width:13px;border:none;color:white;background:none;background:#656565 no-repeat center center;&.left {left:0;background-image:var(--icon-chevron-left);}&.right {right:0;background-image:var(--icon-chevron-right);}}.number-input.svelte-wfwke9:hover .arrow:where(.svelte-wfwke9) {display:block;}\n\n  /* stylelint-disable-next-line no-descending-specificity */.active.svelte-wfwke9 .arrow:where(.svelte-wfwke9) {background-color:#222;}.svelte-wfwke9:not(.focused, .active) .arrow:where(.svelte-wfwke9):hover {background-color:#797979;}'
  };
  function NumberInput($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css3);
    let value = prop($$props, "value", 15), suffix = prop($$props, "suffix", 3, ""), rounded = prop($$props, "rounded", 3, "all");
    let el;
    let wanted = state(proxy(value()));
    let text2 = state(proxy(format(value())));
    let focused = state(false);
    let active = state(false);
    let previous = state(proxy(value()));
    user_effect(() => {
      if (get2(wanted) !== value() && document.activeElement !== el) {
        set(text2, format(value()), true);
        set(wanted, value(), true);
      }
    });
    function format(val) {
      if (val === void 0 || Number.isNaN(val)) {
        return "";
      }
      if (val > 1e6) {
        return Math.round(val).toString() + suffix();
      }
      return val.toFixed(6).toString().substring(0, 7).replace(/\.?0+$/, "") + suffix();
    }
    function onInput() {
      try {
        set(wanted, mexp.eval(el.value), true);
      } catch {
        return;
      }
      if (value() !== get2(wanted)) {
        value(get2(wanted));
      }
    }
    function onFocus() {
      set(previous, value(), true);
      set(focused, true);
      if (suffix() && get2(text2).endsWith(suffix())) {
        set(text2, get2(text2).substring(0, get2(text2).length - suffix().length), true);
        el.value = get2(text2);
      }
      el.select();
    }
    function onBlur() {
      set(focused, false);
      if (get2(wanted) !== get2(previous)) {
        value(get2(wanted));
        if (typeof value() === "number") {
          $$props.setValue?.(value());
        }
      }
      set(text2, format(value()), true);
    }
    function onStepDown() {
      if ($$props.step && typeof value() === "number") {
        value(value() - $$props.step);
        $$props.setValue?.(value());
      }
    }
    function onStepUp() {
      if ($$props.step && typeof value() === "number") {
        value(value() + $$props.step);
        $$props.setValue?.(value());
      }
    }
    function onChange(next2) {
      value(next2);
      $$props.setValue?.(value());
    }
    function onClick(e) {
      const type = e.target.nodeName;
      if (type !== "BUTTON") {
        el.focus();
      }
    }
    function onDown() {
      set(active, true);
    }
    function onUp() {
      set(active, false);
    }
    var div = root4();
    let classes;
    var input = child(div);
    remove_input_defaults(input);
    action(input, ($$node) => blurOnEnter?.($$node));
    action(input, ($$node, $$action_arg) => revertOnEscape?.($$node, $$action_arg), () => get2(previous)?.toString() ?? "");
    bind_this(input, ($$value) => el = $$value, () => el);
    effect(() => bind_value(input, () => get2(text2), ($$value) => set(text2, $$value)));
    var node = sibling(input, 2);
    {
      var consequent = ($$anchor2) => {
        var div_1 = root_1();
        var button = child(div_1);
        var button_1 = sibling(button, 2);
        reset(div_1);
        action(div_1, ($$node, $$action_arg) => numberDrag?.($$node, $$action_arg), () => ({
          value: value(),
          step: $$props.step,
          min: $$props.min,
          max: $$props.max,
          onChange,
          onClick,
          onDown,
          onUp
        }));
        delegated("click", button, onStepDown);
        delegated("click", button_1, onStepUp);
        append($$anchor2, div_1);
      };
      if_block(node, ($$render) => {
        if (!get2(focused) && $$props.step) $$render(consequent);
      });
    }
    reset(div);
    template_effect(() => {
      classes = set_class(div, 1, "number-input svelte-wfwke9", null, classes, { active: get2(active), focused: get2(focused) });
      set_attribute2(div, "data-rounded", rounded());
      set_attribute2(input, "id", $$props.id);
    });
    delegated("input", input, onInput);
    event("focus", input, onFocus);
    event("blur", input, onBlur);
    append($$anchor, div);
    pop();
  }
  delegate(["input", "click"]);

  // ../../packages/blender-elements/src/Button/Button.svelte
  var root_2 = from_tree([["span", null, ,]]);
  var root5 = from_tree([["button", null, ,]]);
  var $$css4 = {
    hash: "svelte-gmpyif",
    code: '.button.svelte-gmpyif {cursor:pointer;user-select:none;display:block;flex-shrink:0;box-sizing:border-box;width:100%;height:18px;padding-inline:8px;border:1px solid #3d3d3d;font:inherit;color:#e6e6e6;appearance:none;background:#545454 no-repeat center center;box-shadow:0 1px 1px #0009;&[data-location="alone"] {border-radius:2px / 3px;}&[data-location="left"] {margin-right:1px;border-top-left-radius:2px 3px;border-bottom-left-radius:2px 3px;}&[data-location="center"] {margin-right:1px;}&[data-location="right"] {border-top-right-radius:2px 3px;border-bottom-right-radius:2px 3px;}&:hover {color:#fff;background:#656565;}&.pressed,\n    &:active {color:#fff;background-color:#4772b3;}}'
  };
  function Button($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css4);
    let value = prop($$props, "value", 15, void 0), label2 = prop($$props, "label", 3, ""), location = prop($$props, "location", 3, "alone");
    function toggle() {
      if (typeof value() === "boolean") {
        value(!value());
        $$props.setValue?.(value());
      }
    }
    var button = root5();
    let classes;
    var node = child(button);
    {
      var consequent = ($$anchor2) => {
        var text2 = text();
        template_effect(() => set_text(text2, label2()));
        append($$anchor2, text2);
      };
      var consequent_1 = ($$anchor2) => {
        var span = root_2();
        var node_1 = child(span);
        snippet(node_1, () => $$props.children ?? noop);
        reset(span);
        append($$anchor2, span);
      };
      if_block(node, ($$render) => {
        if (label2()) $$render(consequent);
        else if ($$props.children) $$render(consequent_1, 1);
      });
    }
    reset(button);
    template_effect(() => {
      classes = set_class(button, 1, "button svelte-gmpyif", null, classes, { pressed: value() });
      set_attribute2(button, "data-location", location());
    });
    delegated("click", button, (e) => {
      e.stopPropagation();
      toggle();
      $$props.onclick?.();
    });
    delegated("dblclick", button, (e) => e.stopPropagation());
    append($$anchor, button);
    pop();
  }
  delegate(["click", "dblclick"]);

  // ../../packages/blender-elements/src/CheckboxInput/CheckboxInput.svelte
  var root_12 = from_tree([["span", null, " "]]);
  var root_22 = from_tree([["span", null, ,]]);
  var root6 = from_tree([
    [
      "label",
      { class: "checkbox svelte-gnlrgh" },
      ["input", { class: "input svelte-gnlrgh", type: "checkbox" }],
      " ",
      ,
    ]
  ]);
  var $$css5 = {
    hash: "svelte-gnlrgh",
    code: ".checkbox.svelte-gnlrgh {cursor:pointer;user-select:none;display:flex;gap:3px;align-items:center;}.input.svelte-gnlrgh {width:14px;height:14px;margin:0;border:1px solid #3d3d3d;border-radius:3px;appearance:none;background:#545454;outline:none;box-shadow:0 1px 1px #0003;&:checked {background:#4772b3 var(--icon-checkbox) no-repeat center center;}&:focus-visible {border-color:#4772b3;&:checked {border-color:white;}}.checkbox:where(.svelte-gnlrgh):hover &:not(:checked) {border-color:#464646;background:#656565;}}"
  };
  function CheckboxInput($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css5);
    let value = prop($$props, "value", 15, void 0);
    var label_1 = root6();
    var input = child(label_1);
    remove_input_defaults(input);
    var node = sibling(input, 2);
    {
      var consequent = ($$anchor2) => {
        var span = root_12();
        var text2 = child(span, true);
        reset(span);
        template_effect(() => set_text(text2, $$props.label));
        append($$anchor2, span);
      };
      var consequent_1 = ($$anchor2) => {
        var span_1 = root_22();
        var node_1 = child(span_1);
        snippet(node_1, () => $$props.children ?? noop);
        reset(span_1);
        append($$anchor2, span_1);
      };
      if_block(node, ($$render) => {
        if ($$props.label) $$render(consequent);
        else if ($$props.children) $$render(consequent_1, 1);
      });
    }
    reset(label_1);
    template_effect(() => set_attribute2(label_1, "title", $$props.hint));
    delegated("click", input, (e) => e.stopPropagation());
    delegated("change", input, (e) => {
      const el = e.target;
      $$props.setValue?.(el.checked);
    });
    bind_checked(input, value);
    append($$anchor, label_1);
    pop();
  }
  delegate(["click", "change"]);

  // ../../packages/blender-elements/src/Property/Property.svelte
  var root7 = from_tree([
    [
      "div",
      { class: "property svelte-2utn5d" },
      ["div", { class: "label svelte-2utn5d" }, " "],
      " ",
      ["div", { class: "value svelte-2utn5d" }, ,]
    ]
  ]);
  var $$css6 = {
    hash: "svelte-2utn5d",
    code: ".property.svelte-2utn5d {display:flex;gap:8px;align-items:center;}.label.svelte-2utn5d {user-select:none;overflow:hidden;flex:1;text-align:right;text-overflow:ellipsis;white-space:nowrap;}.value.svelte-2utn5d {flex:2;}"
  };
  function Property($$anchor, $$props) {
    append_styles($$anchor, $$css6);
    let label2 = prop($$props, "label", 3, ""), hint = prop($$props, "hint", 3, "");
    var div = root7();
    var div_1 = child(div);
    var text2 = child(div_1, true);
    reset(div_1);
    var div_2 = sibling(div_1, 2);
    var node = child(div_2);
    snippet(node, () => $$props.children ?? noop);
    reset(div_2);
    reset(div);
    template_effect(() => {
      set_attribute2(div_1, "title", hint());
      set_text(text2, label2());
    });
    append($$anchor, div);
  }

  // ../../packages/blender-elements/src/px.ts
  function px(value) {
    if (value === void 0) {
      return void 0;
    }
    if (typeof value === "number") {
      return `${value}px`;
    }
    return value;
  }

  // ../../packages/blender-elements/src/cssBox.ts
  function cssEdges(config) {
    if (config === void 0) {
      return void 0;
    }
    if (typeof config === "string" || typeof config === "number") {
      return px(config);
    }
    return `${px(config.top) ?? "0"} ${px(config.right) ?? "0"} ${px(config.bottom) ?? "0"} ${px(config.left) ?? "0"}`;
  }

  // ../../packages/blender-elements/src/Box/Box.svelte
  var root8 = from_tree([["div", { class: "box svelte-3ekedt" }, ,]]);
  var $$css7 = {
    hash: "svelte-3ekedt",
    code: ".box.svelte-3ekedt {display:flex;flex-direction:column;}"
  };
  function Box($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css7);
    var div = root8();
    let styles;
    var node = child(div);
    snippet(node, () => $$props.children);
    reset(div);
    template_effect(($0) => styles = set_style(div, "", styles, $0), [
      () => ({
        gap: px($$props.gap),
        "align-items": $$props.align,
        margin: cssEdges($$props.margin),
        padding: cssEdges($$props.padding)
      })
    ]);
    append($$anchor, div);
    pop();
  }

  // ../../packages/blender-elements/src/Panel/Panel.svelte
  var root_23 = from_tree([["div", null, ,]]);
  var root9 = from_tree([
    [
      "section",
      { class: "panel svelte-lo575x" },
      ["button", null, , " ", ["span", null, " "]],
      " ",
      ,
    ]
  ]);
  var $$css8 = {
    hash: "svelte-lo575x",
    code: '.panel.svelte-lo575x {border-radius:4px;background:#3d3d3d;}.title.svelte-lo575x {user-select:none;position:relative;display:flex;gap:4px;align-items:center;box-sizing:border-box;width:100%;min-height:24px;padding:4px 16px 4px 20px;border:0;font-size:inherit;color:inherit;text-align:left;appearance:none;background:transparent;&::before {content:"";position:absolute;top:3px;left:3px;width:16px;height:16px;opacity:0.5;background:var(--icon-chevron-right) center center no-repeat;}&.expanded::before {background-image:var(--icon-chevron-down);}}.content.unused.svelte-lo575x {opacity:0.5;}'
  };
  function Panel($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css8);
    let expanded = prop($$props, "expanded", 15, true), value = prop($$props, "value", 15, void 0);
    var section = root9();
    var button = child(section);
    let classes;
    var node = child(button);
    {
      var consequent = ($$anchor2) => {
        CheckboxInput($$anchor2, {
          get setValue() {
            return $$props.setValue;
          },
          get value() {
            return value();
          },
          set value($$value) {
            value($$value);
          }
        });
      };
      if_block(node, ($$render) => {
        if (typeof value() === "boolean") $$render(consequent);
      });
    }
    var span = sibling(node, 2);
    var text2 = child(span, true);
    reset(span);
    reset(button);
    var node_1 = sibling(button, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var div = root_23();
        let classes_1;
        var node_2 = child(div);
        snippet(node_2, () => $$props.children ?? noop);
        reset(div);
        template_effect(() => classes_1 = set_class(div, 1, "content svelte-lo575x", null, classes_1, { unused: value() === false }));
        transition(3, div, () => slide, () => ({ duration: 150 }));
        append($$anchor2, div);
      };
      if_block(node_1, ($$render) => {
        if (expanded()) $$render(consequent_1);
      });
    }
    reset(section);
    template_effect(() => {
      classes = set_class(button, 1, "title svelte-lo575x", null, classes, { expanded: expanded() });
      set_text(text2, $$props.title);
    });
    delegated("click", button, () => {
      expanded(!expanded());
      $$props.setExpanded?.(expanded());
    });
    append($$anchor, section);
    pop();
  }
  delegate(["click"]);

  // ../../packages/blender-elements/src/actions/selectOnFocus.ts
  function selectOnFocus(el) {
    function onFocus() {
      el.select();
    }
    el.addEventListener("focus", onFocus);
    return {
      destroy() {
        el.removeEventListener("focus", onFocus);
      }
    };
  }

  // ../../packages/blender-elements/src/TextInput/TextInput.svelte
  var root_13 = from_tree([
    [
      "div",
      { class: "text-input svelte-1u6urhx" },
      ["div", { class: "spacer svelte-1u6urhx" }, " "],
      " ",
      ["textarea", { class: "textarea svelte-1u6urhx" }]
    ]
  ]);
  var root_24 = from_tree([
    [
      "input",
      {
        type: "text",
        class: "input svelte-1u6urhx",
        spellcheck: "false"
      }
    ]
  ]);
  var $$css9 = {
    hash: "svelte-1u6urhx",
    code: ".text-input.svelte-1u6urhx {position:relative;width:100%;}.input.svelte-1u6urhx,\n  .textarea.svelte-1u6urhx,\n  .spacer.svelte-1u6urhx {display:block;box-sizing:border-box;width:100%;margin:0;padding:2px 6px;border:none;border:1px solid #3d3d3d;border-radius:4px;font:inherit;color:#fdfdfd;appearance:none;background:#1d1d1c;outline:none;box-shadow:0 1px 3px #0000004d;caret-color:#71a8ff;&::selection {background-color:#4570b5;}&:hover:not(:focus) {border-color:#414141;background:#232323;}\n\n    /* stylelint-disable-next-line no-descending-specificity */&:focus {cursor:text;}}\n\n  /* stylelint-disable-next-line no-descending-specificity */.spacer.svelte-1u6urhx {position:relative;width:100%;white-space:pre-wrap;visibility:hidden;}\n  /* stylelint-disable-next-line no-descending-specificity */.textarea.svelte-1u6urhx {resize:none;position:absolute;top:0;left:0;overflow-y:hidden;width:100%;height:100%;}"
  };
  function TextInput($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css9);
    let value = prop($$props, "value", 15), id = prop($$props, "id", 3, void 0);
    let el = state(void 0);
    let text2 = state(proxy(value()));
    let previous = state(proxy(value()));
    let multiline = state(false);
    user_effect(() => {
      if (get2(text2) !== value() && document.activeElement !== get2(el)) {
        set(text2, value(), true);
        set(multiline, get2(text2).includes("\n"), true);
      }
      if (get2(text2).includes("\n")) {
        set(multiline, true);
      }
    });
    function onInput() {
      if (get2(text2) !== value()) {
        value(get2(text2));
        $$props.oninput?.(value());
      }
    }
    function onFocus() {
      set(previous, get2(text2), true);
    }
    function onBlur() {
      if (!get2(el)) {
        return;
      }
      if (get2(previous) !== get2(text2)) {
        value(get2(text2));
        $$props.setValue?.(get2(text2));
      }
      if (get2(el).tagName === "TEXTAREA" && !get2(text2).includes("\n")) {
        set(multiline, false);
      }
    }
    async function onKeydown(e) {
      if (!get2(el)) {
        return;
      }
      if (e.key === "Enter" && e.shiftKey) {
        const { selectionStart } = get2(el);
        set(multiline, true);
        await tick();
        get2(el).focus();
        get2(el).selectionStart = selectionStart;
        get2(el).selectionEnd = selectionStart;
      }
    }
    var fragment = comment();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor2) => {
        var div = root_13();
        var div_1 = child(div);
        var text_1 = child(div_1);
        reset(div_1);
        var textarea = sibling(div_1, 2);
        remove_textarea_child(textarea);
        bind_this(textarea, ($$value) => set(el, $$value), () => get2(el));
        effect(() => bind_value(textarea, () => get2(text2), ($$value) => set(text2, $$value)));
        action(textarea, ($$node) => blurOnEnter?.($$node));
        action(textarea, ($$node, $$action_arg) => revertOnEscape?.($$node, $$action_arg), () => get2(previous));
        reset(div);
        template_effect(() => {
          set_text(text_1, `\xA0${get2(text2) ?? ""}\xA0`);
          set_attribute2(textarea, "id", id());
        });
        delegated("input", textarea, onInput);
        event("blur", textarea, onBlur);
        append($$anchor2, div);
      };
      var alternate = ($$anchor2) => {
        var input = root_24();
        remove_input_defaults(input);
        bind_this(input, ($$value) => set(el, $$value), () => get2(el));
        effect(() => bind_value(input, () => get2(text2), ($$value) => set(text2, $$value)));
        action(input, ($$node) => blurOnEnter?.($$node));
        action(input, ($$node, $$action_arg) => revertOnEscape?.($$node, $$action_arg), () => get2(previous));
        action(input, ($$node) => selectOnFocus?.($$node));
        template_effect(() => set_attribute2(input, "id", id()));
        delegated("keydown", input, onKeydown);
        delegated("input", input, onInput);
        event("focus", input, onFocus);
        event("blur", input, onBlur);
        append($$anchor2, input);
      };
      if_block(node, ($$render) => {
        if (get2(multiline)) $$render(consequent);
        else $$render(alternate, -1);
      });
    }
    append($$anchor, fragment);
    pop();
  }
  delegate(["input", "keydown"]);

  // ../../packages/blender-elements/src/SearchInput/SearchInput.svelte
  var root_14 = from_tree([
    [
      "button",
      { class: "clear svelte-5otgu9", "aria-label": "clear" }
    ]
  ]);
  var root10 = from_tree([
    [
      "div",
      { class: "search-input svelte-5otgu9" },
      [
        "input",
        {
          type: "text",
          class: "input svelte-5otgu9",
          spellcheck: "false"
        }
      ],
      " ",
      ["div", { class: "search-icon svelte-5otgu9" }],
      " ",
      ,
    ]
  ]);
  var $$css10 = {
    hash: "svelte-5otgu9",
    code: ".search-input.svelte-5otgu9 {position:relative;}.input.svelte-5otgu9 {cursor:default;box-sizing:border-box;width:100%;padding:2px 20px 2px 25px;border:none;border:1px solid #3d3d3d;border-radius:4px;font:inherit;color:#fdfdfd;background:#1d1d1c;outline:none;box-shadow:0 1px 3px #0000004d;caret-color:#71a8ff;&::selection {background-color:#4570b5;}&:focus {cursor:text;background:#161616;}}.search-input.svelte-5otgu9:hover .input:where(.svelte-5otgu9):not(:focus) {border-color:#414141;background:#232323;}.search-icon.svelte-5otgu9 {position:absolute;top:calc(50% - 8px);left:4px;width:16px;height:16px;background:var(--icon-search) center center no-repeat;}.clear.svelte-5otgu9 {cursor:pointer;position:absolute;top:0;right:0;width:20px;height:100%;border:none;opacity:0.8;background:var(--icon-cross) center center no-repeat;&:hover {opacity:1;}}"
  };
  function SearchInput($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css10);
    let value = prop($$props, "value", 15);
    let text2 = state(proxy(value()));
    let previous = state(proxy(value()));
    function onInput() {
      if (get2(text2) !== value()) {
        value(get2(text2));
        $$props.setValue?.(value());
        if (value() === "") {
          $$props.onclear?.();
        }
      }
    }
    function onFocus() {
      set(previous, get2(text2), true);
    }
    function clear() {
      set(text2, "");
      value("");
      $$props.setValue?.(get2(text2));
      $$props.onclear?.();
    }
    var div = root10();
    var input = child(div);
    remove_input_defaults(input);
    effect(() => bind_value(input, () => get2(text2), ($$value) => set(text2, $$value)));
    action(input, ($$node) => blurOnEnter?.($$node));
    action(input, ($$node, $$action_arg) => revertOnEscape?.($$node, $$action_arg), () => get2(previous));
    action(input, ($$node) => selectOnFocus?.($$node));
    var node = sibling(input, 4);
    {
      var consequent = ($$anchor2) => {
        var button = root_14();
        delegated("click", button, clear);
        append($$anchor2, button);
      };
      if_block(node, ($$render) => {
        if (value() !== "") $$render(consequent);
      });
    }
    reset(div);
    template_effect(() => set_attribute2(input, "id", $$props.id));
    delegated("input", input, onInput);
    event("focus", input, onFocus);
    append($$anchor, div);
    pop();
  }
  delegate(["input", "click"]);

  // ../../packages/blender-elements/src/Grid/Grid.svelte
  var root11 = from_tree([["div", { class: "grid svelte-jfatk7" }, ,]]);
  var $$css11 = {
    hash: "svelte-jfatk7",
    code: ".grid.svelte-jfatk7 {display:grid;}"
  };
  function Grid($$anchor, $$props) {
    append_styles($$anchor, $$css11);
    var div = root11();
    let styles;
    var node = child(div);
    snippet(node, () => $$props.children);
    reset(div);
    template_effect(() => styles = set_style(div, "", styles, {
      "grid-template-columns": `repeat(${$$props.cols ?? ""}, 1fr)`,
      gap: typeof $$props.gap === "number" ? `${$$props.gap}px` : $$props.gap
    }));
    append($$anchor, div);
  }

  // ../../packages/blender-elements/src/SplitPanel/SplitPanel.svelte
  var root12 = from_tree([["div", { class: "split-panel svelte-zxoekf" }, ,]]);
  var $$css12 = {
    hash: "svelte-zxoekf",
    code: ".split-panel.svelte-zxoekf {cursor:default;position:relative;flex-basis:0;flex-grow:1;}"
  };
  function SplitPanel($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css12);
    let minWidth = prop($$props, "minWidth", 3, 3), minHeight = prop($$props, "minHeight", 3, 3);
    let sizeOrDefault = user_derived(() => $$props.size ?? 1);
    const ctx = getContext("SplitPanel");
    if (!ctx) {
      console.warn("SplitPanel must be used within a SplitPanels component.");
    }
    let direction = user_derived(() => ctx.direction);
    function sizeAction(el) {
      let from = untrack(() => get2(sizeOrDefault));
      el.style.flexGrow = `${get2(sizeOrDefault)}`;
      user_effect(() => {
        if (from !== get2(sizeOrDefault)) {
          from = get2(sizeOrDefault);
          el.style.flexGrow = `${parseFloat(el.style.flexGrow) * (get2(sizeOrDefault) / from)}`;
        }
      });
    }
    var div = root12();
    let styles;
    var node = child(div);
    snippet(node, () => $$props.children);
    reset(div);
    attach(div, () => sizeAction);
    template_effect(() => styles = set_style(div, "", styles, {
      "min-width": get2(direction) === "row" && minWidth() ? `${minWidth()}px` : void 0,
      "min-height": get2(direction) === "column" && minHeight() ? `${minHeight()}px` : void 0,
      "max-width": get2(direction) === "row" && $$props.maxWidth ? `${$$props.maxWidth}px` : void 0,
      "max-height": get2(direction) === "column" && $$props.maxHeight ? `${$$props.maxHeight}px` : void 0
    }));
    append($$anchor, div);
    pop();
  }

  // ../../packages/blender-elements/src/SplitPanel/SplitPanels.svelte
  var root13 = from_tree([
    [
      "div",
      { class: "split-panels svelte-7hxsuq" },
      ["div"],
      " ",
      ,
    ]
  ]);
  var $$css13 = {
    hash: "svelte-7hxsuq",
    code: ".split-panels.svelte-7hxsuq {position:relative;display:flex;flex-wrap:nowrap;gap:3px;width:100%;height:100%;}.divider-area.svelte-7hxsuq {position:absolute;inset:1px;border:0;appearance:none;background:transparent;&.dragging {z-index:1;}}"
  };
  function SplitPanels($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css13);
    let dragFrom = state(void 0);
    let clientWidth = state(0);
    let clientHeight = state(0);
    let el;
    let pair;
    setContext("SplitPanel", {
      get direction() {
        return $$props.direction;
      }
    });
    user_effect(() => {
      $$props.onresize?.({ width: get2(clientWidth), height: get2(clientHeight) });
    });
    function dragStart(e) {
      set(dragFrom, $$props.direction === "row" ? e.clientX : e.clientY, true);
      pair = void 0;
      let totalGrow = 0;
      let totalSize = 0;
      const panels = Array.from(el.children).filter((child2) => child2.classList.contains("split-panel")).map((div) => {
        const el2 = div;
        const bounds = el2.getBoundingClientRect();
        const grow = parseFloat(el2.style.flexGrow);
        const size = $$props.direction === "row" ? bounds.width : bounds.height;
        totalGrow += grow;
        totalSize += size;
        const panel = {
          grow,
          el: el2,
          size,
          offset: $$props.direction === "row" ? bounds.left : bounds.top,
          min: $$props.direction === "row" ? parseFloat(el2.style.minWidth) || 0 : parseFloat(el2.style.minHeight) || 0,
          max: $$props.direction === "row" ? parseFloat(el2.style.maxWidth) : parseFloat(el2.style.maxHeight)
        };
        return panel;
      });
      if (panels.length < 2) {
        return;
      }
      for (const panel of panels) {
        panel.el.style.flexGrow = `${panel.size / totalSize * totalGrow}`;
      }
      if (panels.length === 2) {
        pair = [panels[0], panels[1]];
      } else {
        for (let i = 1; i < panels.length; i++) {
          const panel = panels[i];
          if (Math.ceil(panel.size + panel.offset) > get2(dragFrom)) {
            pair = [panels[i - 1], panel];
            break;
          }
        }
      }
      if (!pair) {
        console.warn("Unable to detect which panels to resize");
        return;
      }
    }
    function drag(e) {
      if (!get2(dragFrom) || !pair) {
        return;
      }
      let distance = ($$props.direction === "row" ? e.clientX : e.clientY) - get2(dragFrom);
      if (distance > 0) {
        if (distance > pair[1].size - pair[1].min) {
          distance = pair[1].size - pair[1].min;
        }
        if (pair[0].max > 0) {
          if (pair[0].size + distance > pair[0].max) {
            distance = pair[0].max - pair[0].size;
          }
        }
      } else {
        if (pair[0].size + distance < pair[0].min) {
          distance = -pair[0].size + pair[0].min;
        }
        if (pair[1].max > 0) {
          if (distance * -1 + pair[1].size > pair[1].max) {
            distance = pair[1].size - pair[1].max;
          }
        }
      }
      const totalSize = pair[0].size + pair[1].size;
      const totalGrow = pair[0].grow + pair[1].grow;
      const grow = distance / totalSize * totalGrow;
      pair[0].el.style.flexGrow = `${pair[0].grow + grow}`;
      pair[1].el.style.flexGrow = `${pair[1].grow - grow}`;
    }
    function dragEnd() {
      set(dragFrom, void 0);
    }
    var div_1 = root13();
    event("mouseup", $window, dragEnd);
    let styles;
    var div_2 = child(div_1);
    let classes;
    let styles_1;
    var node = sibling(div_2, 2);
    snippet(node, () => $$props.children);
    reset(div_1);
    bind_this(div_1, ($$value) => el = $$value, () => el);
    template_effect(() => {
      styles = set_style(div_1, "", styles, { "flex-direction": $$props.direction });
      classes = set_class(div_2, 1, "divider-area svelte-7hxsuq", null, classes, { dragging: get2(dragFrom) });
      styles_1 = set_style(div_2, "", styles_1, {
        cursor: $$props.direction === "column" ? "row-resize" : "col-resize"
      });
    });
    delegated("mousedown", div_2, dragStart);
    delegated("mousemove", div_2, drag);
    bind_element_size(div_2, "clientWidth", ($$value) => set(clientWidth, $$value));
    bind_element_size(div_2, "clientHeight", ($$value) => set(clientHeight, $$value));
    append($$anchor, div_1);
    pop();
  }
  delegate(["mousedown", "mousemove"]);

  // ../../packages/blender-elements/src/Tabs/Tabs.svelte
  var root_15 = from_tree([["button", null, ["div", { class: "icon svelte-2av1gf" }]]]);
  var root14 = from_tree([
    [
      "div",
      { class: "tab-layout svelte-2av1gf" },
      ["div", { class: "tabs svelte-2av1gf" }],
      " ",
      ["div", { class: "content svelte-2av1gf" }, ,]
    ]
  ]);
  var $$css14 = {
    hash: "svelte-2av1gf",
    code: ".tab-layout.svelte-2av1gf {display:flex;height:100%;}.tabs.svelte-2av1gf {overflow-y:auto;display:flex;flex-direction:column;flex-shrink:0;gap:2px;padding-top:8px;padding-left:2px;background:#181818;}.tab.svelte-2av1gf {cursor:pointer;position:relative;box-sizing:border-box;width:26px;height:26px;border:0;border:1px solid transparent;border-top-left-radius:4px;border-bottom-left-radius:4px;appearance:none;background:transparent;outline:none;&:hover {background-color:#202020;}&.active {background-color:#303030;}&:focus-visible {border-color:#4772b3;border-right-color:transparent;}}.icon.svelte-2av1gf {position:absolute;top:4px;left:4px;width:16px;height:16px;opacity:0.8;background:center center no-repeat;}.active.svelte-2av1gf .icon:where(.svelte-2av1gf),\n  .tab.svelte-2av1gf:hover .icon:where(.svelte-2av1gf) {opacity:1;}.content.svelte-2av1gf {overflow-y:auto;flex-grow:1;background:#303030;}"
  };
  function Tabs($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css14);
    let active = prop($$props, "active", 15);
    var div = root14();
    var div_1 = child(div);
    each(div_1, 20, () => Object.keys($$props.tabs), (key2) => key2, ($$anchor2, key2) => {
      const tab = user_derived(() => $$props.tabs[key2]);
      var button = root_15();
      let classes;
      var div_2 = child(button);
      let styles;
      reset(button);
      template_effect(() => {
        classes = set_class(button, 1, "tab svelte-2av1gf", null, classes, { active: key2 === active() });
        set_attribute2(button, "title", get2(tab).label);
        set_attribute2(button, "aria-label", get2(tab).label);
        styles = set_style(div_2, "", styles, { "background-image": `var(--icon-${get2(tab).icon ?? ""})` });
      });
      delegated("mousedown", button, () => {
        active(key2);
        $$props.setActive?.(key2);
      });
      append($$anchor2, button);
    });
    reset(div_1);
    var div_3 = sibling(div_1, 2);
    var node = child(div_3);
    snippet(node, () => $$props.children);
    reset(div_3);
    reset(div);
    append($$anchor, div);
    pop();
  }
  delegate(["mousedown"]);

  // ../../packages/blender-elements/src/ColorInput/color-fns.ts
  function hexToRgb(color) {
    const rgb = unsafeHexToRgb(color);
    if (rgb === void 0) {
      return [0, 0, 0, void 0];
    }
    return rgb;
  }
  function rgbToHex(r, g, b, a) {
    if (a === void 0) {
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}`;
  }
  function rgbToHsv(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const v = max;
    let h = 0;
    let s;
    const d = max - min;
    if (max === 0) {
      s = 0;
    } else {
      s = d / max;
    }
    if (max === min) {
      h = 0;
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return [h * 360, s * 100, v * 100];
  }
  function hsvToRgb(h, s, v) {
    const hue = h / 360;
    const saturation = s / 100;
    const value = v / 100;
    let r = 0;
    let g = 0;
    let b = 0;
    const i = Math.floor(hue * 6);
    const f = hue * 6 - i;
    const p = value * (1 - saturation);
    const q = value * (1 - saturation * f);
    const t = value * (1 - saturation * (1 - f));
    const vInt = i % 6;
    switch (vInt) {
      case 0:
        r = value;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = value;
        b = p;
        break;
      case 2:
        r = p;
        g = value;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = value;
        break;
      case 4:
        r = t;
        g = p;
        b = value;
        break;
      case 5:
        r = value;
        g = p;
        b = q;
        break;
    }
    return [r * 255, g * 255, b * 255];
  }
  function hexToHsv(hex) {
    const [r, g, b, a] = hexToRgb(hex);
    return [...rgbToHsv(r, g, b), a];
  }
  function hsvToHex(h, s, v, a) {
    const [r, g, b] = hsvToRgb(h, s, v);
    return rgbToHex(r, g, b, a);
  }
  function toHex(channel) {
    return Math.round(Math.max(0, Math.min(255, channel))).toString(16).padStart(2, "0");
  }
  function unsafeHexToRgb(hex) {
    let r;
    let g;
    let b;
    let a;
    if (hex.length === 5) {
      r = parseInt(hex.slice(1, 2), 16);
      g = parseInt(hex.slice(2, 3), 16);
      b = parseInt(hex.slice(3, 4), 16);
      a = parseInt(hex.slice(4, 5), 16);
      r = r << 4 | r;
      g = g << 4 | g;
      b = b << 4 | b;
      a = a << 4 | a;
    } else if (hex.length === 9) {
      r = parseInt(hex.slice(1, 3), 16);
      g = parseInt(hex.slice(3, 5), 16);
      b = parseInt(hex.slice(5, 7), 16);
      a = parseInt(hex.slice(7, 9), 16);
    } else {
      r = parseInt(hex.slice(1, 3), 16);
      g = parseInt(hex.slice(3, 5), 16);
      b = parseInt(hex.slice(5, 7), 16);
    }
    if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b) || a !== void 0 && Number.isNaN(a)) {
      return void 0;
    }
    return [r, g, b, a];
  }

  // ../../packages/blender-elements/src/RangeInput/RangeInput.svelte
  var import_math_expression_evaluator2 = __toESM(require_es());
  var mexp2 = new import_math_expression_evaluator2.default();
  var root_16 = from_tree([["label", { class: "label svelte-1r20ebx" }, " "]]);
  var root_25 = from_tree([["div", { class: "drag svelte-1r20ebx" }]]);
  var root15 = from_tree([
    [
      "div",
      null,
      ,
      " ",
      ["input", { class: "input svelte-1r20ebx" }],
      " ",
      ,
    ]
  ]);
  var $$css15 = {
    hash: "svelte-1r20ebx",
    code: '.range-input.svelte-1r20ebx {--background: #545454;user-select:none;position:relative;overflow:hidden;background:linear-gradient(\n      to right,\n      #4772b3 0%,\n      #4772b3 var(--percentage),\n      var(--background) var(--percentage),\n      var(--background) 100%\n    );&:not(.focused, .active):hover {--background: #656565;}&.active {--background: #222;}&.focused {background:#222;}&[data-rounded="all"] {border-radius:2px / 3px;}&[data-rounded="top"] {border-top-left-radius:2px 3px;border-top-right-radius:2px 3px;}&[data-rounded="bottom"] {border-bottom-right-radius:2px 3px;border-bottom-left-radius:2px 3px;}}.label.svelte-1r20ebx {position:absolute;top:2px;left:8px;.range-input:where(.svelte-1r20ebx):focus-within & {display:none;}}.input.svelte-1r20ebx {display:block;box-sizing:border-box;width:100%;padding-block:2px;padding-inline:8px;border:0;font:inherit;color:#e5e5e5;text-align:center;text-shadow:0 1px 2px #000c;background-color:transparent;outline:none;&::selection {background-color:#4570b5;}.with-label:where(.svelte-1r20ebx) & {padding-right:8px;text-align:right;}&:focus {color:#e5e5e5;text-align:left;}}.svelte-1r20ebx:not(.focused, .active) .input:where(.svelte-1r20ebx):hover {color:#fcfcfc;background-color:#797979;}.drag.svelte-1r20ebx {cursor:col-resize;position:absolute;inset:0;}'
  };
  function RangeInput($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css15);
    let value = prop($$props, "value", 15), label2 = prop($$props, "label", 3, ""), rounded = prop($$props, "rounded", 3, "all");
    let el;
    let wanted = state(proxy(value()));
    let text2 = state(proxy(format(value())));
    let focused = state(false);
    let active = state(false);
    let previous = state(proxy(value()));
    let clientWidth = state(1);
    let range = user_derived(() => $$props.till - $$props.from);
    let normalized = user_derived(() => {
      if (value() === void 0 || value() <= $$props.from) {
        return 0;
      } else if (value() >= $$props.till) {
        return 1;
      }
      return (value() - $$props.from) / get2(range);
    });
    let percentage = user_derived(() => `${(get2(normalized) * 100).toPrecision(2)}%`);
    let step = user_derived(() => {
      const perPixel = get2(range) / get2(clientWidth);
      const multiplier = Math.pow(10, 1 - Math.floor(Math.log10(perPixel)) - 1);
      return Math.round(perPixel * multiplier) / multiplier;
    });
    user_effect(() => {
      if (get2(wanted) !== value() && document.activeElement !== el) {
        set(text2, format(value()), true);
        set(wanted, value(), true);
      }
    });
    function format(val) {
      if (val === void 0 || Number.isNaN(val)) {
        return "";
      }
      if (val > 1e6) {
        return Math.round(val).toString();
      }
      return val.toFixed(3).toString().substring(0, 7);
    }
    function onInput() {
      try {
        set(wanted, mexp2.eval(el.value), true);
      } catch {
        return;
      }
      if (value() !== get2(wanted)) {
        value(get2(wanted));
      }
    }
    function onFocus() {
      set(previous, value(), true);
      set(focused, true);
      if (value() === void 0) {
        el.value = "";
      } else {
        el.value = `${value()}`;
      }
      el.select();
    }
    function onBlur() {
      set(focused, false);
      set(text2, format(value()), true);
      if (get2(wanted) !== get2(previous)) {
        value(get2(wanted));
        if (typeof value() === "number") {
          $$props.setValue?.(value());
        }
        set(text2, format(value()), true);
      }
    }
    function onChange(next2) {
      value(next2);
      $$props.setValue?.(value());
    }
    function onClick(e) {
      const type = e.target.nodeName;
      if (type !== "BUTTON") {
        el.focus();
      }
    }
    function onDown() {
      set(active, true);
    }
    function onUp() {
      set(active, false);
    }
    var div = root15();
    let classes;
    let styles;
    var node = child(div);
    {
      var consequent = ($$anchor2) => {
        var label_1 = root_16();
        var text_1 = child(label_1, true);
        reset(label_1);
        template_effect(() => {
          set_attribute2(label_1, "for", $$props.id);
          set_text(text_1, label2());
        });
        append($$anchor2, label_1);
      };
      if_block(node, ($$render) => {
        if (label2()) $$render(consequent);
      });
    }
    var input = sibling(node, 2);
    remove_input_defaults(input);
    action(input, ($$node) => blurOnEnter?.($$node));
    action(input, ($$node, $$action_arg) => revertOnEscape?.($$node, $$action_arg), () => get2(previous)?.toString() ?? "");
    bind_this(input, ($$value) => el = $$value, () => el);
    effect(() => bind_value(input, () => get2(text2), ($$value) => set(text2, $$value)));
    var node_1 = sibling(input, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var div_1 = root_25();
        action(div_1, ($$node, $$action_arg) => numberDrag?.($$node, $$action_arg), () => ({
          value: value(),
          step: get2(step),
          min: $$props.from,
          max: $$props.till,
          onChange,
          onClick,
          onDown,
          onUp
        }));
        append($$anchor2, div_1);
      };
      if_block(node_1, ($$render) => {
        if (!get2(focused)) $$render(consequent_1);
      });
    }
    reset(div);
    template_effect(() => {
      classes = set_class(div, 1, "range-input svelte-1r20ebx", null, classes, {
        active: get2(active),
        focused: get2(focused),
        "with-label": label2()
      });
      set_attribute2(div, "data-rounded", rounded());
      styles = set_style(div, "", styles, { "--percentage": get2(percentage) });
      set_attribute2(input, "id", $$props.id);
    });
    delegated("input", input, onInput);
    event("focus", input, onFocus);
    event("blur", input, onBlur);
    bind_element_size(div, "clientWidth", ($$value) => set(clientWidth, $$value));
    append($$anchor, div);
    pop();
  }
  delegate(["input"]);

  // ../../packages/blender-elements/src/ToggleButton/ToggleButton.svelte
  var root_17 = from_tree([["span", { class: "icon svelte-1hfux13" }]]);
  var root_26 = from_tree([["span", { class: "label svelte-1hfux13" }, " "]]);
  var root16 = from_tree([["button", null, , " ", ,]]);
  var $$css16 = {
    hash: "svelte-1hfux13",
    code: '.toggle.svelte-1hfux13 {cursor:pointer;user-select:none;display:inline-flex;flex-shrink:0;gap:2px;align-items:center;box-sizing:border-box;min-width:20px;min-height:20px;padding:1px;border:1px solid transparent;font:inherit;color:white;appearance:none;opacity:0.8;background:transparent no-repeat center center;&.with-label {padding-inline:4px;}&[data-rounded="all"] {border-radius:2px / 3px;}&[data-rounded="left"] {border-top-left-radius:2px 3px;border-bottom-left-radius:2px 3px;}&[data-rounded="right"] {border-left:0;border-top-right-radius:2px 3px;border-bottom-right-radius:2px 3px;}&[data-rounded="none"] {border-left:0;}&:not(.transparent) {border-color:#3d3d3d;background-color:#656565;box-shadow:0 0.5px 0 #323232bf;}&:hover {opacity:1;}&.pressed,\n    &:active {opacity:1;background-color:#4772b3;}}.icon.svelte-1hfux13 {display:inline-block;flex-shrink:0;width:16px;height:16px;background:transparent no-repeat center center;background-size:contain;}.label.svelte-1hfux13 {overflow:hidden;flex:1;text-overflow:ellipsis;text-shadow:0 1px 1px #0006;white-space:nowrap;}'
  };
  function ToggleButton($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css16);
    let icon = prop($$props, "icon", 3, void 0), label2 = prop($$props, "label", 3, ""), value = prop($$props, "value", 15, void 0), transparent = prop($$props, "transparent", 3, false), hint = prop($$props, "hint", 3, void 0), rounded = prop($$props, "rounded", 3, "all");
    function toggle() {
      if (typeof value() === "boolean") {
        value(!value());
        $$props.setValue?.(value());
      }
    }
    var button = root16();
    let classes;
    var node = child(button);
    {
      var consequent = ($$anchor2) => {
        var span = root_17();
        template_effect(() => set_style(span, `background-image: var(--icon-${icon() ?? ""})`));
        append($$anchor2, span);
      };
      if_block(node, ($$render) => {
        if (icon()) $$render(consequent);
      });
    }
    var node_1 = sibling(node, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var span_1 = root_26();
        var text2 = child(span_1, true);
        reset(span_1);
        template_effect(() => set_text(text2, label2()));
        append($$anchor2, span_1);
      };
      if_block(node_1, ($$render) => {
        if (label2()) $$render(consequent_1);
      });
    }
    reset(button);
    template_effect(() => {
      classes = set_class(button, 1, "toggle svelte-1hfux13", null, classes, {
        pressed: value(),
        transparent: transparent(),
        "with-label": label2()
      });
      set_attribute2(button, "data-rounded", rounded());
      set_attribute2(button, "title", hint());
    });
    delegated("click", button, (e) => {
      e.stopPropagation();
      toggle();
      $$props.onclick?.();
    });
    delegated("dblclick", button, (e) => e.stopPropagation());
    append($$anchor, button);
    pop();
  }
  delegate(["click", "dblclick"]);

  // ../../packages/blender-elements/src/ColorInput/ColorPickerBrightnessSlider.svelte
  var root17 = from_tree([
    ["input", { type: "range", min: "0", max: "100", step: "1" }]
  ]);
  var $$css17 = {
    hash: "svelte-1wbxmzx",
    code: ".brightness-slider.svelte-1wbxmzx {height:160px;margin:0;padding:0;writing-mode:sideways-lr;appearance:none;background:transparent;outline:none;&::-webkit-slider-thumb {width:13px;height:8px;margin-block-start:-1px;border:1px solid white;appearance:none;background:currentcolor;outline:1px solid black;}&::-moz-range-thumb {width:13px;height:8px;margin-block-start:-1px;border:1px solid white;border-radius:0;background:currentcolor;outline:1px solid black;}&::-webkit-slider-runnable-track {width:13px;border:1px solid black;background:linear-gradient(to top, #000, #fff);}&::-moz-range-track {width:13px;border:1px solid black;background:linear-gradient(to top, #000, #fff);}&:active {cursor:none;}&:focus-visible::-webkit-slider-thumb,\n    &.active::-webkit-slider-thumb {width:15px;margin-block-start:-2px;}&:focus-visible::-moz-range-thumb,\n    &.active::-moz-range-thumb {width:15px;margin-block-start:-2px;}}"
  };
  function ColorPickerBrightnessSlider($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css17);
    let active = state(false);
    let value = prop($$props, "value", 15);
    var input = root17();
    event("mouseup", $window, () => {
      set(active, false);
    });
    remove_input_defaults(input);
    let classes;
    let styles;
    template_effect(() => {
      classes = set_class(input, 1, "brightness-slider svelte-1wbxmzx", null, classes, { active: get2(active) });
      styles = set_style(input, "", styles, { color: `hsl(0 0 ${value() ?? ""})` });
    });
    delegated("mousedown", input, () => {
      set(active, true);
    });
    delegated("input", input, (e) => {
      value(Number(e.currentTarget.value));
      $$props.setValue?.(value());
    });
    bind_value(input, value);
    append($$anchor, input);
    pop();
  }
  delegate(["mousedown", "input"]);

  // ../../packages/blender-elements/src/ColorInput/ColorPickerWheel.svelte
  async function generateColorWheel() {
    const canvas = new OffscreenCanvas(320, 320);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return "";
    }
    const imageData = ctx.createImageData(320, 320);
    const data = imageData.data;
    for (let y = 0; y < 320; y++) {
      for (let x = 0; x < 320; x++) {
        const dx = x - 160;
        const dy = y - 160;
        let h = Math.atan2(dy, dx) * (180 / Math.PI) - 90;
        let s = Math.min(100, Math.sqrt(dx * dx + dy * dy) / 1.6);
        const v = 100;
        if (h < 0) {
          h += 360;
        }
        const [r, g, b] = hsvToRgb(h, s, v);
        const index2 = (y * 320 + x) * 4;
        data[index2] = r;
        data[index2 + 1] = g;
        data[index2 + 2] = b;
        data[index2 + 3] = 255;
      }
    }
    ctx.putImageData(imageData, 0, 0);
    const blob = await canvas.convertToBlob();
    return URL.createObjectURL(blob);
  }
  var colorWheelPromise;
  var root18 = from_tree([
    [
      "div",
      { class: "color-picker-wheel svelte-1vgqqay" },
      [
        "img",
        { class: "wheel svelte-1vgqqay", draggable: "false", alt: "" }
      ],
      " ",
      ["div"]
    ]
  ]);
  var $$css18 = {
    hash: "svelte-1vgqqay",
    code: ".color-picker-wheel.svelte-1vgqqay {position:relative;}.wheel.svelte-1vgqqay {user-select:none;width:160px;height:160px;border-radius:50%;background:gray;&:active {cursor:none;}}.marker.svelte-1vgqqay {pointer-events:none;position:absolute;transform:translate(-50%, -50%);width:10px;height:10px;border:1px solid transparent;border-radius:50%;box-shadow:0 0 2px rgb(0 0 0 / 50%);&.selecting {width:20px;height:20px;}}"
  };
  function ColorPickerWheel($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css18);
    let el = state(void 0);
    let src = state("");
    let selecting = state(false);
    let markerX = user_derived(() => 80 + $$props.saturation / 100 * 80 * Math.cos($$props.hue * Math.PI / 180 + Math.PI / 2));
    let markerY = user_derived(() => 80 + $$props.saturation / 100 * 80 * Math.sin($$props.hue * Math.PI / 180 + Math.PI / 2));
    if (!colorWheelPromise) {
      colorWheelPromise = generateColorWheel();
    }
    colorWheelPromise.then((url) => {
      set(src, url, true);
    });
    function handlePointerDown(e) {
      set(selecting, true);
      syncValue(e);
    }
    function handlePointerMove(e) {
      if (get2(selecting)) {
        syncValue(e);
      }
    }
    function handlePointerUp() {
      set(selecting, false);
    }
    function syncValue(e) {
      if (!get2(el)) {
        return;
      }
      const bounds = get2(el).getBoundingClientRect();
      const x = e.clientX - bounds.left - 80;
      const y = e.clientY - bounds.top - 80;
      let h = Math.atan2(y, x) * (180 / Math.PI) - 90;
      if (h < 0) {
        h += 360;
      }
      const s = Math.min(80, Math.sqrt(x * x + y * y)) / 80 * 100;
      $$props.setValue?.(h, s);
    }
    var div = root18();
    event("pointerup", $window, handlePointerUp);
    event("pointermove", $window, handlePointerMove);
    var img = child(div);
    let styles;
    bind_this(img, ($$value) => set(el, $$value), () => get2(el));
    var div_1 = sibling(img, 2);
    let classes;
    let styles_1;
    reset(div);
    template_effect(
      ($0) => {
        set_attribute2(img, "src", get2(src));
        styles = set_style(img, "", styles, { filter: `brightness(${$$props.brightness / 100})` });
        classes = set_class(div_1, 1, "marker svelte-1vgqqay", null, classes, { selecting: get2(selecting) });
        styles_1 = set_style(div_1, "", styles_1, $0);
      },
      [
        () => ({
          "border-color": `hsl(0 0 ${(100 - $$props.brightness) * 0.4 + 60})`,
          "background-color": hsvToHex($$props.hue, $$props.saturation, $$props.brightness),
          top: `${get2(markerY) ?? ""}px`,
          left: `${get2(markerX) ?? ""}px`
        })
      ]
    );
    delegated("pointerdown", img, handlePointerDown);
    append($$anchor, div);
    pop();
  }
  delegate(["pointerdown"]);

  // ../../packages/blender-elements/src/ColorInput/ColorPicker.svelte
  var root_18 = from_tree([, , " ", , " ", ,], 1);
  var root_27 = from_tree([, , " ", , " ", ,], 1);
  var root_3 = from_tree([
    [
      "div",
      { class: "input-and-eye-dropper svelte-fugvs7" },
      ,
      " ",
      ,
    ]
  ]);
  var root19 = from_tree([
    [
      "dialog",
      { class: "color-picker svelte-fugvs7", closedby: "any" },
      [
        "div",
        { class: "tall-or-wide svelte-fugvs7" },
        [
          "div",
          { class: "wheel-and-slider svelte-fugvs7" },
          ["div", { class: "wheel svelte-fugvs7" }, ,],
          " ",
          ,
        ],
        " ",
        [
          "div",
          null,
          ["div", { class: "rgb-hsv svelte-fugvs7" }, , " ", ,],
          " ",
          ["div", { class: "sliders svelte-fugvs7" }, , " ", ,],
          " ",
          ["div", null, ,]
        ]
      ]
    ]
  ]);
  var $$css19 = {
    hash: "svelte-fugvs7",
    code: '.color-picker.svelte-fugvs7 {position:absolute;inset:auto anchor(right) auto auto;position-anchor:--color-input;position-try-fallbacks:flip-block;box-sizing:border-box;max-height:100vh;padding:8px;border:0;border-radius:2px 3px;color:#b3b3b3;background:#181818;box-shadow:0 1px 3px #0000004d;&::backdrop {opacity:0;}&[data-location="top"] {bottom:anchor(top);}&[data-location="bottom"] {top:anchor(bottom);position-try-fallbacks:flip-block;}&[data-location="overlap"] {top:50%;transform:translate(0, -50%);}}.tall-or-wide.svelte-fugvs7 {display:flex;gap:8px;&[data-variant="tall"] {flex-direction:column;}}.wheel-and-slider.svelte-fugvs7 {display:flex;flex-shrink:0;justify-content:space-between;width:184px;max-width:100vw;}.wheel.svelte-fugvs7 {margin-block:auto;}.rgb-hsv.svelte-fugvs7 {display:grid;grid-template-columns:1fr 1fr;margin-bottom:3px;}.sliders.svelte-fugvs7 {display:flex;flex-direction:column;gap:1px;margin-bottom:8px;color:#e5e5e5;}.input-and-eye-dropper.svelte-fugvs7 {display:flex;gap:6px;align-items:center;}'
  };
  function ColorPicker($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css19);
    let value = prop($$props, "value", 15);
    let wanted = state(proxy(value()));
    let hex = state(proxy(value()));
    const initial = hexToHsv(value());
    let h = state(proxy(initial[0]));
    let s = state(proxy(initial[1]));
    let v = state(proxy(initial[2]));
    let $$d = user_derived(() => hexToRgb(value())), $$array = user_derived(() => to_array(get2($$d), 4)), r = user_derived(() => get2($$array)[0]), g = user_derived(() => get2($$array)[1]), b = user_derived(() => get2($$array)[2]), a = user_derived(() => get2($$array)[3]);
    let mode = state("hsv");
    user_effect(() => {
      if (get2(wanted) !== value()) {
        set(wanted, value(), true);
        (($$value) => {
          var $$array_1 = to_array($$value, 3);
          set(h, $$array_1[0], true);
          set(s, $$array_1[1], true);
          set(v, $$array_1[2], true);
        })(hexToHsv(value()));
      }
    });
    function syncValue(val) {
      value(val);
      set(wanted, value(), true);
      set(hex, value(), true);
      (($$value) => {
        var $$array_2 = to_array($$value, 3);
        set(h, $$array_2[0], true);
        set(s, $$array_2[1], true);
        set(v, $$array_2[2], true);
      })(hexToHsv(value()));
      $$props.setValue?.(value());
    }
    function setValueHSV(hue, saturation, brightness, alpha) {
      syncValue(hsvToHex(hue, saturation, brightness, alpha));
      set(h, hue, true);
      set(s, saturation, true);
      set(v, brightness, true);
    }
    function setValueRGB(red, green, blue) {
      syncValue(rgbToHex(red, green, blue, get2(a)));
    }
    function setAlpha(alpha) {
      if (initial[3] === void 0 && alpha === 255) {
        return setAlpha(void 0);
      }
      if (get2(mode) === "hsv") {
        setValueHSV(get2(h), get2(s), get2(v), alpha);
      } else {
        syncValue(rgbToHex(get2(r), get2(g), get2(b), alpha));
      }
    }
    function setHex(color) {
      const div = document.createElement("div");
      div.style.color = "inherit";
      div.style.color = color;
      if (div.style.color === "inherit") {
        set(hex, value(), true);
        return;
      }
      document.body.append(div);
      const computedColor = getComputedStyle(div).color;
      div.remove();
      const match = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\)/.exec(computedColor);
      if (match === null) {
        return;
      }
      if (computedColor.startsWith("rgba")) {
        syncValue(rgbToHex(parseInt(match[1]), parseInt(match[2]), parseInt(match[3]), parseFloat(match[4]) * 255));
      } else {
        syncValue(rgbToHex(parseInt(match[1]), parseInt(match[2]), parseInt(match[3])));
      }
    }
    function handleWheel(e) {
      const delta = e.deltaY > 0 ? -0.5 : 0.5;
      const brightness = Math.min(100, Math.max(0, get2(v) + delta * 10));
      setValueHSV(get2(h), get2(s), brightness, get2(a));
    }
    async function openEyeDropper() {
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      if (typeof result.sRGBHex === "string") {
        setHex(result.sRGBHex);
      }
    }
    var dialog = root19();
    var div_1 = child(dialog);
    var div_2 = child(div_1);
    var div_3 = child(div_2);
    var node = child(div_3);
    ColorPickerWheel(node, {
      get hue() {
        return get2(h);
      },
      get saturation() {
        return get2(s);
      },
      get brightness() {
        return get2(v);
      },
      setValue: (hue, saturation) => setValueHSV(hue, saturation, get2(v), get2(a))
    });
    reset(div_3);
    var node_1 = sibling(div_3, 2);
    ColorPickerBrightnessSlider(node_1, {
      get value() {
        return get2(v);
      },
      setValue: (brightness) => setValueHSV(get2(h), get2(s), brightness, get2(a))
    });
    reset(div_2);
    var div_4 = sibling(div_2, 2);
    var div_5 = child(div_4);
    var node_2 = child(div_5);
    {
      let $0 = user_derived(() => get2(mode) === "rgb");
      ToggleButton(node_2, {
        label: "RGB",
        rounded: "left",
        get value() {
          return get2($0);
        },
        onclick: () => {
          set(mode, "rgb");
        }
      });
    }
    var node_3 = sibling(node_2, 2);
    {
      let $0 = user_derived(() => get2(mode) === "hsv");
      ToggleButton(node_3, {
        label: "HSV",
        rounded: "right",
        get value() {
          return get2($0);
        },
        onclick: () => {
          set(mode, "hsv");
        }
      });
    }
    reset(div_5);
    var div_6 = sibling(div_5, 2);
    var node_4 = child(div_6);
    {
      var consequent = ($$anchor2) => {
        var fragment = root_18();
        var node_5 = first_child(fragment);
        {
          let $0 = user_derived(() => get2(r) / 255);
          RangeInput(node_5, {
            label: "Red",
            from: 0,
            till: 1,
            rounded: "top",
            get value() {
              return get2($0);
            },
            setValue: (red) => setValueRGB(red * 255, get2(g), get2(b))
          });
        }
        var node_6 = sibling(node_5, 2);
        {
          let $0 = user_derived(() => get2(g) / 255);
          RangeInput(node_6, {
            label: "Green",
            from: 0,
            till: 1,
            rounded: "none",
            get value() {
              return get2($0);
            },
            setValue: (green) => setValueRGB(get2(r), green * 255, get2(b))
          });
        }
        var node_7 = sibling(node_6, 2);
        {
          let $0 = user_derived(() => get2(b) / 255);
          RangeInput(node_7, {
            label: "Blue",
            from: 0,
            till: 1,
            rounded: "none",
            get value() {
              return get2($0);
            },
            setValue: (blue) => setValueRGB(get2(r), get2(g), blue * 255)
          });
        }
        append($$anchor2, fragment);
      };
      var alternate = ($$anchor2) => {
        var fragment_1 = root_27();
        var node_8 = first_child(fragment_1);
        {
          let $0 = user_derived(() => get2(h) / 360);
          RangeInput(node_8, {
            from: 0,
            till: 1,
            label: "Hue",
            rounded: "top",
            get value() {
              return get2($0);
            },
            setValue: (hue) => setValueHSV(hue * 360, get2(s), get2(v), get2(a))
          });
        }
        var node_9 = sibling(node_8, 2);
        {
          let $0 = user_derived(() => get2(s) / 100);
          RangeInput(node_9, {
            from: 0,
            till: 1,
            label: "Saturation",
            rounded: "none",
            get value() {
              return get2($0);
            },
            setValue: (saturation) => setValueHSV(get2(h), saturation * 100, get2(v), get2(a))
          });
        }
        var node_10 = sibling(node_9, 2);
        {
          let $0 = user_derived(() => get2(v) / 100);
          RangeInput(node_10, {
            from: 0,
            till: 1,
            label: "Brightness",
            rounded: "none",
            get value() {
              return get2($0);
            },
            setValue: (lightness) => setValueHSV(get2(h), get2(s), lightness * 100, get2(a))
          });
        }
        append($$anchor2, fragment_1);
      };
      if_block(node_4, ($$render) => {
        if (get2(mode) === "rgb") $$render(consequent);
        else $$render(alternate, -1);
      });
    }
    var node_11 = sibling(node_4, 2);
    {
      let $0 = user_derived(() => get2(a) === void 0 ? 1 : get2(a) / 255);
      RangeInput(node_11, {
        from: 0,
        till: 1,
        label: "Alpha",
        rounded: "bottom",
        get value() {
          return get2($0);
        },
        setValue: (alpha) => setAlpha(alpha ? alpha * 255 : alpha)
      });
    }
    reset(div_6);
    var div_7 = sibling(div_6, 2);
    var node_12 = child(div_7);
    Property(node_12, {
      label: "Hex",
      children: ($$anchor2, $$slotProps) => {
        var div_8 = root_3();
        var node_13 = child(div_8);
        TextInput(node_13, {
          setValue: setHex,
          get value() {
            return get2(hex);
          },
          set value($$value) {
            set(hex, $$value, true);
          }
        });
        var node_14 = sibling(node_13, 2);
        {
          var consequent_1 = ($$anchor3) => {
            ToggleButton($$anchor3, {
              hint: "Pick color using a eye dropper",
              icon: "pipette",
              onclick: openEyeDropper
            });
          };
          if_block(node_14, ($$render) => {
            if ("EyeDropper" in window) $$render(consequent_1);
          });
        }
        reset(div_8);
        append($$anchor2, div_8);
      },
      $$slots: { default: true }
    });
    reset(div_7);
    reset(div_4);
    reset(div_1);
    reset(dialog);
    attach(dialog, () => (el) => el.showModal());
    template_effect(() => {
      set_attribute2(dialog, "data-location", $$props.location);
      set_attribute2(div_1, "data-variant", $$props.variant);
    });
    event("cancel", dialog, () => $$props.onclose());
    event("wheel", div_1, handleWheel);
    append($$anchor, dialog);
    pop();
  }

  // ../../packages/blender-elements/src/ColorInput/ColorInput.svelte
  var root20 = from_tree(
    [
      [
        "button",
        { class: "color-input svelte-xxfy2h" },
        ["div", { class: "half svelte-xxfy2h" }],
        " ",
        ["div", { class: "half svelte-xxfy2h" }]
      ],
      " ",
      ,
    ],
    1
  );
  var $$css20 = {
    hash: "svelte-xxfy2h",
    code: ".color-input.svelte-xxfy2h {overflow:hidden;display:flex;width:100%;height:18px;padding:0;border:0;border-bottom:1px solid #3c3c3e;border-radius:2px / 3px;appearance:none;background:repeating-conic-gradient(#a0a0a0 0 25%, #646464 0 50%) 50% / 9px\n      9px;box-shadow:0 1px 3px #0000004d;}.half.svelte-xxfy2h {width:50%;height:100%;}"
  };
  function ColorInput($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css20);
    let value = prop($$props, "value", 7);
    let $$d = user_derived(() => hexToRgb(value())), $$array = user_derived(() => to_array(get2($$d), 3)), r = user_derived(() => get2($$array)[0]), g = user_derived(() => get2($$array)[1]), b = user_derived(() => get2($$array)[2]);
    let pickerVisible = state(false);
    let location = state("overlap");
    let variant = state("tall");
    let innerHeight = state(proxy(window.innerHeight));
    function repositionColorPicker(el) {
      if (!get2(pickerVisible)) {
        return;
      }
      const bounds = el.getBoundingClientRect();
      if (bounds.top > 320) {
        set(location, "top");
        set(variant, "tall");
      } else if (get2(innerHeight) - bounds.bottom > 320) {
        set(location, "bottom");
        set(variant, "tall");
      } else if (bounds.top > 180) {
        set(location, "top");
        set(variant, "wide");
      } else if (get2(innerHeight) - bounds.bottom > 180) {
        set(location, "bottom");
        set(variant, "wide");
      } else if (get2(innerHeight) > 400) {
        set(location, "overlap");
        set(variant, "tall");
      } else {
        set(location, "overlap");
        set(variant, "wide");
      }
    }
    var fragment = root20();
    var button = first_child(fragment);
    let styles;
    var div = child(button);
    let styles_1;
    var div_1 = sibling(div, 2);
    let styles_2;
    reset(button);
    attach(button, () => repositionColorPicker);
    var node = sibling(button, 2);
    {
      var consequent = ($$anchor2) => {
        ColorPicker($$anchor2, {
          get setValue() {
            return $$props.setValue;
          },
          get location() {
            return get2(location);
          },
          get variant() {
            return get2(variant);
          },
          onclose: () => {
            set(pickerVisible, false);
          },
          get value() {
            return value();
          },
          set value($$value) {
            value($$value);
          }
        });
      };
      if_block(node, ($$render) => {
        if (get2(pickerVisible)) $$render(consequent);
      });
    }
    template_effect(() => {
      set_attribute2(button, "aria-label", value());
      styles = set_style(button, "", styles, {
        "anchor-name": get2(pickerVisible) ? "--color-input" : void 0
      });
      styles_1 = set_style(div, "", styles_1, {
        "background-color": `rgb(${get2(r) ?? ""} ${get2(g) ?? ""} ${get2(b) ?? ""})`
      });
      styles_2 = set_style(div_1, "", styles_2, { "background-color": value() });
    });
    bind_window_size("innerHeight", ($$value) => set(innerHeight, $$value, true));
    delegated("click", button, () => {
      set(pickerVisible, !get2(pickerVisible));
    });
    append($$anchor, fragment);
    pop();
  }
  delegate(["click"]);

  // ../../packages/blender-elements/src/IconButton.svelte
  var root21 = from_tree([["button", { "aria-label": "toggle" }]]);
  var $$css21 = {
    hash: "svelte-okdjnl",
    code: ".icon-button.svelte-okdjnl {cursor:pointer;flex-shrink:0;width:20px;height:20px;border:none;appearance:none;opacity:0.6;background:transparent no-repeat center center;&:active,\n    &:hover {opacity:0.8;}&.muted {opacity:0.3;}}"
  };
  function IconButton($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css21);
    let muted = prop($$props, "muted", 3, false), hint = prop($$props, "hint", 3, void 0);
    var button = root21();
    let classes;
    template_effect(() => {
      classes = set_class(button, 1, "icon-button svelte-okdjnl", null, classes, { muted: muted() });
      set_style(button, `background-image: var(--icon-${$$props.icon ?? ""})`);
      set_attribute2(button, "title", hint());
    });
    delegated("click", button, (e) => {
      e.stopPropagation();
      $$props.onclick?.();
    });
    delegated("dblclick", button, (e) => e.stopPropagation());
    append($$anchor, button);
    pop();
  }
  delegate(["click", "dblclick"]);

  // ../../packages/blender-elements/src/TreeView/TreeViewRow.svelte
  var symbol = /* @__PURE__ */ Symbol("TreeViewRow");
  var root_32 = from_tree([["div", { class: "toggle-spacer svelte-6f80w9" }]]);
  var root22 = from_tree([
    [
      "div",
      { tabindex: "0" },
      ,
      " ",
      ["div", { class: "label svelte-6f80w9" }, " "],
      " ",
      ,
    ]
  ]);
  var $$css22 = {
    hash: "svelte-6f80w9",
    code: ".treeview-row.svelte-6f80w9 {display:flex;align-items:center;height:20px;padding-right:4px;padding-left:calc(var(--indent) * 20px);color:#c2c2c2;background:#282828;outline:none;&:nth-child(even) {background-color:#2b2b2b;}&:hover {background-color:#444;}&:focus {background-color:#334d80;&:hover {background-color:#4772b3;}}&.active {color:#ffaf29;}}.toggle-spacer.svelte-6f80w9 {width:20px;}.label.svelte-6f80w9 {user-select:none;overflow:hidden;flex:1;text-overflow:ellipsis;}"
  };
  function TreeViewRow($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css22);
    let el = state(void 0);
    function onKeyDown(e) {
      if (e.key === "ArrowUp") {
        const sibling2 = get2(el)?.previousElementSibling;
        const props = sibling2?.[symbol];
        if (props) {
          e.preventDefault();
          sibling2.focus();
          props.onactivate?.();
        }
      } else if (e.key === "ArrowDown") {
        const sibling2 = get2(el)?.nextElementSibling;
        const props = sibling2?.[symbol];
        if (props) {
          e.preventDefault();
          sibling2.focus();
          props.onactivate?.();
        }
      } else if (e.key === "ArrowLeft") {
        if ($$props.expanded === true) {
          $$props.setExpanded?.(false);
          e.preventDefault();
        } else {
          let cursor = get2(el);
          while (true) {
            cursor = cursor?.previousElementSibling;
            const props = cursor?.[symbol];
            if (!props) {
              break;
            }
            if (props.indent === $$props.indent - 1) {
              e.preventDefault();
              cursor.focus();
              props.onactivate?.();
              break;
            }
          }
        }
      } else if (e.key === "ArrowRight") {
        if ($$props.expanded === false) {
          e.preventDefault();
          $$props.setExpanded?.(true);
        } else if ($$props.expanded === true) {
          const sibling2 = get2(el)?.nextElementSibling;
          const props = sibling2?.[symbol];
          if (props.indent === $$props.indent + 1) {
            e.preventDefault();
            sibling2.focus();
            props.onactivate?.();
          }
        }
      } else {
        $$props.onkeydown?.({ key: e.key });
      }
    }
    function exposeProps(el2) {
      el2[symbol] = { indent: $$props.indent, onactivate: $$props.onactivate };
    }
    var div = root22();
    let classes;
    let styles;
    var node = child(div);
    {
      var consequent = ($$anchor2) => {
        IconButton($$anchor2, {
          icon: "expanded",
          onclick: () => $$props.setExpanded?.(false)
        });
      };
      var consequent_1 = ($$anchor2) => {
        IconButton($$anchor2, {
          icon: "collapsed",
          onclick: () => $$props.setExpanded?.(true)
        });
      };
      var alternate = ($$anchor2) => {
        var div_1 = root_32();
        append($$anchor2, div_1);
      };
      if_block(node, ($$render) => {
        if ($$props.expanded === true) $$render(consequent);
        else if ($$props.expanded === false) $$render(consequent_1, 1);
        else $$render(alternate, -1);
      });
    }
    var div_2 = sibling(node, 2);
    var text2 = child(div_2, true);
    reset(div_2);
    var node_1 = sibling(div_2, 2);
    snippet(node_1, () => $$props.children ?? noop);
    reset(div);
    bind_this(div, ($$value) => set(el, $$value), () => get2(el));
    attach(div, () => exposeProps);
    template_effect(() => {
      classes = set_class(div, 1, "treeview-row svelte-6f80w9", null, classes, { active: $$props.active });
      styles = set_style(div, "", styles, { "--indent": $$props.indent });
      set_text(text2, $$props.label);
    });
    delegated("click", div, () => $$props.onactivate?.());
    delegated("dblclick", div, () => $$props.ondblclick?.());
    event("mouseenter", div, () => $$props.onmouseenter?.());
    event("mouseleave", div, () => $$props.onmouseleave?.());
    delegated("keydown", div, onKeyDown);
    append($$anchor, div);
    pop();
  }
  delegate(["click", "dblclick", "keydown"]);

  // ../../packages/blender-elements/src/TreeView/TreeView.svelte
  var root23 = from_tree([["div", { class: "treeview svelte-1lqet41" }, ,]]);
  var $$css23 = {
    hash: "svelte-1lqet41",
    code: ".treeview.svelte-1lqet41 {overflow:auto;height:100%;background-image:linear-gradient(\n      to bottom,\n      #282828 50%,\n      #2b2b2b 50%,\n      #2b2b2b\n    );background-size:100% 40px;}"
  };
  function TreeView($$anchor, $$props) {
    append_styles($$anchor, $$css23);
    var div = root23();
    var node = child(div);
    snippet(node, () => $$props.children);
    reset(div);
    append($$anchor, div);
  }

  // ../../packages/ui-protocol/src/svelte/components.ts
  var components = {
    Fragment,
    ErrorBoundary,
    Refresh,
    Trigger,
    Box,
    Grid,
    NumberInput,
    TextInput,
    SearchInput,
    Button,
    ToggleButton,
    CheckboxInput,
    ColorInput,
    Panel,
    SplitPanel,
    SplitPanels,
    Property,
    Warning,
    Tabs,
    TreeView,
    TreeViewRow
  };
  var components_default = components;

  // ../../packages/ui-protocol/src/throttle.ts
  function throttle(intervalMs, fn) {
    if (intervalMs <= 0) {
      return fn;
    }
    if (fn === void 0) {
      return void 0;
    }
    const name = fn.name ? `throttled_${fn.name}` : "throttled";
    let previousTime = 0;
    let latestArgs = [];
    let timer;
    const named = {
      [name](...args) {
        latestArgs = args;
        const now2 = Date.now();
        const elapsed = now2 - previousTime;
        if (elapsed > intervalMs) {
          if (timer === void 0) {
            previousTime = now2;
            fn(...latestArgs);
          }
        } else {
          if (timer === void 0) {
            timer = setTimeout(() => {
              previousTime = Date.now();
              fn(...latestArgs);
              timer = void 0;
            }, intervalMs - elapsed);
          }
        }
      }
    };
    return named[name];
  }

  // ../../packages/ui-protocol/src/debounce.ts
  function debounce(ms, fn) {
    let timer;
    return function debounced(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, ms);
    };
  }

  // ../../packages/ui-protocol/src/svelte/vdom.svelte.ts
  var VDOM = class {
    #Component = state(void 0);
    get Component() {
      return get2(this.#Component);
    }
    set Component(value) {
      set(this.#Component, value, true);
    }
    #children = state();
    get children() {
      return get2(this.#children);
    }
    set children(value) {
      set(this.#children, value, true);
    }
    #props = state(proxy({}));
    get props() {
      return get2(this.#props);
    }
    set props(value) {
      set(this.#props, value, true);
    }
  };
  function createChild(init2, sender) {
    const component2 = components_default[init2.component];
    if (!component2) {
      if (!components_default["Warning"]) {
        throw new Error(`Component "${init2.component}" is not registered`);
      }
      return createChild(
        {
          ...init2,
          component: "Warning",
          props: { message: `Component "${init2.component}" was not registered` }
        },
        sender
      );
    }
    let node;
    const vdom = new VDOM();
    vdom.Component = component2;
    const keys = /* @__PURE__ */ new Set();
    for (const key2 in init2.props) {
      keys.add(key2);
      vdom.props[key2] = init2.props[key2];
    }
    if (init2.events) {
      for (const config of init2.events) {
        const handler = (...args) => {
          node.sender.dispatchEvent(node, config.event, ...args);
        };
        if (config.throttle) {
          vdom.props[config.event] = throttle(config.throttle, handler);
        } else if (config.debounce) {
          vdom.props[config.event] = debounce(config.debounce, handler);
        } else {
          vdom.props[config.event] = handler;
        }
      }
    }
    const leaf = {
      vdom,
      sender,
      path: init2.path,
      setProps(props) {
        for (const key2 in props) {
          keys.add(key2);
        }
        for (const key2 of keys) {
          vdom.props[key2] = props[key2];
        }
      }
    };
    node = leaf;
    if (init2.value !== void 0 || init2.setValue) {
      vdom.props.value = init2.value;
      node.setValue = (value) => {
        vdom.props.value = value;
      };
      vdom.props.setValue ??= (value) => {
        node.sender.setValue(node, value);
      };
    }
    leaf.setProps(init2.props);
    if (init2.children === void 0) {
      return leaf;
    }
    const container = {
      ...leaf,
      vdom,
      children: [],
      setChild(index2, childInit) {
        const child2 = createChild(childInit, container.sender);
        container.vdom.children[index2] = child2.vdom;
        return child2;
      },
      truncate(length) {
        container.vdom.children.length = length;
      },
      sender
    };
    container.children = init2.children.map((childInit) => createChild(childInit, container.sender));
    if (init2.component === "ErrorBoundary") {
      vdom.props.createTrigger = (setError) => {
        container.setError = setError;
      };
    }
    vdom.children = container.children.map((child2) => child2.vdom);
    node = container;
    return container;
  }

  // ../../packages/ui-protocol/src/svelte/Display.svelte
  function Display($$anchor, $$props) {
    push($$props, true);
    let base = prop($$props, "base", 3, false);
    let tree = user_derived(() => {
      let tree2 = createChild({ path: [], component: "Fragment", props: {}, children: [] }, {
        dispatchEvent: senderError,
        setValue: senderError,
        reset: senderError
      });
      tree2.sender = createSender(tree2, $$props.connection, $$props.onerror);
      return tree2;
    });
    onMount(() => {
      get2(tree).sender.reset();
    });
    function senderError() {
      throw new Error("sender not yet injected");
    }
    var fragment = comment();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor2) => {
        Base($$anchor2, {
          children: ($$anchor3, $$slotProps) => {
            VDOMNode_1($$anchor3, {
              get vdom() {
                return get2(tree).vdom;
              }
            });
          },
          $$slots: { default: true }
        });
      };
      var alternate = ($$anchor2) => {
        VDOMNode_1($$anchor2, {
          get vdom() {
            return get2(tree).vdom;
          }
        });
      };
      if_block(node, ($$render) => {
        if (base()) $$render(consequent);
        else $$render(alternate, -1);
      });
    }
    append($$anchor, fragment);
    pop();
  }

  // ../../packages/ui-protocol/src/svelte/Connect.svelte
  function Connect($$anchor, $$props) {
    push($$props, true);
    let connection = state(void 0);
    let connectionPromise;
    let code = "";
    let skipError = false;
    const abortController = new AbortController();
    const signal = abortController.signal;
    onDestroy(() => {
      abortController.abort("unmounted");
    });
    async function prepare() {
      const injected = await $$props.bridge(`typeof window?.__UI_PROTOCOL__?.[${JSON.stringify($$props.ui)}]`);
      if (injected === "undefined") {
        await $$props.bridge(code);
      }
    }
    function reconnect2() {
      if (signal.aborted) {
        throw new Error(`reconnected aborted: ${signal.reason}`);
      }
      const promise = prepare().then(() => evalConnect($$props.ui, $$props.bridge, { signal })).then((result) => {
        if (signal.aborted) {
          return;
        }
        set(connection, result, true);
        skipError = false;
        $$props.onrestore?.();
      });
      connectionPromise = promise;
      const timeout = setTimeout(
        () => {
          requestAnimationFrame(() => {
            if (promise === connectionPromise) {
              reconnect2();
            }
          });
        },
        750
      );
      promise.finally(() => {
        clearTimeout(timeout);
      });
      promise.catch((err) => {
        console.warn(new Error("Connection failed, retrying...", { cause: err }));
        setTimeout(
          () => {
            requestAnimationFrame(() => {
              if (promise === connectionPromise) {
                if (!skipError) {
                  $$props.onerror?.(err);
                  skipError = true;
                }
                reconnect2();
              }
            });
          },
          500
        );
      });
    }
    user_effect(() => {
      $$props.inject().then((result) => {
        code = result;
        reconnect2();
      });
    });
    function handleError(err) {
      set(connection, void 0);
      $$props.onerror?.(err);
      skipError = true;
      setTimeout(
        () => {
          reconnect2();
        },
        250
      );
    }
    var fragment = comment();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor2) => {
        Display($$anchor2, {
          get connection() {
            return get2(connection);
          },
          onerror: handleError
        });
      };
      var alternate = ($$anchor2) => {
        var fragment_2 = comment();
        var node_1 = first_child(fragment_2);
        snippet(node_1, () => $$props.children ?? noop);
        append($$anchor2, fragment_2);
      };
      if_block(node, ($$render) => {
        if (get2(connection)) $$render(consequent);
        else $$render(alternate, -1);
      });
    }
    append($$anchor, fragment);
    pop();
  }

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/reactivity/set.js
  var read_methods = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"];
  var set_like_methods = ["difference", "intersection", "symmetricDifference", "union"];
  var inited = false;
  var SvelteSet = class _SvelteSet extends Set {
    /** @type {Map<T, Source<boolean>>} */
    #sources = /* @__PURE__ */ new Map();
    #version = state(0);
    #size = state(0);
    #update_version = update_version || -1;
    /**
     * @param {Iterable<T> | null | undefined} [value]
     */
    constructor(value) {
      super();
      if (dev_fallback_default) {
        value = new Set(value);
        tag(this.#version, "SvelteSet version");
        tag(this.#size, "SvelteSet.size");
      }
      if (value) {
        for (var element2 of value) {
          super.add(element2);
        }
        this.#size.v = super.size;
      }
      if (!inited) this.#init();
    }
    /**
     * If the source is being created inside the same reaction as the SvelteSet instance,
     * we use `state` so that it will not be a dependency of the reaction. Otherwise we
     * use `source` so it will be.
     *
     * @template T
     * @param {T} value
     * @returns {Source<T>}
     */
    #source(value) {
      return update_version === this.#update_version ? state(value) : source(value);
    }
    // We init as part of the first instance so that we can treeshake this class
    #init() {
      inited = true;
      var proto = _SvelteSet.prototype;
      var set_proto = Set.prototype;
      for (const method of read_methods) {
        proto[method] = function(...v) {
          get2(this.#version);
          return set_proto[method].apply(this, v);
        };
      }
      for (const method of set_like_methods) {
        proto[method] = function(...v) {
          get2(this.#version);
          var set2 = (
            /** @type {Set<T>} */
            set_proto[method].apply(this, v)
          );
          return new _SvelteSet(set2);
        };
      }
    }
    /** @param {T} value */
    has(value) {
      var has = super.has(value);
      var sources = this.#sources;
      var s = sources.get(value);
      if (s === void 0) {
        if (!has) {
          get2(this.#version);
          return false;
        }
        s = this.#source(true);
        if (dev_fallback_default) {
          tag(s, `SvelteSet has(${label(value)})`);
        }
        sources.set(value, s);
      }
      get2(s);
      return has;
    }
    /** @param {T} value */
    add(value) {
      if (!super.has(value)) {
        super.add(value);
        set(this.#size, super.size);
        increment(this.#version);
      }
      return this;
    }
    /** @param {T} value */
    delete(value) {
      var deleted = super.delete(value);
      var sources = this.#sources;
      var s = sources.get(value);
      if (s !== void 0) {
        sources.delete(value);
        set(s, false);
      }
      if (deleted) {
        set(this.#size, super.size);
        increment(this.#version);
      }
      return deleted;
    }
    clear() {
      if (super.size === 0) {
        return;
      }
      super.clear();
      var sources = this.#sources;
      for (var s of sources.values()) {
        set(s, false);
      }
      sources.clear();
      set(this.#size, 0);
      increment(this.#version);
    }
    keys() {
      return this.values();
    }
    values() {
      get2(this.#version);
      return super.values();
    }
    entries() {
      get2(this.#version);
      return super.entries();
    }
    [Symbol.iterator]() {
      return this.keys();
    }
    get size() {
      return get2(this.#size);
    }
  };

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/reactivity/url-search-params.js
  var REPLACE = /* @__PURE__ */ Symbol();
  var SvelteURLSearchParams = class extends URLSearchParams {
    #version = dev_fallback_default ? tag(state(0), "SvelteURLSearchParams version") : state(0);
    #url = get_current_url();
    #updating = false;
    #update_url() {
      if (!this.#url || this.#updating) return;
      this.#updating = true;
      const search = this.toString();
      this.#url.search = search && `?${search}`;
      this.#updating = false;
    }
    /**
     * @param {URLSearchParams} params
     * @internal
     */
    [REPLACE](params) {
      if (this.#updating) return;
      this.#updating = true;
      for (const key2 of [...super.keys()]) {
        super.delete(key2);
      }
      for (const [key2, value] of params) {
        super.append(key2, value);
      }
      increment(this.#version);
      this.#updating = false;
    }
    /**
     * @param {string} name
     * @param {string} value
     * @returns {void}
     */
    append(name, value) {
      super.append(name, value);
      this.#update_url();
      increment(this.#version);
    }
    /**
     * @param {string} name
     * @param {string=} value
     * @returns {void}
     */
    delete(name, value) {
      var has_value = super.has(name, value);
      super.delete(name, value);
      if (has_value) {
        this.#update_url();
        increment(this.#version);
      }
    }
    /**
     * @param {string} name
     * @returns {string|null}
     */
    get(name) {
      get2(this.#version);
      return super.get(name);
    }
    /**
     * @param {string} name
     * @returns {string[]}
     */
    getAll(name) {
      get2(this.#version);
      return super.getAll(name);
    }
    /**
     * @param {string} name
     * @param {string=} value
     * @returns {boolean}
     */
    has(name, value) {
      get2(this.#version);
      return super.has(name, value);
    }
    keys() {
      get2(this.#version);
      return super.keys();
    }
    /**
     * @param {string} name
     * @param {string} value
     * @returns {void}
     */
    set(name, value) {
      var previous = super.getAll(name).join("");
      super.set(name, value);
      if (previous !== super.getAll(name).join("")) {
        this.#update_url();
        increment(this.#version);
      }
    }
    sort() {
      super.sort();
      this.#update_url();
      increment(this.#version);
    }
    toString() {
      get2(this.#version);
      return super.toString();
    }
    values() {
      get2(this.#version);
      return super.values();
    }
    entries() {
      get2(this.#version);
      return super.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      get2(this.#version);
      return super.size;
    }
  };

  // ../../node_modules/.pnpm/svelte@5.55.4_@typescript-eslint+types@8.58.2/node_modules/svelte/src/reactivity/url.js
  var current_url = null;
  function get_current_url() {
    return current_url;
  }

  // ../../packages/pixi-panel/src/Instructions.svelte
  var root24 = from_tree([
    [
      "div",
      { class: "instructions svelte-fto156" },
      [
        "div",
        { class: "engines svelte-fto156" },
        [
          "div",
          null,
          "Using ",
          ["strong", { class: "pixi svelte-fto156" }, "PixiJS"],
          "?",
          ["br"],
          " After creating the ",
          ["i", null, "PIXI.Application"],
          " ",
          [
            "code",
            { class: "svelte-fto156" },
            "const app = new PIXI.Application(...)"
          ],
          " add the line: ",
          [
            "code",
            { class: "with-copy svelte-fto156" },
            ["div", { class: "copy svelte-fto156" }, ,],
            " globalThis.__PIXI_APP__ = app;"
          ],
          " or when you're not using a PIXI.Application: ",
          [
            "code",
            { class: "svelte-fto156" },
            "globalThis.__PIXI_STAGE__ = stage;",
            ["br"],
            " globalThis.__PIXI_RENDERER__ = renderer;"
          ]
        ],
        " ",
        [
          "div",
          null,
          "or when using ",
          ["strong", { class: "phaser svelte-fto156" }, "Phaser"],
          ["br"],
          " After creating the ",
          ["i", null, "Phaser.Game"],
          " ",
          [
            "code",
            { class: "svelte-fto156" },
            "const game = new Phaser.Game(...)"
          ],
          " add the line: ",
          [
            "code",
            { class: "with-copy svelte-fto156" },
            ["div", { class: "copy svelte-fto156" }, ,],
            " globalThis.__PHASER_GAME__ = game;"
          ]
        ]
      ]
    ]
  ]);
  var $$css24 = {
    hash: "svelte-fto156",
    code: ".instructions.svelte-fto156 {padding:12px;font-size:13px;}code.svelte-fto156 {display:block;margin-block:8px;padding:8px;color:rgb(145 168 203);background-color:#202020;}.with-copy.svelte-fto156 {position:relative;padding-right:30px;}.copy.svelte-fto156 {position:absolute;top:6px;right:6px;}.pixi.svelte-fto156 {color:#df5584;}.phaser.svelte-fto156 {color:#bb73d6;}.engines.svelte-fto156 {display:flex;flex-direction:column;gap:8px;\n\n    @media (width >= 700px) {flex-direction:row;gap:64px;\n    }}"
  };
  function Instructions($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css24);
    async function copyToClipboard(text2) {
      try {
        await navigator.clipboard.writeText(text2);
      } catch (err) {
        console.warn(err);
        $$props.copy?.(text2);
      }
    }
    var div = root24();
    var div_1 = child(div);
    var div_2 = child(div_1);
    var code = sibling(child(div_2), 9);
    var div_3 = child(code);
    var node = child(div_3);
    ToggleButton(node, {
      icon: "copy",
      hint: "Copy to clipboard",
      transparent: true,
      onclick: () => copyToClipboard("globalThis.__PIXI_APP__ = app;")
    });
    reset(div_3);
    next();
    reset(code);
    next(2);
    reset(div_2);
    var div_4 = sibling(div_2, 2);
    var code_1 = sibling(child(div_4), 8);
    var div_5 = child(code_1);
    var node_1 = child(div_5);
    ToggleButton(node_1, {
      icon: "copy",
      hint: "Copy to clipboard",
      transparent: true,
      onclick: () => copyToClipboard("globalThis.__PHASER_GAME__ = game;")
    });
    reset(div_5);
    next();
    reset(code_1);
    reset(div_4);
    reset(div_1);
    reset(div);
    append($$anchor, div);
    pop();
  }

  // ../../packages/blender-elements/src/OutlinerRow.svelte
  var root_33 = from_tree([["span", { class: "toggle-spacer svelte-1oh4mzc" }]]);
  var root25 = from_tree([
    [
      "div",
      { tabindex: "0" },
      ,
      " ",
      ["span", { class: "title svelte-1oh4mzc" }, " "],
      " ",
      ,
      " ",
      ,
    ]
  ]);
  var $$css25 = {
    hash: "svelte-1oh4mzc",
    code: ".outliner-row.svelte-1oh4mzc {display:flex;align-items:center;height:20px;padding-right:4px;padding-left:calc(var(--indent) * 20px);color:#c2c2c2;background:#282828;outline:none;&:nth-child(even) {background-color:#2b2b2b;}&:hover {background-color:#444;}&:focus {background-color:#334d80;&:hover {background-color:#4772b3;}}&.match {background-color:#2f552f;&:focus {background-color:#336659;}}&.active {color:#ffaf29;}}.toggle-spacer.svelte-1oh4mzc {width:20px;}.title.svelte-1oh4mzc {user-select:none;overflow:hidden;flex:1;text-overflow:ellipsis;}.muted.svelte-1oh4mzc .title:where(.svelte-1oh4mzc) {opacity:0.5;}"
  };
  function OutlinerRow($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css25);
    let expanded = prop($$props, "expanded", 3, void 0), active = prop($$props, "active", 3, false), parentUnselectable = prop($$props, "parentUnselectable", 3, void 0), visible = prop($$props, "visible", 3, void 0), match = prop($$props, "match", 3, void 0), muted = prop($$props, "muted", 3, false);
    let el = state(void 0);
    const ctx = getContext("scene-graph");
    let scrolled = false;
    user_effect(() => {
      if (get2(el) && active()) {
        if (ctx.focused) {
          get2(el).focus();
        } else if (!scrolled) {
          get2(el).scrollIntoView();
          scrolled = true;
        }
      } else {
        scrolled = false;
      }
    });
    const external = user_derived(() => ({
      indent: $$props.indent,
      activate() {
        $$props.onactivate();
      }
    }));
    onMount(() => {
      get2(el).outlineRow = get2(external);
    });
    function onKeyDown(e) {
      if (e.key === "ArrowUp") {
        const controller = get2(el)?.previousElementSibling?.outlineRow;
        if (controller) {
          controller.activate();
          e.preventDefault();
        }
      }
      if (e.key === "ArrowDown") {
        const controller = get2(el)?.nextElementSibling?.outlineRow;
        if (controller) {
          controller.activate();
          e.preventDefault();
        }
      }
      if (e.key === "ArrowLeft") {
        if (expanded() === true) {
          $$props.oncollapse();
          e.preventDefault();
        } else {
          let cursor = get2(el);
          while (true) {
            cursor = cursor?.previousElementSibling;
            const controller = cursor?.outlineRow;
            if (!controller) {
              break;
            }
            if (controller.indent === $$props.indent - 1) {
              controller.activate();
              e.preventDefault();
              break;
            }
          }
        }
      }
      if (e.key === "ArrowRight") {
        if (expanded() === false) {
          $$props.onexpand();
          e.preventDefault();
        } else if (expanded() === true) {
          const controller = get2(el)?.nextElementSibling?.outlineRow;
          if (controller.indent === $$props.indent + 1) {
            controller.activate();
            e.preventDefault();
          }
        }
      }
      if (e.key === "h" && visible() !== void 0) {
        if (visible()) {
          $$props.onhide();
        } else {
          $$props.onshow();
        }
      }
    }
    var div = root25();
    let classes;
    let styles;
    var node = child(div);
    {
      var consequent = ($$anchor2) => {
        IconButton($$anchor2, { icon: "expanded", onclick: () => $$props.oncollapse() });
      };
      var consequent_1 = ($$anchor2) => {
        IconButton($$anchor2, { icon: "collapsed", onclick: () => $$props.onexpand() });
      };
      var alternate = ($$anchor2) => {
        var span = root_33();
        append($$anchor2, span);
      };
      if_block(node, ($$render) => {
        if (expanded() === true) $$render(consequent);
        else if (expanded() === false) $$render(consequent_1, 1);
        else $$render(alternate, -1);
      });
    }
    var span_1 = sibling(node, 2);
    var text2 = child(span_1, true);
    reset(span_1);
    var node_1 = sibling(span_1, 2);
    {
      var consequent_2 = ($$anchor2) => {
        IconButton($$anchor2, {
          icon: "selectable",
          hint: "Disable right-click selection",
          get muted() {
            return parentUnselectable();
          },
          onclick: () => $$props.onunselectable()
        });
      };
      var alternate_1 = ($$anchor2) => {
        IconButton($$anchor2, {
          icon: "unselectable",
          hint: "Enable right-click selection",
          get muted() {
            return parentUnselectable();
          },
          onclick: () => $$props.onselectable()
        });
      };
      if_block(node_1, ($$render) => {
        if ($$props.selectable) $$render(consequent_2);
        else $$render(alternate_1, -1);
      });
    }
    var node_2 = sibling(node_1, 2);
    {
      var consequent_3 = ($$anchor2) => {
        IconButton($$anchor2, {
          icon: "eye-opened",
          hint: "Hide (h)",
          onclick: () => $$props.onhide()
        });
      };
      var consequent_4 = ($$anchor2) => {
        IconButton($$anchor2, {
          icon: "eye-closed",
          hint: "Show (h)",
          onclick: () => $$props.onshow()
        });
      };
      if_block(node_2, ($$render) => {
        if (visible() === true) $$render(consequent_3);
        else if (visible() === false) $$render(consequent_4, 1);
      });
    }
    reset(div);
    bind_this(div, ($$value) => set(el, $$value), () => get2(el));
    template_effect(() => {
      classes = set_class(div, 1, "outliner-row svelte-1oh4mzc", null, classes, { active: active(), muted: muted(), match: match() });
      styles = set_style(div, "", styles, { "--indent": $$props.indent });
      set_text(text2, $$props.title);
    });
    delegated("click", div, () => $$props.onactivate());
    delegated("dblclick", div, () => $$props.onlog());
    delegated("keydown", div, onKeyDown);
    event("mouseenter", div, function(...$$args) {
      $$props.onmouseenter?.apply(this, $$args);
    });
    event("mouseleave", div, function(...$$args) {
      $$props.onmouseleave?.apply(this, $$args);
    });
    append($$anchor, div);
    pop();
  }
  delegate(["click", "dblclick", "keydown"]);

  // ../../packages/pixi-panel/src/Tree.svelte
  var root26 = from_tree([, , " ", ,], 1);
  function Tree_1($$anchor, $$props) {
    push($$props, true);
    let muted = prop($$props, "muted", 3, false), parentUnselectable = prop($$props, "parentUnselectable", 3, void 0), children = prop($$props, "children", 3, void 0), depth = prop($$props, "depth", 3, 0);
    var fragment = root26();
    var node = first_child(fragment);
    {
      let $0 = user_derived(() => $$props.visible === false || muted());
      let $1 = user_derived(() => parentUnselectable() || !$$props.selectable);
      let $2 = user_derived(() => $$props.leaf ? void 0 : !!children());
      OutlinerRow(node, {
        get indent() {
          return depth();
        },
        get title() {
          return $$props.name;
        },
        get active() {
          return $$props.active;
        },
        get selectable() {
          return $$props.selectable;
        },
        get visible() {
          return $$props.visible;
        },
        get match() {
          return $$props.match;
        },
        get muted() {
          return get2($0);
        },
        get parentUnselectable() {
          return get2($1);
        },
        get expanded() {
          return get2($2);
        },
        onexpand: () => $$props.onexpand?.([$$props.id]),
        oncollapse: () => $$props.oncollapse?.([$$props.id]),
        onactivate: () => $$props.onactivate?.([$$props.id]),
        onselectable: () => $$props.onselectable?.([$$props.id]),
        onunselectable: () => $$props.onunselectable?.([$$props.id]),
        onshow: () => $$props.onshow?.([$$props.id]),
        onhide: () => $$props.onhide?.([$$props.id]),
        onlog: () => $$props.onlog?.([$$props.id]),
        onmouseenter: () => $$props.onmouseenter?.([$$props.id]),
        onmouseleave: () => $$props.onmouseleave?.([$$props.id])
      });
    }
    var node_1 = sibling(node, 2);
    {
      var consequent = ($$anchor2) => {
        var fragment_1 = comment();
        var node_2 = first_child(fragment_1);
        each(node_2, 17, children, (child2) => child2.id, ($$anchor3, child2) => {
          {
            let $0 = user_derived(() => parentUnselectable() || !$$props.selectable);
            let $1 = user_derived(() => $$props.visible === false || muted());
            let $2 = user_derived(() => depth() + 1);
            Tree_1($$anchor3, {
              get id() {
                return get2(child2).id;
              },
              get name() {
                return get2(child2).name;
              },
              get leaf() {
                return get2(child2).leaf;
              },
              get active() {
                return get2(child2).active;
              },
              get selectable() {
                return get2(child2).selectable;
              },
              get parentUnselectable() {
                return get2($0);
              },
              get visible() {
                return get2(child2).visible;
              },
              get match() {
                return get2(child2).match;
              },
              get muted() {
                return get2($1);
              },
              get children() {
                return get2(child2).children;
              },
              get depth() {
                return get2($2);
              },
              onexpand: (path) => $$props.onexpand([$$props.id, ...path]),
              oncollapse: (path) => $$props.oncollapse([$$props.id, ...path]),
              onactivate: (path) => $$props.onactivate([$$props.id, ...path]),
              onselectable: (path) => $$props.onselectable([$$props.id, ...path]),
              onunselectable: (path) => $$props.onunselectable([$$props.id, ...path]),
              onshow: (path) => $$props.onshow([$$props.id, ...path]),
              onhide: (path) => $$props.onhide([$$props.id, ...path]),
              onlog: (path) => $$props.onlog([$$props.id, ...path]),
              onmouseenter: (path) => $$props.onmouseenter([$$props.id, ...path]),
              onmouseleave: (path) => $$props.onmouseleave([$$props.id, ...path])
            });
          }
        });
        append($$anchor2, fragment_1);
      };
      if_block(node_1, ($$render) => {
        if (children()) $$render(consequent);
      });
    }
    append($$anchor, fragment);
    pop();
  }

  // ../../packages/pixi-panel/src/SceneGraphLegacy.svelte
  var root27 = from_tree([
    [
      "div",
      { class: "scene-graph-legacy svelte-qrsw8g" },
      ["div", { class: "search-input svelte-qrsw8g" }, ,],
      " ",
      ["div", { class: "tree svelte-qrsw8g" }, ,]
    ]
  ]);
  var $$css26 = {
    hash: "svelte-qrsw8g",
    code: ".scene-graph-legacy.svelte-qrsw8g {display:flex;flex-direction:column;height:100%;background:#2d2d2d;}.search-input.svelte-qrsw8g {position:sticky;padding:8px;}.tree.svelte-qrsw8g {overflow-y:auto;flex:1;}"
  };
  function SceneGraphLegacy($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css26);
    const ctx = setContext("scene-graph", { focused: false });
    var div = root27();
    var div_1 = child(div);
    var node = child(div_1);
    snippet(node, () => $$props.children);
    reset(div_1);
    var div_2 = sibling(div_1, 2);
    var node_1 = child(div_2);
    {
      var consequent = ($$anchor2) => {
        Tree_1($$anchor2, {
          get id() {
            return $$props.value.id;
          },
          get name() {
            return $$props.value.name;
          },
          get leaf() {
            return $$props.value.leaf;
          },
          get active() {
            return $$props.value.active;
          },
          get visible() {
            return $$props.value.visible;
          },
          get selectable() {
            return $$props.value.selectable;
          },
          get match() {
            return $$props.value.match;
          },
          get children() {
            return $$props.value.children;
          },
          get onexpand() {
            return $$props.onexpand;
          },
          get oncollapse() {
            return $$props.oncollapse;
          },
          get onactivate() {
            return $$props.onactivate;
          },
          get onselectable() {
            return $$props.onselectable;
          },
          get onunselectable() {
            return $$props.onunselectable;
          },
          get onshow() {
            return $$props.onshow;
          },
          get onhide() {
            return $$props.onhide;
          },
          get onlog() {
            return $$props.onlog;
          },
          get onmouseenter() {
            return $$props.onmouseenter;
          },
          get onmouseleave() {
            return $$props.onmouseleave;
          }
        });
      };
      var alternate = ($$anchor2) => {
        Warning($$anchor2, {
          children: ($$anchor3, $$slotProps) => {
            next();
            var text2 = text("No scene detected.");
            append($$anchor3, text2);
          },
          $$slots: { default: true }
        });
      };
      if_block(node_1, ($$render) => {
        if ($$props.value) $$render(consequent);
        else $$render(alternate, -1);
      });
    }
    reset(div_2);
    reset(div);
    delegated("focusin", div_2, () => ctx.focused = true);
    delegated("focusout", div_2, () => ctx.focused = false);
    append($$anchor, div);
    pop();
  }
  delegate(["focusin", "focusout"]);

  // ../../packages/blender-elements/src/SelectMenu/Option.svelte
  var root_19 = from_tree([["span", { class: "icon svelte-k3n57j" }]]);
  var root28 = from_tree([["button", null, , " ", ["span", null, " "]]]);
  var $$css27 = {
    hash: "svelte-k3n57j",
    code: ".option.svelte-k3n57j {cursor:pointer;user-select:none;display:flex;gap:4px;align-items:center;min-height:18px;padding:0 6px;border:0;border-radius:3px;font:inherit;color:#ddd;text-align:left;background:transparent;&:not(.active):hover {color:#fff;background:#3f3f3f;}}.active.svelte-k3n57j {color:#fff;background:#4773b3;}.icon.svelte-k3n57j {display:inline-block;width:16px;height:16px;background:no-repeat center center;background-size:contain;}"
  };
  function Option($$anchor, $$props) {
    append_styles($$anchor, $$css27);
    let icon = prop($$props, "icon", 3, void 0), label2 = prop($$props, "label", 3, void 0);
    var button = root28();
    let classes;
    var node = child(button);
    {
      var consequent = ($$anchor2) => {
        var span = root_19();
        template_effect(() => set_style(span, `background-image: var(--icon-${icon() ?? ""})`));
        append($$anchor2, span);
      };
      if_block(node, ($$render) => {
        if (icon()) $$render(consequent);
      });
    }
    var span_1 = sibling(node, 2);
    var text2 = child(span_1, true);
    reset(span_1);
    reset(button);
    template_effect(() => {
      classes = set_class(button, 1, "option svelte-k3n57j", null, classes, { active: $$props.active });
      set_text(text2, label2() ?? $$props.value);
    });
    delegated("click", button, function(...$$args) {
      $$props.onclick?.apply(this, $$args);
    });
    append($$anchor, button);
  }
  delegate(["click"]);

  // ../../packages/blender-elements/src/SelectMenu/SelectMenu.svelte
  var root_110 = from_tree([["span", null, " "]]);
  var root_34 = from_tree([["span", { class: "icon svelte-fsd1t" }]]);
  var root_28 = from_tree([, , " ", ["span", null, " "]], 1);
  var root_4 = from_tree([
    [
      "div",
      { class: "popout svelte-fsd1t" },
      [
        "button",
        { class: "detector svelte-fsd1t", "aria-label": "close" }
      ],
      " ",
      ["div", { class: "options svelte-fsd1t" }]
    ]
  ]);
  var root29 = from_tree([
    [
      "div",
      null,
      ["button", { class: "value svelte-fsd1t" }, ,],
      " ",
      ,
    ]
  ]);
  var $$css28 = {
    hash: "svelte-fsd1t",
    code: '.select-menu.svelte-fsd1t {position:relative;}.value.svelte-fsd1t {cursor:pointer;display:flex;gap:4px;align-items:center;box-sizing:border-box;width:100%;min-height:18px;padding:2px 20px 1px 4px;border:none;border:1px solid #3c3c3e;border-radius:4px;font:inherit;color:#fdfdfd;text-align:left;appearance:none;background:#282828;outline:none;box-shadow:0 1px 3px #0000004d;&::after {content:"";position:absolute;top:1px;right:3px;width:16px;height:16px;opacity:0.5;background:var(--icon-chevron-down) center center no-repeat;}&:hover {border-color:#464646;background:#303030;}}.expanded.svelte-fsd1t .value:where(.svelte-fsd1t) {color:#fff;background:#446290;}[data-y="up"].svelte-fsd1t .value:where(.svelte-fsd1t) {border-top-color:#446290;border-top-left-radius:0;border-top-right-radius:0;}[data-y="down"].svelte-fsd1t .value:where(.svelte-fsd1t) {border-bottom-color:#446290;border-bottom-right-radius:0;border-bottom-left-radius:0;}.icon.svelte-fsd1t {display:inline-block;width:16px;height:16px;background:no-repeat center center;background-size:contain;}.popout.svelte-fsd1t {position:absolute;z-index:1;box-sizing:border-box;min-width:100%;border:1px solid #242424;border-radius:4px;background:#181818;}[data-y="up"].svelte-fsd1t .popout:where(.svelte-fsd1t) {bottom:100%;border-top-left-radius:0;border-top-right-radius:0;}[data-x="right"].svelte-fsd1t .popout:where(.svelte-fsd1t) {left:0;}[data-y="down"].svelte-fsd1t .popout:where(.svelte-fsd1t) {top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;}[data-x="left"].svelte-fsd1t .popout:where(.svelte-fsd1t) {right:0;}.detector.svelte-fsd1t {position:absolute;inset:-32px;border:none;background-color:transparent;}.options.svelte-fsd1t {position:relative;display:flex;flex-direction:column;gap:4px;padding:2px;}'
  };
  function SelectMenu($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css28);
    let value = prop($$props, "value", 15);
    let current = user_derived(() => $$props.options.find((option) => {
      if (typeof option === "string") {
        return option === value();
      }
      return option.value === value();
    }));
    let el = state(void 0);
    let expanded = state(void 0);
    let timer;
    function select(next2) {
      value(typeof next2 === "string" ? next2 : next2.value);
      $$props.setValue?.(value());
      collapse();
    }
    async function expand() {
      set(expanded, { x: "left", y: "down" }, true);
      await tick();
      if (!get2(expanded)) {
        return;
      }
      if (!get2(el)) {
        return;
      }
      const bounds = get2(el).getBoundingClientRect();
      const { x, y, height } = bounds;
      const { innerHeight } = window;
      if (x < 0) {
        get2(expanded).x = "right";
      }
      if (y + height > innerHeight) {
        get2(expanded).y = "up";
      }
    }
    function collapse() {
      set(expanded, void 0);
    }
    function onLeave() {
      timer = window.setTimeout(collapse, 0);
    }
    function onEnter() {
      clearTimeout(timer);
      timer = void 0;
    }
    var div = root29();
    let classes;
    var button = child(div);
    var node = child(button);
    {
      var consequent = ($$anchor2) => {
        var span = root_110();
        var text2 = child(span, true);
        reset(span);
        template_effect(() => set_text(text2, get2(current)));
        append($$anchor2, span);
      };
      var consequent_2 = ($$anchor2) => {
        var fragment = root_28();
        var node_1 = first_child(fragment);
        {
          var consequent_1 = ($$anchor3) => {
            var span_1 = root_34();
            template_effect(() => set_style(span_1, `background-image: var(--icon-${get2(current).icon ?? ""})`));
            append($$anchor3, span_1);
          };
          if_block(node_1, ($$render) => {
            if (get2(current).icon) $$render(consequent_1);
          });
        }
        var span_2 = sibling(node_1, 2);
        var text_1 = child(span_2, true);
        reset(span_2);
        template_effect(() => set_text(text_1, get2(current).label ?? get2(current).value));
        append($$anchor2, fragment);
      };
      if_block(node, ($$render) => {
        if (typeof get2(current) === "string") $$render(consequent);
        else if (get2(current)) $$render(consequent_2, 1);
      });
    }
    reset(button);
    var node_2 = sibling(button, 2);
    {
      var consequent_4 = ($$anchor2) => {
        var div_1 = root_4();
        var button_1 = child(div_1);
        var div_2 = sibling(button_1, 2);
        each(div_2, 20, () => $$props.options, (option) => option, ($$anchor3, option) => {
          var fragment_1 = comment();
          var node_3 = first_child(fragment_1);
          {
            var consequent_3 = ($$anchor4) => {
              {
                let $0 = user_derived(() => option === value());
                Option($$anchor4, {
                  get value() {
                    return option;
                  },
                  get active() {
                    return get2($0);
                  },
                  onclick: () => select(option)
                });
              }
            };
            var alternate = ($$anchor4) => {
              {
                let $0 = user_derived(() => option.value === value());
                Option($$anchor4, {
                  get value() {
                    return option.value;
                  },
                  get icon() {
                    return option.icon;
                  },
                  get label() {
                    return option.label;
                  },
                  get active() {
                    return get2($0);
                  },
                  onclick: () => select(option)
                });
              }
            };
            if_block(node_3, ($$render) => {
              if (typeof option === "string") $$render(consequent_3);
              else $$render(alternate, -1);
            });
          }
          append($$anchor3, fragment_1);
        });
        reset(div_2);
        reset(div_1);
        bind_this(div_1, ($$value) => set(el, $$value), () => get2(el));
        event("mouseleave", button_1, onLeave);
        delegated("click", button_1, collapse);
        event("mouseenter", div_2, onEnter);
        append($$anchor2, div_1);
      };
      if_block(node_2, ($$render) => {
        if (get2(expanded)) $$render(consequent_4);
      });
    }
    reset(div);
    template_effect(() => {
      classes = set_class(div, 1, "select-menu svelte-fsd1t", null, classes, { expanded: get2(expanded) });
      set_attribute2(div, "data-y", get2(expanded)?.y);
      set_attribute2(div, "data-x", get2(expanded)?.x);
    });
    delegated("click", button, expand);
    append($$anchor, div);
    pop();
  }
  delegate(["click"]);

  // ../../packages/pixi-panel/src/ObjectProperties.svelte
  var root_42 = from_tree([, , " ", ,], 1);
  var root_10 = from_tree([, , " ", ,], 1);
  var root_35 = from_tree([, , " ", , " ", ,], 1);
  var root_172 = from_tree([, , " ", ,], 1);
  var root_21 = from_tree([, , " ", ,], 1);
  var root_252 = from_tree([, , " ", ,], 1);
  var root_152 = from_tree([, , " ", , " ", ,], 1);
  var root_30 = from_tree([, , " ", ,], 1);
  var root_38 = from_tree([, , " ", , " ", ,], 1);
  var root_51 = from_tree([, , " ", ,], 1);
  var root_55 = from_tree([, , " ", ,], 1);
  var root_49 = from_tree([, , " ", ,], 1);
  var root_61 = from_tree([, , " ", ,], 1);
  var root_60 = from_tree([, , " ", , " ", , " ", ,], 1);
  var root30 = from_tree([, , " ", , " ", , " ", , " ", , " ", ,], 1);
  function ObjectProperties($$anchor, $$props) {
    push($$props, true);
    let transformPanel = user_derived(() => typeof $$props.value.x === "number" || typeof $$props.value.angle === "number" || typeof $$props.value.scaleX === "number");
    let transformOriginPanel = user_derived(() => typeof $$props.value.originX === "number" || typeof $$props.value.anchorX === "number" || typeof $$props.value.pivotX === "number");
    let visibilityPanel = user_derived(() => typeof $$props.value.alpha === "number" || typeof $$props.value.visible === "boolean");
    let renderPanel = user_derived(() => typeof $$props.value.sortableChildren === "boolean" || typeof $$props.value.zIndex === "number" || typeof $$props.value.cullable === "boolean");
    let interactivePanel = user_derived(() => typeof $$props.value.interactive === "boolean" || typeof $$props.value.interactiveChildren === "boolean");
    let skewDimensionsPanel = state("");
    user_pre_effect(() => {
      if (typeof $$props.value.width === "number" && typeof $$props.value.skewX === "number") {
        set(skewDimensionsPanel, "Skew & Dimensions");
      } else if (typeof $$props.value.width === "number") {
        set(skewDimensionsPanel, "Dimensions");
      } else if (typeof $$props.value.skewX === "number") {
        set(skewDimensionsPanel, "Skew");
      } else {
        set(skewDimensionsPanel, "");
      }
    });
    var fragment = root30();
    var node = first_child(fragment);
    {
      var consequent_2 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Transform",
          get expanded() {
            return $$props.expanded.transform;
          },
          setExpanded: (val) => $$props.setExpanded?.("transform", val),
          children: ($$anchor3, $$slotProps) => {
            Box($$anchor3, {
              gap: 6,
              padding: 8,
              children: ($$anchor4, $$slotProps2) => {
                var fragment_3 = root_35();
                var node_1 = first_child(fragment_3);
                Box(node_1, {
                  gap: 1,
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_4 = root_42();
                    var node_2 = first_child(fragment_4);
                    Property(node_2, {
                      label: "Location X",
                      children: ($$anchor6, $$slotProps4) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.x;
                          },
                          step: 1,
                          rounded: "top",
                          setValue: (value) => $$props.setValue({ property: "x", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                    var node_3 = sibling(node_2, 2);
                    Property(node_3, {
                      label: "Y",
                      children: ($$anchor6, $$slotProps4) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.y;
                          },
                          step: 1,
                          rounded: "bottom",
                          setValue: (value) => $$props.setValue({ property: "y", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor5, fragment_4);
                  },
                  $$slots: { default: true }
                });
                var node_4 = sibling(node_1, 2);
                {
                  var consequent = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Angle",
                      hint: "The angle of the object in degrees",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.angle;
                          },
                          step: 1,
                          suffix: "\xB0",
                          setValue: (value) => $$props.setValue({ property: "angle", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_4, ($$render) => {
                    if (typeof $$props.value.angle === "number") $$render(consequent);
                  });
                }
                var node_5 = sibling(node_4, 2);
                {
                  var consequent_1 = ($$anchor5) => {
                    Box($$anchor5, {
                      gap: 1,
                      children: ($$anchor6, $$slotProps3) => {
                        var fragment_10 = root_10();
                        var node_6 = first_child(fragment_10);
                        Property(node_6, {
                          label: "Scale X",
                          hint: "The scale factors of this object along the local coordinate axes",
                          children: ($$anchor7, $$slotProps4) => {
                            NumberInput($$anchor7, {
                              get value() {
                                return $$props.value.scaleX;
                              },
                              step: 0.05,
                              rounded: "top",
                              setValue: (value) => $$props.setValue({ property: "scaleX", value })
                            });
                          },
                          $$slots: { default: true }
                        });
                        var node_7 = sibling(node_6, 2);
                        Property(node_7, {
                          label: "Y",
                          children: ($$anchor7, $$slotProps4) => {
                            NumberInput($$anchor7, {
                              get value() {
                                return $$props.value.scaleY;
                              },
                              step: 0.1,
                              rounded: "bottom",
                              setValue: (value) => $$props.setValue({ property: "scaleY", value })
                            });
                          },
                          $$slots: { default: true }
                        });
                        append($$anchor6, fragment_10);
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_5, ($$render) => {
                    if (typeof $$props.value.scaleX === "number") $$render(consequent_1);
                  });
                }
                append($$anchor4, fragment_3);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      };
      if_block(node, ($$render) => {
        if (get2(transformPanel)) $$render(consequent_2);
      });
    }
    var node_8 = sibling(node, 2);
    {
      var consequent_6 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Transform Origin",
          get expanded() {
            return $$props.expanded.transformOrigin;
          },
          setExpanded: (val) => $$props.setExpanded?.("transformOrigin", val),
          children: ($$anchor3, $$slotProps) => {
            Box($$anchor3, {
              gap: 6,
              padding: 8,
              children: ($$anchor4, $$slotProps2) => {
                var fragment_15 = root_152();
                var node_9 = first_child(fragment_15);
                {
                  var consequent_3 = ($$anchor5) => {
                    Box($$anchor5, {
                      gap: 1,
                      children: ($$anchor6, $$slotProps3) => {
                        var fragment_17 = root_172();
                        var node_10 = first_child(fragment_17);
                        Property(node_10, {
                          label: "Anchor X",
                          children: ($$anchor7, $$slotProps4) => {
                            NumberInput($$anchor7, {
                              get value() {
                                return $$props.value.anchorX;
                              },
                              step: 0.01,
                              min: 0,
                              max: 1,
                              rounded: "top",
                              setValue: (value) => $$props.setValue({ property: "anchorX", value })
                            });
                          },
                          $$slots: { default: true }
                        });
                        var node_11 = sibling(node_10, 2);
                        Property(node_11, {
                          label: "Y",
                          children: ($$anchor7, $$slotProps4) => {
                            NumberInput($$anchor7, {
                              get value() {
                                return $$props.value.anchorY;
                              },
                              step: 0.01,
                              min: 0,
                              max: 1,
                              rounded: "bottom",
                              setValue: (value) => $$props.setValue({ property: "anchorY", value })
                            });
                          },
                          $$slots: { default: true }
                        });
                        append($$anchor6, fragment_17);
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_9, ($$render) => {
                    if (typeof $$props.value.anchorX === "number") $$render(consequent_3);
                  });
                }
                var node_12 = sibling(node_9, 2);
                {
                  var consequent_4 = ($$anchor5) => {
                    Box($$anchor5, {
                      gap: 1,
                      children: ($$anchor6, $$slotProps3) => {
                        var fragment_21 = root_21();
                        var node_13 = first_child(fragment_21);
                        Property(node_13, {
                          label: "Origin X",
                          children: ($$anchor7, $$slotProps4) => {
                            NumberInput($$anchor7, {
                              get value() {
                                return $$props.value.originX;
                              },
                              step: 0.01,
                              min: 0,
                              max: 1,
                              rounded: "top",
                              setValue: (value) => $$props.setValue({ property: "originX", value })
                            });
                          },
                          $$slots: { default: true }
                        });
                        var node_14 = sibling(node_13, 2);
                        Property(node_14, {
                          label: "Y",
                          children: ($$anchor7, $$slotProps4) => {
                            NumberInput($$anchor7, {
                              get value() {
                                return $$props.value.originY;
                              },
                              step: 0.01,
                              min: 0,
                              max: 1,
                              rounded: "bottom",
                              setValue: (value) => $$props.setValue({ property: "originY", value })
                            });
                          },
                          $$slots: { default: true }
                        });
                        append($$anchor6, fragment_21);
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_12, ($$render) => {
                    if (typeof $$props.value.originX === "number") $$render(consequent_4);
                  });
                }
                var node_15 = sibling(node_12, 2);
                {
                  var consequent_5 = ($$anchor5) => {
                    Box($$anchor5, {
                      gap: 1,
                      children: ($$anchor6, $$slotProps3) => {
                        var fragment_25 = root_252();
                        var node_16 = first_child(fragment_25);
                        Property(node_16, {
                          label: "Pivot X",
                          hint: "The center of rotation, scaling, and skewing for this display object in its local space",
                          children: ($$anchor7, $$slotProps4) => {
                            NumberInput($$anchor7, {
                              get value() {
                                return $$props.value.pivotX;
                              },
                              step: 0.1,
                              rounded: "top",
                              setValue: (value) => $$props.setValue({ property: "pivotX", value })
                            });
                          },
                          $$slots: { default: true }
                        });
                        var node_17 = sibling(node_16, 2);
                        Property(node_17, {
                          label: "Y",
                          children: ($$anchor7, $$slotProps4) => {
                            NumberInput($$anchor7, {
                              get value() {
                                return $$props.value.pivotY;
                              },
                              step: 0.1,
                              rounded: "bottom",
                              setValue: (value) => $$props.setValue({ property: "pivotY", value })
                            });
                          },
                          $$slots: { default: true }
                        });
                        append($$anchor6, fragment_25);
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_15, ($$render) => {
                    if (typeof $$props.value.pivotX === "number") $$render(consequent_5);
                  });
                }
                append($$anchor4, fragment_15);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      };
      if_block(node_8, ($$render) => {
        if (get2(transformOriginPanel)) $$render(consequent_6);
      });
    }
    var node_18 = sibling(node_8, 2);
    {
      var consequent_9 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Visibility",
          get expanded() {
            return $$props.expanded.visibility;
          },
          setExpanded: (val) => $$props.setExpanded?.("visibility", val),
          children: ($$anchor3, $$slotProps) => {
            Box($$anchor3, {
              gap: 6,
              padding: 8,
              children: ($$anchor4, $$slotProps2) => {
                var fragment_30 = root_30();
                var node_19 = first_child(fragment_30);
                {
                  var consequent_7 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Alpha",
                      hint: "The opacity of the object",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.alpha;
                          },
                          step: 0.01,
                          min: 0,
                          max: 1,
                          setValue: (value) => $$props.setValue({ property: "alpha", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_19, ($$render) => {
                    if (typeof $$props.value.alpha === "number") $$render(consequent_7);
                  });
                }
                var node_20 = sibling(node_19, 2);
                {
                  var consequent_8 = ($$anchor5) => {
                    Property($$anchor5, {
                      children: ($$anchor6, $$slotProps3) => {
                        CheckboxInput($$anchor6, {
                          get value() {
                            return $$props.value.visible;
                          },
                          hint: "The visibility of the object",
                          setValue: (value) => $$props.setValue({ property: "visible", value }),
                          children: ($$anchor7, $$slotProps4) => {
                            next();
                            var text2 = text("Visible");
                            append($$anchor7, text2);
                          },
                          $$slots: { default: true }
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_20, ($$render) => {
                    if (typeof $$props.value.visible === "boolean") $$render(consequent_8);
                  });
                }
                append($$anchor4, fragment_30);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      };
      if_block(node_18, ($$render) => {
        if (get2(visibilityPanel)) $$render(consequent_9);
      });
    }
    var node_21 = sibling(node_18, 2);
    {
      var consequent_13 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Rendering",
          get expanded() {
            return $$props.expanded.rendering;
          },
          setExpanded: (val) => $$props.setExpanded?.("rendering", val),
          children: ($$anchor3, $$slotProps) => {
            Box($$anchor3, {
              gap: 6,
              padding: 8,
              children: ($$anchor4, $$slotProps2) => {
                var fragment_37 = root_38();
                var node_22 = first_child(fragment_37);
                {
                  var consequent_10 = ($$anchor5) => {
                    Property($$anchor5, {
                      children: ($$anchor6, $$slotProps3) => {
                        CheckboxInput($$anchor6, {
                          get value() {
                            return $$props.value.sortableChildren;
                          },
                          hint: "If set to true, the container will sort its children by zIndex value",
                          setValue: (value) => $$props.setValue({ property: "sortableChildren", value }),
                          children: ($$anchor7, $$slotProps4) => {
                            next();
                            var text_1 = text("Sortable children");
                            append($$anchor7, text_1);
                          },
                          $$slots: { default: true }
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_22, ($$render) => {
                    if (typeof $$props.value.sortableChildren === "boolean") $$render(consequent_10);
                  });
                }
                var node_23 = sibling(node_22, 2);
                {
                  var consequent_11 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Z Index",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.zIndex;
                          },
                          setValue: (value) => $$props.setValue({ property: "zIndex", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_23, ($$render) => {
                    if (typeof $$props.value.zIndex === "number") $$render(consequent_11);
                  });
                }
                var node_24 = sibling(node_23, 2);
                {
                  var consequent_12 = ($$anchor5) => {
                    Property($$anchor5, {
                      children: ($$anchor6, $$slotProps3) => {
                        CheckboxInput($$anchor6, {
                          get value() {
                            return $$props.value.cullable;
                          },
                          hint: "Should this object be rendered if the bounds of this object are out of frame?",
                          setValue: (value) => $$props.setValue({ property: "cullable", value }),
                          children: ($$anchor7, $$slotProps4) => {
                            next();
                            var text_2 = text("Cullable");
                            append($$anchor7, text_2);
                          },
                          $$slots: { default: true }
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_24, ($$render) => {
                    if (typeof $$props.value.cullable === "boolean") $$render(consequent_12);
                  });
                }
                append($$anchor4, fragment_37);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      };
      if_block(node_21, ($$render) => {
        if (get2(renderPanel)) $$render(consequent_13);
      });
    }
    var node_25 = sibling(node_21, 2);
    {
      var consequent_16 = ($$anchor2) => {
        Panel($$anchor2, {
          get title() {
            return get2(skewDimensionsPanel);
          },
          get expanded() {
            return $$props.expanded.skewDimensions;
          },
          setExpanded: (val) => $$props.setExpanded?.("skewDimensions", val),
          children: ($$anchor3, $$slotProps) => {
            Box($$anchor3, {
              gap: 6,
              padding: 8,
              children: ($$anchor4, $$slotProps2) => {
                var fragment_46 = root_49();
                var node_26 = first_child(fragment_46);
                {
                  var consequent_14 = ($$anchor5) => {
                    Box($$anchor5, {
                      gap: 1,
                      children: ($$anchor6, $$slotProps3) => {
                        var fragment_48 = root_51();
                        var node_27 = first_child(fragment_48);
                        Property(node_27, {
                          label: "Skew X",
                          hint: "The skew factor for the object in radians",
                          children: ($$anchor7, $$slotProps4) => {
                            NumberInput($$anchor7, {
                              get value() {
                                return $$props.value.skewX;
                              },
                              step: 0.01,
                              suffix: "r",
                              rounded: "top",
                              setValue: (value) => $$props.setValue({ property: "skewX", value })
                            });
                          },
                          $$slots: { default: true }
                        });
                        var node_28 = sibling(node_27, 2);
                        Property(node_28, {
                          label: "Y",
                          children: ($$anchor7, $$slotProps4) => {
                            NumberInput($$anchor7, {
                              get value() {
                                return $$props.value.skewY;
                              },
                              step: 0.01,
                              suffix: "r",
                              rounded: "bottom",
                              setValue: (value) => $$props.setValue({ property: "skewY", value })
                            });
                          },
                          $$slots: { default: true }
                        });
                        append($$anchor6, fragment_48);
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_26, ($$render) => {
                    if (typeof $$props.value.skewX === "number") $$render(consequent_14);
                  });
                }
                var node_29 = sibling(node_26, 2);
                {
                  var consequent_15 = ($$anchor5) => {
                    Box($$anchor5, {
                      gap: 1,
                      children: ($$anchor6, $$slotProps3) => {
                        var fragment_52 = root_55();
                        var node_30 = first_child(fragment_52);
                        Property(node_30, {
                          label: "Width",
                          children: ($$anchor7, $$slotProps4) => {
                            NumberInput($$anchor7, {
                              get value() {
                                return $$props.value.width;
                              },
                              step: 1,
                              rounded: "top",
                              setValue: (value) => $$props.setValue({ property: "width", value })
                            });
                          },
                          $$slots: { default: true }
                        });
                        var node_31 = sibling(node_30, 2);
                        Property(node_31, {
                          label: "Height",
                          children: ($$anchor7, $$slotProps4) => {
                            NumberInput($$anchor7, {
                              get value() {
                                return $$props.value.height;
                              },
                              step: 1,
                              rounded: "bottom",
                              setValue: (value) => $$props.setValue({ property: "height", value })
                            });
                          },
                          $$slots: { default: true }
                        });
                        append($$anchor6, fragment_52);
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_29, ($$render) => {
                    if (typeof $$props.value.width === "number") $$render(consequent_15);
                  });
                }
                append($$anchor4, fragment_46);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      };
      if_block(node_25, ($$render) => {
        if (get2(skewDimensionsPanel)) $$render(consequent_16);
      });
    }
    var node_32 = sibling(node_25, 2);
    {
      var consequent_21 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Interactivity",
          get expanded() {
            return $$props.expanded.interactive;
          },
          setExpanded: (val) => $$props.setExpanded?.("interactive", val),
          children: ($$anchor3, $$slotProps) => {
            Box($$anchor3, {
              gap: 6,
              padding: 8,
              children: ($$anchor4, $$slotProps2) => {
                var fragment_57 = root_60();
                var node_33 = first_child(fragment_57);
                {
                  var consequent_17 = ($$anchor5) => {
                    var fragment_58 = root_61();
                    var node_34 = first_child(fragment_58);
                    Property(node_34, {
                      label: "Event mode",
                      hint: "Enable interaction events for the Container. Touch, pointer and mouse. This now replaces the interactive property.",
                      children: ($$anchor6, $$slotProps3) => {
                        SelectMenu($$anchor6, {
                          get value() {
                            return $$props.value.eventMode;
                          },
                          options: [
                            { value: "none", label: "None" },
                            { value: "passive", label: "Passive" },
                            { value: "auto", label: "Auto" },
                            { value: "static", label: "Static" },
                            { value: "dynamic", label: "Dynamic" }
                          ],
                          setValue: (value) => $$props.setValue({ property: "eventMode", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                    var node_35 = sibling(node_34, 2);
                    Property(node_35, {
                      label: "Cursor",
                      children: ($$anchor6, $$slotProps3) => {
                        {
                          let $0 = user_derived(() => $$props.value.cursor ?? "");
                          let $1 = user_derived(() => [
                            ...$$props.value.cursor ? [] : [{ value: "", label: "" }],
                            { value: "auto", label: "Auto" },
                            { value: "default", label: "Default" },
                            { value: "none", label: "None" },
                            { value: "context-menu", label: "Context menu" },
                            { value: "help", label: "Help" },
                            { value: "pointer", label: "Pointer" },
                            { value: "progress", label: "Progress" },
                            { value: "wait", label: "Wait" },
                            { value: "cell", label: "Cell" },
                            { value: "crosshair", label: "Crosshair" },
                            { value: "text", label: "Text" },
                            { value: "vertical-text", label: "Vertical text" },
                            { value: "alias", label: "Alias" },
                            { value: "copy", label: "Copy" },
                            { value: "move", label: "Move" },
                            { value: "no-drop", label: "No drop" },
                            { value: "not-allowed", label: "Not allowed" },
                            { value: "all-scroll", label: "All scroll" },
                            { value: "zoom-in", label: "Zoom in" },
                            { value: "zoom-out", label: "Zoom out" },
                            { value: "grab", label: "Grab" },
                            { value: "grabbing", label: "Grabbing" }
                          ]);
                          SelectMenu($$anchor6, {
                            get value() {
                              return get2($0);
                            },
                            get options() {
                              return get2($1);
                            },
                            setValue: (value) => $$props.setValue({ property: "cursor", value: value === "" ? void 0 : value })
                          });
                        }
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor5, fragment_58);
                  };
                  if_block(node_33, ($$render) => {
                    if (typeof $$props.value.eventMode === "string") $$render(consequent_17);
                  });
                }
                var node_36 = sibling(node_33, 2);
                {
                  var consequent_18 = ($$anchor5) => {
                    Property($$anchor5, {
                      children: ($$anchor6, $$slotProps3) => {
                        CheckboxInput($$anchor6, {
                          get value() {
                            return $$props.value.interactive;
                          },
                          hint: "Enable interaction events for the Container. Touch, pointer and mouse",
                          setValue: (value) => $$props.setValue({ property: "interactive", value }),
                          children: ($$anchor7, $$slotProps4) => {
                            next();
                            var text_3 = text("Interactive");
                            append($$anchor7, text_3);
                          },
                          $$slots: { default: true }
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_36, ($$render) => {
                    if (typeof $$props.value.interactive === "boolean") $$render(consequent_18);
                  });
                }
                var node_37 = sibling(node_36, 2);
                {
                  var consequent_19 = ($$anchor5) => {
                    Property($$anchor5, {
                      children: ($$anchor6, $$slotProps3) => {
                        CheckboxInput($$anchor6, {
                          get value() {
                            return $$props.value.buttonMode;
                          },
                          hint: "If enabled, the mouse cursor use the pointer behavior when hovered over the Container if it is interactive Setting this changes the 'cursor' property to 'pointer'.",
                          setValue: (value) => $$props.setValue({ property: "buttonMode", value }),
                          children: ($$anchor7, $$slotProps4) => {
                            next();
                            var text_4 = text("Button mode");
                            append($$anchor7, text_4);
                          },
                          $$slots: { default: true }
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_37, ($$render) => {
                    if (typeof $$props.value.buttonMode === "boolean") $$render(consequent_19);
                  });
                }
                var node_38 = sibling(node_37, 2);
                {
                  var consequent_20 = ($$anchor5) => {
                    Property($$anchor5, {
                      children: ($$anchor6, $$slotProps3) => {
                        CheckboxInput($$anchor6, {
                          get value() {
                            return $$props.value.interactiveChildren;
                          },
                          hint: "Determines if the children to the Container can be clicked/touched Setting this to false allows PixiJS to bypass a recursive hitTest function",
                          setValue: (value) => $$props.setValue({ property: "interactiveChildren", value }),
                          children: ($$anchor7, $$slotProps4) => {
                            next();
                            var text_5 = text("Interactive children");
                            append($$anchor7, text_5);
                          },
                          $$slots: { default: true }
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_38, ($$render) => {
                    if (typeof $$props.value.interactiveChildren === "boolean") $$render(consequent_20);
                  });
                }
                append($$anchor4, fragment_57);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      };
      if_block(node_32, ($$render) => {
        if (get2(interactivePanel)) $$render(consequent_21);
      });
    }
    append($$anchor, fragment);
    pop();
  }

  // ../../packages/pixi-panel/src/TextProperties.svelte
  var root_111 = from_tree([
    [
      "div",
      { class: "text svelte-13y1dql" },
      [
        "label",
        {
          class: "label svelte-13y1dql",
          for: "text",
          title: "Use shift-enter to create a multiline string"
        },
        "Text"
      ],
      " ",
      ,
    ]
  ]);
  var root_11 = from_tree([, , " ", , " ", ,], 1);
  var root_142 = from_tree([, , " ", ,], 1);
  var root_43 = from_tree([, , " ", , " ", , " ", , " ", ,], 1);
  var root_192 = from_tree([, , " ", ,], 1);
  var root_37 = from_tree([, , " ", , " ", ,], 1);
  var root_262 = from_tree([, , " ", , " ", , " ", , " ", , " ", ,], 1);
  var root_432 = from_tree([, , " ", ,], 1);
  var root_512 = from_tree([, , " ", , " ", , " ", , " ", ,], 1);
  var root_64 = from_tree([, , " ", ,], 1);
  var root31 = from_tree([, , " ", , " ", , " ", , " ", , " ", , " ", ,], 1);
  var $$css29 = {
    hash: "svelte-13y1dql",
    code: ".text.svelte-13y1dql {display:flex;align-items:center;padding-bottom:4px;& .label:where(.svelte-13y1dql) {flex-shrink:0;margin-right:8px;}}"
  };
  function TextProperties($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css29);
    let fontPanel = user_derived(() => typeof $$props.value.fontFamily === "string" || typeof $$props.value.fontSize === "number" || typeof $$props.value.fontStyle === "string" || typeof $$props.value.fontVariant === "string");
    let alignmentPanel = user_derived(() => typeof $$props.value.align === "string" || typeof $$props.value.textBaseline === "string");
    let spacingPanel = user_derived(() => typeof $$props.value.letterSpacing === "number");
    let dropShadowPanel = user_derived(() => typeof $$props.value.dropShadow === "boolean");
    let strokePanel = user_derived(() => typeof $$props.value.stroke === "string");
    const alignOptions = [
      { value: "left", label: "Left", icon: "text-left" },
      { value: "center", label: "Center", icon: "text-center" },
      { value: "right", label: "Right", icon: "text-right" },
      { value: "justify", label: "Justify", icon: "text-justify" }
    ];
    var fragment = root31();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor2) => {
        var div = root_111();
        var node_1 = sibling(child(div), 2);
        TextInput(node_1, {
          id: "text",
          get value() {
            return $$props.value.text;
          },
          oninput: (value) => $$props.setValue({ property: "text", value })
        });
        reset(div);
        append($$anchor2, div);
      };
      if_block(node, ($$render) => {
        if (typeof $$props.value.text === "string") $$render(consequent);
      });
    }
    var node_2 = sibling(node, 2);
    {
      var consequent_6 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Font",
          get expanded() {
            return $$props.expanded.font;
          },
          setExpanded: (val) => $$props.setExpanded?.("font", val),
          children: ($$anchor3, $$slotProps) => {
            Box($$anchor3, {
              gap: 6,
              padding: 8,
              children: ($$anchor4, $$slotProps2) => {
                var fragment_3 = root_43();
                var node_3 = first_child(fragment_3);
                {
                  var consequent_1 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Family",
                      hint: "The font family, can be a single font name, or a list of names where the first is the preferred font.",
                      children: ($$anchor6, $$slotProps3) => {
                        TextInput($$anchor6, {
                          get value() {
                            return $$props.value.fontFamily;
                          },
                          setValue: (value) => $$props.setValue({ property: "fontFamily", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_3, ($$render) => {
                    if (typeof $$props.value.fontFamily === "string") $$render(consequent_1);
                  });
                }
                var node_4 = sibling(node_3, 2);
                {
                  var consequent_2 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Size",
                      hint: "The font size",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.fontSize;
                          },
                          min: 0,
                          step: 1,
                          setValue: (value) => $$props.setValue({ property: "fontSize", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_4, ($$render) => {
                    if (typeof $$props.value.fontSize === "number") $$render(consequent_2);
                  });
                }
                var node_5 = sibling(node_4, 2);
                {
                  var consequent_3 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Style",
                      hint: "The font style",
                      children: ($$anchor6, $$slotProps3) => {
                        Grid($$anchor6, {
                          cols: 3,
                          children: ($$anchor7, $$slotProps4) => {
                            var fragment_10 = root_11();
                            var node_6 = first_child(fragment_10);
                            {
                              let $0 = user_derived(() => $$props.value.fontStyle === "normal");
                              ToggleButton(node_6, {
                                label: "Normal",
                                get value() {
                                  return get2($0);
                                },
                                rounded: "left",
                                setValue: () => $$props.setValue({ property: "fontStyle", value: "normal" })
                              });
                            }
                            var node_7 = sibling(node_6, 2);
                            {
                              let $0 = user_derived(() => $$props.value.fontStyle === "italic");
                              ToggleButton(node_7, {
                                icon: "italic",
                                label: "Italic",
                                get value() {
                                  return get2($0);
                                },
                                rounded: "none",
                                setValue: () => $$props.setValue({ property: "fontStyle", value: "italic" })
                              });
                            }
                            var node_8 = sibling(node_7, 2);
                            {
                              let $0 = user_derived(() => $$props.value.fontStyle === "oblique");
                              ToggleButton(node_8, {
                                label: "Oblique",
                                get value() {
                                  return get2($0);
                                },
                                rounded: "right",
                                setValue: () => $$props.setValue({ property: "fontStyle", value: "oblique" })
                              });
                            }
                            append($$anchor7, fragment_10);
                          },
                          $$slots: { default: true }
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_5, ($$render) => {
                    if (typeof $$props.value.fontStyle === "string") $$render(consequent_3);
                  });
                }
                var node_9 = sibling(node_5, 2);
                {
                  var consequent_4 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Variant",
                      hint: "The font variant",
                      children: ($$anchor6, $$slotProps3) => {
                        Grid($$anchor6, {
                          cols: 2,
                          children: ($$anchor7, $$slotProps4) => {
                            var fragment_13 = root_142();
                            var node_10 = first_child(fragment_13);
                            {
                              let $0 = user_derived(() => $$props.value.fontVariant === "normal");
                              ToggleButton(node_10, {
                                label: "Normal",
                                get value() {
                                  return get2($0);
                                },
                                rounded: "left",
                                setValue: () => $$props.setValue({ property: "fontVariant", value: "normal" })
                              });
                            }
                            var node_11 = sibling(node_10, 2);
                            {
                              let $0 = user_derived(() => $$props.value.fontVariant === "small-caps");
                              ToggleButton(node_11, {
                                icon: "small-caps",
                                label: "Small Caps",
                                get value() {
                                  return get2($0);
                                },
                                rounded: "right",
                                setValue: () => $$props.setValue({ property: "fontVariant", value: "small-caps" })
                              });
                            }
                            append($$anchor7, fragment_13);
                          },
                          $$slots: { default: true }
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_9, ($$render) => {
                    if (typeof $$props.value.fontVariant === "string") $$render(consequent_4);
                  });
                }
                var node_12 = sibling(node_9, 2);
                {
                  var consequent_5 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Weight",
                      hint: "The font weight",
                      children: ($$anchor6, $$slotProps3) => {
                        SelectMenu($$anchor6, {
                          get value() {
                            return $$props.value.fontWeight;
                          },
                          options: [
                            "normal",
                            "bold",
                            "bolder",
                            "lighter",
                            "100",
                            "200",
                            "300",
                            "400",
                            "500",
                            "600",
                            "700",
                            "800",
                            "900"
                          ],
                          setValue: (value) => $$props.setValue({ property: "fontWeight", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_12, ($$render) => {
                    if (typeof $$props.value.fontWeight === "string") $$render(consequent_5);
                  });
                }
                append($$anchor4, fragment_3);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      };
      if_block(node_2, ($$render) => {
        if (get2(fontPanel)) $$render(consequent_6);
      });
    }
    var node_13 = sibling(node_2, 2);
    {
      var consequent_9 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Alignment",
          get expanded() {
            return $$props.expanded.alignment;
          },
          setExpanded: (val) => $$props.setExpanded?.("alignment", val),
          children: ($$anchor3, $$slotProps) => {
            Box($$anchor3, {
              gap: 6,
              padding: 8,
              children: ($$anchor4, $$slotProps2) => {
                var fragment_18 = root_192();
                var node_14 = first_child(fragment_18);
                {
                  var consequent_7 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Align",
                      hint: "Alignment for multiline text, does not affect single line text",
                      children: ($$anchor6, $$slotProps3) => {
                        SelectMenu($$anchor6, {
                          get value() {
                            return $$props.value.align;
                          },
                          get options() {
                            return alignOptions;
                          },
                          setValue: (value) => $$props.setValue({ property: "align", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_14, ($$render) => {
                    if (typeof $$props.value.align === "string") $$render(consequent_7);
                  });
                }
                var node_15 = sibling(node_14, 2);
                {
                  var consequent_8 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Baseline",
                      hint: "The baseline of the text that is rendered.",
                      children: ($$anchor6, $$slotProps3) => {
                        SelectMenu($$anchor6, {
                          get value() {
                            return $$props.value.textBaseline;
                          },
                          options: [
                            "alphabetic",
                            "top",
                            "hanging",
                            "middle",
                            "ideographic",
                            "bottom"
                          ],
                          setValue: (value) => $$props.setValue({ property: "textBaseline", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_15, ($$render) => {
                    if (typeof $$props.value.textBaseline === "string") $$render(consequent_8);
                  });
                }
                append($$anchor4, fragment_18);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      };
      if_block(node_13, ($$render) => {
        if (get2(alignmentPanel)) $$render(consequent_9);
      });
    }
    var node_16 = sibling(node_13, 2);
    {
      var consequent_16 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Spacing",
          get expanded() {
            return $$props.expanded.spacing;
          },
          setExpanded: (val) => $$props.setExpanded?.("spacing", val),
          children: ($$anchor3, $$slotProps) => {
            Box($$anchor3, {
              gap: 2,
              children: ($$anchor4, $$slotProps2) => {
                var fragment_25 = root_262();
                var node_17 = first_child(fragment_25);
                {
                  var consequent_10 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Leading",
                      hint: "The space between lines",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.leading;
                          },
                          min: 0,
                          step: 0.1,
                          setValue: (value) => $$props.setValue({ property: "leading", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_17, ($$render) => {
                    if (typeof $$props.value.leading === "number") $$render(consequent_10);
                  });
                }
                var node_18 = sibling(node_17, 2);
                {
                  var consequent_11 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Letter spacing",
                      hint: "The amount of spacing between letters",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.letterSpacing;
                          },
                          step: 0.1,
                          setValue: (value) => $$props.setValue({ property: "letterSpacing", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_18, ($$render) => {
                    if (typeof $$props.value.letterSpacing === "number") $$render(consequent_11);
                  });
                }
                var node_19 = sibling(node_18, 2);
                {
                  var consequent_12 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Line height",
                      hint: "The line height, a number that represents the vertical space that a letter uses",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.lineHeight;
                          },
                          step: 1,
                          setValue: (value) => $$props.setValue({ property: "lineHeight", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_19, ($$render) => {
                    if (typeof $$props.value.lineHeight === "number") $$render(consequent_12);
                  });
                }
                var node_20 = sibling(node_19, 2);
                {
                  var consequent_13 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Padding",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.padding;
                          },
                          min: 0,
                          step: 1,
                          setValue: (value) => $$props.setValue({ property: "padding", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_20, ($$render) => {
                    if (typeof $$props.value.padding === "number") $$render(consequent_13);
                  });
                }
                var node_21 = sibling(node_20, 2);
                {
                  var consequent_14 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "White Space",
                      hint: "Determines whether newlines & spaces are collapsed or preserved",
                      children: ($$anchor6, $$slotProps3) => {
                        Grid($$anchor6, {
                          cols: 3,
                          children: ($$anchor7, $$slotProps4) => {
                            var fragment_36 = root_37();
                            var node_22 = first_child(fragment_36);
                            {
                              let $0 = user_derived(() => $$props.value.whiteSpace === "normal");
                              ToggleButton(node_22, {
                                label: "Normal",
                                get value() {
                                  return get2($0);
                                },
                                rounded: "left",
                                setValue: () => $$props.setValue({ property: "whiteSpace", value: "normal" })
                              });
                            }
                            var node_23 = sibling(node_22, 2);
                            {
                              let $0 = user_derived(() => $$props.value.whiteSpace === "pre");
                              ToggleButton(node_23, {
                                label: "Pre",
                                get value() {
                                  return get2($0);
                                },
                                rounded: "none",
                                setValue: () => $$props.setValue({ property: "whiteSpace", value: "pre" })
                              });
                            }
                            var node_24 = sibling(node_23, 2);
                            {
                              let $0 = user_derived(() => $$props.value.whiteSpace === "pre-line");
                              ToggleButton(node_24, {
                                label: "Pre Line",
                                get value() {
                                  return get2($0);
                                },
                                rounded: "right",
                                setValue: () => $$props.setValue({ property: "whiteSpace", value: "pre-line" })
                              });
                            }
                            append($$anchor7, fragment_36);
                          },
                          $$slots: { default: true }
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_21, ($$render) => {
                    if (typeof $$props.value.whiteSpace === "string") $$render(consequent_14);
                  });
                }
                var node_25 = sibling(node_21, 2);
                {
                  var consequent_15 = ($$anchor5) => {
                    Property($$anchor5, {
                      children: ($$anchor6, $$slotProps3) => {
                        CheckboxInput($$anchor6, {
                          get value() {
                            return $$props.value.trim;
                          },
                          hint: "Trim transparent borders",
                          setValue: (value) => $$props.setValue({ property: "trim", value }),
                          children: ($$anchor7, $$slotProps4) => {
                            next();
                            var text2 = text("Trim");
                            append($$anchor7, text2);
                          },
                          $$slots: { default: true }
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_25, ($$render) => {
                    if (typeof $$props.value.trim === "boolean") $$render(consequent_15);
                  });
                }
                append($$anchor4, fragment_25);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      };
      if_block(node_16, ($$render) => {
        if (get2(spacingPanel)) $$render(consequent_16);
      });
    }
    var node_26 = sibling(node_16, 2);
    {
      var consequent_19 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Word wrap",
          get value() {
            return $$props.value.wordWrap;
          },
          get expanded() {
            return $$props.expanded.wordWrap;
          },
          setValue: (value) => $$props.setValue({ property: "wordWrap", value }),
          setExpanded: (val) => $$props.setExpanded?.("wordWrap", val),
          children: ($$anchor3, $$slotProps) => {
            Box($$anchor3, {
              gap: 6,
              padding: 8,
              children: ($$anchor4, $$slotProps2) => {
                var fragment_41 = root_432();
                var node_27 = first_child(fragment_41);
                {
                  var consequent_17 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Width",
                      hint: "The width at which text will wrap, it needs wordWrap to be set to true",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.wordWrapWidth;
                          },
                          min: 0,
                          step: 1,
                          setValue: (value) => $$props.setValue({ property: "wordWrapWidth", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_27, ($$render) => {
                    if (typeof $$props.value.wordWrapWidth === "number") $$render(consequent_17);
                  });
                }
                var node_28 = sibling(node_27, 2);
                {
                  var consequent_18 = ($$anchor5) => {
                    Property($$anchor5, {
                      children: ($$anchor6, $$slotProps3) => {
                        CheckboxInput($$anchor6, {
                          get value() {
                            return $$props.value.breakWords;
                          },
                          hint: "Indicates if lines can be wrapped within words, it needs wordWrap to be set to true.",
                          setValue: (value) => $$props.setValue({ property: "breakWords", value }),
                          children: ($$anchor7, $$slotProps4) => {
                            next();
                            var text_1 = text("Break words");
                            append($$anchor7, text_1);
                          },
                          $$slots: { default: true }
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_28, ($$render) => {
                    if (typeof $$props.value.breakWords === "boolean") $$render(consequent_18);
                  });
                }
                append($$anchor4, fragment_41);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      };
      if_block(node_26, ($$render) => {
        if (typeof $$props.value.wordWrap === "boolean") $$render(consequent_19);
      });
    }
    var node_29 = sibling(node_26, 2);
    {
      var consequent_25 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Drop shadow",
          get value() {
            return $$props.value.dropShadow;
          },
          get expanded() {
            return $$props.expanded.dropShadow;
          },
          setValue: (value) => $$props.setValue({ property: "dropShadow", value }),
          setExpanded: (val) => $$props.setExpanded?.("dropShadow", val),
          children: ($$anchor3, $$slotProps) => {
            Box($$anchor3, {
              gap: 6,
              padding: 8,
              children: ($$anchor4, $$slotProps2) => {
                var fragment_48 = root_512();
                var node_30 = first_child(fragment_48);
                {
                  var consequent_20 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Alpha",
                      hint: "Set alpha for the drop shadow",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.dropShadowAlpha;
                          },
                          step: 0.01,
                          min: 0,
                          max: 1,
                          setValue: (value) => $$props.setValue({ property: "dropShadowAlpha", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_30, ($$render) => {
                    if (typeof $$props.value.dropShadowAlpha === "number") $$render(consequent_20);
                  });
                }
                var node_31 = sibling(node_30, 2);
                {
                  var consequent_21 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Color",
                      hint: "A fill style to be used on the dropshadow",
                      children: ($$anchor6, $$slotProps3) => {
                        TextInput($$anchor6, {
                          get value() {
                            return $$props.value.dropShadowColor;
                          },
                          setValue: (value) => $$props.setValue({ property: "dropShadowColor", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_31, ($$render) => {
                    if (typeof $$props.value.dropShadowColor === "string") $$render(consequent_21);
                  });
                }
                var node_32 = sibling(node_31, 2);
                {
                  var consequent_22 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Angle",
                      hint: "Set a angle of the drop shadow",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.dropShadowAngle;
                          },
                          step: 0.01,
                          suffix: "r",
                          setValue: (value) => $$props.setValue({ property: "dropShadowAngle", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_32, ($$render) => {
                    if (typeof $$props.value.dropShadowAngle === "number") $$render(consequent_22);
                  });
                }
                var node_33 = sibling(node_32, 2);
                {
                  var consequent_23 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Blur",
                      hint: "Set a shadow blur radius",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.dropShadowBlur;
                          },
                          min: 0,
                          step: 0.1,
                          setValue: (value) => $$props.setValue({ property: "dropShadowBlur", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_33, ($$render) => {
                    if (typeof $$props.value.dropShadowBlur === "number") $$render(consequent_23);
                  });
                }
                var node_34 = sibling(node_33, 2);
                {
                  var consequent_24 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Distance",
                      hint: "Set a distance of the drop shadow",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.dropShadowDistance;
                          },
                          step: 0.1,
                          min: 0,
                          setValue: (value) => $$props.setValue({ property: "dropShadowDistance", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_34, ($$render) => {
                    if (typeof $$props.value.dropShadowDistance === "number") $$render(consequent_24);
                  });
                }
                append($$anchor4, fragment_48);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      };
      if_block(node_29, ($$render) => {
        if (get2(dropShadowPanel)) $$render(consequent_25);
      });
    }
    var node_35 = sibling(node_29, 2);
    {
      var consequent_28 = ($$anchor2) => {
        Panel($$anchor2, {
          title: "Stroke",
          get expanded() {
            return $$props.expanded.stroke;
          },
          setExpanded: (val) => $$props.setExpanded?.("stroke", val),
          children: ($$anchor3, $$slotProps) => {
            Box($$anchor3, {
              gap: 6,
              padding: 8,
              children: ($$anchor4, $$slotProps2) => {
                var fragment_61 = root_64();
                var node_36 = first_child(fragment_61);
                {
                  var consequent_26 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Stroke",
                      hint: "A canvas fillstyle that will be used on the text stroke",
                      children: ($$anchor6, $$slotProps3) => {
                        TextInput($$anchor6, {
                          get value() {
                            return $$props.value.stroke;
                          },
                          setValue: (value) => $$props.setValue({ property: "stroke", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_36, ($$render) => {
                    if (typeof $$props.value.stroke === "string") $$render(consequent_26);
                  });
                }
                var node_37 = sibling(node_36, 2);
                {
                  var consequent_27 = ($$anchor5) => {
                    Property($$anchor5, {
                      label: "Thickness",
                      hint: "A number that represents the thickness of the stroke",
                      children: ($$anchor6, $$slotProps3) => {
                        NumberInput($$anchor6, {
                          get value() {
                            return $$props.value.strokeThickness;
                          },
                          min: 0,
                          step: 0.1,
                          setValue: (value) => $$props.setValue({ property: "strokeThickness", value })
                        });
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_37, ($$render) => {
                    if (typeof $$props.value.strokeThickness === "number") $$render(consequent_27);
                  });
                }
                append($$anchor4, fragment_61);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      };
      if_block(node_35, ($$render) => {
        if (get2(strokePanel)) $$render(consequent_28);
      });
    }
    append($$anchor, fragment);
    pop();
  }

  // ../../packages/pixi-panel/src/components.ts
  Object.assign(components_default, {
    PixiInstructions: Instructions,
    PixiSceneGraph: SceneGraphLegacy,
    PixiObjectProperties: ObjectProperties,
    PixiTextProperties: TextProperties
  });

  // ../../packages/pixi-panel/src/PixiPanel.svelte
  var root_9 = from_tree([["div", null, ,]]);
  var root_112 = from_tree([, , " ", ,], 1);
  var $$css30 = {
    hash: "svelte-185k7xt",
    code: "html {height:100%;}body {height:100%;margin:0;}"
  };
  function PixiPanel($$anchor, $$props) {
    push($$props, true);
    append_styles($$anchor, $$css30);
    let targets = state(proxy([""]));
    let available = new SvelteSet();
    let refresh = state(void 0);
    let errorMessage = state("");
    let active = state(void 0);
    user_effect(() => $$props.createListener(
      (update2) => {
        set(targets, update2, true);
      },
      (fn) => {
        set(refresh, fn, true);
      }
    ));
    async function uiConnect() {
      const module = await Promise.resolve().then(() => __toESM(require_ui_connect()));
      return module.default;
    }
    async function uiLegacy() {
      const module = await Promise.resolve().then(() => __toESM(require_ui_legacy()));
      return module.default;
    }
    let timer;
    function addConnection(target) {
      available.add(target);
      set(active, target, true);
      set(errorMessage, "");
      clearTimeout(timer);
    }
    function onrestore() {
      clearTimeout(timer);
    }
    function onerror(target, err) {
      console.warn(err);
      clearTimeout(timer);
      get2(refresh)?.();
      timer = window.setTimeout(
        () => {
          set(errorMessage, err.message, true);
          if (get2(active) === target && !get2(targets).includes(target)) {
            available.delete(target);
            set(active, void 0);
          }
          setTimeout(
            () => {
              if (set(errorMessage, err.message, true)) {
                set(errorMessage, "");
              }
            },
            5e3
          );
        },
        1e3
      );
    }
    Base($$anchor, {
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_112();
        var node = first_child(fragment_1);
        each(node, 16, () => get2(targets), (target) => target, ($$anchor3, target) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          {
            var consequent = ($$anchor4) => {
              TriggerProvider($$anchor4, {
                ontrigger: () => addConnection(target),
                children: ($$anchor5, $$slotProps2) => {
                  {
                    let $0 = user_derived(() => $$props.createBridge(target));
                    Connect($$anchor5, {
                      ui: "connect",
                      inject: uiConnect,
                      get bridge() {
                        return get2($0);
                      }
                    });
                  }
                },
                $$slots: { default: true }
              });
            };
            if_block(node_1, ($$render) => {
              if (target !== get2(active)) $$render(consequent);
            });
          }
          append($$anchor3, fragment_2);
        });
        var node_2 = sibling(node, 2);
        {
          var consequent_1 = ($$anchor3) => {
            Warning($$anchor3, {
              get message() {
                return get2(errorMessage);
              }
            });
          };
          var consequent_2 = ($$anchor3) => {
            Instructions($$anchor3, {});
          };
          var alternate = ($$anchor3) => {
            var fragment_7 = comment();
            var node_3 = first_child(fragment_7);
            key(node_3, () => get2(active), ($$anchor4) => {
              const target = user_derived(() => get2(active));
              {
                let $0 = user_derived(() => $$props.createBridge(get2(target)));
                Connect($$anchor4, {
                  ui: "pixi",
                  inject: uiLegacy,
                  get bridge() {
                    return get2($0);
                  },
                  onrestore,
                  onerror: (err) => onerror(get2(target), err),
                  children: ($$anchor5, $$slotProps2) => {
                    var div = root_9();
                    var node_4 = child(div);
                    Warning(node_4, { message: "Connecting taking longer than expected..." });
                    reset(div);
                    transition(1, div, () => fade, () => ({ delay: 1e3, duration: 100 }));
                    append($$anchor5, div);
                  },
                  $$slots: { default: true }
                });
              }
            });
            append($$anchor3, fragment_7);
          };
          if_block(node_2, ($$render) => {
            if (get2(errorMessage)) $$render(consequent_1);
            else if (get2(active) === void 0) $$render(consequent_2, 1);
            else $$render(alternate, -1);
          });
        }
        append($$anchor2, fragment_1);
      },
      $$slots: { default: true }
    });
    pop();
  }

  // src/pixi-panel.ts
  mount(PixiPanel, {
    target: document.body,
    props: { createListener, createBridge }
  });
  function createListener(setUrls, setRefresh) {
    function refresh() {
      chrome.devtools.inspectedWindow.getResources((resources) => {
        let firstDocument = true;
        const frameUrls = /* @__PURE__ */ new Set([""]);
        for (const resource of resources) {
          if (resource.type === "document") {
            if (firstDocument) {
              firstDocument = false;
            } else {
              frameUrls.add(resource.url);
            }
          }
        }
        setUrls(Array.from(frameUrls));
      });
    }
    refresh();
    setRefresh(refresh);
    function callback(resource) {
      if (resource.type === "document") {
        refresh();
      }
    }
    chrome.devtools.inspectedWindow.onResourceAdded.addListener(callback);
    return () => {
      chrome.devtools.inspectedWindow.onResourceAdded.removeListener(callback);
    };
  }
  function createBridge(frameURL) {
    return (code) => new Promise((resolve, reject) => {
      chrome.devtools.inspectedWindow.eval(
        code,
        frameURL ? { frameURL } : {},
        (result, err) => {
          if (err) {
            if (err instanceof Error) {
              reject(err);
            }
            const parts = err.description?.split("%s") ?? [];
            if (parts.length > 1 && Array.isArray(err.details)) {
              let message = "";
              for (let i = 0; i < parts.length; i++) {
                message += parts[i];
                if (i > 0 && err.details && err.details[i - 1] !== void 0) {
                  message += JSON.stringify(err.details[i - 1]);
                }
              }
              reject(new Error(message));
            }
            reject(new Error(err.value || err.description || err.code));
          }
          resolve(result);
        }
      );
    });
  }
  if (false) {
    new EventSource("http://localhost:10808/esbuild").addEventListener(
      "change",
      () => {
        Promise.try(
          () => chrome.devtools.inspectedWindow.eval("location.reload()")
        );
        window.location.reload();
      }
    );
  }
})();
