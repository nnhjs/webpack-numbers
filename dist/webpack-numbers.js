!(function (e, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r(require("lodash")))
    : "function" == typeof define && define.amd
    ? define(["lodash"], r)
    : "object" == typeof exports
    ? (exports.webpackNumbers = r(require("lodash")))
    : (e.webpackNumbers = r(e._));
})(this, (e) =>
  (() => {
    "use strict";
    var r = {
        607: (r) => {
          r.exports = e;
        },
      },
      o = {};
    function t(e) {
      var n = o[e];
      if (void 0 !== n) return n.exports;
      var u = (o[e] = { exports: {} });
      return r[e](u, u.exports, t), u.exports;
    }
    (t.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return t.d(r, { a: r }), r;
    }),
      (t.d = (e, r) => {
        for (var o in r)
          t.o(r, o) &&
            !t.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
      }),
      (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (t.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        t.r(n), t.d(n, { numToWord: () => u, wordToNum: () => d });
        var e = t(607),
          r = t.n(e);
        const o = JSON.parse(
          '[{"num":1,"word":"One"},{"num":2,"word":"Two"},{"num":3,"word":"Three"},{"num":4,"word":"Four"},{"num":5,"word":"Five"},{"num":0,"word":"Zero"}]'
        );
        function u(e) {
          return r().reduce(o, (r, o) => (o.num === e ? o.word : r), "");
        }
        function d(e) {
          return r().reduce(
            o,
            (r, o) => (o.word === e && e.toLowerCase() ? o.num : r),
            -1
          );
        }
      })(),
      n
    );
  })()
);
